// 12. sınıf Matematik, Fizik, Kimya, Biyoloji (konu sırası okulunuzun yıllık planına göre değişebilir)
DERS("matematik", "mat", { ad: "Matematik", ikon: "➗", renk: "#4f7cff" }, [
  ["Üstel ve Logaritmik Fonksiyonlar", 1, [
    ["Üstel Fonksiyon ve Logaritma", [
      "f(x) = aˣ (a > 0, a ≠ 1) üstel fonksiyon · a > 1 artan, 0 < a < 1 azalan",
      "logₐ b = c ⇔ aᶜ = b (a > 0, a ≠ 1, b > 0)",
      "log(xy) = log x + log y · log(x/y) = log x − log y · log xⁿ = n · log x",
      "Taban değiştirme: logₐ b = log b / log a · logₐ a = 1 · logₐ 1 = 0",
      "ln x = logₑ x (e ≈ 2,718) · log x = log₁₀ x"
    ], [
      "Logaritma, üs almanın tersidir: '2'nin kaçıncı kuvveti 8 eder?' sorusunun cevabı log₂ 8 = 3'tür. Bu nedenle üstel ve logaritmik fonksiyonlar birbirinin tersidir ve grafikleri y = x doğrusuna göre simetriktir.",
      "Nüfus artışı, radyoaktif bozunma, faiz ve deprem büyüklüğü (Richter ölçeği) gibi olaylar üstel ve logaritmik modellerle açıklanır. Logaritmalı denklemlerde tanım koşulu (logaritmanın içinin pozitif olması) mutlaka kontrol edilir."
    ], [
      ["log₂ 32 kaçtır?", "5", "4", "6", "16", "2⁵ = 32"],
      ["log 20 + log 5 kaçtır?", "2", "1", "100", "25", "log 100 = 2"],
      ["log₃ (x − 1) = 2 ise x kaçtır?", "10", "9", "7", "8", "x − 1 = 9"],
      ["f(x) = (1/2)ˣ fonksiyonu için hangisi doğrudur?", "Azalandır", "Artandır", "Sabittir", "x = 0'da tanımsızdır", "0 < a < 1"]
    ], [
      ["Bir bakteri popülasyonu her saat 2 katına çıkıyor. Başlangıçta 500 bakteri varsa kaç saat sonra 64 000 bakteri olur? Logaritma ya da üslü ifade kullanarak gösteriniz.", "500 · 2ᵗ = 64 000 → 2ᵗ = 128 = 2⁷ → t = 7 saat (log₂ 128 = 7)."]
    ]]
  ]],
  ["Diziler", 1, [
    ["Aritmetik ve Geometrik Diziler", [
      "Aritmetik dizi: ardışık terim farkı sabit (d) · aₙ = a₁ + (n − 1)d",
      "Aritmetik dizide ilk n terim toplamı Sₙ = n(a₁ + aₙ) / 2",
      "Geometrik dizi: ardışık terim oranı sabit (r) · aₙ = a₁ · rⁿ⁻¹",
      "Geometrik dizide Sₙ = a₁(rⁿ − 1) / (r − 1) (r ≠ 1)",
      "Ortadaki terim: aritmetik → komşuların ortalaması; geometrik → komşuların çarpımının karekökü"
    ], [
      "Aritmetik diziler eşit artışları (her ay aynı miktar biriktirmek), geometrik diziler yüzdesel artışları (bileşik faiz, nüfus) modeller.",
      "Gauss'un 1'den 100'e kadar sayıları toplama yöntemi aritmetik dizi toplam formülünün temelidir: baştan ve sondan eşit uzaklıktaki terimlerin toplamı sabittir; 50 çift × 101 = 5050."
    ], [
      ["İlk terimi 3, ortak farkı 4 olan aritmetik dizinin 10. terimi kaçtır?", "39", "43", "40", "36", "3 + 9·4"],
      ["1 + 2 + 3 + … + 50 toplamı kaçtır?", "1275", "1250", "2550", "1225", "50·51/2"],
      ["İlk terimi 2, ortak çarpanı 3 olan geometrik dizinin 5. terimi kaçtır?", "162", "486", "54", "30", "2·3⁴"],
      ["Bir aritmetik dizide a₃ = 11 ve a₇ = 27 ise ortak fark kaçtır?", "4", "16", "3", "5", "4d = 16"]
    ], [
      ["Bir öğrenci kumbarasına ilk hafta 20 TL atıyor ve her hafta bir önceki haftadan 5 TL fazla atıyor. 12 haftada biriktirdiği toplam parayı bulunuz.", "a₁ = 20, d = 5, a₁₂ = 20 + 11·5 = 75. S₁₂ = 12·(20 + 75)/2 = 570 TL."]
    ]]
  ]],
  ["Türev", 2, [
    ["Limit ve Türev Kuralları", [
      "Türev: anlık değişim oranı · f′(x) = lim(h→0) [f(x + h) − f(x)] / h",
      "(xⁿ)′ = n · xⁿ⁻¹ · (c)′ = 0 · (c · f)′ = c · f′",
      "Çarpım: (f · g)′ = f′g + fg′ · Bölüm: (f/g)′ = (f′g − fg′) / g²",
      "Zincir kuralı: [f(g(x))]′ = f′(g(x)) · g′(x)",
      "Bir noktadaki türev, o noktadaki teğetin eğimidir"
    ], [
      "Türev, bir niceliğin başka bir niceliğe göre ne kadar hızlı değiştiğini gösterir. Konum fonksiyonunun türevi hız, hızın türevi ivmedir.",
      "Teğet doğrusu denklemi: y − f(a) = f′(a)(x − a). Örneğin f(x) = x² için x = 3'teki teğetin eğimi f′(3) = 6'dır."
    ], [
      ["f(x) = 3x⁴ ise f′(x) hangisidir?", "12x³", "3x³", "12x⁴", "4x³", "4·3x³"],
      ["f(x) = x² + 5x ise f′(2) kaçtır?", "9", "14", "4", "7", "2x + 5 → 9"],
      ["f(x) = (2x + 1)³ ise f′(x) hangisidir?", "6(2x + 1)²", "3(2x + 1)²", "(2x + 1)²", "6x²", "Zincir kuralı"],
      ["f(x) = x³ eğrisinin x = 1 noktasındaki teğetinin eğimi kaçtır?", "3", "1", "0", "6", "f′(1) = 3"]
    ], [
      ["Bir cismin t saniyedeki konumu s(t) = t³ − 6t² + 9t metredir. Cismin t = 2 s anındaki hızını ve ivmesini bulunuz.", "v(t) = s′(t) = 3t² − 12t + 9 → v(2) = 12 − 24 + 9 = −3 m/s. a(t) = v′(t) = 6t − 12 → a(2) = 0 m/s²."]
    ]],
    ["Türevin Uygulamaları: Artan-Azalan, Ekstremum", [
      "f′(x) > 0 → artan · f′(x) < 0 → azalan",
      "f′(x) = 0 olan ve işaret değiştiren noktalar yerel maksimum/minimum",
      "f′ işareti + → − ise yerel maksimum; − → + ise yerel minimum",
      "f″(x) > 0 → çukur yukarı (konveks), f″(x) < 0 → çukur aşağı",
      "Optimizasyon: en büyük alan, en az maliyet gibi problemler türevle çözülür"
    ], [
      "Bir fonksiyonun en büyük ya da en küçük değerini bulmak için türev sıfıra eşitlenir, bulunan kritik noktalarda türevin işaret değişimi incelenir. Kapalı aralıkta uç noktalar da kontrol edilmelidir.",
      "Örneğin çevresi 40 m olan dikdörtgen bahçenin alanı A(x) = x(20 − x) olur; A′(x) = 20 − 2x = 0 → x = 10. En büyük alan kenarları 10 m olan karede elde edilir: 100 m²."
    ], [
      ["f(x) = x² − 4x + 1 fonksiyonu hangi aralıkta azalandır?", "x < 2", "x > 2", "x < −2", "Her yerde", "f′(x) = 2x − 4 < 0"],
      ["f(x) = −x² + 6x fonksiyonunun en büyük değeri kaçtır?", "9", "3", "6", "36", "f′ = 0 → x = 3, f(3) = 9"],
      ["f(x) = x³ − 3x fonksiyonunun yerel maksimum noktasının apsisi kaçtır?", "−1", "1", "0", "3", "f′ = 3x² − 3 = 0 → ±1; + → − geçişi x = −1'de"],
      ["f′(a) = 0 ve f″(a) > 0 ise x = a noktası için ne söylenebilir?", "Yerel minimumdur", "Yerel maksimumdur", "Büküm noktasıdır", "Fonksiyon tanımsızdır", "İkinci türev testi"]
    ], [
      ["Kenarı 12 cm olan kare kartonun köşelerinden x cm'lik eş kareler kesilip kenarlar katlanarak üstü açık kutu yapılıyor. Hacmi en büyük yapan x değerini bulunuz.", "V(x) = x(12 − 2x)² , 0 < x < 6. V′(x) = (12 − 2x)² − 4x(12 − 2x) = (12 − 2x)(12 − 6x) = 0 → x = 2 (x = 6 olamaz). V(2) = 2·64 = 128 cm³ en büyük hacimdir."]
    ]]
  ]],
  ["İntegral", 2, [
    ["Belirsiz ve Belirli İntegral", [
      "İntegral türevin tersidir: ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1)",
      "∫ c · f(x) dx = c ∫ f(x) dx · ∫ (f + g) dx = ∫ f dx + ∫ g dx",
      "Belirli integral: ∫ₐᵇ f(x) dx = F(b) − F(a)",
      "f(x) ≥ 0 ise ∫ₐᵇ f(x) dx eğri ile x ekseni arasındaki alandır",
      "Riemann toplamı: alan ince dikdörtgenlerin toplamıyla yaklaşık hesaplanır"
    ], [
      "Belirsiz integralde sabit C eklenir çünkü türevi aynı olan sonsuz sayıda fonksiyon vardır. Belirli integralde bu sabit F(b) − F(a) farkında birbirini götürür.",
      "Hız-zaman grafiğinin altındaki alan yer değiştirmeyi verir; bu nedenle hızın integrali konumdur. İntegral, değişim oranından toplam değişimi bulmanın yoludur."
    ], [
      ["∫ 6x² dx hangisidir?", "2x³ + C", "12x + C", "6x³ + C", "3x² + C", "6·x³/3"],
      ["∫₀² 3x² dx kaçtır?", "8", "12", "6", "4", "x³ |₀² = 8"],
      ["∫₁³ 2x dx kaçtır?", "8", "9", "4", "6", "x² |₁³ = 9 − 1"],
      ["Türevi 4x³ olan ve F(0) = 5 sağlayan F(x) hangisidir?", "x⁴ + 5", "x⁴", "4x⁴ + 5", "12x² + 5", "∫ 4x³ dx = x⁴ + C, C = 5"]
    ], [
      ["y = x² eğrisi, x ekseni ve x = 0, x = 3 doğruları arasında kalan bölgenin alanını hesaplayınız ve bu alanın Riemann toplamıyla nasıl yaklaşık bulunabileceğini kısaca açıklayınız.", "Alan = ∫₀³ x² dx = x³/3 |₀³ = 9 birimkare. Aralık eşit genişlikte ince dikdörtgenlere bölünür, her dikdörtgenin alanı (genişlik × f(x)) toplanır; dikdörtgen sayısı arttıkça toplam 9'a yaklaşır."]
    ]]
  ]]
]);

DERS("fizik", "fiz", { ad: "Fizik", ikon: "⚛️", renk: "#2563eb" }, [
  ["Çembersel Hareket", 1, [
    ["Düzgün Çembersel Hareket ve Kütle Çekimi", [
      "Periyot T (bir tur süresi) · frekans f = 1/T · çizgisel hız v = 2πr / T",
      "Açısal hız ω = 2π / T · v = ω · r",
      "Merkezcil ivme a = v² / r · Merkezcil kuvvet F = m · v² / r (merkeze doğru)",
      "Newton'un kütle çekim yasası: F = G · m₁ · m₂ / d²",
      "Kepler yasaları: yörüngeler elips, eşit sürede eşit alan, T² ∝ r³"
    ], [
      "Düzgün çembersel harekette hızın büyüklüğü sabit ama yönü sürekli değiştiği için cisim ivmelidir. Bu ivmeyi oluşturan net kuvvet her an merkeze yöneliktir; virajı dönen otomobilde bu kuvveti sürtünme sağlar.",
      "Uyduların Dünya çevresinde dolanmasını sağlayan merkezcil kuvvet kütle çekim kuvvetidir. Yörünge yarıçapı büyüdükçe uydunun hızı azalır, periyodu artar."
    ], [
      ["Yarıçapı 2 m olan çemberde 4 m/s hızla dönen cismin merkezcil ivmesi kaç m/s²'dir?", "8", "2", "16", "4", "v²/r = 16/2"],
      ["Periyodu 0,5 s olan hareketin frekansı kaç Hz'dir?", "2", "0,5", "5", "1", "f = 1/T"],
      ["İki cisim arasındaki uzaklık 2 katına çıkarsa kütle çekim kuvveti ne olur?", "1/4'üne iner", "Yarıya iner", "2 katına çıkar", "4 katına çıkar", "F ∝ 1/d²"],
      ["Virajı dönen otomobilin merkezcil kuvvetini hangisi sağlar?", "Lastik ile yol arasındaki sürtünme", "Motor kuvveti", "Ağırlık", "Hava direnci", "Sürtünme merkeze doğru"]
    ], [
      ["Kütlesi 1000 kg olan bir otomobil yarıçapı 50 m olan düz virajı 10 m/s hızla dönüyor. Gereken merkezcil kuvveti hesaplayınız ve yol buzlanırsa ne olacağını açıklayınız.", "F = m·v²/r = 1000·100/50 = 2000 N. Buzlu yolda sürtünme kuvveti azalır; 2000 N sağlanamazsa otomobil merkezcil kuvvet eksikliğinden dolayı virajın dışına doğru savrulur (teğet doğrultusunda devam eder)."]
    ]]
  ]],
  ["Basit Harmonik Hareket ve Dalga Mekaniği", 1, [
    ["Basit Harmonik Hareket ve Dalgalar", [
      "Basit harmonik hareket: denge noktasına doğru, uzanımla orantılı geri çağırıcı kuvvet (F = −k·x)",
      "Yay sarkacı periyodu T = 2π√(m/k) · Basit sarkaç periyodu T = 2π√(L/g)",
      "Denge noktasında hız en büyük, uç noktalarda ivme en büyük",
      "Su dalgalarında kırınım: dalga engelin kenarından ya da yarıktan geçerken bükülür",
      "Girişim: dalgaların üst üste binmesi; yapıcı (aynı faz) ve yıkıcı (zıt faz)"
    ], [
      "Basit sarkacın periyodu kütleye ve genliğe (küçük açılarda) bağlı değildir; yalnızca ip uzunluğu ve yer çekimi ivmesine bağlıdır. Bu yüzden sarkaçlı saatler zaman ölçmede kullanılmıştır.",
      "Young'ın çift yarık deneyi ışığın girişim yaptığını, yani dalga özelliği gösterdiğini kanıtladı. Yarık aralığı küçüldükçe ya da dalga boyu büyüdükçe saçak aralığı artar."
    ], [
      ["Basit sarkacın periyodu hangisine bağlı değildir (küçük açılarda)?", "Sarkacın kütlesine", "İpin uzunluğuna", "Yer çekimi ivmesine", "Gezegenin değişmesine", "T = 2π√(L/g)"],
      ["Yay sarkacında kütle 4 katına çıkarılırsa periyot ne olur?", "2 katına çıkar", "4 katına çıkar", "Yarıya iner", "Değişmez", "T ∝ √m"],
      ["Basit harmonik harekette hız nerede en büyüktür?", "Denge noktasında", "Uç noktalarda", "Genliğin yarısında", "Her yerde eşittir", "Kinetik enerji dengede en büyük"],
      ["Işığın dalga özelliği gösterdiğini kanıtlayan deney hangisidir?", "Young çift yarık deneyi", "Fotoelektrik olay", "Rutherford deneyi", "Compton saçılması", "Girişim deseni"]
    ], [
      ["Bir sarkaçlı saat Dünya'dan Ay'a götürülürse (Ay'da g daha küçük) ileri mi geri mi kalır? Periyot bağıntısıyla açıklayınız.", "T = 2π√(L/g). Ay'da g küçük olduğundan periyot büyür, sarkaç daha yavaş salınır; saat geri kalır."]
    ]]
  ]],
  ["Atom Fiziği ve Radyoaktivite", 2, [
    ["Atom Modelleri, Çekirdek ve Radyoaktivite", [
      "Modeller: Thomson (üzümlü kek) → Rutherford (çekirdek) → Bohr (enerji düzeyleri) → modern (orbital)",
      "Bohr: elektron üst düzeyden alt düzeye inerken foton yayar; E_foton = h · f",
      "Radyoaktif bozunmalar: alfa (⁴₂He), beta (elektron), gama (yüksek enerjili foton)",
      "Yarılanma süresi: maddenin yarısının bozunması için geçen süre",
      "Fisyon: ağır çekirdeğin bölünmesi (nükleer santral) · Füzyon: hafif çekirdeklerin birleşmesi (Güneş)"
    ], [
      "Rutherford, altın levhaya alfa parçacıkları gönderdiğinde çoğunun geçtiğini, çok azının geri saptığını gözledi; buradan atomun büyük kısmının boşluk olduğu ve pozitif yükün küçük bir çekirdekte toplandığı sonucuna vardı.",
      "Yarılanma süresi 10 gün olan 80 g radyoaktif maddenin 30 gün sonra 80 → 40 → 20 → 10 g'ı kalır. Radyoaktivite tıpta (görüntüleme, tedavi), arkeolojide (karbon-14 ile yaş tayini) ve enerji üretiminde kullanılır."
    ], [
      ["Atomun çekirdekli yapısını ortaya koyan bilim insanı kimdir?", "Rutherford", "Thomson", "Dalton", "Bohr", "Alfa saçılması deneyi"],
      ["Yarılanma süresi 5 yıl olan 64 g maddenin 15 yıl sonra kaç gramı kalır?", "8", "16", "32", "4", "64 → 32 → 16 → 8"],
      ["Güneş'in enerjisinin kaynağı hangisidir?", "Füzyon", "Fisyon", "Kimyasal yanma", "Alfa bozunması", "Hidrojen çekirdeklerinin birleşmesi"],
      ["Hangisi elektromanyetik bir ışımadır?", "Gama ışını", "Alfa parçacığı", "Beta parçacığı", "Nötron", "Gama foton"]
    ], [
      ["Fisyon ve füzyon tepkimelerini tanımlayıp her biri için bir kullanım ya da doğal örnek veriniz.", "Fisyon: ağır bir çekirdeğin (ör. uranyum-235) nötronla bölünerek daha küçük çekirdeklere ayrılması ve enerji açığa çıkması — nükleer santraller. Füzyon: hafif çekirdeklerin (hidrojen izotopları) birleşerek daha ağır çekirdek (helyum) oluşturması — Güneş ve yıldızların enerjisi."]
    ]]
  ]],
  ["Modern Fizik", 2, [
    ["Fotoelektrik Olay, Işığın İkili Doğası ve Özel Görelilik", [
      "Fotoelektrik olay: yeterli frekansta ışık metal yüzeyden elektron koparır",
      "Foton enerjisi E = h · f · Eₖ(max) = h · f − W₀ (W₀: bağlanma enerjisi/eşik enerjisi)",
      "Eşik frekansının altında ışık şiddeti ne olursa olsun elektron sökülmez",
      "Işık hem dalga (girişim, kırınım) hem tanecik (fotoelektrik, Compton) özelliği gösterir",
      "Özel görelilik: ışık hızı tüm gözlemciler için aynıdır; hızlı hareket eden saat yavaş işler (zaman genişlemesi), E = m·c²"
    ], [
      "Fotoelektrik olayda ışık şiddetini artırmak sökülen elektron sayısını artırır ama elektronların kinetik enerjisini değiştirmez; kinetik enerjiyi frekans belirler. Einstein bu olayı ışığın fotonlardan oluştuğunu kabul ederek açıkladı.",
      "Güneş panelleri, fotosel kapılar ve dijital kameralardaki ışık algılayıcılar fotoelektrik olaydan yararlanır. GPS uyduları, görelilik etkileri düzeltilmezse konumda büyük hatalar oluşturur."
    ], [
      ["Fotoelektrik olayda sökülen elektronların maksimum kinetik enerjisi neye bağlıdır?", "Işığın frekansına", "Işığın şiddetine", "Işık kaynağının uzaklığına", "Metal levhanın büyüklüğüne", "Eₖ = hf − W₀"],
      ["Işığın tanecik modelini destekleyen olay hangisidir?", "Fotoelektrik olay", "Girişim", "Kırınım", "Kırılma", "Foton"],
      ["Eşik enerjisi 2 eV olan metale 5 eV'luk fotonlar düşüyor. Elektronların maksimum kinetik enerjisi kaç eV'dur?", "3", "7", "2,5", "10", "5 − 2"],
      ["Işık şiddeti artırılırsa (frekans sabit, eşik üstünde) ne olur?", "Sökülen elektron sayısı artar", "Kinetik enerji artar", "Eşik frekansı düşer", "Elektron sökülmez", "Foton sayısı artar"]
    ], [
      ["Kırmızı ışık bir metalden elektron sökemezken mor ışık söküyor. Kırmızı ışığın şiddeti artırılırsa elektron sökülür mü? Fotoelektrik olayla açıklayınız.", "Sökülmez. Elektron sökülmesi için tek bir fotonun enerjisi (h·f) bağlanma enerjisinden büyük olmalıdır. Kırmızı ışığın frekansı eşik frekansının altındadır; şiddet artırılınca foton sayısı artar ama her fotonun enerjisi yine yetersiz kalır."]
    ]]
  ]]
]);

DERS("kimya", "kim", { ad: "Kimya", ikon: "⚗️", renk: "#db2777" }, [
  ["Kimya ve Elektrik", 1, [
    ["İndirgenme-Yükseltgenme, Piller ve Elektroliz", [
      "Yükseltgenme: elektron verme (yükseltgenme basamağı artar) · İndirgenme: elektron alma",
      "Galvanik pil: kendiliğinden gerçekleşen redoks tepkimesiyle elektrik üretir; anotta yükseltgenme, katotta indirgenme",
      "Tuz köprüsü iyon dengesini sağlar; elektronlar dış devrede anottan katoda akar",
      "Pil potansiyeli E°pil = E°katot − E°anot (indirgenme potansiyelleri) > 0 ise kendiliğinden",
      "Elektroliz: elektrik enerjisiyle istemsiz tepkime gerçekleştirme; kaplama, metal saflaştırma, korozyondan korunma"
    ], [
      "Daniell pilinde çinko elektrot (anot) yükseltgenip Zn²⁺ iyonu olarak çözeltiye geçer ve incelir; bakır elektrot (katot) üzerinde Cu²⁺ iyonları indirgenip metal bakır olarak birikir.",
      "Demirin paslanması bir redoks olayıdır. Demiri çinkoyla kaplamak (galvanizleme) ya da daha aktif bir metali kurban elektrot olarak bağlamak korozyonu önler."
    ], [
      ["Zn → Zn²⁺ + 2e⁻ yarı tepkimesi hangi olaydır?", "Yükseltgenme", "İndirgenme", "Nötrleşme", "Çökelme", "Elektron verme"],
      ["Galvanik pilde indirgenmenin gerçekleştiği elektrot hangisidir?", "Katot", "Anot", "Tuz köprüsü", "Dış devre", "Katot"],
      ["Elektroliz için hangisi doğrudur?", "Elektrik enerjisi kimyasal enerjiye dönüşür", "Kendiliğinden gerçekleşir", "Elektrik üretir", "Redoks içermez", "İstemsiz tepkime"],
      ["Demirin çinkoyla kaplanmasının amacı nedir?", "Korozyonu önlemek", "İletkenliği azaltmak", "Erime noktasını düşürmek", "Mıknatıslamak", "Galvanizleme"]
    ], [
      ["Bir Zn-Cu (Daniell) pilinde anot ve katodu belirleyip elektron akış yönünü ve zamanla elektrotların kütlesindeki değişimi açıklayınız.", "Anot: Zn (yükseltgenir, Zn → Zn²⁺ + 2e⁻), kütlesi azalır. Katot: Cu (Cu²⁺ + 2e⁻ → Cu), kütlesi artar. Elektronlar dış devrede çinkodan bakıra akar; tuz köprüsü çözeltilerin yük dengesini sağlar."]
    ]]
  ]],
  ["Karbon Kimyasına Giriş", 1, [
    ["Karbonun Bağ Yapısı ve Hidrokarbonlar", [
      "Karbon 4 bağ yapar; zincir, dallanmış ve halkalı yapılar oluşturur",
      "Alkanlar CₙH₂ₙ₊₂ (tek bağ) · Alkenler CₙH₂ₙ (çift bağ) · Alkinler CₙH₂ₙ₋₂ (üçlü bağ)",
      "Hibritleşme: tek bağlı C sp³, çift bağlı sp², üçlü bağlı sp",
      "İzomerlik: aynı kapalı formül, farklı yapı ve özellik",
      "Aromatik hidrokarbon: benzen (C₆H₆) halkası"
    ], [
      "Karbonun başka karbon atomlarıyla kararlı bağlar kurabilmesi milyonlarca organik bileşiğin varlığını açıklar. Doğal gazın ana bileşeni metan (CH₄) en basit alkandır.",
      "Bütan (C₄H₁₀) düz zincirli ve dallanmış (izobütan) iki izomere sahiptir; dallanma arttıkça kaynama noktası genellikle düşer."
    ], [
      ["C₃H₈ hangi hidrokarbon sınıfındandır?", "Alkan", "Alken", "Alkin", "Aromatik", "CₙH₂ₙ₊₂, n = 3"],
      ["Etilen (C₂H₄) molekülündeki karbon atomlarının hibritleşmesi hangisidir?", "sp²", "sp³", "sp", "sp³d", "Çift bağ"],
      ["Aynı kapalı formüle sahip, farklı yapıdaki bileşiklere ne denir?", "İzomer", "İzotop", "Allotrop", "Homolog", "İzomer"],
      ["Doğal gazın ana bileşeni hangisidir?", "Metan", "Etan", "Benzen", "Propen", "CH₄"]
    ], [
      ["Pentanın (C₅H₁₂) iki farklı izomerinin yapısını tarif ederek izomerlerin fiziksel özelliklerinin neden farklı olabileceğini açıklayınız.", "Örnek: n-pentan (5 karbonlu düz zincir) ve 2-metilbütan (4 karbonlu zincirde bir metil dalı); ayrıca 2,2-dimetilpropan. Dallanma molekülün yüzey alanını küçültür, moleküller arası etkileşimler zayıflar; bu yüzden dallanmış izomerin kaynama noktası daha düşüktür."]
    ]]
  ]],
  ["Organik Bileşikler", 2, [
    ["Fonksiyonel Gruplar: Alkoller, Karboksilik Asitler, Esterler", [
      "Alkol: –OH grubu (etanol C₂H₅OH) · Eter: R–O–R′",
      "Aldehit: –CHO · Keton: R–CO–R′ (aseton)",
      "Karboksilik asit: –COOH (asetik asit, sirke) · Ester: R–COO–R′ (meyve kokuları)",
      "Esterleşme: karboksilik asit + alkol → ester + su",
      "Polimerler: küçük birimlerin (monomer) birleşmesiyle oluşan büyük moleküller (polietilen, PVC)"
    ], [
      "Fonksiyonel grup, organik bileşiğin kimyasal davranışını belirleyen atom grubudur. Aynı fonksiyonel grubu taşıyan bileşikler benzer tepkimeler verir.",
      "Esterler meyve ve çiçeklere özgü kokuları verir; yağlar ise gliserin ile yağ asitlerinin oluşturduğu esterlerdir. Yağların bazla tepkimesinden sabun elde edilir (sabunlaşma)."
    ], [
      ["Sirkenin etken maddesi olan asetik asit hangi fonksiyonel grubu içerir?", "–COOH", "–OH", "–CHO", "–O–", "Karboksil"],
      ["Karboksilik asit ile alkolün tepkimesinden ne oluşur?", "Ester ve su", "Eter ve hidrojen", "Aldehit", "Keton", "Esterleşme"],
      ["Etanolün fonksiyonel grubu hangisidir?", "Hidroksil (–OH)", "Karbonil (C=O)", "Karboksil", "Amin", "Alkol"],
      ["Aseton hangi sınıftadır?", "Keton", "Aldehit", "Alkol", "Ester", "CH₃COCH₃"]
    ], [
      ["Esterleşme tepkimesini genel denklemle yazıp esterlerin günlük hayattaki iki kullanım alanını belirtiniz.", "R–COOH + R′–OH → R–COO–R′ + H₂O. Kullanım: gıda ve kozmetikte koku-aroma maddeleri; yağlar (gliserin esterleri) ve sabun üretimi, çözücüler (etil asetat, oje çıkarıcı)."]
    ]]
  ]],
  ["Enerji Kaynakları ve Bilimsel Gelişmeler", 2, [
    ["Fosil Yakıtlar, Alternatif Enerji ve Sürdürülebilirlik", [
      "Fosil yakıtlar: kömür, petrol, doğal gaz; yanınca CO₂ (sera gazı) açığa çıkar",
      "Alternatif kaynaklar: güneş, rüzgâr, hidroelektrik, jeotermal, biyokütle, nükleer, hidrojen",
      "Hidrojen yakıt pilinde ürün sudur: 2H₂ + O₂ → 2H₂O",
      "Nanoteknoloji ve yeni malzemeler (grafen, karbon nanotüp)",
      "Sürdürülebilirlik: enerjiyi verimli kullanmak, yenilenebilir kaynaklara geçmek"
    ], [
      "Fosil yakıtlar milyonlarca yılda oluşur ve hızla tükenir; yanmalarıyla açığa çıkan CO₂ küresel ısınmaya katkıda bulunur. Bu yüzden yenilenebilir kaynaklara geçiş ve enerji verimliliği önemlidir.",
      "Yakıt pilleri kimyasal enerjiyi doğrudan elektriğe dönüştürür; hidrojen yakıt pilinin tek atığı sudur. Ancak hidrojenin üretimi ve depolanması enerji gerektirir."
    ], [
      ["Hangisi yenilenebilir bir enerji kaynağıdır?", "Jeotermal", "Kömür", "Petrol", "Doğal gaz", "Yer ısısı"],
      ["Hidrojen yakıt pilinin ürünü hangisidir?", "Su", "Karbondioksit", "Metan", "Kükürt dioksit", "2H₂ + O₂ → 2H₂O"],
      ["Fosil yakıtların yanmasıyla en çok açığa çıkan sera gazı hangisidir?", "CO₂", "O₂", "N₂", "He", "Karbondioksit"],
      ["Karbonun tek atom kalınlığındaki iki boyutlu yapısı hangisidir?", "Grafen", "Elmas", "Fulleren", "Kömür", "Grafen"]
    ], [
      ["Türkiye'nin enerji ihtiyacını karşılarken sürdürülebilirlik için hangi kaynakların öne çıkarılabileceğini iki gerekçeyle açıklayınız.", "Örnek: güneş (yüksek güneşlenme süresi, özellikle güney bölgeler), rüzgâr (Ege-Marmara kıyıları), jeotermal (Batı Anadolu fay hatları). Gerekçeler: yenilenebilir ve yerli kaynak olmaları dışa bağımlılığı azaltır; sera gazı salımları fosil yakıtlara göre çok düşüktür."]
    ]]
  ]]
]);

DERS("biyoloji", "bio", { ad: "Biyoloji", ikon: "🧬", renk: "#22a06b" }, [
  ["Genden Proteine", 1, [
    ["DNA'nın Yapısı, Replikasyon ve Protein Sentezi", [
      "Nükleotit: fosfat + deoksiriboz şekeri + organik baz (A, T, G, C)",
      "DNA çift sarmal; A–T (2 hidrojen bağı), G–C (3 hidrojen bağı) eşleşir",
      "Replikasyon yarı korunumlu: her yeni DNA bir eski bir yeni zincir taşır",
      "Transkripsiyon (çekirdekte): DNA → mRNA · Translasyon (ribozomda): mRNA → protein",
      "Kodon: mRNA'da amino asidi belirleyen üçlü baz dizisi; AUG başlama kodonu"
    ], [
      "Protein sentezinde bilgi DNA'dan RNA'ya, RNA'dan proteine aktarılır. tRNA, antikodonuyla mRNA'daki kodona eşleşerek doğru amino asidi ribozoma taşır; amino asitler peptit bağlarıyla birleşir.",
      "Mutasyon DNA'nın baz dizisindeki kalıcı değişikliktir. Tek bir baz değişikliği bile farklı bir amino asidin eklenmesine ve proteinin işlevinin bozulmasına yol açabilir (orak hücreli anemi gibi)."
    ], [
      ["DNA'da adenin bazının karşısına hangi baz gelir?", "Timin", "Guanin", "Sitozin", "Urasil", "A–T"],
      ["DNA'dan mRNA sentezlenmesine ne denir?", "Transkripsiyon", "Translasyon", "Replikasyon", "Mutasyon", "Yazılım"],
      ["Translasyon hücrenin neresinde gerçekleşir?", "Ribozomda", "Çekirdekçikte", "Lizozomda", "Golgide", "Ribozom"],
      ["Bir DNA molekülünde %20 adenin varsa guanin yüzde kaçtır?", "30", "20", "40", "60", "A = T = %20 → G + C = %60 → G = %30"]
    ], [
      ["DNA'nın kendini eşlemesinin (replikasyon) neden 'yarı korunumlu' olarak adlandırıldığını açıklayınız.", "Replikasyonda çift sarmal açılır ve her eski zincir kalıp olarak kullanılıp karşısına yeni nükleotitler eklenir. Oluşan iki DNA molekülünün her biri bir eski (korunan) ve bir yeni zincirden oluşur; bu yüzden yarı korunumludur."]
    ]]
  ]],
  ["Canlılarda Enerji Dönüşümleri", 1, [
    ["Fotosentez, Kemosentez ve Hücresel Solunum", [
      "Fotosentez: ışığa bağımlı tepkimeler (tilakoit zar: ATP, NADPH, O₂) + ışıktan bağımsız tepkimeler (Calvin döngüsü, stroma: glikoz)",
      "Fotosentezde açığa çıkan O₂ suyun parçalanmasından gelir",
      "Kemosentez: bazı bakterilerin inorganik maddelerin oksidasyon enerjisiyle besin üretmesi",
      "Oksijenli solunum: glikoliz (sitoplazma) → Krebs döngüsü (mitokondri matriksi) → ETS (iç zar)",
      "En çok ATP oksidatif fosforilasyonla (ETS) üretilir; son elektron alıcısı O₂"
    ], [
      "Fotosentez ve solunum, enerji dönüşümlerinin birbirini tamamlayan iki yönüdür: fotosentez ışık enerjisini glikozun kimyasal bağ enerjisine, solunum ise bu enerjiyi ATP'ye dönüştürür.",
      "Kemosentetik bakteriler (nitrit ve nitrat bakterileri gibi) güneş ışığı olmayan ortamlarda da besin üretebilir ve azot döngüsünde önemli rol oynar."
    ], [
      ["Fotosentezde açığa çıkan oksijenin kaynağı hangisidir?", "Su", "Karbondioksit", "Glikoz", "ATP", "Suyun fotolizi"],
      ["Calvin döngüsü kloroplastın neresinde gerçekleşir?", "Stroma", "Tilakoit zar", "Dış zar", "Granum boşluğu", "Işıktan bağımsız tepkimeler"],
      ["Oksijenli solunumda son elektron alıcısı hangisidir?", "Oksijen", "NAD⁺", "Pirüvat", "CO₂", "O₂ suya indirgenir"],
      ["Glikoliz hücrenin neresinde gerçekleşir?", "Sitoplazmada", "Mitokondri matriksinde", "Kloroplastta", "Çekirdekte", "Glikoliz"]
    ], [
      ["Fotosentez ile oksijenli solunumu gerçekleştiği organel, girdiler, ürünler ve enerji dönüşümü bakımından karşılaştırınız.", "Fotosentez: kloroplast; girdiler CO₂ + H₂O + ışık; ürünler glikoz + O₂; ışık enerjisi → kimyasal enerji. Solunum: sitoplazma + mitokondri; girdiler glikoz + O₂; ürünler CO₂ + H₂O + ATP; kimyasal bağ enerjisi → ATP."]
    ]]
  ]],
  ["Bitki Biyolojisi", 2, [
    ["Bitkilerin Yapısı, Taşıma ve Üreme", [
      "Doku sistemleri: meristem (bölünür), örtü, temel doku, iletim (ksilem: su-mineral, floem: organik besin)",
      "Su taşınması: kök basıncı, kılcallık, terleme-kohezyon (en etkili: terleme çekimi)",
      "Stomalar gaz alışverişi ve terlemeyi düzenler",
      "Bitki hormonları: oksin (büyüme, fototropizma), giberellin, sitokinin, absisik asit, etilen (meyve olgunlaşması)",
      "Çiçekli bitkilerde çift döllenme: bir sperm yumurtayı (zigot), diğeri polar çekirdekleri (endosperm) döller"
    ], [
      "Yapraklardan su buharlaştıkça ksilemdeki su sütunu, su moleküllerinin birbirine tutunması (kohezyon) sayesinde yukarı çekilir. Bu yüzden terleme, uzun ağaçlarda suyun taşınmasının ana itici gücüdür.",
      "Bitkinin ışığa doğru eğilmesi oksin hormonunun gölge tarafta birikip oradaki hücreleri daha çok uzatmasıyla açıklanır."
    ], [
      ["Bitkilerde su ve mineralleri taşıyan doku hangisidir?", "Ksilem", "Floem", "Meristem", "Epidermis", "Odun borusu"],
      ["Meyvelerin olgunlaşmasını hızlandıran gaz hâlindeki hormon hangisidir?", "Etilen", "Oksin", "Giberellin", "Sitokinin", "Etilen"],
      ["Suyun uzun ağaçlarda yukarı taşınmasında en etkili mekanizma hangisidir?", "Terleme-kohezyon çekimi", "Kök basıncı", "Difüzyon", "Aktif taşıma", "Terleme"],
      ["Çift döllenme hangi bitki grubuna özgüdür?", "Kapalı tohumlular", "Eğrelti otları", "Kara yosunları", "Açık tohumlular", "Çiçekli kapalı tohumlular"]
    ], [
      ["Sıcak ve kurak bir günde bitkinin stomalarını kapatmasının hem yararını hem zararını açıklayınız.", "Yararı: terlemeyle su kaybı azalır, bitki kurumaktan korunur. Zararı: CO₂ girişi azaldığı için fotosentez hızı düşer; ayrıca terleme azaldığından su ve mineral taşınması ile yaprakların serinlemesi azalır."]
    ]]
  ]],
  ["Canlılar ve Çevre", 2, [
    ["Ekosistemde Enerji Akışı, Madde Döngüleri ve Çevre Sorunları", [
      "Enerji akışı tek yönlü; her basamakta yaklaşık %10 aktarılır",
      "Madde döngüleri: su, karbon, azot (azot bağlama → amonifikasyon → nitrifikasyon → denitrifikasyon)",
      "Çevre sorunları: küresel iklim değişikliği, ozon tabakasının incelmesi, asit yağmurları, biyolojik birikim",
      "Biyoçeşitliliğin korunması: koruma alanları, gen bankaları, sürdürülebilir kaynak kullanımı",
      "Ekolojik ayak izi: bir kişinin tükettiği kaynakları karşılamak için gereken alan"
    ], [
      "Azot döngüsünde havadaki serbest azotu bitkiler doğrudan kullanamaz; azot bağlayıcı bakteriler (baklagillerin köklerindeki Rhizobium gibi) onu amonyağa çevirir, nitrifikasyon bakterileri nitrata dönüştürür.",
      "Fosil yakıt kullanımıyla atmosferdeki CO₂ oranı artar, sera etkisi güçlenir ve küresel sıcaklık yükselir. Bu durum buzulların erimesi, deniz seviyesinin yükselmesi ve aşırı hava olaylarıyla sonuçlanır."
    ], [
      ["Havadaki serbest azotu bağlayarak bitkilerin kullanabileceği hâle getiren canlılar hangileridir?", "Azot bağlayıcı bakteriler", "Otçul hayvanlar", "Mantarlar", "Algler", "Rhizobium vb."],
      ["Asit yağmurlarının temel nedeni hangisidir?", "Kükürt ve azot oksitleri", "Oksijen artışı", "Ozon artışı", "Su buharı", "SO₂, NOₓ"],
      ["Ozon tabakasının incelmesine en çok neden olan maddeler hangileridir?", "CFC'ler (kloroflorokarbonlar)", "CO₂", "Su buharı", "Metan", "Spreyler ve eski soğutucular"],
      ["Bir besin zincirinde üreticilerin enerjisi 10 000 kJ ise üçüncül tüketiciye yaklaşık kaç kJ ulaşır?", "10", "100", "1000", "1", "%10 kuralı: 10 000 → 1000 → 100 → 10"]
    ], [
      ["Küresel iklim değişikliğinin nedenini ve iki sonucunu açıklayıp bireysel olarak alınabilecek bir önlem yazınız.", "Neden: fosil yakıt kullanımı ve ormansızlaşmayla atmosferde sera gazlarının (özellikle CO₂) artması ve sera etkisinin güçlenmesi. Sonuçlar: buzulların erimesi ve deniz seviyesinin yükselmesi; kuraklık, sel gibi aşırı hava olaylarının artması. Önlem: toplu taşıma/bisiklet kullanmak, enerji tasarrufu, geri dönüşüm."]
    ]]
  ]]
]);
