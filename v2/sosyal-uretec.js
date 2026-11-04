// 6. sınıf Sosyal Bilgiler soru üreteçleri (ortak-uretec.js'ten sonra yüklenir)
(function () {
  const U = window.URETEC, { r, pick, buyuk, soru, tiplerden, eslestir, siniflandir, ifadeler } = window.UR;

  U.s1k1 = tiplerden([
    siniflandir({ "doğuştan sahip olunan": ["evlat", "kardeş", "torun", "kuzen", "yeğen"], "sonradan edinilen": ["öğrenci", "sınıf başkanı", "takım kaptanı", "kulüp üyesi", "izci", "okul meclisi temsilcisi"] },
      (g) => `Hangisi ${g} bir roldür?`, (d, g) => `${buyuk(d)} ${g} bir roldür.`),
    eslestir([["öğrenci", "derslerine düzenli çalışmak"], ["sınıf başkanı", "sınıfın sorunlarını öğretmene iletmek"], ["takım kaptanı", "takım arkadaşlarını motive etmek"], ["kütüphane görevlisi öğrenci", "kitapların düzenini sağlamak"], ["nöbetçi öğrenci", "teneffüste sınıfın düzenine dikkat etmek"], ["abla ya da ağabey", "küçük kardeşine yardımcı olmak"]],
      (a) => `"${buyuk(a)}" rolünün sorumluluklarından biri hangisidir?`, (b) => `"${buyuk(b)}" hangi rolün sorumluluğudur?`, (a, b) => `${buyuk(a)}: ${b}.`),
    ifadeler(["Bir kişi aynı anda birden fazla gruba üye olabilir.", "Roller zamanla değişebilir.", "Her rolün hakları ve sorumlulukları vardır.", "Aile, bir insanın üye olduğu ilk gruptur.", "Gelecekte yeni gruplara katılıp yeni roller üstleneceğiz."],
      ["Her insanın yalnızca bir rolü vardır.", "Roller hiçbir zaman değişmez.", "Rollerin sorumluluğu yoktur.", "Sadece yetişkinler bir gruba üye olabilir.", "Öğrenci rolü doğuştan gelir."], "Gruplar ve roller")
  ]);

  U.s1k2 = tiplerden([
    siniflandir({ "maddi kültür öğesi": ["halı ve kilim", "çini", "geleneksel kıyafetler", "el sanatları ürünleri", "tarihî camiler ve köprüler", "yöresel yemekler"], "manevi kültür öğesi": ["misafirperverlik", "yardımseverlik", "büyüklere saygı", "türküler ve maniler", "bayramlaşma geleneği", "atasözleri"] },
      (g) => `Hangisi ${g}dir?`, (d, g) => `${buyuk(d)} ${g}dir.`),
    siniflandir({ "millî değer": ["Türk bayrağı", "İstiklal Marşı", "vatan toprakları", "Türkçe", "29 Ekim Cumhuriyet Bayramı", "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı"], "millî değer olmayan": ["akıllı telefon", "alışveriş merkezi", "bilgisayar oyunu", "otomobil markası", "moda kıyafetler"] },
      (g) => g === "millî değer" ? "Hangisi millî değerlerimizden biridir?" : "Hangisi millî değerlerimizden biri değildir?", (d, g) => `${buyuk(d)} ${g === "millî değer" ? "millî değerlerimizdendir" : "millî bir değer değildir"}.`),
    ifadeler(["Kültür, bir toplumun maddi ve manevi değerlerinin bütünüdür.", "Ortak değerler toplumsal birliği güçlendirir.", "İmece bir yardımlaşma geleneğidir.", "Dil, kültürün en önemli öğelerindendir.", "Afetlerde yardımlaşma dayanışmanın bir örneğidir."],
      ["Kültür sadece yemeklerden oluşur.", "Gelenekler toplumu birbirinden uzaklaştırır.", "Millî değerler kişiden kişiye değişir.", "Bayramlaşma maddi bir kültür öğesidir.", "Kültür hiçbir zaman nesilden nesile aktarılmaz."], "Kültürel bağlar")
  ]);

  U.s1k3 = tiplerden([
    siniflandir({ "toplumsal sorun": ["trafik kazaları", "çevre kirliliği", "su israfı", "akran zorbalığı", "gıda israfı", "sokak hayvanlarının bakımsız kalması", "hava kirliliği"], "kişisel durum": ["yeni bir ayakkabı almak", "doğum günü kutlamak", "tatile gitmek", "kitap okumak", "saç kestirmek"] },
      (g) => g === "toplumsal sorun" ? "Hangisi bir toplumsal sorundur?" : "Hangisi toplumsal bir sorun değildir?", (d, g) => `${buyuk(d)} ${g === "toplumsal sorun" ? "toplumun büyük bölümünü etkileyen bir sorundur" : "toplumsal bir sorun değildir"}.`),
    eslestir([["su israfı", "dişlerini fırçalarken musluğu kapatmak"], ["gıda israfı", "tabağa yiyebileceği kadar yemek almak"], ["çevre kirliliği", "çöpleri geri dönüşüm kutularına atmak"], ["trafik kazaları", "yaya geçidini kullanmak"], ["akran zorbalığı", "olayı öğretmene bildirmek"], ["hava kirliliği", "toplu taşıma araçlarını kullanmak"]],
      (a) => `"${buyuk(a)}" sorununa yönelik en uygun çözüm önerisi hangisidir?`, (b) => `"${buyuk(b)}" davranışı hangi soruna çözüm olabilir?`, (a, b) => `${buyuk(a)} → ${b}.`)
  ]);

  const KOMSU = ["Yunanistan", "Bulgaristan", "Gürcistan", "Ermenistan", "Nahçıvan (Azerbaycan)", "İran", "Irak", "Suriye"];
  const KOMSU_DEGIL = ["Mısır", "İtalya", "Rusya", "Ukrayna", "Ürdün", "Suudi Arabistan", "Libya", "Romanya"];
  U.s2k1 = tiplerden([
    () => soru("Hangisi Türkiye'nin kara komşularından biridir?", pick(KOMSU), KOMSU_DEGIL, "Türkiye'nin komşuları: " + KOMSU.join(", ") + "."),
    () => soru("Hangisi Türkiye'nin kara komşularından biri değildir?", pick(KOMSU_DEGIL), KOMSU, "Türkiye'nin komşuları: " + KOMSU.join(", ") + "."),
    siniflandir({ "mutlak (matematik) konum": ["Türkiye'nin 36°–42° Kuzey paralelleri arasında olması", "Türkiye'nin 26°–45° Doğu meridyenleri arasında olması", "Türkiye'nin Kuzey yarım kürede olması", "Türkiye'nin Doğu yarım kürede olması"], "göreceli (özel) konum": ["Türkiye'nin Asya ile Avrupa arasında köprü olması", "Türkiye'nin üç tarafının denizlerle çevrili olması", "Türkiye'nin İstanbul ve Çanakkale boğazlarına sahip olması", "Türkiye'nin Orta Doğu'ya komşu olması"] },
      (g) => `Hangisi ${g} özelliğidir?`, (d, g) => `"${d}" ${g} özelliğidir. ${g.startsWith("mutlak") ? "Paralel ve meridyenlerle ifade edilir." : "Çevredeki yerlere göre ifade edilir."}`),
    () => { const [b, d] = pick([["İstanbul Boğazı", "Karadeniz ile Marmara Denizi"], ["Çanakkale Boğazı", "Marmara Denizi ile Ege Denizi"]]); return soru(`${b} hangi iki denizi birbirine bağlar?`, d, ["Karadeniz ile Marmara Denizi", "Marmara Denizi ile Ege Denizi", "Ege Denizi ile Akdeniz", "Karadeniz ile Akdeniz"].filter((x) => x !== d), `${b}: ${d}.`); }
  ]);

  const KITA = ["Asya", "Afrika", "Kuzey Amerika", "Güney Amerika", "Antarktika", "Avrupa", "Okyanusya"];
  const OKYANUS = ["Büyük Okyanus (Pasifik)", "Atlas Okyanusu", "Hint Okyanusu", "Güney Okyanusu", "Kuzey Buz Denizi"];
  U.s2k2 = tiplerden([
    () => soru("Hangisi bir kıtadır?", pick(KITA), [...OKYANUS, "Akdeniz", "Karadeniz", "Sahra"], "Dünya'da 7 kıta vardır: " + KITA.join(", ") + "."),
    () => soru("Hangisi bir okyanustur?", pick(OKYANUS), [...KITA, "Akdeniz", "Karadeniz"], "Okyanuslar: " + OKYANUS.join(", ") + "."),
    eslestir([["Mısır", "Afrika"], ["Japonya", "Asya"], ["Brezilya", "Güney Amerika"], ["Kanada", "Kuzey Amerika"], ["Almanya", "Avrupa"], ["Avustralya", "Okyanusya"], ["Kazakistan", "Asya"], ["Arjantin", "Güney Amerika"], ["Fransa", "Avrupa"], ["Nijerya", "Afrika"], ["Meksika", "Kuzey Amerika"]],
      (a) => `${a} hangi kıtada yer alır?`, (b) => `Hangi ülke ${b} kıtasındadır?`, (a, b) => `${a} ${b} kıtasındadır.`),
    ifadeler(["Dünya'da 7 kıta vardır.", "En büyük kıta Asya'dır.", "En küçük kıta Okyanusya'dır.", "En büyük okyanus Büyük Okyanus'tur.", "Antarktika buzlarla kaplıdır.", "Türkiye'nin büyük kısmı Asya kıtasındadır.", "Dünya yüzeyinin çoğu sularla kaplıdır."],
      ["Dünya'da 5 kıta vardır.", "En büyük kıta Avrupa'dır.", "En büyük okyanus Hint Okyanusu'dur.", "Antarktika'da milyonlarca insan yaşar.", "Türkiye'nin tamamı Avrupa kıtasındadır.", "Dünya yüzeyinin çoğu karalarla kaplıdır.", "Akdeniz bir okyanustur."], "Kıtalar ve okyanuslar")
  ]);

  U.s2k3 = tiplerden([
    siniflandir({ "doğal çevre unsuru": ["dağ", "ova", "akarsu", "göl", "orman", "plato", "şelale", "mağara"], "beşerî çevre unsuru": ["baraj", "köprü", "fabrika", "otoyol", "tarla", "liman", "havalimanı", "tünel"] },
      (g) => `Hangisi ${g}dur?`, (d, g) => `${buyuk(d)} ${g}dur. ${g.startsWith("doğal") ? "Kendiliğinden oluşmuştur." : "İnsanlar tarafından yapılmıştır."}`),
    ifadeler(["Düz ve verimli ovalarda nüfus genellikle yoğundur.", "İnsanlar doğal çevreyi değiştirebilir.", "Baraj, beşerî bir çevre unsurudur.", "Kıyı bölgelerinde balıkçılık ve turizm yaygındır.", "Doğal çevre yerleşmeyi etkiler."],
      ["Yüksek dağlık alanlarda nüfus her zaman çok yoğundur.", "Göller insanlar tarafından yapılan beşerî unsurlardır.", "İnsan doğal çevreyi hiç etkilemez.", "Fabrikalar doğal çevre unsurudur.", "İklim, tarımı hiç etkilemez."], "Doğal ve beşerî çevre")
  ]);

  U.s2k4 = tiplerden([
    siniflandir({ "Türk devleti": ["Azerbaycan", "Kazakistan", "Kırgızistan", "Özbekistan", "Türkmenistan", "Kuzey Kıbrıs Türk Cumhuriyeti"], "Türk devleti olmayan": ["Mısır", "İtalya", "İran", "Japonya", "Brezilya", "Yunanistan"] },
      (g) => g === "Türk devleti" ? "Hangisi bağımsız bir Türk devletidir?" : "Hangisi bir Türk devleti değildir?", (d, g) => `${d} ${g === "Türk devleti" ? "bir Türk devletidir" : "bir Türk devleti değildir"}.`),
    eslestir([["Yunus Emre Enstitüsü", "dünyada Türkçeyi ve Türk kültürünü tanıtır"], ["TİKA", "kalkınma ve yardım projeleri yürütür"], ["TÜRKSOY", "Türk kültürü ve sanatını yaşatır"], ["Türk Devletleri Teşkilatı", "Türk devletleri arasında iş birliği sağlar"]],
      (a) => `${a} hangi amaçla çalışır?`, (b) => `Hangi kuruluş ${b}?`, (a, b) => `${a} ${b}.`)
  ]);

  const DEVLET = [["Asya Hun Devleti", "bilinen ilk Türk devletidir"], ["Kök Türk Devleti", "'Türk' adını devlet adı olarak ilk kullanan devlettir"], ["Uygurlar", "yerleşik hayata geçen ilk Türk devletidir"], ["Karahanlılar", "İslamiyet'i kabul eden ilk Türk devletidir"], ["Çaka Beyliği", "ilk Türk donanmasını kuran beyliktir"], ["Büyük Selçuklu Devleti", "Malazgirt Savaşı'nı kazanan devlettir"], ["Gazneliler", "Hindistan'a seferler düzenleyen devlettir"]];
  U.s3k1 = tiplerden([
    eslestir(DEVLET.slice(0, 3), (a) => `${a} için hangisi doğrudur?`, (b) => `Hangi devlet ${b}?`, (a, b) => `${a} ${b}.`),
    () => { const [a, b] = pick([["Mete Han", "Asya Hun Devleti"], ["Bilge Kağan", "Kök Türk Devleti"], ["Kül Tigin", "Kök Türk Devleti"], ["Tonyukuk", "Kök Türk Devleti"], ["Bögü Kağan", "Uygurlar"]]); return soru(`${a} hangi Türk devletinin önemli bir şahsiyetidir?`, b, ["Asya Hun Devleti", "Kök Türk Devleti", "Uygurlar", "Karahanlılar", "Gazneliler"].filter((x) => x !== b), `${a}: ${b}.`); },
    ifadeler(["Türklerin anayurdu Orta Asya'dır.", "Orhun Yazıtları ilk yazılı Türk belgeleridir.", "Mete Han orduyu onlu sisteme göre düzenledi.", "Uygurlar kâğıt ve matbaa kullandı.", "Kök Türkler 'Türk' adını devlet adı olarak kullandı."],
      ["Türklerin anayurdu Afrika'dır.", "Orhun Yazıtları Uygurlardan kalmıştır.", "İlk Türk devleti Uygurlardır.", "Asya Hunları yerleşik hayata geçen ilk Türk devletidir.", "Mete Han Kök Türk hükümdarıdır."], "İlk Türk devletleri")
  ]);

  U.s3k2 = tiplerden([
    eslestir([["kurultay (toy)", "devlet işlerinin görüşüldüğü meclis"], ["töre", "yazısız kurallar (hukuk)"], ["kut", "yönetme yetkisinin Tanrı tarafından verildiği inancı"], ["kurgan", "ilk Türklerde mezar"], ["balbal", "mezarların başına dikilen taş"], ["otağ", "hükümdar çadırı"], ["kımız", "kısrak sütünden yapılan içecek"], ["hatun", "hükümdarın eşi"]],
      (a) => `İlk Türklerde "${a}" ne anlama gelir?`, (b) => `İlk Türklerde "${b}" için hangi kavram kullanılır?`, (a, b) => `${buyuk(a)}: ${b}.`),
    ifadeler(["İlk Türkler çoğunlukla göçebe yaşardı.", "İlk Türkler hayvancılıkla geçinirdi.", "At, Türklerin hayatında çok önemliydi.", "İlk Türklerde kadın toplumda saygın bir yere sahipti.", "İlk Türklerin çoğu Gök Tanrı inancına sahipti."],
      ["İlk Türklerin hepsi şehirlerde yaşardı.", "İlk Türklerin temel geçim kaynağı balıkçılıktı.", "Kurultaya sadece köylüler katılırdı.", "Töre yazılı kanunlardan oluşurdu.", "İlk Türklerde kadının hiçbir hakkı yoktu."], "İlk Türk kültürü")
  ]);

  U.s3k3 = tiplerden([
    eslestir([["Harezmî", "cebir biliminin kurucusu"], ["İbn-i Sina", "'El-Kanun' adlı tıp kitabının yazarı"], ["Bîrûnî", "Dünya'nın çevresini hesaplayan astronom ve coğrafyacı"], ["Farabi", "'İkinci Öğretmen' olarak anılan filozof ve müzisyen"], ["Uluğ Bey", "Semerkant'ta rasathane kuran hükümdar ve astronom"]],
      (a) => `${a} hangi özelliğiyle bilinir?`, (b) => `Hangi bilim insanı ${b} olarak bilinir?`, (a, b) => `${a}: ${b}.`),
    eslestir([["medrese", "eğitim kurumu (okul)"], ["rasathane", "gözlemevi"], ["darüşşifa", "hastane"], ["Beytü'l-Hikme", "Bağdat'taki bilim merkezi"], ["kütüphane", "kitapların toplandığı yer"]],
      (a) => `"${buyuk(a)}" ne anlama gelir?`, (b) => `"${buyuk(b)}" için hangi kavram kullanılır?`, (a, b) => `${buyuk(a)}: ${b}.`)
  ]);

  U.s3k4 = tiplerden([
    eslestir([["Kutadgu Bilig", "Yusuf Has Hacip"], ["Divanü Lügati't-Türk", "Kaşgarlı Mahmut"], ["Atabetü'l-Hakayık", "Edip Ahmet Yükneki"], ["Divan-ı Hikmet", "Ahmet Yesevi"]],
      (a) => `"${a}" adlı eserin yazarı kimdir?`, (b) => `${b}'in yazdığı eser hangisidir?`, (a, b) => `${a} → ${b}.`),
    eslestir([["Talas Savaşı", "751"], ["Dandanakan Savaşı", "1040"], ["Malazgirt Savaşı", "1071"], ["Miryokefalon Savaşı", "1176"]],
      (a) => `${a} hangi yılda yapılmıştır?`, (b) => `${b} yılında hangi savaş yapılmıştır?`, (a, b) => `${a}: ${b}.`),
    eslestir(DEVLET.slice(3).filter((x) => x[0] !== "Çaka Beyliği"), (a) => `${a} için hangisi doğrudur?`, (b) => `Hangi devlet ${b}?`, (a, b) => `${a} ${b}.`)
  ]);

  U.s3k5 = tiplerden([
    siniflandir({ "Anadolu'da kurulan ilk Türk beyliklerinden": ["Saltuklular", "Mengücekler", "Danişmentliler", "Artuklular", "Çaka Beyliği"], "Anadolu'da kurulan ilk Türk beyliklerinden olmayan": ["Karahanlılar", "Uygurlar", "Asya Hunları", "Gazneliler", "Kök Türkler"] },
      (g) => `Hangisi ${g} biridir?`.replace("olmayan biridir", "değildir").replace("Hangisi Anadolu'da kurulan ilk Türk beyliklerinden olmayan", "Hangisi Anadolu'da kurulan ilk Türk beyliklerinden biri"), (d, g) => `${d} ${g.includes("olmayan") ? "Anadolu'da kurulmamıştır" : "Malazgirt'ten sonra Anadolu'da kurulan ilk Türk beyliklerindendir"}.`),
    ifadeler(["Türkiye Selçuklu Devleti'nin başkenti Konya'dır.", "Kervansaraylar ticaret yolları üzerinde yapılmıştır.", "Ahilik esnaf ve sanatkârların dayanışma teşkilatıdır.", "Çaka Bey ilk Türk donanmasını kurmuştur.", "Malazgirt'ten sonra Anadolu'ya Türk göçleri hızlanmıştır.", "Ahilikte meslek eğitimi usta-çırak ilişkisiyle verilirdi."],
      ["Türkiye Selçuklu Devleti'nin başkenti Bursa'dır.", "Kervansaraylar savaş için yapılmış kalelerdir.", "Ahilik bir askerî teşkilattır.", "İlk Türk donanmasını Artuklular kurmuştur.", "Malazgirt'ten sonra Türkler Anadolu'dan çekilmiştir.", "Ahiler kaliteli üretime önem vermezdi."], "Anadolu'nun Türkleşmesi")
  ]);

  U.s4k1 = tiplerden([
    () => { const Y = [["yasama (kanun yapma)", "TBMM"], ["yürütme (kanunları uygulama)", "Cumhurbaşkanı"], ["yargı (anlaşmazlıkları çözme)", "Bağımsız mahkemeler"]], [a, b] = pick(Y); return soru(`${buyuk(a)} yetkisi kime aittir?`, b, ["TBMM", "Cumhurbaşkanı", "Bağımsız mahkemeler", "Belediyeler", "Muhtarlar"].filter((x) => x !== b), `${buyuk(a)} yetkisi: ${b}.`); },
    siniflandir({ "seçimle göreve gelir": ["muhtar", "belediye başkanı", "milletvekili", "belediye meclisi üyesi", "sınıf başkanı", "Cumhurbaşkanı"], "atamayla göreve gelir": ["vali", "kaymakam", "okul müdürü", "öğretmen", "hâkim"] },
      (g) => `Hangisi ${g}?`, (d, g) => `${buyuk(d)} ${g}.`),
    ifadeler(["Türkiye'de seçme ve seçilme yaşı 18'dir.", "Kanun yapma yetkisi TBMM'ye aittir.", "Muhtar, mahalle halkı tarafından seçilir.", "Okul meclisi demokrasinin okuldaki bir örneğidir.", "Demokrasilerde yönetim halkın seçtiği temsilcilerle yapılır."],
      ["Türkiye'de 12 yaşında oy kullanılabilir.", "Kanunları mahkemeler yapar.", "Vali seçimle göreve gelir.", "Demokrasilerde halk yönetime katılamaz.", "Muhtarı Cumhurbaşkanı atar."], "Yönetime katılım")
  ]);

  U.s4k2 = tiplerden([
    siniflandir({ "temel hak": ["yaşama hakkı", "eğitim hakkı", "sağlık hakkı", "düşünce ve ifade özgürlüğü", "din ve vicdan özgürlüğü", "mülkiyet hakkı", "dilekçe hakkı"], "sorumluluk": ["vergi vermek", "kanunlara uymak", "okul kurallarına uymak", "çevreyi korumak", "başkalarının haklarına saygı göstermek"] },
      (g) => g === "temel hak" ? "Hangisi temel haklardan biridir?" : "Hangisi bir vatandaşlık sorumluluğudur?", (d, g) => `${buyuk(d)} bir ${g === "temel hak" ? "temel haktır" : "sorumluluktur"}.`),
    eslestir([["eğitim hakkı", "okul kurallarına uyup derslere katılmak"], ["ifade özgürlüğü", "fikirlerini başkalarını incitmeden söylemek"], ["sağlık hakkı", "sağlıklı beslenip kendine iyi bakmak"], ["oyun oynama hakkı", "oyun alanlarını temiz ve düzenli kullanmak"]],
      (a) => `"${buyuk(a)}" ile ilgili sorumluluk hangisidir?`, (b) => `"${buyuk(b)}" hangi hakla ilgili bir sorumluluktur?`, (a, b) => `${buyuk(a)} → ${b}.`)
  ]);

  U.s4k3 = tiplerden([
    siniflandir({ "güvenli ve doğru": ["şifresini kimseyle paylaşmamak", "bilgileri güvenilir kaynaklardan kontrol etmek", "siber zorbalığı bir yetişkine bildirmek", "başkasının fotoğrafını izinsiz paylaşmamak", "tanımadığı kişilerin arkadaşlık isteklerini kabul etmemek", "kullandığı kaynakları belirtmek"], "güvensiz ya da yanlış": ["ev adresini sosyal medyada paylaşmak", "şifresini arkadaşına söylemek", "tanımadığı biriyle buluşmak", "her bağlantıya tıklamak", "başkasının ödevini kopyalayıp kendi adıyla göndermek", "internetteki her bilgiye inanmak"] },
      (g) => `Hangisi ${g === "güvenli ve doğru" ? "dijital vatandaşlığa uygun bir davranıştır" : "dijital vatandaşlığa uygun olmayan bir davranıştır"}?`, (d, g) => `"${buyuk(d)}" ${g === "güvenli ve doğru" ? "doğru bir davranıştır" : "yanlış ve güvensiz bir davranıştır"}.`)
  ]);

  U.s5k1 = tiplerden([
    eslestir([["çay", "Rize"], ["fındık", "Ordu ve Giresun"], ["Antep fıstığı", "Gaziantep"], ["kayısı", "Malatya"], ["taş kömürü", "Zonguldak"], ["pamuk", "Çukurova ve Şanlıurfa"], ["zeytin", "Ege ve Marmara kıyıları"], ["fındık", "Karadeniz"], ["buğday", "Konya Ovası"], ["kış turizmi", "Erzurum Palandöken"]].filter((x, i, a) => a.findIndex((y) => y[0] === x[0]) === i),
      (a) => `${buyuk(a)} denince hangi yer akla gelir?`, (b) => `${b} hangisiyle öne çıkar?`, (a, b) => `${buyuk(a)} → ${b}.`),
    siniflandir({ "tarım": ["buğday yetiştirmek", "çay toplamak", "fındık hasadı", "pamuk ekimi"], "madencilik": ["bor çıkarmak", "kömür ocağında çalışmak", "mermer çıkarmak"], "turizm": ["otel işletmek", "turist rehberliği yapmak", "kayak merkezi işletmek"], "sanayi": ["fabrikada otomobil üretmek", "tekstil fabrikasında kumaş dokumak", "un fabrikasında un üretmek"] },
      (g) => `Hangisi ${g} faaliyetine örnektir?`, (d, g) => `${buyuk(d)} bir ${g} faaliyetidir.`, (d) => `"${buyuk(d)}" hangi ekonomik faaliyete örnektir?`)
  ]);

  U.s5k2 = tiplerden([
    eslestir([["pazarlama", "ürünü tüketiciye tanıtma ve satma süreci"], ["yatırım", "gelecekte kazanç sağlamak için kaynak kullanma"], ["girişimci", "yeni bir iş fikrini hayata geçiren kişi"], ["prototip", "bir ürünün test edilen ilk örneği"], ["tüketici", "ürünü satın alıp kullanan kişi"], ["üretici", "mal ya da hizmet üreten kişi"]],
      (a) => `"${buyuk(a)}" kavramının anlamı nedir?`, (b) => `"${buyuk(b)}" hangi kavramla ifade edilir?`, (a, b) => `${buyuk(a)}: ${b}.`),
    eslestir([["tarım", "ziraat mühendisi"], ["madencilik", "maden mühendisi"], ["turizm", "turist rehberi"], ["balıkçılık", "balıkçı"], ["sağlık hizmetleri", "doktor"], ["ormancılık", "orman muhafaza memuru"]],
      (a) => `${buyuk(a)} faaliyetiyle ilgili meslek hangisidir?`, (b) => `${buyuk(b)} hangi ekonomik faaliyetle ilgilidir?`, (a, b) => `${buyuk(a)} → ${b}.`)
  ]);

  U.s6k1 = tiplerden([
    siniflandir({ "geçmişte kullanılan": ["posta güvercini", "atlı haberci", "duman işareti", "mektup", "telgraf", "at arabası", "kervan"], "günümüzde kullanılan": ["internet", "akıllı telefon", "görüntülü görüşme", "hızlı tren", "uydu", "e-posta", "elektrikli otomobil"] },
      (g) => `Hangisi ${g} bir ulaşım ya da iletişim aracıdır?`, (d, g) => `${buyuk(d)} ${g} bir araçtır.`),
    ifadeler(["İpek Yolu Doğu ile Batı'yı birbirine bağlamıştır.", "Matbaa bilginin hızla yayılmasını sağlamıştır.", "Ulaşım ve iletişim teknolojileri kültürel etkileşimi artırır.", "Ticaret yolları ile din, sanat ve bilgi de yayılmıştır.", "İnternet sayesinde dünyadaki olaylar anında öğrenilebilir."],
      ["İpek Yolu sadece Avrupa ülkeleri arasındaydı.", "Matbaa bilginin yayılmasını yavaşlatmıştır.", "Ulaşım teknolojileri kültürleri birbirinden uzaklaştırır.", "Ticaret yolları ile yalnızca ürün taşınmıştır.", "Telgraf internetten sonra icat edilmiştir."], "Ulaşım ve iletişim")
  ]);

  U.s6k2 = tiplerden([
    siniflandir({ "patent ile korunur": ["yeni bir makine buluşu", "yeni bir ilaç formülü", "yeni bir motor tasarımı", "yeni bir tıbbi cihaz"], "telif hakkı ile korunur": ["bir roman", "bir şarkı", "bir film", "bir resim", "bir fotoğraf", "bir bilgisayar oyunu"] },
      (g) => `Hangisi ${g}?`, (d, g) => `${buyuk(d)} ${g}.`),
    ifadeler(["Patent bir buluşu korur.", "Telif hakkı eser sahibinin hakkıdır.", "Başkasının eserinden yararlanırken kaynak gösterilmelidir.", "Patent başvuruları Türk Patent ve Marka Kurumu'na yapılır.", "Araştırma raporunun sonunda kaynakça bulunur."],
      ["Bir şarkıyı izinsiz satmak serbesttir.", "Patent sadece şarkıları korur.", "Kaynak göstermeye gerek yoktur.", "Başkasının yazısını kendi adıyla yayımlamak doğrudur.", "Kaynakça raporun en başına yazılır."], "Telif ve patent")
  ]);
})();
