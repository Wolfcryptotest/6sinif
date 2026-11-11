// 🎬 Ek konu videoları (6. sınıf): her konuya 2. ve 3. video (soru çözümü, farklı anlatım, deney).
// Biçim: konuId: [[etiket, YouTube kimliği], ...]. Ana video (k.video) her zaman 1. sırada kalır.
// Her kimlik eklenmeden önce YouTube oEmbed ile doğrulandı (başlık konuyla uyumlu ve sitede oynatılabilir). Yorum satırında kanal ve başlık var.
window.VIDEO_EK = {
  t1k1: [["Soru Çözümü", "MEMOuqErcn4"], ["Soru Çözümü 2", "hUJWq4FjmJQ"]], // özge (6. Sınıf Çarpanlar ve Katlar Soru Çözümü) · Ne Kolay Matematik (6.Sınıf Matematik: Çarpanlar ve Katlar Soru Çözümü)
  t1k2: [["Soru Çözümü", "QpmyfKevs5I"], ["Farklı Anlatım", "6W2kU0dlkk0"]], // BGM Matematik (Bölünebilme kuralları Soru Çözümü ve Çözümlü örnek) · İMT Hoca (KALANSIZ BÖLÜNEBİLME KURALLARI 6. Sınıf Matematik)
  t1k3: [["Anlatım ve Soru Çözümü", "R41pJZkpO00"], ["Soru Çözümü", "fFCimUVsVLg"]], // Hız Yayınları Ortaokul (Asal Sayılar Konu Anlatımı, Soru Çözümü: 6. Sınıf) · GÜNEYLİ MATEMATİK EVİ (6.SINIF ASAL SAYILAR VE ASAL ÇARPANLAR SORU ÇÖZÜMÜ)
  t1k4: [["Soru Çözümü", "CgzvWpPOcFs"], ["Anlatım ve Soru Çözümü", "dwrIijmCeEQ"]], // İMT Hoca (ORTAK BÖLENLER ve ORTAK KATLAR (Problemler) 6. Sın) · İMT Hoca (Ortak Bölen ve Ortak Kat Problemleri | 6.Sınıf Mat)
  t2k1: [["Farklı Anlatım", "s7aYuuDEGiY"], ["Farklı Anlatım 2", "jEdZF0wA8f8"]], // Hocalara Geldik 6.Sınıf (Deneysel Olasılık | 6. Sınıf Matematik Konu Anlatı) · Koray’la 6. Sınıf (6. Sınıf Matematik 2. Tema: OLASILIK)
  t3k1: [["Soru Çözümü", "NvGyol-jK8w"], ["Farklı Anlatım", "rLjolcA9q_o"]], // Arı Hoca ile Bal Gibi Matematik (4. Ondalık Gösterimler Soru Çözümü - 6. Sınıf - Ma) · Arı Hoca ile Bal Gibi Matematik (2. Ondalık Gösterimde Basamak Değeri ve Çözümleme)
  t3k2: [["Farklı Anlatım", "mMD-u07xVCQ"], ["Soru Çözümü", "k80plbGFez4"]], // Sevimli Matematik (24) ONDALIK GÖSTERİMDE YUVARLAMA - 6. SINIF) · 3D Yayınları Ortaokul (Tema 03 - Ondalık Gösterimlerde Basamak Değeri, Yu)
  t3k3: [["Farklı Anlatım", "FenJ_bWnKms"], ["Farklı Anlatım 2", "i6qcjEdb7rM"]], // Yasemen Akademi 📚 (Kesir İle Bölme İşlemi İlişkisi ✏️6.Sınıf Matemati) · Basit Matematik (BÖLME İŞLEMİ İLE KESİR İLİŞKİSİ 6. SINIF)
  t3k4: [["Farklı Anlatım", "HXEaiu2-wfQ"], ["Farklı Anlatım 2", "ZVMniNe8ifE"]], // CEYLAN AKADEMİ (6. SINIF UZUNLUK ÖLÇME BİRİMLERİ) · Hiper Zeka (Uzunluk Ölçme Birimleri | 6.Sınıf Bal Matematik |)
  t4k1: [["Anlatım ve Soru Çözümü", "aL69XFMLjzI"], ["Soru Çözümü", "kOT6yF-irc4"]], // Hız Yayınları Ortaokul (Araştırma Sorusu Oluşturma Ve Veri Toplama Konu An) · Matematik Yurdu (Test 32 - Araştırma Sorusu Oluşturma, Veri Toplama)
  t4k2: [["Farklı Anlatım", "jfFRbyLDQQQ"], ["Farklı Anlatım 2", "FrtoUVJuXQQ"]], // İMT Hoca (Veri Toplama (İkili Sıklık Tablosu ve Sütun Grafiğ) · İMT Hoca (Sıklık Tablosu ve Sütun Grafiği-VERİ DÜZENLEME | 6)
  t5k1: [["Soru Çözümü", "HYpDsenJ-bY"]], // Oğuzeli Atatürk Ortaokulu (6. Sınıf Matematik Paralel Doğrular Soru Çözümü)
  t5k2: [["Farklı Anlatım", "18FN3ely2vg"]], // Matematikchi Mihail (Üçgende Açı Konu Anlatımı 2 - Üçgenin iç açıları t)
  t6k1: [["Farklı Anlatım", "nWwDHukiN8E"], ["Farklı Anlatım 2", "mnxqmP9b414"]], // Basit Matematik (CEBİRSEL İFADELER 6. Sınıf Matematik.) · Gülsüm Gürses - ARI Eğitim Akademisi (6. Sınıf Matematik 36- CEBİRSEL İFADELER)
  t6k2: [["Farklı Anlatım", "jTbAweaq2mg"]], // BGM Matematik (Örüntüler, kural bulma , kuralı verileni yazma (5)
  t7k1: [["Anlatım ve Soru Çözümü", "8SyVgYM-FaI"], ["Farklı Anlatım", "UhUKaXhiu1I"]], // Hız Yayınları Ortaokul (Alan Ve Arazi Ölçme Birimleri Konu Anlatımı, Soru) · Hocalara Geldik 6.Sınıf (6. Sınıf Matematik - Alan Ölçme Birimleri | 2022)
  t7k2: [["Anlatım ve Soru Çözümü", "tZhA19Hn1XA"], ["Soru Çözümü", "nN6gBc-vyqg"]], // Hız Yayınları Ortaokul (Üçgenin Ve Paralel Kenarın Alanı Konu Anlatımı, So) · Haluk Hoca (6.Sınıf-Paralelkenarın Alanı-Soru Çözümü)
  t7k3: [["Farklı Anlatım", "oFFJfXrtonQ"], ["Soru Çözümü", "P5Q4ALgCWqk"]], // İMT Hoca (Çemberin Çevre Uzunluğu, Çap ve Pi Sayısı 6. Sınıf) · MEHMET İNAL (ÇEMBERİN ÇEVRE UZUNLUĞU, ÖRNEK ÇÖZÜMÜ  /6.SINIF)
  t7k4: [["Soru Çözümü", "hfF0_nNDkwA"]], // KhanAcademyTurkce (Verilen Yay Uzunluğuna Göre Merkez Açıyı Bulma (Ge)
  m1k1: [["Soru Çözümü", "t3twPF0_Vn8"], ["Farklı Anlatım", "_WhwFo3Brfk"]], // Sevimli Matematik (2) Üslü İfadeler Soru Çözümü | 6. Sınıf Matematik) · İMT Hoca (Üslü İfadeler Konu Anlatımı 6. Sınıf Matematik)
  m1k2: [["Soru Çözümü", "uBRBNr9j_wA"], ["Farklı Anlatım", "etW19PSpczA"]], // Sevimli Matematik (6. Sınıf Matematik İşlem Önceliği | Soru Çözümü +P) · BGM Matematik (İşlem önceliği Konu anlatımı Çözümlü örnekler / 6.)
  m1k3: [["Soru Çözümü", "cIP1Ha-SYpQ"], ["Farklı Anlatım", "v68pCsIEAX8"]], // İMT Hoca (DAĞILMA ÖZELLİĞİ ve ORTAK ÇARPAN PARANTEZİ Soru Çö) · Seda Hoca (Ortak Çarpan Parantezine Alma 6. Sınıf Matematik)
  f1k1: [["Soru Çözümü", "hKlzqjIwvCQ"], ["Soru Çözümü 2", "Cp0UxsyzgVM"]], // RECEP HOCA AKADEMİ (6  Sınıf Güneş Sistemi - Gezegenler Soru Çözümü #2) · Hız Yayınları Ortaokul (Beceri Temelli Testler ile 6. Sınıf Fen Bilimleri)
  f1k3: [["Soru Çözümü", "oCe3WTeTBBg"], ["Farklı Anlatım", "gYp_lVKXaIQ"]], // Işık Fen (6. SINIF GÜNEŞ SİSTEMİ VE TUTULMALAR / 5 SORU 5 ÇÖ) · YÜZLÜK SORULAR (Güneş ve Ay Tutulması / 6. Sınıf Fen Bilgisi 1. Ün)
  f2k1: [["Anlatım ve Soru Çözümü", "4UbcRh9WeMk"]], // Eğitimsiz Olmaz (6. Sınıf Fen Bilimleri Bileşke Kuvvet Konu Anlatım)
  f2k2: [["Anlatım ve Soru Çözümü", "VSQ_Y7oWSTA"]], // Hocam Anlatır 6. Sınıf (6. Sınıf Fen Bilimleri - Dengelenmiş ve Dengelenme)
  f2k3: [["Soru Çözümü", "YiwudfTDUtw"], ["Anlatım ve Soru Çözümü", "5yuQqxXJoxs"]], // UĞUR SCIENTIST (SÜRAT SORU ÇÖZÜMÜ. #sınavahazırlık #süratsoruçözüm) · Hız Yayınları Ortaokul (6.SINIF FEN - Sürat Konu Anlatımı, Soru Çözümü - 1)
  f3k1: [["Soru Çözümü", "Dj5iXYAvmMc"]], // Sen Anlat Hocam (EŞEYLİ - EŞEYSİZ ÜREME SORU ÇÖZÜMLERİ | 1 | ✅)
  f3k3: [["Farklı Anlatım", "uoae3m5ilXw"]], // Derslike (Denetleyici ve Düzenleyici Sistemler / 6. Sınıf)
  f3k4: [["Farklı Anlatım", "G6WQUkIn0h4"]], // Ysmn Bor (6 Sınıf Fen - İç Salgı Bezleri - Ergenlik Dönemi)
  f4k1: [["Farklı Anlatım", "jTqAALqvsDg"]], // Meras Akademi (Işığın Yansıması Konu Anlatımı | 6.Sınıf Fen Bilim)
  f4k2: [["Farklı Anlatım", "Us4Bl73AnMY"]], // Dnzhoca (6. Sınıf Fen Aynalar Konu Anlatımı | Düz, Çukur ve)
  f4k3: [["Farklı Anlatım", "_ZIIajRLJ7M"]], // Fenci Pınar Hoca (6.SINIF FEN BİLİMLERİ 4.ÜNİTE IŞIĞIN YANSIMASI VE)
  f5k1: [["Farklı Anlatım", "58uyIX3L5d0"]], // Fencinin Kalemi (6.SINIF FEN BİLİMLERİ - GENLEŞME VE BÜZÜLME)
  f5k2: [["Farklı Anlatım", "JxHz7tZKbw0"]], // Dnzhoca (6. Sınıf Fen | Maddenin Hal Değişim Noktaları (Su)
  f5k3: [["Soru Çözümü", "5jP1on1_ao8"], ["Anlatım ve Soru Çözümü", "qxpIyUCmams"]], // Işık Fen (6. SINIF YOĞUNLUK SORU ÇÖZÜMÜ) · Hız Yayınları Ortaokul (6.SINIF FEN - Yoğunluk - Konu Anlatımı, Soru Çözüm)
  f6k1: [["Soru Çözümü", "BGHXdrs5T_E"]], // AY EĞİTİM (6. Sınıf Fen Bil Kaz. Kavrama Testi 16- İletken -)
  f6k2: [["Deney", "GpN5AyMAThI"], ["Farklı Anlatım", "tWMW56e1ZxU"]], // Kolay Fen (Ampul De Bir Dirençtir - Ampulün Parlaklığını Deği) · Derslike (Elektriğin İletimi - Direnç / 6. Sınıf)
  f6k3: [["Farklı Anlatım", "TASl8e78XAg"]], // sorbil eğitim (Elektriksel Direnç ve Bağlı Olduğu Faktörler - 6.)
  f7k1: [["Farklı Anlatım", "V4RYbWe7MYU"]], // Derslike (Biyoçeşitlilik | 6. Sınıf | 2026)
  tr1k1: [["Farklı Anlatım", "wxsyetGqCUs"], ["Farklı Anlatım 2", "Oci8WAMJqNM"]], // Hocalara Geldik 6.Sınıf (6. Sınıf Türkçe - Gerçek Anlam, Mecaz Anlam, Terim) · Klasikhocacom (6. Sınıf Sözcükte Anlam Konu Anlatımı 2021 - 2022)
  tr1k2: [["Farklı Anlatım", "9mJyQ3PX1SQ"]], // Hocalara Geldik 6.Sınıf (6. Sınıf Türkçe - Zıt Anlamlı Ve Eş Sesli Kelimele)
  tr1k3: [["Farklı Anlatım", "eeT_RPyIaDA"], ["Farklı Anlatım 2", "U-VmoHV5RBw"]], // Hocalara Geldik 6.Sınıf (6. Sınıf Türkçe - Deyimler ve Atasözleri | 2022) · tonguç 6. SINIF (Deyimler ve Atasözleri 📙 6. Sınıf Türkçe #2025)
  tr2k1: [["Farklı Anlatım", "2gX5MHtIhwM"]], // Hocalara Geldik 6.Sınıf (6. Sınıf Türkçe - İsimler & İsim Çekim Ekleri Konu)
  tr2k2: [["Soru Çözümü", "bv5POVsOpPQ"], ["Farklı Anlatım", "TAqsLb88DCk"]], // Yavuz Yılmaz (6.Sınıf Sıfatlar Soru Çözümü | 6.Sınıf Türkçe Sıfa) · Hocalara Geldik 6.Sınıf (6. Sınıf Türkçe - Sıfat (Ön Ad) | 2022)
  tr2k3: [["Farklı Anlatım", "2E6rcZbPjaI"], ["Farklı Anlatım 2", "Q5ZvhCRGUKY"]], // Hocalara Geldik 6.Sınıf (6. Sınıf Türkçe - Zamir (Adıl) | 2021) · YÜZLÜK SORULAR (Zamirler (6. Sınıf Türkçe))
  tr2k4: [["Farklı Anlatım", "0HGpykCn8as"], ["Farklı Anlatım 2", "BV3ZYS_zCNc"]], // Hocalara Geldik 6.Sınıf (6. Sınıf Türkçe - Edat (İlgeç) | 2022) · Gülcan Öğretmen ile Ters Yüz Türkçe (6.Sınıf Dil Bilgisi - Edat (İlgeç), Bağlaç, Ünlem)
  tr3k1: [["Soru Çözümü", "HqIpu14ScuY"], ["Farklı Anlatım", "zQBDmhoU8L0"]], // ELMADAĞ AÇI ORTAOKULU (6.SINIF - TÜRKÇE - YAPIM VE ÇEKİM EKLERİ SORU ÇÖZÜ) · Hocalara Geldik 6.Sınıf (6. Sınıf Türkçe - Ekler (Yapım Eki, Çekim Eki) | 2)
  tr4k1: [["Farklı Anlatım", "P9AT2wwF8ec"], ["Farklı Anlatım 2", "c1XK8I-c0jk"]], // Hocalara Geldik 6.Sınıf (6. Sınıf Türkçe - Neden-Sonuç (Sebep-Sonuç), Amaç-) · Hız Yayınları Ortaokul (CÜMLEDE ANLAM : 6.Sınıf Türkçe Konu Anlatımı)
  tr4k2: [["Farklı Anlatım", "isJGH1KGMJ0"], ["Farklı Anlatım 2", "Fw0l_4GleFY"]], // Yavuz Yılmaz (6.Sınıf Öznel Nesnel Yargı / Cümlede Anlam /Anlamı) · Ata Yayıncılık (6.SINIF BEN KORKMAM TÜRKÇE 3.KONU 1.BÖLÜM NESNEL-Ö)
  tr4k3: [["Soru Çözümü", "UpZUEaTt2zk"], ["Farklı Anlatım", "Caj761sNqBA"]], // Yavuz Yılmaz (6.Sınıf Türkçe Paragraf Soru Çözümü, 6.Sınıf Parag) · Hocalara Geldik 6.Sınıf (Parçada Konu, Ana Fikir, Yardımcı Fikir | 6. Sınıf)
  tr5k1: [["Farklı Anlatım", "LNapXaGuuh4"], ["Farklı Anlatım 2", "xRsFDE8eC24"]], // tonguç 6. SINIF (6. Sınıf Türkçe | Söz Sanatları) · Füsun Öğretmen (SÖZ SANATLARI Kişileştirme, Benzetme, Konuşturma v)
  tr6k1: [["Farklı Anlatım", "LHGlufU_Uxs"], ["Soru Çözümü", "JjR5YmqcSvk"]], // Hız Yayınları Ortaokul (YAZIM KURALLARI : 6.Sınıf Türkçe Konu Anlatımı) · Hocalara Geldik 6.Sınıf (6. Sınıf Türkçe - Yazım Kuralları, Noktalama İşare)
  tr6k2: [["Anlatım ve Soru Çözümü", "JjR5YmqcSvk"]], // Hocalara Geldik 6.Sınıf (6. Sınıf Türkçe - Yazım Kuralları, Noktalama İşare)
  s1k2: [["Farklı Anlatım", "4kfVciPyEX4"]], // Hocalara Geldik 6.Sınıf (Kültürel Bağlarımız ve Milli Değerlerimiz | 6. Sın)
  s1k3: [["Farklı Anlatım", "EalG-wCV1eM"]], // Engin Öğretmen | Engin Demirci (Toplumsal Sorunlar ve Çözüm Önerileri  Konu Anlatı)
  s2k1: [["Farklı Anlatım", "K0pscnIbpW0"]], // Metin Hoca | Sosyal Bilgiler (5) 6. Sınıf Sosyal Bilgiler Ülkemizin, Kıtaların v)
  s2k2: [["Farklı Anlatım", "xK5imlCCnJo"]], // Ders Hane (Kıtalar ve Okyanuslar | 6.Sınıf Sosyal Bilgiler De)
  s2k4: [["Farklı Anlatım", "loQNyU2-MG4"]], // Hocalara Geldik 6.Sınıf (Ülkemizin Türk Dünyasıyla Kültürel İş Birlikleri |)
  s3k1: [["Soru Çözümü", "-UfHthN5zvE"]], // Buğra Hoca | Sosyal Bilgiler Dersliği (6.Sınıf Sosyal Bilgiler Orta Asya Türk Devletleri)
  s3k3: [["Farklı Anlatım", "V5vBQg3pwT0"]], // 3D Yayınları Ortaokul (Öğrenme Alanı 03- VII-XII Yüzyıllar Arasında İslam)
  s3k4: [["Farklı Anlatım", "auJ-wlZp8X8"]], // Hiper Zeka (6. Sınıf Sosyal Bilgiler - Türklerin İslamiyet'i K)
  s3k5: [["Farklı Anlatım", "64zhOIFgzkU"]], // Benim Hocam Ortaokul (16) 6.Sınıf - Sosyal Bilgiler - Anadolu’nun Türkle)
  s4k1: [["Farklı Anlatım", "oG_8DY5bgIA"]], // tonguç 6. SINIF (6.Sınıf Sosyal Bilgiler | Etkin Vatandaşlık)
  s4k2: [["Farklı Anlatım", "qS7wvGfIaSI"], ["Farklı Anlatım 2", "OimryIwDfBk"]], // Buğra Hoca | Sosyal Bilgiler Dersliği (6.Sınıf Sosyal Bilgiler 4.Öğrenme Alanı Temel Hak) · Hocalara Geldik 6.Sınıf (6. Sınıf Sosyal Bilgiler - Haklarımız ve Sorumlulu)
  s5k1: [["Farklı Anlatım", "Qd-aVg0yHFM"]], // Hocalara Geldik 6.Sınıf (6. Sınıf Sosyal Bilgiler - Ülkemizin Kaynakları ve)
  s5k2: [["Farklı Anlatım", "Vn2OUO9ZMRI"]], // Serdar ILICA (S.B.6.5.2. Ekonomik Faaliyetler ve Meslekler Konu)
  s6k1: [["Farklı Anlatım", "E5yTAQAIsGU"]], // Serdar ILICA (SB.6.6.1.Ulaşım ve İletişim Teknlojilerinin Kültür)
  s6k2: [["Farklı Anlatım", "s4obYfRKk8Y"]], // Buğra Hoca | Sosyal Bilgiler Dersliği (6.Sınıf Sosyal Bilgiler 4.Ünite Telif ve Patent Ha)
  en1k1: [["Kelime Çalışması", "he_rkKISlug"]], // ÜMİT CAN HOCAN (6. Sınıf İngilizce 1. Ünite Konu Anlatımı Kelimele)
  en1k2: [["Farklı Anlatım", "kRyBs0379_Y"], ["Farklı Anlatım 2", "UmlSDF_KANA"]], // Orkun Londoner (SHOULD / MUST / HAVE TO  KONU ANLATIMI  (6.DERS)) · Elifsu Wells (must mustn't / have to / has to (kolay konu anlatı)
  en2k1: [["Farklı Anlatım", "DwpcSUOnbIc"], ["Anlatım ve Soru Çözümü", "QBAKXiNnjQI"]], // Sümi Hoca ile İngilizce (Ingilizce Sıra Sayıları- ORDINAL NUMBERS) · Hocalara Geldik 6.Sınıf (6. Sınıf İngilizce - Telling The Date | 2022)
  en2k2: [["Farklı Anlatım", "Hx67kFTEyug"]], // Evde Akademik İngilizce (Frequency Adverbs - Sıklık Zarfları (Adverbs of Fr)
  en3k2: [["Farklı Anlatım", "DL52wyabE8c"]], // ingilizce zamanı (DESCRIBING PEOPLE (Kişilik ve Fiziksel Özellikleri)
  en4k1: [["Anlatım ve Soru Çözümü", "aiY603_dSB0"], ["Kelime Çalışması", "aV5Ys0d3c-k"]], // ÜMİT CAN HOCAN (6. Sınıf İngilizce 6. Ünite Konu Anlatımı | Occupa) · Ms. Jasmin ELT (6.SINIF İNGİLİZCE 6.ÜNİTE OCCUPATIONS | MESLEKLER)
  en4k2: [["Anlatım ve Soru Çözümü", "j-Ffcb60IAI"], ["Farklı Anlatım", "GsCT7phEV48"]], // Hocalara Geldik 6.Sınıf (6. Sınıf İngilizce - The Simple Present Tense | 20) · Mat-İng Akademi (SiMPLE PRESENT TENSE-6.sınıf 1.ünite)
  en5k2: [["Farklı Anlatım", "fIvVSbc6u_o"]], // İngilizce Konu Anlatımı - Özer Kiraz (Future Tense Be Going To Konu Anlatımı #31)
  en6k1: [["Farklı Anlatım", "pcFgZ8xhpq0"]], // Nurullah ÖKTEM (İngilizce Dersi 6 - İngilizce'de Ülkeler ve Milliy)
  en7k2: [["Farklı Anlatım", "DIWdxW2vjyI"], ["Farklı Anlatım 2", "aa_dXHE59TY"]], // EASY ENGLISH (6. SINIF İNGİLİZCE DERSİ 9. ÜNİTE SAVING THE PLANE) · selimteacher (Should Shouldn't (-meli, -malı) - Tavsiye)
  en8k2: [["Farklı Anlatım", "OXZpUfLN-aw"]], // Teachers Mark and Matt (Predictions: WILL / WON'T)
  d1k1: [["Farklı Anlatım", "s4Gvx3nwcPE"], ["Farklı Anlatım 2", "64JyMsP7rZE"]], // tonguç 6. SINIF (Peygamberler ve Özellikleri | 6. Sınıf #uzaktanegi) · Ev Akademisi (Peygamberlerin Özellikleri ve Görevleri- 6.sınıf)
  d2k1: [["Farklı Anlatım", "CZUh1ZY__AE"]], // Dicle İlahiyat (Ramazan Ayının Faziletleri ve Oruç İbadeti)
  d2k2: [["Farklı Anlatım", "CZUh1ZY__AE"]], // Dicle İlahiyat (Ramazan Ayının Faziletleri ve Oruç İbadeti)
  d3k1: [["Devamı (2. Bölüm)", "CTc9VrNgAbo"]], // tonguç 6. SINIF (Ahlaki Davranışlar - 2 📖 6DIN6 #2026)
  d3k2: [["Devamı (2. Bölüm)", "CTc9VrNgAbo"]], // tonguç 6. SINIF (Ahlaki Davranışlar - 2 📖 6DIN6 #2026)
  d4k1: [["Farklı Anlatım", "Eqd_dH35rZI"]], // Muhammed Karmış (Peygamberimizin Çocukluk ve Gençlik Yılları Özeti)
  d4k2: [["Farklı Anlatım", "Eqd_dH35rZI"]], // Muhammed Karmış (Peygamberimizin Çocukluk ve Gençlik Yılları Özeti)
  d5k1: [["Farklı Anlatım", "dg4nJUY7S5g"]], // Melahat Ünügür Ortaokulu (Mimarimizdeki Dini Motifler)
  d5k2: [["Farklı Anlatım", "idE6UJZB2_A"]], // Ortaöğretim Lise Dkab Tdb Siyer-Temel Eğitim Dkab (6 DKAB 5.2. Edebiyatımızda Dinin İzleri)
};
(function () {
  if (!window.ICERIK) return;
  for (const D of Object.values(ICERIK)) for (const u of D.uniteler || []) for (const k of u.konular || []) {
    const ek = (window.VIDEO_EK[k.id] || []).filter(([, v]) => v !== k.video);
    if (!ek.length) continue;
    if (!k.video) { k.video = ek[0][1]; k.videolar = ek; } else k.videolar = [["Konu Anlatımı", k.video], ...ek];
  }
  // Videolar arasında geçiş: düğmeye basınca aynı oynatıcıda o video açılır
  document.addEventListener("click", (e) => {
    const b = e.target.closest && e.target.closest(".video-sec [data-vid]"); if (!b) return;
    const kutu = b.closest(".konu-v") || document, f = kutu.querySelector(".video iframe"), a = kutu.querySelector(".video-yt"), v = encodeURIComponent(b.dataset.vid);
    if (f) f.src = `https://www.youtube-nocookie.com/embed/${v}?rel=0&modestbranding=1&autoplay=1`;
    if (a) a.href = `https://www.youtube.com/watch?v=${v}`;
    b.parentNode.querySelectorAll("button").forEach((x) => { x.classList.toggle("secili", x === b); x.setAttribute("aria-pressed", x === b); });
  });
  const st = document.createElement("style");
  st.textContent = ".video-sec{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 12px}.video-sec button{font:inherit;font-size:14px;padding:8px 12px;border-radius:999px;border:1px solid var(--sinir);background:var(--kart);color:var(--yazi);cursor:pointer}.video-sec button.secili{background:#dc2626;border-color:#dc2626;color:#fff;font-weight:600}";
  document.head.appendChild(st);
})();
