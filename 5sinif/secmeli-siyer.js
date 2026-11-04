window.ICERIK = window.ICERIK || {};
// Seçmeli Peygamberimizin Hayatı (Siyer) — 5, 7 ve 8. sınıf (Türkiye Yüzyılı Maarif Modeli üniteleri). 6. sınıf içeriği secmeli.js'tedir.
// Dosya üç sınıfta aynıdır; sınıf düzeyi SINIF.anahtar'dan okunur. Doğru cevap ilk şıktır; uygulama şıkları karıştırır.
(function () {
  const NO = parseInt((window.SINIF && window.SINIF.anahtar) || document.title, 10);
  const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
  const kaynak = (n) => [
    { ad: "MEB öğretim programı: Peygamberimizin Hayatı (" + n + ". sınıf)", url: "https://tymm.meb.gov.tr/ogretim-programlari/peygamberimizin-hayati-dersi-temel-egitim/" + (n + 1) },
    { ad: "EBA — Konu anlatım videoları ve ders kitapları", url: "https://www.eba.gov.tr" },
    { ad: "MEBİ — MEB'in ücretsiz bireysel öğrenme platformu", url: "https://mebi.eba.gov.tr" }
  ];
  const ders = (uniteler) => ({ ad: "Peygamberimizin Hayatı", ikon: "🕋", renk: "#0f766e", secmeli: true, kaynaklar: kaynak(NO), uniteler });

  const SINIF5 = [
    { id: "p5u1", ad: "Çocukluk Yıllarında Peygamberimiz", konular: [
      { id: "p5u1k1", ad: "Peygamberimizin Doğduğu Çevre ve Fil Vakası",
        ozet: ["Cahiliye: İslam'dan önceki Arap toplumunun inanç ve yaşayışı", "Mekke'de putlara tapılıyor, güçlü olan güçsüzü eziyordu", "Kâbe, Hz. İbrahim ile Hz. İsmail'in inşa ettiği ilk mabettir", "Zemzem: Mekke'deki mübarek su kaynağı", "Fil Vakası: Ebrehe'nin fillerle Kâbe'yi yıkma girişimi; Allah, Ebabil kuşlarıyla korudu", "Peygamberimiz Fil Vakası'nın olduğu yıl (571) doğdu; doğumuna Mevlit denir"],
        anlatim: [
          "Peygamberimiz Hz. Muhammed, 571 yılında Mekke'de doğdu. O dönemde Arap toplumunun büyük kısmı Allah'ı unutmuş, putlara tapıyordu. Güçlüler güçsüzlere zulmediyor, kız çocukları değersiz görülüyordu. İslam'dan önceki bu döneme Cahiliye dönemi denir.",
          "Mekke'nin ortasında Hz. İbrahim ile oğlu Hz. İsmail'in inşa ettiği Kâbe vardı. Kâbe'nin yanında, Hz. İsmail'in bebekken susuz kaldığı yerde çıkan Zemzem kuyusu bulunuyordu. Mekke, ticaret yollarının kesiştiği önemli bir şehirdi.",
          "Peygamberimizin doğduğu yıl, Yemen valisi Ebrehe büyük bir orduyla ve fillerle Kâbe'yi yıkmaya geldi. Ancak Allah, Ebabil denilen kuş sürüleriyle bu orduyu durdurdu ve Kâbe'yi korudu. Kur'an'daki Fil suresi bu olayı anlatır. Bu yüzden o yıla Fil Yılı denir."
        ],
        video: "qHy6vTUsOyc",
        sorular: [
          S("İslam'dan önceki Arap toplumunun yaşadığı döneme ne denir?", ["Cahiliye dönemi", "Asrısaadet", "Hicret dönemi", "Medine dönemi"], "İslam öncesi döneme Cahiliye denir."),
          S("Ebrehe'nin fillerle Kâbe'yi yıkma girişimine ne ad verilir?", ["Fil Vakası", "Hicret", "Hudeybiye", "Bedir"], "Bu olay Fil Vakası'dır; Fil suresinde anlatılır."),
          S("Kâbe'yi kim inşa etmiştir?", ["Hz. İbrahim ve Hz. İsmail", "Hz. Musa ve Hz. Harun", "Hz. Nuh", "Hz. İsa"], "Kâbe'yi Hz. İbrahim ile oğlu Hz. İsmail inşa etti."),
          S("Peygamberimizin doğumuna ne ad verilir?", ["Mevlit", "Miraç", "Hicret", "Biat"], "Peygamberimizin doğumuna Mevlit denir."),
          S("Mekke'deki mübarek su kaynağının adı nedir?", ["Zemzem", "Kevser", "Fırat", "Selsebil"], "Zemzem kuyusu Mekke'dedir.")
        ] },
      { id: "p5u1k2", ad: "Çocukluğunda Aile Büyükleriyle İlişkisi",
        ozet: ["Babası Abdullah, o doğmadan önce vefat etti", "Sütannesi Halime'nin yanında, Sadoğulları yurdunda büyüdü", "6 yaşında annesi Âmine ile Medine'deki akrabalarını ziyaret etti; dönüşte annesi Ebva'da vefat etti", "Dedesi Abdülmuttalib onu büyük bir sevgiyle korudu", "8 yaşında dedesi vefat edince amcası Ebu Talip'in yanında büyüdü", "Büyüklerine saygılı, sorumluluk sahibi bir çocuktu"],
        anlatim: [
          "Peygamberimizin babası Abdullah, o dünyaya gelmeden önce bir ticaret yolculuğunda vefat etmişti. O dönemde Mekkeliler çocuklarını, havası temiz çöllerde büyümeleri için sütannelere verirdi. Peygamberimiz de sütannesi Halime'nin yanında, Sadoğulları yurdunda dört yıl kadar kaldı. Halime, onun gelişiyle evlerine bereket geldiğini anlatırdı.",
          "Altı yaşındayken annesi Âmine ile birlikte Medine'deki akrabalarını ziyaret etti. Babasının kabrini gördüler. Ancak dönüş yolunda, Ebva denilen yerde annesi hastalanarak vefat etti. Küçük Muhammed, yanlarındaki Ümmü Eymen ile Mekke'ye döndü.",
          "Bundan sonra dedesi Abdülmuttalib onu yanına aldı ve çok sevdi; onu Kâbe'nin yanındaki minderine oturturdu. Sekiz yaşında dedesini de kaybedince amcası Ebu Talip ona sahip çıktı. Peygamberimiz amcasının ailesine yardım eder, koyunlarını güderdi. Aile büyüklerine her zaman saygı ve sevgiyle davrandı."
        ],
        video: "qHy6vTUsOyc",
        sorular: [
          S("Peygamberimizin sütannesinin adı nedir?", ["Halime", "Âmine", "Hatice", "Ümmü Eymen"], "Sütannesi Halime'dir."),
          S("Peygamberimizin annesi hangi yolculuk dönüşünde vefat etti?", ["Medine'deki akrabalarını ziyaretten dönerken", "Şam'dan dönerken", "Taif'ten dönerken", "Hac yolculuğunda"], "Annesi Âmine, Medine dönüşü Ebva'da vefat etti."),
          S("Dedesinin vefatından sonra Peygamberimizi kim büyüttü?", ["Amcası Ebu Talip", "Amcası Ebu Leheb", "Sütannesi Halime", "Hz. Ebubekir"], "Amcası Ebu Talip ona sahip çıktı."),
          S("Peygamberimiz amcasının yanındayken ailesine nasıl yardım ederdi?", ["Koyunlarını güderdi", "Saray işlerine bakardı", "Asker olarak çalışırdı", "Hiç yardım etmezdi"], "Çocukken koyun güderek ailesine destek oldu."),
          S("Peygamberimizin çocukluğundan çıkarabileceğimiz en önemli değer hangisidir?", ["Büyüklere saygı ve sorumluluk", "Kibir", "Tembellik", "İsraf"], "Aile büyüklerine saygılı ve sorumluluk sahibiydi.")
        ] }
    ] },
    { id: "p5u2", ad: "Peygamberimizin Çevresindeki Çocuklar", konular: [
      { id: "p5u2k1", ad: "Çocukların Dostu Peygamberimiz",
        ozet: ["Asrısaadet: Peygamberimizin yaşadığı mutluluk çağı", "Çocuklara selam verir, onlarla şakalaşır, oyunlarına katılırdı", "Torunları Hz. Hasan ve Hz. Hüseyin'i sırtına alır, onlarla oynardı", "Hz. Ali çocuk yaşta onun yanında büyüdü", "Zeyd bin Harise'yi evlat gibi sevdi", "Enes bin Malik on yıl hizmet etti; Peygamberimiz ona hiç 'öf' demedi"],
        anlatim: [
          "Peygamberimizin yaşadığı döneme Asrısaadet, yani mutluluk çağı denir. Bu dönemde çocuklar çok değerliydi. Peygamberimiz yolda karşılaştığı çocuklara ilk önce kendisi selam verir, başlarını okşar, onlarla şakalaşırdı. Merhamet ve şefkat, onun çocuklarla ilişkisinin temeliydi.",
          "Hz. Ali çocuk yaşta Peygamberimizin evinde büyüdü ve İslam'ı kabul eden ilk çocuk oldu. Zeyd bin Harise de küçükken onun yanına gelmişti. Ailesi onu almaya geldiğinde Zeyd, Peygamberimizin yanında kalmayı seçti; çünkü ondan gördüğü sevgiyi hiçbir yerde görmemişti.",
          "Enes bin Malik on yaşında Peygamberimize hizmet etmeye başladı ve on yıl yanında kaldı. Enes, bu süre boyunca Peygamberimizin kendisine bir kez bile 'öf' demediğini, 'Bunu neden yaptın?' diye azarlamadığını anlatır. Peygamberimiz tevazu sahibiydi; yetimleri korur, 'Yetime iyi bakan kişi cennette benimle yan yana olacaktır.' buyururdu."
        ],
        video: "pUvrba85rdQ",
        sorular: [
          S("Peygamberimizin yaşadığı mutluluk çağına ne denir?", ["Asrısaadet", "Cahiliye", "Fetret", "Hicret"], "Asrısaadet mutluluk çağı demektir."),
          S("Peygamberimize on yıl hizmet eden ve ondan hiç azar işitmediğini anlatan sahabi kimdir?", ["Enes bin Malik", "Zeyd bin Harise", "Ebu Cehil", "Halid bin Velid"], "Enes bin Malik on yıl hizmet etti."),
          S("Ailesi almaya geldiğinde Peygamberimizin yanında kalmayı seçen kimdir?", ["Zeyd bin Harise", "Enes bin Malik", "Hz. Ömer", "Bilal-i Habeşi"], "Zeyd, Peygamberimizin yanında kalmayı seçti."),
          S("Peygamberimiz yolda çocuklarla karşılaşınca ne yapardı?", ["Önce kendisi selam verirdi", "Onları görmezden gelirdi", "Onları azarlardı", "Yolunu değiştirirdi"], "Çocuklara önce kendisi selam verirdi."),
          S("Peygamberimizin yetimlerle ilgili öğüdü nedir?", ["Yetime iyi bakan cennette onunla yan yana olacaktır", "Yetimlerle ilgilenmeyin", "Yetimler çalışsın", "Yetimler okula gitmesin"], "Yetimi korumak çok büyük bir iyiliktir.")
        ] }
    ] },
    { id: "p5u3", ad: "Rehberim Peygamberim", konular: [
      { id: "p5u3k1", ad: "Temizlik, Yeme-İçme ve Giyim Adabı",
        ozet: ["Taharet: maddi ve manevi temizlik", "'Temizlik imanın yarısıdır.' (Hadis)", "Yemeğe besmeleyle başlar, sağ elle yer, sonunda şükrederdi", "Yemeği israf etmez, tabağında bırakmazdı", "Sade ve temiz giyinir, mütevazı davranırdı", "Diş temizliğine (misvak) çok önem verirdi"],
        anlatim: [
          "Peygamberimiz temizliğe çok önem verirdi. Ellerini, ağzını ve dişlerini sık sık temizler, misvak kullanırdı. 'Temizlik imanın yarısıdır.' buyurarak temizliğin inancımızın bir parçası olduğunu öğretmiştir. Beden, elbise ve çevre temizliğinin yanında kalbi kötü düşüncelerden arındırmak da temizliktir; buna taharet denir.",
          "Yemeğe besmeleyle başlar, sağ eliyle ve önünden yerdi. Yemeği asla kötülemez, beğenmediğini yemez ama ayıplamazdı. Doymadan sofradan kalkmayı, midenin bir bölümünü yemeğe, bir bölümünü suya, bir bölümünü de nefes almaya ayırmayı öğütlerdi. Yemeği israf etmez, bitirdikten sonra Allah'a şükrederdi.",
          "Giyiminde sade ve temizdi. Gösterişten uzak durur, mütevazı davranırdı. Elbisesi yırtılınca kendisi diker, ayakkabısını kendisi tamir ederdi. Peygamberimiz bize; temiz, düzenli ve israftan uzak bir hayatın güzelliğini kendi örnekliğiyle göstermiştir."
        ],
        video: "pUvrba85rdQ",
        sorular: [
          S("'Temizlik imanın yarısıdır.' sözü neyi vurgular?", ["Temizliğin inancın bir parçası olduğunu", "Temizliğin önemsiz olduğunu", "Sadece yemek temizliğini", "Sadece cuma günü temizlenmeyi"], "Temizlik inancımızın bir parçasıdır."),
          S("Peygamberimiz yemeğe nasıl başlardı?", ["Besmeleyle", "Hiçbir şey söylemeden", "Şarkı söyleyerek", "Ayakta"], "Yemeğe besmeleyle başlardı."),
          S("Malın ve yiyeceğin gereksiz yere harcanmasına ne denir?", ["İsraf", "Tevazu", "Taharet", "Şükür"], "Gereksiz harcamaya israf denir."),
          S("Peygamberimizin giyimi nasıldı?", ["Sade ve temiz", "Gösterişli ve pahalı", "Kirli", "Hep yeni"], "Sade ve temiz giyinirdi."),
          S("Peygamberimiz yemeği beğenmediğinde ne yapardı?", ["Yemez ama kötülemezdi", "Tabağı atardı", "Aşçıyı azarlardı", "Herkese şikâyet ederdi"], "Yemeği asla ayıplamazdı.")
        ] }
    ] },
    { id: "p5u4", ad: "Aile Hayatında Peygamberimiz", konular: [
      { id: "p5u4k1", ad: "Eş, Baba ve Dede Olarak Peygamberimiz",
        ozet: ["İlk eşi Hz. Hatice; birbirlerine sevgi ve saygıyla bağlıydılar", "Ev işlerinde ailesine yardım ederdi", "Kızı Hz. Fatıma gelince ayağa kalkar, onu alnından öperdi", "Torunları Hz. Hasan ve Hz. Hüseyin'i çok severdi", "Ehlibeyt: Peygamberimizin ev halkı", "'Sizin en hayırlınız, ailesine karşı en iyi olanınızdır.' (Hadis)"],
        anlatim: [
          "Peygamberimiz aile hayatında sevgi, saygı ve şefkatin en güzel örneğiydi. İlk eşi Hz. Hatice ona her zaman destek oldu; Peygamberimiz de onu hayatı boyunca vefayla andı. Ev işlerinde ailesine yardım eder, elbisesini diker, keçisini sağardı. 'Sizin en hayırlınız, ailesine karşı en iyi olanınızdır.' buyurmuştur.",
          "Baba olarak çocuklarına büyük sevgi gösterirdi. Kızı Hz. Fatıma yanına geldiğinde ayağa kalkar, onu alnından öper ve kendi yerine oturturdu. Çocuklarını hiçbir zaman ayırt etmez, hepsine eşit davranırdı.",
          "Dede olarak da çok şefkatliydi. Torunları Hz. Hasan ve Hz. Hüseyin'i kucağına alır, sırtına bindirir, onlarla oyun oynardı. Namaz kılarken torunu sırtına çıksa secdeyi uzatır, onu indirmezdi. Peygamberimizin ev halkına Ehlibeyt denir."
        ],
        video: "ZAXLUC7jiiE",
        sorular: [
          S("Peygamberimizin ev halkına ne ad verilir?", ["Ehlibeyt", "Ensar", "Muhacir", "Ashab-ı Suffe"], "Peygamberimizin ev halkı Ehlibeyt'tir."),
          S("Peygamberimizin ilk eşi kimdir?", ["Hz. Hatice", "Hz. Fatıma", "Hz. Âmine", "Hz. Halime"], "İlk eşi Hz. Hatice'dir."),
          S("Kızı Hz. Fatıma yanına geldiğinde Peygamberimiz ne yapardı?", ["Ayağa kalkar, alnından öperdi", "Onu görmezden gelirdi", "Sadece selam verirdi", "Yerinden kalkmazdı"], "Ayağa kalkıp onu sevgiyle karşılardı."),
          S("Peygamberimizin ev işleriyle ilgili tutumu hangisidir?", ["Ailesine yardım ederdi", "Hiç yardım etmezdi", "Yalnızca emir verirdi", "Evde bulunmazdı"], "Ev işlerinde ailesine yardım ederdi."),
          S("'Sizin en hayırlınız, ailesine karşı en iyi olanınızdır.' hadisi neyi öğütler?", ["Ailemize iyi davranmayı", "Yalnızca dışarıdakilere iyi davranmayı", "Aileden uzak durmayı", "Çok çalışıp eve az gelmeyi"], "Ailemize karşı iyi olmak en hayırlı davranıştır.")
        ] }
    ] }
  ];

  const SINIF7 = [
    { id: "p7u1", ad: "Hicretten Önce Peygamberimiz", konular: [
      { id: "p7u1k1", ad: "İslam'a Davet ve Mekke'deki Zorluklar",
        ozet: ["İlk vahiy 610'da Hira'da geldi (Alak suresinin ilk ayetleri)", "Davet önce gizli, üç yıl sonra açık yapıldı", "Darülerkam: gizli davet döneminde Müslümanların toplandığı ev", "Müşrikler Müslümanlara baskı ve işkence yaptı", "Boykot: Müslümanlar üç yıl Ebu Talip mahallesinde kuşatıldı", "Hüzün Yılı (619): Hz. Hatice ile amcası Ebu Talip vefat etti"],
        anlatim: [
          "Peygamberimize ilk vahiy 610 yılında Hira Mağarası'nda Alak suresinin 'Oku!' diye başlayan ayetleriyle geldi. Peygamberimiz İslam'a önce en yakınlarını davet etti; Hz. Hatice, Hz. Ebubekir, Hz. Ali ve Zeyd bin Harise ilk Müslümanlar arasındaydı. Davet ilk üç yıl gizli yapıldı; Müslümanlar Erkam bin Ebi'l-Erkam'ın evinde, yani Darülerkam'da toplanıyordu.",
          "Açık davet başlayınca Mekkeli müşrikler büyük tepki gösterdi. Bilal-i Habeşi, Ammar bin Yasir ve ailesi gibi güçsüz Müslümanlara ağır işkenceler yapıldı. Bir grup Müslüman, adaletli bir hükümdarın yönettiği Habeşistan'a göç etti. Müşrikler daha sonra Müslümanlarla alışverişi ve evlenmeyi yasaklayan bir boykot ilan etti; bu kuşatma üç yıl sürdü.",
          "Boykot bittikten kısa süre sonra Peygamberimizin en büyük destekçileri olan eşi Hz. Hatice ve amcası Ebu Talip vefat etti. Bu yüzden o yıla Hüzün Yılı denir. Peygamberimiz bütün bu zorluklara rağmen sabırla davetine devam etti."
        ],
        video: "4JjRy_v_IKo",
        sorular: [
          S("Gizli davet döneminde Müslümanların toplandığı eve ne ad verilir?", ["Darülerkam", "Suffe", "Darünnedve", "Mescid-i Nebevi"], "Darülerkam, Erkam'ın evidir."),
          S("İlk vahiy hangi sureden ayetlerle geldi?", ["Alak", "Fatiha", "Bakara", "İhlas"], "İlk ayetler Alak suresindendir."),
          S("Hz. Hatice ile Ebu Talip'in vefat ettiği yıla ne denir?", ["Hüzün Yılı", "Fil Yılı", "Hicret Yılı", "Fetih Yılı"], "619 yılına Hüzün Yılı denir."),
          S("Baskılardan kurtulmak için bir grup Müslüman nereye göç etti?", ["Habeşistan", "Mısır", "İran", "Bizans"], "Adaletli bir hükümdarın olduğu Habeşistan'a göç ettiler."),
          S("Müşriklerin Müslümanlarla alışverişi yasakladığı uygulamaya ne denir?", ["Boykot", "Biat", "Hicret", "Fetih"], "Bu uygulama boykottur; üç yıl sürdü.")
        ] },
      { id: "p7u1k2", ad: "İsra ve Miraç, Taif ve Yeni Yurt Arayışı",
        ozet: ["Taif yolculuğu: Peygamberimiz taşlandı ama beddua etmedi", "İsra: Mekke'den Kudüs'teki Mescid-i Aksa'ya gece yolculuğu", "Miraç: Mescid-i Aksa'dan göklere yükseliş", "Miraç'ta beş vakit namaz farz kılındı", "Akabe Biatları: Medineliler Peygamberimize bağlılık sözü verdi", "Mus'ab bin Umeyr Medine'ye öğretmen olarak gönderildi"],
        anlatim: [
          "Mekke'de baskılar artınca Peygamberimiz Taif'e gidip insanları İslam'a davet etti. Ancak Taifliler onu taşladı. Peygamberimiz yaralanmasına rağmen onlara beddua etmedi; 'Belki onların neslinden Allah'a inananlar çıkar.' diyerek dua etti. Bu, onun merhametinin en güzel örneklerinden biridir.",
          "Bu zor günlerin ardından Peygamberimiz İsra ve Miraç'ı yaşadı. İsra, bir gece Mekke'den Kudüs'teki Mescid-i Aksa'ya yapılan yolculuktur. Miraç ise oradan göklere yükseliştir. Miraç'ta beş vakit namaz farz kılındı. Bu olay Peygamberimize ve Müslümanlara büyük bir moral oldu.",
          "Hac mevsiminde Medine'den (Yesrib) gelen bazı kişiler Peygamberimizle Akabe denilen yerde buluşup Müslüman oldu ve ona bağlılık sözü verdi; buna Akabe Biatı denir. Peygamberimiz Medinelilere İslam'ı öğretmek için Mus'ab bin Umeyr'i gönderdi. Böylece Müslümanlar için yeni bir yurt hazırlanmış oldu ve hicret yolu açıldı."
        ],
        video: "4JjRy_v_IKo",
        sorular: [
          S("Mekke'den Mescid-i Aksa'ya yapılan gece yolculuğuna ne ad verilir?", ["İsra", "Miraç", "Hicret", "Hac"], "Mescid-i Aksa'ya yolculuk İsra'dır."),
          S("Miraç'ta hangi ibadet farz kılındı?", ["Beş vakit namaz", "Oruç", "Zekât", "Hac"], "Beş vakit namaz Miraç'ta farz kılındı."),
          S("Taiflilerin taşlamasına karşı Peygamberimiz ne yaptı?", ["Beddua etmeyip dua etti", "Onlara savaş açtı", "Onlara beddua etti", "Bir daha Mekke'ye dönmedi"], "Merhametiyle onlara dua etti."),
          S("Medinelilerin Peygamberimize bağlılık sözü verdiği olaya ne denir?", ["Akabe Biatı", "Hudeybiye", "Veda Haccı", "Boykot"], "Akabe'de verilen söze Akabe Biatı denir."),
          S("Medine'ye öğretmen olarak gönderilen sahabi kimdir?", ["Mus'ab bin Umeyr", "Ebu Cehil", "Halid bin Velid", "Ebu Süfyan"], "Mus'ab bin Umeyr ilk öğretmendir.")
        ] }
    ] },
    { id: "p7u2", ad: "Peygamberimizin Mekkeli Arkadaşları", konular: [
      { id: "p7u2k1", ad: "Mekkeli Sahabiler ve Peygamberimize Bağlılıkları",
        ozet: ["Muhacir: Mekke'den Medine'ye göç eden Müslüman", "Hz. Ebubekir: ilk Müslümanlardan, hicret arkadaşı, 'Sıddık'", "Bilal-i Habeşi: işkencelere 'Ehad, Ehad' diyerek direndi; ilk müezzin", "Sümeyye: İslam'ın ilk şehidi", "Hz. Ömer'in Müslüman olmasıyla Müslümanlar güçlendi", "Peygamberimiz arkadaşlarını dinler, onlara danışırdı"],
        anlatim: [
          "Peygamberimizin Mekke'de İslam'ı kabul eden ve sonra Medine'ye göç eden arkadaşlarına muhacir denir. Hz. Ebubekir, ilk Müslüman olan yetişkin erkeklerdendi. Peygamberimizin söylediklerini hiç tereddüt etmeden doğruladığı için ona 'Sıddık' denildi. Hicrette Peygamberimizin yol arkadaşı oldu ve malını İslam yolunda harcadı.",
          "Bilal-i Habeşi bir köleydi. Müslüman olduğu için sahibi onu kızgın kumların üstüne yatırıp göğsüne taş koydu; ama o 'Ehad, Ehad' (Allah birdir) demekten vazgeçmedi. Hz. Ebubekir onu satın alıp özgür bıraktı. Bilal daha sonra İslam'ın ilk müezzini oldu. Sümeyye ise inancından vazgeçmediği için şehit edilen ilk Müslümandır.",
          "Peygamberimiz Mekkeli arkadaşlarıyla sıcak bir iletişim kurardı. Onları dinler, önemli kararlarda onlara danışır, sıkıntılarında yanlarında olurdu. Hz. Ömer'in Müslüman olmasıyla Müslümanlar Kâbe'de açıkça namaz kılmaya başladı. Sahabiler de Peygamberimizi canlarından çok sever, onun anlattıklarını sonraki nesillere aktarırdı."
        ],
        video: "_6NZ3kx-lKs",
        sorular: [
          S("Mekke'den Medine'ye göç eden Müslümanlara ne denir?", ["Muhacir", "Ensar", "Münafık", "Müşrik"], "Göç edenlere muhacir denir."),
          S("İşkenceye rağmen 'Ehad, Ehad' diyen sahabi kimdir?", ["Bilal-i Habeşi", "Hz. Osman", "Mus'ab bin Umeyr", "Abdullah bin Mesud"], "Bilal-i Habeşi 'Allah birdir' diyerek direndi."),
          S("Hz. Ebubekir'e 'Sıddık' denmesinin sebebi nedir?", ["Peygamberimizi tereddütsüz doğrulaması", "Çok zengin olması", "Çok güçlü olması", "Şair olması"], "Sıddık, çok doğrulayan demektir."),
          S("İslam'ın ilk şehidi kimdir?", ["Sümeyye", "Hz. Hamza", "Hz. Hatice", "Hz. Ali"], "İlk şehit Hz. Sümeyye'dir."),
          S("İslam'ın ilk müezzini kimdir?", ["Bilal-i Habeşi", "Hz. Ömer", "Zeyd bin Harise", "Enes bin Malik"], "İlk ezanı Bilal-i Habeşi okudu.")
        ] }
    ] },
    { id: "p7u3", ad: "Rehberim Peygamberim", konular: [
      { id: "p7u3k1", ad: "Sabır, Oruç, İnfak ve Sadaka",
        ozet: ["Sabır: zorluklara karşı dayanmak, isyan etmemek", "Peygamberimiz Mekke'deki baskılara ve kayıplara sabırla karşılık verdi", "Oruç sabrı ve iradeyi güçlendirir", "İnfak: Allah rızası için malı paylaşmak", "Sadaka: karşılık beklemeden yapılan her iyilik; 'Gülümsemek de sadakadır.'", "Peygamberimiz elindekini paylaşır, hiçbir isteyeni geri çevirmezdi"],
        anlatim: [
          "Sabır; zorluklar karşısında dayanmak, ümidini kaybetmeden doğru bildiği yolda devam etmektir. Peygamberimiz Mekke'de alay edildiğinde, Taif'te taşlandığında, sevdiklerini kaybettiğinde sabretti. O, sabrın sadece beklemek değil, çalışmaya devam ederek Allah'a güvenmek olduğunu gösterdi.",
          "Oruç da sabrı öğreten bir ibadettir. Oruç tutan kişi, sevdiği şeylerden bir süre uzak durarak iradesini güçlendirir, aç olanların halini anlar. Peygamberimiz Ramazan orucunun yanında başka günlerde de oruç tutar, orucu yalan ve kötü sözden korumayı öğütlerdi.",
          "İnfak, Allah rızası için malından ihtiyaç sahipleriyle paylaşmaktır. Sadaka ise karşılık beklemeden yapılan her türlü iyiliktir. Peygamberimiz 'Kardeşine gülümsemen sadakadır.' buyurarak iyiliğin yalnızca parayla olmadığını öğretti. Kendisi elindekini paylaşır, kimseyi eli boş çevirmezdi."
        ],
        sorular: [
          S("Zorluklara karşı dayanmak ve ümidini kaybetmemek hangi kavramla ifade edilir?", ["Sabır", "İsraf", "Kibir", "Cimrilik"], "Bu davranış sabırdır."),
          S("Allah rızası için malından ihtiyaç sahipleriyle paylaşmaya ne denir?", ["İnfak", "İsraf", "Boykot", "Biat"], "İnfak, paylaşmaktır."),
          S("Peygamberimize göre aşağıdakilerden hangisi de sadakadır?", ["Kardeşine gülümsemek", "Yalan söylemek", "Kızmak", "Kibirlenmek"], "Gülümsemek de sadakadır."),
          S("Orucun insana kazandırdığı değerlerden biri hangisidir?", ["Sabır ve irade", "Tembellik", "Bencillik", "Öfke"], "Oruç iradeyi ve sabrı güçlendirir."),
          S("Peygamberimiz Taif'te taşlandığında nasıl davrandı?", ["Sabretti ve dua etti", "İntikam aldı", "Davetten vazgeçti", "Beddua etti"], "Sabırla karşılık verdi.")
        ] }
    ] },
    { id: "p7u4", ad: "İlim Hayatında Peygamberimiz", konular: [
      { id: "p7u4k1", ad: "Peygamberimiz, Sahabe ve İlim",
        ozet: ["İlk ayet 'Oku!' emriyle başlar", "'İlim öğrenmek her Müslümana farzdır.' (Hadis)", "Bedir esirleri, Müslüman çocuklara okuma-yazma öğretince serbest bırakıldı", "Darülerkam: Mekke'de ilk eğitim yeri", "Suffe: Mescid-i Nebevi'nin yanında bir eğitim yeri; burada kalanlara Ashab-ı Suffe denir", "Ebu Hureyre, Abdullah bin Abbas gibi sahabiler ilim yolunda ömür verdi"],
        anlatim: [
          "Kur'an'ın ilk ayeti 'Oku!' emriyle başlar. Peygamberimiz de ilmi çok önemsemiş, 'İlim öğrenmek her Müslümana farzdır.' buyurmuştur. Mekke'de Darülerkam, Müslümanların bir araya gelip Kur'an'ı öğrendikleri ilk eğitim yeriydi.",
          "Bedir Savaşı'ndan sonra okuma yazma bilen esirler, her biri on Müslüman çocuğa okuma yazma öğretirse serbest bırakılacaktı. Bu karar, Peygamberimizin eğitime verdiği değeri açıkça gösterir. Medine'de Mescid-i Nebevi'nin yanında Suffe denilen bir bölüm vardı; burada kalan ve sürekli ilim öğrenen sahabilere Ashab-ı Suffe denirdi.",
          "Sahabiler de ilme çok önem verdi. Ebu Hureyre, Peygamberimizden duyduklarını ezberleyerek binlerce hadis aktardı. Abdullah bin Abbas genç yaşına rağmen büyük bir âlim oldu. Zeyd bin Sabit, Peygamberimizin isteğiyle kısa sürede yabancı dil öğrendi. Onlar, öğrendiklerini başkalarına öğretmeyi de bir görev bildiler."
        ],
        sorular: [
          S("Kur'an'ın ilk ayeti hangi emirle başlar?", ["Oku!", "Koş!", "Bekle!", "Sus!"], "İlk ayet 'Oku!' emridir."),
          S("Mescid-i Nebevi'nin yanında ilim öğrenen sahabilere ne denir?", ["Ashab-ı Suffe", "Ensar", "Muhacir", "Hulefa-i Raşidin"], "Suffe'de kalanlara Ashab-ı Suffe denir."),
          S("Bedir esirleri hangi şartla serbest bırakıldı?", ["Müslüman çocuklara okuma yazma öğretmeleri", "Para ödemeleri", "Mekke'ye dönmeleri", "Hiçbir şart olmadan"], "Okuma yazma öğretme şartıyla serbest bırakıldılar."),
          S("'İlim öğrenmek her Müslümana farzdır.' hadisi neyi vurgular?", ["Öğrenmenin herkes için görev olduğunu", "Sadece âlimlerin öğrenmesini", "Öğrenmenin gereksiz olduğunu", "Sadece çocukların öğrenmesini"], "Öğrenmek herkesin görevidir."),
          S("Peygamberimizin isteğiyle kısa sürede yabancı dil öğrenen sahabi kimdir?", ["Zeyd bin Sabit", "Ebu Cehil", "Halid bin Velid", "Ebu Talip"], "Zeyd bin Sabit yabancı dil öğrendi.")
        ] }
    ] }
  ];

  const SINIF8 = [
    { id: "p8u1", ad: "Hicret'ten Sonra Peygamberimiz", konular: [
      { id: "p8u1k1", ad: "Hicret ve Medine'de Yeni Bir Toplum",
        ozet: ["Hicret (622): Mekke'den Medine'ye göç; Hicri takvimin başlangıcı", "Sevr Mağarası'nda Hz. Ebubekir ile üç gün saklandılar", "Kuba Mescidi: İslam'ın ilk mescidi", "Mescid-i Nebevi: ibadet, eğitim ve yönetim merkezi", "Muahat (kardeşlik): Muhacirler ile Ensar kardeş ilan edildi", "Medine Sözleşmesi: farklı toplulukların bir arada yaşama kuralları"],
        anlatim: [
          "Mekke'de baskılar dayanılmaz hâle gelince Müslümanlar Medine'ye göç etti. Peygamberimiz de 622 yılında Hz. Ebubekir ile birlikte yola çıktı. Müşrikler onları yakalamak için peşlerine düştü; ikisi Sevr Mağarası'nda üç gün saklandı. Bu göçe Hicret denir ve Hicri takvim bu olayla başlar.",
          "Peygamberimiz Medine'ye varmadan önce Kuba'da İslam'ın ilk mescidini yaptırdı. Medine'de ise Mescid-i Nebevi'yi inşa ettiler. Bu mescit yalnızca namaz kılınan bir yer değil; aynı zamanda okul, toplantı ve yönetim merkeziydi.",
          "Peygamberimiz, mallarını Mekke'de bırakıp gelen muhacirlerle onları kucaklayan Medineli Müslümanları, yani Ensar'ı kardeş ilan etti; buna muahat denir. Ayrıca Medine'deki Müslümanlar, Yahudiler ve diğer gruplarla bir sözleşme yaptı. Medine Sözleşmesi, farklı inançtan insanların barış içinde bir arada yaşamasının kurallarını belirliyordu."
        ],
        video: "chgEL6HAXww",
        sorular: [
          S("Mekke'den Medine'ye yapılan göç hangi takvimin başlangıcıdır?", ["Hicri takvim", "Miladi takvim", "Rumi takvim", "Celali takvim"], "Hicri takvim Hicret'le başlar."),
          S("İslam'ın ilk mescidi hangisidir?", ["Kuba Mescidi", "Mescid-i Aksa", "Mescid-i Nebevi", "Süleymaniye"], "İlk mescit Kuba Mescidi'dir."),
          S("Muhacirler ile Ensar'ın kardeş ilan edilmesine ne denir?", ["Muahat", "Biat", "Hicret", "Fetih"], "Bu kardeşliğe muahat denir."),
          S("Hicret yolculuğunda Peygamberimiz ve Hz. Ebubekir nerede saklandı?", ["Sevr Mağarası", "Hira Mağarası", "Uhud Dağı", "Kuba"], "Sevr Mağarası'nda üç gün saklandılar."),
          S("Medine Sözleşmesi'nin amacı nedir?", ["Farklı toplulukların barış içinde yaşaması", "Savaş ilan etmek", "Ticareti yasaklamak", "Mekke'yi yönetmek"], "Bir arada yaşamanın kurallarını belirledi.")
        ] },
      { id: "p8u1k2", ad: "Medine Dönemindeki Önemli Olaylar",
        ozet: ["Bedir (624): Müslümanların ilk büyük zaferi", "Uhud (625): okçuların yerini terk etmesiyle ağır kayıp; Hz. Hamza şehit oldu", "Hendek (627): Medine'nin etrafına hendek kazıldı (Selman-ı Farisi'nin önerisi)", "Hudeybiye Antlaşması (628): Mekkelilerle 10 yıllık barış", "Mekke'nin Fethi (630): Peygamberimiz Mekkelileri affetti", "Veda Haccı (632): insan haklarını vurgulayan Veda Hutbesi"],
        anlatim: [
          "Medine döneminde Müslümanlar, kendilerini korumak için Mekkeli müşriklerle savaşmak zorunda kaldı. 624'teki Bedir Savaşı Müslümanların ilk büyük zaferidir. 625'teki Uhud Savaşı'nda, Peygamberimizin 'Yerinizden ayrılmayın' dediği okçular yerini terk edince Müslümanlar zor durumda kaldı; Peygamberimizin amcası Hz. Hamza şehit oldu. Bu olay emre itaatin önemini gösterir.",
          "627'de Mekkeliler büyük bir orduyla Medine'ye geldi. Selman-ı Farisi'nin önerisiyle şehrin etrafına hendek kazıldı; bu yüzden bu savaşa Hendek Savaşı denir. 628'de imzalanan Hudeybiye Antlaşması ile on yıllık bir barış dönemi başladı. Barış ortamında İslam çok daha hızlı yayıldı.",
          "Mekkeliler antlaşmayı bozunca Peygamberimiz 630 yılında büyük bir orduyla Mekke'ye girdi ve şehir neredeyse kan dökülmeden fethedildi. Peygamberimiz, yıllarca kendisine eziyet edenlere 'Bugün size kınama yok, hepiniz serbestsiniz.' diyerek onları affetti. 632'deki Veda Haccı'nda okuduğu Veda Hutbesi'nde can, mal ve namus dokunulmazlığını ve insanların eşitliğini vurguladı."
        ],
        video: "chgEL6HAXww",
        sorular: [
          S("Müslümanların ilk büyük zaferi hangisidir?", ["Bedir", "Uhud", "Hendek", "Huneyn"], "İlk büyük zafer Bedir'dir."),
          S("Uhud Savaşı'nda Müslümanların zor duruma düşmesinin sebebi nedir?", ["Okçuların yerini terk etmesi", "Yağmur yağması", "Silah olmaması", "Savaşa geç kalınması"], "Okçular emre uymayıp yerini terk etti."),
          S("Medine'nin etrafına hendek kazılmasını kim önerdi?", ["Selman-ı Farisi", "Hz. Ömer", "Hz. Ali", "Bilal-i Habeşi"], "Hendek fikri Selman-ı Farisi'nindir."),
          S("Mekke'nin fethinde Peygamberimiz Mekkelilere nasıl davrandı?", ["Hepsini affetti", "Hepsini cezalandırdı", "Şehirden çıkardı", "Mallarına el koydu"], "Peygamberimiz genel af ilan etti."),
          S("Can, mal ve namus dokunulmazlığının vurgulandığı hutbe hangisidir?", ["Veda Hutbesi", "Cuma Hutbesi", "Bayram Hutbesi", "Akabe Hutbesi"], "Veda Haccı'nda okunan Veda Hutbesi'dir.")
        ] }
    ] },
    { id: "p8u2", ad: "Peygamberimizin Medineli Arkadaşları", konular: [
      { id: "p8u2k1", ad: "Ensar ve Peygamberimize Bağlılıkları",
        ozet: ["Ensar: muhacirlere yardım eden Medineli Müslümanlar", "Diğerkâmlık (îsar): başkasını kendine tercih etmek", "Ebu Eyyüb el-Ensari: Peygamberimizi evinde misafir etti", "Ebu Talha: en sevdiği bahçesini Allah yolunda bağışladı", "Ümmü Süleym: oğlu Enes'i Peygamberimize hizmet için getirdi", "Ebüdderda: ilmi ve ibadetiyle tanınan Medineli sahabi"],
        anlatim: [
          "Medine'de Peygamberimize ve muhacirlere kucak açan Müslümanlara Ensar, yani yardımcılar denir. Ensar, evlerini, tarlalarını ve yiyeceklerini Mekke'den gelen kardeşleriyle paylaştı. Kur'an, onların kendileri ihtiyaç içinde olsalar bile kardeşlerini kendilerine tercih ettiklerini övmektedir; bu güzel ahlaka diğerkâmlık (îsar) denir.",
          "Peygamberimiz Medine'ye geldiğinde devesi Ebu Eyyüb el-Ensari'nin evinin önünde çöktü ve Peygamberimiz mescit yapılana kadar onun evinde kaldı. Ebu Talha, 'Sevdiğiniz şeylerden harcamadıkça iyiliğe erişemezsiniz.' ayeti inince en sevdiği Beyruha bahçesini Allah yolunda bağışladı.",
          "Ümmü Süleym, oğlu Enes'i Peygamberimizin hizmetine vererek onun yanında yetişmesini sağladı. Ebüdderda ise ilme ve ibadete düşkünlüğüyle tanınırdı. Peygamberimiz Ensar'a çok değer verir, 'Allah'ım, Ensar'a, onların çocuklarına ve torunlarına merhamet et.' diye dua ederdi."
        ],
        sorular: [
          S("Muhacirlere yardım eden Medineli Müslümanlara ne denir?", ["Ensar", "Muhacir", "Müşrik", "Münafık"], "Medineli yardımcılar Ensar'dır."),
          S("Başkasını kendine tercih etme ahlakına ne denir?", ["Diğerkâmlık (îsar)", "Bencillik", "İsraf", "Kibir"], "Bu ahlaka diğerkâmlık denir."),
          S("Peygamberimizi Medine'de evinde misafir eden sahabi kimdir?", ["Ebu Eyyüb el-Ensari", "Ebu Talha", "Ebüdderda", "Ebu Süfyan"], "Ebu Eyyüb el-Ensari misafir etti."),
          S("En sevdiği bahçesini Allah yolunda bağışlayan sahabi kimdir?", ["Ebu Talha", "Ebu Eyyüb", "Enes bin Malik", "Zeyd bin Sabit"], "Ebu Talha Beyruha bahçesini bağışladı."),
          S("Oğlu Enes'i Peygamberimizin hizmetine veren hanım sahabi kimdir?", ["Ümmü Süleym", "Hz. Hatice", "Hz. Aişe", "Hz. Sümeyye"], "Ümmü Süleym, Enes'in annesidir.")
        ] }
    ] },
    { id: "p8u3", ad: "Rehberim Peygamberim", konular: [
      { id: "p8u3k1", ad: "Azim, Dua ve Tevekkül",
        ozet: ["Azim ve sebat: kararlılıkla, vazgeçmeden çalışmak", "Peygamberimiz 23 yıl boyunca davetinden vazgeçmedi", "Dua: Allah'a yönelmek, O'ndan istemek; 'Dua ibadetin özüdür.'", "Tevekkül: elinden geleni yaptıktan sonra sonucu Allah'a bırakmak", "'Deveni bağla, sonra tevekkül et.' (Hadis)", "Hendek'te hendeği birlikte kazdılar; önce çalışıp sonra dua ettiler"],
        anlatim: [
          "Azim; bir işi kararlılıkla sürdürmek, sebat ise zorluklar karşısında yılmadan devam etmektir. Peygamberimiz 23 yıl boyunca alaylara, baskılara, savaşlara rağmen davetinden vazgeçmedi. Mekkeliler ona 'Güneşi bir elime, ayı öbür elime verseniz yine bu davadan vazgeçmem.' cevabını verdi.",
          "Dua; Allah'a yönelmek, O'na derdini açmak ve O'ndan yardım istemektir. Peygamberimiz 'Dua ibadetin özüdür.' buyurmuş, her işine dua ile başlamış, sevinçte de sıkıntıda da Allah'a yönelmiştir. Dua, insana güç ve umut verir.",
          "Tevekkül, elinden gelen her şeyi yaptıktan sonra sonucu Allah'a bırakmaktır. Bir sahabi devesini bağlamadan 'Allah'a tevekkül ettim' deyince Peygamberimiz ona 'Deveni bağla, sonra tevekkül et.' buyurdu. Hendek Savaşı'nda Peygamberimiz de sahabileriyle birlikte hendek kazdı; önce tedbir aldı, çalıştı, sonra Allah'a dua etti."
        ],
        sorular: [
          S("Elinden geleni yaptıktan sonra sonucu Allah'a bırakmaya ne denir?", ["Tevekkül", "Tembellik", "İsraf", "Kibir"], "Bu tavır tevekküldür."),
          S("'Deveni bağla, sonra tevekkül et.' hadisi neyi öğretir?", ["Önce tedbir alıp sonra tevekkül etmeyi", "Hiç çalışmamayı", "Deve beslemeyi", "Sadece dua etmeyi"], "Önce sebeplere sarılmak gerekir."),
          S("Bir işi zorluklara rağmen kararlılıkla sürdürmeye ne denir?", ["Azim ve sebat", "Gaflet", "Tembellik", "Öfke"], "Azim ve sebat kararlılıktır."),
          S("Peygamberimiz duayı nasıl nitelendirmiştir?", ["İbadetin özü", "Gereksiz bir davranış", "Sadece bayramda yapılan şey", "Yalnız büyüklerin işi"], "Dua ibadetin özüdür."),
          S("Hendek Savaşı'nda Peygamberimizin tutumu hangisidir?", ["Sahabileriyle birlikte hendek kazdı", "Sadece izledi", "Medine'den ayrıldı", "Savaşa katılmadı"], "Önce birlikte çalıştılar, sonra dua ettiler.")
        ] }
    ] },
    { id: "p8u4", ad: "Çalışma Hayatında Peygamberimiz", konular: [
      { id: "p8u4k1", ad: "Peygamberimizin Çalışma Ahlakı",
        ozet: ["Çocukken çobanlık, gençliğinde ticaret yaptı", "Dürüstlüğü nedeniyle 'Muhammedü'l-Emin' diye anıldı", "Helal kazanç: meşru yollarla elde edilen kazanç", "'Hiç kimse elinin emeğinden daha hayırlı bir şey yememiştir.' (Hadis)", "İtidal: her işte ölçülü olmak; ifrat (aşırılık) ve tefritten (eksiklik) kaçınmak", "İşçinin hakkını 'alnının teri kurumadan' vermeyi öğütledi"],
        anlatim: [
          "Peygamberimiz hayatı boyunca çalışmayı ve el emeğini çok önemsedi. Çocukken koyun güttü, gençliğinde ticaret yaptı. Ticarette doğru sözlü ve güvenilir olduğu için 'Muhammedü'l-Emin' diye tanındı. Hz. Hatice'nin ticaret kervanını yönetmesi de bu güvenilirliği sayesindeydi.",
          "Peygamberimiz 'Hiç kimse elinin emeğinden daha hayırlı bir şey yememiştir.' buyurarak dilenmek yerine çalışmayı öğütledi. Kazancın helal, yani meşru yollardan olmasına dikkat etti; ölçüde ve tartıda hile yapmayı yasakladı. 'İşçiye ücretini alnının teri kurumadan verin.' diyerek çalışanın hakkını korudu.",
          "Peygamberimiz her işte itidali, yani ölçülü olmayı öğütledi. Kendini ibadete verip çalışmayı bırakmak da, dünyaya dalıp ibadeti unutmak da doğru değildir. Aşırılığa ifrat, eksikliğe tefrit denir. Allah'ın verdiği rızık için çalışmak, kazancı helalinden elde etmek ve paylaşmak, Peygamberimizin çalışma ahlakının temelidir."
        ],
        sorular: [
          S("Meşru yollarla elde edilen kazanca ne denir?", ["Helal kazanç", "Haram kazanç", "İsraf", "Rüşvet"], "Meşru kazanç helal kazançtır."),
          S("Her işte ölçülü olmaya ne denir?", ["İtidal", "İfrat", "Tefrit", "İsraf"], "Ölçülülük itidaldir."),
          S("Peygamberimizin işçinin hakkıyla ilgili öğüdü nedir?", ["Ücretini alnının teri kurumadan verin", "Ücretini geciktirin", "Ücret vermeyin", "Ücretini yarıya indirin"], "Çalışanın hakkı hemen verilmelidir."),
          S("Peygamberimiz gençliğinde hangi işle uğraştı?", ["Ticaret", "Denizcilik", "Kuyumculuk", "Hekimlik"], "Gençliğinde ticaret yaptı."),
          S("Aşırılığa ne ad verilir?", ["İfrat", "İtidal", "Tefrit", "Sebat"], "Aşırılık ifrat, eksiklik tefrittir.")
        ] }
    ] }
  ];

  const veri = { 5: SINIF5, 7: SINIF7, 8: SINIF8 }[NO];
  if (veri) window.ICERIK.s_siyer = ders(veri);
})();
