// 5. sınıf Sosyal Bilgiler soru üreteçleri
(function () {
  const U = window.URETEC, { r, pick, soru, tiplerden, eslestir, siniflandir, ifadeler, dir } = window.UR;
  const B = (s) => s.charAt(0).toLocaleUpperCase("tr") + s.slice(1);

  U.s1k1 = tiplerden([
    siniflandir({ "grup": ["aile", "sınıf", "futbol takımı", "izci kulübü", "koro", "mahalle sakinleri"], "rol": ["sınıf başkanı", "abla", "kaleci", "öğrenci", "torun", "takım kaptanı"] }, (g) => (g === "grup" ? "Hangisi bir gruptur?" : "Hangisi bir roldür?"), (d, g) => `"${d}" bir ${g === "grup" ? "gruptur" : "roldür"}.`),
    () => { const [rol, s] = pick([["öğrenci", "ödevlerini zamanında yapmak"], ["kardeş", "kardeşine yardım etmek"], ["sınıf başkanı", "sınıfın sorunlarını öğretmene iletmek"], ["takım oyuncusu", "antrenmanlara düzenli katılmak"], ["torun", "büyüklerine saygı göstermek"], ["kütüphane üyesi", "kitapları zamanında teslim etmek"]]); return soru(`Hangisi "${rol}" rolünün sorumluluklarındandır?`, B(s), ["Okul müdürünü seçmek", "Maaş almak", "Ders programını hazırlamak", "Vergi toplamak"], `${rol}: ${s}.`); },
    ifadeler(["Bir kişi farklı gruplarda farklı roller üstlenebilir.", "Her rolün hakları ve sorumlulukları vardır.", "Aile, dâhil olduğumuz ilk gruptur.", "Roller zamanla değişebilir.", "Rollerimizi yerine getirmek grup uyumunu artırır."], ["Bir kişi yalnızca bir role sahip olabilir.", "Rollerin hiçbir sorumluluğu yoktur.", "Gruplar ortak amaç olmadan kurulur.", "Roller hiç değişmez.", "Sınıf bir rol örneğidir."], "Gruplar ve roller")
  ]);

  U.s1k2 = tiplerden([
    siniflandir({ "Karadeniz": ["horon", "kemençe", "hamsi tava", "çay bahçeleri"], "Ege": ["zeybek", "zeytinyağlı yemekler", "boyoz"], "Güneydoğu Anadolu": ["Antep baklavası", "halay", "Urfa isotu", "sıra gecesi"], "İç Anadolu": ["Kayseri mantısı", "Konya etli ekmeği", "Ankara tavası"] }, (g) => `Hangisi ${g} yöresine ait bir kültürel özelliktir?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" hangi yöremizle özdeşleşmiştir?`),
    ifadeler(["Kültür nesilden nesile aktarılır.", "Farklılıklara saygı birlikte yaşamayı güçlendirir.", "Dil, din, gelenek ve yemekler kültürün ögeleridir.", "Bayramlar ortak değerlerimizdendir.", "Misafirperverlik kültürümüzün önemli bir parçasıdır."], ["Kültür hiçbir zaman değişmez.", "Farklı kültürler birlikte yaşayamaz.", "İklim kültürün bir ögesidir.", "Yöresel yemekler kültüre dâhil değildir.", "Herkesin aynı gelenekleri yaşaması zorunludur."], "Kültür")
  ]);

  const KUR = [["Kızılay", "afet ve savaşlarda yiyecek, barınma, kan bağışı desteği"], ["AFAD", "afet ve acil durumlarda koordinasyon ve arama kurtarma"], ["TEMA", "erozyonla mücadele ve ağaçlandırma"], ["LÖSEV", "lösemili çocuklara destek"], ["Yeşilay", "bağımlılıkla mücadele"], ["Türkiye Diyanet Vakfı", "ihtiyaç sahiplerine yardım, kurban ve burs organizasyonu"], ["Darüşşafaka", "babası ya da annesi olmayan çocuklara eğitim imkânı"], ["Koruncuk Vakfı", "korunmaya muhtaç çocuklara destek"]];
  U.s1k3 = tiplerden([
    eslestir(KUR, (a) => `${a} hangi alanda faaliyet gösterir?`, (b) => `Hangi kuruluş "${b}" alanında çalışır?`, (a, b) => `${a}: ${b}.`),
    siniflandir({ "yardımlaşma ve dayanışma geleneği": ["imece", "askıda ekmek", "hasta ziyareti", "kermes düzenlemek", "düğünde takı takmak", "mahalle iftarı"], "dayanışmaya aykırı davranış": ["ihtiyaç sahibine yardım etmemek", "ortak işe katılmamak", "komşusunun derdini önemsememek"] }, (g) => `Hangisi ${dir(g)}?`, (d, g) => `${d}: ${g}.`)
  ]);

  const YON = [["kuzey", "güney"], ["doğu", "batı"], ["kuzeydoğu", "güneybatı"], ["kuzeybatı", "güneydoğu"]];
  const ILLER = [["Gaziantep", "Kilis", "kuzeyinde"], ["İzmir", "Manisa", "batısında"], ["Ankara", "Eskişehir", "doğusunda"], ["Trabzon", "Gümüşhane", "kuzeyinde"], ["Antalya", "Isparta", "güneyinde"], ["Erzurum", "Erzincan", "doğusunda"], ["Konya", "Ankara", "güneyinde"], ["Samsun", "Amasya", "kuzeyinde"]];
  U.s2k1 = tiplerden([
    siniflandir({ "doğal çevre ögesi": ["dağ", "ova", "göl", "akarsu", "orman", "mağara"], "beşerî çevre ögesi": ["baraj", "köprü", "fabrika", "otoyol", "havalimanı", "tarla"] }, (g) => `Hangisi bir ${dir(g)}?`, (d, g) => `${d}: ${g}.`),
    () => { const [a, b] = pick(YON); return soru(`${B(a)} yönünün tam tersi hangi yöndür?`, B(b), YON.flat().filter((x) => x !== a && x !== b).map(B), `${a} ↔ ${b}`); },
    () => { const [a, b, y] = pick(ILLER); return soru(`"${a}, ${b}'in ${y}dir." ifadesi neyi açıklar?`, "Göreceli konum", ["Mutlak konum", "İklim", "Nüfus yoğunluğu"], "Bir yer başka bir yere göre tarif edilmiştir."); },
    () => { const l = [["baraj yapılması", "elektrik üretimi ve sulama sağlanır", "bazı köyler su altında kalabilir"], ["ormanlık alana yol yapılması", "ulaşım kolaylaşır", "ağaçlar kesilir, hayvanların yaşam alanı daralır"], ["bataklığın kurutulması", "tarım alanı kazanılır", "kuşların yaşam alanı yok olur"], ["sahile otel yapılması", "turizm geliri artar", "kıyı doğası bozulabilir"]]; const [o, iyi, kotu] = pick(l); const k = pick([true, false]); return soru(`"${B(o)}" çevrede yaptığı değişikliğin ${k ? "olumlu" : "olumsuz"} sonucu hangisidir?`, B(k ? iyi : kotu), l.filter((x) => x[0] !== o).map((x) => B(k ? x[1] : x[2])).concat([B(k ? kotu : iyi)]), `${o}: olumlu → ${iyi}; olumsuz → ${kotu}.`); }
  ]);

  U.s2k2 = tiplerden([
    siniflandir({ "deprem anında doğru davranış": ["Çök – Kapan – Tutun yapmak", "sağlam bir masanın yanına çökmek", "başımızı ve ensemizi korumak", "pencerelerden uzak durmak"], "deprem anında yanlış davranış": ["asansöre binmek", "merdivenlerden koşarak inmek", "balkondan atlamak", "pencere önünde beklemek"] }, (g) => `Hangisi ${dir(g)}?`, (d, g) => `${d}: ${g}.`),
    siniflandir({ "afet çantasında bulunması gereken": ["su", "el feneri", "yedek pil", "düdük", "ilk yardım malzemesi", "kimlik fotokopisi", "konserve"], "afet çantasına konmaması gereken": ["dondurma", "taze balık", "cam vazo", "oyun konsolu"] }, (g) => `Hangisi ${g} bir malzemedir?`, (d, g) => `${d}: ${g}.`),
    ifadeler(["Türkiye'nin büyük bölümü deprem kuşağındadır.", "Eşyaları duvara sabitlemek depremde hayat kurtarır.", "Acil durumlarda 112 aranır.", "Afet sonrasında toplanma alanına gidilir.", "Sel, heyelan ve çığ doğal afetlerdendir."], ["Depremde asansör kullanmak güvenlidir.", "Türkiye'de hiç deprem olmaz.", "Afet çantasına bozulabilen yiyecek konur.", "Depremde pencere önünde beklemek doğrudur.", "Doğal afetler önceden asla planlanamaz, hazırlık gereksizdir."], "Afetler")
  ]);

  const KOM = [["Yunanistan", "batı"], ["Bulgaristan", "batı"], ["Gürcistan", "kuzeydoğu"], ["Ermenistan", "doğu"], ["Nahçıvan", "doğu"], ["İran", "doğu"], ["Irak", "güneydoğu"], ["Suriye", "güney"]];
  U.s2k3 = tiplerden([
    () => { const [u, y] = pick(KOM); return soru(`${u}, Türkiye'nin hangi yönündeki kara komşusudur?`, B(y), ["Batı", "Kuzeydoğu", "Doğu", "Güneydoğu", "Güney"].filter((x) => x !== B(y)), `${u}: ${y}.`); },
    () => soru("Hangisi Türkiye'nin kara sınırı komşusu değildir?", pick(["Rusya", "Ukrayna", "Mısır", "Romanya", "Libya", "İtalya"]), KOM.map((x) => x[0]), "Türkiye'nin 8 kara komşusu: Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Nahçıvan, İran, Irak, Suriye."),
    () => soru("Türkiye'nin kara komşusu olan hangi ülkedir?", pick(KOM)[0], ["Rusya", "Ukrayna", "Mısır", "Romanya", "Libya"], "Kara sınırı olan 8 komşumuz vardır."),
    ifadeler(["En uzun kara sınırımız Suriye iledir.", "En kısa kara sınırımız Nahçıvan iledir.", "Türkiye'nin 8 kara komşusu vardır.", "Nahçıvan, Azerbaycan'a bağlı özerk bir cumhuriyettir.", "Gürcistan kuzeydoğu komşumuzdur."], ["En uzun kara sınırımız Yunanistan iledir.", "Rusya kara komşumuzdur.", "Türkiye'nin 5 kara komşusu vardır.", "Irak batı komşumuzdur.", "En kısa sınırımız İran iledir."], "Komşu devletler")
  ]);

  U.s3k1 = tiplerden([
    siniflandir({ "somut kültürel miras": ["Göbeklitepe", "Selimiye Camii", "Efes Antik Kenti", "Safranbolu evleri", "Sümela Manastırı", "Divriği Ulu Camii", "Kapadokya"], "somut olmayan kültürel miras": ["ebru sanatı", "Karagöz ve Hacivat", "Nevruz", "Türk kahvesi kültürü", "âşıklık geleneği", "geleneksel sohbet toplantıları", "minyatür sanatı"] }, (g) => `Hangisi ${g} örneğidir?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" hangi tür kültürel mirastır?`),
    ifadeler(["Kültürel miras gelecek nesillere aktarılmalıdır.", "UNESCO dünya mirasını korumak için listeler hazırlar.", "Gelenekler somut olmayan kültürel mirastır.", "Tarihî eserlere zarar vermek mirasımıza zarar vermektir."], ["Somut olmayan miras dokunulabilen eserlerdir.", "Kültürel mirası korumak yalnızca devletin görevidir.", "Tarihî eserlerin üzerine yazı yazmak zararsızdır.", "UNESCO bir afet kurumudur."], "Kültürel miras")
  ]);

  U.s3k2 = tiplerden([
    eslestir([["Göbeklitepe", "bilinen en eski tapınak alanı (Şanlıurfa)"], ["Çatalhöyük", "evlere damdan girilen yerleşim (Konya)"], ["Çayönü", "ilk köy yerleşimlerinden (Diyarbakır)"], ["Hacılar", "çanak çömlekleriyle bilinen ilk köylerden (Burdur)"]], (a) => `${a} ile ilgili hangisi doğrudur?`, (b) => `"${b}" hangi yerleşim yeridir?`, (a, b) => `${a}: ${b}.`),
    siniflandir({ "avcı-toplayıcı toplum": ["göçebe yaşamak", "mağaralarda barınmak", "yiyeceği avlanarak ve toplayarak elde etmek"], "yerleşik toplum": ["tarım yapmak", "hayvanları evcilleştirmek", "kalıcı köyler kurmak", "çanak çömlek üretmek"] }, (g) => `Hangisi ${g} özelliğidir?`, (d, g) => `${d}: ${g}.`)
  ]);

  const MED = [["Sümerler", "yazıyı (çivi yazısı) buldu"], ["Babiller", "Hammurabi Kanunları'nı yaptı"], ["Hititler", "Kadeş Antlaşması'nı imzaladı"], ["Lidyalılar", "parayı ilk kullandı"], ["Urartular", "su kanalları ve barajlar yaptı"], ["Frigler", "tarım ve dokumacılıkta ilerledi"], ["Asurlular", "Anadolu'ya yazıyı getirdi"], ["İyonlar", "bilim ve felsefede düşünürler yetiştirdi"]];
  U.s3k3 = tiplerden([
    eslestir(MED, (a) => `${a} hangi katkısıyla bilinir?`, (b) => `Hangi medeniyet ${b}?`, (a, b) => `${a} ${b}.`),
    siniflandir({ "Mezopotamya medeniyeti": ["Sümerler", "Babiller", "Asurlular", "Akadlar"], "Anadolu medeniyeti": ["Hititler", "Frigler", "Lidyalılar", "Urartular", "İyonlar"] }, (g) => `Hangisi bir ${dir(g)}?`, (d, g) => `${d}: ${g}.`)
  ]);

  U.s4k1 = tiplerden([
    () => { const l = [["29 Ekim 1923", "Cumhuriyet'in ilanı"], ["23 Nisan 1920", "TBMM'nin açılışı"], ["19 Mayıs 1919", "Atatürk'ün Samsun'a çıkışı"], ["30 Ağustos 1922", "Büyük Zafer"], ["1 Kasım 1922", "Saltanatın kaldırılması"]]; const [t, o] = pick(l); return soru(`${t} tarihinde hangi önemli olay gerçekleşmiştir?`, o, l.filter((x) => x[0] !== t).map((x) => x[1]), `${t}: ${o}.`); },
    ifadeler(["Demokraside yöneticiler seçimle belirlenir.", "Cumhuriyet millet egemenliğine dayanır.", "Seçimler gizli oyla yapılır.", "Demokraside farklı görüşlere saygı gösterilir.", "Kanunlar önünde herkes eşittir.", "Millî egemenlik, yönetme yetkisinin millete ait olmasıdır."], ["Demokraside yöneticiler miras yoluyla belirlenir.", "Cumhuriyette egemenlik tek kişiye aittir.", "Seçimlerde oylar açık verilir.", "Demokraside yalnızca çoğunluğun hakları vardır.", "Kanunlar herkese farklı uygulanır.", "Cumhuriyet 23 Nisan 1920'de ilan edildi."], "Demokrasi ve cumhuriyet")
  ]);

  U.s4k2 = tiplerden([
    siniflandir({ "hak": ["eğitim almak", "sağlık hizmeti almak", "oyun oynamak", "düşüncesini söylemek", "korunmak", "yaşamak"], "sorumluluk": ["kurallara uymak", "kamu malını korumak", "çevreyi temiz tutmak", "vergi vermek", "başkalarının haklarına saygı göstermek", "ödevlerini yapmak"] }, (g) => (g === "hak" ? "Hangisi bir haktır?" : "Hangisi bir sorumluluktur?"), (d, g) => `"${d}" bir ${g === "hak" ? "haktır" : "sorumluluktur"}.`),
    () => { const l = [["sokak lambasının yanmaması", "Belediye"], ["mahalle ile ilgili belge almak", "Muhtarlık"], ["devlete dilek ve şikâyet iletmek", "CİMER"], ["acil sağlık ve yangın durumu", "112 Acil Çağrı Merkezi"], ["il genelindeki bir sorunu iletmek", "Valilik"]]; const [d, k] = pick(l); return soru(`"${B(d)}" konusunda hangi kuruma başvurulur?`, k, l.filter((x) => x[1] !== k).map((x) => x[1]), `${d} → ${k}.`); }
  ]);

  U.s5k1 = tiplerden([
    siniflandir({ "ihtiyaç": ["beslenme", "barınma", "giyinme", "sağlık", "eğitim", "temiz su"], "istek": ["oyun konsolu", "akıllı saat", "markalı ayakkabı", "yeni bir tablet", "lunaparka gitmek", "pahalı bir oyuncak"] }, (g) => `Hangisi bir ${dir(g)}?`, (d, g) => `${d}: ${g}.`),
    () => { const h = r(10, 50) * 10, g = r(5, h / 10 - 1) * 10; return soru(`Aylık harçlığı ${h} TL olan bir öğrenci ${g} TL harcadı. Kaç TL tasarruf etti?`, String(h - g), [String(h + g), String(g), String(h)], `${h} − ${g} = ${h - g} TL`); },
    () => { const gel = r(20, 60) * 10, gid = gel + r(1, 10) * 10; return soru(`Geliri ${gel} TL, gideri ${gid} TL olan bir bütçede ne olur?`, `${gid - gel} TL borç oluşur.`, [`${gid - gel} TL tasarruf edilir.`, "Bütçe dengededir.", `${gel + gid} TL birikir.`], `Gider gelirden ${gid - gel} TL fazla.`); },
    ifadeler(["Kaynaklar sınırlıdır.", "Önce ihtiyaçlar karşılanmalıdır.", "Bütçe gelir ve giderlerin planlanmasıdır.", "Musluğu açık bırakmamak kaynakları korur.", "Bilinçli tüketici fiyat ve kaliteyi karşılaştırır."], ["Kaynaklar sınırsızdır.", "İstekler ihtiyaçlardan önce gelir.", "Tasarruf, gelirden fazla harcamaktır.", "İsraf etmek ekonomiye katkı sağlar.", "Bütçe yapmak gereksizdir."], "Ekonomi")
  ]);

  const EKO = [["Rize", "çay tarımı"], ["Ordu", "fındık tarımı"], ["Zonguldak", "taş kömürü madenciliği"], ["Antalya", "turizm"], ["Gaziantep", "Antep fıstığı ve sanayi"], ["Konya", "tahıl (buğday) tarımı"], ["Kocaeli", "sanayi"], ["Malatya", "kayısı tarımı"], ["Afyonkarahisar", "mermer ve termal turizm"], ["Sinop", "balıkçılık"]];
  U.s5k2 = tiplerden([
    eslestir(EKO, (a) => `${a} hangi ekonomik faaliyetle öne çıkar?`, (b) => `Hangi il "${b}" ile öne çıkar?`, (a, b) => `${a}: ${b}.`),
    siniflandir({ "tarım": ["buğday ekmek", "çay toplamak", "sebze yetiştirmek"], "hayvancılık": ["inek beslemek", "arıcılık yapmak", "koyun yetiştirmek"], "sanayi": ["fabrikada kumaş üretmek", "otomobil üretmek", "un fabrikası işletmek"], "turizm": ["otel işletmek", "rehberlik yapmak", "tarihî yerleri gezdirmek"] }, (g) => `Hangisi ${g} faaliyetidir?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" hangi ekonomik faaliyete girer?`)
  ]);

  U.s6k1 = tiplerden([
    siniflandir({ "güvenli internet davranışı": ["şifresini kimseyle paylaşmamak", "tanımadığı kişilere adres vermemek", "şüpheli bağlantılara tıklamamak", "alışverişi ailesiyle yapmak", "ekran süresini sınırlamak"], "güvensiz internet davranışı": ["şifresini arkadaşına söylemek", "okul adını ve adresini paylaşmak", "tanımadığı biriyle buluşmaya gitmek", "her bağlantıya tıklamak", "geceleri saatlerce oyun oynamak"] }, (g) => `Hangisi ${dir(g)}?`, (d, g) => `${d}: ${g}.`),
    siniflandir({ "teknolojinin olumlu etkisi": ["bilgiye hızlı ulaşmak", "uzaktaki yakınlarla görüntülü konuşmak", "hastalıkların erken teşhisi", "uzaktan eğitim"], "teknolojinin olumsuz etkisi": ["bağımlılık", "hareketsizlik", "göz yorgunluğu", "siber zorbalık"] }, (g) => `Hangisi ${dir(g)}?`, (d, g) => `${d}: ${g}.`),
    eslestir([["dijital ayak izi", "internette bıraktığımız kalıcı izler"], ["e-ticaret", "internet üzerinden alışveriş"], ["siber zorbalık", "internette başkalarını rahatsız etmek, aşağılamak"], ["genel ağ", "internetin Türkçe karşılığı"]], (a) => `"${a}" ne demektir?`, (b) => `"${b}" hangi kavramla ifade edilir?`, (a, b) => `${a}: ${b}.`)
  ]);
})();
