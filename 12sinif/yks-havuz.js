// 🗂️ YKS Soru Havuzu — sitedeki herkesin göreceği sorular. Başlangıçta BOŞ.
// Uygulamadaki "Soru Havuzu → Dışa Aktar" ile indirdiğin .json dosyasının içindeki listeyi aşağıya yapıştırabilirsin.
// Biçim (bir soru):
// { "id": "tyt2025-t5", "ders": "edebiyat" | "matematik" | "fizik" | "kimya" | "biyoloji" | "tarih" | "inkilap" | "cografya" | "felsefe" | "din" | "ingilizce",
//   "kaynak": "TYT 2025 Türkçe 5. soru", "soru": "Soru metni", "gorsel": "" (isteğe bağlı),
//   "secenekler": ["A", "B", "C", "D"], "dogru": 0 (A=0 … D=3), "cozum": "" }
// Not: Uygulamadaki sorular 4 şıklıdır; 5 şıklı ÖSYM sorularını eklerken bir yanlış şıkkı çıkar ya da soruyu görsel olarak ekle.
window.YKS_HAVUZ = [];
