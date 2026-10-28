// Okul öncesi dünyaları 2: Boya Kalem (Sanat), Müzik Kutusu (Müzik), Hareket (Hareket ve Sağlık), Hello! (İngilizce)
(function () {
  const { r, pick, sec, karistir, secim, dy, grupla, eslestir, sirala, tiplerden } = O;
  const Y5 = () => (window.YAS || 5) >= 5;
  const buyuk = (e, boy) => `<div style="font-size:${boy || 96}px;line-height:1.15;text-align:center;letter-spacing:4px">${e}</div>`;
  const em = (o) => (o ? Object.assign(o, { em: true }) : o);
  const konu = (id, ad, ikon, bilgi, uret) => ({ id, ad, ikon, bilgi, uret });

  // ================= BOYA KALEM (Sanat) =================
  const RENK_KARE = [["kırmızı", "🟥"], ["mavi", "🟦"], ["sarı", "🟨"], ["yeşil", "🟩"], ["turuncu", "🟧"], ["mor", "🟪"], ["kahverengi", "🟫"], ["siyah", "⬛"], ["beyaz", "⬜"]];
  const RENK_NESNE = { kırmızı: ["🍎", "🍓", "🍒", "🚒", "❤️"], sarı: ["🍌", "🌻", "🐥", "🌞", "🧀"], yeşil: ["🥦", "🐸", "🌲", "🥒", "🍀"], mavi: ["🐳", "🫐", "💧", "🧢"], turuncu: ["🍊", "🥕", "🎃", "🦊"], mor: ["🍇", "🍆", "🔮"], kahverengi: ["🐻", "🌰", "🪵", "🍫"] };
  const BOYA = [["güneş", "sarı"], ["elma", "kırmızı"], ["yaprak", "yeşil"], ["kalp", "kırmızı"], ["yıldız", "sarı"], ["balon", "mavi"], ["top", "turuncu"], ["çiçek", "mor"], ["ev", "kahverengi"], ["araba", "mavi"]];
  const BASSON = [["🐝", "🌼"], ["🚗", "🏠"], ["🐭", "🧀"], ["🐶", "🦴"], ["🐰", "🥕"], ["🐞", "🍃"], ["🚀", "🌙"], ["🐟", "🪸"]];
  const KARISIM = [["sarı", "mavi", "🟩", "yeşil"], ["kırmızı", "sarı", "🟧", "turuncu"], ["kırmızı", "mavi", "🟪", "mor"], ["kırmızı", "beyaz", "🩷", "pembe"], ["mavi", "beyaz", "🩵", "açık mavi"], ["siyah", "beyaz", "🩶", "gri"]];

  DERS.sanat = {
    ad: "Boya Kalem", ikon: "🎨", renk: "#9b5de5",
    temalar: [{ id: "at1", ad: "Boya Kalem (Sanat)", konular: [
      konu("ak1", "Renkler", "🌈", [["🟥", "Kırmızı"], ["🟦", "Mavi"], ["🟨", "Sarı"], ["🟩", "Yeşil"], ["🟧", "Turuncu"], ["🟪", "Mor"]],
        tiplerden([
          [2, () => { const k = pick(RENK_KARE.slice(0, Y5() ? 9 : 6)); return em(secim(`${k[0].charAt(0).toLocaleUpperCase("tr") + k[0].slice(1)} olanı bul!`, k[1], RENK_KARE.filter((x) => x !== k).map((x) => x[1]), `${k[1]} ${k[0]}`)); }],
          [3, () => { const ad = pick(Object.keys(RENK_NESNE)); const d = pick(RENK_NESNE[ad]); return em(secim(`Hangisi ${ad}?`, d, Object.keys(RENK_NESNE).filter((x) => x !== ad).flatMap((x) => RENK_NESNE[x]), `${d} ${ad}`)); }]
        ])),
      konu("ak2", "Boyama", "🖍️", [["🖍️", "Önce boyayı seç, sonra resme dokun."], ["☀️", "Güneşi sarıya boyarız."], ["🍎", "Elmayı kırmızıya boyarız."]],
        () => { const [sekil, renk] = pick(BOYA); const diger = sec(Object.keys(MINIK_RENK).filter((x) => x !== renk && x !== "beyaz" && x !== "siyah"), Y5() ? 3 : 2); return { tip: "boya", soru: `${sekil.charAt(0).toLocaleUpperCase("tr") + sekil.slice(1)} resmini ${renk} renge boya!`, sekil, renk, renkler: karistir([renk, ...diger]), cozum: "" }; }),
      konu("ak3", "Çizgi Çalışması", "✍️", [["✍️", "Parmağını yeşil noktadan başlatıp çizginin üstünden sona götür."], ["〰️", "Dalgalı çizgi"], ["⚡", "Zikzak çizgi"], ["⭕", "Daire"]],
        () => { const yollar = Y5() ? Object.keys(MINIK_YOL) : ["düz çizgi", "dik çizgi", "eğik çizgi", "dalga", "tepe", "daire"]; const y = pick(yollar), bs = pick(BASSON); return { tip: "iz", soru: `${bs[0]} ➜ ${bs[1]}  Parmağınla ${y} çiz!`, okunacak: `Parmağını resimden başlat, çizginin üstünden giderek sona ulaştır. Bu bir ${y}.`, yol: MINIK_YOL[y], bas: bs[0], son: bs[1], renk: pick(Object.values(MINIK_RENK).slice(0, 6)), cozum: "" }; }),
      konu("ak4", "Renk Karışımı", "🧪", [["🟨➕🟦", "Sarı ile mavi karışınca yeşil olur 🟩"], ["🟥➕🟨", "Kırmızı ile sarı karışınca turuncu olur 🟧"], ["🟥➕🟦", "Kırmızı ile mavi karışınca mor olur 🟪"]],
        () => { if (!Y5()) { const ad = pick(Object.keys(RENK_NESNE)); const k = RENK_KARE.find((x) => x[0] === ad); const n = pick(RENK_NESNE[ad]); return em(secim("Bu resim hangi renk?", k[1], RENK_KARE.filter((x) => x !== k).map((x) => x[1]), `${n} ${ad}`, { gorsel: buyuk(n) })); } if (Math.random() < 0.35) { const ad = pick(Object.keys(RENK_NESNE)); const k = RENK_KARE.find((x) => x[0] === ad); const n = pick(RENK_NESNE[ad]); return em(secim("Bu resim hangi renk?", k[1], RENK_KARE.filter((x) => x !== k).map((x) => x[1]), `${n} ${ad}`, { gorsel: buyuk(n) })); } const k = pick(KARISIM); const kare = (a) => RENK_KARE.find((x) => x[0] === a)[1]; return em(secim(`${k[0].charAt(0).toLocaleUpperCase("tr") + k[0].slice(1)} ile ${k[1]} karışınca hangi renk olur?`, k[2], ["🟥", "🟦", "🟨", "🟫", "⬛", "🟩", "🟧", "🟪"].filter((x) => x !== k[2]), `${k[0]} + ${k[1]} = ${k[3]}`, { gorsel: buyuk(kare(k[0]) + " ➕ " + kare(k[1]), 70) })); })
    ] }]
  };

  // ================= MÜZİK KUTUSU =================
  const HAYVAN_SES = [["🐄", "Möö möö"], ["🐶", "Hav hav"], ["🐱", "Miyav miyav"], ["🐑", "Mee mee"], ["🐓", "Ü ürü üüü"], ["🦆", "Vak vak"], ["🐸", "Vırak vırak"], ["🐝", "Vızzz"], ["🐍", "Tıss tıss"], ["🦉", "Hu hu"], ["🐴", "İhi hii"]];
  const CALGI = [["🥁", "davul", "vurarak"], ["🎸", "gitar", "telleri tıngırdatarak"], ["🎹", "piyano", "tuşlarına basarak"], ["🎺", "trompet", "üfleyerek"], ["🎻", "keman", "yayla"], ["🪈", "flüt", "üfleyerek"], ["🪇", "marakas", "sallayarak"]];
  const DAVUL = ["", "🥁", "🥁🥁", "🥁🥁🥁", "🥁🥁🥁🥁", "🥁🥁🥁🥁🥁", "🥁🥁🥁🥁🥁🥁"];
  DERS.muzik = {
    ad: "Müzik Kutusu", ikon: "🎵", renk: "#00b4d8",
    temalar: [{ id: "mt1", ad: "Müzik Kutusu (Müzik)", konular: [
      konu("mk1", "Davulu Say", "🥁", [["🥁", "Dikkatle dinle, davul kaç kez çaldı?"], ["👂", "Gözlerini kapatıp dinlemek yardımcı olur."], ["👏", "Sen de duyduğun kadar alkışla!"]],
        () => { const ust = Y5() ? 6 : 5, n = r(1, ust); const y = [n - 1, n + 1, n + 2].filter((x) => x >= 1 && x <= 6); const yan = y.slice(0, 2).map((x) => DAVUL[x]); return Object.assign({ tip: "ritim", soru: pick(["Davul kaç kez çaldı? Dinle, sonra bul!", "Kaç kez vurdum? Dinle ve say!", "Dinle ve say: davul kaç kez güm dedi?"]), secenekler: [DAVUL[n], ...yan], dogru: 0, em: true, cal: () => MINIK_SES.davul(n, Y5() ? 0.45 : 0.6), cozum: `${n} kez çaldı.` }); }),
      konu("mk2", "Hayvan Sesleri", "🐄", [["🐄", "İnek: möö"], ["🐶", "Köpek: hav hav"], ["🐱", "Kedi: miyav"], ["🦆", "Ördek: vak vak"]],
        () => { const h = pick(HAYVAN_SES); return { tip: "ritim", soru: "Bu sesi hangi hayvan çıkarır? Dinle!", dugme: "🔊 Sesi dinle", secenekler: [h[0], ...sec(HAYVAN_SES.filter((x) => x !== h), 2).map((x) => x[0])], dogru: 0, em: true, cal: () => APP.konus(h[1], null, true), gecikme: 2400, cozum: `${h[0]} ${h[1]}` }; }),
      konu("mk3", "Çalgılar", "🎸", [["🥁", "Davula vurarak çalarız."], ["🎺", "Trompete üfleyerek çalarız."], ["🎸", "Gitarın tellerine dokunarak çalarız."], ["🎹", "Piyanonun tuşlarına basarak çalarız."]],
        tiplerden([
          [3, () => { const c = pick(CALGI); return em(secim(`${c[1].charAt(0).toLocaleUpperCase("tr") + c[1].slice(1)} hangisi?`, c[0], CALGI.filter((x) => x !== c).map((x) => x[0]), `${c[0]} ${c[1]}`)); }],
          [2, () => { const c = pick(CALGI.filter((x) => ["üfleyerek", "vurarak", "tuşlarına basarak"].includes(x[2]))); return em(secim(`Hangisini ${c[2]} çalarız?`, c[0], CALGI.filter((x) => x[2] !== c[2]).map((x) => x[0]), `${c[0]} ${c[1]}`)); }]
        ])),
      konu("mk4", "Hızlı mı, Yavaş mı?", "🐇", [["🐇", "Hızlı ritim tavşan gibi koşar."], ["🐢", "Yavaş ritim kaplumbağa gibi yürür."], ["👂", "Dinle ve karşılaştır."]],
        () => { const hizli = Math.random() < 0.5, h = pick(["🐇", "🐆", "🐎", "🚀"]), y = pick(["🐢", "🐌", "🦥", "🐛"]), n = r(4, 7); return { tip: "ritim", soru: `Dinle! Davul hızlı mı çalıyor, yavaş mı? Hızlıysa ${h}, yavaşsa ${y}.`, okunacak: "Dinle! Davul hızlı mı çalıyor, yavaş mı?", secenekler: hizli ? [h, y] : [y, h], dogru: 0, em: true, cal: () => MINIK_SES.davul(n, hizli ? 0.2 : 0.85), cozum: hizli ? `Hızlı çaldı ${h}` : `Yavaş çaldı ${y}` }; }),
      konu("mk5", "İnce mi, Kalın mı?", "🐭", [["🐭", "İnce ses, fare sesi gibidir."], ["🐻", "Kalın ses, ayı sesi gibidir."], ["🎹", "Piyanonun bir ucu ince, öbür ucu kalın ses çıkarır."]],
        () => { const ince = Math.random() < 0.5, i = pick(["🐭", "🐥", "🐦", "🐝"]), k = pick(["🐻", "🐘", "🦁", "🐄"]); return { tip: "ritim", soru: `Dinle! Bu ses ince mi (${i}), kalın mı (${k})?`, okunacak: "Dinle! Bu ses ince mi, kalın mı?", dugme: "🎵 Dinle", secenekler: ince ? [i, k] : [k, i], dogru: 0, em: true, cal: () => { const f = ince ? pick([1100, 1320, 1570]) : pick([130, 165, 196]); MINIK_SES.nota(f, 0, 0.5); MINIK_SES.nota(f, 0.6, 0.5); }, cozum: ince ? `İnce ses ${i}` : `Kalın ses ${k}` }; })
    ] }]
  };

  // ================= HAREKET VE SAĞLIK =================
  const HAREKET = [["🐸", "Kurbağa gibi 5 kez zıpla!", 12], ["🦩", "Tek ayağının üstünde dur, 10'a kadar say!", 12], ["🐻", "Ayı gibi dört ayak üstünde yürü!", 12], ["🦅", "Kollarını aç, kuş gibi uç!", 10], ["🐍", "Yılan gibi yerde sürün!", 10], ["🌀", "Kendi etrafında yavaşça 3 kez dön!", 10], ["🙆", "Ellerini havaya kaldır, parmak uçlarında uzan!", 8], ["🦘", "Kanguru gibi zıpla zıpla!", 10], ["🐢", "Kaplumbağa gibi çok yavaş yürü!", 12], ["🤸", "Yıldız zıplaması yap: kolların ve bacakların açılsın!", 12], ["🧘", "Gözlerini kapat, derin nefes al, yavaşça ver!", 10], ["🐈", "Kedi gibi sırtını kamburlaştır, sonra düzelt!", 10], ["🏃", "Olduğun yerde hızlı hızlı koş!", 10], ["👏", "Başının üstünde 10 kez alkışla!", 10]];
  const VUCUT = [["👁️", "göz"], ["👂", "kulak"], ["👃", "burun"], ["👄", "ağız"], ["✋", "el"], ["🦶", "ayak"], ["🦵", "bacak"], ["💪", "kol"], ["🦷", "diş"], ["💇", "saç"]];
  DERS.hareket = {
    ad: "Hareket", ikon: "🤸", renk: "#06d6a0",
    temalar: [{ id: "ht1", ad: "Hareket ve Sağlık", konular: [
      konu("hk1", "Hareket Zamanı", "🤸", [["🤸", "Ekranı bırak, kalk ve hareket et!"], ["🐸", "Kurbağa gibi zıpla."], ["🦩", "Tek ayak üstünde dur."]],
        () => { const h = pick(HAREKET); return { tip: "hareket", soru: h[1], resim: h[0], sure: h[2], cozum: "Vücudumuz hareket etmeyi sever!" }; }),
      konu("hk2", "Vücudumuz", "🙋", [["👁️", "Gözlerimizle görürüz."], ["👂", "Kulaklarımızla duyarız."], ["✋", "Ellerimizle tutarız."], ["🦶", "Ayaklarımızla yürürüz."]],
        tiplerden([
          [3, () => { const v = pick(VUCUT.slice(0, Y5() ? 10 : 6)); return em(secim(`${v[1].charAt(0).toLocaleUpperCase("tr") + v[1].slice(1)} hangisi? Sen de kendininkini göster!`, v[0], VUCUT.filter((x) => x !== v).map((x) => x[0]), `${v[0]} ${v[1]}`, { okunacak: `${v[1].charAt(0).toLocaleUpperCase("tr") + v[1].slice(1)} hangisi?` })); }],
          [1, () => { const h = pick([["👆", "Burnunu göster!", 6], ["👂", "Kulaklarını tut!", 6], ["🙌", "Ellerini başının üstüne koy!", 6], ["🦶", "Ayaklarını yere vur!", 6]]); return { tip: "hareket", soru: h[1], resim: h[0], sure: h[2], cozum: "" }; }]
        ])),
      konu("hk3", "Ne Önce, Ne Sonra?", "🔢", [["🧼", "El yıkarken: ıslat, sabunla, durula, kurula."], ["🪥", "Diş fırçalarken: macun sür, fırçala, çalkala."], ["🌱", "Bitki büyürken: tohum, filiz, çiçek."]],
        () => { const kisa = !Y5(); const SIRA = [["Islat 💧", "Sabunla 🧼", "Durula 🚿", "Kurula 🧻"], ["Diş macunu sür 🪥", "Fırçala 😁", "Ağzını çalkala 💧", "Fırçayı yıka 🚿"], ["Uyan 🌅", "Yüzünü yıka 🧼", "Giyin 👕", "Kahvaltı yap 🍳"], ["Tohum ek 🌱", "Sula 💧", "Filizlensin 🌿", "Çiçek açsın 🌸"], ["Pijamanı giy 👕", "Dişini fırçala 🪥", "Masal dinle 📖", "Uyu 😴"], ["Çorabını giy 🧦", "Ayakkabını giy 👟", "Bağcığını bağla 🎀", "Dışarı çık 🚪"], ["Oyuncaklarla oyna 🧸", "Oyuncakları topla 🧺", "Kutuya koy 📦", "Ellerini yıka 🧼"]]; const sec_ = pick(SIRA); const p = kisa ? sec_.slice(0, 3) : sec_; return sirala("Doğru sıraya diz: önce ne yaparız?", p, p.join(" → "), " → "); }),
      konu("hk4", "Sağlıklı mı?", "💪", [["🥦", "Sebze, meyve, süt ve su bizi güçlü yapar."], ["🏃", "Hareket etmek ve uyumak da sağlıktır."], ["🍭", "Şekeri az yeriz."]],
        () => grupla("Sağlıklı olanları ve az yememiz gerekenleri ayır.", ["💪 Sağlıklı", "🙅 Az olmalı"], karistir([...sec(["🥦", "🍎", "🥕", "🥛", "💧", "🍌", "🥚"], Y5() ? 3 : 2).map((x) => [x, 0]), ...sec(["🍭", "🍬", "🍟", "🥤", "🍩", "🍫"], 2).map((x) => [x, 1])])))
    ] }]
  };

  // ================= HELLO! (İngilizce) =================
  const EN = {
    renk: [["red", "kırmızı", "🟥"], ["blue", "mavi", "🟦"], ["yellow", "sarı", "🟨"], ["green", "yeşil", "🟩"], ["orange", "turuncu", "🟧"], ["purple", "mor", "🟪"], ["black", "siyah", "⬛"], ["white", "beyaz", "⬜"], ["brown", "kahverengi", "🟫"], ["pink", "pembe", "🩷"]],
    sayi: [["one", "bir", "1️⃣"], ["two", "iki", "2️⃣"], ["three", "üç", "3️⃣"], ["four", "dört", "4️⃣"], ["five", "beş", "5️⃣"], ["six", "altı", "6️⃣"], ["seven", "yedi", "7️⃣"], ["eight", "sekiz", "8️⃣"], ["nine", "dokuz", "9️⃣"], ["ten", "on", "🔟"]],
    hayvan: [["cat", "kedi", "🐱"], ["dog", "köpek", "🐶"], ["bird", "kuş", "🐦"], ["fish", "balık", "🐟"], ["rabbit", "tavşan", "🐰"], ["cow", "inek", "🐄"], ["duck", "ördek", "🦆"], ["horse", "at", "🐴"], ["lion", "aslan", "🦁"], ["elephant", "fil", "🐘"], ["monkey", "maymun", "🐒"], ["bear", "ayı", "🐻"], ["frog", "kurbağa", "🐸"], ["bee", "arı", "🐝"]],
    meyve: [["apple", "elma", "🍎"], ["banana", "muz", "🍌"], ["orange", "portakal", "🍊"], ["strawberry", "çilek", "🍓"], ["grapes", "üzüm", "🍇"], ["watermelon", "karpuz", "🍉"], ["pear", "armut", "🍐"], ["cherry", "kiraz", "🍒"], ["lemon", "limon", "🍋"], ["carrot", "havuç", "🥕"], ["milk", "süt", "🥛"], ["bread", "ekmek", "🍞"], ["cake", "pasta", "🍰"], ["water", "su", "💧"]],
    selam: [["hello", "merhaba", "👋"], ["good morning", "günaydın", "🌅"], ["good night", "iyi geceler", "🌙"], ["goodbye", "hoşça kal", "🚶"], ["thank you", "teşekkür ederim", "🙏"], ["yes", "evet", "👍"], ["no", "hayır", "👎"], ["happy", "mutlu", "😀"], ["sad", "üzgün", "😢"], ["I love you", "seni seviyorum", "❤️"]],
    oyuncak: [["ball", "top", "⚽"], ["car", "araba", "🚗"], ["teddy bear", "oyuncak ayı", "🧸"], ["balloon", "balon", "🎈"], ["kite", "uçurtma", "🪁"], ["doll", "oyuncak bebek", "🪆"], ["train", "tren", "🚂"], ["plane", "uçak", "✈️"], ["book", "kitap", "📖"], ["sun", "güneş", "☀️"], ["moon", "ay", "🌙"], ["star", "yıldız", "⭐"]]
  };
  function enUret(liste) {
    const al = () => liste.slice(0, Y5() ? liste.length : Math.min(liste.length, 6));
    return tiplerden([
      [4, () => { const L = al(), w = pick(L); return em(secim("🔊 Dinle! Duyduğun hangisi?", w[2], L.filter((x) => x !== w).map((x) => x[2]), `${w[0]} = ${w[1]}`, { ses: w[0], sesOnce: true, cevapSes: w[0] })); }],
      [2, () => { const L = al(), w = pick(L); return em(secim(`İngilizcede "${w[0]}" ne demek? Dinle ve bul.`, w[2], L.filter((x) => x !== w).map((x) => x[2]), `${w[0]} = ${w[1]}`, { okunacak: "İngilizce dinle ve resmini bul.", ses: w[0], cevapSes: w[0] })); }],
      [1, () => { if (!Y5()) return null; return eslestir("Aynı olanları eşleştir: resim ve Türkçesi.", sec(al(), 3).map((x) => [x[2], x[1]])); }]
    ]);
  }
  const enKonu = (id, ad, ikon, liste) => ({ id, ad, ikon, kelimeler: liste, bilgi: liste.map((w) => [w[2], `${w[0]} = ${w[1]}`, w[0]]), uret: enUret(liste) });
  DERS.ingilizce = {
    ad: "Hello!", ikon: "🇬🇧", renk: "#ff006e",
    temalar: [{ id: "et1", ad: "Hello! (İngilizce)", konular: [
      enKonu("ek1", "Colours (Renkler)", "🌈", EN.renk),
      enKonu("ek2", "Numbers (Sayılar)", "🔢", EN.sayi),
      enKonu("ek3", "Animals (Hayvanlar)", "🐶", EN.hayvan),
      enKonu("ek4", "Food (Yiyecekler)", "🍎", EN.meyve),
      enKonu("ek5", "Hello! (Selamlaşma)", "👋", EN.selam),
      enKonu("ek6", "Toys (Oyuncaklar)", "🧸", EN.oyuncak)
    ] }]
  };
})();
