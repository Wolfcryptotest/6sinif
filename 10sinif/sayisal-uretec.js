// 🔢 Sayısal konular için parametreli soru üreteci (8–12). İçerik dosyalarından SONRA, app.js'ten ÖNCE yüklenir.
// Konu adına (ve ders anahtarına) göre eşleşir; konunun kendi üreteci varsa dokunmaz. Her çağrıda sayıları farklı yeni bir soru üretir.
(function () {
  const ICERIK = window.ICERIK || {};
  window.URETEC = window.URETEC || {};
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const karistir = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = r(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const yaz = (x) => { if (typeof x !== "number") return String(x); const v = Math.round(x * 1000) / 1000; return String(v).replace(".", ","); };
  const ebob = (a, b) => (b ? ebob(b, a % b) : Math.abs(a));
  // Yanılgı etiketli yanlış şık (A4): Y(değer, "d:...") dikkat hatası, Y(değer, "k:...") kavram yanılgısı.
  // Öğrenci o şıkkı seçerse etiket Bilge'nin teşhisi olur (ustalik.js → hataKaydet). null şıklar atlanır.
  const Y = (v, e) => ({ v, e });
  const ayir = (y) => (y != null && typeof y === "object" ? [y.v, y.e] : [y, null]);
  const bitir = (q, yan) => { const e = {}; for (const t of q.secenekler) if (yan[t]) e[t] = yan[t]; if (Object.keys(e).length) q.yanilgi = e; return q; };
  // Sayısal soru: doğru değer + yakın çeldiriciler (birim isteğe bağlı)
  function S(soru, dogru, yanlis, cozum, birim) {
    const b = birim ? " " + birim : "";
    const d = yaz(dogru) + b, set = new Set([d]), sec = [d], yan = {};
    const aday = (yanlis || []).concat([dogru * 2, dogru / 2, dogru + 1, dogru - 1, dogru * 10, dogru + 2, dogru * 3, -dogru]);
    for (const y0 of aday) { const [y, et] = ayir(y0); if (y == null) continue; const t = yaz(y) + b; if (Number.isFinite(+String(y)) || typeof y === "string") if (!set.has(t) && sec.length < 4 && t !== "NaN" + b) { set.add(t); sec.push(t); if (et) yan[t] = et; } }
    if (sec.length < 4) return null;
    return bitir({ soru, secenekler: sec, dogru: 0, cozum, uretildi: true }, yan);
  }
  const T = (soru, dogru, yanlislar, cozum) => { const s = [String(dogru)], yan = {}; for (const y0 of yanlislar) { const [y, et] = ayir(y0); if (y == null) continue; const t = String(y); if (!s.includes(t)) { s.push(t); if (et) yan[t] = et; } } return s.length >= 4 ? bitir({ soru, secenekler: s.slice(0, 4), dogru: 0, cozum, uretildi: true }, yan) : null; };

  // ---------- Matematik ----------
  const M = {
    uslu: () => pick([
      () => { const a = r(2, 5), m = r(2, 4), n = r(1, 3); return S(`${a}^${m} · ${a}^${n} işleminin sonucu ${a} tabanında hangi üsse eşittir?`, m + n, [Y(m * n, "k:tabanları aynı üslü sayılar çarpılırken üsler çarpıldı (üsler toplanmalı)"), Y(m - n, "k:çarpmada üsler çıkarıldı (üsler bölmede çıkarılır)"), m + n + 1], `Tabanlar aynıysa üsler toplanır: ${m} + ${n} = ${m + n}.`); },
      () => { const a = r(2, 6), n = r(2, 3); return S(`${a}^${n} kaçtır?`, a ** n, [Y(a * n, "k:taban üsle çarpıldı (üs, tabanın kaç kez çarpılacağını gösterir)"), Y(a ** (n - 1), "d:taban bir kez eksik çarpıldı"), a ** n + a], `${a}'ü ${n} kez çarparız.`); },
      () => { const a = r(2, 9); return S(`(−${a})² kaçtır?`, a * a, [Y(-a * a, "k:negatif sayının çift kuvveti negatif sanıldı"), Y(2 * a, "k:kare almak 2 ile çarpmak sanıldı"), -2 * a], `Negatif sayının çift kuvveti pozitiftir.`); },
      () => { const a = r(2, 9); return S(`${a}⁰ kaçtır?`, 1, [Y(0, "k:sıfırıncı kuvvet 0 sanıldı (sıfırdan farklı sayının sıfırıncı kuvveti 1)"), Y(a, "k:sıfırıncı kuvvet sayının kendisi sanıldı"), -1], `Sıfırdan farklı her sayının sıfırıncı kuvveti 1'dir.`); },
      () => { const n = r(2, 6); return S(`10^${n} sayısında kaç tane sıfır vardır?`, n, [n + 1, n - 1, Y(10 * n, "k:10ⁿ, 10 · n sanıldı")], `10'un n. kuvvetinde n sıfır vardır.`); },
      () => { const a = r(2, 4), n = r(1, 3); return S(`${a}^(−${n}) kaçtır?`, `1/${a ** n}`, [Y(`−${a ** n}`, "k:negatif üs sayıyı negatif yapar sanıldı (a⁻ⁿ = 1/aⁿ)"), Y(`${a ** n}`, "d:üsteki eksi işareti dikkate alınmadı"), Y(`−1/${a ** n}`, "k:negatif üs sonucu negatif yapar sanıldı")], `a^(−n) = 1/aⁿ.`); }
    ])(),
    karekok: () => pick([
      () => { const a = r(2, 15); return S(`√${a * a} kaçtır?`, a, [Y(a * a, "d:karekök alınmadı, kök içindeki sayı yazıldı"), a + 1, Y(2 * a, "k:karekök almak 2 ile çarpmak sanıldı")], `${a} × ${a} = ${a * a}.`); },
      () => { const k = pick([2, 3, 5]), a = r(2, 6); return T(`√${a * a * k} ifadesinin en sade hâli hangisidir?`, `${a}√${k}`, [Y(`${k}√${a}`, "d:kökün dışına çıkan sayı ile içinde kalan sayı yer değiştirdi"), `${a * k}√1`, Y(`${a * a}√${k}`, "k:kökün dışına çıkarılan sayının karekökü alınmadı"), `√${a * k}`], `√(${a * a}·${k}) = ${a}√${k}.`); },
      () => { const a = r(2, 9), b = r(2, 9); return T(`${a}√3 + ${b}√3 işleminin sonucu nedir?`, `${a + b}√3`, [Y(`${a + b}√6`, "k:kök içleri de toplandı (yalnızca katsayılar toplanır)"), Y(`${a * b}√3`, "k:katsayılar toplanacakken çarpıldı"), Y(`${a + b}√9`, "k:kök içleri çarpıldı (toplamada kök içi değişmez)")], `Kök içleri aynı olan ifadelerin katsayıları toplanır.`); },
      () => { const a = r(3, 12); return S(`√${a * a} ile √${(a + 1) * (a + 1)} arasındaki tam sayı farkı kaçtır?`, 1, [2, a, 0], `${a + 1} − ${a} = 1.`); },
      () => { const n = r(10, 99), a = Math.floor(Math.sqrt(n)); if (a * a === n) return null; return T(`√${n} hangi iki ardışık tam sayı arasındadır?`, `${a} ile ${a + 1}`, [Y(`${a - 1} ile ${a}`, "d:aralık bir eksik alındı; sınırların karelerini kontrol et"), Y(`${a + 1} ile ${a + 2}`, "d:aralık bir fazla alındı; sınırların karelerini kontrol et"), `${a + 2} ile ${a + 3}`], `${a}² = ${a * a} < ${n} < ${(a + 1) ** 2} = ${a + 1}².`); }
    ])(),
    ebob: () => pick([
      () => { const g = r(2, 9), a = g * r(2, 7), b = g * r(2, 7); const e = ebob(a, b); return S(`${a} ve ${b} sayılarının EBOB'u kaçtır?`, e, [e * 2, Math.max(1, e / 2), Y((a * b) / e, "k:EBOB yerine EKOK bulundu")], `Ortak bölenlerin en büyüğü ${e}'dir.`); },
      () => { const a = r(2, 12), b = r(2, 12), e = ebob(a, b), k = (a * b) / e; return S(`${a} ve ${b} sayılarının EKOK'u kaçtır?`, k, [a * b === k ? k + a : Y(a * b, "k:sayılar doğrudan çarpıldı; ortak çarpanlar bir kez alınmalı"), Y(e, "k:EKOK yerine EBOB bulundu"), k / 2], `EKOK = ${a}·${b}/EBOB = ${k}.`); },
      () => { const p = pick([2, 3, 5, 7, 11, 13]); return T(`Hangisi asal sayıdır?`, `${p}`, [`${p * 2}`, `${p * 3}`, `${p * p}`, `${p + 1 === 4 ? 9 : p + 1}`], `${p} yalnızca 1'e ve kendisine bölünür.`); }
    ])(),
    olasilik: () => pick([
      () => { const k = r(1, 6), m = r(1, 6), t = k + m; return T(`Bir torbada ${k} kırmızı ve ${m} mavi top var. Rastgele çekilen topun kırmızı olma olasılığı kaçtır?`, `${k}/${t}`, [Y(`${m}/${t}`, "d:istenen renk yerine diğer rengin sayısı alındı"), Y(`${k}/${m}`, "k:payda tüm topların sayısı olmalı; kırmızılar mavilere oranlandı"), `1/${t}`, `${t - 1}/${t}`], `İstenen ${k}, tüm durum ${t}.`); },
      () => { const n = pick([[2, "çift"], [3, "3'ün katı"], [1, "6"]]); const iy = n[0] === 2 ? 3 : n[0] === 3 ? 2 : 1; return T(`Bir zar atıldığında üst yüze ${n[1]} gelme olasılığı kaçtır?`, `${iy}/6`, [Y(`${6 - iy}/6`, "d:istenen durumlar yerine istenmeyen durumlar sayıldı"), `1/${iy + 1}`, Y(`${iy}/12`, "k:zarda 12 durum varmış gibi hesaplandı (6 yüz var)"), `1/12`], `Zarda 6 durum vardır; istenen ${iy} durum.`); },
      () => { const n = r(5, 20), a = r(1, n - 1); return T(`1'den ${n}'ye kadar numaralanmış kartlardan rastgele biri çekiliyor. Kartın ${a}'dan büyük olma olasılığı kaçtır?`, `${n - a}/${n}`, [Y(`${a}/${n}`, "d:büyük olanlar yerine küçük ya da eşit olanlar sayıldı"), `${n - a - 1}/${n}`, Y(`${n - a + 1}/${n}`, "d:'büyük' koşulunda sayının kendisi de sayıldı")], `${a}'dan büyük ${n - a} kart vardır.`); },
      () => { const p = r(1, 9) / 10; return S(`Bir olayın olma olasılığı ${yaz(p)} ise olmama olasılığı kaçtır?`, Math.round((1 - p) * 10) / 10, [Y(p, "k:olmama olasılığı olma olasılığına eşit sanıldı"), 1, Y(Math.round((1 + p) * 10) / 10, "k:1'den çıkarılacakken 1 ile toplandı")], `1 − ${yaz(p)}.`); }
    ])(),
    denklem: () => pick([
      () => { const x = r(-9, 9), a = r(2, 7), b = r(-10, 10); return S(`${a}x ${b >= 0 ? "+" : "−"} ${Math.abs(b)} = ${a * x + b} denkleminde x kaçtır?`, x, [x + 1, Y(-x, "d:sonucun işareti yanlış alındı (terim karşıya geçerken işaret değişir)"), x * 2], `${a}x = ${a * x}, x = ${x}.`); },
      () => { const x1 = r(-5, 5), y1 = r(-5, 5), dx = r(1, 4), m = r(-3, 3); const x2 = x1 + dx, y2 = y1 + m * dx; return S(`A(${x1}, ${y1}) ve B(${x2}, ${y2}) noktalarından geçen doğrunun eğimi kaçtır?`, m, [m + 1, m ? Y(-m, "d:farklar ters sırayla alındı, işaret değişti") : 2, Y(dx, "k:eğim için yalnızca x'teki değişim alındı (y'deki değişim x'tekine bölünmeli)")], `Eğim = (y₂ − y₁)/(x₂ − x₁) = ${m * dx}/${dx}.`); },
      () => { const m = r(-4, 4) || 2, n = r(-6, 6), x = r(-3, 3); return S(`y = ${m}x ${n >= 0 ? "+" : "−"} ${Math.abs(n)} doğrusunda x = ${x} iken y kaçtır?`, m * x + n, [Y(m * x - n, "d:sabit terimin işareti değişti"), Y(m + x + n, "k:mx çarpım değil toplam sanıldı"), m * (x + 1) + n], `y = ${m}·(${x}) ${n >= 0 ? "+" : "−"} ${Math.abs(n)}.`); },
      () => { const a = r(2, 6), x = r(-6, 6), b = r(1, 9), c = a * x + b; return T(`${a}x + ${b} > ${c} eşitsizliğinin çözüm kümesi hangisidir?`, `x > ${x}`, [Y(`x < ${x}`, "k:pozitif sayıya bölünce eşitsizliğin yönü değiştirildi (değişmez)"), `x > ${x + 1}`, Y(`x ≥ ${x}`, "d:kesin eşitsizlik (>) eşitlikli (≥) yazıldı")], `${a}x > ${c - b} → x > ${x}.`); }
    ])(),
    cebir: () => pick([
      () => { const a = r(1, 9), b = r(1, 9); return T(`(x + ${a})(x + ${b}) çarpımı hangisine eşittir?`, `x² + ${a + b}x + ${a * b}`, [Y(`x² + ${a * b}x + ${a + b}`, "d:x'in katsayısı ile sabit terim yer değiştirdi"), `x² + ${a + b}x + ${a + b}`, Y(`x² + ${a * b}`, "k:yalnızca ilk terimler ve son terimler çarpıldı; ortadaki terimler unutuldu"), Y(`2x + ${a + b}`, "k:x · x = 2x sanıldı (x · x = x²)")], `x² + ${b}x + ${a}x + ${a * b}.`); },
      () => { const a = r(1, 9); return T(`(x + ${a})² ifadesinin açılımı hangisidir?`, `x² + ${2 * a}x + ${a * a}`, [Y(`x² + ${a * a}`, "k:(a + b)² = a² + b² sanıldı; ortadaki 2ab terimi unutuldu"), Y(`x² + ${a}x + ${a * a}`, "d:ortadaki terim 2ab yerine ab yazıldı"), Y(`x² + ${2 * a}x + ${2 * a}`, "k:b² yerine 2b yazıldı")], `(a + b)² = a² + 2ab + b².`); },
      () => { const a = r(2, 9); return T(`x² − ${a * a} ifadesinin çarpanlarına ayrılmış hâli hangisidir?`, `(x − ${a})(x + ${a})`, [Y(`(x − ${a})²`, "k:iki kare farkı, farkın karesi sanıldı"), Y(`(x + ${a})²`, "k:iki kare farkı, toplamın karesi sanıldı"), `(x − ${a * a})(x + 1)`], `İki kare farkı: a² − b² = (a − b)(a + b).`); },
      () => { const a = r(2, 6), b = r(2, 6); return T(`${a}x · ${b}x² işleminin sonucu nedir?`, `${a * b}x³`, [Y(`${a + b}x³`, "k:katsayılar çarpılacakken toplandı"), Y(`${a * b}x²`, "d:x'in üssü eksik yazıldı (x · x² = x³)"), Y(`${a * b}x⁶`, "k:üsler toplanacakken çarpıldı")], `Katsayılar çarpılır, üsler toplanır.`); }
    ])(),
    ucgen: () => pick([
      () => { const [a, b, c] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25]]); return S(`Dik kenarları ${a} ve ${b} birim olan dik üçgenin hipotenüsü kaç birimdir?`, c, [Y(a + b, "k:hipotenüs dik kenarların toplamı sanıldı (karelerin toplamının karekökü)"), c + 1, c - 1], `${a}² + ${b}² = ${c * c} → ${c}.`); },
      () => { const x = r(30, 80), y = r(20, 160 - x); return S(`Bir üçgenin iki iç açısı ${x}° ve ${y}° ise üçüncü açı kaç derecedir?`, 180 - x - y, [Y(180 - x, "d:yalnızca bir açı 180'den çıkarıldı"), Y(360 - x - y, "k:üçgenin iç açıları toplamı 360° sanıldı (180°)"), Y(x + y, "k:iki açının toplamı üçüncü açı sanıldı")], `180 − (${x} + ${y}).`, ""); },
      () => { const a = r(3, 9), b = r(3, 9); const lo = Math.abs(a - b) + 1, hi = a + b - 1; return S(`Kenarları ${a} ve ${b} birim olan üçgenin üçüncü kenarı tam sayı olarak en çok kaç birim olabilir?`, hi, [hi + 1, Y(a + b, "k:üçüncü kenar diğer iki kenarın toplamına eşit olabilir sanıldı (toplamdan küçük olmalı)"), Y(lo, "d:en çok yerine en az değer bulundu")], `Üçüncü kenar ${a + b}'den küçük olmalıdır.`); },
      () => { const t = r(20, 140); return S(`Tepe açısı ${t}° olan ikizkenar üçgenin bir taban açısı kaç derecedir?`, (180 - t) / 2, [Y(180 - t, "d:2'ye bölmek unutuldu (iki taban açısı eşittir)"), Y(t, "k:taban açısı tepe açısına eşit sanıldı"), (180 - t) / 2 + 10], `(180 − ${t}) ÷ 2.`); }
    ])(),
    cisim: () => pick([
      () => { const a = r(2, 9); return S(`Kenarı ${a} cm olan küpün hacmi kaç cm³'tür?`, a ** 3, [Y(a * a, "k:hacim için kenarın karesi alındı (küpü alınmalı)"), Y(6 * a * a, "k:hacim yerine yüzey alanı hesaplandı"), Y(3 * a, "k:a³, 3 · a sanıldı")], `a³ = ${a}³.`); },
      () => { const a = r(2, 6), b = r(2, 6), c = r(2, 9); return S(`Boyutları ${a}, ${b} ve ${c} cm olan dikdörtgenler prizmasının hacmi kaç cm³'tür?`, a * b * c, [Y(a + b + c, "k:boyutlar çarpılacakken toplandı"), Y(2 * (a * b + a * c + b * c), "k:hacim yerine yüzey alanı hesaplandı"), Y(a * b, "d:yükseklikle çarpılmadı (yalnızca taban alanı bulundu)")], `${a}·${b}·${c}.`); },
      () => { const rr = r(1, 6), h = r(2, 10); return S(`Yarıçapı ${rr} cm, yüksekliği ${h} cm olan silindirin hacmi kaç cm³'tür? (π = 3)`, 3 * rr * rr * h, [Y(3 * rr * h, "d:yarıçapın karesi alınmadı"), Y(2 * 3 * rr * h, "k:hacim yerine yanal alan hesaplandı"), Y(3 * rr * rr, "d:yükseklikle çarpılmadı (yalnızca taban alanı bulundu)")], `π·r²·h = 3·${rr * rr}·${h}.`); },
      () => { const a = r(2, 6), h = r(3, 9); return S(`Taban kenarı ${a} cm, yüksekliği ${h} cm olan kare piramidin hacmi kaç cm³'tür?`, (a * a * h) / 3, [Y(a * a * h, "k:1/3 ile çarpılmadı; prizmanın hacmi bulundu"), Y((a * h) / 3, "d:taban alanı için kenarın karesi alınmadı"), a * a + h], `(1/3)·taban alanı·yükseklik.`); },
      () => { const a = r(2, 8); return S(`Kenarı ${a} cm olan küpün yüzey alanı kaç cm²'dir?`, 6 * a * a, [Y(a ** 3, "k:yüzey alanı yerine hacim hesaplandı"), Y(4 * a * a, "d:yüzlerden ikisi unutuldu (küpün 6 yüzü var)"), Y(6 * a, "d:bir yüzün alanı için kenarın karesi alınmadı")], `6·a².`); }
    ])(),
    trig: () => { const v = pick([["sin 30°", "1/2"], ["cos 60°", "1/2"], ["sin 90°", "1"], ["cos 0°", "1"], ["tan 45°", "1"], ["sin 0°", "0"], ["cos 90°", "0"], ["sin 60°", "√3/2"], ["cos 30°", "√3/2"], ["sin 45°", "√2/2"], ["cos 180°", "−1"], ["tan 60°", "√3"], ["tan 30°", "√3/3"], ["cos 120°", "−1/2"], ["sin 150°", "1/2"]]); return T(`${v[0]} değeri kaçtır?`, v[1], karistir(["1/2", "√3/2", "√2/2", "1", "0", "−1", "√3", "−1/2", "√3/3"].filter((x) => x !== v[1])).slice(0, 3), `Özel açıların trigonometrik değerleri.`); },
    fonksiyon: () => pick([
      () => { const a = r(-5, 5) || 3, b = r(-9, 9), x = r(-4, 4); return S(`f(x) = ${a}x ${b >= 0 ? "+" : "−"} ${Math.abs(b)} ise f(${x}) kaçtır?`, a * x + b, [Y(a * x - b, "d:sabit terimin işareti değişti"), Y(a + x + b, "k:ax çarpım değil toplam sanıldı"), a * (x + 1) + b], `x yerine ${x} yazılır.`); },
      () => { const a = r(1, 4), b = r(-5, 5), c = r(-5, 5), x = r(-3, 3); return S(`f(x) = ${a}x² ${b >= 0 ? "+" : "−"} ${Math.abs(b)}x ${c >= 0 ? "+" : "−"} ${Math.abs(c)} ise f(${x}) kaçtır?`, a * x * x + b * x + c, [Y(a * x * x - b * x + c, "d:bx teriminde işaret hatası yapıldı"), Y(a * x + b * x + c, "d:x² yerine x alındı (kare alınmadı)"), Y(a * x * x + b * x - c, "d:sabit terimin işareti değişti")], `x yerine ${x} yazılır.`); },
      () => { const a = r(2, 6), b = r(1, 9); return T(`f(x) = ${a}x + ${b} fonksiyonunun tersi hangisidir?`, `(x − ${b})/${a}`, [Y(`(x + ${b})/${a}`, "d:sabit terim karşıya geçerken işareti değiştirilmedi"), Y(`${a}x − ${b}`, "k:ters fonksiyon için yalnızca işaret değiştirildi"), Y(`x/${a} + ${b}`, "k:işlemler ters sırayla geri alınmadı (önce çıkar, sonra böl)")], `y = ${a}x + ${b} → x = (y − ${b})/${a}.`); }
    ])(),
    log: () => pick([
      () => { const a = pick([2, 3, 5, 10]), n = r(1, a === 10 ? 4 : 5); return S(`log${a === 10 ? "" : "_" + a} ${a ** n} kaçtır?`, n, [n + 1, Y(a ** n / a, "k:logaritma, sayıyı tabana bölmek sanıldı"), n - 1], `${a}^${n} = ${a ** n}.`); },
      () => { const a = pick([2, 3]), m = r(1, 4), n = r(1, 4); return S(`log_${a} ${a ** m} + log_${a} ${a ** n} kaçtır?`, m + n, [Y(m * n, "k:logaritma değerleri toplanacakken çarpıldı"), m + n + 1, Y(a ** (m + n), "k:logaritma değeri yerine sayının kendisi yazıldı")], `Logaritmaların toplamı: ${m} + ${n}.`); },
      () => { const a = r(2, 9); return S(`log_${a} 1 kaçtır?`, 0, [Y(1, "k:log 1 = 1 sanıldı (a⁰ = 1 olduğundan log 1 = 0)"), Y(a, "k:log_a 1, tabana eşit sanıldı"), -1], `Her tabanda log 1 = 0.`); }
    ])(),
    dizi: () => pick([
      () => { const a1 = r(-5, 9), d = r(-4, 6) || 3, n = r(5, 20); return S(`İlk terimi ${a1}, ortak farkı ${d} olan aritmetik dizinin ${n}. terimi kaçtır?`, a1 + (n - 1) * d, [Y(a1 + n * d, "d:fark n − 1 yerine n kez eklendi"), a1 * n + d, Y(a1 + (n - 2) * d, "d:fark bir kez eksik eklendi")], `aₙ = a₁ + (n − 1)·d.`); },
      () => { const a1 = r(1, 5), q = r(2, 3), n = r(3, 6); return S(`İlk terimi ${a1}, ortak çarpanı ${q} olan geometrik dizinin ${n}. terimi kaçtır?`, a1 * q ** (n - 1), [Y(a1 * q ** n, "d:üs n − 1 yerine n alındı"), a1 * q * n, Y(a1 + q * (n - 1), "k:geometrik dizi aritmetik dizi gibi (toplayarak) hesaplandı")], `aₙ = a₁·qⁿ⁻¹.`); },
      () => { const n = r(5, 30); return S(`1'den ${n}'e kadar olan doğal sayıların toplamı kaçtır?`, (n * (n + 1)) / 2, [n * n, Y((n * (n - 1)) / 2, "d:formül n(n − 1)/2 diye yanlış hatırlandı"), Y(n * (n + 1), "d:2'ye bölmek unutuldu")], `n(n + 1)/2.`); }
    ])(),
    sayma: () => pick([
      () => { const n = r(3, 7); let f = 1; for (let i = 2; i <= n; i++) f *= i; return S(`${n}! kaçtır?`, f, [Y(f / n, "d:son çarpan unutuldu"), f * (n + 1), Y(n * n, "k:n!, n · n sanıldı")], `${n}! = 1·2·…·${n}.`); },
      () => { const n = r(4, 9), k = r(2, 3); let p = 1; for (let i = 0; i < k; i++) p *= n - i; return S(`${n} kişi arasından ${k} kişi sıralı olarak (başkan, yardımcı...) kaç farklı şekilde seçilir?`, p, [Y(p / (k === 2 ? 2 : 6), "k:sıra önemliyken sırasız seçim (kombinasyon) yapıldı"), n * k, Y(n ** k, "k:aynı kişi birden çok göreve seçilebilir sanıldı")], `P(${n}, ${k}).`); },
      () => { const n = r(4, 10), k = r(2, 3); let p = 1, f = 1; for (let i = 0; i < k; i++) { p *= n - i; f *= i + 1; } return S(`${n} kişilik bir gruptan ${k} kişilik bir ekip kaç farklı şekilde seçilir?`, p / f, [Y(p, "k:sıra önemsizken sıralı seçim (permütasyon) yapıldı; k!'e bölünmeli"), Y(n * k, "k:kişi sayısı seçilecek kişi sayısıyla çarpıldı"), p / f + n], `C(${n}, ${k}) = ${p}/${f}.`); },
      () => { const a = r(2, 6), b = r(2, 6); return S(`${a} farklı tişört ve ${b} farklı pantolonu olan biri kaç farklı şekilde giyinebilir?`, a * b, [Y(a + b, "k:'ve' durumunda toplama yapıldı (çarpma ilkesi kullanılmalı)"), a * b + 1, a ** b], `Çarpma ilkesi: ${a}·${b}.`); }
    ])(),
    ikinci: () => pick([
      () => { const x1 = r(-6, 6), x2 = r(-6, 6); const b = -(x1 + x2), c = x1 * x2; return S(`x² ${b >= 0 ? "+" : "−"} ${Math.abs(b)}x ${c >= 0 ? "+" : "−"} ${Math.abs(c)} = 0 denkleminin kökler toplamı kaçtır?`, x1 + x2, [Y(x1 * x2, "d:kökler toplamı yerine çarpımı bulundu"), (x1 + x2) ? Y(-(x1 + x2), "k:kökler toplamı b/a sanıldı (−b/a olmalı)") : 1, x1 + x2 + 1], `Kökler toplamı −b/a.`); },
      () => { const x1 = r(-6, 6), x2 = r(-6, 6); const b = -(x1 + x2), c = x1 * x2; return S(`x² ${b >= 0 ? "+" : "−"} ${Math.abs(b)}x ${c >= 0 ? "+" : "−"} ${Math.abs(c)} = 0 denkleminin kökler çarpımı kaçtır?`, c, [Y(x1 + x2, "d:kökler çarpımı yerine toplamı bulundu"), c ? Y(-c, "k:kökler çarpımı −c/a sanıldı (c/a olmalı)") : 1, c + 1], `Kökler çarpımı c/a.`); },
      () => { const a = 1, b = r(-8, 8), c = r(-8, 8), D = b * b - 4 * a * c; return T(`x² ${b >= 0 ? "+" : "−"} ${Math.abs(b)}x ${c >= 0 ? "+" : "−"} ${Math.abs(c)} = 0 denkleminin kaç farklı gerçek kökü vardır?`, D > 0 ? "2" : D === 0 ? "1" : "0", ["2", "1", "0", "3"].filter((x) => x !== (D > 0 ? "2" : D === 0 ? "1" : "0")), `Δ = b² − 4ac = ${D}.`); }
    ])(),
    turev: () => pick([
      () => { const a = r(1, 6), n = r(2, 5), x = r(1, 3); return S(`f(x) = ${a}x^${n} ise f'(${x}) kaçtır?`, a * n * x ** (n - 1), [Y(a * x ** n, "k:türev alınmadan x yerine değer yazıldı"), Y(a * n * x ** n, "d:üs bir azaltılmadı"), Y(a * (n - 1) * x ** (n - 1), "k:katsayı üsle değil üs − 1 ile çarpıldı")], `f'(x) = ${a * n}x^${n - 1}.`); },
      () => { const a = r(1, 6), b = r(-9, 9); return T(`f(x) = ${a}x² ${b >= 0 ? "+" : "−"} ${Math.abs(b)}x fonksiyonunun türevi hangisidir?`, `${2 * a}x ${b >= 0 ? "+" : "−"} ${Math.abs(b)}`, [Y(`${a}x ${b >= 0 ? "+" : "−"} ${Math.abs(b)}`, "d:katsayı üsle çarpılmadı"), Y(`${2 * a}x`, "k:bx teriminin türevi 0 sanıldı (türevi b)"), Y(`${2 * a}x² ${b >= 0 ? "+" : "−"} ${Math.abs(b)}`, "d:üs bir azaltılmadı")], `(axⁿ)' = n·a·xⁿ⁻¹.`); },
      () => { const c = r(2, 99); return S(`f(x) = ${c} sabit fonksiyonunun türevi kaçtır?`, 0, [Y(c, "k:sabitin türevi kendisi sanıldı"), Y(1, "k:sabitin türevi 1 sanıldı"), -c], `Sabitin türevi sıfırdır.`); }
    ])(),
    integral: () => pick([
      () => { const a = r(1, 4), b = r(a + 1, a + 4); return S(`∫ (2x) dx integralinin [${a}, ${b}] aralığındaki değeri kaçtır?`, b * b - a * a, [Y(b * b + a * a, "d:sınırlardaki değerler çıkarılacakken toplandı"), 2 * (b - a), b - a], `[x²] = ${b * b} − ${a * a}.`); },
      () => { const k = r(2, 9), a = r(0, 3), b = a + r(1, 5); return S(`∫ ${k} dx integralinin [${a}, ${b}] aralığındaki değeri kaçtır?`, k * (b - a), [Y(k * b, "d:alt sınırdaki değer çıkarılmadı"), k + b - a, (b - a)], `${k}·(${b} − ${a}).`); }
    ])(),
    limit: () => { const a = r(1, 5), b = r(-5, 5), x = r(-3, 3); return S(`lim (x → ${x}) (${a}x ${b >= 0 ? "+" : "−"} ${Math.abs(b)}) kaçtır?`, a * x + b, [Y(a * x - b, "d:sabit terimin işareti değişti"), a + b, x + b], `Polinomlarda limit, x yerine değer yazılarak bulunur.`); },
    cember: () => pick([
      () => { const rr = r(2, 10); return S(`Yarıçapı ${rr} cm olan dairenin alanı kaç cm²'dir? (π = 3)`, 3 * rr * rr, [Y(6 * rr, "k:alan yerine çevre hesaplandı"), Y(3 * rr, "d:yarıçapın karesi alınmadı"), 9 * rr], `π·r².`); },
      () => { const rr = r(2, 10); return S(`Yarıçapı ${rr} cm olan çemberin çevresi kaç cm'dir? (π = 3)`, 6 * rr, [Y(3 * rr * rr, "k:çevre yerine alan hesaplandı"), Y(3 * rr, "d:2 ile çarpmak unutuldu (çevre = 2πr)"), Y(12 * rr, "d:yarıçap yerine çap kullanıldı")], `2·π·r.`); },
      () => { const y = r(20, 160); return S(`Gördüğü yay ${y * 2}° olan çevre açı kaç derecedir?`, y, [Y(y * 2, "k:çevre açı gördüğü yaya eşit sanıldı (yarısıdır)"), y * 4, 180 - y], `Çevre açı, gördüğü yayın yarısıdır.`); }
    ])(),
    veri: () => { const n = r(5, 7), l = Array.from({ length: n }, () => r(2, 20)).sort((a, b) => a - b); const t = l.reduce((a, b) => a + b, 0); const ort = Math.round((t / n) * 10) / 10, med = n % 2 ? l[(n - 1) / 2] : (l[n / 2 - 1] + l[n / 2]) / 2, ac = l[n - 1] - l[0]; const tip = r(0, 2); return tip === 0 ? S(`${l.join(", ")} verilerinin aritmetik ortalaması kaçtır?`, ort, [med === ort ? ort + 1 : Y(med, "k:ortalama yerine ortanca bulundu"), Y(ac, "k:ortalama yerine açıklık bulundu"), Y(t, "d:toplam veri sayısına bölünmedi")], `Toplam ${t} ÷ ${n}.`) : tip === 1 ? S(`${l.join(", ")} verilerinin ortancası (medyanı) kaçtır?`, med, [ort === med ? med + 1 : Y(ort, "k:ortanca yerine ortalama bulundu"), ac, l[0]], `Sıralı verinin ortasındaki değer.`) : S(`${l.join(", ")} verilerinin açıklığı kaçtır?`, ac, [med, Y(l[n - 1], "d:en küçük değer çıkarılmadı"), ac + 1], `En büyük − en küçük = ${l[n - 1]} − ${l[0]}.`); }
  };

  M.benzer = () => pick([
    () => { const k = r(2, 5), a = r(2, 9); return S(`Benzerlik oranı ${k} olan iki üçgenden küçüğünün ${a} cm'lik kenarına karşılık gelen kenar kaç cm'dir?`, a * k, [Y(a + k, "k:benzerlik oranı kenara eklendi (çarpılmalı)"), a, Y(a * k * k, "k:kenar, oranın karesiyle çarpıldı (kare alanlar için)")], `${a} × ${k}.`, "cm"); },
    () => { const k = r(2, 4); return S(`Benzerlik oranı ${k} olan iki şeklin alanları oranı kaçtır?`, k * k, [Y(k, "k:alanlar oranı benzerlik oranına eşit sanıldı (karesi olmalı)"), Y(2 * k, "k:kare almak 2 ile çarpmak sanıldı"), k * k * k], `Alanlar oranı = benzerlik oranının karesi.`); },
    () => { const o = pick([10000, 50000, 100000, 200000]), c = r(2, 9); return S(`1/${o} ölçekli haritada ${c} cm olan uzaklık gerçekte kaç km'dir?`, (c * o) / 100000, [Y((c * o) / 1000, "d:cm km'ye çevrilirken 100 000 yerine 1000'e bölündü"), Y((c * o) / 10000, "d:cm km'ye çevrilirken bir basamak kaydırıldı (1 km = 100 000 cm)"), c], `${c}·${o} cm = ${(c * o) / 100000} km.`, "km"); }
  ])();
  M.donusum = () => { const x = r(-6, 6), y = r(-6, 6), t = r(0, 3); const sor = [`(${x}, ${y}) noktasının x eksenine göre yansıması hangisidir?`, `(${x}, ${y}) noktasının y eksenine göre yansıması hangisidir?`, `(${x}, ${y}) noktası 3 birim sağa ve 2 birim aşağı ötelenirse hangi noktaya gelir?`, `(${x}, ${y}) noktasının orijine göre yansıması hangisidir?`][t];
    const d = [[x, -y], [-x, y], [x + 3, y - 2], [-x, -y]][t], f = (p) => `(${p[0]}, ${p[1]})`;
    return T(sor, f(d), [f([-d[0], d[1]]), f([d[0], -d[1]]), Y(f([d[1], d[0]]), "k:koordinatlar yer değiştirdi (bu dönüşümde x ile y yer değiştirmez)"), t < 2 ? Y(f([-d[0], -d[1]]), "k:x ekseni ile y ekseni karıştırıldı") : f([-d[0], -d[1]])].filter((z) => z !== f(d)), `Kural: ${["y'nin işareti değişir", "x'in işareti değişir", "x + 3, y − 2", "iki işaret de değişir"][t]}.`); };
  M.islem = () => pick([
    () => { const a = r(12, 99), b = r(3, 9); return S(`Bir kırtasiyeci tanesi ${b} TL olan kalemden ${a} tane satıyor. Bu satıştan toplam kaç TL alır?`, a * b, [Y(a + b, "k:çarpma yerine toplama yapıldı"), a * b - b, a * (b + 1)], `${a} × ${b}.`, "TL"); },
    () => { const n = r(2, 9), p = n * r(3, 12); return S(`${p} cevizi ${n} arkadaş eşit paylaşırsa her biri kaç ceviz alır?`, p / n, [Y(p - n, "k:bölme yerine çıkarma yapıldı"), p / n + 1, n], `${p} ÷ ${n}.`); },
    () => { const p = pick([2, 3, 4, 5, 8]), k = r(1, p - 1), t = p * r(2, 10); return S(`${t} TL'nin ${k}/${p}'i kaç TL'dir?`, (t / p) * k, [Y(t / p, "d:bir parça bulundu ama pay ile çarpılmadı"), Y(t - (t / p) * k, "d:istenen kısım yerine kalan kısım bulundu"), Y((t * p) / k, "k:kesir ters çevrilerek işlem yapıldı")], `${t} ÷ ${p} × ${k}.`, "TL"); }
  ])();
  M.kume = () => { const a = r(5, 20), b = r(5, 20), o = r(1, Math.min(a, b) - 1); return S(`s(A) = ${a}, s(B) = ${b} ve s(A ∩ B) = ${o} ise s(A ∪ B) kaçtır?`, a + b - o, [Y(a + b, "k:kesişim iki kez sayıldı; s(A ∩ B) çıkarılmalı"), Y(a + b + o, "k:kesişim çıkarılacakken eklendi"), a - o], `s(A ∪ B) = s(A) + s(B) − s(A ∩ B).`); };

  // ---------- Fizik ----------
  const F = {
    hareket: () => pick([
      () => { const v = r(2, 30), t = r(2, 12); return S(`${v} m/s sabit hızla giden bir cisim ${t} saniyede kaç metre yol alır?`, v * t, [Y(v + t, "k:hız ile zaman çarpılacakken toplandı"), Y(v / t, "k:yol = hız × zaman; bölme yapıldı"), v * t * 2], `x = v·t.`, "m"); },
      () => { const a = r(1, 6), t = r(2, 10); return S(`Durgun hâlden ${a} m/s² ivmeyle hızlanan cismin ${t} s sonraki hızı kaç m/s'dir?`, a * t, [a + t, Y((a * t) / 2, "k:hız formülü yol formülüyle (½ · a · t²) karıştırıldı"), Y(a * t * t, "k:hız formülü yol formülüyle karıştırıldı")], `v = a·t.`, "m/s"); },
      () => { const a = r(1, 6) * 2, t = r(2, 8); return S(`Durgun hâlden ${a} m/s² ivmeyle hızlanan cisim ${t} s'de kaç m yol alır?`, (a * t * t) / 2, [Y(a * t, "k:yol yerine son hız bulundu"), Y(a * t * t, "d:½ çarpanı unutuldu"), (a * t) / 2], `x = ½·a·t².`, "m"); },
      () => { const k = r(1, 8) * 18; return S(`${k} km/h kaç m/s'dir?`, k / 3.6, [Y(k * 3.6, "k:km/h'den m/s'ye geçerken 3,6 ile çarpıldı (bölünmeli)"), Y(k / 36, "d:3,6 yerine 36'ya bölündü"), k / 3.6 + 5], `km/h ÷ 3,6 = m/s.`, "m/s"); },
      () => { const v1 = r(5, 20), v2 = v1 + r(2, 20), t = r(2, 8); return S(`Hızı ${t} saniyede ${v1} m/s'den ${v2} m/s'ye çıkan cismin ortalama ivmesi kaç m/s²'dir?`, (v2 - v1) / t, [Y((v2 + v1) / t, "k:hız değişimi yerine hızların toplamı alındı"), Y(v2 - v1, "d:süreye bölmek unutuldu"), Y((v2 - v1) * t, "k:hız değişimi süreye bölünecekken süreyle çarpıldı")], `a = Δv/Δt.`, "m/s²"); }
    ])(),
    dinamik: () => pick([
      () => { const m = r(1, 20), a = r(1, 10); return S(`${m} kg kütleli cisme ${m * a} N net kuvvet etki ediyor. İvmesi kaç m/s²'dir?`, a, [Y(m * a * m, "k:kuvvet kütleye bölünecekken kütleyle çarpıldı (a = F/m)"), m + a, a * 2], `a = F/m.`, "m/s²"); },
      () => { const m = r(1, 20), a = r(1, 10); return S(`${m} kg kütleli cismi ${a} m/s² ivmeyle hızlandırmak için kaç N net kuvvet gerekir?`, m * a, [Y(m + a, "k:F = m · a; kütle ile ivme toplandı"), Y(m / a, "k:kütle ivmeye bölündü (çarpılmalı)"), m * a * 2], `F = m·a.`, "N"); },
      () => { const m = r(2, 90); return S(`${m} kg kütleli bir cismin Dünya'daki ağırlığı kaç N'dur? (g = 10 m/s²)`, m * 10, [Y(m, "k:kütle ile ağırlık karıştırıldı (G = m · g)"), Y(m / 10, "k:g ile çarpılacakken g'ye bölündü"), m * 100], `G = m·g.`, "N"); },
      () => { const k = r(1, 5) / 10, m = r(2, 20); return S(`Sürtünme katsayısı ${yaz(k)} olan yatay yüzeyde ${m} kg kütleli cisme etki eden sürtünme kuvveti kaç N'dur? (g = 10)`, k * m * 10, [Y(m * 10, "d:sürtünme katsayısıyla çarpılmadı"), Y(k * m, "d:g ile çarpmak unutuldu"), k * m * 100], `Fs = k·m·g.`, "N"); }
    ])(),
    enerji: () => pick([
      () => { const F = r(5, 50), x = r(2, 20); return S(`${F} N'luk kuvvet bir cismi kuvvet doğrultusunda ${x} m çekiyor. Yapılan iş kaç J'dür?`, F * x, [Y(F + x, "k:kuvvet ile yol çarpılacakken toplandı"), Y(F / x, "k:kuvvet yola bölündü (W = F · x)"), F * x * 2], `W = F·x.`, "J"); },
      () => { const m = r(1, 10) * 2, v = r(1, 10); return S(`${m} kg kütleli, ${v} m/s hızlı cismin kinetik enerjisi kaç J'dür?`, (m * v * v) / 2, [Y(m * v, "k:kinetik enerji yerine momentum (m · v) bulundu"), Y(m * v * v, "d:½ çarpanı unutuldu"), Y((m * v) / 2, "d:hızın karesi alınmadı")], `Ek = ½·m·v².`, "J"); },
      () => { const m = r(1, 20), h = r(1, 30); return S(`${m} kg kütleli cisim ${h} m yükseklikte duruyor. Potansiyel enerjisi kaç J'dür? (g = 10)`, m * 10 * h, [Y(m * h, "d:g ile çarpmak unutuldu"), m * 10 + h, m * h * 100], `Ep = m·g·h.`, "J"); },
      () => { const W = r(2, 30) * 60, t = pick([10, 20, 30, 60]); return S(`${W} J'lük iş ${t} saniyede yapılıyor. Güç kaç W'tır?`, W / t, [Y(W * t, "k:güç = iş ÷ süre; çarpma yapıldı"), W - t, W / t / 2], `P = W/t.`, "W"); },
      () => { const E = r(2, 20) * 100, v = pick([50, 60, 75, 80, 90]); return S(`Verimi %${v} olan bir makineye ${E} J enerji veriliyor. Faydalı enerji kaç J'dür?`, (E * v) / 100, [Y(E, "k:verim dikkate alınmadı (her enerji faydalıya dönüşmez)"), E - v, Y((E * (100 - v)) / 100, "d:faydalı enerji yerine kaybolan enerji bulundu")], `Faydalı = harcanan × verim.`, "J"); }
    ])(),
    basinc: () => pick([
      () => { const F = r(2, 20) * 100, S2 = pick([0.5, 1, 2, 4, 5]); return S(`${F} N'luk kuvvet ${yaz(S2)} m²'lik yüzeye dik etki ediyor. Basınç kaç Pa'dır?`, F / S2, [Y(F * S2, "k:kuvvet yüzey alanına bölünecekken çarpıldı"), Y(F, "k:basınç kuvvetle aynı sanıldı; yüzey alanına bölünmeli"), F / S2 / 10], `P = F/S.`, "Pa"); },
      () => { const h = r(1, 20); return S(`Su içinde ${h} m derinlikteki sıvı basıncı kaç Pa'dır? (d = 1000 kg/m³, g = 10)`, h * 10000, [Y(h * 1000, "d:g ile çarpmak unutuldu"), h * 100, h * 100000], `P = h·d·g.`, "Pa"); },
      () => { const V = r(1, 10) / 1000 * 1000; return S(`Hacmi ${V} L olan cisim suya tamamen batırılıyor. Kaldırma kuvveti kaç N'dur? (d = 1000 kg/m³, g = 10)`, V * 10, [Y(V, "d:yer değiştiren suyun kütlesi bulundu; ağırlığa çevirmek için g ile çarpılmalı"), V * 100, V * 10 + 10], `Fk = V·d·g = ${V}·10⁻³·1000·10.`, "N"); }
    ])(),
    elektrik: () => pick([
      () => { const R = r(2, 20), I = r(1, 6); return S(`Direnci ${R} Ω olan iletkenden ${I} A akım geçiyor. Uçları arasındaki gerilim kaç V'tur?`, R * I, [Y(R + I, "k:V = I · R; akım ile direnç toplandı"), Y(R / I, "k:direnç akıma bölündü (çarpılmalı)"), R * I * 2], `V = I·R.`, "V"); },
      () => { const R = r(2, 12), I = r(1, 5); return S(`Uçları arasındaki gerilim ${R * I} V, direnci ${R} Ω olan iletkenden kaç A akım geçer?`, I, [Y(R * I * R, "k:gerilim dirence bölünecekken çarpıldı"), R + I, I * 2], `I = V/R.`, "A"); },
      () => { const a = r(1, 10), b = r(1, 10), c = r(1, 10); return S(`${a} Ω, ${b} Ω ve ${c} Ω'luk dirençler seri bağlanırsa eşdeğer direnç kaç Ω olur?`, a + b + c, [Y(a * b * c, "k:seri bağlı dirençler çarpıldı (toplanır)"), Y((a + b + c) / 3, "k:eşdeğer direnç ortalama sanıldı"), Y(a + b, "d:dirençlerden biri unutuldu")], `Seride dirençler toplanır.`, "Ω"); },
      () => { const R = pick([2, 3, 4, 6, 8, 10, 12]), n = r(2, 4); return S(`${n} adet ${R} Ω'luk direnç paralel bağlanırsa eşdeğer direnç kaç Ω olur?`, R / n, [Y(R * n, "k:paralel bağlamada dirençler toplandı (paralelde eşdeğer direnç küçülür)"), Y(R, "k:paralel bağlamada eşdeğer direncin değişmediği sanıldı"), R + n], `Eşit paralel dirençlerde R/n.`, "Ω"); },
      () => { const V = pick([6, 12, 24, 220]), I = r(1, 5); return S(`${V} V gerilimde ${I} A akım çeken cihazın gücü kaç W'tır?`, V * I, [Y(V / I, "k:güç yerine direnç (V/I) bulundu"), V + I, V * I * 2], `P = V·I.`, "W"); }
    ])(),
    dalga: () => pick([
      () => { const f = r(2, 20), l = r(1, 10); return S(`Frekansı ${f} Hz, dalga boyu ${l} m olan dalganın hızı kaç m/s'dir?`, f * l, [Y(f + l, "k:v = λ · f; dalga boyu ile frekans toplandı"), Y(f / l, "k:frekans dalga boyuna bölündü (çarpılmalı)"), Y(l / f, "k:dalga boyu frekansa bölündü (çarpılmalı)")], `v = λ·f.`, "m/s"); },
      () => { const f = pick([2, 4, 5, 10, 20, 25, 50]); return S(`Frekansı ${f} Hz olan dalganın periyodu kaç s'dir?`, 1 / f, [Y(f, "k:periyot frekansa eşit sanıldı (T = 1/f)"), f / 10, 2 / f], `T = 1/f.`, "s"); },
      () => { const t = r(2, 8); return S(`Bir kişi sesini bir duvardan ${t} s sonra yankı olarak duyuyor. Ses hızı 340 m/s ise duvara uzaklık kaç m'dir?`, (340 * t) / 2, [Y(340 * t, "k:sesin gidip döndüğü unutuldu; yol 2'ye bölünmeli"), Y(340 / t, "k:hız süreyle çarpılacakken bölündü"), 170], `Ses gidip döner: x = v·t/2.`, "m"); }
    ])(),
    momentum: () => pick([
      () => { const m = r(1, 10), v = r(1, 15); return S(`${m} kg kütleli, ${v} m/s hızlı cismin momentumu kaç kg·m/s'dir?`, m * v, [Y(m + v, "k:kütle ile hız toplandı (p = m · v)"), Y((m * v * v) / 2, "k:momentum yerine kinetik enerji bulundu"), m / v], `p = m·v.`); },
      () => { const F = r(5, 50), t = r(1, 5) / 10; return S(`${F} N'luk kuvvet ${yaz(t)} s etki ederse itme kaç N·s'dir?`, F * t, [Y(F / t, "k:kuvvet süreye bölündü (itme = F · Δt)"), F + t, Y(F, "d:süreyle çarpılmadı")], `I = F·Δt.`); },
      () => { const m1 = r(1, 5), v1 = r(2, 10), m2 = r(1, 5); return S(`${m1} kg kütleli, ${v1} m/s hızlı cisim duran ${m2} kg'lık cisme çarpıp yapışıyor. Ortak hızları kaç m/s olur?`, (m1 * v1) / (m1 + m2), [Y(v1, "k:yapıştıktan sonra hızın değişmediği sanıldı (toplam kütle artar)"), Y((m2 * v1) / (m1 + m2), "d:momentum için duran cismin kütlesi kullanıldı"), v1 / 2 + 1], `Momentum korunur: ${m1}·${v1} = ${m1 + m2}·v.`, "m/s"); }
    ])(),
    atis: () => pick([
      () => { const t = r(1, 6); return S(`Serbest bırakılan bir cisim ${t} s'de yere düşüyor. Yükseklik kaç m'dir? (g = 10)`, 5 * t * t, [Y(10 * t, "k:yükseklik yerine yere çarpma hızı (g · t) bulundu"), Y(10 * t * t, "d:½ çarpanı unutuldu"), Y(5 * t, "d:sürenin karesi alınmadı")], `h = ½·g·t².`, "m"); },
      () => { const v = r(1, 6) * 10; return S(`Düşey yukarı ${v} m/s hızla atılan cisim kaç saniyede tepe noktasına çıkar? (g = 10)`, v / 10, [Y(v / 5, "k:tepeye çıkış süresi yerine toplam uçuş süresi bulundu"), v, v / 20], `t = v/g.`, "s"); },
      () => { const v = r(1, 6) * 10; return S(`Düşey yukarı ${v} m/s hızla atılan cisim en fazla kaç m yükselir? (g = 10)`, (v * v) / 20, [Y((v * v) / 10, "d:2g yerine g'ye bölündü"), v, v * 2], `h = v²/2g.`, "m"); }
    ])(),
    tork: () => pick([
      () => { const F = r(2, 30), d = r(1, 5); return S(`Dönme noktasına ${d} m uzaklıkta, dik ${F} N kuvvet uygulanıyor. Tork kaç N·m'dir?`, F * d, [Y(F + d, "k:kuvvet ile uzaklık çarpılacakken toplandı"), Y(F / d, "k:kuvvet uzaklığa bölündü (τ = F · d)"), F * d * 2], `τ = F·d.`); },
      () => { const m1 = r(2, 6) * 10, d1 = r(1, 3), m2 = pick([10, 20, 30, 40, 60]); const d2 = (m1 * d1) / m2; if (d2 > 9) return null; return S(`Tahterevallide ${m1} kg'lık çocuk destekten ${d1} m uzakta. ${m2} kg'lık çocuk dengeyi sağlamak için destekten kaç m uzağa oturmalıdır?`, d2, [Y(d1, "k:kütleler farklıyken aynı uzaklıkta denge olacağı sanıldı"), d2 * 2, Y((m2 * d1) / m1, "k:oran ters kuruldu (ağır olan desteğe daha yakın oturur)")], `${m1}·${d1} = ${m2}·d.`, "m"); }
    ])(),
    isi: () => { const m = r(1, 5), dT = r(5, 40); return S(`${m} kg suyun sıcaklığını ${dT} °C artırmak için kaç kalori gerekir? (c = 1 cal/g·°C)`, m * 1000 * dT, [Y(m * dT, "d:kg grama çevrilmedi (1 kg = 1000 g)"), Y(m * 100 * dT, "d:kg grama çevrilirken 100 ile çarpıldı (1000 olmalı)"), m * 1000 + dT], `Q = m·c·ΔT = ${m * 1000}·1·${dT}.`, "cal"); },
    cembersel: () => pick([
      () => { const rr = r(1, 10), T2 = pick([1, 2, 3, 4, 5, 6]); return S(`Yarıçapı ${rr} m olan çembersel yörüngede periyodu ${T2} s olan cismin çizgisel hızı kaç m/s'dir? (π = 3)`, (2 * 3 * rr) / T2, [Y((3 * rr) / T2, "d:çevre 2πr yerine πr alındı"), Y(2 * 3 * rr * T2, "k:çevre periyoda bölünecekken çarpıldı"), rr / T2], `v = 2πr/T.`, "m/s"); },
      () => { const v = r(2, 10), rr = pick([1, 2, 4, 5]); return S(`${v} m/s hızla ${rr} m yarıçaplı çemberde dolanan cismin merkezcil ivmesi kaç m/s²'dir?`, (v * v) / rr, [Y(v / rr, "d:hızın karesi alınmadı"), v * rr, (v * v) / (2 * rr)], `a = v²/r.`, "m/s²"); },
      () => { const T2 = pick([2, 4, 5, 10, 20]); return S(`Periyodu ${T2} s olan düzgün çembersel hareketin frekansı kaç Hz'dir?`, 1 / T2, [Y(T2, "k:frekans periyoda eşit sanıldı (f = 1/T)"), 2 / T2, T2 / 10], `f = 1/T.`, "Hz"); }
    ])()
  };

  F.radyo = () => { const T2 = pick([2, 3, 5, 8, 10]), n = r(1, 4), N = pick([80, 160, 320, 640, 1600]); return S(`Yarı ömrü ${T2} gün olan radyoaktif maddenin ${N} gramı ${T2 * n} gün sonra kaç gram kalır?`, N / 2 ** n, [Y(N / (2 * n), "k:madde her yarı ömürde yarıya iner; 2 · n'ye bölündü"), N / 2 ** (n + 1), Y(N - N / 2 ** n, "d:kalan madde yerine bozunan madde bulundu")], `${n} yarı ömür geçti: ${N}/2^${n}.`, "g"); };
  F.coulomb = () => { const k = r(2, 4); return pick([() => S(`İki yük arasındaki uzaklık ${k} katına çıkarılırsa elektriksel kuvvet kaçta birine iner?`, k * k, [Y(k, "k:kuvvet uzaklığın karesiyle ters orantılıdır; kare alınmadı"), 2 * k, k ** 3], `F ∝ 1/d².`), () => S(`Yüklerden biri ${k} katına çıkarılırsa (uzaklık sabit) elektriksel kuvvet kaç katına çıkar?`, k, [Y(k * k, "k:kuvvet yükle doğru orantılıdır; kare alınmaz (kare uzaklıkta)"), Y(1 / k, "k:yük artınca kuvvet azalır sanıldı"), 2 * k], `F ∝ q₁·q₂.`)])(); };

  // ---------- Kimya ----------
  const MOL = [["H₂O", 18], ["CO₂", 44], ["NaCl", 58.5], ["O₂", 32], ["H₂", 2], ["CH₄", 16], ["NH₃", 17], ["N₂", 28], ["C₆H₁₂O₆", 180], ["CaCO₃", 100], ["HCl", 36.5], ["NaOH", 40]];
  const ELEM = [["Na", 11, 23], ["Mg", 12, 24], ["Al", 13, 27], ["C", 6, 12], ["O", 8, 16], ["N", 7, 14], ["Cl", 17, 35], ["K", 19, 39], ["Ca", 20, 40], ["F", 9, 19], ["S", 16, 32], ["P", 15, 31]];
  const dizilim = (z) => { const k = []; let n = z; for (const c of [2, 8, 8, 2]) { if (n <= 0) break; k.push(Math.min(c, n)); n -= c; } return k; };
  const K = {
    orbital: () => { const [s2, z] = pick(ELEM.filter((e) => e[1] <= 20)); const d = dizilim(z); return pick([() => S(`Atom numarası ${z} olan ${s2} atomunun değerlik (son katman) elektron sayısı kaçtır?`, d[d.length - 1], [Y(d.length, "k:değerlik elektron sayısı ile katman sayısı karıştırıldı"), Y(z, "k:son katmandaki yerine toplam elektron sayısı alındı"), 8 - d[d.length - 1] || 1], `Katman dizilimi: ${d.join("-")}.`), () => S(`Atom numarası ${z} olan ${s2} atomunun kaç elektron katmanı vardır?`, d.length, [d.length + 1, d[d.length - 1] === d.length ? d.length + 2 : Y(d[d.length - 1], "k:katman sayısı ile değerlik elektron sayısı karıştırıldı"), Y(z, "k:katman sayısı yerine elektron sayısı alındı")], `Katman dizilimi: ${d.join("-")}.`)])(); },
    mol: () => pick([
      () => { const [f, M] = pick(MOL), n = pick([0.5, 1, 2, 3, 4]); return S(`${yaz(n * M)} gram ${f} kaç moldür? (${f} = ${yaz(M)} g/mol)`, n, [n * 2, Y(n * M, "k:kütle mol kütlesine bölünecekken çarpıldı"), n + 1], `n = m/M.`, "mol"); },
      () => { const [f, M] = pick(MOL), n = pick([0.5, 1, 2, 3]); return S(`${yaz(n)} mol ${f} kaç gramdır? (${f} = ${yaz(M)} g/mol)`, n * M, [Y(M, "d:mol sayısıyla çarpılmadı"), Y(M / n, "k:mol kütlesi mol sayısına bölündü (çarpılmalı)"), n * M * 2], `m = n·M.`, "g"); },
      () => { const n = pick([0.5, 1, 2, 3, 4]); return S(`Normal koşullarda ${yaz(n)} mol gaz kaç litre hacim kaplar?`, n * 22.4, [Y(22.4, "d:mol sayısıyla çarpılmadı"), n * 11.2, Y(n * 24.5, "k:oda koşullarındaki molar hacim (24,5 L) kullanıldı; normal koşullarda 22,4 L")], `NK'da 1 mol gaz 22,4 L.`, "L"); },
      () => { const n = pick([0.5, 1, 2, 3]); return T(`${yaz(n)} mol madde kaç tane tanecik içerir?`, `${yaz(n * 6.02)} · 10²³`, [`${yaz(n)} · 10²³`, Y(`${yaz(n * 6.02)} · 10²²`, "d:10'un üssü yanlış yazıldı (Avogadro sayısı 6,02 · 10²³)"), Y(`${yaz(n * 22.4)} · 10²³`, "k:Avogadro sayısı yerine molar hacim (22,4) kullanıldı")], `N = n·6,02·10²³.`); }
    ])(),
    atom: () => pick([
      () => { const [s, z, a] = pick(ELEM); return S(`Kütle numarası ${a}, atom numarası ${z} olan ${s} atomunun nötron sayısı kaçtır?`, a - z, [Y(a + z, "k:nötron sayısı için toplama yapıldı (kütle no − atom no)"), Y(z, "k:nötron sayısı proton sayısına eşit sanıldı"), Y(a, "k:kütle numarası nötron sayısı sanıldı")], `Nötron = kütle no − atom no.`); },
      () => { const [s, z, q] = pick([["Na", 11, 1], ["K", 19, 1], ["Mg", 12, 2], ["Ca", 20, 2], ["Al", 13, 3]]); return S(`Atom numarası ${z} olan ${s} atomunun ${q}+ yüklü iyonunda kaç elektron vardır?`, z - q, [Y(z + q, "k:pozitif iyon elektron kazanmış sanıldı (elektron kaybeder)"), Y(z, "d:iyon yükü dikkate alınmadı"), q], `Pozitif iyon elektron kaybetmiştir.`); },
      () => { const [s, z, q] = pick([["F", 9, 1], ["Cl", 17, 1], ["O", 8, 2], ["S", 16, 2], ["N", 7, 3]]); return S(`Atom numarası ${z} olan ${s} atomunun ${q}− yüklü iyonunda kaç elektron vardır?`, z + q, [Y(z - q, "k:negatif iyon elektron kaybetmiş sanıldı (elektron kazanır)"), Y(z, "d:iyon yükü dikkate alınmadı"), q], `Negatif iyon elektron kazanmıştır.`); }
    ])(),
    gaz: () => pick([
      () => { const P = r(1, 4), V = r(2, 12), k = pick([2, 3, 4]); return S(`Sabit sıcaklıkta ${P} atm basınçtaki gazın hacmi ${V} L'dir. Basınç ${P * k} atm olursa hacim kaç L olur?`, V / k, [Y(V * k, "k:sabit sıcaklıkta basınç artınca hacim artar sanıldı (ters orantılı)"), Y(V, "k:basınç değişince hacmin değişmediği sanıldı"), V + k], `Boyle: P₁V₁ = P₂V₂.`, "L"); },
      () => { const T1 = pick([200, 250, 300, 400]), k = pick([2, 3]), V = r(2, 10); return S(`Sabit basınçta ${T1} K sıcaklıktaki gazın hacmi ${V} L'dir. Sıcaklık ${T1 * k} K olursa hacim kaç L olur?`, V * k, [Y(V / k, "k:sabit basınçta sıcaklık artınca hacim azalır sanıldı (doğru orantılı)"), Y(V, "k:sıcaklık değişince hacmin değişmediği sanıldı"), V + k], `Charles: V/T sabit.`, "L"); },
      () => { const c = r(-50, 200); return S(`${c} °C kaç Kelvin'dir?`, c + 273, [Y(c - 273, "k:Kelvin'e çevirirken 273 çıkarıldı (eklenmeli)"), Y(c, "k:°C ile K aynı sanıldı"), c + 100], `K = °C + 273.`, "K"); }
    ])(),
    cozelti: () => pick([
      () => { const n = pick([0.2, 0.5, 1, 2, 3]), V = pick([0.5, 1, 2, 4]); return S(`${yaz(n)} mol çözünen ${yaz(V)} L çözeltide bulunuyor. Molarite kaçtır?`, n / V, [Y(n * V, "k:mol sayısı hacme bölünecekken çarpıldı"), Y(V / n, "k:oran ters kuruldu (M = n/V)"), n + V], `M = n/V.`, "M"); },
      () => { const a = r(1, 9) * 5, b = r(1, 9) * 5; return S(`${a} g tuz ${b} g suda çözünüyor. Kütlece yüzde derişim kaçtır?`, Math.round((a / (a + b)) * 1000) / 10, [Y(Math.round((a / b) * 1000) / 10, "k:paydaya yalnızca çözücü alındı; çözelti kütlesi (çözünen + çözücü) olmalı"), a, Y(Math.round((b / (a + b)) * 1000) / 10, "d:çözünen yerine çözücünün yüzdesi bulundu")], `%= çözünen/(çözünen+çözücü)·100.`, "%"); },
      () => { const M1 = pick([1, 2, 3, 4]), V1 = pick([1, 2]), k = pick([2, 4]); return S(`${M1} M'lık ${V1} L çözeltiye su eklenerek hacim ${V1 * k} L yapılıyor. Yeni derişim kaç M olur?`, M1 / k, [Y(M1 * k, "k:su eklenince derişim artar sanıldı (seyrelir)"), Y(M1, "k:su eklenince derişimin değişmediği sanıldı"), M1 / 2 + 1], `M₁V₁ = M₂V₂.`, "M"); }
    ])(),
    ph: () => { const n = r(1, 13); return pick([() => S(`[H⁺] = 10⁻${n} M olan çözeltinin pH değeri kaçtır?`, n, [Y(14 - n, "k:pH yerine pOH bulundu"), Y(-n, "d:logaritmanın önündeki eksi işareti dikkate alınmadı"), n + 1], `pH = −log[H⁺].`), () => T(`pH değeri ${n} olan çözelti nasıldır?`, n < 7 ? "Asidik" : n > 7 ? "Bazik" : "Nötr", ["Asidik", "Bazik", "Nötr", "Tuzlu"].filter((x) => x !== (n < 7 ? "Asidik" : n > 7 ? "Bazik" : "Nötr")), `pH < 7 asit, pH > 7 baz, 7 nötr.`)])(); },
    tepkime: () => { const a = r(-300, 300), b = r(-300, 300); return S(`ΔH₁ = ${a} kJ ve ΔH₂ = ${b} kJ olan iki tepkime toplanırsa toplam tepkimenin ΔH değeri kaç kJ olur?`, a + b, [Y(a - b, "k:Hess yasasında tepkime ısıları toplanır; çıkarma yapıldı"), Y(b - a, "k:Hess yasasında tepkime ısıları toplanır; çıkarma yapıldı"), a * b === 0 ? 1 : a + b + 10], `Hess yasası: tepkime ısıları toplanır.`, "kJ"); }
  };

  // ---------- Eşleştirme (konu adına göre) ----------
  // Konu adı küçük harfe çevrilip sözcük başında aranır (ör. "iş" kelimesi "değişim"in içinde eşleşmez)
  const W = (x) => new RegExp("(^|[^a-zçğıöşüâîû])(" + x + ")");
  const KURAL = [
    ["matematik|geometri", "üslü|üs ve|üstel ifade", M.uslu], ["matematik", "karekök|köklü", M.karekok], ["matematik", "çarpanlar|katlar|ebob|ekok|asal", M.ebob],
    ["matematik", "olasılık", M.olasilik], ["matematik", "denklem|eğim|eşitsizlik|doğrusal", M.denklem], ["matematik", "cebirsel|özdeşlik|çarpanlara", M.cebir],
    ["matematik|geometri", "üçgen|pisagor", M.ucgen], ["matematik|geometri", "prizma|silindir|piramit|koni|küre|katı cisim", M.cisim], ["matematik", "trigonometr|sinüs|kosinüs|birim çember|yönlü açı", M.trig],
    ["matematik", "fonksiyon", M.fonksiyon], ["matematik", "logaritma", M.log], ["matematik", "dizi", M.dizi], ["matematik", "sayma|permütasyon|kombinasyon|binom", M.sayma],
    ["matematik", "ikinci dereceden|polinom", M.ikinci], ["matematik", "türev", M.turev], ["matematik", "integral", M.integral], ["matematik", "limit", M.limit],
    ["matematik|geometri", "çember|daire", M.cember], ["matematik", "veri|istatistik|merkezî eğilim|grafik", M.veri],
    ["fizik|fen", "hareket|hız|ivme|konum", F.hareket], ["fizik|fen", "newton|dinamik|sürtünme", F.dinamik], ["fizik|fen", "iş|enerji|güç", F.enerji],
    ["fizik|fen", "basınç|kaldırma", F.basinc], ["fizik|fen", "elektrik akımı|akım|direnç|devre|elektrik enerjisi", F.elektrik], ["fizik|fen", "dalga|ses|ışık", F.dalga],
    ["fizik", "momentum|itme", F.momentum], ["fizik", "atış", F.atis], ["fizik|fen", "tork|denge|kaldıraç|basit makine|makara", F.tork], ["fizik|fen", "ısı|sıcaklık", F.isi], ["fizik", "çembersel|kütle çekim|harmonik", F.cembersel],
    ["kimya|fen", "mol|kimyasal hesap|kimyasal tepkime", K.mol], ["kimya|fen", "atom|periyodik|iyon", K.atom], ["kimya", "gaz", K.gaz], ["kimya", "çözelti|derişim|çözünürlük", K.cozelti],
    ["matematik", "benzerlik|ölçek", M.benzer], ["matematik", "öteleme|yansıma|dönüşüm", M.donusum], ["matematik|matuyg", "dört işlem|zihinden|kesirler ve ölçme|problem", M.islem], ["matematik", "sayı kümeleri|kümeler", M.kume],
    ["fizik|fen", "basın", F.basinc], ["fizik", "radyoaktiv|çekirdek", F.radyo], ["fizik", "elektrik alan|elektriksel kuvvet|coulomb", F.coulomb], ["kimya", "orbital|elektron dizilim", K.orbital],
    ["kimya|fen", "asit|baz|ph", K.ph], ["kimya", "tepkime ısısı|tepkimelerde enerji|hess", K.tepkime]
  ].map(([d, k, f]) => [new RegExp(d), W(k), f]);
  let say = 0;
  for (const dk of Object.keys(ICERIK)) {
    const dAd = (dk + " " + (ICERIK[dk].ad || "")).toLocaleLowerCase("tr");
    for (const u of ICERIK[dk].uniteler || []) for (const k of u.konular || []) {
      if (window.URETEC[k.id]) continue;
      const adL = String(k.ad).toLocaleLowerCase("tr"), fn = KURAL.filter(([d, kr]) => d.test(dAd) && kr.test(adL)).map((x) => x[2]);
      if (!fn.length) continue;
      const fl = [...new Set(fn)];
      window.URETEC[k.id] = () => { for (let i = 0; i < 20; i++) { let q = null; try { q = pick(fl)(); } catch (e) { q = null; } if (q) return { ...q, secenekler: q.secenekler.slice() }; } return null; };
      say++;
    }
  }
  window.SAYISAL_URETEC_SAYI = say;
})();
