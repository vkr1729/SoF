# Implementation Plan — SOF Olympiad Class 2 Expansion Pack

## 1. Architectural Blueprint
- **Runtime & Stack:** Vanilla JavaScript (ES6+), HTML5, CSS3. Zero build step, 100% offline-first PWA.
- **Component Boundaries:**
  - `data/`: Pure question data dictionaries (`igko-questions.js`, `imo-questions.js`, `nso-questions.js`, `badges.js`).
  - `js/storage.js`: LocalStorage data persistence, profile stats, mistake log, and quota bounding.
  - `js/quiz-engine.js`: Dual-mode quiz runner (Practice Quest vs TCS iON Exam Simulator) and Revision Sandbox.
  - `js/app.js`: Master UI coordinator, tab switching, and Mission Map renderer.
  - `assets/minecraft/`: Lightweight 3D Minecraft character assets.
  - `tests/`: Automated unit and integration test harnesses (`banks.test.mjs`, `engine.test.mjs`, `revision.test.mjs`).

## 2. Component Breakdown & Execution Order

### Phase 1: Core Foundation & Question Expansion (300 Questions)
- **Files to Modify:**
  - `data/igko-questions.js`: Add Sets 11 through 20 (100 new questions: 10 sets × 10 Qs).
  - `data/imo-questions.js`: Add Sets 11 through 20 (100 new questions: 10 sets × 10 Qs).
  - `data/nso-questions.js`: Add Sets 11 through 20 (100 new questions: 10 sets × 10 Qs).
  - `js/quiz-engine.js`:
    - Fix Achievers Section predicate across the engine: replace hardcoded `q.set === 10` with `(q.set % 10 === 0)` (or `q.set === 10 || q.set === 20` / `q.marks === 2`).
    - Update `getQuestionWeight(q)`: returns 2 marks for Achievers (`q.set % 10 === 0`).
    - Update `startOfficialExam`: pool core questions (`q.set % 10 !== 0`) and HOTS questions (`q.set % 10 === 0`).
    - Update `jumpToSection` and section tabs.
  - `tests/banks.test.mjs`:
    - Update to test Sets 1 through 20 across IGKO, IMO, and NSO (60 sets total, 600 questions).
    - Validate schema: unique IDs, non-empty questions, exactly 4 options, valid answer index 0..3, non-empty explanations, proper topic tags.
- **Standards & Difficulty Calibration:**
  - Real SOF previous year questions (2018–2025/2026 patterns).
  - 5% to 10% difficulty boost (2-step reasoning, plausible distractors, Olympiad phrasing like "Which of these is NOT true?", "Find P and Q").
  - Set 20 in each subject is the second dedicated Achievers Section (HOTS, 2 marks).

### Phase 2: Anti-Gaming Scoring Engine & Revision Mode
- **Files to Modify:**
  - `js/quiz-engine.js`:
    - Add `this.isRevision = false` property.
    - In `startPracticeSet(subject, setNum)`: set `this.isRevision = window.storageManager.isSetCompleted(subject, setNum)`.
    - In `renderPracticeQuestion()`: if `this.isRevision`, display Archetype 2 Modern Overworld revision banner (`🛡️ Revision Mode — Score & Rewards Frozen`).
    - In `handlePracticeSelect(chosenIdx)`:
      - Branch on `this.isRevision`:
        - If `this.isRevision`: skip `storageManager.recordAttempt` and skip `storageManager.addHearts`.
        - Render revision feedback copy: `"💡 Good practice! Mistakes help us learn."` without false promises of `+10 Emeralds | +25 XP`.
        - If not revision: normal hearts, XP, and `storageManager.recordAttempt`.
    - In `renderPracticeSummary()`:
      - If `this.isRevision`: skip `storageManager.markSetCompleted()`; display `"Revision Complete 📖 Original score preserved"` with 0 XP gained.
      - If not revision: award completion bonus (+100 XP, +50 Emeralds).
  - `js/storage.js`:
    - Add defense-in-depth: in `recordAttempt(question, chosenAnswer, isCorrect, isRevision = false)`, return early if `isRevision === true`.
    - Cap `data.mistakes` array at max 200 items (FIFO) to avoid LocalStorage quota overflow.
    - Cap `data.examHistory` array at max 20 items.
    - Ensure `markSetCompleted` never double-awards bonuses.
  - `js/app.js`:
    - Make `totalSets` dynamic (20 sets).
    - Update title: `"${this.currentSubject} Olympiad Missions (20 Sets x 10 Questions)"`.
    - Update unlock chain past Set 10: ensure Set 11+ unlocks smoothly from preceding sets.
    - Render completed sets with distinct "Completed 💎" and "🛡️ Revise Set" action.
- **Test File to Create:**
  - `tests/revision.test.mjs`:
    - Automated headless simulation testing: run a set once (assert XP/Emeralds/stats increase), run the same set a second time in Revision Mode (assert XP, Emeralds, Hearts, and TopicStats are 100% bit-identical).

### Phase 3: Minecraft Character Integration (Archetype 2: Modern Overworld Clean)
- **Files to Modify:**
  - `assets/minecraft/`:
    - Store lightweight, optimized 3D renders (`steve.jpg`, `alex.jpg`, `creeper.jpg`, `wolf.jpg`, `axolotl.png`).
  - `data/badges.js`:
    - Add optional `avatarImg` property to `MINECRAFT_MASCOTS` pointing to `assets/minecraft/*.jpg`.
    - Retain existing `avatarSvg` as robust fallback with `onerror` attribute on `<img>`.
  - `css/minecraft-theme.css`:
    - Add Archetype 2 styling: circular 3D mascot avatar with 2px diamond glow border (`#38bdf8`), subtle revision badge styling (`#f59e0b`).
    - Respect `prefers-reduced-motion` and mute states.
  - `index.html`:
    - Update HUD companion display to render circular 3D avatar.
    - Update Companion Selection modal to show 3D renders with fallback.
- **Cache Strategy:**
  - Rely on existing runtime caching (`cache.put` in `sw.js`) so images are cached on first load without risking all-or-nothing install failures in `sw.js`.

### Phase 4: Full Test Suite & Verification
- **Automated Commands:**
  - `node tests/banks.test.mjs`: Validate all 600 questions across 60 sets for schema, answer validity, and topics.
  - `node tests/engine.test.mjs`: Validate sampling, Achievers weighting (`set 10` and `set 20`), and section jumping.
  - `node tests/revision.test.mjs`: Validate anti-gaming revision mode sandbox.

## 3. Frontier Architectural Review & Enhancements (Incorporated)
- **Achievers Section Predicate (P0):** Replaced hardcoded `q.set === 10` across `quiz-engine.js` with `(q.set % 10 === 0)`.
- **Method Renaming (P0):** Renamed `checkPracticeAnswer` to `handlePracticeSelect`.
- **Caller-Side Sandbox Guards (P0):** Early branch in `handlePracticeSelect` before both `recordAttempt` and `addHearts`.
- **Feedback & Summary Copy (P0):** Conditional feedback copy in revision mode so children are not given false reward promises.
- **Storage Quota Bounding (P1):** Capped `mistakes` at 200 and `examHistory` at 20.
- **Progressive Validation (P1):** Configured tests to run per-subject and globally.
- **Mascot Asset Fallback (P1):** Added optional `avatarImg` with seamless inline SVG/icon fallback.
- **Service Worker Safety (P1):** Images cached at runtime to avoid precache install failures.

## 4. Verification & Guardrails
- **Automated Tests:**
  - `node tests/banks.test.mjs`
  - `node tests/engine.test.mjs`
  - `node tests/revision.test.mjs`
- **Circuit Breaker Rule:**
  - If 2 consecutive failed attempts occur during implementation, invoke frontier model stuck guidance immediately.
