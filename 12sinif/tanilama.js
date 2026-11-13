// 🧭 Seviye Tespiti (5–12, A1): bir derse ilk girişte Bilge her üniteden 2–3 soruluk kısa bir tanılama önerir.
// Sonuç, hiç çalışılmamış konuların ustalık puanına başlangıç değeri olarak yazılır (doğru → 60 "Yeterli", yanlış → 20 "Tanıdık",
// yanlış konular bugün tekrar listesine düşer) ve ünite ünite "eksik haritası" gösterilir.
// Veri: kayit.tanilama = { dersKey: { t: zaman, atla: zaman, sonuc: { konuId: 1|0 } } }. Ana kopya kökte; 5, 7–12'ye aynen kopyalanır.
(function () {
  if (typeof kayit === "undefined" || typeof window.uniteler !== "function" || typeof soruHazirla !== "function") return;
  const GUN = 86400000;
  const T = (kayit.tanilama = kayit.tanilama || {});
  const U = () => (window.USTALIK && USTALIK.U) || (kayit.ustalik = kayit.ustalik || {});
  const anaDers = (dk) => (typeof DERSLER !== "undefined" ? DERSLER : []).some((d) => d.key === dk) && ICERIK[dk] && !ICERIK[dk].secmeli && (ICERIK[dk].uniteler || []).length > 0;
  const dersAdi = (dk) => (ICERIK[dk] && ICERIK[dk].ad) || dk;
  const sorusuVar = (k) => (k.sorular && k.sorular.length) || (window.URETEC && URETEC[k.id]);

  // Her üniteden konuları dengeli seç: ünite başına 3 (ders çok üniteliyse 2), toplam en çok 24 soru
  function konuSec(dk) {
    const ul = ICERIK[dk].uniteler.filter((u) => u.konular.some(sorusuVar));
    const basina = ul.length * 3 <= 24 ? 3 : 2;
    return ul.map((u) => {
      const l = u.konular.filter(sorusuVar);
      // Az konulu ünitede bir konudan birden çok soru sorulur, böylece her ünite en az 2 soruyla ölçülür
      if (l.length < 2) return { u, konular: l, adet: l.map(() => 2) };
      if (l.length <= basina) return { u, konular: l, adet: l.map(() => 1) };
      const sec = []; for (let i = 0; i < basina; i++) sec.push(l[Math.round((i * (l.length - 1)) / (basina - 1))]);
      const k2 = [...new Set(sec)];
      return { u, konular: k2, adet: k2.map(() => 1) };
    });
  }
  const soruSay = (dk) => konuSec(dk).reduce((a, x) => a + x.adet.reduce((p, q) => p + q, 0), 0);

  // Hiç çalışılmamış konuya başlangıç puanı yazar; gerçek çalışma verisi olan konuya dokunmaz
  // oran: konudaki tanılama sorularının doğru oranı (1 → 60 Yeterli, kısmen → 40, hiç → 20 Tanıdık)
  function baslangicYaz(id, oran) {
    const Ux = U(), u = Ux[id];
    if (u && u.n) return;
    const ok = oran >= 1, ar = ok ? 3 : 0, bg = Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / GUN);
    Ux[id] = { p: ok ? 60 : oran > 0 ? 40 : 20, n: 1, g: [], son: Date.now(), sonraki: Date.now() + ar * GUN, ar: ar || 1, gun: bg, tn: 1 };
  }

  // ---------- Tanılama testi ----------
  function tanilamaBaslat(dk) {
    const plan = konuSec(dk), sorular = [];
    plan.forEach(({ u, konular, adet }) => konular.forEach((k, j) => soruHazirla(k, adet[j]).forEach((s) => sorular.push({ ...s, konuId: k.id, uniteAd: u.ad }))));
    if (!sorular.length) return;
    const say = {};
    let i = 0, sira = [], t0 = Date.now();
    function goster() {
      if (i >= sorular.length) return bitir();
      const s = sorular[i]; t0 = Date.now();
      ekran.innerHTML = `
        <div class="tn-ust"><span>🦉 Seviye tespiti · ${esc(dersAdi(dk))}</span><span>${i + 1} / ${sorular.length}</span></div>
        <div class="ilerleme"><div style="width:${(i / sorular.length) * 100}%"></div></div>
        <div class="not">Ünite: <b>${esc(s.uniteAd)}</b> · Bilmiyorsan tahmin etme, “Bilmiyorum” de. Bu bir sınav değil; neyi bildiğini bulmak için.</div>
        <div class="soru">${esc(s.soru)}</div>
        ${s.ses ? `<div class="satir" style="margin:0 0 10px"><button class="ses-btn" id="tnSes">🔊 Dinle</button></div>` : ""}
        <div id="tnSec"></div>
        <button class="btn2" id="tnBilmiyorum" style="width:100%">🤔 Bilmiyorum</button>`;
      if ($("tnSes")) $("tnSes").onclick = () => seslendir(s.ses);
      sira = s.secenekler.map((_, j) => j);
      for (let a = sira.length - 1; a > 0; a--) { const b = Math.floor(Math.random() * (a + 1)); [sira[a], sira[b]] = [sira[b], sira[a]]; }
      sira.forEach((asil, p) => {
        const b = document.createElement("button"); b.className = "secenek";
        b.textContent = "ABCD"[p] + ") " + s.secenekler[asil];
        b.onclick = () => cevapla(asil === s.dogru);
        $("tnSec").appendChild(b);
      });
      $("tnBilmiyorum").onclick = () => cevapla(false);
    }
    // Tanılamada doğru/yanlış hemen gösterilmez: öğrenci akışı bozulmadan hızlıca ilerler, sonuçlar haritada görünür
    function cevapla(ok) {
      const s = sorular[i];
      const x = (say[s.konuId] = say[s.konuId] || [0, 0]); x[1]++; if (ok) x[0]++;
      const st = kayit.istatistik && (kayit.istatistik[s.konuId] || (kayit.istatistik[s.konuId] = { s: 0, d: 0 }));
      if (st) { st.s++; if (ok) st.d++; }
      if (typeof ilerlemeEkle === "function") ilerlemeEkle((g) => { g.soru++; if (ok) g.dogru = (g.dogru || 0) + 1; g.sure = (g.sure || 0) + Math.min(Math.round((Date.now() - t0) / 1000), 120); });
      if (!ok) {
        const anahtar = (y) => y.konuId === s.konuId && y.soru === s.soru && y.secenekler[y.dogru] === s.secenekler[s.dogru];
        if (!kayit.yanlislar.some(anahtar)) {
          kayit.yanlislar.push({ konuId: s.konuId, soru: s.soru, secenekler: s.secenekler, dogru: s.dogru, cozum: s.cozum, ceviri: s.ceviri, sozluk: s.sozluk, ses: s.ses });
          if (kayit.yanlislar.length > 300) kayit.yanlislar.shift();
        }
      }
      i++; goster();
    }
    function bitir() {
      const sonuc = {};
      Object.entries(say).forEach(([id, [d, n]]) => { sonuc[id] = Math.round((d / n) * 100) / 100; baslangicYaz(id, sonuc[id]); });
      T[dk] = { t: Date.now(), sonuc };
      kaydet();
      gecmis.pop();
      git(() => harita(dk, true), "🗺️ Eksik Haritam");
    }
    goster();
  }

  // ---------- Eksik haritası ----------
  function harita(dk, yeni) {
    const v = T[dk];
    if (!v || !v.sonuc) { ekran.innerHTML = `<p>Bu derste henüz seviye tespiti yapılmadı.</p>`; return; }
    const R = v.sonuc;
    const satirlar = ICERIK[dk].uniteler.map((u, ui) => {
      const test = u.konular.filter((k) => k.id in R), d = test.reduce((a, k) => a + R[k.id], 0);
      if (!test.length) return null;
      const oran = d / test.length, dur = oran >= 0.99 ? ["guclu", "💪 Güçlü"] : oran >= 0.5 ? ["orta", "🌱 Gelişiyor"] : ["eksik", "🧩 Eksik"];
      return { u, ui, test, d, oran, dur };
    }).filter(Boolean);
    const top = Object.keys(R).length, dog = Object.values(R).filter((x) => x >= 1).length;
    const eksikler = satirlar.filter((x) => x.oran < 0.5);
    const yanlisKonu = satirlar.flatMap((x) => x.test.filter((k) => R[k.id] < 1)).sort((a, b) => R[a.id] - R[b.id]);
    const ilk = yanlisKonu[0];
    const mesaj = !yanlisKonu.length
      ? `Harika! Sorduğum ${top} konunun hepsini bildin. 🌟 Bu derste temelin sağlam. Konuları sırayla çalışarak <b>usta</b> seviyesine çıkabilirsin.`
      : `Yokladığım ${top} konudan <b>${dog}</b> tanesini tam bildin. ${eksikler.length ? `En çok desteğe ihtiyacın olan ünite${eksikler.length > 1 ? "ler" : ""}: <b>${eksikler.map((x) => esc(x.u.ad)).join(", ")}</b>.` : "Eksiklerin birkaç konuda toplanmış, kolayca kapatırız."} Bilmediğin konuları tekrar listene ekledim; ilk olarak <b>${esc(ilk.ad)}</b> konusundan başlamanı öneririm. 💪`;
    ekran.innerHTML = `
      <div class="tn-bilge"><span class="tn-baykus">🦉</span><div><b>Bilge</b>${yeni ? " · seviye tespitin bitti!" : ` · ${new Date(v.t).toLocaleDateString("tr-TR")} tarihli seviye tespitin`}<div style="margin-top:4px">${mesaj}</div></div></div>
      <div class="tn-ozet"><b>${dog}/${top}</b><small>bilinen konu</small><b>${satirlar.filter((x) => x.dur[0] === "guclu").length}</b><small>güçlü ünite</small><b>${eksikler.length}</b><small>eksik ünite</small></div>
      ${ilk ? `<button class="btn" id="tnIlk" style="width:100%;margin-bottom:14px">📖 ${esc(ilk.ad)} konusunu çalış</button>` : ""}
      <h2>🗺️ Ünite ünite durumun</h2>
      <div id="tnL"></div>
      <p class="not">Konuların yanındaki işaretler artık konu listesinde de görünür: 🟢 bildiğin, 🟡 çalışman gereken konu. Diğer konular için ünitelere girip konu testlerini çözebilirsin.</p>
      <div class="satir"><button class="btn2" id="tnYeniden">🔄 Seviye tespitini yeniden yap</button><button class="btn2" id="tnDers">📚 ${esc(dersAdi(dk))} ünitelerine dön</button></div>`;
    satirlar.forEach((x) => {
      const d = document.createElement("div"); d.className = "kart tn-unite tn-" + x.dur[0];
      d.innerHTML = `<div class="tn-ubas"><b>${x.ui + 1}. ${esc(x.u.ad)}</b><span class="rozet">${x.dur[1]}</span></div>
        <div class="tn-konular">${x.test.map((k) => `<button class="tn-konu ${R[k.id] >= 1 ? "ok" : R[k.id] > 0 ? "yarim" : "no"}" data-id="${esc(k.id)}">${R[k.id] >= 1 ? "✅" : R[k.id] > 0 ? "🌓" : "❌"} ${esc(k.ad)}</button>`).join("")}</div>`;
      $("tnL").appendChild(d);
    });
    ekran.querySelectorAll(".tn-konu").forEach((b) => (b.onclick = () => { const f = konuBul(b.dataset.id); if (f) git(() => konuSayfa(f.konu), f.konu.ad); }));
    if ($("tnIlk")) $("tnIlk").onclick = () => git(() => konuSayfa(ilk), ilk.ad);
    $("tnYeniden").onclick = () => { if (confirm("Seviye tespitini yeniden yapmak istiyor musun? Konu puanların silinmez, yalnızca harita yenilenir.")) git(() => tanilamaBaslat(dk), "🧭 Seviye Tespiti"); };
    $("tnDers").onclick = () => git(() => uniteler(dk), dersAdi(dk));
  }

  // ---------- Ders sayfasına bağlama ----------
  const asil = window.uniteler;
  window.uniteler = function (dk) {
    const r = asil.apply(this, arguments);
    try {
      if (!anaDers(dk)) return r;
      const v = T[dk], n = soruSay(dk);
      if (!n) return r;
      const kutu = document.createElement("div");
      if (v && v.sonuc) {
        const top = Object.keys(v.sonuc).length, dog = Object.values(v.sonuc).filter((x) => x >= 1).length;
        kutu.innerHTML = `<button class="kart tn-kucuk" id="tnHarita"><b>🗺️ Eksik Haritam</b><span class="rozet">${dog}/${top} konu biliniyor</span></button>`;
        ekran.prepend(kutu);
        $("tnHarita").onclick = () => git(() => harita(dk), "🗺️ Eksik Haritam");
        return r;
      }
      // Bu derste zaten çok konu çalışılmışsa ya da öğrenci "Sonra" dediyse yalnızca küçük bir düğme göster
      const calisilan = ICERIK[dk].uniteler.flatMap((u) => u.konular).filter((k) => { const u = U()[k.id]; return u && u.n; }).length;
      const kucuk = (v && v.atla) || calisilan >= 5;
      const dk2 = Math.max(2, Math.round(n * 0.6));
      kutu.innerHTML = kucuk
        ? `<button class="kart tn-kucuk" id="tnBasla"><b>🧭 Seviye Tespiti</b><span class="rozet">${n} soru · ~${dk2} dk</span></button>`
        : `<div class="tn-bilge tn-davet"><span class="tn-baykus">🦉</span><div><b>Bilge:</b> ${esc(dersAdi(dk))} dersine hoş geldin! Önce seni biraz tanıyayım mı? Her üniteden 2–3 soru soracağım (<b>${n} soru, yaklaşık ${dk2} dakika</b>). Sonunda hangi ünitelerde güçlü olduğunu, nerede eksiğin olduğunu gösteren bir <b>eksik haritası</b> çıkaracağım.
            <div class="satir" style="margin:10px 0 0"><button class="btn" id="tnBasla">🧭 Başlayalım</button><button class="btn2" id="tnSonra">Sonra</button></div></div></div>`;
      ekran.prepend(kutu);
      $("tnBasla").onclick = () => git(() => tanilamaBaslat(dk), "🧭 Seviye Tespiti");
      if ($("tnSonra")) $("tnSonra").onclick = () => { T[dk] = { atla: Date.now() }; kaydet(); git(() => uniteler(dk), dersAdi(dk), false); };
    } catch (e) {}
    return r;
  };
  window.TANILAMA = { baslat: (dk) => git(() => tanilamaBaslat(dk), "🧭 Seviye Tespiti"), harita: (dk) => git(() => harita(dk), "🗺️ Eksik Haritam"), yapildi: (dk) => !!(T[dk] && T[dk].sonuc), anaDers };

  const st = document.createElement("style");
  st.textContent = `
    .tn-bilge{display:flex;gap:12px;align-items:flex-start;background:color-mix(in srgb,var(--mor,#7c4dff) 10%,var(--kart));border:1px solid color-mix(in srgb,var(--mor,#7c4dff) 40%,var(--sinir));border-radius:18px;padding:14px 16px;margin-bottom:16px;font-size:17px;line-height:1.5}
    .tn-baykus{font-size:38px;line-height:1}
    .tn-kucuk{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:14px;border-left:6px solid var(--mor,#7c4dff)}
    .tn-ust{display:flex;justify-content:space-between;font-weight:600;color:var(--soluk);margin-bottom:6px}
    .tn-ozet{display:grid;grid-template-columns:repeat(3,1fr);text-align:center;background:var(--kart);border:1px solid var(--sinir);border-radius:16px;padding:12px 6px;margin-bottom:14px;grid-auto-flow:column;grid-template-rows:auto auto}
    .tn-ozet b{font-size:26px}.tn-ozet small{color:var(--soluk)}
    .tn-unite{margin-bottom:12px;border-left:8px solid var(--sinir)}
    .tn-unite.tn-guclu{border-left-color:#16a34a}.tn-unite.tn-orta{border-left-color:#f59e0b}.tn-unite.tn-eksik{border-left-color:#e5484d}
    .tn-ubas{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;flex-wrap:wrap}
    .tn-konular{display:flex;flex-direction:column;gap:6px;margin-top:10px}
    .tn-konu{text-align:left;background:var(--bg);border:1px solid var(--sinir);border-radius:12px;padding:10px 12px;font-size:16px;color:var(--yazi)}
    .tn-konu.yarim{background:color-mix(in srgb,#f59e0b 10%,var(--kart))}.tn-konu.no{background:color-mix(in srgb,#e5484d 9%,var(--kart))}`;
  document.head.appendChild(st);
})();
