# Frontier Requirements Review — Expansion Pack

**Source:** `.workflow/REQUIREMENTS.md` (Stage 1b probing)
**Date:** 2026-09-19
**Scale anchor:** Single-child (~7–8 yr, Class 2 IGKO/IMO/NSO), strictly offline-first, browser-local persistence via LocalStorage. No backend, no auth, zero server dependencies.

**Implementation ground-truth (checked):** `js/storage.js` (`recordAttempt` always awards XP/Emeralds + mutates `topicStats` + `mistakes`; `markMistakeMastered` awards +50 XP/+25 Emeralds; `markSetCompleted` awards +100 XP/+50 Emeralds), `js/quiz-engine.js` (`startPracticeSet` has no Revision Mode branch, no `isSetCompleted` check; `submitExam` calls `recordAttempt` for every question + `saveExamResult` awards +150 XP/+100 Emeralds). Revision Mode does not exist in code yet.

---

## Q1 — Does Revision Mode fully freeze all reward/stat side-channels, or just the set summary?

**Ambiguity / failure mode:** REQ §2 says in Revision Mode "no additional XP/Emeralds, hearts not penalized, topic accuracy stats untouched" while child can "answer questions and read explanations." But current `recordAttempt()` has four side effects per answer: XP, Emeralds, `topicStats`, `mistakes`. And `markMistakeMastered()` is a separate +50 XP/+25 Emerald path. If Revision only skips the set-completion bonus, a child can re-attempt a completed set 10× to farm encouragement XP (+5/mistake), pollute `topicStats`, duplicate `mistakes`, then harvest mastery rewards from the Mistake Bank — defeating the anti-gaming goal.

**Recommended approach:** Define Revision Mode as a strict read/practice sandbox at the `QuizEngine → StorageManager` boundary: pass `isRevision` flag; when true, skip `recordAttempt`, `addXP`, `addEmeralds`, `addHearts`, `topicStats` mutation, and `markSetCompleted`. Allow in-memory feedback + explanations only. Also freeze `markMistakeMastered` rewards for questions whose `set` is already in `completedSets`, or require first-time mastery only.

**Alternatives considered:**
- UI-only badge ("Score Frozen" label) with storage still writing — rejected: trivially farms stats, contradicts value prop.
- Complete set lockout (no replay) — rejected: kills educational review, already decided against in Decision Log #3.
- Secondary revision scoreboard — rejected: adds complexity for a 7-year-old, violates single-child simplicity anchor.

**Decision needed:** Confirm sandbox definition + whether Mistake Bank mastery from revision-sourced mistakes yields zero rewards.

## Q2 — What happens when LocalStorage is cleared, corrupt, full, or non-persistent — is progress disposable?

**Ambiguity / failure mode:** REQ §2 says "100% offline, LocalStorage for saving state" and scale anchor assumes one device. Failure modes already half-handled in code (`mergeDefaults`, `SOF_STORAGE_OK` flag, memory fallback): iPad private-mode Safari throws on access, cache clear / sibling tapping "Reset" wipes `completedSets` + 300-question progress, `importJson` can inject arbitrary stats (XP gaming), quota pressure grows with 300 new questions + mistake records storing full question text/options. For a 7-year-old, silent progress loss = tears; for a parent, no recovery path = support burden.

**Recommended approach:** Keep LocalStorage as source of truth (honor scale anchor — no backend), but harden: (a) parent-gated Export/Import JSON backup as the official recovery path, validate import via `mergeDefaults` + schema clamp (already started); (b) show persistent "Saving OFF — progress won't last" banner when `SOF_STORAGE_OK === false`; (c) cap `mistakes`/`examHistory` length (e.g. 200/20) to bound quota.

**Alternatives considered:**
- Cloud sync / multi-device backend — rejected: violates zero-server, privacy, offline-first anchor.
- IndexedDB migration — viable later for larger asset/state blobs, but adds complexity now; defer unless quota errors observed.
- Accept data loss silently — rejected: breaks trust for exam prep.

**Decision needed:** Confirm backup-via-export is sufficient; confirm caps on mistake/exam history; confirm banner UX for non-persistent mode.

## Q3 — Client-side anti-gaming is trivially bypassable — do we need a parent gate, or accept honor-system?

**Ambiguity / failure mode:** All anti-gaming lives in client JS: `completedSets.includes()`, `isRevision` check, `resetAll()`, DevTools `localStorage.clear()`. A curious 8-year-old (or sibling) can reset, re-earn welcome + set-completion bonuses (+100 XP/+50 Emeralds per set × 30 new sets), or edit exported JSON to grant XP. REQ claims "rewards genuine learning without exploitable score loops" but provides no threat model for a single-child offline app.

**Recommended approach:** Accept honor-system for the child; gate destructive/economic actions behind a parent check (e.g. simple math-gate or long-press confirm on Reset/Import). Document that Revision freeze is anti-accidental-farming, not anti-tamper — appropriate for the single-child scale anchor.

**Alternatives considered:**
- Cryptographic signing / obfuscation of LocalStorage — rejected: false security, hurts debuggability, still breakable offline.
- Server-side authoritative scoring — rejected: violates scale anchor.
- Full lockout after completion — already rejected in Decision Log #3.

**Decision needed:** Confirm parent-gate on Reset/Import is in scope for this pack, and that DevTools tampering is explicitly out of scope.

## Q4 — Does Exam Mode need the same freeze, or does it remain an XP farm that contradicts Revision Mode?

**Ambiguity / failure mode:** REQ scopes Revision Mode to "completed sets" (practice, 10-Q). But `startOfficialExam` samples randomly from all sets including completed ones, and `submitExam` unconditionally calls `recordAttempt` per question + `saveExamResult` (+150 XP/+100 Emeralds) every run. A child can run Quick Exam repeatedly to farm XP/Emeralds/hearts-free, bypassing the Revision freeze entirely. Also hearts: practice refills free via "Hug break," so "hearts not penalized in Revision" is meaningless unless exam hearts differ.

**Recommended approach:** Distinguish the two loops explicitly: Practice sets → first-attempt rewards, re-attempt = frozen Revision. Exams → always reward (they cost 15–60 min + timer pressure) but cap farming: e.g. full exam rewards once per day per subject, subsequent runs yield scorecard only (or reduced XP). Keep hearts out of exams (current code already does) and document it.

**Alternatives considered:**
- Freeze exams identically to revision — rejected: kills incentive to take full mocks.
- Unlimited exam rewards — rejected: contradicts anti-gaming value prop; makes practice freeze pointless.
- Hearts penalty in exams — rejected: age-inappropriate for Class 2, current hug-break philosophy is correct.

**Decision needed:** Confirm exam reward cap policy (once/day vs. always-reward vs. diminishing) and state it in REQUIREMENTS §2.

## Q5 — Can high-res 3D Minecraft renders ship offline without bloating the PWA or distracting a 7-year-old?

**Ambiguity / failure mode:** REQ §2 demands "authentic high-resolution 3D renders" in companion modal, HUD, headers, celebration modals, while "question and answer cards remain clean." Risks: (a) repo/PWA weight — 5+ high-res PNGs + 300 questions can blow GitHub Pages + service-worker cache on low-end iPad; (b) licensing — "authentic Minecraft" art is Mojang/Microsoft IP, redistributing renders in a public repo risks takedown; (c) attention — animated mascots + audio + confetti on every question competes with reading for early readers; (d) no perf/accessibility budget stated (44px targets exist, but no max asset KB, no reduced-motion path).

**Recommended approach:** Constrain: WebP/optimized PNG, lazy-load outside mission hub, max ~150 KB per mascot, total image delta <1 MB; keep renders out of question/option cards (CSS emoji/icon fallback if asset missing); add `prefers-reduced-motion` + mute respect; replace "authentic" with "Minecraft-inspired blocky originals or properly licensed renders" and record license source in `assets/README`.

**Alternatives considered:**
- Full-screen biome backgrounds on questions — already rejected in Decision Log #4 (distraction).
- Hotlinked CDN images — rejected: breaks offline-first anchor.
- Emoji-only mascots (status quo `⛏️`/icon) — fallback if licensing/weight fails, but loses delight.

**Decision needed:** Confirm asset budget + licensing source + reduced-motion/mute behavior before art lands.

---

## Scope gaps to close in REQUIREMENTS.md §4

1. No definition of "done" for +5–10% difficulty (who judges age-appropriateness? 2-step reasoning rubric?).
2. No exam-vs-revision reward interaction (Q4).
3. No backup/recovery contract despite LocalStorage fragility (Q2).
4. No threat model for anti-gaming (Q3).
5. No asset budget or license provenance for Minecraft art (Q5).
