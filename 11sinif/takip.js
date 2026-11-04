// 🧠 Aralıklı Tekrar + 👨‍👩‍👧 Veli Karnesi (5–12. sınıfta aynı dosya; app.js ve program.js'ten sonra yüklenir).
// Aralıklı tekrar: yanlış yapılan her soru 1 gün sonra, doğru bilinirse 3 gün, sonra 7 gün sonra yeniden sorulur.
// Üç kez üst üste doğru bilinen soru "öğrenildi" sayılır ve yanlışlar listesinden çıkar. Yanlışta başa döner.
// Veli karnesi: haftalık çalışma süresi, soru/başarı, ders ders durum, zayıf konular, ödev, plan, okuma, deneme ve yorum.
(function () {
  if (typeof kayit === "undefined" || typeof git !== "function" || !window.ICERIK) return;
  const ARALIK = [1, 3, 7];
  kayit.aralikli = kayit.aralikli || {}; // anahtar -> { q, k: aşama, g: "YYYY-AA-GG" sıradaki tarih, e: eklendi }
  kayit.ogrenilen = kayit.ogrenilen || 0;
  const A = kayit.aralikli;
  const gk = (t) => `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  const bugunT = () => { const t = new Date(); t.setHours(0, 0, 0, 0); return t; };
  const gunEkle = (t, n) => { const x = new Date(t); x.setDate(x.getDate() + n); return x; };
  const bk = () => gk(bugunT());
  const anahtarOf = (q) => q.soru + "|" + (q.secenekler ? q.secenekler[q.dogru] : "");
  const karistir = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const e = (s) => (typeof esc === "function" ? esc(s) : String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])));
  const el = (id) => document.getElementById(id);

  const konuDers = {}, konuAd = {};
  for (const [dk, D] of Object.entries(ICERIK)) for (const u of D.uniteler || []) for (const k of u.konular || []) { konuDers[k.id] = dk; konuAd[k.id] = k.ad; }
  const dersAd = (k) => (window.PROGRAM_DERS_AD ? PROGRAM_DERS_AD(k) : (DERSLER.find((d) => d.key === k) || { ad: (ICERIK[k] || {}).ad || k }).ad);
  const dersIkon = (k) => (DERSLER.find((d) => d.key === k) || ICERIK[k] || { ikon: "📘" }).ikon || "📘";

  // ---------- Aralıklı tekrar ----------
  function esitle() { // yanlışlar listesindeki yeni soruları tekrar kutusuna al
    let degisti = false;
    for (const q of kayit.yanlislar || []) {
      if (!q || !Array.isArray(q.secenekler) || q.secenekler.length < 2) continue;
      const a = anahtarOf(q);
      if (!A[a]) { A[a] = { q, k: 0, g: gk(gunEkle(bugunT(), 1)), e: bk() }; degisti = true; }
    }
    if (degisti) kaydet();
  }
  const zamaniGelen = () => Object.entries(A).filter(([, v]) => v.g <= bk()).sort((x, y) => x[1].g.localeCompare(y[1].g) || x[1].k - y[1].k);
  window.ARALIKLI_BUGUN = () => { esitle(); return zamaniGelen().length; };

  function tekrarEkrani() {
    esitle();
    const hepsi = Object.keys(A).length, bugun = zamaniGelen(), yarin = Object.values(A).filter((v) => v.g === gk(gunEkle(bugunT(), 1))).length;
    const asama = [0, 1, 2].map((k) => Object.values(A).filter((v) => v.k === k).length);
    ekran.innerHTML = `
      <div class="koc"><span class="baykus">🧠</span><div><p>Yanlış yaptığın sorular burada. Unutmamak için onları <b>1 gün</b>, sonra <b>3 gün</b>, sonra <b>7 gün</b> sonra yeniden soruyorum. Üç kez üst üste doğru bilirsen soru <b>öğrenildi</b> sayılır. Bilim insanları buna <i>aralıklı tekrar</i> diyor: hafızayı en güçlendiren yöntemlerden biri.</p></div></div>
      <div class="karolar"><div class="karo"><span>Bugün tekrar</span><b>${bugun.length}</b></div><div class="karo"><span>Yarın</span><b>${yarin}</b></div><div class="karo"><span>Kutudaki soru</span><b>${hepsi}</b></div><div class="karo"><span>Öğrenildi 🎉</span><b>${kayit.ogrenilen}</b></div></div>
      <p class="not">Aşamalar: 1. tekrar bekleyen <b>${asama[0]}</b> · 2. tekrar <b>${asama[1]}</b> · son tekrar <b>${asama[2]}</b></p>
      <div class="satir">${bugun.length ? `<button class="btn" id="atBas">▶ Bugünkü tekrara başla (${Math.min(15, bugun.length)} soru)</button>` : `<p>✅ Bugünlük tekrar yok. ${hepsi ? "Sıradaki sorular zamanı gelince burada olacak." : "Yanlış yaptığın sorular otomatik olarak buraya gelir."}</p>`}</div>`;
    if (el("atBas")) el("atBas").onclick = () => git(() => tekrarTur(bugun.slice(0, 15)), "🧠 Aralıklı Tekrar");
  }

  function tekrarTur(liste) {
    let i = 0, dogru = 0;
    const sonuc = { ogrenilen: 0 };
    const goster = () => {
      if (i >= liste.length) {
        kaydet();
        ekran.innerHTML = `<div class="koc"><span class="baykus">${dogru === liste.length ? "🌟" : "👍"}</span><div><p><b>${dogru}/${liste.length}</b> doğru!${sonuc.ogrenilen ? ` <b>${sonuc.ogrenilen}</b> soruyu tamamen öğrendin 🎉` : ""}</p><p>Doğru bildiklerin birkaç gün sonra yine gelecek; yanlışlar yarın tekrar sorulacak.</p></div></div>
          <div class="satir"><button class="btn" id="atDon">Tekrar kutusuna dön</button></div>`;
        el("atDon").onclick = () => { gecmis.pop(); git(tekrarEkrani, "🧠 Aralıklı Tekrar", false); };
        if (dogru === liste.length && typeof kutla === "function") kutla();
        return;
      }
      const [a, v] = liste[i], q = v.q, sira = karistir(q.secenekler.map((s, k) => [s, k]));
      ekran.innerHTML = `<div class="not">${i + 1} / ${liste.length} · ${e(konuAd[q.konuId] || "")} · ${v.k + 1}. tekrar</div>
        <div class="soru"><div class="soru-metni">${e(q.soru)}</div></div>
        <div class="secenekler" id="atS">${sira.map(([s, k], n) => `<button class="secenek" data-k="${k}">${"ABCDE"[n]}) ${e(s)}</button>`).join("")}</div><div id="atC"></div>`;
      ekran.querySelectorAll("[data-k]").forEach((b) => (b.onclick = () => {
        const ok = +b.dataset.k === q.dogru;
        ekran.querySelectorAll("[data-k]").forEach((x) => { x.disabled = true; if (+x.dataset.k === q.dogru) x.classList.add("dogru"); });
        if (!ok) b.classList.add("yanlis");
        if (ok) {
          dogru++; v.k++;
          if (v.k >= ARALIK.length) { delete A[a]; kayit.ogrenilen++; sonuc.ogrenilen++; kayit.yanlislar = (kayit.yanlislar || []).filter((y) => anahtarOf(y) !== a); }
          else v.g = gk(gunEkle(bugunT(), ARALIK[v.k]));
        } else { v.k = 0; v.g = gk(gunEkle(bugunT(), 1)); }
        if (kayit.istatistik && q.konuId) { const s = (kayit.istatistik[q.konuId] = kayit.istatistik[q.konuId] || { s: 0, d: 0 }); s.s++; if (ok) s.d++; }
        kaydet();
        el("atC").innerHTML = `<div class="not" style="margin-top:10px">${ok ? (A[a] ? `✅ Doğru! Bu soru ${ARALIK[v.k]} gün sonra yine gelecek.` : "🎉 Öğrenildi! Bu soru artık tekrar kutusundan çıktı.") : "❌ Yanlış. Yarın yeniden sorulacak."}${q.cozum ? `<br>💡 ${e(q.cozum)}` : ""}</div>
          <div class="satir"><button class="btn" id="atI">${i + 1 < liste.length ? "Sonraki soru →" : "Bitir"}</button></div>`;
        el("atI").onclick = () => { i++; goster(); window.scrollTo(0, 0); };
      }));
    };
    goster();
  }
  window.ARALIKLI_AC = () => git(tekrarEkrani, "🧠 Aralıklı Tekrar");

  // ---------- Veli Karnesi ----------
  const P = () => kayit.program || {};
  function hafta(bas) { // bas: haftanın ilk günü (pazartesi)
    const gunler = [...Array(7)].map((_, i) => gk(gunEkle(bas, i)));
    const g = (k) => kayit.gunluk[k] || {};
    const soru = gunler.reduce((a, k) => a + (g(k).soru || 0), 0), dogru = gunler.reduce((a, k) => a + (g(k).dogru || 0), 0);
    const sure = gunler.reduce((a, k) => a + Object.values((P().sure || {})[k] || {}).reduce((x, y) => x + y, 0), 0);
    const aktif = gunler.filter((k) => (g(k).soru || 0) > 0 || Object.keys((P().sure || {})[k] || {}).length || (P().kontrol || {})[k]).length;
    const plan = gunler.reduce((a, k) => a + Object.keys((P().plan || {})[k] || {}).length, 0);
    const od = (P().odevler || []).filter((o) => o.teslim >= gunler[0] && o.teslim <= gunler[6]);
    const okuma = (kayit.okuma || []).filter((o) => o.t >= gunler[0] && o.t <= gunler[6]);
    const dersSure = {}; gunler.forEach((k) => Object.entries((P().sure || {})[k] || {}).forEach(([d, m]) => (dersSure[d] = (dersSure[d] || 0) + m)));
    const bas0 = bas.getTime(), bit = gunEkle(bas, 7).getTime();
    const den = [...(kayit.denemeler || []).map((d) => ({ ...d, b: 3 })), ...(kayit.yksDenemeler || []).map((d) => ({ ...d, b: 4 }))].filter((d) => d.t >= bas0 && d.t < bit)
      .map((d) => ({ ad: d.ad, net: Object.values(d.dersler).reduce((a, x) => a + x.d - x.y / d.b, 0) }));
    const yaz = (kayit.yazili || []).filter((y) => y.t >= bas0 && y.t < bit);
    return { gunler, soru, dogru, sure, aktif, plan, odToplam: od.length, odBiten: od.filter((o) => o.bitti).length, odGec: od.filter((o) => !o.bitti && o.teslim < bk()).length, okuma, dersSure, den, yaz };
  }
  function karne(geri) {
    geri = geri || 0;
    const t = bugunT(), pzt = gunEkle(t, -((t.getDay() + 6) % 7) - 7 * geri), H = hafta(pzt), O = hafta(gunEkle(pzt, -7));
    const yuzde = (d, s) => (s ? Math.round((d / s) * 100) : null);
    const ok = yuzde(H.dogru, H.soru), okOnce = yuzde(O.dogru, O.soru);
    const ok2 = (a, b) => (b == null || a == null ? "" : a > b ? ` <small style="color:#16a34a">▲ ${a - b}</small>` : a < b ? ` <small style="color:#dc2626">▼ ${b - a}</small>` : "");
    // Ders ders başarı (tüm zamanlar, konu istatistiklerinden)
    const ders = {};
    for (const [id, x] of Object.entries(kayit.istatistik || {})) { const d = konuDers[id]; if (!d || !x.s) continue; (ders[d] = ders[d] || { s: 0, d: 0 }); ders[d].s += x.s; ders[d].d += x.d; }
    const dersSatir = Object.entries(ders).sort((a, b) => a[1].d / a[1].s - b[1].d / b[1].s);
    const zayif = Object.entries(kayit.istatistik || {}).filter(([id, x]) => konuAd[id] && x.s >= 4 && x.d / x.s < 0.7).sort((a, b) => a[1].d / a[1].s - b[1].d / b[1].s).slice(0, 6);
    const guclu = Object.entries(kayit.istatistik || {}).filter(([id, x]) => konuAd[id] && x.s >= 5 && x.d / x.s >= 0.9).sort((a, b) => b[1].s - a[1].s).slice(0, 4);
    let oa = null; try { oa = JSON.parse(localStorage.getItem("okuma-atolyesi-" + ((window.SINIF && SINIF.anahtar) || ""))) || null; } catch (x) {}
    const oaSon = oa && oa.okuma && oa.okuma.length ? oa.okuma[oa.okuma.length - 1] : null;
    const okHiz = H.okuma.length ? Math.round(H.okuma.reduce((a, x) => a + x.hiz, 0) / H.okuma.length) : null;
    const hedef = (P().hedefDk || 0) * 5;
    // Otomatik yorum
    const iyi = [], dikkat = [];
    if (H.aktif >= 5) iyi.push(`Haftanın ${H.aktif} gününde çalıştı; düzenli çalışma alışkanlığı gelişiyor.`); else if (H.aktif <= 2) dikkat.push(`Bu hafta yalnızca ${H.aktif} gün çalıştı. Her gün kısa da olsa çalışmak, hafta sonu uzun çalışmaktan daha verimlidir.`);
    if (ok != null && ok >= 80) iyi.push(`Soruların %${ok}'ini doğru çözdü.`); else if (ok != null && ok < 60) dikkat.push(`Doğru oranı %${ok}. Konu anlatımlarını okuyup sonra soru çözmek ve yanlışların tekrarını yapmak faydalı olur.`);
    if (okOnce != null && ok != null && ok - okOnce >= 5) iyi.push(`Başarısı geçen haftaya göre ${ok - okOnce} puan arttı.`);
    if (H.odGec) dikkat.push(`${H.odGec} ödevin teslim tarihi geçti.`); else if (H.odToplam && H.odBiten === H.odToplam) iyi.push("Bu haftanın bütün ödevlerini tamamladı.");
    if (zayif.length) dikkat.push(`Desteklenmesi gereken konular: ${zayif.slice(0, 3).map(([id]) => konuAd[id]).join(", ")}.`);
    if (guclu.length) iyi.push(`Güçlü olduğu konular: ${guclu.slice(0, 3).map(([id]) => konuAd[id]).join(", ")}.`);
    const bekleyen = window.ARALIKLI_BUGUN ? ARALIKLI_BUGUN() : 0;
    if (bekleyen > 10) dikkat.push(`Aralıklı tekrar kutusunda ${bekleyen} soru bekliyor.`);
    const aralik = `${new Date(H.gunler[0] + "T00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long" })} – ${new Date(H.gunler[6] + "T00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}`;
    const ad = (kayit.ad || "").trim();
    ekran.innerHTML = `
      <div class="vk">
      <div class="secim" style="margin-top:0"><button class="cip ${geri === 0 ? "secili" : ""}" data-h="0">Bu hafta</button><button class="cip ${geri === 1 ? "secili" : ""}" data-h="1">Geçen hafta</button><button class="cip ${geri === 2 ? "secili" : ""}" data-h="2">2 hafta önce</button></div>
      <h2 style="margin:6px 0 2px">👨‍👩‍👧 Haftalık Karne${ad ? " · " + e(ad) : ""}</h2><p class="not" style="margin-top:0">${(window.SINIF && SINIF.baslik) || document.title} · ${aralik}</p>
      <div class="karolar">
        <div class="karo"><span>Çalıştığı gün</span><b>${H.aktif}/7</b></div>
        <div class="karo"><span>Odaklı çalışma</span><b>${H.sure} dk</b>${hedef ? `<small class="not">hedef ~${hedef} dk</small>` : ""}</div>
        <div class="karo"><span>Çözülen soru</span><b>${H.soru}</b>${ok2(H.soru, O.soru)}</div>
        <div class="karo"><span>Başarı</span><b>${ok == null ? "–" : "%" + ok}</b>${ok2(ok, okOnce)}</div>
        <div class="karo"><span>Ödev</span><b>${H.odBiten}/${H.odToplam}</b>${H.odGec ? `<small style="color:#dc2626">${H.odGec} gecikti</small>` : ""}</div>
        <div class="karo"><span>Plan görevi</span><b>${H.plan}</b></div>
      </div>
      <h3>💬 Değerlendirme</h3>
      ${iyi.length ? `<p>👍 ${iyi.map(e).join("<br>👍 ")}</p>` : ""}${dikkat.length ? `<p>⚠️ ${dikkat.map(e).join("<br>⚠️ ")}</p>` : ""}${!iyi.length && !dikkat.length ? '<p class="not">Bu hafta için henüz yeterli veri yok.</p>' : ""}
      <h3>📚 Ders ders başarı <small class="not">(bugüne kadar)</small></h3>
      ${dersSatir.length ? `<table class="tablo"><tr><th>Ders</th><th>Soru</th><th>Başarı</th><th>Bu hafta süre</th></tr>${dersSatir.map(([d, x]) => { const y = Math.round((x.d / x.s) * 100); return `<tr><td>${dersIkon(d)} ${e(dersAd(d))}</td><td>${x.s}</td><td><b style="color:${y >= 80 ? "#16a34a" : y >= 60 ? "#d97706" : "#dc2626"}">%${y}</b></td><td>${H.dersSure[d] || 0} dk</td></tr>`; }).join("")}</table>` : '<p class="not">Henüz soru çözülmedi.</p>'}
      ${zayif.length ? `<h3>🎯 Desteklenmesi gereken konular</h3><ul>${zayif.map(([id, x]) => `<li>${dersIkon(konuDers[id])} ${e(konuAd[id])} — %${Math.round((x.d / x.s) * 100)} (${x.s} soru)</li>`).join("")}</ul>` : ""}
      <h3>📖 Okuma</h3>
      <p>${okHiz ? `Bu hafta ${H.okuma.length} hikâye okudu · ortalama okuma hızı <b>${okHiz}</b> kelime/dk.` : "Bu hafta hikâye okuma kaydı yok."}${oaSon ? `<br>Okuma Atölyesi son okuma: <b>${oaSon.hiz}</b> kelime/dk${oaSon.anlama != null ? `, anlama <b>%${oaSon.anlama}</b>` : ""}.` : ""}</p>
      ${H.den.length || H.yaz.length ? `<h3>📝 Deneme ve yazılı provaları</h3><ul>${H.den.map((d) => `<li>${e(d.ad)} — <b>${d.net.toFixed(2)} net</b></li>`).join("")}${H.yaz.map((y) => `<li>${e(dersAd(y.ders))} yazılı provası — <b>${y.puan}</b> puan</li>`).join("")}</ul>` : ""}
      <h3>🧠 Aralıklı tekrar</h3><p>Bugün tekrar bekleyen: <b>${bekleyen}</b> · Tamamen öğrenilen: <b>${kayit.ogrenilen}</b></p>
      <p class="not">Bu karne yalnızca bu cihazdaki çalışmalardan hazırlanır.</p>
      </div>
      <div class="satir vk-dugme"><button class="btn" id="vkPay">📤 Paylaş</button><button class="btn2" id="vkYaz">🖨️ Yazdır / PDF</button></div>`;
    ekran.querySelectorAll("[data-h]").forEach((b) => (b.onclick = () => git(() => karne(+b.dataset.h), "👨‍👩‍👧 Veli Karnesi", false)));
    el("vkYaz").onclick = () => window.print();
    el("vkPay").onclick = async () => {
      const metin = `${(window.SINIF && SINIF.baslik) || document.title} — Haftalık Karne${ad ? " (" + ad + ")" : ""}\n${aralik}\n\nÇalıştığı gün: ${H.aktif}/7\nOdaklı çalışma: ${H.sure} dk\nÇözülen soru: ${H.soru} (başarı ${ok == null ? "-" : "%" + ok})\nÖdev: ${H.odBiten}/${H.odToplam}${H.odGec ? `, ${H.odGec} gecikti` : ""}\n${iyi.length ? "\n👍 " + iyi.join("\n👍 ") : ""}${dikkat.length ? "\n⚠️ " + dikkat.join("\n⚠️ ") : ""}`;
      try { if (navigator.share) await navigator.share({ title: "Haftalık Karne", text: metin }); else { await navigator.clipboard.writeText(metin); alert("Karne panoya kopyalandı; WhatsApp'a yapıştırabilirsin."); } } catch (x) {}
    };
  }
  window.VELI_KARNESI_AC = () => git(() => karne(0), "👨‍👩‍👧 Veli Karnesi");

  // ---------- Stil ve ana sayfa kartları ----------
  const st = document.createElement("style");
  st.textContent = `.ozel-kart.aralikli{background:linear-gradient(135deg,#7c3aed,#db2777)}.ozel-kart.karne{background:linear-gradient(135deg,#475569,#0f766e)}
.vk h3{margin:18px 0 6px}.vk ul{margin:4px 0;padding-left:20px}.vk .karo small{display:block;font-size:12px}
@media print{body *{visibility:hidden}.vk,.vk *{visibility:visible}.vk{position:absolute;left:0;top:0;width:100%}.vk .secim{display:none}}`;
  document.head.appendChild(st);
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.push((kutu) => {
    const n = ARALIKLI_BUGUN(), b = document.createElement("button");
    b.className = "ozel-kart aralikli";
    b.innerHTML = `<span class="ikon">🧠</span><span><b>Aralıklı Tekrar</b><small>${n ? `Bugün ${n} soru seni bekliyor` : Object.keys(A).length ? "Bugünlük tekrar yok ✅" : "Yanlışların unutulmasın diye zamanında sorulur"}${kayit.ogrenilen ? ` · ${kayit.ogrenilen} öğrenildi` : ""}</small></span>`;
    b.onclick = window.ARALIKLI_AC; kutu.appendChild(b);
  });
  // Veli Karnesi ana sayfada ayrı kart değil, İlerleme Paneli'nin en üstünde
  if (typeof window.ilerlemePaneli === "function" && !window.ilerlemePaneli.karneli) {
    const asil = window.ilerlemePaneli;
    window.ilerlemePaneli = function () {
      asil.apply(this, arguments);
      const H = hafta(gunEkle(bugunT(), -((new Date().getDay() + 6) % 7)));
      const b = document.createElement("button"); b.className = "ozel-kart karne"; b.style.marginBottom = "16px";
      b.innerHTML = `<span class="ikon">👨‍👩‍👧</span><span><b>Haftalık Veli Karnesi</b><small>Bu hafta: ${H.aktif} gün · ${H.soru} soru${H.soru ? ` · %${Math.round((H.dogru / H.soru) * 100)} başarı` : ""} · paylaş / yazdır</small></span>`;
      b.onclick = window.VELI_KARNESI_AC; ekran.prepend(b);
    };
    window.ilerlemePaneli.karneli = true;
  }
  esitle();
  if (window.ANA_YENILE) window.ANA_YENILE();
})();
