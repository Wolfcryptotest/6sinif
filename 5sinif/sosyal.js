window.ICERIK = window.ICERIK || {};
// 5. sınıf Sosyal Bilgiler - Maarif Modeli 6 öğrenme alanı
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.sosyal = {
  ad: "Sosyal Bilgiler", ikon: "🌍", renk: "#f59e0b",
  uniteler: [
    {
      id: "s1", ad: "Birlikte Yaşamak",
      konular: [
        {
          id: "s1k1", ad: "Gruplar ve Rollerimiz", video: "YZmEZR2weu0",
          ozet: ["Grup: ortak amaç için bir araya gelen insanlar (aile, sınıf, takım, kulüp).", "Rol: bir grupta üstlendiğimiz görev (evde çocuk, okulda öğrenci, takımda kaptan).", "Her rolün hakları ve sorumlulukları vardır.", "Aynı anda birden fazla grupta farklı rollerimiz olabilir."],
          anlatim: [
            "İnsanlar ortak bir amaç ya da ilgi etrafında bir araya gelerek grupları oluşturur. Ailemiz, sınıfımız, okul takımımız, izci grubumuz ve mahallemiz dâhil olduğumuz gruplardır.",
            "Bir grup içinde üstlendiğimiz görevlere rol denir. Örneğin evde çocuk ve kardeş, okulda öğrenci ve sınıf başkanı, futbol takımında kaleci olabiliriz. Aynı kişi farklı gruplarda farklı roller üstlenir.",
            "Her rolün hakları ve sorumlulukları vardır. Öğrenci olarak eğitim alma hakkımız, derslere hazırlıklı gelme sorumluluğumuz vardır. Kardeş olarak sevgi görme hakkımız, kardeşimize yardım etme sorumluluğumuz vardır.",
            "Rollerimizi doğru yerine getirdiğimizde grup içinde uyum artar, birlikte yaşamak kolaylaşır."
          ],
          sorular: [
            S("Hangisi bir rol değildir?", ["Mahalle", "Sınıf başkanı", "Abla", "Kaleci"], "Mahalle bir gruptur/yerdir, rol değildir."),
            S("Elif evde abla, okulda öğrenci, voleybol takımında kaptandır. Bu durum neyi gösterir?", ["Bir kişinin farklı gruplarda farklı rolleri olabileceğini", "Her grubun bir lideri olduğunu", "Rollerin hiç değişmediğini", "Herkesin aynı role sahip olduğunu"], "Bir kişi birden çok grupta farklı roller üstlenir."),
            S("Öğrenci rolünün sorumluluklarından biri hangisidir?", ["Ödevlerini zamanında yapmak", "Okul müdürünü seçmek", "Ders programını hazırlamak", "Maaş almak"], "Ödevleri yapmak öğrencinin sorumluluğudur.")
          ]
        },
        {
          id: "s1k2", ad: "Kültürel Zenginlikler ve Birlikte Yaşama", video: "CwhxfuF6xOo",
          ozet: ["Kültür: bir topluluğun dil, din, gelenek, yemek, giyim, müzik gibi maddi ve manevi değerleri.", "Ülkemizde farklı yörelerin farklı kültürel özellikleri vardır.", "Farklılıklara saygı birlikte yaşamayı güçlendirir.", "Ortak değerlerimiz: bayramlar, millî değerler, misafirperverlik, yardımlaşma."],
          anlatim: [
            "Bir toplumun yaşayış biçimi, dili, inançları, gelenekleri, yemekleri, kıyafetleri, müziği ve sanatı o toplumun kültürünü oluşturur. Kültür nesilden nesile aktarılır.",
            "Ülkemizin her yöresinin kendine özgü kültürel özellikleri vardır: Karadeniz'de horon, Ege'de zeybek oynanır; Gaziantep baklavası, Kayseri mantısı, Erzurum cağ kebabı yöresel lezzetlerimizdendir.",
            "Farklı kültürlere sahip insanlarla bir arada yaşarken onların özelliklerine saygı göstermeliyiz. Saygı, hoşgörü ve empati toplumsal barışı güçlendirir.",
            "Bayramlarımız, millî günlerimiz, misafirperverlik ve yardımlaşma gibi ortak değerlerimiz bizi birbirimize bağlar; farklılıklarımız ise kültürümüzü zenginleştirir."
          ],
          sorular: [
            S("Hangisi kültürün ögelerinden biri değildir?", ["İklim", "Dil", "Gelenekler", "Yemekler"], "İklim doğal bir özelliktir, kültür ögesi değildir."),
            S("Farklı kültürlere sahip insanlarla birlikte yaşamayı kolaylaştıran davranış hangisidir?", ["Farklılıklara saygı göstermek", "Herkesin aynı kıyafeti giymesini istemek", "Yöresel yemekleri küçümsemek", "Farklı şiveyle konuşanlarla alay etmek"], "Saygı ve hoşgörü birlikte yaşamayı güçlendirir.")
          ]
        },
        {
          id: "s1k3", ad: "Yardımlaşma ve Dayanışma", video: "z625rrVC7JE",
          ozet: ["Yardımlaşma: ihtiyaç sahiplerine maddi-manevi destek olmak.", "Dayanışma: zor zamanlarda birlik olup birbirine destek vermek.", "Geleneklerimiz: imece, ödünç verme, askıda ekmek, mahalle iftarları.", "Kurumlar ve STK'lar: Kızılay, AFAD, TEMA, LÖSEV, Yeşilay, Türkiye Diyanet Vakfı.", "STK: sivil toplum kuruluşu, gönüllülük esasına dayanır."],
          anlatim: [
            "İnsanların zor durumdaki kişilere destek olmasına yardımlaşma, ortak bir amaç için birlikte hareket etmesine dayanışma denir. Bu davranışlar toplumsal birliği güçlendirir.",
            "Kültürümüzde yardımlaşmanın pek çok güzel örneği vardır: Köylerde bir işin hep birlikte yapılmasına imece denir. Fırınlarda 'askıda ekmek', düğünlerde takı takmak, hastayı ziyaret etmek de yardımlaşma geleneklerimizdendir.",
            "Afet ve savaş gibi zor zamanlarda Kızılay ve AFAD ihtiyaç sahiplerine yardım ulaştırır. TEMA doğayı korur, LÖSEV lösemili çocuklara destek olur, Yeşilay bağımlılıkla mücadele eder.",
            "Gönüllü insanların bir araya gelerek kurduğu, devlete bağlı olmayan kuruluşlara sivil toplum kuruluşu (STK) denir. Bizler de kermes düzenleyerek, kitap bağışlayarak, kampanyalara katılarak dayanışmaya katkı sağlayabiliriz."
          ],
          sorular: [
            S("Köyde bir işin herkesin katılımıyla birlikte yapılmasına ne ad verilir?", ["İmece", "Kermes", "Bayram", "Hasat"], "İmece köylerdeki yardımlaşma geleneğidir."),
            S("Doğal afetlerden sonra arama kurtarma ve koordinasyon çalışmalarını yürüten kurum hangisidir?", ["AFAD", "TEMA", "LÖSEV", "Yeşilay"], "AFAD: Afet ve Acil Durum Yönetimi Başkanlığı."),
            S("Erozyonla mücadele eden ve ağaçlandırma yapan sivil toplum kuruluşu hangisidir?", ["TEMA", "Kızılay", "Yeşilay", "LÖSEV"], "TEMA Vakfı toprak ve doğayı korur.")
          ]
        }
      ]
    },
    {
      id: "s2", ad: "Evimiz Dünya",
      konular: [
        {
          id: "s2k1", ad: "Yaşadığımız İlin Konumu ve Çevresi", video: "p5D4hAVhAS0",
          ozet: ["Göreceli konum: bir yerin çevresindeki yerlere göre tarif edilmesi (Gaziantep, Kilis'in kuzeyindedir).", "Ana yönler: kuzey, güney, doğu, batı; ara yönler: kuzeydoğu, kuzeybatı, güneydoğu, güneybatı.", "Doğal çevre: dağ, ova, akarsu, göl, bitki örtüsü, iklim.", "Beşerî çevre: insanların oluşturduğu yollar, binalar, barajlar, fabrikalar.", "İnsanlar doğal çevreyi değiştirir; bu değişimin olumlu ve olumsuz sonuçları vardır."],
          anlatim: [
            "Bir yerin konumunu çevresindeki yerlere göre tarif etmeye göreceli konum denir: 'Ankara, İstanbul'un doğusundadır.' 'Okulumuz parkın karşısındadır.' Göreceli konumu belirtirken ana ve ara yönleri kullanırız.",
            "Yaşadığımız ilin komşu illeri, denizlere ya da önemli yollara yakınlığı ilin ekonomisini ve günlük hayatı etkiler. Kıyıda kurulan iller balıkçılık ve turizmde, verimli ovalardaki iller tarımda gelişir.",
            "Dağlar, ovalar, akarsular, göller, ormanlar ve iklim doğal çevreyi oluşturur. İnsanların doğal çevreye yaptığı yollar, köprüler, binalar, barajlar, tarlalar ve fabrikalar ise beşerî çevredir.",
            "İnsanlar ihtiyaçları için doğal çevreyi değiştirir. Baraj yapılması elektrik üretimi ve sulama sağlar (olumlu) ama bazı köylerin su altında kalmasına yol açabilir (olumsuz). Ormanların kesilip yerine bina yapılması ise erozyon ve hava kirliliğine neden olabilir."
          ],
          sorular: [
            S("Hangisi beşerî çevre ögesidir?", ["Baraj", "Dağ", "Göl", "Orman"], "Barajı insanlar yapmıştır."),
            S("\"Okulumuz, caminin batısında ve parkın güneyindedir.\" ifadesinde ne anlatılmıştır?", ["Göreceli konum", "İklim", "Nüfus", "Ekonomik faaliyet"], "Bir yer, çevresindeki yerlere göre tarif edilmiştir."),
            S("Kuzey ile doğu arasındaki ara yön hangisidir?", ["Kuzeydoğu", "Kuzeybatı", "Güneydoğu", "Güneybatı"], "Kuzey + doğu = kuzeydoğu.")
          ]
        },
        {
          id: "s2k2", ad: "Afetler ve Afet Bilinci", video: "yLFqNYWPnkg",
          ozet: ["Doğal afetler: deprem, sel, heyelan, çığ, orman yangını, kuraklık.", "Türkiye bir deprem ülkesidir; önlem şarttır.", "Deprem anında: Çök – Kapan – Tutun. Asansör ve merdiven kullanılmaz.", "Afet çantası: su, konserve, el feneri, pil, düdük, ilk yardım malzemesi, kimlik fotokopisi.", "Acil durumlarda 112 Acil Çağrı Merkezi aranır; afet yönetimini AFAD yürütür."],
          anlatim: [
            "Doğadan kaynaklanan ve insanların hayatını, malını olumsuz etkileyen olaylara doğal afet denir. Ülkemizde en çok deprem, sel, heyelan, çığ ve orman yangınları görülür.",
            "Türkiye'nin büyük bölümü deprem kuşağındadır. Depreme dayanıklı binalar yapmak, eşyaları duvara sabitlemek, aile afet planı hazırlamak ve afet çantası bulundurmak hayat kurtarır.",
            "Deprem anında sakin olmalı, Çök – Kapan – Tutun hareketini yapmalıyız. Pencerelerden ve devrilebilecek eşyalardan uzak durmalı, asansör ve merdiven kullanmamalıyız. Sarsıntı bitince güvenli şekilde toplanma alanına gitmeliyiz.",
            "Afet çantasında su, uzun süre bozulmayan yiyecekler, el feneri, yedek pil, düdük, ilk yardım malzemeleri, kimlik fotokopileri ve gerekli ilaçlar bulunmalıdır. Acil durumlarda 112 Acil Çağrı Merkezi aranır."
          ],
          sorular: [
            S("Deprem anında yapılması gereken doğru davranış hangisidir?", ["Çök – Kapan – Tutun hareketini yapmak", "Asansörle aşağı inmek", "Pencereye koşmak", "Merdivenlerden hızla inmek"], "Sarsıntı sırasında yerimizde güvenli pozisyon alırız."),
            S("Hangisi afet çantasında bulunmamalıdır?", ["Bozulabilen taze et", "Su", "El feneri", "Düdük"], "Çanta uzun süre bozulmayan yiyecekler içermelidir."),
            S("Ülkemizde acil durumlarda aranan tek numara hangisidir?", ["112", "155", "177", "110"], "112 Acil Çağrı Merkezi tüm acil durumlar içindir.")
          ]
        },
        {
          id: "s2k3", ad: "Ülkemize Komşu Devletler", video: "7TTq764AtcQ",
          ozet: ["Kara sınırı komşularımız (8): Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Nahçıvan (Azerbaycan), İran, Irak, Suriye.", "En uzun kara sınırımız Suriye ile, en kısa Nahçıvan ile.", "Batı: Yunanistan, Bulgaristan · Kuzeydoğu: Gürcistan · Doğu: Ermenistan, Nahçıvan, İran · Güneydoğu: Irak · Güney: Suriye", "Komşularla ticaret, turizm ve kültürel ilişkilerimiz vardır."],
          anlatim: [
            "Türkiye'nin kara sınırı bulunan sekiz komşusu vardır. Batıda Yunanistan ve Bulgaristan; kuzeydoğuda Gürcistan; doğuda Ermenistan, Azerbaycan'a bağlı Nahçıvan Özerk Cumhuriyeti ve İran; güneydoğuda Irak; güneyde Suriye bulunur.",
            "En uzun kara sınırımız Suriye ile (yaklaşık 900 km), en kısa sınırımız Nahçıvan ile (yaklaşık 11 km)'dir.",
            "Komşularımızla tarihî ve kültürel bağlarımız vardır. Azerbaycan ile aynı soydan gelir ve benzer bir dil konuşuruz. Gürcistan, İran ve Irak ile yoğun ticaret yapılır; sınır kapılarından her gün binlerce kişi ve tır geçer.",
            "Denizlerle çevrili olduğumuz için deniz komşularımız da vardır: Karadeniz'de Rusya ve Ukrayna, Akdeniz'de Kıbrıs ve Mısır gibi ülkelerle denizden komşuyuz."
          ],
          sorular: [
            S("Türkiye'nin en uzun kara sınırı hangi ülkeyledir?", ["Suriye", "İran", "Irak", "Yunanistan"], "Suriye sınırı yaklaşık 900 km'dir."),
            S("Hangisi Türkiye'nin kara sınırı komşusu değildir?", ["Rusya", "Gürcistan", "Bulgaristan", "İran"], "Rusya ile kara sınırımız yoktur."),
            S("Türkiye'nin batısındaki kara komşuları hangileridir?", ["Yunanistan ve Bulgaristan", "Irak ve Suriye", "Gürcistan ve Ermenistan", "İran ve Nahçıvan"], "Batıda Yunanistan ve Bulgaristan vardır.")
          ]
        }
      ]
    },
    {
      id: "s3", ad: "Ortak Mirasımız",
      konular: [
        {
          id: "s3k1", ad: "Ortak Kültürel Miras", video: "X-GhfCtJTZg",
          ozet: ["Kültürel miras: geçmişten günümüze ulaşan ve geleceğe aktarılması gereken değerler.", "Somut miras: dokunulabilen eserler (cami, köprü, kervansaray, Göbeklitepe, Efes).", "Somut olmayan miras: gelenekler, el sanatları, müzik, oyunlar (Karagöz, ebru, Nevruz, kahve kültürü).", "UNESCO: dünya mirasını koruma listeleri hazırlar.", "Mirası korumak hepimizin görevidir."],
          anlatim: [
            "Atalarımızdan bize kalan ve gelecek nesillere aktarılması gereken maddi ve manevi değerlere kültürel miras denir. Bu miras bizim kimliğimizin bir parçasıdır.",
            "Dokunabildiğimiz, gözle görebildiğimiz eserler somut kültürel mirastır: camiler, köprüler, kaleler, kervansaraylar, antik kentler. Göbeklitepe, Efes, Safranbolu ve Kapadokya bunlara örnektir.",
            "Gelenekler, bayramlar, el sanatları, halk oyunları, masallar ve müzik ise somut olmayan kültürel mirastır. Karagöz ve Hacivat, ebru sanatı, Türk kahvesi kültürü ve Nevruz UNESCO listesinde yer alır.",
            "UNESCO (Birleşmiş Milletler Eğitim, Bilim ve Kültür Örgütü) dünya mirasını korumak için listeler hazırlar. Tarihî eserlere zarar vermemek, el sanatlarını öğrenmek ve yaşatmak ortak mirasımızı korumanın yollarıdır."
          ],
          sorular: [
            S("Hangisi somut olmayan kültürel mirasa örnektir?", ["Ebru sanatı", "Selimiye Camii", "Efes Antik Kenti", "Galata Kulesi"], "Ebru bir el sanatıdır, dokunulabilen bir yapı değildir."),
            S("Dünya mirasını korumak için listeler hazırlayan kuruluş hangisidir?", ["UNESCO", "AFAD", "Kızılay", "TEMA"], "UNESCO kültürel mirası korur."),
            S("Hangisi somut kültürel mirasa örnektir?", ["Göbeklitepe", "Nevruz", "Karagöz", "Halk oyunları"], "Göbeklitepe görülebilen, dokunulabilen bir eserdir.")
          ]
        },
        {
          id: "s3k2", ad: "Anadolu'nun İlk Yerleşim Yerleri", video: "I85hqBOd5LU",
          ozet: ["Avcı-toplayıcı toplumlar: göçebe, mağaralarda yaşar, avlanır ve bitki toplar.", "Yerleşik hayat: tarımın başlamasıyla kalıcı köyler kuruldu.", "Göbeklitepe (Şanlıurfa): bilinen en eski tapınak alanı (yaklaşık 12 000 yıl).", "Çatalhöyük (Konya): evlere damdan girilir, sokak yoktur.", "Çayönü (Diyarbakır), Hacılar (Burdur): ilk köy yerleşimlerinden."],
          anlatim: [
            "İlk insanlar yiyeceklerini avlanarak ve doğadan bitki toplayarak elde ederdi. Bu toplumlara avcı-toplayıcı toplum denir. Yiyecek peşinde göç eder, mağaralarda ya da geçici barınaklarda yaşarlardı.",
            "İnsanlar tarım yapmayı ve hayvanları evcilleştirmeyi öğrenince bir yere yerleşip köyler kurdular. Bu yerleşik hayata geçişle birlikte toprağı işlemek için yeni aletler yapıldı, çanak çömlek üretildi.",
            "Anadolu, dünyanın en eski yerleşim yerlerine ev sahipliği yapar. Şanlıurfa'daki Göbeklitepe yaklaşık 12 000 yıllık olup bilinen en eski tapınak alanıdır. Konya'daki Çatalhöyük'te evler bitişik yapılmış, evlere damlardaki deliklerden merdivenle girilmiştir.",
            "Diyarbakır'daki Çayönü ve Burdur'daki Hacılar da ilk köy yerleşimlerindendir. Bu alanlarda bulunan eserler bize ilk insanların sosyal hayatı, inançları ve sanatı hakkında bilgi verir."
          ],
          sorular: [
            S("Evlere damdaki deliklerden merdivenle girildiği yerleşim yeri hangisidir?", ["Çatalhöyük", "Göbeklitepe", "Efes", "Truva"], "Çatalhöyük'te sokak yoktu, evler bitişikti."),
            S("Yerleşik hayata geçilmesinde en etkili gelişme hangisidir?", ["Tarımın başlaması", "Yazının bulunması", "Paranın kullanılması", "Tekerleğin icadı"], "Tarım, insanları toprağa bağladı."),
            S("Bilinen en eski tapınak alanı olarak kabul edilen yer hangisidir?", ["Göbeklitepe", "Çayönü", "Hacılar", "Çatalhöyük"], "Şanlıurfa'daki Göbeklitepe yaklaşık 12 000 yıllıktır.")
          ]
        },
        {
          id: "s3k3", ad: "Mezopotamya ve Anadolu Medeniyetleri", video: "QZTi2mBcsmw",
          ozet: ["Mezopotamya: Dicle ile Fırat arasındaki verimli topraklar.", "Sümerler: yazıyı buldu (çivi yazısı), tekerleği kullandı, ziggurat yaptı.", "Babiller: Hammurabi Kanunları (yazılı kanunlar).", "Hititler: Kadeş Antlaşması (bilinen ilk yazılı antlaşma), başkent Hattuşa.", "Lidyalılar: parayı ilk kullandı, Kral Yolu. Urartular: su kanalları ve barajlar."],
          anlatim: [
            "Dicle ve Fırat nehirleri arasındaki verimli topraklara Mezopotamya denir. Burada kurulan Sümerler, MÖ 3200 civarında çivi yazısını bularak tarihi başlattı. Sümerler tekerleği kullandı, zigurat adı verilen tapınaklar yaptı, matematik ve astronomide ilerledi.",
            "Babilliler, Hammurabi Kanunları ile yazılı kanunları ilk düzenleyenler arasında yer aldı. Asurlular ticarette gelişti ve Anadolu'ya yazıyı getirdi.",
            "Anadolu'da kurulan Hititlerin başkenti Hattuşa (Çorum)'dır. Mısırlılarla yaptıkları Kadeş Antlaşması bilinen ilk yazılı barış antlaşmasıdır. Lidyalılar parayı ilk kullanan toplumdur ve Kral Yolu ile ticareti geliştirmişlerdir.",
            "Urartular Doğu Anadolu'da su kanalları ve barajlar yapmış, maden işlemeciliğinde ilerlemiştir. Frigler tarımı ve dokumacılığı geliştirmiş, İyonlar ise bilim ve felsefede önemli düşünürler yetiştirmiştir. Bu medeniyetlerin katkıları bugün de hayatımızı etkiler."
          ],
          sorular: [
            S("Yazıyı ilk kullanan medeniyet hangisidir?", ["Sümerler", "Hititler", "Lidyalılar", "Urartular"], "Sümerler çivi yazısını buldu."),
            S("Parayı ilk kullanan medeniyet hangisidir?", ["Lidyalılar", "Sümerler", "Frigler", "Babiller"], "Lidyalılar ticareti kolaylaştırmak için parayı kullandı."),
            S("Bilinen ilk yazılı antlaşma olan Kadeş Antlaşması'nı yapan Anadolu medeniyeti hangisidir?", ["Hititler", "Urartular", "İyonlar", "Lidyalılar"], "Hititler ile Mısırlılar arasında yapıldı.")
          ]
        }
      ]
    },
    {
      id: "s4", ad: "Yaşayan Demokrasimiz",
      konular: [
        {
          id: "s4k1", ad: "Demokrasi ve Cumhuriyet", video: "dxzY505hABQ",
          ozet: ["Demokrasi: halkın kendi kendini yönetmesi; seçim, eşitlik, özgürlük.", "Cumhuriyet: millet egemenliğine dayanan, yöneticilerin seçimle belirlendiği yönetim.", "Cumhuriyet 29 Ekim 1923'te ilan edildi.", "Millî egemenlik: yönetme yetkisinin millete ait olması. 'Egemenlik kayıtsız şartsız milletindir.'", "Demokrasinin ilkeleri: seçim, eşitlik, hukukun üstünlüğü, çoğulculuk, katılım."],
          anlatim: [
            "Demokrasi, halkın yönetime katıldığı ve yöneticilerini seçimle belirlediği yönetim anlayışıdır. Demokraside herkes eşittir, düşüncelerini özgürce söyleyebilir ve kararlar çoğunluğun oyuyla alınırken azınlığın hakları korunur.",
            "Cumhuriyet ise millet egemenliğine dayanan ve devlet başkanının seçimle belirlendiği yönetim biçimidir. Türkiye Cumhuriyeti 29 Ekim 1923'te Mustafa Kemal Atatürk önderliğinde ilan edilmiştir.",
            "Millî egemenlik, yönetme yetkisinin millete ait olmasıdır. TBMM'nin 23 Nisan 1920'de açılmasıyla millî egemenlik hayata geçmiştir. Meclisimizde 'Egemenlik kayıtsız şartsız milletindir.' sözü yazılıdır.",
            "Demokrasi ile cumhuriyet birbirini tamamlar. Demokrasinin temel ilkeleri seçimlerin serbest ve gizli olması, eşitlik, hukukun üstünlüğü, farklı görüşlere saygı (çoğulculuk) ve vatandaşların yönetime katılımıdır."
          ],
          sorular: [
            S("Cumhuriyet hangi tarihte ilan edilmiştir?", ["29 Ekim 1923", "23 Nisan 1920", "19 Mayıs 1919", "30 Ağustos 1922"], "Cumhuriyet 29 Ekim 1923'te ilan edildi."),
            S("\"Egemenlik kayıtsız şartsız milletindir.\" sözü hangi ilkeyi ifade eder?", ["Millî egemenlik", "Laiklik", "Halkçılık", "Devletçilik"], "Yönetme yetkisi millete aittir."),
            S("Hangisi demokrasinin temel ilkelerinden biri değildir?", ["Yöneticilerin seçimle değil miras yoluyla belirlenmesi", "Seçimlerin gizli yapılması", "Kanun önünde eşitlik", "Farklı görüşlere saygı"], "Demokraside yöneticiler seçimle belirlenir.")
          ]
        },
        {
          id: "s4k2", ad: "Etkin Vatandaşlık, Haklar ve Sorumluluklar", video: "GjJh0hSc-eo",
          ozet: ["Etkin vatandaş: haklarını bilen, sorumluluklarını yerine getiren, topluma katkı sağlayan kişi.", "Temel haklar: yaşama, eğitim, sağlık, düşünce ve ifade özgürlüğü, kişi güvenliği.", "Çocuk hakları: oyun oynama, korunma, eğitim, katılım (BM Çocuk Hakları Sözleşmesi).", "Sorumluluklar: kurallara uymak, vergi vermek, çevreyi korumak, oy kullanmak.", "Başvurulacak kurumlar: muhtarlık, belediye, valilik, kaymakamlık, CİMER, 112."],
          anlatim: [
            "Haklarını bilen ve kullanan, sorumluluklarını yerine getiren, toplumun sorunlarına duyarlı olup çözüm için harekete geçen kişiye etkin vatandaş denir.",
            "Herkesin doğuştan sahip olduğu yaşama hakkı, eğitim hakkı, sağlık hakkı, düşünce ve ifade özgürlüğü gibi haklar temel haklardır. Çocukların da oyun oynama, korunma, eğitim alma ve kendilerini ilgilendiren konularda fikrini söyleme hakları vardır.",
            "Haklarımızın yanında sorumluluklarımız da vardır: Kurallara ve kanunlara uymak, kamu malını korumak, çevreyi temiz tutmak, büyüdüğümüzde vergi vermek ve oy kullanmak bunlardandır. Bir hakkımızı kullanırken başkalarının haklarına zarar vermemeliyiz.",
            "Bir sorunla karşılaştığımızda ilgili kurumlara başvurabiliriz: Mahalle sorunları için muhtarlık, yol ve çöp sorunları için belediye, ilçe ve il sorunları için kaymakamlık ve valilik. Dilek ve şikâyetlerimizi CİMER aracılığıyla devlete iletebiliriz."
          ],
          sorular: [
            S("Mahallede bozulan sokak lambası için öncelikle hangi kuruma başvurulmalıdır?", ["Belediye veya muhtarlık", "Hastane", "Okul müdürlüğü", "Kızılay"], "Mahalle hizmetleri belediye ve muhtarlıkla ilgilidir."),
            S("Hangisi bir sorumluluktur?", ["Kamu malını korumak", "Eğitim almak", "Oyun oynamak", "Sağlık hizmeti almak"], "Diğerleri haktır."),
            S("Hangisi etkin vatandaşın özelliklerinden biri değildir?", ["Toplumun sorunlarına ilgisiz kalmak", "Haklarını bilmek", "Sorumluluklarını yerine getirmek", "Çözüm önerileri sunmak"], "Etkin vatandaş topluma duyarlıdır.")
          ]
        }
      ]
    },
    {
      id: "s5", ad: "Hayatımızdaki Ekonomi",
      konular: [
        {
          id: "s5k1", ad: "Kaynakların Verimli Kullanımı ve Bütçe", video: "_IBn-EwvF2c",
          ozet: ["Kaynaklar sınırlıdır; ihtiyaçlar sınırsızdır.", "İhtiyaç: yaşamak için gerekli (beslenme, barınma). İstek: gerekli olmayan arzu (oyun konsolu).", "Bütçe: gelir ve giderlerin planlanması.", "Gelir > gider → tasarruf · Gider > gelir → borç.", "Bilinçli tüketici: ihtiyacı kadar alır, fiyat-kalite karşılaştırır, israf etmez."],
          anlatim: [
            "Su, enerji, toprak, orman ve para gibi kaynaklar sınırlıdır; insanların ihtiyaç ve istekleri ise sınırsızdır. Bu yüzden kaynakları verimli kullanmalı ve israf etmemeliyiz.",
            "Yaşamımızı sürdürmek için mutlaka karşılamamız gerekenler ihtiyaçtır: beslenme, barınma, giyinme, sağlık ve eğitim. Olmasa da yaşayabileceğimiz, sahip olmak istediğimiz şeyler ise istektir: yeni bir oyun konsolu, markalı ayakkabı gibi. Önce ihtiyaçlarımızı karşılamalıyız.",
            "Belirli bir süre için gelir ve giderlerin önceden planlanmasına bütçe denir. Harçlığımızla küçük bir bütçe yapabiliriz. Gelirimiz giderimizden fazlaysa kalan parayı biriktiririz; buna tasarruf denir. Giderler gelirden fazlaysa borç oluşur.",
            "Kaynakları verimli kullanmak doğayı ve gelecek nesilleri korur. Musluğu açık bırakmamak, gereksiz ışıkları söndürmek, yiyecek israf etmemek hem aile bütçemize hem ülke ekonomisine katkı sağlar."
          ],
          sorular: [
            S("Hangisi bir ihtiyaçtır?", ["Barınma", "Akıllı saat", "Oyun konsolu", "Üçüncü bir spor ayakkabı"], "Barınma yaşamak için gereklidir."),
            S("Haftalık harçlığı 300 TL olan Can, 220 TL harcadı. Can ne kadar tasarruf etmiştir?", ["80 TL", "220 TL", "520 TL", "300 TL"], "300 − 220 = 80 TL."),
            S("Gelir ve giderlerin önceden planlanmasına ne denir?", ["Bütçe", "Vergi", "Borç", "Faiz"], "Bütçe, gelir-gider planıdır.")
          ]
        },
        {
          id: "s5k2", ad: "Yaşadığımız İldeki Ekonomik Faaliyetler", video: "_IBn-EwvF2c",
          ozet: ["Ekonomik faaliyet: ihtiyaçları karşılamak için yapılan üretim, dağıtım, tüketim etkinlikleri.", "Tarım, hayvancılık, ormancılık, balıkçılık, madencilik, sanayi, ticaret, turizm.", "Bir ilin ekonomik faaliyetlerini iklim, yer şekilleri ve kaynaklar belirler.", "Örnekler: Rize → çay, Gaziantep → fıstık ve sanayi, Antalya → turizm, Zonguldak → kömür."],
          anlatim: [
            "İnsanların ihtiyaçlarını karşılamak ve gelir elde etmek için yaptıkları çalışmalara ekonomik faaliyet denir. Tarım, hayvancılık, balıkçılık, ormancılık, madencilik, sanayi, ticaret ve turizm başlıca ekonomik faaliyetlerdir.",
            "Bir ilde hangi ekonomik faaliyetlerin yapılacağını o ilin iklimi, yer şekilleri, toprak yapısı, yer altı kaynakları ve ulaşım imkânları belirler.",
            "Karadeniz'in yağışlı ikliminde Rize çay, Ordu fındık üretir. Akdeniz'in sıcak iklimi Antalya'yı turizm ve seracılık merkezi yapar. Zonguldak taş kömürü, Gaziantep Antep fıstığı ve sanayisiyle bilinir.",
            "Yaşadığımız ilin ekonomik faaliyetlerini tanımak meslek seçimimizi ve ilin gelişimini anlamamızı kolaylaştırır."
          ],
          sorular: [
            S("Çay tarımıyla öne çıkan il hangisidir?", ["Rize", "Konya", "Antalya", "Van"], "Rize'nin yağışlı iklimi çay tarımına uygundur."),
            S("Bir ilin ekonomik faaliyetlerini belirleyen etkenlerden biri değildir?", ["İl plakasının numarası", "İklim", "Yer şekilleri", "Yer altı kaynakları"], "Plaka numarası ekonomiyi etkilemez."),
            S("Antalya'da en çok gelişmiş ekonomik faaliyet hangisidir?", ["Turizm", "Kömür madenciliği", "Çay tarımı", "Çığ önleme"], "Antalya ülkemizin turizm merkezlerindendir.")
          ]
        }
      ]
    },
    {
      id: "s6", ad: "Teknoloji ve Sosyal Bilimler",
      konular: [
        {
          id: "s6k1", ad: "Teknolojinin Etkileri ve Bilinçli Kullanım", video: "Ne5ryiu-uhg",
          ozet: ["Teknoloji hayatı kolaylaştırır: iletişim, ulaşım, sağlık, eğitim.", "Olumsuz etkiler: bağımlılık, hareketsizlik, göz ve duruş bozuklukları, siber zorbalık.", "Dijital ayak izi: internette bıraktığımız izler kalıcıdır.", "Güvenli internet: şifre paylaşmamak, tanımadıklarıyla konuşmamak, kişisel bilgi vermemek.", "E-ticaret: internetten alışveriş; aileyle birlikte ve güvenilir sitelerden yapılmalı."],
          anlatim: [
            "Bilimsel bilgilerin günlük hayatta kullanılmasıyla ortaya çıkan araç-gereçlere teknoloji denir. Telefon, bilgisayar, internet, tıbbi cihazlar ve hızlı trenler teknoloji sayesinde hayatımızı kolaylaştırır.",
            "Teknolojinin olumsuz etkileri de vardır. Ekran başında çok uzun kalmak bağımlılığa, hareketsizliğe, göz yorgunluğuna ve uyku sorunlarına yol açabilir. İnternette başkalarını rahatsız etmek ise siber zorbalıktır.",
            "İnternette paylaştığımız fotoğraflar, yorumlar ve ziyaret ettiğimiz sitelerin bıraktığı izlere dijital ayak izi denir. Bu izler silinse bile kalıcı olabilir; bu yüzden paylaşım yapmadan önce iyi düşünmeliyiz.",
            "Güvenli internet için şifrelerimizi kimseyle paylaşmamalı, tanımadığımız kişilere kişisel bilgilerimizi vermemeli, şüpheli bağlantılara tıklamamalıyız. İnternetten alışveriş (e-ticaret) yaparken mutlaka ailemizle birlikte ve güvenilir siteleri kullanmalıyız."
          ],
          sorular: [
            S("İnternette paylaştığımız içeriklerin bıraktığı izlere ne denir?", ["Dijital ayak izi", "E-ticaret", "Telif hakkı", "Patent"], "Paylaşımlarımız dijital ayak izimizi oluşturur."),
            S("Hangisi güvenli internet kullanımına uygun değildir?", ["Şifresini en yakın arkadaşıyla paylaşmak", "Tanımadığı kişilere adresini vermemek", "Şüpheli bağlantılara tıklamamak", "Ekran süresini sınırlamak"], "Şifre kimseyle paylaşılmamalıdır."),
            S("Hangisi teknolojinin olumsuz etkilerinden biridir?", ["Hareketsizlik ve bağımlılık", "Uzaktaki yakınlarla görüşebilmek", "Hastalıkların daha kolay teşhisi", "Bilgiye hızlı ulaşmak"], "Aşırı kullanım sağlığa zarar verir.")
          ]
        }
      ]
    }
  ]
};
})();
