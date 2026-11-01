// 6. sınıf açık uçlu yazılı soruları (ortak sınav biçiminde: senaryo + gerekçeli cevap)
// window.ACIK[konuKimliği] = [[soru, cevap anahtarı], ...]
window.ACIK = Object.assign(window.ACIK || {}, {
  // ===== MATEMATİK — 1. dönem 1. yazılı (ortak sınav, 11 Kasım) =====
  t1k1: [
    ["Elif'in 36 tane fotoğrafı var. Bu fotoğrafları her sayfada eşit sayıda olacak ve hiç fotoğraf artmayacak şekilde bir albüme yerleştirecek. a) Elif her sayfaya kaç fotoğraf koyabilir? Bütün seçenekleri yazınız. b) Albümde 8 sayfa olsaydı fotoğrafları bu kurala göre yerleştirebilir miydi? Gerekçesiyle açıklayınız.", "a) 36'nın çarpanları: 1, 2, 3, 4, 6, 9, 12, 18, 36 (sayfa sayısı × sayfadaki fotoğraf = 36). b) Hayır; 8, 36'nın çarpanı değildir (36 ÷ 8 = 4 kalan 4), fotoğraf artar."],
    ["Bir öğrenci \"Bir sayının katları sonsuz tanedir ama çarpanları sınırlı sayıdadır.\" diyor. Bu ifadeyi 12 sayısı üzerinden örneklerle açıklayınız.", "Doğrudur. 12'nin katları 12, 24, 36, 48, ... diye sonsuza kadar devam eder. 12'nin çarpanları ise 1, 2, 3, 4, 6, 12'dir; bir sayının çarpanları kendisinden büyük olamaz, bu yüzden sınırlıdır."],
    ["Bir okul bahçesinde 48 öğrenci eşit sayıda kişiden oluşan gruplara ayrılacak. Her grupta en az 3, en fazla 10 öğrenci olacaktır. Kaç farklı şekilde grup oluşturulabilir? Her biri için grup sayısını yazınız.", "48'in 3 ile 10 arasındaki çarpanları: 3, 4, 6, 8. 3'lü → 16 grup, 4'lü → 12 grup, 6'lı → 8 grup, 8'li → 6 grup. Toplam 4 farklı şekilde."]
  ],
  t1k2: [
    ["Ayşe, rakamları farklı olan 5_4 üç basamaklı sayısında boşluğa bir rakam yazacak. a) Sayının 3 ile kalansız bölünebilmesi için boşluğa hangi rakamlar gelebilir? b) Sayının hem 2 hem 3 ile bölünebilmesi için hangi rakamlar gelebilir? Gerekçelendiriniz.", "a) Rakamlar toplamı 5 + 4 + x = 9 + x, 3'ün katı olmalı → x = 0, 3, 6, 9. Rakamları farklı olmalı; 5 ve 4 dışındaki bu değerler uygundur: 0, 3, 6, 9. b) Son rakam 4 olduğundan sayı zaten çift, 2'ye bölünür; 3 için aynı koşul → 0, 3, 6, 9."],
    ["\"Bir sayı hem 2'ye hem 3'e bölünüyorsa 6'ya da bölünür.\" ifadesinin doğru olduğunu iki örnekle gösteriniz. 4 ve 6'ya bölünen bir sayının 24'e bölünmek zorunda olmadığını bir örnekle açıklayınız.", "Örnek: 18 (2'ye ve 3'e bölünür, 18 ÷ 6 = 3), 42 (42 ÷ 6 = 7). 2 ve 3'ün ortak çarpanı olmadığı için 6'ya bölünür. 12 sayısı 4'e ve 6'ya bölünür ama 24'e bölünmez; çünkü 4 ve 6'nın ortak çarpanı (2) vardır."],
    ["Bir manav 135 elmayı 5'li, 9'lu ya da 10'lu paketlere hiç artmayacak şekilde koymak istiyor. Bölünebilme kurallarını kullanarak hangi paketleri kullanabileceğini gerekçesiyle yazınız.", "5'li: son rakam 5 → bölünür (27 paket). 9'lu: rakamlar toplamı 1+3+5 = 9 → bölünür (15 paket). 10'lu: son rakam 0 değil → bölünmez, artar."]
  ],
  t1k3: [
    ["a) 60 sayısını asal çarpanlarına ayırınız (çarpan ağacı ya da bölen listesiyle). b) 60'ın asal çarpanlarını yazınız. c) Bir öğrenci \"1 de bir asal sayıdır.\" diyor. Bu ifadeyi değerlendiriniz.", "a) 60 = 2 · 2 · 3 · 5 = 2² · 3 · 5. b) Asal çarpanları 2, 3 ve 5'tir. c) Yanlıştır; asal sayıların tam olarak iki farklı çarpanı (1 ve kendisi) vardır. 1'in yalnızca bir çarpanı olduğu için asal değildir."],
    ["20 ile 40 arasındaki asal sayıları yazınız. Bu asal sayılardan iki tanesinin toplamı çift mi tek mi olur? Gerekçesiyle açıklayınız.", "23, 29, 31, 37. Hepsi tek sayıdır; iki tek sayının toplamı her zaman çifttir (örneğin 23 + 29 = 52)."],
    ["Bir kenar uzunluğu doğal sayı olan dikdörtgenlerin alanı 13 cm²'dir. Kaç farklı dikdörtgen çizilebilir? Aynı soruyu alan 12 cm² için cevaplayınız ve farkın nedenini asal sayı kavramıyla açıklayınız.", "13 asal olduğu için yalnızca 1 × 13 → 1 dikdörtgen. 12 için 1 × 12, 2 × 6, 3 × 4 → 3 dikdörtgen. Asal sayıların yalnızca iki çarpanı olduğundan tek çarpım şekli vardır."]
  ],
  t1k4: [
    ["Bir halk otobüsü duraktan 12 dakikada bir, diğeri 18 dakikada bir kalkıyor. İki otobüs saat 07.00'de birlikte kalktı. a) Bir sonraki birlikte kalkış saati kaçtır? b) Saat 09.00'a kadar (09.00 dahil) kaç kez daha birlikte kalkarlar? İşlemlerinizi gösteriniz.", "a) Ortak katların en küçüğü: 12'nin katları 12, 24, 36...; 18'in katları 18, 36... → 36 dakika. Saat 07.36. b) 07.36, 08.12, 08.48 → 3 kez (09.24 sınırı aşar)."],
    ["Kerem'in 24 kırmızı ve 36 mavi boncuğu var. Boncukları her kolyede eşit sayıda kırmızı ve eşit sayıda mavi olacak şekilde, hiç boncuk artmadan en çok sayıda kolyeye dağıtmak istiyor. a) En çok kaç kolye yapabilir? b) Her kolyede kaç kırmızı, kaç mavi boncuk olur?", "a) 24 ve 36'nın ortak bölenlerinin en büyüğü 12 → 12 kolye. b) Her kolyede 24 ÷ 12 = 2 kırmızı, 36 ÷ 12 = 3 mavi boncuk."],
    ["Bir öğrenci \"İki sayının ortak katlarından biri her zaman bu iki sayının çarpımıdır.\" diyor. Bu iddiayı değerlendiriniz; 4 ve 6 sayıları için en küçük ortak katın çarpımdan küçük olduğunu gösteriniz.", "İddia doğrudur: a · b sayısı hem a'nın hem b'nin katıdır. Ama en küçük ortak kat olmak zorunda değildir: 4 · 6 = 24 ortak kattır, fakat 4 ve 6'nın en küçük ortak katı 12'dir."]
  ],
  t4k1: [
    ["Sınıf başkanı Zeynep, sınıfın en çok hangi sporu sevdiğini öğrenmek istiyor. a) Bu araştırma için uygun bir araştırma sorusu yazınız. b) Toplanacak veri kategorik mi yoksa nicel mi? Gerekçelendiriniz. c) Verileri toplamak için hangi yöntemi kullanabilir?", "a) Örnek: 'Sınıfımızdaki öğrencilerin en sevdiği spor dalı hangisidir?' b) Kategoriktir; cevaplar sayı değil spor adlarıdır (futbol, voleybol...). c) Anket ya da sınıfta el kaldırma ile sayım; sonuçlar sıklık tablosuna yazılır."],
    ["Aşağıdaki araştırma sorularının hangisinde kategorik, hangisinde nicel (sayısal) veri toplanır? Açıklayınız. 1) Öğrenciler okula hangi taşıtla geliyor? 2) Öğrenciler günde kaç dakika kitap okuyor? 3) Öğrencilerin kaç kardeşi var?", "1) Kategorik (otobüs, servis, yürüyerek...). 2) Nicel, sürekli ölçülen bir sayı (dakika). 3) Nicel, sayılabilen kesikli veri (0, 1, 2...)."]
  ],
  t4k2: [
    ["Bir sınıfta yapılan ankette öğrencilerin evcil hayvanları şöyle: Kedi 8, Köpek 5, Kuş 4, Balık 3, Hiç yok 10. a) Bu verileri sütun grafiğiyle göstermek için yatay ve dikey eksenlere ne yazılmalıdır? b) Ankete kaç öğrenci katılmıştır? c) Tepe değer (en çok tekrarlanan kategori) nedir?", "a) Yatay eksene hayvan türleri (kategoriler), dikey eksene öğrenci sayısı yazılır. b) 8 + 5 + 4 + 3 + 10 = 30 öğrenci. c) 'Hiç yok' (10 öğrenci); hayvan türleri içinde ise kedi."],
    ["Bir öğrencinin 5 günde okuduğu sayfa sayıları: 12, 20, 15, 20, 8. a) Açıklık ve aritmetik ortalamayı bulunuz. b) Bir arkadaşı \"Her gün 15 sayfa okumuş.\" diyor. Bu yorumu değerlendiriniz.", "a) Açıklık = 20 − 8 = 12. Ortalama = (12 + 20 + 15 + 20 + 8) ÷ 5 = 75 ÷ 5 = 15. b) Yanlış yorum; ortalama 15'tir ama günlük sayılar farklıdır (8 ile 20 arası). Ortalama, verilerin eşit paylaştırılmış hâlidir."]
  ],
  // ===== MATEMATİK — 1. dönem 2. yazılı =====
  t3k1: [
    ["4,375 sayısında a) 7 rakamının basamak adını ve basamak değerini yazınız. b) Sayıyı kesir toplamı şeklinde (4 + .../10 + .../100 + .../1000) gösteriniz.", "a) 7 yüzdeler basamağındadır; basamak değeri 7/100 = 0,07. b) 4 + 3/10 + 7/100 + 5/1000."]
  ],
  t3k2: [
    ["Bir koşucunun 100 m derecesi 12,476 saniyedir. a) Dereceyi onda birler basamağına, b) yüzde birler basamağına yuvarlayınız. Her birinde hangi basamağa baktığınızı açıklayınız.", "a) Yüzde birler basamağı 7 ≥ 5 → 12,5 sn. b) Binde birler basamağı 6 ≥ 5 → 12,48 sn."]
  ],
  t3k3: [
    ["3 pizza 4 kişiye eşit paylaştırılıyor. a) Kişi başına düşen pizza miktarını kesir ve ondalık gösterimle yazınız. b) Bölme işlemi ile kesir arasındaki ilişkiyi açıklayınız.", "a) 3 ÷ 4 = 3/4 = 0,75 pizza. b) a ÷ b bölme işlemi a/b kesrine eşittir; pay bölünen, payda bölendir."]
  ],
  t3k4: [
    ["Bir bahçenin çevresine 2,4 dam, 350 cm ve 1,8 m uzunluğunda üç parça tel çekiliyor. Toplam tel uzunluğunu metre cinsinden bulunuz; dönüşümleri gösteriniz.", "2,4 dam = 24 m; 350 cm = 3,5 m; 1,8 m. Toplam = 24 + 3,5 + 1,8 = 29,3 m."]
  ],

  // ===== TÜRKÇE — 2. dönem 2. yazılı (ortak sınav, 8 Haziran) =====
  tr1k1: [
    ["\"Babasının sözleri ona çok ağır geldi.\" ve \"Bu çanta çok ağır.\" cümlelerindeki \"ağır\" sözcüğünün anlamlarını karşılaştırınız; hangisinin gerçek, hangisinin mecaz anlamlı olduğunu gerekçesiyle yazınız.", "'Bu çanta çok ağır.' cümlesinde gerçek anlam (tartıda fazla gelen). 'Sözler ağır geldi' cümlesinde mecaz anlam (kırıcı, üzücü); söz tartılamaz, anlam gerçeğinden uzaklaşmıştır."],
    ["\"Açı\" sözcüğünü önce terim anlamıyla, sonra günlük dilde farklı bir anlamla birer cümlede kullanınız.", "Terim (matematik): 'Dik açı 90 derecedir.' Günlük/mecaz: 'Olaya farklı bir açıdan bakmalıyız.'"]
  ],
  tr1k2: [
    ["\"Yüz\" sözcüğünü eş sesli (sesteş) olarak iki farklı anlamda birer cümlede kullanınız. Ardından \"cesur\" sözcüğünün eş anlamlısını ve zıt anlamlısını yazınız.", "Örnek: 'Sınavdan yüz aldım.' (sayı) / 'Yüzünü yıkadı.' (surat) / 'Denizde yüzdük.' (yüzmek). Cesur: eş anlamlısı yürekli/korkusuz, zıt anlamlısı korkak."]
  ],
  tr1k3: [
    ["\"Damlaya damlaya göl olur.\" atasözünü açıklayınız ve bu atasözüne uygun, günlük hayattan bir örnek durum yazınız.", "Küçük birikimler zamanla büyük sonuçlar doğurur. Örnek: Her gün harçlığından biraz biriktiren öğrencinin ay sonunda bisiklet alabilmesi."],
    ["\"Kulak vermek\" ve \"göz atmak\" deyimlerinin anlamlarını yazıp her birini bir cümlede kullanınız.", "Kulak vermek: dikkatle dinlemek ('Öğretmenimizin uyarılarına kulak verdik.'). Göz atmak: kısaca bakmak ('Sınavdan önce notlarıma göz attım.')."]
  ],
  tr2k1: [["\"Kitaplık\", \"Ankara\", \"sevgi\" ve \"ağaçlar\" sözcüklerini isim türlerine göre (özel/cins, somut/soyut, tekil/çoğul) sınıflandırınız.", "Kitaplık: cins, somut, tekil. Ankara: özel, somut, tekil. Sevgi: cins, soyut, tekil. Ağaçlar: cins, somut, çoğul."]],
  tr2k2: [["\"Bahçedeki üç yaşlı ağaç bu kış kurudu.\" cümlesindeki sıfatları bulup türlerini (niteleme/belirtme) yazınız.", "üç: belirtme sıfatı (sayı sıfatı); yaşlı: niteleme sıfatı; bu: belirtme sıfatı (işaret sıfatı). 'Bahçedeki' de sıfat görevinde (-ki eki)."]],
  tr2k3: [["\"O, bunu kimseye söylemedi; ben de seninle konuştum.\" cümlesindeki zamirleri bulup türlerini yazınız.", "O, ben, sen(inle): kişi zamirleri. Bunu: işaret zamiri. Kimse(ye): belgisiz zamir."]],
  tr2k4: [["\"Eyvah! Sınava geç kaldım ama hocam beni anlayışla karşıladı, sonra sınavıma girdim.\" cümlesindeki ünlem, bağlaç ve edatları bulunuz.", "Ünlem: Eyvah. Bağlaç: ama. Edat: (anlayış)la — 'ile' edatı. 'sonra' burada zarf görevindedir."]],
  tr3k1: [["\"Gözlükçüler\" sözcüğünü kök ve eklerine ayırınız; eklerin yapım eki mi çekim eki mi olduğunu belirtiniz.", "göz (kök) + -lük (yapım) + -çü (yapım) + -ler (çekim, çoğul)."]],
  tr4k1: [["\"Yağmur yağdığı için maç ertelendi.\" ve \"Maçı izlemek için stadyuma gitti.\" cümlelerindeki anlam ilişkilerini yazıp farkı açıklayınız.", "Birincisi neden-sonuç (maçın ertelenme nedeni yağmur). İkincisi amaç-sonuç (stadyuma gitme amacı maçı izlemek). 'Amacıyla' sözcüğü ikinciye uyar, birincisine uymaz."]],
  tr4k2: [["Okulunuzla ilgili biri öznel, biri nesnel iki yargı yazınız ve hangisinin hangisi olduğunu gerekçelendiriniz.", "Nesnel: 'Okulumuzda 24 derslik var.' (sayılıp doğrulanabilir). Öznel: 'Okulumuz şehrin en güzel okulu.' (kişisel görüş, kanıtlanamaz)."]],
  tr4k3: [["Aşağıdaki paragrafın konusunu ve ana düşüncesini yazınız: \"Kitap okumak insanın kelime hazinesini zenginleştirir. Okuyan kişi farklı hayatları tanır, olaylara başka gözlerle bakmayı öğrenir. Bu yüzden her gün biraz kitap okumak hepimiz için yararlıdır.\"", "Konu: kitap okumak. Ana düşünce: Her gün kitap okumak kişiyi geliştirdiği için herkes için yararlıdır."]],
  tr4k4: [["Okuduğunuz bir hikâyenin olay, yer, zaman ve kişiler unsurlarını yazınız.", "Öğrencinin seçtiği hikâyeye göre değerlendirilir: olay (ne oldu), yer (nerede), zaman (ne zaman), kişiler (kimler) dört unsurun her biri doğru belirtilmelidir."]],
  tr5k1: [["\"Ay, gökyüzünden bize gülümsüyordu.\" ve \"Kardeşim aslan gibi güçlü.\" cümlelerindeki söz sanatlarını adlandırıp açıklayınız.", "Birinci: kişileştirme; gülümsemek insana ait bir özelliktir, Ay'a verilmiştir. İkinci: benzetme; kardeş güç yönünden aslana benzetilmiş, 'gibi' benzetme edatı kullanılmıştır."]],
  tr6k1: [["\"Bende yarın sinemaya gelicem, sende gelirmisin?\" cümlesindeki yazım yanlışlarını bulup doğrusunu yazınız.", "Doğrusu: 'Ben de yarın sinemaya geleceğim, sen de gelir misin?' — bağlaç olan 'de' ayrı yazılır; 'gelicem' yerine 'geleceğim'; soru eki 'mi' ayrı yazılır."]],
  tr6k2: [["\"Pazardan elma armut ve muz aldık sonra eve döndük\" cümlesini gerekli noktalama işaretlerini koyarak yeniden yazınız ve kullandığınız işaretlerin görevini açıklayınız.", "'Pazardan elma, armut ve muz aldık; sonra eve döndük.' Virgül eş görevli sözcükleri ayırır; noktalı virgül (ya da virgül) sıralı cümleleri ayırır; nokta cümle sonuna konur."]]
});
