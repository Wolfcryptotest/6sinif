// ⚡ Günlük 2 dakikalık hızlı işlem ısınması (Zearn'deki "fluency" ısınması gibi). Sınıfa göre işlemler, ekranda büyük
// rakam tuşları, rekor ve günlük seri. Her cevap günün çözülen soru sayısına eklenir.
(function () {
  if (typeof kayit === "undefined") return;
  const NO = parseInt((window.SINIF && SINIF.anahtar) || document.title, 10) || 6;
  kayit.isinma = kayit.isinma || { rekor: 0, gunler: {} };
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const SURE = 120;
  // Soru üretici: [metin, cevap(sayı)]
  const URET = [
    () => { const a = r(2, 12), b = r(2, 12); return [`${a} × ${b}`, a * b]; },
    () => { const b = r(2, 12), c = r(2, 12); return [`${b * c} ÷ ${b}`, c]; },
    () => { const a = r(15, 99), b = r(11, 99); return [`${a} + ${b}`, a + b]; },
    () => { const a = r(40, 150), b = r(11, a - 1); return [`${a} − ${b}`, a - b]; },
    ...(NO >= 6 ? [
      () => { const a = r(2, 5), u = r(2, a === 2 ? 5 : 3); return [`${a}${"⁰¹²³⁴⁵"[u]}`, a ** u]; },
      () => { const a = r(2, 9), b = r(2, 9), c = r(2, 9); return [`${a} + ${b} × ${c}`, a + b * c]; },
      () => { const a = r(1, 9), b = r(1, 9); return [`0,${a} + 0,${b}`, (a + b) / 10]; },
      () => { const p = [2, 4, 5, 10][r(0, 3)], k = r(1, p - 1), n = p * r(2, 6); return [`${k}/${p} × ${n}`, (n / p) * k]; }
    ] : []),
    ...(NO >= 7 ? [() => { const a = r(-9, 9), b = r(-9, 9); return [`(${a}) + (${b})`, a + b]; }, () => { const a = r(-9, 9) || 3, b = r(-6, 6) || 2; return [`(${a}) × (${b})`, a * b]; }] : [])
  ];
  const sayiYaz = (x) => String(Math.round(x * 100) / 100).replace(".", ",");
  const bugunA = () => gunAnahtar(new Date());

  function ekranIsinma() {
    let skor = 0, toplam = 0, girdi = "", soru = null, bitis = 0, zam = null, bitti = false;
    const yeni = () => { const [m, c] = URET[r(0, URET.length - 1)](); soru = { m, c }; girdi = ""; ciz(); };
    const temizle = () => { if (zam) clearInterval(zam); zam = null; };
    ekran.innerHTML = `<div class="ism-kart"><p style="font-size:18px">Her gün 2 dakika hızlı işlem, matematiği kolaylaştırır. Hazır olunca başla!</p>
      <p>🏆 Rekorun: <b>${kayit.isinma.rekor}</b> doğru · 🔥 ${seri()} gün üst üste</p>
      <button class="btn" id="ismBas" style="font-size:20px;padding:14px 26px">⚡ Başla</button></div>`;
    $("ismBas").onclick = () => { bitis = Date.now() + SURE * 1000; yeni(); zam = setInterval(() => { if (!$("ismSay")) return temizle(); const k = Math.max(0, Math.ceil((bitis - Date.now()) / 1000)); $("ismSay").textContent = `⏱️ ${k} sn`; if (k <= 0) son(); }, 250); };
    function ciz() {
      ekran.innerHTML = `<div class="oy-ust"><span>✅ ${skor} doğru</span><span id="ismSay">⏱️ ${Math.max(0, Math.ceil((bitis - Date.now()) / 1000))} sn</span></div>
        <div class="ism-soru">${soru.m} = <span class="ism-girdi">${girdi || "?"}</span></div>
        <div class="ism-tus">${["7", "8", "9", "4", "5", "6", "1", "2", "3", "−", "0", ","].map((t) => `<button data-t="${t}">${t}</button>`).join("")}<button data-t="sil" class="ik">⌫</button><button data-t="tamam" class="ana">✓</button></div>`;
      ekran.querySelectorAll("[data-t]").forEach((b) => (b.onclick = () => bas(b.dataset.t)));
    }
    function bas(t) {
      if (bitti) return;
      if (t === "sil") girdi = girdi.slice(0, -1);
      else if (t === "tamam") { if (!girdi) return; const v = parseFloat(girdi.replace(",", ".").replace("−", "-")); const ok = Math.abs(v - soru.c) < 1e-9; toplam++; if (ok) skor++;
        ilerlemeEkle((g) => { g.soru++; if (ok) g.dogru++; g.sure += 3; });
        const e = ekran.querySelector(".ism-soru"); e.classList.add(ok ? "ok" : "no"); if (!ok) e.innerHTML = `${soru.m} = <b>${sayiYaz(soru.c)}</b>`;
        return setTimeout(yeni, ok ? 250 : 900); }
      else if (girdi.length < 7 && !(t === "," && girdi.includes(",")) && !(t === "−" && girdi)) girdi += t;
      const g = ekran.querySelector(".ism-girdi"); if (g) g.textContent = girdi || "?";
    }
    function son() {
      if (bitti) return; bitti = true; temizle();
      const rekor = skor > kayit.isinma.rekor; if (rekor) kayit.isinma.rekor = skor;
      kayit.isinma.gunler[bugunA()] = Math.max(kayit.isinma.gunler[bugunA()] || 0, skor); kaydet();
      ekran.innerHTML = `<div class="oy-sonuc"><div class="buyuk">${rekor ? "🏆" : "⚡"}</div><h2>${rekor ? "Yeni rekor!" : "Isınma tamam!"}</h2>
        <p style="font-size:20px">✅ ${skor} doğru · ${toplam} cevap · %${toplam ? Math.round((skor / toplam) * 100) : 0}</p><p>🔥 ${seri()} gün üst üste ısındın.</p>
        <div class="satir" style="justify-content:center"><button class="btn" id="ismT">🔁 Tekrar</button></div></div>`;
      $("ismT").onclick = () => git(ekranIsinma, "⚡ 2 Dakika Isınma", false);
    }
  }
  function seri() { let n = 0; for (let i = 0; i < 400; i++) { const t = new Date(); t.setDate(t.getDate() - i); if (kayit.isinma.gunler[gunAnahtar(t)] != null) n++; else if (i) break; } return n; }

  const st = document.createElement("style");
  st.textContent = `.ism-kart{text-align:center;background:var(--kart);border:1px solid var(--sinir);border-radius:18px;padding:18px}
.ism-soru{font-size:40px;font-weight:800;text-align:center;margin:14px 0;padding:16px;border-radius:18px;background:var(--kart);border:2px solid var(--sinir)}.ism-soru.ok{border-color:#16a34a;background:color-mix(in srgb,#16a34a 15%,var(--kart))}.ism-soru.no{border-color:#dc2626;background:color-mix(in srgb,#dc2626 12%,var(--kart))}
.ism-girdi{color:var(--ana)}.ism-tus{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:360px;margin:0 auto}.ism-tus button{font-size:28px;font-weight:800;padding:14px 0;border-radius:14px;background:var(--kart);border:1px solid var(--sinir);color:var(--yazi)}.ism-tus .ana{background:#16a34a;color:#fff;border:none}.ism-tus .ik{background:var(--bg)}
.ozel-kart.isinmaK{background:linear-gradient(135deg,#f97316,#eab308)}`;
  document.head.appendChild(st);
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.push((kutu) => {
    const b = document.createElement("button"), bug = kayit.isinma.gunler[bugunA()]; b.className = "ozel-kart isinmaK";
    b.innerHTML = `<span class="ikon">⚡</span><span><b>2 Dakika Hızlı İşlem</b><small>${bug != null ? `Bugün yaptın ✅ ${bug} doğru` : "Günlük ısınma"} · rekor ${kayit.isinma.rekor}</small></span>`;
    b.onclick = () => git(ekranIsinma, "⚡ 2 Dakika Isınma"); kutu.appendChild(b);
  });
  if (window.ANA_YENILE) try { ANA_YENILE(); } catch (e) {}
})();
