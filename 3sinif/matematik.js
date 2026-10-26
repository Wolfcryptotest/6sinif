// 3. Sınıf Matematik — Türkiye Yüzyılı Maarif Modeli temaları
(function () {
  const { r, pick, karistir, secim, sayi, sirala, grupla, dy, tiplerden, bankadan, buyuk } = O;
  const BIR = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
  const ON = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
  function oku(n) {
    if (n === 1000) return "bin"; if (n === 0) return "sıfır";
    const y = Math.floor(n / 100), o = Math.floor(n / 10) % 10, b = n % 10;
    return [y ? (y === 1 ? "yüz" : BIR[y] + " yüz") : "", ON[o], BIR[b]].filter(Boolean).join(" ");
  }
  const yakin = (n, fark, alt, ust) => { const s = new Set([n]); let d = 0; while (s.size < 3 && d < 50) { const x = n + pick([-1, 1]) * pick(fark); if (x >= (alt ?? 0) && x <= (ust ?? 1e6)) s.add(x); d++; } return [...s].slice(1); };
  const S = (h, m) => h + ":" + String(m).padStart(2, "0");
  const ARSER = { 2: "ikişer", 3: "üçer", 4: "dörder", 5: "beşer", 6: "altışar", 7: "yedişer", 8: "sekizer", 9: "dokuzar", 10: "onar", 100: "yüzer" };
  const EMOJI = ["🍎", "⭐", "🐟", "🌸", "🚗", "🎈", "🍪", "🐞"];

  // ---------- 1. Tema ----------
  const ucBasamak = tiplerden([
    [3, () => { const n = r(101, 999); return secim(`"${buyuk(oku(n))}" sayısı hangisidir?`, n, [Math.floor(n / 100) * 100 + (n % 10) * 10 + Math.floor(n / 10) % 10, n + pick([10, -10, 100]), n + pick([1, -1])].filter((x) => x > 0 && x < 1000 && x !== n), `${n} = ${oku(n)}`); }],
    [2, () => { const n = r(101, 999); return secim(`${n} sayısının okunuşu hangisidir?`, buyuk(oku(n)), [n + pick([10, 100, -10]), n + pick([1, 2, -1])].filter((x) => x > 100 && x < 1000 && x !== n).map((x) => buyuk(oku(x))), ""); }],
    [3, () => { const y = r(1, 9), o = r(0, 9), b = r(0, 9), n = y * 100 + o * 10 + b; return sayi(`${y} yüzlük, ${o} onluk ve ${b} birlik kaç eder?`, n, `${y * 100} + ${o * 10} + ${b} = ${n}`); }],
    [3, () => { const n = r(111, 999), s = String(n), i = r(0, 2), rk = s[i]; if (rk === "0") return null; const deger = Number(rk) * [100, 10, 1][i]; const yan = [Number(rk), Number(rk) * 10, Number(rk) * 100].filter((x) => x !== deger); return secim(`${n} sayısında ${rk} rakamının basamak değeri kaçtır?`, deger, yan, `${rk} rakamı ${["yüzler", "onlar", "birler"][i]} basamağında, basamak değeri ${deger}.`); }],
    [2, () => { const n = r(102, 987), s = String(n); if (new Set(s).size < 3) return null; const i = r(0, 2); return secim(`${n} sayısının ${["yüzler", "onlar", "birler"][i]} basamağındaki rakam hangisidir?`, s[i], s.split("").filter((_, k) => k !== i), `${n}: yüzler ${s[0]}, onlar ${s[1]}, birler ${s[2]}`); }],
    [2, () => { const y = r(1, 9), o = r(0, 9), b = r(1, 9); const n = y * 100 + o * 10 + b; return secim(`${y * 100} + ${o * 10} + ${b} = ?`, n, [y * 100 + b * 10 + o, y * 10 + o * 100 + b].filter((x) => x !== n && x < 1000), "Basamak değerlerini topla."); }],
    [2, () => { const y = r(1, 5), o = r(1, 6), b = r(1, 7); return sayi("Görseldeki sayı kaçtır? (💯 = yüz, 🔟 = on, 🔹 = bir)", y * 100 + o * 10 + b, `${y} yüzlük + ${o} onluk + ${b} birlik`, { gorsel: `<div style="font-size:34px;line-height:1.3;max-width:520px;text-align:center">${"💯".repeat(y)}<br>${"🔟".repeat(o)}<br>${"🔹".repeat(b)}</div>` }); }]
  ]);

  const siralama = tiplerden([
    [3, () => { const a = karistir([r(100, 999), r(100, 999), r(100, 999)]); if (new Set(a).size < 3) return null; const buyukMu = Math.random() < 0.5; const d = buyukMu ? Math.max(...a) : Math.min(...a); return secim(`Hangisi en ${buyukMu ? "büyük" : "küçük"} sayıdır?`, d, a.filter((x) => x !== d), "Önce yüzler basamağına, eşitse onlara, sonra birlere bak."); }],
    [2, () => { const a = []; while (a.length < 4) { const x = r(100, 999); if (!a.includes(x)) a.push(x); } const s = a.slice().sort((x, y) => x - y); return sirala("Sayıları küçükten büyüğe sırala.", s.map(String), "", ", "); }],
    [2, () => { const n = r(101, 998), sonra = Math.random() < 0.5; return secim(`${n} sayısından hemen ${sonra ? "sonra" : "önce"} gelen sayı hangisidir?`, sonra ? n + 1 : n - 1, [sonra ? n - 1 : n + 1, sonra ? n + 10 : n - 10], ""); }],
    [3, () => { const n = r(101, 989); if (n % 10 === 5 || n % 10 === 0) return null; const y = Math.round(n / 10) * 10; return secim(`${n} sayısı en yakın hangi onluğa yuvarlanır?`, y, [y + (n % 10 < 5 ? 10 : -10), y - 100 > 0 ? y - 100 : y + 100], `Birler basamağı ${n % 10}: ${n % 10 < 5 ? "5'ten küçükse aşağı" : "5 ve büyükse yukarı"} yuvarlanır.`); }],
    [2, () => { const n = r(110, 940); if (n % 100 === 50 || n % 100 === 0) return null; const y = Math.round(n / 100) * 100; return secim(`${n} sayısı en yakın hangi yüzlüğe yuvarlanır?`, y, [y + (n % 100 < 50 ? 100 : -100), Math.round(n / 10) * 10].filter((x) => x !== y), `Onlar basamağına bak: ${Math.floor(n / 10) % 10}.`); }],
    [2, () => { const a = r(100, 999), b = Math.random() < 0.15 ? a : r(100, 999); const d = a > b ? ">" : a < b ? "<" : "="; return secim(`${a} ⬜ ${b}  Kutuya hangi işaret gelir?`, d, [">", "<", "="].filter((x) => x !== d), `${a} ${d} ${b}`); }]
  ]);

  const ritmik = tiplerden([
    [4, () => { const k = pick([6, 7, 8, 9, 10, 100]), ileri = Math.random() < 0.65; const bas = ileri ? r(1, 5) : r(6, 10); const dizi = [0, 1, 2, 3].map((i) => (ileri ? bas + i : bas - i) * k); const c = ileri ? (bas + 4) * k : (bas - 4) * k; if (c <= 0) return null; return sayi(`${buyuk(ARSER[k])} ${ileri ? "ileriye" : "geriye"} sayalım: ${dizi.join(", ")}, ?`, c, `Her adımda ${k} ${ileri ? "ekle" : "çıkar"}.`); }],
    [2, () => { const k = pick([6, 7, 8, 9]); const d = k * r(2, 10); const yan = [d + 1, d - 2, d + 3, k * 11 - 1].filter((x) => x % k !== 0 && x > 0); return secim(`${buyuk(ARSER[k])} ritmik sayarken hangi sayı söylenir?`, d, yan, `${d} = ${d / k} × ${k}`); }],
    [2, () => { const k = pick([6, 7, 8, 9, 10]); const n = r(3, 9); return secim(`${buyuk(ARSER[k])} sayarken ${n}. söylenen sayı hangisidir? (${k} ile başla)`, k * n, [k * (n - 1), k * (n + 1)], `${k} × ${n} = ${k * n}`); }]
  ]);

  const tekCift = tiplerden([
    [3, () => { const t = [], c = []; while (t.length < 3) { const x = r(1, 499) * 2 + 1; if (!t.includes(x)) t.push(x); } while (c.length < 3) { const x = r(1, 499) * 2; if (!c.includes(x)) c.push(x); } return grupla("Sayıları tek ve çift kutularına yerleştir.", ["Tek", "Çift"], karistir([...t.map((x) => [String(x), 0]), ...c.map((x) => [String(x), 1])]), "Birler basamağı 0, 2, 4, 6, 8 ise çift; 1, 3, 5, 7, 9 ise tektir."); }],
    [3, () => { const cift = Math.random() < 0.5; const d = r(10, 499) * 2 + (cift ? 0 : 1); const y = [r(10, 499) * 2 + (cift ? 1 : 0), r(10, 499) * 2 + (cift ? 1 : 0)]; return secim(`Hangisi ${cift ? "çift" : "tek"} sayıdır?`, d, y, `Birler basamağına bak: ${d % 10}.`); }],
    [3, () => { const a = r(1, 99), b = r(1, 99), t = a + b, dogruMu = Math.random() < 0.5; const iddia = dogruMu ? (t % 2 ? "tek" : "çift") : (t % 2 ? "çift" : "tek"); return dy(`${a} + ${b} toplamı ${iddia} sayıdır.`, dogruMu, `${a} + ${b} = ${t}, bu ${t % 2 ? "tek" : "çift"} sayıdır.`); }],
    [2, () => { const k = pick([["Tek + Tek", "Çift"], ["Çift + Çift", "Çift"], ["Tek + Çift", "Tek"], ["Çift + Tek", "Tek"]]); return dy(`${k[0]} toplamı her zaman ${Math.random() < 0.5 ? k[1].toLocaleLowerCase("tr") : (k[1] === "Tek" ? "çift" : "tek")} sayıdır.`, null, ""); }]
  ]);
  // dy null düzeltmesi
  const tekCiftU = () => { const g = tekCift(); if (g && g.tip === "dy" && g.dogru === null) { const m = g.ifade; const kural = { "Tek + Tek": "çift", "Çift + Çift": "çift", "Tek + Çift": "tek", "Çift + Tek": "tek" }; const k = Object.keys(kural).find((x) => m.startsWith(x)); g.dogru = m.includes("zaman " + kural[k]); g.cozum = `${k} = ${kural[k]}. Örnek: ${k.startsWith("Tek") ? 3 : 2} + ${k.endsWith("Tek") ? 5 : 4} = ${(k.startsWith("Tek") ? 3 : 2) + (k.endsWith("Tek") ? 5 : 4)}`; } return g; };

  const oruntu = tiplerden([
    [4, () => { const k = r(2, 12), art = Math.random() < 0.7, bas = art ? r(1, 60) : r(5 * k, 100); const d = [0, 1, 2, 3].map((i) => art ? bas + i * k : bas - i * k); const c = art ? bas + 4 * k : bas - 4 * k; if (c < 0) return null; return sayi(`Örüntüde sıradaki sayı kaçtır? ${d.join(", ")}, ?`, c, `Kural: ${k} ${art ? "artıyor" : "azalıyor"}.`); }],
    [3, () => { const e = karistir(EMOJI).slice(0, 3); const kalip = pick([[0, 1], [0, 0, 1], [0, 1, 2], [0, 1, 1]]); const seri = []; for (let i = 0; i < kalip.length * 2 + 1; i++) seri.push(e[kalip[i % kalip.length]]); const d = e[kalip[seri.length % kalip.length]]; return secim(`Örüntüde sıradaki hangisi? ${seri.join(" ")} ❓`, d, e.filter((x) => x !== d), `Tekrar eden kısım: ${kalip.map((i) => e[i]).join(" ")}`, { em: true }); }],
    [2, () => { const k = pick([2, 3, 4, 5, 10]), bas = r(1, 30); const d = [0, 1, 2, 3].map((i) => bas + i * k); return secim(`${d.join(", ")} örüntüsünün kuralı nedir?`, `${k} artıyor`, [`${k} azalıyor`, `${k + pick([1, 2])} artıyor`, `${k * 2} artıyor`], ""); }],
    [2, () => { const e = pick(["🔺", "🟦", "⭐", "🟢"]), art = r(1, 3), bas = r(1, 3); const adim = (n) => bas + (n - 1) * art; const n = r(4, 6); return sayi(`1. adım: ${e.repeat(adim(1))}   2. adım: ${e.repeat(adim(2))}   3. adım: ${e.repeat(adim(3))}  Buna göre ${n}. adımda kaç şekil olur?`, adim(n), `Her adımda ${art} şekil ekleniyor.`); }]
  ]);

  const tahmin = tiplerden([
    [3, () => { const e = pick(EMOJI), n = r(3, 9) * 10 + r(-2, 2); const sec = [Math.round(n / 10) * 10]; const yan = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].filter((x) => Math.abs(x - sec[0]) >= 30); return secim("Görselde yaklaşık kaç nesne var? Saymadan tahmin et!", sec[0], yan, `Tam olarak ${n} tane var.`, { gorsel: `<div style="font-size:24px;max-width:460px;line-height:1.25;text-align:center">${e.repeat(n)}</div>` }); }],
    [3, () => { const s = r(3, 9), k = pick([10, 5, 8, 6]); const e = pick(EMOJI); return secim(`Bir rafta yaklaşık ${k} ${e} var. ${s} raf dolu. Yaklaşık kaç ${e} vardır?`, s * k, [s + k, s * k + 30 > 100 ? s * k - 20 : s * k + 30], `${s} raf × ${k} = ${s * k}`); }],
    [2, () => { const t = pick([["Sınıftaki öğrenci sayısı", "25", ["2", "250"]], ["Bir paketteki kalem sayısı", "12", ["120", "1"]], ["Bir ağaçtaki yaprak sayısı", "Çok fazla (yüzlerce)", ["5", "20"]], ["Bir eldeki parmak sayısı", "5", ["10", "50"]], ["Bir kavanozdaki misket (orta boy kavanoz)", "100", ["3", "10000"]]]); return secim(`${t[0]} için en uygun tahmin hangisi?`, t[1], t[2], "Tahmin yaparken günlük hayattaki deneyimlerimizi kullanırız."); }]
  ]);

  // ---------- 2. Tema ----------
  const kesir = tiplerden([
    [3, () => { const t = pick([["yarımını", 2, 1], ["çeyreğini", 4, 1], ["yarımını", 4, 2], ["bütününü", 3, 3]]); return { tip: "kesir", soru: `Pizzanın ${t[0]} boya.`, parca: t[1], boya: t[2], cozum: `${t[1]} parçanın ${t[2]} tanesi = ${t[2]}/${t[1]}` }; }],
    [3, () => { const n = r(2, 8), k = r(1, n - 1); return { tip: "kesir", soru: `${k}/${n} kadarını boya.`, parca: n, boya: k, cozum: `Payda ${n}: bütün ${n} eş parçaya ayrılmış. Pay ${k}: ${k} parça boyanır.` }; }],
    [3, () => { const n = r(2, 8), k = r(1, n - 1); return secim("Boyalı kısım hangi kesirle gösterilir?", `${k}/${n}`, [`${n - k}/${n}`, `${k}/${n + 1}`, `${n}/${k}`].filter((x) => x !== `${k}/${n}`), `${n} eş parçadan ${k} tanesi boyalı.`, { gorsel: OYUN.kesirSVG(n, k, 170) }); }],
    [2, () => pick([() => secim("Bir bütünde kaç tane yarım vardır?", "2", ["4", "1"], "2 yarım = 1 bütün"), () => secim("Bir bütünde kaç tane çeyrek vardır?", "4", ["2", "3"], "4 çeyrek = 1 bütün"), () => secim("2 çeyrek neye eşittir?", "Yarım", ["Bütün", "Çeyrek"], "2/4 = 1/2"), () => secim("Yarım kesir olarak nasıl gösterilir?", "1/2", ["1/4", "2/1"], ""), () => secim("Çeyrek kesir olarak nasıl gösterilir?", "1/4", ["1/2", "4/1"], "")])()],
    [2, () => { const n = r(2, 9), k = r(1, n - 1), pay = Math.random() < 0.5; return secim(`${k}/${n} kesrinin ${pay ? "payı" : "paydası"} kaçtır?`, pay ? k : n, [pay ? n : k, k + n], "Üstteki sayı pay, alttaki sayı paydadır."); }],
    [1, () => { const n = r(3, 8); return secim(`Bir bütün ${n} eş parçaya ayrıldı. Parçalardan biri hangi kesirle gösterilir?`, `1/${n}`, [`${n}/1`, `1/${n + 1}`], "Birim kesrin payı 1'dir."); }]
  ]);

  const zaman = tiplerden([
    [3, () => { const h = r(1, 12), m = pick([0, 15, 30, 45, 0, 30, 5, 10, 20, 25, 35, 40, 50, 55]); return { tip: "saat", soru: `Saati ${S(h, m)} olacak şekilde kur.`, saat: h, dakika: m, dogruMetin: S(h, m), cozum: "Kırmızı kısa ok akrep (saat), siyah uzun ok yelkovan (dakika)." }; }],
    [3, () => { const h = r(1, 12), m = pick([0, 15, 30, 45, 10, 20, 40, 50]); const yan = [S(h % 12 + 1, m), S(h, (m + 30) % 60), S(m / 5 || 12, h * 5 % 60)].filter((x) => x !== S(h, m)); return secim("Saat kaçı gösteriyor?", S(h, m), yan, "Akrep saati, yelkovan dakikayı gösterir. Yelkovan her sayıda 5 dakika ilerler.", { gorsel: OYUN.saatSVG(h, m, 200) }); }],
    [3, () => { const t = pick([["1 saat", 60, "dakika"], ["1 dakika", 60, "saniye"], ["1 gün", 24, "saat"], ["1 hafta", 7, "gün"], ["1 yıl", 12, "ay"], ["Yarım saat", 30, "dakika"], ["Çeyrek saat", 15, "dakika"]]); return secim(`${t[0]} kaç ${({ dakika: "dakikadır", saniye: "saniyedir", saat: "saattir", "gün": "gündür", ay: "aydır" })[t[2]]}?`, t[1], yakinZaman(t[1]), `${t[0]} = ${t[1]} ${t[2]}`); }],
    [2, () => { const t = pick([["saat", 60, "dakika", 2, 5], ["hafta", 7, "gün", 2, 5], ["gün", 24, "saat", 2, 3], ["yıl", 12, "ay", 2, 4]]); const n = r(t[3], t[4]); return sayi(`${n} ${t[0]} kaç ${t[2]}?`, n * t[1], `1 ${t[0]} = ${t[1]} ${t[2]}, ${n} × ${t[1]} = ${n * t[1]}`, { birim: t[2] }); }],
    [2, () => { const t = pick([["Dişlerini fırçalamak", "2 dakika", ["2 saat", "2 gün"]], ["Bir ders", "40 dakika", ["40 saniye", "40 gün"]], ["Gece uykusu", "9 saat", ["9 dakika", "9 hafta"]], ["Göz kırpmak", "1 saniye", ["1 saat", "1 gün"]], ["Yaz tatili", "3 ay", ["3 dakika", "3 saat"]], ["Bir fidanın ağaç olması", "Birkaç yıl", ["Birkaç dakika", "Birkaç saat"]]]); return secim(`${t[0]} yaklaşık ne kadar sürer?`, t[1], t[2], "Olayların süresini tahmin ederken deneyimlerimizi kullanırız."); }],
    [2, () => { const h = r(8, 16), sure = pick([15, 20, 30, 40, 45]); const bit = S(h, sure); return secim(`Bir etkinlik saat ${S(h, 0)} olunca başladı ve ${sure} dakika sürdü. Bitiş saati kaçtır?`, bit, [S(h + 1, 0), S(h, sure + 10), S(h + 1, sure)], `${S(h, 0)} + ${sure} dakika = ${bit}`); }]
  ]);
  function yakinZaman(n) { return { 60: [100, 30, 24], 24: [12, 60, 7], 7: [5, 10, 12], 12: [10, 24, 7], 30: [50, 15, 60], 15: [25, 30, 10] }[n]; }

  const uzunlukKutle = tiplerden([
    [3, () => { const t = pick([["m", 100, "cm"], ["kg", 1000, "g"]]); const n = r(2, 9); return sayi(`${n} ${t[0]} kaç ${t[2]} eder?`, n * t[1], `1 ${t[0]} = ${t[1]} ${t[2]}`, { birim: t[2] }); }],
    [2, () => { const m = r(1, 8), c = r(5, 95); return sayi(`${m} m ${c} cm kaç santimetredir?`, m * 100 + c, `${m} m = ${m * 100} cm, ${m * 100} + ${c} = ${m * 100 + c}`, { birim: "cm" }); }],
    [2, () => pick([() => secim("1 metre kaç santimetredir?", "100", ["10", "1000"], ""), () => secim("1 kilogram kaç gramdır?", "1000", ["100", "10"], ""), () => secim("Yarım kilogram kaç gramdır?", "500", ["50", "250"], "1000 g'nin yarısı 500 g"), () => secim("Yarım metre kaç santimetredir?", "50", ["500", "5"], "100 cm'nin yarısı 50 cm"), () => secim("Çeyrek kilogram kaç gramdır?", "250", ["25", "500"], "1000 ÷ 4 = 250")])()],
    [3, () => grupla("Hangi birimle ölçülür? Kutulara yerleştir.", ["Metre (m)", "Santimetre (cm)"], karistir([...O.sec(["Okul bahçesinin uzunluğu", "Koşu pisti", "Sınıfın uzunluğu", "Bir binanın yüksekliği"], 3).map((x) => [x, 0]), ...O.sec(["Silginin boyu", "Kalemin boyu", "Defterin eni", "Parmağının uzunluğu"], 3).map((x) => [x, 1])]), "Uzun mesafeler metre, kısa uzunluklar santimetre ile ölçülür.")],
    [2, () => grupla("Hangi birimle tartılır?", ["Kilogram (kg)", "Gram (g)"], karistir([...O.sec(["Bir çuval un", "Bir karpuz", "Bir öğrenci", "Bir koli elma"], 3).map((x) => [x, 0]), ...O.sec(["Bir silgi", "Bir çikolata", "Bir yaprak", "Bir düğme"], 3).map((x) => [x, 1])]), "Ağır şeyler kilogram, hafif şeyler gram ile tartılır.")],
    [2, () => { const t = pick([["Bir karpuzun kütlesi", "5 kg", ["5 g", "500 kg"]], ["Bir kalemin boyu", "15 cm", ["15 m", "150 m"]], ["Sınıf kapısının yüksekliği", "2 m", ["2 cm", "20 m"]], ["Bir elmanın kütlesi", "200 g", ["200 kg", "2 g"]], ["Bir öğretmenin boyu", "170 cm", ["17 cm", "170 m"]]]); return secim(`${t[0]} yaklaşık ne kadardır?`, t[1], t[2], ""); }]
  ]);

  const para = tiplerden([
    [4, () => { const u = pick([["🍎", "Elma"], ["📒", "Defter"], ["✏️", "Kalem"], ["🧃", "Meyve suyu"], ["🎈", "Balon"], ["📕", "Kitap"], ["⚽", "Top"], ["🧸", "Oyuncak ayı"]]); const tl = pick([3, 7, 8, 12, 15, 18, 23, 26, 35, 42, 55, 64, 78, 95, 120, 150]); return { tip: "market", soru: `${u[0]} ${u[1]} ${tl} lira. Kasaya tam parayı öde.`, tutar: tl * 100, cozum: `${tl} lira ödenmeli.`, gorsel: `<div style="font-size:80px">${u[0]}</div>` }; }],
    [2, () => { const tl = r(1, 20), kr = pick([25, 50, 75]); const u = pick(["🍞 Ekmek", "🥛 Süt", "🍬 Şeker", "🍌 Muz"]); return { tip: "market", soru: `${u} ${tl} lira ${kr} kuruş. Tam parayı öde.`, tutar: tl * 100 + kr, kurus: true, cozum: `${tl} lira ${kr} kuruş`, gorsel: `<div style="font-size:70px">${u.split(" ")[0]}</div>` }; }],
    [2, () => pick([() => secim("1 lira kaç kuruştur?", "100", ["10", "50"], "1 TL = 100 kuruş"), () => secim("2 tane 50 kuruş kaç eder?", "1 lira", ["2 lira", "50 kuruş"], "50 + 50 = 100 kuruş = 1 lira"), () => secim("4 tane 25 kuruş kaç eder?", "1 lira", ["4 lira", "75 kuruş"], "25 × 4 = 100 kuruş"), () => secim("Hangisi madeni paradır?", "1 lira", ["5 lira", "10 lira"], "1 lira ve kuruşlar madeni paradır; 5 TL ve üstü kâğıt paradır.")])()],
    [3, () => { const a = pick([5, 10, 20, 50]), b = pick([5, 10, 20, 50]), na = r(1, 3), nb = r(1, 3); if (a === b) return null; return sayi(`${na} tane ${a} TL ve ${nb} tane ${b} TL kaç lira eder?`, na * a + nb * b, `${na * a} + ${nb * b} = ${na * a + nb * b}`, { birim: "TL" }); }],
    [2, () => { const fiyat = r(11, 95), ver = fiyat <= 50 ? pick([50, 100]) : 100; return sayi(`${fiyat} liralık bir oyuncak için kasaya ${ver} lira verdim. Kaç lira para üstü alırım?`, ver - fiyat, `${ver} − ${fiyat} = ${ver - fiyat}`, { birim: "TL" }); }]
  ]);

  // ---------- 3. Tema ----------
  const toplama = tiplerden([
    [4, () => { const a = r(100, 600), b = r(20, 999 - a); return sayi(`${a} + ${b} = ?`, a + b, eldeAciklama(a, b)); }],
    [2, () => { const a = r(1, 6) * 100, b = r(1, 9 - a / 100) * 100; return secim(`Zihinden topla: ${a} + ${b} = ?`, a + b, [a + b + 100, a + b - 100], `${a / 100} yüz + ${b / 100} yüz = ${(a + b) / 100} yüz`); }],
    [2, () => { const a = r(110, 480), b = r(110, 480); const t = Math.round(a / 100) * 100 + Math.round(b / 100) * 100; return secim(`${a} + ${b} toplamını en yakın yüzlüklere yuvarlayarak tahmin et.`, t, [t + 200, t - 200 > 0 ? t - 200 : t + 300], `${Math.round(a / 100) * 100} + ${Math.round(b / 100) * 100} = ${t}`); }],
    [2, () => { const t = r(3, 9) * 100, a = r(30, t - 30); return sayi(`? + ${a} = ${t}`, t - a, `${t} − ${a} = ${t - a}`); }],
    [3, () => { const k = pick([["kütüphanede", "hikâye kitabı", "masal kitabı"], ["bahçede", "lale", "papatya"], ["çiftlikte", "tavuk", "ördek"], ["okulda", "kız öğrenci", "erkek öğrenci"]]); const a = r(120, 480), b = r(110, 999 - a - 50); return sayi(`Bir ${k[0]} ${a} ${k[1]} ve ${b} ${k[2]} var. Toplam kaç tane vardır?`, a + b, `${a} + ${b} = ${a + b}`); }]
  ]);
  function eldeAciklama(a, b) { return (a % 10 + b % 10 >= 10 || (Math.floor(a / 10) % 10) + (Math.floor(b / 10) % 10) >= 10) ? "Eldeli toplama: 10 olan basamak bir sonrakine elde olarak geçer." : "Birlerden başlayarak topla."; }

  const cikarma = tiplerden([
    [4, () => { const a = r(200, 999), b = r(50, a - 10); return sayi(`${a} − ${b} = ?`, a - b, (a % 10 < b % 10) ? "Birlerde çıkarma olmuyorsa onluktan bir onluk bozulur." : "Birlerden başlayarak çıkar."); }],
    [2, () => { const a = r(5, 9) * 100, b = r(1, a / 100 - 1) * 100; return secim(`Zihinden çıkar: ${a} − ${b} = ?`, a - b, [a - b + 100, a - b > 100 ? a - b - 100 : a - b + 200], ""); }],
    [2, () => { const a = r(300, 999), c = r(20, a - 100); return sayi(`${a} − ? = ${a - c}`, c, `${a} − ${a - c} = ${c}`); }],
    [3, () => { const k = pick([["Bir fırında", "ekmek", "satıldı"], ["Bir ağaçta", "elma", "toplandı"], ["Bir otoparkta", "araba", "çıktı"], ["Bir kumbarada", "lira", "harcandı"]]); const a = r(250, 950), b = r(60, a - 50); return sayi(`${k[0]} ${a} ${k[1]} vardı. ${b} tanesi ${k[2]}. Kaç tane kaldı?`, a - b, `${a} − ${b} = ${a - b}`); }],
    [2, () => { const a = r(300, 900), b = r(100, a - 50); return secim(`${a} ile ${b} arasındaki fark kaçtır?`, a - b, [a + b > 999 ? a - b + 10 : a + b, a - b + pick([10, -10, 100])].filter((x) => x > 0), `${a} − ${b} = ${a - b}`); }]
  ]);

  const carpma = tiplerden([
    [5, () => { const a = r(2, 10), b = r(2, 10); return sayi(`${a} × ${b} = ?`, a * b, `${a} tane ${b} = ${a * b}`); }],
    [2, () => { const a = r(2, 9), b = r(2, 9); return secim(`${a} × ${b} = ?`, a * b, [a * b + a, a * b - b, a + b].filter((x) => x !== a * b), ""); }],
    [2, () => { const a = r(2, 5), b = r(2, 6), e = pick(EMOJI); return sayi(`${a} sırada ${ARSER[b]} ${e} var. Toplam kaç tane?`, a * b, `${a} × ${b} = ${a * b}`, { gorsel: `<div style="font-size:34px;line-height:1.3;text-align:center">${Array(a).fill(e.repeat(b)).join("<br>")}</div>` }); }],
    [2, () => { const a = r(2, 9), n = r(3, 5); return secim(`${Array(n).fill(a).join(" + ")} toplamını çarpma ile nasıl yazarız?`, `${n} × ${a}`, [`${n} + ${a}`, `${a} × ${a}`, `${n + 1} × ${a}`], `${a}, ${n} kez toplanıyor.`); }],
    [2, () => { const a = r(11, 45), b = r(2, 4); if (a * b > 200) return null; return sayi(`${a} × ${b} = ?`, a * b, `${a} × ${b}: önce birler ${a % 10} × ${b} = ${(a % 10) * b}, sonra onlar.`); }],
    [2, () => { const a = r(3, 99), k = pick([10, 100]); if (a * k > 1000) return null; return secim(`${a} × ${k} = ?`, a * k, [a * (k === 10 ? 100 : 10), a + k, a * k + k], `${k} ile çarparken sayının sağına ${k === 10 ? "bir" : "iki"} sıfır yazarız.`); }],
    [2, () => { const k = pick([["kutuda", "kalem", 6], ["pakette", "kurabiye", 8], ["sepette", "yumurta", 9], ["takımda", "oyuncu", 7]]); const n = r(3, 9); return sayi(`Bir ${k[0]} ${k[2]} ${k[1]} var. ${n} ${k[0].replace(/d[ae]$|t[ae]$/, (x) => x)} kaç ${k[1]} vardır?`, n * k[2], `${n} × ${k[2]} = ${n * k[2]}`); }]
  ]);

  const bolme = tiplerden([
    [5, () => { const b = r(2, 10), c = r(2, 10); return sayi(`${b * c} ÷ ${b} = ?`, c, `${b} × ${c} = ${b * c} olduğu için ${b * c} ÷ ${b} = ${c}`); }],
    [3, () => { const k = pick([["kalemi", "öğrenciye"], ["şekeri", "çocuğa"], ["elmayı", "tabağa"], ["bilyeyi", "arkadaşına"], ["kitabı", "rafa"]]); const b = r(2, 9), c = r(2, 9); return sayi(`${b * c} ${k[0]} ${b} ${k[1]} eşit olarak paylaştırırsak her birine kaç tane düşer?`, c, `${b * c} ÷ ${b} = ${c}`); }],
    [2, () => { const b = r(2, 6), c = r(2, 5), e = pick(EMOJI); return secim(`${b * c} tane ${e} ${b} gruba eşit ayrılırsa her grupta kaç tane olur?`, c, [c + 1, b, c * 2].filter((x) => x !== c), `${b * c} ÷ ${b} = ${c}`, { gorsel: `<div style="font-size:30px;max-width:440px;text-align:center">${e.repeat(b * c)}</div>` }); }],
    [2, () => { const b = r(2, 9), c = r(2, 9); return secim(`${b} × ${c} = ${b * c} ise ${b * c} ÷ ${c} kaçtır?`, b, [c, b * c - c], "Çarpma ve bölme ters işlemdir."); }],
    [1, () => { const b = r(2, 9), c = r(2, 9); return secim(`? × ${b} = ${b * c}`, c, [c + 1, c - 1 || c + 2], `${b * c} ÷ ${b} = ${c}`); }]
  ]);

  const problemler = tiplerden([
    [2, () => { const a = r(3, 9), f = r(2, 9), v = Math.min(100, Math.ceil(a * f / 10) * 10 + 10); return sayi(`Tanesi ${f} lira olan defterden ${a} tane aldım. Kasaya ${v} lira verdim. Kaç lira para üstü alırım?`, v - a * f, `${a} × ${f} = ${a * f}, ${v} − ${a * f} = ${v - a * f}`, { birim: "TL" }); }],
    [2, () => { const a = r(120, 400), b = r(50, 300), c = r(30, Math.min(a + b - 10, 300)); return sayi(`Bir otobüste ${a} yolcu vardı. İlk durakta ${b} yolcu bindi, ${c} yolcu indi. Otobüste kaç yolcu oldu?`, a + b - c, `${a} + ${b} = ${a + b}, ${a + b} − ${c} = ${a + b - c}`); }],
    [2, () => { const s = r(3, 6), k = r(4, 9), v = r(2, 9); return sayi(`Ali'nin ${s} kutu boya kalemi var. Her kutuda ${k} kalem var. ${v} kalemini kardeşine verdi. Kaç kalemi kaldı?`, s * k - v, `${s} × ${k} = ${s * k}, ${s * k} − ${v} = ${s * k - v}`); }],
    [2, () => { const c = r(2, 6), t = c * r(3, 9); return sayi(`${t} öğrenci ${c} gruba eşit ayrıldı. Sonra her gruba 2 öğrenci daha katıldı. Bir grupta kaç öğrenci oldu?`, t / c + 2, `${t} ÷ ${c} = ${t / c}, ${t / c} + 2 = ${t / c + 2}`); }],
    [2, () => { const a = r(150, 450); return sayi(`Elif'in ${a} pulu var. Kardeşinin pulu Elif'in pulundan 75 eksik. İkisinin toplam kaç pulu var?`, a + a - 75, `Kardeşi: ${a} − 75 = ${a - 75}. Toplam: ${a} + ${a - 75} = ${2 * a - 75}`); }],
    [2, () => { const g = r(2, 4), f = r(5, 15); return secim(`Bir dondurma ${f} lira. ${g} arkadaş birer dondurma aldı. Hangi işlemle toplam parayı buluruz?`, `${g} × ${f}`, [`${f} − ${g}`, `${f} ÷ ${g}`, `${g} + ${g}`], "Eşit sayıları tekrar tekrar toplamak çarpmadır."); }]
  ]);

  // ---------- 4. ve 5. Tema ----------
  const SEKIL = {
    "Üçgen": '<polygon points="100,15 185,180 15,180"/>', "Kare": '<rect x="30" y="30" width="140" height="140"/>',
    "Dikdörtgen": '<rect x="10" y="50" width="180" height="100"/>', "Çember": '<circle cx="100" cy="100" r="80" fill="none"/>', "Daire": '<circle cx="100" cy="100" r="80"/>'
  };
  const sekilSVG = (ad) => `<svg viewBox="0 0 200 200" width="150" height="150" fill="#ffd23f" stroke="#2b2140" stroke-width="6">${SEKIL[ad]}</svg>`;
  const cisimBanka = { "Küre": ["⚽ Top", "🌍 Dünya maketi", "🍊 Portakal", "🔮 Cam küre"], "Küp": ["🎲 Zar", "🧊 Buz küpü", "🎁 Hediye kutusu"], "Silindir": ["🥫 Konserve kutusu", "🔋 Pil", "🥁 Davul"], "Koni": ["🍦 Dondurma külahı", "🎉 Parti şapkası", "🚧 Trafik konisi"] };
  const geometri = tiplerden([
    [3, bankadan({ gruplar: cisimBanka, grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")} şeklindedir?`, gruplaSoru: "Nesneleri benzediği geometrik cisme göre yerleştir." })],
    [3, () => { const ad = pick(Object.keys(SEKIL)); return secim("Bu geometrik şeklin adı nedir?", ad, Object.keys(SEKIL).filter((x) => x !== ad && !(ad === "Çember" && x === "Daire") && !(ad === "Daire" && x === "Çember")), "", { gorsel: sekilSVG(ad) }); }],
    [3, () => pick([
      () => secim("Üçgenin kaç kenarı vardır?", "3", ["4", "5"], ""), () => secim("Karenin kaç köşesi vardır?", "4", ["3", "5"], ""),
      () => secim("Hangi şeklin köşesi yoktur?", "Çember", ["Kare", "Üçgen"], "Çember kıvrımlı bir çizgidir, köşesi yoktur."),
      () => secim("Bütün kenarları birbirine eşit olan dörtgen hangisidir?", "Kare", ["Dikdörtgen", "Üçgen"], ""),
      () => secim("Küpün kaç yüzü vardır?", "6", ["4", "8"], "Zarın 6 yüzü vardır."),
      () => secim("Hangi cismin hiç düz yüzü yoktur?", "Küre", ["Küp", "Silindir"], "Küre her yerden yuvarlaktır."),
      () => secim("Silindirin kaç tane düz (daire) yüzü vardır?", "2", ["1", "4"], "Altında ve üstünde birer daire vardır."),
      () => secim("Koninin tepesinde ne vardır?", "Bir köşe (sivri uç)", ["Bir kare", "İki daire"], ""),
      () => secim("Dikdörtgenin karşılıklı kenarları nasıldır?", "Eşit uzunluktadır", ["Hepsi farklıdır", "Hiç kenarı yoktur"], "")
    ])()],
    [1, () => dy(pick(["Karenin dört kenarı eşittir.", "Üçgenin üç köşesi vardır.", "Top küreye benzer.", "Zar küpe benzer."]), true)],
    [1, () => { const y = pick([["Çemberin dört köşesi vardır.", "Çemberin köşesi yoktur."], ["Üçgenin dört kenarı vardır.", "Üçgenin 3 kenarı vardır."], ["Küre düz yüzlerden oluşur.", "Kürenin düz yüzü yoktur."]]); return dy(y[0], false, y[1]); }]
  ]);

  const cevreSivi = tiplerden([
    [3, () => { const a = r(2, 9), b = r(2, 9); return sayi(`Kenar uzunlukları ${a} cm, ${b} cm, ${a} cm ve ${b} cm olan dikdörtgenin çevresi kaç cm?`, 2 * (a + b), `Çevre = bütün kenarların toplamı: ${a} + ${b} + ${a} + ${b} = ${2 * (a + b)}`, { birim: "cm", gorsel: `<svg viewBox="0 0 220 150" width="220" height="150"><rect x="20" y="20" width="${80 + a * 10}" height="${40 + b * 7}" fill="#e5f0ff" stroke="#3d8bff" stroke-width="5"/></svg>` }); }],
    [2, () => { const a = r(2, 12); return sayi(`Bir kenarı ${a} cm olan karenin çevresi kaç cm?`, 4 * a, `Karenin 4 kenarı eşittir: ${a} + ${a} + ${a} + ${a} = ${4 * a}`, { birim: "cm" }); }],
    [2, () => { const a = r(3, 9), b = r(3, 9), c = r(3, 9); return sayi(`Kenarları ${a} cm, ${b} cm ve ${c} cm olan üçgenin çevresi kaç cm?`, a + b + c, `${a} + ${b} + ${c} = ${a + b + c}`, { birim: "cm" }); }],
    [3, () => grupla("Hangisi litre ile ölçülür, hangisi kilogram ile?", ["Litre (L)", "Kilogram (kg)"], karistir([...O.sec(["Süt", "Su", "Meyve suyu", "Ayran", "Zeytinyağı"], 3).map((x) => [x, 0]), ...O.sec(["Pirinç", "Elma", "Un", "Patates", "Şeker"], 3).map((x) => [x, 1])]), "Sıvılar litre ile ölçülür.")],
    [2, () => pick([() => secim("1 litre kaç yarım litredir?", "2", ["4", "1"], ""), () => secim("4 tane çeyrek litre kaç litre eder?", "1", ["4", "2"], ""), () => secim("Hangisi bir su bardağından daha fazla su alır?", "Sürahi", ["Çay kaşığı", "Yüksük"], ""), () => secim("Bir kova yaklaşık kaç litre su alır?", "10 litre", ["1 çay kaşığı kadar", "1000 litre"], ""), () => secim("Sıvıların miktarını hangi birimle ölçeriz?", "Litre", ["Metre", "Kilogram"], "")])()],
    [1, () => { const n = r(2, 6); return sayi(`Bir şişe yarım litre. ${n * 2} şişe kaç litre eder?`, n, `2 yarım litre = 1 litre, ${n * 2} ÷ 2 = ${n}`, { birim: "litre" }); }]
  ]);

  const SIM_HARF = { evet: ["A", "H", "M", "O", "T", "U", "V", "W", "X", "Y", "İ"], hayir: ["F", "G", "J", "L", "N", "P", "R", "S", "Z"] };
  const simetri = tiplerden([
    [4, () => { const satir = r(3, 5), sutun = pick([6, 8]); const sol = []; for (let rr = 0; rr < satir; rr++) for (let c = 0; c < sutun / 2; c++) if (Math.random() < 0.4) sol.push(rr + "," + c); if (sol.length < 2) return null; return { tip: "simetri", soru: "Şeklin simetriğini sağ tarafa çiz.", satir, sutun, sol, cozum: "Simetride iki taraf aynada bakıyormuş gibi aynıdır. Çizgiye yakın kareler çizgiye yakın kalır." }; }],
    [2, () => { const d = pick(SIM_HARF.evet); return secim("Hangi harfin dikey simetri doğrusu vardır? (Ortadan ikiye katlayınca iki yarısı üst üste gelir)", d, SIM_HARF.hayir, `${d} harfini ortadan katlayınca iki yarısı eşleşir.`, { balonYok: true }); }],
    [2, () => { const t = pick([["🦋 Kelebek", true], ["🍁 Akçaağaç yaprağı", true], ["☂️ Şemsiye", true], ["❤️ Kalp", true], ["🍌 Muz", false], ["🐌 Salyangoz", false], ["☁️ Bulut", false]]); return dy(`${t[0]} simetrik bir görünüme sahiptir.`, t[1], t[1] ? "Ortadan katlayınca iki yarısı eşleşir." : "İki yarısı birbirinin aynısı değildir."); }]
  ]);

  // ---------- 6. Tema ----------
  const VERI = [["Sevilen meyveler", ["🍎 Elma", "🍌 Muz", "🍓 Çilek", "🍊 Portakal"]], ["Sevilen renkler", ["Mavi", "Kırmızı", "Yeşil", "Sarı"]], ["Sınıfın evcil hayvanları", ["🐱 Kedi", "🐶 Köpek", "🐟 Balık", "🐦 Kuş"]], ["Okula geliş şekli", ["🚶 Yürüyerek", "🚌 Servisle", "🚗 Arabayla", "🚲 Bisikletle"]]];
  const cetele = (n) => "<s>||||</s> ".repeat(Math.floor(n / 5)) + "|".repeat(n % 5);
  const veri = tiplerden([
    [3, () => { const [b, et] = pick(VERI); const v = et.map((e) => [e.replace(/^\S+ /, ""), r(1, 10)]); const mx = Math.max(...v.map((x) => x[1])); if (v.filter((x) => x[1] === mx).length > 1) return null; const d = v.find((x) => x[1] === mx)[0]; return secim("Grafiğe göre en çok seçilen hangisidir?", d, v.filter((x) => x[0] !== d).map((x) => x[0]), "En uzun sütun en çok seçileni gösterir.", { gorsel: OYUN.grafikHTML(v, b + " (öğrenci sayısı)") }); }],
    [3, () => { const [b, et] = pick(VERI); const v = et.map((e) => [e.replace(/^\S+ /, ""), r(1, 10)]); const s = pick(v); return sayi(`Grafiğe göre "${s[0]}" kaç öğrenci tarafından seçilmiş?`, s[1], "Sütunun tepesinden sola doğru bak.", { gorsel: OYUN.grafikHTML(v, b) }); }],
    [2, () => { const [b, et] = pick(VERI); const v = et.map((e) => [e.replace(/^\S+ /, ""), r(1, 10)]); return sayi("Grafikte toplam kaç öğrenci var?", v.reduce((t, x) => t + x[1], 0), v.map((x) => x[1]).join(" + "), { gorsel: OYUN.grafikHTML(v, b) }); }],
    [2, () => { const [b, et] = pick(VERI); const v = et.slice(0, 3).map((e) => [e, r(1, 5) * 2]); const s = karistir(v).slice(0, 2); if (s[0][1] === s[1][1]) return null; return sayi(`${s[0][0].replace(/^\S+ /, "")} ile ${s[1][0].replace(/^\S+ /, "")} arasındaki fark kaç öğrencidir?`, Math.abs(s[0][1] - s[1][1]), "Büyük sayıdan küçük sayıyı çıkar.", { gorsel: OYUN.resimGrafikHTML(v, "🙂", 2, b + " (🙂 = 2 öğrenci)") }); }],
    [2, () => { const n = r(3, 19); return secim("Çetele tablosundaki çizgiler hangi sayıyı gösterir?", n, [n + 1, n - 1, n + 5, n - 5].filter((x) => x > 0), "Her üstü çizili grup 5 eder.", { gorsel: `<div style="font-size:38px;font-weight:900;letter-spacing:2px">${cetele(n)}</div>` }); }],
    [1, () => secim("Verileri toplarken hızlıca saymak için hangisini kullanırız?", "Çetele tablosu", ["Saat", "Cetvel"], "Çetelede her 5 çizgi bir grup yapılır.")]
  ]);

  DERS.matematik = {
    ad: "Matematik", ikon: "🔢", renk: "#ff8a00",
    temalar: [
      { id: "mt1", ad: "Sayılar ve Nicelikler (1)", konular: [
        { id: "m1", ad: "Üç Basamaklı Sayılar", ikon: "💯", uret: ucBasamak, bilgi: [["💯", "1000'e kadar olan sayıları öğreniyoruz. 10 tane onluk bir yüzlük eder."], ["🔢", "Üç basamaklı bir sayının yüzler, onlar ve birler basamağı vardır."], ["🏠", "347 sayısında 3 yüzler, 4 onlar, 7 birler basamağındadır."], ["⚖️", "Basamak değeri: 347'de 3'ün değeri 300, 4'ün değeri 40, 7'nin değeri 7'dir."], ["🧩", "Sayıyı çözümleyelim: 347 = 300 + 40 + 7"], ["🗣️", "347 okunuşu: üç yüz kırk yedi."]] },
        { id: "m2", ad: "Sıralama ve Yuvarlama", ikon: "📶", uret: siralama, bilgi: [["🔍", "Sayıları karşılaştırırken önce yüzler basamağına bakarız."], ["🟰", "Yüzler eşitse onlara, onlar da eşitse birlere bakarız."], ["🐊", "Büyük işareti (>) ağzını büyük sayıya açar: 452 > 425"], ["🎯", "Yuvarlarken: birler basamağı 5 veya daha büyükse yukarı, küçükse aşağı yuvarlarız."], ["📍", "347 en yakın onluğa 350, en yakın yüzlüğe 300 olarak yuvarlanır."]] },
        { id: "m3", ad: "Ritmik Sayma", ikon: "🥁", uret: ritmik, bilgi: [["🥁", "Ritmik saymada her seferinde aynı sayıyı ekleriz."], ["6️⃣", "Altışar: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60"], ["7️⃣", "Yedişer: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70"], ["8️⃣", "Sekizer: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80"], ["9️⃣", "Dokuzar: 9, 18, 27, 36, 45, 54, 63, 72, 81, 90"], ["💯", "Yüzer: 100, 200, 300 … 1000. Geriye sayarken çıkarırız."]] },
        { id: "m4", ad: "Tek ve Çift Sayılar", ikon: "👫", uret: tekCiftU, bilgi: [["👫", "İkişer eşleştirince hiç artmayan sayılar çift sayıdır."], ["0️⃣", "Birler basamağı 0, 2, 4, 6, 8 olan sayılar çifttir."], ["1️⃣", "Birler basamağı 1, 3, 5, 7, 9 olan sayılar tektir."], ["➕", "Tek + Tek = Çift. Örnek: 3 + 5 = 8"], ["➕", "Çift + Çift = Çift, Tek + Çift = Tek. Örnek: 4 + 3 = 7"]] },
        { id: "m5", ad: "Örüntüler", ikon: "🔁", uret: oruntu, bilgi: [["🔁", "Belli bir kurala göre tekrar eden dizilere örüntü denir."], ["🍎", "Şekil örüntüsü: 🍎🍌🍎🍌… Sıradaki: 🍎"], ["📈", "Sayı örüntüsü: 5, 10, 15, 20… Kural: 5'er artıyor."], ["🕵️", "Kuralı bulmak için ardışık iki sayı arasındaki farka bakarız."], ["🧱", "Büyüyen örüntülerde her adımda aynı sayıda şekil eklenir."]] },
        { id: "m6", ad: "Nesne Sayısını Tahmin Etme", ikon: "🤔", uret: tahmin, bilgi: [["🤔", "Tahmin, saymadan yaklaşık sonucu söylemektir."], ["🧺", "Bir kısmı sayıp bütünü düşünebiliriz: bir sırada 10 tane, 5 sıra varsa yaklaşık 50."], ["✅", "Tahminden sonra sayarak kontrol ederiz. Yakın tahmin iyi tahmindir."]] }
      ] },
      { id: "mt2", ad: "Sayılar ve Nicelikler (2)", konular: [
        { id: "m7", ad: "Kesirler", ikon: "🍕", uret: kesir, bilgi: [["🍕", "Bir bütünü eş parçalara ayırabiliriz."], ["🌗", "Bütünü 2 eş parçaya ayırırsak her parça yarımdır: 1/2"], ["🍰", "Bütünü 4 eş parçaya ayırırsak her parça çeyrektir: 1/4"], ["🔢", "Kesirde üstteki sayı pay, alttaki sayı paydadır."], ["✂️", "Payda bütünün kaç parçaya ayrıldığını, pay kaç parçanın alındığını gösterir."], ["🧮", "3/5: bütün 5 eş parçaya ayrılmış, 3 parçası alınmış."]] },
        { id: "m8", ad: "Zaman Ölçme", ikon: "⏰", uret: zaman, bilgi: [["⏰", "Saatte kısa ok akreptir, saati gösterir. Uzun ok yelkovandır, dakikayı gösterir."], ["5️⃣", "Yelkovan bir sayıdan diğerine geçince 5 dakika geçer."], ["⏱️", "1 saat = 60 dakika, 1 dakika = 60 saniye"], ["📅", "1 gün = 24 saat, 1 hafta = 7 gün"], ["🗓️", "1 yıl = 12 ay. Yarım saat 30, çeyrek saat 15 dakikadır."], ["📱", "Dijital saatte 08:45 yazar: 8'i 45 dakika geçiyor demektir."]] },
        { id: "m9", ad: "Uzunluk ve Kütle", ikon: "📏", uret: uzunlukKutle, bilgi: [["📏", "Uzunlukları metre (m) ve santimetre (cm) ile ölçeriz."], ["🔟", "1 metre = 100 santimetre"], ["⚖️", "Kütleyi kilogram (kg) ve gram (g) ile ölçeriz."], ["🍫", "1 kilogram = 1000 gram. Yarım kilogram 500 gramdır."], ["🐘", "Ağır şeyler kg, hafif şeyler g ile; uzun yollar m, kısa şeyler cm ile ölçülür."]] },
        { id: "m10", ad: "Paralarımız", ikon: "💰", uret: para, bilgi: [["💰", "Paramızın birimi Türk lirasıdır (TL)."], ["🪙", "1 lira = 100 kuruş"], ["💵", "Kâğıt paralar: 5, 10, 20, 50, 100 ve 200 TL"], ["🪙", "Madeni paralar: 1 TL, 50, 25, 10, 5 ve 1 kuruş"], ["🛒", "Alışverişte tam para verirsek para üstü almayız; fazla verirsek para üstü alırız."]] }
      ] },
      { id: "mt3", ad: "İşlemlerden Cebirsel Düşünmeye", konular: [
        { id: "m11", ad: "Toplama", ikon: "➕", uret: toplama, bilgi: [["➕", "Toplamada birler basamağından başlarız."], ["🔟", "Bir basamakta toplam 10 veya fazlaysa 1 onluk elde olarak sonraki basamağa geçer."], ["🧠", "Zihinden: 300 + 400 = 700 (3 yüz + 4 yüz = 7 yüz)"], ["🎯", "Tahmin: 298 + 403 yaklaşık 300 + 400 = 700"], ["🔄", "Toplananların yeri değişse de toplam değişmez: 25 + 40 = 40 + 25"]] },
        { id: "m12", ad: "Çıkarma", ikon: "➖", uret: cikarma, bilgi: [["➖", "Çıkarmada da birler basamağından başlarız."], ["🔓", "Üstteki rakam küçükse yanındaki basamaktan 1 onluk bozarız."], ["🧠", "Zihinden: 800 − 300 = 500"], ["🔍", "Kontrol: Fark + Çıkan = Eksilen. 500 + 300 = 800"]] },
        { id: "m13", ad: "Çarpma", ikon: "✖️", uret: carpma, bilgi: [["✖️", "Çarpma, aynı sayıyı tekrar tekrar toplamaktır: 4 + 4 + 4 = 3 × 4 = 12"], ["📋", "Çarpım tablosunu ezberlemek işlemlerini hızlandırır."], ["🔄", "Çarpanların yeri değişse de sonuç değişmez: 3 × 5 = 5 × 3"], ["🔟", "10 ile çarparken sağa bir sıfır, 100 ile çarparken iki sıfır ekleriz."], ["0️⃣", "Bir sayıyı 1 ile çarparsak kendisi, 0 ile çarparsak 0 olur."]] },
        { id: "m14", ad: "Bölme", ikon: "➗", uret: bolme, bilgi: [["➗", "Bölme, bir çokluğu eşit gruplara ayırmaktır."], ["🍬", "12 şekeri 3 çocuğa eşit paylaştırırsak her birine 4 şeker düşer: 12 ÷ 3 = 4"], ["🔄", "Çarpma ve bölme ters işlemdir: 3 × 4 = 12 ise 12 ÷ 3 = 4"], ["📋", "Bölmeyi çarpım tablosundan yararlanarak yaparız."]] },
        { id: "m15", ad: "Problemler", ikon: "🧩", uret: problemler, bilgi: [["📖", "Problemi dikkatle oku. Verilenleri ve isteneni bul."], ["🤔", "Hangi işlemi yapacağına karar ver: arttı mı, azaldı mı, eşit mi paylaşıldı?"], ["✍️", "İşlemi yap. Birden fazla adım olabilir."], ["✅", "Sonucu kontrol et: Cevabım mantıklı mı?"]] }
      ] },
      { id: "mt4", ad: "Nesnelerin Geometrisi (1)", konular: [
        { id: "m16", ad: "Geometrik Cisimler ve Şekiller", ikon: "🔷", uret: geometri, bilgi: [["⚽", "Küre: her yeri yuvarlaktır. Top küreye benzer."], ["🎲", "Küp: 6 eş kare yüzü vardır. Zar küpe benzer."], ["🥫", "Silindir: altı ve üstü dairedir. Konserve kutusu silindire benzer."], ["🍦", "Koni: tabanı daire, tepesi sivridir. Dondurma külahı koniye benzer."], ["🔺", "Üçgenin 3, karenin ve dikdörtgenin 4 kenarı ve köşesi vardır."], ["⭕", "Çemberin köşesi yoktur. Çemberin içi boyanınca daire olur."]] },
        { id: "m17", ad: "Çevre ve Sıvı Ölçme", ikon: "🥛", uret: cevreSivi, bilgi: [["📐", "Bir şeklin çevresi, bütün kenarlarının uzunlukları toplamıdır."], ["🟥", "Karenin 4 kenarı eşittir. Kenarı 5 cm olan karenin çevresi 20 cm'dir."], ["🥛", "Sıvıları litre (L) ile ölçeriz."], ["🍶", "1 litre = 2 yarım litre = 4 çeyrek litre"]] }
      ] },
      { id: "mt5", ad: "Nesnelerin Geometrisi (2)", konular: [
        { id: "m18", ad: "Simetri", ikon: "🦋", uret: simetri, bilgi: [["🦋", "Bir şekli ortadan katladığımızda iki yarısı üst üste geliyorsa şekil simetriktir."], ["📏", "Şekli iki eş parçaya ayıran çizgiye simetri doğrusu denir."], ["🪞", "Simetrinin bir yarısı, diğer yarısının aynadaki görüntüsü gibidir."], ["🔤", "A, H, M, O, T harfleri dikey simetriktir."]] }
      ] },
      { id: "mt6", ad: "Veriye Dayalı Araştırma", konular: [
        { id: "m19", ad: "Tablo ve Grafikler", ikon: "📊", uret: veri, bilgi: [["❓", "Merak ettiğimiz bir konuda soru sorarak veri toplarız."], ["✏️", "Verileri sayarken çetele tablosu kullanırız: her 5 çizgi bir grup."], ["📋", "Sıklık tablosunda her seçeneğin kaç kez seçildiği yazılır."], ["📊", "Sütun grafiğinde en uzun sütun en çok seçileni gösterir."], ["🙂", "Şekil grafiğinde her şekil belli sayıda nesneyi gösterir."]] }
      ] }
    ]
  };
})();
