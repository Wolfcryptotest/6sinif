// 11. sınıf ayarları
window.SINIF = {
  anahtar: "11sinif",
  baslik: "11. Sınıf Çalışma Merkezi",
  dersler: [
    { key: "edebiyat", ad: "Türk Dili ve Edebiyatı", ikon: "✒️", renk: "#e5484d" },
    { key: "matematik", ad: "Matematik", ikon: "➗", renk: "#4f7cff" },
    { key: "fizik", ad: "Fizik", ikon: "⚛️", renk: "#2563eb" },
    { key: "kimya", ad: "Kimya", ikon: "⚗️", renk: "#db2777" },
    { key: "biyoloji", ad: "Biyoloji", ikon: "🧬", renk: "#22a06b" },
    { key: "tarih", ad: "Tarih", ikon: "🏛️", renk: "#b45309" },
    { key: "cografya", ad: "Coğrafya", ikon: "🗺️", renk: "#0891b2" },
    { key: "felsefe", ad: "Felsefe", ikon: "🤔", renk: "#64748b" },
    { key: "ingilizce", ad: "İngilizce", ikon: "🔤", renk: "#8b5cf6" }
  ],
  // Okul geneli ortak yazılılar (MEB Ortak Yazılı Sınav Sistemi, 2026-2027 1. dönem 1. yazılı takvimi)
  okul: [
    { ders: "biyoloji", donem: 1, yazili: 1, bas: "2026-11-03" },
    { ders: "kimya", donem: 1, yazili: 1, bas: "2026-11-04" },
    { ders: "tarih", donem: 1, yazili: 1, bas: "2026-11-04" },
    { ders: "matematik", donem: 1, yazili: 1, bas: "2026-11-05" },
    { ders: "fizik", donem: 1, yazili: 1, bas: "2026-11-06" },
    { ders: "felsefe", donem: 1, yazili: 1, bas: "2026-11-06" },
    { ders: "cografya", donem: 1, yazili: 1, bas: "2026-11-10" },
    { ders: "edebiyat", donem: 1, yazili: 1, bas: "2026-11-11" },
    { ders: "din", donem: 1, yazili: 1, bas: "2026-11-11" }
  ],
  ortak: [], // 11. sınıflar 2026-2027'de ülke geneli ortak yazılıya girmiyor (yazılılar okulda)
  yks: {
    baslik: "YKS'ye hazırlık",
    altYazi: "11. sınıf konularıyla TYT/AYT biçimi",
    aciklama: "YKS'ye 12. sınıfın sonunda gireceksin. Buradaki denemeler TYT/AYT biçimindedir ama 11. sınıf konularından hazırlanır. Soru sayısı içerikteki soru kadar olur; soru havuzuna ekledikçe artar. Sorular 4 şıklıdır (ÖSYM'de 5 şık).",
    tam: false,
    oturumlar: [
      { ad: "TYT", sure: 165, ikon: "📘", renk: "#0f766e", dersler: [["edebiyat", 40], ["tarih", 5], ["cografya", 5], ["felsefe", 5], ["matematik", 40], ["fizik", 7], ["kimya", 7], ["biyoloji", 6]] },
      { ad: "AYT Sayısal", sure: 180, ikon: "🧮", renk: "#2563eb", dersler: [["matematik", 40], ["fizik", 14], ["kimya", 13], ["biyoloji", 13]] },
      { ad: "AYT Eşit Ağırlık", sure: 180, ikon: "⚖️", renk: "#7c3aed", dersler: [["matematik", 40], ["edebiyat", 24], ["tarih", 10], ["cografya", 6]] },
      { ad: "AYT Sözel", sure: 180, ikon: "📜", renk: "#b45309", dersler: [["edebiyat", 24], ["tarih", 21], ["cografya", 17], ["felsefe", 12]] },
      { ad: "YDT İngilizce", sure: 120, ikon: "🔤", renk: "#8b5cf6", dersler: [["ingilizce", 80]] }
    ]
  }
};
