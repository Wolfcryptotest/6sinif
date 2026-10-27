// Ortak yardımcılar ve içerik bankasından oyun görevi üretme
window.DERS = window.DERS || {};
window.O = (function () {
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const karistir = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = r(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const buyuk = (s) => { s = String(s); return s.charAt(0).toLocaleUpperCase("tr") + s.slice(1); };
  const sec = (a, n) => karistir(a).slice(0, n);

  // 3 şıklı seçim görevi (doğru şık her zaman ilk sırada verilir, oyun karıştırır)
  function secim(soru, dogru, yanlislar, cozum, ek) {
    const s = [String(dogru)];
    for (const y of karistir(yanlislar)) { const t = String(y); if (s.length < 3 && t && !s.includes(t)) s.push(t); }
    if (s.length < 3) return null;
    return Object.assign({ tip: "secim", soru, secenekler: s, dogru: 0, cozum: cozum || "" }, ek || {});
  }
  const dy = (ifade, dogru, cozum) => ({ tip: "dy", soru: "Bu cümle doğru mu, yanlış mı?", ifade, dogru, cozum: cozum || "" });
  const grupla = (soru, gruplar, ogeler, cozum) => ({ tip: "grupla", soru, gruplar, ogeler, cozum: cozum || "" });
  const eslestir = (soru, ciftler, cozum) => ({ tip: "eslestir", soru, ciftler, cozum: cozum || "" });
  const sirala = (soru, parcalar, cozum, ayrac) => ({ tip: "sirala", soru, parcalar, ayrac: ayrac == null ? " " : ayrac, cozum: cozum || parcalar.join(ayrac == null ? " " : ayrac) });
  const sayi = (soru, cevap, cozum, ek) => Object.assign({ tip: "sayi", soru, cevap, cozum: cozum || "" }, ek || {});

  // Ağırlıklı tip seçimi; null dönerse başka tip denenir
  function tiplerden(liste) {
    return () => {
      const toplam = liste.reduce((t, x) => t + x[0], 0);
      for (let i = 0; i < 40; i++) {
        let k = Math.random() * toplam, f = liste[0][1];
        for (const [w, fn] of liste) { if ((k -= w) <= 0) { f = fn; break; } }
        const g = f(); if (g) return g;
      }
      return null;
    };
  }

  // Konu bankasından üreteç:
  // sorular: [[soru, doğru, [yanlışlar], çözüm?, {ek}?]]
  // dy: { d: [doğru ifadeler], y: [yanlış ifadeler] }
  // gruplar: { "Grup adı": [öğeler] }, grupSor: (grup) => soru metni
  // ciftler: [[a, b]], ciftSor: (a) => soru (cevap b), ciftSor2: (b) => soru (cevap a), ciftBaslik: eşleştirme başlığı
  // sirala: [[soru, [doğru sıradaki parçalar], ayraç?]]
  function bankadan(k) {
    const t = [];
    if (k.sorular && k.sorular.length) t.push([4, () => { const q = pick(k.sorular); return secim(q[0], q[1], q[2], q[3], q[4]); }]);
    if (k.dy) t.push([2, () => Math.random() < 0.5 ? dy(pick(k.dy.d), true) : (() => { const y = pick(k.dy.y); return dy(Array.isArray(y) ? y[0] : y, false, Array.isArray(y) ? y[1] : ""); })()]);
    if (k.gruplar) {
      const adlar = Object.keys(k.gruplar);
      t.push([2.5, () => {
        const gs = sec(adlar, Math.min(adlar.length, adlar.length > 2 && Math.random() < 0.4 ? 3 : 2));
        const og = [];
        gs.forEach((g, i) => sec(k.gruplar[g], gs.length === 3 ? 2 : r(2, 3)).forEach((x) => og.push([x, i])));
        return grupla(k.gruplaSoru || "Her kartı doğru kutuya yerleştir.", gs, karistir(og));
      }]);
      t.push([2, () => {
        const g = pick(adlar), d = pick(k.gruplar[g]);
        const diger = adlar.filter((x) => x !== g).flatMap((x) => k.gruplar[x]);
        const bf = k.buyukYok ? (x) => x : buyuk; return secim(k.grupSor ? k.grupSor(g) : `Hangisi "${g}" grubundadır?`, bf(d), diger.map(bf), `${bf(d)} → ${g}`);
      }]);
    }
    if (k.ciftler) {
      t.push([2, () => eslestir(k.ciftBaslik || "Eşleri bul: soldakini sağdakiyle eşleştir.", sec(k.ciftler, 4))]);
      if (k.ciftSor) t.push([2, () => { const [a, b] = pick(k.ciftler); return secim(k.ciftSor(a), b, k.ciftler.map((x) => x[1]).filter((x) => x !== b), `${a} → ${b}`); }]);
      if (k.ciftSor2) t.push([1.5, () => { const [a, b] = pick(k.ciftler); return secim(k.ciftSor2(b), a, k.ciftler.map((x) => x[0]).filter((x) => x !== a), `${b} → ${a}`); }]);
    }
    if (k.sirala) t.push([1.5, () => { const s = pick(k.sirala); return sirala(s[0], s[1], s[3], s[2]); }]);
    if (k.ekstra) k.ekstra.forEach((e) => t.push(e));
    return tiplerden(t);
  }

  return { r, pick, karistir, buyuk, sec, secim, dy, grupla, eslestir, sirala, sayi, tiplerden, bankadan };
})();
