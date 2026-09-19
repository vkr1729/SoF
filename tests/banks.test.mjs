// Bank integrity + answer-correctness regression tests (no dependencies).
// Run: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function loadBank(file, globalName) {
  const sandbox = { window: {} };
  const src = fs.readFileSync(path.join(root, file), 'utf8');
  new Function('window', src.replace(/window\./g, 'window.'))(sandbox.window);
  return sandbox.window[globalName];
}

const banks = {
  IGKO: loadBank('data/igko-questions.js', 'IGKO_QUESTIONS'),
  IMO: loadBank('data/imo-questions.js', 'IMO_QUESTIONS'),
  NSO: loadBank('data/nso-questions.js', 'NSO_QUESTIONS'),
};

for (const [subj, bank] of Object.entries(banks)) {
  test(`${subj}: 200 questions, 10 per set, unique ids`, () => {
    assert.equal(bank.length, 200);
    assert.equal(new Set(bank.map((q) => q.id)).size, 200);
    for (let s = 1; s <= 20; s++) {
      assert.equal(bank.filter((q) => q.set === s).length, 10, `${subj} set ${s}`);
    }
  });

  test(`${subj}: 4 unique options, valid answer index, required fields`, () => {
    for (const q of bank) {
      assert.equal(q.options.length, 4, q.id);
      assert.equal(new Set(q.options.map((o) => String(o).trim().toLowerCase())).size, 4, q.id);
      assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3, q.id);
      assert.ok(q.topic && q.difficulty && q.explanation && q.explanation.length >= 10, q.id);
      assert.equal(q.subject, subj, q.id);
    }
  });

  test(`${subj}: answer keys balanced 40-60 per position`, () => {
    const dist = [0, 0, 0, 0];
    for (const q of bank) dist[q.answer]++;
    for (const c of dist) assert.ok(c >= 40 && c <= 60, `${subj} dist ${dist}`);
  });

  test(`${subj}: no draft-thinking explanations`, () => {
    for (const q of bank) {
      assert.ok(!/wait\?|let's check|what if \S+ is/i.test(q.explanation), `${q.id}: ${q.explanation.slice(0, 60)}`);
    }
  });

  test(`${subj}: Achievers set explanations teach (40+ chars)`, () => {
    for (const q of bank.filter((q) => q.set === 10 || q.set === 20)) {
      assert.ok(q.explanation.length >= 40, q.id);
    }
  });
}

// Spot-verified correct answers (human-audited against syllabus content).
const SPOT = [
  ['igko-1-1', 'Camel'], ['igko-10-6', 'EVEREST'], ['igko-10-2', 'Carrot – Underground Fruit'],
  ['imo-1-1', '700'], ['imo-2-9', '8'], ['imo-10-4', '9 marbles'],
  ['nso-10-1', 'Snake'], ['nso-10-7', 'Boiling water turns it into ice'],
];
test('spot-checked keyed answers match audited content', () => {
  const all = [...banks.IGKO, ...banks.IMO, ...banks.NSO];
  for (const [id, content] of SPOT) {
    const q = all.find((q) => q.id === id);
    assert.ok(q, id);
    assert.equal(q.options[q.answer], content, id);
  }
});

test('imo-10-3 cryptarithm has unique digit solution ⭐=3', () => {
  const q = [...banks.IMO].find((q) => q.id === 'imo-10-3');
  const sols = [];
  for (let s = 0; s <= 9; s++) {
    if ((40 + s) + (10 * s + 2) === 75) sols.push(s);
  }
  assert.deepEqual(sols, [3]);
  assert.equal(q.options[q.answer], '3');
});
