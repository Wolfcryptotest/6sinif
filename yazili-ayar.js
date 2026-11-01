// 6. sınıf: Yazılıya Hazırlık ve LGS Hazırlık ayarları (hazirlik.js, lgs.js bu dosyayı okur)
window.SINIF = {
  anahtar: "6sinif",
  baslik: "6. Sınıf Çalışma Merkezi",
  // 2026-2027 ülke geneli ortak yazılı sınavları (MEB takvimi)
  ortak: [
    { ders: "matematik", donem: 1, yazili: 1, bas: "2026-11-11", bit: "2026-11-11" },
    { ders: "turkce", donem: 2, yazili: 2, bas: "2027-06-08", bit: "2027-06-08" }
  ],
  // Ünite dönemleri (sırayla; "Ek Konu" ve "Kelime Havuzu" üniteleri sayılmaz)
  donem: { matematik: [1, 2, 1, 1, 2, 2, 2] },
  // Resmî konu-soru dağılım tablolarına göre kapsam (konu kimlikleri). "*" = dersin tamamı
  kapsam: {
    matematik: {
      "1-1": ["t1k1", "t1k2", "t1k3", "t1k4", "t4k1", "t4k2"],
      "1-2": ["t1k1", "t1k2", "t1k3", "t1k4", "t3k1", "t3k2", "t3k3", "t3k4", "t4k1", "t4k2"]
    },
    turkce: { "2-2": "*" }
  },
  lgs: {
    baslik: "LGS'ye erken hazırlık",
    altYazi: "6. sınıf konularıyla LGS biçimi",
    aciklama: "LGS'ye 8. sınıfın sonunda gireceksin. Buradaki denemeler LGS biçimindedir ama 6. sınıf konularından hazırlanır; şimdiden alışmak için.",
    oturumlar: [
      { ad: "Sözel", sure: 75, dersler: [["turkce", 20], ["sosyal", 10], ["din", 10], ["ingilizce", 10]] },
      { ad: "Sayısal", sure: 80, dersler: [["matematik", 20], ["fen", 20]] }
    ]
  }
};
