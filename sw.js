const V = "ps5poc-v1";
const SHELL = [
  "/", "/index.html", "/exploit.html",
  "/modules/offsets.mjs", "/modules/exploit.js",
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(V)
      .then(c => c.addAll(SHELL))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const net = fetch(e.request).then(r => {
        if (r.ok) {
          const cl = r.clone();
          caches.open(V).then(c => c.put(e.request, cl));
        }
        return r;
      }).catch(() => null);
      return cached || net;
    })
  );
});
