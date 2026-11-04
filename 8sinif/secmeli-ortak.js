window.ICERIK = window.ICERIK || {};
// Ortaokul (5–8) ORTAK seçmeli ders üniteleri — 1. bölüm: Kur'an-ı Kerim, Temel Dinî Bilgiler, Masal ve Destanlarımız,
// Okuma Becerileri, Yazarlık ve Yazma Becerileri. secmeli.js'ten (temel üniteler) SONRA yüklenir; dersi yoksa oluşturur,
// varsa yalnızca eksik üniteleri ekler. Sorularda doğru cevap ilk şıktır; uygulama şıkları karıştırır.
(function () {
  const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
  const MEBI = { ad: "MEBİ — MEB'in ücretsiz bireysel öğrenme platformu", url: "https://mebi.eba.gov.tr" };
  const EBA = { ad: "EBA — Konu anlatım videoları ve ders kitapları", url: "https://www.eba.gov.tr" };
  const TYMM = { ad: "MEB öğretim programları (Türkiye Yüzyılı Maarif Modeli)", url: "https://tymm.meb.gov.tr/ogretim-programlari" };
  window.SECMELI_EKLE = window.SECMELI_EKLE || function (key, temel, uniteler) {
    const D = window.ICERIK[key] || (window.ICERIK[key] = Object.assign({ secmeli: true, kaynaklar: [TYMM, EBA, MEBI], uniteler: [] }, temel));
    const var_ = new Set(D.uniteler.map((u) => u.id));
    uniteler.forEach((u) => { if (!var_.has(u.id)) D.uniteler.push(u); });
  };
  const ekle = window.SECMELI_EKLE;

  /* ───────────── KUR'AN-I KERİM ───────────── */
  ekle("s_kuran", { ad: "Kur'an-ı Kerim", ikon: "📗", renk: "#15803d" }, [
    { id: "ok_k1", ad: "Tecvide Giriş", konular: [
      { id: "ok_k1a", ad: "Harekeler, Cezm, Şedde ve Tenvin",
        ozet: ["Üstün (e/a), esre (i/ı), ötre (u/ü): harekeler harfi okutur", "Cezm: harfin sakin (harekesiz) okunmasını sağlar", "Şedde: harfin iki kez okunmasını sağlar (ilki sakin, ikincisi harekeli)", "Tenvin: iki üstün, iki esre, iki ötre — sonuna 'n' sesi ekler (en, in, un)", "Tecvid: Kur'an'ı harflerin hakkını vererek doğru ve güzel okuma bilgisi"],
        anlatim: [
          "Arap harfleri tek başına sessizdir; onları okutan işaretlere hareke denir. Harfin üstündeki eğik çizgi üstün (e ya da a sesi), altındaki eğik çizgi esre (i ya da ı sesi), üstündeki küçük vav biçimindeki işaret ötre (u ya da ü sesi) okutur. Kalın harflerde a-ı-u, ince harflerde e-i-ü sesi çıkar.",
          "Cezm, harfin üzerine konan küçük yuvarlak ya da başı kesik 'h' biçimindeki işarettir; harfi harekesiz, yani sakin okutur ve önceki harfle birleştirir: 'el', 'min' gibi. Şedde ise küçük bir 'w' biçimindedir; bulunduğu harf iki kez okunur: ilki önceki harfle birleşir, ikincisi kendi harekesiyle okunur. Örneğin 'rabbi' kelimesindeki 'b' harfi şeddelidir.",
          "Tenvin, harekenin iki kez yazılmasıdır: iki üstün 'en/an', iki esre 'in/ın', iki ötre 'un/ün' okunur. Kelimenin sonundaki bu 'n' sesi, kendinden sonraki harfe göre farklı okunabilir; bunu tecvidin nun-u sakin ve tenvin kurallarında öğreniriz. Tecvid, Peygamberimizden bu yana Kur'an'ın aynı biçimde okunmasını korur."
        ],
        ornekler: [["Bir harfin üzerinde şedde ve üstün varsa nasıl okunur?", "Harf iki kez okunur: ilki önceki harfle sakin olarak birleşir, ikincisi üstün ile okunur. Örneğin 'ennâs' kelimesinde 'n' şeddelidir: en-nâs."],
          ["'Kitâbun' kelimesinin sonundaki iki ötre ne okutur?", "İki ötre tenvindir; kelimenin sonuna 'un' sesi ekler: kitâb-un."]],
        hatalar: ["Cezmli harfi harekeli gibi okumak: cezm harfi sessiz bırakır, önceki harfle birleştirir.", "Şeddeli harfi tek okumak: şedde harfi ikiler, anlam da değişebilir."],
        videoAra: "Kur'an-ı Kerim hareke cezm şedde tenvin",
        sorular: [
          S("Harfin iki kez okunmasını sağlayan işaret hangisidir?", ["Şedde", "Cezm", "Esre", "Med"], "Şedde, bulunduğu harfi iki kez okutur."),
          S("Harfi harekesiz (sakin) okutan işaret hangisidir?", ["Cezm", "Şedde", "Tenvin", "Üstün"], "Cezm harfi sakin okutur."),
          S("İki ötre hangi sesi verir?", ["un / ün", "en / an", "in / ın", "â"], "İki ötre tenvindir ve 'un/ün' okunur."),
          S("Harfin altına konan eğik çizgi hangi harekedir?", ["Esre", "Üstün", "Ötre", "Cezm"], "Esre harfin altına konur, i/ı okutur."),
          S("Kur'an'ı harflerin hakkını vererek doğru okuma bilgisine ne denir?", ["Tecvid", "Tefsir", "Meal", "Hatim"], "Doğru ve güzel okuma bilgisi tecviddir."),
          S("Tenvin aşağıdakilerden hangisidir?", ["Harekenin iki kez yazılması", "Harfin uzatılması", "Harfin sakin okunması", "Kelimenin silinmesi"], "İki üstün, iki esre, iki ötre tenvindir.")
        ] },
      { id: "ok_k1b", ad: "Nun-u Sakin ve Tenvin: İzhar, İdğam, İklab, İhfa",
        ozet: ["Nun-u sakin: cezmli nun harfi; tenvin de sonda 'n' sesi verir", "İzhar: boğaz harflerinden önce 'n' açık okunur (ء ه ع ح غ خ)", "İdğam: 'yermelûn' harflerinden önce 'n' sonraki harfe katılır (ي ر م ل و ن)", "İklab: 'b' harfinden önce 'n' sesi 'm'ye döner", "İhfa: kalan 15 harften önce 'n' genizden gizlice okunur"],
        anlatim: [
          "Cezmli nun harfine nun-u sakin denir. Tenvin de kelimenin sonunda bir 'n' sesi verdiği için aynı kurallara uyar. Bu 'n' sesinin nasıl okunacağı, kendinden sonra gelen harfe bağlıdır. Dört durum vardır: izhar, idğam, iklab ve ihfa.",
          "İzhar 'açık okuma' demektir. Nun-u sakin ya da tenvinden sonra boğazdan çıkan altı harften biri (hemze, he, ayın, ha, ğayın, hı) gelirse 'n' sesi açıkça okunur. İdğam 'katma' demektir: sonra 'yermelûn' kelimesindeki harflerden biri (ye, ra, mim, lam, vav, nun) gelirse 'n' sesi sonraki harfe katılarak okunur; ye, mim, vav ve nun'da genizden ses (gunne) vardır.",
          "İklab 'çevirme' demektir: nun-u sakin ya da tenvinden sonra 'be' harfi gelirse 'n' sesi 'm' sesine çevrilir ve genizden okunur: 'min ba'di' → 'mim ba'di'. Bu dört durumun dışında kalan on beş harften önce ise ihfa yapılır: 'n' sesi ne tam açık ne tam katılarak, genizden gizlice okunur."
        ],
        ornekler: [["'Min hayrin' ifadesinde nasıl okunur?", "Nun-u sakinden sonra boğaz harfi 'hı' gelmiştir; izhar yapılır ve 'n' açık okunur: min hayr."],
          ["'Min ba'di' nasıl okunur?", "Nun-u sakinden sonra 'be' gelmiştir; iklab yapılır, 'n' sesi 'm' olur: mim ba'di."]],
        hatalar: ["Her 'n' sesini aynı okumak: sonraki harfe göre izhar, idğam, iklab ya da ihfa yapılır.", "İklab'ı idğamla karıştırmak: iklab yalnızca 'be' harfinden önce olur."],
        videoAra: "tecvid izhar idğam iklab ihfa",
        sorular: [
          S("Nun-u sakinden sonra 'be' harfi gelirse hangi kural uygulanır?", ["İklab", "İzhar", "İdğam", "İhfa"], "Be harfinden önce iklab yapılır; n sesi m olur."),
          S("İzhar harfleri hangi gruptur?", ["Boğaz harfleri", "Dudak harfleri", "Yermelûn harfleri", "Peltek harfler"], "İzhar, boğazdan çıkan altı harften önce yapılır."),
          S("'Yermelûn' kelimesi hangi kuralın harflerini hatırlatır?", ["İdğam", "İzhar", "İklab", "Med"], "Ye, ra, mim, lam, vav, nun idğam harfleridir."),
          S("'n' sesinin genizden gizlice okunmasına ne denir?", ["İhfa", "İzhar", "İklab", "Kalkale"], "İhfa 'gizleme' demektir."),
          S("İzhar kelimesinin anlamı nedir?", ["Açık okuma", "Katma", "Çevirme", "Gizleme"], "İzhar açık okumak demektir."),
          S("Tenvin neden nun-u sakin kurallarına uyar?", ["Sonda 'n' sesi verdiği için", "Uzatıldığı için", "Şeddeli olduğu için", "Boğazdan çıktığı için"], "Tenvin de bir 'n' sesi verir.")
        ] }
    ] },
    { id: "ok_k2", ad: "Sureler ve Anlamları", konular: [
      { id: "ok_k2a", ad: "Fatiha Suresi",
        ozet: ["Kur'an'ın ilk suresidir; 7 ayettir", "'Ümmü'l-Kitap' (Kitabın anası) olarak da anılır", "Her namazın her rekâtında okunur", "Allah'a hamd, O'nun rahmeti ve hesap gününün sahibi oluşu anlatılır", "Doğru yola iletilme duası ile biter"],
        anlatim: [
          "Fatiha 'açan, başlayan' demektir. Mushafta ilk sırada yer aldığı için bu adı almıştır ve yedi ayettir. İçinde Kur'an'ın temel konularının özü bulunduğu için 'Ümmü'l-Kitap' yani kitabın anası olarak da anılır.",
          "Surenin anlamı kısaca şöyledir: Hamd, âlemlerin Rabbi Allah'adır. O Rahman'dır, Rahim'dir; din gününün (hesap gününün) sahibidir. Yalnız sana ibadet eder, yalnız senden yardım dileriz. Bizi doğru yola, kendilerine nimet verdiklerinin yoluna ilet; gazaba uğrayanların ve sapmışların yoluna değil.",
          "Fatiha, namazın her rekâtında okunur; bu yüzden müslümanların en çok okuduğu suredir. Sure, kulun Allah'a övgüsüyle başlar, O'na bağlılığını dile getirir ve doğru yolda kalma duasıyla biter. Bu yönüyle bir dua ve bağlılık sözüdür."
        ],
        sorular: [
          S("Fatiha Suresi kaç ayettir?", ["7", "5", "4", "10"], "Fatiha yedi ayettir."),
          S("Fatiha Suresi'nin diğer bir adı hangisidir?", ["Ümmü'l-Kitap", "Kalbü'l-Kur'an", "Muavvizeteyn", "Fecr"], "Kitabın anası anlamında Ümmü'l-Kitap denir."),
          S("Fatiha Suresi nerede mutlaka okunur?", ["Namazın her rekâtında", "Yalnız cuma günleri", "Yalnız bayramlarda", "Yalnız Ramazan'da"], "Fatiha namazın her rekâtında okunur."),
          S("Fatiha kelimesinin anlamı nedir?", ["Açan, başlayan", "Bitiren", "Sabah", "Işık"], "Mushafın başında olduğu için 'açan' anlamındadır."),
          S("Fatiha Suresi hangi duayla biter?", ["Doğru yola iletilme", "Yağmur yağması", "Sağlık", "Yolculuk"], "Sure 'bizi doğru yola ilet' duasıyla sona erer.")
        ] },
      { id: "ok_k2b", ad: "İhlas, Felak ve Nas Sureleri",
        ozet: ["İhlas: 4 ayet; Allah'ın birliği (tevhid) anlatılır", "Felak: 5 ayet; sabahın Rabbine sığınma", "Nas: 6 ayet; insanların Rabbine, vesvese verenin kötülüğünden sığınma", "Felak ve Nas'a birlikte 'Muavvizeteyn' (sığınma sureleri) denir", "Üçü de Mekke döneminde inmiş kısa surelerdir"],
        anlatim: [
          "İhlas Suresi dört ayettir ve Allah'ın birliğini en kısa biçimde anlatır: O, Allah'tır, birdir. Allah sameddir, yani her şey O'na muhtaçtır, O hiçbir şeye muhtaç değildir. Doğurmamış ve doğmamıştır. Hiçbir şey O'na denk değildir. İhlas 'samimiyet, içtenlik' demektir.",
          "Felak Suresi beş ayettir. 'Yarattığı şeylerin kötülüğünden, karanlığı çöktüğünde gecenin kötülüğünden, düğümlere üfleyenlerin kötülüğünden ve haset ettiğinde hasetçinin kötülüğünden sabahın Rabbine sığınırım' anlamındadır.",
          "Nas Suresi altı ayettir ve Kur'an'ın son suresidir. İnsanların Rabbine, insanların Melik'ine, insanların İlah'ına; insanların kalplerine vesvese veren sinsi şeytanın kötülüğünden sığınmayı öğretir. Felak ve Nas'a birlikte 'Muavvizeteyn', yani iki sığınma suresi denir; Peygamberimiz bu sureleri sıkça okurdu."
        ],
        sorular: [
          S("Allah'ın birliğini anlatan dört ayetlik sure hangisidir?", ["İhlas", "Felak", "Nas", "Kureyş"], "İhlas Suresi tevhidi anlatır."),
          S("'Muavvizeteyn' hangi iki sureye denir?", ["Felak ve Nas", "Fatiha ve İhlas", "Kureyş ve Fil", "Kevser ve Asr"], "Felak ve Nas sığınma sureleridir."),
          S("Kur'an'ın son suresi hangisidir?", ["Nas", "Felak", "İhlas", "Fatiha"], "Nas, mushafın son (114.) suresidir."),
          S("'Samed' kelimesinin anlamına en yakın olan hangisidir?", ["Her şeyin O'na muhtaç olduğu, O'nun hiçbir şeye muhtaç olmadığı", "Uyuyan", "Yorulan", "Doğan"], "Samed, her şeyin kendisine muhtaç olduğu demektir."),
          S("Felak Suresi kaç ayettir?", ["5", "4", "6", "7"], "Felak beş ayettir."),
          S("Nas Suresi'nde neyin kötülüğünden sığınılır?", ["Vesvese veren sinsi şeytanın", "Yağmurun", "Hayvanların", "Güneşin"], "Kalplere vesvese verenin kötülüğünden Allah'a sığınılır.")
        ] }
    ] }
  ]);

  /* ───────────── TEMEL DİNÎ BİLGİLER ───────────── */
  ekle("s_tdb", { ad: "Temel Dinî Bilgiler", ikon: "🕌", renk: "#0e7490" }, [
    { id: "ot_t1", ad: "Temizlik ve Namaz", konular: [
      { id: "ot_t1a", ad: "Abdest: Farzları ve Alınışı",
        ozet: ["Abdest: namaz gibi ibadetlerden önce belirli organları yıkama", "Farzları (Hanefi): yüzü yıkamak, kolları dirseklerle yıkamak, başın dörtte birini meshetmek, ayakları topuklarla yıkamak", "Sünnetleri: besmele, elleri yıkamak, ağza ve buruna su vermek, kulakları meshetmek…", "Abdesti bozan bazı durumlar: tuvalet ihtiyacı, uyumak, bayılmak", "Abdest beden temizliğiyle birlikte manevi hazırlıktır"],
        anlatim: [
          "Abdest, namaz kılmak, Kur'an'a dokunmak ve Kâbe'yi tavaf etmek gibi ibadetlerden önce yüz, kollar, baş ve ayaklar gibi organları belirli bir düzende yıkamak ve meshetmektir. Kur'an'da (Mâide 6) abdestin nasıl alınacağı anlatılır.",
          "Hanefi mezhebine göre abdestin dört farzı vardır: yüzü bir kez yıkamak, kolları dirseklerle birlikte yıkamak, başın dörtte birini ıslak elle meshetmek ve ayakları topuklarla birlikte yıkamak. Besmele çekmek, elleri bileklere kadar yıkamak, ağza ve buruna su vermek, kulakları ve enseyi meshetmek, organları üçer kez yıkamak abdestin sünnetlerindendir.",
          "Tuvalet ihtiyacını gidermek, vücuttan kan ya da irin çıkması, uyumak, bayılmak gibi durumlar abdesti bozar. Abdest hem bedeni temizler hem de kişiyi ibadete hazırlar; suyu israf etmeden, sırayla ve dikkatle almak gerekir."
        ],
        ornekler: [["Abdest alırken kollarını bileğe kadar yıkayan biri abdestini tamamlamış olur mu?", "Hayır. Kolları dirseklerle birlikte yıkamak farzdır; dirseklere kadar yıkanmazsa abdest tamam olmaz."]],
        hatalar: ["Başı meshetmeyi unutmak ya da tüm başı yıkamak gerektiğini sanmak: başın dörtte birini ıslak elle meshetmek farzdır.", "Suyu boşa akıtmak: Peygamberimiz abdestte bile israftan kaçınmayı öğütlemiştir."],
        videoAra: "abdest nasıl alınır farzları",
        sorular: [
          S("Aşağıdakilerden hangisi abdestin farzlarındandır?", ["Kolları dirseklerle yıkamak", "Ağza su vermek", "Kulakları meshetmek", "Besmele çekmek"], "Kolları dirseklerle yıkamak farzdır; diğerleri sünnettir."),
          S("Hanefi mezhebine göre abdestin kaç farzı vardır?", ["4", "6", "12", "2"], "Abdestin dört farzı vardır."),
          S("Başın ne kadarını meshetmek farzdır?", ["Dörtte birini", "Tamamını", "Yarısını", "Hiçbirini"], "Başın dörtte birini meshetmek farzdır."),
          S("Aşağıdakilerden hangisi abdesti bozar?", ["Uyumak", "Su içmek", "Kitap okumak", "Yürümek"], "Uyumak abdesti bozan durumlardandır."),
          S("Abdestin nasıl alınacağı Kur'an'da hangi surede anlatılır?", ["Mâide", "Fatiha", "İhlas", "Nas"], "Mâide Suresi 6. ayette anlatılır."),
          S("Aşağıdakilerden hangisi abdestin sünnetlerindendir?", ["Ağza ve buruna su vermek", "Yüzü yıkamak", "Ayakları yıkamak", "Başı meshetmek"], "Ağza ve buruna su vermek sünnettir.")
        ] },
      { id: "ot_t1b", ad: "Namaz: Farzları ve Vakitleri",
        ozet: ["Namaz günde beş vakit kılınır: sabah, öğle, ikindi, akşam, yatsı", "Namazın dışındaki farzlar (şartlar): hadesten ve necasetten temizlik, setr-i avret, kıbleye yönelmek, vakit, niyet", "İçindeki farzlar (rükünler): iftitah tekbiri, kıyam, kıraat, rükû, secde, son oturuş", "Toplam 12 farz vardır", "Cuma namazı ve bayram namazları da vardır"],
        anlatim: [
          "Namaz, belirli vakitlerde, belirli hareket ve okuyuşlarla Allah'a yapılan ibadettir. Ergenlik çağına gelen ve aklı başında her müslümana günde beş vakit namaz farzdır: sabah, öğle, ikindi, akşam ve yatsı. Peygamberimiz namazı 'dinin direği' olarak tanımlamıştır.",
          "Namaza başlamadan önce yerine getirilmesi gereken altı şart vardır: hadesten taharet (abdestli olmak), necasetten taharet (beden, elbise ve namaz yerinin temiz olması), setr-i avret (örtülmesi gereken yerleri örtmek), istikbal-i kıble (Kâbe'ye yönelmek), vakit ve niyet.",
          "Namazın içindeki altı farz (rükün) ise şunlardır: iftitah tekbiri ('Allahu ekber' diyerek başlamak), kıyam (ayakta durmak), kıraat (Kur'an'dan bir miktar okumak), rükû (eğilmek), secde (alnı ve burnu yere koymak) ve ka'de-i ahire (son oturuş). Şartlar ve rükünler birlikte namazın on iki farzını oluşturur."
        ],
        ornekler: [["Namaz vakti girmeden kılınan öğle namazı geçerli olur mu?", "Hayır. Vakit namazın şartlarındandır; vakit girmeden kılınan namaz o vaktin namazı yerine geçmez."]],
        hatalar: ["Şartlarla rükünleri karıştırmak: şartlar namazdan önce (abdest, kıble…), rükünler namazın içindedir (kıyam, rükû, secde…)."],
        videoAra: "namazın farzları şartları rükünleri",
        sorular: [
          S("Aşağıdakilerden hangisi namazın içindeki farzlardan (rükünlerden) biridir?", ["Rükû", "Niyet", "Kıbleye yönelmek", "Abdest almak"], "Rükû namazın içindeki farzlardandır."),
          S("Namazın toplam kaç farzı vardır?", ["12", "4", "6", "5"], "Altı şart ve altı rükün olmak üzere on iki farz vardır."),
          S("Kâbe'ye yönelmeye ne ad verilir?", ["İstikbal-i kıble", "Setr-i avret", "Kıraat", "Kıyam"], "Kıbleye yönelmek istikbal-i kıbledir."),
          S("Namazda ayakta durmaya ne denir?", ["Kıyam", "Rükû", "Ka'de", "Secde"], "Ayakta durmak kıyamdır."),
          S("Aşağıdakilerden hangisi beş vakit namazdan biri DEĞİLDİR?", ["Kuşluk", "İkindi", "Akşam", "Yatsı"], "Beş vakit: sabah, öğle, ikindi, akşam, yatsı."),
          S("Namaza 'Allahu ekber' diyerek başlamaya ne denir?", ["İftitah tekbiri", "Kıraat", "Selam", "Tesbih"], "Namaza giriş tekbiri iftitah tekbiridir.")
        ] }
    ] },
    { id: "ot_t2", ad: "Oruç, Zekât ve Güzel Ahlak", konular: [
      { id: "ot_t2a", ad: "Oruç ve Zekât",
        ozet: ["Oruç: imsaktan iftara kadar yeme, içme ve orucu bozan davranışlardan uzak durmak", "Ramazan orucu farzdır; hasta ve yolcu daha sonra kaza edebilir", "Zekât: nisap miktarı mala sahip olanın malının kırkta birini (%2,5) vermesi", "Zekât yoksullara, borçlulara, yolda kalanlara verilir", "Fitre (fıtır sadakası) Ramazan bayramından önce verilir"],
        anlatim: [
          "Oruç, tan yerinin ağarmasından (imsak) güneşin batışına (iftar) kadar yemekten, içmekten ve orucu bozan davranışlardan Allah rızası için uzak durmaktır. Ramazan ayında oruç tutmak, sağlıklı ve ergenlik çağına girmiş her müslümana farzdır. Hasta, yolcu ve hamile gibi durumdakiler orucu sonra kaza edebilir.",
          "Oruç sabrı, iradeyi ve şükrü güçlendirir; açlığı yaşayan kişi yoksulların hâlini daha iyi anlar. Sahur, iftar, teravih ve mukabele Ramazan'ın güzel gelenekleridir. Ramazan bayramından önce durumu iyi olanlar fitre (fıtır sadakası) verir.",
          "Zekât, temel ihtiyaçlarından ve borcundan fazla olarak nisap miktarı (yaklaşık 80 gram altın değerinde) mala bir yıl boyunca sahip olan müslümanın, malının kırkta birini (%2,5) ihtiyaç sahiplerine vermesidir. Zekât, Kur'an'da sayılan yoksullar, düşkünler, borçlular ve yolda kalmışlar gibi gruplara verilir; toplumda yardımlaşmayı ve adaleti güçlendirir."
        ],
        ornekler: [["Zekât vermesi gereken birinin 40.000 TL zekâta tabi malı varsa ne kadar zekât verir?", "Kırkta biri verilir: 40.000 ÷ 40 = 1.000 TL."]],
        hatalar: ["Zekâtı herkese farz sanmak: yalnızca nisap miktarı mala bir yıl sahip olanlara farzdır.", "Fitre ile zekâtı aynı şey sanmak: fitre Ramazan bayramından önce verilen ayrı bir sadakadır."],
        videoAra: "oruç ve zekât din kültürü konu anlatımı",
        sorular: [
          S("Zekât olarak malın ne kadarı verilir?", ["Kırkta biri", "Onda biri", "Yarısı", "Beşte biri"], "Zekât malın kırkta biri, yani %2,5'tir."),
          S("Orucun başladığı vakte ne denir?", ["İmsak", "İftar", "Teravih", "İkindi"], "Oruç imsakla başlar, iftarla biter."),
          S("Ramazan bayramından önce verilen sadakaya ne denir?", ["Fitre", "Kurban", "Zekât", "Öşür"], "Fıtır sadakasına fitre denir."),
          S("Hastalık nedeniyle Ramazan'da oruç tutamayan kişi ne yapar?", ["İyileşince kaza eder", "Hiç tutmaz", "Bayramda tutar", "Sadece sahura kalkar"], "Hasta ve yolcu orucunu sonra kaza edebilir."),
          S("Zekâtın topluma en önemli katkısı hangisidir?", ["Yardımlaşmayı ve adaleti güçlendirmesi", "Herkesin zengin olması", "Alışverişi durdurması", "Vergileri kaldırması"], "Zekât, yardımlaşma ve paylaşmayı güçlendirir."),
          S("Zekâtı kimler vermekle yükümlüdür?", ["Nisap miktarı mala bir yıl sahip olan müslümanlar", "Bütün çocuklar", "Yalnızca yoksullar", "Yalnızca yolcular"], "Nisap miktarı mala sahip olan zengin müslümanlar zekât verir.")
        ] },
      { id: "ot_t2b", ad: "Güzel Ahlak: Doğruluk, Emanet, Sabır",
        ozet: ["Doğruluk (sıdk): sözde ve davranışta dürüst olmak", "Emanete riayet: bırakılan eşyayı, sırrı ve görevi korumak", "Sabır: zorluklar karşısında dayanmak, aceleci olmamak", "Peygamberimiz 'el-Emin' (güvenilir) olarak tanınırdı", "Güzel ahlak imanın meyvesidir"],
        anlatim: [
          "İslam'da ibadetlerin amacı insanın ahlakını güzelleştirmektir. Peygamberimiz 'Ben güzel ahlakı tamamlamak için gönderildim' buyurmuştur. Doğruluk, sözü ve davranışı gerçeğe uygun olmak demektir; yalan söylemek, sözünde durmamak ve kandırmak doğrulukla bağdaşmaz.",
          "Emanet; bir kişiye korunması için bırakılan eşya, söylenen sır ya da üstlenilen görevdir. Ödünç alınan bir kitabı zamanında ve sağlam geri vermek, arkadaşın sırrını saklamak, okul görevini özenle yapmak emanete bağlılıktır. Peygamberimiz gençliğinden beri emanete bağlılığıyla 'el-Emin' olarak anılmıştır.",
          "Sabır, zorluklar ve sıkıntılar karşısında dayanmak, öfkeyi kontrol etmek ve sonuç için acele etmeden çalışmaktır. Sınava hazırlanırken her gün düzenli çalışmak, haksızlığa uğradığında öfkeyle değil sağduyuyla davranmak sabrın örnekleridir. Kur'an'da 'Allah sabredenlerle beraberdir' buyrulur."
        ],
        sorular: [
          S("Ödünç alınan bir kitabı zamanında ve sağlam geri vermek hangi değere örnektir?", ["Emanete riayet", "İsraf", "Kibir", "Cimrilik"], "Bırakılan eşyayı korumak emanete bağlılıktır."),
          S("Peygamberimizin gençliğinde aldığı 'el-Emin' lakabı ne anlama gelir?", ["Güvenilir", "Cesur", "Zengin", "Bilgin"], "El-Emin güvenilir demektir."),
          S("'Allah sabredenlerle beraberdir' ayeti hangi değeri öğütler?", ["Sabır", "Cömertlik", "Temizlik", "Çalışkanlık"], "Ayet sabrı övmektedir."),
          S("Aşağıdakilerden hangisi doğruluğa aykırıdır?", ["Verdiği sözü tutmamak", "Hatasını kabul etmek", "Gerçeği söylemek", "Sınavda kendi bilgisini kullanmak"], "Sözünde durmamak doğrulukla bağdaşmaz."),
          S("Arkadaşının sana söylediği sırrı saklaman hangi davranıştır?", ["Emanete bağlılık", "Gıybet", "Kıskançlık", "Dedikodu"], "Sır da bir emanettir.")
        ] }
    ] }
  ]);

  /* ───────────── MASAL VE DESTANLARIMIZ ───────────── */
  ekle("s_masal", { ad: "Masal ve Destanlarımız", ikon: "🐉", renk: "#7c2d12" }, [
    { id: "om_m1", ad: "Türk Destan ve Halk Kahramanları", konular: [
      { id: "om_m1a", ad: "Dede Korkut Hikâyeleri",
        ozet: ["Oğuz Türklerinin destansı hikâyeleridir", "Bir giriş ve 12 hikâyeden oluşur (Dresden nüshası)", "Dede Korkut: bilge ozan; hikâyeleri o anlatır ve sonunda dua eder", "Kahramanlar: Deli Dumrul, Basat, Bamsı Beyrek, Kan Turalı…", "Cesaret, misafirperverlik, aileye ve büyüklere saygı gibi değerler işlenir"],
        anlatim: [
          "Dede Korkut Kitabı, Oğuz Türklerinin hayatını, inançlarını ve kahramanlıklarını anlatan hikâyelerden oluşur. Hikâyeler yüzyıllar boyunca ozanlar tarafından kopuzla anlatılmış, sonra yazıya geçirilmiştir. En bilinen Dresden nüshasında bir giriş (mukaddime) ve on iki hikâye vardır.",
          "Hikâyelerde Oğuz bilgesi Dede Korkut görünür; kahramanlara ad verir, sorunlara akıl verir ve her hikâyenin sonunda dua ederek anlatıyı bağlar. 'Basat'ın Tepegöz'ü Öldürmesi'nde Basat halkı yiyen devi zekâsıyla yener; 'Deli Dumrul'da gururlu Dumrul Azrail'le karşılaşınca hayatın değerini anlar; 'Bamsı Beyrek'te sadakat ve dostluk anlatılır.",
          "Dede Korkut hikâyeleri hem destan hem de halk hikâyesi özelliği taşır: olağanüstü olaylar vardır ama günlük hayat, aile ilişkileri, misafirperverlik ve yiğitlik de gerçekçi biçimde anlatılır. Bugün bile 'adını Dede Korkut koymuş' gibi deyimlerle kültürümüzde yaşamaktadır."
        ],
        sorular: [
          S("Dede Korkut hikâyeleri hangi Türk boyunun hayatını anlatır?", ["Oğuzlar", "Kırgızlar", "Uygurlar", "Hunlar"], "Hikâyeler Oğuz Türklerine aittir."),
          S("Dresden nüshasında kaç hikâye vardır?", ["12", "7", "3", "40"], "Bir giriş ve on iki hikâye vardır."),
          S("Tepegöz'ü yenen kahraman kimdir?", ["Basat", "Deli Dumrul", "Keloğlan", "Köroğlu"], "Basat, Tepegöz'ü zekâsıyla yener."),
          S("Hikâyelerin sonunda dua eden bilge kimdir?", ["Dede Korkut", "Nasreddin Hoca", "Oğuz Kağan", "Battal Gazi"], "Dede Korkut her hikâyeyi duayla bağlar."),
          S("Deli Dumrul hikâyesinde Dumrul neyin değerini anlar?", ["Hayatın ve sevginin", "Altının", "Atının", "Kılıcının"], "Azrail'le karşılaşan Dumrul hayatın değerini anlar."),
          S("Ozanların hikâye anlatırken çaldığı çalgı hangisidir?", ["Kopuz", "Piyano", "Keman", "Gitar"], "Oğuz ozanları kopuz çalardı.")
        ] },
      { id: "om_m1b", ad: "Manas Destanı ve Köroğlu",
        ozet: ["Manas: Kırgız Türklerinin destanı; dünyanın en uzun destanlarından", "Kahramanı Manas, dağınık Kırgız boylarını birleştirir", "Manasçı: destanı ezberden anlatan sanatçı", "Köroğlu: haksızlığa karşı çıkan halk kahramanı", "Köroğlu'nun atı Kırat, yeri Çamlıbel'dir"],
        anlatim: [
          "Manas Destanı, Kırgız Türklerinin millî destanıdır ve yüz binlerce dizeye ulaşan uzunluğuyla dünyanın en uzun destanları arasında sayılır. Destan, Manas'ın doğumundan başlayarak dağınık Kırgız boylarını birleştirmesini, düşmanlarla mücadelesini, oğlu Semetey ve torunu Seytek'in maceralarını anlatır.",
          "Manas Destanı kuşaktan kuşağa 'manasçı' denilen anlatıcılar tarafından ezberden ve ezgiyle anlatılmıştır. Destan; birlik olmanın, vatan sevgisinin, cesaretin ve adaletin önemini öğretir. Kırgızlar için kimliklerinin temel taşlarından biridir.",
          "Köroğlu ise Anadolu'dan Orta Asya'ya kadar geniş bir alanda anlatılan bir halk kahramanıdır. Babasının gözlerine mil çektiren haksız beye karşı ayaklanır, Çamlıbel'e yerleşir ve güçlülerin zulmüne karşı yoksulları korur. Atı Kırat, cesaretiyle ünlüdür. Köroğlu hikâyelerinde şiirler (koçaklamalar) ve türküler de yer alır."
        ],
        sorular: [
          S("Manas Destanı hangi Türk topluluğuna aittir?", ["Kırgızlar", "Oğuzlar", "Göktürkler", "Uygurlar"], "Manas, Kırgızların millî destanıdır."),
          S("Manas Destanı'nı ezberden anlatan sanatçılara ne denir?", ["Manasçı", "Âşık", "Meddah", "Hafız"], "Bu anlatıcılara manasçı denir."),
          S("Köroğlu'nun atının adı nedir?", ["Kırat", "Boz At", "Tulpar", "Akkuş"], "Köroğlu'nun ünlü atı Kırat'tır."),
          S("Köroğlu'nun yerleştiği yer neresidir?", ["Çamlıbel", "Ergenekon", "Ötüken", "Kaf Dağı"], "Köroğlu Çamlıbel'e yerleşir."),
          S("Manas Destanı'nın en çok vurguladığı değer hangisidir?", ["Birlik olmak", "Tembellik", "Bencillik", "Korku"], "Manas dağınık boyları birleştirir; birlik ana temadır."),
          S("Köroğlu neye karşı mücadele eder?", ["Haksızlık ve zulme", "Doğaya", "Hayvanlara", "Bilime"], "Köroğlu haksız beylere karşı yoksulları korur.")
        ] }
    ] },
    { id: "om_m2", ad: "Dünya Masal ve Destanları", konular: [
      { id: "om_m2a", ad: "Dünyadan Masallar ve Fabllar",
        ozet: ["Grimm Kardeşler: Alman halk masallarını derledi (Pamuk Prenses, Kırmızı Başlıklı Kız)", "Andersen: Danimarkalı yazar; masallarını kendisi yazdı (Çirkin Ördek Yavrusu)", "Fabl: hayvanların konuşturulduğu, öğüt veren kısa hikâye", "La Fontaine ve Ezop fablın ustalarıdır", "Masallar farklı ülkelerde benzer konular taşır"],
        anlatim: [
          "Dünyanın her yerinde masallar anlatılır ve birçoğu birbirine benzer: iyilik kazanır, kötülük cezalandırılır, zeki ve dürüst olan engelleri aşar. Alman Grimm Kardeşler, halkın anlattığı masalları dinleyip yazıya geçirmiştir; Pamuk Prenses, Kırmızı Başlıklı Kız ve Hansel ile Gretel bunlardandır.",
          "Danimarkalı Hans Christian Andersen ise masallarını kendisi yazmıştır; bu yüzden onun masalları 'yazılı masal' sayılır. Çirkin Ördek Yavrusu, Kibritçi Kız ve Küçük Deniz Kızı onun eserleridir. Bu masallarda kendini kabul etme, merhamet ve umut gibi duygular işlenir.",
          "Fabl, hayvanların insan gibi konuşturulduğu, sonunda açık bir ders (kıssadan hisse) veren kısa hikâyelerdir. Eski Yunan'da Ezop, Fransa'da La Fontaine fablın en ünlü yazarlarıdır. 'Ağustos Böceği ile Karınca' çalışkanlığı, 'Tilki ile Kuzgun' dalkavukluğa kanmamayı öğretir. Türk edebiyatında Mevlana'nın Mesnevi'sinde ve Kelile ve Dimne'de de fabl örnekleri vardır."
        ],
        ornekler: [["'Ağustos Böceği ile Karınca' masal mı fabl mı? Neden?", "Fabldır: hayvanlar konuşturulur ve sonunda açık bir ders verilir (yaz boyunca çalışan karınca kışın aç kalmaz)."]],
        hatalar: ["Her hayvan hikâyesini fabl sanmak: fablda hayvanlar insan gibi düşünür, konuşur ve sonunda bir öğüt verilir."],
        sorular: [
          S("Hayvanların konuşturulduğu ve öğüt veren kısa hikâyelere ne denir?", ["Fabl", "Destan", "Roman", "Anı"], "Bu tür hikâyeler fabldır."),
          S("Çirkin Ördek Yavrusu masalının yazarı kimdir?", ["Andersen", "Grimm Kardeşler", "La Fontaine", "Ezop"], "Andersen'in yazılı masalıdır."),
          S("Grimm Kardeşler ne yapmıştır?", ["Halk masallarını derleyip yazıya geçirmiştir", "Destan yazmıştır", "Roman yazmıştır", "Şiir kitabı çıkarmıştır"], "Alman halk masallarını derlemişlerdir."),
          S("'Tilki ile Kuzgun' fablı hangi dersi verir?", ["Dalkavukluğa kanmamak", "Erken kalkmak", "Spor yapmak", "Para biriktirmek"], "Kuzgun övgüye kanıp peynirini kaptırır."),
          S("Aşağıdakilerden hangisi fabl yazarıdır?", ["La Fontaine", "Homeros", "Andersen", "Ömer Seyfettin"], "La Fontaine ünlü fabl yazarıdır.")
        ] },
      { id: "om_m2b", ad: "Gılgamış ve İlyada",
        ozet: ["Gılgamış: Mezopotamya'dan, bilinen en eski destanlardan; kil tabletlere yazılmıştır", "Konusu: Uruk kralı Gılgamış'ın dostluk ve ölümsüzlük arayışı", "İlyada: Homeros'a ait; Truva (Troya) Savaşı'nı anlatır", "Truva Atı hikâyesi Truva Savaşı anlatılarındandır", "Truva antik kenti Çanakkale'dedir"],
        anlatim: [
          "Gılgamış Destanı, Mezopotamya'da yaşamış Sümer ve Babil uygarlıklarından kalmıştır ve kil tabletlere çivi yazısıyla yazılmıştır; bilinen en eski destanlardan biridir. Uruk kralı Gılgamış, dostu Enkidu ile maceralara atılır; Enkidu ölünce ölümsüzlüğün sırrını aramaya çıkar ve sonunda insanın kalıcı olanı iyi işlerle bırakabileceğini anlar.",
          "İlyada, Eski Yunan ozanı Homeros'a ait olduğu kabul edilen büyük bir destandır. Akhalar ile Truvalılar arasındaki Truva (Troya) Savaşı'nın son dönemini, özellikle kahraman Akhilleus'un öfkesini anlatır. Homeros'un diğer destanı Odysseia ise savaştan sonra Odysseus'un yurduna dönüş yolculuğunu anlatır.",
          "Truva antik kenti bugün Çanakkale sınırları içindedir ve UNESCO Dünya Mirası Listesi'ndedir. Ünlü 'Truva Atı' hikâyesi de bu savaşla ilgili anlatılardandır. Bu destanlar, farklı uygarlıkların da kahramanlık, dostluk, ölüm ve vatan gibi ortak konuları işlediğini gösterir."
        ],
        sorular: [
          S("Gılgamış Destanı hangi bölgeden kalmıştır?", ["Mezopotamya", "İskandinavya", "Amerika", "Japonya"], "Gılgamış Sümer ve Babil uygarlıklarına aittir."),
          S("Gılgamış Destanı neye yazılmıştır?", ["Kil tabletlere", "Kâğıda", "İpek kumaşa", "Taş duvarlara boya ile"], "Çivi yazısıyla kil tabletlere yazılmıştır."),
          S("İlyada destanının ozanı kimdir?", ["Homeros", "Ezop", "Andersen", "Firdevsi"], "İlyada Homeros'a aittir."),
          S("İlyada hangi savaşı anlatır?", ["Truva Savaşı", "Malazgirt Savaşı", "Çanakkale Savaşı", "Talas Savaşı"], "İlyada Truva Savaşı'nı anlatır."),
          S("Truva antik kenti bugün hangi ilimizdedir?", ["Çanakkale", "İzmir", "Antalya", "Trabzon"], "Truva Çanakkale'dedir."),
          S("Gılgamış'ın ölümsüzlüğü aramaya çıkmasının sebebi nedir?", ["Dostu Enkidu'nun ölmesi", "Altın bulmak istemesi", "Tahtını kaybetmesi", "Bir yarışmayı kazanmak"], "Dostunun ölümü onu ölümsüzlüğü aramaya yöneltir.")
        ] }
    ] }
  ]);

  /* ───────────── OKUMA BECERİLERİ ───────────── */
  ekle("s_okuma", { ad: "Okuma Becerileri", ikon: "📚", renk: "#b45309" }, [
    { id: "oo_o1", ad: "Metni Anlama", konular: [
      { id: "oo_o1a", ad: "Konu, Ana Fikir ve Yardımcı Fikir",
        ozet: ["Konu: metnin neyi anlattığı (bir kelime ya da kelime grubu)", "Ana fikir: yazarın vermek istediği temel mesaj (bir cümle)", "Yardımcı fikirler: ana fikri destekleyen düşünceler", "Ana fikir çoğu zaman giriş ya da sonuç cümlesindedir", "Başlık çoğu zaman konuyu ya da ana fikri yansıtır"],
        anlatim: [
          "Bir metni anlamanın ilk adımı konusunu bulmaktır. Konu 'Bu metin neyi anlatıyor?' sorusunun cevabıdır ve genellikle bir kelime ya da kelime grubuyla söylenir: 'kitap okumanın faydaları', 'su tasarrufu' gibi.",
          "Ana fikir ise 'Yazar bu metinle bize ne söylemek istiyor?' sorusunun cevabıdır ve bir cümleyle ifade edilir: 'Kitap okumak insanın hayal gücünü ve söz varlığını geliştirir.' Ana fikir çoğu zaman paragrafın giriş ya da sonuç cümlesinde yer alır; 'kısacası, sonuç olarak, demek ki' gibi ifadelerden sonra sıkça görülür.",
          "Yardımcı fikirler, ana fikri açıklayan, örnekleyen ve destekleyen düşüncelerdir. Bir metinde tek ana fikir ama birden çok yardımcı fikir olabilir. Soruda 'değinilmemiştir' denilen yerde, metinde hiç geçmeyen düşünceyi bulmak gerekir; bunun için her seçeneği metinle tek tek karşılaştırmak en güvenli yoldur."
        ],
        ornekler: [["'Sabah kahvaltısı günün en önemli öğünüdür. Kahvaltı yapan öğrenciler derslere daha kolay odaklanır, öğlene kadar enerjileri düşmez. Kısacası güne kahvaltıyla başlamak başarıyı artırır.' Bu paragrafın konusu ve ana fikri nedir?", "Konu: kahvaltının önemi. Ana fikir: Güne kahvaltıyla başlamak başarıyı artırır (sonuç cümlesi, 'kısacası'dan sonra)."]],
        hatalar: ["Konu ile ana fikri karıştırmak: konu bir kavramdır, ana fikir bir yargı (cümle) bildirir.", "Kendi düşüncesini metne eklemek: cevap metinde söylenenlere dayanmalıdır."],
        sorular: [
          S("Yazarın metinde okura vermek istediği temel mesaja ne denir?", ["Ana fikir", "Konu", "Başlık", "Olay"], "Temel mesaj ana fikirdir."),
          S("'Bu metin neyi anlatıyor?' sorusunun cevabı hangisidir?", ["Konu", "Ana fikir", "Yardımcı fikir", "Sonuç"], "Metnin anlattığı şey konudur."),
          S("Ana fikri destekleyen düşüncelere ne denir?", ["Yardımcı fikir", "Başlık", "Giriş", "Özet"], "Destekleyici düşünceler yardımcı fikirdir."),
          S("Ana fikir paragrafta çoğunlukla nerede bulunur?", ["Giriş ya da sonuç cümlesinde", "Her zaman ortada", "Başlıkta", "Hiçbir yerde"], "Ana fikir sıkça giriş ya da sonuç cümlesindedir."),
          S("'Kısacası, sonuç olarak' gibi ifadelerden sonra genellikle ne gelir?", ["Ana fikir", "Bir örnek", "Bir soru", "Bir tanım"], "Bu ifadeler sonucu, yani çoğu zaman ana fikri bildirir.")
        ] },
      { id: "oo_o1b", ad: "Grafik, Tablo ve Görsel Okuma",
        ozet: ["Önce başlığı, eksenleri ve birimleri oku", "Sütun grafiği karşılaştırma, çizgi grafiği değişim gösterir", "Daire grafiği bütünün parçalarını (yüzde) gösterir", "Soruda istenen bilgiyi grafikte bul; tahminle değil veriyle cevapla", "'Kesinlikle' ve 'ulaşılamaz' ifadelerine dikkat"],
        anlatim: [
          "Yeni nesil sorularda bilgi çoğu zaman bir tablo, grafik ya da görselle verilir. Grafiği okurken önce başlığına, sonra yatay ve dikey eksenlerin neyi gösterdiğine ve birimlerine (kişi, kg, %, yıl) bakılır. Ardından en büyük, en küçük ve dikkat çeken değerler belirlenir.",
          "Sütun grafiği farklı şeyleri karşılaştırmak için, çizgi grafiği bir şeyin zamanla nasıl değiştiğini göstermek için, daire grafiği ise bir bütünün parçalarını göstermek için kullanılır. Tablolarda satır ve sütun başlıkları okunarak aranan hücre bulunur.",
          "Sorularda sıkça 'Grafiğe göre aşağıdakilerden hangisine ulaşılamaz?' diye sorulur. Bu durumda her seçenek grafikle karşılaştırılır: grafikte olmayan bir bilgi (örneğin nedeni ya da gelecekteki durum) söyleniyorsa o seçeneğe ulaşılamaz. Cevaplar kişisel tahminle değil, verilen veriye dayanarak verilmelidir."
        ],
        ornekler: [["Bir sütun grafiğinde 5-A sınıfı 30, 5-B sınıfı 24 kitap okumuştur. 'Grafiğe göre 5-A sınıfı kitap okumayı daha çok sever.' yargısına ulaşılabilir mi?", "Hayır. Grafik yalnızca okunan kitap sayısını gösterir; 'sevme' ile ilgili bir veri yoktur. Ulaşılabilecek yargı: 5-A, 5-B'den 6 kitap fazla okumuştur."]],
        hatalar: ["Eksen birimini okumamak (ör. 'bin kişi' yerine 'kişi' sanmak).", "Grafikte olmayan nedenleri ya da gelecek tahminlerini veriymiş gibi kabul etmek."],
        sorular: [
          S("Bir şeyin zaman içindeki değişimini göstermek için en uygun grafik hangisidir?", ["Çizgi grafiği", "Daire grafiği", "Resim grafiği", "Hiçbiri"], "Zamanla değişim çizgi grafiğiyle gösterilir."),
          S("Bir bütünün parçalarını yüzde olarak göstermek için hangi grafik kullanılır?", ["Daire grafiği", "Çizgi grafiği", "Sütun grafiği", "Serpme grafiği"], "Daire grafiği bütünün parçalarını gösterir."),
          S("Grafik okurken ilk yapılması gereken hangisidir?", ["Başlığı, eksenleri ve birimleri okumak", "Cevabı tahmin etmek", "Renklere bakmak", "En sondaki sayıyı almak"], "Önce başlık, eksen ve birimler okunur."),
          S("'Grafiğe göre hangisine ulaşılamaz?' sorusunda hangi seçenek doğru cevap olur?", ["Grafikte verisi olmayan bir bilgi", "Grafikte en büyük değer", "Grafikteki iki değerin farkı", "Grafiğin başlığı"], "Verisi olmayan yargıya ulaşılamaz."),
          S("Farklı sınıfların kitap sayısını karşılaştırmak için en uygun grafik hangisidir?", ["Sütun grafiği", "Çizgi grafiği", "Harita", "Zaman çizelgesi"], "Karşılaştırma için sütun grafiği kullanılır.")
        ] }
    ] },
    { id: "oo_o2", ad: "Etkili Okuma Alışkanlıkları", konular: [
      { id: "oo_o2a", ad: "Not Alma, Özetleme ve Kitap Seçme",
        ozet: ["Okumadan önce: başlık ve görsellerden tahmin yürüt", "Okurken: önemli yerlerin altını çiz, kenara kısa not al", "Özet: metnin ana fikrini ve önemli olaylarını kendi cümlelerinle kısaca anlatmak", "5N1K: Ne, nerede, ne zaman, nasıl, neden, kim", "Kitap seçerken yaşına, ilgine ve güvenilir yayına dikkat et"],
        anlatim: [
          "İyi okurlar okumadan önce, okurken ve okuduktan sonra farklı stratejiler kullanır. Okumadan önce başlığa, kapağa ve görsellere bakıp metnin ne anlatacağını tahmin etmek dikkati toplar. Okurken önemli yerlerin altını çizmek, anlamını bilmediği kelimeleri işaretlemek ve kenara kısa notlar almak anlamayı kolaylaştırır.",
          "Özetleme, metnin ana fikrini ve önemli olaylarını gereksiz ayrıntılara girmeden, kendi cümleleriyle kısaca anlatmaktır. Hikâye edici metinleri özetlerken 5N1K sorularından (ne, nerede, ne zaman, nasıl, neden, kim) yararlanılabilir. İyi bir özet, metni hiç okumamış birine metnin özünü anlatabilmelidir.",
          "Okuma alışkanlığı kazanmak için her gün belli bir saatte, örneğin yatmadan önce 20 dakika okumak etkilidir. Kitap seçerken yaşa uygunluğa, ilgi alanına ve güvenilir yayınevlerine dikkat edilir; okunan kitaplar bir okuma günlüğüne yazılabilir. Bu uygulamadaki Okuma Atölyesi ve Hikâye Kitaplığı da okuma hızını ve anlamayı geliştirmek için kullanılabilir."
        ],
        sorular: [
          S("Metnin ana fikrini ve önemli olaylarını kendi cümlelerimizle kısaca anlatmaya ne denir?", ["Özetleme", "Ezberleme", "Kopyalama", "Tahmin"], "Bu işleme özetleme denir."),
          S("5N1K'daki 'K' hangi soruyu temsil eder?", ["Kim", "Ne zaman", "Nasıl", "Nerede"], "5N1K: ne, nerede, ne zaman, nasıl, neden ve kim."),
          S("Okumadan önce yapılacak etkili bir strateji hangisidir?", ["Başlık ve görsellerden tahmin yürütmek", "Son sayfayı okumak", "Kitabı hızlıca karıştırıp bırakmak", "Hiçbir şey yapmamak"], "Okuma öncesi tahmin dikkati toplar."),
          S("Okuma alışkanlığı kazanmak için hangisi en etkilidir?", ["Her gün düzenli olarak belli bir süre okumak", "Ayda bir gün çok okumak", "Sadece tatilde okumak", "Yalnız ödev için okumak"], "Düzenli ve günlük okuma alışkanlık kazandırır."),
          S("Okurken anlamını bilmediğimiz bir kelimeyle karşılaşınca ne yapmalıyız?", ["İşaretleyip cümleden tahmin etmeli, sonra sözlükten bakmalıyız", "Sayfayı atlamalıyız", "Kitabı bırakmalıyız", "Görmezden gelmeliyiz"], "Bağlamdan tahmin edip sözlükten doğrulamak en iyi yoldur.")
        ] }
    ] }
  ]);

  /* ───────────── YAZARLIK VE YAZMA BECERİLERİ ───────────── */
  ekle("s_yazarlik", { ad: "Yazarlık ve Yazma Becerileri", ikon: "✍️", renk: "#be185d" }, [
    { id: "oy_y1", ad: "Paragraf ve Hikâye Yazma", konular: [
      { id: "oy_y1a", ad: "Paragraf Yazma: Giriş, Gelişme, Sonuç",
        ozet: ["Paragraf tek bir düşünceyi anlatan cümleler topluluğudur", "Giriş cümlesi konuyu tanıtır", "Gelişme cümleleri açıklar, örnekler, destekler", "Sonuç cümlesi düşünceyi bağlar", "Geçiş ifadeleri: ilk olarak, ayrıca, örneğin, bu nedenle, sonuç olarak"],
        anlatim: [
          "Paragraf, tek bir ana düşünceyi anlatan ve birbiriyle bağlantılı cümlelerden oluşan yazı birimidir. İyi bir paragrafın üç bölümü vardır: giriş, gelişme ve sonuç. Giriş cümlesi konuyu tanıtır ve okurun ilgisini çeker.",
          "Gelişme bölümünde ana düşünce açıklanır; örnek verme, karşılaştırma, tanımlama, tanık gösterme ve sayısal verilerden yararlanma gibi düşünceyi geliştirme yolları kullanılır. Cümleler arasında 'ilk olarak, ayrıca, örneğin, bunun yanında, bu nedenle' gibi geçiş ifadeleri kullanmak metni akıcı yapar.",
          "Sonuç cümlesi düşünceyi özetler ya da bir yargıyla bağlar: 'Bu nedenle her gün en az yarım saat kitap okumalıyız.' Paragraf yazarken konu dışına çıkmamak, aynı kelimeyi sık tekrar etmemek ve yazım-noktalama kurallarına uymak gerekir. Yazıyı bitirdikten sonra yüksek sesle okuyup gözden geçirmek hataları bulmanın en kolay yoludur."
        ],
        ornekler: [["'Spor yapmak' konusunda üç cümlelik bir paragraf iskeleti kurun.", "Giriş: Spor, sağlıklı bir hayatın temel taşlarındandır. Gelişme: Düzenli spor kalbi güçlendirir, uykuyu düzenler ve stresi azaltır; örneğin her gün yarım saat yürümek bile fark yaratır. Sonuç: Bu yüzden spor yapmayı bir alışkanlık hâline getirmeliyiz."]],
        hatalar: ["Bir paragrafa birden çok ana düşünce sıkıştırmak.", "Geçiş ifadesi kullanmadan cümleleri art arda dizmek; metin kopuk görünür."],
        sorular: [
          S("Paragrafta konuyu tanıtan bölüm hangisidir?", ["Giriş", "Gelişme", "Sonuç", "Başlık"], "Konu giriş cümlesinde tanıtılır."),
          S("Düşünceyi açıklayan, örnekleyen bölüm hangisidir?", ["Gelişme", "Giriş", "Sonuç", "İmza"], "Açıklama ve örnekler gelişme bölümündedir."),
          S("Aşağıdakilerden hangisi bir geçiş ifadesidir?", ["Bu nedenle", "Masa", "Koşmak", "Mavi"], "'Bu nedenle' cümleleri birbirine bağlar."),
          S("Bir paragrafta kaç ana düşünce bulunmalıdır?", ["Bir", "Üç", "Beş", "Sınırsız"], "Paragraf tek bir ana düşünceyi anlatır."),
          S("Yazdıktan sonra hataları bulmanın kolay yolu hangisidir?", ["Yüksek sesle okuyup gözden geçirmek", "Hemen teslim etmek", "Yazıyı silmek", "Başlığı değiştirmek"], "Sesli okuma hataları fark ettirir.")
        ] },
      { id: "oy_y1b", ad: "Hikâye Yazma: Olay, Kişi, Yer, Zaman",
        ozet: ["Hikâyenin dört öğesi: olay, kişiler, yer (mekân), zaman", "Olay örgüsü: serim (giriş), düğüm (gelişme/sorun), çözüm (sonuç)", "Anlatıcı: 1. kişi (ben) ya da 3. kişi (o)", "Betimleme okurun gözünde canlandırır; diyalog kişileri konuşturur", "İyi bir başlık merak uyandırır"],
        anlatim: [
          "Hikâye, gerçek ya da gerçeğe yakın olayların kişi, yer ve zaman öğeleriyle anlatıldığı kısa yazılardır. Yazmaya başlamadan önce bu dört öğeyi planlamak işi kolaylaştırır: Kim? (kahraman), Ne oldu? (olay), Nerede? (mekân), Ne zaman? (zaman).",
          "Olay örgüsü üç bölümden oluşur. Serimde kişiler ve ortam tanıtılır. Düğümde kahramanın karşılaştığı sorun ortaya çıkar ve merak artar. Çözümde sorun çözülür ve hikâye sona erer. Merak uyandıran bir düğüm hikâyeyi ilgi çekici yapar.",
          "Hikâye birinci kişili ('ben' diye anlatan kahraman) ya da üçüncü kişili ('o' diye anlatan gözlemci) anlatıcıyla yazılabilir; ama baştan sona aynı anlatıcı kullanılmalıdır. Betimlemeler (renk, ses, koku) okurun gözünde canlandırır; diyaloglar ise kişileri canlı kılar ve tırnak ya da konuşma çizgisiyle yazılır."
        ],
        ornekler: [["'Kaybolan anahtar' konulu bir hikâyenin serim-düğüm-çözümünü kurun.", "Serim: Ece okuldan döner, kapının önünde çantasını karıştırır. Düğüm: Anahtar yoktur, hava kararmaktadır. Çözüm: Yolu geri yürür, anahtarı parktaki bankın altında bulur ve bir daha anahtarını bir kordona takar."]],
        hatalar: ["Anlatıcıyı yarıda değiştirmek ('ben' ile başlayıp 'o' ile sürdürmek).", "Düğümü olmayan hikâye yazmak; sorun yoksa merak da oluşmaz."],
        sorular: [
          S("Hikâyede sorunun ortaya çıktığı bölüm hangisidir?", ["Düğüm", "Serim", "Çözüm", "Başlık"], "Sorun düğümde ortaya çıkar."),
          S("Aşağıdakilerden hangisi hikâyenin temel öğelerinden biri DEĞİLDİR?", ["Kafiye", "Olay", "Kişi", "Mekân"], "Kafiye şiirin öğesidir."),
          S("'Ben' diye anlatan anlatıcı hangi kişili anlatıcıdır?", ["Birinci kişili", "Üçüncü kişili", "İkinci kişili", "Anlatıcısız"], "'Ben' anlatımı birinci kişilidir."),
          S("Kişilerin ve ortamın tanıtıldığı bölüm hangisidir?", ["Serim", "Düğüm", "Çözüm", "Sonsöz"], "Tanıtım serimde yapılır."),
          S("Okurun gözünde canlandırmak için renk, ses ve kokuyla anlatmaya ne denir?", ["Betimleme", "Özetleme", "Tanımlama", "Karşılaştırma"], "Bu anlatım betimlemedir.")
        ] }
    ] },
    { id: "oy_y2", ad: "Günlük Hayatta Yazma", konular: [
      { id: "oy_y2a", ad: "Mektup, E-posta ve Dilekçe",
        ozet: ["Mektup: yer-tarih, hitap, giriş, gelişme, sonuç, saygı/sevgi sözü, imza", "E-posta: konu satırı kısa ve açık olmalı", "Dilekçe: resmî bir kuruma istek bildiren yazı", "Dilekçede tarih sağ üstte, kurum adı ortada, imza ve ad-soyad sağ altta", "Resmî yazılarda saygılı ve açık bir dil kullanılır"],
        anlatim: [
          "Mektup, uzaktaki birine duygu ve düşüncelerimizi yazıyla iletmektir. Sağ üst köşeye yer ve tarih yazılır; ardından 'Sevgili Ayşe,' gibi bir hitapla başlanır. Giriş bölümünde hâl hatır sorulur, gelişmede asıl konu anlatılır, sonuçta iyi dilekler belirtilir ve imza atılır.",
          "E-posta da bir tür mektuptur ama konu satırı çok önemlidir: 'Proje ödevi hakkında' gibi kısa ve açık olmalıdır. Öğretmene ya da bir kuruma yazılan e-postada selamlama, kendini tanıtma ('6-B sınıfından Ali Kaya') ve kibar bir kapanış ('Saygılarımla') bulunmalıdır.",
          "Dilekçe, bir kişinin resmî bir kurumdan isteğini ya da şikâyetini yazılı olarak bildirdiği belgedir. Sağ üste tarih, ortaya kurumun adı ('… Ortaokulu Müdürlüğüne') yazılır; metinde istek kısa ve açık anlatılır, 'Gereğini saygılarımla arz ederim.' gibi bir cümleyle bitirilir. Sağ alta imza ve ad-soyad, sol alta adres yazılır."
        ],
        sorular: [
          S("Resmî bir kuruma istek bildirmek için yazılan yazı hangisidir?", ["Dilekçe", "Günlük", "Anı", "Şiir"], "Resmî isteğin yazısı dilekçedir."),
          S("Mektupta yer ve tarih genellikle nereye yazılır?", ["Sağ üst köşeye", "Sol alt köşeye", "Ortaya", "Hiç yazılmaz"], "Yer ve tarih sağ üstte yer alır."),
          S("E-postada konu satırı nasıl olmalıdır?", ["Kısa ve açık", "Boş", "Çok uzun", "Sadece emoji"], "Konu satırı içeriği kısaca anlatmalıdır."),
          S("Dilekçe hangi cümleyle bitirilebilir?", ["Gereğini saygılarımla arz ederim.", "Görüşürüz!", "Bye bye", "Hadi bakalım"], "Resmî yazılarda saygılı kapanış kullanılır."),
          S("Mektubun gelişme bölümünde ne anlatılır?", ["Asıl konu", "Sadece imza", "Yalnızca tarih", "Adres"], "Asıl konu gelişme bölümündedir.")
        ] }
    ] }
  ]);
})();
