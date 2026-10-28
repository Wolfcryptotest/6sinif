// 7. sınıf Matematik soru üreteçleri (negatif sayılar "−" ile yazılır)
window.URETEC = window.URETEC || {};
(function () {
  const U = window.URETEC;
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const rnz = (a, b) => { let x; do { x = r(a, b); } while (x === 0); return x; };
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const z = (n) => (n < 0 ? "−" + Math.abs(n) : String(n));             // tam sayı yazımı
  const p = (n) => (n < 0 ? `(${z(n)})` : String(n));                   // işlem içinde parantezli
  const pp = (n) => (n < 0 ? `(${z(n)})` : `(+${n})`);
  const virgul = (x, k = 3) => z(+x.toFixed(k)).replace(".", ",");
  // kesir: [pay, payda] sade ve paydası pozitif
  const kes = (a, b) => { if (b < 0) { a = -a; b = -b; } const g = gcd(a, b) || 1; return [a / g, b / g]; };
  const ky = ([a, b]) => (b === 1 ? z(a) : (a < 0 ? "−" : "") + Math.abs(a) + "/" + b);
  const g3 = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  function soru(metin, dogru, yanlislar, cozum, yedek) {
    const nok = (x) => String(x).replace(/^(−?-?\d+)\.(\d+)$/, "$1,$2");
    const s = [nok(dogru)];
    const ekle = (x) => { const t = nok(x); if (s.length < 4 && t && !s.includes(t) && !/NaN|undefined|Infinity/.test(t)) s.push(t); };
    yanlislar.forEach(ekle);
    for (let i = 0; s.length < 4 && i < 60; i++) ekle(yedek ? yedek() : z(Number(String(dogru).replace("−", "-")) + pick([-1, 1]) * r(1, 6)));
    if (s.length < 4) return null;
    return { soru: metin, secenekler: s, dogru: 0, cozum };
  }
  const tip = (l) => () => { for (let i = 0; i < 30; i++) { const q = pick(l)(); if (q) return q; } return null; };

  U.m1k1 = tip([
    () => { const a = rnz(-30, 30), b = rnz(-30, 30); return soru(`${pp(a)} + ${pp(b)} işleminin sonucu kaçtır?`, z(a + b), [z(-(a + b)), z(a - b), z(b - a)], `${z(a)} + ${z(b)} = ${z(a + b)}`); },
    () => { const a = rnz(-30, 30), b = rnz(-30, 30); return soru(`${pp(a)} − ${pp(b)} işleminin sonucu kaçtır?`, z(a - b), [z(a + b), z(b - a), z(-a - b)], `Çıkanın işareti değişir: ${z(a)} + ${p(-b)} = ${z(a - b)}`); },
    () => { const s = rnz(-12, 8), d = r(3, 15), yon = pick(["ısındı", "soğudu"]); const v = yon === "ısındı" ? s + d : s - d; return soru(`Sabah ${z(s)} °C olan hava öğlene kadar ${d} °C ${yon}. Öğlen sıcaklık kaç °C olur?`, z(v), [z(yon === "ısındı" ? s - d : s + d), z(-v), z(v + 2)], `${z(s)} ${yon === "ısındı" ? "+" : "−"} ${d} = ${z(v)}`); },
    () => { const l = [rnz(-15, 15), rnz(-15, 15), rnz(-15, 15), rnz(-15, 15)]; if (new Set(l).size < 4) return null; const k = Math.min(...l); return soru(`${l.map(z).join(", ")} sayılarından en küçüğü hangisidir?`, z(k), l.filter((x) => x !== k).map(z), "Sayı doğrusunda en solda olan sayı en küçüktür."); },
    () => { const a = rnz(-50, 50); return soru(`|${z(a)}| ifadesinin değeri kaçtır?`, String(Math.abs(a)), [z(-Math.abs(a)), String(Math.abs(a) + 1), "0"], "Mutlak değer sıfıra uzaklıktır, negatif olmaz."); },
    () => { const d = r(5, 40), c = r(2, 12); return soru(`Deniz seviyesinin ${d} m altında bulunan dalgıç ${c} m yukarı çıktı. Dalgıcın yeni konumu hangisidir?`, `${z(-d + c)} m`, [`${z(-d - c)} m`, `${z(d - c)} m`, `${z(-d)} m`], `${z(-d)} + ${c} = ${z(-d + c)}`); }
  ]);

  U.m1k2 = tip([
    () => { const a = rnz(-15, 15), b = rnz(-12, 12); return soru(`${pp(a)} · ${pp(b)} işleminin sonucu kaçtır?`, z(a * b), [z(-a * b), z(a + b), z(a * b + (a * b > 0 ? 1 : -1) * Math.abs(a))], "Aynı işaretlilerin çarpımı pozitif, zıt işaretlilerin çarpımı negatiftir."); },
    () => { const b = rnz(-12, 12), q = rnz(-15, 15), a = b * q; return soru(`${pp(a)} ÷ ${pp(b)} işleminin sonucu kaçtır?`, z(q), [z(-q), z(a - b), z(q + 1)], `${z(a)} ÷ ${z(b)} = ${z(q)}`); },
    () => { const t = rnz(-5, 5), u = r(2, 5); if (Math.abs(t) === 1) return null; return soru(`(${z(t)})${["", "", "²", "³", "⁴", "⁵"][u]} ifadesinin değeri kaçtır?`, z(t ** u), [z(-(t ** u)), z(t * u), z(Math.abs(t) ** u + 1)], `${u % 2 ? "Tek" : "Çift"} kuvvet: işaret ${t < 0 && u % 2 ? "negatif" : "pozitif"}.`); },
    () => { const t = r(2, 9); return soru(`−${t}² ifadesinin değeri kaçtır?`, z(-t * t), [z(t * t), z(-2 * t), z(2 * t)], `Kuvvet yalnız ${t}'ye aittir: −(${t * t}).`); },
    () => { const a = rnz(-6, 6), b = rnz(-6, 6), c = rnz(-6, 6); return soru(`${pp(a)} · ${pp(b)} · ${pp(c)} işleminin sonucu kaçtır?`, z(a * b * c), [z(-a * b * c), z(a * b + c), z(a + b + c)], `Negatif çarpan sayısı ${[a, b, c].filter((x) => x < 0).length}: sonuç ${a * b * c < 0 ? "negatif" : "pozitif"}.`); }
  ]);

  const KONDAL = [[1, 2, "0,5"], [1, 4, "0,25"], [3, 4, "0,75"], [1, 5, "0,2"], [3, 5, "0,6"], [1, 8, "0,125"], [3, 8, "0,375"], [5, 8, "0,625"], [7, 8, "0,875"], [7, 20, "0,35"], [9, 25, "0,36"], [3, 20, "0,15"], [11, 40, "0,275"]];
  U.m1k3 = tip([
    () => { const [a, b, o] = pick(KONDAL), n = pick([1, -1]); return soru(`${n < 0 ? "−" : ""}${a}/${b} rasyonel sayısının ondalık gösterimi hangisidir?`, (n < 0 ? "−" : "") + o, [(n < 0 ? "" : "−") + o, (n < 0 ? "−" : "") + `${a},${b}`, (n < 0 ? "−" : "") + virgul(a / b / 10)], `${a} ÷ ${b} = ${o}`); },
    () => { const l = [[-3, 4], [-1, 2], [-2, 3], [1, 4], [2, 5], [-5, 6], [3, 8], [-1, 3]]; const s = [...l].sort(() => Math.random() - 0.5).slice(0, 4); const e = s.reduce((m, x) => (x[0] / x[1] < m[0] / m[1] ? x : m)); return soru(`${s.map(ky).join(", ")} sayılarından en küçüğü hangisidir?`, ky(e), s.filter((x) => x !== e).map(ky), "Negatif sayılarda mutlak değeri büyük olan daha küçüktür."); },
    () => { const [a, b] = pick([[1, 3], [2, 3], [1, 6], [5, 6], [1, 9], [4, 9], [1, 11]]); const tek = [[1, 2], [1, 4], [1, 5], [3, 8], [7, 10]].sort(() => Math.random() - 0.5).slice(0, 3); return soru("Hangisinin ondalık gösterimi devirlidir?", `${a}/${b}`, tek.map(([x, y]) => `${x}/${y}`), `${a}/${b}'nin paydasında 2 ve 5 dışında asal çarpan var; ondalık gösterim devirlidir.`); },
    () => { const [a, b, o] = pick(KONDAL); return soru(`−${o} ondalık gösteriminin en sade kesir hâli hangisidir?`, `−${a}/${b}`, [`−${b}/${a}`, `${a}/${b}`, `−${a}/${b * 2}`], `${o} = ${a}/${b}`); }
  ]);

  U.m1k4 = tip([
    () => { const b = pick([2, 3, 4, 6]), d = pick([2, 3, 4, 6]); if (b === d) return null; const a = rnz(-5, 5), c = rnz(-5, 5); const s = kes(a * d + c * b, b * d); return soru(`${ky(kes(a, b))} + ${ky(kes(c, d))} işleminin sonucu kaçtır?`, ky(s), [ky(kes(a * d - c * b, b * d)), ky(kes(a + c, b + d)), ky(kes(-(a * d + c * b), b * d))], `Paydalar eşitlenir: sonuç ${ky(s)}.`); },
    () => { const a = rnz(-6, 6), b = r(2, 9), c = rnz(-6, 6), d = r(2, 9); const s = kes(a * c, b * d); return soru(`(${ky(kes(a, b))}) · (${ky(kes(c, d))}) işleminin sonucu kaçtır?`, ky(s), [ky(kes(-a * c, b * d)), ky(kes(a * d, b * c)), ky(kes(a + c, b * d))], `Paylar ve paydalar çarpılır, sadeleştirilir: ${ky(s)}.`); },
    () => { const a = rnz(-6, 6), b = r(2, 9), c = rnz(-6, 6), d = r(2, 9); const s = kes(a * d, b * c); return soru(`(${ky(kes(a, b))}) ÷ (${ky(kes(c, d))}) işleminin sonucu kaçtır?`, ky(s), [ky(kes(a * c, b * d)), ky(kes(-a * d, b * c)), ky(kes(b * c, a * d))], `İkinci kesir ters çevrilip çarpılır: ${ky(s)}.`); },
    () => { const x = r(1, 9) * pick([1, -1]) + pick([0.25, 0.5, 0.75]) * pick([1, -1]), y = r(1, 9) * pick([1, -1]) + pick([0.5, 0.25]); return soru(`${virgul(x, 2)} − (${virgul(y, 2)}) işleminin sonucu kaçtır?`, virgul(x - y, 2), [virgul(x + y, 2), virgul(y - x, 2), virgul(x - y + 1, 2)], `${virgul(x, 2)} − ${virgul(y, 2)} = ${virgul(x - y, 2)}`); },
    () => { const [a, b] = pick([[2, 5], [1, 3], [1, 4], [3, 8], [2, 7]]), [c, d] = pick([[1, 5], [1, 6], [1, 3], [1, 4]]); const top = kes(a * d + c * b, b * d); if (top[0] >= top[1]) return null; const kal = kes(top[1] - top[0], top[1]); return soru(`Bir yolun ${a}/${b}'i birinci gün, ${c}/${d}'i ikinci gün gidildi. Yolun kaçta kaçı kaldı?`, ky(kal), [ky(top), ky(kes(b - a, b)), ky(kes(d - c, d))], `${a}/${b} + ${c}/${d} = ${ky(top)}; kalan ${ky(kal)}.`); }
  ]);

  U.m2k1 = tip([
    () => { const k = r(2, 9), f = r(12, 95); return soru(`${k} kg'ı ${g3(k * f)} TL olan ürünün 1 kg'ı kaç TL'dir?`, String(f), [String(f + k), String(k * f - k), String(Math.round(f / 2))], `${k * f} ÷ ${k} = ${f}`); },
    () => { const s = r(2, 6), v = r(40, 110); return soru(`${s} saatte ${s * v} km yol giden bir aracın 1 saatte aldığı yol kaç km'dir?`, String(v), [String(v + 10), String(s * v - s), String(v * 2)], `${s * v} ÷ ${s} = ${v} km/sa`); },
    () => { const a = r(2, 9) * 2, b = r(2, 9) * 2; if (a === b) return null; const [x, y] = kes(a, b); return soru(`Bir sınıfta ${a} kız ve ${b} erkek öğrenci vardır. Kızların erkeklere oranı en sade hâliyle hangisidir?`, `${x}/${y}`, [`${y}/${x}`, `${x}/${x + y}`, `${a}/${a + b}`], `${a}/${b} = ${x}/${y}`); },
    () => { const k1 = r(2, 5), f1 = r(20, 40), k2 = r(2, 5), f2 = f1 + pick([-3, -2, 2, 3]); return soru(`A marketinde ${k1} kg elma ${k1 * f1} TL, B marketinde ${k2} kg elma ${k2 * f2} TL'dir. Hangisi daha ucuzdur?`, f1 < f2 ? `A marketi (1 kg ${f1} TL)` : `B marketi (1 kg ${f2} TL)`, [f1 < f2 ? `B marketi (1 kg ${f2} TL)` : `A marketi (1 kg ${f1} TL)`, "İkisi aynı fiyattır", "Karşılaştırılamaz"], "Birim oranlar (1 kg fiyatı) karşılaştırılır."); },
    () => soru("Hangisi birimsiz bir orandır?", pick(["8 m / 12 m", "6 kg / 9 kg", "15 L / 20 L", "30 dk / 45 dk"]), ["90 km / 1 sa", "40 TL / 2 kg", "300 m / 5 dk", "12 L / 100 km"], "Aynı birimdeki çoklukların oranı birimsizdir.")
  ]);

  U.m2k2 = tip([
    () => { const x = r(2, 12), k = r(2, 6), a = r(1, 9); return soru(`${a}/x = ${a * k}/${x * k} orantısında x kaçtır?`, String(x), [String(x * k), String(x + k), String(a * k)], `İçler dışlar çarpımı: ${a * k}x = ${a * x * k} → x = ${x}`); },
    () => { const f = r(5, 40), n1 = r(2, 9), n2 = r(10, 25); return soru(`${n1} defter ${n1 * f} TL ise ${n2} defter kaç TL'dir?`, String(n2 * f), [String(n2 * f + f), String(n1 * f + n2), String((n2 - n1) * f)], `1 defter ${f} TL; ${n2} × ${f} = ${n2 * f}`); },
    () => soru("Hangisinde çokluklar doğru orantılıdır?", pick(["Alınan ekmek sayısı ile ödenen para", "Benzin miktarı ile gidilen yol", "Çalışılan saat ile kazanılan ücret", "Kenar uzunluğu ile karenin çevresi"]), ["İşçi sayısı ile işin bitme süresi", "Hız ile yolun alınma süresi", "Musluk sayısı ile havuzun dolma süresi", "Yaş ile boy uzunluğu"], "Biri artınca diğeri aynı oranda artıyorsa doğru orantıdır."),
    () => { const k = r(2, 9), x = [r(1, 5), r(6, 10), r(11, 15)]; return soru(`x ile y doğru orantılıdır. x = ${x[0]} iken y = ${x[0] * k} ise x = ${x[2]} iken y kaçtır?`, String(x[2] * k), [String(x[2] + k), String(x[2] * k + k), String(x[0] * k * 2)], `Orantı sabiti y/x = ${k}; y = ${k} × ${x[2]} = ${x[2] * k}`); }
  ]);

  U.m2k3 = tip([
    () => { const k1 = pick([2, 4, 5]), k2 = pick([3, 6, 8, 10]), m = r(1, 6) * k1 * 25; if (k1 === k2) return null; return soru(`${k1} kişilik bir tarifte ${m} g un kullanılıyor. ${k2} kişilik tarifte kaç g un gerekir?`, String(m * k2 / k1), [String(m * k2 / k1 + 50), String(m * k2), String(m / k1)], `${m} × ${k2}/${k1} = ${m * k2 / k1}`); },
    () => { const o = pick([100000, 200000, 500000, 1000000]), cm = r(2, 9); return soru(`1/${g3(o)} ölçekli haritada ${cm} cm olan uzaklık gerçekte kaç km'dir?`, String(cm * o / 100000), [String(cm * o / 10000), String(cm * o / 1000000), String(cm)], `${cm} × ${g3(o)} cm = ${g3(cm * o)} cm = ${cm * o / 100000} km`); },
    () => { const f = r(4, 40) * 20, y = pick([10, 15, 20, 25, 30]), art = pick([true, false]); const v = art ? f * (100 + y) / 100 : f * (100 - y) / 100; return soru(`${f} TL'lik bir ürüne %${y} ${art ? "zam" : "indirim"} yapılırsa yeni fiyatı kaç TL olur?`, String(v), [String(f * y / 100), String(art ? f * (100 - y) / 100 : f * (100 + y) / 100), String(art ? f + y : f - y)], `${f} × ${art ? 100 + y : 100 - y}/100 = ${v}`); },
    () => { const l = r(3, 12), km = 100; const yol = r(2, 8) * 50; return soru(`Bir araç ${km} km'de ${l} L benzin harcıyor. ${yol} km yolda kaç L benzin harcar?`, String(l * yol / 100), [String(l * yol / 10), String(l + yol / 100), String(Math.round(yol / l))], `${l} × ${yol}/100 = ${l * yol / 100} L`); }
  ]);

  const terim = (k, x) => (k === 0 ? "" : k === 1 ? x : k === -1 ? "−" + x : z(k) + x);
  const ifade = (a, b, x = "x") => { const t1 = terim(a, x); if (!b) return t1 || "0"; return (t1 ? t1 + (b > 0 ? " + " : " − ") + Math.abs(b) : z(b)); };
  U.m3k1 = tip([
    () => { const a = rnz(-9, 9), b = rnz(-9, 9), c = rnz(-9, 9), d = rnz(-9, 9); if (a + c === 0) return null; return soru(`(${ifade(a, b)}) + (${ifade(c, d)}) işleminin sonucu hangisidir?`, ifade(a + c, b + d), [ifade(a + c, b - d), ifade(a - c, b + d), ifade(a * c, b + d)], `Benzer terimler toplanır: ${terim(a + c, "x")}, sabit: ${z(b + d)}`); },
    () => { const a = rnz(-9, 9), b = rnz(-9, 9), c = rnz(-9, 9), d = rnz(-9, 9); if (a - c === 0) return null; return soru(`(${ifade(a, b)}) − (${ifade(c, d)}) işleminin sonucu hangisidir?`, ifade(a - c, b - d), [ifade(a - c, b + d), ifade(a + c, b - d), ifade(a - c, d - b)], "Parantezin önündeki eksi, içindeki terimlerin işaretini değiştirir."); },
    () => { const k = rnz(-6, 6), a = rnz(-5, 5), b = rnz(-9, 9); if (Math.abs(k) === 1) return null; return soru(`${z(k)}(${ifade(a, b)}) ifadesinin eşiti hangisidir?`, ifade(k * a, k * b), [ifade(k * a, b), ifade(k * a, -k * b), ifade(a, k * b)], `Dağılma: ${z(k)}·${terim(a, "x")} ve ${z(k)}·${p(b)}`); },
    () => { const a = rnz(-8, 8), b = rnz(-15, 15), x = rnz(-6, 6); return soru(`x = ${z(x)} için ${ifade(a, b)} ifadesinin değeri kaçtır?`, z(a * x + b), [z(a * x - b), z(-a * x + b), z(a + x + b)], `${z(a)}·${p(x)} + ${p(b)} = ${z(a * x + b)}`); },
    () => { const a = rnz(-9, 9), b = rnz(-9, 9), c = rnz(-9, 9); if (Math.abs(a) === 1) return null; return soru(`${terim(a, "a")} ${b < 0 ? "−" : "+"} ${Math.abs(b)}b ${c < 0 ? "−" : "+"} ${Math.abs(c)} ifadesinde a'nın katsayısı kaçtır?`, z(a), [z(b), z(c), z(-a)], `a'nın önündeki sayı ${z(a)}.`); }
  ]);

  U.m3k2 = tip([
    () => { const a = rnz(-9, 9), x = rnz(-12, 12), b = rnz(-20, 20); if (Math.abs(a) === 1) return null; return soru(`${ifade(a, b)} = ${z(a * x + b)} denkleminin çözümü kaçtır?`, z(x), [z(-x), z(x + 1), z((a * x + b + b) / a | 0)], `${terim(a, "x")} = ${z(a * x)} → x = ${z(x)}`); },
    () => { const k = r(2, 6), x = rnz(-9, 12), b = rnz(-9, 9); return soru(`${k}(x ${b < 0 ? "−" : "+"} ${Math.abs(b)}) = ${z(k * (x + b))} denkleminin çözümü kaçtır?`, z(x), [z(x + 2 * b), z(-x), z(k * x)], `${k}x ${k * b < 0 ? "−" : "+"} ${Math.abs(k * b)} = ${z(k * (x + b))} → x = ${z(x)}`); },
    () => { const k = r(2, 9), e = r(1, 15), x = r(2, 20), art = pick([true, false]); const v = art ? k * x + e : k * x - e; const ek = (n) => { n = Math.abs(n); const t = n % 10 ? { 1: "dir", 2: "dir", 3: "tür", 4: "tür", 5: "tir", 6: "dır", 7: "dir", 8: "dir", 9: "dur" }[n % 10] : n % 100 ? { 1: "dur", 2: "dir", 3: "dur", 4: "tır", 5: "dir", 6: "tır", 7: "tir", 8: "dir", 9: "dır" }[(n % 100) / 10] : n % 1000 ? "dür" : n ? "dir" : "dır"; return t; }; return soru(`Bir sayının ${k} katının ${e} ${art ? "fazlası" : "eksiği"} ${z(v)}'${ek(v)}. Bu sayı kaçtır?`, String(x), [String(art ? (v + e) / k : (v - e) / k), z(v - k), String(x + 1)].map((t) => (/\./.test(t) ? String(Math.round(+t) + 2) : t).replace("-", "−")), `${k}x ${art ? "+" : "−"} ${e} = ${v} → x = ${x}`); },
    () => { const a = r(3, 9), c = r(1, a - 1), x = rnz(-8, 10), b = rnz(-10, 10), d = (a - c) * x + b; return soru(`${ifade(a, b)} = ${ifade(c, d)} denkleminin çözümü kaçtır?`, z(x), [z(-x), z(x + 1), z(x - 2)], `${terim(a - c, "x")} = ${z(d - b)} → x = ${z(x)}`); }
  ]);

  U.m3k3 = tip([
    () => { const b = r(2, 15), c = r(b + 1, 30), s = pick(["<", ">", "≤", "≥"]); return soru(`x + ${b} ${s} ${c} eşitsizliğinin çözümü hangisidir?`, `x ${s} ${c - b}`, [`x ${s} ${c + b}`, `x ${{ "<": ">", ">": "<", "≤": "≥", "≥": "≤" }[s]} ${c - b}`, `x ${{ "<": "≤", ">": "≥", "≤": "<", "≥": ">" }[s]} ${c - b}`], `İki taraftan ${b} çıkarılır: x ${s} ${c - b}`); },
    () => { const k = r(2, 6), x = r(2, 12), s = pick(["<", ">", "≤", "≥"]); return soru(`${k}x ${s} ${k * x} eşitsizliğinin çözümü hangisidir?`, `x ${s} ${x}`, [`x ${s} ${k * x * k}`, `x ${{ "<": ">", ">": "<", "≤": "≥", "≥": "≤" }[s]} ${x}`, `x ${s} ${k * x - k}`], `İki taraf ${k}'ya bölünür (pozitif, yön değişmez).`); },
    () => { const [m, s, n] = pick([["en fazla", "≤", r(20, 60)], ["en az", "≥", r(10, 18)], ["-den az", "<", r(50, 120)], ["-den fazla", ">", r(100, 500)]]); const metin = s === "≤" ? `Bir asansör ${m} ${n} kişi taşıyabilir.` : s === "≥" ? `Bu yarışmaya katılmak için ${m} ${n} yaşında olmak gerekir.` : s === "<" ? `Bu yolda hız ${n} km/sa'ten az olmalıdır.` : `Etkinliğe ${n} kişiden fazla katıldı.`; return soru(`"${metin}" ifadesi hangi eşitsizlikle gösterilir? (değişken: a)`, `a ${s} ${n}`, ["≤", "≥", "<", ">"].filter((x) => x !== s).map((x) => `a ${x} ${n}`), s === "≤" || s === "≥" ? "Sınır değer dâhildir." : "Sınır değer dâhil değildir."); }
  ]);

  U.m4k1 = tip([
    () => { const a = rnz(-9, 9), b = rnz(-9, 9); return soru(`A(${z(a)}, ${z(b)}) noktasının x eksenine göre yansıması hangisidir?`, `(${z(a)}, ${z(-b)})`, [`(${z(-a)}, ${z(b)})`, `(${z(-a)}, ${z(-b)})`, `(${z(b)}, ${z(a)})`], "x eksenine göre yansımada ordinat ters işaret alır."); },
    () => { const a = rnz(-9, 9), b = rnz(-9, 9); return soru(`A(${z(a)}, ${z(b)}) noktasının y eksenine göre yansıması hangisidir?`, `(${z(-a)}, ${z(b)})`, [`(${z(a)}, ${z(-b)})`, `(${z(-a)}, ${z(-b)})`, `(${z(b)}, ${z(a)})`], "y eksenine göre yansımada apsis ters işaret alır."); },
    () => { const a = r(10, 85) * 2; return soru(`${a}°'lik bir açının açıortayı bu açıyı hangi ölçülerde iki açıya böler?`, `${a / 2}° ve ${a / 2}°`, [`${a / 2 - 10}° ve ${a / 2 + 10}°`, `${a}° ve ${a}°`, `${180 - a}° ve ${a / 2}°`], "Açıortay açıyı iki eş açıya böler."); },
    () => { const u = r(4, 20) * 2; return soru(`${u} cm uzunluğundaki bir doğru parçasının orta dikmesi bu doğru parçasını hangi uzunluklarda iki parçaya böler?`, `${u / 2} cm ve ${u / 2} cm`, [`${u / 2 - 1} cm ve ${u / 2 + 1} cm`, `${u} cm ve ${u} cm`, `${u / 4} cm ve ${3 * u / 4} cm`], "Orta dikme doğru parçasını orta noktasından böler."); }
  ]);

  U.m5k1 = tip([
    () => { const s = [r(1, 4), r(1, 4), r(1, 4)]; return soru(`Önden görünümü 3 sütundan oluşan bir yapıda sütunların yükseklikleri ${s.join(", ")} birim küptür. Önden görünümde kaç kare vardır?`, String(s[0] + s[1] + s[2]), [String(Math.max(...s) * 3), String(s[0] + s[1] + s[2] + 1), "3"], `${s.join(" + ")} = ${s[0] + s[1] + s[2]}`); },
    () => { const a = r(2, 4), b = r(2, 4); return soru(`Üstten görünümü ${a} × ${b} kare olan ve her yerinde ${r(2, 2)} kat küp bulunan bir yapıda kaç küp vardır?`, String(a * b * 2), [String(a * b), String(a * b * 3), String(a + b)], `${a} × ${b} × 2 = ${a * b * 2}`); },
    () => soru("Bir yapının yerde kapladığı alanı (taban izini) gösteren görünüm hangisidir?", "Üstten görünüm", ["Önden görünüm", "Sağdan görünüm", "Soldan görünüm"], "Üstten bakınca taban izi görülür.")
  ]);

  U.m5k2 = tip([
    () => { const a = r(2, 12), b = r(2, 12), c = r(2, 12); return soru(`Ayrıtları ${a} cm, ${b} cm ve ${c} cm olan dikdörtgenler prizmasının yüzey alanı kaç cm²'dir?`, String(2 * (a * b + a * c + b * c)), [String(a * b * c), String(a * b + a * c + b * c), String(2 * (a + b + c))], `2(${a * b} + ${a * c} + ${b * c}) = ${2 * (a * b + a * c + b * c)}`); },
    () => { const a = r(2, 15); return soru(`Bir ayrıtı ${a} cm olan küpün yüzey alanı kaç cm²'dir?`, String(6 * a * a), [String(a ** 3), String(4 * a * a), String(6 * a)], `6 × ${a}² = ${6 * a * a}`); },
    () => { const [s, d] = pick([["ayrıt", "12"], ["köşe", "8"], ["yüz", "6"]]); return soru(`Dikdörtgenler prizmasının kaç ${s}ı vardır?`.replace("yüzı", "yüzü"), d, ["6", "8", "12", "4"].filter((x) => x !== d), "Dikdörtgenler prizması: 6 yüz, 12 ayrıt, 8 köşe."); }
  ]);

  U.m5k3 = tip([
    () => { const a = r(2, 15), b = r(2, 12), c = r(2, 10); return soru(`Ayrıtları ${a} cm, ${b} cm ve ${c} cm olan dikdörtgenler prizmasının hacmi kaç cm³'tür?`, String(a * b * c), [String(2 * (a * b + a * c + b * c)), String(a * b * c + a), String(a + b + c)], `${a} × ${b} × ${c} = ${a * b * c}`); },
    () => { const a = r(2, 12); return soru(`Bir ayrıtı ${a} cm olan küpün hacmi kaç cm³'tür?`, String(a ** 3), [String(a * a), String(6 * a * a), String(3 * a)], `${a}³ = ${a ** 3}`); },
    () => { const l = [["dm³", "cm³", 1000], ["m³", "dm³", 1000], ["cm³", "mm³", 1000], ["L", "mL", 1000], ["dm³", "L", 1]]; const [b1, b2, k] = pick(l), v = pick([0.5, 1.5, 2, 2.5, 3, 4.25, 7]); return soru(`${String(v).replace(".", ",")} ${b1} kaç ${b2}'${b2.endsWith("³") ? "tür" : "dir"}?`, g3(v * k).replace(".", ","), [g3(v * k * 10).replace(".", ","), g3(v * k / 10).replace(".", ","), g3(v * 100).replace(".", ",")], `1 ${b1} = ${k} ${b2}`); },
    () => { const a = r(2, 6) * 10, b = r(1, 4) * 10, c = r(2, 5) * 10; return soru(`İç ayrıtları ${a} cm, ${b} cm ve ${c} cm olan bir akvaryum kaç litre su alır?`, String(a * b * c / 1000), [String(a * b * c / 100), String(a * b * c), String(a + b + c)], `${a * b * c} cm³ = ${a * b * c / 1000} dm³ = ${a * b * c / 1000} L`); }
  ]);

  U.m6k1 = tip([
    () => { const rr = r(2, 12), pi = pick([3, 3.14]); return soru(`Yarıçapı ${rr} cm olan dairenin alanı kaç cm²'dir? (π = ${String(pi).replace(".", ",")})`, virgul(pi * rr * rr, 2), [virgul(2 * pi * rr, 2), virgul(pi * rr, 2), virgul(pi * rr * rr * 2, 2)], `${String(pi).replace(".", ",")} × ${rr}² = ${virgul(pi * rr * rr, 2)}`); },
    () => { const rr = r(2, 15), pi = 3; return soru(`Yarıçapı ${rr} cm olan çemberin uzunluğu kaç cm'dir? (π = 3)`, String(2 * pi * rr), [String(pi * rr * rr), String(pi * rr), String(2 * rr)], `2 × 3 × ${rr} = ${6 * rr}`); },
    () => { const rr = r(2, 10), a = pick([30, 45, 60, 90, 120, 180, 270]); const v = 3 * rr * rr * a / 360; if (v % 1) return null; return soru(`Yarıçapı ${rr} cm olan dairede ${a}°'lik merkez açılı dilimin alanı kaç cm²'dir? (π = 3)`, String(v), [String(3 * rr * rr), String(v * 2), String(6 * rr * a / 360)], `3 × ${rr}² × ${a}/360 = ${v}`); }
  ]);

  U.m6k2 = tip([
    () => { const e = r(2, 15) * 2, f = r(2, 15); return soru(`Köşegenleri ${e} cm ve ${f} cm olan eşkenar dörtgenin alanı kaç cm²'dir?`, String(e * f / 2), [String(e * f), String(e + f), String(2 * (e + f))], `${e} × ${f} / 2 = ${e * f / 2}`); },
    () => { const a = r(5, 20), c = r(2, a - 1), h = r(2, 12) * 2; return soru(`Tabanları ${a} cm ve ${c} cm, yüksekliği ${h} cm olan yamuğun alanı kaç cm²'dir?`, String((a + c) * h / 2), [String((a + c) * h), String(a * c * h / 2), String(a * h / 2)], `(${a} + ${c}) × ${h} / 2 = ${(a + c) * h / 2}`); },
    () => { const t = r(4, 20), h = r(2, 15); return soru(`Tabanı ${t} cm, yüksekliği ${h} cm olan paralelkenarın alanı kaç cm²'dir?`, String(t * h), [String(t * h / 2), String(2 * (t + h)), String(t + h)], `${t} × ${h} = ${t * h}`); }
  ]);

  U.m7k1 = tip([
    () => { const l = [["Kenarortay", "köşeyi karşı kenarın orta noktasına birleştiren doğru parçası"], ["Açıortay", "köşedeki açıyı iki eş açıya bölen doğru parçası"], ["Yükseklik", "köşeden karşı kenara dik çizilen doğru parçası"], ["Orta dikme", "kenarı orta noktasından dik kesen doğru"]]; const [a, t] = pick(l); return soru(`Üçgende ${t} hangisidir?`, a, l.filter((x) => x[0] !== a).map((x) => x[0]), `${a}: ${t}.`); },
    () => { const k = r(3, 15) * 2; return soru(`Bir üçgende BC kenarı ${k} cm'dir. A köşesinden çizilen kenarortay BC'yi hangi uzunluklarda iki parçaya ayırır?`, `${k / 2} cm ve ${k / 2} cm`, [`${k / 2 - 1} cm ve ${k / 2 + 1} cm`, `${k} cm ve ${k} cm`, `${k / 4} cm ve ${3 * k / 4} cm`], "Kenarortay kenarın orta noktasına gider."); },
    () => { const a = r(20, 80) * 2; return soru(`Bir üçgende A açısı ${a}°'dir. A'dan çizilen açıortayın oluşturduğu iki açının her biri kaç derecedir?`, `${a / 2}°`, [`${a}°`, `${90 - a / 2}°`, `${180 - a}°`], "Açıortay açıyı ikiye böler."); },
    () => soru("Üçgenin üç kenarortayının kesiştiği noktaya ne denir?", "Ağırlık merkezi", ["Orta nokta", "Köşe", "Dik açı"], "Kenarortaylar ağırlık merkezinde kesişir.")
  ]);

  U.m8k1 = tip([
    () => { const n = r(4, 6); let v = Array.from({ length: n }, () => r(5, 30)); const t = v.reduce((a, b) => a + b); if (t % n) { v[0] += n - (t % n); } const tt = v.reduce((a, b) => a + b); return soru(`${v.join(", ")} verilerinin aritmetik ortalaması kaçtır?`, String(tt / n), [String(tt), String(Math.max(...v) - Math.min(...v)), String(tt / n + 1)], `${tt} / ${n} = ${tt / n}`); },
    () => { const v = Array.from({ length: r(4, 6) }, () => r(1, 60)); const a = Math.max(...v) - Math.min(...v); return soru(`${v.join(", ")} verilerinin açıklığı kaçtır?`, String(a), [String(Math.max(...v)), String(Math.min(...v)), String(a + 1)], `${Math.max(...v)} − ${Math.min(...v)} = ${a}`); },
    () => { const m = r(4, 12), v = [m - 2, m, m + 2, m - 4, m + 4]; return soru(`${v.join(", ")} verilerinin ortalama mutlak sapması kaçtır? (Ortalama: ${m})`, "2,4", ["2", "4", "12"], `Uzaklıklar: 2, 0, 2, 4, 4 → toplam 12; 12 / 5 = 2,4`); },
    () => { const [e, o] = pick([["bir okuldaki bütün öğrenciler", "rastgele seçilen 50 öğrenci"], ["Türkiye'deki bütün 7. sınıf öğrencileri", "anket yapılan 1000 öğrenci"], ["bir şehirdeki bütün aileler", "görüşme yapılan 200 aile"]]); return soru(`"${e}" ile ilgili bir araştırmada "${o}" ile çalışılıyor. "${o.charAt(0).toLocaleUpperCase("tr") + o.slice(1)}" neyi ifade eder?`, "Örneklem", ["Evren", "Açıklık", "Ortalama"], "Evrenden seçilen temsilî grup örneklemdir."); }
  ]);

  U.m9k1 = tip([
    () => { const [ol, s] = pick([["4'ten büyük", 2], ["çift", 3], ["tek", 3], ["asal", 3], ["3'ün katı", 2], ["6'dan küçük", 5], ["1", 1]]); const k = kes(s, 6); return soru(`Bir zar atıldığında ${ol} sayı gelme olasılığı kaçtır?`, ky(k), [ky(kes(6 - s, 6)), `${s}/5`, "1/6"].filter((x) => x !== ky(k)), `${s}/6 = ${ky(k)}`); },
    () => { const a = r(1, 9), b = r(1, 9), c = r(1, 9); const t = a + b + c; const k = kes(b, t); return soru(`Torbada ${a} kırmızı, ${b} mavi, ${c} yeşil top var. Rastgele çekilen topun mavi olma olasılığı kaçtır?`, ky(k), [ky(kes(a, t)), ky(kes(c, t)), `${b}/${a + c}`], `${b}/${t} = ${ky(k)}`); },
    () => { const b = r(5, 12), a = r(1, b - 1); return soru(`Bir olayın olasılığı ${a}/${b} ise tümleyeninin olasılığı kaçtır?`, ky(kes(b - a, b)), [`${a}/${b}`, "1", `${b}/${a}`], `1 − ${a}/${b} = ${ky(kes(b - a, b))}`); },
    () => soru("Zar atma deneyinde hangi iki olay ayrıktır?", pick(["Tek gelmesi ve 2 gelmesi", "Çift gelmesi ve 5 gelmesi", "3'ten küçük gelmesi ve 6 gelmesi"]), ["Çift gelmesi ve 2 gelmesi", "Asal gelmesi ve 3 gelmesi", "3'ten büyük gelmesi ve 5 gelmesi"], "Ortak sonucu olmayan olaylar ayrıktır.")
  ]);
})();
