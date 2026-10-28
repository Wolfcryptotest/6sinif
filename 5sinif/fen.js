window.ICERIK = window.ICERIK || {};
// 5. sınıf Fen Bilimleri - Maarif Modeli 7 ünite (tymm.meb.gov.tr)
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.fen = {
  ad: "Fen Bilimleri", ikon: "🔬", renk: "#22a06b",
  uniteler: [
    {
      id: "f1", ad: "Gökyüzündeki Komşularımız ve Biz",
      konular: [
        {
          id: "f1k1", ad: "Gökyüzündeki Komşumuz: Güneş", video: "nCIb09ZF2Zk",
          ozet: ["Güneş bir yıldızdır; ısı ve ışık kaynağıdır.", "Gaz hâlindeki sıcak maddelerden (hidrojen, helyum) oluşur; katmanlı yapıdadır.", "Kendi ekseni etrafında döner (dönme hareketi).", "Güneş'in hacmi Dünya'dan yaklaşık 1,3 milyon kat büyüktür.", "Güneş'e asla çıplak gözle ya da dürbünle bakılmaz."],
          anlatim: [
            "Güneş, Dünya'ya en yakın yıldızdır. Kendi ısısını ve ışığını üretir; Dünya'daki yaşamın temel enerji kaynağıdır. Bitkiler Güneş ışığıyla besin üretir, su döngüsü Güneş'in ısısıyla gerçekleşir.",
            "Güneş katı değildir; çok sıcak gazlardan, en çok da hidrojen ve helyumdan oluşur. Merkezinde (çekirdek) sıcaklık milyonlarca dereceyi bulur. Dış katmanlarında yer yer daha soğuk görünen Güneş lekeleri ve dışarı fışkıran Güneş patlamaları gözlenir.",
            "Güneş de Dünya gibi kendi ekseni etrafında döner. Bu harekete dönme hareketi denir. Güneş lekelerinin yer değiştirmesi bu dönmenin kanıtıdır.",
            "Güneş çok büyüktür: Hacmi Dünya'nın yaklaşık 1,3 milyon katıdır. Bize küçük görünmesinin nedeni çok uzakta (yaklaşık 150 milyon km) olmasıdır. Güneş'e çıplak gözle, gözlük ya da dürbünle bakmak gözlere kalıcı zarar verir."
          ],
          sorular: [
            S("Güneş ile ilgili hangisi yanlıştır?", ["Güneş katı ve kayalık bir gök cismidir.", "Güneş bir yıldızdır.", "Güneş kendi ekseni etrafında döner.", "Güneş ısı ve ışık kaynağıdır."], "Güneş sıcak gazlardan oluşur."),
            S("Güneş'in Dünya'dan çok büyük olduğu hâlde küçük görünmesinin nedeni nedir?", ["Dünya'ya çok uzak olması", "Işığının zayıf olması", "Gaz yapılı olması", "Dönme hareketi yapması"], "Uzaktaki cisimler küçük görünür."),
            S("Güneş'in dönme hareketi yaptığını gösteren kanıt hangisidir?", ["Güneş lekelerinin yer değiştirmesi", "Gece ve gündüzün oluşması", "Mevsimlerin oluşması", "Ay'ın evreleri"], "Lekelerin konumu değişir; bu dönmeyi gösterir.")
          ]
        },
        {
          id: "f1k2", ad: "Gökyüzündeki Komşumuz: Ay ve Evreleri", video: "zOtCSk7rEJk",
          ozet: ["Ay, Dünya'nın tek doğal uydusudur; kendi ışığı yoktur, Güneş ışığını yansıtır.", "Atmosferi, suyu, havası yoktur; yüzeyinde kraterler vardır.", "Ay kendi ekseni etrafında dönerken Dünya etrafında dolanır; ikisi de yaklaşık 27,3 gün sürer.", "Bu yüzden Ay'ın hep aynı yüzünü görürüz.", "Ana evreler: Yeni Ay → İlk Dördün → Dolunay → Son Dördün (yaklaşık 29,5 gün)."],
          anlatim: [
            "Ay, Dünya'nın etrafında dolanan doğal uydusudur. Kendi ışığı yoktur; Güneş'ten aldığı ışığı yansıttığı için parlak görünür. Ay'da hava (atmosfer) ve sıvı su bulunmaz, bu yüzden yüzeyindeki çukurlar (kraterler) milyonlarca yıl bozulmadan kalır.",
            "Ay hem kendi ekseni etrafında döner (dönme) hem de Dünya'nın etrafında dolanır (dolanma). Bu iki hareketin süresi eşit, yaklaşık 27,3 gündür. Bu nedenle Dünya'dan Ay'ın hep aynı yüzünü görürüz.",
            "Ay, Dünya etrafında dolanırken Güneş ışığı alan yüzünün Dünya'dan görünen kısmı değişir. Bu farklı görünümlere Ay'ın evreleri denir. Yeni Ay'da Ay görünmez, İlk Dördün'de sağ yarısı, Dolunay'da tamamı, Son Dördün'de sol yarısı aydınlık görünür.",
            "Ana evrelerin arasında hilal ve şişkin ay evreleri vardır. Bir Yeni Ay'dan diğerine yaklaşık 29,5 gün geçer; buna ay takvimi denir."
          ],
          sorular: [
            S("Ay'ın hep aynı yüzünü görmemizin nedeni nedir?", ["Dönme ve dolanma sürelerinin eşit olması", "Ay'ın atmosferinin olmaması", "Ay'ın kendi ışığının olmaması", "Ay'ın Dünya'dan küçük olması"], "İki hareket de yaklaşık 27,3 gün sürer."),
            S("Ay'ın tamamen aydınlık göründüğü evre hangisidir?", ["Dolunay", "Yeni Ay", "İlk Dördün", "Son Dördün"], "Dolunayda Güneş'e bakan yüzün tamamını görürüz."),
            S("Ay'da kraterlerin uzun süre bozulmadan kalmasının nedeni nedir?", ["Atmosferinin ve suyunun olmaması", "Çok sıcak olması", "Dönme hareketi yapması", "Güneş'e yakın olması"], "Rüzgâr ve su olmadığı için aşınma olmaz.")
          ]
        },
        {
          id: "f1k3", ad: "Dünya, Güneş ve Ay", video: "ECGN3t1pxBU",
          ozet: ["Dünya kendi ekseni etrafında 24 saatte döner → gece-gündüz.", "Dünya Güneş etrafında 365 gün 6 saatte dolanır → yıl.", "Ay, Dünya etrafında dolanır; Dünya ile birlikte Güneş etrafında da hareket eder.", "Büyüklük: Güneş > Dünya > Ay (Dünya, Ay'dan yaklaşık 50 kat büyük).", "Dünya'nın şekli küreye benzer (geoit)."],
          anlatim: [
            "Dünya da Ay gibi iki hareket yapar. Kendi ekseni etrafında batıdan doğuya dönmesi yaklaşık 24 saat sürer; bu harekete dönme denir ve gece ile gündüz bu sayede oluşur.",
            "Dünya'nın Güneş etrafındaki dolanma hareketi 365 gün 6 saat sürer ve bir yıl olarak kabul edilir. Her dört yılda bir artan 6 saatler birleşerek şubat ayını 29 gün yapar.",
            "Ay, Dünya etrafında dolanırken Dünya ile birlikte Güneş'in etrafında da dolanır. Üç gök cisminin hacimleri karşılaştırıldığında Güneş en büyük, Ay en küçüktür. Dünya'nın hacmi Ay'ın yaklaşık 50 katıdır.",
            "Bu hareketleri ve büyüklükleri bir model ile gösterebiliriz: Güneş için büyük bir top, Dünya için bir mandalina, Ay için bir nohut kullanarak dönme ve dolanma hareketlerini canlandırabiliriz."
          ],
          sorular: [
            S("Gece ve gündüzün oluşmasının nedeni nedir?", ["Dünya'nın kendi ekseni etrafında dönmesi", "Dünya'nın Güneş etrafında dolanması", "Ay'ın Dünya etrafında dolanması", "Ay'ın evreleri"], "Dönme hareketi 24 saat sürer, gece-gündüzü oluşturur."),
            S("Hacimleri büyükten küçüğe sıralayınca hangisi doğrudur?", ["Güneş – Dünya – Ay", "Dünya – Güneş – Ay", "Güneş – Ay – Dünya", "Ay – Dünya – Güneş"], "Güneş en büyük, Ay en küçüktür."),
            S("Dünya'nın Güneş etrafında bir tam dolanma süresi ne kadardır?", ["365 gün 6 saat", "24 saat", "29,5 gün", "27,3 gün"], "Bu süre bir yıldır.")
          ]
        }
      ]
    },
    {
      id: "f2", ad: "Kuvveti Tanıyalım",
      konular: [
        {
          id: "f2k1", ad: "Kuvvet ve Kuvvetin Ölçülmesi", video: "_9YWYPF_9FI",
          ozet: ["Kuvvet: itme ya da çekme etkisi.", "Kuvvet cisimlerde hareket, yön, sürat ve şekil değişikliği yapabilir.", "Kuvvet dinamometre ile ölçülür; birimi Newton (N).", "Dinamometrede esnek bir yay vardır; yay ne kadar uzarsa kuvvet o kadar büyüktür.", "Dinamometre yayı kalınlaştıkça ölçebileceği kuvvet artar."],
          anlatim: [
            "Bir cisme uygulanan itme ya da çekme etkisine kuvvet denir. Kapıyı açarken iteriz ya da çekeriz; topa vururken iteriz. Kuvvet duran bir cismi hareket ettirebilir, hareket eden cismi durdurabilir, yönünü ya da süratini değiştirebilir, şeklini bozabilir.",
            "Kuvvetin büyüklüğü dinamometre ile ölçülür. Kuvvetin birimi, bilim insanı Isaac Newton'un adından gelen newtondur ve N harfiyle gösterilir.",
            "Dinamometrenin içinde esnek bir yay bulunur. Ucuna asılan cisim ya da uygulanan kuvvet yayı uzatır; uzama miktarı ölçeğin üzerinden okunur. Kuvvet büyüdükçe yay daha fazla uzar.",
            "Farklı dinamometrelerin ölçebildiği en büyük kuvvet farklıdır. Yayı kalın ve sert olan dinamometre büyük kuvvetleri, ince yaylı olan küçük kuvvetleri ölçer. Basit malzemelerle (lastik, kâğıt bardak, cetvel) kendi dinamometremizi yapabiliriz."
          ],
          sorular: [
            S("Kuvvetin birimi hangisidir?", ["Newton", "Kilogram", "Metre", "Litre"], "Kuvvet birimi Newton (N)'dur."),
            S("Kuvvet ölçmek için kullanılan araç hangisidir?", ["Dinamometre", "Termometre", "Eşit kollu terazi", "Barometre"], "Dinamometrede esnek bir yay bulunur."),
            S("Hangisi kuvvetin etkilerinden biri değildir?", ["Cismin renginin değişmesi", "Cismin şeklinin değişmesi", "Cismin hareket yönünün değişmesi", "Duran cismin harekete geçmesi"], "Kuvvet rengi değiştirmez."),
            S("Daha büyük kuvvetleri ölçebilen dinamometrenin yayı nasıl olmalıdır?", ["Kalın ve sert", "İnce ve yumuşak", "Kısa ve ince", "Plastik"], "Kalın yaylar büyük kuvvetlerle uzar.")
          ]
        },
        {
          id: "f2k2", ad: "Kütle ve Ağırlık", video: "DOvd0xsgGR4",
          ozet: ["Kütle: değişmeyen madde miktarı; eşit kollu terazi ile ölçülür; birimi kg, g.", "Ağırlık: kütleye etki eden yer çekimi kuvveti; dinamometre ile ölçülür; birimi N.", "Kütle her yerde aynıdır, ağırlık yere göre değişir.", "Ay'da ağırlık Dünya'dakinin yaklaşık 1/6'sıdır.", "Kutuplarda ağırlık Ekvator'dan biraz fazladır."],
          anlatim: [
            "Kütle, bir cismin içerdiği madde miktarıdır. Eşit kollu terazi ile ölçülür ve birimi kilogram (kg) veya gramdır (g). Bir cismin kütlesi Dünya'da, Ay'da ya da uzayda aynıdır, değişmez.",
            "Ağırlık ise bir cisme etki eden yer çekimi kuvvetidir. Kuvvet olduğu için dinamometre ile ölçülür ve birimi newtondur (N). Dünya'da yaklaşık 1 kg kütleli bir cismin ağırlığı 10 N'dur.",
            "Yer çekimi her yerde aynı değildir, bu yüzden ağırlık bulunduğumuz yere göre değişir. Ay'ın çekimi Dünya'nın yaklaşık altıda biri olduğu için Ay'da ağırlığımız altıda bire düşer; kütlemiz ise aynı kalır.",
            "Dünya'da da ağırlık yere göre biraz değişir: Kutuplarda ağırlık en fazla, Ekvator'da daha azdır. Deniz seviyesinden yükseldikçe ağırlık azalır."
          ],
          sorular: [
            S("Kütle ile ilgili hangisi doğrudur?", ["Eşit kollu terazi ile ölçülür.", "Birimi newtondur.", "Ay'da azalır.", "Bir kuvvettir."], "Kütle terazi ile ölçülür, birimi kg'dır, her yerde aynıdır."),
            S("Dünya'da 60 kg kütlesi olan bir astronotun Ay'daki kütlesi kaç kg'dır?", ["60", "10", "360", "0"], "Kütle değişmez."),
            S("Ağırlığın birimi hangisidir?", ["Newton", "Kilogram", "Gram", "Litre"], "Ağırlık bir kuvvettir: N."),
            S("Hangisinde bir cismin ağırlığı en azdır?", ["Ay'da", "Kuzey Kutbu'nda", "Ekvator'da", "Deniz kenarında"], "Ay'ın çekimi Dünya'nınkinin yaklaşık altıda biridir.")
          ]
        },
        {
          id: "f2k3", ad: "Sürtünme Kuvveti", video: "rv6Sj3_i0Sg",
          ozet: ["Sürtünme: birbirine temas eden yüzeyler arasında harekete zıt yönde oluşan kuvvet.", "Pürüzlü yüzeyde sürtünme fazla, az pürüzlü yüzeyde azdır.", "Havada hava direnci, suda su direnci oluşur.", "Faydaları: yürümek, fren yapmak, kibrit yakmak.", "Zararları: aşınma, ısınma, enerji kaybı. Azaltmak için yağlama, cilalama, tekerlek, aerodinamik şekil."],
          anlatim: [
            "Birbirine temas eden iki yüzey arasında harekete zıt yönde oluşan kuvvete sürtünme kuvveti denir. Yerde kayan bir top bir süre sonra durur, çünkü sürtünme kuvveti hareketini yavaşlatır.",
            "Sürtünme yüzeyin pürüzlülüğüne bağlıdır. Halı gibi pürüzlü yüzeylerde sürtünme fazla, buz ve cam gibi az pürüzlü yüzeylerde azdır. Bu yüzden buzda kolayca kayarız.",
            "Hava ve su da hareket eden cisimlere zıt yönde kuvvet uygular. Havanın uyguladığına hava direnci, suyun uyguladığına su direnci denir. Paraşüt hava direncini artırarak yavaş inmemizi sağlar. Balıkların, uçakların ve hızlı trenlerin sivri (aerodinamik) şekli dirençleri azaltır.",
            "Sürtünme olmasaydı yürüyemez, araçları frenleyemez, kibrit yakamazdık. Ancak sürtünme makine parçalarını aşındırır ve ısıtır. Sürtünmeyi azaltmak için yağlama, cilalama, tekerlek ve rulman kullanılır; artırmak için kışın lastiklere zincir takılır, yollara kum serpilir."
          ],
          sorular: [
            S("Sürtünme kuvvetinin yönü nasıldır?", ["Harekete zıt yönde", "Hareketle aynı yönde", "Her zaman yukarı doğru", "Her zaman aşağı doğru"], "Sürtünme hareketi zorlaştırır."),
            S("Hangisi sürtünmeyi azaltmaya yönelik bir uygulamadır?", ["Kapı menteşesinin yağlanması", "Kışın lastiklere zincir takılması", "Buzlu yola kum serpilmesi", "Ayakkabı tabanının tırtıklı yapılması"], "Yağlama sürtünmeyi azaltır."),
            S("Paraşütün yavaş inmesini sağlayan kuvvet hangisidir?", ["Hava direnci", "Su direnci", "Yer çekimi", "Mıknatıs kuvveti"], "Geniş paraşüt hava direncini artırır."),
            S("Hangisi sürtünmenin faydalarından biridir?", ["Yolda kaymadan yürüyebilmek", "Makine parçalarının aşınması", "Araba lastiklerinin eskimesi", "Ayakkabı tabanının aşınması"], "Sürtünme sayesinde yürüyebiliriz.")
          ]
        }
      ]
    },
    {
      id: "f3", ad: "Canlıların Yapısına Yolculuk",
      konular: [
        {
          id: "f3k1", ad: "Hücre ve Organeller", video: "vVtiD-C53bI",
          ozet: ["Hücre: canlıların yapı taşı; mikroskopla görülür.", "Temel kısımlar: hücre zarı, sitoplazma, çekirdek.", "Bitki hücresinde hücre duvarı ve kloroplast vardır, hayvan hücresinde yoktur.", "Mitokondri: enerji üretir · Koful: depolama · Ribozom: protein üretir.", "Hücre → doku → organ → sistem → organizma"],
          anlatim: [
            "Bütün canlılar hücrelerden oluşur. Hücre, canlıların en küçük yapı birimidir ve çoğu gözle görülemeyecek kadar küçüktür; ancak mikroskopla incelenebilir. Bakteri gibi bazı canlılar tek hücreli, insan ve bitkiler ise çok hücrelidir.",
            "Hücrenin üç temel kısmı vardır: Hücre zarı hücreyi çevreler ve madde giriş çıkışını kontrol eder. Sitoplazma hücrenin içini dolduran sıvıdır; organeller burada bulunur. Çekirdek hücrenin yönetim merkezidir ve kalıtsal bilgiyi taşır.",
            "Hücrede farklı görevleri olan küçük yapılara organel denir: Mitokondri besinlerden enerji üretir, ribozom protein üretir, koful su ve atık maddeleri depolar. Bitki hücrelerinde ayrıca hücreyi dıştan saran sağlam bir hücre duvarı ve fotosentez yapan kloroplast bulunur. Bitki hücreleri genellikle köşeli, hayvan hücreleri yuvarlak görünür.",
            "Benzer hücreler bir araya gelerek doku, dokular organ, organlar sistem, sistemler de organizmayı (canlıyı) oluşturur. Örneğin kas hücreleri → kas dokusu → kalp → dolaşım sistemi → insan."
          ],
          sorular: [
            S("Hangisi yalnızca bitki hücresinde bulunur?", ["Kloroplast", "Çekirdek", "Hücre zarı", "Mitokondri"], "Kloroplast fotosentez yapar; hayvan hücresinde yoktur."),
            S("Hücrenin yönetim merkezi olan kısım hangisidir?", ["Çekirdek", "Sitoplazma", "Koful", "Hücre zarı"], "Çekirdek kalıtsal bilgiyi taşır ve hücreyi yönetir."),
            S("Doğru sıralama hangisidir?", ["Hücre → doku → organ → sistem → organizma", "Doku → hücre → organ → sistem → organizma", "Hücre → organ → doku → sistem → organizma", "Organizma → sistem → hücre → doku → organ"], "En küçük birim hücredir."),
            S("Hücrede enerji üreten organel hangisidir?", ["Mitokondri", "Ribozom", "Koful", "Kloroplast"], "Mitokondri hücrenin enerji santralidir.")
          ]
        },
        {
          id: "f3k2", ad: "Destek ve Hareket Sistemi", video: "Mw6iRfOCPZE",
          ozet: ["İskelet: kemik, kıkırdak ve eklemlerden oluşur; vücuda destek ve koruma sağlar.", "Kemik çeşitleri: uzun (uyluk), kısa (bilek), yassı (kafatası, kürek).", "Eklemler: oynar (diz, dirsek), yarı oynar (omurga), oynamaz (kafatası).", "Kas çeşitleri: iskelet kası (isteğe bağlı), düz kas (mide), kalp kası.", "Sağlık için: dengeli beslenme, spor, doğru oturma, ağır çanta taşımama."],
          anlatim: [
            "Vücudumuzun dik durmasını, hareket etmesini ve iç organlarımızın korunmasını destek ve hareket sistemi sağlar. Bu sistem iskelet ve kaslardan oluşur.",
            "İskeleti kemikler, kıkırdaklar ve eklemler oluşturur. Kemikler şekillerine göre uzun (kol ve bacak kemikleri), kısa (el ve ayak bilekleri) ve yassı (kafatası, kaburga, kürek) kemiklerdir. Kıkırdak ise kulak kepçesi ve burun ucunda bulunan esnek bir dokudur.",
            "Kemiklerin birleştiği yerlere eklem denir. Diz ve dirsek gibi oynar eklemler geniş hareket sağlar; omurlar arasındaki yarı oynar eklemler az hareket eder; kafatası kemikleri arasındaki eklemler oynamaz.",
            "Kaslar kasılıp gevşeyerek hareketi sağlar. İskelet kasları isteğimizle çalışır (kol, bacak). Düz kaslar mide ve bağırsaklarda isteğimiz dışında çalışır. Kalp kası ise hiç durmadan, isteğimiz dışında çalışır. Sistemimizin sağlığı için süt ürünleri tüketmeli, düzenli spor yapmalı, dik oturmalı ve ağır çanta taşımamalıyız."
          ],
          sorular: [
            S("İsteğimiz dışında çalışan ve hiç yorulmayan kas çeşidi hangisidir?", ["Kalp kası", "İskelet kası", "Kol kası", "Bacak kası"], "Kalp kası ömür boyu durmadan çalışır."),
            S("Kafatası kemikleri arasındaki eklem çeşidi hangisidir?", ["Oynamaz eklem", "Oynar eklem", "Yarı oynar eklem", "Menteşe eklem"], "Kafatası kemikleri hareket etmez."),
            S("Kulak kepçesini oluşturan esnek yapı hangisidir?", ["Kıkırdak", "Uzun kemik", "Yassı kemik", "Düz kas"], "Kıkırdak esnek bir destek dokusudur."),
            S("Hangisi destek ve hareket sistemi sağlığı için yanlış bir davranıştır?", ["Ağır çantayı tek omuzda taşımak", "Düzenli spor yapmak", "Süt ürünleri tüketmek", "Dik oturmak"], "Ağır yük omurgaya zarar verir.")
          ]
        }
      ]
    },
    {
      id: "f4", ad: "Işığın Dünyası",
      konular: [
        {
          id: "f4k1", ad: "Işığın Yayılması ve Maddeler", video: "nWnuKZdmT_0",
          ozet: ["Işık kaynaktan her yöne doğrusal (düz) yollarla yayılır.", "Doğal ışık kaynakları: Güneş, yıldızlar, ateş böceği. Yapay: ampul, mum, el feneri.", "Saydam madde: ışığın tamamına yakınını geçirir (cam, hava, su).", "Yarı saydam: bir kısmını geçirir (buzlu cam, tül perde, yağlı kâğıt).", "Saydam olmayan (opak): ışığı geçirmez (tahta, metal, taş)."],
          anlatim: [
            "Işık, bir kaynaktan çıkar ve her yöne doğru düz çizgiler hâlinde yayılır. Bulutların arasından süzülen güneş ışınları ya da karanlık bir odaya giren ışık huzmesi bunun kanıtıdır.",
            "Kendiliğinden ışık yayan cisimlere ışık kaynağı denir. Güneş, yıldızlar ve ateş böceği doğal; ampul, mum ve el feneri yapay ışık kaynaklarıdır. Ay ise ışık kaynağı değildir, Güneş ışığını yansıtır.",
            "Maddeler ışığı geçirme durumlarına göre üçe ayrılır. Işığı büyük ölçüde geçiren maddeler saydamdır: cam, temiz su, hava. Arkalarındaki cisimler net görünür.",
            "Işığın bir kısmını geçiren maddeler yarı saydamdır: buzlu cam, tül perde, yağlı kâğıt. Arkalarındaki cisimler bulanık görünür. Işığı hiç geçirmeyen maddeler saydam olmayan (opak) maddelerdir: tahta, metal, karton, insan vücudu."
          ],
          sorular: [
            S("Hangisi yarı saydam bir maddedir?", ["Buzlu cam", "Pencere camı", "Tahta", "Demir"], "Buzlu cam ışığın bir kısmını geçirir."),
            S("Hangisi doğal ışık kaynağıdır?", ["Ateş böceği", "El feneri", "Mum", "Ampul"], "Ateş böceği kendiliğinden ışık üretir."),
            S("Ay ile ilgili hangisi doğrudur?", ["Işık kaynağı değildir, Güneş ışığını yansıtır.", "Doğal ışık kaynağıdır.", "Yapay ışık kaynağıdır.", "Kendi ışığını üretir."], "Ay'ın kendi ışığı yoktur."),
            S("Işığın doğrusal yayıldığını gösteren olay hangisidir?", ["Bulut arasından süzülen güneş ışınlarının düz görünmesi", "Gökkuşağının oluşması", "Suyun kaynaması", "Rüzgârın esmesi"], "Işık huzmeleri düz çizgiler hâlinde görünür.")
          ]
        },
        {
          id: "f4k2", ad: "Tam Gölge", video: "FmqXKrXhrRk",
          ozet: ["Gölge: ışığın ulaşamadığı karanlık bölge.", "Tam gölge için: ışık kaynağı + saydam olmayan cisim + ekran.", "Gölgenin şekli cismin şekline benzer.", "Kaynak cisme yaklaşırsa ya da cisim ekrandan uzaklaşırsa gölge büyür.", "Gölge, ışığın doğrusal yayılmasının kanıtıdır."],
          anlatim: [
            "Saydam olmayan bir cisim ışığın yolunu kestiğinde arkasında ışık almayan karanlık bir bölge oluşur. Bu bölgeye tam gölge denir. Gölge, ışığın düz çizgiler hâlinde yayıldığının bir kanıtıdır.",
            "Tam gölge oluşması için üç şey gerekir: bir ışık kaynağı, ışığı geçirmeyen (opak) bir cisim ve gölgenin düştüğü bir yüzey (ekran). Saydam cisimlerin gölgesi oluşmaz.",
            "Gölgenin şekli, cismin ışığa bakan yüzünün şekline benzer. Gölgenin rengi cismin renginden bağımsızdır; her zaman karanlıktır.",
            "Gölgenin büyüklüğü uzaklıklara bağlıdır: Işık kaynağı cisme yaklaştırılırsa gölge büyür, uzaklaştırılırsa küçülür. Cisim ekrana yaklaştırılırsa gölge küçülür. Gün içinde Güneş'in konumu değiştiği için gölgelerimizin boyu ve yönü değişir; öğle vakti gölgemiz en kısadır."
          ],
          sorular: [
            S("Tam gölge oluşması için hangisi gerekli değildir?", ["Saydam cisim", "Işık kaynağı", "Saydam olmayan cisim", "Ekran"], "Saydam cisimler ışığı geçirir, gölge oluşturmaz."),
            S("Işık kaynağı cisme yaklaştırılırsa gölge nasıl değişir?", ["Büyür", "Küçülür", "Değişmez", "Kaybolur"], "Kaynak yaklaştıkça cisim daha çok ışığı keser."),
            S("Kırmızı bir topun gölgesi ne renk olur?", ["Karanlık (siyah)", "Kırmızı", "Pembe", "Beyaz"], "Gölge her zaman karanlıktır."),
            S("Gün içinde gölgemizin en kısa olduğu zaman hangisidir?", ["Öğle vakti", "Sabah erken", "Akşamüstü", "Gün batımı"], "Öğlen Güneş en tepededir.")
          ]
        }
      ]
    },
    {
      id: "f5", ad: "Maddenin Doğası",
      konular: [
        {
          id: "f5k1", ad: "Maddenin Tanecikli Yapısı", video: "UeARNxHjIfM",
          ozet: ["Madde çok küçük taneciklerden oluşur; tanecikler arasında boşluk vardır ve tanecikler hareket eder.", "Katı: tanecikler çok yakın, titreşir; belli şekli ve hacmi var.", "Sıvı: tanecikler birbiri üzerinden kayar; şekli yok, hacmi belli.", "Gaz: tanecikler çok uzak ve hızlı; şekli ve hacmi belli değil.", "Gazlar sıkıştırılabilir, katı ve sıvılar neredeyse sıkıştırılamaz."],
          anlatim: [
            "Kütlesi ve hacmi olan her şey maddedir. Bütün maddeler gözle göremeyeceğimiz kadar küçük taneciklerden oluşur. Tanecikler arasında boşluklar bulunur ve tanecikler sürekli hareket eder.",
            "Katılarda tanecikler birbirine çok yakın ve düzenlidir; yalnızca bulundukları yerde titreşirler. Bu yüzden katıların belirli bir şekli ve hacmi vardır.",
            "Sıvılarda tanecikler arasında katılara göre biraz daha fazla boşluk vardır ve tanecikler birbiri üzerinden kayabilir. Sıvılar akar ve konuldukları kabın şeklini alır; ancak hacimleri belirlidir.",
            "Gazlarda tanecikler arasında çok fazla boşluk vardır ve tanecikler hızla, her yöne hareket eder. Gazlar bulundukları kabı tamamen doldurur, belirli bir şekilleri ve hacimleri yoktur. Tanecikler arası boşluk fazla olduğu için gazlar sıkıştırılabilir; şırınganın ucunu kapatıp pistonu ittiğimizde hava sıkışır."
          ],
          sorular: [
            S("Tanecikleri arasındaki boşluk en fazla olan hâl hangisidir?", ["Gaz", "Katı", "Sıvı", "Hepsi eşit"], "Gaz tanecikleri birbirinden çok uzaktır."),
            S("Belirli bir hacmi olan ama belirli bir şekli olmayan maddeler hangi hâldedir?", ["Sıvı", "Katı", "Gaz", "Plazma"], "Sıvılar kabın şeklini alır, hacimleri değişmez."),
            S("Hangisi kolayca sıkıştırılabilir?", ["Hava", "Su", "Demir", "Taş"], "Gazlar sıkıştırılabilir."),
            S("Katılarda tanecikler nasıl hareket eder?", ["Bulundukları yerde titreşir", "Birbiri üzerinden kayar", "Her yöne hızla hareket eder", "Hiç hareket etmez"], "Katı tanecikleri titreşim hareketi yapar.")
          ]
        },
        {
          id: "f5k2", ad: "Isı ve Sıcaklık", video: "h__uSGcittA",
          ozet: ["Isı: sıcaklıkları farklı maddeler arasında aktarılan enerji; kalorimetre kabı ile ölçülür; birimi joule (J), kalori.", "Sıcaklık: maddenin ne kadar sıcak/soğuk olduğunu gösterir; termometre ile ölçülür; birimi °C.", "Isı sıcak maddeden soğuk maddeye akar.", "Sıcaklıklar eşitlenince ısı alışverişi durur (ısıl denge).", "Isı alan maddenin sıcaklığı artar, ısı verenin azalır."],
          anlatim: [
            "Günlük hayatta ısı ve sıcaklık sözcüklerini aynı anlamda kullanırız; ancak fen bilimlerinde farklı kavramlardır. Sıcaklık bir maddenin ne kadar sıcak ya da soğuk olduğunu gösterir. Termometre ile ölçülür, birimi santigrat derecedir (°C).",
            "Isı ise sıcaklıkları farklı maddeler arasında aktarılan enerjidir. Birimi joule (J) veya kaloridir, kalorimetre kabı ile ölçülür. Isı bir enerji, sıcaklık ise bir ölçüm değeridir.",
            "Isı her zaman sıcaklığı yüksek olan maddeden sıcaklığı düşük olana doğru akar. Sıcak çaya konulan soğuk kaşık ısınır; çay biraz soğur.",
            "Sıcaklıkları farklı iki sıvı karıştırıldığında sıcak olan ısı verir, soğuk olan ısı alır. Bu ısı alışverişi sıcaklıklar eşitlenene kadar sürer; buna ısıl denge (termal denge) denir. Karışımın son sıcaklığı iki sıcaklığın arasında bir değerdir."
          ],
          sorular: [
            S("Sıcaklık hangi araçla ölçülür?", ["Termometre", "Kalorimetre kabı", "Dinamometre", "Terazi"], "Sıcaklık termometreyle ölçülür."),
            S("Isının birimi hangisidir?", ["Joule", "Santigrat derece", "Newton", "Kilogram"], "Isı bir enerjidir: joule veya kalori."),
            S("40 °C su ile 20 °C su karıştırılıyor. Karışımın sıcaklığı hangisi olabilir?", ["30 °C", "60 °C", "15 °C", "45 °C"], "Son sıcaklık iki değer arasındadır."),
            S("Isı alışverişi ne zaman durur?", ["Sıcaklıklar eşitlendiğinde", "Sıcak madde donunca", "Soğuk madde kaynayınca", "Hiçbir zaman durmaz"], "Isıl dengeye ulaşınca ısı akışı durur.")
          ]
        },
        {
          id: "f5k3", ad: "Isı Etkisiyle Hâl Değişimi", video: "Jejn51NgjY8",
          ozet: ["Erime: katı → sıvı (ısı alır) · Donma: sıvı → katı (ısı verir)", "Buharlaşma: sıvı → gaz (ısı alır), her sıcaklıkta olur.", "Kaynama: sıvının her yerinde hızlı buharlaşma.", "Yoğuşma: gaz → sıvı (ısı verir).", "Süblimleşme: katı → gaz (naftalin) · Kırağılaşma: gaz → katı (kırağı)"],
          anlatim: [
            "Maddeler ısı alıp verdiğinde hâl değiştirebilir. Katı bir madde ısı alarak sıvı hâle geçerse buna erime denir: güneşte eriyen dondurma. Sıvı bir madde ısı vererek katı hâle geçerse buna donma denir: buzlukta suyun buz olması.",
            "Sıvının ısı alarak gaz hâline geçmesine buharlaşma denir. Buharlaşma her sıcaklıkta olur; ıslak çamaşırların kuruması bir buharlaşmadır. Sıvının her yerinden hızlı buharlaşmasına ise kaynama denir; su deniz seviyesinde 100 °C'de kaynar.",
            "Gaz hâlindeki maddenin ısı vererek sıvıya dönüşmesine yoğuşma denir. Soğuk bir bardağın dışındaki su damlaları ve kışın camların buğulanması yoğuşmaya örnektir.",
            "Bazı katılar sıvı hâle geçmeden doğrudan gaza dönüşür: buna süblimleşme denir (naftalinin küçülmesi). Gazın doğrudan katıya dönüşmesine kırağılaşma denir (soğuk sabahlarda bitkiler üzerinde oluşan kırağı)."
          ],
          sorular: [
            S("Kışın camların buğulanması hangi hâl değişimine örnektir?", ["Yoğuşma", "Buharlaşma", "Erime", "Süblimleşme"], "Su buharı soğuk camda sıvıya dönüşür."),
            S("Hangisi ısı alarak gerçekleşir?", ["Erime", "Donma", "Yoğuşma", "Kırağılaşma"], "Erime, buharlaşma, kaynama, süblimleşme ısı alarak olur."),
            S("Naftalinin zamanla küçülmesi hangi olaydır?", ["Süblimleşme", "Erime", "Kaynama", "Donma"], "Naftalin katıdan doğrudan gaza geçer."),
            S("Buharlaşma ile kaynama arasındaki farklardan biri hangisidir?", ["Buharlaşma her sıcaklıkta, kaynama belirli bir sıcaklıkta olur.", "Buharlaşma ısı verir, kaynama ısı alır.", "Kaynama yalnızca katılarda olur.", "Buharlaşma yalnızca 100 °C'de olur."], "Buharlaşma her sıcaklıkta yüzeyden olur.")
          ]
        },
        {
          id: "f5k4", ad: "Isı İletimi ve Yalıtım", video: "33Rjg8omZDA",
          ozet: ["Isıyı iyi ileten maddeler: metaller (bakır, alüminyum, demir).", "Isıyı iyi iletmeyen (yalıtkan) maddeler: tahta, plastik, cam yünü, strafor, yün.", "Tencere metal, sapı plastik/tahta yapılır.", "Isı yalıtımı: binalarda mantolama, çift cam, termos.", "Yalıtım enerji tasarrufu sağlar, çevreyi korur."],
          anlatim: [
            "Maddeler ısıyı iletme özelliklerine göre farklıdır. Metaller ısıyı çok iyi iletir: Sıcak çorbaya konulan metal kaşık kısa sürede ısınır. Bakır, alüminyum ve demir iyi ısı iletkenleridir.",
            "Tahta, plastik, cam yünü, strafor, yün ve hava ısıyı iyi iletmez; bunlara ısı yalıtkanı denir. Tencerelerin gövdesi ısıyı iletmesi için metal, sapı ise elimizi yakmaması için plastik ya da tahtadan yapılır.",
            "Isının istenmeyen yerlere geçişini azaltmaya ısı yalıtımı denir. Binaların dış duvarlarının yalıtım malzemesiyle kaplanması (mantolama), çift camlı pencereler ve termoslar ısı yalıtımına örnektir. Kışın kat kat giyinmemiz de aradaki hava sayesinde ısı kaybını azaltır.",
            "Isı yalıtımı sayesinde evlerimizi ısıtmak için daha az yakıt kullanırız. Bu hem aile bütçesine katkı sağlar hem de çevre kirliliğini azaltır."
          ],
          sorular: [
            S("Hangisi ısıyı en iyi ileten maddedir?", ["Bakır", "Tahta", "Plastik", "Yün"], "Metaller iyi ısı iletkenidir."),
            S("Tencere saplarının plastikten yapılmasının nedeni nedir?", ["Plastiğin ısıyı iyi iletmemesi", "Plastiğin ucuz olması", "Plastiğin ağır olması", "Plastiğin ısıyı iyi iletmesi"], "Elimizin yanmaması için yalıtkan kullanılır."),
            S("Hangisi ısı yalıtımına örnek değildir?", ["Çaydanlığın metal yapılması", "Binaların mantolanması", "Çift camlı pencere kullanılması", "Termos kullanılması"], "Metal çaydanlık ısının iletilmesi için yapılır.")
          ]
        }
      ]
    },
    {
      id: "f6", ad: "Yaşamımızdaki Elektrik",
      konular: [
        {
          id: "f6k1", ad: "Devre Elemanları ve Devre Şeması", video: "LtnUaokv2p8",
          ozet: ["Basit devre: pil, ampul, bağlantı kablosu, anahtar.", "Pil: enerji kaynağı · Ampul: ışık verir · Kablo: elektriği iletir · Anahtar: devreyi açar/kapatır.", "Duy ve pil yatağı semboller gösterilmez (sembolü olmayan elemanlar).", "Devre şeması: devre elemanlarının sembollerle çizilmesi.", "Anahtar kapalı → devre tamamlanır → ampul yanar."],
          anlatim: [
            "Elektrik enerjisinin bir kaynaktan çıkıp tekrar kaynağa dönmesi için izlediği yola elektrik devresi denir. Basit bir elektrik devresi pil, ampul, bağlantı kabloları ve anahtardan oluşur.",
            "Pil devreye elektrik enerjisi sağlar. Ampul elektrik enerjisini ışık enerjisine dönüştürür. Bağlantı kabloları elektriği iletir. Anahtar ise devreyi açıp kapatmaya yarar: Anahtar kapalıyken devre tamamlanır ve ampul yanar; açık olduğunda ampul söner.",
            "Devreleri her seferinde resim olarak çizmek zordur. Bu yüzden her devre elemanı bir sembolle gösterilir. Sembollerle çizilen devreye devre şeması denir. Pil, ampul, kablo ve anahtarın sembolleri vardır; duy ve pil yatağı ise devrede kolaylık sağlayan elemanlardır, sembolleri yoktur.",
            "Devre şemasına bakarak gerçek devreyi kurabilir, kurduğumuz devrenin şemasını çizebiliriz."
          ],
          sorular: [
            S("Basit elektrik devresinde ampulün görevi nedir?", ["Elektrik enerjisini ışık enerjisine dönüştürmek", "Enerji kaynağı olmak", "Devreyi açıp kapatmak", "Elektriği iletmek"], "Ampul ışık verir."),
            S("Devrede sembolü olmayan eleman hangisidir?", ["Duy", "Pil", "Ampul", "Anahtar"], "Duy ve pil yatağının sembolü yoktur."),
            S("Anahtar açık olduğunda ne olur?", ["Devre tamamlanmaz, ampul yanmaz.", "Ampul daha parlak yanar.", "Pil biter.", "Ampul sönük yanar."], "Açık anahtar devreyi keser."),
            S("Devre elemanlarının sembollerle gösterildiği çizime ne denir?", ["Devre şeması", "Harita", "Grafik", "Tablo"], "Sembollerle çizilen devre şemasıdır.")
          ]
        },
        {
          id: "f6k2", ad: "Ampul Parlaklığını Etkileyen Değişkenler", video: "7CAJr_-4ixk",
          ozet: ["Pil sayısı artarsa ampul parlaklığı artar.", "Seri bağlı ampul sayısı artarsa her ampulün parlaklığı azalır.", "Pil sayısı azalırsa parlaklık azalır.", "Deneyde yalnızca bir değişken değiştirilir (bağımsız değişken), diğerleri sabit tutulur."],
          anlatim: [
            "Bir devredeki ampulün ne kadar parlak yanacağı bazı değişkenlere bağlıdır. Bunları incelemek için deney yaparken yalnızca bir değişkeni değiştirir, diğerlerini sabit tutarız.",
            "Devreye eklenen pil sayısı arttıkça (piller arka arkaya bağlandığında) ampule daha fazla enerji ulaşır ve ampul daha parlak yanar. Pil sayısı azaldığında parlaklık azalır.",
            "Devreye arka arkaya (seri) ampul eklendikçe enerji ampuller arasında paylaşılır ve her bir ampulün parlaklığı azalır.",
            "Örneğin 2 pil ve 1 ampulün olduğu devre, 1 pil ve 1 ampulün olduğu devreden daha parlaktır. 1 pil ve 2 ampulün olduğu devrede ise ampuller daha sönük yanar. Bir hipotez kurup ('Pil sayısı artarsa parlaklık artar') deneyle sınayabiliriz."
          ],
          sorular: [
            S("Ampulün daha parlak yanması için ne yapılmalıdır?", ["Pil sayısı artırılmalı", "Ampul sayısı artırılmalı", "Pil sayısı azaltılmalı", "Kablolar kısaltılmalı"], "Pil sayısı arttıkça parlaklık artar."),
            S("Bir devreye seri bağlı ikinci bir ampul eklenirse ilk ampulün parlaklığı nasıl değişir?", ["Azalır", "Artar", "Değişmez", "Ampul patlar"], "Enerji iki ampul arasında paylaşılır."),
            S("Pil sayısının ampul parlaklığına etkisini inceleyen deneyde hangisi sabit tutulmalıdır?", ["Ampul sayısı", "Pil sayısı", "Ampul parlaklığı", "Hiçbiri"], "Değiştirilen pil sayısıdır; ampul sayısı sabit kalmalıdır.")
          ]
        }
      ]
    },
    {
      id: "f7", ad: "Sürdürülebilir Yaşam ve Geri Dönüşüm",
      konular: [
        {
          id: "f7k1", ad: "Evsel Atıklar ve Geri Dönüşüm", video: "qjKiNG4Hg3o",
          ozet: ["Evsel atık: evlerde oluşan çöpler (kâğıt, cam, plastik, metal, organik, pil).", "Geri dönüşüm: atıkların işlenerek yeniden hammadde olarak kullanılması.", "Geri dönüştürülebilir: kâğıt, karton, cam, plastik, metal. Atık pil ayrı toplanır.", "Sıfır atık: önle → azalt → yeniden kullan → geri dönüştür → geri kazan → uzaklaştır.", "İleri dönüşüm: atığı daha değerli bir ürüne dönüştürme."],
          anlatim: [
            "Evlerimizde her gün kâğıt, plastik şişe, cam kavanoz, konserve kutusu, meyve kabuğu gibi atıklar oluşur. Bunlara evsel atık denir. Atıkların hepsini çöpe atmak doğanın kirlenmesine ve kaynakların tükenmesine yol açar.",
            "Kâğıt, karton, cam, plastik ve metal atıklar geri dönüşüm kutularında ayrı toplanarak fabrikalarda işlenir ve yeniden hammadde olur. Buna geri dönüşüm denir. Örneğin bir ton atık kâğıdın geri dönüşümüyle yaklaşık 17 ağacın kesilmesi önlenir. Atık piller ve elektronik atıklar çok zararlıdır; özel kutularda toplanmalıdır.",
            "Meyve-sebze kabukları gibi organik atıklar kompost yapılarak toprağa gübre olarak kazandırılabilir. Bir ürünü atmadan tekrar kullanmaya yeniden kullanım, atığı daha değerli bir ürüne dönüştürmeye ileri dönüşüm denir (eski kot pantolondan çanta yapmak).",
            "Sıfır atık yaklaşımında öncelik sırası şöyledir: önce atık oluşmasını önlemek, sonra azaltmak, yeniden kullanmak, geri dönüştürmek, geri kazanmak ve en son çare olarak uzaklaştırmak. Bez çanta kullanmak ve matara taşımak atığı önler."
          ],
          sorular: [
            S("Hangisi geri dönüşüm kutusuna atılmaz?", ["Meyve kabuğu", "Gazete", "Cam şişe", "Konserve kutusu"], "Organik atıklar kompost yapılır."),
            S("Sıfır atık yaklaşımında ilk ve en önemli adım hangisidir?", ["Atık oluşumunu önlemek", "Geri dönüştürmek", "Uzaklaştırmak", "Yakmak"], "En iyi atık hiç oluşmayan atıktır."),
            S("Eski bir kot pantolondan çanta yapmak hangisine örnektir?", ["İleri dönüşüm", "Uzaklaştırma", "Kompost", "Yakma"], "Atık daha değerli bir ürüne dönüştürülmüş."),
            S("Atık piller neden ayrı toplanmalıdır?", ["İçindeki zararlı maddeler toprağı ve suyu kirlettiği için", "Ağır oldukları için", "Kâğıttan yapıldıkları için", "Yeniden şarj edilebildikleri için"], "Piller ağır metaller içerir.")
          ]
        }
      ]
    }
  ]
};
})();
