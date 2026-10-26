// 🎬 Sesli Anlatım: tahtaya yazılıyormuş gibi beliren satırlar + Türkçe sesli okuma (tarayıcının kendi sesi)
// Özel senaryosu olan konular ANLATIM[konuId] kullanır; diğerleri konu anlatımı ve özet notundan otomatik üretilir.
// Satır biçimi: "metin" ya da { y: "ekranda", s: "okunacak" }. [[vurgu]] işaretli kısımlar fosforlu kalemle vurgulanır.
// Görseller: { tip: "izgara", satir, sutun } · { tip: "sayilar", liste: [...], vurgu: [...] } · { tip: "bekle", sn }
window.ANLATIM = window.ANLATIM || {};

window.ANLATIM.t1k1 = [
  { baslik: "Çarpanlar ve Katlar", satirlar: ["Merhaba! Bugün iki önemli kavram öğreneceğiz:", "[[Çarpan]] ve [[kat]]."] },
  {
    baslik: "Çarpan nedir?",
    satirlar: [
      "Bir sayıyı [[kalansız bölen]] doğal sayılara, o sayının [[çarpanları]] denir.",
      { y: "Örneğin 12'yi düşünelim. 12 tane noktayı dizelim.", s: "Örneğin on ikiyi düşünelim. On iki tane noktayı dizelim." }
    ],
    gorsel: { tip: "izgara", satir: 3, sutun: 4 },
    sonra: [{ y: "3 satır, 4 sütun oldu. Demek ki [[12 = 3 × 4]]", s: "Üç satır, dört sütun oldu. Demek ki on iki, üç çarpı dörde eşit." }, "Yani 3 ve 4, 12'nin çarpanlarıdır."]
  },
  {
    baslik: "12'nin bütün çarpanlarını bulalım",
    satirlar: [
      { y: "12 = 1 × 12", s: "On iki eşittir bir çarpı on iki." },
      { y: "12 = 2 × 6", s: "On iki eşittir iki çarpı altı." },
      { y: "12 = 3 × 4", s: "On iki eşittir üç çarpı dört." },
      { y: "Bütün çarpanları küçükten büyüğe yazalım:", s: "Bütün çarpanları küçükten büyüğe yazalım." }
    ],
    gorsel: { tip: "sayilar", liste: [1, 2, 3, 4, 6, 12] },
    sonra: [{ y: "12'nin [[6 tane]] çarpanı var.", s: "On ikinin altı tane çarpanı var." }]
  },
  {
    baslik: "Kat nedir?",
    satirlar: [
      "Bir sayıyı 1, 2, 3, 4 ... ile çarptığımızda bulduğumuz sayılara o sayının [[katları]] denir.",
      { y: "4'ün katlarını bulalım:", s: "Dördün katlarını bulalım." }
    ],
    gorsel: { tip: "sayilar", liste: [4, 8, 12, 16, 20, "..."] },
    sonra: ["Katlar hiç bitmez, [[sonsuza kadar]] devam eder!", "Çarpanlar ise sınırlıdır."]
  },
  {
    baslik: "Dikkat! Bunları unutma",
    satirlar: [
      { y: "[[1]], her sayının çarpanıdır.", s: "Bir, her sayının çarpanıdır." },
      "Her sayı, kendisinin hem [[çarpanı]] hem [[katıdır]].",
      { y: "[[0]], her sayının katıdır.", s: "Sıfır, her sayının katıdır." }
    ]
  },
  {
    baslik: "Hadi sen dene!",
    satirlar: [{ y: "18'in çarpanları nelerdir?", s: "On sekizin çarpanları nelerdir? Biraz düşün." }],
    gorsel: { tip: "bekle", sn: 4 },
    sonra: [{ y: "Cevap: 18 = 1 × 18 = 2 × 9 = 3 × 6", s: "Cevap: on sekiz eşittir bir çarpı on sekiz, iki çarpı dokuz, üç çarpı altı." }],
    gorsel2: { tip: "sayilar", liste: [1, 2, 3, 6, 9, 18] }
  }
];

(function () {
  // Ekrandaki matematik işaretlerini okunur hâle getirir
  function konusmaMetni(t) {
    return String(t).replace(/\[\[|\]\]/g, "")
      .replace(/(\d)\s*×\s*(\d)/g, "$1 çarpı $2").replace(/×/g, " çarpı ").replace(/÷/g, " bölü ")
      .replace(/(\S)\s*=\s*/g, "$1 eşittir ").replace(/%(\d+)/g, "yüzde $1").replace(/(\d)²/g, "$1 kare").replace(/(\d)³/g, "$1 küp")
      .replace(/°/g, " derece").replace(/→/g, ", ").replace(/·/g, ", ").replace(/\.\.\./g, " ve böyle devam eder").replace(/\s+/g, " ");
  }
  const goster = (t) => esc(String(t)).replace(/\[\[(.+?)\]\]/g, '<mark class="vurgu">$1</mark>');
  const satirMetin = (x) => (typeof x === "string" ? { y: x, s: konusmaMetni(x) } : { y: x.y, s: x.s || konusmaMetni(x.y) });

  // Özel senaryo yoksa konu anlatımı ve özetten slaytlar üret
  function otomatikSenaryo(k) {
    const sl = [{ baslik: k.ad, satirlar: ["Merhaba! Bu derste [[" + k.ad + "]] konusunu öğreneceğiz."] }];
    k.anlatim.forEach((p, i) => {
      const cumleler = p.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) || [p];
      sl.push({ baslik: i === 0 ? "Konuyu tanıyalım" : `${k.ad} (${i + 1})`, satirlar: cumleler.map((c) => c.trim()).filter(Boolean) });
    });
    if (k.ozet && k.ozet.length) sl.push({ baslik: "📌 Özetleyelim", satirlar: k.ozet });
    return sl;
  }

  function turkceSes() {
    const sesler = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    return sesler.find((v) => /^tr(-|_|$)/i.test(v.lang) && /google/i.test(v.name)) || sesler.find((v) => /^tr(-|_|$)/i.test(v.lang)) || null;
  }

  window.sesliAnlatim = function (k) {
    const slaytlar = [...(window.ANLATIM[k.id] || otomatikSenaryo(k)), { baslik: "Şimdi sıra sende! 💪", satirlar: ["Öğrendiklerini pekiştirmek için soru çözme zamanı."], son: true }];
    let si = 0, oynuyor = false, hiz = 1, sesAcik = true, zaman = null, oturum = 0;
    const sesVar = !!(window.speechSynthesis && window.SpeechSynthesisUtterance);

    ekran.classList.add("genis");
    ekran.innerHTML = `
      <div class="tahta-kap">
        <div class="tahta" id="tahta"><div class="tahta-baslik" id="tb"></div><div class="tahta-icerik" id="ti"></div><div class="tahta-gorsel" id="tg"></div></div>
        <div class="tahta-cubuk"><div id="tilerleme"></div></div>
        <div class="oynatici">
          <button class="ses-btn" id="onceki" aria-label="Önceki slayt">⏮</button>
          <button class="btn" id="oynat">▶️ Başlat</button>
          <button class="ses-btn" id="sonraki" aria-label="Sonraki slayt">⏭</button>
          <span class="not" id="sayac"></span>
          <span class="bosluk"></span>
          <button class="ses-btn" id="hiz">Hız: 1x</button>
          <button class="ses-btn" id="sesbtn">🔊 Ses açık</button>
        </div>
        <p class="not" id="sesuyari"></p>
      </div>`;
    if (!sesVar) $("sesuyari").textContent = "Bu cihazda sesli okuma desteklenmiyor; anlatım yazılı olarak ilerleyecek.";
    else setTimeout(() => { if (!turkceSes()) $("sesuyari").textContent = "Türkçe ses bulunamadı. Android'de Ayarlar > Erişilebilirlik > Metin okuma bölümünden Türkçe sesi indirebilirsin."; }, 800);

    function durdur() { oturum++; clearTimeout(zaman); try { speechSynthesis.cancel(); } catch (e) {} }
    function konus(metin, bitince) {
      const benim = oturum;
      const devam = () => { if (benim === oturum) bitince(); };
      if (!sesVar || !sesAcik) { zaman = setTimeout(devam, (900 + metin.length * 55) / hiz); return; }
      const u = new SpeechSynthesisUtterance(metin);
      u.lang = "tr-TR"; u.rate = 0.95 * hiz; const v = turkceSes(); if (v) u.voice = v;
      let bitti = false; const tek = () => { if (!bitti) { bitti = true; clearTimeout(yedek); devam(); } };
      u.onend = tek; u.onerror = tek;
      const yedek = setTimeout(tek, (4000 + metin.length * 110) / hiz); // bazı cihazlarda onend gelmeyebilir
      speechSynthesis.speak(u);
    }
    function yaz(el, html, bitince) { // tahtaya yazılıyormuş gibi kısım kısım göster
      el.innerHTML = html; el.classList.add("yaziliyor");
      bitince && bitince();
    }
    function gorselCiz(g, bitince) {
      const tg = $("tg"); const benim = oturum;
      if (!g) return bitince();
      if (g.tip === "bekle") {
        tg.innerHTML = `<div class="dusun">🤔 <span id="geri-say">${g.sn}</span></div>`;
        let n = g.sn; const say = () => { if (benim !== oturum) return; if (--n <= 0) return bitince(); $("geri-say").textContent = n; zaman = setTimeout(say, 1000 / hiz); };
        zaman = setTimeout(say, 1000 / hiz); return;
      }
      const ogeler = g.tip === "izgara" ? Array.from({ length: g.satir * g.sutun }, () => "") : g.liste;
      tg.innerHTML = g.tip === "izgara" ? `<div class="nokta-izgara" style="grid-template-columns:repeat(${g.sutun},1fr)"></div>` : `<div class="sayi-dizisi"></div>`;
      const kap = tg.firstChild; let i = 0;
      const adim = () => {
        if (benim !== oturum) return;
        if (i >= ogeler.length) return (zaman = setTimeout(bitince, 500 / hiz));
        const d = document.createElement("span"); d.className = g.tip === "izgara" ? "nokta" : "sayi-cip"; d.textContent = ogeler[i]; kap.appendChild(d);
        i++; zaman = setTimeout(adim, (g.tip === "izgara" ? 180 : 450) / hiz);
      };
      adim();
    }
    function slayt(n, otomatik) {
      durdur(); si = Math.max(0, Math.min(slaytlar.length - 1, n));
      const s = slaytlar[si];
      $("tb").textContent = s.baslik; $("ti").innerHTML = ""; $("tg").innerHTML = "";
      $("sayac").textContent = `${si + 1} / ${slaytlar.length}`;
      $("tilerleme").style.width = `${((si + 1) / slaytlar.length) * 100}%`;
      $("tahta").classList.toggle("son", !!s.son);
      const satirlar = [...s.satirlar.map((x) => ({ x, grup: 1 })), ...(s.sonra || []).map((x) => ({ x, grup: 2 }))];
      if (!otomatik) { // duraklatılmışken tüm slaytı göster
        satirlar.forEach(({ x }) => { const d = document.createElement("p"); d.className = "tahta-satir goster"; d.innerHTML = goster(satirMetin(x).y); $("ti").appendChild(d); });
        if (s.gorsel && s.gorsel.tip !== "bekle") statikGorsel(s.gorsel); if (s.gorsel2) statikGorsel(s.gorsel2);
        sonButon(s); return;
      }
      let i = 0;
      const ilerle = () => {
        if (i === s.satirlar.length && s.gorsel && !ilerle.g1) { ilerle.g1 = true; return gorselCiz(s.gorsel, ilerle); }
        if (i >= satirlar.length) {
          if (s.gorsel2 && !ilerle.g2) { ilerle.g2 = true; return gorselCiz(s.gorsel2, ilerle); }
          sonButon(s);
          if (si < slaytlar.length - 1) zaman = setTimeout(() => slayt(si + 1, true), 1200 / hiz); else bitir();
          return;
        }
        const m = satirMetin(satirlar[i].x);
        const d = document.createElement("p"); d.className = "tahta-satir"; $("ti").appendChild(d);
        yaz(d, goster(m.y)); i++;
        konus(m.s, ilerle);
      };
      ilerle();
    }
    function statikGorsel(g) {
      const tg = $("tg");
      const kap = document.createElement("div");
      if (g.tip === "izgara") { kap.className = "nokta-izgara"; kap.style.gridTemplateColumns = `repeat(${g.sutun},1fr)`; for (let i = 0; i < g.satir * g.sutun; i++) kap.innerHTML += '<span class="nokta"></span>'; }
      else { kap.className = "sayi-dizisi"; g.liste.forEach((x) => (kap.innerHTML += `<span class="sayi-cip">${esc(x)}</span>`)); }
      tg.appendChild(kap);
    }
    function sonButon(s) {
      if (!s.son || $("anlatim-test")) return;
      const b = document.createElement("button"); b.className = "btn"; b.id = "anlatim-test"; b.textContent = `✏️ Soru Çöz (${TEST_BOYU} soru)`;
      b.onclick = () => { durdur(); git(() => test(() => soruHazirla(k, TEST_BOYU), k.ad, false, k.id), "Test: " + k.ad); };
      $("tg").appendChild(b);
    }
    function bitir() { oynuyor = false; $("oynat").textContent = "🔁 Baştan İzle"; }
    function oynatDurdur() {
      if (oynuyor) { oynuyor = false; durdur(); $("oynat").textContent = "▶️ Devam"; slayt(si, false); }
      else { oynuyor = true; $("oynat").textContent = "⏸ Duraklat"; if (si === slaytlar.length - 1 && $("anlatim-test")) si = 0; slayt(si, true); }
    }
    $("oynat").onclick = oynatDurdur;
    $("onceki").onclick = () => slayt(si - 1, oynuyor);
    $("sonraki").onclick = () => slayt(si + 1, oynuyor);
    $("hiz").onclick = () => { hiz = hiz === 1 ? 1.25 : hiz === 1.25 ? 0.8 : 1; $("hiz").textContent = `Hız: ${hiz}x`; if (oynuyor) slayt(si, true); };
    $("sesbtn").onclick = () => { sesAcik = !sesAcik; $("sesbtn").textContent = sesAcik ? "🔊 Ses açık" : "🔇 Ses kapalı"; if (oynuyor) slayt(si, true); };
    $("geri").addEventListener("click", durdur, { once: true });
    slayt(0, false);
    if (window.speechSynthesis) speechSynthesis.getVoices(); // sesleri önceden yükle
  };
})();
