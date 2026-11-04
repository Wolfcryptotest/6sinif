// 📊 Anonim kullanım sayacı (v2 deneme) — GoatCounter. Çerez yok, isim yok, kişisel bilgi yok; yalnızca hangi sayfanın ve
// hangi bölümün kaç kez açıldığı sayılır. Yönetim paneli: https://<AD>.goatcounter.com
// AD boşken hiçbir şey gönderilmez.
(function () {
  const AD = ""; // ← GoatCounter site adı buraya yazılacak (ör. "oyunlaogren")
  if (!AD || !/^https?:/.test(location.protocol)) return;
  window.goatcounter = { no_onload: false };
  const s = document.createElement("script");
  s.async = true; s.src = "https://gc.zgo.at/count.js"; s.dataset.goatcounter = `https://${AD}.goatcounter.com/count`;
  document.head.appendChild(s);
  const say = (yol, baslik) => { try { if (window.goatcounter && goatcounter.count) goatcounter.count({ path: yol, title: baslik, event: true }); } catch (e) {} };
  const sinif = (window.SINIF && SINIF.anahtar) || document.title;
  // Bölüm açılışları: konu adları değil, bölüm türü sayılır ("Test: Kesirler" → "Test")
  if (typeof window.git === "function") {
    const asil = window.git;
    window.git = function (fn, baslik) {
      const tur = String(baslik || "").split(":")[0].replace(/[^\p{L}\p{N} ]/gu, "").trim().slice(0, 40) || "Ana sayfa";
      say(`${sinif}/${tur}`, `${sinif} · ${tur}`);
      return asil.apply(this, arguments);
    };
  }
  if (window.OKUMA_ATOLYESI_AC) { const a = window.OKUMA_ATOLYESI_AC; window.OKUMA_ATOLYESI_AC = function () { say(`${sinif}/Okuma Atölyesi`, `${sinif} · Okuma Atölyesi`); return a.apply(this, arguments); }; }
})();
