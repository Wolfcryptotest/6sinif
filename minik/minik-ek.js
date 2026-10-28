// Okul öncesi ekleri: aile sesiyle kayıt (yönergeleri anne/baba sesiyle okutma), günlük süre ve hareket molası, veli ayarları
(function () {
  const ANAHTAR = (window.SINIF && window.SINIF.anahtar) || "minik";
  const $ = (h) => { const d = document.createElement("div"); d.innerHTML = h.trim(); return d.firstElementChild; };
  const esc = OYUN.esc;
  const norm = (m) => String(m || "").replace(/[\p{Extended_Pictographic}️‍]/gu, "").replace(/\s+/g, " ").trim();
  const temiz = (m) => String(m || "").replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, " ").replace(/\s+/g, " ").trim() || String(m || "");
  const ls = { al: (k, v) => { try { return JSON.parse(localStorage.getItem(k)) ?? v; } catch (e) { return v; } }, yaz: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };

  // ---------- Kayıtlar (IndexedDB) ----------
  const KAYIT = new Map(); // metin -> objectURL
  let db = null;
  const dbAc = () => new Promise((ok) => {
    try {
      const r = indexedDB.open("minik-ses", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("kayit");
      r.onsuccess = () => { db = r.result; ok(db); };
      r.onerror = () => ok(null);
    } catch (e) { ok(null); }
  });
  const tx = (mod) => db.transaction("kayit", mod).objectStore("kayit");
  async function yukle() {
    await dbAc(); if (!db) return;
    const st = tx("readonly"), r = st.openCursor();
    r.onsuccess = () => { const c = r.result; if (!c) return; KAYIT.set(c.key, URL.createObjectURL(c.value)); c.continue(); };
  }
  const kaydetSes = (metin, blob) => new Promise((ok) => { if (!db) return ok(); const r = tx("readwrite").put(blob, metin); r.onsuccess = () => { if (KAYIT.has(metin)) URL.revokeObjectURL(KAYIT.get(metin)); KAYIT.set(metin, URL.createObjectURL(blob)); ok(); }; r.onerror = () => ok(); });
  const silSes = (metin) => new Promise((ok) => { if (!db) return ok(); const r = tx("readwrite").delete(metin); r.onsuccess = () => { KAYIT.delete(metin); ok(); }; r.onerror = () => ok(); });
  yukle();

  // ---------- Duyulan cümleler (veli kayıt listesi için) ----------
  const DUY = "minik-duyulan";
  let duyulan = ls.al(DUY, {});
  let duyZam = null;
  function duy(metin) {
    for (const p of parcala(metin)) { duyulan[p] = (duyulan[p] || 0) + 1; }
    clearTimeout(duyZam); duyZam = setTimeout(() => { const e = Object.entries(duyulan).sort((a, b) => b[1] - a[1]).slice(0, 500); duyulan = Object.fromEntries(e); ls.yaz(DUY, duyulan); }, 1500);
  }
  const parcala = (m) => norm(m).split(/(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜ0-9"])/).map((x) => x.trim()).filter((x) => x.length > 1);

  // ---------- APP.konus: kayıtlı cümleleri aile sesiyle çal ----------
  let caliyor = null;
  const eskiKonus = APP.konus, eskiDur = APP.sesDur;
  APP.sesDur = () => { if (caliyor) { caliyor.pause(); caliyor = null; } eskiDur(); };
  APP.konus = (m, sonra, zorla) => {
    if (!APP.sesAcik() && !zorla) { if (sonra) sonra(); return; }
    duy(m);
    const tam = norm(m), parca = parcala(m);
    let liste = null;
    if (KAYIT.has(tam)) liste = [tam];
    else if (parca.length && parca.every((p) => KAYIT.has(p))) liste = parca;
    if (!liste) return eskiKonus(temiz(m), sonra, zorla);
    APP.sesDur();
    let i = 0;
    const sirada = () => {
      if (i >= liste.length) { caliyor = null; if (sonra) sonra(); return; }
      const a = new Audio(KAYIT.get(liste[i++])); caliyor = a;
      a.onended = () => { if (caliyor === a) sirada(); };
      a.onerror = () => { if (caliyor === a) sirada(); };
      a.play().catch(() => { caliyor = null; eskiKonus(temiz(m), sonra, zorla); });
    };
    sirada();
  };

  // ---------- Günlük süre ve hareket molası ----------
  const AYAR = "minik-ayar";
  const ayar = () => Object.assign({ dakika: 15, mola: true }, ls.al(AYAR, {}));
  const bugun = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const SURE = "minik-sure";
  setInterval(() => {
    if (document.visibilityState !== "visible") return;
    const s = ls.al(SURE, {}), t = bugun();
    s[t] = (s[t] || 0) + 0.25; ls.yaz(SURE, s);
    const a = ayar();
    if (a.mola && s[t] >= a.dakika && !ls.al("minik-mola-" + t, false)) { ls.yaz("minik-mola-" + t, true); molaGoster(); }
  }, 15000);
  const MOLA = [["🤸", "5 kere zıpla"], ["🦩", "Tek ayağının üstünde 10'a kadar say"], ["🙆", "Kollarını açıp kuş gibi uç"], ["🐸", "Kurbağa gibi 3 kere sıçra"], ["🌬️", "Derin nefes al, yavaşça ver"]];
  function molaGoster() {
    const [e, h] = MOLA[Math.floor(Math.random() * MOLA.length)];
    const o = $(`<div class="geri-bildirim iyi" style="z-index:99"><div class="ic"><div style="font-size:90px">${e}</div><div class="metin"><b>Mola zamanı!</b>Bugün çok güzel çalıştın. Şimdi ekranı bırak: ${esc(h)}. Sonra ailene bugün ne öğrendiğini anlat. 🥰</div><button>Tamam</button></div></div>`);
    document.body.appendChild(o);
    APP.konus(`Mola zamanı! Bugün çok güzel çalıştın. Şimdi ekranı bırak. ${h}. Sonra ailene bugün ne öğrendiğini anlat.`, null, true);
    o.querySelector("button").onclick = () => { APP.sesDur(); o.remove(); };
  }

  // Uygulamanın söyleyebileceği cümleler (her konudan örnek sorular, öğren kartları, masallar)
  let _ur = null;
  function uretilen() {
    if (_ur) return _ur;
    const set = new Set();
    for (const d of Object.keys(window.DERS || {})) for (const t of DERS[d].temalar) for (const k of t.konular) {
      (k.bilgi || []).forEach((b) => { if (!b[2]) parcala(b[1]).forEach((x) => set.add(x)); });
      for (let i = 0; i < 25; i++) { try { const g = k.uret(); if (g) parcala((g.okunacak || g.soru) + (g.tip === "dy" ? ". " + g.ifade : "")).forEach((x) => set.add(x)); } catch (e) {} }
    }
    (window.HIKAYELER || []).forEach((h) => { (h.sayfalar || h.metin || []).forEach((sy) => parcala(sy).forEach((x) => set.add(x))); (h.sorular || []).forEach((q) => parcala(q[0]).forEach((x) => set.add(x))); });
    return (_ur = [...set]);
  }

  // ---------- Veli Köşesi ekleri ----------
  const SABIT = ["Harika!", "Süpersin!", "Aferin!", "Çok güzel!", "Bravo!", "Muhteşem!", "Tam isabet!", "Doğru bildin!", "Olsun, öğreniyoruz!", "Bir dahakine olacak!", "Hata yapmak öğrenmektir!", "Az kaldı!"];
  window.veliEk = (ekran, ctx) => {
    const K = ctx.K, a = ayar();
    const s = ls.al(SURE, {}), son7 = []; for (let i = 6; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); const t = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); son7.push([d.getDate(), Math.round(s[t] || 0)]); }
    const p = $(`<div class="panel"><h3>👶 Okul öncesi ayarları</h3>
      <div style="font-size:19px;margin:6px 0">Yaş seviyesi:</div>
      <div class="satir"><button class="buyukbtn ${K.yas === 4 ? "" : "ikincil"}" style="font-size:20px">4 yaş</button><button class="buyukbtn ${K.yas !== 4 ? "" : "ikincil"}" style="font-size:20px">5 yaş</button></div>
      <div style="font-size:19px;margin:10px 0 6px">Günlük ekran süresi (sonunda hareket molası):</div>
      <div class="satir">${[10, 15, 20, 30].map((d) => `<button class="buyukbtn ${a.dakika === d ? "" : "ikincil"}" data-d="${d}" style="font-size:19px">${d} dk</button>`).join("")}</div>
      <button class="buyukbtn ikincil" data-mola style="font-size:19px">${a.mola ? "🤸 Hareket molası: AÇIK" : "🤸 Hareket molası: KAPALI"}</button>
      <div class="not">Son 7 gün (dakika): ${son7.map(([g, d]) => `${g}. gün <b>${d}</b>`).join(" · ")}<br>Dünya Sağlık Örgütü 3-4 yaş için günde en fazla 1 saat ekran ve en az 3 saat hareketli oyun öneriyor.</div></div>`);
    const yb = p.querySelectorAll(".satir")[0].querySelectorAll("button");
    yb.forEach((b, i) => b.onclick = () => { K.yas = 4 + i; window.YAS = K.yas; ctx.kaydet(); yb.forEach((x, j) => x.classList.toggle("ikincil", j !== i)); });
    p.querySelectorAll("[data-d]").forEach((b) => b.onclick = () => { const y = ayar(); y.dakika = +b.dataset.d; ls.yaz(AYAR, y); p.querySelectorAll("[data-d]").forEach((x) => x.classList.toggle("ikincil", x !== b)); });
    const mb = p.querySelector("[data-mola]"); mb.onclick = () => { const y = ayar(); y.mola = !y.mola; ls.yaz(AYAR, y); mb.textContent = y.mola ? "🤸 Hareket molası: AÇIK" : "🤸 Hareket molası: KAPALI"; };
    ekran.appendChild(p);

    // Aile sesi kaydı
    const k = $(`<div class="panel"><h3>🎙️ Kendi sesinle oku</h3>
      <div class="not" style="font-size:16px">Uygulamanın söylediği cümleleri kendi sesinizle kaydedin; kaydedilen cümleler tablet sesi yerine sizin sesinizle çalınır. Kaydedilmeyenleri tablet okumaya devam eder. 🎙️'ye dokunun, cümleyi okuyun, bitince ⏹'ye dokunun. En üstte çocuğun en çok duyduğu cümleler yer alır; aramayla uygulamadaki bütün cümleleri (sorular, masallar) bulabilirsiniz.</div>
      <input class="ad" placeholder="Cümle ara…" style="margin:8px 0">
      <div class="not ozet"></div><div class="liste" style="display:grid;gap:6px;margin-top:6px"></div></div>`);
    const liste = k.querySelector(".liste"), ara = k.querySelector("input"), ozet = k.querySelector(".ozet");
    let rec = null, recMetin = null;
    async function kayitBasla(metin, b) {
      if (rec) { rec.stop(); return; }
      try {
        const akim = await navigator.mediaDevices.getUserMedia({ audio: true });
        const parcalar = []; rec = new MediaRecorder(akim); recMetin = metin;
        rec.ondataavailable = (e) => e.data.size && parcalar.push(e.data);
        rec.onstop = async () => { akim.getTracks().forEach((t) => t.stop()); const blob = new Blob(parcalar, { type: rec.mimeType || "audio/webm" }); rec = null; await kaydetSes(recMetin, blob); doldur(); };
        rec.start(); b.textContent = "⏹"; b.style.background = "#ef476f"; b.style.color = "#fff";
        setTimeout(() => { if (rec && recMetin === metin) rec.stop(); }, 12000);
      } catch (e) { rec = null; ozet.textContent = "Mikrofona erişilemedi. Tarayıcı izin vermediyse adres çubuğundaki kilitten mikrofon iznini açın."; }
    }
    function doldur() {
      const q = norm(ara.value).toLocaleLowerCase("tr");
      const tum = [...new Set([...Object.keys(duyulan).sort((x, y) => duyulan[y] - duyulan[x]), ...SABIT.map(norm), ...uretilen()])];
      const goster = tum.filter((m) => !q || m.toLocaleLowerCase("tr").includes(q)).slice(0, 60);
      ozet.textContent = `Kaydedilen cümle: ${KAYIT.size} · Listede: ${tum.length}`;
      liste.innerHTML = "";
      goster.forEach((m) => {
        const var_ = KAYIT.has(m);
        const r = $(`<div style="display:flex;gap:6px;align-items:center;background:${var_ ? "#eafbf1" : "#fff"};border:2px solid #efe4cc;border-radius:12px;padding:6px 8px"><span style="flex:1;font-size:16px">${var_ ? "✅ " : ""}${esc(m)}</span>
          <button title="Dinle" style="font-size:22px;padding:6px 10px">▶</button><button title="Kaydet" style="font-size:22px;padding:6px 10px">🎙️</button>${var_ ? `<button title="Sil" style="font-size:20px;padding:6px 10px">🗑</button>` : ""}</div>`);
        const [dn, kb, sl] = r.querySelectorAll("button");
        dn.onclick = () => APP.konus(m, null, true);
        kb.onclick = () => kayitBasla(m, kb);
        if (sl) sl.onclick = async () => { await silSes(m); doldur(); };
        liste.appendChild(r);
      });
    }
    ara.oninput = doldur;
    if (!window.MediaRecorder || !navigator.mediaDevices) ozet.textContent = "Bu tarayıcı ses kaydını desteklemiyor.";
    setTimeout(doldur, 300);
    ekran.appendChild(k);
  };
})();
