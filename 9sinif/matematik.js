// 9. sınıf Matematik (Türkiye Yüzyılı Maarif Modeli) — 1. dönem 2. yazılı ülke geneli ortak sınav (açık uçlu)
DERS("matematik", "mat", { ad: "Matematik", ikon: "➗", renk: "#4f7cff" }, [
  ["Sayılar", 1, [
    ["Üslü ve Köklü Gösterimlerle İşlemler", [
      "aⁿ · aᵐ = aⁿ⁺ᵐ · aⁿ ÷ aᵐ = aⁿ⁻ᵐ · (aⁿ)ᵐ = aⁿ·ᵐ · a⁰ = 1 (a ≠ 0) · a⁻ⁿ = 1/aⁿ",
      "Köklü ↔ üslü: ⁿ√(aᵐ) = a^(m/n) → √a = a^(1/2), ∛8 = 8^(1/3) = 2",
      "√a · √b = √(ab) · √a ÷ √b = √(a/b) (a, b ≥ 0)",
      "Toplamada kök içleri aynı olmalı: 2√3 + 5√3 = 7√3",
      "Paydayı kökten kurtarma: 1/√2 = √2/2 · 1/(√3 − 1) = (√3 + 1)/2 (eşleniğiyle çarp)"
    ], [
      "Üslü gösterim aynı çarpanın tekrarını, köklü gösterim ise bu işlemin tersini ifade eder. Bir sayının n'inci kuvvetten kökü, üssü 1/n olan kuvvetine eşittir: ⁿ√a = a^(1/n). Böylece köklü ifadelerdeki işlemler üslü ifadelerin kurallarıyla yapılabilir: ∛(2⁶) = 2^(6/3) = 2².",
      "Bu konuda yalnızca işlem yapmak değil, kuralların neden doğru olduğunu gerekçelendirmek de beklenir. Örneğin aⁿ · aᵐ = aⁿ⁺ᵐ kuralı, n tane a ile m tane a'nın çarpımında toplam n + m tane a bulunmasından gelir. a⁰ = 1 olması ise aⁿ ÷ aⁿ = 1 = aⁿ⁻ⁿ eşitliğinden çıkar. Ortak sınavda 'Bir öğrencinin iddiasını değerlendiriniz' türünde, örnek ya da karşı örnekle gerekçe isteyen sorular gelir.",
      "Paydada köklü ifade bulunduğunda pay ve payda paydanın eşleniğiyle çarpılır: (√a − √b)(√a + √b) = a − b olduğundan payda rasyonel olur."
    ], [
      ["(2³)² · 2⁻⁴ işleminin sonucu kaçtır?", "4", "2", "8", "16", "2⁶ · 2⁻⁴ = 2² = 4"],
      ["∛(5⁶) ifadesinin değeri kaçtır?", "25", "5", "125", "625", "5^(6/3) = 5² = 25"],
      ["√18 + √50 − √8 işleminin sonucu hangisidir?", "6√2", "√60", "4√2", "8√2", "3√2 + 5√2 − 2√2 = 6√2"],
      ["6/√3 ifadesinin paydası rasyonel yapılmış hâli hangisidir?", "2√3", "6√3", "√3/2", "3√2", "6√3/3 = 2√3"],
      ["16^(3/4) ifadesinin değeri kaçtır?", "8", "12", "4", "64", "(2⁴)^(3/4) = 2³ = 8"],
      ["Bir öğrenci \"(a + b)² = a² + b² her zaman doğrudur.\" diyor. Hangi örnek bu iddianın yanlış olduğunu gösterir?", "a = 1, b = 1 için 4 ≠ 2", "a = 0, b = 3 için 9 = 9", "a = 2, b = 0 için 4 = 4", "a = 0, b = 0 için 0 = 0", "Karşı örnek: (1 + 1)² = 4 ama 1² + 1² = 2."]
    ], [
      ["a⁰ = 1 (a ≠ 0) kuralının neden doğru olduğunu üslü ifadelerde bölme kuralını kullanarak gerekçelendiriniz. a = 0 için neden tanımsız olduğunu açıklayınız.", "aⁿ ÷ aⁿ = 1'dir (bir sayının kendisine bölümü). Bölme kuralına göre aⁿ ÷ aⁿ = aⁿ⁻ⁿ = a⁰. O hâlde a⁰ = 1. a = 0 olursa 0ⁿ ÷ 0ⁿ = 0 ÷ 0 tanımsız olduğundan 0⁰ tanımsızdır."],
      ["√12 · √3 + ∛(−27) − 4^(1/2) işlemini adım adım yapınız.", "√12·√3 = √36 = 6; ∛(−27) = −3; 4^(1/2) = √4 = 2 → 6 + (−3) − 2 = 1"],
      ["Ece \"√a + √b = √(a + b) eşitliği doğrudur.\" diyor. Bu iddiayı bir karşı örnekle değerlendiriniz.", "Yanlıştır. a = 9, b = 16 için √9 + √16 = 3 + 4 = 7, fakat √(9 + 16) = √25 = 5. 7 ≠ 5 olduğundan genel olarak doğru değildir."],
      ["2/(√5 − √3) ifadesinin paydasını rasyonel yapınız.", "Pay ve paydayı (√5 + √3) ile çarparız: 2(√5 + √3)/(5 − 3) = 2(√5 + √3)/2 = √5 + √3"]
    ]],
    ["Gerçek Sayı Aralıkları", [
      "Kapalı aralık [a, b]: a ≤ x ≤ b (uçlar dahil) · Açık aralık (a, b): a < x < b",
      "Yarı açık: [a, b) → a ≤ x < b · (a, b] → a < x ≤ b",
      "Sonsuz aralık: [a, ∞) → x ≥ a · (−∞, b) → x < b (∞ her zaman açık parantez)",
      "Kesişim (∩): iki aralığın ortak kısmı · Birleşim (∪): en az birinde olanlar",
      "Sayı doğrusunda dahil olan uç: dolu nokta · dahil olmayan: boş nokta"
    ], [
      "Gerçek sayılar sayı doğrusundaki tüm noktalara karşılık gelir; iki gerçek sayı arasında sonsuz tane gerçek sayı vardır. Bu yüzden belirli bir sınır arasındaki sayılar aralık gösterimiyle yazılır. Köşeli parantez ucun dahil olduğunu, normal parantez dahil olmadığını gösterir.",
      "Aralıklarla kesişim, birleşim ve fark işlemleri sayı doğrusu üzerinde gösterilerek yapılır. Örneğin A = [−2, 5) ve B = (1, 8] için A ∩ B = (1, 5), A ∪ B = [−2, 8], A \\ B = [−2, 1] olur. Sonsuzluk bir sayı olmadığı için her zaman açık uçla yazılır."
    ], [
      ["−3 < x ≤ 4 eşitsizliğinin aralık gösterimi hangisidir?", "(−3, 4]", "[−3, 4)", "[−3, 4]", "(−3, 4)", "−3 dahil değil, 4 dahil."],
      ["A = [1, 6) ve B = (3, 9] ise A ∩ B hangisidir?", "(3, 6)", "[1, 9]", "[3, 6]", "(1, 9)", "Ortak kısım: 3'ten büyük, 6'dan küçük."],
      ["[−2, 3) aralığında kaç tam sayı vardır?", "5", "6", "4", "3", "−2, −1, 0, 1, 2"],
      ["x ≥ −1 koşulunu sağlayan sayıların aralık gösterimi hangisidir?", "[−1, ∞)", "(−1, ∞)", "(−∞, −1]", "[−1, ∞]", "∞ açık yazılır."],
      ["A = (−∞, 2] ve B = (0, 5) ise A ∪ B hangisidir?", "(−∞, 5)", "(0, 2]", "(−∞, 5]", "[0, 5)", "Birleşim sola sonsuz, sağda 5 hariç."]
    ], [
      ["A = [−4, 3) ve B = (−1, 6] aralıkları veriliyor. A ∩ B, A ∪ B ve A \\ B kümelerini aralık olarak yazınız ve sayı doğrusunda gösteriniz.", "A ∩ B = (−1, 3); A ∪ B = [−4, 6]; A \\ B = [−4, −1]. Sayı doğrusunda dahil uçlar dolu, dahil olmayan uçlar boş nokta ile işaretlenir."],
      ["Bir otoparkta araç boyu en az 1,5 m ve 2,2 m'den az olmalıdır. Bu koşulu aralık ve eşitsizlik ile gösteriniz; 2,2 m'lik bir aracın kabul edilip edilmediğini gerekçelendiriniz.", "1,5 ≤ x < 2,2 → [1,5; 2,2). 2,2 sağ uçtur ve açık parantezle gösterildiği için aralığa dahil değildir; araç kabul edilmez."]
    ]],
    ["Sayı Kümeleri ve İşlem Özellikleri", [
      "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ · İrrasyonel sayılar (𝕀): √2, π, e",
      "ℚ ∪ 𝕀 = ℝ ve ℚ ∩ 𝕀 = ∅",
      "Kapalılık: bir kümede işlemin sonucu yine o kümede mi? (ℕ çıkarmaya göre kapalı değil: 2 − 5 = −3)",
      "Değişme, birleşme, dağılma özellikleri; etkisiz eleman (toplamada 0, çarpmada 1); ters eleman",
      "İki irrasyonelin toplamı/çarpımı rasyonel olabilir: √2 · √2 = 2"
    ], [
      "Sayı kümeleri iç içe genişler: doğal sayılar, tam sayılar, rasyonel sayılar ve gerçek sayılar. a/b (b ≠ 0) biçiminde yazılamayan sayılar irrasyoneldir; rasyonel ve irrasyonel sayılar birlikte gerçek sayıları oluşturur.",
      "Bir kümenin bir işleme göre kapalı olması, o kümeden alınan her iki elemanın işlem sonucunun yine o kümede olmasıdır. Doğal sayılar toplamaya göre kapalıdır ama çıkarmaya göre değildir; tam sayılar bölmeye göre kapalı değildir (1 ÷ 2 ∉ ℤ). Bir iddianın yanlış olduğunu göstermek için tek bir karşı örnek yeterlidir; doğru olduğunu göstermek için ise genel bir gerekçe gerekir."
    ], [
      ["Aşağıdakilerden hangisi irrasyonel sayıdır?", "√7", "√49", "0,333...", "−4/9", "7 tam kare değil."],
      ["Tam sayılar kümesi hangi işleme göre kapalı değildir?", "Bölme", "Toplama", "Çıkarma", "Çarpma", "Örneğin 3 ÷ 2 ∉ ℤ."],
      ["Gerçek sayılarda çarpma işleminin etkisiz elemanı hangisidir?", "1", "0", "−1", "Yoktur", "a · 1 = a"],
      ["\"İki irrasyonel sayının çarpımı her zaman irrasyoneldir.\" iddiasını çürüten örnek hangisidir?", "√3 · √3 = 3", "√2 · √3 = √6", "π · 2 = 2π", "√5 · 1 = √5", "Çarpım rasyonel olabilir."],
      ["0,2525... devirli ondalık sayısı hangi kümenin elemanı değildir?", "İrrasyonel sayılar", "Rasyonel sayılar", "Gerçek sayılar", "Hepsinin elemanıdır", "Devirli sayılar rasyoneldir: 25/99."]
    ], [
      ["\"Doğal sayılar kümesi çıkarma işlemine göre kapalıdır.\" iddiasını değerlendiriniz; gerekçenizi örnekle açıklayınız.", "Yanlıştır. 3 ve 7 doğal sayıdır fakat 3 − 7 = −4 doğal sayı değildir. Bir karşı örnek iddiayı çürütür."],
      ["İki irrasyonel sayının toplamının rasyonel olabileceğini bir örnekle gösteriniz.", "(2 + √3) ve (2 − √3) irrasyoneldir; toplamları 4'tür ve rasyoneldir."]
    ]],
    ["Özdeşlikler: Tam Kare ve İki Kare Farkı", [
      "(a + b)² = a² + 2ab + b² · (a − b)² = a² − 2ab + b²",
      "a² − b² = (a − b)(a + b)",
      "Alan modeli: kenarı (a + b) olan kare = a² + b² + iki tane ab dikdörtgeni",
      "Sayılarla ilişki: 47 · 53 = (50 − 3)(50 + 3) = 2500 − 9 = 2491",
      "a + b ve ab biliniyorsa: a² + b² = (a + b)² − 2ab"
    ], [
      "Özdeşlikler, değişkenlerin aldığı her değer için doğru olan eşitliklerdir. (a + b)² özdeşliği geometrik olarak kenarı a + b olan karenin alanının; kenarı a olan kare, kenarı b olan kare ve iki tane a·b dikdörtgeninin alanları toplamına eşit olmasıyla gösterilir.",
      "İki kare farkı özdeşliği, kenarı a olan kareden kenarı b olan kare çıkarıldığında kalan parçanın kesilip (a − b) ve (a + b) kenarlı bir dikdörtgene dönüştürülmesiyle modellenir. Bu özdeşlikler hem hesaplamayı kolaylaştırır hem de sayı örüntülerindeki genellemelerin kanıtlanmasında kullanılır: ardışık iki tam sayının kareleri farkı bu sayıların toplamına eşittir, çünkü (n + 1)² − n² = 2n + 1."
    ], [
      ["(2x − 3)² ifadesinin açılımı hangisidir?", "4x² − 12x + 9", "4x² − 9", "4x² − 6x + 9", "2x² − 12x + 9", "(2x)² − 2·2x·3 + 3²"],
      ["101² − 99² işleminin sonucu kaçtır?", "400", "200", "4", "2000", "(101 − 99)(101 + 99) = 2 · 200"],
      ["a − b = 3 ve a · b = 10 ise a² + b² kaçtır?", "29", "19", "9", "39", "(a − b)² + 2ab = 9 + 20"],
      ["x² − 16y² ifadesinin çarpanlarına ayrılmış hâli hangisidir?", "(x − 4y)(x + 4y)", "(x − 4y)²", "(x − 8y)(x + 8y)", "(x − 16y)(x + y)", "İki kare farkı."],
      ["Kenarı (x + 5) cm olan bir karenin alanı, kenarı x cm olan kareden kaç cm² fazladır?", "10x + 25", "25", "5x + 25", "10x", "(x + 5)² − x² = 10x + 25"]
    ], [
      ["\"Ardışık iki doğal sayının karelerinin farkı, bu sayıların toplamına eşittir.\" iddiasını n ve n + 1 kullanarak özdeşlikle gerekçelendiriniz.", "(n + 1)² − n² = n² + 2n + 1 − n² = 2n + 1 = n + (n + 1). Fark, sayıların toplamına eşittir; iddia her n için doğrudur."],
      ["(a + b)² = a² + 2ab + b² özdeşliğini alan modeliyle açıklayınız.", "Kenarı a + b olan kare; kenarı a olan bir kare (a²), kenarı b olan bir kare (b²) ve kenarları a ile b olan iki dikdörtgene (2ab) ayrılır. Toplam alan a² + 2ab + b²'dir."],
      ["49 · 51 çarpımını özdeşlik kullanarak hesaplayınız.", "(50 − 1)(50 + 1) = 50² − 1² = 2500 − 1 = 2499"]
    ]]
  ]],
  ["Nicelikler ve Değişimler", 1, [
    ["Fonksiyon Kavramı ve Gösterimleri", [
      "Fonksiyon: tanım kümesindeki her elemanı değer kümesinde yalnız bir elemanla eşleyen kural",
      "Gösterimler: sözel, tablo, cebirsel (f(x) = 2x + 1), grafik",
      "Düşey doğru testi: her düşey doğru grafiği en fazla bir noktada kesiyorsa fonksiyondur.",
      "Görüntü kümesi: f(A), değer kümesinin alt kümesidir.",
      "f(a) değeri: x yerine a yazılarak bulunur."
    ], [
      "Bir niceliğin başka bir niceliğe bağlı olarak değişimi fonksiyonlarla modellenir. Örneğin bir taksinin ücreti gidilen yola bağlıdır. A kümesinin her elemanı B kümesinden yalnız bir elemanla eşleniyorsa bu bağıntı A'dan B'ye bir fonksiyondur; A tanım, B değer kümesidir. Tanım kümesinde açıkta kalan eleman olmamalı, bir eleman iki farklı elemanla eşlenmemelidir.",
      "Fonksiyonlar tablo, grafik, cebirsel ifade ya da sözel olarak gösterilebilir ve bu gösterimler birbirine dönüştürülebilir. Grafik bir fonksiyon belirtiyorsa x eksenine dik çizilen her doğru grafiği en fazla bir noktada keser."
    ], [
      ["f(x) = 3x − 4 ise f(5) kaçtır?", "11", "19", "1", "15", "3 · 5 − 4 = 11"],
      ["f(x) = x² − 2x ise f(−1) kaçtır?", "3", "−1", "1", "−3", "1 + 2 = 3"],
      ["Aşağıdaki eşlemelerden hangisi A = {1, 2, 3}'ten B'ye bir fonksiyondur?", "{(1, a), (2, a), (3, b)}", "{(1, a), (1, b), (2, c), (3, c)}", "{(1, a), (2, b)}", "{(2, a), (3, b), (3, c), (1, a)}", "Her eleman tek bir görüntüye sahip."],
      ["f(x) = 2x + k ve f(3) = 10 ise k kaçtır?", "4", "16", "7", "−4", "6 + k = 10"],
      ["Bir grafiğin fonksiyon olup olmadığı hangi testle anlaşılır?", "Düşey doğru testi", "Yatay doğru testi", "Eğim testi", "Simetri testi", "x eksenine dik doğrular."]
    ], [
      ["Bir telefon hattında aylık sabit ücret 120 TL ve her GB ek internet 15 TL'dir. Aylık ücreti kullanılan ek GB'ye bağlı fonksiyon olarak yazınız; f(4)'ü bulup anlamını açıklayınız.", "f(x) = 15x + 120. f(4) = 60 + 120 = 180: 4 GB ek internet kullanan kişi o ay 180 TL öder."],
      ["A = {1, 2, 3, 4} kümesinden B = {a, b, c} kümesine tanımlı bir bağıntının fonksiyon olabilmesi için hangi iki koşulu sağlaması gerektiğini açıklayınız.", "1) A'daki her elemanın bir görüntüsü olmalı (açıkta eleman kalmamalı). 2) A'daki hiçbir eleman B'de birden fazla elemanla eşlenmemeli."]
    ]],
    ["Doğrusal Fonksiyonlar ve Değişim Oranı", [
      "Doğrusal fonksiyon: f(x) = ax + b → grafiği bir doğru",
      "a: değişim oranı (eğim) = Δy / Δx · b: y eksenini kestiği nokta (başlangıç değeri)",
      "a > 0 artan, a < 0 azalan, a = 0 sabit fonksiyon",
      "x eksenini kestiği nokta: f(x) = 0 çözülür.",
      "İki noktası bilinen doğrusal fonksiyon: önce a, sonra b bulunur."
    ], [
      "Bağımsız değişkendeki eşit artışlara bağımlı değişkende de eşit değişimler karşılık geliyorsa aradaki ilişki doğrusaldır. Bu durumda f(x) = ax + b biçiminde yazılır. a katsayısı x'teki bir birimlik artışın f(x)'te yarattığı değişimi, yani değişim oranını gösterir.",
      "Gerçek hayat durumlarında b genellikle başlangıç değeri (sabit ücret, depodaki ilk su miktarı), a ise birim başına değişimdir. Grafikten yorum yaparken eksenlerin birimleri ve fonksiyonun tanımlı olduğu aralık dikkate alınmalıdır."
    ], [
      ["f(x) = −2x + 6 fonksiyonu x eksenini hangi noktada keser?", "(3, 0)", "(0, 6)", "(−3, 0)", "(6, 0)", "−2x + 6 = 0 → x = 3"],
      ["(1, 5) ve (4, 14) noktalarından geçen doğrusal fonksiyonun değişim oranı kaçtır?", "3", "9", "1/3", "4", "(14 − 5)/(4 − 1) = 3"],
      ["300 litrelik depodan dakikada 12 litre su boşalıyor. Kalan su miktarını veren fonksiyon hangisidir?", "f(t) = 300 − 12t", "f(t) = 12t + 300", "f(t) = 300t − 12", "f(t) = 12t − 300", "Başlangıç 300, her dakika 12 azalır."],
      ["f(x) = ax + b için f(0) = 4 ve f(2) = 10 ise f(5) kaçtır?", "19", "24", "14", "29", "b = 4, a = 3 → 15 + 4"],
      ["Hangisi azalan bir doğrusal fonksiyondur?", "f(x) = 5 − x", "f(x) = x + 5", "f(x) = 5", "f(x) = 2x", "a = −1 < 0"]
    ], [
      ["Bir mum yakıldığında boyu her saat aynı miktarda kısalıyor. 2 saat sonra 18 cm, 5 saat sonra 9 cm kalıyor. Mumun boyunu zamana bağlı fonksiyon olarak yazınız; mumun ilk boyunu ve kaç saatte biteceğini bulunuz.", "Değişim oranı: (9 − 18)/(5 − 2) = −3 cm/saat. f(t) = −3t + b; f(2) = 18 → b = 24. f(t) = 24 − 3t. İlk boy 24 cm; 24 − 3t = 0 → t = 8 saatte biter."],
      ["İki şirketin taksi ücretleri: A = 40 + 15x, B = 25 + 18x (x: km). Hangi mesafeden sonra A şirketi daha ucuzdur? Gerekçelendiriniz.", "40 + 15x < 25 + 18x → 15 < 3x → x > 5. 5 km'den uzun yolculuklarda A daha ucuzdur; 5 km'de eşit (115 TL)."]
    ]]
  ]],
  ["Geometrik Şekiller", 2, [
    ["Üçgenlerde Açı ve Kenar Bağıntıları", [
      "İç açılar toplamı 180° · Bir dış açı, kendisine komşu olmayan iki iç açının toplamına eşittir.",
      "Üçgen eşitsizliği: |b − c| < a < b + c",
      "Büyük kenar karşısında büyük açı bulunur.",
      "İkizkenar üçgende taban açıları eşittir; eşkenar üçgende tüm açılar 60°.",
      "Pisagor: dik üçgende a² + b² = c²"
    ], [
      "Üçgenin iç açılarının toplamının 180° olduğu, bir köşeden karşı kenara paralel çizilerek ve iç ters açılar kullanılarak gösterilir. Bir dış açı, komşu olmayan iki iç açının toplamına eşittir; çünkü dış açı ile komşu iç açı 180°'yi tamamlar.",
      "Üçgen eşitsizliği, bir kenarın diğer iki kenarın toplamından küçük, farkından büyük olmasıdır; aksi hâlde kenarlar birleşip üçgen oluşturamaz. Kenar ve açı arasındaki ilişkiye göre en uzun kenarın karşısında en büyük açı bulunur."
    ], [
      ["Bir üçgenin iki iç açısı 48° ve 77° ise üçüncü açısı kaç derecedir?", "55", "65", "45", "125", "180 − 125"],
      ["Kenarları 6 ve 10 cm olan bir üçgenin üçüncü kenarı tam sayı ise kaç farklı değer alabilir?", "11", "10", "9", "12", "4 < x < 16 → 5..15"],
      ["Bir üçgende dış açı 130° ve komşu olmayan iç açılardan biri 70° ise diğeri kaçtır?", "60", "50", "110", "40", "130 − 70"],
      ["ABC üçgeninde |AB| = 7, |BC| = 9, |AC| = 5 ise en küçük açı hangisidir?", "B", "A", "C", "Belirlenemez", "En kısa kenar AC'nin karşısı B."]
    ], [
      ["Üçgenin iç açılarının toplamının 180° olduğunu bir köşeden karşı kenara paralel doğru çizerek gerekçelendiriniz.", "A köşesinden BC'ye paralel bir d doğrusu çizilir. d üzerinde A'nın iki yanında oluşan açılar, iç ters açı olduğu için B ve C açılarına eşittir. Bu iki açı ile A açısı d doğrusu üzerinde doğru açı (180°) oluşturur. Dolayısıyla A + B + C = 180°."],
      ["Kenar uzunlukları 3 cm, 4 cm ve 8 cm olan bir üçgen çizilebilir mi? Gerekçelendiriniz.", "Çizilemez. 3 + 4 = 7 < 8 olduğundan üçgen eşitsizliği sağlanmaz; kısa iki kenar uzun kenarın uçlarını birleştiremez."]
    ]],
    ["Eşlik ve Benzerlik", [
      "Eşlik kuralları: KKK, KAK, AKA",
      "Benzerlik kuralları: AA, KAK (oranlı), KKK (oranlı)",
      "Benzerlik oranı k ise çevreler oranı k, alanlar oranı k²",
      "Temel orantı teoremi: üçgende bir kenara paralel doğru diğer kenarları orantılı böler."
    ], [
      "İki üçgenin eş olduğunu göstermek için tüm kenar ve açıları karşılaştırmak gerekmez; KKK, KAK ve AKA kurallarından biri yeterlidir. Eş üçgenlerin karşılıklı tüm elemanları eşittir.",
      "İki üçgenin karşılıklı açıları eşit ise üçgenler benzerdir (AA). Benzer üçgenlerde karşılıklı kenarlar orantılıdır; benzerlik oranı k ise çevreler oranı da k, alanlar oranı k²'dir. Benzerlik; gölge boyu, harita ölçeği ve ulaşılamayan uzunlukların hesaplanmasında kullanılır."
    ], [
      ["Benzerlik oranı 2/3 olan iki üçgenin alanları oranı kaçtır?", "4/9", "2/3", "8/27", "4/6", "k² = 4/9"],
      ["Boyu 1,8 m olan kişinin gölgesi 2,4 m iken bir ağacın gölgesi 12 m'dir. Ağaç kaç m'dir?", "9", "16", "10,8", "8", "1,8/2,4 = h/12 → h = 9"],
      ["İki açısı karşılıklı eşit olan üçgenler için hangisi kesinlikle doğrudur?", "Benzerdirler.", "Eştirler.", "Alanları eşittir.", "Çevreleri eşittir.", "AA benzerliği."],
      ["ABC üçgeninde DE ∥ BC, |AD| = 4, |DB| = 6, |AE| = 6 ise |EC| kaçtır?", "9", "4", "10", "8", "4/6 = 6/x → x = 9"]
    ], [
      ["Bir nehrin genişliğini doğrudan ölçemeyen bir öğrencinin benzer üçgenler kullanarak genişliği nasıl hesaplayabileceğini açıklayınız.", "Karşı kıyıda bir nokta seçilir; kendi kıyısında iki dik doğru boyunca ölçümler yapılarak biri nehri, diğeri karada ölçülebilen iki benzer dik üçgen oluşturulur (AA). Karşılıklı kenarlar orantılı olduğundan bilinmeyen genişlik orantıdan bulunur."]
    ]]
  ]],
  ["İstatistiksel Araştırma ve Olasılık", 2, [
    ["Veri Toplama, Merkezî Eğilim ve Yayılım", [
      "İstatistiksel süreç: soru oluşturma → veri toplama → analiz → yorum",
      "Aritmetik ortalama, ortanca (medyan), tepe değer (mod)",
      "Açıklık = en büyük − en küçük · Çeyrekler açıklığı = Q3 − Q1",
      "Uç değerler ortalamayı çok, ortancayı az etkiler.",
      "Örneklem ana kütleyi temsil etmeli; yanlı örneklem hatalı sonuç verir."
    ], [
      "İstatistiksel araştırma; araştırılabilir bir soru belirleme, uygun yöntemle veri toplama, verileri tablo ve grafiklerle düzenleme, analiz etme ve sonuçları yorumlama aşamalarından oluşur. Örneklem, ana kütleyi temsil edecek biçimde seçilmelidir.",
      "Merkezî eğilim ölçüleri verinin 'tipik' değerini, yayılım ölçüleri ise verilerin ne kadar dağınık olduğunu gösterir. Uç değer içeren verilerde ortanca, ortalamadan daha iyi bir temsil değeridir. Kutu grafiği beş sayı özetini (en küçük, Q1, ortanca, Q3, en büyük) gösterir."
    ], [
      ["4, 7, 7, 9, 13 veri grubunun ortancası kaçtır?", "7", "8", "9", "13", "Sıralı verinin ortası."],
      ["3, 5, 8, 10, 24 verisinin aritmetik ortalaması kaçtır?", "10", "8", "12", "50", "50/5 = 10"],
      ["2, 6, 6, 8, 18 verisinin açıklığı kaçtır?", "16", "18", "6", "12", "18 − 2"],
      ["Bir okulda öğrencilerin spora ilgisini ölçmek için yalnızca basketbol takımına anket yapmak neden uygun değildir?", "Örneklem ana kütleyi temsil etmez (yanlıdır).", "Veri sayısı çok fazladır.", "Ortalama hesaplanamaz.", "Grafik çizilemez.", "Yanlı örneklem."]
    ], [
      ["Bir sınıfta 5 öğrencinin aylık harçlıkları: 400, 450, 500, 550, 3000 TL. Ortalama ve ortancayı bulunuz; hangisinin bu sınıfı daha iyi temsil ettiğini gerekçelendiriniz.", "Ortalama = 4900/5 = 980 TL; ortanca = 500 TL. 3000 TL uç değeri ortalamayı yükseltmiştir; öğrencilerin çoğunu ortanca (500 TL) daha iyi temsil eder."]
    ]],
    ["Olasılık", [
      "Örnek uzay: deneyin tüm sonuçları · Olay: örnek uzayın alt kümesi",
      "P(A) = s(A) / s(E) · 0 ≤ P(A) ≤ 1",
      "Tümleyen: P(A') = 1 − P(A)",
      "Deneysel olasılık deneme sayısı arttıkça teorik olasılığa yaklaşır."
    ], [
      "Bir deneyin bütün olası sonuçlarının kümesine örnek uzay denir. Eş olasılıklı sonuçlarda bir olayın olasılığı, istenen sonuç sayısının tüm sonuç sayısına oranıdır. İki zarın atılması gibi deneylerde örnek uzay tablo ile listelenir (36 sonuç).",
      "Deneysel olasılık, bir deney çok kez tekrarlandığında olayın gerçekleşme sıklığıdır. Deneme sayısı arttıkça deneysel olasılık teorik olasılığa yaklaşır; bu, büyük sayılar yasası olarak bilinir."
    ], [
      ["İki zar atıldığında üst yüzlerin toplamının 7 olma olasılığı kaçtır?", "1/6", "7/36", "1/12", "1/36", "6 durum / 36"],
      ["Bir para 3 kez atıldığında örnek uzay kaç elemanlıdır?", "8", "6", "3", "9", "2³"],
      ["P(A) = 0,3 ise P(A') kaçtır?", "0,7", "0,3", "1,3", "0", "1 − 0,3"],
      ["Bir torbada 5 beyaz, 3 siyah bilye var. Çekilen bilyenin siyah olmama olasılığı kaçtır?", "5/8", "3/8", "3/5", "1/2", "Beyaz: 5/8"]
    ], [
      ["Bir öğrenci zarı 60 kez atıp 15 kez 6 geldiğini görüyor. Deneysel ve teorik olasılığı karşılaştırınız; farkın nedenini açıklayınız.", "Deneysel: 15/60 = 1/4. Teorik: 1/6. Deneme sayısı az olduğu için şans etkisiyle fark oluşur; deneme sayısı arttıkça deneysel olasılık 1/6'ya yaklaşır."]
    ]]
  ]]
]);
