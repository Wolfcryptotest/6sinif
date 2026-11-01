// 11. sınıf Matematik soru üreteçleri (analitik geometri, parabol, olasılık)
window.URETEC = window.URETEC || {};
(function () {
  const U = window.URETEC;
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const z = (n) => (n < 0 ? "−" + Math.abs(n) : String(n));
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const kesir = (a, b) => { const g = gcd(a, b); a /= g; b /= g; if (b < 0) { a = -a; b = -b; } return b === 1 ? z(a) : `${z(a)}/${b}`; };
  function soru(metin, dogru, yanlislar, cozum) {
    const s = [String(dogru)];
    for (const y of yanlislar) { const t = String(y); if (s.length < 4 && t && !s.includes(t) && !/NaN|undefined|Infinity/.test(t)) s.push(t); }
    for (let i = 0; s.length < 4 && i < 40; i++) { const n = Number(String(dogru).replace("−", "-")); if (isNaN(n)) break; const t = z(n + pick([-1, 1]) * r(1, 9)); if (!s.includes(t)) s.push(t); }
    return s.length === 4 ? { soru: metin, secenekler: s, dogru: 0, cozum } : null;
  }
  const tip = (l) => () => { for (let i = 0; i < 30; i++) { const q = pick(l)(); if (q) return q; } return null; };

  U.mat2k1 = tip([
    () => { const [a, b, c] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]]), x = r(-5, 5), y = r(-5, 5), sx = pick([1, -1]), sy = pick([1, -1]);
      return soru(`A(${z(x)}, ${z(y)}) ve B(${z(x + sx * a)}, ${z(y + sy * b)}) noktaları arasındaki uzaklık kaçtır?`, c, [a + b, c + 1, Math.abs(a - b) + c], `√(${a}² + ${b}²) = ${c}`); },
    () => { const x1 = r(-8, 8), y1 = r(-8, 8), x2 = x1 + 2 * r(-5, 5), y2 = y1 + 2 * r(-5, 5);
      return soru(`A(${z(x1)}, ${z(y1)}) ve B(${z(x2)}, ${z(y2)}) noktalarının orta noktası hangisidir?`, `(${z((x1 + x2) / 2)}, ${z((y1 + y2) / 2)})`, [`(${z(x1 + x2)}, ${z(y1 + y2)})`, `(${z((x2 - x1) / 2)}, ${z((y2 - y1) / 2)})`, `(${z((y1 + y2) / 2)}, ${z((x1 + x2) / 2)})`], "Koordinatların ortalaması."); },
    () => { const m = pick([-3, -2, -1, 1, 2, 3, 4]), x0 = r(-4, 4), y0 = r(-6, 6), n = y0 - m * x0;
      return soru(`Eğimi ${z(m)} olan ve (${z(x0)}, ${z(y0)}) noktasından geçen doğrunun denklemi hangisidir?`, `y = ${z(m)}x ${n < 0 ? "−" : "+"} ${Math.abs(n)}`, [`y = ${z(m)}x ${n < 0 ? "+" : "−"} ${Math.abs(n)}`, `y = ${z(-m)}x ${n < 0 ? "−" : "+"} ${Math.abs(n)}`, `y = ${z(m)}x ${y0 < 0 ? "−" : "+"} ${Math.abs(y0)}`], `y − ${z(y0)} = ${z(m)}(x − ${z(x0)})`); },
    () => { const m = pick([-4, -3, -2, 2, 3, 4, 5]);
      return soru(`y = ${z(m)}x + 1 doğrusuna dik olan doğrunun eğimi kaçtır?`, kesir(-1, m), [z(m), z(-m), kesir(1, m)], "m₁ · m₂ = −1"); }
  ]);
  U.mat3k1 = tip([
    () => { const rr = r(-5, 5) || 2, k = r(-9, 9), a = pick([1, -1, 2]), b = -2 * a * rr, c = a * rr * rr + k;
      const f = `${a === 1 ? "" : a === -1 ? "−" : a}x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)}`;
      return soru(`f(x) = ${f} parabolünün tepe noktası hangisidir?`, `(${z(rr)}, ${z(k)})`, [`(${z(-rr)}, ${z(k)})`, `(${z(rr)}, ${z(c)})`, `(${z(k)}, ${z(rr)})`], `r = −b/2a = ${z(rr)}, k = f(${z(rr)}) = ${z(k)}`); }
  ]);
  U.mat4k2 = tip([
    () => { const k = r(2, 6), m = r(2, 6), t = k + m;
      return soru(`Torbada ${k} kırmızı, ${m} mavi bilye var. Geri koymadan çekilen iki bilyenin ikisinin de kırmızı olma olasılığı kaçtır?`, kesir(k * (k - 1), t * (t - 1)), [kesir(k * k, t * t), kesir(k, t), kesir(k - 1, t - 1)], `${k}/${t} · ${k - 1}/${t - 1}`); }
  ]);
})();
