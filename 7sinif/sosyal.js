window.ICERIK = window.ICERIK || {};
// 7. sınıf Sosyal Bilgiler - Maarif Modeli 6 öğrenme alanı
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.sosyal = {
  ad: "Sosyal Bilgiler", ikon: "🌍", renk: "#f59e0b",
  uniteler: [
    {
      id: "s1", ad: "Birlikte Yaşamak",
      konular: [
        {
          id: "s1k1", ad: "Gruplarda ve Sosyal Hayatta Etkili İletişim", video: "HxazaWPTzGA",
          ozet: ["İletişim: duygu, düşünce ve bilgilerin karşılıklı paylaşılması (gönderici, mesaj, kanal, alıcı, geri bildirim).", "Etkili iletişim: etkin dinleme, empati, saygı, ben dili, beden dili uyumu.", "Ben dili: 'Sen hep geç kalıyorsun!' yerine 'Geç kaldığında endişeleniyorum.'", "İletişimi engelleyenler: emir vermek, suçlamak, alay etmek, sözünü kesmek, önyargı.", "Kitle iletişim araçları: gazete, radyo, televizyon, internet, sosyal medya."],
          anlatim: [
            "İnsanların duygu, düşünce ve bilgilerini karşılıklı olarak paylaşmasına iletişim denir. İletişimde mesajı gönderen (gönderici), mesaj, mesajın iletildiği kanal, mesajı alan (alıcı) ve alıcının verdiği tepki (geri bildirim) bulunur.",
            "Ailede, okulda ve arkadaş gruplarında etkili iletişim kurmak ilişkilerimizi güçlendirir. Karşımızdakini sözünü kesmeden, göz teması kurarak dinlemek (etkin dinleme), kendimizi onun yerine koymak (empati) ve saygılı olmak etkili iletişimin temelidir.",
            "Duygularımızı ifade ederken suçlayıcı 'sen dili' yerine 'ben dili' kullanmak çatışmaları azaltır: 'Odamı dağıttın!' yerine 'Odam dağınık olunca huzursuz oluyorum.' Emir vermek, alay etmek, önyargılı davranmak ve sözü kesmek iletişimi engeller.",
            "Gazete, radyo, televizyon, internet ve sosyal medya gibi çok sayıda insana aynı anda ulaşan araçlara kitle iletişim araçları denir. Bu araçlardan aldığımız bilgilerin doğruluğunu farklı kaynaklardan kontrol etmeli, sosyal medyada başkalarının haklarına saygı göstermeliyiz."
          ],
          sorular: [
            S("Hangisi \"ben dili\" ile kurulmuş bir cümledir?", ["Sesin yüksek olunca ders çalışmakta zorlanıyorum.", "Sen hep gürültü yapıyorsun!", "Sus artık!", "Senin yüzünden ders çalışamıyorum."], "Ben dili kendi duygumuzu anlatır, suçlamaz."),
            S("Hangisi etkili iletişimi engelleyen bir davranıştır?", ["Karşısındakinin sözünü kesmek", "Göz teması kurmak", "Empati yapmak", "Saygılı bir dil kullanmak"], "Söz kesmek iletişimi engeller."),
            S("Kendini karşısındakinin yerine koyarak onun duygularını anlamaya ne denir?", ["Empati", "Önyargı", "Sempati", "Geri bildirim"], "Empati: kendini başkasının yerine koymak.")
          ]
        },
        {
          id: "s1k2", ad: "Özel Gereksinimli Bireyler ve Fırsat Eşitliği", video: "6Myp0b96R0w",
          ozet: ["Özel gereksinimli birey: görme, işitme, bedensel, zihinsel ya da öğrenme farklılığı olan kişi.", "Fırsat eşitliği: herkesin eğitim, sağlık, ulaşım ve iş imkânlarından eşit yararlanması.", "Erişilebilirlik: rampa, asansör, sesli trafik lambası, kabartma (Braille) alfabe, hissedilebilir yüzey, işaret dili.", "Kaynaştırma eğitimi: özel gereksinimli öğrencilerin akranlarıyla aynı sınıfta eğitim alması.", "3 Aralık Dünya Engelliler Günü."],
          anlatim: [
            "Görme, işitme, bedensel, zihinsel ya da öğrenme alanında farklı gereksinimleri olan bireylere özel gereksinimli birey denir. Her birey toplumun eşit ve değerli bir üyesidir.",
            "Fırsat eşitliği, herkesin eğitim, sağlık, ulaşım, kültür ve iş imkânlarından eşit biçimde yararlanabilmesidir. Bunun için çevrenin herkes tarafından kullanılabilir olması, yani erişilebilir olması gerekir.",
            "Kaldırımlardaki rampalar, binalardaki asansörler, görme engelliler için sesli trafik lambaları ve hissedilebilir yüzeyler, kabartma (Braille) alfabeli kitaplar, televizyonlarda işaret dili tercümanı ve altyazı erişilebilirliği sağlar. Okullarda kaynaştırma eğitimiyle özel gereksinimli öğrenciler akranlarıyla birlikte öğrenir.",
            "Bizler de fırsat eşitliğine katkı sağlayabiliriz: Engelli rampalarının önünü kapatmamak, engelli park yerlerini işgal etmemek, işaret dilinden birkaç kelime öğrenmek ve önyargısız davranmak bunlardandır. 3 Aralık Dünya Engelliler Günü'nde farkındalık etkinlikleri yapılır."
          ],
          sorular: [
            S("Görme engelli bireylerin okuyabilmesi için kullanılan alfabe hangisidir?", ["Kabartma (Braille) alfabe", "İşaret dili", "Mors alfabesi", "Latin alfabesi"], "Braille alfabesi dokunarak okunur."),
            S("Hangisi erişilebilirliği artıran bir uygulama değildir?", ["Engelli rampasının önüne araç park etmek", "Binalara asansör yapmak", "Sesli trafik lambası kullanmak", "Televizyonda işaret dili tercümanı bulundurmak"], "Rampanın önünü kapatmak erişimi engeller."),
            S("Dünya Engelliler Günü hangi tarihtedir?", ["3 Aralık", "23 Nisan", "10 Kasım", "1 Mayıs"], "3 Aralık.")
          ]
        },
        {
          id: "s1k3", ad: "Millî Meseleler ve Toplumsal Dayanışma", video: "XWUGkphMzk4",
          ozet: ["Millî mesele: bütün milleti ilgilendiren, birlik ve beraberlik gerektiren konu.", "Çanakkale Savaşı (1915) ve Kurtuluş Savaşı (1919-1922): milletin topyekûn mücadelesi.", "Kıbrıs Barış Harekâtı (1974): Kıbrıs Türklerinin güvenliği.", "15 Temmuz 2016: darbe girişimine karşı milletin demokrasiye sahip çıkması.", "Afetlerde dayanışma: 1999 Marmara, 2023 Kahramanmaraş merkezli depremler."],
          anlatim: [
            "Bütün milleti ilgilendiren ve çözümü için birlik ve beraberlik gerektiren konulara millî mesele denir. Türk milleti tarih boyunca zor zamanlarda birbirine kenetlenmiştir.",
            "Çanakkale Savaşı'nda (1915) ve Kurtuluş Savaşı'nda (1919-1922) Anadolu'nun her yerinden insanlar cepheye koştu. Kadınlar cephane taşıdı, halk elindeki her şeyi ordusuyla paylaştı. Bu dayanışma bağımsızlığımızı kazanmamızı sağladı.",
            "1974'te Kıbrıs Türklerinin can güvenliği tehlikeye girince Kıbrıs Barış Harekâtı yapıldı. 15 Temmuz 2016'daki darbe girişimine karşı milletimiz sokaklara çıkarak demokrasiye ve millî iradeye sahip çıktı; bu gün Demokrasi ve Millî Birlik Günü olarak anılır.",
            "Doğal afetler de millî dayanışmanın görüldüğü zamanlardır. 1999 Marmara ve 2023 Kahramanmaraş merkezli depremlerde ülkenin dört bir yanından yardımlar ulaştırıldı, gönüllüler arama kurtarma çalışmalarına katıldı. 'Birlikten kuvvet doğar' sözü bu dayanışmayı anlatır."
          ],
          sorular: [
            S("15 Temmuz hangi adla anılmaktadır?", ["Demokrasi ve Millî Birlik Günü", "Cumhuriyet Bayramı", "Zafer Bayramı", "Gençlik ve Spor Bayramı"], "15 Temmuz 2016'da millet demokrasiye sahip çıktı."),
            S("Kıbrıs Barış Harekâtı hangi yıl yapılmıştır?", ["1974", "1923", "1953", "1999"], "1974."),
            S("Kurtuluş Savaşı'nda halkın cepheye cephane taşıması neyin göstergesidir?", ["Millî birlik ve dayanışmanın", "Ekonomik zenginliğin", "Teknolojik gelişmişliğin", "Savaşa ilgisizliğin"], "Halk topyekûn mücadele etti.")
          ]
        }
      ]
    },
    {
      id: "s2", ad: "Evimiz Dünya",
      konular: [
        {
          id: "s2k1", ad: "Küreselleşme ve Etkileri", video: "iWdYvbUkQ1E",
          ozet: ["Küreselleşme: ülkelerin ekonomi, kültür, iletişim ve teknoloji alanında birbirine bağlanması.", "Nedenleri: internet, hızlı ulaşım, uluslararası ticaret, çok uluslu şirketler.", "Olumlu: bilgiye ve ürünlere kolay ulaşım, kültürel etkileşim, bilimsel iş birliği.", "Olumsuz: yerel kültürlerin zayıflaması, salgın hastalıkların hızlı yayılması, çevre sorunları, gelir farklılıkları.", "Girişimcilik ve yerel ürünlerin dünyaya tanıtılması küreselleşmenin fırsatlarıdır."],
          anlatim: [
            "Dünyadaki ülkelerin ekonomi, kültür, iletişim, bilim ve teknoloji gibi alanlarda birbirine giderek daha çok bağlanmasına küreselleşme denir. İnternet ve hızlı ulaşım araçları dünyayı adeta küçük bir köye dönüştürmüştür.",
            "Bugün giydiğimiz bir tişörtün pamuğu bir ülkede yetişir, başka bir ülkede dokunur, bir başka ülkede satılır. Çok uluslu şirketler, uluslararası ticaret ve internet küreselleşmeyi hızlandırmaktadır.",
            "Küreselleşmenin olumlu etkileri vardır: Bilgiye ve ürünlere kolayca ulaşırız, farklı kültürleri tanırız, bilim insanları dünyanın farklı yerlerinden birlikte çalışır. Bir girişimci yerel ürününü internet üzerinden bütün dünyaya satabilir.",
            "Olumsuz etkileri de vardır: Yerel kültürler ve diller zayıflayabilir, bir ülkede başlayan salgın hastalık veya ekonomik kriz kısa sürede bütün dünyaya yayılabilir, artan üretim ve tüketim çevre sorunlarını büyütür. Küresel sorunlara karşı ülkelerin iş birliği yapması gerekir."
          ],
          sorular: [
            S("Hangisi küreselleşmenin olumsuz etkilerinden biridir?", ["Salgın hastalıkların hızla yayılması", "Bilgiye kolay ulaşılması", "Bilimsel iş birliğinin artması", "Farklı kültürlerin tanınması"], "Salgınlar küresel bağlantılarla hızla yayılır."),
            S("Küreselleşmeyi hızlandıran en önemli etkenlerden biri hangisidir?", ["İnternet ve iletişim teknolojileri", "Ülkelerin sınırlarını kapatması", "Ticaretin yasaklanması", "Ulaşımın yavaşlaması"], "İnternet dünyayı birbirine bağlar."),
            S("Bir köydeki üreticinin ürününü internet üzerinden dünyaya satması neye örnektir?", ["Küreselleşmenin sunduğu fırsatlara", "Kültürel yozlaşmaya", "Doğal afetlere", "Göçe"], "Küreselleşme girişimciliğe fırsat sunar.")
          ]
        },
        {
          id: "s2k2", ad: "Bölgesel ve Küresel Sorunlar ve Türkiye", video: "XsZEumuLp_I",
          ozet: ["Küresel sorunlar: iklim değişikliği, savaşlar, göç, açlık, salgınlar, su kıtlığı, terör.", "Türkiye'nin rolü: insani yardım (AFAD, Kızılay, TİKA), arabuluculuk, barış görevleri, göçmenlere ev sahipliği.", "Türkiye uluslararası kuruluşlara üyedir: BM, NATO, Avrupa Konseyi, İslam İşbirliği Teşkilatı, Türk Devletleri Teşkilatı.", "Dış politika ilkesi: 'Yurtta sulh, cihanda sulh.' (Atatürk)"],
          anlatim: [
            "Dünyada bütün insanlığı etkileyen ve tek bir ülkenin tek başına çözemeyeceği sorunlara küresel sorunlar denir: iklim değişikliği, savaşlar, zorunlu göçler, açlık ve yoksulluk, salgın hastalıklar, su kıtlığı ve terör bunlardandır.",
            "Türkiye bu sorunların çözümünde etkin bir rol üstlenir. AFAD, Kızılay ve TİKA aracılığıyla afet ve savaş bölgelerine insani yardım ulaştırır. Komşu ülkelerdeki savaşlardan kaçan milyonlarca insana ev sahipliği yapmıştır.",
            "Türkiye bölgesel anlaşmazlıklarda arabuluculuk yapar, Birleşmiş Milletler barış görevlerine katılır. Birleşmiş Milletler (BM), NATO, Avrupa Konseyi, İslam İşbirliği Teşkilatı ve Türk Devletleri Teşkilatı gibi uluslararası kuruluşlarda yer alır.",
            "Türk dış politikasının temel ilkesi Atatürk'ün 'Yurtta sulh, cihanda sulh.' (Yurtta barış, dünyada barış) sözüdür. Bu ilke ülkelerle barış içinde yaşamayı ve iş birliğini esas alır."
          ],
          sorular: [
            S("\"Yurtta sulh, cihanda sulh.\" sözü hangi alanla ilgili temel ilkedir?", ["Dış politika", "Ekonomi", "Eğitim", "Spor"], "Atatürk'ün barışçı dış politika ilkesidir."),
            S("Hangisi küresel bir sorundur?", ["İklim değişikliği", "Okul bahçesinin küçük olması", "Bir mahallede çöp konteynerinin dolması", "Bir sınıfın tahtasının bozulması"], "İklim değişikliği bütün dünyayı etkiler."),
            S("Türkiye'nin yurt dışında kalkınma ve insani yardım projeleri yürüten kurumu hangisidir?", ["TİKA", "TÜİK", "TRT", "TCDD"], "TİKA: Türk İşbirliği ve Koordinasyon Ajansı.")
          ]
        }
      ]
    },
    {
      id: "s3", ad: "Ortak Mirasımız",
      konular: [
        {
          id: "s3k1", ad: "Osmanlı Devleti'nin Kuruluşu ve Fetih Politikaları", video: "ok-zpxWjy3w",
          ozet: ["Osmanlı Beyliği 1299'da Söğüt ve Domaniç çevresinde Osman Bey tarafından kuruldu.", "Hızlı büyüme nedenleri: Bizans'a komşu olması, adaletli yönetim, güçlü ordu, uygun fetih politikaları.", "İstimalet: fethedilen yerlerdeki halka hoşgörülü ve adaletli davranma.", "İskân: fethedilen yerlere Türk nüfus yerleştirme.", "Gaza ve cihat: İslam'ı yaymak ve sınırları genişletmek için yapılan seferler.", "1453 İstanbul'un fethi (II. Mehmet, Fatih)."],
          anlatim: [
            "Osmanlı Beyliği, Anadolu Selçuklu Devleti'nin dağılmasından sonra Söğüt ve Domaniç çevresinde Osman Bey önderliğinde 1299'da kuruldu. Bizans sınırında bulunması, beyliğin hızla gelişmesine imkân verdi.",
            "Osmanlılar fethettikleri bölgelerde istimalet politikası uyguladı: Halkın dinine, diline ve geleneklerine saygı gösterdi, adaletli vergiler aldı. Bu hoşgörü, fethedilen yerlerdeki halkın Osmanlı yönetimini benimsemesini sağladı.",
            "Fethedilen bölgelere Anadolu'dan Türk aileleri yerleştirildi; buna iskân politikası denir. Böylece Balkanlar'da kalıcı bir Türk varlığı oluştu. Gaza ve cihat anlayışıyla yapılan seferler ise sınırların genişlemesini sağladı.",
            "Orhan Bey döneminde ilk düzenli ordu kuruldu, Rumeli'ye geçildi. II. Mehmet (Fatih Sultan Mehmet) 1453'te İstanbul'u fethetti; Orta Çağ sona erip Yeni Çağ başladı ve İstanbul Osmanlı'nın başkenti oldu."
          ],
          sorular: [
            S("Fethedilen yerlerdeki halka hoşgörü ve adaletle davranma politikasına ne ad verilir?", ["İstimalet", "İskân", "Devşirme", "Tımar"], "İstimalet: gönül kazanma politikası."),
            S("İstanbul hangi yıl fethedilmiştir?", ["1453", "1299", "1071", "1517"], "1453, Fatih Sultan Mehmet."),
            S("Fethedilen bölgelere Türk ailelerinin yerleştirilmesine ne denir?", ["İskân", "İstimalet", "Gaza", "Islahat"], "İskân: yerleştirme politikası.")
          ]
        },
        {
          id: "s3k2", ad: "Cihan Devleti Osmanlı", video: "UyUhWfcI5_w",
          ozet: ["Yavuz Sultan Selim: Mısır seferi (1517), halifeliğin Osmanlı'ya geçmesi.", "Kanuni Sultan Süleyman (1520-1566): en geniş sınırlar, Mohaç Zaferi (1526), Preveze Deniz Zaferi (1538).", "Cihan devleti: üç kıtada geniş topraklara sahip, dünya siyasetine yön veren devlet.", "Yönetim: Divan-ı Hümayun; tımar sistemi; devşirme ve Enderun."],
          anlatim: [
            "Osmanlı Devleti 16. yüzyılda üç kıtada (Avrupa, Asya, Afrika) geniş topraklara sahip, dünya siyasetinde söz sahibi bir cihan devleti hâline geldi.",
            "Yavuz Sultan Selim, 1517'de Mısır'ı alarak kutsal emanetleri İstanbul'a getirdi ve halifelik Osmanlı'ya geçti. Kanuni Sultan Süleyman döneminde 1526 Mohaç Zaferi ile Macaristan alındı, 1538 Preveze Deniz Zaferi'yle Akdeniz bir Türk gölü hâline geldi. Barbaros Hayreddin Paşa bu dönemin ünlü denizcisidir.",
            "Devlet işleri Divan-ı Hümayun'da görüşülürdü. Tımar sistemiyle toprakların vergisi askerlere ve devlet görevlilerine verilir, böylece hem tarım hem asker yetiştirme düzenlenirdi. Devşirme sistemiyle yetiştirilen yetenekli gençler Enderun Mektebi'nde eğitilerek devlet yöneticisi olurdu.",
            "Osmanlı'nın uzun süre ayakta kalmasında adaletli yönetimi, güçlü ordusu, farklı inanç ve kültürlere hoşgörüsü ve iyi işleyen kurumları etkili oldu."
          ],
          sorular: [
            S("Halifeliğin Osmanlı Devleti'ne geçmesini sağlayan sefer hangisidir?", ["Mısır Seferi (1517)", "Mohaç Seferi (1526)", "İstanbul'un Fethi (1453)", "Preveze Deniz Savaşı (1538)"], "Yavuz Sultan Selim'in Mısır Seferi."),
            S("Akdeniz'in bir Türk gölü hâline gelmesini sağlayan zafer hangisidir?", ["Preveze Deniz Zaferi", "Mohaç Zaferi", "Malazgirt Zaferi", "Kosova Zaferi"], "1538 Preveze, Barbaros Hayreddin Paşa."),
            S("Devlet yöneticisi yetiştirmek amacıyla kurulan saray okulu hangisidir?", ["Enderun", "Divan", "Tımar", "Medrese-i Süleymaniye"], "Enderun Mektebi.")
          ]
        },
        {
          id: "s3k3", ad: "Değişen Dünya ve Osmanlı'da Yenilikler", video: "Kn_RGGTliGE",
          ozet: ["Avrupa'da değişim: Coğrafi Keşifler, Rönesans (sanat-bilim), Reform (din), Aydınlanma, Sanayi Devrimi.", "Lale Devri (1718-1730): ilk Türk matbaası (İbrahim Müteferrika, 1727).", "III. Selim: Nizam-ı Cedit ordusu.", "II. Mahmut: Yeniçeri Ocağı'nın kaldırılması (1826), modern okullar.", "Tanzimat Fermanı (1839), Islahat Fermanı (1856), Kanun-i Esasi ve I. Meşrutiyet (1876)."],
          anlatim: [
            "15. yüzyıldan itibaren Avrupa'da büyük değişimler yaşandı. Coğrafi Keşiflerle yeni kıtalar ve ticaret yolları bulundu. Rönesans ile sanat ve bilimde yenilenme, Reform ile dinî alanda değişim yaşandı. Aydınlanma Çağı ve Sanayi Devrimi Avrupa'yı güçlendirdi.",
            "Avrupa'daki bu gelişmeler karşısında Osmanlı Devleti de yenilik yapma ihtiyacı duydu. Lale Devri'nde (1718-1730) İbrahim Müteferrika ilk Türk matbaasını kurdu (1727). III. Selim, Avrupa tarzında Nizam-ı Cedit ordusunu kurdu.",
            "II. Mahmut 1826'da Yeniçeri Ocağı'nı kaldırdı, yerine modern bir ordu kurdu; modern okullar açtı ve devlet kurumlarını yeniledi. 1839'da ilan edilen Tanzimat Fermanı ile halkın can ve mal güvenliği güvence altına alındı ve kanun üstünlüğü kabul edildi. 1856 Islahat Fermanı ile gayrimüslimlere yeni haklar tanındı.",
            "1876'da ilk anayasa olan Kanun-i Esasi ilan edildi ve I. Meşrutiyet ile halk ilk kez meclis aracılığıyla yönetime katıldı. Bu yenilikler, ileride Cumhuriyet'e uzanan demokratikleşme sürecinin ilk adımlarıydı."
          ],
          sorular: [
            S("İlk Türk matbaasını kim kurmuştur?", ["İbrahim Müteferrika", "Mimar Sinan", "Piri Reis", "Evliya Çelebi"], "1727, Lale Devri."),
            S("Osmanlı'nın ilk anayasası hangisidir?", ["Kanun-i Esasi (1876)", "Tanzimat Fermanı (1839)", "Islahat Fermanı (1856)", "Sened-i İttifak (1808)"], "Kanun-i Esasi ilk anayasadır."),
            S("Yeniçeri Ocağı'nı kaldıran padişah kimdir?", ["II. Mahmut", "III. Selim", "Kanuni Sultan Süleyman", "Fatih Sultan Mehmet"], "1826'da II. Mahmut kaldırdı."),
            S("Avrupa'da sanat ve bilimde yeniden doğuş dönemine ne ad verilir?", ["Rönesans", "Reform", "Tanzimat", "Meşrutiyet"], "Rönesans: yeniden doğuş.")
          ]
        },
        {
          id: "s3k4", ad: "Osmanlı Kültür ve Medeniyeti", video: "",
          ozet: ["Vakıf: kişilerin mallarını topluma hizmet için bağışlaması (cami, çeşme, imaret, köprü).", "Külliye: cami, medrese, imaret, darüşşifa, hamamdan oluşan yapı topluluğu.", "Mimar Sinan: Şehzade, Süleymaniye, Selimiye camileri.", "Geleneksel sanatlar: hat, tezhip, ebru, minyatür, çini, kündekâri.", "Bilim ve gezginler: Piri Reis (Kitab-ı Bahriye, dünya haritası), Evliya Çelebi (Seyahatname), Ali Kuşçu (astronomi)."],
          anlatim: [
            "Osmanlı medeniyetinin en önemli kurumlarından biri vakıftır. Varlıklı kişiler mallarını topluma hizmet için bağışlar; bu gelirle camiler, medreseler, çeşmeler, köprüler, imaretler (aşevleri) ve darüşşifalar (hastaneler) yapılıp işletilirdi. Hatta göçmen kuşlara bakan vakıflar bile vardı.",
            "Şehirler genellikle bir külliyenin çevresinde gelişirdi. Külliyede cami, medrese, imaret, darüşşifa, hamam ve kütüphane bulunurdu. Mimar Sinan Şehzade, Süleymaniye ve Selimiye camileri başta olmak üzere yüzlerce eser vermiştir.",
            "Osmanlı'da geleneksel sanatlar gelişmişti: Hat (güzel yazı), tezhip (süsleme), ebru (su üzerine boyayla desen), minyatür (küçük resim), çini ve ahşap işçiliği bunlardandır.",
            "Bilim ve kültür alanında Piri Reis Kitab-ı Bahriye adlı denizcilik kitabını ve ünlü dünya haritasını hazırladı. Evliya Çelebi gezdiği yerleri Seyahatname'de anlattı. Ali Kuşçu astronomi ve matematik alanında çalıştı. Bu miras bugün de kültürümüzü zenginleştirmektedir."
          ],
          sorular: [
            S("Kişilerin mallarını topluma hizmet için bağışlamasıyla kurulan kurum hangisidir?", ["Vakıf", "Divan", "Tımar", "Enderun"], "Vakıflar toplumsal hizmet kurumlarıdır."),
            S("Seyahatname adlı eseri yazan gezgin kimdir?", ["Evliya Çelebi", "Piri Reis", "Ali Kuşçu", "Katip Çelebi"], "Evliya Çelebi gezdiği yerleri anlattı."),
            S("Su üzerine boyalarla desen oluşturma sanatına ne denir?", ["Ebru", "Hat", "Minyatür", "Tezhip"], "Ebru sanatı.")
          ]
        }
      ]
    },
    {
      id: "s4", ad: "Yaşayan Demokrasimiz",
      konular: [
        {
          id: "s4k1", ad: "Türkiye Cumhuriyeti'nin Nitelikleri", video: "LVhbYOcVIG4",
          ozet: ["Anayasaya göre Türkiye Cumhuriyeti: demokratik, laik, sosyal bir hukuk devletidir.", "Demokratik devlet: yöneticiler seçimle belirlenir, temel haklar güvencededir.", "Laik devlet: din ve devlet işleri ayrıdır; din ve vicdan özgürlüğü vardır.", "Sosyal devlet: vatandaşların refahını, sağlığını, eğitimini gözetir.", "Hukuk devleti: yönetenler de yönetilenler de hukuka bağlıdır."],
          anlatim: [
            "Anayasamıza göre Türkiye Cumhuriyeti demokratik, laik ve sosyal bir hukuk devletidir. Bu nitelikler devletin nasıl yönetildiğini ve vatandaşlarına karşı sorumluluklarını belirler.",
            "Demokratik devlette egemenlik millete aittir; yöneticiler serbest, gizli oyla yapılan seçimlerle belirlenir ve temel hak ve özgürlükler güvence altındadır. Laik devlette din ve devlet işleri birbirinden ayrıdır; devlet bütün inançlara eşit mesafede durur ve herkesin din ve vicdan özgürlüğünü korur.",
            "Sosyal devlet, vatandaşlarının insanca yaşaması için gerekli önlemleri alır: Ücretsiz eğitim, sağlık hizmetleri, yaşlılara ve engellilere destek, iş güvenliği sosyal devletin görevlerindendir.",
            "Hukuk devletinde yöneticiler de vatandaşlar da hukuk kurallarına bağlıdır. Devletin bütün işlemleri yargı denetimine açıktır; vatandaşlar haklarını mahkemelerde arayabilir."
          ],
          sorular: [
            S("Din ve devlet işlerinin birbirinden ayrı olmasını ifade eden nitelik hangisidir?", ["Laiklik", "Sosyal devlet", "Hukuk devleti", "Üniter devlet"], "Laik devlet tüm inançlara eşit mesafededir."),
            S("Devletin vatandaşlarına ücretsiz eğitim ve sağlık hizmeti sunması hangi niteliğiyle ilgilidir?", ["Sosyal devlet", "Laik devlet", "Demokratik devlet", "Cumhuriyet"], "Sosyal devlet vatandaşların refahını gözetir."),
            S("Yönetenlerin de hukuk kurallarına bağlı olması hangi niteliktir?", ["Hukuk devleti", "Laiklik", "Sosyal devlet", "Millî egemenlik"], "Hukuk devleti.")
          ]
        },
        {
          id: "s4k2", ad: "Yönetim Yapısı: Yasama, Yürütme, Yargı", video: "LVhbYOcVIG4",
          ozet: ["Kuvvetler ayrılığı: devlet yetkileri yasama, yürütme ve yargı arasında paylaşılır.", "Yasama: kanun yapma — Türkiye Büyük Millet Meclisi (600 milletvekili).", "Yürütme: kanunları uygulama — Cumhurbaşkanı ve bakanlar.", "Yargı: anlaşmazlıkları çözme — bağımsız mahkemeler.", "Seçimler 5 yılda bir yapılır; 18 yaşını dolduran vatandaşlar oy kullanır."],
          anlatim: [
            "Demokratik ülkelerde devlet yetkileri tek bir kişi ya da kurumda toplanmaz, üç ayrı güç arasında paylaşılır. Buna kuvvetler ayrılığı denir. Bu sayede güçler birbirini denetler ve haklarımız korunur.",
            "Yasama yetkisi, yani kanun yapma yetkisi Türk milleti adına Türkiye Büyük Millet Meclisi'ne (TBMM) aittir. TBMM 600 milletvekilinden oluşur ve milletvekilleri halk tarafından seçilir.",
            "Yürütme yetkisi, yani kanunları uygulama yetkisi Cumhurbaşkanı'na aittir. Cumhurbaşkanı halk tarafından seçilir; bakanları atar. Yargı yetkisi ise bağımsız mahkemeler tarafından Türk milleti adına kullanılır; mahkemeler anlaşmazlıkları hukuka göre çözer.",
            "Milletvekili ve Cumhurbaşkanı seçimleri beş yılda bir yapılır. 18 yaşını doldurmuş her Türk vatandaşı seçimlerde oy kullanabilir. Seçimler serbest, eşit, gizli oy, açık sayım ve döküm esasına göre yapılır."
          ],
          sorular: [
            S("Kanun yapma yetkisi hangi kuruma aittir?", ["Türkiye Büyük Millet Meclisi", "Cumhurbaşkanlığı", "Anayasa Mahkemesi", "Valilik"], "Yasama yetkisi TBMM'nindir."),
            S("Yargı yetkisini kim kullanır?", ["Bağımsız mahkemeler", "Bakanlar", "Milletvekilleri", "Belediye başkanları"], "Yargı bağımsız mahkemelere aittir."),
            S("TBMM kaç milletvekilinden oluşur?", ["600", "550", "450", "81"], "600 milletvekili."),
            S("Devlet yetkilerinin yasama, yürütme ve yargı arasında paylaşılmasına ne denir?", ["Kuvvetler ayrılığı", "Kuvvetler birliği", "Laiklik", "Sosyal devlet"], "Kuvvetler ayrılığı.")
          ]
        },
        {
          id: "s4k3", ad: "Ülkemizde Demokrasinin Gelişimi", video: "",
          ozet: ["1808 Sened-i İttifak · 1839 Tanzimat · 1876 I. Meşrutiyet · 1908 II. Meşrutiyet", "1920 TBMM'nin açılışı · 1921 Teşkilat-ı Esasiye · 1923 Cumhuriyet", "1930 kadınlara belediye, 1934 milletvekili seçme ve seçilme hakkı", "1946 çok partili hayata geçiş, 1950 seçimleri", "Demokrasinin sorunları: darbeler, katılım eksikliği, bilgi kirliliği; çözüm: hukukun üstünlüğü, katılım, eğitim."],
          anlatim: [
            "Ülkemizde demokrasi uzun bir süreçte gelişti. Osmanlı döneminde Sened-i İttifak (1808), Tanzimat (1839) ve Islahat (1856) fermanlarıyla padişahın yetkileri sınırlanmaya başladı. 1876'da I. Meşrutiyet ile ilk anayasa ve meclis, 1908'de II. Meşrutiyet ile yeniden meclisli yönetim kuruldu.",
            "Millî Mücadele döneminde 23 Nisan 1920'de TBMM açıldı ve millî egemenlik hayata geçti. 1921 Anayasası'nda 'Egemenlik kayıtsız şartsız milletindir.' ilkesi yer aldı. 29 Ekim 1923'te Cumhuriyet ilan edildi.",
            "Türk kadınları 1930'da belediye seçimlerinde, 1934'te milletvekili seçimlerinde seçme ve seçilme hakkını kazandı; bu, pek çok Avrupa ülkesinden önceydi. 1946'da çok partili hayata geçildi.",
            "Demokrasinin uygulanmasında zaman zaman sorunlar yaşandı: Askerî darbeler ve darbe girişimleri, seçimlere katılımın düşük olması, bilgi kirliliği ve kutuplaşma bunlardandır. Demokrasinin güçlenmesi için hukukun üstünlüğüne saygı, vatandaşların bilinçli katılımı ve eğitim önemlidir."
          ],
          sorular: [
            S("Türk kadınları milletvekili seçme ve seçilme hakkını hangi yıl kazanmıştır?", ["1934", "1923", "1946", "1908"], "1934."),
            S("Türkiye'de çok partili hayata hangi yıl geçilmiştir?", ["1946", "1923", "1960", "1876"], "1946."),
            S("Osmanlı Devleti'nde ilk anayasa ve meclisin oluşturulduğu dönem hangisidir?", ["I. Meşrutiyet (1876)", "Tanzimat (1839)", "Lale Devri", "II. Meşrutiyet (1908)"], "Kanun-i Esasi, 1876.")
          ]
        }
      ]
    },
    {
      id: "s5", ad: "Hayatımızdaki Ekonomi",
      konular: [
        {
          id: "s5k1", ad: "Millî Kalkınma Hamleleri", video: "GINsYCXis5A",
          ozet: ["İzmir İktisat Kongresi (1923): millî ekonomi ilkeleri belirlendi.", "Aşar vergisinin kaldırılması (1925): köylü rahatladı.", "Teşvik-i Sanayi Kanunu (1927): yerli sanayi desteklendi.", "Kurumlar: Sümerbank (dokuma), Etibank (maden), Türkiye İş Bankası (1924), Merkez Bankası (1930).", "Demiryolu yapımı, şeker fabrikaları (Uşak, Alpullu 1926), Kayseri Uçak Fabrikası, Nuri Demirağ.", "Hedef: tam bağımsızlık için ekonomik bağımsızlık."],
          anlatim: [
            "Cumhuriyet kurulduğunda ülke uzun savaşlardan yorgun çıkmış, ekonomi zayıflamıştı. Atatürk, siyasi bağımsızlığın ekonomik bağımsızlıkla tamamlanması gerektiğini vurguladı. 1923'te toplanan İzmir İktisat Kongresi'nde millî ekonominin ilkeleri belirlendi.",
            "Köylünün ürününün bir kısmını vergi olarak aldığı aşar vergisi 1925'te kaldırıldı; tarıma destek için Ziraat Bankası güçlendirildi, örnek çiftlikler kuruldu. 1927'de çıkarılan Teşvik-i Sanayi Kanunu ile sanayi yatırımları desteklendi.",
            "Türkiye İş Bankası (1924), Merkez Bankası (1930), Sümerbank (dokuma sanayisi) ve Etibank (madencilik) gibi kurumlar kuruldu. Uşak ve Alpullu'da ilk şeker fabrikaları açıldı. Demiryolları ülkenin dört bir yanına ulaştırıldı. Kayseri'de uçak fabrikası kuruldu; Nuri Demirağ gibi girişimciler yerli uçak üretti.",
            "Bu kalkınma hamleleri, Türkiye'nin kendi ihtiyaçlarını kendisi karşılayan, dışa bağımlılığı azalmış bir ülke olma hedefinin parçasıydı."
          ],
          sorular: [
            S("Millî ekonominin ilkelerinin belirlendiği kongre hangisidir?", ["İzmir İktisat Kongresi", "Sivas Kongresi", "Erzurum Kongresi", "Lozan Konferansı"], "1923 İzmir İktisat Kongresi."),
            S("Köylünün ürününden alınan ve 1925'te kaldırılan vergi hangisidir?", ["Aşar", "Cizye", "KDV", "Gümrük"], "Aşar vergisi kaldırıldı."),
            S("Dokuma sanayisini geliştirmek için kurulan kurum hangisidir?", ["Sümerbank", "Etibank", "Ziraat Bankası", "Merkez Bankası"], "Sümerbank dokuma fabrikaları kurdu.")
          ]
        },
        {
          id: "s5k2", ad: "Üretim, Dağıtım ve Tüketim Döngüsü", video: "",
          ozet: ["Üretim: ihtiyaçları karşılayan mal ve hizmetlerin ortaya konması.", "Dağıtım: ürünlerin üreticiden tüketiciye ulaştırılması (ulaşım, depolama, pazarlama).", "Tüketim: mal ve hizmetlerin kullanılması.", "Üretim faktörleri: doğal kaynak, emek, sermaye, girişimci.", "Ekonomik gelişmişlik: üretim ve verimlilik arttıkça kalkınma artar; bilinçli tüketim döngüyü sağlıklı tutar."],
          anlatim: [
            "İnsanların ihtiyaç duyduğu mal ve hizmetlerin ortaya konmasına üretim denir. Üretim için doğal kaynaklara, emeğe (iş gücü), sermayeye (para, makine) ve bunları bir araya getiren girişimciye ihtiyaç vardır.",
            "Üretilen ürünlerin tüketiciye ulaştırılmasına dağıtım denir. Ulaşım, depolama, paketleme ve pazarlama dağıtımın parçalarıdır. Bir tarladaki domates kamyonlarla hâllere, oradan marketlere ulaşır.",
            "Mal ve hizmetlerin kullanılmasına tüketim denir. Üretim, dağıtım ve tüketim birbirini izleyen bir döngü oluşturur: Tüketim olursa üretici kazanır ve yeniden üretir, böylece istihdam ve gelir artar.",
            "Ekonomik olarak gelişmiş ülkelerde üretim teknolojiyle verimli hâle getirilmiş, dağıtım ağları güçlüdür. Bilinçli tüketiciler ihtiyaçları kadar alır, yerli üretimi destekler, israftan kaçınır; böylece döngü hem ekonomiye hem çevreye zarar vermeden sürer."
          ],
          sorular: [
            S("Ürünlerin üreticiden tüketiciye ulaştırılmasına ne denir?", ["Dağıtım", "Üretim", "Tüketim", "Tasarruf"], "Dağıtım: ulaştırma süreci."),
            S("Hangisi üretim faktörlerinden biri değildir?", ["İsraf", "Emek", "Sermaye", "Doğal kaynak"], "Üretim faktörleri: doğal kaynak, emek, sermaye, girişimci."),
            S("Bilinçli tüketicinin özelliği hangisidir?", ["İhtiyacı kadar alması", "Her ürünü indirimde olduğu için alması", "Fişini istememesi", "Son kullanma tarihine bakmaması"], "Bilinçli tüketici israftan kaçınır.")
          ]
        }
      ]
    },
    {
      id: "s6", ad: "Teknoloji ve Sosyal Bilimler",
      konular: [
        {
          id: "s6k1", ad: "Bilim, Teknoloji ve Gelecek", video: "zinDOmMWIkA",
          ozet: ["Bilimsel ve teknolojik gelişmeler toplum hayatını değiştirir.", "Geleceği şekillendirecek alanlar: yapay zekâ, robotik, uzay teknolojileri, biyoteknoloji, yenilenebilir enerji.", "Olumlu etkiler: sağlıkta ilerleme, kolay iletişim, akıllı şehirler.", "Riskler: mahremiyet, iş kayıpları, siber güvenlik, bilimsel etik.", "Bilimsel etik: bilimin insanlığa ve doğaya zarar vermeden yapılması."],
          anlatim: [
            "Tarih boyunca yazının, matbaanın, buhar makinesinin ve internetin icadı insanların yaşamını kökten değiştirmiştir. Bugün de yapay zekâ, robotik, uzay teknolojileri, biyoteknoloji ve yenilenebilir enerji alanındaki gelişmeler geleceğimizi şekillendirmektedir.",
            "Bu gelişmelerin pek çok olumlu etkisi olacaktır: Hastalıklar erken teşhis edilecek, akıllı şehirlerde enerji ve trafik daha verimli yönetilecek, eğitim kişiye özel hâle gelecek.",
            "Bazı riskler de vardır: Kişisel verilerin korunması (mahremiyet), bazı mesleklerin ortadan kalkması, siber saldırılar ve teknolojinin kötüye kullanılması. Bu yüzden bilim insanlarının bilimsel etik kurallarına uyması gerekir: Araştırmalar insana, hayvana ve doğaya zarar vermemeli, başkalarının çalışmaları izinsiz kullanılmamalıdır.",
            "Geleceği öngörmek için bugünkü gelişmeleri incelemek, farklı senaryolar düşünmek ve teknolojiyi bilinçli kullanmak önemlidir."
          ],
          sorular: [
            S("Bilimsel çalışmaların insana ve doğaya zarar vermeden yapılmasını isteyen ilkeler bütününe ne denir?", ["Bilimsel etik", "Küreselleşme", "Girişimcilik", "Kuvvetler ayrılığı"], "Bilimsel etik."),
            S("Hangisi gelecekte teknolojinin olası risklerinden biridir?", ["Kişisel verilerin kötüye kullanılması", "Hastalıkların erken teşhisi", "Enerjinin verimli kullanılması", "Bilgiye kolay ulaşım"], "Mahremiyet önemli bir risktir.")
          ]
        },
        {
          id: "s6k2", ad: "Sosyal Bilimler ve Bilimsel Sorgulama", video: "",
          ozet: ["Sosyal bilimler insanı ve toplumu inceler.", "Tarih: geçmiş · Coğrafya: yer ve insan-doğa ilişkisi · Sosyoloji: toplum · Psikoloji: davranış ve zihin · Ekonomi: üretim-tüketim · Arkeoloji: kazılarla geçmiş · Antropoloji: insan ve kültürler · Siyaset bilimi: yönetim", "Bilimsel sorgulama: problemi belirle → hipotez kur → veri topla → analiz et → sonuç çıkar → paylaş", "Önerme: doğru ya da yanlış olabilen yargı cümlesi."],
          anlatim: [
            "İnsanı ve toplumu farklı yönleriyle inceleyen bilim dallarına sosyal bilimler denir. Tarih geçmişte yaşananları, coğrafya yeryüzünü ve insan-doğa ilişkisini, sosyoloji toplumu, psikoloji insan davranışlarını ve zihnini, ekonomi üretim ve tüketimi inceler.",
            "Arkeoloji kazılarla geçmişten kalan eserleri araştırır; antropoloji insanı ve kültürlerini, siyaset bilimi yönetim biçimlerini, hukuk ise toplumdaki kuralları inceler. Bu bilimler birbirinden yararlanır: Bir şehrin tarihini incelerken coğrafya ve arkeolojiye de başvururuz.",
            "Toplumsal bir problemi çözmek için bilimsel sorgulama adımlarını izleriz: Önce problemi belirleriz ('Okulumuzda neden çok kâğıt israf ediliyor?'). Sonra olası bir cevap, yani hipotez kurarız. Anket, gözlem ve görüşmeyle veri toplar, verileri analiz eder, sonuca ulaşır ve sonucu başkalarıyla paylaşırız.",
            "Bilimsel sorgulamada kullanılan yargı cümlelerine önerme denir; önermeler doğru ya da yanlış olabilir ve kanıtlarla sınanır. Bilimsel bir çalışmada kaynak göstermek ve dürüst olmak çok önemlidir."
          ],
          sorular: [
            S("Kazılar yaparak geçmişten kalan eserleri inceleyen bilim dalı hangisidir?", ["Arkeoloji", "Psikoloji", "Ekonomi", "Siyaset bilimi"], "Arkeoloji."),
            S("İnsan davranışlarını ve zihinsel süreçleri inceleyen bilim dalı hangisidir?", ["Psikoloji", "Coğrafya", "Arkeoloji", "Tarih"], "Psikoloji."),
            S("Bilimsel sorgulamada problemle ilgili kurulan, sınanabilir geçici cevaba ne denir?", ["Hipotez", "Sonuç", "Veri", "Kanun"], "Hipotez.")
          ]
        }
      ]
    }
  ]
};
})();
