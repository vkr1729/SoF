// SOF Quest service worker: offline-first app shell for the iPad PWA.
// Cache-first for local assets; navigation falls back to cached index.html.
const CACHE = 'sof-quest-v1';

const ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-180.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'css/main.css',
  'css/minecraft-theme.css',
  'css/exam-simulator.css',
  'data/igko-questions.js',
  'data/imo-questions.js',
  'data/nso-questions.js',
  'data/badges.js',
  'js/util.js',
  'js/audio-manager.js',
  'js/confetti.js',
  'js/storage.js',
  'js/mistake-bank.js',
  'js/weak-areas.js',
  'js/quiz-engine.js',
  'js/app.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // Google Fonts stays network-only
  event.respondWith(
    caches.match(event.request, { ignoreSearch: false }).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return res;
      }).catch(() => {
        if (event.request.mode === 'navigate') return caches.match('index.html');
        throw new Error('offline');
      });
    })
  );
});
