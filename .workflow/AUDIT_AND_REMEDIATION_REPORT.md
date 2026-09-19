# Audit & Remediation Report — SOF Olympiad Class 2 Expansion Pack

**Date:** 2026-09-19
**Scope:** Adversarial code audit + direct remediation against `.workflow/REQUIREMENTS.md`
**Scale anchor respected:** Single-child (~7–8 yr), offline-first, LocalStorage-only, zero backend/auth. No scope expansion, no new dependencies, no build step.

**Baselines (pre-fix):** 600 questions present (200/subject, 20 sets × 10), 28/28 tests passing via `node --test tests/banks.test.mjs tests/engine.test.mjs tests/revision.test.mjs`. Revision sandbox, Achievers predicate (`set % 10 === 0`), quota caps (200/20), and mascot assets all implemented.

---

## Findings & Fixes (all applied directly)

### 1. Topic-label drift vs REQUIREMENTS §2 scope matrix [FIXED]
**Severity:** Medium — syllabus mismatch + zombie mastery keys.
New Sets 11–20 introduced 5 labels absent from the required topic lists, fragmenting `topicStats` / Smart Nudge keys (e.g. a child practicing set 7 "Sports & Games" and set 17 "Sports" would see two separate mastery cards):
- IGKO set 17 `Sports & Entertainment` → aligned to `Sports` (REQ: "Sports")
- IGKO set 19 `Current Affairs & Awareness` → aligned to `Current Affairs` (REQ: "Current Affairs")
- NSO set 4 `Food & Health` → aligned to `Food & Nutrition` (REQ: "Food & Nutrition")
- IMO set 9 `Patterns & Logic` → aligned to `Patterns` (REQ: "Patterns")
- IMO set 19 `Data Handling` → aligned to `Pictographs & Data` (REQ: "Pictographs & Data")
- IMO sets 8+17 merged to `Geometrical Shapes & Solids` (REQ: "Geometrical Shapes & Solids")

**Note:** a bulk rename initially corrupted the set-9 comment (`Patternsal`) and over-renamed set-7 topics; both were detected by re-listing topic keys and corrected with a set-scoped fix. Verified: exactly 10 topic keys per subject, matching REQ lists.
**Files:** `data/igko-questions.js`, `data/imo-questions.js`, `data/nso-questions.js`

### 2. Stale bank headers + README counts [FIXED]
**Severity:** Low — doc drift.
All three bank headers still read "10 Sets x 10 Questions = 100 Questions" despite holding 200 Qs; README claimed "300 Questions Across 30 Sets" and "Sets 1 to 10".
**Fix:** headers → "20 Sets x 10 Questions = 200 Questions"; README → "600 Questions Across 60 Sets", per-subject "20 sets × 10 Qs = 200", tree notes "Sets 1 to 20".
**Files:** `data/*.js` (headers), `README.md`

### 3. Service-worker cache would never update on deployed iPads [FIXED]
**Severity:** High — regression on update path.
`sw.js` still pinned `CACHE = 'sof-quest-v2'` while shipping new banks, engine, and image assets — existing installed iPads would keep serving the stale shell indefinitely.
**Fix:** bumped to `sof-quest-v3` so the new shell activates on next launch.
**File:** `sw.js`

### 4. Mission Map missing the required "🛡️ Revise Set" button [FIXED]
**Severity:** High — REQ §5 UI spec violation.
REQ §5 mandates completed sets show "Completed 💎" **with a distinct "🛡️ Revise Set" button**. Code rendered only a combined `Completed 💎 (Revise)` text label — no button element, no keyboard/ARIA access.
**Fix:** `renderMissions()` now renders status `Completed 💎` + a real `<button>🛡️ Revise Set</button>` (with `event.stopPropagation()`), `role="button"`, `tabindex`, and `aria-label`s. Locked sets are no longer clickable (previously `🔒` cards still fired `startMissionSet` on click) and now show honest `Locked` status instead of the misleading `Unlocked`.
**File:** `js/app.js`

### 5. Practice banner copy drifted from locked UI spec [FIXED]
**Severity:** Low — spec conformance.
REQ §5 locks the banner to `🛡️ Revision Mode — Scores & Rewards are Frozen`. Code rendered `📖 Revision Mode • Reviewing Set N`.
**Fix:** banner copy restored to the locked string (plus `role="status"` for screen readers).
**File:** `js/quiz-engine.js`

### 6. Revision badge tokens diverged from Archetype 2 design tokens [FIXED]
**Severity:** Low — visual spec conformance.
REQ §5 locks the revision badge to amber (`background: rgba(245,158,11,0.15); color: #f59e0b; border: 1px solid #f59e0b; border-radius: 20px`). CSS used a blue scheme.
**Fix:** `.revision-banner` / `.revision-badge-pill` now use the exact locked amber tokens.
**File:** `css/minecraft-theme.css`

### 7. Broken mascot images leave empty avatar boxes (no fallback) [FIXED]
**Severity:** Medium — offline robustness.
REQ demands graceful image fallback. If any `assets/minecraft/*.jpg` 404s or corrupts, the HUD, speech bubble, and picker rendered empty boxes with no recovery (IMPLEMENTATION_PLAN's `onerror` fallback was never implemented).
**Fix:** all mascot `<img>` renders carry `data-mascot-fallback="<id>"`; one delegated capture-phase `error` listener in `AppController.bindMascotImageFallbacks()` (wired in `init()`) swaps failures for the emoji icon via `textContent` — no bank text inside inline handlers. Quiz speech bubble also escapes `icon` output and defaults to `⛏️`.
**Files:** `js/app.js`, `js/quiz-engine.js`

### 8. `recordAttempt` / `saveExamResult` crash on malformed input [FIXED]
**Severity:** Medium — edge-case crash.
`recordAttempt(null, ...)` threw on `${question.subject}`; `saveExamResult({})` wrote `NaN%` percentage rows into capped exam history.
**Fix:** early-return guards — non-object questions ignored; results with non-finite score/total or `total <= 0` rejected before any write.
**File:** `js/storage.js`

---

## Adversarial probes that PASSED (no change needed)
- **Revision sandbox integrity:** caller-side `isRevision` branch skips `recordAttempt` + `addHearts`; summary skips `markSetCompleted`; storage double-guards. Covered by `tests/revision.test.mjs` (bit-identical XP/Emeralds/hearts/topicStats).
- **Mistake-bank farming:** revision wrong answers never reach `addMistake`, so no revision-sourced mastery rewards. Exam-sourced mistakes earning mastery on genuine retry is intended behavior.
- **Exam-vs-revision interaction:** exams always reward per Decision Log #6 (timed mocks = genuine effort) — accepted, documented.
- **Injection surfaces:** all dynamic renders escape via `SOFUtils.escapeHtml`; mistake-bank Read-Aloud + mascot fallbacks use delegation, never inline bank text. No `'`/`"`/`<`/`>` in topic strings or IDs (35 IGKO + 13 NSO questions contain apostrophes in body text — all flow through `escapeHtml`).
- **Quota bounding:** mistakes capped 200 (FIFO), examHistory capped 20.
- **Achievers predicate:** `set % 10 === 0` + explicit `marks` override correct across weights, sampling, and section nav.
- **Data quality:** 600/600 unique IDs, 4/4 options (case-insensitive unique), valid answer indices, no short/placeholder explanations. Answer distribution 48–51 per position per subject.
- **Timer hygiene:** `stopTimer()` on every mode entry + wall-clock deadline + visibility resync — no exam→practice timer leak (tested).
- **Assets:** all 5 mascot JPGs present, 4.4–9.6 KB each (well under 150 KB budget), total ~35 KB.
- **SW precache:** images ARE in the precache list (contrary to the plan's recommendation) but all 5 exist on disk, so no all-or-nothing install failure today.

## Known limitations (accepted per scale anchor, NOT fixed)
- `node --test tests/` (bare directory) fails on Node 26 — runner quirk, use `node --test tests/*.mjs`. Docs use the working form.
- Client-side anti-gaming is anti-accidental-farming, not anti-tamper (DevTools tampering explicitly out of scope per REQ §4).
- No Export/Import backup UI wired (storage methods exist); parent backup path stays manual.
- `startCustomWorkout` (Smart Nudge) always rewards by design — 5-Q targeted practice is genuine effort, documented in plan review.

## Verification
- `node --test tests/banks.test.mjs tests/engine.test.mjs tests/revision.test.mjs` → **28/28 pass** (17 banks + 5 engine + 6 revision).
- Parse-checked all edited JS; topic-key listing confirms 10 labels/subject matching REQ §2; mission-map smoke test renders 20 cards with Revise button.
