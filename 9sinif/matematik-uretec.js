// 9. sınıf Matematik soru üreteçleri
window.URETEC = window.URETEC || {};
(function () {
  const U = window.URETEC;
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const z = (n) => (n < 0 ? "−" + Math.abs(n) : String(n));
  const SUP = { "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
  const us = (n) => String(n).split("").map((c) => SUP[c]).join("");
  function soru(metin, dogru, yanlislar, cozum) {
    const s = [String(dogru)];
    for (const y of yanlislar) { const t = String(y); if (s.length < 4 && t && !s.includes(t) && !/NaN|undefined|Infinity/.test(t)) s.push(t); }
    for (let i = 0; s.length < 4 && i < 40; i++) { const n = Number(String(dogru).replace("−", "-")); if (isNaN(n)) break; const t = z(n + pick([-1, 1]) * r(1, 9)); if (!s.includes(t)) s.push(t); }
    return s.length === 4 ? { soru: metin, secenekler: s, dogru: 0, cozum } : null;
  }
  const tip = (l) => () => { for (let i = 0; i < 30; i++) { const q = pick(l)(); if (q) return q; } return null; };
  const par = (a, b, ak, bk) => `${ak ? "[" : "("}${z(a)}, ${z(b)}${bk ? "]" : ")"}`;

  U.mat1k1 = tip([
    () => { const a = pick([2, 3, 5]), m = r(1, 5), n = r(2, 3), k = r(-4, 4), s = m * n + k;
      return soru(`(${a}${us(m)})${us(n)} · ${a}${us(k)} işleminin sonucu hangisidir?`, `${a}${us(s)}`, [`${a}${us(m + n + k)}`, `${a}${us(m * n * k)}`, `${a}${us(m * n - k)}`], `(${a}${us(m)})${us(n)} = ${a}${us(m * n)}; üsler toplanır: ${m * n} + ${z(k)} = ${s}`); },
    () => { const [b, n] = pick([[2, 3], [3, 2], [2, 4], [5, 2], [3, 3], [10, 3]]), m = r(1, 3), kok = pick([2, 3]), sayi = Math.pow(b, kok * m);
      if (sayi > 1e6) return null;
      return soru(`${kok === 2 ? "√" : "∛"}${sayi} ifadesinin değeri kaçtır?`, Math.pow(b, m), [Math.pow(b, m + 1), sayi / kok, Math.pow(b, m) * 2], `${sayi} = ${b}${us(kok * m)} → ${b}${us(m)} = ${Math.pow(b, m)}`); },
    () => { const b = pick([2, 3, 5, 6, 7]), x = r(1, 6), y = r(1, 6), w = r(1, 4); const s = x + y - w;
      return soru(`√${x * x * b} + √${y * y * b} − √${w * w * b} işleminin sonucu hangisidir?`, s === 0 ? "0" : `${s === 1 ? "" : s === -1 ? "−" : z(s)}√${b}`, [`√${(x * x + y * y - w * w) * b}`, `${x + y + w}√${b}`, `${x * y}√${b}`], `${x}√${b} + ${y}√${b} − ${w}√${b}`); }
  ]);
  U.mat1k2 = tip([
    () => { const a = r(-8, 4), b = a + r(3, 9), ak = pick([true, false]), bk = pick([true, false]); const n = b - a - 1 + (ak ? 1 : 0) + (bk ? 1 : 0);
      return soru(`${par(a, b, ak, bk)} aralığında kaç tam sayı vardır?`, n, [n + 1, n - 1, b - a], `${ak ? z(a) + " dahil" : z(a) + " hariç"}, ${bk ? z(b) + " dahil" : z(b) + " hariç"} → ${n}`); },
    () => { const a = r(-6, 0), b = a + r(4, 8), c = a + r(1, 3), d = b + r(1, 5);
      return soru(`A = [${z(a)}, ${z(b)}) ve B = (${z(c)}, ${z(d)}] ise A ∩ B hangisidir?`, `(${z(c)}, ${z(b)})`, [`[${z(c)}, ${z(b)}]`, `[${z(a)}, ${z(d)}]`, `(${z(a)}, ${z(c)})`], `Ortak kısım: ${z(c)}'den büyük, ${z(b)}'den küçük.`); },
    () => { const a = r(-9, 9), b = a + r(2, 9), ak = pick([true, false]), bk = pick([true, false]);
      return soru(`${z(a)} ${ak ? "≤" : "<"} x ${bk ? "≤" : "<"} ${z(b)} eşitsizliğinin aralık gösterimi hangisidir?`, par(a, b, ak, bk), [par(a, b, !ak, bk), par(a, b, ak, !bk), par(a, b, !ak, !bk)], ak ? "Dahil uç köşeli parantez." : "Dahil olmayan uç normal parantez."); }
  ]);
  U.mat1k4 = tip([
    () => { const a = r(1, 4), b = r(1, 9), s = pick([1, -1]);
      return soru(`(${a === 1 ? "" : a}x ${s > 0 ? "+" : "−"} ${b})² ifadesinin açılımı hangisidir?`, `${a * a === 1 ? "" : a * a}x² ${s > 0 ? "+" : "−"} ${2 * a * b}x + ${b * b}`, [`${a * a === 1 ? "" : a * a}x² + ${b * b}`, `${a * a === 1 ? "" : a * a}x² ${s > 0 ? "+" : "−"} ${a * b}x + ${b * b}`, `${a === 1 ? "" : a}x² ${s > 0 ? "+" : "−"} ${2 * a * b}x + ${b * b}`], "(a ± b)² = a² ± 2ab + b²"); },
    () => { const m = r(3, 9) * 10, d = r(1, 4);
      return soru(`${m + d} · ${m - d} işleminin sonucu kaçtır?`, m * m - d * d, [m * m + d * d, m * m, m * m - 2 * d], `(${m} + ${d})(${m} − ${d}) = ${m * m} − ${d * d}`); },
    () => { const a = r(1, 9), b = r(1, 9); if (a === b) return null; const t = a + b, c = a * b;
      return soru(`a + b = ${t} ve a · b = ${c} ise a² + b² kaçtır?`, t * t - 2 * c, [t * t, t * t + 2 * c, t * t - c], `(a + b)² − 2ab = ${t * t} − ${2 * c}`); }
  ]);
  U.mat2k1 = tip([
    () => { const a = r(-5, 5) || 2, b = r(-9, 9) || 4, x = r(-6, 6);
      return soru(`f(x) = ${z(a)}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} ise f(${z(x)}) kaçtır?`, z(a * x + b), [z(a * x - b), z(a + x + b), z(-a * x + b)], `${z(a)}·(${z(x)}) ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${z(a * x + b)}`); },
    () => { const a = r(-3, 3), b = r(-5, 5), x = r(-4, 4);
      return soru(`f(x) = x² ${a < 0 ? "−" : "+"} ${Math.abs(a)}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} ise f(${z(x)}) kaçtır?`, z(x * x + a * x + b), [z(-x * x + a * x + b), z(x * x - a * x + b), z(2 * x + a * x + b)], `${x * x} ${a * x < 0 ? "−" : "+"} ${Math.abs(a * x)} ${b < 0 ? "−" : "+"} ${Math.abs(b)}`); }
  ]);
  U.mat2k2 = tip([
    () => { const a = r(-5, 5) || 3, x1 = r(-4, 3), dx = r(1, 4), b = r(-8, 8), y1 = a * x1 + b, y2 = a * (x1 + dx) + b;
      return soru(`(${z(x1)}, ${z(y1)}) ve (${z(x1 + dx)}, ${z(y2)}) noktalarından geçen doğrusal fonksiyonun değişim oranı kaçtır?`, z(a), [z(-a), z(dx), z(y2 - y1)], `(${z(y2)} − ${z(y1)})/(${dx}) = ${z(a)}`); },
    () => { const bas = r(10, 50) * 10, h = r(5, 30), t = r(2, 10);
      return soru(`${bas} litrelik depodan dakikada ${h} litre su boşalıyor. ${t} dakika sonra depoda kaç litre su kalır?`, bas - h * t, [bas + h * t, h * t, bas - h - t], `f(t) = ${bas} − ${h}t → ${bas - h * t}`); },
    () => { const a = r(1, 6) * pick([1, -1]), x0 = r(-5, 5) || 2, b = -a * x0;
      return soru(`f(x) = ${z(a)}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} doğrusu x eksenini hangi noktada keser?`, `(${z(x0)}, 0)`, [`(0, ${z(b)})`, `(${z(-x0)}, 0)`, `(${z(b)}, 0)`], `f(x) = 0 → x = ${z(x0)}`); }
  ]);
})();
