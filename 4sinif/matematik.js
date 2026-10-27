// 4. Sınıf Matematik — 2018 öğretim programı üniteleri (2026-2027'de 4. sınıfta bu program sürüyor)
(function () {
  const { r, pick, karistir, sec, secim, sayi, sirala, grupla, dy, eslestir, tiplerden, bankadan, buyuk } = O;
  const BIR = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"], ON = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
  const uc = (n) => { const y = Math.floor(n / 100), o = Math.floor(n / 10) % 10, b = n % 10; return [y ? (y === 1 ? "yüz" : BIR[y] + " yüz") : "", ON[o], BIR[b]].filter(Boolean).join(" "); };
  const oku = (n) => { if (n === 0) return "sıfır"; const b = Math.floor(n / 1000), k = n % 1000; return [b ? (b === 1 ? "bin" : uc(b) + " bin") : "", uc(k)].filter(Boolean).join(" "); };
  const N = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const BAS = ["birler", "onlar", "yüzler", "binler", "on binler", "yüz binler"];
  const S = (h, m) => h + ":" + String(m).padStart(2, "0");

  // ---------- Doğal Sayılar ----------
  const dogal = tiplerden([
    [3, () => { const n = r(1000, 999999); return secim(`"${buyuk(oku(n))}" sayısı hangisidir?`, N(n), [N(n + pick([1000, -1000, 10000])), N(Math.floor(n / 10) * 10 + ((n % 10) + 1) % 10)].filter((x) => x !== N(n)), `${N(n)} = ${oku(n)}`, { balonYok: true }); }],
    [3, () => { const n = r(10000, 999999), s = String(n), i = r(0, s.length - 1); const rk = s[i]; if (rk === "0") return null; const bas = s.length - 1 - i; const d = Number(rk) * 10 ** bas; return secim(`${N(n)} sayısında ${rk} rakamının basamak değeri kaçtır?`, N(d), [N(d * 10), N(Number(rk)), N(d / 10)].filter((x) => x !== N(d) && x !== "0,1"), `${rk}, ${BAS[bas]} basamağında. Değeri ${N(d)}.`); }],
    [2, () => { const n = r(100000, 999999), s = String(n), i = r(0, 5); return secim(`${N(n)} sayısının ${BAS[5 - i]} basamağındaki rakam hangisidir?`, s[i], [...new Set(s.split(""))].filter((x) => x !== s[i]), ""); }],
    [3, () => { const p = [r(1, 9), r(0, 9), r(0, 9), r(0, 9), r(0, 9)]; const n = Number(p.join("")); return sayi(`${p[0]} on binlik, ${p[1]} binlik, ${p[2]} yüzlük, ${p[3]} onluk ve ${p[4]} birlik kaç eder?`, n, `${N(n)}`); }],
    [2, () => { const n = r(100000, 999999); return secim(`${N(n)} sayısının bölükleri nasıl ayrılır?`, `${Math.floor(n / 1000)} bin, ${n % 1000} birler bölüğü`, [`${Math.floor(n / 100)} bin, ${n % 100} birler bölüğü`, `${Math.floor(n / 10000)} bin, ${n % 10000} birler bölüğü`], "Sağdan itibaren üçer basamak bir bölüktür: birler bölüğü ve binler bölüğü."); }]
  ]);
  const siralaYuv = tiplerden([
    [3, () => { const a = []; while (a.length < 3) { const x = r(10000, 99999); if (!a.includes(x)) a.push(x); } const b = Math.random() < 0.5; const d = b ? Math.max(...a) : Math.min(...a); return secim(`Hangisi en ${b ? "büyük" : "küçük"} sayıdır?`, N(d), a.filter((x) => x !== d).map(N), "Basamak sayısı aynıysa soldan başlayarak karşılaştır."); }],
    [2, () => { const a = []; while (a.length < 4) { const x = r(1000, 99999); if (!a.includes(x)) a.push(x); } return sirala("Sayıları küçükten büyüğe sırala.", a.sort((x, y) => x - y).map(N), "", "  "); }],
    [3, () => { const n = r(1001, 98999), k = pick([10, 100, 1000]); if (n % k === k / 2) return null; const y = Math.round(n / k) * k; return secim(`${N(n)} sayısı en yakın ${({ 10: "onluğa", 100: "yüzlüğe", 1000: "binliğe" })[k]} yuvarlanırsa hangi sayı olur?`, N(y), [N(y + k), N(y - k > 0 ? y - k : y + 2 * k)], `${({ 10: "Birler", 100: "Onlar", 1000: "Yüzler" })[k]} basamağına bak: 5 ve üstüyse yukarı, değilse aşağı.`); }],
    [2, () => { const a = r(10000, 99999), b = Math.random() < 0.15 ? a : r(10000, 99999); const d = a > b ? ">" : a < b ? "<" : "="; return secim(`${N(a)} ⬜ ${N(b)}`, d, [">", "<", "="].filter((x) => x !== d), ""); }]
  ]);
  const oruntu = tiplerden([
    [4, () => { const k = pick([25, 50, 100, 250, 500, 1000, 15, 12]), art = Math.random() < 0.7, bas = art ? r(1, 200) : r(5 * k, 5000); const d = [0, 1, 2, 3].map((i) => art ? bas + i * k : bas - i * k); return sayi(`Örüntüde sıradaki sayı: ${d.map(N).join(", ")}, ?`, art ? bas + 4 * k : bas - 4 * k, `Kural: ${k} ${art ? "artıyor" : "azalıyor"}.`); }],
    [2, () => { const k = r(3, 9), bas = r(2, 20); const d = [0, 1, 2, 3].map((i) => bas + i * k); return sayi(`Örüntünün 8. terimi kaçtır? ${d.join(", ")}, ...`, bas + 7 * k, `Her adımda ${k} eklenir: ${bas} + 7 × ${k} = ${bas + 7 * k}`); }],
    [2, () => { const k = r(2, 9); return secim(`${k}, ${k * 2}, ${k * 3}, ${k * 4} örüntüsünün kuralı nedir?`, `${k} artıyor`, [`${k * 2} artıyor`, `${k} azalıyor`], "Ardışık iki terim arasındaki farka bak."); }]
  ]);

  // ---------- Toplama, Çıkarma ----------
  const toplama = tiplerden([
    [4, () => { const a = r(1000, 6000), b = r(100, 9999 - a); return sayi(`${N(a)} + ${N(b)} = ?`, a + b, "Birler basamağından başla, eldeyi unutma."); }],
    [2, () => { const a = r(1, 5) * 1000 + r(0, 9) * 100, b = r(1, 3) * 1000 + r(0, 9) * 100; return secim(`Zihinden topla: ${N(a)} + ${N(b)}`, N(a + b), [N(a + b + 100), N(a + b - 1000)], ""); }],
    [2, () => { const a = r(1100, 4900), b = r(1100, 4900); const t = Math.round(a / 1000) * 1000 + Math.round(b / 1000) * 1000; return secim(`${N(a)} + ${N(b)} toplamını en yakın binliğe yuvarlayarak tahmin et.`, N(t), [N(t + 1000), N(t - 1000)], `${N(Math.round(a / 1000) * 1000)} + ${N(Math.round(b / 1000) * 1000)}`); }],
    [2, () => { const t = r(3, 9) * 1000, a = r(200, t - 200); return sayi(`? + ${N(a)} = ${N(t)}`, t - a, `${N(t)} − ${N(a)}`); }]
  ]);
  const cikarma = tiplerden([
    [4, () => { const a = r(2000, 9999), b = r(100, a - 100); return sayi(`${N(a)} − ${N(b)} = ?`, a - b, "Üstteki rakam küçükse soldaki basamaktan onluk boz."); }],
    [2, () => { const a = r(5, 9) * 1000, b = r(1, 4) * 1000 + r(1, 9) * 100; return secim(`Zihinden çıkar: ${N(a)} − ${N(b)}`, N(a - b), [N(a - b + 1000), N(a - b - 100)], ""); }],
    [2, () => { const a = r(3000, 9000), c = r(500, a - 500); return sayi(`${N(a)} − ? = ${N(a - c)}`, c, `${N(a)} − ${N(a - c)} = ${N(c)}`); }]
  ]);
  const probTC = tiplerden([
    [3, () => { const a = r(1200, 4500), b = r(300, 2500), c = r(200, a + b - 100); return sayi(`Bir kütüphanede ${N(a)} kitap vardı. ${N(b)} yeni kitap alındı, ${N(c)} kitap okullara bağışlandı. Kaç kitap kaldı?`, a + b - c, `${N(a)} + ${N(b)} − ${N(c)} = ${N(a + b - c)}`); }],
    [3, () => { const a = r(2000, 5000), fark = r(300, 1500); return sayi(`Bir okulda ${N(a)} öğrenci var. Diğer okulda ${N(fark)} öğrenci daha fazla var. İki okulda toplam kaç öğrenci var?`, a + a + fark, `${N(a)} + ${N(a + fark)} = ${N(2 * a + fark)}`); }],
    [2, () => { const a = r(1000, 4000), b = r(1000, 4000); const t = Math.round(a / 100) * 100 + Math.round(b / 100) * 100; return secim(`${N(a)} ile ${N(b)} toplamının en yakın yüzlüklere yuvarlanmış tahmini hangisidir?`, N(t), [N(t + 200), N(t - 200)], ""); }]
  ]);

  // ---------- Çarpma, Bölme ----------
  const carpma = tiplerden([
    [3, () => { const a = r(100, 999), b = r(2, 9); return sayi(`${a} × ${b} = ?`, a * b, ""); }],
    [3, () => { const a = r(12, 99), b = r(11, 99); return sayi(`${a} × ${b} = ?`, a * b, `${a} × ${b % 10} = ${a * (b % 10)}, ${a} × ${b - b % 10} = ${a * (b - b % 10)}, toplam ${a * b}`); }],
    [2, () => { const a = r(2, 99), k = pick([10, 100, 1000]); return secim(`${a} × ${N(k)} = ?`, N(a * k), [N(a * k * 10), N(a * k / 10)], `Sağa ${String(k).length - 1} sıfır eklenir.`); }],
    [2, () => { const a = r(2, 9), b = r(2, 9), c = r(2, 5); return secim(`${a} × ${b} × ${c} = ?`, a * b * c, [a * b + c, a * b * c + a].filter((x) => x !== a * b * c), "Çarpma işleminde çarpanların sırası sonucu değiştirmez."); }],
    [2, () => { const s = r(12, 48), f = r(15, 95); return sayi(`Tanesi ${f} lira olan kitaptan ${s} tane alındı. Kaç lira ödendi?`, s * f, `${s} × ${f} = ${s * f}`, { birim: "TL" }); }]
  ]);
  const bolme = tiplerden([
    [4, () => { const b = r(2, 9), c = r(100, 999); return sayi(`${N(b * c)} ÷ ${b} = ?`, c, `${b} × ${c} = ${b * c}`); }],
    [2, () => { const b = r(11, 25), c = r(2, 9); return sayi(`${b * c} ÷ ${b} = ?`, c, `${b} × ${c} = ${b * c}`); }],
    [2, () => { const b = r(3, 9), c = r(10, 99), k = r(1, b - 1); return secim(`${b * c + k} ÷ ${b} işleminde kalan kaçtır?`, k, [k + 1 < b ? k + 1 : k - 1 || b - 1, 0].filter((x) => x !== k), `${b} × ${c} = ${b * c}, ${b * c + k} − ${b * c} = ${k}`); }],
    [2, () => { const b = r(4, 9), c = r(20, 120); return sayi(`${b * c} ceviz ${b} torbaya eşit konuldu. Her torbada kaç ceviz var?`, c, `${b * c} ÷ ${b} = ${c}`); }],
    [1, () => { const b = r(2, 9), c = r(11, 99); return secim(`Bölen ${b}, bölüm ${c} ve kalan 0 ise bölünen kaçtır?`, b * c, [b + c, b * c + b], "Bölünen = Bölen × Bölüm + Kalan"); }]
  ]);
  const probDort = tiplerden([
    [3, () => { const k = r(12, 30), f = r(5, 15), v = Math.ceil(k * f / 100) * 100; return sayi(`Bir öğretmen ${k} öğrencisine tanesi ${f} lira olan defter aldı. ${v} lira verdi. Kaç lira para üstü aldı?`, v - k * f, `${k} × ${f} = ${k * f}, ${v} − ${k * f} = ${v - k * f}`, { birim: "TL" }); }],
    [3, () => { const g = r(3, 8), k = r(12, 25), e = r(5, 20); return sayi(`Her birinde ${k} öğrenci olan ${g} sınıf var. Bu öğrencilerden ${e} tanesi geziye gitti. Okulda kaç öğrenci kaldı?`, g * k - e, `${g} × ${k} = ${g * k}, ${g * k} − ${e} = ${g * k - e}`); }],
    [2, () => { const b = pick([2, 3, 4, 5, 6]), t = b * 2 * r(10, 60); return sayi(`${t} lira ${b} kardeşe eşit paylaştırıldı. Her biri parasının yarısını harcadı. Her birinin kaç lirası kaldı?`, t / b / 2, `${t} ÷ ${b} = ${t / b}, yarısı ${t / b / 2}`, { birim: "TL" }); }]
  ]);
  const esitlik = tiplerden([
    [4, () => { const a = r(10, 60), b = r(10, 60), c = r(5, a + b - 5); return sayi(`${a} + ${b} = ${c} + ?`, a + b - c, `${a + b} = ${c} + ${a + b - c}`); }],
    [3, () => { const a = r(2, 9), b = r(2, 9), c = pick([1, 2, 3, 4, 6].filter((x) => (a * b) % x === 0)); return sayi(`${a} × ${b} = ${c} × ?`, a * b / c, `${a * b} = ${c} × ${a * b / c}`); }],
    [2, () => { const a = r(30, 90), b = r(5, 20), c = r(1, 9), d = Math.random() < 0.5; return dy(`${a} − ${b} = ${a - b - c} + ${d ? c : c + 1}`, d, `${a} − ${b} = ${a - b}`); }]
  ]);

  // ---------- Kesirler ----------
  const kesir = tiplerden([
    [3, () => { const p = r(1, 9), q = r(2, 9); const tur = p < q ? "Basit kesir" : p === q ? "Bileşik kesir (1 bütün)" : "Bileşik kesir"; return secim(`${p}/${q} kesri hangi türdendir?`, tur.startsWith("Bileşik") ? "Bileşik kesir" : "Basit kesir", [tur.startsWith("Bileşik") ? "Basit kesir" : "Bileşik kesir", "Tam sayılı kesir"], "Pay paydadan küçükse basit, eşit ya da büyükse bileşik kesirdir."); }],
    [3, () => { const q = r(2, 9), p = r(1, q - 1); return secim("Boyalı kısmı gösteren kesir hangisi?", `${p}/${q}`, [`${q - p}/${q}`, `${p}/${q + 1}`, `${q}/${p}`].filter((x) => x !== `${p}/${q}`), "", { gorsel: OYUN.kesirSVG(q, p, 160) }); }],
    [2, () => { const q = r(2, 9), t = r(1, 3), p = r(1, q - 1); return secim(`${t} tam ${p}/${q} kesrinin bileşik kesir hâli hangisidir?`, `${t * q + p}/${q}`, [`${t + p}/${q}`, `${t * p + q}/${q}`].filter((x) => x !== `${t * q + p}/${q}`), `${t} × ${q} + ${p} = ${t * q + p}`); }],
    [2, () => { const n = r(5, 9), k = r(1, n - 1); return { tip: "kesir", soru: `${k}/${n} kadarını boya.`, parca: n, boya: k, cozum: "" }; }]
  ]);
  const kesirKars = tiplerden([
    [4, () => { const q = r(3, 12), a = r(1, q - 1), b = r(1, q - 1); if (a === b) return null; const d = a > b ? ">" : "<"; return secim(`${a}/${q} ⬜ ${b}/${q}`, d, [">", "<", "="].filter((x) => x !== d), "Paydaları eşit kesirlerde payı büyük olan daha büyüktür."); }],
    [3, () => { const a = r(2, 6), b = r(7, 12); return secim(`1/${a} ⬜ 1/${b}`, ">", ["<", "="], "Payları 1 olan kesirlerde paydası küçük olan daha büyüktür."); }],
    [2, () => { const q = r(4, 10); const ps = sec([...Array(q - 1).keys()].map((x) => x + 1), 3); const d = Math.max(...ps); return secim("Hangisi en büyük kesirdir?", `${d}/${q}`, ps.filter((x) => x !== d).map((x) => `${x}/${q}`), ""); }]
  ]);
  const kesirIslem = tiplerden([
    [4, () => { const q = r(4, 12), a = r(1, q - 2), b = r(1, q - 1 - a); return secim(`${a}/${q} + ${b}/${q} = ?`, `${a + b}/${q}`, [`${a + b}/${q * 2}`, `${a * b}/${q}`].filter((x) => x !== `${a + b}/${q}`), "Paydalar eşitse paylar toplanır, payda aynı kalır."); }],
    [3, () => { const q = r(4, 12), a = r(2, q - 1), b = r(1, a - 1); return secim(`${a}/${q} − ${b}/${q} = ?`, `${a - b}/${q}`, [`${a - b}/0`, `${a + b}/${q}`].filter((x) => x !== `${a - b}/${q}`), "Paydalar eşitse paylar çıkarılır."); }],
    [3, () => { const q = pick([2, 3, 4, 5, 6, 8, 10]), n = q * r(2, 12), p = r(1, q - 1); return sayi(`${n} sayısının ${p}/${q} kadarı kaçtır?`, n / q * p, `${n} ÷ ${q} = ${n / q}, ${n / q} × ${p} = ${n / q * p}`); }],
    [2, () => { const q = pick([2, 3, 4, 5]), n = q * r(3, 15); return sayi(`${n} öğrencinin 1/${q} kadarı gözlüklüdür. Kaç öğrenci gözlüklüdür?`, n / q, `${n} ÷ ${q} = ${n / q}`); }]
  ]);

  // ---------- Zaman ----------
  const zaman = tiplerden([
    [3, () => { const t = pick([["saat", 60, "dakika"], ["dakika", 60, "saniye"], ["gün", 24, "saat"], ["hafta", 7, "gün"], ["yıl", 12, "ay"], ["yıl", 52, "hafta"]]); const n = r(2, 6); return sayi(`${n} ${t[0]} kaç ${t[2]}?`, n * t[1], `1 ${t[0]} = ${t[1]} ${t[2]}`, { birim: t[2] }); }],
    [3, () => { const s = r(1, 4), d = r(5, 55); return sayi(`${s} saat ${d} dakika kaç dakikadır?`, s * 60 + d, `${s} × 60 + ${d} = ${s * 60 + d}`, { birim: "dakika" }); }],
    [2, () => { const d = r(61, 250); return secim(`${d} dakika kaç saat kaç dakikadır?`, `${Math.floor(d / 60)} saat ${d % 60} dakika`, [`${Math.floor(d / 60) + 1} saat ${d % 60} dakika`, `${Math.floor(d / 60)} saat ${(d % 60 + 20) % 60} dakika`].filter((x) => x !== `${Math.floor(d / 60)} saat ${d % 60} dakika`), `${d} = 60 × ${Math.floor(d / 60)} + ${d % 60}`); }],
    [2, () => { const h = r(8, 15), m = pick([0, 15, 20, 30, 40, 45]), sure = pick([35, 50, 75, 90, 105]); const t = h * 60 + m + sure; return secim(`Saat ${S(h, m)} olunca başlayan bir film ${sure} dakika sürdü. Film saat kaçta bitti?`, S(Math.floor(t / 60), t % 60), [S(Math.floor(t / 60) + 1, t % 60), S(Math.floor(t / 60), (t + 10) % 60)], `${S(h, m)} + ${sure} dakika`); }],
    [1, () => { const h = r(1, 12), m = pick([0, 10, 25, 35, 50]); return { tip: "saat", soru: `Saati ${S(h, m)} olacak şekilde kur.`, saat: h, dakika: m, dogruMetin: S(h, m), cozum: "" }; }]
  ]);

  // ---------- Veri ----------
  const VERI = [["Kitap okuma (sayfa)", ["Pazartesi", "Salı", "Çarşamba", "Perşembe"]], ["Satılan dondurma", ["Çilekli", "Kakaolu", "Limonlu", "Vanilyalı"]], ["Fidan dikimi", ["3-A", "3-B", "4-A", "4-B"]]];
  const veri = tiplerden([
    [3, () => { const [b, et] = pick(VERI); const v = et.map((e) => [e, r(2, 20)]); const mx = Math.max(...v.map((x) => x[1])); if (v.filter((x) => x[1] === mx).length > 1) return null; const d = v.find((x) => x[1] === mx)[0]; return secim("Grafiğe göre en fazla olan hangisidir?", d, v.filter((x) => x[0] !== d).map((x) => x[0]), "", { gorsel: OYUN.grafikHTML(v, b) }); }],
    [3, () => { const [b, et] = pick(VERI); const v = et.map((e) => [e, r(2, 20)]); const [x, y] = sec(v, 2); if (x[1] === y[1]) return null; return sayi(`${x[0]} ile ${y[0]} arasındaki fark kaçtır?`, Math.abs(x[1] - y[1]), "", { gorsel: OYUN.grafikHTML(v, b) }); }],
    [2, () => { const [b, et] = pick(VERI); const v = et.map((e) => [e, r(2, 20)]); return sayi("Grafikteki değerlerin toplamı kaçtır?", v.reduce((t, x) => t + x[1], 0), v.map((x) => x[1]).join(" + "), { gorsel: OYUN.grafikHTML(v, b) }); }],
    [2, () => secim("Verileri karşılaştırmak için en uygun gösterim hangisidir?", "Sütun grafiği", ["Sayı doğrusu", "Saat"], "Sütun grafiğinde sütunların uzunlukları karşılaştırılır.")]
  ]);

  // ---------- Geometri ----------
  const SEK = { "Üçgen": '<polygon points="100,15 185,180 15,180"/>', "Kare": '<rect x="30" y="30" width="140" height="140"/>', "Dikdörtgen": '<rect x="10" y="50" width="180" height="100"/>' };
  const sekiller = bankadan({
    sorular: [["Bütün kenar uzunlukları eşit olan dörtgen hangisidir?", "Kare", ["Dikdörtgen", "Üçgen"]], ["Karşılıklı kenarları eşit ve köşeleri dik olan, kenarları farklı uzunlukta dörtgen hangisidir?", "Dikdörtgen", ["Kare", "Üçgen"]], ["Üç kenarının uzunluğu eşit olan üçgene ne denir?", "Eşkenar üçgen", ["İkizkenar üçgen", "Çeşitkenar üçgen"]], ["İki kenarının uzunluğu eşit olan üçgene ne denir?", "İkizkenar üçgen", ["Eşkenar üçgen", "Çeşitkenar üçgen"]], ["Bütün kenarları farklı uzunlukta olan üçgene ne denir?", "Çeşitkenar üçgen", ["Eşkenar üçgen", "İkizkenar üçgen"]], ["Karenin kaç tane dik açısı vardır?", "4", ["2", "3"]], ["Bir küpün kaç yüzü vardır?", "6", ["4", "8"]], ["Bir küpün kaç köşesi vardır?", "8", ["6", "12"]], ["Bir küpün kaç ayrıtı vardır?", "12", ["8", "6"]]],
    gruplar: { "Kare": ["4 kenarı eşit", "4 dik açısı var ve kenarları eşit"], "Üçgen": ["3 kenarı var", "3 köşesi var"], "Dikdörtgen": ["Uzun ve kısa kenarları var", "Karşılıklı kenarları eşit, 4 dik açılı"] },
    dy: { d: ["Karenin bütün açıları dik açıdır.", "Üçgenin iç açılarından biri dik açı olabilir.", "Dikdörtgenin karşılıklı kenarları paraleldir."], y: [["Üçgenin dört kenarı vardır.", "Üçgenin üç kenarı vardır."], ["Dikdörtgenin bütün kenarları her zaman eşittir.", "Sadece karşılıklı kenarları eşittir."]] }
  });
  const aci = bankadan({
    sorular: [["Ölçüsü 90 derece olan açıya ne denir?", "Dik açı", ["Dar açı", "Geniş açı"]], ["Dik açıdan küçük olan açıya ne denir?", "Dar açı", ["Geniş açı", "Doğru açı"]], ["Dik açıdan büyük olan açıya ne denir?", "Geniş açı", ["Dar açı", "Dik açı"]], ["İki ucu da sınırlı olan doğru parçasına örnek hangisidir?", "Cetvelin kenarı", ["Güneş ışını", "Sonsuz yol"]], ["Bir ucu sınırlı, diğer ucu sınırsız olan çizgiye ne denir?", "Işın", ["Doğru", "Doğru parçası"]], ["İki ucu da sınırsız olan çizgiye ne denir?", "Doğru", ["Işın", "Doğru parçası"]], ["Saat tam 3'ü gösterirken akrep ile yelkovan arasında hangi açı oluşur?", "Dik açı", ["Dar açı", "Geniş açı"]], ["Saat 1'i gösterirken akrep ile yelkovan arasında hangi açı oluşur?", "Dar açı", ["Dik açı", "Geniş açı"]], ["Saat 5'i gösterirken akrep ile yelkovan arasında hangi açı oluşur?", "Geniş açı", ["Dar açı", "Dik açı"]]],
    gruplar: { "Dar açı": ["30 derece", "45 derece", "60 derece", "80 derece"], "Dik açı": ["90 derece", "Kitabın köşesi", "Karenin köşesi"], "Geniş açı": ["100 derece", "120 derece", "150 derece", "170 derece"] },
    gruplaSoru: "Açıları türlerine göre yerleştir."
  });
  const simetri = tiplerden([
    [4, () => { const satir = r(4, 5), sutun = pick([6, 8]); const sol = []; for (let rr = 0; rr < satir; rr++) for (let c = 0; c < sutun / 2; c++) if (Math.random() < 0.45) sol.push(rr + "," + c); if (sol.length < 3) return null; return { tip: "simetri", soru: "Şeklin simetriğini çiz.", satir, sutun, sol, cozum: "Simetri doğrusuna olan uzaklık iki tarafta da aynıdır." }; }],
    [2, () => { const k = r(2, 4), y = r(2, 4); return sayi(`Tabanında ${k}x${y} küp olan ve 2 kat yüksekliğindeki yapıda kaç küp vardır?`, k * y * 2, `${k} × ${y} × 2 = ${k * y * 2}`, { gorsel: `<div style="font-size:30px">${("🟦".repeat(k) + "<br>").repeat(y)}</div>` }); }],
    [2, () => dy(pick(["Bir şeklin simetri doğrusu onu iki eş parçaya ayırır.", "Karenin birden fazla simetri doğrusu vardır."]), true)]
  ]);

  // ---------- Ölçme ----------
  const uzunluk = tiplerden([
    [3, () => { const t = pick([["km", 1000, "m"], ["m", 100, "cm"], ["cm", 10, "mm"], ["m", 1000, "mm"]]); const n = r(2, 9); return sayi(`${n} ${t[0]} kaç ${t[2]}?`, n * t[1], `1 ${t[0]} = ${N(t[1])} ${t[2]}`, { birim: t[2] }); }],
    [2, () => { const k = r(1, 9), m = r(10, 990); return sayi(`${k} km ${m} m kaç metredir?`, k * 1000 + m, `${k} × 1000 + ${m}`, { birim: "m" }); }],
    [2, () => { const t = pick([["İki şehir arası uzaklık", "km"], ["Bir silginin boyu", "cm"], ["Sınıfın uzunluğu", "m"], ["Bir karıncanın boyu", "mm"]]); return secim(`${t[0]} hangi birimle ölçülür?`, t[1], ["km", "m", "cm", "mm"].filter((x) => x !== t[1]), ""); }]
  ]);
  const cevreAlan = tiplerden([
    [3, () => { const a = r(3, 15), b = r(3, 15); if (a === b) return null; return sayi(`Kısa kenarı ${a} cm, uzun kenarı ${b} cm olan dikdörtgenin çevresi kaç cm?`, 2 * (a + b), `2 × (${a} + ${b})`, { birim: "cm" }); }],
    [3, () => { const a = r(2, 12); return sayi(`Bir kenarı ${a} cm olan karenin çevresi kaç cm?`, 4 * a, `4 × ${a}`, { birim: "cm" }); }],
    [3, () => { const a = r(2, 6), b = r(2, 6); return sayi("Şekil kaç birimkareden oluşur? (Alanı kaç birimkaredir?)", a * b, `${a} × ${b} = ${a * b}`, { gorsel: `<div style="font-size:30px;line-height:1">${("🟩".repeat(a) + "<br>").repeat(b)}</div>` }); }],
    [2, () => { const c = r(4, 12) * 4; return sayi(`Çevresi ${c} cm olan karenin bir kenarı kaç cm?`, c / 4, `${c} ÷ 4`, { birim: "cm" }); }]
  ]);
  const tartma = tiplerden([
    [3, () => { const t = pick([["kg", 1000, "g"], ["ton", 1000, "kg"]]); const n = r(2, 9); return sayi(`${n} ${t[0]} kaç ${t[2]}?`, n * t[1], `1 ${t[0]} = 1000 ${t[2]}`, { birim: t[2] }); }],
    [3, () => { const k = r(1, 9), g = r(50, 950); return sayi(`${k} kg ${g} g kaç gramdır?`, k * 1000 + g, `${k} × 1000 + ${g}`, { birim: "g" }); }],
    [2, () => pick([() => secim("Yarım kilogram kaç gramdır?", "500", ["50", "250"], ""), () => secim("Çeyrek kilogram kaç gramdır?", "250", ["25", "500"], ""), () => secim("Bir kamyonun kütlesi hangi birimle ölçülür?", "Ton", ["Gram", "Miligram"], "")])()],
    [2, () => { const a = r(2, 8) * 250, b = r(1, 4) * 250; return sayi(`${a} g un ile ${b} g şeker karıştırıldı. Karışım kaç gramdır?`, a + b, "", { birim: "g" }); }]
  ]);
  const sivi = tiplerden([
    [3, () => { const n = r(2, 9); return sayi(`${n} L kaç mL'dir?`, n * 1000, "1 L = 1000 mL", { birim: "mL" }); }],
    [3, () => { const l = r(1, 5), ml = r(100, 900); return sayi(`${l} L ${ml} mL kaç mililitredir?`, l * 1000 + ml, "", { birim: "mL" }); }],
    [2, () => { const s = pick([200, 250, 500]); return sayi(`${s} mL'lik bardaklarla 2 L su kaç bardak eder?`, 2000 / s, `2000 ÷ ${s}`); }],
    [2, () => secim("Bir ilaç şişesindeki şurup hangi birimle ölçülür?", "mL", ["L", "kg"], "Az miktardaki sıvılar mililitre ile ölçülür.")]
  ]);

  const K = (id, ad, ikon, uret, bilgi) => ({ id, ad, ikon, uret, bilgi });
  DERS.matematik = {
    ad: "Matematik", ikon: "🔢", renk: "#ff8a00",
    temalar: [
      { id: "mt1", ad: "Doğal Sayılar", konular: [
        K("d1", "4, 5 ve 6 Basamaklı Sayılar", "🔢", dogal, [["🔢", "Altı basamaklı sayılarla tanışıyoruz: 345 678"], ["🧱", "Sağdan sola: birler, onlar, yüzler, binler, on binler, yüz binler."], ["📦", "Sağdan üçer basamak bir bölüktür: birler bölüğü, binler bölüğü."], ["⚖️", "Basamak değeri: 345 678'de 4'ün değeri 40 000'dir."]]),
        K("d2", "Sıralama ve Yuvarlama", "📶", siralaYuv, [["🔍", "Basamak sayısı çok olan sayı daha büyüktür."], ["⬅️", "Basamak sayıları eşitse en soldaki basamaktan karşılaştırırız."], ["🎯", "Yuvarlarken bir sağdaki basamağa bakarız: 5 ve üstü yukarı, altı aşağı."]]),
        K("d3", "Sayı Örüntüleri", "🔁", oruntu, [["🔁", "Örüntüde ardışık terimler arasındaki ilişkiyi bularak kuralı belirleriz."], ["📈", "Kural: 25'er artıyor → 25, 50, 75, 100..."], ["🧮", "n. terimi bulmak için kuralı adım adım uygularız."]])
      ] },
      { id: "mt2", ad: "Toplama ve Çıkarma", konular: [
        K("d4", "Toplama İşlemi", "➕", toplama, [["➕", "En çok dört basamaklı sayılarla toplama yaparız."], ["🔟", "Bir basamakta toplam 10 veya fazlaysa elde sonraki basamağa geçer."], ["🎯", "Sonucu tahmin etmek için sayıları yuvarlarız."]]),
        K("d5", "Çıkarma İşlemi", "➖", cikarma, [["➖", "Çıkarmada birler basamağından başlarız."], ["🔓", "Üstteki rakam küçükse soldaki basamaktan onluk bozarız."], ["🔍", "Kontrol: Fark + Çıkan = Eksilen"]]),
        K("d6", "Toplama ve Çıkarma Problemleri", "🧩", probTC, [["📖", "Problemi oku, verilenleri ve isteneni belirle."], ["🤔", "Hangi işlemleri hangi sırayla yapacağını düşün."], ["✅", "Sonucu tahminle karşılaştırarak kontrol et."]])
      ] },
      { id: "mt3", ad: "Çarpma ve Bölme", konular: [
        K("d7", "Çarpma İşlemi", "✖️", carpma, [["✖️", "Üç basamaklı sayıları bir basamaklı, iki basamaklı sayıları iki basamaklı sayılarla çarparız."], ["🔟", "10, 100, 1000 ile çarparken sağa 1, 2, 3 sıfır ekleriz."], ["🔄", "Çarpanların yeri değişse de sonuç değişmez."]]),
        K("d8", "Bölme İşlemi", "➗", bolme, [["➗", "Bölünen ÷ Bölen = Bölüm (ve kalan)"], ["✔️", "Kalan her zaman bölenden küçüktür."], ["🔁", "Kontrol: Bölen × Bölüm + Kalan = Bölünen"]]),
        K("d9", "Dört İşlem Problemleri", "🧠", probDort, [["📖", "Problemi dikkatle oku."], ["🧩", "İşlemleri sırasıyla yap: önce çarpma/bölme, sonra toplama/çıkarma gerekebilir."], ["✅", "Cevabın mantıklı olup olmadığını kontrol et."]]),
        K("d10", "Eşitlik", "🟰", esitlik, [["🟰", "Eşittir işaretinin iki yanı aynı değeri gösterir."], ["⚖️", "15 + 5 = 12 + 8 eşitliği dengededir."], ["❓", "Bilinmeyeni bulmak için iki tarafı eşitleriz."]])
      ] },
      { id: "mt4", ad: "Kesirler", konular: [
        K("d11", "Kesir Türleri", "🍕", kesir, [["🍕", "Pay paydadan küçükse basit kesir: 3/5"], ["🍰", "Pay paydaya eşit veya büyükse bileşik kesir: 7/5"], ["🎂", "Bir tam sayı ve bir basit kesirden oluşana tam sayılı kesir denir: 1 2/5"]]),
        K("d12", "Kesirleri Karşılaştırma", "⚖️", kesirKars, [["⚖️", "Paydaları eşitse payı büyük olan büyüktür: 5/8 > 3/8"], ["1️⃣", "Payları 1 ise paydası küçük olan büyüktür: 1/3 > 1/5"], ["🍕", "Pizzayı ne kadar çok parçaya bölersek her parça o kadar küçük olur."]]),
        K("d13", "Kesirlerle İşlemler", "🧮", kesirIslem, [["➕", "Paydaları eşit kesirlerde paylar toplanır: 2/7 + 3/7 = 5/7"], ["➖", "Paydaları eşit kesirlerde paylar çıkarılır."], ["🔢", "Bir çokluğun 3/4'ü: önce 4'e böl, sonra 3 ile çarp."]])
      ] },
      { id: "mt5", ad: "Zaman Ölçme", konular: [
        K("d14", "Zaman Ölçü Birimleri", "⏰", zaman, [["⏰", "1 saat = 60 dakika, 1 dakika = 60 saniye"], ["📅", "1 gün = 24 saat, 1 hafta = 7 gün"], ["🗓️", "1 yıl = 12 ay = 52 hafta = 365 gün"], ["🔄", "135 dakika = 2 saat 15 dakika"]])
      ] },
      { id: "mt6", ad: "Veri Toplama ve Değerlendirme", konular: [
        K("d15", "Sütun Grafiği ve Tablolar", "📊", veri, [["📊", "Sütun grafiğinde her sütun bir veriyi gösterir."], ["📏", "Sütunun uzunluğu verinin miktarını gösterir."], ["🧮", "Grafikten fark ve toplam hesaplayabiliriz."]])
      ] },
      { id: "mt7", ad: "Geometri", konular: [
        K("d16", "Üçgen, Kare ve Dikdörtgen", "🔺", sekiller, [["🔺", "Üçgenler kenarlarına göre eşkenar, ikizkenar ve çeşitkenar olur."], ["🟥", "Karenin dört kenarı eşit, dört açısı dik açıdır."], ["▬", "Dikdörtgenin karşılıklı kenarları eşit ve paraleldir."], ["🧊", "Küpün 6 yüzü, 8 köşesi, 12 ayrıtı vardır."]]),
        K("d17", "Doğru, Işın ve Açılar", "📐", aci, [["📏", "Doğru iki yönde sınırsızdır; ışın bir ucu sınırlıdır; doğru parçası iki ucu sınırlıdır."], ["📐", "Dik açı 90 derecedir."], ["🔹", "Dik açıdan küçükler dar açı, büyükler geniş açıdır."]]),
        K("d18", "Simetri ve Eş Küpler", "🦋", simetri, [["🦋", "Simetri doğrusu şekli iki eş parçaya ayırır."], ["🪞", "Simetrik noktalar doğruya eşit uzaklıktadır."], ["🧊", "Eş küplerle yapılan yapılarda katları sayarak küp sayısını buluruz."]])
      ] },
      { id: "mt8", ad: "Ölçme", konular: [
        K("d19", "Uzunluk Ölçme", "📏", uzunluk, [["📏", "1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm"], ["🛣️", "Uzun mesafeler km, kısa uzunluklar cm veya mm ile ölçülür."]].concat([["🔄", "2 km 300 m = 2300 m"]])),
        K("d20", "Çevre ve Alan", "🟩", cevreAlan, [["📐", "Çevre, bütün kenar uzunluklarının toplamıdır."], ["🟥", "Karenin çevresi = 4 × kenar"], ["🟩", "Alan, bir yüzeyin kaç birimkare ile kaplandığıdır."]]),
        K("d21", "Tartma", "⚖️", tartma, [["⚖️", "1 kg = 1000 g, 1 ton = 1000 kg"], ["🍫", "Hafif nesneler gram, ağır nesneler kilogram veya ton ile ölçülür."], ["🔄", "3 kg 250 g = 3250 g"]]),
        K("d22", "Sıvı Ölçme", "🥛", sivi, [["🥛", "1 L = 1000 mL"], ["💧", "Az miktardaki sıvılar mililitre (mL) ile ölçülür."], ["🔄", "2 L 500 mL = 2500 mL"]])
      ] }
    ]
  };
})();
