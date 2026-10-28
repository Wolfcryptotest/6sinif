// 5. sınıf İngilizce soru üreteçleri (ortak-uretec.js, ingilizce.js, ingilizce-ceviri.js ve kelime-bankasi.js'ten sonra yüklenir)
(function () {
  const U = window.URETEC, { r, pick, soru, tiplerden, eslestir } = window.UR;
  const D = window.ICERIK.ingilizce;
  // Boşluk cümlelerinin Türkçesi (5. eleman) çeviri sözlüğüne eklenir
  window.CEVIRI = window.CEVIRI || {};
  for (const u of D.uniteler) for (const k of u.konular) for (const b of k.bosluk || []) if (b[4]) window.CEVIRI[b[0]] = b[4];

  function kelimeUret(kel) {
    const temel = eslestir(kel, (en) => `"${en}" ne demektir?`, (tr) => `"${tr}" İngilizcede nasıl söylenir?`, (en, tr) => `${en} = ${tr}`);
    return () => {
      const q = temel();
      if (!q) return q;
      const m = q.soru.match(/^"(.+)" ne demektir\?$/);
      q.ses = m ? m[1] : q.secenekler[0];
      return q;
    };
  }
  function boslukUret(b) {
    return () => {
      const [c, d, y, a] = pick(b);
      const q = soru(`"${c}" Boşluğa hangisi gelmelidir?`, d, y, a);
      if (!q) return q;
      const tam = c.replace("___", d);
      q.ses = tam;
      q.ceviri = window.CEVIRI[c];
      if (window.kelimeAnlamlari) q.sozluk = window.kelimeAnlamlari(tam);
      return q;
    };
  }

  // ---------- Saat (Classroom Life) ----------
  const SAYI = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
  const saatYaz = (h, m) => (m === 0 ? `It's ${SAYI[h]} o'clock.` : m === 30 ? `It's half past ${SAYI[h]}.` : m === 15 ? `It's quarter past ${SAYI[h]}.` : `It's quarter to ${SAYI[h % 12 + 1]}.`);
  const saatSayi = (h, m) => `${h}:${String(m).padStart(2, "0")}`;
  const SAAT = () => { const h = r(1, 11), m = pick([0, 15, 30, 45]); const yan = [[h, (m + 15) % 60], [h, (m + 30) % 60], [h % 12 + 1, m], [h, (m + 45) % 60]]; return pick([
    () => { const q = soru(`"${saatYaz(h, m)}" saat kaçı gösterir?`, saatSayi(h, m), yan.map(([a, b]) => saatSayi(a, b)), `${saatYaz(h, m)} = ${saatSayi(h, m)}`); if (q) q.ses = saatYaz(h, m); return q; },
    () => { const q = soru(`Saat ${saatSayi(h, m)} İngilizcede nasıl söylenir?`, saatYaz(h, m), yan.map(([a, b]) => saatYaz(a, b)), `${saatSayi(h, m)} = ${saatYaz(h, m)}`); if (q) q.ses = saatYaz(h, m); return q; }
  ])(); };

  // ---------- Karşılaştırma / en üstünlük ----------
  const SIFAT = [["big", "bigger", "the biggest"], ["small", "smaller", "the smallest"], ["tall", "taller", "the tallest"], ["fast", "faster", "the fastest"], ["slow", "slower", "the slowest"], ["hot", "hotter", "the hottest"], ["cold", "colder", "the coldest"], ["busy", "busier", "the busiest"], ["happy", "happier", "the happiest"], ["noisy", "noisier", "the noisiest"], ["good", "better", "the best"], ["bad", "worse", "the worst"], ["beautiful", "more beautiful", "the most beautiful"], ["expensive", "more expensive", "the most expensive"], ["dangerous", "more dangerous", "the most dangerous"], ["interesting", "more interesting", "the most interesting"], ["old", "older", "the oldest"], ["long", "longer", "the longest"], ["heavy", "heavier", "the heaviest"], ["large", "larger", "the largest"]];
  const yanlisC = (s) => [s[0] + "er", "more " + s[0] + "er", s[0], "most " + s[0], s[2]].filter((x) => x !== s[1]);
  const yanlisS = (s) => ["the " + s[0] + "est", "the more " + s[0], s[1], "most " + s[0] + "est"].filter((x) => x !== s[2]);
  const KARS = () => pick([
    () => { const s = pick(SIFAT); return soru(`"${s[0]}" sıfatının karşılaştırma (comparative) hâli hangisidir?`, s[1], yanlisC(s), `${s[0]} → ${s[1]}`); },
    () => { const s = pick(SIFAT); return soru(`"${s[0]}" sıfatının en üstünlük (superlative) hâli hangisidir?`, s[2], yanlisS(s), `${s[0]} → ${s[2]}`); }
  ])();

  // ---------- Hayvanlar ve yaşam alanları ----------
  const HAB = [["camels", "in the desert"], ["polar bears", "in the Arctic"], ["penguins", "in Antarctica"], ["monkeys", "in the jungle"], ["lions", "in the savanna"], ["dolphins", "in the ocean"], ["cows", "on the farm"], ["bears", "in the forest"], ["fish", "in the river"], ["bats", "in caves"]];
  const YET = [["Birds", "fly"], ["Fish", "swim"], ["Monkeys", "climb trees"], ["Kangaroos", "jump high"], ["Cheetahs", "run very fast"], ["Parrots", "talk"], ["Frogs", "jump"], ["Dolphins", "swim fast"]];
  const YETNO = [["Penguins", "fly"], ["Fish", "walk"], ["Snakes", "run"], ["Turtles", "run fast"], ["Elephants", "fly"], ["Cows", "climb trees"]];

  // ---------- Ölçü kalıpları ----------
  const OLCU = [["water", "a glass of"], ["milk", "a glass of"], ["soup", "a bowl of"], ["cake", "a slice of"], ["bread", "a slice of"], ["tea", "a cup of"], ["coffee", "a cup of"], ["juice", "a bottle of"], ["pizza", "a slice of"], ["rice", "a plate of"]];
  const SAYILABILIR = ["apples", "eggs", "bananas", "tomatoes", "oranges", "sandwiches", "carrots", "biscuits"], SAYILAMAZ = ["milk", "water", "sugar", "bread", "rice", "cheese", "juice", "flour", "honey", "salt"];

  const OZEL = {
    en1k2: [
      () => { const w = pick(["apple", "orange", "umbrella", "egg", "elephant", "ice cream", "owl", "uncle", "hour", "eagle"]); return soru(`"___ ${w}" boşluğa hangisi gelir?`, w === "hour" ? "an" : "an", ["a", "the two", "some"], "Sesli harfle (ya da sesli harf sesiyle) başlayan kelimeden önce an."); },
      () => { const w = pick(["book", "teacher", "pen", "school", "dog", "banana", "chair", "notebook", "cat", "ruler"]); return soru(`"___ ${w}" boşluğa hangisi gelir?`, "a", ["an", "the two", "some"], "Sessiz harfle başlayan kelimeden önce a."); }
    ],
    en2k1: [SAAT, SAAT],
    en2k2: [SAAT],
    en5k2: [KARS, KARS],
    en6k2: [
      () => { const [y, o] = pick(OLCU); return soru(`"I'd like ___ ${y}, please." boşluğa hangisi gelir?`, o, [...new Set(OLCU.map((x) => x[1]))].filter((x) => x !== o), `${o} ${y}`); },
      () => { const s = pick([...SAYILABILIR.map((x) => [x, "many"]), ...SAYILAMAZ.map((x) => [x, "much"])]); return soru(`"How ___ ${s[0]} do we need?" boşluğa hangisi gelir?`, s[1], [s[1] === "many" ? "much" : "many", "often", "old"], s[1] === "many" ? "Sayılabilen çoğul isim: How many." : "Sayılamayan isim: How much."); },
      () => { const d = pick(SAYILAMAZ); return soru("Hangisi sayılamayan (uncountable) bir isimdir?", d, SAYILABILIR, `${d} sayılamaz; çoğul yapılmaz.`); }
    ],
    en7k1: [
      () => { const [h, y] = pick(HAB); return soru(`Where do ${h} live?`, `They live ${y}.`, HAB.filter((x) => x[1] !== y).map((x) => `They live ${x[1]}.`), `${h} live ${y}.`); }
    ],
    en7k2: [
      KARS,
      () => { const [h, f] = pick(YET); return soru(`"${h} ___ ${f}." boşluğa hangisi gelir?`, "can", ["can't", "mustn't", "doesn't"], `${h} ${f} yapabilir: can.`); },
      () => { const [h, f] = pick(YETNO); return soru(`"${h} ___ ${f}." boşluğa hangisi gelir?`, "can't", ["can", "must", "do"], `${h} bunu yapamaz: can't.`); }
    ]
  };

  for (const u of D.uniteler) for (const k of u.konular) {
    const tipler = [...(OZEL[k.id] || [])];
    if (k.kelimeler) tipler.push(kelimeUret(k.kelimeler), kelimeUret(k.kelimeler));
    if (k.bosluk) tipler.push(boslukUret(k.bosluk), boslukUret(k.bosluk), boslukUret(k.bosluk));
    if (tipler.length && !U[k.id]) U[k.id] = tiplerden(tipler);
  }
})();
