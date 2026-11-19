// Sözel dersler için ortak soru üretme yardımcıları
window.URETEC = window.URETEC || {};
window.UR = (function () {
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const karistir = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = r(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const buyuk = (s) => s.charAt(0).toLocaleUpperCase("tr") + s.slice(1);

  // doğru şık + yanlış şık havuzundan 3 benzersiz yanlış seçer
  // Yanılgı etiketli yanlış şık (A4): Y(değer, "d:...") dikkat hatası, Y(değer, "k:...") kavram yanılgısı
  const Y = (v, e) => ({ v, e });
  function soru(metin, dogru, havuz, cozum) {
    const s = [String(dogru)], yan = {};
    for (const x of karistir(havuz)) {
      const et = x && typeof x === "object" ? x.e : null, t = String(et ? x.v : x);
      if (s.length < 4 && t && !s.includes(t)) { s.push(t); if (et) yan[t] = et; }
    }
    if (s.length < 4) return null; // yeterli şık yok
    const q = { soru: metin, secenekler: s, dogru: 0, cozum, uretildi: true };
    if (Object.keys(yan).length) q.yanilgi = yan;
    return q;
  }

  // Birden çok soru tipinden rastgele biri; null dönerse başkasını dener
  function tiplerden(tipler) {
    return () => { for (let i = 0; i < 30; i++) { const q = pick(tipler)(); if (q) return q; } return null; };
  }

  // Sözlük bankası [[a, b], ...] → "a'nın karşılığı hangisi?" soruları (iki yönlü)
  function eslestir(banka, sor1, sor2, cozumF) {
    return tiplerden([
      () => { const [a, b] = pick(banka); return soru(sor1(a), buyuk(b), banka.map((x) => x[1]).filter((x) => x !== b).map(buyuk), cozumF(a, b)); },
      () => { const [a, b] = pick(banka); return soru(sor2(b), buyuk(a), banka.map((x) => x[0]).filter((x) => x !== a).map(buyuk), cozumF(a, b)); }
    ]);
  }

  // Kategori bankası { kategori: [öğeler] } → "Hangisi X'tir?" / "Y hangi gruptadır?"
  function siniflandir(gruplar, sorF, cozumF, grupSorF) {
    const adlar = Object.keys(gruplar);
    const tip = [() => {
      const g = pick(adlar), d = pick(gruplar[g]);
      const diger = adlar.filter((x) => x !== g).flatMap((x) => gruplar[x]);
      return soru(sorF(g), buyuk(d), diger.map(buyuk), cozumF(d, g));
    }];
    if (grupSorF && adlar.length >= 4) tip.push(() => {
      const g = pick(adlar), d = pick(gruplar[g]);
      return soru(grupSorF(d), buyuk(g), adlar.filter((x) => x !== g).map(buyuk), cozumF(d, g));
    });
    return tiplerden(tip);
  }

  // Doğru ve yanlış ifade bankasından "Hangisi doğrudur / yanlıştır?" soruları
  function ifadeler(dogrular, yanlislar, konu) {
    const k = konu ? konu + " ile ilgili " : "";
    return tiplerden([
      () => { const d = pick(dogrular); return soru(`${buyuk(k)}hangisi doğrudur?`, d, yanlislar, `Doğru ifade: "${d}"`); },
      () => { const y = pick(yanlislar); return soru(`${buyuk(k)}hangisi yanlıştır?`, y, dogrular, `"${y}" ifadesi yanlıştır.`); }
    ]);
  }

  return { r, pick, karistir, buyuk, soru, Y, tiplerden, eslestir, siniflandir, ifadeler };
})();
