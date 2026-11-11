// Site denetimi: bütün sayfaları gerçek tarayıcıda açar, hataları ve içerik sorunlarını raporlar.
// Kullanım: node araclar/denetle.js   (Playwright gerekir). Sorun varsa çıkış kodu 1 olur.
// Kendi küçük sunucusunu açar; repo klasörünün adı ne olursa olsun site /6sinif/ altında servis edilir.
const http = require("http"), fs = require("fs"), path = require("path");
const { chromium } = require("playwright");
const KOK = path.join(__dirname, "..");
const TUR = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png", ".webmanifest": "application/manifest+json", ".svg": "image/svg+xml", ".mp3": "audio/mpeg" };
const sunucu = http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split("?")[0]);
  if (!u.startsWith("/6sinif/")) { res.writeHead(404); return res.end(); }
  let f = path.join(KOK, u.slice(8)); if (f.endsWith(path.sep) || u.endsWith("/")) f = path.join(f, "index.html");
  fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); return res.end(); } res.writeHead(200, { "Content-Type": TUR[path.extname(f)] || "application/octet-stream" }); res.end(d); });
});
const sorun = [], bilgi = [];
const S = (m) => { sorun.push(m); console.log("✖ " + m); };
(async () => {
  await new Promise((r) => sunucu.listen(0, r));
  const URL = `http://127.0.0.1:${sunucu.address().port}/6sinif/`;
  // 1) sw.js: DOSYALAR listesindeki her dosya var mı, sözdizimi doğru mu
  for (const d of fs.readdirSync(KOK).concat([""])) {
    const sw = path.join(KOK, d, "sw.js"); if (!fs.existsSync(sw)) continue;
    const t = fs.readFileSync(sw, "utf8");
    try { new Function(t.replace(/^\s*import .*$/gm, "")); } catch (e) { S(`${d || "kök"}/sw.js sözdizimi: ${e.message}`); }
    const m = t.match(/DOSYALAR\s*=\s*\[([\s\S]*?)\]/); if (!m) continue;
    for (const x of m[1].match(/"[^"]+"/g) || []) { const f = x.slice(1, -1).replace(/^\.\//, ""); if (f && f !== "/" && !f.startsWith("http") && !fs.existsSync(path.join(KOK, d, f))) S(`${d || "kök"}/sw.js listesinde olmayan dosya: ${f}`); }
  }
  // 2) Sayfalar
  const sayfalar = ["", "minik/", "1sinif/", "2sinif/", "3sinif/", "4sinif/", "5sinif/", "7sinif/", "8sinif/", "9sinif/", "10sinif/", "11sinif/", "12sinif/", "yks/", "eylul-bilge/", "gol-arena/", "park-arena/"].filter((s) => fs.existsSync(path.join(KOK, s, "index.html")));
  const b = await chromium.launch();
  for (const s of sayfalar) {
    const c = await b.newContext({ serviceWorkers: "block", viewport: { width: 390, height: 844 } }); const p = await c.newPage(); const hata = [];
    p.on("pageerror", (e) => hata.push(e.message)); p.on("dialog", (d) => d.dismiss().catch(() => {}));
    p.on("response", (r) => { if (r.status() === 404 && r.url().startsWith(URL)) hata.push("404 " + r.url().slice(URL.length)); });
    await p.goto(URL + s).catch((e) => hata.push(e.message)); await p.waitForTimeout(1800);
    // 5–12: her konunun soru seti
    const r = await p.evaluate(() => {
      const o = { konu: 0, soru: 0, hata: [] };
      if (window.ICERIK && typeof soruHazirla === "function") {
        for (const d of Object.values(ICERIK)) for (const u of d.uniteler || []) for (const k of u.konular || []) {
          o.konu++;
          try { const l = soruHazirla(k, 10) || []; o.soru += l.length; for (const q of l) { const sec = q.secenekler || []; if (new Set(sec.map(String)).size !== sec.length) o.hata.push(`${k.id}: aynı şık iki kez: ${q.soru.slice(0, 60)}`); if (!(q.dogru >= 0 && q.dogru < sec.length)) o.hata.push(`${k.id}: doğru cevap şıklarda yok: ${q.soru.slice(0, 60)}`); if (/undefined|NaN|\[object/.test(q.soru + sec.join(" "))) o.hata.push(`${k.id}: bozuk metin: ${q.soru.slice(0, 60)}`); } } catch (e) { o.hata.push(`${k.id}: ${e.message}`); }
        }
      }
      if (typeof MUF !== "undefined" && typeof hasQ === "function") { // YKS
        MUF.forEach((m) => m.k.forEach((k) => { o.konu++; if (!hasQ(m, k)) o.hata.push(`YKS ${m.id} ${k[0]}: soru yok`); }));
        GEN.forEach((g) => { for (let i = 0; i < 100; i++) { try { const q = g.f(); if (q.o.length < 4 || new Set(q.o).size !== q.o.length || !(q.a >= 0 && q.a < q.o.length)) { o.hata.push(`YKS üretici ${g.id}: hatalı şıklar`); break; } } catch (e) { o.hata.push(`YKS üretici ${g.id}: ${e.message}`); break; } } });
        o.soru = BANK.length;
      }
      return o;
    }).catch((e) => ({ konu: 0, soru: 0, hata: [e.message] }));
    hata.forEach((h) => S(`${s || "6sinif"}: ${h}`)); [...new Set(r.hata)].slice(0, 15).forEach((h) => S(`${s || "6sinif"}: ${h}`));
    bilgi.push(`${s || "6sinif/"} ${r.konu ? r.konu + " konu, " + r.soru + " soru" : "açıldı"}`);
    await c.close();
  }
  await b.close(); sunucu.close();
  console.log("\n" + bilgi.join("\n"));
  console.log(sorun.length ? `\n${sorun.length} sorun bulundu.` : "\nSorun yok ✔");
  process.exitCode = sorun.length ? 1 : 0;
})();
