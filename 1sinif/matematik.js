// 1. Sınıf Matematik — Maarif Modeli temaları (sayılar 20'ye kadar, ritmik sayma 100'e kadar)
(function () {
  const { r, pick, karistir, sec, secim, sayi, sirala, grupla, dy, eslestir, tiplerden, bankadan } = O;
  const EM = ["🍎", "⭐", "🐟", "🌸", "🚗", "🎈", "🍪", "🐞", "🦆", "🍓", "⚽", "🐱"];
  const SAYI_AD = ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz", "on", "on bir", "on iki", "on üç", "on dört", "on beş", "on altı", "on yedi", "on sekiz", "on dokuz", "yirmi"];
  const SIRA_AD = ["", "birinci", "ikinci", "üçüncü", "dördüncü", "beşinci", "altıncı", "yedinci", "sekizinci", "dokuzuncu", "onuncu"];
  const dizi = (e, n, satir) => { satir = satir || 5; let h = ""; for (let i = 0; i < n; i++) { h += e; if ((i + 1) % satir === 0 && i + 1 < n) h += "<br>"; } return `<div style="font-size:42px;line-height:1.25;text-align:center">${h}</div>`; };
  const yakin3 = (n, alt, ust) => { const s = new Set([n]); for (let d = 1; s.size < 3 && d < 10; d++) { if (n + d <= ust) s.add(n + d); if (s.size < 3 && n - d >= alt) s.add(n - d); } return [...s].slice(1); };

  // ---------- Nesnelerin Geometrisi (1) ----------
  const SAHNE = [["🐱", "📦", "kutunun içinde", "in"], ["🐱", "🪑", "sandalyenin altında", "alt"], ["🐦", "🌳", "ağacın üstünde", "ust"]];
  const uzamsal = tiplerden([
    [3, () => { const ik = karistir(sec(EM, 3)); const i = r(0, 2); const yer = ["en solda", "ortada", "en sağda"][i]; return secim(`Hangisi ${yer}?`, ik[i], ik.filter((_, k) => k !== i), `Soldan sağa: ${ik.join(" ")}`, { gorsel: `<div style="font-size:70px;letter-spacing:20px">${ik.join("")}</div>`, em: true }); }],
    [3, () => pick([
      () => secim("Kedi masanın neresinde?", "Altında", ["Üstünde", "İçinde"], "", { gorsel: `<div style="font-size:70px;line-height:1">🍽️<br>🐈</div>` }),
      () => secim("Kuş ağacın neresinde?", "Üstünde", ["Altında", "İçinde"], "", { gorsel: `<div style="font-size:70px;line-height:1">🐦<br>🌳</div>` }),
      () => secim("Top kutunun neresinde?", "Yanında", ["İçinde", "Altında"], "", { gorsel: `<div style="font-size:70px">📦⚽</div>` }),
      () => secim("Elma tabağın neresinde?", "Üstünde", ["Altında", "Arkasında"], "", { gorsel: `<div style="font-size:70px;line-height:1">🍎<br>🍽️</div>` }),
      () => secim("Ayakkabılar yatağın neresinde?", "Altında", ["Üstünde", "Yanında"], "", { gorsel: `<div style="font-size:70px;line-height:1">🛏️<br>👟</div>` })
    ])()],
    [2, () => { const t = pick([["sağ", "sol"], ["ön", "arka"], ["alt", "üst"], ["iç", "dış"], ["yakın", "uzak"], ["aşağı", "yukarı"]]); return secim(`"${t[0]}" kelimesinin zıttı hangisi?`, t[1], sec(["sağ", "sol", "ön", "arka", "alt", "üst", "iç", "dış", "yakın", "uzak"].filter((x) => !t.includes(x)), 2), `${t[0]} ↔ ${t[1]}`); }],
    [2, () => { const e = sec(EM, 4); const i = r(0, 3); return secim(`Soldan ${SIRA_AD[i + 1]} sıradaki hangisi?`, e[i], e.filter((_, k) => k !== i), `${e.join(" ")}`, { gorsel: `<div style="font-size:64px;letter-spacing:14px">${e.join("")}</div>`, em: true }); }]
  ]);
  const esNesne = tiplerden([
    [4, () => { const [a, b] = sec(EM, 2); const n = r(4, 6), i = r(0, n - 1); const s = Array(n).fill(a); s[i] = b; return secim("Hangisi farklı?", b, sec(EM.filter((x) => x !== a && x !== b), 2), `Diğerleri hep ${a}`, { gorsel: `<div style="font-size:60px;letter-spacing:10px">${s.join("")}</div>`, em: true }); }],
    [3, () => { const a = pick(EM); return secim(`${a} ile aynı olan hangisi?`, a, sec(EM.filter((x) => x !== a), 2), "Eş nesneler birbirinin aynısıdır.", { gorsel: `<div style="font-size:90px">${a}</div>`, em: true }); }],
    [2, () => eslestir("Aynı olanları eşleştir.", sec(EM, 4).map((x) => [x, x + " "]))]
  ]);

  // ---------- Sayılar ve Nicelikler (1) ----------
  const sayilar = tiplerden([
    [4, () => { const n = r(1, 20), e = pick(EM); return sayi(`Kaç tane ${e} var? Say ve yaz.`, n, `${n} tane`, { gorsel: dizi(e, n) }); }],
    [3, () => { const n = r(1, 20), e = pick(EM); return secim("Kaç tane var?", n, yakin3(n, 0, 20), `${n} = ${SAYI_AD[n]}`, { gorsel: dizi(e, n) }); }],
    [2, () => { const n = r(0, 20); return secim(`"${SAYI_AD[n]}" sayısı hangisi?`, n, yakin3(n, 0, 20).concat([(n + 10) % 21]), `${SAYI_AD[n]} = ${n}`, { em: true }); }],
    [2, () => { const n = r(11, 19); return secim(`${n} sayısında kaç onluk, kaç birlik var?`, `1 onluk ${n - 10} birlik`, [`${n - 10} onluk 1 birlik`, `1 onluk ${n - 9} birlik`], `${n} = 10 + ${n - 10}`, { gorsel: `<div style="font-size:40px">🔟 ${"🔹".repeat(n - 10)}</div>` }); }],
    [2, () => { const n = r(1, 19), sonra = Math.random() < 0.5; if (!sonra && n === 0) return null; const d = sonra ? n + 1 : n - 1; return secim(`${n} sayısından hemen ${sonra ? "sonra" : "önce"} hangi sayı gelir?`, d, yakin3(d, 0, 20).filter((x) => x !== n).concat([sonra ? n - 1 : n + 1]), ""); }],
    [1, () => { const a = []; while (a.length < 4) { const x = r(0, 20); if (!a.includes(x)) a.push(x); } return sirala("Sayıları küçükten büyüğe sırala.", a.sort((x, y) => x - y).map(String), "", " "); }]
  ]);
  const karsilastir = tiplerden([
    [4, () => { const [e1, e2] = sec(EM, 2); const a = r(1, 9), b = r(1, 9); if (a === b) return null; const cok = Math.random() < 0.5; const d = (cok ? a > b : a < b) ? e1 : e2; return secim(`Hangisi daha ${cok ? "çok" : "az"}?`, d, [e1, e2].filter((x) => x !== d).concat(sec(EM.filter((x) => x !== e1 && x !== e2), 1)), `${e1}: ${a} tane, ${e2}: ${b} tane`, { gorsel: `<div style="font-size:40px;text-align:left;line-height:1.4">${e1.repeat(a)}<br>${e2.repeat(b)}</div>`, em: true }); }],
    [3, () => { const a = r(0, 20), b = Math.random() < 0.2 ? a : r(0, 20); const d = a > b ? ">" : a < b ? "<" : "="; return secim(`${a} ⬜ ${b}  Kutuya hangisi gelir?`, d, [">", "<", "="].filter((x) => x !== d), d === ">" ? "Büyüktür" : d === "<" ? "Küçüktür" : "Eşittir", { em: true }); }],
    [2, () => { const a = sec([...Array(21).keys()], 3); const b = Math.random() < 0.5; const d = b ? Math.max(...a) : Math.min(...a); return secim(`Hangisi en ${b ? "büyük" : "küçük"} sayı?`, d, a.filter((x) => x !== d), ""); }]
  ]);
  const siraSayi = tiplerden([
    [4, () => { const n = r(4, 6), e = sec(EM, n), i = r(0, n - 1); return secim(`Yarışta ${SIRA_AD[i + 1]} gelen hangisi? (Bitiş çizgisi solda 🏁)`, e[i], e.filter((_, k) => k !== i).slice(0, 2), `Soldan saymaya başla: 1, 2, 3...`, { gorsel: `<div style="font-size:56px;letter-spacing:8px">🏁${e.join("")}</div>`, em: true }); }],
    [3, () => { const i = r(1, 9); return secim(`${i}. sırayı nasıl okuruz?`, SIRA_AD[i], [SIRA_AD[i % 9 + 1], SAYI_AD[i]].filter((x) => x !== SIRA_AD[i]), ""); }],
    [2, () => { const i = r(2, 8); return secim(`Sırada ${SIRA_AD[i]} olan çocuktan hemen önce kaçıncı çocuk var?`, SIRA_AD[i - 1], [SIRA_AD[i + 1], SIRA_AD[i]], ""); }]
  ]);
  const ritmik = tiplerden([
    [5, () => { const k = pick([2, 5, 10]), ileri = Math.random() < 0.75; const ust = k === 2 ? 20 : k === 5 ? 50 : 100; const bas = ileri ? r(0, ust / k - 4) : r(4, ust / k); const d = [0, 1, 2].map((i) => (ileri ? bas + i : bas - i) * k); const c = ileri ? (bas + 3) * k : (bas - 3) * k; if (c < 0) return null; return sayi(`${({ 2: "İkişer", 5: "Beşer", 10: "Onar" })[k]} ${ileri ? "ileri" : "geri"} sayalım: ${d.join(", ")}, ?`, c, `Her adımda ${k} ${ileri ? "ekle" : "çıkar"}.`); }],
    [3, () => { const ust = r(10, 20), n = r(1, ust - 3); return sayi(`Birer ileri sayalım: ${n}, ${n + 1}, ${n + 2}, ?`, n + 3, ""); }]
  ]);
  const oruntu = tiplerden([
    [5, () => { const e = sec(EM, 3), k = pick([[0, 1], [0, 0, 1], [0, 1, 2], [0, 1, 1]]); const s = []; for (let i = 0; i < k.length * 2 + 1; i++) s.push(e[k[i % k.length]]); const d = e[k[s.length % k.length]]; return secim("Sıradaki hangisi?", d, e.filter((x) => x !== d), `Tekrar eden: ${k.map((i) => e[i]).join("")}`, { gorsel: `<div style="font-size:52px">${s.join("")}❓</div>`, em: true }); }],
    [3, () => { const k = pick([1, 2]), bas = r(1, 10); const d = [0, 1, 2, 3].map((i) => bas + i * k); return sayi(`Sıradaki sayı kaç? ${d.join(", ")}, ?`, bas + 4 * k, `Her seferinde ${k} artıyor.`); }]
  ]);
  const tahmin = tiplerden([
    [5, () => { const e = pick(EM), n = r(2, 9) * 2; const t = n <= 6 ? "5" : n <= 13 ? "10" : "20"; return secim("Saymadan tahmin et: yaklaşık kaç tane var?", t, ["5", "10", "20"].filter((x) => x !== t), `Tam olarak ${n} tane var.`, { gorsel: `<div style="font-size:34px;max-width:420px;text-align:center">${e.repeat(n)}</div>` }); }]
  ]);

  // ---------- Sayılar ve Nicelikler (2) ----------
  const uzunluk = tiplerden([
    [3, () => { const n = r(2, 9); return sayi("Kurşun kalem kaç ataş uzunluğunda?", n, `${n} ataş`, { gorsel: `<div style="font-size:34px">✏️ = ${"📎".repeat(n)}</div>` }); }],
    [3, () => pick([() => secim("Hangisi daha uzun?", "🦒 Zürafa", ["🐭 Fare", "🐢 Kaplumbağa"], ""), () => secim("Hangisi daha kısa?", "🐜 Karınca", ["🌳 Ağaç", "🦒 Zürafa"], ""), () => secim("Hangisi en uzun?", "🚂 Tren", ["🚲 Bisiklet", "🛴 Scooter"], ""), () => secim("Hangisi daha kısa?", "🖍️ Pastel boya", ["📏 Cetvel", "🧹 Süpürge"], "")])()],
    [2, () => { const a = r(3, 9), b = r(3, 9); if (a === b) return null; return secim("Hangi kurdele daha uzun?", a > b ? "Kırmızı" : "Mavi", [a > b ? "Mavi" : "Kırmızı", "Eşitler"], `Kırmızı ${a} kare, mavi ${b} kare`, { gorsel: `<div style="font-size:32px;text-align:left">${"🟥".repeat(a)}<br>${"🟦".repeat(b)}</div>` }); }],
    [1, () => secim("Uzunluk ölçerken hangisini kullanabiliriz?", "Karış", ["Termometre", "Saat"], "Karış, adım, ataş ile de uzunluk ölçebiliriz.")]
  ]);
  const tartma = tiplerden([
    [4, () => pick([() => secim("Hangisi daha ağır?", "🐘 Fil", ["🐁 Fare", "🪶 Tüy"], ""), () => secim("Hangisi daha hafif?", "🎈 Balon", ["🎳 Bowling topu", "🧱 Tuğla"], ""), () => secim("Hangisi daha ağır?", "🍉 Karpuz", ["🍒 Kiraz", "🍓 Çilek"], ""), () => secim("Hangisi daha hafif?", "🍃 Yaprak", ["🪨 Taş", "📚 Kitaplar"], ""), () => secim("Hangisi daha ağır?", "🚗 Araba", ["🚲 Bisiklet", "🛴 Scooter"], ""), () => secim("Hangisi daha hafif?", "✏️ Kalem", ["🎒 Dolu çanta", "🪑 Sandalye"], ""), () => secim("Hangisi daha ağır?", "🐄 İnek", ["🐔 Tavuk", "🐇 Tavşan"], "")])()],
    [3, () => { const solAgir = Math.random() < 0.5; const [sol, sag] = karistir([["#ef476f", "Kırmızı kutu"], ["#3d8bff", "Mavi kutu"]]); const agir = solAgir ? sol : sag; const y1 = solAgir ? 120 : 70, y2 = solAgir ? 70 : 120; const svg = `<svg viewBox="0 0 300 190" width="300" height="190"><polygon points="150,80 135,180 165,180" fill="#7a6f8f"/><line x1="50" y1="${y1}" x2="250" y2="${y2}" stroke="#2b2140" stroke-width="8" stroke-linecap="round"/><circle cx="150" cy="${(y1 + y2) / 2}" r="8" fill="#2b2140"/><rect x="25" y="${y1 - 50}" width="50" height="50" rx="6" fill="${sol[0]}"/><rect x="225" y="${y2 - 50}" width="50" height="50" rx="6" fill="${sag[0]}"/></svg>`; return secim("Terazide aşağı inen taraf daha ağırdır. Hangi kutu daha ağır?", agir[1], [(solAgir ? sag : sol)[1], "İkisi eşit"], "Aşağı inen kefedeki kutu daha ağırdır.", { gorsel: svg }); }],
    [2, () => dy("Eşit kollu terazide ağır olan kefe aşağı iner.", true)]
  ]);

  // ---------- İşlemler ----------
  const toplama = tiplerden([
    [4, () => { const a = r(1, 10), b = r(1, 20 - a); return sayi(`${a} + ${b} = ?`, a + b, `${a} ile ${b} toplamı ${a + b}`); }],
    [3, () => { const a = r(1, 6), b = r(1, 6), e = pick(EM); return sayi(`${a} ${e} ve ${b} ${e} daha. Toplam kaç tane?`, a + b, `${a} + ${b} = ${a + b}`, { gorsel: `<div style="font-size:44px">${e.repeat(a)} ➕ ${e.repeat(b)}</div>` }); }],
    [2, () => { const a = r(2, 9), b = r(1, 9); return secim(`${a} + ${b} = ?`, a + b, yakin3(a + b, 0, 20), "", { em: true }); }],
    [2, () => { const a = r(3, 9), b = r(2, 8); return sayi(`Ali'nin ${a} bilyesi vardı. Annesi ${b} bilye daha verdi. Kaç bilyesi oldu?`, a + b, `${a} + ${b} = ${a + b}`); }]
  ]);
  const cikarma = tiplerden([
    [4, () => { const a = r(3, 20), b = r(1, a); return sayi(`${a} − ${b} = ?`, a - b, `${a} − ${b} = ${a - b}`); }],
    [3, () => { const a = r(3, 9), b = r(1, a - 1), e = pick(["🎈", "🍪", "🐦", "🍎"]); return sayi(`${a} ${e} vardı, ${b} tanesi gitti. Kaç tane kaldı?`, a - b, `${a} − ${b} = ${a - b}`, { gorsel: `<div style="font-size:44px">${e.repeat(a - b)}<span style="opacity:.25">${e.repeat(b)}</span></div>` }); }],
    [2, () => { const a = r(5, 15), b = r(1, 5); return sayi(`Elif'in ${a} kalemi vardı. ${b} tanesini arkadaşına verdi. Kaç kalemi kaldı?`, a - b, `${a} − ${b} = ${a - b}`); }]
  ]);
  const esitlik = tiplerden([
    [4, () => { const a = r(1, 10), b = r(1, 10); return sayi(`${a} + ? = ${a + b}`, b, `${a + b} − ${a} = ${b}`); }],
    [3, () => { const a = r(1, 9), b = r(1, 9), c = r(1, Math.min(9, a + b - 1)); const d = a + b - c; if (d < 1 || d > 20) return null; return sayi(`${a} + ${b} = ${c} + ?`, d, `Eşitliğin iki tarafı aynı olmalı: ${a + b} = ${c} + ${d}`); }],
    [2, () => { const a = r(1, 9), b = r(1, 9), dog = Math.random() < 0.5; const c = dog ? a + b : a + b + pick([1, -1]); return dy(`${a} + ${b} = ${c}`, dog, `${a} + ${b} = ${a + b}`); }]
  ]);

  // ---------- Paralarımız ----------
  const para = tiplerden([
    [4, () => { const u = pick([["🍎", "Elma"], ["✏️", "Kalem"], ["🎈", "Balon"], ["🍬", "Şeker"], ["📒", "Defter"], ["🧃", "Meyve suyu"]]); const tl = r(2, 20); return { tip: "market", soru: `${u[0]} ${u[1]} ${tl} lira. Tam parayı öde.`, tutar: tl * 100, cozum: `${tl} lira`, gorsel: `<div style="font-size:80px">${u[0]}</div>` }; }],
    [3, () => { const a = pick([1, 5, 10]), b = pick([1, 5, 10]); return sayi(`${a} lira ve ${b} lira kaç lira eder?`, a + b, `${a} + ${b} = ${a + b}`, { birim: "lira" }); }],
    [2, () => secim("Hangisi kâğıt paradır?", "10 lira", ["1 lira", "50 kuruş"], "5, 10, 20 lira ve üstü kâğıt paradır.")]
  ]);

  // ---------- Nesnelerin Geometrisi (2) ----------
  const SEK = { "Üçgen": '<polygon points="100,15 185,180 15,180"/>', "Kare": '<rect x="30" y="30" width="140" height="140"/>', "Dikdörtgen": '<rect x="10" y="50" width="180" height="100"/>', "Daire": '<circle cx="100" cy="100" r="80"/>' };
  const sekil = (ad, renk) => `<svg viewBox="0 0 200 200" width="140" height="140" fill="${renk || "#ffd23f"}" stroke="#2b2140" stroke-width="6">${SEK[ad]}</svg>`;
  const geometri = tiplerden([
    [4, () => { const ad = pick(Object.keys(SEK)); return secim("Bu şeklin adı ne?", ad, Object.keys(SEK).filter((x) => x !== ad), "", { gorsel: sekil(ad) }); }],
    [3, bankadan({ gruplar: { "Üçgen": ["🔺 Üçgen yol işareti", "🍕 Pizza dilimi", "⛺ Çadır"], "Daire": ["🕒 Saat", "🍪 Kurabiye", "🛞 Tekerlek"], "Kare/Dikdörtgen": ["🚪 Kapı", "📱 Telefon", "🖼️ Tablo"] }, grupSor: (g) => `Hangisi ${g === "Kare/Dikdörtgen" ? "kareye ya da dikdörtgene" : g.toLocaleLowerCase("tr") + "e"} benzer?`, gruplaSoru: "Nesneleri benzediği şekle göre yerleştir." })],
    [2, () => pick([() => secim("Üçgenin kaç kenarı var?", "3", ["4", "5"], ""), () => secim("Karenin kaç köşesi var?", "4", ["3", "0"], ""), () => secim("Hangi şeklin köşesi yoktur?", "Daire", ["Kare", "Üçgen"], "")])()]
  ]);

  // ---------- Veri ----------
  const veri = tiplerden([
    [5, () => { const ad = sec([["🍎", "Elma"], ["🍌", "Muz"], ["🍓", "Çilek"], ["🍊", "Portakal"]], 3); const v = ad.map((x) => [x[1], r(1, 6)]); const s = pick(v); return sayi(`Grafiğe göre kaç çocuk "${s[0]}" seçmiş?`, s[1], "Satırdaki yüzleri say.", { gorsel: OYUN.resimGrafikHTML(v, "🙂", 1, "En sevdiğimiz meyve") }); }],
    [3, () => { const ad = sec([["🐶", "Köpek"], ["🐱", "Kedi"], ["🐟", "Balık"], ["🐦", "Kuş"]], 3); const v = ad.map((x) => [x[1], r(1, 6)]); const mx = Math.max(...v.map((x) => x[1])); if (v.filter((x) => x[1] === mx).length > 1) return null; const d = v.find((x) => x[1] === mx)[0]; return secim("En çok sevilen hayvan hangisi?", d, v.filter((x) => x[0] !== d).map((x) => x[0]), "En uzun satıra bak.", { gorsel: OYUN.resimGrafikHTML(v, "🙂", 1, "En sevdiğimiz hayvan") }); }],
    [2, () => { const e = sec(EM, 2); const og = karistir([...Array(r(2, 3)).fill([e[0], 0]), ...Array(r(2, 3)).fill([e[1], 1])]).map((x, i) => [x[0] + "​".repeat(i), x[1]]); return grupla("Resimleri gruplara ayır.", [e[0], e[1]], og); }]
  ]);

  const K = (id, ad, ikon, uret, bilgi) => ({ id, ad, ikon, uret, bilgi });
  DERS.matematik = {
    ad: "Matematik", ikon: "🔢", renk: "#ff8a00",
    temalar: [
      { id: "mt1", ad: "Nesnelerin Geometrisi (1)", konular: [
        K("m1", "Konum: Sağ, Sol, Üst, Alt", "🧭", uzamsal, [["⬅️", "Sol elimiz bir tarafta, sağ elimiz diğer taraftadır."], ["⬆️", "Kuş ağacın üstünde, kedi masanın altında."], ["📦", "Top kutunun içinde ya da yanında olabilir."], ["🔢", "Soldan saymaya başlarız: birinci, ikinci, üçüncü."]]),
        K("m2", "Eş Nesneler", "👯", esNesne, [["👯", "Birbirinin aynısı olan nesnelere eş nesne denir."], ["🔍", "Dikkatle bakarak farklı olanı buluruz."], ["🧦", "Bir çift çorabın iki teki eş nesnedir."]])
      ] },
      { id: "mt2", ad: "Sayılar ve Nicelikler (1)", konular: [
        K("m3", "20'ye Kadar Sayılar", "🔢", sayilar, [["☝️", "Nesneleri tek tek sayarız: 1, 2, 3..."], ["🔟", "10 tane bir araya gelince 1 onluk olur."], ["1️⃣", "Rakamlar: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9"], ["🔢", "13 sayısında 1 onluk ve 3 birlik vardır."]]),
        K("m4", "Az mı, Çok mu?", "⚖️", karsilastir, [["⚖️", "İki grubu karşılaştırırken hangisi daha çok, hangisi daha az bakarız."], ["🐊", "Büyük sayı tarafına ağız açılır: 7 > 3"], ["🟰", "Eşit olanlar arasına = koyarız."]]),
        K("m5", "Sıra Bildiren Sayılar", "🏁", siraSayi, [["🥇", "Yarışta ilk gelen birinci olur."], ["🔢", "Birinci, ikinci, üçüncü, dördüncü, beşinci..."], ["🚶", "Sırada beklerken önümüzdeki kişi bizden bir önceki sıradadır."]]),
        K("m6", "Ritmik Sayma", "🥁", ritmik, [["2️⃣", "İkişer: 2, 4, 6, 8, 10..."], ["5️⃣", "Beşer: 5, 10, 15, 20..."], ["🔟", "Onar: 10, 20, 30... 100"]]),
        K("m7", "Örüntüler", "🔁", oruntu, [["🔁", "Belli bir kurala göre tekrar eden dizilere örüntü denir."], ["🍎", "🍎🍌🍎🍌 sıradaki: 🍎"], ["🔢", "2, 4, 6, 8 örüntüsünde sayılar ikişer artar."]]),
        K("m8", "Tahmin Edelim", "🤔", tahmin, [["🤔", "Saymadan yaklaşık kaç tane olduğunu söylemeye tahmin denir."], ["👀", "Gruplara bakarak hızlıca tahmin edebiliriz."], ["✅", "Sonra sayarak tahminimizi kontrol ederiz."]])
      ] },
      { id: "mt3", ad: "Sayılar ve Nicelikler (2)", konular: [
        K("m9", "Uzunluk Ölçme", "📏", uzunluk, [["📏", "Uzun ve kısa nesneleri karşılaştırırız."], ["✋", "Karış, adım, ataş ile uzunluk ölçebiliriz."], ["🦒", "Zürafa uzun, karınca kısadır."]]),
        K("m10", "Tartma: Ağır mı, Hafif mi?", "⚖️", tartma, [["⚖️", "Terazide ağır olan taraf aşağı iner."], ["🐘", "Fil ağır, tüy hafiftir."], ["🟰", "İki taraf eşitse terazi dengede durur."]])
      ] },
      { id: "mt4", ad: "İşlemlerden Cebirsel Düşünmeye", konular: [
        K("m11", "Toplama", "➕", toplama, [["➕", "Toplama, grupları birleştirmektir: 2 + 3 = 5"], ["🍎", "2 elmaya 3 elma eklersek 5 elma olur."], ["🔄", "3 + 2 ile 2 + 3 aynı sonucu verir."]]),
        K("m12", "Çıkarma", "➖", cikarma, [["➖", "Çıkarma, bir gruptan ayırmaktır: 5 − 2 = 3"], ["🎈", "5 balondan 2'si uçarsa 3 balon kalır."], ["0️⃣", "Bir sayıdan kendisini çıkarırsak 0 kalır: 4 − 4 = 0"]]),
        K("m13", "Eşitlik ve Eksik Sayı", "🟰", esitlik, [["🟰", "Eşittir işaretinin iki tarafı aynı değerdedir."], ["❓", "3 + ? = 5 ise ? = 2'dir."], ["⚖️", "Eşitlik dengede duran bir terazi gibidir."]])
      ] },
      { id: "mt5", ad: "Sayılar ve Nicelikler (3)", konular: [
        K("m14", "Paralarımız", "💰", para, [["💰", "Paramız Türk lirasıdır."], ["🪙", "1 lira madeni paradır."], ["💵", "5, 10, 20 lira kâğıt paradır."]])
      ] },
      { id: "mt6", ad: "Nesnelerin Geometrisi (2)", konular: [
        K("m15", "Geometrik Şekiller", "🔷", geometri, [["🔺", "Üçgenin 3 kenarı, 3 köşesi vardır."], ["🟥", "Karenin 4 kenarı eşittir."], ["▬", "Dikdörtgenin karşılıklı kenarları eşittir."], ["⚪", "Dairenin köşesi yoktur."]])
      ] },
      { id: "mt7", ad: "Veriye Dayalı Araştırma", konular: [
        K("m16", "Veri Toplama ve Grafik", "📊", veri, [["❓", "Arkadaşlarımıza soru sorarak bilgi toplarız."], ["🙂", "Resim grafiğinde her yüz bir kişiyi gösterir."], ["📏", "En uzun satır en çok seçileni gösterir."]])
      ] }
    ]
  };
})();
