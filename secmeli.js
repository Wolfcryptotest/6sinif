window.ICERIK = window.ICERIK || {};
// Ortaokul SEÇMELİ dersler (temel üniteler; 5, 7, 8. sınıfta Siyer secmeli-siyer.js ile değiştirilir, ek üniteler secmeli-ortak*.js) — anahtarlar ders programındaki seçmeli anahtarlarıyla aynıdır (program.js SECMELI).
// Ana sayfada yalnızca ders programına yazılmış seçmeliler görünür. Ünite adları MEB öğretim programlarından alınmıştır.
// Her derste "kaynaklar": resmî MEB / EBA bağlantıları. Sorularda doğru cevap ilk şıktır; uygulama şıkları karıştırır.
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
const MEBI = { ad: "MEBİ — MEB'in ücretsiz bireysel öğrenme platformu", url: "https://mebi.eba.gov.tr" };
const EBA = { ad: "EBA — Konu anlatım videoları ve ders kitapları", url: "https://www.eba.gov.tr" };
const program = (ad, url) => ({ ad: "MEB öğretim programı: " + ad, url });

/* ───────────── MASAL VE DESTANLARIMIZ ───────────── */
window.ICERIK.s_masal = {
  ad: "Masal ve Destanlarımız", ikon: "🐉", renk: "#7c2d12", secmeli: true,
  kaynaklar: [program("Masal ve Destanlarımız", "https://tymm.meb.gov.tr/ogretim-programlari/ortaokul-masal-ve-destanlarimiz-dersi/18"), EBA, MEBI],
  uniteler: [
    { id: "sm1", ad: "Masallar", konular: [
      { id: "sm1k1", ad: "Masal Nedir? Özellikleri",
        ozet: ["Masal: olağanüstü olayların anlatıldığı sözlü halk anlatısı", "Anonimdir: yazarı belli değildir, dilden dile aktarılır", "Yer ve zaman belirsizdir: 'Evvel zaman içinde…'", "Olağanüstü varlıklar: dev, peri, cin, konuşan hayvanlar", "Kalıp sözler vardır (tekerlemeler)", "İyiler ödüllendirilir, kötüler cezalandırılır; bir öğüt verir"],
        anlatim: [
          "Masallar, halkın hayal gücüyle oluşmuş, kuşaktan kuşağa sözlü olarak aktarılan anlatılardır. Kimin yazdığı bilinmez; bu yüzden anonimdir. Her anlatan masala biraz kendinden katar, bu nedenle aynı masalın farklı yörelerde farklı biçimleri olabilir.",
          "Masallarda olaylar 'Evvel zaman içinde, kalbur saman içinde' gibi belirsiz bir zamanda ve 'Kaf Dağı'nın ardında' gibi belirsiz bir yerde geçer. Devler, periler, konuşan hayvanlar ve sihirli eşyalar gibi olağanüstü unsurlar bulunur.",
          "Masal kahramanları genellikle iyi–kötü, zengin–yoksul, akıllı–kurnaz gibi karşıtlıklarla verilir. Sonunda iyilik kazanır ve dinleyene bir ders (öğüt) verilir. Keloğlan masalları bunun en bilinen örnekleridir."
        ],
        video: "ST_zHC-ZzMI",
        sorular: [
          S("Masalların yazarının belli olmamasına ne denir?", ["Anonimlik", "Olağanüstülük", "Öğüt", "Tekerleme"], "Sözlü kültürden gelen, yazarı bilinmeyen ürünler anonimdir."),
          S("'Evvel zaman içinde, kalbur saman içinde' sözü masalın hangi özelliğini gösterir?", ["Zamanın belirsiz olmasını", "Kahramanın adını", "Masalın sonunu", "Olayın gerçek olduğunu"], "Masallarda zaman ve mekân belirsizdir."),
          S("Aşağıdakilerden hangisi masallarda sık görülen olağanüstü bir unsurdur?", ["Konuşan hayvanlar", "Gerçek tarih bilgisi", "Bilimsel deney", "Gazete haberi"], "Dev, peri, konuşan hayvan gibi varlıklar olağanüstü unsurlardır."),
          S("Masalların sonunda genellikle ne olur?", ["İyiler ödüllendirilir, kötüler cezalandırılır", "Kötüler kazanır", "Olay yarım kalır", "Kahraman ortadan kaybolur"], "Masallar iyiliği ödüllendirerek öğüt verir."),
          S("Türk masallarının en bilinen kahramanı kimdir?", ["Keloğlan", "Dede Korkut", "Oğuz Kağan", "Battal Gazi"], "Keloğlan, Türk masallarının en sevilen kahramanıdır.")
        ] },
      { id: "sm1k2", ad: "Masalın Yapısı",
        ozet: ["Döşeme: masalın başındaki tekerleme, dinleyiciyi hazırlar", "Serim: kahramanlar, yer ve durum tanıtılır", "Düğüm: sorun ortaya çıkar, merak artar", "Çözüm: sorun çözülür, iyiler kazanır", "Dilek: 'Onlar ermiş muradına…' kalıbıyla biten bölüm"],
        anlatim: [
          "Masallar belli bir düzenle anlatılır. İlk bölüm döşemedir: 'Bir varmış bir yokmuş…' gibi tekerlemelerle dinleyicinin dikkati çekilir. Ardından serim bölümünde kahramanlar, yer ve başlangıç durumu tanıtılır.",
          "Düğüm bölümünde kahramanın karşısına bir sorun çıkar: bir dev yolu keser, padişahın kızı kaybolur ya da bir zorluk aşılmalıdır. Masalın en heyecanlı yeri burasıdır.",
          "Çözüm bölümünde sorun aşılır; kahraman zekâsı, iyiliği ya da sihirli bir yardımcı sayesinde başarıya ulaşır. Son bölüm olan dilekte 'Onlar ermiş muradına, biz çıkalım kerevetine' gibi kalıp sözlerle masal bitirilir."
        ],
        video: "dZAxVwEw9Z0",
        sorular: [
          S("Masalın başında dinleyiciyi hazırlayan tekerleme bölümüne ne ad verilir?", ["Döşeme", "Düğüm", "Çözüm", "Dilek"], "Döşeme, masalın giriş tekerlemesidir."),
          S("Sorunun ortaya çıktığı, merakın en çok arttığı bölüm hangisidir?", ["Düğüm", "Serim", "Döşeme", "Dilek"], "Düğüm, olayın karıştığı bölümdür."),
          S("'Onlar ermiş muradına, biz çıkalım kerevetine' sözü hangi bölümdedir?", ["Dilek", "Serim", "Düğüm", "Döşeme"], "Masal bu kalıp sözle, dilek bölümünde biter."),
          S("Kahramanların, yerin ve başlangıç durumunun tanıtıldığı bölüm hangisidir?", ["Serim", "Çözüm", "Dilek", "Düğüm"], "Serim, tanıtım bölümüdür."),
          S("Masal bölümlerinin doğru sırası hangisidir?", ["Döşeme – Serim – Düğüm – Çözüm – Dilek", "Serim – Döşeme – Çözüm – Düğüm – Dilek", "Dilek – Düğüm – Serim – Çözüm – Döşeme", "Düğüm – Serim – Döşeme – Dilek – Çözüm"], "Masal döşemeyle başlar, dilekle biter.")
        ] }
    ] },
    { id: "sm2", ad: "Doğal Destanlar", konular: [
      { id: "sm2k1", ad: "Destan Nedir? Doğal Destanlar",
        ozet: ["Destan: bir milletin hayatını etkileyen büyük olayların anlatısı", "Doğal destan: halkın ortak ürünüdür, anonimdir", "Konuları: göç, savaş, kahramanlık, yaratılış", "Olağanüstü kahramanlar ve olaylar vardır", "Türk destanları: Oğuz Kağan, Ergenekon, Bozkurt, Göç", "Yapma destan: yazarı belli olan, sanatçının yazdığı destan"],
        anlatim: [
          "Destanlar; savaş, göç, kıtlık, yeni bir yurt bulma gibi bir milletin tarihini derinden etkileyen olayları anlatan uzun anlatılardır. Kahramanları olağanüstü güçlere sahiptir ve milletin değerlerini temsil eder.",
          "Doğal destanlar halkın ortak ürünüdür; yazarları belli değildir ve uzun yıllar sözlü olarak yaşamıştır. Daha sonra yazıya geçirilmişlerdir. Yapma (yapay) destanlar ise belli bir şairin, doğal destan özelliklerini örnek alarak yazdığı eserlerdir.",
          "Oğuz Kağan Destanı'nda Oğuz Kağan doğduktan sonra annesinin sütünü bir kez emer, kısa sürede büyür ve halkını korkutan canavarı öldürür. Ergenekon Destanı'nda ise dağlarla çevrili bir yerde 400 yıl yaşayan Türkler, demir dağı eriterek bozkurtun rehberliğinde dışarı çıkar."
        ],
        video: "uCwBqFD2RcQ",
        sorular: [
          S("Halkın ortak ürünü olan, yazarı belli olmayan destanlara ne denir?", ["Doğal destan", "Yapma destan", "Masal", "Fabl"], "Doğal destanlar anonimdir."),
          S("Destanların konusu genellikle nedir?", ["Bir milletin hayatını etkileyen büyük olaylar", "Bir kişinin günlük işleri", "Bilimsel buluşlar", "Yemek tarifleri"], "Destanlar göç, savaş gibi büyük olayları anlatır."),
          S("Ergenekon Destanı'nda Türkler dağları nasıl aşar?", ["Demir dağı eriterek", "Gemiyle", "Uçarak", "Tünel kazarak saklanarak"], "Demir dağ eritilir, bozkurt yol gösterir."),
          S("Aşağıdakilerden hangisi bir Türk destanıdır?", ["Oğuz Kağan", "Pinokyo", "Kırmızı Başlıklı Kız", "Robinson Crusoe"], "Oğuz Kağan bir Türk destanıdır."),
          S("Yapma destan ile doğal destan arasındaki temel fark nedir?", ["Yapma destanın yazarı bellidir", "Yapma destan çok kısadır", "Doğal destan yazılı doğar", "Yapma destanda kahraman olmaz"], "Yapma destanı belli bir şair yazar.")
        ] },
      { id: "sm2k2", ad: "Oğuz Kağan ve Ergenekon",
        ozet: ["Oğuz Kağan: Türklerin efsanevi atası", "Canavarı öldürerek halkını kurtarır", "Gök kurt ordusuna yol gösterir", "Ergenekon: Türklerin dağlarla çevrili yurdu", "400 yıl sonra demir dağ eritilir", "Ergenekon'dan çıkış günü bayram (Nevruz) olarak kutlanır"],
        anlatim: [
          "Oğuz Kağan Destanı, Türklerin efsanevi atası Oğuz Kağan'ın doğumunu, kahramanlıklarını ve ülkesini nasıl genişlettiğini anlatır. Oğuz Kağan çocukken halkı korkutan bir canavarı öldürür. Seferlerinde ordusuna gökten inen bir gök kurt yol gösterir.",
          "Ergenekon Destanı'nda düşmana yenilen Türkler, dağlarla çevrili Ergenekon'a sığınır. Orada çoğalarak 400 yıl yaşarlar. Dışarı çıkmak istediklerinde bir demirci, demir dağı eritmeyi önerir; ateş yakılır, dağ erir ve bir bozkurt Türklere yol gösterir.",
          "Bu destanlarda kurt, Türkler için yol gösterici ve kutsal bir semboldür. Destanlar; birlik, cesaret ve vatan sevgisi gibi değerleri öne çıkarır."
        ],
        video: "7QlYM0CXpvI",
        sorular: [
          S("Türk destanlarında yol gösteren kutsal hayvan hangisidir?", ["Kurt (bozkurt)", "Aslan", "Kartal", "At"], "Bozkurt, Türk destanlarında yol göstericidir."),
          S("Ergenekon'da Türkler kaç yıl yaşar?", ["400", "40", "100", "1000"], "Destana göre 400 yıl yaşarlar."),
          S("Oğuz Kağan çocukken halkı için ne yapar?", ["Canavarı öldürür", "Şehir kurar", "Gemi yapar", "Kitap yazar"], "Halkını korkutan canavarı öldürür."),
          S("Ergenekon'dan çıkış hangi bayramla ilişkilendirilir?", ["Nevruz", "Ramazan Bayramı", "Cumhuriyet Bayramı", "Zafer Bayramı"], "Ergenekon'dan çıkış Nevruz olarak kutlanır."),
          S("Destanlar en çok hangi değeri öne çıkarır?", ["Birlik ve vatan sevgisi", "Bencillik", "Tembellik", "Korkaklık"], "Destanlar birlik, cesaret ve vatan sevgisini işler.")
        ] }
    ] },
    { id: "sm3", ad: "Yapma Destanlar", konular: [
      { id: "sm3k1", ad: "Yapma Destan ve Örnekleri",
        ozet: ["Yapma destan: belli bir sanatçının yazdığı destan", "Doğal destanlardan esinlenir", "Millî duyguları ve kahramanlığı işler", "Örnek: Çanakkale Şehitlerine (M. Akif Ersoy)", "Örnek: Kurtuluş Savaşı Destanı (N. Hikmet)", "İlhan Kaynağı: tarihî olaylar"],
        anlatim: [
          "Yapma (yapay) destanlar, doğal destanların özelliklerini örnek alarak belli bir sanatçının yazdığı eserlerdir. Yazarı bilindiği için anonim değildir. Genellikle yakın tarihteki büyük olayları, savaşları ve kahramanlıkları anlatır.",
          "Türk edebiyatında Çanakkale Savaşı ve Kurtuluş Savaşı gibi olaylar yapma destanlara konu olmuştur. Mehmet Akif Ersoy'un 'Çanakkale Şehitlerine' şiiri destansı bir anlatımla yazılmıştır.",
          "Dünya edebiyatında da yapma destanlar vardır; örneğin Fin halkının destanı Kalevala sonradan derlenip düzenlenmiştir. Yapma destanlarda olaylar, doğal destanlardaki kadar olağanüstü olmayabilir."
        ],
        video: "uCwBqFD2RcQ",
        sorular: [
          S("Yapma destanı doğal destandan ayıran özellik hangisidir?", ["Yazarının belli olması", "Kahraman bulunması", "Savaş anlatması", "Uzun olması"], "Yapma destanların yazarı bellidir."),
          S("'Çanakkale Şehitlerine' şiirinin şairi kimdir?", ["Mehmet Akif Ersoy", "Yunus Emre", "Dede Korkut", "Karacaoğlan"], "Şiir Mehmet Akif Ersoy'a aittir."),
          S("Yapma destanlar genellikle neden esinlenir?", ["Doğal destanlardan ve tarihî olaylardan", "Bilim kitaplarından", "Reklamlardan", "Yemek kitaplarından"], "Doğal destan özelliklerini örnek alır, tarihî olayları işler."),
          S("Aşağıdakilerden hangisi yapma destana konu olmuş bir olaydır?", ["Kurtuluş Savaşı", "Bir doğum günü", "Okul gezisi", "Pazar alışverişi"], "Kurtuluş Savaşı destansı eserlere konu olmuştur."),
          S("Yapma destanlar hangi duyguyu güçlendirmeyi amaçlar?", ["Millî duygular", "Kıskançlık", "Öfke", "Korku"], "Millî ve kahramanlık duygularını işler.")
        ] }
    ] }
  ]
};

/* ───────────── PEYGAMBERİMİZİN HAYATI (SİYER) ───────────── */
window.ICERIK.s_siyer = {
  ad: "Peygamberimizin Hayatı", ikon: "🕋", renk: "#0f766e", secmeli: true,
  kaynaklar: [program("Peygamberimizin Hayatı", "https://tymm.meb.gov.tr/ogretim-programlari/peygamberimizin-hayati-dersi-temel-egitim/7"), EBA, MEBI],
  uniteler: [
    { id: "sp1", ad: "Gençlik Yıllarında Peygamberimiz", konular: [
      { id: "sp1k1", ad: "Gençliğinde Ahlakı ve Hira'da Tefekkür",
        ozet: ["Gençliğinde 'Muhammedü'l-Emin' (güvenilir) olarak tanındı", "Hilfu'l-Fudul: haksızlığa uğrayanları koruma birliğine katıldı", "Ticaretle uğraştı, dürüstlüğüyle bilindi", "Hz. Hatice ile 25 yaşında evlendi", "Kâbe hakemliği: Hacerülesved'i örtüyle taşıttı", "Hira Mağarası'nda tefekkür etti (düşünüp derinleşti)"],
        anlatim: [
          "Peygamberimiz gençlik yıllarında doğruluğu ve güvenilirliğiyle tanınıyordu; Mekkeliler ona 'Muhammedü'l-Emin', yani güvenilir Muhammed diyordu. İnsanlar emanetlerini ona bırakırdı.",
          "Mekke'de haksızlığa uğrayanları korumak için kurulan Hilfu'l-Fudul (Erdemliler Birliği) adlı topluluğa katıldı. Kâbe onarılırken Hacerülesved'i yerine koyma konusunda kabileler anlaşamayınca, taşı bir örtünün üzerine koyup her kabilenin örtüden tutmasını sağladı ve kavgayı önledi.",
          "Peygamberimiz zaman zaman Nur Dağı'ndaki Hira Mağarası'na çekilerek insanları, evreni ve yaratanı düşünürdü. Bu derin düşünmeye tefekkür denir. İlk vahiy de 40 yaşındayken Hira'da geldi."
        ],
        video: "y6JEyx-H8vs",
        sorular: [
          S("Peygamberimize gençliğinde verilen 'Muhammedü'l-Emin' lakabı ne anlama gelir?", ["Güvenilir Muhammed", "Zengin Muhammed", "Güçlü Muhammed", "Bilgin Muhammed"], "Emin, güvenilir demektir."),
          S("Haksızlığa uğrayanları korumak için kurulan birliğin adı nedir?", ["Hilfu'l-Fudul", "Ensar", "Muhacir", "Dârü'l-Erkam"], "Hilfu'l-Fudul, Erdemliler Birliği'dir."),
          S("Hacerülesved olayında Peygamberimiz hangi özelliğini gösterdi?", ["Adaletli ve barışçı çözüm bulma", "Öfkelenme", "Taşı tek başına alma", "Kabileleri cezalandırma"], "Herkesin örtüden tutmasını sağlayarak kavgayı önledi."),
          S("Peygamberimizin tefekkür etmek için çekildiği yer neresidir?", ["Hira Mağarası", "Sevr Mağarası", "Uhud Dağı", "Kuba Mescidi"], "Nur Dağı'ndaki Hira Mağarası'na çekilirdi."),
          S("Tefekkür ne demektir?", ["Derin derin düşünmek", "Ticaret yapmak", "Yolculuk etmek", "Savaşmak"], "Tefekkür, evreni ve hayatı derinlemesine düşünmektir.")
        ] }
    ] },
    { id: "sp2", ad: "Peygamberimizin Çevresindeki Gençler", konular: [
      { id: "sp2k1", ad: "Gençlere Verdiği Değer",
        ozet: ["Gençlere sorumluluk ve görev verdi", "Hz. Ali: ilk Müslüman olan çocuklardan", "Mus'ab b. Umeyr: Medine'ye öğretmen olarak gönderildi", "Üsame b. Zeyd: genç yaşta ordu komutanı", "Zeyd b. Sabit: vahiy kâtibi, dil öğrendi", "Gençler onu örnek ve rehber edindi"],
        anlatim: [
          "Peygamberimiz gençlere güvenir, onlara önemli görevler verirdi. Hz. Ali çocuk yaşta Müslüman olmuş ve hicret gecesi Peygamberimizin yatağında yatarak cesaret örneği göstermiştir.",
          "Mus'ab bin Umeyr, Medinelilere İslam'ı öğretmek için gönderilen ilk öğretmendir. Zeyd bin Sabit genç yaşta vahiy kâtipliği yapmış ve Peygamberimizin isteğiyle başka diller öğrenmiştir. Üsame bin Zeyd ise henüz on sekiz yaşlarındayken ordu komutanı yapılmıştır.",
          "Bu gençler Peygamberimizi çok sever, onu kendilerine rehber edinirdi. Peygamberimiz de gençliği 'yaşlılık gelmeden önce değerlendirilmesi gereken bir nimet' olarak görürdü."
        ],
        video: "RbyXxwNjfuE",
        sorular: [
          S("Medine'ye İslam'ı öğretmek için gönderilen genç sahabi kimdir?", ["Mus'ab bin Umeyr", "Ebu Cehil", "Ebu Leheb", "Ümeyye"], "Mus'ab bin Umeyr ilk öğretmen olarak gönderildi."),
          S("Genç yaşta ordu komutanı yapılan sahabi kimdir?", ["Üsame bin Zeyd", "Hz. Ebubekir", "Hz. Ömer", "Hz. Osman"], "Üsame bin Zeyd genç yaşta komutan oldu."),
          S("Hicret gecesi Peygamberimizin yatağında yatan genç kimdir?", ["Hz. Ali", "Zeyd bin Sabit", "Mus'ab bin Umeyr", "Bilal-i Habeşi"], "Hz. Ali büyük bir cesaret gösterdi."),
          S("Zeyd bin Sabit hangi görevle bilinir?", ["Vahiy kâtipliği", "Komutanlık", "Ticaret", "Çobanlık"], "Vahyi yazan kâtiplerdendi."),
          S("Peygamberimizin gençlere görev vermesi neyi gösterir?", ["Gençlere güvendiğini ve değer verdiğini", "Yaşlılara güvenmediğini", "Gençleri cezalandırdığını", "Görevlerin önemsiz olduğunu"], "Gençlere sorumluluk vererek onları yetiştirdi.")
        ] }
    ] },
    { id: "sp3", ad: "Rehberim Peygamberim", konular: [
      { id: "sp3k1", ad: "Allah'a Bağlılık, Namaz ve Şükür",
        ozet: ["Peygamberimiz Allah'a derin bir bağlılıkla ibadet ederdi", "Namazı 'gözümün nuru' olarak görürdü", "Namazı vaktinde kılmaya önem verirdi", "Şükür: nimetler için Allah'a teşekkür etmek", "Az olana da şükrederdi", "Şükür, nimeti yerinde kullanmakla da olur"],
        anlatim: [
          "Peygamberimiz hayatının her anında Allah'a bağlılığını gösterirdi. İbadetlerini severek ve içtenlikle yapar, ümmetine de bunu öğretirdi.",
          "Namaz Peygamberimizin hayatında çok önemli bir yere sahipti; namazı gözünün nuru, yani en büyük mutluluğu olarak görürdü. Namazı vaktinde kılmanın önemini anlatırdı.",
          "Peygamberimiz sahip olduğu her nimet için Allah'a şükrederdi. Şükür yalnızca 'elhamdülillah' demek değil; nimetleri israf etmeden, yerinde kullanmak ve paylaşmaktır."
        ],
        video: "ctehXyIv87U",
        sorular: [
          S("Peygamberimiz namazı nasıl nitelendirmiştir?", ["Gözümün nuru", "Yorucu bir iş", "Sadece bayram ibadeti", "Önemsiz bir görev"], "Namazı gözünün nuru olarak görürdü."),
          S("Şükür ne demektir?", ["Nimetler için Allah'a teşekkür etmek", "Şikâyet etmek", "İsraf etmek", "Kıskanmak"], "Şükür nimetlere teşekkür etmektir."),
          S("Aşağıdakilerden hangisi davranışla yapılan bir şükürdür?", ["Yemeği israf etmemek", "Yemeği çöpe atmak", "Su musluğunu açık bırakmak", "Eşyaları kırmak"], "Nimeti yerinde kullanmak da şükürdür."),
          S("Peygamberimiz ibadetlerini nasıl yapardı?", ["Severek ve içtenlikle", "İsteksizce", "Gösteriş için", "Zorla"], "İbadetlerini içtenlikle yapardı."),
          S("Namazla ilgili Peygamberimizin önem verdiği konu hangisidir?", ["Vaktinde kılmak", "Hiç kılmamak", "Haftada bir kılmak", "Sadece yazın kılmak"], "Namazı vaktinde kılmaya önem verirdi.")
        ] }
    ] },
    { id: "sp4", ad: "Toplumsal Hayatta Peygamberimiz", konular: [
      { id: "sp4k1", ad: "İnsan İlişkileri ve Çevre Duyarlılığı",
        ozet: ["İnsanlara güler yüzlü ve nazik davranırdı", "Komşu hakkına önem verirdi", "Yetimleri ve yoksulları korurdu", "Hayvanlara merhamet ederdi", "Ağaç dikmeyi teşvik ederdi", "Suyu, akan bir nehirde bile israf etmemeyi öğütlerdi"],
        anlatim: [
          "Peygamberimiz çevresindeki herkese güler yüzle davranır, selam verir, hastaları ziyaret ederdi. Komşusu açken tok yatanın kendisinden olmadığını söyleyerek komşuluğun önemini vurgulamıştır.",
          "Yetimlere, yoksullara ve yaşlılara özel ilgi gösterirdi. Büyüklere saygı, küçüklere sevgi göstermeyi öğretirdi.",
          "Peygamberimiz çevreye ve canlılara karşı da duyarlıydı. Ağaç dikmeyi sadaka saydı, hayvanlara eziyet edilmesini yasakladı ve akan bir nehirden abdest alırken bile suyun israf edilmemesini istedi."
        ],
        video: "wM3BkNSRd6A",
        sorular: [
          S("Peygamberimiz akan bir nehirde bile neyi yapmamayı öğütlemiştir?", ["Suyu israf etmeyi", "Abdest almayı", "Su içmeyi", "Yüzmeyi"], "Su bol olsa da israf edilmemelidir."),
          S("Peygamberimiz ağaç dikmeyi nasıl değerlendirmiştir?", ["Sadaka (iyilik) olarak", "Gereksiz bir iş olarak", "Yasak olarak", "Sadece çiftçinin işi olarak"], "Ağaç dikmek sadaka sayılır."),
          S("Komşuluk ile ilgili Peygamberimizin öğüdü hangisidir?", ["Komşusu açken tok yatmamak", "Komşuyla konuşmamak", "Komşuya kızmak", "Komşuyu tanımamak"], "Komşunun ihtiyacıyla ilgilenmek gerekir."),
          S("Peygamberimiz hayvanlara nasıl davranılmasını isterdi?", ["Merhametle", "Eziyetle", "Umursamadan", "Korkutarak"], "Hayvanlara eziyeti yasaklamıştır."),
          S("Peygamberimiz insanlara nasıl davranırdı?", ["Güler yüzlü ve nazik", "Kaba ve sert", "Soğuk ve uzak", "Kibirli"], "Herkese güler yüzle davranırdı.")
        ] }
    ] }
  ]
};

/* ───────────── KUR'AN-I KERİM ───────────── */
window.ICERIK.s_kuran = {
  ad: "Kur'an-ı Kerim", ikon: "📗", renk: "#15803d", secmeli: true,
  kaynaklar: [program("Kur'an-ı Kerim", "https://tymm.meb.gov.tr/ogretim-programlari/kurani-kerim-dersi/7"), EBA, MEBI],
  uniteler: [
    { id: "sk1", ad: "Kur'an-ı Kerim'i Tanıyorum", konular: [
      { id: "sk1k1", ad: "Kur'an'ın İç Düzeni",
        ozet: ["Kur'an-ı Kerim 114 sureden oluşur", "Sure: Kur'an'ın bölümleri · Ayet: surelerdeki cümleler", "Cüz: yaklaşık 20 sayfalık bölüm, toplam 30 cüz", "İlk sure Fatiha, son sure Nas", "En uzun sure Bakara", "Mekki (Mekke'de) ve Medeni (Medine'de) inen sureler"],
        anlatim: [
          "Kur'an-ı Kerim belli bir düzene sahiptir. Bölümlerine sure, surelerdeki her bir cümleye ayet denir. Kur'an'da 114 sure vardır; ilki Fatiha, sonuncusu Nas suresidir.",
          "Okumayı kolaylaştırmak için Kur'an yaklaşık yirmişer sayfalık 30 cüze ayrılmıştır. Hafızlar ve hatim okuyanlar genellikle cüz cüz ilerler.",
          "Mekke döneminde inen surelere Mekki, Medine döneminde inenlere Medeni sure denir. Bakara suresi Kur'an'ın en uzun suresidir ve Medine'de inmiştir."
        ],
        video: "w9oJBhzR7yU",
        sorular: [
          S("Kur'an-ı Kerim kaç sureden oluşur?", ["114", "30", "100", "6236"], "Kur'an'da 114 sure vardır."),
          S("Kur'an-ı Kerim'in ilk suresi hangisidir?", ["Fatiha", "Nas", "Bakara", "İhlas"], "Kur'an Fatiha suresiyle başlar."),
          S("Surelerdeki her bir cümleye ne denir?", ["Ayet", "Cüz", "Hizb", "Sayfa"], "Surelerin cümleleri ayettir."),
          S("Kur'an kaç cüzden oluşur?", ["30", "114", "20", "40"], "Kur'an 30 cüze ayrılmıştır."),
          S("Kur'an'ın en uzun suresi hangisidir?", ["Bakara", "Kevser", "Fil", "Kureyş"], "En uzun sure Bakara'dır.")
        ] },
      { id: "sk1k2", ad: "Peltek Harfler",
        ozet: ["Peltek harfler: dil ucunun dişlere değdiği harfler", "Se (ث), Zel (ذ), Zı (ظ)", "Okurken dil ucu üst dişlere hafifçe değer", "Türkçedeki 's' ve 'z' ile karıştırılmamalıdır", "Doğru telaffuz anlamı korur"],
        anlatim: [
          "Kur'an harflerinden bazıları okunurken dil ucu üst ön dişlerin ucuna hafifçe değer. Bu harflere peltek harfler denir: Se (ث), Zel (ذ) ve Zı (ظ).",
          "Se harfi 's' sesine, Zel ve Zı harfleri 'z' sesine benzer; ancak dil ucu dişlere değdiği için farklı çıkar. Zı, kalın okunan bir harftir; Zel ise incedir.",
          "Harflerin doğru telaffuzu önemlidir; çünkü yanlış okunan bir harf kelimenin anlamını değiştirebilir. Bu yüzden peltek harfler bol tekrar ve dinleyerek öğrenilir."
        ],
        video: "9I7CN5FxMnw",
        sorular: [
          S("Aşağıdakilerden hangisi peltek harflerdendir?", ["Se (ث)", "Be (ب)", "Mim (م)", "Lam (ل)"], "Peltek harfler: Se, Zel, Zı."),
          S("Peltek harfler okunurken dil ucu nereye değer?", ["Üst ön dişlerin ucuna", "Damağın arkasına", "Dudaklara", "Hiçbir yere"], "Dil ucu üst dişlere hafifçe değer."),
          S("Peltek harflerden hangisi kalın okunur?", ["Zı (ظ)", "Zel (ذ)", "Se (ث)", "Hiçbiri"], "Zı kalın okunan peltek harftir."),
          S("Kaç tane peltek harf vardır?", ["3", "2", "5", "7"], "Se, Zel ve Zı olmak üzere üç tanedir."),
          S("Harflerin doğru telaffuzu neden önemlidir?", ["Yanlış okuma anlamı değiştirebilir", "Daha hızlı okunur", "Önemli değildir", "Sadece şiirde gerekir"], "Doğru telaffuz anlamı korur.")
        ] }
    ] },
    { id: "sk2", ad: "Kur'an-ı Kerim'i Okumaya Giriş", konular: [
      { id: "sk2k1", ad: "Med Çeşitleri",
        ozet: ["Med: harfi uzatarak okumak", "Med harfleri: Elif (ا), Vav (و), Ye (ي)", "Med-i tabii: 1 elif miktarı uzatılır", "Med-i muttasıl: med harfinden sonra aynı kelimede hemze — 2-3 elif", "Med-i munfasıl: hemze sonraki kelimede — 1-3 elif", "Med-i lazım: med harfinden sonra cezm/şedde — 3 elif"],
        anlatim: [
          "Kur'an okurken bazı harfler uzatılarak okunur; buna med denir. Uzatmayı sağlayan harflere med harfleri denir: Elif, Vav ve Ye. Üstünlü harften sonra elif, ötreliden sonra vav, esreliden sonra ye gelirse harf uzatılır.",
          "En temel med, med-i tabiidir (doğal uzatma); bir elif miktarı uzatılır. Med harfinden sonra aynı kelimede hemze gelirse med-i muttasıl, hemze sonraki kelimede gelirse med-i munfasıl olur.",
          "Med harfinden sonra cezimli veya şeddeli bir harf gelirse med-i lazım olur ve en uzun şekilde, üç elif miktarı uzatılır. Medler, ayetlerin doğru ve güzel okunması için önemlidir."
        ],
        video: "k8Z03CqgITQ",
        sorular: [
          S("Kur'an okurken harfi uzatmaya ne denir?", ["Med", "Cezm", "Şedde", "Tenvin"], "Uzatarak okumaya med denir."),
          S("Aşağıdakilerden hangisi med harflerinden değildir?", ["Mim", "Elif", "Vav", "Ye"], "Med harfleri Elif, Vav ve Ye'dir."),
          S("Med-i tabii kaç elif miktarı uzatılır?", ["1 elif", "3 elif", "5 elif", "Uzatılmaz"], "Doğal uzatma bir eliftir."),
          S("Med harfinden sonra aynı kelimede hemze gelirse hangi med olur?", ["Med-i muttasıl", "Med-i munfasıl", "Med-i tabii", "Med-i lazım"], "Muttasıl 'bitişik' demektir; hemze aynı kelimededir."),
          S("En uzun okunan med hangisidir?", ["Med-i lazım", "Med-i tabii", "Med-i munfasıl", "Hepsi eşittir"], "Med-i lazım üç elif uzatılır.")
        ] },
      { id: "sk2k2", ad: "Kureyş Suresi ve Hz. Yunus Kıssası",
        ozet: ["Kureyş suresi 4 ayettir, Mekke'de inmiştir", "Kureyş kabilesine verilen nimetleri hatırlatır", "Yaz ve kış ticaret yolculukları güvenle yapılırdı", "Mesaj: nimet vereni tanıyıp şükretmek", "Hz. Yunus: balığın karnında Allah'a sığınıp dua etti", "Kıssadan ders: sabır, tövbe ve umut"],
        anlatim: [
          "Kureyş suresi Mekke'de inmiş, dört ayetlik kısa bir suredir. Peygamberimizin kabilesi olan Kureyş'e, yaz ve kış yaptıkları ticaret yolculuklarında güvende olmalarını, aç kalmamalarını sağlayan Allah'ın nimetlerini hatırlatır.",
          "Surenin ana mesajı, nimetleri veren Allah'ı tanımak, ona şükretmek ve ibadet etmektir.",
          "Hz. Yunus, kavmi ona inanmayınca onları terk edip bir gemiye bindi. Fırtınada denize atıldı ve büyük bir balık onu yuttu. Balığın karnında hatasını anlayarak Allah'a dua etti, Allah da duasını kabul edip onu kurtardı. Bu kıssa; sabrı, tövbeyi ve hiçbir zaman umudu kaybetmemeyi öğretir."
        ],
        video: "LN8523Y-Kao",
        sorular: [
          S("Kureyş suresi kaç ayettir?", ["4", "7", "3", "286"], "Kureyş suresi dört ayettir."),
          S("Kureyş suresinde hangi yolculuklardan söz edilir?", ["Yaz ve kış ticaret yolculukları", "Hac yolculuğu", "Deniz savaşları", "Hicret"], "Kureyş'in yaz ve kış ticaret yolculukları anılır."),
          S("Kureyş suresinin ana mesajı nedir?", ["Nimet veren Allah'a şükretmek ve ibadet etmek", "Ticareti bırakmak", "Savaşa hazırlanmak", "Yolculuğu yasaklamak"], "Nimetleri hatırlatıp şükre çağırır."),
          S("Hz. Yunus balığın karnındayken ne yaptı?", ["Allah'a sığınıp dua etti", "Uyudu", "Kavmine mektup yazdı", "Ümidini kesti"], "Hatasını anlayıp dua etti ve kurtuldu."),
          S("Hz. Yunus kıssası bize ne öğretir?", ["Umudu kaybetmemeyi ve tövbeyi", "Denizden korkmayı", "Yalnız kalmayı", "Gemiye binmemeyi"], "Kıssa sabır, tövbe ve umudu öğretir.")
        ] }
    ] }
  ]
};

/* ───────────── TEMEL DİNÎ BİLGİLER ───────────── */
window.ICERIK.s_tdb = {
  ad: "Temel Dinî Bilgiler", ikon: "🕌", renk: "#0e7490", secmeli: true,
  kaynaklar: [{ ad: "MEB Temel Dinî Bilgiler öğretim programı (PDF)", url: "https://mufredat.meb.gov.tr/Dosyalar/20266811182762-temeldinibilgiler.pdf" }, EBA, MEBI],
  uniteler: [
    { id: "st1", ad: "Dinimiz İslam", konular: [
      { id: "st1k1", ad: "Kur'an, Sünnet ve Mümin Kimliği",
        ozet: ["İslam'ın iki temel kaynağı: Kur'an ve Sünnet", "Sünnet: Peygamberimizin söz, davranış ve onayları", "İman: Allah'a ve O'nun bildirdiklerine gönülden inanmak", "Mümin: inanan kişi", "Mümin; doğru sözlü, güvenilir ve merhametlidir", "Esmaü'l-Hüsna: Hâdi (doğru yolu gösteren), Selam (esenlik veren), Vekîl (güvenilip dayanılan)"],
        anlatim: [
          "İslam dininin iki temel kaynağı vardır: Kur'an-ı Kerim ve Peygamberimizin sünneti. Sünnet; Peygamberimizin sözleri, davranışları ve onayladığı şeylerdir. Müslümanlar dini bilgilerini bu iki kaynaktan öğrenir.",
          "İman, Allah'a ve Allah'ın bildirdiği gerçeklere gönülden inanmaktır. İnanan kişiye mümin denir. Mümin; doğru sözlü, güvenilir, merhametli ve sorumluluk sahibi biridir. İnancı davranışlarına yansır.",
          "Allah'ın güzel isimleri (Esmaü'l-Hüsna) O'nu tanımamıza yardım eder. Hâdi doğru yolu gösteren, Selam esenlik ve barış veren, Vekîl ise kendisine güvenilip dayanılan demektir."
        ],
        video: "9GtAv0Zyb4E",
        sorular: [
          S("İslam'ın iki temel kaynağı hangileridir?", ["Kur'an ve Sünnet", "Tarih ve Coğrafya", "Masal ve Destan", "Gelenek ve Moda"], "Temel kaynaklar Kur'an ve Sünnet'tir."),
          S("Peygamberimizin söz, davranış ve onaylarına ne denir?", ["Sünnet", "Ayet", "Cüz", "Hicret"], "Bunların hepsine sünnet denir."),
          S("İnanan kişiye ne ad verilir?", ["Mümin", "Münafık", "Kâfir", "Müşrik"], "İnanan kişi mümindir."),
          S("Allah'ın 'Hâdi' ismi ne anlama gelir?", ["Doğru yolu gösteren", "Her şeyi işiten", "Rızık veren", "Affeden"], "Hâdi, doğru yolu gösterendir."),
          S("Allah'ın 'Vekîl' ismi ne anlama gelir?", ["Güvenilip dayanılan", "Esenlik veren", "Yaratıcı", "Görüp gözeten"], "Vekîl, kendisine güvenilendir.")
        ] }
    ] },
    { id: "st2", ad: "Hayatımız İbadet", konular: [
      { id: "st2k1", ad: "İbadet ve Temel İlkeleri",
        ozet: ["İbadet: Allah'a saygı ve bağlılıkla yapılan davranışlar", "Niyet ve ihlas: yalnızca Allah rızası için yapmak", "Kolaylık: din, güç yetirilemeyeni yüklemez", "Süreklilik: az da olsa devamlı yapmak", "Farz, vacip, sünnet: hükümlerine göre ibadetler", "Esmaü'l-Hüsna: Rakib (gözeten), Şekur (az iyiliğe çok karşılık veren), Hamid (övülmeye layık)"],
        anlatim: [
          "İbadet, Allah'a sevgi, saygı ve bağlılıkla yapılan davranışlardır. Namaz, oruç, zekât ve hac gibi belli ibadetlerin yanında; iyilik yapmak, dürüst olmak ve insanlara yardım etmek de Allah rızası için yapıldığında ibadet sayılır.",
          "İbadetlerin temel ilkeleri vardır: İhlas, ibadetin gösteriş için değil yalnızca Allah rızası için yapılmasıdır. Kolaylık ilkesine göre din, insana gücünün yetmediği bir yük yüklemez; örneğin hasta olan oturarak namaz kılabilir. Süreklilik ise az da olsa ibadeti devamlı yapmaktır.",
          "İbadetler hükümlerine göre farz (kesin emir), vacip ve sünnet gibi gruplara ayrılır. Allah'ın Rakib ismi her şeyi gözeten, Şekur az iyiliğe bol karşılık veren, Hamid ise övülmeye layık olan demektir."
        ],
        video: "VyqTZYHDn7E",
        sorular: [
          S("İbadetin yalnızca Allah rızası için yapılmasına ne denir?", ["İhlas", "Riya", "Kibir", "Tembellik"], "İhlas, samimiyettir."),
          S("Hasta birinin oturarak namaz kılabilmesi hangi ilkeyle ilgilidir?", ["Kolaylık", "Süreklilik", "Riya", "Zorluk"], "Din kolaylık ilkesine dayanır."),
          S("'Az da olsa devamlı yapmak' hangi ilkeyi anlatır?", ["Süreklilik", "Kolaylık", "İsraf", "Gösteriş"], "Süreklilik ilkesidir."),
          S("Allah'ın kesin olarak emrettiği ibadetlere ne denir?", ["Farz", "Mübah", "Mekruh", "Haram"], "Kesin emirler farzdır."),
          S("Allah'ın 'Şekur' ismi ne anlama gelir?", ["Az iyiliğe çok karşılık veren", "Her şeyi gözeten", "Esenlik veren", "Doğru yolu gösteren"], "Şekur, iyiliğe bolca karşılık verendir.")
        ] }
    ] }
  ]
};

/* ───────────── MATEMATİK UYGULAMALARI ───────────── */
window.ICERIK.s_matuyg = {
  ad: "Matematik Uygulamaları", ikon: "🧮", renk: "#4338ca", secmeli: true,
  kaynaklar: [program("Matematik ve Bilim Uygulamaları", "https://tymm.meb.gov.tr/ogretim-programlari/ortaokul-matematik-ve-bilim-uygulamalari-dersi/18"), EBA, MEBI],
  uniteler: [
    { id: "smu1", ad: "Günlük Hayatta Matematik", konular: [
      { id: "smu1k1", ad: "Dört İşlem Problemleri",
        ozet: ["Problemi oku, verilenleri ve isteneni yaz", "Hangi işlem gerektiğine karar ver", "Toplama: birleştirme · Çıkarma: kalan/fark", "Çarpma: eş grupları toplama · Bölme: eşit paylaştırma", "İşlem sırası: önce parantez, sonra çarpma/bölme, en son toplama/çıkarma", "Sonucu tahminle kontrol et"],
        anlatim: [
          "Günlük hayatta alışveriş yaparken, zaman hesaplarken ya da eşyaları paylaştırırken dört işlemi kullanırız. Bir problemi çözerken önce dikkatle okuyup verilenleri ve isteneni ayırmak gerekir.",
          "Örneğin bir defter 35 TL ve 4 defter alırsak 35 × 4 = 140 TL öderiz. 200 TL verirsek para üstü 200 − 140 = 60 TL olur. 60 TL'yi 3 kardeş eşit paylaşırsa her biri 60 ÷ 3 = 20 TL alır.",
          "Birden fazla işlem varsa işlem sırasına dikkat edilir: önce parantez içi, sonra çarpma ve bölme, en son toplama ve çıkarma yapılır. Sonucu kabaca tahmin etmek, hatayı fark etmeye yardım eder."
        ],
        sorular: [
          S("Tanesi 35 TL olan defterlerden 4 tane alan Ayşe kaç TL öder?", ["140", "39", "120", "135"], "35 × 4 = 140"),
          S("200 TL ile 140 TL'lik alışveriş yapan biri kaç TL para üstü alır?", ["60", "340", "40", "70"], "200 − 140 = 60"),
          S("60 cevizi 3 kardeş eşit paylaşırsa her birine kaç ceviz düşer?", ["20", "30", "15", "180"], "60 ÷ 3 = 20"),
          S("5 + 3 × 4 işleminin sonucu kaçtır?", ["17", "32", "27", "12"], "Önce çarpma: 3 × 4 = 12, sonra 5 + 12 = 17."),
          S("Bir otobüste 45 kişi vardı. Durakta 12 kişi indi, 8 kişi bindi. Kaç kişi oldu?", ["41", "49", "65", "25"], "45 − 12 + 8 = 41")
        ] },
      { id: "smu1k2", ad: "Kesirler ve Ölçme (Mutfak ve Alışveriş)",
        ozet: ["Kesir: bir bütünün eş parçalarından bir kısmı", "1/2 yarım · 1/4 çeyrek", "Bir miktarın kesrini bulmak: böl, sonra çarp", "1 kg = 1000 g · 1 L = 1000 mL", "Tarifte miktarı 2 katına çıkarmak: her malzeme × 2", "Fiyat karşılaştırma: birim fiyata bak"],
        anlatim: [
          "Mutfakta ve alışverişte kesirleri ve ölçü birimlerini sık kullanırız. 'Yarım kilo un' 1/2 kg, yani 500 gram demektir; 'çeyrek litre süt' 1/4 L, yani 250 mL'dir.",
          "Bir miktarın kesrini bulmak için önce paydaya bölünür, sonra payla çarpılır. 120 TL'nin 3/4'ü: 120 ÷ 4 = 30, 30 × 3 = 90 TL'dir.",
          "Bir tarif 4 kişilikse ve 8 kişiye yapılacaksa her malzeme 2 ile çarpılır. Hangi ürünün daha ucuz olduğunu anlamak için birim fiyat (kilogram ya da litre başına fiyat) karşılaştırılır."
        ],
        video: "Vst_IWsYPuU",
        sorular: [
          S("Yarım kilogram kaç gramdır?", ["500", "250", "1000", "50"], "1 kg = 1000 g, yarısı 500 g."),
          S("120 TL'nin 3/4'ü kaç TL'dir?", ["90", "40", "30", "160"], "120 ÷ 4 = 30, 30 × 3 = 90"),
          S("Çeyrek litre süt kaç mililitredir?", ["250", "500", "750", "25"], "1 L = 1000 mL, dörtte biri 250 mL."),
          S("4 kişilik tarifte 2 yumurta varsa 8 kişilik tarifte kaç yumurta gerekir?", ["4", "2", "6", "8"], "Kişi sayısı 2 katı, yumurta da 2 katı: 4."),
          S("2 kg'ı 80 TL olan elmanın 1 kg'ı kaç TL'dir?", ["40", "160", "80", "20"], "Birim fiyat: 80 ÷ 2 = 40 TL.")
        ] },
      { id: "smu1k3", ad: "Çevremizdeki Çokgenler ve Cisimler",
        ozet: ["Çokgen: kenarları doğru parçası olan kapalı şekil", "Üçgen 3, dörtgen 4, beşgen 5, altıgen 6 kenarlı", "Kare: 4 kenarı eşit, 4 açısı dik", "Dikdörtgen: karşılıklı kenarlar eşit, açılar dik", "Küp: 6 kare yüz · Dikdörtgenler prizması: 6 dikdörtgen yüz", "Silindir: 2 daire taban; konserve kutusu gibi"],
        anlatim: [
          "Çevremizdeki eşyaların yüzeylerinde birçok çokgen görürüz: masa yüzeyi dikdörtgen, satranç tahtasının kareleri kare, arı peteğinin gözleri altıgendir.",
          "Çokgenler kenar sayılarına göre adlandırılır. Karenin dört kenarı eşit ve dört açısı dik açıdır. Dikdörtgende karşılıklı kenarlar eşittir ve bütün açılar diktir.",
          "Üç boyutlu cisimler de eşya tasarımında kullanılır: zar bir küptür, ayakkabı kutusu dikdörtgenler prizmasıdır, konserve kutusu silindirdir. Küpün 6 yüzü, 12 ayrıtı ve 8 köşesi vardır."
        ],
        video: "HdhkgCDIoW0",
        sorular: [
          S("Arı peteğinin gözleri hangi çokgene benzer?", ["Altıgen", "Üçgen", "Kare", "Beşgen"], "Petek gözleri altıgendir."),
          S("Küpün kaç yüzü vardır?", ["6", "4", "8", "12"], "Küpün 6 kare yüzü vardır."),
          S("Aşağıdakilerden hangisi silindire örnektir?", ["Konserve kutusu", "Zar", "Ayakkabı kutusu", "Top"], "Konserve kutusunun iki daire tabanı vardır."),
          S("Dört kenarı eşit ve dört açısı dik olan çokgen hangisidir?", ["Kare", "Dikdörtgen", "Üçgen", "Altıgen"], "Bu tanım kareye aittir."),
          S("Beşgenin kaç kenarı vardır?", ["5", "6", "4", "8"], "Beşgen 5 kenarlıdır.")
        ] }
    ] }
  ]
};

/* ───────────── FEN BİLİMLERİ UYGULAMALARI ───────────── */
window.ICERIK.s_fenuyg = {
  ad: "Fen Bilimleri Uygulamaları", ikon: "🧪", renk: "#047857", secmeli: true,
  kaynaklar: [program("Matematik ve Bilim Uygulamaları", "https://tymm.meb.gov.tr/ogretim-programlari/ortaokul-matematik-ve-bilim-uygulamalari-dersi/18"), EBA, MEBI],
  uniteler: [
    { id: "sfu1", ad: "Bilimsel Süreç Becerileri", konular: [
      { id: "sfu1k1", ad: "Bilimsel Yöntem ve Deney",
        ozet: ["1. Gözlem yap ve problemi belirle", "2. Hipotez kur (tahmini açıklama)", "3. Deney tasarla ve yap", "4. Verileri kaydet, tablo/grafik çiz", "5. Sonuç çıkar, hipotezi kontrol et", "Değişkenler: bağımsız (değiştirilen), bağımlı (ölçülen), kontrol (sabit tutulan)"],
        anlatim: [
          "Bilim insanları bir soruya cevap ararken bilimsel yöntemi kullanır. Önce gözlem yapılır ve bir problem belirlenir: 'Bitkiler ışıksız büyür mü?' Sonra bu soruya tahmini bir cevap verilir; buna hipotez denir.",
          "Hipotezi test etmek için deney yapılır. Deneyde bir şey değiştirilir (bağımsız değişken: ışık), bir şey ölçülür (bağımlı değişken: bitkinin boyu), geri kalan her şey aynı tutulur (kontrol edilen değişkenler: su, toprak, sıcaklık).",
          "Sonuçlar tablo veya grafikle kaydedilir ve yorumlanır. Sonuç hipotezi destekliyorsa hipotez doğrulanır; desteklemiyorsa yeni bir hipotez kurulur. Güvenilir olması için deneyler tekrar edilir."
        ],
        video: "5hA1AuAgAOc",
        sorular: [
          S("Bir probleme verilen tahmini, test edilebilir cevaba ne denir?", ["Hipotez", "Sonuç", "Gözlem", "Grafik"], "Hipotez tahmini açıklamadır."),
          S("Işığın bitki büyümesine etkisi incelenirken 'ışık' hangi değişkendir?", ["Bağımsız değişken", "Bağımlı değişken", "Kontrol edilen değişken", "Değişken değildir"], "Değiştirilen etken bağımsız değişkendir."),
          S("Aynı deneyde 'bitkinin boyu' hangi değişkendir?", ["Bağımlı değişken", "Bağımsız değişken", "Kontrol edilen değişken", "Hipotez"], "Ölçülen sonuç bağımlı değişkendir."),
          S("Deneyde her bitkiye aynı miktarda su vermek neden gerekir?", ["Sonucu yalnızca ışığın etkilemesi için", "Bitkiler çabuk büyüsün diye", "Su ucuz olduğu için", "Gerek yoktur"], "Su kontrol edilen değişkendir; sabit tutulur."),
          S("Bilimsel yöntemin ilk adımı hangisidir?", ["Gözlem yapıp problemi belirlemek", "Sonuç yazmak", "Grafik çizmek", "Rapor sunmak"], "Her şey gözlemle başlar.")
        ] },
      { id: "sfu1k2", ad: "Laboratuvar Güvenliği ve Ölçme",
        ozet: ["Laboratuvarda öğretmen izni olmadan deney yapılmaz", "Koruyucu gözlük ve önlük kullanılır", "Maddeler tadılmaz, doğrudan koklanmaz", "Isıtılan tüpün ağzı kimseye çevrilmez", "Ölçü aletleri: cetvel (uzunluk), terazi (kütle), termometre (sıcaklık), dereceli silindir (hacim)", "Ölçüm birimi mutlaka yazılır"],
        anlatim: [
          "Laboratuvarda güvenlik en önemli kuraldır. Öğretmen izni olmadan deney yapılmaz; koruyucu gözlük ve önlük giyilir. Hiçbir madde tadına bakılmaz, koklamak gerekirse el ile yelpazelenerek koklanır.",
          "Isıtılan bir deney tüpünün ağzı kimseye doğru tutulmaz. Kazada hemen öğretmene haber verilir. Deney bitince masa temizlenir ve eller yıkanır.",
          "Deneylerde doğru ölçüm yapmak gerekir: uzunluk cetvelle, kütle teraziyle, sıcaklık termometreyle, sıvıların hacmi dereceli silindirle ölçülür. Ölçülen değerin yanına birimi (cm, g, °C, mL) mutlaka yazılır."
        ],
        video: "vulUypD0KAM",
        sorular: [
          S("Sıcaklık hangi aletle ölçülür?", ["Termometre", "Terazi", "Cetvel", "Dereceli silindir"], "Sıcaklık termometreyle ölçülür."),
          S("Bir sıvının hacmini ölçmek için hangi araç kullanılır?", ["Dereceli silindir", "Termometre", "Cetvel", "Pusula"], "Hacim dereceli silindirle ölçülür."),
          S("Laboratuvarda bir maddeyi koklamak gerekirse ne yapılmalıdır?", ["El ile yelpazelenerek koklanır", "Doğrudan burna yaklaştırılır", "Tadına bakılır", "Arkadaşa koklatılır"], "Buhar el ile yelpazelenir."),
          S("Isıtılan deney tüpünün ağzı nasıl tutulmalıdır?", ["Kimseye doğru tutulmamalı", "Yüze doğru tutulmalı", "Arkadaşa doğru tutulmalı", "Önemi yoktur"], "Sıçrama tehlikesi vardır."),
          S("Kütle hangi aletle ölçülür?", ["Terazi", "Termometre", "Saat", "Cetvel"], "Kütle teraziyle ölçülür.")
        ] }
    ] }
  ]
};

/* ───────────── OKUMA BECERİLERİ ───────────── */
window.ICERIK.s_okuma = {
  ad: "Okuma Becerileri", ikon: "📚", renk: "#b45309", secmeli: true,
  kaynaklar: [program("Okuma Becerileri", "https://tymm.meb.gov.tr/ogretim-programlari/ortaokul-okuma-becerileri-dersi/18"), EBA, MEBI],
  uniteler: [
    { id: "so1", ad: "Okuma Süreçleri", konular: [
      { id: "so1k1", ad: "Akıcı Okuma ve Anlam Kurma",
        ozet: ["Akıcı okuma: doğru, uygun hızda ve vurgulu okumak", "Noktalama işaretlerinde ses tonu değişir", "Okumadan önce: başlık ve görsellerden tahmin yap", "Okurken: bilmediğin kelimeyi bağlamdan tahmin et", "Okuduktan sonra: 'Kim? Ne? Nerede? Neden?' soruları", "Konu: metin neyden söz ediyor · Ana fikir: ne anlatmak istiyor"],
        anlatim: [
          "Akıcı okumak; kelimeleri doğru, ne çok hızlı ne çok yavaş ve anlamı yansıtan bir ses tonuyla okumaktır. Soru cümlesinde ses yükselir, ünlem cümlesinde heyecan katılır, noktada kısa bir duraklama yapılır.",
          "İyi bir okur okumadan önce başlığa ve görsellere bakarak metnin ne anlatacağını tahmin eder. Okurken bilmediği bir kelimeyle karşılaşırsa cümlenin gelişinden anlamını çıkarmaya çalışır; gerekirse sözlüğe bakar.",
          "Okuduktan sonra metnin konusu (neyden söz ettiği) ve ana fikri (okura vermek istediği mesaj) bulunur. Ana fikri destekleyen diğer düşüncelere yardımcı fikir denir. Metni kendi hayatıyla ilişkilendirmek anlamayı güçlendirir."
        ],
        video: "gisK0LBBH8I",
        sorular: [
          S("Metnin okura vermek istediği temel mesaja ne denir?", ["Ana fikir", "Başlık", "Konu", "Kelime"], "Ana fikir metnin temel mesajıdır."),
          S("Okumadan önce başlık ve görsellere bakmak neye yardım eder?", ["Metnin içeriğini tahmin etmeye", "Daha hızlı yazmaya", "Kelimeleri ezberlemeye", "Hiçbir şeye"], "Tahmin, anlamaya hazırlar."),
          S("Bilmediğimiz bir kelimenin anlamını ilk olarak nasıl tahmin ederiz?", ["Cümledeki bağlamdan", "Kelimeyi atlayarak", "Rastgele seçerek", "Metni bırakarak"], "Bağlam ipucu verir."),
          S("Soru cümlesi okunurken ses tonu nasıl olur?", ["Sonda yükselir", "Hep aynı kalır", "Fısıldanır", "Bağırılır"], "Soru cümlesinde ses sonda yükselir."),
          S("Ana fikri destekleyen düşüncelere ne denir?", ["Yardımcı fikir", "Başlık", "Konu", "Sonuç"], "Bunlar yardımcı fikirlerdir.")
        ] }
    ] },
    { id: "so2", ad: "Stratejik ve Dijital Okuma", konular: [
      { id: "so2k1", ad: "Amaca Göre Okuma ve Güvenilir Kaynak",
        ozet: ["Göz gezdirme: genel fikir edinmek için hızlı okuma", "Tarama: belli bir bilgiyi bulmak için okuma", "Ayrıntılı okuma: ders çalışırken dikkatli okuma", "Görseller (tablo, grafik, resim) metni destekler", "Dijital kaynakta yazar, tarih ve site kontrol edilir", "Bilgi en az iki kaynaktan doğrulanır"],
        anlatim: [
          "Her metin aynı şekilde okunmaz. Bir gazetede ilginç haber aramak için göz gezdiririz; bir sözlükte kelime bulmak için tarama yaparız; ders çalışırken ise ayrıntılı ve notlar alarak okuruz. Okuma amacına göre yöntem seçmek zaman kazandırır.",
          "Metinlerdeki tablo, grafik ve resimler bilgiyi daha anlaşılır hâle getirir. İyi bir okur görselle metin arasındaki ilişkiyi kurar.",
          "İnternette okurken bilginin güvenilir olup olmadığı kontrol edilmelidir: Yazar kim? Ne zaman yazılmış? Resmî bir kurumun sitesi mi? Bir bilgiyi en az iki farklı güvenilir kaynaktan doğrulamak yanlış bilgiye kanmamızı önler."
        ],
        video: "COGSrvoy5A0",
        sorular: [
          S("Sözlükte bir kelimeyi hızlıca bulmak için hangi okuma türü kullanılır?", ["Tarama", "Ayrıntılı okuma", "Sesli okuma", "Tekrar okuma"], "Belli bir bilgiyi aramak taramadır."),
          S("Ders çalışırken hangi okuma türü uygundur?", ["Ayrıntılı okuma", "Göz gezdirme", "Tarama", "Hiç okumamak"], "Ders için dikkatli, ayrıntılı okunur."),
          S("İnternetteki bir bilginin güvenilirliğini anlamak için ne yapılmalıdır?", ["Yazarı, tarihi ve kaynağı kontrol etmek", "İlk çıkan siteye inanmak", "Sadece başlığa bakmak", "Paylaşım sayısına bakmak"], "Kaynak, yazar ve tarih kontrol edilir."),
          S("Bir bilgiyi doğrulamanın en iyi yolu hangisidir?", ["En az iki güvenilir kaynakta karşılaştırmak", "Bir arkadaşa sormak", "Hiç kontrol etmemek", "Tahmin etmek"], "Farklı kaynaklardan doğrulama yapılır."),
          S("Metindeki grafik ve tabloların görevi nedir?", ["Bilgiyi daha anlaşılır kılmak", "Metni uzatmak", "Okuru şaşırtmak", "Sadece süslemek"], "Görseller bilgiyi destekler.")
        ] }
    ] }
  ]
};

/* ───────────── YAZARLIK VE YAZMA BECERİLERİ ───────────── */
window.ICERIK.s_yazarlik = {
  ad: "Yazarlık ve Yazma Becerileri", ikon: "✍️", renk: "#be185d", secmeli: true,
  kaynaklar: [program("Yazarlık ve Yazma Becerileri", "https://tymm.meb.gov.tr/ogretim-programlari/ortaokul-yazarlik-ve-yazma-becerileri-dersi/18"), EBA, MEBI],
  uniteler: [
    { id: "sy1", ad: "Yazının Planlanması", konular: [
      { id: "sy1k1", ad: "Yazmaya Hazırlık ve Plan",
        ozet: ["Konuyu ve yazma amacını belirle (bilgi verme, anlatma, ikna)", "Okuru düşün: kime yazıyorum?", "Beyin fırtınası: fikirleri not et", "Plan: Giriş – Gelişme – Sonuç", "Giriş: konuyu tanıt · Gelişme: fikirleri örnekle aç · Sonuç: toparla", "Zamanı bölümlere göre paylaştır"],
        anlatim: [
          "İyi bir yazı plansız yazılmaz. Önce konu ve amaç belirlenir: Okuru bilgilendirmek mi, bir olay anlatmak mı, yoksa bir düşünceye ikna etmek mi istiyoruz? Okurun kim olduğunu düşünmek dil seçimini etkiler.",
          "Ardından beyin fırtınası yapılır; konuyla ilgili aklımıza gelen bütün fikirler not edilir. Sonra bu fikirler sıralanarak bir plan çıkarılır: giriş, gelişme ve sonuç.",
          "Girişte konu kısaca tanıtılır ve okurun ilgisi çekilir. Gelişmede düşünceler örneklerle açıklanır; her paragraf bir düşünceyi işler. Sonuçta yazı toparlanır ve ana düşünce vurgulanır. Sınavda zaman da bölümlere göre paylaştırılmalıdır."
        ],
        video: "Hk5veYnscQw",
        sorular: [
          S("Yazıda düşüncelerin örneklerle açıklandığı bölüm hangisidir?", ["Gelişme", "Giriş", "Sonuç", "Başlık"], "Gelişme bölümü fikirleri açar."),
          S("Konuyla ilgili aklımıza gelen bütün fikirleri not etmeye ne denir?", ["Beyin fırtınası", "Özetleme", "Dikte", "Kopyalama"], "Beyin fırtınası fikir toplamaktır."),
          S("Yazının sonuç bölümünde ne yapılır?", ["Yazı toparlanır, ana düşünce vurgulanır", "Yeni bir konuya geçilir", "Sadece başlık yazılır", "Konu ilk kez tanıtılır"], "Sonuç toparlayıcıdır."),
          S("Yazmaya başlamadan önce ilk ne belirlenmelidir?", ["Konu ve yazma amacı", "Yazının rengi", "Kâğıdın boyutu", "Kalemin markası"], "Konu ve amaç her şeyi belirler."),
          S("Bir paragrafta genellikle kaç ana düşünce işlenir?", ["Bir", "Beş", "Hiç", "On"], "Her paragraf bir ana düşünceyi işler.")
        ] },
      { id: "sy1k2", ad: "Yazım Kuralları ve Gözden Geçirme",
        ozet: ["Cümleler büyük harfle başlar, uygun noktalama ile biter", "Özel isimler büyük harfle yazılır", "'de/da' bağlacı ayrı, hâl eki bitişik yazılır", "'ki' bağlacı ayrı yazılır", "Paragraf başı içeriden başlanır", "Taslak yazıldıktan sonra okunup düzeltilir"],
        anlatim: [
          "Yazının okunaklı ve anlaşılır olması için yazım ve noktalama kurallarına uyulur. Cümle büyük harfle başlar; nokta, soru işareti veya ünlemle biter. Kişi, şehir ve ülke adları gibi özel isimler büyük harfle yazılır.",
          "Sık yapılan hatalara dikkat edilmelidir: 'Ben de geliyorum' cümlesindeki 'de' bağlaçtır ve ayrı yazılır; 'Evde kaldım' cümlesindeki '-de' ise hâl ekidir ve bitişik yazılır. 'Duydum ki gelmişsin' cümlesindeki 'ki' de ayrı yazılır.",
          "İlk yazılan metin bir taslaktır. Yazı bitince baştan okunur; anlatım bozuklukları, gereksiz tekrarlar ve yazım yanlışları düzeltilir. Gözden geçirme, iyi yazarların vazgeçmediği bir alışkanlıktır."
        ],
        video: "mrfmjsfsHWA",
        sorular: [
          S("Hangi cümlede 'de' doğru yazılmıştır?", ["Ben de seninle geleceğim.", "Bende seninle geleceğim.", "Ev de oturuyorum.", "Okul da kaldım ve uyudum."], "Bağlaç olan 'de' ayrı yazılır; 'Ben de'."),
          S("Özel isimler nasıl yazılır?", ["Büyük harfle başlayarak", "Tamamen küçük harfle", "Tırnak içinde", "Ayrı satırda"], "Özel isimler büyük harfle başlar."),
          S("İlk yazılan, henüz düzeltilmemiş metne ne denir?", ["Taslak", "Özet", "Başlık", "Kaynakça"], "İlk hâli taslaktır."),
          S("Hangi cümlede 'ki' doğru yazılmıştır?", ["Duydum ki sınav ertelenmiş.", "Duydumki sınav ertelenmiş.", "Bahçedeki ki çiçek açtı.", "Evde ki kedi uyuyor."], "Bağlaç olan 'ki' ayrı yazılır."),
          S("Yazıyı bitirdikten sonra ne yapılmalıdır?", ["Okuyup hataları düzeltmek", "Hemen teslim etmek", "Silmek", "Başlığı değiştirmek"], "Gözden geçirmek yazıyı güçlendirir.")
        ] }
    ] }
  ]
};

/* ───────────── ALMANCA ───────────── */
window.ICERIK.s_almanca = {
  ad: "Almanca", ikon: "🇩🇪", renk: "#475569", secmeli: true,
  kaynaklar: [program("Almanca (Çoklu Yabancı Dil Modeli)", "https://tymm.meb.gov.tr/ogretim-programlari/ders/coklu-yabanci-dil-egitim-modeli-almanca"), EBA, MEBI],
  uniteler: [
    { id: "sa1", ad: "Hallo! Tanışma", konular: [
      { id: "sa1k1", ad: "Selamlaşma ve Kendini Tanıtma",
        ozet: ["Hallo! = Merhaba · Guten Morgen! = Günaydın", "Guten Tag! = İyi günler · Guten Abend! = İyi akşamlar", "Tschüss! / Auf Wiedersehen! = Hoşça kal", "Wie heißt du? = Adın ne? → Ich heiße … = Benim adım …", "Wie alt bist du? = Kaç yaşındasın? → Ich bin elf. = 11 yaşındayım", "Woher kommst du? → Ich komme aus der Türkei."],
        anlatim: [
          "Almancada günün saatine göre farklı selamlar kullanılır: sabah 'Guten Morgen', gün içinde 'Guten Tag', akşam 'Guten Abend'. Arkadaşlar arasında kısaca 'Hallo' denir. Ayrılırken arkadaşa 'Tschüss', büyüklere 'Auf Wiedersehen' denir.",
          "Kendimizi tanıtırken 'Ich heiße Eylül' (Benim adım Eylül) deriz. Birine adını sormak için 'Wie heißt du?' kullanılır. Yaşımızı 'Ich bin elf Jahre alt' (On bir yaşındayım) diye söyleriz.",
          "Nereli olduğumuzu 'Ich komme aus der Türkei' (Türkiye'denim) cümlesiyle anlatırız. Almancada 'ei' harfleri 'ay', 'ie' harfleri uzun 'i' diye okunur: heißen 'haysın', vier 'fiir'."
        ],
        video: "mXHcKV8_TUc",
        sorular: [
          S("'Guten Morgen!' ne demektir?", ["Günaydın", "İyi geceler", "Hoşça kal", "Teşekkürler"], "Morgen = sabah."),
          S("'Wie heißt du?' sorusunun anlamı nedir?", ["Adın ne?", "Kaç yaşındasın?", "Nerelisin?", "Nasılsın?"], "heißen = adı … olmak."),
          S("'Benim adım Ali' Almancada nasıl söylenir?", ["Ich heiße Ali.", "Ich bin Türkei.", "Ich komme Ali.", "Wie heißt Ali?"], "Ich heiße + isim."),
          S("Arkadaşına ayrılırken ne dersin?", ["Tschüss!", "Guten Morgen!", "Danke!", "Hallo?"], "Tschüss samimi bir vedadır."),
          S("'Ich komme aus der Türkei.' ne anlama gelir?", ["Türkiye'denim.", "Türkiye'ye gidiyorum.", "Türkçe biliyorum.", "Türk yemeği severim."], "kommen aus = …-den gelmek.")
        ] }
    ] },
    { id: "sa2", ad: "Zahlen und Farben", konular: [
      { id: "sa2k1", ad: "Sayılar (1–20) ve Renkler",
        ozet: ["eins 1 · zwei 2 · drei 3 · vier 4 · fünf 5", "sechs 6 · sieben 7 · acht 8 · neun 9 · zehn 10", "elf 11 · zwölf 12 · zwanzig 20", "rot kırmızı · blau mavi · gelb sarı · grün yeşil", "schwarz siyah · weiß beyaz", "Welche Farbe hat …? = … ne renk?"],
        anlatim: [
          "Almancada 1'den 10'a kadar sayılar: eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn. On bir 'elf', on iki 'zwölf'tür. 13–19 arası sayılar '-zehn' ile biter: dreizehn (13), vierzehn (14). Yirmi 'zwanzig'dir.",
          "Temel renkler: rot (kırmızı), blau (mavi), gelb (sarı), grün (yeşil), schwarz (siyah), weiß (beyaz). Bir şeyin rengini sormak için 'Welche Farbe hat der Ball?' (Top ne renk?) denir; cevap 'Der Ball ist rot.' (Top kırmızı.) olur.",
          "Almancada isimler her zaman büyük harfle yazılır: der Ball (top), die Tasche (çanta), das Buch (kitap). 'der, die, das' isimlerin artikelidir ve kelimeyle birlikte öğrenilmelidir."
        ],
        video: "TZNKHkFt8F8",
        sorular: [
          S("'drei' kaç sayısıdır?", ["3", "2", "4", "8"], "drei = üç."),
          S("Almancada 'kırmızı' hangisidir?", ["rot", "blau", "grün", "gelb"], "rot = kırmızı."),
          S("'zehn' kaç sayısıdır?", ["10", "2", "20", "12"], "zehn = on."),
          S("'Der Himmel ist blau.' cümlesinde gökyüzü ne renktir?", ["Mavi", "Yeşil", "Sarı", "Siyah"], "blau = mavi."),
          S("Almancada isimler nasıl yazılır?", ["Büyük harfle başlar", "Hep küçük harfle", "Tırnak içinde", "Sondan başa"], "Almancada tüm isimler büyük harfle başlar.")
        ] }
    ] }
  ]
};

/* ───────────── SATRANÇ ───────────── */
window.ICERIK.s_satranc = {
  ad: "Satranç", ikon: "♟️", renk: "#1f2937", secmeli: true,
  kaynaklar: [program("Oyun ve Oyun Etkinlikleri (Satranç)", "https://tymm.meb.gov.tr/ogretim-programlari/ortaokul-oyun-ve-oyun-etkinlikleri-dersi-satranc/18"), EBA, MEBI],
  uniteler: [
    { id: "ss1", ad: "Satrancı Tanıyalım ve Satranç Tahtası", konular: [
      { id: "ss1k1", ad: "Tahta, Kareler ve Merkez",
        ozet: ["Tahta 8 × 8 = 64 kareden oluşur", "Sağ alt köşedeki kare beyaz olmalıdır", "Dikey sıralar (sütunlar): a'dan h'ye harflerle", "Yatay sıralar (satırlar): 1'den 8'e rakamlarla", "Her kare bir harf + rakamla adlandırılır: e4, d5", "Merkez kareler: d4, e4, d5, e5"],
        anlatim: [
          "Satranç tahtası 8 dikey ve 8 yatay sıradan oluşan 64 kareli bir tahtadır. Tahta, her oyuncunun sağ alt köşesinde beyaz bir kare olacak şekilde yerleştirilir: 'Sağda beyaz' kuralı.",
          "Dikey sıralar soldan sağa a, b, c, d, e, f, g, h harfleriyle; yatay sıralar beyazın tarafından başlayarak 1'den 8'e kadar rakamlarla gösterilir. Böylece her karenin bir adı olur: e4, d5, a1 gibi.",
          "Tahtanın ortasındaki d4, e4, d5 ve e5 karelerine merkez kareler denir. Merkezdeki taşlar daha çok kareyi kontrol eder; bu yüzden oyunun başında merkezi ele geçirmek önemlidir. Atatürk de satrancı düşünmeyi geliştiren bir oyun olarak önemsemiştir."
        ],
        video: "lcmOqmcXznQ",
        sorular: [
          S("Satranç tahtasında kaç kare vardır?", ["64", "32", "100", "48"], "8 × 8 = 64"),
          S("Tahta yerleştirilirken sağ alt köşedeki kare hangi renk olmalıdır?", ["Beyaz", "Siyah", "Fark etmez", "Kırmızı"], "'Sağda beyaz' kuralı."),
          S("Satranç tahtasında dikey sıralar nasıl gösterilir?", ["a'dan h'ye harflerle", "1'den 8'e rakamlarla", "Renklerle", "Hayvan adlarıyla"], "Sütunlar harflerle gösterilir."),
          S("Aşağıdakilerden hangisi merkez karelerden biridir?", ["e4", "a1", "h8", "b7"], "Merkez kareler d4, e4, d5, e5."),
          S("Oyunun başında merkezi kontrol etmek neden önemlidir?", ["Taşlar daha çok kareyi kontrol eder", "Kurallar öyle zorunlu kılar", "Oyun hemen biter", "Önemli değildir"], "Merkezdeki taşlar daha etkilidir.")
        ] }
    ] },
    { id: "ss2", ad: "Satranç Taşları ve Hareketleri", konular: [
      { id: "ss2k1", ad: "Taşların Hareketleri ve Değerleri",
        ozet: ["Şah: her yöne 1 kare", "Vezir: düz ve çapraz, istediği kadar (9 puan)", "Kale: düz, istediği kadar (5 puan)", "Fil: çapraz, istediği kadar (3 puan)", "At: 'L' şeklinde, taşların üstünden atlar (3 puan)", "Piyon: ileri 1 kare (ilk hamlede 2), çapraz alır (1 puan)"],
        anlatim: [
          "Her satranç taşının kendine özgü bir hareketi vardır. Şah her yöne yalnızca bir kare gider. Vezir en güçlü taştır; düz ve çapraz yönlerde istediği kadar ilerleyebilir. Kale düz çizgilerde, fil çapraz çizgilerde istediği kadar ilerler.",
          "At 'L' harfi şeklinde hareket eder: iki kare düz, bir kare yana. Diğer taşların üzerinden atlayabilen tek taştır. Piyon yalnızca ileri gider; ilk hamlesinde bir ya da iki kare ilerleyebilir, ama taş alırken çapraz ilerler. Son sıraya ulaşan piyon vezire (veya başka bir taşa) terfi eder.",
          "Taşların yaklaşık puan değerleri: piyon 1, at 3, fil 3, kale 5, vezir 9. Şahın puanı yoktur çünkü şah alınamaz; şah kaybedilirse oyun biter. Taş değişimi yaparken bu puanlar karşılaştırılır."
        ],
        video: "T2Cs4PRgRco",
        sorular: [
          S("Diğer taşların üzerinden atlayabilen tek taş hangisidir?", ["At", "Fil", "Kale", "Vezir"], "At 'L' şeklinde atlar."),
          S("Satrançta en güçlü taş hangisidir?", ["Vezir", "Piyon", "At", "Fil"], "Vezir düz ve çapraz ilerler; 9 puandır."),
          S("Fil nasıl hareket eder?", ["Çapraz olarak", "Düz olarak", "'L' şeklinde", "Sadece bir kare"], "Fil çapraz hareket eder."),
          S("Piyon rakip taşı nasıl alır?", ["Çapraz ileri giderek", "Düz ileri giderek", "Geri giderek", "Yana giderek"], "Piyon düz yürür ama çapraz alır."),
          S("Kalenin yaklaşık puan değeri kaçtır?", ["5", "1", "3", "9"], "Kale 5 puandır.")
        ] }
    ] },
    { id: "ss3", ad: "Şah ve Mat", konular: [
      { id: "ss3k1", ad: "Şah Çekme, Mat ve Rok",
        ozet: ["Şah çekmek: rakip şahı tehdit etmek", "Şahtan kurtulma: kaçmak, araya taş koymak, saldıranı almak", "Mat: şahın kurtulma yolu yoktur — oyun biter", "Pat: sıra gelen oyuncunun yasal hamlesi yok ama şah tehdit altında değil — berabere", "Rok: şah ve kalenin aynı hamlede yer değiştirmesi", "Rok için şah ve kale daha önce oynamamış olmalı"],
        anlatim: [
          "Bir taş rakip şahı tehdit ederse 'şah' çekilmiş olur. Şahı tehdit altında olan oyuncu bu tehditten kurtulmak zorundadır. Üç yol vardır: şahı güvenli bir kareye kaçırmak, saldıran taşla şahın arasına bir taş koymak ya da saldıran taşı almak.",
          "Şah tehdit altındaysa ve bu üç yoldan hiçbiri mümkün değilse mat olur ve oyun biter. Eğer sıra gelen oyuncunun şahı tehdit altında değilse ama yapabileceği hiçbir yasal hamle yoksa buna pat denir ve oyun berabere biter.",
          "Rok, şahı güvenli bir yere almak ve kaleyi oyuna sokmak için yapılan özel bir hamledir: şah kaleye doğru iki kare gider, kale de şahın üzerinden atlayıp yanına geçer. Rok için şah ve kale daha önce hiç oynamamış, aralarındaki kareler boş olmalı ve şah tehdit altında olmamalıdır."
        ],
        video: "3LuxKUsFRSk",
        sorular: [
          S("Şahın tehditten kurtulma yolu yoksa ne olur?", ["Mat olur, oyun biter", "Pat olur", "Oyun sürer", "Rok yapılır"], "Kurtuluş yolu yoksa mattır."),
          S("Şah tehdit altında değil ama hiçbir yasal hamle yoksa buna ne denir?", ["Pat", "Mat", "Rok", "Şah"], "Pat beraberliktir."),
          S("Şah ve kalenin aynı hamlede yer değiştirdiği özel hamle hangisidir?", ["Rok", "Terfi", "Pat", "Fork"], "Bu hamleye rok denir."),
          S("Aşağıdakilerden hangisi şah tehdidinden kurtulma yollarından biri DEĞİLDİR?", ["Rok yapmak", "Şahı kaçırmak", "Araya taş koymak", "Saldıran taşı almak"], "Şah tehdit altındayken rok yapılamaz."),
          S("Rok yapabilmek için hangi şart gerekir?", ["Şah ve kale daha önce oynamamış olmalı", "Vezir alınmış olmalı", "Oyunun sonunda olmalı", "Şah tehdit altında olmalı"], "Şah ve kale hiç hareket etmemiş olmalıdır.")
        ] }
    ] }
  ]
};
})();
