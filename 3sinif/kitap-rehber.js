// 📕 Kitabım — MEB ders kitabının KENDİ SAYFASI + o sayfanın cevapları aynı ekranda; bölümün başında konu videosu ve kısa özet.
// Veri: rehber-*.js (window.REHBER[ders]); sayfa resimleri kitap/<ders>/<sayfa>.webp; videolar: DERS konularının k.video'su + VIDEO_AD.
// app.js'ten SONRA yüklenir; app.js ders sayfasına "Kitabım" ve "Konu Videoları" düğmelerini koyar (APP.git / APP.ekran / APP.konuBul).
(function () {
  if (window.REHBER_UI) return;
  const S = window.SINIF || {};
  const ANAHTAR = "rehber2-" + (S.anahtar || "3sinif");
  const veri = (() => { try { return JSON.parse(localStorage.getItem(ANAHTAR)) || {}; } catch (e) { return {}; } })();
  const kaydet = () => { try { localStorage.setItem(ANAHTAR, JSON.stringify(veri)); } catch (e) {} };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const $h = (h) => { const d = document.createElement("div"); d.innerHTML = h.trim(); return d.firstElementChild; };
  const gizliMi = () => !!veri.gizli; // "önce kendim çözeceğim" anahtarı (bütün dersler için tek ayar)

  document.head.insertAdjacentHTML("beforeend", `<style>
.rh-tema{background:var(--kart);border:3px solid var(--sinir);border-radius:24px;padding:12px 14px;margin-bottom:16px}
.rh-tema h3{margin:0 0 8px;font-size:20px}
.rh-bolum{display:flex;align-items:center;gap:10px;width:100%;text-align:left;background:var(--bg);border:2px solid var(--sinir);border-radius:16px;padding:10px 12px;margin:6px 0;font-size:18px;font-weight:700;color:var(--yazi)}
.rh-bolum .i{font-size:30px;line-height:1}.rh-bolum .a{flex:1}.rh-bolum small{display:block;font-weight:600;color:var(--soluk);font-size:14px}
.rh-bolum .tik{font-size:13px;font-weight:800;color:var(--soluk);white-space:nowrap;text-align:right}
.rh-baslik{text-align:center;margin-bottom:6px}.rh-baslik .em{font-size:52px;line-height:1.1}.rh-baslik h2{margin:2px 0;font-size:22px}
.rh-vid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;margin:8px 0 12px}
.rh-vk{position:relative;background:linear-gradient(135deg,#3a2a6b,#c0392b) !important;border:3px solid var(--sinir);border-radius:16px;overflow:hidden;background:#000;padding:0;text-align:left;color:#fff}
.rh-vk img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;opacity:.85}
.rh-vk .oy{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%);font-size:40px;filter:drop-shadow(0 2px 4px #000)}
.rh-vk b{display:block;background:var(--kart);color:var(--yazi);font-size:14px;padding:6px 8px;line-height:1.25}
.rh-oynat{position:relative;aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#000;margin:8px 0}
.rh-oynat iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
details.rh-ozet{background:var(--kart);border:3px solid var(--sinir);border-radius:20px;padding:8px 12px;margin:10px 0}
details.rh-ozet summary{font-size:19px;font-weight:900;cursor:pointer;padding:4px 0}
.rh-kart{display:flex;gap:10px;align-items:flex-start;border-top:2px dashed var(--sinir);padding:10px 0;font-size:18px}
.rh-kart .em{font-size:28px;line-height:1.1}.rh-kart p{margin:0;flex:1}
.rh-uyari{background:#fff3cd;border:2px solid #f5d77a;border-radius:16px;padding:10px 14px;font-size:16px;margin:8px 0;color:#5c4400}
.rh-cubuk{position:sticky;top:var(--ustb,64px);z-index:5;scroll-margin-top:var(--ustb,64px);display:flex;align-items:center;gap:8px;background:var(--bg);padding:8px 0}
.rh-cubuk button{border:3px solid var(--sinir);background:var(--kart);color:var(--yazi);border-radius:14px;font-size:22px;font-weight:900;min-width:58px;padding:8px 10px}
.rh-cubuk button:disabled{opacity:.35}
.rh-cubuk .orta{flex:1;text-align:center;font-weight:900;font-size:18px;line-height:1.15}.rh-cubuk .orta small{display:block;font-size:13px;color:var(--soluk);font-weight:700}
.rh-anahtar{scroll-margin-top:80px;display:flex;gap:6px;margin:6px 0 10px}.rh-anahtar button{flex:1;padding:10px 6px;border-radius:14px;font-size:16px;font-weight:800;border:3px solid var(--sinir);background:var(--kart);color:var(--yazi)}
.rh-anahtar button.on{background:var(--renk,var(--ana));border-color:var(--renk,var(--ana));color:#fff}
.rh-sayfa{position:relative;background:#fff;border:3px solid var(--sinir);border-radius:12px;overflow:hidden;min-height:200px;touch-action:pan-y}
.rh-sayfa img{display:block;width:100%;height:auto}
.rh-sayfa .yuk{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:700 17px system-ui;text-align:center;padding:16px}
.rh-sayfa .buy{position:absolute;right:8px;bottom:8px;border:none;border-radius:12px;background:rgba(0,0,0,.6);color:#fff;font-size:15px;font-weight:800;padding:8px 10px}
.rh-cvb{margin:12px 0}.rh-cvb h3{margin:6px 0;font-size:20px}
.rh-soru{background:var(--kart);border:3px solid var(--sinir);border-radius:18px;padding:10px 12px;margin:8px 0}
.rh-soru b{display:block;font-size:17px;margin-bottom:6px;color:var(--soluk)}
.rh-soru .goster{width:100%;padding:11px;border-radius:12px;border:none;font-size:17px;font-weight:900;background:var(--renk,var(--ana));color:#fff}
.rh-cevap{background:#eafaf1;border:2px solid #9fe0bd;border-radius:12px;padding:9px 12px;font-size:19px;color:#16402b;line-height:1.4}
.rh-cevap small{display:block;font-size:13px;color:#3a7a57;margin-top:5px;font-weight:700}
.rh-bos{color:var(--soluk);font-size:16px;text-align:center;padding:8px}
.rh-buyut{position:fixed;inset:0;z-index:80;background:#222;overflow:auto;-webkit-overflow-scrolling:touch}
.rh-buyut img{display:block;width:180%;max-width:none}
.rh-buyut button{position:fixed;top:10px;right:10px;z-index:81;border:none;border-radius:14px;background:#fff;color:#222;font-size:18px;font-weight:900;padding:10px 14px}
@media (min-width:700px){.rh-buyut img{width:120%}}
@media (prefers-color-scheme:dark){.rh-uyari{background:#3a3218;color:#ffe9a8;border-color:#6b5a20}.rh-cevap{background:#123326;color:#c9f5dc;border-color:#2f7a52}.rh-cevap small{color:#8fd9b0}}
</style>`);

  const renkVer = (el, d) => { const D = (window.DERS || {})[d] || {}; if (D.renk) el.style.setProperty("--renk", D.renk); };
  const resim = (d, s) => window.REHBER[d].resim + s + ".webp";

  // ---------- videolar ----------
  function videoListesi(d, konuIdleri) {
    const gor = new Set(), out = [];
    (konuIdleri || []).forEach((kid) => {
      const k = APP.konuBul && APP.konuBul(d, kid); if (!k || !k.video) return;
      const l = Array.isArray(k.video) ? k.video : [[k.ad, k.video]];
      l.forEach(([et, id]) => { if (!gor.has(id)) { gor.add(id); out.push([(window.VIDEO_AD || {})[id] || et, id]); } });
    });
    return out;
  }
  function videoKartlari(liste) {
    const kutu = $h(`<div></div>`), izgara = $h(`<div class="rh-vid"></div>`);
    liste.forEach(([ad, id]) => {
      const k = $h(`<button class="rh-vk"><img loading="lazy" alt="" src="https://i.ytimg.com/vi/${id}/mqdefault.jpg" onerror="this.style.visibility='hidden'"><span class="oy">▶️</span><b></b></button>`);
      k.querySelector("b").textContent = ad;
      k.onclick = () => {
        APP.sesDur && APP.sesDur();
        kutu.querySelectorAll(".rh-oynat").forEach((x) => x.remove());
        const o = $h(`<div class="rh-oynat"><iframe allowfullscreen allow="autoplay; encrypted-media" src="https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1"></iframe></div>`);
        kutu.insertBefore(o, izgara); o.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      izgara.appendChild(k);
    });
    kutu.appendChild(izgara);
    return kutu;
  }

  // ---------- Ders: Kitabım içindekiler ----------
  function dersRehber(d) {
    const R = window.REHBER[d], ekran = APP.ekran(); renkVer(ekran, d);
    ekran.appendChild($h(`<div class="maskot"><div class="yuz">🦉</div><div class="balon">Bir bölüm seç: kitabın sayfası açılır, cevapları hemen altında. Sayfayı ◀ ▶ ile çevir.</div></div>`));
    ekran.appendChild($h(`<div class="not" style="text-align:center;margin-bottom:10px">📕 ${esc(R.kitap)}</div>`));
    R.temalar.forEach((t, ti) => {
      const kutu = $h(`<div class="rh-tema"><h3>${t.ikon || "📗"} ${esc(t.ad)}</h3></div>`);
      t.bolumler.forEach((b, bi) => {
        const n = b.cevaplar.length, sp = b.sayfalar || [b.s];
        const vid = videoListesi(d, b.konu).length;
        const btn = $h(`<button class="rh-bolum"><span class="i">${b.ikon || "📄"}</span><span class="a">${esc(b.ad)}<small>Sayfa ${sp[0]}${sp.length > 1 ? "–" + sp[sp.length - 1] : ""}</small></span><span class="tik">${n} cevap${vid ? "<br>🎬 video" : ""}</span></button>`);
        btn.onclick = () => APP.git(() => bolumSayfa(d, ti, bi), b.ad);
        kutu.appendChild(btn);
      });
      ekran.appendChild(kutu);
    });
  }

  // ---------- Ders: bütün konu videoları ----------
  function dersVideolari(d) {
    const ekran = APP.ekran(), D = window.DERS[d]; renkVer(ekran, d);
    ekran.appendChild($h(`<div class="maskot"><div class="yuz">🎬</div><div class="balon">${esc(D.ad)} konu anlatım videoları (3. sınıf). Birine dokun, burada oynasın.</div></div>`));
    let hic = true; const gor = new Set();
    D.temalar.forEach((t) => {
      const l = videoListesi(d, t.konular.map((k) => k.id)).filter(([, id]) => !gor.has(id) && gor.add(id)); if (!l.length) return; hic = false;
      ekran.appendChild($h(`<h3 style="margin:14px 0 2px">${t.ikon || "📗"} ${esc(t.ad)}</h3>`));
      ekran.appendChild(videoKartlari(l));
    });
    if (hic) ekran.appendChild($h(`<p class="rh-bos">Bu ders için video yok.</p>`));
    ekran.appendChild($h(`<p class="not">Videolar internet gerektirir (YouTube).</p>`));
  }

  // ---------- Bölüm: kitap sayfası + cevaplar ----------
  function bolumSayfa(d, ti, bi) {
    const R = window.REHBER[d], T = R.temalar[ti], b = T.bolumler[bi], ekran = APP.ekran(); renkVer(ekran, d);
    const sayfalar = (b.sayfalar && b.sayfalar.length ? b.sayfalar : [b.s]);
    const sayfaCevap = (s) => b.cevaplar.filter((c) => c[3] === s);
    const ekler = b.cevaplar.filter((c) => !c[3] || !sayfalar.includes(c[3]));
    const yerAnahtar = d + ":" + ti + ":" + bi;

    ekran.appendChild($h(`<div class="rh-baslik"><div class="em">${b.ikon || "📄"}</div><h2>${esc(b.ad)}</h2><div class="not">${esc(T.ad)}</div></div>`));
    const kisa = $h(`<button class="buyukbtn ikincil" style="margin:4px 0 8px">📖 Kitap sayfası ve cevaplara geç ↓</button>`);
    ekran.appendChild(kisa);
    if (b.dinleme) ekran.appendChild($h(`<div class="rh-uyari">🎧 <b>Dinleme/izleme metni:</b> metin kitapta yazılı değil, kitaptaki karekodla dinlenir. Cevaplar etkinliklerden çıkarıldı.</div>`));

    const vl = videoListesi(d, b.konu);
    if (vl.length) { ekran.appendChild($h(`<h3 style="margin:10px 0 0">🎬 Konu anlatım videosu</h3>`)); ekran.appendChild(videoKartlari(vl)); }

    if (b.anlatim && b.anlatim.length) {
      const oz = $h(`<details class="rh-ozet"><summary>📝 Konu özeti (${b.anlatim.length})</summary></details>`);
      b.anlatim.forEach(([em, m]) => {
        const k = $h(`<div class="rh-kart"><span class="em">${em}</span><p></p><button class="geri" aria-label="Sesli oku" style="padding:6px 10px">🔊</button></div>`);
        k.querySelector("p").textContent = m; k.querySelector("button").onclick = () => APP.konus(m, null, true);
        oz.appendChild(k);
      });
      if (!veri["oz:" + yerAnahtar]) oz.open = true;
      oz.addEventListener("toggle", () => { veri["oz:" + yerAnahtar] = !oz.open; kaydet(); });
      ekran.appendChild(oz);
    }

    const hd = document.querySelector("header"); if (hd) ekran.style.setProperty("--ustb", hd.offsetHeight + "px");
    ekran.appendChild($h(`<h3 style="margin:14px 0 0">📖 Kitap ve cevaplar</h3>`));
    const anahtar = $h(`<div class="rh-anahtar"><button>👀 Cevaplar açık</button><button>🙈 Önce kendim çözeceğim</button></div>`);
    ekran.appendChild(anahtar);
    kisa.onclick = () => anahtar.scrollIntoView({ behavior: "smooth", block: "start" });
    const cubuk = $h(`<div class="rh-cubuk"><button aria-label="Önceki sayfa">◀</button><div class="orta"></div><button aria-label="Sonraki sayfa">▶</button></div>`);
    ekran.appendChild(cubuk);
    const kap = $h(`<div class="rh-sayfa"><div class="yuk">Sayfa yükleniyor…</div><img alt=""><button class="buy">🔍 Büyüt</button></div>`);
    ekran.appendChild(kap);
    const cvb = $h(`<div class="rh-cvb"></div>`); ekran.appendChild(cvb);
    const altCubuk = $h(`<div class="satir" style="margin:4px 0 8px"><button class="buyukbtn ikincil">◀ Önceki sayfa</button><button class="buyukbtn">Sonraki sayfa ▶</button></div>`); ekran.appendChild(altCubuk);
    const alt = $h(`<div></div>`); ekran.appendChild(alt);
    const [geriB, ileriB] = cubuk.querySelectorAll("button"), orta = cubuk.querySelector(".orta"), img = kap.querySelector("img"), yuk = kap.querySelector(".yuk");

    const [aGeri, aIleri] = altCubuk.querySelectorAll("button");
    let i = Math.max(0, sayfalar.indexOf(veri["s:" + yerAnahtar]));
    function cevapKarti(c) {
      const [soru, cevap, tur] = c;
      const k = $h(`<div class="rh-soru"><b></b><div class="yer"></div></div>`); k.querySelector("b").textContent = soru;
      const yer = k.querySelector(".yer");
      const ciz = () => { yer.innerHTML = ""; const e = $h(`<div class="rh-cevap"><span></span>${tur === "o" ? "<small>✏️ Örnek cevap — anlamı benziyorsa senin cevabın da doğru.</small>" : ""}</div>`); e.querySelector("span").textContent = cevap; yer.appendChild(e); };
      if (!gizliMi()) ciz();
      else { const g = $h(`<button class="goster">👀 Cevabı göster</button>`); g.onclick = () => { APP.efekt && APP.efekt("tik"); ciz(); }; yer.appendChild(g); }
      return k;
    }
    function goster() {
      const s = sayfalar[i]; veri["s:" + yerAnahtar] = s; kaydet();
      const liste = sayfaCevap(s);
      orta.innerHTML = `Sayfa ${s}<small>${i + 1} / ${sayfalar.length} · ${liste.length ? liste.length + " cevap" : "okuma sayfası"}</small>`;
      geriB.disabled = i === 0; ileriB.disabled = i === sayfalar.length - 1;
      aGeri.style.visibility = i === 0 ? "hidden" : ""; aIleri.style.visibility = i === sayfalar.length - 1 ? "hidden" : "";
      yuk.style.display = ""; yuk.textContent = "Sayfa yükleniyor…"; img.style.visibility = "hidden";
      img.onload = () => { yuk.style.display = "none"; img.style.visibility = ""; };
      img.onerror = () => { yuk.textContent = "Sayfa açılamadı. İnternet bağlantını kontrol et."; };
      img.src = resim(d, s); img.alt = "Kitap sayfası " + s;
      [sayfalar[i + 1], sayfalar[i - 1]].forEach((n) => { if (n) { const p = new Image(); p.src = resim(d, n); } }); // komşu sayfaları önceden yükle
      cvb.innerHTML = "";
      if (liste.length) { cvb.appendChild($h(`<h3>✅ Sayfa ${s} cevapları</h3>`)); liste.forEach((c) => cvb.appendChild(cevapKarti(c))); }
      else cvb.appendChild($h(`<p class="rh-bos">Bu sayfada cevaplanacak soru yok. Sayfayı oku, sonra ▶ ile devam et.</p>`));
    }
    function cevir(y) { const n = i + y; if (n < 0 || n >= sayfalar.length) return; i = n; goster(); cubuk.scrollIntoView({ block: "start", behavior: "smooth" }); }
    geriB.onclick = () => cevir(-1); ileriB.onclick = () => cevir(1);
    aGeri.onclick = () => cevir(-1); aIleri.onclick = () => cevir(1);
    let x0 = null, y0 = 0;
    kap.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    kap.addEventListener("touchend", (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null; if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) cevir(dx < 0 ? 1 : -1); });
    const buyut = () => {
      const o = $h(`<div class="rh-buyut"><button>✕ Kapat</button><img alt=""></div>`);
      o.querySelector("img").src = img.src; o.querySelector("button").onclick = () => o.remove();
      document.body.appendChild(o);
    };
    kap.querySelector(".buy").onclick = (e) => { e.stopPropagation(); buyut(); };
    img.onclick = buyut;
    const [aB, gB] = anahtar.querySelectorAll("button");
    const anahtarCiz = () => { aB.classList.toggle("on", !gizliMi()); gB.classList.toggle("on", gizliMi()); };
    aB.onclick = () => { veri.gizli = false; kaydet(); anahtarCiz(); goster(); };
    gB.onclick = () => { veri.gizli = true; kaydet(); anahtarCiz(); goster(); };
    anahtarCiz(); goster();

    if (ekler.length) {
      alt.appendChild($h(`<h3 style="margin:18px 0 4px">📝 Ek alıştırmalar</h3>`));
      alt.appendChild($h(`<p class="not" style="margin:0 0 4px">Kitapta olmayan, konuyu pekiştirmek için hazırlanmış sorular.</p>`));
      ekler.forEach((c) => alt.appendChild(cevapKarti(c)));
    }
    const hepsi = R.temalar.flatMap((t, a) => t.bolumler.map((x, c) => [a, c]));
    const sira = hepsi.findIndex(([a, c]) => a === ti && c === bi);
    if (hepsi[sira + 1]) {
      const [a, c] = hepsi[sira + 1], sb = R.temalar[a].bolumler[c];
      const s = $h(`<button class="buyukbtn">Sonraki bölüm: ${esc(sb.ad)} ▶</button>`);
      s.onclick = () => APP.git(() => bolumSayfa(d, a, c), sb.ad); alt.appendChild(s);
    }
    if (b.konu && b.konu.length && APP.konuBul) {
      const l = b.konu.map((id) => APP.konuBul(d, id)).filter(Boolean);
      if (l.length) {
        alt.appendChild($h(`<h3 style="margin:18px 0 4px">🎮 Bu konuyla oyna</h3>`));
        const sat = $h(`<div class="satir"></div>`);
        l.forEach((k) => { const bt = $h(`<button class="buyukbtn ikincil">${k.ikon || "🎯"} ${esc(k.ad)}</button>`); bt.onclick = () => APP.konuAc(d, k.id); sat.appendChild(bt); });
        alt.appendChild(sat);
      }
    }
  }

  window.REHBER_UI = { dersRehber, bolumSayfa, dersVideolari, varMi: (d) => !!(window.REHBER && window.REHBER[d]) };
})();
