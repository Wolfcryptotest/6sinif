// 3. Sınıf Türkçe — Maarif Modeli temaları; beceri alanlarına göre oyunlar
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

  const SESTES = [
    ["Bahçedeki gül çok güzel kokuyor.", "gül", "Bir çiçek", ["Gülmek", "Bir renk"]],
    ["Üzülme, biraz gül!", "gül", "Gülmek", ["Bir çiçek", "Bir meyve"]],
    ["Havuzda her gün biraz yüz.", "yüz", "Suda ilerlemek", ["Surat", "Bir sayı"]],
    ["Sabah kalkınca yüzünü yıka.", "yüz", "Surat", ["Suda ilerlemek", "Bir sayı"]],
    ["Kumbaramda yüz lira var.", "yüz", "Bir sayı", ["Surat", "Suda ilerlemek"]],
    ["Dedem her sabah çay içer.", "çay", "Bir içecek", ["Küçük akarsu", "Bir meyve"]],
    ["Köyün yanından küçük bir çay akıyor.", "çay", "Küçük akarsu", ["Bir içecek", "Bir bitki"]],
    ["Yaz gelince denize gideriz.", "yaz", "Bir mevsim", ["Yazmak", "Bir renk"]],
    ["Adını defterin kapağına yaz.", "yaz", "Yazmak", ["Bir mevsim", "Bir harf"]],
    ["Gökyüzünde ay parlıyordu.", "ay", "Dünya'nın uydusu", ["Yılın bölümü", "Bir hayvan"]],
    ["Bu ay çok kitap okudum.", "ay", "Yılın bölümü", ["Dünya'nın uydusu", "Bir yıldız"]],
    ["Çiftlikte kahverengi bir at var.", "at", "Bir hayvan", ["Atmak", "Bir sayı"]],
    ["Çöpü çöp kutusuna at.", "at", "Atmak", ["Bir hayvan", "Bir oyun"]],
    ["Yemeğin tadına dilimizle bakarız.", "dil", "Ağızdaki organ", ["Konuşulan lisan", "Bir yiyecek"]],
    ["Türkçe çok güzel bir dildir.", "dil", "Konuşulan lisan", ["Ağızdaki organ", "Bir şarkı"]],
    ["Pazar günü kıra pikniğe gittik.", "kır", "Şehir dışındaki açık alan", ["Kırmak", "Bir renk"]],
    ["Dikkat et, bardağı kırma!", "kır", "Kırmak", ["Şehir dışındaki açık alan", "Bir bitki"]],
    ["Dün akşam dolu yağdı.", "dolu", "Buz taneleri hâlinde yağış", ["İçi boş olmayan", "Bir oyun"]],
    ["Sürahi su dolu.", "dolu", "İçi boş olmayan", ["Buz taneleri hâlinde yağış", "Bir meyve"]],
    ["Kardeşim sekiz yaşında.", "yaş", "Yaşanan yıl sayısı", ["Islak", "Bir renk"]],
    ["Yağmurda kıyafetlerim yaş oldu.", "yaş", "Islak", ["Yaşanan yıl sayısı", "Bir sayı"]],
    ["Hadi, otobüse bin!", "bin", "Binmek", ["Bir sayı", "Bir hayvan"]],
    ["Kütüphanede bin kitap var.", "bin", "Bir sayı", ["Binmek", "Bir renk"]],
    ["Yanağında küçük bir ben var.", "ben", "Deride küçük leke", ["Kendimi anlatan sözcük", "Bir meyve"]],
    ["Ben üçüncü sınıfa gidiyorum.", "ben", "Kendimi anlatan sözcük", ["Deride küçük leke", "Bir sayı"]]
  ];
  const esSesli = tiplerden([
    [6, () => { const s = pick(SESTES); return secim(`"${s[0]}" cümlesinde "${s[1]}" sözcüğü hangi anlamda kullanılmıştır?`, s[2], s[3], `Eş sesli sözcüklerin yazılışı aynı, anlamı farklıdır.`); }],
    [2, () => { const w = pick(["gül", "yüz", "çay", "yaz", "ay", "at", "dil", "kır", "dolu", "yaş", "bin", "ben"]); const ikisi = karistir(SESTES.filter((x) => x[1] === w)).slice(0, 2); if (ikisi.length < 2 || ikisi[0][2] === ikisi[1][2]) return null; const yanl = pick(SESTES.filter((x) => x[1] !== w)); return secim(`Hangi cümlede "${w}" sözcüğü "${ikisi[0][2].toLocaleLowerCase("tr")}" anlamında kullanılmıştır?`, ikisi[0][0], [ikisi[1][0], yanl[0]], ""); }],
    [1, () => dy("Eş sesli sözcüklerin yazılışları aynı, anlamları farklıdır.", true)],
    [1, () => dy("Eş sesli sözcüklerin anlamları her zaman aynıdır.", false, "Eş sesli sözcüklerin anlamları farklıdır.")]
  ]);

  // ---------- Cümle ----------
  const CUMLE = ["Kuşlar ağaçta neşeyle ötüyordu.", "Sonbaharda yapraklar sararır.", "Arılar çiçeklerden bal yapar.", "Annem bahçeye domates ekti.", "Yağmurdan sonra gökkuşağı çıktı.", "Kar yağınca kardan adam yaptık.", "Kedim pencerenin önünde uyuyor.", "Ormanda büyük bir sincap gördük.", "Dedem bana masal anlattı.", "Her sabah kahvaltı yaparım.", "Kütüphaneden yeni bir kitap aldım.", "Kaplumbağa yavaş yavaş yürüdü.", "Güneş doğudan doğar.", "Denizde yunuslar yüzüyordu.", "Arkadaşımla parkta oynadık.", "Öğretmenimiz bize bir şarkı öğretti.", "Kış gelince kuşlar göç eder.", "Çiçekleri her gün sularım.", "Babam bisikletimi tamir etti.", "Bulutlar gökyüzünde süzülüyordu."];
  const cumle = tiplerden([
    [5, () => { const c = pick(CUMLE); return sirala("Sözcükleri sıraya dizerek anlamlı bir cümle kur.", c.split(" ")); }],
    [3, () => { const c = pick(CUMLE), w = c.replace(".", "").split(" "); const kr = (a) => buyuk(a.map((x) => x.toLocaleLowerCase("tr")).join(" ")) + "."; const k1 = kr(karistir(w)), k2 = kr(w.slice().reverse()); return secim("Hangisi anlamlı ve kurallı bir cümledir?", c, [k1, k2].filter((x) => x.toLocaleLowerCase("tr") !== c.toLocaleLowerCase("tr")), "Kurallı cümlede yüklem (iş bildiren sözcük) genellikle sondadır."); }],
    [2, () => { const c = pick(CUMLE); const n = c.split(" ").length; return secim(`"${c}" cümlesi kaç sözcükten oluşur?`, n, [n + 1, n - 1], c.split(" ").join(" / ")); }],
    [1, () => dy(pick(["Cümleler büyük harfle başlar.", "Cümlenin sonuna uygun noktalama işareti konur.", "Sözcükler bir araya gelerek cümleyi oluşturur."]), true)]
  ]);

  // ---------- Okuduğunu anlama ----------
  const METIN = [
    { m: "Pazar sabahı Elif ve babası, şehrin dışındaki ormana yürüyüşe gitti. Yanlarına su ve sandviç aldılar. Yolda bir sincabın ağaca tırmandığını gördüler. Elif sincabın fotoğrafını çekti.", s: [["Elif kiminle yürüyüşe gitti?", "Babasıyla", ["Annesiyle", "Arkadaşıyla"]], ["Yürüyüş ne zaman yapıldı?", "Pazar sabahı", ["Cuma akşamı", "Salı öğlen"]], ["Yürüyüş nerede yapıldı?", "Ormanda", ["Sahilde", "Okulda"]], ["Elif neyin fotoğrafını çekti?", "Sincabın", ["Babasının", "Bir kuşun"]]] },
    { m: "Kerem'in sınıfı okul bahçesine fidan dikti. Öğretmenleri fidanların kökünü toprağa dikkatle yerleştirmeyi gösterdi. Fidanları büyüyünce gölgesinde kitap okumak için diktiler. Her öğrenci kendi fidanına bir isim verdi.", s: [["Öğrenciler ne dikti?", "Fidan", ["Çiçek", "Sebze"]], ["Fidanlar nereye dikildi?", "Okul bahçesine", ["Parka", "Ormana"]], ["Fidanlar neden dikildi?", "Gölgesinde kitap okumak için", ["Meyve satmak için", "Odun yapmak için"]], ["Her öğrenci fidanına ne yaptı?", "İsim verdi", ["Boya sürdü", "Taş koydu"]]] },
    { m: "Selin akşam yemeğinden sonra dişlerini fırçaladı. Sonra pijamalarını giydi ve kitabını açtı. Kitapta uzayda yolculuk yapan bir astronot anlatılıyordu. Selin okurken uykuya daldı ve rüyasında Ay'a gitti.", s: [["Selin yemekten sonra ne yaptı?", "Dişlerini fırçaladı", ["Televizyon izledi", "Bahçeye çıktı"]], ["Kitapta kim anlatılıyordu?", "Bir astronot", ["Bir aşçı", "Bir korsan"]], ["Selin rüyasında nereye gitti?", "Ay'a", ["Denize", "Okula"]], ["Olay günün hangi vaktinde geçiyor?", "Akşam", ["Sabah", "Öğlen"]]] },
    { m: "Mahallede yaşayan Hüsnü Amca çok iyi bir marangozdu. Bir gün çocukların parktaki bankının kırıldığını gördü. Atölyesine gidip tahta ve çivi getirdi. Bankı onarınca çocuklar ona teşekkür etti.", s: [["Hüsnü Amca'nın mesleği nedir?", "Marangoz", ["Fırıncı", "Doktor"]], ["Parktaki ne kırılmıştı?", "Bank", ["Salıncak", "Kaydırak"]], ["Hüsnü Amca neler getirdi?", "Tahta ve çivi", ["Boya ve fırça", "Top ve ip"]], ["Çocuklar Hüsnü Amca'ya ne yaptı?", "Teşekkür etti", ["Bağırdı", "Hediye istedi"]]] },
    { m: "Kış tatilinde Can, ailesiyle Erzurum'a gitti. Kayak merkezinde ilk kez kayak yaptı. Önce birkaç kez düştü ama vazgeçmedi. Tatilin sonunda tepeden düşmeden kaymayı başardı.", s: [["Can tatilde hangi şehre gitti?", "Erzurum", ["Antalya", "İzmir"]], ["Can ilk kez ne yaptı?", "Kayak", ["Yüzme", "Paten"]], ["Can düştüğünde ne yaptı?", "Vazgeçmedi", ["Eve döndü", "Ağladı ve bıraktı"]], ["Bu olay hangi mevsimde geçiyor?", "Kış", ["Yaz", "Sonbahar"]]] },
    { m: "Okulda kitap haftası düzenlendi. Her sınıf en sevdiği kitabı tanıttı. Üçüncü sınıflar bir hayvan hikâyesini tiyatro oyunu olarak sahneledi. Veliler oyunu çok beğenip uzun uzun alkışladı.", s: [["Okulda hangi etkinlik düzenlendi?", "Kitap haftası", ["Spor şenliği", "Resim yarışması"]], ["Üçüncü sınıflar ne sahneledi?", "Bir hayvan hikâyesini", ["Bir şarkıyı", "Bir şiiri"]], ["Hikâye nasıl sunuldu?", "Tiyatro oyunu olarak", ["Resim olarak", "Şarkı olarak"]], ["Veliler oyuna nasıl tepki verdi?", "Uzun uzun alkışladı", ["Uyudu", "Erkenden çıktı"]]] }
  ];
  const anlama = () => { const t = pick(METIN), q = pick(t.s); return secim(q[0], q[1], q[2], "Cevap metnin içinde. Metni dikkatlice oku.", { gorsel: `<div class="ifade" style="text-align:left;font-size:21px;font-weight:600;border-style:solid;line-height:1.6">${OYUN.esc(t.m)}</div>`, balonYok: true }); };
  const besN = tiplerden([
    [6, anlama],
    [2, () => { const t = pick([["Kim?", "Elif"], ["Nerede?", "Parkta"], ["Ne zaman?", "Dün akşam"], ["Nasıl?", "Hızlıca"], ["Neden?", "Yağmur yağdığı için"], ["Ne?", "Bir kitap"]]); return secim(`"${t[0]}" sorusunun cevabı hangisi olabilir?`, t[1], [["Kim?", "Elif"], ["Nerede?", "Parkta"], ["Ne zaman?", "Dün akşam"], ["Nasıl?", "Hızlıca"], ["Neden?", "Yağmur yağdığı için"]].filter((x) => x[0] !== t[0]).map((x) => x[1]), "5N1K soruları: Ne, Nerede, Ne zaman, Nasıl, Neden, Kim"); }],
    [1, () => eslestir("Soruyu cevabıyla eşleştir.", sec([["Kim?", "Ayşe"], ["Nerede?", "Okulda"], ["Ne zaman?", "Sabah"], ["Neden?", "Hasta olduğu için"], ["Nasıl?", "Yavaşça"]], 4))]
  ]);

  // ---------- Alfabe ----------
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

  // ---------- Özel / cins ad ----------
  const OZ = { "Özel ad": ["Ankara", "Ayşe", "Türkiye", "Karadeniz", "Pamuk (kedi)", "Fırat", "Ağrı Dağı", "Mehmet", "Konya", "Tekir (kedi)", "Zeynep", "İzmir"], "Cins ad": ["kedi", "şehir", "deniz", "ülke", "dağ", "çocuk", "nehir", "öğretmen", "masa", "ağaç", "kitap", "kuş"] };
  const ozelCins = tiplerden([
    [5, bankadan({ gruplar: OZ, gruplaSoru: "Sözcükleri özel ad ve cins ad olarak ayır.", buyukYok: true, grupSor: (g) => g === "Özel ad" ? "Hangisi özel addır?" : "Hangisi cins addır?" })],
    [2, () => { const t = pick([["şehir", "İstanbul"], ["ülke", "Türkiye"], ["kız adı", "Elif"], ["deniz", "Akdeniz"], ["nehir", "Kızılırmak"], ["göl", "Van Gölü"]]); return secim(`"${t[0]}" sözcüğüne örnek olabilecek özel ad hangisidir?`, t[1], ["kalem", "bahçe", "ağaç", "masa"], "Özel adlar tek bir varlığa verilen adlardır ve büyük harfle başlar."); }],
    [2, () => pick([() => dy("Özel adlar büyük harfle başlar.", true), () => dy("Cins adlar, aynı türden varlıkların ortak adıdır.", true), () => dy("\"kitap\" sözcüğü özel addır.", false, "\"kitap\" cins addır."), () => dy("\"Ankara\" sözcüğü cins addır.", false, "\"Ankara\" özel addır.")])()],
    [2, () => { const w = pick(["kitap", "kalem", "çiçek", "ağaç", "kuş", "elma", "ev", "araba", "defter", "çocuk"]); const ek = /[eiöü][^aeıioöuü]*$/.test(w) ? "ler" : "lar"; return secim(`"${w}" sözcüğünün çoğul hâli hangisidir?`, w + ek, [w + (ek === "ler" ? "lar" : "ler"), w + "i"], "Çoğul eki -ler / -lar'dır. Kalın ünlüden sonra -lar, ince ünlüden sonra -ler gelir."); }]
  ]);

  // ---------- Atasözü ve deyim ----------
  const ATA = [["Damlaya damlaya göl olur.", "Küçük birikimler zamanla büyür."], ["Bugünün işini yarına bırakma.", "İşlerimizi zamanında yapmalıyız."], ["Ağaç yaşken eğilir.", "Eğitim küçük yaşta başlar."], ["Sakla samanı, gelir zamanı.", "Gereksiz görünen şeyler bir gün işe yarar."], ["Bir elin nesi var, iki elin sesi var.", "Birlikte çalışmak başarı getirir."], ["Komşu komşunun külüne muhtaçtır.", "Komşular birbirine yardım etmelidir."], ["Tatlı dil yılanı deliğinden çıkarır.", "Güzel sözle her işi çözebiliriz."], ["Ak akçe kara gün içindir.", "Zor günler için para biriktirmeliyiz."], ["Erken kalkan yol alır.", "Erken başlayan işinde ilerler."], ["Emek olmadan yemek olmaz.", "Bir şey elde etmek için çalışmak gerekir."]];
  const DEY = [["Kulak vermek", "Dikkatle dinlemek"], ["Göz atmak", "Kısaca bakmak"], ["Ağzı kulaklarına varmak", "Çok sevinmek"], ["Burnu havada olmak", "Kendini beğenmek"], ["Dili tutulmak", "Şaşkınlıktan konuşamamak"], ["Kulak asmamak", "Önemsememek"], ["Eli açık olmak", "Cömert olmak"], ["İçi içine sığmamak", "Çok heyecanlanmak"], ["Ayakları yere basmamak", "Çok mutlu ve heyecanlı olmak"], ["Gözden düşmek", "Sevilmez olmak"]];
  const atasozu = tiplerden([
    [3, bankadan({ ciftler: ATA, ciftSor: (a) => `"${a}" atasözü ne anlatır?`, ciftBaslik: "Atasözünü anlamıyla eşleştir." })],
    [3, bankadan({ ciftler: DEY, ciftSor: (a) => `"${a}" deyiminin anlamı nedir?`, ciftSor2: (b) => `"${b}" anlamına gelen deyim hangisidir?`, ciftBaslik: "Deyimi anlamıyla eşleştir." })],
    [2, () => grupla("Hangileri atasözü, hangileri deyim?", ["Atasözü", "Deyim"], karistir([...sec(ATA, 3).map((x) => [x[0], 0]), ...sec(DEY, 3).map((x) => [x[0], 1])]), "Atasözleri öğüt verir ve genellikle cümle hâlindedir. Deyimler bir durumu kısa ve süslü anlatır.")],
    [1, () => dy("Atasözleri atalarımızın deneyimlerinden doğan öğüt verici sözlerdir.", true)]
  ]);

  // ---------- Ana fikir ----------
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

  // ---------- Yazım ----------
  const MI = [["Bu çanta ağır", "mı"], ["Kuşlar uçtu", "mu"], ["Gözlüğün yeni", "mi"], ["Dün yağmur yağdı", "mı"], ["Öğretmenin geldi", "mi"], ["Sütünü içtin", "mi"], ["Köpeğin büyük", "mü"], ["Topun yuvarlak", "mu"], ["Okula geldin", "mi"], ["Ödevini yaptın", "mı"], ["Bu kitap senin", "mi"], ["Yarın kar yağacak", "mı"], ["Annen evde", "mi"], ["Parka gidelim", "mi"], ["Su soğuk", "mu"], ["Kedin uyudu", "mu"], ["Okul büyük", "mü"], ["Gül güzel", "mü"]];
  const DE = [["Sen de bizimle oyna.", "Sende bizimle oyna.", "\"de\" bağlacı ayrı yazılır."], ["Okulda çok eğlendik.", "Okul da çok eğlendik.", "Bulunma bildiren -da eki bitişik yazılır."], ["Annem de bu kitabı okudu.", "Annemde bu kitabı okudu.", "\"de\" bağlacı ayrı yazılır."], ["Parkta salıncak var.", "Park ta salıncak var.", "Bulunma bildiren -ta eki bitişik yazılır."], ["Ben de seninle geleceğim.", "Bende seninle geleceğim.", "\"de\" bağlacı ayrı yazılır."], ["Kardeşim de resim yapıyor.", "Kardeşimde resim yapıyor.", "\"de\" bağlacı ayrı yazılır."], ["Kitap çantamda duruyor.", "Kitap çantam da duruyor.", "Bulunma bildiren -de eki bitişik yazılır."], ["Akşam evde kaldık.", "Akşam ev de kaldık.", "Bulunma bildiren -de eki bitişik yazılır."]];
  const yazim = tiplerden([
    [4, () => { const [c, m] = pick(MI); const yanl = ["mi", "mı", "mu", "mü"].filter((x) => x !== m); return secim("Hangi soru cümlesi doğru yazılmıştır?", `${c} ${m}?`, [`${c}${m}?`, `${c} ${pick(yanl)}?`], "\"mi\" soru eki her zaman ayrı yazılır ve önceki sözcüğe uyum gösterir."); }],
    [3, () => { const d = pick(DE); return secim("Hangi cümle doğru yazılmıştır?", d[0], [d[1], d[0].toLocaleLowerCase("tr")], d[2], { balonYok: true }); }],
    [2, () => pick([() => dy("\"mi\" soru eki kendinden önceki sözcükten ayrı yazılır.", true), () => dy("\"Geldinmi?\" yazımı doğrudur.", false, "Doğrusu: \"Geldin mi?\""), () => dy("\"Sen de gel.\" cümlesinde \"de\" ayrı yazılmıştır.", true), () => dy("Cümle sonuna uygun noktalama işareti konur.", true)])()],
    [2, () => { const w = pick([["Ankara'ya", "Ankaraya", "ankara'ya"], ["Ayşe'nin", "Ayşenin", "ayşe'nin"], ["Türkiye'de", "Türkiyede", "türkiye'de"], ["Mehmet'e", "Mehmete", "mehmet'e"]]); return secim("Hangisinin yazımı doğrudur?", w[0], [w[1], w[2]], "Özel adlar büyük harfle başlar ve aldıkları ekler kesme işaretiyle ayrılır."); }]
  ]);

  DERS.turkce = {
    ad: "Türkçe", ikon: "📖", renk: "#ef476f",
    temalar: [
      { id: "tt1", ad: "Değerlerimizle Yaşıyoruz", konular: [
        { id: "t1", ad: "Harf, Hece ve Sözcük", ikon: "🔤", uret: harfHece, bilgi: [["🔤", "Alfabemizde 29 harf vardır."], ["🅰️", "Sesli harfler: a, e, ı, i, o, ö, u, ü. Toplam 8 tanedir."], ["🅱️", "Diğer 21 harf sessiz harftir: b, c, ç, d…"], ["✂️", "Sözcükleri hecelere ayırabiliriz: ke-le-bek"], ["☝️", "Her hecede yalnızca bir sesli harf bulunur."]] },
        { id: "t2", ad: "Eş Anlamlı Sözcükler", ikon: "👯", uret: esAnlam, bilgi: [["👯", "Yazılışları farklı, anlamları aynı olan sözcüklere eş anlamlı sözcük denir."], ["⚫", "siyah = kara, beyaz = ak, kırmızı = al"], ["🏫", "okul = mektep, öğrenci = talebe, sınav = imtihan"], ["🎁", "hediye = armağan, misafir = konuk, cevap = yanıt"], ["📅", "yıl = sene, ad = isim, şehir = kent"]] }
      ] },
      { id: "tt2", ad: "Atatürk ve Kahramanlarımız", konular: [
        { id: "t3", ad: "Zıt Anlamlı Sözcükler", ikon: "☯️", uret: zitAnlam, bilgi: [["☯️", "Anlamca birbirinin tersi olan sözcüklere zıt anlamlı sözcük denir."], ["🐘", "büyük ↔ küçük, uzun ↔ kısa, ağır ↔ hafif"], ["🔥", "sıcak ↔ soğuk, gece ↔ gündüz, erken ↔ geç"], ["🚪", "açık ↔ kapalı, dolu ↔ boş, içeri ↔ dışarı"], ["🏃", "gelmek ↔ gitmek, almak ↔ vermek, ağlamak ↔ gülmek"]] },
        { id: "t4", ad: "Atatürk ve Kahramanlarımız", ikon: "🇹🇷", uret: bankadan({
          sorular: [["Atatürk nerede doğmuştur?", "Selanik", ["Ankara", "İzmir"], "Atatürk 1881 yılında Selanik'te doğdu."], ["Atatürk'ün annesinin adı nedir?", "Zübeyde Hanım", ["Makbule Hanım", "Latife Hanım"], ""], ["Atatürk'ün babasının adı nedir?", "Ali Rıza Efendi", ["Şemsi Efendi", "Mehmet Efendi"], ""], ["Cumhuriyet hangi tarihte ilan edildi?", "29 Ekim 1923", ["23 Nisan 1920", "19 Mayıs 1919"], ""], ["Atatürk 23 Nisan'ı kimlere armağan etmiştir?", "Çocuklara", ["Gençlere", "Askerlere"], "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı'dır."], ["Atatürk 19 Mayıs'ı kimlere armağan etmiştir?", "Gençlere", ["Çocuklara", "Öğretmenlere"], "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı'dır."], ["Atatürk'e \"Başöğretmen\" denmesinin sebebi nedir?", "Yeni harfleri halka kendisi öğretmesi", ["Okul müdürü olması", "Çok kitap yazması"], "Harf İnkılabı'ndan sonra yeni harfleri bizzat öğretti."], ["Anıtkabir hangi şehirdedir?", "Ankara", ["İstanbul", "Selanik"], ""], ["Atatürk'e \"Kemal\" adını kim vermiştir?", "Matematik öğretmeni", ["Annesi", "Arkadaşı"], ""], ["Çanakkale Savaşı'nda 215 kiloluk mermiyi topa taşıyan kahramanımız kimdir?", "Seyit Onbaşı", ["Şahin Bey", "Sütçü İmam"], ""], ["Erzurum'da düşmana karşı savaşan kadın kahramanımız kimdir?", "Nene Hatun", ["Zübeyde Hanım", "Halide Edip"], ""], ["Gaziantep'in kahramanı kimdir?", "Şahin Bey", ["Seyit Onbaşı", "Nene Hatun"], ""], ["Atatürk hangi tarihte vefat etti?", "10 Kasım 1938", ["29 Ekim 1923", "23 Nisan 1920"], ""]],
          ciftler: [["Seyit Onbaşı", "Çanakkale"], ["Nene Hatun", "Erzurum"], ["Şahin Bey", "Gaziantep"], ["Sütçü İmam", "Kahramanmaraş"], ["Atatürk'ün doğduğu yer", "Selanik"]], ciftBaslik: "Kahramanı şehriyle eşleştir.",
          dy: { d: ["Atatürk Türkiye Cumhuriyeti'nin kurucusudur.", "Türkiye Büyük Millet Meclisi 23 Nisan 1920'de açıldı.", "Atatürk çocukları çok severdi.", "Atatürk okumayı ve kitapları çok severdi.", "Atatürk 19 Mayıs 1919'da Samsun'a çıktı."], y: [["Atatürk Ankara'da doğmuştur.", "Atatürk Selanik'te doğmuştur."], ["Cumhuriyet 23 Nisan'da ilan edildi.", "Cumhuriyet 29 Ekim 1923'te ilan edildi."], ["Atatürk'ün annesinin adı Makbule'dir.", "Annesi Zübeyde Hanım, kız kardeşi Makbule'dir."]] }
        }), bilgi: [["🇹🇷", "Mustafa Kemal Atatürk, Türkiye Cumhuriyeti'nin kurucusudur."], ["👶", "1881'de Selanik'te doğdu. Annesi Zübeyde Hanım, babası Ali Rıza Efendi'dir."], ["🎈", "23 Nisan'ı çocuklara, 19 Mayıs'ı gençlere armağan etti."], ["🏛️", "29 Ekim 1923'te Cumhuriyeti ilan etti. Anıtkabir Ankara'dadır."], ["🧑‍🏫", "Yeni harfleri halka kendisi öğrettiği için ona \"Başöğretmen\" denir."], ["🦸", "Kahramanlarımız: Seyit Onbaşı (Çanakkale), Nene Hatun (Erzurum), Şahin Bey (Gaziantep), Sütçü İmam (Kahramanmaraş)."]] }
      ] },
      { id: "tt3", ad: "Doğayı Tanıyoruz", konular: [
        { id: "t5", ad: "Eş Sesli Sözcükler", ikon: "🌹", uret: esSesli, bilgi: [["🌹", "Yazılışları aynı, anlamları farklı olan sözcüklere eş sesli sözcük denir."], ["😊", "gül: bir çiçek / gülmek"], ["🏊", "yüz: surat / suda yüzmek / 100 sayısı"], ["🍵", "çay: içecek / küçük akarsu"], ["🌙", "ay: Dünya'nın uydusu / yılın on iki bölümünden biri"], ["🔎", "Hangi anlamda kullanıldığını cümleden anlarız."]] },
        { id: "t6", ad: "Cümle Kurma", ikon: "🧱", uret: cumle, bilgi: [["🧱", "Sözcükler bir araya gelerek cümleyi oluşturur."], ["🔠", "Cümleler büyük harfle başlar."], ["⏹️", "Cümlenin sonuna nokta, soru işareti ya da ünlem konur."], ["🎯", "İş bildiren sözcük (yüklem) genellikle cümlenin sonundadır: Kuşlar ötüyor."], ["🧩", "Sözcükleri doğru sıraya dizince anlamlı cümle kurarız."]] }
      ] },
      { id: "tt4", ad: "Bilgi Hazinemiz", konular: [
        { id: "t7", ad: "Okuduğunu Anlama (5N1K)", ikon: "🕵️", uret: besN, bilgi: [["🕵️", "Bir metni anlamak için 5N1K sorularını sorarız."], ["❓", "Ne? Nerede? Ne zaman? Nasıl? Neden? Kim?"], ["👀", "Metni dikkatle oku, gerekirse tekrar oku."], ["✏️", "Cevapları metnin içinden bul."]] },
        { id: "t8", ad: "Alfabetik Sıralama", ikon: "🔡", uret: alfabe, bilgi: [["🔡", "A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z"], ["📚", "Sözlükte sözcükler alfabetik sıradadır."], ["1️⃣", "Sıralarken önce ilk harflere bakarız."], ["2️⃣", "İlk harfler aynıysa ikinci harfe bakarız: kalem, kedi, kitap"]] }
      ] },
      { id: "tt5", ad: "Yeteneklerimizi Kullanıyoruz", konular: [
        { id: "t9", ad: "Noktalama İşaretleri", ikon: "❗", uret: noktalama, bilgi: [["⏺️", "Nokta (.): Bildiren cümlelerin sonuna konur."], ["❓", "Soru işareti (?): Soru soran cümlelerin sonuna konur."], ["❗", "Ünlem (!): Sevinç, korku, şaşkınlık bildiren cümlelerin sonuna konur."], ["🔸", "Virgül (,): Sıralanan sözcükleri ayırır: elma, armut ve muz."], ["✒️", "Kesme işareti ('): Özel adlara gelen ekleri ayırır: Ankara'ya"]] },
        { id: "t10", ad: "Büyük Harflerin Kullanımı", ikon: "🔠", uret: buyukHarf, bilgi: [["🔠", "Cümleler büyük harfle başlar."], ["🙋", "Kişi adları büyük harfle başlar: Ayşe, Mehmet"], ["🏙️", "Şehir ve ülke adları büyük harfle başlar: Ankara, Türkiye"], ["🐈", "Evcil hayvanlara verdiğimiz adlar büyük harfle başlar: Pamuk"], ["⛰️", "Dağ, göl, deniz, nehir adları büyük harfle başlar: Ağrı Dağı, Van Gölü"]] }
      ] },
      { id: "tt6", ad: "Bilim Yolculuğu", konular: [
        { id: "t11", ad: "Sebep ve Sonuç", ikon: "🔗", uret: sebepSonuc, bilgi: [["🔗", "Her olayın bir sebebi ve sonucu vardır."], ["🌧️", "Yağmur yağdı (sebep), yerler ıslandı (sonuç)."], ["🤔", "Sebebi bulmak için \"Neden?\" diye sorarız."], ["➡️", "Sonucu bulmak için \"Ne oldu?\" diye sorarız."]] },
        { id: "t12", ad: "Gerçek ve Hayal", ikon: "🦄", uret: gercekHayal, bilgi: [["🌍", "Gerçek olaylar hayatta olabilir: Kuşlar uçar."], ["🦄", "Hayal ürünü olaylar gerçekte olamaz: Ağaç yürüdü."], ["📕", "Masal ve fabllarda hayal ürünü olaylar çoktur."], ["🔬", "Bilgi veren metinler gerçek bilgileri anlatır."]] }
      ] },
      { id: "tt7", ad: "Millî Kültürümüz", konular: [
        { id: "t13", ad: "Özel ve Cins Adlar", ikon: "🏷️", uret: ozelCins, bilgi: [["🏷️", "Varlıklara verilen adlara ad (isim) denir."], ["👑", "Özel ad tek bir varlığın adıdır ve büyük harfle başlar: Ankara, Pamuk"], ["📦", "Cins ad aynı türden varlıkların ortak adıdır: şehir, kedi"], ["➕", "Çoğul eki -ler / -lar'dır: kitaplar, çiçekler"]] },
        { id: "t14", ad: "Atasözleri ve Deyimler", ikon: "📜", uret: atasozu, bilgi: [["📜", "Atasözleri atalarımızın deneyimlerinden doğan öğüt verici sözlerdir."], ["💧", "\"Damlaya damlaya göl olur.\" Küçük birikimler zamanla büyür."], ["🤝", "\"Bir elin nesi var, iki elin sesi var.\" Birlikte çalışmak başarı getirir."], ["👂", "Deyimler bir durumu kısa ve etkili anlatır: \"Kulak vermek\" dikkatle dinlemek demektir."], ["😁", "\"Ağzı kulaklarına varmak\" çok sevinmek demektir."]] }
      ] },
      { id: "tt8", ad: "Hak ve Sorumluluklarımız", konular: [
        { id: "t15", ad: "Ana Fikir ve Başlık", ikon: "💡", uret: anaFikir, bilgi: [["💡", "Ana fikir, yazarın metinle vermek istediği temel mesajdır."], ["🏷️", "Başlık metnin konusunu kısaca anlatır."], ["🔍", "Ana fikri bulmak için \"Bu metin bize ne öğretiyor?\" diye sorarız."]] },
        { id: "t16", ad: "Yazım Kuralları", ikon: "✍️", uret: yazim, bilgi: [["❓", "\"mi\" soru eki ayrı yazılır: Geldin mi?"], ["🎵", "\"mi\" eki önceki sözcüğe uyar: mı, mi, mu, mü"], ["➕", "\"de/da\" bağlacı ayrı yazılır: Ben de geldim."], ["📍", "Bulunma bildiren -de/-da eki bitişik yazılır: Evde kaldım."], ["✒️", "Özel adlara gelen ekler kesme işaretiyle ayrılır: Ayşe'nin"]] }
      ] }
    ]
  };
})();
