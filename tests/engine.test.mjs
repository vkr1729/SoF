// Quiz-engine regression tests (DOM stubbed; no dependencies). Run: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function loadUtil(window) {
  const src = fs.readFileSync(path.join(root, 'js/util.js'), 'utf8');
  new Function('window', src)(window);
}

function fakeBank(prefix, topics) {
  const bank = [];
  let n = 0;
  for (let set = 1; set <= 10; set++) {
    for (let i = 0; i < 10; i++) {
      bank.push({
        id: `${prefix}-${set}-${i}`, subject: prefix, set,
        topic: set === 10 ? 'Achievers Section (HOTS)' : topics[(set - 1) % topics.length],
        difficulty: 'Easy', question: `Q${n}`, options: ['a', 'b', 'c', 'd'],
        answer: n % 4, explanation: `E${n}`,
      });
      n++;
    }
  }
  return bank;
}

function loadEngine() {
  const listeners = {};
  const documentStub = {
    getElementById: () => null,
    addEventListener: (t, h) => { listeners[t] = h; },
    removeEventListener: (t) => { delete listeners[t]; },
    hidden: false,
  };
  const window = {
    SOFUtils: null,
    IMO_QUESTIONS: fakeBank('IMO', ['Number Sense', 'Addition']),
    storageManager: { recordAttempt() {}, saveExamResult() {}, isSetCompleted() { return false; } },
    confettiManager: { trigger() {} },
    audioManager: { playFanfare() {}, speak() {} },
  };
  loadUtil(window);
  const src = fs.readFileSync(path.join(root, 'js/quiz-engine.js'), 'utf8');
  new Function('window', 'document', 'localStorage', 'setInterval', 'clearInterval', 'alert', src)(
    window, documentStub, undefined, setInterval, clearInterval, () => {});
  return { engine: window.quizEngine, window, listeners, documentStub };
}

test('exam sampling covers core + Achievers with distinct ids', () => {
  const { engine } = loadEngine();
  try {
    engine.startOfficialExam('IMO', false);
    assert.equal(engine.questions.length, 35);
    const hot = engine.questions.filter((q) => q.set === 10);
    assert.equal(hot.length, 5);
    assert.equal(new Set(engine.questions.map((q) => q.id)).size, 35);
    const coreSets = new Set(engine.questions.filter((q) => q.set !== 10).map((q) => q.set));
    assert.ok(coreSets.size >= 5, `core spread ${[...coreSets]}`);
  } finally {
    engine.stopTimer();
  }
});

test('marks weight: explicit marks win, else set 10 and 20 = 2', () => {
  const { engine } = loadEngine();
  assert.equal(engine.getQuestionWeight({ set: 10 }), 2);
  assert.equal(engine.getQuestionWeight({ set: 20 }), 2);
  assert.equal(engine.getQuestionWeight({ set: 3 }), 1);
  assert.equal(engine.getQuestionWeight({ set: 10, marks: 1 }), 1);
});

test('fifth palette state preserved when answering a marked question', () => {
  const { engine } = loadEngine();
  try {
    engine.startOfficialExam('IMO', true);
    engine.markExamReview();
    assert.equal(engine.questionStatuses[0], 'marked-review');
    engine.currentIndex = 1;
    engine.questionStatuses[1] = 'not-answered';
    engine.currentIndex = 0;
    engine.onExamRadioChange(2);
    assert.equal(engine.questionStatuses[0], 'answered-marked');
    const counts = engine.countByStatus();
    assert.equal(counts['answered-marked'], 1);
  } finally {
    engine.stopTimer();
  }
});

test('submitExam records unanswered items as misses', () => {
  const { engine, window } = loadEngine();
  const seen = [];
  window.storageManager.recordAttempt = (q, sel, ok) => seen.push([q.id, sel, ok]);
  try {
    engine.startOfficialExam('IMO', true);
    engine.submitExam();
    assert.equal(seen.length, 10);
    assert.ok(seen.every(([, sel]) => sel !== undefined), 'no skipped records');
    assert.ok(seen.some(([, sel, ok]) => sel === -1 && ok === false), 'skip recorded as miss');
  } finally {
    engine.stopTimer();
  }
});

test('practice entry always stops a running exam timer', () => {
  const { engine } = loadEngine();
  engine.startOfficialExam('IMO', true);
  assert.ok(engine.timerInterval !== null);
  engine.startPracticeSet('IMO', 1);
  assert.equal(engine.timerInterval, null);
  engine.startOfficialExam('IMO', true);
  engine.startCustomWorkout('w', engine.questions.slice(0, 3));
  assert.equal(engine.timerInterval, null);
});
