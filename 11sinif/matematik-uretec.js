// 11. sınıf Matematik soru üreteçleri (analitik geometri, parabol, olasılık)
window.URETEC = window.URETEC || {};
(function () {
  const U = window.URETEC;
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const z = (n) => (n < 0 ? "−" + Math.abs(n) : String(n));
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const kesir = (a, b) => { const g = gcd(a, b); a /= g; b /= g; if (b < 0) { a = -a; b = -b; } return b === 1 ? z(a) : `${z(a)}/${b}`; };
  // Yanılgı etiketli yanlış şık (A4): Y(değer, "d:...") dikkat hatası, Y(değer, "k:...") kavram yanılgısı.
  // Öğrenci o şıkkı seçerse etiket Bilge'nin teşhisi olur (ustalik.js → hataKaydet).
  const Y = (v, e) => ({ v, e });
  function soru(metin, dogru, yanlislar, cozum) {
    const s = [String(dogru)], yan = {};
    for (const y of yanlislar) { const et = y && typeof y === "object" ? y.e : null, t = String(et ? y.v : y); if (s.length < 4 && t && !s.includes(t) && !/NaN|undefined|Infinity/.test(t)) { s.push(t); if (et) yan[t] = et; } }
    for (let i = 0; s.length < 4 && i < 40; i++) { const n = Number(String(dogru).replace("−", "-")); if (isNaN(n)) break; const t = z(n + pick([-1, 1]) * r(1, 9)); if (!s.includes(t)) s.push(t); }
    if (s.length !== 4) return null;
    const q = { soru: metin, secenekler: s, dogru: 0, cozum };
    if (Object.keys(yan).length) q.yanilgi = yan;
    return q;
  }
  const tip = (l) => () => { for (let i = 0; i < 30; i++) { const q = pick(l)(); if (q) return q; } return null; };

  U.mat2k1 = tip([
    () => { const [a, b, c] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]]), x = r(-5, 5), y = r(-5, 5), sx = pick([1, -1]), sy = pick([1, -1]);
      return soru(`A(${z(x)}, ${z(y)}) ve B(${z(x + sx * a)}, ${z(y + sy * b)}) noktaları arasındaki uzaklık kaçtır?`, c, [Y(a + b, "k:uzaklık, koordinat farklarının toplamı sanıldı"), c + 1, Math.abs(a - b) + c], `√(${a}² + ${b}²) = ${c}`); },
    () => { const x1 = r(-8, 8), y1 = r(-8, 8), x2 = x1 + 2 * r(-5, 5), y2 = y1 + 2 * r(-5, 5);
      return soru(`A(${z(x1)}, ${z(y1)}) ve B(${z(x2)}, ${z(y2)}) noktalarının orta noktası hangisidir?`, `(${z((x1 + x2) / 2)}, ${z((y1 + y2) / 2)})`, [Y(`(${z(x1 + x2)}, ${z(y1 + y2)})`, "d:koordinatların toplamı 2'ye bölünmedi"), Y(`(${z((x2 - x1) / 2)}, ${z((y2 - y1) / 2)})`, "k:orta nokta için koordinatlar toplanacağına çıkarıldı"), Y(`(${z((y1 + y2) / 2)}, ${z((x1 + x2) / 2)})`, "d:apsis ile ordinat yer değiştirdi")], "Koordinatların ortalaması."); },
    () => { const m = pick([-3, -2, -1, 1, 2, 3, 4]), x0 = r(-4, 4), y0 = r(-6, 6), n = y0 - m * x0;
      return soru(`Eğimi ${z(m)} olan ve (${z(x0)}, ${z(y0)}) noktasından geçen doğrunun denklemi hangisidir?`, `y = ${z(m)}x ${n < 0 ? "−" : "+"} ${Math.abs(n)}`, [Y(`y = ${z(m)}x ${n < 0 ? "+" : "−"} ${Math.abs(n)}`, "d:sabit terimin işareti yanlış bulundu"), Y(`y = ${z(-m)}x ${n < 0 ? "−" : "+"} ${Math.abs(n)}`, "d:eğimin işareti yanlış yazıldı"), Y(`y = ${z(m)}x ${y0 < 0 ? "−" : "+"} ${Math.abs(y0)}`, "k:noktanın ordinatı, doğrunun y eksenini kestiği değer sanıldı")], `y − ${z(y0)} = ${z(m)}(x − ${z(x0)})`); },
    () => { const m = pick([-4, -3, -2, 2, 3, 4, 5]);
      return soru(`y = ${z(m)}x + 1 doğrusuna dik olan doğrunun eğimi kaçtır?`, kesir(-1, m), [Y(z(m), "k:dik doğruların eğimlerinin eşit olduğu sanıldı (bu, paralellik koşulu)"), Y(z(-m), "k:dik eğim için yalnızca işaret değiştirildi, ters çevrilmedi"), Y(kesir(1, m), "d:eğim ters çevrildi ama işareti değiştirilmedi")], "m₁ · m₂ = −1"); }
  ]);
  U.mat3k1 = tip([
    () => { const rr = r(-5, 5) || 2, k = r(-9, 9), a = pick([1, -1, 2]), b = -2 * a * rr, c = a * rr * rr + k;
      const f = `${a === 1 ? "" : a === -1 ? "−" : a}x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)}`;
      return soru(`f(x) = ${f} parabolünün tepe noktası hangisidir?`, `(${z(rr)}, ${z(k)})`, [Y(`(${z(-rr)}, ${z(k)})`, "d:tepe noktasının apsisi (−b/2a) hesaplanırken işaret hatası yapıldı"), Y(`(${z(rr)}, ${z(c)})`, "k:tepe noktasının ordinatı sabit terim sanıldı"), Y(`(${z(k)}, ${z(rr)})`, "d:koordinatlar yer değiştirdi")], `r = −b/2a = ${z(rr)}, k = f(${z(rr)}) = ${z(k)}`); }
  ]);
  U.mat4k2 = tip([
    () => { const k = r(2, 6), m = r(2, 6), t = k + m;
      return soru(`Torbada ${k} kırmızı, ${m} mavi bilye var. Geri koymadan çekilen iki bilyenin ikisinin de kırmızı olma olasılığı kaçtır?`, kesir(k * (k - 1), t * (t - 1)), [Y(kesir(k * k, t * t), "k:geri koymadan çekilişte ikinci çekilişte bilye sayısı azaltılmadı"), Y(kesir(k, t), "d:yalnızca birinci çekilişin olasılığı yazıldı"), Y(kesir(k - 1, t - 1), "d:yalnızca ikinci çekilişin olasılığı yazıldı")], `${k}/${t} · ${k - 1}/${t - 1}`); }
  ]);
})();
