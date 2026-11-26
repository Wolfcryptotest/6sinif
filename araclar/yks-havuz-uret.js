// YKS soru havuzu üretici: 5–12. sınıf içeriklerinden YKS konularına eşlenen soruları yks/havuz.js, özel ders anlatımlarını yks/anlatim.js dosyasına yazar.
// Kullanım: yerel sunucu açıkken (repo kökünün bir üstü servis ediliyor: http://localhost:8765/6sinif/)  node araclar/yks-havuz-uret.js
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
const URL = process.env.YKS_URL || "http://localhost:8765/6sinif/";
const esle = JSON.parse(fs.readFileSync(path.join(__dirname, "yks-esleme.json"), "utf8"));
// Sınıf programından çıkarılan (ör. 11. sınıf Maarif düzeni, 2026-11-20) ama YKS'de hâlâ sorulan konular:
// sayfada bulunamayan kimliklerin soruları mevcut yks/havuz.js'ten korunur, YKS alt konuları boş kalmaz.
let ESKI = { HAVUZ: {}, HAVUZ_VIDEO: {}, ANLAT: {} };
try { const w = {}; new Function("window", fs.readFileSync(path.join(KOK, "yks", "havuz.js"), "utf8"))(w); ESKI = { HAVUZ: w.HAVUZ || {}, HAVUZ_VIDEO: w.HAVUZ_VIDEO || {}, ANLAT: {} }; } catch (e) {}
try { const w = {}; new Function("window", fs.readFileSync(path.join(KOK, "yks", "anlatim.js"), "utf8"))(w); ESKI.ANLAT = w.YKS_ANLAT || {}; } catch (e) {}
const gerek = {};
for (const lst of Object.values(esle)) for (const k of lst) for (const ref of k) { const [g, id] = ref.split(":"); (gerek[g] = gerek[g] || new Set()).add(id); }
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  const kaynak = {}, video = {}, anlat = {}; let eksik = [];
  for (const g of Object.keys(gerek).sort((a, b) => a - b)) {
    await p.goto(URL + (g === "6" ? "" : g + "sinif/") + "index.html"); await p.waitForTimeout(1800);
    const r = await p.evaluate((ids) => {
      const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const out = {}, yok = [], vid = {}, anl = {};
      const kirp = (t, n) => { t = String(t || "").trim(); return t.length > n ? t.slice(0, n - 1) + "…" : t; };
      const bul = (id) => { for (const d of Object.values(ICERIK)) for (const u of d.uniteler || []) for (const k of u.konular || []) if (k.id === id) return k; };
      for (const id of ids) {
        const k = bul(id); if (!k) { yok.push(id); continue; }
        const gor = new Map();
        const ekle = (q) => { if (!q || !q.soru || !Array.isArray(q.secenekler) || q.secenekler.length < 3) return; const key = q.soru.trim(); if (gor.has(key)) return;
          const o = q.secenekler.map(String); if (new Set(o).size !== o.length) return; const a = typeof q.dogru === "number" ? q.dogru : o.indexOf(String(q.dogru)); if (a < 0 || a >= o.length) return;
          gor.set(key, [esc(q.soru), o.map(esc), a, esc(q.cozum || "")]); };
        (k.sorular || []).forEach((q) => ekle(Array.isArray(q) ? null : q));
        for (let t = 0; t < 6 && gor.size < 45; t++) { try { (soruHazirla(k, 12) || []).forEach(ekle); } catch (e) {} }
        out[id] = [...gor.values()].slice(0, 45);
        let v = (window.VIDEO || {})[id] || k.video; if (Array.isArray(v)) v = v[0] && (Array.isArray(v[0]) ? v[0][1] : v[0]);
        if (typeof v === "string" && /^[\w-]{11}$/.test(v)) vid[id] = v;
        // Özel ders için kısa anlatım (yks-ozel-ders.js): konu adı, özet, ilk 4 paragraf, ilk çözümlü örnek, sık yapılan hata
        const an = (k.anlatim || []).filter((x) => typeof x === "string" && x.trim()).slice(0, 4).map((x) => kirp(x, 700));
        if (an.length) {
          const e = (k.ornekler || []).find((o) => Array.isArray(o) && o[0] && o[1]);
          anl[id] = { a: k.ad, o: (k.ozet || []).filter((x) => typeof x === "string").slice(0, 5).map((x) => kirp(x, 220)), t: an };
          if (e) anl[id].e = [kirp(e[0], 500), kirp(e[1], 500)];
          const h = (k.hatalar || []).find((x) => typeof x === "string"); if (h) anl[id].h = kirp(h, 300);
        }
      }
      return { out, yok, vid, anl };
    }, [...gerek[g]]);
    for (const [id, l] of Object.entries(r.out)) kaynak[g + ":" + id] = l;
    for (const [id, v] of Object.entries(r.vid)) video[g + ":" + id] = v;
    for (const [id, v] of Object.entries(r.anl)) anlat[g + ":" + id] = v;
    const korunan = [];
    for (const id of r.yok) { const ref = g + ":" + id;
      if (ESKI.HAVUZ[ref] && ESKI.HAVUZ[ref].length) { kaynak[ref] = ESKI.HAVUZ[ref]; if (ESKI.HAVUZ_VIDEO[ref]) video[ref] = ESKI.HAVUZ_VIDEO[ref]; if (ESKI.ANLAT[ref]) anlat[ref] = ESKI.ANLAT[ref]; korunan.push(id); }
      else eksik.push(ref); }
    if (korunan.length) console.log(g, "sınıf sayfasında olmayan", korunan.length, "konu eski havuzdan korundu:", korunan.join(","));
    console.log(g, Object.keys(r.out).length, "konu", Object.values(r.out).reduce((a, x) => a + x.length, 0), "soru");
  }
  await b.close();
  const js = "// Otomatik üretilir (araclar/yks-havuz-uret.js). Elle düzenlemeyin.\nwindow.HAVUZ_ESLE=" + JSON.stringify(esle) + ";\nwindow.HAVUZ_VIDEO=" + JSON.stringify(video) + ";\nwindow.HAVUZ=" + JSON.stringify(kaynak) + ";\n";
  fs.writeFileSync(path.join(KOK, "yks", "havuz.js"), js);
  // Anlatım: her YKS konusu için video seçimiyle aynı sırada (önce lise, sonra büyük sınıf) anlatımı olan ilk kaynak konu
  const ANL = {}, SEC = {};
  for (const [mid, lst] of Object.entries(esle)) SEC[mid] = lst.map((refs) => {
    const r = (refs || []).slice().sort((a, b) => { const ga = +a.split(":")[0], gb = +b.split(":")[0]; return (gb >= 9) - (ga >= 9) || gb - ga; }).find((x) => anlat[x]);
    if (r) ANL[r] = anlat[r]; return r || 0; });
  const ajs = "// Otomatik üretilir (araclar/yks-havuz-uret.js). Elle düzenlemeyin.\n// YKS özel dersi için kısa konu anlatımları (5–12. sınıf bölümlerinden): YKS_ANLAT[\"sınıf:konu\"], YKS_ANLAT_SEC[YKS dersi][konu sırası].\nwindow.YKS_ANLAT=" + JSON.stringify(ANL) + ";\nwindow.YKS_ANLAT_SEC=" + JSON.stringify(SEC) + ";\n";
  fs.writeFileSync(path.join(KOK, "yks", "anlatim.js"), ajs);
  console.log("anlatım", Object.keys(ANL).length, "konu,", Object.values(SEC).flat().filter(Boolean).length, "YKS konusunda,", (ajs.length / 1024).toFixed(0), "KB");
  console.log("toplam", Object.values(kaynak).reduce((a, x) => a + x.length, 0), "soru,", (js.length / 1024).toFixed(0), "KB", eksik.length ? "EKSİK: " + eksik : "");
  if (eksik.length) process.exitCode = 1;
})();
