// Ortaokul Günlük Hikâye bölümü: sayfa sayfa okuma, okuma hızı, anlama soruları, hikâye kitaplığı
// app.js'ten sonra yüklenir. Hikâyeler: window.HIKAYELER = [{ id, baslik, tur, sayfalar: [..], sorular: [[soru, doğru, [yanlışlar]]], kelimeler: [[kelime, anlam]] }]
(function () {
  const H = window.HIKAYELER || [];
  if (!H.length || typeof kayit === "undefined") return;
  kayit.hikaye = kayit.hikaye || {};   // id -> { t: tarih, d: doğru, s: soru sayısı, hiz }
  kayit.okuma = kayit.okuma || [];     // [{ t, hiz, id }]
  const HEDEF = window.HIKAYE_HEDEF || "120-160";
  const gunNo = () => { const d = new Date(); return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000) + d.getFullYear() * 366; };
  const bugunku = () => H[gunNo() % H.length];
  const kelimeSay = (h) => h.sayfalar.join(" ").split(/\s+/).filter(Boolean).length;
  const bugunOkundu = () => { const g = kayit.gunluk[gunAnahtar()]; return !!(g && g.hikaye); };

  const STIL = `<style id="hikaye-stil">
    .hk-kart{display:flex;gap:14px;align-items:center;width:100%;text-align:left;background:linear-gradient(135deg,#fff7e6,#ffe9c7);border:2px solid #f5c26b;border-radius:18px;padding:16px;margin:14px 0;color:#3b2a10;cursor:pointer}
    .hk-kart .buyuk{font-size:42px}.hk-kart b{font-size:19px}.hk-kart small{display:block;opacity:.8;margin-top:3px}
    .hk-kart.tamam{background:linear-gradient(135deg,#e9f9ef,#d3f3df);border-color:#7fd1a0;color:#13492b}
    .hk-sayfa{background:#fffdf7;color:#2a2418;border:1px solid #eadfc8;border-radius:16px;padding:22px 22px 14px;font-size:21px;line-height:1.75;box-shadow:0 6px 18px rgba(80,60,20,.08);min-height:260px;font-family:Georgia,'Times New Roman',serif}
    .hk-sayfa p{margin:0 0 12px}.hk-ust{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:6px 0 12px;flex-wrap:wrap}
    .hk-cubuk{height:8px;border-radius:9px;background:#efe4cc;overflow:hidden;margin:10px 0}.hk-cubuk div{height:100%;background:#f0a020}
    .hk-alt{display:flex;gap:10px;justify-content:space-between;margin-top:14px;flex-wrap:wrap}.hk-alt .btn{flex:1}
    .hk-sozluk{margin-top:14px;font-size:16px;background:#f4f6fb;border-radius:12px;padding:10px 14px;color:#1d2433}
    .hk-liste .kart{display:flex;justify-content:space-between;gap:10px}
    .hk-sec{display:grid;gap:10px;margin:12px 0}.hk-sec button{text-align:left;padding:14px 16px;border-radius:14px;border:2px solid #d9dfec;background:var(--kart,#fff);color:var(--yazi,#1d2433);font-size:18px;cursor:pointer}
    .hk-sec button.dogru{border-color:#22a06b;background:#e6f7ee;color:#13492b}.hk-sec button.yanlis{border-color:#e5484d;background:#fdecec;color:#7a1518}
    @media (prefers-color-scheme:dark){.hk-sayfa{background:#1f1c16;color:#efe7d6;border-color:#3a3326}.hk-kart{background:#2a2416;color:#f3e3c2;border-color:#6b5524}.hk-kart.tamam{background:#16291e;color:#bfe8cf;border-color:#2f6b46}}
  </style>`;
  if (!document.getElementById("hikaye-stil")) document.head.insertAdjacentHTML("beforeend", STIL);

  // Ana sayfaya "Günün Hikâyesi" kartı
  window.hikayeAnaKart = function () {
    const h = bugunku(), ok = bugunOkundu();
    const son = kayit.okuma.slice(-1)[0];
    const kart = document.createElement("button");
    kart.className = "hk-kart" + (ok ? " tamam" : "");
    kart.innerHTML = `<span class="buyuk">${ok ? "✅" : "📖"}</span><span><b>Günün Hikâyesi: ${esc(h.baslik)}</b><small>${esc(h.tur || "Hikâye")} · ${h.sayfalar.length} sayfa · ${kelimeSay(h)} kelime${ok ? " · Bugün okudun, harika!" : ""}</small>${son ? `<small>Son okuma hızın: <b>${son.hiz}</b> kelime/dk (hedef ${HEDEF})</small>` : ""}</span>`;
    kart.onclick = () => git(() => okuyucu(h), "📖 " + h.baslik);
    const kit = document.createElement("button");
    kit.className = "btn2"; kit.style.cssText = "width:100%;margin-bottom:6px";
    kit.textContent = `📚 Hikâye Kitaplığı (${H.length} hikâye · ${Object.keys(kayit.hikaye).length} okundu)`;
    kit.onclick = () => git(kitaplik, "📚 Hikâye Kitaplığı");
    const hedef = document.querySelector(".hedef-kart");
    if (hedef) { hedef.after(kart); kart.after(kit); } else { ekran.prepend(kit); ekran.prepend(kart); }
    if (window.SES) { const rk = document.createElement("div"); kit.after(rk); SES.rehberGoster(rk); }
  };

  function kitaplik() {
    const sirali = H.map((h, i) => ({ h, i }));
    ekran.innerHTML = `<p class="not">Her gün yeni bir hikâye açılır. İstediğin hikâyeyi buradan da okuyabilirsin. Okuma hızı hedefi: dakikada ${HEDEF} kelime.</p><div class="liste hk-liste" id="hkl"></div>`;
    sirali.forEach(({ h }) => {
      const k = kayit.hikaye[h.id];
      const b = document.createElement("button"); b.className = "kart";
      b.innerHTML = `<span><b>${k ? "✅ " : "📖 "}${esc(h.baslik)}</b><br><span class="not">${esc(h.tur || "Hikâye")} · ${h.sayfalar.length} sayfa · ${kelimeSay(h)} kelime</span></span><span class="rozet">${k ? `${k.d}/${k.s} doğru${k.hiz ? ` · ${k.hiz} k/dk` : ""}` : "Okunmadı"}</span>`;
      b.onclick = () => git(() => okuyucu(h), "📖 " + h.baslik);
      $("hkl").appendChild(b);
    });
  }

  function okuyucu(h) {
    let i = 0; const basla = Date.now(); let sesli = false;
    const ciz = () => {
      ekran.innerHTML = `
        <div class="hk-ust"><span class="not">${esc(h.tur || "Hikâye")} · Sayfa ${i + 1} / ${h.sayfalar.length}</span>
          ${window.SES ? `<button class="btn2" id="hkDinle">🔊 Bu sayfayı dinle</button>` : ""}</div>
        <div class="hk-cubuk"><div style="width:${((i + 1) / h.sayfalar.length) * 100}%"></div></div>
        <article class="hk-sayfa">${i === 0 ? `<h2 style="margin:0 0 12px;font-family:inherit">${esc(h.baslik)}</h2>` : ""}${h.sayfalar[i].split(/\n+/).map((p) => `<p>${esc(p)}</p>`).join("")}</article>
        <div class="hk-alt">
          <button class="btn2" id="hkGeri" ${i === 0 ? "disabled" : ""}>← Önceki sayfa</button>
          <button class="btn" id="hkIleri">${i === h.sayfalar.length - 1 ? "Bitirdim, sorulara geç ✏️" : "Sonraki sayfa →"}</button>
        </div>
        ${i === h.sayfalar.length - 1 && h.kelimeler && h.kelimeler.length ? `<div class="hk-sozluk"><b>📒 Hikâyedeki kelimeler</b><br>${h.kelimeler.map(([k, a]) => `<b>${esc(k)}:</b> ${esc(a)}`).join(" · ")}</div>` : ""}
        <p class="not" style="margin-top:10px">⏱ Okuma süren ölçülüyor. Sesli dinlersen okuma hızı kaydedilmez.</p>`;
      window.scrollTo(0, 0);
      if ($("hkDinle")) $("hkDinle").onclick = () => { sesli = true; SES.konus(h.sayfalar[i].replace(/\n+/g, " "), "tr", { hiz: 0.95 }); };
      $("hkGeri").onclick = () => { if (i > 0) { if (window.SES) SES.dur(); i--; ciz(); } };
      $("hkIleri").onclick = () => {
        if (window.SES) SES.dur();
        if (i < h.sayfalar.length - 1) { i++; ciz(); return; }
        const dk = (Date.now() - basla) / 60000, hiz = Math.round(kelimeSay(h) / Math.max(dk, 0.1));
        sorular(h, sesli || hiz > 350 || hiz < 30 ? null : hiz);
      };
    };
    ciz();
  }

  function sorular(h, hiz) {
    const S = h.sorular.map(([s, d, y]) => ({ s, sec: karistir([d, ...y]), d }));
    let n = 0, dogru = 0;
    const ciz = () => {
      if (n >= S.length) return bitir();
      const q = S[n];
      ekran.innerHTML = `<p class="not">Soru ${n + 1} / ${S.length}</p><h2 style="line-height:1.4">${esc(q.s)}</h2><div class="hk-sec" id="hks"></div><div id="hkd"></div>`;
      q.sec.forEach((c) => {
        const b = document.createElement("button"); b.textContent = c;
        b.onclick = () => {
          if (ekran.querySelector(".hk-sec .dogru, .hk-sec .yanlis")) return;
          const ok = c === q.d; if (ok) dogru++;
          b.classList.add(ok ? "dogru" : "yanlis");
          if (!ok) [...$("hks").children].find((x) => x.textContent === q.d).classList.add("dogru");
          $("hkd").innerHTML = `<button class="btn" style="width:100%;margin-top:10px">${n === S.length - 1 ? "Sonucu gör" : "Sonraki soru →"}</button>`;
          $("hkd").firstChild.onclick = () => { n++; ciz(); };
        };
        $("hks").appendChild(b);
      });
    };
    const bitir = () => {
      const onceki = kayit.hikaye[h.id];
      kayit.hikaye[h.id] = { t: gunAnahtar(), d: dogru, s: S.length, hiz: hiz || (onceki && onceki.hiz) || null };
      if (hiz) { kayit.okuma.push({ t: gunAnahtar(), hiz, id: h.id }); kayit.okuma = kayit.okuma.slice(-60); }
      if (h === bugunku()) ilerlemeEkle((g) => { g.hikaye = true; });
      kaydet();
      const [a, b] = String(HEDEF).split("-").map(Number);
      const yorum = !hiz ? "Okuma hızın bu sefer ölçülmedi (sesli dinleme ya da çok hızlı/yavaş sayfa geçişi)." : hiz < a ? "Biraz daha pratikle hızın artacak. Her gün okumaya devam! 💪" : hiz <= b ? "Yaşına uygun, çok iyi bir okuma hızı! 👏" : "Harika bir okuma hızın var! Anlamayı da kaçırmadığından emin ol. 🚀";
      ekran.innerHTML = `<div class="hedef-kart" style="text-align:center"><div style="font-size:54px">${dogru === S.length ? "🏆" : dogru >= S.length - 1 ? "🌟" : "📖"}</div>
        <h2>${esc(h.baslik)}</h2><p style="font-size:20px">Anlama soruları: <b>${dogru} / ${S.length}</b> doğru</p>
        ${hiz ? `<p style="font-size:20px">Okuma hızın: <b>${hiz}</b> kelime/dakika</p>` : ""}<p class="not">${yorum} (Hedef: ${HEDEF} kelime/dk)</p>
        <div class="satir" style="justify-content:center"><button class="btn" id="hkTekrar">🔁 Tekrar oku</button><button class="btn2" id="hkKit">📚 Kitaplık</button></div></div>`;
      $("hkTekrar").onclick = () => git(() => okuyucu(h), "📖 " + h.baslik, false);
      $("hkKit").onclick = () => git(kitaplik, "📚 Hikâye Kitaplığı");
    };
    ciz();
  }

  // Ana sayfa zaten çizildiyse kartı ekle
  if (document.querySelector(".hedef-kart") && !document.querySelector(".hk-kart")) window.hikayeAnaKart();
})();
