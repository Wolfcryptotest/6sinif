window.ICERIK = window.ICERIK || {};
// Ortaokul (5–8) ORTAK seçmeli ders üniteleri — 2. bölüm: Almanca, Satranç, Matematik Uygulamaları, Fen Bilimleri Uygulamaları.
// secmeli-ortak.js'teki SECMELI_EKLE yardımcısını kullanır. Doğru cevap ilk şıktır; uygulama şıkları karıştırır.
(function () {
  const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
  const ekle = window.SECMELI_EKLE;
  if (!ekle) return;

  /* ───────────── ALMANCA ───────────── */
  ekle("s_almanca", { ad: "Almanca", ikon: "🇩🇪", renk: "#475569" }, [
    { id: "oa_a1", ad: "Meine Familie (Ailem)", konular: [
      { id: "oa_a1a", ad: "Aile Üyeleri ve Artikeller",
        ozet: ["der Vater (baba), die Mutter (anne)", "der Bruder (erkek kardeş), die Schwester (kız kardeş)", "der Großvater / Opa (dede), die Großmutter / Oma (nine)", "Artikeller: der (eril), die (dişil), das (nötr)", "Das ist mein Vater. / Das ist meine Mutter. (Bu benim babam/annem.)"],
        anlatim: [
          "Almancada her ismin bir artikeli vardır: der (eril), die (dişil) ya da das (nötr). Artikeli ismin anlamından her zaman tahmin edemeyiz; bu yüzden kelimeyi artikeliyle birlikte öğrenmek gerekir: der Vater (baba), die Mutter (anne), das Kind (çocuk). Almancada bütün isimler büyük harfle başlar.",
          "Aileyi tanıtırken 'Das ist …' (Bu …'dır) kalıbı kullanılır. Eril ve nötr isimlerle 'mein', dişil isimlerle 'meine' denir: 'Das ist mein Bruder.' (Bu benim erkek kardeşim.), 'Das ist meine Schwester.' (Bu benim kız kardeşim.). Çoğul 'die Eltern' anne-baba, 'die Geschwister' kardeşler demektir.",
          "Kardeş sayısını söylemek için 'Ich habe einen Bruder und eine Schwester.' (Bir erkek kardeşim ve bir kız kardeşim var.) denir. Kardeşi olmayan kişi 'Ich habe keine Geschwister.' der. Dede ve nine için günlük konuşmada 'Opa' ve 'Oma' çok kullanılır."
        ],
        ornekler: [["'Bu benim annem.' cümlesini Almanca yazın.", "Das ist meine Mutter. (Mutter dişil olduğu için 'meine' kullanılır.)"], ["'Ich habe zwei Brüder.' ne demektir?", "İki erkek kardeşim var. (Brüder, Bruder'ın çoğuludur.)"]],
        hatalar: ["İsimleri küçük harfle yazmak: Almancada bütün isimler büyük harfle başlar (der Vater).", "Dişil isimle 'mein' kullanmak: die Mutter → meine Mutter."],
        videoAra: "Almanca aile üyeleri Familie",
        sorular: [
          S("'die Mutter' ne demektir?", ["Anne", "Baba", "Kız kardeş", "Nine"], "Mutter anne demektir."),
          S("'Erkek kardeş' Almanca hangisidir?", ["der Bruder", "die Schwester", "der Vater", "das Kind"], "Erkek kardeş der Bruder'dır."),
          S("'Das ist ___ Schwester.' boşluğa ne gelir?", ["meine", "mein", "der", "das"], "Schwester dişildir; 'meine' kullanılır."),
          S("Almancada nötr isimlerin artikeli hangisidir?", ["das", "der", "die", "ein"], "Nötr artikel das'tır."),
          S("'Oma' kimdir?", ["Nine", "Dede", "Teyze", "Amca"], "Oma ninedir, Opa dededir."),
          S("'Ich habe keine Geschwister.' ne anlama gelir?", ["Kardeşim yok.", "İki kardeşim var.", "Annem yok.", "Ailem büyük."], "Keine Geschwister: hiç kardeşim yok.")
        ] }
    ] },
    { id: "oa_a2", ad: "Zeit und Schule (Zaman ve Okul)", konular: [
      { id: "oa_a2a", ad: "Günler, Aylar ve Saat",
        ozet: ["Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag", "Aylar: Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember", "Günler ve aylar eril: der Montag, der Mai", "am Montag (pazartesi günü), im Mai (mayıs ayında)", "Wie spät ist es? — Es ist drei Uhr. (Saat kaç? — Saat üç.)"],
        anlatim: [
          "Almancada haftanın günleri şunlardır: Montag (pazartesi), Dienstag (salı), Mittwoch (çarşamba), Donnerstag (perşembe), Freitag (cuma), Samstag (cumartesi) ve Sonntag (pazar). Hafta sonuna 'das Wochenende' denir. 'Pazartesi günü' demek için 'am Montag' kullanılır.",
          "Aylar Türkçeye çok benzer: Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember. 'Mayıs ayında' demek için 'im Mai' denir. Doğum gününü söylerken 'Ich habe im Mai Geburtstag.' (Doğum günüm mayısta.) kalıbı kullanılır.",
          "Saati sormak için 'Wie spät ist es?' ya da 'Wie viel Uhr ist es?' denir. Cevap 'Es ist acht Uhr.' (Saat sekiz.) biçimindedir. Yarım saat için 'halb' kullanılır ama dikkat: 'halb neun' saat 8.30 demektir, çünkü dokuza yarım saat kalmıştır."
        ],
        ornekler: [["'Cuma günü' Almanca nasıl söylenir?", "am Freitag"], ["'Es ist halb sieben.' saat kaçı gösterir?", "6.30. 'halb sieben' yediye yarım saat var demektir."]],
        hatalar: ["'halb acht'i 8.30 sanmak: halb acht saat 7.30'dur.", "Günlerle 'im' kullanmak: günlerle 'am', aylarla 'im' kullanılır."],
        videoAra: "Almanca günler aylar saat",
        sorular: [
          S("'Mittwoch' hangi gündür?", ["Çarşamba", "Pazartesi", "Cuma", "Pazar"], "Mittwoch haftanın ortası, çarşambadır."),
          S("'Pazar' Almanca hangisidir?", ["Sonntag", "Samstag", "Montag", "Freitag"], "Pazar Sonntag'dır."),
          S("'Mayıs ayında' nasıl söylenir?", ["im Mai", "am Mai", "um Mai", "der Mai"], "Aylarla 'im' kullanılır."),
          S("'Es ist halb neun.' saat kaçtır?", ["8.30", "9.30", "9.00", "8.00"], "halb neun: dokuza yarım var, yani 8.30."),
          S("'Wie spät ist es?' ne demektir?", ["Saat kaç?", "Bugün günlerden ne?", "Kaç yaşındasın?", "Nasılsın?"], "Saat sorma kalıbıdır."),
          S("'Hafta sonu' Almanca hangisidir?", ["das Wochenende", "der Montag", "die Woche", "der Tag"], "Hafta sonu das Wochenende'dir.")
        ] },
      { id: "oa_a2b", ad: "Okul Eşyaları ve Yiyecekler",
        ozet: ["das Buch (kitap), das Heft (defter), der Stift (kalem)", "der Radiergummi (silgi), das Lineal (cetvel), die Schultasche (okul çantası)", "das Brot (ekmek), das Wasser (su), die Milch (süt), der Apfel (elma)", "Ich habe Hunger. (Acıktım.) / Ich habe Durst. (Susadım.)", "Ich möchte … (… istiyorum.)"],
        anlatim: [
          "Sınıfta en çok kullanılan eşyalar şunlardır: das Buch (kitap), das Heft (defter), der Stift ya da der Kugelschreiber (kalem / tükenmez kalem), der Bleistift (kurşun kalem), der Radiergummi (silgi), das Lineal (cetvel) ve die Schultasche (okul çantası). Bir şeyi sormak için 'Was ist das?' (Bu nedir?) denir; cevap 'Das ist ein Buch.' (Bu bir kitap.) olur.",
          "Yiyecek ve içeceklerden bazıları: das Brot (ekmek), der Käse (peynir), das Ei (yumurta), der Apfel (elma), die Banane (muz), das Wasser (su), die Milch (süt), der Tee (çay) ve der Saft (meyve suyu). Kahvaltıya das Frühstück denir.",
          "Acıktığımızı 'Ich habe Hunger.', susadığımızı 'Ich habe Durst.' diye söyleriz; burada Almanca 'açlığım var' der gibi konuşur. Bir şey isterken kibar kalıp 'Ich möchte ein Glas Wasser, bitte.' (Bir bardak su istiyorum, lütfen.) şeklindedir. Teşekkür için 'Danke!', rica için 'Bitte!' kullanılır."
        ],
        sorular: [
          S("'das Heft' ne demektir?", ["Defter", "Kitap", "Cetvel", "Silgi"], "Heft defterdir."),
          S("'Silgi' Almanca hangisidir?", ["der Radiergummi", "das Lineal", "der Stift", "die Tasche"], "Silgi der Radiergummi'dir."),
          S("'Ich habe Durst.' ne anlama gelir?", ["Susadım.", "Acıktım.", "Yoruldum.", "Üşüdüm."], "Durst susuzluk demektir."),
          S("'die Milch' nedir?", ["Süt", "Su", "Çay", "Ekmek"], "Milch süttür."),
          S("'Was ist das?' sorusunun anlamı nedir?", ["Bu nedir?", "Bu kim?", "Nerede?", "Kaç tane?"], "Was ist das: bu nedir."),
          S("Kibarca su istemek için hangisi kullanılır?", ["Ich möchte Wasser, bitte.", "Wasser jetzt!", "Danke Wasser.", "Ich bin Wasser."], "'Ich möchte …, bitte.' kibar istek kalıbıdır.")
        ] }
    ] }
  ]);

  /* ───────────── SATRANÇ ───────────── */
  ekle("s_satranc", { ad: "Satranç", ikon: "♟️", renk: "#1f2937" }, [
    { id: "osa_1", ad: "Özel Hamleler ve Açılış", konular: [
      { id: "osa_1a", ad: "Piyon Terfisi ve Geçerken Alma",
        ozet: ["Terfi: son sıraya ulaşan piyon vezir, kale, fil ya da ata dönüşür", "Çoğunlukla vezir seçilir; şah ve piyon seçilemez", "Geçerken alma (en passant): iki kare ilerleyen piyonu yanındaki piyon bir kare ilerlemiş gibi alabilir", "Geçerken alma yalnızca hemen bir sonraki hamlede yapılabilir", "Piyonlar ilk hamlede bir ya da iki kare ilerleyebilir"],
        anlatim: [
          "Piyonlar yalnızca ileri gider, çapraz alır. Bir piyon rakibin son sırasına (beyaz için 8., siyah için 1. sıra) ulaşırsa terfi eder: oyuncu onu vezir, kale, fil ya da ata dönüştürür. En güçlü taş olduğu için çoğu zaman vezir seçilir; bu nedenle oyunda iki veya daha fazla vezir olabilir. Piyon şaha ya da yine piyona dönüşemez.",
          "Geçerken alma (en passant) özel bir piyon alışıdır. Rakip piyon ilk hamlesinde iki kare ilerleyip senin piyonunun hemen yanına gelirse, senin piyonun onu sanki yalnızca bir kare ilerlemiş gibi çaprazdan alabilir. Bunun için piyonunun 5. sırada (siyah için 4. sırada) olması gerekir.",
          "Geçerken alma hakkı yalnızca rakip iki kare ilerledikten hemen sonraki hamlede kullanılabilir; bir hamle bekleyen kişi bu hakkı kaybeder. Bu kurallar, piyonların oyunun sonunda ne kadar değerli olabileceğini gösterir: oyun sonunda piyon ilerletmek çoğu zaman kazanmanın anahtarıdır."
        ],
        hatalar: ["Terfi eden piyonun yalnızca vezire dönüşebileceğini sanmak: kale, fil ya da at da seçilebilir.", "Geçerken almayı sonraki hamlelerde yapmaya çalışmak: hak hemen o hamlede kullanılmalıdır."],
        videoAra: "satranç piyon terfisi geçerken alma",
        sorular: [
          S("Son sıraya ulaşan piyonun başka bir taşa dönüşmesine ne denir?", ["Terfi", "Rok", "Pat", "Çatal"], "Bu kural terfidir."),
          S("Terfi eden piyon hangi taşa dönüşemez?", ["Şah", "Vezir", "At", "Fil"], "Piyon şaha dönüşemez."),
          S("Geçerken alma hangi taşlar arasında olur?", ["Piyon ile piyon", "At ile fil", "Kale ile vezir", "Şah ile piyon"], "En passant yalnızca piyonlar arasında yapılır."),
          S("Geçerken alma hakkı ne zaman kullanılmalıdır?", ["Rakip iki kare ilerledikten hemen sonraki hamlede", "Oyunun sonunda", "İstenilen herhangi bir zamanda", "Rok yaptıktan sonra"], "Hak yalnızca hemen sonraki hamlede kullanılır."),
          S("Piyonlar ilk hamlelerinde kaç kare ilerleyebilir?", ["Bir ya da iki", "Yalnız bir", "Üç", "İstediği kadar"], "İlk hamlede bir ya da iki kare gidebilir."),
          S("Terfide çoğunlukla hangi taş seçilir ve neden?", ["Vezir, çünkü en güçlü taştır", "At, çünkü zıplar", "Fil, çünkü çapraz gider", "Kale, çünkü köşededir"], "Vezir en güçlü taş olduğu için tercih edilir.")
        ] },
      { id: "osa_1b", ad: "Açılış İlkeleri",
        ozet: ["Merkezi kontrol et (e4, d4, e5, d5 kareleri)", "Hafif taşları (at ve fil) erken geliştir", "Erken rok yaparak şahı güvene al", "Veziri çok erken oyuna sokma", "Aynı taşı açılışta gereksiz yere iki kez oynama"],
        anlatim: [
          "Açılış, oyunun ilk on – on beş hamlesidir ve amacı taşları iyi karelere yerleştirmektir. İlk ilke merkezi kontrol etmektir: tahtanın ortasındaki e4, d4, e5 ve d5 kareleri en önemli karelerdir, çünkü buradaki taşlar tahtanın her yerine kolayca ulaşır. Bu yüzden oyunlar çoğu zaman 1.e4 ya da 1.d4 ile başlar.",
          "İkinci ilke taşları geliştirmektir: atları ve filleri ilk sıradan çıkarıp etkin karelere getirmek gerekir. 'Atlar kenarda ağlar' sözü, atın tahtanın kenarında az kareyi kontrol ettiğini hatırlatır. Aynı taşı açılışta defalarca oynamak zaman kaybıdır.",
          "Üçüncü ilke şahın güvenliğidir: erken rok yaparak şahı köşeye almak ve kaleyi oyuna katmak gerekir. Veziri çok erken çıkarmak ise genellikle hatadır; rakip, hafif taşlarıyla vezire saldırarak hem vezirini kovalar hem de kendi taşlarını geliştirmiş olur."
        ],
        sorular: [
          S("Açılışta en önemli kareler hangi bölgededir?", ["Tahtanın merkezinde", "Köşelerde", "Kenarlarda", "Rakibin şahının yanında"], "Merkez kareleri en önemlileridir."),
          S("Aşağıdakilerden hangisi doğru bir açılış ilkesidir?", ["Hafif taşları erken geliştirmek", "Veziri ilk hamlede çıkarmak", "Atları kenara koymak", "Şahı ortada bırakmak"], "At ve filler erken geliştirilmelidir."),
          S("'Atlar kenarda ağlar' sözü ne anlatır?", ["Kenardaki at az kareyi kontrol eder", "At en güçlü taştır", "At geri gidemez", "At rok yapar"], "Kenardaki atın etki alanı küçüktür."),
          S("Şahı güvene almak için açılışta ne yapılır?", ["Erken rok", "Şahı merkeze yürütmek", "Piyonları hiç oynatmamak", "Veziri değiştirmek"], "Erken rok şahı güvene alır."),
          S("Veziri çok erken çıkarmak neden genellikle hatadır?", ["Rakip onu kovalarken taşlarını geliştirir", "Vezir geri gelemez", "Vezir alınamaz", "Kurallara aykırıdır"], "Kovalanan vezir zaman kaybettirir.")
        ] }
    ] },
    { id: "osa_2", ad: "Taktikler ve Temel Matlar", konular: [
      { id: "osa_2a", ad: "Çatal, Açmaz ve Şiş",
        ozet: ["Çatal: bir taşın aynı anda iki ya da daha fazla taşa saldırması (at çatalı ünlüdür)", "Açmaz: arkadaki daha değerli taş yüzünden önündeki taşın hareket edememesi", "Şiş: değerli taşa saldırı; o kaçınca arkasındaki taş alınır", "Taş değerleri: piyon 1, at 3, fil 3, kale 5, vezir 9", "Taktik aramadan önce rakibin tehditlerini kontrol et"],
        anlatim: [
          "Taktikler, birkaç hamlede maddi kazanç ya da mat sağlayan kısa hamle dizileridir. Çatal, bir taşın aynı anda iki ya da daha fazla rakip taşa saldırmasıdır; rakip ikisini birden kurtaramaz. En ünlüsü at çatalıdır: at, şaha ve veziri aynı anda tehdit ederse vezir kazanılır.",
          "Açmaz, bir taşın arkasında daha değerli bir taş (özellikle şah) olduğu için hareket edememesidir. Arkasında şah varsa taş kurallar gereği hiç oynayamaz; buna tam açmaz denir. Açmazdaki taş, saldırılması kolay bir hedef hâline gelir.",
          "Şiş, açmazın tersidir: önde değerli bir taş, arkada daha değersiz bir taş vardır. Değerli taşa saldırılınca o kaçmak zorunda kalır ve arkasındaki taş alınır. Taş değerlerini bilmek taktikleri hesaplamayı kolaylaştırır: piyon 1, at 3, fil 3, kale 5, vezir 9 puan sayılır; şah ise paha biçilmezdir."
        ],
        ornekler: [["Beyaz at, siyahın şahına şah çekerken aynı anda kalesine de saldırıyor. Ne olur?", "Siyah şahını kurtarmak zorundadır; beyaz sonraki hamlede kaleyi alır. Bu bir at çatalıdır ve beyaz 5 puanlık kale kazanır."]],
        sorular: [
          S("Bir taşın aynı anda iki rakip taşa saldırmasına ne denir?", ["Çatal", "Açmaz", "Rok", "Pat"], "Bu taktik çataldır."),
          S("Arkasında şah olduğu için hareket edemeyen taşın durumu nedir?", ["Açmaz", "Şiş", "Terfi", "Rok"], "Bu durum açmazdır."),
          S("Satrançta vezirin yaklaşık değeri kaç puandır?", ["9", "3", "5", "1"], "Vezir 9 puan sayılır."),
          S("Önde değerli taş, arkada daha değersiz taş varken yapılan saldırıya ne denir?", ["Şiş", "Çatal", "Açmaz", "Pat"], "Bu taktik şiştir."),
          S("Kalenin değeri kaç puandır?", ["5", "3", "9", "1"], "Kale 5 puandır."),
          S("At ve filin değerleri için hangisi doğrudur?", ["İkisi de yaklaşık 3 puandır", "At 5, fil 1", "At 9, fil 3", "İkisi de 1 puandır"], "At ve fil hafif taşlardır, yaklaşık 3 puan.")
        ] },
      { id: "osa_2b", ad: "Temel Matlar: Koridor Matı, Vezir ve Kale ile Mat",
        ozet: ["Koridor (son sıra) matı: kendi piyonları önünü kapatan şaha kale ya da vezirle son sıradan mat", "Vezir + şah ile mat: rakip şahı kenara itip vezirle bitirmek", "İki kale ile 'merdiven matı'", "Pat tuzağına dikkat: rakip şaha hamle hakkı bırak", "Mat için kendi şahın da yardıma gelmelidir"],
        anlatim: [
          "Koridor matı, en sık görülen matlardan biridir. Rok yapmış bir şahın önündeki üç piyon hiç oynamamışsa şah son sırada sıkışır; rakip kale ya da vezir son sıraya gelip şah çektiğinde şahın kaçacak yeri kalmaz. Bunu önlemek için piyonlardan birini bir kare oynatıp şaha 'nefes deliği' açmak gerekir.",
          "Oyun sonunda yalnız şahı kalan rakibe vezir ve şahla mat yapılabilir. Vezir, şahtan bir at hamlesi uzakta durarak rakip şahın alanını küçültür ve onu tahtanın kenarına iter; sonra kendi şahın yaklaşır ve vezir kenarda mat eder. İki kaleyle yapılan 'merdiven matında' ise kaleler sırayla bir sıra ilerleyerek şahı kenara sürer.",
          "Bu matlarda en büyük tehlike pattir: rakip şah tehdit altında değilken hiç yasal hamlesi kalmazsa oyun berabere biter. Bu yüzden şahı sıkıştırırken her hamlede rakibin en az bir yasal hamlesi kalıp kalmadığı kontrol edilmelidir."
        ],
        hatalar: ["Vezirle şahı köşeye sıkıştırırken pat yapmak: rakibe en az bir hamle hakkı bırakın.", "Kendi şahını mat için kullanmamak: vezir tek başına mat yapamaz, şah yardım etmelidir."],
        sorular: [
          S("Şahın önündeki piyonlar yüzünden son sırada sıkışmasıyla yapılan mat hangisidir?", ["Koridor matı", "Çoban matı", "Pat", "Çatal"], "Bu mat koridor (son sıra) matıdır."),
          S("Koridor matını önlemek için ne yapılır?", ["Şaha nefes deliği açmak için bir piyon oynatılır", "Vezir verilir", "Rok bozulur", "Kale köşede bekletilir"], "Bir piyon oynatılarak şaha kaçış karesi açılır."),
          S("Vezir ve şah ile mat yaparken en büyük tehlike nedir?", ["Pat yapmak", "Rok yapmak", "Terfi", "Geçerken alma"], "Rakibin hamlesi kalmazsa pat olur."),
          S("Vezir tek başına mat yapabilir mi?", ["Hayır, kendi şahının yardımı gerekir", "Evet, her zaman", "Sadece köşede", "Sadece ilk hamlede"], "Yalnız şaha karşı mat için şahın yardımı gerekir."),
          S("İki kaleyle şahı sırayla kenara sürerek yapılan mata ne denir?", ["Merdiven matı", "Koridor matı", "Boğulmuş mat", "Çoban matı"], "Kaleler merdiven gibi ilerler.")
        ] }
    ] }
  ]);

  /* ───────────── MATEMATİK UYGULAMALARI ───────────── */
  ekle("s_matuyg", { ad: "Matematik Uygulamaları", ikon: "🧮", renk: "#4338ca" }, [
    { id: "omu_1", ad: "Problem Çözme Stratejileri", konular: [
      { id: "omu_1a", ad: "Tablo, Şekil, Geriye Doğru Çalışma",
        ozet: ["Polya'nın 4 adımı: anla, plan yap, uygula, kontrol et", "Şekil çizmek problemi görünür kılar", "Tablo yapmak düzenli deneme sağlar", "Geriye doğru çalışma: sonuç verilmişse sondan başa işlem yap", "Tahmin et ve kontrol et: makul bir tahminle başla, düzelt"],
        anlatim: [
          "Matematikçi George Polya problem çözmeyi dört adımda anlatır: Problemi anla (ne veriliyor, ne isteniyor?), bir plan yap (hangi strateji?), planı uygula ve sonucu kontrol et (cevap mantıklı mı?). Bu adımları izlemek, karışık görünen problemleri bile çözülebilir hâle getirir.",
          "Şekil çizmek ya da tablo yapmak bilgileri düzenler. Örneğin 'Bir sırada Ali, Ece'nin solunda; Can, Ali'nin solundadır' gibi bilgiler küçük bir şekille hemen görülür. Tablo ise olasılıkları sırayla denemeye yarar: '3 TL'lik ve 5 TL'lik kalemlerle tam 23 TL ödemek' gibi sorularda tablo yapmak tüm durumları gösterir.",
          "Geriye doğru çalışma, sonucun verildiği ve başlangıcın sorulduğu problemlerde kullanılır: işlemler sondan başa doğru ve tersine çevrilerek yapılır (toplama yerine çıkarma, çarpma yerine bölme). Tahmin et ve kontrol et stratejisinde ise mantıklı bir tahminle başlanır, sonuca göre tahmin büyütülür ya da küçültülür."
        ],
        ornekler: [["Bir sayıyı 3 ile çarpıp 4 ekleyince 31 buluyoruz. Sayı kaçtır?", "Geriye doğru: 31 − 4 = 27, 27 ÷ 3 = 9. Kontrol: 9 × 3 + 4 = 31 ✓"],
          ["3 TL'lik ve 5 TL'lik kalemlerden alıp tam 23 TL ödemek istiyoruz. Kaçar tane alınabilir?", "Tablo: 5'lik 1 tane → kalan 18 = 3×6 ✓; 5'lik 4 tane → kalan 3 = 3×1 ✓. Cevaplar: (6 tane 3'lük, 1 tane 5'lik) ya da (1 tane 3'lük, 4 tane 5'lik)."]],
        hatalar: ["Soruyu tam okumadan işleme başlamak: önce 'ne isteniyor?' sorusunu yanıtlayın.", "Geriye doğru çalışırken işlemi tersine çevirmeyi unutmak."],
        videoAra: "problem çözme stratejileri geriye doğru çalışma",
        sorular: [
          S("Sonucun verilip başlangıcın sorulduğu problemlerde hangi strateji kullanılır?", ["Geriye doğru çalışma", "Şekil boyama", "Ezberleme", "Rastgele seçme"], "Sondan başa ters işlemlerle çalışılır."),
          S("Bir sayının 4 katının 5 fazlası 33'tür. Sayı kaçtır?", ["7", "8", "6", "9"], "33 − 5 = 28, 28 ÷ 4 = 7."),
          S("Polya'nın problem çözme adımlarının sonuncusu hangisidir?", ["Kontrol etmek", "Anlamak", "Plan yapmak", "Uygulamak"], "Son adım sonucu kontrol etmektir."),
          S("Bir sayıyı 2'ye bölüp 6 çıkarınca 4 kalıyor. Sayı kaçtır?", ["20", "10", "16", "8"], "4 + 6 = 10, 10 × 2 = 20."),
          S("Olasılıkları düzenli denemek için hangisi en kullanışlıdır?", ["Tablo yapmak", "Tahmini hiç kontrol etmemek", "Soruyu atlamak", "Sadece ilk sayıyı denemek"], "Tablo tüm durumları düzenli gösterir."),
          S("Ali'nin parası Ece'nin 2 katıdır; ikisinin toplam parası 36 TL'dir. Ece'nin kaç TL'si vardır?", ["12", "18", "24", "9"], "Ece x, Ali 2x: 3x = 36, x = 12.")
        ] },
      { id: "omu_1b", ad: "Örüntüler ve Mantık Bulmacaları",
        ozet: ["Örüntü: belli bir kurala göre devam eden sayı ya da şekil dizisi", "Artış miktarını bul: 3, 7, 11, 15 → her adımda +4", "Kuralı n. terim ile yaz: 4n − 1", "Mantık bulmacalarında bilgileri tabloya yerleştir", "Sihirli kare: satır, sütun ve köşegen toplamları eşit"],
        anlatim: [
          "Örüntü, belli bir kurala göre tekrar eden ya da değişen sayı, şekil veya nesne dizisidir. Bir sayı örüntüsünde ilk iş ardışık terimler arasındaki farkı bulmaktır: 3, 7, 11, 15… dizisinde her terim bir öncekinden 4 fazladır. Bu kural 'n. terim = 4n − 1' biçiminde yazılırsa, 20. terim 4·20 − 1 = 79 olarak hesaplanır.",
          "Bazı örüntüler çarparak ilerler (2, 6, 18, 54 → her adımda ×3) ya da iki farklı kuralı sırayla kullanır. Şekil örüntülerinde ise her adımda eklenen kare, kibrit çöpü ya da nokta sayısı sayılarak kural bulunur.",
          "Mantık bulmacalarında 'Ayşe kırmızıyı sevmez, maviyi seven kişi en uzundur' gibi ipuçları verilir. En güvenli yol bir tablo kurup her ipucuyla olmayan durumları çarpıyla, kesin olanları tikle işaretlemektir. Sihirli karelerde ise her satır, sütun ve köşegen toplamı eşittir; 1'den 9'a sayılarla kurulan 3×3 sihirli karede bu toplam 15'tir."
        ],
        ornekler: [["5, 8, 11, 14, … örüntüsünün 10. terimi kaçtır?", "Fark 3; kural 3n + 2. 10. terim = 3·10 + 2 = 32."], ["1. adımda 4, 2. adımda 7, 3. adımda 10 kibrit çöpü kullanılıyor. 6. adımda kaç çöp gerekir?", "Her adımda 3 çöp eklenir; kural 3n + 1. 6. adım: 3·6 + 1 = 19 çöp."]],
        hatalar: ["Kuralı yalnız ilk iki terime bakarak bulmak; en az üç terimle kontrol edin.", "n. terim kuralında sabit sayıyı unutmak (4n − 1 yerine 4n yazmak)."],
        sorular: [
          S("2, 5, 8, 11, … örüntüsünde sonraki terim kaçtır?", ["14", "13", "15", "12"], "Her adımda +3: 11 + 3 = 14."),
          S("Kuralı 4n − 1 olan örüntünün 5. terimi kaçtır?", ["19", "20", "21", "15"], "4·5 − 1 = 19."),
          S("3, 6, 12, 24, … örüntüsünün kuralı nedir?", ["Her terim bir öncekinin 2 katı", "Her adımda +3", "Her adımda +6", "Her adımda ×3"], "Terimler ikiye katlanır."),
          S("1'den 9'a sayılarla kurulan 3×3 sihirli karede her satırın toplamı kaçtır?", ["15", "45", "9", "18"], "1+…+9 = 45; 3 satıra bölünce 15."),
          S("7, 12, 17, 22 örüntüsünün kuralı hangisidir?", ["5n + 2", "5n", "7n", "n + 5"], "Fark 5; 5·1 + 2 = 7."),
          S("Mantık bulmacalarında ipuçlarını düzenlemenin en iyi yolu hangisidir?", ["Tablo kurup işaretlemek", "Ezberlemek", "Tahminle bitirmek", "İpuçlarını atlamak"], "Tablo olası durumları netleştirir.")
        ] }
    ] },
    { id: "omu_2", ad: "Veri ve Zihinden İşlem", konular: [
      { id: "omu_2a", ad: "Aritmetik Ortalama ve Veri Yorumlama",
        ozet: ["Aritmetik ortalama = verilerin toplamı ÷ veri sayısı", "Açıklık = en büyük değer − en küçük değer", "Ortalama yeni veriyle değişir", "Tepe değer: en çok tekrar eden veri", "Grafikleri yorumlarken birim ve ölçeğe dikkat"],
        anlatim: [
          "Aritmetik ortalama bir veri grubunu tek bir sayıyla temsil etmenin en yaygın yoludur: tüm veriler toplanır ve veri sayısına bölünür. Örneğin 70, 80 ve 90 alan bir öğrencinin ortalaması (70 + 80 + 90) ÷ 3 = 80'dir.",
          "Açıklık, verilerin ne kadar yayıldığını gösterir ve en büyük değerden en küçük değer çıkarılarak bulunur. Tepe değer ise en çok tekrar eden veridir. Bir sınıfın ayakkabı numaralarında en çok 36 varsa tepe değer 36'dır.",
          "Ortalama ile ilgili sık sorulan bir soru tipi, istenen ortalamaya ulaşmak için gereken puandır. Üç sınavının ortalamasının 85 olmasını isteyen ve ilk iki sınavdan 80 ile 85 alan öğrenci, toplamın 3 × 85 = 255 olması gerektiğini bilir; üçüncü sınavdan 255 − 165 = 90 almalıdır."
        ],
        ornekler: [["12, 15, 9, 20, 14 verilerinin ortalaması ve açıklığı nedir?", "Toplam 70, veri sayısı 5 → ortalama 14. Açıklık: 20 − 9 = 11."]],
        hatalar: ["Ortalamayı bulurken veri sayısını yanlış saymak.", "Açıklığı ilk ve son veriyi çıkararak bulmak; en büyük ve en küçük değer kullanılmalıdır."],
        sorular: [
          S("10, 20 ve 30 sayılarının aritmetik ortalaması kaçtır?", ["20", "30", "60", "15"], "60 ÷ 3 = 20."),
          S("5, 12, 8, 3, 9 verilerinin açıklığı kaçtır?", ["9", "7", "12", "4"], "12 − 3 = 9."),
          S("4, 6, 6, 7, 9 verilerinde tepe değer kaçtır?", ["6", "7", "4", "9"], "En çok tekrar eden 6'dır."),
          S("İlk iki sınavı 70 ve 80 olan öğrencinin üç sınav ortalamasının 80 olması için üçüncü sınavdan kaç alması gerekir?", ["90", "80", "85", "100"], "3 × 80 = 240; 240 − 150 = 90."),
          S("Aritmetik ortalama nasıl bulunur?", ["Veriler toplanıp veri sayısına bölünür", "En büyük veri alınır", "Veriler çarpılır", "İlk veri ile son veri toplanır"], "Toplam ÷ veri sayısı."),
          S("4 kişinin yaş ortalaması 12'dir. Yaşlarının toplamı kaçtır?", ["48", "16", "12", "36"], "4 × 12 = 48.")
        ] },
      { id: "omu_2b", ad: "Zihinden İşlem ve Tahmin",
        ozet: ["Yuvarlama: 48 ≈ 50, 312 ≈ 300", "Çarpmada parçalama: 25 × 12 = 25 × 4 × 3 = 300", "5 ile çarpmak: 10 ile çarp, 2'ye böl", "99 ile çarpmak: 100 ile çarp, sayıyı çıkar", "Tahmin, sonucun mantıklı olup olmadığını kontrol etmeye yarar"],
        anlatim: [
          "Zihinden işlem, kâğıt kalem kullanmadan hızlı ve doğru hesap yapmaktır. Toplama ve çıkarmada sayıları onluk ve yüzlüklere ayırmak işi kolaylaştırır: 47 + 38 = 47 + 40 − 2 = 85. Benzer şekilde 300 − 47 = 300 − 50 + 3 = 253 olarak hesaplanabilir.",
          "Çarpmada kolaylık sağlayan yollar vardır: Bir sayıyı 5 ile çarpmak için önce 10 ile çarpıp sonra 2'ye bölmek (46 × 5 = 460 ÷ 2 = 230), 25 ile çarpmak için 100 ile çarpıp 4'e bölmek (36 × 25 = 3600 ÷ 4 = 900), 99 ile çarpmak için 100 ile çarpıp sayıyı çıkarmak (23 × 99 = 2300 − 23 = 2277) en bilinenleridir.",
          "Tahmin, sayıları yuvarlayarak yaklaşık sonuç bulmaktır: 398 × 21 işleminin sonucu yaklaşık 400 × 20 = 8000'dir. Tahmin, hesap makinesinde ya da kâğıtta bulunan sonucun mantıklı olup olmadığını kontrol etmeye yarar; alışverişte toplam tutarı önceden kestirmek de bir tahmin becerisidir."
        ],
        ornekler: [["48 × 5 işlemini zihinden yapın.", "48 × 10 = 480, 480 ÷ 2 = 240."], ["Markette 19,90 TL, 31,50 TL ve 48,75 TL'lik ürünler aldınız. Toplam yaklaşık ne kadardır?", "20 + 30 + 50 = 100 TL civarı (gerçek toplam 100,15 TL)."]],
        sorular: [
          S("36 × 5 işleminin sonucu kaçtır?", ["180", "150", "360", "185"], "36 × 10 = 360, 360 ÷ 2 = 180."),
          S("15 × 99 işleminin sonucu kaçtır?", ["1485", "1500", "1515", "1395"], "1500 − 15 = 1485."),
          S("398 × 21 işleminin sonucu yaklaşık kaçtır?", ["8000", "800", "80000", "4000"], "400 × 20 = 8000."),
          S("47 + 38 işleminin sonucu kaçtır?", ["85", "75", "95", "84"], "47 + 40 − 2 = 85."),
          S("24 × 25 işleminin sonucu kaçtır?", ["600", "480", "500", "625"], "2400 ÷ 4 = 600."),
          S("500 − 186 işleminin sonucu kaçtır?", ["314", "324", "386", "304"], "500 − 200 + 14 = 314.")
        ] }
    ] }
  ]);

  /* ───────────── FEN BİLİMLERİ UYGULAMALARI ───────────── */
  ekle("s_fenuyg", { ad: "Fen Bilimleri Uygulamaları", ikon: "🧪", renk: "#047857" }, [
    { id: "ofu_1", ad: "Deney Tasarlama", konular: [
      { id: "ofu_1a", ad: "Hipotez ve Değişkenler",
        ozet: ["Hipotez: araştırma sorusuna verilen, deneyle sınanabilir geçici cevap", "Bağımsız değişken: deneyi yapanın değiştirdiği", "Bağımlı değişken: ölçülen, gözlenen sonuç", "Kontrol (sabit) değişkenler: aynı tutulan koşullar", "Adil deney: aynı anda yalnızca bir değişken değiştirilir"],
        anlatim: [
          "Bilimsel bir araştırma merakla ve bir soruyla başlar: 'Bitkiler ışıkta mı karanlıkta mı daha hızlı büyür?' Bu soruya deneyle sınanabilecek geçici bir cevap verilir; buna hipotez denir: 'Işık alan bitkiler karanlıktakilerden daha hızlı büyür.' Deney sonunda hipotez doğrulanabilir ya da reddedilebilir; reddedilmesi de bilgi kazandırır.",
          "Deneyde üç tür değişken vardır. Bağımsız değişken deneyi yapanın kendisinin değiştirdiği etkendir (ışık var ya da yok). Bağımlı değişken, bu değişikliğe bağlı olarak ölçülen sonuçtur (bitkinin boyu). Kontrol değişkenleri ise sonucu etkileyebileceği için aynı tutulan koşullardır (su miktarı, toprak türü, saksı büyüklüğü, bitki türü).",
          "Adil bir deneyde aynı anda yalnızca bir değişken değiştirilir. Hem ışığı hem suyu birlikte değiştirirsek farkın hangisinden kaynaklandığını bilemeyiz. Ayrıca güvenilir sonuç için deney birkaç kez tekrarlanır ve birden fazla bitkiyle yapılır."
        ],
        ornekler: [["'Suyun sıcaklığı şekerin çözünme süresini etkiler mi?' deneyinde değişkenleri belirleyin.", "Bağımsız: suyun sıcaklığı. Bağımlı: şekerin çözünme süresi. Kontrol: su miktarı, şeker miktarı, karıştırma hızı, bardak türü."]],
        hatalar: ["Bağımlı ve bağımsız değişkeni karıştırmak: değiştirdiğiniz bağımsız, ölçtüğünüz bağımlıdır.", "Aynı anda birden fazla koşulu değiştirmek; sonuç yorumlanamaz."],
        videoAra: "bağımlı bağımsız kontrol değişkeni hipotez",
        sorular: [
          S("Deneyde araştırmacının kendisinin değiştirdiği etkene ne denir?", ["Bağımsız değişken", "Bağımlı değişken", "Kontrol değişkeni", "Sonuç"], "Değiştirilen etken bağımsız değişkendir."),
          S("Deneyde ölçülen ve gözlenen sonuca ne denir?", ["Bağımlı değişken", "Bağımsız değişken", "Hipotez", "Kontrol değişkeni"], "Ölçülen sonuç bağımlı değişkendir."),
          S("Araştırma sorusuna verilen, deneyle sınanabilir geçici cevap nedir?", ["Hipotez", "Kanun", "Gözlem", "Veri"], "Geçici cevap hipotezdir."),
          S("'Işığın bitki büyümesine etkisi' deneyinde hangisi kontrol değişkenidir?", ["Verilen su miktarı", "Işık miktarı", "Bitkinin boyu", "Hipotez"], "Su miktarı sabit tutulmalıdır."),
          S("Adil deneyde aynı anda kaç değişken değiştirilir?", ["Bir", "İki", "Üç", "Hepsi"], "Yalnızca bir değişken değiştirilir."),
          S("Deneyi birkaç kez tekrarlamak neden önemlidir?", ["Sonuçların güvenilir olması için", "Malzemeyi bitirmek için", "Hipotezi değiştirmek için", "Gerek yoktur"], "Tekrar, tesadüfi sonuçları ayıklar.")
        ] },
      { id: "ofu_1b", ad: "Veri Toplama, Grafik ve Sonuç Çıkarma",
        ozet: ["Ölçümler tabloya birimiyle kaydedilir", "Zamanla değişim çizgi grafiğiyle gösterilir", "Gözlem (gördüğümüz) ile çıkarım (yorumumuz) farklıdır", "Sonuç, hipotezle karşılaştırılır", "Bilim insanları sonuçlarını rapor ve sunumla paylaşır"],
        anlatim: [
          "Deney sırasında yapılan ölçümler hemen bir tabloya yazılmalıdır: hangi gün, hangi koşulda, hangi değer ve hangi birimle (cm, °C, saniye). Birimi yazılmayan veri anlamını yitirir. Tablo, verileri düzenler ve grafiğe dökmeyi kolaylaştırır.",
          "Bir değerin zamanla değişimini göstermek için çizgi grafiği, farklı grupları karşılaştırmak için sütun grafiği kullanılır. Grafikte yatay eksene genellikle bağımsız değişken (gün, sıcaklık), dikey eksene bağımlı değişken (boy, süre) yerleştirilir.",
          "Gözlem ile çıkarım farklıdır: 'Bitkinin yaprakları sarardı.' bir gözlemdir; 'Bitki yeterince ışık almadığı için sarardı.' ise bir çıkarımdır. Sonuç bölümünde veriler hipotezle karşılaştırılır, hipotezin desteklenip desteklenmediği yazılır ve yeni sorular önerilir. Bilim insanları çalışmalarını rapor, poster ya da sunumla paylaşır; böylece başkaları da deneyi tekrarlayıp sonucu sınayabilir."
        ],
        sorular: [
          S("'Buz 10 dakikada eridi.' ifadesi nedir?", ["Gözlem", "Çıkarım", "Hipotez", "Tahmin"], "Doğrudan gözlenen bir olgudur."),
          S("Bir bitkinin günlere göre boyunu göstermek için en uygun grafik hangisidir?", ["Çizgi grafiği", "Daire grafiği", "Resim grafiği", "Hiçbiri"], "Zamanla değişim çizgi grafiğiyle gösterilir."),
          S("Grafikte bağımlı değişken genellikle hangi eksene yazılır?", ["Dikey eksene", "Yatay eksene", "Başlığa", "Hiçbir yere"], "Bağımlı değişken dikey eksende gösterilir."),
          S("Ölçümler kaydedilirken neyin yazılması unutulmamalıdır?", ["Birim", "Renk", "Yazı tipi", "Hava durumu her zaman"], "Birimsiz veri anlamını yitirir."),
          S("'Su soğuk olduğu için şeker geç çözündü.' ifadesi nedir?", ["Çıkarım", "Gözlem", "Ölçüm", "Değişken"], "Bir neden-sonuç yorumu, yani çıkarımdır.")
        ] }
    ] },
    { id: "ofu_2", ad: "Günlük Hayatta Fen", konular: [
      { id: "ofu_2a", ad: "Mutfakta Bilim",
        ozet: ["Çözünme: şeker suda çözünür; sıcak suda daha hızlı", "Buharlaşma: su ısıyla gaza dönüşür (çamaşırın kuruması)", "Yoğuşma: su buharının soğuk yüzeyde suya dönüşmesi (tencere kapağı)", "Mayalanma: maya şekeri kullanıp gaz çıkarır, hamur kabarır", "Pişirme kimyasal bir değişimdir; geri dönmez"],
        anlatim: [
          "Mutfak küçük bir laboratuvardır. Şeker ya da tuz suya atılınca gözden kaybolur ama tadından suda olduğunu anlarız; buna çözünme denir. Sıcak suda, karıştırarak ve toz şekerle çözünme daha hızlı olur. Bu, çözünme hızını etkileyen etkenleri gösterir.",
          "Yemek pişerken tencereden çıkan su buharı, soğuk kapağa değince küçük su damlacıklarına dönüşür; buna yoğuşma denir. Islak çamaşırların kuruması ise buharlaşmadır ve sıcak, rüzgârlı havada daha hızlı olur. Bu olaylar maddenin hâl değişimleridir ve geri dönüşebilir: buhar yine suya, su yine buhara dönüşebilir.",
          "Ekmek hamurundaki maya, şekeri kullanarak karbondioksit gazı çıkarır; gaz kabarcıkları hamuru kabartır. Yumurtanın pişmesi, ekmeğin kızarması ve sütün yoğurda dönüşmesi kimyasal değişimdir: yeni maddeler oluşur ve eski hâline geri döndürülemez. Buzun erimesi ise fiziksel değişimdir; madde yine sudur."
        ],
        ornekler: [["Buzun erimesi ile yumurtanın pişmesi arasındaki fark nedir?", "Buzun erimesi fiziksel değişimdir (madde yine sudur, tekrar dondurulabilir). Yumurtanın pişmesi kimyasal değişimdir (yeni maddeler oluşur, geri dönmez)."]],
        hatalar: ["Çözünen şekerin yok olduğunu sanmak: şeker suda dağılmıştır, su buharlaşınca geri kalır.", "Hâl değişimlerini kimyasal değişim sanmak: erime, donma, buharlaşma fizikseldir."],
        sorular: [
          S("Tencere kapağında su damlacıklarının oluşmasına ne denir?", ["Yoğuşma", "Buharlaşma", "Erime", "Donma"], "Buharın soğuk yüzeyde suya dönüşmesi yoğuşmadır."),
          S("Aşağıdakilerden hangisi kimyasal değişimdir?", ["Yumurtanın pişmesi", "Buzun erimesi", "Suyun kaynaması", "Şekerin suda çözünmesi"], "Pişme yeni madde oluşturur."),
          S("Hamurun kabarmasını sağlayan gaz hangisidir?", ["Karbondioksit", "Oksijen", "Azot", "Helyum"], "Maya karbondioksit üretir."),
          S("Şekerin suda daha hızlı çözünmesi için ne yapılabilir?", ["Su ısıtılıp karıştırılır", "Su dondurulur", "Şeker büyük parça olarak atılır", "Bardak kapatılır"], "Sıcaklık ve karıştırma çözünmeyi hızlandırır."),
          S("Çamaşırların kuruması hangi olaydır?", ["Buharlaşma", "Yoğuşma", "Donma", "Kimyasal değişim"], "Su buharlaşarak uzaklaşır."),
          S("Buzun erimesi hangi tür değişimdir?", ["Fiziksel değişim", "Kimyasal değişim", "Nükleer değişim", "Biyolojik değişim"], "Madde yine sudur; fiziksel değişimdir.")
        ] }
    ] }
  ]);
})();
