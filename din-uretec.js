// 6. sınıf Din Kültürü soru üreteçleri (ortak-uretec.js'ten sonra yüklenir)
(function () {
  const EK = (w, t) => { const l = String(w).toLocaleLowerCase("tr"), son = l.slice(-1), V = "aeıioöuü", v = [...l].reverse().find((c) => V.includes(c)) || "e", a2 = "aıou".includes(v) ? "a" : "e", d4 = { a: "ı", ı: "ı", o: "u", u: "u", e: "i", i: "i", ö: "ü", ü: "ü" }[v], sl = V.includes(son), st = "fstkçşhp".includes(son); return w + "'" + ({ in: (sl ? "n" : "") + d4 + "n", e: (sl ? "y" : "") + a2, i: (sl ? "y" : "") + d4, de: (st ? "t" : "d") + a2, den: (st ? "t" : "d") + a2 + "n" })[t]; };
  const U = window.URETEC, { pick, buyuk, soru, Y, tiplerden, eslestir, siniflandir, ifadeler } = window.UR;
  // Değer/davranış sınıflandırmalarında (uygun – aykırı) yanlış seçim çoğunlukla soru kökünün ters okunmasıdır (A4)
  const TERS = "d:soru kökü dikkatle okunmadı (istenenin tersi seçildi)";
  const ters = (gruplar) => Object.fromEntries(Object.entries(gruplar).map(([g, l]) => [g, l.map((v) => Y(v, TERS))]));

  U.d1k1 = tiplerden([
    eslestir([["sıdk", "doğru sözlü olmak"], ["emanet", "güvenilir olmak"], ["fetanet", "akıllı ve zeki olmak"], ["ismet", "günah işlememek"], ["tebliğ", "Allah'ın mesajını eksiksiz iletmek"]],
      (a) => `Peygamberlerin "${a}" özelliği ne anlama gelir?`, (b) => `Peygamberlerin "${b}" özelliğine ne ad verilir?`, (a, b) => `${buyuk(a)}: ${b}.`),
    ifadeler(["Peygamberler Allah'ın mesajını insanlara iletir.", "Peygamberler de insandır.", "İlk peygamber Hz. Âdem'dir.", "Son peygamber Hz. Muhammed'dir.", "Kur'an'da 25 peygamberin adı geçer.", "Peygamberler yaşayışlarıyla insanlara örnek olur."],
      [Y("Peygamberler melektir.", "k:peygamberlerin melek değil insan olduğu bilinmedi"), Y("Peygamberler hiç yemek yemez.", "k:peygamberlerin melek değil insan olduğu bilinmedi"), Y("İlk peygamber Hz. Musa'dır.", "k:ilk peygamberin Hz. Âdem olduğu bilinmedi"), Y("Kur'an'da 100 peygamberin adı geçer.", "k:Kur'an'da adı geçen peygamber sayısının 25 olduğu bilinmedi"), Y("Peygamberler mesajın bir kısmını gizleyebilir.", "k:tebliğ (mesajı eksiksiz iletme) özelliği bilinmedi"), Y("Peygamberler sadece zenginlere gönderilmiştir.", "k:peygamberlerin bütün insanlara gönderildiği bilinmedi")], "Peygamberler")
  ]);

  U.d1k2 = tiplerden([
    eslestir([["Tevrat", "Hz. Musa"], ["Zebur", "Hz. Davut"], ["İncil", "Hz. İsa"], ["Kur'an-ı Kerim", "Hz. Muhammed"]],
      (a) => `${a} hangi peygambere indirilmiştir?`, (b) => `${EK(b, "e")} indirilen ilahi kitap hangisidir?`, (a, b) => `${a} → ${b}.`),
    ifadeler(["Vahiy meleği Cebrail'dir.", "Kur'an-ı Kerim son ilahi kitaptır.", "Kur'an-ı Kerim 114 sureden oluşur.", "Kur'an'ın ilk suresi Fatiha'dır.", "Kur'an'ın son suresi Nas'tır.", "Bazı peygamberlere suhuf gönderilmiştir."],
      [Y("Vahiy meleği Mikail'dir.", "k:vahiy meleğinin Cebrail olduğu bilinmedi"), Y("Kur'an-ı Kerim ilk ilahi kitaptır.", "k:Kur'an-ı Kerim'in son ilahi kitap olduğu bilinmedi"), Y("Kur'an-ı Kerim 40 sureden oluşur.", "k:Kur'an-ı Kerim'in 114 sureden oluştuğu bilinmedi"), Y("Kur'an bir günde tamamen indirilmiştir.", "k:Kur'an'ın yaklaşık 23 yılda parça parça indirildiği bilinmedi"), Y("Zebur Hz. İsa'ya indirilmiştir.", "k:ilahi kitaplar ile indirildikleri peygamberler karıştırıldı"), Y("Tevrat Hz. Muhammed'e indirilmiştir.", "k:ilahi kitaplar ile indirildikleri peygamberler karıştırıldı")], "İlahi kitaplar")
  ]);

  U.d1k3 = ifadeler(["Felak Suresi Kur'an'ın 113. suresidir.", "Felak Suresi 5 ayettir.", "Felak Suresi Mekke'de inmiştir.", "Felak Suresi kötülüklerden Allah'a sığınmayı anlatır.", "Felak ve Nas surelerine Muavvizeteyn denir.", "'Felak' sabah aydınlığı anlamına gelir.", "Surede kıskançlık (haset) bir kötülük olarak anılır."],
    [Y("Felak Suresi Kur'an'ın ilk suresidir.", "k:Felak Suresi'nin Kur'an'ın 113. suresi olduğu bilinmedi"), Y("Felak Suresi 100 ayettir.", "k:Felak Suresi'nin 5 ayet olduğu bilinmedi"), Y("Felak Suresi oruç ibadetini anlatır.", "k:Felak Suresi'nin konusu (kötülüklerden Allah'a sığınma) bilinmedi"), Y("'Felak' gece karanlığı demektir.", "k:\"felak\" sözcüğünün sabah aydınlığı anlamına geldiği bilinmedi"), Y("Felak Suresi Fil Ordusu'nu anlatır.", "k:Felak Suresi ile Fil Suresi karıştırıldı"), Y("Muavvizeteyn Fatiha ile Felak surelerine denir.", "k:Muavvizeteyn'in Felak ve Nas sureleri olduğu bilinmedi"), Y("Surede kıskançlık övülür.", "k:surede kıskançlığın (haset) bir kötülük olarak anıldığı bilinmedi")], "Felak Suresi");

  U.d2k1 = tiplerden([
    eslestir([["mukabele", "Kur'an'ı karşılıklı okuma ve takip etme"], ["teravih", "Ramazan gecelerinde kılınan namaz"], ["sahur", "imsaktan önce yenen yemek"], ["iftar", "akşam orucun açılması"], ["fitre", "bayramdan önce ihtiyaç sahiplerine verilen sadaka"], ["imsak", "orucun başladığı vakit"]],
      (a) => `"${buyuk(a)}" ne anlama gelir?`, (b) => `"${buyuk(b)}" için hangi kavram kullanılır?`, (a, b) => `${buyuk(a)}: ${b}.`),
    ifadeler(["Kur'an Ramazan ayında indirilmeye başlanmıştır.", "Ramazan'a Kur'an ayı da denir.", "Kur'an'ın inişi Kadir Gecesi'nde başlamıştır.", "Ramazan Bayramı üç gün sürer.", "Ramazan hicri takvimin dokuzuncu ayıdır."],
      [Y("Kur'an Kurban Bayramı'nda indirilmeye başlanmıştır.", "k:Kur'an'ın Ramazan ayında (Kadir Gecesi) indirilmeye başlandığı bilinmedi"), Y("Ramazan Bayramı bir hafta sürer.", "k:Ramazan Bayramı'nın üç gün sürdüğü bilinmedi"), Y("Teravih namazı sabah kılınır.", "k:teravih namazının Ramazan gecelerinde kılındığı bilinmedi"), Y("Sahur akşam yemeğidir.", "k:sahur ile iftar karıştırıldı"), Y("Ramazan hicri takvimin ilk ayıdır.", "k:Ramazan'ın hicri takvimin dokuzuncu ayı olduğu bilinmedi")], "Ramazan")
  ]);

  U.d2k2 = tiplerden([
    siniflandir(ters({ "orucun kazandırdığı": ["sabır", "irade", "şükür", "empati", "yardımlaşma", "paylaşma", "dayanışma"], "orucun kazandırmadığı": ["bencillik", "israf", "kibir", "tembellik", "kıskançlık"] }),
      (g) => g === "orucun kazandırdığı" ? "Hangisi orucun insana kazandırdığı değerlerden biridir?" : "Hangisi orucun insana kazandırdığı değerlerden biri değildir?", (d, g) => `${buyuk(d)} ${g === "orucun kazandırdığı" ? "orucun kazandırdığı değerlerdendir" : "orucun kazandırdığı bir değer değildir; oruç bu davranışlardan uzaklaştırır"}.`),
    ifadeler(["Oruç İslam'ın beş şartından biridir.", "Hasta olanlar oruçlarını sonra tutabilir.", "Ergenlik çağına girmemiş çocuklar oruçla yükümlü değildir.", "Oruç sabrı ve iradeyi güçlendirir.", "Oruç tutan kişi ihtiyaç sahiplerinin hâlini daha iyi anlar.", "Sonradan tutulan oruca kaza orucu denir."],
      [Y("Oruç sadece yemek yememektir, su serbesttir.", "k:oruçta yemek gibi içmenin de yasak olduğu bilinmedi"), Y("Hastaların oruç tutması zorunludur.", "k:hastaların oruçlarını sonra (kaza) tutabileceği bilinmedi"), Y("Küçük çocuklar oruçla yükümlüdür.", "k:ergenlik çağına girmemiş çocukların oruçla yükümlü olmadığı bilinmedi"), Y("Oruç bencilliği artırır.", "k:orucun paylaşma ve yardımlaşmayı güçlendirdiği bilinmedi"), Y("Oruç toplumda yardımlaşmayı azaltır.", "k:orucun paylaşma ve yardımlaşmayı güçlendirdiği bilinmedi"), Y("Kaza orucu bayram günü tutulur.", "k:bayram günlerinde oruç tutulmadığı bilinmedi")], "Oruç")
  ]);

  U.d3k1 = tiplerden([
    siniflandir(ters({ "doğru sözlülüğe uygun": ["hatasını dürüstçe kabul etmek", "verdiği sözü tutmak", "emanete sahip çıkmak", "bulduğu cüzdanı sahibine ulaştırmak", "sınavda kopya çekmemek"], "doğru sözlülüğe aykırı": ["suçu arkadaşına atmak", "sözünü tutmamak", "yalan söylemek", "kopya çekmek", "bulduğu parayı sahibini aramadan almak"] }),
      (g) => `Hangisi ${g} bir davranıştır?`, (d, g) => `"${buyuk(d)}" ${g} bir davranıştır.`),
    siniflandir(ters({ "merhametli": ["sokak hayvanlarına su bırakmak", "yaşlı komşunun alışverişine yardım etmek", "hasta arkadaşını ziyaret etmek", "kuşlar için kışın yem bırakmak", "üzgün arkadaşını teselli etmek"], "merhametsiz": ["hayvanlara taş atmak", "arkadaşıyla alay etmek", "yardım isteyeni görmezden gelmek", "çiçekleri koparıp atmak", "küçük kardeşini kırmak"] }),
      (g) => `Hangisi ${g} bir davranıştır?`, (d, g) => `"${buyuk(d)}" ${g} bir davranıştır.`)
  ]);

  U.d3k2 = tiplerden([
    siniflandir(ters({ "nezaket ifadesi": ["Lütfen", "Teşekkür ederim", "Özür dilerim", "Kolay gelsin", "Afiyet olsun", "Günaydın"], "kaba ifade": ["Çekil oradan", "Bana ne", "Sus artık", "Sana ne", "Uğraşamam seninle"] }),
      (g) => g === "nezaket ifadesi" ? "Hangisi bir nezaket ifadesidir?" : "Hangisi nezakete uygun olmayan bir ifadedir?", (d, g) => `"${d}" ${g === "nezaket ifadesi" ? "bir nezaket ifadesidir" : "kaba bir ifadedir"}.`),
    siniflandir(ters({ "adaba uygun": ["odaya girmeden kapıyı çalmak", "sırasını beklemek", "toplu taşımada yaşlılara yer vermek", "büyüklerin sözünü kesmemek", "selam vermek"], "adaba aykırı": ["sıraya girmeden öne geçmek", "büyüklerin sözünü kesmek", "izin almadan odaya girmek", "yemekte bağırarak konuşmak", "selam vermeden geçmek"] }),
      (g) => `Hangisi ${g} bir davranıştır?`, (d, g) => `"${buyuk(d)}" ${g} bir davranıştır.`),
    siniflandir(ters({ "vatan sevgisine uygun": ["parktaki banklara zarar vermemek", "bayrağımıza saygı göstermek", "ülkesinin gelişmesi için çalışmak", "tarihî eserleri korumak", "ormanları korumak"], "vatan sevgisine aykırı": ["duvarlara yazı yazmak", "çöpleri yere atmak", "tarihî eserlere zarar vermek", "ağaçları kesmek", "ortak eşyaları kırmak"] }),
      (g) => `Hangisi ${g} bir davranıştır?`, (d, g) => `"${buyuk(d)}" ${g} bir davranıştır.`)
  ]);

  U.d4k1 = tiplerden([
    eslestir([["babası", "Abdullah"], ["annesi", "Âmine"], ["sütannesi", "Halime"], ["dedesi", "Abdülmuttalib"], ["onu yanına alan amcası", "Ebu Talib"]],
      (a) => `Hz. Muhammed'in ${a} kimdir?`, (b) => `${b}, Hz. Muhammed'in nesidir?`, (a, b) => `Hz. Muhammed'in ${a}: ${b}.`),
    ifadeler(["Hz. Muhammed 571 yılında doğmuştur.", "Hz. Muhammed Mekke'de doğmuştur.", "Babası o doğmadan önce vefat etmiştir.", "Annesi o altı yaşındayken vefat etmiştir.", "Doğduğu yıla Fil Yılı denir.", "Çocukluğunda çobanlık yapmıştır."],
      [Y("Hz. Muhammed Medine'de doğmuştur.", "k:Hz. Muhammed'in Mekke'de doğduğu bilinmedi (Medine hicret edilen şehirdir)"), Y("Hz. Muhammed 622 yılında doğmuştur.", "k:doğum yılı (571) ile hicret yılı (622) karıştırıldı"), Y("Babası onu yetiştirmiştir.", "k:babasının o doğmadan önce vefat ettiği bilinmedi"), Y("Annesi o 40 yaşındayken vefat etmiştir.", "k:annesinin o altı yaşındayken vefat ettiği bilinmedi"), Y("Sütannesi Hz. Hatice'dir.", "k:sütannesi Halime ile eşi Hz. Hatice karıştırıldı"), Y("Dedesi onu hiç tanımamıştır.", "k:dedesi Abdülmuttalib'in onu yanına aldığı bilinmedi")], "Hz. Muhammed'in çocukluğu")
  ]);

  U.d4k2 = ifadeler(["Hz. Muhammed gençliğinde ticaretle uğraşmıştır.", "Mekkeliler ona Muhammedü'l-Emin demiştir.", "Hilfu'l-Fudul'a katılmıştır.", "Hacerülesved anlaşmazlığını adaletle çözmüştür.", "25 yaşında Hz. Hatice ile evlenmiştir.", "İlk vahiy Hira Mağarası'nda gelmiştir.", "Peygamberliği 40 yaşında başlamıştır."],
    [Y("Hz. Muhammed gençliğinde hiç çalışmamıştır.", "k:gençliğinde çobanlık ve ticaretle uğraştığı bilinmedi"), Y("Muhammedü'l-Emin 'cesur Muhammed' demektir.", "k:\"emin\" sözcüğünün güvenilir anlamına geldiği bilinmedi"), Y("Hilfu'l-Fudul bir ticaret şirketidir.", "k:Hilfu'l-Fudul'un haksızlığa uğrayanları korumak için kurulduğu bilinmedi"), Y("Hacerülesved anlaşmazlığında taşı tek bir kabileye vermiştir.", "k:Hacerülesved anlaşmazlığını bütün kabileleri katarak çözdüğü bilinmedi"), Y("Hz. Hatice ile 40 yaşında evlenmiştir.", "k:evlenme yaşı (25) ile peygamberliğin başladığı yaş (40) karıştırıldı"), Y("İlk vahiy Kâbe'nin içinde gelmiştir.", "k:ilk vahyin Hira Mağarası'nda geldiği bilinmedi"), Y("Peygamberliği 15 yaşında başlamıştır.", "k:peygamberliğin 40 yaşında başladığı bilinmedi")], "Hz. Muhammed'in gençliği");

  U.d4k3 = ifadeler(["Fil Suresi Kur'an'ın 105. suresidir.", "Fil Suresi 5 ayettir.", "Fil Ordusu'nun komutanı Ebrehe'dir.", "Ebrehe Kâbe'yi yıkmak istemiştir.", "Allah, Ebabil kuşlarıyla Kâbe'yi korumuştur.", "Fil Olayı Hz. Muhammed'in doğduğu yıl yaşanmıştır."],
    [Y("Fil Suresi Kur'an'ın ilk suresidir.", "k:Fil Suresi'nin Kur'an'ın 105. suresi olduğu bilinmedi"), Y("Fil Ordusu'nun komutanı Ebu Talib'dir.", "k:Fil Ordusu'nun komutanının Ebrehe olduğu bilinmedi"), Y("Ebrehe Kâbe'yi onarmak istemiştir.", "k:Ebrehe'nin Kâbe'yi yıkmak istediği bilinmedi"), Y("Fil Ordusu Kâbe'yi yıkmayı başarmıştır.", "k:Allah'ın Kâbe'yi Ebabil kuşlarıyla koruduğu bilinmedi"), Y("Fil Olayı Hz. Muhammed 40 yaşındayken yaşanmıştır.", "k:Fil Olayı'nın Hz. Muhammed'in doğduğu yıl yaşandığı bilinmedi"), Y("Fil Suresi oruç ibadetini anlatır.", "k:Fil Suresi'nin konusu (Kâbe'nin Fil Ordusu'ndan korunması) bilinmedi")], "Fil Suresi");

  U.d5k1 = tiplerden([
    eslestir([["minare", "ezanın okunduğu yüksek kule"], ["mihrap", "imamın namaz kıldırdığı bölüm"], ["minber", "hutbenin okunduğu merdivenli yer"], ["şadırvan", "abdest alınan çeşme"], ["kubbe", "caminin yarım küre biçimli çatısı"], ["mahya", "minareler arasına gerilen ışıklı yazı"], ["hat", "güzel yazı sanatı"], ["tezhip", "altın ve boyayla süsleme sanatı"], ["ebru", "su üzerinde desen oluşturma sanatı"], ["sadaka taşı", "ihtiyaç sahiplerinin görünmeden yardım alabildiği taş"]],
      (a) => `"${buyuk(a)}" nedir?`, (b) => `"${buyuk(b)}" hangi kavramla ifade edilir?`, (a, b) => `${buyuk(a)}: ${b}.`),
    () => {
      const [c, e] = pick([["Şehzade Camii", "çıraklık eseri"], ["Süleymaniye Camii", "kalfalık eseri"], ["Selimiye Camii", "ustalık eseri"]]);
      return soru(`Mimar Sinan'ın "${e}" olarak tanımladığı cami hangisidir?`, c, [...["Şehzade Camii", "Süleymaniye Camii", "Selimiye Camii"].filter((x) => x !== c).map((x) => Y(x, "k:Mimar Sinan'ın çıraklık, kalfalık ve ustalık eserleri karıştırıldı")), Y("Sultanahmet Camii", "k:Sultanahmet Camii'nin Mimar Sinan'ın değil, öğrencisi Sedefkâr Mehmed Ağa'nın eseri olduğu bilinmedi")], `${c}: ${e}.`);
    }
  ]);

  U.d5k2 = tiplerden([
    eslestir([["ilahi", "Allah sevgisini anlatan, ezgiyle okunan şiir"], ["naat", "Hz. Muhammed'i öven şiir"], ["münacat", "Allah'a yalvarış ve dua şiiri"], ["tevhid", "Allah'ın birliğini anlatan şiir"], ["mevlid", "Hz. Muhammed'in doğumunu anlatan eser"]],
      (a) => `"${buyuk(a)}" nedir?`, (b) => `"${buyuk(b)}" hangi türdür?`, (a, b) => `${buyuk(a)}: ${b}.`),
    eslestir([["ezan", "namaz vakitlerini bildirmek için okunur"], ["salâ", "cuma, bayram ve vefat haberlerinde okunur"], ["tekbir", "bayramlarda Allah'ın yüceliğini anmak için getirilir"], ["ilahi", "Allah sevgisini ezgiyle anlatır"]],
      (a) => `"${buyuk(a)}" ne zaman ya da ne amaçla okunur?`, (b) => `Hangisi ${b}?`, (a, b) => `${buyuk(a)}: ${b}.`)
  ]);
})();
