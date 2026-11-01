// 8. sınıf ayarları
window.SINIF = {
  anahtar: "8sinif",
  baslik: "8. Sınıf Çalışma Merkezi",
  dersler: [
    { key: "turkce", ad: "Türkçe", ikon: "📖", renk: "#e5484d" },
    { key: "matematik", ad: "Matematik", ikon: "➗", renk: "#4f7cff" },
    { key: "fen", ad: "Fen Bilimleri", ikon: "🔬", renk: "#22a06b" },
    { key: "inkilap", ad: "T.C. İnkılap Tarihi", ikon: "🇹🇷", renk: "#f59e0b" },
    { key: "ingilizce", ad: "İngilizce", ikon: "🔤", renk: "#8b5cf6" },
    { key: "din", ad: "Din Kültürü", ikon: "🕌", renk: "#0ea5a4" }
  ],
  ortak: [], // 8. sınıflar 2026-2027'de ülke geneli ortak yazılıya girmiyor (yazılılar okulda)
  lgs: {
    tarih: "2027-06-13", // MEB takvimine göre güncelle
    tarihNot: "",
    oturumlar: [
      { ad: "Sözel", sure: 75, dersler: [["turkce", 20], ["inkilap", 10], ["din", 10], ["ingilizce", 10]] },
      { ad: "Sayısal", sure: 80, dersler: [["matematik", 20], ["fen", 20]] }
    ]
  }
};
