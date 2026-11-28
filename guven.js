// 🎯 Emin misin? — Güven Ölçer (5–12)
// Öğrenci her soruda cevabını seçer, sonra ne kadar emin olduğunu söyler (Eminim / Sanırım / Tahmin).
// Neden? Araştırmalar, "emin olunan yanlışlar" düzeltildiğinde daha iyi hatırlandığını (hiperdüzeltme etkisi)
// ve öğrencinin neyi bildiğini doğru tahmin etmeyi öğrenmesinin (üst biliş) çalışmayı verimli kıldığını gösteriyor.
// Sorular karışık konulardan gelir (karışık çalışma). Cevaplar normal soru gibi kaydedilir (soruKaydet, yanlış defteri).
// Veri cihazda kalır (localStorage). Diğer dosyalara dokunmaz; ana sayfaya tek kart ekler.
(function () {
  if (window.GUVEN) return;
  if (typeof kayit === "undefined" || typeof DERSLER === "undefined" || !window.ICERIK || typeof test !== "function" || typeof soruHazirla !== "function" || typeof git !== "function") return;
  window.GUVEN = true;
  const AN = "guven-" + ((window.SINIF && SINIF.anahtar) || document.title);
  const V = (() => { try { return JSON.parse(localStorage.getItem(AN)) || {}; } catch (e) { return {}; } })();
  V.turlar = V.turlar || [];
  const kaydetV = () => { try { localStorage.setItem(AN, JSON.stringify(V)); } catch (e) {} };
  const e = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const karis = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const anaBaslik = () => (window.SINIF && SINIF.baslik) || document.title;
  const TUR_BOYU = 10;
  const GUVEN = [["e", "😎", "Eminim"], ["s", "🤔", "Sanırım"], ["t", "🎲", "Tahmin"]];

  const dersler = () => DERSLER.filter((d) => ICERIK[d.key] && !ICERIK[d.key].takma);
  const konular = (dk) => ICERIK[dk].uniteler.flatMap((u) => u.konular).filter((k) => k.sorular && k.sorular.length);
  const konuAd = {};
  const konuHavuzu = (dk) => {
    const tum = (dk ? [dk] : dersler().map((d) => d.key)).flatMap((d) => konular(d));
    tum.forEach((k) => (konuAd[k.id] = k.ad));
    const calisilan = tum.filter((k) => kayit.istatistik && kayit.istatistik[k.id] && kayit.istatistik[k.id].s > 0);
    return calisilan.length >= 3 ? calisilan : tum;
  };
  // Karışık sorular: her soru farklı bir konudan gelmeye çalışır
  function sorular(dk) {
    const havuz = karis(konuHavuzu(dk)), secilen = [], anahtar = new Set();
    let i = 0;
    while (secilen.length < TUR_BOYU && i < havuz.length * 3 + 20 && havuz.length) {
      const k = havuz[i % havuz.length]; i++;
      const s = soruHazirla(k, 2)[0]; if (!s) continue;
      const a = s.soru + "|" + s.secenekler[s.dogru]; if (anahtar.has(a)) continue;
      anahtar.add(a); secilen.push(s);
    }
    return secilen;
  }

  const CSS = `<style>
    .gv-ders{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:10px 0}
    .gv-ders button{border:1px solid var(--sinir);background:var(--kart);color:inherit;border-radius:14px;padding:12px 10px;font-size:15.5px;text-align:left;border-left:5px solid var(--renk,#0ea5e9)}
    .gv-ders button.tum{grid-column:1/-1;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;border:0;font-weight:800}
    .gv-guven{margin:6px 0 10px;padding:12px;border-radius:14px;background:var(--kart);border:2px dashed #6366f1}
    .gv-guven b{display:block;margin-bottom:8px}
    .gv-guven .dg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
    .gv-guven .dg button{border:1px solid var(--sinir);background:var(--bg);color:inherit;border-radius:12px;padding:10px 4px;font-size:15px;line-height:1.2}
    .gv-guven .dg button span{display:block;font-size:24px}
    .secenek.gv-secili{border-color:#6366f1;background:color-mix(in srgb,#6366f1 14%,var(--kart))}
    .gv-uyari{margin-top:8px;padding:8px 10px;border-radius:10px;background:color-mix(in srgb,#f59e0b 16%,var(--kart));font-size:15px}
    .gv-tablo{width:100%;border-collapse:separate;border-spacing:0 6px;font-size:15.5px}
    .gv-tablo td,.gv-tablo th{padding:8px 6px;text-align:center}.gv-tablo th{font-size:13.5px;color:var(--soluk);font-weight:600}
    .gv-tablo td:first-child{text-align:left}.gv-tablo tr.s td{background:var(--kart);border-top:1px solid var(--sinir);border-bottom:1px solid var(--sinir)}
    .gv-tablo tr.s td:first-child{border-left:1px solid var(--sinir);border-radius:10px 0 0 10px}.gv-tablo tr.s td:last-child{border-right:1px solid var(--sinir);border-radius:0 10px 10px 0}
    .gv-tablo .iyi{color:var(--yesil,#16a34a);font-weight:800}.gv-tablo .kotu{color:var(--kirmizi,#dc2626);font-weight:800}
    .gv-liste{background:var(--kart);border:1px solid var(--sinir);border-radius:14px;padding:10px 12px;margin:8px 0;font-size:15px}
    .gv-liste small{color:var(--soluk)}
    .gv-dug{display:flex;flex-direction:column;gap:8px;margin-top:12px}
  </style>`;

  function giris() {
    const son = V.turlar.slice(-5);
    const top = son.reduce((a, t) => [a[0] + t.n, a[1] + t.ey, a[2] + t.td], [0, 0, 0]);
    ekran.innerHTML = CSS + `
      <p class="not">🦉 Bilge: Her soruda cevabını seç, sonra <b>ne kadar emin olduğunu</b> söyle. Tur sonunda neyi gerçekten bildiğini, neyi şansla bildiğini göreceksin.</p>
      <div class="gv-liste"><b>Neden işe yarar?</b><br>
        ⚡ <b>Emin olup yanlış yaptığın</b> bir bilgi düzeltilince, beynin onu daha iyi hatırlar.<br>
        🍀 <b>Tahminle doğru</b> bildiğin konular aslında henüz oturmamıştır; onları tekrar etmek gerekir.<br>
        🔀 Sorular farklı konulardan karışık gelir; bu da kalıcı öğrenmeyi güçlendirir.</div>
      ${son.length ? `<p class="not">Son ${son.length} turda ${top[0]} soru · ⚡ ${top[1]} emin-yanlış · 🍀 ${top[2]} şansla doğru</p>` : ""}
      <div class="gv-ders" id="gvDers"><button class="tum" data-d="">🔀 Karışık · tüm dersler (${TUR_BOYU} soru)</button></div>`;
    const kutu = document.getElementById("gvDers");
    dersler().forEach((d) => {
      const b = document.createElement("button"); b.dataset.d = d.key; b.style.setProperty("--renk", d.renk || "#0ea5e9");
      b.innerHTML = `${d.ikon} ${e(d.ad)}`; kutu.appendChild(b);
    });
    kutu.querySelectorAll("button").forEach((b) => (b.onclick = () => {
      const dk = b.dataset.d, ad = dk ? (dersler().find((d) => d.key === dk) || {}).ad : "Karışık";
      git(() => tur(dk), "🎯 Emin misin? · " + ad);
    }));
  }

  function tur(dk) {
    let liste = sorular(dk), i = 0, sira = [], secim = -1, t0 = Date.now();
    const cevaplar = [];
    if (!liste.length) { ekran.innerHTML = `<p class="not">Bu derste henüz soru bulunamadı.</p>`; return; }
    function goster() {
      if (i >= liste.length) return bitir();
      const s = liste[i]; secim = -1; t0 = Date.now();
      ekran.innerHTML = CSS + `
        <div class="not">Soru ${i + 1} / ${liste.length} · ${e(konuAd[s.konuId] || "")}</div>
        <div class="ilerleme"><div style="width:${(i / liste.length) * 100}%"></div></div>
        <div class="soru">${e(s.soru)}</div>
        <div id="gvSec"></div><div id="gvGuven"></div><div id="gvAlt"></div>`;
      sira = karis(s.secenekler.map((_, j) => j));
      const sec = document.getElementById("gvSec");
      sira.forEach((asil, p) => {
        const b = document.createElement("button"); b.className = "secenek";
        b.textContent = "ABCD"[p] + ") " + s.secenekler[asil];
        b.onclick = () => sec_(p); sec.appendChild(b);
      });
    }
    function sec_(p) {
      secim = p;
      [...document.getElementById("gvSec").children].forEach((b, j) => b.classList.toggle("gv-secili", j === p));
      const g = document.getElementById("gvGuven");
      if (!g.firstChild) {
        g.innerHTML = `<div class="gv-guven"><b>Ne kadar eminsin?</b><div class="dg">${GUVEN.map(([k, i, a]) => `<button data-g="${k}"><span>${i}</span>${a}</button>`).join("")}</div></div>`;
        g.querySelectorAll("[data-g]").forEach((b) => (b.onclick = () => cevapla(b.dataset.g)));
        g.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
    function cevapla(gv) {
      if (secim < 0) return;
      const s = liste[i], p = secim, j = sira[p], ok = j === s.dogru;
      const btns = [...document.getElementById("gvSec").children];
      btns.forEach((b) => { b.disabled = true; b.classList.remove("gv-secili"); });
      btns[sira.indexOf(s.dogru)].classList.add("dogru");
      if (!ok) btns[p].classList.add("yanlis");
      document.getElementById("gvGuven").innerHTML = "";
      const teshis = !ok && window.USTALIK && USTALIK.hataKaydet ? USTALIK.hataKaydet(s, s.secenekler[j]) : null;
      soruKaydet(s.konuId, ok, (Date.now() - t0) / 1000);
      const anahtar = (y) => y.konuId === s.konuId && y.soru === s.soru && y.secenekler[y.dogru] === s.secenekler[s.dogru];
      if (!ok && !kayit.yanlislar.some(anahtar)) {
        kayit.yanlislar.push({ konuId: s.konuId, soru: s.soru, secenekler: s.secenekler, dogru: s.dogru, cozum: s.cozum, ceviri: s.ceviri, sozluk: s.sozluk, ses: s.ses, yanilgi: s.yanilgi, sec: s.secenekler[j] });
        if (kayit.yanlislar.length > 300) kayit.yanlislar.shift();
      }
      kaydet();
      cevaplar.push({ s, ok, gv, sec: s.secenekler[j] });
      const not = ok && gv === "e" ? "" : !ok && gv === "e" ? "⚡ <b>Emin olduğun bir yanlış.</b> Çözümü dikkatle oku: şimdi düzeltirsen bunu kolay kolay unutmazsın."
        : ok && gv === "t" ? "🍀 <b>Şansla doğru.</b> Bu konuyu tekrar etmekte fayda var." : ok && gv === "s" ? "🤔 Doğru, ama emin değildin. Bir tekrar bu bilgiyi sağlamlaştırır."
        : !ok && gv === "t" ? "👍 Bilmediğini doğru fark ettin. Şimdi çözümden öğren." : "";
      document.getElementById("gvAlt").innerHTML = `
        <div class="cozum"><b>${ok ? "✅ Doğru!" : "❌ Yanlış"}</b>${ok ? "" : `<div class="ek-satir">Senin cevabın: <b>${"ABCD"[p]}) ${e(s.secenekler[j])}</b><br>✅ Doğru cevap: <b>${"ABCD"[sira.indexOf(s.dogru)]}) ${e(s.secenekler[s.dogru])}</b></div>${window.USTALIK && USTALIK.hataHtml ? USTALIK.hataHtml(teshis) : ""}`}
          ${s.cozum ? `<div style="margin-top:6px">${e(s.cozum)}</div>` : ""}
          ${not ? `<div class="gv-uyari">${not}</div>` : ""}</div>
        <div class="satir"><button class="btn" id="gvIleri">${i + 1 < liste.length ? "Sonraki Soru →" : "Sonucu Gör"}</button></div>`;
      document.getElementById("gvIleri").onclick = () => { i++; goster(); };
    }
    function bitir() {
      const say = (gv, ok) => cevaplar.filter((c) => c.gv === gv && c.ok === ok).length;
      const dogru = cevaplar.filter((c) => c.ok).length;
      const ey = cevaplar.filter((c) => c.gv === "e" && !c.ok), td = cevaplar.filter((c) => c.gv !== "e" && c.ok);
      const em = cevaplar.filter((c) => c.gv === "e"), emD = em.filter((c) => c.ok).length;
      V.turlar.push({ g: new Date().toISOString().slice(0, 10), n: cevaplar.length, d: dogru, ey: ey.length, td: td.length });
      if (V.turlar.length > 30) V.turlar = V.turlar.slice(-30);
      kaydetV();
      const mesaj = !em.length ? "Hiçbir soruda 'Eminim' demedin. Bildiğin konularda kendine güvenebilirsin; doğrularına bak!"
        : ey.length === 0 && emD >= 3 ? `🌟 'Eminim' dediğin ${em.length} sorunun hepsi doğru. Neyi bildiğini çok iyi biliyorsun!`
        : ey.length >= 3 ? "⚡ Birkaç bilgiden emindin ama yanlıştı. Aşağıdaki listeyi oku ve bu soruları yeniden çöz; en hızlı gelişme buradan gelir."
        : "👍 Kendini iyi tanıyorsun. Emin olamadığın doğruları tekrar ederek onları da sağlamlaştır.";
      const satir = ([k, ic, a]) => { const d = say(k, true), y = say(k, false); return d + y ? `<tr class="s"><td>${ic} ${a}</td><td class="${k === "e" ? "iyi" : ""}">${d}</td><td class="${k === "e" && y ? "kotu" : ""}">${y}</td></tr>` : ""; };
      ekran.innerHTML = CSS + `
        <div class="ozet">${dogru} / ${cevaplar.length}</div>
        <p style="text-align:center">${mesaj}</p>
        <table class="gv-tablo"><tr><th></th><th>✅ Doğru</th><th>❌ Yanlış</th></tr>${GUVEN.map(satir).join("")}</table>
        ${ey.length ? `<h2>⚡ Emin olduğun yanlışlar</h2>${ey.map((c) => `<div class="gv-liste"><small>${e(konuAd[c.s.konuId] || "")}</small><br>${e(c.s.soru)}<br>❌ ${e(c.sec)} → ✅ <b>${e(c.s.secenekler[c.s.dogru])}</b>${c.s.cozum ? `<br><small>${e(c.s.cozum)}</small>` : ""}</div>`).join("")}` : ""}
        ${td.length ? `<h2>🍀 Emin olmadan doğru bildiklerin</h2><div class="gv-liste">${[...new Set(td.map((c) => konuAd[c.s.konuId] || ""))].filter(Boolean).map((a) => "• " + e(a)).join("<br>")}</div>` : ""}
        <div class="gv-dug">
          ${ey.length ? `<button class="btn" id="gvEY">⚡ Emin olduğum yanlışları yeniden çöz (${ey.length})</button>` : ""}
          ${td.length ? `<button class="btn2" id="gvTD">🍀 Bu konulardan yeni sorular (${Math.min(10, td.length * 3)})</button>` : ""}
          <button class="btn2" id="gvYeni">🔄 Yeni tur</button>
          <button class="btn2" id="gvAna">Ana Sayfa</button>
        </div>`;
      const b1 = document.getElementById("gvEY");
      if (b1) b1.onclick = () => git(() => test(ey.map((c) => ({ ...c.s })), "⚡ Emin olduğum yanlışlar", true, null), "⚡ Yeniden çöz");
      const b2 = document.getElementById("gvTD");
      if (b2) b2.onclick = () => {
        const ks = [...new Set(td.map((c) => c.s.konuId))].map((id) => dersler().flatMap((d) => konular(d.key)).find((k) => k.id === id)).filter(Boolean);
        const kaynak = () => karis(ks.flatMap((k) => soruHazirla(k, 3))).slice(0, 10);
        git(() => test(kaynak, "🍀 Sağlamlaştır", false, null), "🍀 Sağlamlaştır");
      };
      document.getElementById("gvYeni").onclick = () => { liste = sorular(dk); i = 0; cevaplar.length = 0; goster(); };
      document.getElementById("gvAna").onclick = () => { gecmis.length = 0; git(anaSayfa, anaBaslik(), false); };
    }
    goster();
  }

  window.GUVEN_AC = () => git(giris, "🎯 Emin misin?");
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.push((kutu) => {
    const t = V.turlar[V.turlar.length - 1];
    const b = document.createElement("button"); b.className = "ozel-kart"; b.style.background = "linear-gradient(135deg,#0ea5e9,#6366f1)";
    b.innerHTML = `<span class="ikon">🎯</span><span><b>Emin misin?</b><small>${t ? `Son tur ${t.d}/${t.n} · ⚡ ${t.ey} emin-yanlış` : "Cevabını ve ne kadar emin olduğunu söyle"}</small></span>`;
    b.onclick = window.GUVEN_AC; kutu.appendChild(b);
  });
  if (window.ANA_YENILE) window.ANA_YENILE();
})();
