// 6. sınıf Fen Bilimleri soru üreteçleri (ortak-uretec.js'ten sonra yüklenir)
(function () {
  const U = window.URETEC, { r, pick, karistir, soru, tiplerden, eslestir, siniflandir, ifadeler } = window.UR;
  const ond1 = (x) => (Math.round(x * 10) / 10).toString().replace(".", ",");

  // ---------- Güneş sistemi ----------
  const GEZ = ["Merkür", "Venüs", "Dünya", "Mars", "Jüpiter", "Satürn", "Uranüs", "Neptün"];
  U.f1k1 = tiplerden([
    () => { const i = r(0, 6); return soru(`Güneş'e yakınlık sırasına göre ${GEZ[i]}'den sonra gelen gezegen hangisidir?`, GEZ[i + 1], GEZ.filter((_, j) => j !== i + 1 && j !== i), `Sıralama: ${GEZ.join(", ")}.`); },
    () => { const i = r(1, 7); return soru(`Güneş'e yakınlık sırasına göre ${GEZ[i]}'den önce gelen gezegen hangisidir?`, GEZ[i - 1], GEZ.filter((_, j) => j !== i - 1 && j !== i), `Sıralama: ${GEZ.join(", ")}.`); },
    () => { const i = r(0, 7); return soru(`Güneş'e yakınlık sırasına göre ${i + 1}. gezegen hangisidir?`, GEZ[i], GEZ.filter((_, j) => j !== i), `Sıralama: ${GEZ.join(", ")}.`); },
    siniflandir({ "iç gezegen": GEZ.slice(0, 4), "dış gezegen": GEZ.slice(4) }, (g) => `Hangisi bir ${g}dir?`, (d, g) => `${d} bir ${g}dir. İç gezegenler: Merkür, Venüs, Dünya, Mars.`),
    ifadeler([
      "Güneş bir yıldızdır.", "Jüpiter en büyük gezegendir.", "Merkür en küçük gezegendir.", "Venüs en sıcak gezegendir.",
      "Dış gezegenlerin hepsinin halkası vardır.", "İç gezegenler kayalık yapılıdır.", "Asteroit kuşağı Mars ile Jüpiter arasındadır.",
      "Gezegenler Güneş'ten aldıkları ışığı yansıtır.", "Merkür ve Venüs'ün uydusu yoktur.", "Dünya, canlı yaşadığı bilinen tek gezegendir.",
      "Neptün, Güneş'e en uzak gezegendir.", "Dış gezegenler gaz yapılıdır."
    ], [
      "Ay bir gezegendir.", "Satürn bir iç gezegendir.", "Merkür en büyük gezegendir.", "Gezegenler kendi ışığını üretir.",
      "Mars bir dış gezegendir.", "Asteroit kuşağı Dünya ile Mars arasındadır.", "Güneş bir gezegendir.", "Bütün gezegenlerin uydusu vardır.",
      "Jüpiter kayalık yapılı küçük bir gezegendir.", "Güneş sisteminde 9 gezegen vardır.", "Venüs, Güneş'e en uzak gezegendir.", "İç gezegenlerin hepsi halkalıdır."
    ], "Güneş sistemi")
  ]);

  U.f1k2 = tiplerden([
    eslestir([["Batlamyus", "yer merkezli modeli savundu"], ["Kopernik", "güneş merkezli modeli ortaya koydu"], ["Galileo", "teleskopla Jüpiter'in uydularını gözledi"], ["Kepler", "yörüngelerin elips şeklinde olduğunu buldu"]],
      (a) => `${a} hangi çalışmasıyla bilinir?`, (b) => `Hangi bilim insanı ${b}?`, (a, b) => `${a} ${b}.`),
    ifadeler([
      "Yer merkezli modelde Dünya merkezdedir.", "Güneş merkezli modelde Güneş merkezdedir.", "Kopernik güneş merkezli modeli önerdi.",
      "Galileo teleskop kullanarak gözlem yaptı.", "Kepler gezegen yörüngelerinin elips olduğunu buldu.", "Plüton günümüzde cüce gezegen olarak kabul edilir.",
      "Bilimsel bilgi yeni kanıtlarla değişebilir.", "Batlamyus yer merkezli modeli savundu."
    ], [
      "Yer merkezli modelde Güneş merkezdedir.", "Kopernik yer merkezli modeli savundu.", "Galileo mikroskopla gezegenleri gözledi.",
      "Kepler'e göre yörüngeler tam bir çemberdir.", "Plüton bugün hâlâ gezegen sayılır.", "Bilimsel bilgiler hiçbir zaman değişmez.",
      "Batlamyus güneş merkezli modeli ortaya koydu.", "Güneş merkezli modelde Dünya hareket etmez."
    ], "Güneş sistemi modelleri")
  ]);

  const TUT = {
    "Güneş tutulması": ["Ay, Güneş ile Dünya'nın arasına girer.", "Yeni ay evresinde gerçekleşir.", "Gündüz gözlenir.", "Ay'ın gölgesi Dünya'ya düşer.", "Sıralama Güneş – Ay – Dünya şeklindedir.", "Halkalı olarak da gerçekleşebilir.", "Çıplak gözle izlenmemelidir."],
    "Ay tutulması": ["Dünya, Güneş ile Ay'ın arasına girer.", "Dolunay evresinde gerçekleşir.", "Gece gözlenir.", "Dünya'nın gölgesi Ay'a düşer.", "Sıralama Güneş – Dünya – Ay şeklindedir.", "Çıplak gözle güvenle izlenebilir."]
  };
  U.f1k3 = tiplerden([
    () => { const g = pick(Object.keys(TUT)), d = pick(TUT[g]), o = Object.keys(TUT).find((x) => x !== g); return soru(`Aşağıdakilerden hangisi ${g.toLocaleLowerCase("tr")} için doğrudur?`, d, TUT[o], `${g}: ${d}`); },
    () => { const g = pick(Object.keys(TUT)), d = pick(TUT[g]); return soru(`"${d}" ifadesi hangi olayı anlatır?`, g, ["Ay'ın evreleri", "Mevsimlerin oluşumu", "Gece ve gündüz", ...Object.keys(TUT).filter((x) => x !== g)], `Bu ifade ${g.toLocaleLowerCase("tr")}nı anlatır.`); }
  ]);

  // ---------- Kuvvet ve hareket ----------
  const YON = [["sağa", "sola"], ["doğuya", "batıya"], ["kuzeye", "güneye"], ["ileri", "geri"]];
  U.f2k1 = tiplerden([
    () => { const a = r(2, 30) * 5, b = r(2, 30) * 5, [y] = pick(YON); return soru(`Bir cisme aynı yönde (${y}) ${a} N ve ${b} N büyüklüğünde iki kuvvet uygulanıyor. Bileşke kuvvet kaç N'dur?`, `${a + b} N, ${y}`, [`${Math.abs(a - b)} N, ${y}`, `${a + b} N, ters yöne`, `${a * b} N, ${y}`, `${Math.max(a, b)} N, ${y}`], `Aynı yönlü kuvvetler toplanır: ${a} + ${b} = ${a + b} N. Yön değişmez: ${y}.`); },
    () => { let a, b; do { a = r(2, 30) * 5; b = r(2, 30) * 5; } while (a === b); const [y1, y2] = pick(YON), by = a > b ? y1 : y2; return soru(`Bir cisme ${a} N ${y1}, ${b} N ${y2} doğru iki kuvvet uygulanıyor. Bileşke kuvvet hangisidir?`, `${Math.abs(a - b)} N, ${by}`, [`${Math.abs(a - b)} N, ${by === y1 ? y2 : y1}`, `${a + b} N, ${by}`, `${a + b} N, ${by === y1 ? y2 : y1}`, "0 N"], `Zıt yönlü kuvvetlerde büyükten küçük çıkarılır: ${Math.max(a, b)} − ${Math.min(a, b)} = ${Math.abs(a - b)} N. Yön büyük kuvvetin yönü: ${by}.`); },
    () => { const a = r(2, 30) * 5, [y1, y2] = pick(YON); return soru(`Bir cisme ${a} N ${y1}, ${a} N ${y2} doğru kuvvet uygulanıyor. Bileşke kuvvet kaç N'dur?`, "0", [String(2 * a), String(a), String(a / 5)], "Eşit büyüklükte ve zıt yönlü kuvvetlerin bileşkesi 0'dır."); },
    () => { const a = r(3, 25) * 5, b = r(1, 15) * 5, [y1, y2] = pick(YON); return soru(`Halat çekme yarışında A takımı ${a + b} N ile ${y1}, B takımı ${a} N ile ${y2} çekiyor. Halat hangi yöne, kaç N'luk bileşke kuvvetle hareket eder?`, `${y1}, ${b} N`, [`${y2}, ${b} N`, `${y1}, ${2 * a + b} N`, `${y2}, ${2 * a + b} N`, "Hareket etmez"], `${a + b} − ${a} = ${b} N. Halat büyük kuvvetin yönüne, ${y1} hareket eder.`); },
    () => { const top = r(6, 30) * 5, a = r(1, top / 5 - 1) * 5, [y] = pick(YON); return soru(`Aynı yönlü iki kuvvetin bileşkesi ${top} N'dur. Kuvvetlerden biri ${a} N ise diğeri kaç N'dur?`, String(top - a), [String(top + a), String(a), String(top)], `${top} − ${a} = ${top - a} N.`); }
  ]);

  U.f2k2 = tiplerden([
    siniflandir({
      "dengelenmiş": ["Masanın üzerinde duran kitap", "Tavandan sarkan lamba", "Sabit süratle düz yolda giden araba", "Eşit kuvvetle çekilen ve kıpırdamayan halat", "Rafta duran vazo", "Sabit süratle inen paraşütçü"],
      "dengelenmemiş": ["Kalkış yapan otobüs", "Frene basılınca yavaşlayan bisiklet", "Tekmeyle harekete geçen top", "Virajı dönen araba", "Yere düşen elma", "Yokuş aşağı hızlanan kızak"]
    }, (g) => `Hangisinde cisme etki eden kuvvetler ${g}tir?`, (d, g) => `${d}: kuvvetler ${g}tir. ${g === "dengelenmiş" ? "Cismin hareket durumu değişmiyor." : "Cismin hareket durumu (sürat ya da yön) değişiyor."}`),
    ifadeler([
      "Dengelenmiş kuvvetlerin bileşkesi sıfırdır.", "Dengelenmiş kuvvetler etkisindeki duran cisim durmaya devam eder.", "Dengelenmemiş kuvvetler cismin süratini değiştirebilir.",
      "Dengelenmemiş kuvvetler cismin yönünü değiştirebilir.", "Sabit süratle düz giden cisme etki eden kuvvetler dengelenmiştir.", "Duran bir cismi harekete geçirmek için dengelenmemiş kuvvet gerekir."
    ], [
      "Dengelenmiş kuvvetlerin bileşkesi sıfırdan büyüktür.", "Dengelenmiş kuvvetler duran cismi harekete geçirir.", "Dengelenmemiş kuvvetler cismin hareketini hiç değiştirmez.",
      "Yavaşlayan bir araca etki eden kuvvetler dengelenmiştir.", "Masada duran kitaba hiç kuvvet etki etmez.", "Virajı dönen bir araca etki eden kuvvetler dengelenmiştir."
    ], "Kuvvetler")
  ]);

  U.f2k3 = tiplerden([
    () => { const v = r(2, 12), t = r(5, 60), x = v * t; return soru(`Bir koşucu ${x} metreyi ${t} saniyede koşuyor. Koşucunun sürati kaç m/s'dir?`, String(v), [String(v + 1), String(x - t), String(t)].filter((z) => z !== String(v)).concat([String(v * 2), String(v + 2)]), `Sürat = yol ÷ süre = ${x} ÷ ${t} = ${v} m/s.`); },
    () => { const v = r(4, 12) * 10, t = r(2, 6); return soru(`Bir otomobil ${v} km/sa sabit süratle ${t} saat yol alıyor. Kaç km yol alır?`, String(v * t), [String(v + t), String(v * (t + 1)), String(v * (t - 1)), String(v / 10 * t)], `Yol = sürat × süre = ${v} × ${t} = ${v * t} km.`); },
    () => { const v = r(4, 12) * 10, t = r(2, 7); return soru(`${v * t} km'lik yolu ${v} km/sa sabit süratle giden bir otobüs kaç saatte gider?`, String(t), [String(t + 1), String(t - 1), String(t + 2), String(v)].filter((z) => +z > 0), `Süre = yol ÷ sürat = ${v * t} ÷ ${v} = ${t} saat.`); },
    () => { const [y1] = pick(YON), v = r(3, 25) * 5; return soru("Hangisi bir hız bildirir?", `${y1} doğru ${v} km/sa`, [`${v} km/sa`, `${v} m/s`, `saatte ${v} km`, `${v + 5} km/sa`], "Hız, sürate ek olarak yönü de belirtir."); },
    () => { const v1 = r(2, 9), v2 = v1 + r(1, 5), t = r(10, 40), [A, B] = karistir(["Ali", "Ece", "Can", "Zeynep", "Mert", "Elif"]); return soru(`${A} ${v1 * t} metreyi, ${B} ${v2 * t} metreyi ${t} saniyede koşuyor. Hangisi doğrudur?`, `${B} daha süratlidir.`, [`${A} daha süratlidir.`, "İkisinin sürati eşittir.", `${A} saniyede ${v2} metre koşar.`], `${A}: ${v1 * t} ÷ ${t} = ${v1} m/s. ${B}: ${v2 * t} ÷ ${t} = ${v2} m/s. ${B} daha süratli.`); }
  ]);

  // ---------- Canlılarda sistemler ----------
  U.f3k1 = tiplerden([
    siniflandir({
      "bölünme": ["amip", "bakteri", "terliksi hayvan", "öglena"],
      "tomurcuklanma": ["bira mayası", "hidra", "sünger"],
      "rejenerasyon": ["deniz yıldızı", "planarya", "toprak solucanı"],
      "sporla üreme": ["şapkalı mantar", "eğrelti otu", "küf mantarı", "kara yosunu"],
      "vejetatif üreme": ["patates yumrusu", "çilek", "söğüt çeliği", "soğan", "menekşe yaprağı"]
    }, (g) => `Hangisinde ${g} ile eşeysiz üreme görülür?`, (d, g) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)} ${g} ile çoğalır.`, (d) => `"${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)}" hangi yolla çoğalır?`),
    siniflandir({ "dış döllenme": ["alabalık", "kurbağa", "hamsi", "kurbağa ve balıklar"], "iç döllenme": ["kedi", "tavuk", "kertenkele", "yılan", "inek", "güvercin"] },
      (g) => `Hangisinde ${g} görülür?`, (d, g) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)}: ${g}.`),
    ifadeler([
      "Eşeysiz üremede tek ata vardır.", "Eşeyli üremede iki ata vardır.", "Eşeyli üremede döllenme olur.", "Eşeyli üreme çeşitliliği sağlar.",
      "Eşeysiz üremede yavrular atasıyla aynı özelliktedir.", "Tozlaşmada arılar ve rüzgâr rol oynar.", "Döllenmeden sonra çiçekli bitkilerde tohum oluşur.", "Yumurta ve sperm üreme hücreleridir."
    ], [
      "Eşeysiz üremede döllenme olur.", "Eşeyli üremede yavrular tıpatıp atasının aynısıdır.", "Eşeysiz üremede iki ata gerekir.", "Deniz yıldızı sporla ürer.",
      "Bütün hayvanlarda dış döllenme görülür.", "Tozlaşma eşeysiz üremedir.", "Kedilerde dış döllenme görülür.", "Bira mayası rejenerasyonla ürer."
    ], "Üreme")
  ]);

  U.f3k2 = tiplerden([
    siniflandir({ "tam başkalaşım": ["kelebek", "arı", "sinek", "ipek böceği"], "eksik başkalaşım": ["çekirge", "hamam böceği", "kızböceği"], "başkalaşım geçirmez": ["kedi", "insan", "tavuk", "köpek", "kaplumbağa"] },
      (g) => g === "başkalaşım geçirmez" ? "Hangisi başkalaşım geçirmez?" : `Hangisinde ${g} görülür?`, (d, g) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)}: ${g}.`),
    () => { const e = pick([["kelebek", ["yumurta", "tırtıl", "pupa", "kelebek"]], ["çekirge", ["yumurta", "nimf", "ergin çekirge"]], ["kurbağa", ["yumurta", "iribaş", "ergin kurbağa"]]]); const d = e[1].join(" → "); const yan = [karistir(e[1]).join(" → "), karistir(e[1]).join(" → "), e[1].slice().reverse().join(" → "), [e[1][1], e[1][0], ...e[1].slice(2)].join(" → ")]; return soru(`${e[0].charAt(0).toLocaleUpperCase("tr") + e[0].slice(1)} gelişim evreleri doğru sırayla hangisidir?`, d, yan, `${d}.`); },
    ifadeler([
      "Çimlenme için su gerekir.", "Çimlenme için uygun sıcaklık gerekir.", "Çimlenme için oksijen gerekir.", "İribaş solungaçla solunum yapar.",
      "Kelebekte tam başkalaşım görülür.", "Nimf evresi çekirgede görülür.", "Tırtıl, kelebeğin larva evresidir.", "Tohum çimlenmenin başında kendi besinini kullanır."
    ], [
      "Çimlenme için mutlaka toprak gerekir.", "Kelebekte nimf evresi vardır.", "Kedi başkalaşım geçirir.", "Kurbağa yumurtadan ergin olarak çıkar.",
      "Çekirgede pupa evresi vardır.", "Çimlenmenin başında güneş ışığı mutlaka gerekir.", "İribaş karada yaşar.", "Tavukta tam başkalaşım görülür."
    ], "Büyüme ve gelişme")
  ]);

  U.f3k3 = tiplerden([
    eslestir([["Büyük beyin", "düşünme, öğrenme ve hafıza"], ["Beyincik", "denge ve hareketlerin uyumu"], ["Omurilik soğanı", "kalp atışı ve solunum kontrolü"], ["Omurilik", "refleks hareketler"], ["Hipofiz", "büyüme hormonu salgılama"], ["Tiroit", "metabolizma hızını ayarlama"], ["Pankreas", "kan şekerini düzenleme"], ["Böbreküstü bezi", "korku ve heyecan anında adrenalin salgılama"]],
      (a) => `${a} hangi görevi yapar?`, (b) => `Hangi yapı ${b} görevini yapar?`, (a, b) => `${a}: ${b}.`),
    siniflandir({ "sinir sistemi": ["beyincik", "omurilik", "büyük beyin", "omurilik soğanı"], "iç salgı bezi": ["tiroit", "hipofiz", "pankreas", "böbreküstü bezi"] },
      (g) => `Hangisi ${g === "sinir sistemi" ? "sinir sistemine ait bir yapıdır" : "bir iç salgı bezidir"}?`, (d, g) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)} bir ${g === "sinir sistemi" ? "sinir sistemi yapısı" : "iç salgı bezi"}dir.`),
    siniflandir({ "refleks": ["sıcak sobadan eli hemen çekmek", "dizine çekiçle vurulunca bacağın sıçraması", "göze yaklaşan cisim karşısında gözü kırpmak", "batan iğneden eli çekmek"], "istemli": ["kitap okumak", "bisiklet sürmeyi öğrenmek", "resim yapmak", "şiir ezberlemek"] },
      (g) => `Hangisi ${g === "refleks" ? "bir refleks davranıştır" : "istemli (düşünerek yapılan) bir davranıştır"}?`, (d, g) => `"${d}" ${g === "refleks" ? "omurilik tarafından yönetilen bir reflekstir" : "büyük beyin tarafından yönetilen istemli bir harekettir"}.`)
  ]);

  U.f3k4 = ifadeler([
    "Ergenlik çocukluktan yetişkinliğe geçiş dönemidir.", "Ergenlik değişimlerini hormonlar başlatır.", "Ergenlikte boy hızla uzar.", "Ergenlikte terleme artabilir.",
    "Ergenlikte duygusal değişimler yaşanması normaldir.", "Ergenlik herkeste aynı yaşta başlamayabilir.", "Dengeli beslenme sağlıklı büyümeye yardım eder.", "Yeterli uyku büyüme için önemlidir.",
    "Düzenli spor kasları ve kemikleri güçlendirir.", "Sigara sinir sistemine zarar verir."
  ], [
    "Ergenlik herkeste tam olarak aynı yaşta başlar.", "Ergenlik değişimleri hastalık belirtisidir.", "Ergenlikte boy kısalır.", "Ergenlik dönemi yetişkinlikten sonra gelir.",
    "Ergenlik değişimlerini kaslar başlatır.", "Uyku süresinin büyümeye hiçbir etkisi yoktur.", "Ergenlikte kişisel temizliğe gerek yoktur.", "Sağlıklı yaşam için sadece tatlı yemek yeterlidir.",
    "Duygusal değişimler sadece yetişkinlerde görülür.", "Spor yapmak büyümeyi durdurur."
  ], "Ergenlik ve sağlıklı yaşam");

  // ---------- Işık ----------
  U.f4k1 = tiplerden([
    () => { let x; do { x = r(10, 80); } while (x === 45); return soru(`Bir ışın aynaya, yüzey ile ${x}° açı yapacak şekilde geliyor. Yansıma açısı kaç derecedir?`, `${90 - x}°`, [`${x}°`, `${180 - x}°`, `${2 * x}°`, `${90 + x}°`], `Açılar normalden ölçülür. Gelme açısı = 90° − ${x}° = ${90 - x}°. Yansıma açısı = gelme açısı = ${90 - x}°.`); },
    () => { const g = r(10, 80); return soru(`Gelme açısı ${g}° olan bir ışının yansıma açısı kaç derecedir?`, `${g}°`, [`${90 - g}°`, `${180 - g}°`, `${2 * g}°`, `${g + 10}°`], "Yansıma kanununa göre gelme açısı yansıma açısına eşittir."); },
    () => { const g = r(10, 80); return soru(`Gelme açısı ${g}° olan bir ışında gelen ışın ile yansıyan ışın arasındaki açı kaç derecedir?`, `${2 * g}°`, [`${g}°`, `${90 - g}°`, `${180 - 2 * g}°`, `${180 - g}°`], `Gelme ${g}° + yansıma ${g}° = ${2 * g}°.`); },
    siniflandir({ "düzgün yansıma": ["ayna", "durgun su", "parlak metal tepsi", "cilalı mermer", "cam vitrin"], "dağınık yansıma": ["defter sayfası", "duvar", "kumaş", "tahta masa", "karton", "toprak"] },
      (g) => `Hangi yüzeyde ${g} olur?`, (d, g) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)}: ${g}. ${g === "düzgün yansıma" ? "Pürüzsüz yüzeyde görüntü oluşur." : "Pürüzlü yüzeyde ışınlar dağılır, görüntü oluşmaz."}`)
  ]);

  U.f4k2 = tiplerden([
    siniflandir({ "çukur ayna": ["el feneri", "araba farı", "güneş ocağı", "diş hekimi aynası", "makyaj aynası", "projektör"], "tümsek ayna": ["araç yan aynası", "kör kavşak aynası", "market güvenlik aynası", "otopark çıkış aynası"], "düz ayna": ["banyo aynası", "boy aynası", "periskop", "dolap aynası"] },
      (g) => `Hangisinde ${g} kullanılır?`, (d, g) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)}: ${g}.`, (d) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)} için hangi ayna kullanılır?`),
    ifadeler([
      "Düz aynada görüntü cisimle aynı boydadır.", "Düz aynada sağ ve sol yer değiştirir.", "Çukur ayna ışığı toplar.", "Tümsek ayna ışığı dağıtır.",
      "Tümsek aynanın görüş alanı geniştir.", "Tümsek aynada görüntü cisimden küçüktür.", "Çukur ayna yakındaki cismi büyük gösterebilir.", "Düz aynada görüntü düzdür."
    ], [
      "Düz aynada görüntü cisimden büyüktür.", "Tümsek ayna ışığı bir noktada toplar.", "Çukur aynanın görüş alanı tümsek aynadan geniştir.", "Düz aynada görüntü baş aşağıdır.",
      "Araba farlarında tümsek ayna kullanılır.", "Tümsek ayna görüntüyü büyütür.", "Kavşak aynaları çukur aynadır.", "Güneş ocağında tümsek ayna kullanılır."
    ], "Aynalar")
  ]);

  const RENK = ["kırmızı", "yeşil", "mavi"], RENK_EK = { "kırmızı": "kırmızı", "yeşil": "yeşil", "mavi": "mavi", "beyaz": "beyaz", "siyah": "siyah" };
  U.f4k3 = tiplerden([
    () => {
      const cisim = pick(["kırmızı", "yeşil", "mavi", "beyaz", "siyah"]), isik = pick([...RENK, "beyaz"]);
      let g;
      if (isik === "beyaz") g = cisim;
      else if (cisim === "beyaz") g = isik;
      else if (cisim === isik) g = cisim;
      else g = "siyah";
      const ne = pick(["tişört", "top", "kalem", "kitap", "şapka"]);
      return soru(`Beyaz ışıkta ${RENK_EK[cisim]} görünen bir ${ne}, karanlık bir odada yalnızca ${isik} ışıkla aydınlatılırsa hangi renkte görünür?`, g.charAt(0).toLocaleUpperCase("tr") + g.slice(1),
        ["Kırmızı", "Yeşil", "Mavi", "Beyaz", "Siyah"].filter((x) => x.toLocaleLowerCase("tr") !== g),
        isik === "beyaz" ? "Beyaz ışık bütün renkleri içerir; cisim kendi renginde görünür." : cisim === "beyaz" ? `Beyaz cisim gelen her rengi yansıtır; ${isik} görünür.` : cisim === isik ? `Cisim ${isik} ışığı yansıtır; ${isik} görünür.` : `${RENK_EK[cisim].charAt(0).toLocaleUpperCase("tr") + RENK_EK[cisim].slice(1)} cisim ${isik} ışığı soğurur, yansıtacak ışık olmadığı için siyah görünür.`);
    },
    () => { const sira = ["kırmızı", "turuncu", "sarı", "yeşil", "mavi", "lacivert", "mor"], i = r(0, 5); return soru(`Beyaz ışık prizmadan geçince oluşan renk sıralamasında "${sira[i]}" renginden sonra hangi renk gelir?`, sira[i + 1], sira.filter((_, j) => j !== i + 1 && j !== i), `Sıralama: ${sira.join(", ")}.`); },
    ifadeler([
      "Beyaz ışık birçok rengin birleşimidir.", "Prizma beyaz ışığı renklerine ayırır.", "Beyaz cisim bütün renkleri yansıtır.", "Siyah cisim bütün renkleri soğurur.",
      "Cisim yansıttığı ışığın renginde görünür.", "Gökkuşağı su damlalarının ışığı ayırmasıyla oluşur.", "Yeşil yaprak beyaz ışığın yeşil kısmını yansıtır."
    ], [
      "Beyaz ışık tek renktir.", "Siyah cisim bütün renkleri yansıtır.", "Beyaz cisim bütün renkleri soğurur.", "Cisim soğurduğu ışığın renginde görünür.",
      "Prizma beyaz ışığı tek renge dönüştürür.", "Gökkuşağı ayın ışığıyla oluşur.", "Kırmızı elma kırmızı ışığı soğurur."
    ], "Işık ve renkler")
  ]);

  U.f4k4 = tiplerden([
    eslestir([["Güneş paneli", "güneş enerjisini elektriğe çevirir"], ["Güneş kolektörü", "güneş enerjisiyle su ısıtır"], ["Güneş ocağı", "çukur aynayla ışığı toplayıp yemek pişirir"], ["Sera", "güneş ışığını içeride tutarak bitkileri sıcak tutar"]],
      (a) => `${a} ne işe yarar?`, (b) => `Hangisi ${b}?`, (a, b) => `${a} ${b}.`),
    ifadeler([
      "Koyu renkli cisimler ışığı daha çok soğurur.", "Açık renkli cisimler ışığı daha çok yansıtır.", "Güneş enerjisi yenilenebilir bir enerji kaynağıdır.",
      "Yazın açık renkli giysiler daha serin tutar.", "Güneş kolektörlerinin içi siyaha boyanır.", "Güneş enerjisi çevreyi kirletmez."
    ], [
      "Açık renkli cisimler ışığı daha çok soğurur.", "Güneş enerjisi tükenen bir kaynaktır.", "Siyah giysiler yazın en serin giysilerdir.",
      "Güneş paneli suyu ısıtmak için kullanılır.", "Güneş enerjisi havayı çok kirletir.", "Güneş kolektörlerinin içi beyaza boyanır."
    ], "Güneş enerjisi")
  ]);

  // ---------- Madde ----------
  U.f5k1 = tiplerden([
    siniflandir({
      "genleşme": ["Yazın elektrik tellerinin sarkması", "Sıcak suya tutulan kapağın gevşemesi", "Termometredeki sıvının yükselmesi", "Güneşte kalan balonun şişmesi", "Yazın raylar arasındaki boşluğun daralması"],
      "büzülme": ["Kışın elektrik tellerinin gerilmesi", "Buzdolabına konan şişirilmiş balonun küçülmesi", "Soğuk havada araba lastiğinin inmesi", "Soğuk havada termometredeki sıvının alçalması"]
    }, (g) => `Hangisi ${g} örneğidir?`, (d, g) => `${d}: ${g}. ${g === "genleşme" ? "Isı alan madde genleşir." : "Isı veren madde büzülür."}`),
    ifadeler([
      "Isı alan maddeler genleşir.", "Isı veren maddeler büzülür.", "Gazlar katılardan daha çok genleşir.", "Köprülerde genleşme aralığı bırakılır.",
      "Farklı katılar farklı miktarda genleşir.", "Buz suyun üzerinde yüzer.", "Genleşmede maddenin tanecikleri birbirinden uzaklaşır."
    ], [
      "Isı alan maddeler büzülür.", "Katılar gazlardan daha çok genleşir.", "Genleşmede maddenin kütlesi artar.", "Bütün katılar aynı miktarda genleşir.",
      "Buz suyun dibine batar.", "Genleşmede tanecikler birbirine yaklaşır.", "Elektrik telleri kışın sarkar."
    ], "Genleşme ve büzülme")
  ]);

  const MADDE = [["su", 0, 100], ["alkol", -114, 78], ["cıva", -39, 357],["kurşun", 327, 1749], ["demir", 1538, 2862], ["altın", 1064, 2856], ["naftalin", 80, 218], ["bakır", 1085, 2562], ["alüminyum", 660, 2470]];
  U.f5k2 = tiplerden([
    () => {
      const [ad, e, k] = pick(MADDE), hal = pick(["katı", "sıvı", "gaz"]);
      const t = hal === "katı" ? e - r(5, 60) : hal === "sıvı" ? r(e + 1, k - 1) : k + r(5, 100);
      return soru(`Erime noktası ${e} °C, kaynama noktası ${k} °C olan ${ad} ${t} °C'de hangi hâldedir?`, hal.charAt(0).toLocaleUpperCase("tr") + hal.slice(1), ["Katı", "Sıvı", "Gaz", "Plazma"].filter((x) => x.toLocaleLowerCase("tr") !== hal),
        hal === "katı" ? `${t} °C erime noktasından (${e} °C) düşük → katı.` : hal === "sıvı" ? `${t} °C, erime (${e} °C) ile kaynama (${k} °C) noktası arasında → sıvı.` : `${t} °C kaynama noktasından (${k} °C) yüksek → gaz.`);
    },
    () => { const [ad, e] = pick(MADDE); return soru(`Erime noktası ${e} °C olan saf bir maddenin (${ad}) donma noktası kaç °C'dir?`, `${e} °C`, [`${e + 10} °C`, `${e - 10} °C`, "0 °C", "100 °C"], "Saf maddelerde erime noktası donma noktasına eşittir."); },
    ifadeler([
      "Saf suyun donma noktası 0 °C'dir.", "Saf su deniz seviyesinde 100 °C'de kaynar.", "Hal değişimi sırasında sıcaklık sabit kalır.", "Erime noktası saf maddeler için ayırt edicidir.",
      "Saf maddede erime ve donma noktası aynıdır.", "Yükseklere çıkıldıkça suyun kaynama noktası düşer.", "Kaynama noktası saf maddeler için ayırt edicidir."
    ], [
      "Kaynama süresince suyun sıcaklığı artmaya devam eder.", "Saf suyun donma noktası 100 °C'dir.", "Erime noktası donma noktasından her zaman büyüktür.", "Bütün maddeler 100 °C'de kaynar.",
      "Dağın tepesinde su daha yüksek sıcaklıkta kaynar.", "Kütle saf maddeler için ayırt edici bir özelliktir.", "Erime sırasında sıcaklık sürekli artar."
    ], "Erime ve kaynama")
  ]);

  const YOG = [["mantar", 0.2], ["tahta", 0.6], ["buz", 0.9], ["zeytinyağı", 0.9], ["su", 1], ["gliserin", 1.3], ["alüminyum", 2.7], ["demir", 7.9], ["bakır", 8.9], ["kurşun", 11.3], ["altın", 19.3]];
  U.f5k3 = tiplerden([
    () => { const d = r(2, 12), V = r(3, 25), m = d * V; return soru(`Kütlesi ${m} g, hacmi ${V} cm³ olan bir maddenin yoğunluğu kaç g/cm³'tür?`, String(d), [String(m * V), String(m - V), String(d + 1), String(m + V), String(d * 2)], `Yoğunluk = kütle ÷ hacim = ${m} ÷ ${V} = ${d} g/cm³.`); },
    () => { const d = r(2, 12), V = r(3, 20); return soru(`Yoğunluğu ${d} g/cm³ olan bir maddenin ${V} cm³'ünün kütlesi kaç gramdır?`, String(d * V), [String(d + V), String(d * V + d), String(d * (V - 1)), String(V)].filter((z) => z !== String(d * V)), `Kütle = yoğunluk × hacim = ${d} × ${V} = ${d * V} g.`); },
    () => { const d = r(2, 10), V = r(3, 20), m = d * V; return soru(`Yoğunluğu ${d} g/cm³ olan ${m} g'lık bir maddenin hacmi kaç cm³'tür?`, String(V), [String(m * d), String(V + 1), String(V + d), String(d)].filter((z) => z !== String(V)), `Hacim = kütle ÷ yoğunluk = ${m} ÷ ${d} = ${V} cm³.`); },
    () => { const yuz = YOG.filter((x) => x[1] < 1), bat = YOG.filter((x) => x[1] > 1), [a, d] = pick(yuz), diger = karistir(bat).slice(0, 3); return soru(`Yoğunlukları verilen maddelerden hangisi suda (1 g/cm³) yüzer? ${karistir([[a, d], ...diger]).map(([n, v]) => `${n}: ${ond1(v)} g/cm³`).join(" · ")}`, a, diger.map((x) => x[0]), `Yoğunluğu sudan küçük olan ${a} (${ond1(d)} g/cm³) yüzer.`); },
    () => { const [n1, d1] = pick(YOG.filter((x) => x[1] > 2)); return soru(`Yoğunluğu ${ond1(d1)} g/cm³ olan ${n1} bir küp ikiye kesilirse parçalardan birinin yoğunluğu kaç g/cm³ olur?`, ond1(d1), [ond1(d1 / 2), ond1(d1 * 2), "1"], "Yoğunluk madde miktarına bağlı değildir; aynı kalır."); }
  ]);

  U.f5k4 = ifadeler([
    "Buzun yoğunluğu suyun yoğunluğundan küçüktür.", "Göller kışın yüzeyden donar.", "Yüzeydeki buz tabakası alttaki suyun donmasını engeller.", "Balıklar yüzme kesesiyle suda yükselip alçalır.",
    "Tuzlu suyun yoğunluğu tatlı sudan büyüktür.", "Isınan havanın yoğunluğu azalır.", "Denizaltılar tanklarına su alarak dalar.", "Lut Gölü'nde insanlar kolayca yüzebilir."
  ], [
    "Buzun yoğunluğu sudan büyüktür.", "Göller kışın dipten donmaya başlar.", "Balıklar solungaçlarıyla suda yükselip alçalır.", "Tatlı suyun yoğunluğu tuzlu sudan büyüktür.",
    "Isınan havanın yoğunluğu artar.", "Denizaltılar tanklarındaki suyu boşaltarak dalar.", "Denizde yüzmek havuzda yüzmekten zordur.", "Sıcak hava balonu soğuk hava sayesinde yükselir."
  ], "Yoğunluğun canlılar için önemi");

  // ---------- Elektrik ----------
  U.f6k1 = siniflandir({
    "iletken": ["bakır tel", "alüminyum folyo", "demir çivi", "grafit (kalem ucu)", "tuzlu su", "gümüş kaşık", "altın yüzük", "çelik makas"],
    "yalıtkan": ["plastik cetvel", "cam bardak", "kuru tahta", "lastik silgi", "porselen tabak", "kâğıt", "yün kazak", "karton"]
  }, (g) => `Hangisi ${g} bir maddedir?`, (d, g) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)} ${g === "iletken" ? "iletkendir" : "yalıtkandır"}. ${g === "iletken" ? "Devreye bağlanınca ampul yanar." : "Devreye bağlanınca ampul yanmaz."}`);

  U.f6k2 = tiplerden([
    () => { const d = pick([["telin uzunluğu artırılırsa", "artar"], ["telin uzunluğu azaltılırsa", "azalır"], ["telin kalınlığı artırılırsa", "azalır"], ["telin kalınlığı azaltılırsa", "artar"]]); return soru(`Bir devrede ${d[0]} telin direnci nasıl değişir?`, `${d[1].charAt(0).toLocaleUpperCase("tr") + d[1].slice(1)}.`, ["Artar.", "Azalır.", "Değişmez.", "Sıfır olur."].filter((x) => x !== `${d[1].charAt(0).toLocaleUpperCase("tr") + d[1].slice(1)}.`), "Direnç uzunlukla artar, kalınlıkla azalır."); },
    () => { const d = pick([["devreye seri bağlı pil sayısı artırılırsa", "Artar."], ["devreye seri bağlı ampul sayısı artırılırsa", "Azalır."], ["devredeki direnç artırılırsa", "Azalır."], ["devredeki direnç azaltılırsa", "Artar."], ["devredeki telin uzunluğu artırılırsa", "Azalır."], ["devredeki tel daha kalın bir telle değiştirilirse", "Artar."]]); return soru(`Bir elektrik devresinde ${d[0]} ampulün parlaklığı nasıl değişir?`, d[1], ["Artar.", "Azalır.", "Değişmez.", "Ampul patlar."].filter((x) => x !== d[1]), "Direnç artınca parlaklık azalır; pil sayısı artınca parlaklık artar."); }
  ]);

  U.f6k3 = tiplerden([
    siniflandir({ "ayarlanabilir direnç kullanılır": ["radyonun ses ayar düğmesi", "odadaki ışığın şiddetini ayarlayan düğme", "vantilatörün hız ayarı", "uzaktan kumandalı arabanın hız kontrolü"], "ayarlanabilir direnç kullanılmaz": ["plastik cetvel", "cam bardak", "ahşap sandalye", "yün atkı"] },
      (g) => `Hangisinde ${g}?`, (d, g) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)}: ${g}.`),
    () => { const d = pick([["kısalacak", "Daha parlak"], ["uzayacak", "Daha sönük"]]); return soru(`Bir reostanın sürgüsü, akımın geçtiği tel ${d[0]} şekilde kaydırılırsa ampul nasıl yanar?`, d[1], ["Daha parlak", "Daha sönük", "Aynı parlaklıkta", "Hiç yanmaz"].filter((x) => x !== d[1]), d[0] === "kısalacak" ? "Tel kısalınca direnç azalır, ampul parlaklaşır." : "Tel uzayınca direnç artar, ampul sönükleşir."); },
    ifadeler([
      "Reosta, direnci değiştirilebilen bir devre elemanıdır.", "Reostada sürgü hareket ettirilerek telin uzunluğu değiştirilir.", "Reostanın direnci artarsa ampul sönükleşir.",
      "Reostanın direnci azalırsa ampul parlaklaşır.", "Ses ayar düğmeleri ayarlanabilir dirençle çalışır.", "Dimmer düğmesi ışığın şiddetini ayarlar.", "Vantilatörün hız ayarında ayarlanabilir direnç kullanılabilir."
    ], [
      "Reostanın direnci hiç değişmez.", "Reosta elektrik üreten bir devre elemanıdır.", "Reostanın direnci artarsa ampul daha parlak yanar.",
      "Reostada telin uzunluğu direnci etkilemez.", "Reosta yalnızca ampulü açıp kapatmaya yarar.", "Ayarlanabilir direnç sadece pillerde bulunur.", "Reosta yalıtkan bir maddeden yapılır."
    ], "Ayarlanabilir direnç")
  ]);

  // ---------- Sürdürülebilir yaşam ----------
  U.f7k1 = tiplerden([
    siniflandir({ "biyoçeşitliliği tehdit eder": ["orman yangınları", "kaçak avlanma", "sulak alanların kurutulması", "çevre kirliliği", "istilacı türlerin yayılması", "yaşam alanlarına yol ve bina yapılması"], "biyoçeşitliliği korur": ["milli park kurulması", "av yasakları", "tohum gen bankası", "ağaçlandırma", "koruma altına alınan sulak alanlar", "nesli tehlikedeki türlerin üretilmesi"] },
      (g) => `Hangisi ${g}?`, (d, g) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)} ${g}.`),
    ifadeler([
      "Endemik türler yalnızca belli bir bölgede yaşar.", "Ters lale Türkiye'ye özgü bir bitkidir.", "Türkiye biyoçeşitlilik bakımından zengindir.", "Bir türün yok olması besin zincirini etkiler.",
      "Milli parklar canlıları korumak için kurulur.", "Aşırı avlanma biyoçeşitliliği azaltır."
    ], [
      "Endemik türler bütün dünyada yaşar.", "Biyoçeşitlilik doğa için önemsizdir.", "Orman yangınları biyoçeşitliliği artırır.", "Bir türün yok olması diğer canlıları hiç etkilemez.",
      "Van kedisi Avustralya'ya özgüdür.", "Kaçak avlanma canlıları korur."
    ], "Biyoçeşitlilik")
  ]);

  U.f7k2 = tiplerden([
    siniflandir({ "yenilenebilir": ["güneş enerjisi", "rüzgâr enerjisi", "hidroelektrik (akarsu) enerjisi", "jeotermal enerji", "dalga enerjisi"], "yenilenemez": ["kömür", "petrol", "doğal gaz", "benzin"] },
      (g) => `Hangisi ${g} bir enerji kaynağıdır?`, (d, g) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)} ${g} bir enerji kaynağıdır.`),
    siniflandir({ "çevreyi korur": ["atıkları ayrıştırıp geri dönüşüme vermek", "toplu taşıma kullanmak", "dişlerini fırçalarken musluğu kapatmak", "boş odada ışığı kapatmak", "bez çanta kullanmak", "ağaç dikmek", "damla sulama yapmak"], "çevreye zarar verir": ["çöpleri doğaya atmak", "gereksiz yere ışıkları açık bırakmak", "atık yağı lavaboya dökmek", "kısa mesafede bile araba kullanmak", "anızları yakmak", "ormanları kesmek"] },
      (g) => `Hangi davranış ${g}?`, (d, g) => `${d.charAt(0).toLocaleUpperCase("tr") + d.slice(1)} ${g}.`)
  ]);
})();
