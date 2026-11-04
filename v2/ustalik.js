// 🏆 Ustalık sistemi (v2 deneme): konu puanı (0–100) ve seviyeler, kişiye göre aralıklı tekrar, ipucu basamakları,
// rozetler ve haftalık hedef. app.js'teki soruKaydet'i sarar; ders/ünite/konu listelerine ve teste kancalarla bağlanır.
// Veri: kayit.ustalik = { konuId: { p, n, g:[gün], son, sonraki, ar, gun, ustaT } }, kayit.rozetler = { id: zaman }.
(function () {
  if (typeof kayit === "undefined" || typeof soruKaydet !== "function") return;
  const GUN = 86400000;
  const bugunNo = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / GUN);
  const U = (kayit.ustalik = kayit.ustalik || {});
  kayit.rozetler = kayit.rozetler || {};
  kayit.tekrarSay = kayit.tekrarSay || 0;

  // İlk açılış: eski istatistiklerden başlangıç puanı (bugün tekrar edilecek olarak)
  for (const [id, st] of Object.entries(kayit.istatistik || {})) {
    if (U[id] || !st.s) continue;
    U[id] = { p: Math.round((st.d / st.s) * 70), n: st.s, g: [], son: 0, sonraki: Date.now(), ar: 1, gun: 0 };
  }

  const SEVIYE = [
    { ad: "Denenmedi", ikon: "⚪", renk: "#cbd5e1" },
    { ad: "Tanıdık", ikon: "🟡", renk: "#f59e0b" },
    { ad: "Yeterli", ikon: "🟢", renk: "#16a34a" },
    { ad: "Usta", ikon: "🏆", renk: "#7c3aed" }
  ];
  const hamSeviye = (u) => (!u || !u.n ? 0 : u.p >= 90 && u.g.length >= 2 ? 3 : u.p >= 60 ? 2 : 1);
  const gecikti = (u) => u && u.n && Date.now() > u.sonraki + Math.max(1, u.ar) * GUN;
  // Tekrar zamanı çok geçen konu bir seviye solar (unutma)
  const seviye = (id) => { const u = U[id], s = hamSeviye(u); return s > 1 && gecikti(u) ? s - 1 : s; };

  // ---------- Puan güncelleme (her cevapta) ----------
  let ipucuAdim = 0;
  const eski = soruKaydet;
  window.soruKaydet = function (konuId, ok, sn) {
    eski(konuId, ok, sn);
    if (!konuId || /^tarama-/.test(konuId)) return;
    const u = U[konuId] || (U[konuId] = { p: 0, n: 0, g: [], son: 0, sonraki: 0, ar: 0, gun: 0 });
    const onceki = hamSeviye(u);
    if (ok) {
      const kazanc = ipucuAdim >= 3 ? 0 : Math.max(3, Math.round((100 - u.p) * 0.2)) * (ipucuAdim ? 0.5 : 1);
      u.p = Math.min(100, Math.round(u.p + kazanc));
      if (u.p >= 80 && ipucuAdim === 0) { const g = bugunNo(); if (!u.g.includes(g)) { u.g.push(g); if (u.g.length > 5) u.g.shift(); } }
    } else u.p = Math.max(0, u.p - Math.max(5, Math.round(u.p * 0.15)));
    u.n++; u.son = Date.now();
    const s = hamSeviye(u), bg = bugunNo();
    // Aralık günde bir kez güncellenir: tanıdık 1 gün, yeterli 3 gün, usta 7 → 14 → 30 → 60 gün
    if (u.gun !== bg || s !== onceki) {
      u.ar = s === 3 ? Math.min(60, Math.max(7, (onceki === 3 ? u.ar : 3) * 2)) : s === 2 ? 3 : 1;
      u.sonraki = Date.now() + u.ar * GUN; u.gun = bg;
    }
    if (s === 3 && onceki < 3) { u.ustaT = u.ustaT || Date.now(); bildir(`🏆 Usta oldun: ${konuAdi(konuId)}`); }
    ipucuAdim = 0;
    rozetKontrol();
    kaydet();
  };

  const konuAdi = (id) => { const b = konuBul(id); return b ? b.konu.ad : ""; };
  const bildir = (m) => {
    const d = document.createElement("div"); d.className = "kutlama"; d.innerHTML = m; document.body.appendChild(d);
    setTimeout(() => d.classList.add("gizle"), 2600); setTimeout(() => d.remove(), 3400);
  };

  // ---------- Liste görünümleri ----------
  const cip = (id) => { const s = seviye(id); return `<span title="${SEVIYE[s].ad}" style="margin-right:6px">${SEVIYE[s].ikon}</span>`; };
  const konuYazi = (id) => {
    const u = U[id]; if (!u || !u.n) return "Henüz çalışılmadı";
    const s = seviye(id), kalan = Math.ceil((u.sonraki - Date.now()) / GUN);
    return `${SEVIYE[s].ad} · ${u.p}/100${kalan <= 0 ? " · 🧠 tekrar zamanı" : ` · tekrar ${kalan} gün sonra`}`;
  };
  const sayim = (konular) => { const c = [0, 0, 0, 0]; konular.forEach((k) => c[seviye(k.id)]++); return c; };
  const cubuk = (c) => { const t = c.reduce((a, b) => a + b, 0) || 1; return `<span style="display:flex;height:6px;border-radius:4px;overflow:hidden;margin-top:6px;background:${SEVIYE[0].renk}">${[3, 2, 1].map((s) => `<i style="width:${(c[s] / t) * 100}%;background:${SEVIYE[s].renk}"></i>`).join("")}</span>`; };
  window.USTALIK = {
    cip, konuYazi,
    uniteCubuk: (u) => cubuk(sayim(u.konular)),
    uniteOzet: (u) => { const c = sayim(u.konular); return `${u.konular.length} konu${c[3] ? ` · 🏆 ${c[3]}` : ""}`; },
    dersOzet: (dk) => { const l = (ICERIK[dk].uniteler || []).flatMap((u) => u.konular), c = sayim(l); return c[3] || c[2] ? ` · 🏆 ${c[3]}/${l.length} usta` : ""; },
    seviye, U,
    // ---------- İpucu basamakları ----------
    ipucuKur(s, sira, secKutu, kutu) {
      ipucuAdim = 0;
      if (!kutu) return;
      const b = konuBul(s.konuId), k = b && b.konu;
      const kelime = (t) => new Set(String(t).toLocaleLowerCase("tr").match(/[\p{L}]{4,}/gu) || []);
      const ipucu1 = () => {
        const sk = kelime(s.soru), aday = [...((k && k.ozet) || []), ...((k && k.anlatim) || [])];
        let en = null, puan = 0; aday.forEach((t) => { let p = 0; kelime(t).forEach((w) => { if (sk.has(w)) p++; }); if (p > puan) { puan = p; en = t; } });
        return en || (k && k.ozet && k.ozet[0]) || "Soruyu dikkatle oku ve her şıkkı tek tek düşün.";
      };
      kutu.innerHTML = `<button class="btn2" id="ipucuBtn" style="margin:4px 0 10px">💡 İpucu</button><div id="ipucuMetin"></div>`;
      const btn = kutu.querySelector("#ipucuBtn"), metin = kutu.querySelector("#ipucuMetin");
      btn.onclick = () => {
        ipucuAdim++;
        if (ipucuAdim === 1) { metin.innerHTML = `<div class="cozum">💡 <b>Hatırla:</b> ${esc(ipucu1())}</div>`; btn.textContent = "💡 Bir ipucu daha"; }
        else if (ipucuAdim === 2) {
          const yanlis = sira.map((asil, p) => ({ asil, p })).filter((x) => x.asil !== s.dogru);
          yanlis.sort(() => Math.random() - 0.5).slice(0, Math.max(0, yanlis.length - 1)).slice(0, 2).forEach((x) => { const e = secKutu.children[x.p]; if (e) { e.disabled = true; e.style.opacity = ".35"; e.style.textDecoration = "line-through"; } });
          metin.insertAdjacentHTML("beforeend", `<div class="not">✂️ İki yanlış şık elendi.</div>`); btn.textContent = "💡 Çözümü göster";
        } else {
          metin.insertAdjacentHTML("beforeend", `<div class="cozum">📖 ${esc(s.cozum || "Doğru şıkkı seç ve çözümü incele.")}</div>`); btn.remove();
        }
        if (ipucuAdim < 3) metin.insertAdjacentHTML("beforeend", "");
      };
    },
    ipucuBitti() { const b = document.getElementById("ipucuBtn"); if (b) b.remove(); }
  };

  // ---------- Bugün tekrar zamanı gelen konular ----------
  const tekrarListesi = () => Object.entries(U)
    .filter(([id, u]) => u.n && u.sonraki <= Date.now() && konuBul(id))
    .sort((a, b) => hamSeviye(a[1]) - hamSeviye(b[1]) || a[1].sonraki - b[1].sonraki)
    .map(([id]) => konuBul(id));
  function tekrarEkrani() {
    const l = tekrarListesi();
    if (!l.length) { ekran.innerHTML = `<div class="ozet">✅</div><p style="text-align:center">Bugün tekrar zamanı gelen konu yok. Yeni konular çalıştıkça burada, tam unutmaya başlayacağın zamanda karşına çıkacaklar.</p>`; return; }
    ekran.innerHTML = `<p class="not">Bunlar unutmaya başlamadan tekrar etmen gereken konular. Her biri 5 soru sürer. Bildiğin konunun aralığı uzar (3 → 7 → 14 → 30 gün), zorlandığın konu daha sık gelir.</p><div class="liste" id="tl"></div>`;
    l.slice(0, 8).forEach(({ ders, konu }) => {
      const b = document.createElement("button"); b.className = "kart";
      b.innerHTML = `<b>${cip(konu.id)}${esc(konu.ad)}</b><span class="rozet">${esc(ICERIK[ders].ad)} · ${U[konu.id].p}/100</span>`;
      b.onclick = () => { kayit.tekrarSay++; kaydet(); git(() => test(() => soruHazirla(konu, 5), "Tekrar: " + konu.ad, false, konu.id), "🧠 " + konu.ad); };
      $("tl").appendChild(b);
    });
  }

  // ---------- Rozetler ve haftalık hedef ----------
  const haftaBasi = () => { const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return d.getTime(); };
  const ustaSay = () => Object.keys(U).filter((id) => hamSeviye(U[id]) === 3).length;
  const buHaftaUsta = () => Object.values(U).filter((u) => u.ustaT && u.ustaT >= haftaBasi()).length;
  const dogruSay = () => Object.values(kayit.istatistik || {}).reduce((a, s) => a + (s.d || 0), 0);
  const uniteUsta = () => Object.values(ICERIK).some((D) => !D.secmeli && D.uniteler.some((u) => u.konular.length >= 2 && u.konular.every((k) => hamSeviye(U[k.id]) === 3)));
  const ROZET = [
    ["seri3", "🔥", "3 gün seri", "3 gün üst üste çalış", () => seriHesapla() >= 3],
    ["seri7", "🔥", "Haftalık seri", "7 gün üst üste çalış", () => seriHesapla() >= 7],
    ["seri30", "🌋", "Ay boyu seri", "30 gün üst üste çalış", () => seriHesapla() >= 30],
    ["usta1", "🏆", "İlk usta konu", "Bir konuda usta ol", () => ustaSay() >= 1],
    ["usta10", "🥇", "10 usta konu", "10 konuda usta ol", () => ustaSay() >= 10],
    ["usta50", "👑", "50 usta konu", "50 konuda usta ol", () => ustaSay() >= 50],
    ["unite", "🗺️", "Ünite fatihi", "Bir ünitenin bütün konularında usta ol", uniteUsta],
    ["d100", "✏️", "100 doğru", "100 soruyu doğru cevapla", () => dogruSay() >= 100],
    ["d1000", "📚", "1000 doğru", "1000 soruyu doğru cevapla", () => dogruSay() >= 1000],
    ["tekrar10", "🧠", "Hafıza ustası", "10 tekrar oturumu tamamla", () => kayit.tekrarSay >= 10],
    ["hafta", "🎯", "Hedef avcısı", "Bir haftada 2 konuda usta ol", () => buHaftaUsta() >= 2],
    ["deneme", "📝", "Denemeci", "Bir deneme sınavı çöz", () => (kayit.denemeler || []).length >= 1]
  ];
  function rozetKontrol() {
    ROZET.forEach(([id, ikon, ad, , kosul]) => { try { if (!kayit.rozetler[id] && kosul()) { kayit.rozetler[id] = Date.now(); bildir(`${ikon} Yeni rozet: <b>${esc(ad)}</b>`); } } catch (e) {} });
  }
  function rozetEkrani() {
    rozetKontrol(); kaydet();
    const hedef = 2, h = buHaftaUsta(), c = [0, 0, 0, 0];
    Object.values(ICERIK).filter((D) => !D.secmeli).forEach((D) => D.uniteler.forEach((u) => u.konular.forEach((k) => c[seviye(k.id)]++)));
    ekran.innerHTML = `
      <div class="hedef-kart"><div class="hedef-ust"><b>🎯 Bu haftanın hedefi: ${hedef} konuda usta ol</b><span>${h}/${hedef}</span></div>
        <div class="ilerleme"><div style="width:${Math.min(100, (h / hedef) * 100)}%"></div></div>
        <div class="not">Usta olmak için konuda 90 puana ulaş ve iki farklı günde ipucusuz doğru yap.</div></div>
      <h2>📊 Konu Haritam (ana dersler)</h2>
      <div class="karolar">${[3, 2, 1, 0].map((s) => `<div class="karo"><b style="font-size:24px">${SEVIYE[s].ikon} ${c[s]}</b><small>${SEVIYE[s].ad}</small></div>`).join("")}</div>
      <h2>🏅 Rozetlerim (${Object.keys(kayit.rozetler).length}/${ROZET.length})</h2>
      <div class="izgara">${ROZET.map(([id, ikon, ad, acik]) => { const v = kayit.rozetler[id]; return `<div class="kart" style="text-align:center;${v ? "" : "opacity:.45;filter:grayscale(1)"}"><div style="font-size:34px">${ikon}</div><b>${esc(ad)}</b><div class="not">${v ? "✅ " + new Date(v).toLocaleDateString("tr-TR") : esc(acik)}</div></div>`; }).join("")}</div>`;
  }

  // ---------- Ana sayfa kartları ----------
  const st = document.createElement("style");
  st.textContent = `.ozel-kart.tekrarK{background:linear-gradient(135deg,#0ea5e9,#7c3aed)}.ozel-kart.rozetK{background:linear-gradient(135deg,#f59e0b,#dc2626)}.karo small{display:block}`;
  document.head.appendChild(st);
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.unshift((kutu) => {
    const n = tekrarListesi().length, b = document.createElement("button"); b.className = "ozel-kart tekrarK";
    b.innerHTML = `<span class="ikon">🧠</span><span><b>Bugünün Konu Tekrarı</b><small>${n ? `${n} konu unutulmadan tekrar bekliyor` : "Bugün tekrar zamanı gelen konu yok ✅"}</small></span>`;
    b.onclick = () => git(tekrarEkrani, "🧠 Konu Tekrarı"); kutu.prepend(b);
  });
  window.ANA_KARTLAR.push((kutu) => {
    const b = document.createElement("button"); b.className = "ozel-kart rozetK";
    b.innerHTML = `<span class="ikon">🏅</span><span><b>Rozetler ve Haftalık Hedef</b><small>Bu hafta ${buHaftaUsta()}/2 usta konu · ${Object.keys(kayit.rozetler).length} rozet · toplam ${ustaSay()} usta</small></span>`;
    b.onclick = () => git(rozetEkrani, "🏅 Rozetler"); kutu.appendChild(b);
  });
  // ---------- Ön koşul uyarısı: önceki konu zayıfsa önce kısa tekrar öner ----------
  if (typeof window.konuSayfa === "function") {
    const asilKS = window.konuSayfa;
    window.konuSayfa = function (k) {
      const r = asilKS.apply(this, arguments);
      try {
        const b = k && konuBul(k.id); if (!b) return r;
        const i = b.unite.konular.findIndex((x) => x.id === k.id), on = i > 0 ? b.unite.konular[i - 1] : null, u = on && U[on.id];
        if (on && u && u.n >= 3 && u.p < 60) {
          const d = document.createElement("div"); d.className = "onkosul";
          d.innerHTML = `🧩 Bu konu, <b>${esc(on.ad)}</b> konusunun üzerine kurulur. Orada puanın <b>${u.p}/100</b>. Önce 5 soruluk kısa bir tekrar yaparsan bu konu çok daha kolay gelir.<div class="satir" style="margin:8px 0 0"><button class="btn" data-t>🔁 Önce ${esc(on.ad)}</button><button class="btn2" data-k>Bu konuya devam</button></div>`;
          d.querySelector("[data-t]").onclick = () => git(() => test(() => soruHazirla(on, 5), "Tekrar: " + on.ad, false, on.id), "🔁 " + on.ad);
          d.querySelector("[data-k]").onclick = () => d.remove();
          ekran.prepend(d);
        }
      } catch (e) {}
      return r;
    };
    const st2 = document.createElement("style"); st2.textContent = ".onkosul{background:color-mix(in srgb,#f59e0b 14%,var(--kart));border:1px solid color-mix(in srgb,#f59e0b 50%,var(--sinir));border-radius:16px;padding:12px 14px;margin-bottom:14px;font-size:16.5px;line-height:1.5}"; document.head.appendChild(st2);
  }
  kaydet();
  if (window.ANA_YENILE) try { ANA_YENILE(); } catch (e) {}
})();
