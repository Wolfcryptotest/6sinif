// 🦉 "Baykuşa Öğret" ve "Arkadaşını Seç" (Minik–4. sınıf). app.js'ten ÖNCE yüklenir.
// • Baykuşa Öğret: Baykuş bir soruya cevap verir (bazen yanlış!). Çocuk doğru mu yanlış mı söyler; yanlışsa doğrusunu baykuşa öğretir.
//   Öğreten rolü çocuğu düşündürür ve motive eder (Teach Your Monster to Read'deki gibi). Sorular dersin kendi konularından gelir.
// • Arkadaşını Seç: maskota dokununca yeni karakter seçilir; bazı karakterler yıldız biriktirince açılır.
(function () {
  if (!window.OYUN || !window.DERS) return;
  const S = window.SINIF || {};
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const escH = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const $h = (h) => { const d = document.createElement("div"); d.innerHTML = h.trim(); return d.firstElementChild; };
  const yuzu = () => { try { return localStorage.getItem("karakter-" + (S.anahtar || "")) || "🦉"; } catch (e) { return "🦉"; } };

  document.head.insertAdjacentHTML("beforeend", `<style>
.og-iddia{display:flex;align-items:center;gap:10px;background:var(--kart);border:3px solid var(--sinir);border-radius:20px;padding:10px 14px;margin:6px 0 12px;font-size:21px;font-weight:700}
.og-iddia .y{font-size:44px}.og-iddia b{color:var(--mor,#7b5cff)}
.og-iki{display:grid;grid-template-columns:1fr 1fr;gap:10px}.og-iki button{font-size:22px;font-weight:900;padding:16px 8px;border-radius:18px;color:#fff;border:none;box-shadow:0 5px 0 rgba(0,0,0,.15)}
.krk-kat{position:fixed;inset:0;z-index:80;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;padding:16px}
.krk-kutu{background:var(--kart,#fff);border-radius:24px;padding:16px;max-width:460px;width:100%}.krk-kutu h3{margin:0 0 6px}
.krk-izgara{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:10px 0}.krk-izgara button{font-size:40px;padding:8px 0;border-radius:16px;border:3px solid var(--sinir);background:var(--bg,#fff);position:relative}
.krk-izgara button.secili{border-color:var(--yesil,#22c55e)}.krk-izgara button[disabled]{filter:grayscale(1);opacity:.45}.krk-izgara small{position:absolute;bottom:2px;left:0;right:0;font-size:11px;font-weight:800;color:var(--yazi)}
.maskot .yuz{cursor:pointer;position:relative}
</style>`);

  // ---------- Baykuşa Öğret ----------
  OYUN.CIZ.ogret = (g, el, bitir) => {
    const b = g.temel, iddiaMetin = b.secenekler[g.iddia], yuz = yuzu();
    const k = $h(`<div><div class="og-iddia"><span class="y">${yuz}</span><span>Bence cevap: <b>${escH(iddiaMetin)}</b><br><small style="font-weight:600">Doğru mu söyledim?</small></span></div>
      <div class="og-iki"><button data-c="1" style="background:var(--yesil,#22c55e)">✅ Doğru</button><button data-c="0" style="background:var(--kirmizi,#ef476f)">❌ Yanlış</button></div><div class="og-alt"></div></div>`);
    el.appendChild(k);
    const alt = k.querySelector(".og-alt"), baykusDogru = g.iddia === b.dogru;
    k.querySelectorAll("[data-c]").forEach((x) => (x.onclick = () => {
      k.querySelectorAll("[data-c]").forEach((y) => (y.disabled = true));
      const cocukDogruDedi = x.dataset.c === "1";
      if (baykusDogru) return bitir(cocukDogruDedi, iddiaMetin);
      if (cocukDogruDedi) return bitir(false, b.secenekler[b.dogru]);
      // Baykuş yanlıştı ve çocuk fark etti: şimdi doğrusunu öğretsin
      alt.innerHTML = `<p style="font-size:20px;font-weight:800;margin:12px 0 8px">Haklısın! Peki doğrusu hangisi? Bana öğret 🙏</p>`;
      const kutu = document.createElement("div"); kutu.className = "secenekler";
      b.secenekler.forEach((s, i) => { if (i === g.iddia) return; const bt = document.createElement("button"); bt.className = "sec" + (b.em ? " em" : ""); bt.textContent = s;
        bt.onclick = () => { const ok = i === b.dogru; bt.classList.add(ok ? "dogru" : "yanlis"); [...kutu.children].forEach((z) => (z.disabled = true)); bitir(ok, b.secenekler[b.dogru]); }; kutu.appendChild(bt); });
      alt.appendChild(kutu);
    }));
  };
  const temelBul = (dk) => {
    const D = DERS[dk], l = (D.temalar || []).flatMap((t) => t.konular || []).filter((k) => k.uret && !/^ogret-/.test(k.id));
    for (let n = 0; n < 25 && l.length; n++) {
      let g; try { g = pick(l).uret(); } catch (e) { continue; }
      if (g && (!g.tip || g.tip === "secim") && Array.isArray(g.secenekler) && g.secenekler.length >= 2 && typeof g.dogru === "number") return g;
    }
    return null;
  };
  const ogretG = (dk) => () => {
    const b = temelBul(dk); if (!b) return { tip: "secim", soru: "Bugün ne öğrendin?", secenekler: ["Çok şey!", "Hiçbir şey"], dogru: 0, cozum: "" };
    const iddia = Math.random() < 0.45 ? b.dogru : pick(b.secenekler.map((_, i) => i).filter((i) => i !== b.dogru));
    return { tip: "ogret", soru: b.soru, gorsel: b.gorsel, okunacak: b.okunacak || b.soru, temel: b, iddia, cozum: b.cozum || "" };
  };
  for (const dk of Object.keys(DERS)) {
    const D = DERS[dk]; if (!D || !Array.isArray(D.temalar) || dk === "akil" || dk === "zeka" || D.temalar.some((t) => t.id === "ogret-" + dk)) continue;
    D.temalar.push({ id: "ogret-" + dk, ad: "🦉 Baykuşa Öğret", konular: [{ id: "ogret-" + dk, ad: "Baykuş Doğru mu Söylüyor?", ikon: "🦉",
      bilgi: [["🦉", "Baykuş sorulara cevap verecek ama bazen yanılıyor!"], ["✅", "Doğruysa \"Doğru\" de, yanlışsa doğrusunu ona öğret."]], uret: ogretG(dk) }] });
  }

  // ---------- Arkadaşını Seç ----------
  const KARAKTER = [["🦉", 0], ["🐼", 0], ["🦊", 0], ["🐸", 0], ["🐰", 10], ["🐯", 10], ["🐧", 30], ["🦄", 30], ["🐲", 60], ["🤖", 60], ["🦁", 100], ["🐨", 100]];
  const yildiz = () => { try { return (window.APP_TEST && APP_TEST.K().yildiz) || 0; } catch (e) { return 0; } };
  function secici() {
    const y = yildiz(), simdi = yuzu();
    const kat = $h(`<div class="krk-kat"><div class="krk-kutu"><h3>🎨 Arkadaşını seç</h3><div>Seninle birlikte öğrenecek arkadaşı seç. Yıldız topladıkça yeni arkadaşlar açılır. ⭐ ${y}</div>
      <div class="krk-izgara">${KARAKTER.map(([e, gerek]) => `<button data-e="${e}" class="${e === simdi ? "secili" : ""}" ${y < gerek ? "disabled" : ""}>${e}${gerek ? `<small>${y < gerek ? "🔒 " : ""}${gerek}⭐</small>` : ""}</button>`).join("")}</div>
      <button class="buyukbtn" data-k style="margin:0">Tamam</button></div></div>`);
    document.body.appendChild(kat);
    kat.onclick = (e) => { if (e.target === kat || e.target.hasAttribute("data-k")) kat.remove(); };
    kat.querySelectorAll("[data-e]").forEach((b) => (b.onclick = () => { try { localStorage.setItem("karakter-" + (S.anahtar || ""), b.dataset.e); } catch (e) {} uygula(); kat.querySelectorAll("[data-e]").forEach((x) => x.classList.toggle("secili", x === b)); }));
  }
  function uygula() {
    const e = yuzu();
    document.querySelectorAll(".maskot .yuz").forEach((y) => { if (y.textContent !== e) y.textContent = e; if (!y.dataset.krk) { y.dataset.krk = "1"; y.title = "Arkadaşını seç"; y.addEventListener("click", secici); } });
  }
  new MutationObserver(uygula).observe(document.documentElement, { childList: true, subtree: true });
  window.KARAKTER_SEC = secici;
})();
