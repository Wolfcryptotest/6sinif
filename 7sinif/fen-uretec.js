// 7. sınıf Fen Bilimleri soru üreteçleri
(function () {
  const U = window.URETEC, { r, pick, soru, tiplerden, eslestir, siniflandir, ifadeler, dir } = window.UR;
  const B = (s) => s.charAt(0).toLocaleUpperCase("tr") + s.slice(1);

  U.f1k1 = tiplerden([
    eslestir([["roket", "araçları ve uyduları uzaya taşır"], ["yapay uydu", "Dünya çevresinde dolanarak iletişim ve gözlem yapar"], ["uzay istasyonu", "astronotların aylarca kalıp deney yaptığı yapı"], ["uzay teleskobu", "atmosfer dışından net gözlem yapar"], ["uzay sondası", "uzak gezegenlere gönderilen insansız araç"], ["uzay mekiği", "tekrar kullanılabilen uzay aracı"]], (a) => `${B(a)} ne işe yarar?`, (b) => `Hangisi "${b}"?`, (a, b) => `${a}: ${b}.`),
    ifadeler(["Türkiye Uzay Ajansı 2018'de kuruldu.", "İMECE yerli üretim bir yer gözlem uydusudur.", "Türksat uyduları iletişim sağlar.", "Uzay teleskopları atmosferin dışındadır.", "Uzay çöpleri çalışan uydulara zarar verebilir.", "Yapay uydular hava tahmininde kullanılır.", "Alper Gezeravcı ilk Türk astronottur."], ["Uzay çöpleri tamamen zararsızdır.", "Yer teleskopları atmosferden etkilenmez.", "Yapay uydular yalnızca eğlence için kullanılır.", "Türkiye'nin hiç uydusu yoktur.", "Uzay istasyonunda kimse kalamaz.", "Roketler yalnızca havai fişek içindir."], "Uzay teknolojileri")
  ]);
  const EVRE = [["bulutsu (nebula)", "yıldızların doğduğu gaz ve toz bulutu"], ["kırmızı dev", "yakıtı azalan yıldızın genişlemiş hâli"], ["beyaz cüce", "Güneş gibi yıldızların son evresi"], ["süpernova", "çok büyük yıldızların ölürken yaptığı büyük patlama"], ["kara delik", "ışığın bile kaçamadığı çok yoğun bölge"], ["nötron yıldızı", "süpernovadan geriye kalan çok yoğun küçük yıldız"]];
  U.f1k2 = tiplerden([
    eslestir(EVRE, (a) => `"${a}" ne demektir?`, (b) => `${B(b)} hangisidir?`, (a, b) => `${a}: ${b}.`),
    siniflandir({ "takımyıldız": ["Büyükayı", "Küçükayı", "Avcı (Orion)", "Kraliçe (Kassiopeia)"], "galaksi": ["Samanyolu", "Andromeda", "Macellan Bulutu"], "yıldız": ["Güneş", "Kutup Yıldızı", "Sirius"] }, (g) => `Hangisi bir ${dir(g)}?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" nedir?`),
    () => { const S = ["bulutsu", "ana yıldız", "kırmızı dev", "beyaz cüce"]; const i = r(0, 2); return soru(`Güneş gibi bir yıldızın yaşamında "${S[i]}" evresinden sonra hangisi gelir?`, B(S[i + 1]), S.filter((_, j) => j !== i + 1).map(B), `Sıra: ${S.join(" → ")}`); }
  ]);

  U.f2k1 = tiplerden([
    () => { const F = r(2, 20) * 5, x = r(2, 12); return soru(`${F} N'luk kuvvet uygulanan bir cisim kuvvet yönünde ${x} m ilerliyor. Yapılan iş kaç J'dür?`, String(F * x), [String(F + x), String(F * x / 2), String(F * (x + 1))], `İş = ${F} × ${x} = ${F * x} J`); },
    () => { const W = r(4, 30) * 10, x = pick([2, 4, 5, 10]); if (W % x) return null; return soru(`Bir cisme ${W} J iş yapılarak kuvvet yönünde ${x} m yol aldırılıyor. Uygulanan kuvvet kaç N'dur?`, String(W / x), [String(W * x), String(W - x), String(W / x + x)], `Kuvvet = ${W} ÷ ${x} = ${W / x} N`); },
    siniflandir({ "fiziksel iş yapılan": ["yerdeki çantayı masaya kaldırmak", "alışveriş arabasını itip ilerletmek", "kovayı kuyudan yukarı çekmek", "kutuyu rafa koymak", "bisikleti iterek ilerletmek"], "fiziksel iş yapılmayan": ["duvarı itmek", "elindeki çantayla yatay yolda yürümek", "kımıldatamadığı bir dolabı itmek", "başının üstünde sabit tuttuğu kitap", "ders çalışırken düşünmek"] }, (g) => `Hangisi ${g} bir durumdur?`, (d, g) => `"${d}": ${g}.`)
  ]);
  U.f2k2 = tiplerden([
    siniflandir({ "kinetik enerji": ["yuvarlanan top", "akan su", "esen rüzgâr", "koşan çocuk", "uçan kuş"], "çekim potansiyel enerjisi": ["raftaki saksı", "baraj gölündeki su", "daldaki elma", "tepedeki kaya"], "esneklik potansiyel enerjisi": ["gerilmiş sapan lastiği", "sıkıştırılmış yay", "gerilmiş ok yayı", "kurulmuş oyuncak yayı"] }, (g) => `Hangisinde ${g} öne çıkar?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" hangi enerjiye sahiptir?`),
    ifadeler(["Kinetik enerji kütle ve sürate bağlıdır.", "Duran cismin kinetik enerjisi sıfırdır.", "Yükseklik arttıkça çekim potansiyel enerjisi artar.", "Enerjinin birimi joule'dür.", "Gerilmiş lastik esneklik potansiyel enerjisi depolar."], ["Kinetik enerji yalnızca renge bağlıdır.", "Duran cismin kinetik enerjisi en büyüktür.", "Yükseklik arttıkça potansiyel enerji azalır.", "Enerjinin birimi newtondur.", "Esnek cisimler enerji depolayamaz."], "Enerji")
  ]);
  U.f2k3 = tiplerden([
    () => { const l = [["yüksekten düşen top", "potansiyel enerji → kinetik enerji"], ["yukarı atılan top", "kinetik enerji → potansiyel enerji"], ["birbirine sürtülen eller", "kinetik enerji → ısı enerjisi"], ["frene basan bisiklet", "kinetik enerji → ısı enerjisi"], ["barajdan düşen su", "potansiyel enerji → kinetik enerji"], ["bırakılan gerili ok yayı", "esneklik potansiyel enerjisi → kinetik enerji"]]; const [o, d] = pick(l); return soru(`"${B(o)}" olayındaki temel enerji dönüşümü hangisidir?`, B(d), [...new Set(l.map((x) => B(x[1])))].filter((x) => x !== B(d)), `${o}: ${d}.`); },
    ifadeler(["Enerji yoktan var edilemez, vardan yok edilemez.", "Salıncağın en alçak noktasında kinetik enerji en fazladır.", "Sürtünme mekanik enerjinin bir kısmını ısıya dönüştürür.", "Yukarı atılan top en tepede bir an durur.", "Enerji bir türden başka bir türe dönüşebilir."], ["Sürtünme enerjiyi yok eder.", "Salıncağın en yüksek noktasında kinetik enerji en fazladır.", "Enerji hiçbir zaman dönüşmez.", "Yukarı atılan topun kinetik enerjisi artarak yükselir.", "Enerji yoktan var edilebilir."], "Enerji dönüşümü")
  ]);

  const SIN = [["ağız", "dişlerle mekanik, tükürükle kimyasal sindirimin başladığı yer"], ["yemek borusu", "besinleri yutaktan mideye iletir"], ["mide", "proteinlerin sindiriminin başladığı organ"], ["ince bağırsak", "sindirimin tamamlandığı ve emilimin olduğu yer"], ["kalın bağırsak", "su ve minerallerin emildiği yer"], ["karaciğer", "yağların sindirimini kolaylaştıran safrayı üretir"], ["pankreas", "bütün besinlerin sindirimine yardım eden öz su salgılar"]];
  U.f3k1 = tiplerden([
    eslestir(SIN, (a) => `Sindirim sisteminde ${a} hangi görevi yapar?`, (b) => `Sindirim sisteminde "${b}" hangisidir?`, (a, b) => `${a}: ${b}.`),
    siniflandir({ "sindirim kanalı organı": ["ağız", "yutak", "yemek borusu", "mide", "ince bağırsak", "kalın bağırsak"], "sindirime yardımcı organ": ["karaciğer", "pankreas"] }, (g) => `Hangisi bir ${dir(g)}?`, (d, g) => `${d}: ${g}.`),
    () => { const S = ["ağız", "yutak", "yemek borusu", "mide", "ince bağırsak", "kalın bağırsak"]; const i = r(0, 4); return soru(`Besinler sindirim kanalında ${S[i]} bölümünden sonra hangi organa geçer?`, B(S[i + 1]), S.filter((_, j) => j !== i + 1).map(B), `Sıra: ${S.join(" → ")}`); }
  ]);
  U.f3k2 = tiplerden([
    eslestir([["alyuvar", "oksijen taşır"], ["akyuvar", "mikroplara karşı savunma yapar"], ["kan pulcuğu", "kanın pıhtılaşmasını sağlar"], ["plazma", "kanın sıvı kısmıdır"], ["atardamar", "kalpten çıkan kanı taşır"], ["toplardamar", "kalbe kan getirir"], ["kılcal damar", "hücrelerle madde alışverişinin yapıldığı ince damar"]], (a) => `${B(a)} ne işe yarar?`, (b) => `Hangisi "${b}"?`, (a, b) => `${a}: ${b}.`),
    ifadeler(["Kalbin dört odacığı vardır.", "Küçük kan dolaşımı kalp ile akciğerler arasında olur.", "Kan bağışı toplumsal dayanışmanın bir örneğidir.", "Spor yapmak dolaşım sistemi için faydalıdır.", "Kulakçıklar kalbin üst odacıklarıdır."], ["Kalbin iki odacığı vardır.", "Büyük kan dolaşımında kan yalnızca akciğerlere gider.", "Toplardamarlar kanı kalpten götürür.", "Sigara dumanı dolaşım sistemine faydalıdır.", "Akyuvarlar oksijen taşır."], "Dolaşım sistemi")
  ]);
  U.f3k3 = tiplerden([
    () => { const S = ["burun", "yutak", "gırtlak", "soluk borusu", "bronşlar", "bronşçuklar", "alveoller"]; const i = r(0, 5); return soru(`Soluduğumuz hava "${S[i]}" yapısından sonra nereye geçer?`, B(S[i + 1]), S.filter((_, j) => j !== i + 1).map(B), `Sıra: ${S.join(" → ")}`); },
    ifadeler(["Gaz alışverişi alveollerde olur.", "Soluk alırken diyafram kasılır ve aşağı iner.", "Burun havayı ısıtır, nemlendirir ve temizler.", "Sigara akciğerlere zarar verir.", "Oksijen alveollerden kana geçer."], ["Gaz alışverişi midede olur.", "Soluk alırken diyafram yukarı çıkar.", "Karbondioksit kandan hiç atılmaz.", "Sigara akciğerleri güçlendirir.", "Alveollerde sindirim olur."], "Solunum sistemi")
  ]);
  U.f3k4 = tiplerden([
    () => { const S = ["böbrek", "üreter (idrar borusu)", "idrar kesesi", "üretra (idrar kanalı)"]; const i = r(0, 2); return soru(`Boşaltım sisteminde idrar "${S[i]}" yapısından sonra nereye geçer?`, B(S[i + 1]), S.filter((_, j) => j !== i + 1).map(B), `Sıra: ${S.join(" → ")}`); },
    siniflandir({ "boşaltıma yardım eden organ": ["böbrek", "akciğer", "deri"], "boşaltım sistemiyle ilgisi olmayan organ": ["mide", "yemek borusu", "kalp kapakçığı"] }, (g) => `Hangisi ${dir(g)}?`, (d, g) => `${d}: ${g}.`),
    ifadeler(["Böbrekler kanı süzerek idrar oluşturur.", "Deri ter yoluyla boşaltıma yardım eder.", "Bol su içmek böbrek sağlığını korur.", "Organ bağışı hayat kurtarır.", "Akciğerler karbondioksiti dışarı atar."], ["İdrar akciğerlerde oluşur.", "Çok tuz tüketmek böbreklere iyi gelir.", "Üreter idrar kesesinden dışarı açılır.", "Boşaltım sistemi yalnızca deriden oluşur.", "İdrarı uzun süre tutmak sağlıklıdır."], "Boşaltım sistemi")
  ]);

  U.f4k1 = tiplerden([
    ifadeler(["Işık farklı yoğunluktaki ortamlara geçerken kırılır.", "Yüzeye dik gelen ışın kırılmaz.", "Havuz olduğundan daha sığ görünür.", "Gökkuşağı ışığın kırılmasıyla oluşur.", "Işık sudan havaya geçerken normalden uzaklaşır.", "Normal, ortamların ayrıldığı yüzeye çizilen dik doğrudur."], ["Işık aynı ortamda kırılarak ilerler.", "Yüzeye dik gelen ışın en çok kırılır.", "Havuz olduğundan daha derin görünür.", "Gökkuşağı ışığın soğurulmasıyla oluşur.", "Işık havadan suya geçerken normalden uzaklaşır.", "Kırılma yalnızca aynalarda olur."], "Işığın kırılması"),
    () => { const [g, h, n] = pick([["havadan", "suya", "normale yaklaşarak"], ["havadan", "cama", "normale yaklaşarak"], ["sudan", "havaya", "normalden uzaklaşarak"], ["camdan", "havaya", "normalden uzaklaşarak"]]); return soru(`Işık ${g} ${h} eğik olarak geçerken nasıl kırılır?`, B(n), ["Normale yaklaşarak", "Normalden uzaklaşarak", "Hiç kırılmadan", "Geri yansıyarak"].filter((x) => x !== B(n)), "Az yoğundan çok yoğuna: normale yaklaşır; çok yoğundan az yoğuna: uzaklaşır."); },
    siniflandir({ "kırılmaya örnek": ["suya batırılan kalemin kırık görünmesi", "havuzun olduğundan sığ görünmesi", "gökkuşağının oluşması", "sudaki balığın farklı yerde görünmesi"], "yansımaya örnek": ["aynada görüntümüzü görmek", "durgun gölde ağaçların görüntüsü", "parlak kaşıkta yüzümüzü görmek"] }, (g) => `Hangisi ışığın ${g === "kırılmaya örnek" ? "kırılmasına" : "yansımasına"} bir örnektir?`, (d, g) => `${d}: ${g}.`)
  ]);
  U.f4k2 = tiplerden([
    siniflandir({ "ince kenarlı (yakınsak) mercek": ["büyüteç", "mikroskop", "fotoğraf makinesi", "hipermetrop gözlüğü", "projeksiyon cihazı"], "kalın kenarlı (ıraksak) mercek": ["miyop gözlüğü", "kapı dürbünü"] }, (g) => `Hangisinde ${g} kullanılır?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" içinde hangi mercek kullanılır?`),
    ifadeler(["İnce kenarlı mercekler ışınları toplar.", "Kalın kenarlı mercekler ışınları dağıtır.", "Miyop gözlükleri kalın kenarlı mercektir.", "Büyüteçle güneş ışınları bir noktada toplanabilir.", "İnce kenarlı merceklerin ortası kenarlarından kalındır."], ["Kalın kenarlı mercekler ışınları toplar.", "Büyüteç kalın kenarlı mercektir.", "Merceklerden ışık geçmez.", "Miyop gözlükleri ince kenarlı mercektir.", "Kalın kenarlı merceklerin ortası kalındır."], "Mercekler")
  ]);

  const ELEM = [["H", "hidrojen"], ["He", "helyum"], ["Li", "lityum"], ["Be", "berilyum"], ["B", "bor"], ["C", "karbon"], ["N", "azot"], ["O", "oksijen"], ["F", "flor"], ["Ne", "neon"], ["Na", "sodyum"], ["Mg", "magnezyum"], ["Al", "alüminyum"], ["Si", "silisyum"], ["P", "fosfor"], ["S", "kükürt"], ["Cl", "klor"], ["Ar", "argon"], ["Fe", "demir"], ["Cu", "bakır"], ["Au", "altın"], ["Ag", "gümüş"]];
  const BIL = [["H₂O", "su"], ["CO₂", "karbondioksit"], ["NaCl", "sofra tuzu"], ["NH₃", "amonyak"], ["CH₄", "metan"], ["HCl", "hidroklorik asit"], ["CaCO₃", "kireç taşı"]];
  U.f5k1 = tiplerden([
    eslestir([["proton", "çekirdekte bulunan pozitif yüklü tanecik"], ["nötron", "çekirdekte bulunan yüksüz tanecik"], ["elektron", "katmanlarda hareket eden negatif yüklü tanecik"], ["çekirdek", "atomun proton ve nötronların bulunduğu merkezi"]], (a) => `Atomda ${a} nedir?`, (b) => `Atomda "${b}" hangisidir?`, (a, b) => `${a}: ${b}.`),
    () => { const S = ["Demokritos", "Dalton", "Thomson", "Rutherford", "Bohr"]; const i = r(0, 3); return soru(`Atom modelinin gelişiminde "${S[i]}" modelinden sonra hangi bilim insanının modeli gelir?`, S[i + 1], S.filter((_, j) => j !== i + 1), `Sıra: ${S.join(" → ")} → modern model`); },
    () => { const p = r(1, 18); return soru(`Nötr bir atomda ${p} proton varsa kaç elektron vardır?`, String(p), [String(p + 1), String(p * 2), String(Math.max(0, p - 1)) === String(p) ? "0" : String(Math.max(0, p - 1))], "Nötr atomda proton sayısı = elektron sayısı."); }
  ]);
  U.f5k2 = tiplerden([
    eslestir(ELEM, (a) => `"${a}" hangi elementin sembolüdür?`, (b) => `${B(b)} elementinin sembolü hangisidir?`, (a, b) => `${a}: ${b}.`),
    eslestir(BIL, (a) => `${a} formülü hangi bileşiğe aittir?`, (b) => `${B(b)} bileşiğinin formülü hangisidir?`, (a, b) => `${b}: ${a}.`),
    siniflandir({ "element": ["demir", "oksijen gazı", "altın", "karbon", "azot gazı", "bakır"], "bileşik": ["su", "karbondioksit", "sofra tuzu", "amonyak", "şeker"] }, (g) => `Hangisi bir ${dir(g)}?`, (d, g) => `${d}: ${g}.`)
  ]);
  U.f5k3 = tiplerden([
    siniflandir({ "homojen karışım": ["şekerli su", "tuzlu su", "hava", "kolonya", "çelik (alaşım)", "limonata"], "heterojen karışım": ["zeytinyağı-su", "kum-su", "ayran", "salata", "çakıl-kum", "tebeşir tozu-su"] }, (g) => `Hangisi ${dir(g)}?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" nasıl bir karışımdır?`),
    () => { const [c, cz] = pick([["şekerli su", ["su", "şeker"]], ["tuzlu su", ["su", "tuz"]], ["kolonya", ["alkol", "esans"]], ["limonata", ["su", "şeker"]]]); const t = pick(["çözücü", "çözünen"]); const d = t === "çözücü" ? cz[0] : cz[1]; return soru(`${B(c)} çözeltisinde ${t} hangisidir?`, B(d), [B(t === "çözücü" ? cz[1] : cz[0]), "Hava", "Kum"], `Miktarı fazla olan çözücü, az olan çözünendir.`); },
    siniflandir({ "çözünme hızını artırır": ["sıcaklığı artırmak", "karıştırmak", "çözüneni toz hâline getirmek"], "çözünme hızını azaltır": ["çözücüyü soğutmak", "karıştırmadan bekletmek", "küp şeker kullanmak"] }, (g) => `Hangisi ${g}?`, (d, g) => `${d}: ${g}.`)
  ]);
  U.f5k4 = tiplerden([
    () => { const l = [["tuzlu su", "buharlaştırma"], ["demir tozu-kum", "mıknatısla ayırma"], ["un-kepek", "eleme"], ["kum-çakıl", "eleme"], ["kum-su", "süzme"], ["zeytinyağı-su", "ayırma hunisi"], ["su-alkol", "damıtma"], ["talaş-kum", "yüzdürme"]]; const [k, y] = pick(l); return soru(`${B(k)} karışımını ayırmak için en uygun yöntem hangisidir?`, B(y), [...new Set(l.map((x) => B(x[1])))].filter((x) => x !== B(y)), `${k}: ${y}.`); },
    eslestir([["tane büyüklüğü farkı", "eleme"], ["mıknatıs özelliği", "mıknatısla ayırma"], ["kaynama noktası farkı", "damıtma"], ["karışmayan sıvılarda yoğunluk farkı", "ayırma hunisi"], ["çözünmüş katıyı elde etme", "buharlaştırma"]], (a) => `Hangi ayırma yöntemi "${a}" özelliğinden yararlanır?`, (b) => `${B(b)} yöntemi hangi özellikten yararlanır?`, (a, b) => `${b}: ${a}.`)
  ]);

  U.f6k1 = tiplerden([
    () => { const p = r(2, 12), n = r(2, 12); const d = p === n ? "Nötr" : p > n ? "Pozitif" : "Negatif"; return soru(`Bir cisimde ${p} birim pozitif, ${n} birim negatif yük vardır. Cisim nasıl yüklüdür?`, d, ["Nötr", "Pozitif", "Negatif", "Hem pozitif hem negatif değildir"].filter((x) => x !== d), "Hangi yük fazlaysa cisim o yükle yüklüdür; eşitse nötrdür."); },
    () => { const [a, b] = pick([["pozitif", "pozitif"], ["negatif", "negatif"], ["pozitif", "negatif"]]); const d = a === b ? "Birbirini iter" : "Birbirini çeker"; return soru(`${B(a)} yüklü bir cisim ile ${b} yüklü bir cisim birbirine yaklaştırılırsa ne olur?`, d, [a === b ? "Birbirini çeker" : "Birbirini iter", "Hiçbir etkileşim olmaz", "İkisi de nötr olur"], "Aynı yükler iter, zıt yükler çeker."); },
    siniflandir({ "sürtünme ile elektriklenme": ["balonun kazağa sürtülmesi", "saçın tarakla taranması", "cam çubuğun ipek kumaşa sürtülmesi"], "dokunma ile elektriklenme": ["yüklü bir çubuğun elektroskop topuzuna dokundurulması", "yüklü kürenin nötr küreye değdirilmesi"], "etki ile elektriklenme": ["yüklü çubuğun nötr cisme dokundurmadan yaklaştırılması", "yüklü balonun kâğıt parçalarına yaklaştırılması"] }, (g) => `Hangisi ${g}ye örnektir?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" hangi elektriklenme çeşididir?`),
    ifadeler(["Elektriklenmede yalnızca elektronlar yer değiştirir.", "Elektroskop cismin yüklü olup olmadığını gösterir.", "Paratoner yıldırımı toprağa iletir.", "Elektron alan cisim negatif yüklenir.", "Nötr cisimde pozitif ve negatif yük eşittir."], ["Elektriklenmede protonlar yer değiştirir.", "Aynı cins yükler birbirini çeker.", "Elektron veren cisim negatif yüklenir.", "Fırtınada ağaç altına sığınmak güvenlidir.", "Nötr cisimde hiç yük yoktur."], "Elektriklenme")
  ]);

  U.f7k1 = tiplerden([
    siniflandir({ "üretici": ["ot", "buğday", "alg", "meşe ağacı", "yosun"], "otçul tüketici": ["tavşan", "çekirge", "inek", "geyik", "koyun"], "etçil tüketici": ["kurt", "kartal", "aslan", "yılan", "tilki"], "ayrıştırıcı": ["çürükçül bakteri", "şapkalı mantar", "küf mantarı"] }, (g) => `Hangisi ${dir(g)}?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" besin zincirinde hangi gruptadır?`),
    () => { const Z = pick([["ot", "çekirge", "kurbağa", "yılan", "kartal"], ["alg", "küçük balık", "büyük balık", "fok", "kutup ayısı"], ["buğday", "fare", "yılan", "şahin"], ["ot", "tavşan", "tilki", "kurt"]]); const i = r(0, Z.length - 2); return soru(`"${Z.join(" → ")}" besin zincirinde ${Z[i]} hangi canlının besinidir?`, B(Z[i + 1]), Z.filter((_, j) => j !== i + 1).map(B), `${Z[i]} → ${Z[i + 1]}`); },
    ifadeler(["Besin zinciri üreticilerle başlar.", "Ekoloji piramidinde tepeye doğru enerji azalır.", "Ayrıştırıcılar ölü canlıları çürütür.", "Biyolojik birikim en çok zincirin sonundaki canlıları etkiler.", "Enerji besin zincirinde üreticiden tüketiciye akar."], ["Besin zinciri etçillerle başlar.", "Ekoloji piramidinde tepeye doğru canlı sayısı artar.", "Ayrıştırıcıların doğaya hiçbir faydası yoktur.", "Biyolojik birikim yalnızca üreticileri etkiler.", "Enerji tüketicilerden üreticilere akar."], "Besin zinciri")
  ]);
  U.f7k2 = tiplerden([
    siniflandir({ "kaynakları korur": ["diş fırçalarken musluğu kapatmak", "kısa duş almak", "damlayan musluğu tamir ettirmek", "boş odada ışığı söndürmek", "bez çanta kullanmak", "yiyecek israf etmemek"], "kaynakları israf eder": ["bulaşığı akan suyun altında yıkamak", "televizyonu açık bırakmak", "yarım dolu makineyi çalıştırmak", "bahçeyi öğle sıcağında sulamak", "gereksiz kıyafet almak"] }, (g) => `Hangisi ${g}?`, (d, g) => `${d}: ${g}.`),
    ifadeler(["Tatlı su kaynakları sınırlıdır.", "Su ayak izi bir ürünün üretiminde harcanan sudur.", "Atık su arıtılarak yeniden kullanılabilir.", "Sürdürülebilir yaşam gelecek nesilleri düşünmektir.", "Dünyadaki suyun çoğu tuzludur."], ["Tatlı su kaynakları sınırsızdır.", "Dünyadaki suyun çoğu içilebilir.", "Atık su hiçbir şekilde kullanılamaz.", "Su ayak izi yalnızca içtiğimiz sudur.", "Tasarruf yapmak çevreye zarar verir."], "Kaynakların kullanımı")
  ]);
})();
