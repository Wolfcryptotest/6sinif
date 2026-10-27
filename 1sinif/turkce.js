// 1. Sınıf Türkçe — Maarif Modeli temaları; ilk okuma yazma ses grupları (a n e t i l / o k u r ı m / ü s ö y d z / ç b g c ş / p h v ğ f j)
(function () {
  const { r, pick, karistir, sec, secim, dy, grupla, eslestir, sirala, tiplerden, bankadan } = O;
  const GRUP = [["a", "n", "e", "t", "i", "l"], ["o", "k", "u", "r", "ı", "m"], ["ü", "s", "ö", "y", "d", "z"], ["ç", "b", "g", "c", "ş"], ["p", "h", "v", "ğ", "f", "j"]];
  const BUYUK = (h) => h.toLocaleUpperCase("tr");
  // [heceler, emoji]
  const KEL = [
    [["at"], "🐴"], [["el"], "✋"], [["la", "le"], "🌷"], [["na", "ne"], "🌿"], [["an", "ne"], "👩"], [["ni", "ne"], "👵"], [["an", "ten"], "📡"],
    [["kek"], "🧁"], [["o", "kul"], "🏫"], [["kurt"], "🐺"], [["mum"], "🕯️"], [["ek", "mek"], "🍞"], [["el", "ma"], "🍎"], [["li", "mon"], "🍋"], [["ar", "mut"], "🍐"], [["ka", "lem"], "✏️"], [["kar"], "❄️"], [["ok"], "🏹"], [["tır", "tıl"], "🐛"], [["man", "tar"], "🍄"], [["ro", "ket"], "🚀"], [["kral"], "👑"], [["tren"], "🚆"], [["a", "rı"], "🐝"], [["kum"], "🏖️"],
    [["muz"], "🍌"], [["ü", "züm"], "🍇"], [["süt"], "🥛"], [["yıl", "dız"], "⭐"], [["ku", "zu"], "🐑"], [["de", "niz"], "🌊"], [["sa", "at"], "⏰"], [["ör", "dek"], "🦆"], [["a", "yı"], "🐻"], [["ke", "di"], "🐱"], [["tuz"], "🧂"], [["yü", "zük"], "💍"], [["do", "ma", "tes"], "🍅"], [["san", "dal", "ye"], "🪑"], [["si", "nek"], "🪰"], [["ay"], "🌙"], [["de", "de"], "👴"], [["ka", "yık"], "🛶"], [["yu", "mur", "ta"], "🥚"], [["sa", "rı"], "🟡"],
    [["çi", "çek"], "🌸"], [["ba", "lık"], "🐟"], [["gü", "neş"], "☀️"], [["kuş"], "🐦"], [["bö", "cek"], "🐞"], [["be", "bek"], "👶"], [["çan", "ta"], "🎒"], [["ka", "şık"], "🥄"], [["şe", "ker"], "🍬"], [["ge", "mi"], "🚢"], [["ba", "lon"], "🎈"], [["çor", "ba"], "🍲"], [["şem", "si", "ye"], "☂️"], [["bu", "lut"], "☁️"], [["çi", "lek"], "🍓"], [["çay"], "🍵"], [["ka", "rın", "ca"], "🐜"], [["ye", "şil"], "🟢"],
    [["top"], "⚽"], [["ki", "tap"], "📕"], [["ha", "vuç"], "🥕"], [["a", "ğaç"], "🌳"], [["fil"], "🐘"], [["ka", "vun"], "🍈"], [["ho", "roz"], "🐓"], [["pa", "pat", "ya"], "🌼"], [["u", "çak"], "✈️"], [["kur", "ba", "ğa"], "🐸"], [["he", "di", "ye"], "🎁"], [["fa", "re"], "🐭"], [["şap", "ka"], "🧢"], [["por", "ta", "kal"], "🍊"], [["ma", "vi"], "🔵"], [["ev"], "🏠"], [["ka", "pı"], "🚪"], [["pas", "ta"], "🎂"], [["ta", "vuk"], "🐔"], [["tav", "şan"], "🐰"], [["pi", "ja", "ma"], "🩳"]
  ].map(([h, e]) => ({ s: h.join(""), h, e }));
  const harfler = (w) => [...new Set([...w.s])];

  // Ses konusu üreteci: odak harfler, o ana kadar öğrenilen harfler
  function sesKonusu(odak, bilinen) {
    const uy = KEL.filter((w) => harfler(w).every((h) => bilinen.includes(h)));
    const odakli = uy.filter((w) => harfler(w).some((h) => odak.includes(h)));
    const havuz = odakli.length >= 4 ? odakli : uy;
    const t = [
      [3, () => { const w = pick(havuz.filter((x) => bilinen.includes(x.s[0]))); if (!w) return null; return secim(`"${w.s}" kelimesi hangi sesle başlıyor?`, w.s[0], sec(bilinen.filter((x) => x !== w.s[0]), 4), `${w.e} ${w.s} → ${w.s[0]} sesiyle başlar.`, { gorsel: `<div style="font-size:100px">${w.e}</div>`, em: true }); }],
      [2, () => { const w = pick(havuz); const son = w.s[w.s.length - 1]; return secim(`"${w.s}" kelimesi hangi sesle bitiyor?`, son, sec(bilinen.filter((x) => x !== son), 4), `${w.e} ${w.s} → son ses: ${son}`, { gorsel: `<div style="font-size:100px">${w.e}</div>`, em: true }); }],
      [3, () => { const f = pick(odak); const var_ = uy.filter((w) => w.s.includes(f)), yok = uy.filter((w) => !w.s.includes(f)); if (!var_.length || yok.length < 2) return null; const d = pick(var_); return secim(`Hangi kelimede "${f}" sesi var?`, `${d.e} ${d.s}`, sec(yok, 2).map((w) => `${w.e} ${w.s}`), `${d.s} kelimesinde "${f}" sesi var.`); }],
      [3, () => { const w = pick(havuz.filter((x) => x.h.length > 1)); if (!w) return null; return Object.assign(sirala("Heceleri sırayla birleştir, resimdeki kelimeyi oluştur.", w.h, `${w.h.join("-")} → ${w.s}`, ""), { gorsel: `<div style="font-size:90px">${w.e}</div>` }); }],
      [2, () => eslestir("Küçük harfi büyük harfiyle eşleştir.", [...new Set(odak.concat(karistir(bilinen)))].slice(0, 4).map((h) => [h, BUYUK(h)]))],
      [2, () => { const ws = sec(havuz, 4); if (ws.length < 4) return null; return eslestir("Kelimeyi resmiyle eşleştir.", ws.map((w) => [w.s, w.e])); }],
      [2, () => { const w = pick(havuz); return secim("Bu resmin adı hangisi? Oku ve bul!", w.s, sec(uy.filter((x) => x.s !== w.s), 2).map((x) => x.s), `${w.e} ${w.s}`, { gorsel: `<div style="font-size:100px">${w.e}</div>`, sesYok: true }); }],
      [2, () => { const f = pick(odak); return secim(`"${f}" harfinin büyüğü hangisi?`, BUYUK(f), sec(bilinen.filter((x) => x !== f), 3).map(BUYUK), `${f} → ${BUYUK(f)}`, { em: true }); }],
      [1, () => { const w = pick(havuz); return secim(`"${w.s}" kelimesi kaç heceli?`, `${w.h.length} heceli`, [1, 2, 3, 4].filter((x) => x !== w.h.length).map((x) => `${x} heceli`), `${w.h.join(" - ")}`, { gorsel: `<div style="font-size:90px">${w.e}</div>` }); }]
    ];
    return tiplerden(t);
  }
  const bilinen = (gi, ekstra) => GRUP.slice(0, gi).flat().concat(ekstra);
  const sesKonu = (id, gi, harf, ikon) => ({
    id, ad: `${harf.map((h) => h + " " + BUYUK(h)).join(", ")} Sesleri`, ikon,
    uret: sesKonusu(harf, bilinen(gi, GRUP[gi].slice(0, GRUP[gi].indexOf(harf[harf.length - 1]) + 1))),
    bilgi: [["👂", `Bu konuda ${harf.join(", ")} seslerini öğreniyoruz.`]].concat(harf.map((h) => { const w = KEL.find((k) => k.s[0] === h) || KEL.find((k) => k.s.includes(h)); return [w ? w.e : "🔤", `${h} ${BUYUK(h)} sesi: ${w ? w.s : ""}`]; })).concat([["🧩", "Sesleri birleştirerek hece, heceleri birleştirerek kelime yaparız."]])
  });

  // ---------- Diğer konular ----------
  const heceKelime = (() => {
    const tum = KEL.filter((w) => w.h.length >= 2);
    return tiplerden([
      [4, () => { const w = pick(tum); return Object.assign(sirala("Heceleri birleştirerek kelimeyi yaz.", w.h, `${w.h.join("-")} → ${w.s}`, ""), { gorsel: `<div style="font-size:90px">${w.e}</div>` }); }],
      [3, () => { const w = pick(KEL); return secim(`"${w.s}" kelimesi kaç heceli?`, `${w.h.length} heceli`, [1, 2, 3, 4].filter((x) => x !== w.h.length).map((x) => `${x} heceli`), w.h.join(" - "), { gorsel: `<div style="font-size:90px">${w.e}</div>` }); }],
      [3, () => { const ws = sec(KEL, 4); return eslestir("Kelimeyi resmiyle eşleştir.", ws.map((w) => [w.s, w.e])); }],
      [2, () => { const w = pick(tum); const yan = [w.h.slice().reverse().join(""), w.s.slice(1) + w.s[0]].filter((x) => x !== w.s); return secim("Resimdeki kelime hangisi?", w.s, yan, w.h.join("-"), { gorsel: `<div style="font-size:100px">${w.e}</div>`, sesYok: true }); }]
    ]);
  })();
  const buyukKucuk = tiplerden([
    [4, () => eslestir("Küçük harfi büyük harfiyle eşleştir.", sec(GRUP.flat(), 4).map((h) => [h, BUYUK(h)]))],
    [3, () => { const h = pick(GRUP.flat()); return secim(`"${BUYUK(h)}" harfinin küçüğü hangisi?`, h, sec(GRUP.flat().filter((x) => x !== h), 3), `${BUYUK(h)} → ${h}`, { em: true }); }],
    [2, () => { const t = pick([["Ali okula gitti.", "ali okula gitti."], ["Elif kedisini sevdi.", "elif kedisini sevdi."], ["Bugün hava güzel.", "bugün hava güzel."], ["Ankara güzel bir şehir.", "ankara güzel bir şehir."]]); return secim("Hangisi doğru yazılmış?", t[0], [t[1], t[0].replace(/^(\S+) (\S)/, (m, a, b) => a + " " + b.toLocaleUpperCase("tr"))].filter((x) => x !== t[0]), "Cümle büyük harfle başlar. İsimler de büyük harfle başlar.", { sesYok: true }); }],
    [1, () => dy("Cümleye büyük harfle başlarız.", true)],
    [1, () => dy("İsimler küçük harfle başlar.", false, "İnsan isimleri büyük harfle başlar: Ali, Ayşe.")]
  ]);
  const CUMLE = ["Ali top attı.", "Kedi süt içti.", "Annem kek yaptı.", "Kuşlar uçtu.", "Ela ip atladı.", "Deniz mavi.", "Ben okula gidiyorum.", "Dedem bahçede.", "Bebek uyudu.", "Güneş doğdu.", "Arı bal yapar.", "Elmayı yedim."];
  const cumleKur = tiplerden([
    [5, () => { const c = pick(CUMLE); return sirala("Kelimeleri sıraya diz, cümle kur.", c.split(" ")); }],
    [3, () => { const c = pick(CUMLE), w = c.replace(".", "").split(" "); const k = O.buyuk(karistir(w.map((x) => x.toLocaleLowerCase("tr"))).join(" ")) + "."; const k2 = O.buyuk(w.slice().reverse().map((x) => x.toLocaleLowerCase("tr")).join(" ")) + "."; return secim("Hangisi doğru bir cümle?", c, [k, k2].filter((x) => x !== c), "", { sesYok: true }); }],
    [2, () => { const c = pick(CUMLE); const n = c.split(" ").length; return secim(`"${c}" cümlesinde kaç kelime var?`, n, [n + 1, n - 1 || 4], c.split(" ").join(" / ")); }]
  ]);
  const METIN1 = [
    { m: "Ali'nin bir kedisi var. Kedinin adı Pamuk. Pamuk süt içmeyi çok sever.", s: [["Kedinin adı ne?", "Pamuk", ["Tekir", "Ali"]], ["Kedi neyi sever?", "Süt", ["Ekmek", "Elma"]]] },
    { m: "Elif parka gitti. Parkta salıncağa bindi. Sonra kum havuzunda oynadı.", s: [["Elif nereye gitti?", "Parka", ["Okula", "Markete"]], ["Elif neye bindi?", "Salıncağa", ["Bisiklete", "Ata"]]] },
    { m: "Annem bir kek yaptı. Kekin içine üzüm koydu. Hep birlikte keki yedik.", s: [["Annem ne yaptı?", "Kek", ["Çorba", "Pilav"]], ["Kekin içine ne kondu?", "Üzüm", ["Çilek", "Muz"]]] },
    { m: "Kış geldi. Kar yağdı. Can ile Ela kardan adam yaptı.", s: [["Hangi mevsim geldi?", "Kış", ["Yaz", "Bahar"]], ["Çocuklar ne yaptı?", "Kardan adam", ["Kumdan kale", "Uçurtma"]]] },
    { m: "Dedem bahçeye domates ekti. Ben de her gün suladım. Domatesler kıpkırmızı oldu.", s: [["Dedem ne ekti?", "Domates", ["Patates", "Çiçek"]], ["Domatesler ne renk oldu?", "Kırmızı", ["Mavi", "Sarı"]]] },
    { m: "Bahçede bir kuş vardı. Kuşun yuvası ağaçtaydı. Yuvada üç yumurta vardı.", s: [["Kuşun yuvası neredeydi?", "Ağaçta", ["Çatıda", "Yerde"]], ["Yuvada kaç yumurta vardı?", "Üç", ["Bir", "Beş"]]] },
    { m: "Selin'in kırmızı bir balonu var. Rüzgâr esti. Balon havaya uçtu.", s: [["Balon ne renk?", "Kırmızı", ["Mavi", "Yeşil"]], ["Balon neden uçtu?", "Rüzgâr esti", ["Selin attı", "Patladı"]]] },
    { m: "Babam bana kitap aldı. Kitapta bir aslan vardı. Aslan çok cesurdu.", s: [["Babam ne aldı?", "Kitap", ["Top", "Kalem"]], ["Kitapta hangi hayvan vardı?", "Aslan", ["Kedi", "Tavşan"]]] },
    { m: "Yağmur yağıyordu. Emre şemsiyesini aldı. Okula ıslanmadan gitti.", s: [["Hava nasıldı?", "Yağmurlu", ["Güneşli", "Karlı"]], ["Emre ne aldı?", "Şemsiye", ["Top", "Bisiklet"]]] },
    { m: "Mert okula erken geldi. Sınıfı açık buldu. Öğretmenine günaydın dedi.", s: [["Mert okula ne zaman geldi?", "Erken", ["Geç", "Akşam"]], ["Mert öğretmenine ne dedi?", "Günaydın", ["İyi geceler", "Hoşça kal"]]] }
  ];
  const anlama = () => { const t = pick(METIN1), q = pick(t.s); return secim(q[0], q[1], q[2], "Cevap metnin içinde.", { gorsel: `<div class="ifade" style="text-align:left;font-size:24px;border-style:solid">${OYUN.esc(t.m)}</div>`, okunacak: t.m + " " + q[0] }); };
  const okuAnla = tiplerden([[6, anlama], [2, () => { const t = pick(METIN1); return dy(t.m.split(". ")[0] + ".", true, "Bu cümle metinde var."); }]]);
  const ZIT1 = [["büyük", "küçük", "🐘", "🐭"], ["sıcak", "soğuk", "🔥", "❄️"], ["uzun", "kısa", "🦒", "🐧"], ["gece", "gündüz", "🌙", "☀️"], ["açık", "kapalı", "📖", "📕"], ["mutlu", "üzgün", "😊", "😢"], ["hızlı", "yavaş", "🐇", "🐢"], ["dolu", "boş", "🥛", "🥃"], ["temiz", "kirli", "🧼", "💩"], ["yukarı", "aşağı", "⬆️", "⬇️"]];
  const ESA1 = [["siyah", "kara"], ["beyaz", "ak"], ["kırmızı", "al"], ["cevap", "yanıt"], ["okul", "mektep"], ["yıl", "sene"], ["hediye", "armağan"], ["ad", "isim"]];
  const esZit = tiplerden([
    [4, () => { const z = pick(ZIT1); return secim(`"${z[0]}" kelimesinin zıttı hangisi?`, `${z[3]} ${z[1]}`, sec(ZIT1.filter((x) => x !== z), 2).map((x) => `${x[3]} ${x[1]}`), `${z[2]} ${z[0]} ↔ ${z[3]} ${z[1]}`, { gorsel: `<div style="font-size:90px">${z[2]}</div>` }); }],
    [3, () => eslestir("Zıt anlamlı kelimeleri eşleştir.", sec(ZIT1, 4).map((z) => [z[0], z[1]]))],
    [2, () => { const e = pick(ESA1); return secim(`"${e[0]}" kelimesinin eş anlamlısı hangisi?`, e[1], sec(ESA1.filter((x) => x !== e).map((x) => x[1]), 2), `${e[0]} = ${e[1]}`); }],
    [1, () => eslestir("Eş anlamlı kelimeleri eşleştir.", sec(ESA1, 4))]
  ]);
  const noktaSoru = tiplerden([
    [5, () => { const t = pick([["Bugün hava güzel", "."], ["Kedim uyuyor", "."], ["Ben okula gidiyorum", "."], ["Adın ne", "?"], ["Kaç yaşındasın", "?"], ["Parka gelecek misin", "?"], ["Eyvah, süt taştı", "!"], ["Yaşasın, kar yağıyor", "!"]]); return secim(`"${t[0]} ⬜" — kutuya hangi işaret gelir?`, t[1], [".", "?", "!"].filter((x) => x !== t[1]), t[1] === "." ? "Bilgi veren cümlenin sonuna nokta konur." : t[1] === "?" ? "Soru soran cümlenin sonuna soru işareti konur." : "Sevinç ya da korku bildiren cümleye ünlem konur.", { em: true }); }],
    [3, () => grupla("Cümleleri doğru kutuya koy.", ["Nokta (.)", "Soru işareti (?)"], karistir([...sec(["Bugün hava güzel", "Kedim uyuyor", "Annem kek yaptı", "Ali top oynadı"], 2).map((x) => [x, 0]), ...sec(["Adın ne", "Kaç yaşındasın", "Nereye gidiyorsun", "Bu kimin kalemi"], 2).map((x) => [x, 1])]))]
  ]);

  const K = (id, ad, ikon, uret, bilgi) => ({ id, ad, ikon, uret, bilgi });
  DERS.turkce = {
    ad: "Türkçe", ikon: "📖", renk: "#ef476f",
    temalar: [
      { id: "tt1", ad: "Güzel Davranışlarımız", konular: [sesKonu("s1", 0, ["a", "n", "e"], "🅰️"), sesKonu("s2", 0, ["t", "i", "l"], "🌷")] },
      { id: "tt2", ad: "Mustafa Kemal'den Atatürk'e", konular: [sesKonu("s3", 1, ["o", "k", "u"], "🏫"), sesKonu("s4", 1, ["r", "ı", "m"], "🕯️")] },
      { id: "tt3", ad: "Çevremizdeki Yaşam", konular: [sesKonu("s5", 2, ["ü", "s", "ö"], "🍇"), sesKonu("s6", 2, ["y", "d", "z"], "⭐")] },
      { id: "tt4", ad: "Yol Arkadaşımız Kitaplar", konular: [sesKonu("s7", 3, ["ç", "b", "g"], "🌸"), sesKonu("s8", 3, ["c", "ş"], "🐦")] },
      { id: "tt5", ad: "Yeteneklerimizi Keşfediyoruz", konular: [sesKonu("s9", 4, ["p", "h", "v"], "⚽"), sesKonu("s10", 4, ["ğ", "f", "j"], "🐘")] },
      { id: "tt6", ad: "Minik Kâşifler", konular: [
        K("t1", "Hece ve Kelime", "🧩", heceKelime, [["🧩", "Sesler birleşip heceyi, heceler birleşip kelimeyi oluşturur."], ["👏", "Kelimeyi söylerken el çırparsak hecelerini sayarız: el-ma 2 hece."], ["📏", "Kısa kelimeler tek hecelidir: at, el, top."]]),
        K("t2", "Büyük ve Küçük Harfler", "🔠", buyukKucuk, [["🔠", "Her harfin büyüğü ve küçüğü vardır: a A, b B."], ["⚠️", "Dikkat: i'nin büyüğü İ, ı'nın büyüğü I olur."], ["🙋", "Cümleye ve isimlere büyük harfle başlarız: Ali, Ayşe."]])
      ] },
      { id: "tt7", ad: "Atalarımızın İzleri", konular: [
        K("t3", "Cümle Kuralım", "🧱", cumleKur, [["🧱", "Kelimeler bir araya gelince cümle olur."], ["🔠", "Cümle büyük harfle başlar."], ["⏺️", "Cümlenin sonuna nokta koyarız."]]),
        K("t4", "Oku ve Anla", "👀", okuAnla, [["👀", "Metni dikkatle okuruz."], ["❓", "Kim? Ne? Nerede? sorularını sorarız."], ["🔁", "Anlamadığımız yeri tekrar okuruz."]])
      ] },
      { id: "tt8", ad: "Sorumluluklarımızın Farkındayız", konular: [
        K("t5", "Zıt ve Eş Anlamlı Kelimeler", "☯️", esZit, [["🐘", "Büyük ile küçük birbirinin zıttıdır."], ["☀️", "Gece ile gündüz zıt anlamlıdır."], ["👯", "Siyah ile kara aynı anlamdadır. Bunlara eş anlamlı denir."]]),
        K("t6", "Nokta, Soru ve Ünlem", "❓", noktaSoru, [["⏺️", "Bilgi veren cümlenin sonuna nokta (.) koyarız."], ["❓", "Soru soran cümlenin sonuna soru işareti (?) koyarız."], ["❗", "Sevinç ve korku bildiren cümleye ünlem (!) koyarız."]])
      ] }
    ]
  };
})();
