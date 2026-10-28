// 5. sınıf (6. sınıfla ortak bankalar) Türkçe soru üreteçleri (ortak-uretec.js'ten sonra yüklenir)
(function () {
  const U = window.URETEC, { r, pick, karistir, buyuk, soru, tiplerden, eslestir, siniflandir, ifadeler } = window.UR;

  // ---------- Gerçek / mecaz / terim ----------
  // [cümle, sözcük, tür]
  const ANLAM = [
    ["Kışın ellerim çok soğuk oluyor.", "soğuk", "gerçek"], ["Bana karşı çok soğuk davrandı.", "soğuk", "mecaz"],
    ["Fırından çıkan tatlı pastayı yedik.", "tatlı", "gerçek"], ["Annemin tatlı sesiyle uyandım.", "tatlı", "mecaz"],
    ["Ağır çantayı zorlukla taşıdı.", "ağır", "gerçek"], ["Arkadaşına çok ağır sözler söyledi.", "ağır", "mecaz"],
    ["Keskin bıçakla ekmeği dilimledi.", "keskin", "gerçek"], ["Keskin zekâsıyla herkesi şaşırttı.", "keskin", "mecaz"],
    ["Sıcak çorba içimizi ısıttı.", "sıcak", "gerçek"], ["Bizi çok sıcak bir şekilde karşıladılar.", "sıcak", "mecaz"],
    ["Yere düşen bardak kırıldı.", "kırıldı", "gerçek"], ["Söylediklerine çok kırıldım.", "kırıldım", "mecaz"],
    ["Bahçedeki kuyu çok derindi.", "derin", "gerçek"], ["Yorgunluktan derin bir uykuya daldı.", "derin", "mecaz"],
    ["Acı biberi yiyince gözlerim yaşardı.", "acı", "gerçek"], ["Acı haberi duyunca hepimiz üzüldük.", "acı", "mecaz"],
    ["Taş duvar yıllara meydan okuyordu.", "taş", "gerçek"], ["O kadar taş kalpli ki kimseye acımaz.", "taş", "mecaz"],
    ["Bu sabah çok erken kalktım.", "kalktım", "gerçek"], ["Kardeşim yemekten sonra masadan kalktı.", "kalktı", "gerçek"],
    ["Bu haber hepimizi derinden sarstı.", "sarstı", "mecaz"], ["Deprem bütün binayı sarstı.", "sarstı", "gerçek"],
    ["Üçgenin iç açıları toplamı 180 derecedir.", "açı", "terim"], ["Hücre, canlıların en küçük yapı birimidir.", "hücre", "terim"],
    ["Oyuncu penaltıyı gole çevirdi.", "penaltı", "terim"], ["Cümlenin öznesini bulunuz.", "özne", "terim"],
    ["Kesrin paydası sıfır olamaz.", "payda", "terim"], ["Mıknatısın iki kutbu vardır.", "kutup", "terim"],
    ["Paragrafın ana düşüncesini yazınız.", "ana düşünce", "terim"], ["Ressam tuvaline önce astar boya sürdü.", "astar", "terim"]
  ];
  const ANLAM_AD = { gerçek: "gerçek anlamda", mecaz: "mecaz anlamda", terim: "terim anlamda" };
  U.tr1k1 = tiplerden([
    () => { const [c, s, t] = pick(ANLAM); return soru(`"${c}" cümlesinde "${s}" sözcüğü hangi anlamda kullanılmıştır?`, buyuk(ANLAM_AD[t].replace("anlamda", "anlam")), ["Gerçek anlam", "Mecaz anlam", "Terim anlam", "Zıt anlam", "Eş anlam"], `"${s}" sözcüğü bu cümlede ${ANLAM_AD[t]} kullanılmıştır.`); },
    () => { const isaretle = (c, s) => c.replace(new RegExp(s, "i"), '"$&"'); const t = pick(["gerçek", "mecaz", "terim"]), [c, s] = pick(ANLAM.filter((x) => x[2] === t)); return soru(`Hangi cümlede tırnak içindeki sözcük ${ANLAM_AD[t]} kullanılmıştır?`, isaretle(c, s), ANLAM.filter((x) => x[2] !== t).map(([c2, s2]) => isaretle(c2, s2)), `"${s}" sözcüğü bu cümlede ${ANLAM_AD[t]} kullanılmıştır.`); }
  ]);

  // ---------- Eş / zıt / eş sesli ----------
  const ES = [["siyah", "kara"], ["beyaz", "ak"], ["kırmızı", "al"], ["yaşlı", "ihtiyar"], ["cevap", "yanıt"], ["okul", "mektep"], ["soru", "sual"], ["sınav", "imtihan"], ["misafir", "konuk"], ["ırmak", "nehir"], ["doktor", "hekim"], ["yurt", "vatan"], ["hediye", "armağan"], ["akıl", "us"], ["şehir", "kent"], ["yıl", "sene"], ["örnek", "misal"], ["özgür", "hür"], ["fakir", "yoksul"], ["kalp", "yürek"], ["istek", "arzu"], ["rüya", "düş"], ["neden", "sebep"], ["sözcük", "kelime"], ["isim", "ad"], ["ihtiyaç", "gereksinim"], ["ayrıntı", "detay"], ["olanak", "imkân"], ["anı", "hatıra"], ["çaba", "gayret"], ["kural", "kaide"], ["savaş", "harp"], ["ilgi", "alaka"], ["deneme", "tecrübe"]];
  const ZIT = [["büyük", "küçük"], ["uzun", "kısa"], ["sıcak", "soğuk"], ["açık", "kapalı"], ["iyi", "kötü"], ["gelmek", "gitmek"], ["almak", "vermek"], ["aşağı", "yukarı"], ["ön", "arka"], ["erken", "geç"], ["kolay", "zor"], ["hızlı", "yavaş"], ["ağır", "hafif"], ["eski", "yeni"], ["genç", "yaşlı"], ["dolu", "boş"], ["ince", "kalın"], ["zengin", "fakir"], ["gündüz", "gece"], ["ıslak", "kuru"], ["doğru", "yanlış"], ["güzel", "çirkin"], ["yakın", "uzak"], ["sevinç", "üzüntü"], ["cesur", "korkak"], ["alçak", "yüksek"], ["girmek", "çıkmak"], ["ileri", "geri"], ["tembel", "çalışkan"], ["kirli", "temiz"], ["acı", "tatlı"], ["sert", "yumuşak"], ["karanlık", "aydınlık"]];
  const ESSES = [
    ["yüz", [["sayı", "Kitabın yüz sayfasını bir günde okudum."], ["insan yüzü", "Sabah kalkınca yüzümü yıkadım."], ["yüzmek eylemi", "Denizde biraz daha yüz, sonra çık."]]],
    ["çay", [["içecek", "Kahvaltıda bir bardak çay içtim."], ["küçük akarsu", "Çay kenarında piknik yaptık."]]],
    ["gül", [["çiçek", "Bahçede kırmızı bir gül açmış."], ["gülmek eylemi", "Biraz gül, her şey düzelecek."]]],
    ["dolu", [["yağış", "Gece yağan dolu arabaların camını kırdı."], ["boş olmayan", "Bardak ağzına kadar doluydu."]]],
    ["yaz", [["mevsim", "Bu yaz dedemin köyüne gideceğiz."], ["yazmak eylemi", "Adını defterin kapağına yaz."]]],    ["at", [["hayvan", "Çiftlikteki at çok hızlı koşuyordu."], ["atmak eylemi", "Çöpü çöp kutusuna at."]]],
    ["bin", [["sayı", "Kütüphanede bin kitap vardı."], ["binmek eylemi", "Otobüse bin, geç kalacaksın."]]],
    ["kır", [["doğa, kırsal alan", "Hafta sonu kırda çiçek topladık."], ["kırmak eylemi", "Cevizi taşla kır."]]],
    ["ekmek", [["yiyecek", "Fırından taze ekmek aldım."], ["toprağa tohum atmak", "Dedem tarlaya buğday ekmek istiyor."]]],
    ["ben", [["kişi zamiri", "Bu resmi ben çizdim."], ["deride bulunan leke", "Yanağında küçük bir ben var."]]]
  ];
  U.tr1k2 = tiplerden([
    () => { const [a, b] = pick(ES), [x, y] = karistir([a, b]); return soru(`"${x}" sözcüğünün eş anlamlısı hangisidir?`, y, [...ZIT.flat(), ...ES.flat()].filter((w) => w !== x && w !== y), `${x} – ${y} eş anlamlıdır.`); },
    () => { const [a, b] = pick(ZIT), [x, y] = karistir([a, b]); return soru(`"${x}" sözcüğünün zıt anlamlısı hangisidir?`, y, [...ES.flat(), ...ZIT.flat()].filter((w) => w !== x && w !== y), `${x} – ${y} zıt anlamlıdır.`); },
    () => { const d = pick(ES); return soru("Hangisinde eş anlamlı sözcükler bir arada verilmiştir?", d.join(" – "), karistir(ZIT).slice(0, 5).map((z) => z.join(" – ")), `${d.join(" – ")} aynı anlama gelir.`); },
    () => { const d = pick(ZIT); return soru("Hangisinde zıt anlamlı sözcükler bir arada verilmiştir?", d.join(" – "), karistir(ES).slice(0, 5).map((z) => z.join(" – ")), `${d.join(" – ")} anlamca birbirinin karşıtıdır.`); },
    () => {
      const [k, an] = pick(ESSES), [anlam, cumle] = pick(an);
      const yan = [...an.filter((x) => x[0] !== anlam).map((x) => x[0]), ...karistir(ESSES.filter((x) => x[0] !== k)).flatMap((x) => x[1].map((y) => y[0]))];
      return soru(`"${cumle}" cümlesinde "${k}" sözcüğü hangi anlamda kullanılmıştır?`, anlam, yan.slice(0, 5), `Bu cümlede "${k}": ${anlam}. "${k}" eş sesli bir sözcüktür; başka cümlelerde ${an.filter((x) => x[0] !== anlam).map((x) => x[0]).join(", ")} anlamına da gelir.`);
    }
  ]);

  // ---------- Deyim / atasözü ----------
  const DEYIM = [["göz atmak", "bir şeye kısaca bakmak"], ["kulak vermek", "söyleneni dikkatle dinlemek"], ["ağzı kulaklarına varmak", "çok sevinmek"], ["burnu havada olmak", "kendini beğenmiş olmak"], ["eli açık olmak", "cömert olmak"], ["dili tutulmak", "şaşkınlıktan konuşamamak"], ["kılı kırk yarmak", "bir işi çok titiz yapmak"], ["pabucu dama atılmak", "önemini yitirmek"], ["etekleri tutuşmak", "çok telaşlanmak"], ["göz yummak", "görmezden gelmek"], ["aklı başına gelmek", "doğru düşünmeye başlamak"], ["içi içine sığmamak", "sabırsızlanacak kadar heyecanlanmak"], ["ayağını denk almak", "dikkatli davranmak"], ["kulak asmamak", "söyleneni önemsememek"], ["yüzü kızarmak", "utanmak"], ["dört gözle beklemek", "sabırsızlıkla beklemek"], ["gözü tutmak", "beğenmek"], ["ateş pahası", "çok pahalı"], ["el ele vermek", "birlikte çalışmak"], ["ipe un sermek", "bahaneler uydurmak"], ["kafa yormak", "bir konu üzerinde çok düşünmek"], ["ağzında bakla ıslanmamak", "sır saklayamamak"], ["göze girmek", "sevgi ve güven kazanmak"], ["küplere binmek", "çok öfkelenmek"], ["etekleri zil çalmak", "sevinçten yerinde duramamak"], ["yerinde saymak", "hiç ilerleme kaydedememek"]];
  const ATA = [["Damlaya damlaya göl olur.", "Küçük birikimler zamanla büyür."], ["Sakla samanı, gelir zamanı.", "Gereksiz görünen bir şey bir gün işe yarayabilir."], ["Ağaç yaşken eğilir.", "Eğitim küçük yaşta verilmelidir."], ["Bir elin nesi var, iki elin sesi var.", "Birlikte çalışmak başarı getirir."], ["Üzüm üzüme baka baka kararır.", "İnsanlar arkadaşlarından etkilenir."], ["Ayağını yorganına göre uzat.", "Harcamalar gelire göre yapılmalıdır."], ["İşleyen demir ışıldar.", "Çalışan kişi gelişir ve parlar."], ["Bugünün işini yarına bırakma.", "İşler zamanında yapılmalıdır."], ["Dost kara günde belli olur.", "Gerçek dost zor zamanda anlaşılır."], ["Sabreden derviş muradına ermiş.", "Sabırlı olan isteğine kavuşur."], ["Tatlı dil yılanı deliğinden çıkarır.", "Güzel söz insanları ikna eder."], ["Acele işe şeytan karışır.", "Aceleyle yapılan iş hatalı olur."], ["Komşu komşunun külüne muhtaçtır.", "İnsanlar birbirine her zaman ihtiyaç duyar."], ["Ak akçe kara gün içindir.", "Zor günler için para biriktirilmelidir."], ["Söz gümüşse sükût altındır.", "Bazen susmak konuşmaktan daha değerlidir."]];
  U.tr1k3 = tiplerden([
    eslestir(DEYIM, (a) => `"${buyuk(a)}" deyiminin anlamı hangisidir?`, (b) => `"${buyuk(b)}" anlamına gelen deyim hangisidir?`, (a, b) => `${buyuk(a)}: ${b}.`),
    () => { const [a, b] = pick(ATA); return soru(`"${a}" atasözünün anlamı hangisidir?`, b, ATA.map((x) => x[1]).filter((x) => x !== b), `${a} → ${b}`); },
    () => { const [a] = pick(ATA); return soru("Hangisi bir atasözüdür?", a, DEYIM.map((x) => buyuk(x[0])), "Atasözleri öğüt verir ya da genel bir yargı bildirir; deyimler ise bir durumu anlatır."); },
    () => { const [a] = pick(DEYIM); return soru("Hangisi bir deyimdir?", buyuk(a), ATA.map((x) => x[0]), "Deyimler bir durumu anlatır, öğüt vermez."); }
  ]);

  // ---------- İsimler ----------
  U.tr2k1 = tiplerden([
    siniflandir({ "soyut": ["sevgi", "korku", "umut", "mutluluk", "akıl", "özlem", "cesaret", "düşünce", "merak", "hayal"], "somut": ["masa", "su", "ses", "koku", "kalem", "hava", "rüzgâr", "ağaç", "ekmek", "duman"] }, (g) => `Hangisi ${g} bir isimdir?`, (d, g) => `${buyuk(d)} ${g === "soyut" ? "duyularla algılanamaz, soyut" : "duyularla algılanabilir, somut"} bir isimdir.`),
    siniflandir({ "özel": ["Ankara", "Elif", "Karadeniz", "Türkçe", "Fırat", "Ağrı Dağı", "Van Gölü", "Atatürk"], "cins": ["şehir", "kız", "deniz", "dil", "nehir", "dağ", "göl", "öğretmen"] }, (g) => `Hangisi ${g} isimdir?`, (d, g) => `${buyuk(d)} ${g === "özel" ? "tek olan bir varlığın adıdır; özel isimdir" : "aynı türden varlıkların ortak adıdır; cins isimdir"}.`),
    siniflandir({ "topluluk": ["ordu", "sürü", "takım", "aile", "koro", "millet", "kurul", "deste"], "topluluk olmayan": ["asker", "koyun", "oyuncu", "anne", "şarkıcı", "kalemler", "çocuklar", "ağaç"] }, (g) => g === "topluluk" ? "Hangisi bir topluluk ismidir?" : "Hangisi topluluk ismi değildir?", (d, g) => `${buyuk(d)} ${g === "topluluk" ? "birçok varlığı anlatır ama tekildir; topluluk ismidir" : "topluluk ismi değildir"}.`)
  ]);

  // ---------- Sıfatlar ----------
  // Her cümlede yalnızca o türden bir sıfat var. [cümle, sıfat, [sıfat olmayan sözcükler]]
  const SIFAT = {
    "niteleme sıfatı": [["Kırmızı elbiseyi çok beğendim.", "Kırmızı", ["elbiseyi", "beğendim", "çok"]], ["Uzun yolculuk bizi çok yordu.", "Uzun", ["yolculuk", "bizi", "yordu"]], ["Akıllı çocuk soruyu hemen çözdü.", "Akıllı", ["çocuk", "soruyu", "hemen"]], ["Sıcak çorba içimizi ısıttı.", "Sıcak", ["çorba", "içimizi", "ısıttı"]], ["Yeni ayakkabılarım ayağımı vurdu.", "Yeni", ["ayakkabılarım", "ayağımı", "vurdu"]], ["Annem bahçeye sarı çiçekler dikti.", "sarı", ["annem", "bahçeye", "dikti"]]],
    "işaret sıfatı": [["Bu kitabı dün aldım.", "Bu", ["kitabı", "dün", "aldım"]], ["Şu ağacın altında oturalım.", "Şu", ["ağacın", "altında", "oturalım"]], ["O ev yıllardır boş duruyor.", "O", ["ev", "yıllardır", "duruyor"]], ["Bu sokak gece çok sessizdir.", "Bu", ["sokak", "gece", "sessizdir"]]],
    "sayı sıfatı": [["Markete gidip üç kalem aldım.", "üç", ["markete", "kalem", "aldım"]], ["Yarışmada birinci takım ödül aldı.", "birinci", ["yarışmada", "takım", "ödül"]], ["Öğretmen öğrencilere ikişer kitap dağıttı.", "ikişer", ["öğretmen", "öğrencilere", "dağıttı"]], ["Kahvaltıda yarım ekmek yedim.", "yarım", ["kahvaltıda", "ekmek", "yedim"]], ["Sınıfımızda yirmi beş öğrenci var.", "yirmi beş", ["sınıfımızda", "öğrenci", "var"]]],
    "belgisiz sıfat": [["Bazı öğrenciler geziye katılmadı.", "Bazı", ["öğrenciler", "geziye", "katılmadı"]], ["Birkaç gün sonra döneceğim.", "Birkaç", ["gün", "sonra", "döneceğim"]], ["Babam her sabah erkenden kalkar.", "her", ["babam", "sabah", "kalkar"]], ["Hiçbir öğrenci derse geç kalmadı.", "Hiçbir", ["öğrenci", "derse", "kalmadı"]], ["Kütüphanede çok kitap var.", "çok", ["kütüphanede", "kitap", "var"]]],
    "soru sıfatı": [["Hangi kitabı okumak istersin?", "Hangi", ["kitabı", "okumak", "istersin"]], ["Bugün kaç soru çözdün?", "kaç", ["bugün", "soru", "çözdün"]], ["Yarın hangi müzeye gideceğiz?", "hangi", ["yarın", "müzeye", "gideceğiz"]], ["Sınıfta kaç sıra var?", "kaç", ["sınıfta", "sıra", "var"]]]
  };
  const SIFATLAR = Object.entries(SIFAT).flatMap(([t, l]) => l.map((x) => [...x, t]));
  U.tr2k2 = tiplerden([
    () => { const [c, s, diger] = pick(SIFATLAR); return soru(`"${c}" cümlesindeki sıfat hangisidir?`, s.toLocaleLowerCase("tr"), diger.map((x) => x.toLocaleLowerCase("tr")), `"${s.toLocaleLowerCase("tr")}" sözcüğü kendinden sonraki ismi belirtiyor; sıfattır.`); },
    () => { const [c, s, , t] = pick(SIFATLAR); return soru(`"${c}" cümlesindeki "${s.toLocaleLowerCase("tr")}" sözcüğü hangi tür sıfattır?`, buyuk(t), Object.keys(SIFAT).map(buyuk), `"${s.toLocaleLowerCase("tr")}" ${t === "belgisiz sıfat" ? "belgisiz sıfattır" : t + "dır"}.`); },
    () => { const t = pick(Object.keys(SIFAT)), [c] = pick(SIFAT[t]); return soru(`Hangi cümlede ${t} vardır?`, c, SIFATLAR.filter((x) => x[3] !== t).map((x) => x[0]), `"${c}" cümlesinde ${t} kullanılmıştır.`); }
  ]);

  // ---------- Zamirler ----------
  const ZAMIR = {
    "kişi zamiri": ["Ben her sabah erkenden kalkarım.", "Onlar parkta oyun oynuyor.", "Biz yarın pikniğe gideceğiz.", "Sen çok güzel resim yapıyorsun.", "Siz de mi geliyorsunuz?"],
    "işaret zamiri": ["Bunu dikkatlice oku.", "Şunu masaya bırakır mısın?", "Orası çok kalabalıktı.", "Bunlar bahçeden toplandı.", "Şurası hiç değişmemiş."],
    "belgisiz zamir": ["Herkes derse zamanında geldi.", "Kimse bu soruyu çözemedi.", "Bazıları geziye katılmadı.", "Birisi kapıyı çalıyor.", "Hepsi çok güzel olmuş."],
    "soru zamiri": ["Kim kapıyı çaldı?", "Kimi arıyorsun?", "Neyi unuttun?", "Hangisini seçtin?", "Kaçını okudun?"]
  };
  const ISARET_SIFAT = ["Bu kitap çok güzel.", "Şu ağacın altında dinlenelim.", "O çocuk sınıfımıza yeni geldi.", "Bu sokak çok sessiz.", "Şu kalemi bana verir misin?"];
  U.tr2k3 = tiplerden([
    () => { const t = pick(Object.keys(ZAMIR)), c = pick(ZAMIR[t]); return soru(`Hangi cümlede ${t} vardır?`, c, Object.keys(ZAMIR).filter((x) => x !== t).flatMap((x) => ZAMIR[x]), `"${c}" cümlesinde ${t} kullanılmıştır.`); },
    () => { const t = pick(Object.keys(ZAMIR)), c = pick(ZAMIR[t]); return soru(`"${c}" cümlesindeki zamir hangi türdendir?`, buyuk(t), Object.keys(ZAMIR).map(buyuk), `Bu cümlede ${t} vardır.`); },
    () => { const c = pick(ZAMIR["işaret zamiri"]); return soru("Hangi cümlede işaret sözcüğü zamir olarak kullanılmıştır?", c, ISARET_SIFAT, "'Bu, şu, o' bir ismin önünde ise sıfat, ismin yerine tek başına kullanılmışsa zamirdir."); },
    () => { const c = pick(ISARET_SIFAT); return soru("Hangi cümlede işaret sözcüğü sıfat olarak kullanılmıştır?", c, ZAMIR["işaret zamiri"], "'Bu, şu, o' bir ismin önünde kullanılırsa işaret sıfatı olur."); }
  ]);

  // ---------- Edat, bağlaç, ünlem ----------
  U.tr2k4 = tiplerden([
    siniflandir({ "edat": ["gibi", "için", "kadar", "göre", "beri", "doğru", "üzere", "karşı"], "bağlaç": ["ve", "ama", "fakat", "çünkü", "veya", "ya da", "ancak", "yoksa"], "ünlem": ["Eyvah", "Yaşasın", "Ah", "Of", "Hey", "Aferin", "Vay"] },
      (g) => `Hangisi ${g === "edat" ? "bir edattır" : g === "bağlaç" ? "bir bağlaçtır" : "bir ünlemdir"}?`, (d, g) => `"${d}" bir ${g}${g === "edat" ? "tır" : g === "bağlaç" ? "tır" : "dir"}.`),
    siniflandir({ "edat": ["Aslan gibi güçlüydü.", "Senin için çiçek aldım.", "Akşama kadar ders çalıştık.", "Sabahtan beri yağmur yağıyor.", "Bana göre en güzel mevsim bahar."], "bağlaç": ["Elma ve armut aldım.", "Çok çalıştı ama kazanamadı.", "Çay veya kahve içebilirsin.", "Gelemedim çünkü hastaydım.", "Ali de bizimle gelecek."], "ünlem": ["Eyvah, otobüsü kaçırdık!", "Yaşasın, tatil başladı!", "Of, bu sıcak çok bunalttı!", "Hey, buraya bak!"] },
      (g) => `Hangi cümlede ${g} kullanılmıştır?`, (d, g) => `"${d}" cümlesinde ${g} vardır.`)
  ]);

  // ---------- Yapı ----------
  const KOK = [["gözlükçü", "göz", ["gözlük", "gö"]], ["kitaplık", "kitap", ["kita", "kitapl"]], ["simitçi", "simit", ["simi", "sim"]], ["tuzluk", "tuz", ["tuzlu", "tu"]], ["balıkçı", "balık", ["bal", "balıkç"]], ["yolcu", "yol", ["yo", "yolc"]], ["sevgi", "sev", ["se", "sevg"]], ["çiçekçi", "çiçek", ["çiçe", "çi"]], ["güneşli", "güneş", ["gün", "güne"]], ["kalemlik", "kalem", ["kale", "kal"]], ["arabacı", "araba", ["ara", "arab"]], ["dişçi", "diş", ["di", "dişç"]], ["sulu", "su", ["sul", "s"]], ["bilgi", "bil", ["bi", "bilg"]], ["temizlik", "temiz", ["tem", "temizl"]]];
  U.tr3k1 = tiplerden([
    () => { const [w, k, yan] = pick(KOK); return soru(`"${w}" sözcüğünün kökü hangisidir?`, k, [...yan, w], `Parçalanamayan, anlamlı en küçük kısım "${k}"dir. Diğer seçenekler ya anlamsızdır ya da gövdedir.`); },
    siniflandir({ "yapım eki": ["kitaplık", "gözlük", "tuzsuz", "simitçi", "sulu", "balıkçı", "yolcu", "bilgi", "sevgi", "çiçekçi", "güneşli", "kalemlik"], "çekim eki": ["kitaplar", "evde", "okuldan", "kalemim", "geldi", "kapının", "arabam", "bahçeye", "ağaçlar", "gördüm", "masada", "elmayı"] },
      (g) => `Hangi sözcük ${g} almıştır?`, (d, g) => `"${d}" sözcüğündeki ek ${g === "yapım eki" ? "yeni bir sözcük türetmiştir; yapım ekidir" : "anlamı değiştirmemiştir; çekim ekidir"}.`)
  ]);

  // ---------- Cümlede anlam ----------
  U.tr4k1 = siniflandir({
    "sebep-sonuç": ["Yağmur yağdığı için maç ertelendi.", "Çok çalıştığından sınavı kazandı.", "Hasta olduğu için okula gelmedi.", "Yol buzlu olduğundan kaza oldu.", "Geç kaldığı için otobüsü kaçırdı.", "Gürültüden uyuyamadım."],
    "amaç-sonuç": ["Sınavı kazanmak için çok çalıştı.", "Sağlıklı olmak için spor yapıyor.", "Otobüse yetişmek için koştu.", "Kitap almak için kütüphaneye gitti.", "Erken uyanmak için alarm kurdu.", "Kardeşine hediye almak üzere çarşıya çıktı."],
    "koşul": ["Çalışırsan başarılı olursun.", "Yağmur yağarsa pikniğe gitmeyiz.", "Erken kalkarsan kahvaltıya yetişirsin.", "Ödevini bitirirsen oyun oynayabilirsin.", "Kitabı okursan konuyu anlarsın."],
    "karşılaştırma": ["Ali, kardeşinden daha uzun.", "Bu yıl kış geçen yıldan daha soğuk geçti.", "Kedi, köpekten daha sessizdir.", "Matematik sınavı Türkçe sınavından daha zordu.", "Sınıfın en hızlı koşucusu Elif'tir."]
  }, (g) => `Hangi cümlede ${g} ilişkisi vardır?`, (d, g) => `"${d}" cümlesinde ${g} ilişkisi vardır.`, (d) => `"${d}" cümlesinde hangi anlam ilişkisi vardır?`);

  U.tr4k2 = siniflandir({
    "nesnel": ["Türkiye'nin başkenti Ankara'dır.", "Su deniz seviyesinde 100 °C'de kaynar.", "Kitap 120 sayfadan oluşuyor.", "Bir yılda 12 ay vardır.", "Van Gölü Türkiye'nin en büyük gölüdür.", "Okulumuzda 24 sınıf var.", "Atatürk 1881 yılında doğdu.", "Bir hafta yedi gündür."],
    "öznel": ["Bu kitap okuduğum en güzel kitap.", "Kış mevsimi yazdan daha eğlencelidir.", "Bu film çok sıkıcıydı.", "Matematik en zevkli derstir.", "Ankara çok güzel bir şehir.", "Kırmızı en güzel renktir.", "Bu yemek harika olmuş.", "Bence en iyi spor futboldur."]
  }, (g) => `Hangisi ${g} bir yargıdır?`, (d, g) => `"${d}" ${g === "nesnel" ? "kanıtlanabilir; nesnel yargıdır" : "kişisel görüş bildirir; öznel yargıdır"}.`);

  // ---------- Paragraf ----------
  // { p: paragraf, k: konu, a: ana düşünce, b: başlık, ky: yanlış konular, ay: yanlış ana düşünceler }
  const PARAGRAF = [
    { p: "Kahvaltı günün en önemli öğünüdür. Sabah kahvaltı yapan çocuklar derslere daha kolay odaklanır, gün boyu enerjik olur. Kahvaltıyı atlayanlar ise öğle saatlerinde çabuk yorulur.", k: "Kahvaltının önemi", a: "Güne enerjik başlamak için mutlaka kahvaltı yapmalıyız.", b: "Kahvaltıyı Atlama!", ky: ["Öğle yemeği", "Okul servisleri", "Gece uykusu"], ay: ["Öğle yemeği kahvaltıdan önemlidir.", "Çocuklar derste hep yorgundur.", "Sabahları erken kalkmak zordur."] },
    { p: "Kütüphaneler sadece kitap okunan yerler değildir. Orada sessiz bir ortamda ders çalışabilir, gazete ve dergileri inceleyebilir, bilgisayardan araştırma yapabiliriz. Üstelik bütün bunlar ücretsizdir.", k: "Kütüphanelerin faydaları", a: "Kütüphaneler pek çok ihtiyacımızı ücretsiz karşılayan değerli yerlerdir.", b: "Herkesin Kütüphanesi", ky: ["Bilgisayar oyunları", "Kitap fiyatları", "Gazetecilik mesleği"], ay: ["Kütüphanelerde sadece kitap okunur.", "Gazeteler kitaplardan daha faydalıdır.", "Bilgisayarlar kitapların yerini almıştır."] },
    { p: "Sokak hayvanları kışın soğuk ve açlıkla mücadele eder. Kapımızın önüne bırakacağımız bir kap su ve biraz mama onların hayatını kurtarabilir. Küçük bir iyilik, bir canlı için büyük bir umut olabilir.", k: "Sokak hayvanlarına yardım", a: "Küçük iyiliklerle sokak hayvanlarının hayatını kolaylaştırabiliriz.", b: "Bir Kap Su, Bir Umut", ky: ["Evcil hayvan bakımı", "Kış sporları", "Veteriner hekimlik"], ay: ["Sokak hayvanları kışın göç eder.", "Hayvanlar sadece yazın beslenmelidir.", "Kış mevsimi çok uzun sürer."] },
    { p: "Yeni bir dil öğrenmek insana farklı kapılar açar. Başka ülkelerden insanlarla konuşabilir, onların kitaplarını ve filmlerini anlayabiliriz. Dil öğrenmek için her gün az da olsa pratik yapmak gerekir.", k: "Yabancı dil öğrenmek", a: "Yabancı dil öğrenmek ufkumuzu genişletir; bunun için düzenli pratik gerekir.", b: "Dil Bilen Dünyayı Gezer", ky: ["Film izlemenin zararları", "Ülkelerin başkentleri", "Kitap yazma sanatı"], ay: ["Dil öğrenmek için yurt dışına gitmek şarttır.", "Yabancı filmler sıkıcıdır.", "Bir ayda her dil öğrenilebilir."] },
    { p: "Ekran başında çok uzun süre kalmak gözlerimizi yorar, uykumuzu bozar ve hareketsiz kalmamıza neden olur. Bu yüzden ekran süremizi sınırlamalı, boş zamanlarımızda dışarıda oyun oynamalı ve kitap okumalıyız.", k: "Ekran kullanımı", a: "Sağlığımız için ekran süremizi sınırlamalıyız.", b: "Ekranı Kapat, Hayata Katıl", ky: ["Göz hastalıkları", "Bilgisayar parçaları", "Uyku saatleri"], ay: ["Ekranlar gözlere hiç zarar vermez.", "Dışarıda oyun oynamak tehlikelidir.", "Kitap okumak gözleri yorar."] },
    { p: "Atatürk, çocukları çok severdi. 23 Nisan'ı bütün dünya çocuklarına armağan etti. Çocukların iyi yetişmesinin, ülkenin geleceği için çok önemli olduğuna inanıyordu.", k: "Atatürk'ün çocuk sevgisi", a: "Atatürk çocuklara büyük değer verir, onları ülkenin geleceği olarak görürdü.", b: "Geleceğin Büyükleri", ky: ["Kurtuluş Savaşı", "Cumhuriyet'in ilanı", "Dünya ülkeleri"], ay: ["23 Nisan sadece Türkiye'de kutlanır.", "Atatürk okulları sevmezdi.", "Çocuklar ülkeyi yönetmelidir."] },
    { p: "Geri dönüşüm, kullanılmış maddelerin yeniden işlenerek tekrar kullanılmasıdır. Kâğıt, cam, plastik ve metal atıkları ayrı kutulara atarak doğal kaynakları koruyabilir, çöp miktarını azaltabiliriz.", k: "Geri dönüşüm", a: "Atıkları ayrıştırıp geri dönüşüme göndererek doğayı korumalıyız.", b: "Atık Değil, Kaynak", ky: ["Çöp kamyonları", "Plastik oyuncaklar", "Kâğıt üretimi tarihi"], ay: ["Bütün atıklar aynı kutuya atılmalıdır.", "Cam geri dönüştürülemez.", "Çöp miktarının önemi yoktur."] },
    { p: "Arkadaşlık, birbirine güvenmek ve zor zamanda yanında olmaktır. İyi bir arkadaş sevincimizi paylaşır, üzüldüğümüzde bizi teselli eder. Arkadaşlarımıza değer vermeli, onları kırmamaya özen göstermeliyiz.", k: "Arkadaşlık", a: "İyi arkadaşlık güven ve değer vermeye dayanır.", b: "Gerçek Dost", ky: ["Okul gezileri", "Doğum günü partileri", "Takım sporları"], ay: ["Arkadaş sayısı ne kadar çoksa o kadar iyidir.", "Arkadaşlar sadece okulda edinilir.", "Zor zamanlarda yalnız kalmak gerekir."] },
    { p: "Bitkiler de bizim gibi canlıdır ve bakıma ihtiyaç duyar. Onları düzenli sulamak, güneş alan bir yere koymak ve yapraklarını temiz tutmak gerekir. Özenle bakılan bir bitki evimize hem güzellik hem de temiz hava katar.", k: "Bitki bakımı", a: "Bitkilere düzenli bakım yaparsak bize güzellik ve temiz hava sağlar.", b: "Yeşil Dostlarımız", ky: ["Çiçek satışı", "Orman yangınları", "Meyve ağaçları"], ay: ["Bitkilerin güneşe ihtiyacı yoktur.", "Bitkiler her gün saatlerce sulanmalıdır.", "Evde bitki beslemek zararlıdır."] },
    { p: "Trafik kuralları hepimizin güvenliği içindir. Karşıdan karşıya geçerken yaya geçidini kullanmalı, ışıkların yeşil yanmasını beklemeli ve iki yana bakmalıyız. Kurallara uymak hayat kurtarır.", k: "Trafik kuralları", a: "Trafik kurallarına uymak hayatımızı korur.", b: "Önce Can Güvenliği", ky: ["Araba modelleri", "Yol yapımı", "Sürücü kursları"], ay: ["Yayalar trafik kurallarına uymak zorunda değildir.", "Kırmızı ışıkta geçmek zaman kazandırır.", "Trafik ışıkları sadece arabalar içindir."] }
  ];
  U.tr4k3 = tiplerden([
    () => { const x = pick(PARAGRAF); return soru(`"${x.p}" Bu paragrafın konusu nedir?`, x.k, x.ky, `Paragrafta "${x.k.toLocaleLowerCase("tr")}" üzerinde durulmuştur.`); },
    () => { const x = pick(PARAGRAF); return soru(`"${x.p}" Bu paragrafın ana düşüncesi nedir?`, x.a, x.ay, `Paragrafın bütünü şu mesajı verir: ${x.a}`); },
    () => { const x = pick(PARAGRAF); return soru(`"${x.p}" Bu paragrafa en uygun başlık hangisidir?`, x.b, PARAGRAF.filter((y) => y !== x).map((y) => y.b), `Başlık konuyu yansıtmalıdır: "${x.b}".`); }
  ]);

  // ---------- Hikâye unsurları ----------
  const HIKAYE = [
    { m: "Bir kış sabahı Elif ile kardeşi Can, köydeki dedelerinin evinin önünde kardan adam yaptı. Dedeleri de onlara havuçtan bir burun getirdi.", yer: "Köydeki dedelerinin evinin önü", zaman: "Bir kış sabahı", kisi: "Elif, Can ve dedeleri" },
    { m: "Geçen bahar okul bahçesinde fidan dikme etkinliği yapıldı. Öğretmenimiz Ayşe Hanım her öğrenciye bir fidan verdi.", yer: "Okul bahçesi", zaman: "Geçen bahar", kisi: "Öğretmen Ayşe Hanım ve öğrenciler" },
    { m: "Akşamüstü sahilde yürüyen Mert, kumların arasında yaralı bir martı buldu. Martıyı hemen veterinere götürdü.", yer: "Sahil", zaman: "Akşamüstü", kisi: "Mert" },
    { m: "Pazar sabahı kütüphanede kitap okuyan Zeynep, rafların arasında eski bir mektup buldu. Kütüphaneci Hasan Bey mektubu dikkatle inceledi.", yer: "Kütüphane", zaman: "Pazar sabahı", kisi: "Zeynep ve Hasan Bey" },
    { m: "Yaz tatilinde kampa giden Kerem ve arkadaşları gece ormanın içinde ateş böceklerini izledi.", yer: "Orman", zaman: "Yaz tatilinde bir gece", kisi: "Kerem ve arkadaşları" },
    { m: "Bayram sabahı Defne, annesiyle birlikte komşuları ziyaret etti. Yaşlı komşuları Fatma Teyze onlara şeker ikram etti.", yer: "Komşuların evi", zaman: "Bayram sabahı", kisi: "Defne, annesi ve Fatma Teyze" },
    { m: "Öğle teneffüsünde Emre, sınıfta unuttuğu matarasını aramaya gitti. Nöbetçi öğretmen ona yardım etti.", yer: "Sınıf", zaman: "Öğle teneffüsü", kisi: "Emre ve nöbetçi öğretmen" },
    { m: "Sonbaharda bir gün Nehir, parkta yürürken bankın altında küçük bir kedi yavrusu gördü. Kediyi eve götürüp ona süt verdi.", yer: "Park", zaman: "Sonbaharda bir gün", kisi: "Nehir" }
  ];
  const UNSUR = { yer: "olayın geçtiği yer (mekân)", zaman: "olayın geçtiği zaman", kisi: "olaydaki kişiler" };
  U.tr4k4 = () => {
    const h = pick(HIKAYE), u = pick(Object.keys(UNSUR));
    return soru(`"${h.m}" Bu metinde ${UNSUR[u]} hangisidir?`, h[u], HIKAYE.filter((x) => x !== h).map((x) => x[u]), `Metinde ${UNSUR[u]}: ${h[u]}.`);
  };

  // ---------- Söz sanatları ----------
  // Konuşturma aynı zamanda kişileştirme sayıldığından ayrı sorulur
  const SANAT = {
    "benzetme": ["Bebeğin yanakları elma gibi kırmızıydı.", "Kar, pamuk gibi yağıyordu.", "Arkadaşım aslan gibi cesurdur.", "Gözleri deniz gibi maviydi.", "Sesi bülbül gibi güzeldi.", "Odası buz gibi soğuktu."],
    "kişileştirme": ["Rüzgâr öfkeyle pencereleri dövüyordu.", "Güneş bize gülümsüyordu.", "Ağaçlar soğuktan titriyordu.", "Çiçekler sabah uykusundan uyandı.", "Bulutlar hüzünle ağlamaya başladı.", "Yorgun sokak lambası gece boyunca nöbet tuttu."],
    "abartma": ["Sana bin kere söyledim.", "Öyle acıktım ki bir fil yiyebilirim.", "Gözyaşları sel olup aktı.", "Kahkahası dağları inletti.", "Bu çanta bir ton ağırlığında.", "Bir saattir değil, bir asırdır seni bekliyorum."]
  };
  const KONUSTURMA = ["\"Beni neden kopardın?\" dedi gül.", "Kedi, \"Bana biraz süt verir misin?\" diye sordu.", "Ağaç, \"Gölgemde dinlen.\" dedi yolcuya.", "Kalem, \"Bugün çok yoruldum.\" diye söylendi.", "Ay, yıldızlara \"Haydi uyuyalım.\" dedi."];
  const ucSanat = siniflandir(SANAT, (g) => `Hangi cümlede ${g} sanatı vardır?`, (d, g) => `"${d}" cümlesinde ${g} vardır.`);
  U.tr5k1 = tiplerden([
    ucSanat, ucSanat,
    () => { const c = pick(KONUSTURMA); return soru("Hangi cümlede konuşturma sanatı vardır?", c, [...SANAT.benzetme, ...SANAT.abartma], `"${c}" cümlesinde insan dışındaki bir varlık konuşturulmuştur.`); },
    () => { const g = pick(Object.keys(SANAT)), c = pick(SANAT[g]); return soru(`"${c}" cümlesinde hangi söz sanatı vardır?`, buyuk(g), ["Benzetme", "Kişileştirme", "Abartma", "Konuşturma"].filter((x) => x !== buyuk(g) && !(g === "kişileştirme" && x === "Konuşturma")).concat(g === "kişileştirme" ? ["Tezat (karşıtlık)"] : []), `"${c}" cümlesinde ${g} vardır.`); }
  ]);

  // ---------- Yazım ----------
  U.tr6k1 = tiplerden([
    ifadeler(
      ["Ben de bu yaz Bursa'ya gideceğim.", "Okuldaki etkinlik çok güzeldi.", "Duydum ki yarın tatil olacakmış.", "Sen de mi geliyorsun?", "Bu kitabı bir kez okudum.", "Herkes sınıfa girdi.", "Yarınki maçı izleyeceğiz.", "Bize de anlatır mısın?", "Yarın Ankara'ya gideceğiz.", "Yalnız kalmak istemiyorum.", "Kitabı okudun mu?", "Ali de bizimle gelecek.", "Hiçbir şey olmamış gibi davrandı.", "Birkaç gün sonra döneceğim."],
      ["Bende seninle geleceğim.", "Okulda ki kitaplar yenilendi.", "Sende mi geliyorsun?", "Annem bana kitapmı aldı?", "Yarın ankara'ya gideceğiz.", "Herkez sınıfa girdi.", "Yanlız kalmak istemiyorum.", "Bu kitabı birkez okudum.", "Ali'de bizimle gelecek.", "Yarın ki maçı izleyeceğiz.", "Kitabı okudunmu?", "Hiç bir şey olmamış gibi davrandı.", "Bir kaç gün sonra döneceğim.", "Bizde onlara katıldık."],
      ""
    )
  ]);
  // ifadeler "doğru/yanlış" sorusunu yazım diline çevir
  const yazimTemel = U.tr6k1;
  U.tr6k1 = () => {
    const q = yazimTemel();
    if (!q) return q;
    q.soru = q.soru.includes("doğrudur") ? "Hangi cümlede yazım yanlışı yoktur?" : "Hangi cümlede yazım yanlışı vardır?";
    q.cozum = q.soru.includes("yoktur") ? `"${q.secenekler[0]}" cümlesi doğru yazılmıştır. Diğerlerinde de/da, ki, mi ya da büyük harf yanlışı vardır.` : `"${q.secenekler[0]}" cümlesinde yazım yanlışı vardır.`;
    return q;
  };

  // ---------- Noktalama ----------
  const ISARET = { ".": "Nokta (.)", ",": "Virgül (,)", "?": "Soru işareti (?)", "!": "Ünlem işareti (!)", ":": "İki nokta (:)" };
  const NOKTA = [
    ["Eyvah( ) Otobüsü kaçırdık.", "!"], ["Yarın okula gelecek misin( )", "?"], ["Pazardan elma( ) armut ve muz aldım.", ","], ["Türkiye'nin başkenti Ankara'dır( )", "."],
    ["Saat 10( )30'da buluşalım.", "."], ["Dr( ) Ahmet Bey bizi muayene etti.", "."], ["Defter( ) kalem ve silgi aldım.", ","], ["Hey( ) Buraya bak!", "!"],
    ["Neden geç kaldın( )", "?"], ["Yaşasın( ) Tatil başladı!", "!"], ["Çantama şunları koydum( ) kalem, defter, silgi.", ":"], ["Arkadaşlar( ) yarın geziye gidiyoruz.", ","],
    ["Bu yaz hangi şehre gideceksiniz( )", "?"], ["Bahçede kediler( ) köpekler ve kuşlar vardı.", ","], ["Dedem bize şunu söyledi( ) \"Hiç pes etmeyin.\"", ":"], ["Kitabımı bitirdim( )", "."]
  ];
  U.tr6k2 = tiplerden([
    () => { const [c, i] = pick(NOKTA); return soru(`"${c}" cümlesinde ayraç içine hangi noktalama işareti gelmelidir?`, ISARET[i], Object.values(ISARET), `Ayraç içine ${ISARET[i]} gelmelidir.`); },
    ifadeler(["Soru cümlelerinin sonuna soru işareti konur.", "Eş görevli sözcükler virgülle ayrılır.", "Kısaltmalardan sonra nokta konabilir.", "Saat ve dakika arasına nokta konur.", "Özel isimlere gelen ekler kesme işaretiyle ayrılır.", "Açıklama yapılacak cümlenin sonuna iki nokta konur.", "Sevinç bildiren cümlelerin sonuna ünlem işareti konur."],
      ["Soru cümlelerinin sonuna nokta konur.", "Saat ve dakika arasına virgül konur.", "Cins isimlere gelen ekler kesme işaretiyle ayrılır.", "Eş görevli sözcükler noktayla ayrılır.", "Her cümlenin sonuna ünlem işareti konur.", "İki nokta yalnızca soru cümlelerinde kullanılır.", "Kesme işareti cümle sonuna konur."], "Noktalama işaretleri")
  ]);
})();


// ---------- 5. sınıfa özel Türkçe üreteçleri ----------
(function () {
  const U = window.URETEC, { r, pick, soru, tiplerden, siniflandir, ifadeler, dir } = window.UR;

  const KBO = {
    "karşılaştırma": ["Bu yıl geçen yıldan daha çok kitap okudum.", "Sınıfın en uzun öğrencisi Kerem'dir.", "Ankara, İzmir'e göre daha soğuktur.", "Kardeşim benden daha hızlı koşar.", "Bu soru öncekinden daha zordu.", "Dünyanın en büyük okyanusu Büyük Okyanus'tur.", "Annem babamdan daha erken kalkar.", "Bu film diğerlerinden daha eğlenceliydi."],
    "benzerlik": ["Bulutlar pamuk gibi yumuşacıktı.", "Kardeşim aslan kadar cesurdur.", "Gözleri deniz gibi masmaviydi.", "Çocukça bir sevinçle koştu.", "Sanki bütün kuşlar aynı anda şarkı söylüyordu.", "Dedem de babam gibi sabah erken kalkar.", "Dağ kadar ağır bir yük taşıyordu.", "Elleri buz gibi soğuktu."],
    "özetleme": ["Kısacası, düzenli çalışan başarıya ulaşır.", "Özetle, sağlıklı beslenmek bizim elimizde.", "Sözün özü, dostluk her şeyden değerlidir.", "Sonuç olarak herkes kendi sorumluluğunu üstlenmeli.", "Bir sözle, kitaplar en iyi arkadaşlarımızdır.", "Kısaca söylemek gerekirse, doğayı korumalıyız.", "Sonuçta emek veren kazanır.", "Özetle, zaman en değerli hazinemizdir."]
  };
  U.t5a = tiplerden([
    siniflandir(KBO, (g) => `Hangi cümlede ${g} anlamı vardır?`, (d, g) => `"${d}" cümlesinde ${g} bildiren bir ifade vardır.`),
    () => { const g = pick(Object.keys(KBO)), c = pick(KBO[g]); return soru(`"${c}" cümlesinde hangi anlam ilişkisi vardır?`, g.charAt(0).toLocaleUpperCase("tr") + g.slice(1), ["Karşılaştırma", "Benzerlik", "Özetleme", "Koşul"].filter((x) => x.toLocaleLowerCase("tr") !== g), "Cümledeki ifadeye dikkat edilir: daha/en (karşılaştırma), gibi/kadar (benzerlik), kısacası/özetle (özetleme)."); },
    () => { const [s, g] = pick([["gibi", "benzerlik"], ["kadar", "benzerlik"], ["daha", "karşılaştırma"], ["en", "karşılaştırma"], ["kısacası", "özetleme"], ["özetle", "özetleme"], ["sözün özü", "özetleme"], ["sanki", "benzerlik"], ["sonuç olarak", "özetleme"]]); return soru(`"${s}" ifadesi genellikle hangi anlamı katar?`, g.charAt(0).toLocaleUpperCase("tr") + g.slice(1), ["Karşılaştırma", "Benzerlik", "Özetleme", "Zaman"].filter((x) => x.toLocaleLowerCase("tr") !== g), `"${s}" → ${g}`); }
  ]);

  const BOZUK = [
    ["Yaklaşık on kadar kişi geldi.", "yaklaşık / kadar", "gereksiz sözcük"], ["Kitabı geri iade etti.", "geri", "gereksiz sözcük"], ["Kesinlikle yarın gelebilir.", "kesinlikle / gelebilir", "anlamca çelişen sözcükler"],
    ["Toplantıya hemen hemen herkes katılmış olabilir mutlaka.", "hemen hemen / mutlaka", "anlamca çelişen sözcükler"], ["Bu sabah erken saatlerde sabahleyin yola çıktık.", "sabahleyin", "gereksiz sözcük"],
    ["Mutlaka bu akşam yağmur yağabilir.", "mutlaka / yağabilir", "anlamca çelişen sözcükler"], ["Yaşlı ihtiyar adam bankta oturuyordu.", "yaşlı / ihtiyar", "gereksiz sözcük"], ["Kesin olarak belki sınav ertelenir.", "kesin olarak / belki", "anlamca çelişen sözcükler"],
    ["Herkes hep birlikte şarkı söyledi.", "hep birlikte (herkes ile)", "gereksiz sözcük"], ["Aşağı yukarı yirmi civarında öğrenci vardı.", "aşağı yukarı / civarında", "gereksiz sözcük"], ["Şüphesiz o da bu yarışmaya katılabilir.", "şüphesiz / katılabilir", "anlamca çelişen sözcükler"], ["Birbirimize karşılıklı mektuplar yazdık.", "birbirimize / karşılıklı", "gereksiz sözcük"]
  ];
  const DUZGUN = ["Toplantıya yirmi kişi katıldı.", "Kitabı kütüphaneye iade etti.", "Yarın kesinlikle gelecek.", "Belki bu akşam yağmur yağar.", "Bankta yaşlı bir adam oturuyordu.", "Herkes şarkı söyledi.", "Yaklaşık yirmi öğrenci vardı.", "Birbirimize mektup yazdık.", "Bu sabah erken yola çıktık.", "Belki o da yarışmaya katılır.", "Sınav kesinlikle ertelenmeyecek.", "Okula her gün yürüyerek gidiyorum."];
  U.t5b = tiplerden([
    () => { const b = pick(BOZUK); return soru("Hangi cümlede anlatım bozukluğu vardır?", b[0], DUZGUN, `"${b[0]}" cümlesinde ${b[2]} vardır (${b[1]}).`); },
    () => { const b = pick(BOZUK); return soru(`"${b[0]}" cümlesindeki anlatım bozukluğunun nedeni nedir?`, b[2].charAt(0).toLocaleUpperCase("tr") + b[2].slice(1), ["Gereksiz sözcük", "Anlamca çelişen sözcükler", "Yazım yanlışı", "Noktalama yanlışı"].filter((x) => x.toLocaleLowerCase("tr") !== b[2]), `Sorun: ${b[1]}.`); },
    () => { const g = pick(BOZUK.filter((x) => x[2] === "gereksiz sözcük")); return soru("Hangi cümlede gereksiz sözcük kullanılmıştır?", g[0], [...DUZGUN, ...BOZUK.filter((x) => x[2] !== "gereksiz sözcük").map((x) => x[0])], `${g[1]} aynı anlamı tekrar ediyor.`); }
  ]);

  const ANLATIM = {
    "betimleyici": ["Küçük evin kırmızı kiremitleri güneşte parlıyor, bahçedeki güller etrafa mis gibi kokular yayıyordu.", "Yaşlı adamın bembeyaz sakalı göğsüne kadar iniyor, mavi gözleri gülümsüyordu.", "Göl kıyısındaki söğütlerin dalları suya değiyor, kurbağaların sesi sessizliği bozuyordu.", "Pazar yeri rengârenk meyvelerle doluydu; portakallar turuncu bir dağ gibi yükseliyordu."],
    "öyküleyici": ["Sabah erkenden kalkan Ali, çantasını alıp otobüs durağına koştu. Otobüs tam kalkmak üzereyken yetişti.", "Geçen yaz dedemlerin köyüne gittik. İlk gün ahırdaki buzağıyı besledik, ertesi gün dereye yüzmeye gittik.", "Zil çalınca öğrenciler bahçeye çıktı. Elif top oynamak isteyen arkadaşlarına katıldı.", "Kedi önce masaya, sonra rafa sıçradı. Raftaki vazo yere düşüp kırıldı."],
    "bilgilendirici": ["Arılar, çiçeklerden topladıkları nektarı kovanda bala dönüştürür. Bir arı ömrü boyunca yaklaşık yarım çay kaşığı bal üretir.", "Ay, Dünya'nın tek doğal uydusudur. Kendi ışığı yoktur, Güneş'ten aldığı ışığı yansıtır.", "Türkiye'nin en uzun nehri Kızılırmak'tır. Uzunluğu yaklaşık 1355 kilometredir.", "Düzenli uyku, beynin gün içinde öğrendiklerini kalıcı hâle getirmesine yardımcı olur."]
  };
  const YOL = {
    "tanımlama": ["Fotosentez, bitkilerin güneş ışığını kullanarak besin üretmesidir.", "Deyim, gerçek anlamından uzaklaşmış kalıplaşmış söz öbeğidir.", "Kütüphane, kitapların düzenli biçimde saklandığı ve okunduğu yerdir."],
    "örneklendirme": ["Bazı hayvanlar kış uykusuna yatar; örneğin ayılar ve kirpiler kışı uyuyarak geçirir.", "Ülkemizde pek çok tarihî yapı vardır. Mesela Selimiye Camii ve Efes Antik Kenti bunlardandır.", "Geri dönüştürülebilen atıklara kâğıt, cam ve plastik örnek gösterilebilir."],
    "karşılaştırma": ["Köyde hayat sakin ve yavaştır; şehirde ise her şey hızlı ve kalabalıktır.", "Kediler bağımsızdır, köpekler ise sahibine daha çok bağlıdır.", "Yaz geceleri kısa, kış geceleri uzundur."],
    "tanık gösterme": ["Uzmanlara göre çocuklar günde en az dokuz saat uyumalıdır.", "Atatürk'ün dediği gibi: \"Hayatta en hakiki mürşit ilimdir.\"", "Ünlü bilim insanı Aziz Sancar, merakın bilimin anahtarı olduğunu söyler."],
    "sayısal verilerden yararlanma": ["Ülkemizde her yıl yaklaşık 2 milyon ton kâğıt tüketiliyor.", "Araştırmaya katılan öğrencilerin yüzde altmışı her gün kitap okuyor.", "Bir yetişkinin vücudunda yaklaşık 5 litre kan bulunur."]
  };
  U.t5c = tiplerden([
    siniflandir(ANLATIM, (g) => `Hangisinde ${g} anlatım kullanılmıştır?`, (d, g) => `Bu metinde ${g} anlatım vardır.`),
    () => { const g = pick(Object.keys(ANLATIM)), m = pick(ANLATIM[g]); return soru(`"${m}" Bu parçada hangi anlatım biçimi kullanılmıştır?`, g.charAt(0).toLocaleUpperCase("tr") + g.slice(1), ["Betimleyici", "Öyküleyici", "Bilgilendirici", "Tartışmacı"].filter((x) => x.toLocaleLowerCase("tr") !== g), g === "betimleyici" ? "Varlıkların görünüşü, rengi, sesi anlatılmış." : g === "öyküleyici" ? "Olaylar zaman sırasıyla anlatılmış." : "Okura bilgi verilmiş."); },
    () => { const g = pick(Object.keys(YOL)), m = pick(YOL[g]); return soru(`"${m}" cümlesinde hangi düşünceyi geliştirme yolu kullanılmıştır?`, g.charAt(0).toLocaleUpperCase("tr") + g.slice(1), Object.keys(YOL).filter((x) => x !== g).map((x) => x.charAt(0).toLocaleUpperCase("tr") + x.slice(1)), `Bu cümlede ${g} vardır.`); }
  ]);

  const GIRIS = ["Kitap okumak insanın hayal dünyasını zenginleştirir.", "Spor yapmak hem bedenimize hem ruhumuza iyi gelir.", "Su, canlıların yaşaması için vazgeçilmezdir.", "Ağaçlar doğanın akciğerleridir.", "Teknoloji hayatımızı büyük ölçüde değiştirdi.", "Dostluk, insanın en değerli hazinelerinden biridir.", "Düzenli uyumak sağlığımız için çok önemlidir."];
  const GIRIS_DEGIL = ["Bu yüzden her gün biraz kitap okumalıyız.", "Ama herkes bunun farkında değildir.", "Çünkü suyun yerini hiçbir şey tutamaz.", "Bunun için ağaç dikmeliyiz.", "O da bu düşünceye katıldı.", "Böylece sağlığımızı koruyabiliriz.", "Ayrıca spor yapmak arkadaşlıkları güçlendirir.", "Bunlardan biri de teknolojinin bağımlılık yapmasıdır.", "Kısacası dostlarımıza değer vermeliyiz."];
  const AKIS = [
    ["Arılar çiçeklerden nektar toplar.", "Topladıkları nektarı kovanda bala dönüştürür.", "Kelebeklerin kanatları çok renklidir.", "Bal hem lezzetli hem besleyicidir.", 3],
    ["Sabah kahvaltısı günün en önemli öğünüdür.", "Kahvaltı yapan öğrenciler derse daha iyi odaklanır.", "Akşam yemeğinde balık yemeyi severim.", "Bu nedenle kahvaltıyı asla atlamamalıyız.", 3],
    ["Kütüphaneler bilginin hazinesidir.", "Kütüphaneler bilgisayarla araştırma yapma imkânı da sunar.", "Futbol en sevdiğim spordur.", "Okuma alışkanlığı kazanmak için kütüphaneleri sık ziyaret etmeliyiz.", 3],
    ["Düzenli uyku büyüme için gereklidir.", "Uyku sırasında vücut kendini yeniler.", "Yaz tatilinde denize gitmek çok eğlencelidir.", "Bu yüzden her gece aynı saatte yatmalıyız.", 3],
    ["Geri dönüşüm doğayı korur.", "Kâğıtların geri dönüşümüyle ağaçların kesilmesi azalır.", "Cam şişeler de defalarca geri dönüştürülebilir.", "Okulumuzun bahçesi çok geniştir.", 4]
  ];
  U.t5d = tiplerden([
    () => soru("Hangisi bir paragrafın giriş cümlesi olabilir?", pick(GIRIS), GIRIS_DEGIL, "Bağlayıcı sözcükle başlamayan, kendi başına anlaşılan cümle giriş cümlesi olabilir."),
    () => soru("Hangisi bir paragrafın giriş cümlesi olamaz?", pick(GIRIS_DEGIL), GIRIS, "'Bu yüzden, ama, çünkü, böylece, ayrıca' gibi bağlayıcılar önceki bir cümleyi gerektirir."),
    () => { const a = pick(AKIS); return soru(`(1) ${a[0]} (2) ${a[1]} (3) ${a[2]} (4) ${a[3]} Numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?`, `${a[4]}`, ["1", "2", "3", "4"].filter((x) => x !== `${a[4]}`), `${a[4]} numaralı cümle konunun dışına çıkıyor.`); },
    () => { const c = pick(["Kısacası, sağlıklı yaşamak bizim elimizdedir.", "Sonuç olarak doğayı korumak hepimizin görevidir.", "Özetle, kitaplar en iyi dostlarımızdır.", "Bu yüzden zamanımızı iyi kullanmalıyız."]); return soru(`"${c}" cümlesi paragrafın hangi bölümünde yer almaya en uygundur?`, "Sonuç", ["Giriş", "Gelişme", "Başlık"], "Toparlayıcı ifadeler sonuç bölümünü gösterir."); }
  ]);

  const TUR = [
    ["Fabl", "Hayvanların insan gibi konuştuğu ve sonunda ders verilen kısa metin"], ["Masal", "Olağanüstü olayların anlatıldığı, 'Bir varmış bir yokmuş' diye başlayan metin"], ["Hikâye", "Yaşanmış ya da yaşanabilecek olayların kişi, yer, zaman unsurlarıyla anlatıldığı metin"],
    ["Şiir", "Dize ve kıtalardan oluşan, ahenkli bir dille duyguların anlatıldığı metin"], ["Haber", "5N1K sorularına cevap veren, güncel bir olayı bildiren metin"], ["Anı", "Yazarın kendi yaşadıklarını geçmiş zaman kipiyle anlattığı metin"],
    ["Günlük", "Yazarın her gün tarih atarak yaşadıklarını yazdığı metin"], ["Biyografi", "Bir kişinin hayatının başka biri tarafından anlatıldığı metin"], ["Mektup", "Uzakta olan birine duygu ve düşüncelerimizi yazılı olarak ilettiğimiz metin"], ["Afiş", "Bir etkinliği duyurmak için resim ve kısa sözlerle hazırlanan metin"]
  ];
  U.t5e = tiplerden([
    () => { const [a, t] = pick(TUR); return soru(`${t} hangisidir?`, a, TUR.filter((x) => x[0] !== a).map((x) => x[0]), `${a}: ${t.toLocaleLowerCase("tr")}.`); },
    () => { const [a, t] = pick(TUR); return soru(`${a} türünün özelliği hangisidir?`, t, TUR.filter((x) => x[0] !== a).map((x) => x[1]), `${a}: ${t.toLocaleLowerCase("tr")}.`); },
    ifadeler(["Fabllarda genellikle hayvanlar konuşur.", "Masallarda olağanüstü olaylar bulunur.", "Haber metni 5N1K sorularına cevap verir.", "Günlükte tarih atılır.", "Şiir dizelerden oluşur.", "Anı türünde yazar kendi yaşadıklarını anlatır.", "Hikâyede olay, kişi, yer ve zaman unsurları vardır."], ["Fabllarda ders verilmez.", "Masallarda zaman ve yer kesin olarak bellidir.", "Günlükte tarih atılmaz.", "Haber metinleri hayal ürünüdür.", "Biyografide kişi kendi hayatını anlatır.", "Şiirler paragraflardan oluşur.", "Anılar gelecek zamanla yazılır."], "Metin türleri")
  ]);

  const ISIMLER = ["Ali", "Ece", "Can", "Elif", "Mert", "Defne", "Kerem", "Zeynep"];
  U.t5f = tiplerden([
    () => { const k = [...ISIMLER].sort(() => Math.random() - 0.5).slice(0, 4), v = k.map(() => r(60, 180)); const m = Math.max(...v); if (v.filter((x) => x === m).length > 1) return null; const i = v.indexOf(m); return soru(`Okunan sayfa sayıları: ${k.map((x, j) => `${x} ${v[j]}`).join(", ")}. Hangisi doğrudur?`, `En çok sayfayı ${k[i]} okumuştur.`, k.filter((_, j) => j !== i).map((x) => `En çok sayfayı ${x} okumuştur.`), `${m} en büyük değerdir.`); },
    () => { const k = [...ISIMLER].sort(() => Math.random() - 0.5).slice(0, 4), v = k.map(() => r(60, 180)); const top = v.reduce((a, b) => a + b); return soru(`Okunan sayfa sayıları: ${k.map((x, j) => `${x} ${v[j]}`).join(", ")}. Dört öğrenci toplam kaç sayfa okumuştur?`, String(top), [String(top + 10), String(top - 20), String(Math.max(...v) * 4)], `${v.join(" + ")} = ${top}`); },
    () => { const [a, b, c] = [...ISIMLER].sort(() => Math.random() - 0.5).slice(0, 3); const R = ["kırmızı", "mavi", "yeşil"].sort(() => Math.random() - 0.5); const B = (x) => x.charAt(0).toLocaleUpperCase("tr") + x.slice(1); return soru(`${a}, ${b} ve ${c} birbirinden farklı renkte bere takıyor (${R.join(", ")}). ${b} ${R[0]} bere takıyor. ${a} ${R[1]} bere takmıyor. ${c} hangi renk bere takıyor?`, B(R[1]), [B(R[0]), B(R[2]), "Bilinemez"], `${R[0]} bereyi ${b} takıyor. ${a} ${R[1]} takmadığına göre ${R[2]} takar. Geriye kalan ${R[1]} bere ${c} için.`); }
  ]);
})();

// İsim-fiil ayrımı (5. sınıf) — 6. sınıf isim üretecine eklenir
(function () {
  const U = window.URETEC, { soru, tiplerden, siniflandir, pick, dir } = window.UR;
  const IF = { "isim": ["kitap", "deniz", "sevgi", "okul", "kalem", "umut", "ağaç", "masa", "bulut", "dostluk", "şehir", "çiçek", "korku", "kapı", "rüzgâr"], "fiil": ["koşmak", "yazmak", "gülmek", "okumak", "uyumak", "düşünmek", "gelmek", "sevmek", "çizmek", "anlatmak", "büyümek", "sararmak", "beklemek", "dinlemek", "sormak"] };
  const CUM = [["Elif sabah erkenden okula gitti.", "gitti"], ["Kuşlar ağacın dalında ötüyor.", "ötüyor"], ["Annem bize kek yaptı.", "yaptı"], ["Kardeşim bahçede top oynuyor.", "oynuyor"], ["Dedem gazete okudu.", "okudu"], ["Rüzgâr pencereyi çarptı.", "çarptı"], ["Çocuklar parkta koştu.", "koştu"], ["Öğretmen soruyu tahtaya yazdı.", "yazdı"]];
  const eski = U.tr2k1;
  U.tr2k1 = tiplerden([eski, eski,
    siniflandir(IF, (g) => `Hangisi bir ${dir(g)}?`, (d, g) => `"${d}" bir ${dir(g)}. Fiillere -mek/-mak eklenebilir, isimler varlık ve kavramları karşılar.`),
    () => { const [c, f] = pick(CUM); const isimler = c.replace(/[.,]/g, "").split(" ").filter((w) => w !== f); return soru(`"${c}" cümlesindeki fiil (eylem) hangisidir?`, f, isimler, `"${f}" bir iş/hareket bildirir ve çekimlenmiştir.`); }
  ]);
})();
