// İçerik yazım yardımcısı (8, 9, 11. sınıflar)
// DERS(anahtar, önek, { ad, ikon, renk }, [ ünite, ... ])
//   ünite = [ "Ünite adı", dönem (1|2), [ konu, ... ] ]
//   konu  = [ "Konu adı", [özet...], [anlatım paragrafları...], [test soruları...], [açık uçlu sorular...], [kelimeler (İngilizce): ["word","kelime"]...] ]
//   test sorusu  = [ "soru", "DOĞRU şık", "yanlış", "yanlış", "yanlış", "çözüm" ]   (şıklar ekranda karışır)
//   açık uçlu    = [ "soru", "cevap anahtarı / beklenen cevap" ]
// Konu kimlikleri otomatik: önek + ünite no + "k" + konu no  →  ör. "mat1k2" (soru üreteçleri bu kimlikle eşleşir)
window.ICERIK = window.ICERIK || {};
window.DERS = function (anahtar, onek, bilgi, uniteler) {
  window.ICERIK[anahtar] = {
    ad: bilgi.ad, ikon: bilgi.ikon, renk: bilgi.renk,
    uniteler: uniteler.map(([uad, donem, konular], ui) => ({
      id: onek + "u" + (ui + 1), ad: uad, donem: donem || 1,
      konular: konular.map(([kad, ozet, anlatim, sorular, acik, kelimeler], ki) => ({
        id: onek + (ui + 1) + "k" + (ki + 1), ad: kad, ozet: ozet || [], anlatim: anlatim || [], kelimeler: kelimeler || [],
        sorular: (sorular || []).map(([soru, d, y1, y2, y3, cozum]) => ({ soru, secenekler: [d, y1, y2, y3], dogru: 0, cozum: cozum || "" })),
        acik: (acik || []).map(([soru, cevap]) => ({ soru, cevap }))
      }))
    }))
  };
};
