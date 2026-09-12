// PWA + iPad Safari regression tests (no dependencies). Run: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');

function pngSize(f) {
  const b = fs.readFileSync(path.join(root, f));
  assert.deepEqual([...b.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10], `${f} signature`);
  assert.equal(b.subarray(12, 16).toString(), 'IHDR', `${f} IHDR`);
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
}

test('manifest is valid with required PWA fields', () => {
  const m = JSON.parse(read('manifest.webmanifest'));
  assert.ok(m.name && m.short_name && m.start_url && m.scope);
  assert.equal(m.display, 'standalone');
  const sizes = Object.fromEntries(m.icons.map((i) => [i.sizes, i]));
  assert.ok(sizes['192x192'] && sizes['512x512']);
  assert.ok(m.icons.some((i) => i.purpose === 'maskable'));
  for (const icon of m.icons) {
    const s = pngSize(icon.src);
    assert.equal(`${s.w}x${s.h}`, icon.sizes, icon.src);
  }
});

test('apple-touch-icon exists at 180x180', () => {
  const s = pngSize('icons/icon-180.png');
  assert.deepEqual([s.w, s.h], [180, 180]);
});

test('index.html carries iOS PWA meta + icon + manifest', () => {
  const html = read('index.html');
  for (const needle of [
    'rel="manifest"',
    'apple-mobile-web-app-capable',
    'apple-mobile-web-app-title',
    'rel="apple-touch-icon"',
    'viewport-fit=cover',
    'name="theme-color"',
  ]) {
    assert.ok(html.includes(needle), needle);
  }
});

test('service worker caches every local asset index.html loads', () => {
  const html = read('index.html');
  const sw = read('sw.js');
  const refs = new Set(
    [...html.matchAll(/(?:src|href)="([^"#]+)"/g)]
      .map((m) => m[1])
      .filter((u) => !u.startsWith('http') && !u.startsWith('data:'))
  );
  for (const ref of refs) {
    assert.ok(sw.includes(ref), `sw.js caches ${ref}`);
  }
  for (const m of sw.matchAll(/'((?:icons|css|data|js)\/[^']+|index\.html)'/g)) {
    if (m[1].startsWith('./')) continue;
    assert.ok(fs.existsSync(path.join(root, m[1])), `cached file exists: ${m[1]}`);
  }
  assert.ok(sw.includes('skipWaiting') && sw.includes('clients.claim'));
});

test('touch CSS: manipulation, 100dvh, safe-area, 44px targets', () => {
  const css = read('css/main.css') + read('css/exam-simulator.css') + read('css/minecraft-theme.css');
  assert.ok(css.includes('touch-action: manipulation'));
  assert.ok(css.includes('100dvh'));
  assert.ok(css.includes('safe-area-inset'));
  assert.ok(css.includes('.touch-44'));
  assert.ok(css.includes('(pointer: coarse)'));
});

test('header utility buttons meet 44px touch minimum', () => {
  const html = read('index.html');
  assert.ok(html.includes('btn-secondary touch-44'), 'speech toggle is touch-44');
  assert.ok(html.includes('btn-blue touch-44'), 'parent guide button is touch-44');
});
