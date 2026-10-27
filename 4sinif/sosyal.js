// 4. Sınıf Sosyal Bilgiler — 2018 programı üniteleri
(function () {
  const { bankadan } = O;
  const K = (id, ad, ikon, bilgi, banka) => ({ id, ad, ikon, bilgi, uret: bankadan(banka) });
  DERS.sosyal = {
    ad: "Sosyal Bilgiler", ikon: "🌍", renk: "#f4a261",
    temalar: [
      { id: "st1", ad: "Birey ve Toplum", konular: [
        K("so1", "Kendimi Tanıyorum", "🪪", [["🪪", "Kimlik kartında adımız, soyadımız, doğum yerimiz ve tarihimiz yazar."], ["🎨", "Her insanın ilgi, yetenek ve özellikleri farklıdır."], ["🌱", "Fiziksel özelliklerimiz zamanla değişir; büyür ve gelişiriz."], ["🤝", "Farklılıklara saygı göstermeliyiz."]], {
          sorular: [["Kimliğimizde hangi bilgi yer almaz?", "En sevdiğimiz yemek", ["Doğum tarihimiz", "Adımız ve soyadımız"]], ["Kimlik kartımızı hangi kurum verir?", "Nüfus Müdürlüğü", ["Belediye", "Okul"]], ["Bir kişinin resim yapmayı çok iyi bilmesi neyini gösterir?", "Yeteneğini", ["Boyunu", "Yaşını"]], ["Yeteneklerimizi geliştirmek için ne yapmalıyız?", "Düzenli çalışmalı ve uygulamalıyız", ["Hiç denememeliyiz", "Başkalarını taklit etmeliyiz"]]],
          gruplar: { "Fiziksel özellik": ["Boy uzunluğu", "Göz rengi", "Saç rengi", "Kilo"], "İlgi ve yetenek": ["Resim yapmak", "Satranç oynamak", "Şarkı söylemek", "Kitap okumak"] }, gruplaSoru: "Özellikleri ayır.", grupSor: (g) => `Hangisi bir ${g.toLocaleLowerCase("tr")}${g.startsWith("Fiziksel") ? "tir" : "dir"}?`,
          dy: { d: ["Her insan birbirinden farklıdır.", "Farklılıklarımız toplumu zenginleştirir."], y: [["Kimlik kartında boyumuz yazar.", "Kimlikte kişisel bilgiler yazar, boy yazmaz."]] }
        }),
        K("so2", "Ailem ve Soy Ağacım", "🌳", [["🌳", "Soy ağacı aile büyüklerimizi ve akrabalarımızı gösteren şemadır."], ["👴", "Annemizin ve babamızın anne-babaları büyükanne ve büyükbabalarımızdır."], ["📸", "Fotoğraflar, mektuplar ve eşyalar aile tarihimizi öğrenmemizi sağlar."], ["🧹", "Ailede herkesin hak ve sorumlulukları vardır."]], {
          ciftler: [["Babanın babası", "Dede"], ["Annenin kız kardeşi", "Teyze"], ["Babanın kız kardeşi", "Hala"], ["Annenin erkek kardeşi", "Dayı"], ["Babanın erkek kardeşi", "Amca"], ["Amcanın çocuğu", "Kuzen"]], ciftSor: (a) => `${a} bize ne olur?`, ciftBaslik: "Akrabalık ilişkisini eşleştir.",
          sorular: [["Aile tarihimizi öğrenmek için hangisinden yararlanabiliriz?", "Eski aile fotoğrafları", ["Yarın çıkacak gazete", "Hava durumu raporu"]], ["Soy ağacında en üstte genellikle kimler yer alır?", "Büyük dedeler ve nineler", ["Kardeşlerimiz", "Komşularımız"]], ["Ailede alınan kararlara katılmak bir çocuğun neyidir?", "Hakkı", ["Cezası", "Zorunluluğu"]]]
        }),
        K("so3", "Hak ve Sorumluluklarım", "⚖️", [["⚖️", "Haklarımız korunmalı; sorumluluklarımızı da yerine getirmeliyiz."], ["🏠", "Ailede: korunma, sevilme hakkı; odamızı toplama sorumluluğu."], ["🏫", "Okulda: eğitim hakkı; derslere hazırlıklı gelme sorumluluğu."], ["🗳️", "Okul meclisi seçimleri demokrasiyi öğrenmemizi sağlar."]], {
          gruplar: { "Hak": ["Eğitim almak", "Oyun oynamak", "Sağlıklı yaşamak", "Fikrini söylemek", "Seçimde oy kullanmak"], "Sorumluluk": ["Ödev yapmak", "Okul eşyalarını korumak", "Odasını toplamak", "Trafik kurallarına uymak", "Sırasını beklemek"] },
          gruplaSoru: "Hak ve sorumlulukları ayır.", grupSor: (g) => `Hangisi bir ${g === "Hak" ? "haktır" : "sorumluluktur"}?`,
          sorular: [["Okul meclisi başkanı nasıl belirlenir?", "Öğrencilerin oylarıyla", ["Kura çekilerek", "En uzun boylu seçilir"]], ["Bir hakkımızı kullanırken neye dikkat etmeliyiz?", "Başkalarının haklarına zarar vermemeye", ["Herkesin bizi alkışlamasına", "Hızlı davranmaya"]]]
        })
      ] },
      { id: "st2", ad: "Kültür ve Miras", konular: [
        K("so4", "Millî Kültürümüz", "🧶", [["🧶", "Gelenek ve göreneklerimiz kültürümüzün parçasıdır."], ["🍲", "Yöresel yemekler, oyunlar, türküler ve el sanatları kültürel mirasımızdır."], ["🤝", "Bayramlarda büyükleri ziyaret, misafire ikram gibi geleneklerimiz vardır."], ["🏛️", "Tarihî yapılar ve müzeler geçmişimizi tanıtır."]], {
          gruplar: { "El sanatı": ["Halı dokuma", "Çinicilik", "Ebru", "Bakırcılık", "Ahşap oymacılığı"], "Halk oyunu": ["Halay", "Horon", "Zeybek", "Bar"], "Gelenek": ["Bayramda el öpmek", "Misafire ikram", "Asker uğurlama", "Kına gecesi"] },
          gruplaSoru: "Kültürel ögeleri gruplara ayır.", grupSor: (g) => `Hangisi bir ${g.toLocaleLowerCase("tr")} örneğidir?`,
          ciftler: [["Horon", "Karadeniz"], ["Zeybek", "Ege"], ["Halay", "Doğu ve Güneydoğu Anadolu"], ["Kaşık oyunu", "Konya"]], ciftBaslik: "Halk oyununu yöresiyle eşleştir."
        }),
        K("so5", "Millî Mücadele ve Kahramanlarımız", "🇹🇷", [["🚢", "Mustafa Kemal 19 Mayıs 1919'da Samsun'a çıkarak Millî Mücadele'yi başlattı."], ["🏛️", "23 Nisan 1920'de Türkiye Büyük Millet Meclisi açıldı."], ["⚔️", "Çanakkale Savaşı'nda Seyit Onbaşı, Kurtuluş Savaşı'nda Kara Fatma, Nene Hatun, Şerife Bacı gibi kahramanlar vardı."], ["🏅", "30 Ağustos 1922 Büyük Taarruz zaferle sonuçlandı."], ["🎉", "29 Ekim 1923'te Cumhuriyet ilan edildi."]], {
          ciftler: [["19 Mayıs 1919", "Samsun'a çıkış"], ["23 Nisan 1920", "TBMM'nin açılışı"], ["30 Ağustos 1922", "Büyük Taarruz zaferi"], ["29 Ekim 1923", "Cumhuriyet'in ilanı"]], ciftSor: (a) => `${a} tarihinde ne oldu?`, ciftSor2: (b) => `${b} hangi tarihtedir?`, ciftBaslik: "Tarihi olayla eşleştir.",
          sorular: [["İnebolu'dan cephaneyi kağnıyla taşırken şehit düşen kahraman kadın kimdir?", "Şerife Bacı", ["Nene Hatun", "Halide Edip"]], ["Erzurum'da Aziziye Tabyası'nda savaşan kahraman kadın kimdir?", "Nene Hatun", ["Kara Fatma", "Şerife Bacı"]], ["Çanakkale'de 215 kiloluk mermiyi topa taşıyan kahramanımız kimdir?", "Seyit Onbaşı", ["Şahin Bey", "Sütçü İmam"]], ["Gaziantep savunmasının kahramanı kimdir?", "Şahin Bey", ["Seyit Onbaşı", "Sütçü İmam"]], ["Kahramanmaraş'ta ilk kurşunu atan kahraman kimdir?", "Sütçü İmam", ["Şahin Bey", "Nene Hatun"]]],
          dy: { d: ["Millî Mücadele'de kadınlar da cephane taşıyarak büyük destek verdi.", "Gaziantep'e kahramanlığı nedeniyle \"Gazi\" unvanı verildi."], y: [["Cumhuriyet 23 Nisan 1920'de ilan edildi.", "Cumhuriyet 29 Ekim 1923'te ilan edildi."]] }
        }),
        K("so6", "Geçmişimi Öğreniyorum", "📸", [["📸", "Fotoğraflar, belgeler, eşyalar geçmişe ait kanıtlardır."], ["🗣️", "Büyüklerimizle konuşarak geçmişi öğrenebiliriz."], ["⏳", "Oyunlar, oyuncaklar ve ulaşım araçları zamanla değişmiştir."]], {
          gruplar: { "Geçmişte kullanılan": ["Gaz lambası", "Kağnı", "Daktilo", "Pikap (plak çalar)", "Mektup"], "Günümüzde yaygın": ["Akıllı telefon", "Elektrikli araba", "Bilgisayar", "E-posta", "LED lamba"] },
          gruplaSoru: "Araçları geçmiş ve günümüz diye ayır.", grupSor: (g) => `Hangisi ${g === "Geçmişte kullanılan" ? "geçmişte yaygın olarak kullanılırdı" : "günümüzde yaygındır"}?`,
          sorular: [["Dedemizin çocukluğunu öğrenmek için en uygun kaynak hangisidir?", "Dedemizle sohbet etmek", ["Yarının gazetesi", "Hava durumu"]], ["Hangisi geçmişe ait bir kanıt değildir?", "Gelecek yılın takvimi", ["Eski fotoğraf", "Eski karne"]]]
        })
      ] },
      { id: "st3", ad: "İnsanlar, Yerler ve Çevreler", konular: [
        K("so7", "Yön Bulma ve Kroki", "🧭", [["🧭", "Ana yönler: kuzey, güney, doğu, batı."], ["↗️", "Ara yönler: kuzeydoğu, kuzeybatı, güneydoğu, güneybatı."], ["☀️", "Güneş doğudan doğar, batıdan batar; gölgemizden yönümüzü bulabiliriz."], ["🌲", "Ağaçların yosunlu yüzü genellikle kuzeyi gösterir."], ["🗺️", "Kroki, bir yerin kuşbakışı basit çizimidir."]], {
          sorular: [["Kuzey ile doğu arasındaki ara yön hangisidir?", "Kuzeydoğu", ["Güneybatı", "Kuzeybatı"]], ["Güney ile batı arasındaki ara yön hangisidir?", "Güneybatı", ["Kuzeydoğu", "Güneydoğu"]], ["Sabah güneşe dönen biri hangi yöne bakıyordur?", "Doğu", ["Batı", "Kuzey"]], ["Pusulanın ibresi hangi yönü gösterir?", "Kuzey", ["Güney", "Doğu"]], ["Öğle vakti gölgemiz hangi yönü gösterir?", "Kuzey", ["Güney", "Doğu"]], ["Kuzeybatının tam karşısındaki yön hangisidir?", "Güneydoğu", ["Kuzeydoğu", "Güneybatı"]]],
          ciftler: [["Kuzey", "Güney"], ["Doğu", "Batı"], ["Kuzeydoğu", "Güneybatı"], ["Kuzeybatı", "Güneydoğu"]], ciftSor: (a) => `${a} yönünün tam karşısı hangisidir?`, ciftBaslik: "Yönleri karşıtlarıyla eşleştir."
        }),
        K("so8", "Hava Durumu ve Afetler", "⛈️", [["🌦️", "Hava durumu; sıcaklık, yağış, rüzgâr gibi olayların kısa sürede gösterdiği değişimdir."], ["📺", "Hava durumu raporlarında simgeler kullanılır."], ["🌊", "Deprem, sel, heyelan, çığ ve orman yangını doğal afetlerdendir."], ["🎒", "Afetlere karşı deprem çantası hazırlanmalı, toplanma alanları bilinmelidir."]], {
          ciftler: [["☀️", "Güneşli"], ["🌧️", "Yağmurlu"], ["❄️", "Karlı"], ["⛅", "Parçalı bulutlu"], ["🌬️", "Rüzgârlı"], ["⛈️", "Gök gürültülü sağanak"]], ciftSor: (a) => `${a} simgesi hangi hava durumunu gösterir?`, ciftBaslik: "Hava durumu simgesini anlamıyla eşleştir.",
          gruplar: { "Doğal afet": ["Deprem", "Sel", "Çığ", "Heyelan", "Kuraklık"], "Afet değil": ["Gökkuşağı", "Hafif yağmur", "Güneşli hava", "Çiy"] }, grupSor: (g) => g === "Doğal afet" ? "Hangisi bir doğal afettir?" : "Hangisi afet değildir?",
          sorular: [["Deprem anında ne yapılır?", "Çök, kapan, tutun", ["Asansöre binilir", "Pencereden atlanır"]], ["Ülkemizde acil çağrı numarası kaçtır?", "112", ["155", "177"]], ["Afet ve acil durumlarda koordinasyonu sağlayan kurum hangisidir?", "AFAD", ["TSE", "TRT"]]]
        })
      ] },
      { id: "st4", ad: "Bilim, Teknoloji ve Toplum", konular: [
        K("so9", "Buluşlar ve Mucitler", "💡", [["💡", "Thomas Edison ampulü geliştirerek yaygınlaştırdı."], ["☎️", "Telefon Alexander Graham Bell'in buluşu olarak bilinir."], ["🖨️", "Johannes Gutenberg modern matbaayı geliştirdi."], ["✈️", "Wright Kardeşler ilk motorlu uçuşu gerçekleştirdi."], ["⚙️", "El-Cezerî 12. yüzyılda su saatleri ve otomatik makineler tasarladı."]], {
          ciftler: [["Thomas Edison", "Ampul"], ["Graham Bell", "Telefon"], ["Gutenberg", "Matbaa"], ["Wright Kardeşler", "Uçak"], ["El-Cezerî", "Otomatik makineler"], ["Hezârfen Ahmed Çelebi", "Kanatla uçma denemesi"]], ciftSor: (a) => `${a} hangi buluşla tanınır?`, ciftSor2: (b) => `${b} hangi bilim insanı/mucitle ilişkilidir?`, ciftBaslik: "Mucidi buluşuyla eşleştir.",
          sorular: [["Buluşların hayatımıza en önemli katkısı nedir?", "İşlerimizi kolaylaştırması", ["Hiçbir katkısı yoktur", "Doğayı tamamen yok etmesi"]], ["Telefonun icadından önce uzaktaki biriyle nasıl iletişim kurulurdu?", "Mektupla", ["E-postayla", "Görüntülü aramayla"]]]
        }),
        K("so10", "Teknolojiyi Doğru Kullanma", "📱", [["📱", "Teknoloji hayatı kolaylaştırır ama dengeli kullanılmalıdır."], ["🔒", "İnternette kişisel bilgilerimizi paylaşmamalıyız."], ["🧐", "Her bilgi doğru değildir; güvenilir kaynaklardan kontrol etmeliyiz."], ["⚠️", "Teknolojik ürünlerin kullanım kılavuzunu okumalıyız."]], {
          gruplar: { "Doğru kullanım": ["Ödev için güvenilir sitelerden araştırma yapmak", "Ekran süresini sınırlamak", "Şifresini kimseyle paylaşmamak", "Kullanım kılavuzunu okumak"], "Yanlış kullanım": ["Tanımadığı kişilere adresini yazmak", "Gece geç saatlere kadar oyun oynamak", "Her gördüğü haberi doğru sanmak", "Başkasının fotoğrafını izinsiz paylaşmak"] },
          gruplaSoru: "Teknoloji kullanımını ayır.", grupSor: (g) => `Hangisi teknolojinin ${g === "Doğru kullanım" ? "doğru" : "yanlış"} kullanımıdır?`
        })
      ] },
      { id: "st5", ad: "Üretim, Dağıtım ve Tüketim", konular: [
        K("so11", "İstek ve İhtiyaçlar", "🛒", [["🍞", "İhtiyaç, yaşamak için mutlaka gerekli olanlardır: beslenme, barınma, giyinme."], ["🎮", "İstek, sahip olmak istediğimiz ama zorunlu olmayanlardır."], ["💰", "Aile bütçesi gelir ve giderlerden oluşur; önce ihtiyaçlar karşılanır."]], {
          gruplar: { "İhtiyaç": ["Su", "Ekmek", "Kışlık mont", "Ev", "Okul kitapları", "İlaç"], "İstek": ["Oyun konsolu", "Yeni model telefon", "Marka ayakkabı", "Oyuncak robot", "Dondurma"] },
          gruplaSoru: "İhtiyaçları ve istekleri ayır.", grupSor: (g) => `Hangisi bir ${g === "İhtiyaç" ? "ihtiyaçtır" : "istektir"}?`,
          sorular: [["Aile bütçesi hazırlanırken önce ne karşılanmalıdır?", "Temel ihtiyaçlar", ["İstekler", "Tatil"]], ["Harçlığımızı nasıl kullanmalıyız?", "Plan yaparak ve bir kısmını biriktirerek", ["Hemen hepsini harcayarak", "Kaybederek"]]]
        }),
        K("so12", "Bilinçli Tüketici", "🏷️", [["🏷️", "Ürün alırken etiketine, son kullanma tarihine ve fiyatına bakarız."], ["✅", "TSE belgesi, ürünün standartlara uygun olduğunu gösterir."], ["🧾", "Alışverişte fiş veya fatura alırız; sorun olursa değişim yapabiliriz."], ["📞", "Tüketici hakları ihlal edilirse tüketici hakem heyetine başvurulur."]], {
          sorular: [["Ürünün standartlara uygun olduğunu gösteren belge hangisidir?", "TSE belgesi", ["Karne", "Pasaport"]], ["Alışverişten sonra neden fiş almalıyız?", "Değişim ve iade hakkı için", ["Süs olsun diye", "Çöpe atmak için"]], ["Paketli üründe ilk kontrol edilmesi gereken bilgi hangisidir?", "Son kullanma tarihi", ["Paketin rengi", "Reklam yüzü"]], ["Bozuk çıkan bir ürün için ne yapabiliriz?", "Fişiyle birlikte değiştirmek isteriz", ["Hiçbir şey yapamayız", "Ürünü sokağa atarız"]]],
          gruplar: { "Bilinçli tüketici davranışı": ["Alışveriş listesi hazırlamak", "Fiyat karşılaştırmak", "Son kullanma tarihine bakmak", "Fiş istemek", "Bez çanta kullanmak"], "Bilinçsiz tüketim": ["Reklamda gördüğü her şeyi almak", "Fişi istememek", "İhtiyacından fazla almak", "Etiketi okumamak"] }, gruplaSoru: "Tüketici davranışlarını ayır.", grupSor: (g) => g.startsWith("Bilinçli") ? "Hangisi bilinçli bir tüketici davranışıdır?" : "Hangisi bilinçsiz bir tüketim örneğidir?",
          dy: { d: ["Bilinçli tüketici ihtiyacı kadar alır.", "Fiyat ve kalite karşılaştırması yapmak akıllıca bir davranıştır."], y: [["Fiş almak gereksizdir.", "Fiş tüketici haklarını korur."]] }
        })
      ] },
      { id: "st6", ad: "Etkin Vatandaşlık", konular: [
        K("so13", "Çocuk Hakları ve Vatandaşlık", "🧒", [["🧒", "Çocuk Haklarına Dair Sözleşme bütün çocukların haklarını korur."], ["📚", "Eğitim, sağlık, oyun ve korunma hakkı her çocuğun hakkıdır."], ["🇹🇷", "Vatandaşlar devletine karşı vergi verme, yasalara uyma gibi sorumlulukları yerine getirir."], ["🗳️", "Seçme ve seçilme demokrasinin temelidir."]], {
          gruplar: { "Çocuk hakkı": ["Eğitim almak", "Sağlıklı büyümek", "Oyun oynamak", "Bir isme sahip olmak", "Korunmak"], "Vatandaşlık sorumluluğu": ["Yasalara uymak", "Vergi vermek", "Çevreyi korumak", "Kamu malını korumak"] },
          gruplaSoru: "Hak ve sorumlulukları ayır.", grupSor: (g) => `Hangisi bir ${g.toLocaleLowerCase("tr")}dur?`.replace("hakkıdur", "hakkıdır"),
          sorular: [["Dünya Çocuk Hakları Günü hangi tarihtedir?", "20 Kasım", ["23 Nisan", "1 Mayıs"]], ["Kamu malı nedir?", "Hepimizin ortak kullandığı eşyalar ve alanlar", ["Sadece bizim evimiz", "Arkadaşımızın çantası"]], ["Okul meclisi neyi öğretir?", "Demokrasiyi", ["Matematiği", "Resim yapmayı"]]]
        }),
        K("so14", "Yardımlaşma Kurumları", "🤲", [["🌙", "Türk Kızılay afetlerde ve ihtiyaç anında yardım ulaştırır."], ["🚨", "AFAD afet ve acil durumları yönetir."], ["🌳", "TEMA Vakfı erozyonla mücadele eder, ağaçlandırma yapar."], ["🐾", "Hayvan hakları dernekleri sokak hayvanlarını korur."]], {
          ciftler: [["Kızılay", "Kan bağışı ve afet yardımı"], ["AFAD", "Afet yönetimi"], ["TEMA Vakfı", "Erozyonla mücadele"], ["LÖSEV", "Lösemili çocuklara destek"], ["Yeşilay", "Bağımlılıkla mücadele"]], ciftSor: (a) => `${a} hangi alanda çalışır?`, ciftBaslik: "Kurumu çalışma alanıyla eşleştir.",
          dy: { d: ["Gönüllü olmak toplumsal dayanışmayı artırır.", "Kan bağışı hayat kurtarır."], y: [["Yardımlaşma sadece zenginlerin görevidir.", "Herkes gücü ölçüsünde yardım edebilir."]] }
        })
      ] },
      { id: "st7", ad: "Küresel Bağlantılar", konular: [
        K("so15", "Ülkeler ve Kültürler", "🗺️", [["🗺️", "Komşularımız: Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Nahçıvan (Azerbaycan), İran, Irak, Suriye."], ["🌐", "Ülkeler arasında ticaret, turizm ve kültürel ilişkiler vardır."], ["🍜", "Farklı ülkelerin yemekleri, kıyafetleri ve gelenekleri farklıdır; hepsine saygı duyarız."], ["🇹🇷", "Türkiye, Asya ve Avrupa kıtalarında topraklara sahiptir."]], {
          gruplar: { "Komşumuz": ["Yunanistan", "Bulgaristan", "Gürcistan", "İran", "Irak", "Suriye"], "Komşumuz değil": ["Japonya", "Brezilya", "Kanada", "Mısır", "İtalya", "Çin"] },
          gruplaSoru: "Ülkeleri Türkiye'ye komşu olup olmamalarına göre ayır.", grupSor: (g) => g === "Komşumuz" ? "Hangisi Türkiye'nin komşusudur?" : "Hangisi Türkiye'nin komşusu değildir?",
          ciftler: [["Japonya", "Suşi"], ["İtalya", "Pizza"], ["Türkiye", "Kebap"], ["Meksika", "Taco"]], ciftSor: (a) => `${a} hangi yemeğiyle tanınır?`, ciftBaslik: "Ülkeyi meşhur yemeğiyle eşleştir.",
          sorular: [["Türkiye hangi kıtalarda toprağa sahiptir?", "Asya ve Avrupa", ["Afrika ve Amerika", "Sadece Asya"]], ["Ülkemizin başka ülkelere ürün satmasına ne denir?", "İhracat", ["İthalat", "Tasarruf"]]]
        })
      ] }
    ]
  };
})();
