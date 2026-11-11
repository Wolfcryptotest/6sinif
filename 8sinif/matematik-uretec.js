// 8. sınıf Matematik soru üreteçleri (her seferinde yeni sayılarla soru)
window.URETEC = window.URETEC || {};
(function () {
  const U = window.URETEC;
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  const z = (n) => (n < 0 ? "−" + Math.abs(n) : String(n));
  const SUP = { "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
  const us = (n) => String(n).split("").map((c) => SUP[c]).join("");
  const kesir = (a, b) => { const g = gcd(a, b); a /= g; b /= g; return b === 1 ? z(a) : `${z(a)}/${b}`; };
  function soru(metin, dogru, yanlislar, cozum) {
    const s = [String(dogru)];
    for (const y of yanlislar) { const t = String(y); if (s.length < 4 && t && !s.includes(t) && !/NaN|undefined|Infinity/.test(t)) s.push(t); }
    for (let i = 0; s.length < 4 && i < 40; i++) { const n = Number(String(dogru).replace("−", "-")); if (isNaN(n)) break; const t = z(n + pick([-1, 1]) * r(1, 9)); if (!s.includes(t)) s.push(t); }
    return s.length === 4 ? { soru: metin, secenekler: s, dogru: 0, cozum } : null;
  }
  const tip = (l) => () => { for (let i = 0; i < 30; i++) { const q = pick(l)(); if (q) return q; } return null; };
  const asalCarpan = (n) => { const f = {}; for (let p = 2; n > 1; p++) while (n % p === 0) { f[p] = (f[p] || 0) + 1; n /= p; } return f; };
  const carpanYaz = (f) => Object.entries(f).map(([p, e]) => (e > 1 ? p + us(e) : p)).join(" · ");
  const bolenSay = (n) => Object.values(asalCarpan(n)).reduce((a, e) => a * (e + 1), 1);

  U.mat1k1 = tip([
    () => { const n = pick([36, 48, 60, 72, 84, 90, 96, 100, 108, 120, 126, 144, 150, 180, 200, 210, 240]); const f = asalCarpan(n), d = carpanYaz(f);
      const y1 = carpanYaz({ ...f, 2: (f[2] || 0) + 1 }), y2 = carpanYaz(Object.fromEntries(Object.entries(f).map(([p, e]) => [p, e === 1 ? 2 : e - 1])));
      return soru(`${n} sayısının asal çarpanlara ayrılmış hâli hangisidir?`, d, [y1, y2, carpanYaz(asalCarpan(n + 2))], `${n} = ${d}`); },
    () => { const n = pick([24, 30, 36, 40, 48, 60, 72, 84, 90, 100, 120, 144, 180]); const b = bolenSay(n);
      return soru(`${n} sayısının kaç tane pozitif tam sayı böleni vardır?`, b, [b - 2, b + 2, b - 1, Object.keys(asalCarpan(n)).length * 2], `${n} = ${carpanYaz(asalCarpan(n))} → üslerin birer fazlası çarpılır: ${b}`); }
  ]);
  U.mat1k2 = tip([
    () => { const g = r(2, 12), a = g * r(2, 9), b = g * r(2, 9); if (gcd(a, b) !== g || a === b) return null;
      return soru(`${a} ve ${b} sayılarının EBOB'u kaçtır?`, g, [lcm(a, b), g * 2, Math.max(1, g / 2) | 0, a - b > 0 ? a - b : b - a], `Ortak bölenlerin en büyüğü: ${g}`); },
    () => { const a = r(4, 18), b = r(4, 18); if (a === b) return null; const l = lcm(a, b);
      return soru(`Bir lamba ${a} saniyede, diğeri ${b} saniyede bir yanıyor. Birlikte yandıktan en az kaç saniye sonra yine birlikte yanarlar?`, l, [a * b === l ? l + a : a * b, gcd(a, b), l / 2 | 0, a + b], `EKOK(${a}, ${b}) = ${l}`); },
    () => { const g = r(3, 15), x = r(2, 8), y = r(2, 8); if (gcd(x, y) !== 1) return null; const a = g * x, b = g * y;
      return soru(`Kenarları ${a} cm ve ${b} cm olan dikdörtgen kartondan hiç artmayacak biçimde en büyük eş kareler kesiliyor. Kaç kare elde edilir?`, x * y, [x + y, g, x * y * 2, a * b / 4 | 0], `EBOB = ${g}; (${a}/${g})·(${b}/${g}) = ${x}·${y} = ${x * y}`); }
  ]);
  U.mat2k1 = tip([
    () => { const a = r(2, 5), n = r(2, 4), t = pick([1, -1]) * a, d = Math.pow(t, n);
      return soru(`(${z(t)})${us(n)} ifadesinin değeri kaçtır?`, z(d), [z(-d), z(t * n), z(Math.pow(a, n - 1))], `${z(t)} sayısı ${n} kez çarpılır: ${z(d)}`); },
    () => { const a = r(2, 5), n = r(1, 3), d = Math.pow(a, n);
      return soru(`${a}${us(-n)} ifadesinin değeri kaçtır?`, `1/${d}`, [z(-d), z(-a * n), `1/${a * n}`], `Negatif üs: 1/${a}${us(n)} = 1/${d}`); }
  ]);
  U.mat2k2 = tip([
    () => { const a = pick([2, 3, 5, 7]), m = r(-4, 8), n = r(-4, 8), k = r(-3, 6); const s = m + n - k;
      const P = (x) => (x < 0 ? `(−${-x})` : String(x));
      return soru(`${a}${us(m)} · ${a}${us(n)} ÷ ${a}${us(k)} işleminin sonucu hangisidir?`, `${a}${us(s)}`, [`${a}${us(m * n - k)}`, `${a}${us(m + n + k)}`, `${a}${us(m - n - k)}`], `Tabanlar aynı: çarpmada üsler toplanır, bölmede çıkarılır. Üs: ${P(m)} + ${P(n)} − ${P(k)} = ${String(s).replace("-", "−")} → ${a}${us(s)}`); },
    () => { const bas = r(11, 99), e = r(3, 9), sayi = String(bas) + "0".repeat(e - 1), a = (bas / 10).toFixed(1).replace(".", ",");
      return soru(`${sayi.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} sayısının bilimsel gösterimi hangisidir?`, `${a} × 10${us(e)}`, [`${a} × 10${us(e - 1)}`, `${bas} × 10${us(e - 1)}`, `${a} × 10${us(e + 1)}`], `1 ≤ a < 10 olmalı: ${a} × 10${us(e)}`); },
    () => { const bas = r(11, 99), e = r(3, 7), a = (bas / 10).toFixed(1).replace(".", ","), sayi = "0," + "0".repeat(e - 1) + bas;
      return soru(`${sayi} sayısının bilimsel gösterimi hangisidir?`, `${a} × 10${us(-e)}`, [`${a} × 10${us(-e + 1)}`, `${bas} × 10${us(-e)}`, `${a} × 10${us(e)}`], `Virgül ${e} basamak sağa: ${a} × 10${us(-e)}`); }
  ]);
  U.mat3k1 = tip([
    () => { const n = r(5, 200); const k = Math.floor(Math.sqrt(n)); if (k * k === n) return null;
      return soru(`√${n} sayısı hangi iki ardışık doğal sayı arasındadır?`, `${k} ile ${k + 1}`, [`${k - 1} ile ${k}`, `${k + 1} ile ${k + 2}`, `${Math.floor(n / 2)} ile ${Math.floor(n / 2) + 1}`], `${k * k} < ${n} < ${(k + 1) * (k + 1)}`); },
    () => { const a = r(2, 9), b = pick([2, 3, 5, 6, 7]), n = a * a * b;
      return soru(`√${n} ifadesinin a√b biçimindeki yazılışı hangisidir?`, `${a}√${b}`, [`${b}√${a}`, `${a * a}√${b}`, `${a + 1}√${b}`], `√(${a * a}·${b}) = ${a}√${b}`); }
  ]);
  U.mat3k2 = tip([
    () => { const b = pick([2, 3, 5]), x = r(1, 5), y = r(1, 5), s = x + y;
      return soru(`√${x * x * b} + √${y * y * b} işleminin sonucu hangisidir?`, `${s}√${b}`, [`√${(x * x + y * y) * b}`, `${s}√${2 * b}`, `${x * y}√${b}`], `${x}√${b} + ${y}√${b} = ${s}√${b}`); },
    () => { const k = r(2, 9), b = pick([2, 3, 5, 6]), a = k * k * b / b; const m = b, n = k * k * b; if (m === n) return null;
      return soru(`√${m} · √${n} işleminin sonucu kaçtır?`, k * b, [k * k * b, m + n, k], `√(${m}·${n}) = √${m * n} = ${k * b}`); }
  ]);
  U.mat5k1 = tip([
    () => { const a = r(2, 9), b = r(2, 9), c = r(2, 9), t = a + b + c, renk = pick([["kırmızı", a], ["mavi", b], ["yeşil", c]]);
      return soru(`Bir torbada ${a} kırmızı, ${b} mavi, ${c} yeşil top vardır. Rastgele çekilen bir topun ${renk[0]} olma olasılığı kaçtır?`, kesir(renk[1], t), [kesir(renk[1], t - renk[1]), kesir(t - renk[1], t), `1/${t}`], `${renk[1]}/${t}`); },
    () => { const n = r(12, 40), k = pick([3, 4, 5, 6]), say = Math.floor(n / k);
      return soru(`1'den ${n}'e kadar numaralandırılmış kartlardan rastgele çekilen kartın ${k}'in katı olma olasılığı kaçtır?`, kesir(say, n), [kesir(say + 1, n), `1/${k}`, kesir(n - say, n)], `${k}'in katı ${say} tane → ${say}/${n}`); }
  ]);
  U.mat6k2 = tip([
    () => { const a = r(1, 9), s = pick([1, -1]);
      return soru(`(x ${s > 0 ? "+" : "−"} ${a})² ifadesinin açılımı hangisidir?`, `x² ${s > 0 ? "+" : "−"} ${2 * a}x + ${a * a}`, [`x² + ${a * a}`, `x² ${s > 0 ? "+" : "−"} ${a}x + ${a * a}`, `x² ${s > 0 ? "−" : "+"} ${2 * a}x + ${a * a}`], `a² ± 2ab + b²`); },
    () => { const a = r(2, 12);
      return soru(`x² − ${a * a} ifadesinin çarpanlarına ayrılmış hâli hangisidir?`, `(x − ${a})(x + ${a})`, [`(x − ${a})²`, `(x + ${a})²`, `(x − ${a * a})(x + 1)`], `İki kare farkı`); },
    () => { const n = r(3, 9) * 10 + pick([1, 2, 8, 9]), m = Math.round(n / 10) * 10, d = n - m;
      return soru(`${n}² işleminin sonucu kaçtır?`, n * n, [n * n - 2 * d * m || n * n + 10, m * m + d * d, n * n + 1], `(${m} ${d > 0 ? "+" : "−"} ${Math.abs(d)})² = ${m * m} ${d > 0 ? "+" : "−"} ${Math.abs(2 * m * d)} + ${d * d} = ${n * n}`); }
  ]);
  U.mat7k1 = tip([
    () => { const x = r(-9, 12), a = r(2, 9), c = r(1, a - 1 || 1); if (a === c) return null; const b = r(-15, 15), d = (a - c) * x + b;
      return soru(`${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${c}x ${d < 0 ? "−" : "+"} ${Math.abs(d)} denkleminin çözümü kaçtır?`, z(x), [z(-x), z(x + 1), z(x + 2)], `${a - c}x = ${z(d - b)} → x = ${z(x)}`); },
    () => { const x = r(5, 40), k = r(2, 5), e = r(1, 20);
      return soru(`Bir sayının ${k} katının ${e} fazlası ${k * x + e} ise bu sayı kaçtır?`, x, [x + 1, x - 1, k * x], `${k}x + ${e} = ${k * x + e} → x = ${x}`); }
  ]);
  U.mat7k2 = tip([
    () => { const x1 = r(-5, 5), y1 = r(-5, 5), dx = r(1, 5), m = r(-4, 4); const x2 = x1 + dx, y2 = y1 + m * dx;
      return soru(`(${z(x1)}, ${z(y1)}) ve (${z(x2)}, ${z(y2)}) noktalarından geçen doğrunun eğimi kaçtır?`, z(m), [z(-m), z(dx), kesir(dx, m || 1)], `(${z(y2)} − ${z(y1)}) / (${z(x2)} − ${z(x1)}) = ${z(m)}`); },
    () => { const m = r(2, 30), n = r(10, 80), x = r(2, 15);
      return soru(`Bir taksinin açılış ücreti ${n} TL, km başına ücreti ${m} TL'dir. ${x} km yol giden yolcu kaç TL öder?`, m * x + n, [m * x, (m + n) * x, m + n * x], `y = ${m}x + ${n} → ${m * x + n} TL`); }
  ]);
  U.mat8k1 = tip([
    () => { const a = r(2, 7), s = pick([1, -1]) * a, k = r(-6, 6), b = r(-10, 10), c = s * k + b, yon = pick([">", "<", "≥", "≤"]);
      const ters = { ">": "<", "<": ">", "≥": "≤", "≤": "≥" }, son = s < 0 ? ters[yon] : yon;
      return soru(`${z(s)}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} ${yon} ${z(c)} eşitsizliğinin çözümü hangisidir?`, `x ${son} ${z(k)}`, [`x ${ters[son]} ${z(k)}`, `x ${son} ${z(-k)}`, `x ${ters[son]} ${z(-k)}`], s < 0 ? "Negatif sayıya bölünce yön değişir." : "Her iki taraf aynı pozitif sayıya bölünür."); }
  ]);
  U.mat9k2 = tip([
    () => { const [a, b, c] = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29]]), k = r(1, 4);
      return soru(`Dik kenarları ${a * k} cm ve ${b * k} cm olan dik üçgenin hipotenüsü kaç cm'dir?`, c * k, [(a + b) * k, (b + 1) * k, c * k + 1], `√(${a * a * k * k} + ${b * b * k * k}) = ${c * k}`); },
    () => { const [a, b, c] = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10]]), k = pick([1, 2]);
      return soru(`${c * k} m'lik merdiven duvara dayanmıştır; alt ucu duvardan ${a * k} m uzaktadır. Merdiven duvarın kaç m yüksekliğine ulaşır?`, b * k, [(c - a) * k, c * k + a * k, b * k + 1], `√(${c * c * k * k} − ${a * a * k * k}) = ${b * k}`); }
  ]);
})();
