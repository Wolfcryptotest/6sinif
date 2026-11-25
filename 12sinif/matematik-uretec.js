// 12. sınıf Matematik soru üreteçleri (logaritma, diziler, türev, integral)
window.URETEC = window.URETEC || {};
(function () {
  const U = window.URETEC;
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const z = (n) => (n < 0 ? "−" + Math.abs(n) : String(n));
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
  const alt = (n) => String(n).split("").map((c) => "₀₁₂₃₄₅₆₇₈₉"[c]).join("");
  const ust = (n) => String(n).split("").map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[c]).join("");

  U.mat1k1 = tip([
    () => { const a = pick([2, 3, 5, 10]), k = r(1, a === 10 ? 4 : a === 2 ? 7 : 4); return soru(`log${a === 10 ? "" : alt(a)} ${a ** k} kaçtır?`, k, [k + 1, k - 1 || k + 2, Y(a * k, "k:logaritmanın, taban ile üssün çarpımı olduğu sanıldı")], `${a}${ust(k)} = ${a ** k}`); },
    () => { const a = pick([2, 3]), k = r(1, 4), c = r(1, 9); return soru(`log${alt(a)} (x − ${c}) = ${k} denkleminin çözümü kaçtır?`, a ** k + c, [Y(a ** k - c, "d:sabit terim karşıya geçerken işareti değiştirilmedi"), Y(a * k + c, "k:üs alınacağına taban ile üs çarpıldı"), Y(a ** k, "d:yalnızca logaritmanın içi bulundu, sabit terim eklenmedi")], `x − ${c} = ${a}${ust(k)} = ${a ** k}`); }
  ]);
  U.mat2k1 = tip([
    () => { const a1 = r(-5, 10), d = pick([-3, -2, 2, 3, 4, 5]), n = r(5, 15); return soru(`İlk terimi ${z(a1)}, ortak farkı ${z(d)} olan aritmetik dizinin ${n}. terimi kaçtır?`, z(a1 + (n - 1) * d), [Y(z(a1 + n * d), "k:ortak fark n − 1 yerine n kez eklendi"), z(a1 * n * d), Y(z(a1 + (n - 2) * d), "d:bir terim eksik sayıldı")], `a${n} = a₁ + ${n - 1}·d`); },
    () => { const a1 = r(1, 5), q = pick([2, 3]), n = r(3, 6); return soru(`İlk terimi ${a1}, ortak çarpanı ${q} olan geometrik dizinin ${n}. terimi kaçtır?`, a1 * q ** (n - 1), [Y(a1 * q ** n, "k:üs n − 1 yerine n alındı"), Y(a1 * q * (n - 1), "k:üs almak yerine çarpma yapıldı"), Y(a1 + q * (n - 1), "k:geometrik dizi aritmetik dizi gibi hesaplandı")], `a₁·r${ust(n - 1)}`); },
    () => { const n = r(10, 60); return soru(`1 + 2 + 3 + … + ${n} toplamı kaçtır?`, (n * (n + 1)) / 2, [Y(n * (n + 1), "d:2'ye bölünmedi"), Y((n * (n - 1)) / 2, "d:formülde n + 1 yerine n − 1 alındı"), n * n], `n(n+1)/2`); }
  ]);
  U.mat3k1 = tip([
    () => { const a = r(2, 9), n = r(2, 6); return soru(`f(x) = ${a}x${ust(n)} ise f′(x) hangisidir?`, `${a * n}x${n - 1 === 1 ? "" : ust(n - 1)}`, [Y(`${a}x${ust(n - 1)}`, "k:üs katsayıyla çarpılmadı"), Y(`${a * n}x${ust(n)}`, "k:üs 1 azaltılmadı"), Y(`${n}x${n - 1 === 1 ? "" : ust(n - 1)}`, "d:katsayı unutuldu")], `n·a·xⁿ⁻¹`); },
    () => { const a = r(1, 4), b = r(-6, 6), c = r(-9, 9), x = r(-3, 4); if (Math.abs(b) < 2 || !c) return null; return soru(`f(x) = ${a === 1 ? "" : a}x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)} ise f′(${z(x)}) kaçtır?`, z(2 * a * x + b), [Y(z(a * x * x + b * x + c), "k:türev yerine fonksiyonun değeri hesaplandı"), Y(z(2 * a * x), "d:bx teriminin türevi (b) unutuldu"), Y(z(a * x + b), "k:kare teriminin türevinde 2 ile çarpılmadı")], `f′(x) = ${2 * a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}`); }
  ]);
  U.mat3k2 = tip([
    () => { const a = pick([-1, -2, 1, 2]), rr = r(-5, 5), k = r(-9, 9), b = -2 * a * rr, c = a * rr * rr + k;
      if (!b || !c) return null;
      return soru(`f(x) = ${a === 1 ? "" : a === -1 ? "−" : z(a)}x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)} fonksiyonunun ${a > 0 ? "en küçük" : "en büyük"} değeri kaçtır?`, z(k), [Y(z(rr), "k:en küçük/en büyük değer yerine f′(x) = 0 yapan x yazıldı"), Y(z(c), "k:en küçük/en büyük değerin sabit terim olduğu sanıldı"), Y(z(-k), "d:sonucun işareti yanlış alındı")], `f′(x) = 0 → x = ${z(rr)}, f(${z(rr)}) = ${z(k)}`); }
  ]);
  U.mat4k1 = tip([
    () => { const n = r(1, 3), b = r(1, 3), k = n + 1; return soru(`∫₀${"₀₁₂₃"[b] && ["", "¹", "²", "³"][b]} ${k}x${n === 1 ? "" : ust(n)} dx kaçtır?`, b ** k, [Y(b ** n, "k:integral alınırken üs 1 artırılmadı"), Y(k * b ** k, "d:katsayı yeni üsse bölünmedi"), b ** k + 1], `x${ust(k)} |₀ = ${b ** k}`); },
    () => { const a = r(2, 9), n = r(1, 4), k = n + 1; if ((a % k) !== 0) return null; return soru(`∫ ${a}x${n === 1 ? "" : ust(n)} dx hangisidir?`, `${a / k === 1 ? "" : a / k}x${ust(k)} + C`, [Y(`${a * n}x${n - 1 > 1 ? ust(n - 1) : ""} + C`, "k:integral yerine türev alındı"), Y(`${a}x${ust(k)} + C`, "k:üs artırıldı ama yeni üsse bölünmedi"), Y(`${a * k}x${ust(k)} + C`, "k:yeni üsse bölmek yerine çarpıldı")], `${a}·x${ust(k)}/${k}`); }
  ]);
})();
