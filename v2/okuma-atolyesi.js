// 📖 Okuma Atölyesi — akıcı okuma ve okuma becerisi egzersizleri (1–12. sınıfta aynı dosya).
// Schultz tablosu, kelime/kelime grubu flaşı, işaretçili okuma + anlama soruları, kamera zihni, göz egzersizi, gelişim grafiği.
// Hız tek başına hedef değildir: her okumanın sonunda anlama soruları sorulur; hız ancak anlama iyiyse artırılır.
// Uygulamaya dokunmaz: kendi tam ekran katmanında açılır. Giriş: 5–12'de ana sayfa kartı (ANA_KARTLAR), 1–4'te ana menüye düğme.
(function () {
  if (window.OKUMA_ATOLYESI) return;
  window.OKUMA_ATOLYESI = true;
  const S = window.SINIF || {};
  const NO = parseInt(S.anahtar || document.title, 10) || 6;
  if (NO < 1) return;
  const ANAHTAR = "okuma-atolyesi-" + (S.anahtar || NO + "sinif");
  const veri = (() => { try { return JSON.parse(localStorage.getItem(ANAHTAR)) || {}; } catch (e) { return {}; } })();
  veri.schultz = veri.schultz || []; veri.flas = veri.flas || { ms: null, gecmis: [] }; veri.okuma = veri.okuma || []; veri.kamera = veri.kamera || []; veri.gun = veri.gun || {}; veri.olcum = veri.olcum || [];
  const kaydet = () => { try { localStorage.setItem(ANAHTAR, JSON.stringify(veri)); } catch (e) {} };
  const bugun = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const karistir = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const wc = (s) => String(s).split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  const isaretle = () => { veri.gun[bugun()] = (veri.gun[bugun()] || 0) + 1; kaydet(); };

  // Sınıf düzeyine göre yaklaşık akıcı okuma hedefi (dakikada doğru okunan kelime). Uygulamadaki HIKAYE_HEDEF varsa o kullanılır.
  const NORM = { 1: [40, 60], 2: [60, 80], 3: [80, 100], 4: [100, 120], 5: [110, 150], 6: [120, 160], 7: [130, 170], 8: [140, 180], 9: [150, 190], 10: [160, 200], 11: [170, 210], 12: [180, 220] };
  const hedef = (() => { const h = String(window.HIKAYE_HEDEF || "").match(/(\d+)\D+(\d+)/); return h ? [+h[1], +h[2]] : NORM[Math.min(12, NO)] || [120, 160]; })();
  const SCH = NO <= 2 ? 3 : NO <= 5 ? 4 : 5;

  // ---------- Metin kaynağı: sınıfın hikâyeleri; yoksa konu anlatımları ----------
  function metinler() {
    const l = [];
    (window.HIKAYELER || []).forEach((h) => {
      const sayfa = h.sayfalar || h.metin || [];
      const sor = (h.sorular || []).filter((q) => Array.isArray(q) && Array.isArray(q[2])).map((q) => ({ soru: q[0], dogru: q[1], secenek: karistir([q[1], ...q[2]]) }));
      if (sayfa.length) l.push({ baslik: h.baslik, metin: sayfa.join("\n"), sorular: sor });
    });
    // Hikâye yoksa Türkçe konu anlatımları (yabancı dil dersleri hariç; Türkçe/edebiyat ve sözel dersler önce)
    const YABANCI = /ingilizce|almanca|arapca|fransizca|ispanyolca|rusca|yabanci|^ing$|^alm$/i;
    const SOZEL = /turkce|edebiyat|sosyal|tarih|inkilap|cografya|din|felsefe|siyer|masal|okuma/i;
    const dersler = window.ICERIK ? Object.entries(ICERIK).filter(([dk]) => !YABANCI.test(dk)).sort((x, y) => SOZEL.test(y[0]) - SOZEL.test(x[0])).map((x) => x[1]) : [];
    if (!l.length) for (const D of dersler) for (const u of D.uniteler || []) for (const k of u.konular || []) {
      if (!k.anlatim || !k.anlatim.length || !k.sorular) continue;
      const tm = k.anlatim.join(" "); if (!/[çğıöşüÇĞİÖŞÜ]/.test(tm) || (tm.match(/[çğıöşü]/gi) || []).length < tm.length / 120) continue;
      l.push({ baslik: k.ad, metin: k.anlatim.join("\n"), sorular: k.sorular.slice(0, 5).map((q) => ({ soru: q.soru, dogru: q.secenekler[q.dogru], secenek: karistir(q.secenekler.slice()) })) });
    }
    return l;
  }
  // Okuma parçası: metnin bir bölümü (sınıfa göre uzunluk) + o metnin anlama soruları
  function okumaParcasi() {
    const l = metinler(); if (!l.length) return null;
    const hedefKelime = NO <= 2 ? 60 : NO <= 4 ? 120 : NO <= 8 ? 220 : 280;
    const yeterli = l.filter((x) => wc(x.metin) >= hedefKelime * 0.6 && x.sorular.length);
    const m = pick(yeterli.length ? yeterli : l.slice().sort((a, b) => wc(b.metin) - wc(a.metin)).slice(0, 12));
    const kelimeler = m.metin.split(/\s+/).filter(Boolean);
    return { baslik: m.baslik, kelimeler: kelimeler.slice(0, Math.max(hedefKelime, Math.min(kelimeler.length, hedefKelime * 1.4))), tam: kelimeler.length, sorular: karistir(m.sorular).slice(0, 3) };
  }
  function kelimeHavuzu() {
    const set = new Set(); metinler().forEach((m) => m.metin.split(/\s+/).forEach((w) => { const t = w.replace(/[^\p{L}'’]/gu, ""); if (t.length >= 2 && t.length <= 12) set.add(t.toLocaleLowerCase("tr")); }));
    return [...set];
  }
  function grupHavuzu(n) {
    const l = []; metinler().forEach((m) => { const w = m.metin.replace(/["“”]/g, "").split(/\s+/).filter(Boolean); for (let i = 0; i + n <= w.length; i += n) { const g = w.slice(i, i + n).join(" ").replace(/[.,;:!?]+$/g, ""); if (g.length <= 34 && !/[.!?]/.test(g.slice(0, -1))) l.push(g); } });
    return l;
  }

  // ---------- Katman (tam ekran) ----------
  const css = document.createElement("style");
  css.textContent = `
.oa-kat{position:fixed;inset:0;z-index:60;background:var(--bg,#fffaf0);color:var(--yazi,#2b2140);overflow:auto;font-family:inherit}
.oa-ust{position:sticky;top:0;display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--kart,#fff);border-bottom:1px solid var(--sinir,#eadfc8);z-index:2}
.oa-ust b{flex:1;font-size:19px}.oa-ust button{border:1px solid var(--sinir,#eadfc8);background:var(--kart,#fff);color:inherit;border-radius:12px;padding:8px 12px;font-size:16px}
.oa-ic{max-width:760px;margin:0 auto;padding:16px}
.oa-menu{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px}
.oa-serit{display:grid;gap:6px;background:color-mix(in srgb,#0ea5e9 9%,var(--kart,#fff));border:1px solid color-mix(in srgb,#0ea5e9 35%,var(--sinir,#ddd));border-radius:16px;padding:12px 14px;margin-bottom:12px;font-size:16px;line-height:1.45}
.oa-serit b{font-size:17px}.oa-bant{position:relative;height:12px;border-radius:8px;background:var(--sinir,#e5e7eb);margin:6px 0}.oa-bant i{position:absolute;top:0;bottom:0;background:#22c55e;border-radius:8px;opacity:.55}.oa-bant b{position:absolute;top:-5px;width:6px;height:22px;margin-left:-3px;border-radius:3px;background:#1d4ed8}
.oa-kart.olc{background:linear-gradient(135deg,#16a34a,#0ea5e9)!important;color:#fff!important;border:none!important}.oa-kart.olc small{color:#f0fdf4!important}
.oa-sonuc{text-align:center;font-size:17px;line-height:1.5}.oa-karolar{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin:10px 0}.oa-karolar>div{background:var(--kart,#fff);border:1px solid var(--sinir,#ddd);border-radius:14px;padding:10px;display:flex;flex-direction:column;align-items:center}.oa-karolar b{font-size:28px;line-height:1.2}.oa-karolar small{color:var(--soluk,#6b7280);font-size:13px}
.oa-kart{border:2px solid var(--sinir,#eadfc8);background:var(--kart,#fff);border-radius:18px;padding:16px;text-align:left;font-size:17px;color:inherit;box-shadow:0 4px 0 rgba(0,0,0,.06)}
.oa-kart b{display:block;font-size:19px;margin:4px 0}.oa-kart small{color:var(--soluk,#7a6f8f)}.oa-kart .i{font-size:34px}
/*oa-telefon*/@media (max-width:560px){.oa-ic{padding:12px}.oa-menu{grid-template-columns:1fr;gap:8px}.oa-kart{display:grid;grid-template-columns:44px 1fr;column-gap:12px;align-items:center;padding:10px 14px;font-size:15px;border-radius:14px}.oa-kart .i{grid-row:1/3;font-size:28px;text-align:center}.oa-kart b{font-size:16.5px;margin:0}.oa-kart small{font-size:13px;line-height:1.35}.oa-btn{padding:10px 16px;font-size:16px}.oa-ust{padding:8px 12px}}
.oa-kart.ana{background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;border:none}.oa-kart.ana small{color:#e0e7ff}
.oa-btn{display:inline-block;border:none;border-radius:14px;padding:13px 20px;font-size:18px;font-weight:700;background:#0ea5e9;color:#fff;margin:6px 4px}
.oa-btn.ik{background:var(--kart,#fff);color:inherit;border:2px solid var(--sinir,#eadfc8)}
.oa-not{color:var(--soluk,#7a6f8f);font-size:15px}
.oa-sch{display:grid;gap:6px;margin:12px auto;max-width:440px;position:relative}
.oa-sch button{aspect-ratio:1;font-size:clamp(20px,6vw,34px);font-weight:800;border-radius:12px;border:2px solid var(--sinir,#eadfc8);background:var(--kart,#fff);color:inherit}
.oa-sch button.ok{background:#dcfce7;border-color:#22c55e;color:#15803d}
.oa-sch::after{content:"";position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px;border-radius:50%;background:#ef4444;pointer-events:none}
.oa-flas{min-height:140px;display:flex;align-items:center;justify-content:center;font-size:clamp(26px,7vw,48px);font-weight:800;border:2px dashed var(--sinir,#eadfc8);border-radius:18px;margin:14px 0;text-align:center;padding:10px}
.oa-sec{display:grid;gap:10px;grid-template-columns:1fr 1fr}
.oa-sec button{padding:14px;font-size:clamp(16px,4.4vw,22px);border-radius:14px;border:2px solid var(--sinir,#eadfc8);background:var(--kart,#fff);color:inherit;font-weight:700}
.oa-sec button.d{background:#dcfce7;border-color:#22c55e}.oa-sec button.y{background:#fee2e2;border-color:#ef4444}
.oa-metin{font-size:clamp(19px,4.6vw,25px);line-height:1.8;background:var(--kart,#fff);border-radius:18px;padding:18px;border:1px solid var(--sinir,#eadfc8)}
.oa-metin span{border-radius:6px;transition:background .12s}.oa-metin span.on{background:#fde047;color:#111}.oa-metin span.gecti{color:var(--soluk,#9a8fae)}
.oa-hiz{display:flex;align-items:center;gap:10px;justify-content:center;margin:10px 0;font-size:18px}
.oa-hiz button{width:52px;height:52px;border-radius:14px;font-size:24px;border:2px solid var(--sinir,#eadfc8);background:var(--kart,#fff);color:inherit}
.oa-goz{position:relative;height:300px;border-radius:18px;background:var(--kart,#fff);border:1px solid var(--sinir,#eadfc8);overflow:hidden}
.oa-goz i{position:absolute;width:34px;height:34px;margin:-17px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fff 0 18%,#f43f5e 20%)}
.oa-kam{display:grid;gap:8px;margin:12px auto;max-width:420px}.oa-kam div{aspect-ratio:1;font-size:clamp(28px,9vw,48px);display:flex;align-items:center;justify-content:center;background:var(--kart,#fff);border-radius:12px;border:2px solid var(--sinir,#eadfc8)}
.oa-graf{display:flex;align-items:flex-end;gap:6px;height:150px;padding:8px;border:1px solid var(--sinir,#eadfc8);border-radius:14px;background:var(--kart,#fff);margin:8px 0}
.oa-graf div{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;font-size:12px}
.oa-graf div i{width:100%;border-radius:6px 6px 0 0;background:#0ea5e9;min-height:2px}
.oa-hedefcizgi{font-size:13px;color:var(--soluk,#7a6f8f)}`;
  document.head.appendChild(css);

  let kat = null, zam = [], adimlar = null;
  const temizle = () => { zam.forEach((z) => (clearInterval(z), clearTimeout(z))); zam = []; };
  function ac(fn, baslik) {
    temizle();
    if (!kat) { kat = document.createElement("div"); kat.className = "oa-kat"; document.body.appendChild(kat); document.body.style.overflow = "hidden"; }
    kat.innerHTML = `<div class="oa-ust">${fn === menu ? "" : '<button data-geri>← Atölye</button>'}<b>📖 ${esc(baslik || "Okuma Atölyesi")}</b><button data-kapat>✕ Kapat</button></div><div class="oa-ic"></div>`;
    kat.querySelector("[data-kapat]").onclick = kapat;
    const g = kat.querySelector("[data-geri]"); if (g) g.onclick = () => { adimlar = null; ac(menu); };
    kat.scrollTop = 0; fn(kat.querySelector(".oa-ic"));
  }
  function kapat() { temizle(); adimlar = null; if (kat) kat.remove(); kat = null; document.body.style.overflow = ""; }
  const sonraki = (el, mesaj) => {
    if (adimlar && adimlar.length) { const [f, b] = adimlar.shift(); el.insertAdjacentHTML("beforeend", `<p style="text-align:center"><button class="oa-btn" data-son>Sıradaki egzersiz: ${esc(b)} →</button></p>`); el.querySelector("[data-son]").onclick = () => ac(f, b); }
    else { if (adimlar) { adimlar = null; isaretle(); el.insertAdjacentHTML("beforeend", `<p style="text-align:center;font-size:20px">🎉 Günlük antrenman tamam! Yarın yine gel.</p>`); } el.insertAdjacentHTML("beforeend", `<p style="text-align:center"><button class="oa-btn ik" data-men>Atölyeye dön</button></p>`); el.querySelector("[data-men]").onclick = () => ac(menu); }
    if (mesaj) el.insertAdjacentHTML("afterbegin", mesaj);
  };

  // ---------- Kendi hızında okuma ölçümü ----------
  const etkili = (x) => Math.round((x.hiz * (x.anlama || 0)) / 100);
  const rekor = () => veri.olcum.filter((x) => x.gecerli !== false).reduce((m, x) => Math.max(m, etkili(x)), 0);
  const gunOnce = (t) => Math.round((new Date(bugun()) - new Date(t)) / 864e5);
  function olcumAlt() {
    const son = veri.olcum.slice(-1)[0];
    if (!son) return "Kendi hızında oku, kaç kelime okuduğunu ve ne kadar anladığını öğren. Haftada bir ölç, gelişimini gör.";
    const g = gunOnce(son.t);
    return `Son: ${son.hiz} kelime/dk · anlama %${son.anlama} · rekor ${rekor()}${g >= 7 ? " · ⏰ Yeniden ölçme zamanı!" : g === 0 ? " · bugün ölçtün ✅" : ` · ${g} gün önce`}`;
  }
  function ozetSerit() {
    const son = veri.olcum.slice(-1)[0], ilk = veri.olcum[0];
    if (!son) return `<div class="oa-serit"><b>📖 Okuma hızını hiç ölçmedin.</b><span>Önce "Okuma Hızımı Ölç" ile başla; ${NO}. sınıf hedefi dakikada <b>${hedef[0]}–${hedef[1]}</b> kelime, anlama en az %80.</span></div>`;
    const fark = veri.olcum.length > 1 ? son.hiz - ilk.hiz : 0;
    const yer = Math.max(0, Math.min(100, ((son.hiz - hedef[0] * 0.5) / (hedef[1] * 1.25 - hedef[0] * 0.5)) * 100));
    return `<div class="oa-serit"><b>📖 Okuma hızın: ${son.hiz} kelime/dk · Anlama: %${son.anlama}</b>
      <div class="oa-bant"><i style="left:${((hedef[0] - hedef[0] * 0.5) / (hedef[1] * 1.25 - hedef[0] * 0.5)) * 100}%;width:${((hedef[1] - hedef[0]) / (hedef[1] * 1.25 - hedef[0] * 0.5)) * 100}%"></i><b style="left:${yer}%"></b></div>
      <span>Yeşil bölge ${NO}. sınıf hedefi (${hedef[0]}–${hedef[1]}).${fark > 0 ? ` İlk ölçümünden bu yana <b>+${fark}</b> kelime/dk 👏` : ""}</span></div>`;
  }
  function olc(el) {
    const p = okumaParcasi(); if (!p) { el.innerHTML = "<p>Bu sınıfta okunacak metin bulunamadı.</p>"; return sonraki(el); }
    const kelime = p.kelimeler.filter((x) => /[\p{L}\p{N}]/u.test(x)).length;
    el.innerHTML = `<div class="oa-serit"><b>Nasıl ölçülür?</b><span>1) "Okumaya başla"ya bas, metin görünsün. 2) Her zamanki gibi, <b>anlayarak</b> sessizce oku. 3) Bitince "Bitirdim"e bas. 4) Metne bakmadan ${p.sorular.length || 3} soruyu cevapla. Acele etme: hız kadar anlamak da puanına sayılır.</span></div>
      <h3 style="margin:10px 0 4px">${esc(p.baslik)}</h3><p class="oa-not">${kelime} kelime</p>
      <p style="text-align:center"><button class="oa-btn" id="oaOBas">▶ Okumaya başla</button></p>
      <div class="oa-metin" id="oaOM" style="display:none">${esc(p.kelimeler.join(" "))}</div>
      <p style="text-align:center"><button class="oa-btn" id="oaOBit" style="display:none;background:#16a34a">✅ Bitirdim</button></p>`;
    let bas = 0;
    el.querySelector("#oaOBas").onclick = (e) => { e.target.style.display = "none"; el.querySelector("#oaOM").style.display = ""; el.querySelector("#oaOBit").style.display = ""; bas = Date.now(); };
    el.querySelector("#oaOBit").onclick = () => {
      const sn = (Date.now() - bas) / 1000, hiz = Math.round(kelime / Math.max(sn / 60, 0.05)), gecerli = sn >= 8 && hiz <= 600;
      kat.scrollTop = 0; let n = 0, d = 0; const Q = p.sorular.slice(0, 4);
      if (!Q.length) { veri.olcum.push({ t: bugun(), hiz, anlama: 100, kelime, sn: Math.round(sn), gecerli }); kaydet(); el.innerHTML = `<p>✅ ${hiz} kelime/dk</p>`; return sonraki(el); }
      el.innerHTML = `<h3>Ne kadar anladın?</h3><p class="oa-not">Metne geri bakmadan cevapla.</p><div id="oaQ"></div>`;
      const soru = () => {
        if (n >= Q.length) return sonuc(Math.round((d / Q.length) * 100));
        const q = Q[n], k = el.querySelector("#oaQ");
        k.innerHTML = `<p style="font-size:20px"><b>${n + 1}/${Q.length}.</b> ${esc(q.soru)}</p><div class="oa-sec" style="grid-template-columns:1fr">${q.secenek.map((x) => `<button>${esc(x)}</button>`).join("")}</div>`;
        k.querySelectorAll("button").forEach((b) => (b.onclick = () => { const ok = b.textContent === String(q.dogru); if (ok) d++; k.querySelectorAll("button").forEach((y) => { y.disabled = true; if (y.textContent === String(q.dogru)) y.classList.add("d"); }); if (!ok) b.classList.add("y"); n++; zam.push(setTimeout(soru, 900)); }));
      };
      const sonuc = (anlama) => {
        const onceRekor = rekor(), onceki = veri.olcum.filter((x) => x.gecerli !== false).slice(-1)[0];
        const x = { t: bugun(), hiz, anlama, kelime, sn: Math.round(sn), gecerli }; veri.olcum.push(x); veri.olcum = veri.olcum.slice(-100); isaretle(); kaydet();
        const e = etkili(x), yeniRekor = gecerli && e > onceRekor && onceRekor > 0, hedefSonraki = Math.ceil((Math.max(gecerli ? e : 0, onceRekor, 20) * 1.05) / 5) * 5;
        const tavsiye = !gecerli ? "⚠️ Metni çok hızlı geçtin; bu ölçüm rekora sayılmadı. Bir dahakinde gerçekten okuyarak dene."
          : anlama < 70 ? "🐢 Hızlı okudun ama anlaman düştü. Bir dahaki ölçümde biraz yavaşla; önce anlamak gelir."
          : hiz < hedef[0] ? "🌱 Anlaman iyi! Hızını artırmak için her gün <b>Günlük Antrenman</b> yap; 2 hafta sonra yeniden ölç."
          : hiz > hedef[1] && anlama >= 80 ? "🚀 Sınıf hedefinin üstündesin! Daha uzun metinlerle anlamayı korumaya çalış."
          : "👍 Sınıf hedefindesin. Düzenli okumaya devam; haftada bir ölç.";
        el.innerHTML = `<div class="oa-sonuc">
            <div style="font-size:46px">${!gecerli ? "⚠️" : yeniRekor ? "🏆" : anlama >= 80 ? "🌟" : anlama >= 60 ? "👍" : "📘"}</div>
            ${yeniRekor ? `<p style="font-size:22px;font-weight:800;color:#16a34a">Yeni rekor!</p>` : ""}
            <div class="oa-karolar"><div><small>Okuma hızı</small><b>${hiz}</b><small>kelime/dk</small></div><div><small>Anlama</small><b>%${anlama}</b><small>${d}/${Q.length} doğru</small></div><div><small>Etkili okuma</small><b>${e}</b><small>hız × anlama</small></div></div>
            ${onceki && gecerli ? `<p>Geçen ölçüme göre: hız <b>${hiz - onceki.hiz >= 0 ? "+" : ""}${hiz - onceki.hiz}</b> kelime/dk, anlama <b>${anlama - onceki.anlama >= 0 ? "+" : ""}${anlama - onceki.anlama}</b> puan.</p>` : gecerli ? "<p>Bu senin ilk ölçümün. Bundan sonraki ölçümler bununla karşılaştırılacak.</p>" : ""}
            <p>${tavsiye}</p>
            <p class="oa-not">Sonraki hedefin: etkili okuma <b>${hedefSonraki}</b>. ${NO}. sınıf hedefi: ${hedef[0]}–${hedef[1]} kelime/dk, anlama %80+.</p></div>`;
        sonraki(el);
      };
      soru();
    };
  }

  // ---------- Menü ----------
  function menu(el) {
    const son = veri.okuma.slice(-1)[0], seri = (() => { let n = 0; const d = new Date(); for (let i = 0; i < 60; i++) { const k = new Date(d - i * 864e5); const s = k.getFullYear() + "-" + String(k.getMonth() + 1).padStart(2, "0") + "-" + String(k.getDate()).padStart(2, "0"); if (veri.gun[s]) n++; else if (i > 0) break; } return n; })();
    el.innerHTML = `
      ${ozetSerit()}
      <div class="oa-menu">
        <button class="oa-kart ana olc" data-g="olc"><span class="i">⏱️</span><b>Okuma Hızımı Ölç</b><small>${olcumAlt()}</small></button>
        <button class="oa-kart ana" data-g="gunluk"><span class="i">🏋️</span><b>Günlük Antrenman</b><small>Göz egzersizi → Schultz → Kelime flaşı → İşaretçili okuma · ~8 dk${seri ? ` · 🔥 ${seri} gün` : ""}</small></button>
        <button class="oa-kart" data-g="okuma"><span class="i">👉</span><b>İşaretçili Okuma</b><small>Metin seçtiğin hızda vurgulanır, sonra anlama soruları${son ? ` · son: ${son.hiz} k/dk, %${son.anlama}` : ""}</small></button>
        <button class="oa-kart" data-g="flas"><span class="i">⚡</span><b>Kelime Flaşı</b><small>${NO <= 2 ? "Kelimeyi bir bakışta tanı" : "Kelime gruplarını bir bakışta oku"}${veri.flas.ms ? ` · ${veri.flas.ms} ms` : ""}</small></button>
        <button class="oa-kart" data-g="schultz"><span class="i">🔢</span><b>Schultz Tablosu</b><small>Gözünü ortada tut, sayıları sırayla bul${veri.schultz.length ? ` · en iyi: ${Math.min(...veri.schultz.map((x) => x.sn))} sn` : ""}</small></button>
        <button class="oa-kart" data-g="kamera"><span class="i">📸</span><b>Kamera Zihni</b><small>Kısa süre göreni hatırla</small></button>
        <button class="oa-kart" data-g="goz"><span class="i">👀</span><b>Göz Egzersizi</b><small>Başını kıpırdatmadan topu gözünle izle · 30 sn</small></button>
        <button class="oa-kart" data-g="gelisim"><span class="i">📈</span><b>Gelişimim</b><small>Okuma hızı, anlama ve egzersiz sonuçların</small></button>
      </div>
      <p class="oa-not">${NO}. sınıf için yaklaşık akıcı okuma hedefi: dakikada <b>${hedef[0]}–${hedef[1]}</b> kelime, anlama en az %80. Her çocuğun hızı farklıdır; önemli olan kendi gelişimin.</p>`;
    const G = { olc: [olc, "Okuma Hızımı Ölç"], okuma: [isaretci, "İşaretçili Okuma"], flas: [flas, "Kelime Flaşı"], schultz: [schultz, "Schultz Tablosu"], kamera: [kamera, "Kamera Zihni"], goz: [goz, "Göz Egzersizi"], gelisim: [gelisim, "Gelişimim"] };
    el.querySelectorAll("[data-g]").forEach((b) => (b.onclick = () => {
      if (b.dataset.g === "gunluk") { adimlar = [[schultz, "Schultz Tablosu"], [flas, "Kelime Flaşı"], [isaretci, "İşaretçili Okuma"]]; return ac(goz, "Göz Egzersizi"); }
      ac(...G[b.dataset.g]);
    }));
  }

  // ---------- Göz egzersizi ----------
  function goz(el) {
    el.innerHTML = `<p>Başını kıpırdatma, kırmızı topu yalnızca <b>gözlerinle</b> izle. 30 saniye sürer.</p><div class="oa-goz"><i></i></div><p class="oa-not" id="oaGozS" style="text-align:center">Başlıyor…</p>`;
    const top = el.querySelector("i"), alan = el.querySelector(".oa-goz"), bas = Date.now(), SURE = window.__hizliTest ? 1500 : 30000;
    const yollar = [(t) => [0.5 + 0.42 * Math.sin(t * 2), 0.5], (t) => [0.5, 0.5 + 0.4 * Math.sin(t * 2)], (t) => [0.5 + 0.4 * Math.cos(t * 1.6), 0.5 + 0.38 * Math.sin(t * 1.6)], (t) => [0.5 + 0.42 * Math.sin(t * 1.5), 0.5 + 0.38 * Math.sin(t * 3)]];
    const z = setInterval(() => {
      const gecen = Date.now() - bas, t = gecen / 1000, y = yollar[Math.min(3, Math.floor(gecen / (SURE / 4)))](t);
      top.style.left = y[0] * alan.clientWidth + "px"; top.style.top = y[1] * alan.clientHeight + "px";
      const s = el.querySelector("#oaGozS"); if (s) s.textContent = `${Math.max(0, Math.ceil((SURE - gecen) / 1000))} sn`;
      if (gecen >= SURE) { clearInterval(z); s.textContent = "✅ Aferin! Gözlerini birkaç kez kırpıştır ve dinlendir."; sonraki(el); }
    }, 30); zam.push(z);
  }

  // ---------- Schultz tablosu ----------
  function schultz(el) {
    const n = SCH * SCH, dizi = karistir([...Array(n)].map((_, i) => i + 1)); let sira = 1, hata = 0, bas = null;
    el.innerHTML = `<p>Gözünü ortadaki <b style="color:#ef4444">kırmızı noktada</b> tut. Sayıları <b>1'den ${n}'e</b> kadar sırayla bul ve dokun. Gözünü noktadan ayırmamaya çalış; çevreyi görmeyi öğreneceksin.</p>
      <div class="oa-hiz"><b id="oaSchHedef">Bul: 1</b> · <span id="oaSchSure">0.0 sn</span></div>
      <div class="oa-sch" style="grid-template-columns:repeat(${SCH},1fr)">${dizi.map((x) => `<button data-x="${x}">${x}</button>`).join("")}</div>`;
    const t = setInterval(() => { if (bas) el.querySelector("#oaSchSure").textContent = ((Date.now() - bas) / 1000).toFixed(1) + " sn"; }, 100); zam.push(t);
    el.querySelectorAll("[data-x]").forEach((b) => (b.onclick = () => {
      if (!bas) bas = Date.now();
      if (+b.dataset.x !== sira) { hata++; b.animate([{ transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "none" }], 200); return; }
      b.classList.add("ok"); sira++;
      if (sira > n) {
        clearInterval(t); const sn = +((Date.now() - bas) / 1000).toFixed(1), eniyi = veri.schultz.length ? Math.min(...veri.schultz.map((x) => x.sn)) : null;
        veri.schultz.push({ t: bugun(), sn, n, hata }); veri.schultz = veri.schultz.slice(-60); kaydet();
        el.querySelector(".oa-hiz").innerHTML = `✅ <b>${sn} sn</b> · ${hata} hata ${eniyi && sn < eniyi ? "· 🏆 Yeni rekor!" : eniyi ? `· en iyin ${eniyi} sn` : ""}`;
        sonraki(el);
      } else el.querySelector("#oaSchHedef").textContent = "Bul: " + sira;
    }));
  }

  // ---------- Kelime flaşı (uyarlanan süre) ----------
  function flas(el) {
    const grup = NO <= 2 ? 1 : NO <= 4 ? 2 : NO <= 8 ? 3 : 4;
    const havuz = grup === 1 ? kelimeHavuzu().filter((w) => w.length <= (NO === 1 ? 5 : 7)) : grupHavuzu(grup);
    if (havuz.length < 8) { el.innerHTML = "<p>Bu sınıfta henüz yeterli metin yok.</p>"; return sonraki(el); }
    let ms = veri.flas.ms || (NO <= 2 ? 900 : NO <= 5 ? 700 : 550), tur = 0, dogru = 0; const TUR = 10;
    el.innerHTML = `<p>${grup === 1 ? "Kelime" : "Kelime grubu"} ekranda <b>çok kısa</b> görünecek. Gördüğünü aşağıdan seç. Doğru bildikçe hızlanır, yanlışta yavaşlar.</p><div class="oa-hiz">Süre: <b id="oaMs">${ms}</b> ms · <span id="oaTur">1/${TUR}</span></div><div class="oa-flas" id="oaF">Hazır…</div><div class="oa-sec" id="oaS"></div>`;
    const turBasla = () => {
      if (tur >= TUR) {
        veri.flas.ms = ms; veri.flas.gecmis.push({ t: bugun(), ms, dogru }); veri.flas.gecmis = veri.flas.gecmis.slice(-60); kaydet();
        el.querySelector("#oaF").innerHTML = `✅ ${dogru}/${TUR} doğru · yeni süren <b>${ms} ms</b>`; el.querySelector("#oaS").innerHTML = ""; return sonraki(el);
      }
      tur++; el.querySelector("#oaTur").textContent = `${tur}/${TUR}`; el.querySelector("#oaS").innerHTML = "";
      const d = pick(havuz), benzer = karistir(havuz.filter((x) => x !== d && Math.abs(x.length - d.length) <= 4)).slice(0, 3);
      const f = el.querySelector("#oaF"); f.textContent = "＋";
      zam.push(setTimeout(() => { f.textContent = d; zam.push(setTimeout(() => {
        f.textContent = "❓"; const s = el.querySelector("#oaS");
        karistir([d, ...benzer]).forEach((x) => { const b = document.createElement("button"); b.textContent = x; b.onclick = () => {
          const ok = x === d; s.querySelectorAll("button").forEach((y) => { y.disabled = true; if (y.textContent === d) y.classList.add("d"); }); if (!ok) b.classList.add("y");
          if (ok) { dogru++; ms = Math.max(120, Math.round(ms * 0.88)); } else ms = Math.min(1500, Math.round(ms * 1.15));
          el.querySelector("#oaMs").textContent = ms; zam.push(setTimeout(turBasla, 650));
        }; s.appendChild(b); });
      }, ms)); }, 600));
    };
    turBasla();
  }

  // ---------- İşaretçili okuma + anlama ----------
  function isaretci(el) {
    const p = okumaParcasi(); if (!p) { el.innerHTML = "<p>Bu sınıfta okunacak metin bulunamadı.</p>"; return sonraki(el); }
    const sonHiz = veri.okuma.length ? veri.okuma[veri.okuma.length - 1].oneri : null;
    let hiz = sonHiz || hedef[0], i = 0, calis = false, bas = 0, z = null;
    const grup = NO <= 2 ? 1 : NO <= 5 ? 2 : 3;
    const w = p.kelimeler, kelime = w.filter((x) => /[\p{L}\p{N}]/u.test(x)).length;
    el.innerHTML = `<h3 style="margin:4px 0">${esc(p.baslik)}</h3>
      <p class="oa-not">Sarı vurgu metinde ilerleyecek; gözünle onu takip et ve dikkatle oku. Sonunda ${p.sorular.length} anlama sorusu var. <b>${kelime}</b> kelime.</p>
      <div class="oa-hiz"><button data-h="-10" aria-label="Yavaş">🐢</button><span>Hız: <b id="oaH">${hiz}</b> kelime/dk</span><button data-h="10" aria-label="Hızlı">🐇</button></div>
      <p style="text-align:center"><button class="oa-btn" id="oaBas">▶ Başla</button></p>
      <div class="oa-metin">${w.map((x, k) => `<span data-k="${k}">${esc(x)}</span>`).join(" ")}</div>`;
    const sp = el.querySelectorAll(".oa-metin span");
    el.querySelectorAll("[data-h]").forEach((b) => (b.onclick = () => { hiz = Math.max(20, Math.min(400, hiz + +b.dataset.h)); el.querySelector("#oaH").textContent = hiz; if (calis) { clearInterval(z); z = setInterval(adim, 60000 / hiz * grup); zam.push(z); } }));
    const adim = () => {
      for (let k = i - grup; k < i; k++) if (sp[k]) { sp[k].classList.remove("on"); sp[k].classList.add("gecti"); }
      if (i >= sp.length) { clearInterval(z); return bitti(); }
      for (let k = i; k < i + grup && k < sp.length; k++) sp[k].classList.add("on");
      if (sp[i] && sp[i].offsetTop - kat.scrollTop > kat.clientHeight * 0.7) kat.scrollTo({ top: sp[i].offsetTop - kat.clientHeight * 0.35, behavior: "smooth" });
      i += grup;
    };
    el.querySelector("#oaBas").onclick = (e) => { if (calis) return; calis = true; e.target.style.display = "none"; bas = Date.now(); adim(); z = setInterval(adim, 60000 / hiz * grup); zam.push(z); };
    const bitti = () => {
      const dk = (Date.now() - bas) / 60000, gercek = Math.round(kelime / Math.max(dk, 0.05));
      if (!p.sorular.length) { veri.okuma.push({ t: bugun(), hiz: gercek, anlama: null, oneri: hiz }); kaydet(); el.insertAdjacentHTML("beforeend", `<p>✅ Okuma tamam: ${gercek} kelime/dk</p>`); return sonraki(el); }
      kat.scrollTop = 0; let n = 0, d = 0;
      el.innerHTML = `<h3>Anlama soruları</h3><p class="oa-not">Metne geri bakmadan cevapla.</p><div id="oaQ"></div>`;
      const soru = () => {
        if (n >= p.sorular.length) {
          const yuzde = Math.round((d / p.sorular.length) * 100), oneri = yuzde >= 80 ? hiz + 10 : yuzde >= 60 ? hiz : Math.max(20, hiz - 10);
          veri.okuma.push({ t: bugun(), hiz: gercek, anlama: yuzde, oneri }); veri.okuma = veri.okuma.slice(-80); kaydet();
          el.innerHTML = `<div class="oa-metin" style="text-align:center"><div style="font-size:42px">${yuzde >= 80 ? "🌟" : yuzde >= 60 ? "👍" : "📘"}</div>
            <p>Okuma hızın: <b>${gercek}</b> kelime/dk · Anlama: <b>%${yuzde}</b></p>
            <p class="oa-not">${yuzde >= 80 ? `Harika! Hem hızlı hem anlayarak okudun. Bir dahaki okumada hızı <b>${oneri}</b> kelime/dk'ya çıkaracağız.` : yuzde >= 60 ? "İyi! Aynı hızda biraz daha pratik yapalım; anlama %80'i geçince hızlanacağız." : `Hızlı okuyunca anlamak zorlaştı. Bir dahaki okumada hızı <b>${oneri}</b> kelime/dk'ya indireceğiz. Anlamak, hızdan önemlidir.`}</p></div>`;
          return sonraki(el);
        }
        const q = p.sorular[n], k = el.querySelector("#oaQ");
        k.innerHTML = `<p style="font-size:20px"><b>${n + 1}.</b> ${esc(q.soru)}</p><div class="oa-sec" style="grid-template-columns:1fr">${q.secenek.map((s) => `<button>${esc(s)}</button>`).join("")}</div>`;
        k.querySelectorAll("button").forEach((b) => (b.onclick = () => { const ok = b.textContent === String(q.dogru); if (ok) d++; k.querySelectorAll("button").forEach((y) => { y.disabled = true; if (y.textContent === String(q.dogru)) y.classList.add("d"); }); if (!ok) b.classList.add("y"); n++; zam.push(setTimeout(soru, 900)); }));
      };
      soru();
    };
  }

  // ---------- Kamera zihni ----------
  const EMO = ["🐶", "🐱", "🍎", "🚗", "⚽", "🌙", "⭐", "🌳", "🏠", "🎈", "📚", "🐟", "🍌", "✏️", "🔑", "🎁", "🐝", "🌸", "☂️", "🚲"];
  function kamera(el) {
    const n = NO <= 2 ? 4 : NO <= 5 ? 6 : NO <= 8 ? 8 : 9, sut = n <= 4 ? 2 : 3, sure = NO <= 2 ? 3500 : NO <= 5 ? 3000 : 2500;
    let tur = 0, dogru = 0; const TUR = 5;
    el.innerHTML = `<p>Resimler <b>${sure / 1000} saniye</b> görünecek, sonra kaybolacak. Gördüklerini hatırla!</p><div class="oa-hiz" id="oaKT"></div><div class="oa-kam" id="oaK" style="grid-template-columns:repeat(${sut},1fr)"></div><div id="oaKS"></div>`;
    const turBasla = () => {
      if (tur >= TUR) { veri.kamera.push({ t: bugun(), dogru, toplam: TUR }); veri.kamera = veri.kamera.slice(-60); kaydet(); el.querySelector("#oaKS").innerHTML = `<p style="text-align:center;font-size:20px">✅ ${dogru}/${TUR} doğru</p>`; el.querySelector("#oaK").innerHTML = ""; return sonraki(el); }
      tur++; el.querySelector("#oaKT").textContent = `Tur ${tur}/${TUR}`;
      const gos = karistir(EMO).slice(0, n), k = el.querySelector("#oaK"), s = el.querySelector("#oaKS"); s.innerHTML = "";
      k.innerHTML = gos.map((e) => `<div>${e}</div>`).join("");
      zam.push(setTimeout(() => {
        k.innerHTML = gos.map(() => "<div>❔</div>").join("");
        const tip = Math.random() < 0.5 && NO > 2;
        const dogruC = tip ? pick(EMO.filter((e) => !gos.includes(e))) : pick(gos), digerleri = tip ? karistir(gos).slice(0, 3) : karistir(EMO.filter((e) => !gos.includes(e))).slice(0, 3);
        s.innerHTML = `<p style="font-size:19px;text-align:center">${tip ? "Hangisi <b>yoktu</b>?" : "Hangisi <b>vardı</b>?"}</p><div class="oa-sec" style="grid-template-columns:repeat(4,1fr)">${karistir([dogruC, ...digerleri]).map((e) => `<button style="font-size:34px">${e}</button>`).join("")}</div>`;
        s.querySelectorAll("button").forEach((b) => (b.onclick = () => { const ok = b.textContent === dogruC; if (ok) dogru++; s.querySelectorAll("button").forEach((y) => { y.disabled = true; if (y.textContent === dogruC) y.classList.add("d"); }); if (!ok) b.classList.add("y"); k.innerHTML = gos.map((e) => `<div>${e}</div>`).join(""); zam.push(setTimeout(turBasla, 1300)); }));
      }, sure));
    };
    turBasla();
  }

  // ---------- Gelişim ----------
  function gelisim(el) {
    const ok = veri.okuma.slice(-12), enCok = Math.max(hedef[1], ...ok.map((x) => x.hiz), 1);
    const sch = veri.schultz.slice(-12), schMax = Math.max(1, ...sch.map((x) => x.sn));
    const ol = veri.olcum.slice(-12), olMax = Math.max(hedef[1], ...ol.map((x) => x.hiz), 1), ilk = veri.olcum[0], son = veri.olcum.slice(-1)[0];
    el.innerHTML = `
      <h3>⏱️ Okuma ölçümlerim</h3>
      ${ol.length ? `<div class="oa-karolar"><div><small>Son hız</small><b>${son.hiz}</b><small>kelime/dk</small></div><div><small>Son anlama</small><b>%${son.anlama}</b></div><div><small>Rekor (etkili)</small><b>${rekor()}</b></div>${veri.olcum.length > 1 ? `<div><small>İlk ölçümden beri</small><b>${son.hiz - ilk.hiz >= 0 ? "+" : ""}${son.hiz - ilk.hiz}</b><small>kelime/dk</small></div>` : ""}</div>
        <div class="oa-graf">${ol.map((x) => `<div><small>${x.hiz}</small><i style="height:${Math.round((x.hiz / olMax) * 100)}%;background:${x.anlama >= 80 ? "#22c55e" : x.anlama >= 60 ? "#f59e0b" : "#ef4444"}"></i><small>%${x.anlama}</small></div>`).join("")}</div>
        <p class="oa-hedefcizgi">Sütun: kelime/dk · altı: anlama. Yeşil %80+, turuncu %60–79, kırmızı %60 altı.</p>` : '<p class="oa-not">Henüz ölçüm yapmadın. "Okuma Hızımı Ölç" ile başla.</p>'}
      <h3>👉 İşaretçili okuma</h3>
      ${ok.length ? `<div class="oa-graf">${ok.map((x) => `<div><small>${x.hiz}</small><i style="height:${Math.round((x.hiz / enCok) * 100)}%;background:${x.anlama == null ? "#94a3b8" : x.anlama >= 80 ? "#22c55e" : x.anlama >= 60 ? "#f59e0b" : "#ef4444"}"></i><small>${x.anlama == null ? "–" : "%" + x.anlama}</small></div>`).join("")}</div>
        <p class="oa-hedefcizgi">Sütun: kelime/dk · altındaki yüzde: anlama. Yeşil %80+, turuncu %60–79, kırmızı %60 altı. Hedef: ${hedef[0]}–${hedef[1]} kelime/dk.</p>` : '<p class="oa-not">Henüz işaretçili okuma yapmadın.</p>'}
      <h3>🔢 Schultz tablosu süren</h3>
      ${sch.length ? `<div class="oa-graf">${sch.map((x) => `<div><small>${x.sn}</small><i style="height:${Math.round((x.sn / schMax) * 100)}%;background:#6366f1"></i></div>`).join("")}</div><p class="oa-hedefcizgi">Sütunlar kısaldıkça gözün daha hızlı tarıyor demektir.</p>` : '<p class="oa-not">Henüz Schultz tablosu yapmadın.</p>'}
      <h3>⚡ Kelime flaşı</h3><p>${veri.flas.ms ? `Şu anki süren: <b>${veri.flas.ms} ms</b> (ne kadar kısa, o kadar iyi). Son: ${veri.flas.gecmis.slice(-5).map((x) => x.ms + " ms").join(" → ")}` : '<span class="oa-not">Henüz kelime flaşı yapmadın.</span>'}</p>
      <h3>📸 Kamera zihni</h3><p>${veri.kamera.length ? veri.kamera.slice(-6).map((x) => `${x.dogru}/${x.toplam}`).join(" · ") : '<span class="oa-not">Henüz yapmadın.</span>'}</p>
      <p class="oa-not">Antrenman yapılan gün: <b>${Object.keys(veri.gun).length}</b>. Sonuçlar yalnızca bu cihazda saklanır.</p>`;
    sonraki(el);
  }

  // ---------- Giriş noktaları ----------
  window.OKUMA_ATOLYESI_AC = () => ac(menu);
  if (window.ANA_KARTLAR) {
    window.ANA_KARTLAR.push((kutu) => {
      const b = document.createElement("button"); b.className = "ozel-kart"; b.style.background = "linear-gradient(135deg,#0ea5e9,#6366f1)";
      const son = veri.okuma.slice(-1)[0];
      b.innerHTML = `<span class="ikon">📖</span><span><b>Okuma Atölyesi</b><small>${son ? `Son okuma: ${son.hiz} kelime/dk · anlama %${son.anlama ?? "–"}` : "Hızlı ve anlayarak okuma egzersizleri"}</small></span>`;
      b.onclick = () => ac(menu); kutu.appendChild(b);
    });
    if (window.ANA_YENILE) window.ANA_YENILE();
  } else {
    // 1–4. sınıf: ana menüdeki "Hikâye Kitaplığı" düğmesinin yanına ekle
    const ekle = () => {
      const ek = document.getElementById("ekran"); if (!ek || ek.querySelector("[data-oa]")) return;
      const kit = [...ek.querySelectorAll("button")].find((b) => /Kitaplığı/.test(b.textContent)); if (!kit) return;
      const b = kit.cloneNode(false); b.dataset.oa = "1"; b.innerHTML = "<span>📖</span>Okuma Atölyesi"; b.onclick = () => ac(menu);
      kit.parentNode.insertBefore(b, kit.nextSibling);
    };
    new MutationObserver(ekle).observe(document.body, { childList: true, subtree: true }); ekle();
  }
})();
