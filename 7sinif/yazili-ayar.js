// 7. sınıf: Yazılıya Hazırlık ve LGS Hazırlık ayarları (hazirlik.js, lgs.js bu dosyayı okur)
window.SINIF = {
  anahtar: "7sinif",
  baslik: "7. Sınıf Çalışma Merkezi",
  // Okul geneli ortak yazılılar (MEB Ortak Yazılı Sınav Sistemi, 2026-2027 1. dönem 1. yazılı takvimi)
  okul: [
    { ders: "fen", donem: 1, yazili: 1, bas: "2026-11-03" },
    { ders: "matematik", donem: 1, yazili: 1, bas: "2026-11-05" },
    { ders: "sosyal", donem: 1, yazili: 1, bas: "2026-11-06" },
    { ders: "turkce", donem: 1, yazili: 1, bas: "2026-11-10" },
    { ders: "din", donem: 1, yazili: 1, bas: "2026-11-13" }
  ],
  // 2026-2027 ülke geneli ortak yazılı sınavları (MEB takvimi)
  ortak: [
    { ders: "turkce", donem: 1, yazili: 2, bas: "2027-01-05", bit: "2027-01-05" },
    { ders: "matematik", donem: 2, yazili: 1, bas: "2027-04-06", bit: "2027-04-06" }
  ],
  // Ünite dönemleri (sırayla; "Kelime Havuzu" sayılmaz)
  donem: { matematik: [1, 2, 2, 2, 1, 2, 2, 1, 2] },
  // Resmî konu-soru dağılım tablolarına göre kapsam (konu kimlikleri). "*" = dersin tamamı
  kapsam: {
    matematik: { "1-2": ["m1k3", "m1k4", "m5k1", "m5k2", "m5k3", "m8k1"] },
    turkce: { "1-2": "*" }
  },
  lgs: {
    baslik: "LGS'ye hazırlık",
    altYazi: "7. sınıf konularıyla LGS biçimi",
    aciklama: "LGS'ye 8. sınıfın sonunda gireceksin. Buradaki denemeler LGS biçimindedir ve 7. sınıf konularından hazırlanır; 8. sınıf konuları LGS'nin büyük kısmını oluşturur.",
    oturumlar: [
      { ad: "Sözel", sure: 75, dersler: [["turkce", 20], ["sosyal", 10], ["din", 10], ["ingilizce", 10]] },
      { ad: "Sayısal", sure: 80, dersler: [["matematik", 20], ["fen", 20]] }
    ]
  }
};
