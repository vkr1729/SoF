# Requirements Specification

## 1. Project Overview & Target User Anchor
- **Project Name:** SOF Olympiad Class 2 — Gamified Practice & Exam Simulator (Expansion Pack)
- **Target User & Scale:** Single-child personal use (~7-8 year old student preparing for SOF Class 2 IGKO, IMO, NSO). Strictly offline-first, browser-local persistence via LocalStorage. No multi-tenant backend, no complex auth, zero external server dependencies.
- **Primary Objective:** 
  1. Add 300 real previous-year Olympiad questions (+5-10% difficulty) across IGKO, IMO, and NSO.
  2. Implement a dedicated Revision Mode for completed tests that prevents score/XP/emerald gaming while allowing full educational review and re-attempt.
  3. Integrate authentic 3D Minecraft character images (Steve, Alex, Creeper, Wolf/Doggo, Axolotl) into the UI tastefully without overwhelming the learner.
- **Core Value Proposition:** High-quality Olympiad preparation with engaging Minecraft gamification that rewards genuine learning without exploitable score loops.

## 2. Functional Requirements (Scope Matrix)
- **Inputs & Data Sources:** Real SOF previous year questions (2018-2025/2026 patterns from MTG, SOF World, Vedantu, official sample papers) across Class 2 IGKO, IMO, and NSO.
- **Question Expansion (300 Questions):**
  - **IGKO**: 100 new questions (Sets 11 to 20, 10 Qs/set). Topics: Plants & Animals, India & the World, Science & Tech, Language & Literature, Earth & Environment, Transport & Comm, Sports, Life Skills, Current Affairs, and Achievers Section HOTS.
  - **IMO**: 100 new questions (Sets 11 to 20, 10 Qs/set). Topics: Number Sense & Place Value, Computation Operations (Addition/Subtraction), Length, Weight & Capacity, Time & Calendar, Money, Geometrical Shapes & Solids, Patterns, Pictographs & Data, and Achievers Section HOTS.
  - **NSO**: 100 new questions (Sets 11 to 20, 10 Qs/set). Topics: Plants, Animals, Human Body & Health, Food & Nutrition, Housing & Clothing, Air, Water & Weather, Light & Shadows, Earth & Universe, Everyday Science, and Achievers Section HOTS.
  - **Difficulty Tuning**: Calibrated strictly 5% to 10% more challenging than Sets 1-10 (e.g. 2-step reasoning, subtle distractor options, Olympiad-standard phrasing) while remaining age-appropriate for Class 2.
- **Scoring & Anti-Gaming Engine (Strict Sandbox):**
  - **First-Time Attempt**: Earns XP (+25/correct, +5/mistake), Emeralds (+10), updates hearts and topicStats, and earns set-completion bonus (+100 XP, +50 Emeralds).
  - **Revision Mode**: Automatically triggered when starting any completed set.
    - Strict Sandbox: awards 0 XP, 0 Emeralds, 0 Hearts changes, 0 `topicStats` mutations.
    - Questions solved in Revision Mode do NOT grant Mistake Bank mastery rewards or duplicate records.
    - In-memory UI shows step-by-step feedback and detailed explanations for learning.
    - Summary screen displays "Revision Complete • Original Score Preserved".
  - **Exam Mode**: Full 35-question timed mock exams require genuine effort and always award exam XP/Emeralds upon completion.
- **Minecraft Character Artwork:**
  - High-resolution 3D renders of Steve, Alex, Creeper, Doggo/Wolf, Axolotl stored locally in `assets/minecraft/`.
  - Lightweight (<150KB each), offline-first, with graceful fallback.
  - Clean placement in HUD companion indicator, Companion selector modal, mission subject banners, and celebratory completion modals.
  - Question and option cards remain completely uncluttered and readable for early readers.

## 3. Interview Record & Decision Log
| # | Functional Question | Recommended Approach | Evaluated Alternatives | User Decision / Rationale |
|---|---------------------|----------------------|------------------------|---------------------------|
| 1 | Target Persona & Scale Anchor | Single-kid offline-first web app using local storage | Multi-user login / Cloud database | Confirmed: Single-child personal offline-first web app (keeps LocalStorage, zero backend/auth complexity, ultra-fast and private) |
| 2 | Question Distribution (300 Questions) | Balanced 300 Qs: 100 IGKO + 100 IMO + 100 NSO across Sets 11-20 (10 Qs/set, +5-10% difficulty) | Custom split or single subject focus | Confirmed: Balanced 300 Qs across Sets 11-20 for all 3 subjects with 5-10% difficulty boost and Achievers HOTS |
| 3 | Test Retake & Anti-Gaming Policy | Dedicated "Revision Mode": Completed tests can be replayed to review and practice explanations, but score/accuracy stats, XP, and Emeralds are frozen to prevent gaming | Complete set lockout or secondary scoreboards | Confirmed: Dedicated Revision Mode (questions replayable with feedback, but scores/rewards frozen) |
| 4 | Minecraft Character Visual Placement | Tasteful companion integration: Authentic 3D Minecraft character renders in Companion selection, HUD status, mission headers, and cheering reaction modals, keeping the question card clean and readable | Full-screen visual backgrounds on questions | Confirmed: Tasteful companion integration keeping question cards clean and readable |
| 5 | Revision Mode Sandbox Rigor | Strict Sandbox: Freeze all XP, Emeralds, Hearts, topicStats, and secondary Mistake Bank reward harvesting | Soft freeze with nominal 5 XP | Confirmed: Strict Sandbox (complete freeze on rewards and stats during revision) |
| 6 | Exam Mode Reward Behavior | Always award exam XP (taking full timed mock exams is genuine effort and good practice) | Daily cap on exam XP | Confirmed: Always award exam XP for official timed exams |
| 7 | UI Archetype Selection | Archetype 2: Modern Overworld Clean (Sleek diamond borders, circular 3D avatars, subtle amber Revision badge, highest readability and calm focus) | Archetype 1 (Blocky Crafting) / Archetype 3 (Playful Tactile) | Confirmed: Archetype 2: Modern Overworld Clean |

## 4. Frontier Model Probing Insights & Scope Gaps
- **Sandbox Boundary:** Handled cleanly at the `QuizEngine -> StorageManager` boundary via `isRevision` flag.
- **Quota & Storage Safety:** LocalStorage remains the single source of truth; JSON export/import supported for parent backups; mistake log capped at 200 items to prevent storage exhaustion.
- **Threat Model:** Client-side anti-accidental-farming for the child; developer tools tampering is explicitly out of scope.
- **Asset Weight Budget:** Total Minecraft image assets constrained to <1.5 MB total, optimized JPEG/WebP, zero runtime external network requests.

## 5. UI Specification (Locked to Archetype 2)
- **Design Tokens:**
  - Diamond Highlight: `#38bdf8` / `rgba(56, 189, 248, 0.2)`
  - Revision Badge: `background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid #f59e0b; font-weight: 800; border-radius: 20px;`
  - Completed Badge: `background: rgba(34, 197, 94, 0.15); color: #16a34a; border: 1px solid #22c55e;`
  - Companion Avatar: 48px circular portrait with 2px diamond border (`#38bdf8`) and smooth shadow.
- **Views Modified:**
  - Mission Map: Displays Sets 1 to 20 per subject; sets marked completed show "Completed 💎" with a distinct "🛡️ Revise Set" button that launches Revision Mode.
  - Practice Card: Displays top banner `🛡️ Revision Mode — Scores & Rewards are Frozen` when reviewing completed sets.
  - Practice Summary: Shows "Revision Completed! 📖 Original score preserved." with no duplicate XP/Emerald popup.
  - Companion Picker Modal: Shows authentic 3D renders of Minecraft characters with selection state.
