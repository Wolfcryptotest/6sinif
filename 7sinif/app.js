// 7. Sınıf Çalışma Merkezi - uygulama mantığı
const DERSLER = [
  { key: "turkce", ad: "Türkçe", ikon: "📖", renk: "#e5484d" },
  { key: "matematik", ad: "Matematik", ikon: "➗", renk: "#4f7cff" },
  { key: "fen", ad: "Fen Bilimleri", ikon: "🔬", renk: "#22a06b" },
  { key: "sosyal", ad: "Sosyal Bilgiler", ikon: "🌍", renk: "#f59e0b" },
  { key: "ingilizce", ad: "İngilizce", ikon: "🔤", renk: "#8b5cf6" },
  { key: "din", ad: "Din Kültürü", ikon: "🕌", renk: "#0ea5a4" }
];

const $ = (id) => document.getElementById(id);
if (window.SES) SES.baslat("7sinif", 1);
const ekran = $("ekran");
const gecmis = [];

// --- Kayıt (localStorage, hata olursa bellekte devam) ---
let kayit = { cozulen: {}, yanlislar: [] };
try { kayit = JSON.parse(localStorage.getItem("7sinif") || "null") || kayit; } catch (e) {}
function kaydet() { try { localStorage.setItem("7sinif", JSON.stringify(kayit)); } catch (e) {} }

// --- İlerleme takibi ve günlük hedef ---
kayit.istatistik = kayit.istatistik || {};          // konuId -> { s: çözülen, d: doğru }
kayit.gunluk = kayit.gunluk || {};                  // "YYYY-MM-DD" -> { soru, dogru, kelime, sure (sn) }
kayit.hedef = kayit.hedef || { soru: 20, kelime: 10 };
function gunAnahtar(t = new Date()) {
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
}
function bugun() {
  const k = gunAnahtar();
  if (!kayit.gunluk[k]) kayit.gunluk[k] = { soru: 0, dogru: 0, kelime: 0, sure: 0 };
  return kayit.gunluk[k];
}
const hedefTamam = (g) => !!g && g.soru >= kayit.hedef.soru && g.kelime >= kayit.hedef.kelime;
function seriHesapla() {
  let n = 0;
  const d = new Date();
  if (!hedefTamam(kayit.gunluk[gunAnahtar(d)])) d.setDate(d.getDate() - 1); // bugün henüz bitmediyse dünden say
  while (hedefTamam(kayit.gunluk[gunAnahtar(d)])) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function enUzunSeri() {
  const gunler = Object.keys(kayit.gunluk).filter((k) => hedefTamam(kayit.gunluk[k])).sort();
  let en = 0, su = 0, onceki = null;
  for (const k of gunler) {
    const t = new Date(k + "T12:00:00");
    su = onceki && (t - onceki) / 86400000 < 1.5 ? su + 1 : 1;
    en = Math.max(en, su); onceki = t;
  }
  return en;
}
function ilerlemeEkle(fn) {
  const g = bugun(), once = hedefTamam(g);
  fn(g);
  kaydet();
  if (!once && hedefTamam(g)) kutla();
}
function soruKaydet(konuId, ok, sn) {
  if (!konuId) return;
  const st = kayit.istatistik[konuId] || (kayit.istatistik[konuId] = { s: 0, d: 0 });
  st.s++; if (ok) st.d++;
  ilerlemeEkle((g) => { g.soru++; if (ok) g.dogru++; g.sure += Math.min(Math.round(sn), 120); });
}
function kelimeKaydet(sn) {
  ilerlemeEkle((g) => { g.kelime++; g.sure += Math.min(Math.round(sn), 30); });
}
function kutla() {
  const d = document.createElement("div");
  d.className = "kutlama";
  d.innerHTML = `🎉 Bugünün hedefini tamamladın!<br><b>🔥 Seri: ${seriHesapla()} gün</b>`;
  document.body.appendChild(d);
  setTimeout(() => d.classList.add("gizle"), 3500);
  setTimeout(() => d.remove(), 4200);
}
const sureYaz = (sn) => (sn < 60 ? `${sn} sn` : sn < 3600 ? `${Math.round(sn / 60)} dk` : `${Math.floor(sn / 3600)} sa ${Math.round((sn % 3600) / 60)} dk`);

const TEST_BOYU = 15;      // konu testindeki soru sayısı
const TARAMA_BOYU = 20;    // ünite tarama testindeki soru sayısı
const karistir = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// Bir konudan n soru hazırlar: elle yazılmış sorulardan birkaçı + üreteçten yeni sorular (tekrarsız)
function soruHazirla(k, n) {
  const uret = window.URETEC && window.URETEC[k.id];
  const tum = karistir(k.sorular);
  const sabitSay = uret ? Math.min(4, Math.ceil(n / 3)) : n;
  const liste = tum.slice(0, sabitSay).map((s) => ({ ...s, konuId: k.id }));
  const anahtar = (s) => s.soru + "|" + s.secenekler[s.dogru];
  const gorulen = new Set(liste.map(anahtar));
  let deneme = 0;
  while (uret && liste.length < n && deneme++ < n * 40) {
    const s = uret();
    if (!s || gorulen.has(anahtar(s))) continue;
    gorulen.add(anahtar(s));
    liste.push({ ...s, konuId: k.id });
  }
  // Üreteç yeterince farklı soru veremediyse kalan elle yazılmış sorularla tamamla
  for (const s of tum.slice(sabitSay)) { if (liste.length >= n) break; liste.push({ ...s, konuId: k.id }); }
  return karistir(liste);
}

function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

function git(fn, baslik, kaydetGecmis = true) {
  if (kaydetGecmis && ekran.dataset.aktif) gecmis.push(ekran._son);
  ekran._son = { fn, baslik };
  ekran.dataset.aktif = "1";
  ekran.classList.remove("genis");
  $("baslik").textContent = baslik;
  $("geri").hidden = gecmis.length === 0;
  ekran.innerHTML = "";
  fn();
  window.scrollTo(0, 0);
}
$("geri").onclick = () => { const o = gecmis.pop(); if (o) git(o.fn, o.baslik, false); };

function konuBul(konuId) {
  for (const d of Object.keys(window.ICERIK || {}))
    for (const u of ICERIK[d].uniteler)
      for (const k of u.konular) if (k.id === konuId) return { ders: d, unite: u, konu: k };
  return null;
}

// --- Ana sayfa ---
function anaSayfa() {
  const yanlisSay = kayit.yanlislar.length;
  const g = kayit.gunluk[gunAnahtar()] || { soru: 0, kelime: 0 }, h = kayit.hedef, seri = seriHesapla();
  const cubuk = (ad, v, hd) => `<div class="hedef-satir"><span>${ad}</span><div class="cubuk" role="progressbar" aria-valuenow="${Math.min(v, hd)}" aria-valuemax="${hd}"><div style="width:${Math.min(100, (v / hd) * 100)}%"></div></div><b>${Math.min(v, hd)}/${hd}</b></div>`;
  ekran.innerHTML = `
    <div class="hedef-kart ${hedefTamam(g) ? "tamam" : ""}">
      <div class="hedef-ust"><b>🎯 Bugünün Hedefi</b><span class="seri" title="Hedefin tamamlandığı art arda gün sayısı">🔥 ${seri} gün seri</span></div>
      ${cubuk("✏️ Soru", g.soru, h.soru)}
      ${h.kelime > 0 ? cubuk("🔤 İngilizce kelime", g.kelime, h.kelime) : ""}
      <div class="hedef-alt">${hedefTamam(g) ? "🎉 Bugünün hedefi tamam! Yarın da gel, serin büyüsün." : h.kelime > 0 ? "Kelimeler İngilizce konularındaki Kelime Oyunu'ndan sayılır." : "Soru çözdükçe çubuk dolar."}</div>
      <button class="btn2" id="panel">📊 İlerleme Paneli</button>
    </div>
    <h2>Hangi dersi çalışalım?</h2>
    <div class="izgara" id="dersler"></div>
    <div class="satir">
      <button class="btn2" id="tekrar">🔁 Yanlışlarımı Tekrar Et (${yanlisSay})</button>
    </div>`;
  const kutu = $("dersler");
  DERSLER.forEach((d) => {
    const var_ = window.ICERIK && ICERIK[d.key];
    const b = document.createElement("button");
    b.className = "kart ders" + (var_ ? "" : " pasif");
    b.style.setProperty("--renk", d.renk);
    b.innerHTML = `<span class="ikon">${d.ikon}</span><b>${d.ad}</b><span class="rozet">${var_ ? ICERIK[d.key].uniteler.length + " ünite" : "Yakında"}</span>`;
    b.onclick = () => var_ ? git(() => uniteler(d.key), d.ad) : alert("Bu dersin içeriği henüz eklenmedi.");
    kutu.appendChild(b);
  });
  $("tekrar").onclick = () => yanlisSay ? git(() => test(yanlisSorular(), "Yanlışları Tekrar", true), "Yanlışları Tekrar") : alert("Harika! Tekrar edilecek yanlışın yok.");
  $("panel").onclick = () => git(ilerlemePaneli, "İlerleme Paneli");
  if (window.hikayeAnaKart) window.hikayeAnaKart(); // Günün Hikâyesi kartı (hikaye.js)
}

// --- İlerleme paneli ---
function ilerlemePaneli() {
  const konuDers = {};
  for (const [dk, D] of Object.entries(window.ICERIK || {})) for (const u of D.uniteler) for (const k of u.konular) konuDers[k.id] = { ders: dk, konu: k };
  const st = kayit.istatistik, gunler = Object.values(kayit.gunluk);
  const topS = gunler.reduce((a, g) => a + g.soru, 0), topD = gunler.reduce((a, g) => a + g.dogru, 0);
  const topK = gunler.reduce((a, g) => a + g.kelime, 0), topSure = gunler.reduce((a, g) => a + g.sure, 0);
  const yuzde = (d, s) => (s ? Math.round((d / s) * 100) : 0);

  // Son 7 gün
  const yedi = [];
  for (let i = 6; i >= 0; i--) { const t = new Date(); t.setDate(t.getDate() - i); yedi.push({ t, g: kayit.gunluk[gunAnahtar(t)] || { soru: 0, dogru: 0, kelime: 0, sure: 0 } }); }
  const enCok = Math.max(kayit.hedef.soru, ...yedi.map((x) => x.g.soru), 1);
  const grafik = yedi.map(({ t, g }, i) => {
    const gun = i === 6 ? "Bugün" : t.toLocaleDateString("tr-TR", { weekday: "short" });
    const ipucu = `${t.toLocaleDateString("tr-TR", { day: "numeric", month: "long" })}: ${g.soru} soru (%${yuzde(g.dogru, g.soru)} doğru), ${g.kelime} kelime, ${sureYaz(g.sure)}`;
    return `<div class="gun" tabindex="0" title="${esc(ipucu)}" aria-label="${esc(ipucu)}">
      <div class="gun-deger">${g.soru || ""}</div>
      <div class="gun-alan"><div class="hedef-iz" style="bottom:${(kayit.hedef.soru / enCok) * 100}%"></div><div class="gun-bar ${hedefTamam(g) ? "tamam" : ""}" style="height:${(g.soru / enCok) * 100}%"></div></div>
      <div class="gun-ad">${gun}${hedefTamam(g) ? " ✓" : ""}</div></div>`;
  }).join("");

  // Ders bazında
  const dersSatir = DERSLER.filter((d) => window.ICERIK[d.key]).map((d) => {
    let s = 0, dg = 0, calisilan = 0, toplam = 0;
    for (const u of ICERIK[d.key].uniteler) for (const k of u.konular) { toplam++; const x = st[k.id]; if (x && x.s) { s += x.s; dg += x.d; calisilan++; } }
    return `<div class="ders-satir">
      <div class="ders-ad"><span>${d.ikon}</span> ${d.ad}</div>
      <div class="ders-cubuk" title="Konuların %${Math.round((calisilan / toplam) * 100)}'ü çalışıldı"><div style="width:${(calisilan / toplam) * 100}%;background:${d.renk}"></div></div>
      <div class="ders-bilgi">${calisilan}/${toplam} konu · ${s} soru · ${s ? "%" + yuzde(dg, s) + " doğru" : "henüz yok"}</div>
    </div>`;
  }).join("");

  // Konu sıralamaları (en az 5 soru çözülmüş konular)
  const konular = Object.entries(st).filter(([id, x]) => x.s >= 5 && konuDers[id]).map(([id, x]) => ({ id, ...x, p: yuzde(x.d, x.s), ...konuDers[id] }));
  const zor = konular.filter((k) => k.p < 80).sort((a, b) => a.p - b.p).slice(0, 5);
  const iyi = konular.filter((k) => k.p >= 80).sort((a, b) => b.p - a.p || b.s - a.s).slice(0, 5);
  const konuListe = (l, bos) => l.length ? l.map((k) => {
    const d = DERSLER.find((x) => x.key === k.ders);
    return `<button class="kart konu-satir" data-id="${k.id}"><span><b>${esc(k.konu.ad)}</b><br><span class="not">${d.ikon} ${d.ad} · ${k.s} soru</span></span><span class="yuzde ${k.p < 50 ? "dusuk" : k.p < 80 ? "orta" : "yuksek"}">%${k.p}</span></button>`;
  }).join("") : `<p class="not">${bos}</p>`;

  const secim = (ad, alan, degerler) => `<div class="secim"><span>${ad}</span>${degerler.map((v) => `<button class="cip ${kayit.hedef[alan] === v ? "secili" : ""}" data-alan="${alan}" data-v="${v}">${v === 0 ? "Yok" : v}</button>`).join("")}</div>`;

  ekran.innerHTML = `
    <div class="karolar">
      <div class="karo"><span>Çözülen soru</span><b>${topS}</b></div>
      <div class="karo"><span>Doğruluk</span><b>%${yuzde(topD, topS)}</b></div>
      <div class="karo"><span>Öğrenilen kelime</span><b>${topK}</b></div>
      <div class="karo"><span>Çalışma süresi</span><b>${sureYaz(topSure)}</b></div>
      <div class="karo"><span>Seri (en uzun: ${enUzunSeri()})</span><b>🔥 ${seriHesapla()} gün</b></div>
    </div>
    <h2>Son 7 Gün</h2>
    <div class="grafik-kart"><div class="grafik-baslik">Günlük çözülen soru · kesikli çizgi: soru hedefi (${kayit.hedef.soru}) · ✓ hedefin tamamlandığı günler · ayrıntı için çubuğa dokun</div><div class="grafik">${grafik}</div></div>
    <h2>Derslere Göre</h2>
    <div class="grafik-kart">${dersSatir}</div>
    <div class="iki-sutun">
      <div><h2>💪 Tekrar Etmesi Gerekenler</h2>${konuListe(zor, "En az 5 soru çözülen konularda başarı %80'in altına düşerse burada görünür.")}</div>
      <div><h2>⭐ En İyi Olduğu Konular</h2>${konuListe(iyi, "En az 5 soru çözülen ve %80'in üzerinde başarı olan konular burada görünür.")}</div>
    </div>
    ${window.SES ? `<h2>🗣️ Ses ve Konuşma Hızı</h2><div class="grafik-kart" id="sesAyar">${SES.ayarHTML()}</div>` : ""}
    <h2>🎯 Günlük Hedef Ayarı</h2>
    <div class="grafik-kart">
      ${secim("Soru hedefi", "soru", [10, 20, 30, 50])}
      ${secim("İngilizce kelime hedefi", "kelime", [0, 10, 20, 30])}
    </div>`;
  ekran.querySelectorAll(".konu-satir").forEach((b) => (b.onclick = () => { const k = konuDers[b.dataset.id].konu; git(() => konuSayfa(k), k.ad); }));
  ekran.querySelectorAll(".cip").forEach((b) => (b.onclick = () => { kayit.hedef[b.dataset.alan] = +b.dataset.v; kaydet(); git(ilerlemePaneli, "İlerleme Paneli", false); }));
  if (window.SES && $("sesAyar")) { SES.ayarBagla($("sesAyar")); SES.rehberGoster($("sesAyar")); }
}

function uniteler(dersKey) {
  const ders = ICERIK[dersKey];
  ekran.innerHTML = `<h2>Üniteler</h2><div class="liste" id="l"></div>`;
  ders.uniteler.forEach((u, i) => {
    const b = document.createElement("button");
    b.className = "kart";
    b.innerHTML = `<span><b>${i + 1}. ${esc(u.ad)}</b></span><span class="rozet">${u.konular.length} konu</span>`;
    b.onclick = () => git(() => konular(u), u.ad);
    $("l").appendChild(b);
  });
}

function konular(unite) {
  ekran.innerHTML = `<h2>Konular</h2><button class="btn3" id="tarama">📝 Ünite Tarama Testi (${TARAMA_BOYU} soru, bütün konulardan)</button><div class="liste" id="l"></div>`;
  $("tarama").onclick = () => git(() => test(() => taramaHazirla(unite), unite.ad, false, "tarama-" + unite.id), "Tarama: " + unite.ad);
  unite.konular.forEach((k) => {
    const c = kayit.cozulen[k.id];
    const b = document.createElement("button");
    b.className = "kart";
    b.innerHTML = `<b>${esc(k.ad)}</b><span class="rozet">${c ? "Son test: " + c.dogru + "/" + c.toplam : "Sınırsız soru"}</span>`;
    b.onclick = () => git(() => konuSayfa(k), k.ad);
    $("l").appendChild(b);
  });
}

function taramaHazirla(unite) {
  const n = unite.konular.length, liste = [];
  unite.konular.forEach((k, i) => liste.push(...soruHazirla(k, Math.floor(TARAMA_BOYU / n) + (i < TARAMA_BOYU % n ? 1 : 0))));
  return karistir(liste);
}

function konuSayfa(k) {
  ekran.classList.add("genis");
  const ozet = k.ozet && k.ozet.length ? `<aside class="ozet-not"><h3>📌 Özet Not</h3><ul>${k.ozet.map((x) => `<li>${esc(x)}</li>`).join("")}</ul><button class="btn" id="basla2" style="width:100%;margin-top:14px">✏️ Hemen Soru Çöz</button></aside>` : "";
  ekran.innerHTML = `
    <div class="konu-duzen">
      <div class="konu-a">
        <h2>📚 Konu Anlatımı</h2>
        <div class="anlatim">${k.anlatim.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      </div>
      ${ozet}
      <div class="konu-v">
        ${window.sesliAnlatim ? `<button class="anlatim-btn" id="anlatimBtn"><span class="anlatim-ikon">🎬</span><span><b>Sesli Anlatım${window.ANLATIM && window.ANLATIM[k.id] ? " ⭐" : ""}</b><br><small>Konuyu tahtada adım adım, sesli dinle</small></span></button>` : ""}
        ${k.video ? `<h2>▶️ Konu Videosu</h2>
        <div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(k.video)}?rel=0&modestbranding=1" title="Konu videosu" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
        <div class="not">Video açılmazsa: <a href="https://www.youtube.com/watch?v=${encodeURIComponent(k.video)}" target="_blank" rel="noopener">YouTube'da izle</a></div>` : ""}
      </div>
      <div class="konu-b satir">
        <button class="btn" id="basla">✏️ Soru Çöz (${TEST_BOYU} soru)</button>
      </div>
    </div>`;
  $("basla").onclick = () => git(() => test(() => soruHazirla(k, TEST_BOYU), k.ad, false, k.id), "Test: " + k.ad);
  if ($("basla2")) $("basla2").onclick = $("basla").onclick;
  if ($("anlatimBtn")) $("anlatimBtn").onclick = () => git(() => window.sesliAnlatim(k), "🎬 " + k.ad);
  // İngilizce konularında kelime oyunu
  const bulunan = konuBul(k.id);
  if (bulunan && bulunan.ders === "ingilizce") {
    const kel = kelimeHavuzu(k, bulunan.unite);
    if (kel.length >= 6) {
      const ob = document.createElement("button");
      ob.className = "btn oyun-btn"; ob.textContent = `🎮 Kelime Oyunu (${kel.length} kelime)`;
      ob.onclick = () => git(() => kelimeOyunu(kel, k.id), "Kelime Oyunu: " + k.ad);
      document.querySelector(".konu-b").appendChild(ob);
      if ($("basla2")) { const ob2 = ob.cloneNode(true); ob2.style.cssText = "width:100%;margin-top:10px"; ob2.onclick = ob.onclick; $("basla2").after(ob2); }
    }
  }
}

// ================= İngilizce: sesli okuma ve kelime oyunu =================
function seslendir(metin) {
  try {
    if (window.SES) { SES.konus(metin, "en", { hiz: 0.85 }); return; }
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(metin);
    u.lang = "en-US"; u.rate = 0.85;
    const ses = speechSynthesis.getVoices().find((v) => /^en(-|_)(US|GB)/i.test(v.lang));
    if (ses) u.voice = ses;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch (e) {}
}

// Konunun kelimeleri; azsa ünitedeki diğer kelimeler ve cümlelerdeki sözlük kelimeleriyle tamamlanır
function kelimeHavuzu(k, unite) {
  const havuz = new Map(), turkce = new Set();
  // Aynı Türkçe karşılık iki kez olmasın (eşleştirmede karışıklık yaratır)
  const ekle = ([e, t]) => { if (e && t && !havuz.has(e) && !turkce.has(t)) { havuz.set(e, t); turkce.add(t); } };
  (k.kelimeler || []).forEach(ekle);
  if (havuz.size < 12 && unite) unite.konular.forEach((x) => (x.kelimeler || []).forEach(ekle));
  if (havuz.size < 12 && window.kelimeAnlamlari) (k.bosluk || []).forEach((b) => window.kelimeAnlamlari(b[0].replace("___", b[1]), 20).forEach(ekle));
  return [...havuz.entries()];
}

function kelimeOyunu(kel, oyunId) {
  let rekor = (kayit.rekor || {})[oyunId] || 0;
  ekran.innerHTML = `
    <h2>🎮 Kelime Oyunu</h2>
    <p class="not">Bu oyunda ${kel.length} kelime var. İngilizce kelimelere dokununca sesli okunur.</p>
    <div class="izgara">
      <button class="kart oyun-mod" id="m1"><span class="ikon">🧩</span><b>Eşleştir</b><span class="rozet">İngilizce kelimeyi Türkçesiyle eşleştir</span></button>
      <button class="kart oyun-mod" id="m2"><span class="ikon">⚡</span><b>Hızlı Kelime</b><span class="rozet">60 saniyede kaç kelime bilebilirsin? · Rekor: ${rekor}</span></button>
      <button class="kart oyun-mod" id="m3"><span class="ikon">🃏</span><b>Kelime Kartları</b><span class="rozet">Kartı çevir, kelimeyi ezberle</span></button>
    </div>`;
  $("m1").onclick = () => git(() => eslestirOyunu(kel), "Eşleştir");
  $("m2").onclick = () => git(() => hizliKelime(kel, oyunId), "Hızlı Kelime");
  $("m3").onclick = () => git(() => kelimeKartlari(kel), "Kelime Kartları");
}

function eslestirOyunu(kel) {
  const turlar = [], karisik = karistir(kel);
  for (let i = 0; i < Math.min(3, Math.ceil(karisik.length / 5)); i++) {
    let parca = karisik.slice(i * 5, i * 5 + 5);
    if (parca.length < 3) break;
    turlar.push(parca);
  }
  let tur = 0, hata = 0, secili = null, sonEslesme = Date.now();
  const baslangic = Date.now();
  function ciz() {
    if (tur >= turlar.length) return bitti();
    const p = turlar[tur], kalan = new Set(p.map((x) => x[0]));
    ekran.innerHTML = `
      <div class="not">Tur ${tur + 1} / ${turlar.length} · Hata: <span id="hata">${hata}</span></div>
      <div class="oyun-izgara"><div id="solK"></div><div id="sagK"></div></div>`;
    karistir(p).forEach(([e]) => {
      const b = document.createElement("button"); b.className = "oyun-kart ing"; b.textContent = e; b.dataset.e = e;
      b.onclick = () => { seslendir(e); document.querySelectorAll("#solK .oyun-kart").forEach((x) => x.classList.remove("secili")); b.classList.add("secili"); secili = e; };
      $("solK").appendChild(b);
    });
    karistir(p).forEach(([e, t]) => {
      const b = document.createElement("button"); b.className = "oyun-kart"; b.textContent = t;
      b.onclick = () => {
        if (!secili) { b.classList.add("salla"); setTimeout(() => b.classList.remove("salla"), 400); return; }
        const sol = document.querySelector(`#solK .oyun-kart[data-e="${CSS.escape(secili)}"]`);
        if (secili === e) {
          b.classList.add("eslesti"); sol.classList.add("eslesti"); b.disabled = sol.disabled = true; sol.classList.remove("secili");
          kelimeKaydet((Date.now() - sonEslesme) / 1000); sonEslesme = Date.now();
          kalan.delete(e); secili = null;
          if (!kalan.size) { tur++; setTimeout(ciz, 600); }
        } else {
          hata++; $("hata").textContent = hata;
          b.classList.add("salla", "hatali"); setTimeout(() => b.classList.remove("salla", "hatali"), 500);
        }
      };
      $("sagK").appendChild(b);
    });
  }
  function bitti() {
    const sn = Math.round((Date.now() - baslangic) / 1000), yildiz = hata === 0 ? "⭐⭐⭐" : hata <= 3 ? "⭐⭐" : "⭐";
    ekran.innerHTML = `
      <div class="ozet">${yildiz}</div>
      <p style="text-align:center">${turlar.reduce((a, t) => a + t.length, 0)} kelimeyi ${sn} saniyede eşleştirdin. Hata sayısı: ${hata}</p>
      <div class="satir" style="justify-content:center"><button class="btn" id="yeniden">🔄 Yeniden Oyna</button><button class="btn2" id="geriD">Oyunlara Dön</button></div>`;
    $("yeniden").onclick = () => git(() => eslestirOyunu(kel), "Eşleştir", false);
    $("geriD").onclick = () => $("geri").click();
  }
  ciz();
}

function hizliKelime(kel, oyunId) {
  let puan = 0, seri = 0, kalanSn = 60, bitti = false;
  const sayac = setInterval(() => {
    if (!document.getElementById("sure")) { clearInterval(sayac); return; }
    kalanSn--; $("sure").textContent = kalanSn;
    if (kalanSn <= 0) { clearInterval(sayac); son(); }
  }, 1000);
  let sorT = Date.now();
  function yeniSoru() {
    if (bitti) return;
    sorT = Date.now();
    const [e, t] = kel[Math.floor(Math.random() * kel.length)], ters = Math.random() < 0.35;
    const dogru = ters ? e : t;
    const yan = karistir(kel.filter((x) => x[0] !== e)).slice(0, 3).map((x) => (ters ? x[0] : x[1]));
    const sec = karistir([dogru, ...yan]);
    ekran.innerHTML = `
      <div class="oyun-ust"><span>⏱️ <b id="sure">${kalanSn}</b> sn</span><span>⭐ Puan: <b>${puan}</b></span><span>🔥 Seri: <b>${seri}</b></span></div>
      <div class="hizli-kelime ${ters ? "" : "ing"}">${esc(ters ? t : e)} ${ters ? "" : '<button class="ses-btn" id="dinle">🔊</button>'}</div>
      <p class="not" style="text-align:center">${ters ? "İngilizcesi hangisi?" : "Türkçesi hangisi?"}</p>
      <div id="sec"></div>`;
    if (!ters) { seslendir(e); $("dinle").onclick = () => seslendir(e); }
    sec.forEach((x) => {
      const b = document.createElement("button"); b.className = "secenek" + (ters ? " ing" : ""); b.textContent = x;
      b.onclick = () => {
        [...$("sec").children].forEach((y) => { y.disabled = true; if (y.textContent === dogru) y.classList.add("dogru"); });
        if (x === dogru) { kelimeKaydet((Date.now() - sorT) / 1000); puan += 1 + Math.min(seri, 4); seri++; if (ters) seslendir(e); setTimeout(yeniSoru, 350); }
        else { b.classList.add("yanlis"); seri = 0; setTimeout(yeniSoru, 1100); }
      };
      $("sec").appendChild(b);
    });
  }
  function son() {
    bitti = true;
    kayit.rekor = kayit.rekor || {};
    const yeniRekor = puan > (kayit.rekor[oyunId] || 0);
    if (yeniRekor) { kayit.rekor[oyunId] = puan; kaydet(); }
    ekran.innerHTML = `
      <div class="ozet">${puan} puan</div>
      <p style="text-align:center">${yeniRekor ? "🏆 Yeni rekor!" : "Rekorun: " + kayit.rekor[oyunId]}<br><span class="not">Art arda doğru cevaplar seri bonusu kazandırır.</span></p>
      <div class="satir" style="justify-content:center"><button class="btn" id="yeniden">🔄 Yeniden Oyna</button><button class="btn2" id="geriD">Oyunlara Dön</button></div>`;
    $("yeniden").onclick = () => git(() => hizliKelime(kel, oyunId), "Hızlı Kelime", false);
    $("geriD").onclick = () => $("geri").click();
  }
  yeniSoru();
}

function kelimeKartlari(kel) {
  const liste = karistir(kel);
  let i = 0, acik = false, kartT = Date.now();
  const sayilan = new Set();
  function ciz() {
    if (!acik) kartT = Date.now();
    const [e, t] = liste[i];
    ekran.innerHTML = `
      <div class="not" style="text-align:center">Kart ${i + 1} / ${liste.length}</div>
      <button class="cevir-kart ${acik ? "acik" : ""}" id="kart">${acik ? `<span>${esc(t)}</span><small class="ing">${esc(e)}</small>` : `<span class="ing">${esc(e)}</span><small>Türkçesini görmek için dokun</small>`}</button>
      <div class="satir" style="justify-content:center">
        <button class="btn2" id="onceki">← Önceki</button>
        <button class="btn2" id="dinle">🔊 Dinle</button>
        <button class="btn" id="sonraki">Sonraki →</button>
      </div>`;
    $("kart").onclick = () => { acik = !acik; if (acik && !sayilan.has(e)) { sayilan.add(e); kelimeKaydet((Date.now() - kartT) / 1000); } ciz(); };
    $("dinle").onclick = () => seslendir(e);
    $("onceki").onclick = () => { i = (i - 1 + liste.length) % liste.length; acik = false; ciz(); };
    $("sonraki").onclick = () => { i = (i + 1) % liste.length; acik = false; ciz(); seslendir(liste[i][0]); };
  }
  ciz(); seslendir(liste[0][0]);
}

// Yanlışlar soru metniyle birlikte saklanır (üretilen sorular tekrar bulunamaz)
function yanlisSorular() {
  kayit.yanlislar = kayit.yanlislar.map((y) => {
    if (y.soru) return y;
    const b = konuBul(y.konuId); // eski kayıt biçimi: { konuId, no }
    return b && b.konu.sorular[y.no] ? { ...b.konu.sorular[y.no], konuId: y.konuId } : null;
  }).filter(Boolean);
  kaydet();
  return kayit.yanlislar.map((y) => ({ ...y }));
}

// --- Test ekranı ---
// kaynak: soru dizisi ya da her seferinde yeni dizi veren fonksiyon
function test(kaynak, ad, tekrarModu, konuId) {
  const yenile = () => (typeof kaynak === "function" ? kaynak() : kaynak);
  let sorular = yenile(), i = 0, dogru = 0, sira = [];
  let t0 = Date.now();
  function goster() {
    if (i >= sorular.length) return bitir();
    t0 = Date.now();
    const s = sorular[i];
    ekran.innerHTML = `
      <div class="not">Soru ${i + 1} / ${sorular.length}</div>
      <div class="ilerleme"><div style="width:${(i / sorular.length) * 100}%"></div></div>
      <div class="soru">${esc(s.soru)}</div>
      <div id="sec"></div><div id="alt"></div>`;
    // Şıkları her gösterimde karıştır, doğru cevap hep aynı harfte olmasın
    sira = s.secenekler.map((_, j) => j);
    for (let a = sira.length - 1; a > 0; a--) { const b = Math.floor(Math.random() * (a + 1)); [sira[a], sira[b]] = [sira[b], sira[a]]; }
    sira.forEach((asil, p) => {
      const b = document.createElement("button");
      b.className = "secenek";
      b.textContent = "ABCD"[p] + ") " + s.secenekler[asil];
      b.onclick = () => cevapla(p);
      $("sec").appendChild(b);
    });
  }
  function cevapla(p) {
    const s = sorular[i];
    const j = sira[p];
    const btns = [...$("sec").children];
    btns.forEach((b) => (b.disabled = true));
    btns[sira.indexOf(s.dogru)].classList.add("dogru");
    const ok = j === s.dogru;
    soruKaydet(s.konuId, ok, (Date.now() - t0) / 1000);
    const anahtar = (y) => y.konuId === s.konuId && y.soru === s.soru && y.secenekler[y.dogru] === s.secenekler[s.dogru];
    if (ok) {
      dogru++;
      if (tekrarModu) kayit.yanlislar = kayit.yanlislar.filter((y) => !anahtar(y));
    } else {
      btns[p].classList.add("yanlis");
      if (!kayit.yanlislar.some(anahtar)) {
        kayit.yanlislar.push({ konuId: s.konuId, soru: s.soru, secenekler: s.secenekler, dogru: s.dogru, cozum: s.cozum, ceviri: s.ceviri, sozluk: s.sozluk, ses: s.ses });
        if (kayit.yanlislar.length > 300) kayit.yanlislar.shift();
      }
    }
    kaydet();
    $("alt").innerHTML = `
      <div class="cozum"><b>${ok ? "✅ Doğru!" : "❌ Senin cevabın yanlış"}</b>${ok ? "" : `<div class="ek-satir">Senin cevabın: <b>${"ABCD"[p]}) ${esc(s.secenekler[j])}</b><br>✅ Doğru cevap: <b>${"ABCD"[sira.indexOf(s.dogru)]}) ${esc(s.secenekler[s.dogru])}</b></div>`}<div style="margin-top:6px">${esc(s.cozum)}</div>
        ${s.ses ? `<div class="ek-satir"><button class="ses-btn" id="sesli">🔊 Dinle</button> <span class="ing">${esc(s.ses)}</span></div>` : ""}
        ${s.ceviri ? `<div class="ek-satir"><b>Türkçesi:</b> ${esc(s.ceviri)}</div>` : ""}
        ${s.sozluk && s.sozluk.length ? `<div class="ek-satir"><b>📘 Kelimeler:</b> ${s.sozluk.map(([e, t]) => `<span class="kelime-cip"><b>${esc(e)}</b> = ${esc(t)}</span>`).join(" ")}</div>` : ""}
      </div>
      <div class="satir"><button class="btn" id="ileri">${i + 1 < sorular.length ? "Sonraki Soru →" : "Sonucu Gör"}</button></div>`;
    if ($("sesli")) $("sesli").onclick = () => seslendir(s.ses);
    $("ileri").onclick = () => { i++; goster(); };
  }
  function bitir() {
    if (konuId) { kayit.cozulen[konuId] = { dogru, toplam: sorular.length }; kaydet(); }
    const yuzde = Math.round((dogru / sorular.length) * 100);
    ekran.innerHTML = `
      <div class="ozet">${dogru} / ${sorular.length}</div>
      <p style="text-align:center">${yuzde >= 80 ? "🌟 Süpersin!" : yuzde >= 50 ? "👍 İyi gidiyorsun, yanlışlarını tekrar et." : "💪 Konu anlatımına bir daha göz atıp tekrar dene."}</p>
      <div class="satir" style="justify-content:center">
        <button class="btn" id="tekrar">${tekrarModu ? "Kalan Yanlışları Çöz" : typeof kaynak === "function" ? "🔄 Yeni Sorularla Devam" : "Tekrar Çöz"}</button>
        <button class="btn2" id="ana">Ana Sayfa</button>
      </div>`;
    $("tekrar").onclick = () => {
      i = 0; dogru = 0;
      sorular = tekrarModu ? yanlisSorular() : yenile();
      if (sorular.length) goster(); else { alert("Harika! Tekrar edilecek yanlışın kalmadı."); $("ana").click(); }
    };
    $("ana").onclick = () => { gecmis.length = 0; git(anaSayfa, "7. Sınıf Çalışma Merkezi", false); };
  }
  goster();
}

git(anaSayfa, "7. Sınıf Çalışma Merkezi", false);
