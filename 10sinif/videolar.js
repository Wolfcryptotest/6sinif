// 10. sınıf konu videoları (YouTube). Her konuya, YouTube'da bulunan Türkçe bir konu anlatım videosu eşlendi.
// Değer: YouTube video kimliği. Uygun video bulunamayan konu listede yoktur (video kutusu görünmez).
window.VIDEO = {
  "mat1k1": "24cMEdFSxfU",  // Çarpanlar Katlar, Asal Sayılar, EBOB - EKOK konu anlatımı
  "mat2k1": "sIwjiv3SSTg",  // Dik Üçgende Trigonometrik Oranlar ve Trigonometrik Özdeşlikler - 1
  "mat2k2": "ja6-QyYOFvQ",  // Sinüs ve Cosinüs Teoremleri
  "mat3k1": "dVE_BZV2WQo",  // İstatistiksel Araştırma Süreci 2.Tema 1.Ders
  "mat4k1": "lx8R2BWzfKw",  // Fonksiyonlarda Uygulamalar - 3 (İkinci Dereceden Fonksiyonlar)
  "mat5k1": "-1yK-lK0qko",  // Permütasyon, Kombinasyon, Binom, Olasılık
  "mat5k2": "kw3Vk7AdOoA",  // Olasılık
  "fiz1k1": "a2QTrlLsInY",  // Bir Boyutta Hareket (Konum, Alınan Yol, Yer Değiştirme, Sürat, Hız, İvme)
  "fiz1k2": "q6o-6SkcVIA",  // Newton'un Hareket Yasaları -1
  "fiz2k1": "B2uECiXxgZc",  // İş, Enerji ve Güç
  "fiz3k1": "kiAve3cgM5E",  // Ohm Kanunu Konu Anlatımı - 10.sınıf fizik (maarif model)
  "fiz4k1": "uAdcfsZpN7c",  // Dalgalar Konu Anlatımı ve Soru Çözümü 10.Sınıf Fizik
  "kim1k1": "gaYi0msFL1I",  // Mol Kavramı 1. Bölüm (10. Sınıf Kimya)
  "kim1k2": "zw0xeEX9zYQ",  // Gaz Yasaları
  "kim2k1": "NmxE6bM_NiA",  // 10. Sınıf Çözeltilerde Kütlece Derişim
  "kim3k1": "8wZ4wWsRtMI",  // Yeşil Kimya: Modern Kimyanın Ekolojik Rengi
  "bio1k1": "t5-Y3FG1mEY",  // ATP - Canlılık ve Enerji
  "bio1k2": "tzc6BzWh6hw",  // Fotosentez ve Solunum
  "bio2k1": "lydbEYlObWQ",  // Ekosistemlerde Madde ve Enerji Akışı
  "bio2k2": "XmTE1tDXkIA",  // TYT Biyoloji - Popülasyon, Komünite, Ekosistem Kavramları
  "edb1k1": "NERbXsWlqZQ",  // 2026-2027 10.Sınıf Edebiyat 1.Tema Koşuk ve Koşma
  "edb1k2": "ST_zHC-ZzMI",  // Masalın Özellikleri
  "edb2k1": "aB5f4ZtuVS8",  // Gazel Nedir? Gazel Özellikleri ve Örnekleri (10.Sınıf)
  "edb3k1": "Vsu6L41gemo",  // 10. Sınıf Türk Dili ve Edebiyatı - Dede Korkut Hikayeleri
  "edb4k1": "VimJfHiU9sA",  // Geleneksel Türk Tiyatrosu (Karagöz, Orta Oyunu, Meddah)
  "tar1k1": "ZP6dxBplWUQ",  // Büyük Selçuklu Devleti / 1037-1157 / Kuruluştan Yıkılışa
  "tar1k2": "P89OdtbI-hY",  // 10.Sınıf Tarih 1.Ünite - Türkiye Selçuklu Devleti
  "tar2k1": "U1Knfth9i0Y",  // 10. Sınıf Tarih - Beylikten Devlete Osmanlı Siyaseti Full Tekrar
  "tar2k2": "3IGBQzucrIw",  // İstanbul'un Fethi 1453 - Haritalı Hızlı Anlatım
  "cog1k1": "AgRlAZjaPE4",  // CBS ve Uzaktan Algılama
  "cog2k1": "HtHDgH9nzx8",  // İç Kuvvetler - TYT Coğrafya
  "cog3k1": "NQ1QXL62Lpc",  // Nüfusun dağılışı ve hareketleri, göçler
  "cog4k1": "LMXo4e7XY00",  // 10. Sınıf Coğrafya - Ekonomik Faaliyetlerin Temel Özellikleri
  "fel1k1": "rCNf31K35UI",  // 10. Sınıf Felsefe 1. Ünite - Felsefeyi Tanıma
  "fel2k1": "MqaugNVValc",  // Bilginin Kaynağı (Rasyonalizm-Ampirizm-Sentezci Yaklaşım-Entüisyonizm)
  "fel3k1": "gteHFFsEl1g",  // 10. Sınıf Felsefe 3. Ünite - Varlık Felsefesi
  "fel4k1": "c_cHvol2auA",  // 10. Sınıf Ahlak Felsefesi (Kısa ve Net Konu Anlatımı)
  "din1k1": "fhLgMx_ArEU",  // Din Kültürü 10.Sınıf 1.Ünite Allah İnsan İlişkisi
  "din2k1": "3ajlVUyofms",  // Hac ile İlgili Kavramlar: İhram, Tavaf, Vakfe
  "din3k1": "1Br6v_BmQgI",  // Din Kültürü 10.Sınıf Ahlaki Tutum ve Davranışlar
  "din4k1": "1elKdj9m4Zc",  // Bir Genç Olarak Hz. Muhammed (10.sınıf)
  "ing1k1": "4ancoN2h-T4",  // Present Continuous Tense Konu Anlatımı
  "ing1k2": "uS4fClJEkF4",  // İngilizcede Future Tense (Be going to & Will)
  "ing2k1": "ob0HW-im7eo",  // Past Continuous Tense
  "ing2k2": "hbGqamIigDM",  // Used to Konu Anlatımı
};
Object.values(window.ICERIK || {}).forEach((d) => d.uniteler.forEach((u) => u.konular.forEach((k) => { if (window.VIDEO[k.id]) k.video = window.VIDEO[k.id]; })));
