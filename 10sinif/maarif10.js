// 🧭 10. sınıf — Türkiye Yüzyılı Maarif Modeli düzeltmeleri (2026-2027). Başka sınıfa ait konular çıkarılır, eksik konular eklenir.
(function () {
  if (!window.ICERIK) return;
  const I = window.ICERIK;
  const yap = (k) => ({ id: k.id, ad: k.ad, ozet: k.ozet || [], anlatim: k.anlatim || [], kelimeler: [],
    sorular: (k.sorular || []).map(([soru, d, y1, y2, y3, cozum]) => ({ soru, secenekler: [d, y1, y2, y3], dogru: 0, cozum: cozum || "" })),
    acik: (k.acik || []).map(([soru, cevap]) => ({ soru, cevap })), ornekler: [], hatalar: [] });
  const Y = {}; const K = (k) => { Y[k.id] = yap(k); };
  // ---------- DİN KÜLTÜRÜ 10 (Maarif): İslam'da Varlık ve Bilgi · Allah'ı Tanımak · İslam'ın Evrensel Mesajları · Din, Çevre ve Teknoloji · İslam Düşüncesinde Yorumlar ----------
  K({ id: "din10a", ad: "İslam'da Varlık ve Bilgi",
    ozet: ["İslam'a göre varlık, yaratan (Allah) ve yaratılan (âlem) olarak ikiye ayrılır",
      "Bilgi kaynakları: duyular, akıl, vahiy ve sezgi (ilham)",
      "Kur'an-ı Kerim insanı düşünmeye, araştırmaya ve bilgi edinmeye çağırır; ilk inen ayetler 'Oku!' emriyle başlar",
      "Akıl ve vahiy birbirini tamamlar; akıl vahyi anlamanın aracıdır",
      "İslam medeniyetinde bilim ve düşünce gelişmiştir (Beytü'l-Hikme, medreseler)"],
    anlatim: ["İslam düşüncesinde var olan her şey ya Allah'tır ya da Allah'ın yarattığıdır. Evren, insan ve bütün canlılar yaratılmıştır; bu yaratılışın düzeni insanı düşünmeye yöneltir.",
      "İnsan bilgiye duyuları, aklı ve vahiy yoluyla ulaşır. Duyular dış dünyayı tanımamızı, akıl çıkarım yapmamızı, vahiy ise duyu ve aklın tek başına ulaşamayacağı konularda yol göstermeyi sağlar.",
      "Kur'an'ın ilk inen ayetlerinin 'Oku!' emriyle başlaması, İslam'da bilgiye verilen önemi gösterir. Müslüman bilginler tıp, matematik, astronomi gibi alanlarda önemli çalışmalar yapmıştır."],
    sorular: [["Duyularla algılanamayan, bilgisine ancak vahiy yoluyla ulaşılabilen varlık alanına ne ad verilir?", "Gayb âlemi", "Şehadet âlemi", "Fıtrat", "Mizan", "Şehadet âlemi duyularla algılanan, gayb âlemi algılanamayan alandır."], ["Evrendeki düzen ve amaçlılıktan yola çıkarak bir yaratıcının varlığına ulaşma çabası hangi bilgi kaynağına dayanır?", "Akıl", "Duyular", "Sezgi", "Taklit", "Gaye ve nizam delili akli bir çıkarımdır."], ["Kur'an-ı Kerim'in ilk inen ayetleri hangi emirle başlar?", "Oku!", "Namaz kıl!", "Oruç tut!", "Hicret et!", "Alak suresinin ilk ayetleri 'Oku!' emriyle başlar."],
      ["İslam düşüncesinde bilgi kaynakları arasında sayılmayan hangisidir?", "Batıl inançlar", "Duyular", "Akıl", "Vahiy", "Batıl inançlar bilgi kaynağı değildir."],
      ["İslam'a göre varlık hangi iki kısma ayrılır?", "Yaratan ve yaratılan", "Canlı ve cansız", "Görünen ve hayalî", "Eski ve yeni", "Allah yaratandır; âlem yaratılandır."],
      ["Akıl ile vahiy ilişkisi için hangisi doğrudur?", "Birbirini tamamlar", "Birbirine tamamen zıttır", "Akıl vahyi gereksiz kılar", "Vahiy aklı kullanmayı yasaklar", "Akıl vahyi anlamanın aracıdır."],
      ["Abbasiler döneminde Bağdat'ta kurulan, çeviri ve bilim merkezi olarak bilinen kurum hangisidir?", "Beytü'l-Hikme", "Nizamiye Medresesi", "Darülfünun", "Süleymaniye Külliyesi", "Beytü'l-Hikme bir bilim ve çeviri merkezidir."]],
    acik: [["İslam'da bilgi kaynaklarını sayarak birini örnekle açıklayınız.", "Duyular, akıl, vahiy ve sezgi. Örneğin akıl, evrendeki düzenden bir yaratıcının varlığına çıkarım yapmamızı sağlar."]] });
  K({ id: "din10d", ad: "Din, Çevre ve Teknoloji",
    ozet: ["İslam'a göre insan yeryüzünün sorumlu bir varlığıdır; doğa insana emanettir",
      "İsraf yasaklanmıştır; su, toprak ve kaynakları korumak dinî ve ahlaki bir sorumluluktur",
      "Canlılara merhamet ve onların haklarını gözetmek İslam ahlakının gereğidir",
      "Teknoloji iyi amaçlarla kullanıldığında insanlığa fayda sağlar; dijital ortamda da doğruluk, mahremiyete saygı ve kul hakkı geçerlidir",
      "Bilim ve teknolojinin etik sınırları: insan onuru, canlı hakları ve topluma zarar vermemek"],
    anlatim: ["Kur'an, evrendeki düzene ve dengeye dikkat çeker ve insanı bu dengeyi bozmamaya çağırır. Doğal kaynakları gereğinden fazla tüketmek israftır; israf ise dinen hoş karşılanmaz.",
      "Hz. Muhammed (s.a.v.) bol suyun yanında bile abdest alırken suyu israf etmemeyi öğütlemiş, ağaç dikmeyi teşvik etmiştir. Hayvanlara eziyet etmek kınanmıştır.",
      "Teknoloji kendi başına iyi ya da kötü değildir; onu kullanan kişinin niyeti ve davranışı belirleyicidir. Sosyal medyada yalan haber yaymamak, başkalarının mahremiyetine saygı duymak ve kimsenin hakkını yememek dijital çağda da geçerli ahlaki ilkelerdir."],
    sorular: [["Kur'an'da evrendeki ölçü ve dengeyi ifade eden, insanın bozmaması istenen kavram hangisidir?", "Mizan", "Tevekkül", "Kader", "İhlas", "Rahman suresinde ölçünün (mizan) bozulmaması istenir."], ["İnsanın yeryüzünde sorumluluk yüklenmiş bir varlık olarak 'halife' kılınması aşağıdakilerden hangisini gerektirir?", "Doğayı koruyarak ve adaletle kullanmayı", "Doğal kaynakları sınırsız tüketmeyi", "Diğer canlıların haklarını gözetmemeyi", "Teknolojiden tamamen uzak durmayı", "Halifelik, emaneti koruma sorumluluğudur."], ["İslam'a göre doğal kaynakların gereğinden fazla tüketilmesi hangi kavramla ifade edilir?", "İsraf", "Tevekkül", "Kanaat", "İhlas", "İsraf dinen hoş karşılanmaz."],
      ["İslam'a göre doğa ile insan ilişkisini en iyi anlatan ifade hangisidir?", "Doğa insana verilmiş bir emanettir", "Doğa sınırsızca tüketilebilir", "Doğanın korunması yalnızca devletin görevidir", "Doğa ile din arasında ilişki yoktur", "İnsan emaneti korumakla sorumludur."],
      ["Dijital ortamda başkasının fotoğrafını izinsiz paylaşmak hangi ilkeye aykırıdır?", "Mahremiyete saygı ve kul hakkı", "Cömertlik", "Tevekkül", "Sabır", "İzinsiz paylaşım mahremiyeti ihlal eder."],
      ["Teknoloji için hangisi doğrudur?", "Kullanım amacına göre fayda ya da zarar getirebilir", "Her zaman zararlıdır", "Dinî açıdan her türlü kullanımı yasaktır", "Ahlakla hiçbir ilgisi yoktur", "Belirleyici olan kullanım amacıdır."],
      ["Hz. Muhammed'in akan bir nehrin kenarında bile suyu israf etmemeyi öğütlemesi hangi değeri vurgular?", "Kaynakları korumak ve israftan kaçınmak", "Temizliği terk etmek", "Yalnızca az su içmek", "Abdesti kısaltmak", "Bol olan kaynak da israf edilmemelidir."]],
    acik: [["Çevreyi korumak için dinî ve ahlaki açıdan yapılabilecek üç davranış yazınız.", "Suyu ve enerjiyi israf etmemek, ağaç dikmek, çöpleri ayrıştırmak, hayvanlara merhametli davranmak."]] });
  K({ id: "din10e", ad: "İslam Düşüncesinde İtikadi, Siyasi ve Fıkhi Yorumlar",
    ozet: ["Yorum farklılıklarının nedenleri: ayet ve hadislerin farklı anlaşılması, coğrafi-kültürel farklar, siyasi olaylar",
      "İtikadi mezhepler (inanç konularında): Maturidilik ve Eş'arilik (Ehl-i sünnet), Mutezile",
      "Siyasi yorumlar: Şia ve Hariciler; halifelik/yönetim tartışmalarından doğmuştur",
      "Fıkhi mezhepler (ibadet ve muamelat): Hanefi, Şafii, Maliki, Hanbeli; Caferilik",
      "Türkiye'de yaygın olan: itikatta Maturidilik, fıkıhta Hanefilik ve Şafiilik"],
    anlatim: ["Hz. Peygamber'in vefatından sonra Müslümanlar yeni sorunlarla karşılaştı. Kur'an ve sünnetin farklı anlaşılması, farklı bölge ve kültürlerin etkisi ve siyasi olaylar farklı yorumların ortaya çıkmasına yol açtı.",
      "İnanç konularındaki yorumlara itikadi mezhep denir. Ehl-i sünnetin iki büyük itikadi mezhebi İmam Maturidi'ye dayanan Maturidilik ve İmam Eş'ari'ye dayanan Eş'ariliktir.",
      "İbadet ve günlük hayatla ilgili hükümlerdeki yorumlar fıkhi mezhepleri oluşturur. Hanefilik İmam Ebu Hanife'ye, Şafiilik İmam Şafii'ye dayanır.",
      "Mezhepler dinin kendisi değil, dinin anlaşılmasındaki farklı yorumlardır; bu zenginlik Müslümanların birlik ve kardeşliğine engel değildir."],
    sorular: [["Ehl-i sünnetin iki itikadi mezhebi hangileridir?", "Maturidilik ve Eş'arilik", "Hanefilik ve Şafiilik", "Şia ve Haricilik", "Mutezile ve Caferilik", "Hanefilik-Şafiilik fıkhi; Şia-Haricilik siyasi kökenlidir."], ["Sıffin Savaşı sonrasında ortaya çıkan ve büyük günah işleyenin dinden çıktığını savunan grup hangisidir?", "Hariciler", "Maturidiler", "Şafiiler", "Eş'ariler", "Hariciler hakem olayına itiraz ederek ayrılmıştır."], ["Hz. Ali'nin halifeliğinin Hz. Peygamber tarafından belirlendiğini savunan siyasi-itikadi yorum hangisidir?", "Şia", "Haricilik", "Mutezile", "Hanbelilik", "Şia imametin nasla belirlendiğini savunur."], ["Türkiye'de itikatta en yaygın mezhep hangisidir?", "Maturidilik", "Mutezile", "Haricilik", "Hanbelilik", "Maturidilik Türkler arasında yaygındır."],
      ["Aşağıdakilerden hangisi fıkhi bir mezheptir?", "Hanefilik", "Eş'arilik", "Maturidilik", "Mutezile", "Hanefilik ibadet ve muamelat konularındaki bir yorumdur."],
      ["Hanefi mezhebinin dayandığı âlim kimdir?", "İmam Ebu Hanife", "İmam Şafii", "İmam Malik", "İmam Eş'ari", "Hanefilik Ebu Hanife'ye dayanır."],
      ["Mezheplerin ortaya çıkma nedenlerinden biri değildir:", "Kur'an'ın farklı nüshalarının bulunması", "Ayet ve hadislerin farklı anlaşılması", "Coğrafi ve kültürel farklılıklar", "Siyasi olaylar", "Kur'an tek ve aynı metindir."],
      ["Mezhepler için hangisi doğrudur?", "Dinin anlaşılmasındaki farklı yorumlardır", "Ayrı dinlerdir", "Kur'an'ın yerine geçen kaynaklardır", "Yalnızca siyasi partilerdir", "Mezhepler dinin kendisi değil, yorumlardır."]],
    acik: [["İtikadi mezhep ile fıkhi mezhep arasındaki farkı açıklayınız.", "İtikadi mezhepler inanç konularındaki, fıkhi mezhepler ibadet ve günlük hayata ilişkin hükümlerdeki yorumlardır."]] });

  const DUZEN = {
    din: [
      ["d10u1", "1. Ünite: İslam'da Varlık ve Bilgi", 1, ["din10a"]],
      ["d10u2", "2. Ünite: Allah'ı Tanımak", 1, [["din1k1", "Allah'ı Tanımak: Allah'ın İnsana Yakınlığı, Dua ve Tövbe"]]],
      ["d10u3", "3. Ünite: İslam'ın Evrensel Mesajları", 2, [["din3k1", "İslam Ahlakının Temel İlkeleri ve Evrensel Mesajları"], "din4k1"]],
      ["d10u4", "4. Ünite: Din, Çevre ve Teknoloji", 2, ["din10d"]],
      ["d10u5", "5. Ünite: İslam Düşüncesinde İtikadi, Siyasi ve Fıkhi Yorumlar", 2, ["din10e"]]
    ]
  };

  const cikan = [];
  for (const [ders, uniteler] of Object.entries(DUZEN)) {
    const D = I[ders]; if (!D) continue;
    const eski = {}; for (const u of D.uniteler || []) for (const k of u.konular || []) eski[k.id] = k;
    const kul = new Set();
    D.uniteler = uniteler.map(([id, ad, donem, liste]) => ({ id, ad, donem, konular: liste.map((x) => {
      const [kid, yeniAd] = Array.isArray(x) ? x : [x, null]; const k = eski[kid] || Y[kid]; if (!k) return null;
      if (yeniAd) k.ad = yeniAd; kul.add(kid); return k; }).filter(Boolean) })).filter((u) => u.konular.length);
    for (const kid of Object.keys(eski)) if (!kul.has(kid)) cikan.push(kid);
  }
  window.MAARIF_DUZEN = { cikan, yeni: Object.keys(Y) };
})();
