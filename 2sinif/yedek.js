// Yedekle / Geri Yükle — bu cihazdaki BÜTÜN sınıfların ilerlemesini (aynı sitede tutulan tüm kayıtlar) tek dosyada ya da
// kopyalanabilir bir kodda saklar. Telefon değişirken, tarayıcı verileri silinmeden önce ya da iki cihaz arasında taşımak için.
// 5–12: ana sayfada kart (ANA_KARTLAR). Minik–4: Veli Köşesi → Ayarlar içinde düğme. Dışarıya açılan: window.YEDEK_AC()
(function () {
  // Kapalı: arayüzde gösterilmiyor (kafa karıştırdığı için). Yeniden açmak için true yapın.
  const ACIK = false;
  if (!ACIK) return;
  const SON = "yedek-son", SURUM = 1;
  const gun = (t) => Math.floor((Date.now() - t) / 86400000);
  const bugun = () => new Date().toISOString().slice(0, 10);
  const oku = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const yaz = (k, v) => { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } };

  function topla() {
    const veri = {};
    try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k !== SON) veri[k] = localStorage.getItem(k); } } catch (e) {}
    return { uygulama: "oyunla-ogren", surum: SURUM, tarih: new Date().toISOString(), veri };
  }
  function ozet(y) {
    const v = y.veri || {}; const sinif = [];
    for (const [k, s] of Object.entries(v)) {
      let o; try { o = JSON.parse(s); } catch (e) { continue; }
      if (!o || typeof o !== "object") continue;
      if (o.istatistik || o.yildiz !== undefined || o.konu) sinif.push(k);
    }
    return { anahtar: Object.keys(v).length, sinif };
  }
  // Kod: JSON → gzip → base64 (CompressionStream yoksa sıkıştırmasız base64)
  const b64 = (u8) => { let s = ""; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
  const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  async function kodla(obj) {
    const ham = new TextEncoder().encode(JSON.stringify(obj));
    if (window.CompressionStream) {
      const cs = new Blob([ham]).stream().pipeThrough(new CompressionStream("gzip"));
      return "OO1z" + b64(new Uint8Array(await new Response(cs).arrayBuffer()));
    }
    return "OO1p" + b64(ham);
  }
  async function coz(kod) {
    kod = kod.replace(/\s+/g, "");
    if (kod.startsWith("{")) return JSON.parse(kod);
    const tip = kod.slice(0, 4), u8 = unb64(kod.slice(4));
    if (tip === "OO1z") { const ds = new Blob([u8]).stream().pipeThrough(new DecompressionStream("gzip")); return JSON.parse(await new Response(ds).text()); }
    if (tip === "OO1p") return JSON.parse(new TextDecoder().decode(u8));
    throw new Error("kod");
  }
  function geriYukle(y) {
    if (!y || y.uygulama !== "oyunla-ogren" || typeof y.veri !== "object") throw new Error("biçim");
    let n = 0; for (const [k, v] of Object.entries(y.veri)) if (typeof v === "string" && yaz(k, v)) n++;
    return n;
  }
  const isaretle = () => yaz(SON, String(Date.now()));

  // ---------- Arayüz (tam ekran katman) ----------
  const css = document.createElement("style");
  css.textContent = `.yd-kat{position:fixed;inset:0;z-index:70;background:var(--bg,#fffaf0);color:var(--yazi,#2b2140);overflow:auto;font-family:inherit}
.yd-ust{position:sticky;top:0;display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--kart,#fff);border-bottom:1px solid var(--sinir,#eadfc8)}
.yd-ust b{flex:1;font-size:19px}.yd-ic{max-width:680px;margin:0 auto;padding:16px}
.yd-kutu{background:var(--kart,#fff);border:1px solid var(--sinir,#eadfc8);border-radius:16px;padding:14px 16px;margin-bottom:14px}
.yd-kutu h3{margin:0 0 6px;font-size:18px}.yd-not{color:var(--soluk,#7a6f8f);font-size:14.5px;line-height:1.45}
.yd-btn{display:inline-block;border:none;border-radius:12px;padding:11px 16px;font-size:16px;font-weight:700;background:#0ea5e9;color:#fff;margin:8px 6px 0 0;cursor:pointer}
.yd-btn.ik{background:var(--bg,#f3f4f6);color:var(--yazi,#222);border:1px solid var(--sinir,#ddd)}
.yd-kapat{border:1px solid var(--sinir,#ddd);background:none;color:inherit;border-radius:10px;padding:6px 12px;font-size:15px;cursor:pointer}
.yd-kat textarea{width:100%;min-height:96px;border-radius:12px;border:1px solid var(--sinir,#ddd);background:var(--bg,#fff);color:inherit;padding:10px;font:13px/1.4 ui-monospace,monospace;word-break:break-all}
.yd-durum{margin-top:8px;font-weight:700}.yd-uyari{color:#b45309}
.ozel-kart.yedek{background:linear-gradient(135deg,#334155,#0ea5e9)}`;
  document.head.appendChild(css);

  function ac() {
    const eski = document.querySelector(".yd-kat"); if (eski) eski.remove();
    const s = +oku(SON) || 0, oz = ozet(topla());
    const k = document.createElement("div"); k.className = "yd-kat";
    k.innerHTML = `<div class="yd-ust"><b>💾 Yedekle / Geri Yükle</b><button class="yd-kapat">✕ Kapat</button></div>
    <div class="yd-ic">
      <p class="yd-not">İlerleme bu cihazın tarayıcısında saklanır. Yedek, bu cihazdaki <b>bütün sınıfların</b> (kardeşlerin kayıtları dahil) yıldızlarını, istatistiklerini, ders programını, hikâye ve okuma kayıtlarını içerir.
      ${s ? `Son yedek: <b>${gun(s) === 0 ? "bugün" : gun(s) + " gün önce"}</b>.` : `<span class="yd-uyari">Henüz hiç yedek alınmadı.</span>`} Kayıtlı sınıf: <b>${oz.sinif.length}</b>.</p>
      <div class="yd-kutu"><h3>📥 Dosyaya yedekle</h3><div class="yd-not">Yedek dosyası indirilir. Google Drive'a, e-postaya ya da WhatsApp'ta kendinize gönderebilirsiniz.</div>
        <button class="yd-btn" data-i="dosya">💾 Yedek dosyasını indir</button><button class="yd-btn ik" data-i="paylas" ${navigator.share ? "" : "hidden"}>📤 Paylaş</button><div class="yd-durum" data-d="1"></div></div>
      <div class="yd-kutu"><h3>🔑 Kodla taşı</h3><div class="yd-not">Yedeği yazı olarak kopyalayın, diğer cihazda "Koddan yükle" kutusuna yapıştırın.</div>
        <button class="yd-btn" data-i="kod">📋 Yedek kodunu kopyala</button><textarea readonly hidden></textarea><div class="yd-durum" data-d="2"></div></div>
      <div class="yd-kutu"><h3>📂 Geri yükle</h3><div class="yd-not">Yedekteki kayıtlar bu cihazdakilerin yerine geçer. Önce bu cihazın yedeğini almanız önerilir.</div>
        <button class="yd-btn" data-i="dosyaAc">📂 Yedek dosyası seç</button><input type="file" accept=".json,application/json,text/plain" hidden>
        <textarea placeholder="Ya da yedek kodunu buraya yapıştırın…"></textarea><button class="yd-btn ik" data-i="kodYukle">🔑 Koddan yükle</button><div class="yd-durum" data-d="3"></div></div>
    </div>`;
    document.body.appendChild(k);
    const D = (n, t, kotu) => { const d = k.querySelector(`[data-d="${n}"]`); d.textContent = t; d.className = "yd-durum" + (kotu ? " yd-uyari" : ""); };
    const B = (i) => k.querySelector(`[data-i="${i}"]`);
    const kapat = () => { k.remove(); if (window.ANA_YENILE) try { ANA_YENILE(); } catch (e) {} };
    k.querySelector(".yd-kapat").onclick = kapat;
    const dosyaAdi = () => `oyunla-ogren-yedek-${bugun()}.json`;
    const blob = () => new Blob([JSON.stringify(topla())], { type: "application/json" });
    B("dosya").onclick = () => { const a = document.createElement("a"); a.href = URL.createObjectURL(blob()); a.download = dosyaAdi(); document.body.appendChild(a); a.click(); a.remove(); isaretle(); D(1, "✅ Yedek dosyası indirildi."); };
    B("paylas").onclick = async () => {
      try { const f = new File([blob()], dosyaAdi(), { type: "application/json" });
        if (navigator.canShare && navigator.canShare({ files: [f] })) await navigator.share({ files: [f], title: "Oyunla Öğren yedeği" });
        else await navigator.share({ title: "Oyunla Öğren yedek kodu", text: await kodla(topla()) });
        isaretle(); D(1, "✅ Paylaşıldı.");
      } catch (e) { if (e && e.name !== "AbortError") D(1, "Paylaşılamadı; dosyayı indirin.", true); }
    };
    B("kod").onclick = async () => {
      const t = k.querySelectorAll("textarea")[0], kod = await kodla(topla());
      t.hidden = false; t.value = kod; t.select();
      try { await navigator.clipboard.writeText(kod); D(2, `✅ Kod kopyalandı (${Math.round(kod.length / 1024) || 1} KB).`); } catch (e) { D(2, "Kodu seçip kopyalayın."); }
      isaretle();
    };
    const yukle = (y, n) => {
      try { const say = geriYukle(y); D(n, `✅ ${say} kayıt yüklendi. Sayfa yenileniyor…`); setTimeout(() => location.reload(), 1200); }
      catch (e) { D(n, "Bu bir Oyunla Öğren yedeği değil.", true); }
    };
    const inp = k.querySelector("input[type=file]");
    B("dosyaAc").onclick = () => inp.click();
    inp.onchange = () => { const f = inp.files[0]; if (!f) return; f.text().then(async (t) => { let y; try { y = await coz(t); } catch (e) { return D(3, "Dosya okunamadı.", true); } yukle(y, 3); }); };
    B("kodYukle").onclick = async () => { const t = k.querySelectorAll("textarea")[1].value.trim(); if (!t) return D(3, "Önce kodu yapıştırın.", true); let y; try { y = await coz(t); } catch (e) { return D(3, "Kod çözülemedi; eksik kopyalanmış olabilir.", true); } yukle(y, 3); };
  }
  window.YEDEK_AC = ac;
  window.YEDEK_DURUM = () => { const s = +oku(SON) || 0; return s ? gun(s) : null; };

  // 5–12: ana sayfa kartı
  if (window.ANA_KARTLAR || typeof kayit !== "undefined") {
    window.ANA_KARTLAR = window.ANA_KARTLAR || [];
    window.ANA_KARTLAR.push((kutu) => {
      const g = window.YEDEK_DURUM();
      const b = document.createElement("button"); b.className = "ozel-kart yedek";
      b.innerHTML = `<span class="ikon">💾</span><span><b>Yedekle / Taşı</b><small>${g === null ? "⚠️ Henüz yedek yok" : g > 14 ? `⚠️ Son yedek ${g} gün önce` : g === 0 ? "Son yedek: bugün ✅" : `Son yedek: ${g} gün önce`}</small></span>`;
      b.onclick = ac; kutu.appendChild(b);
    });
    if (window.ANA_YENILE) try { window.ANA_YENILE(); } catch (e) {}
  }
})();
