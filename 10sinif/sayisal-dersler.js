// 10. sınıf Matematik, Fizik, Kimya, Biyoloji (konu sırası okulunuzun yıllık planına göre değişebilir)
DERS("matematik", "mat", { ad: "Matematik", ikon: "➗", renk: "#4f7cff" }, [
  ["Sayılar", 1, [
    ["Bölünebilme, Asal Sayılar, EBOB ve EKOK", [
      "Asal sayı: 1'den büyük, yalnızca 1'e ve kendisine bölünen sayı (2, 3, 5, 7, 11, 13 …). 2 tek çift asaldır.",
      "Asal çarpanlara ayırma: 360 = 2³ · 3² · 5 → pozitif bölen sayısı (3+1)(2+1)(1+1) = 24",
      "Bölünebilme: 3 → rakamlar toplamı 3'ün katı · 4 → son iki basamak · 9 → rakamlar toplamı · 11 → (birler − onlar + yüzler …) 11'in katı",
      "EBOB: ortak asal çarpanların en küçük üslüleri · EKOK: bütün asal çarpanların en büyük üslüleri",
      "a · b = EBOB(a, b) · EKOK(a, b)"
    ], [
      "Her doğal sayı asal çarpanlarına tek biçimde ayrılır (aritmetiğin temel teoremi). Bu ayrılış, bölen sayısını, EBOB'u ve EKOK'u bulmanın en güvenli yoludur. Örneğin 84 = 2² · 3 · 7 ve 90 = 2 · 3² · 5 için EBOB = 2 · 3 = 6, EKOK = 2² · 3² · 5 · 7 = 1260'tır.",
      "EBOB problemleri genellikle 'en büyük eş parça', 'en az sayıda eş kutu' gibi bölme durumlarında; EKOK problemleri ise 'aynı anda tekrar', 'en az kaç' gibi tekrar eden olaylarda kullanılır."
    ], [
      ["72 sayısının pozitif bölen sayısı kaçtır?", "12", "8", "10", "6", "72 = 2³ · 3² → (3+1)(2+1) = 12"],
      ["EBOB(24, 36) kaçtır?", "12", "6", "72", "4", "24 = 2³·3, 36 = 2²·3² → 2²·3 = 12"],
      ["Üç basamaklı 5A4 sayısı 9 ile tam bölünüyorsa A'nın alabileceği değerlerin toplamı kaçtır?", "9", "0", "18", "6", "5 + A + 4 = 9 + A, 9'un katı olmalı → A = 0 ya da 9 → toplam 9"],
      ["İki sayının EBOB'u 6, EKOK'u 90'dır. Sayılardan biri 18 ise diğeri kaçtır?", "30", "15", "45", "36", "a · b = 6 · 90 = 540 → 540 / 18 = 30"]
    ], [
      ["Kenarları 84 cm ve 120 cm olan dikdörtgen bir kartondan hiç artmayacak biçimde en büyük eş kareler kesilecektir. Karenin kenarı ve kare sayısı kaç olur? Gerekçesiyle yazınız.", "Kare kenarı iki kenarı da tam bölmeli ve en büyük olmalı: EBOB(84, 120) = 12 cm. Kare sayısı (84/12) · (120/12) = 7 · 10 = 70."],
      ["İki otobüs aynı duraktan 12 ve 18 dakikada bir kalkıyor. Saat 08.00'de birlikte kalktıklarına göre ilk kez saat kaçta yine birlikte kalkarlar?", "EKOK(12, 18) = 36 dakika → 08.36."]
    ]]
  ]],
  ["Geometrik Şekiller: Dik Üçgen ve Trigonometri", 1, [
    ["Dik Üçgende Trigonometrik Oranlar", [
      "sin α = karşı dik kenar / hipotenüs · cos α = komşu dik kenar / hipotenüs",
      "tan α = karşı / komşu · cot α = komşu / karşı",
      "Tümler açılar: sin α = cos(90° − α), tan α = cot(90° − α)",
      "Özel üçgenler: 30-60-90 → kenarlar 1 : √3 : 2 · 45-45-90 → 1 : 1 : √2",
      "sin²α + cos²α = 1"
    ], [
      "Trigonometrik oranlar, dik üçgende bir dar açıya göre kenarların oranıdır; üçgenin büyüklüğüne değil, yalnızca açıya bağlıdır. Bu yüzden benzer dik üçgenlerde aynı açının oranları eşittir.",
      "Özel değerler: sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2; cos 30° = √3/2, cos 60° = 1/2; tan 45° = 1, tan 60° = √3. Yükseklik, gölge ve eğim problemleri bu oranlarla çözülür."
    ], [
      ["Dik kenarları 6 ve 8 olan dik üçgende küçük dar açının sinüsü kaçtır?", "3/5", "4/5", "3/4", "4/3", "Hipotenüs 10; küçük açının karşısı 6 → 6/10"],
      ["sin 30° + cos 60° toplamı kaçtır?", "1", "1/2", "√3", "√3/2", "1/2 + 1/2"],
      ["Bir dar açı için cos α = 5/13 ise tan α kaçtır?", "12/5", "5/12", "12/13", "13/12", "Karşı kenar √(169 − 25) = 12 → 12/5"],
      ["Güneş ışınları yerle 45° açı yaparken 12 m'lik direğin gölgesi kaç metredir?", "12", "6", "12√2", "6√2", "tan 45° = 1 → gölge = yükseklik"]
    ], [
      ["Bir merdiven duvara yaslanmıştır. Merdiven 10 m, yerle yaptığı açı 60°'dir. Merdivenin duvara dayandığı yüksekliği ve duvardan uzaklığını bulunuz.", "Yükseklik = 10 · sin 60° = 5√3 m; uzaklık = 10 · cos 60° = 5 m."]
    ]],
    ["Sinüs ve Kosinüs Teoremleri, Üçgende Alan", [
      "Sinüs teoremi: a / sin A = b / sin B = c / sin C = 2R",
      "Kosinüs teoremi: a² = b² + c² − 2bc · cos A",
      "Alan = (1/2) · b · c · sin A",
      "İki kenar ve arasındaki açı → kosinüs teoremi · iki açı ve bir kenar → sinüs teoremi"
    ], [
      "Kosinüs teoremi Pisagor bağıntısının genellemesidir: A = 90° iken cos A = 0 olduğundan a² = b² + c² olur. A geniş açıysa cos A negatif olur ve a² > b² + c² çıkar.",
      "Sinüs teoremi, bir kenarın karşısındaki açının sinüsüyle orantılı olduğunu söyler; büyük açının karşısında büyük kenar bulunur."
    ], [
      ["b = 3, c = 5 ve A = 60° olan üçgende a kaçtır?", "√19", "7", "4", "√34", "a² = 9 + 25 − 2·3·5·(1/2) = 19"],
      ["İki kenarı 6 ve 8, aralarındaki açı 30° olan üçgenin alanı kaçtır?", "12", "24", "12√3", "48", "(1/2)·6·8·(1/2)"],
      ["Bir üçgende A = 30°, a = 4 ise çevrel çemberin yarıçapı R kaçtır?", "4", "2", "8", "4√3", "a / sin A = 2R → 4 / (1/2) = 8 = 2R"],
      ["b = 5, c = 3 ve A = 120° ise a kaçtır?", "7", "√19", "8", "2", "a² = 25 + 9 − 30·(−1/2) = 49"]
    ], [
      ["İki gemi aynı limandan aralarında 60° açı olacak doğrultularda çıkıyor. Biri 6 km, diğeri 10 km gidince aralarındaki uzaklık kaç km olur? İşlemleri yazınız.", "Kosinüs teoremi: d² = 6² + 10² − 2·6·10·cos 60° = 36 + 100 − 60 = 76 → d = √76 = 2√19 km."]
    ]]
  ]],
  ["İstatistiksel Araştırma Süreci", 1, [
    ["Veri Toplama, Grafikler ve Merkezî Eğilim", [
      "Araştırma süreci: soru oluşturma → veri toplama → verileri düzenleme/gösterme → yorumlama",
      "Nitel veri (renk, tür) · nicel veri (boy, puan): kesikli ya da sürekli",
      "Aritmetik ortalama = toplam / veri sayısı · Medyan: sıralı verinin ortası · Mod: en çok tekrar eden",
      "Açıklık = en büyük − en küçük · Çeyrekler açıklığı = Q3 − Q1",
      "Kutu grafiği uç değerleri ve yayılımı gösterir; histogram sürekli veride sıklığı gösterir"
    ], [
      "İyi bir istatistiksel soru, cevabı verilerde değişkenlik beklenen sorudur ('Sınıfımızdaki öğrenciler günde kaç saat uyuyor?'). Örneklem, evreni temsil edecek biçimde seçilmelidir; yanlı örneklem yanlış sonuç verir.",
      "Uç değerler aritmetik ortalamayı çok etkiler, medyanı az etkiler. Bu yüzden gelir gibi uç değer içeren verilerde medyan daha temsilî olabilir."
    ], [
      ["4, 7, 7, 9, 13 veri grubunun medyanı kaçtır?", "7", "8", "9", "13", "Sıralı verinin ortası 3. veri"],
      ["2, 5, 5, 8, 10 veri grubunun aritmetik ortalaması kaçtır?", "6", "5", "7", "8", "30 / 5"],
      ["Bir veri grubuna çok büyük bir uç değer eklenirse en çok hangisi değişir?", "Aritmetik ortalama", "Medyan", "Mod", "Veri türü", "Ortalama tüm değerlerin toplamına bağlıdır."],
      ["Hangisi nitel bir veridir?", "Göz rengi", "Boy uzunluğu", "Sınav puanı", "Kardeş sayısı", "Sayıyla ölçülmeyen özellik."]
    ], [
      ["Bir sınıfta 5 öğrencinin günlük ekran süreleri (saat) 2, 3, 3, 4 ve 13'tür. Ortalamayı ve medyanı bulup bu veri için hangisinin daha temsilî olduğunu açıklayınız.", "Ortalama = 25/5 = 5 saat, medyan = 3 saat. 13 uç değeri ortalamayı yükselttiği için öğrencilerin çoğunu medyan (3) daha iyi temsil eder."]
    ]]
  ]],
  ["Nicelikler ve Değişimler: Fonksiyonlar", 2, [
    ["İkinci Dereceden, Karekök ve Rasyonel Fonksiyonlar", [
      "f(x) = ax² + bx + c → parabol; tepe noktası r = −b/2a, k = f(r)",
      "a > 0 kollar yukarı (en küçük değer k) · a < 0 kollar aşağı (en büyük değer k)",
      "Δ = b² − 4ac: Δ > 0 iki kök, Δ = 0 tek (çakışık) kök, Δ < 0 gerçek kök yok",
      "f(x) = √x → tanım kümesi x ≥ 0 · f(x) = 1/x → x ≠ 0, asimptotlar x = 0 ve y = 0",
      "Fonksiyon dönüşümleri: f(x − a) sağa a, f(x) + b yukarı b birim öteleme"
    ], [
      "İkinci dereceden fonksiyonlar sabit ivmeli hareket, alan ve kâr problemlerinde değişimi modeller. Grafiğin simetri ekseni x = r doğrusudur; köklerin aritmetik ortalaması da r'dir.",
      "Rasyonel fonksiyonlarda paydayı sıfır yapan değerler tanım kümesinden çıkarılır. f(x) = 1/x grafiği eksenlere yaklaşır ama onları kesmez; ters orantılı nicelikler bu biçimde değişir."
    ], [
      ["f(x) = x² − 6x + 5 parabolünün tepe noktasının apsisi kaçtır?", "3", "−3", "6", "5", "r = −b / 2a = 6/2"],
      ["f(x) = −2x² + 8x fonksiyonunun en büyük değeri kaçtır?", "8", "2", "4", "16", "r = 2, f(2) = −8 + 16 = 8"],
      ["x² − 4x + 4 = 0 denkleminin kaç farklı gerçek kökü vardır?", "1", "2", "0", "3", "Δ = 16 − 16 = 0"],
      ["f(x) = √(x − 3) fonksiyonunun en geniş tanım kümesi hangisidir?", "x ≥ 3", "x > 3", "x ≥ 0", "x ≤ 3", "Karekökün içi negatif olamaz."]
    ], [
      ["Bir top yerden atıldıktan t saniye sonra yüksekliği h(t) = −5t² + 20t metredir. Topun çıkabileceği en büyük yüksekliği ve yere düştüğü anı bulunuz.", "Tepe: t = −20 / (2·(−5)) = 2 s, h(2) = −20 + 40 = 20 m. Yere düşme: −5t² + 20t = 0 → t(−5t + 20) = 0 → t = 4 s."]
    ]]
  ]],
  ["Sayma, Algoritma ve Olasılık", 2, [
    ["Sayma Yöntemleri ve Algoritma", [
      "Toplama yoluyla sayma: ayrık durumlar toplanır · Çarpma yoluyla sayma: ardışık seçimler çarpılır",
      "n! = n · (n − 1) · … · 1 · n farklı nesnenin sıralanışı n!",
      "Permütasyon P(n, r) = n! / (n − r)! (sıra önemli) · Kombinasyon C(n, r) = n! / (r!(n − r)!) (sıra önemsiz)",
      "Algoritma: bir problemi çözen sonlu, açık ve sıralı adımlar; akış şemasıyla gösterilebilir"
    ], [
      "Saymada önce 'sıra önemli mi?' sorusu sorulur. Bir sınıftan başkan ve yardımcı seçmek sıra önemli (permütasyon), 3 kişilik komisyon seçmek sıra önemsiz (kombinasyon) bir seçimdir.",
      "Algoritmalar, adımları belirsizlik bırakmadan yazmayı gerektirir: girdiler, işlemler, karar adımları (eğer … ise) ve çıktı açıkça belirtilir."
    ], [
      ["5 kişi bir sıraya kaç farklı biçimde oturabilir?", "120", "25", "60", "24", "5! = 120"],
      ["7 kişilik bir sınıftan başkan ve başkan yardımcısı kaç farklı biçimde seçilir?", "42", "21", "49", "14", "P(7, 2) = 7 · 6"],
      ["8 kişiden 3 kişilik bir ekip kaç farklı biçimde seçilir?", "56", "336", "24", "112", "C(8, 3) = 336 / 6"],
      ["3 gömlek ve 4 pantolonu olan biri kaç farklı kombin yapabilir?", "12", "7", "24", "64", "3 · 4"]
    ], [
      ["Rakamları farklı, üç basamaklı kaç çift sayı yazılabilir? Durumları ayırarak çözünüz.", "Birler 0 ise: 9 · 8 = 72. Birler 2, 4, 6, 8 ise: 4 seçenek, yüzler 0 ve birler rakamı dışında 8, onlar 8 → 4 · 8 · 8 = 256. Toplam 72 + 256 = 328."]
    ]],
    ["Veriden Olasılığa", [
      "Deneysel olasılık = olayın gözlenme sayısı / deneme sayısı",
      "Teorik olasılık P(A) = istenen durum sayısı / tüm (eş olası) durum sayısı",
      "0 ≤ P(A) ≤ 1 · P(A') = 1 − P(A)",
      "Deneme sayısı arttıkça deneysel olasılık teorik olasılığa yaklaşır (büyük sayılar yasası)"
    ], [
      "Bir zar 60 kez atılıp 12 kez 6 gelirse 6 gelmenin deneysel olasılığı 12/60 = 1/5'tir; teorik olasılığı ise 1/6'dır. Deneme sayısı arttıkça deneysel değerin 1/6'ya yaklaşması beklenir.",
      "Olasılık hesaplarken örnek uzayın eş olası çıktılardan oluştuğundan emin olunmalıdır. İki zar atıldığında toplamların olasılıkları eşit değildir: toplam 7, 36 çıktıdan 6'sında gelir."
    ], [
      ["Bir zar atıldığında asal sayı gelme olasılığı kaçtır?", "1/2", "1/3", "2/3", "1/6", "2, 3, 5 → 3/6"],
      ["İki zar atıldığında toplamın 7 olma olasılığı kaçtır?", "1/6", "1/12", "7/36", "1/9", "6/36"],
      ["Bir torbada 3 kırmızı, 5 mavi bilye var. Rastgele çekilen bilyenin kırmızı olmama olasılığı kaçtır?", "5/8", "3/8", "3/5", "1/2", "1 − 3/8"],
      ["Bir para 200 kez atılıyor ve 92 kez yazı geliyor. Yazı gelmenin deneysel olasılığı kaçtır?", "0,46", "0,5", "0,92", "0,54", "92 / 200"]
    ], [
      ["Bir okulda 50 öğrencinin 18'i gözlüklüdür. Okuldan rastgele seçilen bir öğrencinin gözlüklü olma olasılığını tahmin ediniz ve bu tahminin hangi koşulda daha güvenilir olacağını açıklayınız.", "Deneysel tahmin 18/50 = 0,36. Örneklem büyüdükçe ve okulu temsil edecek biçimde (farklı sınıflardan rastgele) seçildikçe tahmin daha güvenilir olur."]
    ]]
  ]]
]);

DERS("fizik", "fiz", { ad: "Fizik", ikon: "⚛️", renk: "#2563eb" }, [
  ["Kuvvet ve Hareket", 1, [
    ["Bir Boyutta Hareket: Konum, Hız ve İvme", [
      "Yer değiştirme = son konum − ilk konum (vektörel) · Alınan yol skalerdir",
      "Ortalama hız = yer değiştirme / süre · Ortalama sürat = alınan yol / süre",
      "İvme a = Δv / Δt · Düzgün doğrusal harekette a = 0, x = v · t",
      "Sabit ivmeli hareket: v = v₀ + a·t · x = v₀·t + (1/2)·a·t² · v² = v₀² + 2·a·x",
      "Konum-zaman grafiğinin eğimi hızı, hız-zaman grafiğinin eğimi ivmeyi, altındaki alan yer değiştirmeyi verir"
    ], [
      "Hareketi anlatmak için bir başlangıç noktası ve yön seçilir. Doğu yönü pozitif seçilirse batıya giden cismin hızı negatif yazılır. Bu nedenle yer değiştirme ile alınan yol farklı olabilir: 5 m doğuya gidip 5 m geri dönen cismin yer değiştirmesi sıfırdır.",
      "Grafik yorumlama fizikte en çok kullanılan beceridir. Hız-zaman grafiğinde yatay doğru sabit hızı, eğik doğru sabit ivmeyi gösterir; grafikle zaman ekseni arasındaki alan, o aralıktaki yer değiştirmedir."
    ], [
      ["Durgun hâlden 2 m/s² ivmeyle hızlanan araç 5 saniye sonunda kaç m/s hıza ulaşır?", "10", "5", "2,5", "20", "v = 0 + 2·5"],
      ["Hız-zaman grafiğinin altındaki alan neyi verir?", "Yer değiştirmeyi", "İvmeyi", "Kuvveti", "Ortalama hızı", "Alan = v · t"],
      ["10 m/s sabit hızla giden bisikletli 1 dakikada kaç metre yol alır?", "600", "60", "100", "6000", "10 · 60"],
      ["Doğuya 8 m, sonra batıya 3 m giden cismin yer değiştirmesinin büyüklüğü kaç m'dir?", "5", "11", "8", "3", "8 − 3"]
    ], [
      ["Durgun hâlden harekete geçen bir araç 4 s boyunca 3 m/s² ivmeyle hızlanıyor, sonra 6 s sabit hızla gidiyor. Aracın 10 s'deki toplam yer değiştirmesini hız-zaman grafiğinden yararlanarak bulunuz.", "4. saniyede hız 12 m/s. İlk 4 s: üçgen alanı (1/2)·4·12 = 24 m. Sonraki 6 s: dikdörtgen 6·12 = 72 m. Toplam 96 m."]
    ]],
    ["Newton'un Hareket Yasaları", [
      "1. yasa (eylemsizlik): net kuvvet sıfırsa cisim durur ya da sabit hızla gider",
      "2. yasa: F_net = m · a (N = kg · m/s²)",
      "3. yasa (etki-tepki): kuvvetler çift hâlinde, eşit büyüklükte ve zıt yönde, farklı cisimlere etki eder",
      "Ağırlık G = m · g (g ≈ 10 m/s²) · Sürtünme kuvveti harekete zıt yönlüdür",
      "Net kuvvet hareket yönündeyse cisim hızlanır, zıt yöndeyse yavaşlar"
    ], [
      "Eylemsizlik, cismin hareket durumunu koruma eğilimidir. Fren yapan otobüste yolcuların öne doğru gitmesi, emniyet kemerinin önemi bu yasayla açıklanır.",
      "Etki ile tepki aynı cisme uygulanmadığı için birbirini dengelemez. Masanın üzerindeki kitapta ağırlık ile masanın tepki kuvveti dengelenir; ama bunlar etki-tepki çifti değildir. Kitabın ağırlığının tepkisi, kitabın Dünya'yı çekmesidir."
    ], [
      ["Kütlesi 4 kg olan cisme 20 N net kuvvet uygulanırsa ivmesi kaç m/s² olur?", "5", "80", "0,2", "16", "a = F / m"],
      ["Otobüs aniden durduğunda yolcuların öne doğru savrulması hangi yasa ile açıklanır?", "Eylemsizlik yasası", "Etki-tepki yasası", "Kütle çekim yasası", "Enerjinin korunumu", "Newton'un 1. yasası"],
      ["Sabit hızla giden bir araca etkiyen net kuvvet için ne söylenebilir?", "Sıfırdır", "Hareket yönündedir", "Harekete zıttır", "Ağırlığa eşittir", "a = 0 → F_net = 0"],
      ["2 kg kütleli cismin ağırlığı kaç N'dir? (g = 10 m/s²)", "20", "2", "10", "5", "G = m·g"]
    ], [
      ["Yatay düzlemde duran 5 kg'lık kutuya 30 N'lik yatay kuvvet uygulanıyor; sürtünme kuvveti 10 N'dir. Kutunun ivmesini ve 2 s sonraki hızını bulunuz.", "F_net = 30 − 10 = 20 N → a = 20/5 = 4 m/s². v = 0 + 4·2 = 8 m/s."]
    ]]
  ]],
  ["Enerji", 1, [
    ["İş, Güç ve Enerjinin Korunumu", [
      "İş W = F · x (kuvvet yönündeki yer değiştirme) · birimi joule (J)",
      "Kinetik enerji Ek = (1/2) · m · v² · Yer çekimi potansiyel enerjisi Ep = m · g · h",
      "Güç P = W / t (watt) · Verim = yararlı enerji / harcanan enerji",
      "Sürtünmesiz ortamda mekanik enerji (Ek + Ep) korunur",
      "Sürtünme varsa mekanik enerjinin bir kısmı ısıya dönüşür; toplam enerji yine korunur"
    ], [
      "Enerji yoktan var edilemez, vardan yok edilemez; yalnızca bir türden başka bir türe dönüşür. Serbest bırakılan bir cisim düşerken potansiyel enerjisi azalır, kinetik enerjisi aynı miktarda artar.",
      "Kuvvet hareket yönüne dik ise iş yapılmaz: çantayı yatay yolda taşıyan kişi, çantaya yer çekimine karşı fizik anlamında iş yapmaz."
    ], [
      ["10 N'lik kuvvet cismi kuvvet yönünde 5 m çekerse kaç J iş yapılır?", "50", "2", "15", "500", "W = F·x"],
      ["2 kg kütleli cisim 3 m/s hızla gidiyorsa kinetik enerjisi kaç J'dür?", "9", "6", "18", "3", "(1/2)·2·9"],
      ["5 m yükseklikten serbest bırakılan cisim yere çarparken hızı kaç m/s olur? (g = 10, sürtünme yok)", "10", "5", "50", "100", "mgh = mv²/2 → v² = 100"],
      ["600 J işi 30 saniyede yapan motorun gücü kaç W'tır?", "20", "18000", "60", "570", "P = W / t"]
    ], [
      ["Sürtünmesiz bir rampanın 20 m yüksekliğindeki tepesinden 2 kg'lık bir kızak durgun hâlden bırakılıyor. Yerden 5 m yükseklikteki noktada kızağın kinetik enerjisini ve hızını bulunuz (g = 10 m/s²).", "Mekanik enerji korunur: Ek = mg(20 − 5) = 2·10·15 = 300 J. (1/2)·2·v² = 300 → v = √300 = 10√3 m/s."]
    ]]
  ]],
  ["Elektrik", 2, [
    ["Elektrik Akımı, Direnç ve Basit Devreler", [
      "Akım I = q / t (amper) · Potansiyel fark V (volt) · Direnç R (ohm)",
      "Ohm yasası: V = I · R",
      "Seri bağlama: R_eş = R₁ + R₂ (akım aynı) · Paralel bağlama: 1/R_eş = 1/R₁ + 1/R₂ (gerilim aynı)",
      "Elektriksel güç P = V · I = I² · R · Enerji E = P · t",
      "Bir iletkenin direnci boyuyla doğru, kesit alanıyla ters orantılıdır"
    ], [
      "Devrede akım, üretecin oluşturduğu potansiyel farkla yüklerin iletken boyunca hareket etmesidir. Seri bağlı ampullerden biri bozulursa devre açılır ve diğerleri de söner; evlerde bu yüzden paralel bağlama kullanılır.",
      "Paralel kollarda eşdeğer direnç en küçük dirençten bile küçüktür. Kola eklenen her yeni direnç ana koldan çekilen akımı artırır; prizlere çok sayıda cihaz bağlamak bu nedenle aşırı akım ve ısınmaya yol açabilir."
    ], [
      ["12 V'luk üretece bağlı 4 Ω'luk dirençten geçen akım kaç A'dir?", "3", "48", "0,33", "8", "I = V / R"],
      ["3 Ω ve 6 Ω'luk dirençler paralel bağlanırsa eşdeğer direnç kaç Ω olur?", "2", "9", "4,5", "18", "(3·6)/(3+6)"],
      ["2 Ω ve 4 Ω'luk dirençler seri bağlanıp 12 V'a bağlanırsa devre akımı kaç A olur?", "2", "3", "6", "1", "12 / 6"],
      ["220 V'ta 5 A akım çeken ısıtıcının gücü kaç W'tır?", "1100", "44", "225", "2200", "P = V·I"]
    ], [
      ["Evlerdeki elektrik tesisatında cihazların neden paralel bağlandığını iki gerekçeyle açıklayınız.", "1) Her cihaz aynı şebeke gerilimiyle (220 V) çalışır. 2) Bir cihaz kapatılır ya da bozulursa diğerleri çalışmaya devam eder; seri bağlamada devre açılır."]
    ]]
  ]],
  ["Dalgalar", 2, [
    ["Dalgaların Temel Özellikleri, Ses ve Işık", [
      "Dalga enerji taşır, madde taşımaz · Mekanik dalga (ses) ortam ister, elektromanyetik dalga (ışık) boşlukta da yayılır",
      "Enine dalga: titreşim yayılma yönüne dik (ip dalgası, ışık) · Boyuna dalga: paralel (ses)",
      "v = λ · f · Periyot T = 1/f",
      "Dalganın hızı ortama bağlıdır; frekansı kaynağa bağlıdır",
      "Ses katılarda en hızlı, gazlarda en yavaş yayılır; ışığın boşluktaki hızı 3·10⁸ m/s"
    ], [
      "Dalga bir ortamdan diğerine geçerken frekansı değişmez, hızı ve dalga boyu değişir. Ses havadan suya geçince hızlanır, dalga boyu büyür.",
      "Sesin yüksekliği (ince-kalın) frekansla, şiddeti (yüksek-alçak ses) genlikle ilgilidir. Yankı ve sonar, sesin yansımasından yararlanır."
    ], [
      ["Frekansı 50 Hz, dalga boyu 2 m olan dalganın hızı kaç m/s'dir?", "100", "25", "52", "0,04", "v = λ·f"],
      ["Hangisi boşlukta yayılabilir?", "Işık", "Ses", "Su dalgası", "Yay dalgası", "Elektromanyetik dalga ortam istemez."],
      ["Dalga bir ortamdan diğerine geçerken hangisi değişmez?", "Frekans", "Hız", "Dalga boyu", "Yayılma doğrultusu her zaman", "Frekans kaynağa bağlıdır."],
      ["Ses dalgası hangi tür dalgadır?", "Boyuna mekanik dalga", "Enine elektromanyetik dalga", "Enine mekanik dalga", "Boyuna elektromanyetik dalga", "Ses ortamda sıkışma-genleşme ile yayılır."]
    ], [
      ["Şimşeği gördükten 3 saniye sonra gök gürültüsünü duyan bir kişi, şimşeğin yaklaşık ne kadar uzakta çaktığını hesaplayınız (sesin havadaki hızı 340 m/s). Işığın gecikmesini neden ihmal ettiğinizi açıklayınız.", "Uzaklık ≈ 340 · 3 = 1020 m. Işığın hızı (3·10⁸ m/s) sesinkinden çok büyük olduğundan ışık neredeyse anında ulaşır; gecikmesi ihmal edilebilir."]
    ]]
  ]]
]);

DERS("kimya", "kim", { ad: "Kimya", ikon: "⚗️", renk: "#db2777" }, [
  ["Etkileşim: Kimyasal Tepkimeler ve Hesaplamalar", 1, [
    ["Mol Kavramı ve Kimyasal Tepkimeler", [
      "1 mol = 6,02·10²³ tanecik (Avogadro sayısı)",
      "Mol sayısı n = kütle / mol kütlesi · Normal koşullarda 1 mol gaz 22,4 L",
      "Kütlenin korunumu: tepkimeye girenlerin kütlesi = ürünlerin kütlesi",
      "Denkleştirme: her elementin atom sayısı iki tarafta eşit olmalı",
      "Tepkime türleri: yanma, sentez (birleşme), analiz (ayrışma), asit-baz (nötrleşme), çökelme"
    ], [
      "Kimyasal tepkimelerde atomlar yok olmaz, yeniden düzenlenir; bu yüzden denklemler denkleştirilir. 2H₂ + O₂ → 2H₂O denkleminde katsayılar mol oranlarını verir: 2 mol hidrojen 1 mol oksijenle 2 mol su oluşturur.",
      "Mol, gözle görülemeyecek kadar küçük tanecikleri saymanın birimidir. Örneğin suyun mol kütlesi 18 g/mol'dür; 36 g su 2 moldür ve 2 · 6,02·10²³ molekül içerir."
    ], [
      ["44 g CO₂ kaç moldür? (C = 12, O = 16)", "1", "2", "0,5", "44", "Mol kütlesi 12 + 32 = 44 g/mol"],
      ["N₂ + 3H₂ → 2NH₃ tepkimesinde 6 mol H₂ harcanırsa kaç mol NH₃ oluşur?", "4", "2", "6", "3", "3 mol H₂ → 2 mol NH₃"],
      ["CH₄ + 2O₂ → CO₂ + 2H₂O tepkimesi hangi türdendir?", "Yanma", "Analiz", "Nötrleşme", "Çökelme", "Oksijenle yanma, ürün CO₂ ve H₂O"],
      ["Normal koşullarda 11,2 L O₂ gazı kaç moldür?", "0,5", "1", "2", "0,25", "11,2 / 22,4"]
    ], [
      ["2Mg + O₂ → 2MgO tepkimesinde 48 g Mg yeterince oksijenle yakılıyor. Oluşan MgO kaç gramdır? (Mg = 24, O = 16) İşlemleri yazınız.", "48 g Mg = 2 mol. Katsayılara göre 2 mol MgO oluşur. MgO mol kütlesi 40 g/mol → 2 · 40 = 80 g."]
    ]],
    ["Gazların Özellikleri ve Gaz Yasaları", [
      "Gazlar sıkıştırılabilir, bulundukları kabı doldurur, tanecikleri arasında boşluk çoktur",
      "Boyle: sabit sıcaklıkta P · V = sabit · Charles: sabit basınçta V / T = sabit",
      "Gay-Lussac: sabit hacimde P / T = sabit (T kelvin: T = °C + 273)",
      "İdeal gaz denklemi: P · V = n · R · T",
      "Avogadro: aynı koşulda eşit hacimdeki gazlar eşit sayıda tanecik içerir"
    ], [
      "Gaz yasalarında sıcaklık mutlaka kelvin cinsinden kullanılır. 27 °C = 300 K'dir. Sabit basınçta 300 K'deki gaz 600 K'e ısıtılırsa hacmi iki katına çıkar.",
      "Şişirilmiş balonun soğukta büzülmesi, araba lastiklerinin yazın basıncının artması, şırınganın sıkıştırılması gaz yasalarının günlük hayattaki örnekleridir."
    ], [
      ["Sabit sıcaklıkta 2 atm basınçta 6 L olan gazın basıncı 4 atm yapılırsa hacmi kaç L olur?", "3", "12", "8", "1,5", "P₁V₁ = P₂V₂ → 12 = 4·V"],
      ["27 °C kaç kelvindir?", "300", "246", "27", "273", "27 + 273"],
      ["Sabit basınçta bir gazın kelvin sıcaklığı 2 katına çıkarsa hacmi ne olur?", "2 katına çıkar", "Yarıya iner", "Değişmez", "4 katına çıkar", "Charles yasası"],
      ["Hangisi gazların bir özelliği değildir?", "Belirli bir şekilleri vardır", "Sıkıştırılabilirler", "Kabı doldururlar", "Yayılırlar", "Gazların belirli şekli yoktur."]
    ], [
      ["Kapalı ve hacmi değişmeyen bir sprey kutusunun ateşe atılmasının neden tehlikeli olduğunu gaz yasası ile açıklayınız.", "Hacim sabitken basınç kelvin sıcaklıkla doğru orantılıdır (Gay-Lussac). Isınan kutudaki gazın basıncı artar ve kutu patlayabilir."]
    ]]
  ]],
  ["Çeşitlilik: Karışımlar ve Çözeltiler", 2, [
    ["Çözeltiler ve Derişim", [
      "Çözelti: homojen karışım = çözücü + çözünen",
      "Kütlece % = (çözünen kütlesi / çözelti kütlesi) · 100",
      "Molarite M = çözünenin mol sayısı / çözelti hacmi (L)",
      "Seyreltme: M₁ · V₁ = M₂ · V₂",
      "Çözünen eklendikçe kaynama noktası yükselir, donma noktası düşer (koligatif özellik)"
    ], [
      "Çözeltinin derişimi, belli miktardaki çözeltide ne kadar çözünen bulunduğunu gösterir. 200 g çözeltide 30 g tuz varsa çözelti kütlece %15'liktir.",
      "Kışın yollara tuz serpilmesi, donma noktası alçalmasının günlük hayattaki uygulamasıdır; tuzlu su saf sudan daha düşük sıcaklıkta donar."
    ], [
      ["40 g şeker 160 g suda çözünüyor. Çözelti kütlece yüzde kaçlıktır?", "20", "25", "40", "16", "40 / 200 · 100"],
      ["0,5 mol NaCl ile hazırlanan 250 mL çözeltinin molaritesi kaçtır?", "2", "0,5", "0,125", "1", "0,5 / 0,25"],
      ["2 M 100 mL çözeltiye su eklenerek hacmi 400 mL yapılırsa derişim kaç M olur?", "0,5", "8", "1", "0,25", "2·100 = M·400"],
      ["Kışın yollara tuz dökülmesi hangi özellikle ilgilidir?", "Donma noktası alçalması", "Kaynama noktası düşmesi", "Buhar basıncı artışı", "Çözünürlüğün azalması", "Koligatif özellik"]
    ], [
      ["Elinizde 1 M 500 mL şekerli su vardır. Bunu kullanarak 0,2 M çözelti hazırlamak için ne yapmanız gerektiğini hesaplayarak açıklayınız.", "M₁V₁ = M₂V₂ → 1 · 500 = 0,2 · V₂ → V₂ = 2500 mL. Toplam hacim 2,5 L olacak biçimde 2000 mL su eklenmelidir."]
    ]]
  ]],
  ["Sürdürülebilirlik", 2, [
    ["Yeşil Kimya ve Kaynakların Bilinçli Kullanımı", [
      "Yeşil kimya: atık oluşmasını önlemek, zararsız madde ve çözücü kullanmak, enerji verimliliği",
      "Atom ekonomisi: girenlerdeki atomların ne kadarının istenen ürüne dönüştüğü",
      "Geri dönüşüm: cam, metal, kâğıt, plastik ayrı toplanır; kaynak ve enerji tasarrufu sağlar",
      "Karbon ayak izi: bir etkinliğin doğrudan ve dolaylı sera gazı salımı",
      "Yenilenebilir kaynaklar (güneş, rüzgâr, biyokütle) fosil yakıtlara göre daha az sera gazı salar"
    ], [
      "Yeşil kimyanın amacı kirliliği oluştuktan sonra temizlemek değil, baştan önlemektir. Daha az adımlı, daha az enerji harcayan ve zehirli olmayan maddelerle yapılan üretim hem çevreyi hem maliyeti korur.",
      "Alüminyumun geri dönüştürülmesi, cevherden yeniden üretmeye göre çok daha az enerji gerektirir. Bu nedenle metallerin geri kazanımı sürdürülebilirlik için önemlidir."
    ], [
      ["Hangisi yeşil kimya ilkelerinden biridir?", "Atık oluşmasını baştan önlemek", "Zehirli çözücü kullanmak", "Tek kullanımlık ürünleri artırmak", "Yüksek enerjili işlemleri seçmek", "Önleme, temizlemekten iyidir."],
      ["Hangisi yenilenebilir bir enerji kaynağıdır?", "Rüzgâr", "Kömür", "Doğal gaz", "Petrol", "Rüzgâr tükenmez."],
      ["Geri dönüşümün temel yararı hangisidir?", "Ham madde ve enerji tasarrufu", "Atık miktarını artırması", "Üretimi zorlaştırması", "Sera gazını artırması", "Kaynakları korur."],
      ["Karbon ayak izi neyi ifade eder?", "Bir etkinlikten kaynaklanan sera gazı salımını", "Topraktaki karbon miktarını", "Bitkilerin fotosentez hızını", "Kömür rezervlerini", "Tanım"]
    ], [
      ["Okulunuzda plastik atığı azaltmak için yeşil kimya ve sürdürülebilirlik ilkelerine uygun iki öneri yazıp her birinin çevreye etkisini açıklayınız.", "Örnek: 1) Tek kullanımlık plastik bardak yerine yeniden kullanılabilir matara: atık ve ham madde (petrol) tüketimi azalır. 2) Atıkların kaynağında ayrı toplanması: plastiğin geri dönüştürülmesiyle enerji tasarrufu ve daha az çöp."]
    ]]
  ]]
]);

DERS("biyoloji", "bio", { ad: "Biyoloji", ikon: "🧬", renk: "#22a06b" }, [
  ["Enerji: Canlılarda Enerji Dönüşümleri", 1, [
    ["ATP, Metabolizma ve Enzimler", [
      "ATP: hücrenin doğrudan kullandığı enerji molekülü (adenin + riboz + 3 fosfat)",
      "Metabolizma = anabolizma (yapım, enerji harcar) + katabolizma (yıkım, enerji açığa çıkarır)",
      "Enzimler: protein yapılı biyolojik katalizörler; tepkimeyi hızlandırır, tepkimeden değişmeden çıkar",
      "Enzim etkinliğini sıcaklık, pH, substrat ve enzim derişimi etkiler",
      "Enzim-substrat ilişkisi anahtar-kilit modeli ile açıklanır"
    ], [
      "Canlılar besinlerdeki kimyasal enerjiyi doğrudan kullanamaz; bu enerji önce ATP'ye aktarılır. ATP'nin son fosfat bağı koparken açığa çıkan enerji kas kasılması, aktif taşıma ve sentez tepkimelerinde kullanılır.",
      "Her enzimin en iyi çalıştığı bir sıcaklık ve pH vardır. Yüksek sıcaklık enzimin üç boyutlu yapısını bozar (denatürasyon); mide enzimi pepsin asidik, bağırsak enzimleri bazik ortamda çalışır."
    ], [
      ["Hücrede doğrudan kullanılan enerji molekülü hangisidir?", "ATP", "Glikoz", "Nişasta", "DNA", "Enerji ATP'den sağlanır."],
      ["Enzimlerle ilgili hangisi yanlıştır?", "Tepkimede harcanıp tükenirler", "Protein yapılıdır", "Tepkimeyi hızlandırırlar", "Substrata özgüdürler", "Enzimler tepkimeden değişmeden çıkar."],
      ["Küçük moleküllerden büyük moleküllerin yapılması hangisidir?", "Anabolizma", "Katabolizma", "Sindirim", "Hidroliz", "Yapım tepkimeleri"],
      ["Çok yüksek sıcaklıkta enzim etkinliğinin durmasının nedeni nedir?", "Enzimin yapısının bozulması", "Substratın bitmesi", "ATP'nin artması", "pH'nin sabit kalması", "Denatürasyon"]
    ], [
      ["İnsan vücudunda yüksek ateşin (40 °C üstü) neden tehlikeli olduğunu enzimlerle ilişkilendirerek açıklayınız.", "Enzimler protein yapılıdır ve belli bir sıcaklık aralığında en iyi çalışır. Yüksek ateşte yapıları bozulabilir (denatürasyon), metabolik tepkimeler yavaşlar ya da durur; hayati işlevler aksar."]
    ]],
    ["Fotosentez ve Hücresel Solunum", [
      "Fotosentez: 6CO₂ + 6H₂O + ışık → C₆H₁₂O₆ + 6O₂ (kloroplastta)",
      "Oksijenli solunum: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP (mitokondride)",
      "Fermantasyon: oksijensiz ortamda az ATP; laktik asit (kas) ya da etil alkol (maya)",
      "Fotosentez hızını ışık şiddeti, CO₂ miktarı, sıcaklık ve su etkiler",
      "Üreticiler (ototrof) besinini kendi yapar; tüketiciler (heterotrof) dışarıdan alır"
    ], [
      "Fotosentez ve solunum birbirini tamamlar: fotosentezin ürünleri (glikoz ve oksijen), solunumun girdileridir; solunumun ürünleri (CO₂ ve su) ise fotosentezin girdileridir. Böylece enerji güneşten canlılara akar, madde döngüde kalır.",
      "Oksijenli solunum bir glikozdan çok daha fazla ATP üretir. Ağır egzersizde kaslara yeterli oksijen gitmezse laktik asit fermantasyonu olur ve yorgunluk hissedilir."
    ], [
      ["Fotosentezde açığa çıkan gaz hangisidir?", "Oksijen", "Karbondioksit", "Azot", "Hidrojen", "6O₂ açığa çıkar."],
      ["Oksijenli solunum hücrenin hangi organelinde tamamlanır?", "Mitokondri", "Kloroplast", "Ribozom", "Golgi", "ATP üretim merkezi"],
      ["Hamurun mayalanması hangi olayın sonucudur?", "Etil alkol fermantasyonu", "Fotosentez", "Laktik asit fermantasyonu", "Oksijenli solunum", "Maya CO₂ üretir, hamur kabarır."],
      ["Hangisi fotosentez hızını doğrudan artırabilir (diğer koşullar uygunken)?", "Ortamdaki CO₂ miktarının artması", "Işığın kesilmesi", "Sıcaklığın 70 °C'ye çıkması", "Yaprakların kurutulması", "CO₂ fotosentezin ham maddesidir."]
    ], [
      ["Seralarda bitki verimini artırmak için hangi düzenlemeler yapılabileceğini fotosentezi etkileyen faktörlerle ilişkilendirerek iki örnekle açıklayınız.", "1) Yapay aydınlatmayla ışık süresi/şiddeti artırılır. 2) Seraya CO₂ verilerek ham madde artırılır. (Uygun sıcaklık ve sulama da verilebilir.) Bu faktörler fotosentez hızını ve dolayısıyla üretilen besini artırır."]
    ]]
  ]],
  ["Ekoloji", 2, [
    ["Ekosistem, Besin Zinciri ve Madde Döngüleri", [
      "Ekosistem: canlı (biyotik) ve cansız (abiyotik) öğelerin etkileşimi",
      "Besin zinciri: üretici → birincil tüketici → ikincil tüketici …; ayrıştırıcılar maddeyi geri kazandırır",
      "Her basamakta enerjinin yaklaşık %10'u bir üst basamağa aktarılır (enerji piramidi)",
      "Karbon, azot ve su döngüleri maddeyi canlılar ile çevre arasında dolaştırır",
      "Biyolojik birikim: zehirli maddeler üst basamaklarda daha yoğun birikir"
    ], [
      "Enerji ekosistemde tek yönlü akar ve her basamakta büyük kısmı ısı olarak kaybolur; madde ise döngüler hâlinde yeniden kullanılır. Bu yüzden besin zincirleri genellikle 4-5 basamaktan uzun olmaz.",
      "Azot döngüsünde bakteriler kilit roldedir: azot bağlayan bakteriler havadaki azotu bitkilerin kullanabileceği hâle getirir, ayrıştırıcılar ölü canlılardaki azotu toprağa geri kazandırır."
    ], [
      ["Besin piramidinde en fazla enerji hangi basamaktadır?", "Üreticiler", "Birincil tüketiciler", "İkincil tüketiciler", "Son tüketiciler", "Enerji yukarı çıktıkça azalır."],
      ["Ölü canlıları ayrıştırarak maddeleri toprağa geri kazandıranlar hangileridir?", "Bakteri ve mantarlar", "Otçullar", "Etçiller", "Üreticiler", "Ayrıştırıcılar"],
      ["Hangisi ekosistemin cansız (abiyotik) öğesidir?", "Sıcaklık", "Mantar", "Bakteri", "Çam ağacı", "Abiyotik: ışık, su, sıcaklık, toprak"],
      ["Bir tarım ilacının en yoğun biçimde hangi canlıda birikmesi beklenir?", "Besin zincirinin en üstündeki yırtıcıda", "Bitkide", "Otçul böcekte", "Toprakta", "Biyolojik birikim"]
    ], [
      ["Bir gölde 'alg → su piresi → küçük balık → büyük balık' besin zinciri vardır. Göle karışan bir zehrin hangi canlıda en çok birikeceğini ve küçük balıkların avlanarak azalmasının zincire etkisini açıklayınız.", "Zehir, zincirin en üstündeki büyük balıkta en yoğun birikir (biyolojik birikim). Küçük balıklar azalırsa su pireleri artar, algler azalır; büyük balıklar besin bulamayıp azalır."]
    ]],
    ["Popülasyon, Biyoçeşitlilik ve Sürdürülebilirlik", [
      "Popülasyon: belli bir alanda yaşayan aynı türden bireyler · Komünite: farklı türlerin popülasyonları",
      "Popülasyon büyüklüğünü doğum, ölüm, göç (giren-çıkan) belirler",
      "Taşıma kapasitesi: ortamın kaynaklarıyla destekleyebileceği en fazla birey sayısı",
      "Biyoçeşitliliği tehdit edenler: habitat kaybı, kirlilik, istilacı türler, aşırı avlanma, iklim değişikliği",
      "Koruma: millî parklar, gen bankaları, sürdürülebilir tarım ve avcılık"
    ], [
      "Kaynaklar sınırlı olduğundan popülasyonlar sonsuza kadar büyüyemez; taşıma kapasitesine yaklaştıkça büyüme yavaşlar. Besin, su ve barınak için rekabet artar.",
      "Biyoçeşitlilik ekosistemlerin dengesini ve dayanıklılığını sağlar. Bir türün yok olması, ona bağlı başka türleri de etkileyerek zincirleme sonuçlar doğurabilir."
    ], [
      ["Belli bir alanda yaşayan aynı türden bireylerin oluşturduğu topluluk hangisidir?", "Popülasyon", "Komünite", "Ekosistem", "Biyosfer", "Tanım"],
      ["Bir ortamın kaynaklarıyla destekleyebileceği en fazla birey sayısına ne denir?", "Taşıma kapasitesi", "Biyoçeşitlilik", "Habitat", "Niş", "Tanım"],
      ["Hangisi biyoçeşitliliği azaltan bir etkendir?", "Habitat kaybı", "Gen bankası kurulması", "Millî park ilan edilmesi", "Sürdürülebilir avcılık", "Yaşam alanının yok olması"],
      ["Popülasyonun büyüklüğünü artıran etken hangisidir?", "Göçle bölgeye birey gelmesi", "Ölüm oranının artması", "Besin azlığı", "Salgın hastalık", "Giren göç artırır."]
    ], [
      ["Bir bölgeye dışarıdan getirilen istilacı bir türün yerli türler ve biyoçeşitlilik üzerindeki olası etkilerini iki örnekle açıklayınız.", "İstilacı türün doğal düşmanı olmadığı için hızla çoğalır; 1) yerli türlerle besin ve yaşam alanı için rekabet ederek onları azaltır, 2) yerli türleri avlayarak ya da hastalık taşıyarak yok olmalarına yol açabilir. Sonuçta biyoçeşitlilik azalır."]
    ]]
  ]]
]);
