// 5. sınıf ek soru bankası. Biçim: soru | DOĞRU | yanlış1 ; yanlış2 ; yanlış3 | çözüm
(function () {
const E = window.SORU_EK = window.SORU_EK || {};
const ek = (id, m) => { E[id] = (E[id] ? E[id] + "\n" : "") + m; };
ek("f5k4", `Isının bir maddeden diğerine geçmesine ne denir? | Isı iletimi | Isı yalıtımı ; Donma ; Yoğuşma | Isı sıcak maddeden soğuk maddeye geçer.
Isıyı iyi ileten maddelere ne denir? | Isı iletkeni | Isı yalıtkanı ; Esnek madde ; Saydam madde | Metaller ısıyı iyi iletir.
Isıyı iyi iletmeyen maddelere ne denir? | Isı yalıtkanı | Isı iletkeni ; Mıknatıs ; Kırılgan madde | Tahta, plastik, yün yalıtkandır.
Tencere saplarının plastikten yapılmasının nedeni nedir? | Plastiğin ısıyı iletmemesi | Plastiğin ısıyı iyi iletmesi ; Ucuz olması ; Renkli olması | Elimiz yanmasın diye.
Evlerin dış duvarlarına yapılan yalıtımın faydası nedir? | Isı kaybını azaltıp enerji tasarrufu sağlamak | Evi soğutmak ; Duvarı süslemek ; Evi ağırlaştırmak | Yakıt tasarrufu sağlar.
Kışın yün kazak giymemizin nedeni nedir? | Yünün ısı yalıtkanı olması | Yünün ısı iletkeni olması ; Yünün su geçirmesi ; Yünün parlak olması | Vücut ısımızı korur.
Termos ne işe yarar? | İçindeki sıvının sıcaklığını uzun süre korumaya | Sıvıyı kaynatmaya ; Sıvıyı dondurmaya ; Sıvıyı süzmeye | Yalıtımlı bir kaptır.
Çift camlı pencerelerin faydası nedir? | Isı yalıtımı sağlaması | Işığı engellemesi ; Evi karartması ; Isıyı daha çok iletmesi | Camlar arasındaki hava yalıtkandır.
Hangisi en iyi ısı iletkenidir? | Bakır | Tahta ; Plastik ; Yün | Bakır tencerelerde kullanılır.
Kutup ayılarının kalın kürkü ne işe yarar? | Isı yalıtımı yaparak vücudunu sıcak tutmaya | Hızlı koşmaya ; Yüzmeye engel olmaya ; Avını korkutmaya | Doğada da yalıtım vardır.`);
ek("d3k2", `Kur'an-ı Kerim hangi dilde indirilmiştir? | Arapça | Türkçe ; Farsça ; İbranice | Kur'an Arapça indirilmiştir.
Kur'an-ı Kerim kaç yılda indirilmiştir? | Yaklaşık 23 yılda | 1 yılda ; 40 yılda ; 10 günde | 610–632 yılları arasında.
Kur'an'ın ilk inen ayetleri hangi kelimeyle başlar? | Oku! | Yaz! ; Koş! ; Dinle! | Alak Suresi'nin ilk ayetleridir.
Kur'an-ı Kerim kaç sureden oluşur? | 114 | 30 ; 99 ; 40 | En uzunu Bakara, en kısası Kevser'dir.
Kur'an-ı Kerim'in bölümlerine ne denir? | Sure | Sayfa ; Bab ; Kıta | Surelerin içinde ayetler bulunur.
Kur'an'ın her bir cümlesine ne denir? | Ayet | Sure ; Cüz ; Hutbe | Ayet "işaret, delil" anlamına gelir.
Kur'an-ı Kerim kaç cüzden oluşur? | 30 | 114 ; 60 ; 12 | Her cüz yaklaşık 20 sayfadır.
Kur'an-ı Kerim'i ezbere bilen kişiye ne denir? | Hafız | İmam ; Müezzin ; Kadı | Kur'an'ı ezberleyen kişidir.
Kur'an'ın Hz. Ebubekir döneminde bir araya toplanmasıyla oluşan kitaba ne denir? | Mushaf | Divan ; Mesnevi ; Siyer | Kur'an kitap hâline getirildi.
Kur'an'ın temel özelliklerinden biri hangisidir? | Tüm insanlığa hitap etmesi | Sadece bir kabileye hitap etmesi ; Değiştirilebilir olması ; Sadece tarih kitabı olması | Evrensel bir kitaptır.`);
ek("d2k3", `Namaz İslam'ın kaç şartından biridir? | 5 | 3 ; 6 ; 7 | Namaz İslam'ın şartlarındandır.
Günde kaç vakit namaz kılınır? | 5 | 3 ; 2 ; 7 | Sabah, öğle, ikindi, akşam, yatsı.
Namazın bireye kazandırdıklarından biri hangisidir? | Düzen ve disiplin | Tembellik ; Öfke ; Kibir | Vakitlerine uymak düzen kazandırır.
Tahiyyat duası namazın hangi bölümünde okunur? | Oturuşlarda | Kıyamda ; Rükûda ; Secdede | Her oturuşta okunur.
Namaz kılmadan önce yapılan temizliğe ne denir? | Abdest | Oruç ; Teyemmüm ; Zekât | Abdest namazın şartlarındandır.
Cuma namazı hangi vakitte kılınır? | Öğle vakti | Sabah ; Akşam ; Yatsı | Cuma günü öğle namazı yerine kılınır.
Namazın topluma katkılarından biri hangisidir? | Birlik ve beraberliği güçlendirmesi | Ayrılığa yol açması ; Kavgaya neden olması ; Yalnızlaştırması | Cemaatle kılınan namaz birliği artırır.
Namazda Kâbe yönüne dönmeye ne denir? | Kıbleye yönelmek | Secde ; Rükû ; Kıyam | Kıble namazın şartlarındandır.
Ezan ne amaçla okunur? | Namaz vaktini duyurmak için | Bayramı kutlamak için ; Uyandırmak için ; Yemek yemek için | Müezzin ezan okur.
Namazın başında söylenen "Allahu Ekber" ifadesine ne denir? | İftitah tekbiri | Selam ; Tahiyyat ; Kunut | Namaza başlarken söylenir.`);
ek("f4k1", `Işık nasıl yayılır? | Doğrusal olarak | Eğri olarak ; Zikzak olarak ; Dairesel olarak | Işık doğrular boyunca yayılır.
Işığı tamamen geçiren maddelere ne denir? | Saydam | Opak ; Yarı saydam ; Yansıtıcı | Pencere camı saydamdır.
Işığı hiç geçirmeyen maddelere ne denir? | Opak (ışık geçirmez) | Saydam ; Yarı saydam ; Parlak | Tahta, taş, metal opaktır.
Işığın bir kısmını geçiren maddelere ne denir? | Yarı saydam | Saydam ; Opak ; Siyah | Buzlu cam yarı saydamdır.
Işığın önüne opak bir cisim konunca arkasında ne oluşur? | Gölge | Gökkuşağı ; Ses ; Isı | Işık geçemediği için karanlık alan oluşur.
Gölgenin boyu neye bağlıdır? | Işık kaynağının cisme göre konumuna | Cismin rengine ; Cismin kokusuna ; Hiçbir şeye | Kaynak yaklaştıkça gölge büyür.
Hangisi saydam bir maddedir? | Temiz su | Karton ; Taş ; Tahta | Su ışığı geçirir.
Işık en hızlı nerede yayılır? | Boşlukta | Suda ; Camda ; Tahtada | Işık boşlukta en hızlıdır.
Güneş ışığının Dünya'ya ulaşması yaklaşık ne kadar sürer? | 8 dakika | 1 saniye ; 1 gün ; 1 saat | Güneş çok uzaktadır.
Bir odadaki eşyaları görebilmemizin nedeni nedir? | Eşyaların ışığı yansıtıp gözümüze ulaştırması | Eşyaların ışık üretmesi ; Gözümüzün ışık üretmesi ; Havanın parlaması | Görmek için ışık gerekir.`);
ek("d1k1", `Evrendeki düzen bize neyi gösterir? | Her şeyi bilen ve güçlü bir yaratıcının varlığını | Her şeyin tesadüf olduğunu ; Hiçbir şeyi ; Düzenin olmadığını | Evrendeki düzen yaratıcıyı gösterir.
Mevsimlerin düzenli olarak birbirini takip etmesi neye örnektir? | Evrendeki düzene | Kaosa ; Tesadüfe ; Değişmezliğe | Doğada düzen vardır.
Dünya'nın Güneş'e uzaklığının ideal olması neyi sağlar? | Canlıların yaşayabileceği sıcaklığı | Çok soğuk bir ortamı ; Çok sıcak bir ortamı ; Hiçbir şeyi | Daha yakın ya da uzak olsaydı yaşam zorlaşırdı.
Kur'an'da insanın evreni düşünmesi için ne öğütlenir? | Göklere, yere ve canlılara bakıp düşünmesi | Hiç düşünmemesi ; Sadece uyuması ; Göklere bakmaması | Tefekkür teşvik edilir.
Gece ve gündüzün oluşması neyin sonucudur? | Dünya'nın kendi etrafında dönmesinin | Ay'ın dönmesinin ; Güneş'in sönmesinin ; Bulutların hareketinin | Bu bir ilahi düzendir.
Allah'ın varlığının delillerinden biri hangisidir? | Evrendeki mükemmel düzen ve uyum | Karmaşa ; Rastgelelik ; Belirsizlik | Düzen bir düzenleyiciyi gösterir.
Arıların bal yapması neyin göstergesidir? | Canlılara verilen yeteneklerin ve düzenin | Tesadüfün ; Düzensizliğin ; Hiçbir şeyin | Her canlı bir görevle yaratılmıştır.
İnsan vücudundaki organların uyum içinde çalışması neyi gösterir? | Mükemmel bir yaratılışı | Rastgeleliği ; Düzensizliği ; Hiçbir şeyi | Vücudumuz bir düzen içindedir.
"Göklerin ve yerin yaratılışında ... akıl sahipleri için deliller vardır." ayeti neyi öğütler? | Evreni düşünmeyi | Uyumayı ; Unutmayı ; Korkmayı | Âl-i İmran Suresi 190. ayet.
Evrendeki düzenin bozulmaması için insanın sorumluluğu nedir? | Doğayı korumak | Doğayı kirletmek ; Ağaç kesmek ; Suyu israf etmek | İnsan doğanın emanetçisidir.`);
ek("f5k1", `Maddeler neyden oluşur? | Çok küçük taneciklerden | Sadece sudan ; Sadece havadan ; Hiçbir şeyden | Tanecikler gözle görülemez.
Katılarda tanecikler nasıl dizilir? | Çok sıkı ve düzenli | Çok seyrek ; Rastgele ve uzak ; Hiç yoktur | Katıların belirli şekli vardır.
Gazlarda tanecikler nasıl hareket eder? | Çok hızlı ve serbestçe | Hiç hareket etmez ; Sadece titreşir ; Çok yavaş | Gazlar bulunduğu kabı doldurur.
Sıvılarda tanecikler nasıldır? | Birbirine yakın ama kayarak hareket edebilir | Çok uzak ; Hiç hareket etmez ; Sabit dizilmiştir | Sıvılar akışkandır.
Hangi hâldeki maddenin tanecikleri arasındaki boşluk en fazladır? | Gaz | Katı ; Sıvı ; Hepsi eşit | Gazlar bu yüzden sıkıştırılabilir.
Bir oda spreyinin kokusunun odaya yayılması neyi gösterir? | Gaz taneciklerinin hareket ettiğini | Taneciklerin durduğunu ; Maddenin yok olduğunu ; Işığın yayıldığını | Bu olaya difüzyon denir.
Isınan maddelerin tanecikleri nasıl hareket eder? | Daha hızlı | Daha yavaş ; Durur ; Değişmez | Isı tanecik hareketini artırır.
Şekerin suda çözünmesi tanecikli yapıyla nasıl açıklanır? | Şeker tanecikleri su tanecikleri arasına dağılır | Şeker yok olur ; Su şekere dönüşür ; Şeker taşa dönüşür | Madde kaybolmaz, dağılır.
Hangisi tanecikli yapının kanıtıdır? | Sıcak suya damlatılan mürekkebin kendiliğinden yayılması | Taşın sert olması ; Buzun soğuk olması ; Kâğıdın beyaz olması | Tanecikler hareket ederek karışır.
Maddeyi oluşturan en küçük yapı birimine ne denir? | Atom | Hücre ; Kum ; Organ | Atomlar birleşerek molekülleri oluşturur.`);
ek("m4k1", `İki ucu da sınırlı olan doğru parçasına ne denir? | Doğru parçası | Işın ; Doğru ; Açı | AB şeklinde gösterilir.
Bir ucu sınırlı, diğer ucu sınırsız olan çizgiye ne denir? | Işın | Doğru ; Doğru parçası ; Nokta | Başlangıç noktası vardır.
İki yönde sonsuza uzanan çizgiye ne denir? | Doğru | Işın ; Doğru parçası ; Eğri | Başlangıç ve bitiş noktası yoktur.
Aynı düzlemde olup hiç kesişmeyen doğrulara ne denir? | Paralel doğrular | Dik doğrular ; Kesişen doğrular ; Çakışık doğrular | Tren rayları buna örnektir.
Kesiştiklerinde 90° açı oluşturan doğrulara ne denir? | Dik doğrular | Paralel doğrular ; Eğri doğrular ; Çakışık doğrular | Dik kesişirler.
Ölçüsü 90°'den küçük açıya ne denir? | Dar açı | Geniş açı ; Dik açı ; Doğru açı | Örnek: 45°.
Ölçüsü 90° olan açıya ne denir? | Dik açı | Dar açı ; Geniş açı ; Tam açı | Kare köşesi gibi.
Ölçüsü 90° ile 180° arasında olan açıya ne denir? | Geniş açı | Dar açı ; Dik açı ; Tam açı | Örnek: 120°.
Ölçüsü 180° olan açıya ne denir? | Doğru açı | Dik açı ; Tam açı ; Dar açı | Kolları zıt yönlüdür.
Bir noktadan kaç tane doğru geçebilir? | Sonsuz sayıda | 1 ; 2 ; 3 | Tek bir noktadan sayısız doğru geçer.
İki noktadan kaç tane doğru geçer? | 1 | 2 ; Sonsuz ; 0 | İki nokta bir doğru belirtir.
Açıyı ölçmek için hangi araç kullanılır? | İletki | Cetvel ; Pergel ; Terazi | Açılar derece ile ölçülür.`);
ek("s1k1", `Ailemiz, sınıfımız ve takımımız neye örnektir? | Gruplara | Kurumlara ; Ülkelere ; Şehirlere | Birden fazla kişiden oluşan topluluklar.
Bir grupta üstlendiğimiz görevlere ne denir? | Rol | Hak ; Ceza ; Ödül | Örneğin evde çocuk, okulda öğrenci rolü.
Okulda hangi rolümüz vardır? | Öğrenci | Anne ; Öğretmen ; Müdür | Okulda öğrenci rolündeyiz.
Futbol takımında kaleci olmak neye örnektir? | Bir rol | Bir hak ; Bir ceza ; Bir ödül | Takımda her oyuncunun bir rolü vardır.
Rollerimizi yerine getirmezsek ne olur? | Grup içinde düzen bozulur | Herkes mutlu olur ; Hiçbir şey olmaz ; Grup güçlenir | Her rolün sorumluluğu vardır.
Bir kişinin aynı anda birden fazla rolü olabilir mi? | Evet | Hayır ; Sadece yetişkinlerde ; Sadece çocuklarda | Örneğin hem kardeş hem öğrenci hem takım oyuncusu.
Sınıf başkanının rolü nedir? | Sınıfı temsil etmek ve öğretmene yardımcı olmak | Sınıfı cezalandırmak ; Ders anlatmak ; Not vermek | Seçimle belirlenir.
Gruplarda iş birliği neden önemlidir? | İşlerin kolay ve başarılı olmasını sağlar | İşleri zorlaştırır ; Kavgaya yol açar ; Önemsizdir | Birlikten kuvvet doğar.
Mahallemizde hangi rolümüz vardır? | Komşu | Muhtar ; Polis ; Bekçi | Mahallede komşu rolündeyiz.
Evde kardeşimize ödevinde yardım etmek hangi rolümüzle ilgilidir? | Abla/ağabey rolü | Öğretmen rolü ; Müdür rolü ; Komşu rolü | Ailede kardeşlik rolümüz vardır.`);
ek("s4k2", `Etkin vatandaş kimdir? | Haklarını bilen ve sorumluluklarını yerine getiren kişi | Kuralları çiğneyen kişi ; Hiçbir şeyle ilgilenmeyen kişi ; Sadece haklarını isteyen kişi | Topluma katkı sağlar.
Çevreyi temiz tutmak hangi vatandaşlık özelliğidir? | Sorumluluk | Hak ; Ceza ; Ödül | Herkesin sorumluluğudur.
Okulda seçimlere katılmak neye örnektir? | Etkin vatandaşlığa | Tembelliğe ; Kural ihlaline ; Kayıtsızlığa | Demokratik katılımdır.
Vergi ödemek neden önemlidir? | Okul, yol, hastane gibi hizmetlerin yapılmasını sağlar | Önemli değildir ; Sadece zenginler öder ; Hiçbir işe yaramaz | Vergiler kamu hizmetlerinde kullanılır.
Hangisi bir haktır? | Sağlık hizmeti alma | Trafik kurallarına uyma ; Vergi ödeme ; Askerlik yapma | Sağlık temel bir haktır.
Gönüllü çalışmalara katılmak neyi gösterir? | Topluma katkı bilincini | Bencilliği ; Tembelliği ; İlgisizliği | Etkin vatandaşın özelliğidir.
Bir sorunla karşılaştığımızda etkin vatandaş olarak ne yapmalıyız? | İlgili kurumlara başvurup çözüm aramalıyız | Görmezden gelmeliyiz ; Şikâyet edip vazgeçmeliyiz ; Kavga etmeliyiz | Sorunlar yasal yollarla çözülür.
Kütüphanedeki kitapları korumak hangi değerle ilgilidir? | Ortak mallara saygı | Bencillik ; İsraf ; Kibir | Kitaplar herkesin hakkıdır.
Trafik kurallarına uymak bir hak mı, sorumluluk mu? | Sorumluluk | Hak ; İkisi de değil ; Ödül | Kurallar herkesi korur.
Demokrasinin temel ilkelerinden biri hangisidir? | Halkın yönetime katılması | Tek kişinin yönetmesi ; Kuralların olmaması ; Seçimlerin yapılmaması | Seçimler demokrasinin temelidir.`);
})();
