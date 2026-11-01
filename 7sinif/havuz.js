// 🗂️ LGS Soru Havuzu (7. sınıf) — sitedeki herkesin göreceği sorular. Başlangıçta BOŞ.
// Uygulamadaki "Soru Havuzu → Dışa Aktar" ile indirdiğin .json dosyasının içindeki listeyi aşağıya yapıştırabilirsin.
// Biçim (bir soru):
// { "id": "lgs2024-s5", "ders": "turkce" | "matematik" | "fen" | "sosyal" | "ingilizce" | "din",
//   "kaynak": "LGS 2024 Sözel 5. soru", "soru": "Soru metni", "gorsel": "" (isteğe bağlı: resim adresi ya da data:image...),
//   "secenekler": ["A şıkkı", "B şıkkı", "C şıkkı", "D şıkkı"], "dogru": 0 (A=0, B=1, C=2, D=3), "cozum": "" }
window.HAVUZ = [];
