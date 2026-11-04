window.ICERIK = window.ICERIK || {};
// LİSE (9–12) seçmeli dersleri. ayar.js / ders içerikleri ve secmeli-ortak.js'ten (Kur'an-ı Kerim, Temel Dinî Bilgiler) SONRA yüklenir.
// • Seçmeli Edebiyat / Matematik / Fizik / Kimya / Biyoloji / Tarih / Coğrafya: o sınıfın aynı adlı ders içeriğine bağlanır (takma).
// • Psikoloji, Sosyoloji, Mantık, Astronomi, Sanat Tarihi, Peygamberimizin Hayatı: bu dosyadaki içerik.
// Sorularda doğru cevap ilk şıktır; uygulama şıkları karıştırır.
(function () {
  const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
  const EBA = { ad: "EBA — Konu anlatım videoları ve ders kitapları", url: "https://www.eba.gov.tr" };
  const MEBI = { ad: "MEBİ — MEB'in ücretsiz bireysel öğrenme platformu", url: "https://mebi.eba.gov.tr" };
  const OGM = { ad: "OGM Materyal — MEB lise konu anlatımı ve soru bankası", url: "https://ogmmateryal.eba.gov.tr" };
  const yap = (key, ad, ikon, renk, uniteler) => { if (!window.ICERIK[key]) window.ICERIK[key] = { ad, ikon, renk, secmeli: true, kaynaklar: [EBA, OGM, MEBI], uniteler }; };

  // Takma seçmeliler: o sınıfta ders içeriği varsa aynı üniteleri kullan
  [["s_l_tde", "edebiyat", "Seçmeli Türk Dili ve Edebiyatı"], ["s_l_mat", "matematik", "Seçmeli Matematik"], ["s_l_fiz", "fizik", "Seçmeli Fizik"],
   ["s_l_kim", "kimya", "Seçmeli Kimya"], ["s_l_biy", "biyoloji", "Seçmeli Biyoloji"], ["s_l_tar", window.ICERIK.tarih ? "tarih" : "inkilap", "Seçmeli Tarih"], ["s_l_cog", "cografya", "Seçmeli Coğrafya"]]
    .forEach(([k, temel, ad]) => { const T = window.ICERIK[temel]; if (T && !window.ICERIK[k]) Object.defineProperty(window.ICERIK, k, { value: Object.assign({}, T, { ad, secmeli: true, takma: temel }), enumerable: false, configurable: true }); });
  // Takmalar sayılmaz (enumerable: false): ilerleme, tekrar ve istatistikler asıl derste toplanır.
  // Ortaokul ortak dosyasındaki liseye ait olmayan seçmeliler kaldırılır (lisede yalnız Kur'an-ı Kerim ve Temel Dinî Bilgiler kullanılır).
  ["s_masal", "s_okuma", "s_yazarlik", "s_almanca", "s_satranc", "s_matuyg", "s_fenuyg"].forEach((k) => { delete window.ICERIK[k]; });

  /* ───────────── PSİKOLOJİ ───────────── */
  yap("s_l_psi", "Psikoloji", "🧠", "#7c3aed", [
    { id: "lp1", ad: "Psikoloji Bilimini Tanıyalım", konular: [
      { id: "lp1a", ad: "Psikolojinin Tanımı, Amaçları ve Yöntemleri",
        ozet: ["Psikoloji: insan davranışlarını ve zihinsel süreçleri bilimsel yöntemlerle inceleyen bilim", "Amaçları: betimlemek, açıklamak, yordamak (tahmin), kontrol etmek", "1879: Wilhelm Wundt Leipzig'de ilk psikoloji laboratuvarını kurdu", "Yöntemler: gözlem, deney, anket, görüşme, vaka (örnek olay) incelemesi", "Deneyde neden-sonuç ilişkisi kurulabilir; korelasyon neden-sonuç göstermez"],
        anlatim: [
          "Psikoloji, insan ve hayvan davranışlarını ve bu davranışların arkasındaki düşünme, algılama, öğrenme, hatırlama ve duygu gibi zihinsel süreçleri bilimsel yöntemlerle inceleyen bilimdir. Felsefenin içinden doğmuş, 1879'da Wilhelm Wundt'un Leipzig'de ilk psikoloji laboratuvarını kurmasıyla bağımsız bir bilim olarak kabul görmüştür.",
          "Psikolojinin dört amacı vardır: davranışı betimlemek (ne oluyor?), açıklamak (neden oluyor?), yordamak (ne zaman ve hangi koşulda yeniden olur?) ve kontrol etmek ya da değiştirmek (istenmeyen davranışı nasıl azaltırız?). Örneğin sınav kaygısı yaşayan öğrencilerin belirtilerini tanımlamak betimleme, kaygının nedenlerini bulmak açıklamadır.",
          "Psikologlar gözlem, anket, görüşme, vaka incelemesi ve deney gibi yöntemler kullanır. Neden-sonuç ilişkisi yalnızca kontrollü deneyle kurulabilir. İki değişkenin birlikte değişmesi (korelasyon) birinin diğerine neden olduğunu göstermez: dondurma satışı ile boğulma vakalarının yazın birlikte artması, dondurmanın boğulmaya yol açtığı anlamına gelmez; ikisinin ortak nedeni sıcak havadır."
        ],
        ornekler: [["'Uyku süresi arttıkça not ortalaması artıyor.' bulgusu uykunun başarıyı artırdığını kanıtlar mı?", "Hayır, bu bir korelasyondur. Neden-sonuç için uyku süresinin deneysel olarak değiştirildiği, diğer koşulların sabit tutulduğu bir deney gerekir."]],
        hatalar: ["Korelasyonu neden-sonuç sanmak.", "Psikolojiyi yalnızca ruhsal hastalıklarla ilgili sanmak: öğrenme, bellek, gelişim, sosyal davranış da psikolojinin konusudur."],
        sorular: [
          S("İlk psikoloji laboratuvarını kim kurmuştur?", ["Wilhelm Wundt", "Sigmund Freud", "Ivan Pavlov", "Jean Piaget"], "Wundt 1879'da Leipzig'de ilk laboratuvarı kurdu."),
          S("Bir davranışın ne zaman tekrar ortaya çıkacağını tahmin etmek psikolojinin hangi amacıdır?", ["Yordama", "Betimleme", "Açıklama", "Kontrol"], "Tahmin etmek yordamadır."),
          S("Neden-sonuç ilişkisi kurmaya en uygun yöntem hangisidir?", ["Deney", "Anket", "Gözlem", "Vaka incelemesi"], "Yalnızca kontrollü deneyle neden-sonuç kurulabilir."),
          S("İki değişkenin birlikte değişmesine ne denir?", ["Korelasyon", "Hipotez", "Deney", "Koşullanma"], "Birlikte değişim korelasyondur."),
          S("Tek bir kişinin ya da küçük bir grubun ayrıntılı incelenmesine ne denir?", ["Vaka (örnek olay) incelemesi", "Deney", "Anket", "Tarama"], "Bu yöntem vaka incelemesidir."),
          S("Psikoloji hangi alanın içinden doğmuştur?", ["Felsefe", "Kimya", "Astronomi", "Matematik"], "Psikoloji felsefeden ayrılmıştır.")
        ] },
      { id: "lp1b", ad: "Öğrenme ve Bellek",
        ozet: ["Öğrenme: yaşantı sonucu davranışta oluşan kalıcı değişme", "Klasik koşullanma (Pavlov): nötr uyarıcı ile doğal tepki arasında bağ", "Edimsel koşullanma (Skinner): davranışın sonucu (pekiştirme/ceza) davranışı belirler", "Bellek aşamaları: duyusal bellek → kısa süreli bellek (7±2 birim) → uzun süreli bellek", "Ebbinghaus unutma eğrisi: unutma ilk saatlerde hızlıdır; aralıklı tekrar unutmayı yavaşlatır"],
        anlatim: [
          "Öğrenme, yaşantı ya da tekrar sonucunda davranışta oluşan kalıcı değişmedir; büyüme veya yorgunluktan kaynaklanan geçici değişmeler öğrenme sayılmaz. Rus fizyolog Ivan Pavlov, köpeklere yemek verirken zil çaldığında, bir süre sonra köpeklerin yalnızca zil sesine salya salgıladığını gösterdi. Bu, klasik koşullanmadır.",
          "B. F. Skinner ise davranışın sonucuna göre öğrenildiğini gösterdi: ödüllendirilen (pekiştirilen) davranış tekrar edilir, cezalandırılan davranış azalır. Buna edimsel koşullanma denir. Ödevi yapınca övgü alan öğrencinin ödev yapma davranışının artması bunun örneğidir. Gözlem yoluyla, başkalarını izleyerek öğrenme (Bandura) de önemli bir öğrenme biçimidir.",
          "Bilgi önce çok kısa süre duyusal bellekte tutulur; dikkat edilen bilgi kısa süreli belleğe geçer. Kısa süreli bellek yaklaşık 7±2 birim bilgiyi 15–30 saniye tutabilir. Tekrar ve anlamlandırma ile bilgi uzun süreli belleğe aktarılır. Hermann Ebbinghaus'un unutma eğrisi, öğrenilen bilginin büyük kısmının ilk saatlerde unutulduğunu; aralıklı tekrarın ise unutmayı belirgin biçimde yavaşlattığını gösterir. Bu uygulamadaki Aralıklı Tekrar özelliği bu bilgiye dayanır."
        ],
        ornekler: [["Telefon numarasını 0532 418 27 63 gibi gruplara bölerek hatırlamak hangi bellek özelliğinden yararlanır?", "Kısa süreli belleğin sınırlı kapasitesinden (7±2 birim): bilgiyi gruplamak (kümeleme) daha fazla bilgiyi tutmayı sağlar."]],
        sorular: [
          S("Zil sesiyle salya salgılayan köpek deneyi hangi öğrenme türünü gösterir?", ["Klasik koşullanma", "Edimsel koşullanma", "Gözlem yoluyla öğrenme", "Kavrayış"], "Pavlov'un deneyi klasik koşullanmadır."),
          S("Ödüllendirilen davranışın tekrar edilmesi hangi kuramla açıklanır?", ["Edimsel koşullanma", "Klasik koşullanma", "Unutma eğrisi", "Kümeleme"], "Skinner'ın edimsel koşullanması."),
          S("Kısa süreli belleğin kapasitesi yaklaşık ne kadardır?", ["7±2 birim", "Sınırsız", "1 birim", "100 birim"], "Miller'a göre 7±2 birim."),
          S("Unutma eğrisini ortaya koyan bilim insanı kimdir?", ["Hermann Ebbinghaus", "Wilhelm Wundt", "Albert Bandura", "Carl Jung"], "Ebbinghaus unutma eğrisini çizdi."),
          S("Unutmayı yavaşlatan en etkili çalışma yöntemi hangisidir?", ["Aralıklı tekrar", "Sınavdan önceki gece hepsini okumak", "Hiç tekrar etmemek", "Sadece altını çizmek"], "Aralıklı tekrar unutmayı yavaşlatır."),
          S("Aşağıdakilerden hangisi öğrenme sayılmaz?", ["Yorgunluktan yavaş yürümek", "Bisiklet sürmeyi öğrenmek", "Yeni bir dil konuşmak", "Ödevi zamanında yapmaya alışmak"], "Yorgunluk geçici bir değişmedir.")
        ] },
      { id: "lp1c", ad: "Duygular, Stres ve Başa Çıkma",
        ozet: ["Temel duygular: mutluluk, üzüntü, korku, öfke, şaşkınlık, tiksinme", "Stres: zorlayıcı durumlara bedenin ve zihnin tepkisi", "Az stres performansı artırabilir; aşırı stres düşürür (Yerkes–Dodson)", "Problem odaklı başa çıkma: sorunu çözmeye yönelmek", "Duygu odaklı başa çıkma: nefes, spor, konuşma, düşünceyi yeniden çerçeveleme"],
        anlatim: [
          "Duygular, olaylara verdiğimiz bedensel, zihinsel ve davranışsal tepkilerdir. Mutluluk, üzüntü, korku, öfke, şaşkınlık ve tiksinme farklı kültürlerde benzer yüz ifadeleriyle görülen temel duygulardır. Duygular bize bilgi verir: korku tehlikeye karşı uyarır, öfke bir sınırın aşıldığını gösterir.",
          "Stres, zorlayıcı ya da tehdit edici olarak algılanan durumlara karşı verilen tepkidir; kalp atışı hızlanır, kaslar gerilir, dikkat daralır. Yerkes–Dodson yasasına göre orta düzeyde uyarılma performansı artırır, ama aşırı stres performansı düşürür. Sınav öncesi biraz heyecan normaldir ve hatta faydalıdır.",
          "Stresle başa çıkmanın iki yolu vardır. Problem odaklı başa çıkmada sorunun kendisi çözülmeye çalışılır: çalışma planı yapmak, eksik konuları belirlemek, yardım istemek. Duygu odaklı başa çıkmada ise duygunun yoğunluğu azaltılır: derin nefes, düzenli uyku ve spor, güvenilir biriyle konuşmak, 'Bu sınav hayatımın sonu değil, bir basamak' gibi düşünceyi yeniden çerçevelemek. Stres uzun süre günlük hayatı zorluyorsa rehber öğretmenden ya da bir uzmandan destek almak doğru adımdır."
        ],
        sorular: [
          S("Orta düzeyde uyarılmanın performansı artırdığını, aşırı stresin düşürdüğünü söyleyen yasa hangisidir?", ["Yerkes–Dodson", "Newton", "Ebbinghaus", "Mendel"], "Yerkes–Dodson yasası."),
          S("Sınav kaygısına karşı çalışma planı yapmak hangi başa çıkma yoludur?", ["Problem odaklı", "Duygu odaklı", "Kaçınma", "İnkâr"], "Sorunun kendisine yönelmek problem odaklıdır."),
          S("Derin nefes egzersizi yapmak hangi başa çıkma yoludur?", ["Duygu odaklı", "Problem odaklı", "Koşullanma", "Unutma"], "Duygunun yoğunluğunu azaltır."),
          S("Aşağıdakilerden hangisi temel duygulardan biri DEĞİLDİR?", ["Kıskançlık", "Korku", "Mutluluk", "Öfke"], "Kıskançlık temel duygu listesinde yer almaz."),
          S("Uzun süre günlük hayatı zorlaştıran stres için en doğru adım hangisidir?", ["Rehber öğretmenden ya da uzmandan destek almak", "Kimseye söylememek", "Uykuyu azaltmak", "Tüm dersleri bırakmak"], "Profesyonel destek almak doğru adımdır.")
        ] }
    ] }
  ]);

  /* ───────────── SOSYOLOJİ ───────────── */
  yap("s_l_sos", "Sosyoloji", "👥", "#be185d", [
    { id: "ls1", ad: "Sosyolojiye Giriş", konular: [
      { id: "ls1a", ad: "Sosyoloji Nedir? Toplum ve Birey",
        ozet: ["Sosyoloji: toplumu, toplumsal ilişkileri ve kurumları bilimsel yöntemle inceleyen bilim", "'Sosyoloji' terimini Auguste Comte kullanmıştır", "İbn Haldun (Mukaddime) sosyolojinin öncülerindendir", "Emile Durkheim sosyolojiyi akademik bilim hâline getirdi", "Türkiye'de öncü: Ziya Gökalp"],
        anlatim: [
          "Sosyoloji, insanların bir arada yaşarken kurduğu ilişkileri, grupları, kurumları ve toplumsal değişmeyi bilimsel yöntemlerle inceleyen bilimdir. 'Sosyoloji' terimini 19. yüzyılda Fransız düşünür Auguste Comte kullanmıştır. Ancak 14. yüzyılda yaşamış İbn Haldun, Mukaddime adlı eserinde toplumların yükseliş ve çöküşünü 'asabiyet' kavramıyla açıklayarak sosyolojinin öncülerinden olmuştur.",
          "Emile Durkheim, toplumsal olguların bireylerin dışında ve onlara rağmen var olduğunu savunmuş, sosyolojiyi üniversitede ders olarak okutulan bir bilim hâline getirmiştir. Max Weber ise bireylerin davranışlarına yükledikleri anlamı anlamanın önemini vurgulamıştır. Türkiye'de sosyolojinin öncüsü Ziya Gökalp'tir.",
          "Birey ile toplum arasındaki ilişki karşılıklıdır: Birey toplum içinde doğar, dili, değerleri ve rollerini toplumdan öğrenir; buna sosyalleşme denir. Aile, okul, arkadaş grupları ve medya sosyalleşmenin başlıca araçlarıdır. Birey de yaptıklarıyla toplumu değiştirebilir."
        ],
        sorular: [
          S("'Sosyoloji' terimini ilk kez kim kullanmıştır?", ["Auguste Comte", "Emile Durkheim", "İbn Haldun", "Ziya Gökalp"], "Terimi Comte kullanmıştır."),
          S("Mukaddime adlı eseriyle sosyolojinin öncülerinden sayılan düşünür kimdir?", ["İbn Haldun", "Farabi", "Max Weber", "Karl Marx"], "İbn Haldun, Mukaddime'nin yazarıdır."),
          S("Türkiye'de sosyolojinin öncüsü kimdir?", ["Ziya Gökalp", "Namık Kemal", "Mehmet Akif Ersoy", "Fuat Köprülü"], "Ziya Gökalp Türk sosyolojisinin öncüsüdür."),
          S("Bireyin toplumun değerlerini, dilini ve rollerini öğrenmesine ne denir?", ["Sosyalleşme", "Göç", "Kentleşme", "Statü"], "Bu süreç sosyalleşmedir."),
          S("Aşağıdakilerden hangisi sosyalleşmenin araçlarından biridir?", ["Aile", "Volkan", "Gezegen", "Akarsu"], "Aile ilk sosyalleşme aracıdır.")
        ] },
      { id: "ls1b", ad: "Toplumsal Yapı: Statü, Rol ve Kurumlar",
        ozet: ["Statü: bireyin toplumdaki konumu (öğrenci, öğretmen, anne)", "Doğuştan (verilmiş) statü ve kazanılmış statü", "Rol: statünün gerektirdiği davranışlar", "Rol çatışması: farklı rollerin beklentilerinin çakışması", "Temel kurumlar: aile, eğitim, din, ekonomi, siyaset"],
        anlatim: [
          "Toplumsal yapı, bir toplumu oluşturan statüler, roller, gruplar ve kurumlardan oluşan bütündür. Statü, bireyin toplumda bulunduğu konumdur: öğrenci, doktor, abla, takım kaptanı. Kadın ya da erkek olmak, bir aileye doğmak gibi doğuştan gelen statüler verilmiş statü; çalışarak elde edilen öğretmenlik, doktorluk gibi statüler kazanılmış statüdür.",
          "Rol, bir statünün gerektirdiği davranışlar bütünüdür. Öğrenci statüsündeki kişiden derse katılması, ödevlerini yapması beklenir. Bir kişinin aynı anda birden çok statüsü ve rolü vardır; bu rollerin beklentileri çakıştığında rol çatışması yaşanır: maçın olduğu akşam ertesi günkü sınava çalışması gereken bir takım oyuncusu gibi.",
          "Toplumsal kurumlar, toplumun temel ihtiyaçlarını karşılayan, süreklilik gösteren yapılardır. Aile neslin devamını ve ilk eğitimi, eğitim kurumu bilgi ve becerilerin aktarılmasını, ekonomi üretim ve tüketimi, siyaset düzen ve yönetimi, din ise inanç ve değerleri düzenler. Kurumlar birbirini etkiler; ekonomideki bir değişim aile yapısını da değiştirebilir."
        ],
        ornekler: [["Ayşe hem öğrenci, hem okul voleybol takımının kaptanı, hem de küçük kardeşine bakan bir abladır. Turnuva günü kardeşinin de okul gösterisi vardır. Bu durum neye örnektir?", "Rol çatışmasına: kaptan ve abla rollerinin beklentileri aynı zamanda çakışmaktadır."]],
        sorular: [
          S("Çalışarak elde edilen doktorluk hangi statü türüdür?", ["Kazanılmış statü", "Verilmiş statü", "Rol", "Kurum"], "Emekle elde edilen statü kazanılmıştır."),
          S("Bir statünün gerektirdiği davranışlara ne denir?", ["Rol", "Kurum", "Norm", "Grup"], "Statüden beklenen davranışlar roldür."),
          S("Farklı rollerin beklentilerinin çakışmasına ne denir?", ["Rol çatışması", "Sosyalleşme", "Kentleşme", "Statü kaybı"], "Bu durum rol çatışmasıdır."),
          S("Neslin devamını ve ilk eğitimi sağlayan temel kurum hangisidir?", ["Aile", "Ekonomi", "Siyaset", "Medya"], "Aile en temel kurumdur."),
          S("Aşağıdakilerden hangisi verilmiş (doğuştan) statüdür?", ["Bir ailenin kızı olmak", "Avukat olmak", "Takım kaptanı seçilmek", "Belediye başkanı olmak"], "Doğuştan gelen konum verilmiş statüdür.")
        ] },
      { id: "ls1c", ad: "Kültür ve Toplumsal Değişme",
        ozet: ["Kültür: bir toplumun maddi ve manevi değerlerinin bütünü", "Maddi kültür: araç-gereç, yapılar, kıyafet; manevi kültür: dil, din, gelenek, değerler", "Kültürleşme: farklı kültürlerin karşılaşıp etkileşmesi", "Kültürel gecikme: teknoloji hızlı, değerler yavaş değişir", "Toplumsal değişme nedenleri: teknoloji, göç, eğitim, ekonomi, doğa olayları"],
        anlatim: [
          "Kültür, bir toplumun geçmişten bugüne yarattığı maddi ve manevi değerlerin bütünüdür. Evler, araçlar, kıyafetler ve yiyecekler maddi kültürü; dil, din, gelenekler, sanat ve değerler manevi kültürü oluşturur. Kültür öğrenilir, kuşaktan kuşağa aktarılır ve zamanla değişir.",
          "Farklı kültürler göç, ticaret, turizm ve medya aracılığıyla karşılaştığında birbirini etkiler; buna kültürleşme denir. Kültürel gecikme ise maddi kültürün (teknoloji) manevi kültürden (değerler, kurallar) daha hızlı değişmesidir: akıllı telefonlar çok hızlı yayılmış, ama telefon kullanım görgü kuralları ve dijital güvenlik bilinci aynı hızla gelişmemiştir.",
          "Toplumsal değişme; teknolojik gelişmeler, sanayileşme ve kentleşme, göç, eğitimdeki yaygınlaşma, ekonomik krizler ve doğal afetler gibi nedenlerle gerçekleşir. Örneğin köyden kente göçle geniş ailelerin yerini çekirdek aileler almış, kadınların iş hayatına katılımı artmıştır."
        ],
        sorular: [
          S("Aşağıdakilerden hangisi manevi kültüre örnektir?", ["Gelenekler", "Ev", "Araba", "Kıyafet"], "Gelenekler manevi kültürdür."),
          S("Teknolojinin değerlerden ve kurallardan daha hızlı değişmesine ne denir?", ["Kültürel gecikme", "Kültürleşme", "Sosyalleşme", "Asimilasyon"], "Bu durum kültürel gecikmedir."),
          S("Farklı kültürlerin karşılaşıp birbirini etkilemesine ne denir?", ["Kültürleşme", "Kültürel gecikme", "Kentleşme", "Statü"], "Etkileşim kültürleşmedir."),
          S("Köyden kente göçün aile yapısına etkisi genellikle ne olmuştur?", ["Çekirdek ailenin yaygınlaşması", "Geniş ailenin artması", "Ailenin ortadan kalkması", "Hiçbir etkisi olmaması"], "Kentleşmeyle çekirdek aile yaygınlaşmıştır."),
          S("Aşağıdakilerden hangisi maddi kültür öğesidir?", ["Halı", "Dil", "Bayram geleneği", "Ahlak kuralları"], "Halı somut bir nesnedir; maddi kültürdür.")
        ] }
    ] }
  ]);

  /* ───────────── MANTIK ───────────── */
  yap("s_l_man", "Mantık", "🔣", "#334155", [
    { id: "lm1", ad: "Mantığa Giriş ve Klasik Mantık", konular: [
      { id: "lm1a", ad: "Mantık Nedir? Kavram, Terim ve Tanım",
        ozet: ["Mantık: doğru düşünmenin kurallarını inceleyen disiplin", "Kurucusu Aristoteles; eserleri 'Organon' adıyla toplanmıştır", "Kavram: nesnelerin zihindeki ortak tasarımı; terim: kavramın dile getirilmiş hâli", "İçlem: kavramın nitelikleri; kaplam: kapsadığı nesneler", "İçlem arttıkça kaplam azalır (canlı → hayvan → kedi)"],
        anlatim: [
          "Mantık, doğru düşünmenin ve geçerli akıl yürütmenin kurallarını inceleyen disiplindir. Klasik mantığın kurucusu Antik Yunan filozofu Aristoteles'tir; mantıkla ilgili eserleri sonradan 'Organon' (alet) adıyla bir araya getirilmiştir. İslam dünyasında Farabi ve İbn Sina mantığı geliştirmiştir; Farabi'ye 'Muallim-i Sani' (ikinci öğretmen) denir.",
          "Kavram, aynı türden nesnelerin zihnimizdeki ortak tasarımıdır; 'kitap' kavramı tek bir kitabı değil, bütün kitapları kapsar. Kavram bir kelimeyle ifade edildiğinde terim adını alır. Kavramın nitelikleri içlemini, kapsadığı nesneler ise kaplamını oluşturur.",
          "İçlem ile kaplam ters orantılıdır: 'canlı' kavramının kaplamı çok geniş, içlemi azdır; 'hayvan' kavramında nitelikler artar, kaplam daralır; 'kedi' kavramında içlem daha da artar, kaplam daha da daralır. Tanım ise bir kavramın ne olduğunu, onu başka kavramlardan ayıran özelliklerle belirtmektir: 'İnsan düşünen bir canlıdır.'"
        ],
        sorular: [
          S("Klasik mantığın kurucusu kimdir?", ["Aristoteles", "Platon", "Sokrates", "Descartes"], "Klasik mantık Aristoteles'e dayanır."),
          S("Aristoteles'in mantıkla ilgili eserlerine verilen ad nedir?", ["Organon", "Mukaddime", "Devlet", "Metafizik"], "Mantık eserleri Organon adıyla toplanmıştır."),
          S("'Muallim-i Sani' (ikinci öğretmen) olarak anılan düşünür kimdir?", ["Farabi", "İbn Sina", "Gazali", "İbn Rüşd"], "Farabi'ye ikinci öğretmen denir."),
          S("Bir kavramın kapsadığı nesnelerin tümüne ne denir?", ["Kaplam", "İçlem", "Terim", "Tanım"], "Kapsanan nesneler kaplamdır."),
          S("Canlı → hayvan → kedi sıralamasında hangisi doğrudur?", ["İçlem artar, kaplam azalır", "İçlem azalır, kaplam artar", "İkisi de artar", "İkisi de değişmez"], "Kavram özelleştikçe içlem artar, kaplam daralır."),
          S("Kavramın dile getirilmiş hâline ne denir?", ["Terim", "Önerme", "Kıyas", "Kaplam"], "Dile getirilen kavram terimdir.")
        ] },
      { id: "lm1b", ad: "Önerme ve Kıyas",
        ozet: ["Önerme: doğru ya da yanlış olabilen yargı bildiren cümle", "Soru, emir ve dilek cümleleri önerme değildir", "Kıyas: iki öncülden bir sonuç çıkaran akıl yürütme", "Büyük öncül + küçük öncül → sonuç", "Geçerlilik biçimle, doğruluk içerikle ilgilidir"],
        anlatim: [
          "Önerme, doğru ya da yanlış olabilen bir yargı bildiren cümledir: 'Ankara Türkiye'nin başkentidir.' (doğru), 'Su 50 °C'de kaynar.' (yanlış). Soru ('Saat kaç?'), emir ('Kapıyı kapat!') ve dilek ('Keşke yağmur yağsa') cümleleri doğru ya da yanlış olarak değerlendirilemediği için önerme sayılmaz.",
          "Kıyas, iki öncülden zorunlu olarak bir sonuç çıkaran tümdengelimli akıl yürütmedir. En bilinen örnek: 'Bütün insanlar ölümlüdür. (büyük öncül) Sokrates bir insandır. (küçük öncül) O hâlde Sokrates ölümlüdür. (sonuç)' Öncüllerde ortak olan 'insan' terimine orta terim denir; orta terim sonuçta yer almaz.",
          "Bir kıyasın geçerli olması biçimiyle, doğru olması içeriğiyle ilgilidir. 'Bütün kuşlar uçar. Penguen bir kuştur. O hâlde penguen uçar.' kıyası biçim olarak geçerlidir ama ilk öncül yanlış olduğu için sonuç yanlıştır. Doğru sonuç için kıyasın hem geçerli hem de öncüllerinin doğru olması gerekir."
        ],
        ornekler: [["'Bütün metaller elektriği iletir. Bakır bir metaldir. O hâlde …' Sonuç ve orta terim nedir?", "Sonuç: Bakır elektriği iletir. Orta terim: metal (her iki öncülde geçer, sonuçta geçmez)."]],
        hatalar: ["Geçerli kıyasın her zaman doğru sonuç verdiğini sanmak: öncüller yanlışsa geçerli kıyas da yanlış sonuç verebilir.", "Soru cümlelerini önerme saymak."],
        sorular: [
          S("Aşağıdakilerden hangisi önermedir?", ["Dünya Güneş'in etrafında döner.", "Bugün sinemaya gidelim mi?", "Pencereyi aç!", "Keşke tatil olsa."], "Yargı bildiren ve doğruluğu sorgulanabilen cümle önermedir."),
          S("İki öncülden zorunlu bir sonuç çıkaran akıl yürütmeye ne denir?", ["Kıyas", "Tümevarım", "Analoji", "Gözlem"], "Bu akıl yürütme kıyastır."),
          S("'Bütün insanlar ölümlüdür. Sokrates insandır. O hâlde Sokrates ölümlüdür.' kıyasında orta terim hangisidir?", ["İnsan", "Sokrates", "Ölümlü", "Bütün"], "Her iki öncülde geçip sonuçta geçmeyen terim 'insan'dır."),
          S("Kıyasın geçerliliği neyle ilgilidir?", ["Biçimiyle", "İçeriğiyle", "Uzunluğuyla", "Yazarıyla"], "Geçerlilik biçimsel bir özelliktir."),
          S("'Bütün kuşlar uçar. Penguen kuştur. O hâlde penguen uçar.' kıyası için hangisi doğrudur?", ["Geçerli ama sonucu yanlıştır", "Geçersiz ve doğrudur", "Hem geçerli hem doğrudur", "Önerme değildir"], "Biçim geçerli, ama ilk öncül yanlıştır."),
          S("Emir cümleleri neden önerme değildir?", ["Doğru ya da yanlış olarak değerlendirilemezler", "Çok kısadırlar", "Fiil içermezler", "Soru eki alırlar"], "Önerme doğruluk değeri taşımalıdır.")
        ] }
    ] },
    { id: "lm2", ad: "Sembolik Mantık", konular: [
      { id: "lm2a", ad: "Bağlaçlar ve Doğruluk Tabloları",
        ozet: ["Değil (¬p): önermenin doğruluk değerini tersine çevirir", "Ve (p ∧ q): yalnızca ikisi de doğruysa doğru", "Veya (p ∨ q): yalnızca ikisi de yanlışsa yanlış", "İse (p → q): yalnızca p doğru, q yanlışken yanlış", "Ancak ve ancak (p ↔ q): ikisi aynı değerdeyse doğru"],
        anlatim: [
          "Sembolik (modern) mantık, önermeleri p, q, r gibi harflerle, aralarındaki bağlantıları da sembollerle gösterir. Bir önermenin doğruluk değeri doğru (D ya da 1) veya yanlış (Y ya da 0) olabilir. 'Değil' (¬) bağlacı değeri tersine çevirir: p doğruysa ¬p yanlıştır.",
          "'Ve' bağlacıyla (p ∧ q) kurulan bileşik önerme yalnızca iki önerme de doğruysa doğrudur. 'Veya' bağlacıyla (p ∨ q) kurulan önerme ise önermelerden en az biri doğruysa doğrudur; yalnızca ikisi de yanlışken yanlış olur. 'Bugün cumartesi ve hava güneşli' cümlesinin doğru olması için iki durumun da gerçekleşmesi gerekir.",
          "'İse' bağlacı (p → q) koşul bildirir: 'Ödevini bitirirsen maça gidersin.' Bu önerme yalnızca p doğru ve q yanlış olduğunda, yani ödev bitirildiği hâlde maça gidilemediğinde yanlıştır; ödev bitmemişse söz bozulmuş sayılmaz. 'Ancak ve ancak' bağlacı (p ↔ q) ise iki önermenin değeri aynı olduğunda doğrudur."
        ],
        ornekler: [["p: '2 + 2 = 4' (D), q: '5 bir çift sayıdır' (Y). p ∧ q, p ∨ q ve p → q'nun doğruluk değerleri nedir?", "p ∧ q = Y (ikisi birden doğru değil); p ∨ q = D (en az biri doğru); p → q = Y (p doğru, q yanlış)."]],
        hatalar: ["'İse' bağlacında p yanlışken önermeyi yanlış saymak: p yanlışsa p → q her zaman doğrudur.", "'Veya'yı 'ya o ya bu' (yalnız biri) sanmak: mantıktaki veya, ikisinin birden doğru olmasını da kapsar."],
        sorular: [
          S("p doğru, q yanlış ise p ∧ q'nun değeri nedir?", ["Yanlış", "Doğru", "Belirsiz", "Hem doğru hem yanlış"], "Ve bağlacı için ikisi de doğru olmalıdır."),
          S("p ∨ q hangi durumda yanlıştır?", ["p ve q ikisi de yanlışken", "p doğru, q yanlışken", "İkisi de doğruyken", "p yanlış, q doğruyken"], "Veya yalnız ikisi de yanlışken yanlıştır."),
          S("p → q hangi durumda yanlıştır?", ["p doğru, q yanlış", "p yanlış, q doğru", "İkisi de doğru", "İkisi de yanlış"], "Koşul yalnız bu durumda bozulur."),
          S("p doğru ise ¬p'nin değeri nedir?", ["Yanlış", "Doğru", "p ile aynı", "Belirsiz"], "Değil bağlacı değeri tersine çevirir."),
          S("p ↔ q ne zaman doğrudur?", ["p ve q aynı doğruluk değerine sahipken", "Yalnız p doğruyken", "Yalnız q yanlışken", "Hiçbir zaman"], "Ancak ve ancak: iki değer aynıysa doğru."),
          S("p yanlış, q yanlış ise p → q'nun değeri nedir?", ["Doğru", "Yanlış", "Belirsiz", "Hesaplanamaz"], "p yanlışsa koşullu önerme doğrudur.")
        ] }
    ] }
  ]);

  /* ───────────── ASTRONOMİ VE UZAY BİLİMLERİ ───────────── */
  yap("s_l_ast", "Astronomi ve Uzay Bilimleri", "🔭", "#1e293b", [
    { id: "la1", ad: "Güneş Sistemi ve Yıldızlar", konular: [
      { id: "la1a", ad: "Güneş Sistemi",
        ozet: ["Güneş sisteminde 8 gezegen: Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün", "İç (karasal) gezegenler kayalık; dış gezegenler gaz ve buz devleri", "En büyük gezegen Jüpiter, Güneş'e en yakın Merkür", "Plüton 2006'dan beri cüce gezegen sayılır", "Güneş ışığı Dünya'ya yaklaşık 8 dakika 20 saniyede ulaşır"],
        anlatim: [
          "Güneş sistemi; merkezde Güneş, onun çevresinde dolanan sekiz gezegen, cüce gezegenler, uydular, asteroitler ve kuyruklu yıldızlardan oluşur. Sistemin kütlesinin yaklaşık %99,8'i Güneş'tedir. Güneş'e yakından uzağa gezegenler şöyledir: Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs ve Neptün.",
          "İlk dört gezegen kayalık yapıdaki karasal gezegenlerdir. Mars ile Jüpiter arasında asteroit kuşağı bulunur. Jüpiter ve Satürn büyük ölçüde hidrojen ve helyumdan oluşan gaz devleri, Uranüs ve Neptün ise buz devleridir. Jüpiter en büyük gezegendir; Satürn belirgin halkalarıyla tanınır. Venüs kalın karbondioksit atmosferi nedeniyle en sıcak gezegendir.",
          "Plüton, 2006'da Uluslararası Astronomi Birliği'nin gezegen tanımını değiştirmesiyle cüce gezegen sınıfına alınmıştır. Dünya ile Güneş arasındaki ortalama uzaklık yaklaşık 150 milyon km'dir ve 1 astronomik birim (AB) olarak kabul edilir; Güneş'ten çıkan ışık Dünya'ya yaklaşık 8 dakika 20 saniyede ulaşır."
        ],
        sorular: [
          S("Güneş sisteminin en büyük gezegeni hangisidir?", ["Jüpiter", "Satürn", "Dünya", "Neptün"], "Jüpiter en büyük gezegendir."),
          S("Güneş'e en yakın gezegen hangisidir?", ["Merkür", "Venüs", "Mars", "Dünya"], "Merkür Güneş'e en yakın gezegendir."),
          S("Plüton bugün hangi sınıfta yer alır?", ["Cüce gezegen", "Gezegen", "Uydu", "Yıldız"], "2006'dan beri cüce gezegendir."),
          S("Asteroit kuşağı hangi iki gezegen arasındadır?", ["Mars ile Jüpiter", "Dünya ile Mars", "Jüpiter ile Satürn", "Venüs ile Dünya"], "Asteroit kuşağı Mars ile Jüpiter arasındadır."),
          S("Güneş ışığı Dünya'ya yaklaşık ne kadar sürede ulaşır?", ["8 dakika 20 saniye", "1 saniye", "1 saat", "1 gün"], "Yaklaşık 8 dk 20 sn."),
          S("En sıcak gezegen hangisidir ve neden?", ["Venüs, kalın karbondioksit atmosferi nedeniyle", "Merkür, Güneş'e en yakın olduğu için", "Mars, kırmızı olduğu için", "Jüpiter, en büyük olduğu için"], "Venüs'ün sera etkisi onu en sıcak yapar.")
        ] },
      { id: "la1b", ad: "Yıldızlar, Galaksiler ve Işık Yılı",
        ozet: ["Yıldız: çekirdeğinde nükleer füzyonla enerji üreten gök cismi", "Güneş orta büyüklükte (sarı cüce) bir yıldızdır", "Işık yılı: ışığın bir yılda aldığı yol (~9,46 trilyon km) — bir uzaklık birimidir", "Samanyolu sarmal bir galaksidir; Güneş sistemi onun bir kolundadır", "En yakın büyük galaksi komşumuz Andromeda'dır"],
        anlatim: [
          "Yıldızlar, çekirdeklerinde hidrojenin helyuma dönüştüğü nükleer füzyon tepkimeleriyle ışık ve ısı üreten dev gaz kürelerdir. Güneş, orta büyüklükte, yaklaşık 4,6 milyar yaşında bir yıldızdır. Yıldızların rengi yüzey sıcaklıklarını gösterir: mavi yıldızlar çok sıcak, kırmızı yıldızlar daha soğuktur.",
          "Yıldızlar bulutsularda doğar, yakıtları bittiğinde kütlelerine göre farklı biçimde ölür: Güneş gibi yıldızlar kırmızı deve dönüşüp sonunda beyaz cüce olur; çok büyük kütleli yıldızlar süpernova olarak patlar ve geride nötron yıldızı ya da kara delik bırakabilir.",
          "Uzaydaki uzaklıklar çok büyük olduğu için ışık yılı kullanılır: ışığın bir yılda aldığı yol, yaklaşık 9,46 trilyon km'dir. Güneş sistemi, yüz milyarlarca yıldız içeren sarmal yapılı Samanyolu galaksisinin kollarından birindedir. Bize en yakın büyük galaksi, yaklaşık 2,5 milyon ışık yılı uzaklıktaki Andromeda'dır."
        ],
        hatalar: ["Işık yılını zaman birimi sanmak: ışık yılı bir uzaklık birimidir."],
        sorular: [
          S("Işık yılı neyin birimidir?", ["Uzaklık", "Zaman", "Hız", "Kütle"], "Işığın bir yılda aldığı yoldur; uzaklık birimidir."),
          S("Yıldızlar enerjilerini nasıl üretir?", ["Nükleer füzyonla", "Yanma ile", "Elektrikle", "Rüzgârla"], "Çekirdekte hidrojen helyuma dönüşür."),
          S("Güneş sistemi hangi galaksidedir?", ["Samanyolu", "Andromeda", "Macellan Bulutu", "Üçgen"], "Samanyolu galaksisindedir."),
          S("Mavi renkli bir yıldız için ne söylenebilir?", ["Yüzey sıcaklığı çok yüksektir", "Çok soğuktur", "Ölmüştür", "Gezegendir"], "Mavi yıldızlar en sıcaklarıdır."),
          S("Çok büyük kütleli bir yıldızın patlamasına ne denir?", ["Süpernova", "Bulutsu", "Tutulma", "Meteor"], "Bu patlama süpernovadır."),
          S("Samanyolu hangi yapıdaki bir galaksidir?", ["Sarmal", "Düzensiz", "Küresel", "Halka"], "Samanyolu sarmal bir galaksidir.")
        ] },
      { id: "la1c", ad: "Gözlem Araçları ve Uzay Araştırmaları",
        ozet: ["Galileo 1609'da teleskopla gökyüzünü gözledi; Jüpiter'in uydularını keşfetti", "Uzay teleskopları: Hubble (1990), James Webb (2021)", "Uluslararası Uzay İstasyonu (ISS) Dünya yörüngesinde bir laboratuvardır", "Türkiye: Doğu Anadolu Gözlemevi (Erzurum) ve Türkiye Uzay Ajansı", "Türkiye'nin ilk astronotu Alper Gezeravcı (2024)"],
        anlatim: [
          "Teleskop, uzaktaki cisimlerden gelen ışığı toplayarak onları daha parlak ve büyük gösteren araçtır. 1609'da Galileo Galilei teleskobunu gökyüzüne çevirmiş; Ay'daki kraterleri, Venüs'ün evrelerini ve Jüpiter'in dört büyük uydusunu gözlemiştir. Bu gözlemler Güneş merkezli evren modelini güçlendirmiştir.",
          "Atmosfer ışığı bozduğu için teleskoplar dağların tepesine ya da uzaya yerleştirilir. 1990'da fırlatılan Hubble Uzay Teleskobu ve 2021'de fırlatılan James Webb Uzay Teleskobu, evrenin çok uzak ve eski bölgelerinin görüntülerini almıştır. Uluslararası Uzay İstasyonu'nda (ISS) ise astronotlar yer çekiminin çok az olduğu ortamda deneyler yapar.",
          "Türkiye'de Erzurum'daki Doğu Anadolu Gözlemevi (DAG), ülkenin en büyük optik teleskobuna ev sahipliği yapar; Antalya'daki TÜBİTAK Ulusal Gözlemevi de önemli bir gözlem merkezidir. 2018'de Türkiye Uzay Ajansı kurulmuş, Ocak 2024'te Alper Gezeravcı Uluslararası Uzay İstasyonu'na giderek Türkiye'nin ilk astronotu olmuştur."
        ],
        sorular: [
          S("Teleskopla Jüpiter'in uydularını ilk gözleyen bilim insanı kimdir?", ["Galileo Galilei", "Isaac Newton", "Kopernik", "Kepler"], "Galileo 1609–1610'da gözlemiştir."),
          S("Teleskoplar neden uzaya ya da yüksek dağlara yerleştirilir?", ["Atmosferin ışığı bozmasını azaltmak için", "Daha ucuz olduğu için", "Yer çekimi olmadığı için", "Gece daha uzun olduğu için"], "Atmosfer görüntüyü bozar."),
          S("2021'de fırlatılan uzay teleskobu hangisidir?", ["James Webb", "Hubble", "Kepler", "Galileo"], "James Webb 2021'de fırlatıldı."),
          S("Türkiye'nin ilk astronotu kimdir?", ["Alper Gezeravcı", "Tuva Cihangir Atasever", "Cahit Arf", "Aziz Sancar"], "Alper Gezeravcı Ocak 2024'te ISS'e gitti."),
          S("Doğu Anadolu Gözlemevi hangi ilimizdedir?", ["Erzurum", "Antalya", "Ankara", "Van"], "DAG Erzurum'dadır.")
        ] }
    ] }
  ]);

  /* ───────────── SANAT TARİHİ ───────────── */
  yap("s_l_san", "Sanat Tarihi", "🖼️", "#a16207", [
    { id: "lst1", ad: "İlk Çağlardan Anadolu'ya Sanat", konular: [
      { id: "lst1a", ad: "Sanat Tarihine Giriş ve Prehistorik Sanat",
        ozet: ["Sanat tarihi: sanat eserlerini dönem, üslup ve bağlamıyla inceleyen bilim", "Prehistorik dönem: yazının bulunmasından önceki dönem", "Mağara resimleri: Lascaux (Fransa), Altamira (İspanya)", "Göbeklitepe (Şanlıurfa): yaklaşık 12.000 yıllık anıtsal tapınak alanı", "Çatalhöyük (Konya): duvar resimleri ve bilinen ilk yerleşim planlarından"],
        anlatim: [
          "Sanat tarihi; resim, heykel, mimari ve el sanatları gibi eserleri hangi dönemde, kim tarafından, hangi teknikle ve hangi amaçla yapıldığını inceleyerek anlamaya çalışan bilimdir. Bir eseri incelerken biçim (renk, çizgi, kompozisyon), konu ve tarihsel bağlam birlikte değerlendirilir.",
          "Yazının bulunmasından önceki prehistorik dönemde insanlar mağara duvarlarına av hayvanlarını resmetmiştir. Fransa'daki Lascaux ve İspanya'daki Altamira mağara resimleri, toprak boyalarla yapılmış en ünlü örneklerdendir. Bu resimlerin büyü ya da av törenleriyle ilgili olduğu düşünülür.",
          "Anadolu bu dönemin en önemli merkezlerinden biridir. Şanlıurfa'daki Göbeklitepe, yaklaşık 12.000 yıl önce yapılmış, hayvan kabartmalı T biçimli dikilitaşlarıyla bilinen en eski anıtsal yapılardandır ve tarihin yeniden yazılmasına yol açmıştır. Konya'daki Çatalhöyük ise duvar resimleri ve bitişik evleriyle bilinen en eski yerleşim yerlerinden biridir. İkisi de UNESCO Dünya Mirası Listesi'ndedir."
        ],
        sorular: [
          S("Yaklaşık 12.000 yıl önce yapılmış anıtsal yapılarıyla bilinen ören yeri hangisidir?", ["Göbeklitepe", "Efes", "Truva", "Bergama"], "Göbeklitepe en eski anıtsal yapılardandır."),
          S("Çatalhöyük hangi ilimizdedir?", ["Konya", "Şanlıurfa", "Çanakkale", "İzmir"], "Çatalhöyük Konya'dadır."),
          S("Lascaux mağara resimleri hangi ülkededir?", ["Fransa", "İspanya", "İtalya", "Mısır"], "Lascaux Fransa'dadır."),
          S("Prehistorik dönem neyin bulunmasından önceki dönemdir?", ["Yazının", "Tekerleğin", "Ateşin", "Matbaanın"], "Yazıdan önceki dönemdir."),
          S("Göbeklitepe'deki dikilitaşların biçimi nasıldır?", ["T biçimli", "Küre biçimli", "Piramit biçimli", "Silindir"], "T biçimli dikilitaşlar vardır.")
        ] },
      { id: "lst1b", ad: "Türk-İslam ve Osmanlı Sanatı",
        ozet: ["Selçuklu: taç kapılar, kervansaraylar, çini; Divriği Ulu Camii (UNESCO)", "Mimar Sinan: 'Şehzade çıraklık, Süleymaniye kalfalık, Selimiye ustalık eserim'", "Selimiye Camii Edirne'dedir (UNESCO)", "Geleneksel sanatlar: hat, tezhip, ebru, minyatür, çini", "Minyatür ustaları: Nakkaş Osman, Matrakçı Nasuh, Levni"],
        anlatim: [
          "Anadolu Selçukluları döneminde camiler, medreseler, kervansaraylar ve kümbetler inşa edilmiştir. Taş işçiliğiyle süslenmiş anıtsal taç kapılar bu dönemin simgesidir. Sivas'taki Divriği Ulu Camii ve Darüşşifası, taş süslemelerinin zenginliğiyle UNESCO Dünya Mirası Listesi'ndedir. Konya'daki Karatay Medresesi de çini süslemeleriyle ünlüdür.",
          "Osmanlı mimarisinin zirvesi Mimar Sinan'dır. Sinan yüzlerce eser vermiş, kendi eserleri için 'Şehzade Camii çıraklık, Süleymaniye Camii kalfalık, Selimiye Camii ustalık eserimdir' demiştir. Edirne'deki Selimiye Camii, büyük kubbesi ve dört ince minaresiyle UNESCO Dünya Mirası Listesi'ndedir.",
          "Kitap sanatları da çok gelişmiştir: güzel yazı sanatı hat, sayfaları altın ve boyayla süsleyen tezhip, su üzerine boya serperek desen oluşturan ebru ve küçük boyutlu resim sanatı minyatür bunlardandır. Matrakçı Nasuh şehir minyatürleriyle, Nakkaş Osman saray minyatürleriyle, Levni ise Lale Devri'nin canlı figürleriyle tanınır. İznik çinileri de Osmanlı sanatının dünyaca ünlü örnekleridir."
        ],
        sorular: [
          S("Mimar Sinan'ın 'ustalık eserim' dediği yapı hangisidir?", ["Selimiye Camii", "Süleymaniye Camii", "Şehzade Camii", "Sultanahmet Camii"], "Selimiye ustalık eseridir."),
          S("Selimiye Camii hangi ilimizdedir?", ["Edirne", "İstanbul", "Bursa", "Konya"], "Selimiye Edirne'dedir."),
          S("Su üzerine boya serperek desen oluşturma sanatı hangisidir?", ["Ebru", "Hat", "Tezhip", "Minyatür"], "Bu sanat ebrudur."),
          S("Taş süslemeleriyle UNESCO listesindeki Selçuklu yapısı hangisidir?", ["Divriği Ulu Camii", "Selimiye Camii", "Topkapı Sarayı", "Rumeli Hisarı"], "Divriği Ulu Camii ve Darüşşifası UNESCO listesindedir."),
          S("Şehir minyatürleriyle tanınan Osmanlı sanatçısı kimdir?", ["Matrakçı Nasuh", "Mimar Sinan", "Itri", "Yunus Emre"], "Matrakçı Nasuh şehir minyatürleriyle ünlüdür."),
          S("Güzel yazı sanatına ne ad verilir?", ["Hat", "Ebru", "Çini", "Kakma"], "Güzel yazı sanatı hattır.")
        ] }
    ] }
  ]);

  /* ───────────── PEYGAMBERİMİZİN HAYATI (LİSE) ───────────── */
  yap("s_siyer", "Peygamberimizin Hayatı (Siyer)", "🕋", "#0f766e", [
    { id: "lsy1", ad: "Mekke Dönemi", konular: [
      { id: "lsy1a", ad: "Doğumundan Hicrete",
        ozet: ["571: Mekke'de doğdu (Fil Yılı)", "610: Hira'da ilk vahiy ('Oku!' — Alak Suresi'nin ilk ayetleri)", "İlk müslümanlar: Hz. Hatice, Hz. Ebu Bekir, Hz. Ali, Zeyd bin Harise", "615: Habeşistan'a hicret; 619: Hüzün Yılı (Hz. Hatice ve Ebu Talib'in vefatı)", "Akabe biatları ile Medine'ye hicretin yolu açıldı"],
        anlatim: [
          "Peygamberimiz Hz. Muhammed 571 yılında, Mekke'de 'Fil Yılı' olarak anılan yılda doğdu. Babası Abdullah o doğmadan, annesi Âmine altı yaşındayken vefat etti; önce dedesi Abdülmuttalib, sonra amcası Ebu Talib ona baktı. Gençliğinde dürüstlüğüyle 'el-Emin' olarak tanındı, 25 yaşında Hz. Hatice ile evlendi.",
          "610 yılında, 40 yaşındayken Hira Mağarası'nda Cebrail aracılığıyla ilk vahiy geldi: Alak Suresi'nin ilk ayetleri 'Oku!' emriyle başlar. İlk inananlar eşi Hz. Hatice, dostu Hz. Ebu Bekir, amcasının oğlu Hz. Ali ve azatlı kölesi Zeyd bin Harise oldu. Üç yıllık gizli davetten sonra İslam açıkça tebliğ edilmeye başlandı.",
          "Müşriklerin baskısı artınca 615'te bazı müslümanlar Habeşistan'a hicret etti. 619'da Hz. Hatice ve Ebu Talib'in vefat etmesiyle bu yıla 'Hüzün Yılı' denildi. Taif'e yapılan davet karşılık bulmadı; ancak hac mevsiminde Medineli müslümanlarla yapılan Akabe biatları, 622'de Medine'ye hicretin yolunu açtı."
        ],
        sorular: [
          S("Peygamberimiz hangi yıl doğmuştur?", ["571", "610", "622", "632"], "571'de, Fil Yılı'nda doğdu."),
          S("İlk vahiy nerede gelmiştir?", ["Hira Mağarası", "Sevr Mağarası", "Kâbe", "Medine"], "İlk vahiy Hira'da geldi."),
          S("Hz. Hatice ve Ebu Talib'in vefat ettiği 619 yılına ne denir?", ["Hüzün Yılı", "Fil Yılı", "Heyetler Yılı", "Fetih Yılı"], "Bu yıla Hüzün Yılı denir."),
          S("Müslümanların ilk hicreti nereye olmuştur?", ["Habeşistan", "Medine", "Taif", "Şam"], "615'te Habeşistan'a hicret edildi."),
          S("Medine'ye hicretin yolunu açan antlaşmalar hangileridir?", ["Akabe biatları", "Hudeybiye Antlaşması", "Medine Sözleşmesi", "Veda Hutbesi"], "Akabe biatları hicreti hazırladı."),
          S("İlk vahiy hangi surenin ayetleridir?", ["Alak", "Fatiha", "İhlas", "Bakara"], "Alak Suresi'nin ilk ayetleri 'Oku!' ile başlar.")
        ] }
    ] },
    { id: "lsy2", ad: "Medine Dönemi", konular: [
      { id: "lsy2a", ad: "Hicretten Vefatına",
        ozet: ["622: Medine'ye hicret — Hicri takvimin başlangıcı", "Mescid-i Nebevi, Suffe ve Medine Sözleşmesi", "Savaşlar: Bedir (624), Uhud (625), Hendek (627)", "628: Hudeybiye Antlaşması; 630: Mekke'nin fethi", "632: Veda Haccı ve Veda Hutbesi; aynı yıl vefatı"],
        anlatim: [
          "622'de Mekke'den Medine'ye yapılan hicret, Hz. Ömer döneminde Hicri takvimin başlangıcı kabul edildi. Medine'de önce Mescid-i Nebevi inşa edildi; mescidin yanındaki Suffe bir eğitim merkezi oldu. Mekkeli muhacirler ile Medineli ensar kardeş ilan edildi ve şehirdeki farklı topluluklarla Medine Sözleşmesi yapılarak ortak yaşamın kuralları belirlendi.",
          "Mekkeli müşriklerle 624'te Bedir, 625'te Uhud ve 627'de Hendek savaşları yapıldı. 628'de imzalanan Hudeybiye Antlaşması ilk bakışta müslümanların aleyhine görünse de barış ortamında İslam hızla yayıldı. Müşriklerin antlaşmayı bozması üzerine 630'da Mekke kan dökülmeden fethedildi ve Peygamberimiz eski düşmanlarını affetti.",
          "632'de Peygamberimiz Veda Haccı'nı yaptı ve Arafat'ta irat ettiği Veda Hutbesi'nde can, mal ve namus dokunulmazlığını, kadın haklarını, insanların eşitliğini ve emanete riayeti vurguladı. Aynı yıl Medine'de vefat etti; kabri Mescid-i Nebevi'nin içindedir."
        ],
        ornekler: [["Mekke'nin fethinde Peygamberimizin eski düşmanlarını affetmesi hangi değeri öne çıkarır?", "Merhamet ve affediciliği: güç elindeyken intikam yerine bağışlamayı seçmiş, böylece toplumda barışı sağlamıştır."]],
        sorular: [
          S("Hicri takvimin başlangıcı hangi olaydır?", ["Medine'ye hicret", "İlk vahiy", "Mekke'nin fethi", "Bedir Savaşı"], "622 hicreti takvimin başlangıcıdır."),
          S("Mekke hangi yıl fethedilmiştir?", ["630", "624", "622", "632"], "Mekke 630'da fethedildi."),
          S("Medine'de farklı topluluklarla ortak yaşamın kurallarını belirleyen belge hangisidir?", ["Medine Sözleşmesi", "Hudeybiye Antlaşması", "Akabe Biatı", "Veda Hutbesi"], "Medine Sözleşmesi bu amaçla yapıldı."),
          S("Mescid-i Nebevi'nin yanında eğitim merkezi olarak kullanılan yer neresidir?", ["Suffe", "Darülerkam", "Hira", "Sevr"], "Suffe ilk eğitim merkezlerindendir."),
          S("Müslümanlarla müşrikler arasındaki ilk büyük savaş hangisidir?", ["Bedir", "Uhud", "Hendek", "Huneyn"], "İlk büyük savaş 624'te Bedir'dir."),
          S("Veda Hutbesi'nde vurgulanan ilkelerden biri hangisidir?", ["Can, mal ve namus dokunulmazlığı", "Vergilerin artırılması", "Kölelerin satılması", "Savaşın sürdürülmesi"], "Hutbe temel insan haklarını vurgular.")
        ] }
    ] }
  ]);
})();
