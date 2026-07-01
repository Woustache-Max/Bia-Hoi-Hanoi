/* Bác Hơi — Service Worker */
const SHELL_CACHE = 'biahoi-shell-v12';
const CDN_CACHE   = 'biahoi-cdn-v1';

const SHELL_URLS = [
  '/Bia-Hoi-Hanoi/',
  '/Bia-Hoi-Hanoi/index.html',
  '/Bia-Hoi-Hanoi/manifest.json',
  '/Bia-Hoi-Hanoi/icon-192.png',
  '/Bia-Hoi-Hanoi/icon-512.png',
];

const CDN_HOSTS = [
  'cdn.jsdelivr.net',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

/* ── Install: pre-cache app shell ── */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(SHELL_CACHE)
      .then(c => c.addAll(SHELL_URLS))
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: purge old caches ── */
self.addEventListener('activate', e => {
  const keep = [SHELL_CACHE, CDN_CACHE];
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => !keep.includes(k)).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* ── Fetch strategy ── */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Never intercept Supabase API or auth calls
  if (url.hostname.includes('supabase.co') || url.hostname.includes('supabase.io')) return;

  // CDN assets (Leaflet, fonts) — cache-first
  if (CDN_HOSTS.includes(url.hostname)) {
    e.respondWith(
      caches.open(CDN_CACHE).then(c =>
        c.match(e.request).then(hit => {
          if (hit) return hit;
          return fetch(e.request).then(res => {
            if (res.ok) c.put(e.request, res.clone());
            return res;
          });
        })
      )
    );
    return;
  }

  // App shell — network-first, fall back to cache when offline
  if (url.hostname === self.location.hostname) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            caches.open(SHELL_CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(() => caches.match(e.request).then(hit => hit || caches.match('/Bia-Hoi-Hanoi/')))
    );
  }
});
