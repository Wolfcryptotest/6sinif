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

  P.plan = P.plan || {};          // { "YYYY-AA-GG": { görevId: true } }  çalışma planında işaretlenen görevler
  P.sure = P.sure || {};          // { "YYYY-AA-GG": { dersKey: dakika } }  odak sayacıyla çalışılan süre

  // Bu dosya 5–12. sınıflarda aynıdır; sınıf düzeyi SINIF.anahtar'dan (örn. "9sinif") ya da sayfa başlığından okunur.
  const NO = parseInt((window.SINIF && window.SINIF.anahtar) || document.title, 10) || 6;
  const LISE = NO >= 9;
  const derstenVar = (k) => DERSLER.some((d) => d.key === k);
  const EK_DERSLER = (LISE ? [
    { key: "beden", ad: "Beden Eğitimi ve Spor", ikon: "⚽", renk: "#16a34a" },
    { key: "sanat", ad: "Görsel Sanatlar / Müzik", ikon: "🎨", renk: "#ea580c" },
    { key: "saglik", ad: "Sağlık Bilgisi ve Trafik Kültürü", ikon: "🩺", renk: "#0891b2" },
    { key: "dil2", ad: "İkinci Yabancı Dil", ikon: "🌍", renk: "#475569" },
    { key: "felsefe", ad: "Felsefe", ikon: "🤔", renk: "#6d28d9" },
    { key: "din", ad: "Din Kültürü ve Ahlak Bilgisi", ikon: "🕌", renk: "#0ea5a4" },
    { key: "tarih", ad: "Tarih", ikon: "🏛️", renk: "#b45309" },
    { key: "secmeli", ad: "Seçmeli Ders", ikon: "📘", renk: "#64748b" },
    { key: "rehberlik", ad: "Rehberlik", ikon: "🧭", renk: "#7c3aed" }
  ] : [
    { key: "beden", ad: "Beden Eğitimi ve Spor", ikon: "⚽", renk: "#16a34a" },
    { key: "muzik", ad: "Müzik", ikon: "🎵", renk: "#db2777" },
    { key: "gorsel", ad: "Görsel Sanatlar", ikon: "🎨", renk: "#ea580c" },
    { key: "bilisim", ad: "Bilişim Teknolojileri", ikon: "💻", renk: "#0369a1" },
    ...(NO >= 7 ? [{ key: "teknoloji", ad: "Teknoloji ve Tasarım", ikon: "🛠️", renk: "#a16207" }] : []),
    { key: "secmeli", ad: "Seçmeli Ders", ikon: "📘", renk: "#64748b" },
    { key: "rehberlik", ad: "Rehberlik", ikon: "🧭", renk: "#7c3aed" }
  ]).filter((d) => !derstenVar(d.key));
  // Seçmeli dersler: sık açılanlar + öğrencinin kendi yazdıkları (P.ozelDersler)
  const SECMELI = LISE ? [
    { key: "s_l_tde", ad: "Seçmeli Türk Dili ve Edebiyatı", ikon: "📜", renk: "#9a3412" },
    { key: "s_l_mat", ad: "Seçmeli Matematik", ikon: "📐", renk: "#4338ca" },
    { key: "s_l_fiz", ad: "Seçmeli Fizik", ikon: "🧲", renk: "#1d4ed8" },
    { key: "s_l_kim", ad: "Seçmeli Kimya", ikon: "⚗️", renk: "#0f766e" },
    { key: "s_l_biy", ad: "Seçmeli Biyoloji", ikon: "🧬", renk: "#15803d" },
    { key: "s_l_tar", ad: "Seçmeli Tarih", ikon: "🏛️", renk: "#b45309" },
    { key: "s_l_cog", ad: "Seçmeli Coğrafya", ikon: "🗺️", renk: "#0369a1" },
    { key: "s_l_psi", ad: "Psikoloji", ikon: "🧠", renk: "#7c3aed" },
    { key: "s_l_sos", ad: "Sosyoloji", ikon: "👥", renk: "#be185d" },
    { key: "s_l_man", ad: "Mantık", ikon: "🔣", renk: "#334155" },
    { key: "s_l_ast", ad: "Astronomi ve Uzay Bilimleri", ikon: "🔭", renk: "#1e293b" },
    { key: "s_l_san", ad: "Sanat Tarihi", ikon: "🖼️", renk: "#a16207" },
    { key: "s_siyer", ad: "Peygamberimizin Hayatı (Siyer)", ikon: "🕋", renk: "#0f766e" },
    { key: "s_kuran", ad: "Kur'an-ı Kerim", ikon: "📗", renk: "#15803d" },
    { key: "s_tdb", ad: "Temel Dinî Bilgiler", ikon: "🕌", renk: "#0e7490" }
  ] : [
    { key: "s_siyer", ad: "Peygamberimizin Hayatı (Siyer)", ikon: "🕋", renk: "#0f766e" },
    { key: "s_kuran", ad: "Kur'an-ı Kerim", ikon: "📗", renk: "#15803d" },
    { key: "s_tdb", ad: "Temel Dinî Bilgiler", ikon: "🕌", renk: "#0e7490" },
    { key: "s_matuyg", ad: "Matematik Uygulamaları", ikon: "🧮", renk: "#4338ca" },
    { key: "s_fenuyg", ad: "Fen Bilimleri Uygulamaları", ikon: "🧪", renk: "#047857" },
    { key: "s_masal", ad: "Masal ve Destanlarımız", ikon: "🐉", renk: "#7c2d12" },
    { key: "s_okuma", ad: "Okuma Becerileri", ikon: "📚", renk: "#b45309" },
    { key: "s_yazarlik", ad: "Yazarlık ve Yazma Becerileri", ikon: "✍️", renk: "#be185d" },
    { key: "s_almanca", ad: "Almanca", ikon: "🇩🇪", renk: "#475569" },
    { key: "s_satranc", ad: "Satranç", ikon: "♟️", renk: "#1f2937" }
  ];
  const SAATLER = LISE ? [6, 7, 8, 9, 10] : [6, 7, 8], VARS_SAAT = LISE ? 8 : 7;
  // Okul günü önerilen günlük çalışma süresi (dk); hafta sonu +30 dk. Veli/öğrenci değiştirebilir (P.hedefDk).
  const HEDEF_DK = { 5: 60, 6: 60, 7: 75, 8: 120, 9: 90, 10: 105, 11: 120, 12: 180 }[NO] || 75;
  P.ozelDersler = P.ozelDersler || []; // [{ key: "o_...", ad, ikon, renk }]
  // Ana sayfada gösterilecek seçmeliler: ders programına yazılmış ve içeriği olanlar (secmeli.js)
  window.PROGRAM_SECMELI = () => {
    const yazili = new Set(Object.values(P.tablo || {}).flat().filter(Boolean));
    return SECMELI.filter((d) => yazili.has(d.key) && window.ICERIK[d.key]);
  };
  // Ana sayfadaki "Seçmeli Dersler" bölümü: içeriği olan bütün seçmeliler, programa yazılanlar önde
  window.PROGRAM_SECMELI_TUM = () => {
    const yazili = new Set(Object.values(P.tablo || {}).flat().filter(Boolean));
    return SECMELI.filter((d) => window.ICERIK[d.key]).map((d) => ({ d, programda: yazili.has(d.key) })).sort((x, y) => y.programda - x.programda);
  };
  const tumDersler = () => [...DERSLER, ...EK_DERSLER, ...SECMELI, ...P.ozelDersler];
  const dersSecenek = (v) => `<optgroup label="Dersler">${[...DERSLER, ...EK_DERSLER.filter((d) => d.key !== "secmeli")].map((d) => `<option value="${d.key}" ${d.key === v ? "selected" : ""}>${d.ikon} ${esc(d.ad)}</option>`).join("")}</optgroup>
    <optgroup label="Seçmeli dersler">${[...SECMELI, ...P.ozelDersler, EK_DERSLER.find((d) => d.key === "secmeli")].map((d) => `<option value="${d.key}" ${d.key === v ? "selected" : ""}>${d.ikon} ${esc(d.ad)}</option>`).join("")}</optgroup>`;
  const dersBul = (k) => tumDersler().find((d) => d.key === k) || { key: k, ad: k, ikon: "📘", renk: "#64748b" };
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
.pl-ust{display:flex;flex-direction:column;gap:6px;margin-bottom:10px}
.pl-bar{height:12px;border-radius:99px;background:var(--sinir);overflow:hidden}.pl-bar div{height:100%;background:linear-gradient(90deg,#0d9488,#22c55e);transition:width .3s}
.pl-gorev{display:flex;gap:10px;align-items:center;border:1px solid var(--sinir);border-radius:14px;padding:10px 12px;margin-bottom:8px;background:var(--kart)}
.pl-gorev input[type=checkbox]{width:26px;height:26px;flex:none}
.pl-gorev .pl-metin{flex:1;min-width:0}.pl-gorev small{display:block;color:var(--soluk)}
.pl-gorev.bitti{opacity:.6}.pl-gorev.bitti b{text-decoration:line-through}
.pl-gorev .btn2{padding:8px 10px;white-space:nowrap}
.od-saat{font-size:min(26vw,120px);font-weight:800;text-align:center;font-variant-numeric:tabular-nums;letter-spacing:2px;margin:18px 0 4px;color:#0d9488}
.od-saat.mola{color:#f59e0b}.od-durum{text-align:center;font-size:17px;min-height:26px}
.pr-ac{margin-top:10px}.pr-ac summary{cursor:pointer;color:#0d9488;font-weight:600;padding:6px 0}.pr-ac[open] summary{margin-bottom:6px}`;
  document.head.appendChild(st);

  // ---------- Ana sayfa kartı ----------
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.unshift((kutu) => {
    const t = bugunT(), bekleyen = P.odevler.filter((o) => !o.bitti).length, bd = tekil(gunDersleri(t));
    const b = document.createElement("button");
    b.className = "ozel-kart program";
    const alt = !P.tablo ? "Ders programını gir, seni her gün yönlendireyim"
      : (() => { const k = anahtar(t), pl = planUret(), bt = pl.filter((g) => gorevBitti(g, k)).length;
        return `📋 Plan: ${bt}/${pl.length} görev · ⏱️ ${sureBugun(k)}/${hedefDk(t)} dk${bekleyen ? ` · ${bekleyen} ödev bekliyor` : ""}`; })();
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
      <h2>📋 Bugünün Çalışma Planı</h2><div id="plan"></div>
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

    planCiz($("plan"));
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

    $("haftaTekrar").onclick = haftaTekrarAc;
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

  // ---------- Bugünün Çalışma Planı ----------
  // Ders programı, ödevler, derste işlenen konular, yaklaşan sınavlar ve zayıf konulardan her gün otomatik hazırlanır.
  // Öncelik: geciken/yarınki ödev → bugün işlenen konunun tekrarı → yaklaşan sınav → zayıf konu → yarına hazırlık → yanlışlar → okuma.
  const gunKaldi = (s) => Math.round((tarih(s) - bugunT()) / 86400000);
  const hedefDk = (t) => (P.hedefDk || HEDEF_DK) + (t.getDay() === 0 || t.getDay() === 6 ? 30 : 0);
  const sureBugun = (k) => Object.values(P.sure[k] || {}).reduce((a, x) => a + x, 0);
  function sinavlar() {
    const S = window.SINIF || {}, bk = anahtar(bugunT()), l = [];
    [...(S.ortak || []), ...(S.okul || [])].forEach((o) => { if (o.ders && o.bas && (o.bit || o.bas) >= bk) l.push({ ders: o.ders, tarih: o.bas, ad: `${dersBul(o.ders).ad} yazılısı` }); });
    if (S.lgs && S.lgs.tarih >= bk) l.push({ tarih: S.lgs.tarih, ad: "LGS", buyuk: "lgs" });
    if (S.yks && S.yks.tarih >= bk) l.push({ tarih: S.yks.tarih, ad: "YKS", buyuk: "yks" });
    return l.sort((a, b) => a.tarih.localeCompare(b.tarih));
  }
  function zayifKonular(n) {
    const ist = kayit.istatistik || {}, l = [];
    for (const [id, x] of Object.entries(ist)) {
      if (!x || x.s < 4) continue;
      const k = konuBulId(id), o = x.d / x.s;
      if (k && o < 0.7) l.push({ k, o });
    }
    return l.sort((a, b) => a.o - b.o).slice(0, n);
  }
  function planUret() {
    const t = bugunT(), bk = anahtar(t), saat = new Date().getHours(), gun = t.getDay(), L = [];
    const bugunD = tekil(gunDersleri(t)), yarinT = okulGunuSonra(t), yarinD = tekil(gunDersleri(yarinT)), yk = anahtar(yarinT);
    const ekle = (o) => { if (!L.some((x) => x.id === o.id)) L.push(o); };
    // 1) Ödevler
    P.odevler.filter((o) => !o.bitti && o.teslim <= yk).sort((a, b) => a.teslim.localeCompare(b.teslim)).forEach((o) => ekle({
      id: "odev-" + o.id, ikon: "📝", ders: o.ders, dk: 25, oncelik: o.teslim < bk ? 0 : 1,
      baslik: `${dersBul(o.ders).ad} ödevi${o.metin !== "Ödev" ? ": " + o.metin : ""}`,
      alt: o.teslim < bk ? "⚠️ Teslim tarihi geçti" : "Teslim: " + tarihYaz(o.teslim), odev: o.id }));
    // 2) Derste işlenen konuları işaretle ve tekrar et
    if (bugunD.length && saat >= 12) {
      const eksik = bugunD.filter((d) => ICERIK[d] && !(P.islenen[bk] || {})[d]);
      if (eksik.length) ekle({ id: "isaret", ikon: "✔️", dk: 3, oncelik: 1, baslik: "Bugün derste işlenen konuları işaretle", alt: eksik.map((d) => dersBul(d).ad).join(", "), otomatik: () => !bugunD.some((d) => ICERIK[d] && !(P.islenen[bk] || {})[d]) });
    }
    Object.entries(P.islenen[bk] || {}).forEach(([dk, v]) => {
      const k = v !== "-" && konuBulId(v);
      if (k) ekle({ id: "tk-" + k.id, ikon: "🔁", ders: dk, dk: 15, oncelik: 2, baslik: `${dersBul(dk).ad}: "${k.ad}" tekrarı`, alt: "Özeti oku + 5 soru çöz", eylem: () => tekrarAc(k.id) });
    });
    // 3) Yaklaşan sınavlar
    sinavlar().forEach((s) => {
      const g = gunKaldi(s.tarih);
      if (s.buyuk) {
        const tam = gun === 6 || (g <= 60 && gun === 3);
        ekle({ id: "snv-" + s.buyuk + (tam ? "-tam" : ""), ikon: s.buyuk === "lgs" ? "🎯" : "🎓", dk: tam ? (s.buyuk === "lgs" ? 80 : 100) : 25, oncelik: g <= 30 ? 2 : 3,
          baslik: tam ? `${s.ad} deneme sınavı` : `${s.ad} mini deneme (10 soru)`, alt: `${s.ad}'ye ${g} gün kaldı`,
          eylem: s.buyuk === "lgs" ? window.LGS_AC : window.YKS_AC });
      }
    });
    // Yazılılar: en yakın 2 tanesi ayrı görev, haftanın diğerleri tek görevde (plan şişmesin)
    const yz = sinavlar().filter((s) => !s.buyuk && gunKaldi(s.tarih) <= 7);
    const gunYaz = (g) => (g === 0 ? "bugün!" : g === 1 ? "yarın!" : g + " gün kaldı");
    yz.slice(0, 2).forEach((s) => { const g = gunKaldi(s.tarih); ekle({ id: "yz-" + s.ders + s.tarih, ikon: "📅", ders: s.ders, dk: g <= 2 ? 45 : 30, oncelik: g <= 2 ? 1 : 2,
      baslik: `${s.ad}: ${gunYaz(g)}`, alt: "Kapsamdaki konulardan prova yap",
      eylem: window.YAZILI_AC || (ICERIK[s.ders] ? () => git(() => uniteler(s.ders), dersBul(s.ders).ad) : null) }); });
    if (yz.length > 2) ekle({ id: "yz-diger", ikon: "🗓️", dk: 20, oncelik: 3, baslik: `Bu hafta ${yz.length - 2} yazılı daha var`, alt: yz.slice(2).map((s) => `${dersBul(s.ders).ad} (${gunYaz(gunKaldi(s.tarih))})`).join(", ") + " — özet notlara göz at", eylem: window.YAZILI_AC });
    // 4) Zayıf konular (en az 4 soru çözülmüş, başarı %70'in altında)
    zayifKonular(3).filter(({ k }) => !L.some((x) => x.id === "tk-" + k.id)).slice(0, 2).forEach(({ k, o }) => ekle({ id: "zy-" + k.id, ikon: "🎯", dk: 15, oncelik: 3, baslik: `Zayıf konu: ${k.ad}`, alt: `Başarın %${Math.round(o * 100)} — konuyu tekrar et`, eylem: () => tekrarAc(k.id) }));
    // 5) Yarına hazırlık
    yarinD.forEach((dk) => {
      const son = P.son[dk] && konuBulId(P.son[dk]);
      if (son) ekle({ id: "hz-" + dk, ikon: "🎒", ders: dk, dk: 10, oncelik: 4, baslik: `${dersBul(dk).ad} dersine hazırlık`, alt: `Kaldığımız yer: ${son.ad}`, eylem: () => git(() => konuSayfa(son), son.ad) });
    });
    // 6) Yanlışlar
    const at = window.ARALIKLI_BUGUN ? ARALIKLI_BUGUN() : 0, yn = (kayit.yanlislar || []).length;
    if (at) ekle({ id: "aralikli", ikon: "🧠", dk: Math.min(15, 3 + at), oncelik: 2, baslik: `Aralıklı tekrar (${Math.min(15, at)} soru)`, alt: "Unutmamak için zamanı gelen yanlışların", eylem: window.ARALIKLI_AC });
    else if (!window.ARALIKLI_BUGUN && yn && typeof yanlisSorular === "function") ekle({ id: "yanlis", ikon: "🔁", dk: 10, oncelik: 4, baslik: `Yanlışlarını tekrar et (${yn} soru)`, alt: "Yanlış yaptığın sorular bekliyor", eylem: () => git(() => test(yanlisSorular(), "Yanlışları Tekrar", true), "Yanlışları Tekrar") });
    // 7) Hafta sonu: haftanın tekrarı
    if (gun === 0 || gun === 6) ekle({ id: "hafta", ikon: "🗓️", dk: 20, oncelik: 3, baslik: "Haftanın tekrarı (10 soru)", alt: "Bu hafta derste işlenen konulardan", eylem: haftaTekrarAc });
    // 8) Okuma
    ekle({ id: "okuma", ikon: "📖", dk: NO <= 8 ? 20 : 30, oncelik: 5, baslik: NO <= 8 && window.HIKAYELER ? "Günün hikâyesini oku" : `${NO <= 8 ? 20 : 30} dakika kitap oku`, alt: "Her gün okumak bütün dersleri kolaylaştırır" });
    // Hedef süreye göre kırp: öncelik ≤ 2 her zaman, diğerleri hedef dolana kadar
    L.sort((a, b) => a.oncelik - b.oncelik);
    const hedef = hedefDk(t), secilen = []; let top = 0;
    for (const g of L) { if (g.oncelik <= 2 || top + g.dk <= hedef + 10 || g.id === "okuma") { secilen.push(g); top += g.dk; } }
    return secilen;
  }
  const gorevBitti = (g, bk) => (g.odev ? !!(P.odevler.find((o) => o.id === g.odev) || {}).bitti : g.otomatik ? g.otomatik() : !!(P.plan[bk] || {})[g.id]);
  function haftaTekrarAc() {
    const t = bugunT(), ids = [];
    for (let i = 0; i < 7; i++) Object.values(P.islenen[anahtar(gunEkle(t, -i))] || {}).forEach((v) => v !== "-" && !ids.includes(v) && ids.push(v));
    const K = ids.map(konuBulId).filter(Boolean);
    if (!K.length) return alert("Son 7 günde işaretlenmiş konu yok. Derste işlenen konuları işaretledikçe haftanın tekrarı hazırlanır.");
    tekrarSay();
    git(() => test(() => { const l = []; K.forEach((k, i) => l.push(...soruHazirla(k, Math.floor(10 / K.length) + (i < 10 % K.length ? 1 : 0)))); return karistir(l).slice(0, 10); }, "Haftanın Tekrarı", false, null), "🔁 Haftanın Tekrarı");
  }
  function planCiz(kutu) {
    const t = bugunT(), bk = anahtar(t), plan = planUret();
    const biten = plan.filter((g) => gorevBitti(g, bk)).length, dk = sureBugun(bk), hedef = hedefDk(t);
    kutu.innerHTML = `
      <div class="pl-ust"><div class="pl-bar"><div style="width:${plan.length ? Math.round((biten / plan.length) * 100) : 0}%"></div></div>
        <span><b>${biten}/${plan.length}</b> görev · ⏱️ <b>${dk}</b>/${hedef} dk çalıştın</span></div>
      ${plan.map((g) => { const b = gorevBitti(g, bk); return `<div class="pl-gorev ${b ? "bitti" : ""}">
        <input type="checkbox" data-pl="${g.id}" ${b ? "checked" : ""} ${g.otomatik ? "disabled" : ""} aria-label="Yaptım">
        <span class="pl-metin"><b>${g.ikon} ${esc(g.baslik)}</b><small>${esc(g.alt || "")} · ~${g.dk} dk</small></span>
        ${g.eylem && !b ? `<button class="btn2" data-pe="${g.id}">Başla ▶</button>` : ""}
        <button class="btn2" data-po="${g.id}" title="Odak sayacıyla çalış" aria-label="Odak sayacı">⏱️</button></div>`; }).join("")}
      <div class="satir" style="margin-top:6px"><button class="btn" id="plOdak">⏱️ Odak Sayacı</button><button class="btn2" id="plHedef">🎯 Günlük hedef: ${P.hedefDk || HEDEF_DK} dk</button></div>
      <p class="not">Plan her gün ders programına, ödevlerine, derste işlenen konulara, yaklaşan sınavlara ve zayıf konularına göre yeniden hazırlanır.</p>`;
    const bul = (id) => plan.find((g) => g.id === id);
    kutu.querySelectorAll("[data-pl]").forEach((c) => (c.onchange = () => {
      const g = bul(c.dataset.pl); if (!g) return;
      if (g.odev) { const o = P.odevler.find((x) => x.id === g.odev); if (o) { o.bitti = c.checked; o.bittiT = c.checked ? bk : null; } }
      else { P.plan[bk] = P.plan[bk] || {}; if (c.checked) P.plan[bk][g.id] = true; else delete P.plan[bk][g.id]; }
      kaydet();
      if (c.checked && plan.every((x) => x === g || gorevBitti(x, bk))) kutla();
      git(programAna, "📅 Ders Programım", false);
    }));
    kutu.querySelectorAll("[data-pe]").forEach((b) => (b.onclick = () => { const g = bul(b.dataset.pe); if (g && g.eylem) { P.plan[bk] = P.plan[bk] || {}; P.plan[bk][g.id] = true; kaydet(); g.eylem(); } }));
    kutu.querySelectorAll("[data-po]").forEach((b) => (b.onclick = () => { const g = bul(b.dataset.po); git(() => odak(g && g.ders, g && g.id), "⏱️ Odak Sayacı"); }));
    kutu.querySelector("#plOdak").onclick = () => git(() => odak(), "⏱️ Odak Sayacı");
    kutu.querySelector("#plHedef").onclick = () => {
      const v = parseInt(prompt(`Okul günleri için günlük çalışma hedefi (dakika). Hafta sonu +30 dk eklenir.\n${NO}. sınıf için önerilen: ${HEDEF_DK} dk`, P.hedefDk || HEDEF_DK), 10);
      if (v >= 15 && v <= 600) { P.hedefDk = v; kaydet(); git(programAna, "📅 Ders Programım", false); }
    };
  }

  // ---------- Odak Sayacı (Pomodoro) ----------
  // Süre bitince çalışılan dakika derse yazılır (P.sure). Ekranı kapatmamak için Wake Lock denenir.
  const ODAK_SURE = NO <= 6 ? [15, 20, 25] : NO <= 8 ? [20, 25, 30, 40] : [25, 40, 50];
  let odakZaman = null, kilit = null;
  function bip(n) {
    try { const a = new (window.AudioContext || window.webkitAudioContext)(); for (let i = 0; i < n; i++) { const o = a.createOscillator(), g = a.createGain(); o.frequency.value = 880; o.connect(g); g.connect(a.destination); g.gain.setValueAtTime(0.25, a.currentTime + i * 0.4); o.start(a.currentTime + i * 0.4); o.stop(a.currentTime + i * 0.4 + 0.25); } } catch (e) {}
    try { navigator.vibrate && navigator.vibrate([300, 150, 300]); } catch (e) {}
  }
  function odak(dersKey, gorevId) {
    clearInterval(odakZaman);
    const varsDk = P.odakDk && ODAK_SURE.includes(P.odakDk) ? P.odakDk : ODAK_SURE[Math.min(1, ODAK_SURE.length - 1)];
    let ders = dersKey || P.odakDers || "", sureDk = varsDk, kalan = sureDk * 60, calisiyor = false, bitis = 0, gecen = 0, mola = false;
    const bk = anahtar(bugunT());
    ekran.innerHTML = `
      <div class="koc"><span class="baykus">⏱️</span><div><p>Telefonu uzağa koy, tek bir işe odaklan. Süre bitince kısa bir mola ver. Bu yönteme <b>Pomodoro</b> denir: kısa ve odaklı çalışmak, uzun ve dağınık çalışmaktan daha verimlidir.</p></div></div>
      <div class="pr-ders" style="--renk:#0d9488"><label>Hangi derse çalışıyorsun?</label><select id="odDers"><option value="">— Genel çalışma —</option>${dersSecenek(ders)}</select>
        <label>Süre</label><div class="secim" style="margin:0">${ODAK_SURE.map((d) => `<button class="cip ${d === sureDk ? "secili" : ""}" data-od="${d}">${d} dk</button>`).join("")}</div></div>
      <div class="od-saat" id="odSaat">${String(sureDk).padStart(2, "0")}:00</div>
      <div class="od-durum not" id="odDurum">Hazır olunca başlat.</div>
      <div class="satir" style="justify-content:center"><button class="btn" id="odBas">▶ Başlat</button><button class="btn2" id="odBit">⏹ Bitir ve kaydet</button></div>
      <p class="not" style="text-align:center">Bugün toplam: <b id="odTop">${sureBugun(bk)}</b> dk · Hedef: ${hedefDk(bugunT())} dk</p>`;
    const ciz = () => { const m = Math.max(0, Math.ceil(kalan)); $("odSaat").textContent = `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`; $("odSaat").classList.toggle("mola", mola); };
    const kaydetSure = () => {
      const dk = Math.floor(gecen / 60); gecen = 0;
      if (dk < 1) return 0;
      const k = ders || "genel"; P.sure[bk] = P.sure[bk] || {}; P.sure[bk][k] = (P.sure[bk][k] || 0) + dk;
      if (gorevId) { P.plan[bk] = P.plan[bk] || {}; P.plan[bk][gorevId] = true; }
      kaydet(); if ($("odTop")) $("odTop").textContent = sureBugun(bk); return dk;
    };
    const durdur = () => { calisiyor = false; clearInterval(odakZaman); $("odBas").textContent = "▶ Devam"; try { kilit && kilit.release(); } catch (e) {} kilit = null; };
    const tik = () => {
      if (!document.body.contains($("odSaat") || document.createElement("i"))) { clearInterval(odakZaman); if (!mola) kaydetSure(); return; }
      const simdi = Date.now(), once = kalan; kalan = (bitis - simdi) / 1000; if (!mola) gecen += Math.max(0, once - kalan);
      if (kalan <= 0) {
        durdur(); bip(3);
        if (!mola) {
          const dk = kaydetSure(); mola = true; kalan = (sureDk >= 40 ? 10 : 5) * 60;
          $("odDurum").innerHTML = `✅ ${dk} dakika çalıştın! Şimdi <b>${sureDk >= 40 ? 10 : 5} dakika mola</b>: kalk, su iç, gözlerini dinlendir.`;
          $("odBas").textContent = "▶ Molayı başlat";
        } else { mola = false; kalan = sureDk * 60; $("odDurum").textContent = "Mola bitti. Hazırsan yeni bir tura başla!"; $("odBas").textContent = "▶ Yeni tur"; }
      }
      ciz();
    };
    $("odDers").onchange = () => { ders = $("odDers").value; P.odakDers = ders; kaydet(); };
    ekran.querySelectorAll("[data-od]").forEach((b) => (b.onclick = () => {
      if (calisiyor) return; sureDk = +b.dataset.od; P.odakDk = sureDk; kaydet();
      if (!mola) { kalan = sureDk * 60; ciz(); }
      ekran.querySelectorAll("[data-od]").forEach((x) => x.classList.toggle("secili", x === b));
    }));
    $("odBas").onclick = async () => {
      if (calisiyor) return durdur();
      calisiyor = true; bitis = Date.now() + kalan * 1000; $("odBas").textContent = "⏸ Duraklat";
      $("odDurum").textContent = mola ? "Mola zamanı… ekrandan uzaklaş 😊" : "Odaklan! Süre bitince haber vereceğim.";
      try { kilit = navigator.wakeLock ? await navigator.wakeLock.request("screen") : null; } catch (e) { kilit = null; }
      odakZaman = setInterval(tik, 250);
    };
    $("odBit").onclick = () => { durdur(); const dk = mola ? 0 : kaydetSure(); alert(dk ? `✅ ${dk} dakika kaydedildi.` : "1 dakikadan kısa çalışma kaydedilmez."); gecmis.pop(); git(programAna, "📅 Ders Programım", false); };
    ciz();
  }

  function tabloHTML(duzenle, taslak) {
    const tablo = taslak || P.tablo || {}, n = duzenle ? (P.saat || VARS_SAAT) : Math.max(1, ...[1, 2, 3, 4, 5].map((g) => (tablo[g] || []).filter(Boolean).length ? (tablo[g] || []).length : 0)), bg = new Date().getDay();
    const hucre = (g, i) => {
      const v = (tablo[g] || [])[i] || "";
      if (!duzenle) { const d = v ? dersBul(v) : null; return `<td class="${g === bg ? "bugun" : ""}">${d ? `${d.ikon}<br><small>${esc(d.ad.split(" ")[0])}</small>` : ""}</td>`; }
      return `<td><select data-g="${g}" data-i="${i}" aria-label="${GUNLER[g]} ${i + 1}. ders"><option value="">—</option>${dersSecenek(v)}</select></td>`;
    };
    return `<table class="pr-tablo"><tr><th></th>${[1, 2, 3, 4, 5].map((g) => `<th>${GUNLER[g].slice(0, 3)}</th>`).join("")}</tr>
      ${Array.from({ length: n }, (_, i) => `<tr><th>${i + 1}.</th>${[1, 2, 3, 4, 5].map((g) => hucre(g, i)).join("")}</tr>`).join("")}</table>`;
  }

  let taslak = null;
  function programDuzenle(ilk, tsl) {
    ekran.innerHTML = `
      ${ilk ? `<div class="koc"><span class="baykus">🦉</span><div><p>Merhaba! Ben Bilge Baykuş. Önce okuldaki haftalık ders programını girelim. Her ders saati için dersi seç; aynı ders üst üste iki saatse iki kutuya da yaz.</p><p>Bunu bir kez yapman yeterli, sonra seni her gün yönlendiririm.</p></div></div>` : ""}
      <h2>✏️ Haftalık Ders Programı</h2>
      <div class="secim"><span>Günlük ders saati</span>${SAATLER.map((n) => `<button class="cip ${(P.saat || VARS_SAAT) === n ? "secili" : ""}" data-n="${n}">${n}</button>`).join("")}</div>
      <div class="pr-kap" id="tablo">${tabloHTML(true, tsl || P.tablo)}</div>
      <p class="not">Seçmeli derslerin listede yoksa ekle; sonra kutulardan seçebilirsin.${P.ozelDersler.length ? " Eklediklerin: " + P.ozelDersler.map((d) => esc(d.ad)).join(", ") : ""}</p>
      <div class="satir" style="margin-top:0"><button class="btn2" id="secEkle">➕ Seçmeli ders ekle</button>${P.ozelDersler.length ? `<button class="btn2" id="secSil">🗑️ Eklediğim seçmeliyi sil</button>` : ""}</div>
      <div class="satir"><button class="btn" id="kaydetP">💾 Programı Kaydet</button>${P.tablo ? `<button class="btn2" id="sifirla">🗑️ Programı Temizle</button>` : ""}</div>
      <p class="not">Program yalnızca bu cihazda saklanır.</p>`;
    const oku = () => { const t = {}; ekran.querySelectorAll("select[data-g]").forEach((s2) => { const g = +s2.dataset.g, i = +s2.dataset.i; (t[g] = t[g] || [])[i] = s2.value; }); return t; };
    ekran.querySelectorAll("[data-n]").forEach((b) => (b.onclick = () => { const t = oku(); P.saat = +b.dataset.n; $("tablo").innerHTML = tabloHTML(true, t); ekran.querySelectorAll("[data-n]").forEach((x) => x.classList.toggle("secili", x === b)); }));
    $("secEkle").onclick = () => {
      const ad = (prompt(LISE ? "Seçmeli dersin adı (örn: Bilgi Kuramı, Girişimcilik, Halk Kültürü):" : "Seçmeli dersin adı (örn: Peygamberimizin Hayatı, Satranç, Drama):") || "").trim().slice(0, 40);
      if (!ad) return;
      if (tumDersler().some((d) => d.ad.toLocaleLowerCase("tr") === ad.toLocaleLowerCase("tr"))) return alert("Bu ders listede zaten var; kutulardan seçebilirsin.");
      P.ozelDersler.push({ key: "o_" + Date.now(), ad, ikon: "📘", renk: "#7c3aed" }); kaydet();
      taslak = oku(); git(() => programDuzenle(ilk, taslak), "✏️ Ders Programı", false);
    };
    if ($("secSil")) $("secSil").onclick = () => {
      const ad = prompt("Silinecek seçmeli dersin adını yaz:\n" + P.ozelDersler.map((d) => "• " + d.ad).join("\n")); if (!ad) return;
      const d = P.ozelDersler.find((x) => x.ad.toLocaleLowerCase("tr") === ad.trim().toLocaleLowerCase("tr")); if (!d) return alert("Bu adla eklenmiş ders bulunamadı.");
      P.ozelDersler = P.ozelDersler.filter((x) => x !== d); taslak = oku();
      Object.keys(taslak).forEach((g) => (taslak[g] = taslak[g].map((v) => (v === d.key ? "" : v))));
      kaydet(); git(() => programDuzenle(ilk, taslak), "✏️ Ders Programı", false);
    };
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
      <label>Ders</label><select id="oD">${dersSecenek("")}</select>
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
      <div class="karo"><span>Tekrar testi</span><b>${[0, 1, 2, 3, 4, 5, 6].reduce((a, i) => a + (P.tekrar[anahtar(gunEkle(t, -i))] || 0), 0)}</b></div>
      <div class="karo"><span>Odaklı çalışma</span><b>${[0, 1, 2, 3, 4, 5, 6].reduce((a, i) => a + sureBugun(anahtar(gunEkle(t, -i))), 0)} dk</b></div></div>
      ${(() => {
        const gunler = [6, 5, 4, 3, 2, 1, 0].map((i) => { const x = gunEkle(t, -i), k = anahtar(x); return { ad: x.toLocaleDateString("tr-TR", { weekday: "short" }), dk: sureBugun(k), hedef: hedefDk(x) }; });
        const enCok = Math.max(1, ...gunler.map((g) => Math.max(g.dk, g.hedef)));
        const dersTop = {}; [0, 1, 2, 3, 4, 5, 6].forEach((i) => Object.entries(P.sure[anahtar(gunEkle(t, -i))] || {}).forEach(([d, m]) => (dersTop[d] = (dersTop[d] || 0) + m)));
        const dersler = Object.entries(dersTop).sort((a, b) => b[1] - a[1]);
        return `<h2>⏱️ Son 7 günün çalışma süresi</h2>
          <div class="grafik-kart"><div style="display:flex;align-items:flex-end;gap:8px;height:140px">${gunler.map((g) => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%">
            <small>${g.dk}</small><div title="Hedef ${g.hedef} dk" style="width:100%;border-radius:8px 8px 0 0;background:${g.dk >= g.hedef ? "#22c55e" : "#0d9488"};height:${Math.round((g.dk / enCok) * 100)}%;min-height:2px"></div><small>${esc(g.ad)}</small></div>`).join("")}</div>
          <p class="not">Yeşil sütun: o günün hedefine ulaşıldı.</p></div>
          ${dersler.length ? `<table class="tablo"><tr><th>Ders</th><th>Süre</th></tr>${dersler.map(([d, m]) => `<tr><td>${d === "genel" ? "📘 Genel çalışma" : dersBul(d).ikon + " " + esc(dersBul(d).ad)}</td><td>${m} dk</td></tr>`).join("")}</table>` : '<p class="not">Odak Sayacı ile çalıştıkça süreler burada görünür.</p>'}`;
      })()}
      <h2>Son 7 günde derste işlenenler</h2>
      <table class="tablo"><tr><th>Gün</th><th>Konular</th></tr>${satirlar.join("")}</table>
      <p class="not">Bu özeti velinle de paylaşabilirsin. 🦉 Bilge Baykuş: "${hafta.length && biten === hafta.length ? "Bu hafta bütün ödevlerini yaptın, tebrikler!" : "Her gün birkaç dakika takip, hafta sonunda büyük fark yaratır."}"</p>`;
  }

  window.PROGRAM_DERS_AD = (k) => dersBul(k).ad;
  window.PROGRAM_AC = () => git(programAna, "📅 Ders Programım");
  window.PROGRAM_TEST = { anahtar, sonrakiDersGunu: (dk, s) => sonrakiDersGunu(dk, tarih(s)), seri };
  if (window.ANA_YENILE) window.ANA_YENILE();
})();
