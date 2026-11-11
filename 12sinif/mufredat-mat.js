// 12. sınıf Matematik: MEB 12. sınıf programına göre eksik üniteler (Trigonometri, Dönüşümler, Limit-Süreklilik, Çemberin Analitik İncelenmesi)
// ve var olan konulara çözümlü örnekler, ek anlatım, sık yapılan hatalar.
(function () {
  if (!window.MUF || !window.ICERIK || !ICERIK.matematik) return;

  MUF.unite("matematik", { id: "matutr", ad: "Trigonometri", donem: 1, sonra: "matu2" }, [
    {
      id: "mattr1", ad: "Toplam-Fark ve İki Kat Açı Formülleri",
      ozet: [
        "sin²x + cos²x = 1 · tan x = sin x / cos x · cot x = cos x / sin x",
        "sin(a ± b) = sin a · cos b ± cos a · sin b",
        "cos(a ± b) = cos a · cos b ∓ sin a · sin b (işaret ters döner)",
        "tan(a ± b) = (tan a ± tan b) / (1 ∓ tan a · tan b)",
        "sin 2a = 2 sin a · cos a · cos 2a = cos²a − sin²a = 2cos²a − 1 = 1 − 2sin²a",
        "tan 2a = 2 tan a / (1 − tan²a)"
      ],
      anlatim: [
        "Toplam-fark formülleri, değerini bildiğimiz açılardan (30°, 45°, 60°, 90°) yeni açıların trigonometrik değerlerini bulmamızı sağlar. Örneğin 75° = 45° + 30° ve 15° = 45° − 30° yazılarak sin 75° ve sin 15° hesaplanır.",
        "Kosinüste toplam formülünde işaret ters döner: cos(a + b) = cos a · cos b − sin a · sin b. En sık yapılan hata cos(a + b)'yi cos a + cos b sanmaktır; trigonometrik fonksiyonlar toplama üzerine dağılmaz.",
        "İki kat açı formülleri toplam formülünde a = b alınarak elde edilir: sin 2a = sin(a + a) = 2 sin a cos a. cos 2a'nın üç farklı yazılışı vardır; soruda sin a verilmişse 1 − 2sin²a, cos a verilmişse 2cos²a − 1 kullanmak işi kısaltır.",
        "Dar açılı bir dik üçgen çizmek değer bulmayı kolaylaştırır: sin x = 3/5 ise karşı kenar 3, hipotenüs 5, komşu kenar 4 olur; buradan cos x = 4/5, tan x = 3/4 okunur."
      ],
      sorular: [
        ["sin 75° kaçtır?", "(√6 + √2) / 4", "(√6 − √2) / 4", "(√3 + 1) / 2", "√2 / 4", "sin(45° + 30°) = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4"],
        ["x dar açı ve sin x = 3/5 ise sin 2x kaçtır?", "24/25", "6/5", "7/25", "12/25", "cos x = 4/5 → sin 2x = 2 · 3/5 · 4/5 = 24/25"],
        ["sin x = 3/5 ise cos 2x kaçtır?", "7/25", "24/25", "−7/25", "16/25", "cos 2x = 1 − 2sin²x = 1 − 18/25 = 7/25"],
        ["tan x = 1/2 ise tan(45° + x) kaçtır?", "3", "1/3", "3/2", "2", "(1 + 1/2) / (1 − 1/2) = 3"],
        ["cos²15° − sin²15° ifadesinin değeri kaçtır?", "√3 / 2", "1/2", "√2 / 2", "1", "cos²a − sin²a = cos 2a = cos 30° = √3/2"],
        ["2 sin 15° · cos 15° ifadesinin değeri kaçtır?", "1/2", "√3/2", "1", "1/4", "2 sin a cos a = sin 2a = sin 30° = 1/2"]
      ],
      acik: [
        ["sin 15° değerini fark formülünü kullanarak bulunuz.", "sin(45° − 30°) = sin 45° cos 30° − cos 45° sin 30° = (√2/2)(√3/2) − (√2/2)(1/2) = (√6 − √2)/4."],
        ["a ve b dar açı, tan a = 2 ve tan b = 3 ise tan(a + b) değerini ve a + b açısını bulunuz.", "tan(a + b) = (2 + 3)/(1 − 6) = −1. a ve b dar açı olduğundan a + b, 90° ile 180° arasındadır; tanjantı −1 olan açı 135°'dir."]
      ],
      ornek: [
        ["cos 105° değerini bulunuz.", "105° = 60° + 45° yazılır. cos(60° + 45°) = cos 60° cos 45° − sin 60° sin 45° = (1/2)(√2/2) − (√3/2)(√2/2) = (√2 − √6)/4. Sonuç negatiftir; bu beklenen bir durumdur çünkü 105° ikinci bölgededir ve orada kosinüs negatiftir."],
        ["x dar açı ve cos x = 4/5 ise sin 2x ve cos 2x değerlerini bulunuz.", "1) Dik üçgen: komşu 4, hipotenüs 5 → karşı kenar 3, sin x = 3/5. 2) sin 2x = 2 · (3/5) · (4/5) = 24/25. 3) cos 2x = cos²x − sin²x = 16/25 − 9/25 = 7/25. Kontrol: (24/25)² + (7/25)² = 625/625 = 1 ✓"],
        ["(sin x + cos x)² ifadesini sin 2x cinsinden yazınız.", "Açılım: sin²x + 2 sin x cos x + cos²x. sin²x + cos²x = 1 ve 2 sin x cos x = sin 2x olduğundan sonuç 1 + sin 2x olur."]
      ],
      hata: [
        "cos(a + b)'yi cos a + cos b sanmak: trigonometrik fonksiyonlar toplamaya dağılmaz.",
        "Kosinüs toplam formülünde işareti yanlış yazmak: cos(a + b) = cos a cos b EKSİ sin a sin b.",
        "sin 2a'yı 2 sin a sanmak: sin 2a = 2 sin a cos a."
      ]
    },
    {
      id: "mattr2", ad: "Trigonometrik Denklemler",
      ozet: [
        "sin x = a (|a| ≤ 1): x = α + 2kπ veya x = π − α + 2kπ",
        "cos x = a (|a| ≤ 1): x = α + 2kπ veya x = −α + 2kπ",
        "tan x = a: x = α + kπ (tanjantın periyodu π)",
        "|a| > 1 ise sin x = a ve cos x = a denklemlerinin çözümü yoktur",
        "k bir tam sayıdır; aralık verilmişse k'ye değer verilerek o aralıktaki kökler seçilir"
      ],
      anlatim: [
        "Trigonometrik denklemlerin sonsuz çözümü vardır çünkü sinüs ve kosinüs 2π, tanjant π periyotla tekrar eder. Önce birim çemberde bir temel çözüm (α) bulunur, sonra periyot eklenerek genel çözüm yazılır.",
        "sin x = 1/2 denkleminde birim çemberde sinüsü (yani y koordinatı) 1/2 olan iki nokta vardır: π/6 ve π − π/6 = 5π/6. Bu yüzden sinüs denklemlerinde ikinci çözüm π − α'dır. Kosinüs simetrisi x eksenine göre olduğundan ikinci çözüm −α (ya da 2π − α) olur.",
        "İkinci dereceden görünen denklemler (2sin²x − sin x − 1 = 0 gibi) sin x = t denilerek çarpanlara ayrılır. Ortak çarpan varken (sin x · (2cos x − 1) = 0 gibi) her iki tarafı sin x'e bölmek kök kaybettirir; çarpanların her biri ayrı ayrı sıfıra eşitlenmelidir."
      ],
      sorular: [
        ["[0, 2π) aralığında 2 sin x − 1 = 0 denkleminin çözüm kümesi hangisidir?", "{π/6, 5π/6}", "{π/6, 7π/6}", "{π/3, 2π/3}", "{π/6}", "sin x = 1/2 → x = π/6 ve π − π/6 = 5π/6"],
        ["[0, 2π) aralığında cos x = −1 denkleminin çözüm kümesi hangisidir?", "{π}", "{0}", "{π/2}", "{0, π}", "Birim çemberde x koordinatı −1 olan tek nokta π'dedir."],
        ["tan x = 1 denkleminin genel çözümü hangisidir? (k ∈ ℤ)", "π/4 + kπ", "π/4 + 2kπ", "π/2 + kπ", "kπ", "Tanjantın periyodu π'dir."],
        ["sin x = 2 denkleminin çözüm kümesi hangisidir?", "Boş küme", "{π/2}", "{2π}", "Tüm gerçek sayılar", "−1 ≤ sin x ≤ 1 olduğundan çözüm yoktur."],
        ["[0°, 360°) aralığında cos x = 1/2 denkleminin kaç çözümü vardır?", "2", "1", "3", "4", "x = 60° ve x = 300°"],
        ["[0, 2π) aralığında √3 tan x − 1 = 0 denkleminin kökleri toplamı kaçtır?", "4π/3", "π/3", "2π/3", "7π/6", "tan x = 1/√3 → π/6 ve 7π/6; toplam 8π/6 = 4π/3"]
      ],
      acik: [
        ["[0, 2π) aralığında 2sin²x − sin x − 1 = 0 denklemini çözünüz.", "sin x = t: 2t² − t − 1 = 0 → (2t + 1)(t − 1) = 0. t = 1 → x = π/2. t = −1/2 → x = 7π/6 ve 11π/6. Çözüm kümesi {π/2, 7π/6, 11π/6}."]
      ],
      ornek: [
        ["[0, 2π) aralığında sin 2x = sin x denklemini çözünüz.", "1) sin 2x = 2 sin x cos x yazılır: 2 sin x cos x − sin x = 0. 2) Ortak çarpan: sin x (2 cos x − 1) = 0. (sin x'e bölmek kök kaybettirir!) 3) sin x = 0 → x = 0, π. 4) cos x = 1/2 → x = π/3, 5π/3. Çözüm kümesi {0, π/3, π, 5π/3}."],
        ["cos x = −√2/2 denkleminin [0, 2π) aralığındaki çözümlerini bulunuz.", "Kosinüsü √2/2 olan dar açı π/4'tür. Kosinüs negatif olduğundan çözümler 2. ve 3. bölgededir: π − π/4 = 3π/4 ve π + π/4 = 5π/4."]
      ],
      hata: [
        "sin x = a denkleminde yalnızca α'yı yazıp π − α çözümünü unutmak.",
        "Denklemi sin x ya da cos x'e bölerek o çarpanın sıfır olduğu kökleri kaybetmek.",
        "Tanjantta periyodu 2π almak: tanjantın periyodu π'dir."
      ]
    }
  ]);

  MUF.unite("matematik", { id: "matudn", ad: "Dönüşümler", donem: 1, sonra: "matutr" }, [
    {
      id: "matdn1", ad: "Analitik Düzlemde Öteleme, Yansıma ve Dönme",
      ozet: [
        "Öteleme: (x, y) → (x + a, y + b) · a > 0 sağa, b > 0 yukarı",
        "x eksenine göre yansıma: (x, y) → (x, −y) · y eksenine göre: (x, y) → (−x, y)",
        "Orijine göre yansıma: (x, y) → (−x, −y) · y = x doğrusuna göre: (x, y) → (y, x) · y = −x'e göre: (−y, −x)",
        "Orijin etrafında pozitif yönde (saat yönünün tersine) dönme: 90° → (−y, x) · 180° → (−x, −y) · 270° → (y, −x)",
        "Fonksiyon grafiği: y = f(x − a) + b → a birim sağa, b birim yukarı · y = −f(x) x eksenine göre · y = f(−x) y eksenine göre yansıma",
        "Öteleme, yansıma ve dönme şeklin boyutunu ve alanını değiştirmez (eşlik dönüşümleri)"
      ],
      anlatim: [
        "Dönüşüm, düzlemdeki her noktayı belli bir kurala göre başka bir noktaya taşır. Öteleme, yansıma ve dönmede uzunluklar ve açılar korunur; bu yüzden şeklin görüntüsü kendisine eştir, yalnızca yeri ya da yönü değişir.",
        "Yansımada nokta ile görüntüsü, yansıma doğrusuna eşit uzaklıktadır ve onları birleştiren doğru parçası yansıma doğrusuna diktir. y = x doğrusuna göre yansımada koordinatların yer değiştirmesi bu yüzdendir.",
        "Fonksiyon grafiklerinde öteleme yönü sık karıştırılır: y = f(x − 3) grafiği 3 birim SAĞA kayar, çünkü eski grafikte x = 0'daki değer artık x = 3'te elde edilir. y = f(x) + 3 ise grafiği 3 birim yukarı taşır.",
        "Art arda dönüşümlerde sıra önemlidir: önce yansıtıp sonra ötelemek ile önce öteleyip sonra yansıtmak genellikle farklı sonuç verir. İşlemler verilen sırayla, adım adım yapılmalıdır."
      ],
      sorular: [
        ["A(2, −3) noktası 3 birim sola ve 5 birim yukarı ötelenirse görüntüsü hangisidir?", "(−1, 2)", "(5, 2)", "(−1, −8)", "(5, −8)", "(2 − 3, −3 + 5) = (−1, 2)"],
        ["A(4, 1) noktasının y = x doğrusuna göre yansıması hangisidir?", "(1, 4)", "(−4, 1)", "(4, −1)", "(−1, −4)", "Koordinatlar yer değiştirir."],
        ["B(3, 2) noktası orijin etrafında pozitif yönde 90° döndürülürse görüntüsü hangisidir?", "(−2, 3)", "(2, −3)", "(−3, −2)", "(3, −2)", "90° pozitif dönme: (x, y) → (−y, x)"],
        ["y = x² grafiği 2 birim sağa ve 1 birim aşağı ötelenirse yeni grafiğin denklemi hangisidir?", "y = (x − 2)² − 1", "y = (x + 2)² − 1", "y = (x − 2)² + 1", "y = (x + 2)² + 1", "Sağa 2: x yerine x − 2; aşağı 1: −1"],
        ["C(−5, 4) noktasının orijine göre yansıması hangisidir?", "(5, −4)", "(−5, −4)", "(5, 4)", "(4, −5)", "(x, y) → (−x, −y)"],
        ["Alanı 12 birimkare olan bir üçgen x eksenine göre yansıtılıp 4 birim ötelenirse görüntünün alanı kaç birimkaredir?", "12", "24", "48", "6", "Yansıma ve öteleme alanı değiştirmez."]
      ],
      acik: [
        ["A(1, 1), B(4, 1), C(1, 3) üçgeni önce x eksenine göre yansıtılıyor, sonra 2 birim sağa ötelenıyor. Görüntünün köşelerini ve alanını bulunuz.", "Yansıma: (1, −1), (4, −1), (1, −3). Öteleme: A′(3, −1), B′(6, −1), C′(3, −3). Alan değişmez: taban 3, yükseklik 2 → 3 · 2 / 2 = 3 birimkare."]
      ],
      ornek: [
        ["P(−2, 5) noktası önce y eksenine göre yansıtılıyor, sonra orijin etrafında 180° döndürülüyor. Son görüntü nedir?", "1) y eksenine göre yansıma: (x, y) → (−x, y) → (2, 5). 2) 180° dönme: (x, y) → (−x, −y) → (−2, −5). Sonuç (−2, −5); bu aslında P'nin x eksenine göre yansımasıdır."],
        ["y = |x + 3| − 2 grafiği y = |x| grafiğinden nasıl elde edilir? Tepe noktası nerededir?", "x yerine x + 3 yazılmış: grafik 3 birim SOLA kayar. Sonra −2: 2 birim aşağı iner. y = |x|'in tepesi (0, 0) olduğundan yeni tepe (−3, −2) olur."]
      ],
      hata: [
        "y = f(x − a) grafiğini sola kaydırmak: x − a SAĞA, x + a SOLA kaydırır.",
        "90° dönmede işaretleri karıştırmak: pozitif yönde (x, y) → (−y, x).",
        "Art arda dönüşümlerde sırayı değiştirmek."
      ]
    }
  ]);

  MUF.konu("matematik", "matu3", 0, {
    id: "matlm1", ad: "Limit ve Süreklilik",
    ozet: [
      "lim(x→a) f(x) = L: x, a'ya yaklaştıkça f(x) L'ye yaklaşır",
      "Limitin var olması için soldan limit = sağdan limit olmalıdır",
      "0/0 belirsizliğinde ifade çarpanlarına ayrılır ve sadeleştirilir",
      "f, x = a'da süreklidir ⇔ f(a) tanımlı ve lim(x→a) f(x) = f(a)",
      "Polinom fonksiyonlar her yerde süreklidir · rasyonel fonksiyonlar paydayı sıfır yapmayan her yerde süreklidir",
      "lim(x→∞) (ax + b)/(cx + d) = a/c (en büyük dereceli terimlerin katsayıları oranı)"
    ],
    anlatim: [
      "Limit, bir fonksiyonun bir noktaya yaklaşırken hangi değere yaklaştığını inceler; o noktadaki değerle aynı olmak zorunda değildir. f(x) = (x² − 4)/(x − 2) fonksiyonu x = 2'de tanımsızdır, ama x 2'ye yaklaştıkça değerler 4'e yaklaşır; bu yüzden limiti 4'tür.",
      "Soldan limit, x'in a'ya küçük değerlerden; sağdan limit büyük değerlerden yaklaşmasıdır. Parçalı fonksiyonlarda kırılma noktasında iki taraf ayrı ayrı hesaplanır; eşit değilse limit yoktur.",
      "Doğrudan yerine koyma 0/0 veriyorsa bu bir belirsizliktir, sonuç değildir. Pay ve payda çarpanlarına ayrılır, ortak çarpan sadeleşir, sonra yerine konur. Bu sadeleştirme, türev tanımındaki limitin hesaplanmasının da temelidir.",
      "Süreklilik, grafiğin kalem kaldırmadan çizilebilmesidir. Bir noktada sürekli olmak için üç koşul birlikte gerekir: fonksiyon o noktada tanımlı olmalı, limit var olmalı ve limit fonksiyon değerine eşit olmalıdır."
    ],
    sorular: [
      ["lim(x→2) (x² − 4)/(x − 2) kaçtır?", "4", "0", "2", "Tanımsızdır", "(x − 2)(x + 2)/(x − 2) = x + 2 → 4"],
      ["lim(x→3) (2x + 1) kaçtır?", "7", "6", "5", "9", "Polinomda doğrudan yerine konur: 2·3 + 1"],
      ["f(x) = x + 1 (x < 1) ve f(x) = 3x − 1 (x ≥ 1) ise lim(x→1) f(x) kaçtır?", "2", "1", "3", "Limit yoktur", "Soldan 1 + 1 = 2, sağdan 3 − 1 = 2; eşit olduğundan limit 2"],
      ["f(x) = (x² − 1)/(x − 1) fonksiyonu x = 1'de neden sürekli değildir?", "f(1) tanımsızdır", "Limiti yoktur", "Limiti 0'dır", "Süreklidir", "Payda sıfır olur; limit 2 olsa da f(1) tanımlı değildir."],
      ["lim(x→∞) (3x + 1)/(x − 2) kaçtır?", "3", "−1/2", "1", "∞", "En büyük dereceli terimlerin katsayıları oranı: 3/1"],
      ["lim(x→−1) (x² + 3x + 2)/(x + 1) kaçtır?", "1", "0", "2", "−1", "(x + 1)(x + 2)/(x + 1) = x + 2 → −1 + 2 = 1"]
    ],
    acik: [
      ["f(x) = ax + 2 (x < 2) ve f(x) = x² + 1 (x ≥ 2) fonksiyonu her yerde sürekli olduğuna göre a kaçtır?", "x = 2'de soldan limit 2a + 2, sağdan limit ve f(2) = 5. Süreklilik için 2a + 2 = 5 → a = 3/2."]
    ],
    ornek: [
      ["lim(x→3) (x² − 9)/(x² − 3x) limitini hesaplayınız.", "1) Yerine koyma: (9 − 9)/(9 − 9) = 0/0 → belirsizlik. 2) Çarpanlara ayır: (x − 3)(x + 3) / x(x − 3). 3) Sadeleştir: (x + 3)/x. 4) Yerine koy: 6/3 = 2."],
      ["f(x) = (x² − 4)/(x − 2) (x ≠ 2) ve f(2) = k ise f'nin x = 2'de sürekli olması için k kaç olmalıdır?", "lim(x→2) f(x) = lim(x + 2) = 4. Süreklilik için f(2) = limit olmalı: k = 4."]
    ],
    hata: [
      "0/0'ı sonuç sanıp 'limit 0' ya da 'limit yok' demek: 0/0 bir belirsizliktir, sadeleştirme gerekir.",
      "Limit ile fonksiyon değerini aynı şey sanmak: limit var olduğu hâlde f(a) farklı ya da tanımsız olabilir.",
      "Parçalı fonksiyonda yalnızca bir taraftan limit almak."
    ]
  });

  MUF.unite("matematik", { id: "matucm", ad: "Analitik Geometri: Çember", donem: 2 }, [
    {
      id: "matcm1", ad: "Çemberin Analitik İncelenmesi",
      ozet: [
        "Merkezi M(a, b), yarıçapı r olan çember: (x − a)² + (y − b)² = r²",
        "Genel denklem: x² + y² + Dx + Ey + F = 0 · merkez (−D/2, −E/2) · r = ½√(D² + E² − 4F)",
        "Noktanın doğruya uzaklığı: d = |Ax₀ + By₀ + C| / √(A² + B²)",
        "Doğru-çember: d < r → iki noktada keser · d = r → teğettir · d > r → kesişmez",
        "Nokta-çember: |PM| < r içinde · |PM| = r üzerinde · |PM| > r dışında",
        "İki nokta arası uzaklık: |AB| = √((x₂ − x₁)² + (y₂ − y₁)²)"
      ],
      anlatim: [
        "Çember, merkeze eşit uzaklıktaki noktaların kümesidir. Bir P(x, y) noktasının merkeze uzaklığı iki nokta arası uzaklık formülüyle yazılıp r'ye eşitlenirse çemberin denklemi elde edilir: √((x − a)² + (y − b)²) = r.",
        "Denklemde (x − a) gören merkezin apsisini +a, (x + a) gören −a almalıdır. Örneğin (x + 2)² + (y − 3)² = 16 çemberinin merkezi (−2, 3), yarıçapı 4'tür (16 değil).",
        "Genel denklemden merkez ve yarıçap bulmak için ya formül kullanılır ya da tam kareye tamamlanır: x² − 6x = (x − 3)² − 9 gibi. D² + E² − 4F < 0 ise denklem bir çember belirtmez.",
        "Bir doğrunun çemberle konumunu bulmak için merkezin doğruya uzaklığı (d) yarıçapla karşılaştırılır. Teğet doğru, çemberi tek noktada keser ve teğet noktasındaki yarıçapa diktir."
      ],
      sorular: [
        ["Merkezi (2, −1), yarıçapı 3 olan çemberin denklemi hangisidir?", "(x − 2)² + (y + 1)² = 9", "(x + 2)² + (y − 1)² = 9", "(x − 2)² + (y + 1)² = 3", "(x − 2)² + (y − 1)² = 9", "(x − a)² + (y − b)² = r²"],
        ["x² + y² − 6x + 4y − 3 = 0 çemberinin merkezi hangisidir?", "(3, −2)", "(−3, 2)", "(6, −4)", "(−6, 4)", "(−D/2, −E/2) = (3, −2)"],
        ["x² + y² − 6x + 4y − 3 = 0 çemberinin yarıçapı kaçtır?", "4", "16", "2", "√13", "r = ½√(36 + 16 + 12) = ½ · 8 = 4"],
        ["x² + y² = 25 çemberi ile y = 5 doğrusunun konumu nedir?", "Teğettir", "İki noktada keser", "Kesişmez", "Doğru merkezden geçer", "Merkezin doğruya uzaklığı 5 = r"],
        ["(3, 4) noktası x² + y² = 25 çemberine göre nerededir?", "Çemberin üzerindedir", "Çemberin içindedir", "Çemberin dışındadır", "Çemberin merkezidir", "3² + 4² = 25"],
        ["(x + 1)² + (y − 4)² = 49 çemberinin merkezi ve yarıçapı hangisidir?", "(−1, 4) ve 7", "(1, −4) ve 7", "(−1, 4) ve 49", "(1, 4) ve 7", "(x + 1) → a = −1; r² = 49 → r = 7"]
      ],
      acik: [
        ["Merkezi (1, 2) olan ve 3x + 4y + 4 = 0 doğrusuna teğet olan çemberin denklemini yazınız.", "Teğet olduğundan r = merkezin doğruya uzaklığı: d = |3·1 + 4·2 + 4| / √(9 + 16) = 15/5 = 3. Denklem: (x − 1)² + (y − 2)² = 9."]
      ],
      ornek: [
        ["Çapının uç noktaları A(−1, 3) ve B(5, −5) olan çemberin denklemini bulunuz.", "1) Merkez, çapın orta noktasıdır: ((−1 + 5)/2, (3 − 5)/2) = (2, −1). 2) |AB| = √(6² + 8²) = 10 → r = 5. 3) Denklem: (x − 2)² + (y + 1)² = 25."],
        ["x² + y² + 4x − 2y − 4 = 0 çemberinin merkez ve yarıçapını tam kareye tamamlayarak bulunuz.", "(x² + 4x + 4) + (y² − 2y + 1) = 4 + 4 + 1 → (x + 2)² + (y − 1)² = 9. Merkez (−2, 1), yarıçap 3."]
      ],
      hata: [
        "(x + a) görünce merkezin apsisini +a almak: (x + 2)² → merkezin apsisi −2'dir.",
        "Denklemin sağındaki sayıyı yarıçap sanmak: sağdaki sayı r²'dir.",
        "Teğetlik için merkezin doğruya uzaklığını yarıçapa eşitlemeyi unutmak."
      ]
    }
  ]);

  // Yeni konuların soru üreteçleri (genel üreteçlerden önce tanımlanır)
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
  const kesir = (p, q) => { const g = (a, b) => (b ? g(b, a % b) : Math.abs(a)); const d = g(p, q) || 1; p /= d; q /= d; if (q < 0) { p = -p; q = -q; } return q === 1 ? z(p) : (p < 0 ? "−" : "") + Math.abs(p) + "/" + q; };
  const UCGEN = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]];
  U.mattr1 = U.mattr1 || tip([
    () => { const [p, q, h] = pick(UCGEN); return soru(`x dar açı ve sin x = ${p}/${h} ise sin 2x kaçtır?`, kesir(2 * p * q, h * h), [kesir(2 * p, h), kesir(q * q - p * p, h * h), kesir(p * q, h * h), kesir(2 * q, h)], `cos x = ${q}/${h} → sin 2x = 2 · ${p}/${h} · ${q}/${h} = ${kesir(2 * p * q, h * h)}`); },
    () => { const [p, q, h] = pick(UCGEN); return soru(`x dar açı ve cos x = ${q}/${h} ise cos 2x kaçtır?`, kesir(q * q - p * p, h * h), [kesir(p * p - q * q, h * h), kesir(2 * p * q, h * h), kesir(2 * q, h), kesir(q * q, h * h)], `cos 2x = 2cos²x − 1 = ${kesir(2 * q * q, h * h)} − 1 = ${kesir(q * q - p * p, h * h)}`); },
    () => { const t = pick([2, 3, 4, 5]), s = pick([1, 2, 3]); if (t * s === 1) return null; return soru(`tan a = ${t} ve tan b = ${s} ise tan(a + b) kaçtır?`, kesir(t + s, 1 - t * s), [kesir(t + s, 1 + t * s), kesir(t - s, 1 + t * s), z(t + s), kesir(t * s, t + s)], `(${t} + ${s}) / (1 − ${t}·${s}) = ${kesir(t + s, 1 - t * s)}`); },
    () => { const [p, q] = pick(UCGEN); const t = kesir(p, q); return soru(`x dar açı ve tan x = ${t} ise tan 2x kaçtır?`, kesir(2 * p * q, q * q - p * p), [kesir(2 * p, q), kesir(2 * p * q, q * q + p * p), kesir(q * q - p * p, 2 * p * q), kesir(p * q, q * q - p * p)], `tan 2x = 2tan x / (1 − tan²x) = ${kesir(2 * p * q, q * q - p * p)}`); }
  ]);
  const TABLO = [
    ["sin x = 1/2", "30° ve 150°"], ["sin x = √3/2", "60° ve 120°"], ["sin x = √2/2", "45° ve 135°"], ["sin x = −1/2", "210° ve 330°"], ["sin x = 1", "yalnızca 90°"], ["sin x = 0", "0° ve 180°"],
    ["cos x = 1/2", "60° ve 300°"], ["cos x = −1/2", "120° ve 240°"], ["cos x = √2/2", "45° ve 315°"], ["cos x = 0", "90° ve 270°"], ["cos x = −1", "yalnızca 180°"],
    ["tan x = 1", "45° ve 225°"], ["tan x = √3", "60° ve 240°"], ["tan x = −1", "135° ve 315°"], ["tan x = 0", "0° ve 180°"]
  ];
  U.mattr2 = tip([
    () => { const [d, c] = pick(TABLO); const y = karis(TABLO.filter((x) => x[1] !== c)).slice(0, 3).map((x) => x[1]); return soru(`[0°, 360°) aralığında ${d} denkleminin çözümleri hangisidir?`, c, y, `Birim çemberde ${d.split(" =")[0]} değeri ${d.split("= ")[1]} olan açılar: ${c}`); },
    () => { const v = pick([2, 3, -2, 1.5]); const f = pick(["sin", "cos"]); return soru(`${f} x = ${String(v).replace(".", ",").replace("-", "−")} denkleminin çözüm kümesi hangisidir?`, "Boş küme", ["Tüm gerçek sayılar", "{90°}", "{0°, 180°}"], `−1 ≤ ${f} x ≤ 1 olduğundan çözüm yoktur.`); },
    () => { const f = pick([["tan", "π"], ["sin", "2π"], ["cos", "2π"]]); return soru(`${f[0]} x fonksiyonunun esas periyodu kaçtır?`, f[1], karis(["π", "2π", "π/2", "4π"].filter((x) => x !== f[1])), `${f[0]} için periyot ${f[1]}`); }
  ]);
  U.matlm1 = tip([
    () => { const a = r(-6, 6); if (!a) return null; const s = a < 0 ? "+" : "−"; return soru(`lim(x→${z(a)}) (x² − ${a * a}) / (x ${s} ${Math.abs(a)}) kaçtır?`, z(2 * a), [z(a), "0", "Tanımsızdır", z(a * a)].filter((x) => x !== z(2 * a)), `(x ${s} ${Math.abs(a)})(x ${a < 0 ? "−" : "+"} ${Math.abs(a)}) sadeleşir → x ${a < 0 ? "−" : "+"} ${Math.abs(a)} → ${z(2 * a)}`); },
    () => { const a = r(1, 5), b = r(-6, 6), c = r(1, 4), d = r(-6, 6); if (!b || !d) return null; return soru(`lim(x→∞) (${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}) / (${c}x ${d < 0 ? "−" : "+"} ${Math.abs(d)}) kaçtır?`, kesir(a, c), [kesir(b, d || 1), kesir(c, a), "∞", "0"].filter((x) => x !== kesir(a, c)), `En büyük dereceli terimlerin katsayıları oranı: ${a}/${c}`); },
    () => { const p = r(1, 4), q = r(-5, 5), a = r(-3, 3); const v = p * a * a + q; return soru(`lim(x→${z(a)}) (${p === 1 ? "" : p}x² ${q < 0 ? "−" : "+"} ${Math.abs(q)}) kaçtır?`, z(v), [z(v + 1), z(v - p), z(p * a + q), z(-v)], `Polinomda doğrudan yerine konur: ${p}·(${z(a)})² ${q < 0 ? "−" : "+"} ${Math.abs(q)} = ${z(v)}`); }
  ]);
  U.matdn1 = tip([
    () => { const x = r(-6, 6), y = r(-6, 6), a = r(-5, 5), b = r(-5, 5); if (!a || !b) return null; const yon = `${Math.abs(a)} birim ${a > 0 ? "sağa" : "sola"} ve ${Math.abs(b)} birim ${b > 0 ? "yukarı" : "aşağı"}`; return soru(`(${z(x)}, ${z(y)}) noktası ${yon} ötelenirse görüntüsü hangisidir?`, `(${z(x + a)}, ${z(y + b)})`, [`(${z(x - a)}, ${z(y + b)})`, `(${z(x + a)}, ${z(y - b)})`, `(${z(x - a)}, ${z(y - b)})`, `(${z(x + b)}, ${z(y + a)})`], `(x + a, y + b)`); },
    () => { const x = r(-7, 7), y = r(-7, 7); if (!x || !y || x === y || x === -y) return null; const t = pick([["x eksenine", [x, -y]], ["y eksenine", [-x, y]], ["orijine", [-x, -y]], ["y = x doğrusuna", [y, x]], ["y = −x doğrusuna", [-y, -x]]]); const f = (p) => `(${z(p[0])}, ${z(p[1])})`; return soru(`(${z(x)}, ${z(y)}) noktasının ${t[0]} göre yansıması hangisidir?`, f(t[1]), [f([x, -y]), f([-x, y]), f([-x, -y]), f([y, x]), f([-y, -x])].filter((s) => s !== f(t[1])), `${t[0]} göre yansıma kuralı uygulanır.`); },
    () => { const x = r(-7, 7), y = r(-7, 7); if (!x || !y || Math.abs(x) === Math.abs(y)) return null; const t = pick([["90°", [-y, x]], ["180°", [-x, -y]], ["270°", [y, -x]]]); const f = (p) => `(${z(p[0])}, ${z(p[1])})`; return soru(`(${z(x)}, ${z(y)}) noktası orijin etrafında pozitif yönde ${t[0]} döndürülürse görüntüsü hangisidir?`, f(t[1]), [f([-y, x]), f([-x, -y]), f([y, -x]), f([x, -y])].filter((s) => s !== f(t[1])), `${t[0]} dönme kuralı`); }
  ]);
  U.matcm1 = tip([
    () => { const a = r(-6, 6), b = r(-6, 6), R = r(2, 7); const t = (v, h) => (v === 0 ? h + "²" : `(${h} ${v > 0 ? "−" : "+"} ${Math.abs(v)})²`); return soru(`Merkezi (${z(a)}, ${z(b)}), yarıçapı ${R} olan çemberin denklemi hangisidir?`, `${t(a, "x")} + ${t(b, "y")} = ${R * R}`, [`${t(-a, "x")} + ${t(-b, "y")} = ${R * R}`, `${t(a, "x")} + ${t(b, "y")} = ${R}`, `${t(-a, "x")} + ${t(b, "y")} = ${R * R}`, `${t(a, "x")} + ${t(-b, "y")} = ${R}`], `(x − a)² + (y − b)² = r²`); },
    () => { const a = r(-5, 5), b = r(-5, 5), R = r(2, 6); if (!a || !b) return null; const D = -2 * a, E = -2 * b, F = a * a + b * b - R * R; const s = (v, h) => `${v < 0 ? "−" : "+"} ${Math.abs(v)}${h}`; const den = `x² + y² ${s(D, "x")} ${s(E, "y")} ${F ? s(F, "") : ""} = 0`; return pick([soru(`${den} çemberinin merkezi hangisidir?`, `(${z(a)}, ${z(b)})`, [`(${z(-a)}, ${z(-b)})`, `(${z(D)}, ${z(E)})`, `(${z(a)}, ${z(-b)})`], `(−D/2, −E/2)`), soru(`${den} çemberinin yarıçapı kaçtır?`, R, [R * R, R + 1, R - 1 || R + 2], `r = ½√(D² + E² − 4F) = ${R}`)]); },
    () => { const R = pick([5, 10, 13, 25]); const nok = { 5: [3, 4], 10: [6, 8], 13: [5, 12], 25: [7, 24] }[R]; const k = pick([0, 1, -1]); const P = [nok[0] + k, nok[1]]; const d2 = P[0] ** 2 + P[1] ** 2; const c = d2 === R * R ? "Çemberin üzerindedir" : d2 < R * R ? "Çemberin içindedir" : "Çemberin dışındadır"; return soru(`(${P[0]}, ${P[1]}) noktası x² + y² = ${R * R} çemberine göre nerededir?`, c, ["Çemberin üzerindedir", "Çemberin içindedir", "Çemberin dışındadır", "Çemberin merkezidir"].filter((x) => x !== c), `${P[0]}² + ${P[1]}² = ${d2}, r² = ${R * R}`); }
  ]);

  // Var olan konular: çözümlü örnekler, ek anlatım ve sık yapılan hatalar
  MUF.zengin("mat1k1", {
    anlatim: [
      "Üstel fonksiyon y = aˣ'in grafiği her zaman (0, 1) noktasından geçer ve x eksenine yaklaşır ama değmez (y = 0 yatay asimptot). Logaritma fonksiyonu y = logₐ x ise (1, 0)'dan geçer ve y eksenine yaklaşır (x = 0 düşey asimptot).",
      "Üstel ve logaritmik eşitsizliklerde taban 1'den büyükse eşitsizliğin yönü korunur; taban 0 ile 1 arasındaysa yön değişir. Örneğin (1/2)ˣ > (1/2)³ ise x < 3'tür."
    ],
    ornek: [
      ["3ˣ⁺¹ = 81 denklemini çözünüz.", "81 = 3⁴ yazılır: 3ˣ⁺¹ = 3⁴. Tabanlar eşit olduğundan üsler eşittir: x + 1 = 4 → x = 3."],
      ["log₂(x + 3) + log₂(x − 3) = 4 denklemini çözünüz.", "1) Toplam → çarpım: log₂[(x + 3)(x − 3)] = 4. 2) x² − 9 = 2⁴ = 16 → x² = 25 → x = 5 ya da x = −5. 3) Tanım koşulu: x − 3 > 0 → x > 3. Bu yüzden yalnızca x = 5 çözümdür."],
      ["log₃ 5 = a ise log₃ 45 ifadesini a cinsinden yazınız.", "45 = 9 · 5 → log₃ 45 = log₃ 9 + log₃ 5 = 2 + a."]
    ],
    hata: [
      "log(x + y)'yi log x + log y sanmak: toplamın değil çarpımın logaritması toplanır.",
      "Logaritmalı denklemde tanım koşulunu (logaritmanın içi pozitif) kontrol etmemek.",
      "Tabanı 1'den küçük üstel eşitsizlikte yönü çevirmeyi unutmak."
    ]
  });

  MUF.zengin("mat2k1", {
    anlatim: [
      "Dizi, tanım kümesi pozitif doğal sayılar olan bir fonksiyondur; aₙ dizinin genel terimidir. aₙ = 2n + 1 dizisinin terimleri 3, 5, 7, 9, … şeklindedir. Her terim bir öncekinden büyükse dizi artan, küçükse azalandır.",
      "Bazı diziler bir önceki terimlere bağlı olarak tanımlanır (özyinelemeli tanım). Fibonacci dizisinde aₙ = aₙ₋₁ + aₙ₋₂ kuralıyla 1, 1, 2, 3, 5, 8, 13, … terimleri elde edilir."
    ],
    ornek: [
      ["5, 9, 13, …, 101 aritmetik dizisi kaç terimlidir?", "a₁ = 5, d = 4. aₙ = 5 + (n − 1) · 4 = 101 → (n − 1) · 4 = 96 → n − 1 = 24 → n = 25 terim."],
      ["Bir geometrik dizide a₂ = 6 ve a₅ = 162 ise ilk terimi ve ortak çarpanı bulunuz.", "a₅ / a₂ = r³ = 162 / 6 = 27 → r = 3. a₂ = a₁ · r → 6 = a₁ · 3 → a₁ = 2."],
      ["İlk terimi 3, ortak farkı 2 olan aritmetik dizinin ilk 20 teriminin toplamını bulunuz.", "a₂₀ = 3 + 19 · 2 = 41. S₂₀ = 20 · (3 + 41) / 2 = 10 · 44 = 440."]
    ],
    hata: [
      "Genel terim formülünde (n − 1) yerine n kullanmak.",
      "Geometrik dizide terim farkı, aritmetik dizide terim oranı aramak.",
      "Geometrik toplam formülünü r = 1 iken kullanmak (bu durumda Sₙ = n · a₁)."
    ]
  });

  MUF.zengin("mat3k1", {
    ornek: [
      ["f(x) = x³ − 2x + 1 ise f′(2) kaçtır?", "f′(x) = 3x² − 2. f′(2) = 3 · 4 − 2 = 10."],
      ["f(x) = (2x + 1)⁴ fonksiyonunun türevini bulunuz.", "Zincir kuralı: dıştaki fonksiyonun türevi × içtekinin türevi. f′(x) = 4(2x + 1)³ · 2 = 8(2x + 1)³."],
      ["y = x² eğrisine x = 3 noktasında çizilen teğetin denklemini bulunuz.", "1) Teğet noktası: (3, 9). 2) Eğim: y′ = 2x → m = 6. 3) Doğru denklemi: y − 9 = 6(x − 3) → y = 6x − 9."]
    ],
    hata: [
      "Zincir kuralında içteki fonksiyonun türevini çarpmayı unutmak.",
      "Çarpımın türevini türevlerin çarpımı sanmak: (f · g)′ = f′g + fg′.",
      "Sabitin türevini sabitin kendisi sanmak: (c)′ = 0."
    ]
  });

  MUF.zengin("mat3k2", {
    ornek: [
      ["f(x) = x³ − 3x fonksiyonunun artan-azalan olduğu aralıkları ve yerel ekstremumlarını bulunuz.", "1) f′(x) = 3x² − 3 = 0 → x = −1, x = 1. 2) İşaret tablosu: x < −1'de f′ > 0 (artan), −1 < x < 1'de f′ < 0 (azalan), x > 1'de f′ > 0 (artan). 3) x = −1'de yerel maksimum: f(−1) = 2. x = 1'de yerel minimum: f(1) = −2."],
      ["Çevresi 40 m olan dikdörtgen biçimli bir bahçenin alanı en çok kaç m² olabilir?", "1) Kenarlar x ve 20 − x → A(x) = x(20 − x) = 20x − x². 2) A′(x) = 20 − 2x = 0 → x = 10. 3) A″ = −2 < 0 olduğundan maksimumdur. En büyük alan 10 · 10 = 100 m² (kare)."]
    ],
    hata: [
      "f′(a) = 0 olan her noktayı ekstremum sanmak: f(x) = x³'te f′(0) = 0'dır ama türev işaret değiştirmediği için ekstremum yoktur.",
      "Kapalı aralıkta mutlak ekstremum ararken aralığın uç noktalarını kontrol etmemek."
    ]
  });

  MUF.zengin("mat4k1", {
    anlatim: [
      "İntegral türevin tersidir: türevi f(x) olan fonksiyonlara f'nin ilkelleri denir ve ∫ f(x) dx = F(x) + C yazılır. Temel kural: ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1), ∫ (1/x) dx = ln|x| + C.",
      "Belirli integral ∫ₐᵇ f(x) dx = F(b) − F(a) şeklinde hesaplanır (C sadeleşir). f(x) ≥ 0 ise bu değer, grafik ile x ekseni arasında a ile b arasında kalan alana eşittir; eksenin altında kalan bölgede integral negatif çıkar, alan için mutlak değer alınır."
    ],
    ornek: [
      ["∫ (3x² − 4x + 5) dx integralini hesaplayınız.", "Her terim ayrı integrallenir: ∫3x² dx = x³, ∫(−4x) dx = −2x², ∫5 dx = 5x. Sonuç: x³ − 2x² + 5x + C."],
      ["∫₁³ 2x dx belirli integralini hesaplayınız.", "İlkel: x². F(3) − F(1) = 9 − 1 = 8."],
      ["y = x² eğrisi, x ekseni ve x = 3 doğrusu arasında kalan alanı bulunuz.", "Alan = ∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9 birimkare."]
    ],
    hata: [
      "Belirsiz integralde + C'yi unutmak.",
      "Belirli integralde F(b) − F(a) yerine yalnızca F(b) yazmak.",
      "x ekseninin altında kalan bölgenin alanını negatif bırakmak."
    ]
  });
})();
