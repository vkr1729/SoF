// Mistake Bank (Notebook of Growth) Controller
// Allows reviewing, retrying, and mastering incorrectly answered questions

class MistakeBankController {
  constructor() {
    this.currentFilter = 'ALL';
  }

  setFilter(subject) {
    this.currentFilter = subject;
    this.render();
  }

  render() {
    const container = document.getElementById('mistakes-list');
    if (!container) return;

    const mistakes = window.storageManager.getMistakes(this.currentFilter);
    const countBadge = document.getElementById('mistakes-count-badge');
    if (countBadge) countBadge.textContent = `${mistakes.length} Questions`;

    if (mistakes.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 48px 20px; background: #ffffff; border: 2px dashed #cbd5e1; border-radius: 20px;">
          <div style="font-size: 56px; margin-bottom: 12px;">🌟</div>
          <h3 style="font-size: 20px; font-weight: 800; color: #1e293b; margin-bottom: 6px;">Your Mistake Bank is Clean!</h3>
          <p style="color: #64748b; font-size: 15px; max-width: 450px; margin: 0 auto;">
            Whenever you miss a question during practice or tests, it safely lands here so you can retry it and turn it into a shiny diamond!
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = mistakes.map(item => {
      const isMastered = item.mastered;
      const optLetters = ['A', 'B', 'C', 'D'];
      const chosenText = item.options[item.chosenAnswer] || "None";
      const correctText = item.options[item.correctAnswer] || "";

      return `
        <div class="card-box" style="border-left: 6px solid ${isMastered ? '#22c55e' : '#ef4444'};" id="mistake-card-${item.id}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <span class="brand-badge" style="background: ${this.getSubjectColor(item.subject)}; color: #fff;">${item.subject}</span>
              <span style="font-weight: 800; font-size: 13px; color: #64748b;">${item.topic}</span>
            </div>
            ${isMastered ? 
              `<span style="background: #dcfce7; color: #15803d; font-weight: 800; padding: 4px 10px; border-radius: 99px; font-size: 12px;">💎 Mastered</span>` : 
              `<span style="background: #fee2e2; color: #b91c1c; font-weight: 800; padding: 4px 10px; border-radius: 99px; font-size: 12px;">Needs Practice</span>`
            }
          </div>

          <h3 style="font-size: 17px; font-weight: 800; color: #1e293b; line-height: 1.4; margin-bottom: 16px;">
            ${item.question}
          </h3>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 16px;">
            <div style="background: #fee2e2; border: 1px solid #fca5a5; padding: 10px 14px; border-radius: 10px; font-size: 14px;">
              <span style="color: #991b1b; font-weight: 800;">❌ Your Choice:</span>
              <div style="color: #7f1d1d; font-weight: 700; margin-top: 2px;">${chosenText}</div>
            </div>
            <div style="background: #dcfce7; border: 1px solid #86efac; padding: 10px 14px; border-radius: 10px; font-size: 14px;">
              <span style="color: #166534; font-weight: 800;">✅ Correct Answer:</span>
              <div style="color: #14532d; font-weight: 700; margin-top: 2px;">${correctText}</div>
            </div>
          </div>

          <div style="background: #f8fafc; border-left: 4px solid #0284c7; padding: 12px 16px; border-radius: 8px; font-size: 14px; margin-bottom: 18px;">
            <strong style="color: #0369a1;">💡 Kid-Friendly Explanation:</strong>
            <p style="color: #334155; margin-top: 4px; line-height: 1.4;">${item.explanation}</p>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <button class="btn-tactile btn-blue" style="font-size: 13px; padding: 8px 14px;" onclick="window.audioManager.speak('${this.escapeQuotes(item.question)}')">
              🔊 Read Aloud
            </button>
            <div style="display: flex; gap: 8px;">
              <button class="btn-tactile btn-green" style="font-size: 13px; padding: 8px 16px;" onclick="window.mistakeBank.retryQuestion('${item.id}')">
                Retry & Master 💎
              </button>
              <button class="btn-tactile btn-secondary" style="font-size: 13px; padding: 8px 12px;" onclick="window.storageManager.removeMistake('${item.id}'); window.mistakeBank.render();">
                🗑️
              </button>
            </div>
          </div>

          <!-- Inline Retry Zone -->
          <div id="retry-zone-${item.id}" style="display: none; margin-top: 18px; padding-top: 18px; border-top: 2px dashed #cbd5e1;">
            <p style="font-weight: 800; color: #1e293b; margin-bottom: 10px;">Select the right answer now:</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              ${item.options.map((opt, oIdx) => `
                <button class="btn-tactile btn-secondary" style="text-align: left; justify-content: flex-start; font-size: 14px; padding: 10px;" onclick="window.mistakeBank.submitRetry('${item.id}', ${oIdx})">
                  <strong>(${optLetters[oIdx]})</strong> ${opt}
                </button>
              `).join('')}
            </div>
            <div id="retry-msg-${item.id}" style="display: none; margin-top: 12px; font-weight: 800; font-size: 14px;"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  retryQuestion(questionId) {
    const zone = document.getElementById(`retry-zone-${questionId}`);
    if (zone) {
      zone.style.display = zone.style.display === 'none' ? 'block' : 'none';
    }
  }

  submitRetry(questionId, chosenIdx) {
    const mistakes = window.storageManager.getMistakes();
    const item = mistakes.find(m => m.id === questionId);
    if (!item) return;

    const msg = document.getElementById(`retry-msg-${questionId}`);
    msg.style.display = 'block';

    if (chosenIdx === item.correctAnswer) {
      msg.style.color = '#15803d';
      msg.innerHTML = '🎉 MASTERED! Diamond level thinking! +50 XP and +25 Emeralds earned! 💎';
      window.audioManager.playCorrect();
      window.confettiManager.trigger(50);
      window.storageManager.markMistakeMastered(questionId);
      setTimeout(() => this.render(), 1200);
    } else {
      msg.style.color = '#b91c1c';
      msg.innerHTML = 'Not quite! Read the friendly tip above and give it another shot!';
      window.audioManager.playIncorrect();
    }
  }

  getSubjectColor(subj) {
    if (subj === 'IGKO') return '#f59e0b';
    if (subj === 'IMO') return '#0284c7';
    if (subj === 'NSO') return '#16a34a';
    return '#64748b';
  }

  escapeQuotes(str) {
    return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
}

window.mistakeBank = new MistakeBankController();
