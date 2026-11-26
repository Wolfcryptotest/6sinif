// 🎓 Günün Özel Dersi — YKS (Netpusula) sürümü (A3). 5–12'deki ozel-ders.js'nin YKS yapısına uyarlanmış hâlidir (ana kopya değildir).
// Panelde Bilge'nin "Bugünkü dersin" kartı. Puan türündeki en zayıf YKS konusu için yaklaşık 10 dakikalık akış:
// kısa anlatım (yks/anlatim.js; sitenin 5–12. sınıf bölümlerinden, video seçimiyle aynı kaynak) + konu videosu → çözümlü örnek
// → kolaydan zora 5 soru (yanlışta önce ipucu ve ikinci deneme, yine yanlışsa çözüm ve benzer yeni soru) → konu tekrar takvimi.
// Konu seçimi: başarısı %60'ın altındaki konular (en düşük önce) → tekrar zamanı gelen konular → puan türünde sıradaki yeni konu.
// Veri (cihazda): S.ozel = { gun, key, neden, atla:[key], basla, bitti:{d,n}, say, son:[{gun,key,d,n,t}], takvim:{ key:{due,kutu} } }.
(function () {
  "use strict";
  if (typeof MUF === "undefined" || typeof S === "undefined" || typeof draw !== "function") return;
  const GUN = 864e5, SORU = 5, EK_EN_COK = 2, ARALIK = [1, 3, 7, 15, 30];
  const O = () => {
    const o = (S.ozel = S.ozel || {});
    o.son = o.son || []; o.say = o.say || 0; o.takvim = o.takvim || {}; return o;
  };
  const bugunK = () => todayKey();
  const yarinSabah = (gun) => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime() + (gun || 1) * GUN; };
  const alanDers = () => ALAN[S.alan] || ALAN.TUM;
  const js = (s) => String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, "&quot;");
  const oran = (s) => (s.t ? Math.round((s.c / s.t) * 100) : 0);

  // ---------- Konular ----------
  function tumKonular() {
    const l = [];
    MUF.forEach((m) => { if (alanDers().includes(m.d)) m.k.forEach((k, i) => { if (hasQ(m, k)) l.push({ m, k, i, key: kKey(m, k) }); }); });
    return l;
  }
  const bul = (key) => { for (const m of MUF) { const i = m.k.findIndex((k) => kKey(m, k) === key); if (i >= 0) return { m, k: m.k[i], i, key }; } return null; };
  // Yanlış defterinde tekrar zamanı gelen soru sayısı (konuya göre)
  function defterDue() {
    const say = {}, now = Date.now();
    Object.values(S.defter || {}).forEach((e) => { if (e && e.q && e.box <= 5 && e.due <= now) { const a = e.q.d + "|" + e.q.k; say[a] = (say[a] || 0) + 1; } });
    return say;
  }
  function adaylar() {
    const o = O(), now = Date.now(), tum = tumKonular(), atla = new Set(o.gun === bugunK() ? o.atla || [] : []);
    const yakin = new Set(o.son.filter((x) => x.gun !== bugunK() && now - (x.t || 0) < GUN * 1.5).map((x) => x.key));
    const l = [], gor = new Set(), ekle = (x, neden) => { if (gor.has(x.key) || atla.has(x.key)) return; gor.add(x.key); l.push({ ...x, neden }); };
    const st = (x) => kStat(x.m, x.k);
    // 1) Zayıf konular (en az 3 soru, başarı %60 altı); dün dersi yapılan konu, tekrar zamanı gelmeden yeniden seçilmez
    tum.filter((x) => { const s = st(x); return s.t >= 3 && s.c / s.t < 0.6 && !(yakin.has(x.key) && (o.takvim[x.key] || {}).due > now); })
      .sort((a, b) => { const sa = st(a), sb = st(b); return (sa.c + 1) / (sa.t + 2) - (sb.c + 1) / (sb.t + 2); }).forEach((x) => ekle(x, "zayif"));
    // 2) Tekrar zamanı gelenler: konu takvimi ya da yanlış defterinde en az 3 bekleyen soru
    const dd = defterDue();
    const dSay = (x) => (x.k[2] || []).reduce((a, n) => a + (dd[x.m.d + "|" + n] || 0), 0);
    tum.filter((x) => ((o.takvim[x.key] || {}).due || Infinity) <= now || dSay(x) >= 3)
      .sort((a, b) => ((o.takvim[a.key] || {}).due || now) - ((o.takvim[b.key] || {}).due || now) || dSay(b) - dSay(a)).forEach((x) => ekle(x, "tekrar"));
    // 3) Yeni konu: en az çalışılan dersten, hiç soru çözülmemiş ve tamamlanmamış ilk konu (TYT önce)
    const dersN = (d) => Object.entries(S.stats || {}).filter(([k]) => k.split("|")[0] === d).reduce((a, [, s]) => a + s.t, 0);
    const sira = MUF.filter((m) => alanDers().includes(m.d)).sort((a, b) => dersN(a.d) - dersN(b.d) || (a.sinav === "TYT" ? -1 : 1) - (b.sinav === "TYT" ? -1 : 1));
    sira.forEach((m) => tum.filter((x) => x.m === m && !st(x).t && !(S.konu[x.key] || {}).d).forEach((x) => ekle(x, "yeni")));
    return l;
  }
  function bugunku() {
    const o = O();
    if (o.gun === bugunK() && o.key && (o.basla || o.bitti)) { const b = bul(o.key); if (b) return { ...b, neden: o.neden }; }
    const a = adaylar()[0];
    if (!a) return null;
    const atla = o.gun === bugunK() ? o.atla || [] : [];
    Object.assign(o, { gun: bugunK(), key: a.key, neden: a.neden, atla, bitti: null, basla: 0 });
    save();
    return a;
  }
  const dersAd = (m) => `${m.sinav} ${m.ad}`;
  const nedenYazi = (x) => {
    const s = kStat(x.m, x.k);
    return x.neden === "zayif" ? `Bu konuda başarın <b>%${oran(s)}</b> (${s.c}/${s.t}). Birlikte üzerinden geçersek kısa sürede oturur.`
      : x.neden === "tekrar" ? `Bu konunun <b>tekrar zamanı geldi</b>. Şimdi tekrar edersen sınava kadar kolay kolay unutmazsın.`
      : `Sıradaki <b>yeni konun</b> bu. Önce birlikte öğrenelim, sonra kendini deneyelim.`;
  };

  // ---------- Anlatım dosyası (yalnızca ders açılınca yüklenir) ----------
  let yukleniyor = false;
  function anlatimYukle(sonra) {
    if (window.YKS_ANLAT) return sonra();
    if (yukleniyor) return;
    yukleniyor = true;
    const s = document.createElement("script"); s.src = "anlatim.js";
    s.onload = s.onerror = () => { yukleniyor = false; window.YKS_ANLAT = window.YKS_ANLAT || {}; window.YKS_ANLAT_SEC = window.YKS_ANLAT_SEC || {}; sonra(); };
    document.head.appendChild(s);
  }
  const anlatimi = (x) => { const r = ((window.YKS_ANLAT_SEC || {})[x.m.id] || [])[x.i]; return r && (window.YKS_ANLAT || {})[r] ? { ref: r, g: +r.split(":")[0], ...YKS_ANLAT[r] } : null; };
  const sinifYol = (g) => (g === 6 ? "../" : `../${g}sinif/`);

  // ---------- Zorluk ve ipucu ----------
  const duz = (h) => String(h).replace(/<sup>(.*?)<\/sup>/g, "^$1").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  const zorluk = (q) => (q.z || 2) * 1000 + duz(q.q).length + q.o.join("").length * 0.4 + (/değildir|yanlıştır|olamaz|ulaşılamaz/i.test(q.q) ? 60 : 0);
  const kelimeler = (t) => new Set(duz(t).toLocaleLowerCase("tr").match(/[\p{L}]{4,}/gu) || []);
  function ipucuBul(an, q, yanlis) {
    if (an) {
      const sk = kelimeler(q.q + " " + q.o[q.a]);
      let en = null, puan = 0;
      [...(an.o || []), ...(an.t || [])].forEach((t) => { let p = 0; kelimeler(t).forEach((w) => { if (sk.has(w)) p++; }); if (p > puan) { puan = p; en = t; } });
      if (en && puan >= 1) return `Hatırla: ${esc(en.length > 260 ? en.slice(0, 259) + "…" : en)}`;
    }
    return /(kaç|hesap|bul)/i.test(duz(q.q))
      ? `“${yanlis}” doğru değil. Verilenleri ve isteneni ayrı ayrı yaz; birim ve işaretlere dikkat ederek işlemi yeniden yap.`
      : `“${yanlis}” doğru değil. Soru kökünü yeniden oku (olumsuz ifadelerin altını çiz) ve kalan şıkları tek tek ele.`;
  }

  // ---------- Ders durumu ----------
  let D = null; // { x, an, adim, liste, i, dogru, ana, ek, deneme, yanlis:[], bitti, gor:Set, t0, p0 }
  function ac(key) {
    const x = key ? bul(key) : bugunku();
    if (!x) { toast("Bugünlük önerecek konu kalmadı. Harika çalıştın! 🎉"); return; }
    if (!x.neden) x.neden = O().neden || "yeni";
    const o = O();
    if (o.key === x.key && !o.basla) { o.basla = Date.now(); save(); }
    const s = kStat(x.m, x.k);
    D = { x, an: null, adim: 0, yukle: true, p0: s.t ? oran(s) : null };
    go("ozel");
    anlatimYukle(() => { if (!D) return; D.an = anlatimi(x); D.yukle = false; if (view === "ozel") render(); });
  }
  function sorulariHazirla() {
    const used = new Set(), x = D.x, gor = new Set();
    const l = draw({ d: [x.m.d], k: x.k[2] }, SORU + 6, used).filter((q) => { const a = duz(q.q).trim(); if (gor.has(a)) return false; gor.add(a); return true; });
    D.used = used; D.gor = gor;
    D.liste = l.slice(0, SORU).sort((a, b) => zorluk(a) - zorluk(b));
    Object.assign(D, { i: 0, dogru: 0, ana: 0, ek: 0, deneme: 0, yanlis: [], cevap: null, t0: Date.now() });
  }
  function benzer() {
    // Aynı konudan görülmemiş yeni soru: önce soru üreticisi (sayıları değişir), yoksa bankadan
    const x = D.x, s0 = D.liste[D.i];
    const gen = GEN.filter((g) => g.d === x.m.d && (x.k[2] || []).includes(g.k));
    const tercih = gen.filter((g) => g.k === s0.k);
    for (let t = 0; t < 6 && (tercih.length || gen.length); t++) {
      const q = genQ(pick(tercih.length ? tercih : gen)), a = duz(q.q).trim();
      if (!D.gor.has(a)) { D.gor.add(a); return { ...q, benzer: true }; }
    }
    const q = draw({ d: [x.m.d], k: x.k[2] }, 4, D.used).find((q) => !D.gor.has(duz(q.q).trim()));
    if (q) { D.gor.add(duz(q.q).trim()); return { ...q, benzer: true }; }
    return null;
  }

  // ---------- Görünüm ----------
  const bilge = (html) => `<div class="od-bilge"><span class="od-baykus" aria-hidden="true">🦉</span><div>${html}</div></div>`;
  const ADIM = ["📖 Anlatım", "🧩 Örnek", "✏️ Sorular", "📅 Tekrar"];
  const ust = (a) => `<div class="topbar"><div class="brand"><span class="eyebrow">Bilge · özel ders · ~10 dk</span><h1 style="font-size:1.6rem">🎓 Bugünkü Dersin</h1></div><button class="btn sm" style="white-space:nowrap;flex:none" onclick="YKS_OZEL.cik()">‹ Panel</button></div>
    <div class="ticks" style="margin-top:10px"></div>
    <div class="od-adim">${ADIM.map((t, i) => `<span class="${i < a ? "tamam" : i === a ? "simdi" : ""}">${t}</span>`).join("")}</div>`;

  function gorunum() {
    if (!D) { const x = bugunku(); if (!x) return ust(0) + bilge("Bugünlük önerecek konu kalmadı. Harika çalıştın! 🎉"); D = { x, adim: 0, yukle: true }; anlatimYukle(() => { if (!D) return; D.an = anlatimi(D.x); D.yukle = false; if (view === "ozel") render(); }); }
    if (D.yukle) return ust(0) + bilge("Dersi hazırlıyorum… 🦉");
    return [anlatimV, ornekV, soruV, sonucV][D.adim]();
  }

  // 1) Kısa anlatım + konu videosu
  function anlatimV() {
    const { x, an } = D, m = x.m;
    const t = an ? an.t : [], kisa = t.slice(0, 3), kalan = t.slice(3), oz = an ? an.o.slice(0, 5) : [];
    return ust(0) + bilge(`<b>Bilge:</b> Bugünkü dersimiz <b>${esc(x.k[0])}</b> (${esc(dersAd(m))}). ${nedenYazi(x)} Yaklaşık 10 dakika sürecek.`) +
      `<div class="sheet stack" style="margin-top:12px">
        <div class="row" style="justify-content:space-between"><h2 style="font-size:1.15rem">📖 Kısaca konu</h2><button class="btn sm" onclick="A.video('${m.id}',${x.i})">▶ Konu videosu</button></div>
        ${kisa.length ? kisa.map((p) => `<p style="margin:0">${esc(p)}</p>`).join("") : `<p style="margin:0">Bu konunun yazılı özeti henüz yok. Önce <b>konu videosunu</b> izle; sonra birlikte bir örnek çözüp sorulara geçelim.${m.not ? ` <span class="muted">${esc(m.not)}</span>` : ""}</p>`}
        ${kalan.length ? `<details class="od-devam"><summary>Devamını oku (${kalan.length} paragraf)</summary>${kalan.map((p) => `<p>${esc(p)}</p>`).join("")}</details>` : ""}
        ${an ? `<div class="note">Bu anlatım sitenin <a href="${sinifYol(an.g)}" style="color:var(--form)">${an.g}. sınıf bölümündeki</a> “${esc(an.a)}” konusundan alındı.</div>` : ""}
      </div>` +
      (oz.length ? `<div class="od-kutu od-akil"><b>📌 Aklında tut</b><ul>${oz.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>` : "") +
      `<button class="btn pri od-ileri" onclick="YKS_OZEL.adim(1)">Anladım, örneğe geçelim →</button>`;
  }

  // 2) Çözümlü örnek: önce öğrenci düşünür, sonra çözümü açar
  function ornekV() {
    const { x, an } = D;
    let soru = null, cozum = null, html = false;
    if (an && an.e) { soru = an.e[0]; cozum = an.e[1]; }
    else {
      const l = BANK.filter((b) => b.d === x.m.d && (x.k[2] || []).includes(b.k) && b.c && !/^Doğru cevap/.test(b.c) && duz(b.c).length > 30 && b.o && b.o.length >= 4);
      if (l.length) { const b = pick(l); html = true; soru = `${b.q}<ol type="A" class="od-sik">${b.o.map((o) => `<li>${o}</li>`).join("")}</ol>`; cozum = `Doğru cevap: <b>${b.o[b.a]}</b>. ${b.c}`; }
    }
    if (!soru) { D.adim = 2; sorulariHazirla(); return soruV(); }
    return ust(1) + bilge("Şimdi bir örneği birlikte çözelim. Önce kendin düşün, sonra çözüme bak. 🤔") +
      `<div class="od-kutu"><b>🧩 Örnek</b><div style="margin:8px 0">${html ? soru : esc(soru).replace(/\s{2,}(?=[A-E]\) )/g, "<br>")}</div>
        <details class="od-coz"><summary>💡 Düşündüm, çözümü göster</summary><div class="sol" style="margin-top:8px">✅ ${html ? cozum : esc(cozum)}</div></details></div>` +
      (an && an.h ? `<div class="od-kutu od-dikkat">⚠️ <b>Dikkat, sık yapılan hata:</b> ${esc(an.h)}</div>` : "") +
      `<button class="btn pri od-ileri" onclick="YKS_OZEL.adim(2)">Şimdi sıra sende: ${SORU} soru →</button>`;
  }

  // 3) Kolaydan zora 5 soru
  function soruV() {
    if (!D.liste) sorulariHazirla();
    if (!D.liste.length || D.i >= D.liste.length) { bitir(); return sonucV(); }
    const q = D.liste[D.i], n = D.liste.length, c = D.cevap;
    const seviye = q.benzer ? "🔁 Benzer soru" : ["🌱 Isınma", "🌱 Kolay", "🌿 Orta", "🌳 Biraz zor", "🏔️ Zor"][Math.min(4, Math.round((D.liste.slice(0, D.i).filter((x) => !x.benzer).length / Math.max(1, SORU - 1)) * 4))];
    const bitti = c && (c.ok || D.deneme >= 2);
    const opts = q.o.map((o, j) => {
      let cls = "opt";
      if (D.yanlis.includes(j)) cls += " wrong";
      if (bitti && j === q.a) cls += " right";
      const kapali = bitti || D.yanlis.includes(j);
      return `<button class="${cls}" ${kapali ? "disabled" : ""} onclick="YKS_OZEL.sec(${j})"><span class="bub">${LET[j]}</span><span class="otx">${o}</span></button>`;
    }).join("");
    let alt = "";
    if (c && c.ok) alt = `<div class="stack" style="margin-top:12px"><div class="verdict ok">${D.deneme === 1 ? ["Doğru!", "Harika!", "Aferin!"][D.i % 3] : "İpucuyla buldun, aferin! Bir dahaki sefere ilk denemede yaparsın."}</div><div class="sol">${q.c || ""}</div></div>`;
    else if (c && D.deneme === 1) alt = `<div class="od-kutu od-ipucu" style="margin-top:12px">🦉 <b>Bir daha dene!</b> ${c.ipucu}</div>`;
    else if (c) alt = `<div class="stack" style="margin-top:12px"><div class="verdict bad">Doğru cevap ${LET[q.a]}</div><div class="sol">${q.c || ""}</div>${c.yeni ? bilge("Sorun değil, yanlışlar öğretir. 🌱 Çözümü oku; şimdi sana <b>benzer yeni bir soru</b> soracağım.") : ""}</div>`;
    const ileri = bitti ? `<button class="btn pri od-ileri" onclick="YKS_OZEL.sonraki()">${c && c.yeni ? "Benzer soruyu çöz →" : D.i + 1 < n ? "Sonraki soru →" : "Dersi bitir →"}</button>` : "";
    return ust(2) + `<div class="od-sayac"><span>${seviye}</span><span class="mono">Soru ${D.i + 1} / ${n}</span></div>
      <div class="bar"><i style="width:${(D.i / n) * 100}%"></i></div>
      <div class="sheet" style="margin-top:12px"><div class="q-meta"><span class="pill f">${esc(DERS[q.d].ad)}</span><span class="pill">${esc(q.k)}</span>${q.src ? `<span class="pill">${q.src}. sınıf kaynağı</span>` : ""}</div>
      <div class="q-text">${q.q}</div><div class="opts">${opts}</div>${alt}</div>${ileri}`;
  }
  function sec(j) {
    const q = D.liste[D.i]; if (!q || (D.cevap && (D.cevap.ok || D.deneme >= 2)) || D.yanlis.includes(j)) return;
    const ok = j === q.a;
    D.deneme++;
    // Puana ve yanlış defterine yalnızca ilk deneme yazılır; ipucuyla bulunan cevap puanı şişirmez
    if (D.deneme === 1) { record(q, ok, Date.now() - D.t0); if (!q.benzer) { D.ana++; if (ok) D.dogru++; } }
    if (ok) D.cevap = { ok: true };
    else {
      D.yanlis.push(j);
      if (D.deneme === 1) D.cevap = { ok: false, ipucu: ipucuBul(D.an, q, duz(q.o[j]).trim()) };
      else {
        const yeni = D.ek < EK_EN_COK ? benzer() : null;
        if (yeni) { D.ek++; D.liste.splice(D.i + 1, 0, yeni); }
        D.cevap = { ok: false, yeni: !!yeni };
      }
    }
    save(); render();
  }
  function sonraki() { D.i++; D.deneme = 0; D.yanlis = []; D.cevap = null; D.t0 = Date.now(); render(); window.scrollTo(0, 0); }

  // 4) Tekrar takvimi ve sonuç
  function bitir() {
    if (D.bitti) return;
    const o = O(), key = D.x.key, d = D.dogru, n = D.ana, r = n ? d / n : 0;
    const t = o.takvim[key] || { kutu: 0 };
    // Zorlandıysa yarın tekrar; iyi gittiyse aralık büyür (1 → 3 → 7 → 15 → 30 gün)
    t.kutu = r < 0.8 ? 1 : Math.min(ARALIK.length, (t.kutu || 0) + 1);
    t.due = yarinSabah(ARALIK[t.kutu - 1]);
    o.takvim[key] = t;
    o.bitti = { d, n }; o.say++;
    if (o.key !== key) { o.key = key; o.gun = bugunK(); }
    o.son = o.son.filter((x) => x.gun !== bugunK() || x.key !== key).concat([{ gun: bugunK(), key, d, n, t: Date.now() }]).slice(-30);
    D.bitti = true; D.adim = 3;
    save();
  }
  function sonucV() {
    const { x } = D, o = O(), t = o.takvim[x.key] || {}, s = kStat(x.m, x.k);
    const d = D.dogru || 0, n = D.ana || 0, r = n ? d / n : 0;
    const gun = Math.max(1, Math.round((t.due - Date.now()) / GUN));
    const tarih = t.due ? new Date(t.due).toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long" }) : "";
    const mesaj = !n ? `Bu konuda şimdilik soru bulamadım; videoyu izleyip “İzledim” olarak işaretleyebilirsin.`
      : r >= 0.8 ? `Süper bir ders oldu! 🌟 <b>${esc(x.k[0])}</b> konusunu iyi kavradın.`
      : r >= 0.5 ? `İyi iş! 👍 <b>${esc(x.k[0])}</b> oturmaya başladı; birkaç tekrarla tam olacak.`
      : `Bugün zor bir konuyla uğraştın, bu cesaret ister. 💪 Yanlış yaptığın soruları yanlış defterine ekledim.`;
    return ust(3) + bilge(`<b>Bilge:</b> ${mesaj}`) +
      `<div class="od-sonuc"><div class="sheet"><b class="mono">${d}/${n}</b><small>ilk denemede doğru</small></div><div class="sheet"><b class="mono">${D.p0 == null ? "—" : "%" + D.p0} → %${oran(s)}</b><small>konu başarın</small></div></div>
      <div class="od-kutu od-takvim">📅 <b>Tekrar takvimine ekledim:</b> Bu konuyu ${gun <= 1 ? "<b>yarın</b>" : `<b>${gun} gün sonra</b>`} (${esc(tarih)}) sana yeniden getireceğim. Tam unutmaya başlayacağın zamanda tekrar etmek, öğrendiğini sınava kadar kalıcı yapar.</div>
      <div class="row" style="margin-top:4px"><button class="btn pri" onclick="YKS_OZEL.cik()">Panele dön</button><button class="btn" onclick="A.video('${x.m.id}',${x.i})">▶ Konu videosu</button><button class="btn" onclick="YKS_OZEL.baska()">➕ Bir ders daha</button></div>`;
  }

  // ---------- Panel kartı ----------
  function kart() {
    const x = bugunku(); if (!x) return "";
    const o = O(), tamam = o.gun === bugunK() && o.bitti && o.key === x.key;
    const alt = tamam ? `${o.bitti.d}/${o.bitti.n} doğru · tekrarı takvimine ekledim` : x.neden === "zayif" ? "eksiğini kapatalım" : x.neden === "tekrar" ? "tekrar zamanı" : "yeni konu";
    return `<div class="od-kart${tamam ? " tamam" : ""}" id="odKart"><span class="od-baykus" aria-hidden="true">🦉</span><div style="flex:1;min-width:0">
      <span class="eyebrow">🎓 BUGÜNKÜ DERSİN${tamam ? " · TAMAMLANDI ✓" : " · ~10 DK"}</span><b class="od-kb">${esc(x.k[0])}</b><span class="note">${esc(dersAd(x.m))} · ${esc(alt)}</span>
      <div class="row" style="gap:8px;margin-top:10px">${tamam ? `<button class="btn ink sm" onclick="YKS_OZEL.baska()">➕ Bir ders daha</button>` : `<button class="btn pri sm" onclick="YKS_OZEL.ac()">▶ Derse başla</button><button class="btn sm" onclick="YKS_OZEL.degis()" title="Başka bir konu öner">🔀 Başka konu</button>`}</div></div></div>`;
  }
  function atlaEkle(key) { const o = O(); o.atla = [...new Set([...(o.gun === bugunK() ? o.atla || [] : []), key])]; o.gun = bugunK(); o.key = null; o.bitti = null; o.basla = 0; }
  function degis() { const o = O(); if (o.key) atlaEkle(o.key); if (!adaylar().length) o.atla = []; save(); render(); }
  function baska() {
    const o = O(); atlaEkle(D && D.x ? D.x.key : o.key);
    save(); D = null;
    if (!adaylar().length) { toast("Bugünlük önerecek başka konu kalmadı. Harika çalıştın! 🎉"); return go("panel"); }
    ac();
  }
  function adim(a) { D.adim = a; if (a === 2) sorulariHazirla(); render(); window.scrollTo(0, 0); }
  function cik() { D = null; go("panel"); }

  const st = document.createElement("style");
  st.textContent = `
.od-kart{display:flex;gap:12px;align-items:flex-start;background:var(--sheet);border:2px solid var(--form);border-radius:var(--r);padding:14px 16px;margin-top:12px}
.od-kart.tamam{border-color:var(--ok);background:var(--ok-soft)}
.od-kart .od-kb{display:block;font-family:var(--f-display);font-size:1.2rem;margin:2px 0;line-height:1.2}
.od-baykus{font-size:2.2rem;line-height:1}
.od-bilge{display:flex;gap:12px;align-items:flex-start;background:var(--form-soft);border:1px solid var(--line);border-radius:var(--r);padding:12px 14px;margin-top:12px;line-height:1.5}
.od-bilge .od-baykus{font-size:1.9rem}
.od-adim{display:flex;gap:4px;margin-top:12px;flex-wrap:wrap}.od-adim span{flex:1;min-width:70px;text-align:center;font-size:.8rem;padding:6px 2px;border-radius:8px;background:var(--sheet);border:1px solid var(--line);color:var(--muted)}
.od-adim .simdi{background:var(--lead);color:var(--lead-ink);border-color:var(--lead);font-weight:700}.od-adim .tamam{background:var(--ok-soft);color:var(--ink)}
.od-devam summary,.od-coz summary{cursor:pointer;font-weight:600;color:var(--form);padding:4px 0}
.od-kutu{background:var(--sheet);border:1px solid var(--line);border-radius:var(--r);padding:12px 14px;margin-top:12px;line-height:1.5}
.od-akil ul{margin:6px 0 0;padding-left:20px}.od-sik{margin:6px 0 0;padding-left:22px}
.od-dikkat{border-left:5px solid var(--bad)}.od-takvim{border-left:5px solid var(--form)}.od-ipucu{border-left:5px solid var(--lead)}
.od-ileri{width:100%;margin:14px 0 10px}
.od-sayac{display:flex;justify-content:space-between;font-weight:600;color:var(--muted);margin:12px 0 6px}
.od-sonuc{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px;text-align:center}
.od-sonuc b{display:block;font-size:1.5rem}.od-sonuc small{color:var(--muted)}`;
  document.head.appendChild(st);

  window.YKS_OZEL = { kart, gorunum, ac, sec, sonraki, adim, cik, baska, degis, adaylar, bugunku, durum: () => D };
  if (view === "panel" || view === "ozel") render();
})();
