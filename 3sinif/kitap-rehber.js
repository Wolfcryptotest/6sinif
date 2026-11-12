// 📕 Kitabım — MEB ders kitabına göre konu anlatımı + etkinlik çözümleri (rehber-*.js verisini gösterir).
// app.js'ten SONRA yüklenir; app.js ders sayfasına "Kitabım" düğmesini koyar ve APP.git / APP.konuAc / APP.ekran'ı açar.
// Cevaplar önce gizlidir: çocuk önce kendisi düşünür, sonra "Cevabı göster"e basar. Gösterilen cevaplar hatırlanır.
(function () {
  if (window.REHBER_UI) return;
  const S = window.SINIF || {};
  const ANAHTAR = "rehber-" + (S.anahtar || "3sinif");
  const veri = (() => { try { return JSON.parse(localStorage.getItem(ANAHTAR)) || {}; } catch (e) { return {}; } })();
  const kaydet = () => { try { localStorage.setItem(ANAHTAR, JSON.stringify(veri)); } catch (e) {} };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const $h = (h) => { const d = document.createElement("div"); d.innerHTML = h.trim(); return d.firstElementChild; };

  document.head.insertAdjacentHTML("beforeend", `<style>
.rh-tema{background:var(--kart);border:3px solid var(--sinir);border-radius:24px;padding:12px 14px;margin-bottom:16px}
.rh-tema h3{margin:0 0 8px;font-size:20px}
.rh-bolum{display:flex;align-items:center;gap:10px;width:100%;text-align:left;background:var(--bg);border:2px solid var(--sinir);border-radius:16px;padding:10px 12px;margin:6px 0;font-size:18px;font-weight:700;color:var(--yazi)}
.rh-bolum .i{font-size:30px;line-height:1}.rh-bolum .a{flex:1}.rh-bolum small{display:block;font-weight:600;color:var(--soluk);font-size:14px}
.rh-bolum .tik{font-size:14px;font-weight:800;color:var(--yesil);white-space:nowrap}
.rh-sekme{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0 14px}
.rh-sekme button{padding:12px 6px;border-radius:16px;font-size:18px;font-weight:900;background:var(--kart);border:3px solid var(--sinir);color:var(--yazi)}
.rh-sekme button.on{background:var(--renk,var(--ana));border-color:var(--renk,var(--ana));color:#fff}
.rh-kart{display:flex;gap:12px;align-items:flex-start;background:var(--kart);border:3px solid var(--sinir);border-radius:20px;padding:12px 14px;margin:8px 0;font-size:19px}
.rh-kart .em{font-size:34px;line-height:1.1}.rh-kart p{margin:0;flex:1}
.rh-uyari{background:#fff3cd;border:2px solid #f5d77a;border-radius:16px;padding:10px 14px;font-size:16px;margin:8px 0;color:#5c4400}
.rh-soru{background:var(--kart);border:3px solid var(--sinir);border-radius:20px;padding:12px 14px;margin:10px 0}
.rh-soru b{display:block;font-size:18px;margin-bottom:8px}
.rh-soru .goster{width:100%;padding:12px;border-radius:14px;border:none;font-size:18px;font-weight:900;background:var(--renk,var(--ana));color:#fff}
.rh-cevap{background:#eafaf1;border:2px solid #9fe0bd;border-radius:14px;padding:10px 12px;font-size:18px;color:#16402b}
.rh-cevap small{display:block;font-size:14px;color:#3a7a57;margin-top:6px;font-weight:700}
.rh-satir{display:flex;gap:8px;flex-wrap:wrap}.rh-satir .buyukbtn{flex:1;min-width:150px;font-size:18px;padding:14px}
.rh-ilerleme{height:10px;background:var(--sinir);border-radius:99px;overflow:hidden;margin:4px 0 12px}.rh-ilerleme i{display:block;height:100%;background:var(--yesil)}
@media (prefers-color-scheme:dark){.rh-uyari{background:#3a3218;color:#ffe9a8;border-color:#6b5a20}.rh-cevap{background:#123326;color:#c9f5dc;border-color:#2f7a52}.rh-cevap small{color:#8fd9b0}}
</style>`);

  const anahtar = (d, ti, bi) => d + ":" + ti + ":" + bi;
  const acilan = (d, ti, bi) => (veri[anahtar(d, ti, bi)] || []);
  function kitapAc(R, s) {
    const sayfa = s + (R.fark || 0);
    try { const k = JSON.parse(localStorage.getItem("kitap-konum")) || {}; k[R.pdf] = sayfa; localStorage.setItem("kitap-konum", JSON.stringify(k)); } catch (e) {}
    if (window.KITAP_OKU) window.KITAP_OKU(R.pdf, R.kitap); else window.open(R.pdf + "#page=" + sayfa, "_blank", "noopener");
  }

  // ---------- Ders içindekiler ----------
  function dersRehber(d) {
    const R = window.REHBER[d], ekran = APP.ekran();
    const D = (window.DERS || {})[d] || {};
    if (D.renk) ekran.style.setProperty("--renk", D.renk);
    const toplam = R.temalar.reduce((a, t) => a + t.bolumler.reduce((b, x) => b + x.cevaplar.length, 0), 0);
    const goruldu = Object.keys(veri).filter((k) => k.startsWith(d + ":")).reduce((a, k) => a + veri[k].length, 0);
    ekran.appendChild($h(`<div class="maskot"><div class="yuz">🦉</div><div class="balon">Okuldaki kitabının konu anlatımı ve etkinlik çözümleri burada. Önce kendin çöz, sonra cevaba bak!</div></div>`));
    ekran.appendChild($h(`<div class="not" style="text-align:center">📕 ${esc(R.kitap)} · ${goruldu}/${toplam} cevaba baktın</div>`));
    ekran.appendChild($h(`<div class="rh-ilerleme"><i style="width:${toplam ? Math.round(goruldu / toplam * 100) : 0}%"></i></div>`));
    R.temalar.forEach((t, ti) => {
      const kutu = $h(`<div class="rh-tema"><h3>${t.ikon || "📗"} ${esc(t.ad)}</h3></div>`);
      t.bolumler.forEach((b, bi) => {
        const n = acilan(d, ti, bi).length;
        const tik = n >= b.cevaplar.length ? "✅" : n ? `${n}/${b.cevaplar.length}` : "";
        const btn = $h(`<button class="rh-bolum"><span class="i">${b.ikon || "📄"}</span><span class="a">${esc(b.ad)}<small>Sayfa ${b.s} · ${b.cevaplar.length} çözüm</small></span><span class="tik">${tik}</span></button>`);
        btn.onclick = () => APP.git(() => bolumSayfa(d, ti, bi, "anlatim"), b.ad);
        kutu.appendChild(btn);
      });
      ekran.appendChild(kutu);
    });
  }

  // ---------- Bölüm: konu anlatımı / çözümler ----------
  function bolumSayfa(d, ti, bi, sekme) {
    const R = window.REHBER[d], b = R.temalar[ti].bolumler[bi], ekran = APP.ekran();
    const D = (window.DERS || {})[d] || {};
    if (D.renk) ekran.style.setProperty("--renk", D.renk);
    ekran.appendChild($h(`<div style="text-align:center"><div style="font-size:64px;line-height:1.1">${b.ikon || "📄"}</div><h2 style="margin:4px 0">${esc(b.ad)}</h2><div class="not">${esc(R.temalar[ti].ad)} · Kitap sayfa ${b.s}</div></div>`));
    const ust = $h(`<div class="rh-satir"></div>`);
    const kb = $h(`<button class="buyukbtn ikincil">📖 Kitapta aç (s. ${b.s})</button>`); kb.onclick = () => kitapAc(R, b.s);
    ust.appendChild(kb); ekran.appendChild(ust);
    const sek = $h(`<div class="rh-sekme"><button>📝 Konu Anlatımı</button><button>✅ Çözümler (${b.cevaplar.length})</button></div>`);
    ekran.appendChild(sek);
    const alan = document.createElement("div"); ekran.appendChild(alan);
    const [s1, s2] = sek.querySelectorAll("button");
    function goster(hangi) {
      APP.sesDur(); s1.classList.toggle("on", hangi === "anlatim"); s2.classList.toggle("on", hangi !== "anlatim");
      alan.innerHTML = "";
      if (b.dinleme) alan.appendChild($h(`<div class="rh-uyari">🎧 Bu bir <b>dinleme/izleme metni</b>: metin kitapta yazılı değil, kitaptaki karekodu okutup dinle. Buradaki bilgiler etkinliklerden çıkarıldı; dinledikten sonra kontrol et.</div>`));
      if (hangi === "anlatim") anlatim(); else cozumler();
      ilgiliKonular();
    }
    function anlatim() {
      b.anlatim.forEach(([em, m]) => {
        const k = $h(`<div class="rh-kart"><span class="em">${em}</span><p></p><button class="geri" aria-label="Sesli oku" style="padding:6px 10px">🔊</button></div>`);
        k.querySelector("p").textContent = m;
        k.querySelector("button").onclick = () => APP.konus(m, null, true);
        alan.appendChild(k);
      });
      const git = $h(`<button class="buyukbtn">✅ Etkinlik çözümlerine geç</button>`); git.onclick = () => goster("cozum"); alan.appendChild(git);
    }
    function cozumler() {
      const ac = new Set(acilan(d, ti, bi));
      alan.appendChild($h(`<div class="not" style="text-align:center;margin-bottom:6px">Önce soruyu kitapta kendin çöz, sonra cevaba bak. 💪</div>`));
      b.cevaplar.forEach(([soru, cevap, tur], ci) => {
        const k = $h(`<div class="rh-soru"><b></b><div class="yer"></div></div>`);
        k.querySelector("b").textContent = soru;
        const yer = k.querySelector(".yer");
        const ciz = () => {
          yer.innerHTML = "";
          const c = $h(`<div class="rh-cevap"><span></span>${tur === "o" ? "<small>✏️ Örnek cevap — senin cümlen farklı olabilir, anlamı benziyorsa doğrudur.</small>" : ""}</div>`);
          c.querySelector("span").textContent = cevap; yer.appendChild(c);
        };
        if (ac.has(ci)) ciz();
        else {
          const g = $h(`<button class="goster">👀 Cevabı göster</button>`);
          g.onclick = () => { ac.add(ci); veri[anahtar(d, ti, bi)] = [...ac]; kaydet(); APP.efekt && APP.efekt("tik"); ciz(); };
          yer.appendChild(g);
        }
        alan.appendChild(k);
      });
      const hepsi = $h(`<button class="buyukbtn ikincil">🙈 Cevapları tekrar gizle</button>`);
      hepsi.onclick = () => { delete veri[anahtar(d, ti, bi)]; kaydet(); goster("cozum"); };
      alan.appendChild(hepsi);
      const R2 = R.temalar[ti].bolumler;
      const sonraki = bi + 1 < R2.length ? [ti, bi + 1] : ti + 1 < R.temalar.length ? [ti + 1, 0] : null;
      if (sonraki) {
        const sb = R.temalar[sonraki[0]].bolumler[sonraki[1]];
        const s = $h(`<button class="buyukbtn">Sonraki: ${esc(sb.ad)} ▶</button>`);
        s.onclick = () => APP.git(() => bolumSayfa(d, sonraki[0], sonraki[1], "anlatim"), sb.ad);
        alan.appendChild(s);
      }
    }
    function ilgiliKonular() {
      if (!b.konu || !b.konu.length || !APP.konuBul) return;
      const liste = b.konu.map((id) => APP.konuBul(d, id)).filter(Boolean);
      if (!liste.length) return;
      alan.appendChild($h(`<h3 style="margin:18px 0 4px">🎮 Bu derste işlenen konular — oyna ve video izle</h3>`));
      const s = $h(`<div class="rh-satir"></div>`);
      liste.forEach((k) => { const bt = $h(`<button class="buyukbtn ikincil">${k.ikon || "🎯"} ${esc(k.ad)}</button>`); bt.onclick = () => APP.konuAc(d, k.id); s.appendChild(bt); });
      alan.appendChild(s);
    }
    s1.onclick = () => goster("anlatim"); s2.onclick = () => goster("cozum");
    goster(sekme || "anlatim");
  }

  window.REHBER_UI = { dersRehber, bolumSayfa, varMi: (d) => !!(window.REHBER && window.REHBER[d]) };
})();
