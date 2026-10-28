// Okul öncesi ek görev tipleri: iz (çizgi çalışması), boya, hareket, ritim
(function () {
  const C = OYUN.CIZ, esc = OYUN.esc;
  // okul öncesi: büyük resimli kartlar
  if (document.head) document.head.insertAdjacentHTML("beforeend", `<style>.cipler .parca{font-size:40px;padding:8px 14px;min-width:70px}.sepet{min-height:150px}.sepet b{font-size:22px}.sepet .ic span{font-size:38px}.eslestir .parca{min-height:70px}</style>`);
  const $ = (h) => { const d = document.createElement("div"); d.innerHTML = h.trim(); return d.firstElementChild; };

  // ---------- Ses (WebAudio) ----------
  let ac = null;
  const sesBaglam = () => { try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); if (ac.state === "suspended") ac.resume(); } catch (e) {} return ac; };
  function vur(t, frek, sure, guc, tip) {
    const a = sesBaglam(); if (!a) return;
    const o = a.createOscillator(), g = a.createGain(), b = a.currentTime + t;
    o.type = tip || "sine"; o.frequency.setValueAtTime(frek, b); o.frequency.exponentialRampToValueAtTime(Math.max(40, frek * 0.5), b + sure);
    g.gain.setValueAtTime(guc || 0.5, b); g.gain.exponentialRampToValueAtTime(0.001, b + sure);
    o.connect(g); g.connect(a.destination); o.start(b); o.stop(b + sure + 0.02);
  }
  window.MINIK_SES = {
    davul: (n, aralik, guc) => { for (let i = 0; i < n; i++) vur(i * (aralik || 0.55), 150, 0.25, guc || 0.7, "sine"); return n * (aralik || 0.55); },
    nota: (frek, t, sure, guc) => vur(t || 0, frek, sure || 0.4, guc || 0.4, "triangle"),
    dizi: (notalar, aralik) => notalar.forEach((f, i) => vur(i * (aralik || 0.45), f, 0.35, 0.4, "triangle"))
  };

  // ---------- ritim: önce dinle, sonra seç ----------
  // g.cal = () => saniye; düğmeye dokununca çalar. Seçenekler secim gibi.
  C.ritim = (g, el, bitir) => {
    const d = $(`<div style="text-align:center;margin:6px 0 14px"><button class="buyukbtn" style="--renk:#9b5de5;font-size:30px;max-width:340px;margin:auto">${g.dugme || "🥁 Dinle"}</button></div>`);
    let caldi = false;
    d.querySelector("button").onclick = () => { APP.sesDur(); caldi = true; g.cal(); };
    el.appendChild(d);
    C.secim(g, el, bitir);
    setTimeout(() => { if (!caldi) { caldi = true; g.cal(); } }, g.gecikme || 2600);
  };

  // ---------- hareket: ekran dışı görev, süre dolunca "Yaptım" ----------
  C.hareket = (g, el, bitir) => {
    const sure = window.__hizliTest ? 1 : (g.sure || 10);
    const k = $(`<div style="text-align:center"><div style="font-size:120px;line-height:1.1;animation:zipla 1s infinite">${g.resim || "🤸"}</div>
      <div style="height:22px;border-radius:12px;background:#f3e3c4;overflow:hidden;margin:14px auto;max-width:420px"><div class="bar" style="height:100%;width:0;background:#2bb673;transition:width 1s linear"></div></div>
      <div class="sayac" style="font-size:40px;font-weight:900">${sure}</div>
      <button class="buyukbtn" style="--renk:var(--yesil)" disabled>✅ Yaptım!</button></div>`);
    if (!document.getElementById("zipla-stil")) document.head.appendChild($(`<style id="zipla-stil">@keyframes zipla{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}</style>`));
    el.appendChild(k);
    const bar = k.querySelector(".bar"), say = k.querySelector(".sayac"), b = k.querySelector("button");
    let kalan = sure;
    const zam = setInterval(() => {
      if (!document.body.contains(k)) return clearInterval(zam);
      kalan--; say.textContent = Math.max(0, kalan); bar.style.width = ((sure - kalan) / sure) * 100 + "%";
      if (kalan <= 3 && kalan > 0) MINIK_SES.nota(880, 0, 0.12, 0.2);
      if (kalan <= 0) { clearInterval(zam); say.textContent = "🎉"; b.disabled = false; MINIK_SES.dizi([523, 659, 784]); APP.konus("Süre bitti! Yaptıysan yeşil düğmeye dokun."); }
    }, 1000);
    b.onclick = () => { clearInterval(zam); bitir(true, null); };
  };

  // ---------- boya: rengi seç, şekle dokun ----------
  const RENK = { kırmızı: "#ef476f", mavi: "#3d8bff", sarı: "#ffd23f", yeşil: "#2bb673", turuncu: "#ff8a00", mor: "#9b5de5", pembe: "#ff8fc8", kahverengi: "#8d5a3b", siyah: "#2b2140", beyaz: "#ffffff" };
  window.MINIK_RENK = RENK;
  const SEKIL = {
    güneş: `<circle cx="100" cy="100" r="55"/>`,
    top: `<circle cx="100" cy="100" r="70"/>`,
    elma: `<path d="M100 60 C60 30 20 70 40 130 C55 175 90 175 100 165 C110 175 145 175 160 130 C180 70 140 30 100 60 Z"/>`,
    kalp: `<path d="M100 170 L35 105 C5 75 30 25 70 35 C88 40 96 55 100 65 C104 55 112 40 130 35 C170 25 195 75 165 105 Z"/>`,
    yıldız: `<polygon points="100,20 122,75 182,78 135,115 152,175 100,140 48,175 65,115 18,78 78,75"/>`,
    balon: `<ellipse cx="100" cy="85" rx="55" ry="65"/>`,
    ev: `<polygon points="35,95 100,35 165,95 165,175 35,175"/>`,
    yaprak: `<path d="M40 160 C40 80 100 30 170 30 C170 110 120 160 40 160 Z"/>`,
    araba: `<path d="M20 130 L35 90 L70 70 L130 70 L160 95 L185 105 L185 135 Z"/>`,
    çiçek: `<circle cx="100" cy="100" r="28"/><circle cx="100" cy="50" r="28"/><circle cx="100" cy="150" r="28"/><circle cx="50" cy="100" r="28"/><circle cx="150" cy="100" r="28"/>`
  };
  window.MINIK_SEKIL = SEKIL;
  C.boya = (g, el, bitir) => {
    let secRenk = null, bitti = false;
    const svg = $(`<div style="text-align:center"><svg viewBox="0 0 200 200" width="230" height="230" style="cursor:pointer;touch-action:manipulation"><g fill="#fff" stroke="#2b2140" stroke-width="5" stroke-linejoin="round">${SEKIL[g.sekil]}</g></svg></div>`);
    const pal = $(`<div style="display:flex;justify-content:center;gap:14px;flex-wrap:wrap;margin:10px 0"></div>`);
    g.renkler.forEach((ad) => {
      const b = $(`<button aria-label="${esc(ad)}" style="width:76px;height:76px;border-radius:50%;border:5px solid #2b2140;background:${RENK[ad]};box-shadow:0 4px 0 rgba(0,0,0,.2)"></button>`);
      b.onclick = () => { secRenk = ad; pal.querySelectorAll("button").forEach((x) => x.style.transform = ""); b.style.transform = "scale(1.18)"; APP.konus(ad, null, true); };
      pal.appendChild(b);
    });
    svg.querySelector("svg").onclick = () => {
      if (bitti) return;
      if (!secRenk) { APP.konus("Önce bir boya seç!", null, true); return; }
      svg.querySelector("g").setAttribute("fill", RENK[secRenk]); bitti = true;
      setTimeout(() => bitir(secRenk === g.renk, g.renk), 500);
    };
    el.appendChild(pal); el.appendChild(svg);
  };

  // ---------- iz: parmakla noktalı yolu takip et ----------
  // g.yol: [[x,y]...] 0-1 aralığında kontrol noktaları (birleştirilir)
  C.iz = (g, el, bitir) => {
    const W = Math.min(560, el.clientWidth || 560), H = Math.round(W * 0.62);
    const k = $(`<div style="text-align:center"><canvas width="${W * 2}" height="${H * 2}" style="width:${W}px;height:${H}px;background:#fff;border:4px solid var(--sinir);border-radius:22px;touch-action:none"></canvas>
      <div class="satir" style="max-width:${W}px;margin:8px auto 0"><button class="buyukbtn ikincil" style="font-size:20px">🔄 Baştan</button></div></div>`);
    el.appendChild(k);
    const cv = k.querySelector("canvas"), x = cv.getContext("2d"), S = 2;
    cv.dataset.yol = JSON.stringify(g.yol);
    // yol örnekleme
    const ham = g.yol.map(([a, b]) => [a * W * S, b * H * S]);
    const nok = [];
    for (let i = 0; i < ham.length - 1; i++) { const [a1, b1] = ham[i], [a2, b2] = ham[i + 1]; const n = Math.max(2, Math.round(Math.hypot(a2 - a1, b2 - b1) / 18)); for (let j = 0; j < n; j++) nok.push([a1 + (a2 - a1) * j / n, b1 + (b2 - b1) * j / n]); }
    nok.push(ham[ham.length - 1]);
    let gecti = new Array(nok.length).fill(false), cizgi = [], basildi = false, bitti = false;
    const R = 30 * S;
    function ciz() {
      x.clearRect(0, 0, cv.width, cv.height);
      x.lineCap = "round"; x.lineJoin = "round";
      x.strokeStyle = "#efe4cc"; x.lineWidth = 46 * S; x.beginPath(); ham.forEach(([a, b], i) => i ? x.lineTo(a, b) : x.moveTo(a, b)); x.stroke();
      x.setLineDash([10 * S, 12 * S]); x.strokeStyle = "#b9a98a"; x.lineWidth = 5 * S; x.beginPath(); ham.forEach(([a, b], i) => i ? x.lineTo(a, b) : x.moveTo(a, b)); x.stroke(); x.setLineDash([]);
      x.font = `${34 * S}px serif`; x.textAlign = "center"; x.textBaseline = "middle";
      x.fillText(g.bas || "🐝", ham[0][0], ham[0][1]); x.fillText(g.son || "🌼", ham[ham.length - 1][0], ham[ham.length - 1][1]);
      x.strokeStyle = g.renk || "#ff8a00"; x.lineWidth = 16 * S; x.beginPath(); cizgi.forEach(([a, b], i) => i ? x.lineTo(a, b) : x.moveTo(a, b)); x.stroke();
    }
    const nokta = (e) => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * S * (W / r.width), (e.clientY - r.top) * S * (H / r.height)]; };
    function isle(p) { cizgi.push(p); nok.forEach(([a, b], i) => { if (!gecti[i] && Math.hypot(a - p[0], b - p[1]) < R) gecti[i] = true; }); }
    cv.addEventListener("pointerdown", (e) => { if (bitti) return; basildi = true; cv.setPointerCapture(e.pointerId); isle(nokta(e)); ciz(); });
    cv.addEventListener("pointermove", (e) => { if (!basildi || bitti) return; isle(nokta(e)); ciz(); });
    const birak = () => {
      if (!basildi || bitti) return; basildi = false;
      const oran = gecti.filter(Boolean).length / gecti.length;
      if (oran >= 0.8 && gecti[gecti.length - 1]) { bitti = true; MINIK_SES.dizi([523, 659, 784, 1047], 0.12); setTimeout(() => bitir(true, null), 600); }
      else if (oran > 0.15) APP.konus("Biraz daha! Çizginin üstünden giderek sona ulaş.", null, true);
    };
    cv.addEventListener("pointerup", birak); cv.addEventListener("pointercancel", birak);
    k.querySelector("button").onclick = () => { gecti = gecti.map(() => false); cizgi = []; ciz(); };
    ciz();
  };

  // hazır yollar (0-1 aralığı)
  const dalga = (n, gen) => Array.from({ length: n * 8 + 1 }, (_, i) => [0.08 + 0.84 * i / (n * 8), 0.5 + gen * Math.sin((i / 8) * Math.PI * 2)]);
  const daire = (r) => Array.from({ length: 33 }, (_, i) => [0.5 + r * 0.62 * Math.cos(-Math.PI / 2 + i / 32 * Math.PI * 2), 0.5 + r * Math.sin(-Math.PI / 2 + i / 32 * Math.PI * 2)]);
  window.MINIK_YOL = {
    "düz çizgi": [[0.1, 0.5], [0.9, 0.5]],
    "dik çizgi": [[0.5, 0.1], [0.5, 0.9]],
    "eğik çizgi": [[0.12, 0.12], [0.88, 0.88]],
    "zikzak": [[0.08, 0.7], [0.25, 0.3], [0.42, 0.7], [0.58, 0.3], [0.75, 0.7], [0.92, 0.3]],
    "dalga": dalga(2, 0.2),
    "tepe": [[0.08, 0.8], [0.3, 0.25], [0.5, 0.8], [0.7, 0.25], [0.92, 0.8]],
    "merdiven": [[0.1, 0.85], [0.1, 0.65], [0.3, 0.65], [0.3, 0.45], [0.5, 0.45], [0.5, 0.25], [0.7, 0.25], [0.7, 0.1]],
    "daire": daire(0.38),
    "kare": [[0.3, 0.15], [0.7, 0.15], [0.7, 0.85], [0.3, 0.85], [0.3, 0.16]],
    "üçgen": [[0.5, 0.1], [0.82, 0.88], [0.18, 0.88], [0.49, 0.12]],
    "sarmal": Array.from({ length: 49 }, (_, i) => { const a = i / 48 * Math.PI * 4, r = 0.05 + 0.38 * i / 48; return [0.5 + r * 0.62 * Math.cos(a), 0.5 + r * Math.sin(a)]; })
  };
})();
