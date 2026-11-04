window.ICERIK = window.ICERIK || {};
// 6. sınıf Din Kültürü ve Ahlak Bilgisi - Maarif Modeli ünite sırası
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.din = {
  ad: "Din Kültürü", ikon: "🕌", renk: "#0ea5a4",
  uniteler: [
    {
      id: "d1", ad: "Peygamber ve İlahi Kitap İnancı",
      konular: [
        {
          id: "d1k1", ad: "Peygamberler ve Özellikleri",
          ozet: ["Peygamber: Allah'ın mesajlarını insanlara ileten seçilmiş kişi", "Sıdk: doğruluk · Emanet: güvenilirlik", "Fetanet: akıllılık, zekâ · İsmet: günah işlememe", "Tebliğ: Allah'ın mesajını eksiksiz iletme", "Kur'an'da adı geçen peygamber sayısı: 25", "İlk peygamber Hz. Âdem, son peygamber Hz. Muhammed"],
          anlatim: [
            "Peygamberler, Allah'ın emir ve yasaklarını insanlara bildirmek için seçtiği özel kişilerdir. İslam inancına göre ilk peygamber Hz. Âdem, son peygamber Hz. Muhammed'dir. Kur'an-ı Kerim'de adı geçen peygamber sayısı 25'tir.",
            "Peygamberlerin ortak özellikleri vardır: Sıdk (doğru sözlü olmak), emanet (güvenilir olmak), fetanet (akıllı ve zeki olmak), ismet (günah işlememek) ve tebliğ (Allah'tan aldıkları mesajı insanlara eksiksiz ulaştırmak).",
            "Peygamberlerin temel görevleri; Allah'tan gelen vahyi insanlara bildirmek, bu mesajı açıklamak ve yaşayışlarıyla insanlara örnek olmaktır.",
            "Peygamberler de insandır; yer, içer, uyur, çalışır ve aile hayatı yaşarlar. Bu sayede insanlar onları kolayca örnek alabilir."
          ],
          video: "sjL3MT1eseI",
          sorular: [
            S("Peygamberlerin güvenilir olmasını ifade eden özellik hangisidir?", ["Emanet", "Fetanet", "Tebliğ", "İsmet"], "Emanet, güvenilirlik demektir."),
            S("Peygamberlerin Allah'ın mesajını insanlara eksiksiz iletmesine ne denir?", ["Tebliğ", "Sıdk", "Fetanet", "Emanet"], "Tebliğ, mesajı eksiksiz ulaştırmaktır."),
            S("Kur'an-ı Kerim'de adı geçen peygamber sayısı kaçtır?", ["25", "10", "40", "100"], "Kur'an'da 25 peygamberin adı geçer."),
            S("İslam inancına göre ilk peygamber kimdir?", ["Hz. Âdem", "Hz. Nuh", "Hz. İbrahim", "Hz. Musa"], "İlk insan ve ilk peygamber Hz. Âdem'dir."),
            S("Peygamberlerin insanlara örnek olabilmesinin sebebi hangisidir?", ["Onların da insan olması", "Hiç uyumamaları", "Yemek yememeleri", "Sadece meleklerle konuşmaları"], "Peygamberler de insandır; bu yüzden örnek alınabilirler.")
          ]
        },
        {
          id: "d1k2", ad: "Vahiy ve İlahi Kitaplar",
          ozet: ["Vahiy: Allah'ın mesajlarını peygamberlere bildirmesi", "Vahiy meleği: Cebrail", "Tevrat → Hz. Musa", "Zebur → Hz. Davut", "İncil → Hz. İsa", "Kur'an-ı Kerim → Hz. Muhammed (son ilahi kitap)", "Suhuf: bazı peygamberlere gönderilen küçük kitapçıklar (sayfalar)"],
          anlatim: [
            "Allah'ın emir, yasak ve öğütlerini peygamberlerine bildirmesine vahiy denir. Vahiy genellikle vahiy meleği Cebrail aracılığıyla iletilmiştir. Vahyin amacı insanlara doğru yolu göstermek, iyiyi ve kötüyü öğretmektir.",
            "Allah'ın peygamberlerine gönderdiği dört büyük kitap vardır: Tevrat Hz. Musa'ya, Zebur Hz. Davut'a, İncil Hz. İsa'ya ve Kur'an-ı Kerim Hz. Muhammed'e indirilmiştir.",
            "Bunların dışında bazı peygamberlere suhuf (sayfalar) denilen küçük kitapçıklar gönderilmiştir. Hz. Âdem, Hz. Şit, Hz. İdris ve Hz. İbrahim'e suhuf gönderildiği bilinmektedir.",
            "Kur'an-ı Kerim son ilahi kitaptır. 23 yılda parça parça indirilmiştir. 114 sureden oluşur; ilk suresi Fatiha, son suresi Nas'tır."
          ],
          video: "sjL3MT1eseI",
          sorular: [
            S("Tevrat hangi peygambere indirilmiştir?", ["Hz. Musa", "Hz. İsa", "Hz. Davut", "Hz. Muhammed"], "Tevrat Hz. Musa'ya indirilmiştir."),
            S("Vahiy meleğinin adı nedir?", ["Cebrail", "Mikail", "İsrafil", "Azrail"], "Vahyi peygamberlere Cebrail getirmiştir."),
            S("Kur'an-ı Kerim kaç sureden oluşur?", ["114", "100", "99", "40"], "Kur'an-ı Kerim 114 suredir."),
            S("Bazı peygamberlere gönderilen küçük kitapçıklara ne ad verilir?", ["Suhuf", "Sure", "Ayet", "Hadis"], "Bu küçük kitapçıklara suhuf denir."),
            S("Kur'an-ı Kerim kaç yılda indirilmeyi tamamlamıştır?", ["Yaklaşık 23 yılda", "Bir günde", "Bir ayda", "Yüz yılda"], "Kur'an yaklaşık 23 yılda parça parça indirildi.")
          ]
        },
        {
          id: "d1k3", ad: "Felak Suresi ve Anlamı",
          ozet: ["Felak Suresi Kur'an'ın 113. suresidir.", "Mekke'de inmiştir, 5 ayettir.", "Konusu: her türlü kötülükten Allah'a sığınmak", "Felak ve Nas surelerine birlikte 'Muavvizeteyn' (sığınma sureleri) denir.", "Mesajı: Kötülüklere karşı Allah'a güvenmek ve sığınmak"],
          anlatim: [
            "Felak Suresi, Kur'an-ı Kerim'in 113. suresidir. Mekke döneminde inmiştir ve 5 ayetten oluşur. 'Felak' sabah aydınlığı, şafak anlamına gelir.",
            "Surenin anlamı özetle şöyledir: De ki: Yarattığı şeylerin kötülüğünden, karanlığı çöktüğü zaman gecenin kötülüğünden, düğümlere üfleyenlerin kötülüğünden ve kıskandığı zaman kıskancın kötülüğünden sabahın Rabbine sığınırım.",
            "Felak ve Nas surelerine birlikte 'Muavvizeteyn' yani 'sığınma sureleri' denir. Bu sureler insana her türlü kötülüğe karşı Allah'a sığınmayı ve O'na güvenmeyi öğretir.",
            "Surede kıskançlığın (haset) bir kötülük olarak anılması, bu duygudan uzak durmamız gerektiğini de hatırlatır."
          ],
          video: "t_bhWSpFcsU",
          sorular: [
            S("Felak Suresi'nin ana konusu nedir?", ["Kötülüklerden Allah'a sığınmak", "Oruç ibadeti", "Peygamberlerin hayatı", "Hac ibadeti"], "Felak Suresi kötülüklere karşı Allah'a sığınmayı anlatır."),
            S("Felak Suresi kaç ayettir?", ["5", "3", "7", "10"], "Felak Suresi 5 ayettir."),
            S("Felak ve Nas surelerine birlikte ne ad verilir?", ["Muavvizeteyn", "Fatiha", "Elif Lam Mim", "Besmele"], "Muavvizeteyn 'sığınma sureleri' demektir."),
            S("'Felak' kelimesinin anlamı nedir?", ["Sabah aydınlığı, şafak", "Gece", "Yıldız", "Deniz"], "Felak, sabah aydınlığı anlamına gelir.")
          ]
        }
      ]
    },
    {
      id: "d2", ad: "Ramazan ve Oruç",
      konular: [
        {
          id: "d2k1", ad: "Ramazan Ayı ve Kur'an",
          ozet: ["Kur'an'ın indirilmesi Ramazan ayında, Kadir Gecesi'nde başladı.", "Bu yüzden Ramazan'a 'Kur'an ayı' denir.", "Mukabele: Ramazan'da Kur'an'ı karşılıklı okuma geleneği", "Teravih: Ramazan gecelerinde kılınan namaz", "Sahur: imsaktan önce yenen yemek · İftar: orucun açılması", "Fitre (fıtır sadakası): bayramdan önce ihtiyaç sahiplerine verilir."],
          anlatim: [
            "Ramazan, hicri takvimin dokuzuncu ayıdır. Kur'an-ı Kerim'in indirilmesi Ramazan ayında, Kadir Gecesi'nde başlamıştır. Bu nedenle Ramazan'a 'Kur'an ayı' da denir.",
            "Ramazan'da camilerde ve evlerde mukabele okunur. Mukabelede bir kişi Kur'an'ı okurken diğerleri dinler ve takip eder. Ramazan gecelerinde teravih namazı kılınır.",
            "Oruç tutanlar imsak vaktinden önce sahur yemeği yer, akşam ezanıyla iftar ederek oruçlarını açar. İftar sofraları paylaşmanın ve birlikteliğin güzel örnekleridir.",
            "Ramazan'ın sonunda ihtiyaç sahiplerine fitre (fıtır sadakası) verilir ve ardından üç gün süren Ramazan Bayramı kutlanır. Bayramda büyükler ziyaret edilir, küsler barışır."
          ],
          video: "djetXggCEyI",
          sorular: [
            S("Kur'an-ı Kerim'in indirilmeye başlandığı gece hangisidir?", ["Kadir Gecesi", "Mevlit Kandili", "Regaip Kandili", "Berat Kandili"], "Kur'an Kadir Gecesi'nde indirilmeye başlandı."),
            S("Ramazan'da Kur'an'ın karşılıklı okunup takip edilmesine ne denir?", ["Mukabele", "Teravih", "Sahur", "İftar"], "Mukabele, karşılıklı Kur'an okuma geleneğidir."),
            S("Orucu açmak için yenen akşam yemeğine ne ad verilir?", ["İftar", "Sahur", "İmsak", "Fitre"], "Orucun açılmasına iftar denir."),
            S("Ramazan'a 'Kur'an ayı' denmesinin sebebi nedir?", ["Kur'an'ın bu ayda indirilmeye başlanması", "Bu ayda bayram olması", "Bu ayın en uzun ay olması", "Bu ayda hacca gidilmesi"], "Kur'an'ın inişi Ramazan'da başlamıştır.")
          ]
        },
        {
          id: "d2k2", ad: "Oruç İbadeti ve Kazandırdıkları",
          ozet: ["Oruç: imsaktan akşama kadar yemeden, içmeden durmak", "Oruç İslam'ın beş şartından biridir.", "Kazandırdıkları: sabır, irade, empati, paylaşma, şükür", "Hastalar ve yolcular oruçlarını sonra tutabilir (kaza).", "Ergenlik çağına girmemiş çocuklar oruçla yükümlü değildir.", "Oruç toplumda yardımlaşmayı ve dayanışmayı artırır."],
          anlatim: [
            "Oruç, imsak vaktinden akşam ezanına kadar yemeyi, içmeyi ve orucu bozan davranışları terk etmektir. Ramazan orucu İslam'ın beş şartından biridir.",
            "Oruç kişiye sabrı, iradeyi ve nefsine hâkim olmayı öğretir. Aç kalmanın ne demek olduğunu yaşayan kişi, ihtiyaç sahiplerinin hâlini daha iyi anlar; yani empati kurar. Elindeki nimetlerin değerini bilir ve şükreder.",
            "Oruç toplumsal hayata da katkı sağlar: İftar sofraları paylaşılır, komşular ve akrabalar bir araya gelir, zekât ve fitre ile ihtiyaç sahiplerine yardım edilir. Böylece toplumda dayanışma güçlenir.",
            "Hasta olanlar ve yolcular oruçlarını ertelenip sonra tutabilir. Buna kaza orucu denir. Ergenlik çağına girmemiş çocuklar oruçla yükümlü değildir; ancak aileleri isterse onları kısa süreli oruçlarla alıştırabilir."
          ],
          video: "ujuRSM4D0kI",
          sorular: [
            S("Orucun bireye kazandırdığı özelliklerden biri hangisidir?", ["Sabır", "Bencillik", "İsraf", "Tembellik"], "Oruç sabrı ve iradeyi güçlendirir."),
            S("Hastalık nedeniyle tutulamayan oruçların sonra tutulmasına ne denir?", ["Kaza orucu", "Nafile oruç", "İftar", "Sahur"], "Sonradan tutulan oruca kaza orucu denir."),
            S("Oruç tutan kişinin ihtiyaç sahiplerinin hâlini daha iyi anlamasına ne denir?", ["Empati", "Kibir", "İsraf", "Haset"], "Başkasının duygularını anlamak empatidir."),
            S("Oruç İslam'ın şartlarından kaçıncısıdır?", ["Beş şarttan biridir.", "Hiçbir şartı değildir.", "Sadece Ramazan Bayramı'dır.", "Hac ile aynıdır."], "İslam'ın beş şartı: kelime-i şehadet, namaz, oruç, zekât, hac.")
          ]
        }
      ]
    },
    {
      id: "d3", ad: "Ahlaki Davranışlar",
      konular: [
        {
          id: "d3k1", ad: "Doğru Sözlülük ve Merhamet",
          ozet: ["Doğru sözlülük: sözde ve davranışta dürüst olmak", "Doğru sözlü kişiye güvenilir.", "Yalan, insanlar arasındaki güveni yok eder.", "Merhamet: başkalarının acısını hissedip yardım etmek", "Merhamet insanlara, hayvanlara ve doğaya gösterilir.", "Hz. Muhammed: 'Merhamet etmeyene merhamet olunmaz.'"],
          anlatim: [
            "Doğru sözlülük, söylediklerimizin ve davranışlarımızın gerçeğe uygun olmasıdır. Doğru sözlü insan yalan söylemez, sözünü tutar ve emanete hıyanet etmez. Hz. Muhammed peygamberliğinden önce de doğruluğu sebebiyle 'Muhammedü'l-Emin' (güvenilir Muhammed) olarak anılırdı.",
            "Yalan, insanlar arasındaki güveni yok eder. Bir kez yalan söyleyen kişiye sonraki sözlerinde de güvenilmeyebilir. Bu yüzden hatalarımızı saklamak yerine dürüstçe kabul etmeliyiz.",
            "Merhamet, başkalarının acısını yüreğinde hissetmek ve onlara yardım etmektir. Merhametli insan yaşlılara, hastalara, yetimlere, hayvanlara ve doğaya karşı şefkatli davranır.",
            "Hz. Muhammed 'Merhamet etmeyene merhamet olunmaz.' buyurmuştur. Sokak hayvanlarına su ve yiyecek bırakmak, yaşlı komşunun alışverişine yardım etmek merhametin günlük hayattaki örnekleridir."
          ],
          video: "HA5XhHZU1zg",
          sorular: [
            S("Hz. Muhammed'e peygamberliğinden önce verilen 'Muhammedü'l-Emin' lakabı ne anlama gelir?", ["Güvenilir Muhammed", "Cesur Muhammed", "Zengin Muhammed", "Bilgin Muhammed"], "Emin, güvenilir demektir."),
            S("Hangisi merhametli bir davranıştır?", ["Sokak hayvanlarına su bırakmak", "Arkadaşıyla alay etmek", "Çiçekleri koparıp atmak", "Yaşlılara yer vermemek"], "Hayvanlara şefkat göstermek merhamettir."),
            S("Yalanın toplum hayatına etkisi nedir?", ["Güveni yok eder.", "Dostlukları güçlendirir.", "İnsanları birbirine yaklaştırır.", "Hiçbir etkisi yoktur."], "Yalan güveni sarsar."),
            S("Bir hata yaptığımızda doğru sözlülüğe uygun davranış hangisidir?", ["Hatayı dürüstçe kabul etmek", "Suçu başkasına atmak", "Hatayı gizlemek", "Konuyu değiştirmek"], "Doğru sözlü kişi hatasını kabul eder.")
          ]
        },
        {
          id: "d3k2", ad: "Adap, Nezaket ve Vatan Sevgisi",
          ozet: ["Adap: toplumda uyulması gereken görgü kuralları", "Nezaket: kibar ve saygılı davranmak", "Nezaket sözleri: lütfen, teşekkür ederim, özür dilerim, kolay gelsin", "Selamlaşmak, izin istemek, sırayı beklemek adaptır.", "Vatan sevgisi: vatanı korumak, emeğe ve ortak değerlere saygı", "Kunut duaları vitir namazında okunur."],
          anlatim: [
            "Adap, toplum içinde uyulması gereken görgü kurallarıdır. Nezaket ise insanlara kibar, saygılı ve ince davranmaktır. Selam vermek, bir şey isterken 'lütfen', yardım alınca 'teşekkür ederim', hata yapınca 'özür dilerim' demek nezaketin temelidir.",
            "Başkalarının odasına girerken kapıyı çalıp izin istemek, sırayı beklemek, büyüklerin sözünü kesmemek, yemek adabına uymak ve toplu taşımada yaşlılara yer vermek güzel adap örnekleridir.",
            "Vatan, üzerinde yaşadığımız, uğrunda bedel ödenmiş, bizi bir arada tutan topraklardır. Vatan sevgisi; vatanı korumak, ortak eşyalara ve emeğe saygı göstermek, ülkesinin gelişmesi için çalışmak ve millî değerlere sahip çıkmaktır.",
            "Kunut duaları yatsı namazından sonra kılınan vitir namazında okunan iki duadır. Bu dualarda Allah'a hamd edilir, O'ndan yardım ve bağışlanma dilenir."
          ],
          video: "HA5XhHZU1zg",
          sorular: [
            S("Hangisi nezaket ifadesidir?", ["Teşekkür ederim", "Çekil oradan", "Bana ne", "Sus artık"], "Teşekkür etmek nezaketin temelidir."),
            S("Hangisi adaba uygun bir davranıştır?", ["Odaya girmeden kapıyı çalıp izin istemek", "Sıraya girmeden öne geçmek", "Büyüklerin sözünü kesmek", "Yemekte yüksek sesle konuşup bağırmak"], "İzin istemek adaptır."),
            S("Hangisi vatan sevgisinin bir göstergesidir?", ["Ortak kullanım alanlarını korumak", "Parktaki banklara zarar vermek", "Ağaçları kesmek", "Ders çalışmamak"], "Ortak eşyaları korumak vatanı sevmenin bir yoludur."),
            S("Kunut duaları hangi namazda okunur?", ["Vitir namazı", "Sabah namazı", "Cuma namazı", "Bayram namazı"], "Kunut duaları vitir namazında okunur.")
          ]
        }
      ]
    },
    {
      id: "d4", ad: "Peygamberliğinden Önce Hz. Muhammed",
      konular: [
        {
          id: "d4k1", ad: "Doğumu ve Çocukluğu",
          ozet: ["571 yılında Mekke'de doğdu (Fil Yılı).", "Babası Abdullah, o doğmadan önce vefat etti.", "Annesi Âmine, o 6 yaşındayken vefat etti.", "Sütannesi: Halime", "Dedesi Abdülmuttalib 8 yaşına kadar baktı.", "Sonra amcası Ebu Talib'in yanında büyüdü."],
          anlatim: [
            "Hz. Muhammed 571 yılında Mekke'de doğdu. Doğduğu yıl Kâbe'ye fillerle saldırı düzenlendiği için bu yıla 'Fil Yılı' denir. Mekke o dönemde önemli bir ticaret merkeziydi.",
            "Babası Abdullah, o doğmadan önce vefat etmişti. Mekke'nin bir geleneği olarak çocukluğunun ilk yıllarını çölde, sütannesi Halime'nin yanında geçirdi.",
            "Altı yaşındayken annesi Âmine'yi kaybetti. Bunun üzerine dedesi Abdülmuttalib onun bakımını üstlendi. Sekiz yaşındayken dedesi de vefat edince amcası Ebu Talib onu yanına aldı.",
            "Hz. Muhammed küçük yaşta öksüz ve yetim kalmasına rağmen ahlakı, dürüstlüğü ve çalışkanlığıyla herkesin sevgisini kazandı. Amcasına yardım etmek için çobanlık yaptı."
          ],
          video: "ua7yin0BxxE",
          sorular: [
            S("Hz. Muhammed hangi yılda doğmuştur?", ["571", "610", "622", "632"], "Hz. Muhammed 571'de, Fil Yılı'nda doğdu."),
            S("Hz. Muhammed'in sütannesinin adı nedir?", ["Halime", "Âmine", "Hatice", "Fatıma"], "Sütannesi Halime'dir."),
            S("Annesi Âmine vefat ettiğinde Hz. Muhammed'in bakımını kim üstlendi?", ["Dedesi Abdülmuttalib", "Amcası Ebu Leheb", "Sütannesi Halime", "Hz. Ebubekir"], "Önce dedesi, sonra amcası Ebu Talib baktı."),
            S("Hz. Muhammed'in doğduğu şehir hangisidir?", ["Mekke", "Medine", "Kudüs", "Şam"], "Hz. Muhammed Mekke'de doğdu.")
          ]
        },
        {
          id: "d4k2", ad: "Gençliği ve Aile Hayatı",
          ozet: ["Gençliğinde ticaretle uğraştı, dürüstlüğüyle tanındı.", "Lakabı: Muhammedü'l-Emin (güvenilir)", "Hilfu'l-Fudul (Erdemliler Topluluğu): haksızlığa uğrayanlara yardım", "Kâbe onarımında Hacerülesved anlaşmazlığını adaletle çözdü.", "25 yaşında Hz. Hatice ile evlendi.", "40 yaşında Hira Mağarası'nda ilk vahiy geldi."],
          anlatim: [
            "Hz. Muhammed gençliğinde ticaretle uğraştı. Alışverişte dürüst davrandığı, sözünü tuttuğu ve emanetleri koruduğu için Mekkeliler ona 'Muhammedü'l-Emin' yani 'güvenilir Muhammed' dediler.",
            "Gençliğinde, haksızlığa uğrayanların hakkını korumak için kurulan Hilfu'l-Fudul (Erdemliler Topluluğu) adlı birliğe katıldı. Bu, onun adalete verdiği önemi gösterir.",
            "Kâbe onarılırken Hacerülesved taşını yerine kimin koyacağı konusunda kabileler arasında anlaşmazlık çıktı. Hz. Muhammed taşı bir örtünün üzerine koydu, her kabileden bir kişinin örtünün ucundan tutmasını sağladı ve taşı kendi eliyle yerine yerleştirdi. Böylece bir kavgayı adaletle önledi.",
            "25 yaşında, ticaretteki dürüstlüğünü takdir eden Hz. Hatice ile evlendi. Mutlu bir aile hayatı oldu ve çocukları dünyaya geldi. 40 yaşına geldiğinde Hira Mağarası'nda ilk vahyi aldı ve peygamberliği başladı."
          ],
          video: "ua7yin0BxxE",
          sorular: [
            S("Hz. Muhammed'in katıldığı, haksızlığa uğrayanlara yardım eden birlik hangisidir?", ["Hilfu'l-Fudul", "Kurultay", "Ahilik", "Darü'l-Erkam"], "Hilfu'l-Fudul, Erdemliler Topluluğu demektir."),
            S("Hz. Muhammed Hz. Hatice ile kaç yaşında evlenmiştir?", ["25", "40", "15", "53"], "Hz. Muhammed 25 yaşında evlendi."),
            S("Hacerülesved olayı Hz. Muhammed'in hangi özelliğini gösterir?", ["Adaletli ve barışçı olmasını", "Zengin olmasını", "Güçlü bir asker olmasını", "Şiir yazmasını"], "Anlaşmazlığı herkesi memnun edecek şekilde çözdü."),
            S("İlk vahiy nerede gelmiştir?", ["Hira Mağarası", "Sevr Mağarası", "Kâbe'nin içi", "Medine"], "İlk vahiy Hira Mağarası'nda geldi.")
          ]
        },
        {
          id: "d4k3", ad: "Fil Suresi ve Anlamı",
          ozet: ["Fil Suresi Kur'an'ın 105. suresidir, 5 ayettir.", "Ebrehe, fillerle Kâbe'yi yıkmaya geldi.", "Allah, Ebabil kuşlarıyla bu orduyu yok etti.", "Bu olay Hz. Muhammed'in doğduğu yıl oldu (Fil Yılı).", "Mesajı: Allah kutsal mekânları korur; güç ve zorbalıkla haklı olunmaz."],
          anlatim: [
            "Fil Suresi, Kur'an-ı Kerim'in 105. suresidir. Mekke'de inmiştir ve 5 ayetten oluşur. Surede Kâbe'yi yıkmak isteyen Fil Ordusu'nun başına gelenler anlatılır.",
            "Yemen'deki Habeş valisi Ebrehe, insanların Kâbe yerine kendi yaptırdığı mabede gelmesini istedi. Bunun için fillerle donatılmış büyük bir orduyla Kâbe'yi yıkmaya geldi.",
            "Allah, Ebabil adı verilen kuş sürüleri gönderdi. Kuşların attığı taşlarla ordu yenik düştü ve Kâbe korundu. Bu olay Hz. Muhammed'in doğduğu yıl yaşandığı için o yıla 'Fil Yılı' denmiştir.",
            "Sure bize Allah'ın kutsal mekânları koruduğunu, gücüne güvenerek zorbalık yapanların sonunda kaybedeceğini öğretir."
          ],
          video: "bWPEOgIkbII",
          sorular: [
            S("Fil Ordusu'nun komutanı kimdir?", ["Ebrehe", "Ebu Talib", "Abdülmuttalib", "Ebu Cehil"], "Fil Ordusu'nun komutanı Ebrehe'dir."),
            S("Fil Ordusu'nu yok eden kuşlara ne ad verilir?", ["Ebabil", "Hüdhüd", "Anka", "Kumru"], "Surede Ebabil kuşlarından söz edilir."),
            S("Fil Ordusu'nun amacı neydi?", ["Kâbe'yi yıkmak", "Mekke'ye ticaret yapmak", "Hacca gitmek", "Medine'ye göç etmek"], "Ebrehe Kâbe'yi yıkmak istiyordu."),
            S("Fil Olayı'nın yaşandığı yıla neden 'Fil Yılı' denir?", ["Kâbe'ye fillerle saldırıldığı için", "O yıl çok fil doğduğu için", "Fillerin Mekke'ye göç ettiği için", "Fillerin ticarette kullanıldığı için"], "Saldıran orduda filler vardı.")
          ]
        }
      ]
    },
    {
      id: "d5", ad: "Kültürümüzdeki Dinî Motifler",
      konular: [
        {
          id: "d5k1", ad: "Mimari, Sanat ve Geleneklerde Dinî Motifler",
          ozet: ["Cami bölümleri: minare, kubbe, mihrap, minber, şadırvan", "Külliye: cami çevresinde medrese, imaret, hamam, çeşme gibi yapılar", "Mimar Sinan: Şehzade (çıraklık), Süleymaniye (kalfalık), Selimiye (ustalık)", "Hat: güzel yazı · Tezhip: süsleme · Ebru: su üzerinde resim", "Gelenekler: bayramlaşma, kandil, mahya, sadaka taşı"],
          anlatim: [
            "Din, bir toplumun kültürünü derinden etkiler. Mimaride bu etki özellikle camilerde görülür. Ezanın okunduğu minare, caminin tepesindeki kubbe, imamın namaz kıldırdığı mihrap, hutbe okunan minber ve abdest alınan şadırvan caminin bölümleridir.",
            "Camilerin çevresine medrese, imaret (aşevi), hamam, çeşme ve kütüphane gibi yapılar eklenerek külliyeler oluşturulmuştur. Mimar Sinan bu alanda dünyaca ünlü eserler vermiştir: Şehzade Camii'ni 'çıraklık', Süleymaniye Camii'ni 'kalfalık', Edirne'deki Selimiye Camii'ni 'ustalık' eseri olarak tanımlamıştır.",
            "Geleneksel sanatlarımızda da dinî motifler vardır: Kur'an ayetlerinin güzel yazıyla yazılmasına hat, kitapların altın ve boyalarla süslenmesine tezhip, su üzerinde desen oluşturma sanatına ebru denir.",
            "Gündelik geleneklerimizde de bu etki görülür: bayramlaşma, kandil gecelerinin kutlanması, Ramazan'da minareler arasına gerilen ışıklı yazılar (mahya) ve ihtiyaç sahiplerinin kimseye görünmeden alabilmesi için konulan sadaka taşları bunlardandır."
          ],
          video: "E5cS__UcTpY",
          sorular: [
            S("Mimar Sinan'ın 'ustalık eserim' dediği cami hangisidir?", ["Selimiye Camii", "Süleymaniye Camii", "Şehzade Camii", "Sultanahmet Camii"], "Edirne'deki Selimiye Camii ustalık eseridir."),
            S("Ramazan'da minareler arasına gerilen ışıklı yazıya ne ad verilir?", ["Mahya", "Hat", "Tezhip", "Ebru"], "Minareler arasındaki ışıklı yazılara mahya denir."),
            S("Caminin hutbe okunan bölümü hangisidir?", ["Minber", "Mihrap", "Minare", "Şadırvan"], "Hutbe minberde okunur."),
            S("Su üzerinde boyalarla desen oluşturma sanatına ne denir?", ["Ebru", "Hat", "Tezhip", "Minyatür"], "Ebru su üzerinde yapılan bir sanattır.")
          ]
        },
        {
          id: "d5k2", ad: "Edebiyat ve Musikide Dinî Motifler",
          ozet: ["İlahi: Allah sevgisini anlatan, ezgiyle okunan şiir (Yunus Emre)", "Mevlid: Hz. Muhammed'in doğumunu anlatan eser (Süleyman Çelebi)", "Naat: Hz. Muhammed'i öven şiir", "Münacat: Allah'a yalvarış, dua şiiri", "Tevhid: Allah'ın birliğini anlatan şiir", "Musiki: ezan, salâ, tekbir, ilahi"],
          anlatim: [
            "Din edebiyatımızı da zenginleştirmiştir. Allah sevgisini ve insan sevgisini anlatan, ezgiyle okunan şiirlere ilahi denir. Yunus Emre'nin ilahileri yüzyıllardır sevilerek okunmaktadır.",
            "Süleyman Çelebi'nin yazdığı Mevlid, Hz. Muhammed'in doğumunu anlatır ve bugün de özel günlerde okunur. Hz. Muhammed'i öven şiirlere naat, Allah'a yalvarış ve dua içeren şiirlere münacat, Allah'ın birliğini anlatan şiirlere tevhid denir.",
            "Musikimizde de dinî motifler önemli bir yer tutar: Namaz vakitlerini bildiren ezan, cuma ve bayram günlerinde ya da vefat haberlerinde okunan salâ, bayramlarda getirilen tekbir ve ilahiler bunlardandır.",
            "Atasözlerimiz ve deyimlerimizde de dinî kavramlar vardır: 'Kul hakkı yeme', 'Allah'a emanet ol', 'Kolay gelsin' gibi sözler günlük dilimizin parçası olmuştur."
          ],
          video: "E5cS__UcTpY",
          sorular: [
            S("Hz. Muhammed'in doğumunu anlatan Mevlid'in yazarı kimdir?", ["Süleyman Çelebi", "Yunus Emre", "Mimar Sinan", "Mevlana"], "Mevlid'i Süleyman Çelebi yazmıştır."),
            S("Hz. Muhammed'i öven şiirlere ne ad verilir?", ["Naat", "Münacat", "Tevhid", "Mersiye"], "Peygamber övgüsüne naat denir."),
            S("İlahileriyle tanınan Türk şairi kimdir?", ["Yunus Emre", "Süleyman Çelebi", "Kaşgarlı Mahmut", "Yusuf Has Hacip"], "Yunus Emre ilahileriyle tanınır."),
            S("Allah'a yalvarış ve dua içeren şiirlere ne denir?", ["Münacat", "Naat", "Ninni", "Destan"], "Münacat, Allah'a dua şiiridir.")
          ]
        }
      ]
    }
  ]
};
})();
