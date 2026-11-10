// Eylül Bilge sayfası için çevrimdışı çalışma.
// Önce internetten en yeni dosya alınır (ortak uygulama güncellenince bu sayfa da güncellensin),
// internet yoksa son kaydedilen kopya açılır. Önbellek adı ortak uygulamanınkinden ayrıdır ("eylul-").
const SURUM = "eylul-1";
const KOK = new URL("../", self.registration.scope).href; // .../6sinif/

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SURUM).then((c) => c.addAll(["./", "okul-mesajlari.js", "manifest.webmanifest"])).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x.startsWith("eylul-") && x !== SURUM).map((x) => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(KOK)) return; // dış istekler (YouTube, BiP) internetten
  const yol = e.request.url.slice(KOK.length);
  if (/^(\d+sinif|minik|v2|park-arena|gol-arena|yks)\//.test(yol)) return; // diğer sınıflara karışma
  e.respondWith(
    fetch(e.request).then((r) => {
      if (r.ok) { const k = r.clone(); caches.open(SURUM).then((c) => c.put(e.request, k)); }
      return r;
    }).catch(() => caches.open(SURUM).then((c) => c.match(e.request, { ignoreSearch: true }).then((x) => x || c.match("./"))))
  );
});
