// 6. sınıf İngilizce soru üreteçleri (ortak-uretec.js ve ingilizce.js'ten sonra yüklenir)
(function () {
  const U = window.URETEC, { r, pick, karistir, soru, tiplerden, eslestir } = window.UR;

  // ---------- Sayılar ----------
  const BIR = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const ON = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const iki = (n) => (n < 20 ? BIR[n] : ON[Math.floor(n / 10)] + (n % 10 ? "-" + BIR[n % 10] : ""));
  const yazi = (n) => { const y = Math.floor(n / 100), k = n % 100; return (y ? BIR[y] + " hundred" : "") + (y && k ? " and " : "") + (k ? iki(k) : ""); };
  const SIRA_OZEL = { 1: "first", 2: "second", 3: "third", 5: "fifth", 8: "eighth", 9: "ninth", 12: "twelfth" };
  const sira = (n) => {
    if (n < 20) return SIRA_OZEL[n] || BIR[n] + "th";
    if (n % 10 === 0) return ON[n / 10].replace(/y$/, "ieth");
    return ON[Math.floor(n / 10)] + "-" + sira(n % 10);
  };
  const ek = (n) => (n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th");
  U.en2k1 = tiplerden([
    () => { const n = r(100, 500); return soru(`${n} sayısının İngilizcesi hangisidir?`, yazi(n), [yazi(n + 10 <= 500 ? n + 10 : n - 10), yazi(Math.floor(n / 100) * 100 + (n % 10) * 10 + Math.floor((n % 100) / 10)), yazi(n + 100 <= 500 ? n + 100 : n - 100), yazi(n + 1 <= 500 ? n + 1 : n - 1)], `${n} = ${yazi(n)}`); },
    () => { const n = r(100, 500); return soru(`"${yazi(n)}" hangi sayıdır?`, String(n), [String(n + 10 <= 500 ? n + 10 : n - 10), String(n + 100 <= 500 ? n + 100 : n - 100), String(n + 1 <= 500 ? n + 1 : n - 1), String(n - 2)], `${yazi(n)} = ${n}`); },
    () => { const n = r(1, 50); const yan = [n + 1, n - 1, n + 10, n - 10, n + 20].filter((x) => x >= 1 && x <= 50 && x !== n); return soru(`"${sira(n)}" hangi sıra sayısıdır?`, `${n}${ek(n)}`, yan.map((x) => `${x}${ek(x)}`), `${sira(n)} = ${n}${ek(n)} (${n}.)`); },
    () => {
      const n = r(1, 50), HATA = { 1: "oneth", 2: "twoth", 3: "threeth", 5: "fiveth", 8: "eightth", 9: "nineth", 12: "twelveth" };
      const yan = [n + 1, n - 1, n + 10, n - 10].filter((x) => x >= 1 && x <= 50 && x !== n).map(sira);
      const birler = n < 20 ? n : n % 10;
      if (HATA[birler]) yan.unshift((n < 20 ? "" : ON[Math.floor(n / 10)] + "-") + HATA[birler]);
      return soru(`${n}. (${n}${ek(n)}) sıra sayısı İngilizcede nasıl yazılır?`, sira(n), yan, `${n}${ek(n)} = ${sira(n)}`);
    },
    () => { const a = r(100, 400), b = r(1, 5) * 10; return soru(`"${yazi(a)} + ${iki(b)}" işleminin sonucu hangisidir?`, yazi(a + b), [yazi(a + b + 10), yazi(a + b - 10), yazi(a + b + 100 <= 500 ? a + b + 100 : a + b - 100)], `${a} + ${b} = ${a + b} = ${yazi(a + b)}`); }
  ]);

  // ---------- Ülkeler ----------
  const ULKE = [["Turkey", "Turkish", "Turkish"], ["Germany", "German", "German"], ["France", "French", "French"], ["Italy", "Italian", "Italian"], ["Spain", "Spanish", "Spanish"], ["Japan", "Japanese", "Japanese"], ["China", "Chinese", "Chinese"], ["Russia", "Russian", "Russian"], ["Greece", "Greek", "Greek"], ["Brazil", "Brazilian", "Portuguese"], ["Mexico", "Mexican", "Spanish"], ["the USA", "American", "English"], ["the UK", "British", "English"], ["Egypt", "Egyptian", "Arabic"], ["Portugal", "Portuguese", "Portuguese"], ["Canada", "Canadian", "English and French"], ["Argentina", "Argentinian", "Spanish"], ["Korea", "Korean", "Korean"]];
  const TR_ULKE = { "Turkey": "Türkiye", "Germany": "Almanya", "France": "Fransa", "Italy": "İtalya", "Spain": "İspanya", "Japan": "Japonya", "China": "Çin", "Russia": "Rusya", "Greece": "Yunanistan", "Brazil": "Brezilya", "Mexico": "Meksika", "the USA": "ABD", "the UK": "Birleşik Krallık", "Egypt": "Mısır", "Portugal": "Portekiz", "Canada": "Kanada", "Argentina": "Arjantin", "Korea": "Kore" };
  U.en6k1 = tiplerden([
    () => { const [u, m] = pick(ULKE); return soru(`"I'm from ${u}. I'm ___." Boşluğa hangisi gelir?`, m, ULKE.map((x) => x[1]).filter((x) => x !== m), `${u} → ${m}`); },
    () => { const [u, , d] = pick(ULKE); return soru(`"What language do people speak in ${u}?" sorusunun cevabı hangisidir?`, `They speak ${d}.`, ULKE.map((x) => `They speak ${x[2]}.`).filter((x) => x !== `They speak ${d}.`), `${TR_ULKE[u]}'da ${d} konuşulur.`); },
    () => { const [u, m] = pick(ULKE); return soru(`"He is ${m}." Bu kişi hangi ülkedendir?`, u.replace("the ", "The "), ULKE.map((x) => x[0].replace("the ", "The ")).filter((x) => x !== u.replace("the ", "The ")), `${m} → ${u}`); },
    () => { const [u] = pick(ULKE); return soru(`"${TR_ULKE[u]}" ülkesinin İngilizcesi hangisidir?`, u, ULKE.map((x) => x[0]).filter((x) => x !== u), `${TR_ULKE[u]} = ${u}`); }
  ]);

  const YEMEK = [["pizza", "Italy"], ["pasta", "Italy"], ["sushi", "Japan"], ["baklava", "Turkey"], ["kebab", "Turkey"], ["tacos", "Mexico"], ["croissant", "France"], ["paella", "Spain"], ["noodles", "China"], ["hamburger", "the USA"], ["fish and chips", "the UK"], ["moussaka", "Greece"], ["kimchi", "Korea"]];

  // ---------- Meslek / iş yeri ----------
  const IS = [["doctor", "hospital"], ["nurse", "hospital"], ["teacher", "school"], ["librarian", "library"], ["chef", "restaurant"], ["waiter", "restaurant"], ["farmer", "farm"], ["vet", "animal hospital"], ["firefighter", "fire station"], ["police officer", "police station"], ["pilot", "airport"], ["mechanic", "garage"], ["cashier", "supermarket"], ["baker", "bakery"], ["pharmacist", "pharmacy"], ["engineer", "office"], ["worker", "factory"]];
  const ART = (w) => (/^[aeiou]/.test(w) ? "an" : "a");
  const ISTANIM = [["doctor", "helps sick people"], ["vet", "helps sick animals"], ["pilot", "flies planes"], ["chef", "cooks meals"], ["farmer", "grows vegetables and fruit"], ["firefighter", "puts out fires"], ["mechanic", "fixes cars"], ["teacher", "teaches students"], ["librarian", "looks after books"], ["dentist", "looks after teeth"], ["police officer", "keeps people safe"], ["cashier", "takes money at the supermarket"], ["architect", "designs buildings"], ["baker", "makes bread"]];

  // ---------- Ulaşım ----------
  const TASIT = [["by bus", "otobüsle"], ["by car", "arabayla"], ["by train", "trenle"], ["by bike", "bisikletle"], ["by taxi", "taksiyle"], ["by ferry", "vapurla"], ["by plane", "uçakla"], ["by underground", "metroyla"], ["on foot", "yürüyerek"]];

  // ---------- Gezegenler ----------
  const GEZ = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  const SIRA_ADI = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];

  // ---------- Genel: kelime + boşluk doldurma ----------
  function kelimeUret(kel) {
    const temel = eslestir(kel, (en) => `"${en}" ne demektir?`, (tr) => `"${tr}" İngilizcede nasıl söylenir?`, (en, tr) => `${en} = ${tr}`);
    return () => {
      const q = temel();
      if (!q) return q;
      const m = q.soru.match(/^"(.+)" ne demektir\?$/), en = m ? m[1] : q.secenekler[0];
      q.ses = en; // 🔊 butonu bu kelimeyi okur
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
      q.ceviri = (window.CEVIRI || {})[c];
      if (window.kelimeAnlamlari) q.sozluk = window.kelimeAnlamlari(tam);
      return q;
    };
  }
  const OZEL = {
    en4k1: [
      () => { const [m, y] = pick(IS); return soru(`Where does ${ART(m)} ${m} work?`, `at ${ART(y)} ${y}`, IS.filter((x) => x[1] !== y).map((x) => `at ${ART(x[1])} ${x[1]}`), `${ART(m).replace(/^a/, "A")} ${m} works at ${ART(y)} ${y}.`); },
      () => { const [m, t] = pick(ISTANIM); return soru(`"This person ${t}." Bu kişi kimdir?`, `${ART(m)} ${m}`, ISTANIM.filter((x) => x[0] !== m).map((x) => `${ART(x[0])} ${x[0]}`), `${ART(m).replace(/^a/, "A")} ${m} ${t}.`); },
      () => { const [m] = pick([...ISTANIM, ["engineer"], ["architect"], ["artist"], ["actor"]]); return soru(`"She is ___ ${m}." Boşluğa hangisi gelir?`, ART(m), ["a", "an", "the", "some"].filter((x) => x !== ART(m)), /^[aeiou]/.test(m) ? `'${m}' sesli harfle başladığı için 'an' kullanılır.` : `'${m}' sessiz harfle başladığı için 'a' kullanılır.`); }
    ],
    en5k1: [
      () => { const [en, tr] = pick(TASIT); return soru(`"${tr.charAt(0).toLocaleUpperCase("tr") + tr.slice(1)} gitmek" İngilizcede nasıl söylenir? (I go to school ___.)`, en, TASIT.map((x) => x[0]).filter((x) => x !== en).concat(["by foot", "with bus"]), `${tr} = ${en}`); },
      () => { const [en, tr] = pick(TASIT); return soru(`"I go to school ${en}." cümlesinde okula nasıl gidiliyor?`, tr.charAt(0).toLocaleUpperCase("tr") + tr.slice(1), TASIT.map((x) => x[1].charAt(0).toLocaleUpperCase("tr") + x[1].slice(1)).filter((x) => x.toLocaleLowerCase("tr") !== tr), `${en} = ${tr}`); }
    ],
    en6k2: [
      () => { const [y, u] = pick(YEMEK); return soru(`${y.charAt(0).toUpperCase() + y.slice(1)} is a traditional dish from ___.`, u, [...new Set(YEMEK.map((x) => x[1]))].filter((x) => x !== u), `${y} → ${u}`); },
      () => { const [y, u] = pick(YEMEK); return soru(`"${u.replace("the ", "The ")} is famous for ___." Boşluğa hangisi gelir?`, y, YEMEK.filter((x) => x[1] !== u).map((x) => x[0]), `${u} is famous for ${y}.`); }
    ],
    en8k1: [
      () => { const i = r(0, 7); return soru(`Which planet is the ${SIRA_ADI[i]} planet from the Sun?`, GEZ[i], GEZ.filter((_, j) => j !== i), `Sıralama: ${GEZ.join(", ")}. ${SIRA_ADI[i]} = ${i + 1}.`); },
      () => { const f = pick([["Jupiter", "the biggest planet"], ["Mercury", "the smallest planet"], ["Venus", "the hottest planet"], ["Mercury", "the closest planet to the Sun"], ["Neptune", "the farthest planet from the Sun"], ["Saturn", "the planet with the most famous rings"], ["Earth", "the only planet with life (as far as we know)"], ["Mars", "the red planet"]]); return soru(`Which planet is ${f[1]}?`, f[0], GEZ.filter((x) => x !== f[0]), `${f[0]} is ${f[1]}.`); }
    ]
  };

  for (const u of window.ICERIK.ingilizce.uniteler) for (const k of u.konular) {
    const tipler = [...(OZEL[k.id] || [])];
    if (k.kelimeler) tipler.push(kelimeUret(k.kelimeler), kelimeUret(k.kelimeler));
    if (k.bosluk) tipler.push(boslukUret(k.bosluk), boslukUret(k.bosluk));
    if (tipler.length && !U[k.id]) U[k.id] = tiplerden(tipler);
  }
})();
