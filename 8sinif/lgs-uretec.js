// 8. sınıf (LGS) Fen Bilimleri soru üreteçleri — MEB 2018 öğretim programı kazanımlarına göre.
// Programda "hesaplamalara girilmez" denen konularda (basit makineler, ısı alışverişi, elektrik enerjisi) sayısal formül sorusu sorulmaz;
// lise düzeyindeki mol, pH = −log[H⁺], Q = m·c·ΔT, tork, eşdeğer direnç gibi sorular bu sınıfta üretilmez.
// sayisal-uretec.js'ten ÖNCE yüklenir (orada tanımlı üreteci olan konular atlanır).
window.URETEC = window.URETEC || {};
(function () {
  const U = window.URETEC, { r, pick, soru, tiplerden, eslestir, siniflandir, ifadeler, dir, buyuk, Y } = window.UR;
  // A4: Y(şık, "d:…") dikkat hatası, Y(şık, "k:…") kavram yanılgısı — Bilge yanlışta bu teşhisi gösterir.

  // ---------- Basınç (F.8.3) ----------
  U.fen3k1 = tiplerden([
    // Katı basıncı: aynı ağırlık, farklı yüzey
    () => { const c = pick([["tuğla", "en geniş", "en dar"], ["kitap", "kapağı üzerine yatık", "dik"], ["kutu", "geniş yüzeyi", "dar yüzeyi"]]);
      return soru(`Aynı ${c[0]} önce ${c[1]} yüzeyi, sonra ${c[2]} yüzeyi üzerine konuyor. Yere uyguladığı basınç için hangisi doğrudur?`, `${buyuk(c[2])} yüzeyi üzerindeyken basınç daha büyüktür.`, [Y(`${buyuk(c[1])} yüzeyi üzerindeyken basınç daha büyüktür.`, "k:yüzey alanı arttıkça katı basıncının arttığı sanıldı"), Y("İki durumda basınç eşittir.", "k:katı basıncının yüzey alanına bağlı olmadığı sanıldı"), "Basınç yalnızca cismin rengine bağlıdır."], "Ağırlık aynıysa yüzey alanı küçüldükçe katı basıncı artar."); },
    // Katı basıncı: aynı yüzey, farklı ağırlık
    () => { const a = r(2, 5) * 100, b = a + r(1, 4) * 100;
      return soru(`Taban alanları eşit iki kutudan K'nin ağırlığı ${a} N, L'nin ağırlığı ${b} N'dur. Zemine yaptıkları basınç için hangisi doğrudur?`, "L'nin basıncı daha büyüktür.", [Y("K'nin basıncı daha büyüktür.", "d:ağırlıklar karıştırıldı (L daha ağır)"), Y("Basınçları eşittir.", "k:katı basıncının ağırlığa bağlı olmadığı sanıldı"), Y("Ağırlık basıncı etkilemez.", "k:katı basıncının ağırlığa bağlı olmadığı sanıldı")], "Yüzey alanı aynıysa ağırlık (kuvvet) arttıkça katı basıncı artar."); },
    () => soru(pick(["Kar ayakkabısının tabanının geniş olmasının sebebi nedir?", "Kamyonların çok sayıda ve geniş tekerlekli olmasının sebebi nedir?", "Tırtıllı iş makinelerinin palet kullanmasının sebebi nedir?"]), "Yüzey alanını artırarak basıncı azaltmak", [Y("Yüzey alanını azaltarak basıncı artırmak", "k:yüzey alanı ile basınç ilişkisi ters kuruldu (geniş yüzey basıncı azaltır)"), "Ağırlığı artırmak", "Sürtünmeyi tamamen yok etmek"], "Aynı ağırlık daha geniş yüzeye dağılınca basınç azalır, cisim zemine batmaz."),
    () => soru(pick(["Bıçağın keskin tarafıyla kolay kesilmesinin sebebi nedir?", "Raptiyenin ucunun sivri yapılmasının sebebi nedir?", "Çivinin ucunun sivri olmasının sebebi nedir?"]), "Yüzey alanını azaltarak basıncı artırmak", [Y("Yüzey alanını artırarak basıncı azaltmak", "k:yüzey alanı ile basınç ilişkisi ters kuruldu (dar yüzey basıncı artırır)"), "Cismin ağırlığını azaltmak", Y("Sıvı basıncını artırmak", "k:katı basıncı ile sıvı basıncı karıştırıldı")], "Kuvvet küçük bir yüzeye uygulanınca basınç artar."),
    // Sıvı basıncı: derinlik
    () => { const h1 = r(2, 6) * 10, h2 = h1 + r(1, 5) * 10;
      return soru(`Su dolu bir kapta K noktası yüzeyden ${h1} cm, L noktası ${h2} cm derinliktedir. Hangisi doğrudur?`, "L noktasındaki sıvı basıncı daha büyüktür.", [Y("K noktasındaki sıvı basıncı daha büyüktür.", "k:derinlik arttıkça sıvı basıncının azaldığı sanıldı"), Y("İki noktadaki basınç eşittir.", "k:sıvı basıncının derinliğe bağlı olmadığı sanıldı"), Y("Sıvı basıncı derinliğe bağlı değildir.", "k:sıvı basıncının derinliğe bağlı olmadığı sanıldı")], "Aynı sıvıda derinlik arttıkça sıvı basıncı artar."); },
    // Sıvı basıncı: yoğunluk
    () => { const S = pick([["tuzlu su", "tuzlu suyun", "saf su"], ["gliserin", "gliserinin", "su"], ["su", "suyun", "zeytinyağı"]]);
      return soru(`Aynı derinlikteki iki noktadan biri ${S[0]}, diğeri ${S[2]} içindedir (${S[1]} yoğunluğu daha büyüktür). Sıvı basınçları için hangisi doğrudur?`, `${buyuk(S[0])} içindeki basınç daha büyüktür.`, [Y(`${buyuk(S[2])} içindeki basınç daha büyüktür.`, "k:yoğunluk ile sıvı basıncı ilişkisi ters kuruldu"), Y("Basınçlar eşittir.", "k:sıvı basıncının yoğunluğa bağlı olmadığı sanıldı"), Y("Sıvı basıncı yoğunluğa bağlı değildir.", "k:sıvı basıncının yoğunluğa bağlı olmadığı sanıldı")], "Aynı derinlikte yoğunluğu büyük olan sıvının basıncı daha büyüktür."); },
    () => soru("Barajların alt kısmının üst kısmından daha kalın yapılmasının sebebi nedir?", "Derinlik arttıkça sıvı basıncının artması", [Y("Derinlik arttıkça sıvı basıncının azalması", "k:derinlik arttıkça sıvı basıncının azaldığı sanıldı"), "Suyun yoğunluğunun yüzeyde fazla olması", "Gaz basıncının suyu yukarı itmesi"], "Barajın tabanında su basıncı en fazladır, bu yüzden duvar tabanda kalındır."),
    () => soru("Şekilleri farklı, aynı yükseklikte su dolu kapların tabanındaki sıvı basınçları için hangisi doğrudur?", "Eşittir; sıvı basıncı kabın şekline bağlı değildir.", [Y("Geniş tabanlı kapta daha büyüktür.", "k:sıvı basıncının kabın şekline bağlı olduğu sanıldı"), Y("Dar kapta daha büyüktür.", "k:sıvı basıncının kabın şekline bağlı olduğu sanıldı"), Y("Su miktarı çok olanda daha büyüktür.", "k:sıvı basıncının sıvı miktarına bağlı olduğu sanıldı")], "Sıvı basıncı sıvının derinliğine ve yoğunluğuna bağlıdır; kabın şekli ve sıvı miktarı etkilemez."),
    // Gaz / açık hava basıncı
    () => soru(pick(["Deniz seviyesinden yükseklere çıkıldıkça açık hava basıncı nasıl değişir?", "Bir dağa tırmanan dağcının üzerindeki açık hava basıncı nasıl değişir?"]), "Azalır", [Y("Artar", "k:yükseldikçe açık hava basıncının arttığı sanıldı"), Y("Değişmez", "k:açık hava basıncının yükseklikle değişmediği sanıldı"), "Önce artar sonra azalır"], "Yükseldikçe üstümüzdeki hava tabakası incelir, açık hava basıncı azalır."),
    () => soru(pick(["Pipetle meyve suyu içebilmemizi sağlayan nedir?", "Vantuzun cama yapışmasını sağlayan nedir?"]), "Açık hava basıncı", [Y("Sıvı basıncı", "k:sıvı basıncı ile açık hava basıncı karıştırıldı"), "Katı basıncı", "Yer çekimi olmaması"], "İçerideki hava azalınca dışarıdaki açık hava basıncı sıvıyı / vantuzu iter."),
    ifadeler(["Katı basıncı ağırlık ve yüzey alanına bağlıdır.", "Sıvılar bulundukları kabın her yerine basınç uygular.", "Yükseklere çıkıldıkça açık hava basıncı azalır.", "Gazlar bulundukları kabın her yerine basınç uygular."],
      ["Katı basıncı cismin rengine bağlıdır.", "Sıvı basıncı kabın şekline bağlıdır.", "Deniz seviyesinde açık hava basıncı en azdır.", "Yüzey alanı arttıkça katı basıncı artar."], "basınç")
  ]);

  // ---------- Periyodik Sistem (F.8.4.1–2) ----------
  const ELEMENT = [["H", "hidrojen"], ["He", "helyum"], ["C", "karbon"], ["N", "azot"], ["O", "oksijen"], ["Na", "sodyum"], ["Mg", "magnezyum"], ["Al", "alüminyum"], ["Cl", "klor"], ["Fe", "demir"], ["Cu", "bakır"], ["Ne", "neon"], ["S", "kükürt"], ["K", "potasyum"], ["Ca", "kalsiyum"], ["Ar", "argon"]];
  U.fen4k1 = tiplerden([
    siniflandir({ "metal": ["demir", "bakır", "alüminyum", "magnezyum", "sodyum", "altın"], "ametal": ["oksijen", "azot", "karbon", "kükürt", "klor"], "yarı metal": ["bor", "silisyum"], "soy gaz": ["helyum", "neon", "argon"] },
      (g) => `Hangisi bir ${dir(g)}?`, (d, g) => `${buyuk(d)}: ${g}.`, (d) => `${buyuk(d)} hangi element sınıfındadır?`),
    eslestir(ELEMENT, (a) => `"${a}" hangi elementin sembolüdür?`, (b) => `${buyuk(b)} elementinin sembolü hangisidir?`, (a, b) => `${a}: ${b}.`),
    ifadeler(["Periyodik sistemde yatay sıralara periyot denir.", "Periyodik sistemde düşey sütunlara grup denir.", "Metaller ısı ve elektriği iyi iletir.", "Soy gazlar 8A grubunda bulunur.", "Elementler atom numarasına göre sıralanmıştır.", "Metaller tel ve levha hâline getirilebilir."],
      ["Periyodik sistemde düşey sütunlara periyot denir.", "Ametaller elektriği çok iyi iletir.", "Elementler kütlelerine göre alfabetik sıralanmıştır.", "Soy gazlar tepkimeye çok kolay girer.", "Metallerin hepsi oda sıcaklığında gazdır."], "periyodik sistem"),
    () => soru("Parlak, tel ve levha hâline getirilebilen, elektriği iyi ileten bir element hangi sınıftadır?", "Metal", ["Ametal", "Soy gaz", "Yarı metal"], "Bu özellikler metallere aittir."),
    () => soru("Mat görünümlü, kırılgan ve elektriği iletmeyen katı bir element hangi sınıftadır?", "Ametal", ["Metal", "Soy gaz", "Alkali metal"], "Ametaller genellikle mat, kırılgan ve yalıtkandır (grafit hariç).")
  ]);

  // ---------- Fiziksel / Kimyasal Değişim ve Tepkimeler (F.8.4.3) ----------
  U.fen4k2 = tiplerden([
    siniflandir({ "fiziksel değişim": ["buzun erimesi", "kâğıdın yırtılması", "şekerin suda çözünmesi", "camın kırılması", "suyun buharlaşması", "odunun kırılması"], "kimyasal değişim": ["kâğıdın yanması", "demirin paslanması", "sütün ekşimesi", "yumurtanın pişmesi", "mayalanma", "elmanın kararması"] },
      (g) => `Hangisi bir ${dir(g)}?`, (d, g) => `${buyuk(d)}: ${g}. ${g === "kimyasal değişim" ? "Yeni madde oluşur." : "Maddenin kimliği değişmez."}`),
    // Kütlenin korunumu (programda yer alır)
    () => { const a = r(2, 9) * 4, b = r(2, 9) * 2;
      return soru(`Kapalı bir kapta ${a} g X ile ${b} g Y artansız tepkimeye giriyor. Oluşan ürünlerin toplam kütlesi kaç gramdır?`, `${a + b}`, [Y(`${Math.abs(a - b)}`, "k:tepkimede kütlenin azaldığı sanıldı (kütle korunur)"), Y(`${a}`, "k:ürün kütlesinin yalnızca bir maddeden geldiği sanıldı"), Y(`${a * b}`, "d:kütleler toplanacakken çarpıldı"), Y(`${b}`, "k:ürün kütlesinin yalnızca bir maddeden geldiği sanıldı")], `Kimyasal tepkimelerde kütle korunur: ${a} + ${b} = ${a + b} g.`); },
    ifadeler(["Kimyasal değişimde yeni maddeler oluşur.", "Fiziksel değişimde maddenin kimliği değişmez.", "Kimyasal tepkimelerde toplam kütle korunur.", "Gaz çıkışı, renk değişimi ve ısı açığa çıkması kimyasal değişimin belirtileri olabilir."],
      ["Fiziksel değişimde yeni madde oluşur.", "Kimyasal tepkimelerde toplam kütle azalır.", "Buzun erimesi kimyasal bir değişimdir.", "Demirin paslanması fiziksel bir değişimdir."], "fiziksel ve kimyasal değişimler")
  ]);

  // ---------- Asitler-Bazlar, Isı ve Sıcaklık (F.8.4.4–6) — hesaplamasız ----------
  U.fen4k3 = tiplerden([
    () => { const p = pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]); const t = p < 7 ? "Asidik" : p > 7 ? "Bazik" : "Nötr";
      return soru(`pH değeri ${p} olan bir çözelti için hangisi doğrudur?`, t, ["Asidik", "Bazik", "Nötr"].filter((x) => x !== t).map((x) => Y(x, p === 7 ? "k:pH = 7'nin nötr olduğu bilinmedi" : x === "Nötr" ? "k:pH ölçeği karıştırıldı (yalnızca pH = 7 nötrdür)" : "k:pH ölçeği ters hatırlandı (pH < 7 asidik, pH > 7 bazik)")).concat(["Tuzlu"]), "pH < 7 asidik, pH = 7 nötr, pH > 7 baziktir."); },
    siniflandir({ "asit": ["limon suyu", "sirke", "domates suyu", "portakal suyu", "mide özsuyu"], "baz": ["sabun", "çamaşır suyu", "diş macunu", "kabartma tozu", "lavabo açıcı"] },
      (g) => `Hangisi bir ${g} örneğidir?`, (d, g) => `${buyuk(d)}: ${g}.`),
    () => { const [a, b] = pick([["asit", "baz"], ["baz", "asit"]]);
      return soru(`Turnusol kâğıdı için hangisi doğrudur?`, a === "asit" ? "Asitler mavi turnusolu kırmızıya çevirir." : "Bazlar kırmızı turnusolu maviye çevirir.", [Y("Asitler kırmızı turnusolu maviye çevirir.", "k:turnusolun renk değişimi ters hatırlandı"), Y("Bazlar mavi turnusolu kırmızıya çevirir.", "k:turnusolun renk değişimi ters hatırlandı"), "Turnusol kâğıdı asit ve bazda renk değiştirmez."], "Asitler mavi turnusolu kırmızıya, bazlar kırmızı turnusolu maviye çevirir."); },
    () => soru("Kütleleri farklı iki bardak sudan aynı ısıyı alan hangisinin sıcaklığı daha çok artar?", "Kütlesi küçük olanın", [Y("Kütlesi büyük olanın", "k:kütle arttıkça sıcaklık artışının da arttığı sanıldı"), Y("İkisinin sıcaklığı eşit artar", "k:sıcaklık artışının kütleye bağlı olmadığı sanıldı (ısı ile sıcaklık karıştırıldı)"), "Hiçbirinin sıcaklığı değişmez"], "Aynı madde, aynı ısı: kütle azaldıkça sıcaklık artışı büyür."),
    () => soru("Eşit kütleli su ve zeytinyağına aynı ısı veriliyor. Zeytinyağının sıcaklığı daha çok artıyor. Bunun sebebi nedir?", "Zeytinyağının öz ısısının sudan küçük olması", [Y("Zeytinyağının öz ısısının sudan büyük olması", "k:öz ısısı büyük olanın daha çabuk ısındığı sanıldı"), "Zeytinyağının kütlesinin büyük olması", "Suyun ısı almaması"], "Öz ısısı küçük olan maddenin sıcaklığı aynı ısıyla daha çok değişir."),
    () => soru("Saf bir madde erirken ya da kaynarken sıcaklığı nasıl değişir?", "Hâl değişimi süresince değişmez", [Y("Sürekli artar", "k:hâl değişimi sırasında da sıcaklığın arttığı sanıldı"), "Sürekli azalır", "Önce azalır sonra artar"], "Hâl değişimi sırasında alınan ısı tanecikler arasındaki bağları zayıflatmaya harcanır; sıcaklık sabit kalır."),
    ifadeler(["Isı bir enerji türüdür.", "Isı alışverişi sıcak maddeden soğuk maddeye doğrudur.", "Öz ısı ayırt edici bir özelliktir.", "Kızılcık ve limon gibi ekşi besinler asit içerir."],
      ["Isının birimi santigrat derecedir.", "Sıcaklık bir enerji türüdür.", "Isı alışverişi soğuktan sıcağa doğrudur.", "Bazların tadı ekşidir."], "asitler, bazlar, ısı ve sıcaklık")
  ]);

  // ---------- Basit Makineler (F.8.5) — hesaplamalara girilmez ----------
  U.fen5k1 = tiplerden([
    siniflandir({ "kaldıraç": ["makas", "el arabası", "tahterevalli", "cımbız", "fındık kıracağı", "kürek"], "eğik düzlem": ["rampa", "merdiven", "dağ yolu", "vida"], "çıkrık": ["kuyu çıkrığı", "kapı kolu", "tornavida", "el matkabı"], "makara": ["bayrak direği", "inşaat vinci", "perde sistemi"] },
      (g) => `Hangisi bir ${g} örneğidir?`, (d, g) => `${buyuk(d)}: ${g}.`, (d) => `${buyuk(d)} hangi basit makineye örnektir?`),
    () => soru("Sabit makara için hangisi doğrudur?", "Kuvvetin yönünü değiştirir, kuvvetten kazanç sağlamaz.", [Y("Kuvvetten iki kat kazanç sağlar.", "k:sabit makara ile hareketli makara karıştırıldı"), Y("Yükle birlikte hareket eder.", "k:sabit makara ile hareketli makara karıştırıldı"), "Hem kuvvetten hem yoldan kazanç sağlar."], "Sabit makara yalnızca kuvvetin yönünü değiştirir; uygulanan kuvvet yüke eşittir."),
    () => soru("Hareketli makara için hangisi doğrudur?", "Kuvvetten kazanç sağlar, yoldan kayıp olur.", [Y("Kuvvetin yönünü değiştirir, kazanç sağlamaz.", "k:hareketli makara ile sabit makara karıştırıldı"), Y("Hem kuvvetten hem yoldan kazanç sağlar.", "k:basit makinelerin hem kuvvetten hem yoldan kazandırdığı sanıldı"), "Yükü ağırlaştırır."], "Hareketli makarada yükü kaldırmak için daha az kuvvet gerekir ama ip daha uzun çekilir."),
    () => soru("Eğik düzlemde yükü aynı yüksekliğe çıkarırken düzlemin boyu uzatılırsa ne olur?", "Uygulanan kuvvet azalır, alınan yol artar.", [Y("Uygulanan kuvvet artar.", "k:eğik düzlemin boyu uzayınca kuvvetin arttığı sanıldı"), Y("Kuvvet de yol da azalır.", "k:basit makinelerin hem kuvvetten hem yoldan kazandırdığı sanıldı"), "Hiçbir şey değişmez."], "Eğik düzlemin boyu uzadıkça daha az kuvvetle yük çıkarılır; ancak daha uzun yol alınır."),
    () => soru("Basit makineler için hangisi doğrudur?", "İşi kolaylaştırır ama iş ya da enerjiden kazanç sağlamaz.", [Y("İşten kazanç sağlar.", "k:basit makinelerin işten kazanç sağladığı sanıldı"), Y("Enerji üretir.", "k:basit makinelerin enerji ürettiği sanıldı"), Y("Her zaman hem kuvvetten hem yoldan kazanç sağlar.", "k:basit makinelerin hem kuvvetten hem yoldan kazandırdığı sanıldı")], "Basit makinelerde kuvvetten kazanç varsa yoldan kayıp vardır; işten kazanç olmaz."),
    () => soru("Bir kaldıraçta destek yüke yaklaştırılırsa yükü kaldırmak için gereken kuvvet nasıl değişir?", "Azalır", [Y("Artar", "k:destek-yük uzaklığı ile kuvvet ilişkisi ters kuruldu"), "Değişmez", "Sıfır olur"], "Destek yüke yaklaştıkça kuvvet kolu uzar, yük kolu kısalır; daha az kuvvet gerekir.")
  ]);

  // ---------- Elektrik Yükleri ve Elektrik Enerjisi (F.8.7) ----------
  U.fen7k1 = tiplerden([
    siniflandir({ "ısı enerjisine": ["ütü", "elektrikli ısıtıcı", "su ısıtıcısı (kettle)", "saç kurutma makinesinin rezistansı"], "hareket enerjisine": ["mikser", "vantilatör", "çamaşır makinesinin motoru", "elektrikli süpürge"], "ışık enerjisine": ["ampul", "LED lamba", "el feneri"] },
      (g) => `Hangi cihaz elektrik enerjisini temel olarak ${g} dönüştürür?`, (d, g) => `${buyuk(d)}: elektrik enerjisi → ${g.replace("enerjisine", "enerjisi")}.`),
    () => soru("Yüklü bir cisim nötr bir elektroskobun topuzuna dokundurulursa ne olur?", "Elektroskobun yaprakları açılır.", ["Yapraklar kapanır ve hiç açılmaz.", "Elektroskop ısınır.", "Topuz erir."], "Dokunma ile elektroskop yüklenir; aynı yükle yüklenen yapraklar birbirini iter ve açılır."),
    () => soru("Aynı cins yükle yüklü iki cisim birbirine yaklaştırılırsa ne olur?", "Birbirlerini iterler.", [Y("Birbirlerini çekerler.", "k:aynı cins yüklerin birbirini çektiği sanıldı"), "Hiçbir etki olmaz.", "İkisi de nötr olur."], "Aynı cins yükler birbirini iter, zıt cins yükler birbirini çeker."),
    () => soru("Yıldırımın binalara zarar vermesini önleyen düzenek hangisidir?", "Paratoner", [Y("Elektroskop", "k:yükü algılayan elektroskop ile yükü toprağa ileten paratoner karıştırıldı"), "Sigorta", "Reosta"], "Paratoner yıldırımın yükünü güvenli biçimde toprağa iletir (topraklama)."),
    () => soru("Hangisi yenilenebilir enerji kaynağıyla çalışan bir santraldir?", pick(["Rüzgâr santrali", "Güneş santrali", "Jeotermal santral", "Hidroelektrik santral"]), ["Kömürle çalışan termik santral", "Doğal gazla çalışan termik santral", "Fuel-oil ile çalışan termik santral"], "Rüzgâr, güneş, jeotermal ve akarsular yenilenebilir kaynaklardır."),
    () => soru("Evde elektrik enerjisinden tasarruf etmek için hangisi yapılmalıdır?", pick(["Boş odadaki lambayı kapatmak", "Enerji sınıfı A olan cihazlar seçmek", "Tasarruflu (LED) ampul kullanmak"]), ["Buzdolabının kapağını uzun süre açık bırakmak", "Cihazları gereksiz yere bekleme modunda tutmak", "Çamaşır makinesini yarım yükle sık çalıştırmak"], "Gereksiz tüketimi azaltmak hem bütçeye hem çevreye katkı sağlar."),
    ifadeler(["Sürtünme ile elektriklenmede elektronlar bir cisimden diğerine geçer.", "Zıt cins yükler birbirini çeker.", "Topraklama, fazla yükün toprağa aktarılmasıdır.", "Elektrik enerjisi ısı, ışık ve hareket enerjisine dönüştürülebilir."],
      ["Elektriklenmede protonlar yer değiştirir.", "Nötr cisimde hiç yük yoktur.", "Aynı cins yükler birbirini çeker.", "Fırtınada ağaç altına sığınmak güvenlidir."], "elektrik yükleri ve elektrik enerjisi")
  ]);

  // ---------- Matematik: Geometrik Cisimler (M.8.7) — piramit ve konide hacim hesabı programda yoktur ----------
  const P = (n) => String(n);
  U.mat11k1 = tiplerden([
    () => { const a = r(2, 9), b = r(2, 9), h = r(3, 12), v = a * b * h; return soru(`Boyutları ${a} cm, ${b} cm ve ${h} cm olan dikdörtgenler prizmasının hacmi kaç cm³'tür?`, P(v), [Y(P(a + b + h), "k:hacim bulunurken boyutlar toplandı"), Y(P(2 * (a * b + a * h + b * h)), "k:hacim ile yüzey alanı karıştırıldı"), Y(P(a * b), "d:taban alanı yükseklikle çarpılmadı"), P(v + a * b)], `Hacim = taban alanı × yükseklik = ${a} · ${b} · ${h} = ${v} cm³.`); },
    () => { const a = r(2, 10), v = a ** 3; return soru(`Bir ayrıtı ${a} cm olan küpün hacmi kaç cm³'tür?`, P(v), [Y(P(a * a), "k:küpün hacmi a² sanıldı (hacim a³)"), Y(P(6 * a * a), "k:hacim ile yüzey alanı karıştırıldı"), Y(P(3 * a), "k:a³, a·3 sanıldı (a³ = a·a·a)"), P(12 * a)], `Hacim = a³ = ${a}³ = ${v} cm³.`); },
    () => { const a = r(2, 10), s2 = 6 * a * a; return soru(`Bir ayrıtı ${a} cm olan küpün yüzey alanı kaç cm²'dir?`, P(s2), [Y(P(a ** 3), "k:yüzey alanı ile hacim karıştırıldı"), Y(P(4 * a * a), "d:küpün 6 yüzü yerine 4 yüzü sayıldı"), Y(P(a * a), "d:yalnızca bir yüzün alanı bulundu"), P(12 * a)], `Küpün 6 eş kare yüzü vardır: 6 · ${a}² = ${s2} cm².`); },
    () => { const rr = r(1, 6), h = r(2, 10), v = 3 * rr * rr * h; return soru(`Yarıçapı ${rr} cm, yüksekliği ${h} cm olan dik dairesel silindirin hacmi kaç cm³'tür? (π = 3)`, P(v), [Y(P(3 * 2 * rr * h), "k:hacim yerine yanal alan hesaplandı"), Y(P(rr * rr * h), "d:π ile çarpmak unutuldu"), Y(P(3 * rr * h), "k:yarıçapın karesi alınmadı"), P(2 * v)], `Hacim = π · r² · h = 3 · ${rr * rr} · ${h} = ${v} cm³.`); },
    () => { const rr = r(1, 6), h = r(2, 10), y = 2 * 3 * rr * rr + 2 * 3 * rr * h; return soru(`Yarıçapı ${rr} cm, yüksekliği ${h} cm olan dik dairesel silindirin yüzey alanı kaç cm²'dir? (π = 3)`, P(y), [Y(P(2 * 3 * rr * h), "d:taban alanları eklenmedi"), Y(P(3 * rr * rr * h), "k:yüzey alanı ile hacim karıştırıldı"), Y(P(2 * 3 * rr * rr), "d:yanal alan eklenmedi"), P(y + 6 * rr)], `Yüzey alanı = 2πr² + 2πrh = ${2 * 3 * rr * rr} + ${2 * 3 * rr * h} = ${y} cm².`); },
    () => { const T = r(3, 12) * 2, h = r(3, 10), v = T * h; return soru(`Taban alanı ${T} cm², yüksekliği ${h} cm olan dik prizmanın hacmi kaç cm³'tür?`, P(v), [Y(P(T + h), "k:hacim bulunurken taban alanı ile yükseklik toplandı"), P(v / 2), P(2 * v), P(T * h + T)], `Dik prizmanın hacmi = taban alanı × yükseklik = ${T} · ${h} = ${v} cm³.`); },
    () => { const n = pick([3, 4, 5, 6]), ad = { 3: "üçgen", 4: "kare", 5: "beşgen", 6: "altıgen" }[n], t = pick(["yüz", "köşe", "ayrıt"]), d = { yüz: n + 2, köşe: 2 * n, ayrıt: 3 * n }[t];
      return soru(`Tabanı ${ad} olan dik prizmanın kaç ${t}${t === "ayrıt" ? "ı" : t === "köşe" ? "si" : "ü"} vardır?`, P(d), [["yüz", n + 2], ["köşe", 2 * n], ["ayrıt", 3 * n]].filter(([a, v]) => a !== t && P(v) !== P(d)).map(([a, v]) => Y(P(v), `k:${t} sayısı ile ${a} sayısı karıştırıldı`)).concat([P(n + 1), P(2 * n + 1)]), `n = ${n} kenarlı tabanlı prizmada yüz = n + 2, köşe = 2n, ayrıt = 3n.`); }
  ]);
  U.mat11k2 = tiplerden([
    () => { const n = pick([3, 4, 5, 6, 8]), ad = { 3: "üçgen", 4: "kare", 5: "beşgen", 6: "altıgen", 8: "sekizgen" }[n], t = pick(["yüz", "köşe", "ayrıt"]), d = { yüz: n + 1, köşe: n + 1, ayrıt: 2 * n }[t];
      return soru(`Tabanı ${ad} olan bir piramidin kaç ${t}${t === "ayrıt" ? "ı" : t === "köşe" ? "si" : "ü"} vardır?`, P(d), ({
        yüz: [Y(P(2 * n), "k:yüz sayısı ile ayrıt sayısı karıştırıldı (piramitte yüz = n + 1)"), Y(P(n + 2), "k:piramit yerine prizma kuralı kullanıldı (prizmada yüz = n + 2)"), Y(P(n), "d:taban yüzü sayılmadı"), P(3 * n)],
        köşe: [Y(P(2 * n), "k:köşe sayısı ile ayrıt sayısı ya da prizmanın köşe sayısı (2n) karıştırıldı"), Y(P(n), "d:tepe noktası sayılmadı"), P(n + 2), P(3 * n)],
        ayrıt: [Y(P(n + 1), "k:ayrıt sayısı ile yüz/köşe sayısı karıştırıldı"), Y(P(3 * n), "k:piramit yerine prizma kuralı kullanıldı (prizmada ayrıt = 3n)"), Y(P(n), "d:yalnızca taban ayrıtları sayıldı"), P(n + 2)]
      })[t], `n kenarlı tabanı olan piramitte yüz = n + 1, köşe = n + 1, ayrıt = 2n (n = ${n}).`); },
    () => soru("Dik dairesel koninin açınımı hangi şekillerden oluşur?", "Bir daire ve bir daire dilimi", ["İki daire ve bir dikdörtgen", "Bir kare ve dört üçgen", "Yalnızca üç üçgen"], "Koninin tabanı daire, yanal yüzü açıldığında daire dilimidir."),
    () => soru("Dik dairesel silindirin açınımı hangi şekillerden oluşur?", "İki daire ve bir dikdörtgen", ["Bir daire ve bir daire dilimi", "İki kare ve dört dikdörtgen", "Bir kare ve dört üçgen"], "Silindirin iki tabanı daire, yanal yüzü açıldığında dikdörtgendir."),
    () => { const n = pick([3, 4, 5, 6]), ad = { 3: "üçgen", 4: "kare", 5: "beşgen", 6: "altıgen" }[n]; return soru(`Tabanı ${ad} olan dik piramidin açınımında tabandan başka kaç tane üçgen vardır?`, P(n), [Y(P(n + 1), "d:taban yüzü de sayıldı"), P(2 * n), P(n - 1)], `Piramidin yanal yüzleri üçgendir; tabanın her kenarına bir üçgen: ${n} üçgen.`); },
    () => soru("Bir piramidi adlandırırken neye bakılır?", "Taban şekline", ["Yüksekliğine", "Rengine", "Ayrıtlarının uzunluğuna"], "Piramitler taban şekline göre adlandırılır: kare piramit, üçgen piramit…"),
    ifadeler(["Koninin bir tepe noktası vardır.", "Piramidin yanal yüzleri üçgendir.", "Kare piramidin 5 yüzü vardır.", "Koninin tabanı dairedir."], ["Koninin tabanı karedir.", "Piramidin yanal yüzleri dikdörtgendir.", "Kare piramidin 8 köşesi vardır.", "Silindirin tepe noktası vardır."], "piramit ve koni")
  ]);
})();
