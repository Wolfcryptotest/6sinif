// 10. sınıf ek soru bankası — Matematik, Fizik, Kimya, Biyoloji. Biçim: soru | DOĞRU | yanlış1 ; yanlış2 ; yanlış3 | çözüm
window.SORU_EK = Object.assign(window.SORU_EK || {}, {
mat2k2: `Sinüs teoremine göre a / sin A oranı neye eşittir? | 2R (çevrel çemberin çapı) | R ; a·b ; Alan | a/sinA = b/sinB = c/sinC = 2R.
Kosinüs teoremi hangisidir? | a² = b² + c² − 2bc·cos A | a² = b² + c² ; a = b·cos A ; a² = b² − c² | Pisagor'un genelleştirilmiş hâlidir.
İki kenarı 6 ve 8, aralarındaki açı 30° olan üçgenin alanı kaçtır? | 12 | 24 ; 48 ; 6 | Alan = ½·6·8·sin30° = ½·48·½ = 12.
İki kenarı 4 ve 5, aralarındaki açı 90° olan üçgenin alanı kaçtır? | 10 | 20 ; 9 ; 5 | ½·4·5·1 = 10.
b = 3, c = 5 ve A = 60° ise a² kaçtır? | 19 | 34 ; 49 ; 15 | 9 + 25 − 2·3·5·½ = 34 − 15 = 19.
Bir üçgende A = 30°, a = 4 ise çevrel çemberin yarıçapı kaçtır? | 4 | 8 ; 2 ; 16 | a/sinA = 4/0,5 = 8 = 2R → R = 4.
cos 60° değeri kaçtır? | 1/2 | √3/2 ; 1 ; 0 | 60° için cos = 1/2.
sin 90° değeri kaçtır? | 1 | 0 ; 1/2 ; −1 | sin 90° = 1.
Kenarları 3, 4, 5 olan üçgende en büyük açının kosinüsü kaçtır? | 0 | 1 ; 1/2 ; −1 | 25 = 9 + 16 − 24cos → cos = 0, açı 90°.
Eşkenar üçgenin kenarı 2 ise alanı kaçtır? | √3 | 2√3 ; 4 ; 3 | ½·2·2·sin60° = 2·(√3/2) = √3.`,

fiz1k1: `Konum zaman grafiğinin eğimi neyi verir? | Hızı | İvmeyi ; Yolu ; Kuvveti | Eğim = Δx/Δt = hız.
Hız zaman grafiğinin eğimi neyi verir? | İvmeyi | Konumu ; Hızı ; Kütleyi | Eğim = Δv/Δt = ivme.
Hız zaman grafiğinin altında kalan alan neyi verir? | Yer değiştirmeyi | İvmeyi ; Kuvveti ; Zamanı | Alan = v·t.
Durgun hâlden 2 m/s² ivmeyle hızlanan cisim 5 saniye sonunda kaç m/s hıza ulaşır? | 10 | 2,5 ; 7 ; 25 | v = a·t = 2·5.
Durgun hâlden 4 m/s² ivmeyle hızlanan cisim 3 saniyede kaç m yol alır? | 18 | 12 ; 36 ; 24 | x = ½·a·t² = ½·4·9 = 18.
20 m/s hızla giden araç düzgün yavaşlayarak 4 saniyede duruyor. İvmesinin büyüklüğü kaç m/s²'dir? | 5 | 80 ; 4 ; 20 | a = Δv/Δt = 20/4.
İvmesi sıfır olan hareket hangisidir? | Düzgün doğrusal hareket | Düzgün hızlanan hareket ; Serbest düşme ; Düzgün yavaşlayan hareket | Hız sabittir.
Serbest düşmede cismin ivmesi yaklaşık kaçtır? | 10 m/s² | 0 ; 1 m/s² ; 100 m/s² | Yer çekimi ivmesi g ≈ 9,8 m/s².
Ortalama hız nasıl bulunur? | Toplam yer değiştirme / toplam zaman | Toplam yol × zaman ; İlk hız + son hız ; İvme × zaman | Vektörel bir büyüklüktür.
36 km/h hız kaç m/s'dir? | 10 | 36 ; 3,6 ; 100 | 36 ÷ 3,6 = 10.`,

fiz1k2: `Eylemsizlik ilkesi Newton'un kaçıncı yasasıdır? | 1. yasa | 2. yasa ; 3. yasa ; Kütle çekim yasası | Net kuvvet sıfırsa cisim hâlini korur.
F = m·a bağıntısı Newton'un kaçıncı yasasıdır? | 2. yasa | 1. yasa ; 3. yasa ; 4. yasa | Dinamiğin temel prensibi.
Etki-tepki kuvvetleri için hangisi doğrudur? | Eşit büyüklükte, zıt yönlü ve farklı cisimlere etki eder | Aynı cisme etki eder ; Farklı büyüklüktedir ; Aynı yönlüdür | Newton'un 3. yasası.
5 kg kütleli cisme 20 N net kuvvet etki ederse ivmesi kaçtır? | 4 m/s² | 100 m/s² ; 0,25 m/s² ; 15 m/s² | a = F/m = 20/5.
Otobüs aniden fren yaptığında yolcuların öne doğru savrulması hangi yasayla açıklanır? | Eylemsizlik (1. yasa) | 2. yasa ; 3. yasa ; Kütle çekim yasası | Yolcular hareket hâlini korumak ister.
Roketin yükselmesi hangi yasayla açıklanır? | Etki-tepki (3. yasa) | Eylemsizlik ; Arşimet ilkesi ; Pascal ilkesi | Gazlar aşağı itilir, roket yukarı gider.
Yüzeyde sabit hızla çekilen cisme uygulanan kuvvet 10 N ise sürtünme kuvveti kaç N'dur? | 10 | 0 ; 20 ; 5 | Sabit hızda net kuvvet sıfırdır.
Kütlesi 60 kg olan bir kişinin Dünya'daki ağırlığı kaç N'dur? (g = 10 m/s²) | 600 | 60 ; 6 ; 6000 | G = m·g.
Sürtünme kuvveti neye bağlı değildir? | Yüzeylerin temas alanının büyüklüğüne | Yüzeylerin cinsine ; Dik tepki kuvvetine ; Yüzeyin pürüzlülüğüne | Fs = k·N.
Net kuvvetin sıfır olduğu ve cismin sabit hızla gittiği durum için ne söylenir? | Cisim dengededir | Cisim hızlanmaktadır ; Cisim mutlaka duruyordur ; Cisim yavaşlamaktadır | Dinamik dengedir.`,

fiz2k1: `20 N'luk kuvvetle cisim kuvvet doğrultusunda 3 m çekilirse yapılan iş kaç J'dür? | 60 | 23 ; 6,67 ; 17 | W = F·x.
Gücün birimi hangisidir? | Watt | Joule ; Newton ; Pascal | 1 W = 1 J/s.
1200 J'lük iş 1 dakikada yapılırsa güç kaç W'tır? | 20 | 1200 ; 72 000 ; 60 | P = 1200/60.
4 kg kütleli cisim 5 m/s hızla hareket ediyorsa kinetik enerjisi kaç J'dür? | 50 | 20 ; 100 ; 10 | ½·4·25 = 50.
2 kg kütleli cisim 5 m yüksekten serbest bırakılıyor. Yere çarpmadan hemen önceki kinetik enerjisi kaç J'dür? (g = 10, sürtünme yok) | 100 | 10 ; 50 ; 200 | Ep = mgh = 2·10·5 = 100 J tamamen Ek'ye dönüşür.
Mekanik enerjinin korunumu hangi durumda geçerlidir? | Sürtünmesiz ortamda | Her zaman ; Sürtünmeli ortamda ; Sadece durgun cisimlerde | Sürtünme enerjiyi ısıya çevirir.
Bir cismin hızı iki katına çıkarsa kinetik enerjisi kaç katına çıkar? | 4 | 2 ; 8 ; 1 | Ek ∝ v².
Esneklik potansiyel enerjisi hangi cisimde depolanır? | Gerilmiş yay | Hareketli araba ; Yüksekteki taş ; Kaynayan su | Yay sıkıştırılınca ya da gerilince enerji depolar.
Verimi %80 olan bir motora 500 J enerji verilirse kaç J faydalı iş elde edilir? | 400 | 500 ; 100 ; 80 | 500 × 0,8 = 400.
Kuvvet ile hareket yönü arasındaki açı 90° ise yapılan iş nedir? | Sıfır | En büyük ; F·x ; −F·x | cos90° = 0.`,

fiz3k1: `Elektrik akımının birimi nedir? | Amper | Volt ; Ohm ; Watt | I = q/t.
Ohm yasası hangisidir? | V = I·R | P = V·I² ; R = V·I ; I = V·R | Gerilim = akım × direnç.
Direnci 10 Ω olan iletkenin uçları arasındaki gerilim 20 V ise akım kaç A'dır? | 2 | 200 ; 0,5 ; 30 | I = V/R = 20/10.
Seri bağlı 2 Ω ve 3 Ω'luk dirençlerin eşdeğer direnci kaçtır? | 5 Ω | 1,2 Ω ; 6 Ω ; 1 Ω | Seride dirençler toplanır.
Paralel bağlı iki adet 6 Ω'luk direncin eşdeğer direnci kaçtır? | 3 Ω | 12 Ω ; 6 Ω ; 36 Ω | Eşit paralel dirençlerde R/n.
Bir iletkenin direnci neye bağlı değildir? | Uçları arasındaki gerilime | Boyuna ; Kesit alanına ; Cinsine | R = ρ·L/A.
İletkenin boyu iki katına çıkarılırsa direnci nasıl değişir? | İki katına çıkar | Yarıya iner ; Değişmez ; Dört katına çıkar | Direnç boyla doğru orantılıdır.
Akımı ölçen alet devreye nasıl bağlanır? | Seri | Paralel ; Ters ; Bağlanmaz | Ampermetre seri bağlanır.
Gerilimi ölçen alet devreye nasıl bağlanır? | Paralel | Seri ; Hiç bağlanmaz ; Toprağa | Voltmetre paralel bağlanır.
Elektrik enerjisinin evlerde ölçüldüğü birim hangisidir? | Kilovatsaat (kWh) | Volt ; Amper ; Ohm | Faturalar kWh üzerinden hesaplanır.`,

fiz4k1: `Dalganın bir saniyedeki titreşim sayısına ne denir? | Frekans | Periyot ; Genlik ; Dalga boyu | Birimi Hertz'dir.
Bir tam titreşim için geçen süreye ne denir? | Periyot | Frekans ; Genlik ; Hız | T = 1/f.
Dalga hızı formülü hangisidir? | v = λ · f | v = λ / f ; v = f / λ ; v = λ + f | Hız = dalga boyu × frekans.
Ses hangi tür bir dalgadır? | Mekanik ve boyuna | Elektromanyetik ve enine ; Sadece enine ; Işık dalgası | Ses yayılmak için madde ister.
Işık hangi tür dalgadır? | Elektromanyetik ve enine | Mekanik ve boyuna ; Sadece mekanik ; Ses dalgası | Işık boşlukta yayılabilir.
Sesin yüksekliği (inceliği-kalınlığı) neye bağlıdır? | Frekansa | Genliğe ; Ortamın rengine ; Uzaklığa | Yüksek frekans ince ses demektir.
Sesin şiddeti neye bağlıdır? | Genliğe | Frekansa ; Periyoda ; Dalga boyuna | Büyük genlik yüksek ses demektir.
Frekansı 5 Hz, dalga boyu 2 m olan dalganın hızı kaç m/s'dir? | 10 | 2,5 ; 7 ; 0,4 | v = 2·5.
Işığın boşluktaki hızı yaklaşık kaçtır? | 300 000 km/s | 340 m/s ; 1500 m/s ; 3000 km/s | c ≈ 3·10⁸ m/s.
Yankı (eko) hangi olaya örnektir? | Sesin yansıması | Sesin kırılması ; Işığın kırılması ; Sesin soğurulması | Ses engele çarpıp geri döner.`,

kim1k1: `1 mol madde kaç tane tanecik içerir? | 6,02 · 10²³ | 1000 ; 22,4 ; 6,02 · 10¹⁰ | Avogadro sayısıdır.
H₂O'nun mol kütlesi kaç g/mol'dür? (H = 1, O = 16) | 18 | 17 ; 16 ; 34 | 2·1 + 16 = 18.
36 gram su kaç moldür? | 2 | 1 ; 18 ; 0,5 | 36 ÷ 18 = 2.
Normal koşullarda 1 mol gaz kaç litre hacim kaplar? | 22,4 L | 1 L ; 6,02 L ; 24,5 L | NK'da 22,4 L.
Kimyasal tepkimelerde hangisi korunur? | Toplam kütle | Molekül sayısı ; Hacim ; Renk | Kütlenin korunumu yasası.
2H₂ + O₂ → 2H₂O tepkimesinde 2 mol H₂ kaç mol O₂ ile tepkimeye girer? | 1 | 2 ; 4 ; 0,5 | Katsayılar oranı 2:1.
CO₂'nin mol kütlesi kaç g/mol'dür? (C = 12, O = 16) | 44 | 28 ; 32 ; 60 | 12 + 2·16 = 44.
Yanma tepkimesi için hangisi gereklidir? | Oksijen | Azot ; Helyum ; Argon | Yanma oksijenle gerçekleşir.
Asit ile bazın tepkimesine ne denir? | Nötrleşme | Yanma ; Çözünme ; Çökelme | Tuz ve su oluşur.
Çözünme-çökelme tepkimesinde ne oluşur? | Suda çözünmeyen katı (çökelti) | Gaz ; Işık ; Elektrik | Çökelti dibe çöker.`,

kim1k2: `Sabit sıcaklıkta gazın basıncı ile hacmi arasındaki ilişki nedir? | Ters orantılı (Boyle yasası) | Doğru orantılı ; İlişki yoktur ; Karesiyle orantılı | P·V = sabit.
Sabit basınçta gazın hacmi ile mutlak sıcaklığı arasındaki ilişki nedir? | Doğru orantılı (Charles yasası) | Ters orantılı ; İlişki yoktur ; Karesiyle ters orantılı | V/T = sabit.
İdeal gaz denklemi hangisidir? | PV = nRT | P = nRT ; PV = RT/n ; P/V = nRT | n mol sayısı, R gaz sabiti.
0 °C kaç Kelvin'dir? | 273 | 0 ; 100 ; −273 | K = °C + 273.
Gaz tanecikleri arasındaki etkileşim ideal gazda nasıl kabul edilir? | Yok sayılır | Çok güçlüdür ; Sıvılardan fazladır ; Sabit değildir | İdeal gaz varsayımıdır.
Bir gazın basıncı iki katına çıkarılırsa (T sabit) hacmi nasıl değişir? | Yarıya iner | İki katına çıkar ; Değişmez ; Dört katına çıkar | Boyle yasası.
Gazların difüzyon hızı neye bağlıdır? | Mol kütlesine (hafif gaz daha hızlı) | Rengine ; Kabın şekline ; Hiçbir şeye | Graham yasası.
Kapalı bir kaptaki gaz ısıtılırsa basıncı nasıl değişir? | Artar | Azalır ; Değişmez ; Sıfır olur | Gay-Lussac yasası.
Gerçek gazlar hangi koşulda ideale en yakın davranır? | Yüksek sıcaklık, düşük basınç | Düşük sıcaklık, yüksek basınç ; Sıvılaşma noktasında ; 0 K'de | Tanecikler birbirinden uzaktır.
Avogadro yasasına göre aynı koşullarda eşit hacimli gazlar için ne söylenir? | Eşit sayıda tanecik içerir | Eşit kütlededir ; Aynı renktedir ; Aynı yoğunluktadır | V ∝ n.`,

kim2k1: `Bir maddenin başka bir madde içinde homojen dağılmasıyla oluşan karışıma ne denir? | Çözelti | Süspansiyon ; Emülsiyon ; Element | Şekerli su bir çözeltidir.
Çözeltide miktarı fazla olan bileşene ne denir? | Çözücü | Çözünen ; Çökelti ; Tortu | Genellikle sudur.
Kütlece % derişim nasıl hesaplanır? | (Çözünen kütlesi / çözelti kütlesi) · 100 | (Çözücü / çözünen) · 100 ; Çözünen × çözücü ; Mol / hacim | Yüzde derişim.
20 g tuz 80 g suda çözünürse kütlece yüzde derişim kaçtır? | %20 | %25 ; %80 ; %16 | 20/(20+80)·100.
Molarite (M) nedir? | 1 litre çözeltideki çözünenin mol sayısı | 1 kg çözücüdeki gram ; Çözeltinin kütlesi ; Çözünenin kütlesi | M = n / V.
2 mol NaCl 4 L çözeltide çözünmüşse molarite kaçtır? | 0,5 M | 2 M ; 8 M ; 4 M | 2 ÷ 4.
Bir çözeltiye su eklenirse derişimi nasıl değişir? | Azalır | Artar ; Değişmez ; İki katına çıkar | Seyrelme olur.
Doymuş çözelti ne demektir? | Belirli sıcaklıkta çözebileceği en fazla maddeyi çözmüş çözelti | Hiç madde çözmemiş çözelti ; Çok seyreltik çözelti ; Saf su | Daha fazla çözünen çözünmez.
Tuzlu suyun donma noktası saf suya göre nasıldır? | Daha düşüktür | Daha yüksektir ; Aynıdır ; 100 °C'dir | Kışın yollara tuz serpilmesinin nedeni budur.
Su ve zeytinyağı karışımı nasıl bir karışımdır? | Emülsiyon (heterojen) | Çözelti ; Homojen ; Alaşım | Sıvı-sıvı heterojen karışımdır.`,

kim3k1: `Yeşil kimyanın temel amacı nedir? | Çevreye zararsız, atık oluşturmayan kimyasal süreçler geliştirmek | Daha çok atık üretmek ; Sadece maliyeti artırmak ; Fosil yakıt kullanımını artırmak | Önleme, tedaviden iyidir.
Hangisi yeşil kimya ilkelerine uygundur? | Yenilenebilir ham madde kullanmak | Tehlikeli çözücüleri artırmak ; Atıkları doğaya bırakmak ; Enerji israfı | Sürdürülebilirlik esastır.
Biyobozunur plastik ne demektir? | Doğada mikroorganizmalarla parçalanabilen plastik | Hiç parçalanmayan plastik ; Yanmayan plastik ; Metal içeren plastik | Çevre kirliliğini azaltır.
Geri dönüşümün kimya açısından önemi nedir? | Ham madde ve enerji tasarrufu sağlaması | Daha çok atık üretmesi ; Doğal kaynakları tüketmesi ; Kirlilik yaratması | Alüminyum geri dönüşümü büyük enerji tasarrufu sağlar.
Atık pillerin doğaya atılmasının zararı nedir? | Ağır metallerin toprak ve suya karışması | Toprağı verimli yapması ; Bitkileri büyütmesi ; Zararı yoktur | Cıva, kadmiyum gibi metaller zehirlidir.
Hangisi yenilenebilir bir ham maddedir? | Mısır nişastası | Petrol ; Kömür ; Doğal gaz | Bitkisel kaynaklar yenilenebilir.
Sera gazlarına örnek hangisidir? | Karbondioksit ve metan | Oksijen ve azot ; Helyum ve neon ; Argon ve kripton | Küresel ısınmaya yol açarlar.
Kaynakların bilinçli kullanımına örnek hangisidir? | Gereksiz ambalajdan kaçınmak | Tek kullanımlık ürünleri artırmak ; Suyu boşa akıtmak ; Işıkları açık bırakmak | Atık azaltma önemlidir.
Katalizör kullanımının yeşil kimya açısından faydası nedir? | Tepkimeyi daha az enerjiyle gerçekleştirmesi | Tepkimeyi durdurması ; Atık miktarını artırması ; Ürünü zehirli yapması | Enerji tasarrufu sağlar.
Atom ekonomisi ne demektir? | Girenlerin olabildiğince fazlasının ürüne dönüşmesi | Atomların satılması ; Atom bombası ; Atomların ağırlığı | Yan ürün ve atık azalır.`,

bio1k1: `Hücrenin enerji molekülü hangisidir? | ATP | DNA ; RNA ; Glikojen | Adenozin trifosfat.
ATP'nin yapısında kaç fosfat grubu vardır? | 3 | 1 ; 2 ; 4 | Tri = üç.
Metabolizma ne demektir? | Canlıdaki tüm kimyasal tepkimelerin toplamı | Sadece sindirim ; Sadece solunum ; Hücre bölünmesi | Anabolizma ve katabolizmayı kapsar.
Küçük moleküllerden büyük moleküllerin sentezlenmesine ne denir? | Anabolizma (özümleme) | Katabolizma ; Hidroliz ; Sindirim | Örnek: protein sentezi.
Büyük moleküllerin küçük moleküllere yıkılmasına ne denir? | Katabolizma (yıkım) | Anabolizma ; Sentez ; Fotosentez | Örnek: solunum, sindirim.
Enzimlerin görevi nedir? | Tepkimeleri hızlandırmak (aktivasyon enerjisini düşürmek) | Tepkimeleri durdurmak ; Enerji depolamak ; Kalıtım bilgisini taşımak | Biyolojik katalizördür.
Enzimler tepkimeden sonra ne olur? | Değişmeden çıkar, tekrar kullanılabilir | Tükenir ; Ürüne dönüşür ; Parçalanır | Enzimler yeniden kullanılır.
Enzim aktivitesini etkileyen faktörlerden biri hangisidir? | Sıcaklık | Renk ; Ses ; Işık rengi | Sıcaklık ve pH enzimleri etkiler.
Yüksek sıcaklık enzime ne yapar? | Yapısını bozar (denatürasyon) | Daha hızlı ve kalıcı çalıştırır ; Hiç etkilemez ; Çoğaltır | Proteinlerin yapısı bozulur.
Enzimin etki ettiği maddeye ne denir? | Substrat | Ürün ; Kofaktör ; İnhibitör | Anahtar-kilit modeli ile açıklanır.`,

bio1k2: `Fotosentezin denklemi hangisidir? | 6CO₂ + 6H₂O + ışık → C₆H₁₂O₆ + 6O₂ | C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O ; CO₂ + O₂ → H₂O ; H₂O → H₂ + O₂ | Işık enerjisi kimyasal enerjiye dönüşür.
Fotosentezde açığa çıkan oksijen hangi maddeden gelir? | Su | Karbondioksit ; Glikoz ; Klorofil | Suyun fotolizi ile.
Oksijenli solunum hangi organelde gerçekleşir? | Mitokondri | Kloroplast ; Ribozom ; Golgi | Krebs döngüsü ve ETS mitokondridedir.
Oksijensiz solunumda (fermantasyon) maya hücreleri ne üretir? | Etil alkol ve CO₂ | Laktik asit ; Oksijen ; Su | Ekmek kabarması buna örnektir.
Yoğun egzersizde kaslarda biriken madde hangisidir? | Laktik asit | Etil alkol ; Glikoz ; Oksijen | Oksijen yetersizliğinde laktik asit fermantasyonu olur.
Oksijenli solunumun en çok ATP ürettiği aşama hangisidir? | Elektron taşıma sistemi (ETS) | Glikoliz ; Fermantasyon ; Fotoliz | Mitokondri iç zarında gerçekleşir.
Glikoliz hücrenin neresinde gerçekleşir? | Sitoplazma | Mitokondri ; Çekirdek ; Kloroplast | Her solunum türünde ortaktır.
Fotosentez hızını etkileyen faktör hangisidir? | Işık şiddeti | Ses ; Toprağın rengi ; Ay'ın evresi | CO₂, ışık ve sıcaklık etkilidir.
Klorofil hangi renk ışığı en az soğurur? | Yeşil | Kırmızı ; Mavi ; Mor | Yeşili yansıttığı için yapraklar yeşil görünür.
Solunum ile fotosentez arasındaki ilişki nedir? | Birinin ürünleri diğerinin ham maddesidir | Hiçbir ilişki yoktur ; İkisi aynı olaydır ; İkisi de sadece hayvanlarda olur | O₂ ve CO₂ döngüsü sağlanır.`,

bio2k1: `Ekosistemin canlı bileşenlerine ne denir? | Biyotik faktörler | Abiyotik faktörler ; İklim ; Toprak | Üreticiler, tüketiciler, ayrıştırıcılar.
Ekosistemin cansız bileşenlerine ne denir? | Abiyotik faktörler | Biyotik faktörler ; Popülasyon ; Tür | Işık, su, sıcaklık, toprak.
Besin zincirinde enerjinin yaklaşık yüzde kaçı bir üst basamağa aktarılır? | %10 | %90 ; %50 ; %100 | Geri kalanı ısı olarak kaybolur.
Besin ağı nedir? | Birbirine bağlı birden çok besin zincirinin oluşturduğu yapı | Tek bir besin zinciri ; Sadece bitkiler ; Sadece etçiller | Ekosistemde besin ilişkileri karmaşıktır.
Biyolojik birikim nedir? | Zararlı maddelerin besin zincirinde üst basamaklara doğru artması | Besinlerin azalması ; Enerjinin artması ; Suyun birikmesi | DDT gibi maddeler birikir.
Karbon döngüsünde karbonun atmosfere geri dönmesini sağlayan olaylardan biri hangisidir? | Solunum | Fotosentez ; Fosilleşme ; Kemosentez | Solunum ve yanma CO₂ üretir.
Azot döngüsünde nitrat oluşturan bakterilere ne denir? | Nitrifikasyon bakterileri | Denitrifikasyon bakterileri ; Ayrıştırıcı mantarlar ; Fotosentetik bakteriler | Amonyak → nitrit → nitrat.
Su döngüsünde bitkilerin yapraklarından su buharı vermesine ne denir? | Terleme (transpirasyon) | Yoğuşma ; Sızma ; Donma | Bitkiler su döngüsüne katkı sağlar.
Simbiyotik ilişkilerden her iki tarafın da yarar gördüğü ilişki hangisidir? | Mutualizm | Parazitlik ; Kommensalizm ; Avcılık | Örnek: arı ve çiçek.
Bir tarafın yararlandığı, diğerinin zarar gördüğü ilişki hangisidir? | Parazitlik | Mutualizm ; Kommensalizm ; Rekabet | Örnek: bit ve insan.`,

bio2k2: `Belirli bir bölgedeki aynı tür bireylerin oluşturduğu topluluğa ne denir? | Popülasyon | Komünite ; Ekosistem ; Biyom | Popülasyonun yoğunluğu ve büyüklüğü vardır.
Popülasyon büyüklüğünü artıran faktörler hangileridir? | Doğum ve göç (dışarıdan gelen) | Ölüm ve göç (dışarıya giden) ; Hastalık ; Avlanma | Doğum + göçle gelen − ölüm − göçle giden.
Taşıma kapasitesi ne demektir? | Bir ortamın destekleyebileceği en fazla birey sayısı | Popülasyonun ortalama yaşı ; Göç eden birey sayısı ; Türlerin sayısı | Kaynaklar sınırlıdır.
Biyoçeşitliliğin önemi nedir? | Ekosistemlerin dengesini ve dayanıklılığını sağlar | Hiçbir önemi yoktur ; Sadece estetik değeri vardır ; Ekosistemleri zayıflatır | Gıda, ilaç ve ekosistem hizmetleri sağlar.
Türkiye'ye özgü olup başka yerde doğal olarak bulunmayan türlere ne denir? | Endemik tür | İstilacı tür ; Göçmen tür ; Evcil tür | Türkiye endemik bitki türleri bakımından çok zengindir.
Biyoçeşitliliği tehdit eden etkenlerden biri hangisidir? | İstilacı türler | Ağaçlandırma ; Milli parklar ; Gen bankaları | Yabancı türler yerli türleri yok edebilir.
Sürdürülebilir kalkınma nedir? | Gelecek nesillerin ihtiyaçlarını tehlikeye atmadan bugünün ihtiyaçlarını karşılamak | Kaynakları hızla tüketmek ; Sanayiyi durdurmak ; Nüfusu artırmak | Ekonomik, sosyal ve çevresel denge esastır.
Gen bankalarının amacı nedir? | Bitki ve hayvan türlerinin genetik materyalini korumak | Para biriktirmek ; Hastalık yaymak ; Yeni türler yok etmek | Tohumlar uzun süre saklanır.
Popülasyonun J şeklinde büyüme eğrisi neyi gösterir? | Sınırsız kaynaklarla hızlı (üstel) büyümeyi | Kaynakların sınırlı olduğunu ; Popülasyonun azaldığını ; Sabit kaldığını | Gerçek ortamda kısa süre görülür.
Popülasyonun S şeklinde büyüme eğrisi neyi gösterir? | Taşıma kapasitesine ulaşınca büyümenin yavaşlamasını | Sınırsız büyümeyi ; Popülasyonun yok olmasını ; Hiç büyümemeyi | Lojistik büyümedir.`
});
