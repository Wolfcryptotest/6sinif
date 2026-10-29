// 2. Sınıf Matematik — Türkiye Yüzyılı Maarif Modeli temaları (MEB 2026-2027 ders kitabı sırası)
// Sayılar 100'e kadar; toplama-çıkarma 100'e kadar; çarpma-bölme giriş; bütün-yarım-çeyrek; saat, para, uzunluk, kütle
(function () {
  const { r, pick, karistir, sec, secim, sayi, sirala, grupla, dy, eslestir, tiplerden, bankadan, buyuk } = O;
  const BIR = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
  const ON = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
  const oku = (n) => n === 100 ? "yüz" : n === 0 ? "sıfır" : [ON[Math.floor(n / 10)], BIR[n % 10]].filter(Boolean).join(" ");
  const S = (h, m) => h + ":" + String(m).padStart(2, "0");
  const ARSER = { 2: "ikişer", 3: "üçer", 4: "dörder", 5: "beşer", 10: "onar" };
  const EM = ["🍎", "⭐", "🐟", "🌸", "🚗", "🎈", "🍪", "🐞", "🍓", "⚽", "🐥", "🧁"];
  const ucYakin = (n, alt, ust, adim) => { const s = new Set([n]); for (let d = adim || 1; s.size < 4 && d < 60; d += adim || 1) { if (n + d <= ust) s.add(n + d); if (n - d >= alt) s.add(n - d); } return [...s].slice(1); };
  const kutu = (h, boy) => `<div style="font-size:${boy || 40}px;line-height:1.25;text-align:center;max-width:520px">${h}</div>`;

  // ================= 1. TEMA: Nesnelerin Geometrisi (1) =================
  const CISIM = { "Küre": ["⚽ Top", "🍊 Portakal", "🌍 Dünya maketi", "🏀 Basketbol topu"], "Küp": ["🎲 Zar", "🧊 Buz küpü", "🎁 Hediye kutusu"], "Silindir": ["🥫 Konserve kutusu", "🔋 Pil", "🥁 Davul"], "Koni": ["🍦 Dondurma külahı", "🎉 Parti şapkası", "🚧 Trafik konisi"], "Kare prizma": ["📦 Koli", "🧱 Tuğla", "🧃 Meyve suyu kutusu"] };
  const cisimler = tiplerden([
    [4, bankadan({ gruplar: CISIM, grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")} modeline benzer?`, gruplaSoru: "Nesneleri benzediği geometrik cisme göre yerleştir.", buyukYok: true })],
    [3, () => pick([
      () => secim("Hangi cisim yuvarlanabilir ama üst üste dizilemez?", "Küre", ["Küp", "Kare prizma"], "Kürenin hiç düz yüzü yoktur, her yönde yuvarlanır."),
      () => secim("Zarın benzediği geometrik cisim hangisidir?", "Küp", ["Küre", "Koni"], "Zar küp modelidir."),
      () => secim("Küpün kaç yüzü vardır?", "6", ["4", "8"], "Zarın 6 yüzü vardır."),
      () => secim("Silindirin kaç tane düz yüzü vardır?", "2", ["1", "6"], "Altta ve üstte birer daire yüzü vardır."),
      () => secim("Hangi cismin sivri bir ucu (tepe noktası) vardır?", "Koni", ["Küp", "Silindir"], "Dondurma külahının sivri ucunu düşün."),
      () => secim("Koli kutusu hangi cisme benzer?", "Kare prizma", ["Küre", "Koni"], "Dikdörtgen yüzleri olan kutular prizmaya benzer.")
    ])()],
    [2, () => dy(pick(["Top küre modelidir.", "Zarın bütün yüzleri karedir.", "Silindir yuvarlanabilir.", "Koninin tabanı dairedir."]), true)],
    [1, () => { const y = pick([["Kürenin köşeleri vardır.", "Kürenin köşesi yoktur."], ["Küpün 3 yüzü vardır.", "Küpün 6 yüzü vardır."], ["Koni hiç yuvarlanamaz.", "Koni yan yatınca yuvarlanabilir."]]); return dy(y[0], false, y[1]); }]
  ]);

  const SEKIL = { "Üçgen": '<polygon points="100,15 185,180 15,180"/>', "Kare": '<rect x="30" y="30" width="140" height="140"/>', "Dikdörtgen": '<rect x="10" y="50" width="180" height="100"/>', "Daire": '<circle cx="100" cy="100" r="80"/>' };
  const sekilSVG = (ad) => `<svg viewBox="0 0 200 200" width="140" height="140" fill="#ffd23f" stroke="#2b2140" stroke-width="6">${SEKIL[ad]}</svg>`;
  const KENAR = { "Üçgen": 3, "Kare": 4, "Dikdörtgen": 4, "Daire": 0 };
  const SNESNE = { "Üçgen": ["🍕 Pizza dilimi", "⛺ Çadır", "🔺 Uyarı levhası"], "Kare": ["🔲 Fayans", "🧇 Kare bisküvi", "🖼️ Kare çerçeve"], "Dikdörtgen": ["🚪 Kapı", "📱 Telefon", "📖 Kitap kapağı"], "Daire": ["🕰️ Duvar saati", "🍪 Kurabiye", "🍩 Simit"] };
  const sekiller = tiplerden([
    [3, () => { const ad = pick(Object.keys(SEKIL)); return secim("Bu geometrik şeklin adı nedir?", ad, Object.keys(SEKIL).filter((x) => x !== ad), "", { gorsel: sekilSVG(ad) }); }],
    [3, () => { const ad = pick(["Üçgen", "Kare", "Dikdörtgen"]), soru = Math.random() < 0.5 ? "kenarı" : "köşesi"; return secim(`${ad} şeklinin kaç ${soru} vardır?`, KENAR[ad], [3, 4, 5, 2].filter((x) => x !== KENAR[ad]), `${ad}: ${KENAR[ad]} kenar, ${KENAR[ad]} köşe`, { gorsel: sekilSVG(ad) }); }],
    [3, bankadan({ gruplar: SNESNE, grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")} şeklindedir?`, gruplaSoru: "Nesneleri şekillerine göre yerleştir.", buyukYok: true })],
    [2, () => pick([
      () => secim("Hangi şeklin köşesi yoktur?", "Daire", ["Kare", "Üçgen"], ""),
      () => secim("Bütün kenarları eşit olan dörtgen hangisidir?", "Kare", ["Dikdörtgen", "Üçgen"], ""),
      () => secim("Küpün yüzleri hangi şekildedir?", "Kare", ["Üçgen", "Daire"], ""),
      () => secim("Silindirin altı ve üstü hangi şekildedir?", "Daire", ["Kare", "Üçgen"], ""),
      () => secim("Karşılıklı kenarları eşit, iki kenarı uzun iki kenarı kısa olan şekil hangisidir?", "Dikdörtgen", ["Kare", "Üçgen"], "")
    ])()]
  ]);

  const sivi = tiplerden([
    [3, () => { const t = pick([["Hangisi en çok su alır?", "🛁 Küvet", ["🥛 Bardak", "🥄 Kaşık"]], ["Hangisi en az su alır?", "🥄 Çay kaşığı", ["🍲 Tencere", "🍶 Sürahi"]], ["Hangisi en çok su alır?", "🍲 Tencere", ["☕ Fincan", "🥄 Kaşık"]], ["Hangisi bir bardaktan daha az su alır?", "🥄 Kaşık", ["🍶 Sürahi", "🛁 Küvet"]]]); return secim(t[0], t[1], t[2], "Kabın büyüklüğü aldığı su miktarını etkiler."); }],
    [3, () => { const n = r(2, 6), kap = pick([["sürahi", "bardak"], ["şişe", "bardak"], ["kova", "sürahi"]]); return sayi(`Bir ${kap[0]} ${n} ${kap[1]} su alıyor. 2 ${kap[0]} kaç ${kap[1]} su alır?`, n * 2, `${n} + ${n} = ${n * 2}`); }],
    [2, () => { return secim("Suyu birinci kaptan ikinci kaba boşalttık, ikinci kap taştı. Hangisi daha çok su alır?", "Birinci kap", ["İkinci kap", "İkisi eşit"], "Taşan kap daha az su alır."); }],
    [2, () => dy(pick(["Büyük kova küçük bardaktan daha çok su alır.", "Sıvı miktarını tahmin ederken kapların büyüklüğüne bakarız.", "Bir sürahi su birkaç bardağı doldurabilir."]), true)]
  ]);

  // ================= 2. TEMA: Sayılar ve Nicelikler (1) =================
  const sayilar = tiplerden([
    [3, () => { const n = r(11, 100); return secim(`"${buyuk(oku(n))}" sayısı hangisidir?`, n, [n % 10 ? (n % 10) * 10 + Math.floor(n / 10) : n + 1, n + pick([10, -10]), n + pick([1, -1])].filter((x) => x > 0 && x <= 100 && x !== n), `${n} = ${oku(n)}`); }],
    [3, () => { const n = r(11, 99); return secim(`${n} sayısının okunuşu hangisidir?`, buyuk(oku(n)), [n + pick([10, -10]), n + pick([1, 2, -1])].filter((x) => x > 0 && x < 100 && x !== n).map((x) => buyuk(oku(x))), ""); }],
    [3, () => { const o = r(1, 9), b = r(0, 9); return sayi(`${o} onluk ve ${b} birlik kaç eder?`, o * 10 + b, `${o * 10} + ${b} = ${o * 10 + b}`, { gorsel: kutu("🔟".repeat(o) + "<br>" + "🔹".repeat(b), 32) }); }],
    [2, () => { const n = r(1, 10) * 10; return secim("Kaç tane var? (🔟 = 10)", n, ucYakin(n, 10, 100, 10), `${n / 10} tane onluk = ${n}`, { gorsel: kutu("🔟".repeat(n / 10), 36), balonYok: true }); }],
    [2, () => { const e = pick(EM), n = r(11, 30); return sayi("Onarlı gruplayarak say. Kaç tane var?", n, `${Math.floor(n / 10)} onluk ve ${n % 10} birlik = ${n}`, { gorsel: kutu(Array.from({ length: Math.ceil(n / 10) }, (_, i) => e.repeat(Math.min(10, n - i * 10))).join("<br>"), 28) }); }]
  ]);

  const cozumleme = tiplerden([
    [3, () => { const n = r(11, 99), s = String(n), i = r(0, 1), rk = s[i]; if (rk === "0") return null; const d = Number(rk) * (i === 0 ? 10 : 1); return secim(`${n} sayısında ${rk} rakamının basamak değeri kaçtır?`, d, [Number(rk), Number(rk) * 10, Number(rk) + 10].filter((x) => x !== d), `${rk} ${i === 0 ? "onlar" : "birler"} basamağında: ${d}`); }],
    [3, () => { const n = r(12, 98); if (n % 11 === 0) return null; const s = String(n), i = r(0, 1); return secim(`${n} sayısının ${i === 0 ? "onlar" : "birler"} basamağında hangi rakam vardır?`, s[i], [s[1 - i], String((Number(s[i]) + 3) % 10)].filter((x) => x !== s[i]), `${n}: onlar ${s[0]}, birler ${s[1]}`); }],
    [3, () => { const o = r(1, 9), b = r(1, 9); return secim(`${o * 10} + ${b} = ?`, o * 10 + b, [b * 10 + o, o + b].filter((x) => x !== o * 10 + b), "Onluklar ve birlikler birleşir."); }],
    [2, () => { const n = r(21, 99); if (n % 10 === 0) return null; return secim(`${n} sayısının çözümlenmiş hâli hangisidir?`, `${n - n % 10} + ${n % 10}`, [`${n % 10} + ${n - n % 10}0`, `${Math.floor(n / 10)} + ${n % 10}`, `${n % 10 * 10} + ${Math.floor(n / 10)}`].filter((x) => x !== `${n - n % 10} + ${n % 10}`), `${n} = ${Math.floor(n / 10)} onluk + ${n % 10} birlik`); }]
  ]);

  const siralama = tiplerden([
    [3, () => { const a = []; while (a.length < 3) { const x = r(10, 100); if (!a.includes(x)) a.push(x); } const b = Math.random() < 0.5, d = b ? Math.max(...a) : Math.min(...a); return secim(`Hangisi en ${b ? "büyük" : "küçük"} sayıdır?`, d, a.filter((x) => x !== d), "Önce onlar basamağına, eşitse birlere bakarız."); }],
    [3, () => { const a = r(10, 99), b = Math.random() < 0.15 ? a : r(10, 99); const d = a > b ? ">" : a < b ? "<" : "="; return secim(`${a} ⬜ ${b}  Kutuya hangi işaret gelir?`, d, [">", "<", "="].filter((x) => x !== d), `${a} ${d} ${b}`); }],
    [2, () => { const a = []; while (a.length < 4) { const x = r(10, 99); if (!a.includes(x)) a.push(x); } const s = a.slice().sort((x, y) => x - y); const ters = Math.random() < 0.4; return sirala(`Sayıları ${ters ? "büyükten küçüğe" : "küçükten büyüğe"} sırala.`, (ters ? s.reverse() : s).map(String), "", ", "); }],
    [3, () => { const n = r(11, 98), t = pick(["hemen sonra", "hemen önce", "arasında"]); if (t === "arasında") return secim(`${n - 1} ile ${n + 1} arasında hangi sayı vardır?`, n, [n + 2, n - 2], ""); const d = t === "hemen sonra" ? n + 1 : n - 1; return secim(`${n} sayısından ${t} gelen sayı hangisidir?`, d, [t === "hemen sonra" ? n - 1 : n + 1, d + 10], ""); }],
    [2, () => { const s = pick(["birinci", "ikinci", "üçüncü", "dördüncü", "beşinci"]), i = ["birinci", "ikinci", "üçüncü", "dördüncü", "beşinci"].indexOf(s); const e = sec(EM, 5); return secim(`Soldan ${s} sırada hangisi var?`, e[i], e.filter((_, k) => k !== i), "", { gorsel: kutu(e.join(" "), 54), em: true }); }]
  ]);

  const ritmik = tiplerden([
    [4, () => { const k = pick([2, 3, 4, 5, 10]), ileri = Math.random() < 0.7; const bas = ileri ? k * r(0, 6) : k * r(6, 10); const d = [0, 1, 2, 3].map((i) => ileri ? bas + i * k : bas - i * k); const c = ileri ? bas + 4 * k : bas - 4 * k; if (c < 0 || c > 100) return null; return sayi(`${buyuk(ARSER[k])} ${ileri ? "ileriye" : "geriye"} sayalım: ${d.join(", ")}, ?`, c, `Her adımda ${k} ${ileri ? "ekle" : "çıkar"}.`); }],
    [2, () => { const k = pick([2, 5, 10]); const d = k * r(2, 9); const yan = [d + 1, d + (k === 2 ? 3 : 2), d - 1].filter((x) => x % k !== 0); return secim(`${buyuk(ARSER[k])} sayarken hangi sayıyı söyleriz?`, d, yan, `${buyuk(ARSER[k])}: ${[1, 2, 3, 4, 5].map((i) => i * k).join(", ")}…`); }],
    [2, () => { const k = pick([2, 3, 4, 5, 10]), bas = k * r(1, 5); const d = [0, 1, 2, 3, 4].map((i) => bas + i * k); const eks = r(1, 3); const g = d.map((x, i) => i === eks ? "?" : x); return secim(`Boşluğa hangi sayı gelir? ${g.join(", ")}`, d[eks], [d[eks] + 1, d[eks] - 1, d[eks] + k].filter((x) => !d.includes(x) || x !== d[eks]).filter((x) => x !== d[eks]), `${buyuk(ARSER[k])} sayıyoruz.`); }]
  ]);

  const oruntu = tiplerden([
    [4, () => { const e = sec(EM, 3); const kalip = pick([[0, 1], [0, 0, 1], [0, 1, 2], [0, 1, 1]]); const seri = []; for (let i = 0; i < kalip.length * 2 + 1; i++) seri.push(e[kalip[i % kalip.length]]); const d = e[kalip[seri.length % kalip.length]]; return secim("Örüntüde sıradaki hangisi?", d, e.filter((x) => x !== d), `Tekrar eden kısım: ${kalip.map((i) => e[i]).join(" ")}`, { em: true, gorsel: kutu(seri.join(" ") + " ❓", 40) }); }],
    [3, () => { const k = pick([2, 3, 5, 10]), bas = r(1, 20); const d = [0, 1, 2, 3].map((i) => bas + i * k); return sayi(`Örüntüde sıradaki sayı kaçtır? ${d.join(", ")}, ?`, bas + 4 * k, `Kural: ${k} artıyor.`); }],
    [2, () => { const e = pick(["🔺", "🟦", "⭐", "🟢"]), art = r(1, 2), bas = r(1, 2); const adim = (n) => bas + (n - 1) * art; return sayi(`1. adım: ${e.repeat(adim(1))}   2. adım: ${e.repeat(adim(2))}   3. adım: ${e.repeat(adim(3))}  4. adımda kaç şekil olur?`, adim(4), `Her adımda ${art} şekil ekleniyor.`); }],
    [2, () => { const k = pick([2, 5, 10]), bas = r(1, 9) * k; const d = [0, 1, 2, 3].map((i) => bas + i * k); return secim(`${d.join(", ")} örüntüsünün kuralı nedir?`, `${buyuk(ARSER[k])} artıyor`, [`${buyuk(ARSER[k === 10 ? 5 : k + 1] || "üçer")} artıyor`, `${buyuk(ARSER[k])} azalıyor`, "Birer artıyor"], ""); }]
  ]);

  const tahmin = tiplerden([
    [3, () => { const e = pick(EM), n = r(2, 8) * 10 + r(-2, 2); const t = Math.round(n / 10) * 10; return secim("Saymadan tahmin et: yaklaşık kaç tane var?", t, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].filter((x) => Math.abs(x - t) >= 30), `Tam olarak ${n} tane var.`, { gorsel: kutu(e.repeat(n), 22) }); }],
    [2, () => { const t = pick([["Sınıfındaki öğrenci sayısı", "25", ["2", "500"]], ["Bir eldeki parmak sayısı", "5", ["50", "1"]], ["Bir kutudaki boya kalemi", "12", ["1", "300"]], ["Bir ağaçtaki yaprak sayısı", "Çok fazla", ["3", "10"]]]); return secim(`${t[0]} için en uygun tahmin hangisi?`, t[1], t[2], "Tahmin yaparken günlük hayattaki deneyimlerimizi kullanırız."); }]
  ]);

  // ================= 3. TEMA: İşlemlerden Cebirsel Düşünmeye =================
  const toplama = tiplerden([
    [4, () => { const a = r(10, 80), b = r(2, 99 - a); return sayi(`${a} + ${b} = ?`, a + b, (a % 10 + b % 10 >= 10) ? "Birler toplamı 10'u geçince 1 onluk elde olarak onlara eklenir." : "Önce birleri, sonra onları topla."); }],
    [2, () => { const a = r(1, 8) * 10, b = r(1, 9 - a / 10) * 10; return secim(`Zihinden topla: ${a} + ${b} = ?`, a + b, [a + b + 10, a + b - 10], `${a / 10} onluk + ${b / 10} onluk = ${(a + b) / 10} onluk`); }],
    [3, () => { const k = pick([["Bahçede", "lale", "papatya", "çiçek"], ["Kütüphanede", "masal kitabı", "hikâye kitabı", "kitap"], ["Çiftlikte", "tavuk", "ördek", "hayvan"], ["Sınıfta", "kız öğrenci", "erkek öğrenci", "öğrenci"]]); const a = r(12, 45), b = r(11, 99 - a - 5); return sayi(`${k[0]} ${a} ${k[1]} ve ${b} ${k[2]} var. Toplam kaç ${k[3]} vardır?`, a + b, `${a} + ${b} = ${a + b}`); }],
    [2, () => { const a = r(21, 78), b = r(11, 99 - a); const t = Math.round(a / 10) * 10 + Math.round(b / 10) * 10; if (t > 100) return null; return secim(`${a} + ${b} toplamını onluğa yuvarlayarak tahmin et.`, t, [t + 20, t - 20 > 0 ? t - 20 : t + 30], `${Math.round(a / 10) * 10} + ${Math.round(b / 10) * 10} = ${t}`); }],
    [2, () => { const t = r(3, 10) * 10, a = r(5, t - 5); return sayi(`? + ${a} = ${t}`, t - a, `${t} − ${a} = ${t - a}`); }]
  ]);

  const cikarma = tiplerden([
    [4, () => { const a = r(25, 99), b = r(3, a - 5); return sayi(`${a} − ${b} = ?`, a - b, (a % 10 < b % 10) ? "Birlerde çıkarma olmuyorsa 1 onluk bozulur." : "Önce birleri, sonra onları çıkar."); }],
    [2, () => { const a = r(4, 10) * 10, b = r(1, a / 10 - 1) * 10; return secim(`Zihinden çıkar: ${a} − ${b} = ?`, a - b, [a - b + 10, a + b > 100 ? a - b + 20 : a + b], ""); }],
    [3, () => { const k = pick([["Bir ağaçta", "elma", "toplandı"], ["Bir fırında", "simit", "satıldı"], ["Bir kumbarada", "bozuk para", "harcandı"], ["Bir otoparkta", "araba", "çıktı"]]); const a = r(30, 99), b = r(8, a - 6); return sayi(`${k[0]} ${a} ${k[1]} vardı. ${b} tanesi ${k[2]}. Kaç tane kaldı?`, a - b, `${a} − ${b} = ${a - b}`); }],
    [2, () => { const a = r(40, 99), b = r(10, a - 10); return secim(`${a} ile ${b} arasındaki fark kaçtır?`, a - b, [a - b + 10, a - b - 1, Math.min(100, a - b + 1)].filter((x) => x > 0 && x !== a - b), `${a} − ${b} = ${a - b}`); }]
  ]);

  const iliski = tiplerden([
    [3, () => { const a = r(12, 60), b = r(5, 99 - a); return secim(`${a} + ${b} = ${a + b} ise ${a + b} − ${b} kaçtır?`, a, [b, a + b + b > 100 ? a + 1 : a + b + b], "Toplama ve çıkarma birbirinin tersidir."); }],
    [3, () => { const a = r(30, 99), b = r(5, a - 5); return secim(`${a} − ${b} = ${a - b} işleminin sağlaması hangisidir?`, `${a - b} + ${b} = ${a}`, [`${a} + ${b} = ${a + b}`, `${a - b} + ${a} = ${2 * a - b}`], "Fark + çıkan = eksilen"); }],
    [2, () => { const a = r(10, 50), b = r(5, 40); return dy(`${a} + ${b} ile ${b} + ${a} toplamları eşittir.`, true, "Toplananların yeri değişse de toplam değişmez."); }],
    [2, () => { const a = r(10, 49), b = r(10, 49), c = a + b; return sayi(`${a} + ? = ${c}`, b, `${c} − ${a} = ${b}`); }]
  ]);

  const carpma = tiplerden([
    [4, () => { const a = r(1, 5), b = r(1, 10); return sayi(`${a} × ${b} = ?`, a * b, `${a} tane ${b}: ${Array(a).fill(b).join(" + ")} = ${a * b}`); }],
    [3, () => { const a = r(2, 4), b = r(2, 5), e = pick(EM); return sayi(`${a} sırada ${ARSER[b]} ${e} var. Toplam kaç tane?`, a * b, `${a} × ${b} = ${a * b}`, { gorsel: kutu(Array(a).fill(e.repeat(b)).join("<br>"), 34) }); }],
    [3, () => { const a = r(2, 5), n = r(2, 4); return secim(`${Array(n).fill(a).join(" + ")} toplamını çarpma ile nasıl yazarız?`, `${n} × ${a}`, [`${n} + ${a}`, `${a} × ${a}`, `${n + 1} × ${a}`].filter((x) => x !== `${n} × ${a}`), `${a} sayısı ${n} kez toplanıyor.`); }],
    [2, () => { const a = r(2, 9); return pick([() => secim(`${a} × 1 = ?`, a, [a + 1, 1], "Bir sayıyı 1 ile çarparsak sayının kendisi olur."), () => secim(`${a} × 0 = ?`, 0, [a, 1], "Bir sayıyı 0 ile çarparsak sonuç 0 olur.")])(); }],
    [2, () => { const k = pick([["tabakta", "kurabiye"], ["vazoda", "çiçek"], ["kutuda", "kalem"], ["sepette", "elma"]]); const n = r(2, 5), t = r(2, 5); return sayi(`Her ${k[0]} ${t} ${k[1]} var. ${n} ${k[0]} toplam kaç ${k[1]} vardır?`, n * t, `${n} × ${t} = ${n * t}`); }]
  ]);

  const bolme = tiplerden([
    [4, () => { const b = r(2, 5), c = r(1, 5); const k = pick([["şekeri", "çocuğa"], ["elmayı", "tabağa"], ["kalemi", "kutuya"], ["bilyeyi", "arkadaşa"]]); return sayi(`${b * c} ${k[0]} ${b} ${k[1]} eşit paylaştırırsak her birine kaç tane düşer?`, c, `${b * c} ÷ ${b} = ${c}`); }],
    [3, () => { const b = r(2, 4), c = r(2, 5), e = pick(EM); return secim(`${b * c} tane ${e} ${b} gruba eşit ayrılırsa her grupta kaç tane olur?`, c, [c + 1, b === c ? c + 2 : b, c * 2].filter((x) => x !== c), `${b * c} ÷ ${b} = ${c}`, { gorsel: kutu(e.repeat(b * c), 30) }); }],
    [2, () => { const b = r(2, 5), c = r(2, 5); return sayi(`${b * c} ÷ ${b} = ?`, c, `${b} × ${c} = ${b * c}`); }],
    [2, () => { const g = r(2, 5), t = g * r(2, 4); return sayi(`${t} öğrenci ${g} kişilik gruplara ayrıldı. Kaç grup oldu?`, t / g, `${t} ÷ ${g} = ${t / g}`); }]
  ]);

  const esitlik = tiplerden([
    [3, () => { const a = r(2, 9), b = r(2, 9), c = r(1, a + b - 1); return sayi(`${a} + ${b} = ${c} + ?`, a + b - c, `${a} + ${b} = ${a + b}, ${a + b} − ${c} = ${a + b - c}`); }],
    [3, () => { const a = r(2, 9), b = r(2, 9), d = Math.random() < 0.5; const c = a + b + (d ? 0 : pick([1, -1])); return dy(`${a} + ${b} = ${c}`, d, `${a} + ${b} = ${a + b}`); }],
    [2, () => { const a = r(1, 9), b = r(1, 9), x = r(1, 9), y = a + b - x; if (y < 1) return null; const d = Math.random() < 0.5; return dy(`${a} + ${b} = ${x} + ${d ? y : y + 1}`, d, `İki taraf da ${a + b} olmalı.`); }],
    [2, () => { const a = r(2, 5), b = r(2, 5); return secim(`Hangisi ${a} × ${b} işlemine eşittir?`, `${b} × ${a}`, [`${a} + ${b}`, `${a} × ${a}`].filter((x) => x !== `${b} × ${a}`), "Çarpanların yeri değişse de sonuç değişmez."); }]
  ]);

  // ================= 4. TEMA: Sayılar ve Nicelikler (2) =================
  const kesir = tiplerden([
    [3, () => { const t = pick([["yarımını", 2, 1], ["çeyreğini", 4, 1], ["bütününü", 2, 2], ["bütününü", 4, 4], ["iki çeyreğini", 4, 2]]); return { tip: "kesir", soru: `Pizzanın ${t[0]} boya.`, parca: t[1], boya: t[2], cozum: `${t[1]} eş parçanın ${t[2]} tanesi` }; }],
    [3, () => { const t = pick([[2, 1, "Yarım"], [4, 1, "Çeyrek"], [1, 1, "Bütün"], [4, 2, "Yarım"]]); return secim("Boyalı kısım ne kadardır?", t[2], ["Yarım", "Çeyrek", "Bütün"].filter((x) => x !== t[2]), t[2] === "Yarım" && t[0] === 4 ? "2 çeyrek = 1 yarım" : "", { gorsel: OYUN.kesirSVG(t[0], t[1], 160) }); }],
    [3, () => pick([() => secim("Bir bütün elmada kaç yarım vardır?", "2", ["4", "1"], "2 yarım = 1 bütün"), () => secim("Bir bütün pastada kaç çeyrek vardır?", "4", ["2", "3"], "4 çeyrek = 1 bütün"), () => secim("2 çeyrek elma neye eşittir?", "Yarım elma", ["Bütün elma", "Çeyrek elma"], "2 çeyrek = 1 yarım"), () => secim("Bir bütünü 2 eş parçaya ayırırsak her parçaya ne denir?", "Yarım", ["Çeyrek", "Bütün"], ""), () => secim("Bir bütünü 4 eş parçaya ayırırsak her parçaya ne denir?", "Çeyrek", ["Yarım", "Bütün"], ""), () => secim("Yarım ekmek mi büyüktür, çeyrek ekmek mi?", "Yarım ekmek", ["Çeyrek ekmek", "İkisi eşit"], "Yarım, çeyreğin iki katıdır."), () => secim("4 çeyrek portakal kaç bütün portakal eder?", "1", ["2", "4"], ""), () => secim("2 yarım karpuz kaç bütün karpuz eder?", "1", ["2", "4"], ""), () => { const n = O.r(2, 6); return secim(`${n} bütün elmada kaç yarım vardır?`, String(n * 2), [String(n), String(n * 4)], `Her bütünde 2 yarım: ${n} × 2 = ${n * 2}`); }])()],
    [2, () => { const esit = Math.random() < 0.5; return dy(esit ? "Bir portakal ortadan iki eş parçaya bölünürse her parça yarım portakaldır." : "Bir ekmek büyük ve küçük iki parçaya bölünürse her parça yarım ekmektir.", esit, esit ? "" : "Yarım için parçalar eş (aynı büyüklükte) olmalıdır."); }]
  ]);

  const para = tiplerden([
    [4, () => { const u = pick([["🍎", "Elma"], ["📒", "Defter"], ["✏️", "Kalem"], ["🧃", "Meyve suyu"], ["🎈", "Balon"], ["⚽", "Top"], ["🧸", "Oyuncak ayı"], ["🍞", "Ekmek"]]); const tl = pick([3, 5, 7, 8, 12, 15, 20, 25, 30, 35, 40, 45, 50, 60, 75]); return { tip: "market", soru: `${u[0]} ${u[1]} ${tl} lira. Kasaya tam parayı öde.`, tutar: tl * 100, cozum: `${tl} lira ödenmeli.`, gorsel: `<div style="font-size:80px">${u[0]}</div>` }; }],
    [2, () => pick([() => secim("1 lira kaç kuruştur?", "100", ["10", "50"], "1 lira = 100 kuruş"), () => secim("2 tane 50 kuruş kaç eder?", "1 lira", ["2 lira", "50 kuruş"], "50 + 50 = 100 kuruş"), () => secim("4 tane 25 kuruş kaç eder?", "1 lira", ["4 lira", "75 kuruş"], "25 + 25 + 25 + 25 = 100 kuruş"), () => secim("Hangisi kâğıt paradır?", "10 lira", ["1 lira", "50 kuruş"], "5 lira ve üstü kâğıt paradır.")])()],
    [3, () => { const a = pick([5, 10, 20]), b = pick([1, 5, 10]), na = r(1, 3), nb = r(1, 3); if (a === b) return null; return sayi(`${na} tane ${a} lira ve ${nb} tane ${b} lira kaç lira eder?`, na * a + nb * b, `${na * a} + ${nb * b} = ${na * a + nb * b}`, { birim: "lira" }); }],
    [2, () => { const f = r(11, 45), v = f <= 20 ? pick([20, 50]) : 50; return sayi(`${f} liralık bir oyuncak için ${v} lira verdim. Kaç lira para üstü alırım?`, v - f, `${v} − ${f} = ${v - f}`, { birim: "lira" }); }]
  ]);

  const zaman = tiplerden([
    [3, () => { const h = r(1, 12), m = pick([0, 0, 30, 30, 15, 45]); return { tip: "saat", soru: `Saati ${S(h, m)} olacak şekilde kur.`, saat: h, dakika: m, dogruMetin: S(h, m), cozum: "Kısa ok akrep saati, uzun ok yelkovan dakikayı gösterir." }; }],
    [3, () => { const h = r(1, 12), m = pick([0, 30, 15, 45]); const ad = m === 0 ? `Saat ${h}` : m === 30 ? `${h} buçuk` : m === 15 ? `${h}'i çeyrek geçiyor` : `${h % 12 + 1}'e çeyrek var`; return secim("Saat kaçı gösteriyor?", S(h, m), [S(h % 12 + 1, m), S(h, (m + 30) % 60)].filter((x) => x !== S(h, m)), ad.replace(/(\d+)'i/, (x, n) => n + ({ 1: "'i", 2: "'yi", 3: "'ü", 4: "'ü", 5: "'i", 6: "'yı", 7: "'yi", 8: "'i", 9: "'u", 10: "'u", 11: "'i", 12: "'yi" })[n]).replace(/(\d+)'e/, (x, n) => n + ({ 1: "'e", 2: "'ye", 3: "'e", 4: "'e", 5: "'e", 6: "'ya", 7: "'ye", 8: "'e", 9: "'a", 10: "'a", 11: "'e", 12: "'ye" })[n]), { gorsel: OYUN.saatSVG(h, m, 190) }); }],
    [3, () => { const t = pick([["1 saat", "60 dakika", ["30 dakika", "100 dakika"]], ["Yarım saat", "30 dakika", ["15 dakika", "60 dakika"]], ["Çeyrek saat", "15 dakika", ["30 dakika", "45 dakika"]], ["1 gün", "24 saat", ["12 saat", "60 saat"]], ["1 hafta", "7 gün", ["5 gün", "10 gün"]], ["1 yıl", "12 ay", ["7 ay", "24 ay"]], ["1 ay", "30 gün kadar", ["7 gün", "12 gün"]]]); return secim(`${t[0]} ne kadardır?`, t[1], t[2], `${t[0]} = ${t[1]}`); }],
    [2, () => { const G = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]; const i = r(0, 6), sonra = Math.random() < 0.5; const d = G[(i + (sonra ? 1 : 6)) % 7]; return secim(`${G[i]} gününden ${sonra ? "sonra" : "önce"} hangi gün gelir?`, d, G.filter((x) => x !== d && x !== G[i]), `Günler: ${G.join(", ")}`); }],
    [2, () => { const A = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]; const i = r(0, 11); const d = A[(i + 1) % 12]; return secim(`${A[i]} ayından sonra hangi ay gelir?`, d, sec(A.filter((x) => x !== d && x !== A[i]), 2), "Bir yılda 12 ay vardır."); }],
    [2, () => { const t = pick([["Dişlerini fırçalamak", "2 dakika", ["2 saat", "2 gün"]], ["Bir ders", "40 dakika", ["40 saniye", "40 gün"]], ["Gece uykusu", "10 saat", ["10 dakika", "10 hafta"]], ["Yaz tatili", "3 ay", ["3 dakika", "3 saat"]]]); return secim(`${t[0]} yaklaşık ne kadar sürer?`, t[1], t[2], ""); }]
  ]);

  const uzunlukKutle = tiplerden([
    [3, () => grupla("Hangi birimle ölçülür? Kutulara yerleştir.", ["Metre (m)", "Santimetre (cm)"], karistir([...sec(["Okul bahçesinin uzunluğu", "Koridorun uzunluğu", "Bir binanın yüksekliği", "Futbol sahası"], 3).map((x) => [x, 0]), ...sec(["Silginin boyu", "Kalemin boyu", "Parmağının uzunluğu", "Defterin eni"], 3).map((x) => [x, 1])]), "Uzun şeyler metre, kısa şeyler santimetre ile ölçülür.")],
    [3, () => grupla("Hangisi daha ağır? Kutulara yerleştir.", ["Kilogram ile tartılır", "Gram ile tartılır"], karistir([...sec(["Bir çuval un", "Bir karpuz", "Bir öğrenci", "Bir koli elma"], 3).map((x) => [x, 0]), ...sec(["Bir silgi", "Bir çikolata", "Bir yaprak", "Bir düğme"], 3).map((x) => [x, 1])]), "Ağır şeyler kilogram, hafif şeyler gram ile tartılır.")],
    [3, () => { const n = r(3, 14); return sayi("Kalem kaç santimetre? (Her çizgi 1 cm)", n, `0'dan başlayıp ${n}'e kadar sayılır.`.replace(/(\d+)'e/, (x, k) => k + ({ 3: "'e", 4: "'e", 5: "'e", 6: "'ya", 7: "'ye", 8: "'e", 9: "'a", 10: "'a", 11: "'e", 12: "'ye", 13: "'e", 14: "'e" })[k]), { birim: "cm", gorsel: `<svg viewBox="0 0 ${16 * 26 + 20} 90" width="${Math.min(460, 16 * 26 + 20)}" height="90"><rect x="10" y="10" width="${n * 26}" height="22" rx="8" fill="#ffd23f" stroke="#2b2140" stroke-width="3"/><polygon points="${10 + n * 26},10 ${24 + n * 26},21 ${10 + n * 26},32" fill="#f4a261" stroke="#2b2140" stroke-width="3"/><rect x="10" y="44" width="${15 * 26}" height="40" fill="#fff" stroke="#2b2140" stroke-width="2"/>${Array.from({ length: 16 }, (_, i) => `<line x1="${10 + i * 26}" y1="44" x2="${10 + i * 26}" y2="58" stroke="#2b2140" stroke-width="2"/><text x="${10 + i * 26}" y="78" font-size="13" text-anchor="middle">${i}</text>`).join("")}</svg>` }); }],
    [2, () => pick([() => secim("1 metre kaç santimetredir?", "100", ["10", "50"], ""), () => secim("Boyumuzu ölçmek için hangisi kullanılır?", "Mezura (şerit metre)", ["Terazi", "Saat"], ""), () => secim("Kütlemizi ölçmek için hangisi kullanılır?", "Baskül (tartı)", ["Cetvel", "Termometre"], ""), () => secim("Kalemin boyunu ölçmek için hangisi en uygundur?", "Cetvel", ["Terazi", "Kova"], "")])()],
    [2, () => { const t = pick([["Bir kalemin boyu", "15 cm", ["15 m", "150 m"]], ["Sınıf kapısının yüksekliği", "2 m", ["2 cm", "20 m"]], ["Bir karpuz", "5 kg", ["5 g", "500 kg"]], ["Bir öğretmenin boyu", "170 cm", ["17 cm", "1700 m"]]]); return secim(`${t[0]} yaklaşık ne kadardır?`, t[1], t[2], "Tahmin yaparken bildiğimiz uzunluk ve ağırlıklarla karşılaştırırız."); }]
  ]);

  // ================= 5. TEMA: Nesnelerin Geometrisi (2) =================
  const yon = tiplerden([
    [3, () => { const e = sec(EM, 4); const sol = Math.random() < 0.5; return secim(`${e[1]} nesnesinin hemen ${sol ? "solunda" : "sağında"} hangisi var?`, sol ? e[0] : e[2], [e[3], sol ? e[2] : e[0]], "Sağ ve sol, yüzümüzün baktığı yöne göre belirlenir.", { gorsel: kutu(e.slice(0, 3).join("  "), 64), em: true }); }],
    [3, () => pick([
      () => secim("Kuş ağacın neresinde?", "Üstünde", ["Altında", "İçinde"], "", { gorsel: kutu("🐦<br>🌳", 70) }),
      () => secim("Kedi masanın neresinde?", "Altında", ["Üstünde", "Yanında"], "", { gorsel: kutu("🍽️<br>🐈", 70) }),
      () => secim("Top kutunun neresinde?", "Yanında", ["İçinde", "Üstünde"], "", { gorsel: kutu("📦⚽", 70) }),
      () => secim("Ayakkabılar yatağın neresinde?", "Altında", ["Üstünde", "Yanında"], "", { gorsel: kutu("🛏️<br>👟", 70) })
    ])()],
    [3, () => { const R = 4, C = 4; const hr = r(0, R - 1), hc = r(0, C - 1); const yonler = [["yukarı", -1, 0], ["aşağı", 1, 0], ["sağa", 0, 1], ["sola", 0, -1]].filter(([, dr, dc]) => hr + dr >= 0 && hr + dr < R && hc + dc >= 0 && hc + dc < C); const [ad, dr, dc] = pick(yonler); const hed = ["🍎", "🍌", "🍓", "🍇"]; const g = []; for (let i = 0; i < R; i++) { const s = []; for (let j = 0; j < C; j++) s.push(i === hr && j === hc ? "🐰" : "⬜"); g.push(s); } const dogru = hed[0]; g[hr + dr][hc + dc] = dogru; const bos = []; for (let i = 0; i < R; i++) for (let j = 0; j < C; j++) if (g[i][j] === "⬜" && Math.abs(i - hr) + Math.abs(j - hc) <= 2) bos.push([i, j]); const ys = sec(bos, 2); if (ys.length < 2) return null; ys.forEach(([i, j], k) => g[i][j] = hed[k + 1]); return secim(`Tavşan 1 kare ${ad} giderse hangi meyveye ulaşır?`, dogru, [hed[1], hed[2]], "Kareleri tek tek sayarak ilerle.", { em: true, gorsel: kutu(g.map((s) => s.join("")).join("<br>"), 46) }); }],
    [1, () => dy("Bir şeyin yerini anlatırken sağ, sol, ön, arka, üst, alt sözcüklerini kullanırız.", true)]
  ]);

  const SIM_HARF = { evet: ["A", "H", "M", "O", "T", "U", "V", "W", "X", "Y"], hayir: ["F", "G", "J", "L", "N", "P", "R", "S", "Z"] };
  const simetri = tiplerden([
    [4, () => { const satir = r(3, 4), sutun = 6; const sol = []; for (let rr = 0; rr < satir; rr++) for (let c = 0; c < 3; c++) if (Math.random() < 0.4) sol.push(rr + "," + c); if (sol.length < 2 || sol.length > 6) return null; return { tip: "simetri", soru: "Şeklin simetriğini sağ tarafa çiz.", satir, sutun, sol, cozum: "Simetride iki taraf aynada bakıyormuş gibi aynıdır." }; }],
    [2, () => { const t = pick([["🦋 Kelebek", true], ["❤️ Kalp", true], ["☂️ Şemsiye", true], ["🍁 Yaprak", true], ["🍌 Muz", false], ["🐌 Salyangoz", false], ["☁️ Bulut", false]]); return dy(`${t[0]} ortadan katlanınca iki yarısı üst üste gelir.`, t[1], t[1] ? "Bu simetrik bir şekildir." : "İki yarısı birbirinin aynısı değildir."); }],
    [2, () => { const d = pick(SIM_HARF.evet); return secim("Hangi harf ortadan katlanınca iki yarısı üst üste gelir?", d, sec(SIM_HARF.hayir, 2), `${d} harfi simetriktir.`, { balonYok: true }); }]
  ]);

  // ================= 6. TEMA: Veriye Dayalı Araştırma =================
  const VERI = [["Sevilen meyveler", ["🍎 Elma", "🍌 Muz", "🍓 Çilek", "🍊 Portakal"]], ["Sınıfın evcil hayvanları", ["🐱 Kedi", "🐶 Köpek", "🐟 Balık", "🐦 Kuş"]], ["Okula geliş şekli", ["🚶 Yürüyerek", "🚌 Servisle", "🚗 Arabayla", "🚲 Bisikletle"]], ["Sevilen oyunlar", ["⚽ Top", "🪁 Uçurtma", "🧩 Yapboz", "🎨 Boyama"]]];
  const cetele = (n) => "<s>||||</s> ".repeat(Math.floor(n / 5)) + "|".repeat(n % 5);
  const veri = tiplerden([
    [3, () => { const [b, et] = pick(VERI); const v = et.slice(0, 3).map((e) => [e, r(1, 6)]); const mx = Math.max(...v.map((x) => x[1])); if (v.filter((x) => x[1] === mx).length > 1) return null; const d = v.find((x) => x[1] === mx)[0].replace(/^\S+ /, ""); return secim("Şekil grafiğine göre en çok seçilen hangisidir?", d, v.map((x) => x[0].replace(/^\S+ /, "")).filter((x) => x !== d), "En çok şekil olan satır en çok seçilendir.", { gorsel: OYUN.resimGrafikHTML(v, "🙂", 1, b + " (🙂 = 1 öğrenci)") }); }],
    [3, () => { const [b, et] = pick(VERI); const v = et.slice(0, 3).map((e) => [e, r(1, 6)]); const s = pick(v); return sayi(`Grafiğe göre "${s[0].replace(/^\S+ /, "")}" kaç öğrenci tarafından seçilmiş?`, s[1], "Satırdaki şekilleri say.", { gorsel: OYUN.resimGrafikHTML(v, "🙂", 1, b) }); }],
    [2, () => { const [b, et] = pick(VERI); const v = et.slice(0, 3).map((e) => [e, r(1, 6)]); return sayi("Grafikte toplam kaç öğrenci var?", v.reduce((t, x) => t + x[1], 0), v.map((x) => x[1]).join(" + "), { gorsel: OYUN.resimGrafikHTML(v, "🙂", 1, b) }); }],
    [2, () => { const n = r(3, 14); return secim("Çetele tablosundaki çizgiler hangi sayıyı gösterir?", n, [n + 1, n - 1, n + 5].filter((x) => x > 0), "Her üstü çizili grup 5 eder.", { gorsel: `<div style="font-size:38px;font-weight:900;letter-spacing:2px">${cetele(n)}</div>` }); }],
    [2, () => { const [b, et] = pick(VERI); const v = et.slice(0, 3).map((e) => [e.replace(/^\S+ /, ""), r(1, 9)]); return sayi(`Sıklık tablosuna göre "${v[0][0]}" ile "${v[1][0]}" toplam kaç kişi?`, v[0][1] + v[1][1], `${v[0][1]} + ${v[1][1]}`, { gorsel: `<table style="font-size:20px;border-collapse:collapse;background:#fff">${v.map((x) => `<tr><td style="border:2px solid #e6dcc5;padding:4px 14px">${x[0]}</td><td style="border:2px solid #e6dcc5;padding:4px 14px;font-weight:900">${x[1]}</td></tr>`).join("")}</table>` }); }]
  ]);

  const K = (id, ad, ikon, uret, bilgi) => ({ id, ad, ikon, uret, bilgi });
  DERS.matematik = {
    ad: "Matematik", ikon: "🔢", renk: "#ff8a00",
    temalar: [
      { id: "mt1", ad: "Nesnelerin Geometrisi (1)", konular: [
        K("m1", "Geometrik Cisimler", "🎲", cisimler, [["⚽", "Küre: her yeri yuvarlaktır. Top küreye benzer."], ["🎲", "Küp: 6 kare yüzü vardır. Zar küpe benzer."], ["🥫", "Silindir: altı ve üstü dairedir. Konserve kutusu silindire benzer."], ["🍦", "Koni: tabanı daire, ucu sivridir. Dondurma külahı koniye benzer."], ["📦", "Koli ve tuğla kare prizmaya benzer."]]),
        K("m2", "Geometrik Şekiller", "🔺", sekiller, [["🔺", "Üçgenin 3 kenarı ve 3 köşesi vardır."], ["🟥", "Karenin 4 kenarı eşittir, 4 köşesi vardır."], ["▭", "Dikdörtgenin 4 kenarı vardır; karşılıklı kenarları eşittir."], ["⚪", "Dairenin köşesi yoktur."]]),
        K("m3", "Sıvı Miktarını Tahmin Etme", "🥛", sivi, [["🥛", "Kapların alabileceği sıvı miktarı farklıdır."], ["🍲", "Tencere bardaktan daha çok su alır."], ["🔁", "Küçük bir kapla doldurarak büyük kabın kaç kap su aldığını bulabiliriz."]])
      ] },
      { id: "mt2", ad: "Sayılar ve Nicelikler (1)", konular: [
        K("m4", "100'e Kadar Sayılar", "💯", sayilar, [["💯", "100'e kadar olan sayıları okuyup yazıyoruz."], ["🔟", "10 birlik 1 onluk eder. 10 onluk 100 eder."], ["🗣️", "47: kırk yedi diye okunur."]]),
        K("m5", "Sayıları Çözümleme", "🧩", cozumleme, [["🧩", "İki basamaklı sayıların onlar ve birler basamağı vardır."], ["🏠", "47 sayısında 4 onlar, 7 birler basamağındadır."], ["⚖️", "47 = 40 + 7. 4'ün basamak değeri 40, 7'nin basamak değeri 7'dir."]]),
        K("m6", "Sayıları Sıralama", "📶", siralama, [["🔍", "Sayıları karşılaştırırken önce onlar basamağına bakarız."], ["🐊", "Büyük işareti (>) ağzını büyük sayıya açar: 52 > 25"], ["1️⃣", "Sıra bildiren sayılar: birinci, ikinci, üçüncü…"]]),
        K("m7", "Ritmik Sayma", "🥁", ritmik, [["🥁", "Ritmik saymada her seferinde aynı sayıyı ekleriz."], ["2️⃣", "İkişer: 2, 4, 6, 8, 10…"], ["5️⃣", "Beşer: 5, 10, 15, 20…"], ["🔟", "Onar: 10, 20, 30… 100"], ["↩️", "Geriye sayarken çıkarırız: 50, 45, 40…"]]),
        K("m8", "Sayı ve Şekil Örüntüleri", "🔁", oruntu, [["🔁", "Belli bir kurala göre tekrar eden dizilere örüntü denir."], ["🍎", "🍎🍌🍎🍌… Sıradaki: 🍎"], ["📈", "3, 6, 9, 12… Kural: 3'er artıyor."]]),
        K("m9", "Nesne Sayısını Tahmin Etme", "🤔", tahmin, [["🤔", "Tahmin, saymadan yaklaşık sonucu söylemektir."], ["👀", "Nesneleri gruplara ayırıp bir grubu sayarak tahmin edebiliriz."], ["✅", "Tahminden sonra sayarak kontrol ederiz. Yakın tahmin iyi tahmindir."]])
      ] },
      { id: "mt3", ad: "İşlemlerden Cebirsel Düşünmeye", konular: [
        K("m10", "Toplama", "➕", toplama, [["➕", "Toplamada önce birleri, sonra onları toplarız."], ["🔟", "Birler toplamı 10 ya da fazlaysa 1 onluk elde olarak onlara geçer."], ["🧠", "Zihinden: 30 + 40 = 70 (3 onluk + 4 onluk = 7 onluk)"]]),
        K("m11", "Çıkarma", "➖", cikarma, [["➖", "Çıkarmada önce birleri, sonra onları çıkarırız."], ["🔓", "Birlerde çıkarma olmuyorsa 1 onluk bozarız."], ["🧠", "Zihinden: 80 − 30 = 50"]]),
        K("m12", "Toplama ve Çıkarma İlişkisi", "🔄", iliski, [["🔄", "Toplama ve çıkarma birbirinin tersidir."], ["✅", "Sağlama: 45 − 20 = 25 ise 25 + 20 = 45"], ["↔️", "Toplananların yeri değişse de toplam değişmez."]]),
        K("m13", "Çarpma", "✖️", carpma, [["✖️", "Çarpma, aynı sayıyı tekrar tekrar toplamaktır."], ["🍎", "3 tane 4: 4 + 4 + 4 = 3 × 4 = 12"], ["1️⃣", "Bir sayıyı 1 ile çarparsak kendisi, 0 ile çarparsak 0 olur."]]),
        K("m14", "Bölme", "➗", bolme, [["➗", "Bölme, bir çokluğu eşit gruplara ayırmaktır."], ["🍬", "6 şekeri 2 çocuğa eşit paylaştırırsak her birine 3 şeker düşer: 6 ÷ 2 = 3"], ["🔄", "Çarpma ve bölme birbirinin tersidir: 2 × 3 = 6 ise 6 ÷ 2 = 3"]]),
        K("m15", "Dört İşlemde Eşitlik", "⚖️", esitlik, [["⚖️", "Eşittir işaretinin (=) iki tarafı aynı değerdedir."], ["⚖️", "3 + 5 = 6 + 2, çünkü iki taraf da 8 eder."], ["🔍", "Eşitliği bozmamak için iki tarafın sonucunu karşılaştırırız."]])
      ] },
      { id: "mt4", ad: "Sayılar ve Nicelikler (2)", konular: [
        K("m16", "Bütün, Yarım, Çeyrek", "🍕", kesir, [["🍕", "Bir bütünü eş parçalara ayırabiliriz."], ["🌗", "Bütünü 2 eş parçaya ayırırsak her parça yarımdır."], ["🍰", "Bütünü 4 eş parçaya ayırırsak her parça çeyrektir."], ["⚖️", "2 yarım = 1 bütün, 4 çeyrek = 1 bütün, 2 çeyrek = 1 yarım"]]),
        K("m17", "Paralarımız", "💰", para, [["💰", "Paramızın birimi Türk lirasıdır."], ["💰", "1 lira = 100 kuruş"], ["💵", "Kâğıt paralar: 5, 10, 20, 50, 100, 200 lira"]]),
        K("m18", "Zaman Ölçme", "⏰", zaman, [["⏰", "Kısa ok akreptir, saati gösterir. Uzun ok yelkovandır, dakikayı gösterir."], ["🕧", "Yelkovan 6'daysa saat buçuktur (30 dakika)."], ["📅", "1 hafta = 7 gün, 1 yıl = 12 ay, 1 gün = 24 saat"]]),
        K("m19", "Uzunluk ve Kütle", "📏", uzunlukKutle, [["📏", "Uzunlukları metre (m) ve santimetre (cm) ile ölçeriz."], ["🔟", "1 metre = 100 santimetre"], ["⚖️", "Kütleyi kilogram (kg) ve gram (g) ile ölçeriz."]])
      ] },
      { id: "mt5", ad: "Nesnelerin Geometrisi (2)", konular: [
        K("m20", "Yer ve Yön Bulma", "🧭", yon, [["🧭", "Yer anlatırken sağ, sol, ön, arka, üst, alt sözcüklerini kullanırız."], ["✋", "Sağ ve sol, yüzümüzün baktığı yöne göre belirlenir."], ["🗺️", "Kareli bir planda adım sayarak yol tarif edebiliriz: 2 kare sağa, 1 kare yukarı."]]),
        K("m21", "Simetri", "🦋", simetri, [["🦋", "Bir şekli ortadan katladığımızda iki yarısı üst üste geliyorsa şekil simetriktir."], ["🦋", "Simetrinin bir yarısı, diğer yarısının aynadaki görüntüsü gibidir."], ["📏", "Şekli iki eş parçaya ayıran çizgiye simetri doğrusu denir."]])
      ] },
      { id: "mt6", ad: "Veriye Dayalı Araştırma", konular: [
        K("m22", "Veri Toplama ve Grafik", "📊", veri, [["❓", "Merak ettiğimiz bir konuda soru sorarak veri toplarız."], ["✏️", "Çetele tablosunda her 5 çizgi bir grup yapılır."], ["📋", "Sıklık tablosu her seçeneğin kaç kez seçildiğini gösterir."], ["🙂", "Şekil grafiğinde her şekil bir kişiyi gösterir."]])
      ] }
    ]
  };
})();
