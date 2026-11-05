// 📝 Yazılıya Hazırlık: dönem/yazılı seçimi, açık uçlu yazılı provası (süreli, yazdırılabilir, öz değerlendirmeli),
// kapsamdaki konulardan test provası, toplu özet notlar, ülke geneli ortak sınav sayacı ve resmî kaynak bağlantıları.
// app.js'ten sonra yüklenir. Ayarlar: window.SINIF.ortak = [{ ders, donem, yazili, bas: "YYYY-AA-GG", bit: "YYYY-AA-GG" }]
(function () {
  if (typeof kayit === "undefined" || !window.ICERIK) return;
  const S = window.SINIF || {};
  kayit.yazili = kayit.yazili || [];   // [{ t, ders, sinav, puan }]

  // ---------- Ortak stiller (yazılı + LGS + havuz) ----------
  const st = document.createElement("style");
  st.textContent = `
.ozel-izgara{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin:0 0 22px}
.ozel-kart{display:flex;align-items:center;gap:14px;width:100%;text-align:left;color:#fff;padding:18px;border-radius:18px;font-size:19px;min-height:96px}
.ozel-kart .ikon{font-size:40px}.ozel-kart small{display:block;opacity:.9;font-size:15px;margin-top:2px}
.ozel-kart.yazili{background:linear-gradient(135deg,#2563eb,#4f46e5)}
.ozel-kart.lgs{background:linear-gradient(135deg,#dc2626,#ea580c)}
.ozel-kart.yks{background:linear-gradient(135deg,#0f766e,#7c3aed)}
.duyuru{background:color-mix(in srgb,#f59e0b 14%,var(--kart));border:1px solid color-mix(in srgb,#f59e0b 45%,var(--sinir));border-radius:16px;padding:14px 16px;margin:0 0 16px}
.duyuru b{display:block;margin-bottom:4px}
.duyuru .btn2{margin-top:10px;padding:10px 16px;font-size:17px}
.kalan{font-weight:700;color:#b45309}
.rozet-ortak.okul{background:#2563eb}
.sinav-liste{display:grid;gap:8px;margin:8px 0 4px}
.sinav-satir{display:flex;justify-content:space-between;align-items:center;gap:10px;width:100%;text-align:left;background:var(--kart);color:var(--yazi);border:1px solid var(--sinir);border-radius:12px;padding:10px 12px;font-size:16px}
.sinav-satir .kalan{white-space:nowrap}
.rozet-ortak{display:inline-block;background:#f59e0b;color:#fff;border-radius:999px;padding:2px 10px;font-size:13px;font-weight:700;margin-left:6px;vertical-align:middle}
.kapsam li{margin:4px 0}
.kagit{background:var(--kart);border:1px solid var(--sinir);border-radius:16px;padding:18px 20px;margin-bottom:14px}
.kagit .soru{margin:0 0 10px}
.kagit textarea{width:100%;min-height:120px;font:inherit;font-size:17px;padding:12px;border-radius:12px;border:1px solid var(--sinir);background:var(--bg);color:var(--yazi);resize:vertical}
.puan{float:right;color:var(--soluk);font-size:15px;font-weight:600}
.sayac{position:sticky;top:62px;z-index:4;display:flex;justify-content:space-between;align-items:center;gap:10px;background:var(--kart);border:1px solid var(--sinir);border-radius:14px;padding:10px 16px;margin-bottom:14px;font-size:18px}
.sayac b{font-variant-numeric:tabular-nums;font-size:22px}.sayac.az b{color:var(--kirmizi)}
.anahtar{background:color-mix(in srgb,var(--yesil) 10%,var(--kart));border:1px solid color-mix(in srgb,var(--yesil) 40%,var(--sinir));border-radius:12px;padding:12px 14px;margin-top:10px}
.senin{background:var(--bg);border-radius:12px;padding:12px 14px;margin-top:8px;white-space:pre-wrap}
.degerlendir{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.degerlendir .cip{font-size:16px}
.tablo{width:100%;border-collapse:collapse;background:var(--kart);border:1px solid var(--sinir);border-radius:14px;overflow:hidden;margin-bottom:18px;font-size:17px}
.tablo th,.tablo td{padding:10px 12px;border-bottom:1px solid var(--sinir);text-align:center}
.tablo th:first-child,.tablo td:first-child{text-align:left}
.tablo tr:last-child td{border-bottom:0;font-weight:700}
.nav-izgara{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0}
.nav-izgara button{width:42px;height:42px;border-radius:10px;background:var(--bg);color:var(--yazi);border:1px solid var(--sinir);font-size:15px}
.nav-izgara button.cevapli{background:color-mix(in srgb,var(--ana) 22%,var(--kart));border-color:var(--ana)}
.nav-izgara button.simdi{outline:3px solid var(--ana)}
.nav-izgara button.d{background:color-mix(in srgb,var(--yesil) 25%,var(--kart));border-color:var(--yesil)}
.nav-izgara button.y{background:color-mix(in srgb,var(--kirmizi) 25%,var(--kart));border-color:var(--kirmizi)}
.secenek.isaretli{border-color:var(--ana);background:color-mix(in srgb,var(--ana) 14%,var(--kart));font-weight:600}
.soru-gorsel{max-width:100%;border-radius:12px;border:1px solid var(--sinir);margin:0 0 14px;display:block}
.form label{display:block;font-weight:600;margin:12px 0 6px}
.form input[type=text],.form select,.form textarea{width:100%;font:inherit;font-size:17px;padding:10px 12px;border-radius:12px;border:1px solid var(--sinir);background:var(--kart);color:var(--yazi)}
.form textarea{min-height:90px}
.sik-satir{display:flex;align-items:center;gap:8px;margin-bottom:8px}.sik-satir input[type=text]{flex:1}
.sik-satir input[type=radio]{width:22px;height:22px}
.cubuk-grafik{display:flex;align-items:flex-end;gap:8px;height:140px;padding-top:10px}
.cubuk-grafik div{flex:1;background:var(--ana);border-radius:6px 6px 0 0;position:relative;min-height:2px}
.cubuk-grafik span{position:absolute;top:-20px;left:0;right:0;text-align:center;font-size:13px;color:var(--soluk)}
.kaynak a{display:block;padding:12px 0;border-bottom:1px solid var(--sinir);text-decoration:none}
@media print{header,.satir,.sayac,.degerlendir,.yazdirma{display:none!important}body{background:#fff;color:#000}.kagit{break-inside:avoid;border-color:#999}.kagit textarea{border:1px dashed #999;min-height:160px;background:#fff}}
`;
  document.head.appendChild(st);

  // ---------- Yardımcılar ----------
  const SINAVLAR = [
    { id: "1-1", ad: "1. Dönem 1. Yazılı", donem: 1, yazili: 1 },
    { id: "1-2", ad: "1. Dönem 2. Yazılı", donem: 1, yazili: 2 },
    { id: "2-1", ad: "2. Dönem 1. Yazılı", donem: 2, yazili: 1 },
    { id: "2-2", ad: "2. Dönem 2. Yazılı", donem: 2, yazili: 2 }
  ];
  const tarih = (s) => new Date(s + "T09:00:00");
  const gunFark = (s) => Math.round((new Date(s + "T00:00:00") - new Date(new Date().toDateString())) / 86400000); // takvim günü farkı
  const tarihYaz = (s) => tarih(s).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  // Bütün ortak sınavlar: SINIF.ortak (ülke geneli) + SINIF.okul (okul geneli ortak yazılı, MEB Ortak Yazılı Sınav Sistemi)
  const TUM = [...(S.ortak || []).map((o) => ({ ...o, tur: "ulke" })), ...(S.okul || []).map((o) => ({ ...o, tur: "okul" }))].filter((o) => ICERIK[o.ders]);
  const yaklasan = () => TUM.filter((o) => gunFark(o.bit || o.bas) >= 0).sort((a, b) => tarih(a.bas) - tarih(b.bas));
  const turAd = (o) => (o.tur === "okul" ? "OKUL GENELİ" : "ÜLKE GENELİ");
  const kalanYaz = (o) => { const g = gunFark(o.bas); return g > 1 ? g + " gün kaldı" : g === 1 ? "yarın!" : "bugün!"; };
  function varsayilanSinav() {
    // Önce takvimdeki ilk yaklaşan ortak sınav; yoksa aya göre tahmin
    const yak = yaklasan()[0];
    if (yak) return `${yak.donem}-${yak.yazili}`;
    const d = new Date(), a = d.getMonth() + 1, g = d.getDate();
    if (a >= 9 && (a < 11 || (a === 11 && g <= 15))) return "1-1";
    if (a >= 11 || a === 1) return "1-2";
    if (a <= 3 || (a === 4 && g <= 10)) return "2-1";
    return "2-2";
  }
  let secili = varsayilanSinav();
  const sinavBul = (id) => SINAVLAR.find((x) => x.id === id);

  // Ünitenin dönemi: ünitede `donem` alanı → SINIF.donem[ders][sıra] → yoksa ilk yarı 1. dönem, ikinci yarı 2. dönem
  const sayilan = (D) => D.uniteler.filter((u) => !/Kelime Havuzu|Ek Konu/i.test(u.ad));
  function donemOf(dersKey, u) {
    if (u.donem) return u.donem;
    const L = sayilan(ICERIK[dersKey]), i = L.indexOf(u), ayar = S.donem && S.donem[dersKey];
    if (ayar && ayar[i]) return ayar[i];
    return i < Math.ceil(L.length / 2) ? 1 : 2;
  }
  // Kapsam: SINIF.kapsam[ders]["dönem-yazılı"] = [konu kimlikleri] (resmî konu-soru dağılımı) varsa o;
  // yoksa 1. yazılı → dönemin ilk yarısı, 2. yazılı → dönemin tamamı
  function kapsam(dersKey, sinavId) {
    const sv = sinavBul(sinavId), D = ICERIK[dersKey];
    const ozel = S.kapsam && S.kapsam[dersKey] && S.kapsam[dersKey][sinavId];
    if (ozel === "*") return sayilan(D);
    if (ozel) return D.uniteler.map((u) => ({ ...u, konular: u.konular.filter((k) => ozel.includes(k.id)) })).filter((u) => u.konular.length);
    const donem = sayilan(D).filter((u) => donemOf(dersKey, u) === sv.donem);
    if (!donem.length) return [];
    if (sv.yazili === 2) return donem;
    return donem.slice(0, Math.ceil(donem.length / 2));
  }
  const konularOf = (uniteler) => uniteler.flatMap((u) => u.konular);
  const acikOf = (k) => (k.acik && k.acik.length ? k.acik : ((window.ACIK && window.ACIK[k.id]) || []).map((x) => (Array.isArray(x) ? { soru: x[0], cevap: x[1] } : x)));
  const ortakMi = (dersKey, sinavId) => TUM.find((o) => o.ders === dersKey && `${o.donem}-${o.yazili}` === sinavId);

  // Konulara dengeli dağıtarak n soru (soruHazirla üreteçleri de kullanır)
  function dagit(konular, n) {
    if (!konular.length) return [];
    const kar = karistir(konular), adet = new Map();
    for (let i = 0; i < n; i++) { const k = kar[i % kar.length]; adet.set(k, (adet.get(k) || 0) + 1); }
    const liste = [];
    for (const [k, c] of adet) liste.push(...soruHazirla(k, c));
    return karistir(liste).slice(0, n);
  }
  window.HAZIRLIK = { kapsam, konularOf, dagit, SINAVLAR, gunFark, tarihYaz, donemOf, sayilan };
  window.YAZILI_AC = () => git(yaziliAna, "📝 Yazılıya Hazırlık");

  // ---------- Ana sayfa kartı ----------
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.push((kutu) => {
    const yak = yaklasan()[0];
    const b = document.createElement("button");
    b.className = "ozel-kart yazili";
    b.innerHTML = `<span class="ikon">📝</span><span><b>Yazılıya Hazırlık</b><small>${yak ? `Sıradaki yazılı: ${esc(ICERIK[yak.ders].ad)} · ${tarih(yak.bas).toLocaleDateString("tr-TR", { day: "numeric", month: "long" })} · ${kalanYaz(yak)}` : "Açık uçlu yazılı provası, test ve özet notlar"}</small></span>`;
    b.onclick = () => git(yaziliAna, "📝 Yazılıya Hazırlık");
    kutu.appendChild(b);
  });

  // ---------- Yazılıya Hazırlık ana ekranı ----------
  function yaziliAna() {
    const gelecek = yaklasan().filter((o) => `${o.donem}-${o.yazili}` === secili); // yalnızca seçili yazılının sınavları
    const varUlke = gelecek.some((o) => o.tur === "ulke"), varOkul = gelecek.some((o) => o.tur === "okul");
    const duyuru = gelecek.length ? `<div class="duyuru"><b>📅 ${esc(sinavBul(secili).ad)} — Ortak Yazılılar</b>
      <div class="sinav-liste">${gelecek.map((o, i) => `<button class="sinav-satir" data-i="${i}"><span><b>${esc(ICERIK[o.ders].ad)}</b> <span class="rozet-ortak ${o.tur}">${turAd(o)}</span><br><span class="not">${tarihYaz(o.bas)}</span></span><span class="kalan">${kalanYaz(o)} ›</span></button>`).join("")}</div>
      <div class="not" style="margin-top:6px">${varUlke ? "<b>Ülke geneli:</b> bütün Türkiye'de aynı gün, açık uçlu sorularla yapılır. " : ""}${varOkul ? "<b>Okul geneli:</b> MEB'in Ortak Yazılı Sınav Sistemi'yle okulda yapılır, süre 40 dakikadır. " : ""}Bir derse dokun, provasına başla.</div></div>` : "";
    const son = kayit.yazili.slice(-5).reverse();
    ekran.innerHTML = `${duyuru}
      <h2>Hangi yazılıya hazırlanıyoruz?</h2>
      <div class="secim" id="sinavSec">${SINAVLAR.map((s) => `<button class="cip ${s.id === secili ? "secili" : ""}" data-id="${s.id}">${s.ad}</button>`).join("")}</div>
      <h2>Ders seç</h2>
      <div class="izgara" id="yDersler"></div>
      ${son.length ? `<h2>Son Provalarım</h2><div class="grafik-kart">${son.map((x) => `<div class="konu-satir"><span>${esc(ICERIK[x.ders] ? ICERIK[x.ders].ad : x.ders)} · ${esc(sinavBul(x.sinav).ad)}<br><span class="not">${new Date(x.t).toLocaleDateString("tr-TR")}</span></span><span class="yuzde ${x.puan < 50 ? "dusuk" : x.puan < 85 ? "orta" : "yuksek"}">${x.puan}</span></div>`).join("")}</div>` : ""}
      <h2>🔗 Resmî Kaynaklar</h2>
      <div class="grafik-kart kaynak">
        <a href="https://mebi.eba.gov.tr" target="_blank" rel="noopener">🤖 MEBİ — MEB'in yapay zekâ destekli bireysel öğrenme platformu (yazılı örnek soruları, denemeler)</a>
        <a href="https://odsgm.meb.gov.tr" target="_blank" rel="noopener">📄 ODSGM — Ortak sınav konu-soru dağılım tabloları ve örnek senaryolar</a>
        <a href="https://www.eba.gov.tr" target="_blank" rel="noopener">🎓 EBA — Konu anlatım videoları ve ders içerikleri</a>
      </div>`;
    ekran.querySelectorAll("#sinavSec .cip").forEach((b) => (b.onclick = () => { secili = b.dataset.id; git(yaziliAna, "📝 Yazılıya Hazırlık", false); }));
    ekran.querySelectorAll(".sinav-satir").forEach((b) => (b.onclick = () => { const o = gelecek[+b.dataset.i]; secili = `${o.donem}-${o.yazili}`; git(() => yaziliDers(o.ders), ICERIK[o.ders].ad + " · Yazılı"); }));
    const kutu = $("yDersler");
    DERSLER.filter((d) => ICERIK[d.key]).forEach((d) => {
      const k = kapsam(d.key, secili), o = ortakMi(d.key, secili);
      const b = document.createElement("button");
      b.className = "kart ders" + (k.length ? "" : " pasif");
      b.style.setProperty("--renk", d.renk);
      b.innerHTML = `<span class="ikon">${d.ikon}</span><b>${d.ad}${o ? `<span class="rozet-ortak ${o.tur}">${o.tur === "okul" ? "OKUL ORTAK" : "ORTAK SINAV"}</span>` : ""}</b><span class="rozet">${k.length ? konularOf(k).length + " konu kapsamda" : "Bu dönem için içerik yok"}</span>`;
      b.onclick = () => k.length ? git(() => yaziliDers(d.key), d.ad + " · Yazılı") : alert("Bu ders için seçilen yazılıya ait ünite henüz eklenmedi.");
      kutu.appendChild(b);
    });
  }

  // ---------- Ders + yazılı seçildi ----------
  function yaziliDers(dersKey) {
    const sv = sinavBul(secili), U = kapsam(dersKey, secili), K = konularOf(U), o = ortakMi(dersKey, secili);
    const resmi = Array.isArray(S.kapsam && S.kapsam[dersKey] && S.kapsam[dersKey][secili]);
    const acikSay = K.reduce((a, k) => a + acikOf(k).length, 0);
    ekran.innerHTML = `
      <h2>${esc(ICERIK[dersKey].ad)} — ${esc(sv.ad)}</h2>
      ${o ? `<div class="duyuru"><b>📢 Bu yazılı ${o.tur === "okul" ? "okul geneli" : "ülke geneli"} ortak sınav</b>${tarihYaz(o.bas)}${o.bit && o.bit !== o.bas ? " – " + tarihYaz(o.bit) : ""}${gunFark(o.bas) >= 0 ? " (" + kalanYaz(o) + ")" : ""} · ${o.tur === "okul" ? "MEB'in Ortak Yazılı Sınav Sistemi'yle okulunda yapılır, 40 dakika. Sorular MEB'in konu-soru dağılımına göre hazırlanır." : "Sorular açık uçludur; cevabını gerekçesiyle, işlem adımlarıyla yaz."}</div>` : ""}
      <div class="grafik-kart"><b>📚 ${resmi ? "Kapsamdaki konular" : "Çalışılacak konular"}</b><div class="not">${resmi ? "MEB konu-soru dağılım tablosuna göre." : "Bu yazılının resmî konu dağılımı henüz eklenmedi; dönemin ilgili ünitelerini gösteriyoruz. Kesin kapsamı öğretmenine sor."}</div><ul class="kapsam">${U.map((u) => `<li><b>${esc(u.ad)}</b>: ${u.konular.map((k) => esc(k.ad)).join(", ")}</li>`).join("")}</ul></div>
      <div class="izgara">
        <button class="kart oyun-mod" id="prova" style="border-left-color:#4f46e5"><span class="ikon">✍️</span><b>Yazılı Provası</b><span class="rozet">Açık uçlu, gerçek yazılı gibi · 40 dk · ${acikSay} hazır soru + konu soruları · yazdırılabilir</span></button>
        <button class="kart oyun-mod" id="testp" style="border-left-color:#22a06b"><span class="ikon">✅</span><b>Test Provası</b><span class="rozet">Kapsamın tamamından 20 çoktan seçmeli soru</span></button>
        <button class="kart oyun-mod" id="notlar" style="border-left-color:#f59e0b"><span class="ikon">📌</span><b>Yazılı Öncesi Özet</b><span class="rozet">Bütün konuların özet notları tek sayfada · yazdırılabilir</span></button>
      </div>
      <h2>Konulara git</h2><div class="liste" id="kl"></div>`;
    $("prova").onclick = () => git(() => yaziliProva(dersKey), "✍️ Yazılı Provası");
    $("testp").onclick = () => git(() => test(() => dagit(K, 20), "Test Provası", false, null), "✅ Test Provası");
    $("notlar").onclick = () => git(() => ozetSayfa(dersKey), "📌 Yazılı Öncesi Özet");
    K.forEach((k) => {
      const b = document.createElement("button");
      b.className = "kart";
      const c = kayit.cozulen[k.id];
      b.innerHTML = `<b>${esc(k.ad)}</b><span class="rozet">${c ? "Son test: " + c.dogru + "/" + c.toplam : "Çalışılmadı"}</span>`;
      b.onclick = () => git(() => konuSayfa(k), k.ad);
      $("kl").appendChild(b);
    });
  }

  function ozetSayfa(dersKey) {
    const U = kapsam(dersKey, secili);
    ekran.innerHTML = `<div class="satir yazdirma"><button class="btn2" id="yaz">🖨️ Yazdır</button></div>
      <h2>${esc(ICERIK[dersKey].ad)} — ${esc(sinavBul(secili).ad)} Özet Notları</h2>
      ${U.map((u) => `<h3>${esc(u.ad)}</h3>${u.konular.map((k) => `<div class="ozet-not" style="margin:0 0 12px"><h3>📌 ${esc(k.ad)}</h3><ul>${k.ozet.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}`).join("")}`;
    $("yaz").onclick = () => window.print();
  }

  // ---------- Açık uçlu yazılı provası ----------
  function yaziliProvaSorulari(dersKey, n) {
    const K = konularOf(kapsam(dersKey, secili));
    const havuzlar = karistir(K).map((k) => ({ k, acik: karistir(acikOf(k)), test: karistir(k.sorular || []) }));
    const sec = [];
    // Önce her konudan açık uçlu, bitince sırayla tekrar; açık uçlu yetmezse test sorusu şıksız sorulur
    for (let tur = 0; sec.length < n && tur < 6; tur++)
      for (const h of havuzlar) {
        if (sec.length >= n) break;
        const a = h.acik[tur];
        if (a) sec.push({ soru: a.soru, cevap: a.cevap, konuId: h.k.id });
      }
    for (let tur = 0; sec.length < n && tur < 6; tur++)
      for (const h of havuzlar) {
        if (sec.length >= n) break;
        const t = h.test.filter((x) => !/hangisi|aşağıdaki/i.test(x.soru.replace(/^Boşluğa hangisi gelmelidir\?/, "")))[tur];
        if (t) sec.push({ soru: t.soru.replace(/^Boşluğa hangisi gelmelidir\? /, "Boşluğu doldurunuz: ") + (/^Boşluğa/.test(t.soru) ? "" : " (Cevabını işlem/gerekçesiyle yaz.)"), cevap: t.secenekler[t.dogru] + (t.cozum ? " — " + t.cozum : ""), konuId: h.k.id });
      }
    // puanlar: toplam 100
    const p = Math.floor(100 / sec.length);
    sec.forEach((s, i) => (s.puan = i === sec.length - 1 ? 100 - p * (sec.length - 1) : p));
    return sec;
  }

  let sayacId = null;
  function sayacKur(kutu, dk, bitince) {
    clearInterval(sayacId);
    const son = Date.now() + dk * 60000;
    const ciz = () => {
      if (!document.body.contains(kutu)) return clearInterval(sayacId);
      const k = Math.max(0, Math.round((son - Date.now()) / 1000));
      kutu.querySelector("b").textContent = `${String(Math.floor(k / 60)).padStart(2, "0")}:${String(k % 60).padStart(2, "0")}`;
      kutu.classList.toggle("az", k < 300);
      if (k <= 0) { clearInterval(sayacId); bitince(); }
    };
    ciz(); sayacId = setInterval(ciz, 1000);
  }
  window.HAZIRLIK.sayacKur = sayacKur;

  function yaziliProva(dersKey) {
    const sorular = yaziliProvaSorulari(dersKey, 8);
    if (!sorular.length) { ekran.innerHTML = "<p>Bu kapsam için soru bulunamadı.</p>"; return; }
    const t0 = Date.now();
    ekran.innerHTML = `
      <div class="sayac" id="sayac"><span>⏱️ Kalan süre</span><b>40:00</b><button class="btn2 yazdirma" id="yaz" style="padding:8px 12px;font-size:16px">🖨️ Yazdır</button></div>
      <div class="grafik-kart"><b>${esc(ICERIK[dersKey].ad)} — ${esc(sinavBul(secili).ad)} Provası</b><br><span class="not">Ad Soyad: ........................ · Sınıf/No: ........ · Her soru puanıyla birlikte verilmiştir. Cevaplarını kutulara yaz (ya da yazdırıp kâğıda çöz), sonra cevap anahtarıyla kendini puanla.</span></div>
      ${sorular.map((s, i) => `<div class="kagit"><span class="puan">${s.puan} puan</span><div class="soru">${i + 1}) ${esc(s.soru)}</div><textarea data-i="${i}" placeholder="Cevabını buraya yaz..."></textarea></div>`).join("")}
      <div class="satir"><button class="btn" id="bitir">Sınavı Bitir ve Değerlendir</button></div>`;
    const bitir = () => {
      clearInterval(sayacId);
      ekran.querySelectorAll("textarea").forEach((t) => (sorular[+t.dataset.i].yanit = t.value.trim()));
      degerlendir(dersKey, sorular, Math.round((Date.now() - t0) / 1000));
    };
    $("bitir").onclick = () => { if (confirm("Sınavı bitirip cevap anahtarını görmek istiyor musun?")) bitir(); };
    $("yaz").onclick = () => window.print();
    sayacKur($("sayac"), 40, () => { alert("⏰ Süre doldu! Şimdi cevaplarını değerlendirelim."); bitir(); });
  }

  function degerlendir(dersKey, sorular, sure) {
    const not = sorular.map(() => null); // 1, 0.5, 0
    const ciz = () => {
      const top = sorular.reduce((a, s, i) => a + (not[i] == null ? 0 : s.puan * not[i]), 0);
      const kalan = not.filter((x) => x == null).length;
      ekran.innerHTML = `
        <div class="sayac"><span>${kalan ? `Değerlendirilmemiş: ${kalan} soru` : "Değerlendirme tamam"}</span><b>${Math.round(top)} / 100</b></div>
        <p class="not">Her sorunun cevap anahtarını okuyup kendi cevabını dürüstçe puanla. Ölçüt: anahtardaki temel fikri ve gerekçeyi doğru yazdıysan "Tam", eksikse "Yarım".</p>
        ${sorular.map((s, i) => `<div class="kagit"><span class="puan">${s.puan} puan</span><div class="soru">${i + 1}) ${esc(s.soru)}</div>
          <div class="senin"><b>Senin cevabın:</b> ${s.yanit ? esc(s.yanit) : "<i>(boş)</i>"}</div>
          <div class="anahtar"><b>✅ Cevap anahtarı:</b> ${esc(s.cevap)}</div>
          <div class="degerlendir">${[[1, "✅ Tam"], [0.5, "🌗 Yarım"], [0, "❌ Yanlış/Boş"]].map(([v, ad]) => `<button class="cip ${not[i] === v ? "secili" : ""}" data-i="${i}" data-v="${v}">${ad}</button>`).join("")}</div></div>`).join("")}
        <div class="satir"><button class="btn" id="kaydet" ${kalan ? "disabled style=opacity:.5" : ""}>Puanımı Kaydet</button><button class="btn2" id="yeni">🔄 Yeni Prova</button></div>`;
      ekran.querySelectorAll(".degerlendir .cip").forEach((b) => (b.onclick = () => { const y = window.scrollY; not[+b.dataset.i] = +b.dataset.v; ciz(); window.scrollTo(0, y); }));
      $("kaydet").onclick = () => {
        const puan = Math.round(top);
        kayit.yazili.push({ t: Date.now(), ders: dersKey, sinav: secili, puan });
        if (kayit.yazili.length > 100) kayit.yazili.shift();
        sorular.forEach((s, i) => { if (s.konuId) soruKaydet(s.konuId, not[i] >= 0.5, Math.min(sure / sorular.length, 120)); });
        kaydet();
        ekran.innerHTML = `<div class="ozet">${puan}</div><p style="text-align:center">${puan >= 85 ? "🌟 Yazılıya hazırsın!" : puan >= 50 ? "👍 İyi gidiyor. Yarım/yanlış olan konuların özet notlarına bir daha bak." : "💪 Konu anlatımlarını tekrar edip yeni bir prova yap."}</p>
          <div class="satir" style="justify-content:center"><button class="btn" id="tekrar">🔄 Yeni Prova</button><button class="btn2" id="geriY">Yazılıya Hazırlık</button></div>`;
        $("tekrar").onclick = () => git(() => yaziliProva(dersKey), "✍️ Yazılı Provası", false);
        $("geriY").onclick = () => { gecmis.length = 0; git(anaSayfa, S.baslik || document.title, false); git(yaziliAna, "📝 Yazılıya Hazırlık"); };
      };
      $("yeni").onclick = () => git(() => yaziliProva(dersKey), "✍️ Yazılı Provası", false);
    };
    ciz();
    window.scrollTo(0, 0);
  }
  // app.js ana sayfayı bu dosyadan önce çizdiyse kartlar görünsün diye yeniden çiz
  window.ANA_YENILE = () => { if (typeof ekran !== "undefined" && ekran._son && ekran._son.fn === anaSayfa) git(anaSayfa, ekran._son.baslik, false); };
  window.ANA_YENILE();
})();
