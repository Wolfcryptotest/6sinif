// Çevrimdışı çalışma: bütün uygulama dosyaları ilk açılışta tablete kaydedilir.
// Bu dosya otomatik üretilir; içerik değişince SURUM değişir ve tablet yeni sürümü indirir.
const ONEK = "ders3-";
const SURUM = ONEK + "2d43f5a1";
const DOSYALAR = ["zeka-oyunlari.js", "oyun-ek.js", "soru-ek.js", "soru-bank.js", "soru-bank-fen.js", "ogret.js", "veli-karne.js", "yedek.js", "kitap-oku.js", "okuma-atolyesi.js", "./", "app.js", "apple-touch-icon.png", "ayar.js", "fen.js", "hayat.js", "hikayeler.js", "ikon-192.png", "ikon-512.png", "ikon-maskable-512.png", "index.html", "ingilizce.js", "islem-alani.js", "kelime-havuzu.js", "kitaplar.js", "manifest.webmanifest", "matematik.js", "ortak.js", "oyunlar.js", "ses.js", "turkce.js", "videolar.js"];

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
