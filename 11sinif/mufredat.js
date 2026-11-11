// 📚 Müfredat tamamlama yardımcısı (5–12. sınıflar). Ders dosyalarından SONRA, videolar ve soru üreteçlerinden ÖNCE yüklenir.
// Eski konuların kimlikleri değişmez (öğrenci ilerlemesi korunur); yeni ünite/konular kendi sabit kimlikleriyle eklenir.
//   MUF.unite(ders, { id, ad, donem, sonra: "matu2" | basa: true }, [konu, ...])   → yeni ünite (verilen ünitenin arkasına)
//   MUF.konu(ders, uniteId, sira, konu)                                           → var olan üniteye yeni konu (sira: 0 = başa)
//   MUF.zengin(konuId, { ozet, anlatim, ornek, hata })                            → var olan konuya ek özet/anlatım/örnek/hata
//   konu = { id, ad, ozet:[], anlatim:[], sorular:[[soru, DOĞRU, y, y, y, çözüm]], acik:[[soru, cevap]], ornek:[[soru, çözüm]], hata:[] }
window.MUF = window.MUF || (function () {
  const I = () => window.ICERIK || {};
  const yap = (k) => ({
    id: k.id, ad: k.ad, ozet: k.ozet || [], anlatim: k.anlatim || [], kelimeler: k.kelimeler || [],
    sorular: (k.sorular || []).map(([soru, d, y1, y2, y3, cozum]) => ({ soru, secenekler: [d, y1, y2, y3], dogru: 0, cozum: cozum || "" })),
    acik: (k.acik || []).map(([soru, cevap]) => ({ soru, cevap })),
    ornekler: k.ornek || [], hatalar: k.hata || []
  });
  const bul = (id) => { for (const d of Object.values(I())) for (const u of d.uniteler || []) for (const k of u.konular || []) if (k.id === id) return k; return null; };
  return {
    unite(ders, b, konular) {
      const D = I()[ders]; if (!D || D.uniteler.some((u) => u.id === b.id)) return;
      const u = { id: b.id, ad: b.ad, donem: b.donem || 1, konular: konular.map(yap) };
      let i = b.basa ? 0 : D.uniteler.length;
      if (b.sonra) { const j = D.uniteler.findIndex((x) => x.id === b.sonra); if (j >= 0) i = j + 1; }
      D.uniteler.splice(i, 0, u);
    },
    konu(ders, uniteId, sira, k) {
      const D = I()[ders]; const u = D && D.uniteler.find((x) => x.id === uniteId); if (!u || u.konular.some((x) => x.id === k.id)) return;
      u.konular.splice(Math.max(0, Math.min(sira, u.konular.length)), 0, yap(k));
    },
    zengin(id, e) {
      const k = bul(id); if (!k || k._muf) return; k._muf = true;
      if (e.ozet) k.ozet = (k.ozet || []).concat(e.ozet);
      if (e.anlatim) k.anlatim = (k.anlatim || []).concat(e.anlatim);
      if (e.ornek) k.ornekler = (k.ornekler || []).concat(e.ornek);
      if (e.hata) k.hatalar = (k.hatalar || []).concat(e.hata);
      if (e.sorular) k.sorular = (k.sorular || []).concat(e.sorular.map(([soru, d, y1, y2, y3, cozum]) => ({ soru, secenekler: [d, y1, y2, y3], dogru: 0, cozum: cozum || "" })));
      if (e.acik) k.acik = (k.acik || []).concat(e.acik.map(([soru, cevap]) => ({ soru, cevap })));
    }
  };
})();
