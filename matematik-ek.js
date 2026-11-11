// 6. sınıf Matematik: anlatımı kısa kalan konulara ek açıklama, adım adım yöntem ve sık yapılan hatalar (MEB 6. sınıf kazanımlarına uygun).
(function () {
  if (!window.MUF) return;
  const Z = (id, e) => MUF.zengin(id, e);

  Z("t3k1", {
    anlatim: [
      "Ondalık gösterimde virgülün solu tam kısım, sağı ondalık kısımdır. Virgülden sonraki ilk basamak onda birler (1/10), ikincisi yüzde birler (1/100), üçüncüsü binde birler (1/1000) basamağıdır.",
      "Bir rakamın basamak değeri, rakam ile basamağın değerinin çarpımıdır: 4,375 sayısında 7 rakamı yüzde birler basamağındadır, basamak değeri 7 · 0,01 = 0,07'dir.",
      "Çözümleme: 12,408 = 1 · 10 + 2 · 1 + 4 · 0,1 + 0 · 0,01 + 8 · 0,001. Sıfır olan basamak çözümlemede yazılmayabilir ama sayıyı yazarken yeri boş bırakılmaz (12,48 ile 12,408 farklı sayılardır).",
      "Karşılaştırmada önce tam kısımlara, eşitse soldan sağa ondalık basamaklara bakılır: 3,45 ile 3,405 → onda birler eşit (4), yüzde birlerde 5 > 0 olduğundan 3,45 daha büyüktür."
    ],
    hata: ["Basamak sayısı çok olan ondalık sayıyı daha büyük sanmak (3,405 < 3,45).", "Basamak değeri yerine rakamın kendisini yazmak."]
  });
  Z("t3k2", {
    anlatim: [
      "Yuvarlama adımları: 1) Yuvarlanacak basamağı işaretle. 2) Hemen sağındaki rakama bak. 3) Bu rakam 5, 6, 7, 8 veya 9 ise işaretli basamağı 1 artır; 0, 1, 2, 3 veya 4 ise aynı bırak. 4) Sağdaki basamakları at.",
      "Örnek: 7,268 sayısını onda birler basamağına yuvarlayalım. Onda birler basamağı 2, sağındaki rakam 6 → 2 bir artar: 7,3. Yüzde birler basamağına yuvarlarsak: 6'nın sağındaki 8 → 7,27.",
      "En yakın tam sayıya yuvarlamada virgülden sonraki ilk basamağa bakılır: 12,5 → 13; 12,49 → 12.",
      "Dikkat: 9 artırılınca 10 olur ve bir üst basamağa elde geçer: 4,96 onda birler basamağına yuvarlanınca 5,0 olur."
    ],
    hata: ["Yuvarlarken sağdaki tüm basamaklara tek tek bakmak (yalnızca hemen sağdaki basamak önemlidir).", "4,96'yı onda birlere yuvarlarken 4,10 yazmak (doğrusu 5,0)."]
  });
  Z("t3k3", {
    anlatim: [
      "Kesir çizgisi bölme anlamına gelir: 3/4 = 3 ÷ 4. Bu yüzden her bölme işlemi kesir olarak yazılabilir ve her kesir bir bölme işlemidir.",
      "Tam sayılı kesre çevirme: 17 ÷ 5 işleminde bölüm 3, kalan 2 → 17/5 = 3 tam 2/5. Bölüm tam kısmı, kalan payı, bölen paydayı verir.",
      "Ondalık gösterime çevirme: Payda 10, 100, 1000 yapılabiliyorsa genişletilir: 3/4 = 75/100 = 0,75. Yapılamıyorsa pay paydaya bölünür.",
      "Paylaşım problemlerinde 'her birine ne kadar düşer?' sorusu bölmedir: 7 pizza 4 kişiye eşit paylaşılırsa her birine 7/4 = 1 tam 3/4 pizza düşer."
    ],
    hata: ["Kalanı tam kısma eklemek (17 ÷ 5 = 3,2 değil, 3 tam 2/5 = 3,4).", "Kesrin pay ve paydasını bölme işleminde yer değiştirmek (3/4 = 3 ÷ 4, 4 ÷ 3 değil)."]
  });
  Z("t3k4", {
    anlatim: [
      "Uzunluk birimleri onar onar büyür: km, hm, dam, m, dm, cm, mm. Büyük birimden küçüğe geçerken her adımda 10 ile çarpılır, küçükten büyüğe geçerken 10'a bölünür.",
      "Sık kullanılan ilişkiler: 1 km = 1000 m · 1 m = 10 dm = 100 cm = 1000 mm · 1 cm = 10 mm.",
      "Ondalık gösterimde çarpma/bölme virgülü kaydırmaktır: 3,25 m = 325 cm (virgül 2 basamak sağa), 4500 m = 4,5 km (virgül 3 basamak sola).",
      "Problemlerde önce birimler eşitlenir, sonra işlem yapılır: 2 km 300 m + 850 m = 2300 m + 850 m = 3150 m = 3,15 km."
    ],
    hata: ["km'den m'ye çevirirken 100 ile çarpmak (doğrusu 1000).", "Farklı birimlerdeki uzunlukları birim eşitlemeden toplamak."]
  });
  Z("t4k2", {
    anlatim: [
      "Toplanan veriler sıklık tablosu, sütun grafiği, nokta grafiği gibi gösterimlerle düzenlenir. Grafik başlığı, eksen adları ve ölçek mutlaka yazılır.",
      "Aritmetik ortalama = veriler toplamı ÷ veri sayısı. Açıklık = en büyük değer − en küçük değer; verilerin ne kadar yayıldığını gösterir. Tepe değer (mod) en çok tekrar eden veridir.",
      "Örnek: 12, 15, 9, 15, 14 verileri için toplam 65, ortalama 65 ÷ 5 = 13; açıklık 15 − 9 = 6; tepe değer 15.",
      "Ortalama bilinip toplam isteniyorsa ters işlem yapılır: 6 öğrencinin ortalaması 80 ise puanlar toplamı 6 · 80 = 480'dir."
    ],
    hata: ["Ortalamayı bulurken veri sayısı yerine en büyük veriye bölmek.", "Açıklığı ilk ve son yazılan veri arasındaki fark sanmak; en büyük ile en küçük veri kullanılmalıdır."]
  });
  Z("t5k2", {
    anlatim: [
      "Üçgenin iç açılarının toplamı 180°'dir. Bir üçgeni kesip üç köşesini yan yana getirince bir doğru açı (180°) oluştuğu görülür.",
      "Bilinmeyen açı: 180° − (bilinen iki açının toplamı). Dik üçgende dik açı 90° olduğundan diğer iki açının toplamı 90°'dir.",
      "Açılarına göre üçgenler: tüm açıları 90°'den küçükse dar açılı, bir açısı 90° ise dik açılı, bir açısı 90°'den büyükse geniş açılı üçgen. Bir üçgende en fazla bir dik veya bir geniş açı olabilir.",
      "Eşkenar üçgende her açı 60°'dir; ikizkenar üçgende eş kenarların karşısındaki taban açıları eşittir."
    ],
    hata: ["Üçgenin açıları toplamını 360° sanmak (dörtgende 360°).", "Bir üçgende iki geniş açı olabileceğini düşünmek."]
  });
  Z("t6k1", {
    anlatim: [
      "Bilinmeyen bir niceliği harfle gösteririz: 'Bir sayının 3 katının 5 fazlası' → 3x + 5. Burada x değişken, 3 katsayı, 5 sabit terimdir.",
      "Benzer terimler (aynı harfi taşıyan terimler) toplanıp çıkarılabilir: 4a + 7a = 11a. Benzer olmayan terimler birleştirilemez: 4a + 7 sade hâldedir, 11a olmaz.",
      "Cebirsel ifadenin değeri, harf yerine verilen sayı yazılarak bulunur: x = 4 için 3x + 5 = 3 · 4 + 5 = 17.",
      "Sözel ifadeleri dikkatle çevir: 'x'in 2 eksiğinin 3 katı' → 3(x − 2); 'x'in 3 katının 2 eksiği' → 3x − 2."
    ],
    hata: ["Katsayı ile sabit terimi toplamak (3x + 5 ≠ 8x).", "'2 eksiğinin 3 katı' ile '3 katının 2 eksiği'ni karıştırmak."]
  });
  Z("t7k1", {
    anlatim: [
      "Alan birimleri yüzer yüzer büyür: km², hm², dam², m², dm², cm², mm². Büyük birimden küçüğe geçerken 100 ile çarpılır, küçükten büyüğe 100'e bölünür.",
      "Neden 100? 1 m = 10 dm olduğundan kenarı 1 m olan kare, kenarı 1 dm olan 10 · 10 = 100 kareye bölünür: 1 m² = 100 dm².",
      "Arazi ölçüleri: 1 dekar (dönüm) = 1000 m², 1 hektar = 10 000 m², 1 ar = 100 m².",
      "Örnek: 3,5 m² = 350 dm² = 35 000 cm². 2 hektar = 20 000 m² = 20 dekar."
    ],
    hata: ["Alan birimlerinde de 10 ile çarpmak (uzunlukta 10, alanda 100).", "Dekar ile hektarı karıştırmak."]
  });
  Z("t7k2", {
    anlatim: [
      "Paralelkenarın alanı = taban × yükseklik. Paralelkenarın bir ucundan üçgen kesilip öbür uca eklenirse aynı taban ve yükseklikte bir dikdörtgen oluşur; bu yüzden formül dikdörtgeninkiyle aynıdır.",
      "Üçgenin alanı = taban × yükseklik ÷ 2. Eş iki üçgen birleşince bir paralelkenar oluşur; üçgen bu paralelkenarın yarısıdır.",
      "Yükseklik, tabana karşı köşeden tabana (ya da uzantısına) çizilen dik uzunluktur; yan kenar uzunluğu yükseklik değildir.",
      "Ters soru: Alanı 48 cm², tabanı 8 cm olan üçgende 8 · h ÷ 2 = 48 → 8 · h = 96 → h = 12 cm."
    ],
    hata: ["Üçgen alanında 2'ye bölmeyi unutmak.", "Yükseklik yerine eğik yan kenarı kullanmak."]
  });
  Z("t7k3", {
    anlatim: [
      "Çemberin çevresinin çapına oranı her çemberde aynıdır ve pi (π) sayısı ile gösterilir: π ≈ 3,14 (sorularda çoğu zaman 3 alınır).",
      "Çevre = 2 · π · r = π · ç (r yarıçap, ç çap, ç = 2r).",
      "Bir tekerlek bir tam tur döndüğünde çevresi kadar yol alır: çapı 50 cm olan tekerlek (π = 3) bir turda 150 cm, 10 turda 1500 cm = 15 m gider.",
      "Ters problem: Çevresi 36 cm olan çemberde (π = 3) 2 · 3 · r = 36 → r = 6 cm."
    ],
    hata: ["Yarıçap verilmişken çevreyi π · r ile bulmak (doğrusu 2 · π · r).", "Çap ile yarıçapı karıştırmak."]
  });
  Z("t7k4", {
    anlatim: [
      "Köşesi çemberin merkezinde olan açıya merkez açı denir. Merkez açının kolları arasında kalan çember parçası, açının gördüğü yaydır; yayın ölçüsü merkez açının ölçüsüne eşittir.",
      "Tam çember 360°'dir. n eş parçaya bölünen çemberde her merkez açı 360° ÷ n olur.",
      "Yay uzunluğu = çevre × (merkez açı ÷ 360°). Örneğin çevresi 72 cm olan çemberde 60°'lik açının gördüğü yay 72 · 60/360 = 12 cm'dir.",
      "Daire grafiklerinde her dilimin merkez açısı, o dilimin bütün içindeki payıyla orantılıdır: %25'lik dilim 90°'dir."
    ],
    hata: ["Yay ölçüsü (derece) ile yay uzunluğunu (cm) karıştırmak.", "Merkez açıların toplamını 180° almak (doğrusu 360°)."]
  });
  Z("m1k1", {
    anlatim: [
      "Üslü ifade, tekrarlı çarpmanın kısa yazılışıdır: 2⁵ = 2 · 2 · 2 · 2 · 2 = 32. Alttaki sayı taban, üstteki üs (kuvvet)tir.",
      "Bir sayının karesi kendisiyle çarpımı (5² = 25), küpü üç kez çarpımıdır (5³ = 125). Her sayının 1. kuvveti kendisi, sıfırdan farklı her sayının 0. kuvveti 1'dir.",
      "Dikkat: 2⁵ ≠ 2 · 5. Üs, tabanın kaç kez çarpılacağını gösterir; tabanla çarpılmaz.",
      "10'un kuvvetleri: 10² = 100, 10³ = 1000; üs kadar sıfır yazılır. Büyük sayılar 10'un kuvvetleriyle çözümlenebilir: 3400 = 3 · 10³ + 4 · 10²."
    ],
    hata: ["Tabanla üssü çarpmak (3⁴ = 12 değil, 81).", "Sıfırıncı kuvveti 0 sanmak (7⁰ = 1)."]
  });
  Z("m1k2", {
    anlatim: [
      "İşlem önceliği: 1) Parantez içi 2) Üslü ifadeler 3) Çarpma ve bölme (soldan sağa) 4) Toplama ve çıkarma (soldan sağa).",
      "Örnek: 20 − 3 · 2² = 20 − 3 · 4 = 20 − 12 = 8. Önce üs, sonra çarpma, en son çıkarma yapılır.",
      "Aynı öncelikteki işlemler soldan sağa yapılır: 24 ÷ 4 · 2 = 6 · 2 = 12 (24 ÷ 8 = 3 değil).",
      "Parantez önceliği değiştirir: (20 − 3) · 2² = 17 · 4 = 68."
    ],
    hata: ["Toplamayı çarpmadan önce yapmak.", "Çarpma ve bölmede soldan sağa kuralını unutmak."]
  });
  Z("m1k3", {
    anlatim: [
      "Dağılma özelliği: a · (b + c) = a · b + a · c. Tersine, iki çarpımda ortak çarpan varsa paranteze alınır: a · b + a · c = a · (b + c).",
      "Ortak çarpan parantezi zihinden işlemi kolaylaştırır: 17 · 6 + 17 · 4 = 17 · (6 + 4) = 17 · 10 = 170.",
      "Çıkarmada da geçerlidir: 25 · 13 − 25 · 9 = 25 · (13 − 9) = 25 · 4 = 100.",
      "Problemlerde aynı fiyatlı ürünler gruplanabilir: Tanesi 15 TL olan 7 defter ve 3 defter daha → 15 · 7 + 15 · 3 = 15 · 10 = 150 TL."
    ],
    hata: ["Ortak çarpanı paranteze alırken bir terimi eksik yazmak.", "a · (b + c)'yi a · b + c diye açmak (c de a ile çarpılmalı)."]
  });
})();
