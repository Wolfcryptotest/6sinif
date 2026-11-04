// 📕 Uygulama içi kitap okuyucu (1–4. sınıfta aynı dosya). MEB kitap bağlantılarına (a.kitap.meb) dokununca
// PDF indirilmeden uygulamanın içinde açılır.
//  • EBA (cdn.eba.gov.tr) kitapları: pdf.js ile sayfa sayfa; sayfalar kaydırdıkça yüklenir (kitabın tamamı beklenmez).
//  • tymm.meb.gov.tr kitapları uygulama içinde gösterilemez (site izin vermiyor): açıklama + "Kitabı aç" düğmesi.
// Kalınan sayfa hatırlanır, yakınlaştırılabilir, tabletin geri tuşu okuyucuyu kapatır. İnternet gerekir.
(function () {
  if (window.KITAP_OKU) return;
  const PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";
  const DOGRUDAN = /^https:\/\/cdn\.eba\.gov\.tr\//;
  const KONUM = "kitap-konum";
  const konumlar = () => { try { return JSON.parse(localStorage.getItem(KONUM)) || {}; } catch (e) { return {}; } };
  const konumYaz = (u, s) => { try { const k = konumlar(); k[u] = s; localStorage.setItem(KONUM, JSON.stringify(k)); } catch (e) {} };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  document.head.insertAdjacentHTML("beforeend", `<style>
.ko-kat{position:fixed;inset:0;z-index:70;background:#2b2b33;display:flex;flex-direction:column}
.ko-ust{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#18181d;color:#fff;flex-wrap:wrap}
.ko-ust b{flex:1;min-width:120px;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ko-ust button,.ko-ust a{border:none;border-radius:10px;padding:9px 12px;font-size:16px;background:#33333d;color:#fff;text-decoration:none}
.ko-ust input{width:56px;padding:8px;border-radius:10px;border:none;font-size:16px;text-align:center}
.ko-sayfalar{flex:1;overflow:auto;padding:10px 0;-webkit-overflow-scrolling:touch}
.ko-sayfa{margin:0 auto 10px;background:#fff;box-shadow:0 2px 10px rgba(0,0,0,.4);position:relative}
.ko-sayfa canvas{display:block;width:100%;height:100%}
.ko-sayfa span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:600 18px system-ui}
.ko-durum{color:#ddd;text-align:center;padding:30px 16px;font:16px system-ui}
</style>`);

  let pdfjsYukle = null;
  const pdfjs = () => (pdfjsYukle = pdfjsYukle || new Promise((ok, hata) => {
    if (window.pdfjsLib) return ok(window.pdfjsLib);
    const s = document.createElement("script"); s.src = PDFJS + "pdf.min.js";
    s.onload = () => { window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS + "pdf.worker.min.js"; ok(window.pdfjsLib); };
    s.onerror = () => { pdfjsYukle = null; hata(new Error("Okuyucu yüklenemedi")); };
    document.head.appendChild(s);
  }));

  let kat = null, belge = null, gozcu = null;
  function kapat(gecmistenMi) {
    if (!kat) return;
    try { gozcu && gozcu.disconnect(); } catch (e) {}
    try { belge && belge.destroy(); } catch (e) {}
    kat.remove(); kat = null; belge = null; document.body.style.overflow = "";
    if (!gecmistenMi && history.state && history.state.kitap) history.back();
  }
  window.addEventListener("popstate", () => { if (kat) kapat(true); });

  async function ac(url, baslik) {
    kapat(true);
    kat = document.createElement("div"); kat.className = "ko-kat";
    kat.innerHTML = `<div class="ko-ust"><button data-k aria-label="Kapat">✕</button><b>📕 ${esc(baslik || "Kitap")}</b>
      <span data-pdf hidden><button data-z="-1" aria-label="Küçült">➖</button><button data-z="1" aria-label="Büyüt">➕</button>
      <input type="number" min="1" data-git aria-label="Sayfa"> <span data-top style="color:#bbb"></span></span>
      <a href="${esc(url)}" target="_blank" rel="noopener" title="Tarayıcıda aç">↗</a></div><div class="ko-sayfalar"><div class="ko-durum">Kitap açılıyor…</div></div>`;
    document.body.appendChild(kat); document.body.style.overflow = "hidden";
    history.pushState({ kitap: 1 }, "");
    kat.querySelector("[data-k]").onclick = () => kapat(false);
    const alan = kat.querySelector(".ko-sayfalar");

    if (!DOGRUDAN.test(url)) { // MEB'in bu sunucusu (tymm.meb.gov.tr) kitabın uygulama içinde gösterilmesine izin vermiyor
      alan.innerHTML = `<div class="ko-durum" style="max-width:520px;margin:auto">📘 Bu kitap MEB'in program sitesinde (tymm.meb.gov.tr) duruyor ve site, kitabın başka uygulamaların içinde gösterilmesine izin vermiyor.<br><br>Aşağıdaki düğmeyle açabilirsin; tablette PDF olarak açılır. Bitince geri tuşuyla uygulamaya dönebilirsin.<br><br><a class="ko-ac" href="${esc(url)}" target="_blank" rel="noopener" style="display:inline-block;background:#3b82f6;color:#fff;padding:14px 22px;border-radius:14px;font-weight:700;text-decoration:none">📖 Kitabı aç</a></div>`;
      return;
    }
    let lib;
    try { lib = await pdfjs(); belge = await lib.getDocument({ url, disableAutoFetch: true, disableStream: false, rangeChunkSize: 262144 }).promise; }
    catch (e) { if (kat) alan.innerHTML = `<div class="ko-durum">Kitap açılamadı. İnternet bağlantını kontrol et.<br><br><a style="color:#9cf" href="${esc(url)}" target="_blank" rel="noopener">Tarayıcıda açmayı dene ↗</a></div>`; return; }
    if (!kat) return;
    const N = belge.numPages, ilk = await belge.getPage(1), oran = ilk.getViewport({ scale: 1 }).height / ilk.getViewport({ scale: 1 }).width;
    let zoom = 1;
    const ust = kat.querySelector("[data-pdf]"); ust.hidden = false; kat.querySelector("[data-top]").textContent = "/ " + N;
    const git = kat.querySelector("[data-git]"); git.max = N;
    alan.innerHTML = "";
    const genislik = () => Math.min(alan.clientWidth - 16, 1100) * zoom;
    const kutular = [];
    for (let i = 1; i <= N; i++) { const d = document.createElement("div"); d.className = "ko-sayfa"; d.dataset.s = i; d.innerHTML = `<span>${i}</span>`; alan.appendChild(d); kutular.push(d); }
    const boyutla = () => kutular.forEach((d) => { const w = genislik(); d.style.width = w + "px"; d.style.height = w * oran + "px"; d.dataset.cizildi = ""; });
    boyutla();
    const ciz = async (d) => {
      if (!belge || d.dataset.cizildi === String(zoom)) return; d.dataset.cizildi = String(zoom);
      try {
        const s = await belge.getPage(+d.dataset.s), w = genislik(), dpr = Math.min(2, window.devicePixelRatio || 1);
        const vp = s.getViewport({ scale: (w / s.getViewport({ scale: 1 }).width) * dpr });
        const c = document.createElement("canvas"); c.width = vp.width; c.height = vp.height;
        await s.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
        d.innerHTML = ""; d.appendChild(c); d.style.height = (vp.height / dpr) + "px";
      } catch (e) { d.dataset.cizildi = ""; }
    };
    const bosalt = (d) => { if (d.querySelector("canvas")) { d.innerHTML = `<span>${d.dataset.s}</span>`; d.dataset.cizildi = ""; } };
    let kaydetZam = null;
    gozcu = new IntersectionObserver((girdiler) => girdiler.forEach((g) => {
      const d = g.target;
      if (g.isIntersecting) {
        ciz(d); const s = +d.dataset.s; [s - 1, s + 1].forEach((k) => kutular[k - 1] && ciz(kutular[k - 1]));
        git.value = s; clearTimeout(kaydetZam); kaydetZam = setTimeout(() => konumYaz(url, s), 600);
      } else if (Math.abs(g.boundingClientRect.top) > alan.clientHeight * 4) bosalt(d); // bellek için uzaklaşan sayfaları boşalt
    }), { root: alan, rootMargin: "200px 0px" });
    kutular.forEach((d) => gozcu.observe(d));
    const atla = (s) => { s = Math.max(1, Math.min(N, s | 0)); kutular[s - 1].scrollIntoView({ block: "start" }); };
    git.onchange = () => atla(+git.value);
    kat.querySelectorAll("[data-z]").forEach((b) => (b.onclick = () => {
      const s = +git.value || 1; zoom = Math.max(0.6, Math.min(3, zoom + (+b.dataset.z) * 0.25)); boyutla(); atla(s);
    }));
    const kalinan = konumlar()[url];
    if (kalinan > 1) { atla(kalinan); const n = document.createElement("div"); n.className = "ko-durum"; n.style.cssText = "position:absolute;left:50%;top:70px;transform:translateX(-50%);background:#000c;border-radius:12px;padding:10px 16px"; n.textContent = `📌 Kaldığın sayfa: ${kalinan}`; kat.appendChild(n); setTimeout(() => n.remove(), 2500); }
  }
  window.KITAP_OKU = ac;

  // MEB kitap bağlantılarını yakala (uygulamanın kendi kodu değişmeden)
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("a.kitap.meb, a[data-kitap]");
    if (!a || !a.href || e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    const b = a.querySelector("b"); ac(a.href, b ? b.textContent : a.textContent.trim());
  }, true);
})();
