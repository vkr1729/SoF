// Util + storage regression tests (no dependencies). Run: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function loadScript(file, extraWindow = {}) {
  const window = { ...extraWindow };
  const src = fs.readFileSync(path.join(root, file), 'utf8');
  new Function('window', 'document', 'localStorage', src)(window, extraWindow.__document, extraWindow.__ls);
  return window;
}

const U = loadScript('js/util.js').SOFUtils;

test('escapeHtml neutralizes markup and quotes', () => {
  assert.equal(U.escapeHtml('<img src=x onerror=alert(1)>'), '&lt;img src=x onerror=alert(1)&gt;');
  assert.equal(U.escapeHtml(`a'b"c&d`), 'a&#39;b&quot;c&amp;d');
  assert.equal(U.escapeHtml(null), '');
  assert.equal(U.escapeHtml('2 ⭐ + 3 = 5'), '2 ⭐ + 3 = 5');
});

test('shuffleOptions preserves the keyed answer across seeds', () => {
  const q = { id: 't', subject: 'IMO', set: 1, topic: 'T', difficulty: 'Easy', question: 'Q', options: ['a', 'b', 'c', 'd'], answer: 2, explanation: 'E' };
  for (let seed = 1; seed <= 20; seed++) {
    let s = seed;
    const rand = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
    const out = U.shuffleOptions(q, rand);
    assert.equal(out.options[out.answer], 'c');
    assert.deepEqual([...out.options].sort(), ['a', 'b', 'c', 'd']);
    assert.equal(q.options[2], 'c', 'bank never mutated');
  }
});

test('normalizeTopic is case/space-insensitive', () => {
  assert.equal(U.normalizeTopic('  Air,  Water & WEATHER '), 'air, water & weather');
});

test('localDay returns device-local YYYY-MM-DD', () => {
  assert.match(U.localDay(new Date(2026, 0, 5, 12)), /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(U.localDay(new Date(2026, 0, 5, 12)), '2026-01-05');
});

// ---- Storage ----
function memStorage() {
  const store = {};
  return {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    _store: store,
  };
}

function loadStorage(ls) {
  const window = { SOFUtils: U };
  const src = fs.readFileSync(path.join(root, 'js/storage.js'), 'utf8');
  new Function('window', 'document', 'localStorage', src)(window, undefined, ls);
  return window.storageManager;
}

test('storage deep-merges partial/corrupt payloads over defaults', () => {
  const ls = memStorage();
  ls.setItem('SOF_OLYMPIAD_V1', JSON.stringify({ profile: { xp: 42 }, topicStats: null }));
  const sm = loadStorage(ls);
  assert.equal(sm.data.profile.xp, 42);
  assert.equal(sm.data.profile.hearts, 5, 'missing hearts defaulted');
  assert.deepEqual(sm.data.topicStats, {});
  assert.ok(Array.isArray(sm.data.mistakes));
});

test('storage survives corrupt JSON with defaults', () => {
  const ls = memStorage();
  ls.setItem('SOF_OLYMPIAD_V1', '{not json');
  const sm = loadStorage(ls);
  assert.equal(sm.data.profile.hearts, 5);
});

test('hearts clamp to 0..5', () => {
  const sm = loadStorage(memStorage());
  sm.setHearts(5);
  sm.addHearts(-99);
  assert.equal(sm.data.profile.hearts, 0);
  sm.addHearts(99);
  assert.equal(sm.data.profile.hearts, 5);
});

test('weak topics split on first colon only', () => {
  const sm = loadStorage(memStorage());
  sm.data.topicStats = { 'IMO:Time: Bonus': { attempted: 4, correct: 1 } };
  const weak = sm.getWeakTopics(0.7);
  assert.equal(weak.length, 1);
  assert.equal(weak[0].subject, 'IMO');
  assert.equal(weak[0].topic, 'Time: Bonus');
});
