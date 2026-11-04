window.ICERIK = window.ICERIK || {};
// 6. sınıf Türkçe - Maarif Modeli beceri temelli ilerler; içerik sınavlarda ölçülen konu alanlarına göre düzenlendi.
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.turkce = {
  ad: "Türkçe", ikon: "📖", renk: "#e5484d",
  uniteler: [
    {
      id: "tr1", ad: "Sözcükte Anlam",
      konular: [
        {
          id: "tr1k1", ad: "Gerçek, Mecaz ve Terim Anlam",
          ozet: ["Gerçek anlam: sözcüğün akla gelen ilk anlamı (sıcak çay)", "Mecaz anlam: gerçek anlamdan uzaklaşmış anlam (sıcak bir karşılama)", "Terim anlam: bir bilim, sanat ya da spor dalına özgü anlam (açı, hücre, penaltı)", "İpucu: Sözcük somut bir şeyi anlatıyorsa gerçek, duygu ya da davranışı anlatıyorsa çoğu zaman mecazdır."],
          anlatim: [
            "Bir sözcüğün duyulduğunda akla gelen ilk anlamına gerçek anlam denir. 'Sıcak çorba içtik.' cümlesinde 'sıcak' sözcüğü ısısı yüksek anlamında, yani gerçek anlamda kullanılmıştır.",
            "Sözcüğün gerçek anlamından tamamen uzaklaşarak kazandığı yeni anlama mecaz anlam denir. 'Bizi çok sıcak karşıladılar.' cümlesinde 'sıcak' sözcüğü samimi anlamındadır, yani mecaz anlamdadır.",
            "Bir bilim, sanat, meslek ya da spor dalıyla ilgili özel kavramları karşılayan sözcüklere terim denir. Matematikteki 'açı', fendeki 'hücre', futboldaki 'penaltı', dil bilgisindeki 'özne' birer terimdir.",
            "Bir sözcüğün hangi anlamda kullanıldığını anlamak için mutlaka cümlenin bütününe bakmalıyız. Aynı sözcük bir cümlede gerçek, başka bir cümlede mecaz anlamda olabilir."
          ],
          video: "Vy3Sd97yRNM",
          sorular: [
            S("Hangi cümlede \"ağır\" sözcüğü mecaz anlamda kullanılmıştır?", ["Bana çok ağır sözler söyledi.", "Ağır çantayı zorlukla taşıdı.", "Bu masa çok ağır.", "Ağır kutuları kamyona yükledik."], "Ağır söz, kırıcı söz demektir; mecaz anlamdır."),
            S("Hangi cümlede terim anlamlı bir sözcük vardır?", ["Üçgenin iç açıları toplamı 180 derecedir.", "Bugün hava çok güzel.", "Annem pasta yaptı.", "Bahçede çiçekler açtı."], "'Açı' matematiğe ait bir terimdir."),
            S("\"Keskin\" sözcüğü hangi cümlede gerçek anlamıyla kullanılmıştır?", ["Keskin bıçakla ekmeği dilimledi.", "Keskin zekâsıyla herkesi şaşırttı.", "Keskin bir dille eleştirdi.", "Keskin bakışları vardı."], "Bıçağın kesici olması gerçek anlamdır."),
            S("\"Kalbi kırıldı.\" cümlesinde \"kırılmak\" sözcüğü hangi anlamdadır?", ["Mecaz anlam", "Gerçek anlam", "Terim anlam", "Zıt anlam"], "Kalp gerçekten kırılmaz; üzülmek anlamında mecazdır."),
            S("Hangisi bir spor terimidir?", ["Penaltı", "Kalem", "Pencere", "Bulut"], "Penaltı futbola ait bir terimdir."),
            S("\"Bu haber hepimizi derinden sarstı.\" cümlesinde \"sarsmak\" sözcüğü hangi anlamdadır?", ["Mecaz anlam", "Gerçek anlam", "Terim anlam", "Eş anlam"], "Haber gerçekten sarsmaz; çok etkilemek anlamında mecazdır.")
          ]
        },
        {
          id: "tr1k2", ad: "Eş Anlamlı, Zıt Anlamlı ve Eş Sesli Sözcükler",
          ozet: ["Eş anlamlı: yazılışı farklı, anlamı aynı (siyah – kara)", "Zıt anlamlı: anlamca birbirinin karşıtı (uzun – kısa)", "Eş sesli: yazılışı aynı, anlamı tamamen farklı (yüz: sayı / surat)", "\"Değil\" sözcüğü zıt anlam oluşturmaz; olumsuzluk bildirir."],
          anlatim: [
            "Yazılışları farklı, anlamları aynı ya da çok yakın olan sözcüklere eş anlamlı sözcükler denir. Siyah – kara, cevap – yanıt, misafir – konuk, ırmak – nehir eş anlamlı sözcüklere örnektir.",
            "Anlamca birbirinin karşıtı olan sözcüklere zıt anlamlı sözcükler denir. Uzun – kısa, sıcak – soğuk, gelmek – gitmek, erken – geç zıt anlamlı sözcüklerdir. 'Güzel değil' ifadesi zıt anlam değil, olumsuz anlam taşır; 'güzel' sözcüğünün zıt anlamlısı 'çirkin'dir.",
            "Yazılışları ve okunuşları aynı, anlamları tamamen farklı olan sözcüklere eş sesli (sesteş) sözcükler denir. 'Yüz' sözcüğü bir sayıyı da, insanın yüzünü de, yüzmek eylemini de anlatabilir. 'Çay' hem bir içecek hem de küçük bir akarsudur."
          ],
          video: "Vy3Sd97yRNM",
          sorular: [
            S("Hangisinde eş anlamlı sözcükler bir arada verilmiştir?", ["cevap – yanıt", "uzun – kısa", "gel – git", "sıcak – soğuk"], "Cevap ve yanıt aynı anlama gelir."),
            S("Hangisinde zıt anlamlı sözcükler bir arada verilmiştir?", ["erken – geç", "siyah – kara", "okul – mektep", "kent – şehir"], "Erken ve geç anlamca birbirinin karşıtıdır."),
            S("\"Güzel\" sözcüğünün zıt anlamlısı hangisidir?", ["Çirkin", "Güzel değil", "Hoş", "Şirin"], "'Güzel değil' olumsuzluk bildirir; zıt anlamlısı 'çirkin'dir."),
            S("Hangi cümlede \"yüz\" sözcüğü sayı anlamında kullanılmıştır?", ["Kitabın yüz sayfasını okudum.", "Yüzünü yıkayıp kahvaltıya geldi.", "Çocuk utancından yüzünü kapattı.", "Yüzü sevinçle aydınlandı."], "'Yüz sayfa' ifadesinde yüz bir sayıdır. Diğerlerinde insanın yüzü anlatılır."),
            S("\"Çay kenarında piknik yaptık.\" cümlesindeki \"çay\" sözcüğü hangi anlamdadır?", ["Küçük akarsu", "İçecek", "Bitki yaprağı", "Bardak"], "Kenarında piknik yapılan çay, küçük bir akarsudur.")
          ]
        },
        {
          id: "tr1k3", ad: "Deyimler ve Atasözleri",
          ozet: ["Deyim: kalıplaşmış, genellikle mecaz anlamlı söz öbeği (göz atmak)", "Deyimler çoğunlukla bir eylemle biter, öğüt vermez.", "Atasözü: atalarımızın deneyimlerinden doğan, öğüt veren kalıplaşmış söz", "Atasözleri genellikle bir yargı bildirir: Damlaya damlaya göl olur."],
          anlatim: [
            "Deyimler, bir kavramı ya da durumu daha etkili anlatmak için kullanılan, kalıplaşmış sözlerdir. Sözcüklerinin yeri değiştirilemez, genellikle mecaz anlam taşır ve çoğu zaman bir eylemle biter. 'Göz atmak' (kısaca bakmak), 'kulak vermek' (dikkatle dinlemek) birer deyimdir.",
            "Atasözleri ise atalarımızın uzun deneyimlerinden süzülüp gelen, öğüt veren ya da bir gerçeği dile getiren kalıplaşmış sözlerdir. 'Damlaya damlaya göl olur.' atasözü, küçük birikimlerin zamanla büyüyeceğini anlatır.",
            "Deyim ile atasözünü ayırmanın kolay yolu şudur: Atasözü tek başına bir öğüt ya da genel bir yargı bildirir. Deyim ise bir durumu anlatır, öğüt vermez."
          ],
          video: "Mse9D9_eKRY",
          sorular: [
            S("Hangisi bir atasözüdür?", ["Damlaya damlaya göl olur.", "Göz atmak", "Kulak vermek", "Ağzı kulaklarına varmak"], "Atasözü öğüt veren, yargı bildiren bir sözdür."),
            S("Hangisi bir deyimdir?", ["Etekleri zil çalmak", "Ağaç yaşken eğilir.", "Damlaya damlaya göl olur.", "İşleyen demir ışıldar."], "Deyimler bir durumu anlatır, öğüt vermez."),
            S("Atasözlerinin deyimlerden farkı hangisidir?", ["Öğüt vermesi", "Kalıplaşmış olması", "Mecaz anlam taşıması", "Birden fazla sözcükten oluşması"], "Kalıplaşma ve mecaz ikisinde de olabilir; öğüt atasözüne özgüdür."),
            S("\"Sınav sonucunu görünce ağzı kulaklarına vardı.\" cümlesindeki deyimin anlamı nedir?", ["Çok sevinmek", "Çok üzülmek", "Çok şaşırmak", "Çok korkmak"], "Ağzı kulaklarına varmak, çok sevinmek demektir.")
          ]
        }
      ]
    },
    {
      id: "tr2", ad: "Sözcük Türleri",
      konular: [
        {
          id: "tr2k1", ad: "İsimler (Adlar)",
          ozet: ["İsim: varlıkları ve kavramları karşılayan sözcük", "Özel isim: tek olan varlığın adı, büyük harfle başlar (Ankara, Elif)", "Cins (tür) isim: aynı türden varlıkların ortak adı (şehir, kız)", "Somut isim: beş duyuyla algılanır (masa, ses, koku)", "Soyut isim: duyularla algılanamaz (sevgi, korku, umut)", "Topluluk ismi: birden fazla varlığı anlatır ama tekildir (ordu, sürü, takım)"],
          anlatim: [
            "Varlıkları, kavramları ve durumları karşılayan sözcüklere isim (ad) denir.",
            "Varlıklara verilişine göre isimler ikiye ayrılır. Tek olan varlıklara verilen isimlere özel isim denir ve büyük harfle başlar: Ankara, Karadeniz, Elif, Türkçe. Aynı türden varlıkların ortak adına cins (tür) isim denir: şehir, deniz, kız, dil.",
            "Varlıkların algılanışına göre isimler somut ya da soyut olabilir. Beş duyumuzdan en az biriyle algılanabilen varlıkların adı somut isimdir: masa, su, ses, koku. Duyularla algılanamayan, sadece zihinde var olan kavramların adı soyut isimdir: sevgi, korku, umut, düşünce.",
            "Birden fazla varlığı anlatan ama tekil olan isimlere topluluk ismi denir: ordu, sürü, takım, aile, koro, millet. Sayılarına göre isimler tekil (kalem) ve çoğul (kalemler) olabilir."
          ],
          video: "Pe4g2yKUz2c",
          sorular: [
            S("Hangisi soyut bir isimdir?", ["Sevgi", "Masa", "Ses", "Koku"], "Sevgi duyularla algılanamaz; soyut isimdir. Ses ve koku duyularla algılandığı için somuttur."),
            S("Hangisi bir topluluk ismidir?", ["Ordu", "Asker", "Kalemler", "Öğrenci"], "Ordu birçok askeri anlatır ama tekildir."),
            S("Hangisi özel isimdir?", ["Karadeniz", "deniz", "nehir", "dağ"], "Karadeniz tek olan bir denizin adıdır."),
            S("\"Ses\" sözcüğü için hangisi doğrudur?", ["Somut isimdir.", "Soyut isimdir.", "Özel isimdir.", "Topluluk ismidir."], "Ses kulakla algılandığı için somuttur.")
          ]
        },
        {
          id: "tr2k2", ad: "Sıfatlar (Ön Adlar)",
          ozet: ["Sıfat: ismin önüne gelip onu niteleyen ya da belirten sözcük", "Niteleme sıfatı: nasıl? → kırmızı elbise, uzun yol", "İşaret sıfatı: hangi? → bu kitap, şu ağaç, o ev", "Sayı sıfatı: kaç? → üç kalem, birinci sıra, ikişer elma, yarım ekmek", "Belgisiz sıfat: kesin sayı vermez → bazı, birkaç, her, hiçbir, çok", "Soru sıfatı: hangi, kaç, nasıl → Hangi kitap?"],
          anlatim: [
            "İsimlerin önüne gelerek onların renk, biçim, durum, sayı gibi özelliklerini bildiren sözcüklere sıfat denir. Sıfat ile nitelediği isim birlikte sıfat tamlaması oluşturur: kırmızı elbise, üç kalem.",
            "Varlığın nasıl olduğunu bildiren sıfatlara niteleme sıfatı denir: kırmızı elbise, uzun yol, akıllı çocuk. İsme sorulan 'nasıl?' sorusunun cevabını verir.",
            "Varlığı işaret ederek belirten sıfatlara işaret sıfatı denir: bu kitap, şu ağaç, o ev. Varlığın sayısını, sırasını, bölümünü bildirenler sayı sıfatıdır: üç kalem, birinci sıra, ikişer elma, yarım ekmek. Kesin sayı bildirmeyenler belgisiz sıfattır: bazı öğrenciler, birkaç gün, her sabah, hiçbir soru.",
            "Varlığı soru yoluyla belirtenler soru sıfatıdır: Hangi kitabı okudun? Kaç soru çözdün? Dikkat: 'Bu kitap güzel.' cümlesindeki 'bu' sıfattır çünkü ismin önündedir. 'Bu güzel.' cümlesinde ise 'bu' ismin yerini tuttuğu için zamirdir."
          ],
          video: "FcM_oxZwMDI",
          sorular: [
            S("\"Bu kitap çok güzel.\" cümlesindeki \"bu\" sözcüğü hangi türdendir?", ["İşaret sıfatı", "İşaret zamiri", "Belgisiz sıfat", "Soru sıfatı"], "'Bu' ismin (kitap) önünde onu işaret ediyor; işaret sıfatıdır."),
            S("Hangisinde sıra sayı sıfatı vardır?", ["Yarışmada birinci olan takım ödül aldı.", "Üç kalem aldım.", "Herkese ikişer elma verdik.", "Yarım ekmek yedi."], "'Birinci' sıra bildirir."),
            S("Hangisinde belgisiz sıfat vardır?", ["Bazı öğrenciler geziye katılmadı.", "Kırmızı elbiseyi beğendim.", "Bu kitabı dün aldım.", "Hangi filmi izledin?"], "'Bazı' kesin sayı bildirmez; belgisiz sıfattır."),
            S("\"Akıllı çocuk soruyu hemen çözdü.\" cümlesindeki sıfat hangisidir?", ["akıllı", "çocuk", "soruyu", "hemen"], "'Akıllı', çocuğun nasıl olduğunu bildirir.")
          ]
        },
        {
          id: "tr2k3", ad: "Zamirler (Adıllar)",
          ozet: ["Zamir: ismin yerini tutan sözcük", "Kişi zamiri: ben, sen, o, biz, siz, onlar", "İşaret zamiri: bu, şu, o, bunlar, burası, orası (tek başına kullanılır)", "Belgisiz zamir: herkes, kimse, bazıları, birisi, hepsi", "Soru zamiri: kim, ne, hangisi, kaçı", "\"Bu kitap\" → sıfat · \"Bunu oku\" → zamir"],
          anlatim: [
            "İsimlerin yerini tutan sözcüklere zamir (adıl) denir. Zamirler sayesinde aynı ismi tekrar tekrar söylemekten kurtuluruz.",
            "Kişilerin adı yerine kullanılan zamirlere kişi zamiri denir: ben, sen, o, biz, siz, onlar. Varlıkları işaret yoluyla karşılayan zamirlere işaret zamiri denir: bu, şu, o, bunlar, şunlar, burası, orası.",
            "Varlıkları belirsiz olarak karşılayan zamirlere belgisiz zamir denir: herkes, kimse, bazıları, birisi, hepsi, biri. Varlıkları soru yoluyla karşılayanlar ise soru zamiridir: kim, ne, hangisi, kaçı.",
            "En çok karıştırılan nokta şudur: 'bu, şu, o' sözcükleri bir ismin önünde kullanılırsa sıfat, ismin yerine tek başına kullanılırsa zamirdir. 'Bu ev çok büyük.' → sıfat. 'Bu çok büyük.' → zamir."
          ],
          video: "9WCOf-x2Ock",
          sorular: [
            S("Hangi cümlede işaret zamiri vardır?", ["Bunu dikkatlice oku.", "Bu kitap çok güzel.", "Şu ağacın altında dinlenelim.", "O çocuk sınıfımıza yeni geldi."], "'Bunu' ismin yerini tutuyor; diğerlerinde 'bu, şu, o' bir ismin önündedir."),
            S("Hangisi kişi zamiridir?", ["Biz", "Herkes", "Kim", "Burası"], "Biz, kişilerin yerini tutan bir kişi zamiridir."),
            S("\"Herkes derse zamanında geldi.\" cümlesindeki zamir hangi türdendir?", ["Belgisiz zamir", "Kişi zamiri", "İşaret zamiri", "Soru zamiri"], "'Herkes' kimlerin geldiğini kesin olarak bildirmez."),
            S("\"Kim kapıyı çaldı?\" cümlesindeki \"kim\" sözcüğü hangi türdendir?", ["Soru zamiri", "Soru sıfatı", "Kişi zamiri", "Belgisiz zamir"], "'Kim' bir ismin yerine kullanılmış ve soru soruyor.")
          ]
        },
        {
          id: "tr2k4", ad: "Edat, Bağlaç ve Ünlem",
          ozet: ["Edat (ilgeç): tek başına anlamı yok, cümlede anlam ilişkisi kurar → gibi, için, kadar, göre, beri", "Bağlaç: sözcükleri ve cümleleri birbirine bağlar → ve, ama, fakat, çünkü, veya, ya da", "Ünlem: sevinç, korku, şaşkınlık gibi duyguları anlatır → Eyvah! Yaşasın! Of!", "Bağlaç olan \"de/da\" ayrı yazılır: Ben de geldim."],
          anlatim: [
            "Tek başına anlamı olmayan ama cümlede kullanıldığında sözcükler arasında anlam ilişkisi kuran sözcüklere edat (ilgeç) denir. 'Aslan gibi güçlü', 'Senin için geldim', 'Akşama kadar çalıştı', 'Sabahtan beri yağmur yağıyor' cümlelerindeki 'gibi, için, kadar, beri' birer edattır.",
            "Sözcükleri, söz öbeklerini ya da cümleleri birbirine bağlayan sözcüklere bağlaç denir: ve, ama, fakat, çünkü, veya, ya da, ancak, de. 'Elma ve armut aldım.' 'Çok çalıştı ama kazanamadı.'",
            "Sevinç, acı, korku, şaşkınlık gibi duyguları ya da seslenmeleri anlatan sözcüklere ünlem denir: Eyvah, Yaşasın, Ah, Of, Hey. Ünlemlerden sonra genellikle ünlem işareti konur: 'Eyvah! Otobüsü kaçırdık.'"
          ],
          video: "RDG6wPJJetw",
          sorular: [
            S("\"Aslan gibi güçlüydü.\" cümlesindeki \"gibi\" sözcüğü hangi türdendir?", ["Edat", "Bağlaç", "Ünlem", "Sıfat"], "'Gibi' benzetme ilgisi kuran bir edattır."),
            S("Hangi cümlede bağlaç vardır?", ["Çok çalıştı ama kazanamadı.", "Akşama kadar oynadık.", "Eyvah, otobüsü kaçırdık!", "Senin için çiçek aldım."], "'Ama' iki cümleyi birbirine bağlar."),
            S("Hangisi bir ünlemdir?", ["Yaşasın", "Çünkü", "Göre", "Fakat"], "Yaşasın sevinç bildiren bir ünlemdir."),
            S("Hangi cümlede \"de\" bağlaç olarak kullanılmıştır?", ["Ben de seninle geleceğim.", "Evde kimse yok.", "Okulda oyun oynadık.", "Bahçede çiçekler açtı."], "Bağlaç olan 'de' ayrı yazılır ve 'dahi' anlamı katar.")
          ]
        }
      ]
    },
    {
      id: "tr3", ad: "Sözcükte Yapı",
      konular: [
        {
          id: "tr3k1", ad: "Kök, Yapım Eki ve Çekim Eki",
          ozet: ["Kök: sözcüğün parçalanamayan, anlamlı en küçük kısmı (göz)", "Gövde: köke yapım eki gelmiş hâli (gözlük)", "Yapım eki: yeni bir sözcük türetir, anlamı değiştirir (göz → gözlük → gözlükçü)", "Çekim eki: anlamı değiştirmez, sözcüğü cümleye bağlar (göz → gözler, gözde, gözüm)", "Önce yapım ekleri, sonra çekim ekleri gelir."],
          anlatim: [
            "Bir sözcüğün parçalanamayan, anlamlı en küçük kısmına kök denir. 'Gözlükçü' sözcüğünün kökü 'göz'dür. Kök anlamlı olmalıdır; 'gö' gibi anlamsız bir parça kök olamaz.",
            "Köke eklenerek yeni bir sözcük türeten eklere yapım eki denir. 'Göz' sözcüğüne '-lük' eki gelince 'gözlük' adında yeni bir sözcük oluşur. 'Gözlük'e '-çü' eklenince 'gözlükçü' olur. Yapım eki almış sözcüklere gövde denir.",
            "Sözcüğün anlamını değiştirmeyen, onu cümleye bağlayan eklere çekim eki denir. Çoğul eki (-ler, -lar), iyelik ekleri (-im, -in), hâl ekleri (-de, -den, -e, -i) ve fiillerin aldığı zaman ve kişi ekleri çekim ekidir: kitaplar, evde, kalemim, geldi.",
            "Bir sözcükte önce yapım ekleri, sonra çekim ekleri gelir: göz (kök) + lük (yapım) + çü (yapım) + ler (çekim) = gözlükçüler."
          ],
          video: "X0HmdGzNu5Q",
          sorular: [
            S("\"Gözlükçü\" sözcüğünün kökü hangisidir?", ["göz", "gözlük", "gö", "gözlükçü"], "Parçalanamayan, anlamlı en küçük kısım 'göz'dür."),
            S("Hangi sözcükte yapım eki vardır?", ["kitaplık", "kitaplar", "kitapta", "kitabım"], "'-lık' eki yeni bir sözcük türetmiştir."),
            S("Hangi sözcük yalnızca çekim eki almıştır?", ["okuldan", "tuzsuz", "simitçi", "bilgi"], "'-dan' hâl ekidir, anlamı değiştirmez."),
            S("Yapım ekinin özelliği hangisidir?", ["Yeni bir sözcük türetir.", "Sözcüğü çoğul yapar.", "Anlamı hiç değiştirmez.", "Her zaman sözcüğün sonunda olur."], "Yapım ekleri sözcüğün anlamını değiştirir ve yeni sözcük türetir.")
          ]
        }
      ]
    },
    {
      id: "tr4", ad: "Cümlede ve Metinde Anlam",
      konular: [
        {
          id: "tr4k1", ad: "Cümlede Anlam İlişkileri",
          ozet: ["Sebep-sonuç: Yargı bir nedene dayanır → \"için, -dığı için, -den\" (Yağmur yağdığı için maç ertelendi.)", "Amaç-sonuç: Bir şey bir amaca ulaşmak için yapılır (Kazanmak için çalıştı.)", "Koşul: Bir yargı bir şarta bağlıdır → \"-se/-sa\" (Çalışırsan kazanırsın.)", "Karşılaştırma: İki varlık kıyaslanır → \"daha, en, -den\"", "Sebep-sonuç / amaç-sonuç farkı: \"Neden?\" sor → sebep · \"Ne amaçla?\" sor → amaç"],
          anlatim: [
            "Sebep-sonuç cümlelerinde bir yargının gerçekleşme nedeni bildirilir. 'Yağmur yağdığı için maç ertelendi.' Maçın ertelenme sebebi yağmurdur.",
            "Amaç-sonuç cümlelerinde bir eylemin hangi amaçla yapıldığı bildirilir. 'Sınavı kazanmak için çok çalıştı.' Çalışmanın amacı sınavı kazanmaktır. Sebep gerçekleşmiş bir durumdur; amaç ise ulaşılmak istenen bir hedeftir.",
            "Koşul (şart) cümlelerinde bir yargının gerçekleşmesi bir şarta bağlıdır ve genellikle '-se, -sa' eki kullanılır: 'Erken kalkarsan kahvaltıya yetişirsin.'",
            "Karşılaştırma cümlelerinde iki ya da daha fazla varlık, olay ya da durum birbiriyle kıyaslanır: 'Bu yıl kış geçen yıldan daha soğuk geçti.'"
          ],
          video: "DqFTq5gJLTs",
          sorular: [
            S("Hangi cümlede amaç-sonuç ilişkisi vardır?", ["Otobüse yetişmek için koştu.", "Yağmur yağdığı için ıslandık.", "Hasta olduğu için okula gelmedi.", "Geç kaldığından ceza aldı."], "Koşmanın amacı otobüse yetişmektir."),
            S("\"Çalışırsan başarılı olursun.\" cümlesinde hangi anlam ilişkisi vardır?", ["Koşul", "Sebep-sonuç", "Amaç-sonuç", "Karşılaştırma"], "Başarı, çalışma şartına bağlanmıştır."),
            S("Hangi cümlede karşılaştırma yapılmıştır?", ["Kedi, köpekten daha sessizdir.", "Kitap okumak için kütüphaneye gitti.", "Yol buzlu olduğundan kaza oldu.", "Ödevini bitirirsen oyun oynayabilirsin."], "Kedi ile köpek sessizlik bakımından karşılaştırılmıştır."),
            S("Hangi cümlede sebep-sonuç ilişkisi vardır?", ["Hasta olduğu için okula gelmedi.", "Sağlıklı olmak için spor yapıyor.", "Erken kalkarsan yetişirsin.", "Ali, kardeşinden daha uzun."], "Okula gelmemenin sebebi hastalıktır.")
          ]
        },
        {
          id: "tr4k2", ad: "Öznel ve Nesnel Yargılar",
          ozet: ["Nesnel yargı: kanıtlanabilir, kişiden kişiye değişmez (Su 100 °C'de kaynar.)", "Öznel yargı: kişisel görüş, duygu ve beğeni içerir (Bu film çok sıkıcıydı.)", "İpucu: güzel, en iyi, sıkıcı, harika, bence gibi sözcükler genellikle öznellik katar."],
          anlatim: [
            "Doğruluğu kanıtlanabilen, kişiden kişiye değişmeyen yargılara nesnel yargı denir. 'Türkiye'nin başkenti Ankara'dır.' ve 'Bir yılda 12 ay vardır.' nesnel yargılardır; herkes için aynıdır ve kanıtlanabilir.",
            "Kişinin kendi görüşünü, duygusunu ya da beğenisini yansıtan, kanıtlanamayan yargılara öznel yargı denir. 'Bu film çok sıkıcıydı.' cümlesi kişiden kişiye değişebilir; başka biri filmi eğlenceli bulabilir.",
            "Güzel, çirkin, harika, sıkıcı, en iyi, bence, bana göre gibi değerlendirme bildiren sözcükler cümleye genellikle öznellik katar."
          ],
          video: "DqFTq5gJLTs",
          sorular: [
            S("Hangisi nesnel bir yargıdır?", ["Bir yılda 12 ay vardır.", "Kış en güzel mevsimdir.", "Bu kitap çok sıkıcı.", "Matematik en zevkli derstir."], "Bir yılın 12 ay olduğu kanıtlanabilir."),
            S("Hangisi öznel bir yargıdır?", ["Bu yemek harika olmuş.", "Su 100 °C'de kaynar.", "Atatürk 1881'de doğdu.", "Okulumuzda 24 sınıf var."], "'Harika' kişisel bir değerlendirmedir."),
            S("Nesnel yargının özelliği hangisidir?", ["Kanıtlanabilir.", "Kişiden kişiye değişir.", "Duygu bildirir.", "Kişisel beğeni içerir."], "Nesnel yargılar kanıtlanabilir ve herkes için aynıdır.")
          ]
        },
        {
          id: "tr4k3", ad: "Paragrafta Konu ve Ana Düşünce",
          ozet: ["Konu: Metinde neden söz ediliyor? (genelde bir kavram: kitap okuma)", "Ana düşünce: Yazar okura ne iletmek istiyor? (Kitap okumak insanı geliştirir.)", "Ana düşünce genellikle paragrafın ilk ya da son cümlesindedir.", "Yardımcı düşünceler ana düşünceyi destekler, açıklar.", "Başlık, konuyu kısaca yansıtır."],
          anlatim: [
            "Paragrafın konusu, metinde üzerinde durulan, kendisinden söz edilen şeydir. Konuyu bulmak için 'Bu metinde neden bahsediliyor?' sorusunu sorarız. Konu çoğu zaman tek bir kavramla ya da kısa bir söz öbeğiyle anlatılabilir: 'kitap okumanın faydaları' gibi.",
            "Ana düşünce, yazarın okura vermek istediği temel mesajdır. 'Yazar bu metinle bize ne anlatmak istiyor?' sorusunun cevabıdır ve bir yargı bildirir: 'Kitap okumak insanın dünyasını genişletir.'",
            "Ana düşünce genellikle paragrafın ilk ya da son cümlesinde yer alır. Paragraftaki diğer cümleler ana düşünceyi açıklayan, örneklendiren yardımcı düşüncelerdir.",
            "Soruları çözerken seçeneklerdeki ifadenin metnin tamamını kapsayıp kapsamadığına bakmalıyız. Metnin sadece bir cümlesinde geçen bilgi ana düşünce olamaz."
          ],
          video: "PrTD445CKoE",
          sorular: [
            S("\"Kitap okumak insana yeni dünyaların kapısını açar. Okuyan kişi farklı hayatları tanır, kelime hazinesi zenginleşir. Bu yüzden her gün biraz kitap okumalıyız.\" Bu paragrafın ana düşüncesi nedir?", ["Kitap okumak insanı geliştirir, her gün okumalıyız.", "Kitaplar pahalıdır.", "Kelime hazinesi okulda gelişir.", "Herkes aynı kitabı okumalıdır."], "Paragrafın tamamı okumanın faydasını ve her gün okunması gerektiğini anlatır."),
            S("\"Ağaçlar havayı temizler, toprağı tutar ve pek çok canlıya yuva olur. Yazın gölgesinde serinleriz, meyvelerini yeriz. Ağaçları korumak hepimizin görevidir.\" Bu paragrafın konusu nedir?", ["Ağaçların önemi", "Meyvelerin çeşitleri", "Yaz tatili", "Toprağın yapısı"], "Paragrafta ağaçların faydalarından söz edilir."),
            S("\"Düzenli spor yapan çocuklar daha sağlıklı büyür. Spor kasları güçlendirir, uykuyu düzenler ve arkadaşlık bağlarını kuvvetlendirir.\" Bu paragrafta asıl anlatılmak istenen nedir?", ["Spor yapmanın çocuklara birçok faydası vardır.", "Uyku çok önemlidir.", "Arkadaşlarla oyun oynamalıyız.", "Kaslar yalnızca sporla güçlenir."], "Diğer seçenekler paragrafın sadece bir bölümünü yansıtır."),
            S("\"Bir zamanlar insanlar mektuplarla haberleşirdi. Bir mektubun ulaşması günler sürerdi. Bugün ise telefon ve internet sayesinde saniyeler içinde haberleşebiliyoruz.\" Bu paragrafın konusu nedir?", ["Haberleşmenin zaman içindeki değişimi", "Mektup yazma kuralları", "İnternetin zararları", "Telefonların fiyatları"], "Paragraf geçmişte ve bugün nasıl haberleşildiğini anlatır."),
            S("Paragrafta ana düşünce genellikle nerede bulunur?", ["İlk ya da son cümlede", "Her zaman ortadaki cümlede", "Sadece başlıkta", "Hiçbir cümlede"], "Ana düşünce çoğunlukla giriş ya da sonuç cümlesindedir."),
            S("\"Su, canlıların yaşaması için vazgeçilmezdir. Ancak dünyadaki suyun çok azı içilebilir durumdadır. Musluğu açık bırakmamak, kısa duş almak gibi küçük önlemlerle suyu koruyabiliriz.\" Bu paragrafın ana düşüncesi nedir?", ["Su değerlidir, onu tasarruflu kullanmalıyız.", "Dünyadaki suyun hepsi içilebilir.", "Duş almak sağlıklıdır.", "Muslukları sık sık değiştirmeliyiz."], "Paragraf suyun değerini ve korunması gerektiğini anlatır."),
            S("\"Arılar çiçekten çiçeğe konarak bitkilerin tozlaşmasını sağlar. Arılar olmasaydı birçok meyve ve sebze yetişmezdi. Bu yüzden arıların korunması çok önemlidir.\" Bu paragraftan çıkarılabilecek en kapsamlı yargı hangisidir?", ["Arılar doğa ve insanlar için çok önemlidir, korunmalıdır.", "Arılar bal yapar.", "Bütün çiçekler aynı renktedir.", "Meyveler sadece yazın yetişir."], "Paragrafın bütünü arıların önemini ve korunmasını vurgular."),
            S("Bir paragrafa en uygun başlık hangisini yansıtmalıdır?", ["Paragrafın konusunu", "Paragrafın son sözcüğünü", "Yazarın adını", "Paragraftaki bir sayıyı"], "Başlık konuyu kısaca özetler.")
          ]
        },
        {
          id: "tr4k4", ad: "Hikâye Unsurları",
          ozet: ["Olay: hikâyede yaşanan, anlatılan durum", "Kişiler (karakterler): olayı yaşayan insanlar ya da hayvanlar", "Yer (mekân): olayın geçtiği yer", "Zaman: olayın geçtiği zaman", "Anlatıcı: hikâyeyi anlatan kişi (1. kişi \"ben\" / 3. kişi \"o\")", "Giriş → gelişme → sonuç"],
          anlatim: [
            "Hikâye, gerçek ya da gerçeğe yakın olayların anlatıldığı yazı türüdür. Her hikâyede dört temel unsur bulunur: olay, kişiler, yer ve zaman.",
            "Olay hikâyede yaşanan durumdur. Kişiler olayı yaşayan insanlar ya da konuşturulan hayvan ve varlıklardır. Yer (mekân), olayın geçtiği yerdir: okul, köy, park gibi. Zaman ise olayın geçtiği zamandır: bir yaz sabahı, geçen kış, akşamüstü gibi.",
            "Hikâyeyi anlatan kişiye anlatıcı denir. Anlatıcı olayın içindeyse 'ben' diye anlatır (birinci kişi anlatıcı). Olayın dışındaysa 'o' diye anlatır (üçüncü kişi anlatıcı).",
            "Hikâyeler genellikle giriş, gelişme ve sonuç bölümlerinden oluşur. Girişte kişiler ve yer tanıtılır, gelişmede olay ilerler, sonuçta olay çözüme kavuşur."
          ],
          video: "ivEcQqGxebM",
          sorular: [
            S("Hangisi hikâyenin temel unsurlarından biri değildir?", ["Kafiye", "Olay", "Yer", "Zaman"], "Kafiye şiirin özelliğidir."),
            S("\"Geçen yaz dedemin köyüne gittim. Orada ilk kez bir buzağının doğumunu gördüm.\" Bu metnin anlatıcısı hangisidir?", ["Birinci kişi anlatıcı (ben)", "Üçüncü kişi anlatıcı (o)", "Anlatıcı yok", "Dede"], "Anlatıcı 'gittim, gördüm' diyerek olayın içinden anlatıyor."),
            S("Hikâyede olayın geçtiği yere ne denir?", ["Mekân", "Zaman", "Olay", "Anlatıcı"], "Yer unsuruna mekân da denir."),
            S("Hikâyenin hangi bölümünde olay çözüme kavuşur?", ["Sonuç", "Giriş", "Gelişme", "Başlık"], "Sonuç bölümünde olay tamamlanır.")
          ]
        }
      ]
    },
    {
      id: "tr5", ad: "Söz Sanatları",
      konular: [
        {
          id: "tr5k1", ad: "Benzetme, Kişileştirme, Konuşturma ve Abartma",
          ozet: ["Benzetme: zayıf olan, güçlü olana benzetilir → \"gibi, kadar\" (Aslan gibi cesur)", "Kişileştirme: insan dışındaki varlıklara insan özelliği verilir (Güneş bize gülümsüyordu.)", "Konuşturma: insan dışındaki varlıklar konuşturulur (\"Beni koparma!\" dedi gül.)", "Abartma: bir durum olduğundan çok büyük ya da küçük gösterilir (Sana bin kere söyledim.)"],
          anlatim: [
            "Benzetme (teşbih), aralarında ortak bir özellik bulunan iki varlıktan zayıf olanın güçlü olana benzetilmesidir. Genellikle 'gibi, kadar' sözcükleri kullanılır: 'Arkadaşım aslan gibi cesurdur.' Burada arkadaş cesaret bakımından aslana benzetilmiştir.",
            "Kişileştirme (teşhis), insan dışındaki varlıklara gülmek, ağlamak, düşünmek gibi insana ait özellikler verilmesidir: 'Güneş bize gülümsüyordu.' 'Ağaçlar soğuktan titriyordu.'",
            "Konuşturma (intak), insan dışındaki varlıkların konuşturulmasıdır: 'Beni neden kopardın?' dedi gül. Konuşturulan her varlık aynı zamanda kişileştirilmiş olur.",
            "Abartma (mübalağa), bir durumun olduğundan çok daha büyük ya da küçük gösterilmesidir: 'Sana bin kere söyledim.' 'Öyle acıktım ki bir fil yiyebilirim.'"
          ],
          video: "2fXbJcx-2w0",
          sorular: [
            S("\"Kar, pamuk gibi yağıyordu.\" cümlesinde hangi söz sanatı vardır?", ["Benzetme", "Kişileştirme", "Konuşturma", "Abartma"], "Kar, beyazlık ve yumuşaklık bakımından pamuğa benzetilmiştir."),
            S("\"Rüzgâr öfkeyle pencereleri dövüyordu.\" cümlesinde hangi söz sanatı vardır?", ["Kişileştirme", "Benzetme", "Abartma", "Konuşturma"], "Rüzgâra öfkelenme ve dövme gibi insan özellikleri verilmiştir."),
            S("Hangi cümlede abartma vardır?", ["Kahkahası dağları inletti.", "Gözleri deniz gibi maviydi.", "Çiçekler sabah uyandı.", "Kitap okumayı severim."], "Bir kahkahanın dağları inletmesi durumu olduğundan büyük gösterir."),
            S("Hangi cümlede konuşturma sanatı vardır?", ["Ağaç, \"Gölgemde dinlen.\" dedi yolcuya.", "Ağaçlar soğuktan titriyordu.", "Sesi bülbül gibi güzeldi.", "Sana bin kere söyledim."], "Ağaç konuşturulmuştur.")
          ]
        }
      ]
    },
    {
      id: "tr6", ad: "Yazım ve Noktalama",
      konular: [
        {
          id: "tr6k1", ad: "Yazım Kuralları",
          ozet: ["Bağlaç olan \"de/da\" ayrı yazılır: Ben de geldim. (Çıkarınca anlam bozulmaz.)", "Hâl eki olan \"-de/-da\" bitişik yazılır: Evde kaldım.", "Bağlaç olan \"ki\" ayrı yazılır: Duydum ki gelmişsin.", "\"-ki\" eki bitişik yazılır: Okuldaki, yarınki", "Soru eki \"mi\" ayrı yazılır: Geldin mi?", "Özel isimler büyük harfle başlar, ekleri kesme işaretiyle ayrılır: Ankara'ya"],
          anlatim: [
            "Bağlaç olan 'de, da' her zaman ayrı yazılır. Cümleden çıkarıldığında anlam daralır ama cümle bozulmaz: 'Ben de geleceğim.' Hâl eki olan '-de, -da' ise bulunma bildirir ve bitişik yazılır: 'Evde kitap okudum.' Bunu ayırt etmek için 'de'yi cümleden çıkarıp okuyabilirsin.",
            "Bağlaç olan 'ki' ayrı yazılır: 'Duydum ki yarın tatil olacakmış.' Sıfat yapan '-ki' eki ise bitişik yazılır: 'okuldaki kitaplar', 'yarınki maç'.",
            "Soru eki 'mı, mi, mu, mü' her zaman ayrı yazılır ama kendinden önceki sözcüğe uyar: 'Geldin mi?', 'Okudun mu?', 'Sen de mi geliyorsun?'",
            "Özel isimler büyük harfle başlar ve onlara gelen ekler kesme işaretiyle ayrılır: 'Ankara'ya', 'Ayşe'nin'. Bazı sözcüklerin doğru yazılışına da dikkat etmeliyiz: herkes (herkez değil), yalnız (yanlız değil), bir kez, birkaç, hiçbir."
          ],
          video: "msVQhmGjP6A",
          sorular: [
            S("Hangi cümlede yazım yanlışı vardır?", ["Bende seninle geleceğim.", "Evde kimse yoktu.", "Sen de mi geliyorsun?", "Okuldaki kitaplar yenilendi."], "'Ben de' bağlaç olduğu için ayrı yazılmalıdır."),
            S("Hangi sözcük doğru yazılmıştır?", ["herkes", "herkez", "yanlız", "birkez"], "Doğru yazılışlar: herkes, yalnız, bir kez."),
            S("\"Kitabı okudun___?\" cümlesinde boşluğa gelecek soru eki nasıl yazılmalıdır?", ["Ayrı: okudun mu", "Bitişik: okudunmu", "Kesme işaretiyle: okudun'mu", "Büyük harfle: okudun Mu"], "Soru eki her zaman ayrı yazılır."),
            S("Hangi cümlede \"de\" hâl eki olarak kullanılmıştır?", ["Okulda yeni bir kütüphane açıldı.", "Ali de bizimle gelecek.", "Sen de haklısın.", "Bize de anlatır mısın?"], "'Okulda' bulunma bildirir; hâl ekidir ve bitişik yazılır.")
          ]
        },
        {
          id: "tr6k2", ad: "Noktalama İşaretleri",
          ozet: ["Nokta (.): tamamlanmış cümlenin sonuna, kısaltmalardan sonra, saat ve dakika arasına (10.30)", "Virgül (,): eş görevli sözcükleri ayırır (elma, armut ve muz)", "Soru işareti (?): soru cümlelerinin sonuna", "Ünlem işareti (!): sevinç, korku, şaşkınlık bildiren cümle ve ünlemlerden sonra", "İki nokta (:): açıklama ve örnekten önce, konuşma çizgisi/tırnaktan önce", "Kesme işareti ('): özel isimlere gelen ekleri ayırır (Ankara'ya)"],
          anlatim: [
            "Nokta, tamamlanmış cümlelerin sonuna konur. Kısaltmalardan sonra (Dr., Prof.) ve saat ile dakika arasında da kullanılır: 'Saat 10.30'da buluşalım.'",
            "Virgül, eş görevli sözcükleri ve söz öbeklerini birbirinden ayırır: 'Pazardan elma, armut ve muz aldım.' Hitap sözlerinden sonra da kullanılır: 'Arkadaşlar, yarın gezi var.'",
            "Soru işareti soru bildiren cümlelerin sonuna konur: 'Yarın gelecek misin?' Ünlem işareti ise sevinç, korku, şaşkınlık gibi duyguları anlatan cümlelerden ve ünlemlerden sonra konur: 'Eyvah! Geç kaldık.'",
            "İki nokta, kendisinden sonra açıklama ya da örnek gelecek cümlelerin sonuna konur: 'Çantama şunları koydum: kalem, defter, silgi.' Kesme işareti ise özel isimlere gelen ekleri ayırır: 'İstanbul'a gittik.'"
          ],
          video: "AhJJ21IWGA8",
          sorular: [
            S("\"Pazardan elma( ) armut ve muz aldım.\" cümlesinde ayraç içine hangi işaret gelmelidir?", ["Virgül (,)", "Nokta (.)", "Soru işareti (?)", "İki nokta (:)"], "Eş görevli sözcükler virgülle ayrılır."),
            S("Saat ve dakika arasında hangi noktalama işareti kullanılır?", ["Nokta (.)", "Virgül (,)", "İki nokta (:)", "Kesme işareti (')"], "Türkçede saat ve dakika noktayla ayrılır: 10.30."),
            S("Hangi cümlede kesme işareti doğru kullanılmıştır?", ["Yazın Bursa'ya gittik.", "Kitap'ı okudum.", "Okul'a geç kaldım.", "Arkadaşım'la buluştum."], "Kesme işareti yalnızca özel isimlere gelen ekleri ayırır."),
            S("\"Çantama şunları koydum( ) kalem, defter ve silgi.\" cümlesinde ayraç içine hangi işaret gelmelidir?", ["İki nokta (:)", "Virgül (,)", "Nokta (.)", "Ünlem işareti (!)"], "Açıklamadan önce iki nokta konur.")
          ]
        }
      ]
    }
  ]
};
})();
