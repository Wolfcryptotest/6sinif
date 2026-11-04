// 👨‍👩‍👧 Haftalık veli karnesi (Minik–4. sınıf): Veli Köşesi'nde bu haftanın özetini gösterir ve WhatsApp / mesajla paylaşılacak
// metin hazırlar. Veriyi APP_TEST.K() (uygulamanın kayıt nesnesi) ve DERS'ten okur; hiçbir şeyi değiştirmez.
(function () {
  const iki = (n) => String(n).padStart(2, "0");
  const tarih = (d) => `${d.getFullYear()}-${iki(d.getMonth() + 1)}-${iki(d.getDate())}`;
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const GUN = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

  function ozet(geri) {
    const K = window.APP_TEST && APP_TEST.K && APP_TEST.K(); if (!K) return null;
    const bugun = new Date(); bugun.setHours(0, 0, 0, 0);
    const pzt = new Date(bugun); pzt.setDate(pzt.getDate() - ((pzt.getDay() + 6) % 7) - 7 * geri);
    const gunler = []; for (let i = 0; i < 7; i++) { const d = new Date(pzt); d.setDate(d.getDate() + i); if (d <= bugun) gunler.push([d, (K.gunluk || {})[tarih(d)] || {}]); }
    const soru = gunler.reduce((a, [, g]) => a + (g.soru || 0), 0), aktif = gunler.filter(([, g]) => (g.soru || 0) > 0 || g.hikaye).length;
    const hikaye = gunler.filter(([, g]) => g.hikaye).length;
    const enIyi = gunler.reduce((m, x) => ((x[1].soru || 0) > (m ? m[1].soru || 0 : -1) ? x : m), null);
    // konu başarıları (toplam)
    const dersler = [], zayif = [], guclu = [];
    for (const [dk, D] of Object.entries(window.DERS || {})) {
      let d = 0, t = 0;
      (D.temalar || []).forEach((te) => (te.konular || []).forEach((k) => { const s = (K.konu || {})[k.id]; if (!s) return; d += s.d; t += s.t; if (s.t >= 6) { const o = s.d / s.t; if (o < 0.6) zayif.push([D.ikon, k.ad, Math.round(o * 100)]); else if (o >= 0.9) guclu.push([D.ikon, k.ad]); } }));
      if (t) dersler.push([D.ikon, D.ad, Math.round((100 * d) / t), t]);
    }
    const okuma = (K.okuma || []).slice(-3);
    return { K, pzt, gunler, soru, aktif, hikaye, enIyi, dersler, zayif: zayif.sort((a, b) => a[2] - b[2]).slice(0, 4), guclu: guclu.slice(0, 4), okuma, bekleyen: (K.hatalar || []).length };
  }

  function metin(o) {
    const S = window.SINIF || {}, ad = o.K.ad || "Çocuğum";
    const bas = o.pzt.toLocaleDateString("tr-TR", { day: "numeric", month: "long" });
    let t = `📒 ${ad} — Haftalık Karne (${bas} haftası)\n${S.baslik || document.title}\n\n`;
    t += `📅 Çalıştığı gün: ${o.aktif}/7\n✏️ Çözülen soru: ${o.soru}\n📚 Okunan günün hikâyesi: ${o.hikaye}\n⭐ Toplam yıldız: ${o.K.yildiz || 0}\n`;
    if (o.enIyi && o.enIyi[1].soru) t += `🏆 En çok çalıştığı gün: ${GUN[o.enIyi[0].getDay()]} (${o.enIyi[1].soru} soru)\n`;
    if (o.dersler.length) t += `\n📊 Derslere göre başarı:\n` + o.dersler.map((d) => `${d[0]} ${d[1]}: %${d[2]}`).join("\n") + "\n";
    if (o.guclu.length) t += `\n💪 Çok iyi olduğu konular: ` + o.guclu.map((x) => x[1]).join(", ") + "\n";
    if (o.zayif.length) t += `\n🎯 Tekrar etmesi iyi olur: ` + o.zayif.map((x) => `${x[1]} (%${x[2]})`).join(", ") + "\n";
    if (o.okuma.length) t += `\n⏱ Son okuma hızı: ${o.okuma[o.okuma.length - 1].hiz} kelime/dk\n`;
    if (o.bekleyen) t += `🔁 Tekrar bekleyen hatalı soru: ${o.bekleyen}\n`;
    t += o.aktif >= 5 ? "\n🌟 Harika bir hafta! Düzenli çalışmaya devam." : o.aktif >= 3 ? "\n👍 İyi gidiyor. Her gün biraz oynamak en iyisi." : "\n🙂 Bu hafta biraz az çalışıldı. Günde 10–15 dakika yeterli.";
    return t;
  }

  window.KARNE_PAYLAS = function () {
    let geri = 0;
    const p = document.createElement("div"); p.className = "panel";
    const ciz = () => {
      const o = ozet(geri); if (!o) { p.innerHTML = ""; return; }
      const m = metin(o);
      p.innerHTML = `<h3>📒 Haftalık Karne</h3>
        <div class="satir" style="gap:8px;flex-wrap:wrap;margin:4px 0 8px"><button class="buyukbtn ikincil" data-g="1" style="flex:1;margin:0;font-size:16px;padding:8px">◀ Önceki hafta</button><button class="buyukbtn ikincil" data-g="-1" style="flex:1;margin:0;font-size:16px;padding:8px" ${geri ? "" : "disabled"}>Sonraki ▶</button></div>
        <pre style="white-space:pre-wrap;font:inherit;font-size:16px;line-height:1.5;margin:0 0 10px;background:var(--bg);border-radius:14px;padding:12px">${esc(m)}</pre>
        <button class="buyukbtn" data-p style="--renk:#25d366;font-size:18px">📤 Karneyi paylaş (WhatsApp / mesaj)</button><div class="not" data-d></div>`;
      p.querySelectorAll("[data-g]").forEach((b) => (b.onclick = () => { geri = Math.max(0, geri + +b.dataset.g); ciz(); }));
      p.querySelector("[data-p]").onclick = async () => {
        const d = p.querySelector("[data-d]");
        try { if (navigator.share) { await navigator.share({ title: "Haftalık Karne", text: m }); return; } } catch (e) { if (e && e.name === "AbortError") return; }
        try { await navigator.clipboard.writeText(m); d.textContent = "✅ Karne kopyalandı; WhatsApp'a yapıştırabilirsiniz."; }
        catch (e) { d.textContent = "Metni basılı tutup seçin ve kopyalayın."; }
      };
    };
    ciz();
    return p;
  };
})();
