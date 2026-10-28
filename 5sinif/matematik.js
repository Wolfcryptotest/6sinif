window.ICERIK = window.ICERIK || {};
// 5. sınıf Matematik - Türkiye Yüzyılı Maarif Modeli (tymm.meb.gov.tr tema sırası)
// Elle yazılan sorularda doğru şık ilk sıradadır; uygulama şıkları karıştırır.
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.matematik = {
  ad: "Matematik", ikon: "➗", renk: "#4f7cff",
  uniteler: [
    {
      id: "m1", ad: "Sayılar ve Nicelikler (1): Doğal Sayılar",
      konular: [
        {
          id: "m1k1", ad: "Çok Basamaklı Doğal Sayılar", video: "Qo0eDrWg3iM",
          ozet: ["Sayılar sağdan sola üçerli bölüklere ayrılır: birler, binler, milyonlar, milyarlar bölüğü.", "Her bölükte birler, onlar, yüzler basamağı vardır.", "Basamak değeri = rakam × bulunduğu basamağın değeri. 3 452 → 4'ün basamak değeri 400.", "Sayı okunurken bölük adları söylenir: 2 305 000 → iki milyon üç yüz beş bin.", "Çözümleme: 5 238 = 5×1000 + 2×100 + 3×10 + 8×1"],
          anlatim: [
            "Çok basamaklı sayıları kolay okumak için sayıyı sağdan sola doğru üçerli gruplara ayırırız. Bu gruplara bölük denir: birler bölüğü, binler bölüğü, milyonlar bölüğü, milyarlar bölüğü.",
            "Her bölüğün kendi içinde birler, onlar ve yüzler basamağı vardır. Örneğin 47 805 312 sayısında 47 milyonlar bölüğünde, 805 binler bölüğünde, 312 birler bölüğündedir.",
            "Bir rakamın basamak değeri, rakam ile bulunduğu basamağın değerinin çarpımıdır. 6 274 sayısında 2'nin basamak değeri 200, 6'nın basamak değeri 6 000'dir. Rakamın kendi değeri (sayı değeri) ise değişmez: 2.",
            "Sayıyı okurken her bölüğü okuyup bölüğün adını söyleriz. 3 040 506 → üç milyon kırk bin beş yüz altı. Sıfır olan basamaklar okunmaz ama yazarken yerine 0 koymayı unutmayız.",
            "Çözümleme, sayıyı basamak değerlerinin toplamı olarak yazmaktır: 70 509 = 7 × 10 000 + 5 × 100 + 9 × 1."
          ],
          sorular: [
            S("\"Dört milyon yetmiş bin on iki\" sayısı hangisidir?", ["4 070 012", "4 700 012", "4 070 120", "4 007 012"], "Milyonlar: 4, binler: 070, birler: 012 → 4 070 012."),
            S("58 314 762 sayısında 3 rakamının basamak değeri kaçtır?", ["300 000", "30 000", "3 000 000", "3"], "3 yüz binler basamağındadır: 3 × 100 000 = 300 000."),
            S("7 × 100 000 + 4 × 1 000 + 6 × 10 çözümlemesi hangi sayıya aittir?", ["704 060", "740 060", "704 600", "7 460"], "700 000 + 4 000 + 60 = 704 060."),
            S("Hangi sayının binler bölüğü 205'tir?", ["3 205 678", "2 053 678", "20 567 205", "205 000 000"], "3 205 678 → milyonlar 3, binler 205, birler 678."),
            S("6 rakamlı en büyük doğal sayı ile 6 rakamlı en küçük doğal sayının farkı kaçtır?", ["899 999", "900 000", "999 998", "99 999"], "999 999 − 100 000 = 899 999.")
          ]
        },
        {
          id: "m1k2", ad: "Doğal Sayılarla Toplama ve Çıkarma", video: "JSpsUuZHlac",
          ozet: ["Toplamada basamaklar alt alta yazılır, birler basamağından başlanır.", "Çıkarmada üstteki rakam küçükse bir üst basamaktan 10 alınır (onluk bozma).", "Toplama ile çıkarma ters işlemdir: 450 + 120 = 570 ⇒ 570 − 120 = 450.", "Tahmin: sayılar en yakın onluk/yüzlük/binliğe yuvarlanıp işlem yapılır.", "Zihinden toplama: 398 + 245 = 400 + 245 − 2 = 643"],
          anlatim: [
            "Toplama ve çıkarma işlemlerinde aynı basamaktaki rakamlar alt alta gelecek şekilde yazılır ve işleme birler basamağından başlanır.",
            "Toplamada bir basamağın toplamı 10 veya daha büyükse onluk bir üst basamağa eldesi olarak aktarılır. Çıkarmada üstteki rakam alttakinden küçükse bir üst basamaktan 1 alınır, bu bulunduğumuz basamakta 10 değerindedir.",
            "Toplama ile çıkarma birbirinin tersidir. Bir toplama işleminde eksik toplananı bulmak için toplamdan diğer toplanan çıkarılır: ? + 245 = 900 ⇒ ? = 900 − 245 = 655.",
            "Sonucu tahmin etmek için sayılar yuvarlanır. 4 870 + 2 140 işleminin sonucunu yüzlüğe yuvarlayarak tahmin edersek 4 900 + 2 100 = 7 000 olur. Tahmin gerçek sonuca yakın olmalıdır."
          ],
          sorular: [
            S("45 608 + 27 395 işleminin sonucu kaçtır?", ["73 003", "72 903", "73 103", "72 003"], "45 608 + 27 395 = 73 003."),
            S("80 000 − 36 457 işleminin sonucu kaçtır?", ["43 543", "44 543", "43 643", "56 457"], "80 000 − 36 457 = 43 543."),
            S("? − 1 250 = 3 480 işleminde ? yerine hangi sayı gelmelidir?", ["4 730", "2 230", "4 630", "3 730"], "Çıkarmanın tersi toplamadır: 3 480 + 1 250 = 4 730."),
            S("6 812 + 3 179 toplamının en yakın yüzlüğe yuvarlanarak tahmini hangisidir?", ["10 000", "9 900", "10 100", "9 000"], "6 800 + 3 200 = 10 000.")
          ]
        },
        {
          id: "m1k3", ad: "Doğal Sayılarla Çarpma ve Bölme", video: "Nq_ARE8G6S4",
          ozet: ["Çarpmada sırayla birler, onlar, yüzler basamağıyla çarpılıp sonuçlar toplanır.", "10, 100, 1000 ile çarpmada sağa o kadar sıfır eklenir.", "Bölme: bölünen = bölen × bölüm + kalan; kalan bölenden küçüktür.", "Çarpma ile bölme ters işlemdir.", "Sonu sıfırlı sayılarda sıfırlar sadeleştirilebilir: 4 200 ÷ 300 = 42 ÷ 3 = 14"],
          anlatim: [
            "Çok basamaklı sayılarla çarpma yaparken çarpanın her basamağı ile ayrı ayrı çarparız, her satırı bir basamak sola kaydırarak yazar ve sonuçları toplarız.",
            "Bir sayıyı 10, 100, 1000 ile çarparken sayının sağına sırasıyla 1, 2, 3 sıfır ekleriz: 37 × 100 = 3 700. Sonu sıfırlı sayıları çarparken önce sıfırsız kısımları çarpar, sonra toplam sıfır sayısı kadar sıfır ekleriz: 40 × 600 = 24 000.",
            "Bölme işleminde bölünen = bölen × bölüm + kalan bağıntısı vardır. Kalan her zaman bölenden küçüktür. Kalan 0 ise bölme kalansızdır.",
            "Bölme işleminde bölüneni ve böleni aynı sayıda sıfır atarak sadeleştirebiliriz: 7 200 ÷ 80 = 720 ÷ 8 = 90."
          ],
          sorular: [
            S("348 × 25 işleminin sonucu kaçtır?", ["8 700", "8 600", "7 800", "8 750"], "348 × 25 = 8 700."),
            S("Bir bölme işleminde bölen 12, bölüm 35, kalan 7'dir. Bölünen kaçtır?", ["427", "420", "413", "432"], "Bölünen = 12 × 35 + 7 = 420 + 7 = 427."),
            S("9 600 ÷ 300 işleminin sonucu kaçtır?", ["32", "320", "3", "302"], "Sıfırlar sadeleşir: 96 ÷ 3 = 32."),
            S("Bölenin 9 olduğu bir bölme işleminde kalan en çok kaç olabilir?", ["8", "9", "10", "1"], "Kalan bölenden küçük olmalıdır; en çok 8.")
          ]
        },
        {
          id: "m1k4", ad: "Doğal Sayı Problemleri", video: "QTmIwlpI2v0",
          ozet: ["Problemi oku, verilenleri ve isteneni belirle.", "Hangi işlem(ler)in gerektiğine karar ver: toplama, çıkarma, çarpma, bölme.", "Çok adımlı problemlerde sırayla küçük sorular çöz.", "Sonucun mantıklı olup olmadığını tahminle kontrol et."],
          anlatim: [
            "Problem çözmenin ilk adımı problemi anlamaktır: Neler verilmiş, ne isteniyor? Önemli bilgilerin altını çizmek işimizi kolaylaştırır.",
            "Sonra plan yaparız: 'toplam' ve 'birlikte' gibi ifadeler toplamayı, 'kalan', 'fark', 'ne kadar fazla' çıkarmayı, 'her birinde eşit', 'tanesi' çarpma ya da bölmeyi düşündürür.",
            "Çok adımlı problemlerde önce ara sonuçları buluruz. Örneğin 'Tanesi 45 TL olan 12 defter ve tanesi 30 TL olan 8 kalem alan Ece kaç TL öder?' sorusunda önce 12 × 45 = 540, sonra 8 × 30 = 240 bulunur, sonra 540 + 240 = 780 TL.",
            "Son olarak sonucu kontrol ederiz: Bulduğumuz sayı gerçek hayatta mantıklı mı? Tahminimize yakın mı?"
          ],
          sorular: [
            S("Bir kitapçı 24 kolinin her birinde 36 kitap getirdi. Kitapların 278 tanesini sattı. Kaç kitap kaldı?", ["586", "864", "596", "576"], "24 × 36 = 864 kitap; 864 − 278 = 586."),
            S("1 250 TL'si olan Mert, tanesi 85 TL olan oyuncaklardan en çok kaç tane alabilir?", ["14", "15", "13", "12"], "1 250 ÷ 85 = 14, kalan 60. 15 tanesi 1 275 TL eder, para yetmez."),
            S("Bir okulda 18 sınıf ve her sınıfta 28 öğrenci vardır. Öğrenciler 42 kişilik otobüslere bindirilecek. Kaç otobüs gerekir?", ["12", "11", "13", "14"], "18 × 28 = 504 öğrenci; 504 ÷ 42 = 12 otobüs.")
          ]
        }
      ]
    },
    {
      id: "m2", ad: "Sayılar ve Nicelikler (2): Kesirler",
      konular: [
        {
          id: "m2k1", ad: "Kesirler ve Gösterimleri", video: "tqWCEmlqZYI",
          ozet: ["Kesir: bir bütünün eş parçalarından bazılarını gösterir. Pay / payda.", "Birim kesir: payı 1 olan kesir (1/4).", "Basit kesir: pay < payda (3/5). Bileşik kesir: pay ≥ payda (7/4).", "Tam sayılı kesir: 1 ¾ = 7/4 (1 × 4 + 3 = 7).", "Kesirler sayı doğrusunda gösterilebilir."],
          anlatim: [
            "Bir bütün eş parçalara bölündüğünde, alınan parçaları kesirle gösteririz. Kesir çizgisinin altındaki sayı (payda) bütünün kaç eş parçaya bölündüğünü, üstündeki sayı (pay) kaç parça alındığını gösterir.",
            "Payı 1 olan kesirlere birim kesir denir: 1/2, 1/3, 1/8. Her kesir birim kesirlerden oluşur: 3/5 = 1/5 + 1/5 + 1/5.",
            "Payı paydasından küçük olan kesirler basit kesirdir ve 1 bütünden küçüktür. Payı paydasına eşit ya da paydasından büyük olan kesirler bileşik kesirdir.",
            "Bileşik kesirler tam sayılı kesir olarak yazılabilir: 11/4 → 11 ÷ 4 = 2, kalan 3 → 2 ¾. Tersine, 3 ⅖ = (3 × 5 + 2)/5 = 17/5."
          ],
          sorular: [
            S("Hangisi bir bileşik kesirdir?", ["9/7", "3/8", "1/2", "5/9"], "Payı paydasından büyük ya da eşit olan kesir bileşik kesirdir: 9/7."),
            S("3 ⅖ tam sayılı kesrinin bileşik kesir olarak yazılışı hangisidir?", ["17/5", "15/5", "32/5", "6/5"], "3 × 5 + 2 = 17 → 17/5."),
            S("23/6 kesri tam sayılı kesir olarak nasıl yazılır?", ["3 ⅚", "3 ⅙", "4 ⅚", "2 ⅚"], "23 ÷ 6 = 3, kalan 5 → 3 ⅚."),
            S("Bir pasta 8 eş dilime bölünmüş, 3 dilimi yenmiştir. Kalan pasta bütünün kaçta kaçıdır?", ["5/8", "3/8", "3/5", "8/5"], "8 − 3 = 5 dilim kaldı → 5/8.")
          ]
        },
        {
          id: "m2k2", ad: "Denk Kesirler ve Kesirleri Karşılaştırma", video: "tqWCEmlqZYI",
          ozet: ["Denk kesir: pay ve payda (0 hariç) aynı sayıyla çarpılır/bölünür. 2/3 = 4/6 = 8/12", "Paydaları eşit kesirlerde payı büyük olan büyüktür.", "Payları eşit kesirlerde paydası küçük olan büyüktür.", "Farklı paydalarda önce paydalar eşitlenir.", "Sadeleştirme: 12/18 = 2/3"],
          anlatim: [
            "Aynı bütünün aynı miktarını gösteren kesirlere denk kesir denir. Bir kesrin payı ve paydası 0 hariç aynı sayıyla çarpılır ya da bölünürse denk kesir elde edilir: 3/4 = 6/8 = 9/12.",
            "Pay ve paydayı aynı sayıya bölerek kesri sadeleştiririz: 15/20 → (5'e bölelim) 3/4. Artık sadeleşmeyen kesre en sade kesir denir.",
            "Kesirleri karşılaştırırken: Paydalar eşitse payı büyük olan büyüktür (5/9 > 4/9). Paylar eşitse paydası küçük olan büyüktür, çünkü bütün daha az parçaya bölünmüştür (3/5 > 3/8).",
            "Paylar da paydalar da farklıysa denk kesirler yardımıyla paydaları eşitleriz: 2/3 ile 3/4 → 8/12 ile 9/12 → 3/4 daha büyüktür."
          ],
          sorular: [
            S("Hangisi 3/5 kesrine denktir?", ["12/20", "6/15", "9/10", "3/10"], "3/5 = (3×4)/(5×4) = 12/20."),
            S("Hangi sıralama doğrudur?", ["3/8 < 3/5 < 3/4", "3/4 < 3/5 < 3/8", "3/5 < 3/8 < 3/4", "3/8 < 3/4 < 3/5"], "Payları eşit kesirlerde paydası küçük olan büyüktür."),
            S("18/24 kesrinin en sade hâli hangisidir?", ["3/4", "6/8", "9/12", "2/3"], "18 ve 24 sayılarını 6'ya bölersek 3/4."),
            S("Hangisi 1/2'den büyüktür?", ["5/8", "3/7", "4/9", "2/5"], "5/8 = 10/16 > 8/16. Diğerlerinde pay, paydanın yarısından küçüktür.")
          ]
        },
        {
          id: "m2k3", ad: "Ondalık Gösterim", video: "GsT12GYbrZA",
          ozet: ["Paydası 10, 100, 1000 olan kesirler ondalık gösterimle yazılır.", "7/10 = 0,7 · 25/100 = 0,25 · 3/1000 = 0,003", "Virgülün solu tam kısım, sağı ondalık kısımdır.", "Ondalık kısım basamakları: onda birler, yüzde birler, binde birler.", "Karşılaştırmada önce tam kısımlara, sonra sırayla ondalık basamaklara bakılır."],
          anlatim: [
            "Paydası 10, 100 ya da 1000 olan kesirleri virgül kullanarak yazabiliriz. Buna ondalık gösterim denir. 3/10 = 0,3 (sıfır tam onda üç), 47/100 = 0,47, 125/1000 = 0,125.",
            "Virgülün solunda tam kısım, sağında ondalık kısım bulunur. 4,56 sayısında 4 tam kısım; 5 onda birler, 6 yüzde birler basamağıdır.",
            "Paydası 10, 100 ya da 1000 olmayan bazı kesirleri önce denk kesre çevirerek ondalık gösterimle yazarız: 3/4 = 75/100 = 0,75; 2/5 = 4/10 = 0,4.",
            "Ondalık gösterimleri karşılaştırırken önce tam kısımlara bakarız. Tam kısımlar eşitse onda birler, sonra yüzde birler basamağını karşılaştırırız: 2,35 > 2,3 çünkü 2,35 = 2,35 ve 2,3 = 2,30."
          ],
          sorular: [
            S("3/4 kesrinin ondalık gösterimi hangisidir?", ["0,75", "0,34", "3,4", "0,25"], "3/4 = 75/100 = 0,75."),
            S("2,08 sayısının okunuşu hangisidir?", ["İki tam yüzde sekiz", "İki tam onda sekiz", "İki tam binde sekiz", "Yirmi tam sekiz"], "08 yüzde birler basamağına kadar gider: yüzde sekiz."),
            S("Hangisi en büyüktür?", ["0,6", "0,58", "0,509", "0,06"], "Onda birler basamağına bakarız: 0,6'da 6 en büyüktür."),
            S("Bir koşucu 4,5 km koştu. Bu mesafe kaç metredir?", ["4 500 m", "450 m", "45 m", "4 050 m"], "1 km = 1 000 m; 4,5 × 1 000 = 4 500 m.")
          ]
        },
        {
          id: "m2k4", ad: "Yüzdeler", video: "HTUynMAiY1Q",
          ozet: ["Yüzde: paydası 100 olan kesir. %35 = 35/100 = 0,35", "%50 = yarısı, %25 = dörtte biri, %10 = onda biri, %100 = tamamı.", "Bir çokluğun yüzdesi: 200'ün %30'u = 200 × 30/100 = 60", "Kesir → yüzde: 3/5 = 60/100 = %60"],
          anlatim: [
            "Yüzde, bir bütünün 100 eş parçasından kaçının alındığını gösterir ve % sembolüyle yazılır. %45, 100 parçadan 45'i demektir: 45/100 = 0,45.",
            "Bazı yüzdeleri kesir olarak bilmek işimizi kolaylaştırır: %50 = 1/2, %25 = 1/4, %75 = 3/4, %20 = 1/5, %10 = 1/10.",
            "Bir çokluğun belirtilen yüzdesini bulmak için çokluğu 100'e bölüp yüzde ile çarparız: 400 TL'nin %15'i = 400 ÷ 100 × 15 = 60 TL.",
            "Bir kesri yüzdeye çevirmek için paydasını 100 yapacak denk kesri buluruz: 7/20 = 35/100 = %35."
          ],
          sorular: [
            S("240 sayısının %25'i kaçtır?", ["60", "48", "24", "96"], "%25 = 1/4 → 240 ÷ 4 = 60."),
            S("9/20 kesri yüzde kaç olarak ifade edilir?", ["%45", "%9", "%20", "%90"], "9/20 = 45/100 = %45."),
            S("Bir sınıftaki 30 öğrencinin %40'ı kızdır. Sınıfta kaç erkek öğrenci vardır?", ["18", "12", "14", "16"], "Kızlar: 30 × 40/100 = 12; erkekler: 30 − 12 = 18."),
            S("Hangisi 0,6 ile aynı değeri gösterir?", ["%60", "%6", "%0,6", "%16"], "0,6 = 60/100 = %60.")
          ]
        }
      ]
    },
    {
      id: "m3", ad: "İşlemlerle Cebirsel Düşünme",
      konular: [
        {
          id: "m3k1", ad: "Eşitliğin Korunumu ve İşlem Özellikleri", video: "evdGpFHSvyQ",
          ozet: ["Eşitliğin iki tarafına aynı sayı eklenir/çıkarılırsa eşitlik bozulmaz.", "İki taraf aynı sayıyla (0 hariç bölmede) çarpılır/bölünürse eşitlik korunur.", "Değişme: 5 + 8 = 8 + 5 · 4 × 7 = 7 × 4", "Birleşme: (2 + 3) + 4 = 2 + (3 + 4)", "Dağılma: 6 × (10 + 3) = 6 × 10 + 6 × 3"],
          anlatim: [
            "Eşittir işareti (=) iki tarafın aynı değere sahip olduğunu gösterir; bir terazinin dengede olması gibi düşünebiliriz. 12 + 8 = 20 eşitliğinin iki tarafına 5 eklersek 12 + 8 + 5 = 25 olur, denge bozulmaz.",
            "Aynı şekilde iki tarafı aynı sayı ile çarpar ya da (0 hariç) aynı sayıya bölersek eşitlik korunur: 3 × 4 = 12 ise 3 × 4 × 2 = 24.",
            "Toplama ve çarpmada değişme özelliği vardır: Sayıların yerini değiştirmek sonucu değiştirmez. Birleşme özelliği sayesinde istediğimiz iki sayıyı önce işleme sokabiliriz: 25 + 37 + 75 = (25 + 75) + 37 = 137.",
            "Çarpmanın toplama üzerine dağılma özelliği zihinden işlem yapmayı kolaylaştırır: 8 × 23 = 8 × 20 + 8 × 3 = 160 + 24 = 184. Çıkarma ve bölmede değişme özelliği yoktur: 10 − 4 ≠ 4 − 10."
          ],
          sorular: [
            S("27 + 15 = 30 + ? eşitliğinde ? yerine hangi sayı gelmelidir?", ["12", "15", "18", "42"], "27 + 15 = 42 → 30 + 12 = 42."),
            S("7 × (20 + 4) işleminin dağılma özelliğiyle yazılışı hangisidir?", ["7 × 20 + 7 × 4", "7 × 20 + 4", "7 + 20 × 4", "(7 + 20) × 4"], "Çarpma, parantezdeki her terime dağıtılır."),
            S("Hangi işlemde değişme özelliği yoktur?", ["Çıkarma", "Toplama", "Çarpma", "Hepsinde vardır"], "9 − 3 = 6 ama 3 − 9 = 6 değildir."),
            S("Dengedeki bir terazinin bir kefesinde 3 kg, diğerinde 1 kg ve 2 kg ağırlık var. İki kefeye de 4 kg eklenirse ne olur?", ["Denge korunur", "Sol kefe ağır basar", "Sağ kefe ağır basar", "Teraziyi bilemeyiz"], "Eşitliğin iki tarafına aynı miktar eklendiği için denge bozulmaz.")
          ]
        },
        {
          id: "m3k2", ad: "Kare, Küp ve İşlem Önceliği", video: "K64EWLnIRYY",
          ozet: ["Bir sayının karesi: sayının kendisiyle çarpımı. 6² = 6 × 6 = 36", "Bir sayının küpü: 3 kez kendisiyle çarpımı. 4³ = 4 × 4 × 4 = 64", "İşlem sırası: 1) parantez 2) üslü ifade 3) çarpma-bölme (soldan sağa) 4) toplama-çıkarma (soldan sağa)", "2 + 3 × 4 = 14 (önce çarpma!)"],
          anlatim: [
            "Bir sayının kendisiyle çarpımına o sayının karesi denir ve sayının sağ üstüne küçük 2 yazılır: 5² = 25. Kare adı, kenarı 5 birim olan bir karenin 25 birim kareden oluşmasından gelir.",
            "Bir sayının kendisiyle 3 kez çarpımına küp denir: 2³ = 2 × 2 × 2 = 8. Kenarı 2 birim olan küp 8 birim küpten oluşur.",
            "Birden çok işlem içeren ifadelerde işlem sırası önemlidir. Önce parantez içi, sonra kare ve küp, sonra çarpma ve bölme (soldan sağa), en son toplama ve çıkarma (soldan sağa) yapılır.",
            "Örnek: 20 − 3 × (6 − 2)² ÷ 12 → parantez: 4 → kare: 16 → 3 × 16 = 48 → 48 ÷ 12 = 4 → 20 − 4 = 16."
          ],
          sorular: [
            S("7² + 2³ işleminin sonucu kaçtır?", ["57", "20", "55", "63"], "49 + 8 = 57."),
            S("18 − 12 ÷ 3 × 2 işleminin sonucu kaçtır?", ["10", "4", "16", "12"], "Soldan sağa bölme ve çarpma: 12 ÷ 3 = 4, 4 × 2 = 8; 18 − 8 = 10."),
            S("(5 + 3)² işleminin sonucu kaçtır?", ["64", "34", "16", "28"], "Önce parantez: 8; 8² = 64."),
            S("Hangisinin sonucu en büyüktür?", ["3³", "5²", "2⁴", "4²"], "27, 25, 16, 16 → en büyük 3³ = 27.")
          ]
        },
        {
          id: "m3k3", ad: "Sayı ve Şekil Örüntüleri", video: "DHBvWCp8qro",
          ozet: ["Örüntü: belli bir kurala göre devam eden sayı veya şekil dizisi.", "Aritmetik örüntüde her adımda aynı sayı eklenir/çıkarılır: 4, 7, 10, 13 (+3)", "Kural ile istenen adım bulunur: 3 × adım + 1 → 10. adım = 31", "Şekil örüntülerinde her adımdaki şekil sayısı sayılıp sayı örüntüsüne çevrilir."],
          anlatim: [
            "Belirli bir kurala göre tekrar eden ya da artan-azalan sayı veya şekil dizilerine örüntü denir. Örüntünün kuralını bulursak istediğimiz adımı hesaplayabiliriz.",
            "5, 9, 13, 17, ... örüntüsünde her terim bir öncekinden 4 fazladır. Kural: 4 × adım sayısı + 1. 1. adım: 4×1+1 = 5, 10. adım: 4×10+1 = 41.",
            "Bazı örüntülerde terimler katlanarak büyür: 3, 6, 12, 24 (her adımda ×2). Bazılarında ise farklar düzenli değişir: 1, 4, 9, 16 (kare sayılar).",
            "Şekil örüntülerinde her adımdaki kibrit, kare veya nokta sayısını sayarak bir sayı örüntüsü elde ederiz ve kuralı ondan buluruz."
          ],
          sorular: [
            S("8, 15, 22, 29, ... örüntüsünün 6. terimi kaçtır?", ["43", "36", "50", "42"], "Her adımda 7 artar: 29 + 7 = 36 (5. terim), 36 + 7 = 43 (6. terim)."),
            S("Kuralı \"adım sayısının 5 katının 2 eksiği\" olan örüntünün 9. adımı kaçtır?", ["43", "47", "45", "40"], "5 × 9 − 2 = 43."),
            S("1, 4, 9, 16, ... örüntüsünde sıradaki sayı kaçtır?", ["25", "20", "23", "32"], "Kare sayılar: 5² = 25."),
            S("Her adımda 3 kare eklenen bir şekil örüntüsünün 1. adımında 2 kare var. 7. adımda kaç kare olur?", ["20", "21", "23", "17"], "2 + 6 × 3 = 20.")
          ]
        },
        {
          id: "m3k4", ad: "Algoritma", video: "PoQhwSlUzOQ",
          ozet: ["Algoritma: bir işi yapmak için sıralı, açık adımlar.", "Adımların sırası değişirse sonuç değişebilir.", "Akış şemasında başla-bitir, işlem ve karar kutuları kullanılır.", "Algoritmayı adım adım uygulayarak sonucu buluruz."],
          anlatim: [
            "Bir problemi çözmek ya da bir işi yapmak için izlenen sıralı ve açık adımlara algoritma denir. Bir yemek tarifi ya da çarpma işleminin adımları birer algoritmadır.",
            "Algoritmanın adımları belirsiz olmamalı ve doğru sırada yazılmalıdır. 'Çayı demle' adımı 'suyu kaynat' adımından önce gelirse sonuç yanlış olur.",
            "Algoritmalar yazıyla ya da akış şemasıyla gösterilebilir. Akış şemasında oval kutular başla/bitir, dikdörtgenler işlem, eşkenar dörtgenler karar (evet/hayır) adımlarını gösterir.",
            "Örnek algoritma: 1) Bir sayı seç. 2) Sayıyı 3 ile çarp. 3) Sonuca 4 ekle. 4) Sonucu yaz. Seçilen sayı 5 ise sonuç 5 × 3 + 4 = 19 olur."
          ],
          sorular: [
            S("\"1) Sayıyı 2 ile çarp 2) 6 ekle 3) 2'ye böl\" algoritmasında başlangıç sayısı 10 ise sonuç kaçtır?", ["13", "16", "26", "11"], "10 × 2 = 20, 20 + 6 = 26, 26 ÷ 2 = 13."),
            S("Akış şemasında karar adımı hangi şekille gösterilir?", ["Eşkenar dörtgen", "Oval", "Dikdörtgen", "Daire"], "Evet/hayır soruları eşkenar dörtgen ile gösterilir."),
            S("Hangisi bir algoritmanın özelliği değildir?", ["Adımların sırası önemsizdir", "Adımlar açık olmalıdır", "Bir başlangıcı ve sonu vardır", "Adımlar sıralıdır"], "Algoritmada adımların sırası önemlidir.")
          ]
        }
      ]
    },
    {
      id: "m4", ad: "Geometrik Şekiller",
      konular: [
        {
          id: "m4k1", ad: "Temel Geometrik Kavramlar", video: "EKW1w6sy8JM",
          ozet: ["Nokta: boyutu yok, büyük harfle adlandırılır (A).", "Doğru: iki yönde sonsuza uzanır (AB doğrusu).", "Işın: bir başlangıç noktası var, tek yönde sonsuza uzanır ([AB).", "Doğru parçası: iki ucu sınırlı ([AB]), uzunluğu ölçülebilir.", "Düzlem: her yönde sonsuza uzanan düz yüzey."],
          anlatim: [
            "Geometrinin temel yapı taşlarından biri noktadır. Noktanın eni, boyu, kalınlığı yoktur; büyük harflerle adlandırılır: A noktası.",
            "İki noktadan geçen ve iki yönde sonsuza kadar uzayan düz çizgiye doğru denir. Bir doğru üzerinde sonsuz nokta vardır ve iki noktadan yalnızca bir doğru geçer.",
            "Bir noktadan başlayıp tek yönde sonsuza uzanan çizgiye ışın denir; [AB şeklinde gösterilir. Güneş ışınları buna örnektir. İki ucu da belli olan çizgiye ise doğru parçası denir: [AB]. Doğru parçasının uzunluğu cetvelle ölçülebilir.",
            "Masa yüzeyi gibi düz ve her yönde sonsuza uzandığı düşünülen yüzeye düzlem denir. Aynı düzlemde olup hiç kesişmeyen doğrulara paralel doğrular, dik açıyla kesişenlere dik doğrular denir."
          ],
          sorular: [
            S("Bir ucu sınırlı, diğer ucu sonsuza uzanan çizgiye ne denir?", ["Işın", "Doğru", "Doğru parçası", "Düzlem"], "Işının bir başlangıç noktası vardır, tek yönde sonsuza gider."),
            S("Uzunluğu ölçülebilen hangisidir?", ["Doğru parçası", "Doğru", "Işın", "Düzlem"], "Doğru parçasının iki ucu da sınırlıdır."),
            S("Aynı düzlemde olup hiç kesişmeyen iki doğruya ne denir?", ["Paralel doğrular", "Dik doğrular", "Kesişen doğrular", "Çakışık doğrular"], "Paralel doğrular hiçbir noktada kesişmez."),
            S("İki farklı noktadan kaç doğru geçer?", ["1", "2", "Sonsuz", "Hiç"], "İki noktadan yalnızca bir doğru geçer.")
          ]
        },
        {
          id: "m4k2", ad: "Açılar ve Açı Ölçme", video: "bkzzi6x4KSc",
          ozet: ["Açı: başlangıç noktaları ortak iki ışının oluşturduğu şekil. Ortak nokta = köşe.", "Açılar iletki ile ölçülür, birimi derecedir (°).", "Dar açı < 90° · Dik açı = 90° · Geniş açı 90°-180° arası", "Doğru açı = 180° · Tam açı = 360°"],
          anlatim: [
            "Başlangıç noktaları ortak olan iki ışının oluşturduğu şekle açı denir. Işınlar açının kollarıdır, ortak nokta ise köşedir. ABC açısı ∠ABC şeklinde yazılır; ortadaki harf köşeyi gösterir.",
            "Açının ölçüsü iletki ile bulunur ve birimi derecedir (°). İletkinin merkezi açının köşesine, sıfır çizgisi bir kola yerleştirilir; diğer kolun gösterdiği değer okunur.",
            "Ölçüsü 0° ile 90° arasında olan açılar dar açı, tam 90° olan açılar dik açı, 90° ile 180° arasında olanlar geniş açıdır. Ölçüsü 180° olan açı doğru açı, 360° olan açı tam açıdır.",
            "Saatin akrep ve yelkovanı da açı oluşturur: Saat 3'te 90°, saat 6'da 180°'lik açı vardır."
          ],
          sorular: [
            S("Ölçüsü 135° olan açı hangi açı çeşididir?", ["Geniş açı", "Dar açı", "Dik açı", "Doğru açı"], "90° ile 180° arasındaki açılar geniş açıdır."),
            S("Saat tam 9:00'da akrep ile yelkovan arasındaki küçük açı kaç derecedir?", ["90°", "180°", "45°", "120°"], "Yelkovan 12'de, akrep 9'da; aralarında çeyrek tur = 90°."),
            S("Hangisi dar açıdır?", ["75°", "90°", "105°", "180°"], "90°'den küçük açılar dar açıdır."),
            S("Tam açı kaç derecedir?", ["360°", "180°", "90°", "270°"], "Tam bir dönüş 360°'dir.")
          ]
        },
        {
          id: "m4k3", ad: "Doğruların Oluşturduğu Açılar", video: "qYwZGPogeeE",
          ozet: ["Komşu açılar: köşeleri ve birer kenarları ortak.", "Tümler açılar: ölçüleri toplamı 90°.", "Bütünler açılar: ölçüleri toplamı 180°.", "Ters açılar: kesişen iki doğrunun karşılıklı açıları, ölçüleri eşittir.", "Kesişen iki doğrunun oluşturduğu 4 açının toplamı 360°."],
          anlatim: [
            "Köşeleri ve birer kolları ortak olan, iç bölgeleri ayrı açılara komşu açılar denir.",
            "Ölçüleri toplamı 90° olan iki açıya tümler açılar denir: 35° ile 55° tümlerdir. Ölçüleri toplamı 180° olan iki açıya bütünler açılar denir: 120° ile 60° bütünlerdir.",
            "İki doğru kesiştiğinde dört açı oluşur. Karşılıklı açılara ters açılar denir ve ölçüleri eşittir. Yan yana olan iki açı ise bütünlerdir.",
            "Örneğin kesişen iki doğrunun oluşturduğu açılardan biri 70° ise karşısındaki ters açı da 70°, yanındaki açılar 180° − 70° = 110° olur."
          ],
          sorular: [
            S("Ölçüsü 28° olan açının tümleri kaç derecedir?", ["62°", "152°", "72°", "28°"], "90° − 28° = 62°."),
            S("Ölçüsü 115° olan açının bütünleri kaç derecedir?", ["65°", "25°", "75°", "245°"], "180° − 115° = 65°."),
            S("Kesişen iki doğrunun oluşturduğu açılardan biri 48° ise ters açısı kaç derecedir?", ["48°", "132°", "42°", "96°"], "Ters açıların ölçüleri eşittir."),
            S("İki açı hem komşu hem bütünler ise kolları ne oluşturur?", ["Doğru açı", "Dik açı", "Tam açı", "Dar açı"], "Toplamları 180° olduğu için dış kolları bir doğru oluşturur.")
          ]
        },
        {
          id: "m4k4", ad: "Çokgenler", video: "ZKkaF4960l8",
          ozet: ["Çokgen: doğru parçalarıyla oluşturulan kapalı şekil.", "Kenar sayısı kadar köşe ve iç açı vardır.", "Üçgen 3, dörtgen 4, beşgen 5, altıgen 6 kenarlı.", "Düzgün çokgen: bütün kenarları ve açıları eş.", "Köşegen: ardışık olmayan iki köşeyi birleştiren doğru parçası."],
          anlatim: [
            "Düzlemde ardışık olarak kesişen doğru parçalarının oluşturduğu kapalı şekillere çokgen denir. Daire ve çember çokgen değildir, çünkü kenarları doğru parçası değildir.",
            "Bir çokgenin kenar sayısı, köşe sayısı ve iç açı sayısı birbirine eşittir. Kenar sayısına göre adlandırılır: üçgen, dörtgen, beşgen, altıgen, sekizgen.",
            "Bütün kenar uzunlukları ve bütün iç açıları eşit olan çokgenlere düzgün çokgen denir: eşkenar üçgen ve kare düzgün çokgenlerdir.",
            "Çokgenin ardışık olmayan iki köşesini birleştiren doğru parçasına köşegen denir. Karenin 2, beşgenin 5 köşegeni vardır."
          ],
          sorular: [
            S("Hangisi bir çokgen değildir?", ["Daire", "Kare", "Beşgen", "Üçgen"], "Daire eğri bir çizgiyle sınırlıdır, çokgen değildir."),
            S("Bir altıgenin kaç köşesi vardır?", ["6", "5", "8", "12"], "Çokgenlerde kenar sayısı = köşe sayısı."),
            S("Bütün kenarları ve açıları eş olan dörtgen hangisidir?", ["Kare", "Dikdörtgen", "Yamuk", "Paralelkenar"], "Kare düzgün dörtgendir."),
            S("Bir dörtgenin kaç köşegeni vardır?", ["2", "4", "1", "3"], "Karşılıklı köşeleri birleştiren 2 köşegen vardır.")
          ]
        },
        {
          id: "m4k5", ad: "Üçgenler ve Çember", video: "A4wfqShSyUQ",
          ozet: ["Üçgenin iç açıları toplamı 180°'dir.", "Kenarlarına göre: eşkenar (3 kenar eş), ikizkenar (2 kenar eş), çeşitkenar.", "Açılarına göre: dar açılı, dik açılı, geniş açılı üçgen.", "Çember: merkeze eşit uzaklıktaki noktalar. Yarıçap r, çap = 2r.", "Pergelle çember çizilerek kenarları verilen üçgen inşa edilir."],
          anlatim: [
            "Üç kenarı ve üç açısı olan çokgenlere üçgen denir. Bir üçgenin iç açılarının ölçüleri toplamı her zaman 180°'dir. İki açısı 50° ve 70° olan üçgenin üçüncü açısı 180° − 120° = 60°'dir.",
            "Kenar uzunluklarına göre: Üç kenarı eş üçgen eşkenar, iki kenarı eş üçgen ikizkenar, kenarları farklı üçgen çeşitkenar üçgendir.",
            "Açılarına göre: Bütün açıları dar olan üçgen dar açılı, bir açısı dik olan dik açılı, bir açısı geniş olan geniş açılı üçgendir.",
            "Bir merkez noktaya eşit uzaklıktaki noktaların oluşturduğu kapalı eğriye çember denir. Merkez ile çember üzerindeki bir nokta arasındaki uzaklık yarıçap, merkezden geçen ve iki ucu çemberde olan doğru parçası çaptır. Çap yarıçapın 2 katıdır. Pergelle iki çember çizip kesişim noktasını kullanarak kenarları verilen üçgeni çizebiliriz."
          ],
          sorular: [
            S("Bir üçgenin iki iç açısı 45° ve 85°'dir. Üçüncü açı kaç derecedir?", ["50°", "60°", "40°", "130°"], "180° − (45° + 85°) = 50°."),
            S("Bir açısı 110° olan üçgen açılarına göre nasıl bir üçgendir?", ["Geniş açılı", "Dar açılı", "Dik açılı", "Eşkenar"], "Bir açısı geniş olduğu için geniş açılı üçgendir."),
            S("Yarıçapı 7 cm olan çemberin çapı kaç cm'dir?", ["14", "7", "21", "3,5"], "Çap = 2 × yarıçap = 14 cm."),
            S("Kenarları 5 cm, 5 cm ve 8 cm olan üçgen kenarlarına göre nasıl bir üçgendir?", ["İkizkenar", "Eşkenar", "Çeşitkenar", "Dik"], "İki kenarı eş olduğu için ikizkenar üçgendir.")
          ]
        }
      ]
    },
    {
      id: "m5", ad: "Geometrik Nicelikler: Çevre ve Alan",
      konular: [
        {
          id: "m5k1", ad: "Dikdörtgenin Çevre Uzunluğu", video: "E4NTUyDAoVg",
          ozet: ["Çevre: şeklin bütün kenar uzunluklarının toplamı.", "Dikdörtgen: Ç = 2 × (uzun kenar + kısa kenar)", "Kare: Ç = 4 × kenar", "Çevresi verilen dikdörtgende iki komşu kenarın toplamı = çevre ÷ 2"],
          anlatim: [
            "Bir şeklin etrafını bir kez dolaşmak için gidilen yolun uzunluğuna çevre uzunluğu denir. Çevre, bütün kenar uzunluklarının toplamıdır.",
            "Dikdörtgenin karşılıklı kenarları eşittir. Bu yüzden çevresi: Ç = a + b + a + b = 2 × (a + b). Kısa kenarı 4 cm, uzun kenarı 9 cm olan dikdörtgenin çevresi 2 × 13 = 26 cm'dir.",
            "Karenin dört kenarı eşittir: Ç = 4 × a. Kenarı 6 cm olan karenin çevresi 24 cm'dir.",
            "Çevre uzunluğu verilen dikdörtgenin kenarlarını bulmak için çevreyi 2'ye böleriz; bu iki komşu kenarın toplamıdır. Çevresi 20 cm olan dikdörtgende a + b = 10 cm olur; kenarlar 1-9, 2-8, 3-7, 4-6 ya da 5-5 (kare) olabilir."
          ],
          sorular: [
            S("Kenarları 12 cm ve 7 cm olan dikdörtgenin çevresi kaç cm'dir?", ["38", "19", "84", "26"], "2 × (12 + 7) = 38 cm."),
            S("Çevresi 36 cm olan karenin bir kenarı kaç cm'dir?", ["9", "6", "12", "18"], "36 ÷ 4 = 9 cm."),
            S("Çevresi 30 cm olan bir dikdörtgenin kısa kenarı 6 cm ise uzun kenarı kaç cm'dir?", ["9", "24", "12", "15"], "Komşu kenarlar toplamı 15; 15 − 6 = 9 cm.")
          ]
        },
        {
          id: "m5k2", ad: "Dikdörtgenin Alanı", video: "8x8W4RY0R2I",
          ozet: ["Alan: bir yüzeyin kapladığı yer, birim karelerle ölçülür.", "Dikdörtgenin alanı = uzun kenar × kısa kenar", "Karenin alanı = kenar × kenar", "Birimler: cm², m²", "Aynı alana sahip farklı dikdörtgenler olabilir (24 = 4×6 = 3×8 = 2×12)."],
          anlatim: [
            "Bir yüzeyin kapladığı büyüklüğe alan denir. Alanı ölçmek için kenarı 1 birim olan birim kareler kullanılır. Kenarı 1 cm olan karenin alanı 1 cm² (santimetrekare) dir.",
            "Bir dikdörtgenin içine kaç birim kare sığdığını saymak yerine satır ve sütun sayısını çarparız. Bu yüzden dikdörtgenin alanı ardışık iki kenarının çarpımıdır: A = a × b.",
            "Karenin bütün kenarları eşit olduğundan alanı A = a × a'dır. Kenarı 5 m olan kare şeklindeki bir odanın alanı 25 m²'dir.",
            "Alanları eşit olan dikdörtgenlerin çevreleri farklı olabilir: 4 × 6 ve 2 × 12 dikdörtgenlerinin alanları 24 birim kare, çevreleri ise 20 ve 28 birimdir."
          ],
          sorular: [
            S("Kenarları 15 m ve 8 m olan dikdörtgen şeklindeki bahçenin alanı kaç m²'dir?", ["120", "46", "23", "100"], "15 × 8 = 120 m²."),
            S("Alanı 49 cm² olan karenin bir kenarı kaç cm'dir?", ["7", "49", "12", "24,5"], "7 × 7 = 49."),
            S("Alanı 36 cm² olan dikdörtgenin kenarları hangisi olamaz?", ["5 cm ve 7 cm", "4 cm ve 9 cm", "3 cm ve 12 cm", "6 cm ve 6 cm"], "5 × 7 = 35, 36 değil.")
          ]
        },
        {
          id: "m5k3", ad: "Çevre ve Alan Problemleri", video: "5I3WnnSDwvQ",
          ozet: ["Çit, çerçeve, kenar süsü → çevre", "Halı, boya, fayans, ekim → alan", "Önce şeklin kenar uzunluklarını bul, sonra çevre/alan bağıntısını kullan.", "Alan verildiğinde çevre, çevre verildiğinde alan farklı değerler alabilir."],
          anlatim: [
            "Gerçek hayat problemlerinde önce sorunun çevreyi mi alanı mı istediğine karar veririz. Bir bahçenin etrafına çit çekmek çevre, bahçeye çim ekmek alan ile ilgilidir.",
            "Örnek: Kenarları 20 m ve 12 m olan bir bahçenin etrafına 3 sıra tel çekilecek. Bir sıra tel çevre kadar: 2 × 32 = 64 m. Üç sıra: 192 m tel gerekir.",
            "Örnek: Kenarları 5 m ve 4 m olan bir odanın tabanına 1 m²'si 150 TL olan halı döşenecek. Alan: 20 m², maliyet: 20 × 150 = 3 000 TL.",
            "Bazı problemlerde alan ve çevre birlikte verilir. Alanı 24 m² ve kenar uzunlukları doğal sayı olan bir dikdörtgenin en küçük çevresi 4 × 6 için 20 m, en büyük çevresi 1 × 24 için 50 m'dir."
          ],
          sorular: [
            S("Kenarları 25 m ve 15 m olan bir tarlanın etrafı 2 sıra tel ile çevrilecek. Kaç metre tel gerekir?", ["160", "80", "750", "120"], "Çevre: 2 × 40 = 80 m; 2 sıra: 160 m."),
            S("Kenarları 6 m ve 4 m olan bir odanın tabanı, metrekaresi 200 TL olan parkeyle kaplanacak. Maliyet kaç TL'dir?", ["4 800", "4 000", "2 000", "5 200"], "Alan 24 m²; 24 × 200 = 4 800 TL."),
            S("Kenarları doğal sayı ve alanı 16 cm² olan dikdörtgenlerden çevresi en küçük olanın çevresi kaç cm'dir?", ["16", "20", "34", "8"], "4 × 4 karede çevre 16 cm ile en küçüktür.")
          ]
        }
      ]
    },
    {
      id: "m6", ad: "İstatistiksel Araştırma Süreci",
      konular: [
        {
          id: "m6k1", ad: "Veri Toplama ve Grafikler", video: "5w1PZiNPab0",
          ozet: ["Araştırma: soru sor → veri topla → düzenle → grafikle göster → yorumla.", "Kategorik veri: sayı değil, grup/kategori (en sevilen meyve, renk).", "Sıklık (frekans): bir kategorinin kaç kez tekrarlandığı.", "Sıklık tablosu, sütun grafiği, nokta grafiği, daire grafiği.", "Mod: en çok tekrar eden kategori."],
          anlatim: [
            "İstatistiksel araştırma bir soruyla başlar: 'Sınıfımızdaki öğrenciler en çok hangi sporu seviyor?' Sonra anket, gözlem ya da deneyle veri toplanır.",
            "Cevapları sayı olmayan, kategorilerden oluşan verilere kategorik veri denir: futbol, basketbol, voleybol gibi. Her kategorinin kaç kez seçildiğine sıklık denir. Veriler sıklık tablosunda düzenlenir.",
            "Veriler sütun grafiği (her kategori için yüksekliği sıklığa eşit sütun), nokta grafiği (her veri için bir nokta) ya da daire grafiği (bütünün dilimlere ayrılması) ile gösterilebilir.",
            "Grafiği yorumlarken en çok ve en az tercih edilen kategoriyi, kategoriler arasındaki farkları ve toplam veri sayısını inceleriz. En çok tekrar eden kategoriye mod (tepe değer) denir."
          ],
          sorular: [
            S("Hangisi kategorik veridir?", ["En sevilen renk", "Boy uzunluğu", "Yaş", "Kilo"], "Renkler sayı değil kategoridir."),
            S("Bir ankette Elma 8, Muz 12, Çilek 5 kişi tarafından seçilmiştir. Ankete kaç kişi katılmıştır?", ["25", "12", "20", "13"], "8 + 12 + 5 = 25."),
            S("Bir veri setinde en çok tekrar eden kategoriye ne denir?", ["Mod (tepe değer)", "Açıklık", "Sıklık tablosu", "Ortalama"], "En çok tekrar eden değer moddur."),
            S("Bir bütünün parçalarını dilimlerle gösteren grafik hangisidir?", ["Daire grafiği", "Sütun grafiği", "Nokta grafiği", "Çizgi grafiği"], "Daire grafiği bütünü dilimlere ayırır.")
          ]
        }
      ]
    },
    {
      id: "m7", ad: "Veriden Olasılığa",
      konular: [
        {
          id: "m7k1", ad: "Olasılık: İmkânsız, Olası, Kesin", video: "ZAfOeaxkpHI",
          ozet: ["Olasılık: bir olayın gerçekleşme şansı.", "İmkânsız olay: olasılığı 0 (Zarda 7 gelmesi).", "Kesin olay: olasılığı 1 (Zarda 7'den küçük sayı gelmesi).", "Olasılık değeri 0 ile 1 arasındadır.", "Az olasılıklı – eşit olasılıklı – çok olasılıklı olaylar."],
          anlatim: [
            "Bir olayın olma şansını gösteren sayıya olasılık denir. Olasılık değeri her zaman 0 ile 1 arasındadır (0 ve 1 dâhil). Bu aralığa olasılık spektrumu (yelpazesi) denir.",
            "Hiçbir zaman gerçekleşemeyecek olaylara imkânsız olay denir; olasılığı 0'dır. Örneğin bir zar atıldığında 8 gelmesi imkânsızdır. Mutlaka gerçekleşecek olaylara kesin olay denir; olasılığı 1'dir. Zar atıldığında 1 ile 6 arasında bir sayı gelmesi kesindir.",
            "Arada kalan olaylar az olasılıklı ya da çok olasılıklı olabilir. İçinde 9 kırmızı, 1 mavi bilye olan torbadan kırmızı bilye çekmek çok olasılıklı, mavi bilye çekmek az olasılıklıdır.",
            "Yazı-tura atıldığında yazı ve tura gelme olasılıkları eşittir. Eşit olasılıklı olaylarda sonuçların şansı aynıdır."
          ],
          sorular: [
            S("Bir zar atıldığında 7 gelmesi nasıl bir olaydır?", ["İmkânsız", "Kesin", "Çok olasılıklı", "Eşit olasılıklı"], "Zarda 7 yoktur; olasılık 0."),
            S("İçinde yalnızca sarı toplar bulunan bir kutudan çekilen topun sarı olması nasıl bir olaydır?", ["Kesin", "İmkânsız", "Az olasılıklı", "Eşit olasılıklı"], "Kutuda sadece sarı top var; olasılık 1."),
            S("Torbada 3 kırmızı, 12 yeşil bilye var. Hangisi doğrudur?", ["Yeşil bilye çekme olasılığı daha fazladır", "Kırmızı çekme olasılığı daha fazladır", "İki renk eşit olasılıklıdır", "Kırmızı çekmek imkânsızdır"], "Yeşil bilyeler daha çok olduğu için yeşil çekmek daha olasıdır."),
            S("Hangisi bir olasılık değeri olamaz?", ["1,5", "0", "0,5", "1"], "Olasılık 0 ile 1 arasındadır.")
          ]
        }
      ]
    }
  ]
};
})();
