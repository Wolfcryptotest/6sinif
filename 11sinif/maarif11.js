// 🧭 11. sınıf — Türkiye Yüzyılı Maarif Modeli (2026-2027'de 11. sınıfta ilk kez uygulanan program) düzeni.
// Kaynak: tymm.meb.gov.tr 11. sınıf öğretim programları (tema/ünite listeleri) ve MEB 11. sınıf ders kitabı içindekileri.
// Ders dosyalarındaki eski (2018 programı) konulardan yalnızca yeni programda da bulunanlar kalır; diğerleri 11. sınıftan çıkarılır.
// Kalan konuların kimlikleri değişmez (öğrenci ilerlemesi korunur). Yeni konular kendi kimlikleriyle eklenir.
// İngilizce 2026-2027'de 11. sınıfta önceki programla devam ettiği için olduğu gibi kalır.
// mufredat*.js dosyalarından SONRA, videolar.js'den ÖNCE yüklenir.
(function () {
  if (!window.ICERIK) return;
  const I = window.ICERIK;
  const yap = (k) => ({
    id: k.id, ad: k.ad, ozet: k.ozet || [], anlatim: k.anlatim || [], kelimeler: [],
    sorular: (k.sorular || []).map(([soru, d, y1, y2, y3, cozum]) => ({ soru, secenekler: [d, y1, y2, y3], dogru: 0, cozum: cozum || "" })),
    acik: (k.acik || []).map(([soru, cevap]) => ({ soru, cevap })), ornekler: [], hatalar: []
  });

  // ================= YENİ KONULAR =================
  const Y = {};
  const K = (k) => { Y[k.id] = yap(k); };

  // ---------- BİYOLOJİ ----------
  K({ id: "bio11t1", ad: "Bitkilerde Tepki: Bitki Hormonları, Tropizma ve Nasti",
    ozet: [
      "Oksin: hücre uzaması, ışığa yönelme (gölgede kalan tarafta birikir), tepe tomurcuğu baskınlığı",
      "Sitokinin: hücre bölünmesi, yaprak yaşlanmasını geciktirme · Giberellin: gövde uzaması, tohum çimlenmesi",
      "Absisik asit: tohum ve tomurcukta dormansi, kuraklıkta stomaların kapanması (stres hormonu)",
      "Etilen: gaz hâlinde bir hormon; meyve olgunlaşması, yaprak ve meyve dökümü",
      "Tropizma: hareketin yönü uyaranın yönüne bağlıdır (fototropizma, gravitropizma, tigmotropizma, hidrotropizma, kemotropizma)",
      "Nasti: hareketin yönü uyaranın yönüne bağlı değildir (küstüm otunun dokununca yapraklarını kapatması, çiçeklerin gece-gündüz açılıp kapanması)"
    ],
    anlatim: [
      "Bitkiler hayvanlar gibi yer değiştiremez ama ışık, yer çekimi, su, dokunma ve sıcaklık gibi uyaranlara büyüme ya da turgor değişimiyle tepki verir. Bu tepkileri bitki hormonları düzenler.",
      "Işık bir yandan geldiğinde oksin gövdenin gölgede kalan tarafında birikir; o taraftaki hücreler daha çok uzar ve gövde ışığa doğru eğilir. Bu olaya pozitif fototropizma denir. Kök ise yer çekimi yönünde büyür (pozitif gravitropizma), gövde yer çekimine ters yönde büyür (negatif gravitropizma).",
      "Sarılıcı bitkilerin desteğe dolanması tigmotropizma, köklerin suya doğru büyümesi hidrotropizma, polen tüpünün yumurtalığa doğru ilerlemesi kemotropizmadır.",
      "Nasti hareketlerinde bitki organı uyaranın geldiği yönden bağımsız, belirli bir biçimde hareket eder. Küstüm otu (Mimosa pudica) dokunulunca yapraklarını kapatır; bu hareket hücrelerdeki su kaybıyla (turgor değişimi) olur ve hızlıdır.",
      "Hormonlar birlikte çalışır: absisik asit kuraklıkta stomaları kapatarak su kaybını azaltırken etilen meyvelerin olgunlaşmasını hızlandırır. Bir sepette olgun bir elmanın diğer meyveleri de hızla olgunlaştırması etilen gazı yüzündendir."
    ],
    sorular: [
      ["Gövdenin ışığa doğru eğilmesinde temel rolü olan bitki hormonu hangisidir?", "Oksin", "Etilen", "Absisik asit", "Sitokinin", "Oksin gölgede kalan tarafta birikir, o taraftaki hücreler daha çok uzar."],
      ["Meyvelerin olgunlaşmasını hızlandıran, gaz hâlindeki bitki hormonu hangisidir?", "Etilen", "Oksin", "Giberellin", "Sitokinin", "Etilen gaz hâlindedir; olgun meyve yanındaki meyvelerin de olgunlaşmasını hızlandırır."],
      ["Kuraklıkta stomaların kapanmasını sağlayarak su kaybını azaltan hormon hangisidir?", "Absisik asit", "Giberellin", "Oksin", "Etilen", "Absisik asit stres hormonudur; dormansi ve stoma kapanmasında rol alır."],
      ["Küstüm otunun dokunulunca yapraklarını kapatması hangi tür harekettir?", "Nasti (dokunmaya bağlı)", "Fototropizma", "Pozitif gravitropizma", "Hidrotropizma", "Hareketin yönü uyaranın yönüne bağlı olmadığı için nastidir; turgor değişimiyle olur."],
      ["Kökün yer çekimi yönünde büyümesine ne ad verilir?", "Pozitif gravitropizma", "Negatif gravitropizma", "Pozitif fototropizma", "Kemotropizma", "Kök yer çekimi yönünde (pozitif), gövde ters yönde (negatif) büyür."],
      ["Tropizmayı nastiden ayıran özellik hangisidir?", "Hareketin yönünün uyaranın geliş yönüne bağlı olması", "Yalnızca gece gerçekleşmesi", "Hormonların hiç rol almaması", "Yalnızca köklerde görülmesi", "Tropizmada yön uyarana bağlıdır; nastide bağlı değildir."]
    ],
    acik: [
      ["Bir saksı bitkisi pencere kenarında birkaç gün bırakılınca gövdesinin pencereye doğru eğilmesini hormon etkisiyle açıklayınız.", "Işık bir yandan gelince oksin gövdenin gölgede kalan tarafında birikir. Bu taraftaki hücreler daha fazla uzar ve gövde ışığa doğru eğilir (pozitif fototropizma)."],
      ["Tropizma ile nasti arasındaki farkı birer örnekle yazınız.", "Tropizmada hareketin yönü uyaranın yönüne bağlıdır (gövdenin ışığa yönelmesi). Nastide bağlı değildir (küstüm otunun dokunulunca yapraklarını kapatması)."]
    ] });

  K({ id: "bio11t2", ad: "Kemik, Eklem ve Kaslar; Kas Kasılması",
    ozet: [
      "Kemikler vücuda destek olur, organları korur, mineral depolar; kırmızı kemik iliği kan hücrelerini üretir",
      "Eklemler: oynamaz (kafatası), yarı oynar (omurlar arası), oynar (diz, dirsek, omuz)",
      "Tendon (kiriş) kası kemiğe, ligament (bağ) kemiği kemiğe bağlar",
      "Kas türleri: iskelet kası (çizgili, istemli), düz kas (iç organlar, istemsiz), kalp kası (çizgili, istemsiz)",
      "Kasılma: sinir uyarısı → Ca²⁺ serbest kalır → miyozin başları aktine bağlanır → ATP ile aktin kayar, sarkomer kısalır",
      "Kasılmada A bandı değişmez; H bandı ve I bandı kısalır; aktin ve miyozin ipliklerinin boyu değişmez"
    ],
    anlatim: [
      "Hareket; kemiklerin, eklemlerin ve kasların birlikte çalışmasıyla olur. Kaslar yalnızca çekebilir, itemez; bu yüzden karşıt (antagonist) çiftler hâlinde çalışır. Kolu bükerken ön koldaki kas kasılır, arkadaki gevşer; kolu açarken tersi olur.",
      "İskelet kası hücreleri uzun, çok çekirdekli ve enine çizgilidir. Çizgili görünüm, sarkomer denen birimlerde aktin (ince) ve miyozin (kalın) ipliklerinin düzenli dizilmesinden kaynaklanır.",
      "Kayan iplikler modeline göre sinir uyarısı kasa ulaşınca hücre içindeki depolardan Ca²⁺ iyonları serbest kalır. Miyozin başları aktine bağlanır, ATP enerjisiyle aktin ipliklerini sarkomerin ortasına doğru çeker. İplikler kısalmaz, birbirinin üzerinden kayar; sarkomer kısalır.",
      "Düz kaslar mide, bağırsak ve damar duvarında bulunur; yavaş ve uzun süreli kasılır. Kalp kası çizgili olduğu hâlde istemsiz çalışır ve yorulmadan ritmik kasılır."
    ],
    sorular: [
      ["Kas kasılması sırasında boyu değişmeyen bant hangisidir?", "A bandı", "H bandı", "I bandı", "Sarkomerin tamamı", "A bandı miyozinin boyudur; miyozin kısalmadığı için A bandı değişmez."],
      ["Kas kasılmasının başlaması için hücre içinde serbest kalması gereken iyon hangisidir?", "Ca²⁺", "Na⁺", "Cl⁻", "Fe²⁺", "Ca²⁺ serbest kalınca miyozin başları aktine bağlanabilir."],
      ["Kası kemiğe bağlayan yapı hangisidir?", "Tendon (kiriş)", "Ligament (bağ)", "Eklem sıvısı", "Kemik iliği", "Tendon kası kemiğe, ligament kemiği kemiğe bağlar."],
      ["Kalp kası için hangisi doğrudur?", "Çizgilidir ve istemsiz çalışır", "Düzdür ve istemli çalışır", "Çizgilidir ve istemli çalışır", "Yalnızca sinir uyarısıyla ve istemli kasılır", "Kalp kası çizgili görünümlüdür ama isteğimiz dışında çalışır."],
      ["Kan hücrelerinin üretildiği yer hangisidir?", "Kırmızı kemik iliği", "Sarı kemik iliği", "Kıkırdak doku", "Eklem kapsülü", "Kırmızı kemik iliği alyuvar, akyuvar ve kan pulcuklarını üretir."]
    ],
    acik: [
      ["Kasların karşıt (antagonist) çalışmasını kolun bükülüp açılması örneğiyle açıklayınız.", "Kaslar yalnızca çekebilir. Kol bükülürken ön koldaki kas kasılır, arkadaki gevşer; kol açılırken arkadaki kas kasılır, öndeki gevşer."],
      ["Kayan iplikler modeline göre kasılmada sarkomerin nasıl kısaldığını yazınız.", "Ca²⁺ serbest kalır, miyozin başları aktine bağlanır ve ATP enerjisiyle aktini ortaya doğru çeker. İplikler kısalmaz, üst üste kayar; sarkomer kısalır."]
    ] });

  K({ id: "bio11t3", ad: "Bağışıklık ve Alerji",
    ozet: [
      "Doğal (doğuştan, özgül olmayan) savunma: deri, mukus, mide asidi, gözyaşındaki lizozim, fagositoz, iltihap (inflamasyon), ateş",
      "Kazanılmış (özgül) bağışıklık: B lenfositleri → plazma hücresi → antikor; T lenfositleri hücresel savunma",
      "Bellek hücreleri aynı mikropla ikinci karşılaşmada daha hızlı ve güçlü yanıt sağlar",
      "Aktif bağışıklık: vücut kendi antikorunu üretir (hastalığı geçirmek, aşı) · uzun sürelidir",
      "Pasif bağışıklık: hazır antikor alınır (anne sütü, plasenta, serum) · kısa sürelidir",
      "Alerji: polen, ev tozu akarı gibi zararsız maddelere aşırı tepki; mast hücrelerinden histamin salgılanır"
    ],
    anlatim: [
      "Vücudun ilk savunma hattı deri ve mukozalardır. Mikrop bu engeli geçerse fagositik akyuvarlar onu yutar, yarada kızarıklık, şişme ve sıcaklık artışıyla iltihap tepkisi görülür. Bu savunmalar her mikroba aynı biçimde çalıştığı için özgül değildir.",
      "Özgül savunmada lenfositler belirli bir antijeni tanır. B lenfositleri plazma hücrelerine dönüşüp antikor üretir; T lenfositlerinin bir kısmı virüsle enfekte hücreleri yok eder, bir kısmı da bağışıklık yanıtını yönetir. Yanıt sonrasında oluşan bellek hücreleri sayesinde aynı hastalığa ikinci kez yakalanınca vücut çok daha hızlı yanıt verir.",
      "Aşıda zayıflatılmış ya da öldürülmüş mikrop veya onun bir parçası verilir; vücut hastalanmadan antikor ve bellek hücresi üretir. Bu, yapay aktif bağışıklıktır. Bebeğe anne sütüyle geçen antikorlar ise doğal pasif bağışıklık sağlar.",
      "Alerjide bağışıklık sistemi zararsız bir maddeyi tehlikeli sanar. Mast hücrelerinden histamin salgılanır; hapşırma, kaşıntı, burun akıntısı, gözlerde sulanma görülür. Ağır alerjik tepkiler (anafilaksi) acil tıbbi müdahale gerektirir."
    ],
    sorular: [
      ["Aşı ile kazanılan bağışıklık hangi türdür?", "Yapay aktif bağışıklık", "Doğal pasif bağışıklık", "Yapay pasif bağışıklık", "Doğuştan bağışıklık", "Aşıda vücut antikoru kendisi üretir: aktif; aşı yapay yolla verilir."],
      ["Anne sütüyle bebeğe geçen antikorlar hangi bağışıklığı sağlar?", "Doğal pasif bağışıklık", "Yapay aktif bağışıklık", "Doğal aktif bağışıklık", "Yapay pasif bağışıklık", "Antikor hazır alınır (pasif), doğal yolla geçer."],
      ["Antikor üreten hücre hangisidir?", "Plazma hücresi", "Alyuvar", "Kan pulcuğu", "Nöron", "B lenfositleri plazma hücresine dönüşüp antikor üretir."],
      ["Alerjik tepkide belirtilere yol açan, mast hücrelerinden salgılanan madde hangisidir?", "Histamin", "İnsülin", "Hemoglobin", "Adrenalin", "Histamin damar genişlemesi, kaşıntı ve hapşırmaya yol açar."],
      ["Aşağıdakilerden hangisi özgül olmayan (doğal) savunmaya örnektir?", "Mide asidinin mikropları öldürmesi", "Antikor üretimi", "Bellek hücresi oluşması", "Aşıyla bağışıklık kazanılması", "Mide asidi her mikroba aynı biçimde etki eder."]
    ],
    acik: [
      ["Aktif ve pasif bağışıklığı süre ve kazanılma yolu bakımından karşılaştırınız.", "Aktifte vücut antikoru kendisi üretir (hastalık geçirme, aşı), uzun sürelidir. Pasifte hazır antikor alınır (anne sütü, serum), kısa sürelidir."],
      ["Aynı hastalığa ikinci kez yakalanınca vücudun daha hızlı yanıt vermesinin nedenini yazınız.", "İlk karşılaşmada bellek hücreleri oluşur; ikinci karşılaşmada bu hücreler antijeni hemen tanıyıp hızlı ve güçlü yanıt başlatır."]
    ] });

  K({ id: "bio11h1", ad: "Homeostazi, Geri Bildirim ve Endokrin Sistem",
    ozet: [
      "Homeostazi: vücut sıcaklığı, kan şekeri, su-tuz dengesi, pH gibi iç ortam koşullarının dar sınırlarda tutulması",
      "Negatif geri bildirim: sapmayı tersine çevirir (kan şekeri yükselince insülin salgılanması, terleme)",
      "Pozitif geri bildirim: değişimi artırır (doğumda oksitosin, kanın pıhtılaşması)",
      "İnsülin kan şekerini düşürür, glukagon yükseltir (pankreas) · ADH böbrekte suyun geri emilimini artırır",
      "Hipotalamus-hipofiz ikilisi pek çok bezi yönetir · sinirsel düzenleme hızlı, hormonal düzenleme yavaş ama uzun sürelidir"
    ],
    anlatim: [
      "Dış ortam sürekli değişse de hücrelerimiz belirli bir sıcaklıkta, belirli bir su ve şeker düzeyinde çalışabilir. Vücut bu koşulları alıcılar (reseptörler), kontrol merkezi ve etkileyiciler (kas, bez) üzerinden sürekli izler ve düzeltir.",
      "Yemekten sonra kan şekeri yükselince pankreas insülin salgılar; hücreler glikozu alır, karaciğer glikojen depolar ve kan şekeri düşer. Açlıkta glukagon glikojeni yıkar, kan şekeri yükselir. Sapmanın tersine çevrildiği bu düzenlemeye negatif geri bildirim denir; vücuttaki düzenlemelerin çoğu böyledir.",
      "Doğumda rahim kasılmaları oksitosin salgısını, oksitosin de kasılmaları artırır; süreç doğum gerçekleşene kadar güçlenerek sürer. Bu pozitif geri bildirimdir.",
      "Sıcak bir günde vücut ısısı yükselince deri kılcalları genişler ve terleme artar; soğukta kılcallar daralır, titreme ile ısı üretilir. Su az içildiğinde hipofizden salınan ADH böbreğin daha çok su geri emmesini sağlar; idrar koyulaşır."
    ],
    sorular: [
      ["Doğum sırasında oksitosinin rahim kasılmalarını, kasılmaların da oksitosin salgısını artırması hangi düzenlemeye örnektir?", "Pozitif geri bildirim", "Negatif geri bildirim", "Refleks", "Pasif bağışıklık", "Değişim kendini güçlendirerek sürdüğü için pozitif geri bildirimdir."],
      ["Kan şekeri yükselince insülin salgılanıp kan şekerinin düşmesi hangi düzenlemeye örnektir?", "Negatif geri bildirim", "Pozitif geri bildirim", "Tropizma", "Kas kasılması", "Sapma tersine çevrildiği için negatif geri bildirimdir."],
      ["Böbrekte suyun geri emilimini artıran hormon hangisidir?", "ADH", "Glukagon", "Oksin", "Adrenalin", "ADH (antidiüretik hormon) idrarla su kaybını azaltır."],
      ["Kan şekerini yükselten pankreas hormonu hangisidir?", "Glukagon", "İnsülin", "Oksitosin", "Tiroksin", "Glukagon karaciğerdeki glikojenin glikoza yıkılmasını sağlar."],
      ["Vücut sıcaklığı yükseldiğinde aşağıdakilerden hangisi gerçekleşir?", "Deri kılcalları genişler ve terleme artar", "Titreme başlar", "Deri kılcalları daralır", "Terleme durur", "Isı kaybını artıran bu değişimler sıcaklığı normale döndürür."]
    ],
    acik: [
      ["Negatif ve pozitif geri bildirimi birer örnekle açıklayınız.", "Negatif: kan şekeri yükselince insülin salgılanır, kan şekeri düşer (sapma tersine çevrilir). Pozitif: doğumda oksitosin kasılmaları, kasılmalar oksitosini artırır (değişim güçlenir)."],
      ["Su az içildiğinde idrarın koyulaşmasını hormon etkisiyle açıklayınız.", "Vücuttaki su azalınca hipofizden ADH salgısı artar; böbrekler daha çok su geri emer, idrar az ve koyu olur."]
    ] });

  K({ id: "bio11h2", ad: "Homeostazi Bozulunca: Diyabet, Yüksek Tansiyon ve Obezite",
    ozet: [
      "Diabetes mellitus (şeker hastalığı): insülin yetersizliği (Tip 1) ya da insülin direnci (Tip 2) → kan şekeri yüksek, idrarda şeker",
      "Diabetes insipidus: ADH eksikliği veya böbreğin ADH'ye yanıt vermemesi → çok miktarda seyreltik idrar, aşırı susama; kan şekeri normaldir",
      "Hipertansiyon (yüksek tansiyon): kan basıncının sürekli yüksek olması; kalp, damar ve böbrekleri yorar",
      "Obezite: alınan enerjinin harcanandan sürekli fazla olması → aşırı yağ birikimi",
      "Korunma: dengeli beslenme, tuz ve şekeri azaltma, düzenli hareket, düzenli sağlık kontrolü"
    ],
    anlatim: [
      "Homeostazi mekanizmaları uzun süre bozulduğunda hastalıklar ortaya çıkar. Şeker hastalığında kan şekeri düzenlenemez. Tip 1 diyabette pankreas yeterli insülin üretemez; Tip 2'de insülin vardır ama hücreler ona iyi yanıt vermez. Tip 2 diyabet hareketsiz yaşam ve fazla kilo ile ilişkilidir.",
      "Diabetes insipidus adında 'diyabet' geçse de şekerle ilgili değildir. ADH yetersiz olduğunda böbrekler suyu geri ememez; kişi çok sık ve çok fazla idrara çıkar, sürekli susar.",
      "Yüksek tansiyonda kalp kanı pompalamak için daha çok çalışır; zamanla kalp, damar ve böbrek hasarı riski artar. Fazla tuz, hareketsizlik ve fazla kilo risk etkenleridir.",
      "Sağlıkla ilgili belirtiler fark edildiğinde doğru adres bir hekimdir; bu bilgiler tanı koymak için değil, vücudun dengesini anlamak içindir."
    ],
    sorular: [
      ["Pankreasın yeterli insülin üretemediği hastalık hangisidir?", "Tip 1 diyabet", "Diabetes insipidus", "Hipertansiyon", "Alerji", "Tip 1 diyabette insülin üretimi yetersizdir."],
      ["Diabetes insipidus için hangisi doğrudur?", "ADH yetersizliği ile çok miktarda seyreltik idrar oluşur", "Kan şekeri çok yükselir", "İnsülin fazlalığından kaynaklanır", "İdrarda bol şeker bulunur", "Diabetes insipidus su dengesiyle ilgilidir; kan şekeri normaldir."],
      ["Yüksek tansiyon için risk etkeni olan alışkanlık hangisidir?", "Çok tuzlu beslenmek", "Düzenli yürüyüş yapmak", "Bol su içmek", "Sebze ağırlıklı beslenmek", "Fazla tuz kan basıncını yükseltir."],
      ["Obezitenin temel nedeni hangisidir?", "Alınan enerjinin harcanan enerjiden sürekli fazla olması", "Fazla su içilmesi", "Uzun süre uyunması", "Vitamin alınması", "Enerji fazlası yağ olarak depolanır."],
      ["Tip 2 diyabetin temel özelliği hangisidir?", "Hücrelerin insüline yeterli yanıt vermemesi", "ADH hormonunun hiç üretilmemesi", "Kanın pıhtılaşmaması", "Kas kasılmasının durması", "Tip 2'de insülin direnci vardır."]
    ],
    acik: [
      ["Diabetes mellitus ile diabetes insipidus arasındaki farkı yazınız.", "Mellitus kan şekeri düzenlemesinin bozulmasıdır (insülin eksikliği/direnci, kan şekeri yüksek). İnsipidus su dengesinin bozulmasıdır (ADH eksikliği, çok seyreltik idrar, kan şekeri normal)."],
      ["Yüksek tansiyon ve obeziteden korunmak için üç öneri yazınız.", "Tuzu ve şekerli yiyecekleri azaltmak, düzenli hareket etmek, dengeli beslenmek ve düzenli sağlık kontrolü yaptırmak."]
    ] });

  // ---------- TÜRK DİLİ VE EDEBİYATI ----------
  K({ id: "ede11a1", ad: "Geleneksel Türk Tiyatrosu: Karagöz",
    ozet: [
      "Karagöz bir gölge oyunudur: deriden yapılan tasvirler ışık yardımıyla beyaz perdeye (ayna) yansıtılır",
      "Oyunu oynatan sanatçıya hayalî denir; tasvirleri, sesleri ve müziği o yönetir",
      "Bölümler: mukaddime (giriş, Hacivat'ın perde gazeli) → muhavere (Karagöz-Hacivat söyleşmesi) → fasıl (asıl oyun) → bitiş",
      "Karagöz: halktan, okumamış, saf, açık sözlü; sade Türkçe konuşur · Hacivat: okumuş, kibar, Arapça-Farsça sözcüklerle konuşur",
      "Gülmece çoğunlukla yanlış anlamalar ve söz oyunlarından doğar; Karagöz UNESCO somut olmayan kültürel miras listesindedir"
    ],
    anlatim: [
      "Karagöz, geleneksel Türk tiyatrosunun gölge oyunudur. Deve ya da manda derisinden kesilip boyanan tasvirler perdenin arkasından ışıkla yansıtılır. Seyirci perdeye düşen renkli gölgeleri izler.",
      "Oyun belli bir düzenle ilerler. Mukaddimede Hacivat perde gazelini okur; muhaverede Karagöz ile Hacivat arasında, olay örgüsünden bağımsız, söz oyunlarına dayalı bir söyleşme geçer; fasılda asıl hikâye oynanır; bitişte Karagöz kusurların bağışlanmasını dileyerek oyunu kapatır.",
      "Karagöz ile Hacivat'ın dil ve üslup farkı gülmecenin kaynağıdır. Hacivat'ın süslü, yabancı sözcüklerle dolu konuşmasını Karagöz yanlış anlar; ortaya çıkan anlam kaymaları güldürür. Bu, iletişimde ortak dil kullanmanın önemini de gösterir.",
      "Oyunda Tiryaki, Tuzsuz Deli Bekir, Zenne, Beberuhi gibi tipler toplumun farklı kesimlerini temsil eder. Karagöz oyunları eğlendirirken toplumsal aksaklıkları da eleştirir."
    ],
    sorular: [
      ["Karagöz oyununda Hacivat'ın perde gazelini okuduğu giriş bölümüne ne ad verilir?", "Mukaddime", "Muhavere", "Fasıl", "Bitiş", "Oyun mukaddime ile başlar."],
      ["Karagöz ile Hacivat arasındaki, olay örgüsünden bağımsız söyleşme bölümü hangisidir?", "Muhavere", "Mukaddime", "Fasıl", "Perde gazeli", "Muhavere söz oyunlarına dayalı karşılıklı konuşmadır."],
      ["Karagöz oyununu oynatan sanatçıya ne denir?", "Hayalî", "Meddah", "Kavuklu", "Pişekâr", "Meddah tek kişilik anlatıcı; kavuklu ve pişekâr orta oyunu tipleridir."],
      ["Karagöz oyunlarında gülmecenin en önemli kaynağı hangisidir?", "Yanlış anlamalar ve söz oyunları", "Kostüm değişiklikleri", "Sahnedeki dekor", "Uzun monologlar", "Hacivat'ın süslü dilini Karagöz'ün yanlış anlaması güldürür."],
      ["Hacivat'ın konuşması için hangisi doğrudur?", "Kibar ve Arapça-Farsça sözcüklerle süslüdür", "Kaba ve argo doludur", "Yalnızca şarkıyla konuşur", "Hiç konuşmaz, yalnızca işaret eder", "Hacivat okumuş, kibar bir tiptir; dili süslüdür."]
    ],
    acik: [
      ["Karagöz ve Hacivat'ın dil ve üslup özelliklerini karşılaştırınız.", "Karagöz halktan, okumamış, açık sözlüdür; sade Türkçe kullanır. Hacivat okumuş, kibar ve uzlaşmacıdır; Arapça-Farsça sözcüklerle süslü konuşur."],
      ["Karagöz oyununun bölümlerini sırasıyla yazınız.", "Mukaddime (giriş), muhavere (söyleşme), fasıl (asıl oyun), bitiş."]
    ] });

  K({ id: "ede11a2", ad: "Mektup, Dilekçe ve E-posta",
    ozet: [
      "Mektup türleri: özel mektup, resmî mektup, iş mektubu, edebî mektup, açık mektup (gazete-dergide herkese açık yazılan)",
      "Mektup bölümleri: yer-tarih, hitap, giriş, gelişme, sonuç (dilek-selam), imza",
      "Dilekçe: resmî bir kuruma istek, şikâyet ya da bilgi için yazılır; tarih sağ üstte, kurum adı ortada büyük harfle, ad-soyad-imza sağ altta, adres sol altta",
      "E-posta: açık bir konu satırı, uygun hitap, kısa ve net metin, gerekiyorsa ek ve imza",
      "Resmî yazışmalarda nezaket, açıklık ve yazım-noktalama kurallarına uyum zorunludur"
    ],
    anlatim: [
      "Mektup, uzaktaki birine duygu, düşünce ve haberleri yazıyla iletme yoludur. Özel mektupta samimi bir dil kullanılır; resmî ve iş mektuplarında ise ölçülü, açık ve kurallara uygun bir dil gerekir. Edebî mektuplarda sanat kaygısı öne çıkar.",
      "Dilekçe, bir kişinin resmî bir kuruma isteğini düzenli biçimde iletmesini sağlar. Kurum adı sayfanın ortasına büyük harflerle yazılır, metin kısa ve açık olur; 'Gereğini bilgilerinize arz ederim.' gibi kalıplarla bitirilir. Ad-soyad ve imza sağ alta, adres sol alta yazılır.",
      "E-posta hızlı bir yazışma aracıdır ama resmî bir e-postada da mektup kuralları geçerlidir. Konu satırı içeriği özetlemeli, hitap uygun olmalı, metin kısa paragraflarla yazılmalıdır. Eklerin gönderildiği metinde belirtilmeli, e-posta adınız ve iletişim bilginizle bitmelidir.",
      "Karagöz-Hacivat örneğinde görüldüğü gibi, alıcının anlayacağı açık bir dil seçmek iletişimin temel koşuludur."
    ],
    sorular: [
      ["Resmî bir kuruma istek veya şikâyet bildirmek için yazılan metin hangisidir?", "Dilekçe", "Özel mektup", "Günlük", "Anı", "Dilekçe resmî kurumlara yazılır."],
      ["Dilekçede kurumun adı nereye yazılır?", "Sayfanın ortasına, büyük harflerle", "Sağ alt köşeye", "Sol alt köşeye, küçük harflerle", "Metnin sonuna", "Kurum adı ortalanır ve büyük harfle yazılır."],
      ["Gazete veya dergi aracılığıyla herkesin okuması için yazılan mektuba ne ad verilir?", "Açık mektup", "Özel mektup", "İş mektubu", "Dilekçe", "Açık mektup bir kişiye hitap etse de kamuoyuna yöneliktir."],
      ["Resmî bir e-postada aşağıdakilerden hangisi yanlıştır?", "Konu satırını boş bırakmak", "Uygun bir hitapla başlamak", "Kısa ve açık yazmak", "Ek gönderildiğini belirtmek", "Konu satırı e-postanın içeriğini özetlemelidir."],
      ["Mektubun bölümlerinden hangisi samimiyet ve dilek-selam ifadelerinin yer aldığı bölümdür?", "Sonuç", "Hitap", "Tarih", "Giriş", "Sonuç bölümünde dilek ve selam yer alır."]
    ],
    acik: [
      ["Okul müdürlüğüne kütüphanenin hafta sonu açık olması isteğiyle yazılacak bir dilekçenin bölümlerini sıralayınız.", "Sağ üstte tarih; ortada büyük harflerle '... OKULU MÜDÜRLÜĞÜNE'; isteği açıklayan kısa metin ve 'Gereğini bilgilerinize arz ederim.'; sağ altta ad-soyad ve imza; sol altta adres."],
      ["Özel mektup ile resmî mektubun dil özelliklerini karşılaştırınız.", "Özel mektup samimi, günlük dille yazılır. Resmî mektup ölçülü, açık, kurallara uygun ve kişisel duygulardan uzak bir dille yazılır."]
    ] });

  K({ id: "ede11a3", ad: "Fiilimsiler (Eylemsiler)",
    ozet: [
      "Fiilimsi: fiil kök ya da gövdesine getirilen eklerle isim, sıfat ya da zarf görevinde kullanılan sözcük",
      "İsim-fiil ekleri: -ma, -ış, -mak (okuma, gidiş, yazmak)",
      "Sıfat-fiil ekleri: -an, -ası, -maz, -ar, -dık, -acak, -mış (koşan çocuk, gelecek yıl)",
      "Zarf-fiil ekleri: -ıp, -arak, -madan, -ınca, -dıkça, -alı, -ken, -casına, -meksizin, -a…-a (gülerek, gelince)",
      "Fiilimsiler kip ve kişi eki almaz; yan cümle kurarak cümleyi birleşik cümle yapar"
    ],
    anlatim: [
      "Fiilimsiler fiilden türeyip isim, sıfat ya da zarf gibi davranan sözcüklerdir. 'Okumak bilgiyi artırır.' cümlesinde 'okumak' isim gibi özne olmuştur (isim-fiil).",
      "'Koşan çocuk düştü.' cümlesinde 'koşan' çocuğu nitelediği için sıfat-fiildir. Sıfat-fiil nitelediği isim düşünce adlaşabilir: 'Gelenler oturdu.'",
      "'Eve gelince seni aradım.' cümlesinde 'gelince' fiilin zamanını bildirdiği için zarf-fiildir. Zarf-fiiller genellikle zaman, durum ya da koşul bildirir.",
      "-ma eki olumsuzluk eki ile karıştırılmamalıdır: 'Kitabı okuma!' cümlesinde -ma olumsuzluk ekidir, çünkü kip bildiren çekimli bir fiildir; 'Okuma alışkanlığı' ifadesinde ise isim-fiil ekidir."
    ],
    sorular: [
      ["'Koşan çocuk yere düştü.' cümlesindeki fiilimsinin türü nedir?", "Sıfat-fiil", "İsim-fiil", "Zarf-fiil", "Çekimli fiil", "'Koşan' çocuğu nitelediği için sıfat-fiildir."],
      ["'Eve gelince seni aradım.' cümlesindeki fiilimsinin türü nedir?", "Zarf-fiil", "Sıfat-fiil", "İsim-fiil", "Çekimli fiil", "'Gelince' yüklemin zamanını bildirir."],
      ["Aşağıdakilerin hangisinde isim-fiil vardır?", "Yüzmek sağlıklı bir spordur.", "Gülerek içeri girdi.", "Yorulan öğrenciler dinlendi.", "Sabah olunca yola çıktık.", "'Yüzmek' cümlede özne olmuştur."],
      ["'Kitabı okuma, bana ver.' cümlesindeki '-ma' eki için hangisi doğrudur?", "Olumsuzluk ekidir", "İsim-fiil ekidir", "Sıfat-fiil ekidir", "Zarf-fiil ekidir", "Emir kipiyle çekimli bir fiildir; -ma olumsuzluk bildirir."],
      ["Aşağıdaki eklerden hangisi zarf-fiil ekidir?", "-arak", "-mak", "-an", "-acak", "-arak durum bildiren zarf-fiil ekidir."]
    ],
    acik: [
      ["İsim-fiil, sıfat-fiil ve zarf-fiil için birer cümle yazınız.", "Örnek: Okumak çok keyifli (isim-fiil). Gülen çocuk bize baktı (sıfat-fiil). Koşarak geldi (zarf-fiil)."],
      ["'Gelenler' sözcüğünde neden adlaşmış sıfat-fiil olduğunu açıklayınız.", "'Gelen' sıfat-fiildir; nitelediği isim (kişiler) düşmüş, sözcük çoğul eki alarak ismin yerini tutmuştur."]
    ] });

  K({ id: "ede11b1", ad: "Orhun Abideleri, Dîvânu Lugâti't-Türk ve Kutadgu Bilig",
    ozet: [
      "Orhun Abideleri (Göktürk Yazıtları): Moğolistan'da Orhun vadisinde; Tonyukuk, Kül Tigin (732) ve Bilge Kağan (735) yazıtları; Göktürk alfabesiyle",
      "Yazıtlar söylev (hitabet) türünün örneğidir; 1893'te Danimarkalı Vilhelm Thomsen tarafından çözülmüştür",
      "Dîvânu Lugâti't-Türk: Kâşgarlı Mahmud, 1072-1074; Araplara Türkçe öğretmek için yazılmış Türkçe-Arapça sözlük; sav (atasözü), koşuk ve sagu örnekleri içerir",
      "Kutadgu Bilig: Yusuf Has Hacib, 1069-1070; Karahanlı hükümdarına sunulan siyasetname; aruz ölçüsüyle, mesnevi biçiminde",
      "Kutadgu Bilig'in kahramanları: Kün Togdı (adalet), Ay Toldı (talih/devlet), Ögdülmiş (akıl), Odgurmış (akıbet)"
    ],
    anlatim: [
      "Orhun Abideleri, Türk adının geçtiği ve tarihi kesin olarak bilinen ilk Türkçe metinler arasındadır. Kül Tigin ve Bilge Kağan yazıtlarında Bilge Kağan, Türk milletine seslenir; geçmişte yaşanan bölünmeleri, başarıları anlatır ve milletine öğüt verir. Bu yüzden yazıtlar söylev türünün ilk örnekleri sayılır.",
      "Dîvânu Lugâti't-Türk, Kâşgarlı Mahmud'un Türk boylarını dolaşarak derlediği sözcüklerle hazırladığı sözlüktür. Sözcükleri açıklarken atasözü ve şiir örnekleri verdiği için Türk kültürünün ve sözlü edebiyatının da kaynağıdır; içinde Türk dünyasını gösteren bir dünya haritası bulunur.",
      "Kutadgu Bilig 'mutluluk veren bilgi' anlamına gelir. Yusuf Has Hacib, devlet yönetiminin ilkelerini dört sembolik kişinin konuşmaları üzerinden anlatır. Eser, İslami dönem Türk edebiyatının ilk büyük eserlerindendir.",
      "Bu metinler, Türkçenin yüzyıllar boyunca geniş bir coğrafyada edebî ve bilimsel dil olarak kullanıldığını gösterir."
    ],
    sorular: [
      ["Dîvânu Lugâti't-Türk'ün yazılış amacı hangisidir?", "Araplara Türkçe öğretmek", "Hükümdara devlet yönetimini öğretmek", "Göktürk tarihini anlatmak", "Divan şairlerinin hayatını anlatmak", "Kâşgarlı Mahmud eseri Araplara Türkçe öğretmek için yazmıştır."],
      ["Kutadgu Bilig'in yazarı kimdir?", "Yusuf Has Hacib", "Kâşgarlı Mahmud", "Edip Ahmed Yükneki", "Ahmed Yesevi", "Kutadgu Bilig'i Yusuf Has Hacib yazmıştır."],
      ["Orhun Abideleri hangi türün ilk örnekleri sayılır?", "Söylev (hitabet)", "Roman", "Tiyatro", "Deneme", "Bilge Kağan milletine seslenir; metin söylev özelliği taşır."],
      ["Kutadgu Bilig'de 'adaleti' temsil eden kişi hangisidir?", "Kün Togdı", "Ay Toldı", "Ögdülmiş", "Odgurmış", "Kün Togdı hükümdardır ve adaleti temsil eder."],
      ["Orhun Yazıtları'nı çözen bilim insanı kimdir?", "Vilhelm Thomsen", "Kâşgarlı Mahmud", "Fuad Köprülü", "Yusuf Has Hacib", "Danimarkalı Vilhelm Thomsen yazıtları 1893'te çözmüştür."]
    ],
    acik: [
      ["Dîvânu Lugâti't-Türk'ün yalnızca bir sözlük olmadığını gösteren iki özelliği yazınız.", "Sözcükleri açıklarken atasözü (sav) ve şiir (koşuk, sagu) örnekleri verir; Türk boyları ve kültürü hakkında bilgi içerir; Türk dünyasını gösteren bir harita bulunur."],
      ["Kutadgu Bilig'in neden siyasetname türünde sayıldığını açıklayınız.", "Eser, hükümdara ve devlet adamlarına devlet yönetiminin ilkelerini öğretmek amacıyla yazılmıştır."]
    ] });

  K({ id: "ede11b2", ad: "Âşık Tarzı Halk Şiiri ve Türk Dünyasından Hikâye",
    ozet: [
      "Âşık tarzı şiir saz eşliğinde, hece ölçüsüyle, dörtlüklerle söylenir; uyak çoğunlukla yarım uyaktır",
      "Şair adını (mahlas) son dörtlükte söyler · Usta-çırak geleneğiyle yetişilir",
      "Nazım şekilleri: koşma (11'li hece, en yaygın), semai (8'li), varsağı (8'li, 'bre, hey' gibi seslenmeler), destan",
      "Temsilciler: Pir Sultan Abdal (16. yy), Karacaoğlan (17. yy, doğa ve aşk), Dadaloğlu (19. yy), Âşık Veysel (20. yy)",
      "Türk dünyası hikâyeleri ortak dil, din, gelenek ve değerleri yansıtır; Kırgız yazar Cengiz Aytmatov bu alanın tanınmış adlarındandır"
    ],
    anlatim: [
      "Âşık tarzı halk şiiri, halkın içinden yetişen ozanların sazla, çoğunlukla doğaçlama söylediği şiirdir. Dil sadedir; doğa, aşk, gurbet, ayrılık, ölüm ve toplumsal konular işlenir.",
      "Koşma, âşık tarzının en yaygın nazım şeklidir; 11'li hece ölçüsüyle ve dörtlüklerle yazılır, konusu çoğunlukla aşk ve doğadır. Semai 8'li hece ölçüsüyle söylenir ve kendine özgü bir ezgisi vardır. Destan ise savaş, deprem, salgın gibi toplumsal olayları anlatır.",
      "Karacaoğlan doğal ve içten diliyle koşmalarıyla tanınır; Dadaloğlu, göçebe Türkmenlerin iskânına karşı çıkışı anlatan destanlarıyla bilinir. Âşık Veysel ise geleneği 20. yüzyıla taşımıştır.",
      "Türk dünyasından hikâyeler okunurken metindeki ortak kültür unsurlarına (misafirperverlik, büyüklere saygı, at, yurt sevgisi, destan kahramanları) ve farklı lehçelerden gelen sözcüklere dikkat edilir."
    ],
    sorular: [
      ["Âşık tarzı halk şiirinin en yaygın nazım şekli ve hece ölçüsü hangisidir?", "Koşma — 11'li hece", "Semai — 11'li hece", "Gazel — aruz", "Mani — 7'li hece", "Koşma 11'li hece ölçüsüyle söylenir."],
      ["Âşık tarzı şiirde şairin adını söylediği bölüm hangisidir?", "Son dörtlük", "İlk dörtlük", "Nakarat", "Başlık", "Mahlas son dörtlükte geçer."],
      ["Doğa ve aşk konulu koşmalarıyla tanınan 17. yüzyıl halk şairi kimdir?", "Karacaoğlan", "Âşık Veysel", "Dadaloğlu", "Pir Sultan Abdal", "Karacaoğlan 17. yüzyılda yaşamıştır."],
      ["Toplumu etkileyen savaş, salgın, deprem gibi olayları anlatan nazım şekli hangisidir?", "Destan", "Semai", "Koşma", "Varsağı", "Destan toplumsal olayları anlatır."],
      ["Âşık tarzı şiirde genellikle kullanılan uyak türü hangisidir?", "Yarım uyak", "Zengin uyak", "Tunç uyak", "Hiç uyak kullanılmaz", "Kulağa dayalı yarım uyak yaygındır."]
    ],
    acik: [
      ["Koşma ile semaiyi ölçü ve konu bakımından karşılaştırınız.", "Koşma 11'li hece ölçüsüyle, çoğunlukla aşk ve doğa konusunda söylenir. Semai 8'li hece ölçüsüyle ve kendine özgü bir ezgiyle söylenir."],
      ["Âşık tarzı şiirin dört özelliğini yazınız.", "Saz eşliğinde söylenir; hece ölçüsü kullanılır; dörtlüklerle kurulur; mahlas son dörtlükte geçer; dili sadedir; yarım uyak yaygındır."]
    ] });

  K({ id: "ede11c1", ad: "Roman",
    ozet: [
      "Roman: gerçek ya da gerçeğe yakın olayları uzun soluklu anlatan kurmaca türü",
      "Yapı unsurları: olay örgüsü, kişiler, zaman, mekân, anlatıcı ve bakış açısı, tema",
      "Bakış açıları: kahraman anlatıcı (1. kişi), gözlemci anlatıcı, hâkim (ilahi) anlatıcı",
      "Türleri: tarihî, macera, psikolojik, sosyal, bilim kurgu, polisiye",
      "İlk çeviri roman: Telemak (Yusuf Kâmil Paşa) · İlk yerli roman: Taaşşuk-ı Talat ve Fitnat (Şemsettin Sami, 1872)"
    ],
    anlatim: [
      "Roman, hikâyeye göre daha uzun, kişi kadrosu daha geniş ve olay örgüsü daha karmaşık bir anlatı türüdür. Yazar, kurmaca bir dünya yaratır ama bu dünya okura inandırıcı gelmelidir.",
      "Anlatıcı, olayları kimin gözünden okuduğumuzu belirler. Kahraman anlatıcı birinci kişiyle anlatır ve yalnızca kendi bildiklerini aktarabilir. Gözlemci anlatıcı bir kamera gibi gördüklerini aktarır. Hâkim anlatıcı ise kişilerin iç dünyalarını da bilir.",
      "Türk edebiyatında roman Tanzimat döneminde çevirilerle başlamıştır. Yusuf Kâmil Paşa'nın Telemak çevirisi ilk çeviri romandır; Şemsettin Sami'nin Taaşşuk-ı Talat ve Fitnat'ı ilk yerli roman kabul edilir.",
      "Bir romanı incelerken olay örgüsünün nasıl kurulduğu, kişilerin nasıl değiştiği, zaman ve mekânın olaylara etkisi ve yazarın vermek istediği düşünce (tema) birlikte değerlendirilir."
    ],
    sorular: [
      ["Olayları birinci kişinin ağzından anlatan, yalnızca kendi bildiklerini aktarabilen anlatıcı hangisidir?", "Kahraman anlatıcı", "Hâkim anlatıcı", "Gözlemci anlatıcı", "Dış ses", "Kahraman anlatıcı olayları yaşayan kişidir."],
      ["Kişilerin iç dünyasını, düşüncelerini ve geçmişini bilen anlatıcı hangisidir?", "Hâkim (ilahi) anlatıcı", "Kahraman anlatıcı", "Gözlemci anlatıcı", "Sunucu", "Hâkim anlatıcı her şeyi bilir."],
      ["Türk edebiyatında ilk yerli roman kabul edilen eser hangisidir?", "Taaşşuk-ı Talat ve Fitnat", "Telemak", "Kutadgu Bilig", "Şair Evlenmesi", "Şemsettin Sami'nin eseridir (1872)."],
      ["Aşağıdakilerden hangisi romanın yapı unsurlarından biri değildir?", "Uyak", "Olay örgüsü", "Mekân", "Anlatıcı", "Uyak şiirle ilgilidir."],
      ["Türk edebiyatındaki ilk çeviri roman hangisidir?", "Telemak", "Taaşşuk-ı Talat ve Fitnat", "Vatan yahut Silistre", "Dîvânu Lugâti't-Türk", "Yusuf Kâmil Paşa tarafından çevrilmiştir."]
    ],
    acik: [
      ["Kahraman anlatıcı ile hâkim anlatıcının farkını yazınız.", "Kahraman anlatıcı olayları yaşayan kişidir, birinci kişiyle anlatır, yalnızca kendi bildiğini aktarır. Hâkim anlatıcı olayların dışındadır, kişilerin iç dünyasını da bilir."],
      ["Okuduğunuz bir romanı olay örgüsü, kişiler, zaman ve mekân bakımından kısaca tanıtınız.", "Öğrencinin seçtiği romana göre değişir: ana olay, başlıca kişiler, olayların geçtiği dönem ve yer belirtilmelidir."]
    ] });

  K({ id: "ede11c2", ad: "Biyografi, Tezkire, Mülakat ve Radyo Tiyatrosu",
    ozet: [
      "Biyografi: bir kişinin hayatının başka biri tarafından belgelere dayanarak anlatılması · otobiyografi: kişinin kendi hayatını anlatması",
      "Tezkire: divan edebiyatında şairlerin hayatlarını anlatıp şiirlerinden örnekler veren eserler",
      "İlk tezkire: Ali Şir Nevayi'nin Mecâlisü'n-Nefâis'i · Anadolu'daki ilk tezkire: Sehî Bey'in Heşt Behişt'i",
      "Mülakat: bir konuda uzman ya da tanınmış kişiye sorular sorularak görüşlerinin alınması",
      "Radyo tiyatrosu: yalnızca sese dayanır; diyalog, anlatıcı, ses efekti ve müzikle görüntü dinleyicinin zihninde canlandırılır"
    ],
    anlatim: [
      "Biyografi yazarı, anlattığı kişinin hayatını belgeler, mektuplar, tanıklıklar ve eserler üzerinden aktarır; anlatım üçüncü kişiyle yapılır ve nesnel olmaya çalışılır. Otobiyografide ise kişi kendi hayatını birinci kişiyle anlatır.",
      "Tezkireler divan edebiyatında biyografinin karşılığıdır. Şairlerin hayatı, sanat anlayışı ve şiirlerinden seçmeler verildiği için edebiyat tarihi açısından değerli kaynaklardır.",
      "Mülakatta görüşmeci, konuşulan kişinin düşüncelerini öğrenmek için önceden hazırladığı soruları sorar. Ağırlık kişinin fikirlerindedir; röportajda ise gözlem ve izlenimler de metne katılır.",
      "Radyo tiyatrosunda sahne ve dekor yoktur. Kapı gıcırtısı, yağmur sesi, ayak sesleri gibi efektler ve ses tonundaki değişiklikler mekânı ve duyguyu dinleyiciye hissettirir."
    ],
    sorular: [
      ["Divan edebiyatında şairlerin hayatlarını anlatıp şiirlerinden örnekler veren eserlere ne ad verilir?", "Tezkire", "Siyasetname", "Seyahatname", "Münşeat", "Tezkireler şair biyografileridir."],
      ["Bir kişinin kendi hayatını anlattığı türe ne ad verilir?", "Otobiyografi", "Biyografi", "Tezkire", "Mülakat", "Otobiyografide anlatıcı kişinin kendisidir."],
      ["Görüntüye yer vermeden yalnızca ses, efekt ve müzikle oluşturulan tür hangisidir?", "Radyo tiyatrosu", "Belgesel", "Karagöz", "Afiş", "Radyo tiyatrosu yalnızca sese dayanır."],
      ["Anadolu sahasındaki ilk tezkire hangisidir?", "Heşt Behişt", "Mecâlisü'n-Nefâis", "Kutadgu Bilig", "Dîvânu Lugâti't-Türk", "Sehî Bey'in Heşt Behişt'i Anadolu'daki ilk tezkiredir."],
      ["Bir kişiye sorular sorularak onun bir konudaki görüşlerinin alındığı tür hangisidir?", "Mülakat", "Biyografi", "Tezkire", "Hatıra", "Mülakatta ağırlık kişinin görüşlerindedir."]
    ],
    acik: [
      ["Biyografi ile otobiyografiyi anlatıcı ve anlatım bakımından karşılaştırınız.", "Biyografide hayatı başkası anlatır, anlatım üçüncü kişiyledir ve belgelere dayanır. Otobiyografide kişi kendi hayatını birinci kişiyle anlatır."],
      ["Radyo tiyatrosunda mekânın dinleyiciye nasıl hissettirildiğini açıklayınız.", "Ses efektleri (yağmur, kapı, ayak sesi), müzik, anlatıcının açıklamaları ve konuşanların ses tonu ile mekân ve atmosfer dinleyicinin zihninde canlandırılır."]
    ] });

  K({ id: "ede11d1", ad: "Modern Türk Tiyatrosu",
    ozet: [
      "Tiyatro: sahnede oyuncular aracılığıyla canlandırılmak üzere yazılan, diyaloga dayalı tür",
      "Unsurlar: perde ve sahne, kişiler, diyalog ve monolog, dekor, kostüm, ışık, yönetmen",
      "Türleri: trajedi, komedi, dram",
      "İlk yerli tiyatro eseri: Şair Evlenmesi (Şinasi, 1860) · Vatan yahut Silistre (Namık Kemal, 1873)",
      "Cumhuriyet döneminde epik tiyatro örneği: Keşanlı Ali Destanı (Haldun Taner)"
    ],
    anlatim: [
      "Tiyatro metni okunmak için değil, sahnede oynanmak için yazılır. Bu yüzden anlatıcı yoktur; olaylar kişilerin konuşmaları ve hareketleriyle ilerler. Parantez içindeki açıklamalar oyuncuya ve yönetmene yöneliktir.",
      "Trajedi, kahramanın acıklı sonunu yüce bir dille anlatır; komedi, insanların ve toplumun gülünç yönlerini eleştirir; dram ise gerçek hayattaki gibi acı ile güldürüyü bir arada verir.",
      "Batılı anlamdaki Türk tiyatrosu Tanzimat döneminde başlar. Şinasi'nin Şair Evlenmesi, görücü usulüyle evliliği eleştiren tek perdelik bir komedidir. Namık Kemal'in Vatan yahut Silistre'si ise vatan sevgisini işler.",
      "Cumhuriyet döneminde tiyatro çeşitlenmiştir. Haldun Taner, Keşanlı Ali Destanı ile seyirciyi oyunun içine katan, anlatıcı ve şarkılardan yararlanan epik tiyatronun önemli bir örneğini vermiştir."
    ],
    sorular: [
      ["Türk edebiyatının ilk yerli tiyatro eseri hangisidir?", "Şair Evlenmesi", "Vatan yahut Silistre", "Keşanlı Ali Destanı", "Telemak", "Şinasi'nin eseridir (1860)."],
      ["Keşanlı Ali Destanı hangi yazarın eseridir?", "Haldun Taner", "Namık Kemal", "Şinasi", "Necip Fazıl Kısakürek", "Haldun Taner epik tiyatronun önemli temsilcisidir."],
      ["İnsanların ve toplumun gülünç yönlerini eleştiren tiyatro türü hangisidir?", "Komedi", "Trajedi", "Dram", "Radyo tiyatrosu", "Komedi güldürerek eleştirir."],
      ["Tiyatro metninde parantez içindeki açıklamalar kime yöneliktir?", "Oyuncu ve yönetmene", "Yalnızca seyirciye", "Eleştirmene", "Anlatıcıya", "Bu açıklamalar sahneleme içindir."],
      ["Tiyatroyu roman ve hikâyeden ayıran temel özellik hangisidir?", "Olayların diyalog ve hareketle sahnede canlandırılması", "Kurmaca olması", "Kişilerinin bulunması", "Bir olay anlatması", "Tiyatroda anlatıcı yoktur; olaylar sahnede canlandırılır."]
    ],
    acik: [
      ["Trajedi, komedi ve dramı birer cümleyle tanımlayınız.", "Trajedi: kahramanın acıklı sonunu yüce bir dille anlatır. Komedi: gülünç yönleri güldürerek eleştirir. Dram: hayattaki gibi acı ve güldürüyü bir arada verir."],
      ["Şair Evlenmesi'nin konusunu ve eleştirdiği toplumsal durumu yazınız.", "Şair Müştak Bey'in görücü usulüyle evlenirken istemediği kişiyle evlendirilmesini anlatır; görücü usulü evliliği eleştirir."]
    ] });

  K({ id: "ede11d2", ad: "Küçürek Hikâye, Belgesel ve Afiş",
    ozet: [
      "Küçürek hikâye (kısa kısa öykü): çok kısa, yoğun anlatımlı, az kişili; çoğunlukla şaşırtıcı ya da açık uçlu sonla biter",
      "Okur, söylenmeyenleri kendi zihninde tamamlar; her sözcük önemlidir",
      "Belgesel: gerçek olayları, kişileri ve yerleri belgelere, görüntülere ve tanıklıklara dayanarak anlatan kurmaca olmayan film",
      "Belgeselde dış ses (anlatıcı), röportaj, arşiv görüntüsü ve müzik kullanılır",
      "Afiş: bir etkinliği, ürünü ya da düşünceyi duyurmak için kısa slogan, dikkat çekici görsel ve temel bilgileri bir arada sunan tasarım"
    ],
    anlatim: [
      "Küçürek hikâye birkaç satırdan birkaç paragrafa kadar uzanabilir. Uzun betimlemeler yerine tek bir an ya da durum üzerinde durulur. Son cümle çoğunlukla okuru şaşırtır ya da düşündürür.",
      "Belgesel izlerken bilginin kaynağına, kullanılan görüntülerin gerçekliğine ve anlatıcının bakış açısına dikkat edilmelidir. Belgesel bilgilendirir ama yönetmenin seçimleri izleyicinin algısını etkileyebilir.",
      "Afişte az sözle çok şey anlatmak gerekir. Başlık uzaktan okunabilmeli, görsel mesajla uyumlu olmalı; tarih, yer ve iletişim gibi temel bilgiler açıkça yer almalıdır."
    ],
    sorular: [
      ["Gerçek olayları belgelere ve görüntülere dayanarak anlatan, kurmaca olmayan film türü hangisidir?", "Belgesel", "Radyo tiyatrosu", "Komedi", "Karagöz", "Belgesel kurmaca değildir."],
      ["Küçürek hikâyenin özelliği hangisidir?", "Çok kısa ve yoğun anlatımlı olması", "Çok sayıda kişi ve uzun betimlemeler içermesi", "Yalnızca şiir biçiminde yazılması", "Sahnede oynanmak için yazılması", "Küçürek hikâye kısalık ve yoğunluk üzerine kuruludur."],
      ["Bir afişte aşağıdakilerden hangisi bulunmamalıdır?", "Okunması zor, uzun paragraflar", "Kısa ve dikkat çekici slogan", "Mesajla uyumlu görsel", "Tarih ve yer bilgisi", "Afiş az sözle hızlı okunmalıdır."],
      ["Belgeselde görüntülerin üzerine konuşarak bilgi veren anlatıcıya ne denir?", "Dış ses", "Hayalî", "Meddah", "Kahraman anlatıcı", "Belgeselde anlatıcı genellikle dış sestir."],
      ["Küçürek hikâyelerde sonun çoğunlukla nasıl olduğu söylenebilir?", "Şaşırtıcı ya da açık uçlu", "Her zaman mutlu ve uzun", "Ahlaki bir öğütle biten uzun bir bölüm", "Sonuç bölümü olmaz ve ilk cümleye dönülür", "Son, okuru düşündürmeye yöneliktir."]
    ],
    acik: [
      ["Okulunuzdaki kitap okuma etkinliği için hazırlanacak bir afişte bulunması gereken dört öğeyi yazınız.", "Dikkat çekici başlık/slogan, mesajla uyumlu görsel, etkinliğin tarihi ve yeri, düzenleyen ve iletişim bilgisi."],
      ["Bir belgeseli değerlendirirken dikkat edilmesi gereken iki noktayı yazınız.", "Bilgilerin kaynağı ve doğruluğu; görüntülerin gerçek olup olmadığı; anlatıcının bakış açısı ve tarafsızlığı."]
    ] });

  // ---------- TARİH ----------
  K({ id: "tar11a1", ad: "Osmanlı Devleti'nin 1683-1789 Arasındaki Siyasi ve Askerî Mücadeleleri",
    ozet: [
      "1683 II. Viyana Kuşatması (Merzifonlu Kara Mustafa Paşa) başarısız oldu → Kutsal İttifak savaşları başladı",
      "1699 Karlofça Antlaşması: Osmanlı'nın ilk büyük toprak kaybı (Macaristan Avusturya'ya, Mora Venedik'e, Podolya Lehistan'a)",
      "1700 İstanbul Antlaşması: Azak Rusya'ya bırakıldı · 1711 Prut Savaşı'nda Rusya yenildi, Azak geri alındı",
      "1718 Pasarofça Antlaşması: Mora geri alındı, Belgrad Avusturya'ya bırakıldı · 1739 Belgrad Antlaşması: Belgrad geri alındı",
      "1774 Küçük Kaynarca Antlaşması: Kırım bağımsız oldu; Osmanlı ilk kez savaş tazminatı ödedi · 1783 Kırım Rusya'ya katıldı"
    ],
    anlatim: [
      "II. Viyana Kuşatması'nın başarısızlığı Osmanlı için bir dönüm noktasıdır. Avusturya, Lehistan, Venedik ve Papalık Kutsal İttifak'ı kurdu; Rusya da sonradan katıldı. Uzun süren savaşlar Karlofça Antlaşması ile bitti ve Osmanlı Orta Avrupa'daki üstünlüğünü kaybetti.",
      "XVIII. yüzyılın başında Osmanlı, kaybettiği yerleri geri almaya çalıştı. Prut Savaşı'nda Rus ordusu kuşatıldı ve Azak geri alındı; Mora Venedik'ten geri alındı. 1739'da Fransa'nın arabuluculuğuyla imzalanan Belgrad Antlaşması ile Belgrad geri kazanıldı.",
      "Yüzyılın ikinci yarısında Rusya en büyük tehdit hâline geldi. 1768-1774 savaşının sonunda imzalanan Küçük Kaynarca Antlaşması ile Kırım bağımsız oldu ve kısa süre sonra, 1783'te Rusya'ya katıldı. Osmanlı ilk kez savaş tazminatı ödemek zorunda kaldı.",
      "Bu dönemde Osmanlı, savaşın yanında diplomasiyi de daha fazla kullanmaya, Avrupa'yı yakından tanımaya başladı."
    ],
    sorular: [
      ["Osmanlı Devleti'nin ilk büyük toprak kaybını yaşadığı antlaşma hangisidir?", "Karlofça (1699)", "Pasarofça (1718)", "Belgrad (1739)", "Küçük Kaynarca (1774)", "Karlofça ile Macaristan, Mora ve Podolya kaybedildi."],
      ["Kırım'ın bağımsız olduğu ve Osmanlı'nın ilk kez savaş tazminatı ödediği antlaşma hangisidir?", "Küçük Kaynarca", "Karlofça", "İstanbul", "Prut", "1774 Küçük Kaynarca Antlaşması."],
      ["II. Viyana Kuşatması'na komuta eden sadrazam kimdir?", "Merzifonlu Kara Mustafa Paşa", "Baltacı Mehmet Paşa", "Nevşehirli Damat İbrahim Paşa", "Sokullu Mehmet Paşa", "1683 kuşatmasını Merzifonlu Kara Mustafa Paşa yönetti."],
      ["Fransa'nın arabuluculuğuyla imzalanan ve Belgrad'ın geri alındığı antlaşma hangisidir?", "Belgrad Antlaşması (1739)", "Pasarofça Antlaşması (1718)", "Karlofça Antlaşması (1699)", "Aynalıkavak Tenkihnamesi (1779)", "1739 Belgrad Antlaşması."],
      ["1711 Prut Savaşı'nın sonucu hangisidir?", "Rusya yenildi, Azak geri alındı", "Osmanlı Macaristan'ı kaybetti", "Kırım Rusya'ya katıldı", "Mora Venedik'e bırakıldı", "Baltacı Mehmet Paşa Rus ordusunu kuşattı; Azak geri alındı."]
    ],
    acik: [
      ["II. Viyana Kuşatması'nın başarısızlığının Osmanlı Devleti için sonuçlarını yazınız.", "Kutsal İttifak savaşları başladı; uzun ve yıpratıcı savaşlar Karlofça ile bitti; Osmanlı ilk büyük toprak kaybını yaşadı ve Orta Avrupa'daki üstünlüğünü kaybetti."],
      ["Küçük Kaynarca Antlaşması'nın önemini iki maddeyle açıklayınız.", "Kırım bağımsız oldu ve kısa süre sonra Rusya'ya katıldı; Osmanlı ilk kez savaş tazminatı ödedi; Rusya Karadeniz'de güçlendi."]
    ] });

  K({ id: "tar11a2", ad: "Lale Devri'nin Devlet ve Toplum Hayatına Etkileri",
    ozet: [
      "Lale Devri: 1718 Pasarofça Antlaşması ile başlayıp 1730 Patrona Halil İsyanı ile sona eren dönem (III. Ahmed, Sadrazam Nevşehirli Damat İbrahim Paşa)",
      "Barışçı dış politika izlendi; Avrupa'ya geçici elçiler gönderildi (Yirmisekiz Mehmed Çelebi Paris'e)",
      "İbrahim Müteferrika ve Said Efendi ilk Türk matbaasını kurdu (1727); ilk basılan kitap Vankulu Lügati",
      "İstanbul'da tulumbacı ocağı (itfaiye) kuruldu; kâğıt, kumaş ve çini atölyeleri açıldı; çeviri heyeti oluşturuldu",
      "Saray çevresindeki eğlence ve israf halkta tepki doğurdu → 1730 Patrona Halil İsyanı"
    ],
    anlatim: [
      "Pasarofça Antlaşması'ndan sonra savaşlara ara verildi. Sadrazam Nevşehirli Damat İbrahim Paşa, Avrupa'daki gelişmeleri yakından izlemek için elçiler gönderdi. Paris'e giden Yirmisekiz Mehmed Çelebi'nin sefaretnamesi Fransa'nın bilim, sanat ve gündelik hayatını tanıttı.",
      "İbrahim Müteferrika'nın kurduğu matbaa, bilginin daha hızlı ve ucuz yayılmasını sağladı. İlk basılan eser Vankulu Lügati adlı sözlüktür. İstanbul'daki büyük yangınlara karşı tulumbacı ocağı kuruldu.",
      "Dönemde mimaride ve süslemede Avrupa etkisi görülmeye başladı; köşkler, bahçeler ve çeşmeler yapıldı. Lale yetiştirmek bir zenginlik göstergesi hâline geldi.",
      "Ancak saray çevresinin gösterişli yaşamı, ekonomik sıkıntı ve İran cephesindeki gelişmeler halkta hoşnutsuzluk yarattı. 1730'daki Patrona Halil İsyanı ile Lale Devri sona erdi."
    ],
    sorular: [
      ["İlk Türk matbaasını kuran kişi kimdir?", "İbrahim Müteferrika", "Yirmisekiz Mehmed Çelebi", "Katip Çelebi", "Evliya Çelebi", "İbrahim Müteferrika ve Said Efendi 1727'de matbaayı kurdu."],
      ["Lale Devri'ni sona erdiren olay hangisidir?", "Patrona Halil İsyanı", "Kabakçı Mustafa İsyanı", "31 Mart Olayı", "Vaka-i Hayriye", "1730 Patrona Halil İsyanı."],
      ["Lale Devri'nde Paris'e elçi olarak gönderilen kişi kimdir?", "Yirmisekiz Mehmed Çelebi", "İbrahim Müteferrika", "Mustafa Reşid Paşa", "Merzifonlu Kara Mustafa Paşa", "Sefaretnamesiyle Fransa'yı tanıttı."],
      ["Lale Devri'nde basılan ilk kitap hangisidir?", "Vankulu Lügati", "Kutadgu Bilig", "Seyahatname", "Takvim-i Vekayi", "İlk basılan eser bir sözlüktür."],
      ["Lale Devri'nde İstanbul'daki yangınlara karşı kurulan teşkilat hangisidir?", "Tulumbacı Ocağı", "Nizam-ı Cedid", "Mühendishane", "Hilal-i Ahmer", "İtfaiye görevi gören tulumbacı ocağı kuruldu."]
    ],
    acik: [
      ["Lale Devri'nde yapılan üç yeniliği yazınız.", "İlk Türk matbaası kuruldu; Avrupa'ya geçici elçiler gönderildi; tulumbacı ocağı kuruldu; kâğıt ve kumaş atölyeleri açıldı; çeviri heyeti oluşturuldu."],
      ["Matbaanın kurulmasının toplum hayatına olası etkilerini açıklayınız.", "Kitaplar daha hızlı ve ucuz çoğaltılabildi; bilgi daha geniş kesimlere ulaşabildi; ilerleyen dönemde gazete ve kitap kültürünün gelişmesine zemin hazırladı."]
    ] });

  K({ id: "tar11a3", ad: "1755 Lizbon ve 1766 İstanbul Depremleri; Sanayi İnkılabı",
    ozet: [
      "1755 Lizbon Depremi: depremin ardından tsunami ve yangınlar; on binlerce kişi öldü; Avrupa düşünce dünyasını derinden etkiledi",
      "Lizbon'un yeniden planlı biçimde inşası ve depremin bilimsel olarak incelenmesi, afet yönetimi anlayışının gelişmesine katkı sağladı",
      "1766 İstanbul Depremi: III. Mustafa döneminde; Fatih Camii büyük hasar gördü ve yeniden yapıldı, birçok yapı onarıldı",
      "Sanayi İnkılabı: XVIII. yüzyılın ikinci yarısında İngiltere'de başladı; buhar gücü ve makineyle fabrika üretimi",
      "Sonuçları: seri üretim, ham madde ve pazar arayışı (sömürgecilik), işçi sınıfı, hızlı kentleşme · Osmanlı'da el tezgâhları zayıfladı"
    ],
    anlatim: [
      "1 Kasım 1755'te Lizbon'u yıkan deprem, ardından gelen tsunami ve yangınlarla Avrupa'nın en büyük felaketlerinden biri oldu. Felaket, doğa olaylarının nedenleri üzerine tartışmaları başlattı; Voltaire gibi düşünürler bu depremi eserlerinde ele aldı. Şehrin yeniden düzenli bir planla inşa edilmesi, kentleşme ve afet yönetimi açısından örnek gösterildi.",
      "22 Mayıs 1766'da İstanbul'da meydana gelen deprem, şehirde büyük hasara yol açtı. Fatih Camii büyük ölçüde yıkıldı ve yeniden inşa edildi; surlar, çarşılar ve pek çok yapı onarıldı. Bu iki deprem, aynı yüzyılda farklı toplumların afetlere nasıl tepki verdiğini karşılaştırma imkânı sunar.",
      "Sanayi İnkılabı'nda buhar makinesinin dokuma ve madencilikte kullanılması üretimi katlanarak artırdı. Avrupa devletleri ucuz ham madde ve yeni pazarlar için sömürgeciliğe yöneldi. Fabrikalarda çalışan işçi sınıfı oluştu, şehirler hızla büyüdü.",
      "Avrupa'nın ucuz fabrika ürünleri Osmanlı pazarına girince yerli el tezgâhları rekabet edemedi; Osmanlı zamanla ham madde satan ve sanayi ürünü alan bir ülke konumuna düştü."
    ],
    sorular: [
      ["Sanayi İnkılabı ilk olarak hangi ülkede başlamıştır?", "İngiltere", "Fransa", "Osmanlı Devleti", "Rusya", "XVIII. yüzyılın ikinci yarısında İngiltere'de başladı."],
      ["Sanayi İnkılabı'nın sonuçlarından biri hangisidir?", "Ham madde ve pazar arayışının sömürgeciliği artırması", "Tarımsal üretimin tamamen bırakılması", "Şehir nüfusunun azalması", "Kölelik ve sömürgeciliğin hemen sona ermesi", "Avrupa devletleri ham madde ve pazar için sömürgeciliğe yöneldi."],
      ["1766 İstanbul Depremi'nde büyük hasar görüp yeniden yapılan cami hangisidir?", "Fatih Camii", "Selimiye Camii", "Sultanahmet Camii", "Ulu Camii (Bursa)", "Fatih Camii depremde büyük ölçüde yıkıldı."],
      ["Sanayi İnkılabı'nın Osmanlı ekonomisine etkisi hangisidir?", "Yerli el tezgâhlarının rekabet edemeyip zayıflaması", "Osmanlı'nın dünyanın en büyük sanayi ülkesi olması", "Avrupa'ya ihracatın bütünüyle kesilmesi", "Osmanlı'da loncaların güçlenmesi", "Ucuz fabrika ürünleri yerli üretimi zayıflattı."],
      ["1755 Lizbon Depremi'nin ardından şehri daha da yıkan iki olay hangisidir?", "Tsunami ve yangınlar", "Kuraklık ve kıtlık", "Volkan patlaması ve çığ", "Sel ve heyelan", "Deprem sonrası tsunami ve yangınlar yıkımı büyüttü."]
    ],
    acik: [
      ["Sanayi İnkılabı'nın Avrupa toplumunda yol açtığı üç değişikliği yazınız.", "Fabrika üretimi ve seri üretim yaygınlaştı; işçi sınıfı oluştu; şehirler hızla büyüdü; ham madde ve pazar arayışı sömürgeciliği artırdı."],
      ["Büyük depremlerin şehirlerin yeniden yapılanmasına etkisini Lizbon örneğiyle açıklayınız.", "Lizbon yıkımdan sonra düzenli bir planla yeniden inşa edildi; geniş caddeler ve dayanıklı yapı anlayışı geliştirildi; deprem bilimsel olarak incelenmeye başlandı."]
    ] });

  K({ id: "tar11b1", ad: "Fransız İhtilali'nin Devlet ve Toplum Hayatına Etkileri",
    ozet: [
      "1789 Fransız İhtilali: mutlak monarşi, ayrıcalıklı sınıflar, mali bunalım ve Aydınlanma düşüncesi etkisiyle çıktı",
      "14 Temmuz 1789 Bastille baskını · İnsan ve Yurttaş Hakları Bildirgesi yayımlandı",
      "Yaydığı fikirler: milliyetçilik, özgürlük, eşitlik, adalet, insan hakları, ulusal egemenlik",
      "Milliyetçilik en çok çok uluslu imparatorlukları (Osmanlı, Avusturya, Rusya) etkiledi",
      "Osmanlı'da ilk isyan Sırp İsyanı (1804), ilk bağımsızlığını kazanan Yunanistan (1829-1830)"
    ],
    anlatim: [
      "XVIII. yüzyıl Fransa'sında soylular ve din adamları ayrıcalıklıydı; vergi yükü halkın üzerindeydi. Montesquieu, Rousseau ve Voltaire gibi düşünürlerin fikirleri yayıldıkça bu düzen sorgulandı. Devletin mali bunalımı da eklenince 1789'da ihtilal başladı.",
      "İhtilal, krallık yetkilerini sınırlandırdı ve İnsan ve Yurttaş Hakları Bildirgesi ile insanların doğuştan eşit ve özgür olduğu ilkesini öne çıkardı. Egemenliğin kaynağının millet olduğu düşüncesi güçlendi.",
      "İhtilalin yaydığı milliyetçilik fikri, farklı milletleri bir arada yöneten imparatorlukları sarstı. Osmanlı Devleti'nde Balkan milletleri bağımsızlık için isyan etmeye başladı: önce Sırplar, ardından Yunanlar ayaklandı ve Yunanistan bağımsızlığını kazanan ilk millet oldu.",
      "Osmanlı yöneticileri de bu yeni durum karşısında devleti korumak için askerî, idari ve hukuki alanlarda yeni düzenlemelere yöneldi."
    ],
    sorular: [
      ["Fransız İhtilali'nin yaydığı fikirlerden çok uluslu devletleri en çok etkileyen hangisidir?", "Milliyetçilik", "Mutlakiyet", "Feodalite", "Merkantilizm", "Milliyetçilik farklı milletlerin bağımsızlık istemesine yol açtı."],
      ["Osmanlı Devleti'nde milliyetçilik etkisiyle ilk isyan eden millet hangisidir?", "Sırplar", "Yunanlar", "Bulgarlar", "Arnavutlar", "Sırp İsyanı 1804'te başladı."],
      ["Osmanlı'dan ayrılarak bağımsızlığını kazanan ilk millet hangisidir?", "Yunanlar", "Sırplar", "Bulgarlar", "Romenler", "Yunanistan 1829-1830'da bağımsız oldu."],
      ["Fransız İhtilali sırasında yayımlanan ve temel hakları ilan eden belge hangisidir?", "İnsan ve Yurttaş Hakları Bildirgesi", "Magna Carta", "Tanzimat Fermanı", "Kanun-ı Esasi", "1789'da yayımlandı."],
      ["Aşağıdakilerden hangisi Fransız İhtilali'nin nedenlerinden biri değildir?", "Sanayi İnkılabı'nın Fransa'da başlaması", "Ayrıcalıklı sınıfların varlığı", "Mali bunalım", "Aydınlanma düşüncesinin yayılması", "Sanayi İnkılabı İngiltere'de başlamıştır."]
    ],
    acik: [
      ["Fransız İhtilali'nin Osmanlı Devleti'ne etkilerini açıklayınız.", "Milliyetçilik fikri Balkan milletlerini isyana yöneltti (Sırp, Yunan isyanları); Osmanlı toprak kaybetti; devleti korumak için yenileşme hareketleri hızlandı."],
      ["Fransız İhtilali'nin nedenlerinden üçünü yazınız.", "Mutlak krallık ve ayrıcalıklı sınıflar; vergi yükünün halkta olması; mali bunalım; Aydınlanma düşüncesinin yayılması."]
    ] });

  K({ id: "tar11b2", ad: "1789-1908 Osmanlı'da Siyasi, Askerî ve İdari Gelişmeler",
    ozet: [
      "III. Selim: Nizam-ı Cedid ordusu kuruldu; Avrupa başkentlerinde sürekli elçilikler açıldı",
      "II. Mahmud: Sened-i İttifak (1808); Yeniçeri Ocağı kaldırıldı (1826, Vaka-i Hayriye); ilk nüfus sayımı ve Takvim-i Vekayi (1831)",
      "Tanzimat Fermanı (1839, Abdülmecid): can, mal, namus güvencesi; kanun önünde eşitlik",
      "Islahat Fermanı (1856): gayrimüslimlere yeni haklar · Kanun-ı Esasi ve I. Meşrutiyet (1876, II. Abdülhamid)",
      "1877-1878 Osmanlı-Rus Savaşı (93 Harbi) → Ayastefanos ve Berlin antlaşmaları; Meclis-i Mebusan kapatıldı (1878)"
    ],
    anlatim: [
      "XIX. yüzyıl Osmanlı için yenileşme yüzyılıdır. III. Selim, Avrupa usulünde eğitilmiş Nizam-ı Cedid ordusunu kurdu ve Avrupa'yı yakından izlemek için sürekli elçilikler açtı. Ancak bu yenilikler Kabakçı Mustafa İsyanı ile kesintiye uğradı.",
      "II. Mahmud döneminde ayanlarla imzalanan Sened-i İttifak, padişahın yetkilerinin ilk kez bir belgeyle sınırlandırılması bakımından önemlidir. 1826'da Yeniçeri Ocağı kaldırıldı; merkezî yönetim güçlendirildi, ilk resmî gazete Takvim-i Vekayi çıkarıldı.",
      "Tanzimat Fermanı (1839) ile devlet, hukukun üstünlüğünü ve kanun önünde eşitliği kabul etti. Islahat Fermanı (1856) gayrimüslim tebaaya yeni haklar tanıdı. 1876'da ilk anayasa Kanun-ı Esasi ilan edildi ve Meclis-i Mebusan açıldı (I. Meşrutiyet).",
      "1877-1878 Osmanlı-Rus Savaşı büyük kayıplarla sonuçlandı. Berlin Antlaşması ile Balkanlarda geniş topraklar kaybedildi. II. Abdülhamid savaşı gerekçe göstererek meclisi kapattı."
    ],
    sorular: [
      ["Yeniçeri Ocağı'nı kaldıran padişah kimdir?", "II. Mahmud", "III. Selim", "Abdülmecid", "II. Abdülhamid", "1826'da Vaka-i Hayriye ile kaldırıldı."],
      ["Osmanlı'nın ilk anayasası hangisidir?", "Kanun-ı Esasi (1876)", "Tanzimat Fermanı (1839)", "Islahat Fermanı (1856)", "Sened-i İttifak (1808)", "Kanun-ı Esasi ile I. Meşrutiyet ilan edildi."],
      ["Padişah yetkilerinin ilk kez bir belgeyle sınırlandırıldığı kabul edilen belge hangisidir?", "Sened-i İttifak", "Kanun-ı Esasi", "Islahat Fermanı", "Takvim-i Vekayi", "1808'de ayanlarla imzalandı."],
      ["Nizam-ı Cedid ordusunu kuran padişah kimdir?", "III. Selim", "II. Mahmud", "III. Ahmed", "Abdülaziz", "III. Selim'in yenilik hareketlerinin adıdır."],
      ["Kanun önünde eşitliği ve can-mal güvencesini ilan eden ferman hangisidir?", "Tanzimat Fermanı", "Islahat Fermanı", "Sened-i İttifak", "Kanun-ı Esasi", "1839'da Abdülmecid döneminde ilan edildi."]
    ],
    acik: [
      ["Tanzimat Fermanı ile Islahat Fermanı'nı karşılaştırınız.", "Tanzimat (1839) can-mal güvencesi ve kanun önünde eşitliği ilan etti. Islahat (1856) özellikle gayrimüslimlere yeni haklar tanıdı ve Avrupa'nın baskısıyla ilan edildi."],
      ["II. Mahmud döneminin üç yeniliğini yazınız.", "Yeniçeri Ocağı'nın kaldırılması, ilk nüfus sayımı, Takvim-i Vekayi gazetesinin çıkarılması, nazırlıkların kurulması."]
    ] });

  K({ id: "tar11b3", ad: "1789-1908 Bilim, Sanat, Teknoloji ve Sanayileşme Çabaları",
    ozet: [
      "Askerî ve teknik okullar: Mühendishane-i Bahri Hümayun (1773) ve Mühendishane-i Berri Hümayun (1795)",
      "Tıp eğitimi için Tıphane-i Amire (1827); yükseköğretimde Darülfünun (son biçimiyle 1900)",
      "Teknoloji: telgraf (1855), demiryolları (ilk hat İzmir-Aydın), buharlı gemiler",
      "Sanayileşme: Feshane, Hereke dokuma fabrikası gibi devlet fabrikaları kuruldu",
      "1838 Balta Limanı Ticaret Antlaşması: yabancı mallara kolaylık sağladı, yerli sanayiyi zayıflattı"
    ],
    anlatim: [
      "Osmanlı yenileşmesi orduyla başladığı için ilk modern okullar askerî ve teknik okullardır. Mühendishaneler, matematik ve mühendislik bilgisini sistemli biçimde öğretti. Tıp alanında açılan okullar sağlık hizmetlerini geliştirdi.",
      "Telgraf ve demiryolu, uzak bölgelerle haberleşmeyi ve ulaşımı hızlandırdı; merkezî yönetimin güçlenmesine katkı sağladı. Bu yatırımların bir kısmı yabancı şirketlerce yapıldı.",
      "Devlet, ordunun ihtiyaçlarını karşılamak için fes, kumaş, silah gibi ürünleri üreten fabrikalar kurdu. Ancak 1838 Balta Limanı Ticaret Antlaşması ile İngiliz mallarına geniş ticaret kolaylıkları tanındı; ucuz Avrupa ürünleri karşısında yerli üretim gerileyerek sanayileşme yavaşladı.",
      "Sanatta Batı etkisi arttı; resim, mimari ve müzikte yeni üsluplar görüldü. Sanayi-i Nefise Mektebi gibi okullar açılarak güzel sanatlar eğitimine başlandı."
    ],
    sorular: [
      ["Yabancı mallara geniş ticaret kolaylıkları tanıyarak Osmanlı yerli sanayisini zayıflatan antlaşma hangisidir?", "Balta Limanı Ticaret Antlaşması (1838)", "Karlofça Antlaşması", "Berlin Antlaşması", "Küçük Kaynarca Antlaşması", "İngiltere ile imzalanan bu antlaşma yerli üretimi zayıflattı."],
      ["Telgraf ve demiryolunun Osmanlı yönetimine katkısı hangisidir?", "Merkezî yönetimin güçlenmesi ve haberleşmenin hızlanması", "Taşrada ayanların güçlenmesi", "Dış ticaretin tamamen durması", "Ordunun kaldırılması", "Haberleşme ve ulaşım hızlandı, merkez güçlendi."],
      ["Osmanlı'da modern eğitimin ilk olarak hangi alanda başlamasının temel nedeni nedir?", "Yeniliklerin öncelikle orduda yapılması", "Halkın talebi", "Avrupa'nın zorlaması", "Tarımı geliştirme isteği", "Yenileşme orduyla başladığı için ilk okullar askerî ve teknik okullardır."],
      ["Aşağıdakilerden hangisi Osmanlı'da devlet eliyle kurulan fabrikalardandır?", "Hereke dokuma fabrikası", "Bastille", "Mühendishane", "Takvim-i Vekayi", "Hereke kumaş-halı üretimiyle bilinen bir devlet fabrikasıdır."],
      ["Osmanlı'da deniz mühendisliği eğitimi veren ilk kurum hangisidir?", "Mühendishane-i Bahri Hümayun", "Darülfünun", "Tıphane-i Amire", "Sanayi-i Nefise Mektebi", "1773'te kuruldu."]
    ],
    acik: [
      ["Osmanlı'nın sanayileşme çabalarının başarılı olamamasının iki nedenini yazınız.", "Balta Limanı gibi antlaşmalarla yabancı mallara kolaylık tanınması; sermaye, teknik bilgi ve yetişmiş insan gücü eksikliği; Avrupa'nın ucuz fabrika ürünleriyle rekabet edilememesi."],
      ["Telgrafın Osmanlı Devleti için önemini açıklayınız.", "Uzak bölgelerle hızlı haberleşme sağladı; merkezî yönetimin taşrayı daha iyi denetlemesine ve savaşlarda hızlı iletişime katkı verdi."]
    ] });

  K({ id: "tar11c1", ad: "II. Meşrutiyet, Trablusgarp ve Balkan Savaşları",
    ozet: [
      "II. Meşrutiyet: 23 Temmuz 1908'de İttihat ve Terakki'nin baskısıyla ilan edildi; meclis yeniden açıldı",
      "31 Mart Olayı (1909): Hareket Ordusu ile bastırıldı; II. Abdülhamid tahttan indirildi, V. Mehmed Reşad padişah oldu",
      "Trablusgarp Savaşı (1911-1912, İtalya) → Uşi Antlaşması: Trablusgarp ve Bingazi İtalya'ya bırakıldı",
      "I. Balkan Savaşı (1912-1913): Balkan devletleri karşısında ağır yenilgi; Londra Antlaşması ile Midye-Enez hattı sınır oldu",
      "II. Balkan Savaşı (1913): Balkan devletleri birbirine düştü; Osmanlı Edirne'yi geri aldı"
    ],
    anlatim: [
      "II. Meşrutiyet'in ilanıyla basın serbestleşti, siyasi partiler kuruldu ve meclis yeniden toplandı. Ancak siyasi çekişmeler sürdü; 1909'daki 31 Mart Olayı, Selanik'ten gelen Hareket Ordusu tarafından bastırıldı ve II. Abdülhamid tahttan indirildi.",
      "1911'de İtalya, Osmanlı'nın Kuzey Afrika'daki son toprağı olan Trablusgarp'a saldırdı. Mustafa Kemal ve Enver Bey gibi subaylar yerel halkı örgütleyerek direniş gösterdi. Balkanlarda savaş çıkması üzerine Osmanlı, Uşi Antlaşması ile Trablusgarp ve Bingazi'yi İtalya'ya bıraktı.",
      "I. Balkan Savaşı'nda Bulgaristan, Sırbistan, Yunanistan ve Karadağ Osmanlı'ya saldırdı. Ağır yenilgi sonucunda Midye-Enez hattının batısı kaybedildi. Kısa süre sonra Balkan devletleri kendi aralarında savaşa tutuşunca Osmanlı, Edirne'yi geri aldı.",
      "Balkan Savaşları Osmanlı'nın Avrupa'daki topraklarının büyük kısmını kaybettiği ve Balkanlardan Anadolu'ya büyük göçlerin yaşandığı bir dönemdir."
    ],
    sorular: [
      ["Trablusgarp Savaşı sonunda imzalanan antlaşma hangisidir?", "Uşi Antlaşması", "Londra Antlaşması", "Berlin Antlaşması", "Mondros Ateşkesi", "1912 Uşi Antlaşması ile Trablusgarp ve Bingazi İtalya'ya bırakıldı."],
      ["31 Mart Olayı'nı bastıran askerî güç hangisidir?", "Hareket Ordusu", "Nizam-ı Cedid", "Kuva-yı Milliye", "Asakir-i Mansure", "Selanik'ten gelen Hareket Ordusu isyanı bastırdı."],
      ["II. Balkan Savaşı'nda Osmanlı'nın geri aldığı şehir hangisidir?", "Edirne", "Selanik", "Belgrad", "Sofya", "Balkan devletleri birbirleriyle savaşırken Edirne geri alındı."],
      ["II. Meşrutiyet hangi yıl ilan edilmiştir?", "1908", "1876", "1839", "1918", "23 Temmuz 1908."],
      ["I. Balkan Savaşı sonunda Osmanlı'nın Avrupa'daki sınırı hangi hat olarak belirlenmiştir?", "Midye-Enez hattı", "Meriç-Tuna hattı", "Belgrad-Niş hattı", "Selanik-Manastır hattı", "Londra Antlaşması ile Midye-Enez hattı sınır oldu."]
    ],
    acik: [
      ["Trablusgarp Savaşı'nın kaybedilmesinde coğrafi konumun etkisini açıklayınız.", "Trablusgarp'a kara yoluyla ulaşmak İngiltere'nin denetimindeki Mısır nedeniyle, deniz yoluyla ulaşmak ise güçlü İtalyan donanması nedeniyle zordu; asker ve malzeme gönderilemedi."],
      ["Balkan Savaşları'nın Osmanlı'ya iki sonucunu yazınız.", "Avrupa'daki toprakların büyük kısmı kaybedildi; Balkanlardan Anadolu'ya büyük göçler yaşandı; Osmanlıcılık fikri zayıfladı."]
    ] });

  K({ id: "tar11c2", ad: "Birinci Dünya Savaşı'nda Osmanlı Devleti",
    ozet: [
      "Birinci Dünya Savaşı (1914-1918): İttifak Devletleri (Almanya, Avusturya-Macaristan, Osmanlı, Bulgaristan) ve İtilaf Devletleri",
      "Osmanlı, Goben ve Breslav gemilerinin Rus limanlarını bombalamasıyla savaşa girdi (1914)",
      "Kafkas Cephesi: Sarıkamış'ta ağır kayıp (1914-1915 kışı) · Kanal Cephesi: Süveyş Kanalı'na harekât",
      "Çanakkale Cephesi (1915): 18 Mart deniz zaferi; kara savaşlarında Mustafa Kemal Anafartalar'da öne çıktı",
      "Irak Cephesi'nde Kut'ül-Amare zaferi (1916) · Savaş 30 Ekim 1918 Mondros Ateşkes Antlaşması ile bitti"
    ],
    anlatim: [
      "Avrupa'daki sömürge, ham madde ve pazar rekabeti ile milliyetçilik, devletleri iki büyük bloğa ayırdı. Osmanlı, kaybettiği toprakları geri alma ve yalnızlıktan kurtulma düşüncesiyle Almanya'nın yanında savaşa girdi.",
      "Osmanlı ordusu birçok cephede aynı anda savaştı. Kafkas Cephesi'nde Sarıkamış Harekâtı'nda ağır kış koşulları nedeniyle çok sayıda asker hayatını kaybetti. Kanal Cephesi'nde İngilizlerin Süveyş Kanalı üzerindeki gücünü kırmak amaçlandı.",
      "Çanakkale'de İtilaf donanması 18 Mart 1915'te geri püskürtüldü; ardından başlayan kara savaşlarında Mustafa Kemal'in komutasındaki birlikler büyük başarı gösterdi. Çanakkale zaferi savaşın uzamasına ve Rusya'ya yardım yolunun kapanmasına yol açtı.",
      "Savaşın sonunda İttifak Devletleri yenildi. Osmanlı, 30 Ekim 1918'de ağır şartlar içeren Mondros Ateşkes Antlaşması'nı imzaladı."
    ],
    sorular: [
      ["Osmanlı Devleti Birinci Dünya Savaşı'na hangi grupta katılmıştır?", "İttifak Devletleri", "İtilaf Devletleri", "Tarafsız kalmıştır", "Balkan Antantı", "Almanya'nın yanında yer aldı."],
      ["Osmanlı'nın Birinci Dünya Savaşı'ndan çekildiği antlaşma hangisidir?", "Mondros Ateşkes Antlaşması", "Uşi Antlaşması", "Londra Antlaşması", "Berlin Antlaşması", "30 Ekim 1918'de imzalandı."],
      ["Ağır kış koşullarında büyük kayıpların verildiği Sarıkamış Harekâtı hangi cephededir?", "Kafkas Cephesi", "Çanakkale Cephesi", "Kanal Cephesi", "Irak Cephesi", "1914-1915 kışında Kafkas Cephesi'nde yaşandı."],
      ["Çanakkale'de İtilaf donanmasının geri püskürtüldüğü deniz zaferinin tarihi hangisidir?", "18 Mart 1915", "30 Ekim 1918", "23 Temmuz 1908", "29 Ekim 1923", "18 Mart 1915 Çanakkale Deniz Zaferi."],
      ["Kut'ül-Amare zaferi hangi cephede kazanılmıştır?", "Irak Cephesi", "Kafkas Cephesi", "Kanal Cephesi", "Galiçya Cephesi", "1916'da Irak Cephesi'nde kazanıldı."]
    ],
    acik: [
      ["Çanakkale Cephesi'nde kazanılan başarının sonuçlarından üçünü yazınız.", "Savaşın uzaması; Rusya'ya yardım yolunun kapanması (Rusya'da ihtilale zemin hazırlaması); Mustafa Kemal'in tanınması; Türk milletinin moralinin yükselmesi."],
      ["Osmanlı Devleti'nin Birinci Dünya Savaşı'na girme nedenlerinden ikisini yazınız.", "Kaybettiği toprakları geri almak; siyasi yalnızlıktan kurtulmak; Almanya'nın savaşı kazanacağı düşüncesi."]
    ] });

  K({ id: "tar11c3", ad: "Savaş Yıllarında Kitlesel Göçler, Salgınlar ve Sağlık Hizmetleri",
    ozet: [
      "93 Harbi ve Balkan Savaşları sonrası Balkanlardan ve Kafkasya'dan Anadolu'ya büyük göçler (muhacirler) yaşandı",
      "Göçler nüfus yapısını, şehirleri ve ekonomiyi değiştirdi; göçmenler için iskân çalışmaları yapıldı",
      "Savaş yıllarında kolera, tifüs, sıtma gibi salgınlar asker ve sivil kayıpları artırdı",
      "Karantina uygulamaları ve sağlık örgütlenmesi geliştirildi",
      "Yaralı ve hasta askerlere yardım için 1868'de kurulan cemiyet sonradan Hilal-i Ahmer adını aldı; bugünkü Kızılay'dır"
    ],
    anlatim: [
      "XIX. yüzyılın sonlarından itibaren kaybedilen her savaş, Balkanlardan ve Kafkasya'dan Anadolu'ya yeni göç dalgaları getirdi. Göçmenlerin barınma, beslenme ve yerleştirilmesi devlet için büyük bir yük oldu; aynı zamanda Anadolu'nun nüfus yapısı ve kültürel yaşamı değişti.",
      "Savaş koşullarında kalabalık kamplar, temiz su eksikliği ve beslenme yetersizliği salgınların yayılmasını kolaylaştırdı. Cephelerde salgın hastalıklardan ölen asker sayısı zaman zaman çatışmalarda ölenlerden fazla oldu.",
      "Salgınlarla mücadele için karantina uygulandı, hastaneler ve laboratuvarlar kuruldu. 1868'de kurulan ve sonradan Hilal-i Ahmer adını alan cemiyet, savaşlarda yaralı ve hastalara yardım eden önemli bir insani yardım kuruluşu oldu; bugün Kızılay adıyla çalışmaktadır."
    ],
    sorular: [
      ["Balkan Savaşları'nın Anadolu'ya önemli bir sonucu hangisidir?", "Balkanlardan Anadolu'ya kitlesel göçlerin yaşanması", "Anadolu'nun nüfusunun azalması", "Salgın hastalıkların tamamen ortadan kalkması", "Osmanlı'nın Balkanlarda toprak kazanması", "Kaybedilen topraklardan Anadolu'ya büyük göçler oldu."],
      ["Savaşlarda yaralı ve hasta askerlere yardım amacıyla kurulan, bugün Kızılay adıyla bilinen kuruluşun Osmanlı dönemindeki adı nedir?", "Hilal-i Ahmer", "Darülfünun", "Nizam-ı Cedid", "Tulumbacı Ocağı", "Hilal-i Ahmer bugünkü Kızılay'dır."],
      ["Savaş yıllarında salgınların hızla yayılmasının nedenlerinden biri hangisidir?", "Kalabalık ortamlar ve temiz su eksikliği", "Aşı uygulamalarının çok yaygın olması", "Karantina uygulamaları", "Hastanelerin artması", "Kalabalık ve kötü hijyen koşulları salgınları yaydı."],
      ["Salgınların yayılmasını önlemek için hastaların ya da bölgelerin bir süre ayrı tutulmasına ne denir?", "Karantina", "Tehcir", "İskân", "Seferberlik", "Karantina hastalığın yayılmasını önlemek için uygulanır."],
      ["Göçmenlerin yerleştirilmesi için yapılan çalışmalara ne ad verilir?", "İskân", "Seferberlik", "Karantina", "Islahat", "İskân, göçmenleri yerleştirme politikasıdır."]
    ],
    acik: [
      ["Kitlesel göçlerin Anadolu'ya ekonomik ve toplumsal etkilerini yazınız.", "Barınma, beslenme ve iş ihtiyacı arttı; nüfus yapısı değişti; yeni yerleşim yerleri kuruldu; farklı kültürel birikimler Anadolu'ya taşındı."],
      ["Savaş yıllarında salgınlarla mücadele için yapılan iki uygulamayı yazınız.", "Karantina uygulaması, hastane ve laboratuvarların kurulması, aşı çalışmaları, insani yardım kuruluşlarının çalışmaları."]
    ] });

  // ---------- COĞRAFYA ----------
  K({ id: "cog11a", ad: "Mekânsal Sorunlar Karşısında Coğrafya Bilimi",
    ozet: [
      "Mekânsal sorun: belirli bir yerde doğal ve beşerî etkenlerin etkileşimiyle ortaya çıkan sorun (çarpık kentleşme, trafik, su kıtlığı, erozyon, kirlilik, afet riski)",
      "Coğrafya, doğal ve beşerî unsurları birlikte ele alan bütüncül bir bakış sunar",
      "Coğrafyanın alt dalları: fiziki (klimatoloji, jeomorfoloji, hidrografya, biyocoğrafya), beşerî ve ekonomik, bölgesel coğrafya",
      "Çözüm süreci: sorunu tanımlama → veri toplama → harita ve CBS ile analiz → çözüm önerisi",
      "Coğrafi sorgulama soruları: Nerede? Neden orada? Nasıl etkiliyor? Ne yapılabilir?"
    ],
    anlatim: [
      "Bir şehirde sel baskınlarının artması yalnızca yağışla açıklanamaz; dere yataklarına yapılan binalar, betonlaşma ve altyapı eksiklikleri de etkilidir. Coğrafya bu tür sorunları doğal ve beşerî etkenleri birlikte değerlendirerek inceler.",
      "Coğrafyacı sorunun nerede yoğunlaştığını haritalar, nedenlerini veriye dayanarak araştırır ve çözüm önerileri geliştirir. Bu süreçte iklim, yer şekilleri, nüfus, ekonomi gibi farklı alt dalların bilgisinden yararlanır.",
      "Mekânsal sorunların çözümü planlama ile mümkündür: afet riski yüksek alanlarda yapılaşmayı sınırlamak, su kaynaklarını korumak, toplu taşımayı güçlendirmek gibi."
    ],
    sorular: [
      ["Aşağıdakilerden hangisi mekânsal bir sorundur?", "Dere yatağındaki yapılaşma nedeniyle sel riskinin artması", "Bir öğrencinin ders çalışmaması", "Bir kitabın baskısının bitmesi", "Bir şarkının popüler olması", "Belirli bir yerde doğal ve beşerî etkenlerin etkileşimiyle ortaya çıkmıştır."],
      ["Coğrafyanın mekânsal sorunlara yaklaşımını en iyi anlatan ifade hangisidir?", "Doğal ve beşerî etkenleri birlikte değerlendirir", "Yalnızca iklimi inceler", "Yalnızca nüfus sayılarını inceler", "Sorunları yalnızca tarihî açıdan ele alır", "Coğrafya bütüncül bir bakış sunar."],
      ["İklim ve hava olaylarını inceleyen coğrafya alt dalı hangisidir?", "Klimatoloji", "Jeomorfoloji", "Hidrografya", "Demografi", "Klimatoloji iklim bilimidir."],
      ["Yer şekillerini ve oluşum süreçlerini inceleyen alt dal hangisidir?", "Jeomorfoloji", "Klimatoloji", "Biyocoğrafya", "Ekonomik coğrafya", "Jeomorfoloji yer şekillerini inceler."],
      ["Mekânsal bir soruna çözüm üretmede ilk adım hangisidir?", "Sorunu tanımlamak", "Hemen bina yapmak", "Haritayı yok saymak", "Veri toplamadan karar vermek", "Önce sorun açıkça tanımlanır."]
    ],
    acik: [
      ["Yaşadığınız çevredeki bir mekânsal sorunu ve iki çözüm önerisini yazınız.", "Örnek: trafik sıkışıklığı; toplu taşımayı güçlendirmek, bisiklet yolları yapmak, iş ve okul saatlerini düzenlemek."],
      ["Bir sel sorununu incelerken coğrafyanın hangi alt dallarından yararlanılabileceğini açıklayınız.", "Klimatoloji (yağış), hidrografya (akarsu, havza), jeomorfoloji (eğim, yer şekli), beşerî coğrafya (yapılaşma, nüfus)."]
    ] });

  K({ id: "cog11b", ad: "Mekânsal Bilgi Teknolojileri: Web Tabanlı CBS",
    ozet: [
      "CBS (Coğrafi Bilgi Sistemleri): konuma bağlı verileri toplayan, depolayan, analiz eden ve harita olarak sunan sistem",
      "Bileşenleri: donanım, yazılım, veri, insan ve yöntem",
      "Veri modelleri: vektör (nokta, çizgi, alan) ve raster (hücre/piksel; uydu görüntüsü)",
      "Katman mantığı: yollar, akarsular, yerleşmeler gibi veriler ayrı katmanlarda üst üste konur",
      "Web tabanlı CBS: haritalara internet üzerinden erişip katman ekleyerek harita oluşturma; uzaktan algılama ve küresel konum belirleme sistemleriyle desteklenir"
    ],
    anlatim: [
      "CBS, konumu bilinen her türlü veriyi haritayla ilişkilendirir. Örneğin bir ilçedeki okulların konumları, nüfus yoğunluğu ve yollar aynı haritada üst üste getirilirse yeni bir okulun nereye yapılması gerektiği daha doğru belirlenebilir.",
      "Vektör veride okul bir nokta, yol bir çizgi, göl bir alan olarak gösterilir. Raster veride ise alan küçük hücrelere bölünür; uydu görüntüleri bu türdendir.",
      "Web tabanlı CBS uygulamalarında kullanıcı bir programı bilgisayarına kurmadan, internet tarayıcısı üzerinden harita katmanlarını açıp kapatabilir, ölçüm yapabilir ve kendi haritasını paylaşabilir. Afet risk haritaları ve parsel sorgulama gibi kamu hizmetleri bu teknolojiyle sunulur.",
      "Uzaktan algılama, yeryüzü hakkında uydu ve hava araçlarıyla uzaktan bilgi toplamaktır; elde edilen görüntüler CBS'de analiz edilir."
    ],
    sorular: [
      ["Konuma bağlı verileri toplayan, analiz eden ve harita olarak sunan sisteme ne ad verilir?", "Coğrafi Bilgi Sistemleri (CBS)", "Uzaktan algılama", "Ölçek", "İzohips", "CBS konumsal verilerle çalışır."],
      ["Uydu görüntüleri hangi veri modeline örnektir?", "Raster", "Vektör (nokta)", "Vektör (çizgi)", "Tablo", "Raster veri hücrelerden (piksellerden) oluşur."],
      ["CBS'de bir yolun gösterimi hangi vektör veri türüyle yapılır?", "Çizgi", "Nokta", "Alan", "Piksel", "Yollar çizgi olarak gösterilir."],
      ["Yeryüzü hakkında uydu ve hava araçlarıyla uzaktan bilgi toplanmasına ne denir?", "Uzaktan algılama", "Arazi gözlemi", "Anket", "Ölçeklendirme", "Uzaktan algılama yere dokunmadan veri toplar."],
      ["Web tabanlı CBS'nin avantajı hangisidir?", "İnternet üzerinden haritalara erişip katman ekleyebilmek", "Yalnızca kâğıt haritada çalışabilmek", "İnternet olmadan güncel veri almak", "Konum bilgisi gerektirmemek", "Tarayıcı üzerinden kullanılabilir ve paylaşılabilir."]
    ],
    acik: [
      ["Yeni bir hastanenin yerini belirlemek için CBS'de hangi katmanları kullanırdınız? Üç örnek veriniz.", "Nüfus yoğunluğu, mevcut sağlık kuruluşları, yollar ve ulaşım, afet risk alanları, arazi kullanımı."],
      ["Vektör ve raster veriyi birer örnekle karşılaştırınız.", "Vektör veride nesneler nokta (okul), çizgi (yol), alan (göl) olarak gösterilir. Raster veride alan hücrelere bölünür (uydu görüntüsü)."]
    ] });

  K({ id: "cog11c", ad: "Su Kaynakları ve Türkiye'nin Su Kaynakları",
    ozet: [
      "Yeryüzündeki suların yaklaşık %97'si tuzlu sudur; tatlı suyun büyük bölümü buzullarda ve yer altındadır",
      "Akarsu kavramları: kaynak, ağız, havza, su bölümü çizgisi, akım (debi), rejim (düzenli-düzensiz)",
      "Türkiye'de sınırları içinde doğup denize dökülen en uzun akarsu Kızılırmak; en büyük göl Van Gölü (sodalı); en büyük baraj Atatürk Barajı (Fırat)",
      "Türkiye su zengini bir ülke değildir; kişi başına düşen kullanılabilir su miktarı sınırlıdır (su stresi)",
      "Mavi Vatan: Türkiye'nin karasuları, kıta sahanlığı ve münhasır ekonomik bölge gibi deniz yetki alanlarını ifade eden kavram"
    ],
    anlatim: [
      "Su; içme, tarım, sanayi ve enerji üretimi için vazgeçilmezdir. Yeryüzündeki suyun çok büyük bölümü okyanus ve denizlerdeki tuzlu sudur; insanın kolayca kullanabileceği tatlı su oldukça azdır.",
      "Bir akarsuyun doğduğu yer kaynak, döküldüğü yer ağızdır. Akarsuyu ve kollarını besleyen alana havza, iki havzayı ayıran yüksek çizgiye su bölümü çizgisi denir. Akım bir akarsuyun belli bir noktasından birim zamanda geçen su miktarı, rejim ise akımın yıl içindeki değişimidir.",
      "Türkiye'de yağışın mevsimlere ve bölgelere göre dengesiz dağılması, artan nüfus ve tarımsal sulama su kaynakları üzerinde baskı oluşturur. Bu nedenle suyun verimli kullanılması önemlidir.",
      "Üç tarafı denizlerle çevrili Türkiye için denizler; balıkçılık, ulaşım, enerji kaynakları ve güvenlik açısından stratejiktir. Mavi Vatan kavramı bu deniz yetki alanlarını ifade eder."
    ],
    sorular: [
      ["Bir akarsuyu ve kollarını besleyen alana ne ad verilir?", "Havza", "Ağız", "Kaynak", "Rejim", "Havza akarsuyun beslenme alanıdır."],
      ["Akımın yıl içindeki değişimine ne ad verilir?", "Rejim", "Debi", "Havza", "Delta", "Rejim akımın mevsimlere göre değişimidir."],
      ["Türkiye'nin en büyük gölü hangisidir?", "Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Eğirdir Gölü", "Van Gölü sodalı sulara sahiptir."],
      ["Türkiye sınırları içinde doğup yine Türkiye'de denize dökülen en uzun akarsu hangisidir?", "Kızılırmak", "Fırat", "Sakarya", "Yeşilırmak", "Kızılırmak Karadeniz'e dökülür."],
      ["Yeryüzündeki suların yaklaşık yüzde kaçı tuzlu sudur?", "%97", "%50", "%30", "%10", "Tatlı su oranı yaklaşık %3'tür."]
    ],
    acik: [
      ["Türkiye'de su kaynakları üzerindeki baskının üç nedenini yazınız.", "Yağışın düzensiz dağılması, nüfus artışı, tarımda vahşi sulama, sanayi kullanımı, kirlilik, iklim değişikliği."],
      ["Su bölümü çizgisi ile havza kavramlarını açıklayınız.", "Havza bir akarsu ve kollarının beslendiği alandır. Su bölümü çizgisi komşu iki havzayı birbirinden ayıran yüksek çizgidir."]
    ] });

  K({ id: "cog11d", ad: "Yerleşmelerin Mekânsal Organizasyonu ve Etki Alanı",
    ozet: [
      "Yerleşmeler kır (köy, mezra, yayla, oba vb.) ve şehir yerleşmeleri olarak ayrılır",
      "Şehrin etki alanı (hinterlandı): mal, hizmet, iş ve ulaşım bakımından çevresine etki ettiği alan",
      "Etki alanını; şehrin büyüklüğü, fonksiyonları, ulaşım bağlantıları ve sunduğu hizmetler belirler",
      "Şehir fonksiyonları: idari (Ankara), sanayi (Kocaeli), liman (Mersin), turizm (Antalya), ticaret",
      "Türkiye'de 1950'lerden sonra kırdan kente göçle şehirleşme hızlandı; çarpık kentleşme ve altyapı sorunları ortaya çıktı"
    ],
    anlatim: [
      "Yerleşmeler rastgele dağılmaz; su kaynakları, verimli topraklar, ulaşım yolları ve iş olanakları yerleşmelerin yerini belirler. Kır yerleşmelerinde tarım ve hayvancılık öne çıkarken şehirlerde sanayi, ticaret ve hizmet faaliyetleri yoğunlaşır.",
      "Büyük bir şehir yalnızca kendi halkına değil, çevresindeki ilçe ve illere de hizmet verir. Üniversite, büyük hastane, havalimanı ve alışveriş merkezleri şehrin etki alanını genişletir. İstanbul gibi metropollerin etki alanı ülke sınırlarını bile aşabilir.",
      "Hızlı şehirleşme konut açığı, trafik, çevre kirliliği ve altyapı yetersizliği gibi sorunlar doğurabilir. Planlı şehirleşme bu sorunları azaltır."
    ],
    sorular: [
      ["Bir şehrin mal ve hizmet bakımından çevresine etki ettiği alana ne ad verilir?", "Etki alanı (hinterland)", "Havza", "Kıta sahanlığı", "Ekosistem", "Etki alanı şehrin hizmet verdiği çevredir."],
      ["Türkiye'de idari fonksiyonuyla öne çıkan şehir hangisidir?", "Ankara", "Antalya", "Mersin", "Kocaeli", "Başkent olduğu için idari fonksiyonu baskındır."],
      ["Aşağıdakilerden hangisi bir şehrin etki alanını genişletir?", "Büyük bir havalimanı ve üniversite bulunması", "Nüfusunun azalması", "Ulaşım bağlantılarının kesilmesi", "Hizmetlerin kapanması", "Bölgesel hizmetler etki alanını büyütür."],
      ["Türkiye'de şehirleşmenin hızlanmasının temel nedeni hangisidir?", "Kırdan kente göç", "Doğum oranlarının azalması", "Tarımın gelişmesi", "Kıyıların terk edilmesi", "1950'lerden sonra kırdan kente göç hızlandı."],
      ["Liman fonksiyonu öne çıkan şehir hangisidir?", "Mersin", "Ankara", "Nevşehir", "Konya", "Mersin Akdeniz'in önemli limanlarındandır."]
    ],
    acik: [
      ["Hızlı ve plansız şehirleşmenin üç sorununu yazınız.", "Çarpık yapılaşma, trafik sıkışıklığı, altyapı yetersizliği, çevre kirliliği, yeşil alan azlığı, afet riskinin artması."],
      ["Bir şehrin etki alanını belirleyen etkenleri açıklayınız.", "Şehrin nüfus büyüklüğü, ekonomik fonksiyonları, sunduğu sağlık-eğitim-ticaret hizmetleri ve ulaşım bağlantıları etki alanını belirler."]
    ] });

  K({ id: "cog11f", ad: "Gezegen Sınırları, Küresel İklim Değişikliği ve Sürdürülebilir Su Kullanımı",
    ozet: [
      "Gezegen sınırları: insanlığın güvenle yaşayabilmesi için aşılmaması gereken çevresel eşikler (iklim değişikliği, biyoçeşitlilik kaybı, tatlı su kullanımı, arazi kullanımı, okyanus asitlenmesi vb.)",
      "Sera gazlarının (karbondioksit, metan, diazot monoksit) artışı küresel ısınmaya yol açar",
      "Sonuçlar: buzulların erimesi, deniz seviyesinin yükselmesi, kuraklık, aşırı hava olayları, tür kayıpları",
      "Paris İklim Anlaşması (2015) küresel sıcaklık artışını sınırlamayı amaçlar; Türkiye 2021'de onaylamıştır",
      "Sürdürülebilir su kullanımı: damla ve yağmurlama sulama, kayıp-kaçakları azaltma, atık suyu arıtıp yeniden kullanma, yağmur suyu hasadı"
    ],
    anlatim: [
      "Gezegen sınırları yaklaşımına göre Dünya'nın doğal sistemlerinin bazı eşikleri vardır. Bu eşikler aşıldığında iklim, ekosistemler ve su döngüsü geri dönüşü zor biçimde bozulabilir.",
      "Fosil yakıtların kullanımı ve ormanların yok edilmesi atmosferdeki sera gazlarını artırır. Atmosfer daha fazla ısı tutar ve ortalama sıcaklık yükselir. Bunun sonucunda kuraklıklar uzar, sel ve fırtınalar şiddetlenir, deniz seviyesi yükselir.",
      "Türkiye, Akdeniz havzasında iklim değişikliğinden en çok etkilenebilecek bölgeler arasında yer alır. Tarımda su kullanımının büyük payı olduğu için modern sulama yöntemleri su tasarrufunda önemlidir.",
      "Bireysel olarak da suyu verimli kullanmak, enerji tasarrufu yapmak ve atıkları azaltmak iklim değişikliğiyle mücadeleye katkı sağlar."
    ],
    sorular: [
      ["Aşağıdakilerden hangisi bir sera gazıdır?", "Karbondioksit", "Azot (N₂)", "Argon", "Helyum", "Karbondioksit ısıyı tutan bir sera gazıdır."],
      ["Küresel iklim değişikliğinin sonuçlarından biri hangisidir?", "Deniz seviyesinin yükselmesi", "Buzulların genişlemesi", "Kuraklıkların azalması", "Aşırı hava olaylarının sona ermesi", "Buzullar eridikçe deniz seviyesi yükselir."],
      ["Tarımda su tasarrufu sağlayan sulama yöntemi hangisidir?", "Damla sulama", "Salma (vahşi) sulama", "Tarlayı göllendirme", "Gece boyu sürekli sulama", "Damla sulama suyu doğrudan bitki köküne verir."],
      ["Küresel sıcaklık artışını sınırlamayı amaçlayan 2015 tarihli uluslararası anlaşma hangisidir?", "Paris İklim Anlaşması", "Montrö Sözleşmesi", "Lozan Antlaşması", "Berlin Antlaşması", "Paris Anlaşması 2015'te kabul edildi."],
      ["'Gezegen sınırları' kavramı neyi ifade eder?", "İnsanlığın güvenle yaşaması için aşılmaması gereken çevresel eşikleri", "Ülkelerin siyasi sınırlarını", "Kıtaların sınırlarını", "Atmosferin katmanlarını", "Çevresel eşiklerdir."]
    ],
    acik: [
      ["Küresel iklim değişikliğinin Türkiye'ye olası iki etkisini yazınız.", "Kuraklığın artması ve su kaynaklarının azalması, tarımsal verimin düşmesi, orman yangınlarının artması, aşırı yağış ve sel olayları."],
      ["Evde ve tarımda su tasarrufu için ikişer öneri yazınız.", "Evde: musluğu açık bırakmamak, tasarruflu armatür kullanmak. Tarımda: damla sulama, sulamayı serin saatlerde yapmak, kanal kayıplarını önlemek."]
    ] });

  K({ id: "cog11g", ad: "Türkiye'nin Kültürel Hinterlandı ve Örnek Ülkelerde Ekonomik Faaliyetler",
    ozet: [
      "Kültürel hinterland (kültürel etki alanı): bir ülkenin dil, din, tarih ve gelenek bakımından bağının bulunduğu coğrafyalar",
      "Türkiye'nin kültürel hinterlandı: Balkanlar, Kafkasya, Orta Asya (Türk dünyası), Orta Doğu ve Kuzey Afrika",
      "Türk Devletleri Teşkilatı üyeleri: Azerbaycan, Kazakistan, Kırgızistan, Özbekistan ve Türkiye",
      "Örnek ülkeler: Brezilya (kahve, şeker kamışı, soya), Suudi Arabistan (petrol), Rusya (doğal gaz), Avustralya (demir cevheri, kömür), Çin (sanayi üretimi)",
      "Ekonomik faaliyetleri iklim, yer şekilleri, yer altı kaynakları, nüfus ve teknoloji belirler"
    ],
    anlatim: [
      "Türkiye tarih boyunca geniş bir coğrafyada etkin olmuş devletlerin mirasçısıdır. Bu nedenle Balkanlardan Orta Asya'ya kadar uzanan bölgelerde ortak dil, din, mimari ve geleneklere rastlanır. Bu ortak kültür, ekonomik ve siyasi iş birliği için de bir temel oluşturur.",
      "Türk Devletleri Teşkilatı, Türk dili konuşan devletler arasındaki iş birliğini güçlendirmek için çalışır. Eğitim, kültür, ticaret ve ulaşım projeleri bu iş birliğinin parçasıdır.",
      "Ülkelerin ekonomik faaliyetleri doğal koşullarla yakından ilişkilidir. Sıcak ve nemli iklime sahip Brezilya kahve ve şeker kamışında, yer altı kaynakları zengin Suudi Arabistan petrolde, Avustralya ise madencilikte öne çıkar."
    ],
    sorular: [
      ["Bir ülkenin dil, din, tarih ve gelenek bakımından bağının bulunduğu coğrafyalara ne ad verilir?", "Kültürel hinterland", "Kıta sahanlığı", "Ekonomik bölge", "Havza", "Kültürel etki alanı da denir."],
      ["Aşağıdaki ülkelerden hangisi Türk Devletleri Teşkilatı'nın üyesidir?", "Kazakistan", "Brezilya", "Avustralya", "Kanada", "Üyeler: Azerbaycan, Kazakistan, Kırgızistan, Özbekistan, Türkiye."],
      ["Kahve üretimiyle öne çıkan ülke hangisidir?", "Brezilya", "Rusya", "Norveç", "Kanada", "Brezilya dünyanın önde gelen kahve üreticisidir."],
      ["Ekonomisi büyük ölçüde petrole dayanan ülke hangisidir?", "Suudi Arabistan", "Hollanda", "Japonya", "İsviçre", "Suudi Arabistan petrol ihracatıyla bilinir."],
      ["Türkiye'nin kültürel hinterlandı içinde yer almayan bölge hangisidir?", "Güney Amerika", "Balkanlar", "Kafkasya", "Orta Asya", "Güney Amerika ile ortak tarihsel-kültürel bağ bulunmaz."]
    ],
    acik: [
      ["Türkiye'nin kültürel hinterlandındaki ülkelerle iş birliğinin iki yararını yazınız.", "Ticaretin ve yatırımların artması, eğitim ve kültür alışverişi, ulaşım ve enerji projeleri, bölgesel barışa katkı."],
      ["Bir ülkenin ekonomik faaliyetlerini doğal koşulların belirlediğine bir örnek veriniz.", "Brezilya'nın sıcak ve nemli iklimi kahve ve şeker kamışı tarımını; Suudi Arabistan'ın yer altı kaynakları petrol üretimini öne çıkarır."]
    ] });

  // ---------- FELSEFE ----------
  K({ id: "fel11a", ad: "Çevre Sorunları ve Felsefe",
    ozet: [
      "Çevre sorunları: çevrenin tahribatı, kirlilik, küresel ısınma, sürdürülebilirlik",
      "İçsel değer: bir şeyin kendi başına değerli olması · araçsal değer: başka bir amaç için değerli olması",
      "İnsan merkezci (antroposantrik) etik: doğa insan için değerlidir; doğa korunmalıdır çünkü insanın yararınadır",
      "Canlı merkezci (biyosantrik) etik: her canlının içsel değeri vardır (A. Schweitzer'in 'yaşama saygı' ilkesi)",
      "Çevre (ekosistem) merkezci etik: canlı ve cansız bütün doğa, ekosistemin bütünlüğü değerlidir (Aldo Leopold'un 'toprak etiği')"
    ],
    anlatim: [
      "Çevre sorunları yalnızca bilimsel ve teknik sorunlar değildir; 'Doğaya karşı sorumluluğumuz var mı?', 'Hayvanların ve bitkilerin değeri nereden gelir?' gibi felsefi sorular da doğurur.",
      "İnsan merkezci yaklaşıma göre doğa, insanın ihtiyaçları için araçsal değere sahiptir. Ormanları korumalıyız çünkü temiz hava ve su bize lazımdır. Bu yaklaşım doğanın korunmasını savunabilir ama gerekçesi insandır.",
      "Canlı merkezci yaklaşım her canlının kendi başına değerli olduğunu savunur. Çevre merkezci yaklaşım ise tek tek canlılardan çok ekosistemlerin, toprağın, suyun ve türlerin oluşturduğu bütünü değerli görür.",
      "Sürdürülebilirlik, bugünün ihtiyaçlarını gelecek kuşakların ihtiyaçlarını tehlikeye atmadan karşılamaktır; bu da kuşaklar arası adalet sorusunu gündeme getirir."
    ],
    sorular: [
      ["'Doğa korunmalıdır çünkü insanın ihtiyaçlarını karşılar.' görüşü hangi etik yaklaşıma aittir?", "İnsan merkezci etik", "Canlı merkezci etik", "Çevre merkezci etik", "Derin ekoloji", "Gerekçe insanın yararıdır."],
      ["Her canlının kendi başına değerli olduğunu savunan yaklaşım hangisidir?", "Canlı merkezci (biyosantrik) etik", "İnsan merkezci etik", "Faydacılık", "Pozitif hukuk", "Biyosantrik etik canlıların içsel değerini savunur."],
      ["'Yaşama saygı' ilkesiyle tanınan düşünür kimdir?", "Albert Schweitzer", "Aldo Leopold", "Descartes", "Thomas Hobbes", "Schweitzer canlı merkezci etiğin öncülerindendir."],
      ["Bir şeyin başka bir amaç için değil, kendi başına değerli olmasına ne ad verilir?", "İçsel değer", "Araçsal değer", "Piyasa değeri", "Kullanım değeri", "İçsel değer kendinde değerli olmaktır."],
      ["Ekosistemin bütünlüğünü, canlı ve cansız doğayı birlikte değerli gören yaklaşım hangisidir?", "Çevre (ekosistem) merkezci etik", "İnsan merkezci etik", "Hazcılık", "Mutlakiyetçilik", "Aldo Leopold'un toprak etiği bu yaklaşımın örneğidir."]
    ],
    acik: [
      ["İnsan merkezci ve canlı merkezci etiği karşılaştırınız.", "İnsan merkezci etikte doğa insan için araçsal değere sahiptir. Canlı merkezci etikte her canlının insandan bağımsız içsel değeri vardır."],
      ["Sürdürülebilirlik kavramını kuşaklar arası adalet açısından açıklayınız.", "Bugünkü kuşak doğal kaynakları gelecek kuşakların ihtiyaçlarını tehlikeye atmayacak biçimde kullanmalıdır; kaynakları tüketmek gelecek kuşaklara haksızlık olur."]
    ] });

  K({ id: "fel11b", ad: "Teknoloji ve Hayat",
    ozet: [
      "Tekhne: Antik Yunan'da sanat ve zanaat bilgisi; teknoloji kavramının kökü",
      "Teknoloji iyimserliği: teknoloji insanlığın sorunlarını çözer · teknoloji eleştirisi: insanı ve doğayı araçsallaştırabilir",
      "Ontolojik sorunlar: anlam kaybı, yabancılaşma, zaman-mekân algısının değişmesi, sanal evren",
      "Aksiyolojik (değer) sorunları: güvenlik ve mahremiyet, değerlerin aşınması, yapay zekâ karşısında ahlaki eylemin imkânı",
      "Heidegger: modern teknoloji doğayı yalnızca kullanılacak bir kaynak olarak görmeye yöneltir · Baudrillard: simülasyon ve gerçeğin yerini alan imgeler"
    ],
    anlatim: [
      "Teknoloji hayatı kolaylaştırır: hastalıkları tedavi eder, iletişimi hızlandırır, bilgiye erişimi artırır. Ancak felsefe, teknolojinin insanın kendini ve dünyayı algılayışını nasıl değiştirdiğini de sorgular.",
      "Ekran başında geçen uzun saatler, gerçek ilişkilerin yerini sanal ilişkilerin alması ve sürekli hız beklentisi, bazı düşünürlere göre insanın kendine ve çevresine yabancılaşmasına yol açabilir. Zaman ve mekân algısı da değişir: dünyanın öbür ucundaki biriyle anında konuşabiliriz.",
      "Heidegger'e göre modern teknoloji doğayı yalnızca kullanılacak bir kaynak olarak görmeye yöneltir. Baudrillard ise imgelerin ve simülasyonların gerçeğin yerini aldığı bir dünyadan söz eder.",
      "Yapay zekâ, kişisel verilerin güvenliği ve sorumluluk gibi yeni ahlaki sorular doğurur: Bir kararı algoritma verdiyse sorumlu kimdir?"
    ],
    sorular: [
      ["Antik Yunan'da sanat ve zanaat bilgisini ifade eden, teknoloji kavramının kökü olan sözcük hangisidir?", "Tekhne", "Logos", "Arkhe", "Episteme", "Tekhne üretme bilgisidir."],
      ["İnsanın ürettiği şeylere, emeğine ve kendine yabancı hâle gelmesine ne ad verilir?", "Yabancılaşma", "Aydınlanma", "Katarsis", "Mimesis", "Yabancılaşma teknolojinin ontolojik sorunlarındandır."],
      ["'Teknoloji insanlığın bütün sorunlarını çözecektir.' görüşü hangi tutumu yansıtır?", "Teknoloji iyimserliği", "Teknoloji karşıtlığı", "Şüphecilik", "Nihilizm", "Teknolojiye duyulan sınırsız güveni yansıtır."],
      ["Kişisel verilerin korunması teknolojinin hangi tür sorunlarıyla ilgilidir?", "Aksiyolojik (değer ve güvenlik) sorunlar", "Mantık sorunları", "Estetik sorunlar", "Matematiksel sorunlar", "Güvenlik ve mahremiyet değer sorunlarıdır."],
      ["İmgelerin ve simülasyonların gerçeğin yerini aldığını savunan düşünür kimdir?", "Jean Baudrillard", "Aristoteles", "Farabi", "John Locke", "Baudrillard simülasyon kavramıyla bilinir."]
    ],
    acik: [
      ["Teknolojinin insan hayatına iki olumlu ve iki olumsuz etkisini felsefi açıdan değerlendiriniz.", "Olumlu: bilgiye erişim, sağlıkta ilerleme, iletişimin kolaylaşması. Olumsuz: yabancılaşma, mahremiyetin azalması, insanın ve doğanın araçsallaştırılması."],
      ["Yapay zekânın verdiği bir kararda sorumluluğun kime ait olduğu sorusunu tartışınız.", "Sorumluluk yalnızca makineye yüklenemez; tasarlayan, eğiten, kullanan ve denetleyen insanlar sorumluluğu paylaşır. Ahlaki eylem bilinç ve irade gerektirir."]
    ] });

  K({ id: "fel11c", ad: "Akıl ve İnanç",
    ozet: [
      "Temel soru: Akıl ve inanç birbirini destekler mi, çatışır mı?",
      "İnanç akıldan önce gelir: Augustinus ve Anselmus — 'Anlamak için inanırım'",
      "Akıl ve inanç uzlaşır: Thomas Aquinas, Farabi, İbn Sina — akıl inancı destekleyebilir",
      "Gazali: Tehâfütü'l-Felâsife'de filozofların bazı görüşlerini eleştirdi · İbn Rüşd: Tehâfütü't-Tehâfüt ile felsefeyi savundu",
      "Kierkegaard: inanç, aklın sınırlarını aşan kişisel bir 'sıçrama'dır"
    ],
    anlatim: [
      "Ortaçağ'dan itibaren filozoflar inanç ile aklın ilişkisini tartışmıştır. Bazı düşünürlere göre inanç bilginin başlangıç noktasıdır; önce inanılır, sonra akılla anlaşılmaya çalışılır.",
      "Thomas Aquinas, akıl ile inancın aynı hakikate farklı yollardan ulaştığını, bu yüzden çatışmadıklarını savunmuştur. İslam felsefesinde Farabi ve İbn Sina da felsefe ile dini uzlaştırmaya çalışmıştır.",
      "Gazali, Tehâfütü'l-Felâsife adlı eserinde filozofların bazı metafizik görüşlerini eleştirmiştir. İbn Rüşd ise Tehâfütü't-Tehâfüt adlı eseriyle bu eleştirilere cevap vermiş, akıl ile vahyin çelişmediğini savunmuştur.",
      "XIX. yüzyılda Kierkegaard, inancı aklın kanıtlarıyla temellendirilemeyecek, bireyin kendi varoluşunda verdiği bir karar olarak görmüştür."
    ],
    sorular: [
      ["Gazali'nin filozofların bazı görüşlerini eleştirdiği eseri hangisidir?", "Tehâfütü'l-Felâsife", "Tehâfütü't-Tehâfüt", "Kutadgu Bilig", "Devlet", "Tehâfütü'l-Felâsife 'filozofların tutarsızlığı' anlamına gelir."],
      ["Gazali'nin eleştirilerine Tehâfütü't-Tehâfüt adlı eserle cevap veren filozof kimdir?", "İbn Rüşd", "Farabi", "İbn Sina", "Augustinus", "İbn Rüşd felsefeyi savunmuştur."],
      ["'Anlamak için inanırım.' sözüyle inancı akla önceleyen düşünür hangisidir?", "Anselmus", "Thomas Aquinas", "Kierkegaard", "Descartes", "Anselmus'un sözüdür (credo ut intelligam)."],
      ["Akıl ile inancın aynı hakikate farklı yollardan ulaştığını savunan Ortaçağ filozofu kimdir?", "Thomas Aquinas", "Tertullianus", "Gazali", "Nietzsche", "Aquinas akıl ve inancı uzlaştırmıştır."],
      ["İnancı aklın sınırlarını aşan kişisel bir 'sıçrama' olarak gören düşünür kimdir?", "Kierkegaard", "Farabi", "Thomas Aquinas", "John Locke", "Kierkegaard varoluşçuluğun öncüsüdür."]
    ],
    acik: [
      ["Akıl ve inanç ilişkisine dair iki farklı görüşü birer düşünürle açıklayınız.", "Uzlaştırıcı görüş: Thomas Aquinas, akıl ve inanç aynı hakikate ulaşır. İnancı önceleyen görüş: Anselmus, anlamak için önce inanmak gerekir."],
      ["Gazali ile İbn Rüşd arasındaki tartışmayı kısaca açıklayınız.", "Gazali Tehâfütü'l-Felâsife'de filozofların bazı görüşlerini eleştirdi; İbn Rüşd Tehâfütü't-Tehâfüt ile felsefeyi savunarak akıl ile vahyin çelişmediğini öne sürdü."]
    ] });

  K({ id: "fel11d", ad: "Edebiyat ve Felsefe",
    ozet: [
      "Dil, düşüncenin hem aracı hem de sınırıdır; edebiyat ve felsefe dili farklı amaçlarla kullanır",
      "Felsefe kavramlarla, gerekçelendirerek konuşur; edebiyat imgeler, kurgu ve duygu aracılığıyla anlatır",
      "Mimesis (taklit): Platon'a göre sanat gerçeğin taklidinin taklididir; Aristoteles'e göre taklit öğreticidir",
      "Katarsis: Aristoteles'e göre trajedinin izleyicide acıma ve korku yoluyla sağladığı arınma",
      "Felsefi edebiyat: varoluş, özgürlük, ahlak gibi sorunları işleyen eserler (Platon'un diyalogları, Camus'nün Yabancı'sı, Dostoyevski'nin romanları)"
    ],
    anlatim: [
      "Felsefe, sorularına kavramlar ve akıl yürütmeyle yanıt arar. Edebiyat ise aynı sorulara karakterler, olaylar ve imgeler üzerinden yaklaşır. Bir roman kahramanının ahlaki ikilemi, okurun soyut bir felsefi sorunu yaşanmış gibi düşünmesini sağlar.",
      "Platon, sanatçıyı gerçekliğin gölgesini taklit ettiği için eleştirir; Aristoteles ise taklidin insanın öğrenme yolu olduğunu söyler. Aristoteles'e göre trajedi, izleyicide acıma ve korku uyandırarak bir arınma (katarsis) yaşatır.",
      "Bazı filozoflar düşüncelerini edebî biçimde ifade etmiştir: Platon diyalog biçimini kullanmış, Camus ve Sartre romanlar ve oyunlar yazmıştır. Böylece edebiyat ile felsefe birbirini besler."
    ],
    sorular: [
      ["Aristoteles'e göre trajedinin izleyicide acıma ve korku yoluyla sağladığı arınmaya ne ad verilir?", "Katarsis", "Mimesis", "Logos", "Ataraksia", "Katarsis Poetika'da açıklanır."],
      ["Sanatı 'taklidin taklidi' olarak gören filozof kimdir?", "Platon", "Aristoteles", "Kant", "Hegel", "Platon'a göre duyulur dünya ideaların, sanat da duyulur dünyanın taklididir."],
      ["Felsefenin edebiyattan farkını en iyi anlatan ifade hangisidir?", "Kavramlarla ve gerekçelendirerek konuşması", "Yalnızca duygulara seslenmesi", "Kurmaca kişiler yaratması", "Uyak ve ölçü kullanması", "Felsefe kavramsal ve gerekçelidir."],
      ["Düşüncelerini diyalog biçiminde yazan filozof kimdir?", "Platon", "Descartes", "Kant", "Locke", "Platon'un eserleri diyaloglardan oluşur."],
      ["'Mimesis' kavramının anlamı hangisidir?", "Taklit", "Arınma", "Akıl", "Şüphe", "Mimesis sanatın gerçekliği taklit etmesidir."]
    ],
    acik: [
      ["Platon ve Aristoteles'in sanata bakışını karşılaştırınız.", "Platon sanatı gerçekliğin taklidinin taklidi olarak görür ve eleştirir. Aristoteles taklidi öğretici bulur; trajedinin katarsis yoluyla insanı arındırdığını söyler."],
      ["Bir romanın felsefi bir soruyu nasıl tartışmaya açabileceğini örnekle açıklayınız.", "Roman kahramanının yaşadığı ahlaki ikilem ya da varoluş sorunu (özgürlük, sorumluluk, hayatın anlamı) okuru aynı soruyu kendi hayatı üzerinden düşünmeye yöneltir."]
    ] });

  K({ id: "fel11e", ad: "Hayatın Anlamı",
    ozet: [
      "Aristoteles: mutluluk (eudaimonia) erdemli yaşamla ve insanın kendine özgü yetisini (aklı) gerçekleştirmesiyle elde edilir",
      "Epikuros: mutluluk acı ve kaygıdan uzak, ölçülü hazlarla dolu dingin bir yaşamdır (ataraksia)",
      "Stoacılar: doğaya ve akla uygun yaşamak, değiştiremeyeceklerimizi kabul etmek",
      "Sartre: 'Varoluş özden önce gelir'; insan kendini seçimleriyle oluşturur, özgürdür ve sorumludur",
      "Camus: hayat absürd görünse de insan ona başkaldırarak anlam yaratabilir"
    ],
    anlatim: [
      "'Hayatın anlamı nedir?' sorusu insanlık kadar eskidir. Antik filozoflar bu soruyu çoğunlukla mutluluk kavramı üzerinden tartışmıştır.",
      "Aristoteles'e göre her şeyin bir amacı vardır; insanın amacı aklını kullanarak erdemli bir yaşam sürmek ve böylece mutluluğa ulaşmaktır. Epikuros, mutluluğu ölçülü hazlarda ve ruh dinginliğinde; Stoacılar ise doğaya uygun yaşamakta ve tutkulardan arınmakta görür.",
      "Varoluşçu filozoflar hayatın önceden belirlenmiş bir anlamı olmadığını, anlamı insanın kendisinin yarattığını söyler. Sartre'a göre insan özgürdür ve seçimlerinin sorumluluğunu taşır; 'kendisi olmak' bu sorumluluğu üstlenmekle mümkündür."
    ],
    sorular: [
      ["'Varoluş özden önce gelir.' görüşü hangi düşünüre aittir?", "Sartre", "Aristoteles", "Epikuros", "Platon", "Sartre varoluşçuluğun temsilcisidir."],
      ["Mutluluğu ölçülü hazlar ve ruh dinginliği (ataraksia) olarak gören filozof kimdir?", "Epikuros", "Sartre", "Kant", "Aristoteles", "Epikuros ölçülü hazcılığı savunur."],
      ["Aristoteles'e göre mutluluğa (eudaimonia) nasıl ulaşılır?", "Erdemli yaşayıp aklı gerçekleştirerek", "Sınırsız haz peşinde koşarak", "Toplumdan tamamen uzaklaşarak", "Zengin olarak", "Aristoteles'e göre mutluluk erdemli etkinliktir."],
      ["Hayatın absürd göründüğünü ama insanın ona başkaldırarak anlam yaratabileceğini savunan düşünür kimdir?", "Albert Camus", "Thomas Aquinas", "Farabi", "John Locke", "Camus absürd kavramıyla bilinir."],
      ["Doğaya ve akla uygun yaşamayı, değiştirilemeyeni kabul etmeyi öğütleyen felsefe okulu hangisidir?", "Stoacılık", "Sofistler", "Pozitivizm", "Pragmatizm", "Stoacılar doğaya uygun yaşamı savunur."]
    ],
    acik: [
      ["Epikuros ve Stoacıların mutluluk anlayışlarını karşılaştırınız.", "Epikuros mutluluğu acıdan uzak, ölçülü hazlarla dolu dingin bir yaşamda görür. Stoacılar doğaya ve akla uygun yaşamakta, tutkulara kapılmamakta görür."],
      ["Sartre'ın 'insan özgürdür ve sorumludur' görüşünü açıklayınız.", "İnsanın önceden belirlenmiş bir özü yoktur; kendini seçimleriyle oluşturur. Seçimlerinin sonuçlarından da yalnızca kendisi sorumludur."]
    ] });

  K({ id: "fel11f", ad: "Hukuk ve Felsefe",
    ozet: [
      "Hukuk; toplumsal düzeni, adaleti ve güvenliği sağlamak için gereklidir",
      "Doğal hukuk: akla dayanan, evrensel, değişmeyen ilkeler; insanın doğuştan hakları vardır (yaşam, özgürlük, mülkiyet — J. Locke)",
      "Pozitif hukuk: devletin koyduğu, yazılı, yürürlükte olan ve değişebilen kurallar (H. Kelsen)",
      "Ahlak ve hukuk: ahlakın yaptırımı vicdan ve toplumsal kınamadır; hukukun yaptırımı devlet gücüyle uygulanır",
      "Haksız bir yasaya uymak zorunlu mudur? (Sofokles'in Antigone'si bu soruyu tartışır)"
    ],
    anlatim: [
      "Hukuk, insanların bir arada barış içinde yaşayabilmesi için kurallar koyar. Kurallar olmasaydı güçlü olan zayıfı ezebilir, toplumsal düzen sağlanamazdı.",
      "Doğal hukuk anlayışına göre bazı haklar insanın doğasından gelir ve hiçbir devlet bunları ortadan kaldıramaz. Pozitif hukuk anlayışı ise geçerli hukukun devletin usulüne uygun koyduğu yazılı kurallar olduğunu söyler.",
      "Ahlak kuralları da davranışlarımızı düzenler ama ahlaka aykırı davranışın yaptırımı vicdan azabı ya da toplumun kınamasıdır. Hukuk kuralının yaptırımı ise ceza, tazminat gibi devlet gücüyle uygulanır.",
      "Antigone, kral Kreon'un yasağına rağmen kardeşini gömer; çünkü ona göre tanrıların ve vicdanın yasası kralın yasasından üstündür. Bu, doğal hukuk ile pozitif hukuk arasındaki gerilimin klasik bir örneğidir."
    ],
    sorular: [
      ["Akla dayanan, evrensel ve değişmeyen hukuk ilkelerini savunan anlayış hangisidir?", "Doğal hukuk", "Pozitif hukuk", "Örf hukuku", "Uluslararası hukuk", "Doğal hukuk evrensel ve değişmez ilkelere dayanır."],
      ["Devletin koyduğu, yazılı ve yürürlükte olan kuralları esas alan hukuk anlayışı hangisidir?", "Pozitif hukuk", "Doğal hukuk", "Ahlak", "Gelenek", "Pozitif hukuk yazılı ve değişebilir kurallardır."],
      ["Ahlak kuralını hukuk kuralından ayıran özellik hangisidir?", "Yaptırımının vicdan ve toplumsal kınama olması", "Yazılı olması", "Devlet tarafından uygulanması", "Mahkemece denetlenmesi", "Hukukun yaptırımı devlet gücüyle uygulanır."],
      ["Yaşam, özgürlük ve mülkiyeti insanın doğal hakları olarak gören filozof kimdir?", "John Locke", "Thomas Hobbes", "Platon", "Baudrillard", "Locke doğal haklar kuramıyla bilinir."],
      ["Kral Kreon'un yasağına rağmen kardeşini gömen Antigone'nin tutumu hangi tartışmayı örnekler?", "Doğal hukuk ile pozitif hukuk arasındaki gerilim", "Akıl ile inanç arasındaki uyum", "Teknoloji ile doğa arasındaki ilişki", "Sanat ile taklit arasındaki ilişki", "Vicdanın yasası ile devletin yasası çatışır."]
    ],
    acik: [
      ["Doğal hukuk ile pozitif hukuku karşılaştırınız.", "Doğal hukuk akla dayalı, evrensel ve değişmez ilkelerdir; insanın doğuştan haklarını kabul eder. Pozitif hukuk devletin koyduğu, yazılı ve değişebilen kurallardır."],
      ["Ahlak ile hukuk arasındaki iki farkı yazınız.", "Ahlakın yaptırımı vicdan ve toplumsal kınamadır, hukukun yaptırımı devlet gücüdür; hukuk kuralları yazılı ve genel olarak bağlayıcıdır, ahlak kuralları kişiden kişiye ve toplumdan topluma değişebilir."]
    ] });

  // ================= YENİ DÜZEN =================
  // [ünite id, ünite adı, dönem, [konu id | [konu id, yeni ad]]]
  const DUZEN = {
    matematik: [
      ["m11t1", "1. Tema: İstatistiksel Araştırma Süreci", 1, ["mat11i1"]],
      ["m11t2", "2. Tema: Geometrik Şekiller", 1, ["mat11g1", "mat11g2"]],
      ["m11t3a", "3. Tema: Nicelikler ve Değişimler (1) — Trigonometrik Fonksiyonlar", 2, ["mat1k1", "mat1k3"]],
      ["m11t3b", "3. Tema: Nicelikler ve Değişimler (2) — Üstel ve Logaritmik Fonksiyonlar", 2, ["mat11u1", "mat11u2"]],
      ["m11t3c", "3. Tema: Nicelikler ve Değişimler (3) — Fonksiyonlarda İşlemler ve Bileşke", 2, ["mat11f1"]]
    ],
    fizik: [
      ["f11u1", "1. Ünite: Kuvvet ve Hareket", 1, [["fiz2k1", "Serbest Düşme ve İki Boyutta Sabit İvmeli Hareket (Atışlar)"], ["fiz1k2", "Newton'ın Hareket Yasaları"], "fiz1k3"]],
      ["f11u2", "2. Ünite: Elektrik ve Manyetizma", 2, [["fiz3k2", "Elektriksel Kuvvet, Elektriksel Alan ve Manyetik Alan"], ["fiz3k3", "Manyetik Kuvvet, İndüksiyon ve Transformatörler"]]],
      ["f11u3", "3. Ünite: Optik", 2, ["fiz11o1", "fiz11o2"]]
    ],
    kimya: [
      ["k11t1", "1. Tema: Etkileşim — Tepkimelerde Enerji ve Hız", 1, [["kim4k1", "Tepkimelerde Enerji ve Tepkime Hızı"]]],
      ["k11t2", "2. Tema: Çeşitlilik — Denge", 2, ["kim4k2", "kim4k3", "kim4k4"]],
      ["k11t3", "3. Tema: Sürdürülebilirlik", 2, ["kim11s1"]]
    ],
    biyoloji: [
      ["b11t1", "1. Tema: Tepki", 1, ["bio11t1", ["bio1k1", "Sinir Sistemi, Refleks ve Hormonlar"], "bio11t2", "bio11t3"]],
      ["b11t2", "2. Tema: Homeostazi", 2, ["bio11h1", ["bio3k1", "Dolaşım, Solunum ve Boşaltım Sistemlerinin Dengedeki Rolü"], "bio11h2"]]
    ],
    edebiyat: [
      ["e11t1", "1. Tema: Bir Diyeceğim Var!", 1, ["ede11a1", "ede11a2", "ede11a3"]],
      ["e11t2", "2. Tema: Kültür Yolculuğu", 1, ["ede11b1", "ede11b2"]],
      ["e11t3", "3. Tema: Yaşamın İzinde", 2, ["ede11c1", "ede11c2"]],
      ["e11t4", "4. Tema: Hayatın Aynası", 2, ["ede11d1", "ede11d2"]]
    ],
    tarih: [
      ["t11u1", "1. Ünite: Değişen Dünyada Osmanlı Devleti (1683-1789)", 1, ["tar11a1", "tar11a2", "tar11a3"]],
      ["t11u2", "2. Ünite: Dönüşüm Sürecinde Osmanlı (1789-1908)", 2, ["tar11b1", "tar11b2", ["tar3k1", "Avrupa Devletleri ve Osmanlı Diplomasisi (Şark Meselesi)"], "tar11b3"]],
      ["t11u3", "3. Ünite: Savaşlar Sarmalında Osmanlı (1908-1918)", 2, ["tar11c1", "tar11c2", "tar11c3"]]
    ],
    cografya: [
      ["c11u1", "1. Ünite: Coğrafyanın Doğası", 1, ["cog11a"]],
      ["c11u2", "2. Ünite: Mekânsal Bilgi Teknolojileri", 1, ["cog11b"]],
      ["c11u3", "3. Ünite: Doğal Sistemler ve Süreçler", 1, ["cog11c"]],
      ["c11u4", "4. Ünite: Beşerî Sistemler ve Süreçler", 2, ["cog11d"]],
      ["c11u5", "5. Ünite: Ekonomik Faaliyetler ve Etkileri", 2, [["cog3k1", "Tarım, Madenler, Enerji Kaynakları ve Sanayi"]]],
      ["c11u6", "6. Ünite: Afetler ve Sürdürülebilir Çevre", 2, ["cog11f"]],
      ["c11u7", "7. Ünite: Bölgeler, Ülkeler ve Küresel Bağlantılar", 2, ["cog11g"]]
    ],
    felsefe: [
      ["fl11u1", "1. Ünite: Çevre Sorunları ve Felsefe", 1, ["fel11a"]],
      ["fl11u2", "2. Ünite: Teknoloji ve Hayat", 1, ["fel11b"]],
      ["fl11u3", "3. Ünite: Akıl ve İnanç", 1, ["fel11c"]],
      ["fl11u4", "4. Ünite: Edebiyat ve Felsefe", 2, ["fel11d"]],
      ["fl11u5", "5. Ünite: Hayatın Anlamı", 2, ["fel11e"]],
      ["fl11u6", "6. Ünite: Hukuk ve Felsefe", 2, ["fel11f"]]
    ]
  };

  const cikan = [];
  for (const [ders, uniteler] of Object.entries(DUZEN)) {
    const D = I[ders]; if (!D) continue;
    const eski = {}; for (const u of D.uniteler || []) for (const k of u.konular || []) eski[k.id] = k;
    const kullanilan = new Set();
    D.uniteler = uniteler.map(([id, ad, donem, liste]) => ({
      id, ad, donem,
      konular: liste.map((x) => {
        const [kid, yeniAd] = Array.isArray(x) ? x : [x, null];
        const k = eski[kid] || Y[kid]; if (!k) return null;
        if (yeniAd) k.ad = yeniAd; else k.ad = String(k.ad).replace(/\s*\(Maarif\)\s*$/, "");
        kullanilan.add(kid); return k;
      }).filter(Boolean)
    })).filter((u) => u.konular.length);
    for (const kid of Object.keys(eski)) if (!kullanilan.has(kid)) cikan.push(kid);
  }
  // İstatistik konusu için korelasyon yönü/gücü üreteci (genel "veri" üretecinin ortalama-medyan sorularının yerine)
  window.URETEC = window.URETEC || {};
  window.URETEC.mat11i1 = () => {
    const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
    for (let deneme = 0; deneme < 40; deneme++) {
      const tip = r(0, 2), n = 6, x = [], y = [];
      for (let i = 0; i < n; i++) { const xi = 2 + i * r(1, 3); x.push(xi); y.push(tip === 2 ? r(10, 30) : (tip === 0 ? 5 + 3 * xi : 80 - 3 * xi) + r(-8, 8)); }
      const ort = (a) => a.reduce((s, v) => s + v, 0) / a.length, mx = ort(x), my = ort(y);
      let sxy = 0, sxx = 0, syy = 0; for (let i = 0; i < n; i++) { sxy += (x[i] - mx) * (y[i] - my); sxx += (x[i] - mx) ** 2; syy += (y[i] - my) ** 2; }
      if (!sxx || !syy) continue;
      const rr = sxy / Math.sqrt(sxx * syy);
      const dogru = rr > 0.8 && rr < 0.985 ? "Güçlü pozitif ilişki" : rr < -0.8 && rr > -0.985 ? "Güçlü negatif ilişki" : Math.abs(rr) < 0.2 ? "İlişki yok denecek kadar zayıf" : null;
      if (!dogru) continue;
      const hepsi = ["Güçlü pozitif ilişki", "Güçlü negatif ilişki", "İlişki yok denecek kadar zayıf", "Mükemmel negatif ilişki (r = −1)"];
      const tablo = x.map((v, i) => `(${v}, ${y[i]})`).join(" ");
      return { soru: `İki nicel değişkene ait (x, y) verileri: ${tablo}. Bu verilerin serpme diyagramına göre iki değişken arasındaki ilişki için hangisi doğrudur?`,
        secenekler: [dogru, ...hepsi.filter((h) => h !== dogru)], dogru: 0,
        cozum: `Korelasyon katsayısı yaklaşık r = ${rr.toFixed(2).replace(".", ",").replace("-", "−")}. r 1'e yakınsa güçlü pozitif, −1'e yakınsa güçlü negatif, 0'a yakınsa ilişki yok denecek kadar zayıftır.` };
    }
    return null;
  };
  window.MAARIF11 = { cikan, yeni: Object.keys(Y) };
})();
