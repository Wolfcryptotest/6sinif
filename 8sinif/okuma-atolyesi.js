// 📖 Okuma Atölyesi — akıcı okuma ve okuma becerisi egzersizleri (1–12. sınıfta aynı dosya).
// 9–12: Kitap Okuma (kitap seç, sayfa ve süre takibi, kitap defteri). Sesli koç ve Günlük Antrenman yalnızca 1–4.
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
  veri.schultz = veri.schultz || []; veri.flas = veri.flas || { ms: null, gecmis: [] }; veri.okuma = veri.okuma || []; veri.kamera = veri.kamera || []; veri.gun = veri.gun || {}; veri.olcum = veri.olcum || []; veri.koc = veri.koc || []; veri.seviye = veri.seviye || 1;
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
  // Sesli okuma koçu ve Günlük Antrenman yalnızca ilkokulda (1–4); ortaokul ve lisede egzersizler tek tek seçilir.
  const KOC_VAR = NO <= 4, ANTRENMAN_VAR = NO <= 4, KITAP_VAR = NO >= 5;
  // Metin seviyesi (1–7): anlama %80+ → metin uzar, %60 altı → kısalır
  const seviyeNo = () => Math.round((veri.seviye - 0.6) / 0.2) + 1;
  const seviyeGuncelle = (anlama) => { const eski = veri.seviye; if (anlama >= 80) veri.seviye = Math.min(1.8, +(veri.seviye + 0.2).toFixed(2)); else if (anlama < 60) veri.seviye = Math.max(0.6, +(veri.seviye - 0.2).toFixed(2)); return veri.seviye > eski ? 1 : veri.seviye < eski ? -1 : 0; };

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
  function okumaParcasi(carpan) {
    const l = metinler(); if (!l.length) return null;
    const hedefKelime = Math.round((NO <= 2 ? 60 : NO <= 4 ? 120 : NO <= 8 ? 220 : 280) * (carpan || veri.seviye || 1));
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
.koc-metin span.ok{background:#bbf7d0;border-radius:4px}.koc-metin span.atla{background:#fed7aa;border-radius:4px;text-decoration:underline wavy #ea580c}.koc-metin span.sira{outline:2px solid #3b82f6;border-radius:4px}.oa-durum{text-align:center;font-weight:700;min-height:22px;margin:4px 0}
.koc-kelimeler{display:grid;gap:8px;text-align:left}.koc-k{display:flex;align-items:center;gap:8px;background:var(--kart,#fff);border:1px solid var(--sinir,#ddd);border-radius:12px;padding:8px 12px;font-size:18px;flex-wrap:wrap}.koc-k b{flex:1}.koc-k button{border:1px solid var(--sinir,#ddd);background:var(--bg,#fff);border-radius:10px;padding:6px 10px;font-size:18px}
.oa-kart.koc{background:linear-gradient(135deg,#db2777,#f59e0b)!important;color:#fff!important;border:none!important}.oa-kart.koc small{color:#fff7ed!important}
@media (prefers-color-scheme:dark){.koc-metin span.ok{background:#14532d}.koc-metin span.atla{background:#7c2d12}}
.oa-kart.olc{background:linear-gradient(135deg,#16a34a,#0ea5e9)!important;color:#fff!important;border:none!important}.oa-kart.olc small{color:#f0fdf4!important}
.oa-sonuc{text-align:center;font-size:17px;line-height:1.5}.oa-karolar{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin:10px 0}.oa-karolar>div{background:var(--kart,#fff);border:1px solid var(--sinir,#ddd);border-radius:14px;padding:10px;display:flex;flex-direction:column;align-items:center}.oa-karolar b{font-size:28px;line-height:1.2}.oa-karolar small{color:var(--soluk,#6b7280);font-size:13px}
.oa-kart{border:2px solid var(--sinir,#eadfc8);background:var(--kart,#fff);border-radius:18px;padding:16px;text-align:left;font-size:17px;color:inherit;box-shadow:0 4px 0 rgba(0,0,0,.06)}
.oa-kart b{display:block;font-size:19px;margin:4px 0}.oa-kart small{color:var(--soluk,#7a6f8f)}.oa-kart .i{font-size:34px}
/*oa-telefon*/@media (max-width:560px){.oa-ic{padding:12px}.oa-menu{grid-template-columns:1fr;gap:8px}.oa-kart{display:grid;grid-template-columns:44px 1fr;column-gap:12px;align-items:center;padding:10px 14px;font-size:15px;border-radius:14px}.oa-kart .i{grid-row:1/3;font-size:28px;text-align:center}.oa-kart b{font-size:16.5px;margin:0}.oa-kart small{font-size:13px;line-height:1.35}.oa-btn{padding:10px 16px;font-size:16px}.oa-ust{padding:8px 12px}}
.oa-kart.kitap{background:linear-gradient(135deg,#7c3aed,#db2777)!important;color:#fff!important;border:none!important}.oa-kart.kitap small{color:#fdf4ff!important}
.kt-kitap{background:var(--kart,#fff);border:1px solid var(--sinir,#eadfc8);border-radius:14px;padding:12px 14px;margin:8px 0;display:grid;gap:6px}
.kt-kitap b{font-size:17px}.kt-kitap small{color:var(--soluk,#6b7280)}.kt-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.kt-row button,.kt-row a{border:1px solid var(--sinir,#ddd);background:var(--bg,#fff);color:inherit;border-radius:10px;padding:7px 11px;font-size:15px;text-decoration:none}
.kt-bar{height:8px;border-radius:5px;background:var(--sinir,#e5e7eb);overflow:hidden}.kt-bar i{display:block;height:100%;background:#7c3aed}
.kt-chip{border:1px solid var(--sinir,#ddd);background:var(--kart,#fff);color:inherit;border-radius:999px;padding:6px 12px;font-size:14px}.kt-chip.on{background:#7c3aed;color:#fff;border-color:#7c3aed}
.kt-in{width:100%;padding:9px 10px;border-radius:10px;border:1px solid var(--sinir,#ddd);font-size:16px;background:var(--bg,#fff);color:inherit;box-sizing:border-box}
.vk-buyuk{display:flex;gap:12px;align-items:center;width:100%;text-align:left;border:none;border-radius:16px;padding:14px 16px;margin-bottom:10px;background:linear-gradient(135deg,#0f766e,#2563eb);color:#fff;font:inherit;cursor:pointer}.vk-buyuk .i{font-size:34px}.vk-buyuk b{display:block;font-size:18px}.vk-buyuk small{color:#e0f2fe;font-size:14px}
.vk-devam{display:grid;gap:4px;width:100%;text-align:left;border:2px solid #7c3aed;background:var(--kart,#fff);color:inherit;border-radius:14px;padding:10px 14px;margin:0 0 10px;font:inherit;cursor:pointer}.vk-devam b{font-size:16.5px}.vk-devam small{color:var(--soluk,#6b7280)}
.vk-rozetler{display:grid;grid-template-columns:repeat(auto-fill,minmax(70px,1fr));gap:6px;margin:8px 0}.vk-rozetler span{display:grid;justify-items:center;font-size:24px;padding:6px 2px;border-radius:12px;background:var(--kart,#fff);border:1px solid var(--sinir,#e5e7eb);filter:grayscale(1);opacity:.45}.vk-rozetler span.on{filter:none;opacity:1;border-color:#f59e0b}.vk-rozetler small{font-size:10.5px;text-align:center;line-height:1.2}
.vk-ara{position:sticky;top:58px;z-index:1;background:var(--bg,#fffaf0);padding:4px 0 8px}
.vk-raflar{display:flex;gap:6px;overflow-x:auto;padding:4px 0 8px;scrollbar-width:none}.vk-raflar .kt-chip{white-space:nowrap;flex:none}
.vk-liste h3{margin:14px 0 6px}
.vk-sat{display:grid;grid-template-columns:1fr auto;gap:0 8px;width:100%;text-align:left;border:none;border-bottom:1px solid var(--sinir,#e5e7eb);background:none;color:inherit;padding:10px 4px;font:inherit;cursor:pointer}.vk-sat .vk-ad{font-weight:700;font-size:16.5px}.vk-sat small{grid-column:1;color:var(--soluk,#6b7280);font-size:13.5px}.vk-sat em{grid-column:2;grid-row:1/3;align-self:center;font-style:normal;font-size:13px;color:#7c3aed;font-weight:700}.vk-sat em.ok{color:#16a34a}
.vk-karar{text-align:center;padding:24px 8px;display:grid;gap:8px;justify-items:center}.vk-karar h2{margin:0}.vk-karar-dug{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
.vk-yuk{text-align:center;padding:60px 10px}.vk-donen{width:42px;height:42px;margin:0 auto 12px;border-radius:50%;border:4px solid var(--sinir,#ddd);border-top-color:#2563eb;animation:vkd 1s linear infinite}@keyframes vkd{to{transform:rotate(360deg)}}
.oa-kat.vk-acik{--bg:#ffffff;--kart:#f7f7f8;--yazi:#1f2328;--sinir:#e4e4e7;--soluk:#6b7280;background:#fff;color:#1f2328}
.oa-kat.vk-sepya{--bg:#f4ecd8;--kart:#faf4e6;--yazi:#3a2e1f;--sinir:#e0d3b6;--soluk:#7a6a50;background:#f4ecd8;color:#3a2e1f}
.oa-kat.vk-koyu{--bg:#121417;--kart:#1c1f24;--yazi:#e4e4e4;--sinir:#2e333b;--soluk:#9aa0a8;background:#121417;color:#e4e4e4}
.oa-kat.vk-okur .oa-ic{max-width:700px}
.vk-bilgi{position:sticky;top:57px;z-index:1;background:var(--bg);padding:6px 0 4px;margin:-6px 0 8px}.vk-bilgi .kt-bar{height:4px}.vk-bilgi-s{display:flex;gap:8px;align-items:center;justify-content:space-between;font-size:13px;color:var(--soluk,#6b7280);margin-top:4px}.vk-bilgi-s button{border:1px solid var(--sinir);background:var(--kart);color:inherit;border-radius:10px;padding:4px 12px;font-size:16px;font-family:Georgia,serif}
.vk-ayar[hidden]{display:none}.vk-ayar{display:grid;gap:8px;background:var(--kart);border:1px solid var(--sinir);border-radius:14px;padding:10px 12px;margin-top:6px}.vk-ayar div{display:flex;gap:6px;align-items:center;flex-wrap:wrap}.vk-ayar span{min-width:96px;font-size:14px}.vk-ayar button{border:1px solid var(--sinir);background:var(--bg);color:inherit;border-radius:10px;padding:6px 10px;font-size:14px}.vk-ayar button.on{border-color:#2563eb;box-shadow:0 0 0 1px #2563eb inset}
.vk-metin{color:var(--yazi,inherit);hyphens:auto;-webkit-hyphens:auto;overflow-wrap:break-word;padding-bottom:8px}.vk-metin.serif{font-family:Georgia,"Times New Roman",serif}.vk-metin.sans{font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.vk-metin p{margin:0 0 .9em;white-space:pre-line;text-align:left}.vk-metin .vk-bas{text-align:center;margin:10px 0 26px}.vk-metin h1{font-size:1.45em;margin:0 0 4px;line-height:1.25}.vk-metin .vk-bas p{color:var(--soluk);margin:0;text-align:center}.vk-metin h2{font-size:1.15em;text-align:center;margin:1.2em 0 .8em}
.vk-alt{display:flex;justify-content:space-between;gap:8px;margin:18px 0 6px}
.vk-uyari{background:#fef3c7;color:#78350f;border-radius:10px;padding:8px 10px;font-size:14px}
.vk-secim{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;gap:6px;z-index:70;background:#111827;padding:6px;border-radius:14px;box-shadow:0 6px 20px rgba(0,0,0,.3)}.vk-secim button{border:none;background:#1f2937;color:#fff;border-radius:10px;padding:9px 12px;font-size:15px}.vk-secim[hidden]{display:none}
.vk-bildir{position:fixed;left:50%;top:80px;transform:translateX(-50%);background:#16a34a;color:#fff;padding:10px 16px;border-radius:12px;z-index:71;font-weight:700}
.vk-yildiz button{border:none;background:none;font-size:32px;padding:2px;color:#f59e0b}
.vk-oneri{display:grid;gap:4px;justify-items:center;border:2px dashed #7c3aed;border-radius:16px;padding:14px;margin:8px 0;max-width:420px}.vk-oneri b{font-size:19px}.vk-oneri span{color:var(--soluk)}.vk-oneri p{margin:4px 0}
.vk-alinti p{font-family:Georgia,serif;font-size:17px;line-height:1.6;margin:0;white-space:pre-line}
.kt-saat{font-size:44px;font-weight:800;text-align:center;font-variant-numeric:tabular-nums}
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
  function ac(fn, baslik, geri) {
    temizle();
    if (!kat) { kat = document.createElement("div"); document.body.appendChild(kat); document.body.style.overflow = "hidden"; }
    kat.className = "oa-kat";
    kat.innerHTML = `<div class="oa-ust">${fn === menu ? "" : `<button data-geri>← ${geri ? "Geri" : "Atölye"}</button>`}<b>📖 ${esc(baslik || "Okuma Atölyesi")}</b><button data-kapat>✕ Kapat</button></div><div class="oa-ic"></div>`;
    kat.querySelector("[data-kapat]").onclick = kapat;
    const g = kat.querySelector("[data-geri]"); if (g) g.onclick = () => { adimlar = null; geri ? geri() : ac(menu); };
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
  const gecerliOlcum = () => veri.olcum.filter((x) => x.gecerli !== false);
  function olcumAlt() {
    const son = gecerliOlcum().slice(-1)[0];
    if (!son) return "Kendi hızında oku, kaç kelime okuduğunu ve ne kadar anladığını öğren. Haftada bir ölç, gelişimini gör.";
    const g = gunOnce(son.t);
    return `Son: ${son.hiz} kelime/dk · anlama %${son.anlama} · rekor ${rekor()}${g >= 7 ? " · ⏰ Yeniden ölçme zamanı!" : g === 0 ? " · bugün ölçtün ✅" : ` · ${g} gün önce`}`;
  }
  function ozetSerit() {
    const go = gecerliOlcum(), son = go.slice(-1)[0], ilk = go[0];
    if (!son) return `<div class="oa-serit"><b>📖 Okuma hızını hiç ölçmedin.</b><span>Önce "Okuma Hızımı Ölç" ile başla; ${NO}. sınıf hedefi dakikada <b>${hedef[0]}–${hedef[1]}</b> kelime, anlama en az %80.</span></div>`;
    const fark = go.length > 1 ? son.hiz - ilk.hiz : 0;
    const yer = Math.max(0, Math.min(100, ((son.hiz - hedef[0] * 0.5) / (hedef[1] * 1.25 - hedef[0] * 0.5)) * 100));
    return `<div class="oa-serit"><b>📖 Okuma hızın: ${son.hiz} kelime/dk · Anlama: %${son.anlama}</b>
      <div class="oa-bant"><i style="left:${((hedef[0] - hedef[0] * 0.5) / (hedef[1] * 1.25 - hedef[0] * 0.5)) * 100}%;width:${((hedef[1] - hedef[0]) / (hedef[1] * 1.25 - hedef[0] * 0.5)) * 100}%"></i><b style="left:${yer}%"></b></div>
      <span>Yeşil bölge ${NO}. sınıf hedefi (${hedef[0]}–${hedef[1]}). Metin seviyen: <b>${seviyeNo()}/7</b>.${fark > 0 ? ` İlk ölçümünden bu yana <b>+${fark}</b> kelime/dk 👏` : ""}</span></div>`;
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
        const x = { t: bugun(), hiz, anlama, kelime, sn: Math.round(sn), gecerli }; veri.olcum.push(x); veri.olcum = veri.olcum.slice(-100); const svDeg = gecerli ? seviyeGuncelle(anlama) : 0; isaretle(); kaydet();
        const e = etkili(x), yeniRekor = gecerli && e > onceRekor && onceRekor > 0, hedefSonraki = Math.ceil((Math.max(gecerli ? e : 0, onceRekor, 20) * 1.05) / 5) * 5;
        const tavsiye = !gecerli ? "⚠️ Metni çok hızlı geçtin; bu ölçüm rekora sayılmadı. Bir dahakinde gerçekten okuyarak dene."
          : anlama < 70 ? "🐢 Hızlı okudun ama anlaman düştü. Bir dahaki ölçümde biraz yavaşla; önce anlamak gelir."
          : hiz < hedef[0] ? (ANTRENMAN_VAR ? "🌱 Anlaman iyi! Hızını artırmak için her gün <b>Günlük Antrenman</b> yap; 2 hafta sonra yeniden ölç." : "🌱 Anlaman iyi! Hızını artırmak için her gün birkaç dakika <b>İşaretçili Okuma</b> ve <b>Kelime Flaşı</b> yap; 2 hafta sonra yeniden ölç.")
          : hiz > hedef[1] && anlama >= 80 ? "🚀 Sınıf hedefinin üstündesin! Daha uzun metinlerle anlamayı korumaya çalış."
          : "👍 Sınıf hedefindesin. Düzenli okumaya devam; haftada bir ölç.";
        el.innerHTML = `<div class="oa-sonuc">
            <div style="font-size:46px">${!gecerli ? "⚠️" : yeniRekor ? "🏆" : anlama >= 80 ? "🌟" : anlama >= 60 ? "👍" : "📘"}</div>
            ${yeniRekor ? `<p style="font-size:22px;font-weight:800;color:#16a34a">Yeni rekor!</p>` : ""}
            <div class="oa-karolar"><div><small>Okuma hızı</small><b>${hiz}</b><small>kelime/dk</small></div><div><small>Anlama</small><b>%${anlama}</b><small>${d}/${Q.length} doğru</small></div><div><small>Etkili okuma</small><b>${e}</b><small>hız × anlama</small></div></div>
            ${onceki && gecerli ? `<p>Geçen ölçüme göre: hız <b>${hiz - onceki.hiz >= 0 ? "+" : ""}${hiz - onceki.hiz}</b> kelime/dk, anlama <b>${anlama - onceki.anlama >= 0 ? "+" : ""}${anlama - onceki.anlama}</b> puan.</p>` : gecerli ? "<p>Bu senin ilk ölçümün. Bundan sonraki ölçümler bununla karşılaştırılacak.</p>" : ""}
            <p>${tavsiye}</p>
            ${svDeg ? `<p>${svDeg > 0 ? "📈 Metin seviyen yükseldi" : "📉 Metin seviyen biraz düşürüldü"}: <b>${seviyeNo()}/7</b>. ${svDeg > 0 ? "Bir dahaki metin daha uzun olacak." : "Önce anlamayı güçlendirelim."}</p>` : ""}<p class="oa-not">Sonraki hedefin: etkili okuma <b>${hedefSonraki}</b>. ${NO}. sınıf hedefi: ${hedef[0]}–${hedef[1]} kelime/dk, anlama %80+.</p></div>`;
        sonraki(el);
      };
      soru();
    };
  }

  // ---------- Sesli okuma koçu (tarayıcının Türkçe ses tanıması) ----------
  const norm = (w) => String(w).toLocaleLowerCase("tr").replace(/[^\p{L}\p{N}]/gu, "");
  const benzer = (a, b) => { if (a === b) return 1; if (!a || !b) return 0; const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]); for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return 1 - d[m][n] / Math.max(m, n); };
  const seslendir = (t) => { try { if (window.SES && SES.konus) return SES.konus(t); const u = new SpeechSynthesisUtterance(t); u.lang = "tr-TR"; u.rate = 0.85; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {} };
  function koc(el) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { el.innerHTML = `<div class="oa-serit"><b>🎤 Bu tarayıcı sesli okumayı tanımıyor.</b><span>Telefonda ya da bilgisayarda <b>Google Chrome</b> ile açarsan çalışır.</span></div>`; return sonraki(el); }
    const p = okumaParcasi(NO <= 2 ? 0.5 : 0.45); if (!p) { el.innerHTML = "<p>Okunacak metin bulunamadı.</p>"; return sonraki(el); }
    const W = p.kelimeler.filter((x) => /[\p{L}\p{N}]/u.test(x)), N = W.map(norm);
    el.innerHTML = `<div class="oa-serit"><b>Nasıl çalışır?</b><span>"🎤 Okumaya başla"ya bas ve metni <b>yüksek sesle, net</b> oku. Doğru okuduğun kelimeler yeşil olur. Bitince "Bitirdim"e bas; zorlandığın kelimeleri birlikte çalışalım.</span><span class="oa-not">Sesin, tanınması için tarayıcı tarafından Google'a gönderilir; uygulama sesini kaydetmez.</span></div>
      <h3 style="margin:10px 0 4px">${esc(p.baslik)}</h3>
      <p style="text-align:center"><button class="oa-btn" id="kBas">🎤 Okumaya başla</button> <button class="oa-btn" id="kBit" style="display:none;background:#16a34a">✅ Bitirdim</button></p>
      <div class="oa-durum" id="kDur"></div>
      <div class="oa-metin koc-metin">${W.map((w, i) => `<span data-i="${i}">${esc(w)}</span>`).join(" ")}</div>`;
    const sp = el.querySelectorAll(".koc-metin span"), dur = el.querySelector("#kDur");
    let rec = null, calis = false, bas = 0, finalMetin = "", durum = new Array(W.length).fill(0); // 0 okunmadı, 1 doğru, 2 atlandı/yanlış
    const hizala = (metin) => {
      const soz = metin.split(/\s+/).map(norm).filter(Boolean); const d = new Array(W.length).fill(0); let j = 0;
      for (const s of soz) { let bul = -1; for (let k = j; k < Math.min(W.length, j + 4); k++) if (benzer(s, N[k]) >= 0.72) { bul = k; break; } if (bul < 0) continue; for (let k = j; k < bul; k++) d[k] = 2; d[bul] = 1; j = bul + 1; }
      return { d, j };
    };
    const boya = (metin) => { const { d, j } = hizala(metin); durum = d; sp.forEach((s, i) => { s.className = d[i] === 1 ? "ok" : d[i] === 2 ? "atla" : i === j ? "sira" : ""; }); const ok = d.filter((x) => x === 1).length; dur.textContent = `✅ ${ok}/${W.length} kelime`; };
    const baslat = () => {
      rec = new SR(); rec.lang = "tr-TR"; rec.continuous = true; rec.interimResults = true;
      rec.onresult = (e) => { let ara = ""; for (let i = e.resultIndex; i < e.results.length; i++) { if (e.results[i].isFinal) finalMetin += " " + e.results[i][0].transcript; else ara += " " + e.results[i][0].transcript; } boya(finalMetin + " " + ara); };
      rec.onerror = (e) => { if (e.error === "not-allowed" || e.error === "service-not-allowed") { calis = false; dur.innerHTML = "🎤 Mikrofon izni verilmedi. Adres çubuğundaki kilit simgesinden mikrofona izin ver."; } };
      rec.onend = () => { if (calis) try { rec.start(); } catch (x) {} };
      try { rec.start(); } catch (x) {}
    };
    el.querySelector("#kBas").onclick = (e) => { e.target.style.display = "none"; el.querySelector("#kBit").style.display = ""; calis = true; bas = Date.now(); dur.textContent = "🎙️ Dinliyorum… Okumaya başla."; baslat(); };
    el.querySelector("#kBit").onclick = () => {
      calis = false; try { rec.stop(); } catch (x) {}
      const son = durum.lastIndexOf(1) + 1 || 1, okunan = durum.slice(0, son), dogru = okunan.filter((x) => x === 1).length;
      const dk = (Date.now() - bas) / 60000, hiz = Math.round(dogru / Math.max(dk, 0.1)), dogruluk = Math.round((dogru / Math.max(1, son)) * 100);
      const zor = [...new Set(W.filter((_, i) => i < son && durum[i] === 2).map((w) => w.replace(/[^\p{L}\p{N}'’]/gu, "")))].filter((w) => w.length > 1).slice(0, 8);
      veri.koc.push({ t: bugun(), dogruluk, hiz, kelime: son, zor }); veri.koc = veri.koc.slice(-60); isaretle(); kaydet();
      el.innerHTML = `<div class="oa-sonuc"><div style="font-size:46px">${dogruluk >= 95 ? "🌟" : dogruluk >= 85 ? "👍" : "💪"}</div>
        <div class="oa-karolar"><div><small>Doğru okuma</small><b>%${dogruluk}</b><small>${dogru}/${son} kelime</small></div><div><small>Hız</small><b>${hiz}</b><small>doğru kelime/dk</small></div></div>
        <p>${dogruluk >= 95 ? "Çok akıcı ve doğru okudun!" : dogruluk >= 85 ? "Güzel okudun; birkaç kelimede zorlandın." : "Biraz zorlandın; aşağıdaki kelimeleri birlikte çalışalım, sonra yeniden dene."}</p>
        ${zor.length ? `<h3 style="text-align:left">🔤 Çalışacağımız kelimeler</h3><p class="oa-not" style="text-align:left">🔊'ye basıp dinle, sonra 🎤'ya basıp sen söyle.</p><div class="koc-kelimeler">${zor.map((w, i) => `<div class="koc-k"><b>${esc(w)}</b><button data-d="${i}">🔊</button><button data-s="${i}">🎤</button><span data-r="${i}"></span></div>`).join("")}</div>` : "<p>Atladığın ya da zorlandığın kelime yok 👏</p>"}
        <p class="oa-not">Not: Ses tanıma bazen kelimeyi yanlış duyabilir; sonuç yaklaşık bir göstergedir.</p></div>`;
      el.querySelectorAll("[data-d]").forEach((b) => (b.onclick = () => seslendir(zor[+b.dataset.d])));
      el.querySelectorAll("[data-s]").forEach((b) => (b.onclick = () => {
        const i = +b.dataset.s, r = el.querySelector(`[data-r="${i}"]`), t = new SR(); t.lang = "tr-TR"; t.interimResults = false; r.textContent = "🎙️";
        t.onresult = (e) => { const s = norm(e.results[0][0].transcript.split(/\s+/)[0]), ok = benzer(s, norm(zor[i])) >= 0.75; r.textContent = ok ? "✅ Harika!" : `🔁 "${e.results[0][0].transcript}" duydum, tekrar dene`; };
        t.onerror = () => { r.textContent = "🎤 Duyamadım, tekrar dene"; }; try { t.start(); } catch (x) {}
      }));
      sonraki(el);
    };
  }

  // ---------- 📚 Kitap Okuma (9–12): kitap seç, oku, sayfa ve süre takibi, kitap defteri ----------
  // Telifi serbest Türkçe eserler (yazarı 1955 ve öncesinde vefat etmiş) için Vikikaynak'ta arama bağlantısı verilir.
  const ORTA_KITAP = [
    ["Küçük Prens", "Antoine de Saint-Exupéry", "Dünya klasikleri", 0], ["Beyaz Diş", "Jack London", "Dünya klasikleri", 0], ["Pinokyo", "Carlo Collodi", "Dünya klasikleri", 0],
    ["Define Adası", "Robert Louis Stevenson", "Dünya klasikleri", 0], ["Heidi", "Johanna Spyri", "Dünya klasikleri", 0], ["Oliver Twist", "Charles Dickens", "Dünya klasikleri", 0],
    ["Robinson Crusoe", "Daniel Defoe", "Dünya klasikleri", 0], ["Pollyanna", "Eleanor H. Porter", "Dünya klasikleri", 0], ["Tom Sawyer'ın Maceraları", "Mark Twain", "Dünya klasikleri", 0],
    ["Alice Harikalar Diyarında", "Lewis Carroll", "Dünya klasikleri", 0], ["Seksen Günde Devriâlem", "Jules Verne", "Dünya klasikleri", 0], ["Şeker Portakalı", "José Mauro de Vasconcelos", "Dünya klasikleri", 0],
    ["Martı", "Richard Bach", "Dünya klasikleri", 0], ["Momo", "Michael Ende", "Dünya klasikleri", 0], ["Charlie'nin Çikolata Fabrikası", "Roald Dahl", "Dünya klasikleri", 0],
    ["Beyaz Gemi", "Cengiz Aytmatov", "Dünya klasikleri", 0], ["Dede Korkut Hikâyeleri", "Anonim", "Türk edebiyatı", 0], ["Seçme Hikâyeler", "Ömer Seyfettin", "Türk edebiyatı", 0]
  ];
  const LISE_KITAP = [
    ["İntibah", "Namık Kemal", "Türk romanı", 1], ["Araba Sevdası", "Recaizade Mahmut Ekrem", "Türk romanı", 1],
    ["Mai ve Siyah", "Halit Ziya Uşaklıgil", "Türk romanı", 1], ["Aşk-ı Memnu", "Halit Ziya Uşaklıgil", "Türk romanı", 1],
    ["Eylül", "Mehmet Rauf", "Türk romanı", 1], ["Kuyucaklı Yusuf", "Sabahattin Ali", "Türk romanı", 1],
    ["İçimizdeki Şeytan", "Sabahattin Ali", "Türk romanı", 1], ["Kürk Mantolu Madonna", "Sabahattin Ali", "Türk romanı", 1],
    ["Ayaşlı ve Kiracıları", "Memduh Şevket Esendal", "Türk romanı", 1], ["Çalıkuşu", "Reşat Nuri Güntekin", "Türk romanı", 0],
    ["Yaprak Dökümü", "Reşat Nuri Güntekin", "Türk romanı", 0], ["Kiralık Konak", "Yakup Kadri Karaosmanoğlu", "Türk romanı", 0],
    ["Yaban", "Yakup Kadri Karaosmanoğlu", "Türk romanı", 0], ["Sinekli Bakkal", "Halide Edib Adıvar", "Türk romanı", 0],
    ["Ateşten Gömlek", "Halide Edib Adıvar", "Türk romanı", 0], ["Huzur", "Ahmet Hamdi Tanpınar", "Türk romanı", 0],
    ["Saatleri Ayarlama Enstitüsü", "Ahmet Hamdi Tanpınar", "Türk romanı", 0], ["Dokuzuncu Hariciye Koğuşu", "Peyami Safa", "Türk romanı", 0],
    ["İnce Memed", "Yaşar Kemal", "Türk romanı", 0], ["Bereketli Topraklar Üzerinde", "Orhan Kemal", "Türk romanı", 0],
    ["Yorgun Savaşçı", "Kemal Tahir", "Türk romanı", 0],
    ["Seçme Hikâyeler", "Ömer Seyfettin", "Hikâye, şiir, anı", 1], ["Semaver", "Sait Faik Abasıyanık", "Hikâye, şiir, anı", 1],
    ["Safahat", "Mehmet Akif Ersoy", "Hikâye, şiir, anı", 1], ["Dede Korkut Hikâyeleri", "Anonim", "Hikâye, şiir, anı", 1],
    ["Nutuk", "Mustafa Kemal Atatürk", "Hikâye, şiir, anı", 1],
    ["Suç ve Ceza", "Fyodor Dostoyevski", "Dünya klasikleri", 0], ["Sefiller", "Victor Hugo", "Dünya klasikleri", 0],
    ["Don Kişot", "Miguel de Cervantes", "Dünya klasikleri", 0], ["Hayvan Çiftliği", "George Orwell", "Dünya klasikleri", 0],
    ["Fareler ve İnsanlar", "John Steinbeck", "Dünya klasikleri", 0], ["Yaşlı Adam ve Deniz", "Ernest Hemingway", "Dünya klasikleri", 0],
    ["Dönüşüm", "Franz Kafka", "Dünya klasikleri", 0], ["Beyaz Diş", "Jack London", "Dünya klasikleri", 0],
    ["Martin Eden", "Jack London", "Dünya klasikleri", 0], ["Küçük Prens", "Antoine de Saint-Exupéry", "Dünya klasikleri", 0]
  ];
  const KITAPLAR = NO >= 9 ? LISE_KITAP : ORTA_KITAP;
  const kv = () => { veri.kitap = veri.kitap || {}; const k = veri.kitap; k.liste = k.liste || []; k.gun = k.gun || {}; k.hedef = k.hedef || 20; return k; };
  const kgun = (i) => { const d = new Date(Date.now() - i * 864e5); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const kSeri = () => { const g = kv().gun; let n = 0; for (let i = 0; i < 400; i++) { if (g[kgun(i)] > 0) n++; else if (i > 0) break; } return n; };
  const vikikaynak = (ad) => "https://tr.wikisource.org/w/index.php?search=" + encodeURIComponent(ad);
  function kitapAlt() {
    const k = kv(), okunan = k.liste.filter((x) => !x.bitti), biten = k.liste.filter((x) => x.bitti).length, bug = k.gun[bugun()] || 0;
    const dv = devamEdenler()[0]; if (dv) return `▶️ Devam et: ${esc(dv[1].ad)} %${dv[1].yuzde} · bugün ${bug}/${k.hedef} sayfa${kSeri() ? " · 🔥 " + kSeri() + " gün" : ""}`;
    if (!k.liste.length) return "Ücretsiz hikâye, roman, fıkra ve şiirleri uygulamada oku; kaldığın yerden devam et.";
    if (false) return "Bir kitap seç, her gün okuduğun sayfaları kaydet, bitirince kitap defterini doldur.";
    return `${okunan.length ? "Okuyorsun: " + esc(okunan[0].ad) + " · " : ""}bugün ${bug}/${k.hedef} sayfa · ${biten} kitap bitti${kSeri() ? " · 🔥 " + kSeri() + " gün" : ""}`;
  }
  function kitap(el) {
    const k = kv(), bug = k.gun[bugun()] || 0, biten = k.liste.filter((x) => x.bitti);
    const hafta = [...Array(7)].map((_, i) => k.gun[kgun(6 - i)] || 0), hMax = Math.max(k.hedef, ...hafta, 1);
    const dv = typeof devamEdenler === "function" ? devamEdenler()[0] : null, rd = rozetDurum(), bugDk = Math.round((vkv().dk || {})[bugun()] || 0);
    const rafSay = RAFLAR.reduce((a, r) => { const c = yerel.al("vk-raf-" + r.id); return a + (c && c.l && r.hepsi ? c.l.length : 0); }, 0);
    el.innerHTML = `<button class="vk-buyuk" id="vkKitaplik"><span class="i">📖</span><span><b>Kitaplık · uygulamada ücretsiz oku</b><small>${rafSay > 50 ? rafSay + "+ eser: " : ""}hikâye, roman, fıkra, şiir · arama, kaldığın yerden devam</small></span></button>
      ${dv ? `<button class="vk-devam" id="vkDevamAna"><b>▶️ Devam et: ${esc(dv[1].ad)}</b><small>${esc(dv[1].yazar || "")} · %${dv[1].yuzde} okundu</small><div class="kt-bar"><i style="width:${dv[1].yuzde}%"></i></div></button>` : ""}
      <div class="oa-serit"><b>📚 Bugün ${bug} / ${k.hedef} sayfa${bugDk ? ` · ⏱️ ${bugDk} dk` : ""}</b>
        <div class="kt-bar"><i style="width:${Math.min(100, (bug / k.hedef) * 100)}%"></i></div>
        <span>${kSeri() ? `🔥 ${kSeri()} gündür her gün okuyorsun.` : "Bugün okumaya başla, serini kur."} Bitirdiğin kitap: <b>${biten.length}</b>.
        Günlük hedef: <select id="ktHedef" class="kt-in" style="width:auto;display:inline-block;padding:4px 8px">${[10, 15, 20, 30, 40, 50].map((h) => `<option ${h === k.hedef ? "selected" : ""}>${h}</option>`).join("")}</select> sayfa</span></div>
      <div class="oa-graf" style="height:90px">${hafta.map((v, i) => `<div><small>${v || ""}</small><i style="height:${Math.round((v / hMax) * 100)}%;background:#7c3aed"></i><small>${["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"][new Date(Date.now() - (6 - i) * 864e5).getDay()]}</small></div>`).join("")}</div>
      <div class="vk-rozetler">${ROZETLER.map(([i, a, f]) => `<span class="${f(rd) ? "on" : ""}" title="${esc(a)}">${i}<small>${esc(a)}</small></span>`).join("")}</div>
      <div class="kt-row" style="margin:6px 0 4px"><button id="vkAlinti">💬 Alıntılarım (${vkv().alinti.length})</button></div>
      <h3>📖 Elimdeki kâğıt kitaplar</h3>
      ${k.liste.filter((x) => !x.bitti).map((b) => { const i = k.liste.indexOf(b); return `<div class="kt-kitap"><b>${esc(b.ad)}</b><small>${esc(b.yazar || "")}${b.toplam ? ` · ${b.okunan || 0} / ${b.toplam} sayfa` : ` · ${b.okunan || 0} sayfa okundu`}</small>
        ${b.toplam ? `<div class="kt-bar"><i style="width:${Math.min(100, ((b.okunan || 0) / b.toplam) * 100)}%"></i></div>` : ""}
        <div class="kt-row"><button data-oku="${i}">⏱️ Okumaya başla</button><button data-sayfa="${i}">➕ Sayfa ekle</button><button data-bitir="${i}">✅ Bitirdim</button>${katalog[b.ad] ? `<button data-vkoku="${esc(b.ad)}">📖 Uygulamada oku</button>` : b.pd ? `<a href="${vikikaynak(b.ad)}" target="_blank" rel="noopener">🔗 Ücretsiz oku (Vikikaynak)</a>` : ""}<button data-sil="${i}" aria-label="Listeden çıkar">🗑️</button></div></div>`; }).join("") || '<p class="oa-not">Okul ya da halk kütüphanesinden aldığın kâğıt kitapları buraya ekleyip sayfa takibi yapabilirsin.</p>'}
      <p style="text-align:center"><button class="oa-btn" id="ktSec">➕ Kâğıt kitap ekle</button></p>
      ${biten.length ? `<h3>🏁 Bitirdiğim kitaplar</h3>${biten.map((b) => `<div class="kt-kitap"><b>${esc(b.ad)}</b><small>${esc(b.yazar || "")} · ${b.bitis || ""}${b.puan ? " · " + "⭐".repeat(b.puan) : ""}</small>${b.defter && b.defter.tema ? `<small>📝 ${esc(b.defter.tema)}</small>` : ""}<div class="kt-row"><button data-defter="${k.liste.indexOf(b)}">📝 Kitap defteri</button></div></div>`).join("")}` : ""}
      <p class="oa-not">Kayıtlar yalnızca bu cihazda tutulur. Uygulamada okuduğun her ~250 kelime bir sayfa sayılır ve günlük hedefine eklenir.</p>`;
    el.querySelector("#ktHedef").onchange = (e) => { k.hedef = +e.target.value; kaydet(); ac(kitap, "Kitap Okuma"); };
    el.querySelector("#ktSec").onclick = () => ac(kitapSec, "Kitap seç");
    el.querySelector("#vkKitaplik").onclick = () => ac(kitaplik, "Kitaplık", () => ac(kitap, "Kitap Okuma"));
    el.querySelector("#vkAlinti").onclick = () => ac(alintilar, "Alıntılarım", () => ac(kitap, "Kitap Okuma"));
    const dva = el.querySelector("#vkDevamAna"); if (dva) dva.onclick = () => eserAc(dv[0]);
    el.querySelectorAll("[data-vkoku]").forEach((b) => (b.onclick = () => eserAc(b.dataset.vkoku)));
    el.querySelectorAll("[data-oku]").forEach((b) => (b.onclick = () => ac((x) => kitapOturum(x, +b.dataset.oku), "Okuma zamanı")));
    el.querySelectorAll("[data-sayfa]").forEach((b) => (b.onclick = () => ac((x) => kitapSayfa(x, +b.dataset.sayfa, 0), "Sayfa ekle")));
    el.querySelectorAll("[data-bitir]").forEach((b) => (b.onclick = () => ac((x) => kitapDefter(x, +b.dataset.bitir), "Kitap defteri")));
    el.querySelectorAll("[data-defter]").forEach((b) => (b.onclick = () => ac((x) => kitapDefter(x, +b.dataset.defter), "Kitap defteri")));
    el.querySelectorAll("[data-sil]").forEach((b) => (b.onclick = () => { const i = +b.dataset.sil; if (b.dataset.onay) { k.liste.splice(i, 1); kaydet(); ac(kitap, "Kitap Okuma"); } else { b.dataset.onay = 1; b.textContent = "Emin misin? 🗑️"; } }));
  }
  function kitapSec(el) {
    const k = kv(), turler = ["Hepsi", ...new Set(KITAPLAR.map((x) => x[2]))]; let tur = "Hepsi";
    const ciz = () => {
      const l = KITAPLAR.filter((x) => tur === "Hepsi" || x[2] === tur);
      el.innerHTML = `<div class="kt-row" style="margin-bottom:8px">${turler.map((t) => `<button class="kt-chip ${t === tur ? "on" : ""}" data-tur="${esc(t)}">${esc(t)}</button>`).join("")}</div>
        ${l.map((x) => { const var_ = k.liste.some((b) => b.ad === x[0] && !b.bitti); return `<div class="kt-kitap"><b>${esc(x[0])}</b><small>${esc(x[1])} · ${esc(x[2])}${x[3] ? " · telifi serbest" : ""}</small><div class="kt-row"><button data-sec="${esc(x[0])}" ${var_ ? "disabled" : ""}>${var_ ? "✔ Listende" : "📖 Bu kitabı okuyacağım"}</button>${katalog[x[0]] ? `<button data-vkoku="${esc(x[0])}">📖 Uygulamada oku</button>` : x[3] ? `<a href="${vikikaynak(x[0])}" target="_blank" rel="noopener">🔗 Vikikaynak'ta ara</a>` : ""}</div></div>`; }).join("")}
        <h3>✍️ Listede olmayan bir kitap</h3>
        <div class="kt-kitap"><input class="kt-in" id="ktAd" placeholder="Kitabın adı"><input class="kt-in" id="ktYazar" placeholder="Yazarı"><input class="kt-in" id="ktTop" type="number" min="1" placeholder="Sayfa sayısı (isteğe bağlı)"><div class="kt-row"><button id="ktEkle">➕ Ekle</button></div></div>`;
      el.querySelectorAll("[data-tur]").forEach((b) => (b.onclick = () => { tur = b.dataset.tur; ciz(); }));
      el.querySelectorAll("[data-vkoku]").forEach((b) => (b.onclick = () => eserAc(b.dataset.vkoku)));
      el.querySelectorAll("[data-sec]").forEach((b) => (b.onclick = () => { const x = KITAPLAR.find((y) => y[0] === b.dataset.sec); ac((e) => kitapToplam(e, { ad: x[0], yazar: x[1], tur: x[2], pd: !!x[3] }), "Kitap seç"); }));
      el.querySelector("#ktEkle").onclick = () => { const ad = el.querySelector("#ktAd").value.trim(); if (!ad) { el.querySelector("#ktAd").focus(); return; } k.liste.push({ ad, yazar: el.querySelector("#ktYazar").value.trim(), toplam: Math.max(0, +el.querySelector("#ktTop").value || 0), okunan: 0, bas: bugun() }); kaydet(); ac(kitap, "Kitap Okuma"); };
    };
    ciz();
  }
  function kitapToplam(el, b) {
    el.innerHTML = `<div class="kt-kitap"><b>${esc(b.ad)}</b><small>${esc(b.yazar)}</small>
      <label>Elindeki baskı kaç sayfa? <input class="kt-in" id="ktTop" type="number" min="1" placeholder="Örn. 240"></label>
      <p class="oa-not">Sayfa sayısı baskıya göre değişir; kitabının son sayfasına bakabilirsin. Bilmiyorsan boş bırak.</p>
      <div class="kt-row"><button id="ktTamam">✅ Listeme ekle</button></div></div>`;
    el.querySelector("#ktTamam").onclick = () => { const k = kv(); k.liste.push({ ...b, toplam: Math.max(0, +el.querySelector("#ktTop").value || 0), okunan: 0, bas: bugun() }); kaydet(); ac(kitap, "Kitap Okuma"); };
  }
  function kitapSayfa(el, i, dk) {
    const k = kv(), b = k.liste[i]; if (!b) return ac(kitap, "Kitap Okuma");
    el.innerHTML = `<div class="kt-kitap"><b>${esc(b.ad)}</b>${dk ? `<p>⏱️ ${dk} dakika okudun. Aferin!</p>` : ""}
      <label>Kaçıncı sayfada kaldın? <input class="kt-in" id="ktKal" type="number" min="0" value="${b.okunan || ""}" placeholder="Örn. ${(b.okunan || 0) + 20}"></label>
      <p class="oa-not">Şu ana kadar kaydettiğin: ${b.okunan || 0}${b.toplam ? " / " + b.toplam : ""} sayfa.</p>
      <div class="kt-row"><button id="ktKaydet">💾 Kaydet</button></div><p class="oa-not" id="ktUyari"></p></div>`;
    el.querySelector("#ktKaydet").onclick = () => {
      const yeni = Math.floor(+el.querySelector("#ktKal").value || 0), fark = yeni - (b.okunan || 0);
      if (b.toplam && yeni > b.toplam) { el.querySelector("#ktUyari").textContent = `Kitap ${b.toplam} sayfa; daha büyük bir sayı girilemez.`; return; }
      if (fark < 0) { el.querySelector("#ktUyari").textContent = "Kaldığın sayfa öncekinden küçük olamaz."; return; }
      b.okunan = yeni; k.gun[bugun()] = (k.gun[bugun()] || 0) + fark; if (dk) b.dakika = (b.dakika || 0) + dk; isaretle(); kaydet();
      if (b.toplam && yeni >= b.toplam) return ac((x) => kitapDefter(x, i), "Kitap defteri");
      ac(kitap, "Kitap Okuma");
    };
  }
  function kitapOturum(el, i) {
    const b = kv().liste[i]; if (!b) return ac(kitap, "Kitap Okuma");
    el.innerHTML = `<h3 style="text-align:center">${esc(b.ad)}</h3><div class="kt-saat" id="ktSaat">00:00</div>
      <p class="oa-not" style="text-align:center">Telefonu sessize al, kitabını aç ve oku. Bitince "Bitirdim"e bas, kaldığın sayfayı yaz.</p>
      <p style="text-align:center"><button class="oa-btn" id="ktBitti" style="background:#16a34a">✅ Bitirdim</button></p>`;
    const bas = Date.now(), z = setInterval(() => { const sn = Math.floor((Date.now() - bas) / 1000), e = el.querySelector("#ktSaat"); if (e) e.textContent = String(Math.floor(sn / 60)).padStart(2, "0") + ":" + String(sn % 60).padStart(2, "0"); }, 500); zam.push(z);
    el.querySelector("#ktBitti").onclick = () => { clearInterval(z); const dk = Math.max(1, Math.round((Date.now() - bas) / 60000)); ac((x) => kitapSayfa(x, i, dk), "Sayfa ekle"); };
  }
  function kitapDefter(el, i) {
    const k = kv(), b = k.liste[i]; if (!b) return ac(kitap, "Kitap Okuma"); const d = b.defter || {};
    el.innerHTML = `<div class="kt-kitap"><b>📝 ${esc(b.ad)} — Kitap defteri</b><small>Kısa yazman yeterli; kendi cümlelerinle yaz.</small>
      <label>Kitabın konusu ve ana fikri (tema) nedir?<textarea class="kt-in" id="ktTema" rows="3">${esc(d.tema || "")}</textarea></label>
      <label>En çok etkilendiğin karakter kim, neden?<textarea class="kt-in" id="ktKarakter" rows="3">${esc(d.karakter || "")}</textarea></label>
      <label>Kitaptan aklında kalan bir sahne ya da düşünce:<textarea class="kt-in" id="ktSahne" rows="3">${esc(d.sahne || "")}</textarea></label>
      <label>Puanın: <select class="kt-in" id="ktPuan" style="width:auto;display:inline-block">${[5, 4, 3, 2, 1].map((p) => `<option value="${p}" ${b.puan === p ? "selected" : ""}>${"⭐".repeat(p)}</option>`).join("")}</select></label>
      <div class="kt-row"><button id="ktDefter">💾 Kaydet ve kitabı bitir</button></div></div>`;
    el.querySelector("#ktDefter").onclick = () => {
      b.defter = { tema: el.querySelector("#ktTema").value.trim(), karakter: el.querySelector("#ktKarakter").value.trim(), sahne: el.querySelector("#ktSahne").value.trim() };
      b.puan = +el.querySelector("#ktPuan").value; if (!b.bitti) { b.bitti = true; b.bitis = bugun(); if (b.toplam && (b.okunan || 0) < b.toplam) { k.gun[bugun()] = (k.gun[bugun()] || 0) + (b.toplam - (b.okunan || 0)); b.okunan = b.toplam; } }
      isaretle(); kaydet(); el.innerHTML = `<div class="oa-sonuc"><div style="font-size:46px">🏆</div><p style="font-size:20px"><b>${esc(b.ad)}</b> bitti! Bu ${k.liste.filter((x) => x.bitti).length}. kitabın.</p></div>`; sonraki(el);
    };
  }

  // ---------- 📖 Uygulama içi Kitaplık: telifi serbest Türkçe eserler Vikikaynak'tan (tr.wikisource.org) okunur ----------
  // Metin, öğrencinin tarayıcısında Vikikaynak API'sinden alınır (origin=* ile CORS), bir kez açılan eser cihazda saklanır.
  const VK = "https://tr.wikisource.org";
  const LISE = NO >= 9;
  const RAFLAR = [
    { id: "oyku", ad: "Ömer Seyfettin Hikâyeleri", ikon: "📕", kat: "Ömer Seyfettin hikayeleri", yazar: "Ömer Seyfettin", tur: "Hikâye", hepsi: LISE },
    { id: "fikra", ad: "Nasreddin Hoca Fıkraları", ikon: "😄", kat: "Nasreddin Hoca fıkraları", yazar: "Nasreddin Hoca", tur: "Fıkra", hepsi: true },
    { id: "orhan", ad: "Orhan Veli Şiirleri", ikon: "✒️", kat: "Orhan Veli şiirleri", yazar: "Orhan Veli Kanık", tur: "Şiir", hepsi: true },
    { id: "akif", ad: "Mehmet Âkif Ersoy Şiirleri", ikon: "🇹🇷", kat: "Mehmet Âkif Ersoy şiirleri", yazar: "Mehmet Âkif Ersoy", tur: "Şiir", hepsi: true },
    { id: "fikret", ad: "Tevfik Fikret Şiirleri", ikon: "🖋️", kat: "Tevfik Fikret şiirleri", yazar: "Tevfik Fikret", tur: "Şiir", hepsi: true },
    { id: "gokalp", ad: "Ziya Gökalp Şiirleri", ikon: "📜", kat: "Ziya Gökalp Şiirleri", yazar: "Ziya Gökalp", tur: "Şiir", hepsi: true },
    { id: "sabahattin", ad: "Sabahattin Ali Şiirleri", ikon: "🌙", kat: "Sabahattin Ali şiirleri", yazar: "Sabahattin Ali", tur: "Şiir", hepsi: LISE }
  ];
  // Öne çıkanlar: [Vikikaynak sayfa adı, yazar, tür, seviye ("o": ortaokul ve lise, "l": yalnız lise)]. Yazar içindeki sıra, okullarda en çok okunanlardan başlar (öneri sırası).
  const SECKI = [
    ["Kürk Mantolu Madonna", "Sabahattin Ali", "Roman", "l"], ["Kuyucaklı Yusuf", "Sabahattin Ali", "Roman", "l"], ["Birdenbire Sönen Kandilin Hikâyesi", "Sabahattin Ali", "Hikâye", "l"],
    ["Kaşağı", "Ömer Seyfettin", "Hikâye", "o"], ["Pembe İncili Kaftan", "Ömer Seyfettin", "Hikâye", "o"], ["Falaka", "Ömer Seyfettin", "Hikâye", "o"], ["Forsa", "Ömer Seyfettin", "Hikâye", "o"],
    ["Diyet", "Ömer Seyfettin", "Hikâye", "o"], ["Başını Vermeyen Şehit", "Ömer Seyfettin", "Hikâye", "o"], ["Kurbağa Duası", "Ömer Seyfettin", "Hikâye", "o"], ["Bomba", "Ömer Seyfettin", "Hikâye", "o"],
    ["And", "Ömer Seyfettin", "Hikâye", "o"], ["Ferman", "Ömer Seyfettin", "Hikâye", "o"], ["Kütük", "Ömer Seyfettin", "Hikâye", "o"], ["Külah", "Ömer Seyfettin", "Hikâye", "o"],
    ["Elma", "Ömer Seyfettin", "Hikâye", "o"], ["Kerâmet", "Ömer Seyfettin", "Hikâye", "o"], ["Bir Temiz Havlu Uğruna", "Ömer Seyfettin", "Hikâye", "o"], ["Yalnız Efe", "Ömer Seyfettin", "Hikâye", "o"],
    ["Primo Türk Çocuğu", "Ömer Seyfettin", "Hikâye", "o"], ["Kızıl Elma Neresi?", "Ömer Seyfettin", "Hikâye", "o"], ["Yüksek Ökçeler", "Ömer Seyfettin", "Hikâye", "o"], ["Perili Köşk", "Ömer Seyfettin", "Hikâye", "o"],
    ["Pireler", "Ömer Seyfettin", "Hikâye", "o"], ["Üç Nasihat", "Ömer Seyfettin", "Hikâye", "o"], ["Zeytin Ekmek", "Ömer Seyfettin", "Hikâye", "o"], ["Bahar ve Kelebekler", "Ömer Seyfettin", "Hikâye", "o"],
    ["Çakmak", "Ömer Seyfettin", "Hikâye", "o"], ["Büyücü", "Ömer Seyfettin", "Hikâye", "o"], ["İlk Namaz", "Ömer Seyfettin", "Hikâye", "o"], ["Bir Hatıra", "Ömer Seyfettin", "Hikâye", "o"],
    ["Aleko", "Ömer Seyfettin", "Hikâye", "o"], ["Kurumuş Ağaçlar", "Ömer Seyfettin", "Hikâye", "o"], ["Dünyanın Düzeni", "Ömer Seyfettin", "Hikâye", "o"], ["Velinimet", "Ömer Seyfettin", "Hikâye", "o"],
    ["Korkunç Bir Ceza", "Ömer Seyfettin", "Hikâye", "o"], ["Yuf Borusu Seni Bekliyor", "Ömer Seyfettin", "Hikâye", "o"], ["Kır Sineği", "Ömer Seyfettin", "Hikâye", "o"], ["Vire", "Ömer Seyfettin", "Hikâye", "o"],
    ["Parayı Veren Düdüğü Çalar", "Nasreddin Hoca", "Fıkra", "o"], ["O Konuşursa Bu da Düşünür", "Nasreddin Hoca", "Fıkra", "o"], ["Beni Baş Aşağı Gömün", "Nasreddin Hoca", "Fıkra", "o"],
    ["Çok Gezseydi Bizim Eve de Uğrardı", "Nasreddin Hoca", "Fıkra", "o"], ["Allah Versin", "Nasreddin Hoca", "Fıkra", "o"],
    ["Küfe", "Mehmet Âkif Ersoy", "Şiir", "o"], ["Seyfi Baba", "Mehmet Âkif Ersoy", "Şiir", "o"], ["Küçük Asker", "Tevfik Fikret", "Şiir", "o"], ["Ağustos Böceği ile Karınca", "Tevfik Fikret", "Şiir", "o"],
    ["Han-ı Yağma", "Tevfik Fikret", "Şiir", "l"], ["Anlatamıyorum", "Orhan Veli Kanık", "Şiir", "o"], ["Bedava", "Orhan Veli Kanık", "Şiir", "o"], ["Gemilerim", "Orhan Veli Kanık", "Şiir", "o"], ["Deniz", "Orhan Veli Kanık", "Şiir", "o"]
  ].filter((x) => LISE || x[3] === "o");
  const KELIME_SAYFA = 250; // basılı kitapta bir sayfa ≈ 250 kelime
  const PARCA = LISE ? 1800 : 1200; // bir okuma bölümü (kelime) — yaklaşık 10–12 dakikalık parça
  const trNorm = (s) => String(s || "").toLocaleLowerCase("tr").replace(/[âà]/g, "a").replace(/[îı]/g, "i").replace(/û/g, "u").replace(/ş/g, "s").replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ö/g, "o").replace(/ü/g, "u");
  const vkAdres = (t) => VK + "/wiki/" + encodeURIComponent(String(t).replace(/ /g, "_"));
  const vkApi = async (p) => {
    const r = await fetch(VK + "/w/api.php?" + new URLSearchParams({ ...p, format: "json", formatversion: "2", origin: "*" }));
    if (!r.ok) throw new Error("HTTP " + r.status);
    const j = await r.json(); if (j.error) throw new Error(j.error.info || j.error.code); return j;
  };
  const yerel = { al: (a) => { try { return JSON.parse(localStorage.getItem(a)); } catch (e) { return null; } }, koy: (a, v) => { try { localStorage.setItem(a, JSON.stringify(v)); return true; } catch (e) { return false; } }, sil: (a) => { try { localStorage.removeItem(a); } catch (e) {} } };
  const vkv = () => { const k = kv(); k.vk = k.vk || {}; k.alinti = k.alinti || []; k.ayar = k.ayar || { boy: NO <= 8 ? 21 : 19, aralik: 1.75, font: "serif", tema: "acik" }; k.dk = k.dk || {}; return k; };
  const katalog = {}; // sayfa adı → {ad, yazar, tur, raf}
  SECKI.forEach((x, i) => (katalog[x[0]] = { ad: x[0], yazar: x[1], tur: x[2], sira: i }));
  const rafYukle = async (raf) => {
    const an = "vk-raf-" + raf.id, c = yerel.al(an);
    if (c && Date.now() - c.t < 7 * 864e5 && c.l && c.l.length) return c.l;
    const l = []; let devam = {};
    for (let i = 0; i < 5; i++) {
      const j = await vkApi({ action: "query", list: "categorymembers", cmtitle: "Kategori:" + raf.kat, cmnamespace: "0", cmtype: "page", cmlimit: "500", ...devam });
      (j.query && j.query.categorymembers || []).forEach((m) => l.push(m.title));
      if (!j.continue) break; devam = j.continue;
    }
    if (l.length) yerel.koy(an, { t: Date.now(), l });
    return l.length ? l : (c && c.l) || [];
  };
  const rafEserleri = (raf, l) => l.filter((t) => !vkv().bos || !vkv().bos[t]).map((t) => (katalog[t] = katalog[t] || { ad: t.replace(/ \((hikâye|Nasreddin Hoca fıkrası|Orhan Veli|Sabahattin Ali|Mehmet Âkif Ersoy|şiir)\)$/, ""), yazar: raf.yazar, tur: raf.tur, raf: raf.id }, t));

  // HTML → paragraflar (şiirlerde satır sonları korunur) + alt sayfa (bölüm) bağlantıları
  function vkCoz(html, baslik) {
    const d = new DOMParser().parseFromString(html, "text/html"), kok = d.querySelector(".mw-parser-output") || d.body;
    const eksik = /tamamlanmamış olduğu yönünde/i.test(kok.textContent);
    const alt = [...new Set([...kok.querySelectorAll("a[title]:not(.new)")].map((a) => a.getAttribute("title")).filter((t) => t && t.indexOf(baslik + "/") === 0))];
    kok.querySelectorAll("table,style,script,.ambox,[class*='mbox'],[class*='sister'],[class*='kardes'],[class*='license'],[class*='lisans'],[class*='metadata'],[role='navigation'],.toc,#toc,sup.reference,ol.references,.reference,.mw-references-wrap,.mw-editsection,.noprint,.ws-noexport,.navbox,img,figure,.thumb,.licenseContainer,#headertemplate,.header_template,.ws-header,.catlinks,.pagenum,.ws-pagenum,.mw-empty-elt,.mw-kartographer-maplink").forEach((e) => e.remove());
    kok.querySelectorAll("br").forEach((b) => b.replaceWith("\n"));
    kok.querySelectorAll("p,div,h1,h2,h3,h4,h5,h6,li,dd,dt,blockquote,center,pre,section").forEach((b) => b.append("\n\n"));
    const par = kok.textContent.replace(/\r/g, "").split(/\n[ \t ]*\n/)
      .map((s) => s.split("\n").map((x) => x.replace(/[ \t ]+/g, " ").trim()).filter(Boolean).join("\n"))
      .filter((s) => s && !/^(Kaynak|İkincil kaynak|Telif durumu|İlk yayımlanış|Kaynakça)\s*:/i.test(s) && !/kamuya maledilmiştir|Fikir ve Sanat Eserleri Kanunu|koruma süresi dolmuştur|tamamlanmamış olduğu yönünde|kardeş projeler|Vikiveri ögesi|Daha fazla bilgi$/i.test(s) && !/^\[?\d+\]?$/.test(s));
    return { par, alt, eksik };
  }
  async function vkSayfa(t) {
    const j = await vkApi({ action: "parse", page: t, prop: "text", redirects: "1", disableeditsection: "1", disablelimitreport: "1" });
    return vkCoz(j.parse.text, j.parse.title || t);
  }
  // Eseri getir: önbellek → Vikikaynak. Kısa ana sayfa + alt sayfalar varsa bölümler sırayla birleştirilir.
  async function eserGetir(t, ilerle) {
    const an = "vk-m-" + t, c = yerel.al(an); if (c && c.b) return c;
    const ana = await vkSayfa(t), b = [];
    if (ana.alt.length && wc(ana.par.join(" ")) < 600) {
      for (let i = 0; i < ana.alt.length; i++) {
        ilerle && ilerle(i + 1, ana.alt.length);
        let s = await vkSayfa(ana.alt[i]);
        if (s.alt.length && wc(s.par.join(" ")) < 600) { const ic = []; for (const a of s.alt) ic.push(...(await vkSayfa(a)).par); s = { ...s, par: ic }; }
        b.push({ ad: ana.alt[i].slice(t.length + 1).replace(/\//g, " · "), par: s.par });
      }
    } else b.push({ ad: "", par: ana.par });
    const e = { t: Date.now(), b, eksik: ana.eksik };
    const k = vkv(); k.onbellek = (k.onbellek || []).filter((x) => x !== t); k.onbellek.push(t);
    while (k.onbellek.length > 25) yerel.sil("vk-m-" + k.onbellek.shift());
    if (!yerel.koy(an, e)) { while (k.onbellek.length > 1) { yerel.sil("vk-m-" + k.onbellek.shift()); if (yerel.koy(an, e)) break; } }
    kaydet(); return e;
  }
  // Bölümleri ~PARCA kelimelik okuma parçalarına böl
  function parcala(e) {
    const p = [];
    e.b.forEach((bol, bi) => {
      let cur = { bol: bi, ad: bol.ad, par: [], kel: 0 };
      bol.par.forEach((x) => { const n = wc(x); if (cur.kel && cur.kel + n > PARCA) { p.push(cur); cur = { bol: bi, ad: bol.ad, par: [], kel: 0 }; } cur.par.push(x); cur.kel += n; });
      if (cur.par.length) p.push(cur);
    });
    return p;
  }
  const kisiHiz = () => { const k = vkv(); let kel = 0, sn = 0; Object.values(k.vk).forEach((x) => { kel += x.kelime || 0; sn += x.sure || 0; }); return sn > 300 && kel > 300 ? Math.max(80, Math.min(400, Math.round(kel / (sn / 60)))) : Math.round((hedef[0] + hedef[1]) / 2); };
  const dkMetin = (kel) => { const d = Math.max(1, Math.round(kel / kisiHiz())); return d < 60 ? `~${d} dk` : `~${Math.floor(d / 60)} sa ${d % 60} dk`; };
  const bitenSay = () => Object.values(vkv().vk).filter((x) => x.bitti).length;
  const devamEdenler = () => Object.entries(vkv().vk).filter(([, x]) => !x.bitti && (x.yuzde || 0) > 0).sort((a, b) => (b[1].son || 0) - (a[1].son || 0));
  function sayfaEkle(kel) { // uygulama içinde okunan kelimeleri günlük sayfa hedefine çevir
    const k = vkv(); k.birikim = (k.birikim || 0) + kel; const s = Math.floor(k.birikim / KELIME_SAYFA);
    if (s > 0) { k.birikim -= s * KELIME_SAYFA; k.gun[bugun()] = (k.gun[bugun()] || 0) + s; }
  }
  function oneri(t) { // aynı yazarın sıradaki (çok okunan) eseri; yoksa aynı raftan okunmamış bir eser
    const k = vkv(), e = katalog[t] || {}, okunmamis = (x) => x !== t && !(k.vk[x] && k.vk[x].bitti) && !(k.bos && k.bos[x]);
    const ayni = SECKI.filter((x) => x[1] === e.yazar).map((x) => x[0]).filter(okunmamis);
    if (ayni.length) return ayni[0];
    const raf = RAFLAR.find((r) => r.yazar === e.yazar || r.id === e.raf), c = raf && yerel.al("vk-raf-" + raf.id);
    const l = c && c.l ? c.l.filter(okunmamis) : []; return l.length ? pick(l) : null;
  }
  const ROZETLER = [
    ["🌱", "İlk eser", (s) => s.biten >= 1], ["📗", "5 eser", (s) => s.biten >= 5], ["📚", "15 eser", (s) => s.biten >= 15], ["🏛️", "40 eser", (s) => s.biten >= 40],
    ["📖", "İlk roman", (s) => s.roman >= 1], ["🔥", "3 gün seri", (s) => s.seri >= 3], ["⚡", "7 gün seri", (s) => s.seri >= 7], ["🌟", "30 gün seri", (s) => s.seri >= 30],
    ["⏱️", "1 saat okuma", (s) => s.dk >= 60], ["🕰️", "10 saat okuma", (s) => s.dk >= 600], ["💬", "5 alıntı", (s) => s.alinti >= 5], ["🧭", "4 farklı yazar", (s) => s.yazar >= 4]
  ];
  function rozetDurum() {
    const k = vkv(), v = Object.entries(k.vk), biten = v.filter(([, x]) => x.bitti);
    return { biten: biten.length + k.liste.filter((x) => x.bitti && !x.vk).length, roman: biten.filter(([t]) => (katalog[t] || {}).tur === "Roman").length + k.liste.filter((x) => x.bitti && !x.vk && /roman|klasik/i.test(x.tur || "")).length,
      seri: kSeri(), dk: Math.round(v.reduce((a, [, x]) => a + (x.sure || 0), 0) / 60), alinti: k.alinti.length, yazar: new Set(biten.map(([t, x]) => x.yazar)).size };
  }

  // ---- Kitaplık ekranı: arama, devam edenler, raflar ----
  function kitaplik(el, ilkRaf) {
    const k = vkv(); let raf = ilkRaf || "secki", ara = "";
    const satir = (t) => {
      const e = katalog[t] || { ad: t, yazar: "" }, d = k.vk[t];
      const dur = d ? (d.bitti ? "✔ Okundu" : d.yuzde ? `%${d.yuzde}` : "") : "";
      return `<button class="vk-sat" data-ac="${esc(t)}"><span class="vk-ad">${esc(e.ad)}</span><small>${esc(e.yazar || "")}${e.tur ? " · " + esc(e.tur) : ""}${d && d.kel ? " · " + dkMetin(d.kel) : ""}</small>${dur ? `<em class="${d.bitti ? "ok" : ""}">${dur}</em>` : ""}</button>`;
    };
    const ciz = async () => {
      const devam = devamEdenler().slice(0, 3);
      el.innerHTML = `<div class="vk-ara"><input class="kt-in" id="vkAra" type="search" placeholder="🔎 Eser ya da yazar ara…" value="${esc(ara)}" autocomplete="off"></div>
        ${devam.length && !ara ? `<h3>▶️ Okumaya devam et</h3>${devam.map(([t, x]) => `<button class="vk-devam" data-ac="${esc(t)}"><b>${esc(x.ad)}</b><small>${esc(x.yazar || "")} · %${x.yuzde} okundu</small><div class="kt-bar"><i style="width:${x.yuzde}%"></i></div></button>`).join("")}` : ""}
        <div class="vk-raflar">${[["secki", "⭐ Öne çıkanlar"], ...RAFLAR.map((r) => [r.id, r.ikon + " " + r.ad])].map(([id, ad]) => `<button class="kt-chip ${id === raf && !ara ? "on" : ""}" data-raf="${id}">${esc(ad)}</button>`).join("")}</div>
        <div id="vkListe" class="vk-liste"><p class="oa-not">Yükleniyor…</p></div>
        <p style="text-align:center"><button class="oa-btn ik" id="vkZar">🎲 Bana bir eser seç</button></p>
        <p class="oa-not">Metinler <a href="${VK}" target="_blank" rel="noopener">Vikikaynak</a>'tan (özgür kütüphane) alınır; telifi serbest eserlerdir. Açmak için internet gerekir; bir kez açtığın eser bu cihazda saklanır, sonra internetsiz de okunur. Eski yazımlı eserlerde bazı kelimeler bugünkünden farklı yazılmış olabilir.</p>`;
      const liste = el.querySelector("#vkListe"), inp = el.querySelector("#vkAra");
      inp.oninput = () => { ara = inp.value; clearTimeout(inp._z); inp._z = setTimeout(() => { listele(); el.querySelectorAll("[data-raf]").forEach((b) => b.classList.toggle("on", !ara && b.dataset.raf === raf)); }, 200); };
      el.querySelectorAll("[data-raf]").forEach((b) => (b.onclick = () => { raf = b.dataset.raf; ara = ""; ciz(); }));
      el.querySelector("#vkZar").onclick = async () => { const tum = await tumEserler(); const l = tum.filter((t) => !(k.vk[t] && k.vk[t].bitti)); if (l.length) eserAc(pick(l)); };
      el.querySelectorAll("[data-ac]").forEach((b) => (b.onclick = () => eserAc(b.dataset.ac)));
      const listele = async () => {
        if (ara.trim()) {
          const q = trNorm(ara.trim()), tum = await tumEserler();
          const l = tum.filter((t) => { const e = katalog[t] || {}; return trNorm(e.ad + " " + t).includes(q) || trNorm(e.yazar).includes(q); }).slice(0, 80);
          liste.innerHTML = (l.length ? l.map(satir).join("") : `<p class="oa-not">Kitaplıkta "${esc(ara)}" bulunamadı.</p>`) + `<p style="text-align:center"><button class="oa-btn" id="vkUzak">🌐 Vikikaynak'ın tamamında ara</button></p><div id="vkUzakL"></div>`;
          liste.querySelector("#vkUzak").onclick = () => uzakAra(ara.trim(), liste.querySelector("#vkUzakL"));
        } else if (raf === "secki") {
          const gr = {}; SECKI.forEach((x) => (gr[x[2]] = gr[x[2]] || []).push(x[0]));
          liste.innerHTML = Object.entries(gr).map(([tur, l]) => `<h3>${{ Roman: "📗 Romanlar ve uzun hikâyeler", Hikâye: "📕 Hikâyeler", Fıkra: "😄 Fıkralar", Şiir: "✒️ Şiirler" }[tur] || tur}</h3>${l.filter((t) => !(k.bos && k.bos[t])).map(satir).join("")}`).join("");
        } else {
          const r = RAFLAR.find((x) => x.id === raf);
          try {
            let l = rafEserleri(r, await rafYukle(r));
            if (!r.hepsi) { const s = new Set(SECKI.map((x) => x[0])); l = l.filter((t) => s.has(t)); }
            l.sort((a, b) => ((katalog[a].sira ?? 1e4) - (katalog[b].sira ?? 1e4)) || katalog[a].ad.localeCompare(katalog[b].ad, "tr"));
            liste.innerHTML = `<p class="oa-not">${l.length} eser</p>` + l.map(satir).join("");
          } catch (e) { liste.innerHTML = `<p class="oa-not">⚠️ Liste alınamadı (internet bağlantını kontrol et). <button class="kt-chip" id="vkTekrar">Tekrar dene</button></p>`; liste.querySelector("#vkTekrar").onclick = listele; }
        }
        liste.querySelectorAll("[data-ac]").forEach((b) => (b.onclick = () => eserAc(b.dataset.ac)));
      };
      listele();
    };
    ciz();
  }
  async function tumEserler() {
    const s = new Set(SECKI.map((x) => x[0]));
    for (const r of RAFLAR) { try { let l = rafEserleri(r, await rafYukle(r)); if (!r.hepsi) l = l.filter((t) => katalog[t] && katalog[t].sira !== undefined); l.forEach((t) => s.add(t)); } catch (e) {} }
    return [...s].filter((t) => !(vkv().bos && vkv().bos[t]));
  }
  async function uzakAra(q, kutu) {
    kutu.innerHTML = '<p class="oa-not">Aranıyor…</p>';
    try {
      const j = await vkApi({ action: "query", list: "search", srsearch: q, srnamespace: "0", srlimit: "25", srprop: "snippet" });
      const l = (j.query && j.query.search) || [];
      kutu.innerHTML = l.length ? `<p class="oa-not">Vikikaynak'taki her metin bir kitap değildir (mektup, belge, kanun da çıkabilir); açınca okuyabilirsin.</p>` + l.map((r) => `<button class="vk-sat" data-ac="${esc(r.title)}"><span class="vk-ad">${esc(r.title)}</span><small>${esc(String(r.snippet || "").replace(/<[^>]+>/g, "").slice(0, 110))}…</small></button>`).join("") : '<p class="oa-not">Sonuç bulunamadı.</p>';
      kutu.querySelectorAll("[data-ac]").forEach((b) => (b.onclick = () => { const t = b.dataset.ac; katalog[t] = katalog[t] || { ad: t, yazar: "", tur: "" }; eserAc(t); }));
    } catch (e) { kutu.innerHTML = '<p class="oa-not">⚠️ Vikikaynak\'a ulaşılamadı. İnternet bağlantını kontrol et.</p>'; }
  }

  // ---- Eseri aç: kaldığın yerden devam / baştan başla ----
  const geriKitaplik = () => ac(kitaplik, "Kitaplık", () => ac(kitap, "Kitap Okuma"));
  function eserAc(t) {
    const k = vkv(), d = k.vk[t], e = katalog[t] || { ad: t, yazar: "" };
    if (d && (d.yuzde > 0 || d.bitti)) {
      return ac((el) => {
        el.innerHTML = `<div class="vk-karar"><div style="font-size:44px">${d.bitti ? "🏆" : "📖"}</div><h2>${esc(e.ad)}</h2><p class="oa-not">${esc(e.yazar || "")}</p>
          ${d.bitti ? `<p>Bu eseri ${esc(d.bitis || "")} tarihinde bitirdin.</p>` : `<p>Kaldığın yer: <b>%${d.yuzde}</b>${d.top > 1 ? ` · ${d.parca + 1}. bölüm / ${d.top}` : ""}</p><div class="kt-bar" style="max-width:320px;margin:0 auto 14px"><i style="width:${d.yuzde}%"></i></div>`}
          <div class="vk-karar-dug">${d.bitti ? "" : `<button class="oa-btn" id="vkDevam">▶️ Kaldığın yerden devam et</button>`}<button class="oa-btn ik" id="vkBas">⏮️ ${d.bitti ? "Yeniden oku" : "Baştan başla"}</button></div></div>`;
        const dv = el.querySelector("#vkDevam"); if (dv) dv.onclick = () => okuyucu(t, d.parca || 0, d.y || 0);
        el.querySelector("#vkBas").onclick = () => { if (d.bitti) { d.bitti = false; d.tekrar = (d.tekrar || 0) + 1; } d.parca = 0; d.y = 0; d.yuzde = 0; kaydet(); okuyucu(t, 0, 0); };
      }, e.ad, geriKitaplik);
    }
    okuyucu(t, 0, 0);
  }

  // ---- Okuyucu ----
  function okuyucu(t, parcaNo, yKonum) {
    const k = vkv(), e = katalog[t] || { ad: t, yazar: "" };
    ac(async (el) => {
      el.innerHTML = `<div class="vk-yuk"><div class="vk-donen"></div><p id="vkYukM">“${esc(e.ad)}” açılıyor…</p></div>`;
      let eser;
      try { eser = await eserGetir(t, (i, n) => { const m = el.querySelector("#vkYukM"); if (m) m.textContent = `Bölümler yükleniyor: ${i} / ${n}`; }); }
      catch (err) {
        el.innerHTML = `<div class="vk-karar"><div style="font-size:40px">📡</div><p>Eser açılamadı. İnternet bağlantını kontrol et; bir kez açılan eserler sonra internetsiz de okunur.</p><div class="vk-karar-dug"><button class="oa-btn" id="vkTek">🔄 Tekrar dene</button><a class="oa-btn ik" href="${vkAdres(t)}" target="_blank" rel="noopener">Vikikaynak'ta aç</a></div></div>`;
        el.querySelector("#vkTek").onclick = () => okuyucu(t, parcaNo, yKonum); return;
      }
      const P = parcala(eser), top = P.reduce((a, p) => a + p.kel, 0);
      if (top < 8) {
        k.bos = k.bos || {}; k.bos[t] = 1; kaydet();
        el.innerHTML = `<div class="vk-karar"><div style="font-size:40px">📭</div><p>Bu eserin metni Vikikaynak'ta henüz eklenmemiş görünüyor. Listeden çıkardık; başka bir eser seç.</p><button class="oa-btn" id="vkG">📚 Kitaplığa dön</button></div>`;
        el.querySelector("#vkG").onclick = geriKitaplik; return;
      }
      const d = (k.vk[t] = k.vk[t] || { ad: e.ad, yazar: e.yazar, tur: e.tur, bas: bugun(), sure: 0, kelime: 0 });
      d.kel = top; d.top = P.length; d.son = Date.now();
      let no = Math.max(0, Math.min(P.length - 1, parcaNo || 0)), enUzak = 0, oncekiKel = 0, sessiz = 0, kayitZ = 0;
      const kat_ = el.closest(".oa-kat"), A = k.ayar;
      const temaUygula = () => { kat_.classList.remove("vk-acik", "vk-sepya", "vk-koyu"); kat_.classList.add("vk-" + A.tema, "vk-okur"); };
      temaUygula();
      const parcaCiz = (y) => {
        const p = P[no], sonP = no === P.length - 1;
        el.innerHTML = `<div class="vk-bilgi"><div class="kt-bar"><i id="vkBar"></i></div><div class="vk-bilgi-s"><span id="vkYuzde"></span><span id="vkKalan"></span><button id="vkAa" aria-label="Yazı ayarları">Aa</button></div>
            <div class="vk-ayar" id="vkAyar" hidden>
              <div><span>Yazı boyu</span><button data-a="boy-">A−</button><b>${A.boy}</b><button data-a="boy+">A+</button></div>
              <div><span>Satır aralığı</span><button data-a="ar-">−</button><b>${A.aralik.toFixed(2)}</b><button data-a="ar+">+</button></div>
              <div><span>Yazı tipi</span><button data-a="f-serif" class="${A.font === "serif" ? "on" : ""}" style="font-family:Georgia,serif">Tırnaklı</button><button data-a="f-sans" class="${A.font === "sans" ? "on" : ""}">Düz</button></div>
              <div><span>Görünüm</span><button data-a="t-acik" class="${A.tema === "acik" ? "on" : ""}">☀️ Açık</button><button data-a="t-sepya" class="${A.tema === "sepya" ? "on" : ""}">📜 Sepya</button><button data-a="t-koyu" class="${A.tema === "koyu" ? "on" : ""}">🌙 Koyu</button></div>
            </div></div>
          ${eser.eksik ? `<p class="vk-uyari">⚠️ Vikikaynak'ta bu eserin metninin eksik olabileceği belirtilmiş.</p>` : ""}
          <article class="vk-metin ${A.font}" lang="tr" style="font-size:${A.boy}px;line-height:${A.aralik}">
            ${no === 0 ? `<div class="vk-bas"><h1>${esc(e.ad)}</h1><p>${esc(e.yazar || "")}</p></div>` : ""}
            ${p.ad && (no === 0 || P[no - 1].bol !== p.bol) ? `<h2>${esc(p.ad)}</h2>` : ""}
            ${p.par.map((x) => `<p>${esc(x)}</p>`).join("")}
          </article>
          <div class="vk-alt">${no > 0 ? `<button class="oa-btn ik" id="vkOnc">← Önceki bölüm</button>` : "<span></span>"}
            ${sonP ? `<button class="oa-btn" id="vkBit" style="background:#16a34a">🏁 Bitirdim</button>` : `<button class="oa-btn" id="vkSon">Sonraki bölüm →</button>`}</div>
          <p class="oa-not" style="text-align:center">Bir kelimeyi ya da cümleyi seçersen sözlükte bakabilir, alıntı olarak kaydedebilirsin.</p>`;
        const metin = el.querySelector(".vk-metin");
        el.querySelector("#vkAa").onclick = () => { const a = el.querySelector("#vkAyar"); a.hidden = !a.hidden; };
        el.querySelectorAll("[data-a]").forEach((b) => (b.onclick = () => {
          const v = b.dataset.a, oran = konum();
          if (v === "boy-") A.boy = Math.max(14, A.boy - 1); else if (v === "boy+") A.boy = Math.min(34, A.boy + 1);
          else if (v === "ar-") A.aralik = Math.max(1.3, +(A.aralik - 0.15).toFixed(2)); else if (v === "ar+") A.aralik = Math.min(2.4, +(A.aralik + 0.15).toFixed(2));
          else if (v.startsWith("f-")) A.font = v.slice(2); else if (v.startsWith("t-")) { A.tema = v.slice(2); temaUygula(); }
          kaydet(); parcaCiz(oran); el.querySelector("#vkAyar").hidden = false;
        }));
        const onc = el.querySelector("#vkOnc"); if (onc) onc.onclick = () => { kaydetKonum(); no--; parcaCiz(0); };
        const son = el.querySelector("#vkSon"); if (son) son.onclick = () => { ilerleKaydet(1); no++; enUzak = 0; parcaCiz(0); };
        const bit = el.querySelector("#vkBit"); if (bit) bit.onclick = () => { ilerleKaydet(1); bitir(); };
        enUzak = Math.max(enUzak, y || 0); if (y) oncekiKel = Math.max(oncekiKel, Math.round(P[no].kel * y));
        clearTimeout(kayitZ); sessiz = Date.now() + 400;
        const yerles = () => { kat_.scrollTop = y ? metin.offsetTop + (metin.offsetHeight * y) - kat_.clientHeight * 0.25 : 0; guncelle(); };
        yerles(); requestAnimationFrame(yerles);
      };
      const konum = () => { const m = el.querySelector(".vk-metin"); if (!m) return 0; return Math.max(0, Math.min(1, (kat_.scrollTop + kat_.clientHeight * 0.25 - m.offsetTop) / Math.max(1, m.offsetHeight))); };
      const ilerleKaydet = (oran) => { // okunan kelime: bu parçada ulaşılan en uzak nokta
        enUzak = Math.max(enUzak, oran); const kel = Math.round(P[no].kel * enUzak), fark = Math.max(0, kel - oncekiKel);
        if (fark) { d.kelime = (d.kelime || 0) + fark; sayfaEkle(fark); oncekiKel = kel; }
        if (oran >= 1) oncekiKel = 0;
        kaydetKonum(oran >= 1 ? 1 : undefined);
      };
      const kaydetKonum = (zorla) => {
        const y = zorla === 1 ? 0 : konum(), nn = zorla === 1 ? Math.min(no + 1, P.length - 1) : no;
        const okunan = P.slice(0, no).reduce((a, p) => a + p.kel, 0) + P[no].kel * (zorla === 1 ? 1 : y);
        d.parca = nn; d.y = y; d.yuzde = Math.min(zorla === 1 && no === P.length - 1 ? 100 : 99, Math.max(d.bitti ? 100 : 0, Math.round((okunan / top) * 100))); d.son = Date.now(); kaydet();
      };
      const guncelle = () => {
        const y = konum(), okunan = P.slice(0, no).reduce((a, p) => a + p.kel, 0) + P[no].kel * y, yz = Math.round((okunan / top) * 100);
        const bar = el.querySelector("#vkBar"); if (!bar) return;
        bar.style.width = yz + "%"; el.querySelector("#vkYuzde").textContent = `%${yz}${P.length > 1 ? ` · Bölüm ${no + 1}/${P.length}` : ""}`;
        el.querySelector("#vkKalan").textContent = `Bu bölümde ${dkMetin(P[no].kel * (1 - y))} kaldı`;
      };
      let sonHareket = Date.now();
      const kaydir = () => { if (!document.body.contains(el) || !el.querySelector(".vk-metin")) return; sonHareket = Date.now(); if (Date.now() < sessiz) return; enUzak = Math.max(enUzak, konum()); guncelle(); clearTimeout(kayitZ); kayitZ = setTimeout(() => { if (document.body.contains(el) && el.querySelector(".vk-metin")) ilerleKaydet(konum()); }, 800); };
      kat_.addEventListener("scroll", kaydir, { passive: true });
      ["touchstart", "keydown", "mousemove"].forEach((o) => kat_.addEventListener(o, () => (sonHareket = Date.now()), { passive: true }));
      // Okuma süresi: sekme açık ve son 2 dakikada hareket varsa sayılır
      const zz = setInterval(() => {
        if (!document.body.contains(el)) { clearInterval(zz); kat_.removeEventListener("scroll", kaydir); return; }
        if (document.visibilityState === "visible" && Date.now() - sonHareket < 120000) { d.sure = (d.sure || 0) + 5; k.dk[bugun()] = (k.dk[bugun()] || 0) + 5 / 60; if (!d._isaret) { d._isaret = 1; isaretle(); } }
      }, 5000); zam.push(zz);
      // Seçim araç çubuğu: sözlük ve alıntı
      const cubuk = document.createElement("div"); cubuk.className = "vk-secim"; cubuk.hidden = true;
      cubuk.innerHTML = `<button data-s="soz">📘 Sözlükte bak</button><button data-s="al">💬 Alıntı kaydet</button>`; kat_.appendChild(cubuk);
      const secimMetni = () => { const s = window.getSelection(); if (!s || s.isCollapsed) return ""; const m = el.querySelector(".vk-metin"); return m && m.contains(s.anchorNode) ? String(s).trim() : ""; };
      const secimDinle = () => { if (!document.body.contains(cubuk)) return document.removeEventListener("selectionchange", secimDinle); cubuk.hidden = !secimMetni(); };
      document.addEventListener("selectionchange", secimDinle);
      cubuk.querySelector('[data-s="soz"]').onclick = () => { const s = secimMetni().split(/\s+/)[0].replace(/[^\p{L}'-]/gu, ""); if (s) window.open("https://tr.wiktionary.org/wiki/" + encodeURIComponent(s.toLocaleLowerCase("tr")), "_blank", "noopener"); };
      cubuk.querySelector('[data-s="al"]').onclick = () => { const s = secimMetni(); if (!s) return; k.alinti.unshift({ m: s.slice(0, 600), ad: e.ad, yazar: e.yazar || "", t: bugun() }); kaydet(); window.getSelection().removeAllRanges(); cubuk.hidden = true; bildir("💬 Alıntı kaydedildi"); };
      const bildir = (m) => { const b = document.createElement("div"); b.className = "vk-bildir"; b.textContent = m; kat_.appendChild(b); setTimeout(() => b.remove(), 1800); };
      const bitir = () => {
        const ilk = !d.bitti; d.bitti = true; d.bitis = bugun(); d.yuzde = 100; d.parca = 0; d.y = 0;
        if (ilk) { const l = k.liste.find((x) => x.vk === t); if (!l) k.liste.push({ ad: e.ad, yazar: e.yazar || "", tur: e.tur || "", vk: t, bitti: true, bitis: bugun(), okunan: Math.max(1, Math.round(top / KELIME_SAYFA)), toplam: Math.max(1, Math.round(top / KELIME_SAYFA)) }); }
        kaydet(); cubuk.remove(); kat_.classList.remove("vk-okur");
        const o = oneri(t), oe = o && (katalog[o] || { ad: o, yazar: "" });
        el.innerHTML = `<div class="vk-karar"><div style="font-size:56px">🏆</div><h2>${esc(e.ad)} bitti!</h2>
          <p>Bu, bitirdiğin <b>${bitenSay()}.</b> eser. ${d.sure ? `Toplam ${Math.max(1, Math.round(d.sure / 60))} dakika okudun.` : ""}</p>
          <p>Nasıl buldun?</p><div class="vk-yildiz">${[1, 2, 3, 4, 5].map((i) => `<button data-p="${i}" aria-label="${i} yıldız">${i <= (d.puan || 0) ? "⭐" : "☆"}</button>`).join("")}</div>
          ${oe ? `<div class="vk-oneri"><small>${oe.yazar === e.yazar && e.yazar ? `${esc(e.yazar)}'in çok okunan bir eseri daha var` : "Sıradaki için önerimiz"}</small><b>📖 ${esc(oe.ad)}</b><span>${esc(oe.yazar || "")}${oe.tur ? " · " + esc(oe.tur) : ""}</span><p>Bunu okumak ister misin?</p>
            <div class="vk-karar-dug"><button class="oa-btn" id="vkOneri">Evet, aç</button><button class="oa-btn ik" id="vkKit">Kitaplığa dön</button></div></div>` : `<div class="vk-karar-dug"><button class="oa-btn" id="vkKit">📚 Kitaplığa dön</button></div>`}
          <p><button class="kt-chip" id="vkPaylas">📤 Arkadaşına öner</button></p></div>`;
        el.querySelectorAll("[data-p]").forEach((b) => (b.onclick = () => { d.puan = +b.dataset.p; const l = k.liste.find((x) => x.vk === t); if (l) l.puan = d.puan; kaydet(); el.querySelectorAll("[data-p]").forEach((x) => (x.textContent = +x.dataset.p <= d.puan ? "⭐" : "☆")); }));
        const on = el.querySelector("#vkOneri"); if (on) on.onclick = () => eserAc(o);
        el.querySelector("#vkKit").onclick = geriKitaplik;
        el.querySelector("#vkPaylas").onclick = () => paylas(`${e.ad}${e.yazar ? " — " + e.yazar : ""} okudum${d.puan ? " " + "⭐".repeat(d.puan) : ""}. Sen de ücretsiz oku: ${vkAdres(t)}`);
      };
      parcaCiz(yKonum || 0);
    }, e.ad, () => { const s = document.querySelector(".vk-secim"); if (s) s.remove(); geriKitaplik(); });
  }
  const paylas = (m) => { if (navigator.share) navigator.share({ text: m }).catch(() => {}); else if (navigator.clipboard) navigator.clipboard.writeText(m).then(() => alert("Panoya kopyalandı, istediğin yere yapıştırabilirsin.")); };
  function alintilar(el) {
    const k = vkv();
    el.innerHTML = k.alinti.length ? k.alinti.map((a, i) => `<div class="kt-kitap vk-alinti"><p>“${esc(a.m)}”</p><small>— ${esc(a.yazar)}${a.yazar ? ", " : ""}${esc(a.ad)} · ${esc(a.t)}</small><div class="kt-row"><button data-pay="${i}">📤 Paylaş</button><button data-sil="${i}">🗑️</button></div></div>`).join("")
      : '<p class="oa-not">Henüz alıntın yok. Okurken beğendiğin bir cümleyi seç, “💬 Alıntı kaydet”e bas.</p>';
    el.querySelectorAll("[data-pay]").forEach((b) => (b.onclick = () => { const a = k.alinti[+b.dataset.pay]; paylas(`“${a.m}” — ${a.yazar}${a.yazar ? ", " : ""}${a.ad}`); }));
    el.querySelectorAll("[data-sil]").forEach((b) => (b.onclick = () => { k.alinti.splice(+b.dataset.sil, 1); kaydet(); alintilar(el); }));
  }

  window.KITAP_OKUMA_AC = KITAP_VAR ? () => ac(kitap, "Kitap Okuma") : null;

  // ---------- Menü ----------
  function menu(el) {
    const son = veri.okuma.slice(-1)[0], seri = (() => { let n = 0; const d = new Date(); for (let i = 0; i < 60; i++) { const k = new Date(d - i * 864e5); const s = k.getFullYear() + "-" + String(k.getMonth() + 1).padStart(2, "0") + "-" + String(k.getDate()).padStart(2, "0"); if (veri.gun[s]) n++; else if (i > 0) break; } return n; })();
    el.innerHTML = `
      ${ozetSerit()}
      <div class="oa-menu">
        ${KITAP_VAR ? `<button class="oa-kart kitap" data-g="kitap"><span class="i">📚</span><b>Kitap Okuma</b><small>${kitapAlt()}</small></button>` : ""}
        ${KOC_VAR ? `<button class="oa-kart koc" data-g="koc"><span class="i">🎤</span><b>Sesli Okuma Koçu</b><small>${(() => { const k = veri.koc.slice(-1)[0]; return k ? `Son: %${k.dogruluk} doğru okuma · ${k.hiz} kelime/dk` : "Metni sesli oku; doğru okuduğun kelimeler yeşil olsun, zorlandıklarını birlikte çalışalım."; })()}</small></button>` : ""}
        <button class="oa-kart ana olc" data-g="olc"><span class="i">⏱️</span><b>Okuma Hızımı Ölç</b><small>${olcumAlt()}</small></button>
        ${ANTRENMAN_VAR ? `<button class="oa-kart ana" data-g="gunluk"><span class="i">🏋️</span><b>Günlük Antrenman</b><small>Göz egzersizi → Schultz → Kelime flaşı → İşaretçili okuma · ~8 dk${seri ? ` · 🔥 ${seri} gün` : ""}</small></button>` : ""}
        <button class="oa-kart" data-g="okuma"><span class="i">👉</span><b>İşaretçili Okuma</b><small>Metin seçtiğin hızda vurgulanır, sonra anlama soruları${son ? ` · son: ${son.hiz} k/dk, %${son.anlama}` : ""}</small></button>
        <button class="oa-kart" data-g="flas"><span class="i">⚡</span><b>Kelime Flaşı</b><small>${NO <= 2 ? "Kelimeyi bir bakışta tanı" : "Kelime gruplarını bir bakışta oku"}${veri.flas.ms ? ` · ${veri.flas.ms} ms` : ""}</small></button>
        <button class="oa-kart" data-g="schultz"><span class="i">🔢</span><b>Schultz Tablosu</b><small>Gözünü ortada tut, sayıları sırayla bul${veri.schultz.length ? ` · en iyi: ${Math.min(...veri.schultz.map((x) => x.sn))} sn` : ""}</small></button>
        <button class="oa-kart" data-g="kamera"><span class="i">📸</span><b>Kamera Zihni</b><small>Kısa süre göreni hatırla</small></button>
        <button class="oa-kart" data-g="goz"><span class="i">👀</span><b>Göz Egzersizi</b><small>Başını kıpırdatmadan topu gözünle izle · 30 sn</small></button>
        <button class="oa-kart" data-g="gelisim"><span class="i">📈</span><b>Gelişimim</b><small>Okuma hızı, anlama ve egzersiz sonuçların</small></button>
      </div>
      <p class="oa-not">${NO}. sınıf için yaklaşık akıcı okuma hedefi: dakikada <b>${hedef[0]}–${hedef[1]}</b> kelime, anlama en az %80. Her çocuğun hızı farklıdır; önemli olan kendi gelişimin.</p>`;
    const G = { kitap: [kitap, "Kitap Okuma"], koc: [koc, "Sesli Okuma Koçu"], olc: [olc, "Okuma Hızımı Ölç"], okuma: [isaretci, "İşaretçili Okuma"], flas: [flas, "Kelime Flaşı"], schultz: [schultz, "Schultz Tablosu"], kamera: [kamera, "Kamera Zihni"], goz: [goz, "Göz Egzersizi"], gelisim: [gelisim, "Gelişimim"] };
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
          veri.okuma.push({ t: bugun(), hiz: gercek, anlama: yuzde, oneri }); veri.okuma = veri.okuma.slice(-80); seviyeGuncelle(yuzde); kaydet();
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
    const go = gecerliOlcum(), ol = go.slice(-12), olMax = Math.max(hedef[1], ...ol.map((x) => x.hiz), 1), ilk = go[0], son = go.slice(-1)[0];
    el.innerHTML = `
      <h3>⏱️ Okuma ölçümlerim</h3>
      ${ol.length ? `<div class="oa-karolar"><div><small>Son hız</small><b>${son.hiz}</b><small>kelime/dk</small></div><div><small>Son anlama</small><b>%${son.anlama}</b></div><div><small>Rekor (etkili)</small><b>${rekor()}</b></div>${go.length > 1 ? `<div><small>İlk ölçümden beri</small><b>${son.hiz - ilk.hiz >= 0 ? "+" : ""}${son.hiz - ilk.hiz}</b><small>kelime/dk</small></div>` : ""}</div>
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
      if (KITAP_VAR) {
        const c = document.createElement("button"); c.className = "ozel-kart"; c.style.background = "linear-gradient(135deg,#7c3aed,#db2777)";
        c.innerHTML = `<span class="ikon">📚</span><span><b>Kitap Okuma</b><small>${kitapAlt()}</small></span>`;
        c.onclick = () => ac(kitap, "Kitap Okuma"); kutu.appendChild(c);
      }
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
