window.ICERIK = window.ICERIK || {};
// 5. sınıf Din Kültürü ve Ahlak Bilgisi - Maarif Modeli 5 ünite
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.din = {
  ad: "Din Kültürü", ikon: "🕌", renk: "#0ea5a4",
  uniteler: [
    {
      id: "d1", ad: "Allah İnancı",
      konular: [
        {
          id: "d1k1", ad: "Evrendeki Mükemmel Düzen ve Allah'ın Varlığı", video: "Egpbz7dpbFs",
          ozet: ["Evrende her şey bir düzen ve ölçü içindedir: gece-gündüz, mevsimler, gezegenlerin hareketi.", "Bu düzen, her şeyi yaratan ve yöneten bir Yaratıcının varlığına işaret eder.", "Tevhit: Allah'ın bir ve tek olduğuna inanmak.", "Allah'ın hiçbir şeye benzemediğine, eşi ve ortağı olmadığına inanılır."],
          anlatim: [
            "Etrafımıza baktığımızda her şeyin bir düzen içinde olduğunu görürüz. Dünya kendi etrafında dönerek gece ile gündüzü, Güneş etrafında dolanarak mevsimleri oluşturur. Gezegenler yörüngelerinde çarpışmadan hareket eder.",
            "Canlıların vücudu da mükemmel bir uyumla çalışır: Kalp durmadan kan pompalar, akciğerler nefes almamızı sağlar. Bitkiler topraktan su alır, güneş ışığıyla besin üretir.",
            "İslam'a göre bu mükemmel düzen tesadüfen oluşmamıştır; her şeyi yaratan ve yöneten Allah'ın varlığına işaret eder. Kur'an-ı Kerim insanları evreni gözlemlemeye ve düşünmeye çağırır.",
            "Tevhit, Allah'ın bir ve tek olduğuna inanmaktır. Müslümanlar Allah'ın eşi, benzeri ve ortağı olmadığına inanır. Bu inanç İhlas suresinde özlü bir şekilde anlatılır."
          ],
          sorular: [
            S("Allah'ın bir ve tek olduğuna inanmaya ne ad verilir?", ["Tevhit", "İbadet", "Ahlak", "Hicret"], "Tevhit: birleme, Allah'ın tek olduğuna inanmak."),
            S("Hangisi evrendeki düzene örnek değildir?", ["Bir oyuncağın kırılması", "Gece ve gündüzün oluşması", "Mevsimlerin sırayla gelmesi", "Gezegenlerin yörüngelerinde dönmesi"], "Diğerleri evrendeki düzenli olaylardır.")
          ]
        },
        {
          id: "d1k2", ad: "Allah'ın Güzel İsimleri (Esmaülhüsna)", video: "Egpbz7dpbFs",
          ozet: ["Esmaülhüsna: Allah'ın güzel isimleri.", "Er-Rahman: dünyada bütün canlılara merhamet eden.", "Er-Rahim: ahirette müminlere merhamet eden.", "El-Halık: yaratan · Er-Rezzak: rızık veren · El-Alim: her şeyi bilen", "Es-Semi: işiten · El-Basir: gören · El-Kadir: gücü her şeye yeten · El-Vedud: çok seven"],
          anlatim: [
            "Kur'an-ı Kerim'de Allah'ın sıfatlarını ve özelliklerini anlatan güzel isimleri vardır. Bu isimlere esmaülhüsna denir. Bu isimler Allah'ı daha iyi tanımamıza yardımcı olur.",
            "Er-Rahman, dünyada bütün canlılara merhamet eden; Er-Rahim, merhameti sonsuz olan demektir. El-Halık, her şeyi yoktan yaratan; Er-Rezzak, bütün canlılara rızık veren anlamındadır.",
            "El-Alim, her şeyi bilen; Es-Semi, her şeyi işiten; El-Basir, her şeyi gören; El-Kadir, gücü her şeye yeten; El-Vedud, kullarını çok seven; El-Gafur, bağışlaması çok olan demektir.",
            "Bu isimleri öğrenen bir kişi davranışlarında da merhametli, cömert ve sevgi dolu olmaya özen gösterir."
          ],
          sorular: [
            S("\"Rızık veren\" anlamındaki isim hangisidir?", ["Er-Rezzak", "El-Alim", "Es-Semi", "El-Basir"], "Er-Rezzak: bütün canlılara rızık veren."),
            S("\"Her şeyi gören\" anlamındaki isim hangisidir?", ["El-Basir", "Es-Semi", "El-Halık", "El-Vedud"], "El-Basir: gören.")
          ]
        },
        {
          id: "d1k3", ad: "İhlas Suresi ve Anlamı", video: "Egpbz7dpbFs",
          ozet: ["İhlas suresi Mekke'de inmiştir, 4 ayettir.", "Konusu: tevhit, Allah'ın birliği.", "Anlamı (özet): Allah birdir; her şey O'na muhtaçtır, O hiçbir şeye muhtaç değildir; doğurmamış ve doğurulmamıştır; hiçbir şey O'na denk değildir.", "İhlas: samimiyet, içtenlik demektir."],
          anlatim: [
            "İhlas suresi Kur'an-ı Kerim'in 112. suresidir; Mekke döneminde inmiştir ve 4 ayetten oluşur. 'İhlas' sözcüğü samimiyet ve içtenlik anlamına gelir.",
            "Surenin konusu tevhittir. Surede Allah'ın bir olduğu, her şeyin O'na muhtaç olduğu ama O'nun hiçbir şeye muhtaç olmadığı anlatılır.",
            "Sure ayrıca Allah'ın doğurmadığını ve doğurulmadığını, hiçbir şeyin O'na denk ve benzer olmadığını bildirir.",
            "Müslümanlar bu sureyi namazlarda sıkça okur. Sure, Allah inancının temel özelliklerini kısa ve öz bir şekilde özetlediği için önemlidir."
          ],
          sorular: [
            S("İhlas suresinin ana konusu nedir?", ["Allah'ın birliği (tevhit)", "Namazın kılınışı", "Peygamber kıssaları", "Ahiret hayatı"], "Sure Allah'ın bir olduğunu anlatır."),
            S("\"İhlas\" sözcüğünün anlamı nedir?", ["Samimiyet, içtenlik", "Bolluk", "Sabah vakti", "Yardım"], "İhlas: içtenlik.")
          ]
        }
      ]
    },
    {
      id: "d2", ad: "Namaz",
      konular: [
        {
          id: "d2k1", ad: "Namaz İbadeti ve Çeşitleri", video: "OCDSmbfwN44",
          ozet: ["Namaz: Allah'a saygı ve şükür için yapılan ibadet; günde 5 vakit farzdır.", "Vakitler: sabah, öğle, ikindi, akşam, yatsı.", "Farz: kesin emir (5 vakit, cuma namazı) · Vacip: vitir, bayram namazları · Nafile (sünnet): Hz. Peygamber'in kıldığı ek namazlar.", "Namazın şartları: abdest, temizlik, avret yerlerini örtmek, kıbleye yönelmek, vakit, niyet."],
          anlatim: [
            "Namaz, Müslümanların Allah'a saygı, sevgi ve şükürlerini ifade ettikleri bir ibadettir. Ergenlik çağına gelmiş ve aklı başında her Müslümana günde beş vakit namaz farzdır: sabah, öğle, ikindi, akşam ve yatsı.",
            "Namazlar hükümlerine göre ayrılır: Farz namazlar kesin olarak emredilmiştir (beş vakit ve cuma namazı). Vacip namazlar farz kadar kesin olmasa da önemle kılınması istenenlerdir (vitir namazı, bayram namazları). Nafile (sünnet) namazlar ise Hz. Peygamber'in kıldığı ve tavsiye ettiği ek namazlardır.",
            "Namazın sahih olması için bazı şartlar vardır: abdest almak (gerekirse gusül ya da teyemmüm), beden, elbise ve namaz kılınan yerin temiz olması, avret yerlerinin örtülmesi, kıbleye yönelmek, vaktin girmiş olması ve niyet etmek.",
            "Abdest yüzü, elleri, kolları yıkamak, başı mesh etmek ve ayakları yıkamakla alınır. Su bulunamadığında temiz toprakla teyemmüm yapılabilir."
          ],
          sorular: [
            S("Günde kaç vakit namaz farzdır?", ["5", "3", "2", "7"], "Sabah, öğle, ikindi, akşam, yatsı."),
            S("Bayram namazlarının hükmü nedir?", ["Vacip", "Farz", "Mekruh", "Haram"], "Bayram ve vitir namazları vaciptir."),
            S("Su bulunmadığında abdest yerine yapılan temizlik hangisidir?", ["Teyemmüm", "Gusül", "Kıyam", "Rükû"], "Temiz toprakla teyemmüm yapılır.")
          ]
        },
        {
          id: "d2k2", ad: "Namazın Kılınışı", video: "IshoCmaM8IA",
          ozet: ["Namazın içindeki farzlar (rükünler): iftitah tekbiri, kıyam, kıraat, rükû, secde, son oturuş.", "Kıyam: ayakta durmak · Kıraat: Kur'an'dan okumak · Rükû: eğilmek · Secde: alnı yere koymak.", "Namaz rekâtlardan oluşur.", "Sabah namazının farzı 2, öğle 4, ikindi 4, akşam 3, yatsı 4 rekâttır."],
          anlatim: [
            "Namaz 'Allahu Ekber' diyerek başlanan iftitah tekbiri ile başlar. Ardından ayakta durulur (kıyam) ve Kur'an'dan ayetler okunur (kıraat). Önce Sübhaneke, sonra Fatiha ve bir sure okunur.",
            "Sonra eller dizlere konarak eğilinir; buna rükû denir. Rükûdan doğrulduktan sonra alın, burun, eller, dizler ve ayak parmakları yere değecek şekilde secdeye varılır. İki secde yapılır.",
            "Kıyam, rükû ve iki secdeden oluşan bölüme rekât denir. İki rekâtta bir oturulur ve Tahiyyat duası okunur. Namazın sonundaki oturuşta Tahiyyat, Salli-Barik duaları okunur ve önce sağa sonra sola selam verilerek namaz bitirilir.",
            "Beş vakit namazın farzlarının rekât sayıları: sabah 2, öğle 4, ikindi 4, akşam 3, yatsı 4. Bunların yanında sünnet namazlar da kılınır."
          ],
          sorular: [
            S("Namazda eğilerek elleri dizlere koymaya ne denir?", ["Rükû", "Secde", "Kıyam", "Kıraat"], "Rükû: eğilmek."),
            S("Akşam namazının farzı kaç rekâttır?", ["3", "2", "4", "5"], "Akşam namazının farzı 3 rekâttır."),
            S("Namaza başlarken söylenen \"Allahu Ekber\" sözüne ne ad verilir?", ["İftitah tekbiri", "Selam", "Kıraat", "Secde"], "Namaz iftitah tekbiriyle başlar.")
          ]
        },
        {
          id: "d2k3", ad: "Namazın Kazandırdıkları ve Tahiyyat Duası", video: "LsyisOX8S2Y",
          ozet: ["Namaz kişiye düzen, temizlik, zaman bilinci ve sabır kazandırır.", "Allah'a yakınlık ve iç huzuru sağlar; kötülüklerden uzaklaştırır.", "Cemaatle kılınan namaz birlik ve kardeşliği güçlendirir.", "Tahiyyat duası namazdaki oturuşlarda okunur; Allah'a saygı ve selamı, Hz. Muhammed'e selamı ve şehadeti içerir."],
          anlatim: [
            "Namaz kılan kişi günün belirli vakitlerinde ibadet ettiği için zamanını planlamayı öğrenir. Abdest ve temizlik şartları sayesinde temizliğe özen gösterir.",
            "Namaz insana iç huzuru verir; kişi Allah'a dua ederek dertlerini paylaşır ve kendini güvende hisseder. Kur'an'da namazın insanı kötü davranışlardan alıkoyduğu bildirilir.",
            "Camide cemaatle kılınan namazlarda insanlar omuz omuza durur. Zengin-fakir, genç-yaşlı herkes aynı safta yer alır. Bu da eşitlik, birlik ve kardeşlik duygularını güçlendirir.",
            "Tahiyyat duası namazın oturuşlarında okunur. Duada bütün övgü ve saygının Allah'a ait olduğu ifade edilir; Hz. Peygamber'e ve bütün iyi kullara selam verilir ve Allah'tan başka ilah olmadığına, Hz. Muhammed'in O'nun kulu ve elçisi olduğuna şahitlik edilir."
          ],
          sorular: [
            S("Tahiyyat duası namazın hangi bölümünde okunur?", ["Oturuşlarda", "Rükûda", "Kıyamda", "Secdede"], "Tahiyyat oturuşlarda okunur."),
            S("Cemaatle kılınan namazın en önemli sosyal faydası hangisidir?", ["Birlik ve kardeşliği güçlendirmesi", "Daha kısa sürmesi", "Evde kılınabilmesi", "Yalnız kılınması"], "İnsanlar aynı safta buluşur.")
          ]
        }
      ]
    },
    {
      id: "d3", ad: "Kur'an-ı Kerim",
      konular: [
        {
          id: "d3k1", ad: "Kur'an-ı Kerim'in İç Düzeni", video: "hVM31D7TRMA",
          ozet: ["Ayet: Kur'an'daki her bir cümle/bölüm. Yaklaşık 6236 ayet vardır.", "Sure: ayetlerden oluşan bölüm. 114 sure vardır.", "En uzun sure: Bakara · En kısa sure: Kevser · İlk sure: Fatiha · Son sure: Nas", "Cüz: 20 sayfalık bölüm; Kur'an 30 cüzdür.", "Mushaf: Kur'an'ın kitap hâline getirilmiş şekli."],
          anlatim: [
            "Kur'an-ı Kerim, Allah tarafından Cebrail aracılığıyla Hz. Muhammed'e yaklaşık 23 yılda indirilmiştir. İlk inen ayetler Alak suresinin ilk beş ayetidir ve 'Oku!' emriyle başlar.",
            "Kur'an'ın en küçük bölümüne ayet denir. Ayetlerden oluşan bölümlere sure denir. Kur'an-ı Kerim'de 114 sure ve yaklaşık 6236 ayet vardır.",
            "Kur'an'ın ilk suresi Fatiha, son suresi Nas'tır. En uzun sure Bakara, en kısa sure Kevser suresidir. Kur'an yirmişer sayfalık 30 cüze ayrılmıştır; bu da okumayı kolaylaştırır.",
            "Sureler indiği yere göre ikiye ayrılır: Hicretten önce Mekke'de inenlere Mekki, hicretten sonra Medine'de inenlere Medeni sureler denir. Kur'an'ın kitap hâline getirilmiş şekline mushaf denir."
          ],
          sorular: [
            S("Kur'an-ı Kerim'de kaç sure vardır?", ["114", "30", "6236", "23"], "114 sure vardır."),
            S("Kur'an-ı Kerim'in en kısa suresi hangisidir?", ["Kevser", "Bakara", "Fatiha", "Nas"], "Kevser suresi 3 ayettir."),
            S("Kur'an'ın 20 sayfalık bölümlerine ne ad verilir?", ["Cüz", "Sure", "Ayet", "Mushaf"], "Kur'an 30 cüzdür.")
          ]
        },
        {
          id: "d3k2", ad: "Kur'an-ı Kerim'in Temel Özellikleri", video: "Ve92i-cC99o",
          ozet: ["Son ilahi kitaptır; bütün insanlığa gönderilmiştir.", "Allah tarafından korunmuştur; değiştirilmemiştir.", "Arapça indirilmiştir; anlamını öğrenmek için meallerden yararlanılır.", "Hz. Ebubekir döneminde kitap hâlinde toplandı, Hz. Osman döneminde çoğaltıldı.", "Hafız: Kur'an'ı ezberleyen kişi."],
          anlatim: [
            "Kur'an-ı Kerim, Allah'ın gönderdiği son ilahi kitaptır. Belirli bir topluma değil, bütün insanlığa ve her çağa hitap eder.",
            "Kur'an indiği andan itibaren hem yazıya geçirilmiş hem de ezberlenmiştir. Hz. Ebubekir döneminde sayfalar bir araya getirilerek kitap hâline getirilmiş, Hz. Osman döneminde çoğaltılarak farklı şehirlere gönderilmiştir. Kur'an'ı ezberleyen kişiye hafız denir.",
            "Kur'an Arapça indirilmiştir. Arapça bilmeyenler anlamını öğrenmek için mealleri (çevirileri) ve tefsirleri (açıklamaları) okur.",
            "Müslümanlar Kur'an'a saygı gösterir; onu temiz ellerle tutar, okurken dikkatle dinler ve öğütlerini hayatlarına uygulamaya çalışır."
          ],
          sorular: [
            S("Kur'an-ı Kerim'i ezberleyen kişiye ne ad verilir?", ["Hafız", "Müezzin", "İmam", "Hatip"], "Hafız: Kur'an'ı ezberleyen."),
            S("Kur'an-ı Kerim hangi halife döneminde kitap hâline getirilmiştir?", ["Hz. Ebubekir", "Hz. Ömer", "Hz. Ali", "Hz. Osman"], "Hz. Ebubekir döneminde toplandı; Hz. Osman döneminde çoğaltıldı."),
            S("Kur'an'ın başka bir dile çevirisine ne ad verilir?", ["Meal", "Hadis", "Sure", "Cüz"], "Meal: çeviri.")
          ]
        },
        {
          id: "d3k3", ad: "Kur'an'ın Ana Konuları ve Kevser Suresi", video: "etdozm-dNwk",
          ozet: ["Ana konular: inanç (iman), ibadet, ahlak, kıssalar (peygamber hikâyeleri), öğütler.", "Kevser suresi: Kur'an'ın en kısa suresi, 3 ayet, Mekke'de indi.", "Kevser: bolluk, çok hayır demektir.", "Anlamı (özet): Allah Hz. Peygamber'e pek çok nimet verdiğini bildirir; namaz kılmasını ve kurban kesmesini ister; ona düşmanlık edenin asıl soyu kesik olduğunu belirtir."],
          anlatim: [
            "Kur'an-ı Kerim'in ana konularını şöyle sınıflandırabiliriz: inanç esasları (Allah'a, meleklere, kitaplara, peygamberlere, ahirete, kadere iman), ibadetler (namaz, oruç, zekât, hac), ahlak (doğruluk, adalet, merhamet, yardımlaşma) ve kıssalar (geçmiş peygamberlerin ve toplulukların hikâyeleri).",
            "Kıssalar sayesinde geçmişte yaşananlardan ders çıkarırız; öğütler de hayatımızda doğru davranışlara yönelmemizi sağlar.",
            "Kevser suresi Kur'an'ın 108. ve en kısa suresidir; Mekke'de inmiştir ve 3 ayettir. 'Kevser' sözcüğü bolluk, çok hayır ve cennetteki bir ırmak anlamına gelir.",
            "Surede Allah, Hz. Peygamber'e pek çok iyilik ve nimet verdiğini bildirir; bu nimetlere şükür olarak namaz kılmasını ve kurban kesmesini ister. Son ayette ona düşmanlık eden ve onu 'soyu kesik' diye kötüleyenlerin asıl soyu kesik olanlar olduğu belirtilir."
          ],
          sorular: [
            S("\"Kevser\" sözcüğünün anlamı nedir?", ["Bolluk, çok hayır", "Sabah", "Birlik", "İnsanlar"], "Kevser: bolluk, hayrı çok olan."),
            S("Hangisi Kur'an'ın ana konularından biri değildir?", ["Spor müsabakaları", "İbadet", "Ahlak", "İnanç"], "Diğerleri ana konulardır.")
          ]
        }
      ]
    },
    {
      id: "d4", ad: "Peygamber Kıssaları",
      konular: [
        {
          id: "d4k1", ad: "Allah'ın Elçileri: Peygamberler", video: "XjsXOlEHdn0",
          ozet: ["Peygamber: Allah'ın mesajını insanlara ileten elçi.", "Özellikleri: doğruluk (sıdk), güvenilirlik (emanet), akıllılık (fetanet), günahsızlık (ismet), tebliğ.", "Kur'an'da 25 peygamberin adı geçer; ilki Hz. Âdem, sonuncusu Hz. Muhammed.", "Ülülazm: zorluklara büyük sabır gösteren peygamberler (Hz. Nuh, İbrahim, Musa, İsa, Muhammed).", "Davet: insanları Allah'ın yoluna çağırmak."],
          anlatim: [
            "Allah, insanlara doğru yolu göstermek için içlerinden seçtiği elçiler göndermiştir. Bunlara peygamber denir. İlk peygamber Hz. Âdem, son peygamber Hz. Muhammed'dir. Kur'an-ı Kerim'de 25 peygamberin adı geçer.",
            "Peygamberlerin ortak özellikleri vardır: Doğru sözlüdürler (sıdk), güvenilirdirler (emanet), akıllı ve zekidirler (fetanet), günah işlemekten korunmuşlardır (ismet) ve Allah'tan aldıkları mesajı eksiksiz iletirler (tebliğ).",
            "Peygamberler insanları Allah'a inanmaya ve güzel ahlaka davet etmiş, bu yolda pek çok zorlukla karşılaşmıştır. Zorluklara karşı büyük sabır ve kararlılık gösteren peygamberlere ülülazm peygamberler denir: Hz. Nuh, Hz. İbrahim, Hz. Musa, Hz. İsa ve Hz. Muhammed.",
            "Peygamberler insan oldukları için yer, içer, uyur, çalışır ve hastalanırlardı; yaşayışlarıyla insanlara örnek olmuşlardır."
          ],
          sorular: [
            S("Kur'an-ı Kerim'de adı geçen peygamber sayısı kaçtır?", ["25", "5", "114", "40"], "25 peygamberin adı geçer."),
            S("Peygamberlerin \"güvenilir olma\" özelliğine ne ad verilir?", ["Emanet", "Fetanet", "Sıdk", "Tebliğ"], "Emanet: güvenilirlik."),
            S("Hangisi ülülazm peygamberlerden biri değildir?", ["Hz. Yunus", "Hz. Nuh", "Hz. Musa", "Hz. İbrahim"], "Ülülazm: Nuh, İbrahim, Musa, İsa, Muhammed.")
          ]
        },
        {
          id: "d4k2", ad: "Kur'an'dan Öğütler: Peygamber Kıssaları", video: "jg0gylUAoHw",
          ozet: ["Hz. Nuh: gemi, tufan; inanmayanlara sabırla davet.", "Hz. İbrahim: putlara karşı tek Allah inancı; ateşin onu yakmaması.", "Hz. Yusuf: kuyuya atılması, sabır ve affedicilik.", "Hz. Musa: Firavun'a karşı mücadele, denizin yarılması.", "Hz. Yunus: balığın karnında dua ve tövbe.", "Kureyş suresi: Kureyş kabilesine verilen güven ve bolluk nimetinin hatırlatılması."],
          anlatim: [
            "Kur'an'da anlatılan peygamber kıssaları bize önemli dersler verir. Hz. Nuh, kavmini yıllarca sabırla Allah'a inanmaya çağırdı. İnananlarla birlikte yaptığı gemiye bindi ve büyük tufandan kurtuldu.",
            "Hz. İbrahim, putlara tapan kavmine tek olan Allah'ı anlattı. Onu ateşe attıklarında Allah ateşi serin ve esenlik kıldı. Hz. Yusuf, kardeşleri tarafından kuyuya atıldı, haksız yere hapse girdi; ama sabretti ve sonunda kardeşlerini affetti.",
            "Hz. Musa, zalim Firavun'a karşı mücadele etti; İsrailoğulları'nı Mısır'dan çıkarırken deniz yarıldı ve kurtuldular. Hz. Yunus, kavmini bırakıp gittiği için büyük bir balığın karnında kaldı; orada tövbe edip dua etti ve kurtuldu.",
            "Kureyş suresi 4 ayettir; Allah'ın Kureyş kabilesine kış ve yaz yolculuklarında güven ve bolluk verdiğini hatırlatır ve bu nimetler için Kâbe'nin Rabbine ibadet etmelerini ister."
          ],
          sorular: [
            S("Gemi yaparak inananlarla birlikte tufandan kurtulan peygamber kimdir?", ["Hz. Nuh", "Hz. Yusuf", "Hz. Yunus", "Hz. Musa"], "Hz. Nuh'un gemisi."),
            S("Kardeşleri tarafından kuyuya atılan ve sonunda onları affeden peygamber kimdir?", ["Hz. Yusuf", "Hz. İbrahim", "Hz. Nuh", "Hz. Musa"], "Hz. Yusuf sabır ve affediciliğin örneğidir."),
            S("Kureyş suresinde hangi nimet hatırlatılır?", ["Güven ve bolluk", "Tufandan kurtuluş", "Denizin yarılması", "Ateşin serinlemesi"], "Kureyş'e verilen güven ve rızık hatırlatılır.")
          ]
        }
      ]
    },
    {
      id: "d5", ad: "Mimarimizde Dinî Motifler",
      konular: [
        {
          id: "d5k1", ad: "Dinin Mimarimize Etkisi ve Camiler", video: "Qm5N-pKAAvQ",
          ozet: ["Dinî inançlar mimariyi etkiler: cami, mescit, külliye, medrese, çeşme, sebil.", "Cami: cuma ve bayram namazlarının kılınabildiği büyük ibadethane. Mescit: küçük namaz yeri.", "Caminin bölümleri: mihrap (kıbleyi gösterir), minber (hutbe okunur), kürsü (vaaz verilir), minare (ezan okunur), şadırvan (abdest), müezzin mahfili, kubbe, son cemaat yeri.", "Külliye: cami etrafında medrese, imaret, hamam, şifahane gibi yapılar."],
          anlatim: [
            "İnançlar insanların yaptığı yapıları da etkiler. İslam medeniyetinde camiler, mescitler, medreseler (okullar), imaretler (aşevleri), şifahaneler (hastaneler), çeşmeler, sebiller ve kervansaraylar inşa edilmiştir.",
            "Caminin etrafında kurulan bu yapı topluluğuna külliye denir. Süleymaniye ve Selimiye külliyeleri buna örnektir. Külliyeler ibadetin yanında eğitim, sağlık ve yardımlaşma merkezleriydi.",
            "Caminin bölümlerinin her birinin bir görevi vardır: Mihrap kıble yönünü gösterir ve imam orada durur. Minber, cuma ve bayram hutbelerinin okunduğu merdivenli yüksek yerdir. Kürsü vaaz verilen yerdir. Minareden ezan okunur. Şadırvanda abdest alınır.",
            "Camilerde kubbe, çini, hat (güzel yazı), ahşap ve taş işçiliği gibi sanat dalları birlikte kullanılır. Mimar Sinan bu eserlerin en büyük ustalarındandır."
          ],
          sorular: [
            S("Camide kıble yönünü gösteren bölüm hangisidir?", ["Mihrap", "Minber", "Minare", "Şadırvan"], "Mihrap kıbleyi gösterir."),
            S("Cuma hutbesinin okunduğu merdivenli yer hangisidir?", ["Minber", "Mihrap", "Kürsü", "Kubbe"], "Hutbe minberde okunur."),
            S("Cami, medrese, imaret ve şifahaneden oluşan yapı topluluğuna ne denir?", ["Külliye", "Kervansaray", "Mescit", "Sebil"], "Külliye: yapılar topluluğu.")
          ]
        },
        {
          id: "d5k2", ad: "Kültürümüzden Cami Örnekleri", video: "ohky7vFMmTs",
          ozet: ["Selimiye Camii (Edirne): Mimar Sinan'ın 'ustalık eseri', UNESCO listesinde.", "Süleymaniye Camii (İstanbul): Mimar Sinan'ın 'kalfalık eseri'.", "Şehzade Camii (İstanbul): Mimar Sinan'ın 'çıraklık eseri'.", "Sultanahmet Camii (İstanbul): altı minaresi ve mavi çinileriyle 'Mavi Cami'.", "Divriği Ulu Camii (Sivas): taş süslemeleriyle UNESCO listesinde.", "Bursa Ulu Camii: 20 kubbeli."],
          anlatim: [
            "Ülkemizde tarihî ve sanat değeri yüksek pek çok cami vardır. Mimar Sinan, Osmanlı döneminin en büyük mimarıdır. Şehzade Camii'ni 'çıraklık', Süleymaniye Camii'ni 'kalfalık', Edirne'deki Selimiye Camii'ni 'ustalık' eseri olarak tanımlamıştır.",
            "Selimiye Camii büyük kubbesi ve dört ince minaresiyle ünlüdür; UNESCO Dünya Mirası Listesi'ndedir. İstanbul'daki Sultanahmet Camii altı minaresi ve iç mekândaki mavi çinileri nedeniyle 'Mavi Cami' olarak da bilinir.",
            "Selçuklu döneminden kalan Divriği Ulu Camii ve Darüşşifası (Sivas) muhteşem taş kapı süslemeleriyle UNESCO listesindedir. Bursa Ulu Camii 20 kubbesi ve içindeki şadırvanıyla dikkat çeker.",
            "Bu camileri karşılaştırdığımızda dönemlerine göre kubbe, minare, süsleme ve malzeme özelliklerinin farklılaştığını görürüz. Tarihî camiler ortak kültürel mirasımızdır ve korunması gerekir."
          ],
          sorular: [
            S("Mimar Sinan'ın \"ustalık eserim\" dediği cami hangisidir?", ["Selimiye Camii", "Şehzade Camii", "Süleymaniye Camii", "Sultanahmet Camii"], "Selimiye ustalık eseridir."),
            S("Altı minaresi ve mavi çinileriyle bilinen cami hangisidir?", ["Sultanahmet Camii", "Bursa Ulu Camii", "Divriği Ulu Camii", "Selimiye Camii"], "Sultanahmet'e 'Mavi Cami' denir."),
            S("Taş süslemeleriyle ünlü, UNESCO listesindeki Selçuklu eseri hangisidir?", ["Divriği Ulu Camii", "Şehzade Camii", "Süleymaniye Camii", "Sultanahmet Camii"], "Divriği Ulu Camii ve Darüşşifası (Sivas).")
          ]
        }
      ]
    }
  ]
};
})();
