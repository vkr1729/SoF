# Frontier Plan Review — Expansion Pack Implementation Plan

**Sources:** `.workflow/REQUIREMENTS.md`, `.workflow/IMPLEMENTATION_PLAN.md`
**Date:** 2026-09-19
**Method:** Checked every plan step against ground truth in `js/storage.js`, `js/quiz-engine.js`, `js/app.js`, `data/badges.js`, `js/mistake-bank.js`, `js/weak-areas.js`, `sw.js`.

---

## P0 — Plan breaks exam mode if followed as written

### 1. Set-20 Achievers conflicts with hardcoded `set === 10` logic (blocker)

The plan (§Phase 1) declares "Set 20 in each subject is the dedicated Achievers Section (HOTS, 2 marks)." The codebase hardcodes Achievers as `set === 10` in **five** places, none of which the plan mentions:

- `quiz-engine.js#getQuestionWeight` — `q.set === 10 ? 2 : 1`. Set-20 HOTS would score as 1-mark core questions.
- `startOfficialExam` — `hotPool = bank.filter(q => q.set === 10)`. Set-20 HOTS never gets sampled as Achievers; the 5-Q Achievers section stays frozen at old content.
- `jumpToSection` + section-tab rendering — same `set === 10` predicate. Navigation to Set-20 HOTS lands in the wrong tab.
- `tests/banks.test.mjs` + `engine.test.mjs` assert the set-10 convention.

**Fix (pick one, state it in the plan before Phase 1 starts):**
- (a) Simplest, recommended: Sets 11–20 mirror the existing shape — each set is 10 core Qs, and Achievers stays defined as `set % 10 === 0` (10 and 20). One-line change to each predicate, backward compatible.
- (b) Or: add explicit `q.marks` / `q.section: 'achievers'` on new questions and prefer it over the set-number heuristic (the `getQuestionWeight` comment already says "Explicit q.marks wins when present" — extend that pattern to sampling and navigation).

Either way, Phase 1 must include updating `getQuestionWeight`, exam sampling, `jumpToSection`, section tabs, and the two test files. Currently Phase 1 touches only `data/` files — that sequencing is wrong.

### 2. Plan references a method that does not exist

Phase 2 repeatedly says `checkPracticeAnswer()`. Ground truth: the method is `handlePracticeSelect()` (`quiz-engine.js:190`), which calls `recordAttempt` + `addHearts` directly. Anyone implementing from the plan edits the wrong (nonexistent) function. Rename all references to `handlePracticeSelect`. Same check: `renderPracticeQuestion` and `renderPracticeSummary` names are correct.

---

## P0 — Revision sandbox has four unguarded side-channels

The plan guards `recordAttempt` and `markSetCompleted` only. Ground truth shows more write paths per practice answer:

1. **Hearts bypass.** `handlePracticeSelect` calls `addHearts(±1)` directly (lines 203–207), not via `recordAttempt`. An `isRevision` guard inside `recordAttempt` alone still mutates hearts. Guard must be caller-side: early branch in `handlePracticeSelect` before *both* `recordAttempt` and `addHearts`.
2. **`startCustomWorkout` bypass.** `weak-areas.js:128` launches workouts via `startCustomWorkout`, which never checks `isSetCompleted` and always records attempts. A workout built from completed-set questions farms XP/topicStats through the revision freeze. Plan never mentions `weak-areas.js`. Fix: propagate `isRevision` into `startCustomWorkout` (caller passes it when all source questions are from completed sets), or document workouts as intentionally always-rewarded and say so.
3. **Mistake Bank mastery farm.** `markMistakeMastered` awards +50 XP/+25 Emeralds unconditionally, and revision wrong answers (if `recordAttempt` is reached) create *new* `mistakes` rows via `addMistake`. The FRONTIER_REQUIREMENTS_REVIEW already flagged this; the plan dropped it. Fix: in revision mode, skip `recordAttempt` entirely (no new mistake rows), and either skip `markMistakeMastered` rewards for revision-era IDs or require first-time mastery only.
4. **Hardcoded reward copy.** `handlePracticeSelect` renders `+10 Emeralds 💎 | +25 XP` and the summary renders `+50 Emeralds` unconditionally. In revision mode this promises rewards the sandbox withholds — a 7-year-old reads it as a broken promise. Phase 2 must include conditional feedback/summary copy ("Revision Complete • Original Score Preserved", 0 XP line).

Recommended guard shape (caller-side, not signature threading): set `this.isRevision` in `startPracticeSet`/`startCustomWorkout`; in `handlePracticeSelect` and `renderPracticeSummary`, branch on it *before* any `storageManager` write. The plan's `recordAttempt(..., isRevision=false)` param is harmless defense-in-depth but insufficient alone — say that explicitly so the implementer doesn't stop at the storage layer.

---

## P1 — Dependency / sequencing risks

1. **Service-worker all-or-nothing install.** `sw.js` uses `cache.addAll(ASSETS)` — if any listed asset 404s, the *entire* install fails and the PWA goes offline-broken. Phase 3 adds 5 images but never mentions `sw.js`. Recommendation: do **not** add `assets/minecraft/*` to the precache `ASSETS` list; the existing runtime fetch handler (`cache.put` on fetch) already lazy-caches them on first view, which is failure-isolated. If precaching is wanted, bump `CACHE = 'sof-quest-v2'` in the same commit (plan omits the version bump — without it, existing iPads never fetch the new shell).
2. **Phase 1 verification is atomic, work is incremental.** The Phase 1 check demands "all 600 total questions" valid. If sets land per-subject (sensible for 300 hand-written Qs), the gate fails until the last subject lands. Make the validator per-subject (`--subject=IGKO`) plus a final full-bank gate, so partial progress stays green.
3. **`app.js` hardcodes `totalSets = 10`** (line 88) plus title copy "(10 Sets x 10 Questions)". Plan covers dynamic set count — good — but also update the title string and the `isNext` unlock chain (currently linear through set 10; sets 11+ must chain from set 10's completion, else they show as neither done nor next).
4. **Phase order itself is sound** (data → sandbox → art → verify). Keep it. But move the Achievers-predicate fix (§P0.1) into Phase 1 — it is a data-shape decision, not a Phase 2 concern.
5. **`importJson`/quota hardening** from the requirements review (mistake cap 200, `SOF_STORAGE_OK` banner) is half-adopted: plan caps `mistakes` but not `examHistory` (unbounded `unshift`, grows with every mock). Cap both (200/20) in the same `storage.js` edit — one-line follow-up, no separate phase needed.

---

## P1 — Over-engineering / scope trims

1. **Don't replace the SVG mascots; enhance them.** `data/badges.js` already ships five offline, zero-byte-network inline `avatarSvg` mascots that render everywhere today (HUD, picker, speech bubble). The plan's "high-res renders + fallback SVGs" inverts the stack. Cheaper and safer: add an *optional* `img` field to `MINECRAFT_MASCOTS`, render `<img>` with `onerror` fallback to the existing `icon`/`avatarSvg`, keep every current call site working unchanged. No schema migration, no broken HUD if an asset is missing.
2. **Asset budget is correctly sized — hold it.** <150 KB/mascot, <1.5 MB total, lazy-load outside the mission hub, never inside question/option cards. Add two acceptance lines the plan lacks: `prefers-reduced-motion` disables mascot animation, and mute state suppresses celebration audio. Both are near-free in `minecraft-theme.css` / `audio-manager.js`.
3. **Extend existing tests instead of a new silo.** `tests/banks.test.mjs` already validates schema/counts per set; `engine.test.mjs` covers sampling/weights. Prefer extending those (plus a `revision.test.mjs` for the double-run sandbox assertion) over a monolithic `tests/expansion_verification.js` that re-implements the same validators. If the new file stays, have it import shared validators rather than duplicating them.
4. **Exam-vs-revision interaction is decided but undocumented in the plan.** Decision Log #6 says exams always award XP. That leaves the known farming loop (Quick Exam re-runs bypass the revision freeze). Acceptable for the scale anchor — a 15-min timed mock *is* genuine effort — but the plan should state the rationale in one line so a future implementer doesn't "fix" it by freezing exams and killing mock incentives.

---

## Concrete patch checklist (suggested §3 for IMPLEMENTATION_PLAN.md)

- [ ] Phase 1: decide Achievers predicate (`set % 10 === 0` vs explicit `marks`/`section`), update `getQuestionWeight`, `startOfficialExam` pools, `jumpToSection`, section tabs, `banks.test.mjs`, `engine.test.mjs`.
- [ ] Phase 1: per-subject validator gate + full-600 final gate.
- [ ] Phase 2: rename `checkPracticeAnswer` → `handlePracticeSelect` throughout the plan.
- [ ] Phase 2: caller-side `isRevision` branch covering `recordAttempt`, `addHearts`, `markSetCompleted`, `addMistake` path, `markMistakeMastered` rewards, feedback/summary copy; propagate into `startCustomWorkout` or document the workout exception.
- [ ] Phase 2: `app.js` dynamic `totalSets` + title copy + unlock chain past set 10.
- [ ] Phase 2: cap `mistakes` (200) **and** `examHistory` (20).
- [ ] Phase 2: double-run simulation test (XP/Emeralds/hearts/`topicStats` bit-identical on re-attempt) — already specified, keep.
- [ ] Phase 3: optional `img` field with SVG fallback; do not precache images in `sw.js` (or bump `CACHE` version atomically); assert weight budget + reduced-motion + mute.
- [ ] Phase 4: extend `banks`/`engine` tests + new `revision` test over a from-scratch mega-file.

## Verdict

No redesign needed — the three-phase shape (data → sandbox → art) and the caller-side `isRevision` boundary are the right calls for a zero-backend PWA. But the plan as written ships two certain bugs (Achievers scoring/sampling for Set 20; wrong method name) and leaves four sandbox side-channels open. Fix the P0 items before implementation starts; the P1 items fit inside existing phases without new scope.
