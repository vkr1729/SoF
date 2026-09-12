# 🤖 Frontier Model Architecture & Code Review Prompt
### *SOF Olympiad Class 2 Learning Platform (IGKO, IMO, NSO)*

Copy and paste the entire prompt below into a frontier model (Claude 3.7 Sonnet, GPT-4o / o1 / o3, Gemini 2.0 Pro) to receive an adversarial, deep-dive code, architecture, and UX review.

---

```markdown
# Role & Objective
You are a Principal Software Architect, Senior EdTech Product Designer, and Olympiad Curriculum Specialist. 

Your objective is to conduct a rigorous, comprehensive code, architecture, and pedagogical review of an open-source, offline-first web application built for a **7-year-old Class 2 student** preparing for the **SOF Olympiads** (IGKO - General Knowledge, IMO - Mathematics, and NSO - Science).

The code repository is hosted here:
- **Live Application**: https://vkr1729.github.io/SoF/
- **GitHub Repository**: https://github.com/vkr1729/SoF

---

## 1. Project Context & Design Intention

### The Core Problem:
- A 7-year-old child needs to prepare for three SOF Olympiads: IGKO (General Knowledge), IMO (Mathematics), and NSO (Science).
- The student's father is currently traveling; the child's mother facilitates 10-minute daily practice sessions on an iPad/laptop.
- **Pedagogical Constraints**:
  - Class 2 children experience cognitive fatigue if quizzes are longer than 10 questions or mix multiple subjects.
  - Early readers struggle with difficult scientific/mathematical vocabulary (e.g., *thermometer*, *quadrilateral*, *chameleon*).
  - On actual Olympiad exam day, SOF uses an austere, digital TCS iON test environment (35 questions, 60-minute countdown, green/purple/grey question palette). If the child only plays cartoon games, the exam room causes intimidation and shock. Conversely, if daily practice is strictly corporate exam software, the child loses motivation within days.

### The Architectural & UX Solution:
1. **Zero-Build, Offline-First Architecture**:
   - 100% client-side HTML5, CSS3, vanilla ES6 modules. No Node.js runtime, no npm dependencies, no build steps, no backend servers, and no user tracking/cookies.
   - All persistence is maintained through browser `localStorage` under key `sof_olympiad_class2_data`.
2. **Dual-Mode Hybrid Engine**:
   - **Mode A: Adventure Quest (Daily Practice - 10 mins)**: Minecraft-themed Overworld adventure with Steve, Alex, Doggo, and Axolotl. Uses emerald rewards, heart health (5 hearts), daily streaks, Web Audio synth sounds, and browser Web Speech API ("🔊 Read" aloud button). Sets are strictly 10 questions per subject without category mixing.
   - **Mode B: SOF TCS iON Simulator (Weekend Mocks)**: Faithful 1:1 replication of the official SOF TCS iON exam layout, including question palette (Green = Answered, Purple = Marked for Review, Grey = Not Visited), section jumps, and official marking schemes (1 mark core, 2 marks Achievers HOTS).
3. **Notebook of Growth (Mistake Bank)**:
   - Missed questions are automatically logged to `localStorage`. Filterable by subject with 1-click retry. Mastered questions award bonus XP and clear automatically.
4. **Smart Diagnostic Nudge (Weak Areas)**:
   - Real-time accuracy tracking across 30 specific topics. Automatically flags topics below 70% and generates a 1-click 5-question targeted "Power Workout".
5. **Massive Question Archive (300 Questions)**:
   - 100 IGKO, 100 IMO, 100 NSO questions (10 sets of 10 Qs each), categorized by topic and difficulty with child-friendly explanations.
6. **5 Interactive Prototypes**:
   - Built and evaluated across 5 archetypes in `mocks/` (Duolingo, Kahoot, Khan Kids, Prodigy Minecraft, TCS iON) before finalizing the dual-mode design.

---

## 2. Review Instructions & Areas of Evaluation

Please inspect the files in the repository (specifically `index.html`, `css/`, `js/`, `data/`, and `docs/`) and evaluate the project across the following 5 dimensions:

### Dimension 1: Question Quality & Olympiad Pedagogical Rigor (Score /10)
- Are the questions truly aligned with Class 2 syllabus guidelines and the official 2026-27 sample paper?
- Are the distractors (wrong options) plausible yet unambiguous?
- Are the explanations age-appropriate, encouraging, and pedagogically sound?
- Is the Achievers Section (Set 10 for each subject) adequately challenging for Higher Order Thinking Skills (HOTS)?

### Dimension 2: Architecture, Code Quality & Maintainability (Score /10)
- Separation of concerns across `storage.js`, `quiz-engine.js`, `mistake-bank.js`, `weak-areas.js`, and `app.js`.
- Error handling, defensive programming, and state consistency (e.g., handling missing or corrupt `localStorage`, boundary conditions when sets are completed).
- Event listener management and DOM performance (memory leak prevention, re-rendering efficiency).

### Dimension 3: Child UX, Accessibility & Gamification Psychology (Score /10)
- Touch targets and mobile/iPad ergonomics for a 7-year-old child's motor skills.
- Web Speech synthesis compatibility across operating systems (iOS Safari, Android Chrome, Windows/Mac).
- Web Audio API fallback handling for autoplay restrictions before first user interaction.
- Balance of rewards vs. frustration (heart health penalties vs. encouragement).

### Dimension 4: Official SOF TCS iON Simulator Parity (Score /10)
- Realism of the TCS iON question palette states (Answered, Marked for Review, Visited, Not Visited, Marked for Review with Answer).
- Timer accuracy and handling of exam completion / summary screen.
- Screen responsiveness on laptops vs. iPads during the exam simulation.

### Dimension 5: Edge Cases, Security & Offline Resilience (Score /10)
- Behavior if `localStorage` is disabled or reaches quota limits.
- XSS prevention (sanitization of question text/options rendered via innerHTML).
- Handling network disconnection and device sleep/wake cycles.

---

## 3. Output Format Requirements

Provide your review in clean GitHub Flavored Markdown formatted as follows:

```markdown
# 📋 SOF Olympiad Class 2 — Expert Review & Quality Audit

## 1. Executive Summary & Scorecard
| Dimension | Score (1-10) | Rating | Key Strength | Primary Risk / Area for Improvement |
| :--- | :---: | :---: | :--- | :--- |
| **1. Olympiad Content Rigor** | /10 | | | |
| **2. Architecture & Code Quality** | /10 | | | |
| **3. Child UX & Psychology** | /10 | | | |
| **4. TCS iON Exam Parity** | /10 | | | |
| **5. Resilience & Edge Cases** | /10 | | | |
| **OVERALL COMPOSITE** | **/50** | | | |

## 2. Strengths & Pedagogical Highlights
(Highlight what is executed exceptionally well)

## 3. Critical Findings & Prioritized Gaps
- **P0 (Critical / High Impact)**: Bugs, broken flows, or severe pedagogical issues.
- **P1 (Important Refinements)**: Architectural improvements, UX frictions, or question clarity adjustments.
- **P2 (Nice-to-Have Polish)**: Micro-animations, additional audio cues, or metadata enhancements.

## 4. Concrete Code & Design Recommendations
(Provide exact file names, line references, and drop-in code snippets or structural refactors)

## 5. Suggested Remediation Action Plan
(A bulleted checklist that an AI coding agent can sequentially execute to address all feedback)
```
```
