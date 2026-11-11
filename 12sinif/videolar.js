// 12. sınıf konu videoları (YouTube). Her konuya, YouTube'da bulunan Türkçe bir konu anlatım videosu eşlendi.
// Değer: YouTube video kimliği. Uygun video bulunamayan konu listede yoktur (video kutusu görünmez).
window.VIDEO = {
  "mat1k1": "zX6bjhYByXI",  // Logaritmaya Giriş - 12.sınıf AYT Matematik
  "mat2k1": "XzPnBc5YJ7E",  // Diziler - 3 (Aritmetik dizi formülleri)
  "mat3k1": "YnzqdpMdw9I",  // Türev: Temel Türev Kuralları
  "mat3k2": "0NWtEOYwuqM",  // Türev Konu Anlatım Serisi - Artan Azalan Fonksiyonlar
  "mat4k1": "9NSSj7qu0o4",  // İntegral 2
  "fiz1k1": "ppzX26dFwi4",  // Çembersel Hareket-1 Konu Anlatımı 12.Sınıf Fizik
  "fiz2k1": "8vBOLv5kilI",  // Basit Harmonik Hareket-1 Konu Anlatımı 12.Sınıf Fizik
  "fiz3k1": "OAblAuzgsKU",  // Atom Modelleri Konu Anlatım
  "fiz4k1": "DY5vnO17dJc",  // Fotoelektrik Olay Konu Anlatımı ve Soru Çözümü -1
  "kim1k1": "liAWF86BRC8",  // Elektrokimyasal Piller - 12.Sınıf Kimya
  "kim2k1": "gQBOJ0Qc4m4",  // Karbon Kimyasına Giriş
  "kim3k1": "jnEEWxuHx8Q",  // Fonksiyonel Gruplar
  "bio1k1": "R9yMAEyy56g",  // Genden Proteine-1 AYT Biyoloji 12.Sınıf
  "bio2k1": "3Q_gVKcHbt0",  // Fotosentez ve Kemosentez-1 AYT Biyoloji 12.Sınıf
  "bio3k1": "ivcV_ETD_PM",  // Bitki Biyolojisi #1
  "bio4k1": "u_JAGACBXcs",  // Canlılar ve Çevre Full Tekrar
  "edb1k1": "X7GvQqeKsm0",  // Cumhuriyet Dönemi Şiir - Garip Şiiri (I. Yeniciler)
  "edb2k1": "E6FgfSA0jHo",  // Cumhuriyet Dönemi'nde Roman 1923-1950 / 12.Sınıf Edebiyat
  "edb3k1": "cIe4lWpPrvg",  // 12.Sınıf Edebiyat Tiyatro Konu Anlatımı
  "ink1k1": "bsntMTrJUKQ",  // Trablusgarp Savaşı
  "ink2k1": "ZAb7HROTveE",  // Erzurum ve Sivas Kongreleri - Konu Anlatımı
  "ink2k2": "AN4R2ATvBac",  // Kurtuluş Savaşı Cepheler
  "ink3k1": "llJjDOgZPPQ",  // Atatürk İlkeleri, Atatürkçülük ve Türk İnkılabı-1
  "ink4k1": "S5cPocBhC2w",  // TYT - AYT Tarih - Atatürk Dönemi Dış Politika -1
  "cog1k1": "RpPxG4S3xhA",  // 12.sınıf Coğrafya Ekstrem Doğa Olayları
  "cog2k1": "-XqYOCnkh-Q",  // Şehirlerin fonksiyonları ve etki alanları
  "cog3k1": "N97CSvsmSDU",  // İlk Kültür Merkezleri
  "cog4k1": "4d-bo-LC814",  // Çevre ve Toplum: Doğal Kaynakların Kullanımı
  "din1k1": "55q3Ddf2i08",  // Din Kültürü 12.Sınıf 1.Ünite İslam ve Bilim
  "din2k1": "zyq2bOjVOYo",  // Anadolu'da İslam (2. Ünite Full Tekrar)
  "din3k1": "1sajfjnNGec",  // 12.Sınıf Din Kültürü 3.Ünite İslam Düşüncesinde Tasavvufi Yorumlar
  "kim4k1": "jCfCB1sHx-w",  // 11dk'da Enerji Kaynakları
  "din4k1": "7yDA7vI9sww",  // Din Kültürü 12.Sınıf 5.Ünite Hint ve Çin Dinleri
  "ing1k1": "RP-g0OoowcU",  // Relative Pronouns Konu Anlatımı
  "ing1k2": "1ujcC_J_yIU",  // should / ought to / had better Konu Anlatımı
  "ing2k1": "pQE2jtzfO2I",  // İngilizce Passive Voice Konu Anlatımı
  "ing2k2": "XhtVc1Rqy2w",  // Future Continuous Tense Konu Anlatımı
  "ing3k1": "Z8RXsOTwD4w",  // If Clause Type 0/1/2/3 Özet Konu Anlatımı
  "ing3k2": "m7PBx7lZtZ0",  // As, Since, Because & Due to, Owing to, Because of Kullanımı
  "mattr1": "3zOBSmNwj8A", "mattr2": "tDFmmN4Jfiw", "matdn1": "iNxMMnDf_bA", "matlm1": "5auLxAhhWWg", "matcm1": "0miKsYpJR1g",
};
Object.values(window.ICERIK || {}).forEach((d) => d.uniteler.forEach((u) => u.konular.forEach((k) => { if (window.VIDEO[k.id]) k.video = window.VIDEO[k.id]; })));
