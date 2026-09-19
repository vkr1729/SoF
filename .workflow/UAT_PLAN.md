# UAT Plan — SOF Olympiad Class 2 Expansion Pack

**Date:** 2026-09-19
**Sources:** `.workflow/REQUIREMENTS.md`, `.workflow/AUDIT_AND_REMEDIATION_REPORT.md`
**Scope:** Manual user acceptance testing for the 300-question expansion (Sets 11–20), Revision Mode strict sandbox, Exam Mode rewards, Minecraft artwork, and audit remediation verification.
**Scale anchor:** Single child (~7–8 yr), offline-first, LocalStorage-only, zero backend. DevTools tampering is out of scope.

## Environment & Setup

- Browser: latest Chrome + Safari on iPad (PWA installed if testing update path).
- Serve locally, e.g. `python3 -m http.server` then open the app URL. Do NOT open via `file://`.
- Open DevTools → Application → Local Storage for state inspection.
- Reset state before each suite: clear Local Storage (or use in-app reset if present) and reload.
- Record results as `[ ]` → `[x]` (pass) or `[!]` (fail + note).

## Suite A — Question Expansion (REQ §2)

- [ ] A1. Mission Map shows Sets 1–20 for IGKO, IMO, and NSO (60 sets total).
- [ ] A2. Each of Sets 11–20 contains exactly 10 questions, 4 options each, one correct answer, and a non-placeholder explanation.
- [ ] A3. Spot-check one full set per subject (e.g. IGKO-11, IMO-15, NSO-20): answer all 10, confirm summary shows 10 attempted and explanations are age-appropriate.
- [ ] A4. Topic labels match REQ §2 exactly (10 keys/subject, audit finding #1):
  - IGKO: Plants & Animals, India & the World, Science & Tech, Language & Literature, Earth & Environment, Transport & Comm, Sports, Life Skills, Current Affairs, Achievers Section HOTS. Confirm NO `Sports & Entertainment` or `Current Affairs & Awareness`.
  - IMO: Number Sense & Place Value, Computation Operations, Length/Weight/Capacity (per bank label), Time & Calendar, Money, Geometrical Shapes & Solids, Patterns, Pictographs & Data, Achievers Section HOTS (+1 more per bank). Confirm NO `Patterns & Logic` or `Data Handling`.
  - NSO: Plants, Animals, Human Body & Health, Food & Nutrition, Housing & Clothing, Air/Water/Weather (per bank label), Light & Shadows, Earth & Universe, Everyday Science, Achievers Section HOTS. Confirm NO `Food & Health`.
- [ ] A5. Sets 11–20 feel slightly harder than Sets 1–10 (2-step reasoning, trickier distractors) but remain solvable by a Class-2 reader with parent help.
- [ ] A6. Bank headers/README state 600 questions / 60 sets / 20 sets per subject (audit finding #2).

## Suite B — First-Time Attempt Rewards (REQ §2, Decision #3/#5)

Setup: fresh profile, note starting XP / Emeralds / Hearts.
- [ ] B1. Complete a never-attempted set (e.g. IGKO-11): each correct answer grants XP, mistakes grant small XP; Emeralds increase.
- [ ] B2. Set-completion bonus (+100 XP, +50 Emeralds) is awarded once on first completion.
- [ ] B3. Hearts update and `topicStats` change after genuine attempt (check Local Storage).
- [ ] B4. Wrong answers land in the Mistake Bank (cap 200, FIFO).

## Suite C — Revision Mode Strict Sandbox (REQ §2, Decisions #3/#5, audit probes)

Setup: complete any set first (e.g. IMO-11), record XP / Emeralds / Hearts / `topicStats` snapshot from Local Storage.
- [ ] C1. Completed set card shows `Completed 💎` status AND a distinct clickable `🛡️ Revise Set` button (audit finding #4). Button is keyboard-focusable (Tab + Enter works).
- [ ] C2. Clicking `🛡️ Revise Set` opens practice with top banner exactly `🛡️ Revision Mode — Scores & Rewards are Frozen` (audit finding #5).
- [ ] C3. Revision badge uses amber styling (amber text/border, rounded pill), not blue (audit finding #6).
- [ ] C4. Answer revision questions (mix of right + wrong) with step-by-step feedback and explanations visible in-memory.
- [ ] C5. Finish revision: summary reads `Revision Completed! 📖 Original score preserved.` (or `Revision Complete • Original Score Preserved`) with NO XP/Emerald reward popup.
- [ ] C6. Post-revision Local Storage is bit-identical to pre-revision snapshot: XP, Emeralds, Hearts, `topicStats` unchanged.
- [ ] C7. Wrong answers in Revision Mode do NOT create new Mistake Bank entries and grant NO mastery rewards.
- [ ] C8. Re-revise the same set twice in a row: still zero rewards, original score still preserved.

## Suite D — Exam Mode (Decision #6)

- [ ] D1. Start a full 35-question timed mock exam; timer counts down and stays visible.
- [ ] D2. Complete the exam: exam XP/Emeralds ARE awarded (exams always reward genuine effort).
- [ ] D3. Exam history records the result; history caps at 20 entries (oldest dropped).
- [ ] D4. Start exam → quit mid-exam → start practice set: no exam timer leaks into practice (timer stopped, audit probe).

## Suite E — Mission Map & Navigation (REQ §5, audit finding #4)

- [ ] E1. Locked sets (`🔒`) are NOT clickable and show honest `Locked` status (no `startMissionSet` fires).
- [ ] E2. Unlocked-but-incomplete sets are clickable and start normal practice (no revision banner).
- [ ] E3. Completed sets: clicking the card body vs. the `🛡️ Revise Set` button both enter Revision Mode without errors (button uses `stopPropagation`).
- [ ] E4. Screen-reader/ARIA: Revise button has an accessible label; revision banner has `role="status"`.

## Suite F — Minecraft Artwork (REQ §2/§4/§5, audit finding #7)

- [ ] F1. Companion picker modal shows all 5 characters (Steve, Alex, Creeper, Wolf/Doggo, Axolotl) as 3D renders; selection state is visible.
- [ ] F2. HUD companion indicator shows a 48px circular avatar with diamond border; mission banners and celebration modals show character art.
- [ ] F3. Question and option cards remain clean and readable (no background art behind text, suitable for early readers).
- [ ] F4. Fallback: temporarily rename/block `assets/minecraft/` (or offline DevTools → block image requests) and reload: avatars degrade to emoji icons, no empty boxes, no console crash.
- [ ] F5. Asset weight: each mascot file <150 KB, total <1.5 MB, zero external network requests during use (check DevTools Network, offline mode works).

## Suite G — Offline / PWA Update Path (audit finding #3)

- [ ] G1. `sw.js` cache name is `sof-quest-v3` (not v2). Verify by reading the file or DevTools → Application → Cache Storage.
- [ ] G2. Fresh install on iPad (Add to Home Screen): app launches offline (airplane mode) with questions, engine, and all 5 mascot images.
- [ ] G3. Update path: install old version, then load new version → new shell activates on next launch (no stuck stale content).

## Suite H — Storage Safety & Quotas (REQ §4, audit finding #8)

- [ ] H1. Mistake log never exceeds 200 items (add mistakes beyond cap → oldest evicted, newest kept).
- [ ] H2. Exam history never exceeds 20 entries.
- [ ] H3. JSON export/import backup round-trips the profile without data loss (if UI not wired, verify storage methods exist and manual export works).
- [ ] H4. Malformed-input guards: app never crashes or writes `NaN%` rows on bad/empty results (audit finding #8; manual check = rapidly skipping/empty-submitting practice and exam flows shows no corrupt history entries).
- [ ] H5. Automated gate passes: `node --test tests/banks.test.mjs tests/engine.test.mjs tests/revision.test.mjs` → 28/28 pass. (Note: bare `node --test tests/` fails on Node 26 — use the explicit file form.)

## Suite I — Edge Cases & Child-Proofing

- [ ] I1. Rapid double-click on answers / Next button: single scoring event, no double XP.
- [ ] I2. Reload mid-set: app recovers gracefully (no stuck overlay, no lost profile).
- [ ] I3. Revision Mode entered, then browser Back pressed mid-set: rewards still frozen, profile intact.
- [ ] I4. All-wrong revision run: hearts/XP/topicStats still unchanged; Mistake Bank unchanged.
- [ ] I5. Special characters (apostrophes in question text) render correctly, no broken HTML/JS.
- [ ] I6. Long explanations don't overflow cards on a 768px-wide iPad viewport or a small phone viewport.

## Sign-Off

| Suite | Tester | Date | Pass / Fail | Notes |
|-------|--------|------|-------------|-------|
| A – Questions | | | | |
| B – First-attempt rewards | | | | |
| C – Revision sandbox | | | | |
| D – Exam mode | | | | |
| E – Mission map/nav | | | | |
| F – Artwork | | | | |
| G – Offline/PWA | | | | |
| H – Storage/quotas | | | | |
| I – Edge cases | | | | |

**Acceptance criteria:** All Suites A–H pass; Suite I has no data-corruption or crash failures. Any `[!]` item must reference the failing step ID (e.g. C6) with observed vs. expected behavior.
