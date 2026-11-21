// 📆 Haftalık Tekrar · 🔥 Soru Maratonu · 🧪 Simülasyonla Keşfet (5–12)
// - Her çözülen sorunun gününü konu bazında tutar (soruKaydet sarılır; mevcut kayıtlara dokunmaz).
// - Haftalık tekrar testi: bu hafta çalışılan konular + başarısı düşük konular + eski konular karışık.
// - Maraton: çalışkan öğrenci için bitmeyen 25'lik turlar; üreteci olan konularda her seferinde yeni sayılar.
// - Konu sayfasına, konuyla birebir ilgili PhET (Colorado Üniversitesi, ücretsiz, Türkçe) simülasyonu eklenir.
(function () {
  if (window.HAFTALIK) return;
  if (typeof kayit === "undefined" || typeof DERSLER === "undefined" || !window.ICERIK || typeof test !== "function" || typeof soruHazirla !== "function" || typeof git !== "function") return;
  window.HAFTALIK = true;
  const AN = "haftalik-" + ((window.SINIF && SINIF.anahtar) || document.title);
  const V = (() => { try { return JSON.parse(localStorage.getItem(AN)) || {}; } catch (e) { return {}; } })();
  V.g = V.g || {}; V.ht = V.ht || {};
  const kaydetV = () => { try { localStorage.setItem(AN, JSON.stringify(V)); } catch (e) {} };
  const gunS = (d = new Date()) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const gunOnce = (i) => gunS(new Date(Date.now() - i * 864e5));
  const haftaNo = () => { const d = new Date(); const p = new Date(d); p.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return gunS(p); }; // haftanın pazartesisi
  const e = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const karis = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  // eski kayıtları temizle (90 gün)
  Object.keys(V.g).forEach((g) => { if (g < gunOnce(90)) delete V.g[g]; });

  // soruKaydet'i sar: konu bazında gün kaydı
  const eskiKaydet = window.soruKaydet;
  if (typeof eskiKaydet === "function") {
    window.soruKaydet = function (konuId, ok) {
      const r = eskiKaydet.apply(this, arguments);
      if (konuId) { const g = (V.g[gunS()] = V.g[gunS()] || {}); const a = (g[konuId] = g[konuId] || [0, 0]); a[0]++; if (ok) a[1]++; kaydetV(); }
      return r;
    };
  }
  const dersler = () => DERSLER.filter((d) => ICERIK[d.key] && !ICERIK[d.key].takma);
  const konular = (dk) => ICERIK[dk].uniteler.flatMap((u) => u.konular).filter((k) => k.sorular && k.sorular.length);
  const sonGun = (gunSay) => { const r = {}; for (let i = 0; i < gunSay; i++) { const g = V.g[gunOnce(i)]; if (g) for (const [id, [s, d]] of Object.entries(g)) { const x = (r[id] = r[id] || [0, 0]); x[0] += s; x[1] += d; } } return r; };
  const basari = (id) => { const st = kayit.istatistik && kayit.istatistik[id]; return st && st.s ? st.d / st.s : null; };

  // Haftalık tekrar sorularını hazırla
  function haftalikSorular(dk, n) {
    const tum = konular(dk), hafta = sonGun(7), ids = new Set(tum.map((k) => k.id));
    const bu = tum.filter((k) => hafta[k.id]);
    const zayif = tum.filter((k) => !hafta[k.id] && kayit.istatistik[k.id] && kayit.istatistik[k.id].s >= 3 && basari(k.id) < 0.7);
    const eski = tum.filter((k) => !hafta[k.id] && !zayif.includes(k) && kayit.istatistik[k.id] && kayit.istatistik[k.id].s > 0);
    if (!bu.length && !zayif.length && !eski.length) return null;
    const plan = [[bu, Math.round(n * 0.5)], [zayif, Math.round(n * 0.3)], [eski, n]];
    const secilen = [], anahtar = new Set();
    const ekle = (k, kac) => { for (const s of soruHazirla(k, Math.max(kac, 2))) { if (secilen.length >= n || kac <= 0) break; const a = s.soru + "|" + s.secenekler[s.dogru]; if (anahtar.has(a)) continue; anahtar.add(a); secilen.push(s); kac--; } };
    for (const [havuz, hedef] of plan) {
      if (!havuz.length) continue; const sinir = Math.min(n, secilen.length + hedef); let i = 0;
      const sira = karis(havuz);
      while (secilen.length < sinir && i < sira.length * 4) { ekle(sira[i % sira.length], 2); i++; }
    }
    // eksik kaldıysa çalışılmış herhangi bir konudan tamamla
    const herhangi = [...bu, ...zayif, ...eski]; let j = 0;
    while (secilen.length < n && j < 40 && herhangi.length) { ekle(herhangi[j % herhangi.length], 1); j++; }
    return ids.size ? karis(secilen) : null;
  }
  // Maraton: çalışılmış konular ağırlıklı (zayıf ×3, bu hafta ×2), hiç çalışılmamışsa ünite sırasıyla tüm konular
  function maratonSorular(dk, n) {
    const tum = konular(dk), hafta = sonGun(7);
    let agirlik = tum.map((k) => { const b = basari(k.id); return [k, b == null ? 0 : (b < 0.7 ? 3 : 1) + (hafta[k.id] ? 2 : 0)]; }).filter(([, w]) => w > 0);
    if (!agirlik.length) agirlik = tum.slice(0, Math.max(3, Math.ceil(tum.length / 3))).map((k) => [k, 1]);
    const top = agirlik.reduce((a, [, w]) => a + w, 0), secilen = [], anahtar = new Set(); let deneme = 0;
    while (secilen.length < n && deneme++ < n * 6) {
      let r = Math.random() * top, k = agirlik[0][0]; for (const [kk, w] of agirlik) { r -= w; if (r <= 0) { k = kk; break; } }
      const s = soruHazirla(k, 3)[0]; const a = s.soru + "|" + s.secenekler[s.dogru]; if (anahtar.has(a)) continue; anahtar.add(a); secilen.push(s);
    }
    return secilen;
  }

  function ekranHaftalik() {
    const hafta = sonGun(7), hk = haftaNo();
    let ts = 0, td = 0; Object.values(hafta).forEach(([s, d]) => { ts += s; td += d; });
    const aktif = [...Array(7)].filter((_, i) => V.g[gunOnce(i)]).length;
    const zayiflar = dersler().flatMap((d) => konular(d.key).map((k) => ({ d, k, b: basari(k.id), s: (kayit.istatistik[k.id] || {}).s || 0 }))).filter((x) => x.s >= 3 && x.b < 0.7).sort((a, b) => a.b - b.b).slice(0, 5);
    ekran.innerHTML = `<style>
      .hf-ozet{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px}.hf-ozet div{background:var(--kart);border:1px solid var(--sinir);border-radius:14px;padding:10px;text-align:center}.hf-ozet b{display:block;font-size:22px}.hf-ozet small{color:var(--soluk)}
      .hf-ders{display:grid;grid-template-columns:auto 1fr;gap:4px 10px;align-items:center;background:var(--kart);border:1px solid var(--sinir);border-left:5px solid var(--renk);border-radius:14px;padding:10px 12px;margin:8px 0}
      .hf-ders .i{font-size:26px;grid-row:1/3}.hf-ders small{color:var(--soluk)}.hf-ders .dug{grid-column:1/-1;display:flex;gap:6px;flex-wrap:wrap}
      .hf-ders .dug button,.hf-zayif button{border:1px solid var(--sinir);background:var(--bg);color:inherit;border-radius:10px;padding:7px 10px;font-size:14.5px}.hf-ders .dug button.ana{background:#7c3aed;color:#fff;border-color:#7c3aed}
      .hf-zayif{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--sinir)}.hf-zayif small{color:var(--soluk)}</style>
      <div class="hf-ozet"><div><b>${ts}</b><small>soru (7 gün)</small></div><div><b>${ts ? "%" + Math.round((td / ts) * 100) : "–"}</b><small>doğru</small></div><div><b>${aktif}/7</b><small>çalışılan gün</small></div></div>
      <p class="not">${V.ht[hk] ? "✅ Bu haftanın tekrar testini yaptın. Daha çok çalışmak istersen 🔥 Maraton seni bekliyor." : "Haftada bir, çalıştığın konuları karışık sorularla tekrar et: bilgi kalıcı olur. (Bu hafta çalıştıkların + zorlandıkların + eski konular)"}</p>
      <h2>📚 Ders ders</h2><div id="hfDersler"></div>
      ${zayiflar.length ? `<h2>🎯 Güçlendirilecek konular</h2>${zayiflar.map((x, i) => `<div class="hf-zayif"><span><b>${e(x.k.ad)}</b><br><small>${e(x.d.ad)} · başarı %${Math.round(x.b * 100)} (${x.s} soru)</small></span><span><button data-zk="${i}">📖 Konu</button> <button data-zs="${i}">✏️ 15 soru</button></span></div>`).join("")}` : ""}`;
    const kutu = document.getElementById("hfDersler");
    dersler().forEach((d) => {
      const ks = konular(d.key), buHafta = ks.filter((k) => hafta[k.id]);
      let s = 0, dd = 0; buHafta.forEach((k) => { s += hafta[k.id][0]; dd += hafta[k.id][1]; });
      const calisilmis = ks.some((k) => kayit.istatistik[k.id] && kayit.istatistik[k.id].s);
      const div = document.createElement("div"); div.className = "hf-ders"; div.style.setProperty("--renk", d.renk || "#7c3aed");
      div.innerHTML = `<span class="i">${d.ikon}</span><b>${e(d.ad)}</b><small>${buHafta.length ? `Bu hafta ${buHafta.length} konu · ${s} soru · %${Math.round((dd / Math.max(1, s)) * 100)}` : calisilmis ? "Bu hafta çalışılmadı" : "Henüz soru çözülmedi"}</small>
        <div class="dug">${calisilmis ? `<button class="ana" data-h="1">📆 Haftalık tekrar (20)</button>` : ""}<button data-m="1">🔥 Maraton (25)</button></div>`;
      const h = div.querySelector("[data-h]");
      if (h) h.onclick = () => git(() => test(() => { V.ht[hk] = 1; kaydetV(); return haftalikSorular(d.key, 20) || maratonSorular(d.key, 20); }, "📆 Haftalık Tekrar · " + d.ad, false, null), "📆 " + d.ad);
      div.querySelector("[data-m]").onclick = () => git(() => test(() => maratonSorular(d.key, 25), "🔥 Maraton · " + d.ad, false, null), "🔥 Maraton · " + d.ad);
      kutu.appendChild(div);
    });
    ekran.querySelectorAll("[data-zk]").forEach((b) => (b.onclick = () => { const x = zayiflar[+b.dataset.zk]; git(() => konuSayfa(x.k), x.k.ad); }));
    ekran.querySelectorAll("[data-zs]").forEach((b) => (b.onclick = () => { const x = zayiflar[+b.dataset.zs]; git(() => test(() => soruHazirla(x.k, 15), x.k.ad, false, x.k.id), "Test: " + x.k.ad); }));
  }
  window.HAFTALIK_AC = () => git(ekranHaftalik, "📆 Haftalık Tekrar");
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.push((kutu) => {
    const hafta = sonGun(7); let ts = 0; Object.values(hafta).forEach(([s]) => (ts += s));
    const b = document.createElement("button"); b.className = "ozel-kart"; b.style.background = "linear-gradient(135deg,#7c3aed,#2563eb)";
    b.innerHTML = `<span class="ikon">📆</span><span><b>Haftalık Tekrar</b><small>${V.ht[haftaNo()] ? "✅ Bu haftanın tekrarı tamam · 🔥 Maraton" : `Bu hafta ${ts} soru · tekrar testi ve soru maratonu`}</small></span>`;
    b.onclick = window.HAFTALIK_AC; kutu.appendChild(b);
  });
  if (window.ANA_YENILE) window.ANA_YENILE();

  // ---------- 🧪 PhET simülasyonları (konu adına göre; yalnızca konuyla doğrudan ilgili olanlar) ----------
  // [konu adı deseni, ders anahtarı deseni, PhET simülasyon adı, Türkçe başlık]
  const SIM = [
    [/basit elektrik devre|elektrik devre|devre elemanları|seri ve paralel|elektrik akımı|direnç/i, /fen|fizik/, "circuit-construction-kit-dc", "Devre Yapım Kiti (DC)"],
    [/ohm/i, /fizik|fen/, "ohms-law", "Ohm Yasası"],
    [/atış|eğik atış|yatay atış/i, /fizik/, "projectile-motion", "Atış Hareketi"],
    [/sürtünme/i, /fen|fizik/, "friction", "Sürtünme"],
    [/kuvvet ve hareket|newton|net kuvvet|dengelenmiş|kuvvet(ler)?in etkisi|dinamik/i, /fen|fizik/, "forces-and-motion-basics", "Kuvvet ve Hareket: Temeller"],
    [/kütle çekim|güneş sistemi|gezegen|uydu/i, /fen|fizik/, "gravity-and-orbits", "Kütle Çekimi ve Yörüngeler"],
    [/kepler/i, /fizik/, "keplers-laws", "Kepler Yasaları"],
    [/mekanik enerji|enerjinin korunumu|potansiyel enerji|kinetik enerji|iş,? güç|iş ve enerji/i, /fen|fizik/, "energy-skate-park-basics", "Enerji Kaykay Parkı: Temeller"],
    [/enerji dönüşüm|ısı ve sıcaklık|iç enerji|ısı aktarım|ısıl denge/i, /fen|fizik/, "energy-forms-and-changes", "Enerji Biçimleri ve Değişimleri"],
    [/maddenin hâl|maddenin hal|hâl değişim|hal değişim|maddenin halleri|tanecikli yap/i, /fen|kimya|fizik/, "states-of-matter-basics", "Maddenin Halleri: Temeller"],
    [/gaz(lar)?(ın)? (yasa|özellik)|ideal gaz|gazlar/i, /kimya|fizik/, "gas-properties", "Gaz Özellikleri"],
    [/atomun yapısı|atom modelleri|atom ve|proton|atomun/i, /fen|kimya/, "build-an-atom", "Atom Oluştur"],
    [/izotop/i, /kimya|fen/, "isotopes-and-atomic-mass", "İzotoplar ve Atom Kütlesi"],
    [/denkleşt|kimyasal tepkime|kimyasal denklem|kütlenin korunumu/i, /kimya|fen/, "balancing-chemical-equations", "Kimyasal Denklem Denkleştirme"],
    [/asit[–-] ?baz|asitler,? bazlar|asit ve baz|\bph\b/i, /kimya|fen/, "ph-scale-basics", "pH Ölçeği: Temeller"],
    [/derişim|çözünürlük|çözelti/i, /kimya/, "concentration", "Derişim"],
    [/yoğunluk/i, /fen|fizik|kimya/, "density", "Yoğunluk"],
    [/basınç/i, /fen|fizik/, "under-pressure", "Basınç Altında"],
    [/dalga/i, /fizik|fen/, "wave-on-a-string", "İpte Dalga"],
    [/kırılma|ışığın kırılması/i, /fizik|fen/, "bending-light", "Işığın Kırılması"],
    [/mercek|aynalar|(^|\s)ayna|optik|yansıma/i, /fizik|fen/, "geometric-optics", "Geometrik Optik"],
    [/elektrik yük|coulomb|elektriklenme|elektrik alan/i, /fizik|fen/, "coulombs-law", "Coulomb Yasası"],
    [/indüksiyon|faraday|manyetizma|elektromıknatıs/i, /fizik|fen/, "faradays-law", "Faraday Yasası"],
    [/yaylar|yay sabiti|hooke|esneklik/i, /fizik|fen/, "hookes-law", "Hooke Yasası"],
    [/sarkaç|basit harmonik/i, /fizik/, "pendulum-lab", "Sarkaç Laboratuvarı"],
    [/vektör/i, /fizik|mat/, "vector-addition", "Vektör Toplama"],
    [/molekül(ler)?in geometri|vsepr|molekül şekl/i, /kimya/, "molecule-shapes", "Molekül Şekilleri"],
    [/doğal seçilim|evrim|adaptasyon/i, /biyoloji|fen/, "natural-selection", "Doğal Seçilim"],
    [/kesir/i, /mat/, "fractions-intro", "Kesirlere Giriş", 6],
    [/ikinci dereceden|parabol/i, /mat/, "graphing-quadratics", "İkinci Dereceden Grafikler"],
    [/doğrunun denklemi|eğim|doğrusal fonksiyon|doğrusal denklem/i, /mat/, "graphing-lines", "Doğru Grafikleri"],
    [/denklem|eşitlik/i, /mat/, "equality-explorer", "Eşitlik Gezgini", 9],
    [/\balan|çevre uzunluğu/i, /mat/, "area-builder", "Alan Oluşturucu", 7],
    [/trigonometri|birim çember/i, /mat/, "trig-tour", "Trigonometri Turu"],
    [/tam sayı/i, /mat/, "number-line-integers", "Sayı Doğrusu: Tam Sayılar", 8],
    [/oran|orantı/i, /mat/, "proportion-playground", "Orantı Oyun Alanı", 8],
    [/olasılık/i, /mat/, "plinko-probability", "Plinko Olasılık", 10]
  ];
  const simBul = (k) => { const b = typeof konuBul === "function" ? konuBul(k.id) : null, dk = b ? b.ders : ""; const no = parseInt((window.SINIF && SINIF.anahtar) || document.title, 10) || 6; return SIM.find(([r, d, , , ust]) => d.test(dk) && r.test(k.ad) && !(ust && no > ust)); };
  const simAc = (ad, baslik) => {
    const kat = document.createElement("div");
    kat.style.cssText = "position:fixed;inset:0;z-index:80;background:#0b1020;display:flex;flex-direction:column";
    kat.innerHTML = `<div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:#111827;color:#fff"><b style="flex:1;font-size:16px">🧪 ${e(baslik)}</b><a href="https://phet.colorado.edu/tr/simulations/${ad}" target="_blank" rel="noopener" style="color:#93c5fd;font-size:13px">PhET</a><button style="border:none;border-radius:10px;padding:8px 12px;font-size:15px">✕ Kapat</button></div>
      <iframe src="https://phet.colorado.edu/sims/html/${ad}/latest/${ad}_all.html?locale=tr" style="flex:1;border:0;width:100%" allowfullscreen title="${e(baslik)}"></iframe>`;
    kat.querySelector("button").onclick = () => kat.remove();
    document.body.appendChild(kat);
  };
  if (typeof window.konuSayfa === "function") {
    const eskiKonu = window.konuSayfa;
    window.konuSayfa = function (k) {
      const r = eskiKonu.apply(this, arguments);
      try {
        const s = simBul(k), yer = document.querySelector(".konu-v");
        if (s && yer && !yer.querySelector(".sim-btn")) {
          const b = document.createElement("button"); b.className = "anlatim-btn sim-btn"; b.style.marginTop = "10px";
          b.innerHTML = `<span class="anlatim-ikon">🧪</span><span><b>Simülasyonla keşfet</b><br><small>${e(s[3])} · deneyerek öğren (PhET)</small></span>`;
          b.onclick = () => simAc(s[2], s[3]); yer.appendChild(b);
        }
      } catch (x) {}
      return r;
    };
  }
  window.SIM_ESLESME = (k) => { const s = simBul(k); return s ? s[2] : null; };
})();
