// 6. sınıf Din Kültürü soru üreteçleri (ortak-uretec.js'ten sonra yüklenir)
(function () {
  const U = window.URETEC, { pick, buyuk, soru, tiplerden, eslestir, siniflandir, ifadeler } = window.UR;

  U.d1k1 = tiplerden([
    eslestir([["sıdk", "doğru sözlü olmak"], ["emanet", "güvenilir olmak"], ["fetanet", "akıllı ve zeki olmak"], ["ismet", "günah işlememek"], ["tebliğ", "Allah'ın mesajını eksiksiz iletmek"]],
      (a) => `Peygamberlerin "${a}" özelliği ne anlama gelir?`, (b) => `Peygamberlerin "${b}" özelliğine ne ad verilir?`, (a, b) => `${buyuk(a)}: ${b}.`),
    ifadeler(["Peygamberler Allah'ın mesajını insanlara iletir.", "Peygamberler de insandır.", "İlk peygamber Hz. Âdem'dir.", "Son peygamber Hz. Muhammed'dir.", "Kur'an'da 25 peygamberin adı geçer.", "Peygamberler yaşayışlarıyla insanlara örnek olur."],
      ["Peygamberler melektir.", "Peygamberler hiç yemek yemez.", "İlk peygamber Hz. Musa'dır.", "Kur'an'da 100 peygamberin adı geçer.", "Peygamberler mesajın bir kısmını gizleyebilir.", "Peygamberler sadece zenginlere gönderilmiştir."], "Peygamberler")
  ]);

  U.d1k2 = tiplerden([
    eslestir([["Tevrat", "Hz. Musa"], ["Zebur", "Hz. Davut"], ["İncil", "Hz. İsa"], ["Kur'an-ı Kerim", "Hz. Muhammed"]],
      (a) => `${a} hangi peygambere indirilmiştir?`, (b) => `${b}'e indirilen ilahi kitap hangisidir?`, (a, b) => `${a} → ${b}.`),
    ifadeler(["Vahiy meleği Cebrail'dir.", "Kur'an-ı Kerim son ilahi kitaptır.", "Kur'an-ı Kerim 114 sureden oluşur.", "Kur'an'ın ilk suresi Fatiha'dır.", "Kur'an'ın son suresi Nas'tır.", "Bazı peygamberlere suhuf gönderilmiştir."],
      ["Vahiy meleği Mikail'dir.", "Kur'an-ı Kerim ilk ilahi kitaptır.", "Kur'an-ı Kerim 40 sureden oluşur.", "Kur'an bir günde tamamen indirilmiştir.", "Zebur Hz. İsa'ya indirilmiştir.", "Tevrat Hz. Muhammed'e indirilmiştir."], "İlahi kitaplar")
  ]);

  U.d1k3 = ifadeler(["Felak Suresi Kur'an'ın 113. suresidir.", "Felak Suresi 5 ayettir.", "Felak Suresi Mekke'de inmiştir.", "Felak Suresi kötülüklerden Allah'a sığınmayı anlatır.", "Felak ve Nas surelerine Muavvizeteyn denir.", "'Felak' sabah aydınlığı anlamına gelir.", "Surede kıskançlık (haset) bir kötülük olarak anılır."],
    ["Felak Suresi Kur'an'ın ilk suresidir.", "Felak Suresi 100 ayettir.", "Felak Suresi oruç ibadetini anlatır.", "'Felak' gece karanlığı demektir.", "Felak Suresi Fil Ordusu'nu anlatır.", "Muavvizeteyn Fatiha ile Felak surelerine denir.", "Surede kıskançlık övülür."], "Felak Suresi");

  U.d2k1 = tiplerden([
    eslestir([["mukabele", "Kur'an'ı karşılıklı okuma ve takip etme"], ["teravih", "Ramazan gecelerinde kılınan namaz"], ["sahur", "imsaktan önce yenen yemek"], ["iftar", "akşam orucun açılması"], ["fitre", "bayramdan önce ihtiyaç sahiplerine verilen sadaka"], ["imsak", "orucun başladığı vakit"]],
      (a) => `"${buyuk(a)}" ne anlama gelir?`, (b) => `"${buyuk(b)}" için hangi kavram kullanılır?`, (a, b) => `${buyuk(a)}: ${b}.`),
    ifadeler(["Kur'an Ramazan ayında indirilmeye başlanmıştır.", "Ramazan'a Kur'an ayı da denir.", "Kur'an'ın inişi Kadir Gecesi'nde başlamıştır.", "Ramazan Bayramı üç gün sürer.", "Ramazan hicri takvimin dokuzuncu ayıdır."],
      ["Kur'an Kurban Bayramı'nda indirilmeye başlanmıştır.", "Ramazan Bayramı bir hafta sürer.", "Teravih namazı sabah kılınır.", "Sahur akşam yemeğidir.", "Ramazan hicri takvimin ilk ayıdır."], "Ramazan")
  ]);

  U.d2k2 = tiplerden([
    siniflandir({ "orucun kazandırdığı": ["sabır", "irade", "şükür", "empati", "yardımlaşma", "paylaşma", "dayanışma"], "orucun kazandırmadığı": ["bencillik", "israf", "kibir", "tembellik", "kıskançlık"] },
      (g) => g === "orucun kazandırdığı" ? "Hangisi orucun insana kazandırdığı değerlerden biridir?" : "Hangisi orucun insana kazandırdığı değerlerden biri değildir?", (d, g) => `${buyuk(d)} ${g === "orucun kazandırdığı" ? "orucun kazandırdığı değerlerdendir" : "orucun kazandırdığı bir değer değildir; oruç bu davranışlardan uzaklaştırır"}.`),
    ifadeler(["Oruç İslam'ın beş şartından biridir.", "Hasta olanlar oruçlarını sonra tutabilir.", "Ergenlik çağına girmemiş çocuklar oruçla yükümlü değildir.", "Oruç sabrı ve iradeyi güçlendirir.", "Oruç tutan kişi ihtiyaç sahiplerinin hâlini daha iyi anlar.", "Sonradan tutulan oruca kaza orucu denir."],
      ["Oruç sadece yemek yememektir, su serbesttir.", "Hastaların oruç tutması zorunludur.", "Küçük çocuklar oruçla yükümlüdür.", "Oruç bencilliği artırır.", "Oruç toplumda yardımlaşmayı azaltır.", "Kaza orucu bayram günü tutulur."], "Oruç")
  ]);

  U.d3k1 = tiplerden([
    siniflandir({ "doğru sözlülüğe uygun": ["hatasını dürüstçe kabul etmek", "verdiği sözü tutmak", "emanete sahip çıkmak", "bulduğu cüzdanı sahibine ulaştırmak", "sınavda kopya çekmemek"], "doğru sözlülüğe aykırı": ["suçu arkadaşına atmak", "sözünü tutmamak", "yalan söylemek", "kopya çekmek", "bulduğu parayı sahibini aramadan almak"] },
      (g) => `Hangisi ${g} bir davranıştır?`, (d, g) => `"${buyuk(d)}" ${g} bir davranıştır.`),
    siniflandir({ "merhametli": ["sokak hayvanlarına su bırakmak", "yaşlı komşunun alışverişine yardım etmek", "hasta arkadaşını ziyaret etmek", "kuşlar için kışın yem bırakmak", "üzgün arkadaşını teselli etmek"], "merhametsiz": ["hayvanlara taş atmak", "arkadaşıyla alay etmek", "yardım isteyeni görmezden gelmek", "çiçekleri koparıp atmak", "küçük kardeşini kırmak"] },
      (g) => `Hangisi ${g} bir davranıştır?`, (d, g) => `"${buyuk(d)}" ${g} bir davranıştır.`)
  ]);

  U.d3k2 = tiplerden([
    siniflandir({ "nezaket ifadesi": ["Lütfen", "Teşekkür ederim", "Özür dilerim", "Kolay gelsin", "Afiyet olsun", "Günaydın"], "kaba ifade": ["Çekil oradan", "Bana ne", "Sus artık", "Sana ne", "Uğraşamam seninle"] },
      (g) => g === "nezaket ifadesi" ? "Hangisi bir nezaket ifadesidir?" : "Hangisi nezakete uygun olmayan bir ifadedir?", (d, g) => `"${d}" ${g === "nezaket ifadesi" ? "bir nezaket ifadesidir" : "kaba bir ifadedir"}.`),
    siniflandir({ "adaba uygun": ["odaya girmeden kapıyı çalmak", "sırasını beklemek", "toplu taşımada yaşlılara yer vermek", "büyüklerin sözünü kesmemek", "selam vermek"], "adaba aykırı": ["sıraya girmeden öne geçmek", "büyüklerin sözünü kesmek", "izin almadan odaya girmek", "yemekte bağırarak konuşmak", "selam vermeden geçmek"] },
      (g) => `Hangisi ${g} bir davranıştır?`, (d, g) => `"${buyuk(d)}" ${g} bir davranıştır.`),
    siniflandir({ "vatan sevgisine uygun": ["parktaki banklara zarar vermemek", "bayrağımıza saygı göstermek", "ülkesinin gelişmesi için çalışmak", "tarihî eserleri korumak", "ormanları korumak"], "vatan sevgisine aykırı": ["duvarlara yazı yazmak", "çöpleri yere atmak", "tarihî eserlere zarar vermek", "ağaçları kesmek", "ortak eşyaları kırmak"] },
      (g) => `Hangisi ${g} bir davranıştır?`, (d, g) => `"${buyuk(d)}" ${g} bir davranıştır.`)
  ]);

  U.d4k1 = tiplerden([
    eslestir([["babası", "Abdullah"], ["annesi", "Âmine"], ["sütannesi", "Halime"], ["dedesi", "Abdülmuttalib"], ["onu yanına alan amcası", "Ebu Talib"]],
      (a) => `Hz. Muhammed'in ${a} kimdir?`, (b) => `${b}, Hz. Muhammed'in nesidir?`, (a, b) => `Hz. Muhammed'in ${a}: ${b}.`),
    ifadeler(["Hz. Muhammed 571 yılında doğmuştur.", "Hz. Muhammed Mekke'de doğmuştur.", "Babası o doğmadan önce vefat etmiştir.", "Annesi o altı yaşındayken vefat etmiştir.", "Doğduğu yıla Fil Yılı denir.", "Çocukluğunda çobanlık yapmıştır."],
      ["Hz. Muhammed Medine'de doğmuştur.", "Hz. Muhammed 622 yılında doğmuştur.", "Babası onu yetiştirmiştir.", "Annesi o 40 yaşındayken vefat etmiştir.", "Sütannesi Hz. Hatice'dir.", "Dedesi onu hiç tanımamıştır."], "Hz. Muhammed'in çocukluğu")
  ]);

  U.d4k2 = ifadeler(["Hz. Muhammed gençliğinde ticaretle uğraşmıştır.", "Mekkeliler ona Muhammedü'l-Emin demiştir.", "Hilfu'l-Fudul'a katılmıştır.", "Hacerülesved anlaşmazlığını adaletle çözmüştür.", "25 yaşında Hz. Hatice ile evlenmiştir.", "İlk vahiy Hira Mağarası'nda gelmiştir.", "Peygamberliği 40 yaşında başlamıştır."],
    ["Hz. Muhammed gençliğinde hiç çalışmamıştır.", "Muhammedü'l-Emin 'cesur Muhammed' demektir.", "Hilfu'l-Fudul bir ticaret şirketidir.", "Hacerülesved anlaşmazlığında taşı tek bir kabileye vermiştir.", "Hz. Hatice ile 40 yaşında evlenmiştir.", "İlk vahiy Kâbe'nin içinde gelmiştir.", "Peygamberliği 15 yaşında başlamıştır."], "Hz. Muhammed'in gençliği");

  U.d4k3 = ifadeler(["Fil Suresi Kur'an'ın 105. suresidir.", "Fil Suresi 5 ayettir.", "Fil Ordusu'nun komutanı Ebrehe'dir.", "Ebrehe Kâbe'yi yıkmak istemiştir.", "Allah, Ebabil kuşlarıyla Kâbe'yi korumuştur.", "Fil Olayı Hz. Muhammed'in doğduğu yıl yaşanmıştır."],
    ["Fil Suresi Kur'an'ın ilk suresidir.", "Fil Ordusu'nun komutanı Ebu Talib'dir.", "Ebrehe Kâbe'yi onarmak istemiştir.", "Fil Ordusu Kâbe'yi yıkmayı başarmıştır.", "Fil Olayı Hz. Muhammed 40 yaşındayken yaşanmıştır.", "Fil Suresi oruç ibadetini anlatır."], "Fil Suresi");

  U.d5k1 = tiplerden([
    eslestir([["minare", "ezanın okunduğu yüksek kule"], ["mihrap", "imamın namaz kıldırdığı bölüm"], ["minber", "hutbenin okunduğu merdivenli yer"], ["şadırvan", "abdest alınan çeşme"], ["kubbe", "caminin yarım küre biçimli çatısı"], ["mahya", "minareler arasına gerilen ışıklı yazı"], ["hat", "güzel yazı sanatı"], ["tezhip", "altın ve boyayla süsleme sanatı"], ["ebru", "su üzerinde desen oluşturma sanatı"], ["sadaka taşı", "ihtiyaç sahiplerinin görünmeden yardım alabildiği taş"]],
      (a) => `"${buyuk(a)}" nedir?`, (b) => `"${buyuk(b)}" hangi kavramla ifade edilir?`, (a, b) => `${buyuk(a)}: ${b}.`),
    () => {
      const [c, e] = pick([["Şehzade Camii", "çıraklık eseri"], ["Süleymaniye Camii", "kalfalık eseri"], ["Selimiye Camii", "ustalık eseri"]]);
      return soru(`Mimar Sinan'ın "${e}" olarak tanımladığı cami hangisidir?`, c, ["Şehzade Camii", "Süleymaniye Camii", "Selimiye Camii", "Sultanahmet Camii"].filter((x) => x !== c), `${c}: ${e}.`);
    }
  ]);

  U.d5k2 = tiplerden([
    eslestir([["ilahi", "Allah sevgisini anlatan, ezgiyle okunan şiir"], ["naat", "Hz. Muhammed'i öven şiir"], ["münacat", "Allah'a yalvarış ve dua şiiri"], ["tevhid", "Allah'ın birliğini anlatan şiir"], ["mevlid", "Hz. Muhammed'in doğumunu anlatan eser"]],
      (a) => `"${buyuk(a)}" nedir?`, (b) => `"${buyuk(b)}" hangi türdür?`, (a, b) => `${buyuk(a)}: ${b}.`),
    eslestir([["ezan", "namaz vakitlerini bildirmek için okunur"], ["salâ", "cuma, bayram ve vefat haberlerinde okunur"], ["tekbir", "bayramlarda Allah'ın yüceliğini anmak için getirilir"], ["ilahi", "Allah sevgisini ezgiyle anlatır"]],
      (a) => `"${buyuk(a)}" ne zaman ya da ne amaçla okunur?`, (b) => `Hangisi ${b}?`, (a, b) => `${buyuk(a)}: ${b}.`)
  ]);
})();
