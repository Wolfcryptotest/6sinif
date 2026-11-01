// 10. sınıf ayarları (Türkiye Yüzyılı Maarif Modeli)
window.SINIF = {
  anahtar: "10sinif",
  baslik: "10. Sınıf Çalışma Merkezi",
  dersler: [
    { key: "edebiyat", ad: "Türk Dili ve Edebiyatı", ikon: "✒️", renk: "#e5484d" },
    { key: "matematik", ad: "Matematik", ikon: "➗", renk: "#4f7cff" },
    { key: "fizik", ad: "Fizik", ikon: "⚛️", renk: "#2563eb" },
    { key: "kimya", ad: "Kimya", ikon: "⚗️", renk: "#db2777" },
    { key: "biyoloji", ad: "Biyoloji", ikon: "🧬", renk: "#22a06b" },
    { key: "tarih", ad: "Tarih", ikon: "🏛️", renk: "#b45309" },
    { key: "cografya", ad: "Coğrafya", ikon: "🗺️", renk: "#0891b2" },
    { key: "felsefe", ad: "Felsefe", ikon: "🤔", renk: "#64748b" },
    { key: "din", ad: "Din Kültürü", ikon: "🕌", renk: "#0ea5a4" },
    { key: "ingilizce", ad: "İngilizce", ikon: "🔤", renk: "#8b5cf6" }
  ],
  // Okul geneli ortak yazılılar (MEB, Okul Geneli Ortak Yazılı Sınav Uygulama Takvimi, 2026-2027 1. dönem 1. yazılı, Tablo 2: 9, 10 ve 11. sınıf)
  okul: [
    { ders: "biyoloji", donem: 1, yazili: 1, bas: "2026-11-03" },
    { ders: "kimya", donem: 1, yazili: 1, bas: "2026-11-04" },
    { ders: "tarih", donem: 1, yazili: 1, bas: "2026-11-04" },
    { ders: "matematik", donem: 1, yazili: 1, bas: "2026-11-05" },
    { ders: "fizik", donem: 1, yazili: 1, bas: "2026-11-06" },
    { ders: "felsefe", donem: 1, yazili: 1, bas: "2026-11-06" },
    { ders: "cografya", donem: 1, yazili: 1, bas: "2026-11-10" },
    { ders: "din", donem: 1, yazili: 1, bas: "2026-11-11" },
    { ders: "ingilizce", donem: 1, yazili: 1, bas: "2026-11-13" }
  ],
  // Ülke geneli ortak yazılı: takvimdeki not — "10. sınıf Türk dili ve edebiyatı dersi 1. dönem 1. sınavı, ülke geneli ortak yazılı sınav kapsamında 12 Kasım 2026 Perşembe"
  ortak: [
    { ders: "edebiyat", donem: 1, yazili: 1, bas: "2026-11-12", bit: "2026-11-12" }
  ],
  yks: {
    baslik: "YKS'ye erken hazırlık",
    altYazi: "10. sınıf konularıyla TYT/AYT biçimi",
    aciklama: "YKS'ye 12. sınıfın sonunda gireceksin. Buradaki denemeler TYT/AYT biçimindedir ama 10. sınıf konularından hazırlanır. Soru sayısı içerikteki soru kadar olur; soru havuzuna ekledikçe artar. Sorular 4 şıklıdır (ÖSYM'de 5 şık).",
    tam: false,
    oturumlar: [
      { ad: "TYT", sure: 165, ikon: "📘", renk: "#0f766e", dersler: [["edebiyat", 40], ["tarih", 5], ["cografya", 5], ["felsefe", 5], ["din", 5], ["matematik", 40], ["fizik", 7], ["kimya", 7], ["biyoloji", 6]] },
      { ad: "AYT Sayısal", sure: 180, ikon: "🧮", renk: "#2563eb", dersler: [["matematik", 40], ["fizik", 14], ["kimya", 13], ["biyoloji", 13]] },
      { ad: "AYT Eşit Ağırlık", sure: 180, ikon: "⚖️", renk: "#7c3aed", dersler: [["matematik", 40], ["edebiyat", 24], ["tarih", 10], ["cografya", 6]] },
      { ad: "AYT Sözel", sure: 180, ikon: "📜", renk: "#b45309", dersler: [["edebiyat", 24], ["tarih", 21], ["cografya", 17], ["felsefe", 12], ["din", 6]] },
      { ad: "YDT İngilizce", sure: 120, ikon: "🔤", renk: "#8b5cf6", dersler: [["ingilizce", 80]] }
    ]
  }
};
