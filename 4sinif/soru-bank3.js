// 4. sınıf ek soru bankası (2. tur) — Fen, Sosyal, Din. Biçim: soru | doğru | yanlış1 ; yanlış2 ; yanlış3 | çözüm
(function () {
const E = window.SORU_EK = window.SORU_EK || {};
const ek = (id, m) => { E[id] = (E[id] ? E[id] + "\n" : "") + m; };
ek("f1", `Kayaçların zamanla ufalanıp parçalanmasıyla ne oluşur? | Toprak | Maden ; Fosil | Toprak çok uzun sürede oluşur.
Hangisi bir madendir? | Bakır | Kum ; Toprak ; Odun | Bakır elektrik kablolarında kullanılır.
Altın genellikle ne yapımında kullanılır? | Takı | Elektrik direği ; Ekmek | Altın değerli bir madendir.
Fosiller genellikle hangi kayaçlarda bulunur? | Tortul kayaçlarda | Erimiş lavın içinde ; Bulutlarda | Tortul tabakalar canlı izlerini korur.
Toprağın en üst katmanında ne bulunur? | Çürümüş bitki ve hayvan kalıntıları (humus) | Sadece kaya ; Sadece su | Humus toprağı verimli yapar.
Mermer genellikle nerede kullanılır? | Bina ve heykel yapımında | Yiyecek olarak ; Elbise yapımında | Mermer dayanıklı bir taştır.
Hangisi fosil değildir? | Plastik oyuncak | Taşlaşmış yaprak izi ; Dinozor kemiği | Fosiller eski canlıların kalıntılarıdır.
Kömür ne amaçla kullanılır? | Isınma ve enerji üretimi | Takı yapımı ; Cam yapımı | Kömür bir yakıttır.
Madenler bitmeyen kaynaklar mıdır? | Hayır, tükenebilir; tasarruflu kullanılmalıdır | Evet, hiç bitmez ; Her yıl kendiliğinden çoğalır | Madenler sınırlıdır.
Toprağı en çok hangisi korur? | Bitki örtüsü (ağaçlar) | Çıplak arazi ; Beton | Kökler toprağı tutar.
Cam hangi maddeden yapılır? | Kum | Demir ; Kömür | Cam kumun eritilmesiyle yapılır.
Yer kabuğunun okyanus altındaki kısmı nasıldır? | Kayaçlardan oluşur | Boştur ; Sadece sudan oluşur | Okyanus tabanında da kayaçlar vardır.`);
ek("f2", `Dünya kendi etrafında hangi yönde döner? | Batıdan doğuya | Doğudan batıya ; Kuzeyden güneye | Bu yüzden Güneş doğudan doğar.
Gündüzün ve gecenin süresi toplam kaç saattir? | 24 | 12 ; 48 ; 365 | Bir gün 24 saattir.
Dünya Güneş etrafında dolanırken ne oluşur? | Mevsimler ve yıl | Gece ve gündüz ; Ay tutulması | Dolanma yaklaşık 365 gün sürer.
Bir yıl kaç aydır? | 12 | 4 ; 7 ; 24 | Bir yılda 12 ay vardır.
Bir mevsim yaklaşık kaç ay sürer? | 3 | 1 ; 6 ; 12 | 12 ay ÷ 4 mevsim = 3 ay.
Gölgelerimiz ne zaman en kısadır? | Öğle vakti | Sabah erken ; Akşam üzeri | Güneş tepedeyken gölge kısalır.
Gölgelerimiz ne zaman en uzundur? | Sabah ve akşam | Öğle vakti ; Gece | Güneş alçaktayken gölge uzar.
Dünya'nın Güneş'e bakmayan yüzünde ne yaşanır? | Gece | Gündüz ; Yaz | Işık almayan taraf karanlıktır.
Artık yıl kaç gündür? | 366 | 365 ; 360 ; 300 | Dört yılda bir şubat 29 gün çeker.
Dünya'nın modeli olan araca ne denir? | Küre | Pusula ; Termometre | Küre Dünya'nın küçük bir modelidir.
Ay, Dünya'nın neyidir? | Uydusu | Gezegeni ; Yıldızı | Ay Dünya'nın etrafında döner.
Güneş'in gökyüzünde hareket ediyormuş gibi görünmesinin sebebi nedir? | Dünya'nın kendi etrafında dönmesi | Güneş'in Dünya'nın etrafında dönmesi ; Bulutların hareketi | Hareket eden Dünya'dır.`);
ek("f3", `Hangisi enerji verici besindir? | Makarna | Su ; Tuz | Makarna karbonhidrattır.
Hangisi yapıcı-onarıcı besindir? | Et | Şeker ; Yağ | Proteinler vücudu onarır.
Hangisi düzenleyici besindir? | Sebze ve meyveler | Ekmek ; Tereyağı | Vitamin ve mineral içerir.
D vitamini en çok neyle elde edilir? | Güneş ışığı | Karanlık oda ; Şekerleme | Güneşte vücudumuz D vitamini üretir.
Süt hangi mineral bakımından zengindir? | Kalsiyum | Demir ; Altın | Kalsiyum kemikleri güçlendirir.
Hangisi protein kaynağıdır? | Balık | Elma ; Şeker | Balık protein içerir.
Kuru baklagiller hangi besin öğesince zengindir? | Protein | Su ; Yağ | Mercimek, nohut, fasulye protein içerir.
Zeytinyağı hangi besin öğesidir? | Yağ | Protein ; Vitamin | Zeytinyağı sağlıklı bir yağdır.
Vitaminler bize ne sağlar? | Hastalıklara karşı direnç | Kilo almamızı ; Uykumuzu kaçırmayı | Vitaminler bağışıklığı güçlendirir.
Hangi besin lif bakımından zengindir? | Tam buğday ekmeği | Şeker ; Kola | Lif sindirime yardım eder.
Su neden önemli bir besin öğesidir? | Vücut ısısını düzenler ve sindirime yardım eder | Enerji vermez, gereksizdir ; Sadece susuzluğu giderir | Su yaşam için şarttır.
Hangisi A vitamini bakımından zengindir? | Havuç | Pirinç ; Şeker | Havuç göz sağlığı için faydalıdır.`);
ek("f4", `Dengeli beslenme ne demektir? | Her besin grubundan yeterli miktarda yemek | Sadece meyve yemek ; Sadece et yemek | Vücudumuz her besine ihtiyaç duyar.
Obezitenin nedenlerinden biri hangisidir? | Hareketsizlik ve aşırı yemek | Spor yapmak ; Su içmek | Obezite aşırı kilo durumudur.
Hangisi sağlıklı bir kahvaltıdır? | Peynir, zeytin, yumurta, domates | Cips ve kola ; Pasta ve şeker | Dengeli kahvaltı güne enerji verir.
Gıdaları alırken neye bakmalıyız? | Son kullanma tarihine | Sadece paketin rengine ; Reklamına | Tarihi geçmiş ürün alınmaz.
Hangisi sağlıklı bir içecektir? | Ayran | Gazlı içecek ; Enerji içeceği | Ayran yoğurttan yapılır.
Gece geç saatte ağır yemek yemek neye yol açar? | Uykunun bozulmasına | Daha iyi uykuya ; Boy uzamasına | Yatmadan önce hafif beslenmeliyiz.
Hijyen ne demektir? | Temizlik kurallarına uymak | Çok yemek ; Hiç yıkanmamak | Hijyen hastalıklardan korur.
Hangisi zararlı bir alışkanlıktır? | Çok şekerli yiyecek tüketmek | Meyve yemek ; Su içmek | Şeker dişlere ve sağlığa zarar verir.
Spor yaptıktan sonra neye dikkat etmeliyiz? | Su içmeye | Hemen ağır yemek yemeye ; Gazlı içecek içmeye | Kaybedilen sıvı yerine konmalıdır.
Hangi besinler mevsiminde tüketilmelidir? | Meyve ve sebzeler | Sadece konserveler ; Sadece cips | Mevsiminde olgunlaşanlar daha besleyicidir.
Sağlıklı yaşam için günde ne kadar hareket etmeliyiz? | En az 1 saat | Hiç ; 5 dakika | Çocuklar günde en az 1 saat aktif olmalıdır.`);
ek("f5", `Kapıyı kapatırken hangi kuvveti uygularız? | İtme | Çekme ; Mıknatıs | Kapıyı kendimizden uzaklaştırırız.
Hamuru yuvarlak yapmak için ne yaparız? | Kuvvet uygularız | Su döküp bekleriz ; Hiçbir şey | Kuvvet şekil değiştirir.
Duvara çarpan topun neyi değişir? | Hareket yönü | Rengi ; Ağırlığı | Top geri seker.
Bir arabayı daha hızlı itmek için ne gerekir? | Daha büyük kuvvet | Daha küçük kuvvet ; Hiç kuvvet | Kuvvet arttıkça hız artar.
Yay sıkıştırılınca neyi değişir? | Şekli | Rengi ; Kokusu | Kuvvet bırakılınca yay eski hâline döner.
Rüzgârın uçurtmayı yükseltmesi hangi kuvvete örnektir? | İtme | Çekme ; Sürtünme | Rüzgâr uçurtmayı iter.
Kova ile kuyudan su çekmek hangi kuvvete örnektir? | Çekme | İtme ; Mıknatıs | İp kendimize doğru çekilir.
Kuvvetin etkileri nelerdir? | Hareket ettirmek, durdurmak, yön ve şekil değiştirmek | Sadece renk değiştirmek ; Sadece ses çıkarmak | Kuvvetin dört etkisi vardır.
Bir kalemi masada ittiğimizde ne olur? | Kalem hareket eder | Kalem erir ; Kalem kaybolur | İtme kuvveti hareket ettirir.
Futbolcunun topu durdurması kuvvetin hangi etkisidir? | Durdurma | Şekil değiştirme ; Hızlandırma | Kuvvet hareketli cismi durdurabilir.
Sünger sıkılınca ne olur? | Şekli değişir | Rengi değişir ; Ağırlığı artar | Kuvvet şekli değiştirir.`);
ek("f6", `Mıknatısın kaç kutbu vardır? | 2 | 1 ; 3 ; 4 | Kuzey (N) ve güney (S) kutbu.
N kutbu ile N kutbu yaklaştırılırsa ne olur? | İterler | Çekerler ; Yapışırlar | Aynı kutuplar iter.
N kutbu ile S kutbu yaklaştırılırsa ne olur? | Çekerler | İterler ; Hiçbir şey olmaz | Zıt kutuplar çeker.
Hangisi mıknatısa yapışmaz? | Bakır para | Demir çivi ; Ataş | Bakır manyetik değildir.
Mıknatıs hangi maddeyi çeker? | Demir | Plastik ; Kâğıt ; Cam | Demir, nikel, kobalt çekilir.
Mıknatıs kâğıdın arkasından ataşı çekebilir mi? | Evet, ince kâğıttan etkisi geçer | Hayır, asla ; Sadece kâğıt ıslaksa | Mıknatıs ince engellerin arkasından da çeker.
Mıknatısın en güçlü çektiği yer neresidir? | Kutupları | Ortası ; Hiçbir yeri | Kutuplar en güçlü bölgedir.
Pusulanın iğnesi neyi gösterir? | Kuzeyi | Batıyı ; Saati | Pusula iğnesi küçük bir mıknatıstır.
Mıknatısın kullanıldığı bir alan hangisidir? | Çanta ve dolap kapakları | Ekmek pişirme ; Su kaynatma | Kapakların kapalı durmasını sağlar.
Mıknatıs düşürülüp kırılırsa ne olur? | Her parça yeni bir mıknatıs olur | Mıknatıslığını tamamen kaybeder ; Tek kutuplu olur | Her parçanın iki kutbu olur.
Mıknatıs ile oyun oynarken nelere dikkat etmeliyiz? | Telefon ve bilgisayardan uzak tutmalıyız | Ağzımıza almalıyız ; Yutmalıyız | Mıknatıs elektronik cihazlara zarar verebilir.`);
ek("f7", `Hangisi esnektir? | Paket lastiği | Cam ; Tuğla | Çekilince uzar, bırakınca eski hâline döner.
Hangisi saydamdır? | Su | Tahta ; Taş | Saydam maddelerden ışık geçer.
Hangisi opaktır (ışık geçirmez)? | Tahta | Cam ; Su | Opak maddeler ışığı geçirmez.
Buzlu cam nasıl bir maddedir? | Yarı saydam | Saydam ; Opak | Işığın bir kısmını geçirir.
Hangisi suyu geçirmez? | Naylon | Pamuk ; Kâğıt havlu | Naylon su geçirmez.
Hangisi en sert maddedir? | Demir | Pamuk ; Sünger | Sert maddeler zor şekil değiştirir.
Hangisi kırılgandır? | Porselen tabak | Kumaş ; Lastik | Kırılgan maddeler darbeyle kırılır.
Pişmiş bir kekin yumuşak olduğunu nasıl anlarız? | Dokunarak | Dinleyerek ; Koklayarak | Dokunma duyusu kullanılır.
Hangisi pürüzlüdür? | Ağaç kabuğu | Ayna ; Cam | Yüzeyi düz değildir.
Kışın neden yün kazak giyeriz? | Isıyı iyi tutar, bizi sıcak tutar | Hafif olduğu için ; Saydam olduğu için | Yün ısıyı iletmez.
Yağmurluklar hangi özellikteki maddeden yapılır? | Su geçirmez | Su emici ; Kırılgan | Bizi ıslanmaktan korur.`);
ek("f8", `Bir pet şişede 500 mL su var. Kaç tane böyle şişe 1 litre eder? | 2 | 5 ; 10 ; 1 | 500 + 500 = 1000 mL = 1 L.
3 kg kaç gramdır? | 3000 | 300 ; 30 ; 30000 | 1 kg = 1000 g.
2500 g kaç kilogramdır? | 2,5 | 25 ; 250 ; 0,25 | 2500 ÷ 1000.
Terazide bir tarafta 2 kg, diğer tarafta 1500 g varsa hangisi ağır basar? | 2 kg olan | 1500 g olan ; Eşittir | 2 kg = 2000 g > 1500 g.
Hangisi hacim birimidir? | Litre | Kilogram ; Metre ; Derece | Litre sıvıların hacmini ölçer.
Hangisi kütle birimidir? | Gram | Litre ; Metre ; Saat | Gram kütle birimidir.
Bir taş suya bırakıldığında su seviyesi 50 mL yükseldi. Taşın hacmi kaçtır? | 50 mL | 100 mL ; 5 mL ; 500 mL | Taşın hacmi taşırdığı su kadardır.
Aynı büyüklükteki bir demir top ile plastik top karşılaştırılırsa hangisinin kütlesi büyüktür? | Demir top | Plastik top ; Eşittir | Demir daha yoğundur.
Pazarda domatesleri tartmak için ne kullanılır? | Terazi | Cetvel ; Termometre | Terazi kütle ölçer.
1 litre kaç mililitredir? | 1000 | 100 ; 10 ; 10000 | 1 L = 1000 mL.
Hangi cisim daha fazla yer kaplar? | Basketbol topu | Bilye ; Silgi | Büyük cisimlerin hacmi fazladır.
Bir kova 5 litre su alıyorsa 3 kova kaç litre su alır? | 15 | 8 ; 2 ; 53 | 5 × 3 = 15.`);
ek("f9", `Suyun donma sıcaklığı kaç °C'dir? | 0 | 100 ; 50 ; 10 | Su 0 °C'de donar.
Suyun kaynama sıcaklığı kaç °C'dir? | 100 | 0 ; 50 ; 200 | Deniz seviyesinde su 100 °C'de kaynar.
Mum eriyince hangi hâle geçer? | Sıvı | Gaz ; Katı | Isı alan mum sıvı hâle geçer.
Erimiş mum soğuyunca ne olur? | Donar (katılaşır) | Buharlaşır ; Yoğuşur | Isı veren sıvı katılaşır.
Banyo aynasının buğulanması hangi olaydır? | Yoğuşma | Erime ; Donma | Su buharı soğuk aynada su damlası olur.
Yağmur sonrası su birikintilerinin kuruması hangi olaydır? | Buharlaşma | Donma ; Yoğuşma | Su buhar olup havaya karışır.
Isı alan maddelerin sıcaklığı nasıl değişir? | Artar | Azalır ; Değişmez | Isı alan madde ısınır.
Isı veren maddelerin sıcaklığı nasıl değişir? | Azalır | Artar ; Değişmez | Isı veren madde soğur.
Katılar ısıtılınca genellikle ne olur? | Genleşir (büyür) | Küçülür ; Kaybolur | Isı alan madde genleşir.
Elektrik tellerinin yazın sarkık görünmesinin nedeni nedir? | Isınıp genleşmesi | Soğuması ; Islanması | Sıcakta teller uzar.
Hangisi gaz hâlindedir? | Su buharı | Buz ; Süt ; Tuz | Su buharı gazdır.
Çaydanlıktaki su ısıtılınca ne olur? | Kaynayıp buharlaşır | Donar ; Erir | Isı alan su buhar olur.`);
ek("f10", `Hangisi saf maddedir? | Altın | Salata ; Ayran ; Çorba | Altın tek tür maddeden oluşur.
Hangisi karışımdır? | Meyve suyu | Saf su ; Demir ; Bakır | Meyve suyunda su, şeker ve meyve vardır.
Kum ile çakıl karışımını ayırmak için ne kullanılır? | Elek | Mıknatıs ; Termometre | Elek iri taneleri tutar.
Makarnayı haşladıktan sonra suyundan ayırmak için ne kullanılır? | Süzgeç | Mıknatıs ; Termometre | Süzgeç suyu geçirir.
Deniz suyundan tuz nasıl elde edilir? | Suyun buharlaştırılmasıyla | Mıknatısla ; Elekle | Tuzlalarda deniz suyu buharlaştırılır.
Toplu iğne ve kum karışımı nasıl ayrılır? | Mıknatısla | Süzerek ; Buharlaştırarak | Mıknatıs iğneleri çeker.
Zeytinyağı ile su karıştırıldığında hangisi üstte kalır? | Zeytinyağı | Su ; İkisi karışır | Yağ sudan hafiftir.
Şeker suda çözündüğünde kaybolur mu? | Hayır, su içinde dağılır; su tatlı olur | Evet, tamamen yok olur ; Taşa dönüşür | Şeker hâlâ oradadır.
Ayran hangi maddelerden oluşan bir karışımdır? | Yoğurt ve su | Sadece su ; Sadece süt | Ayran bir karışımdır.
Hangisinde ayırma yöntemi doğru eşleştirilmiştir? | Un ve kepek → eleme | Tuzlu su → mıknatıs ; Demir tozu ve kum → buharlaştırma | Elek kepeği tutar.
Çayı demledikten sonra yaprakları ayırmak için ne kullanılır? | Süzgeç | Mıknatıs ; Elek | Süzgeç çay yapraklarını tutar.`);
ek("f11", `Hangisi doğal ışık kaynağıdır? | Ateş böceği | Lamba ; Fener ; Ekran | Ateş böceği kendi ışığını üretir.
Yıldızlar ışık kaynağı mıdır? | Evet, kendi ışıklarını üretirler | Hayır ; Sadece gündüz | Güneş de bir yıldızdır.
Gece ışık kirliliği nedeniyle ne zorlaşır? | Yıldızları görmek | Uyumak kolaylaşır ; Bitkiler hızlı büyür | Fazla ışık gökyüzünü aydınlatır.
Doğru aydınlatma için ne yapılmalıdır? | Işığı yalnızca ihtiyaç olan yere yöneltmek | Işığı gökyüzüne yöneltmek ; Gereksiz lambaları açık tutmak | Işığın boşa harcanması önlenir.
Gözlerimizi korumak için hangisi yapılmalıdır? | Güneşe çıplak gözle bakmamak | Ekrana çok yakından bakmak ; Karanlıkta kitap okumak | Güneş gözlere zarar verir.
Işık en hızlı nerede yayılır? | Boşlukta | Suda ; Camda | Işık boşlukta en hızlıdır.
Ampulün icadı insanlara ne sağladı? | Geceleri de rahatça çalışma ve okuma | Daha çok uyuma ; Hiçbir şey | Aydınlatma hayatı kolaylaştırdı.
Eskiden insanlar geceleri aydınlanmak için ne kullanırdı? | Mum ve gaz lambası | LED lamba ; Akıllı telefon | Aydınlatma araçları zamanla gelişti.
Işık kirliliği kuşları nasıl etkiler? | Yönlerini şaşırmalarına neden olur | Daha hızlı uçarlar ; Hiç etkilemez | Göçmen kuşlar yıldızlarla yön bulur.
Ay ışığı aslında kimin ışığıdır? | Güneş'in | Ay'ın kendi ışığı ; Yıldızların | Ay Güneş ışığını yansıtır.
Ayna ışığı ne yapar? | Yansıtır | Emer ; Üretir | Düz aynada ışık geri döner.`);
ek("f12", `Gitarın teli titreşince ne oluşur? | Ses | Işık ; Isı | Titreşen cisimler ses çıkarır.
Davula vurduğumuzda ses neden oluşur? | Davulun derisi titreşir | Davul ısınır ; Davul parlar | Titreşim ses demektir.
Ses hangi ortamlarda yayılabilir? | Katı, sıvı ve gaz | Sadece havada ; Sadece boşlukta | Ses maddesel ortamda yayılır.
Uzayda neden ses duyulmaz? | Ses boşlukta yayılamadığı için | Uzay çok soğuk olduğu için ; Uzay karanlık olduğu için | Ses için madde gerekir.
Hangisi gürültüye örnektir? | Gece yüksek sesle çalan müzik | Kuş cıvıltısı ; Fısıltı | Rahatsız eden sesler gürültüdür.
Gürültülü ortamlarda uzun süre kalmak neye yol açar? | İşitme kaybı ve stres | Daha iyi duymaya ; Uyku kalitesinin artmasına | Gürültü sağlığa zararlıdır.
Ses yalıtımı için duvarlara ne kaplanabilir? | Ses emici malzeme (köpük, halı) | Cam ; Metal levha | Yumuşak malzemeler sesi emer.
Yankı nasıl oluşur? | Sesin bir engelden yansımasıyla | Sesin yok olmasıyla ; Işığın kırılmasıyla | Dağlarda ve boş salonlarda yankı duyulur.
Hangisi doğal ses kaynağıdır? | Gök gürültüsü | Zil ; Radyo ; Siren | Doğada kendiliğinden oluşur.
Kulaklarımızı korumak için ne yapmalıyız? | Çok yüksek sesten uzak durmalıyız | Kulaklıkla yüksek ses dinlemeliyiz ; Kulağımıza cisim sokmalıyız | Yüksek ses kulağa zarar verir.
Kütüphanede neden sessiz olunur? | Başkalarını rahatsız etmemek için | Kitaplar kırılmasın diye ; Hiçbir sebep yok | Saygı gereği sessiz olunur.
Hastanelerin çevresinde korna çalmak neden yasaktır? | Hastaların dinlenmesi için | Arabalar bozulmasın diye ; Kuşlar kaçmasın diye | Gürültü hastaları rahatsız eder.`);
ek("f13", `Geri dönüşüm sembolü neye benzer? | Birbirini takip eden üç ok | Bir kalp ; Bir yıldız | Üç ok döngüyü gösterir.
Hangisi geri dönüştürülemez? | Kullanılmış peçete | Gazete ; Cam şişe ; Teneke kutu | Kirli peçete geri dönüştürülmez.
Alüminyum kutular geri dönüştürülürse ne olur? | Yeni kutular yapılır, enerji tasarrufu sağlanır | Çöpe gider ; Toprağa karışır | Alüminyum defalarca geri dönüştürülebilir.
Cam atıklar hangi renk kutuya atılır? | Yeşil | Mavi ; Sarı | Kutudaki resim takip edilmelidir.
Plastik atıklar hangi renk kutuya atılır? | Sarı | Yeşil ; Mavi | Bölgeye göre renk değişebilir.
Gereğinden fazla ürün almak neye yol açar? | İsrafa | Tasarrufa ; Geri dönüşüme | İhtiyaç kadar alınmalıdır.
Bilinçli tüketici alışverişte ne yapar? | Fiyat ve kaliteyi karşılaştırır | Reklamdaki her şeyi alır ; Etiket okumaz | Araştırarak alışveriş yapar.
Kullanılmış yemek yağı nasıl değerlendirilir? | Toplama noktasına verilir, biyodizel yapılır | Lavaboya dökülür ; Toprağa gömülür | Atık yağ suları kirletir.
Eski kıyafetlerimizi ne yapabiliriz? | İhtiyacı olanlara bağışlayabiliriz | Yakabiliriz ; Dereye atabiliriz | Paylaşmak israfı önler.
Tek kullanımlık plastik bardak yerine ne kullanabiliriz? | Kendi matarası veya bardağı | Daha çok plastik bardak ; Kâğıt havlu | Tekrar kullanılabilir ürünler doğayı korur.
Kâğıdın iki yüzünü de kullanmak neye örnektir? | Tasarruf | İsraf ; Kirlilik | Kâğıt ağaçtan yapılır.`);
ek("f14", `Elektrik devresinin çalışması için devre nasıl olmalıdır? | Kapalı (tamamlanmış) | Açık ; Yarım | Elektrik kapalı devrede akar.
Anahtar açık olursa ne olur? | Ampul söner | Ampul daha parlak yanar ; Pil dolar | Açık devrede akım geçmez.
Pilin artı (+) ve eksi (−) uçlarına ne denir? | Kutup | Kablo ; Duy | Pilin iki kutbu vardır.
Hangisi yalıtkandır? | Lastik eldiven | Bakır tel ; Demir çivi | Lastik elektriği iletmez.
Hangisi iletkendir? | Alüminyum folyo | Tahta çubuk ; Plastik kaşık | Metaller iletkendir.
Devredeki pil sayısı azaltılırsa ampul nasıl yanar? | Daha sönük | Daha parlak ; Aynı | Enerji azalır.
Elektrik devresi şemasında pil hangi sembolle gösterilir? | Uzun ve kısa iki çizgi | Daire içinde çarpı ; Zikzak çizgi | Uzun çizgi artı kutuptur.
Elektrik devresi şemasında ampul hangi sembolle gösterilir? | Daire içinde çarpı | Uzun ve kısa iki çizgi ; Düz çizgi | Ampulün şema sembolüdür.
Bir kabloda iletken olan kısım hangisidir? | İçindeki bakır tel | Dışındaki plastik ; Hiçbiri | Plastik koruma amaçlıdır.
Ampul yanıyorsa elektrik nereden geçer? | Ampulün içindeki telden (flamandan) | Ampulün camından ; Duyun plastiğinden | Flaman ısınıp ışık verir.
Hangisi elektrik enerjisini depolar? | Pil | Ampul ; Anahtar | Pil kimyasal enerjiyi elektriğe çevirir.`);
ek("f15", `Elektrikli cihazları kullandıktan sonra ne yapmalıyız? | Kapatıp fişini çekmeliyiz | Açık bırakmalıyız ; Üzerine su dökmeliyiz | Hem güvenlik hem tasarruf sağlar.
Hangisi tehlikeli bir davranıştır? | Islak elle prize dokunmak | Fişi tutarak çekmek ; Cihazı kapatmak | Su elektriği iletir.
Elektrik kesildiğinde hangisi kullanılabilir? | El feneri | Elektrikli ısıtıcı ; Buzdolabı | El feneri pille çalışır.
Uzatma kablolarını halı altından geçirmek neden tehlikelidir? | Kablo ezilip ısınabilir, yangın çıkabilir | Kablo güzel görünmez ; Halı kirlenir | Kablolar açıkta olmalıdır.
Fırtınada elektrik direğine yaslanmak doğru mudur? | Hayır | Evet ; Yağmur yağmıyorsa evet | Direkler tehlikelidir.
Su ısıtıcısının kablosu ıslanırsa ne yapmalıyız? | Kullanmamalı ve bir büyüğe haber vermeliyiz | Hemen fişe takmalıyız ; Islak elle tutmalıyız | Elektrik çarpabilir.
Prizlerden kıvılcım çıkıyorsa ne yapmalıyız? | Kullanmayıp bir büyüğe söylemeliyiz | Fişi zorla takmalıyız ; Üzerine su dökmeliyiz | Bu bir arıza işaretidir.
Elektrikle çalışan oyuncakları banyoda kullanmak neden tehlikelidir? | Su ve elektrik bir arada tehlikelidir | Oyuncak kirlenir ; Banyo dar olduğu için | Su elektriği iletir.
Gereksiz yanan lambaları söndürmek neyi sağlar? | Elektrik tasarrufunu | Elektrik israfını ; Lambanın bozulmasını | Tasarruf doğayı korur.
Elektrik çarpmasına karşı hangi madde korur? | Yalıtkan malzeme (plastik, lastik) | Metal ; Su | Yalıtkanlar elektriği geçirmez.
Bir çocuk prize tel sokmaya çalışıyorsa ne yapmalıyız? | Hemen durdurup bir büyüğe haber vermeliyiz | Seyretmeliyiz ; Yardım etmeliyiz | Bu hayati tehlikedir.`);
ek("so1", `Hangisi bir ilgi alanıdır? | Resim yapmayı sevmek | Doğum tarihi ; Göz rengi | İlgi alanları sevdiğimiz etkinliklerdir.
Kimlik kartımızda hangi bilgi yer alır? | Doğum tarihi | En sevdiğimiz renk ; Arkadaşımızın adı | Kimlik resmî bilgileri içerir.
Herkesin parmak izi nasıldır? | Kişiye özel ve farklı | Herkeste aynı ; Yaşla değişen | Parmak izi kimliğimizin bir parçasıdır.
Hangisi kişisel bir güçlü yöndür? | Sorumluluk sahibi olmak | Sürekli ertelemek ; Kuralları çiğnemek | Güçlü yönler bizi başarılı yapar.
Kendimizi geliştirmek için ne yapabiliriz? | Kitap okumak ve yeni şeyler denemek | Hiç çalışmamak ; Her şeyden vazgeçmek | Gelişim çaba ister.
Arkadaşımızın farklı bir yeteneği varsa ne yapmalıyız? | Takdir etmeliyiz | Kıskanmalıyız ; Alay etmeliyiz | Herkesin yeteneği farklıdır.
Fiziksel özelliklerimizden biri hangisidir? | Boy uzunluğu | Cesaret ; Sabır | Boy, görünüşle ilgilidir.
Duygusal özelliklerimizden biri hangisidir? | Merhametli olmak | Saç rengi ; Kilo | Duygular kişiliğimizin parçasıdır.
Hangisi bizi diğerlerinden ayıran bir özelliktir? | Sesimiz | Okulumuzun adı ; Hava durumu | Sesimiz kişiye özeldir.
Gelecekte ne olmak istediğimizi düşünmeye ne denir? | Hayal kurma ve hedef belirleme | Ödev yapmak ; Uyumak | Hedefler bize yol gösterir.
Kendimizi sevmek ve değerli hissetmek neyi gösterir? | Öz saygıyı | Kibri ; Tembelliği | Öz saygı kendimize değer vermektir.`);
ek("so2", `Annemizin babasına ne denir? | Dede | Dayı ; Amca | Anne ve babanın babası dededir.
Dayımızın eşine ne denir? | Yenge | Teyze ; Hala | Amca ve dayının eşine yenge denir.
Halamızın eşine ne denir? | Enişte | Yenge ; Dayı | Hala ve teyzenin eşine enişte denir.
Kardeşimizin çocuğu bizim neyimiz olur? | Yeğen | Kuzen ; Torun | Kardeş çocuğuna yeğen denir.
Soy ağacında en üstte genellikle kimler yer alır? | Büyük dede ve büyük nineler | Kardeşler ; Kuzenler | En yaşlı kuşak üsttedir.
Ailemizdeki değişimlere örnek hangisidir? | Yeni bir kardeşin doğması | Mevsimin değişmesi ; Okulun boyanması | Aile zamanla değişir.
Babamızın annesi bizim neyimizdir? | Babaanne | Anneanne ; Teyze | Babanın annesi babaannedir.
Ailemizin geçmişini öğrenmek için kime sorabiliriz? | Büyüklerimize | Tanımadığımız birine ; Hiç kimseye | Büyüklerimiz anılarını anlatır.
Ailede ortak karar nasıl verilir? | Herkesin fikri dinlenerek | Sadece en küçük karar verir ; Hiç konuşmadan | Fikir alışverişi önemlidir.
Aile büyüklerine nasıl davranmalıyız? | Saygılı ve sevgi dolu | Kaba ; İlgisiz | Büyüklerimize saygı gösteririz.
Aile içinde yardımlaşmaya örnek hangisidir? | Sofrayı birlikte kurmak | Odayı dağınık bırakmak ; Hiç yardım etmemek | Görev paylaşımı aileyi güçlendirir.`);
ek("so3", `Okulda kendimizi güvende hissetmek hangi hakkımızdır? | Güvenlik hakkı | Oy hakkı ; Mülkiyet hakkı | Her çocuk güvende olmalıdır.
Evde oyuncaklarımızı toplamak neyimizdir? | Sorumluluğumuz | Hakkımız ; Cezamız | Sorumluluklar görevlerimizdir.
Haklarımızı kullanırken başkalarının hakkına saygı göstermezsek ne olur? | Huzursuzluk ve kavga çıkar | Herkes mutlu olur ; Hiçbir şey olmaz | Hak ve sorumluluk birlikte düşünülür.
Bir oyunda sıra beklemek neyi gösterir? | Başkalarının haklarına saygıyı | Tembelliği ; Korkuyu | Sıra herkesin hakkıdır.
Sınıfta düşüncemizi söylemek hangi hakkımızdır? | Düşünceyi ifade etme hakkı | Seyahat hakkı ; Mülkiyet hakkı | Fikirlerimizi saygıyla söyleriz.
Hangisi bir sorumluluk değildir? | Oyun oynama hakkını kullanmak | Ödev yapmak ; Okula zamanında gitmek | Oyun oynamak bir haktır.
Kütüphaneden ödünç alınan kitabı zamanında getirmemek kimin hakkını çiğner? | Kitabı bekleyen diğer okurların | Kimsenin ; Sadece kütüphanecinin | Ortak kaynaklar herkesindir.
Seçimlerde oy vermek hangi hakkımızdır? | Seçme hakkı | Oyun hakkı ; Sağlık hakkı | Sınıf seçimleri buna örnektir.
Okul eşyalarını korumak kimin sorumluluğudur? | Herkesin | Sadece müdürün ; Sadece temizlik görevlisinin | Okul hepimizindir.
Sağlıklı beslenme hakkının karşılığında bizim sorumluluğumuz nedir? | Yemekleri israf etmemek | Yemekleri atmak ; Hiç yememek | Hakkımızı doğru kullanmalıyız.
Hakkımız çiğnenirse ne yapmalıyız? | Bir büyüğe ya da öğretmene söylemeliyiz | Kavga etmeliyiz ; Saklamalıyız | Sorunları konuşarak çözeriz.`);
ek("so4", `Hangisi bir el sanatımızdır? | Bakır işlemeciliği | Robot yapımı ; Bilgisayar programcılığı | Bakır işçiliği geleneksel bir sanattır.
Nevruz ne zaman kutlanır? | 21 Mart | 23 Nisan ; 29 Ekim | Baharın gelişi kutlanır.
Hıdırellez ne zaman kutlanır? | 6 Mayıs | 21 Mart ; 30 Ağustos | Baharın coşkuyla karşılandığı bir gelenektir.
Gaziantep'in meşhur tatlısı hangisidir? | Baklava | Sütlaç ; Kazandibi | Gaziantep baklavası çok ünlüdür.
Halk müziğimizde kullanılan çalgı hangisidir? | Bağlama | Piyano ; Elektro gitar | Bağlama geleneksel çalgımızdır.
"Komşu komşunun külüne muhtaçtır." atasözü hangi değeri anlatır? | Yardımlaşma ve komşuluk | Tembellik ; Kıskançlık | Komşular birbirine destek olur.
Bayram sabahı neler yapılır? | Büyükler ziyaret edilir, el öpülür | Herkes evde yalnız kalır ; Kimseyle konuşulmaz | Bayramlar birlik zamanıdır.
Hangisi geleneksel bir giyim eşyasıdır? | Yemeni ve şalvar | Kot ceket ; Spor ayakkabı | Yöresel kıyafetler kültürümüzü yansıtır.
Kültürümüzü yaşatmak için ne yapabiliriz? | Gelenekleri öğrenip uygulayabiliriz | Unutabiliriz ; Eski eşyaları atabiliriz | Kültür yaşatıldıkça korunur.
Türk kahvesi hangi kurumun listesinde kültürel miras olarak yer alır? | UNESCO | FIFA ; NASA | Türk kahvesi kültürü korunan bir mirastır.
"Kırk yıl hatırı vardır" sözü neyle ilgilidir? | Bir fincan kahve | Bir dilim ekmek ; Bir bardak su | Misafirperverliği anlatır.`);
ek("so5", `Millî Mücadele'nin başlangıcı sayılan tarih hangisidir? | 19 Mayıs 1919 | 23 Nisan 1920 ; 29 Ekim 1923 | Atatürk bu tarihte Samsun'a çıktı.
Kurtuluş Savaşı'nda halkın orduya destek olması neyi gösterir? | Millî birlik ve beraberliği | Korkuyu ; Bencilliği | Kadın, erkek, çocuk herkes destek oldu.
Cephede mermi taşıyan kadınlar nasıl taşırdı? | Kağnılarla | Uçaklarla ; Trenle | Kağnılar öküzlerin çektiği arabalardır.
Kara Fatma kimdir? | Millî Mücadele'de savaşan kadın kahraman | Bir şair ; Bir öğretmen | Kara Fatma cephede savaştı.
Sütçü İmam hangi şehrin kahramanıdır? | Kahramanmaraş | İzmir ; Erzurum | Fransızlara karşı ilk kurşunlardan birini attı.
İstiklal Marşı ne zaman kabul edildi? | 12 Mart 1921 | 29 Ekim 1923 ; 19 Mayıs 1919 | Mehmet Akif Ersoy yazdı.
Atatürk'ün annesinin adı nedir? | Zübeyde Hanım | Makbule Hanım ; Latife Hanım | Annesi Zübeyde Hanım'dır.
Cumhuriyetin ilk cumhurbaşkanı kimdir? | Mustafa Kemal Atatürk | İsmet İnönü ; Celal Bayar | 1923'te cumhurbaşkanı oldu.
TBMM nerede açıldı? | Ankara | İstanbul ; Bursa | 23 Nisan 1920'de Ankara'da açıldı.
Büyük Taarruz'un yönetildiği yer neresidir? | Kocatepe | Çanakkale ; Sakarya | Atatürk Kocatepe'den yönetti.
Kurtuluş Savaşı'nı kazanmamızı sağlayan en önemli güç nedir? | Milletin birlik olması ve inancı | Yabancı devletlerin yardımı ; Şans | Millet tek yürek oldu.`);
ek("so6", `Bir olayın kaç yıl önce olduğunu hesaplamak için ne yaparız? | İçinde bulunduğumuz yıldan olayın yılını çıkarırız | Yılları toplarız ; Yılları çarparız | Örnek: 2026 − 1923.
1923 ile 2026 arasında kaç yıl vardır? | 103 | 93 ; 113 ; 3949 | 2026 − 1923 = 103.
Dedelerimizin çocukluğunda evlerde hangisi yaygındı? | Radyo | Akıllı telefon ; Tablet | Teknoloji zamanla değişti.
Eskiden çamaşırlar nasıl yıkanırdı? | Elde, leğende | Çamaşır makinesinde ; Robotla | Makineler sonra yaygınlaştı.
Bir müzede eski bir kılıç görürsek bu ne tür bir kaynaktır? | Tarihî eser (görsel/somut kaynak) | Sözlü kaynak ; Hayalî kaynak | Eşyalar geçmiş hakkında bilgi verir.
Annemizin anlattığı çocukluk anıları ne tür bir kaynaktır? | Sözlü kaynak | Yazılı kaynak ; Görsel kaynak | Dinleyerek öğreniriz.
Eski bir fotoğraf ne tür bir kaynaktır? | Görsel kaynak | Sözlü kaynak ; Hayalî kaynak | Fotoğraflar geçmişi gösterir.
Kronolojik sıralama ne demektir? | Olayları oluş sırasına göre dizmek | Alfabetik sıralamak ; Rastgele dizmek | Zaman sırası demektir.
Hangisi en eski olaydır? | İstanbul'un fethi (1453) | Cumhuriyetin ilanı (1923) ; TBMM'nin açılışı (1920) | 1453 en eskisidir.
Geçmişi öğrenmenin bize faydası nedir? | Bugünü anlamamıza ve geleceğe hazırlanmamıza yardım eder | Hiçbir faydası yoktur ; Sadece sınav içindir | Tarih bize ders verir.
On yıllık süreye ne denir? | On yıl (onyıl) | Yüzyıl ; Bin yıl | 10 yıl = bir on yıl.`);
ek("so7", `Kuzeydoğu hangi iki ana yönün arasındadır? | Kuzey ve doğu | Güney ve batı ; Kuzey ve batı | Ara yönler iki ana yön arasındadır.
Güneybatı hangi iki ana yönün arasındadır? | Güney ve batı | Kuzey ve doğu ; Güney ve doğu | Ara yön örneğidir.
Sabah okula giderken Güneş tam önümüzdeyse hangi yöne gidiyoruz? | Doğu | Batı ; Kuzey | Sabah Güneş doğudadır.
Akşam Güneş tam önümüzdeyse hangi yöne bakıyoruz? | Batı | Doğu ; Güney | Güneş batıda batar.
Kroki çizerken kullandığımız işaretlerin açıklandığı bölüme ne denir? | Açıklama (lejant) | Başlık ; Ölçek | İşaretlerin anlamı yazılır.
Krokiye neden yön oku konur? | Yönleri doğru gösterebilmek için | Süslemek için ; Boş yer kalmasın diye | Kuzey oku yön bulmayı kolaylaştırır.
Pusula yoksa gündüz yön bulmak için neden yararlanabiliriz? | Güneş'ten | Ay'dan ; Bulutlardan | Güneş doğudan doğar.
Camilerin mihrapları genellikle hangi yöne bakar? (Türkiye'de) | Güneydoğu (Kâbe yönü) | Kuzey ; Batı | Türkiye'den Kâbe güneydoğu yönündedir.
Haritada mavi renk genellikle neyi gösterir? | Su (deniz, göl, akarsu) | Dağları ; Ormanları | Renkler haritada anlam taşır.
Haritada yeşil renk genellikle neyi gösterir? | Alçak düzlükleri (ovaları) | Denizleri ; Yüksek dağları | Fiziki haritalarda yeşil alçak yerlerdir.
Kendi okulumuzun krokisini çizerken neyi göstermeliyiz? | Önemli bölümleri ve yolları | Öğrencilerin adlarını ; Hava durumunu | Kroki yer tarifinde kullanılır.`);
ek("so8", `Fırtına uyarısı yapıldığında ne yapmalıyız? | Evde kalıp güvenli yerlerde durmalıyız | Denize girmeliyiz ; Ağaç altında beklemeliyiz | Uyarılar hayat kurtarır.
Deprem sırasında evde en güvenli yer neresidir? | Sağlam bir masanın yanı | Pencere önü ; Merdiven boşluğu | Çök–kapan–tutun yapılır.
Deprem sonrası binadan çıkarken neyi kullanmamalıyız? | Asansörü | Merdiveni ; Kapıyı | Asansör durabilir.
Yangın anında hangi numara aranır? | 112 | 155 ; 123 | 112 Acil Çağrı Merkezi'dir.
Yangında dumanlı ortamda nasıl hareket etmeliyiz? | Eğilerek, ağzımızı ıslak bezle kapatarak | Dik durarak koşarak ; Asansörle | Duman yukarıda birikir.
Seller genellikle ne zaman olur? | Ani ve aşırı yağışlardan sonra | Kuraklıkta ; Karlı havada | Dereler taşar.
Kuraklık hangi sorunlara yol açar? | Tarım ürünlerinin azalmasına | Sel olmasına ; Çığ düşmesine | Su kıtlığı yaşanır.
Hava tahminlerini hangi kurum yapar? | Meteoroloji | AFAD ; Kızılay | Meteoroloji hava durumunu bildirir.
Afet çantasında hangisi bulunmamalıdır? | Bozulabilen taze yiyecekler | Su ; El feneri ; Düdük | Bozulmayan yiyecekler konur.
Toplanma alanı nedir? | Afet sonrası güvenle bir araya gelinen açık alan | Okul kantini ; Alışveriş merkezi | Her mahallenin toplanma alanı vardır.
Çığ tehlikesi olan bölgelerde ne yapılmamalıdır? | Uyarılara rağmen dağa çıkmak | Uyarılara uymak ; Evde kalmak | Çığ çok tehlikelidir.`);
ek("so9", `Hezarfen Ahmet Çelebi neyi denediği anlatılır? | Kanat takarak uçmayı | Denizaltı yapmayı ; Telefon icat etmeyi | Galata Kulesi'nden uçtuğu anlatılır.
Uçağı ilk kez başarıyla uçuranlar kimlerdir? | Wright Kardeşler | Edison ve Bell ; Grimm Kardeşler | 1903'te ilk motorlu uçuşu yaptılar.
Matbaanın icadı ne sağladı? | Kitapların hızla çoğaltılmasını | Yemek pişirmeyi ; Uçmayı | Bilgi daha kolay yayıldı.
Telefonun mucidi kimdir? | Graham Bell | Thomas Edison ; Isaac Newton | Telefon iletişimi değiştirdi.
Bir icat yapmak için ilk adım nedir? | Bir sorunu fark etmek | Hiç düşünmemek ; Vazgeçmek | İcatlar ihtiyaçtan doğar.
Bilgisayar ne işe yarar? | Bilgi işlemeye ve iletişime | Toprağı sürmeye ; Su kaynatmaya | Bilgisayar hayatımızı kolaylaştırır.
Gök bilimi çalışmalarıyla tanınan Türk bilgini kimdir? | Ali Kuşçu | Mimar Sinan ; Piri Reis | Ali Kuşçu astronomi çalışmaları yaptı.
Mimar Sinan neyle tanınır? | Muhteşem cami ve köprüleriyle | Uçaklarıyla ; Haritalarıyla | Süleymaniye ve Selimiye camileri onun eseridir.
Türk bilim insanı Aziz Sancar hangi ödülü kazanmıştır? | Nobel Kimya Ödülü | Oscar Ödülü ; Altın Top | 2015'te Nobel aldı.
Buzdolabının icadı insanlara ne kolaylık sağladı? | Yiyecekleri uzun süre saklamayı | Hızlı uçmayı ; Uzağı görmeyi | Gıdalar bozulmadan korunur.
Bir buluşu geliştirirken hata yapmak ne anlama gelir? | Öğrenme sürecinin parçasıdır | Hiç başarılamayacağını gösterir ; Vazgeçmek gerektiğini gösterir | Mucitler hatalarından öğrenir.`);
ek("so10", `Ekran süresi ne demektir? | Telefon, tablet ve televizyon karşısında geçirilen süre | Uyuma süresi ; Okulda geçen süre | Çocuklar için sınırlı olmalıdır.
Sosyal medyada paylaşım yapmadan önce ne düşünmeliyiz? | Bu bilgi güvenli mi, kimseyi üzer mi? | Ne kadar beğeni alırım? ; Hiçbir şey | Paylaşımlar kalıcıdır.
Güçlü bir şifre nasıl olmalıdır? | Harf, rakam ve işaretlerden oluşmalı | Sadece adımız olmalı ; 1234 olmalı | Güçlü şifre tahmin edilemez.
İnternette karşılaştığımız bir haberin doğru olup olmadığını nasıl anlarız? | Güvenilir kaynaklardan kontrol ederek | İlk gördüğümüze inanarak ; Arkadaşımıza sormadan paylaşarak | Doğrulama yapmalıyız.
Oyun oynarken biri bizi tehdit ederse ne yapmalıyız? | Oyunu kapatıp bir büyüğe söylemeliyiz | Cevap verip kavga etmeliyiz ; Saklamalıyız | Büyükler bizi korur.
Teknolojiyi doğru kullanmak neyi sağlar? | Öğrenmeyi ve iletişimi kolaylaştırır | Bağımlılık yapar ; Uykumuzu artırır | Doğru kullanım faydalıdır.
Kulaklıkla müzik dinlerken ses ne kadar olmalıdır? | Düşük ve rahatsız etmeyecek düzeyde | Sonuna kadar açık ; Kulağı acıtacak kadar | Yüksek ses işitmeye zarar verir.
Bilgisayar başında otururken nasıl oturmalıyız? | Sırtımız dik, ekran göz hizasında | Kambur ve ekrana çok yakın ; Yatarak | Doğru oturuş duruşu korur.
Tanımadığımız birinden e-posta ile gelen dosyayı açmalı mıyız? | Hayır | Evet ; Her zaman | Virüs içerebilir.
Teknoloji bağımlılığının bir belirtisi hangisidir? | Ekran olmadan huzursuz olmak | Kitap okumayı sevmek ; Arkadaşlarla parkta oynamak | Dengeli kullanım önemlidir.
Aile ile birlikte geçirilen zamanda telefon kullanımı nasıl olmalıdır? | Az olmalı, ailemize zaman ayırmalıyız | Sürekli telefonla oynamalıyız ; Konuşmadan ekrana bakmalıyız | Aile zamanı değerlidir.`);
ek("so11", `Hangisi temel bir ihtiyaçtır? | Barınma (ev) | Oyun konsolu ; Pahalı ayakkabı | Barınma yaşam için gereklidir.
Hangisi bir istektir? | Yeni bir oyuncak araba | Su ; Yemek ; Kışlık mont | Olmadan da yaşayabiliriz.
Harçlığımızı nasıl kullanmalıyız? | Önce ihtiyaçlarımız, sonra isteklerimiz için | Hepsini hemen harcayarak ; Hiç düşünmeden | Planlı harcama önemlidir.
Ailemizin geliri neye denir? | Kazandığı para | Harcadığı para ; Borcu | Gelir kazanılan paradır.
Ailemizin gideri neye denir? | Harcanan para | Kazanılan para ; Biriktirilen para | Fatura, kira, mutfak masrafları giderdir.
Bütçe yaparken neye dikkat edilir? | Giderlerin gelirden fazla olmamasına | Gelirin hiç önemli olmamasına ; Her şeyi almaya | Denkli bütçe huzur sağlar.
Kumbara ne işe yarar? | Para biriktirmeye | Para harcamaya ; Oyun oynamaya | Tasarruf alışkanlığı kazandırır.
İhtiyaçlar ve istekler sınırsız, kaynaklar ise nasıldır? | Sınırlı | Sınırsız ; Hiç yok | Bu yüzden seçim yapmalıyız.
Haftada 15 TL biriktiren çocuk 4 haftada kaç TL biriktirir? | 60 TL | 19 TL ; 45 TL ; 75 TL | 15 × 4 = 60.
Gıda alırken neye öncelik verilmelidir? | Sağlıklı ve ihtiyaç olan ürünlere | Reklamdaki ürünlere ; Paketi güzel olanlara | İhtiyaçlar önce gelir.
Bir ürünü almadan önce kendimize ne sormalıyız? | Buna gerçekten ihtiyacım var mı? | En pahalısı hangisi? ; Arkadaşım aldı mı? | Bilinçli seçim yapmalıyız.`);
ek("so12", `Tüketici hakları neden vardır? | Satın aldığımız ürün ve hizmetlerde haklarımızı korumak için | Satıcıları cezalandırmak için ; Alışverişi yasaklamak için | Tüketiciler korunmalıdır.
Ürünün içindekiler bilgisi nerede yazar? | Etiketinde | Fiyat etiketinde ; Hiçbir yerde | Etiket ürün hakkında bilgi verir.
Bozuk çıkan bir oyuncağı geri götürmek için ne gerekir? | Fiş veya fatura | Kutunun rengi ; Arkadaşımızın şahitliği | Fiş alışverişin belgesidir.
TSE işareti olan ürün ne anlama gelir? | Standartlara uygun ve güvenli | Çok pahalı ; Yabancı malı | TSE Türk Standartları Enstitüsü'dür.
İndirim olduğu için ihtiyacımız olmayan ürün almak doğru mudur? | Hayır, israftır | Evet, her zaman ; Sadece çok indirimliyse | İhtiyaç önceliklidir.
Yerli malı kullanmanın faydası nedir? | Ülke ekonomisini destekler | Ekonomiye zarar verir ; Hiçbir faydası yoktur | Yerli üretici desteklenir.
Ambalajı yırtık bir gıdayı almalı mıyız? | Hayır | Evet ; Ucuzsa evet | Gıda bozulmuş veya kirlenmiş olabilir.
Pazarda meyve alırken nelere dikkat etmeliyiz? | Taze ve temiz olmasına | En büyük olmasına ; Renginin parlak olmasına | Kalite önemlidir.
Hangisi bilinçsiz bir tüketici davranışıdır? | Etiket okumadan ürün almak | Fiyat karşılaştırmak ; Son kullanma tarihine bakmak | Bilinçli tüketici araştırır.
Garanti süresi içinde bozulan ürün için ne yapılabilir? | Ücretsiz tamir veya değişim istenebilir | Çöpe atılmalıdır ; Hiçbir şey yapılamaz | Garanti belgesi saklanmalıdır.
Tüketici sorunlarında hangi numara aranabilir? | ALO 175 | 155 ; 112 | Tüketici danışma hattıdır.`);
ek("so13", `Çocuk Hakları Sözleşmesi hangi yıl kabul edildi? | 1989 | 1923 ; 2000 ; 1950 | Birleşmiş Milletler tarafından kabul edildi.
Hangisi çocukların korunma hakkına örnektir? | Çocukların şiddetten korunması | Çocukların ağır işlerde çalıştırılması ; Çocukların okula gönderilmemesi | Çocuklar her türlü kötülükten korunmalıdır.
Türkiye'de zorunlu eğitim kaç yıldır? | 12 yıl | 5 yıl ; 8 yıl ; 16 yıl | 4+4+4 sistemidir.
Bir vatandaşın görevlerinden biri hangisidir? | Kanunlara uymak | Kuralları çiğnemek ; Vergiden kaçmak | Vatandaşlık sorumluluk ister.
Bayrağımıza ve marşımıza saygı neyi gösterir? | Vatan sevgisini | Korkuyu ; Zorunluluğu | Millî sembollerimiz değerlidir.
Engelli bir arkadaşımıza nasıl davranmalıyız? | Eşit ve saygılı | Alay ederek ; Dışlayarak | Herkes eşit haklara sahiptir.
Çocukların sağlıklı büyüyebilmesi için ailelerin sorumluluğu nedir? | Beslenme, barınma ve eğitim ihtiyaçlarını karşılamak | Onları çalıştırmak ; Okula göndermemek | Aileler çocuklarını korur.
Ülkemizde 18 yaşını dolduran vatandaşlar hangi hakkı kazanır? | Seçimlerde oy kullanma hakkı | Okula gitme hakkı ; Oyun hakkı | Seçme hakkı 18 yaşında başlar.
Bir çocuğun adının olması hangi hakkıyla ilgilidir? | Kimlik hakkı | Oyun hakkı ; Mülkiyet hakkı | Her çocuğun bir adı ve vatandaşlığı olmalıdır.
Hangi davranış iyi bir vatandaş olmaya örnektir? | Çevreyi temiz tutmak | Ortak alanlara zarar vermek ; Kurallara uymamak | Vatandaşlık sorumluluk gerektirir.
Çocuk haklarının ihlal edildiğini görürsek ne yapmalıyız? | Bir büyüğe ya da öğretmene haber vermeliyiz | Görmezden gelmeliyiz ; Saklamalıyız | Çocukları korumak hepimizin görevidir.`);
ek("so14", `Kızılay hangi sembolle bilinir? | Kırmızı hilal | Yeşil yaprak ; Mavi yıldız | Kızılay'ın simgesi kırmızı hilaldir.
TEMA Vakfı'nın amacı nedir? | Erozyonla mücadele ve ağaçlandırma | Kan bağışı toplamak ; Afet yönetmek | Toprağı korumak için çalışır.
Yeşilay neyle mücadele eder? | Bağımlılıklarla | Erozyonla ; Yangınla | Sigara, alkol ve teknoloji bağımlılığıyla mücadele eder.
Kan bağışı yapan kişi neye katkı sağlar? | Başka birinin hayatını kurtarmaya | Kendi kilosunu artırmaya ; Hiçbir şeye | Kan bağışı hayat kurtarır.
AFAD'ın görevi nedir? | Afet ve acil durumları yönetmek | Ağaç dikmek ; Okul yapmak | Afet ve Acil Durum Yönetimi Başkanlığı'dır.
Gönüllü olarak yardım etmek ne anlama gelir? | Karşılık beklemeden yardım etmek | Para karşılığında çalışmak ; Zorla çalışmak | Gönüllülük toplumu güçlendirir.
LÖSEV kimlere destek olur? | Lösemili çocuklara | Sokak hayvanlarına ; Ormanlara | Lösemili çocuklar ve aileleri desteklenir.
Okulda "Kardeş Okul" kampanyası neye örnektir? | Dayanışmaya | Rekabete ; İsrafa | Okullar birbirine destek olur.
Darüşşafaka ne yapar? | Anne ya da babasını kaybetmiş çocukların eğitimine destek olur | Ağaç diker ; Yol yapar | Köklü bir eğitim kurumudur.
Mahallede yaşlı komşumuzun alışverişine yardım etmek neye örnektir? | Yardımlaşma | Kıskançlık ; Tembellik | Komşuluk ilişkileri güçlenir.
Yardım kampanyalarına nasıl katkı sağlayabiliriz? | Kullanmadığımız kitap ve kıyafetleri bağışlayarak | Hiçbir şey yapmayarak ; Eşyaları atarak | Küçük katkılar büyük fark yaratır.
Afet bölgelerine yardım ulaştıran kuruluşlardan biri hangisidir? | Türk Kızılay | Meteoroloji ; Tapu Müdürlüğü | Kızılay afetlerde yardım ulaştırır.`);
ek("so15", `Türkiye'nin batısındaki komşusu hangisidir? | Yunanistan | İran ; Irak | Yunanistan ve Bulgaristan batı komşularımızdır.
Türkiye'nin doğusundaki komşusu hangisidir? | İran | Bulgaristan ; Yunanistan | İran doğu komşumuzdur.
Türkiye'nin güneyindeki komşusu hangisidir? | Suriye | Gürcistan ; Bulgaristan | Suriye ve Irak güney komşularımızdır.
Türkiye'nin kuzeydoğusundaki komşusu hangisidir? | Gürcistan | Irak ; Suriye | Gürcistan Karadeniz kıyısındadır.
Kazakistan ile ortak özelliğimiz hangisidir? | Türk dili ve kültürü | Aynı denize kıyısı olması ; Aynı başkenti olması | Kazakistan bir Türk Cumhuriyeti'dir.
İtalya'nın başkenti neresidir? | Roma | Paris ; Madrid | Roma tarihî bir şehirdir.
Çin'in ünlü yapısı hangisidir? | Çin Seddi | Eyfel Kulesi ; Piramitler | Çin Seddi çok uzun bir surdur.
Türkiye'ye en çok turist hangi amaçla gelir? | Tarihî yerleri ve doğal güzellikleri görmek | Kar yağışını izlemek için ; Okula gitmek için | Türkiye zengin bir turizm ülkesidir.
Japonların geleneksel kıyafeti hangisidir? | Kimono | Şalvar ; Kilt | Kimono Japon kültürüne aittir.
Mısır hangi kıtadadır? | Afrika | Avrupa ; Asya ; Amerika | Mısır kuzey Afrika'dadır.
Ülkemizin başkenti neresidir? | Ankara | İstanbul ; İzmir | Ankara 1923'te başkent oldu.
Farklı ülkelerden insanlarla iletişim kurmak için ne öğrenmek faydalıdır? | Yabancı dil | Yüzme ; Satranç | Yabancı dil iletişimi kolaylaştırır.`);
ek("dk1", `"Allah'a emanet ol." sözü ne zaman söylenir? | Vedalaşırken | Yemek yerken ; Uyanırken | Birine iyi dileklerde bulunmaktır.
"Hayırlı olsun." ne zaman söylenir? | Yeni bir başlangıçta | Hapşırınca ; Uyurken | Yeni ev, iş, doğum gibi durumlarda söylenir.
"Geçmiş olsun." ne zaman söylenir? | Hasta ya da sıkıntılı birine | Bayramda ; Doğum gününde | İyileşme dileğidir.
"Allah kabul etsin." ne zaman söylenir? | İbadet eden birine | Kavga edene ; Uyuyana | İbadetin kabulü dilenir.
"Başınız sağ olsun." ne zaman söylenir? | Bir yakınını kaybetmiş kişiye | Sınav kazanana ; Bayramda | Taziye dileğidir.
"Bayramınız mübarek olsun." ne zaman söylenir? | Dinî bayramlarda | Yılbaşında ; Doğum gününde | Bayram tebriğidir.
"Hayırlı cumalar." ne zaman söylenir? | Cuma günü | Pazar günü ; Pazartesi günü | Cuma Müslümanlar için mübarek bir gündür.
"Allah razı olsun." ne zaman söylenir? | Bize iyilik yapan birine teşekkür ederken | Birine kızarken ; Uyurken | Dualı bir teşekkürdür.
"Elhamdülillah" ne anlama gelir? | Hamd Allah'a mahsustur | Allah dilerse ; Allah en büyüktür | Şükür ifadesidir.
"İnşallah" ne anlama gelir? | Allah dilerse | Allah korusun ; Allah razı olsun | Gelecekteki işler için söylenir.
"Hamdolsun" sözü ne zaman söylenir? | Bir nimete ya da iyi bir duruma şükrederken | Üzüldüğümüzde ; Kızdığımızda | Şükür ifadesidir.`);
ek("dk2", `Abdest almanın amacı nedir? | Namaz için temizlenmek | Susuzluğu gidermek ; Isınmak | Abdest manevi ve bedenî temizliktir.
Abdest alırken ilk ne yapılır? | Eller yıkanır | Ayaklar yıkanır ; Baş meshedilir | Besmele ile eller yıkanarak başlanır.
Müslümanlar yemeğe başlarken ne der? | Bismillah | Elhamdülillah ; Maşallah | Allah'ın adıyla başlanır.
Peygamberimiz yemekten önce ve sonra ne yapardı? | Ellerini yıkardı | Hemen uyurdu ; Koşardı | Temizlik sünnettir.
İsraf etmemek neden önemlidir? | Nimetlere şükrün bir parçasıdır | Önemsizdir ; Sadece büyükler için | Allah israfı sevmez.
Temizlikle ilgili hangisi doğrudur? | Beden, giysi ve çevre temizliği önemlidir | Sadece ellerin temiz olması yeterlidir ; Temizlik gereksizdir | İslam temizliğe büyük önem verir.
Şükreden insan nasıl davranır? | Nimetlerin değerini bilir ve paylaşır | Sürekli şikâyet eder ; Nimetleri israf eder | Şükür davranışla da gösterilir.
"Mümin bir delikten iki kez ısırılmaz." sözü neyi öğütler? | Hatalardan ders almayı | Hayvanlardan korkmayı ; Hiç dışarı çıkmamayı | Dikkatli olmayı öğütler.
Peygamberimiz ölçülü beslenme hakkında ne öğütlemiştir? | Midenin üçte birini yemeğe ayırmayı | Doyana kadar yemeyi ; Hiç yememeyi | Aşırı yemek sağlığa zararlıdır.
Ağız ve diş temizliği için Peygamberimiz ne kullanırdı? | Misvak | Bal ; Tuz | Misvak doğal bir diş fırçasıdır.
Ekmeği yere atmamak neyi gösterir? | Nimete saygıyı | Tembelliği ; Kibri | Ekmek bir nimettir.`);
ek("dk3", `Allah'ın "Rahman" ismi ne anlama gelir? | Dünyada tüm canlılara merhamet eden | Her şeyi gören ; Her şeyi işiten | Rahman merhametin genişliğini anlatır.
Allah'ın "Vedud" ismi ne anlama gelir? | Çok seven, sevilen | Bağışlayan ; Rızık veren | Allah kullarını sever.
Allah'ın "Kerim" ismi ne anlama gelir? | Çok cömert | Her şeyi bilen ; Yaratan | Allah cömerttir.
Allah'ı tanımanın yollarından biri hangisidir? | Yarattıklarını düşünmek | Hiç düşünmemek ; Sadece uyumak | Evrendeki düzen Allah'ı tanıtır.
Allah'ın benzeri var mıdır? | Hayır, hiçbir şey O'na benzemez | Evet, insanlara benzer ; Evet, yıldızlara benzer | Allah eşi ve benzeri olmayandır.
Allah'ın her yerde ve her şeyi bilmesi hangi ismiyle ifade edilir? | Alîm | Rezzak ; Vedud | Alîm her şeyi bilen demektir.
Kur'an'ın ilk suresi hangisidir? | Fatiha Suresi | İhlas Suresi ; Nas Suresi | Fatiha her namazda okunur.
"De ki: O Allah birdir." ayeti hangi surede geçer? | İhlas Suresi | Fatiha Suresi ; Kevser Suresi | İhlas tevhidi anlatır.
Allah'ın yarattıklarına örnek hangisidir? | Güneş, Ay, yıldızlar ve canlılar | Sadece insanlar ; Sadece hayvanlar | Her şeyi Allah yaratmıştır.
Allah'a ortak koşmaya ne denir? | Şirk | Tevhid ; İman | İslam'a göre en büyük günahtır.
Allah'ın "Hâfız" ismi ne anlama gelir? | Koruyan, gözeten | Cezalandıran ; Uyuyan | Allah kullarını korur.`);
ek("dk4", `İman esaslarından ilki hangisidir? | Allah'a inanmak | Ahirete inanmak ; Kadere inanmak | Amentü "Allah'a inandım" ile başlar.
Meleklerin özelliği hangisidir? | Nurdan yaratılmışlardır ve Allah'ın emrini yerine getirirler | Yemek yerler ; Uyurlar | Melekler gözle görülmez.
Ölüm meleği hangisidir? | Azrail | Cebrail ; Mikail | Azrail can almakla görevlidir.
Kıyameti başlatacak olan melek hangisidir? | İsrafil | Azrail ; Cebrail | İsrafil sûra üfleyecektir.
Doğa olaylarıyla görevli melek hangisidir? | Mikail | Azrail ; İsrafil | Yağmur, rüzgâr gibi olaylarla görevlidir.
Dört büyük kitap hangileridir? | Tevrat, Zebur, İncil, Kur'an | Sadece Kur'an ; Tevrat ve Mesnevi | Peygamberlere indirilmiştir.
Peygamberlere inanmak ne demektir? | Allah'ın insanlara elçiler gönderdiğine inanmak | Sadece bir peygambere inanmak ; Hiçbirine inanmamak | Tüm peygamberlere inanılır.
Ahiret nedir? | Ölümden sonraki sonsuz hayat | Dünya hayatı ; Bir kitap | Ahirette insanlar hesaba çekilir.
Dua ederken nasıl olmalıyız? | Samimi ve içten | Gösteriş yaparak ; Bağırarak | Allah samimi duayı işitir.
"Rabbena" duası hangi ibadette okunur? | Namazda | Oruçta ; Zekâtta | Namazın oturuşunda okunur.
Allah'tan bir şey isterken ne yapmalıyız? | Dua etmeli ve çalışmalıyız | Sadece beklemeliyiz ; Hiçbir şey yapmamalıyız | Dua ve çaba birlikte olmalıdır.`);
ek("dk5", `Hz. Musa'nın asasıyla denizi yarması kime karşı oldu? | Firavun | Nemrut ; Ebu Cehil | Firavun Hz. Musa'ya zulmetti.
Hz. İbrahim'i ateşe atan kral kimdir? | Nemrut | Firavun ; Ebu Leheb | Ateş Hz. İbrahim'i yakmadı.
Hz. İsa hangi kitabın peygamberidir? | İncil | Tevrat ; Zebur | İncil Hz. İsa'ya indirildi.
Hz. Davud hangi özelliğiyle bilinir? | Güzel sesi ve demircilik | Gemi yapması ; Balığın karnında kalması | Zebur Hz. Davud'a indirildi.
Hz. Yusuf hangi özelliğiyle tanınır? | Güzelliği ve sabrı | Gemi yapması ; Ateşte yanmaması | Kuyuya atıldı, sonra Mısır'da yönetici oldu.
Peygamberlerin hiç günah işlememesi hangi özellikleridir? | İsmet | Fetanet ; Tebliğ | İsmet günahsızlık demektir.
Hz. Nuh'un gemisine kimler bindi? | İnananlar ve her hayvandan bir çift | Sadece hayvanlar ; Hiç kimse | Tufandan inananlar kurtuldu.
Hz. İsmail kimin oğludur? | Hz. İbrahim'in | Hz. Musa'nın ; Hz. Nuh'un | Kâbe'yi babasıyla birlikte inşa etti.
Kâbe'yi kimler inşa etmiştir? | Hz. İbrahim ve Hz. İsmail | Hz. Musa ve Hz. Harun ; Hz. Nuh | Kâbe ilk mabettir.
Peygamberlerin ortak mesajı nedir? | Allah'ın birliği ve güzel ahlak | Zengin olmak ; Savaşmak | Tüm peygamberler tevhidi öğretti.
Hz. Eyüp'ten hangi değeri öğreniriz? | Sabır | Öfke ; Kıskançlık | Hastalığına rağmen sabretti.`);
ek("dk6", `Hz. Muhammed'in doğduğu geceye ne denir? | Mevlid Kandili | Kadir Gecesi ; Miraç Kandili | Doğumu her yıl anılır.
Hz. Muhammed'e kaç yaşında peygamberlik verildi? | 40 | 20 ; 30 ; 63 | 610 yılında, 40 yaşında.
Hz. Muhammed kaç yaşında vefat etti? | 63 | 40 ; 53 ; 70 | 632 yılında vefat etti.
Hz. Muhammed'in kızlarından biri hangisidir? | Hz. Fatıma | Hz. Hatice ; Hz. Âmine | Hz. Fatıma Hz. Ali ile evlendi.
Hz. Muhammed'in sütannesi kimdir? | Halime | Âmine ; Hatice | Çocukluğunda Halime'nin yanında büyüdü.
Medine'ye hicret sırasında Hz. Muhammed'in yol arkadaşı kimdi? | Hz. Ebubekir | Hz. Ali ; Hz. Ömer | Sevr Mağarası'nda saklandılar.
Hz. Muhammed'in ticaretle uğraştığı dönemde hangi özelliği öne çıktı? | Dürüstlüğü | Cimriliği ; Tembelliği | El-Emin lakabı bunu gösterir.
Hz. Muhammed'in kabri nerededir? | Medine'de Mescid-i Nebevi'de | Mekke'de ; Kudüs'te | Ravza-i Mutahhara denir.
Hz. Muhammed'in sünnetlerine uymak ne anlama gelir? | Onun güzel davranışlarını örnek almak | Sadece kıyafetini giymek ; Hiçbir şey | Sünnet örnek davranışlardır.
Hz. Muhammed'in çocuklara davranışı nasıldı? | Onlarla şakalaşır ve sevgi gösterirdi | Onları azarlardı ; Onları görmezden gelirdi | Torunlarını omzunda taşırdı.
Hz. Muhammed'in son hutbesine ne denir? | Veda Hutbesi | Cuma Hutbesi ; Bayram Hutbesi | Veda Haccı'nda okunmuştur.`);
ek("dk7", `Haksızlığa uğrayan birini savunmak hangi değere örnektir? | Adalet | Kıskançlık ; Cimrilik | Adil insan haksızlığa karşı çıkar.
Sabırlı olmak ne kazandırır? | Zorlukların üstesinden gelmeyi | Hemen pes etmeyi ; Öfkelenmeyi | Sabır başarıya götürür.
Sınavda zorlanan arkadaşımıza moral vermek neye örnektir? | Yardımseverlik | Kibir ; Bencillik | Destek olmak güzel bir davranıştır.
Paylaşmak neden önemlidir? | Sevgiyi ve dostluğu artırır | Kavgaya yol açar ; Önemsizdir | Paylaşan mutlu olur.
Oyunda hile yapmak hangi değere aykırıdır? | Dürüstlük ve adalet | Cesaret ; Yardımseverlik | Hile haksızlıktır.
Kızdığımızda ne yapmalıyız? | Sakinleşip düşünmeliyiz | Bağırıp kırmalıyız ; Kavga etmeliyiz | Öfkeyi kontrol etmek sabırdır.
"Komşusu açken tok yatan bizden değildir." hadisi neyi öğütler? | Yardımlaşmayı | Tembelliği ; Çok yemeyi | Komşular birbirine destek olmalıdır.
Sadaka vermek neye örnektir? | Yardımseverlik | İsraf ; Kibir | Sadaka ihtiyaç sahibine verilir.
Hakem olunca nasıl davranmalıyız? | Tarafsız ve adil | Arkadaşımızı kayırarak ; Kuralları bilmeden | Adil hakem herkese eşit davranır.
Güler yüzlü olmak İslam'da nasıl değerlendirilir? | Sadaka olarak | Gereksiz ; Kibir olarak | "Güler yüz sadakadır."
Haksızlık yaptığımızı fark edersek ne yapmalıyız? | Özür dileyip hatamızı düzeltmeliyiz | Saklamalıyız ; Başkasını suçlamalıyız | Hatayı kabul etmek erdemdir.`);
ek("dk8", `Bir arkadaşımızın günlüğünü izinsiz okumak doğru mudur? | Hayır, mahremiyete aykırıdır | Evet ; Merak ediyorsak evet | Herkesin özel hayatına saygı gösterilir.
Başkasının telefonunu izinsiz karıştırmak neye aykırıdır? | Mahremiyete | Oyun kurallarına ; Trafik kurallarına | İzinsiz karıştırmak yanlıştır.
Bir arkadaşımız bize sır verdiyse ne yapmalıyız? | Saklamalıyız | Herkese anlatmalıyız ; Sosyal medyada paylaşmalıyız | Sır bir emanettir.
Hayvanların hakkı olduğunu gösteren davranış hangisidir? | Onları beslemek ve eziyet etmemek | Taş atmak ; Yuvalarını bozmak | Canlılara merhamet ederiz.
Kul hakkı ne zaman affedilir? | Hak sahibi helal edince | Hiçbir zaman ; Kendiliğinden | Helalleşmek gerekir.
Ödünç alınan eşyayı bozarsak ne yapmalıyız? | Özür dileyip zararı karşılamalıyız | Saklamalıyız ; Söylememeliyiz | Kul hakkı gözetilir.
Anne ve babamıza karşı görevimiz nedir? | Onlara saygı göstermek ve yardım etmek | Onlara karşı gelmek ; Onları dinlememek | Anne baba hakkı büyüktür.
Kapısı kapalı bir odaya girerken ne yapmalıyız? | Kapıyı çalıp izin istemeliyiz | Hemen girmeliyiz ; Kapıyı tekmelemeliyiz | Bu mahremiyete saygıdır.
Çevremizi temiz tutmak kimin hakkına saygıdır? | Tüm insanların ve canlıların | Sadece kendimizin ; Hiç kimsenin | Çevre ortak alanımızdır.
Öğretmenimize karşı sorumluluğumuz nedir? | Saygılı olmak ve dersi dinlemek | Sözünü kesmek ; Dersi dinlememek | Öğretmenlerimiz bize emek verir.
Yolda bulduğumuz bir cüzdanı ne yapmalıyız? | Sahibine ulaştırmak için polise ya da bir büyüğe teslim etmeliyiz | İçindekileri almalıyız ; Çöpe atmalıyız | Kul hakkına saygıdır.`);
})();
