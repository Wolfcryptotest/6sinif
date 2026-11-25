// 9. sınıf Matematik soru üreteçleri
window.URETEC = window.URETEC || {};
(function () {
  const U = window.URETEC;
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const z = (n) => (n < 0 ? "−" + Math.abs(n) : String(n));
  const SUP = { "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
  const us = (n) => String(n).split("").map((c) => SUP[c]).join("");
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
  const par = (a, b, ak, bk) => `${ak ? "[" : "("}${z(a)}, ${z(b)}${bk ? "]" : ")"}`;

  U.mat1k1 = tip([
    () => { const a = pick([2, 3, 5]), m = r(1, 5), n = r(2, 3), k = r(-4, 4), s = m * n + k;
      return soru(`(${a}${us(m)})${us(n)} · ${a}${us(k)} işleminin sonucu hangisidir?`, `${a}${us(s)}`, [Y(`${a}${us(m + n + k)}`, "k:kuvvetin kuvvetinde üsler çarpılacağına toplandı"), Y(`${a}${us(m * n * k)}`, "k:aynı tabanlı çarpmada üsler toplanacağına çarpıldı"), Y(`${a}${us(m * n - k)}`, "k:aynı tabanlı çarpmada üsler toplanacağına çıkarıldı")], `(${a}${us(m)})${us(n)} = ${a}${us(m * n)}; üsler toplanır: ${m * n} + ${z(k)} = ${s}`); },
    () => { const [b, n] = pick([[2, 3], [3, 2], [2, 4], [5, 2], [3, 3], [10, 3]]), m = r(1, 3), kok = pick([2, 3]), sayi = Math.pow(b, kok * m);
      if (sayi > 1e6) return null;
      return soru(`${kok === 2 ? "√" : "∛"}${sayi} ifadesinin değeri kaçtır?`, Math.pow(b, m), [Y(Math.pow(b, m + 1), "d:üs bir fazla alındı"), sayi % kok === 0 ? Y(sayi / kok, "k:kök almak, sayıyı kökün derecesine bölmek sanıldı") : Math.pow(b, m) * 3, Math.pow(b, m) * 2], `${sayi} = ${b}${us(kok * m)} → ${b}${us(m)} = ${Math.pow(b, m)}`); },
    () => { const b = pick([2, 3, 5, 6, 7]), x = r(1, 6), y = r(1, 6), w = r(1, 4); const s = x + y - w;
      return soru(`√${x * x * b} + √${y * y * b} − √${w * w * b} işleminin sonucu hangisidir?`, s === 0 ? "0" : `${s === 1 ? "" : s === -1 ? "−" : z(s)}√${b}`, [Y(`√${(x * x + y * y - w * w) * b}`, "k:köklü ifadeler sadeleştirilmeden kök içleri toplandı"), Y(`${x + y + w}√${b}`, "d:çıkarılacak terim toplandı"), `${x * y}√${b}`], `${x}√${b} + ${y}√${b} − ${w}√${b}`); }
  ]);
  U.mat1k2 = tip([
    () => { const a = r(-8, 4), b = a + r(3, 9), ak = pick([true, false]), bk = pick([true, false]); const n = b - a - 1 + (ak ? 1 : 0) + (bk ? 1 : 0);
      return soru(`${par(a, b, ak, bk)} aralığında kaç tam sayı vardır?`, n, [Y(n + 1, "d:uç noktaların dahil/hariç olması yanlış sayıldı"), Y(n - 1, "d:uç noktaların dahil/hariç olması yanlış sayıldı"), Y(b - a, "k:tam sayı sayısının iki ucun farkı olduğu sanıldı")], `${ak ? z(a) + " dahil" : z(a) + " hariç"}, ${bk ? z(b) + " dahil" : z(b) + " hariç"} → ${n}`); },
    () => { const a = r(-6, 0), b = a + r(4, 8), c = a + r(1, 3), d = b + r(1, 5);
      return soru(`A = [${z(a)}, ${z(b)}) ve B = (${z(c)}, ${z(d)}] ise A ∩ B hangisidir?`, `(${z(c)}, ${z(b)})`, [Y(`[${z(c)}, ${z(b)}]`, "k:açık (hariç) uçlar kapalı alındı"), Y(`[${z(a)}, ${z(d)}]`, "k:kesişim yerine birleşim alındı"), Y(`(${z(a)}, ${z(c)})`, "k:ortak kısım yerine yalnızca A'da olan kısım alındı")], `Ortak kısım: ${z(c)}'den büyük, ${z(b)}'den küçük.`); },
    () => { const a = r(-9, 9), b = a + r(2, 9), ak = pick([true, false]), bk = pick([true, false]);
      return soru(`${z(a)} ${ak ? "≤" : "<"} x ${bk ? "≤" : "<"} ${z(b)} eşitsizliğinin aralık gösterimi hangisidir?`, par(a, b, ak, bk), [par(a, b, !ak, bk), par(a, b, ak, !bk), par(a, b, !ak, !bk)].map((x) => Y(x, "k:dahil uç için köşeli, hariç uç için normal parantez kuralı karıştırıldı")), ak ? "Dahil uç köşeli parantez." : "Dahil olmayan uç normal parantez."); }
  ]);
  U.mat1k4 = tip([
    () => { const a = r(1, 4), b = r(1, 9), s = pick([1, -1]);
      return soru(`(${a === 1 ? "" : a}x ${s > 0 ? "+" : "−"} ${b})² ifadesinin açılımı hangisidir?`, `${a * a === 1 ? "" : a * a}x² ${s > 0 ? "+" : "−"} ${2 * a * b}x + ${b * b}`, [Y(`${a * a === 1 ? "" : a * a}x² + ${b * b}`, "k:(a ± b)² = a² + b² sanıldı (2ab terimi unutuldu)"), Y(`${a * a === 1 ? "" : a * a}x² ${s > 0 ? "+" : "−"} ${a * b}x + ${b * b}`, "d:ortadaki terim 2 ile çarpılmadı"), Y(`${a === 1 ? "" : a}x² ${s > 0 ? "+" : "−"} ${2 * a * b}x + ${b * b}`, "d:ilk terimin katsayısının karesi alınmadı")], "(a ± b)² = a² ± 2ab + b²"); },
    () => { const m = r(3, 9) * 10, d = r(1, 4);
      return soru(`${m + d} · ${m - d} işleminin sonucu kaçtır?`, m * m - d * d, [Y(m * m + d * d, "k:iki kare farkında d² eklendi (çıkarılmalı)"), Y(m * m, "d:sondaki d² terimi çıkarılmadı"), Y(m * m - 2 * d, "k:ikinci terimin karesi yerine 2 katı alındı")], `(${m} + ${d})(${m} − ${d}) = ${m * m} − ${d * d}`); },
    () => { const a = r(1, 9), b = r(1, 9); if (a === b) return null; const t = a + b, c = a * b;
      return soru(`a + b = ${t} ve a · b = ${c} ise a² + b² kaçtır?`, t * t - 2 * c, [Y(t * t, "k:(a + b)² = a² + b² sanıldı"), Y(t * t + 2 * c, "k:2ab çıkarılacağına eklendi"), Y(t * t - c, "d:2ab yerine ab çıkarıldı")], `(a + b)² − 2ab = ${t * t} − ${2 * c}`); }
  ]);
  U.mat2k1 = tip([
    () => { const a = r(-5, 5) || 2, b = r(-9, 9) || 4, x = r(-6, 6);
      return soru(`f(x) = ${z(a)}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} ise f(${z(x)}) kaçtır?`, z(a * x + b), [Y(z(a * x - b), "d:sabit terimin işareti değiştirildi"), Y(z(a + x + b), "k:ax çarpım yerine toplam sanıldı"), Y(z(-a * x + b), "d:sayı yerine konurken işaret hatası yapıldı")], `${z(a)}·(${z(x)}) ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${z(a * x + b)}`); },
    () => { const a = r(-3, 3), b = r(-5, 5), x = r(-4, 4);
      return soru(`f(x) = x² ${a < 0 ? "−" : "+"} ${Math.abs(a)}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} ise f(${z(x)}) kaçtır?`, z(x * x + a * x + b), [x < 0 ? Y(z(-x * x + a * x + b), "k:negatif sayının karesi negatif sanıldı") : Y(z(-x * x + a * x + b), "d:kare teriminin işareti yanlış alındı"), Y(z(x * x - a * x + b), "d:ax teriminin işareti yanlış alındı"), Y(z(2 * x + a * x + b), "k:karesi alınacağına 2 ile çarpıldı (x² yerine 2x)")], `${x * x} ${a * x < 0 ? "−" : "+"} ${Math.abs(a * x)} ${b < 0 ? "−" : "+"} ${Math.abs(b)}`); }
  ]);
  U.mat2k2 = tip([
    () => { const a = r(-5, 5) || 3, x1 = r(-4, 3), dx = r(1, 4), b = r(-8, 8), y1 = a * x1 + b, y2 = a * (x1 + dx) + b;
      return soru(`(${z(x1)}, ${z(y1)}) ve (${z(x1 + dx)}, ${z(y2)}) noktalarından geçen doğrusal fonksiyonun değişim oranı kaçtır?`, z(a), [Y(z(-a), "d:değişim oranının işareti ters alındı"), Y(z(dx), "k:değişim oranı yerine x'teki değişim yazıldı"), Y(z(y2 - y1), "k:değişim oranında y'deki değişim x'teki değişime bölünmedi")], `(${z(y2)} − ${z(y1)})/(${dx}) = ${z(a)}`); },
    () => { const bas = r(10, 50) * 10, h = r(5, 30), t = r(2, 10);
      return soru(`${bas} litrelik depodan dakikada ${h} litre su boşalıyor. ${t} dakika sonra depoda kaç litre su kalır?`, bas - h * t, [Y(bas + h * t, "k:boşalan su çıkarılacağına eklendi"), Y(h * t, "d:kalan yerine boşalan su miktarı yazıldı"), Y(bas - h - t, "k:dakikadaki miktar süreyle çarpılmadı")], `f(t) = ${bas} − ${h}t → ${bas - h * t}`); },
    () => { const a = r(1, 6) * pick([1, -1]), x0 = r(-5, 5) || 2, b = -a * x0;
      return soru(`f(x) = ${z(a)}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} doğrusu x eksenini hangi noktada keser?`, `(${z(x0)}, 0)`, [Y(`(0, ${z(b)})`, "k:x eksenini kestiği nokta ile y eksenini kestiği nokta karıştırıldı"), Y(`(${z(-x0)}, 0)`, "d:denklem çözülürken işaret hatası yapıldı"), Y(`(${z(b)}, 0)`, "k:x eksenini kestiği nokta için sabit terim alındı")], `f(x) = 0 → x = ${z(x0)}`); }
  ]);
})();
