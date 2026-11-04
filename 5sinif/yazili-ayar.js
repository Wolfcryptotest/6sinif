// 5. sınıf: Yazılıya Hazırlık ayarları (hazirlik.js bu dosyayı okur)
window.SINIF = {
  anahtar: "5sinif",
  baslik: "5. Sınıf Çalışma Merkezi",
  // Okul geneli ortak yazılılar (MEB Ortak Yazılı Sınav Sistemi, 2026-2027 1. dönem 1. yazılı takvimi)
  okul: [
    { ders: "fen", donem: 1, yazili: 1, bas: "2026-11-03" },
    { ders: "matematik", donem: 1, yazili: 1, bas: "2026-11-05" },
    { ders: "sosyal", donem: 1, yazili: 1, bas: "2026-11-06" },
    { ders: "turkce", donem: 1, yazili: 1, bas: "2026-11-10" },
    { ders: "ingilizce", donem: 1, yazili: 1, bas: "2026-11-12" },
    { ders: "din", donem: 1, yazili: 1, bas: "2026-11-13" }
  ],
  lgs: {
    baslik: "Deneme Sınavı",
    altYazi: "5. sınıf konularıyla LGS biçimi",
    aciklama: "Bu denemeler 5. sınıf konularından LGS biçiminde hazırlanır. Netini takip et, zayıf konularını gör. Bursluluk sınavına (İOKBS) ve ileride LGS'ye hazırlık için iyi bir alışkanlıktır.",
    oturumlar: [
      { ad: "Sözel", sure: 75, dersler: [["turkce", 20], ["sosyal", 10], ["din", 10], ["ingilizce", 10]] },
      { ad: "Sayısal", sure: 80, dersler: [["matematik", 20], ["fen", 20]] }
    ]
  },
  ortak: [] // 5. sınıflar 2026-2027'de ülke geneli ortak yazılıya girmiyor (yazılılar okulda)
};
