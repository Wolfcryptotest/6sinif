// 9. sınıf ek soru bankası — Matematik, Fizik, Kimya, Biyoloji. Biçim: soru | DOĞRU | yanlış1 ; yanlış2 ; yanlış3 | çözüm
window.SORU_EK = Object.assign(window.SORU_EK || {}, {
mat1k3: `Hangisi rasyonel sayı değildir? | √2 | 0,5 ; −3 ; 7/4 | √2 iki tam sayının oranı olarak yazılamaz; irrasyoneldir.
Doğal sayılar kümesi hangisidir? | {0, 1, 2, 3, ...} | {1, 2, 3, ...} ; {..., −1, 0, 1, ...} ; {−1, −2, ...} | Türkiye müfredatında doğal sayılar 0 ile başlar.
Tam sayılar kümesi hangi harfle gösterilir? | Z | N ; Q ; R | N doğal, Z tam, Q rasyonel, R gerçek sayılar.
Toplama işleminin etkisiz elemanı nedir? | 0 | 1 ; −1 ; Yoktur | a + 0 = a.
Çarpma işleminin etkisiz elemanı nedir? | 1 | 0 ; −1 ; 10 | a · 1 = a.
5 sayısının toplama işlemine göre tersi nedir? | −5 | 1/5 ; 0 ; 5 | 5 + (−5) = 0.
3/4 sayısının çarpma işlemine göre tersi nedir? | 4/3 | −3/4 ; 3/4 ; 1 | (3/4)·(4/3) = 1.
a · (b + c) = a·b + a·c özelliğine ne denir? | Dağılma özelliği | Değişme özelliği ; Birleşme özelliği ; Yutan eleman | Çarpmanın toplama üzerine dağılma özelliğidir.
Çarpma işleminin yutan elemanı nedir? | 0 | 1 ; −1 ; Sonsuz | a · 0 = 0.
0,333... devirli ondalık sayısının rasyonel karşılığı nedir? | 1/3 | 3/10 ; 33/100 ; 1/9 | 0,3̅ = 3/9 = 1/3.
Hangisi bir irrasyonel sayıdır? | π | 22/7 ; 3,14 ; 0,25 | π'nin ondalık açılımı sonsuz ve devirsizdir.`,

mat3k1: `Bir üçgenin iç açıları toplamı kaç derecedir? | 180 | 360 ; 90 ; 270 | Tüm üçgenlerde iç açılar toplamı 180°'dir.
Bir üçgenin bir dış açısı, kendisine komşu olmayan iki iç açının toplamına eşittir. İç açıları 40° ve 65° olan köşelerin dışındaki köşenin dış açısı kaçtır? | 105° | 75° ; 140° ; 115° | Dış açı = 40 + 65 = 105°.
Bir üçgenin dış açıları toplamı kaç derecedir? | 360 | 180 ; 270 ; 540 | Her köşede birer dış açı alınırsa toplam 360°'dir.
İkizkenar üçgende tepe açısı 40° ise taban açılarından biri kaç derecedir? | 70 | 40 ; 140 ; 80 | (180 − 40) ÷ 2 = 70°.
Eşkenar üçgenin bir iç açısı kaç derecedir? | 60 | 45 ; 90 ; 120 | 180 ÷ 3 = 60°.
Bir üçgende a = 5, b = 7 ise c kenarı hangi aralıktadır? | 2 < c < 12 | 5 < c < 7 ; 0 < c < 5 ; 7 < c < 35 | Üçüncü kenar, iki kenarın farkından büyük ve toplamından küçüktür.
Bir üçgende en büyük açının karşısındaki kenar için ne söylenir? | En uzun kenardır | En kısa kenardır ; Diğer kenarların toplamına eşittir ; Her zaman 10'dur | Büyük açı karşısında büyük kenar vardır.
Dik üçgende dik kenarlar 9 ve 12 ise hipotenüs kaçtır? | 15 | 21 ; 13 ; 18 | 81 + 144 = 225 → 15.
Açıları 2x, 3x ve 4x olan üçgenin en küçük açısı kaçtır? | 40° | 20° ; 60° ; 80° | 9x = 180 → x = 20 → 2x = 40°.
Bir dik üçgende 30°'nin karşısındaki kenar hipotenüsün kaçta kaçıdır? | Yarısı | Üçte biri ; İki katı ; Dörtte biri | 30–60–90 üçgeninde kısa kenar hipotenüsün yarısıdır.`,

mat3k2: `Hangi eşlik kuralında iki kenar ve aralarındaki açı eşittir? | KAK (Kenar-Açı-Kenar) | AAA ; KKA ; AA | KAK, iki kenar ve aradaki açının eşitliğidir.
Üç kenarı karşılıklı eşit olan üçgenler için hangisi doğrudur? | Eştir (KKK) | Sadece benzerdir ; Hiçbir şey söylenemez ; Alanları farklıdır | KKK eşlik kuralıdır.
Açıları karşılıklı eşit olan iki üçgen için hangisi kesindir? | Benzerdir | Eştir ; Alanları eşittir ; Çevreleri eşittir | AAA benzerlik verir, eşlik vermez.
Benzerlik oranı 3 olan iki üçgenin alanları oranı kaçtır? | 9 | 3 ; 6 ; 27 | Alanlar oranı benzerlik oranının karesidir.
Benzerlik oranı 2 olan iki üçgenin çevreleri oranı kaçtır? | 2 | 4 ; 8 ; 1 | Çevreler oranı benzerlik oranına eşittir.
Bir üçgenin kenarları 6, 8, 10'dur. Buna benzer üçgenin en kısa kenarı 9 ise en uzun kenarı kaçtır? | 15 | 12 ; 13 ; 20 | Oran 9/6 = 1,5; 10 × 1,5 = 15.
Thales teoremine göre bir üçgende tabana paralel çizilen doğru diğer kenarları nasıl böler? | Orantılı parçalara | Eşit parçalara ; Dik açıyla ; Rastgele | Paralellik orantı oluşturur.
İki üçgenin alanları oranı 16/25 ise benzerlik oranı kaçtır? | 4/5 | 16/25 ; 2/5 ; 4/25 | √(16/25) = 4/5.
Eş üçgenlerin karşılıklı yüksekliklerinin oranı kaçtır? | 1 | 0 ; 2 ; Belirlenemez | Eş üçgenlerde tüm karşılıklı uzunluklar eşittir.
Boyu 1,8 m olan bir kişinin gölgesi 1,2 m iken gölgesi 6 m olan direğin boyu kaç m'dir? | 9 | 7,2 ; 4 ; 10,8 | 1,8/1,2 = x/6 → x = 9.`,

mat4k1: `5, 8, 8, 10, 14 veri grubunun aritmetik ortalaması kaçtır? | 9 | 8 ; 10 ; 45 | Toplam 45 ÷ 5 = 9.
Aynı veri grubunun ortancası (medyanı) kaçtır? | 8 | 9 ; 10 ; 14 | Küçükten büyüğe sıralandığında ortadaki değer 8'dir.
Aynı veri grubunun tepe değeri (modu) kaçtır? | 8 | 5 ; 9 ; 14 | En çok tekrar eden değer 8'dir.
Aynı veri grubunun açıklığı (ranjı) kaçtır? | 9 | 5 ; 14 ; 19 | En büyük − en küçük = 14 − 5 = 9.
2, 4, 6, 8 veri grubunun ortancası kaçtır? | 5 | 4 ; 6 ; 20 | Çift sayıda veride ortadaki iki değerin ortalaması alınır: (4 + 6)/2.
Uç değerlerden en az etkilenen merkezî eğilim ölçüsü hangisidir? | Ortanca (medyan) | Aritmetik ortalama ; Açıklık ; Standart sapma | Ortanca sıralamaya dayandığı için uç değerden az etkilenir.
Standart sapmanın küçük olması neyi gösterir? | Verilerin ortalamaya yakın, homojen dağıldığını | Verilerin çok dağınık olduğunu ; Ortalamanın büyük olduğunu ; Verinin hatalı olduğunu | Küçük sapma tutarlılık demektir.
Bir öğrencinin 4 sınav notunun ortalaması 70'tir. 5. sınavdan kaç alırsa ortalaması 72 olur? | 80 | 72 ; 75 ; 90 | 5 × 72 = 360; 360 − 280 = 80.
Bir veri grubundaki tüm değerlere 5 eklenirse aritmetik ortalama nasıl değişir? | 5 artar | Değişmez ; 5 katına çıkar ; 5 azalır | Ortalama da 5 artar.
Bir veri grubundaki tüm değerlere 5 eklenirse açıklık nasıl değişir? | Değişmez | 5 artar ; 10 artar ; Yarıya iner | En büyük ve en küçük aynı miktarda artar.`,

mat4k2: `Bir zar atıldığında üst yüze çift sayı gelme olasılığı kaçtır? | 1/2 | 1/3 ; 1/6 ; 2/3 | 2, 4, 6 → 3/6 = 1/2.
Bir madeni para iki kez atıldığında iki kez de yazı gelme olasılığı kaçtır? | 1/4 | 1/2 ; 1/3 ; 3/4 | 1/2 × 1/2 = 1/4.
Bir torbada 3 kırmızı, 5 mavi top var. Rastgele çekilen topun kırmızı olma olasılığı kaçtır? | 3/8 | 3/5 ; 5/8 ; 1/3 | 3 ÷ 8.
Kesin olay olasılığı kaçtır? | 1 | 0 ; 1/2 ; 100 | Kesin olayın olasılığı 1'dir.
İmkânsız olay olasılığı kaçtır? | 0 | 1 ; 1/2 ; −1 | Gerçekleşmesi imkânsız olayın olasılığı 0'dır.
Bir zar atıldığında 7 gelme olasılığı kaçtır? | 0 | 1/6 ; 1/7 ; 1 | Zarda 7 yoktur, imkânsız olaydır.
Bir olayın olma olasılığı 0,3 ise olmama olasılığı kaçtır? | 0,7 | 0,3 ; 1,3 ; 0 | 1 − 0,3 = 0,7.
İki zar atıldığında toplamın 7 olma olasılığı kaçtır? | 1/6 | 1/12 ; 7/36 ; 1/36 | 6 durum / 36 = 1/6.
52'lik bir desteden rastgele çekilen kartın as olma olasılığı kaçtır? | 1/13 | 1/52 ; 4/13 ; 1/4 | 4/52 = 1/13.
1'den 20'ye kadar numaralı kartlardan rastgele çekilen kartın asal sayı olma olasılığı kaçtır? | 2/5 | 1/2 ; 9/20 ; 7/20 | Asallar: 2,3,5,7,11,13,17,19 → 8/20 = 2/5.`,

fiz1k1: `Hangisi temel büyüklüktür? | Kütle | Hız ; Kuvvet ; Enerji | SI'da 7 temel büyüklük vardır: uzunluk, kütle, zaman, sıcaklık, akım, madde miktarı, ışık şiddeti.
Hangisi türetilmiş büyüklüktür? | Hız | Zaman ; Kütle ; Uzunluk | Hız = yol / zaman, temel büyüklüklerden türetilir.
Hangisi vektörel bir büyüklüktür? | Kuvvet | Kütle ; Sıcaklık ; Zaman | Vektörel büyüklüklerin yönü vardır.
Hangisi skaler bir büyüklüktür? | Enerji | Hız ; Kuvvet ; Yer değiştirme | Skaler büyüklükler yalnızca sayı ve birimle ifade edilir.
SI sisteminde kuvvetin birimi nedir? | Newton | Joule ; Watt ; Pascal | 1 N = 1 kg·m/s².
SI sisteminde enerjinin birimi nedir? | Joule | Newton ; Watt ; Volt | İş ve enerji joule ile ölçülür.
Elektrik akımının SI birimi nedir? | Amper | Volt ; Ohm ; Coulomb | Akım temel büyüklüktür.
Atom ve çekirdeğin yapısını inceleyen fizik alt dalı hangisidir? | Atom ve nükleer fizik | Mekanik ; Optik ; Termodinamik | Radyoaktivite de bu alana girer.
Işık olaylarını inceleyen fizik alt dalı hangisidir? | Optik | Mekanik ; Elektromanyetizma ; Katıhal fiziği | Yansıma ve kırılma optiğin konusudur.
Isı ve sıcaklık olaylarını inceleyen fizik alt dalı hangisidir? | Termodinamik | Optik ; Mekanik ; Nükleer fizik | Isı alışverişi termodinamiğin konusudur.
Hareket ve kuvveti inceleyen fizik alt dalı hangisidir? | Mekanik | Optik ; Termodinamik ; Elektrik | Newton yasaları mekaniğin temelidir.`,

fiz2k1: `20 m/s sabit hızla giden bir araç 5 saniyede kaç metre yol alır? | 100 | 25 ; 4 ; 15 | x = v · t = 20 × 5.
72 km/h kaç m/s'dir? | 20 | 72 ; 7,2 ; 36 | 72 ÷ 3,6 = 20.
Yön değiştirmeden düzgün doğrusal hareket yapan cisim için hangisi doğrudur? | Hızı sabittir | İvmesi sabit ve sıfırdan farklıdır ; Hızı sürekli artar ; Yönü sürekli değişir | İvme sıfırdır.
Net kuvvetin sıfır olduğu cisim için hangisi doğrudur? | Duruyorsa durur, hareketliyse sabit hızla devam eder | Mutlaka hızlanır ; Mutlaka yavaşlar ; Hemen durur | Newton'un 1. yasası (eylemsizlik).
2 kg kütleli cisme 10 N net kuvvet uygulanırsa ivmesi kaç m/s² olur? | 5 | 20 ; 12 ; 0,2 | a = F/m = 10/2.
Etki-tepki ilkesi Newton'un kaçıncı yasasıdır? | 3. yasa | 1. yasa ; 2. yasa ; 4. yasa | Her etkiye eşit ve zıt yönlü bir tepki vardır.
Sürtünme kuvvetinin yönü nasıldır? | Harekete zıt yöndedir | Hareket yönündedir ; Her zaman yukarıdır ; Yönü yoktur | Sürtünme hareketi zorlaştırır.
Yer değiştirme ile alınan yol arasındaki fark nedir? | Yer değiştirme vektörel, yol skalerdir | İkisi aynıdır ; Yol vektöreldir ; Yer değiştirme her zaman daha büyüktür | Yer değiştirme ilk ve son konum farkıdır.
Bir öğrenci 3 m doğuya, sonra 4 m kuzeye yürüyor. Yer değiştirmesinin büyüklüğü kaç m'dir? | 5 | 7 ; 1 ; 12 | √(3² + 4²) = 5 m.
Ağırlık ile kütle arasındaki fark nedir? | Kütle madde miktarıdır, ağırlık kütleye etki eden çekim kuvvetidir | İkisi aynıdır ; Ağırlık değişmez ; Kütle Newton ile ölçülür | G = m · g.`,

fiz3k1: `Basıncın SI birimi nedir? | Pascal | Newton ; Joule ; Watt | 1 Pa = 1 N/m².
200 N'luk ağırlık 0,5 m²'lik yüzeye ne kadar basınç uygular? | 400 Pa | 100 Pa ; 200 Pa ; 0,0025 Pa | P = F/S = 200/0,5.
Durgun bir sıvının içindeki bir noktadaki basınç neye bağlı değildir? | Kabın şekline | Sıvının derinliğine ; Sıvının yoğunluğuna ; Yer çekimi ivmesine | P = h·d·g.
Su içinde derinlik iki katına çıkarsa sıvı basıncı nasıl değişir? | İki katına çıkar | Dört katına çıkar ; Değişmez ; Yarıya iner | Basınç derinlikle doğru orantılıdır.
Kaldırma kuvveti neye eşittir? | Cismin yer değiştirdiği sıvının ağırlığına | Cismin ağırlığına ; Sıvının toplam ağırlığına ; Kabın ağırlığına | Arşimet ilkesi.
Bir cisim suda yüzüyorsa kaldırma kuvveti ile ağırlığı arasındaki ilişki nedir? | Eşittir | Kaldırma kuvveti daha büyüktür ; Ağırlık daha büyüktür ; İlişki yoktur | Dengede kaldırma kuvveti = ağırlık.
Yoğunluğu sudan büyük olan cisim suya bırakılınca ne olur? | Batar | Yüzer ; Askıda kalır ; Uçar | Ağırlığı kaldırma kuvvetinden büyüktür.
Açık hava basıncını ölçen alet hangisidir? | Barometre | Manometre ; Termometre ; Dinamometre | Torricelli cıvalı barometreyi geliştirdi.
Kapalı kaplardaki gaz basıncını ölçen alet hangisidir? | Manometre | Barometre ; Altimetre ; Higrometre | Lastik basıncı manometre ile ölçülür.
Gemilerin çelikten yapılmasına rağmen yüzebilmesinin nedeni nedir? | Hacimlerinin büyük olması nedeniyle çok su yer değiştirmeleri | Çeliğin sudan hafif olması ; Motorlarının itmesi ; Suyun kaldırmaması | Ortalama yoğunluk sudan küçüktür.`,

fiz4k1: `Bir cisme 10 N kuvvet uygulanarak kuvvet doğrultusunda 5 m yol aldırılırsa yapılan iş kaç J'dür? | 50 | 2 ; 15 ; 500 | W = F · x.
Kuvvet ile yer değiştirme birbirine dik ise yapılan iş nedir? | Sıfır | En büyüktür ; F·x ; Negatiftir | Örneğin çantayı yatay taşırken yer çekimine karşı iş yapılmaz.
2 kg kütleli cisim 3 m/s hızla hareket ediyorsa kinetik enerjisi kaç J'dür? | 9 | 6 ; 18 ; 3 | Ek = ½ m v² = ½·2·9.
1 kg kütleli cisim yerden 10 m yükseklikte ise potansiyel enerjisi kaç J'dür? (g = 10) | 100 | 10 ; 1 ; 1000 | Ep = m g h.
Gücün SI birimi nedir? | Watt | Joule ; Newton ; Volt | 1 W = 1 J/s.
600 J'lük iş 30 saniyede yapılırsa güç kaç W'tır? | 20 | 18 000 ; 630 ; 570 | P = W/t = 600/30.
Sürtünmesiz ortamda serbest düşen bir cismin toplam mekanik enerjisi için ne söylenir? | Korunur | Sürekli artar ; Sürekli azalır ; Sıfır olur | Potansiyel enerji kinetik enerjiye dönüşür.
Barajlarda hangi enerji dönüşümü gerçekleşir? | Potansiyel enerji → kinetik enerji → elektrik enerjisi | Kimyasal → ışık ; Elektrik → kimyasal ; Nükleer → ses | Yüksekteki su türbinleri döndürür.
Verim neyi ifade eder? | Alınan faydalı enerjinin harcanan enerjiye oranını | Harcanan enerjinin toplamını ; Isı kaybını ; Makinenin ağırlığını | Verim %100'den büyük olamaz.
Hangisi yenilenebilir enerji kaynağıdır? | Güneş | Kömür ; Petrol ; Doğal gaz | Güneş, rüzgâr, hidroelektrik, jeotermal yenilenebilirdir.`,

kim1k1: `Canlıların yapısındaki kimyasal olayları inceleyen kimya alt dalı hangisidir? | Biyokimya | Analitik kimya ; Fizikokimya ; Anorganik kimya | Enzimler ve metabolizma biyokimyanın konusudur.
Maddelerin bileşimini ve miktarını belirleyen kimya alt dalı hangisidir? | Analitik kimya | Organik kimya ; Polimer kimyası ; Biyokimya | Nitel ve nicel analiz yapar.
Karbon bileşiklerini inceleyen alt dal hangisidir? | Organik kimya | Anorganik kimya ; Fizikokimya ; Nükleer kimya | Organik kimya karbon temellidir.
Simya ile kimya arasındaki temel fark nedir? | Kimya deney ve bilimsel yönteme dayanır | Simya bilimseldir ; Kimya sadece altın üretir ; İkisi aynıdır | Simya deneme-yanılma ve gizemciliğe dayanır.
Laboratuvarda "yanıcı madde" uyarı işareti neyi gösterir? | Maddenin kolay alev alabileceğini | Maddenin zehirli olduğunu ; Maddenin radyoaktif olduğunu ; Maddenin güvenli olduğunu | Ateşten uzak tutulmalıdır.
"Aşındırıcı (korozif)" işareti hangi maddeler için kullanılır? | Deriye ve metale zarar veren asit/bazlar | Su ; Tuz ; Şeker | Koruyucu eldiven ve gözlük gerekir.
Laboratuvarda deney yaparken hangisi yapılmamalıdır? | Kimyasal maddeleri tatmak | Koruyucu gözlük takmak ; Önlük giymek ; Etiketleri okumak | Kimyasallar tadılmaz, koklanmaz.
Su arıtımında kullanılan klor hangi amaçla eklenir? | Mikropları öldürmek için | Tat vermek için ; Renk vermek için ; Kokusunu artırmak için | Klor dezenfektandır.
Simyacıların kimyaya kazandırdığı araçlardan biri hangisidir? | Damıtma düzeneği (imbik) | Elektron mikroskobu ; Kütle spektrometresi ; Bilgisayar | Simyacılar imbik ve havan gibi araçlar geliştirdi.
Kimyasal maddelerin etiketlerinde bulunan uyarı işaretlerine ne denir? | Güvenlik (tehlike) sembolleri | Logo ; Barkod ; Marka | GHS sembolleri uluslararasıdır.`,

kim2k1: `Atomun çekirdeğinde hangi tanecikler bulunur? | Proton ve nötron | Elektron ve proton ; Sadece elektron ; Elektron ve nötron | Elektronlar çekirdeğin etrafında bulunur.
Elektronu keşfeden bilim insanı kimdir? | J. J. Thomson | Rutherford ; Bohr ; Dalton | Katot ışınları deneyiyle keşfetmiştir.
Atomun çekirdeğini keşfeden bilim insanı kimdir? | Rutherford | Thomson ; Dalton ; Bohr | Altın levha deneyiyle çekirdeği buldu.
Elektronların belirli enerji düzeylerinde bulunduğunu söyleyen model hangisidir? | Bohr atom modeli | Dalton modeli ; Thomson modeli ; Demokritos'un görüşü | Bohr hidrojen atomu için enerji düzeylerini tanımladı.
"Üzümlü kek modeli" kime aittir? | Thomson | Rutherford ; Bohr ; Dalton | Pozitif yük içinde elektronlar dağılmıştır.
Atom numarası neyi gösterir? | Proton sayısını | Nötron sayısını ; Kütle numarasını ; Elektron katman sayısını | Atom numarası elementin kimliğini belirler.
Kütle numarası 23, atom numarası 11 olan atomun nötron sayısı kaçtır? | 12 | 11 ; 23 ; 34 | 23 − 11 = 12.
Proton sayısı aynı, nötron sayısı farklı atomlara ne denir? | İzotop | İzoton ; İzobar ; İyon | Örneğin karbon-12 ve karbon-14.
Elektron alan nötr bir atom hangi yükle yüklenir? | Negatif (anyon) | Pozitif (katyon) ; Nötr kalır ; Yüksüz | Elektron sayısı proton sayısını geçer.
Elektronun yükü nedir? | −1 | +1 ; 0 ; +2 | Proton +1, nötron 0 yüklüdür.`,

kim2k2: `Modern periyodik sistemde elementler neye göre dizilir? | Artan atom numarasına | Artan kütle numarasına ; Alfabetik sıraya ; Keşif tarihine | Moseley atom numarasına göre düzenlemiştir.
Periyodik sistemde aynı grupta yukarıdan aşağı inildikçe atom yarıçapı nasıl değişir? | Artar | Azalır ; Değişmez ; Önce artar sonra azalır | Katman sayısı artar.
Aynı periyotta soldan sağa gidildikçe atom yarıçapı nasıl değişir? | Genellikle azalır | Artar ; Değişmez ; İki katına çıkar | Çekirdek yükü artar, elektronlar daha çok çekilir.
1A grubu elementlerine ne ad verilir? | Alkali metaller | Toprak alkali metaller ; Halojenler ; Soy gazlar | Lityum, sodyum, potasyum alkali metaldir.
2A grubu elementlerine ne ad verilir? | Toprak alkali metaller | Alkali metaller ; Halojenler ; Geçiş metalleri | Magnezyum ve kalsiyum bu gruptadır.
Elektron alma isteği en fazla olan grup hangisidir? | 7A (halojenler) | 1A ; 2A ; 8A | Halojenler bir elektron alarak soy gaz düzenine ulaşır.
Değerlik elektron sayısı 8 olan (He hariç) grup hangisidir? | 8A | 1A ; 4A ; 7A | Soy gazlar kararlıdır.
11Na elementinin periyodik sistemdeki yeri nedir? | 3. periyot, 1A grubu | 2. periyot, 1A ; 3. periyot, 2A ; 1. periyot, 1A | Elektron dizilimi 2-8-1.
17Cl elementinin değerlik elektron sayısı kaçtır? | 7 | 17 ; 1 ; 8 | Dizilim 2-8-7.
B grupları (geçiş elementleri) hangi özelliktedir? | Hepsi metaldir | Hepsi ametaldir ; Hepsi soy gazdır ; Hepsi sıvıdır | Demir, bakır, çinko geçiş metalidir.`,

kim3k1: `Metal ile ametal atomları arasında elektron alışverişiyle oluşan bağ hangisidir? | İyonik bağ | Apolar kovalent bağ ; Metalik bağ ; Hidrojen bağı | Örnek: NaCl.
Ametal atomları arasında elektron ortaklaşmasıyla oluşan bağ hangisidir? | Kovalent bağ | İyonik bağ ; Metalik bağ ; Van der Waals | Örnek: H₂O, CO₂.
Aynı cins ametal atomları arasındaki bağ nasıldır? | Apolar kovalent | Polar kovalent ; İyonik ; Metalik | Örnek: H₂, O₂, Cl₂.
Farklı cins ametal atomları arasındaki bağ genellikle nasıldır? | Polar kovalent | Apolar kovalent ; İyonik ; Metalik | Elektronlar elektronegatif atoma daha yakındır.
NaCl (yemek tuzu) hangi bağ türüyle oluşur? | İyonik | Kovalent ; Metalik ; Hidrojen | Na⁺ ve Cl⁻ iyonları birbirini çeker.
İyonik bileşiklerin erime noktaları genellikle nasıldır? | Yüksek | Çok düşük ; Sıfır ; Belirsiz | Güçlü iyonik çekim nedeniyle.
İyonik bileşikler hangi durumda elektriği iletir? | Erimiş hâlde ya da suda çözündüğünde | Katı hâlde ; Hiçbir zaman ; Sadece gaz hâlinde | Serbest iyonlar akım taşır.
Su molekülünde (H₂O) kaç tane kovalent bağ vardır? | 2 | 1 ; 3 ; 4 | Oksijen iki hidrojenle bağ yapar.
Metal atomlarını bir arada tutan bağ hangisidir? | Metalik bağ | İyonik bağ ; Kovalent bağ ; Hidrojen bağı | Elektron denizi modeliyle açıklanır.
MgO bileşiğinde magnezyum kaç elektron verir? | 2 | 1 ; 3 ; 6 | Mg²⁺ ve O²⁻ iyonları oluşur.`,

kim4k1: `Katılarda tanecikler nasıl hareket eder? | Titreşim hareketi yapar | Serbestçe öteleme yapar ; Hiç hareket etmez ; Sadece dönme yapar | Tanecikler sabit konum etrafında titreşir.
Gazlarda tanecikler arası boşluk nasıldır? | Çok fazladır | Çok azdır ; Hiç yoktur ; Katılarla aynıdır | Gazlar bu yüzden sıkıştırılabilir.
Hangi hâl sıkıştırılabilir? | Gaz | Katı ; Sıvı ; Hiçbiri | Taneciklerin arası çok boştur.
Katının doğrudan gaz hâline geçmesine ne denir? | Süblimleşme | Erime ; Buharlaşma ; Yoğuşma | Naftalin ve kuru buz süblimleşir.
Gazın doğrudan katı hâle geçmesine ne denir? | Kırağılaşma (depozisyon) | Süblimleşme ; Erime ; Donma | Kırağı oluşumu buna örnektir.
Saf bir maddenin erime noktası ile donma noktası arasındaki ilişki nedir? | Eşittir | Erime noktası daha yüksektir ; Donma noktası daha yüksektir ; İlişki yoktur | Saf maddelerde aynı sıcaklıkta olur.
Hâl değişimi sırasında saf maddenin sıcaklığı nasıl değişir? | Sabit kalır | Sürekli artar ; Sürekli azalır ; İki katına çıkar | Alınan ısı tanecikler arası bağları koparmaya harcanır.
Deniz seviyesinde saf suyun kaynama noktası kaç °C'dir? | 100 | 0 ; 50 ; 212 | Yüksekliğe göre kaynama noktası düşer.
Yükseklere çıkıldıkça suyun kaynama noktası nasıl değişir? | Düşer | Yükselir ; Değişmez ; Sıfır olur | Açık hava basıncı azaldığı için.
Plazma hâli nerede bulunur? | Yıldızlarda ve şimşekte | Buz dağlarında ; Okyanus tabanında ; Bitki hücrelerinde | Plazma maddenin dördüncü hâlidir.`,

bio1k1: `Tüm canlıların ortak özelliklerinden biri hangisidir? | Hücreden oluşmak | Fotosentez yapmak ; Hareket etmek için ayaklarının olması ; Akciğerle solunum | Canlıların temel yapı birimi hücredir.
Hücrede en fazla bulunan inorganik madde hangisidir? | Su | Mineral ; Asit ; Baz | Hücrenin %70-80'i sudur.
Canlılarda birincil enerji kaynağı olarak kullanılan organik molekül hangisidir? | Karbonhidrat | Protein ; Vitamin ; Su | Önce karbonhidratlar kullanılır.
Proteinlerin yapı birimi nedir? | Aminoasit | Glikoz ; Yağ asidi ; Nükleotit | 20 çeşit aminoasit vardır.
Karbonhidratların yapı birimi nedir? | Monosakkarit (ör. glikoz) | Aminoasit ; Nükleotit ; Gliserol | Glikoz en yaygın monosakkarittir.
Nükleik asitlerin yapı birimi nedir? | Nükleotit | Aminoasit ; Glikoz ; Yağ asidi | DNA ve RNA nükleotitlerden oluşur.
Hangi vitamin yağda çözünür? | A vitamini | C vitamini ; B1 vitamini ; B12 vitamini | A, D, E, K yağda çözünür.
Enzimler hangi organik moleküllerdir? | Protein | Karbonhidrat ; Yağ ; Mineral | Enzimler biyolojik katalizördür.
Canlıların çevrelerindeki değişikliklere tepki vermesine ne denir? | Uyarılara tepki (irkilme) | Üreme ; Boşaltım ; Beslenme | Örnek: küstüm otunun yapraklarını kapatması.
Kemik ve dişlerin yapısında bulunan mineral hangisidir? | Kalsiyum | Demir ; İyot ; Sodyum | Kalsiyum ve fosfor kemikleri güçlendirir.`,

bio2k1: `Hücrenin enerji santrali olarak bilinen organel hangisidir? | Mitokondri | Ribozom ; Golgi ; Lizozom | Oksijenli solunum mitokondride olur.
Protein sentezinin yapıldığı organel hangisidir? | Ribozom | Mitokondri ; Kloroplast ; Koful | Ribozomlar tüm canlılarda bulunur.
Fotosentezin yapıldığı organel hangisidir? | Kloroplast | Mitokondri ; Çekirdek ; Sentrozom | Klorofil pigmenti kloroplastta bulunur.
Hücre zarının temel görevi nedir? | Madde giriş çıkışını kontrol etmek | Protein sentezlemek ; Fotosentez yapmak ; Enerji üretmek | Seçici geçirgendir.
Bitki hücresinde bulunup hayvan hücresinde bulunmayan yapı hangisidir? | Hücre duvarı | Mitokondri ; Ribozom ; Hücre zarı | Selülozdan yapılmış hücre duvarı bitki hücresine destek verir.
Hayvan hücresinde bulunup çoğu bitki hücresinde bulunmayan yapı hangisidir? | Sentrozom | Kloroplast ; Hücre duvarı ; Büyük merkezi koful | Sentrozom hücre bölünmesinde görev alır.
Hücre içi sindirimden sorumlu organel hangisidir? | Lizozom | Golgi ; Ribozom ; Kloroplast | Sindirim enzimleri içerir.
Salgı maddelerinin paketlendiği organel hangisidir? | Golgi cisimciği | Ribozom ; Lizozom ; Mitokondri | Golgi salgıları paketler ve gönderir.
Prokaryot hücrelerde hangisi bulunmaz? | Zarla çevrili çekirdek | Ribozom ; Hücre zarı ; Sitoplazma | Bakterilerde çekirdek zarı yoktur.
Hücrenin yönetim merkezi hangisidir? | Çekirdek | Koful ; Ribozom ; Hücre zarı | DNA çekirdekte bulunur.`,

bio3k1: `Canlıları sınıflandırmada en küçük birim hangisidir? | Tür | Âlem ; Takım ; Sınıf | Aynı türün bireyleri kendi aralarında verimli döller verir.
Sınıflandırma basamakları büyükten küçüğe doğru nasıl sıralanır? | Âlem, şube, sınıf, takım, aile, cins, tür | Tür, cins, aile, âlem ; Sınıf, âlem, tür, cins ; Şube, tür, âlem, sınıf | Âlemden türe doğru küçülür.
İkili adlandırma sistemini geliştiren bilim insanı kimdir? | Linnaeus | Darwin ; Mendel ; Pasteur | Cins ve tür adı birlikte kullanılır.
Bakteriler hangi âlemde yer alır? | Bakteriler âlemi | Bitkiler âlemi ; Mantarlar âlemi ; Hayvanlar âlemi | Prokaryot hücreli canlılardır.
Maya ve küf hangi âlemdedir? | Mantarlar | Bitkiler ; Bakteriler ; Protistler | Mantarlar ökaryot ve heterotroftur.
Amip ve öglena hangi âlemdedir? | Protistler | Mantarlar ; Hayvanlar ; Bakteriler | Çoğu tek hücreli ökaryotlardır.
Kendi besinini üretebilen canlılara ne denir? | Ototrof | Heterotrof ; Saprofit ; Parazit | Bitkiler ototroftur.
Besinini dışarıdan hazır alan canlılara ne denir? | Heterotrof | Ototrof ; Üretici ; Fotosentetik | Hayvanlar ve mantarlar heterotroftur.
İnsanın bilimsel adı nedir? | Homo sapiens | Felis catus ; Canis lupus ; Pan troglodytes | Homo cins, sapiens tür adıdır.
Omurgalı hayvanlardan hangisi memelidir? | Yunus | Köpek balığı ; Kurbağa ; Timsah | Yunus akciğerle solunum yapar ve yavrusunu emzirir.`,

bio4k1: `Belirli bir alanda yaşayan canlılar ve cansız çevrenin oluşturduğu sisteme ne denir? | Ekosistem | Popülasyon ; Tür ; Habitat | Ekosistem canlı ve cansız faktörleri içerir.
Aynı türden ve aynı bölgede yaşayan bireylerin oluşturduğu topluluğa ne denir? | Popülasyon | Komünite ; Ekosistem ; Biyosfer | Örneğin bir göldeki sazan balıkları.
Farklı popülasyonların bir arada oluşturduğu topluluğa ne denir? | Komünite (topluluk) | Popülasyon ; Tür ; Birey | Bir ormandaki tüm canlılar komünitedir.
Ekosistemde enerji akışının başladığı canlılar hangileridir? | Üreticiler | Ayrıştırıcılar ; Etçiller ; Otçullar | Güneş enerjisini kimyasal enerjiye çevirirler.
Ayrıştırıcıların ekosistemdeki görevi nedir? | Ölü organizmaları parçalayıp maddeleri döngüye kazandırmak | Fotosentez yapmak ; Avlanmak ; Oksijen üretmek | Bakteri ve mantarlar ayrıştırıcıdır.
Azot döngüsünde atmosferdeki azotu bağlayan canlılar hangileridir? | Azot bağlayıcı bakteriler | Kuşlar ; Balıklar ; Böcekler | Baklagillerin köklerinde yaşarlar.
Biyoçeşitlilik ne demektir? | Bir bölgedeki canlı türlerinin çeşitliliği | Tek bir türün fazla olması ; Cansız varlıkların sayısı ; Toprağın rengi | Biyoçeşitlilik ekosistemlerin dengesini sağlar.
Biyoçeşitliliği azaltan etkenlerden biri hangisidir? | Habitat tahribi | Ağaçlandırma ; Koruma alanları ; Geri dönüşüm | Yaşam alanlarının yok edilmesi türleri tehdit eder.
Türkiye biyoçeşitlilik bakımından neden zengindir? | Farklı iklim ve yer şekillerine sahip olduğu için | Tek bir iklimi olduğu için ; Çöl olduğu için ; Sadece denizlerle çevrili olduğu için | Üç fitocoğrafik bölgenin kesişim noktasındadır.
Besin piramidinde üst basamaklara çıkıldıkça hangisi azalır? | Toplam enerji ve biyokütle | Zehirli madde birikimi ; Ekosistemin yaşı ; Hiçbir şey | Her basamakta enerjinin yaklaşık %90'ı kaybolur.`
});
