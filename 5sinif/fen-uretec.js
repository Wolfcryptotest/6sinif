// 5. sınıf Fen Bilimleri soru üreteçleri (ortak-uretec.js'ten sonra yüklenir)
(function () {
  const U = window.URETEC, { r, pick, soru, tiplerden, eslestir, siniflandir, ifadeler, dir } = window.UR;

  U.f1k1 = tiplerden([
    ifadeler(["Güneş bir yıldızdır.", "Güneş kendi ısısını ve ışığını üretir.", "Güneş gaz hâlindeki maddelerden oluşur.", "Güneş kendi ekseni etrafında döner.", "Güneş lekelerinin yer değiştirmesi Güneş'in döndüğünü gösterir.", "Güneş'e çıplak gözle bakmak gözlere zarar verir.", "Güneş, Dünya'ya en yakın yıldızdır.", "Bitkiler besin üretmek için Güneş ışığını kullanır.", "Güneş'in en çok bulunan gazı hidrojendir."],
      ["Güneş bir gezegendir.", "Güneş katı ve kayalık yapılıdır.", "Güneş, Dünya'dan küçüktür.", "Güneş'in ışığı Ay'dan gelir.", "Güneş hiçbir hareket yapmaz.", "Güneş'e güneş gözlüğüyle bakmak güvenlidir.", "Güneş'in kendi ışığı yoktur.", "Güneş, Dünya'nın uydusudur.", "Güneş en uzak yıldızdır."], "Güneş"),
    eslestir([["çekirdek", "Güneş'in en sıcak merkez katmanı"], ["Güneş lekesi", "Güneş yüzeyinde daha soğuk görünen koyu bölge"], ["Güneş patlaması", "Güneş'ten uzaya fışkıran enerji"], ["dönme hareketi", "bir gök cisminin kendi ekseni etrafında dönmesi"]], (a) => `"${a}" ne demektir?`, (b) => `Hangisi "${b}" anlamına gelir?`, (a, b) => `${a}: ${b}`)
  ]);

  const EVRE = [["Yeni Ay", "Ay hiç görünmez"], ["İlk Dördün", "Ay'ın sağ yarısı aydınlık görünür"], ["Dolunay", "Ay'ın tamamı aydınlık görünür"], ["Son Dördün", "Ay'ın sol yarısı aydınlık görünür"]];
  U.f1k2 = tiplerden([
    () => { const [e, t] = pick(EVRE); return soru(`${t.charAt(0).toLocaleUpperCase("tr") + t.slice(1)}. Bu hangi evredir?`, e, EVRE.filter((x) => x[0] !== e).map((x) => x[0]), `${e}: ${t}.`); },
    () => { const i = r(0, 3); return soru(`Ay'ın ana evreleri sırasında ${EVRE[i][0]} evresinden sonra hangi evre gelir?`, EVRE[(i + 1) % 4][0], EVRE.filter((_, j) => j !== (i + 1) % 4).map((x) => x[0]), `Sıra: Yeni Ay → İlk Dördün → Dolunay → Son Dördün → Yeni Ay`); },
    ifadeler(["Ay, Dünya'nın tek doğal uydusudur.", "Ay'ın kendi ışığı yoktur.", "Ay'da atmosfer bulunmaz.", "Ay'ın yüzeyinde kraterler vardır.", "Ay'ın hep aynı yüzünü görürüz.", "Ay'ın dönme ve dolanma süreleri eşittir.", "Ay hem Dünya'nın hem de Dünya ile birlikte Güneş'in etrafında dolanır.", "Bir Yeni Ay'dan diğerine yaklaşık 29,5 gün geçer."],
      ["Ay bir yıldızdır.", "Ay kendi ışığını üretir.", "Ay'da bol miktarda sıvı su vardır.", "Ay'ın atmosferi çok kalındır.", "Ay'ın her yüzünü görebiliriz.", "Ay kendi ekseni etrafında dönmez.", "Ay'ın evreleri 365 günde tamamlanır.", "Ay, Dünya'dan büyüktür."], "Ay")
  ]);

  U.f1k3 = tiplerden([
    ifadeler(["Dünya kendi ekseni etrafında yaklaşık 24 saatte döner.", "Gece ve gündüz Dünya'nın dönme hareketiyle oluşur.", "Dünya, Güneş etrafında 365 gün 6 saatte dolanır.", "Güneş, Dünya ve Ay arasında en büyüğü Güneş'tir.", "Dünya'nın hacmi Ay'ın hacminden büyüktür.", "Dünya batıdan doğuya doğru döner.", "Ay, Dünya ile birlikte Güneş'in etrafında dolanır."],
      ["Gece ve gündüz Dünya'nın dolanma hareketiyle oluşur.", "Dünya, Güneş etrafında 24 saatte dolanır.", "Ay, Güneş'ten büyüktür.", "Dünya hiç dönmez.", "Güneş, Dünya'nın etrafında dolanır.", "Dünya doğudan batıya döner.", "Dünya, Güneş'ten büyüktür."], "Dünya, Güneş ve Ay"),
    () => { const l = [["Dünya'nın kendi ekseni etrafında dönmesi", "yaklaşık 24 saat"], ["Dünya'nın Güneş etrafında dolanması", "365 gün 6 saat"], ["Ay'ın Dünya etrafında dolanması", "yaklaşık 27,3 gün"], ["Ay'ın evrelerinin tamamlanması", "yaklaşık 29,5 gün"]]; const [h, s] = pick(l); return soru(`${h} ne kadar sürer?`, s, l.filter((x) => x[1] !== s).map((x) => x[1]), `${h}: ${s}.`); }
  ]);

  U.f2k1 = tiplerden([
    ifadeler(["Kuvvet, itme ya da çekme etkisidir.", "Kuvvet dinamometre ile ölçülür.", "Kuvvetin birimi newtondur.", "Kuvvet duran bir cismi harekete geçirebilir.", "Kuvvet cisimlerin şeklini değiştirebilir.", "Dinamometrede esnek bir yay bulunur.", "Kuvvet büyüdükçe dinamometrenin yayı daha çok uzar.", "Kalın yaylı dinamometreler büyük kuvvetleri ölçer."],
      ["Kuvvet termometre ile ölçülür.", "Kuvvetin birimi kilogramdır.", "Kuvvet cisimlerin rengini değiştirir.", "Dinamometrede mıknatıs bulunur.", "İnce yaylı dinamometre büyük kuvvetleri ölçer.", "Kuvvet hareket eden cismi durduramaz.", "Kuvvet yalnızca itme etkisidir."], "Kuvvet"),
    () => { const l = [["Kapıyı açmak için kolu aşağı bastırmak", "itme"], ["Çekmeceyi açmak", "çekme"], ["Topa tekme atmak", "itme"], ["Halat çekme yarışı", "çekme"], ["Alışveriş arabasını ilerletmek", "itme"], ["Kova ile kuyudan su çıkarmak", "çekme"], ["Hamuru yoğurmak", "itme"], ["Bavulu tekerleklerinden çekerek taşımak", "çekme"]]; const [o, t] = pick(l); return soru(`"${o}" eyleminde hangi kuvvet uygulanır?`, t === "itme" ? "İtme" : "Çekme", t === "itme" ? ["Çekme", "Sürtünme", "Mıknatıs"] : ["İtme", "Sürtünme", "Yer çekimi"], `${o}: ${t}.`); },
    () => { const n = r(2, 9) * 5, k = pick([5, 10, 20]); return soru(`Her 1 cm uzaması ${k} N'u gösteren bir dinamometrenin yayı ${n / 5} cm uzamıştır. Ölçülen kuvvet kaç N'dur?`, String((n / 5) * k), [String(n / 5 + k), String((n / 5) * k + k), String(k)], `${n / 5} × ${k} = ${(n / 5) * k} N`); }
  ]);

  U.f2k2 = tiplerden([
    () => { const m = r(20, 90); return soru(`Dünya'da kütlesi ${m} kg olan bir astronotun Ay'daki kütlesi kaç kg'dır?`, String(m), [String(Math.round(m / 6)), String(m * 6), "0"], "Kütle her yerde aynıdır."); },
    () => { const m = r(1, 12) * 6; return soru(`Dünya'da ağırlığı ${m * 10} N olan bir cismin Ay'daki ağırlığı yaklaşık kaç N olur?`, String((m * 10) / 6), [String(m * 10), String(m * 60), String(m)], "Ay'da ağırlık Dünya'dakinin yaklaşık 1/6'sıdır."); },
    siniflandir({ "kütle": ["eşit kollu terazi ile ölçülür", "birimi kilogramdır", "her yerde aynıdır", "madde miktarıdır"], "ağırlık": ["dinamometre ile ölçülür", "birimi newtondur", "bulunulan yere göre değişir", "yer çekimi kuvvetidir"] }, (g) => `Hangisi ${g} için doğrudur?`, (d, g) => `${g.charAt(0).toLocaleUpperCase("tr") + g.slice(1)}: ${d}.`),
    () => { const l = ["Ay'da", "Ekvator'da", "Kuzey Kutbu'nda", "Bir dağın tepesinde"]; return soru("Bir cismin ağırlığı en fazla nerede olur?", "Kuzey Kutbu'nda", l.filter((x) => x !== "Kuzey Kutbu'nda"), "Kutuplarda yer çekimi en fazladır."); }
  ]);

  U.f2k3 = tiplerden([
    siniflandir({ "sürtünmeyi azaltan": ["menteşeye yağ sürmek", "kızağın altını cilalamak", "eşyayı tekerlekli taşımak", "bisiklet zincirini yağlamak", "buz pateni bıçaklarının pürüzsüz olması", "kayakların altının mumlanması"], "sürtünmeyi artıran": ["kışın lastiklere zincir takmak", "buzlu yola kum serpmek", "ayakkabı tabanını tırtıklı yapmak", "kaymaz banyo paspası kullanmak", "kar lastiği takmak", "basketbol ayakkabısının kauçuk tabanı"] }, (g) => `Hangisi ${g} bir uygulamadır?`, (d, g) => `"${d}" ${g} bir uygulamadır.`),
    ifadeler(["Sürtünme kuvveti harekete zıt yöndedir.", "Pürüzlü yüzeylerde sürtünme daha fazladır.", "Paraşüt hava direncini artırır.", "Balıkların sivri vücut yapısı su direncini azaltır.", "Sürtünme sayesinde yürüyebiliriz.", "Sürtünme makine parçalarını aşındırır.", "Kibritin yanması sürtünme sayesindedir."],
      ["Sürtünme kuvveti hareketle aynı yöndedir.", "Buz, pürüzlü bir yüzeydir.", "Sürtünmenin hiç faydası yoktur.", "Paraşüt hava direncini azaltır.", "Yağlama sürtünmeyi artırır.", "Hava direnci yalnızca suda oluşur.", "Sürtünme cisimleri ısıtmaz."], "Sürtünme"),
    () => { const l = [["halı", "buz"], ["zımpara kâğıdı", "cam"], ["asfalt", "parke (cilalı)"], ["toprak yol", "fayans"]]; const [p, d] = pick(l); return soru(`Aynı topu ${p} ve ${d} üzerinde aynı kuvvetle yuvarlıyoruz. Top hangi yüzeyde daha uzağa gider?`, d.charAt(0).toLocaleUpperCase("tr") + d.slice(1), [p.charAt(0).toLocaleUpperCase("tr") + p.slice(1), "İkisinde aynı yere", "Hiç hareket etmez"], `${d} daha az pürüzlüdür; sürtünme azdır.`); }
  ]);

  const ORG = [["çekirdek", "hücrenin yönetim merkezi, kalıtsal bilgiyi taşır"], ["hücre zarı", "hücreyi çevreler, madde giriş çıkışını kontrol eder"], ["sitoplazma", "organellerin bulunduğu sıvı kısım"], ["mitokondri", "besinlerden enerji üretir"], ["ribozom", "protein üretir"], ["koful", "su ve atık maddeleri depolar"], ["kloroplast", "fotosentez yapar"], ["hücre duvarı", "bitki hücresini dıştan saran sağlam tabaka"]];
  U.f3k1 = tiplerden([
    eslestir(ORG, (a) => `${a.charAt(0).toLocaleUpperCase("tr") + a.slice(1)} hücrede hangi görevi yapar?`, (b) => `Hücrede "${b}" görevi yapan yapı hangisidir?`, (a, b) => `${a}: ${b}`),
    siniflandir({ "yalnızca bitki hücresinde bulunan yapı": ["kloroplast", "hücre duvarı"], "her iki hücrede de bulunan yapı": ["çekirdek", "hücre zarı", "sitoplazma", "mitokondri", "ribozom"] }, (g) => `Hangisi ${dir(g)}?`, (d, g) => `${d}: ${g}.`),
    () => { const S = ["hücre", "doku", "organ", "sistem", "organizma"]; const i = r(0, 3); return soru(`Canlının yapısındaki düzende "${S[i]}"den sonra hangisi gelir?`, S[i + 1].charAt(0).toLocaleUpperCase("tr") + S[i + 1].slice(1), S.filter((_, j) => j !== i + 1).map((x) => x.charAt(0).toLocaleUpperCase("tr") + x.slice(1)), `Sıralama: ${S.join(" → ")}`); }
  ]);

  U.f3k2 = tiplerden([
    siniflandir({ "uzun kemik": ["uyluk kemiği", "kol kemiği", "kaval kemiği"], "kısa kemik": ["el bileği kemikleri", "ayak bileği kemikleri", "omurlar"], "yassı kemik": ["kafatası kemikleri", "kürek kemiği", "kaburgalar", "göğüs kemiği"] }, (g) => `Hangisi ${dir(g)}?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" hangi kemik çeşidindendir?`),
    siniflandir({ "oynar eklem": ["diz", "dirsek", "omuz", "parmak eklemleri"], "yarı oynar eklem": ["omurlar arası eklem", "kaburga ile göğüs kemiği arası"], "oynamaz eklem": ["kafatası kemikleri arası"] }, (g) => `Hangisi ${g} örneğidir?`, (d, g) => `${d}: ${g}.`),
    eslestir([["iskelet kası", "isteğimizle çalışır, kol ve bacaklarda bulunur"], ["düz kas", "isteğimiz dışında çalışır, mide ve bağırsakta bulunur"], ["kalp kası", "isteğimiz dışında, hiç durmadan çalışır"], ["kıkırdak", "kulak kepçesi ve burun ucundaki esnek yapı"]], (a) => `${a.charAt(0).toLocaleUpperCase("tr") + a.slice(1)} için hangisi doğrudur?`, (b) => `"${b}" ifadesi hangisini tanımlar?`, (a, b) => `${a}: ${b}`),
    ifadeler(["Düzenli spor yapmak kemik ve kasları güçlendirir.", "Süt ürünleri kemik sağlığı için önemlidir.", "Dik oturmak omurga sağlığını korur.", "Kafatası beyni korur.", "Kaburgalar akciğer ve kalbi korur."], ["Ağır çantayı tek omuzda taşımak faydalıdır.", "Kalp kası isteğimizle çalışır.", "Kemiklerin hepsi aynı şekildedir.", "Kafatası kemikleri hareket edebilir.", "Mide kası isteğimizle çalışır."], "Destek ve hareket sistemi")
  ]);

  U.f4k1 = tiplerden([
    siniflandir({ "saydam": ["pencere camı", "temiz su", "hava", "şeffaf naylon", "gözlük camı"], "yarı saydam": ["buzlu cam", "tül perde", "yağlı kâğıt", "aydınger kâğıdı", "sisli hava"], "saydam olmayan (opak)": ["tahta", "demir", "karton", "taş", "alüminyum folyo"] }, (g) => `Hangisi ${g} bir maddedir?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" ışığı geçirme durumuna göre nasıl bir maddedir?`),
    siniflandir({ "doğal ışık kaynağı": ["Güneş", "yıldızlar", "ateş böceği", "yıldırım"], "yapay ışık kaynağı": ["ampul", "mum", "el feneri", "trafik lambası"], "ışık kaynağı olmayan": ["Ay", "ayna", "kitap", "masa"] }, (g) => `Hangisi ${dir(g)}?`, (d, g) => `${d}: ${g}.`)
  ]);

  U.f4k2 = tiplerden([
    () => { const d = pick(["yaklaştırılırsa", "uzaklaştırılırsa"]); return soru(`Işık kaynağı cisme ${d} tam gölgenin boyutu nasıl değişir?`, d === "yaklaştırılırsa" ? "Büyür" : "Küçülür", [d === "yaklaştırılırsa" ? "Küçülür" : "Büyür", "Değişmez", "Kaybolur"], "Kaynak cisme yaklaştıkça gölge büyür."); },
    () => { const d = pick(["yaklaştırılırsa", "uzaklaştırılırsa"]); return soru(`Cisim ekrana ${d} tam gölgenin boyutu nasıl değişir? (Kaynak ve ekran sabit)`, d === "yaklaştırılırsa" ? "Küçülür" : "Büyür", [d === "yaklaştırılırsa" ? "Büyür" : "Küçülür", "Değişmez", "Kaybolur"], "Cisim ekrana yaklaştıkça gölge küçülür (kaynaktan uzaklaşır)."); },
    () => { const c = pick(["kırmızı top", "mavi kutu", "sarı oyuncak", "yeşil kitap"]); return soru(`Beyaz ışıkla aydınlatılan bir ${c} ekranda gölge oluşturuyor. Gölge ne renktir?`, "Karanlık (siyah)", [c.split(" ")[0].charAt(0).toLocaleUpperCase("tr") + c.split(" ")[0].slice(1), "Beyaz", "Gri ve renkli"], "Gölge her zaman karanlıktır."); },
    ifadeler(["Gölge ışığın doğrusal yayıldığını gösterir.", "Saydam olmayan cisimler gölge oluşturur.", "Gölgenin şekli cismin şekline benzer.", "Öğle vakti gölgemiz kısadır.", "Tam gölge ışık almayan karanlık bölgedir."], ["Saydam cisimlerin tam gölgesi oluşur.", "Gölgenin rengi cismin rengindedir.", "Gölge oluşması için ekran gerekmez.", "Gölgenin boyu gün içinde hiç değişmez.", "Işık kaynağı olmadan gölge oluşur."], "Tam gölge")
  ]);

  U.f5k1 = tiplerden([
    siniflandir({ "katı": ["belirli bir şekli ve hacmi vardır", "tanecikleri yalnızca titreşir", "tanecikleri birbirine en yakındır"], "sıvı": ["bulunduğu kabın şeklini alır ama hacmi değişmez", "tanecikleri birbiri üzerinden kayar", "akışkandır, hacmi bellidir"], "gaz": ["bulunduğu kabı tamamen doldurur", "tanecikleri arasındaki boşluk en fazladır", "kolayca sıkıştırılabilir"] }, (g) => `Hangisi ${g} hâldeki maddelerin özelliğidir?`, (d, g) => `${g.charAt(0).toLocaleUpperCase("tr") + g.slice(1)}: ${d}.`, (d) => `"${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)}" özelliği hangi hâle aittir?`),
    siniflandir({ "katı": ["buz", "demir", "taş", "tuz", "tahta"], "sıvı": ["süt", "zeytinyağı", "su", "meyve suyu", "sirke"], "gaz": ["oksijen", "su buharı", "karbondioksit", "hava", "doğal gaz"] }, (g) => `Hangisi oda sıcaklığında ${g} hâldedir?`, (d, g) => `${d}: ${g}.`)
  ]);

  U.f5k2 = tiplerden([
    () => { const a = r(10, 40), b = r(a + 10, 90); return soru(`${b} °C su ile ${a} °C su karıştırılıyor. Karışımın sıcaklığı hangisi olabilir?`, `${r(a + 2, b - 2)} °C`, [`${b + r(3, 15)} °C`, `${Math.max(0, a - r(3, 9))} °C`, `${a + b} °C`], "Son sıcaklık iki sıcaklığın arasındadır."); },
    siniflandir({ "ısı": ["bir enerji türüdür", "birimi joule veya kaloridir", "kalorimetre kabı ile ölçülür", "sıcak maddeden soğuk maddeye akar"], "sıcaklık": ["termometre ile ölçülür", "birimi santigrat derecedir (°C)", "maddenin ne kadar sıcak ya da soğuk olduğunu gösterir", "bir ölçüm değeridir, enerji değildir"] }, (g) => `Hangisi ${g} için doğrudur?`, (d, g) => `${g.charAt(0).toLocaleUpperCase("tr") + g.slice(1)}: ${d}.`),
    () => { const [s, k] = pick([["sıcak çay", "metal kaşık"], ["sıcak çorba", "soğuk tabak"], ["el", "buz küpü"], ["kalorifer", "soğuk oda havası"]]); return soru(`${s} ile ${k} arasında ısı nasıl akar?`, `${s.charAt(0).toLocaleUpperCase("tr") + s.slice(1)} → ${k}`, [`${k.charAt(0).toLocaleUpperCase("tr") + k.slice(1)} → ${s}`, "Isı akışı olmaz", "Her ikisi de ısı alır"], "Isı sıcaktan soğuğa akar."); }
  ]);

  const HAL = [["erime", "katı → sıvı", "ısı alır", "güneşte eriyen dondurma"], ["donma", "sıvı → katı", "ısı verir", "buzlukta suyun buza dönüşmesi"], ["buharlaşma", "sıvı → gaz", "ısı alır", "ıslak çamaşırların kuruması"], ["yoğuşma", "gaz → sıvı", "ısı verir", "soğuk bardağın dışında su damlaları oluşması"], ["süblimleşme", "katı → gaz", "ısı alır", "naftalinin zamanla küçülmesi"], ["kırağılaşma", "gaz → katı", "ısı verir", "soğuk sabahlarda bitkilerde kırağı oluşması"]];
  U.f5k3 = tiplerden([
    () => { const h = pick(HAL); return soru(`"${h[3].charAt(0).toLocaleUpperCase("tr") + h[3].slice(1)}" hangi hâl değişimine örnektir?`, h[0].charAt(0).toLocaleUpperCase("tr") + h[0].slice(1), HAL.filter((x) => x !== h).map((x) => x[0].charAt(0).toLocaleUpperCase("tr") + x[0].slice(1)), `${h[0]}: ${h[1]}.`); },
    () => { const h = pick(HAL); return soru(`${h[1]} geçişine ne ad verilir?`, h[0].charAt(0).toLocaleUpperCase("tr") + h[0].slice(1), HAL.filter((x) => x !== h).map((x) => x[0].charAt(0).toLocaleUpperCase("tr") + x[0].slice(1)), `${h[1]}: ${h[0]}.`); },
    siniflandir({ "ısı alarak": HAL.filter((x) => x[2] === "ısı alır").map((x) => x[0]), "ısı vererek": HAL.filter((x) => x[2] === "ısı verir").map((x) => x[0]) }, (g) => `Hangisi ${g} gerçekleşir?`, (d, g) => `${d} ${g} gerçekleşir.`)
  ]);

  U.f5k4 = tiplerden([
    siniflandir({ "ısıyı iyi ileten": ["bakır", "alüminyum", "demir", "gümüş", "çelik"], "ısı yalıtkanı": ["tahta", "plastik", "cam yünü", "strafor", "yün", "mantar"] }, (g) => `Hangisi ${g} bir maddedir?`, (d, g) => `${d}: ${g}.`),
    ifadeler(["Binaların mantolanması ısı yalıtımı sağlar.", "Çift camlı pencereler ısı kaybını azaltır.", "Termos içindekinin sıcaklığını uzun süre korur.", "Tencere sapları yalıtkan maddeden yapılır.", "Isı yalıtımı yakıt tasarrufu sağlar.", "Metal kaşık sıcak çayda çabuk ısınır."], ["Tencere sapları bakırdan yapılmalıdır.", "Isı yalıtımı enerji israfına yol açar.", "Tahta ısıyı metalden daha iyi iletir.", "Tek camlı pencereler ısıyı daha iyi korur.", "Strafor iyi bir ısı iletkenidir.", "Kışın ince giyinmek ısı kaybını azaltır."], "Isı iletimi ve yalıtım")
  ]);

  U.f6k1 = tiplerden([
    eslestir([["pil", "devreye elektrik enerjisi sağlar"], ["ampul", "elektrik enerjisini ışık enerjisine dönüştürür"], ["bağlantı kablosu", "elektriği devre elemanları arasında iletir"], ["anahtar", "devreyi açıp kapatır"], ["duy", "ampulü devreye bağlamayı kolaylaştırır"]], (a) => `Devredeki ${a} hangi görevi yapar?`, (b) => `Devrede hangi eleman "${b}"?`, (a, b) => `${a}: ${b}`),
    siniflandir({ "sembolü olan": ["pil", "ampul", "anahtar", "bağlantı kablosu"], "sembolü olmayan": ["duy", "pil yatağı"] }, (g) => `Hangisi devre şemasında ${g} bir elemandır?`, (d, g) => `${d}: ${g}.`),
    () => { const a = pick(["açık", "kapalı"]); return soru(`Basit bir devrede anahtar ${a} ise ampul ne olur?`, a === "kapalı" ? "Yanar" : "Yanmaz", [a === "kapalı" ? "Yanmaz" : "Yanar", "Patlar", "Daha parlak yanar"], a === "kapalı" ? "Devre tamamlanır." : "Devre kesilir."); }
  ]);

  U.f6k2 = tiplerden([
    () => { const p1 = r(1, 3), p2 = p1 + r(1, 2), a = r(1, 2); return soru(`Birinci devrede ${p1} pil ve ${a} ampul, ikinci devrede ${p2} pil ve ${a} ampul vardır. Hangisi doğrudur? (Pil ve ampuller özdeş)`, "İkinci devredeki ampuller daha parlaktır.", ["Birinci devredeki ampuller daha parlaktır.", "Parlaklıklar eşittir.", "İkinci devrede ampuller yanmaz."], "Pil sayısı arttıkça parlaklık artar."); },
    () => { const p = r(1, 3), a1 = r(1, 2), a2 = a1 + r(1, 2); return soru(`Birinci devrede ${p} pil ve ${a1} ampul, ikinci devrede ${p} pil ve seri bağlı ${a2} ampul vardır. Hangisi doğrudur? (Pil ve ampuller özdeş)`, "Birinci devredeki ampuller daha parlaktır.", ["İkinci devredeki ampuller daha parlaktır.", "Parlaklıklar eşittir.", "Birinci devrede ampuller yanmaz."], "Ampul sayısı arttıkça her bir ampulün parlaklığı azalır."); },
    () => { const [b, s] = pick([["pil sayısı", "ampul sayısı"], ["ampul sayısı", "pil sayısı"]]); return soru(`"${b.charAt(0).toLocaleUpperCase("tr") + b.slice(1)} ampul parlaklığını etkiler mi?" sorusunu araştıran deneyde hangisi sabit tutulmalıdır?`, s.charAt(0).toLocaleUpperCase("tr") + s.slice(1), [b.charAt(0).toLocaleUpperCase("tr") + b.slice(1), "Ampul parlaklığı", "Hiçbiri"], "Yalnızca incelenen değişken değiştirilir, diğerleri sabit tutulur."); }
  ]);

  U.f7k1 = tiplerden([
    siniflandir({ "kâğıt-karton kutusuna": ["gazete", "karton koli", "defter", "dergi"], "cam kutusuna": ["cam şişe", "kavanoz", "kırık bardak"], "plastik kutusuna": ["pet şişe", "deterjan kutusu", "plastik poşet"], "metal kutusuna": ["konserve kutusu", "içecek kutusu", "metal kapak"], "atık pil kutusuna": ["kalem pil", "saat pili"] }, (g) => `Hangisi ${g} atılmalıdır?`, (d, g) => `${d} → ${g}.`, (d) => `"${d}" hangi geri dönüşüm kutusuna atılmalıdır?`),
    () => { const S = ["önleme", "azaltma", "yeniden kullanım", "geri dönüşüm", "geri kazanım", "uzaklaştırma"]; const i = r(0, 4); return soru(`Sıfır atık hiyerarşisinde "${S[i]}" basamağından sonra hangisi gelir?`, S[i + 1].charAt(0).toLocaleUpperCase("tr") + S[i + 1].slice(1), S.filter((_, j) => j !== i + 1).map((x) => x.charAt(0).toLocaleUpperCase("tr") + x.slice(1)), `Sıra: ${S.join(" → ")}`); },
    siniflandir({ "ileri dönüşüm": ["eski kot pantolondan çanta dikmek", "kavanozdan kalemlik yapmak", "tahta kasadan kitaplık yapmak"], "yeniden kullanım": ["cam şişeyi yıkayıp tekrar su doldurmak", "bez çantayı her alışverişte kullanmak", "eski kıyafeti kardeşe vermek"], "kompost": ["meyve kabuklarını toprağa gübre yapmak", "sebze artıklarını kompost kutusunda çürütmek"] }, (g) => `Hangisi "${g}" örneğidir?`, (d, g) => `${d}: ${g}.`)
  ]);
})();
