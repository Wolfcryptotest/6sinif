// A2 ön koşul verisi üretici: araclar/onkosul.json haritasını okur, her ön koşul konusundan (önceki sınıfın kendi
// içeriğinden) en çok 12 soru toplar ve haritadaki her sınıf klasörüne onkosul-veri.js yazar.
// Kullanım: repo kökünün bir üstü http://localhost:8765/ adresinde servis edilirken  node araclar/onkosul-uret.js
// (yks-havuz-uret.js ile aynı düzen; klasör adı 6sinif olmalı). Sonra ilgili klasörlerde swbump çalıştırılır.
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
const URL = process.env.YKS_URL || "http://localhost:8765/6sinif/";
const harita = JSON.parse(fs.readFileSync(path.join(__dirname, "onkosul.json"), "utf8"));
const klasor = (g) => (String(g) === "6" ? KOK : path.join(KOK, g + "sinif"));
const gerek = {};
for (const [g, m] of Object.entries(harita)) {
  if (!/^\d+$/.test(g)) continue;
  for (const [id, l] of Object.entries(m)) for (const ref of l) {
    const [og, oid] = ref.split(":");
    if (+og >= +g) throw new Error(`${g}:${id} → ${ref}: ön koşul yalnızca önceki sınıftan olabilir`);
    (gerek[og] = gerek[og] || new Set()).add(oid);
  }
}
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  const konu = {}; let hata = 0;
  const yukle = async (g) => { await p.goto(URL + (String(g) === "6" ? "" : g + "sinif/") + "index.html"); await p.waitForTimeout(1800); };
  for (const g of Object.keys(gerek).sort((a, b) => a - b)) {
    await yukle(g);
    const r = await p.evaluate((ids) => {
      const out = {};
      for (const id of ids) {
        const f = konuBul(id); if (!f) { out[id] = null; continue; }
        const k = f.konu, gor = new Map();
        const ekle = (q) => {
          if (!q || Array.isArray(q) || !q.soru || !Array.isArray(q.secenekler) || q.secenekler.length < 3 || q.ses) return;
          const o = q.secenekler.map(String), a = typeof q.dogru === "number" ? q.dogru : o.indexOf(String(q.dogru));
          if (new Set(o).size !== o.length || a < 0 || a >= o.length || gor.has(q.soru.trim())) return;
          gor.set(q.soru.trim(), [q.soru, o, a, q.cozum || ""]);
        };
        for (let t = 0; t < 4 && gor.size < 12; t++) { try { (soruHazirla(k, 12) || []).forEach(ekle); } catch (e) {} }
        out[id] = { ad: k.ad, ders: (ICERIK[f.ders] && ICERIK[f.ders].ad) || f.ders, sorular: [...gor.values()].slice(0, 12) };
      }
      return out;
    }, [...gerek[g]]);
    for (const [id, v] of Object.entries(r)) {
      if (!v || v.sorular.length < 3) { console.log("SORUN:", g + ":" + id, v ? "soru az (" + v.sorular.length + ")" : "konu yok"); hata++; continue; }
      konu[g + ":" + id] = v;
    }
    console.log(g, "sınıfından", Object.keys(r).length, "ön koşul konusu");
  }
  // Hedef sınıflarda haritadaki konu kimliklerinin gerçekten var olduğunu da doğrula
  for (const g of Object.keys(harita).filter((x) => /^\d+$/.test(x))) {
    await yukle(g);
    const yok = await p.evaluate((ids) => ids.filter((id) => !konuBul(id)), Object.keys(harita[g]));
    if (yok.length) { console.log("SORUN:", g, "sınıfında olmayan konu:", yok.join(", ")); hata++; }
    const veri = {}, sorular = {};
    for (const [id, l] of Object.entries(harita[g])) {
      veri[id] = l.filter((ref) => konu[ref]).map((ref) => { const [og, oid] = ref.split(":"); return [og, oid, konu[ref].ad]; });
      for (const ref of l) if (konu[ref]) sorular[ref] = konu[ref].sorular;
    }
    const js = "// Otomatik üretilir (araclar/onkosul-uret.js, kaynak araclar/onkosul.json). Elle düzenlemeyin.\n" +
      "window.ONKOSUL=" + JSON.stringify(veri) + ";\nwindow.ONKOSUL_SORU=" + JSON.stringify(sorular) + ";\n";
    fs.writeFileSync(path.join(klasor(g), "onkosul-veri.js"), js);
    console.log(g, "→ onkosul-veri.js:", Object.keys(veri).length, "konu,", Object.keys(sorular).length, "ön koşul,", (js.length / 1024).toFixed(1), "KB");
  }
  await b.close();
  if (hata) { console.log(hata, "sorun"); process.exit(1); }
})();
