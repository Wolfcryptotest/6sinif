window.ICERIK = window.ICERIK || {};
// 6. sınıf Matematik - Maarif Modeli (2025-2026 ve sonrası) tema sırası
window.ICERIK.matematik = {
  ad: "Matematik", ikon: "➗", renk: "#4f7cff",
  uniteler: [
    {
      id: "t1", ad: "Sayılar ve Nicelikler (1)",
      konular: [
        {
          id: "t1k1", ad: "Çarpanlar ve Katlar",
          ozet: ["Çarpan (bölen): sayıyı kalansız böler. 12 → 1, 2, 3, 4, 6, 12", "Kat: sayının 1, 2, 3, ... ile çarpımı. 4 → 4, 8, 12, 16...", "1 her sayının çarpanıdır.", "Her sayı kendisinin hem çarpanı hem katıdır.", "Çarpanlar sınırlıdır, katlar sonsuza kadar gider."],
          anlatim: [
            "Bir sayıyı kalansız bölen doğal sayılara o sayının çarpanları (bölenleri) denir. 12'nin çarpanları: 1, 2, 3, 4, 6, 12.",
            "Çarpanları bulmak için sayıyı iki sayının çarpımı olarak yazarız: 12 = 1 × 12 = 2 × 6 = 3 × 4.",
            "Bir sayının katları, o sayının 1, 2, 3, ... ile çarpımıdır. 4'ün katları: 4, 8, 12, 16, 20, ...",
            "Her sayı kendisinin hem çarpanı hem katıdır. 1 her sayının çarpanıdır, 0 ise her sayının katıdır."
          ],
          video: "-oPEzNMjdAU",
          sorular: [
            { soru: "18'in kaç tane çarpanı vardır?", secenekler: ["4", "5", "6", "8"], dogru: 2, cozum: "18'in çarpanları: 1, 2, 3, 6, 9, 18. Toplam 6 tane." },
            { soru: "Aşağıdakilerden hangisi 7'nin katı değildir?", secenekler: ["21", "35", "48", "56"], dogru: 2, cozum: "21 = 7×3, 35 = 7×5, 56 = 7×8. 48 ise 7'ye kalansız bölünmez." },
            { soru: "Hangisi 24'ün çarpanlarından biri değildir?", secenekler: ["9", "6", "8", "12"], dogru: 0, cozum: "24'ün çarpanları: 1, 2, 3, 4, 6, 8, 12, 24. 9 bu listede yok." },
            { soru: "Bir sınıftaki 30 öğrenci eşit sayıda öğrenciden oluşan gruplara ayrılacak. Bir gruptaki öğrenci sayısı hangisi olamaz?", secenekler: ["5", "8", "6", "10"], dogru: 1, cozum: "Gruptaki öğrenci sayısı 30'un çarpanı olmalı. 30 ÷ 8 kalansız bölünmez." },
            { soru: "6'nın katı olan iki basamaklı en büyük sayı kaçtır?", secenekler: ["90", "96", "98", "99"], dogru: 1, cozum: "6 × 16 = 96. Bir sonraki kat 102, üç basamaklıdır." }
          ]
        },
        {
          id: "t1k2", ad: "Kalansız Bölünebilme",
          ozet: ["2 → son rakam çift", "3 → rakamlar toplamı 3'ün katı", "4 → son iki basamak 4'ün katı", "5 → son rakam 0 veya 5", "6 → hem 2'ye hem 3'e bölünür", "9 → rakamlar toplamı 9'un katı", "10 → son rakam 0"],
          anlatim: [
            "Bir sayıyı başka bir sayıya böldüğümüzde kalan 0 ise 'kalansız bölünür' deriz. Bölme yapmadan anlamak için kuralları kullanırız.",
            "2 ile: birler basamağı çift (0, 2, 4, 6, 8) ise. 5 ile: birler basamağı 0 veya 5 ise. 10 ile: birler basamağı 0 ise.",
            "3 ile: rakamlarının toplamı 3'ün katı ise. 9 ile: rakamlarının toplamı 9'un katı ise. Örnek: 468 → 4 + 6 + 8 = 18, hem 3'e hem 9'a bölünür.",
            "4 ile: son iki basamağın oluşturduğu sayı 4'ün katı ise (316 → 16, 4'e bölünür).",
            "6 ile: sayı hem 2'ye hem 3'e bölünüyorsa."
          ],
          video: "uC_i70ou6ds",
          sorular: [
            { soru: "Hangi sayı 3 ile kalansız bölünür?", secenekler: ["124", "215", "342", "401"], dogru: 2, cozum: "342 → 3 + 4 + 2 = 9, 9 da 3'ün katı. Diğerlerinin rakamları toplamı 7, 8 ve 5'tir." },
            { soru: "Hangi sayı 9 ile kalansız bölünür?", secenekler: ["458", "729", "815", "1003"], dogru: 1, cozum: "729 → 7 + 2 + 9 = 18, 18 de 9'un katı." },
            { soru: "Hangi sayı hem 2 hem 5 ile kalansız bölünür?", secenekler: ["125", "232", "340", "455"], dogru: 2, cozum: "Hem 2'ye hem 5'e bölünen sayının birler basamağı 0 olmalı: 340." },
            { soru: "5A2 üç basamaklı sayısı 3 ile kalansız bölünüyor. A yerine hangisi gelebilir?", secenekler: ["5", "1", "3", "7"], dogru: 0, cozum: "5 + A + 2 = 7 + A, 3'ün katı olmalı. A = 5 için 12 olur, 3'ün katıdır." },
            { soru: "Hangi sayı 4 ile kalansız bölünür?", secenekler: ["1318", "2724", "3150", "5106"], dogru: 1, cozum: "Son iki basamağa bak: 18, 24, 50, 06. Sadece 24, 4'ün katıdır." },
            { soru: "Hangi sayı 6 ile kalansız bölünür?", secenekler: ["234", "152", "345", "410"], dogru: 0, cozum: "234 çift (2'ye bölünür) ve 2 + 3 + 4 = 9 (3'e bölünür). O yüzden 6'ya da bölünür." }
          ]
        },
        {
          id: "t1k3", ad: "Asal Sayılar",
          ozet: ["Asal sayı: yalnızca 1'e ve kendisine bölünür.", "İlk asallar: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29", "1 asal değildir. 2, çift olan tek asal sayıdır.", "Asal çarpanlara ayırma: 60 = 2 × 2 × 3 × 5", "Asal çarpanlar listesinde her biri bir kez yazılır: 2, 3, 5"],
          anlatim: [
            "Yalnızca iki çarpanı (1 ve kendisi) olan sayılara asal sayı denir. İlk asal sayılar: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.",
            "1 asal sayı değildir, çünkü tek bir çarpanı vardır. 2, çift olan tek asal sayıdır.",
            "Asal olmayan bir sayıyı asal sayıların çarpımı olarak yazabiliriz: 60 = 2 × 2 × 3 × 5. Buna asal çarpanlara ayırma denir. Çarpan ağacı ya da bölen listesi kullanılır.",
            "60'ın asal çarpanları 2, 3 ve 5'tir. Tekrar eden çarpanlar listede bir kez yazılır."
          ],
          video: "G74dS4-n4lU",
          sorular: [
            { soru: "Hangisi asal sayıdır?", secenekler: ["21", "27", "29", "33"], dogru: 2, cozum: "29'un sadece 1 ve 29 çarpanı var. 21 = 3×7, 27 = 3×9, 33 = 3×11." },
            { soru: "1 ile 20 arasında kaç asal sayı vardır?", secenekler: ["8", "6", "7", "9"], dogru: 0, cozum: "2, 3, 5, 7, 11, 13, 17, 19 → 8 tane." },
            { soru: "84 sayısının asal çarpanları hangileridir?", secenekler: ["2, 4, 7", "2, 3, 7", "3, 4, 7", "2, 6, 7"], dogru: 1, cozum: "84 = 2 × 2 × 3 × 7. Asal çarpanlar 2, 3 ve 7'dir. 4 ve 6 asal değildir." },
            { soru: "Asal çarpanlarına ayrılmış hali 2 × 3 × 3 × 5 olan sayı kaçtır?", secenekler: ["60", "75", "90", "135"], dogru: 2, cozum: "2 × 3 = 6, 6 × 3 = 18, 18 × 5 = 90." },
            { soru: "Hangisi doğrudur?", secenekler: ["1 bir asal sayıdır.", "Bütün tek sayılar asaldır.", "9 bir asal sayıdır.", "2, çift olan tek asal sayıdır."], dogru: 3, cozum: "1 asal değildir. 9 tektir ama asal değildir (3 × 3). Çift olan tek asal sayı 2'dir." }
          ]
        },
        {
          id: "t1k4", ad: "Ortak Bölen ve Ortak Kat",
          ozet: ["Ortak bölen: iki sayıyı da kalansız böler.", "Ortak kat: iki sayının da katıdır.", "\"Eşit ve en büyük parça\" → en büyük ortak bölen", "\"Tekrar ne zaman birlikte?\" → en küçük ortak kat", "12 ve 18 → en büyük ortak bölen 6", "4 ve 6 → en küçük ortak kat 12"],
          anlatim: [
            "İki sayının ikisini de kalansız bölen sayılara ortak bölen denir. 12 ve 18'in ortak bölenleri: 1, 2, 3, 6. En büyüğü 6'dır.",
            "İki sayının ikisinin de katı olan sayılara ortak kat denir. 4 ve 6'nın ortak katları: 12, 24, 36, ... En küçüğü 12'dir.",
            "İpucu: Bir şeyi artmayacak şekilde eşit ve en büyük parçalara ayırıyorsak en büyük ortak bölen; iki olayın tekrar aynı anda olacağı zamanı arıyorsak en küçük ortak kat kullanılır."
          ],
          video: "ESplqiLZnmM",
          sorular: [
            { soru: "16 ve 24 sayılarının en büyük ortak böleni kaçtır?", secenekler: ["4", "6", "8", "12"], dogru: 2, cozum: "16'nın bölenleri: 1, 2, 4, 8, 16. 24'ün bölenleri: 1, 2, 3, 4, 6, 8, 12, 24. Ortak olanların en büyüğü 8." },
            { soru: "6 ve 8 sayılarının en küçük ortak katı kaçtır?", secenekler: ["12", "24", "48", "14"], dogru: 1, cozum: "6'nın katları: 6, 12, 18, 24... 8'in katları: 8, 16, 24... İlk ortak kat 24." },
            { soru: "30 cm ve 45 cm uzunluğundaki iki kurdele, hiç artmayacak şekilde eşit ve en uzun parçalara kesilecek. Bir parça kaç cm olur?", secenekler: ["15", "5", "10", "30"], dogru: 0, cozum: "30 ve 45'in en büyük ortak böleni 15'tir." },
            { soru: "Ali 4 günde bir, Ece 6 günde bir kütüphaneye gidiyor. Bugün birlikte gittilerse en az kaç gün sonra yine birlikte giderler?", secenekler: ["10", "12", "24", "8"], dogru: 1, cozum: "4 ve 6'nın en küçük ortak katı 12'dir." },
            { soru: "Hangisi 9 ve 12'nin ortak katıdır?", secenekler: ["24", "27", "36", "48"], dogru: 2, cozum: "36 ÷ 9 = 4 ve 36 ÷ 12 = 3. Diğerleri iki sayıya birden bölünmez." },
            { soru: "18 ve 27'nin kaç tane ortak böleni vardır?", secenekler: ["4", "2", "6", "3"], dogru: 3, cozum: "Ortak bölenler: 1, 3, 9 → 3 tane." }
          ]
        }
      ]
    },
    {
      id: "t2", ad: "Veriden Olasılığa",
      konular: [
        {
          id: "t2k1", ad: "Gözleme Dayalı Olasılık Tahmini",
          ozet: ["İmkânsız → Az olası → Eşit şanslı → Çok olası → Kesin", "Tahmini olasılık = olayın olma sayısı ÷ deneme sayısı", "Deneme sayısı arttıkça tahmin gerçeğe yaklaşır.", "Zarın 6 yüzü var: 3 tek, 3 çift sayı."],
          anlatim: [
            "Bir deneyde ortaya çıkabilecek her sonuca çıktı denir. İlgilendiğimiz sonuçlara olay deriz. Örneğin zar atınca 'çift sayı gelmesi' bir olaydır.",
            "Bir olay kesin, çok olası, eşit şanslı, az olası veya imkânsız olabilir.",
            "Bir deneyi çok kez tekrarlayıp sonuçları kaydedersek olasılığı tahmin edebiliriz: Tahmin = olayın gerçekleşme sayısı ÷ toplam deneme sayısı.",
            "Örnek: 50 atışta 23 kez yazı geldiyse yazı gelme olasılığını 23/50 olarak tahmin ederiz. Deneme sayısı arttıkça tahmin gerçeğe yaklaşır."
          ],
          video: "o1A6iJuzJ48",
          sorular: [
            { soru: "İçinde sadece kırmızı top olan bir torbadan top çekiliyor. Mavi top çekme olayı nasıldır?", secenekler: ["Kesin", "İmkânsız", "Eşit şanslı", "Çok olası"], dogru: 1, cozum: "Torbada mavi top yok, bu yüzden mavi top çekmek imkânsızdır." },
            { soru: "Bir zar atıldığında 6 veya 6'dan küçük bir sayı gelmesi nasıl bir olaydır?", secenekler: ["İmkânsız", "Az olası", "Kesin", "Eşit şanslı"], dogru: 2, cozum: "Zarda 1'den 6'ya kadar sayılar var, hepsi 6 veya 6'dan küçük. Olay kesindir." },
            { soru: "Bir oyuncu 40 atış yapıp 30'unda basket atıyor. Buna göre basket atma olasılığının tahmini nedir?", secenekler: ["1/4", "3/4", "1/3", "3/10"], dogru: 1, cozum: "30 ÷ 40 = 30/40 = 3/4." },
            { soru: "Bir madeni para 100 kez atıldı ve 48 kez tura geldi. Yazı gelme olasılığının tahmini nedir?", secenekler: ["48/100", "1/48", "52/100", "50/48"], dogru: 2, cozum: "Yazı 100 − 48 = 52 kez geldi. Tahmin 52/100." },
            { soru: "Torbada 3 kırmızı ve 1 mavi bilye var. Rastgele çekilen bilyenin kırmızı olması nasıl bir olaydır?", secenekler: ["İmkânsız", "Az olası", "Eşit şanslı", "Çok olası"], dogru: 3, cozum: "4 bilyenin 3'ü kırmızı, yani kırmızı gelmesi çok olasıdır." }
          ]
        }
      ]
    },
    {
      id: "t3", ad: "Sayılar ve Nicelikler (2)",
      konular: [
        {
          id: "t3k1", ad: "Ondalık Gösterimde Basamak Değeri",
          ozet: ["Virgülün solu tam kısım, sağı ondalık kısım.", "Onda birler (0,1) · Yüzde birler (0,01) · Binde birler (0,001)", "34,256 → 5'in basamak değeri 0,05", "Sona eklenen sıfır değeri değiştirmez: 3,6 = 3,60"],
          anlatim: [
            "Ondalık gösterimde virgülün solu tam kısım, sağı ondalık kısımdır. 34,256 → 34 tam 256 binde.",
            "Virgülün sağındaki basamaklar sırasıyla: onda birler, yüzde birler, binde birler.",
            "34,256 sayısında 2'nin basamak değeri 0,2; 5'in 0,05; 6'nın 0,006'dır.",
            "Ondalık gösterimler çözümlenerek de yazılabilir: 4,37 = 4 + 0,3 + 0,07."
          ],
          video: "7CB4uArvjJE",
          sorular: [
            { soru: "52,748 sayısında 4 rakamının basamak değeri kaçtır?", secenekler: ["4", "0,4", "0,04", "0,004"], dogru: 2, cozum: "4, yüzde birler basamağında. Basamak değeri 0,04." },
            { soru: "6,305 sayısının binde birler basamağındaki rakam kaçtır?", secenekler: ["6", "3", "0", "5"], dogru: 3, cozum: "Virgülden sonra: 3 onda birler, 0 yüzde birler, 5 binde birler." },
            { soru: "7 + 0,2 + 0,009 şeklinde çözümlenen sayı hangisidir?", secenekler: ["7,29", "7,209", "7,029", "7,2009"], dogru: 1, cozum: "Onda birler 2, yüzde birler 0, binde birler 9 → 7,209." },
            { soru: "'On iki tam yüzde beş' sayısı hangisidir?", secenekler: ["12,5", "12,005", "12,05", "1,205"], dogru: 2, cozum: "Yüzde beş = 5/100 = 0,05. Sayı 12,05." },
            { soru: "3,6 ve 3,60 için hangisi doğrudur?", secenekler: ["3,6 daha büyüktür", "3,60 daha büyüktür", "İkisi eşittir", "Karşılaştırılamaz"], dogru: 2, cozum: "Ondalık kısmın sonuna eklenen 0 değeri değiştirmez: 3,6 = 3,60." }
          ]
        },
        {
          id: "t3k2", ad: "Ondalık Gösterimlerde Yuvarlama",
          ozet: ["Yuvarlanacak basamağın sağındaki rakama bak.", "5, 6, 7, 8, 9 → bir artır", "0, 1, 2, 3, 4 → aynı bırak", "8,467 → onda birlere 8,5", "8,467 → yüzde birlere 8,47", "8,467 → en yakın tam sayıya 8"],
          anlatim: [
            "Yuvarlarken istenen basamağın hemen sağındaki rakama bakarız.",
            "Bu rakam 5 veya daha büyükse istenen basamaktaki rakam 1 artar. 5'ten küçükse aynı kalır. Sağdaki basamaklar atılır.",
            "Örnek: 8,467 onda birlere yuvarlanınca 8,5 olur (sağdaki rakam 6). Yüzde birlere yuvarlanınca 8,47 olur. En yakın tam sayıya yuvarlanınca 8 olur."
          ],
          video: "7CB4uArvjJE",
          sorular: [
            { soru: "4,73 sayısının onda birlere yuvarlanmış hali hangisidir?", secenekler: ["4,8", "4,7", "5", "4,73"], dogru: 1, cozum: "Onda birler basamağı 7, sağındaki 3 < 5. 7 aynı kalır: 4,7." },
            { soru: "12,586 yüzde birler basamağına yuvarlanırsa hangisi elde edilir?", secenekler: ["12,58", "12,6", "12,59", "13"], dogru: 2, cozum: "Yüzde birler basamağı 8, sağındaki 6 ≥ 5. 8 bir artar: 12,59." },
            { soru: "9,49 sayısının en yakın tam sayıya yuvarlanmış hali hangisidir?", secenekler: ["9", "10", "9,5", "9,4"], dogru: 0, cozum: "Tam kısımdan sonraki rakam 4 < 5. Sonuç 9." },
            { soru: "Bir ürün 24,95 TL. Fiyat en yakın tam sayıya yuvarlanırsa kaç TL olur?", secenekler: ["24", "24,9", "25", "26"], dogru: 2, cozum: "Virgülden sonraki ilk rakam 9 ≥ 5. 24 bir artar: 25 TL." },
            { soru: "Onda birlere yuvarlandığında 3,5 olan sayı hangisidir?", secenekler: ["3,44", "3,56", "3,39", "3,46"], dogru: 3, cozum: "3,46 → sağdaki 6 ≥ 5, 4 bir artar: 3,5. Diğerleri 3,4 veya 3,6 olur." }
          ]
        },
        {
          id: "t3k3", ad: "Kesir ve Bölme İlişkisi",
          ozet: ["Kesir bir bölmedir: a/b = a ÷ b", "Pay → bölünen, payda → bölen", "3/4 = 3 ÷ 4 = 0,75", "7/10 = 0,7 · 23/100 = 0,23", "Paylaştırma problemi: miktar ÷ kişi sayısı"],
          anlatim: [
            "Her kesir bir bölme işlemidir: pay bölünen, payda bölendir. 3/4 = 3 ÷ 4.",
            "Örneğin 3 pizza 4 kişiye eşit paylaştırılırsa her kişiye 3/4 pizza düşer.",
            "Bölme işlemini yaparak kesri ondalık gösterime çevirebiliriz: 3 ÷ 4 = 0,75.",
            "Paydası 10, 100 veya 1000 olan kesirler doğrudan ondalık yazılır: 7/10 = 0,7; 23/100 = 0,23."
          ],
          video: "3EhjapDdojM",
          sorular: [
            { soru: "5 ekmek 8 kişiye eşit paylaştırılırsa kişi başına ne kadar ekmek düşer?", secenekler: ["8/5", "5/8", "3/8", "1/8"], dogru: 1, cozum: "5 ÷ 8 = 5/8 ekmek." },
            { soru: "3/5 kesrinin ondalık gösterimi hangisidir?", secenekler: ["0,35", "0,53", "0,6", "3,5"], dogru: 2, cozum: "3/5 = 6/10 = 0,6." },
            { soru: "7 ÷ 2 işleminin sonucu hangi tam sayılı kesre eşittir?", secenekler: ["3 tam 1/2", "2 tam 1/7", "3 tam 1/7", "7 tam 1/2"], dogru: 0, cozum: "7 ÷ 2 = 3, kalan 1. Sonuç 3 tam 1/2." },
            { soru: "0,45 sayısının kesir gösterimi hangisidir?", secenekler: ["45/100", "4/5", "45/10", "45/1000"], dogru: 0, cozum: "0,45 = kırk beş yüzde = 45/100." },
            { soru: "12 litre su 5 şişeye eşit dağıtılıyor. Her şişeye kaç litre su konur?", secenekler: ["2,2", "2,5", "2,6", "2,4"], dogru: 3, cozum: "12 ÷ 5 = 12/5 = 24/10 = 2,4 litre." }
          ]
        },
        {
          id: "t3k4", ad: "Uzunluk Ölçme Birimleri",
          ozet: ["1 km = 1000 m", "1 m = 10 dm = 100 cm = 1000 mm", "1 cm = 10 mm", "Büyükten küçüğe → çarp", "Küçükten büyüğe → böl"],
          anlatim: [
            "Uzunluk ölçü birimleri: kilometre (km), metre (m), desimetre (dm), santimetre (cm), milimetre (mm).",
            "1 km = 1000 m; 1 m = 10 dm = 100 cm = 1000 mm; 1 cm = 10 mm.",
            "Büyük birimden küçük birime geçerken çarparız, küçükten büyüğe geçerken böleriz. 2,5 m = 250 cm; 3400 m = 3,4 km."
          ],
          video: "rUe2YsBkUEg",
          sorular: [
            { soru: "4,2 km kaç metredir?", secenekler: ["420", "4200", "42", "42000"], dogru: 1, cozum: "4,2 × 1000 = 4200 m." },
            { soru: "350 cm kaç metredir?", secenekler: ["35", "0,35", "3,5", "350"], dogru: 2, cozum: "350 ÷ 100 = 3,5 m." },
            { soru: "Hangisi en uzundur?", secenekler: ["1,2 km", "1150 m", "125 000 cm", "1 190 000 mm"], dogru: 2, cozum: "Hepsini metreye çevir: 1200 m, 1150 m, 1250 m, 1190 m. En uzunu 125 000 cm." },
            { soru: "Elif okula her gün 850 m yürüyor. Gidiş-dönüş 5 günde kaç km yürür?", secenekler: ["4,25", "85", "17", "8,5"], dogru: 3, cozum: "Bir gün: 850 × 2 = 1700 m. 5 gün: 8500 m = 8,5 km." },
            { soru: "7 cm 4 mm kaç mm eder?", secenekler: ["74", "704", "47", "740"], dogru: 0, cozum: "7 cm = 70 mm. 70 + 4 = 74 mm." }
          ]
        }
      ]
    },
    {
      id: "t4", ad: "İstatistiksel Araştırma Süreci",
      konular: [
        {
          id: "t4k1", ad: "Araştırma Sorusu ve Veri Toplama",
          ozet: ["Süreç: Soru → Plan → Veri toplama → Gösterme → Yorumlama", "Kategorik veri: renk, meyve, şehir, takım...", "Sayısal veri: boy, yaş, kardeş sayısı...", "Anket soruları kısa, net ve yönlendirmesiz olmalı."],
          anlatim: [
            "İstatistiksel araştırma bir soruyla başlar. İyi bir araştırma sorusu açık ve nettir, veri toplanarak cevaplanabilir.",
            "Veriler iki türlüdür: Kategorik veri (sevilen renk, ulaşım türü gibi) ve sayısal veri (boy, okunan kitap sayısı gibi).",
            "Araştırmayı planlarken kime soracağımızı, veriyi nasıl toplayacağımızı (anket, gözlem, ölçme) ve sonuçları nasıl göstereceğimizi belirleriz.",
            "Anket soruları kısa, anlaşılır ve yönlendirici olmayan sorular olmalıdır."
          ],
          video: "SMHVkCvnlCo",
          sorular: [
            { soru: "Hangisi sayısal veri toplamayı gerektiren bir araştırma sorusudur?", secenekler: ["Sınıftaki öğrencilerin en sevdiği meyve hangisidir?", "Öğrenciler okula hangi taşıtla geliyor?", "Öğrenciler bir haftada kaç kitap okuyor?", "Öğrenciler hangi takımı tutuyor?"], dogru: 2, cozum: "'Kaç kitap' sorusunun cevabı bir sayıdır. Diğerlerinin cevabı bir kategoridir." },
            { soru: "Hangisi kategorik veridir?", secenekler: ["Boy uzunluğu", "Göz rengi", "Ayakkabı numarası", "Yaş"], dogru: 1, cozum: "Göz rengi sayı değil, bir kategoridir (kahverengi, mavi, yeşil...)." },
            { soru: "Hangi anket sorusu yönlendiricidir?", secenekler: ["En sevdiğin spor hangisi?", "Haftada kaç saat spor yaparsın?", "Herkesin sevdiği futbolu sen de seviyor musun?", "Hangi gün spor yaparsın?"], dogru: 2, cozum: "'Herkesin sevdiği' ifadesi cevaplayanı belli bir cevaba yönlendirir." },
            { soru: "'Okulumuzdaki öğrenciler günde kaç saat uyuyor?' sorusu için en uygun veri toplama yolu hangisidir?", secenekler: ["Sadece bir arkadaşa sormak", "Öğrencilere anket uygulamak", "İnternetten bir resim bulmak", "Öğretmenin tahmin etmesi"], dogru: 1, cozum: "Öğrencilerin kendisinden anketle veri toplamak en güvenilir yoldur." }
          ]
        },
        {
          id: "t4k2", ad: "Verileri Gösterme ve Özetleme",
          ozet: ["Ortalama = toplam ÷ veri sayısı", "Tepe değer: en çok tekrar eden veri", "Ortanca: sıralayınca ortadaki veri", "Açıklık = en büyük − en küçük", "Toplam = ortalama × veri sayısı"],
          anlatim: [
            "Toplanan veriler sıklık tablosu, sütun grafiği veya nokta grafiğiyle gösterilebilir.",
            "Aritmetik ortalama: Tüm verilerin toplamı ÷ veri sayısı. 4, 6, 8 → (4 + 6 + 8) ÷ 3 = 6.",
            "Tepe değer (mod): En çok tekrar eden veri. Ortanca (medyan): Veriler küçükten büyüğe sıralandığında ortada kalan değer.",
            "Açıklık: En büyük veri − en küçük veri. Verilerin ne kadar dağınık olduğunu gösterir."
          ],
          video: "N0ZOgw81TTY",
          sorular: [
            { soru: "5, 7, 9, 11 verilerinin aritmetik ortalaması kaçtır?", secenekler: ["7", "8", "9", "32"], dogru: 1, cozum: "Toplam: 5 + 7 + 9 + 11 = 32. 32 ÷ 4 = 8." },
            { soru: "3, 5, 5, 6, 8, 5, 2 verilerinin tepe değeri kaçtır?", secenekler: ["3", "6", "5", "8"], dogru: 2, cozum: "5 sayısı üç kez tekrar ediyor, en çok tekrar eden veri o." },
            { soru: "12, 4, 9, 15, 7 verilerinin ortancası kaçtır?", secenekler: ["9", "7", "12", "15"], dogru: 0, cozum: "Sırala: 4, 7, 9, 12, 15. Ortadaki değer 9." },
            { soru: "Bir haftada okunan sayfa sayıları: 20, 35, 15, 40, 30. Açıklık kaçtır?", secenekler: ["20", "25", "35", "40"], dogru: 1, cozum: "En büyük 40, en küçük 15. 40 − 15 = 25." },
            { soru: "4 öğrencinin not ortalaması 70'tir. Notların toplamı kaçtır?", secenekler: ["74", "210", "280", "300"], dogru: 2, cozum: "Ortalama × veri sayısı = toplam. 70 × 4 = 280." }
          ]
        }
      ]
    },
    {
      id: "t5", ad: "Geometrik Şekiller",
      konular: [
        {
          id: "t5k1", ad: "Paralel Doğrular ve Kesenle Oluşan Açılar",
          ozet: ["Yöndeş açılar eşittir.", "İç ters açılar eşittir. Dış ters açılar eşittir.", "Bir doğru üzerinde yan yana açılar: toplam 180°", "Kesenin aynı tarafında, paralellerin arasındaki iki açı: toplam 180°", "8 açıda yalnızca 2 farklı ölçü olur: a ve 180° − a"],
          anlatim: [
            "İki paralel doğruyu kesen bir doğruya kesen denir. Kesenle birlikte 8 açı oluşur.",
            "Yöndeş açılar: Aynı yöne bakan açılardır, ölçüleri eşittir.",
            "İç ters açılar ve dış ters açılar: Kesenin farklı taraflarında, paralellerin içinde (veya dışında) kalan açılardır, ölçüleri eşittir.",
            "Yan yana duran ve bir doğru üzerinde olan açıların toplamı 180°'dir. Kesenin aynı tarafında, paralellerin arasında kalan iki açının toplamı da 180°'dir."
          ],
          video: "MpRBja6iCag",
          sorular: [
            { soru: "İki paralel doğruyu bir kesen kesiyor. Yöndeş açılardan biri 65° ise diğeri kaç derecedir?", secenekler: ["25°", "65°", "115°", "130°"], dogru: 1, cozum: "Yöndeş açıların ölçüleri eşittir: 65°." },
            { soru: "Bir doğru üzerinde yan yana duran iki açıdan biri 72° ise diğeri kaç derecedir?", secenekler: ["18°", "72°", "108°", "118°"], dogru: 2, cozum: "Toplamları 180°: 180 − 72 = 108°." },
            { soru: "İç ters açılardan biri 140° ise diğeri kaç derecedir?", secenekler: ["40°", "70°", "140°", "220°"], dogru: 2, cozum: "İç ters açıların ölçüleri eşittir: 140°." },
            { soru: "İki paralel doğru ve bir kesenle oluşan 8 açıdan biri 50°'dir. Bu 8 açıda kaç farklı ölçü vardır?", secenekler: ["1", "2", "4", "8"], dogru: 1, cozum: "Açıların bir kısmı 50°, diğerleri 180 − 50 = 130°. Sadece 2 farklı ölçü vardır." },
            { soru: "Kesenin aynı tarafında, paralel doğruların arasında kalan iki açının toplamı kaç derecedir?", secenekler: ["360°", "90°", "270°", "180°"], dogru: 3, cozum: "Bu açılar birbirini 180°'ye tamamlar." }
          ]
        },
        {
          id: "t5k2", ad: "Üçgenin Açıları",
          ozet: ["Üçgenin iç açıları toplamı 180°", "Üçüncü açı = 180° − (diğer iki açı)", "Dar açılı: hepsi 90°'den küçük", "Dik açılı: biri 90°", "Geniş açılı: biri 90°'den büyük", "Eşkenar üçgen: her açı 60°"],
          anlatim: [
            "Bir üçgenin iç açılarının ölçüleri toplamı her zaman 180°'dir.",
            "Bunu görmek için kâğıttan bir üçgen kes, üç köşesini yırtıp yan yana koy: düz bir açı (180°) oluşur.",
            "İki açısı bilinen üçgende üçüncü açı = 180° − (diğer iki açının toplamı).",
            "Açılarına göre üçgenler: dar açılı (tüm açılar 90°'den küçük), dik açılı (bir açısı 90°), geniş açılı (bir açısı 90°'den büyük)."
          ],
          video: "MpRBja6iCag",
          sorular: [
            { soru: "Bir üçgenin iki açısı 50° ve 70° ise üçüncü açısı kaç derecedir?", secenekler: ["50°", "60°", "70°", "120°"], dogru: 1, cozum: "180 − (50 + 70) = 180 − 120 = 60°." },
            { soru: "Bir dik üçgende dik açı dışındaki açılardan biri 35° ise diğeri kaç derecedir?", secenekler: ["35°", "45°", "55°", "145°"], dogru: 2, cozum: "180 − (90 + 35) = 55°." },
            { soru: "Eşkenar üçgenin bir iç açısı kaç derecedir?", secenekler: ["60°", "45°", "90°", "180°"], dogru: 0, cozum: "Üç açı eşit: 180 ÷ 3 = 60°." },
            { soru: "Açıları 30°, 40° ve 110° olan üçgen hangi türdendir?", secenekler: ["Dar açılı", "Dik açılı", "Geniş açılı", "Eşkenar"], dogru: 2, cozum: "110° açısı 90°'den büyük, üçgen geniş açılıdır." },
            { soru: "Hangi üç açı bir üçgenin iç açıları olabilir?", secenekler: ["60°, 60°, 70°", "100°, 50°, 40°", "80°, 80°, 30°", "90°, 45°, 45°"], dogru: 3, cozum: "Sadece 90 + 45 + 45 = 180°. Diğerlerinin toplamı 190°." }
          ]
        },
        {
          id: "t5k3", ad: "Dörtgenlerin Özellikleri",
          ozet: ["Dörtgenin iç açıları toplamı 360°", "Paralelkenar: karşılıklı açılar eşit, yan yana açılar toplamı 180°", "Dikdörtgen: bütün açılar 90°", "Eşkenar dörtgen: bütün kenarlar eşit", "Kare: hem dikdörtgen hem eşkenar dörtgen", "Yamuk: yalnızca bir çift kenar paralel"],
          anlatim: [
            "Bir dörtgenin iç açılarının toplamı 360°'dir.",
            "Paralelkenar: Karşılıklı kenarları paralel ve eşittir, karşılıklı açıları eşittir. Yan yana iki açısının toplamı 180°'dir.",
            "Dikdörtgen: Tüm açıları 90° olan paralelkenar. Eşkenar dörtgen: Tüm kenarları eşit paralelkenar. Kare: Hem dikdörtgen hem eşkenar dörtgendir.",
            "Yamuk: Yalnızca bir çift karşılıklı kenarı paralel olan dörtgendir."
          ],
          video: "N7OFMmtPjPg",
          sorular: [
            { soru: "Bir dörtgenin üç açısı 80°, 100° ve 90° ise dördüncü açısı kaç derecedir?", secenekler: ["80°", "90°", "100°", "110°"], dogru: 1, cozum: "360 − (80 + 100 + 90) = 360 − 270 = 90°." },
            { soru: "Bir paralelkenarın bir açısı 70° ise bu açının karşısındaki açı kaç derecedir?", secenekler: ["70°", "110°", "20°", "290°"], dogru: 0, cozum: "Paralelkenarda karşılıklı açılar eşittir: 70°." },
            { soru: "Tüm kenarları eşit ama açıları 90° olmayan dörtgen hangisidir?", secenekler: ["Kare", "Dikdörtgen", "Eşkenar dörtgen", "Yamuk"], dogru: 2, cozum: "Kenarları eşit, açıları 90° değilse eşkenar dörtgendir." },
            { soru: "Hangisi her zaman doğrudur?", secenekler: ["Her dikdörtgen bir karedir.", "Her yamuk bir paralelkenardır.", "Her paralelkenarın açıları 90°'dir.", "Her kare bir dikdörtgendir."], dogru: 3, cozum: "Karenin tüm açıları 90° olduğu için her kare bir dikdörtgendir. Tersi her zaman doğru değil." },
            { soru: "Paralelkenarda yan yana iki açının toplamı kaç derecedir?", secenekler: ["180°", "90°", "270°", "360°"], dogru: 0, cozum: "Paralelkenarda yan yana iki açı birbirini 180°'ye tamamlar." }
          ]
        }
      ]
    },
    {
      id: "t6", ad: "İşlemlerle Cebirsel Düşünme ve Değişimler",
      konular: [
        {
          id: "t6k1", ad: "Bilinmeyen Nicelikler ve Cebirsel İfadeler",
          ozet: ["Bilinmeyen bir harfle gösterilir: x, a, n...", "3 fazlası → x + 3 · 2 katı → 2x · yarısı → x ÷ 2", "Değer bulma: harf yerine sayıyı yaz. x = 4 → 2x + 1 = 9", "Benzer terimler toplanır: 3a + 2a = 5a"],
          anlatim: [
            "Değerini bilmediğimiz bir niceliği bir harfle gösterebiliriz. Bu harfe bilinmeyen veya değişken denir.",
            "'Bir sayının 3 fazlası' → x + 3. 'Bir sayının 2 katı' → 2x. 'Bir sayının yarısı' → x ÷ 2.",
            "Harf yerine bir sayı koyarak ifadenin değerini buluruz: x = 4 için 2x + 1 = 2 × 4 + 1 = 9.",
            "Aynı harfi taşıyan terimler toplanabilir: 3a + 2a = 5a."
          ],
          video: "d6VuaMxPEb4",
          sorular: [
            { soru: "'Bir sayının 4 katının 5 eksiği' hangi ifadeyle gösterilir?", secenekler: ["4x + 5", "4x − 5", "4(x − 5)", "5 − 4x"], dogru: 1, cozum: "Önce 4 katı: 4x. Sonra 5 eksiği: 4x − 5." },
            { soru: "a = 3 için 5a − 2 ifadesinin değeri kaçtır?", secenekler: ["13", "17", "11", "15"], dogru: 0, cozum: "5 × 3 − 2 = 15 − 2 = 13." },
            { soru: "Ayşe'nin x lirası var. Annesi 20 lira daha verdi, sonra 8 liralık kitap aldı. Kalan parası hangisidir?", secenekler: ["x + 28", "x − 12", "x + 12", "x − 28"], dogru: 2, cozum: "x + 20 − 8 = x + 12." },
            { soru: "2y + 3y + 4 ifadesinin sade hali hangisidir?", secenekler: ["9y", "6y + 4", "5y + 7", "5y + 4"], dogru: 3, cozum: "2y + 3y = 5y. 4 ayrı kalır: 5y + 4." },
            { soru: "Bir kalemin fiyatı k TL'dir. 6 kalemin fiyatı nasıl gösterilir?", secenekler: ["k + 6", "6k", "k ÷ 6", "6 − k"], dogru: 1, cozum: "6 tane k: 6 × k = 6k." }
          ]
        },
        {
          id: "t6k2", ad: "Örüntüler ve Algoritmalar",
          ozet: ["Örüntü: kurala göre devam eden dizi", "Fark sabitse kural: fark × n ± düzeltme", "3, 7, 11, 15 → fark 4 → kural 4n − 1", "n. terimi bulmak için kuralda n yerine sırayı yaz.", "Algoritma: sırayla izlenen adımlar"],
          anlatim: [
            "Belirli bir kurala göre devam eden sayı veya şekil dizilerine örüntü denir.",
            "3, 7, 11, 15, ... örüntüsünde her adımda 4 eklenir. Kuralı 4n − 1 şeklinde yazabiliriz (n adım sayısı).",
            "Kuralı bulmak için ardışık terimler arasındaki farka bak. Fark sabitse kural 'fark × n' ile başlar, sonra ilk terime uyacak şekilde düzeltilir.",
            "Algoritma, bir işi yapmak için sırayla izlenen adımlardır. 'Sayıyı al, 2 ile çarp, 3 ekle' bir algoritmadır."
          ],
          video: "d6VuaMxPEb4",
          sorular: [
            { soru: "5, 9, 13, 17, ... örüntüsünde sonraki terim kaçtır?", secenekler: ["19", "20", "21", "22"], dogru: 2, cozum: "Her adımda 4 artıyor: 17 + 4 = 21." },
            { soru: "Kuralı 3n + 2 olan örüntünün 10. terimi kaçtır?", secenekler: ["30", "32", "35", "23"], dogru: 1, cozum: "n = 10: 3 × 10 + 2 = 32." },
            { soru: "2, 4, 6, 8, ... örüntüsünün kuralı hangisidir?", secenekler: ["n + 2", "n + 1", "2n", "2n + 2"], dogru: 2, cozum: "1. terim 2×1 = 2, 2. terim 2×2 = 4... Kural 2n." },
            { soru: "Her adımda 3 kibrit eklenen bir örüntüde 1. adımda 4 kibrit var. 6. adımda kaç kibrit olur?", secenekler: ["18", "21", "22", "19"], dogru: 3, cozum: "1. adımdan 6. adıma 5 kez 3 eklenir: 4 + 5 × 3 = 19." },
            { soru: "'Sayıyı al, 3 ile çarp, 4 çıkar' algoritmasına 7 girilirse sonuç kaç olur?", secenekler: ["17", "21", "25", "9"], dogru: 0, cozum: "7 × 3 = 21, 21 − 4 = 17." }
          ]
        }
      ]
    },
    {
      id: "t7", ad: "Geometrik Nicelikler",
      konular: [
        {
          id: "t7k1", ad: "Alan Ölçme Birimleri",
          ozet: ["Alan birimleri 100'er 100'er büyür.", "1 m² = 100 dm² = 10 000 cm²", "1 cm² = 100 mm²", "Büyükten küçüğe → 100 ile çarp", "Küçükten büyüğe → 100'e böl"],
          anlatim: [
            "Alan, bir yüzeyin kapladığı yerin ölçüsüdür. Birim kareler sayılarak bulunur.",
            "Standart alan birimleri: km², m², dm², cm², mm². Kenarı 1 cm olan karenin alanı 1 cm²'dir.",
            "Alan birimleri 100'er 100'er büyür: 1 m² = 100 dm² = 10 000 cm²; 1 cm² = 100 mm².",
            "Büyük birimden küçüğe geçerken her basamak için 100 ile çarparız, küçükten büyüğe geçerken 100'e böleriz."
          ],
          video: "jrQEyMGD_SU",
          sorular: [
            { soru: "3 m² kaç dm²'dir?", secenekler: ["30", "300", "3000", "30 000"], dogru: 1, cozum: "1 m² = 100 dm². 3 × 100 = 300 dm²." },
            { soru: "1 m² kaç cm²'dir?", secenekler: ["100", "1000", "10 000", "1 000 000"], dogru: 2, cozum: "1 m² = 100 dm² = 100 × 100 cm² = 10 000 cm²." },
            { soru: "500 mm² kaç cm²'dir?", secenekler: ["5", "50", "0,5", "5000"], dogru: 0, cozum: "1 cm² = 100 mm². 500 ÷ 100 = 5 cm²." },
            { soru: "Bir sınıfın tabanının alanını ölçmek için en uygun birim hangisidir?", secenekler: ["mm²", "cm²", "m²", "km²"], dogru: 2, cozum: "Sınıf tabanı için m² en uygun birimdir." },
            { soru: "Bir masa örtüsünün alanı 2,5 m²'dir. Bu kaç dm² eder?", secenekler: ["25", "2500", "0,25", "250"], dogru: 3, cozum: "2,5 × 100 = 250 dm²." }
          ]
        },
        {
          id: "t7k2", ad: "Paralelkenar ve Üçgenin Alanı",
          ozet: ["Dikdörtgen: uzun kenar × kısa kenar", "Paralelkenar: taban × yükseklik", "Üçgen: (taban × yükseklik) ÷ 2", "Yükseklik tabana diktir, eğik kenar değildir!"],
          anlatim: [
            "Dikdörtgenin alanı = uzun kenar × kısa kenar.",
            "Paralelkenarın alanı = taban × yükseklik. Yükseklik, tabana dik çizilen uzunluktur; eğik kenar değildir!",
            "Bir paralelkenarı köşegeninden kesince iki eş üçgen oluşur. Bu yüzden üçgenin alanı = (taban × yükseklik) ÷ 2.",
            "Örnek: Tabanı 8 cm, yüksekliği 5 cm olan üçgenin alanı = 8 × 5 ÷ 2 = 20 cm²."
          ],
          video: "mDqyX5hKlU8",
          sorular: [
            { soru: "Tabanı 9 cm, yüksekliği 4 cm olan paralelkenarın alanı kaç cm²'dir?", secenekler: ["13", "18", "36", "26"], dogru: 2, cozum: "9 × 4 = 36 cm²." },
            { soru: "Tabanı 10 cm, yüksekliği 6 cm olan üçgenin alanı kaç cm²'dir?", secenekler: ["60", "30", "16", "32"], dogru: 1, cozum: "10 × 6 ÷ 2 = 30 cm²." },
            { soru: "Alanı 48 cm², tabanı 8 cm olan paralelkenarın yüksekliği kaç cm'dir?", secenekler: ["6", "4", "8", "12"], dogru: 0, cozum: "48 ÷ 8 = 6 cm." },
            { soru: "Alanı 24 cm², yüksekliği 6 cm olan üçgenin tabanı kaç cm'dir?", secenekler: ["4", "6", "8", "12"], dogru: 2, cozum: "Taban × 6 ÷ 2 = 24 → taban × 6 = 48 → taban = 8 cm." },
            { soru: "Tabanı 20 m, yüksekliği 15 m olan paralelkenar şeklindeki bahçenin her m²'sine 2 fide dikilecek. Kaç fide gerekir?", secenekler: ["300", "70", "35", "600"], dogru: 3, cozum: "Alan: 20 × 15 = 300 m². Fide: 300 × 2 = 600." }
          ]
        },
        {
          id: "t7k3", ad: "Çemberin Çevresi",
          ozet: ["Çap = 2 × yarıçap", "π ≈ 3,14 (sorularda çoğu zaman 3 alınır)", "Çevre = π × çap = 2 × π × r", "r = 5 cm → çevre = 2 × 3 × 5 = 30 cm", "Tekerlek bir turda çevresi kadar yol alır."],
          anlatim: [
            "Çemberin merkezinden çembere uzanan doğru parçasına yarıçap (r) denir. Merkezden geçip çemberin iki noktasını birleştiren doğru parçası çaptır. Çap = 2 × yarıçap.",
            "Hangi çemberi ölçersen ölç, çevre ÷ çap hep aynı sayıyı verir: yaklaşık 3,14. Bu sayıya pi (π) denir.",
            "Çemberin çevresi = π × çap = 2 × π × r.",
            "Örnek: Yarıçapı 5 cm olan çemberin çevresi (π = 3 alınırsa) 2 × 3 × 5 = 30 cm'dir."
          ],
          video: "yEm3ySN9eZw",
          sorular: [
            { soru: "Yarıçapı 4 cm olan çemberin çapı kaç cm'dir?", secenekler: ["2", "4", "8", "16"], dogru: 2, cozum: "Çap = 2 × 4 = 8 cm." },
            { soru: "Çapı 10 cm olan çemberin çevresi kaç cm'dir? (π = 3 alınız)", secenekler: ["13", "30", "60", "300"], dogru: 1, cozum: "Çevre = π × çap = 3 × 10 = 30 cm." },
            { soru: "Yarıçapı 7 cm olan çemberin çevresi kaç cm'dir? (π = 3 alınız)", secenekler: ["21", "49", "42", "14"], dogru: 2, cozum: "2 × 3 × 7 = 42 cm." },
            { soru: "Çevresi 36 cm olan çemberin yarıçapı kaç cm'dir? (π = 3 alınız)", secenekler: ["6", "12", "18", "3"], dogru: 0, cozum: "2 × 3 × r = 36 → 6r = 36 → r = 6 cm." },
            { soru: "Çapı 50 cm olan bisiklet tekerleği 10 tam tur dönerse bisiklet kaç cm yol alır? (π = 3 alınız)", secenekler: ["500", "3000", "150", "1500"], dogru: 3, cozum: "Bir tur = çevre = 3 × 50 = 150 cm. 10 tur: 1500 cm." }
          ]
        },
        {
          id: "t7k4", ad: "Merkez Açı ve Gördüğü Yay",
          ozet: ["Merkez açı: köşesi çemberin merkezinde", "Tam çember 360°", "Merkez açı = gördüğü yayın ölçüsü", "Yay uzunluğu = çevre × (açı ÷ 360)", "n eşit parça → her biri 360° ÷ n"],
          anlatim: [
            "Köşesi çemberin merkezinde olan açıya merkez açı denir. Merkez açının kolları arasında kalan çember parçasına yay denir.",
            "Tam çember 360°'dir. Merkez açının ölçüsü, gördüğü yayın ölçüsüne eşittir.",
            "Yayın uzunluğu, çevrenin merkez açı kadar olan kısmıdır: yay uzunluğu = çevre × (merkez açı ÷ 360).",
            "Örnek: Çevresi 36 cm olan çemberde 90°'lik merkez açının gördüğü yay 36 × 90 ÷ 360 = 9 cm'dir."
          ],
          video: "0Np4cwcj3Hk",
          sorular: [
            { soru: "Bir merkez açı 80° ise gördüğü yayın ölçüsü kaç derecedir?", secenekler: ["40°", "80°", "160°", "280°"], dogru: 1, cozum: "Merkez açının ölçüsü gördüğü yayın ölçüsüne eşittir: 80°." },
            { soru: "Bir çember 4 eşit yaya bölünürse her yayı gören merkez açı kaç derecedir?", secenekler: ["45°", "60°", "90°", "120°"], dogru: 2, cozum: "360 ÷ 4 = 90°." },
            { soru: "Çevresi 60 cm olan çemberde 120°'lik merkez açının gördüğü yay kaç cm'dir?", secenekler: ["20", "30", "40", "12"], dogru: 0, cozum: "120°, 360°'nin üçte biri. 60 ÷ 3 = 20 cm." },
            { soru: "Daire şeklindeki bir pasta 6 eşit dilime kesiliyor. Her dilimin merkez açısı kaç derecedir?", secenekler: ["30°", "45°", "90°", "60°"], dogru: 3, cozum: "360 ÷ 6 = 60°." },
            { soru: "Çevresi 48 cm olan çemberin yarısı kaç cm'dir ve bu yayı gören merkez açı kaç derecedir?", secenekler: ["24 cm, 90°", "24 cm, 180°", "12 cm, 180°", "48 cm, 360°"], dogru: 1, cozum: "Yarım çember: 48 ÷ 2 = 24 cm. Merkez açı: 360 ÷ 2 = 180°." }
          ]
        }
      ]
    },
    {
      id: "m1", ad: "Ek Konu: Üslü İfadeler ve İşlem Önceliği",
      konular: [
        {
          id: "m1k1", ad: "Üslü İfadeler",
          ozet: ["aⁿ: a sayısı n kez kendisiyle çarpılır.", "2⁴ = 2 × 2 × 2 × 2 = 16 (2 × 4 değil!)", "Kare: üssü 2 · Küp: üssü 3", "10ⁿ: 1'in yanına n tane sıfır"],
          anlatim: [
            "Bir sayının kendisiyle tekrar tekrar çarpımını kısaca yazmak için üslü ifade kullanırız.",
            "Örneğin 2 × 2 × 2 × 2 yerine 2⁴ yazarız. Burada 2 'taban', 4 ise 'üs'tür. 2⁴ = 16 olur.",
            "Dikkat: 2⁴, 2 × 4 demek değildir! 2 × 4 = 8 ama 2⁴ = 16.",
            "Bir sayının karesi: üssü 2 olan ifade (5² = 25). Küpü: üssü 3 olan ifade (3³ = 27).",
            "10'un kuvvetlerinde üs, sıfır sayısını gösterir: 10³ = 1000 (3 sıfır)."
          ],
          video: "J41eG_83B6U",
          sorular: [
            { soru: "2⁴ ifadesinin değeri kaçtır?", secenekler: ["8", "16", "6", "32"], dogru: 1, cozum: "2⁴ = 2 × 2 × 2 × 2 = 16. 2 × 4 = 8 ile karıştırma!" },
            { soru: "10³ ifadesinin değeri kaçtır?", secenekler: ["30", "100", "1000", "10000"], dogru: 2, cozum: "10'un üssü kaç ise o kadar sıfır yazılır: 10³ = 1000." },
            { soru: "Aşağıdakilerden hangisi 6² ifadesine eşittir?", secenekler: ["6 × 2", "6 + 6", "6 × 6", "2 × 2 × 2 × 2 × 2 × 2"], dogru: 2, cozum: "6², 6'nın karesidir: 6 × 6 = 36." },
            { soru: "3³ − 2³ işleminin sonucu kaçtır?", secenekler: ["1", "3", "19", "27"], dogru: 2, cozum: "3³ = 27, 2³ = 8. 27 − 8 = 19." }
          ]
        },
        {
          id: "m1k2", ad: "İşlem Önceliği",
          ozet: ["1) Parantez içi", "2) Üslü ifadeler", "3) Çarpma ve bölme (soldan sağa)", "4) Toplama ve çıkarma (soldan sağa)"],
          anlatim: [
            "Birden fazla işlem olduğunda sıraya dikkat ederiz:",
            "1) Önce parantez içi, 2) sonra üslü ifadeler, 3) sonra çarpma ve bölme (soldan sağa), 4) en son toplama ve çıkarma (soldan sağa).",
            "Örnek: 5² + 3 × 4 → önce 5² = 25, sonra 3 × 4 = 12, en son 25 + 12 = 37."
          ],
          video: "J41eG_83B6U",
          sorular: [
            { soru: "5² + 3 × 4 işleminin sonucu kaçtır?", secenekler: ["112", "37", "64", "22"], dogru: 1, cozum: "Önce üs: 25. Sonra çarpma: 12. En son toplama: 25 + 12 = 37." },
            { soru: "(18 + 6) ÷ 4 × 2 işleminin sonucu kaçtır?", secenekler: ["3", "12", "6", "48"], dogru: 1, cozum: "Parantez: 24. Soldan sağa: 24 ÷ 4 = 6, 6 × 2 = 12." },
            { soru: "20 − 2 × 5 işleminin sonucu kaçtır?", secenekler: ["90", "10", "15", "30"], dogru: 1, cozum: "Önce çarpma: 2 × 5 = 10. Sonra 20 − 10 = 10." }
          ]
        },
        {
          id: "m1k3", ad: "Ortak Çarpan Parantezi ve Problemler",
          ozet: ["a × b + a × c = a × (b + c)", "7 × 13 + 7 × 7 = 7 × 20 = 140", "Toplamı 10, 20, 100 gibi yapan sayılar hesabı kolaylaştırır."],
          anlatim: [
            "Aynı sayıyla çarpılan ifadeleri toplarken o sayıyı parantez dışına alabiliriz.",
            "7 × 13 + 7 × 7 = 7 × (13 + 7) = 7 × 20 = 140. Bu yöntem hesaplamayı kolaylaştırır.",
            "Problemlerde önce ne sorulduğunu bul, sonra adım adım işlem kur."
          ],
          video: "CO_ZcgZb3_4",
          sorular: [
            { soru: "7 × 13 + 7 × 7 işleminin sonucu kaçtır?", secenekler: ["140", "91", "147", "120"], dogru: 0, cozum: "7 × (13 + 7) = 7 × 20 = 140." },
            { soru: "Her pakette 8 kalem olan 12 paket kalemin her biri 15 TL'dir. Kalemlerin toplam fiyatı kaç TL'dir?", secenekler: ["1200", "960", "1440", "1540"], dogru: 2, cozum: "Kalem sayısı: 12 × 8 = 96. Fiyat: 96 × 15 = 1440 TL." }
          ]
        }
      ]
    }
  ]
};
