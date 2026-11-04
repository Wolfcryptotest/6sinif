// 4. Sınıf — Her çocuğun okuması gereken klasikler (özgün uyarlamalar). hikayeler.js'ten SONRA yüklenir ve listeye eklenir.
// Metinler eserlerin birebir aktarımı değildir; olay örgüsü 4. sınıf düzeyinde, kendi cümlelerimizle yeniden anlatılmıştır.
(function () {
  const L = window.HIKAYELER = window.HIKAYELER || [];
  const ekle = (h) => { if (!L.some((x) => x.id === h.id)) L.push(h); };

  ekle({ id: "k01", baslik: "Robinson Crusoe: Issız Adada Yirmi Sekiz Yıl", resim: "🏝️ ⛵ 🦜", kaynak: "Daniel Defoe, Robinson Crusoe (1719) — uyarlama",
    ders: "Zor durumda umutsuzluğa kapılmak yerine aklını ve emeğini kullanan insan, en büyük sıkıntıları bile aşabilir.",
    metin: [
      "Robinson, deniz kenarındaki bir kasabada büyüyen meraklı bir gençti. Babası ona sakin bir hayat yaşamasını öğütlüyordu ama Robinson'un gözü hep ufuktaki gemilerdeydi. Bir gün ailesine haber vermeden bir gemiye bindi ve uzak denizlere açıldı. Yıllarca pek çok macera yaşadı.",
      "Bir yolculuk sırasında korkunç bir fırtına koptu. Dalgalar gemiyi kayalıklara çarptı ve gemi parçalandı. Robinson kendini denize atıp bütün gücüyle yüzdü. Gözlerini açtığında ıssız bir adanın kumsalında yatıyordu. Gemideki arkadaşlarından hiçbiri kurtulamamıştı.",
      "Kıyıda oturup denize bakarken Robinson önce çok korktu ve ağladı. \"Burada tek başıma ne yapacağım?\" diye düşündü. Sonra babasının sözlerini hatırladı: \"Korku insanın aklını bulandırır; önce sakinleş, sonra düşün.\" Derin bir nefes aldı. Ayağa kalktı ve adayı tanımak için en yüksek tepeye tırmanmaya karar verdi. Tepeden bakınca etrafın uçsuz bucaksız denizle çevrili olduğunu gördü.",
      "İlk gece bir ağaca tırmanıp uyudu, çünkü vahşi hayvanlardan korkuyordu. Sabah olunca kıyıya vuran gemi enkazını gördü. Birkaç gün boyunca enkaza yüzüp sal yaptı ve gemiden alet, ip, yelken bezi, un, tohum ve birkaç kitap taşıdı. \"Elimde bunlar varsa çaresiz değilim.\" diye düşündü.",
      "Robinson bir tepenin yamacında, mağaranın önüne kazıklarla çevrili sağlam bir ev yaptı. Ağaç kabuğuna her gün bir çentik atarak günleri saydı; böylece takvimi hiç kaybetmedi. Gemiden aldığı tohumları ekti. İlk yıl ürün azdı ama o pes etmedi, her yıl biraz daha fazla buğday ve arpa yetiştirdi.",
      "Zamanla keçileri evcilleştirdi, onlardan süt ve peynir elde etti. Kilden çömlek yapmayı denedi; ilk çömlekleri ateşte çatladı ama sonunda pişmiş, sağlam kaplar yapmayı başardı. Bir papağanı konuşmayı öğretene kadar eğitti. Papağan her sabah \"Zavallı Robinson!\" diye bağırarak onu güldürüyordu.",
      "Robinson bazen çok yalnız hissediyordu. Böyle günlerde bir kâğıda iki sütun çizdi: Bir yanına başına gelen kötü şeyleri, öbür yanına iyi şeyleri yazdı. Adada yalnızdı ama hayattaydı; yiyeceği, evi ve sağlığı vardı. Bu liste ona şükretmeyi ve umutlu kalmayı öğretti.",
      "Yağmurlu mevsim geldiğinde Robinson mağarasında oturup gemiden aldığı kitapları okudu. Bir günlük tutmaya başladı; yaptığı işleri, gördüğü hayvanları ve hava durumunu yazdı. Ağaç gövdesini oyarak bir kano yapmaya çalıştı ama kano o kadar ağırdı ki onu denize sürükleyemedi. \"Bir işe başlamadan önce sonunu düşünmeliyim.\" diyerek bu hatasından da ders çıkardı.",
      "Yıllar sonra bir gün kumsalda bir insan ayak izi gördü ve çok şaşırdı. Adaya kayıklarla gelen bir grup insan, yakaladıkları bir esiri cezalandırmak istiyordu. Robinson cesaretini toplayıp esirin kaçmasına yardım etti. Kurtardığı genç adama, o gün cuma olduğu için \"Cuma\" adını verdi.",
      "Cuma çok çalışkan ve iyi kalpli biriydi. Robinson ona kendi dilini öğretti, Cuma da Robinson'a adadaki bitkileri ve balık tutmanın kolay yollarını gösterdi. İkisi kısa sürede çok iyi dost oldular. Robinson artık yalnız değildi; birlikte daha büyük bir tekne yapmaya başladılar.",
      "Bir gün adanın açıklarına bir gemi yanaştı. Gemideki tayfalar kaptanlarına karşı ayaklanmıştı. Robinson ve Cuma, akıllıca bir planla kaptanın gemisini geri almasına yardım etti. Minnettar kaptan onları gemisine aldı. Robinson, adada geçirdiği yirmi sekiz yılın ardından sonunda evine döndü.",
      "Robinson evine döndüğünde artık bambaşka biriydi. Sabırlı olmayı, elindekinin değerini bilmeyi ve hiçbir durumda umudu kaybetmemeyi öğrenmişti. Torunlarına adayı anlatırken hep aynı şeyi söylerdi: \"İnsanın en güçlü aleti elleri ve aklıdır. Bir de hiç bitmeyen umudu.\"",
      "Robinson'un hikâyesi yüzlerce yıldır okunuyor. Çünkü her okur kendine şu soruyu soruyor: \"Ben o adada olsaydım ne yapardım?\" Robinson bize, hiçbir şeyimiz yokmuş gibi göründüğünde bile elimizdekini değerlendirebileceğimizi, öğrenmenin ve çalışmanın en karanlık günleri bile aydınlatabileceğini gösteriyor."
    ],
    sorular: [
      ["Robinson adaya nasıl düştü?", "Gemisi fırtınada parçalandı", ["Uçağı düştü", "Yolunu kaybetti"]],
      ["Robinson günleri nasıl saydı?", "Ağaca her gün bir çentik atarak", ["Telefonuna bakarak", "Yıldızları sayarak"]],
      ["Robinson'un kurtardığı genç adamın adı neydi?", "Cuma", ["Pazar", "Salı"]],
      ["Robinson iki sütunlu listeyle ne öğrendi?", "Şükretmeyi ve umutlu kalmayı", ["Kitap yazmayı", "Gemi yapmayı"]],
      ["Robinson adada kaç yıl kaldı?", "Yirmi sekiz", ["İki", "Yüz"]],
      ["Hikâyenin ana fikri nedir?", "Akıl, emek ve umutla zorluklar aşılabilir", ["Denize hiç çıkmamalıyız", "Papağanlar çok konuşur"]]
    ] });

  ekle({ id: "k02", baslik: "Gulliver Cüceler Ülkesinde", resim: "🧍 🏰 🔭", kaynak: "Jonathan Swift, Gulliver'in Gezileri (1726) — uyarlama",
    ders: "İnsanları boylarına, güçlerine ya da görünüşlerine göre değil; davranışlarına göre değerlendirmeliyiz.",
    metin: [
      "Lemuel Gulliver, gemilerde çalışan bir doktordu. Uzak denizlere yaptığı bir yolculukta gemisi büyük bir fırtınaya yakalandı ve battı. Gulliver saatlerce yüzdü, sonunda bilmediği bir kıyıya ulaştı. O kadar yorgundu ki kumların üzerinde derin bir uykuya daldı.",
      "Uyandığında kıpırdayamadığını fark etti. Kolları, bacakları, hatta saçları bile yere ince iplerle bağlanmıştı. Göğsünün üzerinde bir şeylerin yürüdüğünü hissetti. Başını hafifçe kaldırınca gözlerine inanamadı: Bir parmak boyunda, elinde minicik ok ve yay tutan insanlar üzerinde dolaşıyordu!",
      "Burası Lilliput adında bir ülkeydi ve halkı, Gulliver'in serçe parmağından bile küçüktü. Lilliputlular önce ondan çok korktular ve minicik oklarla yüzüne nişan aldılar. Ama Gulliver kimseye zarar vermeyeceğini işaretlerle anlattı. Bunun üzerine ona yüzlerce minik fıçı içinde su ve sepetler dolusu ekmek getirdiler.",
      "Kral, bu dev misafiri görmek için başkente getirtti. Gulliver'i taşımak için dokuz yüz işçi çalıştı ve onu bin beş yüz atın çektiği kocaman bir arabaya yüklediler. Başkentte en büyük tapınağa yerleştirildi; çünkü başka hiçbir bina ona yetecek kadar büyük değildi.",
      "Lilliputlular Gulliver'i beslemek için çok çalışıyordu. Her gün altı öküz, kırk koyun ve yüzlerce ekmek pişiriliyordu. Onun için üç yüz terzi bir elbise dikti; elbisenin kumaşı yüzlerce parçanın birleştirilmesiyle yapıldı. Gulliver ise bu emeğe karşılık onlara hep nazik davrandı, onları ezmemek için adımlarını dikkatle attı.",
      "Gulliver kısa sürede Lilliput dilini öğrendi. Çocuklar onun saçlarının arasında saklambaç oynuyor, avucunda dans ediyordu. Kral ona ülkenin yasalarına uyacağına dair söz verdirdi ve bağlarını çözdürdü. Gulliver de bu minik ülkeyi korumaya karar verdi.",
      "Lilliput'un, denizin karşısındaki Blefusku adlı ülkeyle bitmek bilmeyen bir kavgası vardı. Kavganın sebebi çok tuhaftı: Lilliputlular haşlanmış yumurtayı sivri ucundan, Blefuskulular ise geniş ucundan kırıyordu! Bu küçük fark yüzünden yıllardır savaşıyorlardı.",
      "Bir gün Blefusku donanması Lilliput'a saldırmaya hazırlandı. Gulliver denize yürüdü; deniz ona ancak göğsüne kadar geliyordu. Elli düşman gemisini iplerle birbirine bağladı ve hepsini çekerek Lilliput limanına getirdi. Halk onu bir kahraman gibi karşıladı.",
      "Lilliput'ta bir gece sarayın bir bölümünde yangın çıktı. Lilliputluların minicik kovalarla taşıdığı su yangını söndürmeye yetmiyordu. Gulliver hemen koştu ve yangını kendi yöntemiyle söndürdü. Sarayı kurtarmıştı ama kraliçe bu yöntemi hiç beğenmedi ve ona gücendi. Gulliver, iyilik yaparken bile karşısındakinin duygularını düşünmesi gerektiğini anladı.",
      "Ama kral şımarmıştı. Gulliver'den Blefusku'nun tamamını ele geçirip oradaki halkı köle yapmasını istedi. Gulliver bunu kesinlikle reddetti: \"Ben bir ülkeyi korurum ama özgür insanları köle yapmam.\" dedi. Kral bu cevaba çok kızdı ve saraydaki bazı kıskanç bakanlar Gulliver'e düşman oldu.",
      "Bir gece dost bir saraylı, Gulliver'i cezalandırmak için gizli bir plan yapıldığını haber verdi. Gulliver sessizce Blefusku'ya geçti. Orada kıyıya vurmuş, gerçek boyutta bir kayık buldu. Blefuskuluların yardımıyla kayığı onardı, yiyecek topladı ve denize açıldı.",
      "Günlerce süren yolculuktan sonra bir gemi onu kurtardı. Gulliver evine döndüğünde Lilliput'tan getirdiği minik koyunları gösterdiğinde herkes çok şaşırdı. O ise bu maceradan önemli bir ders çıkarmıştı: Bir insanın değeri boyuyla değil, doğruluğuyla ve iyiliğiyle ölçülürdü. Küçücük bir yumurta yüzünden savaşmanın ne kadar anlamsız olduğunu da hiç unutmadı.",
      "Gulliver daha sonra başka yolculuklara da çıktı. Bir seferinde bu kez kendisinin minicik kaldığı devler ülkesine düştü. Orada devlerin avucunda bir oyuncak gibi taşındı. İki ülkeyi de gördükten sonra, büyük ya da küçük olmanın kimseyi üstün yapmadığını çok daha iyi anladı."
    ],
    sorular: [
      ["Gulliver uyandığında neden kıpırdayamadı?", "İnce iplerle yere bağlanmıştı", ["Çok hastaydı", "Kumlara gömülmüştü"]],
      ["Lilliputlular ne kadar boydaydı?", "Bir parmak boyunda", ["Bir ağaç boyunda", "Gulliver kadar"]],
      ["Lilliput ile Blefusku neden kavga ediyordu?", "Yumurtayı hangi ucundan kıracakları yüzünden", ["Altın madeni yüzünden", "Bir at yüzünden"]],
      ["Gulliver düşman donanmasına ne yaptı?", "Gemileri iplerle bağlayıp limana çekti", ["Gemileri batırdı", "Gemilere bindi"]],
      ["Gulliver kralın hangi isteğini reddetti?", "Blefusku halkını köle yapmayı", ["Tapınakta uyumayı", "Lilliput dilini öğrenmeyi"]],
      ["Hikâyeden çıkan ders hangisidir?", "İnsanın değeri boyuyla değil davranışıyla ölçülür", ["Büyük olan her zaman haklıdır", "Denize açılmak tehlikesizdir"]]
    ] });

  ekle({ id: "k03", baslik: "Oz Büyücüsü", resim: "🌪️ 👠 🦁", kaynak: "L. Frank Baum, Oz Büyücüsü (1900) — uyarlama",
    ders: "Aradığımız akıl, sevgi ve cesaret çoğu zaman zaten içimizdedir; onları ortaya çıkaran şey dostluk ve çabadır.",
    metin: [
      "Dorothy, Amerika'nın Kansas bölgesindeki geniş ovalarda Henry Amca'sı, Em Teyzesi ve küçük köpeği Toto ile yaşıyordu. Bir gün ufukta korkunç bir kasırga belirdi. Herkes yer altındaki sığınağa koştu ama Dorothy kaçan Toto'yu yakalamaya çalışırken evin içinde kaldı.",
      "Kasırga, evi Dorothy ve Toto ile birlikte havaya kaldırdı ve saatlerce döndürdü. Sonunda ev, rengârenk çiçeklerle dolu, hiç bilmediği bir ülkeye yumuşakça indi. Burası Oz Ülkesi'ydi. Kısa boylu Munçkin halkı Dorothy'ye sevinçle teşekkür etti; çünkü düşen ev, onlara zulmeden kötü cadıyı ortadan kaldırmıştı.",
      "İyi Kuzey Cadısı, Dorothy'ye kötü cadının gümüş ayakkabılarını verdi. Dorothy evine dönmek istediğini söyleyince cadı, \"Bunu ancak Zümrüt Şehir'deki büyük Oz Büyücüsü bilebilir. Sarı tuğlalı yolu takip et.\" dedi. Dorothy ve Toto hemen yola çıktılar.",
      "Sarı tuğlalı yol, mavi çiçekli tarlaların ve küçük yuvarlak evlerin arasından ilerliyordu. Munçkinler Dorothy'ye yiyecek verdiler ve ona iyi yolculuklar dilediler. Dorothy, gümüş ayakkabılarının ayağına tam olduğunu görünce çok şaşırdı. Toto ise her kelebeğin peşinden koşuyor, kuyruğunu sallayarak yolu gösteriyordu.",
      "Yolda bir mısır tarlasında, direğe asılı bir Korkuluk gördüler. Korkuluk konuşabiliyordu! \"Kafamın içi samanla dolu, keşke biraz aklım olsaydı.\" dedi. Dorothy onu direkten indirdi ve büyücüden akıl istemek için birlikte yürümeye başladılar.",
      "Biraz ilerde, ormanda paslanıp kalmış bir Teneke Adam buldular. Eklemlerini yağladıklarında Teneke Adam yeniden hareket edebildi. \"Benim bir kalbim yok. Sevebilmek için bir kalp isterdim.\" dedi. Sonra karşılarına kükreyen ama aslında her şeyden korkan bir Aslan çıktı. Aslan da cesaret istemek için onlara katıldı.",
      "Yolculuk kolay değildi. Derin bir uçurumun üzerinden geçmeleri gerekti. Korkak Aslan, titrese de arkadaşlarını tek tek sırtında karşıya taşıdı. Bir nehri geçmek için Teneke Adam baltasıyla bir sal yaptı. Korkuluk ise her zorlukta akıllıca bir çözüm buluyordu. Yolda Teneke Adam, ezdiği bir böceğe bile ağlayacak kadar yufka yürekliydi.",
      "Bir gün kocaman, kırmızı gelinciklerle dolu bir tarlaya geldiler. Çiçeklerin kokusu öyle ağırdı ki Dorothy, Toto ve Aslan derin bir uykuya daldı. Korkuluk ile Teneke Adam ise samandan ve tenekeden yapıldıkları için uyumadılar. Dorothy ile Toto'yu kucaklayıp tarladan çıkardılar; ağır Aslan'ı taşımak için de tarla farelerinin yardımını istediler. Binlerce fare bir araba çekerek Aslan'ı kurtardı.",
      "Sonunda yemyeşil ışıklar saçan Zümrüt Şehir'e ulaştılar. Büyücü, isteklerini yerine getirmek için önce batıdaki kötü cadıyı yenmelerini istedi. Kötü cadı Dorothy'yi esir aldı ama Dorothy bir kova suyu cadının üzerine dökünce, sudan çok korkan cadı eriyip yok oldu.",
      "Zümrüt Şehir'e döndüklerinde büyük bir sürprizle karşılaştılar. Toto bir perdeyi çekince, korkunç sesler çıkaran büyücünün aslında sıradan, yaşlı bir adam olduğu ortaya çıktı! Adam utanarak gerçek bir büyücü olmadığını itiraf etti. Ama arkadaşlara önemli bir şey söyledi.",
      "\"Korkuluk, yolculuk boyunca en akıllıca fikirleri sen buldun. Teneke Adam, arkadaşların için en çok sen üzüldün; kalbin zaten var. Aslan, korktuğun hâlde arkadaşlarını kurtardın; asıl cesaret budur.\" Yine de onlara birer hediye verdi ve üçü de istediklerine kavuştuklarına inandılar.",
      "Dorothy'nin evine dönmesine ise İyi Güney Cadısı yardım etti: \"Gümüş ayakkabıların topuklarını üç kez birbirine vur ve nereye gitmek istediğini söyle.\" Dorothy arkadaşlarına sarılıp vedalaştı, topuklarını vurdu ve \"Evime, Em Teyze'ye!\" dedi. Gözlerini açtığında Kansas'taydı. Em Teyzesine sarılırken, \"Evden güzel bir yer yok.\" dedi.",
      "Dorothy'nin hikâyesi bize şunu da hatırlatır: Yolda karşılaştığımız insanlara yardım ettiğimizde onlar da bize yardım eder. Dorothy, Korkuluk'u direkten indirmeseydi, Teneke Adam'ı yağlamasaydı, Aslan'ı yanına almasaydı o uzun yolu asla tek başına yürüyemezdi."
    ],
    sorular: [
      ["Dorothy'yi Oz Ülkesi'ne ne götürdü?", "Kasırga", ["Bir gemi", "Bir balon"]],
      ["Dorothy'nin köpeğinin adı nedir?", "Toto", ["Pamuk", "Karabaş"]],
      ["Korkuluk büyücüden ne istiyordu?", "Akıl", ["Kalp", "Cesaret"]],
      ["Kötü batı cadısı nasıl yok oldu?", "Üzerine su dökülünce eridi", ["Ateşe düştü", "Uçup gitti"]],
      ["Büyücünün gerçek yüzü neydi?", "Sıradan, yaşlı bir adamdı", ["Bir ejderhaydı", "Bir cadıydı"]],
      ["Hikâyenin ana fikri hangisidir?", "Akıl, sevgi ve cesaret içimizdedir; dostlukla ortaya çıkar", ["Büyücüler her şeyi bilir", "Uzak yerlere gitmek tehlikelidir"]]
    ] });

  ekle({ id: "k04", baslik: "Heidi: Dağların Kızı", resim: "🏔️ 🐐 👧", kaynak: "Johanna Spyri, Heidi (1880) — uyarlama",
    ders: "Doğanın güzelliği, sevgi ve paylaşmak insanı iyileştirir; gerçek mutluluk sevdiklerimizle birlikte olmaktır.",
    metin: [
      "Heidi küçük yaşta anne ve babasını kaybetmiş, teyzesinin yanında büyümüştü. Beş yaşına geldiğinde teyzesi şehirde iş buldu ve Heidi'yi İsviçre'nin Alp Dağları'nda yaşayan dedesinin yanına götürdü. Dedesi, köylülerin \"Alp Amca\" dediği, kimseyle konuşmayan, asık suratlı yaşlı bir adamdı.",
      "Heidi ise dedesinin asık suratından hiç korkmadı. Dağ kulübesine girer girmez merakla her yeri gezdi. Çatı katındaki saman yatağı görünce sevinçle çığlık attı: \"Burada uyuyacağım! Pencereden yıldızları görebiliyorum!\" Dedesi bu neşeli kızın karşısında, yıllar sonra ilk kez gülümsedi.",
      "Her sabah keçi çobanı Peter, köyün keçilerini dağa çıkarırken Heidi de onunla gidiyordu. Çiçeklerle dolu çayırlarda koşuyor, kartalların süzülüşünü izliyor, akşam güneşinin karlı dağları kıpkırmızı boyamasını hayranlıkla seyrediyordu. Heidi'nin yanakları elma gibi kızarmış, gözleri ışıl ışıl olmuştu.",
      "Heidi, Peter'in kör ninesini de sık sık ziyaret ediyordu. Nineye dedesinin pişirdiği yumuşak ekmeklerden götürüyor, ona dağda gördüklerini anlatıyordu. Dedesi de Heidi'nin isteğiyle ninenin rüzgârda takırdayan pencere kepenklerini onardı. Alp Amca'nın kalbindeki buzlar yavaş yavaş eriyordu.",
      "Kış geldiğinde dağlar bembeyaz karla kaplandı. Heidi ve Peter, dedenin yaptığı tahta kızakla tepeden aşağı kaydılar. Heidi, Peter'e okuma öğrenmesi için de çok yardım etti. Peter önce harfleri hiç sevmiyordu ama Heidi ona sabırla her gün bir harf öğretti. Kışın sonunda Peter, ninesine kitaptan ilahiler okuyabiliyordu.",
      "Heidi sekiz yaşındayken teyzesi bir gün çıkageldi ve onu büyük bir şehre, Frankfurt'a götürdü. Orada zengin bir ailenin yürüyemeyen kızı Klara'ya arkadaşlık edecekti. Klara tekerlekli sandalyede oturan, nazik ama hep yalnız bir kızdı. İki kız kısa sürede çok iyi dost oldular.",
      "Ama Heidi şehirde mutlu değildi. Taş binaların arasında gökyüzünü bile zor görüyordu. Evin katı kahyası Bayan Rottenmeier, ona her şeyi yasaklıyordu. Heidi her gece dağları, dedesini ve keçileri düşünerek sessizce ağladı. Gittikçe zayıfladı, rengi soldu ve uykusunda yürümeye başladı.",
      "Frankfurt'ta Klara'nın büyükannesi Heidi'yi çok sevdi. Ona resimli kitaplar getirdi ve okumayı çok daha iyi öğrenmesine yardım etti. Heidi okudukça ninenin gözlerinin görmediğini, ona kitap okuyabileceğini düşünerek sevindi. Klara ile Heidi geceleri pencereden yıldızlara bakıp dağları konuşuyorlardı. Ama Heidi'nin özlemi her gün biraz daha büyüyordu.",
      "Evin doktoru Heidi'nin dağlara olan özleminden hastalandığını anladı. \"Bu kızın ilacı dağ havasıdır.\" dedi. Heidi hemen dedesinin yanına gönderildi. Dedesini görünce boynuna atıldı. Kısa sürede yeniden neşesine, sağlığına ve ışıl ışıl gözlerine kavuştu.",
      "Ertesi yaz Klara da dağa, Heidi'nin yanına geldi. Temiz dağ havası, taze keçi sütü ve Heidi'nin neşesi Klara'ya çok iyi geldi. Peter ise önce Heidi'nin yeni arkadaşını kıskandı ve öfkeyle Klara'nın tekerlekli sandalyesini dağdan aşağı itti. Sandalye kayalara çarparak paramparça oldu.",
      "Sandalyesiz kalan Klara, Heidi ve Peter'in omuzlarına tutunarak birkaç adım atmayı denedi. Her gün biraz daha fazla yürüdü. Peter yaptığı hatadan çok utanmıştı; Klara'ya yürümesi için en çok o yardım etti. Sonunda Klara'nın babası ve büyükannesi geldiğinde, Klara onlara doğru kendi ayaklarıyla yürüdü!",
      "Herkes sevinç gözyaşları döktü. Klara'nın ailesi Heidi'ye ve dedesine teşekkür etti. Peter de gerçeği itiraf etti ve affedildi. Heidi, dağların, dostluğun ve sevginin insanları nasıl iyileştirdiğini görmüştü. O akşam dedesiyle kulübenin önünde oturup kızıllaşan karlı tepeleri izlerken, \"Dünyanın en güzel yeri burası.\" dedi.",
      "Heidi'nin hikâyesi, şehirde ya da dağda nerede yaşarsak yaşayalım, doğayla bağımızı koparmamamız gerektiğini hatırlatır. Temiz hava, gün ışığı, hareket ve sevgi dolu bir aile, en pahalı ilaçlardan bile daha iyileştirici olabilir."
    ],
    sorular: [
      ["Heidi'nin dedesi nerede yaşıyordu?", "Alp Dağları'nda", ["Frankfurt'ta", "Deniz kenarında"]],
      ["Keçi çobanının adı neydi?", "Peter", ["Klara", "Hans"]],
      ["Heidi Frankfurt'ta neden hastalandı?", "Dağlara ve dedesine olan özleminden", ["Soğuk aldığı için", "Çok yemek yediği için"]],
      ["Klara'nın sorunu neydi?", "Yürüyemiyordu", ["Göremiyordu", "Konuşamıyordu"]],
      ["Peter kıskançlıkla ne yaptı?", "Klara'nın tekerlekli sandalyesini dağdan aşağı itti", ["Keçileri kaçırdı", "Heidi'nin ekmeğini yedi"]],
      ["Bu hikâyede insanları iyileştiren şeyler nelerdir?", "Doğa, sevgi ve dostluk", ["Para ve hediyeler", "Büyük binalar"]]
    ] });

  ekle({ id: "k05", baslik: "Kaşağı", resim: "🐴 🪮 👦", kaynak: "Ömer Seyfettin, Kaşağı (1918) — uyarlama",
    ders: "Yalan ve iftira, başkalarına telafisi zor acılar verir; hatamızı zamanında itiraf etmek erdemdir.",
    metin: [
      "Bu hikâyeyi, çocukluğunu anlatan bir adamın ağzından dinleyelim. Ben altı yaşındaydım, kardeşim Hasan ise beş. Babam bizi her konuda birbirimizle eşit tutardı; birine ne alsa ötekine de aynısını alırdı. Evimizin büyük bir bahçesi ve bahçenin köşesinde atlarımızın durduğu bir ahır vardı.",
      "Atlarımıza Dadaruh bakardı. Dadaruh bizi çok severdi; atları tımar ederken yanına alır, bize masallar anlatırdı. Atları temizlemek için kullandığı demirden tarağa \"kaşağı\" denirdi. Dadaruh'un bir de gümüş kakmalı, çok güzel bir kaşağısı vardı. Onu sadece bayramlarda, atları süslerken kullanırdı.",
      "Bir gün ahırda yalnızdım. O gümüşlü kaşağıyı aldım ve onunla oynamaya başladım. Sonra merakla kaşağıyı taşın üzerine koyup bir başka taşla vurdum. Kaşağı kırıldı! Çok korktum. Kırık parçaları alıp bahçenin dibindeki kuyuya attım ve hiçbir şey olmamış gibi eve döndüm.",
      "Akşam yemeğinde babam bize kaşağıyı sordu. Bütün aile sofradaydı. Dadaruh kapının önünde başını öne eğmiş, üzgün bekliyordu. Kaşağı onun en değerli eşyasıydı; bir hediye olarak almıştı. Babam, \"Kim yaptıysa söylesin, kızmayacağım.\" dedi. Ama ben korkudan dilim tutulmuş gibi sustum. İçimden bir ses \"Söyle!\" diyordu, ötekisi \"Ceza alırsın!\"",
      "Akşam Dadaruh kaşağıyı aradı, bulamadı. Babam bize kaşağıyı görüp görmediğimizi sordu. Ben bir an düşündüm ve korkudan, \"Hasan kırdı, kuyuya attı. Ben gördüm.\" dedim. Kardeşim şaşkınlıkla bana baktı, \"Ben yapmadım!\" diye ağlamaya başladı. Ama babam benim sözüme inandı.",
      "Babam yalan söyleyen çocuğa ceza verirdi. Hasan'ı hem kaşağıyı kırdığı hem de inkâr ettiği için cezalandırdı; o gün onu hiçbir yere götürmedi, onunla konuşmadı ve ona çok kırıldığını söyledi. Hasan o gece hıçkırıklarla ağlarken ben yorganın altında sessizce yatıyordum. İçim rahat değildi ama gerçeği söyleyecek cesaretim yoktu.",
      "O günden sonra Hasan benimle eskisi gibi oynamadı. Bahçede tek başına oturuyor, bazen bana uzun uzun bakıyordu. Ben onun yanına gidemiyordum. Her bakışında içim yanıyordu. Dadaruh da artık eskisi kadar neşeli değildi; kırılan kaşağının yerine yenisini almıştı ama o yenisini hiç sevmedi.",
      "Günler geçti, sonra aylar geçti. O kış Hasan ağır bir hastalığa yakalandı. Ateşler içinde yatıyordu. Ev halkı hep yanında, telaş içindeydi. Bir gece hastalığı çok ağırlaştı ve sevgili kardeşim Hasan, sabaha karşı hayatını kaybetti. Evimizi derin bir yas kapladı.",
      "Hasan'ın ölümünden sonra annem onun eşyalarını her gün sevgiyle okşuyor, ağlıyordu. Bir gün bahçede oturmuş ağlarken bana dönüp şöyle dedi: \"Zavallı Hasan, sağlığında bir kaşağı yüzünden ceza da gördü...\" Bu söz, kalbime bir hançer gibi saplandı.",
      "O an kendimi tutamadım. Hıçkırarak, \"Anne, kaşağıyı Hasan kırmadı, ben kırdım! Ben attım kuyuya!\" diye bağırdım. Annem bana şaşkınlıkla baktı. Babam da yanımıza gelmişti. İkisi de bir süre hiçbir şey söylemeden ağladılar. Ben ise yıllardır içimde taşıdığım o ağır yükü ilk kez dile getirmiştim.",
      "Babam beni dövmedi, kızmadı da. Sadece başını öne eğdi ve \"Keşke o gün doğruyu söyleseydin oğlum. Sen yalan söylemekle kardeşine de, kendine de, bize de çok büyük acı verdin.\" dedi. Bu söz, herhangi bir cezadan çok daha ağırdı.",
      "Aradan uzun yıllar geçti. Ben büyüdüm, yaşlandım. Ama o kaşağıyı ve kardeşimin ağlayan yüzünü hiç unutmadım. Hayatımın her döneminde bir yanlış yaptığımda hemen itiraf etmeye çalıştım. Çünkü öğrendim ki küçük bir yalan, yıllarca sürecek büyük bir pişmanlığa dönüşebilir.",
      "Ömer Seyfettin'in Kaşağı hikâyesi, yüz yıldan uzun süredir okullarda okunur; çünkü her okuyana aynı soruyu sordurur: \"Ben olsam doğruyu söyler miydim?\" Doğruyu söylemek bazen zordur ama yalanın yükü her zaman daha ağırdır."
    ],
    sorular: [
      ["Kaşağı ne işe yarar?", "Atları temizlemeye", ["Saçı taramaya", "Toprağı kazmaya"]],
      ["Gümüşlü kaşağıyı kim kırdı?", "Hikâyeyi anlatan çocuk", ["Hasan", "Dadaruh"]],
      ["Çocuk suçu kime attı?", "Kardeşi Hasan'a", ["Dadaruh'e", "Komşu çocuğuna"]],
      ["Çocuk gerçeği ne zaman itiraf etti?", "Annesi Hasan'ın ceza gördüğünü söyleyince", ["Ertesi sabah", "Hiç itiraf etmedi"]],
      ["Babasının sözleri neden cezadan daha ağırdı?", "Yalanın herkese verdiği acıyı anlattığı için", ["Çok bağırdığı için", "Onu hiç sevmediğini söylediği için"]],
      ["Hikâyenin ana fikri hangisidir?", "Yalan ve iftira telafisi zor acılara yol açar", ["Atlar çok değerlidir", "Kardeşler hep kavga eder"]]
    ] });

  ekle({ id: "k06", baslik: "Küçük Prens", resim: "👑 🌹 🦊", kaynak: "Antoine de Saint-Exupéry, Küçük Prens (1943) — uyarlama",
    ders: "Asıl önemli olan gözle görülmez, ancak yürekle görülür; sevdiklerimize emek verdikçe onlar bizim için eşsiz olur.",
    metin: [
      "Bir pilotun uçağı, Büyük Sahra Çölü'nün ortasında arızalanıp yere indi. Pilot, en yakın köyden binlerce kilometre uzaktaydı ve yalnızca bir haftalık suyu vardı. İlk gece kumların üzerinde uyurken incecik bir sesle uyandı: \"Lütfen... bana bir koyun resmi çizer misin?\"",
      "Karşısında altın saçlı, uzun atkılı küçük bir çocuk duruyordu. Bu, Küçük Prens'ti. Uzaklardaki minicik bir gezegenden, bir ev büyüklüğündeki B-612 asteroidinden geliyordu. Gezegeninde üç küçük yanardağ ve her sabah temizlemesi gereken baobab ağacı filizleri vardı.",
      "Küçük Prens'in gezegeninde bir de gül vardı. Gül çok güzeldi ama biraz kibirli ve nazlıydı. Küçük Prens ona her gün su veriyor, rüzgârdan koruyor, geceleri üzerine cam bir fanus örtüyordu. Ama gülün nazlanmalarına kırıldı ve bir gün gezegeninden ayrılıp yolculuğa çıktı.",
      "Küçük Prens her sabah gezegenini temizlerdi. Yanardağların ağzını süpürür, baobab filizlerini daha küçükken söküp atardı. Çünkü baobablar büyürse kökleriyle gezegeni parçalayabilirdi. \"Bu bir düzen meselesi.\" derdi. \"Sabah giyindikten sonra gezegenini de giydirmen gerekir.\" Akşamları da sandalyesini birkaç adım çekip günbatımını izlerdi; bir gün tam kırk dört kez günbatımı izlemişti.",
      "Yolculuğu sırasında başka gezegenlere uğradı. Birinde herkese emir vermek isteyen ama hiç tebaası olmayan bir kral vardı. Bir başkasında yalnızca alkışlanmak isteyen kendini beğenmiş bir adam. Bir diğerinde yıldızları sayıp sahip olduğunu sanan bir iş adamı. Küçük Prens, \"Büyükler gerçekten çok tuhaf.\" diye düşündü.",
      "Sonunda Dünya'ya geldi. Bir bahçede yüzlerce gül gördü ve çok üzüldü. Kendi gülünün dünyadaki tek gül olduğunu sanıyordu. \"Benim gülüm sıradan bir gülmüş.\" diye ağladı. Tam o sırada bir tilki çıkageldi.",
      "Dördüncü gezegende her dakika fenerini yakıp söndüren bir fenerci vardı. Gezegen çok hızlı döndüğü için her dakika gece ile gündüz yer değiştiriyordu. Fenerci hiç dinlenemiyordu ama görevini asla bırakmıyordu. Küçük Prens, \"Gördüğüm büyüklerin içinde gülünç olmayan tek kişi o; çünkü kendinden başka bir şeyle ilgileniyor.\" diye düşündü.",
      "Tilki, \"Benimle oynayamam, çünkü evcilleşmedim.\" dedi. \"Evcilleşmek ne demek?\" diye sordu Küçük Prens. Tilki anlattı: \"Bağ kurmak demek. Şimdilik sen benim için yüz bin çocuk gibi bir çocuksun. Ama beni evcilleştirirsen birbirimize ihtiyacımız olur. Sen benim için dünyada tek olursun.\"",
      "Küçük Prens her gün aynı saatte gelip tilkiyle biraz daha yakın oturdu. Böylece tilkiyi evcilleştirdi. Ayrılık zamanı geldiğinde tilki ona bir sır verdi: \"İnsan ancak yüreğiyle iyi görür. Asıl önemli olan gözle görülmez. Gülünü senin için bu kadar önemli yapan, ona harcadığın zamandır.\"",
      "Küçük Prens bahçedeki güllere döndü ve onlara, \"Siz güzelsiniz ama boşsunuz. Benim gülüm tek başına hepinizden önemlidir, çünkü onu ben suladım, onu ben korudum, onu ben dinledim.\" dedi. Artık gülünün neden eşsiz olduğunu anlamıştı.",
      "Pilot ile Küçük Prens çölde su aramaya çıktılar. Uzun bir yürüyüşün sonunda bir kuyu buldular. Pilot ona kuyudan su çekti. Küçük Prens suyu içerken, \"Bu su sadece su değil; yıldızların altında yürüyüşümüzden, emekten doğdu. Bu yüzden kalbe iyi geliyor.\" dedi.",
      "Bir yıl sonra Küçük Prens, gülünün yanına dönmeye karar verdi. Pilot ona çok alışmıştı ve çok üzüldü. Küçük Prens, \"Geceleri yıldızlara bak. Ben onlardan birinde güleceğim. O zaman bütün yıldızlar sana gülüyormuş gibi gelecek.\" dedi. Pilot uçağını onarıp evine döndü. O günden sonra yıldızlara her baktığında gülümsedi.",
      "Küçük Prens kitabı, dünyada en çok dile çevrilen kitaplardan biridir. Çocuklar onu bir masal gibi okur; büyükler ise her okuyuşta yeni bir anlam bulur. Kitap bize, büyüdükçe çocukluğumuzdaki merakı ve sevgiyi kaybetmememiz gerektiğini fısıldar."
    ],
    sorular: [
      ["Küçük Prens pilottan ilk ne istedi?", "Bir koyun resmi", ["Su", "Uçağını"]],
      ["Küçük Prens'in gezegeninde ona çok değerli olan çiçek hangisiydi?", "Gül", ["Lale", "Papatya"]],
      ["Tilkiye göre evcilleşmek ne demektir?", "Bağ kurmak", ["Kafese girmek", "Saklanmak"]],
      ["Tilkinin verdiği sır nedir?", "Asıl önemli olan gözle görülmez, yürekle görülür", ["Çölde su yoktur", "Güller dikenlidir"]],
      ["Gülü Küçük Prens için eşsiz yapan neydi?", "Ona harcadığı zaman ve emek", ["Rengi", "Büyüklüğü"]],
      ["Küçük Prens ayrılırken pilota ne yapmasını söyledi?", "Geceleri yıldızlara bakmasını", ["Uçağını satmasını", "Çölde kalmasını"]]
    ] });

  ekle({ id: "k07", baslik: "Define Adası", resim: "🗺️ 🏴‍☠️ 💰", kaynak: "Robert Louis Stevenson, Define Adası (1883) — uyarlama",
    ders: "Açgözlülük insanları kötülüğe sürükler; cesaret, dürüstlük ve güvenilir dostlar ise en değerli hazinedir.",
    metin: [
      "Jim Hawkins, annesiyle birlikte deniz kenarında küçük bir han işletiyordu. Bir gün hana, yüzünde kılıç yarası olan yaşlı bir denizci geldi. Adam yanında taşıdığı eski sandığı hiç yanından ayırmıyor, her gün denize bakıp \"tek bacaklı bir denizci\" görüp görmediklerini soruyordu.",
      "Bir gece korsanlar hana baskın yaptı; yaşlı denizcinin sandığındaki bir şeyi arıyorlardı. Jim ve annesi saklanmayı başardı. Jim sandıktan, korsanların aradığı şeyi almıştı: Üzerinde kırmızı bir çarpı işareti olan eski bir harita! Bu, ünlü korsan Kaptan Flint'in hazinesini gömdüğü adanın haritasıydı.",
      "Jim haritayı köyün doktoru Livesey'e ve zengin toprak sahibi Bay Trelawney'e gösterdi. Hep birlikte hazineyi bulmak için Hispanyola adlı bir gemi kiraladılar. Trelawney, gemiye tayfa bulma işini limandaki bir aşçıya, güler yüzlü ve tek bacaklı Long John Silver'a verdi.",
      "Hispanyola limandan ayrıldığında Jim çok heyecanlıydı. Geminin direğine tırmanmayı, ipleri bağlamayı, yelkenleri açmayı öğrendi. Kaptan Smollett sert ama dürüst bir adamdı. Yolculuğun başında, \"Bu tayfalar hoşuma gitmiyor. Hazineden fazla söz ediyorlar.\" dedi ama Trelawney ona kulak asmadı.",
      "Yolculuk sırasında Jim, Silver'la çok iyi anlaştı. Silver omzunda papağanıyla gemide dolaşıyor, Jim'e denizcilik hikâyeleri anlatıyordu. Ama bir gece Jim, elma fıçısının içinde saklanırken korkunç bir konuşmaya kulak misafiri oldu. Silver, tayfaların çoğunu kandırmıştı; hazineyi bulunca Jim'in arkadaşlarını ortadan kaldırmayı planlıyorlardı!",
      "Jim duyduklarını hemen kaptana, doktora ve Trelawney'e anlattı. Gemideki dürüst insanlar azınlıktaydı ama artık hazırlıklıydılar. Gemi adaya ulaştığında korsanlar karaya çıktı. Jim de gizlice bir sandala atlayıp onlarla birlikte adaya geçti.",
      "Adada Jim, yıllar önce burada yalnız bırakılmış Ben Gunn adında tuhaf bir adamla karşılaştı. Ben Gunn, üç yıldır adada yaşıyordu. Jim'e bir sır verdi: Kaptan Flint'in hazinesini çoktan bulmuş ve başka bir mağaraya taşımıştı! Jim bu haberi arkadaşlarına iletmek için yola koyuldu.",
      "Ben Gunn, yıllarca adada yalnız yaşadığı için biraz tuhaf konuşuyordu. Keçi derisinden elbiseler giyiyor ve canı en çok peynir çekiyordu. Jim'e, \"Bana yardım ederseniz ben de size yardım ederim. Ama bana bir parça peynir bulursanız çok sevinirim!\" dedi. Jim bu yalnız adama acıdı ve onu arkadaşlarıyla tanıştırmaya söz verdi.",
      "Jim'in arkadaşları adadaki eski bir ahşap kaleye sığınmıştı. Korsanlar kaleye saldırdı ama dürüst ekip cesurca karşı koydu. Bu sırada Jim cesur bir şey yaptı: Gece gizlice gemiye yüzdü, gemide nöbet tutan korsanı alt etti ve gemiyi korsanların bulamayacağı bir koya saklandı.",
      "Korsanlar haritadaki çarpı işaretine vardıklarında büyük bir çukurla karşılaştılar. Çukur bomboştu! Hazine çoktan Ben Gunn'ın mağarasına taşınmıştı. Öfkelenen korsanlar birbirine düştü. Silver ise durumun aleyhine döndüğünü görünce taraf değiştirip Jim'i korumaya karar verdi.",
      "Doktor, Trelawney, kaptan, Jim ve Ben Gunn hazineyi gemiye taşıdılar. Altın paralar, mücevherler ve külçelerle dolu sandıklar günlerce taşındı. Dönüş yolunda, kurnaz Silver bir limanda geceleyin bir torba altını alıp sessizce gemiden kaçtı ve bir daha görülmedi.",
      "Jim evine döndüğünde, hazineden payına düşenle annesinin hanını yeniden düzenledi. Ama bu maceradan çıkardığı ders altından daha değerliydi. Korsanların açgözlülük yüzünden birbirini nasıl yok ettiğini görmüştü. Gerçek hazinenin cesaret, dürüstlük ve güvenebileceğin dostlar olduğunu anlamıştı.",
      "Define Adası'ndaki korsan Long John Silver, edebiyatın en ünlü karakterlerinden biri oldu. Hem iyi hem kötü yanları vardı; bu yüzden okurlar onu hem sever hem ondan korkar. Hikâye bize insanları yalnızca güler yüzlerine göre değil, davranışlarına göre tanımamız gerektiğini de öğretir."
    ],
    sorular: [
      ["Jim hangi önemli eşyayı buldu?", "Hazine haritası", ["Altın bir taç", "Bir pusula"]],
      ["Tek bacaklı aşçının adı neydi?", "Long John Silver", ["Ben Gunn", "Doktor Livesey"]],
      ["Jim korsanların planını nerede duydu?", "Elma fıçısının içinde saklanırken", ["Handa", "Kalede"]],
      ["Haritadaki çukur neden boştu?", "Ben Gunn hazineyi önceden başka yere taşımıştı", ["Hazine hiç yoktu", "Korsanlar almıştı"]],
      ["Jim'in en cesur davranışı hangisiydi?", "Gemiyi gizlice korsanlardan kurtarması", ["Elma yemesi", "Papağanı yakalaması"]],
      ["Hikâyeye göre gerçek hazine nedir?", "Cesaret, dürüstlük ve güvenilir dostlar", ["Altın paralar", "Bir gemi"]]
    ] });

  ekle({ id: "k08", baslik: "Alice Harikalar Diyarında", resim: "🐇 🫖 🃏", kaynak: "Lewis Carroll, Alice Harikalar Diyarında (1865) — uyarlama",
    ders: "Merak bizi yeni dünyalara götürür; tuhaf durumlarda bile sakin kalıp kendimize güvenmek önemlidir.",
    metin: [
      "Sıcak bir yaz öğleden sonrası Alice, ırmak kenarında ablasının yanında oturmuş sıkılıyordu. Ablasının okuduğu kitapta hiç resim yoktu. Tam o sırada yanından, yeleğinin cebinden saat çıkaran beyaz bir tavşan koşarak geçti: \"Eyvah, eyvah! Geç kalacağım!\" Alice merakla tavşanın peşinden koştu.",
      "Tavşan bir çitin altındaki deliğe daldı; Alice de arkasından. Delik derin bir kuyu gibiydi ve Alice yavaş yavaş, sanki yüzerek aşağı düştü. Sonunda bir yığın kuru yaprağın üzerine yumuşakça indi. Kendini kapılarla dolu uzun bir koridorda buldu. Kapılardan biri çok küçüktü ve ardında harika bir bahçe görünüyordu.",
      "Masada \"Beni iç\" yazan bir şişe vardı. Alice içince küçüldü, küçüldü, bir karış boyunda kaldı. Ama kapının anahtarını masanın üzerinde unutmuştu ve artık uzanamıyordu! Sonra \"Beni ye\" yazan bir kek buldu; onu yiyince bu kez öyle büyüdü ki başı tavana değdi. Alice ağlamaya başladı ve gözyaşları koca bir göl oluşturdu.",
      "Alice yeniden küçülünce kendi gözyaşlarından oluşan gölde yüzmek zorunda kaldı. Gölde bir fare, bir ördek, bir dodo kuşu ve başka hayvanlar da vardı. Kıyıya çıktıklarında dodo kuşu herkesi kurumak için tuhaf bir koşu yarışına soktu. Herkes istediği yerden başladı ve istediği zaman durdu. Dodo, \"Herkes kazandı!\" dedi.",
      "Alice ormanda yürürken bir mantarın üzerinde nargile içen mavi bir tırtılla karşılaştı. Tırtıl, \"Sen kimsin?\" diye sordu. Alice, \"Bu sabah kim olduğumu biliyordum ama o zamandan beri birkaç kez değiştim.\" dedi. Tırtıl ona, mantarın bir yanının büyüttüğünü, öbür yanının küçülttüğünü söyledi.",
      "Alice yolda bir evin önünde, beyaz tavşanın kendisine bağırdığını duydu: \"Mary Ann! Hemen eve git ve bana eldivenlerimi getir!\" Tavşan onu hizmetçisi sanmıştı. Alice eve girip eldivenleri ararken bir şişeden daha içti ve öyle büyüdü ki evin içine sığamadı; bir kolu pencereden, bir ayağı bacadan dışarı çıktı! Sonunda küçük kekler yiyerek yeniden küçüldü ve kaçtı.",
      "Bir ağacın dalında, sırıtarak kaybolup yeniden ortaya çıkabilen bir kedi gördü: Cheshire Kedisi! Kedi kaybolurken önce kuyruğu, sonra gövdesi gidiyor, en son yalnızca kocaman gülümsemesi havada asılı kalıyordu. Alice'e, \"Buradakilerin hepsi biraz tuhaftır. Ben de tuhafım, sen de.\" dedi.",
      "Sonra Şapkacı ile Mart Tavşanı'nın bitmek bilmeyen çay partisine katıldı. Onlara göre saat hep altıydı, yani her zaman çay saatiydi! Bilmeceler soruyor ama cevaplarını kendileri de bilmiyorlardı. Alice, \"Bu hayatımda gördüğüm en saçma çay partisi!\" diyerek oradan ayrıldı.",
      "Sonunda o güzel bahçeye ulaştı. Bahçe, iskambil kâğıtlarından oluşan askerlerin ve öfkeli Kupa Kraliçesi'nin bahçesiydi. Kraliçe, en küçük şeye kızıyor ve \"Kafasını uçurun!\" diye bağırıyordu. Kraliçe, Alice'i flamingoları sopa, kirpileri top olarak kullandıkları tuhaf bir kroket oyununa davet etti.",
      "Kroket oyunu tam bir karmaşaydı. Flamingolar sopa olmak istemiyor, boyunlarını kıvırıp Alice'in yüzüne bakıyordu. Kirpi toplar da yuvarlanmak yerine kalkıp yürüyüp gidiyordu! Kraliçe oyunu kaybettikçe öfkeleniyor ve neredeyse herkesin kafasının uçurulmasını emrediyordu. Neyse ki kral, bu cezaları kimse görmeden sessizce affediyordu.",
      "Sonra bir mahkeme kuruldu; kraliçenin turtalarını çalmakla suçlanan Kupa Valesi yargılanıyordu. Mahkemede her şey öylesine saçmaydı ki Alice dayanamadı. Bu sırada yeniden büyümeye başlamıştı. Kraliçe ona da \"Kafasını uçurun!\" diye bağırınca Alice cesaretle, \"Siz sadece bir deste iskambil kâğıdısınız!\" dedi.",
      "O anda bütün kâğıtlar havalanıp Alice'in üzerine yağdı. Alice çığlık atarak gözlerini açtı. Ablasının dizinde uyuyakalmıştı ve yüzüne ağaçtan kuru yapraklar düşüyordu. Hepsi bir rüyaydı! Alice gördüklerini heyecanla ablasına anlattı. Ablası da onu dinlerken, Alice'in büyüdüğünde bile bu merakını ve hayal gücünü kaybetmemesini diledi.",
      "Alice Harikalar Diyarında, yazıldığı günden beri dünyanın her yerinde çocukların ve büyüklerin en sevdiği kitaplardan biri oldu. Kelime oyunları, bilmeceleri ve tuhaf karakterleriyle okuru düşünmeye ve hayal kurmaya davet eder. Belki de en önemli mesajı şudur: Merak etmek, soru sormak ve hayal kurmak hiç bitmemelidir."
    ],
    sorular: [
      ["Alice kimin peşinden deliğe girdi?", "Saatli beyaz tavşanın", ["Bir kedinin", "Ablasının"]],
      ["\"Beni iç\" yazan şişeyi içince Alice'e ne oldu?", "Küçüldü", ["Büyüdü", "Uçmaya başladı"]],
      ["Alice'in gözyaşları neye dönüştü?", "Koca bir göle", ["Bir ırmağa", "Bir yağmura"]],
      ["Kaybolurken en son gülümsemesi kalan hayvan hangisidir?", "Cheshire Kedisi", ["Mavi tırtıl", "Dodo kuşu"]],
      ["Kupa Kraliçesi en çok hangi sözü söylüyordu?", "Kafasını uçurun!", ["Çay saati!", "Herkes kazandı!"]],
      ["Alice'in macerası nasıl sona erdi?", "Uyandı, hepsinin rüya olduğunu anladı", ["Tavşan deliğinde kaldı", "Kraliçe oldu"]]
    ] });

  ekle({ id: "k09", baslik: "Pal Sokağı Çocukları", resim: "⚽ 🪵 🎖️", kaynak: "Ferenc Molnár, Pal Sokağı Çocukları (1906) — uyarlama",
    ders: "Arkadaşlık, sadakat ve cesaret; bir grubun gerçek kahramanı çoğu zaman en küçük ve en sessiz olanı olabilir.",
    metin: [
      "Budapeşte şehrinin ortasında, Pal Sokağı'nda, kereste deposunun yanında boş bir arsa vardı. Mahallenin çocukları bu arsaya \"Grund\" diyordu. Burası onların oyun alanı, kalesi ve vatanıydı. Kereste yığınlarını kale gibi kullanıyor, top oynuyor, oyunlarını burada kuruyorlardı.",
      "Grubun lideri, akıllı ve adil Boka'ydı. Grubun en küçüğü ve en zayıfı ise Nemeçek'ti. Herkes ona emir veriyor, onu hep \"er\" rütbesinde bırakıyordu; çünkü gruptaki herkes subaydı, bir tek Nemeçek erdi. O yine de grubuna yürekten bağlıydı ve hiç şikâyet etmezdi.",
      "Grubun bir de kendine ait kuralları ve bir defteri vardı. Toplantılarda kararlar oylanır, deftere yazılırdı. Grubun macun toplamak için kurduğu \"Macun Derneği\" bile vardı! Her üye cebinde bir parça macun taşır, onu yumuşak tutmak için sırayla çiğnerdi. Bu çocukça oyunlar onların birbirine ne kadar bağlı olduğunu gösteriyordu.",
      "Bir gün kötü bir haber geldi. Şehrin bahçesinde toplanan Kızıl Gömlekliler adlı başka bir çete, Grund'u ele geçirmeyi planlıyordu. Liderleri güçlü ve korkusuz Feri Ats'tı. Pal Sokağı Çocukları, Grund'u korumak için hemen toplanıp bir plan yaptılar.",
      "Boka, Çonakoş ve küçük Nemeçek, Kızıl Gömleklilerin planlarını öğrenmek için geceleyin bahçeye gizlice girdiler. Bir ağaca tırmanıp onları dinlediler. Bu sırada grubun bir üyesi olan Geréb'in, Pal Sokağı Çocuklarına ihanet edip düşman tarafına geçtiğini duydular ve çok üzüldüler.",
      "Nemeçek, Kızıl Gömleklilere cesaretini göstermek için ertesi gün tek başına bahçeye gitti. Yakalandı ve bahçenin soğuk göletine atıldı. Sırılsıklam, titreyerek bile korkmadan onlara, \"Pal Sokağı Çocukları korkak değildir!\" dedi. Feri Ats, bu küçük çocuğun cesaretine hayran kaldı.",
      "Soğuk suda ıslandığı için Nemeçek ağır bir hastalığa yakalandı. Ateşler içinde yatağa düştü. Bu sırada büyük savaş günü yaklaşıyordu. İki grup, kurallara uyan, kimsenin yaralanmayacağı bir oyun-savaş yapmaya karar verdi: Kum torbalarıyla ve güreşerek Grund için mücadele edeceklerdi.",
      "Hasta yatağındaki Nemeçek'i annesi ve babası çok üzgün izliyordu. Babası bir terziydi ve oğlunun ateşler içinde \"Grund'u korumalıyız!\" diye sayıkladığını duyunca gözyaşlarını tutamıyordu. Boka her gün Nemeçek'i ziyaret ediyor, ona grubun hazırlıklarını anlatıyordu. Nemeçek'in tek isteği arkadaşlarının yanında olmaktı.",
      "Savaş günü Pal Sokağı Çocukları cesurca savaştı. Tam en zor anda, hasta yatağından kalkıp gelen Nemeçek ortaya çıktı! Titreyerek de olsa Feri Ats'ın karşısına dikildi ve onu yere düşürdü. Bu, savaşın dönüm noktası oldu. Pal Sokağı Çocukları Grund'u korumayı başardı.",
      "Ama Nemeçek'in hastalığı bu yüzden çok ağırlaştı. Arkadaşları onu evine taşıdı. Boka hemen bir karar verdi ve grubun defterine şunu yazdırdı: \"Nemeçek artık yüzbaşıdır.\" Küçük Nemeçek, yatağında bu haberi duyunca hafifçe gülümsedi. Hayatı boyunca en çok istediği şey, arkadaşlarının ona değer vermesiydi.",
      "Kızıl Gömleklilerin lideri Feri Ats da Nemeçek'in evine geldi, onun cesaretini takdir etti ve özür diledi. İhanet eden Geréb de pişmanlık içinde arkadaşlarından af diledi. Ama ne yazık ki ertesi sabah küçük kahraman Nemeçek hayata gözlerini yumdu. Bütün çocuklar derin bir üzüntüye boğuldu.",
      "Birkaç gün sonra Boka, Grund'a geldiğinde acı bir haber daha aldı: Arsanın sahibi, oraya büyük bir bina yaptıracaktı. Uğruna savaştıkları Grund da yok olacaktı. Boka hayatın bazen ne kadar zor olduğunu o gün anladı. Ama Nemeçek'in cesaretini, sadakatini ve arkadaşlığın değerini hiçbir zaman unutmadı.",
      "Pal Sokağı Çocukları yüz yılı aşkın süredir dünyanın dört bir yanında okunuyor. Okurlar küçük Nemeçek'in cesaretini hiç unutmuyor. Hikâye bize, kimin büyük kimin küçük olduğunun değil, kimin yüreğinin büyük olduğunun önemli olduğunu öğretiyor."
    ],
    sorular: [
      ["Çocukların oyun alanına ne ad veriliyordu?", "Grund", ["Park", "Bahçe"]],
      ["Pal Sokağı Çocuklarının lideri kimdi?", "Boka", ["Nemeçek", "Feri Ats"]],
      ["Gruptaki tek \"er\" kimdi?", "Nemeçek", ["Boka", "Çonakoş"]],
      ["Nemeçek neden hastalandı?", "Soğuk göletin suyunda ıslandığı için", ["Çok koştuğu için", "Kar yediği için"]],
      ["Boka, Nemeçek'e hangi rütbeyi verdi?", "Yüzbaşı", ["Er", "Kral"]],
      ["Bu hikâye en çok hangi değeri öne çıkarır?", "Arkadaşlık, sadakat ve cesaret", ["Zenginlik", "Hız"]]
    ] });

  ekle({ id: "k10", baslik: "Tom Sawyer ve Çit Boyama", resim: "🎨 🪵 😄", kaynak: "Mark Twain, Tom Sawyer'ın Maceraları (1876) — uyarlama",
    ders: "Bir işi oyuna çevirmek onu kolaylaştırır; ama zekâmızı başkalarını kandırmak için değil, iyilik için kullanmalıyız.",
    metin: [
      "Tom Sawyer, Mississippi Nehri kıyısındaki küçük bir kasabada Polly Teyzesiyle yaşayan yaramaz, zeki ve maceraperest bir çocuktu. Okuldan kaçmayı, nehirde yüzmeyi ve arkadaşlarıyla korsancılık oynamayı çok severdi. Polly Teyze onu çok sever ama yaramazlıklarına da çok kızardı.",
      "Bir cumartesi sabahı Polly Teyze, Tom'un bir gün önce okulu kırdığını öğrendi. Ceza olarak ona bütün gün bahçenin uzun tahta çitini beyaza boyamasını söyledi. Çit otuz metre uzunluğundaydı ve iki buçuk metre yüksekliğindeydi! Güneşli bir cumartesiyi boya fırçasıyla geçirmek Tom'a dünyanın en büyük cezası gibi geldi.",
      "Tom elinde boya kovası, çitin önünde dururken arkadaşlarının hep birlikte nehre yüzmeye gideceğini ve ona gülüp alay edeceklerini düşündü. Ceplerini karıştırdı: birkaç bilye, bir parça tebeşir ve kırık bir oyuncak. Bunlarla kimseye yardım ettiremezdi. Sonra aklına çok parlak bir fikir geldi.",
      "Tom önce Polly Teyze'nin yanında çalışan küçük Jim'i kandırmaya çalıştı. \"Su taşıma işini ben yapayım, sen çiti boya.\" dedi. Jim çok istekliydi ama tam o sırada Polly Teyze terliğiyle göründü ve Jim kovayı kapıp kaçtı. Tom yeniden çitin önünde, elinde fırçayla yapayalnız kaldı.",
      "Tom fırçayı aldı ve sanki dünyanın en eğlenceli işini yapıyormuş gibi büyük bir keyifle boyamaya başladı. Tam o sırada arkadaşı Ben, elinde bir elmayla ıslık çalarak geldi. \"Vah zavallı Tom! Biz yüzmeye gidiyoruz, sen burada çalışıyorsun.\" dedi.",
      "Tom ona bakmadı bile. Bir adım geri çekilip çiti bir ressam gibi inceledi, sonra fırçayı özenle bir kez daha sürdü. \"Çalışmak mı? Buna çalışmak mı diyorsun?\" dedi. \"Bir çocuğun her gün çit boyama şansı olur mu? Bu iş çok özel, herkes yapamaz.\" Ben elmasını yemeyi bıraktı ve dikkatle Tom'u izlemeye başladı.",
      "\"Tom, biraz da ben boyayabilir miyim?\" dedi Ben. Tom başını iki yana salladı: \"Olmaz. Polly Teyze bu çitin çok özenle boyanmasını istiyor. Bin çocuktan belki biri bunu doğru yapabilir.\" Ben yalvardı: \"Elmamın yarısını veririm!\" Tom biraz düşünür gibi yaptı ve sonunda, \"Peki, elmanın tamamını verirsen...\" dedi.",
      "Ben ter içinde boyarken Tom gölgede oturup elmasını yedi. Biraz sonra başka çocuklar geldi. Her biri de boyama sırası almak için Tom'a bir şey verdi: bir uçurtma, bir ölü fare ve onu sallamak için bir ip, on iki bilye, bir anahtar, bir parça cam, bir tek gözlü yavru kedi... Tom sabah fakir bir çocukken öğleden sonra zengin olmuştu!",
      "Gün boyunca çit boyama sırası almak için neredeyse kasabanın bütün çocukları sıraya girdi. Billy bir uçurtma verdi, Johnny ise bir ip ucuna bağlı ölü bir fare. Tom, \"Bu çocuklar ne kadar eğleniyor!\" diye düşünerek gölgede tembel tembel oturdu. Eğer boya bitmeseydi kasabadaki bütün çocukları iflas ettirebilirdi!",
      "Akşamüstü çit üç kat boyanmıştı ve pırıl pırıldı. Polly Teyze gelip baktığında gözlerine inanamadı. Tom'un bu kadar çalıştığına sevinerek onu ödüllendirdi ve ona en güzel elmayı verdi. Tom ise kendi kendine önemli bir şey keşfetmişti: Bir şeyi elde etmesi zor gösterilirse insanlar onu daha çok istiyordu.",
      "Ama o akşam yatağında yatarken Tom biraz düşündü. Arkadaşları bütün günlerini onun cezası için harcamış, üstelik en sevdikleri oyuncakları da ona vermişlerdi. Tom'un zekâsı işe yaramıştı ama bu doğru muydu? Ertesi gün bilyeleri ve uçurtmayı sahiplerine geri verdi ve onları nehre yüzmeye davet etti.",
      "Tom Sawyer'ın daha nice macerası oldu: Mağarada kayboldu, bir hazine buldu, arkadaşı Huck ile korsan oldu. Ama çit boyama günü hiç unutulmadı. Tom o gün iki şey öğrenmişti: Bir işi oyuna çevirmek onu kolaylaştırır. Ama zekâ, başkalarını kandırmak için değil, birlikte daha iyi şeyler yapmak için kullanılınca güzeldir.",
      "Mark Twain, Tom Sawyer'ın maceralarını kendi çocukluğunun geçtiği nehir kasabasından esinlenerek yazmıştır. Çit boyama sahnesi, edebiyat tarihinin en sevilen ve en çok anlatılan sahnelerinden biridir. Bugün bile insanlara, bir işi zevkli hâle getirmenin onu ne kadar kolaylaştırdığını hatırlatır."
    ],
    sorular: [
      ["Tom'a neden çit boyama cezası verildi?", "Okulu kırdığı için", ["Yemeğini yemediği için", "Kediyi kaçırdığı için"]],
      ["Tom arkadaşlarını nasıl çit boyamaya ikna etti?", "İşi çok eğlenceli ve özel gibi göstererek", ["Onlara para vererek", "Onları korkutarak"]],
      ["Ben boyama sırası için Tom'a ne verdi?", "Elmasını", ["Bisikletini", "Kitabını"]],
      ["Tom'un keşfettiği şey neydi?", "Elde etmesi zor görünen şeyi insanlar daha çok ister", ["Boya çabuk kurur", "Çitler beyaz olmalıdır"]],
      ["Tom ertesi gün ne yaptı?", "Arkadaşlarının eşyalarını geri verdi", ["Çiti yeniden boyadı", "Evden kaçtı"]],
      ["Hikâyenin ana fikri hangisidir?", "Zekâ başkalarını kandırmak için değil, iyilik için kullanılmalı", ["Çit boyamak zordur", "Elma en güzel meyvedir"]]
    ] });
})();
