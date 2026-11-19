// 6. sınıf Matematik soru üreteçleri
// Her fonksiyon çağrıldığında sayıları değişen yeni bir soru üretir: { soru, secenekler, dogru, cozum }.
// Anahtar = konu id'si (icerik/matematik.js ile aynı).
window.URETEC = window.URETEC || {};
(function () {
  const U = window.URETEC;

  // ---------- yardımcılar ----------
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const karistir = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = r(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const lcm = (a, b) => (a / gcd(a, b)) * b;
  const bolenler = (n) => { const s = []; for (let i = 1; i <= n; i++) if (n % i === 0) s.push(i); return s; };
  const grup = (n) => { const s = String(n); return Math.abs(n) >= 10000 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : s; };
  // Tam sayı olarak saklanan ondalığı yazar: ond(4250, 3) -> "4,25" ; sil=false ise sondaki sıfırlar kalır
  const ond = (v, k, sil = true) => {
    if (k === 0) return grup(v);
    const s = String(Math.abs(v)).padStart(k + 1, "0");
    let kes = s.slice(-k);
    if (sil) kes = kes.replace(/0+$/, "");
    return (v < 0 ? "-" : "") + grup(Number(s.slice(0, -k))) + (kes ? "," + kes : "");
  };
  const derece = (x) => x + "°";
  const buyukHarf = (s) => s.charAt(0).toLocaleUpperCase("tr") + s.slice(1);
  const UST = { 2: "²", 3: "³", 4: "⁴" };
  const ISIM = ["Ali", "Ece", "Can", "Zeynep", "Mert", "Elif", "Ahmet", "Ayşe", "Emre", "Defne", "Kerem", "Nehir"];

  // Varsayılan yedek şık: doğru cevaba yakın bir değer üretir
  function yakinUret(dogru) {
    const t = String(dogru);
    let m = t.match(/^(\d+)(\D*)$/);
    if (m) { const n = +m[1]; return () => Math.max(1, n + pick([-1, 1]) * r(1, Math.max(3, Math.round(n / 5)))) + m[2]; }
    m = t.match(/^(\d+),(\d+)(\D*)$/);
    if (m) { const k = m[2].length, v = +(m[1] + m[2]); return () => ond(Math.max(1, v + pick([-1, 1]) * r(1, 9)), k, false) + m[3]; }
    return () => String(r(1, 100));
  }

  // Soru nesnesi kurar: doğru şık + benzersiz yanlış şıklar (gerekirse yedekle tamamlar)
  // Yanılgı etiketli yanlış şık (A4): "d:..." dikkat hatası, "k:..." kavram yanılgısı. Etiket, öğrenci o şıkkı seçerse Bilge'nin teşhisidir.
  const Y = (v, e) => ({ v, e });
  function soru(metin, dogru, yanlislar, cozum, yedek) {
    const s = [String(dogru)], yan = {};
    const ekle = (x) => {
      const et = x && typeof x === "object" ? x.e : null, t = String(et ? x.v : x);
      if (s.length < 4 && t && !s.includes(t) && !/NaN|undefined|Infinity/.test(t) && !/^-/.test(t) && !/^0°$/.test(t)) { s.push(t); if (et) yan[t] = et; }
    };
    karistir(yanlislar).forEach(ekle);
    const y = yedek || yakinUret(dogru);
    let g = 0;
    while (s.length < 4 && g++ < 500) ekle(y());
    const q = { soru: metin, secenekler: s, dogru: 0, cozum, uretildi: true };
    if (Object.keys(yan).length) q.yanilgi = yan;
    return q;
  }

  // ---------- 1. TEMA: Sayılar ve Nicelikler (1) ----------
  U.t1k1 = () => {
    const tip = r(1, 4);
    if (tip === 1) {
      const n = pick([12, 16, 18, 20, 24, 28, 30, 32, 36, 40, 42, 44, 45, 48, 50, 52, 54, 56, 60, 63, 64, 66, 70, 72, 75, 78, 80, 84, 88, 90, 96, 98, 100]);
      const b = bolenler(n), c = b.length;
      return soru(`${n} sayısının kaç tane çarpanı vardır?`, c, [Y(c - 1, "d:1 ya da sayının kendisi çarpan olarak sayılmadı"), c + 1, c + 2, c - 2], `${n} sayısının çarpanları: ${b.join(", ")}. Toplam ${c} tane.`);
    }
    if (tip === 2) {
      const n = pick([24, 30, 36, 40, 42, 48, 54, 56, 60, 63, 64, 70, 72, 75, 80, 84, 90, 96, 100]);
      const ic = bolenler(n).filter((x) => x !== 1 && x !== n);
      let yok; do { yok = r(2, Math.min(n - 1, 30)); } while (n % yok === 0);
      return soru(`Hangisi ${n} sayısının çarpanlarından biri değildir?`, yok, karistir(ic).slice(0, 3), `${n} sayısının çarpanları: ${bolenler(n).join(", ")}. ${yok} bu listede yok.`);
    }
    if (tip === 3) {
      const k = pick([3, 4, 6, 7, 8, 11, 12, 13, 14, 15]);
      const ans = Math.floor(99 / k) * k;
      return soru(`${k} sayısının katı olan iki basamaklı en büyük sayı kaçtır?`, ans, [ans - k, 99, 98, ans - 1, ans + k], `${k} × ${ans / k} = ${ans}. Bir sonraki kat ${ans + k}, o da üç basamaklıdır.`);
    }
    const k = r(3, 9), dogru = k * r(5, 15);
    return soru(`Hangisi ${k} sayısının katıdır?`, dogru, [dogru + 1, dogru - 1, dogru + 2, dogru - 2],
      `${dogru} = ${k} × ${dogru / k}. Diğer sayılar ${k} ile kalansız bölünmez.`,
      () => { let x; do { x = r(10, 140); } while (x % k === 0); return x; });
  };

  const KURAL = { 2: "birler basamağı çift (0, 2, 4, 6, 8) olmalı", 3: "rakamları toplamı 3'ün katı olmalı", 4: "son iki basamağın oluşturduğu sayı 4'ün katı olmalı", 5: "birler basamağı 0 veya 5 olmalı", 6: "sayı hem 2'ye hem 3'e bölünmeli", 9: "rakamları toplamı 9'un katı olmalı", 10: "birler basamağı 0 olmalı" };
  const rakamTop = (n) => String(n).split("").reduce((a, b) => a + +b, 0);
  U.t1k2 = () => {
    if (r(1, 3) === 1) {
      const d = pick([3, 9]), a = r(1, 9), b = r(0, 9);
      const olur = []; for (let A = 0; A <= 9; A++) if ((a + A + b) % d === 0) olur.push(A);
      const ans = Math.max(...olur);
      return soru(`${a}A${b} üç basamaklı sayısı ${d} ile kalansız bölünüyor. A yerine gelebilecek en büyük rakam kaçtır?`, ans,
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((x) => x !== ans),
        `Rakamlar toplamı: ${a} + A + ${b} = ${a + b} + A. Bu toplam ${d} sayısının katı olmalı. A = ${olur.join(", ")} olabilir. En büyüğü ${ans}.`);
    }
    const d = pick([2, 3, 4, 5, 6, 9, 10]);
    const bol = (x) => x % d === 0;
    const bas = d === 4 ? [1000, 9999] : [100, 999];
    const tuzak = { 9: (x) => x % 3 === 0, 6: (x) => (x % 2 === 0) !== (x % 3 === 0), 4: (x) => x % 2 === 0, 10: (x) => x % 5 === 0 || x % 2 === 0 }[d] || (() => true);
    let dogru; do { dogru = r(bas[0], bas[1]); } while (!bol(dogru));
    const yan = []; let g = 0;
    while (yan.length < 3 && g++ < 5000) {
      const x = r(bas[0], bas[1]);
      if (bol(x) || yan.includes(x)) continue;
      if (yan.length < 2 && !tuzak(x)) continue; // iki şık "tuzak" olsun
      yan.push(x);
    }
    let ac = `${d} ile bölünme kuralı: ${KURAL[d]}.`;
    if (d === 3 || d === 9 || d === 6) ac += ` ${dogru} için rakamlar toplamı ${rakamTop(dogru)}.`;
    if (d === 4) ac += ` ${dogru} sayısının son iki basamağı ${String(dogru).slice(-2)}.`;
    return soru(`Hangi sayı ${d} ile kalansız bölünür?`, dogru, yan, ac);
  };

  const ASAL = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  const BILESIK = [9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 77, 81, 85, 87, 91, 93, 95, 99];
  const enKucukBolen = (n) => { for (let i = 2; i <= n; i++) if (n % i === 0) return i; };
  const asalAyir = (n) => { const f = []; let i = 2; while (n > 1) { if (n % i === 0) { f.push(i); n /= i; } else i++; } return f; };
  U.t1k3 = () => {
    const tip = r(1, 4);
    if (tip === 1) {
      const p = pick(ASAL), diger = karistir(BILESIK).slice(0, 3);
      return soru("Hangisi asal sayıdır?", p, diger, `${p} sayısının yalnızca 1 ve kendisi çarpanıdır. Diğerleri asal değil: ${diger.map((x) => `${x} = ${enKucukBolen(x)} × ${x / enKucukBolen(x)}`).join(", ")}.`);
    }
    if (tip === 2) {
      const c = pick(BILESIK), diger = karistir(ASAL).slice(0, 3);
      return soru("Hangisi asal sayı değildir?", c, diger, `${c} = ${enKucukBolen(c)} × ${c / enKucukBolen(c)}, bu yüzden asal değildir. Diğerleri asaldır.`);
    }
    let n, f;
    do { n = r(12, 300); f = asalAyir(n); } while (new Set(f).size < 2 || f.length < 3 || Math.max(...f) > 13);
    const farkli = [...new Set(f)];
    if (tip === 3) {
      const dogru = farkli.join(", ");
      const yan = [];
      const bil = bolenler(n).filter((x) => x > 3 && x < n && enKucukBolen(x) !== x);
      if (bil.length) yan.push(Y([...farkli.slice(1), pick(bil)].sort((a, b) => a - b).join(", "), "k:bileşik bir sayı asal çarpan sanıldı"));
      if (farkli.length > 1) yan.push(farkli.slice(0, -1).join(", "));
      const ekstra = [2, 3, 5, 7, 11].find((p) => !farkli.includes(p));
      yan.push([...farkli, ekstra].sort((a, b) => a - b).join(", "));
      yan.push(Y(f.join(", "), "k:tekrar eden asal çarpan ayrı ayrı yazıldı (asal çarpanlar bir kez yazılır)"));
      return soru(`${n} sayısının asal çarpanları hangileridir?`, dogru, yan, `${n} = ${f.join(" × ")}. Farklı asal çarpanlar: ${dogru}.`,
        () => karistir([2, 3, 5, 7, 11, 13]).slice(0, farkli.length).sort((a, b) => a - b).join(", "));
    }
    return soru(`Asal çarpanlarına ayrılmış hali ${f.join(" × ")} olan sayı kaçtır?`, n, [n + f[0], n - f[0], n * 2, n + f[f.length - 1]], `${f.join(" × ")} = ${n}.`);
  };

  U.t1k4 = () => {
    const tip = r(1, 5);
    if (tip === 1) {
      let g, x, y; do { g = r(2, 12); x = r(2, 7); y = r(2, 9); } while (x === y || gcd(x, y) !== 1 || g * Math.max(x, y) > 99);
      const a = g * x, b = g * y, ortak = bolenler(g);
      return soru(`${a} ve ${b} sayılarının en büyük ortak böleni kaçtır?`, g, [ortak[ortak.length - 2], g * 2, Y(Math.min(a, b), "k:küçük sayı en büyük ortak bölen sanıldı"), g + 1],
        `Ortak bölenleri: ${ortak.join(", ")}. En büyüğü ${g}.`);
    }
    if (tip === 2) {
      let a, b, l; do { a = r(2, 15); b = r(2, 15); l = lcm(a, b); } while (a === b || l > 120 || l === Math.max(a, b));
      return soru(`${a} ve ${b} sayılarının en küçük ortak katı kaçtır?`, l, [Y(a * b, "k:sayılar çarpıldı (EKOK her zaman çarpım değildir)"), l * 2, Y(a + b, "k:sayılar toplandı"), l % 2 ? l + a : l / 2],
        `${l}, hem ${a} hem ${b} ile kalansız bölünen en küçük sayıdır: ${l} ÷ ${a} = ${l / a}, ${l} ÷ ${b} = ${l / b}.`);
    }
    if (tip === 3) {
      let g, x, y; do { g = r(3, 15); x = r(2, 6); y = r(2, 6); } while (x === y || gcd(x, y) !== 1);
      const a = g * x, b = g * y, ne = pick(["kurdele", "ip", "tahta", "kumaş"]);
      if (r(0, 1)) {
        return soru(`${a} cm ve ${b} cm uzunluğundaki iki ${ne}, hiç artmayacak şekilde eşit ve en uzun parçalara kesilecek. Bir parça kaç cm olur?`, g,
          [x * y, g * 2, Y(Math.abs(b - a), "k:uzunlukların farkı alındı (EBOB bulunmalıydı)"), Y(Math.min(a, b), "k:kısa olan parça uzunluğu sanıldı")], `${a} ve ${b} sayılarının en büyük ortak böleni ${g}. Bir parça ${g} cm olur.`);
      }
      return soru(`${a} cm ve ${b} cm uzunluğundaki iki ${ne}, hiç artmayacak şekilde eşit ve en uzun parçalara kesiliyor. Toplam kaç parça elde edilir?`, x + y,
        [x * y, Y(g, "d:parça uzunluğu bulundu ama parça sayısı sorulmuştu"), x + y + 1, x + y - 1], `En uzun parça ${a} ve ${b} sayılarının en büyük ortak böleni: ${g} cm. ${a} ÷ ${g} = ${x}, ${b} ÷ ${g} = ${y}. Toplam ${x + y} parça.`);
    }
    if (tip === 4) {
      let x, y; do { x = r(2, 12); y = r(2, 12); } while (x === y || lcm(x, y) > 90 || lcm(x, y) === Math.max(x, y));
      const [A, B] = karistir(ISIM).slice(0, 2), yer = pick(["kütüphaneye", "yüzmeye", "parka", "kursa"]), l = lcm(x, y);
      return soru(`${A} ${x} günde bir, ${B} ${y} günde bir ${yer} gidiyor. Bugün ikisi birlikte gittiyse en az kaç gün sonra yine birlikte giderler?`, l,
        [Y(x * y, "k:gün sayıları çarpıldı (EKOK bulunmalıydı)"), Y(x + y, "k:gün sayıları toplandı"), l * 2, Math.max(x, y)], `${x} ve ${y} sayılarının en küçük ortak katı ${l}. ${l} gün sonra yine birlikte giderler.`);
    }
    let a, b; do { a = r(12, 60); b = r(12, 60); } while (a === b || gcd(a, b) < 2);
    const ort = bolenler(gcd(a, b));
    return soru(`${a} ve ${b} sayılarının kaç tane ortak böleni vardır?`, ort.length, [ort.length + 1, ort.length - 1, ort.length + 2, ort.length * 2],
      `Ortak bölenleri: ${ort.join(", ")}. Toplam ${ort.length} tane.`);
  };

  // ---------- 2. TEMA: Veriden Olasılığa ----------
  const TUR = ["İmkânsız", "Az olası", "Eşit şanslı", "Çok olası", "Kesin"];
  const turYanlis = (d) => TUR.filter((x) => x !== d);
  U.t2k1 = () => {
    const tip = r(1, 4);
    if (tip === 1) {
      const N = pick([20, 25, 40, 50, 60, 80, 100]);
      let K; do { K = r(Math.ceil(N * 0.2), Math.floor(N * 0.9)); } while (K * 2 === N);
      const [ad, eylem] = pick([["basket atma", ["atış yapıp", "basket atıyor"]], ["hedefi vurma", ["ok atıp", "hedefi vuruyor"]], ["penaltıyı gole çevirme", ["penaltı atıp", "gol atıyor"]]]);
      return soru(`${pick(ISIM)} ${N} ${eylem[0]} ${K} tanesinde ${eylem[1]}. Buna göre ${ad} olasılığının tahmini nedir?`, `${K}/${N}`,
        [Y(`${N - K}/${N}`, "d:olayın gerçekleşmediği durumlar sayıldı"), Y(`${K}/${N - K}`, "k:paydaya toplam deneme sayısı yerine kalan deneme yazıldı"), Y(`${N}/${K}`, "k:pay ile payda yer değiştirdi"), `1/${K}`], `Olasılık tahmini = olayın gerçekleşme sayısı ÷ deneme sayısı = ${K}/${N}.`);
    }
    if (tip === 2) {
      const n = pick([50, 100, 200]); let t; do { t = r(Math.round(n * 0.4), Math.round(n * 0.6)); } while (t * 2 === n);
      return soru(`Bir madeni para ${n} kez atıldı ve ${t} kez tura geldi. Yazı gelme olasılığının tahmini nedir?`, `${n - t}/${n}`,
        [Y(`${t}/${n}`, "d:yazı yerine tura sayıldı"), Y(`${t}/${n - t}`, "k:paydaya toplam atış sayısı yazılmadı"), `${n - t}/${t}`], `Yazı ${n} − ${t} = ${n - t} kez geldi. Tahmin: ${n - t}/${n}.`);
    }
    if (tip === 3) {
      const hedef = pick(TUR); let a, b;
      if (hedef === "İmkânsız") { a = 0; b = r(2, 8); }
      else if (hedef === "Kesin") { a = r(2, 8); b = 0; }
      else if (hedef === "Eşit şanslı") { a = b = r(2, 6); }
      else if (hedef === "Çok olası") { b = r(1, 3); a = b + r(2, 6); }
      else { a = r(1, 3); b = a + r(2, 6); }
      const [renk, diger] = karistir(["kırmızı", "mavi", "yeşil", "sarı"]).slice(0, 2);
      const icerik = a === 0 ? `sadece ${b} ${diger} bilye` : b === 0 ? `sadece ${a} ${renk} bilye` : `${a} ${renk} ve ${b} ${diger} bilye`;
      return soru(`Bir torbada ${icerik} var. Torbadan rastgele çekilen bilyenin ${renk} olması nasıl bir olaydır?`, hedef, turYanlis(hedef),
        `Torbada ${a + b} bilye var, bunların ${a} tanesi ${renk}. Cevap: ${hedef}.`);
    }
    const z = pick([
      ["6'dan büyük bir sayı gelmesi", "İmkânsız", "Zarda en büyük sayı 6, bu olay imkânsızdır."],
      ["1 ile 6 arasında (1 ve 6 dahil) bir sayı gelmesi", "Kesin", "Zarın bütün yüzleri 1 ile 6 arasında, olay kesindir."],
      ["çift sayı gelmesi", "Eşit şanslı", "3 çift (2, 4, 6) ve 3 tek sayı var, eşit şanslıdır."],
      ["tek sayı gelmesi", "Eşit şanslı", "3 tek (1, 3, 5) ve 3 çift sayı var, eşit şanslıdır."],
      ["6 gelmesi", "Az olası", "6 yüzden sadece biri 6, az olasıdır."],
      ["1'den büyük bir sayı gelmesi", "Çok olası", "6 yüzden 5 tanesi 1'den büyük, çok olasıdır."],
      ["5'ten küçük bir sayı gelmesi", "Çok olası", "1, 2, 3, 4 → 6 yüzden 4 tanesi, çok olasıdır."],
      ["0 gelmesi", "İmkânsız", "Zarda 0 yoktur, imkânsızdır."]]);
    return soru(`Bir zar atıldığında ${z[0]} nasıl bir olaydır?`, z[1], turYanlis(z[1]), z[2]);
  };

  // ---------- 3. TEMA: Sayılar ve Nicelikler (2) ----------
  const BASAMAK = ["onda birler", "yüzde birler", "binde birler"];
  U.t3k1 = () => {
    let tam, d; do { tam = r(10, 99); d = [r(1, 9), r(1, 9), r(1, 9)]; } while (new Set([...String(tam), ...d.map(String)]).size < 5);
    const sayi = `${tam},${d.join("")}`, tip = r(1, 3);
    if (tip === 1) {
      const p = r(0, 2), deg = ["0," + d[p], "0,0" + d[p], "0,00" + d[p]];
      return soru(`${sayi} sayısında ${d[p]} rakamının basamak değeri kaçtır?`, deg[p], [...deg.filter((_, i) => i !== p).map((x) => Y(x, "k:basamaklar karıştırıldı (onda, yüzde, binde birler)")), Y(String(d[p]), "k:basamak değeri yerine rakamın kendisi yazıldı")],
        `${d[p]} rakamı ${BASAMAK[p]} basamağında. Basamak değeri ${deg[p]}.`);
    }
    if (tip === 2) {
      const p = r(0, 2);
      return soru(`${sayi} sayısının ${BASAMAK[p]} basamağındaki rakam kaçtır?`, d[p], [...d.filter((_, i) => i !== p), String(tam)[1]],
        `Virgülden sonra: ${d[0]} onda birler, ${d[1]} yüzde birler, ${d[2]} binde birler basamağında.`);
    }
    return soru(`${tam} + 0,${d[0]} + 0,0${d[1]} + 0,00${d[2]} şeklinde çözümlenen sayı hangisidir?`, sayi,
      [`${tam},${d[0]}${d[2]}${d[1]}`, `${tam},${d[1]}${d[0]}${d[2]}`, `${tam},${d[0]}0${d[1]}${d[2]}`],
      `Onda birler ${d[0]}, yüzde birler ${d[1]}, binde birler ${d[2]} → ${sayi}.`);
  };

  U.t3k2 = () => {
    let kes; do { kes = r(101, 999); } while (kes % 10 === 0);
    const v = r(1, 99) * 1000 + kes, k = pick([0, 1, 2]);
    const yuv = (kk) => Math.round(v / 10 ** (3 - kk));
    const birim = 10 ** (3 - k), R = yuv(k), kesik = Math.floor(v / birim);
    const sag = Math.floor(v / (birim / 10)) % 10;
    const ad = ["en yakın tam sayıya", "onda birler basamağına", "yüzde birler basamağına"][k];
    const yan = [Y(ond(kesik === R ? R + 1 : kesik, k, false), kesik === R ? "k:sağdaki rakam 5'ten küçükken bir artırıldı" : "k:sağdaki rakam 5 ya da daha büyükken artırılmadı"), ond(R + 1, k, false), ...[0, 1, 2].filter((x) => x !== k).map((x) => Y(ond(yuv(x), x, false), "d:istenen basamak yerine başka bir basamağa yuvarlandı"))];
    return soru(`${ond(v, 3, false)} sayısı ${ad} yuvarlanırsa hangisi elde edilir?`, ond(R, k, false), yan,
      `Yuvarlanacak basamağın sağındaki rakam ${sag}. ${sag >= 5 ? "5 veya daha büyük olduğu için bir artırırız" : "5'ten küçük olduğu için aynı bırakırız"}. Sonuç: ${ond(R, k, false)}.`);
  };

  U.t3k3 = () => {
    const tip = r(1, 5);
    if (tip === 1) {
      const a = r(2, 9), b = r(a + 1, 12), ne = pick(["ekmek", "pizza", "karpuz", "pasta"]);
      return soru(`${a} ${ne} ${b} kişiye eşit olarak paylaştırılırsa kişi başına ne kadar ${ne} düşer?`, `${a}/${b}`,
        [Y(`${b}/${a}`, "k:pay ile payda yer değiştirdi (bölünen paya yazılır)"), `${b - a}/${b}`, `1/${b}`, `${a}/${a + b}`], `${a} ÷ ${b} = ${a}/${b}. Pay bölünen, payda bölendir.`);
    }
    if (tip === 2) {
      const d = pick([2, 4, 5, 20, 25, 50]); let n; do { n = r(1, d - 1); } while (gcd(n, d) !== 1);
      const v = (n * 100) / d;
      return soru(`${n}/${d} kesrinin ondalık gösterimi hangisidir?`, ond(v, 2), [Y(`0,${n}${d}`, "k:pay ile payda virgülden sonra yan yana yazıldı"), Y(`${d},${n}`, "k:pay ile payda virgülle yan yana yazıldı"), ond(v + 10, 2), ond(v + 5, 2)],
        `Paydayı 100 yapalım: ${n}/${d} = ${v}/100 = ${ond(v, 2)}.`, () => ond(r(1, 99), 2));
    }
    if (tip === 3) {
      let a, b; do { a = r(7, 40); b = r(2, 9); } while (a % b === 0 || a < b);
      const q = Math.floor(a / b), k = a % b;
      return soru(`${a} ÷ ${b} işleminin sonucu hangi tam sayılı kesre eşittir?`, `${q} tam ${k}/${b}`,
        [Y(`${k} tam ${q}/${b}`, "k:bölüm ile kalan yer değiştirdi"), `${q + 1} tam ${k}/${b}`, Y(`${q} tam ${k}/${a}`, "k:paydaya bölen yerine bölünen yazıldı"), `${q - 1} tam ${k}/${b}`], `${a} ÷ ${b} = ${q}, kalan ${k}. Sonuç: ${q} tam ${k}/${b}.`,
        () => `${q} tam ${r(1, 9)}/${r(2, 9)}`);
    }
    if (tip === 4) {
      let ab; do { ab = r(11, 99); } while (ab % 10 === 0);
      return soru(`0,${ab} sayısının kesir gösterimi hangisidir?`, `${ab}/100`, [Y(`${ab}/10`, "k:virgülden sonraki basamak sayısına bakılmadı"), Y(`${ab}/1000`, "k:virgülden sonraki basamak sayısına bakılmadı"), `${Math.floor(ab / 10)}/${ab % 10}`],
        `0,${ab} = ${ab} yüzde = ${ab}/100.`, () => `${r(1, 99)}/100`);
    }
    const n = pick([2, 4, 5, 8, 10]); let L; do { L = r(n + 1, 45); } while (L % n === 0);
    const v = (L * 1000) / n, kap = pick(["şişeye", "sürahiye", "bidona"]);
    return soru(`${L} litre su ${n} ${kap} eşit olarak dağıtılıyor. Her birine kaç litre su konur?`, ond(v, 3),
      [ond(v + 100, 3), ond(v - 100, 3), ond(v + 200, 3), String(Math.floor(L / n))], `${L} ÷ ${n} = ${ond(v, 3)} litre.`);
  };

  const UZ = [["km", "m", 1000], ["m", "cm", 100], ["cm", "mm", 10], ["m", "mm", 1000], ["m", "dm", 10], ["dm", "cm", 10]];
  U.t3k4 = () => {
    if (r(1, 4) === 1) {
      const m = r(8, 30) * 50, g = r(2, 7), top = m * 2 * g;
      return soru(`${pick(ISIM)} okula gidip gelirken her gün tek yön ${m} m yürüyor. Gidiş-dönüş ${g} günde toplam kaç km yürür?`, ond(top, 3),
        [Y(ond(m * g, 3), "d:gidiş-dönüş için 2 ile çarpılmadı"), ond(top * 10, 3), Y(grup(top), "d:birim çevrilmedi (metre bulundu, km sorulmuştu)")], `Bir günde: ${m} × 2 = ${m * 2} m. ${g} günde: ${grup(top)} m = ${ond(top, 3)} km.`);
    }
    const [b, k, f] = pick(UZ);
    if (r(0, 1)) { // büyük birimden küçüğe
      const s = r(11, 99), res = s * f; // ikisi de 1 ondalık basamaklı
      return soru(`${ond(s, 1)} ${b} kaç ${k} eder?`, ond(res, 1), [ond(res * 10, 1), ond(res / 10, 1), ond(res * 100, 1)],
        `1 ${b} = ${f} ${k}. ${ond(s, 1)} × ${f} = ${ond(res, 1)} ${k}.`);
    }
    const w = f === 10 ? r(12, 999) : r(120, 9999), res = (w * 1000) / f; // sonuç 3 ondalık basamaklı
    return soru(`${grup(w)} ${k} kaç ${b} eder?`, ond(res, 3), [ond(res * 10, 3), ond(res * 100, 3), Y(grup(w * f), "k:küçük birimden büyüğe geçerken çarpıldı (bölünmeliydi)")],
      `1 ${b} = ${f} ${k}. ${grup(w)} ÷ ${f} = ${ond(res, 3)} ${b}.`);
  };

  // ---------- 4. TEMA: İstatistiksel Araştırma Süreci ----------
  const KAT = ["göz rengi", "en sevilen meyve", "doğduğu şehir", "okula geliş şekli", "tuttuğu takım", "en sevdiği ders", "evcil hayvan türü", "saç rengi", "en sevdiği spor"];
  const SAY = ["boy uzunluğu", "kardeş sayısı", "haftada okunan kitap sayısı", "günlük uyku süresi", "yaş", "vücut ağırlığı", "evden okula uzaklık", "günlük ekran süresi"];
  const SORU_SAY = ["Öğrenciler günde kaç saat uyuyor?", "Öğrencilerin kaç kardeşi var?", "Öğrenciler haftada kaç kitap okuyor?", "Öğrencilerin boyu kaç santimetre?", "Öğrenciler okula kaç dakikada geliyor?", "Öğrenciler günde kaç bardak su içiyor?"];
  const SORU_KAT = ["Öğrencilerin en sevdiği meyve hangisi?", "Öğrenciler okula hangi taşıtla geliyor?", "Öğrencilerin en sevdiği renk hangisi?", "Öğrencilerin tuttuğu takım hangisi?", "Öğrencilerin en sevdiği ders hangisi?", "Öğrencilerin hangi evcil hayvanı var?"];
  U.t4k1 = () => {
    const tip = r(1, 4);
    if (tip === 1) { const d = pick(KAT); return soru("Hangisi kategorik veridir?", buyukHarf(d), karistir(SAY).slice(0, 3).map(buyukHarf), `"${buyukHarf(d)}" bir sayı değil, bir kategoridir. Diğerleri sayıyla ifade edilir.`); }
    if (tip === 2) { const d = pick(SAY); return soru("Hangisi sayısal veridir?", buyukHarf(d), karistir(KAT).slice(0, 3).map(buyukHarf), `"${buyukHarf(d)}" sayıyla ifade edilir. Diğerleri kategorik veridir.`); }
    if (tip === 3) { const d = pick(SORU_SAY); return soru("Hangisi sayısal veri toplamayı gerektiren bir araştırma sorusudur?", d, karistir(SORU_KAT).slice(0, 3), "Cevabı bir sayı olan soru sayısal veri gerektirir."); }
    const d = pick(SORU_KAT);
    return soru("Hangisi kategorik veri toplamayı gerektiren bir araştırma sorusudur?", d, karistir(SORU_SAY).slice(0, 3), "Cevabı bir kategori (renk, tür, isim gibi) olan soru kategorik veri gerektirir.");
  };

  const BAGLAM = ["Bir öğrencinin bir haftada okuduğu sayfa sayıları", "Bir basketbolcunun maçlarda attığı sayılar", "Bir manavın her gün sattığı karpuz sayıları", "Bir otobüsün duraklarda aldığı yolcu sayıları", "Bir öğrencinin her gün çözdüğü soru sayıları"];
  U.t4k2 = () => {
    const tip = r(1, 5), bg = pick(BAGLAM);
    if (tip === 1) {
      let n, v, m, son; do { n = r(4, 6); v = Array.from({ length: n - 1 }, () => r(3, 30)); m = r(8, 22); son = m * n - v.reduce((a, b) => a + b, 0); } while (son < 1 || son > 40);
      const d = karistir([...v, son]), top = m * n;
      return soru(`${bg}: ${d.join(", ")}. Bu verilerin aritmetik ortalaması kaçtır?`, m, [Y(top, "d:toplam bulundu ama veri sayısına bölünmedi"), m + 1, m - 1, m + 2],
        `Toplam: ${d.join(" + ")} = ${top}. Veri sayısı ${n}. ${top} ÷ ${n} = ${m}.`);
    }
    if (tip === 2) {
      const t = r(3, 25), diger = []; while (diger.length < 4) { const x = r(2, 30); if (x !== t && !diger.includes(x)) diger.push(x); }
      const d = karistir([t, t, t, ...diger]);
      return soru(`${bg}: ${d.join(", ")}. Bu verilerin tepe değeri kaçtır?`, t, diger, `${t} üç kez tekrar ediyor. En çok tekrar eden veri tepe değerdir.`);
    }
    if (tip === 3) {
      const s = new Set(); while (s.size < 5) s.add(r(2, 40));
      const d = karistir([...s]), sir = [...s].sort((a, b) => a - b);
      return soru(`${bg}: ${d.join(", ")}. Bu verilerin ortancası kaçtır?`, sir[2], [Y(d[2], "k:veriler sıralanmadan ortadaki sayı alındı"), sir[0], sir[4], sir[1]],
        `Küçükten büyüğe sırala: ${sir.join(", ")}. Ortadaki değer ${sir[2]}.`);
    }
    if (tip === 4) {
      const s = new Set(), n = r(5, 6); while (s.size < n) s.add(r(5, 50));
      const d = karistir([...s]), mx = Math.max(...d), mn = Math.min(...d);
      return soru(`${bg}: ${d.join(", ")}. Bu verilerin açıklığı kaçtır?`, mx - mn, [Y(mx, "k:açıklık en büyük değer sanıldı"), mn, Y(mx + mn, "k:en büyük ile en küçük değer toplandı (çıkarılmalıydı)")], `En büyük ${mx}, en küçük ${mn}. Açıklık: ${mx} − ${mn} = ${mx - mn}.`);
    }
    const n = r(3, 8), m = r(40, 95);
    return soru(`${n} öğrencinin sınav puanlarının ortalaması ${m} ise puanların toplamı kaçtır?`, n * m, [Y(n + m, "k:ortalama ile kişi sayısı toplandı (çarpılmalıydı)"), m * (n - 1), m * (n + 1)],
      `Toplam = ortalama × veri sayısı = ${m} × ${n} = ${n * m}.`);
  };

  // ---------- 5. TEMA: Geometrik Şekiller ----------
  const yakinDerece = (x) => () => derece(Math.max(5, x + pick([-1, 1]) * r(1, 4) * 5));
  U.t5k1 = () => {
    let a; do { a = r(25, 155); } while (a === 90);
    const b = 180 - a;
    const t = pick([
      ["Yöndeş açılardan biri", a, "Yöndeş açıların ölçüleri eşittir."],
      ["İç ters açılardan biri", a, "İç ters açıların ölçüleri eşittir."],
      ["Dış ters açılardan biri", a, "Dış ters açıların ölçüleri eşittir."],
      ["Kesenin aynı tarafında, paralellerin arasında kalan iki açıdan biri", b, `Bu iki açının toplamı 180°: 180° − ${a}° = ${b}°.`],
      ["Kesen üzerinde yan yana duran iki açıdan biri", b, `Yan yana duran bu açıların toplamı 180°: 180° − ${a}° = ${b}°.`]]);
    return soru(`İki paralel doğruyu bir kesen kesiyor. ${t[0]} ${a}° ise diğeri kaç derecedir?`, derece(t[1]),
      [Y(derece(t[1] === a ? b : a), t[1] === a ? "k:eş olan açılar bütünler sanıldı" : "k:bütünler olan açılar eş sanıldı"), Y(derece(360 - a), "k:180° yerine 360° kullanıldı"), derece(Math.abs(90 - a)), derece(2 * a)], t[2], yakinDerece(t[1]));
  };

  U.t5k2 = () => {
    const tip = r(1, 4);
    if (tip === 1) {
      let a, b, c; do { a = r(20, 110); b = r(20, 110); c = 180 - a - b; } while (c < 15 || a === b);
      return soru(`Bir üçgenin iki iç açısı ${a}° ve ${b}° ise üçüncü açısı kaç derecedir?`, derece(c), [Y(derece(a + b), "d:iki açı toplandı ama 180°'den çıkarılmadı"), derece(180 - a), derece(c + 10), Y(derece(360 - a - b), "k:üçgenin iç açıları toplamı 360° sanıldı")],
        `180° − (${a}° + ${b}°) = 180° − ${a + b}° = ${c}°.`, yakinDerece(c));
    }
    if (tip === 2) {
      const a = r(15, 75);
      return soru(`Bir dik üçgende dik açı dışındaki açılardan biri ${a}° ise diğeri kaç derecedir?`, derece(90 - a), [Y(derece(180 - a), "d:dik açı (90°) hesaba katılmadı"), derece(a), derece(90 + a)],
        `180° − (90° + ${a}°) = ${90 - a}°.`, yakinDerece(90 - a));
    }
    if (tip === 3) {
      const tur = pick(["Dar açılı", "Dik açılı", "Geniş açılı"]); let a, b, c;
      do {
        if (tur === "Dik açılı") { a = 90; b = r(15, 75); }
        else if (tur === "Geniş açılı") { a = r(95, 150); b = r(10, 170 - a); }
        else { a = r(50, 85); b = r(50, 85); }
        c = 180 - a - b;
      } while (c < 10 || (tur === "Dar açılı" && c >= 90) || (a === 60 && b === 60));
      return soru(`Açıları ${karistir([a, b, c]).map(derece).join(", ")} olan üçgen hangi türdendir?`, tur, ["Dar açılı", "Dik açılı", "Geniş açılı", "Eşkenar"].filter((x) => x !== tur),
        tur === "Dar açılı" ? "Bütün açılar 90°'den küçük, dar açılı üçgendir." : tur === "Dik açılı" ? "Bir açısı 90°, dik açılı üçgendir." : `${a}° açısı 90°'den büyük, geniş açılı üçgendir.`);
    }
    let a, b; do { a = r(20, 120); b = r(20, 140 - a); } while (180 - a - b < 10);
    const dogru = [a, b, 180 - a - b];
    const yan = [10, 20, 30].map((e) => { const t = dogru.slice(); t[r(0, 2)] += e; return karistir(t).map(derece).join(", "); });
    return soru("Hangi üç açı bir üçgenin iç açıları olabilir?", karistir(dogru).map(derece).join(", "), yan,
      `Üçgenin iç açıları toplamı 180° olmalı: ${dogru.join(" + ")} = 180.`);
  };

  const DORTGEN = [["Bütün kenarları eşit ve bütün açıları 90° olan dörtgen", "Kare"], ["Bütün açıları 90° olan ama bütün kenarları eşit olmak zorunda olmayan dörtgen", "Dikdörtgen"], ["Bütün kenarları eşit ama açıları 90° olmayan dörtgen", "Eşkenar dörtgen"], ["Karşılıklı kenarları paralel, açıları 90° olmayan ve bütün kenarları eşit olmayan dörtgen", "Paralelkenar"], ["Yalnızca bir çift karşılıklı kenarı paralel olan dörtgen", "Yamuk"]];
  U.t5k3 = () => {
    const tip = r(1, 3);
    if (tip === 1) {
      let a, b, c, d; do { a = r(50, 150); b = r(50, 150); c = r(50, 150); d = 360 - a - b - c; } while (d < 30 || d > 170);
      return soru(`Bir dörtgenin üç iç açısı ${a}°, ${b}° ve ${c}° ise dördüncü açısı kaç derecedir?`, derece(d),
        [Y(derece(a + b + c - 180), "k:dörtgenin iç açıları toplamı 180° sanıldı"), derece(d + 10), derece(180 - d)], `360° − (${a}° + ${b}° + ${c}°) = 360° − ${a + b + c}° = ${d}°.`, yakinDerece(d));
    }
    if (tip === 2) {
      let a; do { a = r(35, 145); } while (a === 90);
      const karsi = r(0, 1), dogru = karsi ? a : 180 - a;
      return soru(`Bir paralelkenarın bir açısı ${a}° ise ${karsi ? "bu açının karşısındaki açı" : "bu açıyla yan yana olan açı"} kaç derecedir?`, derece(dogru),
        [Y(derece(karsi ? 180 - a : a), karsi ? "k:karşılıklı açılar bütünler sanıldı (eşittir)" : "k:yan yana açılar eş sanıldı (toplamları 180°)"), derece(360 - a), derece(Math.abs(90 - a))],
        karsi ? "Paralelkenarda karşılıklı açılar eşittir." : `Paralelkenarda yan yana iki açının toplamı 180°: 180° − ${a}° = ${180 - a}°.`, yakinDerece(dogru));
    }
    const [tanim, ad] = pick(DORTGEN);
    return soru(`${tanim} hangisidir?`, ad, DORTGEN.map((x) => x[1]).filter((x) => x !== ad), `Doğru cevap: ${ad}.`);
  };

  // ---------- 6. TEMA: İşlemlerle Cebirsel Düşünme ve Değişimler ----------
  const HARF = ["x", "a", "y", "m", "n", "b"];
  const ifade = (k, h, s) => `${k === 1 ? "" : k}${h}${s > 0 ? ` + ${s}` : s < 0 ? ` − ${-s}` : ""}`;
  U.t6k1 = () => {
    const tip = r(1, 5), h = pick(HARF);
    if (tip === 1) {
      let k, s, v, val; do { k = r(2, 9); s = r(1, 15) * pick([1, -1]); v = r(1, 10); val = k * v + s; } while (val <= 0);
      return soru(`${h} = ${v} için ${ifade(k, h, s)} ifadesinin değeri kaçtır?`, val, [Y(k + v + s, "k:katsayı ile sayı çarpılmadı, toplandı"), Y(k * (v + s), "k:işlem önceliğine uyulmadı"), Y(k * v - s, "d:işaret karıştırıldı"), val + k],
        `${k} × ${v} ${s > 0 ? "+" : "−"} ${Math.abs(s)} = ${k * v} ${s > 0 ? "+" : "−"} ${Math.abs(s)} = ${val}.`);
    }
    if (tip === 2) {
      const p = r(2, 9), q = r(2, 9), c = r(1, 15);
      return soru(`${p}${h} + ${q}${h} + ${c} ifadesinin sade hali hangisidir?`, `${p + q}${h} + ${c}`,
        [Y(`${p + q + c}${h}`, "k:sabit terim harfli terimlerle toplandı"), Y(`${p * q}${h} + ${c}`, "k:katsayılar toplanacağı yerde çarpıldı"), Y(`${p + q}${h}`, "d:sabit terim yazılmadı"), `${p + q}${h} + ${c + 1}`],
        `Aynı harfi taşıyan terimler toplanır: ${p}${h} + ${q}${h} = ${p + q}${h}. ${c} ayrı kalır: ${p + q}${h} + ${c}.`, () => `${p + q + r(1, 3)}${h} + ${c}`);
    }
    if (tip === 3) {
      const k = r(2, 9), m = r(2, 12);
      const secenek = [[`bir sayının ${k} katının ${m} fazlası`, `${k}${h} + ${m}`], [`bir sayının ${k} katının ${m} eksiği`, `${k}${h} − ${m}`], [`bir sayının ${m} fazlasının ${k} katı`, `${k}(${h} + ${m})`]];
      const t = pick(secenek);
      return soru(`Sayı ${h} ile gösterilirse "${buyukHarf(t[0])}" hangi ifadeyle yazılır?`, t[1],
        [`${k}${h} + ${m}`, `${k}${h} − ${m}`, `${k}(${h} + ${m})`, `${m}${h} + ${k}`, `${k}(${h} − ${m})`].filter((x) => x !== t[1]),
        `${buyukHarf(t[0])} → ${t[1]}.`, () => `${r(2, 9)}${h} + ${r(2, 12)}`);
    }
    if (tip === 4) {
      let a, b; do { a = r(10, 50); b = r(5, 40); } while (a === b);
      const net = a - b, dogru = net > 0 ? `${h} + ${net}` : `${h} − ${-net}`;
      return soru(`${pick(ISIM)} adlı öğrencinin ${h} lirası var. Annesi ona ${a} lira verdi, sonra ${b} liralık bir kitap aldı. Kalan parası hangisidir?`, dogru,
        [Y(`${h} + ${a + b}`, "d:harcanan para da eklendi"), Y(`${h} − ${a + b}`, "d:alınan para da çıkarıldı"), Y(net > 0 ? `${h} − ${net}` : `${h} + ${-net}`, "d:işaret karıştırıldı")], `${h} + ${a} − ${b} = ${dogru}.`, () => `${h} + ${r(1, 60)}`);
    }
    const n = r(3, 12), es = pick(["kalem", "defter", "silgi", "kitap"]);
    return soru(`Bir ${es} ${h} TL ise ${n} ${es} kaç TL eder?`, `${n}${h}`, [Y(`${h} + ${n}`, "k:çarpma yerine toplama yapıldı"), Y(`${h} ÷ ${n}`, "k:çarpma yerine bölme yapıldı"), `${n} − ${h}`],
      `${n} tane ${h}: ${n} × ${h} = ${n}${h}.`, () => `${h} + ${r(1, 20)}`);
  };

  const kural = (a, b) => `${a === 1 ? "" : a}n${b > 0 ? ` + ${b}` : b < 0 ? ` − ${-b}` : ""}`;
  U.t6k2 = () => {
    const tip = r(1, 5);
    if (tip === 1) {
      const s = r(1, 15), d = r(2, 9), t = [0, 1, 2, 3].map((i) => s + i * d), ans = s + 4 * d;
      return soru(`${t.join(", ")}, ... örüntüsünde bir sonraki terim kaçtır?`, ans, [ans + 1, ans - 1, ans + d, t[3] + 1], `Her adımda ${d} artıyor: ${t[3]} + ${d} = ${ans}.`);
    }
    if (tip === 2) {
      const a = r(2, 7), b = r(0, 9), n = r(5, 20), ans = a * n + b;
      return soru(`Kuralı ${kural(a, b)} olan örüntünün ${n}. terimi kaçtır?`, ans, [Y(a * n, "d:kuraldaki sabit sayı eklenmedi"), Y(a + n + b, "k:katsayı n ile çarpılmadı, toplandı"), Y(a * (n + b), "k:işlem önceliğine uyulmadı"), ans + a],
        `n yerine ${n} yazılır: ${a} × ${n}${b ? ` + ${b}` : ""} = ${ans}.`);
    }
    if (tip === 3) {
      const a = r(2, 6), b = r(-(a - 1), 6), t = [1, 2, 3, 4].map((n) => a * n + b);
      return soru(`${t.join(", ")}, ... örüntüsünün kuralı hangisidir? (n: terimin sırası)`, kural(a, b),
        [kural(a, b + 1), kural(a + 1, b - 1), `n + ${a}`, kural(a + b, 0)],
        `Terimler arasındaki fark ${a}, kural ${a}n ile başlar. n = 1 için ${a} × 1 = ${a}, ilk terim ${t[0]} olmalı. Kural: ${kural(a, b)}.`,
        () => kural(r(2, 7), r(-2, 6)));
    }
    if (tip === 4) {
      const s = r(3, 8), d = r(2, 5), k = r(5, 12), ans = s + (k - 1) * d;
      return soru(`Bir şekil örüntüsünde 1. adımda ${s} kibrit var ve her adımda ${d} kibrit ekleniyor. ${k}. adımda kaç kibrit olur?`, ans,
        [Y(s + k * d, "k:1. adımdaki kibritlerin üzerine k kez eklendi (k − 1 kez eklenmeliydi)"), Y(k * d, "d:başlangıçtaki kibritler hesaba katılmadı"), ans + d, ans - 1], `1. adımdan ${k}. adıma ${k - 1} kez ${d} eklenir: ${s} + ${k - 1} × ${d} = ${ans}.`);
    }
    let a, b, ek, v; do { a = r(2, 6); b = r(1, 9); ek = r(0, 1); v = r(2, 12); } while (!ek && a * v <= b); // sonuç negatif olmasın
    const ans = ek ? a * v + b : a * v - b;
    return soru(`"Sayıyı al, ${a} ile çarp, ${b} ${ek ? "ekle" : "çıkar"}" algoritmasına ${v} girilirse sonuç kaç olur?`, ans,
      [Y(v * a, "d:algoritmanın son adımı yapılmadı"), Y(ek ? a * v - b : a * v + b, "d:ekleme ile çıkarma karıştırıldı"), v + a + b, Y(a * (v + b), "k:adımların sırasına uyulmadı")], `${v} × ${a} = ${a * v}. ${a * v} ${ek ? "+" : "−"} ${b} = ${ans}.`);
  };

  // ---------- 7. TEMA: Geometrik Nicelikler ----------
  const ALAN = [["m²", "dm²", 100], ["m²", "cm²", 10000], ["dm²", "cm²", 100], ["cm²", "mm²", 100], ["km²", "m²", 1000000], ["dm²", "mm²", 10000]];
  U.t7k1 = () => {
    const tip = r(1, 3);
    if (tip === 3) {
      const [ne, b] = pick([["bir defter sayfasının alanı", "cm²"], ["bir futbol sahasının alanı", "m²"], ["bir ülkenin yüzölçümü", "km²"], ["bir sınıfın tabanının alanı", "m²"], ["bir telefon ekranının alanı", "cm²"], ["bir şehrin yüzölçümü", "km²"], ["bir toplu iğne başının alanı", "mm²"], ["bir evin bahçesinin alanı", "m²"]]);
      return soru(`${buyukHarf(ne)} için en uygun alan birimi hangisidir?`, b, ["mm²", "cm²", "m²", "km²"].filter((x) => x !== b), `${buyukHarf(ne)} için en uygun birim ${b}.`);
    }
    const [B, K, f] = pick(ALAN);
    if (tip === 1) {
      const s = pick([r(2, 9) * 10, r(11, 99)]), res = s * f; // 1 ondalık basamak
      return soru(`${ond(s, 1)} ${B} kaç ${K} eder?`, ond(res, 1), [f === 100 ? Y(ond(res / 10, 1), "k:alan birimi uzunluk birimi gibi 10'ar kat çevrildi (100'er olmalı)") : ond(res / 10, 1), ond(res * 10, 1), ond(res / 100, 1)],
        `1 ${B} = ${grup(f)} ${K}. ${ond(s, 1)} × ${grup(f)} = ${ond(res, 1)} ${K}.`);
    }
    const res = r(5, 950), w = (res * f) / 100; // sonuç 2 ondalık basamak
    return soru(`${grup(w)} ${K} kaç ${B} eder?`, ond(res, 2), [ond(res * 10, 2), ond(res * 100, 2), Y(grup(w * f), "k:küçük birimden büyüğe geçerken çarpıldı (bölünmeliydi)")],
      `1 ${B} = ${grup(f)} ${K}. ${grup(w)} ÷ ${grup(f)} = ${ond(res, 2)} ${B}.`);
  };

  U.t7k2 = () => {
    const tip = r(1, 5);
    if (tip === 1) {
      const b = r(4, 20), h = r(3, 15);
      return soru(`Tabanı ${b} cm, yüksekliği ${h} cm olan paralelkenarın alanı kaç cm²'dir?`, b * h, [Y(b + h, "k:taban ile yükseklik toplandı (çarpılmalıydı)"), Y(2 * (b + h), "k:alan yerine çevre hesaplandı"), (b * h) % 2 ? b * h + b : Y((b * h) / 2, "k:paralelkenar alanı üçgen gibi 2'ye bölündü")],
        `Paralelkenarın alanı = taban × yükseklik = ${b} × ${h} = ${b * h} cm².`);
    }
    if (tip === 2) {
      let b, h; do { b = r(4, 20); h = r(3, 16); } while ((b * h) % 2);
      return soru(`Tabanı ${b} cm, yüksekliği ${h} cm olan üçgenin alanı kaç cm²'dir?`, (b * h) / 2, [Y(b * h, "d:üçgen alanında 2'ye bölmek unutuldu"), Y(b + h, "k:taban ile yükseklik toplandı"), (b * h) / 2 + b],
        `Üçgenin alanı = (taban × yükseklik) ÷ 2 = ${b} × ${h} ÷ 2 = ${(b * h) / 2} cm².`);
    }
    if (tip === 3) {
      const b = r(4, 15), h = r(3, 12), A = b * h;
      return soru(`Alanı ${A} cm², tabanı ${b} cm olan paralelkenarın yüksekliği kaç cm'dir?`, h, [Y(A - b, "k:alandan taban çıkarıldı (bölünmeliydi)"), h * 2, h + 2], `Yükseklik = alan ÷ taban = ${A} ÷ ${b} = ${h} cm.`);
    }
    if (tip === 4) {
      let b, h; do { b = r(4, 16); h = r(3, 12); } while ((b * h) % 2);
      const A = (b * h) / 2;
      return soru(`Alanı ${A} cm², yüksekliği ${h} cm olan üçgenin tabanı kaç cm'dir?`, b, [b % 2 ? b + 1 : b / 2, b * 2, b + 3],
        `Taban × ${h} ÷ 2 = ${A} → taban × ${h} = ${2 * A} → taban = ${b} cm.`);
    }
    const b = r(5, 25), h = r(4, 20), k = r(2, 5), ne = pick(["fide", "lale soğanı", "marul fidesi"]), top = b * h * k;
    return soru(`Tabanı ${b} m, yüksekliği ${h} m olan paralelkenar şeklindeki bir bahçenin her metrekaresine ${k} ${ne} dikilecek. Toplam kaç ${ne} gerekir?`, top,
      [Y(b * h, "d:alan bulundu ama metrekare başına düşen sayıyla çarpılmadı"), (b + h) * k, top % 2 ? b * h * (k + 1) : top / 2], `Alan: ${b} × ${h} = ${b * h} m². Toplam: ${b * h} × ${k} = ${top}.`);
  };

  U.t7k3 = () => {
    const tip = r(1, 5), pi = "(π = 3 alınız)";
    if (tip === 1) { const R = r(2, 25); return soru(`Yarıçapı ${R} cm olan çemberin çapı kaç cm'dir?`, 2 * R, [Y(R, "k:yarıçap ile çap karıştırıldı"), 4 * R, R + 2, 3 * R], `Çap = 2 × yarıçap = 2 × ${R} = ${2 * R} cm.`); }
    if (tip === 2) { const c = r(3, 30); return soru(`Çapı ${c} cm olan çemberin çevresi kaç cm'dir? ${pi}`, 3 * c, [Y(6 * c, "k:çap, yarıçap gibi kullanıldı (fazladan 2 ile çarpıldı)"), Y(c + 3, "k:π ile çarpmak yerine toplandı"), 2 * c, 3 * c + 3], `Çevre = π × çap = 3 × ${c} = ${3 * c} cm.`); }
    if (tip === 3) { const R = r(2, 20); return soru(`Yarıçapı ${R} cm olan çemberin çevresi kaç cm'dir? ${pi}`, 6 * R, [Y(3 * R, "k:yarıçap, çap gibi kullanıldı (2 ile çarpılmadı)"), Y(3 * R * R, "k:çevre yerine alan formülü kullanıldı"), 2 * R + 3, 6 * R + 6], `Çevre = 2 × π × r = 2 × 3 × ${R} = ${6 * R} cm.`); }
    if (tip === 4) { const R = r(2, 20), C = 6 * R; return soru(`Çevresi ${C} cm olan çemberin yarıçapı kaç cm'dir? ${pi}`, R, [Y(2 * R, "d:çap bulundu ama yarıçap sorulmuştu"), C / 2, R + 3], `2 × 3 × r = ${C} → 6 × r = ${C} → r = ${R} cm.`); }
    const c = r(4, 16) * 5, n = r(2, 20), yol = 3 * c * n;
    return soru(`Çapı ${c} cm olan bir bisiklet tekerleği ${n} tam tur dönerse bisiklet kaç cm yol alır? ${pi}`, grup(yol),
      [Y(grup(c * n), "k:π ile çarpılmadı (bir tur, çevre kadar yoldur)"), Y(grup(6 * c * n), "k:çap, yarıçap gibi kullanıldı"), Y(grup(3 * c), "d:tur sayısıyla çarpılmadı")], `Bir tur = çevre = 3 × ${c} = ${3 * c} cm. ${n} tur: ${3 * c} × ${n} = ${grup(yol)} cm.`,
      () => grup(yol + pick([-1, 1]) * 3 * c * r(1, 3)));
  };

  U.t7k4 = () => {
    const tip = r(1, 3);
    if (tip === 1) {
      let a; do { a = r(20, 170); } while (a === 90 || a === 120);
      return soru(`Bir merkez açının ölçüsü ${a}° ise bu açının gördüğü yayın ölçüsü kaç derecedir?`, derece(a),
        [Y(derece(2 * a), "k:yay ölçüsü merkez açının iki katı sanıldı (çevre açıyla karıştırıldı)"), derece(180 - a), Y(derece(360 - a), "d:büyük yay hesaplandı"), ...(a % 2 ? [] : [Y(derece(a / 2), "k:merkez açı çevre açıyla karıştırıldı")])], "Merkez açının ölçüsü, gördüğü yayın ölçüsüne eşittir.", yakinDerece(a));
    }
    if (tip === 2) {
      const n = pick([3, 4, 5, 6, 8, 9, 10, 12]);
      const bag = pick([`Bir çember ${n} eş yaya bölünüyor. Her yayı gören merkez açı`, `Daire şeklindeki bir pizza ${n} eşit dilime kesiliyor. Her dilimin merkez açısı`]);
      return soru(`${bag} kaç derecedir?`, derece(360 / n), [30, 36, 40, 45, 60, 72, 90, 120].filter((x) => x !== 360 / n).map(derece),
        `Tam çember 360°. 360° ÷ ${n} = ${360 / n}°.`);
    }
    const aci = pick([30, 45, 60, 90, 120, 180, 270]), g = gcd(aci, 360), pay = aci / g, payda = 360 / g;
    const C = payda * r(2, Math.floor(120 / payda)), yay = (C * pay) / payda;
    return soru(`Çevresi ${C} cm olan bir çemberde ölçüsü ${aci}° olan merkez açının gördüğü yayın uzunluğu kaç cm'dir?`, yay,
      [Y(C - yay, "d:geri kalan yay hesaplandı"), yay * 2, Y(aci, "k:açının ölçüsü yay uzunluğu sanıldı"), yay + payda], `${aci}°, tam çemberin (360°) ${pay}/${payda} kadarıdır. ${C} × ${pay}/${payda} = ${yay} cm.`);
  };

  // ---------- Ek konu: Üslü ifadeler ve işlem önceliği ----------
  U.m1k1 = () => {
    if (r(0, 1)) {
      let b, e; do { b = r(2, 10); e = r(2, 4); } while (b ** e > 10000 || (b === 2 && e === 2));
      const v = b ** e;
      return soru(`${b}${UST[e]} ifadesinin değeri kaçtır?`, grup(v), [Y(grup(b * e), "k:taban ile üs çarpıldı"), Y(grup(b + e), "k:taban ile üs toplandı"), Y(grup(b ** (e - 1)), "d:taban bir kez eksik çarpıldı"), grup(v + b)],
        `${b}${UST[e]} = ${Array(e).fill(b).join(" × ")} = ${grup(v)}.`, () => grup(v + pick([-1, 1]) * r(1, 10)));
    }
    let a, e1, b, e2; do { a = r(2, 6); b = r(2, 6); e1 = r(2, 3); e2 = r(2, 3); } while (a ** e1 <= b ** e2);
    const v = a ** e1 - b ** e2;
    return soru(`${a}${UST[e1]} − ${b}${UST[e2]} işleminin sonucu kaçtır?`, v, [Y(a * e1 - b * e2, "k:üslü ifadede taban ile üs çarpıldı"), a ** e1, v + b, b ** e2],
      `${a}${UST[e1]} = ${a ** e1}, ${b}${UST[e2]} = ${b ** e2}. ${a ** e1} − ${b ** e2} = ${v}.`);
  };

  U.m1k2 = () => {
    const tip = r(1, 3);
    if (tip === 1) {
      const a = r(2, 30), b = r(2, 9), c = r(2, 9), v = a + b * c;
      return soru(`${a} + ${b} × ${c} işleminin sonucu kaçtır?`, v, [Y((a + b) * c, "k:işlem önceliğine uyulmadı (önce çarpma yapılır)"), a + b + c, a * b + c], `Önce çarpma: ${b} × ${c} = ${b * c}. Sonra toplama: ${a} + ${b * c} = ${v}.`);
    }
    if (tip === 2) {
      const b = r(2, 9), c = r(2, 9), a = b * c + r(1, 20), v = a - b * c;
      return soru(`${a} − ${b} × ${c} işleminin sonucu kaçtır?`, v, [Y((a - b) * c, "k:işlem önceliğine uyulmadı (önce çarpma yapılır)"), a - b + c, a - b - c], `Önce çarpma: ${b} × ${c} = ${b * c}. Sonra çıkarma: ${a} − ${b * c} = ${v}.`);
    }
    const x = r(2, 6), b = r(2, 9), c = r(2, 9), v = x * x + b * c;
    return soru(`${x}² + ${b} × ${c} işleminin sonucu kaçtır?`, v, [Y((x * x + b) * c, "k:işlem önceliğine uyulmadı (önce çarpma yapılır)"), Y(x * 2 + b * c, "k:kare almak 2 ile çarpmak sanıldı"), x * x + b + c],
      `Önce üs: ${x}² = ${x * x}. Sonra çarpma: ${b} × ${c} = ${b * c}. En son toplama: ${x * x} + ${b * c} = ${v}.`);
  };

  U.m1k3 = () => {
    const a = r(3, 12), t = pick([10, 20, 30, 40, 50]), b = r(2, t - 2), c = t - b, v = a * t;
    return soru(`${a} × ${b} + ${a} × ${c} işleminin sonucu kaçtır?`, v, [Y(a * b + c, "k:ortak çarpan yalnızca ilk terimle çarpıldı"), v + a, v - a, a + t],
      `Ortak çarpan ${a} paranteze alınır: ${a} × (${b} + ${c}) = ${a} × ${t} = ${v}.`);
  };
})();
