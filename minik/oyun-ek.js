// 🧩 Eğitsel oyun ekleri (Minik ve 1. sınıfta aynı dosya). Khan Academy Kids / Lingokids tarzı etkileşimli oyunlar:
// hafıza kartları, labirent, farkı bul, yapboz, kelime-hece-cümle kurma, balon patlatma, 4×4 sudoku, sayı doğrusu.
// Motoru (oyunlar.js) değiştirmez: OYUN.CIZ'e yeni görev tipleri ekler, DERS'e yeni konular ve "Akıl Oyunları" bölümünü ekler.
(function () {
  if (!window.OYUN || !window.DERS || !window.O) return;
  const C = OYUN.CIZ, esc = OYUN.esc;
  const { pick, sec, karistir, secim, grupla, dy } = O;
  const $ = (h) => { const d = document.createElement("div"); d.innerHTML = h.trim(); return d.firstElementChild; };
  const S = window.SINIF || {}, BIR = S.anahtar === "1sinif", MINIK = !BIR;
  const Y5 = () => BIR || (window.YAS || 5) >= 5;
  const efekt = (t) => { try { APP.efekt(t); } catch (e) {} };
  const okut = (m) => { try { if (S.dokununcaOku && m && !/^\p{Extended_Pictographic}/u.test(m)) APP.konus(m, null, true); } catch (e) {} };
  const konu = (id, ad, ikon, bilgi, uret) => ({ id, ad, ikon, bilgi, uret });
  const em = (o) => (o ? Object.assign(o, { em: true }) : o);
  const buyukHarf = (s) => s.charAt(0).toLocaleUpperCase("tr") + s.slice(1);

  document.head.insertAdjacentHTML("beforeend", `<style>
.oe-izgara{display:grid;gap:8px;margin:8px auto;max-width:560px}
.oe-kart{aspect-ratio:1;border-radius:16px;border:3px solid var(--sinir);background:var(--kart);font-size:clamp(28px,9vw,54px);display:flex;align-items:center;justify-content:center;box-shadow:var(--golge);cursor:pointer;transition:transform .25s;padding:0;font-weight:800;color:var(--yazi)}
.oe-kart.kapali{background:linear-gradient(135deg,#9b5de5,#f15bb5);color:#fff;border-color:transparent}
.oe-kart.tamam{border-color:var(--yesil);background:#e3f8ec;opacity:.85}
.oe-kart.secili{border-color:var(--mavi);transform:translateY(-4px)}
.oe-kart.yanlis{animation:oeSalla .35s}
.oe-kart.yazi{font-size:clamp(16px,4.6vw,24px)}
@keyframes oeSalla{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
.oe-lab{display:grid;margin:8px auto;max-width:440px;border:4px solid #5b4a7a;border-radius:10px;background:#fffdf5;touch-action:manipulation}
.oe-lab div{aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:clamp(18px,7vw,40px);box-sizing:border-box;border:0 solid #5b4a7a}
.oe-yon{display:grid;grid-template-columns:repeat(3,72px);gap:8px;justify-content:center;margin:10px auto}
.oe-yon button{height:64px;font-size:30px;border-radius:16px;border:3px solid var(--sinir);background:var(--kart);box-shadow:var(--golge)}
.oe-iki{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.oe-iki .oe-izgara{margin:4px 0;flex:1;min-width:150px}
.oe-hedef{display:grid;gap:3px;width:120px;margin:0 auto 6px;opacity:.9}
.oe-hedef span{font-size:26px;text-align:center;background:var(--kart);border-radius:6px}
.oe-slot{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;min-height:76px;margin:10px 0;padding:8px;border:3px dashed var(--sinir);border-radius:18px}
.oe-slot button,.oe-havuz button{min-width:58px;min-height:62px;padding:8px 14px;border-radius:14px;border:3px solid var(--sinir);background:var(--kart);font-size:26px;font-weight:800;box-shadow:var(--golge);color:var(--yazi)}
.oe-slot button{border-color:var(--mavi);background:#e5f0ff}
.oe-havuz{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.oe-havuz button[disabled]{opacity:.25}
.oe-balonlar{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;padding:6px 0 16px}
.oe-balon{width:82px;height:100px;border-radius:50% 50% 46% 46%;border:none;color:#fff;font-size:30px;font-weight:900;position:relative;box-shadow:inset -8px -10px 0 rgba(0,0,0,.12);animation:oeYuz 2.4s ease-in-out infinite}
.oe-balon::after{content:"";position:absolute;left:50%;bottom:-16px;width:2px;height:16px;background:#999}
.oe-balon.patladi{animation:oePat .35s forwards}
@keyframes oeYuz{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes oePat{to{transform:scale(1.5);opacity:0}}
.oe-sudoku{grid-template-columns:repeat(4,1fr);max-width:340px}
.oe-sudoku .oe-kart{border-radius:10px;font-size:clamp(24px,8vw,40px)}
.oe-sudoku .sabit{background:#f3ead7;cursor:default}
.oe-sudoku .oe-kart:nth-child(4n+2){margin-right:6px}.oe-sudoku .oe-kart:nth-child(n+5):nth-child(-n+8){margin-bottom:6px}
.oe-secici{display:flex;gap:10px;justify-content:center;margin:12px 0}
.oe-secici button{width:66px;height:66px;font-size:32px;border-radius:16px;border:3px solid var(--sinir);background:var(--kart);box-shadow:var(--golge)}
.oe-dogru{display:flex;justify-content:space-between;align-items:flex-end;margin:28px 4px 8px;position:relative;border-top:5px solid #5b4a7a;padding-top:0}
.oe-dogru button{width:clamp(26px,7.5vw,44px);height:clamp(36px,9vw,50px);margin-top:-5px;border:none;background:none;font-size:clamp(14px,4vw,20px);font-weight:900;color:var(--yazi);border-left:3px solid #5b4a7a;padding:14px 0 0}
.oe-dogru button.isaret{color:#fff;background:var(--mavi);border-radius:0 0 10px 10px}
.oe-kurbaga{font-size:40px;text-align:center}
.oe-golge{font-size:130px;text-align:center;filter:brightness(0);opacity:.85;line-height:1.1}
</style>`);

  // ============ 1) Hafıza kartları ============
  // g.ciftler: [[a, b], ...]  a ile b eşleşir (aynı emoji ya da emoji–kelime)
  C.hafiza = (g, el, bitir) => {
    const kartlar = karistir(g.ciftler.flatMap((c, i) => [[c[0], i], [c[1], i]]));
    const sut = kartlar.length <= 6 ? 3 : kartlar.length <= 8 ? 4 : kartlar.length <= 12 ? 4 : 5;
    const iz = $(`<div class="oe-izgara" style="grid-template-columns:repeat(${sut},1fr)"></div>`);
    let acik = [], kilit = false, hata = 0, kalan = g.ciftler.length;
    kartlar.forEach(([m, i]) => {
      const b = document.createElement("button");
      b.className = "oe-kart kapali" + (/^\p{Extended_Pictographic}/u.test(m) ? "" : " yazi"); b.textContent = "?"; b.dataset.i = i;
      b.onclick = () => {
        if (kilit || !b.classList.contains("kapali")) return;
        b.classList.remove("kapali"); b.textContent = m; okut(m); acik.push(b); efekt("tik");
        if (acik.length < 2) return;
        const [x, y] = acik; acik = [];
        if (x.dataset.i === y.dataset.i) { [x, y].forEach((k) => k.classList.add("tamam")); if (--kalan === 0) setTimeout(() => bitir(hata <= g.ciftler.length * 2, null), 350); }
        else { hata++; kilit = true; setTimeout(() => { [x, y].forEach((k) => { k.classList.add("kapali"); k.textContent = "?"; }); kilit = false; }, 900); }
      };
      iz.appendChild(b);
    });
    el.appendChild(iz);
  };

  // ============ 2) Labirent ============
  // g.n: kenar uzunluğu, g.kim: kahraman, g.hedef: varış. Rastgele, her zaman çözülebilir labirent (derinlik öncelikli arama).
  C.labirent = (g, el, bitir) => {
    const n = g.n || 5, duvar = Array.from({ length: n * n }, () => ({ u: 1, s: 1, a: 1, l: 1 })), gez = new Set([0]), yigin = [0];
    const kom = (i) => { const r = Math.floor(i / n), c = i % n, l = []; if (r > 0) l.push([i - n, "u", "a"]); if (c < n - 1) l.push([i + 1, "s", "l"]); if (r < n - 1) l.push([i + n, "a", "u"]); if (c > 0) l.push([i - 1, "l", "s"]); return l; };
    while (yigin.length) { const i = yigin[yigin.length - 1], ad = karistir(kom(i).filter(([j]) => !gez.has(j))); if (!ad.length) { yigin.pop(); continue; } const [j, a, b] = ad[0]; duvar[i][a] = 0; duvar[j][b] = 0; gez.add(j); yigin.push(j); }
    const hedef = n * n - 1; let poz = 0, adim = 0, carp = 0;
    const lab = $(`<div class="oe-lab" style="grid-template-columns:repeat(${n},1fr)"></div>`);
    duvar.forEach((d, i) => { const h = document.createElement("div"); h.style.borderWidth = `${d.u ? 3 : 0}px ${d.s ? 3 : 0}px ${d.a ? 3 : 0}px ${d.l ? 3 : 0}px`; h.onclick = () => git(i); lab.appendChild(h); });
    const ciz = () => lab.querySelectorAll("div").forEach((h, i) => (h.textContent = i === poz ? g.kim : i === hedef ? g.hedef : ""));
    const git = (j) => {
      if (poz === hedef) return;
      const yol = kom(poz).find(([k]) => k === j);
      if (!yol || duvar[poz][yol[1]]) { carp++; lab.children[poz].animate([{ transform: "scale(1)" }, { transform: "scale(.8)" }, { transform: "scale(1)" }], 200); return; }
      poz = j; adim++; efekt("tik"); ciz();
      if (poz === hedef) setTimeout(() => bitir(true, null), 300);
    };
    const yon = $(`<div class="oe-yon"><span></span><button aria-label="Yukarı">⬆️</button><span></span><button aria-label="Sol">⬅️</button><span></span><button aria-label="Sağ">➡️</button><span></span><button aria-label="Aşağı">⬇️</button><span></span></div>`);
    const [yu, so, sa, as] = yon.querySelectorAll("button");
    yu.onclick = () => poz >= n && git(poz - n); as.onclick = () => poz < n * (n - 1) && git(poz + n);
    so.onclick = () => poz % n > 0 && git(poz - 1); sa.onclick = () => poz % n < n - 1 && git(poz + 1);
    el.appendChild(lab); el.appendChild(yon); ciz();
  };

  // ============ 3) Farkı bul ============
  // g.izgara: emoji dizisi, g.sut: sütun, g.fark: farklı hücre, g.yeni: sağdaki farklı emoji
  C.farkbul = (g, el, bitir) => {
    const k = $(`<div class="oe-iki"></div>`);
    const yap = (sag) => { const iz = $(`<div class="oe-izgara" style="grid-template-columns:repeat(${g.sut},1fr)"></div>`); g.izgara.forEach((m, i) => { const b = document.createElement("button"); b.className = "oe-kart"; b.style.fontSize = "clamp(22px,6vw,40px)"; b.textContent = sag && i === g.fark ? g.yeni : m; b.onclick = () => sec(i, b, iz); iz.appendChild(b); }); return iz; };
    let bitti = false;
    const sec = (i, b, iz) => { if (bitti) return; bitti = true; const ok = i === g.fark; b.classList.add(ok ? "tamam" : "yanlis"); if (!ok) k.querySelectorAll(".oe-izgara").forEach((z) => z.children[g.fark].classList.add("tamam")); bitir(ok, null); };
    k.appendChild(yap(false)); k.appendChild(yap(true)); el.appendChild(k);
  };

  // ============ 4) Yapboz (yer değiştirme) ============
  // g.resim: hedef sıradaki parçalar, g.sut. İki parçaya dokununca yer değiştirir; resim tamamlanınca biter.
  C.yapboz = (g, el, bitir) => {
    const hedef = g.resim, n = hedef.length; let dizi;
    const yerinde = (k) => hedef[dizi[k]] === hedef[k]; // aynı parçadan iki tane olabilir: görünüşe göre karşılaştır
    do { dizi = karistir(hedef.map((_, i) => i)); } while (dizi.every((x, i) => yerinde(i)));
    const ornek = $(`<div><div class="not" style="text-align:center">Bu resmi oluştur:</div><div class="oe-hedef" style="grid-template-columns:repeat(${g.sut},1fr)">${hedef.map((m) => `<span>${m}</span>`).join("")}</div></div>`);
    const iz = $(`<div class="oe-izgara" style="grid-template-columns:repeat(${g.sut},1fr);max-width:${g.sut * 110}px"></div>`);
    let secili = null, hamle = 0;
    const ciz = () => { iz.innerHTML = ""; dizi.forEach((p, i) => { const b = document.createElement("button"); b.className = "oe-kart" + (yerinde(i) ? " tamam" : "") + (secili === i ? " secili" : ""); b.textContent = hedef[p]; b.onclick = () => dokun(i); iz.appendChild(b); }); };
    const dokun = (i) => {
      if (secili === null) { secili = i; return ciz(); }
      if (secili !== i) { [dizi[secili], dizi[i]] = [dizi[i], dizi[secili]]; hamle++; efekt("tik"); }
      secili = null; ciz();
      if (dizi.every((x, k) => yerinde(k))) setTimeout(() => bitir(hamle <= n + 2, null), 300);
    };
    el.appendChild(ornek); el.appendChild(iz); ciz();
  };

  // ============ 5) Parçalardan kur: hece → kelime, harf → kelime, kelime → cümle ============
  // g.parcalar: doğru sıradaki parçalar, g.fazla: şaşırtıcı parçalar, g.ayrac: "" ya da " "
  C.kur = (g, el, bitir) => {
    const havuzP = karistir([...g.parcalar, ...(g.fazla || [])].map((m, i) => ({ m, i })));
    const slot = $(`<div class="oe-slot"></div>`), havuz = $(`<div class="oe-havuz"></div>`); const secilen = []; let hata = 0;
    const ciz = () => {
      slot.innerHTML = secilen.length ? "" : '<span class="not" style="align-self:center">Parçalara sırayla dokun</span>';
      secilen.forEach((p, k) => { const b = document.createElement("button"); b.textContent = p.m; b.onclick = () => { secilen.splice(k, 1); ciz(); }; slot.appendChild(b); });
      havuz.innerHTML = ""; havuzP.forEach((p) => { const b = document.createElement("button"); b.textContent = p.m; b.disabled = secilen.includes(p); b.onclick = () => { okut(p.m); secilen.push(p); efekt("tik"); ciz(); kontrol(); }; havuz.appendChild(b); });
    };
    const kontrol = () => {
      if (secilen.length !== g.parcalar.length) return;
      const ok = secilen.map((p) => p.m).join("|") === g.parcalar.join("|");
      if (ok) return setTimeout(() => bitir(hata === 0, g.parcalar.join(g.ayrac ?? "")), 250);
      hata++; slot.animate([{ transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }], 300);
      if (hata >= 2) return setTimeout(() => bitir(false, g.parcalar.join(g.ayrac ?? "")), 400);
      setTimeout(() => { secilen.length = 0; ciz(); }, 450);
    };
    el.appendChild(slot); el.appendChild(havuz); ciz();
  };

  // ============ 6) Balon patlat ============
  // g.balonlar: [{ m, d }]  d=true olanlar patlatılmalı
  const RENK = ["#ef476f", "#3d8bff", "#2bb673", "#ff8a00", "#9b5de5", "#f15bb5", "#00b4d8"];
  C.balon = (g, el, bitir) => {
    const k = $(`<div class="oe-balonlar"></div>`); let kalan = g.balonlar.filter((b) => b.d).length, hata = 0, bitti = false;
    karistir(g.balonlar).forEach((bl, i) => {
      const b = document.createElement("button"); b.className = "oe-balon"; b.textContent = bl.m;
      b.style.background = bl.renk || RENK[(i * 3) % RENK.length]; b.style.animationDelay = (i * 0.17) + "s";
      if (/^\p{Extended_Pictographic}/u.test(bl.m)) b.style.fontSize = "38px";
      b.onclick = () => {
        if (bitti || b.classList.contains("patladi")) return;
        if (bl.d) { b.classList.add("patladi"); efekt("tik"); if (--kalan === 0) { bitti = true; setTimeout(() => bitir(hata <= 1, null), 350); } }
        else { hata++; efekt("yanlis"); b.animate([{ transform: "rotate(-12deg)" }, { transform: "rotate(12deg)" }, { transform: "rotate(0)" }], 300); if (hata >= 3) { bitti = true; bitir(false, g.ipucu || null); } }
      };
      k.appendChild(b);
    });
    el.appendChild(k);
  };

  // ============ 7) 4×4 Sudoku ============
  // g.sembol: 4 sembol, g.cozum: 16 indeks (0-3), g.bos: boş hücreler
  C.sudoku = (g, el, bitir) => {
    const deger = g.cozum.map((v, i) => (g.bos.includes(i) ? null : v)); let secili = g.bos[0], hata = 0;
    const iz = $(`<div class="oe-izgara oe-sudoku"></div>`), secici = $(`<div class="oe-secici">${g.sembol.map((s, i) => `<button data-v="${i}">${s}</button>`).join("")}</div>`);
    const ciz = () => { iz.innerHTML = ""; deger.forEach((v, i) => { const b = document.createElement("button"); const sabit = !g.bos.includes(i); b.className = "oe-kart" + (sabit ? " sabit" : "") + (i === secili ? " secili" : ""); b.textContent = v === null ? "" : g.sembol[v]; if (!sabit) b.onclick = () => { secili = i; ciz(); }; iz.appendChild(b); }); };
    secici.querySelectorAll("button").forEach((b) => (b.onclick = () => {
      if (secili == null) return; deger[secili] = +b.dataset.v; efekt("tik");
      const sonraki = g.bos.find((i) => deger[i] === null); secili = sonraki ?? secili; ciz();
      if (g.bos.every((i) => deger[i] !== null)) {
        const yanlis = g.bos.filter((i) => deger[i] !== g.cozum[i]);
        if (!yanlis.length) return setTimeout(() => bitir(hata === 0, null), 300);
        hata++; yanlis.forEach((i) => iz.children[i].classList.add("yanlis"));
        if (hata >= 2) return setTimeout(() => { g.bos.forEach((i) => (deger[i] = g.cozum[i])); ciz(); bitir(false, "Doğru çözüm gösterildi"); }, 600);
        setTimeout(() => { yanlis.forEach((i) => (deger[i] = null)); secili = yanlis[0]; ciz(); }, 700);
      }
    }));
    el.appendChild($(`<div class="not" style="text-align:center">Her satırda, her sütunda ve her 2×2 kutuda her şekil yalnızca bir kez olmalı.</div>`));
    el.appendChild(iz); el.appendChild(secici); ciz();
  };

  // ============ 8) Sayı doğrusu ============
  // g.bas, g.fark (+/-), g.max: kurbağa bas'tan fark kadar zıplar; varış noktasına dokun
  C.dogru = (g, el, bitir) => {
    const hedef = g.bas + g.fark, k = $(`<div><div class="oe-kurbaga">🐸 ${g.fark > 0 ? "➡️".repeat(Math.min(3, Math.ceil(g.fark / 3))) : "⬅️".repeat(Math.min(3, Math.ceil(-g.fark / 3)))}</div><div class="oe-dogru"></div></div>`), cizgi = k.querySelector(".oe-dogru"); let bitti = false;
    for (let i = 0; i <= g.max; i++) { const b = document.createElement("button"); b.textContent = i; if (i === g.bas) b.classList.add("isaret"); b.onclick = () => { if (bitti) return; bitti = true; const ok = i === hedef; b.style.background = ok ? "var(--yesil)" : "var(--kirmizi)"; b.style.color = "#fff"; if (!ok) cizgi.children[hedef].style.background = "var(--yesil)"; bitir(ok, String(hedef)); }; cizgi.appendChild(b); }
    el.appendChild(k);
  };

  // ============ Görev üreticileri ============
  const HAYVAN = ["🐶", "🐱", "🐰", "🐻", "🦁", "🐸", "🐵", "🐔", "🐷", "🐮", "🦊", "🐼", "🐧", "🐢", "🐘", "🦒"];
  const MEYVE = ["🍎", "🍌", "🍇", "🍓", "🍐", "🍊", "🍉", "🍒", "🥕", "🍅", "🥝", "🍋"];
  const TASIT = ["🚗", "🚌", "🚲", "✈️", "🚂", "🚀", "🚁", "⛵", "🚒", "🚑", "🛵", "🚜"];
  const ESYA = ["⚽", "🎈", "🧸", "🪁", "🎨", "📚", "✏️", "🎁", "🕰️", "☂️", "🔑", "🎒"];
  const SETLER = [HAYVAN, MEYVE, TASIT, ESYA];
  const hafizaG = (cift, set) => ({ tip: "hafiza", soru: "Kartları çevir, aynı resimleri bul!", ciftler: sec(set || pick(SETLER), cift).map((e) => [e, e]), cozum: "" });
  const LAB = [["🐰", "🥕", "Tavşanı havuca ulaştır!"], ["🐭", "🧀", "Fareyi peynire götür!"], ["🐝", "🌸", "Arıyı çiçeğe ulaştır!"], ["🐶", "🦴", "Köpeği kemiğe götür!"], ["🚗", "🏠", "Arabayı eve götür!"], ["🐟", "🪸", "Balığı yuvasına ulaştır!"], ["🐻", "🍯", "Ayıyı bala götür!"]];
  const labirentG = (n) => { const [kim, hedef, soru] = pick(LAB); return { tip: "labirent", soru: soru + " Oklara ya da yandaki kareye dokun.", okunacak: soru, kim, hedef, n, cozum: "" }; };
  const farkG = (sut, satir) => { const set = pick(SETLER), iz = Array.from({ length: sut * satir }, () => pick(set)), fark = Math.floor(Math.random() * iz.length); const yeni = pick(set.filter((x) => x !== iz[fark])); return { tip: "farkbul", soru: "İki resim arasındaki farkı bul! Sağdaki resimde farklı olana dokun.", okunacak: "İki resim arasındaki farkı bul!", izgara: iz, sut, fark, yeni, cozum: "" }; };
  const SAHNE = [["☀️", "☁️", "🌈", "🌳", "🏠", "🌳", "🌷", "🐶", "🌷"], ["🌙", "⭐", "✨", "🏔️", "🏕️", "🌲", "🦉", "🔥", "🦊"], ["🐦", "☁️", "☀️", "🌴", "⛵", "🌴", "🐚", "🦀", "🐠"], ["🎈", "🎉", "🎈", "🎂", "🎁", "🍰", "🧒", "🥳", "👧"], ["🍎", "🍐", "🍊", "🥕", "🥦", "🌽", "🧀", "🥛", "🍞"]];
  const yapbozG = (n) => { const s = pick(SAHNE); const resim = n === 4 ? [s[0], s[1], s[3], s[4]] : n === 6 ? s.slice(0, 6) : s; return { tip: "yapboz", soru: "Parçaların yerini değiştir, resmi tamamla! İki parçaya sırayla dokun.", okunacak: "Parçaların yerini değiştir, resmi tamamla!", resim, sut: n === 4 ? 2 : 3, cozum: "" }; };
  const GOLGE = [...HAYVAN, "🦋", "🐌", "🦀", "🐳", "🦕", "🌵", "🎸", "🚲", "✂️", "☂️", "🔑", "🍐"];
  const golgeG = () => { const d = pick(GOLGE); return em(secim("Bu gölge kimin? Bul bakalım!", d, sec(GOLGE.filter((x) => x !== d), 5), `Gölge: ${d}`, { gorsel: `<div class="oe-golge">${d}</div>` })); };
  const DESEN = [["🔴", "🔵"], ["🍎", "🍌"], ["⭐", "🌙"], ["🐱", "🐶"], ["🟩", "🟨"], ["🎈", "🎁"]];
  const desenG = () => {
    const [a, b] = pick(DESEN), c = pick(["🟣", "🍇", "☀️", "🐰", "🟥", "⚽"].filter((x) => x !== a && x !== b));
    const kal = Y5() ? pick([[a, b], [a, a, b], [a, b, b], [a, b, c]]) : [a, b];
    const dizi = []; while (dizi.length < kal.length * 2 + 1) dizi.push(kal[dizi.length % kal.length]);
    const cevap = kal[dizi.length % kal.length];
    return em(secim("Sırada hangisi var? Deseni tamamla!", cevap, [a, b, c].filter((x) => x !== cevap).concat(["🟠", "🐢"]), `Desen: ${kal.join(" ")} tekrar ediyor`, { gorsel: `<div style="font-size:clamp(28px,8vw,52px);text-align:center;letter-spacing:4px">${dizi.join("")}❓</div>` }));
  };
  const FARKLI = [[HAYVAN, MEYVE], [MEYVE, TASIT], [TASIT, HAYVAN], [ESYA, MEYVE]];
  const farkliG = () => { const [a, b] = pick(FARKLI), dort = sec(a, 3), d = pick(b); return em(secim("Hangisi diğerlerinden farklı?", d, dort, `${d} diğerleriyle aynı gruptan değil`, { gorsel: `<div style="font-size:52px;text-align:center;letter-spacing:6px">${karistir([...dort, d]).join(" ")}</div>` })); };

  // ---- Duygular, değerler, güvenlik, sağlık ----
  const DUYGU = [["😀", "mutlu"], ["😢", "üzgün"], ["😠", "kızgın"], ["😨", "korkmuş"], ["😮", "şaşkın"], ["😴", "uykulu"], ["🥰", "sevgi dolu"], ["😳", "utanmış"]];
  const duyguG = () => { const d = pick(DUYGU.slice(0, Y5() ? 8 : 5)); return em(secim(`Hangi yüz ${d[1]}?`, d[0], sec(DUYGU.filter((x) => x !== d), 5).map((x) => x[0]), `${d[0]} ${d[1]}`)); };
  const DURUM = [["Arkadaşın doğum gününe seni de çağırdı.", "😀"], ["Dondurman yere düştü.", "😢"], ["Biri sırana izinsiz oturdu ve kalkmıyor.", "😠"], ["Gece gök gürledi, çok ses çıktı.", "😨"], ["Kapıyı açtın, bütün ailen sana sürpriz yaptı!", "😮"], ["Gece çok geç yattın, sabah erken kalktın.", "😴"], ["Ninen sana sarıldı ve seni öptü.", "🥰"], ["Resmini bütün sınıfın önünde gösterdin.", "😳"]];
  const nasilG = () => { const d = pick(DURUM); const ad = DUYGU.find((x) => x[0] === d[1])[1]; return em(secim(`${d[0]} Nasıl hissedersin?`, d[1], DUYGU.filter((x) => x[0] !== d[1]).map((x) => x[0]), `Böyle bir durumda insan ${ad} hisseder. Bütün duygular normaldir; onları söylemek iyi gelir.`)); };
  const DEGER = [
    ["Arkadaşın düştü ve dizini acıttı. Ne yaparsın?", "Yardım eder, bir büyüğe haber veririm", ["Gülerim", "Oyuna devam ederim"]],
    ["Yanlışlıkla arkadaşının kalemini kırdın. Ne dersin?", "Özür dilerim", ["Ben yapmadım", "Hiçbir şey demem"]],
    ["Parkta biri sırayla kaydıraktan kayıyor. Ne yaparsın?", "Sıramı beklerim", ["Öne geçerim", "İterim"]],
    ["Yeni gelen bir çocuk yalnız oturuyor. Ne yaparsın?", "Onu oyuna çağırırım", ["Onunla konuşmam", "Ondan uzak dururum"]],
    ["Sofrada yemeğini bitirdin. Ne dersin?", "Elinize sağlık", ["Hiçbir şey demem", "Doymadım derim"]],
    ["Annen çok yorulmuş, sofrayı kuruyor. Ne yaparsın?", "Yardım ederim", ["Televizyon izlerim", "Odama giderim"]],
    ["Oyunda kaybettin. Ne yaparsın?", "Kazananı tebrik ederim", ["Ağlayıp bağırırım", "Oyuncakları atarım"]]
  ];
  const degerG = () => { const d = pick(DEGER); return secim(d[0], d[1], d[2], `Doğrusu: ${d[1]}.`); };
  const GUVEN = [
    ["Tanımadığın biri sana şeker verip 'Benimle gel' dedi. Ne yaparsın?", "Gitmem, hemen bir büyüğüme söylerim", ["Şekeri alıp giderim", "Kimseye söylemem"]],
    ["Parkta annemi göremiyorum, kayboldum. Ne yaparsın?", "Olduğum yerde kalır, bir görevliden yardım isterim", ["Tek başıma eve yürürüm", "Bir arabaya binerim"]],
    ["Ocakta yemek pişiyor. Ne yaparsın?", "Ocağa yaklaşmam", ["Tencereyi tutarım", "Düğmeleri çeviririm"]],
    ["Yerde ilaç buldun. Ne yaparsın?", "Ağzıma koymam, büyüğe veririm", ["Şeker sanıp yerim", "Arkadaşıma veririm"]],
    ["Prizde boş bir delik gördün. Ne yaparsın?", "Hiçbir şey sokmam", ["Kalemi sokarım", "Parmağımı sokarım"]]
  ];
  const guvenG = () => { const d = pick(GUVEN); return secim(d[0], d[1], d[2], `Güvenlik kuralı: ${d[1]}.`); };
  const TRAFIK = [
    ["Karşıdan karşıya nereden geçeriz?", "Yaya geçidinden", ["Arabaların arasından", "Köşeden koşarak"]],
    ["Yaya ışığı kırmızı yanıyor. Ne yaparız?", "Bekleriz", ["Koşarak geçeriz", "Yürürüz"]],
    ["Arabada nereye otururuz?", "Arka koltukta, kemerimiz takılı", ["Ön koltukta ayakta", "Kucakta, kemersiz"]],
    ["Bisiklete binerken ne takarız?", "Kask", ["Şapka", "Güneş gözlüğü"]],
    ["Karşıya geçmeden önce ne yaparız?", "Önce sola, sonra sağa, sonra yine sola bakarız", ["Hiç bakmadan geçeriz", "Telefona bakarız"]],
    ["Okul servisinden inince ne yaparız?", "Servis gidene kadar kaldırımda bekleriz", ["Servisin önünden koşarız", "Yola fırlarız"]]
  ];
  const trafikG = () => { const d = pick(TRAFIK); return secim(d[0], d[1], d[2], `Trafik kuralı: ${d[1]}.`); };
  const SAGLIKLI = ["🍎", "🥕", "🥛", "🥦", "🍌", "🐟", "🥚", "🍞", "🧀", "🍊"], AZ = ["🍬", "🍭", "🍩", "🥤", "🍟", "🍫", "🧁", "🍪"];
  const tabakG = () => grupla("Sağlıklı tabağı hazırla! Her yiyeceği doğru gruba koy.", ["💪 Her gün yiyelim", "🍬 Arada bir, az"], karistir([...sec(SAGLIKLI, 3).map((m) => [m, 0]), ...sec(AZ, 3).map((m) => [m, 1])]), "Meyve, sebze, süt, yumurta ve balık bizi güçlü yapar. Şekerli yiyecekleri az yeriz.");
  const MEVSIM = [["❄️ Kışın", "🧤", ["🩳", "🕶️", "👙"]], ["❄️ Kışın", "🧣", ["🩴", "👙", "🩳"]], ["☀️ Yazın", "🕶️", ["🧤", "🧣", "🥾"]], ["☀️ Yazın", "🩳", ["🧥", "🧤", "🧣"]], ["🌧️ Yağmurda", "☂️", ["🕶️", "🩴", "👙"]], ["🌧️ Yağmurda", "🥾", ["🩴", "👙", "🩳"]]];
  const mevsimG = () => { const d = pick(MEVSIM); return em(secim(`${d[0]} hangisini giyeriz ya da kullanırız?`, d[1], d[2], `${d[0]} ${d[1]}`)); };

  // ---- Sayı oyunları ----
  const SAYI_AD = ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz", "on"];
  const balonRenkG = () => {
    const R = [["kırmızı", "#ef476f"], ["mavi", "#3d8bff"], ["yeşil", "#2bb673"], ["sarı", "#f2b705"], ["mor", "#9b5de5"]];
    const h = pick(R), n = 2 + Math.floor(Math.random() * 3), b = [];
    for (let i = 0; i < n; i++) b.push({ m: "", d: true, renk: h[1] });
    while (b.length < n + 4) b.push({ m: "", d: false, renk: pick(R.filter((x) => x !== h))[1] });
    return { tip: "balon", soru: `Bütün ${h[0]} balonları patlat!`, balonlar: b, cozum: "" };
  };
  const balonSayiG = () => { const n = 1 + Math.floor(Math.random() * (Y5() ? 9 : 5)); const b = [{ m: String(n), d: true }, { m: String(n), d: true }]; while (b.length < 7) { const x = Math.floor(Math.random() * 10); if (x !== n) b.push({ m: String(x), d: false }); } return { tip: "balon", soru: `Üzerinde ${n} (${SAYI_AD[n]}) yazan balonları patlat!`, balonlar: b, cozum: "" }; };
  const sayiHafizaG = () => { const ns = sec([1, 2, 3, 4, 5, 6, 7, 8, 9].filter((x) => x <= (Y5() ? 9 : 5)), Y5() ? 4 : 3); const e = pick(["🍎", "⭐", "🐞", "🎈"]); return { tip: "hafiza", soru: "Sayıyı, o kadar nesnenin olduğu kartla eşleştir!", ciftler: ns.map((n) => [String(n), e.repeat(n)]), cozum: "" }; };

  // ---- Harf, hece, kelime, cümle (1. sınıf; Minik'te heceler) ----
  const HECELER = [["🍎", ["el", "ma"]], ["🐱", ["ke", "di"]], ["🐶", ["kö", "pek"]], ["🐟", ["ba", "lık"]], ["🐰", ["tav", "şan"]], ["🐻", ["a", "yı"]], ["🦁", ["as", "lan"]], ["🚗", ["a", "ra", "ba"]], ["🍌", ["mu", "z"]], ["🏠", ["ev"]], ["🌳", ["a", "ğaç"]], ["☂️", ["şem", "si", "ye"]], ["🍓", ["çi", "lek"]], ["🥕", ["ha", "vuç"]], ["🐢", ["kap", "lum", "ba", "ğa"]], ["🦋", ["ke", "le", "bek"]], ["🍅", ["do", "ma", "tes"]], ["📚", ["ki", "tap"]], ["🎈", ["ba", "lon"]], ["🧸", ["ay", "ı", "cık"]]].filter((x) => x[1].join("").length > 2 && x[0] !== "🍌" && x[0] !== "🧸");
  const HAZIR_HECE = ["ka", "le", "mi", "to", "su", "ne", "ri", "pa", "lo", "tu"];
  const heceG = () => { const [e, h] = pick(HECELER.filter((x) => x[1].length <= (MINIK && !Y5() ? 2 : 4) && x[1].length >= 2)); return { tip: "kur", soru: `Heceleri birleştir: ${e} kelimesini kur!`, okunacak: "Heceleri sırayla birleştir, resimdeki kelimeyi kur!", gorsel: `<div style="font-size:90px;text-align:center">${e}</div>`, parcalar: h, fazla: sec(HAZIR_HECE.filter((x) => !h.includes(x)), MINIK ? 1 : 2), ayrac: "", cozum: h.join("-") }; };
  const KELIME1 = [["🍎", "elma"], ["🐱", "kedi"], ["🏠", "ev"], ["🐟", "balık"], ["🌙", "ay"], ["🍞", "ekmek"], ["⭐", "yıldız"], ["🎈", "balon"], ["🥛", "süt"], ["🐝", "arı"], ["🌳", "ağaç"], ["🔑", "anahtar"], ["📚", "kitap"], ["🧀", "peynir"], ["🍋", "limon"], ["🐄", "inek"], ["🦆", "ördek"], ["🌷", "lale"]];
  const kelimeG = () => { const [e, w] = pick(KELIME1.filter((x) => x[1].length <= 6)); const harf = [...w]; const fazla = sec([..."aeiklmnorstuy"].filter((x) => !harf.includes(x)), 2); return { tip: "kur", soru: `Harfleri sırayla seç: ${e} kelimesini yaz!`, okunacak: "Harfleri sırayla seçerek resimdeki kelimeyi yaz!", gorsel: `<div style="font-size:90px;text-align:center">${e}</div>`, parcalar: harf, fazla, ayrac: "", cozum: w }; };
  const CUMLE = [["Ali", "topu", "attı."], ["Ela", "süt", "içti."], ["Kedi", "fareyi", "gördü."], ["Annem", "kek", "yaptı."], ["Biz", "parkta", "oynadık."], ["Babam", "kitap", "okudu."], ["Ayşe", "okula", "gitti."], ["Kuşlar", "ağaçta", "ötüyor."], ["Ben", "elma", "yedim."], ["Murat", "resim", "yaptı."]];
  const cumleG = () => { const c = pick(CUMLE); return { tip: "kur", soru: "Kelimeleri sıraya koy, anlamlı bir cümle kur!", parcalar: c, fazla: [pick(["mavi", "uçtu", "kalem", "hızlı"])], ayrac: " ", cozum: c.join(" ") }; };
  const HARFLER = [..."aeıioöuübcçdfgğhjklmnprsştvyz"];
  const harfAviG = () => { const h = pick(HARFLER.filter((x) => !"ğjı".includes(x))), b = []; const ad = Math.random() < 0.5; b.push({ m: h, d: true }, { m: ad ? h.toLocaleUpperCase("tr") : h, d: true }, { m: h, d: true }); while (b.length < 8) { const x = pick(HARFLER); if (x !== h) b.push({ m: Math.random() < 0.3 ? x.toLocaleUpperCase("tr") : x, d: false }); } return { tip: "balon", soru: `"${h.toLocaleUpperCase("tr")} ${h}" harfi olan bütün balonları patlat!`, okunacak: `${h} harfi olan bütün balonları patlat!`, balonlar: b, ipucu: `${h.toLocaleUpperCase("tr")} ${h}`, cozum: "" }; };
  const resimKelimeHafizaG = () => ({ tip: "hafiza", soru: "Resmi, onun adının yazdığı kartla eşleştir!", ciftler: sec(KELIME1, 4).map(([e, w]) => [e, w]), cozum: "" });

  // ---- 1. sınıf matematik oyunları ----
  const toplamBalonG = () => { const t = 4 + Math.floor(Math.random() * 13); const b = []; const ciftler = []; for (let a = 0; a <= t; a++) if (a <= 10 && t - a <= 10) ciftler.push(`${a}+${t - a}`); sec(ciftler, 3).forEach((m) => b.push({ m, d: true })); while (b.length < 8) { const a = Math.floor(Math.random() * 10), c = Math.floor(Math.random() * 10); if (a + c !== t) b.push({ m: `${a}+${c}`, d: false }); } return { tip: "balon", soru: `Sonucu ${t} olan balonları patlat!`, balonlar: b, ipucu: `Toplamı ${t} olanlar`, cozum: "" }; };
  const cikarmaBalonG = () => { const t = Math.floor(Math.random() * 9); const b = []; const ad = []; for (let a = t; a <= 18; a++) if (a - t <= 9) ad.push(`${a}-${a - t}`); sec(ad, 3).forEach((m) => b.push({ m, d: true })); while (b.length < 8) { const a = 3 + Math.floor(Math.random() * 15), c = Math.floor(Math.random() * Math.min(a, 9)); if (a - c !== t) b.push({ m: `${a}-${c}`, d: false }); } return { tip: "balon", soru: `Sonucu ${t} olan balonları patlat!`, balonlar: b, ipucu: `Farkı ${t} olanlar`, cozum: "" }; };
  const dogruG = () => { const max = 20, fark = (Math.random() < 0.6 ? 1 : -1) * (1 + Math.floor(Math.random() * 6)); const bas = fark > 0 ? Math.floor(Math.random() * (max - fark)) : -fark + Math.floor(Math.random() * (max + fark)); return { tip: "dogru", soru: `Kurbağa ${bas} sayısında. ${Math.abs(fark)} adım ${fark > 0 ? "ileri" : "geri"} zıplarsa hangi sayıya gelir? O sayıya dokun.`, bas, fark, max, cozum: `${bas} ${fark > 0 ? "+" : "-"} ${Math.abs(fark)} = ${bas + fark}` }; };
  // 4×4 sudoku: geçerli bir çözümü karıştırarak üret
  const sudokuG = (bosSay) => {
    const taban = [0, 1, 2, 3, 2, 3, 0, 1, 1, 0, 3, 2, 3, 2, 1, 0];
    const p = karistir([0, 1, 2, 3]); let c = taban.map((v) => p[v]);
    if (Math.random() < 0.5) c = [0, 1, 2, 3].flatMap((r) => [0, 1, 2, 3].map((k) => c[k * 4 + r])); // devrik
    const sembol = pick([["🍎", "🍌", "🍇", "🍊"], ["🐶", "🐱", "🐰", "🐻"], ["1", "2", "3", "4"], ["🔴", "🔵", "🟢", "🟡"], ["⭐", "🌙", "☀️", "☁️"]]);
    return { tip: "sudoku", soru: "Boş kutulara doğru şekli yerleştir! Önce kutuya, sonra aşağıdaki şekle dokun.", okunacak: "Boş kutulara doğru şekli yerleştir!", sembol, cozum: c, bos: sec([...Array(16).keys()], bosSay).sort((a, b) => a - b) };
  };

  // ============ İngilizce hafıza (Minik) ============
  const EN = [["🐱", "cat"], ["🐶", "dog"], ["🍎", "apple"], ["🚗", "car"], ["☀️", "sun"], ["🐟", "fish"], ["🏠", "house"], ["⚽", "ball"], ["📚", "book"], ["🌳", "tree"], ["🐦", "bird"], ["🥛", "milk"]];
  const enHafizaG = () => ({ tip: "hafiza", soru: "Resmi İngilizce adıyla eşleştir! Match the picture and the word.", ciftler: sec(EN, Y5() ? 4 : 3), cozum: "" });

  // 2–4. sınıflar bu dosyayı yalnızca oyun motoru ve üreteçler için yükler (zeka-oyunlari.js kullanır); ders eklemesi yapılmaz
  window.OYUN_EK = { hafizaG, labirentG, farkG, yapbozG, golgeG, desenG, farkliG, sudokuG, kelimeG, heceG, SETLER };
  if ((S.no || 0) >= 2) return;

  // ============ DERS'e ekle ============
  const tema = (id, ad, konular) => ({ id, ad, konular });
  const ekleDers = (key, ders) => { if (!DERS[key]) { DERS[key] = ders; if (Array.isArray(S.dersler) && !S.dersler.includes(key)) S.dersler.push(key); } };
  const ekleTema = (key, t) => { if (DERS[key] && !DERS[key].temalar.some((x) => x.id === t.id)) DERS[key].temalar.push(t); };

  if (MINIK) {
    ekleDers("akil", { ad: "Akıl Oyunları", ikon: "🧩", renk: "#f15bb5", temalar: [tema("ak1", "Akıl Oyunları", [
      konu("ak-hafiza", "Hafıza Kartları", "🃏", [["🃏", "Kartları ikişer ikişer çevir. Aynı resimleri bulursan açık kalırlar."], ["🧠", "Hangi resmin nerede olduğunu aklında tut!"]], () => hafizaG(Y5() ? 4 : 3)),
      konu("ak-labirent", "Labirent", "🌀", [["🌀", "Duvarlardan geçemezsin. Doğru yolu bul!"], ["⬆️", "Oklara ya da gitmek istediğin kareye dokun."]], () => labirentG(Y5() ? 5 : 4)),
      konu("ak-fark", "Farkı Bul", "🔍", [["🔍", "İki resme dikkatle bak. Sağdaki resimde bir şey farklı!"]], () => farkG(Y5() ? 3 : 2, Y5() ? 3 : 2)),
      konu("ak-yapboz", "Yapboz", "🧩", [["🧩", "Parçaların yerini değiştirerek resmi tamamla."], ["👆", "Önce bir parçaya, sonra gideceği yere dokun."]], () => yapbozG(Y5() ? 6 : 4)),
      konu("ak-golge", "Gölge Eşleştir", "👤", [["👤", "Siyah gölgenin şekline bak. Kime ait olduğunu bul!"]], golgeG),
      konu("ak-desen", "Deseni Tamamla", "🔁", [["🔁", "Resimler bir düzenle tekrar ediyor. Sırada hangisi var?"], ["🔴", "🔴🔵🔴🔵 → sırada 🔴 var!"]], desenG),
      konu("ak-farkli", "Hangisi Farklı?", "🤔", [["🤔", "Hepsi aynı gruptan, biri değil! Onu bul."]], farkliG),
      konu("ak-sudoku", "Minik Sudoku", "🔢", [["🔢", "Her satırda ve her sütunda her şekil bir kez olur."]], () => Object.assign(sudokuG(Y5() ? 4 : 3), { soru: "Boş kutuya hangi şekil gelir? Önce kutuya, sonra şekle dokun." }))
    ])] });
    ekleTema("cevre", tema("ce-duygu", "Duygular ve Güvenliğim", [
      konu("ce-duygu1", "Duyguları Tanı", "😀", [["😀", "Mutlu"], ["😢", "Üzgün"], ["😠", "Kızgın"], ["😨", "Korkmuş"], ["💬", "Bütün duygular normaldir. Duygularımızı söylemek iyi gelir."]], duyguG),
      konu("ce-duygu2", "Nasıl Hissederdin?", "💭", [["💭", "Bir olayı dinle. Böyle bir durumda nasıl hissederdin?"]], nasilG),
      konu("ce-deger", "Ne Yapmalıyım?", "🤝", [["🤝", "Yardımlaşmak, sıra beklemek ve özür dilemek güzel davranışlardır."]], degerG),
      konu("ce-guven", "Güvenliğim", "🛡️", [["🛡️", "Tanımadığımız kişilerle bir yere gitmeyiz."], ["👮", "Kaybolursak olduğumuz yerde kalır, görevliden yardım isteriz."]], guvenG),
      konu("ce-tabak", "Sağlıklı Tabak", "🥗", [["🥕", "Meyve ve sebze bizi güçlü yapar."], ["🍬", "Şekerli yiyecekleri az yeriz."]], tabakG),
      konu("ce-mevsim", "Mevsime Göre Giyin", "🧥", [["❄️", "Kışın eldiven, bere ve atkı takarız."], ["☀️", "Yazın şapka ve güneş gözlüğü kullanırız."]], mevsimG)
    ]));
    ekleTema("sayi", tema("sy-oyun", "Sayı Oyunları", [
      konu("sy-balonrenk", "Renkli Balonlar", "🎈", [["🎈", "Söylediğim renkteki balonların hepsini patlat!"]], balonRenkG),
      konu("sy-balonsayi", "Sayı Balonları", "🔢", [["🔢", "Üzerinde söylediğim sayı yazan balonları bul ve patlat!"]], balonSayiG),
      konu("sy-hafiza", "Sayı Hafızası", "🃏", [["🃏", "Rakamı, o kadar nesne olan kartla eşleştir."]], sayiHafizaG)
    ]));
    ekleTema("dil", tema("dl-hece", "Hece Treni", [
      konu("dl-hece1", "Hece Treni", "🚂", [["🚂", "Heceleri vagon gibi sırayla birleştir, kelime olsun!"], ["🍎", "el + ma = elma"]], heceG)
    ]));
    ekleTema("ingilizce", tema("en-oyun", "English Games", [
      konu("en-hafiza", "Memory Game", "🃏", [["🐱", "cat"], ["🐶", "dog"], ["🍎", "apple"]], enHafizaG)
    ]));
  } else {
    ekleTema("turkce", tema("tr-atolye", "Harf ve Hece Atölyesi", [
      konu("tr-harfavi", "Harf Avı", "🎈", [["🎈", "Söylenen harfi bul: büyük ya da küçük yazılmış olabilir."], ["🅰️", "A ve a aynı harftir."]], harfAviG),
      konu("tr-hece", "Hece Birleştir", "🚂", [["🚂", "Heceleri sırayla birleştir, kelime olsun."], ["🐱", "ke + di = kedi"]], heceG),
      konu("tr-kelime", "Kelime Kur", "🔤", [["🔤", "Harfleri sırayla seçerek kelimeyi yaz."], ["🍎", "e - l - m - a = elma"]], kelimeG),
      konu("tr-cumle", "Cümle Kur", "💬", [["💬", "Kelimeleri doğru sıraya koyunca anlamlı bir cümle olur."], ["⚽", "Ali topu attı."]], cumleG),
      konu("tr-hafiza", "Resim–Kelime Hafızası", "🃏", [["🃏", "Resmi, adının yazdığı kartla eşleştir."]], resimKelimeHafizaG)
    ]));
    ekleTema("matematik", tema("mt-oyun", "Oyunlarla Matematik", [
      konu("mt-toplambalon", "Toplama Balonları", "🎈", [["➕", "Balondaki toplama işlemini yap. Sonucu doğru olanları patlat."], ["🎈", "4+3 = 7"]], toplamBalonG),
      konu("mt-cikarmabalon", "Çıkarma Balonları", "🎈", [["➖", "Balondaki çıkarma işlemini yap. Sonucu doğru olanları patlat."], ["🎈", "9-4 = 5"]], cikarmaBalonG),
      konu("mt-dogru", "Sayı Doğrusunda Zıpla", "🐸", [["🐸", "İleri zıplamak toplamadır, geri zıplamak çıkarmadır."], ["➡️", "3'ten 4 adım ileri: 7"]], dogruG),
      konu("mt-sudoku", "Sudoku", "🔢", [["🔢", "Her satırda, her sütunda ve her 2×2 kutuda her şekil bir kez olur."]], () => sudokuG(6))
    ]));
    ekleTema("hayat", tema("hb-yasam", "Güvenli ve Mutlu Yaşam", [
      konu("hb-trafik", "Trafik Kuralları", "🚦", [["🚦", "Kırmızıda dur, yeşilde yaya geçidinden geç."], ["🚗", "Arabada arka koltukta, kemerli otururuz."]], trafikG),
      konu("hb-duygu", "Duygularımız", "😀", [["😀", "Mutlu, üzgün, kızgın, korkmuş... Bütün duygular normaldir."]], () => (Math.random() < 0.5 ? duyguG() : nasilG())),
      konu("hb-deger", "Ne Yapmalıyım?", "🤝", [["🤝", "Yardımlaşmak, özür dilemek ve sıra beklemek güzel davranışlardır."]], degerG),
      konu("hb-guven", "Güvenliğim", "🛡️", [["🛡️", "Tanımadığımız kişilerle bir yere gitmeyiz; bir büyüğümüze söyleriz."]], guvenG),
      konu("hb-tabak", "Sağlıklı Tabak", "🥗", [["🥗", "Meyve, sebze, süt ve yumurta her gün; şekerli yiyecekler arada bir."]], tabakG)
    ]));
    ekleDers("akil", { ad: "Akıl Oyunları", ikon: "🧩", renk: "#f15bb5", temalar: [tema("ak1", "Akıl Oyunları", [
      konu("ak-hafiza", "Hafıza Kartları", "🃏", [["🃏", "Kartları ikişer çevir, aynı resimleri bul."]], () => hafizaG(6)),
      konu("ak-labirent", "Labirent", "🌀", [["🌀", "Duvarlardan geçmeden hedefe ulaş."]], () => labirentG(6)),
      konu("ak-fark", "Farkı Bul", "🔍", [["🔍", "İki resim arasındaki farkı bul."]], () => farkG(4, 3)),
      konu("ak-yapboz", "Yapboz", "🧩", [["🧩", "Parçaların yerini değiştirerek resmi tamamla."]], () => yapbozG(9)),
      konu("ak-golge", "Gölge Eşleştir", "👤", [["👤", "Gölgenin kime ait olduğunu bul."]], golgeG),
      konu("ak-desen", "Deseni Tamamla", "🔁", [["🔁", "Tekrar eden düzeni bul, sıradakini seç."]], desenG),
      konu("ak-farkli", "Hangisi Farklı?", "🤔", [["🤔", "Gruba uymayanı bul."]], farkliG)
    ])] });
  }
})();
