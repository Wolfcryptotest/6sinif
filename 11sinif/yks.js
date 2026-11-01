// 🎓 YKS Hazırlık (10-12. sınıf): TYT / AYT / YDT biçiminde deneme, ders bazlı mini deneme, net hesabı (4 yanlış 1 doğruyu götürür),
// deneme geçmişi ve 🗂️ Soru Havuzu (geçmiş yıl ÖSYM soruları / ek sorular — başlangıçta BOŞ). Bu dosya lgs.js'ten otomatik üretilir (yeni_sinif.py).
// Havuz: yks-havuz.js (window.YKS_HAVUZ, sitedeki herkes görür) + bu cihazda "Soru Ekle" ile eklenenler.
// Ayarlar: window.SINIF.yks = { tarih, tarihNot, aciklama, tam: [oturum sıraları], oturumlar: [{ ad, sure, ikon, renk, dersler: [[dersKey, soru], ...] }] }
(function () {
  const CIKMIS = [["2026 YKS (TYT · AYT · YDT)", "https://osym.gov.tr/2026-yuksekogretim-kurumlari-sinavi-2026yks-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi"], ["2025 YKS (TYT · AYT · YDT)", "https://osym.gov.tr/2025-yuksekogretim-kurumlari-sinavi-2025yks-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi"], ["2024 YKS (TYT · AYT · YDT)", "https://osym.gov.tr/2024-yuksekogretim-kurumlari-sinavi-2024yks-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi"], ["2023 YKS (TYT · AYT · YDT)", "https://osym.gov.tr/2023-yuksekogretim-kurumlari-sinavi-2023yks-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi"], ["2022 YKS (TYT · AYT · YDT)", "https://osym.gov.tr/2022yuksekogretim-kurumlari-sinavi-2022yks-oturumlari-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi"], ["2021 YKS (TYT · AYT · YDT)", "https://osym.gov.tr/2021yuksekogretim-kurumlari-sinavi-2021yks-oturumlari-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi"], ["2020 YKS (TYT · AYT · YDT)", "https://osym.gov.tr/2020yuksekogretim-kurumlari-sinavi-2020yks-oturumlari-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi"], ["2019 YKS (TYT · AYT · YDT)", "https://www.osym.gov.tr/2019yks-tyt-ayt-ydt-temel-soru-kitapciklari-ve-cevap-anahtarlari"], ["2018 YKS (TYT · AYT)", "https://osym.gov.tr/2018yks-tyt-ve-ayt-oturumlari-temel-soru-kitapciklari-ve-cevap-anahtarlari-yayimlandi-1072018"], ["ÖSYM — Tüm sınavların soru kitapçıkları arşivi", "https://www.osym.gov.tr/TR,5771/temel-soru-kitapcigi-ve-yanitlari.html"]];
  if (typeof kayit === "undefined" || !window.ICERIK || !window.SINIF || !SINIF.yks || !window.HAZIRLIK) return;
  const L = SINIF.yks; L.cikmis = L.cikmis || CIKMIS; L.cikmisBaslik = L.cikmisBaslik || "ÖSYM Çıkmış Sorular"; L.cikmisNot = L.cikmisNot || "Geçmiş yılların soru kitapçıkları ve cevap anahtarları ÖSYM'nin resmî sitesinde. Bağlantıya dokun, açılan sayfadan TYT, AYT ya da YDT kitapçığını (PDF) indir. Çözdükten sonra cevap anahtarıyla kontrol et. İstersen bir soruyu 'Soru Ekle' ile kendi havuzuna da ekleyebilirsin.", H = window.HAZIRLIK;
  kayit.yksDenemeler = kayit.yksDenemeler || [];   // [{ t, ad, dersler: { key: { d, y, b } } }]
  kayit.yksHavuz = kayit.yksHavuz || [];           // cihazda eklenen sorular
  const dersAd = (k) => (ICERIK[k] ? ICERIK[k].ad : k);
  const dersBilgi = (k) => DERSLER.find((d) => d.key === k) || { ikon: "📘", ad: k };
  const net = (x) => x.d - x.y / 4;
  const netYaz = (n) => (Math.round(n * 100) / 100).toLocaleString("tr-TR");
  const tumHavuz = () => [...(window.YKS_HAVUZ || []).map((s) => ({ ...s, site: true })), ...kayit.yksHavuz];
  const havuzSoru = (s) => ({ soru: s.soru, gorsel: s.gorsel || "", secenekler: s.secenekler.slice(), dogru: s.dogru, cozum: (s.kaynak ? "[" + s.kaynak + "] " : "") + (s.cozum || ""), ders: s.ders, sabit: true, havuzId: s.id });
  const LETTERS = "ABCD";

  // ---------- Ana sayfa kartı ----------
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.push((kutu) => {
    const g = L.tarih ? H.gunFark(L.tarih) : 0;
    const b = document.createElement("button");
    b.className = "ozel-kart yks";
    b.innerHTML = `<span class="ikon">🎓</span><span><b>YKS Hazırlık</b><small>${g > 0 ? `YKS'ye ${g} gün kaldı · ` : L.altYazi ? esc(L.altYazi) + " · " : ""}Deneme, net takibi, soru havuzu</small></span>`;
    b.onclick = () => git(yksAna, "🎓 YKS Hazırlık");
    kutu.appendChild(b);
  });

  // ---------- YKS ana ekranı ----------
  let kapsamTum = new Date().getMonth() + 1 >= 2 && new Date().getMonth() + 1 <= 7; // şubattan sonra tüm yıl
  function yksAna() {
    const g = L.tarih ? H.gunFark(L.tarih) : 0, hv = tumHavuz();
    const oturumYazi = L.oturumlar.map((o) => `${esc(o.ad)}: ${o.dersler.map(([k, n]) => `${esc(dersAd(k))} ${n}`).join(", ")} soru (${o.sure} dk)`).join(" · ");
    const son = kayit.yksDenemeler.slice(-10);
    const topNet = (dn) => Object.values(dn.dersler).reduce((a, x) => a + net(x), 0);
    const enCok = Math.max(1, ...son.map(topNet));
    const TAM = L.tam === false ? [] : (L.tam || L.oturumlar.map((_, i) => i)).map((i) => L.oturumlar[i]);
    const tamSoru = TAM.reduce((a, o) => a + o.dersler.reduce((b, x) => b + x[1], 0), 0), tamSure = TAM.reduce((a, o) => a + o.sure, 0);
    ekran.innerHTML = `
      <div class="duyuru"><b>🗓️ ${L.tarih ? "YKS: " + H.tarihYaz(L.tarih) : esc(L.baslik || "YKS")}${L.tarihNot ? " " + esc(L.tarihNot) : ""}</b>${L.aciklama ? esc(L.aciklama) + "<br>" : ""}${g > 0 ? `<span class="kalan">${g} gün kaldı</span> · ` : ""}${oturumYazi}. 4 yanlış 1 doğruyu götürür.</div>
      <h2>Deneme Kapsamı</h2>
      <div class="secim"><span>Konular</span><button class="cip ${!kapsamTum ? "secili" : ""}" id="k1">1. dönem konuları</button><button class="cip ${kapsamTum ? "secili" : ""}" id="k2">Tüm yıl</button></div>
      <h2>📋 YKS Denemeleri</h2>
      <div class="izgara">
        ${L.oturumlar.map((o, i) => `<button class="kart oyun-mod" data-o="${i}" style="border-left-color:${o.renk || (i ? "#4f7cff" : "#e5484d")}"><span class="ikon">${o.ikon || (i ? "🧮" : "📖")}</span><b>${esc(o.ad)}</b><span class="rozet">${o.dersler.map(([k, n]) => `${dersAd(k)} ${n}`).join(" · ")} · ${o.sure} dk</span></button>`).join("")}
        ${TAM.length > 1 ? "" : "<!--"}<button class="kart oyun-mod" id="tam" style="border-left-color:#dc2626"><span class="ikon">🏁</span><b>Tam YKS Provası</b><span class="rozet">${TAM.map((o) => esc(o.ad)).join(" + ")} art arda · ${tamSoru} soru · ${tamSure} dk</span></button>${TAM.length > 1 ? "" : "-->"}
      </div>
      <h2>⚡ Ders Bazlı Mini Deneme</h2>
      <div class="izgara" id="mini"></div>
      ${L.cikmis ? `<h2>📄 ${esc(L.cikmisBaslik || "Çıkmış Sorular")}</h2>
      <p class="not">${esc(L.cikmisNot || "")}</p>
      <div class="grafik-kart kaynak cikmis">${L.cikmis.map(([ad, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">📄 ${esc(ad)}</a>`).join("")}</div>` : ""}
      <h2>📚 Soru Havuzu</h2>
      <button class="kart oyun-mod" id="havuz" style="border-left-color:#7c4dff;margin-bottom:12px"><span class="ikon">🗂️</span><b>Geçmiş Yıl / Ek Soru Havuzu (${hv.length} soru)</b><span class="rozet">${hv.length ? "Havuzdan çöz, yeni soru ekle, dışa/içe aktar" : "Havuz şu an boş — geçmiş yıl TYT/AYT sorularını ya da kendi sorularını ekleyerek doldur"}</span></button>
      <h2>📈 Deneme Geçmişi</h2>
      ${son.length ? `<div class="grafik-kart"><div class="grafik-baslik">Son ${son.length} denemenin toplam neti</div><div class="cubuk-grafik">${son.map((d) => `<div style="height:${(Math.max(0, topNet(d)) / enCok) * 100}%" title="${esc(d.ad)}"><span>${netYaz(topNet(d))}</span></div>`).join("")}</div></div>
        <table class="tablo"><tr><th>Tarih / Deneme</th><th>Net</th></tr>${kayit.yksDenemeler.slice(-8).reverse().map((d) => `<tr><td>${new Date(d.t).toLocaleDateString("tr-TR")} · ${esc(d.ad)}<br><span class="not">${Object.entries(d.dersler).map(([k, x]) => `${dersAd(k)}: ${netYaz(net(x))}`).join(" · ")}</span></td><td>${netYaz(topNet(d))}</td></tr>`).join("")}<tr><td></td><td></td></tr></table>` : `<p class="not">İlk denemeni çözdüğünde netlerin burada grafikle görünür.</p>`}
      <h2>🔗 Resmî Kaynaklar</h2>
      <div class="grafik-kart kaynak">
        <a href="https://mebi.eba.gov.tr" target="_blank" rel="noopener">🤖 MEBİ — YKS denemeleri ve soru çözümleri</a>
        <a href="https://www.osym.gov.tr" target="_blank" rel="noopener">📄 ÖSYM — YKS kılavuzu, sınav takvimi, çıkmış soru kitapçıkları ve cevap anahtarları</a>
        <a href="https://odsgm.meb.gov.tr" target="_blank" rel="noopener">📝 ODSGM — Aylık örnek sorular</a>
      </div>`;
    $("k1").onclick = () => { kapsamTum = false; git(yksAna, "🎓 YKS Hazırlık", false); };
    $("k2").onclick = () => { kapsamTum = true; git(yksAna, "🎓 YKS Hazırlık", false); };
    ekran.querySelectorAll("[data-o]").forEach((b) => (b.onclick = () => { const o = L.oturumlar[+b.dataset.o]; basla([o], o.ad); }));
    if ($("tam")) $("tam").onclick = () => basla(TAM, "Tam YKS Provası");
    $("havuz").onclick = () => git(havuzAna, "🗂️ Soru Havuzu");
    const mini = $("mini"), miniVar = new Set();
    L.oturumlar.forEach((o) => o.dersler.forEach(([k, n]) => {
      if (!ICERIK[k] || miniVar.has(k)) return;
      miniVar.add(k);
      const d = dersBilgi(k), b = document.createElement("button");
      b.className = "kart ders"; b.style.setProperty("--renk", d.renk);
      const dk = Math.round((o.sure / o.dersler.reduce((a, x) => a + x[1], 0)) * 10);
      b.innerHTML = `<span class="ikon">${d.ikon}</span><b>${esc(d.ad)}</b><span class="rozet">10 soru · ${dk} dk</span>`;
      b.onclick = () => basla([{ ad: d.ad, sure: dk, dersler: [[k, 10]] }], d.ad + " Mini Deneme");
      mini.appendChild(b);
    }));
  }

  // ---------- Deneme hazırlama ----------
  function dersSorulari(k, n) {
    const D = ICERIK[k]; if (!D) return [];
    const U = H.sayilan(D).filter((u) => kapsamTum || H.donemOf(k, u) === 1);
    const havuz = karistir(tumHavuz().filter((s) => s.ders === k)).slice(0, Math.floor(n / 2)).map(havuzSoru);
    const icerik = H.dagit(H.konularOf(U.length ? U : H.sayilan(D)), n - havuz.length).map((s) => ({ ...s, ders: k }));
    return karistir([...havuz, ...icerik]);
  }
  function basla(oturumlar, ad) {
    const plan = oturumlar.map((o) => ({ ad: o.ad, sure: o.sure, sorular: o.dersler.flatMap(([k, n]) => dersSorulari(k, n)) }));
    if (!plan.every((p) => p.sorular.length)) return alert("Bu deneme için yeterli soru bulunamadı.");
    git(() => oturum(plan, 0, [], ad), "📋 " + ad);
  }

  // ---------- Sınav ekranı (bir oturum) ----------
  let sid = null;
  function oturum(plan, oi, onceki, ad) {
    const p = plan[oi], Q = p.sorular;
    Q.forEach((s) => { if (!s.sira) s.sira = s.sabit ? [0, 1, 2, 3] : karistir([0, 1, 2, 3]); s.cevap = s.cevap ?? null; });
    let i = 0;
    const bitir = () => { clearInterval(sid); const tum = onceki.concat(Q); if (oi + 1 < plan.length) { alert(`${p.ad} oturumu bitti. Sıradaki: ${plan[oi + 1].ad} oturumu.`); git(() => oturum(plan, oi + 1, tum, ad), "📋 " + ad, false); } else git(() => sonuc(tum, ad), "📊 Sonuç", false); };
    function ciz() {
      const s = Q[i];
      ekran.innerHTML = `
        <div class="sayac" id="sayac"><span>${esc(p.ad)} · Soru ${i + 1}/${Q.length}</span><b></b></div>
        <div class="not">${dersBilgi(s.ders).ikon} ${esc(dersAd(s.ders))}</div>
        ${s.gorsel ? `<img class="soru-gorsel" src="${esc(s.gorsel)}" alt="Soru görseli">` : ""}
        <div class="soru">${esc(s.soru)}</div>
        <div id="sec">${s.sira.map((asil, j) => `<button class="secenek ${s.cevap === asil ? "isaretli" : ""}" data-a="${asil}">${LETTERS[j]}) ${esc(s.secenekler[asil])}</button>`).join("")}</div>
        <div class="satir"><button class="btn2" id="onc" ${i ? "" : "disabled"}>← Önceki</button><button class="btn2" id="bos">Boş bırak</button><button class="btn" id="snr">${i + 1 < Q.length ? "Sonraki →" : "Oturumu Bitir"}</button></div>
        <div class="nav-izgara">${Q.map((x, j) => `<button class="${x.cevap != null ? "cevapli" : ""} ${j === i ? "simdi" : ""}" data-j="${j}">${j + 1}</button>`).join("")}</div>
        <div class="satir"><button class="btn2" id="bitir">🏁 Oturumu şimdi bitir</button></div>`;
      ekran.querySelectorAll("#sec .secenek").forEach((b) => (b.onclick = () => { s.cevap = +b.dataset.a; if (i + 1 < Q.length) { i++; } ciz(); }));
      ekran.querySelectorAll(".nav-izgara button").forEach((b) => (b.onclick = () => { i = +b.dataset.j; ciz(); }));
      $("onc").onclick = () => { i--; ciz(); };
      $("bos").onclick = () => { s.cevap = null; if (i + 1 < Q.length) i++; ciz(); };
      $("snr").onclick = () => { if (i + 1 < Q.length) { i++; ciz(); } else onayBitir(); };
      $("bitir").onclick = onayBitir;
      sayacGoster();
    }
    const onayBitir = () => { const bos = Q.filter((x) => x.cevap == null).length; if (confirm(bos ? `${bos} soru boş. Oturumu bitirmek istiyor musun?` : "Oturumu bitirmek istiyor musun?")) bitir(); };
    const sonZaman = Date.now() + p.sure * 60000;
    function sayacGoster() {
      clearInterval(sid);
      const tik = () => {
        const kutu = $("sayac"); if (!kutu) return clearInterval(sid);
        const k = Math.max(0, Math.round((sonZaman - Date.now()) / 1000));
        kutu.querySelector("b").textContent = `${String(Math.floor(k / 60)).padStart(2, "0")}:${String(k % 60).padStart(2, "0")}`;
        kutu.classList.toggle("az", k < 300);
        if (k <= 0) { clearInterval(sid); alert("⏰ Süre doldu!"); bitir(); }
      };
      tik(); sid = setInterval(tik, 1000);
    }
    ciz();
  }

  // ---------- Sonuç ve inceleme ----------
  function sonuc(Q, ad) {
    const dersler = {};
    Q.forEach((s) => {
      const x = dersler[s.ders] || (dersler[s.ders] = { d: 0, y: 0, b: 0 });
      if (s.cevap == null) x.b++; else if (s.cevap === s.dogru) x.d++; else x.y++;
      if (s.konuId) soruKaydet(s.konuId, s.cevap === s.dogru, 60);
      if (s.cevap != null && s.cevap !== s.dogru) {
        const ayni = (y) => y.soru === s.soru && y.secenekler[y.dogru] === s.secenekler[s.dogru];
        if (!kayit.yanlislar.some(ayni)) kayit.yanlislar.push({ konuId: s.konuId, soru: s.soru, secenekler: s.secenekler, dogru: s.dogru, cozum: s.cozum });
        if (kayit.yanlislar.length > 300) kayit.yanlislar.shift();
      }
    });
    kayit.yksDenemeler.push({ t: Date.now(), ad, dersler });
    if (kayit.yksDenemeler.length > 200) kayit.yksDenemeler.shift();
    kaydet();
    const top = Object.values(dersler).reduce((a, x) => ({ d: a.d + x.d, y: a.y + x.y, b: a.b + x.b }), { d: 0, y: 0, b: 0 });
    let filtre = "hepsi";
    function ciz() {
      const liste = Q.map((s, i) => ({ s, i })).filter(({ s }) => filtre === "hepsi" || (filtre === "yanlis" ? s.cevap != null && s.cevap !== s.dogru : s.cevap == null));
      ekran.innerHTML = `
        <div class="ozet">${netYaz(net(top))} net</div>
        <p style="text-align:center">${top.d} doğru · ${top.y} yanlış · ${top.b} boş</p>
        <table class="tablo"><tr><th>Ders</th><th>D</th><th>Y</th><th>B</th><th>Net</th></tr>
          ${Object.entries(dersler).map(([k, x]) => `<tr><td>${dersBilgi(k).ikon} ${esc(dersAd(k))}</td><td>${x.d}</td><td>${x.y}</td><td>${x.b}</td><td>${netYaz(net(x))}</td></tr>`).join("")}
          <tr><td>Toplam</td><td>${top.d}</td><td>${top.y}</td><td>${top.b}</td><td>${netYaz(net(top))}</td></tr></table>
        <p class="not">Yanlışların "🔁 Yanlışlarımı Tekrar Et" listesine eklendi.</p>
        <h2>Cevapları İncele</h2>
        <div class="secim">${[["hepsi", "Hepsi"], ["yanlis", "Yanlışlar"], ["bos", "Boşlar"]].map(([v, a]) => `<button class="cip ${filtre === v ? "secili" : ""}" data-f="${v}">${a}</button>`).join("")}</div>
        ${liste.map(({ s, i }) => {
          const durum = s.cevap == null ? "⚪ Boş" : s.cevap === s.dogru ? "✅ Doğru" : "❌ Yanlış";
          const harf = (a) => LETTERS[s.sira.indexOf(a)];
          return `<div class="kagit"><span class="puan">${durum}</span><div class="not">${i + 1}. soru · ${esc(dersAd(s.ders))}</div>
            ${s.gorsel ? `<img class="soru-gorsel" src="${esc(s.gorsel)}" alt="">` : ""}<div class="soru">${esc(s.soru)}</div>
            ${s.cevap != null && s.cevap !== s.dogru ? `<div class="senin">Senin cevabın: <b>${harf(s.cevap)}) ${esc(s.secenekler[s.cevap])}</b></div>` : ""}
            <div class="anahtar">Doğru cevap: <b>${harf(s.dogru)}) ${esc(s.secenekler[s.dogru])}</b>${s.cozum ? "<br>" + esc(s.cozum) : ""}</div></div>`;
        }).join("") || `<p class="not">Bu filtrede soru yok.</p>`}
        <div class="satir"><button class="btn" id="yksDon">🎓 YKS Hazırlık</button></div>`;
      ekran.querySelectorAll("[data-f]").forEach((b) => (b.onclick = () => { filtre = b.dataset.f; ciz(); }));
      $("yksDon").onclick = () => { gecmis.length = 0; git(anaSayfa, SINIF.baslik || document.title, false); git(yksAna, "🎓 YKS Hazırlık"); };
    }
    ciz();
  }

  // ---------- 🗂️ Soru Havuzu ----------
  function havuzAna() {
    const hv = tumHavuz();
    const dersler = DERSLER.filter((d) => ICERIK[d.key]);
    ekran.innerHTML = `
      <p>Bu havuz <b>başlangıçta boştur</b>. Geçmiş yıl TYT/AYT/YDT sorularını (ÖSYM'nin yayımladığı soru kitapçıklarından), okulda çözdüğün deneme sorularını ya da öğretmeninin verdiği soruları buraya ekleyebilirsin. Havuzdaki sorular YKS denemelerine de otomatik karışır.</p>
      <div class="karolar">${dersler.map((d) => `<div class="karo"><span>${d.ikon} ${esc(d.ad)}</span><b>${hv.filter((s) => s.ders === d.key).length}</b></div>`).join("")}</div>
      <div class="satir">
        <button class="btn" id="ekle">➕ Soru Ekle</button>
        <button class="btn2" id="coz" ${hv.length ? "" : "disabled"}>📝 Havuzdan Çöz (${Math.min(20, hv.length)} soru)</button>
      </div>
      <div class="secim"><span>Derse göre çöz</span>${dersler.map((d) => { const n = hv.filter((s) => s.ders === d.key).length; return n ? `<button class="cip" data-d="${d.key}">${d.ikon} ${esc(d.ad)} (${n})</button>` : ""; }).join("") || '<span class="not">Henüz soru yok.</span>'}</div>
      <h2>Yedekle / Paylaş</h2>
      <div class="satir">
        <button class="btn2" id="disa" ${kayit.yksHavuz.length ? "" : "disabled"}>📤 Dışa Aktar (.json)</button>
        <label class="btn2" style="border-radius:14px;cursor:pointer">📥 İçe Aktar<input type="file" id="ice" accept=".json,application/json" hidden></label>
      </div>
      <p class="not">Dışa aktardığın dosyayı başka bir tablete içe aktarabilirsin. Soruların sitedeki herkese görünmesi için dosyanın içindeki listeyi <b>yks-havuz.js</b> dosyasına (window.YKS_HAVUZ = [...]) yapıştırman yeterli.</p>
      <h2>Havuzdaki Sorular</h2><div id="liste"></div>`;
    $("ekle").onclick = () => git(soruEkle, "➕ Soru Ekle");
    $("coz").onclick = () => havuzCoz(hv, "Havuz Çalışması");
    ekran.querySelectorAll("[data-d]").forEach((b) => (b.onclick = () => havuzCoz(hv.filter((s) => s.ders === b.dataset.d), dersAd(b.dataset.d) + " Havuz")));
    $("disa").onclick = () => {
      const blob = new Blob([JSON.stringify(kayit.yksHavuz, null, 1)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `yks-soru-havuzu-${new Date().toISOString().slice(0, 10)}.json`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    };
    $("ice").onchange = async (e) => {
      const f = e.target.files[0]; if (!f) return;
      try {
        const veri = JSON.parse(await f.text());
        const gecerli = (Array.isArray(veri) ? veri : []).filter((s) => s && s.soru && Array.isArray(s.secenekler) && s.secenekler.length === 4 && s.dogru >= 0 && s.dogru <= 3 && ICERIK[s.ders]);
        const var_ = new Set(kayit.yksHavuz.map((s) => s.soru + "|" + s.secenekler.join("|")));
        let n = 0;
        gecerli.forEach((s) => { const a = s.soru + "|" + s.secenekler.join("|"); if (!var_.has(a)) { kayit.yksHavuz.push({ ...s, id: s.id || "h" + Date.now() + "-" + n }); var_.add(a); n++; } });
        kaydet(); alert(`${n} yeni soru eklendi.`); git(havuzAna, "🗂️ Soru Havuzu", false);
      } catch (err) { alert("Dosya okunamadı: geçerli bir soru havuzu (.json) dosyası seç."); }
    };
    const liste = $("liste");
    if (!hv.length) liste.innerHTML = `<p class="not">Havuz boş. "➕ Soru Ekle" ile ilk sorunu ekle.</p>`;
    hv.slice().reverse().forEach((s) => {
      const d = document.createElement("div"); d.className = "kagit";
      d.innerHTML = `<div class="not" style="margin-bottom:6px"><b>${dersBilgi(s.ders).ikon} ${esc(dersAd(s.ders))}</b>${s.kaynak ? " · " + esc(s.kaynak) : ""}</div>
        ${s.gorsel ? `<img class="soru-gorsel" src="${esc(s.gorsel)}" alt="" style="max-height:220px">` : ""}<div>${esc(s.soru)}</div>
        <div class="not" style="margin-top:6px">${s.secenekler.map((x, j) => `${LETTERS[j]}) ${esc(x)}${j === s.dogru ? " ✅" : ""}`).join(" · ")}</div>
        ${s.site ? `<div class="not">Site havuzundan (yks-havuz.js)</div>` : `<div class="satir" style="margin:10px 0 0"><button class="btn2" style="padding:8px 14px;font-size:16px" data-sil="${esc(s.id)}">🗑️ Sil</button></div>`}`;
      liste.appendChild(d);
    });
    liste.querySelectorAll("[data-sil]").forEach((b) => (b.onclick = () => { if (!confirm("Bu soru havuzdan silinsin mi?")) return; kayit.yksHavuz = kayit.yksHavuz.filter((s) => s.id !== b.dataset.sil); kaydet(); git(havuzAna, "🗂️ Soru Havuzu", false); }));
  }

  function havuzCoz(liste, ad) {
    if (!liste.length) return;
    const Q = karistir(liste).slice(0, 20).map(havuzSoru);
    const sure = Math.max(5, Math.round(Q.length * 1.75));
    git(() => oturum([{ ad, sure, sorular: Q }], 0, [], ad), "📝 " + ad);
  }

  // Görseli küçült (en fazla 900 px, JPEG) — cihaz hafızası dolmasın
  function gorselKucult(dosya) {
    return new Promise((ok, hata) => {
      const r = new FileReader();
      r.onload = () => { const img = new Image(); img.onload = () => {
        const o = Math.min(1, 900 / Math.max(img.width, img.height)), c = document.createElement("canvas");
        c.width = Math.round(img.width * o); c.height = Math.round(img.height * o);
        const x = c.getContext("2d"); x.fillStyle = "#fff"; x.fillRect(0, 0, c.width, c.height); x.drawImage(img, 0, 0, c.width, c.height);
        ok(c.toDataURL("image/jpeg", 0.72));
      }; img.onerror = hata; img.src = r.result; };
      r.onerror = hata; r.readAsDataURL(dosya);
    });
  }

  function soruEkle() {
    let gorsel = "";
    const dersler = DERSLER.filter((d) => ICERIK[d.key]);
    ekran.innerHTML = `<div class="form grafik-kart">
      <label>Ders</label><select id="fDers">${dersler.map((d) => `<option value="${d.key}">${d.ikon} ${esc(d.ad)}</option>`).join("")}</select>
      <label>Kaynak (isteğe bağlı)</label><input type="text" id="fKaynak" placeholder="Örn: TYT 2025 Türkçe, 5. soru · Okul denemesi">
      <label>Soru görseli (isteğe bağlı — kitapçıktaki sorunun fotoğrafı, grafik, tablo)</label>
      <input type="file" id="fGorsel" accept="image/*"><img id="fOnizle" class="soru-gorsel" hidden style="max-height:240px;margin-top:10px">
      <label>Soru metni</label><textarea id="fSoru" placeholder="Soru kökünü yaz (görsel eklediysen kısa bir açıklama yeterli)"></textarea>
      <label>Şıklar — doğru şıkkı işaretle</label>
      ${[0, 1, 2, 3].map((j) => `<div class="sik-satir"><input type="radio" name="fDogru" value="${j}" ${j ? "" : "checked"} aria-label="${LETTERS[j]} doğru"><b>${LETTERS[j]})</b><input type="text" id="fS${j}" placeholder="${LETTERS[j]} şıkkı"></div>`).join("")}
      <label>Çözüm / açıklama (isteğe bağlı)</label><textarea id="fCozum"></textarea>
      <div class="satir"><button class="btn" id="fKaydet">💾 Havuza Ekle</button><button class="btn2" id="fYeni">Kaydet ve yeni soru</button></div></div>`;
    $("fGorsel").onchange = async (e) => {
      const f = e.target.files[0]; if (!f) return;
      try { gorsel = await gorselKucult(f); $("fOnizle").src = gorsel; $("fOnizle").hidden = false; } catch (err) { alert("Görsel okunamadı."); }
    };
    const kaydetSoru = () => {
      const sec = [0, 1, 2, 3].map((j) => $("fS" + j).value.trim());
      const soru = $("fSoru").value.trim();
      if (!soru && !gorsel) { alert("Soru metni ya da görseli ekle."); return false; }
      if (sec.some((x) => !x)) { alert("Dört şıkkın hepsini doldur (görselde şıklar varsa sadece A, B, C, D yazabilirsin)."); return false; }
      if (new Set(sec).size < 4) { alert("Şıklar birbirinden farklı olmalı."); return false; }
      kayit.yksHavuz.push({ id: "h" + Date.now(), ders: $("fDers").value, kaynak: $("fKaynak").value.trim(), soru: soru || "Görseldeki soruyu cevaplayınız.", gorsel, secenekler: sec, dogru: +document.querySelector("[name=fDogru]:checked").value, cozum: $("fCozum").value.trim() });
      try { localStorage.setItem(SINIF.anahtar, JSON.stringify(kayit)); }
      catch (err) { kayit.yksHavuz.pop(); alert("Cihaz hafızası doldu, soru kaydedilemedi. Görselsiz eklemeyi dene ya da havuzu dışa aktarıp bazı soruları sil."); return false; }
      return true;
    };
    $("fKaydet").onclick = () => { if (kaydetSoru()) { alert("✅ Soru havuza eklendi."); gecmis.pop(); git(havuzAna, "🗂️ Soru Havuzu", false); } };
    $("fYeni").onclick = () => { if (kaydetSoru()) { const ders = $("fDers").value, kaynak = $("fKaynak").value; git(soruEkle, "➕ Soru Ekle", false); $("fDers").value = ders; $("fKaynak").value = kaynak; } };
  }
  if (window.ANA_YENILE) window.ANA_YENILE();
})();
