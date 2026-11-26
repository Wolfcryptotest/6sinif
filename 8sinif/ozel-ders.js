// 🎓 Günün Özel Dersi (5–12, A3): ana sayfada Bilge'nin "Bugünkü dersin" kartı. En zayıf konu için yaklaşık 10 dakikalık akış:
// kısa anlatım → çözümlü örnek → kolaydan zora 5 soru (yanlışta önce ipucu ve ikinci deneme, yine yanlışsa çözüm ve benzer yeni soru)
// → tekrar takvimine ekleme (zorlandıysa yarın, iyi gittiyse ustalık aralığıyla).
// Konu seçimi: puanı 60'ın altındaki çalışılmış konular (en düşük önce) → tekrar zamanı gelen konular → kaldığı yerden yeni konu.
// Veri: kayit.ozelDers = { gun, id, neden, atla:[id], bitti:{d,n}, say, son:[{gun,id,d,n}] }. Ana kopya kökte; 5, 7–12'ye aynen kopyalanır.
(function () {
  if (typeof kayit === "undefined" || typeof soruHazirla !== "function" || typeof konuBul !== "function") return;
  const GUN = 86400000, SORU = 5, EK_EN_COK = 2;
  const O = (kayit.ozelDers = kayit.ozelDers || {});
  O.son = O.son || []; O.say = O.say || 0;
  const U = () => (window.USTALIK && USTALIK.U) || (kayit.ustalik = kayit.ustalik || {});
  const bugunK = () => gunAnahtar();
  const anaDers = (dk) => (typeof DERSLER !== "undefined" ? DERSLER : []).some((d) => d.key === dk) && ICERIK[dk] && !ICERIK[dk].secmeli && (ICERIK[dk].uniteler || []).length > 0;
  const sorusuVar = (k) => (k.sorular && k.sorular.length >= 3) || (window.URETEC && URETEC[k.id]);
  const dersAdi = (dk) => (ICERIK[dk] && ICERIK[dk].ad) || dk;
  const tumKonular = () => {
    const l = [];
    (typeof DERSLER !== "undefined" ? DERSLER : []).forEach((d) => { if (anaDers(d.key)) ICERIK[d.key].uniteler.forEach((u) => u.konular.forEach((k) => { if (sorusuVar(k)) l.push({ dk: d.key, u, k }); })); });
    return l;
  };

  // ---------- Konu seçimi ----------
  function adaylar() {
    const Ux = U(), simdi = Date.now(), tum = tumKonular(), atla = new Set(O.gun === bugunK() ? O.atla || [] : []);
    // Dün özel dersi yapılan konu, tekrar zamanı gelmeden yeniden seçilmez
    const yakin = new Set(O.son.filter((x) => x.gun !== bugunK() && Date.now() - (x.t || 0) < GUN * 1.5).map((x) => x.id));
    const calisilan = tum.filter((x) => Ux[x.k.id] && Ux[x.k.id].n && !atla.has(x.k.id));
    const l = [];
    calisilan.filter((x) => Ux[x.k.id].p < 60 && !(yakin.has(x.k.id) && Ux[x.k.id].sonraki > simdi))
      .sort((a, b) => Ux[a.k.id].p - Ux[b.k.id].p).forEach((x) => l.push({ ...x, neden: "zayif" }));
    calisilan.filter((x) => Ux[x.k.id].p >= 60 && Ux[x.k.id].sonraki <= simdi)
      .sort((a, b) => Ux[a.k.id].sonraki - Ux[b.k.id].sonraki).forEach((x) => l.push({ ...x, neden: "tekrar" }));
    // Yeni konu: en son çalışılan konunun ünitesinde sıradaki, sonra her dersin ilk çalışılmamış konusu
    const yeni = [], son = calisilan.slice().sort((a, b) => (Ux[b.k.id].son || 0) - (Ux[a.k.id].son || 0))[0];
    if (son) son.u.konular.forEach((k) => { const x = tum.find((y) => y.k === k); if (x) yeni.push(x); });
    tum.forEach((x) => yeni.push(x));
    const gor = new Set();
    yeni.forEach((x) => { if (gor.has(x.k.id) || atla.has(x.k.id) || (Ux[x.k.id] && Ux[x.k.id].n)) return; gor.add(x.k.id); l.push({ ...x, neden: "yeni" }); });
    return l;
  }
  function bugunku() {
    // Başlanmış ya da bitmiş ders gün boyu sabit kalır; başlanmamışsa güncel verilere göre yeniden seçilir
    if (O.gun === bugunK() && O.id && (O.basla || O.bitti)) { const b = konuBul(O.id); if (b) return { dk: b.ders, u: b.unite, k: b.konu, neden: O.neden }; }
    const a = adaylar()[0];
    if (!a) return null;
    const atla = O.gun === bugunK() ? O.atla || [] : [];
    Object.assign(O, { gun: bugunK(), id: a.k.id, neden: a.neden, atla, bitti: null, basla: 0 });
    kaydet();
    return a;
  }
  const nedenYazi = (x) => {
    const u = U()[x.k.id];
    return x.neden === "zayif" ? `Bu konuda puanın <b>${u ? u.p : 0}/100</b>. Birlikte üzerinden geçersek kısa sürede oturur.`
      : x.neden === "tekrar" ? `Bu konuyu biliyordun ama <b>tekrar zamanı geldi</b>. Şimdi tekrar edersen kolay kolay unutmazsın.`
      : `Sıradaki <b>yeni konun</b> bu. Önce birlikte öğrenelim, sonra kendini deneyelim.`;
  };

  // ---------- Zorluk sıralaması (kolaydan zora) ----------
  // Sorularda zorluk etiketi yok; kısa, az sayılı ve olumlu kökler kolay sayılır.
  const zorluk = (s) => String(s.soru).length + s.secenekler.join("").length * 0.4 + (String(s.soru).match(/\d+/g) || []).length * 10 + (/değildir|yanlıştır|olamaz|yoktur\?/i.test(s.soru) ? 40 : 0);
  const kalip = (s) => String(s.soru).replace(/[−-]?\d+(?:[.,]\d+)?/g, "#").slice(0, 60);
  const anahtar = (s) => s.soru + "|" + s.secenekler[s.dogru];
  const kelimeler = (t) => new Set(String(t).toLocaleLowerCase("tr").match(/[\p{L}]{4,}/gu) || []);
  function ipucuBul(k, s, yanlisSec) {
    const sk = kelimeler(s.soru + " " + s.secenekler[s.dogru]);
    let en = null, puan = 0;
    [...(k.ozet || []), ...(k.anlatim || [])].forEach((t) => { let p = 0; kelimeler(t).forEach((w) => { if (sk.has(w)) p++; }); if (p > puan) { puan = p; en = t; } });
    if (en && en.length > 260) en = en.slice(0, 259) + "…";
    return en ? `Hatırla: ${en}` : `“${yanlisSec}” doğru değil. Soruyu yeniden oku; neyin sorulduğunun altını çiz ve kalan şıkları tek tek dene.`;
  }

  // ---------- Ders akışı ----------
  function ders(x) {
    if (O.id === x.k.id && !O.basla) { O.basla = Date.now(); kaydet(); }
    const k = x.k, Ux = U(), p0 = Ux[k.id] && Ux[k.id].n ? Ux[k.id].p : null;
    const adimlar = ["📖 Anlatım", "🧩 Örnek", "✏️ Sorular", "📅 Tekrar"];
    const ust = (a) => `<div class="od-adim">${adimlar.map((t, i) => `<span class="${i < a ? "tamam" : i === a ? "simdi" : ""}">${t}</span>`).join("")}</div>`;
    const bilge = (html) => `<div class="od-bilge"><span class="od-baykus">🦉</span><div>${html}</div></div>`;

    // 1) Kısa anlatım
    function anlatim() {
      const par = (k.anlatim || []).filter(Boolean), kisa = par.slice(0, 3), kalan = par.slice(3);
      const oz = (k.ozet || []).slice(0, 4);
      ekran.innerHTML = ust(0) + bilge(`<b>Bilge:</b> Bugünkü dersimiz <b>${esc(k.ad)}</b> (${esc(dersAdi(x.dk))}). ${nedenYazi(x)} Yaklaşık 10 dakika sürecek.`) +
        `<h2>📖 Kısaca konu</h2><div class="anlatim">${kisa.map((t) => `<p>${esc(t)}</p>`).join("") || `<p>${esc(oz.join(" "))}</p>`}</div>` +
        (kalan.length ? `<details class="od-devam"><summary>Devamını oku (${kalan.length} paragraf)</summary><div class="anlatim">${kalan.map((t) => `<p>${esc(t)}</p>`).join("")}</div></details>` : "") +
        (oz.length && kisa.length ? `<div class="od-akil"><b>📌 Aklında tut</b><ul>${oz.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>` : "") +
        `<button class="btn od-ileri" id="odIleri">Anladım, örneğe geçelim →</button>`;
      $("odIleri").onclick = ornek;
    }

    // 2) Çözümlü örnek: önce öğrenci düşünür, sonra çözümü açar
    function ornek() {
      let o = (k.ornekler || [])[0];
      if (!o) { const s = soruHazirla(k, 3).find((q) => q.cozum && String(q.cozum).length > 12); if (s) o = [`${s.soru}   ${s.secenekler.map((t, i) => `${"ABCD"[i]}) ${t}`).join("   ")}`, `Doğru cevap: ${s.secenekler[s.dogru]}. ${s.cozum}`]; }
      if (!o) return sorular();
      const hata = (k.hatalar || [])[0];
      ekran.innerHTML = ust(1) + bilge(`Şimdi bir örneği birlikte çözelim. Önce kendin düşün, sonra çözüme bak. 🤔`) +
        `<div class="od-ornek"><b>🧩 Örnek</b><p>${esc(o[0])}</p><button class="btn2" id="odCoz">💡 Düşündüm, çözümü göster</button><div id="odCozum" hidden class="cozum">✅ ${esc(o[1])}</div></div>` +
        (hata ? `<div class="od-dikkat">⚠️ <b>Dikkat, sık yapılan hata:</b> ${esc(hata)}</div>` : "") +
        `<button class="btn od-ileri" id="odIleri">Şimdi sıra sende: 5 soru →</button>`;
      $("odCoz").onclick = () => { $("odCozum").hidden = false; $("odCoz").remove(); };
      $("odIleri").onclick = sorular;
    }

    // 3) Kolaydan zora 5 soru
    function sorular() {
      const havuz = soruHazirla(k, SORU + 6), gor = new Set();
      let liste = havuz.filter((s) => { const a = anahtar(s); if (gor.has(a)) return false; gor.add(a); return true; }).slice(0, SORU).sort((a, b) => zorluk(a) - zorluk(b));
      if (!liste.length) return bitir(0, 0);
      let i = 0, dogru = 0, ana = 0, ek = 0;
      const yedek = () => {
        // Benzer yeni soru: aynı kalıptan (sayıları değişmiş) görülmemiş bir soru; yoksa konudan görülmemiş herhangi bir soru
        const s0 = liste[i], aday = soruHazirla(k, 12).filter((s) => !gor.has(anahtar(s)));
        const s = aday.find((q) => kalip(q) === kalip(s0) && q.soru !== s0.soru) || aday[0];
        if (s) { gor.add(anahtar(s)); return { ...s, benzer: true }; }
        return null;
      };
      function goster() {
        if (i >= liste.length) return bitir(dogru, ana);
        const s = liste[i], t0 = Date.now();
        let deneme = 0;
        const sira = s.secenekler.map((_, j) => j);
        for (let a = sira.length - 1; a > 0; a--) { const b = Math.floor(Math.random() * (a + 1)); [sira[a], sira[b]] = [sira[b], sira[a]]; }
        const seviye = s.benzer ? "🔁 Benzer soru" : ["🌱 Isınma", "🌱 Kolay", "🌿 Orta", "🌳 Biraz zor", "🏔️ Zor"][Math.min(4, Math.round((ana / Math.max(1, SORU - 1)) * 4))];
        ekran.innerHTML = ust(2) + `<div class="od-sayac"><span>${seviye}</span><span>Soru ${Math.min(i + 1, liste.length)} / ${liste.length}</span></div>
          <div class="ilerleme"><div style="width:${(i / liste.length) * 100}%"></div></div>
          <div class="soru">${esc(s.soru)}</div>${s.ses ? `<div class="satir" style="margin:0 0 10px"><button class="ses-btn" id="odSes">🔊 Dinle</button></div>` : ""}
          <div id="odSec"></div><div id="odAlt"></div>`;
        if ($("odSes")) $("odSes").onclick = () => seslendir(s.ses);
        const btns = sira.map((asil, p) => {
          const b = document.createElement("button"); b.className = "secenek"; b.textContent = "ABCD"[p] + ") " + s.secenekler[asil];
          b.onclick = () => cevap(asil, b); $("odSec").appendChild(b); return b;
        });
        let secilen = null, teshis = null;
        const yanlisaEkle = () => {
          const ayni = (y) => y.konuId === k.id && y.soru === s.soru && y.secenekler[y.dogru] === s.secenekler[s.dogru];
          if (!kayit.yanlislar.some(ayni)) { kayit.yanlislar.push({ konuId: k.id, soru: s.soru, secenekler: s.secenekler, dogru: s.dogru, cozum: s.cozum, ceviri: s.ceviri, sozluk: s.sozluk, ses: s.ses, yanilgi: s.yanilgi, sec: secilen }); if (kayit.yanlislar.length > 300) kayit.yanlislar.shift(); }
        };
        function cevap(asil, b) {
          const ok = asil === s.dogru;
          deneme++;
          // Puana yalnızca ilk deneme yazılır; ipucuyla bulunan cevap öğrenmeyi gösterir ama puanı şişirmez
          if (deneme === 1) {
            window.soruKaydet(k.id, ok, (Date.now() - t0) / 1000); if (!s.benzer) ana++;
            if (!ok) { secilen = s.secenekler[asil]; teshis = window.USTALIK && USTALIK.hataKaydet ? USTALIK.hataKaydet({ ...s, konuId: k.id }, secilen) : null; yanlisaEkle(); }
          }
          if (ok) {
            if (deneme === 1 && !s.benzer) dogru++; // benzer sorular ek alıştırmadır; d/n yalnızca ana sorulardan sayılır
            btns.forEach((x) => (x.disabled = true)); b.classList.add("dogru");
            $("odAlt").innerHTML = `<div class="cozum"><b>${deneme === 1 ? ["✅ Doğru!", "✅ Harika!", "✅ Aferin!"][i % 3] : "✅ İpucuyla buldun, aferin! Bu tür soruyu bir dahaki sefere ilk denemede yaparsın."}</b><div style="margin-top:6px">${esc(s.cozum || "")}</div>${s.ceviri ? `<div class="ek-satir"><b>Türkçesi:</b> ${esc(s.ceviri)}</div>` : ""}</div>
              <button class="btn od-ileri" id="odIleri">${i + 1 < liste.length ? "Sonraki soru →" : "Dersi bitir →"}</button>`;
          } else if (deneme === 1) {
            b.disabled = true; b.classList.add("yanlis");
            $("odAlt").innerHTML = (teshis && teshis.etiket ? USTALIK.hataHtml(teshis, "Bunu aklında tutarak bir daha dene.") : "") + `<div class="od-ipucu">🦉 <b>Bir daha dene!</b> ${esc(ipucuBul(k, s, s.secenekler[asil]))}</div>`;
            kaydet(); return;
          } else {
            btns.forEach((x) => (x.disabled = true)); b.classList.add("yanlis"); btns[sira.indexOf(s.dogru)].classList.add("dogru");
            const yeni = ek < EK_EN_COK ? yedek() : null;
            if (yeni) { ek++; liste.splice(i + 1, 0, yeni); }
            $("odAlt").innerHTML = `<div class="cozum"><b>Doğru cevap: ${esc(s.secenekler[s.dogru])}</b><div style="margin-top:6px">${esc(s.cozum || "")}</div></div>
              ${yeni ? bilge(`Sorun değil, yanlışlar öğretir. 🌱 Çözümü oku; şimdi sana <b>benzer yeni bir soru</b> soracağım.`) : ""}
              <button class="btn od-ileri" id="odIleri">${yeni ? "Benzer soruyu çöz →" : i + 1 < liste.length ? "Sonraki soru →" : "Dersi bitir →"}</button>`;
          }
          kaydet();
          $("odIleri").onclick = () => { i++; goster(); };
        }
      }
      goster();
    }

    // 4) Tekrar takvimine ekleme ve sonuç
    function bitir(d, n) {
      const Ux = U(), u = Ux[k.id], oran = n ? d / n : 0;
      if (u) {
        // Zorlandıysa yarın tekrar; iyi gittiyse ustalık aralığı geçerli (en az 1 gün sonra)
        const yarin = new Date(); yarin.setHours(0, 0, 0, 0); const sabah = yarin.getTime() + GUN;
        if (oran < 0.8) u.sonraki = Math.min(Math.max(u.sonraki || 0, Date.now()), sabah);
        else u.sonraki = Math.max(u.sonraki || 0, sabah);
      }
      O.bitti = { d, n }; O.say++;
      O.son = O.son.filter((x) => x.gun !== bugunK() || x.id !== k.id).concat([{ gun: bugunK(), id: k.id, d, n, t: Date.now() }]).slice(-30);
      kaydet();
      const p1 = u ? u.p : 0, kalan = u ? Math.max(1, Math.round((u.sonraki - Date.now()) / GUN)) : 1;
      const tarih = u ? new Date(u.sonraki).toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long" }) : "";
      const mesaj = oran >= 0.8 ? `Süper bir ders oldu! 🌟 <b>${esc(k.ad)}</b> konusunu iyi kavradın.` : oran >= 0.5 ? `İyi iş! 👍 <b>${esc(k.ad)}</b> oturmaya başladı; birkaç tekrarla tam olacak.` : `Bugün zor bir konuyla uğraştın, bu cesaret ister. 💪 Yanlış yaptığın soruları tekrar listene ekledim.`;
      ekran.innerHTML = ust(3) + bilge(`<b>Bilge:</b> ${mesaj}`) +
        `<div class="od-sonuc"><div><b>${d}/${n}</b><small>ilk denemede doğru</small></div><div><b>${p0 == null ? "—" : p0} → ${p1}</b><small>konu puanın</small></div></div>
        <div class="od-takvim">📅 <b>Tekrar takvimine ekledim:</b> Bu konuyu ${kalan <= 1 ? "<b>yarın</b>" : `<b>${kalan} gün sonra</b>`} (${esc(tarih)}) sana yeniden soracağım. Tam unutmaya başlayacağın zamanda tekrar etmek, öğrendiğini kalıcı yapar.</div>
        <div class="satir"><button class="btn" id="odAna">🏠 Ana sayfa</button><button class="btn2" id="odKonu">📚 Konunun tamamı</button><button class="btn2" id="odBaska">➕ Bir ders daha</button></div>`;
      $("odAna").onclick = () => { gecmis.length = 0; git(anaSayfa, $("baslik").dataset.ana || document.title, false); };
      $("odKonu").onclick = () => git(() => konuSayfa(k), k.ad);
      $("odBaska").onclick = () => { O.atla = [...new Set([...(O.atla || []), k.id])]; O.id = null; O.bitti = null; O.basla = 0; kaydet(); const y = bugunku(); if (y) git(() => ders(y), "🎓 Bugünkü Dersin"); else alert("Bugünlük önerecek başka konum kalmadı. Harika çalıştın! 🎉"); };
    }
    anlatim();
  }

  // ---------- Ana sayfa kartı ----------
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.push((kutu) => {
    if (!kutu || document.getElementById("odKart")) return;
    if (!$("baslik").dataset.ana) $("baslik").dataset.ana = $("baslik").textContent;
    const x = bugunku();
    if (!x) return;
    const tamam = O.gun === bugunK() && O.bitti;
    const d = document.createElement("div"); d.id = "odKart"; d.className = "od-kart" + (tamam ? " tamam" : "");
    d.innerHTML = `<span class="od-baykus">🦉</span><div class="od-kart-ic"><small>🎓 BUGÜNKÜ DERSİN${tamam ? " · TAMAMLANDI ✅" : " · ~10 dk"}</small><b>${esc(x.k.ad)}</b><span class="od-alt">${esc(dersAdi(x.dk))} · ${tamam ? `${O.bitti.d}/${O.bitti.n} doğru. Tekrarı takvimine ekledim.` : x.neden === "zayif" ? "eksiğini kapatalım" : x.neden === "tekrar" ? "tekrar zamanı" : "yeni konu"}</span>
      <div class="satir" style="margin:8px 0 0"><button class="btn" id="odBasla">${tamam ? "➕ Bir ders daha" : "▶️ Derse başla"}</button>${tamam ? "" : `<button class="btn2" id="odDegis" title="Başka bir konu öner">🔀 Başka konu</button>`}</div></div>`;
    const hk = ekran.querySelector(".hedef-kart"); if (hk) hk.after(d); else kutu.before(d);
    $("odBasla").onclick = () => {
      if (tamam) { O.atla = [...new Set([...(O.atla || []), x.k.id])]; O.id = null; O.bitti = null; O.basla = 0; kaydet(); const y = bugunku(); if (!y) return alert("Bugünlük önerecek başka konum kalmadı. Harika çalıştın! 🎉"); return git(() => ders(y), "🎓 Bugünkü Dersin"); }
      git(() => ders(x), "🎓 Bugünkü Dersin");
    };
    if ($("odDegis")) $("odDegis").onclick = () => { O.atla = [...new Set([...(O.atla || []), x.k.id])]; O.id = null; kaydet(); if (!adaylar().length) { O.atla = []; kaydet(); } d.remove(); kartFn(kutu); };
  });
  const kartFn = window.ANA_KARTLAR[window.ANA_KARTLAR.length - 1];
  window.OZEL_DERS = { ac: () => { const x = bugunku(); if (x) git(() => ders(x), "🎓 Bugünkü Dersin"); }, adaylar, bugunku };

  const st = document.createElement("style");
  st.textContent = `
    .od-kart{display:flex;gap:12px;align-items:flex-start;background:linear-gradient(135deg,color-mix(in srgb,#7c4dff 16%,var(--kart)),color-mix(in srgb,#0ea5e9 12%,var(--kart)));border:2px solid color-mix(in srgb,#7c4dff 45%,var(--sinir));border-radius:18px;padding:14px 16px;margin:0 0 16px}
    .od-kart.tamam{border-color:#16a34a;background:color-mix(in srgb,#16a34a 10%,var(--kart))}
    .od-kart-ic{flex:1;min-width:0}.od-kart-ic small{display:block;font-weight:700;letter-spacing:.03em;color:var(--soluk);font-size:12.5px}
    .od-kart-ic b{display:block;font-size:20px;margin:2px 0}.od-alt{color:var(--soluk);font-size:14.5px}
    .od-baykus{font-size:40px;line-height:1}
    .od-bilge{display:flex;gap:12px;align-items:flex-start;background:color-mix(in srgb,#7c4dff 10%,var(--kart));border:1px solid color-mix(in srgb,#7c4dff 40%,var(--sinir));border-radius:18px;padding:12px 14px;margin:0 0 14px;font-size:17px;line-height:1.5}
    .od-bilge .od-baykus{font-size:34px}
    .od-adim{display:flex;gap:4px;margin:0 0 12px;flex-wrap:wrap}.od-adim span{flex:1;min-width:70px;text-align:center;font-size:12.5px;padding:6px 2px;border-radius:10px;background:var(--bg);border:1px solid var(--sinir);color:var(--soluk)}
    .od-adim .simdi{background:#7c4dff;color:#fff;border-color:#7c4dff;font-weight:700}.od-adim .tamam{background:color-mix(in srgb,#16a34a 15%,var(--kart));color:var(--yazi)}
    .od-devam{margin:0 0 12px}.od-devam summary{cursor:pointer;font-weight:600;color:var(--ana);padding:6px 0}
    .od-akil,.od-ornek,.od-dikkat,.od-takvim,.od-ipucu{background:var(--kart);border:1px solid var(--sinir);border-radius:16px;padding:12px 14px;margin:0 0 14px;line-height:1.5}
    .od-akil ul{margin:6px 0 0;padding-left:20px}.od-ornek p{margin:8px 0}
    .od-dikkat{border-left:6px solid #f59e0b}.od-takvim{border-left:6px solid #0ea5e9}.od-ipucu{border-left:6px solid #7c4dff;margin-top:12px}
    .od-ileri{width:100%;margin:4px 0 10px}
    .od-sayac{display:flex;justify-content:space-between;font-weight:600;color:var(--soluk);margin-bottom:6px}
    .od-sonuc{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0 0 14px;text-align:center}.od-sonuc div{background:var(--kart);border:1px solid var(--sinir);border-radius:16px;padding:12px 6px}
    .od-sonuc b{display:block;font-size:26px}.od-sonuc small{color:var(--soluk)}`;
  document.head.appendChild(st);
  if (window.ANA_YENILE) try { ANA_YENILE(); } catch (e) {}
})();
