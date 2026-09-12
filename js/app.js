// App Controller: Main UI Coordinator, State Initialization & Tab Router

class AppController {
  constructor() {
    this.currentSubject = 'IMO'; // default to Mathematics
  }

  init() {
    this.registerServiceWorker();
    this.updateHUD();
    this.renderMissions();
    this.renderTrophyRoom();

    // Default start
    this.switchTab('quest');

    // Auto-update HUD every 3 seconds if state changes
    setInterval(() => this.updateHUD(), 2000);
  }

  updateHUD() {
    const profile = window.storageManager.data.profile;
    const streakEl = document.getElementById('hud-streak-val');
    const emeraldsEl = document.getElementById('hud-emeralds-val');
    const heartsEl = document.getElementById('hud-hearts-val');
    const companionEl = document.getElementById('hud-companion-val');
    const xpRatioEl = document.getElementById('hud-xp-ratio');
    const xpFillEl = document.getElementById('hud-xp-fill');
    const levelTitleEl = document.getElementById('hud-level-title');

    if (streakEl) streakEl.textContent = `${profile.streak} Days`;
    if (emeraldsEl) emeraldsEl.textContent = `${profile.emeralds} 💎`;
    if (heartsEl) heartsEl.textContent = `${profile.hearts} / 5 ❤️`;

    const mascotObj = (window.MINECRAFT_MASCOTS || []).find(m => m.id === profile.mascot) || { name: "Steve", icon: "⛏️" };
    if (companionEl) companionEl.textContent = `${mascotObj.icon} ${mascotObj.name}`;

    const level = window.storageManager.getLevel();
    const xpCurrent = window.storageManager.getXpInCurrentLevel();
    if (levelTitleEl) levelTitleEl.textContent = `LEVEL ${level}: DIAMOND SCHOLAR`;
    if (xpRatioEl) xpRatioEl.textContent = `${xpCurrent} / 100 XP`;
    if (xpFillEl) xpFillEl.style.width = `${xpCurrent}%`;
  }

  switchTab(tabId) {
    window.audioManager.playClick();
    document.querySelectorAll('.nav-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

    const btn = document.getElementById(`nav-btn-${tabId}`);
    if (btn) btn.classList.add('active');

    const pane = document.getElementById(`pane-${tabId}`);
    if (pane) pane.classList.add('active');

    // Trigger tab-specific refresh
    if (tabId === 'mistakes') {
      window.mistakeBank.render();
    } else if (tabId === 'weakareas') {
      window.weakAreas.render();
    } else if (tabId === 'trophies') {
      this.renderTrophyRoom();
    } else if (tabId === 'quest') {
      this.renderMissions();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectSubject(subject) {
    this.currentSubject = subject;
    window.audioManager.playClick();
    document.querySelectorAll('.biome-card').forEach(b => b.classList.remove('active-subject'));
    const activeCard = document.getElementById(`biome-${subject.toLowerCase()}`);
    if (activeCard) activeCard.classList.add('active-subject');
    this.renderMissions();
  }

  renderMissions() {
    const container = document.getElementById('sets-node-container');
    const titleEl = document.getElementById('active-subject-title');
    if (!container) return;

    if (titleEl) {
      titleEl.textContent = `${this.currentSubject} Olympiad Missions (10 Sets x 10 Questions)`;
    }

    let totalSets = 10;
    let cardsHtml = '';

    for (let setNum = 1; setNum <= totalSets; setNum++) {
      const isDone = window.storageManager.isSetCompleted(this.currentSubject, setNum);
      const isNext = !isDone && (setNum === 1 || window.storageManager.isSetCompleted(this.currentSubject, setNum - 1));

      cardsHtml += `
        <div class="set-node-card ${isDone ? 'completed' : (isNext ? 'current' : '')}" onclick="window.app.startMissionSet('${this.currentSubject}', ${setNum})">
          <div class="set-node-icon">${isDone ? '⭐' : (isNext ? '⚔️' : '🔒')}</div>
          <div class="set-node-title">Set ${setNum}</div>
          <div class="set-node-status">${isDone ? 'Completed 💎' : (isNext ? 'Ready to Play' : 'Unlocked')}</div>
        </div>
      `;
    }

    container.innerHTML = cardsHtml;
  }

  startMissionSet(subject, setNum) {
    window.quizEngine.startPracticeSet(subject, setNum);
    this.switchTab('quiz');
  }

  renderTrophyRoom() {
    const mascotContainer = document.getElementById('mascot-select-container');
    const badgesContainer = document.getElementById('badges-grid-container');

    // Mascot picker
    if (mascotContainer && window.MINECRAFT_MASCOTS) {
      const currentMascot = window.storageManager.getMascot();
      mascotContainer.innerHTML = window.MINECRAFT_MASCOTS.map(m => {
        const isActive = m.id === currentMascot;
        return `
          <div class="card-box" style="flex: 1; min-width: 140px; text-align: center; cursor: pointer; border-color: ${isActive ? 'var(--primary)' : 'var(--border)'}; background: ${isActive ? '#f0fdf4' : '#fff'};" onclick="window.app.changeMascot('${m.id}')">
            <div style="font-size: 38px; margin-bottom: 6px;">${m.icon}</div>
            <div style="font-weight: 900; font-size: 15px;">${m.name}</div>
            <div style="font-size: 12px; color: ${isActive ? 'var(--primary-dark)' : '#64748b'}; font-weight: 800; margin-top: 4px;">
              ${isActive ? 'Active Buddy ✅' : 'Choose'}
            </div>
          </div>
        `;
      }).join('');
    }

    // Badges grid
    if (badgesContainer && window.MINECRAFT_BADGES) {
      const unlocked = window.storageManager.data.unlockedBadges || [];
      badgesContainer.innerHTML = window.MINECRAFT_BADGES.map(b => {
        const isUnlocked = unlocked.includes(b.id);
        return `
          <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
            <div class="badge-icon-box">${b.icon}</div>
            <div>
              <h4 style="font-size: 16px; font-weight: 900; color: #1e293b;">${b.title}</h4>
              <p style="font-size: 13px; color: #64748b; margin: 2px 0 6px;">${b.desc}</p>
              <span class="brand-badge" style="background: ${isUnlocked ? '#dcfce7' : '#e2e8f0'}; color: ${isUnlocked ? '#15803d' : '#64748b'};">
                ${isUnlocked ? 'Unlocked 💎' : 'In Progress'}
              </span>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  changeMascot(mascotId) {
    window.storageManager.setMascot(mascotId);
    window.audioManager.playMinecraftDing();
    this.updateHUD();
    this.renderTrophyRoom();
  }

  // Offline-first PWA: cache the app shell so practice works without internet.
  // Registration is silent; an update applies on the next launch.
  registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').then((reg) => {
        if (reg.waiting) reg.waiting.postMessage('SKIP_WAITING');
        reg.addEventListener('updatefound', () => {
          const worker = reg.installing;
          if (worker) {
            worker.addEventListener('statechange', () => {
              if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                reg.waiting ? reg.waiting.postMessage('SKIP_WAITING') : null;
              }
            });
          }
        });
      }).catch((e) => console.warn('Service worker unavailable:', e));
    });
    let reloaded = false;
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!reloaded) {
          reloaded = true;
          window.location.reload();
        }
      });
    }
  }

  openParentModal() {
    const modal = document.getElementById('parent-guide-modal');
    if (modal) modal.style.display = 'flex';
  }

  closeParentModal() {
    const modal = document.getElementById('parent-guide-modal');
    if (modal) modal.style.display = 'none';
  }

  confirmParentReset() {
    const answer = prompt("To reset progress and start fresh, type 'RESET' below:");
    if (answer === 'RESET') {
      window.storageManager.resetAll();
      alert("All learning records and mistakes have been reset for a fresh start!");
      location.reload();
    }
  }
}

window.app = new AppController();

window.addEventListener('DOMContentLoaded', () => {
  // First-gesture unlock for Web Audio autoplay policy + speech synthesis.
  const unlockOnce = () => {
    window.audioManager.unlock();
    window.removeEventListener('pointerdown', unlockOnce);
    window.removeEventListener('keydown', unlockOnce);
  };
  window.addEventListener('pointerdown', unlockOnce);
  window.addEventListener('keydown', unlockOnce);
  window.app.init();
  // Honest offline signal: if persistence is unavailable, say so once.
  if (window.SOF_STORAGE_OK === false) {
    console.warn('SOF Quest: localStorage unavailable — progress lasts this session only.');
  }
});
