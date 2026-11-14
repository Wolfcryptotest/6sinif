// 🧱 Ön koşul kontrolü (A2): bir konuda puan düşükse Bilge, önceki sınıflardaki temel konudan 3 soruluk kısa bir kontrol önerir.
// Temelde de eksik çıkarsa öğrenci ilgili sınıf bölümündeki o konuya "temel tamamlama" olarak yönlendirilir
// (index.html?konu=<id>&temel=<sınıf>:<konuId>). Veri: onkosul-veri.js (araclar/onkosul-uret.js üretir; yalnızca haritası olan sınıflarda).
// Kayıt: kayit.onkosul = { konuId: { t: zaman, atla: zaman, sonuc: { "7:m1k2": oran } } }.
// Ana kopya kökte; 5, 7–12'ye aynen kopyalanır. Bağlantı açma (?konu=) bütün sınıflarda çalışır.
(function () {
  if (typeof kayit === "undefined" || typeof window.konuSayfa !== "function") return;
  const GUN = 86400000, BEKLE = 7 * GUN;
  const O = (kayit.onkosul = kayit.onkosul || {});
  const M = window.ONKOSUL || {}, S = window.ONKOSUL_SORU || {};
  const U = () => (window.USTALIK && USTALIK.U) || kayit.ustalik || {};
  const buSinif = () => { const m = location.pathname.match(/\/(\d+)sinif\/[^/]*$/); return m ? +m[1] : 6; };
  // Başka bir sınıf bölümünün adresi (6. sınıf kökte, diğerleri Nsinif/ klasöründe)
  const adres = (g, id, ek) => {
    const ust = buSinif() === 6 ? "" : "../", yer = +g === 6 ? ust + "index.html" : ust + g + "sinif/index.html";
    return yer + "?konu=" + encodeURIComponent(id) + (ek ? "&" + ek : "");
  };
  const temelLink = (k, r) => adres(r[0], r[1], "temel=" + encodeURIComponent(buSinif() + ":" + k.id) + "&ad=" + encodeURIComponent(k.ad));
  const karistir = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ---------- 3 soruluk temel kontrolü ----------
  function kontrol(k) {
    const on = (M[k.id] || []).filter((r) => (S[r[0] + ":" + r[1]] || []).length);
    // Ön koşullardan sırayla soru al: tek ön koşulda 3, ikide 2+1 gibi
    const havuz = on.map((r) => karistir(S[r[0] + ":" + r[1]]).map((q) => ({ q, r })));
    const sorular = [];
    for (let t = 0; sorular.length < 3 && t < 6; t++) havuz.forEach((h) => { if (sorular.length < 3 && h[t]) sorular.push(h[t]); });
    if (!sorular.length) return;
    const say = {}; let i = 0;
    function goster() {
      if (i >= sorular.length) return bitir();
      const { q, r } = sorular[i], sira = karistir(q[1].map((_, j) => j));
      ekran.innerHTML = `
        <div class="tn-ust"><span>🧱 Temel kontrolü · ${esc(k.ad)}</span><span>${i + 1} / ${sorular.length}</span></div>
        <div class="ilerleme"><div style="width:${(i / sorular.length) * 100}%"></div></div>
        <div class="not">Temel konu: <b>${esc(r[2])}</b> (${r[0]}. sınıf)</div>
        <div class="soru">${esc(q[0])}</div>
        <div id="okSec"></div><div id="okGeri"></div>`;
      sira.forEach((asil, p) => {
        const b = document.createElement("button"); b.className = "secenek";
        b.textContent = "ABCD"[p] + ") " + q[1][asil];
        b.onclick = () => {
          const ok = asil === q[2], x = (say[r[0] + ":" + r[1]] = say[r[0] + ":" + r[1]] || [0, 0]);
          x[1]++; if (ok) x[0]++;
          ekran.querySelectorAll("#okSec .secenek").forEach((s, j) => { s.disabled = true; if (sira[j] === q[2]) s.classList.add("dogru"); else if (s === b) s.classList.add("yanlis"); });
          $("okGeri").innerHTML = `<div class="geri-bildirim ${ok ? "iyi" : "kotu"}">${ok ? "✅ Doğru!" : "❌ Doğru cevap: <b>" + esc(q[1][q[2]]) + "</b>"}${q[3] ? "<div>" + esc(q[3]) + "</div>" : ""}</div>
            <button class="btn" id="okDevam" style="width:100%;margin-top:10px">${i + 1 < sorular.length ? "Sonraki soru ➜" : "Sonucu gör"}</button>`;
          $("okDevam").onclick = () => { i++; goster(); };
        };
        $("okSec").appendChild(b);
      });
    }
    function bitir() {
      const sonuc = {};
      Object.entries(say).forEach(([ref, [d, n]]) => (sonuc[ref] = Math.round((d / n) * 100) / 100));
      O[k.id] = { t: Date.now(), sonuc };
      kaydet();
      gecmis.pop();
      git(() => sonucEkrani(k), "🧱 Temel Kontrolü");
    }
    goster();
  }

  function sonucEkrani(k) {
    const v = O[k.id] || {}, R = v.sonuc || {};
    const on = (M[k.id] || []).filter((r) => (r[0] + ":" + r[1]) in R);
    const zayif = on.filter((r) => R[r[0] + ":" + r[1]] < 1);
    ekran.innerHTML = `
      <div class="tn-bilge"><span class="tn-baykus">🦉</span><div><b>Bilge</b><div style="margin-top:4px">${zayif.length
        ? `Buldum! <b>${esc(k.ad)}</b> konusunda zorlanmanın bir nedeni, önceki yıllardan kalan bir eksik olabilir. Önce temeli tamamlayalım; sonra bu konu çok daha kolay gelecek. 💪`
        : `Temelin sağlam, aferin! 🌟 Demek ki eksik <b>${esc(k.ad)}</b> konusunun kendisinde. Anlatımı yavaşça bir daha oku, çözümlü örnekleri kendin çözmeyi dene, sonra soruları çöz.`}</div></div></div>
      <div id="okL"></div>
      <div class="satir"><button class="btn${zayif.length ? "2" : ""}" id="okKonu">📖 ${esc(k.ad)} konusuna dön</button></div>`;
    on.forEach((r) => {
      const o = R[r[0] + ":" + r[1]], d = document.createElement("div");
      d.className = "kart tn-unite " + (o >= 1 ? "tn-guclu" : o > 0 ? "tn-orta" : "tn-eksik");
      d.innerHTML = `<div class="tn-ubas"><b>${esc(r[2])}</b><span class="rozet">${r[0]}. sınıf · ${o >= 1 ? "💪 Sağlam" : o > 0 ? "🌱 Yarım" : "🧩 Eksik"}</span></div>` +
        (o < 1 ? `<a class="btn ok-temel" href="${esc(temelLink(k, r))}">🧱 Temel tamamlama: ${esc(r[2])}</a><div class="not" style="margin:6px 0 0">${r[0]}. sınıf bölümünde konu anlatımı ve testi açılır. Bitirince oradaki “geri dön” düğmesiyle buraya dönersin.</div>` : "");
      $("okL").appendChild(d);
    });
    $("okKonu").onclick = () => git(() => konuSayfa(k), k.ad);
  }

  // ---------- Konu sayfasına bağlama ----------
  const asilKS = window.konuSayfa;
  window.konuSayfa = function (k) {
    const r = asilKS.apply(this, arguments);
    try {
      const on = (M[k.id] || []).filter((x) => (S[x[0] + ":" + x[1]] || []).length);
      const u = U()[k.id];
      if (!on.length || !u || !u.n || u.p >= 50) return r;
      const v = O[k.id], kutu = document.createElement("div");
      const yakin = v && Date.now() - (v.t || v.atla || 0) < BEKLE;
      if (yakin && v.sonuc) {
        const zayif = on.filter((x) => (x[0] + ":" + x[1]) in v.sonuc && v.sonuc[x[0] + ":" + x[1]] < 1);
        if (!zayif.length) return r;
        kutu.className = "onkosul";
        kutu.innerHTML = `🧱 Temel kontrolünde eksik çıkan konu${zayif.length > 1 ? "lar" : ""}: ${zayif.map((x) => `<a href="${esc(temelLink(k, x))}"><b>${esc(x[2])}</b> (${x[0]}. sınıf)</a>`).join(", ")}. Önce onu tamamlarsan bu konu kolaylaşır.`;
        ekran.prepend(kutu);
        return r;
      }
      if (yakin) return r;
      kutu.className = "tn-bilge";
      kutu.innerHTML = `<span class="tn-baykus">🦉</span><div><b>Bilge:</b> Bu konuda biraz zorlanıyorsun (puanın <b>${u.p}/100</b>). Bazen sorun önceki yıllardan kalan bir eksikten gelir. Bu konunun temeli: ${on.map((x) => `<b>${esc(x[2])}</b> (${x[0]}. sınıf)`).join(", ")}. <b>3 soruyla</b> temelini kontrol edeyim mi?
        <div class="satir" style="margin:10px 0 0"><button class="btn" id="okBasla">🧱 Temeli kontrol et</button><button class="btn2" id="okSonra">Şimdi değil</button></div></div>`;
      ekran.prepend(kutu);
      $("okBasla").onclick = () => git(() => kontrol(k), "🧱 Temel Kontrolü");
      $("okSonra").onclick = () => { O[k.id] = { atla: Date.now() }; kaydet(); kutu.remove(); };
    } catch (e) {}
    return r;
  };

  // ---------- Bağlantıyla gelen konu (?konu=...&temel=...) ----------
  // Ana sayfa sayfanın sonundaki betikte açılır; bağlantıdaki konu ondan sonra açılsın ki geri düğmesi ana sayfaya dönsün
  const baglanti = () => { try {
    const q = new URLSearchParams(location.search), id = q.get("konu");
    const f = id && typeof konuBul === "function" && konuBul(id);
    if (f) {
      const temel = (q.get("temel") || "").match(/^(\d+):([\w-]+)$/), ad = q.get("ad") || "";
      history.replaceState(null, "", location.pathname);
      git(() => {
        konuSayfa(f.konu);
        if (!temel) return;
        const d = document.createElement("div"); d.className = "onkosul";
        d.innerHTML = `🧱 <b>Temel tamamlama</b> · ${temel[1]}. sınıftaki <b>${esc(ad || "konun")}</b> için buradasın. Anlatımı oku, örneklere bak ve testi çöz. Hazır olunca geri dön.
          <div class="satir" style="margin:8px 0 0"><a class="btn2" href="${esc(adres(temel[1], temel[2]))}">↩️ ${temel[1]}. sınıfa geri dön</a></div>`;
        ekran.prepend(d);
      }, f.konu.ad);
    }
  } catch (e) {} };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", baglanti); else baglanti();

  window.ONKOSUL_KONTROL = { baslat: (k) => git(() => kontrol(k), "🧱 Temel Kontrolü"), adres };
  const st = document.createElement("style");
  st.textContent = `.ok-temel{display:block;text-align:center;text-decoration:none;margin-top:10px}.onkosul a{color:inherit}.onkosul a.btn2{text-decoration:none;display:inline-block}
    .geri-bildirim{margin-top:12px;border-radius:14px;padding:12px 14px;line-height:1.5}.geri-bildirim.iyi{background:color-mix(in srgb,#16a34a 12%,var(--kart))}.geri-bildirim.kotu{background:color-mix(in srgb,#e5484d 10%,var(--kart))}.geri-bildirim div{margin-top:6px}`;
  document.head.appendChild(st);
})();
