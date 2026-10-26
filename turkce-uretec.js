// 6. sınıf Türkçe soru üreteçleri (ortak-uretec.js'ten sonra yüklenir)
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
