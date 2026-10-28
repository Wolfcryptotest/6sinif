// 3. Sınıf Oyunla Öğren — uygulama mantığı
(function () {
  const S = Object.assign({ no: 3, anahtar: "3sinif", dersler: ["matematik", "turkce", "hayat", "fen", "ingilizce"], turGorev: 8, temaGorev: 10, okumaHedef: "70-100" }, window.SINIF || {});
  const SIRA = S.dersler.filter((d) => window.DERS[d]);
  if (window.SES) SES.baslat(S.anahtar, S.no <= 1 ? 0.9 : 1);
  const ekran = document.getElementById("ekran");
  const esc = OYUN.esc;
  const $ = (h) => { const d = document.createElement("div"); d.innerHTML = h.trim(); return d.firstElementChild; };
  const ANAHTAR = S.anahtar;

  // ---------- Kayıt ----------
  let K;
  try { K = JSON.parse(localStorage.getItem(ANAHTAR)) || {}; } catch (e) { K = {}; }
  K = Object.assign({ ad: "", yildiz: 0, konu: {}, gunluk: {}, hikaye: {}, hatalar: [], ses: true, okuma: [], hedefOdul: {}, kelime: {} }, K);
  const kaydet = () => { try { localStorage.setItem(ANAHTAR, JSON.stringify(K)); } catch (e) {} ustBar(); };
  const tarih = (d) => { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const gun = (t) => { t = t || tarih(); return K.gunluk[t] || (K.gunluk[t] = { tur: 0, soru: 0, dogru: 0, hikaye: false }); };
  const aktif = (t) => { const g = K.gunluk[t]; return g && (g.tur > 0 || g.hikaye); };
  function seri() {
    let d = new Date(), n = 0;
    if (!aktif(tarih(d))) d.setDate(d.getDate() - 1);
    while (aktif(tarih(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function enUzunSeri() {
    const gunler = Object.keys(K.gunluk).filter(aktif).sort(); let en = 0, s = 0, onceki = null;
    gunler.forEach((t) => { const d = new Date(t + "T12:00"); s = onceki && (d - onceki) / 864e5 === 1 ? s + 1 : 1; en = Math.max(en, s); onceki = d; });
    return en;
  }
  const HEDEF_TUR = 2;
  const hedefTamam = () => { const g = gun(); return g.tur >= HEDEF_TUR && g.hikaye; };

  function ustBar() {
    document.getElementById("yildizCip").textContent = "⭐ " + K.yildiz;
    document.getElementById("seriCip").textContent = "🔥 " + seri();
  }

  // ---------- Ses ----------
  const ss = window.speechSynthesis;
  let trSes = null, enSes = null;
  function sesleriBul() {
    if (!ss) return; const v = ss.getVoices();
    trSes = v.find((x) => /^tr/i.test(x.lang)) || null;
    enSes = v.find((x) => /^en[-_]US/i.test(x.lang)) || v.find((x) => /^en/i.test(x.lang)) || null;
  }
  if (ss) { sesleriBul(); ss.onvoiceschanged = sesleriBul; }
  function soyle(metin, dil, ses, hiz, sonra) {
    if (!ss) { if (sonra) sonra(); return; }
    const m = document.querySelector(".maskot");
    if (window.SES) { // en doğal ses + kullanıcının hız ayarı
      SES.konus(metin.replace(/[🔊⭐🎉➜✔]/g, ""), dil.slice(0, 2), { hiz, ekle: true, basla: () => m && m.classList.add("konusuyor"), sonra: () => { m && m.classList.remove("konusuyor"); if (sonra) sonra(); } });
      return;
    }
    const u = new SpeechSynthesisUtterance(metin.replace(/[🔊⭐🎉➜✔]/g, ""));
    u.lang = dil; if (ses) u.voice = ses; u.rate = hiz;
    u.onstart = () => m && m.classList.add("konusuyor");
    u.onend = () => { m && m.classList.remove("konusuyor"); if (sonra) sonra(); };
    ss.speak(u);
  }
  let ctx = null;
  function ton(fr, bas, sure, tip, ses) {
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = tip || "sine"; o.frequency.value = fr; g.gain.value = ses || 0.15;
      o.connect(g); g.connect(ctx.destination);
      const t = ctx.currentTime + bas; o.start(t);
      g.gain.setValueAtTime(ses || 0.15, t); g.gain.exponentialRampToValueAtTime(0.001, t + sure); o.stop(t + sure);
    } catch (e) {}
  }
  window.APP = {
    sesAcik: () => K.ses,
    sesDur: () => { if (ss) ss.cancel(); },
    konus: (m, sonra, zorla) => { if (!K.ses && !zorla) { if (sonra) sonra(); return; } ss && ss.cancel(); soyle(m, "tr-TR", trSes, 0.95, sonra); },
    konusEn: (m, zorla) => { if (!K.ses && !zorla) return; soyle(m, "en-US", enSes, 0.8); },
    efekt: (t) => {
      if (t === "dogru") { ton(660, 0, .15); ton(880, .12, .25); }
      else if (t === "yanlis") { ton(200, 0, .25, "square", .06); }
      else if (t === "tik") ton(1200, 0, .05, "sine", .05);
      else if (t === "yildiz") [523, 659, 784, 1047].forEach((f, i) => ton(f, i * .12, .3));
    },
    konfeti
  };
  function konfeti() {
    const s = ["⭐", "🎉", "✨", "🎈", "🌟", "💛"];
    for (let i = 0; i < 28; i++) {
      const e = document.createElement("div"); e.className = "konfeti"; e.textContent = s[i % s.length];
      e.style.left = Math.random() * 100 + "vw"; e.style.animationDuration = 1.6 + Math.random() * 1.8 + "s"; e.style.animationDelay = Math.random() * .5 + "s";
      document.body.appendChild(e); setTimeout(() => e.remove(), 4200);
    }
  }

  // ---------- Gezinme ----------
  const yigin = [];
  function git(f, baslik) { yigin.push([f, baslik]); ciz(); }
  function geri() { APP.sesDur(); document.querySelectorAll(".geri-bildirim").forEach((x) => x.remove()); if (yigin.length > 1) yigin.pop(); ciz(); }
  function ciz() {
    const [f, b] = yigin[yigin.length - 1];
    document.getElementById("geri").hidden = yigin.length <= 1;
    document.getElementById("baslik").textContent = b || "🦉 Oyunla Öğren " + S.no;
    ekran.innerHTML = ""; ekran.style.removeProperty("--renk"); window.scrollTo(0, 0); f(); ustBar();
  }
  document.getElementById("geri").onclick = geri;
  const anaya = () => { yigin.length = 1; ciz(); };

  // ---------- Yardımcılar ----------
  const tumKonular = () => SIRA.flatMap((d) => DERS[d].temalar.flatMap((t) => t.konular.map((k) => ({ d, t, k }))));
  const yildizYaz = (n, boyut) => `<span class="yildizlar" ${boyut ? `style="font-size:${boyut}px"` : ""}>${[0, 1, 2].map((i) => i < n ? "⭐" : `<span class="yildiz-bos">⭐</span>`).join("")}</span>`;
  function maskot(metin, konus) {
    const m = $(`<div class="maskot"><div class="yuz">🦉</div><div class="balon"></div></div>`);
    m.querySelector(".balon").textContent = metin; ekran.appendChild(m);
    if (konus) setTimeout(() => APP.konus(metin), 200);
    return m;
  }
  const yildizHesapla = (d, t) => { const h = t - d; return h <= 1 ? 3 : d / t >= 0.6 ? 2 : d > 0 ? 1 : 0; };

  // ---------- İlk açılış ----------
  function ilkAcilis() {
    maskot("Merhaba! Ben Bilgin Baykuş. Seninle oyun oynayarak öğreneceğiz. Adın ne?", true);
    const k = $(`<div class="gorev"><input class="ad" placeholder="Adını yaz" maxlength="20"><button class="buyukbtn" style="--renk:var(--yesil)">Başlayalım! 🚀</button></div>`);
    k.querySelector("button").onclick = () => { const a = k.querySelector("input").value.trim(); if (!a) return; K.ad = a.charAt(0).toLocaleUpperCase("tr") + a.slice(1); kaydet(); anaya(); };
    ekran.appendChild(k);
  }

  // ---------- Ana sayfa ----------
  function anaSayfa() {
    if (!K.ad) return ilkAcilis();
    const g = gun(), saat = new Date().getHours();
    const selam = saat < 12 ? "Günaydın" : saat < 18 ? "Merhaba" : "İyi akşamlar";
    maskot(hedefTamam() ? `${selam} ${K.ad}! Bugünkü görevlerini bitirdin, harikasın! İstersen oynamaya devam et.` : `${selam} ${K.ad}! Bugün ne öğrenelim?`);
    const hk = bugununHikayesi();
    const gv = $(`<div class="gorev"><h3>🎯 Bugünün Görevleri ${hedefTamam() ? "✅" : ""}</h3><div class="is">
      <button class="${g.hikaye ? "tamam" : ""}">📚 Günün hikâyesini oku<br><small>${esc(hk.baslik)} ${g.hikaye ? "✅" : ""}</small></button>
      <button class="${g.tur >= HEDEF_TUR ? "tamam" : ""}">🎮 ${HEDEF_TUR} oyun turu oyna<br><small>${Math.min(g.tur, HEDEF_TUR)} / ${HEDEF_TUR} ${g.tur >= HEDEF_TUR ? "✅" : ""}</small></button>
    </div><div class="not" style="margin-top:6px">Görevleri bitirince +3 ⭐ hediye! 🔥 Seri: ${seri()} gün</div></div>`);
    gv.querySelectorAll(".is button")[0].onclick = () => git(() => hikayeSayfa(HIKAYELER.indexOf(hk)), "📚 Günün Hikâyesi");
    gv.querySelectorAll(".is button")[1].onclick = () => { const z = onerilenKonu(); git(() => konuSayfa(z.d, z.k), z.k.ad); };
    ekran.appendChild(gv);
    const ds = $(`<div class="dersler"></div>`);
    SIRA.forEach((id) => {
      const D = DERS[id], ks = D.temalar.flatMap((t) => t.konular);
      const y = ks.reduce((t, k) => t + ((K.konu[k.id] || {}).en || 0), 0);
      const b = $(`<button class="ders" style="--renk:${D.renk}"><span class="ikon">${D.ikon}</span><div><b>${esc(D.ad)}</b><br><small>⭐ ${y} / ${ks.length * 3}</small></div></button>`);
      b.onclick = () => git(() => dersSayfa(id), D.ikon + " " + D.ad);
      ds.appendChild(b);
    });
    ekran.appendChild(ds);
    const kc = $(`<div class="kucukler">
      <button><span>📚</span>Hikâye Kitaplığı</button>
      <button><span>🏆</span>Çıkartma Albümüm</button>
      <button><span>🔁</span>Hatalarım (${K.hatalar.length})</button>
      <button><span>📕</span>MEB Kitaplarım</button>
      <button><span>👨‍👩‍👧</span>Veli Köşesi</button>
      ${DERS.ingilizce && SIRA.includes("ingilizce") ? `<button><span>🧠</span>Kelime Tekrarı (${kelimeVakti().length})</button>` : ""}</div>`);
    const b = kc.querySelectorAll("button");
    b[0].onclick = () => git(kitaplik, "📚 Hikâye Kitaplığı");
    b[1].onclick = () => git(album, "🏆 Çıkartma Albümüm");
    b[2].onclick = () => git(hatalarim, "🔁 Hatalarım");
    b[3].onclick = () => git(() => mebKitaplari(), "📕 MEB Kitaplarım");
    b[4].onclick = () => git(veliKapi, "👨‍👩‍👧 Veli Köşesi");
    if (b[5]) b[5].onclick = () => git(kelimeTekrar, "🧠 Kelime Tekrarı");
    ekran.appendChild(kc);
    if (window.SES) { const rk = $(`<div></div>`); ekran.appendChild(rk); SES.rehberGoster(rk); } // kaliteli ses yoksa bir kez rehber
  }
  function onerilenKonu() {
    const hepsi = tumKonular();
    return hepsi.find((x) => !(K.konu[x.k.id] || {}).oyna) || hepsi.slice().sort((a, b) => ((K.konu[a.k.id] || {}).en || 0) - ((K.konu[b.k.id] || {}).en || 0))[0];
  }

  // ---------- Ders haritası ----------
  function dersSayfa(id) {
    const D = DERS[id];
    ekran.style.setProperty("--renk", D.renk);
    if ((window.KITAPLAR || []).some((k) => k.ders === id)) { const kb = $(`<button class="buyukbtn ikincil" style="margin-top:0">📕 MEB ${esc(D.ad)} kitapları</button>`); kb.onclick = () => git(() => mebKitaplari(id), "📕 " + D.ad + " Kitapları"); ekran.appendChild(kb); }
    let yeniBulundu = false;
    D.temalar.forEach((t, ti) => {
      const kutu = $(`<div class="tema"><h3><span>${ti + 1}. ${esc(t.ad)}</span><button class="tema-btn">🏁 Tema Yarışı</button></h3><div class="yol"></div></div>`);
      kutu.querySelector(".tema-btn").onclick = () => git(() => temaYarisi(id, t), "🏁 " + t.ad);
      t.konular.forEach((k) => {
        const s = K.konu[k.id] || {};
        const yeni = !yeniBulundu && !s.oyna; if (yeni) yeniBulundu = true;
        const b = $(`<button class="dugum ${yeni ? "yeni" : ""}" style="--renk:${D.renk}"><div class="daire">${k.ikon || D.ikon}</div><div class="ad">${esc(k.ad)}</div>${yildizYaz(s.en || 0)}</button>`);
        b.onclick = () => git(() => konuSayfa(id, k), k.ad);
        kutu.querySelector(".yol").appendChild(b);
      });
      ekran.appendChild(kutu);
    });
  }

  // ---------- Konu ----------
  function konuSayfa(id, k) {
    const D = DERS[id], s = K.konu[k.id] || {};
    ekran.style.setProperty("--renk", D.renk);
    ekran.appendChild($(`<div style="text-align:center"><div style="font-size:80px;line-height:1.1">${k.ikon || D.ikon}</div><h2 style="margin:4px 0">${esc(k.ad)}</h2>${yildizYaz(s.en || 0, 30)}<div class="not">${s.oyna ? `${s.oyna} kez oynadın` : "Henüz oynamadın"}</div></div>`));
    const b1 = $(`<button class="buyukbtn ikincil">📖 Öğren (Bilgin anlatsın)</button>`);
    b1.onclick = () => git(() => ogren(id, k), "📖 " + k.ad);
    const b2 = $(`<button class="buyukbtn">🎮 Oyna (${S.turGorev} görev)</button>`);
    b2.onclick = () => git(() => oyna(id, k), "🎮 " + k.ad);
    ekran.appendChild(b1); ekran.appendChild(b2);
    if (k.video) {
      const liste = Array.isArray(k.video) ? k.video : [["Video izle", k.video]];
      const sat = $(`<div class="satir"></div>`);
      liste.forEach(([etiket, vid]) => {
        const b3 = $(`<button class="buyukbtn ikincil">🎬 ${esc(etiket)}</button>`);
        b3.onclick = () => git(() => { ekran.innerHTML = `<div style="position:relative;aspect-ratio:16/9;border-radius:20px;overflow:hidden;background:#000"><iframe style="position:absolute;inset:0;width:100%;height:100%;border:0" src="https://www.youtube-nocookie.com/embed/${vid}?rel=0" allowfullscreen allow="autoplay; encrypted-media"></iframe></div><p class="not">Video internet gerektirir.</p>`; }, "🎬 " + k.ad);
        sat.appendChild(b3);
      });
      ekran.appendChild(sat);
    }
  }

  function ogren(id, k) {
    const D = DERS[id]; let i = 0;
    ekran.style.setProperty("--renk", D.renk);
    const m = maskot("");
    const kart = $(`<div class="bilgi"></div>`), nok = $(`<div class="noktalar"></div>`), sat = $(`<div class="satir"></div>`);
    ekran.appendChild(kart); ekran.appendChild(nok); ekran.appendChild(sat);
    function goster() {
      const [em, metin] = k.bilgi[i];
      kart.innerHTML = `<div class="em">${em}</div><p></p>`; kart.querySelector("p").textContent = metin;
      m.querySelector(".balon").textContent = i === 0 ? "Dinle ve oku!" : i === k.bilgi.length - 1 ? "Son kart! Sonra oynayalım mı?" : "Devam edelim!";
      nok.innerHTML = k.bilgi.map((_, n) => `<i class="${n === i ? "on" : ""}"></i>`).join("");
      sat.innerHTML = "";
      const once = $(`<button class="buyukbtn ikincil">◀ Önceki</button>`); once.disabled = i === 0; once.style.opacity = i === 0 ? .4 : 1;
      once.onclick = () => { i--; goster(); };
      const sesli = () => k.bilgi[i][2] ? (APP.sesDur(), APP.konusEn(k.bilgi[i][2], true)) : APP.konus(metin, null, true);
      const tekrar = $(`<button class="buyukbtn ikincil">🔊 Tekrar</button>`); tekrar.onclick = sesli;
      const sonra = i < k.bilgi.length - 1 ? $(`<button class="buyukbtn">Sonraki ▶</button>`) : $(`<button class="buyukbtn" style="--renk:var(--yesil)">🎮 Şimdi Oyna!</button>`);
      sonra.onclick = () => { if (i < k.bilgi.length - 1) { i++; goster(); } else { yigin.pop(); git(() => oyna(id, k), "🎮 " + k.ad); } };
      [once, tekrar, sonra].forEach((x) => sat.appendChild(x));
      if (k.bilgi[i][2]) { APP.sesDur(); APP.konusEn(k.bilgi[i][2]); } else APP.konus(metin);
    }
    goster();
  }

  // ---------- Oyun ----------
  function oyna(id, k) {
    const D = DERS[id];
    const gorevler = OYUN.hazirla([k.uret], S.turGorev);
    gorevler.forEach((g) => g.konu = k.id);
    OYUN.tur({ gorevler, renk: D.renk, bitti: (s) => sonuc(s, { id, k, tekrar: () => { yigin.pop(); git(() => oyna(id, k), "🎮 " + k.ad); } }) });
  }
  function temaYarisi(id, t) {
    const D = DERS[id];
    const gorevler = OYUN.hazirla(t.konular.map((k) => () => { const g = k.uret(); if (g) g.konu = k.id; return g; }), S.temaGorev);
    OYUN.tur({ gorevler, renk: D.renk, bitti: (s) => sonuc(s, { id, tema: t, tekrar: () => { yigin.pop(); git(() => temaYarisi(id, t), "🏁 " + t.ad); } }) });
  }
  function hatalarim() {
    if (!K.hatalar.length) { maskot(`Hiç hatan yok ${K.ad}! Oyun oynadıkça yanlış yaptığın sorular buraya gelir, sonra tekrar çözersin.`, true); return; }
    maskot(`${K.hatalar.length} sorun bekliyor. Hadi bunları tekrar çözelim!`, true);
    const b = $(`<button class="buyukbtn" style="--renk:var(--kirmizi)">🔁 Tekrar Çöz (${Math.min(8, K.hatalar.length)} soru)</button>`);
    b.onclick = () => {
      yigin.pop(); git(() => {
        const gorevler = K.hatalar.slice(-8).reverse();
        OYUN.tur({ gorevler, renk: "#ef476f", bitti: (s) => {
          const bilinmeyen = new Set(s.yanlislar);
          const cozulen = gorevler.filter((g) => !bilinmeyen.has(g));
          K.hatalar = K.hatalar.filter((g) => !cozulen.includes(g));
          sonuc(s, { hata: true, tekrar: () => { yigin.pop(); git(hatalarim, "🔁 Hatalarım"); } });
        } });
      }, "🔁 Hatalarım");
    };
    ekran.appendChild(b);
  }

  function sonuc(s, b) {
    const yildiz = yildizHesapla(s.dogru, s.toplam);
    const g = gun(); const onceTamam = hedefTamam();
    g.soru += s.toplam; g.dogru += s.dogru;
    if (!b.hata) g.tur++;
    const eklenen = [];
    s.yanlislar.forEach((y) => { if (!b.hata) { K.hatalar.push(y); eklenen.push(y); } });
    if (K.hatalar.length > 40) K.hatalar = K.hatalar.slice(-40);
    // konu istatistikleri
    if (b.k) {
      const ks = K.konu[b.k.id] || (K.konu[b.k.id] = { en: 0, oyna: 0, d: 0, t: 0 });
      ks.oyna++; ks.d += s.dogru; ks.t += s.toplam; ks.en = Math.max(ks.en, yildiz);
      if (b.id === "ingilizce" && b.k.kelimeler) kelimeEkle(b.k.kelimeler);
    }
    const oncekiYildiz = K.yildiz;
    K.yildiz += yildiz;
    let bonus = false;
    if (!onceTamam && hedefTamam()) { K.yildiz += 3; bonus = true; }
    const yeniCikartma = CIKARTMALAR.filter((_, i) => (i + 1) * 5 > oncekiYildiz && (i + 1) * 5 <= K.yildiz);
    kaydet();
    if (yildiz >= 2) konfeti();
    APP.efekt("yildiz");
    ekran.innerHTML = "";
    const mesaj = yildiz === 3 ? `Muhteşem ${K.ad}! ${s.toplam} sorudan ${s.dogru} doğru!` : yildiz === 2 ? `Çok iyi ${K.ad}! ${s.dogru} doğru yaptın.` : `Güzel deneme! ${s.dogru} doğru. Tekrar oynarsan daha çok yıldız kazanırsın.`;
    maskot(mesaj, true);
    const k = $(`<div class="sonuc"><div class="buyuk-yildiz">${[0, 1, 2].map((i) => i < yildiz ? "⭐" : `<span class="yildiz-bos">⭐</span>`).join("")}</div>
      <div style="font-size:24px;font-weight:900">+${yildiz} yıldız ${bonus ? "<br>🎁 Günlük görevler tamam: +3 yıldız!" : ""}</div>
      ${yeniCikartma.map((c) => `<div class="gorev" style="margin-top:12px"><div style="font-size:64px">${c[0]}</div><b>Yeni çıkartma: ${esc(c[1])}!</b></div>`).join("")}
      ${eklenen.length ? `<p class="not">Yanlış yaptığın ${eklenen.length} soru "Hatalarım" bölümüne eklendi.</p>` : ""}</div>`);
    ekran.appendChild(k);
    const sat = $(`<div class="satir"></div>`);
    const t = $(`<button class="buyukbtn">🔁 Tekrar Oyna</button>`); t.onclick = b.tekrar;
    const a = $(`<button class="buyukbtn ikincil">🏠 Ana Sayfa</button>`); a.onclick = anaya;
    sat.appendChild(t); sat.appendChild(a); ekran.appendChild(sat);
    if (b.k) {
      const yeni = $(`<button class="buyukbtn ikincil">🗺️ Haritaya Dön</button>`); yeni.onclick = () => { while (yigin.length > 2) yigin.pop(); ciz(); };
      ekran.appendChild(yeni);
    }
  }

  // ---------- Kelime Tekrarı (aralıklı tekrar: oynanan İngilizce konuların kelimeleri unutulmasın) ----------
  const ARALIK = [0, 1, 3, 7, 14, 30];
  function kelimeEkle(liste) {
    const bugun = gunNo();
    for (const w of liste) if (w && w[0] && !K.kelime[w[0]]) K.kelime[w[0]] = { tr: w[1], e: w[2] || "", k: 0, g: bugun, d: 0, y: 0 };
  }
  const kelimeVakti = () => Object.entries(K.kelime || {}).filter(([, v]) => v.g <= gunNo()).sort((a, b) => a[1].k - b[1].k || a[1].g - b[1].g);
  function kelimeGorev(en, v, hepsi) {
    const diger = hepsi.filter(([x, w]) => x !== en && w.tr !== v.tr);
    const tip = Math.random();
    let g;
    if (v.e && tip < 0.4) g = O.secim("🔊 Dinle! Duyduğun kelimenin resmi hangisi?", v.e, diger.map(([, w]) => w.e).filter((e) => e && e !== v.e), `${en} = ${v.tr}`, { em: true, ses: en, sesOnce: true, cevapSes: en });
    else if (tip < 0.7) g = O.secim(`🔊 Dinle! "${en}" ne demek?`, v.tr, diger.map(([, w]) => w.tr), `${en} = ${v.tr}`, { ses: en, sesOnce: true, cevapSes: en });
    else g = O.secim(`"${v.tr}" İngilizcede nasıl söylenir?`, en, diger.map(([x]) => x), `${v.tr} = ${en}`, { cevapSes: en });
    if (!g) g = O.secim(`"${en}" ne demek?`, v.tr, ["merhaba", "kırmızı", "kedi", "okul", "elma"].filter((x) => x !== v.tr), `${en} = ${v.tr}`, { cevapSes: en });
    if (g) g.kelime = en;
    return g;
  }
  function kelimeTekrar() {
    const hepsi = Object.entries(K.kelime || {});
    if (!hepsi.length) { maskot(`${K.ad}, İngilizce konularını oynadıkça kelimeler buraya gelir. Sonra unutmamak için tekrar ederiz!`, true); return; }
    const vakit = kelimeVakti();
    const ogrenilen = hepsi.filter(([, v]) => v.k >= 4).length;
    maskot(vakit.length ? `${vakit.length} kelimenin tekrar zamanı geldi. Dinle ve doğru olanı bul!` : `Bugünkü tekrarların bitti ${K.ad}! Yarın yine gel.`, true);
    const ust = $(`<div class="gorev"><h3>🧠 Kelime Kutum</h3><div class="not">Toplam ${hepsi.length} kelime · İyi öğrenilen ${ogrenilen} · Bugün tekrar ${vakit.length}</div></div>`);
    ekran.appendChild(ust);
    if (vakit.length) {
      const b = $(`<button class="buyukbtn" style="--renk:#9b5de5">🧠 Tekrara Başla (${Math.min(8, vakit.length)} kelime)</button>`);
      b.onclick = () => {
        yigin.pop(); git(() => {
          const sec = vakit.slice(0, 8);
          const gorevler = sec.map(([en, v]) => kelimeGorev(en, v, hepsi)).filter(Boolean);
          OYUN.tur({ gorevler, renk: "#9b5de5", bitti: (s) => {
            const yanlis = new Set(s.yanlislar.map((g) => g.kelime));
            const bugun = gunNo();
            for (const g of gorevler) {
              const v = K.kelime[g.kelime]; if (!v) continue;
              if (yanlis.has(g.kelime)) { v.k = 0; v.y++; v.g = bugun + 1; } else { v.k = Math.min(5, v.k + 1); v.d++; v.g = bugun + ARALIK[v.k]; }
            }
            sonuc(s, { hata: true, tekrar: () => { yigin.pop(); git(kelimeTekrar, "🧠 Kelime Tekrarı"); } });
          } });
        }, "🧠 Kelime Tekrarı");
      };
      ekran.appendChild(b);
    }
    const kutu = ["🌱", "🌿", "🌳", "⭐", "🏅", "👑"];
    const l = $(`<details class="gorev"><summary style="font-weight:900;font-size:20px;cursor:pointer">📋 Kelimelerim (${hepsi.length}) — aç, dokun, dinle</summary><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px;margin-top:8px"></div></details>`);
    const sat = l.querySelector("div");
    hepsi.sort((a, b) => a[0].localeCompare(b[0])).forEach(([en, v]) => {
      const x = $(`<button style="font-size:15px;padding:8px;border-radius:12px;border:2px solid #e5dcff;background:#fff;text-align:left;line-height:1.3">${v.e ? v.e + " " : ""}<b>${esc(en)}</b> ${kutu[v.k]}<br><small>${esc(v.tr)}</small></button>`);
      x.onclick = () => APP.konusEn(en, true);
      sat.appendChild(x);
    });
    ekran.appendChild(l);
  }

  // ---------- Günlük Hikâye ----------
  function gunNo() { const d = new Date(); return Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(2026, 0, 1)) / 864e5); }
  function bugununHikayesi() { return HIKAYELER[((gunNo() % HIKAYELER.length) + HIKAYELER.length) % HIKAYELER.length]; }
  function hikayeSayfa(idx) {
    // Sayfa sayfa okuma: her "metin" ögesi bir sayfadır (h.sayfalar varsa o kullanılır)
    const h = HIKAYELER[idx], bugun = h === bugununHikayesi();
    const sayfalar = h.sayfalar || h.metin;
    const kelime = sayfalar.join(" ").split(/\s+/).length;
    const bas = Date.now(); let dinledi = false, okuyorMu = false, n = 0;
    maskot(bugun ? "Günün hikâyesi hazır! Kendin oku ya da 🔊 ile ben okuyayım." : "Hadi bu hikâyeyi okuyalım!");
    const kap = $(`<div></div>`); ekran.appendChild(kap);
    const ciz = () => {
      kap.innerHTML = "";
      const kart = $(`<div class="hikaye">${n === 0 ? `<div class="resim">${h.resim || "📖"}</div><h2>${esc(h.baslik)}</h2>` : `<div class="not" style="text-align:center">${esc(h.baslik)}</div>`}<p>${esc(sayfalar[n])}</p>
        <div class="not" style="text-align:center">Sayfa ${n + 1} / ${sayfalar.length}</div>
        <div style="height:10px;border-radius:9px;background:#f3e3c4;overflow:hidden"><div style="height:100%;width:${((n + 1) / sayfalar.length) * 100}%;background:#f4a261"></div></div></div>`);
      const oku = $(`<button class="buyukbtn ikincil">${okuyorMu ? "⏹ Durdur" : "🔊 Bu sayfayı bana oku"}</button>`);
      oku.onclick = () => { if (okuyorMu) { okuyorMu = false; APP.sesDur(); ciz(); return; } sesliOku(); };
      const alt = $(`<div class="satir"></div>`);
      const geri = $(`<button class="buyukbtn ikincil" ${n === 0 ? "disabled" : ""}>⬅ Önceki</button>`);
      const ileri = $(`<button class="buyukbtn" style="--renk:#f4a261">${n === sayfalar.length - 1 ? "✅ Okudum, sorulara geç!" : "Sonraki sayfa ➜"}</button>`);
      geri.onclick = () => { if (n > 0) { okuyorMu = false; APP.sesDur(); n--; ciz(); } };
      ileri.onclick = () => {
        okuyorMu = false; APP.sesDur();
        if (n < sayfalar.length - 1) { n++; ciz(); window.scrollTo(0, 0); return; }
        let hiz = null;
        if (!dinledi) { const dk = (Date.now() - bas) / 60000; if (dk > 0.1) { hiz = Math.round(kelime / dk); if (hiz > 250 || hiz < 10) hiz = null; } if (hiz) { K.okuma.push({ t: tarih(), h: idx, hiz }); if (K.okuma.length > 60) K.okuma.shift(); kaydet(); } }
        yigin.pop(); git(() => hikayeSorulari(idx, hiz), "📚 " + h.baslik);
      };
      kap.appendChild(oku); kap.appendChild(kart); alt.appendChild(geri); alt.appendChild(ileri); kap.appendChild(alt);
      kap.appendChild($(`<div class="not">⏱ Kendin okursan okuma hızın ölçülür. ${kelime} kelime.</div>`));
    };
    function sesliOku() { // bu sayfayı okur, bitince sonraki sayfaya geçip devam eder
      okuyorMu = true; dinledi = true; ciz();
      const p = kap.querySelector(".hikaye p"); p.classList.add("okunan");
      const bu = n;
      APP.konus(sayfalar[n], () => { if (!okuyorMu || bu !== n) return; if (n < sayfalar.length - 1) { n++; sesliOku(); } else { okuyorMu = false; ciz(); } }, true);
    }
    ciz();
  }
  function hikayeSorulari(idx, hiz) {
    const h = HIKAYELER[idx];
    const gorevler = h.sorular.map((q) => O.secim(q[0], q[1], q[2], q[3] || "")).filter(Boolean);
    gorevler.forEach((g) => { g.balonYok = true; g.konu = "hikaye"; });
    const bas = () => OYUN.tur({ gorevler, renk: "#f4a261", bitti: (s) => {
      const g = gun(); const bugun = h === bugununHikayesi(); const onceTamam = hedefTamam();
      g.soru += s.toplam; g.dogru += s.dogru;
      if (bugun) g.hikaye = true;
      const yildiz = yildizHesapla(s.dogru, s.toplam);
      const onceki = K.hikaye[h.id] || { en: 0, okundu: 0 };
      K.hikaye[h.id] = { en: Math.max(onceki.en, yildiz), okundu: onceki.okundu + 1, t: tarih() };
      const kazanilan = yildiz + (bugun && !onceki.okundu ? 1 : 0);
      const oncekiYildiz = K.yildiz;
      K.yildiz += kazanilan;
      let bonus = false; if (!onceTamam && hedefTamam()) { K.yildiz += 3; bonus = true; }
      const yeniCikartma = CIKARTMALAR.filter((_, i) => (i + 1) * 5 > oncekiYildiz && (i + 1) * 5 <= K.yildiz);
      kaydet(); konfeti(); APP.efekt("yildiz");
      ekran.innerHTML = "";
      maskot(`Hikâyeyi bitirdin ${K.ad}! ${s.toplam} sorudan ${s.dogru} doğru.` + (hiz ? ` Dakikada ${hiz} kelime okudun!` : ""), true);
      ekran.appendChild($(`<div class="sonuc"><div class="buyuk-yildiz">${[0, 1, 2].map((i) => i < yildiz ? "⭐" : `<span class="yildiz-bos">⭐</span>`).join("")}</div>
        <div style="font-size:24px;font-weight:900">+${kazanilan} yıldız ${bonus ? "<br>🎁 Günlük görevler tamam: +3 yıldız!" : ""}</div>
        ${hiz ? `<div class="gorev" style="margin-top:12px"><b>⏱ Okuma hızın: dakikada ${hiz} kelime</b></div>` : ""}
        ${yeniCikartma.map((c) => `<div class="gorev"><div style="font-size:64px">${c[0]}</div><b>Yeni çıkartma: ${esc(c[1])}!</b></div>`).join("")}
        ${h.ders ? `<div class="gorev" style="margin-top:12px;background:#fff1e3"><b>💡 Hikâyeden öğrendiğimiz:</b><br>${esc(h.ders)}</div>` : ""}</div>`));
      const a = $(`<button class="buyukbtn">🏠 Ana Sayfa</button>`); a.onclick = anaya; ekran.appendChild(a);
      const kt = $(`<button class="buyukbtn ikincil">📚 Kitaplığa Git</button>`); kt.onclick = () => { yigin.length = 1; git(kitaplik, "📚 Hikâye Kitaplığı"); }; ekran.appendChild(kt);
    } });
    bas();
  }
  function kitaplik() {
    maskot("Hikâye kitaplığın! Her gün yeni bir hikâye gelir. İstediğini tekrar okuyabilirsin.");
    const bugunH = bugununHikayesi();
    const k = $(`<div class="kitaplik"></div>`);
    const sirali = [bugunH, ...HIKAYELER.filter((h) => h !== bugunH)];
    sirali.forEach((h) => {
      const s = K.hikaye[h.id];
      const b = $(`<button class="kitap ${h === bugunH ? "bugun" : ""}"><div class="r">${h.resim.split(" ")[0]}</div><b>${esc(h.baslik)}</b><small>${h === bugunH ? "🌟 Günün hikâyesi" : s ? "Okundu ✅" : "Yeni"} ${s ? yildizYaz(s.en) : ""}</small></button>`);
      b.onclick = () => git(() => hikayeSayfa(HIKAYELER.indexOf(h)), "📚 " + h.baslik);
      k.appendChild(b);
    });
    ekran.appendChild(k);
  }

  // ---------- MEB ders kitapları ----------
  function mebKitaplari(filtre) {
    maskot(filtre ? "Okuldaki ders kitabının aynısı burada! Kitaba dokun, açılsın." : "Okulda okuduğun MEB ders kitaplarının hepsi burada. Kitaba dokununca açılır.");
    const gruplar = filtre ? [filtre] : SIRA.concat(["diger"]);
    gruplar.forEach((d) => {
      const liste = KITAPLAR.filter((k) => k.ders === d); if (!liste.length) return;
      const D = DERS[d] || { ad: "Diğer Dersler", ikon: "🎵", renk: "#7a6f8f" };
      if (!filtre) ekran.appendChild($(`<h2 style="margin-top:18px">${D.ikon} ${esc(D.ad)}</h2>`));
      const k = $(`<div class="kitaplik"></div>`);
      liste.forEach((kt) => {
        const ik = kt.tur === "Ders kitabı" ? "📕" : kt.tur === "İngilizce hikâye" ? "📗" : kt.tur === "Çalışma kitabı" ? "📒" : "📘";
        k.appendChild($(`<a class="kitap meb" style="--renk:${D.renk}" href="${kt.url}" target="_blank" rel="noopener"><span class="r">${ik}</span><span><b>${esc(kt.ad)}</b><small class="not">${esc(kt.tur)} · PDF</small></span></a>`));
      });
      ekran.appendChild(k);
    });
    ekran.appendChild($(`<p class="not" style="margin-top:16px">Kitaplar MEB'in resmî sitesinden (tymm.meb.gov.tr / EBA) açılır, internet gerekir. Kitap PDF olarak yeni sekmede açılır; tabletteki geri tuşuyla uygulamaya dönebilirsin.</p>`));
  }

  // ---------- Çıkartma albümü ----------
  const CIKARTMALAR = [["🐶", "Köpek"], ["🐱", "Kedi"], ["🐰", "Tavşan"], ["🦊", "Tilki"], ["🐼", "Panda"], ["🐨", "Koala"], ["🦁", "Aslan"], ["🐯", "Kaplan"], ["🐸", "Kurbağa"], ["🐵", "Maymun"],
    ["🐧", "Penguen"], ["🦋", "Kelebek"], ["🐢", "Kaplumbağa"], ["🐬", "Yunus"], ["🦒", "Zürafa"], ["🐘", "Fil"], ["🦓", "Zebra"], ["🦉", "Baykuş"], ["🦄", "Tek Boynuzlu At"], ["🐲", "Ejderha"],
    ["🌻", "Ayçiçeği"], ["🌈", "Gökkuşağı"], ["⛄", "Kardan Adam"], ["🌋", "Yanardağ"], ["🌊", "Dalga"], ["🍉", "Karpuz"], ["🍓", "Çilek"], ["🍕", "Pizza"], ["🧁", "Kek"], ["🍦", "Dondurma"],
    ["⚽", "Futbol Topu"], ["🏀", "Basketbol"], ["🎨", "Resim Paleti"], ["🎸", "Gitar"], ["🎹", "Piyano"], ["🧩", "Yapboz"], ["🪁", "Uçurtma"], ["🚲", "Bisiklet"], ["🚂", "Tren"], ["🚁", "Helikopter"],
    ["🚀", "Roket"], ["🛸", "Uzay Gemisi"], ["🌍", "Dünya"], ["🌙", "Ay"], ["☀️", "Güneş"], ["🪐", "Satürn"], ["☄️", "Kuyruklu Yıldız"], ["👨‍🚀", "Astronot"], ["🔭", "Teleskop"], ["🔬", "Mikroskop"],
    ["🦖", "Dinozor"], ["🐙", "Ahtapot"], ["🦈", "Köpek Balığı"], ["🐳", "Balina"], ["🦜", "Papağan"], ["🦚", "Tavus Kuşu"], ["🏰", "Şato"], ["🎡", "Dönme Dolap"], ["🏆", "Kupa"], ["👑", "Taç"]];
  function album() {
    const acik = Math.min(CIKARTMALAR.length, Math.floor(K.yildiz / 5));
    maskot(acik < CIKARTMALAR.length ? `${acik} çıkartma topladın! Her 5 yıldızda yeni bir çıkartma açılır. Sıradaki için ${(acik + 1) * 5 - K.yildiz} yıldız daha!` : "Bütün çıkartmaları topladın! Sen bir şampiyonsun!");
    const a = $(`<div class="album"></div>`);
    CIKARTMALAR.forEach((c, i) => a.appendChild($(`<div class="cikartma ${i < acik ? "" : "kilit"}"><div class="e">${c[0]}</div><small>${i < acik ? esc(c[1]) : `⭐ ${(i + 1) * 5}`}</small></div>`)));
    ekran.appendChild(a);
  }

  // ---------- Veli köşesi ----------
  function veliKapi() {
    maskot("Bu bölüm büyükler için. Bir yetişkin butona 2 saniye basılı tutsun.");
    const b = $(`<button class="buyukbtn ikincil">🔒 Basılı tut</button>`);
    let zam = null;
    const bas = (e) => { e.preventDefault(); b.textContent = "⏳ Bekle…"; zam = setTimeout(() => { yigin.pop(); git(veli, "👨‍👩‍👧 Veli Köşesi"); }, 2000); };
    const birak = () => { clearTimeout(zam); b.textContent = "🔒 Basılı tut"; };
    b.addEventListener("pointerdown", bas); b.addEventListener("pointerup", birak); b.addEventListener("pointerleave", birak);
    ekran.appendChild(b);
  }
  function veli() {
    const gunler = Object.values(K.gunluk), topS = gunler.reduce((t, g) => t + g.soru, 0), topD = gunler.reduce((t, g) => t + g.dogru, 0);
    const okunan = Object.keys(K.hikaye).length;
    ekran.appendChild($(`<div class="panel"><h3>📊 Genel Durum — ${esc(K.ad)}</h3>
      ⭐ Toplam yıldız: <b>${K.yildiz}</b> · 🔥 Seri: <b>${seri()}</b> gün (en uzun ${enUzunSeri()}) <br>
      ✏️ Çözülen soru: <b>${topS}</b> · ✅ Doğru oranı: <b>${topS ? Math.round(100 * topD / topS) : 0}%</b><br>
      📚 Okunan farklı hikâye: <b>${okunan}</b> / ${HIKAYELER.length} · 🔁 Bekleyen hata: <b>${K.hatalar.length}</b></div>`));
    // ders başarıları
    let h = `<div class="panel"><h3>📚 Derslere göre başarı</h3>`;
    SIRA.forEach((id) => {
      const D = DERS[id]; let d = 0, t = 0, oyn = 0, hep = 0;
      D.temalar.forEach((te) => te.konular.forEach((k) => { const s = K.konu[k.id]; hep++; if (s) { d += s.d; t += s.t; oyn++; } }));
      const o = t ? Math.round(100 * d / t) : 0;
      h += `<div class="cubuk"><span>${D.ikon} ${esc(D.ad)}</span><div class="iz"><div style="width:${o}%;background:${D.renk}"></div></div><b>${t ? o + "%" : "–"}</b></div><div class="not" style="margin:-4px 0 8px 138px">${oyn}/${hep} konu oynandı</div>`;
    });
    ekran.appendChild($(h + "</div>"));
    // son 14 gün
    let g14 = `<div class="panel"><h3>📅 Son 14 gün (çözülen soru)</h3><div class="gunler">`;
    const arr = []; for (let i = 13; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); arr.push([d, K.gunluk[tarih(d)] || { soru: 0, hikaye: false }]); }
    const mx = Math.max(10, ...arr.map((x) => x[1].soru));
    arr.forEach(([d, g]) => g14 += `<div title="${g.soru} soru"><small>${g.soru || ""}</small><i style="height:${(g.soru / mx) * 80}px"></i>${g.hikaye ? "📚" : ""}<span>${d.getDate()}</span></div>`);
    ekran.appendChild($(g14 + `</div><div class="not">📚 = günün hikâyesi okundu</div></div>`));
    // zayıf konular
    const zayif = tumKonular().filter((x) => { const s = K.konu[x.k.id]; return s && s.t >= 6 && s.d / s.t < 0.6; });
    ekran.appendChild($(`<div class="panel"><h3>🎯 Tekrar edilmesi gereken konular</h3>${zayif.length ? zayif.map((x) => `• ${DERS[x.d].ikon} ${esc(x.k.ad)} — %${Math.round(100 * K.konu[x.k.id].d / K.konu[x.k.id].t)}`).join("<br>") : "Şimdilik yok 👍 (doğru oranı %60'ın altındaki konular burada görünür)"}</div>`));
    // okuma hızı
    const ok = K.okuma.slice(-10);
    ekran.appendChild($(`<div class="panel"><h3>⏱ Okuma hızı (dakikada kelime)</h3>${ok.length ? ok.map((o) => `${o.t}: <b>${o.hiz}</b> — ${esc(HIKAYELER[o.h] ? HIKAYELER[o.h].baslik : "")}`).join("<br>") : "Henüz ölçüm yok. Çocuk hikâyeyi 🔊 kullanmadan kendisi okuyunca ölçülür."}<div class="not" style="margin-top:6px">${S.no}. sınıf sonu için hedeflenen okuma hızı genellikle dakikada ${S.okumaHedef} kelime civarındadır.</div></div>`));
    // ayarlar
    const ay = $(`<div class="panel"><h3>⚙️ Ayarlar</h3>
      <div class="satir"><input class="ad" value="${esc(K.ad)}"><button class="buyukbtn ikincil" style="flex:0 0 auto;margin:0;padding:10px 18px;font-size:18px">Adı kaydet</button></div>
      <button class="buyukbtn ikincil" style="font-size:19px">${K.ses ? "🔊 Sesli okuma: AÇIK" : "🔇 Sesli okuma: KAPALI"}</button>
      ${window.SES ? `<details class="ses-detay" style="margin:10px 0"><summary style="font-size:19px;cursor:pointer;padding:8px 0">🗣️ Ses ve konuşma hızı</summary>${SES.ayarHTML()}</details>` : ""}
      <div class="satir"><button class="buyukbtn ikincil" style="font-size:19px">💾 İlerlemeyi yedekle</button><button class="buyukbtn ikincil" style="font-size:19px">📂 Yedekten yükle</button></div>
      <input type="file" accept=".json,application/json" hidden>
      <button class="buyukbtn ikincil" style="font-size:19px;color:var(--kirmizi)">🗑 Tüm ilerlemeyi sıfırla</button>
      <div class="not">İlerleme bu cihazın tarayıcısında saklanır. Cihaz değiştirirken yedek dosyasını kullanın.</div></div>`);
    if (window.SES) { SES.ayarBagla(ay); SES.rehberGoster(ay); }
    const bt = ay.querySelectorAll(":scope > button, :scope > .satir > button");
    bt[0].onclick = () => { const v = ay.querySelector("input.ad").value.trim(); if (v) { K.ad = v; kaydet(); bt[0].textContent = "Kaydedildi ✅"; } };
    bt[1].onclick = () => { K.ses = !K.ses; kaydet(); bt[1].textContent = K.ses ? "🔊 Sesli okuma: AÇIK" : "🔇 Sesli okuma: KAPALI"; };
    bt[2].onclick = () => {
      const blob = new Blob([JSON.stringify(K)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `${S.anahtar}-yedek-${tarih()}.json`; a.click();
    };
    const dosya = ay.querySelector("input[type=file]");
    bt[3].onclick = () => dosya.click();
    dosya.onchange = () => { const f = dosya.files[0]; if (!f) return; f.text().then((t) => { try { const y = JSON.parse(t); if (typeof y.yildiz !== "number") throw 0; K = Object.assign(K, y); kaydet(); bt[3].textContent = "Yüklendi ✅"; } catch (e) { bt[3].textContent = "Dosya okunamadı ❌"; } }); };
    let onay = false;
    bt[4].onclick = () => { if (!onay) { onay = true; bt[4].textContent = "⚠️ Emin misiniz? Tekrar dokunun"; return; } localStorage.removeItem(ANAHTAR); location.reload(); };
    ekran.appendChild(ay);
  }

  // ---------- Başlat ----------
  window.APP_TEST = { K: () => K, tumKonular, gun, seri };
  git(anaSayfa);
})();
