// Ortaokul "🧠 Kelime Hatırlama": aralıklı tekrar (1-3-7-14-30 gün) ile İngilizce kelimeleri ve okunuşlarını unutturmama
// app.js ve hikaye.js'ten sonra yüklenir. Kelimeler; çalışılan İngilizce konulardan, Kelime Oyunu'ndan ve Kelime Havuzu'ndan gelir.
(function () {
  if (typeof kayit === "undefined" || !window.ICERIK || !ICERIK.ingilizce) return;
  kayit.kelime = kayit.kelime || {};          // en -> { tr, k: kutu (0-5), g: tekrar günü (gün no), d: doğru, y: yanlış }
  const ARALIK = [0, 1, 3, 7, 14, 30];
  const GUNLUK_YENI = 8, OTURUM = 15;
  const gunNo = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);

  // Bütün kelimeler (tema + havuz); aynı İngilizce kelime bir kez
  const TUM = new Map(), KONU = {};
  for (const u of ICERIK.ingilizce.uniteler) for (const k of u.konular) {
    KONU[k.id] = k.kelimeler || [];
    for (const [e, t] of k.kelimeler || []) if (!TUM.has(e)) TUM.set(e, t);
  }
  const ekle = (liste) => { let n = 0; for (const [e, t] of liste) if (!kayit.kelime[e]) { kayit.kelime[e] = { tr: t, k: 0, g: gunNo(), d: 0, y: 0 }; n++; } if (n) kaydet(); return n; };
  const zamaniGelen = () => Object.entries(kayit.kelime).filter(([, v]) => v.g <= gunNo()).map(([e, v]) => [e, v]);

  // Kelime Oyunu açıldığında oyundaki kelimeler hatırlama listesine girer
  if (typeof kelimeOyunu === "function") {
    const eski = kelimeOyunu;
    window.kelimeOyunu = function (kel, oyunId) { ekle(kel); return eski(kel, oyunId); };
  }
  // İngilizce konu testinde soru çözüldükçe o konunun kelimeleri listeye girer
  if (typeof soruKaydet === "function") {
    const eskiS = soruKaydet;
    window.soruKaydet = function (konuId, ok, sn) { if (KONU[konuId] && KONU[konuId].length) ekle(KONU[konuId]); return eskiS(konuId, ok, sn); };
  }

  // Yeni kelime önerisi: önce çalışılan konuların, sonra Kelime Havuzu'nun kelimeleri
  function yeniKelimeler(n) {
    const calisilan = Object.keys(KONU).filter((id) => (kayit.istatistik[id] || {}).s);
    const sira = [...calisilan, ...Object.keys(KONU)];
    const out = [];
    for (const id of sira) for (const [e, t] of KONU[id]) { if (out.length >= n) return out; if (!kayit.kelime[e] && !out.some((x) => x[0] === e)) out.push([e, t]); }
    return out;
  }

  // Ana sayfa kartı
  const eskiAna = window.hikayeAnaKart;
  function kart() {
    const gelen = zamaniGelen().length, top = Object.keys(kayit.kelime).length;
    const ogrenilen = Object.values(kayit.kelime).filter((v) => v.k >= 3).length;
    const b = document.createElement("button");
    b.className = "hk-kart"; b.style.background = "linear-gradient(135deg,#efe9ff,#e0d6ff)"; b.style.borderColor = "#b9a3ff"; b.style.color = "#2b1a66";
    b.innerHTML = `<span class="buyuk">🧠</span><span><b>Kelime Hatırlama${gelen ? `: ${gelen} kelime tekrar zamanı` : ""}</b><small>${top ? `Listende ${top} kelime · ${ogrenilen} tanesi kalıcı öğrenildi` : "İngilizce kelimeleri ve okunuşlarını unutmaman için kısa günlük tekrarlar"}</small><small>${gelen ? "Hadi başlayalım! 🔊 Okunuşları da dinleyeceksin." : `Bugün için tekrar yok. ${GUNLUK_YENI} yeni kelime öğrenebilirsin.`}</small></span>`;
    b.onclick = () => git(hatirlaGiris, "🧠 Kelime Hatırlama");
    return b;
  }
  window.hikayeAnaKart = function () {
    if (eskiAna) eskiAna();
    const yer = document.querySelector(".hk-kart") || document.querySelector(".hedef-kart");
    const k = kart();
    if (yer) yer.after(k); else ekran.prepend(k);
  };
  if (document.querySelector(".hedef-kart") && ![...document.querySelectorAll(".hk-kart b")].some((x) => /Kelime Hatırlama/.test(x.textContent))) {
    const yer = document.querySelector(".hk-kart") || document.querySelector(".hedef-kart"); if (yer) yer.after(kart());
  }

  function hatirlaGiris() {
    const gelen = zamaniGelen();
    const kutular = [0, 0, 0, 0, 0, 0]; Object.values(kayit.kelime).forEach((v) => kutular[Math.min(5, v.k)]++);
    ekran.innerHTML = `
      <div class="hedef-kart"><b>🧠 Nasıl çalışır?</b><p class="not" style="margin:6px 0 0">Doğru bildiğin kelime daha sonra tekrar sorulur: ertesi gün → 3 gün → 1 hafta → 2 hafta → 1 ay. Yanlış bildiğin kelime yarın yeniden gelir. Böylece kelimeler ve okunuşları kalıcı olur.</p></div>
      <div class="karolar">${["Yeni", "1 gün", "3 gün", "1 hafta", "2 hafta", "Kalıcı"].map((ad, i) => `<div class="karo"><span>${ad}</span><b>${kutular[i]}</b></div>`).join("")}</div>
      <div class="satir" style="margin-top:12px">
        <button class="btn" id="khBasla" ${gelen.length ? "" : "disabled"}>🔁 Tekrar zamanı gelen kelimeler (${gelen.length})</button>
        <button class="btn2" id="khYeni">➕ ${GUNLUK_YENI} yeni kelime öğren</button>
      </div>
      <h2>📒 Kelime listem</h2><div class="liste" id="khListe"></div>`;
    $("khBasla").onclick = () => git(() => oturum(gelen.sort(() => Math.random() - 0.5).slice(0, OTURUM)), "🧠 Tekrar");
    $("khYeni").onclick = () => {
      const yeni = yeniKelimeler(GUNLUK_YENI);
      if (!yeni.length) { alert("Bütün kelimeler listende! Tekrarlarına devam et."); return; }
      git(() => tanit(yeni), "➕ Yeni Kelimeler");
    };
    const l = Object.entries(kayit.kelime).sort((a, b) => a[1].g - b[1].g).slice(0, 80);
    $("khListe").innerHTML = l.length ? l.map(([e, v]) => `<button class="kart kh-k" data-e="${esc(e)}"><span><b>🔊 ${esc(e)}</b> — ${esc(v.tr)}</span><span class="rozet">${v.k >= 5 ? "Kalıcı ⭐" : v.g <= gunNo() ? "Bugün" : (v.g - gunNo()) + " gün sonra"}</span></button>`).join("") : `<p class="not">Henüz kelime yok. "Yeni kelime öğren" ile başlayabilir ya da İngilizce konularında Kelime Oyunu oynayabilirsin.</p>`;
    ekran.querySelectorAll(".kh-k").forEach((b) => (b.onclick = () => seslendir(b.dataset.e)));
  }

  // Yeni kelimeleri kartlarla tanıt (dinle + gör), sonra listeye ekle ve hemen kısa bir tekrar yap
  function tanit(yeni) {
    let i = 0;
    const ciz = () => {
      const [e, t] = yeni[i];
      ekran.innerHTML = `<p class="not">Yeni kelime ${i + 1} / ${yeni.length} · Kelimeye dokun, okunuşunu dinle ve sesli tekrar et.</p>
        <button class="cevir-kart acik" id="khKart">${esc(e)}<small>${esc(t)}</small><small>🔊 Dinlemek için dokun</small></button>
        <div class="satir"><button class="btn2" id="khOnce" ${i ? "" : "disabled"}>← Önceki</button><button class="btn" id="khSonra">${i === yeni.length - 1 ? "Öğrendim, kendimi dene ✏️" : "Sonraki →"}</button></div>`;
      seslendir(e);
      $("khKart").onclick = () => seslendir(e);
      $("khOnce").onclick = () => { if (i) { i--; ciz(); } };
      $("khSonra").onclick = () => { if (i < yeni.length - 1) { i++; ciz(); return; } ekle(yeni); oturum(yeni.map(([e]) => [e, kayit.kelime[e]]), true); };
    };
    ciz();
  }

  // Tekrar oturumu: dinle-anlamını seç / İngilizce→Türkçe / Türkçe→İngilizce
  function oturum(liste, tanitimSonrasi) {
    const havuzTR = [...TUM.values()], havuzEN = [...TUM.keys()];
    const yanlisSec = (dogru, havuz) => { const s = new Set([dogru]); let g = 0; while (s.size < 4 && g++ < 200) s.add(havuz[Math.floor(Math.random() * havuz.length)]); return karistir([...s]); };
    let n = 0, dogruSay = 0;
    const sorular = liste.map(([e, v]) => ({ e, tr: v.tr, tip: ["dinle", "entr", "tren"][Math.floor(Math.random() * 3)] }));
    const ciz = () => {
      if (n >= sorular.length) return bitir();
      const q = sorular[n], tren = q.tip === "tren";
      const secenek = tren ? yanlisSec(q.e, havuzEN) : yanlisSec(q.tr, havuzTR);
      const baslik = q.tip === "dinle" ? `<button class="cevir-kart" id="khSes" style="min-height:140px">🔊<small>Dinle: Duyduğun kelimenin anlamı ne?</small></button>` : q.tip === "entr" ? `<button class="cevir-kart" id="khSes" style="min-height:140px">${esc(q.e)}<small>🔊 dokun, dinle · Anlamı ne?</small></button>` : `<div class="cevir-kart" style="min-height:140px">${esc(q.tr)}<small>İngilizcesi hangisi?</small></div>`;
      ekran.innerHTML = `<p class="not">Soru ${n + 1} / ${sorular.length} · Doğru: ${dogruSay}</p>${baslik}<div class="hk-sec" id="khSec"></div><div id="khD"></div>`;
      if (q.tip !== "tren") { seslendir(q.e); $("khSes").onclick = () => seslendir(q.e); }
      secenek.forEach((c) => {
        const b = document.createElement("button"); b.textContent = c;
        b.onclick = () => {
          if ($("khSec").querySelector(".dogru,.yanlis")) return;
          const ok = c === (tren ? q.e : q.tr);
          b.classList.add(ok ? "dogru" : "yanlis");
          if (!ok) [...$("khSec").children].find((x) => x.textContent === (tren ? q.e : q.tr)).classList.add("dogru");
          const v = kayit.kelime[q.e];
          if (v) { if (ok) { v.d++; v.k = Math.min(5, v.k + 1); } else { v.y++; v.k = 0; } v.g = gunNo() + (ok ? ARALIK[v.k] : 1); }
          if (ok) dogruSay++;
          if (typeof kelimeKaydet === "function") kelimeKaydet(5);
          kaydet();
          seslendir(q.e);
          $("khD").innerHTML = `<p style="font-size:20px;margin:10px 0"><b>${esc(q.e)}</b> = ${esc(q.tr)} ${ok ? "✅" : "❌"}</p><button class="btn" style="width:100%">${n === sorular.length - 1 ? "Bitir" : "Sonraki →"}</button>`;
          $("khD").querySelector("button").onclick = () => { n++; ciz(); };
        };
        $("khSec").appendChild(b);
      });
    };
    const bitir = () => {
      ekran.innerHTML = `<div class="hedef-kart" style="text-align:center"><div style="font-size:54px">${dogruSay === sorular.length ? "🏆" : "🧠"}</div><h2>${dogruSay} / ${sorular.length} doğru</h2>
        <p class="not">${tanitimSonrasi ? "Yeni kelimeler listene eklendi. Yarın tekrar sorulacaklar." : "Doğru bildiklerin daha sonra, yanlışların yarın tekrar gelecek."}</p>
        <div class="satir" style="justify-content:center"><button class="btn" id="khGeri">🧠 Kelime Hatırlama</button></div></div>`;
      $("khGeri").onclick = () => git(hatirlaGiris, "🧠 Kelime Hatırlama", false);
    };
    ciz();
  }
})();
