// 12. sınıf ayarları (2026-2027'de 12. sınıflarda önceki öğretim programları uygulanır)
window.SINIF = {
  anahtar: "12sinif",
  baslik: "12. Sınıf Çalışma Merkezi",
  dersler: [
    { key: "edebiyat", ad: "Türk Dili ve Edebiyatı", ikon: "✒️", renk: "#e5484d" },
    { key: "matematik", ad: "Matematik", ikon: "➗", renk: "#4f7cff" },
    { key: "fizik", ad: "Fizik", ikon: "⚛️", renk: "#2563eb" },
    { key: "kimya", ad: "Kimya", ikon: "⚗️", renk: "#db2777" },
    { key: "biyoloji", ad: "Biyoloji", ikon: "🧬", renk: "#22a06b" },
    { key: "inkilap", ad: "T.C. İnkılap Tarihi ve Atatürkçülük", ikon: "🇹🇷", renk: "#b91c1c" },
    { key: "cografya", ad: "Coğrafya", ikon: "🗺️", renk: "#0891b2" },
    { key: "din", ad: "Din Kültürü", ikon: "🕌", renk: "#0ea5a4" },
    { key: "ingilizce", ad: "İngilizce", ikon: "🔤", renk: "#8b5cf6" }
  ],
  // MEB'in 2026-2027 1. dönem 1. yazılı takvimi 12. sınıfları kapsamıyor; yazılı tarihleri okulunca belirlenir.
  okul: [],
  ortak: [],
  yks: {
    tarih: "2027-06-19",
    tarihNot: "(TYT) · AYT ve YDT: 20 Haziran 2027 — ÖSYM 2027 takvimine göre; değişirse osym.gov.tr'yi esas al.",
    aciklama: "Denemeler TYT/AYT biçimindedir ve 12. sınıf konularından hazırlanır; 9-11. sınıf konularını o sınıfların uygulamalarından tekrar et. Soru sayısı içerikteki soru kadar olur; soru havuzuna ekledikçe artar. Sorular 4 şıklıdır (ÖSYM'de 5 şık).",
    tam: false,
    oturumlar: [
      { ad: "TYT", sure: 165, ikon: "📘", renk: "#0f766e", dersler: [["edebiyat", 40], ["inkilap", 5], ["cografya", 5], ["din", 5], ["matematik", 40], ["fizik", 7], ["kimya", 7], ["biyoloji", 6]] },
      { ad: "AYT Sayısal", sure: 180, ikon: "🧮", renk: "#2563eb", dersler: [["matematik", 40], ["fizik", 14], ["kimya", 13], ["biyoloji", 13]] },
      { ad: "AYT Eşit Ağırlık", sure: 180, ikon: "⚖️", renk: "#7c3aed", dersler: [["matematik", 40], ["edebiyat", 24], ["inkilap", 10], ["cografya", 6]] },
      { ad: "AYT Sözel", sure: 180, ikon: "📜", renk: "#b45309", dersler: [["edebiyat", 24], ["inkilap", 21], ["cografya", 17], ["din", 6]] },
      { ad: "YDT İngilizce", sure: 120, ikon: "🔤", renk: "#8b5cf6", dersler: [["ingilizce", 80]] }
    ]
  }
};
