// 8. sınıf Matematik (LGS kapsamı)
DERS("matematik", "mat", { ad: "Matematik", ikon: "➗", renk: "#4f7cff" }, [
  ["Çarpanlar ve Katlar", 1, [
    ["Çarpanlar, Asal Çarpanlara Ayırma", [
      "Bir sayıyı kalansız bölen doğal sayılar o sayının çarpanlarıdır (bölenleri).",
      "Asal sayı: yalnızca 1'e ve kendisine bölünen, 1'den büyük doğal sayı: 2, 3, 5, 7, 11, 13...",
      "Asal çarpanlara ayırma: 72 = 2³ · 3²",
      "Çarpan sayısı: üslerin 1 fazlalarının çarpımı → 72 için (3+1)·(2+1) = 12"
    ], [
      "Bir doğal sayıyı kalansız bölen doğal sayılara o sayının çarpanları denir. 18'in çarpanları 1, 2, 3, 6, 9 ve 18'dir. Çarpanlar genellikle çiftler hâlinde bulunur: 1·18, 2·9, 3·6.",
      "Yalnızca iki çarpanı olan (1 ve kendisi) sayılara asal sayı denir. 2 tek çift asal sayıdır; 1 asal değildir. Bir sayıyı asal çarpanlarına ayırmak için sayıyı en küçük asal sayıdan başlayarak bölmeye devam ederiz; çarpan ağacı ya da bölen listesi kullanılabilir.",
      "Örneğin 120 = 2 · 2 · 2 · 3 · 5 = 2³ · 3 · 5 şeklinde yazılır. Bu yazılış tektir; sadece çarpanların sırası değişebilir."
    ], [
      ["84 sayısının asal çarpanlara ayrılmış hâli hangisidir?", "2² · 3 · 7", "2 · 3 · 14", "4 · 21", "2³ · 7", "84 = 2 · 42 = 2 · 2 · 21 = 2² · 3 · 7"],
      ["Aşağıdakilerden hangisi asal sayıdır?", "29", "27", "39", "51", "27=3·9, 39=3·13, 51=3·17; 29 yalnızca 1 ve 29'a bölünür."],
      ["60 sayısının kaç tane doğal sayı çarpanı vardır?", "12", "10", "8", "6", "60 = 2²·3·5 → (2+1)(1+1)(1+1) = 12"],
      ["Bir dikdörtgenin alanı 36 cm² ve kenar uzunlukları doğal sayıdır. Kaç farklı dikdörtgen çizilebilir? (Kenar sırası önemsiz)", "5", "4", "9", "6", "1·36, 2·18, 3·12, 4·9, 6·6 → 5 farklı dikdörtgen."],
      ["2³ · 3 · 5 sayısı kaçtır?", "120", "90", "60", "240", "8 · 3 · 5 = 120"]
    ], [
      ["150 sayısını asal çarpanlarına ayırınız ve kaç tane doğal sayı böleni olduğunu gösteriniz.", "150 = 2 · 3 · 5². Bölen sayısı: (1+1)(1+1)(2+1) = 12."],
      ["Alanı 48 m² olan ve kenar uzunlukları metre cinsinden doğal sayı olan dikdörtgen biçimindeki bahçelerin tüm kenar uzunluklarını yazınız.", "1×48, 2×24, 3×16, 4×12, 6×8 → 5 farklı bahçe."]
    ]],
    ["EBOB, EKOK ve Aralarında Asal Sayılar", [
      "EBOB: sayıların ortak bölenlerinin en büyüğü (ortak asal çarpanların en küçük üslüleri).",
      "EKOK: sayıların ortak katlarının en küçüğü (bütün asal çarpanların en büyük üslüleri).",
      "a · b = EBOB(a,b) · EKOK(a,b)",
      "EBOB'u 1 olan sayılara aralarında asal denir: 8 ve 15 gibi.",
      "Parçalara ayırma, en büyük kare → EBOB; tekrar karşılaşma, en küçük ortak süre → EKOK."
    ], [
      "İki ya da daha fazla doğal sayının ortak bölenlerinin en büyüğüne EBOB, ortak katlarının en küçüğüne EKOK denir. 12 = 2²·3 ve 18 = 2·3² için EBOB = 2·3 = 6, EKOK = 2²·3² = 36'dır.",
      "Problemlerde bir bütünü eşit ve en büyük parçalara bölmek EBOB, farklı aralıklarla tekrarlanan olayların yeniden aynı anda gerçekleşmesi EKOK ile çözülür. Ortak böleni yalnızca 1 olan sayılara aralarında asal sayılar denir; aralarında asal iki sayının EKOK'u çarpımlarına eşittir."
    ], [
      ["24 ve 36 sayılarının EBOB'u kaçtır?", "12", "6", "72", "4", "24 = 2³·3, 36 = 2²·3² → EBOB = 2²·3 = 12"],
      ["6, 8 ve 12 sayılarının EKOK'u kaçtır?", "24", "48", "96", "12", "EKOK = 2³ · 3 = 24"],
      ["Bir otobüs 12 dakikada, diğeri 18 dakikada bir duraktan kalkıyor. İkisi 08.00'de birlikte kalktıysa ilk kez saat kaçta yine birlikte kalkarlar?", "08.36", "08.30", "08.54", "09.12", "EKOK(12,18) = 36 dakika."],
      ["Boyutları 84 cm ve 60 cm olan dikdörtgen bir kartondan hiç artmayacak şekilde en büyük eş kareler kesiliyor. Kaç kare elde edilir?", "35", "12", "24", "70", "EBOB(84,60) = 12; (84/12)·(60/12) = 7·5 = 35"],
      ["Aşağıdaki sayı ikililerinden hangisi aralarında asaldır?", "9 ve 16", "12 ve 15", "14 ve 21", "10 ve 25", "9 = 3², 16 = 2⁴ → ortak bölen yalnızca 1."]
    ], [
      ["Ali'nin 48, Ayşe'nin 72 bilyesi var. Bilyeler hiç artmayacak şekilde eşit sayıda bilye içeren en az sayıda torbaya konulacaktır. Bir torbada kaç bilye olur, toplam kaç torba gerekir? İşlemlerinizi gösteriniz.", "EBOB(48,72) = 24. Bir torbada 24 bilye; torba sayısı 48/24 + 72/24 = 2 + 3 = 5."],
      ["Bir lambası 6 saniyede, diğeri 10 saniyede bir yanıyor. İkisi aynı anda yandıktan sonra 2 dakika içinde kaç kez daha birlikte yanarlar?", "EKOK(6,10) = 30 sn. 120/30 = 4 kez daha birlikte yanarlar."]
    ]]
  ]],
  ["Üslü İfadeler", 1, [
    ["Tam Sayıların Tam Sayı Kuvvetleri", [
      "aⁿ: a'nın n tane çarpımı. a⁰ = 1 (a ≠ 0)",
      "Negatif üs: a⁻ⁿ = 1/aⁿ → 2⁻³ = 1/8",
      "Negatif tabanın çift kuvveti pozitif, tek kuvveti negatif: (−2)⁴ = 16, (−2)³ = −8",
      "−2⁴ = −16 ama (−2)⁴ = 16 (parantez önemli!)"
    ], [
      "Bir sayının kendisiyle tekrarlı çarpımı üslü ifade ile gösterilir: 3⁴ = 3·3·3·3 = 81. Sıfırdan farklı her sayının sıfırıncı kuvveti 1'dir.",
      "Negatif üs, sayının çarpmaya göre tersinin kuvveti demektir: 5⁻² = 1/5² = 1/25, (2/3)⁻² = (3/2)² = 9/4. Negatif bir tam sayının çift kuvvetleri pozitif, tek kuvvetleri negatiftir."
    ], [
      ["(−3)⁴ ifadesinin değeri kaçtır?", "81", "−81", "12", "−12", "Negatif sayının çift kuvveti pozitiftir: 3⁴ = 81"],
      ["2⁻³ ifadesinin değeri kaçtır?", "1/8", "−8", "−6", "8", "2⁻³ = 1/2³ = 1/8"],
      ["−5² + (−5)² işleminin sonucu kaçtır?", "0", "50", "−50", "25", "−25 + 25 = 0"],
      ["(2/5)⁻² ifadesinin değeri kaçtır?", "25/4", "4/25", "−4/25", "5/2", "(5/2)² = 25/4"],
      ["7⁰ + 0⁷ + 1⁷ işleminin sonucu kaçtır?", "2", "1", "3", "8", "1 + 0 + 1 = 2"]
    ], [
      ["(−2)³, −2³, (−2)⁴ ve −2⁴ ifadelerinin değerlerini bulup küçükten büyüğe sıralayınız.", "(−2)³ = −8, −2³ = −8, (−2)⁴ = 16, −2⁴ = −16 → −16 < −8 = −8 < 16"],
      ["3⁻² + 3⁻¹ işleminin sonucunu kesir olarak bulunuz.", "1/9 + 1/3 = 1/9 + 3/9 = 4/9"]
    ]],
    ["Üslü İfadelerle İşlemler ve Bilimsel Gösterim", [
      "aᵐ · aⁿ = aᵐ⁺ⁿ · aᵐ ÷ aⁿ = aᵐ⁻ⁿ · (aᵐ)ⁿ = aᵐ·ⁿ",
      "aⁿ · bⁿ = (a·b)ⁿ",
      "Toplama-çıkarmada yalnızca taban ve üs aynıysa katsayılar toplanır: 3·2⁵ + 2⁵ = 4·2⁵",
      "Bilimsel gösterim: a × 10ⁿ, 1 ≤ |a| < 10 → 45 000 = 4,5 × 10⁴; 0,0032 = 3,2 × 10⁻³"
    ], [
      "Tabanları aynı olan üslü ifadeler çarpılırken üsler toplanır, bölünürken üsler çıkarılır: 2⁵ · 2³ = 2⁸, 2⁵ ÷ 2³ = 2². Üslü ifadenin kuvveti alınırken üsler çarpılır: (3²)⁴ = 3⁸. Üsleri aynı olan sayılar çarpılırken tabanlar çarpılır: 2⁴ · 5⁴ = 10⁴.",
      "Çok büyük ve çok küçük sayılar bilimsel gösterimle yazılır: a × 10ⁿ (1 ≤ a < 10, n tam sayı). Işığın hızı yaklaşık 3 × 10⁸ m/s, bir bakteri boyu yaklaşık 2 × 10⁻⁶ m'dir. 10'un kuvvetleriyle çarpma virgülü kaydırmaktır."
    ], [
      ["2⁵ · 2⁻² · 2⁴ işleminin sonucu hangisidir?", "2⁷", "2¹¹", "2⁸", "2⁻⁴⁰", "Üsler toplanır: 5 − 2 + 4 = 7"],
      ["(3²)³ ÷ 3⁴ işleminin sonucu kaçtır?", "9", "3", "27", "81", "3⁶ ÷ 3⁴ = 3² = 9"],
      ["0,00052 sayısının bilimsel gösterimi hangisidir?", "5,2 × 10⁻⁴", "52 × 10⁻⁵", "5,2 × 10⁻³", "0,52 × 10⁻³", "Virgül 4 basamak sağa kayar: 5,2 × 10⁻⁴"],
      ["4⁵ + 4⁵ + 4⁵ + 4⁵ toplamı hangisine eşittir?", "4⁶", "4²⁰", "16⁵", "4⁹", "4 · 4⁵ = 4⁶"],
      ["2⁶ · 5⁶ sayısı kaç basamaklıdır?", "7", "6", "12", "8", "(2·5)⁶ = 10⁶ = 1 000 000 → 7 basamak"]
    ], [
      ["Dünya'nın kütlesi yaklaşık 5 970 000 000 000 000 000 000 000 kg'dır. Bu sayıyı bilimsel gösterimle yazınız.", "5,97 × 10²⁴ kg (virgül 24 basamak sola kayar)."],
      ["8³ · 4² ifadesini 2'nin kuvveti olarak yazınız.", "8³ = (2³)³ = 2⁹, 4² = (2²)² = 2⁴ → 2⁹ · 2⁴ = 2¹³"]
    ]]
  ]],
  ["Kareköklü İfadeler", 1, [
    ["Tam Kareler ve Karekök", [
      "Tam kare: bir doğal sayının karesi: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144...",
      "√a, karesi a olan negatif olmayan sayıdır: √49 = 7",
      "Tam kare olmayan sayının karekökü iki ardışık doğal sayı arasındadır: 6 < √40 < 7",
      "Karekök dışına çıkarma: √72 = √(36·2) = 6√2"
    ], [
      "Karesi alındığında a sayısını veren negatif olmayan sayıya a'nın karekökü denir ve √a ile gösterilir. Kenar uzunluğu √a olan karenin alanı a'dır. Tam kare sayıların karekökleri doğal sayıdır.",
      "Tam kare olmayan bir sayının karekökü irrasyoneldir ve en yakın tam karelere bakarak tahmin edilir: 25 < 30 < 36 olduğundan 5 < √30 < 6; 30, 25'e daha yakın olduğundan √30 ≈ 5,5. Karekök içindeki sayı, çarpanlarından biri tam kare olacak şekilde yazılarak a√b biçimine getirilir: √50 = 5√2."
    ], [
      ["√90 sayısı hangi iki ardışık doğal sayı arasındadır?", "9 ile 10", "8 ile 9", "10 ile 11", "44 ile 46", "81 < 90 < 100"],
      ["√48 ifadesinin a√b biçimindeki yazılışı hangisidir?", "4√3", "3√4", "2√12", "16√3", "√(16·3) = 4√3"],
      ["5√2 ifadesi hangi sayının kareköküdür?", "50", "10", "25", "20", "5√2 = √(25·2) = √50"],
      ["Alanı 169 cm² olan karenin çevresi kaç cm'dir?", "52", "13", "26", "48", "Kenar √169 = 13, çevre 4·13 = 52"],
      ["Aşağıdakilerden hangisi tam kare sayıdır?", "196", "160", "180", "200", "196 = 14²"]
    ], [
      ["√75 ve √108 ifadelerini a√b biçiminde yazınız.", "√75 = √(25·3) = 5√3; √108 = √(36·3) = 6√3"],
      ["√60 sayısının hangi iki ardışık tam sayı arasında olduğunu ve hangisine daha yakın olduğunu gerekçesiyle açıklayınız.", "49 < 60 < 64 → 7 < √60 < 8. 60, 64'e daha yakın (4 fark) olduğundan √60 8'e daha yakındır (≈7,75)."]
    ]],
    ["Kareköklü İfadelerle İşlemler, Gerçek Sayılar", [
      "Çarpma/bölme: √a · √b = √(a·b), √a ÷ √b = √(a/b)",
      "Toplama/çıkarma: yalnızca kök içleri aynıysa → 3√2 + 5√2 = 8√2",
      "Ondalık ifadelerin karekökü: √0,25 = 0,5; √0,09 = 0,3",
      "Rasyonel ve irrasyonel sayılar birlikte gerçek sayıları oluşturur. √2, π irrasyoneldir."
    ], [
      "Kareköklü ifadeler çarpılırken ya da bölünürken kök içleri çarpılır veya bölünür: √3 · √12 = √36 = 6. Toplama ve çıkarma yapabilmek için kök içlerinin aynı olması gerekir; değilse önce kök dışına çıkarma denenir: √8 + √18 = 2√2 + 3√2 = 5√2.",
      "Kesir şeklinde yazılamayan, ondalık açılımı devirsiz ve sonsuz olan sayılara irrasyonel sayılar denir (√2, √5, π). Rasyonel sayılar ile irrasyonel sayıların birleşimi gerçek sayılar kümesidir."
    ], [
      ["√12 + √27 işleminin sonucu hangisidir?", "5√3", "√39", "6√3", "13√3", "2√3 + 3√3 = 5√3"],
      ["√6 · √24 işleminin sonucu kaçtır?", "12", "√30", "144", "6√2", "√144 = 12"],
      ["√0,64 ifadesinin değeri kaçtır?", "0,8", "0,08", "8", "0,32", "√(64/100) = 8/10 = 0,8"],
      ["Aşağıdakilerden hangisi irrasyonel sayıdır?", "√20", "√49", "√0,16", "√(9/4)", "20 tam kare değildir."],
      ["Kenar uzunlukları √8 cm ve √18 cm olan dikdörtgenin alanı kaç cm²'dir?", "12", "26", "5√2", "144", "√8·√18 = √144 = 12"]
    ], [
      ["Kenar uzunlukları 2√3 cm ve √27 cm olan dikdörtgenin çevresini ve alanını bulunuz.", "√27 = 3√3. Çevre = 2(2√3 + 3√3) = 10√3 cm. Alan = 2√3 · 3√3 = 6·3 = 18 cm²."],
      ["√50 − √18 + √8 işlemini yapınız.", "5√2 − 3√2 + 2√2 = 4√2"]
    ]]
  ]],
  ["Veri Analizi", 1, [
    ["Çizgi ve Sütun Grafikleri", [
      "Sütun grafiği: kategorileri karşılaştırmak için.",
      "Çizgi grafiği: zamana bağlı değişimi göstermek için.",
      "Grafikte eksenlerin neyi gösterdiğine ve ölçeğe dikkat et.",
      "Bir veri setini farklı grafiklere dönüştürebilmelisin."
    ], [
      "Veriler toplandıktan sonra tablo ya da grafikle düzenlenir. Sütun grafiği farklı grupların değerlerini karşılaştırmak, çizgi grafiği ise bir değerin zaman içindeki değişimini göstermek için kullanılır. İki veri grubu aynı grafik üzerinde ikili sütun ya da iki çizgiyle karşılaştırılabilir.",
      "Grafik yorumlarken önce başlık ve eksenler okunur, sonra en büyük-en küçük değerler, artış-azalışlar ve farklar bulunur. Yanıltıcı grafiklerde eksen sıfırdan başlamayabilir; bu yüzden ölçek mutlaka kontrol edilmelidir."
    ], [
      ["Bir öğrencinin 5 haftadaki kitap okuma süresinin nasıl değiştiğini göstermek için en uygun grafik hangisidir?", "Çizgi grafiği", "Sütun grafiği", "Daire grafiği", "Resim grafiği", "Zamana bağlı değişim çizgi grafiğiyle gösterilir."],
      ["Bir sınıftaki öğrencilerin en sevdiği 4 sporu karşılaştırmak için en uygun grafik hangisidir?", "Sütun grafiği", "Çizgi grafiği", "Serpme grafiği", "Histogram", "Kategorileri karşılaştırmak için sütun grafiği."],
      ["Pazartesi 12, salı 18, çarşamba 15 kitap satılmıştır. En büyük artış hangi günler arasındadır?", "Pazartesi–salı", "Salı–çarşamba", "Pazartesi–çarşamba", "Artış yoktur", "12 → 18: 6 kitap artış."],
      ["Ocakta 40, şubatta 55, martta 50 ziyaretçi gelen müzeye 3 ayda ortalama kaç ziyaretçi gelmiştir?", "≈48,3", "50", "45", "55", "(40+55+50)/3 = 145/3 ≈ 48,3"]
    ], [
      ["Bir fırının 4 günlük ekmek satışı: 120, 150, 90, 140. Bu veriler için hangi grafik türü uygundur? Neden? En çok ve en az satış arasındaki fark kaçtır?", "Günler zamana bağlı olduğundan çizgi grafiği (karşılaştırma için sütun grafiği de olur). Fark: 150 − 90 = 60 ekmek."]
    ]]
  ]],
  ["Basit Olayların Olma Olasılığı", 1, [
    ["Olası Durumlar ve Olasılık Hesabı", [
      "Olasılık = istenen durum sayısı / tüm durumların sayısı",
      "0 ≤ olasılık ≤ 1 · İmkânsız olay: 0 · Kesin olay: 1",
      "Eş olasılıklı olaylar: her çıktının gelme olasılığı aynı (hilesiz zar, para).",
      "Bir olayın olma ve olmama olasılıkları toplamı 1'dir."
    ], [
      "Bir deneyde ortaya çıkabilecek bütün sonuçlara olası durumlar, istenen sonuçlara istenen durumlar denir. Hilesiz bir zar atıldığında olası durumlar 1, 2, 3, 4, 5, 6'dır; asal sayı gelmesi istenirse istenen durumlar 2, 3, 5'tir ve olasılık 3/6 = 1/2 olur.",
      "Olasılık değeri 0 ile 1 arasındadır. Olması mümkün olmayan olaya imkânsız olay (olasılık 0), kesinlikle gerçekleşecek olaya kesin olay (olasılık 1) denir. Bir olayın olmama olasılığı 1'den olma olasılığı çıkarılarak bulunur."
    ], [
      ["Hilesiz bir zar atıldığında üst yüze 4'ten büyük bir sayı gelme olasılığı kaçtır?", "1/3", "1/2", "2/3", "1/6", "5 ve 6 → 2/6 = 1/3"],
      ["Bir torbada 4 kırmızı, 6 mavi, 5 yeşil top vardır. Rastgele çekilen bir topun mavi olma olasılığı kaçtır?", "2/5", "6/9", "1/3", "1/6", "6/15 = 2/5"],
      ["1'den 20'ye kadar numaralı kartlardan çekilen kartın 3'ün katı olma olasılığı kaçtır?", "3/10", "1/3", "7/20", "1/4", "3, 6, 9, 12, 15, 18 → 6/20 = 3/10"],
      ["Bir olayın olma olasılığı 0,35 ise olmama olasılığı kaçtır?", "0,65", "0,35", "0,5", "1,35", "1 − 0,35 = 0,65"],
      ["Aşağıdakilerden hangisi imkânsız olaydır?", "Bir zar atıldığında 7 gelmesi", "Para atıldığında yazı gelmesi", "Zar atıldığında çift sayı gelmesi", "Torbadan kırmızı top çekilmesi", "Zarda 7 yoktur → olasılık 0."]
    ], [
      ["Bir sınıfta 12 kız, 18 erkek öğrenci vardır. Rastgele seçilen bir öğrencinin kız olma olasılığını bulunuz. Sınıfa kaç kız öğrenci daha gelirse bu olasılık 1/2 olur?", "12/30 = 2/5. x kız gelirse (12+x)/(30+x) = 1/2 → 24 + 2x = 30 + x → x = 6."],
      ["Bir torbada yalnızca sarı ve beyaz bilyeler vardır. Sarı bilye çekme olasılığı 3/8 ve torbada 15 beyaz bilye varsa toplam kaç bilye vardır?", "Beyaz olasılığı 1 − 3/8 = 5/8. 5/8 → 15 bilye ise 1/8 → 3, toplam 8·3 = 24 bilye."]
    ]]
  ]],
  ["Cebirsel İfadeler ve Özdeşlikler", 1, [
    ["Cebirsel İfadelerle Çarpma", [
      "Bir terimle çarpma: 3x(2x − 5) = 6x² − 15x",
      "İki terimliyle çarpma: (x + 2)(x − 3) = x² − x − 6",
      "Benzer terimler toplanır: 2x² + 5x² = 7x²",
      "Alan modeli: dikdörtgen alanı = uzun kenar · kısa kenar"
    ], [
      "Bir cebirsel ifade bir sayıyla ya da bir terimle çarpılırken dağılma özelliği kullanılır: −2a(a + 4) = −2a² − 8a. İki cebirsel ifade çarpılırken birinci ifadenin her terimi ikinci ifadenin her terimiyle çarpılır, sonra benzer terimler toplanır.",
      "Örnek: (2x + 1)(x + 3) = 2x² + 6x + x + 3 = 2x² + 7x + 3. Bu çarpım kenarları (2x + 1) ve (x + 3) olan dikdörtgenin alanı olarak modellenebilir."
    ], [
      ["(x + 4)(x − 2) çarpımı hangisine eşittir?", "x² + 2x − 8", "x² − 8", "x² + 6x − 8", "x² − 2x − 8", "x² − 2x + 4x − 8"],
      ["−3a(2a − 1) ifadesinin eşiti hangisidir?", "−6a² + 3a", "−6a² − 3a", "6a² − 3a", "−6a − 3a", "−3a·2a = −6a², −3a·(−1) = +3a"],
      ["Kenarları (2x + 3) cm ve x cm olan dikdörtgenin alanı kaç cm²'dir?", "2x² + 3x", "3x + 3", "2x² + 3", "6x + 6", "x(2x + 3) = 2x² + 3x"],
      ["(a + 1)(a + 5) − a² ifadesinin sadeleşmiş hâli hangisidir?", "6a + 5", "2a² + 6a + 5", "5a + 5", "6a", "a² + 6a + 5 − a² = 6a + 5"]
    ], [
      ["Kenar uzunlukları (3x − 1) m ve (x + 2) m olan bahçenin alanını veren cebirsel ifadeyi bulunuz.", "(3x − 1)(x + 2) = 3x² + 6x − x − 2 = 3x² + 5x − 2 m²"]
    ]],
    ["Özdeşlikler ve Çarpanlara Ayırma", [
      "(a + b)² = a² + 2ab + b² · (a − b)² = a² − 2ab + b²",
      "a² − b² = (a − b)(a + b) → iki kare farkı",
      "Ortak çarpan parantezine alma: 6x² + 9x = 3x(2x + 3)",
      "Pratik: 51² = (50 + 1)² = 2500 + 100 + 1 = 2601"
    ], [
      "Değişkenlerin her değeri için doğru olan eşitliklere özdeşlik denir. Tam kare özdeşlikleri ile iki kare farkı özdeşliği hem çarpma işlemini hızlandırır hem de ifadeleri çarpanlarına ayırmaya yarar. Örneğin 99 · 101 = (100 − 1)(100 + 1) = 10000 − 1 = 9999.",
      "Bir cebirsel ifadeyi çarpanlarına ayırmak; onu çarpımlar şeklinde yazmaktır. Önce ortak çarpan aranır (4x² − 8x = 4x(x − 2)), sonra özdeşlikler denenir: x² − 25 = (x − 5)(x + 5), x² + 6x + 9 = (x + 3)²."
    ], [
      ["(x − 5)² ifadesinin açılımı hangisidir?", "x² − 10x + 25", "x² − 25", "x² + 25", "x² − 5x + 25", "a² − 2ab + b²"],
      ["x² − 49 ifadesinin çarpanlarına ayrılmış hâli hangisidir?", "(x − 7)(x + 7)", "(x − 7)²", "(x + 7)²", "x(x − 49)", "İki kare farkı."],
      ["98² − 2² işleminin sonucu kaçtır?", "9600", "9604", "9216", "10000", "(98 − 2)(98 + 2) = 96 · 100 = 9600"],
      ["4x² + 12x + 9 ifadesinin eşiti hangisidir?", "(2x + 3)²", "(4x + 3)²", "(2x + 9)²", "(2x − 3)²", "(2x)² + 2·2x·3 + 3²"],
      ["a + b = 7 ve a · b = 10 ise a² + b² kaçtır?", "29", "49", "39", "69", "(a+b)² = a² + b² + 2ab → 49 = a² + b² + 20"]
    ], [
      ["x² − 9 ifadesini çarpanlarına ayırınız ve bu ifadeyi alan modeliyle (kesip birleştirerek) nasıl gösterebileceğinizi açıklayınız.", "x² − 9 = (x − 3)(x + 3). Kenarı x olan kareden kenarı 3 olan kare çıkarılır; kalan şekil kesilip birleştirilince kenarları (x − 3) ve (x + 3) olan dikdörtgen olur."],
      ["102² sayısını özdeşlik kullanarak hesaplayınız.", "(100 + 2)² = 10000 + 400 + 4 = 10404"]
    ]]
  ]],
  ["Doğrusal Denklemler", 2, [
    ["Birinci Dereceden Bir Bilinmeyenli Denklemler", [
      "Eşitliğin iki tarafına aynı işlem yapılır, eşitlik bozulmaz.",
      "Bilinmeyenler bir tarafa, sayılar diğer tarafa toplanır.",
      "Parantez varsa önce dağılma: 3(x − 2) = 3x − 6",
      "Problem → değişkeni tanımla, denklemi kur, çöz, kontrol et."
    ], [
      "İçinde bilinmeyen bulunan ve bilinmeyenin üssü 1 olan eşitliklere birinci dereceden bir bilinmeyenli denklemler denir. 3x + 5 = 20 denkleminde her iki taraftan 5 çıkarılır (3x = 15), sonra her iki taraf 3'e bölünür (x = 5).",
      "Kesirli denklemlerde paydalar eşitlenir ya da her iki taraf paydaların EKOK'u ile çarpılır: x/2 + x/3 = 10 → 3x + 2x = 60 → x = 12. Bulunan değer denklemde yerine yazılarak kontrol edilir."
    ], [
      ["4x − 7 = 2x + 9 denkleminin çözümü kaçtır?", "8", "1", "−8", "16", "2x = 16 → x = 8"],
      ["3(x + 2) = 21 denkleminde x kaçtır?", "5", "7", "6", "19/3", "3x + 6 = 21 → x = 5"],
      ["x/4 + 3 = 8 ise x kaçtır?", "20", "44", "5", "2", "x/4 = 5 → x = 20"],
      ["Ardışık üç doğal sayının toplamı 48'dir. En büyüğü kaçtır?", "17", "16", "15", "18", "x + x+1 + x+2 = 48 → x = 15, en büyük 17"],
      ["Bir sayının 3 katının 5 fazlası 29 ise bu sayı kaçtır?", "8", "11", "6", "9", "3x + 5 = 29 → x = 8"]
    ], [
      ["Ali'nin parası Ayşe'nin parasının 3 katıdır. Ali Ayşe'ye 40 TL verirse paraları eşit oluyor. Ayşe'nin başlangıçta kaç TL'si vardır? Denklem kurarak çözünüz.", "Ayşe x, Ali 3x. 3x − 40 = x + 40 → 2x = 80 → x = 40 TL."],
      ["2(x − 3) − (x + 4) = 5 denklemini çözünüz.", "2x − 6 − x − 4 = 5 → x − 10 = 5 → x = 15"]
    ]],
    ["Koordinat Sistemi, Doğrusal İlişkiler ve Eğim", [
      "Doğrusal denklem: y = mx + n → grafiği bir doğrudur.",
      "Eğim (m) = dikey değişim / yatay değişim = (y₂ − y₁)/(x₂ − x₁)",
      "Pozitif eğim: doğru sağa doğru yükselir · Negatif eğim: alçalır · Yatay doğru: eğim 0",
      "x = 0 için y eksenini, y = 0 için x eksenini kestiği nokta bulunur."
    ], [
      "Aralarında doğrusal ilişki olan iki değişkenin tablosu, denklemi ve grafiği vardır. Örneğin bir taksi açılış ücreti 30 TL ve km başına 20 TL ise ücret y = 20x + 30 denklemiyle gösterilir; grafiği bir doğrudur. Grafik çizmek için iki nokta yeterlidir.",
      "Doğrunun dikliğine eğim denir. Doğru üzerindeki iki noktadan eğim, dikey uzaklığın yatay uzaklığa oranıdır. y = mx + n denkleminde x'in katsayısı m eğimi verir. y = 3 gibi doğrular x eksenine paralel (eğim 0), x = 2 gibi doğrular y eksenine paraleldir."
    ], [
      ["(1, 2) ve (3, 8) noktalarından geçen doğrunun eğimi kaçtır?", "3", "1/3", "6", "2", "(8 − 2)/(3 − 1) = 6/2 = 3"],
      ["y = 2x − 6 doğrusunun x eksenini kestiği nokta hangisidir?", "(3, 0)", "(0, −6)", "(−3, 0)", "(6, 0)", "y = 0 → 2x = 6 → x = 3"],
      ["Bir mum her saat 2 cm kısalıyor. Başlangıçta 20 cm ise boy (y) ile saat (x) arasındaki ilişki hangisidir?", "y = 20 − 2x", "y = 2x + 20", "y = 20x − 2", "y = 2x − 20", "Her saat 2 cm azalır."],
      ["Aşağıdaki doğrulardan hangisinin eğimi negatiftir?", "y = −x + 4", "y = 3x − 1", "y = 5", "y = x", "x'in katsayısı −1."],
      ["y = 4x + 1 denklemine göre x = −2 iken y kaçtır?", "−7", "9", "−9", "7", "4·(−2) + 1 = −7"]
    ], [
      ["Bir telefon hattında sabit ücret 50 TL, her GB internet 10 TL'dir. Toplam ücreti (y) GB sayısına (x) bağlı veren denklemi yazınız; 12 GB kullanan kişi ne öder? Grafiğin eğimi neyi anlatır?", "y = 10x + 50. x = 12 → y = 170 TL. Eğim 10: her ek GB için ücretin 10 TL arttığını gösterir."],
      ["A(−1, 5) ve B(2, −1) noktalarından geçen doğrunun eğimini bulunuz ve doğrunun yükselen mi alçalan mı olduğunu belirtiniz.", "m = (−1 − 5)/(2 − (−1)) = −6/3 = −2. Eğim negatif → doğru alçalır."]
    ]]
  ]],
  ["Eşitsizlikler", 2, [
    ["Birinci Dereceden Bir Bilinmeyenli Eşitsizlikler", [
      "Semboller: < küçük, > büyük, ≤ küçük eşit, ≥ büyük eşit",
      "Sayı doğrusunda < ve > için boş daire, ≤ ve ≥ için dolu daire",
      "İki taraf negatif sayıyla çarpılır/bölünürse yön değişir: −2x > 6 → x < −3",
      "Toplama-çıkarma ve pozitif sayıyla çarpma yönü değiştirmez."
    ], [
      "Eşitsizlikler bir değişkenin alabileceği değer aralığını gösterir: 'en az 18 yaş' x ≥ 18, '50 km/sa'ten az' x < 50 şeklinde yazılır. Çözüm kümesi sayı doğrusunda gösterilir; sınır değer dahilse dolu, dahil değilse boş daire kullanılır.",
      "Eşitsizlik denklem gibi çözülür; tek fark, her iki taraf negatif bir sayıyla çarpılır ya da bölünürse eşitsizlik yön değiştirir: 5 − 3x ≤ 11 → −3x ≤ 6 → x ≥ −2."
    ], [
      ["2x − 3 > 7 eşitsizliğinin çözümü hangisidir?", "x > 5", "x < 5", "x > 2", "x ≥ 5", "2x > 10 → x > 5"],
      ["−3x ≤ 12 eşitsizliğinin çözümü hangisidir?", "x ≥ −4", "x ≤ −4", "x ≥ 4", "x ≤ 4", "Negatife bölünce yön değişir."],
      ["\"Bir asansör en fazla 480 kg taşıyabilir\" ifadesi hangisiyle gösterilir? (x: yük)", "x ≤ 480", "x < 480", "x ≥ 480", "x > 480", "En fazla → küçük eşit."],
      ["x + 4 < 9 eşitsizliğini sağlayan en büyük tam sayı kaçtır?", "4", "5", "13", "3", "x < 5 → en büyük tam sayı 4"],
      ["Sayı doğrusunda 3'te dolu daire ve sağa doğru ok hangi eşitsizliği gösterir?", "x ≥ 3", "x > 3", "x ≤ 3", "x < 3", "Dolu daire: dahil; sağa: büyük."]
    ], [
      ["Bir öğrencinin 3 sınavdan aldığı notlar 65 ve 70'tir. Ortalamasının en az 75 olması için üçüncü sınavdan en az kaç alması gerektiğini eşitsizlik kurarak bulunuz.", "(65 + 70 + x)/3 ≥ 75 → 135 + x ≥ 225 → x ≥ 90. En az 90 almalı."],
      ["4 − 2x ≥ x − 8 eşitsizliğini çözüp çözüm kümesini sayı doğrusunda nasıl göstereceğinizi açıklayınız.", "−3x ≥ −12 → x ≤ 4. 4'te dolu daire, sola doğru ok."]
    ]]
  ]],
  ["Üçgenler", 2, [
    ["Üçgende Kenarortay, Açıortay, Yükseklik ve Üçgen Eşitsizliği", [
      "Kenarortay: köşeyi karşı kenarın orta noktasına birleştirir.",
      "Açıortay: açıyı iki eş parçaya böler · Yükseklik: köşeden karşı kenara dik.",
      "Üçgen eşitsizliği: |a − b| < c < a + b",
      "Büyük kenarın karşısında büyük açı bulunur."
    ], [
      "Üçgenin bir köşesini karşı kenarın orta noktasına birleştiren doğru parçasına kenarortay, bir açıyı iki eş açıya ayıran ışına açıortay, bir köşeden karşı kenara çizilen dik doğru parçasına yükseklik denir. Her üçgende üçer tane kenarortay, açıortay ve yükseklik vardır.",
      "Bir üçgenin herhangi bir kenarı, diğer iki kenarın toplamından küçük, farkından büyüktür. Örneğin kenarları 5 ve 8 olan bir üçgende üçüncü kenar 3 ile 13 arasındadır. Üçgende büyük kenar karşısında büyük açı bulunur."
    ], [
      ["Kenar uzunlukları 4 cm ve 9 cm olan bir üçgenin üçüncü kenarı tam sayı olarak en fazla kaç cm olabilir?", "12", "13", "6", "5", "5 < c < 13 → en büyük 12"],
      ["Aşağıdaki uzunluklardan hangisi bir üçgen oluşturur?", "5, 7, 10", "2, 3, 6", "4, 4, 8", "1, 5, 7", "5 + 7 > 10, 5 + 10 > 7, 7 + 10 > 5"],
      ["Bir köşeden karşı kenara dik olarak çizilen doğru parçasına ne denir?", "Yükseklik", "Kenarortay", "Açıortay", "Hipotenüs", "Dik → yükseklik."],
      ["ABC üçgeninde |AB| = 6, |BC| = 8, |AC| = 10'dur. En büyük açı hangisidir?", "B açısı", "A açısı", "C açısı", "Hepsi eşit", "En uzun kenar AC'nin karşısındaki açı: B."]
    ], [
      ["Kenarları 7 cm ve 11 cm olan üçgenin üçüncü kenarı tam sayıdır. Üçüncü kenar kaç farklı değer alabilir? Gösteriniz.", "11 − 7 < c < 11 + 7 → 4 < c < 18 → 5, 6, ..., 17 → 13 farklı değer."]
    ]],
    ["Pisagor Bağıntısı", [
      "Dik üçgende: a² + b² = c² (c: hipotenüs, dik açının karşısı)",
      "Pisagor üçlüleri: 3-4-5, 5-12-13, 8-15-17, 6-8-10, 7-24-25",
      "Merdiven, gölge, köşegen problemleri Pisagor ile çözülür."
    ], [
      "Dik üçgende dik kenarların kareleri toplamı hipotenüsün karesine eşittir: a² + b² = c². Dik kenarları 6 cm ve 8 cm olan üçgenin hipotenüsü √(36 + 64) = √100 = 10 cm'dir.",
      "Pisagor bağıntısı günlük hayatta merdivenin duvara dayandığı yükseklik, televizyonun köşegeni, iki nokta arasındaki en kısa uzaklık gibi problemlerin çözümünde kullanılır. Kenar uzunlukları bağıntıyı sağlayan bir üçgen dik üçgendir."
    ], [
      ["Dik kenarları 5 cm ve 12 cm olan dik üçgenin hipotenüsü kaç cm'dir?", "13", "17", "√119", "7", "25 + 144 = 169 → 13"],
      ["13 m'lik merdiven duvara dayanmış, alt ucu duvardan 5 m uzakta. Merdiven duvarın kaç m yüksekliğine ulaşır?", "12", "8", "√194", "18", "169 − 25 = 144 → 12"],
      ["Kenarları 6 cm ve 8 cm olan dikdörtgenin köşegeni kaç cm'dir?", "10", "14", "12", "7", "36 + 64 = 100"],
      ["Aşağıdakilerden hangisi bir dik üçgenin kenar uzunlukları olabilir?", "8, 15, 17", "4, 5, 6", "5, 10, 12", "3, 4, 6", "64 + 225 = 289 = 17²"]
    ], [
      ["Bir kuş 9 m yüksekliğindeki direğin tepesinden yerdeki, direğin dibinden 12 m uzaktaki bir yeme düz bir çizgi boyunca uçuyor. Kuş kaç m yol alır?", "√(9² + 12²) = √(81 + 144) = √225 = 15 m"],
      ["Kenarları 9, 12 ve 15 cm olan üçgenin dik üçgen olup olmadığını gösteriniz.", "9² + 12² = 81 + 144 = 225 = 15² → dik üçgendir; dik açı 15 cm'lik kenarın karşısındadır."]
    ]]
  ]],
  ["Eşlik, Benzerlik ve Dönüşüm Geometrisi", 2, [
    ["Eşlik ve Benzerlik", [
      "Eş şekiller: karşılıklı kenar ve açıları eşit (≅).",
      "Benzer şekiller: karşılıklı açıları eşit, kenarları orantılı (~).",
      "Benzerlik oranı k = karşılıklı kenarların oranı",
      "Gölge ve harita problemleri benzerlikle çözülür."
    ], [
      "Biçimleri ve büyüklükleri aynı olan şekillere eş şekiller denir; birbirinin üzerine tam olarak çakışırlar. Biçimleri aynı fakat büyüklükleri farklı olabilen şekillere benzer şekiller denir; benzer çokgenlerde karşılıklı açılar eşit, karşılıklı kenarlar orantılıdır.",
      "Benzer iki üçgende kenarlar oranı benzerlik oranını verir. Örneğin aynı anda boyu 1,5 m olan bir çocuğun gölgesi 2 m, bir ağacın gölgesi 12 m ise ağacın boyu 1,5 · 12 / 2 = 9 m'dir."
    ], [
      ["Benzerlik oranı 3 olan iki üçgenden küçüğünün çevresi 12 cm ise büyüğünün çevresi kaç cm'dir?", "36", "15", "4", "108", "Çevreler de 3 kat: 36"],
      ["Boyu 1,6 m olan bir öğrencinin gölgesi 2 m iken aynı anda bir direğin gölgesi 15 m'dir. Direk kaç m'dir?", "12", "18,75", "13,6", "9", "1,6/2 = x/15 → x = 12"],
      ["Aşağıdakilerden hangisi her zaman benzerdir?", "İki eşkenar üçgen", "İki dikdörtgen", "İki ikizkenar üçgen", "İki dik üçgen", "Eşkenar üçgenlerin tüm açıları 60°."],
      ["Kenarları 3, 4, 5 cm olan üçgene benzer üçgenin en kısa kenarı 9 cm ise en uzun kenarı kaç cm'dir?", "15", "12", "11", "20", "Oran 3: 5·3 = 15"]
    ], [
      ["Bir haritada 1 cm, gerçekte 2 km'dir. İki şehir arası haritada 7,5 cm ise gerçek uzaklık kaç km'dir? Bu ilişkiyi benzerlik kavramıyla açıklayınız.", "7,5 · 2 = 15 km. Harita gerçek arazinin küçültülmüş benzer bir modelidir; tüm uzunluklar aynı oranla küçülür."]
    ]],
    ["Öteleme, Yansıma ve Dönüşüm Geometrisi", [
      "Öteleme: şekil kaydırılır; biçim, boyut ve yön değişmez.",
      "x eksenine göre yansıma: (a, b) → (a, −b) · y eksenine göre: (a, b) → (−a, b)",
      "Ötelemede (a, b) noktası 3 birim sağa, 2 birim yukarı → (a + 3, b + 2)",
      "Ardışık öteleme ve yansımalar birleştirilebilir."
    ], [
      "Bir şeklin her noktasının aynı yönde ve aynı miktarda kaydırılmasına öteleme denir. Ötelenen şekil ilk şekille eştir. Koordinat düzleminde sağa öteleme x'e ekleme, yukarı öteleme y'ye ekleme yapar.",
      "Yansımada şekil bir doğruya (simetri eksenine) göre ayna görüntüsüne dönüşür; her nokta ile görüntüsü eksene eşit uzaklıktadır. x eksenine göre yansımada y'nin işareti, y eksenine göre yansımada x'in işareti değişir."
    ], [
      ["A(2, −3) noktasının x eksenine göre yansıması hangisidir?", "(2, 3)", "(−2, −3)", "(−2, 3)", "(3, 2)", "x ekseninde y'nin işareti değişir."],
      ["B(−1, 4) noktası 5 birim sağa, 2 birim aşağı ötelenirse görüntüsü ne olur?", "(4, 2)", "(−6, 6)", "(4, 6)", "(−6, 2)", "(−1 + 5, 4 − 2)"],
      ["C(3, 5) noktasının y eksenine göre yansıması hangisidir?", "(−3, 5)", "(3, −5)", "(−3, −5)", "(5, 3)", "y ekseninde x'in işareti değişir."],
      ["Ötelemede aşağıdakilerden hangisi değişir?", "Şeklin konumu", "Kenar uzunlukları", "Açı ölçüleri", "Alanı", "Yalnızca yer değişir."]
    ], [
      ["Köşeleri A(1, 1), B(4, 1), C(1, 3) olan üçgen önce y eksenine göre yansıtılıyor, sonra 2 birim aşağı öteleniyor. Son durumdaki köşe koordinatlarını yazınız.", "Yansıma: (−1, 1), (−4, 1), (−1, 3). Öteleme: A'(−1, −1), B'(−4, −1), C'(−1, 1)."]
    ]]
  ]],
  ["Geometrik Cisimler", 2, [
    ["Prizmalar ve Silindir", [
      "Dik prizma: tabanları eş ve paralel çokgen, yan yüzleri dikdörtgen.",
      "Hacim = taban alanı × yükseklik",
      "Silindir: taban alanı πr², yanal alan 2πr·h, hacim πr²h",
      "Silindirin yüzey alanı = 2πr² + 2πrh"
    ], [
      "Tabanları birbirine paralel ve eş çokgen, yan yüzleri dikdörtgen olan cisimlere dik prizma denir; tabanın biçimine göre adlandırılır (üçgen prizma, kare prizma...). Bütün prizmaların ve silindirin hacmi taban alanı ile yüksekliğin çarpımıdır.",
      "Silindirin açınımı iki daire ve bir dikdörtgenden oluşur. Dikdörtgenin bir kenarı tabanın çevresi (2πr), diğer kenarı silindirin yüksekliğidir. Bu yüzden yanal alan 2πrh, toplam yüzey alanı 2πr² + 2πrh olur."
    ], [
      ["Taban yarıçapı 3 cm, yüksekliği 10 cm olan silindirin hacmi kaç cm³'tür? (π = 3)", "270", "90", "180", "900", "3 · 3² · 10 = 270"],
      ["Taban alanı 24 cm², yüksekliği 5 cm olan üçgen prizmanın hacmi kaç cm³'tür?", "120", "60", "29", "240", "24 · 5 = 120"],
      ["Yarıçapı 2 cm, yüksekliği 7 cm olan silindirin yanal alanı kaç cm²'dir? (π = 3)", "84", "42", "168", "96", "2 · 3 · 2 · 7 = 84"],
      ["Bir kare prizmanın taban ayrıtı 4 cm, yüksekliği 9 cm ise hacmi kaç cm³'tür?", "144", "36", "52", "324", "16 · 9 = 144"]
    ], [
      ["Taban yarıçapı 5 cm, yüksekliği 12 cm olan silindir biçimindeki bir bardak tamamen suyla doludur. Bardakta kaç cm³ su vardır? Bu su taban alanı 50 cm² olan prizma şeklindeki kaba boşaltılırsa su yüksekliği kaç cm olur? (π = 3)", "Hacim = 3 · 25 · 12 = 900 cm³. Prizmada 900 / 50 = 18 cm."]
    ]],
    ["Piramit, Koni ve Açınımlar", [
      "Piramit: tabanı çokgen, yan yüzleri bir tepe noktasında birleşen üçgenler.",
      "Koni: tabanı daire, yan yüzü bir tepe noktasında birleşir.",
      "Dik koninin açınımı: bir daire + bir daire dilimi.",
      "Cisimleri farklı yönlerden (önden, üstten, yandan) görünümleriyle tanı."
    ], [
      "Tabanı çokgen olan ve yan yüzleri bir tepe noktasında birleşen üçgenlerden oluşan cisimlere piramit denir; tabanına göre adlandırılır. Tabanı daire olan ve yan yüzeyi bir tepe noktasında birleşen cisme koni denir.",
      "Koninin açınımı bir daire (taban) ve bir daire diliminden (yan yüzey) oluşur. Kare piramidin açınımında bir kare ve dört eş ikizkenar üçgen bulunur. Cisimlerin önden, yandan ve üstten görünümleri çizilerek yapıları incelenir."
    ], [
      ["Kare piramidin kaç yüzü vardır?", "5", "4", "6", "8", "1 kare taban + 4 üçgen yan yüz."],
      ["Açınımı bir daire ve bir daire diliminden oluşan cisim hangisidir?", "Koni", "Silindir", "Küre", "Piramit", "Dik koni."],
      ["Üçgen piramidin kaç köşesi vardır?", "4", "3", "6", "5", "Tabanda 3 + tepe 1."],
      ["Üstten bakıldığında daire, önden bakıldığında üçgen görünen cisim hangisidir?", "Koni", "Silindir", "Kare piramit", "Küp", "Koni."]
    ], [
      ["Bir kare piramit ile bir küpün yüz, ayrıt ve köşe sayılarını karşılaştırınız.", "Kare piramit: 5 yüz, 8 ayrıt, 5 köşe. Küp: 6 yüz, 12 ayrıt, 8 köşe."]
    ]]
  ]]
]);
