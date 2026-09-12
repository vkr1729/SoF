// Quiz Engine: Powers both Playful Practice Mode (10-Q sets) and Official SOF Exam Simulation (35-Q TCS iON)

class QuizEngine {
  constructor() {
    this.mode = 'practice'; // 'practice' | 'exam'
    this.questions = [];
    this.currentIndex = 0;
    this.selectedAnswers = {}; // qIndex -> optionIndex
    this.questionStatuses = {}; // qIndex -> 'answered' | 'not-answered' | 'marked-review' | 'unvisited'
    this.isAnswerChecked = false;
    this.timerInterval = null;
    this.timeRemainingSecs = 0;
    this.totalTimeSecs = 0;
    this.examConfig = null;
  }

  // ==========================================
  // PRACTICE QUEST MODE (10 Questions per set)
  // ==========================================
  startPracticeSet(subject, setNumber) {
    this.mode = 'practice';
    let bank = [];
    if (subject === 'IGKO' && window.IGKO_QUESTIONS) bank = window.IGKO_QUESTIONS;
    else if (subject === 'IMO' && window.IMO_QUESTIONS) bank = window.IMO_QUESTIONS;
    else if (subject === 'NSO' && window.NSO_QUESTIONS) bank = window.NSO_QUESTIONS;

    const setQuestions = bank.filter(q => q.set === parseInt(setNumber, 10));
    this.questions = setQuestions.length > 0 ? setQuestions : bank.slice(0, 10);
    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.isAnswerChecked = false;
    this.examConfig = { title: `${subject} • Set ${setNumber}`, subject, setNumber };

    this.renderPracticeQuestion();
  }

  startCustomWorkout(title, questionsArray) {
    this.mode = 'practice';
    this.questions = questionsArray;
    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.isAnswerChecked = false;
    this.examConfig = { title, isWorkout: true };

    this.renderPracticeQuestion();
  }

  renderPracticeQuestion() {
    const card = document.getElementById('practice-card-container');
    if (!card) return;

    if (this.currentIndex >= this.questions.length) {
      this.renderPracticeSummary();
      return;
    }

    const q = this.questions[this.currentIndex];
    const totalQ = this.questions.length;
    const progressPct = Math.round(((this.currentIndex) / totalQ) * 100);
    const mascot = window.storageManager.getMascot();
    const mascotObj = (window.MINECRAFT_MASCOTS || []).find(m => m.id === mascot) || { name: "Steve", icon: "⛏️" };

    const optLetters = ['A', 'B', 'C', 'D'];

    card.innerHTML = `
      <div class="card-box" style="max-width: 760px; margin: 0 auto;">
        <!-- Progress Bar -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-weight: 800; font-size: 13px; color: var(--text-muted);">
          <span>${this.examConfig.title}</span>
          <span>Question ${this.currentIndex + 1} of ${totalQ}</span>
        </div>
        <div class="xp-bar-track" style="margin-bottom: 24px; height: 12px;">
          <div class="xp-bar-fill" style="width: ${progressPct}%;"></div>
        </div>

        <!-- Mascot Guidance Bubble -->
        <div class="mascot-speech-container">
          <div class="mascot-avatar-box">${mascotObj.icon}</div>
          <div class="mascot-text-box">
            <div class="mascot-name-tag">${mascotObj.name}</div>
            <div class="mascot-quote" id="mascot-live-quote">
              "Question ${this.currentIndex + 1}! Read carefully and trust your inner genius!"
            </div>
          </div>
        </div>

        <!-- Question Statement & Read Aloud -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 18px;">
          <div>
            <span class="brand-badge" style="background: #e0f2fe; color: #0284c7; margin-bottom: 8px; display: inline-block;">
              ${q.topic}
            </span>
            <h2 style="font-size: 20px; font-weight: 800; line-height: 1.4; color: #1e293b;">
              ${q.question}
            </h2>
          </div>
          <button class="btn-tactile btn-blue" style="padding: 8px 14px; font-size: 14px; flex-shrink: 0;" onclick="window.audioManager.speak('${this.escapeQuotes(q.question)}')">
            🔊 Read
          </button>
        </div>

        <!-- Inline SVG visual if present -->
        ${q.svg ? `<div style="text-align: center; margin: 16px 0;">${q.svg}</div>` : ''}

        <!-- 4 Options -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-top: 20px;" id="practice-options-grid">
          ${q.options.map((opt, idx) => `
            <button class="btn-tactile btn-secondary practice-opt-btn" id="p-opt-${idx}" style="text-align: left; justify-content: flex-start; padding: 14px 18px; font-size: 16px;" onclick="window.quizEngine.handlePracticeSelect(${idx})">
              <span style="background: #e2e8f0; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-weight: 900; margin-right: 8px; flex-shrink: 0;">
                ${optLetters[idx]}
              </span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>

        <!-- Feedback & Explanation Box -->
        <div id="practice-feedback" style="display: none; margin-top: 22px; padding: 18px; border-radius: 16px; border: 2px solid transparent;"></div>

        <!-- Next Button -->
        <div style="display: flex; justify-content: flex-end; margin-top: 24px;">
          <button class="btn-tactile btn-green" id="practice-next-btn" style="display: none;" onclick="window.quizEngine.nextPracticeQuestion()">
            ${this.currentIndex + 1 === totalQ ? 'See Results 🏆' : 'Next Question ➜'}
          </button>
        </div>
      </div>
    `;

    // Speak question aloud initially if speech is enabled
    window.audioManager.speak(q.question);
  }

  handlePracticeSelect(chosenIdx) {
    if (this.isAnswerChecked) return; // already answered
    this.isAnswerChecked = true;

    const q = this.questions[this.currentIndex];
    const isCorrect = chosenIdx === q.answer;
    this.selectedAnswers[this.currentIndex] = chosenIdx;

    // Record in storage
    window.storageManager.recordAttempt(q, chosenIdx, isCorrect);

    // Visual buttons update
    document.querySelectorAll('.practice-opt-btn').forEach((btn, idx) => {
      btn.style.pointerEvents = 'none';
      if (idx === q.answer) {
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-green');
      } else if (idx === chosenIdx && !isCorrect) {
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-red');
      }
    });

    const fb = document.getElementById('practice-feedback');
    const quote = document.getElementById('mascot-live-quote');
    const nextBtn = document.getElementById('practice-next-btn');

    fb.style.display = 'block';
    nextBtn.style.display = 'inline-flex';

    if (isCorrect) {
      fb.style.background = '#dcfce7';
      fb.style.borderColor = '#86efac';
      fb.style.color = '#14532d';
      fb.innerHTML = `
        <div style="font-weight: 800; font-size: 16px; margin-bottom: 4px;">🎉 AWESOME! That's correct!</div>
        <p style="font-size: 14px; margin-bottom: 6px;">${q.explanation}</p>
        <span style="font-size: 13px; font-weight: 900; color: #15803d;">+10 Emeralds 💎 | +25 XP</span>
      `;
      if (quote) quote.textContent = `"Boom! You mined the right answer on your first try!"`;
      window.audioManager.playCorrect();
    } else {
      fb.style.background = '#fee2e2';
      fb.style.borderColor = '#fca5a5';
      fb.style.color = '#7f1d1d';
      fb.innerHTML = `
        <div style="font-weight: 800; font-size: 16px; margin-bottom: 4px;">💡 Nice try! Mistakes help our brain grow!</div>
        <p style="font-size: 14px; margin-bottom: 6px;">${q.explanation}</p>
        <span style="font-size: 12px; font-weight: 800; color: #b91c1c;">Saved to your Mistake Bank to practice later!</span>
      `;
      if (quote) quote.textContent = `"No worries at all! Every miner discovers diamonds step-by-step!"`;
      window.audioManager.playIncorrect();
    }
  }

  nextPracticeQuestion() {
    this.currentIndex++;
    this.isAnswerChecked = false;
    this.renderPracticeQuestion();
  }

  renderPracticeSummary() {
    const card = document.getElementById('practice-card-container');
    if (!card) return;

    let correctCount = 0;
    this.questions.forEach((q, idx) => {
      if (this.selectedAnswers[idx] === q.answer) correctCount++;
    });

    const total = this.questions.length;
    const pct = Math.round((correctCount / total) * 100);

    if (this.examConfig.setNumber) {
      window.storageManager.markSetCompleted(this.examConfig.subject, this.examConfig.setNumber);
    }

    window.confettiManager.trigger(100);
    window.audioManager.playFanfare();

    card.innerHTML = `
      <div class="card-box" style="max-width: 650px; margin: 0 auto; text-align: center; padding: 40px 24px;">
        <div style="font-size: 64px; margin-bottom: 12px;">🏆</div>
        <h2 style="font-size: 28px; font-weight: 900; color: #1e293b; margin-bottom: 6px;">Mission Accomplished!</h2>
        <p style="color: #64748b; font-size: 16px; margin-bottom: 24px;">You completed ${this.examConfig.title}!</p>

        <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 20px; padding: 24px; margin-bottom: 28px;">
          <div style="font-size: 48px; font-weight: 900; color: #15803d;">${correctCount} / ${total}</div>
          <div style="font-weight: 800; color: #475569; font-size: 18px;">${pct}% Accuracy</div>
          <div style="margin-top: 14px; display: flex; justify-content: center; gap: 14px;">
            <span class="mc-stat-pill emeralds">💎 +50 Emeralds</span>
            <span class="mc-stat-pill streak">🔥 Streak Kept!</span>
          </div>
        </div>

        <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
          <button class="btn-tactile btn-blue" onclick="window.app.switchTab('quest')">
            🗺️ Back to Mission Map
          </button>
          <button class="btn-tactile btn-yellow" onclick="window.app.switchTab('mistakes')">
            📓 Check Mistake Bank
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // OFFICIAL SOF EXAM SIMULATION MODE (TCS iON)
  // ==========================================
  startOfficialExam(subject = 'IMO', isQuick = false) {
    this.mode = 'exam';
    let bank = [];
    if (subject === 'IGKO' && window.IGKO_QUESTIONS) bank = window.IGKO_QUESTIONS;
    else if (subject === 'IMO' && window.IMO_QUESTIONS) bank = window.IMO_QUESTIONS;
    else if (subject === 'NSO' && window.NSO_QUESTIONS) bank = window.NSO_QUESTIONS;

    const count = isQuick ? 10 : Math.min(35, bank.length);
    // Shuffle or select questions
    this.questions = bank.slice(0, count);
    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.questionStatuses = {};

    for (let i = 0; i < count; i++) {
      this.questionStatuses[i] = 'unvisited';
    }
    this.questionStatuses[0] = 'not-answered'; // first question active

    this.totalTimeSecs = isQuick ? (15 * 60) : (60 * 60);
    this.timeRemainingSecs = this.totalTimeSecs;
    this.examConfig = { subject, count, isQuick };

    this.startTimer();
    this.renderExamStage();
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeRemainingSecs--;
      this.updateTimerDisplay();
      if (this.timeRemainingSecs <= 0) {
        clearInterval(this.timerInterval);
        alert("Time is up! Submitting your exam automatically.");
        this.submitExam();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const el = document.getElementById('ion-timer-val');
    if (!el) return;
    const mins = Math.floor(this.timeRemainingSecs / 60);
    const secs = this.timeRemainingSecs % 60;
    el.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  renderExamStage() {
    const container = document.getElementById('exam-sim-container');
    if (!container) return;

    const q = this.questions[this.currentIndex];
    const totalQ = this.questions.length;
    const optLetters = ['A', 'B', 'C', 'D'];
    const currentSelected = this.selectedAnswers[this.currentIndex];

    container.innerHTML = `
      <div class="exam-simulator-view">
        <!-- Blue Header -->
        <div class="ion-header">
          <div class="ion-exam-info">
            <span class="ion-badge">SOF</span>
            <div>
              <div class="ion-title">SOF ${this.examConfig.subject} OLYMPIAD - CLASS 2</div>
              <div style="font-size: 11px; opacity: 0.85;">Official TCS iON Test Engine Simulator</div>
            </div>
          </div>
          <div class="ion-timer">
            <span>⏱️ Time Left:</span>
            <span id="ion-timer-val">59:59</span>
          </div>
        </div>

        <!-- Section Navigation Bar -->
        <div class="ion-sections-bar">
          <button class="ion-sec-tab active">${this.examConfig.subject} Section</button>
          <button class="ion-sec-tab">Achievers Section (HOTS)</button>
        </div>

        <!-- Split Stage: Left Question, Right Palette -->
        <div class="ion-split-stage">
          <div class="ion-question-col">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 16px;">
              <span class="ion-q-num">Question ${this.currentIndex + 1} of ${totalQ}</span>
              <div style="display: flex; gap: 8px;">
                <button class="btn-tactile btn-blue" style="padding: 4px 10px; font-size: 12px;" onclick="window.audioManager.speak('${this.escapeQuotes(q.question)}')">
                  🔊 Read Aloud
                </button>
                <span style="font-size: 12px; background: #e2e8f0; padding: 4px 8px; border-radius: 4px; font-weight: 700;">
                  Marks: ${q.topic.includes('Achievers') ? '+2' : '+1'} | Neg: 0
                </span>
              </div>
            </div>

            <p class="ion-q-statement">${q.question}</p>

            ${q.svg ? `<div style="text-align: center; margin: 14px 0;">${q.svg}</div>` : ''}

            <!-- 4 Radio Options -->
            <div class="ion-options-group">
              ${q.options.map((opt, idx) => `
                <label class="ion-opt-row" id="ion-row-${idx}">
                  <input type="radio" name="ion_opt" value="${idx}" ${currentSelected === idx ? 'checked' : ''} onchange="window.quizEngine.onExamRadioChange(${idx})">
                  <span class="ion-opt-text">(${optLetters[idx]}) ${opt}</span>
                </label>
              `).join('')}
            </div>

            <!-- Bottom Action Controls -->
            <div class="ion-bottom-actions">
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="btn-tactile btn-secondary" style="font-size: 13px; padding: 8px 14px;" onclick="window.quizEngine.clearExamResponse()">
                  Clear Response
                </button>
                <button class="btn-tactile btn-purple" style="font-size: 13px; padding: 8px 14px;" onclick="window.quizEngine.markExamReview()">
                  Mark for Review & Next
                </button>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="btn-tactile btn-secondary" style="font-size: 13px; padding: 8px 14px;" ${this.currentIndex === 0 ? 'disabled' : ''} onclick="window.quizEngine.prevExamQuestion()">
                  ◀ Prev
                </button>
                <button class="btn-tactile btn-green" style="font-size: 13px; padding: 8px 18px;" onclick="window.quizEngine.saveAndNextExam()">
                  Save & Next ➜
                </button>
              </div>
            </div>
          </div>

          <!-- Right Palette & Profile -->
          <div class="ion-palette-col">
            <div class="ion-candidate-bar">
              <div class="ion-candidate-avatar">🧒</div>
              <div class="ion-candidate-details">
                <div class="ion-candidate-name">${window.storageManager.data.profile.name}</div>
                <div class="ion-candidate-roll">Roll No: 2026-SOF-CL2-1049</div>
              </div>
            </div>

            <div class="ion-palette-legend">
              <div class="ion-legend-item">
                <div class="ion-legend-box" style="background: #2e7d32;">0</div>
                <span>Answered</span>
              </div>
              <div class="ion-legend-item">
                <div class="ion-legend-box" style="background: #c62828;">0</div>
                <span>Not Answered</span>
              </div>
              <div class="ion-legend-item">
                <div class="ion-legend-box" style="background: #6a1b9a;">0</div>
                <span>Marked Review</span>
              </div>
              <div class="ion-legend-item">
                <div class="ion-legend-box" style="background: #cbd5e1; color: #333;">0</div>
                <span>Not Visited</span>
              </div>
            </div>

            <!-- Palette Grid -->
            <div class="ion-palette-grid">
              ${this.questions.map((_, idx) => {
                const status = this.questionStatuses[idx] || 'unvisited';
                const isCurrent = idx === this.currentIndex;
                return `
                  <button class="ion-palette-btn ${status} ${isCurrent ? 'current' : ''}" onclick="window.quizEngine.jumpToExamQuestion(${idx})">
                    ${idx + 1}
                  </button>
                `;
              }).join('')}
            </div>

            <div style="padding: 14px; border-top: 1px solid #e2e8f0;">
              <button class="btn-tactile btn-yellow" style="width: 100%; font-size: 14px;" onclick="window.quizEngine.confirmSubmitExam()">
                SUBMIT TEST
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.updateTimerDisplay();
  }

  onExamRadioChange(idx) {
    this.selectedAnswers[this.currentIndex] = idx;
    this.questionStatuses[this.currentIndex] = 'answered';
  }

  clearExamResponse() {
    delete this.selectedAnswers[this.currentIndex];
    this.questionStatuses[this.currentIndex] = 'not-answered';
    document.querySelectorAll('input[name="ion_opt"]').forEach(r => r.checked = false);
    this.renderExamStage();
  }

  markExamReview() {
    this.questionStatuses[this.currentIndex] = 'marked-review';
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      if (this.questionStatuses[this.currentIndex] === 'unvisited') {
        this.questionStatuses[this.currentIndex] = 'not-answered';
      }
    }
    this.renderExamStage();
  }

  saveAndNextExam() {
    if (this.selectedAnswers[this.currentIndex] !== undefined) {
      this.questionStatuses[this.currentIndex] = 'answered';
    } else {
      this.questionStatuses[this.currentIndex] = 'not-answered';
    }

    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      if (this.questionStatuses[this.currentIndex] === 'unvisited') {
        this.questionStatuses[this.currentIndex] = 'not-answered';
      }
      this.renderExamStage();
    } else {
      this.confirmSubmitExam();
    }
  }

  prevExamQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderExamStage();
    }
  }

  jumpToExamQuestion(targetIdx) {
    if (this.questionStatuses[this.currentIndex] === 'unvisited') {
      this.questionStatuses[this.currentIndex] = 'not-answered';
    }
    this.currentIndex = targetIdx;
    if (this.questionStatuses[targetIdx] === 'unvisited') {
      this.questionStatuses[targetIdx] = 'not-answered';
    }
    this.renderExamStage();
  }

  confirmSubmitExam() {
    const answeredCount = Object.keys(this.selectedAnswers).length;
    const totalCount = this.questions.length;
    const proceed = confirm(`You have answered ${answeredCount} of ${totalCount} questions.\nDo you want to submit the exam?`);
    if (proceed) {
      this.submitExam();
    }
  }

  submitExam() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    const timeSpent = this.totalTimeSecs - this.timeRemainingSecs;

    let totalMarks = 0;
    let earnedMarks = 0;

    this.questions.forEach((q, idx) => {
      const weight = q.topic.includes('Achievers') ? 2 : 1;
      totalMarks += weight;
      const isCorrect = this.selectedAnswers[idx] === q.answer;
      if (isCorrect) {
        earnedMarks += weight;
      }
      // Record in storage for weak-areas tracking
      if (this.selectedAnswers[idx] !== undefined) {
        window.storageManager.recordAttempt(q, this.selectedAnswers[idx], isCorrect);
      }
    });

    window.storageManager.saveExamResult({
      subject: this.examConfig.subject,
      score: earnedMarks,
      total: totalMarks,
      timeTakenSecs: timeSpent
    });

    window.confettiManager.trigger(120);
    window.audioManager.playFanfare();

    this.renderExamScorecard(earnedMarks, totalMarks, timeSpent);
  }

  renderExamScorecard(earned, total, timeSpent) {
    const container = document.getElementById('exam-sim-container');
    if (!container) return;

    const pct = Math.round((earned / total) * 100);
    const mins = Math.floor(timeSpent / 60);
    const secs = timeSpent % 60;

    container.innerHTML = `
      <div class="card-box" style="max-width: 800px; margin: 0 auto; text-align: center;">
        <div class="scorecard-banner">
          <h2 style="font-size: 26px; font-weight: 900;">Official SOF Exam Report Card</h2>
          <div class="score-big">${earned} / ${total}</div>
          <div class="score-pct">${pct}% Overall Accuracy</div>
          <div style="margin-top: 10px; font-size: 14px; opacity: 0.9;">Time Taken: ${mins}m ${secs}s</div>
        </div>

        <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 16px;">Question-by-Question Review</h3>
        <div style="display: flex; flex-direction: column; gap: 10px; text-align: left; max-height: 400px; overflow-y: auto; padding: 4px;">
          ${this.questions.map((q, idx) => {
            const chosen = this.selectedAnswers[idx];
            const isCorrect = chosen === q.answer;
            const chosenText = chosen !== undefined ? q.options[chosen] : "Unanswered";
            const correctText = q.options[q.answer];

            return `
              <div style="padding: 14px; border: 1px solid #e2e8f0; border-left: 5px solid ${isCorrect ? '#22c55e' : '#ef4444'}; border-radius: 8px; background: #fff;">
                <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 800; color: #64748b; margin-bottom: 4px;">
                  <span>Q${idx + 1} • ${q.topic}</span>
                  <span style="color: ${isCorrect ? '#15803d' : '#b91c1c'}; font-size: 13px;">${isCorrect ? '✅ Correct (+1)' : '❌ Incorrect (0)'}</span>
                </div>
                <div style="font-weight: 700; font-size: 15px; margin-bottom: 6px;">${q.question}</div>
                <div style="font-size: 13px; color: #334155;">
                  <strong>Your answer:</strong> ${chosenText} | <strong>Correct answer:</strong> ${correctText}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div style="display: flex; justify-content: center; gap: 14px; margin-top: 24px;">
          <button class="btn-tactile btn-blue" onclick="window.app.switchTab('exam')">
            Back to Exam Hub
          </button>
          <button class="btn-tactile btn-yellow" onclick="window.app.switchTab('mistakes')">
            Review Mistakes in Notebook
          </button>
        </div>
      </div>
    `;
  }

  escapeQuotes(str) {
    return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
}

window.quizEngine = new QuizEngine();
