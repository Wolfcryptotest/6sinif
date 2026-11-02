// 📅 Ders Programım ve Günlük Takip (6. sınıf)
// Öğrenci haftalık ders programını girer; her gün derslerde işlenen konuyu ve verilen ödevleri işaretler.
// Uygulama yarınki dersleri ve ödevleri hatırlatır, "kaldığımız yer"den kısa tekrar testi açar, seri ve rozetlerle teşvik eder.
// Veriler yalnızca bu cihazda (localStorage, kayit.program) tutulur.
(function () {
  if (typeof kayit === "undefined" || typeof DERSLER === "undefined" || !window.ICERIK) return;
  const P = (kayit.program = kayit.program || {});
  P.tablo = P.tablo || null;      // { 1: [dersKey|"" ...], ..., 5: [...] }  (1 = Pazartesi)
  P.islenen = P.islenen || {};    // { "YYYY-AA-GG": { dersKey: konuId | "-" } }
  P.son = P.son || {};            // { dersKey: konuId }  kaldığımız yer
  P.odevler = P.odevler || [];    // [{ id, ders, metin, verildi, teslim, bitti, bittiT }]
  P.kontrol = P.kontrol || {};    // { "YYYY-AA-GG": true }  günü tamamladı
  P.tekrar = P.tekrar || {};
  P.odevYok = P.odevYok || {};    // { "YYYY-AA-GG": { dersKey: true } }  "ödev yok" işaretlenenler      // { "YYYY-AA-GG": sayı }  bugün yapılan tekrar testleri

  const EK_DERSLER = [
    { key: "beden", ad: "Beden Eğitimi ve Spor", ikon: "⚽", renk: "#16a34a" },
    { key: "muzik", ad: "Müzik", ikon: "🎵", renk: "#db2777" },
    { key: "gorsel", ad: "Görsel Sanatlar", ikon: "🎨", renk: "#ea580c" },
    { key: "bilisim", ad: "Bilişim Teknolojileri", ikon: "💻", renk: "#0369a1" },
    { key: "secmeli", ad: "Seçmeli Ders", ikon: "📘", renk: "#64748b" },
    { key: "rehberlik", ad: "Rehberlik", ikon: "🧭", renk: "#7c3aed" }
  ];
  const TUM = [...DERSLER, ...EK_DERSLER];
  const dersBul = (k) => TUM.find((d) => d.key === k) || { key: k, ad: k, ikon: "📘", renk: "#64748b" };
  const GUNLER = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  const anahtar = (t) => `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  const tarih = (s) => new Date(s + "T00:00:00");
  const gunEkle = (t, n) => { const x = new Date(t); x.setDate(x.getDate() + n); return x; };
  const bugunT = () => { const t = new Date(); t.setHours(0, 0, 0, 0); return t; };
  const tarihYaz = (s) => { const t = tarih(s), f = Math.round((t - bugunT()) / 86400000); return f === 0 ? "bugün" : f === 1 ? "yarın" : f === -1 ? "dün" : t.toLocaleDateString("tr-TR", { day: "numeric", month: "long", weekday: "long" }); };
  const sec = (a) => a[Math.floor(Math.random() * a.length)];

  // ---------- Konu yardımcıları ----------
  const konuListesi = (dk) => (ICERIK[dk] ? ICERIK[dk].uniteler.flatMap((u) => u.konular.map((k) => ({ k, u }))) : []);
  const konuBulId = (id) => { for (const D of Object.values(ICERIK)) for (const u of D.uniteler) for (const k of u.konular) if (k.id === id) return k; return null; };
  const siradaki = (dk) => { // son işlenen konudan sonraki konu (okul sırayla ilerler)
    const l = konuListesi(dk); if (!l.length) return null;
    const i = l.findIndex((x) => x.k.id === P.son[dk]);
    return i < 0 ? l[0].k : l[Math.min(i + 1, l.length - 1)].k;
  };
  const gunDersleri = (t) => { const g = t.getDay(); return P.tablo && g >= 1 && g <= 5 ? (P.tablo[g] || []).filter(Boolean) : []; };
  const tekil = (a) => [...new Set(a)];
  const sonrakiDersGunu = (dk, t) => { for (let i = 1; i <= 14; i++) { const x = gunEkle(t, i); if (gunDersleri(x).includes(dk)) return anahtar(x); } return anahtar(gunEkle(t, 1)); };
  const okulGunuSonra = (t) => { for (let i = 1; i <= 7; i++) { const x = gunEkle(t, i); if (gunDersleri(x).length) return x; } return gunEkle(t, 1); };

  // ---------- Seri ve rozetler ----------
  function seri() {
    let n = 0, t = bugunT();
    if (!P.kontrol[anahtar(t)]) t = gunEkle(t, -1);
    for (let i = 0; i < 400; i++) {
      const k = anahtar(t);
      if (P.kontrol[k]) n++;
      else if (gunDersleri(t).length) break; // okul günü atlandıysa seri biter (hafta sonu bozmaz)
      t = gunEkle(t, -1);
    }
    return n;
  }
  const yapilan = () => P.odevler.filter((o) => o.bitti).length;
  const zamaninda = () => P.odevler.filter((o) => o.bitti && o.bittiT && o.bittiT <= o.teslim).length;
  function rozetler() {
    const s = seri(), tekrarSay = Object.values(P.tekrar).reduce((a, x) => a + x, 0), takipGun = Object.keys(P.kontrol).length;
    return [
      ["📅", "Programcı", "Ders programını girdin", !!P.tablo],
      ["🌱", "İlk Adım", "İlk günü tamamladın", takipGun >= 1],
      ["🔥", "3 Günlük Seri", "3 okul günü üst üste takip", s >= 3],
      ["⭐", "Haftanın Yıldızı", "5 okul günü üst üste takip", s >= 5],
      ["🏆", "Ay Şampiyonu", "20 okul günü üst üste takip", s >= 20],
      ["📝", "Ödev Ustası", "10 ödevi zamanında bitirdin", zamaninda() >= 10],
      ["🔁", "Tekrar Kahramanı", "20 tekrar testi çözdün", tekrarSay >= 20],
      ["📚", "Konu Takipçisi", "30 ders konusunu işaretledin", Object.values(P.islenen).reduce((a, g) => a + Object.values(g).filter((x) => x !== "-").length, 0) >= 30]
    ];
  }

  // ---------- Bilge Baykuş: öğrenciyi yönlendiren koç ----------
  function kocMesaji() {
    const simdi = new Date(), saat = simdi.getHours(), t = bugunT(), bk = anahtar(t);
    const ad = (kayit.ad || "").trim();
    const selam = saat < 12 ? "Günaydın" : saat < 18 ? "Merhaba" : "İyi akşamlar";
    if (!P.tablo) return [`${selam}${ad ? " " + ad : ""}! Ben Bilge Baykuş 🦉 Önce ders programını girelim; sonra her gün hangi derste ne işlediğini, ödevlerini ve yarınki derslerini birlikte takip ederiz.`];
    const bugunD = tekil(gunDersleri(t)), yarinT = okulGunuSonra(t), yarinD = tekil(gunDersleri(yarinT));
    const bekleyen = P.odevler.filter((o) => !o.bitti).sort((a, b) => a.teslim.localeCompare(b.teslim));
    const gecikti = bekleyen.filter((o) => o.teslim < bk), yarinOdev = bekleyen.filter((o) => o.teslim === anahtar(yarinT));
    const satir = [];
    satir.push(`${selam}${ad ? " " + ad : ""}! ${sec(["Bugün de birlikte çalışalım.", "Seni görmek güzel!", "Küçük adımlar büyük başarı getirir.", "Her gün biraz, her gün daha iyi!"])}`);
    if (gecikti.length) satir.push(`⚠️ Teslim tarihi geçmiş ${gecikti.length} ödevin var: ${gecikti.map((o) => dersBul(o.ders).ad).join(", ")}. Önce bunları bitirelim mi?`);
    if (bugunD.length && saat < 13) satir.push(`Bugün ${bugunD.map((d) => dersBul(d).ad).join(", ")} derslerin var. Okuldan önce dünkü konulara 5 dakika göz atmak derste çok işine yarar.`);
    if (bugunD.length && saat >= 13 && !P.kontrol[bk]) {
      const eksik = bugunD.filter((d) => !(P.islenen[bk] || {})[d]);
      satir.push(eksik.length ? `Okuldan döndün mü? Bugün ${eksik.map((d) => dersBul(d).ad).join(", ")} derslerinde ne işlediniz, ödev verildi mi? Aşağıdan işaretleyelim.` : "Bugünkü derslerini işaretlemişsin, aferin! Ödevlerine bakıp 'Bugünü tamamladım' demeyi unutma.");
    }
    if (yarinD.length) {
      const hazir = yarinD.map((d) => P.son[d] && konuBulId(P.son[d]) ? `${dersBul(d).ad}'te "${konuBulId(P.son[d]).ad}"` : null).filter(Boolean);
      satir.push(`${tarihYaz(anahtar(yarinT)) === "yarın" ? "Yarın" : tarihYaz(anahtar(yarinT)).replace(/^./, (c) => c.toUpperCase())} ${yarinD.map((d) => dersBul(d).ad).join(", ")} var.${hazir.length ? " Kaldığımız yerler: " + hazir.join("; ") + ". Hadi kısa bir tekrar yapalım!" : ""}`);
    }
    if (yarinOdev.length) satir.push(`📝 ${tarihYaz(anahtar(yarinT)) === "yarın" ? "Yarına" : "Bir sonraki okul gününe"} ${yarinOdev.length} ödevin var: ${yarinOdev.map((o) => dersBul(o.ders).ad + (o.metin === "Ödev" ? "" : ` (${o.metin})`)).join(", ")}. Yaptın mı?`);
    else if (bekleyen.length === 0) satir.push(sec(["Bekleyen ödevin yok, harika! 🎉 Bu boş zamanı bir tekrar testiyle değerlendirebilirsin.", "Bütün ödevlerin bitmiş, süpersin! ⭐"]));
    if (!bugunD.length) satir.push(t.getDay() === 0 || t.getDay() === 6 ? "Hafta sonu dinlenmek de önemli 😊 Ama haftanın konularından kısa bir tekrar, pazartesi derste parlamanı sağlar." : "");
    const s = seri();
    if (s >= 2) satir.push(`🔥 ${s} okul günüdür takibini yapıyorsun. Seriyi bozma!`);
    return satir.filter(Boolean);
  }

  // ---------- Stil ----------
  const st = document.createElement("style");
  st.textContent = `
.ozel-kart.program{background:linear-gradient(135deg,#0d9488,#2563eb)}
.koc{display:flex;gap:12px;align-items:flex-start;background:color-mix(in srgb,#0d9488 10%,var(--kart));border:1px solid color-mix(in srgb,#0d9488 40%,var(--sinir));border-radius:18px;padding:14px 16px;margin:0 0 16px}
.koc .baykus{font-size:44px;line-height:1}.koc p{margin:4px 0}
.pr-tablo{width:100%;border-collapse:separate;border-spacing:4px;font-size:15px}
.pr-tablo th{font-size:13px;color:var(--soluk);font-weight:600}
.pr-tablo td{background:var(--kart);border:1px solid var(--sinir);border-radius:10px;padding:6px 4px;text-align:center;vertical-align:middle;min-width:56px}
.pr-tablo td.bugun{outline:3px solid #0d9488}
.pr-tablo select{width:100%;font-size:14px;padding:6px 2px;border-radius:8px;border:1px solid var(--sinir);background:var(--kart);color:var(--yazi)}
.pr-kap{overflow-x:auto;margin-bottom:12px}
.pr-ders{border:1px solid var(--sinir);border-left:6px solid var(--renk);border-radius:16px;padding:12px 14px;margin-bottom:12px;background:var(--kart)}
.pr-ders h3{margin:0 0 8px;font-size:18px}
.pr-ders label{display:block;font-size:14px;color:var(--soluk);margin:8px 0 4px}
.pr-ders select,.pr-ders input[type=text],.pr-ders input[type=date]{width:100%;box-sizing:border-box;font-size:16px;padding:10px;border-radius:10px;border:1px solid var(--sinir);background:var(--kart);color:var(--yazi)}
.pr-odev{display:flex;gap:10px;align-items:center;border:1px solid var(--sinir);border-radius:14px;padding:10px 12px;margin-bottom:8px;background:var(--kart)}
.pr-odev input[type=checkbox]{width:26px;height:26px;flex:none}
.pr-odev.gec{border-color:#dc2626;background:color-mix(in srgb,#dc2626 7%,var(--kart))}
.pr-odev.yarin{border-color:#f59e0b}
.pr-odev.bitti{opacity:.6}.pr-odev.bitti .pr-metin{text-decoration:line-through}
.pr-odev .pr-metin{flex:1}.pr-odev small{display:block;color:var(--soluk)}
.pr-rozet{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}
.pr-rozet div{border:1px solid var(--sinir);border-radius:14px;padding:10px;text-align:center;background:var(--kart)}
.pr-rozet div.yok{opacity:.35;filter:grayscale(1)}
.pr-rozet b{display:block;font-size:30px}
.pr-hazir{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.pr-ac{margin-top:10px}.pr-ac summary{cursor:pointer;color:#0d9488;font-weight:600;padding:6px 0}.pr-ac[open] summary{margin-bottom:6px}`;
  document.head.appendChild(st);

  // ---------- Ana sayfa kartı ----------
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.unshift((kutu) => {
    const t = bugunT(), bekleyen = P.odevler.filter((o) => !o.bitti).length, bd = tekil(gunDersleri(t));
    const b = document.createElement("button");
    b.className = "ozel-kart program";
    const alt = !P.tablo ? "Ders programını gir, seni her gün yönlendireyim"
      : `${bd.length ? "Bugün: " + bd.map((d) => dersBul(d).ad).join(", ") : "Bugün ders yok"}${bekleyen ? ` · ${bekleyen} ödev bekliyor` : " · Bekleyen ödev yok"}`;
    b.innerHTML = `<span class="ikon">📅</span><span><b>Ders Programım</b><small>${esc(alt)}</small></span>`;
    b.onclick = () => git(programAna, "📅 Ders Programım");
    kutu.appendChild(b);
  });

  // ---------- Günlük takip ekranı ----------
  function programAna() {
    if (!P.tablo) return programDuzenle(true);
    const t = bugunT(), bk = anahtar(t), bugunD = tekil(gunDersleri(t)), yarinT = okulGunuSonra(t), yarinD = tekil(gunDersleri(yarinT));
    const bekleyen = P.odevler.filter((o) => !o.bitti).sort((a, b) => a.teslim.localeCompare(b.teslim));
    const s = seri();
    ekran.innerHTML = `
      <div class="koc"><span class="baykus">🦉</span><div>${kocMesaji().map((x) => `<p>${esc(x)}</p>`).join("")}</div></div>
      <div class="satir" style="margin-top:0"><span class="seri">🔥 ${s} gün seri</span><span class="seri">📝 ${yapilan()} ödev bitti</span></div>
      ${bugunD.length ? `<h2>📚 Bugünkü Derslerim (${GUNLER[t.getDay()]})</h2><p class="not">Derste işlenen konuyu seç, ödev verildiyse "Var"a dokun. Konu seçince "kaldığımız yer" güncellenir.</p><div id="bugunD"></div>` : `<h2>📚 Bugün okul yok</h2><p class="not">${t.getDay() === 0 || t.getDay() === 6 ? "Hafta sonu! Aşağıdan haftanın tekrarını yapabilirsin." : "Programında bugün için ders yok."}</p>`}
      <h2>📝 Ödevlerim</h2><div id="odevler"></div>
      <div class="satir"><button class="btn2" id="odevEkle">➕ Başka ödev ekle</button></div>
      <h2>🎒 ${tarihYaz(anahtar(yarinT)) === "yarın" ? "Yarın" : tarihYaz(anahtar(yarinT)).replace(/^./, (c) => c.toUpperCase())}: Hazırlık</h2><div id="yarin"></div>
      <h2>🔁 Hadi Tekrar Edelim</h2>
      <button class="kart oyun-mod" id="haftaTekrar" style="border-left-color:#0d9488"><span class="ikon">🔁</span><b>Haftanın Tekrarı</b><span class="rozet">Son 7 günde derste işlenen konulardan 10 soru</span></button>
      <div class="satir"><button class="btn" id="tamam" ${P.kontrol[bk] ? "disabled" : ""}>${P.kontrol[bk] ? "✅ Bugün tamamlandı" : "✅ Bugünü tamamladım"}</button></div>
      <h2>🏅 Rozetlerim</h2>
      <div class="pr-rozet">${rozetler().map(([i, a, acik, var_]) => `<div class="${var_ ? "" : "yok"}" title="${esc(acik)}"><b>${i}</b>${esc(a)}<br><small class="not">${esc(acik)}</small></div>`).join("")}</div>
      <h2>📅 Haftalık Programım</h2><div class="pr-kap">${tabloHTML(false)}</div>
      <div class="satir"><button class="btn2" id="duzenle">✏️ Programı Düzenle</button><button class="btn2" id="ozet">📈 Haftalık Özet</button>${window.BILGE_AC ? '<button class="btn2" id="bilge">🦉 Bilge\'ye Sor</button>' : ""}</div>`;

    // Bugünkü dersler
    const kutu = $("bugunD");
    if (kutu) bugunD.forEach((dk) => {
      const d = dersBul(dk), liste = konuListesi(dk), secili = (P.islenen[bk] || {})[dk], oneri = siradaki(dk);
      const el = document.createElement("div");
      el.className = "pr-ders"; el.style.setProperty("--renk", d.renk);
      el.innerHTML = `<h3>${d.ikon} ${esc(d.ad)}</h3>
        ${liste.length ? `<label>Bugün derste hangi konu işlendi?</label>
          <select data-k="${dk}"><option value="">— Seç —</option><option value="-" ${secili === "-" ? "selected" : ""}>Konu işlenmedi / tekrar yapıldı</option>
          ${ICERIK[dk].uniteler.map((u) => `<optgroup label="${esc(u.ad)}">${u.konular.map((k) => `<option value="${k.id}" ${secili === k.id ? "selected" : ""}>${esc(k.ad)}${!secili && oneri && k.id === oneri.id ? " (sıradaki)" : ""}</option>`).join("")}</optgroup>`).join("")}</select>` : ""}
        ${(() => {
          const od = P.odevler.filter((o) => o.ders === dk && o.verildi === bk), yok = (P.odevYok[bk] || {})[dk];
          return `<label>Ödev verildi mi?</label>
          <div class="secim" style="margin:0"><button class="cip ${od.length ? "secili" : ""}" data-var="${dk}">📝 Var</button><button class="cip ${yok && !od.length ? "secili" : ""}" data-yok="${dk}">❌ Yok</button></div>
          ${od.length ? `<div class="not" style="margin-top:6px">✅ Ödev kaydedildi · Teslim: <b>${esc(tarihYaz(od[0].teslim))}</b> (bir sonraki ${esc(d.ad)} dersi)</div>
          <details class="pr-ac"><summary>İstersen not ekle ya da teslim gününü değiştir</summary>
            <input type="text" data-o="${od[0].id}" value="${od[0].metin === "Ödev" ? "" : esc(od[0].metin)}" placeholder="İsteğe bağlı not (örn: kitap s. 45)" aria-label="Ödev notu">
            <label>Teslim günü</label><input type="date" data-t="${od[0].id}" value="${od[0].teslim}">
            <div class="satir" style="margin:10px 0 0"><button class="btn2" data-kaydet="${od[0].id}">💾 Kaydet</button></div>
          </details>` : ""}`;
        })()}
        ${secili && secili !== "-" ? `<div class="satir" style="margin:10px 0 0"><button class="btn2" data-tk="${secili}">🔁 Bugünkü konuyu tekrar et (5 soru)</button></div>` : ""}`;
      kutu.appendChild(el);
    });
    ekran.querySelectorAll("select[data-k]").forEach((s2) => (s2.onchange = () => {
      const dk = s2.dataset.k, v = s2.value;
      P.islenen[bk] = P.islenen[bk] || {};
      if (v) { P.islenen[bk][dk] = v; if (v !== "-") P.son[dk] = v; } else delete P.islenen[bk][dk];
      kaydet(); git(programAna, "📅 Ders Programım", false);
    }));
    ekran.querySelectorAll("[data-var]").forEach((b) => (b.onclick = () => {
      const dk = b.dataset.var;
      if (!P.odevler.some((o) => o.ders === dk && o.verildi === bk)) P.odevler.push({ id: "o" + Date.now(), ders: dk, metin: "Ödev", verildi: bk, teslim: sonrakiDersGunu(dk, t), bitti: false });
      if (P.odevYok[bk]) delete P.odevYok[bk][dk];
      kaydet(); git(programAna, "📅 Ders Programım", false);
    }));
    ekran.querySelectorAll("[data-yok]").forEach((b) => (b.onclick = () => {
      const dk = b.dataset.yok, var_ = P.odevler.filter((o) => o.ders === dk && o.verildi === bk);
      if (var_.length && !confirm("Bu dersin bugünkü ödev kaydı silinsin mi?")) return;
      P.odevler = P.odevler.filter((o) => !(o.ders === dk && o.verildi === bk));
      (P.odevYok[bk] = P.odevYok[bk] || {})[dk] = true;
      kaydet(); git(programAna, "📅 Ders Programım", false);
    }));
    ekran.querySelectorAll("[data-kaydet]").forEach((b) => (b.onclick = () => {
      const o = P.odevler.find((x) => x.id === b.dataset.kaydet); if (!o) return;
      o.metin = ekran.querySelector(`[data-o="${o.id}"]`).value.trim() || "Ödev";
      o.teslim = ekran.querySelector(`[data-t="${o.id}"]`).value || o.teslim;
      kaydet(); git(programAna, "📅 Ders Programım", false);
    }));
    ekran.querySelectorAll("[data-tk]").forEach((b) => (b.onclick = () => tekrarAc(b.dataset.tk)));

    // Ödevler
    const ok = $("odevler"), sonBiten = P.odevler.filter((o) => o.bitti).sort((a, b) => (b.bittiT || "").localeCompare(a.bittiT || "")).slice(0, 3);
    if (!bekleyen.length && !sonBiten.length) ok.innerHTML = `<p class="not">Kayıtlı ödev yok. Derste ödev verilince yukarıdan ya da "Başka ödev ekle"den kaydet.</p>`;
    [...bekleyen, ...sonBiten].forEach((o) => {
      const d = dersBul(o.ders), el = document.createElement("label");
      el.className = "pr-odev" + (o.bitti ? " bitti" : o.teslim < bk ? " gec" : o.teslim === anahtar(yarinT) ? " yarin" : "");
      el.innerHTML = `<input type="checkbox" ${o.bitti ? "checked" : ""} data-id="${o.id}" aria-label="Yaptım"><span class="pr-metin"><b>${d.ikon} ${esc(d.ad)}</b>${o.metin === "Ödev" ? " ödevi" : " – " + esc(o.metin)}<small>${o.bitti ? "✅ Yapıldı" : o.teslim < bk ? "⚠️ Teslim " + tarihYaz(o.teslim) + " idi" : "Teslim: " + tarihYaz(o.teslim)}</small></span><button class="btn2" style="padding:6px 10px" data-sil="${o.id}" aria-label="Sil">🗑️</button>`;
      ok.appendChild(el);
    });
    ok.querySelectorAll("[data-id]").forEach((c) => (c.onchange = () => {
      const o = P.odevler.find((x) => x.id === c.dataset.id); if (!o) return;
      o.bitti = c.checked; o.bittiT = c.checked ? bk : null; kaydet();
      if (c.checked && !P.odevler.some((x) => !x.bitti)) kutla();
      git(programAna, "📅 Ders Programım", false);
    }));
    ok.querySelectorAll("[data-sil]").forEach((b) => (b.onclick = (e) => { e.preventDefault(); if (!confirm("Bu ödev silinsin mi?")) return; P.odevler = P.odevler.filter((x) => x.id !== b.dataset.sil); kaydet(); git(programAna, "📅 Ders Programım", false); }));
    $("odevEkle").onclick = () => git(odevEkle, "➕ Ödev Ekle");

    // Yarın hazırlık
    const yk = $("yarin");
    if (!yarinD.length) yk.innerHTML = `<p class="not">Programında yakın günde ders görünmüyor.</p>`;
    yarinD.forEach((dk) => {
      const d = dersBul(dk), son = P.son[dk] && konuBulId(P.son[dk]), od = P.odevler.filter((o) => !o.bitti && o.ders === dk && o.teslim <= anahtar(yarinT));
      const el = document.createElement("div");
      el.className = "pr-ders"; el.style.setProperty("--renk", d.renk);
      el.innerHTML = `<h3>${d.ikon} ${esc(d.ad)}</h3>
        ${od.length ? `<div>📝 Ödev${od.some((o) => o.metin !== "Ödev") ? ": " + od.filter((o) => o.metin !== "Ödev").map((o) => esc(o.metin)).join("; ") : " var"} <b style="color:#dc2626">(henüz yapılmadı)</b></div>` : P.odevler.some((o) => o.ders === dk && o.teslim === anahtar(yarinT)) ? "<div>✅ Bu dersin ödevini yaptın.</div>" : ""}
        ${son ? `<div>📍 Kaldığımız yer: <b>${esc(son.ad)}</b></div>` : ICERIK[dk] ? `<div class="not">Henüz bu dersten konu işaretlemedin.</div>` : ""}
        ${son ? `<div class="pr-hazir"><button class="btn2" data-tk="${son.id}">🔁 5 soruluk tekrar</button><button class="btn2" data-ko="${son.id}">📖 Konuya göz at</button></div>` : ""}`;
      yk.appendChild(el);
    });
    yk.querySelectorAll("[data-tk]").forEach((b) => (b.onclick = () => tekrarAc(b.dataset.tk)));
    yk.querySelectorAll("[data-ko]").forEach((b) => (b.onclick = () => { const k = konuBulId(b.dataset.ko); if (k) git(() => konuSayfa(k), k.ad); }));

    $("haftaTekrar").onclick = () => {
      const ids = [];
      for (let i = 0; i < 7; i++) Object.values(P.islenen[anahtar(gunEkle(t, -i))] || {}).forEach((v) => v !== "-" && !ids.includes(v) && ids.push(v));
      const K = ids.map(konuBulId).filter(Boolean);
      if (!K.length) return alert("Son 7 günde işaretlenmiş konu yok. Derste işlenen konuları işaretledikçe haftanın tekrarı hazırlanır.");
      tekrarSay();
      git(() => test(() => { const l = []; K.forEach((k, i) => l.push(...soruHazirla(k, Math.floor(10 / K.length) + (i < 10 % K.length ? 1 : 0)))); return karistir(l).slice(0, 10); }, "Haftanın Tekrarı", false, null), "🔁 Haftanın Tekrarı");
    };
    $("tamam").onclick = () => {
      const eksik = bugunD.filter((d) => ICERIK[d] && !(P.islenen[bk] || {})[d]);
      if (eksik.length && !confirm(`${eksik.map((d) => dersBul(d).ad).join(", ")} için konu işaretlemedin. Yine de bugünü tamamlayalım mı?`)) return;
      P.kontrol[bk] = true; kaydet(); kutla(); git(programAna, "📅 Ders Programım", false);
    };
    $("duzenle").onclick = () => git(() => programDuzenle(false), "✏️ Ders Programı");
    $("ozet").onclick = () => git(haftalikOzet, "📈 Haftalık Özet");
    if ($("bilge")) $("bilge").onclick = () => window.BILGE_AC();
  }

  function tekrarSay() { const k = anahtar(bugunT()); P.tekrar[k] = (P.tekrar[k] || 0) + 1; kaydet(); }
  function tekrarAc(id) {
    const k = konuBulId(id); if (!k) return;
    tekrarSay();
    git(() => test(() => soruHazirla(k, 5), "Tekrar: " + k.ad, false, k.id), "🔁 Tekrar: " + k.ad);
  }

  function tabloHTML(duzenle, taslak) {
    const tablo = taslak || P.tablo || {}, n = duzenle ? (P.saat || 7) : Math.max(1, ...[1, 2, 3, 4, 5].map((g) => (tablo[g] || []).filter(Boolean).length ? (tablo[g] || []).length : 0)), bg = new Date().getDay();
    const hucre = (g, i) => {
      const v = (tablo[g] || [])[i] || "";
      if (!duzenle) { const d = v ? dersBul(v) : null; return `<td class="${g === bg ? "bugun" : ""}">${d ? `${d.ikon}<br><small>${esc(d.ad.split(" ")[0])}</small>` : ""}</td>`; }
      return `<td><select data-g="${g}" data-i="${i}" aria-label="${GUNLER[g]} ${i + 1}. ders"><option value="">—</option>${TUM.map((d) => `<option value="${d.key}" ${d.key === v ? "selected" : ""}>${d.ikon} ${esc(d.ad)}</option>`).join("")}</select></td>`;
    };
    return `<table class="pr-tablo"><tr><th></th>${[1, 2, 3, 4, 5].map((g) => `<th>${GUNLER[g].slice(0, 3)}</th>`).join("")}</tr>
      ${Array.from({ length: n }, (_, i) => `<tr><th>${i + 1}.</th>${[1, 2, 3, 4, 5].map((g) => hucre(g, i)).join("")}</tr>`).join("")}</table>`;
  }

  function programDuzenle(ilk) {
    ekran.innerHTML = `
      ${ilk ? `<div class="koc"><span class="baykus">🦉</span><div><p>Merhaba! Ben Bilge Baykuş. Önce okuldaki haftalık ders programını girelim. Her ders saati için dersi seç; aynı ders üst üste iki saatse iki kutuya da yaz.</p><p>Bunu bir kez yapman yeterli, sonra seni her gün yönlendiririm.</p></div></div>` : ""}
      <h2>✏️ Haftalık Ders Programı</h2>
      <div class="secim"><span>Günlük ders saati</span>${[6, 7, 8].map((n) => `<button class="cip ${(P.saat || 7) === n ? "secili" : ""}" data-n="${n}">${n}</button>`).join("")}</div>
      <div class="pr-kap" id="tablo">${tabloHTML(true, P.tablo)}</div>
      <div class="satir"><button class="btn" id="kaydetP">💾 Programı Kaydet</button>${P.tablo ? `<button class="btn2" id="sifirla">🗑️ Programı Temizle</button>` : ""}</div>
      <p class="not">Program yalnızca bu cihazda saklanır.</p>`;
    const oku = () => { const t = {}; ekran.querySelectorAll("select[data-g]").forEach((s2) => { const g = +s2.dataset.g, i = +s2.dataset.i; (t[g] = t[g] || [])[i] = s2.value; }); return t; };
    ekran.querySelectorAll("[data-n]").forEach((b) => (b.onclick = () => { const t = oku(); P.saat = +b.dataset.n; $("tablo").innerHTML = tabloHTML(true, t); ekran.querySelectorAll("[data-n]").forEach((x) => x.classList.toggle("secili", x === b)); }));
    $("kaydetP").onclick = () => {
      const t = oku(), dolu = Object.values(t).some((g) => g.some(Boolean));
      if (!dolu) return alert("En az bir ders seç.");
      Object.keys(t).forEach((g) => { t[g] = t[g].slice(0, P.saat || 7); });
      P.tablo = t; kaydet();
      alert("✅ Ders programın kaydedildi!");
      gecmis.pop(); git(programAna, "📅 Ders Programım", false);
    };
    if ($("sifirla")) $("sifirla").onclick = () => { if (!confirm("Ders programı silinsin mi? (Ödevlerin ve işaretlediğin konular kalır.)")) return; P.tablo = null; kaydet(); git(() => programDuzenle(true), "✏️ Ders Programı", false); };
  }

  function odevEkle() {
    const t = bugunT();
    ekran.innerHTML = `<div class="pr-ders" style="--renk:#0d9488">
      <label>Ders</label><select id="oD">${TUM.map((d) => `<option value="${d.key}">${d.ikon} ${esc(d.ad)}</option>`).join("")}</select>
      <label>Not (isteğe bağlı)</label><input type="text" id="oM" placeholder="Örn: Proje ödevi">
      <label>Teslim günü</label><input type="date" id="oT" value="${anahtar(gunEkle(t, 1))}">
      <div class="satir"><button class="btn" id="oK">💾 Kaydet</button></div></div>`;
    $("oD").onchange = () => { $("oT").value = sonrakiDersGunu($("oD").value, t); };
    $("oD").onchange();
    $("oK").onclick = () => {
      const metin = $("oM").value.trim() || "Ödev";
      P.odevler.push({ id: "o" + Date.now(), ders: $("oD").value, metin, verildi: anahtar(t), teslim: $("oT").value || anahtar(gunEkle(t, 1)), bitti: false });
      kaydet(); gecmis.pop(); git(programAna, "📅 Ders Programım", false);
    };
  }

  function haftalikOzet() {
    const t = bugunT(), satirlar = [];
    for (let i = 6; i >= 0; i--) {
      const x = gunEkle(t, -i), k = anahtar(x), g = P.islenen[k] || {};
      const konular = Object.entries(g).map(([dk, v]) => `${dersBul(dk).ikon} ${v === "-" ? "—" : esc((konuBulId(v) || {}).ad || "")}`);
      satirlar.push(`<tr><td>${x.toLocaleDateString("tr-TR", { weekday: "short", day: "numeric", month: "short" })}${P.kontrol[k] ? " ✅" : ""}</td><td>${konular.join("<br>") || '<span class="not">—</span>'}</td></tr>`);
    }
    const hafta = P.odevler.filter((o) => o.teslim >= anahtar(gunEkle(t, -6)) && o.teslim <= anahtar(t));
    const biten = hafta.filter((o) => o.bitti).length;
    ekran.innerHTML = `
      <div class="karolar"><div class="karo"><span>Takip edilen gün</span><b>${[0, 1, 2, 3, 4, 5, 6].filter((i) => P.kontrol[anahtar(gunEkle(t, -i))]).length}/7</b></div>
      <div class="karo"><span>Bu haftanın ödevleri</span><b>${biten}/${hafta.length}</b></div>
      <div class="karo"><span>Tekrar testi</span><b>${[0, 1, 2, 3, 4, 5, 6].reduce((a, i) => a + (P.tekrar[anahtar(gunEkle(t, -i))] || 0), 0)}</b></div></div>
      <h2>Son 7 günde derste işlenenler</h2>
      <table class="tablo"><tr><th>Gün</th><th>Konular</th></tr>${satirlar.join("")}</table>
      <p class="not">Bu özeti velinle de paylaşabilirsin. 🦉 Bilge Baykuş: "${hafta.length && biten === hafta.length ? "Bu hafta bütün ödevlerini yaptın, tebrikler!" : "Her gün birkaç dakika takip, hafta sonunda büyük fark yaratır."}"</p>`;
  }

  window.PROGRAM_AC = () => git(programAna, "📅 Ders Programım");
  window.PROGRAM_TEST = { anahtar, sonrakiDersGunu: (dk, s) => sonrakiDersGunu(dk, tarih(s)), seri };
  if (window.ANA_YENILE) window.ANA_YENILE();
})();
