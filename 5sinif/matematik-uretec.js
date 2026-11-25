// 5. sınıf Matematik soru üreteçleri: her çağrıda sayıları değişen yeni soru
window.URETEC = window.URETEC || {};
(function () {
  const U = window.URETEC;
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const g = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " "); // 1234567 → 1 234 567
  const virgul = (x, k = 2) => { let s = (Math.round(x * 10 ** k) / 10 ** k).toFixed(k).replace(/0+$/, "").replace(/\.$/, ""); return s.replace(".", ","); };

  // Yanılgı etiketli yanlış şık (A4): Y(değer, "d:...") dikkat hatası, Y(değer, "k:...") kavram yanılgısı.
  // Öğrenci o şıkkı seçerse etiket Bilge'nin teşhisi olur (ustalik.js → hataKaydet).
  const Y = (v, e) => ({ v, e });
  // Doğru şık + yanlışlar (benzersiz, negatif/NaN yok); eksikse yakın değerlerle tamamlar
  function soru(metin, dogru, yanlislar, cozum, yedek) {
    const s = [String(dogru)], yan = {};
    const ekle = (x) => {
      const et = x && typeof x === "object" ? x.e : null, t = String(et ? x.v : x);
      if (s.length < 4 && t && !s.includes(t) && !/NaN|undefined|Infinity|^-/.test(t)) { s.push(t); if (et) yan[t] = et; }
    };
    yanlislar.forEach(ekle);
    for (let i = 0; s.length < 4 && i < 60; i++) ekle(yedek ? yedek() : String(Number(String(dogru).replace(/\s/g, "")) + pick([-1, 1]) * r(1, 9)));
    if (s.length < 4) return null;
    const q = { soru: metin, secenekler: s, dogru: 0, cozum };
    if (Object.keys(yan).length) q.yanilgi = yan;
    return q;
  }
  const tip = (l) => () => { for (let i = 0; i < 30; i++) { const q = pick(l)(); if (q) return q; } return null; };

  // ---------- Çok basamaklı sayılar ----------
  const BIR = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
  const ON = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
  const uc = (n) => { const y = Math.floor(n / 100), o = Math.floor((n % 100) / 10), b = n % 10; return [y ? (y === 1 ? "" : BIR[y] + " ") + "yüz" : "", ON[o], BIR[b]].filter(Boolean).join(" ").trim(); };
  const oku = (n) => {
    const p = [[1e9, "milyar"], [1e6, "milyon"], [1e3, "bin"]]; let s = [];
    for (const [d, ad] of p) { const k = Math.floor(n / d) % 1000; if (k) s.push((d === 1e3 && k === 1 ? "" : uc(k) + " ") + ad); }
    if (n % 1000) s.push(uc(n % 1000));
    return s.join(" ").replace(/\s+/g, " ").trim();
  };
  const BAS = [[1, "birler"], [10, "onlar"], [100, "yüzler"], [1e3, "binler"], [1e4, "on binler"], [1e5, "yüz binler"], [1e6, "milyonlar"], [1e7, "on milyonlar"]];
  U.m1k1 = tip([
    () => { const n = r(1, 99) * 1e6 + r(0, 999) * 1e3 + r(0, 999); return soru(`"${oku(n)}" sayısı hangisidir?`, g(n), [g(n + 9 * 1e3 * pick([1, -1]) > 0 ? n + 9000 : n + 90), Y(g(Math.floor(n / 1e6) * 1e6 + (n % 1e3) * 1e3 + Math.floor((n % 1e6) / 1e3)), "d:binler ve birler bölükleri yer değiştirdi"), Y(g(n * 10), "d:fazladan bir sıfır yazıldı (basamak sayısı arttı)"), Y(g(Math.floor(n / 10)), "d:bir basamak eksik yazıldı")], `${oku(n)} → ${g(n)}`); },
    () => { const n = r(1, 9) * 1e6 + r(100, 999) * 1e3 + r(100, 999); return soru(`${g(n)} sayısının okunuşu hangisidir?`, oku(n), [oku(n + 1e5 < 1e7 ? n + 1e5 : n - 1e5), oku(n + 10), oku(n - 1000)], `Bölükler: ${g(n)}`); },
    () => { let n; do { n = r(1e6, 99999999); } while (!/[1-9]/.test(String(n))); const s = String(n); const i = r(0, s.length - 1); const rak = +s[i]; if (!rak) return null; const d = 10 ** (s.length - 1 - i); if (s.split("").filter((x) => +x === rak).length > 1) return null; const ad = BAS.find((x) => x[0] === d)[1];
      return soru(`${g(n)} sayısında ${rak} rakamının basamak değeri kaçtır?`, g(rak * d), [Y(g(rak * d * 10), "k:rakam bir üst basamaktaymış gibi düşünüldü"), Y(g(rak * Math.max(1, d / 10)), "k:rakam bir alt basamaktaymış gibi düşünüldü"), Y(String(rak), "k:basamak değeri yerine rakamın kendisi (sayı değeri) yazıldı")], `${rak}, ${ad} basamağındadır: ${rak} × ${g(d)} = ${g(rak * d)}.`); },
    () => { const a = r(1, 9), b = r(0, 9), c = r(1, 9); const n = a * 1e5 + b * 1e3 + c * 10; return soru(`${a} × 100 000 + ${b} × 1 000 + ${c} × 10 çözümlemesi hangi sayıya aittir?`, g(n), [Y(g(a * 1e5 + b * 1e4 + c * 10), "k:binler basamağındaki rakam on binler basamağına yazıldı"), Y(g(a * 1e5 + b * 1e3 + c * 100), "k:onlar basamağındaki rakam yüzler basamağına yazıldı"), Y(g(a * 1e4 + b * 1e3 + c * 10), "k:yüz binler basamağındaki rakam on binler basamağına yazıldı")], `${g(a * 1e5)} + ${g(b * 1e3)} + ${c * 10} = ${g(n)}`); },
    () => { const n = r(1, 99) * 1e6 + r(100, 999) * 1e3 + r(0, 999); const bin = Math.floor(n / 1e3) % 1000; return soru(`${g(n)} sayısının binler bölüğündeki sayı hangisidir?`, String(bin), [Y(String(Math.floor(n / 1e6)), "k:binler bölüğü ile milyonlar bölüğü karıştırıldı"), Y(String(n % 1000), "k:binler bölüğü ile birler bölüğü karıştırıldı"), String(bin + 100)], `Sağdan üçerli ayırırız: ${g(n)} → binler bölüğü ${bin}.`); }
  ]);

  // ---------- Toplama / çıkarma ----------
  U.m1k2 = tip([
    () => { const a = r(10000, 89999), b = r(1000, 9999 * 3); return soru(`${g(a)} + ${g(b)} işleminin sonucu kaçtır?`, g(a + b), [g(a + b + 100), Y(g(a + b - 10), "d:birler basamağından gelen elde onlara eklenmedi"), g(a + b + 1000)], `${g(a)} + ${g(b)} = ${g(a + b)}`); },
    () => { const a = r(20, 99) * 1000, b = r(1000, a - 1000); return soru(`${g(a)} − ${g(b)} işleminin sonucu kaçtır?`, g(a - b), [Y(g(a - b + 1000), "d:onluk bozulan basamaktan 1 eksiltilmedi"), g(a - b - 100), Y(g(a - b + 10), "d:onluk bozulan basamaktan 1 eksiltilmedi")], `${g(a)} − ${g(b)} = ${g(a - b)}`); },
    () => { const x = r(1000, 9999), b = r(500, 4999); return soru(`? − ${g(b)} = ${g(x)} işleminde ? yerine hangi sayı gelmelidir?`, g(x + b), [x - b > 0 ? Y(g(x - b), "k:bilinmeyen eksilen için toplama yerine çıkarma yapıldı") : g(x + b + 100), g(x + b + 100), g(x + b - 1000)], `Çıkarmanın tersi toplamadır: ${g(x)} + ${g(b)} = ${g(x + b)}.`); },
    () => { const t = r(5000, 9999), b = r(1000, t - 1000); return soru(`? + ${g(b)} = ${g(t)} işleminde ? kaçtır?`, g(t - b), [Y(g(t + b), "k:bilinmeyen toplanan için çıkarma yerine toplama yapıldı"), g(t - b + 100), g(t - b - 10)], `${g(t)} − ${g(b)} = ${g(t - b)}`); },
    () => { const a = r(1000, 8999), b = r(1000, 8999), ya = (x) => Math.round(x / 100) * 100; return soru(`${g(a)} + ${g(b)} toplamını sayıları en yakın yüzlüğe yuvarlayarak tahmin ediniz.`, g(ya(a) + ya(b)), [Y(g(a + b), "k:tahmin yerine tam toplam hesaplandı (sayılar yuvarlanmadı)"), g(ya(a) + ya(b) + 100), g(ya(a) + ya(b) - 100)], `${g(ya(a))} + ${g(ya(b))} = ${g(ya(a) + ya(b))}`); },
    () => { const a = r(100, 900), b = r(2, 9); const yak = Math.ceil(a / 100) * 100; return soru(`${a} + ${yak - b} işlemini zihinden yapınız.`, g(a + yak - b), [Y(g(a + yak), "d:fazladan eklenen sayı sonunda çıkarılmadı"), g(a + yak - b + 10), Y(g(a + yak + b), "k:fazladan eklenen sayı çıkarılacağına bir kez daha eklendi")], `${a} + ${yak} − ${b} = ${g(a + yak - b)}`); }
  ]);

  // ---------- Çarpma / bölme ----------
  U.m1k3 = tip([
    () => { const a = r(120, 899), b = r(12, 48); return soru(`${a} × ${b} işleminin sonucu kaçtır?`, g(a * b), [Y(g(a * (b % 10) + a * Math.floor(b / 10)), "k:ikinci çarpım satırı bir basamak sola kaydırılmadı"), g(a * b + a), g(a * b - b)], `${a} × ${b} = ${g(a * b)}`); },
    () => { const b = r(6, 25), q = r(12, 99), k = r(1, b - 1); return soru(`Bir bölme işleminde bölen ${b}, bölüm ${q} ve kalan ${k} ise bölünen kaçtır?`, g(b * q + k), [Y(g(b * q), "d:kalan eklenmedi"), Y(g(b * q - k), "k:kalan eklenecek yerde çıkarıldı"), Y(g(b * (q + k)), "k:kalan bölüme eklenip öyle çarpıldı")], `Bölünen = ${b} × ${q} + ${k} = ${g(b * q + k)}`); },
    () => { const b = r(2, 9), q = r(11, 99); const s0 = pick([10, 100]); return soru(`${g(b * q * s0)} ÷ ${b * s0} işleminin sonucu kaçtır?`, String(q), [Y(String(q * 10), "d:sıfırlardan biri sadeleştirilmedi"), String(q + 1), String(Math.max(2, q - 10))], `Sıfırlar sadeleşir: ${b * q} ÷ ${b} = ${q}`); },
    () => { const a = r(2, 9), b = r(2, 9), n1 = pick([10, 100]), n2 = pick([10, 100, 1000]); return soru(`${g(a * n1)} × ${g(b * n2)} işleminin sonucu kaçtır?`, g(a * b * n1 * n2), [Y(g(a * b * n1 * n2 / 10), "d:sonuna bir sıfır eksik yazıldı"), Y(g(a * b * n1 * n2 * 10), "d:sonuna bir sıfır fazla yazıldı"), Y(g((a + b) * n1 * n2), "k:sayılar çarpılacağına toplandı")], `${a} × ${b} = ${a * b}, sonuna ${String(n1 * n2).length - 1} sıfır: ${g(a * b * n1 * n2)}`); },
    () => { const b = r(3, 15); return soru(`Böleni ${b} olan bir bölme işleminde kalan en çok kaç olabilir?`, String(b - 1), [Y(String(b), "k:kalanın bölene eşit olabileceği sanıldı"), Y(String(b + 1), "k:kalanın bölenden büyük olabileceği sanıldı"), String(b - 2)], `Kalan bölenden küçüktür: en çok ${b - 1}.`); },
    () => { const b = r(13, 35), q = r(15, 60), k = r(0, b - 1), n = b * q + k; return soru(`${g(n)} ÷ ${b} işleminde bölüm ve kalan hangisidir?`, `Bölüm ${q}, kalan ${k}`, [`Bölüm ${q + 1}, kalan ${k}`, `Bölüm ${q}, kalan ${k + 1 < b ? k + 1 : k - 1}`, `Bölüm ${q - 1}, kalan ${k}`], `${b} × ${q} = ${g(b * q)}, ${g(n)} − ${g(b * q)} = ${k}`); }
  ]);

  const ISIM = ["Ali", "Ece", "Can", "Zeynep", "Mert", "Elif", "Ahmet", "Ayşe", "Emre", "Defne"];
  U.m1k4 = tip([
    () => { const k = r(12, 40), t = r(12, 48), s = r(100, k * t - 50); return soru(`Bir kırtasiyeye ${k} koli geldi ve her kolide ${t} defter vardı. ${s} defter satıldı. Kaç defter kaldı?`, g(k * t - s), [Y(g(k * t), "d:satılan defterler çıkarılmadı (işlem yarım kaldı)"), Y(g(k * t + s), "k:satılan defterler çıkarılacağına eklendi"), g(k * t - s + 10)], `${k} × ${t} = ${g(k * t)}; ${g(k * t)} − ${s} = ${g(k * t - s)}`); },
    () => { const f = r(35, 95), p = r(800, 2500), n = Math.floor(p / f); return soru(`${pick(ISIM)}'in ${g(p)} TL'si var. Tanesi ${f} TL olan kitaplardan en çok kaç tane alabilir?`, String(n), [Y(String(n + 1), "k:kalan para da bir kitap sayıldı (bölüm yukarı yuvarlandı)"), String(n - 1), String(n + 2)], `${g(p)} ÷ ${f} = ${n}, kalan ${p - n * f}.`); },
    () => { const s = r(8, 20), o = r(20, 32), kap = pick([30, 40, 45, 50]); const top = s * o, n = Math.ceil(top / kap); return soru(`Bir okulda ${s} sınıf ve her sınıfta ${o} öğrenci var. Öğrenciler ${kap} kişilik otobüslerle geziye gidecek. En az kaç otobüs gerekir?`, String(n), [top % kap ? Y(String(n - 1), "k:kalan öğrenciler için bir otobüs daha eklenmedi") : String(n - 1), String(n + 1), String(Math.floor(top / 10))], `${s} × ${o} = ${top}; ${top} ÷ ${kap} = ${Math.floor(top / kap)}${top % kap ? `, kalan ${top % kap} öğrenci için bir otobüs daha` : ""} → ${n}.`); },
    () => { const a = r(10, 30), af = r(20, 60), b = r(5, 20), bf = r(10, 40); return soru(`Tanesi ${af} TL olan ${a} defter ve tanesi ${bf} TL olan ${b} kalem alan biri kaç TL öder?`, g(a * af + b * bf), [Y(g(a * af), "d:kalemlerin tutarı eklenmedi"), Y(g((a + b) * (af + bf)), "k:adetler ve fiyatlar ayrı ayrı toplanıp çarpıldı"), g(a * af + b * bf + 100)], `${a} × ${af} = ${a * af}; ${b} × ${bf} = ${b * bf}; toplam ${g(a * af + b * bf)} TL.`); }
  ]);

  // ---------- Kesirler ----------
  U.m2k1 = tip([
    () => { const p = r(3, 9); const t = r(1, 5), k = r(1, p - 1); return soru(`${t} ${k}/${p} tam sayılı kesrinin bileşik kesir olarak yazılışı hangisidir?`, `${t * p + k}/${p}`, [Y(`${t * k + p}/${p}`, "k:tam kısım payda yerine payla çarpıldı"), Y(`${t + k}/${p}`, "k:tam kısım paydayla çarpılmadan paya eklendi"), Y(`${t * p}/${p}`, "d:pay eklenmedi"), Y(`${t * p + k}/${k}`, "d:paydaya pay yazıldı")], `${t} × ${p} + ${k} = ${t * p + k} → ${t * p + k}/${p}`); },
    () => { const p = r(3, 9), t = r(1, 6), k = r(1, p - 1), pay = t * p + k; return soru(`${pay}/${p} bileşik kesrinin tam sayılı kesir olarak yazılışı hangisidir?`, `${t} ${k}/${p}`, [Y(`${t + 1} ${k}/${p}`, "d:bölüm bir fazla alındı"), `${t} ${p - k === k ? k + 1 > p - 1 ? 1 : k + 1 : p - k}/${p}`, Y(`${k} ${t}/${p}`, "k:tam kısım ile pay yer değiştirdi")], `${pay} ÷ ${p} = ${t}, kalan ${k}.`); },
    () => { const p = r(4, 12), a = r(1, p - 1); return soru(`Bir bütün ${p} eş parçaya bölünmüş ve ${a} parçası boyanmıştır. Boyanmayan kısım bütünün kaçta kaçıdır?`, `${p - a}/${p}`, [Y(`${a}/${p}`, "d:boyanmayan yerine boyanan kısım yazıldı"), Y(`${p - a}/${a}`, "k:payda olarak bütünün parça sayısı yerine boyanan parça sayısı alındı"), Y(`${p}/${p - a}`, "k:pay ve payda ters yazıldı")], `${p} − ${a} = ${p - a} parça → ${p - a}/${p}`); },
    () => { const l = [[r(1, 4), r(5, 9)], [r(6, 12), r(2, 5)], [r(1, 3), r(4, 8)], [r(2, 6), r(7, 11)]]; const bil = l[1]; return soru("Hangisi bileşik kesirdir?", `${bil[0]}/${bil[1]}`, [`${l[0][0]}/${l[0][1]}`, `${l[2][0]}/${l[2][1]}`, `${l[3][0]}/${l[3][1]}`], "Payı paydasından büyük ya da eşit olan kesir bileşik kesirdir."); },
    () => { const p = r(3, 9); return soru(`3/${p} kesri kaç tane 1/${p} birim kesrinden oluşur?`, "3", [Y(String(p), "k:birim kesir sayısının paydaya eşit olduğu sanıldı"), String(p - 3 > 0 && p - 3 !== 3 ? p - 3 : p + 1), "1"], `3/${p} = 1/${p} + 1/${p} + 1/${p}`); }
  ]);

  U.m2k2 = tip([
    () => { const p = r(2, 7), q = r(p + 1, 9); if (gcd(p, q) !== 1) return null; const k = r(2, 6); return soru(`Hangisi ${p}/${q} kesrine denktir?`, `${p * k}/${q * k}`, [Y(`${p * k}/${q + k}`, "k:payda çarpılacağına aynı sayı eklendi"), Y(`${p + k}/${q + k}`, "k:genişletmede çarpmak yerine pay ve paydaya aynı sayı eklendi"), Y(`${p * k}/${q * (k + 1)}`, "k:pay ve payda farklı sayılarla çarpıldı")], `Pay ve payda ${k} ile çarpılır.`); },
    () => { const p = r(1, 5), q = r(p + 1, 9); if (gcd(p, q) !== 1) return null; const k = r(2, 6); return soru(`${p * k}/${q * k} kesrinin en sade hâli hangisidir?`, `${p}/${q}`, [Y(`${p * 2}/${q * 2}`, "d:sadeleştirme sonuna kadar yapılmadı"), Y(`${q}/${p}`, "k:pay ve payda ters çevrildi"), `${p}/${q + 1}`], `Pay ve payda ${k}'ya bölünür.`); },
    () => { const p = r(2, 8); const a = r(2, 9), b = r(2, 9), c = r(2, 9); const pd = [...new Set([a, b, c, a + 3])].slice(0, 3).sort((x, y) => x - y); if (pd.length < 3) return null; return soru(`Payları eşit ${p}/${pd[0]}, ${p}/${pd[1]}, ${p}/${pd[2]} kesirlerinden en büyüğü hangisidir?`, `${p}/${pd[0]}`, [Y(`${p}/${pd[1]}`, "k:paydası büyük olan kesir büyük sanıldı"), Y(`${p}/${pd[2]}`, "k:paydası büyük olan kesir büyük sanıldı"), Y("Hepsi eşittir", "k:payları eşit olan kesirlerin eşit olduğu sanıldı")], "Payları eşit kesirlerde paydası küçük olan büyüktür."); },
    () => { const q = r(5, 12), a = r(1, q - 3), b = a + r(1, 2); return soru(`${a}/${q} ile ${b}/${q} kesirlerinden hangisi büyüktür?`, `${b}/${q}`, [Y(`${a}/${q}`, "d:küçük olan kesir seçildi"), Y("Eşittirler", "k:paydaları eşit kesirlerin eşit olduğu sanıldı"), "Karşılaştırılamaz"], "Paydaları eşit kesirlerde payı büyük olan büyüktür."); },
    () => { const q = pick([4, 6, 8, 10, 12]), a = q / 2 + r(1, q / 2 - 1); return soru("Hangisi 1/2'den büyüktür?", `${a}/${q}`, [`${q / 2 - 1}/${q}`, `${r(1, 3)}/${q + 3}`, `2/${r(5, 9)}`], `${a}/${q} kesrinde pay, paydanın yarısından büyüktür.`); }
  ]);

  U.m2k3 = tip([
    () => { const [p, q, o] = pick([[1, 2, "0,5"], [1, 4, "0,25"], [3, 4, "0,75"], [1, 5, "0,2"], [2, 5, "0,4"], [3, 5, "0,6"], [4, 5, "0,8"], [1, 20, "0,05"], [7, 20, "0,35"], [9, 25, "0,36"], [3, 50, "0,06"], [11, 50, "0,22"]]); return soru(`${p}/${q} kesrinin ondalık gösterimi hangisidir?`, o, [Y(`${p},${q}`, "k:pay ve payda virgülle yan yana yazıldı"), Y(virgul(p / q / 10, 3), "d:virgül bir basamak fazla kaydırıldı"), virgul(p / q + 0.1)], `${p}/${q} = ${Math.round((p / q) * 100)}/100 = ${o}`); },
    () => { const n = r(1, 99), d = pick([10, 100, 1000]); if (n % 10 === 0) return null; return soru(`${n}/${d} kesrinin ondalık gösterimi hangisidir?`, virgul(n / d, 3), [Y(virgul(n / (d * 10), 4), "d:virgülden sonra bir basamak fazla ayrıldı"), Y(virgul((n / d) * 10, 3), "k:paydadaki sıfır sayısı kadar basamak ayrılmadı"), virgul(n / d + 1, 3)], `Paydadaki sıfır sayısı kadar virgülden sonra basamak: ${virgul(n / d, 3)}`); },
    () => { const t = r(1, 9), a = r(2, 9), b = r(1, a - 1); const x = t + a / 10 + b / 100; const l = [virgul(x), virgul(t + b / 10 + a / 100), virgul(t + a / 100), virgul(t + a / 10)]; if (new Set(l).size < 4) return null; return soru("Hangisi en büyüktür?", l[0], [Y(l[1], "k:onda birler basamağı yerine yüzde birler basamağına bakıldı"), Y(l[2], "k:basamak değerine bakılmadan rakama bakıldı (0,0" + a + " ile 0," + a + " karıştı)"), Y(l[3], "k:virgülden sonra daha az basamağı olan sayının daha büyük olduğu sanıldı")], "Önce tam kısımlara, sonra onda birler ve yüzde birler basamaklarına bakılır."); },
    () => { const km = r(1, 9) + r(1, 9) / 10; return soru(`${virgul(km)} km kaç metredir?`, g(Math.round(km * 1000)), [Y(g(Math.round(km * 100)), "k:1 km = 100 m sanıldı"), Y(g(Math.round(km * 10000)), "k:1 km = 10 000 m sanıldı"), g(Math.round(km * 1000) + 50)], "1 km = 1 000 m"); }
  ]);

  U.m2k4 = tip([
    () => { const y = pick([10, 20, 25, 30, 40, 50, 60, 75]), n = r(2, 20) * 20; return soru(`${n} sayısının %${y}'i kaçtır?`, String(n * y / 100), [Y(String(n * y / 10), "k:100 yerine 10'a bölündü"), Y(String(n - n * y / 100), "d:yüzdesi yerine geri kalan kısım bulundu"), String(n * y / 100 + 10)], `${n} ÷ 100 × ${y} = ${n * y / 100}`); },
    () => { const [p, q] = pick([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [3, 10], [7, 10], [9, 20], [7, 25], [13, 50]]); const y = Math.round((p / q) * 100); return soru(`${p}/${q} kesri yüzde kaçtır?`, `%${y}`, [Y(`%${p}${q}`, "k:pay ve payda yan yana yazıldı"), `%${q}`, Y(`%${100 - y}`, "d:kalan yüzde yazıldı")], `${p}/${q} = ${y}/100 = %${y}`); },
    () => { const top = r(2, 8) * 10, y = pick([20, 30, 40, 60, 70]); const a = top * y / 100; return soru(`Bir sınıftaki ${top} öğrencinin %${y}'i gözlüklüdür. Gözlüksüz kaç öğrenci vardır?`, String(top - a), [Y(String(a), "d:gözlüksüz yerine gözlüklü öğrenci sayısı yazıldı"), Y(String(top - y), "k:yüzde değeri öğrenci sayısından doğrudan çıkarıldı"), String(top - a + 2)], `Gözlüklü: ${a}; gözlüksüz: ${top} − ${a} = ${top - a}`); },
    () => { const y = r(1, 99); return soru(`%${y} ifadesinin ondalık gösterimi hangisidir?`, virgul(y / 100), [Y(virgul(y / 10), "k:100 yerine 10'a bölündü"), Y(virgul(y / 1000, 3), "d:virgül bir basamak fazla kaydırıldı"), Y(String(y), "k:yüzde işareti atılıp sayı aynen yazıldı")], `%${y} = ${y}/100 = ${virgul(y / 100)}`); },
    () => { const f = r(2, 15) * 20, y = pick([10, 20, 25, 50]); return soru(`Fiyatı ${f} TL olan bir ürüne %${y} indirim yapıldı. Yeni fiyat kaç TL'dir?`, String(f - f * y / 100), [Y(String(f * y / 100), "d:yeni fiyat yerine indirim tutarı yazıldı"), Y(String(f - y), "k:yüzde değeri fiyattan TL olarak çıkarıldı"), Y(String(f + f * y / 100), "k:indirim fiyata eklendi")], `İndirim: ${f * y / 100} TL; ${f} − ${f * y / 100} = ${f - f * y / 100} TL`); }
  ]);

  // ---------- Cebirsel düşünme ----------
  U.m3k1 = tip([
    () => { const a = r(11, 60), b = r(5, 40), c = r(a + 1, a + b - 1); return soru(`${a} + ${b} = ${c} + ? eşitliğinde ? kaçtır?`, String(a + b - c), [Y(String(a + b + c), "k:eşitliğin iki yanındaki sayılar toplandı"), String(c - a), String(a + b - c + 1)], `${a} + ${b} = ${a + b}; ${a + b} − ${c} = ${a + b - c}`); },
    () => { const a = r(3, 9), b = r(10, 40), c = r(2, 9); return soru(`${a} × (${b} + ${c}) işleminin dağılma özelliği ile yazılışı hangisidir?`, `${a} × ${b} + ${a} × ${c}`, [Y(`${a} × ${b} + ${c}`, "k:çarpan yalnızca ilk terime dağıtıldı"), `${a} + ${b} × ${c}`, Y(`(${a} + ${b}) × ${c}`, "k:parantezin yeri değiştirildi")], "Çarpma, parantezdeki her terime dağıtılır."); },
    () => { const a = r(2, 9), b = r(21, 99); return soru(`${a} × ${b} işlemini dağılma özelliğiyle zihinden yapınız.`, String(a * b), [String(a * b + a), String(a * b - 10), Y(String(a * Math.floor(b / 10) * 10 + b % 10), "k:çarpan yalnızca onluklara dağıtıldı, birlikler çarpılmadı")], `${a} × ${Math.floor(b / 10) * 10} + ${a} × ${b % 10} = ${a * b}`); },
    () => { const x = r(2, 20), k = r(2, 9); return soru(`${x} × ${k} = ? × ${x} eşitliğinde ? kaçtır? (Değişme özelliği)`, String(k), [Y(String(x), "d:eşitliğin öbür yanındaki aynı çarpan yazıldı"), Y(String(x * k), "k:bilinmeyen yerine çarpımın sonucu yazıldı"), String(k + 1)], "Çarpmada sayıların yeri değişince sonuç değişmez."); },
    () => { const a = r(10, 50), b = r(2, 9); return soru(`${a} − ${b} = ${a + 10} − ? eşitliğinde ? kaçtır?`, String(b + 10), [Y(String(b), "k:eksilen 10 artınca çıkanın da 10 artması gerektiği düşünülmedi"), String(b - 10 > 0 ? b - 10 : b + 1), String(a)], `İki taraf da ${a - b}: ${a + 10} − ${b + 10} = ${a - b}`); }
  ]);

  U.m3k2 = tip([
    () => { const a = r(2, 12), b = r(2, 5); return soru(`${a}² + ${b}³ işleminin sonucu kaçtır?`, String(a * a + b ** 3), [Y(String(a * 2 + b * 3), "k:taban üsle çarpıldı"), Y(String(a * a + b * b), "d:üslerden biri yanlış okundu"), String(a * a * b)], `${a}² = ${a * a}, ${b}³ = ${b ** 3}`); },
    () => { const a = r(10, 40), b = r(2, 6), c = r(2, 6), d = r(1, 5); const v = a - b * c + d; if (v < 0) return null; return soru(`${a} − ${b} × ${c} + ${d} işleminin sonucu kaçtır?`, String(v), [Y(String((a - b) * c + d), "k:işlem önceliğine uyulmadı (çıkarma çarpmadan önce yapıldı)"), Y(String(a - b * (c + d)), "k:toplama çarpmadan önce yapıldı"), String(v + 2)], `Önce çarpma: ${b * c}; ${a} − ${b * c} + ${d} = ${v}`); },
    () => { const a = r(2, 6), b = r(1, 5); return soru(`(${a} + ${b})² işleminin sonucu kaçtır?`, String((a + b) ** 2), [Y(String(a * a + b * b), "k:parantezin karesi, terimlerin karelerinin toplamı sanıldı"), Y(String((a + b) * 2), "k:taban üsle çarpıldı"), String(a + b * b)], `Önce parantez: ${a + b}; ${a + b}² = ${(a + b) ** 2}`); },
    () => { const b = r(2, 6), c = r(2, 6), a = b * c * r(1, 4); return soru(`${a} ÷ ${b} × ${c} işleminin sonucu kaçtır?`, String(a / b * c), [Y(String(a / (b * c)), "k:çarpma bölmeden önce yapıldı (soldan sağa yapılmalı)"), String(a / b + c), virgul(a * b / c)], "Çarpma ve bölmede soldan sağa işlem yapılır."); },
    () => { const n = r(2, 10); return soru(`${n}³ ifadesinin değeri kaçtır?`, String(n ** 3), [Y(String(n * 3), "k:taban üsle çarpıldı"), Y(String(n * n), "d:sayı üç yerine iki kez çarpıldı"), String(n ** 3 + n)], `${n} × ${n} × ${n} = ${n ** 3}`); }
  ]);

  U.m3k3 = tip([
    () => { const a = r(2, 15), d = r(3, 9), n = r(6, 10); const t = Array.from({ length: 4 }, (_, i) => a + i * d); return soru(`${t.join(", ")}, ... örüntüsünün ${n}. terimi kaçtır?`, String(a + (n - 1) * d), [Y(String(a + n * d), "k:artış n − 1 yerine n kez eklendi"), Y(String(a + (n - 2) * d), "d:bir adım eksik sayıldı"), Y(String(n * d), "k:ilk terim hesaba katılmadı")], `Her adımda ${d} artar: ${a} + ${n - 1} × ${d} = ${a + (n - 1) * d}`); },
    () => { const k = r(2, 9), e = r(1, 6), n = r(5, 15), art = pick([1, -1]); if (art < 0 && k <= e) return null; const v = k * n + art * e; return soru(`Kuralı "adım sayısının ${k} katının ${e} ${art > 0 ? "fazlası" : "eksiği"}" olan örüntünün ${n}. adımı kaçtır?`, String(v), [Y(String(k * n), "d:fazlası/eksiği adımı yapılmadı"), Y(String(k * n - art * e), "k:fazlası ile eksiği karıştırıldı"), Y(String(k * (n + 1) + art * e), "d:bir sonraki adım hesaplandı")], `${k} × ${n} ${art > 0 ? "+" : "−"} ${e} = ${v}`); },
    () => { const a = r(1, 4), k = pick([2, 3]); const t = [a, a * k, a * k * k, a * k ** 3]; return soru(`${t.join(", ")}, ... örüntüsünde sıradaki sayı kaçtır?`, String(a * k ** 4), [String(a * k ** 3 + a * k), String(a * k ** 3 * 2 + 1), Y(String(a * k ** 3 + (a * k ** 3 - a * k * k)), "k:sayılar hep aynı miktar artıyor sanıldı (örüntü çarpımla ilerliyor)")], `Her adımda ${k} ile çarpılır.`); },
    () => { const s = r(2, 6), e = r(2, 5), n = r(5, 12); return soru(`1. adımında ${s} kare bulunan ve her adımda ${e} kare eklenen şekil örüntüsünün ${n}. adımında kaç kare vardır?`, String(s + (n - 1) * e), [Y(String(s + n * e), "k:artış n − 1 yerine n kez eklendi"), Y(String(n * e), "k:ilk adımdaki kareler hesaba katılmadı"), Y(String(s * n), "k:her adımda ilk adım kadar kare eklendiği sanıldı")], `${s} + ${n - 1} × ${e} = ${s + (n - 1) * e}`); },
    () => { const n = r(3, 9); return soru(`1, 4, 9, 16, ... kare sayılar örüntüsünün ${n}. terimi kaçtır?`, String(n * n), [Y(String(n * 2), "k:karesi alınacağına 2 ile çarpıldı"), Y(String((n - 1) ** 2), "d:bir önceki terim bulundu"), String(n * n + 1)], `${n}. terim: ${n}² = ${n * n}`); }
  ]);

  U.m3k4 = tip([
    () => { const x = r(2, 20), c = r(2, 5), e = r(1, 9), b = pick([1, 2]); const v = (x * c + e); if (v % b) return null; return soru(`"1) Sayıyı ${c} ile çarp 2) ${e} ekle${b > 1 ? " 3) 2'ye böl" : ""}" algoritmasında başlangıç sayısı ${x} ise sonuç kaçtır?`, String(v / b), [Y(String((x + e) * c / b), "k:algoritmanın adımlarının sırası değiştirildi"), b > 1 ? Y(String(v), "d:son adım (2'ye bölme) unutuldu") : String(v), String(v / b + c)], `${x} × ${c} = ${x * c}, + ${e} = ${v}${b > 1 ? `, ÷ 2 = ${v / 2}` : ""}`); },
    () => { const x = r(5, 40); const cift = x % 2 === 0; return soru(`Algoritma: "Sayı çift mi? Evet ise 2'ye böl, hayır ise 1 ekle." Sayı ${x} ise sonuç kaçtır?`, String(cift ? x / 2 : x + 1), [Y(String(cift ? x + 1 : x / 2 + 0.5), "k:çift/tek koşulunun yanıtı ters uygulandı"), String(x * 2), String(x - 1)], cift ? `${x} çifttir: ${x} ÷ 2 = ${x / 2}` : `${x} tektir: ${x} + 1 = ${x + 1}`); },
    () => soru("Akış şemasında evet/hayır sorusu hangi şekille gösterilir?", "Eşkenar dörtgen", ["Oval", Y("Dikdörtgen", "k:işlem kutusu (dikdörtgen) ile karar kutusu karıştırıldı"), "Paralelkenar"], "Karar adımları eşkenar dörtgen ile gösterilir."),
    () => soru("Akış şemasında başla ve bitir adımları hangi şekille gösterilir?", "Oval (elips)", [Y("Eşkenar dörtgen", "k:karar kutusu ile başla/bitir şekli karıştırıldı"), Y("Dikdörtgen", "k:işlem kutusu ile başla/bitir şekli karıştırıldı"), "Üçgen"], "Başla/bitir oval şekille gösterilir.")
  ]);

  // ---------- Geometri ----------
  U.m4k1 = tip([
    () => { const l = pick([["Işın", "bir başlangıç noktası olan, tek yönde sonsuza uzanan"], ["Doğru", "iki yönde sonsuza uzanan"], ["Doğru parçası", "iki ucu sınırlı olan"], ["Düzlem", "her yönde sonsuza uzanan düz"], ["Nokta", "boyutu olmayan, konum belirten"]]); return soru(`${l[1].charAt(0).toLocaleUpperCase("tr") + l[1].slice(1)} geometrik kavram hangisidir?`, l[0], ["Işın", "Doğru", "Doğru parçası", "Düzlem", "Nokta"].filter((x) => x !== l[0]), `${l[0]}: ${l[1]}.`); },
    () => { const l = pick([["[AB]", "AB doğru parçası"], ["[AB", "A'dan başlayan AB ışını"], ["AB", "AB doğrusu"]]); return soru(`${l[0]} gösterimi neyi ifade eder?`, l[1], ["AB doğru parçası", "A'dan başlayan AB ışını", "AB doğrusu", "AB düzlemi"].filter((x) => x !== l[1]).map((x) => (x === "AB düzlemi" ? x : Y(x, "k:doğru, ışın ve doğru parçası gösterimleri karıştırıldı"))), `${l[0]} → ${l[1]}`); },
    () => soru("Uzunluğu cetvelle ölçülebilen hangisidir?", "Doğru parçası", [Y("Doğru", "k:doğrunun iki yönde sonsuza uzandığı unutuldu"), Y("Işın", "k:ışının bir yönde sonsuza uzandığı unutuldu"), "Düzlem"], "Yalnızca iki ucu belli olan doğru parçası ölçülebilir."),
    () => soru("Aynı düzlemde hiç kesişmeyen doğrulara ne denir?", "Paralel doğrular", [Y("Dik doğrular", "k:paralel ve dik doğrular karıştırıldı"), "Kesişen doğrular", "Işınlar"], "Paralel doğrular hiç kesişmez."),
    () => soru("Kesiştiklerinde 90°'lik açı oluşturan doğrulara ne denir?", "Dik doğrular", [Y("Paralel doğrular", "k:paralel ve dik doğrular karıştırıldı"), "Çakışık doğrular", "Eğik doğrular"], "Dik kesişen doğrular 90° açı yapar.")
  ]);

  const turu = (a) => (a < 90 ? "Dar açı" : a === 90 ? "Dik açı" : a < 180 ? "Geniş açı" : a === 180 ? "Doğru açı" : "Tam açı");
  U.m4k2 = tip([
    () => { const a = pick([r(5, 85), 90, r(95, 175), 180, 360]); return soru(`Ölçüsü ${a}° olan açı hangi açı çeşididir?`, turu(a), ["Dar açı", "Dik açı", "Geniş açı", "Doğru açı", "Tam açı"].filter((x) => x !== turu(a)).map((x) => Y(x, "k:açı türlerinin ölçü aralıkları karıştırıldı")), `${a}° → ${turu(a)}`); },
    () => { const s = pick([[3, 90], [6, 180], [9, 90], [12, 0], [2, 60], [4, 120], [1, 30], [5, 150]]); if (s[1] === 0) return null; return soru(`Saat tam ${s[0]}:00'da akrep ile yelkovan arasındaki küçük açı kaç derecedir?`, `${s[1]}°`, ["30°", "60°", "90°", "120°", "150°", "180°"].filter((x) => x !== `${s[1]}°`), `Her saat aralığı 30°'dir: ${Math.min(s[0], 12 - s[0])} × 30° = ${s[1]}°`); },
    () => { const tip2 = pick(["Dar açı", "Geniş açı"]); const d = tip2 === "Dar açı" ? r(10, 85) : r(95, 170); const y = tip2 === "Dar açı" ? [r(95, 170), 90, 180] : [r(10, 85), 90, 180]; return soru(`Hangisi bir ${tip2.toLocaleLowerCase("tr")}dır?`, `${d}°`, y.map((x) => (x === 90 ? Y("90°", "k:dik açı (90°) dar ya da geniş açı sanıldı") : x === 180 ? Y("180°", "k:doğru açı (180°) dar ya da geniş açı sanıldı") : `${x}°`)), `${tip2}: ${tip2 === "Dar açı" ? "0° ile 90° arası" : "90° ile 180° arası"}`); },
    () => soru("Açıları ölçmek için hangi araç kullanılır?", "İletki", ["Pergel", "Gönye", "Dinamometre"], "Açılar iletki ile ölçülür.")
  ]);

  U.m4k3 = tip([
    () => { const a = r(5, 85); return soru(`Ölçüsü ${a}° olan açının tümleri kaç derecedir?`, `${90 - a}°`, [Y(`${180 - a}°`, "k:tümler ile bütünler karıştırıldı (tümler açılar 90°)"), Y(`${a}°`, "d:açının kendisi yazıldı"), `${90 - a + 10}°`], `90° − ${a}° = ${90 - a}°`); },
    () => { const a = r(10, 170); if (a === 90) return null; return soru(`Ölçüsü ${a}° olan açının bütünleri kaç derecedir?`, `${180 - a}°`, [Y(`${Math.abs(90 - a)}°`, "k:bütünler ile tümler karıştırıldı (bütünler açılar 180°)"), Y(`${a}°`, "d:açının kendisi yazıldı"), `${180 - a + 10}°`], `180° − ${a}° = ${180 - a}°`); },
    () => { const a = r(20, 160); if (a === 90) return null; return soru(`Kesişen iki doğrunun oluşturduğu açılardan biri ${a}°'dir. Bu açının ters açısı ve komşu açısı sırasıyla kaç derecedir?`, `${a}° ve ${180 - a}°`, [Y(`${180 - a}° ve ${a}°`, "k:ters açı ile komşu açı karıştırıldı"), Y(`${a}° ve ${a}°`, "k:komşu açıların da eşit olduğu sanıldı"), `${90}° ve ${a}°`], `Ters açılar eşittir, komşu açılar bütünlerdir.`); }
  ]);

  const CK = [["üçgen", 3], ["dörtgen", 4], ["beşgen", 5], ["altıgen", 6], ["yedigen", 7], ["sekizgen", 8], ["dokuzgen", 9], ["ongen", 10]];
  U.m4k4 = tip([
    () => { const [ad, n] = pick(CK); return soru(`Bir ${ad}in kaç köşesi vardır?`, String(n), [String(n + 1), String(n - 1), String(n * 2)], `Çokgenlerde kenar sayısı = köşe sayısı = açı sayısı = ${n}`); },
    () => { const [ad, n] = pick(CK); return soru(`${n} kenarlı çokgene ne ad verilir?`, ad.charAt(0).toLocaleUpperCase("tr") + ad.slice(1), CK.filter((x) => x[1] !== n).map((x) => x[0].charAt(0).toLocaleUpperCase("tr") + x[0].slice(1)), `${n} kenar → ${ad}`); },
    () => { const [ad, n] = pick(CK.slice(1, 6)); return soru(`Bir ${ad}in bir köşesinden kaç köşegen çizilebilir?`, String(n - 3), [Y(String(n - 2), "k:bir köşeden çizilen köşegen sayısı, oluşan üçgen sayısıyla karıştırıldı"), String(n), Y(String(n - 1), "k:komşu köşelere de köşegen çizilebileceği sanıldı")], `Kendisi ve iki komşusu hariç: ${n} − 3 = ${n - 3}`); },
    () => { const a = r(3, 12); const [ad, n] = pick(CK.slice(0, 6)); return soru(`Kenar uzunluğu ${a} cm olan düzgün ${ad}in çevresi kaç cm'dir?`, String(a * n), [String(a * (n + 1)), Y(String(a + n), "k:kenar uzunluğu kenar sayısıyla çarpılacağına toplandı"), Y(String(a * (n - 1)), "d:bir kenar eksik sayıldı")], `${n} × ${a} = ${a * n} cm`); },
    () => soru("Hangisi çokgen değildir?", "Çember", ["Kare", "Altıgen", "Üçgen"], "Çember eğri çizgidir; çokgenler doğru parçalarından oluşur.")
  ]);

  U.m4k5 = tip([
    () => { const a = r(20, 90), b = r(20, 160 - a); return soru(`Bir üçgenin iki iç açısı ${a}° ve ${b}°'dir. Üçüncü açı kaç derecedir?`, `${180 - a - b}°`, [Y(`${360 - a - b}°`, "k:üçgenin iç açıları toplamı 360° sanıldı"), Y(`${a + b}°`, "d:üçüncü açı yerine iki açının toplamı yazıldı"), `${180 - a - b + 10}°`], `180° − (${a}° + ${b}°) = ${180 - a - b}°`); },
    () => { const a = r(20, 70), b = r(20, 160 - a), c = 180 - a - b; const en = Math.max(a, b, c); const t = en < 90 ? "Dar açılı" : en === 90 ? "Dik açılı" : "Geniş açılı"; return soru(`Açıları ${a}°, ${b}° ve ${c}° olan üçgen açılarına göre nasıl bir üçgendir?`, t, ["Dar açılı", "Dik açılı", "Geniş açılı", Y("Eşkenar", "k:açılara göre ve kenarlara göre sınıflandırma karıştırıldı")].filter((x) => x !== t), `En büyük açı ${en}° → ${t.toLocaleLowerCase("tr")}.`); },
    () => { const y = r(2, 15); return soru(`Yarıçapı ${y} cm olan çemberin çapı kaç cm'dir?`, String(2 * y), [Y(String(y), "k:yarıçap ile çap karıştırıldı"), String(y + 2), String(4 * y)], `Çap = 2 × ${y} = ${2 * y} cm`); },
    () => { const s = pick([[[5, 5, 5], "Eşkenar"], [[6, 6, 4], "İkizkenar"], [[7, 4, 7], "İkizkenar"], [[3, 4, 5], "Çeşitkenar"], [[8, 9, 6], "Çeşitkenar"], [[9, 9, 9], "Eşkenar"]]); return soru(`Kenarları ${s[0].join(" cm, ")} cm olan üçgen kenarlarına göre nasıl bir üçgendir?`, s[1], ["Eşkenar", "İkizkenar", "Çeşitkenar", Y("Dik", "k:kenarlara göre ve açılara göre sınıflandırma karıştırıldı")].filter((x) => x !== s[1]), "Eşkenar: 3 kenar eş, ikizkenar: 2 kenar eş, çeşitkenar: hiçbiri eş değil."); },
    () => { const x = r(25, 75); return soru(`Bir ikizkenar üçgende eş açılardan biri ${x}°'dir. Üçüncü açı kaç derecedir?`, `${180 - 2 * x}°`, [Y(`${180 - x}°`, "k:eş açılardan yalnızca biri çıkarıldı"), Y(`${x}°`, "k:üç açının da eşit olduğu sanıldı (eşkenar üçgenle karıştı)"), `${90 - x}°`], `180° − 2 × ${x}° = ${180 - 2 * x}°`); }
  ]);

  // ---------- Çevre / alan ----------
  U.m5k1 = tip([
    () => { const a = r(3, 25), b = r(2, a - 1); return soru(`Kenarları ${a} cm ve ${b} cm olan dikdörtgenin çevresi kaç cm'dir?`, String(2 * (a + b)), [Y(String(a + b), "k:yalnızca iki komşu kenar toplandı"), Y(String(a * b), "k:çevre yerine alan hesaplandı"), Y(String(2 * a + b), "d:bir kenar eksik toplandı")], `2 × (${a} + ${b}) = ${2 * (a + b)} cm`); },
    () => { const a = r(3, 20); return soru(`Çevresi ${4 * a} cm olan karenin bir kenarı kaç cm'dir?`, String(a), [Y(String(2 * a), "k:çevre 4 yerine 2'ye bölündü"), String(a + 2), String(a * a)], `${4 * a} ÷ 4 = ${a} cm`); },
    () => { const a = r(6, 20), b = r(2, a - 1); return soru(`Çevresi ${2 * (a + b)} cm olan dikdörtgenin kısa kenarı ${b} cm ise uzun kenarı kaç cm'dir?`, String(a), [Y(String(2 * (a + b) - b), "k:çevreden yalnızca bir kısa kenar çıkarıldı"), Y(String(a + b), "d:yarım çevre bulundu ama kısa kenar çıkarılmadı"), String(a - b)], `Komşu kenarlar toplamı ${a + b}; ${a + b} − ${b} = ${a}`); },
    () => { const a = r(3, 15); return soru(`Bir kenarı ${a} m olan kare şeklindeki bahçenin çevresi kaç m'dir?`, String(4 * a), [Y(String(a * a), "k:çevre yerine alan hesaplandı"), Y(String(2 * a), "k:yalnızca iki kenar toplandı"), String(4 * a + 4)], `4 × ${a} = ${4 * a} m`); }
  ]);

  U.m5k2 = tip([
    () => { const a = r(4, 25), b = r(2, a - 1); return soru(`Kenarları ${a} m ve ${b} m olan dikdörtgenin alanı kaç m²'dir?`, String(a * b), [Y(String(2 * (a + b)), "k:alan yerine çevre hesaplandı"), Y(String(a + b), "k:kenarlar çarpılacağına toplandı"), String(a * b + a)], `${a} × ${b} = ${a * b} m²`); },
    () => { const a = r(2, 15); return soru(`Alanı ${a * a} cm² olan karenin bir kenarı kaç cm'dir?`, String(a), [String(a * 2), Y(String((a * a) / 2).replace(".", ","), "k:kenarı bulmak için alan 2'ye bölündü"), String(a + 1)], `${a} × ${a} = ${a * a}`); },
    () => { const a = r(3, 12), b = r(2, 10), c = a * b; const yb = r(2, 9); if (c % yb === 0) return null; return soru(`Alanı ${c} cm² olan bir dikdörtgenin kenar uzunlukları hangisi olabilir?`, `${a} cm ve ${b} cm`, [`${yb} cm ve ${Math.round(c / yb)} cm`, `${a + 1} cm ve ${b} cm`, `${a} cm ve ${b + 2} cm`], `${a} × ${b} = ${c}`); },
    () => { const a = r(3, 12), b = r(3, 12); return soru(`Kenarları ${a} cm ve ${b} cm olan dikdörtgenin içine kenarı 1 cm olan kaç birim kare sığar?`, String(a * b), [Y(String(2 * (a + b)), "k:alan yerine çevre hesaplandı"), Y(String(a + b), "k:kenarlar çarpılacağına toplandı"), String(a * b - a)], `${a} sütun × ${b} satır = ${a * b}`); }
  ]);

  U.m5k3 = tip([
    () => { const a = r(10, 40), b = r(5, a - 1), s = r(2, 4); return soru(`Kenarları ${a} m ve ${b} m olan bir tarlanın etrafı ${s} sıra tel ile çevrilecek. Kaç metre tel gerekir?`, String(2 * (a + b) * s), [Y(String(2 * (a + b)), "d:sıra sayısıyla çarpılmadı"), Y(String(a * b * s), "k:çevre yerine alan kullanıldı"), Y(String((a + b) * s), "k:çevre yerine yarım çevre kullanıldı")], `Çevre: ${2 * (a + b)} m; ${s} sıra: ${2 * (a + b) * s} m`); },
    () => { const a = r(3, 9), b = r(2, a), f = pick([100, 150, 200, 250]); return soru(`Kenarları ${a} m ve ${b} m olan bir odanın tabanı, metrekaresi ${f} TL olan halıyla kaplanacak. Maliyet kaç TL'dir?`, g(a * b * f), [Y(g(2 * (a + b) * f), "k:alan yerine çevre kullanıldı"), g(a * b * f + f), Y(g((a + b) * f), "k:kenarlar çarpılacağına toplandı")], `Alan ${a * b} m²; ${a * b} × ${f} = ${g(a * b * f)} TL`); },
    () => { const n = pick([12, 16, 18, 20, 24, 36]); let enk = Infinity; for (let i = 1; i <= n; i++) if (n % i === 0) enk = Math.min(enk, 2 * (i + n / i)); return soru(`Kenar uzunlukları doğal sayı ve alanı ${n} cm² olan dikdörtgenlerden çevresi en küçük olanın çevresi kaç cm'dir?`, String(enk), [Y(String(2 * (1 + n)), "k:uzun ince dikdörtgenin çevresinin en küçük olduğu sanıldı"), String(enk + 2), Y(String(n), "k:alan ile çevre karıştırıldı")], "Kenarlar birbirine en yakın olduğunda çevre en küçük olur."); },
    () => { const k = r(2, 4), a = r(4, 10); return soru(`Bir kenarı ${a} m olan kare bir bahçenin ${k} kenarı boyunca her metreye 1 fidan dikilecek. Toplam kaç metrelik kenar boyunca fidan dikilir?`, String(k > 4 ? 4 * a : k * a), [Y(String(a * a), "k:kenar uzunluğu yerine alan hesaplandı"), String(4 * a + k), Y(String(k + a), "k:kenar sayısı ile kenar uzunluğu çarpılacağına toplandı")], `${Math.min(k, 4)} kenar × ${a} m`); }
  ]);

  // ---------- Veri ----------
  const KAT = [["Futbol", "Basketbol", "Voleybol", "Yüzme"], ["Elma", "Muz", "Çilek", "Portakal"], ["Mavi", "Kırmızı", "Yeşil", "Sarı"], ["Kedi", "Köpek", "Kuş", "Balık"]];
  U.m6k1 = tip([
    () => { const k = pick(KAT), v = k.map(() => r(2, 15)); const top = v.reduce((a, b) => a + b); return soru(`Bir ankette ${k.map((x, i) => `${x}: ${v[i]}`).join(", ")} kişi seçmiştir. Ankete kaç kişi katılmıştır?`, String(top), [String(top + 2), String(top - 3), Y(String(Math.max(...v)), "k:toplam yerine en büyük sıklık yazıldı")], `${v.join(" + ")} = ${top}`); },
    () => { const k = pick(KAT), v = k.map(() => r(2, 15)); const m = Math.max(...v); if (v.filter((x) => x === m).length > 1) return null; const i = v.indexOf(m); return soru(`${k.map((x, j) => `${x}: ${v[j]}`).join(", ")} sıklık tablosunda mod (en çok tekrar eden) hangisidir?`, k[i], k.filter((_, j) => j !== i), `En büyük sıklık ${m}: ${k[i]}`); },
    () => { const k = pick(KAT), v = k.map(() => r(2, 15)); const i = r(0, 3), j = (i + r(1, 3)) % 4; if (v[i] === v[j]) return null; return soru(`${k.map((x, t) => `${x}: ${v[t]}`).join(", ")} verilerine göre ${k[i]} seçenler ${k[j]} seçenlerden kaç kişi ${v[i] > v[j] ? "fazladır" : "azdır"}?`, String(Math.abs(v[i] - v[j])), [Y(String(v[i] + v[j]), "k:fark yerine toplam alındı"), String(Math.abs(v[i] - v[j]) + 1), Y(String(Math.max(v[i], v[j])), "d:fark yerine büyük sayı yazıldı")], `|${v[i]} − ${v[j]}| = ${Math.abs(v[i] - v[j])}`); },
    () => { const l = pick([["En sevilen renk", "Boy uzunluğu"], ["Doğulan şehir", "Kilo"], ["Gidilen okul", "Yaş"], ["Evcil hayvan türü", "Ayakkabı numarası"]]); return soru("Hangisi kategorik veridir?", l[0], [Y(l[1], "k:sayısal veri kategorik veri sanıldı"), Y("Sınavdan alınan puan", "k:sayısal veri kategorik veri sanıldı"), Y("Günlük uyku süresi", "k:sayısal veri kategorik veri sanıldı")], "Kategorik veri sayısal değil, gruplardan oluşur."); }
  ]);

  // ---------- Olasılık ----------
  U.m7k1 = tip([
    () => { const n = r(7, 12); return soru(`Bir zar atıldığında ${n} gelmesi nasıl bir olaydır?`, "İmkânsız", [Y("Kesin", "k:imkânsız olay ile kesin olay karıştırıldı"), "Çok olasılıklı", "Eşit olasılıklı"], `Zarda en büyük sayı 6'dır; ${n} gelemez.`); },
    () => { const renk = pick(["kırmızı", "mavi", "sarı", "yeşil"]); return soru(`İçinde yalnızca ${renk} toplar bulunan torbadan çekilen topun ${renk} olması nasıl bir olaydır?`, "Kesin", [Y("İmkânsız", "k:kesin olay ile imkânsız olay karıştırıldı"), "Az olasılıklı", "Eşit olasılıklı"], "Olasılığı 1 olan olay kesin olaydır."); },
    () => { const a = r(1, 5), b = r(8, 20); const [x, y] = pick([["kırmızı", "yeşil"], ["mavi", "sarı"], ["beyaz", "siyah"]]); return soru(`Torbada ${a} ${x}, ${b} ${y} bilye var. Hangisi doğrudur?`, `${y.charAt(0).toLocaleUpperCase("tr") + y.slice(1)} bilye çekmek daha olasıdır.`, [Y(`${x.charAt(0).toLocaleUpperCase("tr") + x.slice(1)} bilye çekmek daha olasıdır.`, "k:sayısı az olan rengin daha olası olduğu sanıldı"), Y("İki renk eşit olasılıklıdır.", "k:iki renk var diye olasılıkların eşit olduğu sanıldı"), Y(`${x.charAt(0).toLocaleUpperCase("tr") + x.slice(1)} bilye çekmek imkânsızdır.`, "k:az olasılıklı olay imkânsız sanıldı")], `${y} bilyeler daha çok.`); },
    () => soru("Hangisi bir olasılık değeri olamaz?", pick(["1,2", "2", "1,5", "3/2"]), [Y("0", "k:olasılığın 0 olamayacağı sanıldı"), Y("1", "k:olasılığın 1 olamayacağı sanıldı"), "0,5"], "Olasılık 0 ile 1 arasındadır."),
    () => soru("Yazı-tura atıldığında yazı gelmesi ile tura gelmesi için hangisi doğrudur?", "Eşit olasılıklıdır.", ["Yazı daha olasıdır.", "Tura imkânsızdır.", "Yazı kesindir."], "Paranın iki yüzü eşit şansa sahiptir.")
  ]);
})();
