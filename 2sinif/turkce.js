// 2. Sınıf Türkçe — Maarif Modeli temaları (MEB 2026-2027 ders kitabı); beceri alanlarına göre oyunlar
(function () {
  const { r, pick, karistir, sec, secim, dy, grupla, eslestir, sirala, tiplerden, bankadan, buyuk } = O;

  // ---------- Harf, hece ----------
  const HECE = [["ke", "le", "bek"], ["o", "kul"], ["ar", "ka", "daş"], ["ki", "tap"], ["öğ", "ret", "men"], ["bah", "çe"], ["çi", "çek"], ["kar", "de", "şim"], ["bi", "sik", "let"], ["sa", "mi", "mi", "yet"], ["dü", "rüst", "lük"], ["yar", "dım", "laş", "ma"], ["sev", "gi"], ["say", "gı"], ["pa", "pat", "ya"], ["kap", "lum", "ba", "ğa"], ["te", "le", "viz", "yon"], ["ö", "dev"], ["de", "niz"], ["gü", "neş"], ["yıl", "dız"], ["kum", "ba", "ra"], ["sin", "cap"], ["fi", "dan"], ["mer", "di", "ven"], ["pen", "ce", "re"], ["kır", "mı", "zı"], ["tav", "şan"], ["kü", "tüp", "ha", "ne"], ["ö", "zel"], ["kar", "puz"], ["sa", "lın", "cak"], ["ba", "lon"], ["ay", "va"], ["ö", "rüm", "cek"], ["bil", "gi", "sa", "yar"], ["is", "tas", "yon"], ["mut", "lu", "luk"], ["ar", "ka", "daş", "lık"], ["or", "man"]];
  const SESLI = ["a", "e", "ı", "i", "o", "ö", "u", "ü"], SESSIZ = ["b", "c", "ç", "d", "f", "g", "ğ", "h", "j", "k", "l", "m", "n", "p", "r", "s", "ş", "t", "v", "y", "z"];
  const SAYI_AD = ["", "bir", "iki", "üç", "dört", "beş"];
  const harfHece = tiplerden([
    [4, () => { const h = pick(HECE); return sirala("Heceleri sırayla birleştirerek sözcüğü oluştur.", h, h.join("-") + " → " + h.join(""), ""); }],
    [3, () => { const h = pick(HECE), n = h.length; return secim(`"${h.join("")}" sözcüğü kaç hecelidir?`, `${n} heceli`, [1, 2, 3, 4, 5].filter((x) => x !== n).map((x) => `${x} heceli`), `Heceleri: ${h.join(" - ")}`); }],
    [2, () => { const h = pick(HECE.filter((x) => x.length >= 2)); const d = h.join("-"); const yan = [h.join("").slice(0, 2) + "-" + h.join("").slice(2), h.join("").slice(0, 1) + "-" + h.join("").slice(1)].filter((x) => x !== d); return secim(`"${h.join("")}" sözcüğü nasıl hecelenir?`, d, yan, "Her hecede bir sesli harf bulunur."); }],
    [3, () => grupla("Harfleri sesli ve sessiz kutularına ayır.", ["Sesli harf", "Sessiz harf"], karistir([...sec(SESLI, 3).map((x) => [x, 0]), ...sec(SESSIZ, 3).map((x) => [x, 1])]), "Sesli harfler: a, e, ı, i, o, ö, u, ü")],
    [2, () => { const d = pick(SESLI); return secim("Hangisi sesli harftir?", d, sec(SESSIZ, 2), "Alfabemizde 8 sesli harf vardır."); }],
    [2, () => { const s = pick(HECE).join(""); const n = [...s].filter((c) => SESLI.includes(c)).length; return secim(`"${s}" sözcüğünde kaç sesli harf vardır?`, n, [n + 1, n - 1 > 0 ? n - 1 : n + 2], `Sesli harfler: ${[...s].filter((c) => SESLI.includes(c)).join(", ")}`); }],
    [1, () => dy(pick(["Alfabemizde 29 harf vardır.", "Her hecede bir sesli harf bulunur.", "Sözcükler hecelerden oluşur."]), true)],
    [1, () => { const y = pick([["Alfabemizde 8 sessiz harf vardır.", "Alfabemizde 8 sesli, 21 sessiz harf vardır."], ["Bir hecede iki sesli harf bulunur.", "Her hecede yalnız bir sesli harf bulunur."]]); return dy(y[0], false, y[1]); }]
  ]);

  // ---------- Eş, zıt, eş sesli ----------
  const ES = [["siyah", "kara"], ["kırmızı", "al"], ["beyaz", "ak"], ["yaşlı", "ihtiyar"], ["cevap", "yanıt"], ["öğrenci", "talebe"], ["okul", "mektep"], ["hediye", "armağan"], ["sınav", "imtihan"], ["doktor", "hekim"], ["akıllı", "zeki"], ["kolay", "basit"], ["hızlı", "süratli"], ["misafir", "konuk"], ["sözcük", "kelime"], ["yıl", "sene"], ["ad", "isim"], ["şehir", "kent"], ["rüya", "düş"], ["anı", "hatıra"], ["fakir", "yoksul"], ["kuvvetli", "güçlü"], ["ödül", "mükâfat"], ["millet", "ulus"], ["vatan", "yurt"], ["cümle", "tümce"], ["soru", "sual"], ["özgür", "hür"]];
  const ES_CUMLE = [["Bu sene çok kitap okudum.", "sene", "yıl"], ["Sınıfımıza bir konuk geldi.", "konuk", "misafir"], ["Öğretmenim sorumu yanıtladı, verdiği yanıt çok güzeldi.", "yanıt", "cevap"], ["Annem bana güzel bir armağan aldı.", "armağan", "hediye"], ["Kara bulutlar gökyüzünü kapladı.", "kara", "siyah"], ["Dedem gençken bu mektepte okumuş.", "mektep", "okul"], ["Yarın matematik sınavımız var.", "sınav", "imtihan"], ["Hasta olunca hekime gittik.", "hekim", "doktor"], ["Bu kent çok kalabalık.", "kent", "şehir"], ["Kardeşim çok zeki bir çocuk.", "zeki", "akıllı"]];
  const esAnlam = tiplerden([
    [5, bankadan({ ciftler: ES, ciftSor: (a) => `"${a}" sözcüğünün eş anlamlısı hangisidir?`, ciftSor2: (b) => `"${b}" sözcüğünün eş anlamlısı hangisidir?`, ciftBaslik: "Eş anlamlı sözcükleri eşleştir." })],
    [3, () => { const c = pick(ES_CUMLE); return secim(`"${c[0]}" cümlesindeki "${c[1]}" sözcüğünün eş anlamlısı hangisidir?`, c[2], ES.map((x) => x[0]).filter((x) => x !== c[2]), `${c[1]} = ${c[2]}`); }],
    [1, () => dy("Eş anlamlı sözcüklerin yazılışları farklı, anlamları aynıdır.", true)]
  ]);

  const ZIT = [["büyük", "küçük"], ["uzun", "kısa"], ["sıcak", "soğuk"], ["açık", "kapalı"], ["iyi", "kötü"], ["güzel", "çirkin"], ["hızlı", "yavaş"], ["kolay", "zor"], ["yeni", "eski"], ["ağır", "hafif"], ["gece", "gündüz"], ["ön", "arka"], ["alt", "üst"], ["içeri", "dışarı"], ["gelmek", "gitmek"], ["ağlamak", "gülmek"], ["kalın", "ince"], ["dolu", "boş"], ["temiz", "kirli"], ["erken", "geç"], ["sevinçli", "üzgün"], ["tatlı", "acı"], ["yakın", "uzak"], ["genç", "yaşlı"], ["cesur", "korkak"], ["uyumak", "uyanmak"], ["almak", "vermek"], ["girmek", "çıkmak"], ["aşağı", "yukarı"], ["kazanmak", "kaybetmek"]];
  const ZIT_CUMLE = [["Bu çanta çok ağır.", "ağır"], ["Hava bugün çok sıcak.", "sıcak"], ["Kaplumbağa yavaş yürür.", "yavaş"], ["Bardak su ile dolu.", "dolu"], ["Kapı açık kalmış.", "açık"], ["Erken yatıp erken kalktım.", "erken"], ["Yeni ayakkabılarımı giydim.", "yeni"], ["Okulumuz eve çok yakın.", "yakın"], ["Ellerim temiz.", "temiz"], ["Bu soru çok kolay.", "kolay"]];
  const zitAnlam = tiplerden([
    [5, bankadan({ ciftler: ZIT, ciftSor: (a) => `"${a}" sözcüğünün zıt anlamlısı hangisidir?`, ciftSor2: (b) => `"${b}" sözcüğünün zıt anlamlısı hangisidir?`, ciftBaslik: "Zıt anlamlı sözcükleri eşleştir." })],
    [3, () => { const c = pick(ZIT_CUMLE); const cf = ZIT.find((x) => x.includes(c[1])); const z = cf[0] === c[1] ? cf[1] : cf[0]; return secim(`"${c[0]}" cümlesindeki "${c[1]}" sözcüğünün zıt anlamlısı hangisidir?`, z, ZIT.flat().filter((x) => x !== z && x !== c[1]), `${c[1]} ↔ ${z}`); }],
    [2, () => { const [a, b] = pick(ZIT); const e = pick(ES); return secim("Hangi sözcük çifti zıt anlamlıdır?", `${a} - ${b}`, [`${e[0]} - ${e[1]}`, ...sec(ES.filter((x) => x !== e), 1).map((x) => `${x[0]} - ${x[1]}`)], "Zıt anlamlı sözcükler birbirinin tersini anlatır."); }]
  ]);

  // ---------- Cümle ----------
  const CUMLE = ["Kuşlar ağaçta neşeyle ötüyordu.", "Sonbaharda yapraklar sararır.", "Arılar çiçeklerden bal yapar.", "Annem bahçeye domates ekti.", "Yağmurdan sonra gökkuşağı çıktı.", "Kar yağınca kardan adam yaptık.", "Kedim pencerenin önünde uyuyor.", "Ormanda büyük bir sincap gördük.", "Dedem bana masal anlattı.", "Her sabah kahvaltı yaparım.", "Kütüphaneden yeni bir kitap aldım.", "Kaplumbağa yavaş yavaş yürüdü.", "Güneş doğudan doğar.", "Denizde yunuslar yüzüyordu.", "Arkadaşımla parkta oynadık.", "Öğretmenimiz bize bir şarkı öğretti.", "Kış gelince kuşlar göç eder.", "Çiçekleri her gün sularım.", "Babam bisikletimi tamir etti.", "Bulutlar gökyüzünde süzülüyordu."];
  const cumle = tiplerden([
    [5, () => { const c = pick(CUMLE); return sirala("Sözcükleri sıraya dizerek anlamlı bir cümle kur.", c.split(" ")); }],
    [3, () => { const c = pick(CUMLE), w = c.replace(".", "").split(" "); const kr = (a) => buyuk(a.map((x) => x.toLocaleLowerCase("tr")).join(" ")) + "."; const k1 = kr(karistir(w)), k2 = kr(w.slice().reverse()); return secim("Hangisi anlamlı ve kurallı bir cümledir?", c, [k1, k2].filter((x) => x.toLocaleLowerCase("tr") !== c.toLocaleLowerCase("tr")), "Kurallı cümlede yüklem (iş bildiren sözcük) genellikle sondadır."); }],
    [2, () => { const c = pick(CUMLE); const n = c.split(" ").length; return secim(`"${c}" cümlesi kaç sözcükten oluşur?`, n, [n + 1, n - 1], c.split(" ").join(" / ")); }],
    [1, () => dy(pick(["Cümleler büyük harfle başlar.", "Cümlenin sonuna uygun noktalama işareti konur.", "Sözcükler bir araya gelerek cümleyi oluşturur."]), true)]
  ]);

  const ALFABE = "a b c ç d e f g ğ h ı i j k l m n o ö p r s ş t u ü v y z".split(" ");
  const SOZ = ["armut", "balık", "ceviz", "çilek", "deniz", "elma", "fare", "gemi", "hamak", "ırmak", "inek", "jale", "kalem", "limon", "masa", "nar", "okul", "ördek", "palto", "renk", "silgi", "şeker", "top", "uçak", "üzüm", "vazo", "yaprak", "zeytin", "kitap", "kedi", "kuş", "bebek", "bulut", "sabun", "saat", "mavi", "maymun"];
  const trSirala = (a) => a.slice().sort((x, y) => x.localeCompare(y, "tr"));
  const alfabe = tiplerden([
    [4, () => { const w = []; for (const s of karistir(SOZ)) { if (w.length < 4 && !w.some((x) => x[0] === s[0])) w.push(s); } return sirala("Sözcükleri alfabetik sıraya diz.", trSirala(w), "", ", "); }],
    [2, () => { const harf = pick(["k", "s", "m", "b"]); const w = sec(SOZ.filter((x) => x[0] === harf), 3); if (w.length < 3) return null; return sirala("Bu sözcüklerin ilk harfleri aynı. İkinci harflerine bakarak alfabetik sıraya diz.", trSirala(w), "", ", "); }],
    [3, () => { const i = r(0, ALFABE.length - 2), sonra = Math.random() < 0.5; if (!sonra && i === 0) return null; const d = sonra ? ALFABE[i + 1] : ALFABE[i - 1]; return secim(`Alfabede "${buyuk(ALFABE[i])}" harfinden hemen ${sonra ? "sonra" : "önce"} hangi harf gelir?`, buyuk(d), [ALFABE[i + (sonra ? 2 : 1)], ALFABE[(i + 5) % 29]].filter(Boolean).map(buyuk), ALFABE.slice(Math.max(0, i - 2), i + 3).join(" ").toLocaleUpperCase("tr")); }],
    [2, () => { const w = sec(SOZ, 3); const d = trSirala(w)[0]; return secim("Hangi sözcük sözlükte en önce yer alır?", d, w.filter((x) => x !== d), "Sözlükte sözcükler alfabetik sıradadır."); }],
    [1, () => secim("Alfabemizde kaç harf vardır?", "29", ["26", "21"], "8 sesli + 21 sessiz = 29 harf")]
  ]);

  // ---------- Noktalama ----------
  const NOKTA = [
    ["Bugün hava çok güzel⬜", ".", "Bildiren cümlelerin sonuna nokta konur."], ["Okulumuz saat dokuzda başlar⬜", ".", "Bildiren cümlelerin sonuna nokta konur."], ["Kardeşim resim yapmayı sever⬜", ".", "Bildiren cümle"],
    ["Bu kitabı kim yazdı⬜", "?", "Soru soran cümlelerin sonuna soru işareti konur."], ["Yarın parka gelecek misin⬜", "?", "Soru cümlesi"], ["En sevdiğin renk hangisi⬜", "?", "Soru cümlesi"], ["Nereye gidiyorsun⬜", "?", "Soru cümlesi"],
    ["Eyvah, süt taştı⬜", "!", "Heyecan, korku, şaşkınlık bildiren cümlelerin sonuna ünlem konur."], ["Yaşasın, kar yağıyor⬜", "!", "Sevinç bildiren cümle"], ["İmdat, yardım edin⬜", "!", "Yardım isteme"], ["Ne güzel bir gün⬜", "!", "Hayranlık bildiren cümle"],
    ["Elma⬜ armut ve muz aldık.", ",", "Sıralanan sözcükler virgülle ayrılır."], ["Sarı⬜ kırmızı ve mavi boyalarım var.", ",", "Sıralanan sözcükler virgülle ayrılır."], ["Pazartesi⬜ salı ve çarşamba okula gideriz.", ",", "Sıralanan sözcükler virgülle ayrılır."],
    ["Yazın Antalya⬜ya gittik.", "'", "Özel adlara gelen ekler kesme işaretiyle ayrılır."], ["Ayşe⬜nin çantası mavi.", "'", "Özel adlara gelen ekler kesme işaretiyle ayrılır."], ["Atatürk⬜ü çok seviyoruz.", "'", "Özel adlara gelen ekler kesme işaretiyle ayrılır."]
  ];
  const ISARET_AD = { ".": "Nokta (.)", "?": "Soru işareti (?)", "!": "Ünlem (!)", ",": "Virgül (,)", "'": "Kesme işareti (')" };
  const noktalama = tiplerden([
    [6, () => { const n = pick(NOKTA); return secim(`Kutuya hangi işaret gelmelidir?  "${n[0]}"`, ISARET_AD[n[1]], Object.keys(ISARET_AD).filter((x) => x !== n[1]).map((x) => ISARET_AD[x]), n[2], { balonYok: true }); }],
    [3, () => { const g = sec([0, 1, 2], 2).map((i) => [".", "?", "!"][i]); const og = []; g.forEach((isaret, gi) => sec(NOKTA.filter((x) => x[1] === isaret), 2).forEach((x) => og.push([x[0].replace("⬜", ""), gi]))); return grupla("Cümlelerin sonuna hangi işaret gelir? Kutulara yerleştir.", g.map((x) => ISARET_AD[x]), karistir(og)); }],
    [2, () => pick([() => secim("Soru soran cümlenin sonuna hangi işaret konur?", "Soru işareti (?)", ["Nokta (.)", "Virgül (,)"], ""), () => secim("Sevinç ve şaşkınlık bildiren cümlenin sonuna hangi işaret konur?", "Ünlem (!)", ["Virgül (,)", "Kesme işareti (')"], ""), () => secim("Özel adlara gelen ekleri ayırmak için hangi işaret kullanılır?", "Kesme işareti (')", ["Ünlem (!)", "Nokta (.)"], ""), () => secim("Sıralanan sözcükleri ayırmak için hangi işaret kullanılır?", "Virgül (,)", ["Soru işareti (?)", "Ünlem (!)"], "")])()]
  ]);

  // ---------- Büyük harf ----------
  const BH = [["Ankara", "ankara"], ["Ayşe", "ayşe"], ["Türkiye", "türkiye"], ["Karadeniz", "karadeniz"], ["Pamuk", "pamuk"], ["Atatürk", "atatürk"], ["Van Gölü", "van gölü"], ["Ağrı Dağı", "ağrı dağı"], ["İstanbul", "istanbul"], ["Türkçe", "türkçe"]];
  const BH_C = [["{} başkentimizdir.", 0], ["Kardeşimin adı {}.", 1], ["{} çok güzel bir ülke.", 2], ["Yazın {} sahiline gittik.", 3], ["Kedimizin adı {}.", 4], ["{} Cumhuriyetimizin kurucusudur.", 5], ["{} çok büyük bir göldür.", 6], ["{} ülkemizin en yüksek dağıdır.", 7], ["Dedem {} şehrinde yaşıyor.", 8], ["Okulda {} dersini çok seviyorum.", 9]];
  const buyukHarf = tiplerden([
    [5, () => { const [c, i] = pick(BH_C); const d = c.replace("{}", BH[i][0]); const y1 = c.replace("{}", BH[i][1]); const y2 = d.charAt(0).toLocaleLowerCase("tr") + d.slice(1); const y3 = c.replace("{}", BH[i][0].toLocaleUpperCase("tr")); const yan = [y1, y2, y3].filter((x) => x !== d); return secim("Hangi cümlenin yazımı doğrudur?", buyuk(d), yan.map((x, k) => k === 1 ? x : buyuk(x)), `${BH[i][0]} özel ad olduğu için büyük harfle başlar.`, { balonYok: true }); }],
    [3, () => grupla("Hangileri büyük harfle başlar?", ["Büyük harfle başlar", "Küçük harfle başlar"], karistir([...sec(["Mehmet", "İzmir", "Fırat Nehri", "Karabaş (köpek adı)", "Türkiye", "Ali"], 3).map((x) => [x, 0]), ...sec(["kalem", "nehir", "köpek", "şehir", "ülke", "çocuk"], 3).map((x) => [x, 1])]), "Kişi, şehir, ülke, hayvan adları gibi özel adlar büyük harfle başlar.")],
    [2, () => dy(pick(["Cümleler büyük harfle başlar.", "Kişi adları büyük harfle başlar.", "Şehir adları büyük harfle başlar.", "Evcil hayvanlara verilen adlar büyük harfle başlar."]), true)],
    [1, () => { const y = pick([["Ülke adları küçük harfle başlar.", "Ülke adları büyük harfle başlar."], ["Cümle küçük harfle başlar.", "Cümleler büyük harfle başlar."]]); return dy(y[0], false, y[1]); }]
  ]);

  // ---------- Sebep sonuç, gerçek hayal ----------
  const SS = [["Yağmur yağdı", "yerler ıslandı"], ["Çok koştuğu için", "yoruldu"], ["Dişlerini fırçalamadığı için", "dişi çürüdü"], ["Kar yağdığı için", "okullar tatil oldu"], ["Erken kalktığı için", "servise yetişti"], ["Çiçeği sulamadığı için", "çiçek kurudu"], ["Ders çalıştığı için", "sınavı iyi geçti"], ["Hava soğuk olduğu için", "montunu giydi"], ["Güneş açınca", "kar eridi"], ["Buzdolabına koymadığı için", "süt bozuldu"], ["Ödevini bitirdiği için", "parka gitti"], ["Yere su döküldüğü için", "zemin kaydı"]];
  const ssCumle = (s, n) => s + (/için$|[nm]ca$|[nm]ce$/.test(s) ? " " : ", ") + n + ".";
  const sebepSonuc = tiplerden([
    [4, () => { const [s, n] = pick(SS); const c = ssCumle(s, n); return secim(`"${c}" cümlesinde sebep hangisidir?`, buyuk(s), [buyuk(n), buyuk(pick(SS.filter((x) => x[0] !== s))[1])], `Sebep: ${s}  → Sonuç: ${n}`); }],
    [4, () => { const [s, n] = pick(SS); const c = ssCumle(s, n); return secim(`"${c}" cümlesinde sonuç hangisidir?`, buyuk(n), [buyuk(s), buyuk(pick(SS.filter((x) => x[0] !== s))[1])], `Sebep: ${s} → Sonuç: ${n}`); }],
    [3, () => eslestir("Sebebi sonucuyla eşleştir.", sec(SS, 4).map(([a, b]) => [a, b]))],
    [1, () => dy("Bir olayın neden olduğunu anlatan bölüme sebep denir.", true)]
  ]);
  const GH = { "Gerçek": ["Kuşlar gökyüzünde uçar.", "Arılar bal yapar.", "Kışın kar yağar.", "Kediler süt içer.", "Balıklar suda yaşar.", "Güneş doğudan doğar.", "Bebekler zamanla büyür.", "Ağaçlar sonbaharda yaprak döker."], "Hayal ürünü": ["Kedi kitap okudu.", "Ağaç ayağa kalkıp yürüdü.", "Bulutlar şarkı söyledi.", "Fil bisiklete binip okula gitti.", "Ay bize el salladı.", "Tavşan telefonla konuştu.", "Masa yorulup uyudu.", "Balık ağaca tırmandı."] };
  const gercekHayal = tiplerden([
    [5, bankadan({ gruplar: GH, gruplaSoru: "Cümleleri gerçek ve hayal ürünü olarak ayır.", grupSor: (g) => g === "Gerçek" ? "Hangisi gerçek hayatta olabilir?" : "Hangisi hayal ürünüdür?" })],
    [2, () => { const g = pick(Object.keys(GH)), c = pick(GH[g]); return dy(`"${c}" cümlesi gerçek hayatta olabilir.`, g === "Gerçek", g === "Gerçek" ? "Bu gerçek bir olaydır." : "Bu bir hayal ürünüdür, gerçekte olamaz."); }],
    [1, () => secim("Masallarda ve fablarda hayvanların konuşması nasıl bir olaydır?", "Hayal ürünü", ["Gerçek", "Bilimsel"], "")]
  ]);

  const ANA = [
    { m: "Zeynep her akşam yatmadan önce çantasını hazırlar. Defterlerini, kalemini ve kitaplarını kontrol eder. Böylece sabah hiçbir şeyi unutmadan okula gider.", af: "Sorumluluklarımızı zamanında yerine getirmeliyiz.", b: "Hazırlıklı Zeynep", y: ["Okula geç kalmak eğlencelidir.", "Çanta ağır olmamalıdır."], yb: ["Kayıp Kalem", "Tatil Günü"] },
    { m: "Ali parkta yere atılmış çöpleri gördü. Hemen bir torba bulup çöpleri topladı. Arkadaşları da ona yardım etti. Kısa sürede park tertemiz oldu.", af: "Çevremizi temiz tutmak hepimizin görevidir.", b: "Temiz Park", y: ["Parkta oyun oynamak yasaktır.", "Çöpler parka atılmalıdır."], yb: ["Yağmurlu Gün", "Kayıp Top"] },
    { m: "Her çocuğun oyun oynama, eğitim alma ve sağlıklı yaşama hakkı vardır. Büyükler bu hakları korumakla sorumludur. Çocuklar da başkalarının haklarına saygı göstermelidir.", af: "Herkes haklara sahiptir ve başkalarının haklarına saygı göstermelidir.", b: "Çocuk Hakları", y: ["Sadece büyüklerin hakları vardır.", "Oyun oynamak gereksizdir."], yb: ["Büyük Sınav", "Kış Masalı"] },
    { m: "Mert sınıfta söz almak istediğinde parmak kaldırır. Arkadaşları konuşurken sözünü kesmez. Öğretmeni onu bu davranışı için takdir eder.", af: "Konuşurken başkalarına saygılı olmalıyız.", b: "Saygılı Mert", y: ["Sınıfta herkes aynı anda konuşmalıdır.", "Parmak kaldırmak gereksizdir."], yb: ["Mert'in Bisikleti", "Sessiz Orman"] },
    { m: "Ece'nin evinde herkesin bir görevi vardır. Babası bulaşıkları yıkar, annesi yemek yapar. Ece de odasını toplar ve çiçekleri sular. Böylece evdeki işler çabucak biter.", af: "Ailede görev paylaşımı işleri kolaylaştırır.", b: "Herkesin Bir Görevi Var", y: ["Ev işlerini sadece anneler yapmalıdır.", "Çiçekler sulanmamalıdır."], yb: ["Ece'nin Doğum Günü", "Uzay Yolculuğu"] },
    { m: "Kantinde sıra bekleyen öğrenciler arasına Can da katıldı. Önündekileri geçmeden sabırla sırasını bekledi. Sırası gelince kibarca istediğini söyledi ve teşekkür etti.", af: "Sıra beklemek başkalarının hakkına saygıdır.", b: "Kantin Sırası", y: ["Sıra beklemek zaman kaybıdır.", "Kantinde hiç alışveriş yapılmamalıdır."], yb: ["Can'ın Kedisi", "Yaz Tatili"] },
    { m: "Defne su içtikten sonra musluğu sıkıca kapattı. Dişlerini fırçalarken suyu boşa akıtmadı. Annesine de evdeki damlayan musluğu tamir ettirmesini söyledi.", af: "Suyu tasarruflu kullanmalıyız.", b: "Su Damlası Kadar Değerli", y: ["Su hiç bitmez, istediğimiz kadar harcarız.", "Musluklar hep açık kalmalıdır."], yb: ["Defne'nin Bisikleti", "Ormanda Bir Gün"] },
    { m: "Oyunda takımı kaybedince Ege önce üzüldü. Sonra rakip takımı tebrik etti ve el sıkıştı. Bir dahaki maça daha çok çalışarak hazırlanacağını söyledi.", af: "Kaybetmeyi de kazanmayı da centilmence karşılamalıyız.", b: "Centilmen Ege", y: ["Kaybedince oyunu bırakmalıyız.", "Rakibimizi tebrik etmemeliyiz."], yb: ["Ege'nin Doğum Günü", "Kayıp Anahtar"] },
    { m: "Selim'in sınıfında bir arkadaşı kolunu kırmıştı. Selim ona teneffüslerde çantasını taşıdı ve derste not almasına yardım etti. Arkadaşı iyileşince Selim'e kocaman sarıldı.", af: "Zor durumdaki arkadaşlarımıza yardım etmeliyiz.", b: "Gerçek Arkadaş", y: ["Herkes kendi işini kendisi yapmalıdır.", "Çanta taşımak zararlıdır."], yb: ["Selim ve Uzay", "Kırık Vazo"] },
    { m: "Burak kütüphaneden aldığı kitabı dikkatle okudu. Sayfalarını kıvırmadı, üzerine yazı yazmadı. Kitabı zamanında ve temiz bir şekilde geri getirdi.", af: "Ortak kullandığımız eşyaları özenle korumalıyız.", b: "Kitaba Özen", y: ["Kütüphane kitapları bizimdir, istediğimizi yaparız.", "Kitap okumak sıkıcıdır."], yb: ["Burak'ın Köpeği", "Yeni Okul"] }
  ];
  const anaFikir = tiplerden([
    [3, () => { const t = pick(ANA); return secim("Bu metnin ana fikri nedir?", t.af, t.y, "Ana fikir, yazarın metinde vermek istediği temel mesajdır.", { gorsel: `<div class="ifade" style="text-align:left;font-size:21px;font-weight:600;border-style:solid">${OYUN.esc(t.m)}</div>`, balonYok: true }); }],
    [3, () => { const t = pick(ANA); return secim("Bu metne en uygun başlık hangisidir?", t.b, t.yb, "Başlık metnin konusunu kısaca anlatmalıdır.", { gorsel: `<div class="ifade" style="text-align:left;font-size:21px;font-weight:600;border-style:solid">${OYUN.esc(t.m)}</div>`, balonYok: true }); }],
    [1, () => secim("Bir metinde yazarın vermek istediği temel mesaja ne denir?", "Ana fikir", ["Başlık", "Kahraman"], "")],
    [1, () => secim("Bir metnin konusunu kısaca anlatan ve en üste yazılan söze ne denir?", "Başlık", ["Ana fikir", "Paragraf"], "")]
  ]);

  // ---------- Okuduğunu anlama (2. sınıf: kısa metinler) ----------
  const METIN = [
    { m: "Elif bahçede küçük bir kedi gördü. Kedi çok acıkmıştı. Elif ona bir kap süt getirdi. Kedi sütü içti ve Elif'in ayağına sürtündü.", s: [["Elif bahçede ne gördü?", "Küçük bir kedi", ["Bir köpek", "Bir kuş"]], ["Kedi neden mutlu oldu?", "Elif ona süt verdiği için", ["Yağmur yağdığı için", "Topla oynadığı için"]], ["Elif nasıl bir çocuktur?", "Yardımsever", ["Tembel", "Korkak"]]] },
    { m: "Pazar günü Can ve babası parka gitti. Can bisikletine bindi. Babası onu arkasından tuttu. Can sonunda tek başına bisiklet sürmeyi öğrendi.", s: [["Can ve babası nereye gitti?", "Parka", ["Okula", "Markete"]], ["Can ne öğrendi?", "Bisiklet sürmeyi", ["Yüzmeyi", "Kitap okumayı"]], ["Hangi gün parka gittiler?", "Pazar", ["Pazartesi", "Cuma"]]] },
    { m: "Sınıfta herkes resim yapıyordu. Mert'in kırmızı boyası bitti. Yanındaki Ayşe kendi boyasını Mert'le paylaştı. Mert ona teşekkür etti.", s: [["Mert'in hangi boyası bitti?", "Kırmızı", ["Mavi", "Yeşil"]], ["Boyasını kim paylaştı?", "Ayşe", ["Öğretmen", "Can"]], ["Mert, Ayşe'ye ne dedi?", "Teşekkür etti", ["Kızdı", "Hiçbir şey demedi"]]] },
    { m: "Kış geldi, kar yağdı. Zeynep ile kardeşi kalın montlarını giydi. Bahçede kocaman bir kardan adam yaptılar. Burnuna bir havuç taktılar.", s: [["Hangi mevsimde oldu?", "Kış", ["Yaz", "İlkbahar"]], ["Çocuklar ne yaptı?", "Kardan adam", ["Kumdan kale", "Uçurtma"]], ["Kardan adamın burnu neydi?", "Havuç", ["Elma", "Taş"]]] },
    { m: "Ali her sabah erkenden kalkar. Yüzünü yıkar, kahvaltısını yapar. Sonra çantasını alıp okula gider. Ali hiç okula geç kalmaz.", s: [["Ali sabah ilk ne yapar?", "Yüzünü yıkar", ["Okula gider", "Oyun oynar"]], ["Ali okula ne zaman gider?", "Kahvaltıdan sonra", ["Akşam", "Öğlen"]], ["Ali nasıl bir öğrencidir?", "Dakik", ["Dağınık", "Tembel"]]] },
    { m: "Dedem köyde yaşıyor. Bahçesinde elma ve armut ağaçları var. Yazın dedemin yanına gidiyoruz. Ağaçlardan meyve toplamayı çok seviyorum.", s: [["Dede nerede yaşıyor?", "Köyde", ["Şehirde", "Deniz kenarında"]], ["Bahçede hangi ağaçlar var?", "Elma ve armut", ["Kiraz ve çilek", "Portakal ve limon"]], ["Dedeye ne zaman gidiyorlar?", "Yazın", ["Kışın", "Her gün"]]] },
    { m: "Okulumuzda kitap fuarı açıldı. Sınıfça fuarı gezdik. Ben uzayla ilgili bir kitap aldım. Akşam annemle birlikte kitabı okuduk.", s: [["Okulda ne açıldı?", "Kitap fuarı", ["Spor salonu", "Resim sergisi"]], ["Çocuk nasıl bir kitap aldı?", "Uzayla ilgili", ["Hayvanlarla ilgili", "Yemekle ilgili"]], ["Kitabı kimle okudu?", "Annesiyle", ["Öğretmeniyle", "Dedesiyle"]]] },
    { m: "Sabah gökyüzü bulutluydu. Öğlen yağmur başladı. Yağmur durunca güneş açtı ve gökyüzünde rengârenk bir gökkuşağı çıktı.", s: [["Öğlen ne oldu?", "Yağmur başladı", ["Kar yağdı", "Rüzgâr durdu"]], ["Yağmurdan sonra ne çıktı?", "Gökkuşağı", ["Ay", "Yıldızlar"]], ["Sabah gökyüzü nasıldı?", "Bulutlu", ["Yıldızlı", "Karanlık"]]] }
  ];
  const kutuMetin = (m) => `<div class="ifade" style="text-align:left;font-size:22px;font-weight:600;border-style:solid;line-height:1.6">${OYUN.esc(m)}</div>`;
  const besN = tiplerden([
    [6, () => { const t = pick(METIN), q = pick(t.s); return secim(q[0], q[1], q[2], "Cevap metnin içinde. Metni dikkatlice oku.", { gorsel: kutuMetin(t.m), balonYok: true, sesYok: true }); }],
    [2, () => { const T = [["Kim?", "Elif"], ["Nerede?", "Parkta"], ["Ne zaman?", "Dün akşam"], ["Nasıl?", "Hızlıca"], ["Neden?", "Yağmur yağdığı için"], ["Ne?", "Bir kitap"]]; const t = pick(T); return secim(`"${t[0]}" sorusunun cevabı hangisi olabilir?`, t[1], T.filter((x) => x !== t).map((x) => x[1]), ""); }],
    [1, () => eslestir("Soruyu cevabıyla eşleştir.", sec([["Kim?", "Ayşe"], ["Nerede?", "Okulda"], ["Ne zaman?", "Sabah"], ["Neden?", "Hasta olduğu için"], ["Nasıl?", "Yavaşça"]], 4))]
  ]);

  // ---------- Çoğul ekleri ----------
  const SOZCUK = ["kitap", "kalem", "çiçek", "ağaç", "kuş", "elma", "ev", "araba", "defter", "çocuk", "masa", "kedi", "okul", "bulut", "yıldız", "top", "göz", "balık", "kapı", "öğretmen", "silgi", "oyuncak", "dağ", "deniz", "kitaplık", "uçak", "gemi", "kardeş"];
  const cogulEk = (w) => /[eiöü][^aeıioöuü]*$/.test(w) ? "ler" : "lar";
  const cogul = tiplerden([
    [4, () => { const w = pick(SOZCUK), ek = cogulEk(w); return secim(`"${w}" sözcüğünün çoğul (birden fazla) hâli hangisidir?`, w + ek, [w + (ek === "ler" ? "lar" : "ler"), w], `${w} + ${ek} = ${w + ek}`); }],
    [3, () => { const g = grupla("Sözcüklere hangi ek gelir? Kutulara yerleştir.", ["-ler", "-lar"], karistir([...sec(SOZCUK.filter((w) => cogulEk(w) === "ler"), 3).map((w) => [w, 0]), ...sec(SOZCUK.filter((w) => cogulEk(w) === "lar"), 3).map((w) => [w, 1])]), "Son hecede e, i, ö, ü varsa -ler; a, ı, o, u varsa -lar gelir."); return g; }],
    [2, () => { const w = pick(SOZCUK), c = Math.random() < 0.5; return secim(`"${c ? w + cogulEk(w) : w}" sözcüğü tekil mi, çoğul mu?`, c ? "Çoğul" : "Tekil", [c ? "Tekil" : "Çoğul", "İkisi de değil"], c ? "Birden fazla varlığı anlatıyor." : "Tek bir varlığı anlatıyor."); }],
    [1, () => dy("Birden fazla varlığı anlatmak için sözcüğe -ler ya da -lar eki getiririz.", true)]
  ]);

  // ---------- Olayların sırası ----------
  const SIRA = [
    ["Sabah uyandım.", "Kahvaltı yaptım.", "Okula gittim."], ["Tohumu toprağa ektim.", "Her gün suladım.", "Filiz çıktı."], ["Ellerimi ıslattım.", "Sabunla köpürttüm.", "Duruladım ve kuruladım."],
    ["Zil çaldı.", "Sınıfa girdik.", "Ders başladı."], ["Kar yağdı.", "Kardan adam yaptık.", "Güneş açınca kardan adam eridi."], ["Pastanın mumlarını yaktık.", "Doğum günü şarkısı söyledik.", "Mumları üfledim."],
    ["Kitabı kütüphaneden aldım.", "Kitabı okudum.", "Kitabı geri götürdüm."], ["Tırtıl yumurtadan çıktı.", "Koza ördü.", "Kelebek oldu."], ["Diş macununu sürdüm.", "Dişlerimi fırçaladım.", "Ağzımı çalkaladım."]
  ];
  const olaySira = tiplerden([
    [5, () => { const s = pick(SIRA); return sirala("Olayları oluş sırasına göre diz.", s, s.join(" → "), " "); }],
    [3, () => { const s = pick(SIRA); const i = r(0, 2); const ad = ["en önce", "ortada", "en son"][i]; return secim(`Hangisi ${ad} olur?`, s[i], s.filter((_, k) => k !== i), s.join(" → ")); }],
    [1, () => secim("Olayları anlatırken hangi sözcükler sırayı gösterir?", "Önce, sonra, en sonunda", ["Kırmızı, mavi, sarı", "Büyük, küçük, orta"], "")]
  ]);

  // ---------- Duygular ve görsel okuma ----------
  const DUY = [["😀", "mutlu"], ["😢", "üzgün"], ["😠", "kızgın"], ["😨", "korkmuş"], ["😲", "şaşırmış"], ["😴", "uykulu"]];
  const DURUM = [["Doğum günü hediyesini açan çocuk", "😀"], ["Dondurması yere düşen çocuk", "😢"], ["Oyuncağı izinsiz alınan çocuk", "😠"], ["Karanlıkta ses duyan çocuk", "😨"], ["Kapıyı açınca sürpriz parti gören çocuk", "😲"], ["Gece yarısı uyanık kalan çocuk", "😴"], ["Yarışmada birinci olan çocuk", "😀"], ["Kedisi kaybolan çocuk", "😢"], ["Kumdan kalesi yıkılan çocuk", "😠"], ["Gök gürültüsünü duyan çocuk", "😨"], ["Bütün gün oyun oynayıp yorulan çocuk", "😴"], ["Arkadaşı ona sarılan çocuk", "😀"]];
  const duygu = tiplerden([
    [3, () => { const d = pick(DUY); return secim("Resimdeki çocuk nasıl hissediyor?", buyuk(d[1]), DUY.filter((x) => x !== d).map((x) => buyuk(x[1])), "", { gorsel: `<div style="font-size:110px">${d[0]}</div>` }); }],
    [3, () => { const q = pick(DURUM); return secim(`${q[0]} nasıl hisseder?`, q[1], DUY.map((x) => x[0]).filter((x) => x !== q[1]), "", { em: true }); }],
    [2, () => { const t = pick([["🌧️☂️🧒", "Yağmur yağıyor, çocuk şemsiye tutuyor.", ["Güneşli bir günde çocuk denize giriyor.", "Çocuk kar topu oynuyor."]], ["🎂🎈🥳", "Bir doğum günü kutlanıyor.", ["Çocuklar ders çalışıyor.", "Bir aile pikniğe gidiyor."]], ["👨‍🌾🌱💧", "Çiftçi fidanları suluyor.", ["Doktor hasta muayene ediyor.", "Pilot uçak uçuruyor."]], ["📚🧒🌙", "Çocuk gece kitap okuyor.", ["Çocuk sabah okula gidiyor.", "Çocuk parkta top oynuyor."]], ["⛄❄️🧤", "Çocuklar kardan adam yapıyor.", ["Çocuklar denizde yüzüyor.", "Çocuklar uçurtma uçuruyor."]], ["🍳👩‍🍳🥚", "Aşçı yumurta pişiriyor.", ["Aşçı resim yapıyor.", "Aşçı bisiklete biniyor."]], ["🚒🔥👨‍🚒", "İtfaiyeci yangını söndürüyor.", ["Postacı mektup getiriyor.", "Doktor ilaç veriyor."]], ["🏖️☀️🪁", "Güneşli bir günde sahilde uçurtma uçuruluyor.", ["Karlı bir günde kayak yapılıyor.", "Yağmurda şemsiye açılıyor."]]]); return secim("Resimde ne anlatılıyor?", t[1], t[2], "Görselleri dikkatle inceleyerek anlam çıkarırız.", { gorsel: `<div style="font-size:80px;letter-spacing:6px">${t[0]}</div>`, balonYok: true }); }]
  ]);

  // ---------- Atatürk ve Millî Bayramlar ----------
  const ataturk = bankadan({
    sorular: [["Türkiye Cumhuriyeti'nin kurucusu kimdir?", "Mustafa Kemal Atatürk", ["Nasreddin Hoca", "Neşet Ertaş"]], ["Atatürk 23 Nisan'ı kimlere armağan etmiştir?", "Çocuklara", ["Askerlere", "Öğretmenlere"]], ["Cumhuriyet Bayramı hangi gün kutlanır?", "29 Ekim", ["23 Nisan", "30 Ağustos"]], ["Zafer Bayramı hangi gün kutlanır?", "30 Ağustos", ["29 Ekim", "19 Mayıs"]], ["Atatürk'ün annesinin adı nedir?", "Zübeyde Hanım", ["Latife Hanım", "Makbule Hanım"]], ["Atatürk nerede doğdu?", "Selanik", ["Ankara", "İstanbul"]], ["Öğretmenler Günü hangi gün kutlanır?", "24 Kasım", ["10 Kasım", "1 Ocak"]], ["Çanakkale Zaferi hangi gün anılır?", "18 Mart", ["23 Nisan", "29 Ekim"]]],
    dy: { d: ["Atatürk çocukları çok severdi.", "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı'dır.", "Atatürk okumayı ve öğrenmeyi çok severdi.", "Atatürk'ü her yıl 10 Kasım'da saygıyla anarız."], y: [["Cumhuriyet Bayramı 23 Nisan'da kutlanır.", "Cumhuriyet Bayramı 29 Ekim'de kutlanır."], ["Atatürk Ankara'da doğmuştur.", "Atatürk Selanik'te doğmuştur."]] },
    ciftler: [["29 Ekim", "Cumhuriyet Bayramı"], ["23 Nisan", "Çocuk Bayramı"], ["30 Ağustos", "Zafer Bayramı"], ["19 Mayıs", "Gençlik ve Spor Bayramı"], ["24 Kasım", "Öğretmenler Günü"]], ciftBaslik: "Tarihi özel günle eşleştir."
  });

  // ---------- Kültür hazinemiz: Nasreddin Hoca, oyunlar, bilmeceler ----------
  const kultur = bankadan({
    sorular: [["Kazan doğurdu fıkrası hangi ünlü kişiye aittir?", "Nasreddin Hoca", ["Keloğlan", "Hacivat"]], ["Nasreddin Hoca neye ters binerdi?", "Eşeğine", ["Atına", "Arabasına"]], ["Hangisi geleneksel bir çocuk oyunudur?", "Saklambaç", ["Bilgisayar oyunu", "Satranç turnuvası"]], ["Karagöz ile Hacivat nedir?", "Gölge oyunu", ["Bir yemek", "Bir şarkı"]], ["Türkülerin Babası olarak bilinen sanatçı kimdir?", "Neşet Ertaş", ["Nasreddin Hoca", "Alper Gezeravcı"]], ["Bilmece: Sayfaları var ama ağaç değil; içinde masallar saklı. Bu nedir?", "Kitap", ["Kalem", "Saat"]], ["Bilmece: Kat kat elbiseli, açması hünerli. Bu nedir?", "Lahana", ["Elma", "Karpuz"]], ["Bilmece: Dört ayağı var ama yürüyemez, üstünde yemek yeriz. Bu nedir?", "Masa", ["Kedi", "Araba"]]],
    dy: { d: ["Masallar \"Bir varmış, bir yokmuş\" diye başlayabilir.", "Saklambaç, körebe ve seksek geleneksel oyunlarımızdandır.", "Nasreddin Hoca fıkraları insanı hem güldürür hem düşündürür."], y: [["Bilmecelerin cevabı yoktur.", "Bilmecelerin bir cevabı vardır, onu buluruz."]] },
    gruplar: { "Geleneksel oyun": ["Saklambaç", "Körebe", "Seksek", "Mendil kapmaca", "Yağ satarım bal satarım"], "Yemek": ["Mantı", "Simit", "Lokum", "Pide", "Aşure"] }, gruplaSoru: "Kartları doğru kutuya yerleştir."
  });

  // ---------- Bilim ve merak: mucit çocuk ----------
  const mucit = bankadan({
    sorular: [["Uzaya giden ilk Türk astronot kimdir?", "Alper Gezeravcı", ["Neşet Ertaş", "Nasreddin Hoca"]], ["Türkiye'de her yıl yapılan havacılık, uzay ve teknoloji festivalinin adı nedir?", "TEKNOFEST", ["Kitap Fuarı", "Bayram"]], ["Merak ettiğimiz bir şeyi öğrenmek için ilk ne yaparız?", "Soru sorarız", ["Uyuruz", "Vazgeçeriz"]], ["Hangisi bir icattır?", "Telefon", ["Ağaç", "Bulut"]], ["Uzaklardaki yıldızlara bakmak için ne kullanırız?", "Teleskop", ["Mikroskop", "Termometre"]], ["Çok küçük canlıları görmek için ne kullanırız?", "Mikroskop", ["Teleskop", "Dürbün"]]],
    dy: { d: ["Mucitler insanların işini kolaylaştıran yeni şeyler bulur.", "Teknolojiyi dikkatli ve az kullanmalıyız.", "Merak etmek öğrenmenin ilk adımıdır."], y: [["Bir deneme başarısız olunca hemen vazgeçmeliyiz.", "Mucitler başarısız olunca tekrar denerler."], ["Tablette bütün gün oyun oynamak sağlıklıdır.", "Ekran başında çok kalmamalıyız."]] },
    ciftler: [["Ampul", "Işık verir"], ["Telefon", "Uzaktakilerle konuşmamızı sağlar"], ["Buzdolabı", "Yiyecekleri soğuk tutar"], ["Saat", "Zamanı gösterir"], ["Tekerlek", "Taşımayı kolaylaştırır"]], ciftBaslik: "Buluşu işiyle eşleştir."
  });

  DERS.turkce = {
    ad: "Türkçe", ikon: "📖", renk: "#ef476f",
    temalar: [
      { id: "tt1", ad: "Değerlerimizle Varız", konular: [
        { id: "t1", ad: "Harf, Hece ve Sözcük", ikon: "🔤", uret: harfHece, bilgi: [["🔤", "Alfabemizde 29 harf vardır."], ["🅰️", "Sesli harfler: a, e, ı, i, o, ö, u, ü. Toplam 8 tanedir."], ["🅱️", "Diğer 21 harf sessiz harftir."], ["👏", "Sözcükleri hecelerine ayırırız: ki-tap, ke-le-bek. Her hecede bir sesli harf vardır."]] },
        { id: "t2", ad: "Ana Fikir ve Başlık", ikon: "💡", uret: anaFikir, bilgi: [["💡", "Ana fikir, metnin bize vermek istediği mesajdır."], ["🏷️", "Başlık metnin konusunu kısaca söyler."], ["🔍", "\"Bu metin bize ne öğretiyor?\" diye sorarız."]] }
      ] },
      { id: "tt2", ad: "Atatürk ve Çocuk", konular: [
        { id: "t3", ad: "Atatürk ve Bayramlarımız", ikon: "🇹🇷", uret: ataturk, bilgi: [["🇹🇷", "Mustafa Kemal Atatürk, Türkiye Cumhuriyeti'nin kurucusudur."], ["🎈", "Atatürk 23 Nisan'ı çocuklara armağan etmiştir."], ["🎉", "29 Ekim Cumhuriyet Bayramı, 30 Ağustos Zafer Bayramı'dır."], ["📚", "Atatürk öğretmenleri ve çocukları çok severdi."]] },
        { id: "t4", ad: "Eş Anlamlı Sözcükler", ikon: "👯", uret: esAnlam, bilgi: [["👯", "Yazılışları farklı, anlamları aynı olan sözcüklere eş anlamlı sözcük denir."], ["⚫", "siyah = kara, beyaz = ak, kırmızı = al"], ["🏫", "okul = mektep, cevap = yanıt, yıl = sene"]] }
      ] },
      { id: "tt3", ad: "Doğada Neler Oluyor", konular: [
        { id: "t5", ad: "Zıt Anlamlı Sözcükler", ikon: "☯️", uret: zitAnlam, bilgi: [["☯️", "Anlamca birbirinin tersi olan sözcüklere zıt anlamlı sözcük denir."], ["🐘", "büyük ↔ küçük, uzun ↔ kısa"], ["🔥", "sıcak ↔ soğuk, gece ↔ gündüz"]] },
        { id: "t6", ad: "Sebep ve Sonuç", ikon: "🔗", uret: sebepSonuc, bilgi: [["🔗", "Her olayın bir sebebi ve sonucu vardır."], ["🌧️", "Yağmur yağdı (sebep), yerler ıslandı (sonuç)."], ["🤔", "Sebebi bulmak için \"Neden?\" diye sorarız."]] }
      ] },
      { id: "tt4", ad: "Okuma Serüvenimiz", konular: [
        { id: "t7", ad: "Okuduğunu Anlama", ikon: "🕵️", uret: besN, bilgi: [["🕵️", "Bir metni anlamak için sorular sorarız: Kim? Ne? Nerede? Ne zaman? Nasıl? Neden?"], ["👀", "Metni dikkatle oku, gerekirse tekrar oku."], ["✅", "Cevapları metnin içinde ara."]] },
        { id: "t8", ad: "Alfabetik Sıralama", ikon: "🔡", uret: alfabe, bilgi: [["🔡", "A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z"], ["📚", "Sözlükte sözcükler alfabetik sıradadır."], ["1️⃣", "Sıralarken önce ilk harfe, aynıysa ikinci harfe bakarız."]] }
      ] },
      { id: "tt5", ad: "Yeteneklerimizi Tanıyoruz", konular: [
        { id: "t9", ad: "Cümle Kurma", ikon: "🧱", uret: cumle, bilgi: [["🧱", "Sözcükler bir araya gelerek cümleyi oluşturur."], ["🔠", "Cümleler büyük harfle başlar."], ["⏹️", "Cümlenin sonuna nokta, soru işareti ya da ünlem konur."]] },
        { id: "t10", ad: "Duygular ve Görsel Okuma", ikon: "😀", uret: duygu, bilgi: [["😀", "Yüz ifadelerinden insanların duygularını anlayabiliriz."], ["🖼️", "Görselleri dikkatle inceleyerek ne anlattıklarını buluruz."], ["💬", "Duygularımızı söylemek bizi rahatlatır."]] }
      ] },
      { id: "tt6", ad: "Mucit Çocuk", konular: [
        { id: "t11", ad: "Bilim ve Merak", ikon: "🚀", uret: mucit, bilgi: [["🚀", "Alper Gezeravcı uzaya giden ilk Türk astronottur."], ["💡", "Mucitler yeni şeyler bulur ve hayatımızı kolaylaştırır."], ["❓", "Merak etmek ve soru sormak öğrenmenin ilk adımıdır."]] },
        { id: "t12", ad: "Gerçek ve Hayal", ikon: "🦄", uret: gercekHayal, bilgi: [["🌍", "Gerçek olaylar hayatta olabilir: Kuşlar uçar."], ["🦄", "Hayal ürünü olaylar gerçekte olamaz: Ağaç yürüdü."], ["📕", "Masallarda hayal ürünü olaylar anlatılır."]] }
      ] },
      { id: "tt7", ad: "Kültür Hazinemiz", konular: [
        { id: "t13", ad: "Kültürümüz ve Bilmeceler", ikon: "🧕", uret: kultur, bilgi: [["😄", "Nasreddin Hoca fıkraları hem güldürür hem düşündürür."], ["🙈", "Saklambaç, körebe, seksek geleneksel oyunlarımızdandır."], ["🎭", "Karagöz ile Hacivat bir gölge oyunudur."], ["❓", "Bilmeceler düşündürerek eğlendirir."]] },
        { id: "t14", ad: "Noktalama İşaretleri", ikon: "❗", uret: noktalama, bilgi: [["⏺️", "Nokta (.): Bildiren cümlelerin sonuna konur."], ["❓", "Soru işareti (?): Soru soran cümlelerin sonuna konur."], ["❗", "Ünlem (!): Sevinç, korku, şaşkınlık bildiren cümlelerin sonuna konur."], ["〰️", "Virgül (,): Sıralanan sözcükleri ayırır."]] }
      ] },
      { id: "tt8", ad: "Haklarımızı Biliyoruz", konular: [
        { id: "t15", ad: "Büyük Harfler", ikon: "🔠", uret: buyukHarf, bilgi: [["🔠", "Cümleler büyük harfle başlar."], ["🙋", "Kişi adları büyük harfle başlar: Ayşe, Mehmet"], ["🏙️", "Şehir ve ülke adları büyük harfle başlar: Ankara, Türkiye"]] },
        { id: "t16", ad: "Tekil ve Çoğul", ikon: "👥", uret: cogul, bilgi: [["1️⃣", "Tek bir varlığı anlatan sözcük tekildir: kitap"], ["👥", "Birden fazla varlığı anlatmak için -ler, -lar eki getiririz: kitaplar, çiçekler"], ["🎵", "Son hecede a, ı, o, u varsa -lar; e, i, ö, ü varsa -ler gelir."]] },
        { id: "t17", ad: "Olayların Sırası", ikon: "🔢", uret: olaySira, bilgi: [["🔢", "Olaylar belli bir sırayla olur."], ["⏩", "Önce, sonra, daha sonra, en sonunda sözcükleri sırayı gösterir."], ["🌱", "Tohum ekilir, sulanır, sonra filiz çıkar."]] }
      ] }
    ]
  };
})();
