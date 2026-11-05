// 🧠 Zekâ Oyunları (2–4. sınıf). oyunlar.js + oyun-ek.js'ten SONRA, app.js'ten ÖNCE yüklenir.
// Dört bölüm: Dikkat ve Hafıza · Mantık · Strateji ve Uzam · Sayı Bulmacaları. Zorluk sınıfa göre artar (SINIF.no = 2, 3, 4).
// Yeni etkileşimli oyunlar: Sıralı Hafıza, Robot Kodlama, Hanoi Kulesi, Kaydırmalı Bulmaca. Diğerleri çoktan seçmeli bulmacalardır.
(function () {
  if (!window.OYUN || !window.DERS || !window.O) return;
  const C = OYUN.CIZ, S = window.SINIF || {}, N = Math.max(2, Math.min(4, S.no || 3));
  const EKG = window.OYUN_EK || {};
  const { pick, sec, karistir, secim } = O;
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const $ = (h) => { const d = document.createElement("div"); d.innerHTML = h.trim(); return d.firstElementChild; };
  const efekt = (t) => { try { APP.efekt(t); } catch (e) {} };
  const em = (o) => (o ? Object.assign(o, { em: true }) : o);
  const buyuk = (h) => `<div style="font-size:clamp(26px,7vw,46px);text-align:center;letter-spacing:3px;line-height:1.35">${h}</div>`;

  document.head.insertAdjacentHTML("beforeend", `<style>
.zk-panel{background:var(--kart);border:3px solid var(--sinir);border-radius:20px;padding:12px;margin:8px auto;max-width:560px;text-align:center}
.zk-dizi{font-size:clamp(34px,10vw,58px);letter-spacing:8px;min-height:72px}
.zk-tuslar{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:10px 0}
.zk-tuslar button{min-width:64px;height:64px;font-size:32px;border-radius:16px;border:3px solid var(--sinir);background:var(--kart);box-shadow:var(--golge);color:var(--yazi);font-weight:800}
.zk-tuslar button.ana{background:var(--yesil,#22c55e);color:#fff;border:none;min-width:120px;font-size:22px}
.zk-tuslar button.ik{min-width:64px;font-size:24px}
.zk-izgara{display:grid;gap:4px;margin:8px auto;max-width:380px}
.zk-izgara div{aspect-ratio:1;border-radius:10px;background:#f4efe3;display:flex;align-items:center;justify-content:center;font-size:clamp(20px,7vw,34px)}
.zk-izgara div.engel{background:#8d7b68}
.zk-izgara div.yol{background:#d6f5df}
.zk-program{min-height:44px;font-size:28px;letter-spacing:4px;border:3px dashed var(--sinir);border-radius:14px;padding:4px 8px;margin:6px auto;max-width:520px;word-break:break-all}
.zk-hanoi{display:flex;gap:8px;justify-content:center;align-items:flex-end;margin:10px auto;max-width:560px}
.zk-cubuk{flex:1;height:190px;border-radius:14px;background:var(--kart);border:3px solid var(--sinir);display:flex;flex-direction:column-reverse;align-items:center;padding:6px 0;gap:3px;position:relative;cursor:pointer}
.zk-cubuk::before{content:"";position:absolute;bottom:6px;top:14px;width:8px;border-radius:4px;background:#b9a98a;z-index:0}
.zk-cubuk.secili{border-color:var(--mavi,#3b82f6);transform:translateY(-4px)}
.zk-disk{height:24px;border-radius:12px;z-index:1;box-shadow:inset 0 -4px 0 rgba(0,0,0,.15)}
.zk-kaydir{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;max-width:300px;margin:10px auto}
.zk-kaydir button{aspect-ratio:1;font-size:clamp(28px,9vw,44px);font-weight:900;border-radius:14px;border:3px solid var(--sinir);background:linear-gradient(135deg,#fde68a,#fca5a5);color:#3b2f55;box-shadow:var(--golge)}
.zk-kaydir button.bos{background:transparent;border-style:dashed;box-shadow:none}
.zk-bilgi{font-size:17px;margin:6px 0}
.zk-sallan{animation:zkS .35s}@keyframes zkS{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
</style>`);

  // ================== Etkileşimli oyun türleri ==================
  // 1) Sıralı hafıza: dizi kısa süre gösterilir, sonra aynı sırayla seçilir
  C.dizi = (g, el, bitir) => {
    const k = $(`<div class="zk-panel"><div class="zk-bilgi">Dikkatle bak ve aklında tut!</div><div class="zk-dizi">${g.dizi.join("")}</div><div class="zk-tuslar"></div></div>`);
    const gos = k.querySelector(".zk-dizi"), tus = k.querySelector(".zk-tuslar"), bil = k.querySelector(".zk-bilgi");
    el.appendChild(k);
    let secilen = [], bitti = false;
    const baslat = () => {
      gos.textContent = "❓".repeat(g.dizi.length); bil.textContent = "Şimdi aynı sırayla dokun!";
      karistir(g.palet).forEach((e) => { const b = document.createElement("button"); b.textContent = e; b.onclick = () => {
        if (bitti) return; secilen.push(e); efekt("tik");
        const i = secilen.length - 1;
        gos.textContent = secilen.join("") + "❓".repeat(g.dizi.length - secilen.length);
        if (e !== g.dizi[i]) { bitti = true; gos.classList.add("zk-sallan"); return setTimeout(() => bitir(false, g.dizi.join(" ")), 500); }
        if (secilen.length === g.dizi.length) { bitti = true; setTimeout(() => bitir(true, null), 300); }
      }; tus.appendChild(b); });
    };
    const hazir = document.createElement("button"); hazir.className = "ana"; hazir.textContent = "Hazırım ✓"; tus.appendChild(hazir);
    let zam = setTimeout(() => { hazir.remove(); baslat(); }, g.sure);
    hazir.onclick = () => { clearTimeout(zam); hazir.remove(); baslat(); };
  };

  // 2) Robot kodlama: oklarla program yazılır, robot çalıştırılır
  C.kodla = (g, el, bitir) => {
    const n = g.n, OK = { "⬆️": [-1, 0], "⬇️": [1, 0], "⬅️": [0, -1], "➡️": [0, 1] };
    const k = $(`<div class="zk-panel"><div class="zk-izgara" style="grid-template-columns:repeat(${n},1fr)"></div>
      <div class="zk-bilgi">Program (en fazla ${g.max} adım):</div><div class="zk-program"></div>
      <div class="zk-tuslar">${Object.keys(OK).map((o) => `<button data-o="${o}">${o}</button>`).join("")}<button class="ik" data-sil>⌫</button><button class="ana" data-calis>▶ Çalıştır</button></div>
      <div class="zk-bilgi zk-durum"></div></div>`);
    el.appendChild(k);
    const iz = k.querySelector(".zk-izgara"), prog = k.querySelector(".zk-program"), durum = k.querySelector(".zk-durum");
    let program = [], deneme = 0, calisiyor = false;
    const ciz = (pos, yol) => { iz.innerHTML = ""; for (let i = 0; i < n * n; i++) { const d = document.createElement("div"); if (g.engel.includes(i)) { d.className = "engel"; d.textContent = "🪨"; } if (yol && yol.includes(i)) d.classList.add("yol"); if (i === g.hedef) d.textContent = "⭐"; if (i === pos) d.textContent = "🤖"; iz.appendChild(d); } };
    const yazProg = () => (prog.textContent = program.join("") || " ");
    ciz(g.bas); yazProg();
    k.querySelectorAll("[data-o]").forEach((b) => (b.onclick = () => { if (calisiyor || program.length >= g.max) return; program.push(b.dataset.o); efekt("tik"); yazProg(); }));
    k.querySelector("[data-sil]").onclick = () => { if (!calisiyor) { program.pop(); yazProg(); } };
    k.querySelector("[data-calis]").onclick = () => {
      if (calisiyor || !program.length) return; calisiyor = true; deneme++;
      let pos = g.bas, adim = 0; const yol = [pos];
      const tik = () => {
        if (adim >= program.length) return son(pos === g.hedef);
        const [dr, dc] = OK[program[adim]], rr = Math.floor(pos / n) + dr, cc = (pos % n) + dc, yeni = rr * n + cc;
        if (rr < 0 || rr >= n || cc < 0 || cc >= n || g.engel.includes(yeni)) { iz.classList.add("zk-sallan"); return son(false, "Robot duvara ya da kayaya çarptı!"); }
        pos = yeni; yol.push(pos); adim++; ciz(pos, yol); setTimeout(tik, 320);
      };
      const son = (ok, mesaj) => {
        calisiyor = false;
        if (ok) return setTimeout(() => bitir(deneme <= 2, deneme <= 2 ? null : g.cevap), 400);
        if (deneme >= 3) return setTimeout(() => bitir(false, g.cevap), 500);
        durum.textContent = (mesaj || "Robot yıldıza ulaşamadı.") + ` Programı düzeltip tekrar dene (${3 - deneme} hak).`;
        setTimeout(() => { iz.classList.remove("zk-sallan"); ciz(g.bas); }, 700);
      };
      tik();
    };
  };

  // 3) Hanoi kulesi: diskleri son çubuğa taşı; büyük disk küçüğün üstüne konamaz
  C.hanoi = (g, el, bitir) => {
    const RENK = ["#ef476f", "#f78c6b", "#ffd166", "#06d6a0", "#118ab2"];
    const opt = 2 ** g.n - 1;
    let cub = [Array.from({ length: g.n }, (_, i) => g.n - i), [], []], secili = null, hamle = 0, bitti = false;
    const k = $(`<div class="zk-panel"><div class="zk-bilgi">Tüm diskleri <b>en sağdaki</b> çubuğa taşı. Büyük disk küçüğün üstüne konamaz. En az ${opt} hamlede yapılabilir.</div>
      <div class="zk-hanoi"></div><div class="zk-bilgi zk-say">Hamle: 0</div><div class="zk-tuslar"><button class="ik" data-bas>🔄 Baştan</button></div></div>`);
    el.appendChild(k);
    const alan = k.querySelector(".zk-hanoi"), say = k.querySelector(".zk-say");
    const ciz = () => { alan.innerHTML = ""; cub.forEach((c, i) => { const d = document.createElement("div"); d.className = "zk-cubuk" + (secili === i ? " secili" : ""); c.forEach((x) => { const dk = document.createElement("div"); dk.className = "zk-disk"; dk.style.width = 26 + x * 16 + "%"; dk.style.background = RENK[(x - 1) % 5]; d.appendChild(dk); }); d.onclick = () => dokun(i); alan.appendChild(d); }); say.textContent = `Hamle: ${hamle}`; };
    const dokun = (i) => {
      if (bitti) return;
      if (secili === null) { if (cub[i].length) { secili = i; efekt("tik"); } }
      else if (secili === i) secili = null;
      else { const a = cub[secili], b = cub[i], x = a[a.length - 1]; if (b.length && b[b.length - 1] < x) { alan.classList.add("zk-sallan"); setTimeout(() => alan.classList.remove("zk-sallan"), 400); } else { b.push(a.pop()); hamle++; efekt("tik"); } secili = null; }
      ciz();
      if (cub[2].length === g.n) { bitti = true; setTimeout(() => bitir(hamle <= opt * 2, hamle <= opt * 2 ? null : `${opt} hamlede yapılabilirdi`), 400); }
    };
    k.querySelector("[data-bas]").onclick = () => { if (bitti) return; cub = [Array.from({ length: g.n }, (_, i) => g.n - i), [], []]; secili = null; hamle = 0; ciz(); };
    ciz();
  };

  // 4) Kaydırmalı bulmaca (3×3): boşluğa komşu taşa dokunarak sayıları sıraya diz
  C.kaydir = (g, el, bitir) => {
    let t = g.tas.slice(), hamle = 0, bitti = false;
    const k = $(`<div class="zk-panel"><div class="zk-bilgi">Boşluğun yanındaki taşa dokun, kaydır. Sayıları 1'den 8'e sırala!</div><div class="zk-kaydir"></div><div class="zk-bilgi zk-say"></div><div class="zk-tuslar"><button class="ik" data-pes>🏳️ Pes et</button></div></div>`);
    el.appendChild(k);
    const alan = k.querySelector(".zk-kaydir"), say = k.querySelector(".zk-say");
    const ciz = () => { alan.innerHTML = ""; t.forEach((v, i) => { const b = document.createElement("button"); if (!v) b.className = "bos"; b.textContent = v || ""; b.onclick = () => kay(i); alan.appendChild(b); }); say.textContent = `Hamle: ${hamle}`; };
    const kay = (i) => {
      if (bitti) return; const b = t.indexOf(0), ri = Math.floor(i / 3), ci = i % 3, rb = Math.floor(b / 3), cb = b % 3;
      if (Math.abs(ri - rb) + Math.abs(ci - cb) !== 1) return;
      [t[i], t[b]] = [t[b], t[i]]; hamle++; efekt("tik"); ciz();
      if (t.every((v, j) => v === (j === 8 ? 0 : j + 1))) { bitti = true; setTimeout(() => bitir(true, null), 400); }
    };
    k.querySelector("[data-pes]").onclick = () => { if (bitti) return; bitti = true; t = [1, 2, 3, 4, 5, 6, 7, 8, 0]; ciz(); bitir(false, "1 2 3 / 4 5 6 / 7 8 _"); };
    ciz();
  };

  // ================== Üreteçler ==================
  const EMO = ["🍎", "🍌", "🍇", "🍓", "🐱", "🐶", "🐸", "🐰", "⭐", "🌙", "⚽", "🎈", "🚗", "🌸", "🐟", "🍀"];
  // Dikkat ve hafıza
  const diziG = () => { const uz = N + 1 + (Math.random() < 0.4 ? 1 : 0), palet = sec(EMO, Math.min(8, uz + 3)), dizi = Array.from({ length: uz }, () => pick(palet.slice(0, uz + 1))); return { tip: "dizi", soru: `Gördüğün ${uz} resmi aynı sırayla seç!`, dizi, palet, sure: 900 * uz + 800, cozum: "Uzun dizileri parçalara ayırarak (2'şer, 3'er) hatırlamak kolaylaştırır." }; };
  const sayG = () => {
    const hedef = pick(EMO), diger = sec(EMO.filter((x) => x !== hedef), 3), top = 10 + N * 4, adet = r(3, 5 + N);
    const iz = karistir([...Array(adet).fill(hedef), ...Array.from({ length: top - adet }, () => pick(diger))]);
    return em(secim(`Kaç tane ${hedef} var? Dikkatle say!`, String(adet), [adet - 1, adet + 1, adet + 2, adet - 2].filter((x) => x > 0).map(String), `${adet} tane ${hedef} var. Satır satır saymak hata yapmayı önler.`, { gorsel: `<div style="font-size:clamp(24px,7vw,36px);display:grid;grid-template-columns:repeat(${N + 4},1fr);gap:4px;max-width:420px;margin:0 auto">${iz.map((e) => `<span>${e}</span>`).join("")}</div>` }));
  };
  // Mantık
  const desenG = () => {
    const tur = r(0, 2), s = sec(["🔴", "🔵", "🟢", "🟡", "🟣", "🟠", "⭐", "🌙", "🍎", "🍌", "🐱", "🐶"], 4);
    let kal;
    if (tur === 0) kal = pick([[s[0], s[1], s[2]], [s[0], s[0], s[1]], [s[0], s[1], s[1], s[2]], [s[0], s[1], s[2], s[1]]]);
    else if (tur === 1) kal = [s[0], s[1], s[2], s[3]].slice(0, N + 1);
    else kal = [s[0], s[1], s[1], s[2], s[2], s[2]].slice(0, 3 + (N >= 3 ? 1 : 0));
    const uz = kal.length * 2 + r(0, kal.length - 1), dizi = Array.from({ length: uz }, (_, i) => kal[i % kal.length]), cevap = kal[uz % kal.length];
    return em(secim("Desen nasıl devam eder? Sıradakini bul!", cevap, s.filter((x) => x !== cevap), `Tekrar eden parça: ${kal.join("")}`, { gorsel: buyuk(dizi.join("") + "❓") }));
  };
  const oruntuG = () => {
    const t = r(0, N >= 4 ? 4 : N >= 3 ? 3 : 2); let d, kural;
    if (t === 0) { const a = r(1, 20), k = r(2, 2 + N * 2); d = [0, 1, 2, 3, 4].map((i) => a + i * k); kural = `Her seferinde ${k} artıyor.`; }
    else if (t === 1) { const k = r(2, 3 + N), a = k * r(6, 12); d = [0, 1, 2, 3, 4].map((i) => a - i * k); kural = `Her seferinde ${k} azalıyor.`; }
    else if (t === 2) { const a = r(1, 4); d = [0, 1, 2, 3, 4].map((i) => a * 2 ** i); kural = "Her sayı bir öncekinin 2 katı."; }
    else if (t === 3) { const a = r(1, 9), x = r(2, 5), y = r(1, 3); d = [a, a + x, a + x - y, a + 2 * x - y, a + 2 * x - 2 * y]; kural = `Sırayla ${x} ekleniyor, ${y} çıkarılıyor.`; }
    else { const a = r(1, 5); d = [0, 1, 2, 3, 4].map((i) => a + (i * (i + 1)) / 2); kural = "Artış miktarı her seferinde 1 büyüyor (+1, +2, +3, +4)."; }
    const cevap = d[4];
    return secim(`Örüntüde ❓ yerine hangi sayı gelmeli?`, String(cevap), [cevap + 1, cevap - 1, cevap + 2, d[3] * 2, d[3] + 1].filter((x) => x !== cevap && x >= 0).map(String), kural, { gorsel: buyuk(d.slice(0, 4).join(" , ") + " , ❓") });
  };
  const KAT = [["Hayvan", ["🐱", "🐶", "🐸", "🐰", "🦊", "🐻", "🐼", "🐯"]], ["Meyve", ["🍎", "🍌", "🍇", "🍓", "🍐", "🍊", "🍒", "🍉"]], ["Taşıt", ["🚗", "🚌", "🚲", "✈️", "🚂", "🚢", "🚁", "🏍️"]], ["Spor", ["⚽", "🏀", "🎾", "🏐", "🏓", "🥊", "⛸️", "🏈"]], ["Hava", ["☀️", "🌧️", "⛅", "❄️", "🌈", "⚡", "🌪️", "🌤️"]]];
  const farkliG = () => {
    if (N >= 3 && Math.random() < 0.45) { // sayılarla
      const t = r(0, 2), tek = (x) => x % 2;
      let grup, fark, neden;
      if (t === 0) { const cift = Math.random() < 0.5; grup = sec(Array.from({ length: 40 }, (_, i) => i + 2).filter((x) => (tek(x) ? !cift : cift)), 4); fark = pick(Array.from({ length: 40 }, (_, i) => i + 2).filter((x) => (tek(x) ? cift : !cift))); neden = `Diğerleri ${cift ? "çift" : "tek"}, ${fark} ${cift ? "tek" : "çift"} sayı.`; }
      else if (t === 1) { const k = pick([5, 10, 3, 4]); grup = sec(Array.from({ length: 12 }, (_, i) => k * (i + 1)), 4); do { fark = r(2, 60); } while (fark % k === 0); neden = `Diğerleri ${k}'in katı, ${fark} değil.`; }
      else { grup = sec([11, 22, 33, 44, 55, 66, 77, 88, 99], 4); do { fark = r(10, 99); } while (fark % 11 === 0); neden = `Diğerlerinin rakamları aynı, ${fark} sayısının değil.`; }
      return secim("Hangi sayı diğerlerinden farklı?", String(fark), grup.map(String), neden, { gorsel: buyuk(karistir([...grup, fark]).join("  ")) });
    }
    const [a, b] = sec(KAT, 2), dort = sec(a[1], 3 + (N >= 3 ? 1 : 0)), d = pick(b[1]);
    return em(secim("Hangisi diğerlerinden farklı?", d, dort, `${d} bir ${b[0].toLocaleLowerCase("tr")}; diğerleri ${a[0].toLocaleLowerCase("tr")} grubunda.`, { gorsel: buyuk(karistir([...dort, d]).join(" ")) }));
  };
  const AD = ["Ali", "Ayşe", "Can", "Elif", "Mert", "Zeynep", "Efe", "Defne"];
  const mantikG = () => {
    const kisi = sec(AD, 3), esya = pick([["🔴 kırmızı", "🔵 mavi", "🟢 yeşil"], ["🍎 elma", "🍌 muz", "🍇 üzüm"], ["🐱 kedi", "🐶 köpek", "🐰 tavşan"], ["⚽ futbol", "🏀 basketbol", "🎾 tenis"]]);
    const es = karistir([0, 1, 2]); // kisi[i] -> esya[es[i]]
    const ipucu = [`${kisi[0]} → ${esya[es[0]]}`, `${kisi[1]} → ${esya[es[2]]} değil`];
    const sor = r(1, 2);
    if (sor === 1) ipucu[1] = `${kisi[2]} → ${esya[es[1]]} değil`;
    // kalan iki kişi için tek çözüm: ikinci ipucu kişiyi dışarıda bırakılan seçenekten uzaklaştırır
    const soruKisi = kisi[sor], cevap = esya[es[sor]];
    return secim(`${kisi.join(", ")} birer tane seçti, herkes farklı seçti. İpuçlarına göre ${soruKisi} neyi seçti?`, cevap, esya.filter((x) => x !== cevap), `${kisi.map((k, i) => `${k}: ${esya[es[i]]}`).join(" · ")}`, { gorsel: `<div class="zk-panel" style="font-size:19px;text-align:left">${ipucu.map((x) => "🔎 " + x).join("<br>")}</div>`, balonYok: true });
  };
  const teraziG = () => {
    const [a, b] = sec(["🍎", "🍌", "🍐", "🍉", "🥕", "🧀"], 2), bv = r(1, 3 + N), k = r(2, N >= 3 ? 4 : 3), av = bv * k;
    if (N >= 3 && Math.random() < 0.5) {
      const c = pick(["🍇", "🥚", "🍓"].filter((x) => x !== a && x !== b)), cv = r(1, 4), toplam = av + cv;
      return secim(`Terazi dengede. ${b} = ${bv} kg ise ${c} kaç kg?`, String(cv), [cv + 1, cv + bv, toplam, Math.max(1, cv - 1) === cv ? cv + 2 : Math.max(1, cv - 1)].map(String), `${a} = ${k} × ${bv} = ${av} kg. ${a}${c} = ${toplam} kg olduğuna göre ${c} = ${toplam} − ${av} = ${cv} kg.`, { gorsel: buyuk(`⚖️ ${a} = ${b.repeat(k)}<br>⚖️ ${a}${c} = ${toplam} kg`) });
    }
    return secim(`Terazi dengede. Bir ${b} ${bv} kg ise bir ${a} kaç kg?`, String(av), [av + bv, av - 1, k, bv * (k + 1)].filter((x) => x > 0 && x !== av).map(String), `${a} = ${k} tane ${b} = ${k} × ${bv} = ${av} kg.`, { gorsel: buyuk(`⚖️ ${a} = ${b.repeat(k)}`) });
  };
  // Strateji ve uzam
  const kodlaG = () => {
    const n = N + 2; // 4, 5, 6
    for (let deneme = 0; deneme < 40; deneme++) {
      const bas = r(0, n * n - 1); let hedef = r(0, n * n - 1); if (hedef === bas) continue;
      const engel = sec(Array.from({ length: n * n }, (_, i) => i).filter((i) => i !== bas && i !== hedef), N + 1);
      // BFS ile en kısa yol
      const OK = [["⬆️", -1, 0], ["⬇️", 1, 0], ["⬅️", 0, -1], ["➡️", 0, 1]], once = { [bas]: null }, q = [bas];
      while (q.length) { const p = q.shift(); if (p === hedef) break; for (const [o, dr, dc] of OK) { const rr = Math.floor(p / n) + dr, cc = (p % n) + dc, y = rr * n + cc; if (rr < 0 || rr >= n || cc < 0 || cc >= n || engel.includes(y) || y in once) continue; once[y] = [p, o]; q.push(y); } }
      if (!(hedef in once)) continue;
      const yol = []; for (let p = hedef; once[p]; p = once[p][0]) yol.unshift(once[p][1]);
      if (yol.length < 3 || yol.length > 4 + N * 2) continue;
      return { tip: "kodla", soru: "Robotu yıldıza götürecek programı yaz, sonra ▶ Çalıştır'a bas!", okunacak: "Robotu yıldıza götürecek okları sırayla seç, sonra çalıştır.", n, bas, hedef, engel, max: yol.length + 4, cevap: yol.join(""), cozum: `Bir çözüm: ${yol.join("")} (${yol.length} adım). Programlamada önce planlar, sonra çalıştırırız.` };
    }
    return null;
  };
  const hanoiG = () => ({ tip: "hanoi", soru: "Hanoi Kulesi: diskleri en sağdaki çubuğa taşı!", n: N >= 4 ? r(3, 4) : 3, cozum: "İpucu: En küçük diski hep aynı yönde döndürerek taşımak işe yarar." });
  const kaydirG = () => {
    const t = [1, 2, 3, 4, 5, 6, 7, 8, 0]; let b = 8, onceki = -1;
    for (let i = 0; i < 8 + N * 6; i++) { const kom = [b - 3, b + 3, b % 3 ? b - 1 : -1, b % 3 < 2 ? b + 1 : -1].filter((x) => x >= 0 && x < 9 && x !== onceki); const x = pick(kom); [t[b], t[x]] = [t[x], t[b]]; onceki = b; b = x; }
    if (t.every((v, j) => v === (j === 8 ? 0 : j + 1))) { [t[7], t[8]] = [t[8], t[7]]; }
    return { tip: "kaydir", soru: "Kaydırmalı bulmaca: sayıları 1'den 8'e sırala!", tas: t, cozum: "İpucu: Önce üst satırı (1 2 3) tamamla, sonra diğerlerine geç." };
  };
  const YON = ["⬆️", "↗️", "➡️", "↘️", "⬇️", "↙️", "⬅️", "↖️"];
  const dondurG = () => {
    const i = r(0, 7), adim = pick(N >= 3 ? [2, 4, 6, -2, 1, 3] : [2, 4, -2]), j = (i + adim + 16) % 8;
    const derece = Math.abs(adim) * 45, yon = adim > 0 ? "saat yönünde" : "saat yönünün tersine";
    return em(secim(`${YON[i]} oku ${yon} ${derece}° döndürülürse hangi yönü gösterir?`, YON[j], YON.filter((x) => x !== YON[j]), `Her 45° bir adım dönmek demektir. ${derece}° = ${Math.abs(adim)} adım.`, { gorsel: buyuk(`${YON[i]} 🔄 ${derece}°`) }));
  };
  // Sayı bulmacaları
  const sifreG = () => {
    const [a, b, c] = sec(["🍎", "🍌", "⭐", "🌙", "🐱", "🎈"], 3), av = r(2, 4 + N), bv = r(1, 3 + N), cv = r(1, 6);
    if (N >= 3 && Math.random() < 0.5) return secim(`Her resim bir sayıyı gösteriyor. ${c} kaçtır?`, String(cv), [cv + 1, cv + 2, Math.max(0, cv - 1), av].filter((x) => x !== cv).map(String), `${a} = ${av}, ${b} = ${bv}, ${c} = ${av + bv + cv} − ${av} − ${bv} = ${cv}.`, { gorsel: buyuk(`${a} + ${a} = ${2 * av}<br>${a} + ${b} = ${av + bv}<br>${a} + ${b} + ${c} = ${av + bv + cv}`) });
    return secim(`Her resim bir sayıyı gösteriyor. ${b} kaçtır?`, String(bv), [bv + 1, bv + 2, av, Math.max(0, bv - 1)].filter((x) => x !== bv).map(String), `${a} + ${a} = ${2 * av} ise ${a} = ${av}. ${av} + ${b} = ${av + bv} ise ${b} = ${bv}.`, { gorsel: buyuk(`${a} + ${a} = ${2 * av}<br>${a} + ${b} = ${av + bv}`) });
  };
  const sihirliG = () => {
    let m = [2, 7, 6, 9, 5, 1, 4, 3, 8];
    const don = (x) => [x[6], x[3], x[0], x[7], x[4], x[1], x[8], x[5], x[2]];
    for (let i = r(0, 3); i > 0; i--) m = don(m);
    if (Math.random() < 0.5) m = [m[2], m[1], m[0], m[5], m[4], m[3], m[8], m[7], m[6]];
    const ek = N >= 3 ? r(0, 5 * (N - 2)) : 0; m = m.map((x) => x + ek);
    const top = 15 + 3 * ek, bos = r(0, 8), cevap = m[bos];
    const iz = m.map((x, i) => `<span style="display:flex;align-items:center;justify-content:center;aspect-ratio:1;border:3px solid var(--sinir);border-radius:10px;background:${i === bos ? "#fde68a" : "var(--kart)"}">${i === bos ? "❓" : x}</span>`).join("");
    return secim(`Sihirli kare: Her satırın, sütunun ve köşegenin toplamı ${top}. ❓ yerine hangi sayı gelir?`, String(cevap), [cevap + 1, cevap - 1, cevap + 2, cevap + 3].filter((x) => x > 0).map(String), `Satırdaki diğer iki sayıyı ${top}'ten çıkar: ${cevap}.`, { gorsel: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;max-width:240px;margin:0 auto;font-size:30px;font-weight:900">${iz}</div>` });
  };
  const benG = () => {
    for (let d = 0; d < 60; d++) {
      const x = r(10, N >= 4 ? 99 : 60), on = Math.floor(x / 10), bir = x % 10;
      const ip = [`İki basamaklı bir sayıyım.`, `Rakamlarımın toplamı ${on + bir}.`, x % 2 ? "Tek sayıyım." : "Çift sayıyım.", `Onlar basamağım ${on}.`];
      if (N >= 3) ip[3] = x > 50 ? "50'den büyüğüm." : "50'den küçüğüm.";
      const aday = Array.from({ length: 90 }, (_, i) => i + 10).filter((y) => Math.floor(y / 10) + (y % 10) === on + bir && y % 2 === x % 2 && (N >= 3 ? (y > 50) === (x > 50) : Math.floor(y / 10) === on));
      if (aday.length !== 1) continue;
      const yanlis = Array.from({ length: 90 }, (_, i) => i + 10).filter((y) => y !== x && Math.floor(y / 10) + (y % 10) === on + bir);
      if (yanlis.length < 2) continue;
      return secim("Ben hangi sayıyım? İpuçlarını oku!", String(x), sec(yanlis, 3).map(String), `${x}: rakamları toplamı ${on + bir}, ${x % 2 ? "tek" : "çift"}.`, { gorsel: `<div class="zk-panel" style="font-size:19px;text-align:left">${ip.map((t) => "🔎 " + t).join("<br>")}</div>`, balonYok: true });
    }
    return null;
  };

  // Tek çözümlü 4×4 sudoku: hücreler tek tek boşaltılır, çözüm sayısı 1 kaldığı sürece devam edilir
  const cozumSay = (iz) => { const i = iz.indexOf(null); if (i < 0) return 1; let n = 0; const rr = Math.floor(i / 4), cc = i % 4, kr = Math.floor(rr / 2) * 2, kc = Math.floor(cc / 2) * 2;
    for (let v = 0; v < 4 && n < 2; v++) { let uy = true; for (let j = 0; j < 4 && uy; j++) if (iz[rr * 4 + j] === v || iz[j * 4 + cc] === v || iz[(kr + (j >> 1)) * 4 + kc + (j & 1)] === v) uy = false; if (uy) { iz[i] = v; n += cozumSay(iz); iz[i] = null; } } return n; };
  const sudokuTekG = (hedefBos) => { const g = EKG.sudokuG(0), iz = g.cozum.slice(), bos = [];
    for (const i of karistir([...Array(16).keys()])) { if (bos.length >= hedefBos) break; const eski = iz[i]; iz[i] = null; if (cozumSay(iz.slice()) === 1) bos.push(i); else iz[i] = eski; }
    return Object.assign(g, { bos: bos.sort((a, b) => a - b) }); };

  // ================== Ders ve konular ==================
  const konu = (id, ad, ikon, bilgi, uret, tur) => ({ id, ad, ikon, bilgi, uret, tur });
  const temalar = [
    { id: "zk1", ad: "🧠 Dikkat ve Hafıza", konular: [
      EKG.hafizaG && konu("zk-hafiza", "Hafıza Kartları", "🃏", [["🃏", "Kartları ikişer çevir, aynı resimleri bul."], ["🧠", "Hangi resmin nerede olduğunu aklında tut."]], () => EKG.hafizaG(N + 4), 4),
      konu("zk-dizi", "Sıralı Hafıza", "🔢", [["👀", "Resimler kısa bir süre görünecek."], ["🧠", "Kaybolunca aynı sırayla seç."]], diziG, 6),
      EKG.farkG && konu("zk-fark", "Farkı Bul", "🔍", [["🔍", "İki resim arasındaki tek farkı bul."]], () => EKG.farkG(N + 2, N + 1), 6),
      konu("zk-say", "Kaç Tane Var?", "👀", [["👀", "Karışık resimler arasında istenen resmi say."], ["✍️", "Satır satır saymak hata yapmayı önler."]], sayG)
    ] },
    { id: "zk2", ad: "🔍 Mantık", konular: [
      konu("zk-desen", "Deseni Tamamla", "🔁", [["🔁", "Tekrar eden parçayı bul, sıradakini seç."]], desenG),
      konu("zk-oruntu", "Sayı Örüntüleri", "📈", [["📈", "Sayılar bir kurala göre ilerliyor."], ["🔎", "İki sayı arasındaki farka bak."]], oruntuG),
      konu("zk-farkli", "Hangisi Farklı?", "🤔", [["🤔", "Gruba uymayanı bul ve nedenini düşün."]], farkliG),
      konu("zk-mantik", "Kim Neyi Seçti?", "🕵️", [["🕵️", "İpuçlarını oku, adım adım düşün."], ["✅", "Herkes farklı bir şey seçmiştir."]], mantikG),
      konu("zk-terazi", "Terazi Bulmacası", "⚖️", [["⚖️", "Terazi dengedeyse iki taraf eşit ağırlıktadır."]], teraziG)
    ] },
    { id: "zk3", ad: "🧩 Strateji ve Uzam", konular: [
      konu("zk-kodla", "Robot Kodlama", "🤖", [["🤖", "Okları sırayla seçip robotun programını yaz."], ["🪨", "Kayalardan geçemez, ızgaradan çıkamaz."], ["▶", "Program bitince çalıştır, robotu izle."]], kodlaG, 5),
      EKG.labirentG && konu("zk-labirent", "Labirent", "🌀", [["🌀", "Duvarlardan geçmeden hedefe ulaş."]], () => EKG.labirentG(N + 4), 4),
      konu("zk-hanoi", "Hanoi Kulesi", "🗼", [["🗼", "Diskleri tek tek taşı."], ["⚠️", "Büyük disk küçüğün üstüne konamaz."]], hanoiG, 1),
      konu("zk-kaydir", "Kaydırmalı Bulmaca", "🔲", [["🔲", "Boşluğun yanındaki taşı kaydır."], ["1️⃣", "Sayıları 1'den 8'e sırala."]], kaydirG, 3),
      konu("zk-dondur", "Zihinde Döndür", "🔄", [["🔄", "Oku zihninde döndür. 90° çeyrek dönüştür."]], dondurG),
      EKG.yapbozG && konu("zk-yapboz", "Yapboz", "🧩", [["🧩", "Parçaların yerini değiştirerek resmi tamamla."]], () => EKG.yapbozG(9), 4),
      EKG.sudokuG && konu("zk-sudoku", "Sudoku", "🔢", [["🔢", "Her satırda, sütunda ve 2×2 kutuda her şekil bir kez olur."]], () => sudokuTekG(N + 6), 4)
    ] },
    { id: "zk4", ad: "🔢 Sayı Bulmacaları", konular: [
      konu("zk-sifre", "Şifreli İşlemler", "🔐", [["🔐", "Her resim bir sayının yerini tutuyor."], ["➕", "Bildiğin eşitlikten başla."]], sifreG),
      konu("zk-sihirli", "Sihirli Kare", "✨", [["✨", "Her satır, sütun ve köşegenin toplamı aynı."]], sihirliG),
      konu("zk-ben", "Ben Hangi Sayıyım?", "❓", [["❓", "İpuçlarını tek tek uygula, olmayanları ele."]], benG)
    ] }
  ].map((t) => ({ ...t, konular: t.konular.filter(Boolean) }));

  if (!DERS.zeka) {
    DERS.zeka = { ad: "Zekâ Oyunları", ikon: "🧠", renk: "#8b5cf6", temalar };
    if (Array.isArray(S.dersler) && !S.dersler.includes("zeka")) S.dersler.push("zeka");
  }
})();
