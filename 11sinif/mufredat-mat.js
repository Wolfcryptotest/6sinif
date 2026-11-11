// 11. sınıf Matematik — Türkiye Yüzyılı Maarif Modeli (2026-27'den itibaren 11. sınıfta uygulanır) temalarına göre eksik konular.
// Kaynak: tymm.meb.gov.tr Matematik Dersi 11. sınıf temaları:
//   1. İstatistiksel Araştırma Süreci (MAT.11.1: iki nicel değişkenli veri, serpme diyagramı, korelasyon)
//   2. Geometrik Şekiller (MAT.11.2: dörtgenler, özel dörtgenler arası ilişkiler, içbükey-dışbükey çokgenler)
//   3. Nicelikler ve Değişimler (1) trigonometrik fonksiyonlar ve denklemler, (2) üstel ve logaritmik fonksiyonlar, (3) bileşke ve fonksiyonlarda dört işlem
// Eski konuların kimlikleri korunur (öğrenci ilerlemesi silinmez); yeni konular kendi kimlikleriyle eklenir.
(function () {
  if (!window.MUF || !window.ICERIK || !ICERIK.matematik) return;

  // ---------- 1. Tema: İstatistiksel Araştırma Süreci ----------
  MUF.unite("matematik", { id: "m11uist", ad: "İstatistiksel Araştırma Süreci (Maarif)", donem: 1, basa: true }, [
    {
      id: "mat11i1", ad: "İki Nicel Değişkenli Veri, Serpme Diyagramı ve Korelasyon",
      ozet: [
        "İki nicel değişkenli veri: aynı bireyden iki sayısal ölçüm alınır (boy–kütle, çalışma süresi–sınav puanı, sıcaklık–dondurma satışı).",
        "Serpme diyagramı: her birey (x, y) noktası olarak gösterilir; noktaların dağılımı ilişkinin yönünü ve gücünü gösterir.",
        "Pozitif ilişki: biri artarken diğeri de artma eğilimindedir (noktalar sağa doğru yükselir). Negatif ilişki: biri artarken diğeri azalma eğilimindedir (noktalar sağa doğru alçalır).",
        "Korelasyon katsayısı r: −1 ≤ r ≤ 1. |r| 1'e yaklaştıkça doğrusal ilişki güçlenir; r ≈ 0 ise doğrusal ilişki yok denecek kadar zayıftır.",
        "Korelasyon nedensellik değildir: iki değişken birlikte değişiyor diye biri diğerinin sebebi olmayabilir; ortak bir etken (üçüncü değişken) olabilir.",
        "Aykırı (uç) değerler korelasyon katsayısını ve yorumu ciddi biçimde değiştirebilir."
      ],
      anlatim: [
        "İstatistiksel araştırma; soru sorma, veri toplama, veriyi düzenleme–gösterme, analiz etme ve yorumlama adımlarından oluşur. 11. sınıfta odak, aynı bireylerden toplanan iki sayısal değişken arasındaki ilişkidir.",
        "Serpme diyagramında yatay eksene genellikle açıklayıcı değişken (ör. çalışma süresi), dikey eksene yanıt değişkeni (ör. puan) yazılır. Noktalar bir doğru etrafında sıkı toplanıyorsa ilişki güçlü, dağınıksa zayıftır.",
        "Korelasyon katsayısının işareti yönü, mutlak değeri gücü verir: r = −0,9 güçlü negatif; r = 0,3 zayıf pozitif ilişkidir. r = −0,9 ilişkisi r = 0,6 ilişkisinden daha güçlüdür, çünkü |−0,9| > |0,6|.",
        "Başkalarının yaptığı istatistiksel yorumları değerlendirirken şunlara bakılır: örneklem yeterli mi, aykırı değer var mı, korelasyondan neden-sonuç çıkarılmış mı, grafik ölçeği yanıltıcı mı?"
      ],
      sorular: [
        ["Ders çalışma süresi arttıkça sınav puanının da artma eğiliminde olduğu bir veri için ilişki nasıldır?", "Pozitif ilişki", "Negatif ilişki", "İlişki yok", "Sabit ilişki", "Biri artarken diğeri de artıyorsa ilişki pozitiftir."],
        ["Korelasyon katsayısı r = −0,92 bulunmuştur. Hangisi doğrudur?", "Güçlü negatif doğrusal ilişki vardır.", "Zayıf pozitif ilişki vardır.", "Hiç ilişki yoktur.", "Değişkenlerden biri diğerinin sebebidir.", "İşaret negatif, |r| 1'e yakın → güçlü negatif ilişki."],
        ["Hangisi bir korelasyon katsayısı değeri olamaz?", "1,3", "−1", "0", "0,75", "r her zaman −1 ile 1 arasındadır."],
        ["Yaz aylarında dondurma satışı ile boğulma vakaları arasında pozitif ilişki bulunmuştur. Hangisi en doğru yorumdur?", "Sıcak hava gibi ortak bir etken her ikisini de artırıyor olabilir.", "Dondurma yemek boğulmaya neden olur.", "Boğulmalar dondurma satışını artırır.", "İki değişken arasında ilişki yoktur.", "Korelasyon nedensellik değildir; üçüncü bir değişken olabilir."],
        ["Serpme diyagramında noktalar sağa doğru alçalan bir doğru etrafında sıkıca toplanmıştır. İlişki için hangisi doğrudur?", "Güçlü negatif", "Güçlü pozitif", "Zayıf pozitif", "İlişki yok", "Sağa doğru alçalma negatif, sıkı toplanma güçlü ilişkiyi gösterir."],
        ["Hangisi iki nicel değişkenli veriye örnektir?", "Öğrencilerin boy ve kütle ölçümleri", "Öğrencilerin göz rengi ve tuttuğu takım", "Öğrencilerin doğduğu şehir", "Öğrencilerin en sevdiği ders", "Boy ve kütlenin ikisi de sayısal (nicel) değişkendir."],
        ["r₁ = 0,6 ve r₂ = −0,85 olan iki veri setinden hangisinde doğrusal ilişki daha güçlüdür?", "r₂ = −0,85 olan", "r₁ = 0,6 olan", "İkisi eşit güçtedir", "Karşılaştırılamaz", "Güç |r| ile ölçülür: 0,85 > 0,6."]
      ],
      acik: [
        ["Korelasyonun nedensellik olmadığını bir örnekle açıklayınız.", "Örneğin bir şehirde ayakkabı numarası ile okuma becerisi arasında pozitif ilişki görülebilir; ama büyük ayakkabı okumayı geliştirmez. Ortak etken yaştır: yaş arttıkça hem ayak büyür hem okuma gelişir."],
        ["Serpme diyagramında tek bir aykırı değer korelasyon yorumunu nasıl etkileyebilir?", "Aykırı değer, noktaların genel eğiliminden uzak olduğu için r'yi büyütebilir ya da küçültebilir; az sayıda veride yanlış güçlü/zayıf ilişki izlenimi verir. Bu yüzden aykırı değer incelenmeli, sebebi araştırılmalıdır."]
      ],
      ornek: [
        ["5 öğrencinin günlük çalışma süreleri (saat) ve puanları: (1, 50), (2, 58), (3, 67), (4, 74), (5, 85). İlişkiyi yorumlayınız.", "1) x arttıkça y düzenli artıyor → yön pozitif. 2) Noktalar neredeyse bir doğru üzerinde → güçlü ilişki, r 1'e yakındır. 3) Yorum: Bu öğrencilerde çalışma süresi ile puan arasında güçlü pozitif ilişki vardır; ancak yalnızca 5 kişilik veriyle genelleme yapmak için örneklem küçüktür."],
        ["Bir haberde 'Kahve içenlerin maaşı daha yüksek, öyleyse kahve maaşı artırıyor' deniyor. Bu yorumu değerlendiriniz.", "İlişki olabilir ama neden-sonuç kurulamaz. Yaş, meslek, çalışma saatleri gibi ortak etkenler hem kahve tüketimini hem maaşı etkileyebilir. Doğru ifade: 'Bu veride kahve tüketimi ile maaş arasında pozitif ilişki gözlenmiştir.'"]
      ],
      hata: [
        "Korelasyonu neden-sonuç ilişkisi sanmak.",
        "r = −0,9'u 'zayıf' sanmak: işaret yönü, mutlak değer gücü gösterir.",
        "Aykırı değeri incelemeden yorum yapmak."
      ]
    }
  ]);

  // ---------- 2. Tema: Geometrik Şekiller ----------
  MUF.unite("matematik", { id: "m11ugeo", ad: "Geometrik Şekiller: Dörtgenler ve Çokgenler (Maarif)", donem: 1, sonra: "m11uist" }, [
    {
      id: "mat11g1", ad: "Dörtgenler ve Özel Dörtgenler",
      ozet: [
        "Dörtgenin iç açıları toplamı 360°'dir (bir köşegen dörtgeni iki üçgene ayırır: 2 · 180°).",
        "Paralelkenar: karşılıklı kenarlar paralel ve eşit; karşılıklı açılar eşit; ardışık açılar toplamı 180°; köşegenler birbirini ortalar. Alan = taban · yükseklik.",
        "Dikdörtgen: tüm açıları 90° olan paralelkenar; köşegenleri eşittir. Eşkenar dörtgen: tüm kenarları eşit paralelkenar; köşegenleri dik kesişir ve açıortaydır. Alan = e · f / 2.",
        "Kare: hem dikdörtgen hem eşkenar dörtgendir; köşegenleri eşit, dik ve birbirini ortalar.",
        "Yamuk: en az bir çift karşılıklı kenarı paralel dörtgen. Alan = (a + c) · h / 2; orta taban = (a + c) / 2. İkizkenar yamukta taban açıları ve köşegenler eşittir.",
        "Deltoid: iki çift komşu kenarı eşit dörtgen; köşegenleri diktir, alan = e · f / 2. Köşegenleri dik olan her dörtgende alan = e · f / 2."
      ],
      anlatim: [
        "Maarif programında dörtgenlerin özellikleri ezberlenmez; üçgenlerdeki açı, benzerlik ve alan bilgisiyle varsayım kurulur, genellenir ve ispatlanır. Örneğin paralelkenarda bir köşegen çizilince oluşan iki üçgen eştir (A.K.A.); buradan karşılıklı kenarların eşitliği çıkar.",
        "Özel dörtgenler arasında hiyerarşi vardır: Her kare bir dikdörtgendir ve her kare bir eşkenar dörtgendir; her dikdörtgen ve her eşkenar dörtgen bir paralelkenardır. Tersi her zaman doğru değildir: her dikdörtgen kare değildir.",
        "Köşegen özellikleri ayırt edicidir: köşegenleri birbirini ortalayan dörtgen paralelkenardır; ayrıca köşegenleri eşitse dikdörtgen, dikse eşkenar dörtgen, hem eşit hem dikse karedir.",
        "Simetri: dikdörtgenin 2, eşkenar dörtgenin 2, karenin 4 simetri ekseni vardır; ikizkenar yamuğun ve deltoidin 1 simetri ekseni vardır; genel paralelkenarın simetri ekseni yoktur."
      ],
      sorular: [
        ["Bir dörtgenin üç iç açısı 80°, 95° ve 110° ise dördüncü açısı kaç derecedir?", "75°", "85°", "65°", "105°", "360° − (80° + 95° + 110°) = 75°"],
        ["Bir paralelkenarın bir açısı 64° ise ona komşu açı kaç derecedir?", "116°", "64°", "126°", "26°", "Ardışık açıların toplamı 180°: 180° − 64° = 116°"],
        ["Köşegen uzunlukları 10 cm ve 8 cm olan eşkenar dörtgenin alanı kaç cm²'dir?", "40", "80", "18", "20", "Alan = e · f / 2 = 10 · 8 / 2 = 40 cm²"],
        ["Tabanları 12 cm ve 8 cm, yüksekliği 5 cm olan yamuğun alanı kaç cm²'dir?", "50", "100", "60", "40", "(12 + 8) · 5 / 2 = 50 cm²"],
        ["Hangisi her zaman doğrudur?", "Her kare bir eşkenar dörtgendir.", "Her eşkenar dörtgen bir karedir.", "Her paralelkenar bir dikdörtgendir.", "Her dikdörtgen bir karedir.", "Karenin tüm kenarları eşittir; bu yüzden eşkenar dörtgenin özel bir hâlidir."],
        ["Köşegenleri birbirini ortalayan ve uzunlukları eşit olan dörtgen en genel hâliyle hangisidir?", "Dikdörtgen", "Kare", "Eşkenar dörtgen", "Deltoid", "Köşegenleri birbirini ortalıyorsa paralelkenar; ayrıca eşitse dikdörtgendir (dik olmaları gerekmez)."],
        ["Tabanları 14 cm ve 6 cm olan yamuğun orta tabanı kaç cm'dir?", "10", "20", "8", "4", "(14 + 6) / 2 = 10 cm"],
        ["Hangisinin simetri ekseni yoktur?", "Kare ya da dikdörtgen olmayan genel paralelkenar", "Kare", "İkizkenar yamuk", "Eşkenar dörtgen", "Genel paralelkenar yalnızca merkezine göre simetriktir; simetri ekseni yoktur."]
      ],
      acik: [
        ["Paralelkenarda karşılıklı kenarların eşit olduğunu üçgenlerin eşliği ile gösteriniz.", "ABCD paralelkenarında AC köşegeni çizilir. AB ∥ DC olduğundan ∠BAC = ∠DCA (iç ters), AD ∥ BC olduğundan ∠DAC = ∠BCA; AC ortaktır. A.K.A. ile ABC ≅ CDA → AB = CD ve BC = DA."],
        ["Kare, dikdörtgen, eşkenar dörtgen ve paralelkenar arasındaki ilişkiyi bir şema ile açıklayınız.", "Paralelkenar en genel olanıdır. Açıları 90° olan paralelkenar dikdörtgen, kenarları eşit olan paralelkenar eşkenar dörtgendir. Hem dikdörtgen hem eşkenar dörtgen olan dörtgen karedir."]
      ],
      ornek: [
        ["ABCD paralelkenarında m(Â) = 3x + 10° ve m(B̂) = 2x + 20° ise m(Â) kaç derecedir?", "Ardışık açılar bütünlerdir: (3x + 10) + (2x + 20) = 180 → 5x = 150 → x = 30. m(Â) = 3 · 30 + 10 = 100°. Kontrol: m(B̂) = 80°, toplam 180° ✓"],
        ["Köşegenleri 12 cm ve 16 cm olan eşkenar dörtgenin bir kenar uzunluğunu ve alanını bulunuz.", "Köşegenler birbirini dik ortalar: yarılar 6 ve 8. Kenar, dik üçgenin hipotenüsü: √(36 + 64) = 10 cm. Alan = 12 · 16 / 2 = 96 cm²."],
        ["İkizkenar yamukta tabanlar 18 cm ve 10 cm, yan kenar 5 cm ise yüksekliği ve alanı bulunuz.", "Uçlardan dikme inilince her iki yanda (18 − 10)/2 = 4 cm kalır. Yükseklik √(5² − 4²) = 3 cm. Alan = (18 + 10) · 3 / 2 = 42 cm²."]
      ],
      hata: [
        "Her paralelkenarın köşegenlerinin eşit olduğunu sanmak (bu yalnızca dikdörtgende geçerlidir).",
        "Eşkenar dörtgenin alanını kenar × kenar diye hesaplamak (doğrusu e · f / 2 ya da taban · yükseklik).",
        "Yamuk alanında tabanları toplayıp 2'ye bölmeyi unutmak."
      ]
    },
    {
      id: "mat11g2", ad: "Çokgenler: İçbükey–Dışbükey, Açılar ve Köşegenler",
      ozet: [
        "Dışbükey çokgen: tüm iç açıları 180°'den küçüktür; herhangi iki iç noktayı birleştiren doğru parçası çokgenin içinde kalır. İçbükey çokgen: en az bir iç açısı 180°'den büyüktür.",
        "n kenarlı çokgende iç açılar toplamı (n − 2) · 180°'dir. Dışbükey çokgenin dış açılar toplamı 360°'dir.",
        "Düzgün çokgen: tüm kenarları ve tüm açıları eşittir. Bir iç açı = (n − 2) · 180° / n, bir dış açı = 360° / n.",
        "Bir köşeden çizilebilen köşegen sayısı n − 3; bu köşegenler çokgeni n − 2 üçgene ayırır. Toplam köşegen sayısı n(n − 3) / 2.",
        "Düzgün altıgen 6 eşkenar üçgene ayrılır: Alan = 6 · a²√3 / 4."
      ],
      anlatim: [
        "Çokgenlerin bağıntıları, çokgeni üçgenlere parçalayarak elde edilir. Bir köşeden tüm köşegenler çizildiğinde n − 2 üçgen oluşur; her üçgenin açıları toplamı 180° olduğundan iç açılar toplamı (n − 2) · 180°'dir.",
        "Dış açılar: Dışbükey çokgende her köşedeki iç açı ile dış açı bütünlerdir. n köşenin toplamı n · 180°; iç açılar (n − 2) · 180° olduğundan dış açılar toplamı 2 · 180° = 360° çıkar. Bu, kenar sayısından bağımsızdır.",
        "Düzgün çokgenin kenar sayısı bir dış açıdan kolayca bulunur: dış açı 40° ise n = 360 / 40 = 9 (düzgün dokuzgen).",
        "İçbükey çokgende 180°'den büyük (yansıma) açı bulunur; bu yüzden dış açılar toplamı kuralı dışbükey çokgenler için ifade edilir."
      ],
      sorular: [
        ["Bir sekizgenin iç açıları toplamı kaç derecedir?", "1080°", "1440°", "900°", "720°", "(8 − 2) · 180° = 1080°"],
        ["Düzgün bir çokgenin bir dış açısı 30° ise kaç kenarı vardır?", "12", "10", "6", "15", "n = 360° / 30° = 12"],
        ["Düzgün beşgenin bir iç açısı kaç derecedir?", "108°", "72°", "120°", "100°", "(5 − 2) · 180° / 5 = 108°"],
        ["Altıgenin toplam köşegen sayısı kaçtır?", "9", "6", "12", "3", "n(n − 3)/2 = 6 · 3 / 2 = 9"],
        ["Dışbükey bir on iki genin dış açıları toplamı kaç derecedir?", "360°", "1800°", "180°", "2160°", "Dışbükey çokgenlerde dış açılar toplamı her zaman 360°'dir."],
        ["Hangisi içbükey çokgenin özelliğidir?", "En az bir iç açısı 180°'den büyüktür.", "Tüm iç açıları 90°'dir.", "Tüm kenarları eşittir.", "Köşegeni yoktur.", "İçbükey çokgende en az bir yansıma (180°'den büyük) açı vardır."],
        ["Bir köşesinden çizilen köşegenlerle 7 üçgene ayrılan çokgen kaç kenarlıdır?", "9", "7", "10", "8", "n − 2 = 7 → n = 9"]
      ],
      acik: [
        ["n kenarlı dışbükey çokgende dış açılar toplamının 360° olduğunu gösteriniz.", "Her köşede iç açı + dış açı = 180° → n köşede toplam n · 180°. İç açılar toplamı (n − 2) · 180° olduğundan dış açılar toplamı n · 180° − (n − 2) · 180° = 360° olur."],
        ["Kenar uzunluğu 4 cm olan düzgün altıgenin alanını bulunuz.", "Düzgün altıgen 6 eşkenar üçgenden oluşur. Bir üçgenin alanı 4²√3/4 = 4√3 cm². Toplam 6 · 4√3 = 24√3 cm²."]
      ],
      ornek: [
        ["İç açıları toplamı 1260° olan çokgenin kenar sayısını ve toplam köşegen sayısını bulunuz.", "(n − 2) · 180 = 1260 → n − 2 = 7 → n = 9. Köşegen sayısı 9 · 6 / 2 = 27."],
        ["Düzgün bir çokgenin bir iç açısı, bir dış açısının 4 katıdır. Çokgen kaç kenarlıdır?", "İç + dış = 180° ve iç = 4 · dış → 5 · dış = 180° → dış = 36°. n = 360° / 36° = 10 (düzgün ongen)."]
      ],
      hata: [
        "İç açılar toplamında n · 180° yazmak; doğrusu (n − 2) · 180°.",
        "Köşegen sayısında 2'ye bölmeyi unutmak (her köşegen iki kez sayılır).",
        "Dış açılar toplamının kenar sayısıyla arttığını sanmak (dışbükeyde hep 360°)."
      ]
    }
  ]);

  // ---------- 3. Tema (1): Trigonometrik fonksiyonlar ----------
  MUF.konu("matematik", "matu1", 99, {
    id: "mat1k3", ad: "Trigonometrik Fonksiyonlar, Grafikler ve Denklemler (Maarif)",
    ozet: [
      "Radyan: π radyan = 180°. Derece → radyan: × π/180; radyan → derece: × 180/π.",
      "sin x ve cos x: tanım kümesi ℝ, görüntü kümesi [−1, 1], esas periyot 2π (360°). tan x ve cot x: esas periyot π (180°).",
      "sin x tek fonksiyondur: sin(−x) = −sin x. cos x çift fonksiyondur: cos(−x) = cos x.",
      "f(x) = a · sin(bx + c) + d ve a · cos(bx + c) + d için periyot 2π / |b|, en büyük değer |a| + d, en küçük değer −|a| + d.",
      "tan(bx + c) için periyot π / |b|.",
      "sin x = k veya cos x = k denkleminin çözümü için −1 ≤ k ≤ 1 olmalıdır; [0, 2π) aralığında genellikle iki çözüm vardır (k = ±1 ise tek çözüm)."
    ],
    anlatim: [
      "Birim çemberde x açısının bitim noktasının ordinatı sin x, apsisi cos x'tir. Açı 360° döndüğünde aynı noktaya gelindiğinden sin ve cos 2π periyotludur.",
      "Referans fonksiyondan türetilen g(x) = k · f(mx ± r) ± s ailesinde: k grafiği dikeyde uzatır/kısaltır (ve k < 0 ise x eksenine göre yansıtır), m periyodu değiştirir, r yatay öteleme, s dikey öteleme yapar.",
      "Örneğin f(x) = 3 sin 2x − 1 için periyot 2π/2 = π, en büyük değer 3 − 1 = 2, en küçük değer −3 − 1 = −4'tür.",
      "Trigonometrik denklemler birim çember yardımıyla çözülür: sin x = 1/2 ise x = 30° veya x = 150° (yani π/6 ve 5π/6); genel çözümde periyot eklenir: x = π/6 + 2kπ veya x = 5π/6 + 2kπ (k ∈ ℤ)."
    ],
    sorular: [
      ["f(x) = sin 3x fonksiyonunun esas periyodu kaçtır?", "2π/3", "3π", "π/3", "6π", "Periyot = 2π / |b| = 2π/3"],
      ["f(x) = 4 cos x + 1 fonksiyonunun en büyük değeri kaçtır?", "5", "4", "3", "1", "En büyük değer |a| + d = 4 + 1 = 5"],
      ["120° kaç radyandır?", "2π/3", "3π/4", "π/3", "4π/3", "120 · π/180 = 2π/3"],
      ["[0, 2π) aralığında sin x = 1/2 denkleminin çözümleri hangisidir?", "π/6 ve 5π/6", "π/3 ve 2π/3", "π/6 ve 7π/6", "Yalnızca π/6", "Sinüs I. ve II. bölgede pozitiftir: 30° ve 150°."],
      ["Hangisi çift fonksiyondur?", "cos x", "sin x", "tan x", "cot x", "cos(−x) = cos x olduğundan kosinüs çifttir."],
      ["f(x) = tan 2x fonksiyonunun esas periyodu kaçtır?", "π/2", "π", "2π", "4π", "tan için periyot π / |b| = π/2"],
      ["cos x = 2 denkleminin çözüm kümesi nedir?", "Boş küme", "{0}", "{π}", "ℝ", "cos x'in değerleri [−1, 1] aralığındadır; 2 değeri alınamaz."]
    ],
    acik: [
      ["f(x) = 2 sin(x − π/4) + 3 fonksiyonunun periyodunu, en büyük ve en küçük değerini bulunuz.", "Periyot 2π/1 = 2π. sin değeri [−1, 1] → 2 sin(...) [−2, 2] → +3 ile [1, 5]. En büyük 5, en küçük 1."],
      ["[0, 2π) aralığında 2 cos x + 1 = 0 denklemini çözünüz.", "cos x = −1/2. Kosinüs II. ve III. bölgede negatiftir: x = 2π/3 (120°) ve x = 4π/3 (240°)."]
    ],
    ornek: [
      ["f(x) = −3 cos 2x + 2 fonksiyonunun periyodunu ve görüntü kümesini bulunuz.", "Periyot 2π / 2 = π. cos 2x ∈ [−1, 1] → −3 cos 2x ∈ [−3, 3] (a negatif olsa da aralık simetriktir) → +2 ile [−1, 5]. Görüntü kümesi [−1, 5]."],
      ["[0°, 360°) aralığında tan x = −1 denklemini çözünüz.", "tan x negatif: II. ve IV. bölge. Referans açı 45° → x = 180° − 45° = 135° ve x = 360° − 45° = 315°. Kontrol: tan periyodu 180° olduğundan 135° + 180° = 315° ✓"]
    ],
    hata: [
      "sin 2x'in periyodunu 4π sanmak; periyot 2π/2 = π olur (b büyüdükçe periyot kısalır).",
      "sin x = k denkleminde yalnızca bir çözüm yazıp ikinci bölgedeki çözümü unutmak.",
      "Hesap makinesini radyan/derece modunu kontrol etmeden kullanmak."
    ]
  });

  // ---------- 3. Tema (2): Üstel ve logaritmik fonksiyonlar ----------
  MUF.unite("matematik", { id: "m11uust", ad: "Üstel ve Logaritmik Fonksiyonlar (Maarif)", donem: 2 }, [
    {
      id: "mat11u1", ad: "Üstel Fonksiyonlar ve Nitel Özellikleri",
      ozet: [
        "f(x) = aˣ (a > 0, a ≠ 1) üstel fonksiyondur. Tanım kümesi ℝ, görüntü kümesi (0, ∞); grafik her zaman (0, 1) noktasından geçer.",
        "a > 1 ise f artandır; 0 < a < 1 ise azalandır. Üstel fonksiyon bire birdir, x ekseni yatay asimptottur (fonksiyon sıfır olmaz).",
        "aˣ · aʸ = aˣ⁺ʸ · aˣ / aʸ = aˣ⁻ʸ · (aˣ)ʸ = aˣʸ · a⁰ = 1 · a⁻ˣ = 1 / aˣ",
        "e ≈ 2,718 doğal üstel fonksiyonun tabanıdır: f(x) = eˣ.",
        "Gerçek hayatta: nüfus artışı, bileşik faiz A = P(1 + r)ⁿ, radyoaktif bozunma, bakteri çoğalması üstel modellerdir."
      ],
      anlatim: [
        "Doğrusal büyümede her adımda aynı miktar eklenir; üstel büyümede her adımda aynı oranla çarpılır. Her saat iki katına çıkan bakteri sayısı N(t) = N₀ · 2ᵗ ile modellenir.",
        "Üstel fonksiyon bire bir olduğu için aˣ = aʸ ise x = y'dir; üstel denklemler tabanlar eşitlenerek çözülür: 2ˣ⁺¹ = 32 = 2⁵ → x + 1 = 5 → x = 4.",
        "a > 1 iken aˣ artan olduğundan aˣ < aʸ ⇔ x < y; 0 < a < 1 iken eşitsizlik yön değiştirir: (1/2)ˣ < (1/2)ʸ ⇔ x > y."
      ],
      sorular: [
        ["f(x) = 3ˣ ise f(4) kaçtır?", "81", "12", "64", "27", "3⁴ = 81"],
        ["2ˣ⁻¹ = 16 denkleminin çözümü kaçtır?", "5", "4", "3", "17", "16 = 2⁴ → x − 1 = 4 → x = 5"],
        ["Hangisi azalan bir fonksiyondur?", "f(x) = (1/3)ˣ", "f(x) = 3ˣ", "f(x) = eˣ", "f(x) = 2ˣ", "Taban 0 ile 1 arasında ise üstel fonksiyon azalandır."],
        ["f(x) = 5ˣ fonksiyonunun grafiği y eksenini hangi noktada keser?", "(0, 1)", "(0, 5)", "(1, 0)", "(0, 0)", "f(0) = 5⁰ = 1"],
        ["Bir bakteri kolonisi her saat iki katına çıkıyor. Başlangıçta 300 bakteri varsa 4 saat sonra kaç bakteri olur?", "4800", "2400", "1200", "1500", "300 · 2⁴ = 300 · 16 = 4800"],
        ["f(x) = 2ˣ fonksiyonunun görüntü kümesi hangisidir?", "(0, ∞)", "ℝ", "[0, ∞)", "(1, ∞)", "Üstel fonksiyon her zaman pozitiftir ama 0 olmaz."]
      ],
      acik: [
        ["(1/2)ˣ⁺² > (1/2)⁵ eşitsizliğini çözünüz.", "Taban 0 ile 1 arasında olduğundan eşitsizlik yön değiştirir: x + 2 < 5 → x < 3."],
        ["10 000 TL yıllık %20 bileşik faizle 2 yıl bankada kalırsa ne olur?", "A = 10 000 · (1,2)² = 10 000 · 1,44 = 14 400 TL."]
      ],
      ornek: [
        ["4ˣ = 8 denklemini çözünüz.", "Ortak taban 2: (2²)ˣ = 2³ → 2x = 3 → x = 3/2."],
        ["Yarılanma süresi 5 yıl olan 80 g radyoaktif maddeden 15 yıl sonra kaç gram kalır?", "15 yıl = 3 yarılanma. m = 80 · (1/2)³ = 80 / 8 = 10 g."]
      ],
      hata: [
        "aˣ⁺ʸ'yi aˣ + aʸ sanmak; doğrusu aˣ · aʸ.",
        "Taban 1'den küçükken eşitsizliğin yönünü çevirmeyi unutmak.",
        "Üstel fonksiyonun negatif ya da sıfır değer alabileceğini sanmak."
      ]
    },
    {
      id: "mat11u2", ad: "Logaritma Fonksiyonu, Özellikleri ve Logaritmik Denklemler",
      ozet: [
        "Logaritma, üstel fonksiyonun tersidir: aˣ = b ⇔ logₐ b = x (a > 0, a ≠ 1, b > 0).",
        "f(x) = logₐ x: tanım kümesi (0, ∞), görüntü kümesi ℝ; grafik (1, 0) noktasından geçer; y ekseni dikey asimptottur. y = aˣ ile y = x doğrusuna göre simetriktir.",
        "logₐ 1 = 0 · logₐ a = 1 · logₐ(xy) = logₐ x + logₐ y · logₐ(x/y) = logₐ x − logₐ y · logₐ xⁿ = n · logₐ x",
        "Taban değiştirme: logₐ b = log b / log a. log x = log₁₀ x (onluk), ln x = logₑ x (doğal logaritma).",
        "Logaritmik denklemde çözümler mutlaka tanım koşuluyla (logaritması alınan ifade > 0) kontrol edilir."
      ],
      anlatim: [
        "log₂ 8 = ? sorusu '2'nin kaçıncı kuvveti 8'dir?' demektir: 2³ = 8 → log₂ 8 = 3.",
        "a > 1 ise logₐ x artan, 0 < a < 1 ise azalandır. Bu yüzden log₂ x < 3 ⇔ 0 < x < 8; log₀,₅ x < 3 ⇔ x > 1/8.",
        "Gerçek hayatta logaritma, çok geniş aralıkta değişen nicelikleri ölçeklemek için kullanılır: deprem büyüklüğü (Richter), ses şiddeti (desibel), pH. Üstel denklemlerde bilinmeyen üsteyse her iki tarafın logaritması alınır: 3ˣ = 20 → x = log 20 / log 3."
      ],
      sorular: [
        ["log₃ 81 kaçtır?", "4", "3", "27", "9", "3⁴ = 81"],
        ["log 1000 kaçtır? (onluk logaritma)", "3", "100", "10", "4", "10³ = 1000"],
        ["log₂ 12 − log₂ 3 işleminin sonucu kaçtır?", "2", "4", "9", "log₂ 9", "log₂(12/3) = log₂ 4 = 2"],
        ["log₅ x = 2 ise x kaçtır?", "25", "10", "7", "32", "x = 5² = 25"],
        ["f(x) = log₂(x − 3) fonksiyonunun tanım kümesi hangisidir?", "(3, ∞)", "[3, ∞)", "ℝ", "(0, ∞)", "x − 3 > 0 → x > 3"],
        ["log₂(x + 1) = 3 denkleminin çözümü kaçtır?", "7", "8", "5", "2", "x + 1 = 2³ = 8 → x = 7"],
        ["3 · log 2 + log 5 − log 4 işleminin sonucu kaçtır?", "1", "log 6", "2", "0", "log 8 + log 5 − log 4 = log(40/4) = log 10 = 1"]
      ],
      acik: [
        ["log₂ x + log₂(x − 2) = 3 denklemini çözünüz.", "log₂[x(x − 2)] = 3 → x² − 2x = 8 → x² − 2x − 8 = 0 → (x − 4)(x + 2) = 0. x = −2 tanım koşulunu (x > 2) sağlamaz. Çözüm x = 4."],
        ["2ˣ = 10 denklemini logaritma ile çözünüz (log 2 ≈ 0,30).", "x = log₂ 10 = log 10 / log 2 = 1 / 0,30 ≈ 3,33."]
      ],
      ornek: [
        ["log 2 = a ise log 50 değerini a cinsinden yazınız.", "log 50 = log(100/2) = log 100 − log 2 = 2 − a."],
        ["log₃(2x − 1) = log₃(x + 4) denklemini çözünüz.", "Logaritma bire bir olduğundan 2x − 1 = x + 4 → x = 5. Kontrol: 2 · 5 − 1 = 9 > 0 ve 5 + 4 = 9 > 0 ✓"]
      ],
      hata: [
        "log(x + y)'yi log x + log y sanmak; toplamın değil çarpımın logaritması toplanır.",
        "Bulunan kökü tanım koşuluna göre kontrol etmemek (negatif sayının logaritması tanımsızdır).",
        "logₐ 1 = 1 sanmak; doğrusu 0."
      ]
    }
  ]);

  // ---------- 3. Tema (3): Fonksiyonlarda dört işlem ve bileşke ----------
  MUF.unite("matematik", { id: "m11ufon", ad: "Fonksiyonlarda İşlemler ve Bileşke (Maarif)", donem: 2, sonra: "m11uust" }, [
    {
      id: "mat11f1", ad: "Fonksiyonlarda Dört İşlem, Bileşke ve Ters Fonksiyon",
      ozet: [
        "(f + g)(x) = f(x) + g(x) · (f − g)(x) = f(x) − g(x) · (f · g)(x) = f(x) · g(x) · (f / g)(x) = f(x) / g(x), g(x) ≠ 0",
        "İşlem fonksiyonlarının tanım kümesi, f ve g'nin tanım kümelerinin kesişimidir (bölmede ayrıca g(x) = 0 olan noktalar çıkarılır).",
        "Bileşke: (f ∘ g)(x) = f(g(x)) — önce g, sonra f uygulanır. Genelde f ∘ g ≠ g ∘ f; bileşke birleşmelidir: f ∘ (g ∘ h) = (f ∘ g) ∘ h.",
        "Ters fonksiyon: f bire bir ve örten ise f⁻¹ vardır ve (f ∘ f⁻¹)(x) = (f⁻¹ ∘ f)(x) = x. f(a) = b ⇔ f⁻¹(b) = a.",
        "f(x) = ax + b ise f⁻¹(x) = (x − b) / a. f ile f⁻¹ grafikleri y = x doğrusuna göre simetriktir."
      ],
      anlatim: [
        "Bileşke bir 'makine zinciri' gibidir: x önce g makinesine girer, çıkan g(x) bu kez f makinesine girer. Örneğin g(x) = x + 2, f(x) = 3x ise (f ∘ g)(x) = 3(x + 2) = 3x + 6; (g ∘ f)(x) = 3x + 2. Sonuçlar farklıdır, yani bileşkede sıra önemlidir.",
        "Ters fonksiyon bulmak için y = f(x) yazılır, x yalnız bırakılır, sonra x ile y'nin yeri değiştirilir: y = 2x − 5 → x = (y + 5)/2 → f⁻¹(x) = (x + 5)/2.",
        "Nitel özelliklerin korunması: iki artan fonksiyonun toplamı artandır; artan iki fonksiyonun bileşkesi artandır; tek ile tek fonksiyonun bileşkesi tektir."
      ],
      sorular: [
        ["f(x) = 2x + 1 ve g(x) = x² ise (f ∘ g)(3) kaçtır?", "19", "49", "10", "7", "g(3) = 9, f(9) = 2 · 9 + 1 = 19"],
        ["f(x) = 2x + 1 ve g(x) = x² ise (g ∘ f)(3) kaçtır?", "49", "19", "36", "10", "f(3) = 7, g(7) = 49"],
        ["f(x) = 3x − 6 ise f⁻¹(x) hangisidir?", "(x + 6)/3", "(x − 6)/3", "3x + 6", "1/(3x − 6)", "y = 3x − 6 → x = (y + 6)/3"],
        ["f(x) = x + 4 ve g(x) = 2x ise (f + g)(5) kaçtır?", "19", "14", "90", "10", "f(5) + g(5) = 9 + 10 = 19"],
        ["f(2) = 7 ise f⁻¹(7) kaçtır?", "2", "7", "1/7", "5", "f(a) = b ⇔ f⁻¹(b) = a"],
        ["f(x) = x − 1 ve g(x) = x² − 4 ise (f / g)(x) fonksiyonunun tanım kümesinden hangi değerler çıkarılmalıdır?", "−2 ve 2", "1", "0", "4", "Payda g(x) = x² − 4 = 0 → x = ±2"],
        ["(f ∘ f⁻¹)(10) kaçtır?", "10", "1", "0", "100", "Bir fonksiyonla tersinin bileşkesi birim fonksiyondur."]
      ],
      acik: [
        ["f(x) = x² + 1 ve g(x) = x − 3 için (f ∘ g)(x) ve (g ∘ f)(x) ifadelerini bulup karşılaştırınız.", "(f ∘ g)(x) = (x − 3)² + 1 = x² − 6x + 10. (g ∘ f)(x) = x² + 1 − 3 = x² − 2. Farklıdır; bileşke değişmeli değildir."],
        ["f(x) = (2x + 1)/3 fonksiyonunun tersini bulunuz ve f⁻¹(5) değerini hesaplayınız.", "y = (2x + 1)/3 → 3y = 2x + 1 → x = (3y − 1)/2. f⁻¹(x) = (3x − 1)/2, f⁻¹(5) = 14/2 = 7. Kontrol: f(7) = 15/3 = 5 ✓"]
      ],
      ornek: [
        ["f(x) = 2x − 3 ve (f ∘ g)(x) = 6x + 5 ise g(x) nedir?", "f(g(x)) = 2 · g(x) − 3 = 6x + 5 → 2 · g(x) = 6x + 8 → g(x) = 3x + 4. Kontrol: f(3x + 4) = 6x + 8 − 3 = 6x + 5 ✓"],
        ["Bir mağazada önce %20 indirim (g(x) = 0,8x), sonra 50 TL kupon (f(x) = x − 50) uygulanıyor. 400 TL'lik ürün kaça düşer? Sıra değişirse ne olur?", "(f ∘ g)(400) = 0,8 · 400 − 50 = 270 TL. Önce kupon sonra indirim: (g ∘ f)(400) = 0,8 · 350 = 280 TL. Bileşkede sıra sonucu değiştirir."]
      ],
      hata: [
        "(f ∘ g)(x)'i f(x) · g(x) sanmak; bileşke çarpma değildir.",
        "f⁻¹(x)'i 1/f(x) sanmak; ters fonksiyon çarpmaya göre ters değildir.",
        "Bileşkede önce dıştaki fonksiyonu uygulamak; önce içteki (sağdaki) uygulanır."
      ]
    }
  ]);

  // ---------- Yeni konuların soru üreteçleri (genel üreteçlerden önce) ----------
  const U = (window.URETEC = window.URETEC || {});
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const z = (n) => (n < 0 ? "−" + Math.abs(n) : String(n));
  const karis = (a) => a.slice().sort(() => Math.random() - 0.5);
  function soru(metin, dogru, yanlislar, cozum) {
    const s = [String(dogru)];
    for (const y of karis(yanlislar)) { const t = String(y); if (s.length < 4 && t && !s.includes(t)) s.push(t); }
    return s.length === 4 ? { soru: metin, secenekler: s, dogru: 0, cozum } : null;
  }
  const tip = (l) => () => { for (let i = 0; i < 30; i++) { const q = pick(l)(); if (q) return q; } return null; };
  const ond = (x) => String(x).replace(".", ",");

  U.mat11i1 = tip([
    () => { const v = pick([-0.95, -0.85, -0.7, -0.4, -0.15, 0.1, 0.35, 0.65, 0.8, 0.93]); const g = Math.abs(v) >= 0.7 ? "güçlü" : Math.abs(v) >= 0.4 ? "orta düzeyde" : "zayıf"; const y = v < 0 ? "negatif" : "pozitif";
      return soru(`Korelasyon katsayısı r = ${ond(v).replace("-", "−")} olan iki değişken için hangisi doğrudur?`, `${g[0].toLocaleUpperCase("tr") + g.slice(1)} ${y} doğrusal ilişki vardır.`, [`${g[0].toLocaleUpperCase("tr") + g.slice(1)} ${y === "pozitif" ? "negatif" : "pozitif"} doğrusal ilişki vardır.`, "Değişkenlerden biri kesinlikle diğerinin sebebidir.", "r değeri −1 ile 1 arasında olamaz.", `${g === "güçlü" ? "Zayıf" : "Güçlü"} ${y} doğrusal ilişki vardır.`], "İşaret ilişkinin yönünü, |r| gücünü gösterir (|r| 1'e yaklaştıkça güçlenir)."); },
    () => { const a = pick([0.3, 0.45, 0.6]), b = pick([-0.75, -0.8, -0.9]); return soru(`r₁ = ${ond(a)} ve r₂ = ${ond(b).replace("-", "−")} olan iki veri setinden hangisinde doğrusal ilişki daha güçlüdür?`, `r₂ = ${ond(b).replace("-", "−")} olan`, [`r₁ = ${ond(a)} olan`, "İkisi eşit güçtedir", "Negatif korelasyon güç bildirmez"], `Güç mutlak değerle karşılaştırılır: ${ond(Math.abs(b))} > ${ond(a)}.`); },
    () => { const c = pick([["boy", "kütle", "pozitif"], ["arabanın yaşı", "satış fiyatı", "negatif"], ["günlük çalışma süresi", "sınav puanı", "pozitif"], ["hava sıcaklığı", "kaloriferde harcanan doğal gaz", "negatif"], ["dağa tırmanılan yükseklik", "hava sıcaklığı", "negatif"]]);
      return soru(`"${c[0]}" ile "${c[1]}" arasında genellikle nasıl bir ilişki beklenir?`, c[2] === "pozitif" ? "Pozitif ilişki" : "Negatif ilişki", [c[2] === "pozitif" ? "Negatif ilişki" : "Pozitif ilişki", "Hiçbir ilişki beklenmez", "Korelasyon katsayısı 2 olur"], `${c[0]} arttıkça ${c[1]} ${c[2] === "pozitif" ? "artma" : "azalma"} eğilimindedir.`); }
  ]);

  U.mat11g1 = tip([
    () => { const a = r(60, 120), b = r(60, 120), c = r(50, 110), d = 360 - a - b - c; if (d <= 20 || d >= 180) return null; return soru(`Bir dörtgenin üç iç açısı ${a}°, ${b}° ve ${c}° ise dördüncü açısı kaç derecedir?`, `${d}°`, [`${180 - d}°`, `${d + 10}°`, `${d - 10}°`, `${540 - a - b - c}°`].filter((x) => !x.startsWith("−")), `360° − (${a}° + ${b}° + ${c}°) = ${d}°`); },
    () => { const a = r(35, 85); return soru(`Bir paralelkenarın bir açısı ${a}° ise ona komşu (ardışık) açı kaç derecedir?`, `${180 - a}°`, [`${a}°`, `${90 - a > 0 ? 90 - a : a + 10}°`, `${360 - a}°`], `Ardışık açılar bütünlerdir: 180° − ${a}° = ${180 - a}°`); },
    () => { const e = r(3, 12) * 2, f = r(3, 12) * 2; return soru(`Köşegenleri ${e} cm ve ${f} cm olan eşkenar dörtgenin alanı kaç cm²'dir?`, String((e * f) / 2), [String(e * f), String(e + f), String((e * f) / 4)], `Alan = e · f / 2 = ${e} · ${f} / 2 = ${(e * f) / 2} cm²`); },
    () => { const a = r(8, 20), c = r(2, a - 2), h = r(2, 10) * 2; return soru(`Tabanları ${a} cm ve ${c} cm, yüksekliği ${h} cm olan yamuğun alanı kaç cm²'dir?`, String(((a + c) * h) / 2), [String((a + c) * h), String(a * h), String(((a - c) * h) / 2)], `(${a} + ${c}) · ${h} / 2 = ${((a + c) * h) / 2} cm²`); },
    () => { const [x, y, k] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]]); return soru(`Köşegenleri ${2 * x} cm ve ${2 * y} cm olan eşkenar dörtgenin bir kenarı kaç cm'dir?`, String(k), [String(x + y), String(2 * k), String(x * y)], `Köşegenler birbirini dik ortalar: √(${x}² + ${y}²) = ${k} cm`); },
    () => { const s = pick([["Her kare bir dikdörtgendir.", "Her dikdörtgen bir karedir."], ["Her eşkenar dörtgen bir paralelkenardır.", "Her paralelkenar bir eşkenar dörtgendir."], ["Her dikdörtgen bir paralelkenardır.", "Her paralelkenar bir dikdörtgendir."], ["Her kare bir eşkenar dörtgendir.", "Her eşkenar dörtgen bir karedir."]]);
      return soru("Hangisi her zaman doğrudur?", s[0], [s[1], "Her yamuk bir paralelkenardır.", "Her deltoid bir karedir."], "Özel dörtgen, daha genel olanın tüm özelliklerini taşır; tersi her zaman doğru değildir."); }
  ]);

  const AD = { 3: "üçgen", 4: "dörtgen", 5: "beşgen", 6: "altıgen", 7: "yedigen", 8: "sekizgen", 9: "dokuzgen", 10: "ongen", 12: "on iki gen" };
  U.mat11g2 = tip([
    () => { const n = pick([5, 6, 7, 8, 9, 10, 12]); return soru(`Bir ${AD[n]}in iç açıları toplamı kaç derecedir?`, `${(n - 2) * 180}°`, [`${n * 180}°`, `${(n - 1) * 180}°`, `${(n - 3) * 180}°`, "360°"], `(${n} − 2) · 180° = ${(n - 2) * 180}°`); },
    () => { const n = pick([5, 6, 8, 9, 10, 12, 15, 18, 20]); return soru(`Düzgün bir çokgenin bir dış açısı ${360 / n}° ise kaç kenarı vardır?`, String(n), [String(n + 2), String(n - 1), String(180 / (360 / n) > 2 ? Math.round(180 / (360 / n)) : n + 3)], `n = 360° / ${360 / n}° = ${n}`); },
    () => { const n = pick([5, 6, 8, 9, 10, 12]); const ic = ((n - 2) * 180) / n; return soru(`Düzgün ${AD[n]}in bir iç açısı kaç derecedir?`, `${ic}°`, [`${360 / n}°`, `${(n - 2) * 180}°`, `${ic + 10}°`], `(${n} − 2) · 180° / ${n} = ${ic}°`); },
    () => { const n = pick([5, 6, 7, 8, 9, 10, 12]); return soru(`Bir ${AD[n]}in toplam köşegen sayısı kaçtır?`, String((n * (n - 3)) / 2), [String(n * (n - 3)), String(n - 3), String(n)], `n(n − 3)/2 = ${n} · ${n - 3} / 2 = ${(n * (n - 3)) / 2}`); },
    () => { const n = r(5, 14); return soru(`Bir köşesinden çizilen köşegenlerle ${n - 2} üçgene ayrılan çokgen kaç kenarlıdır?`, String(n), [String(n - 2), String(n - 1), String(n + 1)], `n − 2 = ${n - 2} → n = ${n}`); },
    () => { const n = pick([5, 7, 9, 11, 12, 15]); return soru(`Dışbükey bir ${n} kenarlı çokgenin dış açıları toplamı kaç derecedir?`, "360°", [`${(n - 2) * 180}°`, `${n * 180}°`, "180°"], "Dışbükey çokgenlerde dış açılar toplamı kenar sayısından bağımsız olarak 360°'dir."); }
  ]);

  U.mat1k3 = tip([
    () => { const b = pick([2, 3, 4, 5, 6]), f = pick(["sin", "cos"]); return soru(`f(x) = ${f} ${b}x fonksiyonunun esas periyodu kaçtır?`, `2π/${b}`.replace("2π/2", "π"), [`${2 * b}π`, `π/${b}`, `${b}π`, "2π"].filter((x) => x !== (`2π/${b}`.replace("2π/2", "π"))), `Periyot = 2π / |b| = 2π/${b}`); },
    () => { const a = r(2, 6), d = r(-4, 5), f = pick(["sin", "cos"]), en = pick(["büyük", "küçük"]); const v = en === "büyük" ? a + d : -a + d; return soru(`f(x) = ${a} ${f} x ${d < 0 ? "−" : "+"} ${Math.abs(d)} fonksiyonunun en ${en} değeri kaçtır?`, z(v), [z(en === "büyük" ? -a + d : a + d), z(a), z(d), z(a * d)], `${f} x ∈ [−1, 1] → en ${en} değer ${en === "büyük" ? "" : "−"}${a} ${d < 0 ? "−" : "+"} ${Math.abs(d)} = ${z(v)}`); },
    () => { const [g, rd] = pick([[30, "π/6"], [45, "π/4"], [60, "π/3"], [90, "π/2"], [120, "2π/3"], [135, "3π/4"], [150, "5π/6"], [180, "π"], [270, "3π/2"], [210, "7π/6"]]); const D = ["π/6", "π/4", "π/3", "π/2", "2π/3", "3π/4", "5π/6", "π", "3π/2", "7π/6"].filter((x) => x !== rd); return soru(`${g}° kaç radyandır?`, rd, karis(D), `${g} · π/180 = ${rd}`); },
    () => { const [d, c, y] = pick([["sin x = 1/2", "π/6 ve 5π/6", ["π/3 ve 2π/3", "π/6 ve 7π/6", "Yalnızca π/6"]], ["cos x = 1/2", "π/3 ve 5π/3", ["π/3 ve 2π/3", "π/6 ve 11π/6", "Yalnızca π/3"]], ["sin x = −1", "Yalnızca 3π/2", ["π/2 ve 3π/2", "Yalnızca π", "Boş küme"]], ["tan x = 1", "π/4 ve 5π/4", ["π/4 ve 3π/4", "Yalnızca π/4", "π/2 ve 3π/2"]], ["cos x = 0", "π/2 ve 3π/2", ["0 ve π", "Yalnızca π/2", "π ve 2π"]]]); return soru(`[0, 2π) aralığında ${d} denkleminin çözümleri hangisidir?`, c, y, "Birim çember üzerinde ilgili koordinatı bu değeri alan açılar bulunur."); },
    () => { const b = pick([2, 3, 4]); return soru(`f(x) = tan ${b}x fonksiyonunun esas periyodu kaçtır?`, `π/${b}`, [`2π/${b}`, `${b}π`, "π"], `tan için periyot π / |b| = π/${b}`); }
  ]);

  U.mat11u1 = tip([
    () => { const a = pick([2, 3, 5]), n = r(2, a === 2 ? 6 : 4); return soru(`f(x) = ${a}ˣ ise f(${n}) kaçtır?`, String(a ** n), [String(a * n), String(a ** (n - 1)), String(a + n), String(n ** a)], `${a}^${n} = ${a ** n}`); },
    () => { const a = pick([2, 3]), k = r(2, a === 2 ? 6 : 4), c = r(-2, 3); const x = k - c; return soru(`${a}^(x ${c < 0 ? "−" : "+"} ${Math.abs(c)}) = ${a ** k} denkleminin çözümü kaçtır?`.replace(" + 0", "").replace(" − 0", ""), z(x), [z(k), z(k + c), z(x + 1), z(a ** k - c)], `${a ** k} = ${a}^${k} → x ${c < 0 ? "−" : "+"} ${Math.abs(c)} = ${k} → x = ${z(x)}`); },
    () => { const N = pick([100, 200, 300, 500]), t = r(2, 5); return soru(`Her saat iki katına çıkan bir bakteri kolonisinde başlangıçta ${N} bakteri vardır. ${t} saat sonra kaç bakteri olur?`, String(N * 2 ** t), [String(N * 2 * t), String(N + 2 ** t), String(N * 2 ** (t - 1))], `${N} · 2^${t} = ${N * 2 ** t}`); },
    () => { const m = pick([64, 80, 96, 160]), T = pick([2, 4, 5, 10]), k = r(1, 3); return soru(`Yarılanma süresi ${T} yıl olan ${m} g radyoaktif maddeden ${T * k} yıl sonra kaç gram kalır?`, String(m / 2 ** k), [String(m / (2 * k)), String(m - (m / 2) * k > 0 ? m - (m / 2) * k : m / 2 ** (k + 1)), String(m / 2 ** (k + 1))], `${T * k} yıl = ${k} yarılanma: ${m} · (1/2)^${k} = ${m / 2 ** k} g`); },
    () => { const a = pick(["(1/2)ˣ", "(2/3)ˣ", "(0,4)ˣ"]); return soru("Hangisi azalan bir fonksiyondur?", `f(x) = ${a}`, ["f(x) = 2ˣ", "f(x) = eˣ", "f(x) = 10ˣ", "f(x) = (3/2)ˣ"], "Tabanı 0 ile 1 arasında olan üstel fonksiyon azalandır."); }
  ]);

  U.mat11u2 = tip([
    () => { const a = pick([2, 3, 5, 10]), n = r(1, a === 2 ? 6 : 3); return soru(`log${a === 10 ? "" : "₍" + a + "₎"} ${a ** n} kaçtır?`.replace("₍2₎", "₂").replace("₍3₎", "₃").replace("₍5₎", "₅"), String(n), [String(a ** n / a), String(n + 1), String(a * n)].filter((x) => x !== String(n)), `${a}^${n} = ${a ** n}`); },
    () => { const a = pick([2, 3]), k = r(2, 4), c = r(1, 6); const x = a ** k - c; return soru(`log${a === 2 ? "₂" : "₃"}(x + ${c}) = ${k} denkleminin çözümü kaçtır?`, String(x), [String(a ** k), String(a * k - c), String(a ** k + c)], `x + ${c} = ${a}^${k} = ${a ** k} → x = ${x}`); },
    () => { const c = r(1, 9); return soru(`f(x) = log₂(x − ${c}) fonksiyonunun tanım kümesi hangisidir?`, `(${c}, ∞)`, [`[${c}, ∞)`, "ℝ", "(0, ∞)", `(−∞, ${c})`], `x − ${c} > 0 → x > ${c}`); },
    () => { const [p, q, s] = pick([[12, 3, 2], [20, 5, 2], [24, 3, 3], [40, 5, 3], [48, 3, 4], [18, 2, null]]); if (!s) return null; return soru(`log₂ ${p} − log₂ ${q} işleminin sonucu kaçtır?`, String(s), [String(s + 1), `log₂ ${p - q}`, String(p / q)], `log₂(${p}/${q}) = log₂ ${p / q} = ${s}`); },
    () => soru("Hangisi her zaman doğrudur? (a > 0, a ≠ 1, x, y > 0)", "logₐ(xy) = logₐ x + logₐ y", ["logₐ(x + y) = logₐ x + logₐ y", "logₐ 1 = 1", "logₐ(x/y) = logₐ x / logₐ y"], "Çarpımın logaritması logaritmaların toplamıdır.")
  ]);

  U.mat11f1 = tip([
    () => { const a = r(2, 5), b = pick([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), c = r(-4, 4); const g = c * c, f = a * g + b; return soru(`f(x) = ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} ve g(x) = x² ise (f ∘ g)(${z(c)}) kaçtır?`, z(f), [z((a * c + b) ** 2), z(a * c + b), z(g), z(f + a)], `g(${z(c)}) = ${g}, f(${g}) = ${a} · ${g} ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${z(f)}`); },
    () => { const a = pick([2, 3, 4, 5]), b = r(-9, 9); if (!b) return null; const fi = `(x ${b < 0 ? "+" : "−"} ${Math.abs(b)})/${a}`; return soru(`f(x) = ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} ise f⁻¹(x) hangisidir?`, fi, [`(x ${b < 0 ? "−" : "+"} ${Math.abs(b)})/${a}`, `${a}x ${b < 0 ? "+" : "−"} ${Math.abs(b)}`, `1/(${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)})`], `y = ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} → x = (y ${b < 0 ? "+" : "−"} ${Math.abs(b)})/${a}; x ile y yer değiştirir: f⁻¹(x) = ${fi}`); },
    () => { const a = r(1, 9), b = r(2, 9); return soru(`f(${a}) = ${b} ise f⁻¹(${b}) kaçtır?`, String(a), [String(b), `1/${b}`, String(a + b)], "f(a) = b ⇔ f⁻¹(b) = a"); },
    () => { const p = r(1, 6), q = r(2, 4), x = r(1, 6); return soru(`f(x) = x + ${p} ve g(x) = ${q}x ise (f · g)(${x}) kaçtır?`, String((x + p) * q * x), [String(x + p + q * x), String(q * (x + p)), String((x + p) * q)], `f(${x}) · g(${x}) = ${x + p} · ${q * x} = ${(x + p) * q * x}`); },
    () => { const p = r(1, 5), q = r(2, 4), x = r(1, 6); const fg = q * x + p, gf = q * (x + p); return soru(`f(x) = x + ${p} ve g(x) = ${q}x ise (g ∘ f)(${x}) kaçtır?`, String(gf), [String(fg), String((x + p) * q * x), String(x + p + q)], `f(${x}) = ${x + p}, g(${x + p}) = ${q} · ${x + p} = ${gf}`); }
  ]);
})();
