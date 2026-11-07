// Park Arena: oyun ilk açılışta cihaza kaydedilir, sonra hızlı ve internetsiz açılır.
// Sayfa (index.html) her açılışta önce internetten denenir; böylece güncellemeler kendiliğinden gelir.
const SURUM = "park-arena-v2.6";
const MODEL = "park-arena-model-1"; // araç modelleri (değişmedikçe yeniden inmez)
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SURUM).then((c) => c.addAll(["./", "manifest.webmanifest", "ikon-192.png", "ikon-512.png"])).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x.startsWith("park-arena") && x !== SURUM && x !== MODEL).map((x) => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET") return;
  const url = new URL(r.url);
  const ayni = url.origin === location.origin;
  if (ayni && !r.url.startsWith(self.registration.scope)) return;
  // araç modelleri: önce cihazdan
  if (ayni && /cars\d+\.txt$/.test(url.pathname)) {
    e.respondWith(caches.open(MODEL).then((c) => c.match(r).then((m) => m || fetch(r).then((y) => { if (y.ok) c.put(r, y.clone()); return y; }))));
    return;
  }
  // sayfa: önce internet (güncelleme), yoksa cihazdaki kopya
  if (ayni && (r.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("index.html"))) {
    e.respondWith(fetch(r).then((y) => { if (y.ok) caches.open(SURUM).then((c) => c.put("./", y.clone())); return y; }).catch(() => caches.match("./")));
    return;
  }
  // 3D motoru ve yazı tipleri (cdnjs, Google Fonts) + diğer dosyalar: cihazdaki kopya, arkada tazele
  if (ayni || /cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|unpkg\.com|fonts\.(googleapis|gstatic)\.com/.test(url.hostname)) {
    e.respondWith(caches.open(SURUM).then((c) => c.match(r).then((m) => {
      const ag = fetch(r).then((y) => { if (y.ok || y.type === "opaque") c.put(r, y.clone()); return y; }).catch(() => m);
      return m || ag;
    })));
  }
});
