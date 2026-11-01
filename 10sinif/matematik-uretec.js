// 10. sınıf Matematik soru üreteçleri (sayılar, trigonometri, istatistik, fonksiyonlar, sayma, olasılık)
window.URETEC = window.URETEC || {};
(function () {
  const U = window.URETEC;
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const z = (n) => (n < 0 ? "−" + Math.abs(n) : String(n));
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const kesir = (a, b) => { const g = gcd(a, b); a /= g; b /= g; if (b < 0) { a = -a; b = -b; } return b === 1 ? z(a) : `${z(a)}/${b}`; };
  const fakt = (n) => (n <= 1 ? 1 : n * fakt(n - 1));
  const C = (n, k) => fakt(n) / (fakt(k) * fakt(n - k));
  function soru(metin, dogru, yanlislar, cozum) {
    const s = [String(dogru)];
    for (const y of yanlislar) { const t = String(y); if (s.length < 4 && t && !s.includes(t) && !/NaN|undefined|Infinity/.test(t)) s.push(t); }
    for (let i = 0; s.length < 4 && i < 40; i++) { const n = Number(String(dogru).replace("−", "-")); if (isNaN(n)) break; const t = z(n + pick([-1, 1]) * r(1, 9)); if (!s.includes(t) && Number(t.replace("−", "-")) >= 0) s.push(t); }
    return s.length === 4 ? { soru: metin, secenekler: s, dogru: 0, cozum } : null;
  }
  const tip = (l) => () => { for (let i = 0; i < 30; i++) { const q = pick(l)(); if (q) return q; } return null; };

  U.mat1k1 = tip([
    () => { const g = r(2, 9), a = g * r(2, 7), b = g * r(2, 7); if (a === b) return null; const e = gcd(a, b), k = (a * b) / e;
      return soru(`EBOB(${a}, ${b}) kaçtır?`, e, [k, e * 2, Math.min(a, b)], `Ortak asal çarpanların en küçük üslüleri → ${e}`); },
    () => { const a = r(4, 18), b = r(4, 18); if (a === b) return null; const e = gcd(a, b), k = (a * b) / e;
      return soru(`EKOK(${a}, ${b}) kaçtır?`, k, [a * b === k ? k * 2 : a * b, e, k / 2 === Math.floor(k / 2) ? k / 2 : k + a], `a·b / EBOB = ${a * b} / ${e} = ${k}`); },
    () => { const p = r(1, 4), q = r(1, 3), t = r(0, 2), n = 2 ** p * 3 ** q * 5 ** t, d = (p + 1) * (q + 1) * (t + 1);
      return soru(`${n} sayısının pozitif bölen sayısı kaçtır?`, d, [p * q * (t || 1), d + 2, (p + 1) * (q + 1)], `${n} = 2^${p}·3^${q}${t ? "·5^" + t : ""} → ${d}`); }
  ]);
  U.mat2k1 = tip([
    () => { const [a, b, c] = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10]]), f = pick(["sin", "cos", "tan"]);
      const v = { sin: kesir(a, c), cos: kesir(b, c), tan: kesir(a, b) }[f];
      return soru(`Dik kenarları ${a} ve ${b} olan dik üçgende ${a} birimlik kenarın karşısındaki α açısı için ${f} α kaçtır?`, v, [kesir(b, c), kesir(a, c), kesir(b, a), kesir(c, a)].filter((x) => x !== v), `Hipotenüs ${c}`); },
    () => { const h = r(2, 20), aci = pick([30, 60]);
      return aci === 30 ? soru(`Hipotenüsü ${2 * h} olan dik üçgende 30°'lik açının karşısındaki kenar kaçtır?`, h, [2 * h, h * 3, h + 2], "30°'nin karşısı hipotenüsün yarısı")
        : soru(`Hipotenüsü ${2 * h} olan dik üçgende 60°'lik açıya komşu dik kenar kaçtır?`, h, [2 * h, h * 3, h + 2], "cos 60° = 1/2"); }
  ]);
  U.mat3k1 = tip([
    () => { const n = pick([5, 7]), v = Array.from({ length: n }, () => r(1, 20)).sort((x, y) => x - y), med = v[(n - 1) / 2];
      const ort = v.reduce((a, x) => a + x, 0) / n;
      return soru(`${karistirYaz(v)} veri grubunun medyanı kaçtır?`, med, [Number.isInteger(ort) && ort !== med ? ort : med + 1, v[0], v[n - 1]], `Sıralı: ${v.join(", ")} → ortadaki ${med}`); },
    () => { const n = 5, ort = r(4, 15), v = Array.from({ length: n - 1 }, () => r(1, 20)); const son = ort * n - v.reduce((a, x) => a + x, 0); if (son < 0 || son > 40) return null; v.push(son);
      return soru(`${v.join(", ")} veri grubunun aritmetik ortalaması kaçtır?`, ort, [ort + 1, ort - 1, Math.max(...v) - Math.min(...v)], `Toplam ${ort * n} / ${n}`); }
  ]);
  function karistirYaz(v) { return v.slice().sort(() => Math.random() - 0.5).join(", "); }
  U.mat4k1 = tip([
    () => { const a = pick([1, -1, 2, -2]), rr = r(-5, 5), k = r(-9, 9), b = -2 * a * rr, c = a * rr * rr + k;
      if (!b || !c) return null;
      const f = `${a === 1 ? "" : a === -1 ? "−" : z(a)}x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)}`;
      return soru(`f(x) = ${f} fonksiyonunun ${a > 0 ? "en küçük" : "en büyük"} değeri kaçtır?`, z(k), [z(rr), z(c), z(-k)], `r = ${z(rr)}, f(${z(rr)}) = ${z(k)}`); },
    () => { const x1 = r(-6, 6), x2 = r(-6, 6), b = -(x1 + x2), c = x1 * x2; if (!b || !c) return null;
      return soru(`x² ${b < 0 ? "−" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)} = 0 denkleminin kökler toplamı kaçtır?`, z(-b), [z(b), z(c), z(-c)], "x₁ + x₂ = −b/a"); }
  ]);
  U.mat5k1 = tip([
    () => { const n = r(4, 7); return soru(`${n} kişi bir sıraya kaç farklı biçimde dizilebilir?`, fakt(n), [n * n, fakt(n - 1), n * (n - 1)], `${n}! = ${fakt(n)}`); },
    () => { const n = r(5, 10), k = r(2, 3); return soru(`${n} kişiden ${k} kişilik bir grup kaç farklı biçimde seçilir?`, C(n, k), [C(n, k) * fakt(k), n * k, C(n, k - 1)], `C(${n}, ${k}) = ${C(n, k)}`); },
    () => { const n = r(5, 10); return soru(`${n} kişilik bir kulüpten bir başkan ve bir sekreter kaç farklı biçimde seçilir?`, n * (n - 1), [C(n, 2), n * n, 2 * n], `P(${n}, 2) = ${n}·${n - 1}`); }
  ]);
  U.mat5k2 = tip([
    () => { const k = r(2, 7), m = r(2, 7), t = k + m; return soru(`Torbada ${k} kırmızı ve ${m} mavi bilye vardır. Rastgele çekilen bir bilyenin mavi olma olasılığı kaçtır?`, kesir(m, t), [kesir(k, t), kesir(m, k), kesir(1, t)], `${m}/${t}`); },
    () => { const top = r(2, 12), say = 6 - Math.abs(7 - top); return soru(`İki zar atıldığında üst yüzlerdeki sayıların toplamının ${top} olma olasılığı kaçtır?`, kesir(say, 36), [kesir(1, 6), kesir(1, 12), kesir(say + 1, 36)].filter((x) => x !== kesir(say, 36)), `36 durumdan ${say} tanesi`); }
  ]);
})();
