// 6. sınıf ek soru bankası. Biçim: soru | DOĞRU | yanlış1 ; yanlış2 ; yanlış3 | çözüm
(function () {
const E = window.SORU_EK = window.SORU_EK || {};
const ek = (id, m) => { E[id] = (E[id] ? E[id] + "\n" : "") + m; };
ek("t4k1", `Bir araştırmaya başlarken ilk adım nedir? | Araştırma sorusunu belirlemek | Grafik çizmek ; Sonucu yazmak ; Veriyi silmek | Ne öğrenmek istediğimizi belirleriz.
Hangisi bir araştırma sorusudur? | Sınıfımızdaki öğrenciler en çok hangi sporu seviyor? | Futbol topu yuvarlaktır. ; Bugün hava güzel. ; Ali uzun boylu. | Veri toplanarak cevaplanabilen soru.
Veri toplamak için hangi yöntem kullanılabilir? | Anket | Tahmin ; Rüya ; Söylenti | Anket, gözlem ve deney veri toplama yöntemleridir.
Toplanan verileri düzenli göstermek için ne kullanılır? | Sıklık tablosu ve grafik | Şiir ; Masal ; Fotoğraf | Tablo ve grafikler veriyi özetler.
Bir sınıfta 12 kız ve 16 erkek öğrenci vardır. Toplam öğrenci sayısı kaçtır? | 28 | 4 ; 26 ; 32 | 12 + 16 = 28.
Anket sorularında nelere dikkat edilmelidir? | Açık, anlaşılır ve tarafsız olmasına | Çok uzun ve karmaşık olmasına ; Cevabı yönlendirmesine ; Kişisel bilgi istemesine | İyi soru doğru veri sağlar.
"Kaç kardeşin var?" sorusuna verilen cevaplar hangi tür veridir? | Sayısal veri | Sözel (kategorik) veri ; Hayalî veri ; Görsel veri | Cevaplar sayıdır.
"En sevdiğin renk nedir?" sorusuna verilen cevaplar hangi tür veridir? | Kategorik (sözel) veri | Sayısal veri ; Ölçme verisi ; Zaman verisi | Cevaplar kategoridir.
Sütun grafiğinde en uzun sütun neyi gösterir? | En büyük değeri | En küçük değeri ; Ortalama değeri ; Hiçbir şeyi | Sütun boyu değeri gösterir.
Bir anket 50 kişiye uygulanmış, 20'si "evet" demiştir. "Hayır" diyenler kaç kişidir (başka seçenek yoksa)? | 30 | 20 ; 70 ; 25 | 50 − 20 = 30.
Veri toplarken örneklemin büyük olması neyi sağlar? | Sonuçların daha güvenilir olmasını | Sonucun hep aynı çıkmasını ; Hiçbir şeyi ; Grafiğin renkli olmasını | Daha çok veri daha doğru sonuç verir.
Bir sıklık tablosunda "çetele" ne işe yarar? | Verileri işaretlerle saymaya | Grafik çizmeye ; Soruyu yazmaya ; Ortalama bulmaya | Her veri için bir çizgi çizilir.
İki farklı sınıfın verilerini karşılaştırmak için hangi grafik uygundur? | İkili sütun grafiği | Tek bir daire ; Sayı doğrusu ; Resim | Yan yana sütunlar karşılaştırmayı kolaylaştırır.
Araştırma sonucunda ne yapılır? | Veriler yorumlanıp sonuç çıkarılır | Veriler atılır ; Soru unutulur ; Grafik saklanır | Sonuç araştırma sorusunu cevaplar.`);
ek("f5k4", `Buzun suda yüzmesinin nedeni nedir? | Buzun yoğunluğunun sudan küçük olması | Buzun daha ağır olması ; Suyun sıcak olması ; Buzun içinde hava olmaması | Su donunca hacmi artar, yoğunluğu azalır.
Kışın göllerin yüzeyden donmasının canlılar için önemi nedir? | Alttaki su donmaz, canlılar yaşamını sürdürür | Balıklar donar ; Göl tamamen kurur ; Su ısınır | Buz tabakası yalıtkan görevi görür.
Yoğunluğun formülü nedir? | Kütle ÷ hacim | Hacim ÷ kütle ; Kütle × hacim ; Kütle + hacim | d = m/V.
Balıkların yüzme keseleri ne işe yarar? | Yoğunluklarını ayarlayıp batıp çıkmalarına | Nefes almalarına ; Yemek sindirmelerine ; Renk değiştirmelerine | Kesedeki gaz miktarı değişir.
Denizaltılar nasıl batıp çıkar? | Tanklarına su alıp boşaltarak yoğunluklarını değiştirir | Pervaneleri ters döndürerek ; Renk değiştirerek ; Işık yakarak | Su alınca batar, boşaltınca çıkar.
Kütlesi 60 g, hacmi 20 cm³ olan cismin yoğunluğu kaçtır? | 3 g/cm³ | 1200 g/cm³ ; 40 g/cm³ ; 0,33 g/cm³ | 60 ÷ 20 = 3.
Yoğunluğu suyunkinden büyük olan cisim suya bırakılırsa ne olur? | Batar | Yüzer ; Askıda kalır ; Buharlaşır | Suyun yoğunluğu 1 g/cm³'tür.
Zeytinyağı suyun üstünde neden kalır? | Yoğunluğu sudan küçük olduğu için | Yoğunluğu sudan büyük olduğu için ; Sıcak olduğu için ; Renkli olduğu için | Az yoğun sıvı üste çıkar.
Ölü Deniz'de insanların kolayca yüzmesinin nedeni nedir? | Suyun çok tuzlu ve yoğun olması | Suyun soğuk olması ; Suyun tatlı olması ; Rüzgârın esmesi | Yoğunluk arttıkça kaldırma artar.
Sıcak hava balonları neden yükselir? | Isıtılan havanın yoğunluğu azaldığı için | Balon ağır olduğu için ; Soğuk hava doldurulduğu için ; Rüzgâr ittiği için | Sıcak hava hafifler.
Aynı maddeden yapılmış büyük ve küçük iki cismin yoğunlukları nasıldır? | Eşittir | Büyüğün yoğunluğu fazladır ; Küçüğün yoğunluğu fazladır ; Belirlenemez | Yoğunluk maddenin ayırt edici özelliğidir.`);
ek("s2k3", `İnsanların yaptığı değişikliklerin oluşturduğu çevreye ne denir? | Beşerî çevre | Doğal çevre ; Fiziki çevre ; Coğrafi bölge | Yollar, köprüler, binalar beşerî unsurlardır.
Hangisi doğal çevre unsurudur? | Dağ | Baraj ; Köprü ; Fabrika | Dağlar doğada kendiliğinden oluşur.
Hangisi beşerî çevre unsurudur? | Baraj | Akarsu ; Orman ; Göl | Barajı insan yapar.
İnsanın doğal çevreyi değiştirmesine örnek hangisidir? | Bataklıkların kurutulması | Dağların yükselmesi ; Depremlerin olması ; Rüzgârın esmesi | İnsan doğaya müdahale eder.
Doğal çevrenin insanı etkilemesine örnek hangisidir? | Soğuk bölgelerde kalın giyinilmesi | Tünel açılması ; Fabrika kurulması ; Yol yapılması | İnsan iklime uyum sağlar.
Karadeniz'de evlerin çatılarının eğimli olmasının nedeni nedir? | Bol yağış | Rüzgâr azlığı ; Kuraklık ; Sıcaklık | Yağmur suyu çatıdan akar.
İç Anadolu'da evlerin genellikle kerpiç ve toprak damlı olmasının nedeni nedir? | Ormanların az, yağışın az olması | Bol orman olması ; Çok yağış ; Deniz kenarı olması | Yerel malzeme kullanılır.
Kapadokya'da insanların kayalara oyulmuş evlerde yaşamasının nedeni nedir? | Kolay oyulabilen volkanik tüf kayaları | Bol orman ; Deniz ; Kar yağışının olmaması | Doğal çevre yerleşmeyi etkiler.
Beşerî unsurlar doğaya zarar verebilir mi? | Evet, plansız yapılaşma doğal dengeyi bozabilir | Hayır, hiçbir zaman ; Sadece ormanlar zarar verir ; Sadece hayvanlar zarar verir | Sürdürülebilir planlama gerekir.
Hangisi doğal ve beşerî çevrenin birlikte bulunduğu bir örnektir? | Bir göl kenarına kurulmuş köy | Sadece bir dağ ; Sadece bir orman ; Sadece bir akarsu | Köy beşerî, göl doğaldır.
Rize'de çay bahçelerinin yamaçlarda teraslar hâlinde olması neyi gösterir? | İnsanın doğal koşullara uyum sağlamasını | Doğanın insanı hiç etkilememesini ; Düz arazinin bol olmasını ; Kuraklığı | Eğimli arazi teraslanır.`);
ek("f3k4", `Ergenlik dönemi yaklaşık hangi yaşlarda başlar? | 10–14 yaş | 3–5 yaş ; 20–25 yaş ; 40 yaş | Kızlarda genellikle erkeklerden önce başlar.
Ergenlik döneminde vücutta değişimlere yol açan nedir? | Hormonlar | Vitaminler ; Su ; Güneş ışığı | Hormonlar büyüme ve gelişmeyi düzenler.
Ergenlik döneminde hangi değişim görülür? | Boy uzaması ve kilo artışı | Boyun kısalması ; Kemiklerin küçülmesi ; Hiç değişim olmaması | Hızlı büyüme dönemidir.
Ergenlikte duygusal değişimlere örnek hangisidir? | Ani duygu değişimleri yaşamak | Hiç duygu yaşamamak ; Sürekli uyumak ; Konuşamamak | Bu dönemde duygular yoğun yaşanır.
Ergenlikte sağlıklı yaşam için ne yapılmalıdır? | Dengeli beslenmek, düzenli uyumak ve spor yapmak | Abur cubur yemek ; Gece geç yatmak ; Hareketsiz kalmak | Sağlıklı alışkanlıklar büyümeyi destekler.
Ergenlik döneminde kişisel temizlik neden daha önemlidir? | Ter bezlerinin daha çok çalışması nedeniyle | Vücut hiç terlemediği için ; Saç dökülmediği için ; Önemli değildir | Düzenli banyo yapılmalıdır.
Ergenlik döneminde sivilce oluşmasının nedeni nedir? | Yağ bezlerinin fazla çalışması | Su içmek ; Spor yapmak ; Meyve yemek | Hormonal değişimler etkilidir.
Ergenlikte karşılaşılan sorunlarda ne yapılmalıdır? | Güvenilen bir yetişkinle konuşmak | Sorunları saklamak ; Kendini yalnız bırakmak ; Hiç konuşmamak | Aile, öğretmen ve rehber öğretmen destek olur.
Bu dönemde kemik gelişimi için hangi besin önemlidir? | Süt ve süt ürünleri (kalsiyum) | Gazlı içecekler ; Şekerlemeler ; Cips | Kalsiyum kemikleri güçlendirir.
Sigara ve zararlı alışkanlıklardan neden uzak durulmalıdır? | Gelişimi ve sağlığı ciddi şekilde bozar | Büyümeyi hızlandırır ; Hiçbir etkisi yoktur ; Zekâyı artırır | Ergenlik bağımlılık riskinin yüksek olduğu bir dönemdir.`);
ek("f5k1", `Maddelerin ısı alınca hacminin artmasına ne denir? | Genleşme | Büzülme ; Erime ; Donma | Isı alan tanecikler daha hızlı hareket eder.
Maddelerin ısı verince hacminin azalmasına ne denir? | Büzülme | Genleşme ; Buharlaşma ; Kaynama | Soğuyan madde küçülür.
Tren raylarının arasına boşluk bırakılmasının nedeni nedir? | Yazın genleşen rayların eğilmesini önlemek | Tren hızlansın diye ; Malzeme tasarrufu için ; Ses çıksın diye | Genleşmeye pay bırakılır.
Elektrik tellerinin yazın sarkık, kışın gergin olmasının nedeni nedir? | Yazın genleşmesi, kışın büzülmesi | Kuşların tellere konması ; Rüzgâr ; Yağmur | Sıcaklık telin boyunu değiştirir.
Termometrelerin çalışma ilkesi nedir? | Sıvının ısınınca genleşmesi | Sıvının donması ; Işığın kırılması ; Mıknatıs etkisi | Cıva ya da alkol genleşip yükselir.
Kavanoz kapağı sıkışınca sıcak suya tutulursa ne olur? | Metal kapak genleşir ve kolay açılır | Kapak büzülür ; Kavanoz kırılır ; Hiçbir şey olmaz | Metal camdan daha çok genleşir.
Katı, sıvı ve gazlardan hangisi en çok genleşir? | Gazlar | Katılar ; Sıvılar ; Hepsi eşit | Gaz tanecikleri arası boşluk fazladır.
Köprülerde genleşme derzleri neden bırakılır? | Sıcaklık değişimlerinde çatlamayı önlemek için | Süs için ; Su akması için ; Daha hafif olması için | Genleşme ve büzülmeye izin verir.
Şişirilmiş balon soğuk ortama konursa ne olur? | Büzülür (küçülür) | Genleşir ; Patlar ; Renk değiştirir | Gaz soğuyunca hacmi azalır.
Isıtılan bir metal topun neyi değişir? | Hacmi (biraz büyür) | Kütlesi ; Rengi ; Cinsi | Kütle değişmez, hacim artar.`);
ek("tr6k1", `Hangisinin yazımı doğrudur? | Bir an önce | Biran önce ; Bir-an önce ; Bir anönce | "Bir an" ayrı yazılır.
Hangisinin yazımı doğrudur? | Ya da | Yada ; Ya-da ; Yahutta | "Ya da" ayrı yazılır.`);
ek("f6k1", `Elektrik akımını ileten maddelere ne denir? | İletken | Yalıtkan ; Kırılgan ; Esnek | Metaller iyi iletkendir.
Elektrik akımını iletmeyen maddelere ne denir? | Yalıtkan | İletken ; Mıknatıs ; Akım | Plastik, cam, tahta yalıtkandır.
Hangisi iyi bir iletkendir? | Bakır | Plastik ; Lastik ; Cam | Elektrik kablolarında kullanılır.
Hangisi yalıtkandır? | Porselen | Demir ; Alüminyum ; Gümüş | Elektrik direklerindeki izolatörler porselendir.
Kabloların dışının plastikle kaplanmasının nedeni nedir? | Elektrik çarpmasını önlemek | Akımı hızlandırmak ; Kabloyu ağırlaştırmak ; Isınmasını sağlamak | Plastik yalıtkandır.
Saf su elektriği iletir mi? | Çok az iletir (neredeyse yalıtkandır) | Çok iyi iletir ; Metallerden iyi iletir ; Süper iletkendir | İçindeki tuzlar suyu iletken yapar.
Tuzlu su elektriği iletir mi? | Evet | Hayır ; Sadece donunca ; Sadece kaynayınca | Çözünmüş iyonlar akımı taşır.
Elektrikçilerin lastik eldiven giymesinin nedeni nedir? | Lastiğin yalıtkan olması | Lastiğin iletken olması ; Ellerin ısınması ; Moda olması | Elektrik çarpmasına karşı korur.
İnsan vücudu elektriği iletir mi? | Evet, bu yüzden elektrik çarpması tehlikelidir | Hayır, hiç iletmez ; Sadece ayaklar iletir ; Sadece saçlar iletir | Vücuttaki su ve tuzlar iletkendir.
Bir maddenin iletken olup olmadığını anlamak için ne yapılabilir? | Basit devreye bağlayıp ampulün yanıp yanmadığına bakmak | Maddeyi koklamak ; Maddeyi tatmak ; Maddeyi ısıtmak | Ampul yanarsa madde iletkendir.
Grafit (kalem ucu) elektriği iletir mi? | Evet | Hayır ; Sadece ıslakken ; Sadece kırılınca | Grafit ametal olmasına rağmen iletkendir.`);
ek("f7k2", `Hava kirliliğinin en önemli nedenlerinden biri hangisidir? | Fosil yakıtların kullanımı | Ağaçlandırma ; Yenilenebilir enerji ; Bisiklet kullanımı | Egzoz ve baca gazları havayı kirletir.
Su kirliliğine yol açan insan faaliyeti hangisidir? | Fabrika atıklarının nehirlere dökülmesi | Arıtma tesisi kurmak ; Geri dönüşüm ; Su tasarrufu | Atıklar suyu zehirler.
Toprak kirliliğine yol açan nedenlerden biri hangisidir? | Aşırı tarım ilacı ve gübre kullanımı | Ağaç dikmek ; Kompost yapmak ; Nöbetleşe ekim | Kimyasallar toprağı kirletir.
Küresel ısınmanın sonuçlarından biri hangisidir? | Buzulların erimesi | Denizlerin donması ; Ormanların genişlemesi ; Yağışların düzenli artması | Deniz seviyesi yükselir.
Ormansızlaşmanın sonuçlarından biri hangisidir? | Erozyon ve hayvanların yaşam alanını kaybetmesi | Oksijenin artması ; Toprağın verimlenmesi ; Hayvanların çoğalması | Ağaçlar toprağı tutar.
Asit yağmurlarına neden olan gazlar nereden çıkar? | Fabrika ve araç egzozlarından | Ağaçlardan ; Denizlerden ; Göllerden | Kükürt ve azot oksitler.
Gürültü kirliliğini azaltmak için ne yapılabilir? | Yerleşim yerlerinin çevresine ağaç dikmek | Korna çalmak ; Yüksek sesle müzik ; Fabrikaları şehre taşımak | Ağaçlar sesi emer.
Işık kirliliğinin canlılar üzerindeki etkisi nedir? | Gece hayvanlarının yön bulmasını zorlaştırır | Bitkileri hızla büyütür ; Hiçbir etkisi yoktur ; Kuşları çoğaltır | Göçmen kuşlar ve kaplumbağalar etkilenir.
Çevre sorunlarını azaltmak için bireysel olarak ne yapabiliriz? | Su ve enerji tasarrufu, geri dönüşüm | Atıkları doğaya atmak ; Musluğu açık bırakmak ; Tek kullanımlık ürünleri çoğaltmak | Küçük adımlar büyük fark yaratır.
Nesli tükenmekte olan bir türü korumanın yolu hangisidir? | Yaşam alanlarını korumak ve avlanmayı yasaklamak | Daha çok avlamak ; Yaşam alanını yok etmek ; Görmezden gelmek | Koruma alanları kurulur.`);
ek("s4k3", `Dijital vatandaş kime denir? | İnterneti ve teknolojiyi bilinçli, güvenli ve etik kullanan kişiye | Sadece oyun oynayan kişiye ; Bilgisayarı hiç kullanmayan kişiye ; Siber zorbaya | Haklarını ve sorumluluklarını bilir.
İnternette kişisel bilgilerimizi korumak için ne yapmalıyız? | Güçlü şifre kullanmalı ve bilgilerimizi paylaşmamalıyız | Şifremizi herkese söylemeliyiz ; Adresimizi paylaşmalıyız ; Bilinmeyen bağlantılara tıklamalıyız | Gizlilik önemlidir.
Siber zorbalık nedir? | İnternet üzerinden birini rahatsız etmek, aşağılamak ya da tehdit etmek | İnternetten ödev yapmak ; Video izlemek ; E-posta göndermek | Siber zorbalık bir suçtur.
Siber zorbalığa uğrayan biri ne yapmalıdır? | Kanıtları saklayıp bir yetişkine ya da yetkililere bildirmeli | Cevap verip kavga etmeli ; Gizlemeli ; Kendisi de zorbalık yapmalı | Yardım istemek önemlidir.
Başkasına ait bir fotoğrafı izinsiz paylaşmak neyi ihlal eder? | Kişilik ve özel hayat hakkını | Trafik kurallarını ; Oyun kurallarını ; Hiçbir şeyi | İzin almak gerekir.
İnternette karşılaştığımız bilgilerin doğruluğunu nasıl kontrol ederiz? | Farklı ve güvenilir kaynaklardan karşılaştırarak | İlk gördüğümüze inanarak ; Hiç kontrol etmeden paylaşarak ; Sadece başlığa bakarak | Dezenformasyona dikkat edilmelidir.
Dijital ayak izi nedir? | İnternette bıraktığımız tüm izler (paylaşımlar, aramalar) | Ayakkabı numaramız ; Yürüdüğümüz mesafe ; Telefonumuzun markası | Paylaşımlar kalıcı olabilir.
Telif hakkı olan bir müziği izinsiz kullanmak doğru mudur? | Hayır, fikrî mülkiyet hakkını ihlal eder | Evet, internet ücretsizdir ; Herkes kullanabilir ; Sadece şarkıcı kullanamaz | Eser sahibinin hakkı korunur.
E-Devlet ne işe yarar? | Devlet hizmetlerine internetten ulaşmaya | Oyun oynamaya ; Sosyal medyada paylaşım yapmaya ; Film izlemeye | Birçok resmî işlem çevrim içi yapılabilir.
Ekran bağımlılığından korunmak için ne yapılabilir? | Ekran süresini sınırlamak ve başka etkinliklere zaman ayırmak | Gece boyunca telefon kullanmak ; Sürekli oyun oynamak ; Uykudan feragat etmek | Dengeli kullanım sağlıklıdır.`);
ek("d2k2", `Oruç İslam'ın şartlarından biri midir? | Evet | Hayır ; Sadece sünnettir ; Sadece bayramda | İslam'ın beş şartından biridir.
Ramazan orucu hangi ayda tutulur? | Ramazan | Şaban ; Recep ; Zilhicce | Kameri takvimin dokuzuncu ayıdır.
Oruca başlamadan önce yenen yemeğe ne denir? | Sahur | İftar ; Fitre ; Teravih | İmsak vaktinden önce yenir.
Orucun açıldığı akşam yemeğine ne denir? | İftar | Sahur ; Kuşluk ; Teravih | Güneş batınca oruç açılır.
Ramazan ayında yatsı namazından sonra kılınan namaza ne denir? | Teravih | Bayram namazı ; Cuma namazı ; Cenaze namazı | Ramazana özgü bir namazdır.
Orucun bireye kazandırdıklarından biri hangisidir? | Sabır ve irade | Tembellik ; Öfke ; Bencillik | Oruç nefsi terbiye eder.
Orucun topluma kazandırdıklarından biri hangisidir? | Yardımlaşma ve dayanışma | Kıskançlık ; Çatışma ; İsraf | Açlığı hisseden insan yardıma yönelir.
Oruç tutmakla yükümlü olmayanlar kimlerdir? | Hastalar, yolcular ve çocuklar | Sağlıklı yetişkinler ; Öğretmenler ; Herkes | İslam'da kolaylık esastır.
Ramazan Bayramı'ndan önce verilmesi gereken sadakaya ne denir? | Fitre (fıtır sadakası) | Zekât ; Kurban ; Öşür | İhtiyaç sahiplerine verilir.
Kur'an-ı Kerim hangi ayda indirilmeye başlanmıştır? | Ramazan | Muharrem ; Şevval ; Rebiülevvel | Kadir Gecesi'nde inmeye başlamıştır.
Oruçlu iken unutarak bir şey yiyen kişinin orucu bozulur mu? | Hayır | Evet ; Sadece su içerse ; Sadece akşam olursa | Unutarak yemek orucu bozmaz.`);
ek("d3k1", `Doğru sözlülük ne demektir? | Her durumda doğruyu söylemek | Sadece işine gelince doğru söylemek ; Hiç konuşmamak ; Yalan söylemek | Sıdk peygamberlerin sıfatıdır.
Peygamberimizin gençliğinde aldığı lakap neyi gösterir? | Doğruluğunu ve güvenilirliğini | Zenginliğini ; Gücünü ; Şöhretini | "Muhammedü'l-Emin" denirdi.
Yalan söylemek İslam'da nasıl değerlendirilir? | Büyük günahlardandır | Küçük ve önemsizdir ; Gereklidir ; Teşvik edilir | Yalan güveni yok eder.
Merhamet ne demektir? | Başkalarının acısını hissedip yardım etmek | Başkalarına kızmak ; Bencil olmak ; Kayıtsız kalmak | Merhamet tüm canlıları kapsar.
"Merhamet etmeyene merhamet olunmaz." hadisi neyi öğütler? | Merhametli olmayı | Zengin olmayı ; Güçlü olmayı ; Sessiz olmayı | Merhamet karşılıklıdır.
Hayvanlara merhamet etmeye örnek hangisidir? | Sokak hayvanlarına su ve mama vermek | Onlara taş atmak ; Yuvalarını bozmak ; Aç bırakmak | Tüm canlılar merhamete layıktır.
Doğru sözlü insanın topluma katkısı nedir? | Güven ortamı oluşturur | Kavga çıkarır ; Huzursuzluk yaratır ; Hiçbir katkısı yoktur | Toplumda güven dürüstlükle oluşur.
Hata yaptığımızda doğruyu söylemek neyi gösterir? | Dürüstlüğü ve cesareti | Korkaklığı ; Zayıflığı ; Tembelliği | Hatayı kabul etmek erdemdir.
Merhametli bir insan zor durumdaki birine nasıl davranır? | Yardım eder ve destek olur | Görmezden gelir ; Alay eder ; Uzaklaşır | Merhamet eyleme dönüşür.
Peygamberimiz çocuklara ve yaşlılara nasıl davranırdı? | Şefkatle ve saygıyla | Sert ve kaba ; İlgisizce ; Korkutucu | "Küçüklerimize merhamet etmeyen bizden değildir."`);
ek("f4k2", `Düz aynada oluşan görüntünün özelliği nedir? | Cisimle aynı boyda ve sağ-sol ters | Daha büyük ; Ters (baş aşağı) ; Görüntü oluşmaz | Düz ayna eş görüntü verir.
Çukur aynalar ışığı nasıl yansıtır? | Bir noktada toplar | Dağıtır ; Hiç yansıtmaz ; Emer | Odakta toplar.
Tümsek aynalar ışığı nasıl yansıtır? | Dağıtır | Bir noktada toplar ; Hiç yansıtmaz ; Kırar | Geniş görüş alanı sağlar.
Araçların yan aynaları genellikle hangi tür aynadır? | Tümsek ayna | Çukur ayna ; Düz ayna ; Prizma | Geniş alan görülür.
El fenerlerinin ve araba farlarının içinde hangi ayna kullanılır? | Çukur ayna | Tümsek ayna ; Düz ayna ; Mercek | Işığı paralel demet hâlinde yansıtır.
Diş hekimlerinin kullandığı küçük ayna genellikle hangi türdür? | Çukur ayna | Tümsek ayna ; Düz ayna ; Prizma | Dişi büyütülmüş gösterir.
Tümsek aynada oluşan görüntü nasıldır? | Düz ve cisimden küçük | Ters ve büyük ; Eşit ve ters ; Görüntü oluşmaz | Tümsek ayna her zaman küçük görüntü verir.
Güneş ocakları hangi ayna ile çalışır? | Çukur ayna | Tümsek ayna ; Düz ayna ; Renkli cam | Işığı odakta toplayıp ısı üretir.
Mağaza ve kavşaklarda güvenlik için kullanılan aynalar hangi türdür? | Tümsek ayna | Çukur ayna ; Düz ayna ; Mercek | Geniş görüş alanı sağlar.
Işığın yansıma kanununa göre gelme açısı ile yansıma açısı nasıldır? | Eşittir | Gelme açısı büyüktür ; Yansıma açısı büyüktür ; İlişki yoktur | Gelme açısı = yansıma açısı.`);
ek("f6k3", `Ayarlanabilir direnç (reosta) ne işe yarar? | Devredeki akımı ve ampulün parlaklığını ayarlamaya | Pili şarj etmeye ; Devreyi kesmeye ; Ses üretmeye | Direnç değiştirilerek akım ayarlanır.
Devredeki direnç artırılırsa ampulün parlaklığı nasıl değişir? | Azalır | Artar ; Değişmez ; Ampul patlar | Direnç arttıkça akım azalır.
Devredeki direnç azaltılırsa ampulün parlaklığı nasıl değişir? | Artar | Azalır ; Değişmez ; Ampul söner | Akım artar.
Bir iletken telin boyu uzarsa direnci nasıl değişir? | Artar | Azalır ; Değişmez ; Sıfır olur | Direnç boyla doğru orantılıdır.
Bir iletken telin kalınlığı artarsa direnci nasıl değişir? | Azalır | Artar ; Değişmez ; Çok artar | Kalın tel elektriği kolay iletir.
Ayarlanabilir dirence günlük hayattan örnek hangisidir? | Radyo ses düğmesi | Buzdolabı kapağı ; Musluk ; Kapı kolu | Ses ayarı direnç değişimiyle yapılır.
Dimmer (ışık ayar) anahtarı ne işe yarar? | Lambanın parlaklığını ayarlamaya | Lambayı kapatmaya ; Elektriği artırmaya ; Ses çıkarmaya | Ayarlanabilir dirençle çalışır.
Direncin birimi nedir? | Ohm (Ω) | Volt ; Amper ; Watt | Alman fizikçi Georg Ohm'un adından gelir.
Aynı boy ve kalınlıktaki bakır ve demir tellerden hangisinin direnci daha azdır? | Bakır | Demir ; Eşittir ; Belirlenemez | Bakır daha iyi iletkendir.
Ayarlanabilir direnç üzerindeki sürgü kaydırılınca ne değişir? | Akımın geçtiği telin uzunluğu | Pilin gerilimi ; Ampulün rengi ; Kablonun rengi | Uzunluk değişince direnç değişir.`);
ek("tr2k4", `Eş görevli sözcükleri ya da cümleleri birbirine bağlayan sözcüklere ne denir? | Bağlaç | Edat ; Ünlem ; Zamir | Ve, ile, ama, fakat bağlaçtır.
Tek başına anlamı olmayıp cümlede başka sözcüklerle anlam kazanan sözcüklere ne denir? | Edat (ilgeç) | Bağlaç ; Ünlem ; Sıfat | Gibi, için, kadar, göre edattır.
Sevinç, korku, şaşkınlık gibi duyguları anlatan sözcüklere ne denir? | Ünlem | Edat ; Bağlaç ; Zarf | Eyvah, ah, oh, vay ünlemdir.
"Kardeşim gibi çalışkan ol." cümlesinde edat hangisidir? | gibi | Kardeşim ; çalışkan ; ol | "Gibi" benzetme edatıdır.
"Ali ve Ayşe okula gitti." cümlesinde bağlaç hangisidir? | ve | Ali ; okula ; gitti | "Ve" eş görevli sözcükleri bağlar.
"Eyvah, otobüsü kaçırdık!" cümlesinde ünlem hangisidir? | Eyvah | otobüsü ; kaçırdık ; Ünlem yoktur | Korku ve üzüntü bildirir.
"Senin için bu hediyeyi aldım." cümlesinde edat hangisidir? | için | Senin ; hediyeyi ; aldım | "İçin" amaç bildiren edattır.
"Çok çalıştı ama kazanamadı." cümlesinde "ama" hangi türdendir? | Bağlaç | Edat ; Ünlem ; Sıfat | Karşıtlık bildiren bağlaçtır.
"Hem şarkı söyledi hem dans etti." cümlesinde bağlaç hangisidir? | hem ... hem | şarkı ; dans ; etti | Hem...hem bağlaçtır.
"Ey Türk gençliği!" ifadesinde "ey" hangi türdendir? | Ünlem (seslenme) | Edat ; Bağlaç ; Zamir | Seslenme ünlemidir.
"Dağ kadar sorunum var." cümlesinde edat hangisidir? | kadar | Dağ ; sorunum ; var | "Kadar" karşılaştırma edatıdır.
"Ben de geleceğim." cümlesinde "de" hangi türdendir? | Bağlaç | Hâl eki ; Edat ; Ünlem | Ayrı yazılan "de" bağlaçtır.`);
ek("f2k2", `Bir cisme etki eden kuvvetlerin bileşkesi sıfır ise bu kuvvetlere ne denir? | Dengelenmiş kuvvetler | Dengelenmemiş kuvvetler ; Sürtünme kuvveti ; Kütle çekim kuvveti | Cisim hareket durumunu korur.
Dengelenmemiş kuvvetler cisme ne yapar? | Hızını veya yönünü değiştirir | Hiçbir şey yapmaz ; Rengini değiştirir ; Kütlesini artırır | Net kuvvet sıfırdan farklıdır.
Masada duran bir kitaba etki eden kuvvetler nasıldır? | Dengelenmiştir | Dengelenmemiştir ; Kitaba kuvvet etki etmez ; Sadece sürtünme vardır | Ağırlık ve masanın tepkisi eşittir.
Halat çekme oyununda iki takım eşit kuvvet uygularsa ne olur? | Halat hareket etmez | Halat bir tarafa gider ; Halat kopar ; Halat havalanır | Kuvvetler dengelenmiştir.
Aynı yönlü 10 N ve 5 N'luk iki kuvvetin bileşkesi kaç N'dur? | 15 | 5 ; 50 ; 2 | Aynı yönlü kuvvetler toplanır.
Zıt yönlü 12 N ve 7 N'luk iki kuvvetin bileşkesi kaç N'dur? | 5 | 19 ; 84 ; 7 | Büyükten küçük çıkarılır.
Zıt yönlü 8 N ve 8 N'luk kuvvetlerin bileşkesi kaç N'dur? | 0 | 16 ; 8 ; 64 | Kuvvetler dengelenmiştir.
Sabit hızla giden bir araçta kuvvetler nasıldır? | Dengelenmiştir | Dengelenmemiştir ; Hiç kuvvet yoktur ; Sadece motor kuvveti vardır | Motor kuvveti ile sürtünme eşittir.
Fren yapan bir arabaya etki eden kuvvetler nasıldır? | Dengelenmemiştir | Dengelenmiştir ; Sıfırdır ; Kuvvet yoktur | Araba yavaşlar.
Kuvvetin birimi nedir? | Newton | Joule ; Metre ; Kilogram | Isaac Newton'un adından gelir.
Kuvveti ölçen alet hangisidir? | Dinamometre | Termometre ; Barometre ; Terazi | İçinde yay bulunur.`);
ek("s6k1", `Hangisi bir ulaşım teknolojisidir? | Hızlı tren | Telefon ; Radyo ; Televizyon | Ulaşım araçları yer değiştirmemizi sağlar.
Hangisi bir iletişim teknolojisidir? | İnternet | Uçak ; Gemi ; Bisiklet | İletişim araçları bilgi iletir.
Telgrafın icadı neyi değiştirdi? | Haberleşmenin hızlanmasını sağladı | Ulaşımı yavaşlattı ; Yazıyı kaldırdı ; Hiçbir şeyi | Mesajlar elektrikle iletildi.
İlk telefonu kim icat etti? | Graham Bell | Edison ; Marconi ; Tesla | 1876'da patentini aldı.
Radyoyu geliştiren bilim insanı kimdir? | Marconi | Graham Bell ; Newton ; Galileo | Kablosuz iletişimin öncüsüdür.
Ulaşım teknolojilerindeki gelişmenin ticarete etkisi nedir? | Ürünlerin daha hızlı ve uzağa taşınması | Ticaretin durması ; Ürünlerin pahalanması ; Pazarların küçülmesi | Ticaret hacmi arttı.
Marmaray projesi neyi birbirine bağlar? | Asya ile Avrupa yakalarını deniz altından | İzmir ile Ankara'yı ; Karadeniz ile Akdeniz'i ; Van ile Erzurum'u | Boğaz altı raylı sistemdir.
Uydu teknolojisi hangi alanda kullanılır? | Haberleşme, hava tahmini ve yön bulma (GPS) | Ekmek yapımında ; Tarlayı sürmede ; Su kaynatmada | Uydular uzaydan bilgi gönderir.
İletişim teknolojilerinin olumsuz etkilerinden biri hangisidir? | Yüz yüze iletişimin azalması | Bilgiye kolay ulaşım ; Hızlı haberleşme ; Uzaktaki yakınlarla görüşme | Dengeli kullanım önemlidir.
Eski çağlarda haberleşme için hangisi kullanılırdı? | Posta güvercinleri ve ulaklar | Akıllı telefon ; E-posta ; Görüntülü arama | Haberler yavaş ulaşırdı.
Türkiye'de ilk demiryolu hangi şehirler arasında yapıldı? | İzmir–Aydın | Ankara–İstanbul ; Bursa–Konya ; Erzurum–Kars | 1856'da başladı.`);
ek("d3k2", `Adap ne demektir? | Görgü kuralları, terbiye | Bir ibadet ; Bir kitap ; Bir şehir | Toplum içinde uyulan güzel davranışlardır.
Nezaket ne demektir? | İnceliği ve kibarlığı | Kabalığı ; Öfkeyi ; Bencilliği | Nazik davranışlar ilişkileri güzelleştirir.
Bir yere girerken selam vermek neyin göstergesidir? | Adap ve nezaketin | Kibrin ; Korkunun ; Tembelliğin | Selam barış ve sevgi yayar.
Yemek yerken nelere dikkat etmeliyiz? | Besmele çekmek, sağ elle ve ağzımız kapalı yemek | Ağzımız dolu konuşmak ; Yemeği israf etmek ; Sofrayı dağınık bırakmak | Yemek adabıdır.
Vatan sevgisi nasıl gösterilir? | Vatanımız için çalışmak ve değerlerimize sahip çıkmak | Ortak mallara zarar vermek ; Kuralları çiğnemek ; Bayrağa saygısızlık | Vatan sevgisi davranışla gösterilir.
"Vatan sevgisi imandandır." sözü neyi vurgular? | Vatan sevgisinin önemini | Vatanın önemsizliğini ; Göç etmeyi ; Savaşmayı | Bu söz halk arasında yaygındır.
Konuşma adabına uygun davranış hangisidir? | Karşımızdakinin sözünü kesmeden dinlemek | Bağırmak ; Sürekli sözü kesmek ; Alay etmek | Dinlemek saygıdır.
Misafirlik adabına uygun davranış hangisidir? | Haber vererek uygun saatte gitmek | Gece yarısı habersiz gitmek ; Çok uzun kalmak ; Ev sahibini rahatsız etmek | Misafirlik ölçülü olmalıdır.
Şehitlerimize saygı göstermek neyin göstergesidir? | Vatan sevgisinin | Kayıtsızlığın ; Korkunun ; Bencilliğin | Şehitler vatan için canını verenlerdir.
Telefonda konuşurken nezaket kuralı hangisidir? | Kibar bir dille ve uygun saatlerde aramak | Gece yarısı aramak ; Bağırarak konuşmak ; Selam vermemek | İletişim adabı önemlidir.`);
ek("d4k2", `Hz. Muhammed'in gençliğinde katıldığı ve haksızlığa uğrayanları korumayı amaçlayan topluluk hangisidir? | Hılfu'l-Fudul (Erdemliler Topluluğu) | Ensar ; Muhacir ; Ehl-i Suffe | Mazlumların hakkını korumayı amaçlardı.
Hz. Muhammed gençliğinde hangi işle geçimini sağladı? | Ticaret ve çobanlık | Askerlik ; Çiftçilik ; Demircilik | Dürüst ticaretiyle tanındı.
Hz. Muhammed'in ilk eşi kimdir? | Hz. Hatice | Hz. Ayşe ; Hz. Fatıma ; Hz. Zeynep | İlk Müslüman olan kişidir.
Hz. Muhammed'in en küçük kızı kimdir? | Hz. Fatıma | Hz. Zeynep ; Hz. Rukiye ; Hz. Ümmü Gülsüm | Hz. Ali ile evlenmiştir.
Hz. Muhammed'in torunları kimlerdir? | Hz. Hasan ve Hz. Hüseyin | Hz. Ali ve Hz. Ömer ; Hz. Ebubekir ve Hz. Osman ; Hz. Zeyd ve Hz. Üsame | Hz. Fatıma'nın oğullarıdır.
Hz. Muhammed aile hayatında nasıl davranırdı? | Şefkatli ve yardımsever, ev işlerine yardım ederdi | Sert ve kaba ; Hiç ilgilenmezdi ; Sadece emir verirdi | "Sizin en hayırlınız ailesine karşı en hayırlı olanınızdır."
Hz. Muhammed'in Kâbe hakemliği olayı neyi gösterir? | Güvenilirliğini ve adaletini | Zenginliğini ; Gücünü ; Şöhretini | Hacerü'l-Esved'i herkesin katılımıyla yerine koydu.
Hz. Muhammed'in çocuklarına davranışı nasıldı? | Sevgi doluydu, onları öper ve kucaklardı | Uzak dururdu ; Sert davranırdı ; İlgisizdi | Çocuklara sevgi göstermeyi öğütledi.
Hz. Muhammed gençliğinde hangi lakapla anılırdı? | El-Emin (güvenilir) | Es-Sıddık ; El-Faruk ; Zünnureyn | Herkes ona emanet bırakırdı.
Hz. Muhammed'in gençlere örnek olan davranışlarından biri hangisidir? | Dürüst ticaret ve yardımseverlik | Tembellik ; Haksızlık ; Kibir | Gençliğinde de örnek bir insandı.`);
ek("d1k3", `Felak Suresi kaç ayettir? | 5 | 3 ; 4 ; 7 | Kısa surelerdendir.
Felak Suresi'nde neyin Rabbine sığınılır? | Sabahın (aydınlığın) | Gecenin ; Denizin ; Dağların | "Felak" sabah aydınlığı demektir.
Felak ve Nas surelerine birlikte ne ad verilir? | Muavvizeteyn (sığınma sureleri) | Fatiha ; Yasin ; Mülk | Kötülüklerden Allah'a sığınmayı öğretir.
Felak Suresi'nde hangi kötülükten Allah'a sığınılır? | Kıskançlık edenin kıskançlığından | İyilik yapanın iyiliğinden ; Yağmurdan ; Güneşten | Hasedin kötülüğünden sığınılır.
Felak Suresi Kur'an'ın kaçıncı suresidir? | 113 | 1 ; 112 ; 114 | Nas Suresi'nden önce gelir.
Felak Suresi bize ne öğretir? | Her türlü kötülükten Allah'a sığınmayı | Ticaret yapmayı ; Savaşmayı ; Kıskanmayı | Allah'a güvenmeyi öğütler.
Felak Suresi'nde "karanlığı çöktüğü zaman gecenin şerrinden" ifadesi neyi anlatır? | Gecenin getirebileceği tehlikelerden korunmayı | Geceyi sevmeyi ; Uyumamayı ; Yıldızları izlemeyi | Allah her an korur.
Felak Suresi hangi şehirde indirilmiştir? | Mekke (çoğu âlime göre) | Medine ; Kudüs ; Taif | Sığınma sureleri kısa ve özdür.
Sığınma sureleri ne zaman okunması tavsiye edilir? | Yatarken ve sabah-akşam | Sadece bayramda ; Sadece ramazanda ; Hiçbir zaman | Peygamberimiz bu sureleri sık okurdu.
"Kul eûzü" ifadesi ne anlama gelir? | De ki: Sığınırım | De ki: O Allah birdir ; Oku! ; Allah en büyüktür | Felak ve Nas bu ifadeyle başlar.`);
ek("s4k1", `Yönetime katılmanın en önemli yolu hangisidir? | Seçimlerde oy kullanmak | Kuralları çiğnemek ; Hiç ilgilenmemek ; Vergi ödememek | Demokrasinin temelidir.
Türkiye'de seçme yaşı kaçtır? | 18 | 15 ; 21 ; 25 | 18 yaşını dolduran vatandaşlar oy kullanabilir.
Okulda yönetime katılıma örnek hangisidir? | Okul meclisi seçimleri | Sınıfı kirletmek ; Derse geç kalmak ; Kurallara uymamak | Öğrenciler temsilcilerini seçer.
Demokrasinin temel ilkelerinden biri hangisidir? | Seçme ve seçilme hakkı | Tek kişinin yönetmesi ; Halkın görüşünün alınmaması ; Kuvvetler birliği | Halk egemenliği esastır.
Muhtarlar hangi yönetim biriminde görev yapar? | Mahalle ve köy | Ülke ; İl ; Bölge | Muhtarlar seçimle belirlenir.
Belediye başkanını kim seçer? | O yerde yaşayan halk | Cumhurbaşkanı ; Valiler ; Muhtarlar | Yerel seçimlerle belirlenir.
Kanunları yapma yetkisi hangi kurumdadır? | Türkiye Büyük Millet Meclisi | Mahkemeler ; Valilik ; Belediye | Yasama yetkisi TBMM'dedir.
Sivil toplum kuruluşları (STK) ne yapar? | Toplumsal sorunlara çözüm üretmek için gönüllü çalışır | Kanun yapar ; Mahkeme kurar ; Seçim yapar | Dernekler ve vakıflar STK'dır.
Karar alırken çoğunluğun görüşünü esas almak neye örnektir? | Demokratik karar alma | Tek kişinin karar vermesi ; Kura ile karar ; Zorla karar | Herkesin görüşü dikkate alınır.
Okul aile birliği hangi amaçla kurulur? | Okulun ihtiyaçlarına velilerle birlikte çözüm bulmak | Öğrencileri cezalandırmak ; Ders vermek ; Sınav yapmak | Katılımcı yönetimin örneğidir.`);
ek("s4k2", `Anayasada güvence altına alınan haklardan biri hangisidir? | Eğitim hakkı | Başkasının malını alma hakkı ; Kuralları çiğneme hakkı ; Vergi ödememe hakkı | Temel hak ve özgürlükler anayasadadır.
Vergi ödemek nasıl bir görevdir? | Vatandaşlık sorumluluğu | Hak ; İsteğe bağlı bir davranış ; Ceza | Vergilerle kamu hizmetleri yapılır.
Kişi dokunulmazlığı ne demektir? | Kimsenin vücut bütünlüğüne zarar verilememesi | Herkesin istediğini yapabilmesi ; Kanunların olmaması ; Vergi ödememek | Temel bir insan hakkıdır.
Özel hayatın gizliliği hakkı neyi korur? | Kişilerin özel yaşamını ve bilgilerini | Kamu binalarını ; Trafik düzenini ; Ticareti | İzinsiz kayıt ve paylaşım yasaktır.
Hak ve sorumluluk arasındaki ilişki nedir? | Her hak beraberinde bir sorumluluk getirir | İkisi birbirinden bağımsızdır ; Sorumluluk sadece yetişkinlere aittir ; Haklar sorumluluktan önemlidir | Hakkımızı kullanırken başkasının hakkına saygı gösteririz.
Askerlik hizmeti nasıl bir görevdir? | Vatan savunması görevi | İsteğe bağlı hobi ; Oyun ; Ticaret | Anayasada vatandaşlık görevi olarak yer alır.
Düşünce ve ifade özgürlüğünün sınırı nedir? | Başkalarının haklarına zarar vermemek | Hiçbir sınırı yoktur ; Sadece yetişkinlere aittir ; Yalnızca yazılı olabilir | Hakaret ve tehdit bu özgürlüğe girmez.
Seyahat özgürlüğü ne demektir? | Ülke içinde istediğimiz yere gidebilme hakkı | Başkasının evine izinsiz girme ; Trafik kurallarına uymama ; Ücretsiz bilet | Temel haklardandır.
Mülkiyet hakkı neyi ifade eder? | Kişinin sahip olduğu mala sahip çıkma ve kullanma hakkı | Başkasının malını alma ; Ortak malları satma ; Hiçbir şeye sahip olmama | Kimse başkasının malına el koyamaz.
Hakkımız ihlal edildiğinde başvurabileceğimiz kurumlardan biri hangisidir? | Kamu Denetçiliği Kurumu (Ombudsman) | Meteoroloji ; Futbol Federasyonu ; Hava Kuvvetleri | Vatandaş şikâyetlerini inceler.`);
ek("f3k2", `Kurbağanın gelişim evreleri hangi sıradadır? | Yumurta → iribaş → yavru kurbağa → ergin kurbağa | İribaş → yumurta → kurbağa ; Kurbağa → yumurta → iribaş ; Yumurta → kurbağa → iribaş | Başkalaşım geçirir.
Kelebeğin gelişim evreleri hangi sıradadır? | Yumurta → tırtıl → pupa (koza) → kelebek | Tırtıl → yumurta → kelebek ; Kelebek → pupa → tırtıl ; Yumurta → kelebek → tırtıl | Tam başkalaşımdır.
Başkalaşım (metamorfoz) ne demektir? | Canlının gelişirken şekil değiştirmesi | Canlının ölmesi ; Canlının renk değiştirmesi ; Canlının büyümemesi | Kurbağa ve kelebek başkalaşım geçirir.
Çekirgede hangi tür başkalaşım görülür? | Eksik başkalaşım | Tam başkalaşım ; Başkalaşım yoktur ; Kurbağa tipi | Pupa evresi yoktur.
Tohumun çimlenmesi için gerekli koşullar nelerdir? | Su, uygun sıcaklık ve oksijen | Sadece ışık ; Sadece toprak ; Sadece gübre | Çimlenme için ışık şart değildir.
Bitkilerin büyümesi için hangisi gereklidir? | Işık, su, karbondioksit ve mineraller | Sadece karanlık ; Sadece tuz ; Sadece gürültü | Fotosentez büyümeyi sağlar.
İnsanlarda büyüme ve gelişme hangi dönemde en hızlıdır? | Bebeklik ve ergenlik | Yaşlılık ; Yetişkinlik ; Hiçbir dönem | Büyüme hızı yaşa göre değişir.
Tavuk yumurtasından civciv çıkması yaklaşık kaç gün sürer? | 21 gün | 3 gün ; 90 gün ; 1 yıl | Kuluçka süresidir.
Memeli hayvanlarda yavrular nasıl beslenir? | Anne sütüyle | Tohumla ; Fotosentezle ; Böcekle | Memeliler yavrularını emzirir.
Bitkilerde çiçekten sonra ne oluşur? | Meyve ve tohum | Kök ; Yaprak ; Gövde | Döllenme sonrası meyve gelişir.`);
ek("f4k4", `Güneş enerjisi nasıl bir enerji kaynağıdır? | Yenilenebilir ve temiz | Tükenebilir ve kirletici ; Fosil yakıt ; Nükleer | Güneş milyarlarca yıl ışık verecektir.
Güneş panelleri güneş enerjisini neye dönüştürür? | Elektrik enerjisine | Ses enerjisine ; Kimyasal enerjiye ; Hareket enerjisine | Fotovoltaik hücreler kullanılır.
Güneş kolektörleri (su ısıtıcıları) ne işe yarar? | Güneş enerjisiyle suyu ısıtmaya | Elektrik depolamaya ; Işık üretmeye ; Ses üretmeye | Çatılardaki güneş enerjili ısıtıcılardır.
Güneş ocağında hangi ayna kullanılır? | Çukur ayna | Tümsek ayna ; Düz ayna ; Prizma | Işınlar odakta toplanarak ısı üretilir.
Bitkiler güneş enerjisini nasıl kullanır? | Fotosentezle besin üretir | Fotosentez yapmaz ; Sadece geceleri kullanır ; Toprağa gömer | Güneş enerjisi besine dönüşür.
Güneş enerjisinin dezavantajlarından biri hangisidir? | Bulutlu havalarda ve geceleri verimin azalması | Çevreyi kirletmesi ; Tükenmesi ; Gürültü yapması | Depolama gerekir.
Türkiye'de güneş enerjisinin en verimli kullanıldığı bölgelerden biri hangisidir? | Akdeniz | Doğu Karadeniz ; Kuzeydoğu Anadolu ; Trakya'nın kuzeyi | Güneşlenme süresi uzundur.
Seralarda güneş enerjisinden nasıl yararlanılır? | Cam ya da naylon örtü ile ısı tutulur | Güneş engellenir ; Karanlık ortam oluşturulur ; Su dondurulur | Sera etkisi bitkileri büyütür.
Pasif güneş evi ne demektir? | Güneş enerjisinden en iyi yararlanacak şekilde tasarlanmış ev | Hiç pencere olmayan ev ; Kuzeye bakan ev ; Güneşi engelleyen ev | Güneye bakan büyük pencereler kullanılır.
Güneş enerjisi kullanımının çevreye faydası nedir? | Sera gazı salınımını azaltması | Hava kirliliğini artırması ; Ormanları yok etmesi ; Suyu kirletmesi | Temiz enerji kaynağıdır.`);
ek("s6k2", `Bir eseri ortaya koyan kişinin eser üzerindeki haklarına ne denir? | Telif hakkı | Patent ; Marka ; Vergi | Kitap, müzik, film telif hakkıyla korunur.
Bir buluşun sahibine verilen koruma belgesine ne denir? | Patent | Telif ; Diploma ; Ehliyet | Buluşun izinsiz üretilmesini engeller.
Türkiye'de patent işlemlerini yürüten kurum hangisidir? | Türk Patent ve Marka Kurumu | TÜBİTAK ; Meteoroloji ; Millî Eğitim | Buluş ve marka tescili yapar.
Bir ödevde başkasının yazısını kaynak göstermeden kullanmaya ne denir? | İntihal (aşırma) | Alıntı ; Özet ; Yorum | Etik değildir.
Araştırma raporunda kaynakça bölümü ne işe yarar? | Kullanılan kaynakları göstermeye | Raporu süslemeye ; Sonucu yazmaya ; Başlık koymaya | Bilginin nereden alındığını belirtir.
Araştırma raporunun bölümlerinden biri hangisidir? | Giriş, gelişme, sonuç ve kaynakça | Sadece başlık ; Sadece resim ; Sadece sonuç | Düzenli bir rapor bölümlere ayrılır.
Bir şirketin ürünlerini diğerlerinden ayıran isim ve logoya ne denir? | Marka | Patent ; Telif ; Kaynakça | Markalar tescil edilerek korunur.
Korsan kitap almak neden yanlıştır? | Yazarın ve yayıncının haklarını ihlal eder | Kitap daha güzeldir ; Daha ucuzdur ve sorun yoktur ; Hiçbir zararı yoktur | Fikrî mülkiyet hakkı ihlalidir.
Bir bilgiyi doğrudan aktarırken ne kullanılmalıdır? | Tırnak işareti ve kaynak gösterimi | Hiçbir işaret ; Ünlem işareti ; Kendi adımız | Alıntı kurallarına uyulur.
Güvenilir bir kaynağın özelliği nedir? | Yazarı ve tarihi belli, bilimsel olması | Yazarı bilinmeyen ; Sadece reklam içeren ; Çok eski ve kontrol edilmemiş | Kaynağın güvenilirliği sorgulanmalıdır.`);
})();
