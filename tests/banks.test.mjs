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
  test(`${subj}: 100 questions, 10 per set, unique ids`, () => {
    assert.equal(bank.length, 100);
    assert.equal(new Set(bank.map((q) => q.id)).size, 100);
    for (let s = 1; s <= 10; s++) {
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

  test(`${subj}: answer keys balanced 20-30 per position`, () => {
    const dist = [0, 0, 0, 0];
    for (const q of bank) dist[q.answer]++;
    for (const c of dist) assert.ok(c >= 20 && c <= 30, `${subj} dist ${dist}`);
  });

  test(`${subj}: no draft-thinking explanations`, () => {
    for (const q of bank) {
      assert.ok(!/wait\?|let's check|what if \S+ is/i.test(q.explanation), `${q.id}: ${q.explanation.slice(0, 60)}`);
    }
  });

  test(`${subj}: Achievers set explanations teach (40+ chars)`, () => {
    for (const q of bank.filter((q) => q.set === 10)) {
      assert.ok(q.explanation.length >= 40, q.id);
    }
  });
}

// Spot-verified correct answers (human-audited against syllabus content).
const SPOT = [
  ['igko-1-1', 'Chameleon'],
  ['igko-10-10', 'Ostrich'],
  ['imo-1-1', '600 + 80 + 4'],
  ['imo-10-10', '784'],
  ['nso-1-1', 'Pumpkin'],
  ['nso-10-10', 'Walking or riding a bicycle for short distances instead of using a petrol car'],
];
test('spot-checked keyed answers match audited content', () => {
  const all = [...banks.IGKO, ...banks.IMO, ...banks.NSO];
  for (const [id, content] of SPOT) {
    const q = all.find((q) => q.id === id);
    assert.ok(q, id);
    assert.equal(q.options[q.answer], content, id);
  }
});

test('legacy questions archive retains all 300 original questions', () => {
  const archiveSrc = fs.readFileSync(path.join(root, 'data/legacy-questions-archive.js'), 'utf8');
  const sandbox = { window: {} };
  new Function('window', archiveSrc)(sandbox.window);
  assert.equal(sandbox.window.LEGACY_IGKO_QUESTIONS.length, 100);
  assert.equal(sandbox.window.LEGACY_IMO_QUESTIONS.length, 100);
  assert.equal(sandbox.window.LEGACY_NSO_QUESTIONS.length, 100);
});
