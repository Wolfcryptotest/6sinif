// 📩 Okul Mesajları — Eylül Bilge'ye özel sayfa (eylul-bilge/).
// Ortak 6. sınıf dosyaları ../ klasöründen okunur; ortak uygulama güncellenince bu sayfa da güncellenir.
// BiP okul grubundan gelen mesajlar buraya düşer (Paylaş menüsü, yapıştırma ya da resim/PDF ekleme).
// Uygulama hocanın adından dersi, mesajdan ödev/sınav türünü ve tarihi tahmin eder; öğrenci onaylayıp derse aktarır.
// Derse aktarılan ödevler "Ders Programım"daki Ödevlerim listesine eklenir; dersin sayfasında da görünür.
// Metinler localStorage'da (kayit.okul), resim ve PDF ekleri bu cihazın IndexedDB'sinde tutulur.
(function () {
  if (typeof kayit === "undefined" || typeof git !== "function") return;

  const VARSAYILAN_AD = "Eylül Bilge";
  const BASLIK = "Eylül Bilge · 6. Sınıf", ESKI = "6. Sınıf Çalışma Merkezi";
  if (window.SINIF) SINIF.baslik = BASLIK;
  const eskiGit = window.git;
  window.git = function (fn, baslik, k) { return eskiGit.call(this, fn, baslik === ESKI ? BASLIK : baslik, k); };
  try { if ($("baslik").textContent === ESKI) $("baslik").textContent = BASLIK; } catch (e) {}
  if (!kayit.ad) kayit.ad = VARSAYILAN_AD;

  const O = (kayit.okul = kayit.okul || {});
  O.hocalar = O.hocalar || {};   // { dersKey: "Ayşe Yılmaz, Ayşe Hanım" }
  O.gelen = O.gelen || [];       // [{ id, metin, kimden, alindi, tur, ders, tarih, durum, ek }]
  const P = (kayit.program = kayit.program || {});
  P.odevler = P.odevler || [];
  kaydet();

  // ---------- Yardımcılar ----------
  const BIP_WEB = "https://web.bip.com";
  const EK = [
    { key: "beden", ad: "Beden Eğitimi ve Spor", ikon: "⚽", renk: "#16a34a" }, { key: "muzik", ad: "Müzik", ikon: "🎵", renk: "#db2777" },
    { key: "gorsel", ad: "Görsel Sanatlar", ikon: "🎨", renk: "#ea580c" }, { key: "bilisim", ad: "Bilişim Teknolojileri", ikon: "💻", renk: "#0369a1" },
    { key: "rehberlik", ad: "Rehberlik", ikon: "🧭", renk: "#7c3aed" }
  ];
  const dersler = () => {
    let l;
    try { l = window.PROGRAM_DERSLER ? PROGRAM_DERSLER() : [...DERSLER, ...EK, ...(window.PROGRAM_SECMELI_TUM ? PROGRAM_SECMELI_TUM().map((x) => x.d) : []), ...(P.ozelDersler || [])]; }
    catch (e) { l = [...DERSLER, ...EK]; }
    const g = new Set();
    return l.filter((d) => d && d.key && !g.has(d.key) && g.add(d.key));
  };
  const dersBul = (k) => dersler().find((d) => d.key === k) || { key: k || "", ad: k ? k : "Ders seçilmedi", ikon: "📘", renk: "#64748b" };
  const gun = (t) => `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  const bugun = () => { const t = new Date(); t.setHours(0, 0, 0, 0); return t; };
  const ekleGun = (t, n) => { const x = new Date(t); x.setDate(x.getDate() + n); return x; };
  const tarihYaz = (s) => {
    if (!s) return "tarih yok";
    const t = new Date(s + "T00:00:00"), f = Math.round((t - bugun()) / 86400000);
    if (f === 0) return "bugün"; if (f === 1) return "yarın"; if (f === -1) return "dün";
    return t.toLocaleDateString("tr-TR", { day: "numeric", month: "long", weekday: "long" });
  };
  const kalan = (s) => Math.round((new Date(s + "T00:00:00") - bugun()) / 86400000);
  const norm = (s) => " " + String(s || "").toLocaleLowerCase("tr").replace(/[^\p{L}\p{N}]+/gu, " ").replace(/\s+/g, " ").trim() + " ";
  const yeniId = () => "m" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const TUR = { odev: "📝 Ödev", sinav: "📅 Sınav / Yazılı", duyuru: "📢 Duyuru" };

  // ---------- Tahmin: ders, tür, tarih ----------
  const ANAHTAR = {
    matematik: ["matematik", "mat"], turkce: ["türkçe", "turkce"], fen: ["fen bilimleri", "fen"],
    sosyal: ["sosyal bilgiler", "sosyal"], ingilizce: ["ingilizce", "english"], din: ["din kültürü", "din"],
    beden: ["beden eğitimi", "beden"], muzik: ["müzik"], gorsel: ["görsel sanatlar", "resim dersi"],
    bilisim: ["bilişim"], rehberlik: ["rehberlik"]
  };
  const UNVAN = new Set(["hanım", "hanim", "bey", "hoca", "hocam", "hocası", "öğretmen", "öğretmeni", "öğretmenim", "ogretmen"]);
  function dersTahmin(metin, kimden) {
    const m = norm(metin), k = norm(kimden), puan = {};
    const ekle = (d, p) => (puan[d] = (puan[d] || 0) + p);
    for (const [d, adlar] of Object.entries(O.hocalar)) {
      for (const ad of String(adlar).split(",").map((x) => x.trim()).filter(Boolean)) {
        const n = norm(ad);
        if (k.includes(n)) ekle(d, 10); else if (m.includes(n)) ekle(d, 6);
        n.trim().split(" ").filter((w) => w.length >= 3 && !UNVAN.has(w)).forEach((w) => {
          if (k.includes(" " + w + " ")) ekle(d, 3); else if (m.includes(" " + w + " ")) ekle(d, 1);
        });
      }
    }
    const var_ = new Set(dersler().map((d) => d.key));
    for (const [d, kel] of Object.entries(ANAHTAR)) if (var_.has(d)) kel.forEach((w) => { if (m.includes(" " + w + " ") || m.includes(" " + w)) ekle(d, w.length > 3 ? 2 : 1); });
    const s = Object.entries(puan).sort((a, b) => b[1] - a[1]);
    return s.length ? s[0][0] : "";
  }
  function turTahmin(metin) {
    const m = norm(metin);
    if (/ (sınav|sınavı|sınavlar|yazılı|yazılısı|yazılılar|quiz|deneme sınavı)/.test(m)) return "sinav";
    if (/ (ödev|getir|getirin|getirsin|yapın|yapınız|yapsın|çözün|çözünüz|çözsün|sayfa|sayfalar|test|okuyun|yazın|hazırlayın|proje|performans|etkinlik|tamamlayın)/.test(m)) return "odev";
    return "duyuru";
  }
  const AYLAR = ["ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık"];
  const GUNLER = [["cumartesi", 6], ["pazartesi", 1], ["çarşamba", 3], ["perşembe", 4], ["salı", 2], ["cuma", 5], ["pazar", 0]];
  function yilBul(gun_, ay, yil) {
    let y = yil ? (yil < 100 ? 2000 + yil : yil) : bugun().getFullYear();
    let t = new Date(y, ay, gun_);
    if (!yil && t < ekleGun(bugun(), -60)) t = new Date(y + 1, ay, gun_);
    return t.getMonth() === ay ? t : null;
  }
  function tarihTahmin(metin) {
    const ham = String(metin || ""), m = norm(metin);
    let r = ham.match(/(?:^|[^\d])(\d{1,2})[./-](\d{1,2})(?:[./-](\d{2,4}))?(?!\d)/);
    if (r && +r[2] >= 1 && +r[2] <= 12) { const t = yilBul(+r[1], +r[2] - 1, r[3] ? +r[3] : 0); if (t) return gun(t); }
    r = m.match(new RegExp(" (\\d{1,2}) (" + AYLAR.join("|") + ")"));
    if (r) { const t = yilBul(+r[1], AYLAR.indexOf(r[2]), 0); if (t) return gun(t); }
    if (/ yarın/.test(m)) return gun(ekleGun(bugun(), 1));
    if (/ bugün/.test(m)) return gun(bugun());
    for (const [ad, no] of GUNLER) {
      if (new RegExp(" " + ad).test(m)) {
        let f = (no - bugun().getDay() + 7) % 7 || 7;
        if (/ haftaya| gelecek hafta| önümüzdeki hafta/.test(m) && f < 7) f += 7;
        return gun(ekleGun(bugun(), f));
      }
    }
    return "";
  }
  const varsayilanTeslim = (ders) => {
    try { if (ders && P.tablo && window.PROGRAM_TEST) return PROGRAM_TEST.sonrakiDersGunu(ders, gun(bugun())); } catch (e) {}
    return gun(ekleGun(bugun(), 1));
  };

  // BiP Web'den birden çok mesaj birlikte kopyalanırsa "[10:32] Ayşe Hanım: ..." satırlarından ayır
  function bol(metin, kimden) {
    const satirlar = String(metin).replace(/\r/g, "").split("\n");
    const bas = /^\s*\[?[^\]\n]{0,25}?\d{1,2}[:.]\d{2}[^\]\n]{0,25}\]?\s*[-–]?\s*([^:\n]{2,40}):\s?(.*)$/;
    if (satirlar.filter((s) => bas.test(s)).length < 2) {
      const r = !kimden && String(metin).trim().match(/^([\p{L}.]+(?: [\p{L}.]+){0,3}):\s+([\s\S]+)$/u);
      return r ? [{ kimden: r[1], metin: r[2].trim() }] : [{ metin: String(metin).trim(), kimden }];
    }
    const l = []; let akt = null;
    satirlar.forEach((s) => {
      const r = s.match(bas);
      if (r) { akt = { kimden: r[1].trim(), metin: r[2] }; l.push(akt); }
      else if (akt) akt.metin += "\n" + s; else l.push((akt = { kimden, metin: s }));
    });
    return l.map((x) => ({ ...x, metin: x.metin.trim() })).filter((x) => x.metin);
  }

  function mesajEkle(metin, kimden, ek) {
    const parcalar = metin && metin.trim() ? bol(metin, kimden) : [{ metin: "", kimden }];
    const eklenen = parcalar.map((p) => {
      const tam = (p.metin || "") + " " + (ek ? ek.ad : "");
      const ders = dersTahmin(tam, p.kimden), tur = turTahmin(tam);
      const m = { id: yeniId(), metin: p.metin || "", kimden: (p.kimden || "").trim(), alindi: new Date().toISOString(), tur, ders, tarih: tarihTahmin(p.metin) || (tur === "odev" ? varsayilanTeslim(ders) : ""), durum: "yeni", ek: null };
      O.gelen.unshift(m);
      return m;
    });
    if (ek && eklenen[0]) eklenen[0].ek = ek;
    if (O.gelen.length > 400) O.gelen = O.gelen.slice(0, 400);
    kaydet();
    return eklenen;
  }

  // ---------- Ekler (IndexedDB) ----------
  const db = () => new Promise((ok, hata) => {
    try { const r = indexedDB.open("eylul-okul-ek", 1); r.onupgradeneeded = () => r.result.createObjectStore("ek"); r.onsuccess = () => ok(r.result); r.onerror = () => hata(r.error); } catch (e) { hata(e); }
  });
  const ekYaz = async (id, blob) => { const d = await db(); return new Promise((ok, h) => { const t = d.transaction("ek", "readwrite"); t.objectStore("ek").put(blob, id); t.oncomplete = ok; t.onerror = () => h(t.error); }); };
  const ekOku = async (id) => { const d = await db(); return new Promise((ok, h) => { const r = d.transaction("ek").objectStore("ek").get(id); r.onsuccess = () => ok(r.result); r.onerror = () => h(r.error); }); };
  const ekSil = async (id) => { try { const d = await db(); d.transaction("ek", "readwrite").objectStore("ek").delete(id); } catch (e) {} };
  async function kucult(dosya) { // büyük fotoğrafları 1600 px'e indir, yer kazan
    if (!/^image\//.test(dosya.type) || dosya.size < 400000) return dosya;
    try {
      const bmp = await createImageBitmap(dosya), o = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
      const c = document.createElement("canvas"); c.width = Math.round(bmp.width * o); c.height = Math.round(bmp.height * o);
      c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
      return await new Promise((ok) => c.toBlob((b) => ok(b || dosya), "image/jpeg", 0.8));
    } catch (e) { return dosya; }
  }

  // ---------- Stil ----------
  const st = document.createElement("style");
  st.textContent = `
.ozel-kart.okul{background:linear-gradient(135deg,#0ea5e9,#2563eb)}
.om-kart{background:var(--kart);border:1px solid var(--sinir);border-left:6px solid var(--renk,#94a3b8);border-radius:16px;padding:12px 14px;margin-bottom:12px}
.om-kart.yeni{box-shadow:0 0 0 2px color-mix(in srgb,#2563eb 30%,transparent)}
.om-ust{display:flex;justify-content:space-between;gap:8px;font-size:14px;color:var(--soluk);margin-bottom:6px;flex-wrap:wrap}
.om-metin{white-space:pre-wrap;word-break:break-word;margin:0 0 8px}
.om-izgara{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0}
.om-izgara label{font-size:13px;color:var(--soluk);display:flex;flex-direction:column;gap:3px}
.om-izgara select,.om-izgara input,.om-giris textarea,.om-giris select,.om-hoca input{font:inherit;font-size:16px;padding:9px 10px;border-radius:10px;border:1px solid var(--sinir);background:var(--bg);color:var(--yazi);width:100%}
.om-giris textarea{min-height:110px;resize:vertical}
.om-giris{background:var(--kart);border:1px solid var(--sinir);border-radius:16px;padding:12px 14px;margin-bottom:16px}
.om-dugmeler{display:flex;gap:8px;flex-wrap:wrap}
.om-dugmeler button,.om-dugmeler a{padding:9px 12px;font-size:15px;border-radius:10px}
.om-bip{display:flex;align-items:center;gap:12px;background:#00a1e4;color:#fff!important;text-decoration:none;border-radius:16px;padding:14px 16px;margin-bottom:14px;font-size:18px;font-weight:600}
.om-bip small{display:block;font-weight:400;opacity:.9;font-size:14px}
.om-resim{max-width:100%;max-height:320px;border-radius:12px;display:block;margin:6px 0;border:1px solid var(--sinir)}
.om-cip{display:inline-block;background:var(--bg);border:1px solid var(--sinir);border-radius:999px;padding:2px 10px;font-size:13px;margin:0 4px 4px 0}
.om-sinav{display:flex;justify-content:space-between;gap:10px;align-items:center;background:var(--kart);border:1px solid var(--sinir);border-radius:14px;padding:10px 12px;margin-bottom:8px}
.om-sinav b.yakin{color:#dc2626}
.om-hoca{display:grid;grid-template-columns:150px 1fr;gap:8px;align-items:center;margin-bottom:8px}
.om-pencere{position:fixed;inset:0;z-index:50;background:rgba(15,23,42,.55);display:flex;align-items:flex-end;justify-content:center}
.om-pencere-ic{background:var(--kart);color:var(--yazi);width:100%;max-width:640px;max-height:88vh;overflow:auto;border-radius:20px 20px 0 0;padding:16px 16px 22px;box-shadow:0 -8px 30px rgba(0,0,0,.25)}
@media (min-width:700px){.om-pencere{align-items:center}.om-pencere-ic{border-radius:20px}}
.om-pencere-dersler{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px}
.om-pencere-dersler .kart{min-height:78px;padding:10px 12px}.om-pencere-dersler .ikon{font-size:26px}.om-pencere-dersler b{font-size:15.5px}
.om-ders-btn{width:100%;margin:4px 0 6px;padding:12px 14px;font-size:17px;border-radius:12px}
.om-pdf{display:inline-flex;flex-direction:column;align-items:flex-start;text-decoration:none;padding:12px 16px;border-radius:12px;margin:4px 0}
.om-pdf small{font-weight:400;font-size:13px;opacity:.9}
.om-ders-kutu{background:color-mix(in srgb,#2563eb 7%,var(--kart));border:1px solid color-mix(in srgb,#2563eb 30%,var(--sinir));border-radius:16px;padding:12px 14px;margin:0 0 16px}
.om-ders-kutu h3{margin:0 0 8px;font-size:18px}
.om-ders-kutu .om-satir{border-top:1px dashed var(--sinir);padding:8px 0}
@media (max-width:560px){.om-izgara{grid-template-columns:1fr}.om-hoca{grid-template-columns:1fr}}`;
  document.head.appendChild(st);

  // ---------- Ana sayfa kartı ----------
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.unshift((kutu) => {
    const yeni = O.gelen.filter((m) => m.durum === "yeni").length;
    const b = document.createElement("button");
    b.className = "ozel-kart okul";
    b.innerHTML = `<span class="ikon">📩</span><span><b>Okul Mesajları</b><small>${yeni ? `${yeni} yeni mesaj derse ayrılmayı bekliyor` : "BiP okul grubundan gelenler burada"}</small></span>`;
    b.onclick = () => git(okulAna, "📩 Okul Mesajları");
    kutu.appendChild(b);
  });

  // ---------- Mesaj kartı ----------
  const dersSecenek = (v) => `<option value="">— Ders seç —</option>` + dersler().map((d) => `<option value="${esc(d.key)}" ${d.key === v ? "selected" : ""}>${d.ikon} ${esc(d.ad)}</option>`).join("");
  function kartHtml(m, duzenle) {
    const d = dersBul(m.ders), zaman = new Date(m.alindi).toLocaleString("tr-TR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
    return `<div class="om-kart ${m.durum === "yeni" ? "yeni" : ""}" style="--renk:${m.ders ? d.renk : "#94a3b8"}" data-id="${m.id}">
      <div class="om-ust"><span>${m.kimden ? "👤 " + esc(m.kimden) : "👤 Gönderen yazılmadı"}</span><span>🕒 ${esc(zaman)}</span></div>
      ${m.metin ? `<p class="om-metin">${esc(m.metin)}</p>` : ""}
      ${m.ek ? `<div class="om-ek" data-ek="${m.id}"><span class="not">📎 ${esc(m.ek.ad)} yükleniyor…</span></div>` : ""}
      ${duzenle ? `<button class="${m.ders ? "btn2" : "btn"} om-ders-btn" data-pencere="${m.id}">${m.ders ? `${d.ikon} ${esc(d.ad)} · değiştir` : "📚 Hangi ders? Seç"}</button>
        <div class="om-izgara">
          <label>Türü<select data-alan="tur">${Object.entries(TUR).map(([k, v]) => `<option value="${k}" ${k === m.tur ? "selected" : ""}>${v}</option>`).join("")}</select></label>
          <label>${m.tur === "sinav" ? "Sınav tarihi" : m.tur === "odev" ? "Teslim tarihi" : "Tarih (isteğe bağlı)"}<input type="date" data-alan="tarih" value="${esc(m.tarih || "")}"></label>
          <label>Gönderen<input type="text" data-alan="kimden" value="${esc(m.kimden || "")}" placeholder="örn: Ayşe Hanım"></label>
        </div>
        <div class="om-dugmeler">
          <button class="btn" data-aktar="${m.id}">✅ ${m.tur === "duyuru" ? "Derse kaydet" : "Derse aktar"}</button>
          <button class="btn2" data-arsiv="${m.id}">🗄️ Arşivle</button>
          <button class="btn2" data-sil="${m.id}">🗑️ Sil</button>
        </div>` : `<div><span class="om-cip">${d.ikon} ${esc(d.ad)}</span><span class="om-cip">${TUR[m.tur] || ""}</span>${m.tarih ? `<span class="om-cip">📆 ${esc(tarihYaz(m.tarih))}</span>` : ""}<span class="om-cip">${m.durum === "arsiv" ? "🗄️ Arşivde" : "✅ Aktarıldı"}</span></div>
        <div class="om-dugmeler" style="margin-top:6px"><button class="btn2" data-geri="${m.id}">↩️ Yeniden düzenle</button><button class="btn2" data-sil="${m.id}">🗑️ Sil</button></div>`}
    </div>`;
  }
  async function ekleriGoster(kap) {
    for (const el of kap.querySelectorAll("[data-ek]")) {
      const m = O.gelen.find((x) => x.id === el.dataset.ek); if (!m || !m.ek) continue;
      try {
        const blob = await ekOku(m.id);
        if (!blob) { el.innerHTML = `<span class="not">📎 ${esc(m.ek.ad)} (bu cihazda bulunamadı)</span>`; continue; }
        const url = URL.createObjectURL(blob);
        el.innerHTML = /^image\//.test(blob.type)
          ? `<a href="${url}" target="_blank" rel="noopener"><img class="om-resim" src="${url}" alt="${esc(m.ek.ad)}"></a>`
          : `<a class="btn om-pdf" href="${url}" target="_blank" rel="noopener" download="${esc(m.ek.ad)}">📄 PDF'i aç<small>${esc(m.ek.ad)}</small></a>`;
      } catch (e) { el.innerHTML = `<span class="not">📎 ${esc(m.ek.ad)} açılamadı</span>`; }
    }
  }
  function kartOlaylari(kap, yenile) {
    kap.querySelectorAll(".om-kart [data-alan]").forEach((el) => (el.onchange = () => {
      const m = O.gelen.find((x) => x.id === el.closest(".om-kart").dataset.id); if (!m) return;
      m[el.dataset.alan] = el.value.trim ? el.value.trim() : el.value;
      if (el.dataset.alan === "kimden" && O.hocalar && !m.dersElle) { const d = dersTahmin(m.metin, m.kimden); if (d) m.ders = d; }
      if (el.dataset.alan === "ders") dersSec(m, m.ders);
      if (el.dataset.alan === "kimden" && m.kimden && m.dersElle && m.ders) ogren(m.kimden, m.ders);
      if (el.dataset.alan === "tur" && m.tur === "odev" && !m.tarih) m.tarih = varsayilanTeslim(m.ders);
      kaydet(); yenile();
    }));
    kap.querySelectorAll("[data-pencere]").forEach((b) => (b.onclick = () => { const m = O.gelen.find((x) => x.id === b.dataset.pencere); if (m) dersPenceresi(m, yenile); }));
    kap.querySelectorAll("[data-aktar]").forEach((b) => (b.onclick = () => {
      const m = O.gelen.find((x) => x.id === b.dataset.aktar); if (!m) return;
      if (!m.ders) { dersPenceresi(m, yenile); return; }
      if (m.tur === "sinav" && !m.tarih) { alert("Sınavın tarihini seç."); return; }
      aktar(m); kaydet(); yenile();
    }));
    kap.querySelectorAll("[data-arsiv]").forEach((b) => (b.onclick = () => { const m = O.gelen.find((x) => x.id === b.dataset.arsiv); if (m) { m.durum = "arsiv"; kaydet(); yenile(); } }));
    kap.querySelectorAll("[data-geri]").forEach((b) => (b.onclick = () => {
      const m = O.gelen.find((x) => x.id === b.dataset.geri); if (!m) return;
      if (m.odevId) { P.odevler = P.odevler.filter((o) => o.id !== m.odevId); delete m.odevId; }
      m.durum = "yeni"; kaydet(); git(okulAna, "📩 Okul Mesajları", false);
    }));
    kap.querySelectorAll("[data-sil]").forEach((b) => (b.onclick = () => {
      if (!confirm("Bu mesaj silinsin mi?")) return;
      const m = O.gelen.find((x) => x.id === b.dataset.sil); if (!m) return;
      if (m.odevId) P.odevler = P.odevler.filter((o) => o.id !== m.odevId);
      if (m.ek) ekSil(m.id);
      O.gelen = O.gelen.filter((x) => x !== m); kaydet(); yenile();
    }));
    ekleriGoster(kap);
  }
  // Gönderen → ders ilişkisini öğren: bir kez seçilince o gönderenin sonraki mesajları kendiliğinden o derse gider
  function ogren(ad, dk) {
    ad = String(ad || "").trim(); if (!ad || !dk) return;
    const n = norm(ad);
    for (const [d, l] of Object.entries(O.hocalar)) {
      const kalan_ = String(l).split(",").map((x) => x.trim()).filter((x) => x && norm(x) !== n);
      if (kalan_.length) O.hocalar[d] = kalan_.join(", "); else delete O.hocalar[d];
    }
    O.hocalar[dk] = O.hocalar[dk] ? O.hocalar[dk] + ", " + ad : ad;
    O.gelen.filter((x) => x.durum === "yeni" && !x.dersElle && x.kimden && norm(x.kimden) === n).forEach((x) => { x.ders = dk; if (x.tur === "odev" && !tarihTahmin(x.metin)) x.tarih = varsayilanTeslim(dk); });
  }
  function dersSec(m, dk) {
    m.ders = dk; m.dersElle = true;
    if (m.tur === "odev" && !tarihTahmin(m.metin)) m.tarih = varsayilanTeslim(dk);
    if (m.kimden) ogren(m.kimden, dk);
  }
  // Ders seçme penceresi: büyük ders düğmeleri; gönderen yazılırsa o ad o derse kaydedilir
  function dersPenceresi(m, sonra) {
    const eski = document.getElementById("omPencere"); if (eski) eski.remove();
    const p = document.createElement("div");
    p.id = "omPencere"; p.className = "om-pencere";
    const ozet = (m.metin || (m.ek ? "📎 " + m.ek.ad : "")).replace(/\s+/g, " ").slice(0, 160);
    const bilinen = [...new Set(Object.values(O.hocalar).flatMap((l) => String(l).split(",").map((x) => x.trim()).filter(Boolean)))];
    p.innerHTML = `<div class="om-pencere-ic" role="dialog" aria-label="Ders seç">
      <b style="font-size:19px">📚 Bu mesaj hangi dersle ilgili?</b>
      <p class="om-metin not" style="margin:6px 0 10px">${esc(ozet)}</p>
      <label class="not" style="display:block;margin-bottom:10px">Gönderen (isteğe bağlı — yazarsan bir dahakine ders kendiliğinden seçilir)
        <input type="text" id="omPKimden" list="omPListe" value="${esc(m.kimden || "")}" placeholder="örn: Halit Hoca Türkçe" style="font:inherit;font-size:16px;padding:9px 10px;border-radius:10px;border:1px solid var(--sinir);background:var(--bg);color:var(--yazi);width:100%;margin-top:4px">
        <datalist id="omPListe">${bilinen.map((x) => `<option value="${esc(x)}">`).join("")}</datalist></label>
      <div class="om-pencere-dersler">${dersler().filter((d) => d.key !== "secmeli").map((d) => `<button class="kart ders" style="--renk:${d.renk}" data-pd="${esc(d.key)}"><span class="ikon">${d.ikon}</span><b>${esc(d.ad)}</b></button>`).join("")}</div>
      <div class="om-dugmeler" style="margin-top:12px"><button class="btn2" id="omPArsiv">📢 Derse ait değil (arşivle)</button><button class="btn2" id="omPKapat">Sonra seçerim</button></div>
    </div>`;
    document.body.appendChild(p);
    const kapat = () => { p.remove(); sonra && sonra(); };
    p.querySelectorAll("[data-pd]").forEach((b) => (b.onclick = () => {
      m.kimden = p.querySelector("#omPKimden").value.trim();
      dersSec(m, b.dataset.pd); kaydet(); kapat();
    }));
    p.querySelector("#omPArsiv").onclick = () => { m.durum = "arsiv"; kaydet(); kapat(); };
    p.querySelector("#omPKapat").onclick = () => { p.remove(); git(okulAna, "📩 Okul Mesajları", false); };
  }
  // Dersi bulunamayan yeni mesajlar için pencereyi sırayla aç
  function sirayla(liste) {
    const m = liste.find((x) => x.durum === "yeni" && !x.ders);
    if (!m) { git(okulAna, "📩 Okul Mesajları", false); return; }
    dersPenceresi(m, () => sirayla(liste.filter((x) => x !== m)));
  }

  function aktar(m) {
    m.durum = "aktarildi";
    if (m.tur === "duyuru") return;
    const ozet = (m.metin || (m.ek ? m.ek.ad : "")).replace(/\s+/g, " ").trim().slice(0, 140) || (m.tur === "sinav" ? "Sınav" : "Ödev");
    const o = { id: "o" + Date.now(), ders: m.ders, metin: m.tur === "sinav" ? "📅 Sınav hazırlığı: " + ozet : "📩 " + ozet, verildi: gun(bugun()), teslim: m.tarih || varsayilanTeslim(m.ders), bitti: false, okulMesaj: m.id };
    if (m.odevId) P.odevler = P.odevler.filter((x) => x.id !== m.odevId);
    P.odevler.push(o); m.odevId = o.id;
  }

  // ---------- Ana ekran ----------
  function okulAna() {
    const yeni = O.gelen.filter((m) => m.durum === "yeni");
    const sinavlar = O.gelen.filter((m) => m.tur === "sinav" && m.durum === "aktarildi" && m.tarih && kalan(m.tarih) >= 0).sort((a, b) => a.tarih.localeCompare(b.tarih));
    const hocaSay = Object.values(O.hocalar).filter((x) => String(x).trim()).length;
    ekran.innerHTML = `
      <a class="om-bip" href="${BIP_WEB}" target="_blank" rel="noopener"><span style="font-size:32px">💬</span><span>BiP Web'i aç<small>Okul grubundaki mesajı seç → Kopyala → buraya dön, yapıştır</small></span></a>
      ${hocaSay ? "" : `<p class="not" style="margin:0 0 12px">💡 Hoca adı yazmana gerek yok: dersi bulunamayan mesajda ders penceresi açılır, sen seçersin; gönderen adı varsa uygulama bir dahakine o dersi kendisi seçer.</p>`}
      <div class="om-giris">
        <b>➕ Yeni okul mesajı</b>
        <textarea id="omMetin" placeholder="BiP'ten kopyaladığın mesajı buraya yapıştır…"></textarea>
        <div class="om-izgara">
          <label>Kimden? (isteğe bağlı)<select id="omKimden"><option value="">—</option>${Object.entries(O.hocalar).flatMap(([d, a]) => String(a).split(",").map((x) => x.trim()).filter(Boolean).map((x) => `<option value="${esc(x)}">${esc(x)} · ${esc(dersBul(d).ad)}</option>`)).join("")}</select></label>
          <label>Resim / PDF (isteğe bağlı, birden çok seçilebilir)<input type="file" id="omDosya" accept="image/*,application/pdf" multiple></label>
        </div>
        <div class="om-dugmeler"><button class="btn" id="omEkle">➕ Ekle</button><button class="btn2" id="omYapistir">📋 Panodan yapıştır</button></div>
      </div>
      <h2>📥 Derse ayrılmayı bekleyenler (${yeni.length})</h2>
      <div id="omYeni">${yeni.length ? yeni.map((m) => kartHtml(m, true)).join("") : '<p class="not">Bekleyen mesaj yok. 🎉</p>'}</div>
      ${sinavlar.length ? `<h2>📅 Yaklaşan sınavlar</h2>${sinavlar.map((m) => { const k = kalan(m.tarih), d = dersBul(m.ders); return `<div class="om-sinav"><span>${d.ikon} <b>${esc(d.ad)}</b><small class="not" style="display:block">${esc(tarihYaz(m.tarih))}</small></span><b class="${k <= 3 ? "yakin" : ""}">${k === 0 ? "BUGÜN" : k + " gün kaldı"}</b></div>`; }).join("")}` : ""}
      <h2>🗂️ Derslere göre</h2>
      <div class="izgara" id="omDersler"></div>
      <div class="satir">
        <button class="btn2" id="omHoca">👩‍🏫 Hocalar ve dersler</button>
        <button class="btn2" id="omArsiv">🗄️ Arşiv</button>
        ${window.PROGRAM_AC ? '<button class="btn2" id="omProgram">📝 Ödevlerim</button>' : ""}
        <button class="btn2" id="omYardim">❓ Nasıl kullanılır?</button>
      </div>`;
    const yenile = () => git(okulAna, "📩 Okul Mesajları", false);
    kartOlaylari($("omYeni"), yenile);
    const kutu = $("omDersler");
    dersler().forEach((d) => {
      const n = O.gelen.filter((m) => m.ders === d.key && m.durum === "aktarildi").length;
      if (!n && !O.hocalar[d.key]) return;
      const b = document.createElement("button");
      b.className = "kart ders"; b.style.setProperty("--renk", d.renk);
      b.innerHTML = `<span class="ikon">${d.ikon}</span><b>${esc(d.ad)}</b><span class="rozet">${n} mesaj${O.hocalar[d.key] ? " · " + esc(String(O.hocalar[d.key]).split(",")[0]) : ""}</span>`;
      b.onclick = () => git(() => dersMesajlari(d.key), d.ikon + " " + d.ad);
      kutu.appendChild(b);
    });
    if (!kutu.children.length) kutu.outerHTML = '<p class="not">Derse aktardığın mesajlar burada ders ders toplanır.</p>';
    $("omEkle").onclick = async () => {
      const metin = $("omMetin").value, dosyalar = [...$("omDosya").files], kimden = $("omKimden").value;
      if (!metin.trim() && !dosyalar.length) { alert("Önce mesajı yapıştır ya da bir resim/PDF seç."); return; }
      const hepsi = [];
      if (metin.trim() || !dosyalar.length) hepsi.push(...mesajEkle(metin, kimden, null));
      for (const dosya of dosyalar) {
        const [m] = mesajEkle("", kimden || (hepsi[0] && hepsi[0].kimden) || "", { ad: dosya.name || "ek", tip: dosya.type });
        if (hepsi[0] && !m.ders && hepsi[0].ders) { m.ders = hepsi[0].ders; m.tur = hepsi[0].tur; m.tarih = hepsi[0].tarih; }
        try { await ekYaz(m.id, await kucult(dosya)); } catch (e) { alert(dosya.name + " bu cihaza kaydedilemedi."); m.ek = null; }
        hepsi.push(m);
      }
      kaydet();
      sirayla(hepsi);
    };
    $("omYapistir").onclick = async () => {
      try { const t = await navigator.clipboard.readText(); if (t) { $("omMetin").value = t; return; } } catch (e) {}
      $("omMetin").focus(); alert("Kutuya uzun basıp 'Yapıştır'a dokun.");
    };
    if ($("omHocaIlk")) $("omHocaIlk").onclick = () => git(hocaAyar, "👩‍🏫 Hocalar ve Dersler");
    $("omHoca").onclick = () => git(hocaAyar, "👩‍🏫 Hocalar ve Dersler");
    $("omArsiv").onclick = () => git(arsiv, "🗄️ Arşiv");
    if ($("omProgram")) $("omProgram").onclick = () => PROGRAM_AC();
    $("omYardim").onclick = () => git(yardim, "❓ Okul Mesajları — Kullanım");
  }

  function dersMesajlari(dk) {
    const l = O.gelen.filter((m) => m.ders === dk && m.durum === "aktarildi");
    const hoca = O.hocalar[dk];
    ekran.innerHTML = `${hoca ? `<p class="not">👩‍🏫 ${esc(hoca)}</p>` : ""}
      <div id="omListe">${l.length ? l.map((m) => kartHtml(m, false)).join("") : '<p class="not">Bu derse aktarılmış mesaj yok.</p>'}</div>
      ${window.ICERIK && ICERIK[dk] && typeof uniteler === "function" ? `<div class="satir"><button class="btn2" id="omDersAc">📚 ${esc(dersBul(dk).ad)} konularına git</button></div>` : ""}`;
    kartOlaylari($("omListe"), () => git(() => dersMesajlari(dk), dersBul(dk).ikon + " " + dersBul(dk).ad, false));
    if ($("omDersAc")) $("omDersAc").onclick = () => git(() => uniteler(dk), dersBul(dk).ad);
  }

  function arsiv() {
    const l = O.gelen.filter((m) => m.durum === "arsiv");
    ekran.innerHTML = `<div id="omListe">${l.length ? l.map((m) => kartHtml(m, false)).join("") : '<p class="not">Arşiv boş.</p>'}</div>`;
    kartOlaylari($("omListe"), () => git(arsiv, "🗄️ Arşiv", false));
  }

  function hocaAyar() {
    ekran.innerHTML = `<p class="not">Her dersin hocasının adını yaz. Grupta farklı yazılıyorsa virgülle ayır (örn: <i>Ayşe Yılmaz, Ayşe Hanım</i>). Mesajda ya da gönderende bu ad geçince ders kendiliğinden seçilir.</p>
      <div id="omHocalar">${dersler().filter((d) => d.key !== "secmeli").map((d) => `<div class="om-hoca"><span>${d.ikon} ${esc(d.ad)}</span><input type="text" data-ders="${esc(d.key)}" value="${esc(O.hocalar[d.key] || "")}" placeholder="Hocanın adı"></div>`).join("")}</div>
      <div class="satir"><button class="btn" id="omKaydet">💾 Kaydet</button></div>
      <h2>👧 Öğrenci adı</h2><div class="om-hoca"><span>Adı</span><input type="text" id="omAd" value="${esc(kayit.ad || "")}"></div>`;
    $("omKaydet").onclick = () => {
      ekran.querySelectorAll("[data-ders]").forEach((i) => { const v = i.value.trim(); if (v) O.hocalar[i.dataset.ders] = v; else delete O.hocalar[i.dataset.ders]; });
      kayit.ad = $("omAd").value.trim() || VARSAYILAN_AD;
      O.gelen.filter((m) => m.durum === "yeni" && !m.dersElle).forEach((m) => { const d = dersTahmin(m.metin, m.kimden); if (d) m.ders = d; });
      kaydet(); gecmis.pop(); git(okulAna, "📩 Okul Mesajları", false);
    };
  }

  function yardim() {
    ekran.innerHTML = `<div class="anlatim">
      <p><b>1. Bir kez kurulum:</b> Telefonda Chrome ile <b>web.bip.com</b>'u aç, velinin iPhone'undaki BiP → Profil → <b>BiP Web</b> ile QR kodu okut. Bu uygulamayı da Chrome menüsünden <b>"Ana ekrana ekle / Uygulamayı yükle"</b> ile kur.</p>
      <p><b>2. Mesaj gelince (en hızlı yol):</b> BiP Web'de mesajı seçip kopyala, buraya dön, <b>📋 Panodan yapıştır</b> → <b>➕ Ekle</b>.</p>
      <p><b>3. Paylaş menüsüyle:</b> Mesaj yazısını seçip <b>Paylaş</b>'a dokun ve listeden bu uygulamayı seç; mesaj kendiliğinden buraya düşer.</p>
      <p><b>4. Resim ya da PDF:</b> BiP Web'de resmi/PDF'i indir, sonra burada <b>Resim / PDF</b> kutusundan seç. Resmin altına kısa bir not yazarsan (örn. "Matematik s. 45") ders daha kolay bulunur.</p>
      <p><b>5. Derse ayır:</b> Ders bulunamazsa <b>ders penceresi</b> açılır; dersi sen seçersin. Gönderen adını da yazarsan (telefonda nasıl kayıtlıysa, örn. "Halit Hoca Türkçe") uygulama bunu öğrenir ve o kişinin sonraki mesajlarında dersi kendisi seçer. Ödev mi sınav mı olduğunu ve tarihi de tahmin eder. Doğruysa <b>✅ Derse aktar</b>'a dokun. Ödevler <b>Ders Programım → Ödevlerim</b>'e eklenir; sınavlar "Yaklaşan sınavlar"da geri sayılır.</p>
      <p class="not">Mesajlar sadece bu telefonda saklanır; başka öğrenciler görmez.</p></div>`;
  }

  // ---------- Dersin sayfasında "Okul mesajları" kutusu ----------
  if (typeof window.uniteler === "function") {
    const eski = window.uniteler;
    window.uniteler = function (dk) {
      const r = eski.apply(this, arguments);
      try {
        const l = O.gelen.filter((m) => m.ders === dk && m.durum === "aktarildi").slice(0, 3);
        const bekleyen = P.odevler.filter((o) => o.ders === dk && !o.bitti && o.okulMesaj);
        if (l.length || bekleyen.length) {
          const k = document.createElement("div");
          k.className = "om-ders-kutu";
          k.innerHTML = `<h3>📩 Okul mesajları${bekleyen.length ? ` · ${bekleyen.length} bekleyen iş` : ""}</h3>
            ${l.map((m) => `<div class="om-satir"><span class="om-cip">${TUR[m.tur]}</span>${m.tarih ? `<span class="om-cip">📆 ${esc(tarihYaz(m.tarih))}</span>` : ""}<div>${esc((m.metin || (m.ek ? "📎 " + m.ek.ad : "")).slice(0, 160))}</div></div>`).join("")}
            <button class="btn2" style="margin-top:6px">Tüm mesajları gör</button>`;
          k.querySelector("button").onclick = () => git(() => dersMesajlari(dk), dersBul(dk).ikon + " " + dersBul(dk).ad);
          ekran.prepend(k);
        }
      } catch (e) {}
      return r;
    };
  }

  // ---------- Android "Paylaş" menüsünden gelen mesaj ----------
  try {
    const q = new URLSearchParams(location.search);
    if (q.has("paylas")) {
      const metin = [q.get("baslik"), q.get("metin"), q.get("link")].filter(Boolean).join("\n").trim();
      history.replaceState(null, "", location.pathname);
      if (metin) { const e = mesajEkle(metin, "", null); setTimeout(() => { git(okulAna, "📩 Okul Mesajları"); sirayla(e); }, 0); }
    }
  } catch (e) {}

  window.OKUL_MESAJ = { ekle: mesajEkle, ac: () => git(okulAna, "📩 Okul Mesajları"), _test: { dersTahmin, turTahmin, tarihTahmin, bol } };
  if (window.ANA_YENILE) window.ANA_YENILE();
})();
