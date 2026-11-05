// ➕ Ek soru bankası yükleyicisi (5–12). İçerik dosyalarından SONRA, app.js'ten ÖNCE yüklenir.
// window.SORU_EK = { konuId: `soru | DOĞRU | yanlış1 ; yanlış2 ; yanlış3 | çözüm` (her satır bir soru) }
// • Ek sorular konunun sabit sorularına eklenir (aynı soru iki kez eklenmez).
// • app.js yüklendikten sonra soruHazirla sarmalanır: son görülen sorular yeni testte mümkün olduğunca tekrar gelmez.
(function () {
  const ICERIK = window.ICERIK || {}, EK = window.SORU_EK || {};
  const coz = (metin) => String(metin).split("\n").map((s) => s.trim()).filter((s) => s && !s.startsWith("//")).map((s) => {
    const p = s.split("|").map((x) => x.trim());
    if (p.length < 3) return null;
    const y = p[2].split(";").map((x) => x.trim()).filter(Boolean);
    return y.length >= 2 ? { soru: p[0], secenekler: [p[1], ...y.slice(0, 3)], dogru: 0, cozum: p[3] || "", ek: true } : null;
  }).filter(Boolean);
  for (const dk of Object.keys(ICERIK)) for (const u of ICERIK[dk].uniteler || []) for (const k of u.konular || []) {
    if (!EK[k.id]) continue;
    k.sorular = k.sorular || [];
    const var_ = new Set(k.sorular.map((s) => s.soru));
    for (const s of coz(EK[k.id])) if (!var_.has(s.soru)) { var_.add(s.soru); k.sorular.push(s); }
  }

  // Tekrar önleme: app.js'teki soruHazirla yüklendikten sonra sarmalanır
  function sar() {
    if (typeof window.soruHazirla !== "function" || window.soruHazirla._sarili) return;
    const asil = window.soruHazirla;
    const sonlar = () => { try { const k = window.kayit; if (!k) return {}; return (k.sonSoru = k.sonSoru || {}); } catch (e) { return {}; } };
    const yeni = function (k, n) {
      if (!k || !Array.isArray(k.sorular) || k.sorular.length < 6) return asil.apply(this, arguments);
      const S = sonlar(), son = new Set(S[k.id] || []), tum = k.sorular;
      const gorulmedi = tum.filter((s) => !son.has(s.soru)), adet = n || 10;
      // Önce hiç görülmemiş sorular; eksik kalırsa en uzun süre önce görülenlerle tamamlanır
      let kullan = gorulmedi;
      if (kullan.length < adet) {
        const eski = (S[k.id] || []).map((m) => tum.find((s) => s.soru === m)).filter(Boolean);
        kullan = kullan.concat(eski.slice(0, adet - kullan.length));
      }
      if (kullan.length < Math.min(adet, tum.length)) kullan = tum;
      k.sorular = kullan;
      let liste;
      try { liste = asil.apply(this, arguments); } finally { k.sorular = tum; }
      try {
        const yeniSon = (S[k.id] || []).filter((x) => !liste.some((s) => s.soru === x));
        for (const s of liste) if (!s.uretildi) yeniSon.push(s.soru);
        S[k.id] = yeniSon.slice(-Math.max(8, Math.floor(tum.length * 0.6)));
      } catch (e) {}
      return liste;
    };
    yeni._sarili = true;
    window.soruHazirla = yeni;
  }
  window.SORU_EKLE_SAR = sar;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", sar); else sar();
})();
