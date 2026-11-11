// YKS soru havuzu üretici: 5–12. sınıf içeriklerinden YKS konularına eşlenen soruları yks/havuz.js dosyasına yazar.
// Kullanım: yerel sunucu açıkken (repo kökünün bir üstü servis ediliyor: http://localhost:8765/6sinif/)  node araclar/yks-havuz-uret.js
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
const URL = process.env.YKS_URL || "http://localhost:8765/6sinif/";
const esle = JSON.parse(fs.readFileSync(path.join(__dirname, "yks-esleme.json"), "utf8"));
const gerek = {};
for (const lst of Object.values(esle)) for (const k of lst) for (const ref of k) { const [g, id] = ref.split(":"); (gerek[g] = gerek[g] || new Set()).add(id); }
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  const kaynak = {}, video = {}; let eksik = [];
  for (const g of Object.keys(gerek).sort((a, b) => a - b)) {
    await p.goto(URL + (g === "6" ? "" : g + "sinif/") + "index.html"); await p.waitForTimeout(1800);
    const r = await p.evaluate((ids) => {
      const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const out = {}, yok = [], vid = {};
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
      }
      return { out, yok, vid };
    }, [...gerek[g]]);
    for (const [id, l] of Object.entries(r.out)) kaynak[g + ":" + id] = l;
    for (const [id, v] of Object.entries(r.vid)) video[g + ":" + id] = v;
    eksik = eksik.concat(r.yok.map((x) => g + ":" + x));
    console.log(g, Object.keys(r.out).length, "konu", Object.values(r.out).reduce((a, x) => a + x.length, 0), "soru", r.yok.length ? "YOK: " + r.yok : "");
  }
  await b.close();
  const js = "// Otomatik üretilir (araclar/yks-havuz-uret.js). Elle düzenlemeyin.\nwindow.HAVUZ_ESLE=" + JSON.stringify(esle) + ";\nwindow.HAVUZ_VIDEO=" + JSON.stringify(video) + ";\nwindow.HAVUZ=" + JSON.stringify(kaynak) + ";\n";
  fs.writeFileSync(path.join(KOK, "yks", "havuz.js"), js);
  console.log("toplam", Object.values(kaynak).reduce((a, x) => a + x.length, 0), "soru,", (js.length / 1024).toFixed(0), "KB", eksik.length ? "EKSİK: " + eksik : "");
  if (eksik.length) process.exitCode = 1;
})();
