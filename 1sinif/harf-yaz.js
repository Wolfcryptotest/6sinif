// ✍️ Harf, rakam ve çizgi yazma (parmakla iz sürme). Minik ve 1. sınıfta aynı dosya; oyun-ek.js'ten SONRA yüklenir.
// OYUN.CIZ.iz: noktalı rehberin üzerinden parmakla gidilir; harfin ne kadarının kaplandığı ve çizginin rehberin dışına ne kadar
// taştığı ölçülür. Yeterince kaplanmazsa çocuk cezalandırılmaz, "biraz daha" denir; üçüncü denemede doğru cevap gösterilir.
(function () {
  if (!window.OYUN || !window.DERS) return;
  const S = window.SINIF || {}, BIR = S.anahtar === "1sinif";
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const efekt = (t) => { try { APP.efekt(t); } catch (e) {} };
  const konus = (m) => { try { APP.konus(m, null, true); } catch (e) {} };

  document.head.insertAdjacentHTML("beforeend", `<style>
.iz-kutu{display:flex;flex-direction:column;align-items:center;gap:10px}
.iz-tuval{width:min(100%,440px);aspect-ratio:11/9;background:#fffdf5;border:4px solid var(--sinir);border-radius:22px;touch-action:none;box-shadow:var(--golge);
  background-image:linear-gradient(to bottom,transparent 24%,#dbeafe 24%,#dbeafe 25%,transparent 25%,transparent 74%,#fecaca 74%,#fecaca 75%,transparent 75%)}
.iz-dugme{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.iz-dugme button{padding:10px 18px;border-radius:14px;border:3px solid var(--sinir);background:var(--kart);font-size:20px;font-weight:800;box-shadow:var(--golge);color:var(--yazi)}
.iz-dugme button.ana{background:var(--yesil);border-color:var(--yesil);color:#fff}
.iz-ipucu{font-size:17px;font-weight:700;min-height:24px;text-align:center}
.iz-cubuk{width:min(100%,440px);height:12px;border-radius:9px;background:var(--sinir);overflow:hidden}.iz-cubuk i{display:block;height:100%;width:0;background:var(--yesil);transition:width .2s}
@media (max-width:560px){.iz-dugme button{font-size:17px;padding:8px 14px}}
</style>`);

  // Rehberi (harf ya da şekil) verilen bağlamda çizer. dolu=true: maske için kalın ve dolu çizim
  function rehber(ctx, g, W, H, dolu) {
    ctx.save();
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    if (g.metin) {
      let fs = H * 0.72; ctx.font = `700 ${fs}px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif`;
      const w = ctx.measureText(g.metin).width; if (w > W * 0.84) { fs *= (W * 0.84) / w; ctx.font = `700 ${fs}px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif`; }
      ctx.textAlign = "center"; ctx.textBaseline = "alphabetic";
      const y = H * 0.75;
      if (dolu) { ctx.fillStyle = "#000"; ctx.fillText(g.metin, W / 2, y); ctx.lineWidth = Math.max(10, fs * 0.06); ctx.strokeStyle = "#000"; ctx.strokeText(g.metin, W / 2, y); }
      else { ctx.fillStyle = "rgba(155,93,229,.13)"; ctx.fillText(g.metin, W / 2, y); ctx.setLineDash([10, 9]); ctx.lineWidth = 3; ctx.strokeStyle = "#9b5de5"; ctx.strokeText(g.metin, W / 2, y); }
    } else {
      const k = Math.min(W, H);
      ctx.beginPath();
      const cx = W / 2, cy = H / 2, r = k * 0.32;
      switch (g.sekil) {
        case "dikey": ctx.moveTo(cx, H * 0.15); ctx.lineTo(cx, H * 0.85); break;
        case "yatay": ctx.moveTo(W * 0.15, cy); ctx.lineTo(W * 0.85, cy); break;
        case "egik": ctx.moveTo(W * 0.25, H * 0.15); ctx.lineTo(W * 0.75, H * 0.85); break;
        case "zigzag": ctx.moveTo(W * 0.1, H * 0.7); for (let i = 1; i <= 6; i++) ctx.lineTo(W * (0.1 + i * 0.133), i % 2 ? H * 0.3 : H * 0.7); break;
        case "dalga": ctx.moveTo(W * 0.08, cy); for (let i = 0; i < 4; i++) { const x = W * (0.08 + i * 0.21); ctx.quadraticCurveTo(x + W * 0.105, i % 2 ? cy + H * 0.3 : cy - H * 0.3, x + W * 0.21, cy); } break;
        case "daire": ctx.arc(cx, cy, r, 0, Math.PI * 2); break;
        case "ucgen": ctx.moveTo(cx, cy - r); ctx.lineTo(cx + r * 1.05, cy + r * 0.8); ctx.lineTo(cx - r * 1.05, cy + r * 0.8); ctx.closePath(); break;
        case "kare": ctx.rect(cx - r, cy - r, r * 2, r * 2); break;
        case "kalp": ctx.moveTo(cx, cy + r); ctx.bezierCurveTo(cx - r * 1.6, cy - r * 0.2, cx - r * 0.6, cy - r * 1.3, cx, cy - r * 0.45); ctx.bezierCurveTo(cx + r * 0.6, cy - r * 1.3, cx + r * 1.6, cy - r * 0.2, cx, cy + r); break;
        case "spiral": { let a = 0; ctx.moveTo(cx, cy); for (; a < Math.PI * 6; a += 0.15) { const rr = (a / (Math.PI * 6)) * r * 1.15; ctx.lineTo(cx + rr * Math.cos(a), cy + rr * Math.sin(a)); } break; }
      }
      if (dolu) { ctx.lineWidth = k * 0.1; ctx.strokeStyle = "#000"; ctx.stroke(); }
      else { ctx.setLineDash([12, 10]); ctx.lineWidth = 5; ctx.strokeStyle = "#9b5de5"; ctx.stroke(); }
    }
    ctx.restore();
  }

  OYUN.CIZ.iz = (g, el, bitir) => {
    const k = document.createElement("div"); k.className = "iz-kutu";
    k.innerHTML = `<canvas class="iz-tuval"></canvas><div class="iz-cubuk"><i></i></div><div class="iz-ipucu">👆 Parmağınla noktalı çizginin üzerinden git.</div>
      <div class="iz-dugme"><button data-s>🧽 Sil</button><button class="ana" data-b>✅ Bitti</button></div>`;
    el.appendChild(k);
    const tv = k.querySelector("canvas"), ipucu = k.querySelector(".iz-ipucu"), cubuk = k.querySelector(".iz-cubuk i");
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let W = 0, H = 0, ctx, maske, kullanici, mctx, uctx, deneme = 0, bitti = false;
    const HUC = 6; // ölçüm hücresi (piksel)
    function kur() {
      const r = tv.getBoundingClientRect(); W = Math.round(r.width) || 360; H = Math.round(r.height) || 295;
      tv.width = W * dpr; tv.height = H * dpr; ctx = tv.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      maske = document.createElement("canvas"); maske.width = W; maske.height = H; mctx = maske.getContext("2d"); rehber(mctx, g, W, H, true);
      kullanici = document.createElement("canvas"); kullanici.width = W; kullanici.height = H; uctx = kullanici.getContext("2d");
      ciz();
    }
    function ciz() { ctx.clearRect(0, 0, W, H); rehber(ctx, g, W, H, false); ctx.drawImage(kullanici, 0, 0); }
    // Hücre bazında: harf hücreleri, kaplanan harf hücreleri, dışarı taşan mürekkep
    function olc() {
      const m = mctx.getImageData(0, 0, W, H).data, u = uctx.getImageData(0, 0, W, H).data;
      let harf = 0, kaplanan = 0, murekkep = 0, disari = 0;
      const gx = Math.ceil(W / HUC), gy = Math.ceil(H / HUC), mh = new Uint8Array(gx * gy), uh = new Uint8Array(gx * gy);
      for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) { const i = (y * W + x) * 4 + 3, c = Math.floor(y / HUC) * gx + Math.floor(x / HUC); if (m[i] > 60) mh[c] = 1; if (u[i] > 60) uh[c] = 1; }
      // maskenin bir hücre genişletilmiş hâli: rehberin hemen yanı taşma sayılmaz
      const yakin = (c) => { const cx = c % gx, cy = (c / gx) | 0; for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) { const x = cx + dx, y = cy + dy; if (x >= 0 && y >= 0 && x < gx && y < gy && mh[y * gx + x]) return true; } return false; };
      for (let c = 0; c < mh.length; c++) { if (mh[c]) { harf++; if (uh[c] || (uh[c - 1] && c % gx) || uh[c + 1] || uh[c - gx] || uh[c + gx]) kaplanan++; } if (uh[c]) { murekkep++; if (!yakin(c)) disari++; } }
      return { kapsam: harf ? kaplanan / harf : 0, isabet: murekkep ? 1 - disari / murekkep : 0 };
    }
    let cizgi = null, son = 0;
    const nokta = (e) => { const r = tv.getBoundingClientRect(); return [((e.clientX - r.left) / r.width) * W, ((e.clientY - r.top) / r.height) * H]; };
    tv.addEventListener("pointerdown", (e) => { if (bitti) return; e.preventDefault(); tv.setPointerCapture(e.pointerId); cizgi = nokta(e);
      uctx.lineCap = "round"; uctx.lineJoin = "round"; uctx.strokeStyle = pick(["#f15bb5", "#00bbf9", "#00b4d8", "#ff7f11", "#06d6a0"]); uctx.lineWidth = Math.max(14, Math.min(W, H) * 0.06);
      uctx.beginPath(); uctx.arc(cizgi[0], cizgi[1], uctx.lineWidth / 2, 0, Math.PI * 2); uctx.fillStyle = uctx.strokeStyle; uctx.fill(); ciz(); });
    tv.addEventListener("pointermove", (e) => { if (!cizgi || bitti) return; e.preventDefault(); const p = nokta(e);
      uctx.beginPath(); uctx.moveTo(cizgi[0], cizgi[1]); uctx.lineTo(p[0], p[1]); uctx.stroke(); cizgi = p; ciz();
      const t = Date.now(); if (t - son > 250) { son = t; cubuk.style.width = Math.round(Math.min(1, olc().kapsam / 0.7) * 100) + "%"; } });
    const birak = () => { if (!cizgi) return; cizgi = null; cubuk.style.width = Math.round(Math.min(1, olc().kapsam / 0.7) * 100) + "%"; };
    tv.addEventListener("pointerup", birak); tv.addEventListener("pointercancel", birak); tv.addEventListener("pointerleave", birak);
    k.querySelector("[data-s]").onclick = () => { if (bitti) return; uctx.clearRect(0, 0, W, H); cubuk.style.width = "0"; ipucu.textContent = "👆 Yeniden dene, noktalı çizgiyi takip et."; ciz(); };
    k.querySelector("[data-b]").onclick = () => {
      if (bitti) return;
      const o = olc(); deneme++;
      const iyi = o.kapsam >= 0.6 && o.isabet >= 0.55;
      if (iyi) { bitti = true; ipucu.textContent = "🌟 Harika yazdın!"; efekt("dogru"); bitir(true, g.ad); return; }
      if (deneme < 3) {
        const m = o.kapsam < 0.6 ? "Biraz daha! Noktalı çizginin her yerinden geç." : "Çizginin dışına çıkmışsın. Noktalı çizgiyi takip et.";
        ipucu.textContent = "💪 " + m; konus(m); return;
      }
      bitti = true; bitir(false, g.ad);
    };
    requestAnimationFrame(kur);
  };

  // ---------- Görev üreticileri ----------
  // 1. sınıf ilk okuma-yazma ses sırası (MEB): e l a k i n o m u t ü y ö r ı d s b z ç g ş c p h ğ v f j
  const SIRA = "elakinomutüyörıdsbzçgşcphğvfj".split("");
  const KELIME = ["el", "al", "at", "ana", "ela", "kale", "elma", "anne", "kalem", "okul", "masa", "top", "ayı", "kedi", "su", "ev", "gül", "bal", "kuş", "çiçek"];
  const harfG = (buyuk) => { const h = pick(SIRA), m = buyuk ? h.toLocaleUpperCase("tr") : h; return { tip: "iz", metin: m, ad: `"${m}" harfi`, soru: `"${m}" harfini yaz! Noktalı çizginin üzerinden parmağınla git.`, okunacak: `${h} harfini yaz`, cozum: `"${m}" harfi` }; };
  const ciftG = () => { const h = pick(SIRA), m = h.toLocaleUpperCase("tr") + h; return { tip: "iz", metin: m, ad: `"${m}"`, soru: `Büyük ve küçük "${h}" harfini yaz!`, okunacak: `büyük ve küçük ${h} harfini yaz`, cozum: m }; };
  const kelimeG = () => { const w = pick(KELIME); return { tip: "iz", metin: w, ad: `"${w}"`, soru: `"${w}" kelimesini yaz!`, okunacak: `${w} kelimesini yaz`, cozum: w }; };
  const rakamG = (ust) => { const r = String(Math.floor(Math.random() * (ust + 1))); return { tip: "iz", metin: r, ad: `${r} rakamı`, soru: `${r} rakamını yaz!`, okunacak: `${r} rakamını yaz`, cozum: r }; };
  const SEKIL = [["dikey", "Yukarıdan aşağı düz çizgi çiz!"], ["yatay", "Soldan sağa düz çizgi çiz!"], ["egik", "Eğik çizgi çiz!"], ["zigzag", "Zikzak çiz: dağ gibi inip çık!"], ["dalga", "Dalga çiz: deniz gibi kıvrıl!"], ["daire", "Daire çiz!"], ["ucgen", "Üçgen çiz!"], ["kare", "Kare çiz!"], ["kalp", "Kalp çiz!"], ["spiral", "Salyangoz evi gibi döne döne çiz!"]];
  const sekilG = (kolay) => { const [s, t] = pick(kolay ? SEKIL.slice(0, 6) : SEKIL); return { tip: "iz", sekil: s, ad: t.replace(/ çiz!.*/, ""), soru: t + " Noktalı çizginin üzerinden git.", okunacak: t, cozum: "" }; };

  const konu = (id, ad, ikon, bilgi, uret) => ({ id, ad, ikon, bilgi, uret });
  const ekleTema = (key, t) => { const D = DERS[key]; if (D && !D.temalar.some((x) => x.id === t.id)) D.temalar.push(t); };
  if (BIR) {
    ekleTema("turkce", { id: "tr-yaz", ad: "✍️ Harf Yazma Atölyesi", konular: [
      konu("tr-yaz-k", "Küçük Harfleri Yaz", "✍️", [["✍️", "Noktalı çizginin üzerinden parmağınla git."], ["⬇️", "Harfleri yukarıdan aşağıya, soldan sağa yazarız."]], () => harfG(false)),
      konu("tr-yaz-b", "Büyük Harfleri Yaz", "🔠", [["🔠", "Cümleye ve özel isimlere büyük harfle başlarız: Ali, Ankara."]], () => harfG(true)),
      konu("tr-yaz-c", "Büyük ve Küçük Harf", "🅰️", [["🅰️", "A ve a aynı sesi verir; biri büyük, biri küçük harftir."]], ciftG),
      konu("tr-yaz-w", "Kelime Yaz", "📝", [["📝", "Harfleri birleştirince kelime olur: e + l = el."]], kelimeG)
    ] });
    ekleTema("matematik", { id: "mt-yaz", ad: "✍️ Rakam Yazma", konular: [
      konu("mt-yaz-r", "Rakamları Yaz", "🔢", [["🔢", "0'dan 9'a kadar on rakam vardır."], ["✍️", "Rakamları yukarıdan başlayarak yazarız."]], () => rakamG(9)),
      konu("mt-yaz-s", "Şekil Çiz", "🔺", [["🔺", "Üçgenin 3, karenin 4 kenarı vardır. Dairenin köşesi yoktur."]], () => sekilG(false))
    ] });
  } else {
    ekleTema("sayi", { id: "sy-yaz", ad: "✍️ Çiz ve Yaz", konular: [
      konu("sy-yaz-c", "Çizgi Çalışması", "〰️", [["〰️", "Noktalı çizginin üzerinden parmağınla git. Yavaş ve dikkatli!"]], () => sekilG(true)),
      konu("sy-yaz-s", "Şekil Çiz", "🔺", [["⚪", "Daire yuvarlaktır."], ["🔺", "Üçgenin üç köşesi var."], ["🟦", "Karenin dört köşesi var."]], () => sekilG(false)),
      konu("sy-yaz-r", "Rakam Yaz", "🔢", [["🔢", "Rakamları yazmayı deneyelim: 1, 2, 3..."]], () => rakamG((window.YAS || 5) >= 5 ? 9 : 5))
    ] });
    if (DERS.dil) ekleTema("dil", { id: "dl-yaz", ad: "✍️ Harfini Yaz", konular: [
      konu("dl-yaz-h", "Harf Çiz", "🔤", [["🔤", "Harflerin şeklini parmağınla çiz. Okumaya hazırlanıyoruz!"]], () => harfG(true))
    ] });
  }
})();
