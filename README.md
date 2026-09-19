# ⛏️ SOF Olympiad Class 2 — Gamified Practice & Exam Simulator
### *Comprehensive Preparation for IGKO (General Knowledge), IMO (Mathematics) & NSO (Science)*

A complete, offline-first, gamified web application and official exam simulator tailored for **Class 2 students (~7 years old)** appearing for the Science Olympiad Foundation (SOF) exams.

> 🎮 **Live App**: [https://vkr1729.github.io/SoF/](https://vkr1729.github.io/SoF/)  
> 📦 **GitHub Repository**: [https://github.com/vkr1729/SoF](https://github.com/vkr1729/SoF)

---

## 🌟 Highlights & Features

1. **Massive Question Archive (600 Questions Across 60 Sets)**:
   - 🌍 **IGKO (General Knowledge)**: 20 sets × 10 Qs = 200 Questions
   - 📐 **IMO (Mathematics)**: 20 sets × 10 Qs = 200 Questions
   - 🔬 **NSO (National Science)**: 20 sets × 10 Qs = 200 Questions
   - *Strictly isolated by subject* (no category mixing in sets) to maintain structured learning.
   - Includes **Achievers Section (HOTS)** questions for advanced Olympiad medal preparation.

2. **Dual-Mode Learning Engine**:
   - **Adventure Quest Mode**: Minecraft-inspired Overworld adventure with Steve, Alex, Doggo, Axolotl, and Creeper. Features heart health, emerald rewards, XP level progress, synthesized audio effects, and celebration confetti.
   - **Authentic SOF Exam Simulator**: Faithful replication of the **TCS iON online Olympiad interface** (countdown timer, question palette with green/purple/grey status codes, section jump bar, and official marking schemes).

3. **Notebook of Growth (Mistake Bank)**:
   - Every missed question is automatically captured and logged.
   - Filter by subject (IGKO, IMO, NSO) with 1-click retry.
   - When a child gets it right on retry, it awards mastery XP and clears from the mistake log!

4. **Smart Diagnostic & Weak-Area Nudge**:
   - Tracks real-time performance across all 10 topics per subject.
   - Identifies topics below 70% accuracy and generates an instant **5-Question Targeted Power Workout**.

5. **Kid-Friendly Accessibility**:
   - **🔊 Voice Read-Aloud**: Click the speaker icon beside any question to hear the text and options read aloud via the browser's native Web Speech API.
   - **Zero-Build & 100% Offline**: Runs directly in any browser without npm, servers, or build tools.

---

## 📂 Repository Structure

```
├── index.html                   # Main production Single Page Application
├── css/
│   ├── main.css                 # Base layout, colors, tactile button primitives
│   ├── minecraft-theme.css      # Minecraft HUD, emeralds, XP bar, hearts, badges
│   └── exam-simulator.css       # Official TCS iON SOF Exam styling and palette
├── js/
│   ├── audio-manager.js         # Web Audio synthesizer & Web Speech read-aloud
│   ├── confetti.js              # Canvas particle celebration generator
│   ├── storage.js               # LocalStorage manager (streak, XP, mistakes, stats)
│   ├── mistake-bank.js          # Mistake recording, filtering, and inline retry
│   ├── weak-areas.js            # Topic diagnostic engine & 5-Q power workouts
│   ├── quiz-engine.js           # Dual-mode engine (Quest vs TCS iON Exam)
│   └── app.js                   # Master controller & navigation coordinator
├── data/
│   ├── igko-questions.js        # 200 IGKO Questions (Sets 1 to 20)
│   ├── imo-questions.js         # 200 IMO Questions (Sets 1 to 20)
│   ├── nso-questions.js         # 200 NSO Questions (Sets 1 to 20)
│   └── badges.js                # Mascot companions, XP levels & trophy badges
├── mocks/                       # 5 Full Interactive Archetype Mockups
│   ├── mock1_duolingo_quest.html
│   ├── mock2_kahoot_arcade.html
│   ├── mock3_khan_kids.html
│   ├── mock4_prodigy_overworld.html
│   └── mock5_sof_official_modern.html
├── docs/
│   ├── PARENT_GUIDE.md          # Easy 10-minute daily routine guide for parents
│   ├── DEPLOYMENT.md            # 1-click hosting on GitHub Pages, Vercel & Netlify
│   └── DESIGN_EVALUATION.md     # Comparative UX matrix across all 5 mockups
└── igko_sample_paper_class-2_2026-27.pdf # Official SOF sample paper reference
```

---

## 🚀 Quick Start & Hosting

### Run Locally (Offline)
Simply double-click `index.html` in Chrome, Safari, or Edge. Everything functions completely offline!

### 1-Click Free Web Hosting
To share a live link with family on tablets, iPads, or phones:
- **GitHub Pages**: Go to repo *Settings → Pages → Deploy from branch (main / root)*.
- **Vercel**: Import the GitHub repo or drag-and-drop the folder into [vercel.com](https://vercel.com).
- Full details are in [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## 👨‍👩‍👦 Guide for Parents
A dedicated, easy-to-read guide for daily practice routines, handling tricky vocabulary with the "🔊 Read" button, and weekend mock exams is available in [`docs/PARENT_GUIDE.md`](docs/PARENT_GUIDE.md).
