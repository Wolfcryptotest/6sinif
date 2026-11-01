// 11. sınıf Matematik, Fizik, Kimya, Biyoloji (konu sırası okulunuzun yıllık planına göre değişebilir)
DERS("matematik", "mat", { ad: "Matematik", ikon: "➗", renk: "#4f7cff" }, [
  ["Trigonometri", 1, [
    ["Yönlü Açılar, Birim Çember ve Trigonometrik Oranlar", [
      "Radyan: π rad = 180° → 60° = π/3, 45° = π/4, 30° = π/6",
      "Birim çemberde: cos x = apsis, sin x = ordinat · −1 ≤ sin x, cos x ≤ 1",
      "sin²x + cos²x = 1 · tan x = sin x / cos x · cot x = cos x / sin x",
      "Özel değerler: sin30 = 1/2, sin45 = √2/2, sin60 = √3/2, cos60 = 1/2, tan45 = 1",
      "İşaretler: I. bölge hepsi +, II. sin +, III. tan-cot +, IV. cos +"
    ], [
      "Trigonometrik oranlar dik üçgende kenarların oranı olarak tanımlanır; birim çember ile bu tanım tüm gerçek sayılara genişletilir. Birim çember üzerindeki bir noktanın apsisi açının kosinüsü, ordinatı sinüsüdür. Bu yüzden sinüs ve kosinüs değerleri −1 ile 1 arasındadır ve sin²x + cos²x = 1 özdeşliği Pisagor bağıntısından gelir.",
      "Açının bulunduğu bölge oranın işaretini belirler. 90°'den büyük açıların değerleri, dar açılara indirgenerek bulunur: sin 150° = sin 30° = 1/2, cos 120° = −cos 60° = −1/2."
    ], [
      ["120° kaç radyandır?", "2π/3", "π/3", "3π/4", "5π/6", "120 · π/180"],
      ["sin x = 3/5 ve x dar açı ise cos x kaçtır?", "4/5", "3/4", "5/4", "2/5", "√(1 − 9/25) = 4/5"],
      ["cos 120° kaçtır?", "−1/2", "1/2", "√3/2", "−√3/2", "II. bölgede cos negatif."],
      ["sin 30° + cos 60° + tan 45° toplamı kaçtır?", "2", "3/2", "1", "5/2", "1/2 + 1/2 + 1"],
      ["Hangi bölgede sinüs negatif, kosinüs pozitiftir?", "IV. bölge", "II. bölge", "III. bölge", "I. bölge", "IV: cos +"]
    ], [
      ["sin²x + cos²x = 1 özdeşliğini birim çember ve Pisagor bağıntısıyla gerekçelendiriniz.", "Birim çember üzerindeki P(cos x, sin x) noktası için orijinden uzaklık 1'dir. Dik kenarları |cos x| ve |sin x|, hipotenüsü 1 olan dik üçgende Pisagor'dan cos²x + sin²x = 1 elde edilir."],
      ["tan x = 2 ve x dar açı ise sin x ve cos x değerlerini bulunuz.", "Karşı 2, komşu 1 → hipotenüs √5. sin x = 2/√5 = 2√5/5, cos x = 1/√5 = √5/5."]
    ]],
    ["Sinüs ve Kosinüs Teoremleri", [
      "Kosinüs teoremi: a² = b² + c² − 2bc · cos A",
      "Sinüs teoremi: a / sin A = b / sin B = c / sin C = 2R",
      "Üçgenin alanı = ½ · b · c · sin A",
      "İki kenar ve aradaki açı → kosinüs · iki açı ve bir kenar → sinüs teoremi"
    ], [
      "Dik olmayan üçgenlerde kenar ve açı hesabında kosinüs ve sinüs teoremleri kullanılır. İki kenarı ve aralarındaki açısı bilinen üçgenin üçüncü kenarı kosinüs teoremiyle bulunur; A = 90° olduğunda cos A = 0 olur ve teorem Pisagor bağıntısına dönüşür.",
      "Sinüs teoremi, bir üçgende kenarların karşı açıların sinüsleriyle orantılı olduğunu söyler. Alan formülü ½·b·c·sin A, yüksekliğin b·sin A olmasından elde edilir."
    ], [
      ["b = 3, c = 5, A = 60° olan üçgende a² kaçtır?", "19", "34", "49", "15", "9 + 25 − 2·3·5·(1/2) = 19"],
      ["Kenarları 6 ve 8 cm, aradaki açı 30° olan üçgenin alanı kaç cm²'dir?", "12", "24", "48", "6", "½·6·8·½"],
      ["Kosinüs teoreminde A = 90° alınırsa hangi bağıntı elde edilir?", "Pisagor bağıntısı", "Sinüs teoremi", "Öklid bağıntısı", "Thales teoremi", "cos 90° = 0"],
      ["Bir üçgende a = 10, A = 30° ise çevrel çemberin yarıçapı kaçtır?", "10", "5", "20", "10√3", "a/sin A = 2R → 20 = 2R"]
    ], [
      ["Bir tarlanın iki kenarı 40 m ve 70 m, aradaki açı 120°'dir. Üçüncü kenarın uzunluğunu bulunuz.", "a² = 40² + 70² − 2·40·70·cos120° = 1600 + 4900 + 2800 = 9300 → a = √9300 = 10√93 ≈ 96,4 m"]
    ]]
  ]],
  ["Analitik Geometri", 1, [
    ["Noktanın ve Doğrunun Analitik İncelenmesi", [
      "İki nokta arası uzaklık: |AB| = √((x₂ − x₁)² + (y₂ − y₁)²)",
      "Orta nokta: ((x₁ + x₂)/2, (y₁ + y₂)/2)",
      "Eğim: m = (y₂ − y₁)/(x₂ − x₁) = tan α · Doğru: y − y₁ = m(x − x₁)",
      "Paralel doğrular: m₁ = m₂ · Dik doğrular: m₁ · m₂ = −1",
      "Noktanın doğruya uzaklığı: |ax₀ + by₀ + c| / √(a² + b²)"
    ], [
      "Analitik geometride geometrik şekiller koordinat sistemiyle cebirsel olarak incelenir. İki nokta arasındaki uzaklık Pisagor bağıntısından, orta nokta ise koordinatların ortalamasından bulunur.",
      "Bir doğrunun eğimi, x eksenine yaptığı açının tanjantıdır. Eğimi ve bir noktası bilinen doğrunun denklemi y − y₁ = m(x − x₁) ile yazılır. Paralel doğruların eğimleri eşit, dik doğruların eğimleri çarpımı −1'dir."
    ], [
      ["A(1, 2) ve B(4, 6) noktaları arasındaki uzaklık kaçtır?", "5", "7", "√7", "25", "√(9 + 16)"],
      ["A(−2, 5) ve B(6, 1) noktalarının orta noktası hangisidir?", "(2, 3)", "(4, 6)", "(8, −4)", "(2, 4)", "((−2+6)/2, (5+1)/2)"],
      ["y = 3x − 1 doğrusuna dik olan doğrunun eğimi kaçtır?", "−1/3", "3", "−3", "1/3", "m₁·m₂ = −1"],
      ["Eğimi 2 olan ve (1, 3) noktasından geçen doğrunun denklemi hangisidir?", "y = 2x + 1", "y = 2x + 3", "y = 2x − 1", "y = x + 2", "y − 3 = 2(x − 1)"],
      ["x eksenine 45° açı yapan doğrunun eğimi kaçtır?", "1", "0", "√3", "−1", "tan 45°"]
    ], [
      ["A(0, 0), B(6, 0), C(3, 4) üçgeninin ikizkenar olduğunu uzaklık formülüyle gösteriniz.", "|AC| = √(9 + 16) = 5, |BC| = √(9 + 16) = 5, |AB| = 6. İki kenar eşit olduğundan ikizkenardır."],
      ["(2, −1) noktasından geçen ve y = −2x + 5 doğrusuna paralel olan doğrunun denklemini yazınız.", "Paralel → m = −2. y + 1 = −2(x − 2) → y = −2x + 3."]
    ]]
  ]],
  ["Fonksiyonlarda Uygulamalar ve Denklem Sistemleri", 2, [
    ["İkinci Dereceden Fonksiyonlar (Parabol)", [
      "f(x) = ax² + bx + c · a > 0 kollar yukarı, a < 0 aşağı",
      "Tepe noktası: r = −b/2a, k = f(r)",
      "Diskriminant Δ = b² − 4ac: Δ > 0 iki kök, Δ = 0 teğet, Δ < 0 kesmez",
      "Maksimum/minimum problemleri tepe noktasıyla çözülür."
    ], [
      "İkinci dereceden fonksiyonların grafiği paraboldür. a katsayısının işareti kolların yönünü, mutlak değeri parabolün açıklığını belirler. Parabolün simetri ekseni x = −b/2a doğrusudur; tepe noktası fonksiyonun en büyük ya da en küçük değerini verir.",
      "Gerçek hayatta atılan bir topun yörüngesi, alanı en büyük olan bahçenin boyutları gibi problemler parabollerle modellenir. Δ, parabolün x eksenini kaç noktada kestiğini gösterir."
    ], [
      ["f(x) = x² − 6x + 5 parabolünün tepe noktasının apsisi kaçtır?", "3", "−3", "6", "5", "−b/2a = 6/2"],
      ["f(x) = −x² + 4x parabolünün en büyük değeri kaçtır?", "4", "2", "0", "8", "f(2) = −4 + 8"],
      ["x² + 2x + 5 = 0 denkleminin gerçek kökleri için ne söylenebilir?", "Gerçek kökü yoktur.", "İki farklı kökü vardır.", "Çakışık iki kökü vardır.", "Kökleri 1 ve 5'tir.", "Δ = 4 − 20 < 0"],
      ["y = 2x² parabolü için hangisi doğrudur?", "Kollar yukarı, tepe (0, 0)", "Kollar aşağı", "Tepe (2, 0)", "x eksenini iki noktada keser", "a > 0"]
    ], [
      ["Çevresi 40 m olan dikdörtgen biçimindeki bir bahçenin alanının en büyük olması için kenarları ne olmalıdır? Fonksiyon kurarak gösteriniz.", "Kenarlar x ve 20 − x. A(x) = x(20 − x) = −x² + 20x. Tepe: x = 10. Kenarlar 10 m ve 10 m (kare), en büyük alan 100 m²."]
    ]]
  ]],
  ["Çember, Daire ve Olasılık", 2, [
    ["Çemberde Açılar, Uzunluk ve Alan", [
      "Merkez açı = gördüğü yayın ölçüsü · Çevre açı = yayın yarısı",
      "Çapı gören çevre açı 90°",
      "Teğet, yarıçapa değme noktasında diktir.",
      "Çember uzunluğu 2πr · Daire alanı πr² · Daire dilimi alanı = πr² · α/360"
    ], [
      "Köşesi çemberin merkezinde olan açılara merkez açı, köşesi çember üzerinde olanlara çevre açı denir. Aynı yayı gören çevre açı merkez açının yarısıdır; bu nedenle çapı gören çevre açı daima 90°'dir.",
      "Çemberin uzunluğu 2πr, dairenin alanı πr²'dir. Merkez açısı α olan daire diliminin alanı tüm dairenin α/360'ı kadardır; yay uzunluğu da aynı oranla bulunur."
    ], [
      ["Merkez açısı 80° olan yayı gören çevre açı kaç derecedir?", "40", "80", "160", "100", "Yarısı."],
      ["Yarıçapı 6 cm, merkez açısı 60° olan daire diliminin alanı kaç cm²'dir? (π = 3)", "18", "36", "108", "6", "3·36·60/360"],
      ["Çapı gören çevre açı kaç derecedir?", "90", "180", "45", "60", "Thales."],
      ["Yarıçapı 5 cm olan çemberin uzunluğu kaç cm'dir?", "10π", "25π", "5π", "20π", "2πr"]
    ], [
      ["Bir çemberde çapı gören çevre açının neden 90° olduğunu merkez açı-çevre açı ilişkisiyle açıklayınız.", "Çap, merkez açısı 180° olan yayı belirler. Çevre açı, gördüğü yayın merkez açısının yarısı olduğundan 180/2 = 90° olur."]
    ]],
    ["Koşullu Olasılık ve Bağımsız Olaylar", [
      "P(A|B) = P(A ∩ B) / P(B)",
      "Bağımsız olaylar: P(A ∩ B) = P(A) · P(B)",
      "Ayrık olaylar: A ∩ B = ∅ → P(A ∪ B) = P(A) + P(B)",
      "Geri koymadan çekilişte olasılıklar değişir (bağımlı olaylar)."
    ], [
      "Bir olayın, başka bir olayın gerçekleştiği bilindiğinde olma olasılığına koşullu olasılık denir. Örneğin bir zar atıldığında sonucun çift olduğu biliniyorsa 4 gelme olasılığı 1/3'tür, çünkü örnek uzay {2, 4, 6}'ya daralır.",
      "Bir olayın gerçekleşmesi diğerinin olasılığını etkilemiyorsa olaylar bağımsızdır; bu durumda olasılıklar çarpılır. Torbadan geri koymadan çekilişte ise ikinci çekilişin olasılığı birinciye bağlıdır."
    ], [
      ["Bir zar atılıyor; sonucun çift olduğu biliniyor. 6 gelme olasılığı kaçtır?", "1/3", "1/6", "1/2", "2/3", "{2, 4, 6}"],
      ["Bir para iki kez atıldığında iki kez yazı gelme olasılığı kaçtır?", "1/4", "1/2", "1/3", "3/4", "1/2 · 1/2"],
      ["Torbada 3 kırmızı, 2 mavi bilye var. Geri koymadan çekilen iki bilyenin ikisinin de kırmızı olma olasılığı kaçtır?", "3/10", "9/25", "3/5", "1/5", "3/5 · 2/4"],
      ["P(A) = 0,5, P(B) = 0,4 ve A, B bağımsız ise P(A ∩ B) kaçtır?", "0,2", "0,9", "0,1", "0,45", "0,5 · 0,4"]
    ], [
      ["Bir sınıftaki 30 öğrencinin 18'i kız, kızların 6'sı gözlüklüdür. Rastgele seçilen bir öğrencinin kız olduğu bilindiğine göre gözlüklü olma olasılığını bulunuz.", "P(gözlüklü | kız) = 6/18 = 1/3."]
    ]]
  ]]
]);

DERS("fizik", "fiz", { ad: "Fizik", ikon: "⚛️", renk: "#2563eb" }, [
  ["Kuvvet ve Hareket: Vektörler ve Newton Yasaları", 1, [
    ["Vektörler ve Bağıl Hareket", [
      "Vektör toplama: uç uca ekleme ya da paralelkenar yöntemi",
      "Aynı yönlü vektörler toplanır, zıt yönlüler çıkarılır; dik vektörlerde Pisagor",
      "Bileşenlere ayırma: Fx = F·cos α, Fy = F·sin α",
      "Bağıl hız: v(bağıl) = v(cisim) − v(gözlemci)",
      "Nehir problemi: karşıya geçiş süresi akıntıya dik hız bileşenine bağlıdır."
    ], [
      "Vektörel büyüklükler büyüklük ve yönle ifade edilir; toplama işlemi yönler dikkate alınarak yapılır. Birbirine dik iki vektörün bileşkesi Pisagor bağıntısıyla bulunur: 3 N ve 4 N'luk dik kuvvetlerin bileşkesi 5 N'dur.",
      "Hareket gözlemciye göre değişir. Aynı yönde 80 km/h ve 60 km/h hızla giden iki araçtan yavaş olanın sürücüsü diğerini 20 km/h hızla uzaklaşıyormuş gibi görür. Akıntılı nehirde karşıya geçme süresi yalnızca akıntıya dik hız bileşenine bağlıdır; akıntı yalnızca sürüklenmeye neden olur."
    ], [
      ["Birbirine dik 6 N ve 8 N'luk kuvvetlerin bileşkesi kaç N'dur?", "10", "14", "2", "48", "√(36 + 64)"],
      ["Aynı yönde 90 km/h ve 70 km/h ile giden araçlardan yavaşın sürücüsü hızlıyı kaç km/h hızla görür?", "20", "160", "70", "90", "90 − 70"],
      ["Genişliği 60 m olan nehirde suya göre 3 m/s hızla akıntıya dik yüzen kişi karşıya kaç saniyede geçer?", "20", "180", "30", "10", "60 / 3"],
      ["20 N'luk kuvvet yatayla 37° açı yapıyorsa yatay bileşeni kaç N'dur? (cos37 = 0,8)", "16", "12", "20", "8", "20 · 0,8"]
    ], [
      ["Akıntı hızının artmasının nehri karşıya geçiş süresini neden değiştirmediğini açıklayınız.", "Karşıya geçiş süresi = genişlik / akıntıya dik hız bileşeni. Akıntı hızı akıntı doğrultusunda olduğundan dik bileşeni etkilemez; yalnızca cismin aşağı doğru sürüklenme miktarını artırır."]
    ]],
    ["Newton'un Hareket Yasaları ve İvmeli Hareket", [
      "1. Yasa (eylemsizlik): ΣF = 0 → sabit hız ya da durgunluk",
      "2. Yasa: ΣF = m · a",
      "3. Yasa: etki-tepki kuvvetleri eşit büyüklükte, zıt yönlü, farklı cisimlere etki eder.",
      "Sabit ivmeli hareket: v = v₀ + at · x = v₀t + ½at² · v² = v₀² + 2ax",
      "Serbest düşme: a = g ≈ 10 m/s²"
    ], [
      "Newton'un ikinci yasasına göre bir cisme etki eden net kuvvet, cismin kütlesi ile ivmesinin çarpımına eşittir. Net kuvvet hızın büyüklüğünü ya da yönünü değiştirir. Üçüncü yasaya göre her etkiye eşit ve zıt bir tepki vardır; bu kuvvetler farklı cisimlere etki ettiği için birbirini dengelemez.",
      "İvmesi sabit olan harekette hız zamanla doğrusal değişir. Hız-zaman grafiğinin eğimi ivmeyi, grafiğin altında kalan alan yer değiştirmeyi verir. Hava direnci ihmal edildiğinde serbest düşen tüm cisimler aynı ivmeyle düşer."
    ], [
      ["Kütlesi 5 kg olan cisme 20 N net kuvvet etkiyorsa ivmesi kaç m/s²'dir?", "4", "100", "25", "15", "a = F/m"],
      ["Durgun hâlden 2 m/s² ivmeyle hızlanan araç 5 saniye sonunda kaç m/s hıza ulaşır?", "10", "7", "2,5", "25", "v = at"],
      ["Serbest bırakılan cisim 3 s'de kaç m düşer? (g = 10)", "45", "30", "90", "15", "½·10·9"],
      ["Etki-tepki kuvvetleri için hangisi doğrudur?", "Farklı cisimlere etki ettikleri için birbirini dengelemezler.", "Aynı cisme etki ederler.", "Büyüklükleri farklıdır.", "Aynı yönlüdürler.", "3. yasa."]
    ], [
      ["Hız-zaman grafiğinde eğim ve alanın neyi ifade ettiğini açıklayınız; 10 m/s'den 30 m/s'ye 4 saniyede düzgün hızlanan aracın ivmesini ve aldığı yolu bulunuz.", "Eğim ivmeyi, alan yer değiştirmeyi verir. a = (30 − 10)/4 = 5 m/s². Yol = (10 + 30)/2 · 4 = 80 m."]
    ]]
  ]],
  ["Atışlar, Enerji ve Momentum", 1, [
    ["Atış Hareketleri", [
      "Yatay atış: yatayda sabit hız (x = v₀t), düşeyde serbest düşme (h = ½gt²)",
      "Uçuş süresi yalnızca yüksekliğe bağlıdır (yatay atışta).",
      "Eğik atış: tepe noktasında düşey hız 0, yatay hız v₀·cos α",
      "Menzil en büyük: α = 45°"
    ], [
      "Yatay atılan bir cisim yatayda sabit hızlı, düşeyde serbest düşme hareketi yapar; bu iki hareket birbirinden bağımsızdır. Aynı yükseklikten yatay atılan ve serbest bırakılan iki cisim yere aynı anda düşer.",
      "Eğik atışta cismin hızı yatay ve düşey bileşenlere ayrılır. Yatay bileşen sabit kalır, düşey bileşen yer çekimi nedeniyle değişir; tepe noktasında düşey hız sıfırdır. Hava direnci yoksa en büyük menzil 45° atış açısında elde edilir."
    ], [
      ["80 m yükseklikten yatay atılan cisim kaç saniyede yere düşer? (g = 10)", "4", "8", "16", "2", "80 = 5t²"],
      ["Yatay atışta yatay hız nasıl değişir?", "Sabit kalır.", "Artar.", "Azalır.", "Önce artar sonra azalır.", "Yatayda ivme yok."],
      ["Eğik atışta tepe noktasında hangisi sıfırdır?", "Düşey hız", "Yatay hız", "İvme", "Kinetik enerji", "vy = 0"],
      ["Hava direnci yoksa en büyük menzil hangi atış açısında elde edilir?", "45°", "30°", "60°", "90°", "sin 2α en büyük."]
    ], [
      ["Aynı yükseklikten biri serbest bırakılan, diğeri yatay atılan iki topun yere aynı anda düşmesini açıklayınız.", "Düşey hareketleri aynıdır: ilk düşey hızları sıfır ve ikisi de g ivmesiyle düşer. Yatay hız düşey hareketi etkilemediğinden düşme süreleri eşittir."]
    ]],
    ["İş-Enerji, İtme ve Momentum", [
      "Momentum p = m · v (vektörel) · İtme = F · Δt = Δp",
      "Dış kuvvet yoksa momentum korunur (çarpışmalar, patlamalar).",
      "Esnek çarpışmada kinetik enerji de korunur; esnek olmayanda korunmaz.",
      "İş-enerji teoremi: net iş = kinetik enerjideki değişim"
    ], [
      "Momentum kütle ile hızın çarpımıdır ve hız yönündedir. Bir cisme uygulanan kuvvet ile etki süresinin çarpımı itmeyi verir ve momentum değişimine eşittir. Hava yastıkları çarpışma süresini uzatarak kuvveti azaltır.",
      "Kapalı bir sistemde dış kuvvet yoksa toplam momentum korunur. Tüm çarpışmalarda momentum korunurken kinetik enerji yalnızca esnek çarpışmalarda korunur; birbirine yapışan cisimlerde kinetik enerjinin bir kısmı ısıya ve sese dönüşür."
    ], [
      ["2 kg kütleli ve 5 m/s hızlı cismin momentumu kaç kg·m/s'dir?", "10", "25", "2,5", "50", "m·v"],
      ["Hava yastığının yolcuyu korumasının nedeni nedir?", "Çarpışma süresini uzatıp kuvveti azaltması", "Momentumu artırması", "Kütleyi azaltması", "Hızı artırması", "F = Δp/Δt"],
      ["Duran 3 kg'lık topa 6 kg·m/s itme uygulanırsa hızı kaç m/s olur?", "2", "18", "3", "0,5", "Δp = mv"],
      ["Esnek olmayan çarpışmada hangisi korunur?", "Toplam momentum", "Toplam kinetik enerji", "Her cismin hızı", "Hiçbiri", "Momentum korunur."]
    ], [
      ["4 m/s hızla giden 2 kg'lık araba duran 2 kg'lık arabaya çarpıp yapışıyor. Ortak hızı ve kinetik enerji kaybını bulunuz.", "Momentum: 2·4 = 4·v → v = 2 m/s. İlk Ek = ½·2·16 = 16 J, son Ek = ½·4·4 = 8 J. Kayıp 8 J (ısı ve sese dönüşür)."]
    ]]
  ]],
  ["Tork, Denge ve Elektrik", 2, [
    ["Tork ve Denge", [
      "Tork: τ = F · d (dönme eksenine dik uzaklık)",
      "Denge şartları: ΣF = 0 ve Στ = 0",
      "Kütle merkezi: cismin tüm kütlesinin toplandığı varsayılan nokta",
      "Kapı kolu menteşeden uzağa takılır: d büyük → az kuvvetle büyük tork"
    ], [
      "Kuvvetin döndürme etkisine tork denir; kuvvetin büyüklüğü ile dönme noktasına olan dik uzaklığın çarpımıdır. Aynı kuvvetle daha büyük dönme etkisi elde etmek için kuvvet dönme noktasından uzağa uygulanır; anahtarların ve kapı kollarının tasarımı buna dayanır.",
      "Bir cismin dengede olması için hem net kuvvetin hem de net torkun sıfır olması gerekir. Tahterevallide ağır olan çocuğun desteğe daha yakın oturması torkların eşitlenmesini sağlar."
    ], [
      ["Dönme noktasından 0,5 m uzağa dik uygulanan 40 N kuvvetin torku kaç N·m'dir?", "20", "80", "40", "0,5", "40 · 0,5"],
      ["300 N ağırlığındaki çocuk desteğe 2 m uzakta oturuyor. 200 N'luk çocuk dengeyi sağlamak için desteğe kaç m uzakta oturmalı?", "3", "2", "1,5", "4", "300·2 = 200·d"],
      ["Bir cismin dengede olması için hangisi gereklidir?", "Net kuvvet ve net tork sıfır olmalı.", "Yalnızca net kuvvet sıfır olmalı.", "Yalnızca net tork sıfır olmalı.", "Cisim hareketsiz olmalı.", "İki şart."],
      ["Kapı kolunun menteşenin uzağına takılmasının nedeni nedir?", "Kuvvet kolunu artırıp az kuvvetle büyük tork sağlamak", "Kapıyı hafifletmek", "Sürtünmeyi artırmak", "Kütle merkezini değiştirmek", "τ = F·d"]
    ], [
      ["Somunu sökmek için anahtarın ucundan tutmanın neden daha kolay olduğunu tork kavramıyla açıklayınız.", "Tork = kuvvet × dik uzaklık. Uçtan tutunca dik uzaklık artar; aynı torku daha küçük kuvvetle elde ederiz."]
    ]],
    ["Elektrik Alan ve Manyetizma", [
      "Coulomb: F = k·q₁·q₂ / d²",
      "Elektrik alan E = F / q · alan çizgileri + yükten çıkar, − yüke girer",
      "Akım geçen tel çevresinde manyetik alan oluşur (sağ el kuralı).",
      "Manyetik akı değişimi indüksiyon akımı oluşturur (jeneratör ilkesi).",
      "Transformatör: alternatif akımda gerilimi yükseltir/düşürür."
    ], [
      "İki yük arasındaki elektriksel kuvvet yüklerin çarpımıyla doğru, aralarındaki uzaklığın karesiyle ters orantılıdır. Uzaklık iki katına çıkarsa kuvvet dörtte birine iner. Bir yükün çevresinde elektrik alan oluşur; alan çizgileri pozitif yükten çıkar, negatif yüke girer.",
      "Üzerinden akım geçen telin çevresinde manyetik alan oluşur. Bir bobindeki manyetik akının değişmesi bobinde indüksiyon akımı doğurur; elektrik santrallerindeki jeneratörler bu ilkeyle çalışır. Transformatörler alternatif akımın gerilimini değiştirerek elektriğin uzak mesafelere az kayıpla iletilmesini sağlar."
    ], [
      ["İki yük arasındaki uzaklık 2 katına çıkarılırsa Coulomb kuvveti nasıl değişir?", "1/4'üne iner.", "2 katına çıkar.", "Yarıya iner.", "Değişmez.", "d² ile ters orantılı."],
      ["Elektrik alan çizgileri için hangisi doğrudur?", "Pozitif yükten çıkar, negatif yüke girer.", "Negatif yükten çıkar.", "Kapalı halkalardır.", "Kesişebilir.", "Alan yönü."],
      ["Jeneratörler hangi ilkeye göre çalışır?", "Elektromanyetik indüksiyon", "Coulomb yasası", "Arşimet ilkesi", "Ohm yasası", "Akı değişimi."],
      ["Transformatör hangi akımda çalışır?", "Alternatif akım", "Doğru akım", "Her ikisi", "Statik elektrik", "Değişen akı gerekir."]
    ], [
      ["Elektriğin santrallerden şehirlere yüksek gerilimle iletilmesinin nedenini açıklayınız.", "Aynı güç yüksek gerilimde düşük akımla taşınır. Isı kaybı akımın karesiyle orantılı olduğundan (P = I²R) kayıp azalır; şehre gelince transformatörlerle gerilim düşürülür."]
    ]]
  ]]
]);

DERS("kimya", "kim", { ad: "Kimya", ikon: "⚗️", renk: "#db2777" }, [
  ["Modern Atom Teorisi", 1, [
    ["Orbitaller ve Elektron Dizilimi", [
      "Kuantum sayıları: n (baş), ℓ (açısal), mℓ (manyetik), ms (spin)",
      "Orbitaller: s (2 e⁻), p (6 e⁻), d (10 e⁻), f (14 e⁻)",
      "Aufbau: 1s 2s 2p 3s 3p 4s 3d 4p ...",
      "Pauli: bir orbitalde en fazla 2 zıt spinli elektron · Hund: eş enerjili orbitallere önce tek tek",
      "Periyodik tabloda bloklar: s, p, d, f"
    ], [
      "Modern atom teorisine göre elektronların yeri kesin olarak belirlenemez; elektronun bulunma olasılığının yüksek olduğu bölgelere orbital denir. Orbitaller dört kuantum sayısıyla tanımlanır.",
      "Elektronlar orbitallere enerji sırasına göre (Aufbau ilkesi), her orbitalde en fazla iki zıt spinli elektron olacak şekilde (Pauli) ve eş enerjili orbitallere önce tek tek (Hund) yerleşir. Elektron dizilimi elementin periyodik tablodaki yerini belirler: son elektronun girdiği orbital bloğu, en büyük baş kuantum sayısı periyodu gösterir."
    ], [
      ["₁₁Na atomunun elektron dizilimi hangisidir?", "1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁷", "1s² 2s² 2p⁵ 3s²", "1s² 2s⁸ 3s¹", "11 elektron."],
      ["Bir p alt kabuğu en fazla kaç elektron alır?", "6", "2", "10", "14", "3 orbital × 2"],
      ["\"Bir orbitalde en fazla iki zıt spinli elektron bulunur.\" ilkesi hangisidir?", "Pauli", "Hund", "Aufbau", "Heisenberg", "Pauli dışarlama."],
      ["₂₀Ca elementi periyodik tablonun hangi bloğundadır?", "s", "p", "d", "f", "Son elektron 4s'ye."]
    ], [
      ["₁₇Cl atomunun elektron dizilimini yazarak periyot ve grubunu bulunuz.", "1s² 2s² 2p⁶ 3s² 3p⁵. En büyük n = 3 → 3. periyot; değerlik elektronu 7 (3s² 3p⁵), p bloğu → 7A (17.) grup."]
    ]]
  ]],
  ["Gazlar", 1, [
    ["Gaz Yasaları ve İdeal Gaz Denklemi", [
      "Boyle: P·V = sabit (n, T sabit) · Charles: V/T = sabit · Gay-Lussac: P/T = sabit",
      "Avogadro: V/n = sabit",
      "İdeal gaz denklemi: P·V = n·R·T (T kelvin: T = °C + 273)",
      "Normal koşullarda (0 °C, 1 atm) 1 mol gaz 22,4 L",
      "Kısmi basınç (Dalton): P(toplam) = P₁ + P₂ + ..."
    ], [
      "Gazların davranışı basınç, hacim, sıcaklık ve mol sayısı arasındaki ilişkilerle açıklanır. Sabit sıcaklıkta gazın hacmi basınçla ters orantılıdır (Boyle); sabit basınçta hacim mutlak sıcaklıkla doğru orantılıdır (Charles). Hesaplamalarda sıcaklık mutlaka kelvin cinsinden kullanılır.",
      "Bu yasalar ideal gaz denkleminde birleşir: PV = nRT. Gaz karışımlarında her gazın kısmi basıncı, tek başına aynı kabı doldursaydı yapacağı basınçtır; toplam basınç kısmi basınçların toplamıdır."
    ], [
      ["Sabit sıcaklıkta 2 atm basınçta 6 L olan gazın basıncı 4 atm yapılırsa hacmi kaç L olur?", "3", "12", "6", "1,5", "P₁V₁ = P₂V₂"],
      ["27 °C kaç kelvindir?", "300", "246", "27", "273", "27 + 273"],
      ["Normal koşullarda 44,8 L gaz kaç moldür?", "2", "1", "0,5", "4", "44,8 / 22,4"],
      ["Sabit basınçta gazın mutlak sıcaklığı 2 katına çıkarsa hacmi ne olur?", "2 katına çıkar.", "Yarıya iner.", "Değişmez.", "4 katına çıkar.", "Charles."]
    ], [
      ["Kışın dışarıda bırakılan şişkin bir balonun küçülmesini uygun gaz yasasıyla açıklayınız.", "Basınç yaklaşık sabitken sıcaklık düşer; Charles yasasına göre hacim mutlak sıcaklıkla doğru orantılı olduğundan balonun hacmi azalır."]
    ]]
  ]],
  ["Sıvı Çözeltiler ve Çözünürlük", 1, [
    ["Derişim Birimleri ve Çözünürlük", [
      "Molarite M = n (mol) / V (L)",
      "Kütlece yüzde = (çözünen kütlesi / çözelti kütlesi) × 100",
      "Seyreltme: M₁·V₁ = M₂·V₂",
      "Koligatif özellikler: donma noktası alçalması, kaynama noktası yükselmesi (tanecik sayısına bağlı)",
      "Gazların sudaki çözünürlüğü sıcaklık artınca azalır, basınç artınca artar."
    ], [
      "Çözeltilerin derişimi molarite, kütlece yüzde gibi birimlerle ifade edilir. 1 L çözeltide 1 mol çözünen içeren çözelti 1 molardır. Bir çözeltiye su eklendiğinde çözünenin mol sayısı değişmez; bu yüzden M₁V₁ = M₂V₂ eşitliği kullanılır.",
      "Çözünen tanecikler suyun donma noktasını düşürür, kaynama noktasını yükseltir; kışın yollara tuz serpilmesi bu yüzdendir. Gazların sudaki çözünürlüğü sıcaklık arttıkça azalır; sıcak yaz günlerinde balıkların su yüzeyine çıkması suyun oksijeninin azalmasıyla ilgilidir."
    ], [
      ["0,4 mol NaOH ile hazırlanan 2 L çözeltinin molaritesi kaçtır?", "0,2", "0,8", "5", "2,4", "0,4 / 2"],
      ["20 g şeker 80 g suda çözünürse kütlece yüzde derişim kaçtır?", "20", "25", "80", "16", "20/100"],
      ["2 M 100 mL çözelti 400 mL'ye seyreltilirse derişim kaç M olur?", "0,5", "8", "1", "0,25", "2·100 = M·400"],
      ["Kışın yollara tuz serpilmesi hangi özellikle ilgilidir?", "Donma noktası alçalması", "Kaynama noktası yükselmesi", "Gazların çözünürlüğü", "Osmotik basınç", "Buzlanma azalır."]
    ], [
      ["Gazlı içeceklerin açıldıktan sonra sıcakta daha hızlı gazının kaçmasını çözünürlük ile açıklayınız.", "Kapak açılınca basınç düşer, CO₂'nin çözünürlüğü azalır. Ayrıca gazların çözünürlüğü sıcaklık arttıkça azaldığından sıcak ortamda CO₂ daha hızlı çözeltiden ayrılır."]
    ]]
  ]],
  ["Tepkimelerde Enerji, Hız ve Denge", 2, [
    ["Tepkime Isısı ve Tepkime Hızı", [
      "Ekzotermik: ısı verir, ΔH < 0 (yanma) · Endotermik: ısı alır, ΔH > 0 (erime, buharlaşma)",
      "Hess yasası: tepkime ısıları toplanabilir.",
      "Hızı etkileyenler: derişim, sıcaklık, temas yüzeyi, katalizör, maddenin cinsi",
      "Katalizör aktifleşme enerjisini düşürür, ΔH'yi değiştirmez.",
      "Çarpışma teorisi: uygun yönde ve yeterli enerjili çarpışmalar ürün oluşturur."
    ], [
      "Kimyasal tepkimeler ısı alarak (endotermik) ya da ısı vererek (ekzotermik) gerçekleşir. Tepkime ısısı (entalpi değişimi) ürünlerin ve girenlerin enerjileri farkıdır. Hess yasasına göre bir tepkimenin ısısı izlenen yoldan bağımsızdır; tepkimeler toplanırsa ısıları da toplanır.",
      "Tepkime hızı birim zamanda harcanan ya da oluşan madde miktarıdır. Sıcaklık ve derişim artışı etkin çarpışma sayısını artırarak hızı yükseltir; toz hâlindeki katılar daha büyük temas yüzeyi sağlar. Katalizörler aktifleşme enerjisini düşürerek tepkimeyi hızlandırır ama tepkimede harcanmaz."
    ], [
      ["Hangisi endotermik bir olaydır?", "Buzun erimesi", "Odunun yanması", "Suyun donması", "Buharın yoğuşması", "Isı alır."],
      ["Katalizör için hangisi doğrudur?", "Aktifleşme enerjisini düşürür.", "ΔH'yi değiştirir.", "Tepkimede tükenir.", "Ürün miktarını artırır.", "Yol değiştirir."],
      ["Toz şekerin kesme şekerden hızlı çözünmesinin nedeni nedir?", "Temas yüzeyinin büyük olması", "Sıcaklık", "Katalizör", "Derişim", "Yüzey alanı."],
      ["Ekzotermik tepkimede ΔH için hangisi doğrudur?", "ΔH < 0", "ΔH > 0", "ΔH = 0", "Belirlenemez", "Isı verir."]
    ], [
      ["Buzdolabında saklanan yiyeceklerin daha geç bozulmasını tepkime hızı ile açıklayınız.", "Bozulma kimyasal ve biyolojik tepkimelerle olur. Düşük sıcaklıkta taneciklerin kinetik enerjisi ve etkin çarpışma sayısı azalır; tepkime hızı düştüğü için bozulma yavaşlar."]
    ]],
    ["Kimyasal Denge", [
      "Denge: ileri ve geri tepkime hızları eşit, derişimler sabit (dinamik denge)",
      "Denge sabiti Kc = [ürünler] / [girenler] (katsayılar üs olarak)",
      "Le Chatelier: dengeye dış etki yapılırsa sistem etkiyi azaltacak yöne kayar.",
      "Isı veren tepkimede sıcaklık artışı dengeyi girenler yönüne kaydırır."
    ], [
      "Tersinir tepkimelerde ileri ve geri tepkime hızları eşitlendiğinde sistem dengeye ulaşır. Denge dinamiktir: tepkimeler durmaz ama derişimler değişmez. Denge sabiti yalnızca sıcaklığa bağlıdır.",
      "Le Chatelier ilkesine göre dengedeki sisteme derişim, basınç ya da sıcaklık değişikliği uygulanırsa sistem bu etkiyi azaltacak yönde tepki verir. Örneğin girenlerden birinin derişimi artırılırsa denge ürünler yönüne kayar."
    ], [
      ["Dengedeki bir sisteme girenlerden ekleme yapılırsa denge hangi yöne kayar?", "Ürünler yönüne", "Girenler yönüne", "Kaymaz", "Önce ürünler sonra girenler", "Le Chatelier."],
      ["Denge sabitini değiştiren tek etken hangisidir?", "Sıcaklık", "Derişim", "Basınç", "Katalizör", "Kc sıcaklığa bağlı."],
      ["Kimyasal denge için hangisi doğrudur?", "İleri ve geri tepkime hızları eşittir.", "Tepkimeler durmuştur.", "Ürün derişimi sürekli artar.", "Girenler tükenmiştir.", "Dinamik denge."],
      ["Katalizörün dengeye etkisi nedir?", "Dengeye daha çabuk ulaşılmasını sağlar, dengeyi kaydırmaz.", "Dengeyi ürünlere kaydırır.", "Kc'yi artırır.", "Dengeyi girenlere kaydırır.", "Her iki yönü eşit hızlandırır."]
    ], [
      ["N₂ + 3H₂ ⇌ 2NH₃ (ekzotermik) dengesinde NH₃ verimini artırmak için basınç ve sıcaklık nasıl değiştirilmelidir? Gerekçelendiriniz.", "Basınç artırılmalı: girenlerde 4, ürünlerde 2 mol gaz var; basınç artınca denge az mol olan ürünlere kayar. Sıcaklık düşürülmeli: tepkime ekzotermik olduğundan soğutma dengeyi ürünlere kaydırır (pratikte hız için katalizör kullanılır)."]
    ]]
  ]]
]);

DERS("biyoloji", "bio", { ad: "Biyoloji", ikon: "🧬", renk: "#22a06b" }, [
  ["Sinir, Endokrin ve Duyu Sistemleri", 1, [
    ["Sinir Sistemi ve Hormonlar", [
      "Nöron: dendrit → hücre gövdesi → akson; impuls tek yönlü iletilir.",
      "Merkezî sinir sistemi: beyin ve omurilik · Çevresel: duyu ve motor sinirler",
      "Refleks merkezi omuriliktir (diz refleksi).",
      "Endokrin bezler hormonu kana salgılar: hipofiz (yöneten bez), tiroit, pankreas (insülin-glukagon), böbrek üstü (adrenalin)",
      "Homeostazi: geri bildirim mekanizmalarıyla iç denge"
    ], [
      "Sinir sistemi uyarıları alır, yorumlar ve tepki oluşturur. Sinir hücrelerinde impuls dendritten hücre gövdesine, oradan aksona iletilir; nöronlar arasındaki iletim sinapslarda kimyasal maddelerle (nörotransmitter) sağlanır. Ani tehlikelere karşı beyin devreye girmeden oluşan istemsiz tepkilere refleks denir.",
      "Endokrin sistem hormonlarla daha yavaş ama uzun süreli düzenleme yapar. Pankreastan salgılanan insülin kan şekerini düşürür, glukagon yükseltir; bu zıt etkili hormonlar kan şekerini dengede tutar. Hipofiz bezi diğer bezlerin çalışmasını yönettiği için 'yöneten bez' olarak bilinir."
    ], [
      ["Kan şekerini düşüren hormon hangisidir?", "İnsülin", "Glukagon", "Adrenalin", "Tiroksin", "Pankreas."],
      ["Diz refleksinin merkezi neresidir?", "Omurilik", "Beyin kabuğu", "Beyincik", "Hipofiz", "Refleks merkezi."],
      ["Diğer endokrin bezlerin çalışmasını düzenleyen bez hangisidir?", "Hipofiz", "Tiroit", "Pankreas", "Böbrek üstü", "Yöneten bez."],
      ["Nöronda impulsun iletim yönü hangisidir?", "Dendrit → hücre gövdesi → akson", "Akson → hücre gövdesi → dendrit", "Akson → dendrit → hücre gövdesi", "Her yönde", "Tek yönlü."]
    ], [
      ["Sinir sistemi ile endokrin sistemin düzenleme hızı ve süresi bakımından farkını açıklayınız.", "Sinir sistemi elektriksel ve kimyasal iletimle çok hızlı ama kısa süreli tepki oluşturur. Endokrin sistem hormonları kan yoluyla taşıdığı için daha yavaş ama uzun süreli etki gösterir."]
    ]]
  ]],
  ["Destek-Hareket ve Sindirim Sistemi", 1, [
    ["Kemik, Kas ve Sindirim", [
      "İskelet: kemik, kıkırdak, eklem · Kas türleri: iskelet (istemli), düz (istemsiz), kalp (istemsiz, çizgili)",
      "Kas kasılması: aktin-miyozin kayması, ATP ve Ca²⁺ gerekir.",
      "Sindirim: mekanik + kimyasal; ağızda karbonhidrat, midede protein, ince bağırsakta tüm besinler",
      "Safra (karaciğer) yağları emülsiyon hâline getirir; enzim değildir.",
      "Emilim: ince bağırsaktaki villuslarla"
    ], [
      "Destek ve hareket sistemi kemikler, kıkırdaklar, eklemler ve kaslardan oluşur. İskelet kasları istemli çalışır ve kemiklere tendonlarla bağlanır; kasılma, kas liflerindeki aktin ve miyozin iplikçiklerinin birbiri üzerinde kaymasıyla gerçekleşir ve ATP harcanır.",
      "Sindirim, büyük besin moleküllerinin hücre zarından geçebilecek küçük moleküllere parçalanmasıdır. Karbonhidrat sindirimi ağızda, protein sindirimi midede başlar; yağların sindirimi ise ince bağırsakta safra ve lipaz enzimiyle gerçekleşir. Sindirim ürünleri ince bağırsaktaki villuslar aracılığıyla kana ve lenfe geçer."
    ], [
      ["Protein sindiriminin başladığı organ hangisidir?", "Mide", "Ağız", "İnce bağırsak", "Kalın bağırsak", "Pepsin."],
      ["Safra için hangisi doğrudur?", "Yağları emülsiyon hâline getirir, enzim içermez.", "Proteinleri sindirir.", "Midede üretilir.", "Karbonhidrat sindirir.", "Karaciğerde üretilir."],
      ["Kalp kası için hangisi doğrudur?", "Çizgili ve istemsiz çalışır.", "Düz ve istemli çalışır.", "Çizgili ve istemli çalışır.", "Düz ve istemsiz çalışır.", "Kalp kası."],
      ["Besinlerin emiliminin büyük kısmı nerede gerçekleşir?", "İnce bağırsak", "Mide", "Yemek borusu", "Kalın bağırsak", "Villuslar."]
    ], [
      ["İnce bağırsağın emilim yüzeyini artıran yapıları ve bunun önemini açıklayınız.", "İç yüzeydeki kıvrımlar, villuslar ve mikrovillusler yüzey alanını çok büyütür; böylece sindirilmiş besinler kısa sürede ve büyük miktarda kana ve lenfe geçebilir."]
    ]]
  ]],
  ["Dolaşım, Solunum ve Boşaltım", 2, [
    ["Dolaşım, Solunum ve Boşaltım Sistemleri", [
      "Kalp: 2 kulakçık, 2 karıncık · Büyük dolaşım: sol karıncık → aort → vücut",
      "Küçük dolaşım: sağ karıncık → akciğer atardamarı → akciğer",
      "Solunum: alveollerde difüzyonla O₂ kana, CO₂ dışarı",
      "Boşaltım: böbrek (nefron) — süzülme, geri emilim, salgılama",
      "Kan grupları: A, B, AB, 0 · Rh faktörü"
    ], [
      "Dolaşım sistemi besin, oksijen ve atık maddelerin taşınmasını sağlar. Kanın kalpten akciğerlere gidip oksijenlenerek kalbe dönmesine küçük dolaşım, kalpten vücuda gidip dönmesine büyük dolaşım denir. Sol karıncığın duvarı kanı tüm vücuda pompaladığı için en kalındır.",
      "Akciğerlerdeki alveollerde gaz alışverişi difüzyonla olur. Böbreklerin yapı ve görev birimi nefrondur: kan önce süzülür, gerekli maddeler geri emilir, bazı atıklar ise salgılanarak idrar oluşturulur."
    ], [
      ["Kalbin duvarı en kalın odacığı hangisidir?", "Sol karıncık", "Sağ karıncık", "Sol kulakçık", "Sağ kulakçık", "Büyük dolaşım."],
      ["Akciğerlerde gaz alışverişi nerede gerçekleşir?", "Alveollerde", "Bronşlarda", "Soluk borusunda", "Gırtlakta", "Alveol."],
      ["Böbreğin yapı ve görev birimi hangisidir?", "Nefron", "Alveol", "Nöron", "Villus", "Nefron."],
      ["Küçük dolaşım hangi odacıktan başlar?", "Sağ karıncık", "Sol karıncık", "Sol kulakçık", "Sağ kulakçık", "Akciğere gider."]
    ], [
      ["İdrar oluşumunun üç aşamasını kısaca açıklayınız.", "Süzülme: kan basıncıyla küçük moleküller kandan nefron kanalına geçer. Geri emilim: glikoz, su ve mineraller gibi yararlı maddeler kana geri alınır. Salgılama: bazı atık ve ilaçlar kandan kanala aktif olarak salgılanır."]
    ]]
  ]],
  ["Komünite ve Popülasyon Ekolojisi", 2, [
    ["Popülasyon ve Türler Arası İlişkiler", [
      "Popülasyon: aynı bölgede yaşayan aynı tür bireyler · Komünite: farklı popülasyonlar",
      "Popülasyon büyümesi: doğum, göç (giriş) ↑ · ölüm, göç (çıkış) ↓",
      "Taşıma kapasitesi: ortamın besleyebileceği en fazla birey sayısı",
      "İlişkiler: mutualizm (+/+), kommensalizm (+/0), parazitizm (+/−), av-avcı, rekabet (−/−)",
      "Süksesyon: komünitenin zamanla değişimi"
    ], [
      "Popülasyonun büyüklüğü doğum, ölüm ve göçlerle değişir. Sınırsız kaynakta popülasyon J şeklinde hızla büyür; gerçek ortamlarda ise kaynaklar sınırlı olduğundan büyüme S şeklinde olur ve ortamın taşıma kapasitesinde dengelenir.",
      "Komünitedeki türler birbirleriyle çeşitli ilişkiler kurar. Mutualizmde iki tür de yarar görür (likenlerde alg ve mantar), kommensalizmde biri yararlanırken diğeri etkilenmez, parazitizmde biri yararlanırken diğeri zarar görür. Aynı kaynağı kullanan türler arasında rekabet olur."
    ], [
      ["Likenlerdeki alg-mantar birlikteliği hangi ilişkiye örnektir?", "Mutualizm", "Parazitizm", "Kommensalizm", "Rekabet", "İki taraf yararlanır."],
      ["Bir ortamın besleyebileceği en fazla birey sayısına ne denir?", "Taşıma kapasitesi", "Popülasyon yoğunluğu", "Biyokütle", "Süksesyon", "K değeri."],
      ["Pire ile köpek arasındaki ilişki hangisidir?", "Parazitizm", "Mutualizm", "Kommensalizm", "Av-avcı", "+/−"],
      ["Popülasyonun büyümesini artıran etken hangisidir?", "Doğum ve dışarıdan göç", "Ölüm", "Dışarıya göç", "Hastalık", "Giriş."]
    ], [
      ["Sınırsız kaynakta ve sınırlı kaynakta popülasyon büyüme eğrilerini karşılaştırınız.", "Sınırsız kaynakta büyüme üstel (J eğrisi) olur, birey sayısı hızla artar. Sınırlı kaynakta besin, alan ve rekabet nedeniyle büyüme yavaşlar ve taşıma kapasitesinde dengelenir (S eğrisi)."]
    ]]
  ]]
]);
