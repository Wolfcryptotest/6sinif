// 7. sınıf İngilizce soru üreteçleri (ortak-uretec.js, ingilizce.js, ingilizce-ceviri.js ve kelime-bankasi.js'ten sonra yüklenir)
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

  // ---------- Karşılaştırma / en üstünlük ----------
  const SIFAT = [["big", "bigger", "the biggest"], ["small", "smaller", "the smallest"], ["tall", "taller", "the tallest"], ["fast", "faster", "the fastest"], ["slow", "slower", "the slowest"], ["hot", "hotter", "the hottest"], ["cold", "colder", "the coldest"], ["busy", "busier", "the busiest"], ["happy", "happier", "the happiest"], ["noisy", "noisier", "the noisiest"], ["good", "better", "the best"], ["bad", "worse", "the worst"], ["beautiful", "more beautiful", "the most beautiful"], ["expensive", "more expensive", "the most expensive"], ["dangerous", "more dangerous", "the most dangerous"], ["interesting", "more interesting", "the most interesting"], ["old", "older", "the oldest"], ["long", "longer", "the longest"], ["heavy", "heavier", "the heaviest"], ["large", "larger", "the largest"]];
  const yanlisC = (s) => [s[0] + "er", "more " + s[0] + "er", s[0], "most " + s[0], s[2]].filter((x) => x !== s[1]);
  const yanlisS = (s) => ["the " + s[0] + "est", "the more " + s[0], s[1], "most " + s[0] + "est"].filter((x) => x !== s[2]);
  const KARS = () => pick([
    () => { const s = pick(SIFAT); return soru(`"${s[0]}" sıfatının karşılaştırma (comparative) hâli hangisidir?`, s[1], yanlisC(s), `${s[0]} → ${s[1]}`); },
    () => { const s = pick(SIFAT); return soru(`"${s[0]}" sıfatının en üstünlük (superlative) hâli hangisidir?`, s[2], yanlisS(s), `${s[0]} → ${s[2]}`); }
  ])();


  // ---------- Düzensiz fiiller ----------
  const FIIL = [["go", "went", "gone"], ["come", "came", "come"], ["see", "saw", "seen"], ["eat", "ate", "eaten"], ["drink", "drank", "drunk"], ["have", "had", "had"], ["buy", "bought", "bought"], ["bring", "brought", "brought"], ["think", "thought", "thought"], ["make", "made", "made"], ["take", "took", "taken"], ["give", "gave", "given"], ["write", "wrote", "written"], ["get", "got", "got"], ["meet", "met", "met"], ["tell", "told", "told"], ["say", "said", "said"], ["sing", "sang", "sung"], ["swim", "swam", "swum"], ["run", "ran", "run"], ["sleep", "slept", "slept"], ["wear", "wore", "worn"], ["win", "won", "won"], ["lose", "lost", "lost"], ["find", "found", "found"], ["send", "sent", "sent"], ["spend", "spent", "spent"], ["leave", "left", "left"], ["feel", "felt", "felt"], ["know", "knew", "known"], ["forget", "forgot", "forgotten"], ["begin", "began", "begun"], ["become", "became", "become"], ["teach", "taught", "taught"], ["catch", "caught", "caught"], ["fall", "fell", "fallen"], ["break", "broke", "broken"], ["drive", "drove", "driven"], ["fly", "flew", "flown"], ["speak", "spoke", "spoken"], ["do", "did", "done"], ["be", "was/were", "been"]];
  const V2 = () => { const f = pick(FIIL); const q = soru(`"${f[0]}" fiilinin geçmiş zaman (V2) hâli hangisidir?`, f[1], [f[0] + "ed", f[2] === f[1] ? f[0] + "s" : f[2], f[0] + "ing"], `${f[0]} → ${f[1]} → ${f[2]}`); if (q) q.ses = f[0] + ", " + f[1].split("/")[0]; return q; };
  const V3 = () => { const f = pick(FIIL); const q = soru(`"${f[0]}" fiilinin 3. hâli (past participle) hangisidir?`, f[2], [f[0] + "ed", f[1] === f[2] ? f[0] + "s" : f[1], f[0] + "ing"], `${f[0]} → ${f[1]} → ${f[2]}`); if (q) q.ses = f[0] + ", " + f[2]; return q; };
  const REG = [["play", "played"], ["study", "studied"], ["stop", "stopped"], ["dance", "danced"], ["cry", "cried"], ["plan", "planned"], ["visit", "visited"], ["watch", "watched"], ["try", "tried"], ["travel", "travelled"], ["arrive", "arrived"], ["clean", "cleaned"], ["carry", "carried"], ["drop", "dropped"]];
  const ED = () => { const [a, b] = pick(REG); const y = [a + "ed", a + "d", a.slice(0, -1) + "ied", a + a.slice(-1) + "ed", a + "s"].filter((x) => x !== b); return soru(`"${a}" fiilinin geçmiş zaman hâli hangisidir?`, b, y, `${a} → ${b}`); };

  // ---------- Question tags ----------
  const TAG = [["You are tired", "aren't you"], ["She is a doctor", "isn't she"], ["They are at home", "aren't they"], ["It is cold today", "isn't it"], ["He isn't hungry", "is he"], ["We aren't late", "are we"], ["You can swim", "can't you"], ["She can't drive", "can she"], ["They like pizza", "don't they"], ["He plays chess", "doesn't he"], ["You don't eat meat", "do you"], ["She doesn't like rain", "does she"], ["You went to the party", "didn't you"], ["They didn't come", "did they"], ["He was ill", "wasn't he"], ["They were happy", "weren't they"], ["You will help me", "won't you"], ["It won't rain", "will it"], ["You have seen this film", "haven't you"], ["She has finished", "hasn't she"]];
  const TAGS = ["aren't you", "isn't she", "is he", "are we", "can't you", "can she", "don't they", "doesn't he", "do you", "does she", "didn't you", "did they", "wasn't he", "weren't they", "won't you", "will it", "haven't you", "hasn't she", "isn't it", "aren't they"];
  const TAGQ = () => { const [c, t] = pick(TAG); const ozne = t.split(" ").pop(); const y = TAGS.filter((x) => x !== t && x.endsWith(" " + ozne)); const q = soru(`"${c}, ___?" boşluğa hangi question tag gelir?`, t, y.length >= 3 ? y : y.concat(TAGS.filter((x) => x !== t)), `${c}, ${t}?`); if (q) q.ses = `${c}, ${t}?`; return q; };

  // ---------- Sıklık zarfları ----------
  const SIK = [["always", "%100", "her zaman"], ["usually", "%90", "genellikle"], ["often", "%70", "sık sık"], ["sometimes", "%50", "bazen"], ["rarely", "%10", "nadiren"], ["never", "%0", "asla"]];
  const SIKQ = () => pick([
    () => { const s = pick(SIK); return soru(`Sıklık zarfı "${s[0]}" yaklaşık hangi sıklığı gösterir?`, s[1], SIK.filter((x) => x !== s).map((x) => x[1]), `${s[0]} = ${s[2]} (${s[1]})`); },
    () => { const i = Math.floor(Math.random() * 5); return soru(`Sıklık sırasında "${SIK[i][0]}" kelimesinden sonra (daha az sıklık) hangisi gelir?`, SIK[i + 1][0], SIK.filter((x, j) => j !== i + 1 && j !== i).map((x) => x[0]), "always > usually > often > sometimes > rarely > never"); }
  ])();

  // ---------- Kişi + yardımcı fiil ----------
  const OZNE = [["I", "am", "was", "have"], ["He", "is", "was", "has"], ["She", "is", "was", "has"], ["It", "is", "was", "has"], ["We", "are", "were", "have"], ["You", "are", "were", "have"], ["They", "are", "were", "have"], ["My friends", "are", "were", "have"], ["Ali", "is", "was", "has"]];
  const WASWERE = () => { const o = pick(OZNE), y = pick(["at the museum yesterday", "very tired last night", "in Paris last summer", "at school on Monday"]); return soru(`"${o[0]} ___ ${y}." boşluğa hangisi gelir?`, o[2], ["was", "were", "did", "are", "is"].filter((x) => x !== o[2]), `${o[0]} → ${o[2]}`); };
  const PCONT = () => { const o = pick(OZNE), f = pick(["reading a book", "watching TV", "playing football", "doing homework", "sleeping", "cooking dinner"]); return soru(`"At 8 p.m. last night, ${o[0] === "I" ? "I" : o[0]} ___ ${f}." boşluğa hangisi gelir?`, o[2], ["was", "were", "did", "is", "are"].filter((x) => x !== o[2]), `Past continuous: ${o[0]} ${o[2]} + -ing`); };
  const PPERF = () => { const o = pick(OZNE), f = pick(["visited Rome", "seen the Pyramids", "eaten sushi", "been to London", "lived here for five years", "won three medals"]); return soru(`"${o[0]} ___ ${f}." boşluğa hangisi gelir?`, o[3], ["have", "has", "is", "did", "was"].filter((x) => x !== o[3]), `Present perfect: ${o[0]} ${o[3]} + V3`); };
  const GOING = () => { const o = pick(OZNE), f = pick(["visit my aunt", "study medicine", "join the robotics club", "watch the launch", "travel to Antalya"]); return soru(`"${o[0]} ___ going to ${f} next week." boşluğa hangisi gelir?`, o[1], ["am", "is", "are", "will", "do"].filter((x) => x !== o[1]), `be going to: ${o[0]} ${o[1]} going to`); };

  // ---------- Başkentler ----------
  const BASK = [["Türkiye", "Ankara"], ["England", "London"], ["France", "Paris"], ["Germany", "Berlin"], ["Italy", "Rome"], ["Spain", "Madrid"], ["Japan", "Tokyo"], ["China", "Beijing"], ["Egypt", "Cairo"], ["Russia", "Moscow"], ["Greece", "Athens"], ["Azerbaijan", "Baku"]];
  const UYRUK = [["Türkiye", "Turkish"], ["France", "French"], ["Germany", "German"], ["Italy", "Italian"], ["Spain", "Spanish"], ["Japan", "Japanese"], ["China", "Chinese"], ["Egypt", "Egyptian"], ["Russia", "Russian"], ["Greece", "Greek"]];
  const SIMGE = [["the Eiffel Tower", "Paris"], ["Big Ben", "London"], ["the Colosseum", "Rome"], ["the Pyramids", "Egypt"], ["the Great Wall", "China"], ["Anıtkabir", "Ankara"], ["Galata Tower", "İstanbul"], ["the Statue of Liberty", "New York"]];

  // ---------- Gezegenler ----------
  const GEZ = [["Mercury", "the closest planet to the Sun"], ["Venus", "the hottest planet"], ["Earth", "the only planet with life"], ["Mars", "the Red Planet"], ["Jupiter", "the biggest planet"], ["Saturn", "the planet with beautiful rings"], ["Neptune", "the farthest planet from the Sun"]];

  const OZEL = {
    en1k1: [SIKQ],
    en1k2: [SIKQ],
    en2k2: [TAGQ, TAGQ],
    en3k2: [ED, WASWERE],
    en4k2: [V2, V2],
    en5k2: [WASWERE, PCONT],
    en6k1: [
      eslestir(BASK, (a) => `What is the capital of ${a}?`, (b) => `${b} is the capital of ___ .`, (a, b) => `${a} – ${b}`),
      eslestir(UYRUK, (a) => `People from ${a} are ___ .`, (b) => `"${b}" people come from ___ .`, (a, b) => `${a} – ${b}`),
      eslestir(SIMGE, (a) => `Where is ${a}?`, (b) => `Which landmark is in ${b}?`, (a, b) => `${a} – ${b}`)
    ],
    en6k2: [V3, V3, PPERF],
    en7k2: [KARS, KARS],
    en8k1: [eslestir(GEZ, (a) => `Which is true about ${a}?`, (b) => `Which planet is ${b}?`, (a, b) => `${a}: ${b}`)],
    en8k2: [GOING]
  };

  for (const u of D.uniteler) for (const k of u.konular) {
    const tipler = [...(OZEL[k.id] || [])];
    if (k.kelimeler) tipler.push(kelimeUret(k.kelimeler), kelimeUret(k.kelimeler));
    if (k.bosluk) tipler.push(boslukUret(k.bosluk), boslukUret(k.bosluk), boslukUret(k.bosluk));
    if (tipler.length && !U[k.id]) U[k.id] = tiplerden(tipler);
  }
})();
