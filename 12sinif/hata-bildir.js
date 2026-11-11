// ⚠️ "Bu soruda hata var" — öğrenci şüphelendiği soruyu işaretler; İlerleme Paneli'nde "Bildirilen Sorular" listesinde toplanır.
// Veli listeyi tek dokunuşla paylaşabilir (WhatsApp vb.) ya da kopyalayabilir. Veriler yalnızca bu cihazda saklanır. (5–12. sınıfta aynı dosya)
(function () {
  const DEPO = "bildirilenSorular-" + location.pathname.replace(/index\.html$/, "");
  const oku = () => { try { return JSON.parse(localStorage.getItem(DEPO)) || []; } catch (e) { return []; } };
  const yaz = (l) => { try { localStorage.setItem(DEPO, JSON.stringify(l.slice(-200))); } catch (e) {} };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sinifAdi = () => (document.title || "").split("·")[0].split("|")[0].trim();
  const NEDEN = ["Doğru cevap yanlış", "Soru hatalı / anlaşılmıyor", "Şıklarda hata var", "Çözüm yanlış"];

  const st = document.createElement("style");
  st.textContent = `.hata-btn{margin-top:10px;background:none;border:1px dashed #d97706;color:#b45309;border-radius:10px;padding:6px 10px;font:inherit;font-size:.85em;cursor:pointer}
  .hata-kutu{margin-top:8px;display:flex;flex-wrap:wrap;gap:6px}.hata-kutu button{border:1px solid #d97706;background:#fff7ed;color:#9a3412;border-radius:999px;padding:5px 10px;font:inherit;font-size:.82em;cursor:pointer}
  .hata-tamam{margin-top:8px;color:#15803d;font-size:.88em}.bild-kart{border:1px solid #f59e0b55;border-radius:14px;padding:12px;margin:10px 0;background:#fffbeb10}
  .bild-kart small{opacity:.75}.bild-kart .s{font-weight:600;margin:4px 0}`;
  document.head.appendChild(st);

  function ekle(alt) {
    if (!alt || alt.querySelector(".hata-btn")) return;
    const coz = alt.querySelector(".cozum"); if (!coz) return;
    const ekr = document.getElementById("ekran"); if (!ekr) return;
    const soru = ekr.querySelector(".soru"), sec = ekr.querySelector("#sec"); if (!soru || !sec) return;
    const b = document.createElement("button"); b.className = "hata-btn"; b.type = "button"; b.textContent = "⚠️ Bu soruda hata var";
    b.onclick = () => {
      b.remove();
      const kutu = document.createElement("div"); kutu.className = "hata-kutu";
      kutu.innerHTML = NEDEN.map((n, i) => `<button type="button" data-i="${i}">${n}</button>`).join("");
      kutu.onclick = (e) => {
        const t = e.target.closest("button"); if (!t) return;
        const secenekler = [...sec.children].map((x) => x.textContent.replace(/^[A-D]\)\s*/, ""));
        const dogruEl = sec.querySelector(".dogru");
        const l = oku();
        l.push({ t: new Date().toISOString().slice(0, 16).replace("T", " "), sinif: sinifAdi(), yer: (document.getElementById("baslik") || {}).textContent || "",
          soru: soru.textContent, secenekler, dogru: dogruEl ? dogruEl.textContent.replace(/^[A-D]\)\s*/, "") : "", cozum: (coz.textContent || "").trim().slice(0, 400), neden: NEDEN[+t.dataset.i] });
        yaz(l);
        kutu.outerHTML = `<div class="hata-tamam">✅ Teşekkürler! Soru İlerleme Paneli'ndeki "Bildirilen Sorular" listesine kaydedildi.</div>`;
      };
      coz.appendChild(kutu);
    };
    coz.appendChild(b);
  }
  const izle = () => {
    const ekr = document.getElementById("ekran"); if (!ekr) return setTimeout(izle, 500);
    new MutationObserver(() => { const alt = ekr.querySelector("#alt"); if (alt) ekle(alt); }).observe(ekr, { childList: true, subtree: true });
  };
  izle();

  function metin(l) {
    return "⚠️ Bildirilen sorular (" + sinifAdi() + ")\n\n" + l.map((x, i) => `${i + 1}) [${x.t}] ${x.yer}\nNeden: ${x.neden}\nSoru: ${x.soru}\nŞıklar: ${x.secenekler.join(" | ")}\nUygulamanın doğru dediği: ${x.dogru}`).join("\n\n");
  }
  function liste() {
    const ekr = document.getElementById("ekran"); const l = oku();
    ekr.innerHTML = `<p class="not">Öğrencinin "Bu soruda hata var" diye işaretlediği sorular burada toplanır. Listeyi paylaşarak düzeltilmesini sağlayabilirsiniz. Veriler yalnızca bu cihazda tutulur.</p>
      ${l.length ? `<div class="satir"><button class="btn" id="bPay">📤 Listeyi paylaş / kopyala</button> <button class="btn ikincil" id="bSil">🗑️ Listeyi temizle</button></div>` : `<p>Henüz bildirilen soru yok.</p>`}
      ${l.slice().reverse().map((x) => `<div class="bild-kart"><small>${esc(x.t)} · ${esc(x.yer)} · <b>${esc(x.neden)}</b></small><div class="s">${esc(x.soru)}</div><small>Şıklar: ${esc(x.secenekler.join(" | "))}</small><br><small>Uygulamanın doğru dediği: <b>${esc(x.dogru)}</b></small></div>`).join("")}`;
    const p = document.getElementById("bPay");
    if (p) p.onclick = async () => {
      const m = metin(oku());
      try { if (navigator.share) { await navigator.share({ title: "Bildirilen sorular", text: m }); return; } } catch (e) {}
      try { await navigator.clipboard.writeText(m); p.textContent = "✅ Kopyalandı"; } catch (e) { prompt("Metni kopyalayın:", m); }
    };
    const s = document.getElementById("bSil");
    if (s) s.onclick = () => { if (confirm("Bildirilen sorular listesi silinsin mi?")) { yaz([]); liste(); } };
  }
  const sar = () => {
    if (typeof window.ilerlemePaneli !== "function") return setTimeout(sar, 400);
    if (window.ilerlemePaneli.bildirimli) return;
    const asil = window.ilerlemePaneli;
    window.ilerlemePaneli = function () {
      asil.apply(this, arguments);
      const ekr = document.getElementById("ekran"); const n = oku().length;
      const b = document.createElement("button"); b.className = "ozel-kart"; b.style.marginBottom = "16px";
      b.innerHTML = `<span class="ikon">⚠️</span><span><b>Bildirilen Sorular</b><small>${n ? n + " soru bildirildi · paylaşmak için dokunun" : "Hatalı bulduğunuz sorular burada toplanır"}</small></span>`;
      b.onclick = () => (typeof git === "function" ? git(liste, "⚠️ Bildirilen Sorular") : liste());
      const ilk = ekr.firstElementChild; if (ilk && ilk.nextSibling) ekr.insertBefore(b, ilk.nextSibling); else ekr.appendChild(b);
    };
    Object.assign(window.ilerlemePaneli, asil, { bildirimli: true });
  };
  sar();
})();
