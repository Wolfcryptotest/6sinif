// Çevrimdışı çalışma: bütün uygulama dosyaları ilk açılışta tablete kaydedilir.
// Bu dosya otomatik üretilir; içerik değişince SURUM değişir ve tablet yeni sürümü indirir.
const ONEK = "ders2-";
const SURUM = ONEK + "9feaeb92cd";
const DOSYALAR = ["./", "app.js", "apple-touch-icon.png", "ayar.js", "hayat.js", "hikayeler.js", "ikon-192.png", "ikon-512.png", "ikon-maskable-512.png", "index.html", "ingilizce.js", "kitaplar.js", "manifest.webmanifest", "matematik.js", "ortak.js", "oyunlar.js", "ses.js", "turkce.js", "videolar.js"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SURUM).then((c) => c.addAll(DOSYALAR)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x.startsWith(ONEK) && x !== SURUM).map((x) => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return; // YouTube vb. dış istekler internetten
  if (!e.request.url.startsWith(self.registration.scope)) return; // aynı sitedeki diğer sınıflara karışma
  e.respondWith(
    caches.open(SURUM).then((ca) => ca.match(e.request, { ignoreSearch: true }).then((c) => c || fetch(e.request).then((r) => {
      if (r.ok) ca.put(e.request, r.clone()); // hatalı yanıtlar (404) önbelleğe alınmaz
      return r;
    }).catch(() => ca.match("./"))))
  );
});
