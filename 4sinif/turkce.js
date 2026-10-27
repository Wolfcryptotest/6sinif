// 4. Sınıf Türkçe — 2018 programı temaları; beceri ve dil bilgisi alanlarına göre oyunlar
(function () {
  const { r, pick, karistir, sec, secim, dy, grupla, eslestir, sirala, tiplerden, bankadan, buyuk } = O;
  const kutu = (m) => `<div class="ifade" style="text-align:left;font-size:20px;font-weight:600;border-style:solid;line-height:1.6">${OYUN.esc(m)}</div>`;

  // ---------- Sözcük bilgisi ----------
  const SOZ = ["ahlak", "bilgi", "cesaret", "çalışkan", "dürüst", "erdem", "fedakâr", "gayret", "hoşgörü", "ılık", "iyilik", "kibar", "lezzet", "merhamet", "nezaket", "olgun", "özveri", "paylaşmak", "rahat", "saygı", "şefkat", "tutumlu", "umut", "üzüntü", "vefa", "yardım", "zarif", "sevgi", "sabır", "selam", "sadakat", "barış", "bilim", "bayrak"];
  const HECE = [["dü", "rüst", "lük"], ["yar", "dım", "laş", "ma"], ["hoş", "gö", "rü"], ["mer", "ha", "met"], ["fe", "da", "kâr", "lık"], ["ar", "ka", "daş", "lık"], ["öz", "ve", "ri"], ["ne", "za", "ket"], ["sa", "da", "kat"], ["cum", "hu", "ri", "yet"], ["kü", "tüp", "ha", "ne"], ["bil", "gi", "sa", "yar"]];
  const trS = (a) => a.slice().sort((x, y) => x.localeCompare(y, "tr"));
  const sozcuk = tiplerden([
    [4, () => { const w = []; for (const s of karistir(SOZ)) if (w.length < 5 && !w.some((x) => x[0] === s[0])) w.push(s); return sirala("Sözcükleri sözlük (alfabe) sırasına diz.", trS(w), "", ", "); }],
    [3, () => { const h = pick(["s", "b"]); const w = sec(SOZ.filter((x) => x[0] === h), 4); if (w.length < 3) return null; return sirala("İlk harfler aynı; ikinci ve üçüncü harflere bakarak sırala.", trS(w), "", ", "); }],
    [3, () => { const h = pick(HECE); return secim(`"${h.join("")}" sözcüğü nasıl hecelenir?`, h.join("-"), [h.join("").slice(0, 3) + "-" + h.join("").slice(3), h.join("").slice(0, 2) + "-" + h.join("").slice(2, 5) + "-" + h.join("").slice(5)].filter((x) => x !== h.join("-")), "Her hecede bir ünlü bulunur."); }],
    [2, () => { const w = sec(SOZ, 3); const d = trS(w)[2]; return secim("Sözlükte en son hangisi yer alır?", d, w.filter((x) => x !== d), ""); }],
    [2, () => { const h = pick(HECE); const sat = h.join(""); return secim(`"${sat}" sözcüğü satır sonuna sığmadı. Hangi bölme doğrudur?`, h[0] + "-" + h.slice(1).join(""), [sat.slice(0, h[0].length + 1) + "-" + sat.slice(h[0].length + 1), sat.slice(0, 1) + "-" + sat.slice(1)], "Satır sonunda sözcükler hecelerinden bölünür."); }]
  ]);

  // ---------- Eş / zıt / eş sesli ----------
  const ES = [["siyah", "kara"], ["cevap", "yanıt"], ["öğrenci", "talebe"], ["hediye", "armağan"], ["sınav", "imtihan"], ["doktor", "hekim"], ["akıllı", "zeki"], ["misafir", "konuk"], ["sözcük", "kelime"], ["yıl", "sene"], ["şehir", "kent"], ["fakir", "yoksul"], ["kuvvetli", "güçlü"], ["millet", "ulus"], ["vatan", "yurt"], ["cümle", "tümce"], ["özgür", "hür"], ["ihtiyar", "yaşlı"], ["rüya", "düş"], ["anı", "hatıra"], ["örnek", "misal"], ["görev", "vazife"], ["hayat", "yaşam"], ["neden", "sebep"]];
  const ZIT = [["büyük", "küçük"], ["sıcak", "soğuk"], ["kolay", "zor"], ["yeni", "eski"], ["ağır", "hafif"], ["kalın", "ince"], ["dolu", "boş"], ["temiz", "kirli"], ["erken", "geç"], ["cesur", "korkak"], ["almak", "vermek"], ["kazanmak", "kaybetmek"], ["cimri", "cömert"], ["çalışkan", "tembel"], ["barış", "savaş"], ["dost", "düşman"], ["güçlü", "zayıf"], ["sevinç", "üzüntü"]];
  const SES = [["Yüzünü yıkadı.", "yüz", "Surat"], ["Havuzda yüz.", "yüz", "Suda ilerlemek"], ["Yüz lira biriktirdi.", "yüz", "Bir sayı"], ["Bahçede gül açtı.", "gül", "Bir çiçek"], ["Üzülme, gül biraz.", "gül", "Gülmek"], ["Çay demlendi.", "çay", "Bir içecek"], ["Köyün yanından bir çay akıyor.", "çay", "Küçük akarsu"], ["Yaz tatili başladı.", "yaz", "Bir mevsim"], ["Adını deftere yaz.", "yaz", "Yazmak"], ["Dün akşam dolu yağdı.", "dolu", "Buz tanesi hâlinde yağış"], ["Bardak su dolu.", "dolu", "Boş olmayan"], ["Yağmurda saçlarım yaş oldu.", "yaş", "Islak"], ["Dedem yetmiş yaşında.", "yaş", "Yaşanan yıl"]];
  const anlamSesBag = tiplerden([
    [3, bankadan({ ciftler: ES, ciftSor: (a) => `"${a}" sözcüğünün eş anlamlısı hangisidir?`, ciftBaslik: "Eş anlamlıları eşleştir." })],
    [3, bankadan({ ciftler: ZIT, ciftSor: (a) => `"${a}" sözcüğünün zıt anlamlısı hangisidir?`, ciftBaslik: "Zıt anlamlıları eşleştir." })],
    [3, () => { const s = pick(SES); const yan = SES.filter((x) => x[1] === s[1] && x[2] !== s[2]).map((x) => x[2]).concat(["Bir hayvan", "Bir renk"]); return secim(`"${s[0]}" cümlesinde "${s[1]}" hangi anlamdadır?`, s[2], yan, "Eş sesli sözcüklerin yazılışı aynı, anlamı farklıdır."); }],
    [2, () => { const [a, b] = pick(ZIT); const e = sec(ES, 2); return secim("Hangi sözcük çifti zıt anlamlıdır?", `${a} - ${b}`, e.map((x) => `${x[0]} - ${x[1]}`), ""); }]
  ]);

  // ---------- Gerçek, mecaz, terim ----------
  const GMT = [
    ["Kardeşim çok tatlı bir çocuk.", "tatlı", "Mecaz"], ["Bu pasta çok tatlı olmuş.", "tatlı", "Gerçek"], ["Annemin kalbi çok yumuşaktır.", "yumuşak", "Mecaz"], ["Yastık çok yumuşak.", "yumuşak", "Gerçek"], ["Babam sert bir sesle konuştu.", "sert", "Mecaz"], ["Taş çok sert.", "sert", "Gerçek"], ["Kitabın sonu beni çok güldürdü, içim ısındı.", "ısınmak", "Mecaz"], ["Soba yanınca oda ısındı.", "ısınmak", "Gerçek"], ["Ali ağır bir söz söyledi.", "ağır", "Mecaz"], ["Çanta çok ağır.", "ağır", "Gerçek"],
    ["Üçgenin üç açısı vardır.", "açı", "Terim"], ["Kalbimiz kanı vücuda pompalar.", "kalp", "Gerçek"], ["Bu sayının paydası beştir.", "payda", "Terim"], ["Hücre canlıların en küçük yapı birimidir.", "hücre", "Terim"], ["Futbolda ofsayt kuralı vardır.", "ofsayt", "Terim"]
  ];
  const gercekMecaz = tiplerden([
    [5, () => { const g = pick(GMT); return secim(`"${g[0]}" cümlesinde "${g[1]}" sözcüğü hangi anlamda kullanılmıştır?`, g[2] + " anlam", ["Gerçek anlam", "Mecaz anlam", "Terim anlam"].filter((x) => x !== g[2] + " anlam"), g[2] === "Mecaz" ? "Sözcük ilk anlamından uzaklaşmış." : g[2] === "Terim" ? "Bir bilim, sanat ya da spor dalına özgü sözcük." : "Sözcük ilk (temel) anlamıyla kullanılmış."); }],
    [3, () => { const gr = sec(["Gerçek", "Mecaz"], 2); const og = []; gr.forEach((t, i) => sec(GMT.filter((x) => x[2] === t), 2).forEach((x) => og.push([x[0], i]))); return grupla("Cümleleri sözcüğün kullanıldığı anlama göre yerleştir.", gr.map((x) => x + " anlam"), karistir(og)); }],
    [1, () => dy("Bir sözcüğün akla gelen ilk anlamına gerçek anlam denir.", true)],
    [1, () => dy("Terim anlamlı sözcükler bilim, sanat ve spor alanlarına özgüdür.", true)]
  ]);

  // ---------- Atasözü, deyim ----------
  const ATA = [["Damlaya damlaya göl olur.", "Küçük birikimler zamanla büyür."], ["Bugünün işini yarına bırakma.", "İşler zamanında yapılmalıdır."], ["Ağaç yaşken eğilir.", "Eğitim küçük yaşta başlar."], ["Sakla samanı, gelir zamanı.", "Gereksiz görünen şey bir gün işe yarar."], ["Bir elin nesi var, iki elin sesi var.", "Birlikte çalışmak başarı getirir."], ["Tatlı dil yılanı deliğinden çıkarır.", "Güzel söz her kapıyı açar."], ["Ak akçe kara gün içindir.", "Zor günler için birikim yapılmalıdır."], ["Emek olmadan yemek olmaz.", "Kazanmak için çalışmak gerekir."], ["Komşu komşunun külüne muhtaçtır.", "Komşular birbirine yardım etmelidir."], ["Sabreden derviş muradına ermiş.", "Sabırlı olan isteğine kavuşur."], ["Bin işit, bir söyle.", "Çok dinleyip az konuşmalıyız."], ["Söz gümüşse sükût altındır.", "Gereksiz konuşmamak daha değerlidir."]];
  const DEY = [["Kulak vermek", "Dikkatle dinlemek"], ["Göz atmak", "Kısaca bakmak"], ["Ağzı kulaklarına varmak", "Çok sevinmek"], ["Burnu havada olmak", "Kendini beğenmek"], ["Dili tutulmak", "Şaşkınlıktan konuşamamak"], ["Kulak asmamak", "Önemsememek"], ["Eli açık olmak", "Cömert olmak"], ["İçi içine sığmamak", "Çok heyecanlanmak"], ["Pireyi deve yapmak", "Küçük bir şeyi büyütmek"], ["Ateş pahası", "Çok pahalı"], ["Etekleri zil çalmak", "Sevinçten coşmak"], ["Gözden düşmek", "Değerini kaybetmek"], ["Ayağını denk almak", "Dikkatli davranmak"]];
  const atasozu = tiplerden([
    [3, bankadan({ ciftler: ATA, ciftSor: (a) => `"${a}" atasözünün anlamı nedir?`, ciftBaslik: "Atasözünü anlamıyla eşleştir." })],
    [3, bankadan({ ciftler: DEY, ciftSor: (a) => `"${a}" deyiminin anlamı nedir?`, ciftSor2: (b) => `"${b}" anlamına gelen deyim hangisidir?`, ciftBaslik: "Deyimi anlamıyla eşleştir." })],
    [2, () => grupla("Atasözü mü, deyim mi?", ["Atasözü", "Deyim"], karistir([...sec(ATA, 3).map((x) => [x[0], 0]), ...sec(DEY, 3).map((x) => [x[0], 1])]), "Atasözleri genellikle öğüt veren yargı bildiren sözlerdir; deyimler bir durumu kalıplaşmış biçimde anlatır.")]
  ]);

  // ---------- Ad türleri ----------
  const adlar = tiplerden([
    [3, bankadan({ gruplar: { "Özel ad": ["Ankara", "Fatih Sultan Mehmet", "Karadeniz", "Türkiye", "Tekir (kedi)", "Kızılırmak", "Ağrı Dağı", "Elif"], "Cins ad": ["şehir", "padişah", "deniz", "ülke", "kedi", "ırmak", "dağ", "kız"] }, gruplaSoru: "Adları özel ve cins diye ayır.", buyukYok: true, grupSor: (g) => `Hangisi ${g === "Özel ad" ? "özel" : "cins"} addır?` })],
    [3, bankadan({ gruplar: { "Topluluk adı": ["ordu", "sürü", "orman", "aile", "takım", "dizi", "koro"], "Tekil ad": ["asker", "koyun", "ağaç", "anne", "oyuncu", "kitap", "şarkıcı"] }, gruplaSoru: "Topluluk adlarını ayır.", buyukYok: true, grupSor: (g) => g === "Topluluk adı" ? "Hangisi tekil olduğu hâlde bir topluluğu anlatır?" : "Hangisi topluluk adı değildir?" })],
    [2, () => { const w = pick(["kitap", "kalem", "çiçek", "ağaç", "kuş", "elma", "ev", "araba", "defter", "çocuk", "öğretmen", "okul"]); const ek = /[eiöü][^aeıioöuü]*$/.test(w) ? "ler" : "lar"; return secim(`"${w}" sözcüğünün çoğul hâli hangisidir?`, w + ek, [w + (ek === "ler" ? "lar" : "ler"), w + "ci"], "Çoğul eki -ler/-lar'dır."); }]
  ]);
  const SIFAT = [["Kırmızı elma çok lezzetliydi.", "kırmızı"], ["Uzun bir yolculuk yaptık.", "uzun"], ["Sınıfa yeni öğretmen geldi.", "yeni"], ["Çalışkan öğrenci ödül aldı.", "çalışkan"], ["Bahçede üç ağaç var.", "üç"], ["Yaşlı adam bankta oturuyordu.", "yaşlı"], ["Bu kalem senin mi?", "bu"], ["Soğuk su içtim.", "soğuk"], ["Kocaman bir balık tuttuk.", "kocaman"], ["Birkaç arkadaşım geldi.", "birkaç"]];
  const sifat = tiplerden([
    [4, () => { const s = pick(SIFAT); const w = s[0].replace(/[.?]/g, "").split(" ").filter((x) => x.toLocaleLowerCase("tr") !== s[1]); return secim(`"${s[0]}" cümlesinde varlığın özelliğini ya da sayısını bildiren sözcük hangisidir?`, s[1], sec(w, 2).map((x) => x.toLocaleLowerCase("tr")), "Varlıkları niteleyen ya da belirten sözcüklere sıfat denir."); }],
    [3, bankadan({ gruplar: { "Renk bildiren": ["mavi", "yeşil", "sarı", "mor"], "Biçim bildiren": ["yuvarlak", "kare", "uzun", "kıvırcık"], "Sayı bildiren": ["beş", "ikinci", "yarım", "üçer"] }, gruplaSoru: "Sözcükleri bildirdiği özelliğe göre ayır.", grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")} bir sözcüktür?` })],
    [2, () => dy("\"Mavi gökyüzü\" sözünde \"mavi\" varlığın rengini bildirir.", true)]
  ]);

  // ---------- Ekler, pekiştirme ----------
  const PEK = [["yeşil", "yemyeşil"], ["mavi", "masmavi"], ["sarı", "sapsarı"], ["temiz", "tertemiz"], ["kırmızı", "kıpkırmızı"], ["beyaz", "bembeyaz"], ["siyah", "simsiyah"], ["uzun", "upuzun"], ["sıcak", "sımsıcak"], ["dolu", "dopdolu"], ["yalnız", "yapayalnız"], ["kara", "kapkara"]];
  const ekler = tiplerden([
    [3, bankadan({ ciftler: PEK, ciftSor: (a) => `"${a}" sözcüğünün pekiştirilmiş hâli hangisidir?`, ciftBaslik: "Sözcüğü pekiştirilmiş hâliyle eşleştir." })],
    [3, () => { const t = pick([["göz", "gözlük", "-lük"], ["kitap", "kitaplık", "-lık"], ["süt", "sütçü", "-çü"], ["balık", "balıkçı", "-çı"], ["tuz", "tuzluk", "-luk"], ["göz", "gözcü", "-cü"], ["yaz", "yazar", "-ar"], ["sev", "sevgi", "-gi"], ["bil", "bilgi", "-gi"], ["çiçek", "çiçekçi", "-çi"]]); return secim(`"${t[0]}" sözcüğüne hangi ek getirilerek "${t[1]}" sözcüğü türetilmiştir?`, t[2], ["-ler", "-de", "-ı", t[2] === "-lük" ? "-çı" : "-lük"].filter((x) => x !== t[2]), "Yeni anlamlı sözcük türeten eklere yapım eki denir."); }],
    [2, () => { const t = pick(["sütçü", "kitaplık", "gözlük", "balıkçı", "çiçekçi", "tuzluk", "bilgili", "evcil"]); return secim("Hangisi yapım eki almış bir sözcüktür?", t, ["kitaplar", "evde", "okula", "kalemi"], "Çoğul, hâl ve iyelik ekleri yeni sözcük türetmez."); }],
    [2, () => dy("\"Yemyeşil\" sözcüğü anlamı güçlendirilmiş (pekiştirilmiş) bir sözcüktür.", true)]
  ]);

  // ---------- Cümle bilgisi ----------
  const CUM = ["Annem bize sıcak bir çorba yaptı.", "Öğrenciler bahçede top oynuyor.", "Dedem her sabah yürüyüşe çıkar.", "Kütüphaneden ilginç bir kitap aldım.", "Bilim insanları yeni bir gezegen keşfetti.", "Kış gelince kuşlar göç eder.", "Takımımız maçı farklı kazandı."];
  const cumle = tiplerden([
    [3, () => { const c = pick(CUM); return sirala("Sözcükleri sıralayarak anlamlı ve kurallı bir cümle oluştur.", c.split(" ")); }],
    [3, bankadan({ gruplar: { "Olumlu cümle": ["Bugün okula gittim.", "Kitabı bitirdim.", "Hava çok güzel.", "Ödevimi yaptım."], "Olumsuz cümle": ["Bugün okula gitmedim.", "Kitabı bitiremedim.", "Hava hiç güzel değil.", "Ödevimi yapmadım."], "Soru cümlesi": ["Okula gittin mi?", "Kitabı bitirdin mi?", "Hava nasıl?", "Ödevini yaptın mı?"] }, gruplaSoru: "Cümleleri türlerine göre yerleştir.", grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")}dir?` })],
    [2, () => { const c = pick(CUM); const n = c.split(" ").length; return secim(`"${c}" cümlesi kaç sözcükten oluşur?`, n, [n + 1, n - 1], ""); }],
    [2, () => { const t = pick([["Kitabı okudum.", "Kitabı okumadım."], ["Ali geldi.", "Ali gelmedi."], ["Su soğuk.", "Su soğuk değil."], ["Parka gideceğiz.", "Parka gitmeyeceğiz."]]); return secim(`"${t[0]}" cümlesinin olumsuz hâli hangisidir?`, t[1], [t[0].replace(".", " mi?"), t[0].replace(".", "!")], ""); }]
  ]);

  // ---------- Cümlede anlam ----------
  const SS = [["Yağmur yağdığı için", "maç ertelendi"], ["Çok çalıştığı için", "sınavı kazandı"], ["Kar yağdığı için", "okullar tatil oldu"], ["Erken yattığı için", "dinç uyandı"], ["Dişlerini fırçalamadığı için", "dişi çürüdü"], ["Hava soğuk olduğu için", "montunu giydi"]];
  const AMAC = [["Sınavı kazanmak için", "çok çalıştı"], ["Spor yapmak için", "parka gitti"], ["Ekmek almak için", "fırına uğradı"], ["Kitap okumak için", "kütüphaneye gitti"]];
  const ON = { "Nesnel (kanıtlanabilir)": ["Türkiye'nin başkenti Ankara'dır.", "Su 100 derecede kaynar.", "Bir hafta yedi gündür.", "Okulumuzda 600 öğrenci var.", "Ağrı Dağı Türkiye'nin en yüksek dağıdır."], "Öznel (kişisel görüş)": ["En güzel mevsim ilkbahardır.", "Bu film çok sıkıcıydı.", "Matematik en eğlenceli derstir.", "Ankara çok güzel bir şehir.", "Bence en lezzetli meyve çilektir."] };
  const cumledeAnlam = tiplerden([
    [3, () => { const [s, n] = pick(SS); return secim(`"${s} ${n}." cümlesinde sonuç hangisidir?`, buyuk(n), [buyuk(s), buyuk(pick(SS.filter((x) => x[0] !== s))[1])], `Sebep: ${s}`); }],
    [2, () => { const [a, n] = pick(AMAC); const [s2, n2] = pick(SS); return secim("Hangisi amaç-sonuç cümlesidir?", `${a} ${n}.`, [`${s2} ${n2}.`, "Bugün hava çok güzel."], "Amaç-sonuç cümlesinde yapılan iş bir amaca ulaşmak içindir; sebep-sonuçta ise bir olay diğerinin nedenidir."); }],
    [4, bankadan({ gruplar: ON, gruplaSoru: "Cümleleri nesnel ve öznel diye ayır.", grupSor: (g) => g.startsWith("Nesnel") ? "Hangisi nesnel (kanıtlanabilir) bir yargıdır?" : "Hangisi öznel (kişisel görüş) bir yargıdır?" })],
    [2, bankadan({ gruplar: { "Gerçek": ["Arılar bal yapar.", "Ay, Dünya'nın etrafında döner.", "Kışın kar yağar."], "Hayal ürünü": ["Kedi kitap okudu.", "Bulutlar şarkı söyledi.", "Ağaç ayağa kalkıp yürüdü."] }, grupSor: (g) => g === "Gerçek" ? "Hangisi gerçek hayatta olabilir?" : "Hangisi hayal ürünüdür?" })]
  ]);

  // ---------- Metin türleri ----------
  const metinTurleri = bankadan({
    sorular: [["Olayların hayal ürünü olduğu, \"Bir varmış bir yokmuş\" diye başlayan metin türü hangisidir?", "Masal", ["Şiir", "Bilgilendirici metin"]], ["Hayvanların konuşturularak ders verildiği kısa öyküye ne denir?", "Fabl", ["Anı", "Mektup"]], ["Dizelerden ve kıtalardan oluşan metin türü hangisidir?", "Şiir", ["Hikâye", "Haber"]], ["Bir konuda doğru bilgi veren, kanıtlanabilir bilgiler içeren metin hangisidir?", "Bilgilendirici metin", ["Masal", "Fabl"]], ["Uzaktaki birine duygu ve düşüncelerimizi yazdığımız metin türü hangisidir?", "Mektup", ["Masal", "Şiir"]], ["Kişinin başından geçen olayları anlattığı metin türü hangisidir?", "Anı", ["Fabl", "Haber"]], ["Bir etkinliğe davet etmek için yazılan kısa metne ne denir?", "Davetiye", ["Şiir", "Masal"]]],
    ciftler: [["Masal", "Bir varmış bir yokmuş"], ["Şiir", "Dize ve kıta"], ["Fabl", "Konuşan hayvanlar ve ders"], ["Haber", "Güncel olay"], ["Mektup", "Sevgili dostum, ..."], ["Bilmece", "Bil bakalım ne?"]], ciftBaslik: "Metin türünü özelliğiyle eşleştir.",
    dy: { d: ["Şiirde her satıra dize denir.", "Masallarda olağanüstü olaylar anlatılır."], y: [["Bilgilendirici metinlerde hayal ürünü olaylar anlatılır.", "Bilgilendirici metinler gerçek bilgiler verir."]] }
  });

  // ---------- Konu, ana fikir; hikâye unsurları ----------
  const PAR = [
    { m: "Selin her gün kütüphaneye gidip bir kitap seçiyordu. Okudukça kelime hazinesi genişledi, kompozisyonları güzelleşti. Öğretmeni onun yazılarını sınıfa örnek olarak okumaya başladı.", k: "Kitap okumanın faydaları", af: "Kitap okumak insanın kendini ifade etme becerisini geliştirir.", y: ["Kütüphaneler sessiz yerlerdir.", "Öğretmenler kompozisyon okur."] },
    { m: "Mahalledeki çocuklar parkı temizlemek için bir araya geldi. Kimi çöp topladı, kimi çiçek dikti. Akşam olduğunda park pırıl pırıldı ve herkes bu emeğin tadını çıkardı.", k: "Parkı temizleme", af: "Birlikte çalışmak güzel sonuçlar doğurur.", y: ["Çiçekler akşam açar.", "Parklar sadece çocuklar içindir."] },
    { m: "Emre spor yapmayı hiç sevmezdi. Doktoru ona her gün yarım saat yürümesini önerdi. Birkaç ay sonra Emre hem daha enerjik hissetti hem de derslerine daha iyi odaklandı.", k: "Düzenli spor", af: "Düzenli spor beden ve zihin sağlığımızı korur.", y: ["Doktorlar yürümeyi sevmez.", "Spor sadece sporcular içindir."] },
    { m: "Zeynep doğum gününde aldığı harçlığın bir kısmını kumbarasına attı. Aylar sonra biriktirdiği parayla depremzede çocuklara kitap gönderdi. Çocukların teşekkür mektupları onu çok mutlu etti.", k: "Biriktirip paylaşmak", af: "Paylaşmak insanı mutlu eder.", y: ["Kumbaralar çok pahalıdır.", "Mektup yazmak zordur."] },
    { m: "Kerem matematik sınavından düşük not aldı. Üzüldü ama pes etmedi. Her gün biraz soru çözdü, anlamadıklarını öğretmenine sordu. Bir sonraki sınavda notu çok yükseldi.", k: "Kerem'in matematik çalışması", af: "Düzenli ve azimli çalışmak başarıyı getirir.", y: ["Sınavlar her zaman zordur.", "Öğretmenler soru sormayı sevmez."] },
    { m: "Kış gelmeden önce sincaplar ceviz ve fındık toplar. Topladıklarını ağaç kovuklarına saklarlar. Kar yağıp yiyecek bulmak zorlaşınca bu saklı yiyeceklerle beslenirler.", k: "Sincapların kışa hazırlığı", af: "Geleceği düşünerek hazırlık yapmak önemlidir.", y: ["Sincaplar kışın uyumaz.", "Fındık en lezzetli yemiştir."] },
    { m: "Kemal'in dedesi eski bir saatçiydi. Kemal ona yardım ederken her parçanın önemli olduğunu öğrendi. Küçük bir dişli bile eksik olsa saat çalışmıyordu.", k: "Saat tamiri", af: "Bir bütünü oluşturan her parça önemlidir.", y: ["Saatçilik zor bir meslektir.", "Dedeler eski eşyaları sever."] }
  ];
  const anaFikir = tiplerden([
    [3, () => { const p = pick(PAR); return secim("Bu metnin ana fikri nedir?", p.af, p.y, "Ana fikir metinde verilmek istenen temel mesajdır.", { gorsel: kutu(p.m), balonYok: true }); }],
    [3, () => { const p = pick(PAR); return secim("Bu metnin konusu nedir?", p.k, PAR.filter((x) => x !== p).map((x) => x.k), "Konu, metinde neyin anlatıldığıdır.", { gorsel: kutu(p.m), balonYok: true }); }],
    [1, () => secim("Metnin \"neden bahsettiği\" sorusunun cevabı neyi verir?", "Konuyu", ["Ana fikri", "Başlığı"], "")]
  ]);
  const HK = [
    { m: "Geçen yaz Ayşe, ailesiyle birlikte Kapadokya'ya gitti. Sabah erkenden sıcak hava balonuna bindiler. Balon yükseldikçe peri bacaları küçüldü. Ayşe bu manzarayı hiç unutmayacağını söyledi.", s: [["Olay ne zaman geçiyor?", "Geçen yaz", ["Kış tatilinde", "Dün akşam"]], ["Olay nerede geçiyor?", "Kapadokya'da", ["Antalya'da", "Okulda"]], ["Hikâyenin kahramanı kim?", "Ayşe", ["Pilot", "Öğretmen"]], ["Ayşe neye bindi?", "Sıcak hava balonuna", ["Trene", "Gemiye"]]] },
    { m: "Pazartesi sabahı okulda bilim fuarı vardı. Can, güneş enerjisiyle çalışan küçük bir araba yapmıştı. Araba güneş görünce yürümeye başladı. Jüri, Can'ın projesine birincilik ödülü verdi.", s: [["Bilim fuarı ne zaman yapıldı?", "Pazartesi sabahı", ["Cuma akşamı", "Yaz tatilinde"]], ["Can ne yapmıştı?", "Güneş enerjili araba", ["Robot köpek", "Uçurtma"]], ["Araba ne zaman yürüdü?", "Güneş görünce", ["Pil takılınca", "Rüzgâr esince"]], ["Can hangi ödülü aldı?", "Birincilik ödülü", ["Katılım belgesi", "İkincilik ödülü"]]] }
  ];
  const hikayeUnsur = tiplerden([
    [4, () => { const t = pick(HK), q = pick(t.s); return secim(q[0], q[1], q[2], "5N1K: Ne, Nerede, Ne zaman, Nasıl, Neden, Kim", { gorsel: kutu(t.m), balonYok: true }); }],
    [3, () => eslestir("Hikâye unsurunu sorusuyla eşleştir.", sec([["Kişiler", "Kim?"], ["Yer", "Nerede?"], ["Zaman", "Ne zaman?"], ["Olay", "Ne oldu?"]], 4))],
    [2, () => secim("Hikâyede olayın geçtiği yere ne denir?", "Yer (mekân)", ["Zaman", "Kahraman"], "Hikâye unsurları: olay, kişiler, yer ve zaman.")]
  ]);

  // ---------- Noktalama, yazım ----------
  const NOK = [["Annem pazardan elma⬜ armut ve muz aldı.", ",", "Sıralı sözcükler virgülle ayrılır."], ["Bu kitabı kim yazdı⬜", "?", "Soru cümlesi"], ["Eyvah, otobüsü kaçırdık⬜", "!", "Şaşkınlık"], ["Okul 08.30⬜da başlar.", "'", "Rakamla yazılan sayılara gelen ekler kesme ile ayrılır."], ["İzmir⬜e gittik.", "'", "Özel adlara gelen ekler kesme ile ayrılır."], ["Çantama şunları koydum⬜ kalem, silgi, defter.", ":", "Açıklama ya da örnek verilecekse iki nokta konur."], ["Öğretmen⬜ \"Sessiz olun.\" dedi.", ":", "Konuşma çizgisi ve tırnaktan önce iki nokta konur."], ["Kitabın adı ⬜Küçük Prens⬜ idi.", "\"", "Eser adları ve aktarılan sözler tırnak içinde yazılır."], ["Ankara⬜İstanbul yolu çok uzun.", "-", "Arasında ilgi bulunan sözcükler kısa çizgi ile ayrılır."], ["Bugün hava çok güzel⬜", ".", "Bildiren cümlelerin sonuna nokta konur."]];
  const AD = { ".": "Nokta (.)", ",": "Virgül (,)", "?": "Soru işareti (?)", "!": "Ünlem (!)", "'": "Kesme işareti (')", ":": "İki nokta (:)", "\"": "Tırnak işareti (\")", "-": "Kısa çizgi (-)" };
  const noktalama = tiplerden([
    [6, () => { const n = pick(NOK); return secim(`Kutuya hangi işaret gelmelidir? "${n[0]}"`, AD[n[1]], sec(Object.keys(AD).filter((x) => x !== n[1]), 2).map((x) => AD[x]), n[2], { balonYok: true }); }],
    [2, () => eslestir("Noktalama işaretini kullanım yeriyle eşleştir.", sec([["Virgül", "Sıralı sözcükler arasında"], ["İki nokta", "Örnek verilmeden önce"], ["Kesme işareti", "Özel ada gelen ekten önce"], ["Tırnak işareti", "Aktarılan sözün başında ve sonunda"], ["Ünlem", "Sevinç ya da korku bildiren cümle sonunda"]], 4))]
  ]);
  const yazim = tiplerden([
    [3, () => { const d = pick([["Sen de gel.", "Sende gel."], ["Ben de biliyorum.", "Bende biliyorum."], ["Kitap çantamda.", "Kitap çantam da."], ["Okulda çok eğlendik.", "Okul da çok eğlendik."]]); return secim("Hangisinin yazımı doğrudur?", d[0], [d[1], d[0].toLocaleLowerCase("tr")], "Bağlaç olan de/da ayrı, bulunma eki -de/-da bitişik yazılır.", { balonYok: true }); }],
    [3, () => { const d = pick([["Duydum ki gelmişsin.", "Duydumki gelmişsin."], ["Evdeki kitap bu.", "Evde ki kitap bu."], ["Bilmem ki ne yapsam?", "Bilmemki ne yapsam?"], ["Yarınki maç önemli.", "Yarın ki maç önemli."]]); return secim("Hangisinin yazımı doğrudur?", d[0], [d[1], d[0].replace(".", "!")], "Bağlaç olan ki ayrı, sıfat yapan -ki eki bitişik yazılır.", { balonYok: true }); }],
    [2, () => { const d = pick([["Geldin mi?", "Geldinmi?"], ["Okul büyük mü?", "Okul büyükmü?"], ["Kitap senin mi?", "Kitap seninmi?"]]); return secim("Hangisinin yazımı doğrudur?", d[0], [d[1], d[0].replace(/ m[iıuü]\?/, " mu?") === d[0] ? d[0].replace(/ m[iıuü]\?/, " mı?") : d[0].replace(/ m[iıuü]\?/, " mu?")], "Soru eki mi ayrı yazılır ve önceki sözcüğe uyar."); }],
    [2, () => { const d = pick([["Türkiye Büyük Millet Meclisi", "TBMM"], ["Türk Standartları Enstitüsü", "TSE"], ["kilogram", "kg"], ["santimetre", "cm"], ["Türk Dil Kurumu", "TDK"]]); return secim(`"${d[0]}" ifadesinin kısaltması hangisidir?`, d[1], ["TC", "km", "TRT", "lt"].filter((x) => x !== d[1]), ""); }],
    [1, () => dy("Cümleler ve özel adlar büyük harfle başlar.", true)]
  ]);

  // ---------- Görsel okuma, okuduğunu anlama ----------
  const gorsel = tiplerden([
    [3, () => { const v = [["Pazartesi", r(10, 40)], ["Salı", r(10, 40)], ["Çarşamba", r(10, 40)], ["Perşembe", r(10, 40)]]; const mx = Math.max(...v.map((x) => x[1])); if (v.filter((x) => x[1] === mx).length > 1) return null; const d = v.find((x) => x[1] === mx)[0]; return secim("Grafiğe göre Deniz en çok sayfayı hangi gün okumuştur?", d, v.filter((x) => x[0] !== d).map((x) => x[0]), "", { gorsel: OYUN.grafikHTML(v, "Deniz'in okuduğu sayfa sayısı") }); }],
    [3, () => { const t = pick([["🚭", "Sigara içilmez"], ["♿", "Engelli erişimine uygun"], ["🚮", "Çöpünü çöp kutusuna at"], ["📵", "Telefon kullanmak yasak"], ["🚸", "Okul geçidi, dikkat"], ["🔇", "Sessiz olun"]]); return secim("Bu işaret ne anlatıyor?", t[1], ["Fotoğraf çekilebilir", "Koşabilirsiniz", "Müzik açın"], "", { gorsel: `<div style="font-size:100px">${t[0]}</div>` }); }],
    [2, () => secim("Bir afişte en dikkat çekici olması gereken bölüm hangisidir?", "Başlık ve ana görsel", ["Küçük dipnotlar", "Sayfa numarası"], "")]
  ]);
  const OKUMA = [
    { m: "Bal arıları kovanlarda büyük bir düzen içinde yaşar. Kraliçe arı yumurta yumurtlar. İşçi arılar çiçeklerden nektar toplar, kovanı temizler ve yavrulara bakar. Bir kovanda binlerce arı birlikte çalışır.", s: [["Kovanda yumurtayı kim yumurtlar?", "Kraliçe arı", ["İşçi arı", "Erkek arı"]], ["İşçi arıların görevlerinden biri hangisidir?", "Nektar toplamak", ["Yumurtlamak", "Uyumak"]], ["Metnin konusu nedir?", "Bal arılarının düzeni", ["Çiçek çeşitleri", "Arı sokması"]]] },
    { m: "Yunuslar denizlerde yaşayan zeki memelilerdir. Balık gibi görünseler de akciğerleriyle solunum yaparlar ve nefes almak için su yüzeyine çıkarlar. Birbirleriyle ıslığa benzeyen seslerle iletişim kurarlar.", s: [["Yunuslar nasıl solunum yapar?", "Akciğerleriyle", ["Solungaçlarıyla", "Deri ile"]], ["Yunuslar neden su yüzeyine çıkar?", "Nefes almak için", ["Uyumak için", "Avlanmak için"]], ["Yunuslar nasıl iletişim kurar?", "Islığa benzeyen seslerle", ["Renk değiştirerek", "Hiç iletişim kurmazlar"]]] },
    { m: "Ali, okul gazetesinde muhabirlik yapıyordu. Bu ay okulun eski öğretmenlerinden Hasan Bey ile röportaj yaptı. Hasan Bey otuz yıl önce okulun bahçesine diktiği çınarı anlattı. Haber gazetenin ilk sayfasında yayımlandı.", s: [["Ali okul gazetesinde ne yapıyordu?", "Muhabirlik", ["Fotoğrafçılık", "Editörlük"]], ["Hasan Bey kimdir?", "Okulun eski öğretmeni", ["Okulun müdürü", "Ali'nin dedesi"]], ["Hasan Bey neyi anlattı?", "Diktiği çınarı", ["Eski sınavları", "Okulun binasını"]]] },
    { m: "Fatma Teyze her sabah pazara gider. Taze sebzeleri seçer, fiyatlarını karşılaştırır. Alışverişini bez çantasına koyar, plastik poşet kullanmaz. Eve dönünce sebzeleri yıkayıp yerleştirir.", s: [["Fatma Teyze nereye gider?", "Pazara", ["Okula", "Hastaneye"]], ["Fatma Teyze alışverişini neye koyar?", "Bez çantaya", ["Plastik poşete", "Karton kutuya"]], ["Fatma Teyze'nin hangi davranışı çevreyi korur?", "Plastik poşet kullanmaması", ["Pazara gitmesi", "Sebzeleri yıkaması"]]] }
  ];
  const okuma = () => { const t = pick(OKUMA), q = pick(t.s); return secim(q[0], q[1], q[2], "Cevap metinde.", { gorsel: kutu(t.m), balonYok: true }); };

  const K = (id, ad, ikon, uret, bilgi) => ({ id, ad, ikon, uret, bilgi });
  DERS.turkce = {
    ad: "Türkçe", ikon: "📖", renk: "#ef476f",
    temalar: [
      { id: "tt1", ad: "Erdemler", konular: [
        K("t1", "Sözcük Bilgisi ve Alfabe", "🔤", sozcuk, [["🔤", "Alfabemizde 29 harf vardır."], ["📚", "Sözlükte sözcükler alfabetik sıradadır; ilk harfler aynıysa sonraki harflere bakılır."], ["✂️", "Satır sonuna sığmayan sözcük heceden bölünür ve kısa çizgi konur."]]),
        K("t2", "Eş, Zıt ve Eş Sesli Sözcükler", "👯", anlamSesBag, [["👯", "Eş anlamlı: yazılışı farklı, anlamı aynı (vatan = yurt)."], ["☯️", "Zıt anlamlı: anlamca karşıt (cimri ↔ cömert)."], ["🌹", "Eş sesli: yazılışı aynı, anlamı farklı (yüz: surat / sayı / yüzmek)."]])
      ] },
      { id: "tt2", ad: "Millî Mücadele ve Atatürk", konular: [
        K("t3", "Gerçek, Mecaz ve Terim Anlam", "🎭", gercekMecaz, [["📘", "Gerçek anlam: sözcüğün akla gelen ilk anlamı (tatlı pasta)."], ["🎭", "Mecaz anlam: ilk anlamından uzaklaşmış anlam (tatlı çocuk)."], ["🔬", "Terim anlam: bilim, sanat, spora özgü anlam (açı, payda, ofsayt)."]]),
        K("t4", "Atasözleri ve Deyimler", "📜", atasozu, [["📜", "Atasözleri atalarımızın deneyimleriyle oluşmuş öğüt veren sözlerdir."], ["💬", "Deyimler bir durumu kalıplaşmış, etkili biçimde anlatır."], ["👂", "\"Kulak vermek\" dikkatle dinlemek demektir."]])
      ] },
      { id: "tt3", ad: "Millî Kültürümüz", konular: [
        K("t5", "Adlar (İsimler)", "🏷️", adlar, [["👑", "Özel ad tek bir varlığın adıdır, büyük harfle başlar."], ["📦", "Cins ad aynı türden varlıkların ortak adıdır."], ["👥", "Topluluk adı tekil olduğu hâlde bir topluluğu anlatır: ordu, sürü."], ["➕", "Çoğul eki -ler/-lar'dır."]]),
        K("t6", "Varlıkların Özelliğini Bildiren Sözcükler", "🎨", sifat, [["🎨", "Varlıkların rengini, biçimini, durumunu bildiren sözcükler vardır: mavi araba."], ["🔢", "Sayısını bildirenler: üç kalem, ikinci sıra."], ["👉", "Yerini gösterenler: bu kalem, şu ağaç."]])
      ] },
      { id: "tt4", ad: "Vatandaşlık", konular: [
        K("t7", "Ekler ve Pekiştirmeli Sözcükler", "🧩", ekler, [["🧩", "Yapım ekleri yeni sözcük türetir: göz → gözlük."], ["🔗", "Çekim ekleri sözcüğün anlamını değiştirmez: kitap → kitaplar."], ["💪", "Pekiştirme anlamı güçlendirir: yeşil → yemyeşil."]]),
        K("t8", "Cümle Bilgisi", "🧱", cumle, [["🧱", "Kurallı cümlede yüklem sondadır."], ["➕", "Olumlu cümle işin yapıldığını, olumsuz cümle yapılmadığını bildirir."], ["❓", "Soru cümleleri soru işaretiyle biter."]])
      ] },
      { id: "tt5", ad: "Bilim ve Teknoloji", konular: [
        K("t9", "Cümlede Anlam", "🔗", cumledeAnlam, [["🔗", "Sebep-sonuç: bir olay diğerinin nedenidir."], ["🎯", "Amaç-sonuç: iş bir amaca ulaşmak için yapılır."], ["📏", "Nesnel yargı kanıtlanabilir; öznel yargı kişisel görüştür."]]),
        K("t10", "Metin Türleri", "📚", metinTurleri, [["🧚", "Masal: olağanüstü olaylar, \"Bir varmış bir yokmuş\"."], ["🦊", "Fabl: konuşan hayvanlarla ders veren kısa öykü."], ["🖋️", "Şiir: dize ve kıtalardan oluşur."], ["📰", "Bilgilendirici metin: gerçek bilgiler verir."]])
      ] },
      { id: "tt6", ad: "Sağlık ve Spor", konular: [
        K("t11", "Konu ve Ana Fikir", "💡", anaFikir, [["❓", "Konu: metin neyi anlatıyor?"], ["💡", "Ana fikir: metin bize hangi mesajı veriyor?"], ["🏷️", "Başlık konuyu kısaca yansıtmalıdır."]]),
        K("t12", "Hikâye Unsurları ve 5N1K", "🕵️", hikayeUnsur, [["🎬", "Hikâye unsurları: olay, kişiler, yer ve zaman."], ["❓", "5N1K: Ne, Nerede, Ne zaman, Nasıl, Neden, Kim?"], ["🦸", "Olayları yaşayan kişilere kahraman denir."]])
      ] },
      { id: "tt7", ad: "Doğa ve Evren", konular: [
        K("t13", "Noktalama İşaretleri", "❗", noktalama, [["🔸", "Virgül sıralı sözcükleri ayırır."], ["➗", "İki nokta: örnek ve açıklamadan önce."], ["✒️", "Kesme işareti: özel adlara ve rakamlara gelen eklerden önce."], ["❝", "Tırnak işareti: aktarılan sözler ve eser adları."], ["➖", "Kısa çizgi: arasında ilgi olan sözcükler (Ankara-İstanbul)."]]),
        K("t14", "Yazım Kuralları", "✍️", yazim, [["🔗", "Bağlaç olan \"de, ki\" ayrı yazılır: Sen de gel."], ["📍", "Ek olan -de, -ki bitişik yazılır: evde, evdeki."], ["❓", "Soru eki mi ayrı yazılır."], ["🔤", "Kısaltmalar: TBMM, TSE, kg, cm"]])
      ] },
      { id: "tt8", ad: "Sanat", konular: [
        K("t15", "Görsel ve Grafik Okuma", "📊", gorsel, [["📊", "Grafikler bilgileri kısa yoldan gösterir."], ["🚸", "İşaretler ve simgeler bize mesaj verir."], ["🖼️", "Afişte başlık ve görsel dikkat çekmelidir."]]),
        K("t16", "Okuduğunu Anlama", "👀", tiplerden([[5, okuma], [2, () => { const t = pick(OKUMA); return dy(t.m.split(". ")[0] + ".", true, "Bu bilgi metinde var."); }]]), [["👀", "Metni dikkatle oku, önemli yerleri belirle."], ["❓", "Soruların cevabını metinden bul."], ["🔁", "Emin olamadığında metne geri dön."]])
      ] }
    ]
  };
})();
