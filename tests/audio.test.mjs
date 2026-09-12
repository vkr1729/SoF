// AudioManager speech regression tests (synth stubbed; no dependencies).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

class FakeUtterance {
  constructor(text) { this.text = text; }
}

function loadAudio(voices) {
  const spoken = [];
  let cancelled = 0;
  const synth = {
    getVoices: () => voices,
    addEventListener: () => {},
    cancel: () => { cancelled++; },
    speak: (u) => { spoken.push(u.text); if (u.onend) u.onend(); },
  };
  const window = { speechSynthesis: synth, AudioContext: undefined, webkitAudioContext: undefined };
  const src = fs.readFileSync(path.join(root, 'js/audio-manager.js'), 'utf8');
  new Function('window', 'document', 'localStorage', 'SpeechSynthesisUtterance', 'setTimeout', src)(
    window, undefined, undefined, FakeUtterance, (fn) => fn());
  return { mgr: window.audioManager, spoken: () => spoken, cancelled: () => cancelled };
}

test('chunkText keeps every chunk short and lossless', () => {
  const { mgr } = loadAudio([]);
  const long = 'Camels can travel long distances in the desert without water. They have padded feet to walk on hot sand. They store fat in their humps for energy on long trips across the dunes.';
  const chunks = mgr.constructor.chunkText(long, 140);
  assert.ok(chunks.length > 1);
  assert.ok(chunks.every((c) => c.length <= 140), JSON.stringify(chunks.map((c) => c.length)));
  assert.equal(chunks.join(' '), long);
});

test('speak() delivers chunked utterances and cancels first', () => {
  const t = loadAudio([]);
  t.mgr.unlock();
  t.mgr.speak('First sentence here with plenty of extra words to push past the limit. Second sentence follows along with even more words. Third sentence wraps it all up nicely for the test case.');
  assert.ok(t.cancelled() >= 1, 'previous speech cancelled');
  assert.ok(t.spoken().length >= 2, 'long text chunked');
  assert.ok(t.spoken().every((s) => s.length <= 140));
});

test('warmupVoices prefers Indian English, then US English', () => {
  const enUS = { lang: 'en-US' };
  const enIN = { lang: 'en-IN' };
  const a = loadAudio([enUS, enIN]);
  a.mgr.unlock();
  assert.equal(a.mgr.voice, enIN);
  const b = loadAudio([enUS, { lang: 'hi-IN' }]);
  b.mgr.unlock();
  assert.equal(b.mgr.voice, enUS);
});

test('stopSpeaking clears the queue', () => {
  const t = loadAudio([]);
  t.mgr._queue = ['a', 'b'];
  t.mgr.stopSpeaking();
  assert.deepEqual(t.mgr._queue, []);
});
