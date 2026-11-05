// 🎮 Oyun modları (5–12): konunun soruları üç kısa oyunla çözülür. Oyun kısa, soru çok: her cevap konu puanına ve
// yanlışlar listesine işlenir. Oyunlar: 60 Saniye (hız + seri bonusu), Kale Savunması (5 can, 10 dalga), Zirve (ilk yanlışa kadar).
(function () {
  if (typeof window.konuSayfa !== "function" || typeof soruHazirla !== "function") return;
  kayit.oyun = kayit.oyun || { rekor: {} };
  const st = document.createElement("style");
  st.textContent = `.oy-ust{display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:18px;font-weight:700;margin-bottom:10px;flex-wrap:wrap}
.oy-sure{height:10px;border-radius:8px;background:var(--sinir);overflow:hidden;margin-bottom:12px}.oy-sure div{height:100%;background:linear-gradient(90deg,#22c55e,#f59e0b,#ef4444);transition:width .2s linear}
.oy-sahne{font-size:34px;text-align:center;letter-spacing:4px;min-height:48px;margin:4px 0 8px}
.oy-kombo{color:#f59e0b}.oy-flash{animation:oyF .5s}@keyframes oyF{0%{transform:scale(1)}50%{transform:scale(1.15)}100%{transform:scale(1)}}
.oy-modlar{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
.oy-mod{text-align:left;border-radius:16px;padding:14px 16px;color:#fff;border:none}.oy-mod b{display:block;font-size:19px}.oy-mod small{display:block;opacity:.92;font-size:14.5px;margin-top:4px}
.oy-sonuc{text-align:center}.oy-sonuc .buyuk{font-size:52px}.oy-yanlis{text-align:left;font-size:15.5px;background:var(--kart);border:1px solid var(--sinir);border-radius:12px;padding:10px 12px;margin:6px 0}`;
  document.head.appendChild(st);

  const MODLAR = {
    hiz: { ad: "⏱️ 60 Saniye", alt: "Bir dakikada en çok soruyu çöz. Üst üste doğrular seri bonusu kazandırır.", renk: "linear-gradient(135deg,#0ea5e9,#6366f1)" },
    kale: { ad: "🏰 Kale Savunması", alt: "Canavarlar kaleye yaklaşıyor! Her doğru cevap birini durdurur. 5 canın var, 10 dalga.", renk: "linear-gradient(135deg,#16a34a,#0f766e)" },
    zirve: { ad: "🧗 Zirveye Tırman", alt: "Her doğru cevap bir basamak. İlk yanlışta düşersin; rekorunu kır!", renk: "linear-gradient(135deg,#f59e0b,#dc2626)" }
  };
  const rekorAl = (k, m) => kayit.oyun.rekor[k.id + ":" + m] || 0;

  function menu(k) {
    ekran.innerHTML = `<p class="not" style="font-size:16px">Oyunda da gerçek sorular çözülür; doğru ve yanlışların konu puanına işlenir, yanlışlar sonra tekrar edilir.</p>
      <div class="oy-modlar">${Object.entries(MODLAR).map(([m, x]) => `<button class="oy-mod" data-m="${m}" style="background:${x.renk}"><b>${x.ad}</b><small>${x.alt}</small><small>🏆 Rekorun: ${rekorAl(k, m)}</small></button>`).join("")}</div>`;
    ekran.querySelectorAll("[data-m]").forEach((b) => (b.onclick = () => git(() => oyna(k, b.dataset.m), MODLAR[b.dataset.m].ad)));
  }

  function oyna(k, mod) {
    let havuz = soruHazirla(k, 60), i = 0, puan = 0, kombo = 0, dogruS = 0, can = 5, dalga = 0, basamak = 0, bitti = false, t0 = Date.now(), zam = null;
    const yanlislar = [], SURE = 60, DALGA = 10, DALGA_SN = 20;
    const bitisSaati = Date.now() + SURE * 1000; let dalgaBitis = Date.now() + DALGA_SN * 1000;
    const temizle = () => { if (zam) clearInterval(zam); zam = null; };
    const yeniSoru = () => { if (i >= havuz.length) { havuz = havuz.concat(soruHazirla(k, 40)); } return havuz[i++]; };
    function ciz() {
      if (bitti) return;
      if (!document.body.contains(ekran) || !ekran.querySelector) return temizle();
      const s = yeniSoru(); if (!s) return son();
      const sira = s.secenekler.map((_, j) => j).sort(() => Math.random() - 0.5);
      const ust = mod === "hiz" ? `<span>⭐ ${puan} puan</span><span class="oy-kombo">${kombo >= 2 ? "🔥 x" + kombo : ""}</span><span id="oySay">⏱️ ${Math.max(0, Math.ceil((bitisSaati - Date.now()) / 1000))} sn</span>`
        : mod === "kale" ? `<span>🌊 Dalga ${dalga + 1}/${DALGA}</span><span>${"❤️".repeat(can)}${"🖤".repeat(5 - can)}</span><span>⭐ ${puan}</span>`
        : `<span>🧗 Basamak ${basamak}</span><span>🏆 Rekor ${rekorAl(k, "zirve")}</span>`;
      const sahne = mod === "kale" ? `<div class="oy-sahne">🏰${"·".repeat(2)}<span id="oyCan">👾</span></div>` : mod === "zirve" ? `<div class="oy-sahne">${"🟫".repeat(Math.min(basamak, 8))}🧗${basamak >= 8 ? "⛰️" : ""}</div>` : "";
      ekran.innerHTML = `<div class="oy-ust">${ust}</div>${mod !== "zirve" ? `<div class="oy-sure"><div id="oyBar" style="width:100%"></div></div>` : ""}${sahne}
        <div class="soru">${esc(s.soru)}</div><div id="oySec"></div><div id="oyAlt"></div>`;
      sira.forEach((asil) => { const b = document.createElement("button"); b.className = "secenek"; b.textContent = s.secenekler[asil]; b.onclick = () => cevap(s, asil, sira); $("oySec").appendChild(b); });
      t0 = Date.now();
      if (mod === "kale") dalgaBitis = Date.now() + DALGA_SN * 1000;
    }
    function cevap(s, secilen, sira) {
      if (bitti) return;
      const ok = secilen === s.dogru, btn = [...$("oySec").children];
      btn.forEach((b) => (b.disabled = true));
      btn[sira.indexOf(s.dogru)].classList.add("dogru"); if (!ok) btn[sira.indexOf(secilen)].classList.add("yanlis");
      soruKaydet(s.konuId || k.id, ok, (Date.now() - t0) / 1000);
      if (ok) { dogruS++; kombo++; puan += 10 + (kombo >= 2 ? kombo * 2 : 0); basamak++; }
      else {
        kombo = 0; yanlislar.push(s);
        const ayni = (y) => y.soru === s.soru && y.secenekler[y.dogru] === s.secenekler[s.dogru];
        if (!kayit.yanlislar.some(ayni)) { kayit.yanlislar.push({ konuId: s.konuId || k.id, soru: s.soru, secenekler: s.secenekler, dogru: s.dogru, cozum: s.cozum }); if (kayit.yanlislar.length > 300) kayit.yanlislar.shift(); }
      }
      kaydet();
      if (mod === "kale") { dalga++; if (!ok) can--; const c = $("oyCan"); if (c) c.textContent = ok ? "💥" : "😈"; if (can <= 0 || dalga >= DALGA) return setTimeout(son, 700); }
      if (mod === "zirve" && !ok) return setTimeout(son, 1200);
      setTimeout(ciz, ok ? 450 : 1300);
    }
    function son() {
      if (bitti) return; bitti = true; temizle();
      const skor = mod === "zirve" ? basamak : puan, anahtar = k.id + ":" + mod, eski = kayit.oyun.rekor[anahtar] || 0, rekor = skor > eski;
      if (rekor) kayit.oyun.rekor[anahtar] = skor; kayit.oyun.toplam = (kayit.oyun.toplam || 0) + 1; kaydet();
      const top = mod === "zirve" ? basamak + (yanlislar.length) : dogruS + yanlislar.length;
      ekran.innerHTML = `<div class="oy-sonuc"><div class="buyuk">${rekor ? "🏆" : mod === "kale" && can > 0 ? "🏰" : "🎮"}</div>
        <h2>${rekor ? "Yeni rekor!" : mod === "kale" ? (can > 0 ? "Kaleyi korudun!" : "Kale düştü, ama iyi savaştın!") : "Oyun bitti"}</h2>
        <p style="font-size:20px">${mod === "zirve" ? `🧗 ${basamak} basamak tırmandın` : `⭐ ${puan} puan`} · ${dogruS}/${top} doğru${eski ? ` · önceki rekor: ${eski}` : ""}</p>
        ${yanlislar.length ? `<h3 style="text-align:left">📌 Yanlış yaptıkların (Yanlışlarım listesine eklendi)</h3>${yanlislar.slice(0, 6).map((s) => `<div class="oy-yanlis"><b>${esc(s.soru)}</b><br>✅ ${esc(s.secenekler[s.dogru])}${s.cozum ? `<br><span class="not">${esc(s.cozum)}</span>` : ""}</div>`).join("")}` : `<p>Hiç yanlış yok, harika! 🌟</p>`}
        <div class="satir" style="justify-content:center"><button class="btn" id="oyTekrar">🔁 Tekrar oyna</button><button class="btn2" id="oyMenu">🎮 Başka oyun</button></div></div>`;
      $("oyTekrar").onclick = () => git(() => oyna(k, mod), MODLAR[mod].ad, false);
      $("oyMenu").onclick = () => git(() => menu(k), "🎮 Oyunla Çöz", false);
    }
    ciz();
    if (mod !== "zirve") zam = setInterval(() => {
      if (bitti) return temizle();
      if (!$("oySec")) return temizle(); // ekrandan çıkıldı
      if (mod === "hiz") { const kalan = bitisSaati - Date.now(); const b = $("oyBar"); if (b) b.style.width = Math.max(0, (kalan / (SURE * 1000)) * 100) + "%"; const y = $("oySay"); if (y) y.textContent = `⏱️ ${Math.max(0, Math.ceil(kalan / 1000))} sn`; if (kalan <= 0) son(); }
      else { const kalan = dalgaBitis - Date.now(); const b = $("oyBar"); if (b) b.style.width = Math.max(0, (kalan / (DALGA_SN * 1000)) * 100) + "%"; if (kalan <= 0 && $("oySec") && !$("oySec").children[0].disabled) { can--; dalga++; const c = $("oyCan"); if (c) c.textContent = "😈"; [...$("oySec").children].forEach((x) => (x.disabled = true)); kaydet(); if (can <= 0 || dalga >= DALGA) son(); else setTimeout(ciz, 900); } }
    }, 200);
  }

  const asil = window.konuSayfa;
  window.konuSayfa = function (k) {
    const r = asil.apply(this, arguments);
    const b = $("basla"); if (!b || !k) return r;
    const o = document.createElement("button"); o.className = "btn"; o.style.background = "linear-gradient(135deg,#f59e0b,#ef4444)"; o.textContent = "🎮 Oyunla Çöz";
    o.onclick = () => git(() => menu(k), "🎮 Oyunla Çöz"); b.after(o);
    return r;
  };
  window.OYUN_MENU = menu;
})();
