window.ICERIK = window.ICERIK || {};
// 6. sınıf Sosyal Bilgiler - Maarif Modeli ünite sırası
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.sosyal = {
  ad: "Sosyal Bilgiler", ikon: "🌍", renk: "#f59e0b",
  uniteler: [
    {
      id: "s1", ad: "Birlikte Yaşamak",
      konular: [
        {
          id: "s1k1", ad: "Gruplar ve Roller",
          ozet: ["Her insan birçok gruba üyedir: aile, okul, sınıf, takım, mahalle.", "Rol: bir grupta üstlendiğimiz görev (öğrenci, kardeş, kaptan).", "Her rolün hak ve sorumlulukları vardır.", "Gruplar ve roller zamanla değişir.", "Bazı rollere doğuştan sahip oluruz (evlat, kardeş), bazılarını sonradan ediniriz (öğrenci, sınıf başkanı)."],
          anlatim: [
            "İnsanlar hayatları boyunca pek çok gruba katılır. Aile, okul, sınıf, mahalle, spor takımı, izcilik kulübü birer gruptur. Bir grubun üyeleri ortak bir amaç ya da bağla bir araya gelir.",
            "Her grupta üstlendiğimiz görevlere rol denir. Evde evlat ve kardeşiz, okulda öğrenciyiz, takımda oyuncu ya da kaptanız. Rollerimizin bize kazandırdığı haklar ve yüklediği sorumluluklar vardır. Örneğin öğrenci olarak eğitim alma hakkımız, derslere hazırlıklı gelme sorumluluğumuz vardır.",
            "Bazı rollere doğuştan sahip oluruz: evlat, torun, kardeş. Bazı rolleri ise sonradan ediniriz: öğrenci, sınıf başkanı, kulüp üyesi.",
            "Gruplar ve roller zamanla değişir. Bebekken sadece ailemizin bir üyesiyken okula başlayınca öğrenci olduk. Gelecekte üniversite öğrencisi, bir mesleğin çalışanı, anne-baba, seçmen gibi yeni rollerimiz olacak."
          ],
          video: "1Z97Et3ZaFk",
          sorular: [
            S("Hangisi doğuştan sahip olunan bir roldür?", ["Kardeş", "Sınıf başkanı", "Öğrenci", "Takım kaptanı"], "Kardeş olmak doğuştan gelen bir roldür; diğerleri sonradan edinilir."),
            S("Hangisi bir öğrencinin sorumluluklarından biridir?", ["Derslere hazırlıklı gelmek", "Okul müdürünü seçmek", "Ders programını hazırlamak", "Öğretmenlere not vermek"], "Öğrencinin sorumluluğu derslerine hazırlıklı gelmektir."),
            S("Bir kişinin aynı anda birden fazla rolü olabilir mi?", ["Evet, örneğin hem öğrenci hem kardeş olabilir.", "Hayır, herkesin tek rolü vardır.", "Sadece yetişkinlerin rolü olur.", "Roller hiç değişmez."], "İnsanlar aynı anda birçok gruba üye olur ve farklı roller üstlenir."),
            S("Gelecekte dâhil olunacak bir grup hangisidir?", ["Üniversite öğrencileri", "Aile", "Akrabalar", "Sınıf arkadaşları"], "Üniversiteye gelecekte gideceğiz; diğer gruplara şu anda da üyeyiz.")
          ]
        },
        {
          id: "s1k2", ad: "Kültürel Bağlar ve Millî Değerler",
          ozet: ["Kültür: bir toplumun maddi ve manevi değerlerinin bütünü", "Kültürel öğeler: dil, din, gelenek, görenek, yemek, giyim, müzik, sanat", "Millî değerler: bayrak, İstiklal Marşı, vatan, Türkçe, bayramlar", "Ortak değerler toplumsal birliği güçlendirir.", "Gelenekler: bayramlaşma, imece, misafirperverlik, düğün, kına"],
          anlatim: [
            "Bir toplumun yüzyıllar içinde oluşturduğu maddi ve manevi değerlerin tamamına kültür denir. Dil, din, gelenek ve görenekler, yemekler, giyim, müzik ve sanat kültürün öğeleridir.",
            "Ortak kültürel değerler bir toplumu birbirine bağlar. Bayramlarda büyükleri ziyaret etmek, misafire ikram, komşuya yardım, imece (köylülerin birlikte iş yapması) ve düğün gelenekleri kültürel bağlarımızdır.",
            "Millî değerler bir milletin bütün bireyleri için kutsal ve ortak olan değerlerdir: Türk bayrağı, İstiklal Marşı, vatan toprakları, Türkçe ve millî bayramlarımız bunlardandır.",
            "Kültürel bağlar ve millî değerler toplumsal birliği ve dayanışmayı güçlendirir. Doğal afetlerde ülkenin dört bir yanından yardım gönderilmesi bu dayanışmanın bir örneğidir."
          ],
          video: "kRovkTXMdyU",
          sorular: [
            S("Hangisi millî değerlerimizden biridir?", ["İstiklal Marşı", "Akıllı telefon", "Alışveriş merkezi", "Otomobil"], "İstiklal Marşı millî marşımızdır, ortak değerimizdir."),
            S("Köylülerin bir işi hep birlikte yapmasına ne denir?", ["İmece", "Kurultay", "Ahilik", "Vakıf"], "İmece, Anadolu'da yaygın bir yardımlaşma geleneğidir."),
            S("Kültürel bağların topluma katkısı nedir?", ["Birlik ve dayanışmayı güçlendirir.", "İnsanları birbirinden uzaklaştırır.", "Sadece ekonomiyi etkiler.", "Hiçbir katkısı yoktur."], "Ortak değerler insanları bir arada tutar."),
            S("Hangisi kültürün maddi öğelerinden biridir?", ["Halı ve kilimler", "Misafirperverlik", "Yardımseverlik", "Saygı"], "Elle tutulabilen ürünler maddi kültür öğesidir.")
          ]
        },
        {
          id: "s1k3", ad: "Toplumsal Sorunlar ve Çözüm Önerileri",
          ozet: ["Toplumsal sorun: toplumun büyük bölümünü etkileyen sorun", "Örnekler: çevre kirliliği, trafik kazaları, israf, akran zorbalığı, sokak hayvanlarının bakımı", "Çözüm için: sorunu tanımla → bilgi topla → çözüm öner → uygula", "Bireyler, aileler, okullar, belediyeler ve sivil toplum kuruluşları birlikte çalışır.", "Sivil toplum kuruluşları: Kızılay, AFAD gönüllüleri, TEMA Vakfı"],
          anlatim: [
            "Toplumun büyük bir kısmını etkileyen ve birlikte çözülmesi gereken sorunlara toplumsal sorun denir. Çevre kirliliği, trafik kazaları, su ve gıda israfı, akran zorbalığı, sokak hayvanlarının bakımı bu sorunlardan bazılarıdır.",
            "Bir sorunu çözmek için önce sorunu açıkça tanımlarız, sonra nedenleri hakkında bilgi toplarız, çözüm önerileri geliştiririz ve en uygun olanı uygularız.",
            "Toplumsal sorunların çözümünde herkese görev düşer. Bireyler davranışlarını değiştirebilir, okullar bilinçlendirme etkinlikleri yapabilir, belediyeler hizmet sunabilir. Kızılay, TEMA Vakfı ve Yeşilay gibi sivil toplum kuruluşları da gönüllülerle birlikte çalışır.",
            "Akran zorbalığı gibi okulda yaşanan sorunlarda öğretmene ve aileye haber vermek, zorbalığa uğrayan arkadaşını yalnız bırakmamak ve empati kurmak çözümün ilk adımlarıdır."
          ],
          video: "athJyd9KffQ",
          sorular: [
            S("Hangisi bir toplumsal sorundur?", ["Trafik kazaları", "Yeni bir ayakkabı almak", "Doğum günü kutlamak", "Kitap okumak"], "Trafik kazaları toplumun büyük kısmını etkiler."),
            S("Bir sorunu çözerken ilk adım hangisidir?", ["Sorunu açıkça tanımlamak", "Hemen çözümü uygulamak", "Sorunu görmezden gelmek", "Başkalarını suçlamak"], "Önce sorun tanımlanır, sonra bilgi toplanır."),
            S("Akran zorbalığına tanık olan bir öğrenci ne yapmalıdır?", ["Öğretmenine haber vermelidir.", "Gülüp geçmelidir.", "Olayı videoya çekip paylaşmalıdır.", "Zorbalığa katılmalıdır."], "Bir yetişkine haber vermek çözümün ilk adımıdır."),
            S("Hangisi bir sivil toplum kuruluşudur?", ["Kızılay", "Belediye", "Valilik", "Kaymakamlık"], "Kızılay gönüllülerle çalışan bir sivil toplum kuruluşudur.")
          ]
        }
      ]
    },
    {
      id: "s2", ad: "Evimiz Dünya",
      konular: [
        {
          id: "s2k1", ad: "Ülkemizin Konumu",
          ozet: ["Mutlak (matematik) konum: paralel ve meridyenlerle belirlenir.", "Türkiye: 36°–42° Kuzey paralelleri, 26°–45° Doğu meridyenleri arasında", "Türkiye Kuzey ve Doğu yarım kürededir.", "Göreceli (özel) konum: Asya ile Avrupa arasında köprü, üç tarafı denizlerle çevrili", "Boğazlar: İstanbul ve Çanakkale", "Komşular: Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Nahçıvan (Azerbaycan), İran, Irak, Suriye"],
          anlatim: [
            "Bir yerin Dünya üzerindeki yerine konum denir. Mutlak (matematik) konum, bir yerin paralel ve meridyenlere göre yeridir. Türkiye 36°–42° Kuzey paralelleri ile 26°–45° Doğu meridyenleri arasında yer alır. Bu nedenle Kuzey ve Doğu yarım kürededir.",
            "Göreceli (özel) konum ise bir yerin çevresindeki yerlere göre konumudur. Türkiye Asya ile Avrupa kıtaları arasında bir köprü gibidir. Üç tarafı denizlerle (Karadeniz, Ege Denizi, Akdeniz) çevrilidir; içinde de Marmara Denizi bulunur.",
            "İstanbul Boğazı Karadeniz'i Marmara'ya, Çanakkale Boğazı Marmara'yı Ege'ye bağlar. Bu boğazlar ticaret ve ulaşım açısından çok önemlidir.",
            "Türkiye'nin komşuları: Yunanistan ve Bulgaristan (batı), Gürcistan, Ermenistan, Azerbaycan'a bağlı Nahçıvan ve İran (doğu), Irak ve Suriye (güney)."
          ],
          video: "jhQNlYyumIw",
          sorular: [
            S("Türkiye hangi yarım kürelerde yer alır?", ["Kuzey ve Doğu", "Güney ve Doğu", "Kuzey ve Batı", "Güney ve Batı"], "Türkiye Kuzey paralelleri ve Doğu meridyenleri arasındadır."),
            S("Karadeniz'i Marmara Denizi'ne bağlayan boğaz hangisidir?", ["İstanbul Boğazı", "Çanakkale Boğazı", "Cebelitarık Boğazı", "Hürmüz Boğazı"], "İstanbul Boğazı Karadeniz ile Marmara'yı bağlar."),
            S("Hangisi Türkiye'nin göreceli (özel) konumuna örnektir?", ["Asya ile Avrupa arasında köprü olması", "36°–42° Kuzey paralelleri arasında olması", "26°–45° Doğu meridyenleri arasında olması", "Kuzey yarım kürede olması"], "Çevredeki yerlere göre tanımlanan konum göreceli konumdur."),
            S("Hangisi Türkiye'nin komşularından biri değildir?", ["Mısır", "İran", "Gürcistan", "Bulgaristan"], "Mısır Türkiye ile kara sınırı olmayan bir ülkedir.")
          ]
        },
        {
          id: "s2k2", ad: "Kıtalar ve Okyanuslar",
          ozet: ["7 kıta: Asya, Afrika, Kuzey Amerika, Güney Amerika, Antarktika, Avrupa, Okyanusya (Avustralya)", "En büyük kıta: Asya · En küçük kıta: Okyanusya", "5 okyanus: Büyük (Pasifik), Atlas, Hint, Güney, Kuzey Buz", "En büyük okyanus: Büyük Okyanus (Pasifik)", "Dünya yüzeyinin yaklaşık %71'i sularla kaplıdır."],
          anlatim: [
            "Dünya yüzeyinin yaklaşık %71'i sularla, %29'u karalarla kaplıdır. Büyük kara parçalarına kıta, büyük su kütlelerine okyanus denir.",
            "Dünya'da 7 kıta vardır: Asya, Afrika, Kuzey Amerika, Güney Amerika, Antarktika, Avrupa ve Okyanusya (Avustralya). En büyük kıta Asya, en küçük kıta Okyanusya'dır. Antarktika buzlarla kaplıdır ve kalıcı olarak yaşayan insan yoktur.",
            "Okyanuslar büyükten küçüğe: Büyük Okyanus (Pasifik), Atlas Okyanusu, Hint Okyanusu, Güney Okyanusu ve Kuzey Buz Denizi (Arktik Okyanusu).",
            "Türkiye topraklarının büyük kısmı Asya kıtasında (Anadolu), küçük bir kısmı Avrupa kıtasında (Trakya) yer alır."
          ],
          video: "jhQNlYyumIw",
          sorular: [
            S("Dünya'nın en büyük kıtası hangisidir?", ["Asya", "Afrika", "Avrupa", "Okyanusya"], "Asya hem yüz ölçümü hem nüfus bakımından en büyük kıtadır."),
            S("Dünya'nın en büyük okyanusu hangisidir?", ["Büyük Okyanus (Pasifik)", "Atlas Okyanusu", "Hint Okyanusu", "Kuzey Buz Denizi"], "Büyük Okyanus en büyük okyanustur."),
            S("Türkiye'nin Avrupa kıtasında kalan bölümüne ne ad verilir?", ["Trakya", "Anadolu", "Kafkasya", "Balkanlar"], "Türkiye'nin Avrupa'daki toprakları Trakya'dır."),
            S("Dünya yüzeyinin yaklaşık ne kadarı sularla kaplıdır?", ["%71", "%29", "%50", "%90"], "Yüzeyin yaklaşık %71'i su, %29'u karadır.")
          ]
        },
        {
          id: "s2k3", ad: "Doğal ve Beşerî Çevre",
          ozet: ["Doğal çevre: insan eli değmeden oluşan unsurlar → dağ, ova, akarsu, göl, orman, iklim", "Beşerî çevre: insanların oluşturduğu unsurlar → bina, yol, köprü, baraj, tarla, fabrika", "İnsanlar doğal çevreye uyum sağlar ve onu değiştirir.", "Doğal çevre yerleşmeyi, tarımı ve nüfusu etkiler."],
          anlatim: [
            "İnsan etkisi olmadan kendiliğinden oluşan unsurlara doğal çevre denir: dağlar, ovalar, akarsular, göller, ormanlar, iklim ve bitki örtüsü doğal çevrenin parçalarıdır.",
            "İnsanların ihtiyaçlarını karşılamak için oluşturduğu unsurlara beşerî çevre denir: evler, yollar, köprüler, barajlar, tarlalar, fabrikalar, limanlar.",
            "Doğal çevre insan yaşamını etkiler. Düz ve verimli ovalarda tarım gelişir, nüfus yoğunlaşır. Yüksek ve engebeli dağlık alanlarda nüfus azdır. Kıyı bölgelerinde balıkçılık ve turizm yaygındır.",
            "İnsanlar da doğal çevreyi değiştirir. Baraj yapmak, tünel açmak, tarla açmak için orman kesmek doğal çevreye yapılan müdahalelerdir. Bu değişiklikler bilinçli ve doğayı koruyarak yapılmalıdır."
          ],
          video: "5rJut2AqFJk",
          sorular: [
            S("Hangisi beşerî çevre unsurudur?", ["Baraj", "Göl", "Dağ", "Orman"], "Barajı insanlar yapar; beşerî çevre unsurudur."),
            S("Hangisi doğal çevre unsurudur?", ["Akarsu", "Köprü", "Fabrika", "Otoyol"], "Akarsu kendiliğinden oluşur."),
            S("Nüfusun ovalarda yoğun olmasının sebebi nedir?", ["Arazinin düz ve verimli olması", "Havanın çok soğuk olması", "Dağlık olması", "Su kaynaklarının olmaması"], "Düz ve verimli araziler tarım ve yerleşme için uygundur.")
          ]
        },
        {
          id: "s2k4", ad: "Türk Dünyası ile İş Birlikleri",
          ozet: ["Bağımsız Türk devletleri: Türkiye, Azerbaycan, Kazakistan, Kırgızistan, Özbekistan, Türkmenistan, KKTC", "Türk Devletleri Teşkilatı: Türk devletlerinin iş birliği kuruluşu", "TİKA: kalkınma ve yardım projeleri", "TÜRKSOY: Türk kültürü ve sanatı", "Yunus Emre Enstitüsü: Türkçe ve Türk kültürünü tanıtır", "Ortak bağlar: dil, tarih, kültür, din"],
          anlatim: [
            "Türkiye'nin yanı sıra Azerbaycan, Kazakistan, Kırgızistan, Özbekistan ve Türkmenistan bağımsız Türk devletleridir. Kuzey Kıbrıs Türk Cumhuriyeti de bir Türk devletidir. Bu ülkeler ortak dil, tarih, kültür ve inançlarla birbirine bağlıdır.",
            "Türk Devletleri Teşkilatı, Türk devletleri arasında ekonomi, eğitim, kültür ve ulaşım alanlarında iş birliği yapılmasını sağlar.",
            "TİKA (Türk İşbirliği ve Koordinasyon Ajansı) okul, hastane, su kuyusu gibi kalkınma projeleri yürütür. TÜRKSOY Türk kültürü ve sanatını yaşatır. Yunus Emre Enstitüsü ise dünyada Türkçeyi ve Türk kültürünü tanıtır.",
            "Nevruz kutlamaları, Dede Korkut hikâyeleri, ortak destanlar ve Türk dünyasının ortak alfabe çalışmaları kültürel bağlarımızın güçlü örnekleridir."
          ],
          video: "qfoOygewYnw",
          sorular: [
            S("Dünyada Türkçeyi ve Türk kültürünü tanıtan kurum hangisidir?", ["Yunus Emre Enstitüsü", "TİKA", "AFAD", "Kızılay"], "Yunus Emre Enstitüsü Türkçe ve Türk kültürünü tanıtır."),
            S("Hangisi bağımsız bir Türk devleti değildir?", ["Mısır", "Kazakistan", "Azerbaycan", "Kırgızistan"], "Mısır bir Türk devleti değildir."),
            S("Türk devletleri arasındaki iş birliğini sağlayan uluslararası kuruluş hangisidir?", ["Türk Devletleri Teşkilatı", "Birleşmiş Milletler", "Avrupa Birliği", "NATO"], "Türk Devletleri Teşkilatı Türk devletlerini bir araya getirir."),
            S("Türk devletlerini birbirine bağlayan ortak unsurlardan biri hangisidir?", ["Ortak dil ve tarih", "Aynı para birimi", "Aynı başkent", "Aynı iklim"], "Türk devletleri ortak dil, tarih ve kültüre sahiptir.")
          ]
        }
      ]
    },
    {
      id: "s3", ad: "Ortak Mirasımız",
      konular: [
        {
          id: "s3k1", ad: "İlk Türk Devletleri",
          ozet: ["Asya Hun Devleti: ilk Türk devleti, en ünlü hükümdarı Mete Han, onlu sistem", "Kök Türk Devleti: 'Türk' adını devlet adı olarak ilk kullanan devlet", "Orhun Yazıtları: Kök Türklerden kalan ilk yazılı Türk belgeleri (Bilge Kağan, Kül Tigin, Tonyukuk)", "Uygurlar: yerleşik hayata geçen ilk Türk devleti; kâğıt ve matbaa kullandılar", "Türklerin anayurdu: Orta Asya (Türkistan)"],
          anlatim: [
            "Türklerin anayurdu Orta Asya'dır (Türkistan). Türkler burada hayvancılıkla geçinen, göçebe bir hayat sürdü ve zamanla devletler kurdu.",
            "Bilinen ilk Türk devleti Asya Hun Devleti'dir. En ünlü hükümdarı Mete Han'dır. Mete Han, orduyu onlu sisteme göre düzenledi. Bu sistem bugün de birçok orduda kullanılır.",
            "Kök Türk Devleti 'Türk' adını devlet adı olarak kullanan ilk Türk devletidir. Kök Türklerden kalan Orhun Yazıtları, Türk tarihinin ilk yazılı belgeleridir. Bilge Kağan, Kül Tigin ve Tonyukuk adına diktirilen bu yazıtlarda Türk milletine öğütler verilir.",
            "Uygurlar yerleşik hayata geçen ilk Türk devletidir. Şehirler kurdular, tarımla uğraştılar, kâğıt ve matbaayı kullandılar. Böylece kültürel olarak çok gelişmiş bir medeniyet oluşturdular."
          ],
          video: "Ol4fbjYNols",
          sorular: [
            S("Bilinen ilk Türk devleti hangisidir?", ["Asya Hun Devleti", "Kök Türk Devleti", "Uygurlar", "Karahanlılar"], "İlk Türk devleti Asya Hun Devleti'dir."),
            S("'Türk' adını devlet adı olarak ilk kullanan devlet hangisidir?", ["Kök Türk Devleti", "Asya Hun Devleti", "Uygurlar", "Selçuklular"], "Kök Türkler 'Türk' adını resmî devlet adı olarak kullandı."),
            S("Yerleşik hayata geçen ilk Türk devleti hangisidir?", ["Uygurlar", "Asya Hunları", "Kök Türkler", "Avarlar"], "Uygurlar şehirler kurup tarımla uğraştı."),
            S("Orhun Yazıtları hangi Türk devletinden kalmıştır?", ["Kök Türk Devleti", "Uygurlar", "Asya Hun Devleti", "Gazneliler"], "Orhun Yazıtları Kök Türklerden kalmıştır."),
            S("Mete Han'ın orduda uyguladığı sistem hangisidir?", ["Onlu sistem", "Tımar sistemi", "Devşirme sistemi", "İkta sistemi"], "Mete Han orduyu 10, 100, 1000 ve 10.000 kişilik birlikler hâlinde düzenledi.")
          ]
        },
        {
          id: "s3k2", ad: "İlk Türk Devletlerinde Kültür ve Medeniyet",
          ozet: ["Kurultay (toy): devlet işlerinin görüşüldüğü meclis", "Kut: yönetme yetkisinin Tanrı tarafından verildiği inancı", "Töre: yazısız kurallar (hukuk)", "Göçebe hayat: hayvancılık, at, çadır (otağ), kımız", "İnanç: Gök Tanrı inancı", "Kurgan: mezar · Balbal: mezar taşı"],
          anlatim: [
            "İlk Türk devletlerinde devlet işleri kurultay (toy) adı verilen mecliste görüşülürdü. Kurultaya hükümdar, hatun ve boy beyleri katılırdı.",
            "Türkler, yönetme yetkisinin (kut) hükümdara Tanrı tarafından verildiğine inanırdı. Toplumsal hayat, töre denilen yazısız kurallarla düzenlenirdi. Töre adaleti, eşitliği ve iyiliği esas alırdı.",
            "Türklerin çoğu göçebe yaşardı ve geçimini hayvancılıkla sağlardı. At, Türklerin hayatında çok önemliydi. Çadırlarda (otağ) yaşar, kımız (kısrak sütünden yapılan içecek) içerlerdi. Kadınlar toplumda saygın bir yere sahipti.",
            "İlk Türklerin çoğu Gök Tanrı inancına sahipti. Ölülerini kurgan adı verilen mezarlara gömer, mezarların başına balbal denilen taşlar dikerlerdi. Sanatta hayvan figürleri (hayvan üslubu) önemli bir yer tutardı."
          ],
          video: "Ol4fbjYNols",
          sorular: [
            S("İlk Türk devletlerinde devlet işlerinin görüşüldüğü meclise ne denir?", ["Kurultay", "Divan", "Senato", "Parlamento"], "Devlet meclisine kurultay veya toy denirdi."),
            S("İlk Türklerde yazısız hukuk kurallarına ne ad verilir?", ["Töre", "Kut", "Balbal", "Otağ"], "Yazısız kurallara töre denir."),
            S("'Kut' anlayışı neyi ifade eder?", ["Yönetme yetkisinin Tanrı tarafından verildiğini", "Mezar taşlarını", "Hükümdarın çadırını", "Ordunun düzenini"], "Kut, hükümdara verilen yönetme yetkisidir."),
            S("İlk Türklerin geçim kaynağı esas olarak hangisiydi?", ["Hayvancılık", "Balıkçılık", "Madencilik", "Deniz ticareti"], "Göçebe Türkler hayvancılıkla geçinirdi.")
          ]
        },
        {
          id: "s3k3", ad: "İslam Medeniyetinin Ortak Mirasa Katkıları",
          ozet: ["Beytü'l-Hikme: Abbasiler döneminde Bağdat'ta kurulan bilim merkezi", "Harezmî: cebir biliminin kurucusu", "İbn-i Sina: tıp alanında 'El-Kanun' kitabı", "Bîrûnî: astronomi, coğrafya, matematik", "Farabi: felsefe ve müzik ('İkinci Öğretmen')", "Medrese, kütüphane, rasathane (gözlemevi), hastane"],
          anlatim: [
            "İslam medeniyeti, bilim ve kültür alanında insanlığa önemli katkılar sağlamıştır. Abbasiler döneminde Bağdat'ta kurulan Beytü'l-Hikme (Bilgelik Evi), farklı dillerdeki eserlerin çevrildiği ve bilim insanlarının çalıştığı büyük bir bilim merkeziydi.",
            "Harezmî cebir biliminin kurucusu kabul edilir; 'algoritma' kelimesi onun adından gelir. İbn-i Sina'nın tıp kitabı 'El-Kanun', yüzyıllarca Avrupa üniversitelerinde ders kitabı olarak okutuldu.",
            "Bîrûnî astronomi, coğrafya ve matematik alanlarında çalıştı; Dünya'nın çevresini büyük bir doğrulukla hesapladı. Farabi felsefe ve müzikte öyle önemli eserler verdi ki 'İkinci Öğretmen' olarak anıldı.",
            "İslam dünyasında medreseler (okullar), kütüphaneler, rasathaneler (gözlemevleri) ve darüşşifalar (hastaneler) kuruldu. Bu kurumlar bilginin yayılmasında büyük rol oynadı."
          ],
          video: "tq5IFgdHau4",
          sorular: [
            S("Cebir biliminin kurucusu kabul edilen bilim insanı kimdir?", ["Harezmî", "İbn-i Sina", "Farabi", "Bîrûnî"], "Harezmî cebir biliminin kurucusudur."),
            S("'El-Kanun' adlı tıp kitabını yazan bilim insanı kimdir?", ["İbn-i Sina", "Harezmî", "Kaşgarlı Mahmut", "Farabi"], "İbn-i Sina'nın El-Kanun'u uzun süre Avrupa'da okutuldu."),
            S("Abbasiler döneminde Bağdat'ta kurulan bilim merkezi hangisidir?", ["Beytü'l-Hikme", "Nizamiye Medresesi", "Kervansaray", "Darüşşifa"], "Beytü'l-Hikme (Bilgelik Evi) Bağdat'ta kuruldu."),
            S("Gök cisimlerinin gözlemlendiği yapılara ne denir?", ["Rasathane", "Medrese", "Kervansaray", "Darüşşifa"], "Rasathane gözlemevi demektir.")
          ]
        },
        {
          id: "s3k4", ad: "Türklerin İslamiyet'i Kabulü ve Türk-İslam Kültürü",
          ozet: ["Talas Savaşı (751): Türk-Arap yakınlaşmasını başlattı", "Karahanlılar: İslamiyet'i kabul eden ilk Türk devleti", "Gazneliler: Gazneli Mahmut, Hindistan seferleri", "Büyük Selçuklu: Dandanakan (1040), Malazgirt (1071), Nizamiye medreseleri", "Kutadgu Bilig – Yusuf Has Hacip · Divanü Lügati't-Türk – Kaşgarlı Mahmut", "Atabetü'l-Hakayık – Edip Ahmet · Divan-ı Hikmet – Ahmet Yesevi"],
          anlatim: [
            "751 yılındaki Talas Savaşı'nda Türkler Abbasilere destek verdi. Bu savaştan sonra Türklerle Araplar arasında yakınlaşma başladı ve Türkler zamanla İslamiyet'i kabul etti.",
            "Karahanlılar İslamiyet'i kabul eden ilk Türk devletidir. Gazneliler döneminde Gazneli Mahmut Hindistan'a seferler düzenledi. Büyük Selçuklu Devleti 1040'ta Dandanakan Savaşı ile kuruldu; Alp Arslan 1071'de Malazgirt Savaşı'nı kazanarak Anadolu'nun kapılarını Türklere açtı. Selçuklu veziri Nizamülmülk, Nizamiye medreselerini kurdu.",
            "Karahanlılar döneminde önemli eserler yazıldı: Yusuf Has Hacip 'Kutadgu Bilig' (mutluluk veren bilgi) adlı eserinde iyi bir yöneticinin özelliklerini anlattı. Kaşgarlı Mahmut 'Divanü Lügati't-Türk' ile Türkçenin Arapça kadar zengin olduğunu göstermek için ilk Türkçe sözlüğü hazırladı.",
            "Edip Ahmet Yükneki 'Atabetü'l-Hakayık' adlı öğüt kitabını, Ahmet Yesevi ise sade Türkçe ile 'Divan-ı Hikmet' adlı eserini yazdı."
          ],
          video: "6WYpFu4vi98",
          sorular: [
            S("İslamiyet'i kabul eden ilk Türk devleti hangisidir?", ["Karahanlılar", "Gazneliler", "Büyük Selçuklular", "Uygurlar"], "Karahanlılar ilk Müslüman Türk devletidir."),
            S("Anadolu'nun kapılarını Türklere açan savaş hangisidir?", ["Malazgirt Savaşı (1071)", "Talas Savaşı (751)", "Dandanakan Savaşı (1040)", "Miryokefalon Savaşı (1176)"], "Alp Arslan'ın kazandığı Malazgirt Savaşı Anadolu'nun kapılarını açtı."),
            S("'Divanü Lügati't-Türk' adlı eserin yazarı kimdir?", ["Kaşgarlı Mahmut", "Yusuf Has Hacip", "Ahmet Yesevi", "Edip Ahmet"], "Kaşgarlı Mahmut ilk Türkçe sözlüğü hazırladı."),
            S("Türklerle Araplar arasında yakınlaşmayı başlatan savaş hangisidir?", ["Talas Savaşı", "Malazgirt Savaşı", "Dandanakan Savaşı", "Haçova Savaşı"], "751'deki Talas Savaşı Türk-Arap yakınlaşmasını başlattı."),
            S("Nizamiye medreselerini kuran Selçuklu veziri kimdir?", ["Nizamülmülk", "Alp Arslan", "Tuğrul Bey", "Melikşah"], "Vezir Nizamülmülk Nizamiye medreselerini kurdu.")
          ]
        },
        {
          id: "s3k5", ad: "Anadolu'nun Türkleşmesi ve İslamlaşması",
          ozet: ["Malazgirt (1071) sonrası Anadolu'ya Türk göçleri hızlandı.", "İlk Türk beylikleri: Saltuklular, Mengücekler, Danişmentliler, Artuklular, Çaka Beyliği", "Çaka Bey: ilk Türk donanmasını kurdu.", "Türkiye Selçuklu Devleti: başkent Konya", "Kervansaraylar: ticaret yolları üzerinde konaklama yerleri", "Ahilik: esnaf ve sanatkârların dayanışma teşkilatı"],
          anlatim: [
            "1071 Malazgirt Zaferi'nden sonra Anadolu'ya Türk göçleri hızlandı. Anadolu'da ilk Türk beylikleri kuruldu: Saltuklular, Mengücekler, Danişmentliler, Artuklular ve Çaka Beyliği. İzmir ve çevresinde kurulan Çaka Beyliği, ilk Türk donanmasını oluşturdu.",
            "Türkiye Selçuklu Devleti Anadolu'da kuruldu ve başkenti Konya oldu. Selçuklular ticareti geliştirmek için yollar üzerine kervansaraylar yaptırdı. Kervansaraylarda tüccarlar ve hayvanları ücretsiz konaklayabilirdi.",
            "Ahilik, Ahi Evran tarafından kurulan esnaf ve sanatkârların dayanışma teşkilatıdır. Ahiler dürüstlük, kaliteli üretim ve yardımlaşmayı önemserdi. Meslek eğitimi usta-çırak ilişkisiyle verilirdi.",
            "Anadolu'da cami, medrese, külliye, hamam ve çeşmeler yapıldı. Böylece Anadolu kısa sürede bir Türk-İslam yurdu hâline geldi."
          ],
          video: "STrqX4MLwPg",
          sorular: [
            S("İlk Türk donanmasını kuran beylik hangisidir?", ["Çaka Beyliği", "Saltuklular", "Artuklular", "Mengücekler"], "Çaka Bey İzmir'de ilk Türk donanmasını kurdu."),
            S("Türkiye Selçuklu Devleti'nin başkenti neresidir?", ["Konya", "İstanbul", "Bursa", "Sivas"], "Türkiye Selçuklularının başkenti Konya'dır."),
            S("Esnaf ve sanatkârların dayanışma teşkilatına ne ad verilir?", ["Ahilik", "Kurultay", "Töre", "Divan"], "Ahilik esnafın dayanışma teşkilatıdır."),
            S("Kervansarayların yapılma amacı nedir?", ["Ticareti geliştirmek, tüccarların konaklamasını sağlamak", "Askerleri eğitmek", "Hastaları tedavi etmek", "Gök cisimlerini gözlemlemek"], "Kervansaraylar ticaret yolları üzerindeki konaklama yerleridir.")
          ]
        }
      ]
    },
    {
      id: "s4", ad: "Yaşayan Demokrasimiz",
      konular: [
        {
          id: "s4k1", ad: "Yönetime Katılım ve Karar Alma",
          ozet: ["Yasama: kanun yapma → TBMM", "Yürütme: kanunları uygulama → Cumhurbaşkanı ve bakanlar", "Yargı: anlaşmazlıkları çözme → bağımsız mahkemeler", "Seçme ve seçilme hakkı: 18 yaş", "Yerel yönetim: muhtar, belediye başkanı, belediye meclisi", "Okulda katılım: okul meclisi, sınıf başkanlığı seçimi"],
          anlatim: [
            "Türkiye Cumhuriyeti demokratik bir devlettir. Demokrasilerde yönetim halkın seçtiği temsilcilerle yapılır. Vatandaşlar 18 yaşından itibaren seçimlerde oy kullanabilir ve aday olabilir.",
            "Devletin üç temel yetkisi vardır: Yasama yetkisi (kanun yapma) Türkiye Büyük Millet Meclisi'ne (TBMM) aittir. Yürütme yetkisi (kanunları uygulama) Cumhurbaşkanı'na aittir. Yargı yetkisi (anlaşmazlıkları çözme) bağımsız mahkemelere aittir.",
            "Yerel yönetimlerde de katılım vardır. Mahalle ve köylerde muhtarlar, şehirlerde belediye başkanları ve belediye meclisi üyeleri seçimle belirlenir.",
            "Okulda da demokrasiyi yaşarız: Sınıf başkanını ve okul meclisi temsilcilerini oyla seçeriz. Fikirlerimizi söyler, ortak kararlara katılırız."
          ],
          video: "0MSQYqBmWbE",
          sorular: [
            S("Türkiye'de kanun yapma (yasama) yetkisi kime aittir?", ["TBMM", "Cumhurbaşkanı", "Mahkemeler", "Belediyeler"], "Yasama yetkisi Türkiye Büyük Millet Meclisi'nindir."),
            S("Yargı yetkisi kime aittir?", ["Bağımsız mahkemeler", "TBMM", "Muhtarlar", "Valiler"], "Yargı yetkisini bağımsız mahkemeler kullanır."),
            S("Türkiye'de kaç yaşından itibaren seçimlerde oy kullanılabilir?", ["18", "15", "21", "25"], "Seçme hakkı 18 yaşında başlar."),
            S("Mahallenin yönetiminden sorumlu seçilmiş kişi kimdir?", ["Muhtar", "Vali", "Kaymakam", "Hâkim"], "Muhtar mahalle halkı tarafından seçilir. Vali ve kaymakam atanır.")
          ]
        },
        {
          id: "s4k2", ad: "Temel Hak ve Sorumluluklar",
          ozet: ["Temel haklar: yaşama, eğitim, sağlık, düşünce ve ifade özgürlüğü, din ve vicdan özgürlüğü, mülkiyet", "Dilekçe hakkı: istek ve şikâyetleri yetkililere iletme", "CİMER: Cumhurbaşkanlığı İletişim Merkezi (dilek ve şikâyet)", "Her hakkın bir sorumluluğu vardır.", "Haklarımızı kullanırken başkalarının haklarına saygı göstermeliyiz."],
          anlatim: [
            "Her insanın doğuştan sahip olduğu ve devlet tarafından korunan haklara temel haklar denir. Yaşama hakkı, eğitim hakkı, sağlık hakkı, düşünce ve ifade özgürlüğü, din ve vicdan özgürlüğü, mülkiyet hakkı temel haklardandır.",
            "Haklarımızın yanında sorumluluklarımız da vardır. Eğitim hakkımızı kullanırken okul kurallarına uymak, ifade özgürlüğümüzü kullanırken başkalarını incitmemek sorumluluğumuzdur.",
            "Vatandaşlar dilek ve şikâyetlerini yetkililere iletebilir. Buna dilekçe hakkı denir. Bunun için dilekçe yazılabilir ya da CİMER (Cumhurbaşkanlığı İletişim Merkezi) kullanılabilir.",
            "Çocukların da hakları vardır: oyun oynama, eğitim alma, korunma ve sağlıklı büyüme bunlardandır. Bu haklar Çocuk Haklarına Dair Sözleşme ile güvence altına alınmıştır."
          ],
          video: "MXdUGCD0-6I",
          sorular: [
            S("Hangisi temel haklardan biridir?", ["Eğitim hakkı", "Sınıf başkanı olma zorunluluğu", "Vergi vermeme hakkı", "Kuralları çiğneme hakkı"], "Eğitim hakkı temel haklardandır."),
            S("Vatandaşların istek ve şikâyetlerini yetkililere iletme hakkına ne denir?", ["Dilekçe hakkı", "Seçme hakkı", "Mülkiyet hakkı", "Yaşama hakkı"], "Dilekçe hakkı ile dilek ve şikâyetler iletilir."),
            S("Haklarımızı kullanırken nelere dikkat etmeliyiz?", ["Başkalarının haklarına saygı göstermeye", "Sadece kendi isteğimize", "Kuralları görmezden gelmeye", "Herkesi susturmaya"], "Bir kişinin hakkı başkasının hakkının başladığı yerde biter.")
          ]
        },
        {
          id: "s4k3", ad: "Dijital Vatandaşlık",
          ozet: ["Dijital vatandaş: interneti bilinçli, güvenli ve saygılı kullanan kişi", "Şifreni kimseyle paylaşma, güçlü şifre kullan.", "Kişisel bilgilerini (adres, telefon, fotoğraf) paylaşma.", "Siber zorbalık: internette birini rahatsız etmek, aşağılamak → bildir!", "Başkasının eserini izinsiz kullanma (telif hakkı).", "e-Devlet: devlet hizmetlerine internetten ulaşma"],
          anlatim: [
            "İnterneti ve dijital araçları bilinçli, güvenli ve başkalarına saygılı bir şekilde kullanan kişiye dijital vatandaş denir.",
            "Güvenliğimiz için şifrelerimizi kimseyle paylaşmamalı, tahmin edilmesi zor şifreler kullanmalıyız. Ev adresi, telefon numarası, okul adı ve fotoğraf gibi kişisel bilgilerimizi tanımadığımız kişilerle ve sosyal medyada paylaşmamalıyız.",
            "İnternette birini rahatsız etmek, korkutmak ya da aşağılamak siber zorbalıktır. Siber zorbalığa maruz kalırsak ya da tanık olursak cevap vermeden ekran görüntüsü almalı ve ailemize, öğretmenimize haber vermeliyiz.",
            "İnternetteki her bilgi doğru değildir; bilgileri güvenilir kaynaklardan kontrol etmeliyiz. Başkalarının fotoğraf, müzik ve yazılarını izinsiz kullanmamalıyız. e-Devlet sayesinde birçok devlet hizmetine internetten ulaşabiliriz."
          ],
          video: "Bon3pEIm4ZY",
          sorular: [
            S("Hangisi güvenli internet kullanımına uygun bir davranıştır?", ["Şifremi kimseyle paylaşmamak", "Ev adresimi sosyal medyada paylaşmak", "Tanımadığım kişilerle buluşmak", "Her bağlantıya tıklamak"], "Şifreler gizli tutulmalıdır."),
            S("İnternette birini sürekli rahatsız etmeye ve aşağılamaya ne denir?", ["Siber zorbalık", "Dijital vatandaşlık", "e-Devlet", "Telif hakkı"], "Bu davranış siber zorbalıktır."),
            S("Siber zorbalığa uğrayan bir öğrenci ne yapmalıdır?", ["Ailesine veya öğretmenine haber vermelidir.", "Karşılık olarak hakaret etmelidir.", "Kimseye söylememelidir.", "Şifresini paylaşmalıdır."], "Güvendiği bir yetişkine haber vermek en doğru davranıştır."),
            S("Devlet hizmetlerine internet üzerinden ulaşmamızı sağlayan sistem hangisidir?", ["e-Devlet", "e-Posta", "Sosyal medya", "Arama motoru"], "e-Devlet ile birçok işlem internetten yapılır.")
          ]
        }
      ]
    },
    {
      id: "s5", ad: "Hayatımızdaki Ekonomi",
      konular: [
        {
          id: "s5k1", ad: "Ülkemizin Kaynakları ve Ekonomik Faaliyetler",
          ozet: ["Ekonomik faaliyetler: tarım, hayvancılık, madencilik, sanayi, ticaret, turizm", "Fındık ve çay → Karadeniz (çay: Rize)", "Pamuk → Çukurova, Ege, Güneydoğu (GAP)", "Antep fıstığı → Gaziantep · Kayısı → Malatya · Zeytin → Ege ve Marmara", "Bor → dünyanın en büyük rezervi Türkiye'de · Taş kömürü → Zonguldak", "Turizm → Antalya, İstanbul, Kapadokya"],
          anlatim: [
            "İnsanların ihtiyaçlarını karşılamak için yaptığı üretim, dağıtım ve tüketim çalışmalarına ekonomik faaliyet denir. Tarım, hayvancılık, ormancılık, balıkçılık, madencilik, sanayi, ticaret ve turizm başlıca ekonomik faaliyetlerdir.",
            "Ülkemiz iklim ve yeryüzü şekillerinin çeşitliliği sayesinde birçok ürün yetiştirir. Fındık ve çay Karadeniz'de (çay özellikle Rize'de), pamuk Çukurova, Ege ve Güneydoğu Anadolu'da, Antep fıstığı Gaziantep'te, kayısı Malatya'da, zeytin Ege ve Marmara'da yetişir.",
            "Madenler bakımından da zenginiz. Dünyadaki bor rezervlerinin büyük kısmı Türkiye'dedir. Taş kömürü Zonguldak'ta çıkarılır. Linyit, krom ve mermer de önemli kaynaklarımızdır.",
            "Turizm de önemli bir gelir kaynağıdır: Antalya deniz turizmiyle, İstanbul tarihî eserleriyle, Kapadokya peri bacalarıyla, Erzurum Palandöken kış turizmiyle tanınır."
          ],
          video: "yVmUo-mHKg0",
          sorular: [
            S("Dünya rezervinin büyük kısmı Türkiye'de bulunan maden hangisidir?", ["Bor", "Altın", "Elmas", "Petrol"], "Dünya bor rezervlerinin büyük kısmı Türkiye'dedir."),
            S("Çay tarımı en çok hangi ilimizde yapılır?", ["Rize", "Konya", "Antalya", "Malatya"], "Çay Doğu Karadeniz'de, özellikle Rize'de yetişir."),
            S("Taş kömürü çıkarılan ilimiz hangisidir?", ["Zonguldak", "Gaziantep", "Muğla", "Edirne"], "Taş kömürü Zonguldak'ta çıkarılır."),
            S("Hangisi bir ekonomik faaliyet değildir?", ["Uyumak", "Tarım", "Ticaret", "Turizm"], "Ekonomik faaliyet üretim, dağıtım veya tüketimle ilgilidir.")
          ]
        },
        {
          id: "s5k2", ad: "Meslekler, Yatırım ve Ürün Tasarımı",
          ozet: ["Ekonomik faaliyetler birçok mesleği ortaya çıkarır (çiftçi, madenci, rehber, mühendis).", "Üretim → dağıtım → tüketim", "Yatırım: gelecekte kazanç sağlamak için kaynak kullanma", "Pazarlama: ürünü tüketiciye tanıtma ve satma süreci", "Ürün tasarımı: ihtiyacı belirle → fikir üret → prototip yap → test et → geliştir", "Girişimci: yeni bir iş fikrini hayata geçiren kişi"],
          anlatim: [
            "Her ekonomik faaliyet farklı meslekleri ortaya çıkarır: Tarım çiftçi ve ziraat mühendisini, madencilik madenci ve maden mühendisini, turizm rehber ve otel çalışanını, sanayi işçi ve mühendisi gerektirir.",
            "Bir ürünün bize ulaşması için üretim, dağıtım ve tüketim aşamalarından geçer. Fındık bahçede üretilir, fabrikada işlenir, nakliyecilerle marketlere dağıtılır ve tüketiciye ulaşır.",
            "Gelecekte kazanç sağlamak amacıyla para, emek ve zamanın bir işe ayrılmasına yatırım denir. Ürünü tüketiciye tanıtma, fiyatlandırma ve satış sürecine pazarlama denir. Reklamlar pazarlamanın bir parçasıdır.",
            "Yeni bir ürün tasarlarken önce bir ihtiyacı ya da sorunu belirleriz, sonra fikirler üretiriz, ilk örneği (prototip) yaparız, test eder ve geliştiririz. Yeni bir iş fikrini hayata geçiren kişiye girişimci denir."
          ],
          video: "yVmUo-mHKg0",
          sorular: [
            S("Bir ürünü tüketiciye tanıtma ve satma sürecine ne denir?", ["Pazarlama", "Üretim", "Tasarruf", "İhracat"], "Tanıtım ve satış süreci pazarlamadır."),
            S("Yeni bir iş fikrini hayata geçiren kişiye ne ad verilir?", ["Girişimci", "Tüketici", "Seçmen", "Memur"], "Girişimci yeni bir iş kurar."),
            S("Ürün tasarımında ilk adım hangisidir?", ["İhtiyacı ya da sorunu belirlemek", "Ürünü satmak", "Reklam yapmak", "Fiyat belirlemek"], "Tasarım bir ihtiyacı belirlemekle başlar."),
            S("Bir ürünün ilk deneme örneğine ne ad verilir?", ["Prototip", "Patent", "Reklam", "Fatura"], "Prototip, ürünün test edilen ilk örneğidir.")
          ]
        }
      ]
    },
    {
      id: "s6", ad: "Teknoloji ve Sosyal Bilimler",
      konular: [
        {
          id: "s6k1", ad: "Ulaşım ve İletişim Teknolojileri",
          ozet: ["Tarihî ticaret yolları: İpek Yolu, Baharat Yolu", "Eski iletişim: haberci, posta güvercini, ateş-duman, mektup", "Telgraf → telefon → radyo → televizyon → internet", "Matbaa: bilginin hızla yayılmasını sağladı.", "Ulaşım ve iletişim teknolojileri kültürel etkileşimi artırır."],
          anlatim: [
            "İnsanlar tarih boyunca birbirleriyle iletişim kurmak ve ulaşım sağlamak için farklı yollar geliştirdi. Eskiden haberler atlı haberciler, posta güvercinleri, ateş ve duman işaretleriyle iletilirdi.",
            "Tarihte İpek Yolu ve Baharat Yolu gibi ticaret yolları Doğu ile Batı'yı birbirine bağladı. Bu yollar yalnızca ticaret değil; bilgi, din, sanat ve yemek kültürünün de yayılmasını sağladı.",
            "Matbaanın icadı kitapların çoğalmasını ve bilginin hızla yayılmasını sağladı. Ardından telgraf, telefon, radyo, televizyon ve internet geldi. Bugün uydu ve internet sayesinde dünyanın bir ucundaki olayı anında öğrenebiliyoruz.",
            "Ulaşımda da büyük gelişmeler oldu: at arabasından buharlı trene, otomobile, uçağa ve hızlı trene. Ulaşım ve iletişim teknolojileri farklı kültürlerin birbirini tanımasını, yani kültürel etkileşimi artırdı."
          ],
          video: "wxS9eVVQUVw",
          sorular: [
            S("Çin'den Avrupa'ya uzanan tarihî ticaret yolu hangisidir?", ["İpek Yolu", "Kral Yolu", "Baharat Yolu", "Kutup Yolu"], "İpek Yolu Çin'den Avrupa'ya uzanırdı."),
            S("Bilginin hızla çoğaltılıp yayılmasını sağlayan icat hangisidir?", ["Matbaa", "Pusula", "Barut", "Tekerlek"], "Matbaa ile kitaplar hızla çoğaltıldı."),
            S("Hangisi günümüzün iletişim teknolojilerinden biridir?", ["İnternet", "Posta güvercini", "Duman işareti", "Atlı haberci"], "İnternet günümüzün iletişim teknolojisidir."),
            S("Ticaret yollarının kültürel etkisi nedir?", ["Farklı kültürlerin etkileşimini sağlamıştır.", "Kültürlerin birbirinden uzaklaşmasına yol açmıştır.", "Sadece ürün taşımıştır.", "Hiçbir etkisi olmamıştır."], "Ticaret yolları kültürlerin birbirini tanımasını sağladı.")
          ]
        },
        {
          id: "s6k2", ad: "Telif, Patent ve Araştırma Raporu",
          ozet: ["Patent: yeni bir buluşun sahibine verilen koruma belgesi", "Telif hakkı: kitap, şarkı, film, resim gibi eserlerin sahibinin hakkı", "Türk Patent ve Marka Kurumu: patent ve marka başvuruları", "Başkasının eserini kullanırken kaynak göstermek gerekir.", "Rapor: konu → araştırma → bilgileri düzenleme → sonuç → kaynakça"],
          anlatim: [
            "Bir kişinin ortaya koyduğu yeni bir buluşu korumak için verilen belgeye patent denir. Patent sayesinde buluşu, sahibinin izni olmadan başkaları üretip satamaz. Türkiye'de patent başvuruları Türk Patent ve Marka Kurumu'na yapılır.",
            "Kitap, şarkı, film, resim, fotoğraf ve bilgisayar programı gibi eserlerin sahibine tanınan haklara telif hakkı denir. Bir eseri izinsiz kopyalamak, çoğaltmak ya da kendi eserimiz gibi göstermek telif hakkını ihlal etmektir.",
            "Araştırma yaparken başkalarının bilgi ve eserlerinden yararlandığımızda mutlaka kaynak göstermeliyiz.",
            "Bir araştırma raporu hazırlarken önce konuyu belirleriz, güvenilir kaynaklardan bilgi toplarız, bilgileri düzenleriz, sonuçlarımızı yazarız ve en sona kullandığımız kaynakları (kaynakça) ekleriz."
          ],
          video: "__nIVk_plaU",
          sorular: [
            S("Yeni bir buluşu korumak için alınan belgeye ne denir?", ["Patent", "Diploma", "Kimlik", "Fatura"], "Buluşlar patentle korunur."),
            S("Bir şarkının izinsiz çoğaltılıp satılması hangi hakkın ihlalidir?", ["Telif hakkı", "Seçme hakkı", "Yaşama hakkı", "Dilekçe hakkı"], "Eser sahibinin hakları telif hakkıdır."),
            S("Türkiye'de patent başvuruları hangi kuruma yapılır?", ["Türk Patent ve Marka Kurumu", "TÜİK", "AFAD", "TİKA"], "Patent ve marka başvurularını Türk Patent ve Marka Kurumu alır."),
            S("Araştırma raporunun sonuna ne eklenmelidir?", ["Kaynakça", "Reklam", "Fiyat listesi", "Dilekçe"], "Kullanılan kaynaklar kaynakça bölümünde gösterilir.")
          ]
        }
      ]
    }
  ]
};
})();
