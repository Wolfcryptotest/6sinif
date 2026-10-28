// Okul öncesi dünyaları 1: Ses Ormanı (Türkçe), Sayı Bahçesi (Matematik), Keşif (Fen), Ben ve Çevrem (Sosyal)
// Bütün yönergeler sesli okunur; şıklar çoğunlukla resimdir (okuma gerektirmez). window.YAS: 4 ya da 5
(function () {
  const { r, pick, sec, karistir, secim, dy, grupla, eslestir, sirala, tiplerden } = O;
  const Y5 = () => (window.YAS || 5) >= 5;
  const buyuk = (e, boy) => `<div style="font-size:${boy || 96}px;line-height:1.15;text-align:center;letter-spacing:4px">${e}</div>`;
  const em = (o) => (o ? Object.assign(o, { em: true }) : o);
  const konu = (id, ad, ikon, bilgi, uret) => ({ id, ad, ikon, bilgi, uret });
  const SAYI_AD = ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz", "on"];

  // ================= SES ORMANI (Türkçe) =================
  const KELIME = [["🍎", "elma"], ["🍌", "muz"], ["🍇", "üzüm"], ["🍓", "çilek"], ["🥕", "havuç"], ["🍅", "domates"], ["🧀", "peynir"], ["🍞", "ekmek"], ["🥛", "süt"], ["🍰", "pasta"], ["🐱", "kedi"], ["🐶", "köpek"], ["🐦", "kuş"], ["🐟", "balık"], ["🐰", "tavşan"], ["🐻", "ayı"], ["🐘", "fil"], ["🦁", "aslan"], ["🐄", "inek"], ["🐔", "tavuk"], ["🐝", "arı"], ["🦋", "kelebek"], ["🐢", "kaplumbağa"], ["🐸", "kurbağa"], ["🚗", "araba"], ["🚌", "otobüs"], ["✈️", "uçak"], ["🚲", "bisiklet"], ["⛵", "gemi"], ["🚂", "tren"], ["⚽", "top"], ["🎈", "balon"], ["🧸", "oyuncak ayı"], ["🪁", "uçurtma"], ["☂️", "şemsiye"], ["👟", "ayakkabı"], ["🧦", "çorap"], ["🧢", "şapka"], ["👓", "gözlük"], ["🎒", "çanta"], ["✏️", "kalem"], ["📖", "kitap"], ["🔑", "anahtar"], ["🕰️", "saat"], ["🛏️", "yatak"], ["🪑", "sandalye"], ["🚪", "kapı"], ["🏠", "ev"], ["🌳", "ağaç"], ["🌸", "çiçek"], ["☀️", "güneş"], ["🌙", "ay"], ["⭐", "yıldız"], ["☁️", "bulut"], ["🌈", "gökkuşağı"], ["❄️", "kar"], ["🔥", "ateş"], ["💧", "su"], ["👂", "kulak"], ["👁️", "göz"], ["👃", "burun"], ["✋", "el"], ["🦶", "ayak"], ["🥁", "davul"], ["🎸", "gitar"], ["🍦", "dondurma"], ["🥚", "yumurta"], ["🧁", "kek"], ["🐭", "fare"], ["🦆", "ördek"]];
  const HECE = [["🍎", ["el", "ma"]], ["🍌", ["muz"]], ["🐱", ["ke", "di"]], ["🐶", ["kö", "pek"]], ["🐦", ["kuş"]], ["🐟", ["ba", "lık"]], ["🐰", ["tav", "şan"]], ["🐻", ["a", "yı"]], ["🐘", ["fil"]], ["🦁", ["as", "lan"]], ["🚗", ["a", "ra", "ba"]], ["🚌", ["o", "to", "büs"]], ["🚲", ["bi", "sik", "let"]], ["⚽", ["top"]], ["🎈", ["ba", "lon"]], ["☂️", ["şem", "si", "ye"]], ["🍓", ["çi", "lek"]], ["🍅", ["do", "ma", "tes"]], ["🥕", ["ha", "vuç"]], ["🦋", ["ke", "le", "bek"]], ["🐢", ["kap", "lum", "ba", "ğa"]], ["🐸", ["kur", "ba", "ğa"]], ["🌳", ["a", "ğaç"]], ["🌸", ["çi", "çek"]], ["☀️", ["gü", "neş"]], ["⭐", ["yıl", "dız"]], ["🏠", ["ev"]], ["🍦", ["don", "dur", "ma"]], ["✏️", ["ka", "lem"]], ["🥁", ["da", "vul"]], ["🧀", ["pey", "nir"]], ["🍞", ["ek", "mek"]], ["🐄", ["i", "nek"]], ["🐔", ["ta", "vuk"]], ["🪑", ["san", "dal", "ye"]], ["🕰️", ["sa", "at"]], ["🦆", ["ör", "dek"]], ["🐝", ["a", "rı"]]];
  const ALKIS = ["", "👏", "👏👏", "👏👏👏", "👏👏👏👏"];
  const ILK = { a: [["🐝", "arı"], ["🚗", "araba"], ["🐻", "ayı"], ["🌳", "ağaç"], ["🦁", "aslan"], ["🌙", "ay"]], e: [["🍎", "elma"], ["🏠", "ev"], ["🍞", "ekmek"], ["✋", "el"]], o: [["🚌", "otobüs"], ["🧸", "oyuncak"], ["🏫", "okul"]], m: [["🍌", "muz"], ["🐒", "maymun"], ["🍄", "mantar"], ["🕌", "minare"]], k: [["🐱", "kedi"], ["🐦", "kuş"], ["✏️", "kalem"], ["🦋", "kelebek"], ["📖", "kitap"]], b: [["🐟", "balık"], ["🎈", "balon"], ["🍯", "bal"], ["☁️", "bulut"], ["🚲", "bisiklet"]], t: [["⚽", "top"], ["🐰", "tavşan"], ["🐔", "tavuk"], ["🚂", "tren"]], d: [["🥁", "davul"], ["🍅", "domates"], ["🍦", "dondurma"], ["🌊", "deniz"]], s: [["🕰️", "saat"], ["🥛", "süt"], ["🪑", "sandalye"], ["💧", "su"]], p: [["🧀", "peynir"], ["🍰", "pasta"], ["🐧", "penguen"], ["🥔", "patates"]], y: [["⭐", "yıldız"], ["🥚", "yumurta"], ["🐍", "yılan"], ["🍃", "yaprak"]], ç: [["🍓", "çilek"], ["🌸", "çiçek"], ["🧦", "çorap"], ["🎒", "çanta"]], ş: [["☂️", "şemsiye"], ["🧢", "şapka"], ["🍬", "şeker"]], g: [["☀️", "güneş"], ["👁️", "göz"], ["⛵", "gemi"], ["🌈", "gökkuşağı"]] };
  const UYAK = [["🐘", "fil", "👅", "dil"], ["👑", "taç", "💇", "saç"], ["🌙", "ay", "🍵", "çay"], ["🍰", "pasta", "🤒", "hasta"], ["🌸", "çiçek", "🐞", "böcek"], ["🐭", "fare", "🟥", "kare"], ["🐦", "kuş", "🚿", "duş"], ["🐱", "kedi", "7️⃣", "yedi"], ["🐝", "arı", "🟨", "sarı"]];
  const ZIT = [["büyük", "🐘", "küçük", "🐭"], ["sıcak", "🔥", "soğuk", "🧊"], ["mutlu", "😀", "üzgün", "😢"], ["uzun", "🦒", "kısa", "🐛"], ["hızlı", "🐆", "yavaş", "🐌"], ["dolu", "🥛", "boş", "🍽️"], ["gece", "🌙", "gündüz", "☀️"], ["temiz", "🧼", "kirli", "💩"], ["yaşlı", "👴", "bebek", "👶"], ["açık", "🔓", "kapalı", "🔒"]];
  const EYLEM = [["🏃", "koşuyor"], ["😴", "uyuyor"], ["🏊", "yüzüyor"], ["🎤", "şarkı söylüyor"], ["📖", "kitap okuyor"], ["🍽️", "yemek yiyor"], ["💃", "dans ediyor"], ["😭", "ağlıyor"], ["😂", "gülüyor"], ["🚴", "bisiklete biniyor"], ["🎨", "resim yapıyor"], ["🧗", "tırmanıyor"], ["🛁", "banyo yapıyor"]];

  DERS.dil = {
    ad: "Ses Ormanı", ikon: "🗣️", renk: "#2bb673",
    temalar: [{ id: "dt1", ad: "Ses Ormanı (Türkçe)", konular: [
      konu("dk1", "Kelime Avı", "🔎", [["🔎", "Söylediğim şeyin resmini bul! Önce dikkatle dinle."], ["🍎", "Elma"], ["🚗", "Araba"], ["☂️", "Şemsiye"]],
        () => { const w = pick(KELIME); return em(secim(`${w[1].charAt(0).toLocaleUpperCase("tr") + w[1].slice(1)} hangisi? Bul bakalım!`, w[0], sec(KELIME.filter((x) => x !== w), 6).map((x) => x[0]), `${w[0]} = ${w[1]}`)); }),
      konu("dk2", "Hece Alkışı", "👏", [["👏", "Kelimeleri parçalara ayırıp her parçada bir alkış yaparız."], ["🍎", "El - ma: iki alkış 👏👏"], ["🚗", "A - ra - ba: üç alkış 👏👏👏"]],
        () => { const lim = Y5() ? 4 : 3; const w = pick(HECE.filter((x) => x[1].length <= lim)); const n = w[1].length; const y = [1, 2, 3, 4].filter((x) => x !== n && x <= lim + 1); const g = secim(`Dinle: ${w[1].join(" - ")}. Kaç kez alkışlarsın?`, ALKIS[n], y.map((x) => ALKIS[x]), `${w[1].join(" - ")}: ${n} hece`, { gorsel: buyuk(w[0]), okunacak: `Dinle! ${w[1].join("... ")}. Kaç kez alkışlarsın?` }); return em(g); }),
      konu("dk3", "İlk Ses", "🅰️", [["👄", "Kelimenin en başındaki sesi duymaya çalış."], ["🐝", "Arı: aaa diye başlar."], ["🐟", "Balık: bı diye başlar."]],
        () => { const sesler = Y5() ? Object.keys(ILK) : ["a", "e", "o", "m", "b", "k"]; const s = pick(sesler); const d = pick(ILK[s]); const diger = sesler.filter((x) => x !== s).flatMap((x) => ILK[x]); const soyle = "aeıioöuü".includes(s) ? `${s}${s}${s}` : `${s}ı`; return em(secim(`Hangisi "${soyle}" sesiyle başlıyor?`, d[0], sec(diger, 6).map((x) => x[0]), `${d[0]} ${d[1]}`, { okunacak: `Hangisi ${soyle} sesiyle başlıyor?` })); }),
      konu("dk4", "Kafiye Bul", "🎵", [["🎵", "Sonu birbirine benzeyen kelimeler kafiyelidir."], ["🐘", "Fil ile dil kafiyelidir."], ["🌙", "Ay ile çay kafiyelidir."]],
        () => { const u = pick(UYAK); const diger = UYAK.filter((x) => x !== u).map((x) => pick([x[0], x[2]])); return em(secim(`${u[1].charAt(0).toLocaleUpperCase("tr") + u[1].slice(1)} kelimesinin sonu hangisine benziyor?`, u[2], diger, `${u[1]} - ${u[3]}`, { gorsel: buyuk(u[0]) })); }),
      konu("dk5", "Zıt Kavramlar", "↔️", [["↔️", "Bazı kelimeler birbirinin tam tersidir."], ["🐘", "Büyük - küçük 🐭"], ["🔥", "Sıcak - soğuk 🧊"]],
        () => { const z = pick(ZIT); const ilk = Math.random() < 0.5; const [ad, e, karsiAd, karsiE] = ilk ? z : [z[2], z[3], z[0], z[1]]; const diger = ZIT.filter((x) => x !== z).flatMap((x) => [x[1], x[3]]); return em(secim(`Hangisi ${ad}?`, e, [karsiE, ...sec(diger, 3)], `${e} ${ad}, ${karsiE} ${karsiAd}`)); }),
      konu("dk6", "Ne Yapıyor?", "🏃", [["🏃", "Resimdeki kişi ne yapıyor? Dinle ve bul."], ["😴", "Uyuyor"], ["📖", "Kitap okuyor"]],
        () => { const e = pick(EYLEM); return em(secim(`Hangisi ${e[1]}?`, e[0], sec(EYLEM.filter((x) => x !== e), 5).map((x) => x[0]), `${e[0]} ${e[1]}`)); })
    ] }]
  };

  // ================= SAYI BAHÇESİ (Matematik) =================
  const NESNE = ["🍎", "🍌", "⭐", "🐟", "🎈", "🌸", "🐞", "🍓", "⚽", "🧁", "🚗", "🐥"];
  const tek = (e, n) => e.repeat(n);
  const satir = (e, n) => buyuk(n > 5 ? tek(e, 5) + "<br>" + tek(e, n - 5) : tek(e, n), n > 5 ? 54 : 66);
  const SEKILLER = [["⚪", "daire"], ["🟥", "kare"], ["🔺", "üçgen"], ["▬", "dikdörtgen"], ["⭐", "yıldız"], ["❤️", "kalp"]];
  const SEKIL_NESNE = { daire: ["⚽", "🍪", "🕰️", "🍩", "🌕"], kare: ["🧇", "🔲", "🎁"], üçgen: ["🍕", "⛺", "🔺"], dikdörtgen: ["🚪", "📱", "📖", "📺"] };
  const BOY = [["🐘", 6], ["🦒", 6], ["🐄", 5], ["🐴", 5], ["🐶", 3], ["🐱", 2], ["🐭", 1], ["🐜", 0]];
  const KONUM = [["üstünde", (a, b) => `<div style="display:flex;flex-direction:column;align-items:center;font-size:84px;line-height:1">${a}<span>${b}</span></div>`], ["altında", (a, b) => `<div style="display:flex;flex-direction:column;align-items:center;font-size:84px;line-height:1">${b}<span>${a}</span></div>`], ["yanında", (a, b) => `<div style="display:flex;justify-content:center;gap:6px;font-size:84px">${b}${a}</div>`], ["önünde", (a, b) => `<div style="position:relative;width:200px;height:120px;margin:auto;font-size:96px"><span style="position:absolute;left:30px;top:0;opacity:.9">${b}</span><span style="position:absolute;left:90px;top:22px;font-size:72px">${a}</span></div>`]];

  DERS.sayi = {
    ad: "Sayı Bahçesi", ikon: "🔢", renk: "#3d8bff",
    temalar: [{ id: "st1", ad: "Sayı Bahçesi (Matematik)", konular: [
      konu("sk1", "Sayalım", "🔢", [["☝️", "Parmağınla tek tek dokunarak say."], ["🍎🍎🍎", "Üç elma"], ["⭐⭐⭐⭐⭐", "Beş yıldız"]],
        () => { const ust = Y5() ? 10 : 5; const n = r(1, ust), e = pick(NESNE); const y = [n - 1, n + 1, n + 2, n - 2].filter((x) => x >= 1 && x <= ust + 1); return secim(`Kaç tane var? Say bakalım!`, String(n), y.map(String), `${n} tane`, { gorsel: satir(e, n), balonYok: true }); }),
      konu("sk2", "Rakamı Bul", "🔟", [["1️⃣", "Bir"], ["2️⃣", "İki"], ["3️⃣", "Üç"]],
        () => { const ust = Y5() ? 10 : 5; const n = r(1, ust); return secim(`${SAYI_AD[n].charAt(0).toLocaleUpperCase("tr") + SAYI_AD[n].slice(1)} sayısını bul!`, String(n), Array.from({ length: ust }, (_, i) => String(i + 1)).filter((x) => x !== String(n)), `${n} = ${SAYI_AD[n]}`, { balonYok: true }); }),
      konu("sk3", "Çok mu Az mı?", "⚖️", [["⚖️", "Hangisinde daha çok var, hangisinde daha az? Karşılaştıralım."], ["🍎🍎🍎🍎", "Çok"], ["🍎", "Az"]],
        () => { const e = pick(NESNE), ust = Y5() ? 7 : 5; const ns = sec(Array.from({ length: ust }, (_, i) => i + 1), 3); const cok = Math.random() < 0.5; const d = cok ? Math.max(...ns) : Math.min(...ns); return em(secim(cok ? "Hangisinde daha çok var?" : "Hangisinde daha az var?", tek(e, d), ns.filter((x) => x !== d).map((x) => tek(e, x)), "")); }),
      konu("sk4", "Şekiller", "🔷", [["⚪", "Daire yuvarlaktır, köşesi yoktur."], ["🟥", "Karenin dört eşit kenarı vardır."], ["🔺", "Üçgenin üç kenarı, üç köşesi vardır."]],
        tiplerden([
          [3, () => { const s = pick(SEKILLER.slice(0, Y5() ? 6 : 3)); return em(secim(`${s[1].charAt(0).toLocaleUpperCase("tr") + s[1].slice(1)} hangisi?`, s[0], SEKILLER.filter((x) => x !== s).map((x) => x[0]), `${s[0]} ${s[1]}`)); }],
          [2, () => { const ad = pick(Object.keys(SEKIL_NESNE)); const d = pick(SEKIL_NESNE[ad]); const diger = Object.keys(SEKIL_NESNE).filter((x) => x !== ad).flatMap((x) => SEKIL_NESNE[x]); return em(secim(`Hangisi ${ad} şeklinde?`, d, diger, `${d} → ${ad}`)); }]
        ])),
      konu("sk5", "Örüntü", "🔁", [["🔁", "Örüntü, aynı sırayla tekrar eden diziliştir."], ["🔴🔵🔴🔵", "Kırmızı, mavi, kırmızı, mavi…"], ["❓", "Sırada ne var, bul!"]],
        () => {
          const H = ["🔴", "🔵", "🟡", "🟢", "🍎", "🍌", "🐱", "🐶", "⭐", "🌙"];
          const kal = Y5() ? pick(["AB", "ABB", "ABC", "AAB"]) : pick(["AB", "AB", "ABB"]);
          const harf = [...new Set(kal)], s = sec(H, harf.length), m = {}; harf.forEach((h, i) => m[h] = s[i]);
          const uzun = Y5() ? 7 : 5; const dizi = Array.from({ length: uzun }, (_, i) => m[kal[i % kal.length]]); const d = m[kal[uzun % kal.length]];
          return em(secim("Sırada hangisi gelmeli?", d, [...s.filter((x) => x !== d), ...sec(H.filter((x) => !s.includes(x)), 2)], dizi.join("") + d, { gorsel: buyuk(dizi.join(" ") + " ❓", 50) }));
        }),
      konu("sk6", "Büyük ve Küçük", "🐘", [["🐘", "Fil çok büyüktür."], ["🐭", "Fare küçüktür."], ["🐜", "Karınca en küçüklerden biridir."]],
        () => { const ss = sec(BOY, 3); const fark = new Set(ss.map((x) => x[1])); if (fark.size < 3) return null; const buy = Math.random() < 0.5; const d = ss.reduce((a, b) => (buy ? (b[1] > a[1] ? b : a) : (b[1] < a[1] ? b : a))); return em(secim(buy ? "Hangisi en büyük?" : "Hangisi en küçük?", d[0], ss.filter((x) => x !== d).map((x) => x[0]), "")); }),
      konu("sk7", "Nerede?", "📦", [["📦", "Üstünde, altında, yanında, önünde: yer bildiren kelimeler."], ["🐱", "Kedi kutunun üstünde."], ["🐶", "Köpek kutunun yanında."]],
        () => { const lim = Y5() ? 4 : 3; const k = pick(KONUM.slice(0, lim)); const a = pick(["🐱", "🐶", "🐰", "🐥", "⚽"]); return secim(`Bak! Resimdeki nerede?`, k[0], KONUM.slice(0, lim).filter((x) => x !== k).map((x) => x[0]), `${k[0]}`, { gorsel: k[1](a, "📦"), balonYok: true }); }),
      konu("sk8", "Bir Ekle", "➕", [["➕", "Bir tane daha gelirse sayı bir artar."], ["🍎🍎 + 🍎", "İki elma, bir elma daha: üç elma"], ["🐥🐥🐥 + 🐥", "Üç civciv, bir civciv daha: dört"]],
        () => { const e = pick(NESNE); const a = r(1, Y5() ? 5 : 3), b = Y5() ? r(1, 3) : 1; const t = a + b; return secim(`${SAYI_AD[a].charAt(0).toLocaleUpperCase("tr") + SAYI_AD[a].slice(1)} tane vardı, ${SAYI_AD[b]} tane daha geldi. Şimdi kaç tane oldu?`, String(t), [t - 1, t + 1, t + 2].filter((x) => x > 0).map(String), `${a} + ${b} = ${t}`, { gorsel: buyuk(tek(e, a) + " ➕ " + tek(e, b), 50), balonYok: true }); })
    ] }]
  };

  // ================= KEŞİF (Fen) =================
  const YASAM = { "🌊 Deniz": ["🐟", "🐙", "🐬", "🦀", "🐳", "🦈"], "🚜 Çiftlik": ["🐄", "🐔", "🐑", "🐴", "🐐", "🦆"], "🌳 Orman": ["🐻", "🦊", "🦉", "🐿️", "🦌", "🐺"] };
  const YEMEK = [["🐰", "tavşan", "🥕"], ["🐒", "maymun", "🍌"], ["🐭", "fare", "🧀"], ["🐶", "köpek", "🦴"], ["🐄", "inek", "🌾"], ["🐝", "arı", "🌸"], ["🐻", "ayı", "🍯"], ["🐱", "kedi", "🐟"], ["🐔", "tavuk", "🌽"], ["🐼", "panda", "🎋"]];
  const MEVSIM = [["kış", "❄️", ["🧤", "🧣", "⛄", "🛷"]], ["yaz", "☀️", ["🩳", "🏖️", "🍉", "🕶️"]], ["sonbahar", "🍂", ["🍁", "☔", "🌰"]], ["ilkbahar", "🌷", ["🌸", "🐝", "🦋"]]];
  const DUYU = [["👁️", "görürüz", "Gözlerimizle"], ["👂", "duyarız", "Kulaklarımızla"], ["👃", "koklarız", "Burnumuzla"], ["👅", "tadına bakarız", "Dilimizle"], ["✋", "dokunuruz", "Ellerimizle"]];
  const DUYU_S = [["Çiçeği neyle koklarız?", "👃"], ["Müziği neyle dinleriz?", "👂"], ["Gökkuşağını neyle görürüz?", "👁️"], ["Dondurmanın tadına neyle bakarız?", "👅"], ["Kedinin yumuşak tüylerini neyle hissederiz?", "✋"], ["Kuş sesini neyle duyarız?", "👂"], ["Resimlere neyle bakarız?", "👁️"], ["Limonun ekşi olduğunu neyle anlarız?", "👅"], ["Yemek kokusunu neyle alırız?", "👃"]];

  DERS.kesif = {
    ad: "Keşif", ikon: "🔬", renk: "#ff8a00",
    temalar: [{ id: "kt1", ad: "Keşif (Fen)", konular: [
      konu("kk1", "Hayvanlar Nerede Yaşar?", "🐟", [["🌊", "Balıklar ve yunuslar denizde yaşar."], ["🚜", "İnek, tavuk ve koyun çiftlikte yaşar."], ["🌳", "Ayı, tilki ve baykuş ormanda yaşar."]],
        tiplerden([
          [2, () => { const gs = sec(Object.keys(YASAM), Y5() ? 3 : 2); const og = []; gs.forEach((g, i) => sec(YASAM[g], 2).forEach((x) => og.push([x, i]))); return grupla("Her hayvanı yaşadığı yere götür.", gs, karistir(og)); }],
          [3, () => { const g = pick(Object.keys(YASAM)), h = pick(YASAM[g]); return em(secim("Bu hayvan nerede yaşar?", g.split(" ")[0], Object.keys(YASAM).filter((x) => x !== g).map((x) => x.split(" ")[0]), g, { gorsel: buyuk(h) })); }]
        ])),
      konu("kk2", "Kim Ne Yer?", "🥕", [["🐰", "Tavşan havuç sever."], ["🐒", "Maymun muz sever."], ["🐝", "Arı çiçeklerden bal yapar."]],
        tiplerden([
          [3, () => { const y = pick(YEMEK); return em(secim(`${y[1].charAt(0).toLocaleUpperCase("tr") + y[1].slice(1)} ne yer?`, y[2], YEMEK.filter((x) => x !== y).map((x) => x[2]), `${y[0]} → ${y[2]}`, { gorsel: buyuk(y[0]) })); }],
          [1, () => eslestir("Her hayvanı sevdiği yiyecekle eşleştir.", sec(YEMEK, Y5() ? 4 : 3).map((x) => [x[0], x[2]]))]
        ])),
      konu("kk3", "Mevsimler", "🍂", [["🌷", "İlkbaharda çiçekler açar."], ["☀️", "Yazın hava sıcaktır, denize gireriz."], ["🍂", "Sonbaharda yapraklar düşer."], ["❄️", "Kışın kar yağar, kalın giyiniriz."]],
        () => { const m = pick(MEVSIM.slice(0, Y5() ? 4 : 2)); const d = pick(m[2]); const diger = MEVSIM.filter((x) => x !== m).flatMap((x) => x[2]); return em(secim(`Hangisi ${m[0]} mevsimine ait?`, d, diger, `${m[1]} ${m[0]}: ${d}`)); }),
      konu("kk4", "Duyularımız", "👂", [["👁️", "Gözlerimizle görürüz."], ["👂", "Kulaklarımızla duyarız."], ["👃", "Burnumuzla koklarız."], ["👅", "Dilimizle tadına bakarız."], ["✋", "Ellerimizle dokunuruz."]],
        () => { const q = pick(DUYU_S); return em(secim(q[0], q[1], DUYU.map((x) => x[0]).filter((x) => x !== q[1]), "")); }),
      konu("kk5", "Yüzer mi, Batar mı?", "⛵", [["⛵", "Hafif şeyler suyun üstünde yüzer."], ["🧱", "Taş gibi ağır şeyler suya batar."], ["🍃", "Yaprak yüzer, anahtar batar."]],
        () => grupla("Suya atınca ne olur? Yüzenleri ve batanları ayır.", ["⛵ Yüzer", "⚓ Batar"], karistir([...sec(["🍃", "🦆", "🏐", "🍎", "🎈"], 2).map((x) => [x, 0]), ...sec(["🧱", "🔑", "⚙️", "🥄", "⚓", "🔨"], 2).map((x) => [x, 1])]))),
      konu("kk6", "Canlı mı, Cansız mı?", "🌱", [["🌱", "Canlılar büyür, beslenir ve nefes alır."], ["🧱", "Taş, masa, araba cansızdır."], ["🐦", "Kuş, ağaç ve insan canlıdır."]],
        tiplerden([
          [2, () => grupla("Canlıları ve cansızları ayır.", ["🌱 Canlı", "🧱 Cansız"], karistir([...sec(["🐦", "🌳", "🐱", "🌸", "👶", "🐟", "🐝"], 2).map((x) => [x, 0]), ...sec(["🧱", "🚗", "🪑", "⚽", "🔑", "📖", "🧸"], 2).map((x) => [x, 1])]))],
          [2, () => em(secim("Hangisi canlı?", pick(["🐦", "🌳", "🐱", "🌸", "🐟", "🐝"]), ["🧱", "🚗", "🪑", "⚽", "🧸", "📖"], ""))]
        ])),
      konu("kk7", "Gece ve Gündüz", "🌙", [["☀️", "Gündüz güneş parlar."], ["🌙", "Gece ay ve yıldızlar görünür."], ["😴", "Geceleri uyuyup dinleniriz."]],
        () => { const gece = Math.random() < 0.5; return em(secim(gece ? "Hangisini gece görürüz?" : "Hangisini gündüz görürüz?", gece ? pick(["🌙", "⭐", "🦉"]) : pick(["☀️", "🌤️", "🐓"]), gece ? ["☀️", "🌤️", "🐓", "🌈"] : ["🌙", "⭐", "🦉", "🌌"], "")); }),
      konu("kk8", "Hava Durumu", "☔", [["☀️", "Güneşli"], ["🌧️", "Yağmurlu"], ["❄️", "Karlı"], ["🌬️", "Rüzgârlı"]],
        () => { const q = pick([["Yağmur yağıyor. Ne alalım?", "☂️", ["🕶️", "🩳"]], ["Kar yağıyor. Ne giyelim?", "🧤", ["🩳", "🥾"]], ["Hava çok güneşli. Ne takalım?", "🧢", ["🧤", "🧣"]], ["Rüzgâr esiyor. Ne uçuralım?", "🪁", ["🚗", "📖"]], ["Kar yağdı. Ne yapalım?", "⛄", ["🏊", "🏖️"]], ["Hava sıcak. Ne yiyelim?", "🍦", ["🍲", "☕"]]]); return em(secim(q[0], q[1], [...q[2], "🧸"], "")); })
    ] }]
  };

  // ================= BEN VE ÇEVREM (Sosyal) =================
  const DUYGU = [["😀", "mutlu"], ["😢", "üzgün"], ["😠", "kızgın"], ["😨", "korkmuş"], ["😲", "şaşırmış"], ["😴", "uykulu"]];
  const DURUM = [["Doğum günün kutlanıyor. Nasıl hissedersin?", "😀"], ["Dondurman yere düştü. Nasıl hissedersin?", "😢"], ["Arkadaşın oyuncağını izinsiz aldı. Nasıl hissedersin?", "😠"], ["Karanlıkta bir ses duydun. Nasıl hissedersin?", "😨"], ["Kapıyı açtın, sürpriz parti var! Nasıl hissedersin?", "😲"], ["Bütün gün oynadın, gece oldu. Nasıl hissedersin?", "😴"], ["Annen sana sarıldı. Nasıl hissedersin?", "😀"]];
  const MESLEK = [["👨‍⚕️", "doktor", "Hastaları kim iyileştirir?", "💉"], ["👨‍🚒", "itfaiyeci", "Yangını kim söndürür?", "🚒"], ["👮", "polis", "Bizi kim korur?", "🚓"], ["👨‍🍳", "aşçı", "Yemeği kim pişirir?", "🍳"], ["👨‍🌾", "çiftçi", "Tarlada sebzeleri kim yetiştirir?", "🚜"], ["👩‍🏫", "öğretmen", "Okulda bize kim ders anlatır?", "📚"], ["👨‍✈️", "pilot", "Uçağı kim uçurur?", "✈️"], ["👨‍🔧", "tamirci", "Bozulan arabayı kim tamir eder?", "🔧"]];
  DERS.cevre = {
    ad: "Ben ve Çevrem", ikon: "🤝", renk: "#ef476f",
    temalar: [{ id: "ct1", ad: "Ben ve Çevrem (Sosyal)", konular: [
      konu("ck1", "Duygular", "😀", [["😀", "Mutlu"], ["😢", "Üzgün"], ["😠", "Kızgın"], ["😨", "Korkmuş"], ["💬", "Duygularımızı söylemek bizi rahatlatır."]],
        tiplerden([
          [2, () => { const d = pick(DUYGU.slice(0, Y5() ? 6 : 4)); return em(secim(`Hangisi ${d[1]}?`, d[0], DUYGU.filter((x) => x !== d).map((x) => x[0]), `${d[0]} ${d[1]}`)); }],
          [2, () => { const q = pick(DURUM); return em(secim(q[0], q[1], DUYGU.map((x) => x[0]).filter((x) => x !== q[1]), "")); }]
        ])),
      konu("ck2", "Trafik", "🚦", [["🔴", "Kırmızı ışıkta dururuz."], ["🟡", "Sarı ışıkta hazırlanırız."], ["🟢", "Yeşil ışıkta, sağa sola bakarak geçeriz."], ["🚸", "Karşıya yaya geçidinden, büyüklerimizle geçeriz."]],
        tiplerden([
          [2, () => { const q = pick([["Kırmızı ışık yanıyor. Ne yaparız?", "✋", ["🏃", "🚶"]], ["Yeşil ışık yandı. Ne yaparız?", "🚶", ["✋", "😴"]]]); return em(secim(q[0], q[1], q[2], "")); }],
          [2, () => em(secim("Hangi ışıkta dururuz?", "🔴", ["🟢", "🟡"], "Kırmızı ışıkta dururuz."))],
          [1, () => em(secim("Arabada nereye otururuz?", "💺", ["🚘", "🚦"], "Arabada çocuk koltuğuna oturur, kemerimizi takarız."))],
          [2, () => dy(pick(["Karşıdan karşıya büyüklerimizle el ele geçeriz.", "Arabaya binince emniyet kemerimizi takarız.", "Yaya geçidinden geçeriz."]), true)],
          [2, () => dy(pick(["Kırmızı ışıkta koşarak karşıya geçeriz.", "Yolun ortasında top oynarız.", "Park etmiş arabaların arasından aniden çıkarız."]), false)]
        ])),
      konu("ck3", "Meslekler", "👨‍⚕️", [["👨‍⚕️", "Doktor hastaları iyileştirir."], ["👨‍🚒", "İtfaiyeci yangını söndürür."], ["👨‍🌾", "Çiftçi sebze ve meyve yetiştirir."], ["👩‍🏫", "Öğretmen bize yeni şeyler öğretir."]],
        tiplerden([
          [3, () => { const m = pick(MESLEK); return em(secim(m[2], m[0], MESLEK.filter((x) => x !== m).map((x) => x[0]), `${m[0]} ${m[1]}`)); }],
          [2, () => eslestir("Her mesleği aracıyla eşleştir.", sec(MESLEK, Y5() ? 4 : 3).map((x) => [x[0], x[3]]))]
        ])),
      konu("ck4", "Sağlıklı Yaşam", "🥦", [["🥦", "Sebze ve meyve bizi güçlü yapar."], ["🧼", "Yemekten önce ve tuvaletten sonra ellerimizi yıkarız."], ["🦷", "Sabah ve akşam dişlerimizi fırçalarız."], ["😴", "Erken yatar, iyi uyuruz."]],
        tiplerden([
          [3, () => em(secim("Hangisi daha sağlıklı?", pick(["🥦", "🍎", "🥕", "🍌", "🥛", "🥚", "🍊"]), ["🍬", "🍟", "🍭", "🥤", "🍩"], ""))],
          [2, () => { const q = pick([["Yemekten önce ne yaparız?", "🧼"], ["Yatmadan önce neyimizi fırçalarız?", "🦷"], ["Hapşırınca ağzımızı neyle kapatırız?", "🤧"], ["Akşam olunca ne yaparız?", "😴"]]); return em(secim(q[0], q[1], ["🍭", "📺", "🎮", "🏀"], "")); }]
        ])),
      konu("ck5", "Nezaket", "🙏", [["🙏", "Teşekkür ederim, lütfen, özür dilerim: sihirli sözcükler."], ["🤝", "Oyuncaklarımızı paylaşırız."], ["👋", "Büyüklerimizi selamlarız."]],
        tiplerden([
          [3, () => dy(pick(["Bir şey isterken lütfen deriz.", "Bize yardım edene teşekkür ederiz.", "Oyuncaklarımızı arkadaşlarımızla paylaşırız.", "Yanlış yapınca özür dileriz.", "Sıramızı bekleriz.", "Büyüklerimize saygı gösteririz."]), true)],
          [3, () => dy(pick(["Arkadaşımın oyuncağını sormadan alırım.", "Konuşan birinin sözünü keserim.", "Sıra beklemeden öne geçerim.", "Arkadaşıma kötü söz söylerim."]), false)]
        ])),
      konu("ck6", "Güvenlik", "⚠️", [["🔥", "Ateşe ve sobaya dokunmayız."], ["🔌", "Prize bir şey sokmayız."], ["💊", "İlaçları ancak büyüklerimiz verir."], ["🙅", "Tanımadığımız kişilerle bir yere gitmeyiz."]],
        tiplerden([
          [3, () => em(secim("Hangisi tehlikeli? Dokunmamalıyız!", pick(["🔥", "🔌", "🔪", "💊", "🧯"].slice(0, 4)), ["🧸", "⚽", "📖", "🧩", "🖍️"], ""))],
          [2, () => dy(pick(["Tanımadığım biri bir şey verirse almam, hemen büyüğüme söylerim.", "Kaybolursam bir polis ya da güvenlik görevlisinden yardım isterim.", "Ocağın yanında oynamam."]), true)],
          [2, () => dy(pick(["Prizle oynarım.", "İlaçları şeker sanıp yerim.", "Balkondan aşağı sarkarım."]), false)]
        ]))
    ] }]
  };
})();
