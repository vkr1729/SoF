// App Controller: Main UI Coordinator, State Initialization & Tab Router

class AppController {
  constructor() {
    this.currentSubject = 'IMO'; // default to Mathematics
  }

  init() {
    this.registerServiceWorker();
    this.bindMascotImageFallbacks();
    this.updateHUD();
    this.updateMascotHero();
    this.renderMissions();
    this.renderTrophyRoom();

    // Default start
    this.switchTab('quest');

    // Auto-update HUD every 3 seconds if state changes
    setInterval(() => this.updateHUD(), 2000);
  }

  // One delegated error listener swaps any broken mascot <img> for its
  // emoji fallback — bank/asset text never lands inside an onerror string.
  bindMascotImageFallbacks() {
    if (window.__sofMascotFallbackBound) return;
    window.__sofMascotFallbackBound = true;
    document.addEventListener('error', (ev) => {
      const img = ev.target;
      if (!img || img.tagName !== 'IMG' || !img.isConnected) return;
      const fbId = img.dataset ? img.dataset.mascotFallback : null;
      if (!fbId) return;
      const mascot = (window.MINECRAFT_MASCOTS || []).find(m => m.id === fbId);
      const fallback = document.createElement('div');
      fallback.style.cssText = 'font-size: 38px; margin-bottom: 6px;';
      fallback.textContent = (mascot && mascot.icon) || '⛏️';
      img.replaceWith(fallback);
    }, true);
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
    if (companionEl) {
      if (mascotObj.avatarImg && mascotObj.id) {
        companionEl.innerHTML = `<img src="${mascotObj.avatarImg}" alt="${mascotObj.name}" class="hud-companion-img" data-mascot-fallback="${mascotObj.id}" /> <span>${mascotObj.name}</span>`;
      } else if (mascotObj.avatarImg) {
        companionEl.innerHTML = `<img src="${mascotObj.avatarImg}" alt="${mascotObj.name}" class="hud-companion-img" onerror="this.remove()" /> <span>${mascotObj.name}</span>`;
      } else {
        companionEl.textContent = `${mascotObj.icon} ${mascotObj.name}`;
      }
    }

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
      this.updateMascotHero();
      this.renderMissions();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateMascotHero() {
    const profile = window.storageManager.data.profile;
    const mascotObj = (window.MINECRAFT_MASCOTS || []).find(m => m.id === profile.mascot) || { name: "Steve the Miner", icon: "⛏️" };

    const heroImg = document.getElementById('mascot-hero-img');
    const heroBuddyName = document.getElementById('mascot-hero-buddy-name');
    const heroHeading = document.getElementById('mascot-hero-heading');

    if (heroImg) {
      if (mascotObj.avatarImg) {
        heroImg.src = mascotObj.avatarImg;
      }
      heroImg.alt = mascotObj.name;
      heroImg.setAttribute('data-mascot-fallback', mascotObj.id);
    }
    if (heroBuddyName) {
      heroBuddyName.textContent = `${mascotObj.name} ${mascotObj.icon}`;
    }
    if (heroHeading && mascotObj.tagline) {
      heroHeading.textContent = `"${mascotObj.tagline}"`;
    }
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
      titleEl.textContent = `${this.currentSubject} Olympiad Missions (20 Sets x 10 Questions)`;
    }

    let totalSets = 20;
    let cardsHtml = '';

    for (let setNum = 1; setNum <= totalSets; setNum++) {
      const isDone = window.storageManager.isSetCompleted(this.currentSubject, setNum);
      const isNext = !isDone && (setNum === 1 || window.storageManager.isSetCompleted(this.currentSubject, setNum - 1));

      // Spec conformance: completed sets must expose a distinct Revise button,
      // and locked sets must not fire clicks or claim to be unlocked.
      const statusHtml = isDone
        ? `<div class="set-node-status">Completed 💎</div>
           <button class="btn-tactile btn-blue touch-44 set-node-revise-btn" style="margin-top: 6px; padding: 4px 10px; font-size: 11px; width: 100%;" onclick="event.stopPropagation(); window.app.startMissionSet('${this.currentSubject}', ${setNum})" aria-label="Revise set ${setNum}">
             🛡️ Revise Set
           </button>`
        : `<div class="set-node-status">${isNext ? 'Ready to Play' : 'Locked'}</div>`;

      const clickAttr = (isDone || isNext)
        ? `onclick="window.app.startMissionSet('${this.currentSubject}', ${setNum})"`
        : '';
      const tabIndex = (isDone || isNext) ? '0' : '-1';
      const roleAttr = (isDone || isNext) ? 'role="button"' : '';

      cardsHtml += `
        <div class="set-node-card ${isDone ? 'completed' : (isNext ? 'current' : 'locked')}" ${clickAttr} ${roleAttr} tabindex="${tabIndex}" aria-label="Set ${setNum} ${isDone ? 'completed, click to revise' : (isNext ? 'ready to play' : 'locked')}">
          <div class="set-node-icon">${isDone ? '⭐' : (isNext ? '⚔️' : '🔒')}</div>
          <div class="set-node-title">Set ${setNum}</div>
          ${statusHtml}
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
        const visualHtml = m.avatarImg
          ? `<img src="${m.avatarImg}" alt="${m.name}" class="mascot-select-img" data-mascot-fallback="${m.id}" />`
          : `<div style="font-size: 48px; margin-bottom: 8px;">${m.icon}</div>`;
        return `
          <div class="card-box mascot-pick-card ${isActive ? 'active-mascot' : ''}" style="flex: 1; min-width: 170px; text-align: center; cursor: pointer; border-color: ${isActive ? 'var(--primary)' : 'var(--border)'}; background: ${isActive ? '#f0f9ff' : '#fff'};" onclick="window.app.changeMascot('${m.id}')">
            ${visualHtml}
            <div style="font-weight: 900; font-size: 16px; color: #1e293b;">${m.name}</div>
            <div style="font-size: 12px; color: #64748b; margin-top: 4px; font-style: italic; min-height: 32px; display: flex; align-items: center; justify-content: center;">"${m.tagline || ''}"</div>
            <div style="font-size: 12px; color: ${isActive ? '#0284c7' : '#64748b'}; font-weight: 800; margin-top: 8px; background: ${isActive ? '#e0f2fe' : '#f1f5f9'}; padding: 4px 12px; border-radius: 99px;">
              ${isActive ? 'Active Buddy ✅' : 'Choose Buddy ➜'}
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
    this.updateMascotHero();
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
