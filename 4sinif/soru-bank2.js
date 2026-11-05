// 4. sınıf ek soru bankası (2. tur) — Türkçe ve Matematik. Biçim: soru | doğru | yanlış1 ; yanlış2 ; yanlış3 | çözüm
(function () {
const E = window.SORU_EK = window.SORU_EK || {};
const ek = (id, m) => { E[id] = (E[id] ? E[id] + "\n" : "") + m; };
ek("t3", `"Kardeşim bana kırıldı." cümlesinde "kırılmak" hangi anlamdadır? | Mecaz anlam | Gerçek anlam ; Terim anlam | Kardeş gerçekten kırılmadı; gücendi, üzüldü.
"Bardak yere düşüp kırıldı." cümlesinde "kırılmak" hangi anlamdadır? | Gerçek anlam | Mecaz anlam ; Terim anlam | Bardak gerçekten parçalandı.
Hangisi coğrafya terimidir? | Ova | Kalem ; Neşe ; Masal | Ova, coğrafyaya ait bir terimdir.
"Ateş gibi bir çocuk." sözünde "ateş" neyi anlatır? | Çok hareketli ve zeki olmayı | Sıcak olmayı ; Yanmayı | Mecaz anlamda canlı, çevik demektir.
"Sobada ateş yanıyor." cümlesinde "ateş" hangi anlamdadır? | Gerçek anlam | Mecaz anlam ; Terim anlam | Ateş sözcüğü ilk anlamıyla kullanılmış.
"Bu iş çok ağır geldi." cümlesinde "ağır" ne anlama gelir? | Zor, yorucu | Kilosu fazla ; Yavaş | Mecaz anlamda zorluk anlatılıyor.
Hangisi spor terimidir? | Ofsayt | Bulut ; Şeker ; Defter | Ofsayt futbolda kullanılan bir terimdir.
"Arkadaşına tatlı dil kullandı." cümlesinde "tatlı dil" ne demektir? | Kibar, gönül alıcı konuşma | Şekerli yiyecek ; Kırmızı dil | Mecaz anlamlı bir söz grubudur.
"Toplama" sözcüğü hangi cümlede terim anlamıyla kullanılmıştır? | Matematik dersinde toplama işlemi yaptık. | Annem çamaşırları toplamamı istedi. ; Bahçede yaprak toplama yarışı yaptık. | Matematik terimi olarak kullanılmış.
"Yüzü güldü." cümlesi ne anlatır? | Sevindiğini, mutlu olduğunu | Yüzünün yara olduğunu ; Ağladığını | Mecaz anlamlı bir anlatımdır.
"Kuru ekmek" sözünde "kuru" hangi anlamdadır? | Gerçek anlam | Mecaz anlam ; Terim anlam | Ekmeğin nemsiz olduğu anlatılıyor.
"Kuru bir konuşma yaptı." cümlesinde "kuru" ne anlama gelir? | Sıkıcı, duygusuz | Nemsiz ; Islak | Konuşmanın nemi olmaz; mecaz anlamdır.
"Gözden düşmek" ne demektir? | Değerini, sevgisini kaybetmek | Gözünden bir şey düşürmek ; Yere düşmek | Bu bir deyimdir.
Hangisi müzik terimidir? | Ritim | Masa ; Buluş ; Pazar | Ritim müzikte vuruşların düzenidir.
"Sıcak bir yuva" sözünde "sıcak" ne anlatır? | Sevgi dolu, huzurlu | Isısı yüksek ; Yanmış | Mecaz anlamda kullanılmış.`);
ek("t6", `"Mavi gökyüzü" sözünde rengi bildiren sözcük hangisidir? | Mavi | Gökyüzü ; İkisi de değil | Mavi, gökyüzünün rengini anlatır.
"Dört tekerlekli araba" sözünde sayı bildiren sözcük hangisidir? | Dört | Tekerlekli ; Araba | Dört, sayı bildirir.
"Kare masa" sözünde "kare" neyi bildirir? | Biçimi | Rengi ; Sayısı | Kare bir biçimdir.
Hangisinde tat bildiren bir sözcük vardır? | Ekşi limon | Uzun yol ; Sarı çiçek | Ekşi bir tattır.
Hangisinde ses bildiren bir özellik vardır? | Tiz ses | Yumuşak kazak ; Ağır çanta | Tiz ince ses demektir.
"Yaramaz kedi" sözündeki "yaramaz" neyi anlatır? | Kedinin davranışını | Kedinin rengini ; Kedinin sayısını | Davranış bildiren bir özelliktir.
"Birinci sıra" sözündeki "birinci" neyi bildirir? | Sırayı | Rengi ; Biçimi | Sıra sayısıdır.
Hangisi "sıcak" kelimesinin zıt anlamlısıdır? | Soğuk | Ilık ; Yakıcı | Sıcak–soğuk zıt anlamlıdır.
Hangisi "yeni" kelimesinin zıt anlamlısıdır? | Eski | Taze ; Güzel | Yeni–eski zıt anlamlıdır.
Hangisi "kolay" kelimesinin zıt anlamlısıdır? | Zor | Basit ; Hafif | Kolay–zor zıt anlamlıdır.
"Pürüzlü taş" sözündeki özellik hangi duyuyla anlaşılır? | Dokunma | Koku alma ; İşitme | Pürüzlü yüzey dokunarak anlaşılır.
"Mis kokulu sabun" sözünde varlığın hangi özelliği anlatılıyor? | Kokusu | Rengi ; Sayısı | Koku bildiren bir özelliktir.`);
ek("t8", `"Bahçede çocuklar top oynuyor." cümlesinde "Kim oynuyor?" sorusunun cevabı nedir? | Çocuklar | Bahçede ; Top ; Oynuyor | İşi yapanı bulduk.
"Annem sabah ekmek aldı." cümlesinde "Ne aldı?" sorusunun cevabı nedir? | Ekmek | Annem ; Sabah ; Aldı | Alınan şey ekmektir.
"Annem sabah ekmek aldı." cümlesinde "Ne zaman aldı?" sorusunun cevabı nedir? | Sabah | Annem ; Ekmek ; Aldı | Zamanı bildirir.
Hangisi tam bir cümledir? | Kuşlar gökyüzünde uçuyor. | Kuşlar gökyüzünde ; Uçuyor kuşlar ve ; Gökyüzünde ve | Cümle bir yargı bildirir.
"Ödevini yaptın mı?" cümlesi nasıl bir cümledir? | Soru cümlesi | Emir cümlesi ; Olumsuz cümle | "mı" soru eki vardır.
"Lütfen kapıyı kapat." cümlesi nasıl bir cümledir? | Rica / emir cümlesi | Soru cümlesi ; Olumsuz cümle | Bir işin yapılması isteniyor.
"Yarın sinemaya gideceğiz." cümlesi hangi zamandır? | Gelecek zaman | Geçmiş zaman ; Şimdiki zaman | "-ecek" gelecek zaman ekidir.
"Kardeşim uyuyor." cümlesi hangi zamandır? | Şimdiki zaman | Gelecek zaman ; Geçmiş zaman | "-yor" şimdiki zaman ekidir.
"Geçen yıl Antalya'ya gittik." cümlesi hangi zamandır? | Geçmiş zaman | Gelecek zaman ; Şimdiki zaman | "-tik" geçmiş zaman ekidir.
Hangisi olumsuz bir cümledir? | Bugün yağmur yağmadı. | Bugün yağmur yağdı. ; Bugün yağmur yağacak. | "-ma" olumsuzluk ekidir.
"Okula, kitap, gittim, ile" kelimeleriyle anlamlı cümle kurulursa hangisi doğru olur? | Okula kitapla gittim. | Gittim okula kitap ile. ; Kitap okula ile gittim. | Kurallı cümlede yüklem sondadır.
"Ne güzel bir gün!" cümlesi ne bildirir? | Sevinç, beğeni | Soru ; Emir | Ünlem cümlesidir.`);
ek("t9", `"Hava güzel olursa pikniğe gideriz." cümlesinde ne anlatılıyor? | Koşul (şart) | Karşılaştırma ; Neden | "-sa/-se" koşul bildirir.
"Su içmek için mutfağa gitti." cümlesinde ne anlatılıyor? | Amaç | Koşul ; Karşılaştırma | "İçin" amaç bildirir.
"Yorulduğu için erken uyudu." cümlesinde ne anlatılıyor? | Neden-sonuç | Amaç ; Koşul | Uyumanın nedeni yorgunluktur.
"Ali, Can'dan daha hızlı koşar." cümlesinde ne yapılmıştır? | Karşılaştırma | Tanım ; Soru | "Daha" karşılaştırma bildirir.
Hangisi nesnel bir cümledir? | Bir hafta yedi gündür. | Pazartesi en sıkıcı gündür. ; Hafta sonları çok güzeldir. | Kanıtlanabilir bilgidir.
Hangisi öznel bir cümledir? | Bu çizgi film çok komikti. | Çizgi film 20 dakika sürdü. ; Çizgi film saat 5'te başladı. | Komik bulmak kişiden kişiye değişir.
"Galiba yarın kar yağacak." cümlesi ne bildirir? | Tahmin (olasılık) | Kesinlik ; Emir | "Galiba" tahmin bildirir.
"Mutlaka ödevini yap." cümlesi ne bildirir? | Kesinlik / zorunluluk | Olasılık ; Soru | "Mutlaka" kesinlik bildirir.
"Keşke denize gitseydik." cümlesi ne bildirir? | Dilek, istek | Kesinlik ; Bilgi | "Keşke" dilek bildirir.
"Annem kadar güzel yemek yapan yok." cümlesinde ne vardır? | Karşılaştırma | Koşul ; Amaç | "Kadar" karşılaştırma bildirir.
"Yağmur yağdığı için ıslandık." cümlesinde sonuç nedir? | Islandık | Yağmur yağdı ; İçin | Islanmak yağmurun sonucudur.`);
ek("t10", `"Ankara, 10 Mart 2026. Sevgili teyzeciğim..." diye başlayan metin hangi türdedir? | Mektup | Şiir ; Masal ; Fabl | Mektupta yer, tarih ve hitap bulunur.
Kısa, güldüren ve düşündüren, Nasreddin Hoca ile özdeşleşmiş türe ne denir? | Fıkra | Şiir ; Biyografi ; Günlük | Fıkralar kısa ve esprilidir.
Atasözleri nasıl sözlerdir? | Atalarımızın deneyimlerinden doğan öğüt veren sözler | Uzun hikâyeler ; Şarkı sözleri ; Haber metinleri | Örnek: "Damlaya damlaya göl olur."
Bir ürünün tanıtıldığı ve satın almaya özendiren metin hangisidir? | Reklam | Masal ; Anı ; Şiir | Reklamlar ikna etmeye çalışır.
Bir yemeğin nasıl yapılacağını adım adım anlatan metin hangi türdedir? | Tarif (yönerge) metni | Şiir ; Masal ; Fabl | Yönerge metinleri iş sırası verir.
"Evvel zaman içinde, kalbur saman içinde..." sözüyle hangi tür başlar? | Masal | Haber ; Mektup ; Biyografi | Bu bir masal tekerlemesidir.
Kendi hayatını kendisi anlatan bir yazının adı nedir? | Otobiyografi | Biyografi ; Fabl ; Haber | Biyografiyi başkası yazar.
Şiirde her satıra ne denir? | Dize | Paragraf ; Kıta ; Başlık | Dizeler birleşip kıtaları oluşturur.
Şiirde dizelerden oluşan her bölüme ne denir? | Kıta (dörtlük) | Paragraf ; Sayfa ; Satır | Dört dizeli kıtalara dörtlük denir.
Gazetede "Okulumuzda Bilim Şenliği Yapıldı" başlıklı metin hangi türdedir? | Haber | Masal ; Fabl ; Şiir | Gerçek ve güncel olay anlatıyor.
Bir yeri gezip gördüklerini anlatan yazıya ne denir? | Gezi yazısı | Masal ; Fabl ; Tekerleme | Gezi yazısında gözlemler anlatılır.
Hangisi bilgilendirici metnin özelliğidir? | Gerçek bilgiler içermesi | Konuşan hayvanlar ; Sihirli olaylar ; Tekerlemeyle başlaması | Bilgilendirici metinler öğretir.`);
ek("t11", `"Ece her gün beş dakika kitap okudu, okuma hızı arttı." Bu metnin konusu nedir? | Düzenli okumanın faydası | Ece'nin okul çantası ; Kitapçının adresi | Konu metnin üzerinde durduğu şeydir.
"Kaplumbağa yavaştı ama hiç durmadı ve yarışı kazandı." Ana fikir nedir? | Azimle çalışan başarır | Kaplumbağalar yavaştır ; Yarışlar uzundur | Azmin önemi anlatılıyor.
"Mert yere düşen çöpü alıp çöp kutusuna attı." Bu metnin ana fikri nedir? | Çevreyi temiz tutmalıyız | Çöp kutuları mavidir ; Mert uzun boyludur | Çevre bilinci öğütleniyor.
"Zeynep, arkadaşının kalemini kırdığı için özür diledi. Arkadaşı onu affetti." Ana fikir nedir? | Hata yapınca özür dilemeliyiz | Kalemler kolay kırılır ; Zeynep'in kalemi yoktur | Özür dilemenin önemi anlatılıyor.
Bir metinde ana fikir ile ilgisi olmayan cümle ne yapar? | Anlam bütünlüğünü bozar | Metni güzelleştirir ; Ana fikri güçlendirir | Akışı bozan cümle çıkarılmalıdır.
"Arılar çiçeklerden bal yapar. Bal çok besleyicidir. Arıları korumalıyız." Ana fikir nedir? | Arıları korumalıyız | Bal tatlıdır ; Çiçekler renklidir | Son cümle öğüt veriyor.
Metnin başlığını seçerken neye dikkat ederiz? | Konuya uygun olmasına | En uzun başlık olmasına ; Komik olmasına | Başlık metni anlatmalıdır.
"Doğru söyleyeni dokuz köyden kovarlar." atasözü hangi konuyla ilgilidir? | Doğruluk | Tembellik ; Temizlik | Doğru sözün bazen hoş karşılanmadığını anlatır.
"Dedem her sabah yürüyüş yapar. Bu yüzden çok sağlıklıdır." Bu metnin konusu nedir? | Spor yapmanın sağlığa faydası | Dedemin evi ; Sabah kahvaltısı | Yürüyüşün sağlığa etkisi anlatılıyor.
Yardımcı fikirler ne işe yarar? | Ana fikri açıklar ve destekler | Konuyu değiştirir ; Metni bitirir | Ana fikri güçlendiren cümlelerdir.
"Sınıfta herkes söz alarak konuştu. Ders çok verimli geçti." Ana fikir nedir? | Kurallara uymak düzen sağlar | Ders uzun sürdü ; Sınıf büyüktür | Söz alma kuralı dersi verimli yaptı.`);
ek("t12", `Hikâyede olayın geçtiği zamanı bulmak için hangi soruyu sorarız? | Ne zaman? | Nerede? ; Kim? ; Nasıl? | Zaman unsuru bu sorunun cevabıdır.
"Kış tatilinde köyde dedemle kardan adam yaptık." cümlesinde "Kim ile?" sorusunun cevabı nedir? | Dedemle | Köyde ; Kış tatilinde ; Kardan adam | Birlikte yapılan kişi dedemdir.
"Kış tatilinde köyde dedemle kardan adam yaptık." cümlesinde "Ne yaptık?" sorusunun cevabı nedir? | Kardan adam yaptık | Köye gittik ; Tatil yaptık | Olay kardan adam yapmaktır.
Hikâyenin kahramanları neler olabilir? | İnsanlar ya da hayvanlar | Sadece eşyalar ; Sadece sayılar | Olayları yaşayan varlıklardır.
"Sabah okul yolunda Elif yere düşen bir cüzdan buldu ve polise götürdü." Bu cümlede yer unsuru nedir? | Okul yolunda | Sabah ; Elif ; Polise götürdü | "Nerede?" sorusunun cevabıdır.
Aynı cümlede olay nedir? | Elif'in bulduğu cüzdanı polise götürmesi | Sabah olması ; Okul yolu | Olay, hikâyede yaşanan durumdur.
Aynı olayda Elif hangi değeri gösterir? | Dürüstlük | Tembellik ; Kıskançlık | Bulduğu eşyayı sahibine ulaştırmak dürüstlüktür.
Hikâyenin hangi bölümünde sorun ortaya çıkar? | Gelişme | Giriş ; Başlık | Gelişmede olaylar karışır.
"Neden?" sorusu hikâyede neyi bulmamızı sağlar? | Olayın sebebini | Olayın yerini ; Kişinin adını | Sebep–sonuç ilişkisini gösterir.
"Can, koşarak gelen köpekten korkup ağaca tırmandı." Can neden ağaca tırmandı? | Köpekten korktuğu için | Elma toplamak için ; Oyun oynamak için | Sebep cümlede verilmiş.
5N1K sorularından "Nasıl?" neyi sorar? | Olayın ne şekilde olduğunu | Olayın yerini ; Olayın zamanını | Örnek: "Sessizce yürüdü."`);
ek("t13", `"Kitap, defter ve kalem aldım." cümlesinde virgül neden kullanılmıştır? | Eş görevli kelimeleri ayırmak için | Cümle bittiği için ; Soru sorulduğu için | Sıralanan kelimeler virgülle ayrılır.
"Annem ( ) Yemek hazır ( ) dedi." boşluklara sırasıyla ne gelir? | İki nokta ve nokta | Virgül ve soru işareti ; Ünlem ve virgül | Konuşmadan önce iki nokta konur.
"Hangi kitabı okuyorsun ( )" sonuna ne gelir? | Soru işareti | Nokta ; Ünlem | "Hangi" soru sözcüğüdür.
"Aman ( ) dikkat et" cümlesinde boşluğa ne gelir? | Ünlem | Soru işareti ; Nokta | Uyarı ve korku bildirir.
"Ayşe ( nin ) kitabı" ifadesinde özel isme gelen ek nasıl ayrılır? | Kesme işaretiyle: Ayşe'nin | Virgülle ; Noktayla | Özel isimlere gelen ekler kesme işaretiyle ayrılır.
Hangisinde kesme işareti yanlış kullanılmıştır? | Masa'ya koydum. | Ankara'ya gittim. ; Elif'in çantası. | Masa özel isim değildir.
Hangisinde noktalama doğru kullanılmıştır? | Eyvah, süt taştı! | Eyvah süt taştı? ; Eyvah, süt taştı, | Korku ünlemle gösterilir.
"Dr ( ) Ali Bey" kısaltmasında boşluğa ne gelir? | Nokta | Virgül ; Soru işareti | Kısaltmalardan sonra nokta konur.
Mektuplarda hitaptan sonra hangi işaret konur? | Virgül | Soru işareti ; Ünlem | "Sevgili dedeciğim," gibi.
Rakamla yazılan tarihlerde gün, ay ve yıl arasına hangi işaret konur? | Nokta (14.11.2026) | Virgül ; Soru işareti | Tarih yazımında nokta kullanılır.
Hangi cümlenin sonuna nokta konur? | Kedim pencerede uyuyor | Kedin nerede ; Ne tatlı bir kedi | Bilgi veren cümleler nokta ile biter.`);
ek("t14", `Hangisinin yazımı doğrudur? | Hiçbir | Hiç bir ; Hiçbirr | "Hiçbir" bitişik yazılır.
Hangisinin yazımı doğrudur? | Bir şey | Birşey ; Bir-şey | "Bir şey" ayrı yazılır.
Hangisinin yazımı doğrudur? | Her şey | Herşey ; Her-şey | "Her şey" ayrı yazılır.
Hangisinin yazımı doğrudur? | Yalnızca | Yanlızca ; Yalnızça | "Yalnızca" doğrudur.
Hangisinde "ki" doğru yazılmıştır? | Duydum ki geliyormuş. | Duydumki geliyormuş. ; Duydum-ki geliyormuş. | Bağlaç olan "ki" ayrı yazılır.
Hangisinin yazımı doğrudur? | Kirpi | Kirbi ; Kipri | Doğrusu "kirpi"dir.
Hangisinin yazımı doğrudur? | Eşofman | Eşortman ; Eşofmen | Doğrusu "eşofman"dır.
Hangisinin yazımı doğrudur? | Kilometre | Kilimetre ; Kilomtre | Doğrusu "kilometre"dir.
Hangisinin yazımı doğrudur? | Sandviç | Sandaviç ; Sandiviç | Doğrusu "sandviç"tir.
Hangisi yanlış yazılmıştır? | Ankarada oturuyoruz. | Ankara'da oturuyoruz. ; İzmir'e gittik. | Özel isme gelen ek kesme işaretiyle ayrılır.
Sayılar yazıyla nasıl yazılır? | Ayrı: "yüz yirmi beş" | Bitişik: "yüzyirmibeş" ; Kısa çizgiyle: "yüz-yirmi-beş" | Sayılar ayrı yazılır.
Hangisinin yazımı doğrudur? | Herkes geldi mi? | Herkez geldimi? ; Herkes geldimi? | "mi" ayrı yazılır, "herkes" doğrudur.`);
ek("t16", `"Ayşe, kütüphanede iki saat ders çalıştı. Sonra arkadaşlarıyla parka gitti." Ayşe önce ne yaptı? | Ders çalıştı | Parka gitti ; Uyudu | Metinde sıralama veriliyor.
"Kerem'in iki kedisi, bir köpeği var. Kedilerden biri beyaz, diğeri siyahtır." Kerem'in kaç hayvanı vardır? | 3 | 2 ; 4 | 2 kedi + 1 köpek = 3.
"Sınıfta 24 öğrenci vardı. Bugün 3'ü hasta olduğu için gelmedi." Bugün sınıfta kaç öğrenci var? | 21 | 24 ; 27 | 24 − 3 = 21.
"Pazar günü hava çok güzeldi. Ailecek pikniğe gittik ve uçurtma uçurduk." Ailenin pikniğe gitmesinin sebebi nedir? | Havanın güzel olması | Okulun açık olması ; Yağmur yağması | Metinden çıkarılır.
"Leyla yemekten sonra dişlerini fırçalar, sonra kitap okuyup uyur." Leyla uyumadan hemen önce ne yapar? | Kitap okur | Dişlerini fırçalar ; Yemek yer | Sıralama: yemek, diş, kitap, uyku.
"Ormandaki yangını gören köylüler hemen itfaiyeyi aradı. İtfaiye gelince yangın söndürüldü." Yangını kim söndürdü? | İtfaiye | Köylüler ; Ormancı | Metinde açıkça belirtiliyor.
"Mehmet koşarken ayakkabısının bağcığı çözüldü ve düştü." Mehmet neden düştü? | Bağcığı çözüldüğü için | Yağmur yağdığı için ; Biri ittiği için | Sebep metinde var.
"Bahçemizdeki elma ağacı bu yıl çok meyve verdi. Elmaları komşularımızla paylaştık." Elmaları ne yaptılar? | Komşularıyla paylaştılar | Sattılar ; Attılar | Metinde paylaşıldığı söyleniyor.
"Çiçekler sulanmadığı için soldu." Çiçeklerin solmasının nedeni nedir? | Sulanmamaları | Çok sulanmaları ; Güneşin olmaması | Sebep cümlede belirtilmiş.
"Kardeşim matematik sınavından 100 aldı. Annem ona sarıldı." Annem neden kardeşime sarıldı? | Sınavda başarılı olduğu için | Hasta olduğu için ; Doğum günü olduğu için | Metinden çıkarılır.
"Tren saat 09.00'da kalkacaktı. Biz istasyona 08.45'te vardık." Trenin kalkmasına kaç dakika vardı? | 15 dakika | 45 dakika ; 5 dakika | 09.00 − 08.45 = 15 dakika.`);
ek("d16", `Hangisinin tüm kenarları eşittir? | Kare | Dikdörtgen ; Çeşitkenar üçgen ; Yamuk | Karenin 4 kenarı da eşittir.
Bir dikdörtgenin uzun kenarı 9 cm, kısa kenarı 4 cm'dir. Çevresi kaç cm'dir? | 26 | 13 ; 36 ; 22 | 2 × (9 + 4) = 26.
Bir karenin çevresi 36 cm ise bir kenarı kaç cm'dir? | 9 | 6 ; 12 ; 18 | 36 ÷ 4 = 9.
Kenar uzunlukları 6 cm, 6 cm ve 6 cm olan üçgen nasıl bir üçgendir? | Eşkenar | İkizkenar ; Çeşitkenar ; Dik | Üç kenarı da eşittir.
Kenarları 5 cm, 5 cm ve 3 cm olan üçgen nasıl bir üçgendir? | İkizkenar | Eşkenar ; Çeşitkenar ; Kare | İki kenarı eşittir.
Kenarları 3 cm, 4 cm ve 5 cm olan üçgen kenarlarına göre nasıl bir üçgendir? | Çeşitkenar | Eşkenar ; İkizkenar ; Kare | Kenarların hepsi farklıdır.
Dikdörtgenin karşılıklı kenarları için hangisi doğrudur? | Eşit ve paraleldir | Farklı uzunluktadır ; Kesişir ; Hiç yoktur | Dikdörtgende karşılıklı kenarlar eşittir.
Bir kenarı 7 cm olan eşkenar üçgenin çevresi kaç cm'dir? | 21 | 14 ; 28 ; 49 | 7 × 3 = 21.
Çevresi 30 cm olan bir dikdörtgenin kısa kenarı 5 cm ise uzun kenarı kaç cm'dir? | 10 | 25 ; 15 ; 20 | 30 ÷ 2 = 15; 15 − 5 = 10.
Bir bahçenin etrafına tel çekmek için neyini bilmemiz gerekir? | Çevresini | Rengini ; Ağaç sayısını ; Yaşını | Tel bahçenin çevresine çekilir.
Kare ile dikdörtgenin ortak özelliği hangisidir? | Dört açısı da diktir | Dört kenarı da eşittir ; Üç kenarı vardır ; Köşesi yoktur | İkisinin de açıları 90°'dir.
Üçgenin kaç köşesi vardır? | 3 | 4 ; 2 ; 5 | Üçgenin 3 köşesi, 3 kenarı vardır.`);
ek("d17", `Bir doğru üzerinde iki noktayla sınırlanan kısma ne denir? | Doğru parçası | Işın ; Açı ; Doğru | AB doğru parçası A ve B ile sınırlıdır.
Işının kaç başlangıç noktası vardır? | 1 | 2 ; 0 ; Sonsuz | Işın bir noktadan başlar.
Saat 9:00'da akrep ile yelkovan arasındaki açı nasıldır? | Dik açı | Dar açı ; Geniş açı ; Doğru açı | 9:00'da 90° vardır.
Saat 1:00'de akrep ile yelkovan arasındaki açı nasıldır? | Dar açı | Dik açı ; Geniş açı ; Doğru açı | 30° dar açıdır.
Saat 5:00'te akrep ile yelkovan arasındaki açı nasıldır? | Geniş açı | Dar açı ; Dik açı ; Tam açı | 150° geniş açıdır.
45° hangi tür açıdır? | Dar açı | Dik açı ; Geniş açı ; Doğru açı | 90°'den küçüktür.
135° hangi tür açıdır? | Geniş açı | Dar açı ; Dik açı ; Doğru açı | 90° ile 180° arasındadır.
Kitap sayfasının köşesi hangi açıya örnektir? | Dik açı | Dar açı ; Geniş açı ; Doğru açı | Sayfa köşeleri 90°'dir.
Makasın ağzı biraz açıldığında oluşan açı genellikle nasıldır? | Dar açı | Dik açı ; Doğru açı ; Tam açı | Küçük açıklık dar açıdır.
Birbirini dik kesen iki doğru arasında kaç dik açı oluşur? | 4 | 2 ; 1 ; 3 | Dört köşede de 90° oluşur.
Açılar nasıl isimlendirilir? | Köşe ve kollar üzerindeki harflerle | Renkle ; Sayıyla ; Hiç isimlendirilmez | Örnek: ABC açısı.
Hangisi geniş açı değildir? | 80° | 100° ; 120° ; 170° | 80° dar açıdır.`);
ek("d18", `Hangi büyük harfin dikey simetri doğrusu vardır? | M | F ; J ; L | M ortadan dikey katlanınca iki yanı aynıdır.
Hangi büyük harfin yatay simetri doğrusu vardır? | E | A ; M ; V | E harfi yatay katlanınca alt ve üst eş olur.
Hangisi simetrik bir şekildir? | Kalp | Düzensiz bir leke ; Kırık bir çizgi ; G harfi | Kalp ortadan katlanınca eş olur.
Bir kâğıdı katlayıp kesip açtığımızda iki taraf aynı çıkıyorsa bu neyi gösterir? | Simetri | Ölçme ; Toplama ; Çıkarma | Katlama çizgisi simetri doğrusudur.
Eş küplerle yapılan bir yapıda 4 sıra ve her sırada 3 küp varsa toplam kaç küp vardır? | 12 | 7 ; 16 ; 9 | 4 × 3 = 12.
Her katında 4 küp bulunan 3 katlı bir yapıda kaç küp vardır? | 12 | 7 ; 4 ; 16 | 3 × 4 = 12.
2 × 2 × 2 şeklinde dizilmiş küp yapısında kaç küp vardır? | 8 | 6 ; 4 ; 12 | 2 × 2 × 2 = 8.
Hangi rakamın simetri doğrusu yoktur? | 4 | 0 ; 8 ; 3 | 4 rakamı simetrik değildir. (0 ve 8 simetriktir.)
Bir kelebeğin simetri doğrusu nerededir? | Gövdesinin tam ortasında | Kanadının ucunda ; Antenlerinde ; Hiç yoktur | Gövde iki kanadı ayırır.
Kenarları eşit olmayan bir dikdörtgenin köşegenleri simetri doğrusu mudur? | Hayır | Evet ; Sadece biri ; Her zaman | Köşegen boyunca katlanınca parçalar üst üste gelmez.
Bir yapıda alt katta 6, üst katta 2 küp vardır. Toplam kaç küp vardır? | 8 | 12 ; 4 ; 6 | 6 + 2 = 8.
Düzgün beşgenin kaç simetri doğrusu vardır? | 5 | 1 ; 2 ; 10 | Düzgün çokgenlerde kenar sayısı kadar simetri doğrusu vardır.`);
})();
