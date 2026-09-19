// Anti-Gaming Revision Mode, Avatar Integration & Storage Bounding Tests
// Run: node --test tests/revision.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function loadStorage() {
  const store = {};
  const localStorageStub = {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); }
  };
  const window = {
    SOFUtils: {
      localDay: () => '2026-09-19'
    }
  };
  const src = fs.readFileSync(path.join(root, 'js/storage.js'), 'utf8');
  new Function('window', 'localStorage', 'console', src)(window, localStorageStub, console);
  return { sm: window.storageManager, store };
}

function loadEngine(storageManager) {
  const listeners = {};
  const elements = {};
  const documentStub = {
    getElementById: (id) => {
      if (!elements[id]) {
        elements[id] = {
          style: {},
          classList: {
            add() {},
            remove() {}
          },
          innerHTML: '',
          textContent: ''
        };
      }
      return elements[id];
    },
    querySelectorAll: () => [],
    addEventListener: (t, h) => { listeners[t] = h; },
    removeEventListener: (t) => { delete listeners[t]; },
    hidden: false
  };

  const sampleQuestions = [];
  for (let i = 0; i < 10; i++) {
    sampleQuestions.push({
      id: `IMO-1-${i}`,
      subject: 'IMO',
      set: 1,
      topic: 'Number Sense',
      difficulty: 'Easy',
      question: `Question ${i + 1}`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      answer: 0,
      explanation: 'Explanation for question'
    });
  }

  const window = {
    SOFUtils: {
      escapeHtml: (s) => String(s || ''),
      shuffleOptions: (q) => ({ ...q })
    },
    MINECRAFT_MASCOTS: [
      { id: 'steve', name: 'Steve the Miner', icon: '⛏️', avatarImg: 'assets/minecraft/steve.jpg' }
    ],
    IMO_QUESTIONS: sampleQuestions,
    storageManager,
    confettiManager: { trigger() {} },
    audioManager: { playFanfare() {}, speak() {}, playCorrect() {}, playIncorrect() {}, hasInteracted: false },
    app: { updateHUD() {}, switchTab() {} }
  };

  const src = fs.readFileSync(path.join(root, 'js/quiz-engine.js'), 'utf8');
  new Function('window', 'document', 'localStorage', 'setInterval', 'clearInterval', 'alert', src)(
    window, documentStub, undefined, setInterval, clearInterval, () => {}
  );

  return { engine: window.quizEngine, window, elements };
}

test('storage.recordAttempt with isRevision=true mutates 0 XP, 0 Emeralds, 0 stats, 0 mistakes', () => {
  const { sm } = loadStorage();
  const initialXP = sm.data.profile.xp;
  const initialEmeralds = sm.data.profile.emeralds;
  const initialMistakes = sm.data.mistakes.length;
  const initialTopicStats = JSON.stringify(sm.data.topicStats);

  const sampleQ = {
    id: 'TEST-1',
    subject: 'IMO',
    set: 1,
    topic: 'Geometry',
    question: 'Sample question',
    options: ['A', 'B', 'C', 'D'],
    answer: 1,
    explanation: 'Explanation'
  };

  // Correct answer in revision mode
  sm.recordAttempt(sampleQ, 1, true, true);
  assert.equal(sm.data.profile.xp, initialXP, 'XP should not change on revision');
  assert.equal(sm.data.profile.emeralds, initialEmeralds, 'Emeralds should not change on revision');
  assert.equal(sm.data.mistakes.length, initialMistakes, 'Mistakes should not increase on revision');
  assert.equal(JSON.stringify(sm.data.topicStats), initialTopicStats, 'TopicStats should not mutate on revision');

  // Incorrect answer in revision mode
  sm.recordAttempt(sampleQ, 0, false, true);
  assert.equal(sm.data.profile.xp, initialXP, 'XP should not change on incorrect revision');
  assert.equal(sm.data.profile.emeralds, initialEmeralds, 'Emeralds should not change on incorrect revision');
  assert.equal(sm.data.mistakes.length, initialMistakes, 'Mistake bank should not be modified on revision');
  assert.equal(JSON.stringify(sm.data.topicStats), initialTopicStats, 'TopicStats should not mutate on incorrect revision');
});

test('storage.markSetCompleted with isRevision=true awards no bonus rewards', () => {
  const { sm } = loadStorage();
  const initialXP = sm.data.profile.xp;
  const initialEmeralds = sm.data.profile.emeralds;

  sm.markSetCompleted('IMO', 1, true);
  assert.equal(sm.data.profile.xp, initialXP);
  assert.equal(sm.data.profile.emeralds, initialEmeralds);
  assert.equal(sm.isSetCompleted('IMO', 1), false);
});

test('storage bounds mistake bank at 200 items', () => {
  const { sm } = loadStorage();
  for (let i = 0; i < 250; i++) {
    sm.addMistake({
      id: `Q-${i}`,
      subject: 'IMO',
      set: 1,
      topic: 'Math',
      question: `Q ${i}`,
      options: ['A', 'B'],
      answer: 0,
      explanation: 'Exp'
    }, 1);
  }
  assert.equal(sm.data.mistakes.length, 200);
  assert.equal(sm.data.mistakes[0].id, 'Q-249', 'Newest mistake is preserved at front');
});

test('storage bounds exam history at 20 items', () => {
  const { sm } = loadStorage();
  for (let i = 0; i < 30; i++) {
    sm.saveExamResult({
      subject: 'IMO',
      score: 30,
      total: 35,
      timeTakenSecs: 1200
    });
  }
  assert.equal(sm.data.examHistory.length, 20);
});

test('quizEngine activates isRevision when set is completed, sandbox blocks gaming', () => {
  const { sm } = loadStorage();
  // Mark IMO Set 1 completed originally
  sm.markSetCompleted('IMO', 1, false);
  assert.equal(sm.isSetCompleted('IMO', 1), true);

  const initialXP = sm.data.profile.xp;
  const initialEmeralds = sm.data.profile.emeralds;
  const initialHearts = sm.data.profile.hearts;

  const { engine } = loadEngine(sm);
  engine.startPracticeSet('IMO', 1);

  assert.equal(engine.isRevision, true, 'Engine must flag isRevision for completed sets');

  // Child answers 5 questions correctly and 5 incorrectly during revision
  for (let i = 0; i < 10; i++) {
    engine.currentIndex = i;
    engine.isAnswerChecked = false;
    const isCorrect = i % 2 === 0;
    engine.handlePracticeSelect(isCorrect ? 0 : 1);
  }

  // Verify that score, XP, Emeralds, and Hearts were completely preserved
  assert.equal(sm.data.profile.xp, initialXP, 'XP was protected from gaming');
  assert.equal(sm.data.profile.emeralds, initialEmeralds, 'Emeralds were protected from gaming');
  assert.equal(sm.data.profile.hearts, initialHearts, 'Hearts were not subtracted or added in revision');

  // Verify renderPracticeSummary in revision mode does not call markSetCompleted
  let markCompletedCalled = false;
  sm.markSetCompleted = () => { markCompletedCalled = true; };
  engine.renderPracticeSummary();
  assert.equal(markCompletedCalled, false, 'markSetCompleted should not be invoked on revision completion');
});

test('all 5 Minecraft mascots have valid image files on disk', () => {
  const badgesPath = path.join(root, 'data/badges.js');
  const content = fs.readFileSync(badgesPath, 'utf8');
  const sandbox = {};
  new Function('window', content)(sandbox);

  const mascots = sandbox.MINECRAFT_MASCOTS;
  assert.ok(Array.isArray(mascots) && mascots.length >= 5, 'Should have at least 5 mascots');

  for (const mascot of mascots) {
    assert.ok(mascot.avatarImg, `Mascot ${mascot.id} should have avatarImg`);
    const imgPath = path.join(root, mascot.avatarImg);
    assert.ok(fs.existsSync(imgPath), `File ${mascot.avatarImg} must exist on disk`);
    const stat = fs.statSync(imgPath);
    assert.ok(stat.size > 1000 && stat.size < 150000, `Image ${mascot.avatarImg} should be within size budget (<150KB, actual: ${stat.size}B)`);
  }
});
