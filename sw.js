// Çevrimdışı çalışma: bütün uygulama dosyaları ilk açılışta tablete kaydedilir.
// Bu dosya otomatik üretilir; içerik değişince SURUM değişir ve tablet yeni sürümü indirir.
const SURUM = "ders-bcf0719438";
const DOSYALAR = ["./", "anlatim.js", "app.js", "apple-touch-icon.png", "din-uretec.js", "din.js", "fen-uretec.js", "fen.js", "ikon-192.png", "ikon-512.png", "ikon-maskable-512.png", "index.html", "ingilizce-ceviri.js", "ingilizce-uretec.js", "ingilizce.js", "manifest.webmanifest", "matematik-uretec.js", "matematik.js", "ortak-uretec.js", "sosyal-uretec.js", "sosyal.js", "turkce-uretec.js", "turkce.js"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SURUM).then((c) => c.addAll(DOSYALAR)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== SURUM).map((x) => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return; // YouTube vb. dış istekler internetten
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((c) => c || fetch(e.request).then((r) => {
      const kopya = r.clone(); caches.open(SURUM).then((ca) => ca.put(e.request, kopya)); return r;
    }).catch(() => caches.match("./")))
  );
});
