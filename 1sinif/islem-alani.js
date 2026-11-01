// ✏️ İşlem Alanı — soru ekranlarında açılan karalama defteri, alt alta 4 işlem şablonları ve ekran klavyesi.
// Uygulama koduna dokunmaz: #ekran içinde soru (.soru, .soru-metni, .kagit, textarea) görünce köşede düğme çıkar.
// Bütün sınıflarda (1–11) aynı dosya kullanılır.
(function () {
  "use strict";
  if (window.ISLEM_ALANI) return;
  window.ISLEM_ALANI = true;

  // ---------------- Stiller ----------------
  const css = `
.ia-dugme{position:fixed;right:16px;bottom:16px;z-index:40;display:flex;align-items:center;gap:8px;border:none;border-radius:999px;padding:14px 20px;font:700 18px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#fff;background:linear-gradient(135deg,#2563eb,#7c3aed);box-shadow:0 8px 24px rgba(37,99,235,.35);cursor:pointer}
.ia-dugme[hidden]{display:none}
body.ia-dugmeli{padding-bottom:84px}
.ia-panel{position:fixed;z-index:41;left:0;right:0;bottom:0;height:min(72vh,640px);display:flex;flex-direction:column;background:var(--kart,#fff);color:var(--yazi,#1d2433);border-top:2px solid var(--sinir,#e4e7ec);border-radius:18px 18px 0 0;box-shadow:0 -10px 30px rgba(0,0,0,.18);font:16px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
.ia-panel[hidden]{display:none}
.ia-panel.kucuk{height:auto}
.ia-panel.kucuk .ia-govde,.ia-panel.kucuk .ia-klavye{display:none}
@media (min-width:1000px){
  .ia-panel{left:auto;top:0;bottom:0;width:460px;height:auto;border-top:none;border-left:2px solid var(--sinir,#e4e7ec);border-radius:0;box-shadow:-10px 0 30px rgba(0,0,0,.12)}
  .ia-panel.kucuk{top:auto;height:auto;border-radius:18px 0 0 0}
  body.ia-acik #ekran{margin-left:24px;margin-right:484px}
  .ia-sekmeler{flex-wrap:wrap}
}
@media (max-width:999px){ body.ia-acik{padding-bottom:min(72vh,640px)} }
.ia-ust{display:flex;align-items:center;gap:6px;padding:8px 10px;border-bottom:1px solid var(--sinir,#e4e7ec)}
.ia-ust b{font-size:17px;flex:1;white-space:nowrap}
.ia-k{border:1px solid var(--sinir,#e4e7ec);background:var(--bg,#f4f6fb);color:var(--yazi,#1d2433);border-radius:10px;padding:6px 10px;font:600 15px system-ui,sans-serif;cursor:pointer;min-height:38px;touch-action:manipulation}
.ia-k.secili{background:#2563eb;border-color:#2563eb;color:#fff}
.ia-k:disabled{opacity:.45}
.ia-sekmeler{display:flex;gap:6px;padding:8px 10px 0;overflow-x:auto;scrollbar-width:none}
.ia-sekmeler .ia-k{white-space:nowrap}
.ia-govde{flex:1;min-height:0;overflow:auto;padding:8px 10px;-webkit-overflow-scrolling:touch}
.ia-arac{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:8px}
.ia-renk{width:30px;height:30px;border-radius:50%;border:3px solid transparent;cursor:pointer;padding:0}
.ia-renk.secili{border-color:var(--yazi,#1d2433)}
.ia-kagit{position:relative;border-radius:12px;border:1px solid #d9dde5;overflow:hidden;background-color:#fffef8;background-image:linear-gradient(#dfe7f3 1px,transparent 1px),linear-gradient(90deg,#dfe7f3 1px,transparent 1px);background-size:24px 24px;touch-action:none}
.ia-kagit canvas{display:block;width:100%;touch-action:none;cursor:crosshair}
.ia-ipucu{font-size:14px;color:var(--soluk,#667085);margin:4px 0}
.ia-ipucu.uyari{color:#b45309;font-weight:600}
.ia-sayilar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:2px 0 10px}
.ia-giris{min-width:92px;min-height:44px;padding:6px 10px;border:2px dashed #94a3b8;border-radius:10px;background:#fffef8;color:#111827;font:700 22px ui-monospace,Menlo,Consolas,monospace;letter-spacing:2px;text-align:right;cursor:pointer}
.ia-giris.secili{border-style:solid;border-color:#2563eb;box-shadow:0 0 0 3px rgba(37,99,235,.2)}
.ia-giris:empty::before{content:attr(data-bos);color:#94a3b8;font:500 15px system-ui,sans-serif;letter-spacing:0}
.ia-op{font:700 26px system-ui,sans-serif}
.ia-izgara-kap{overflow-x:auto;padding:6px 2px 10px}
.ia-izgara{display:inline-grid;gap:3px;background:#fffef8;padding:10px;border-radius:12px;border:1px solid #d9dde5;color:#111827}
.ia-adim{background:#fffef8;color:#111827;border:1px solid #d9dde5;border-radius:12px;padding:8px 10px;margin:0 0 8px}
.ia-adim>b{display:block;font-size:14px;margin-bottom:6px;color:#334155}
.ia-adim .ia-not{font-size:13px;color:#64748b;margin-top:4px}
.ia-satir{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.ia-kesir{display:inline-flex;align-items:center;gap:4px}
.ia-kd{display:inline-flex;flex-direction:column;align-items:stretch;gap:3px}
.ia-kd .ia-kc{height:3px;background:#334155;border-radius:2px}
.ia-kg{min-width:48px;min-height:38px;padding:2px 6px;border:2px dashed #94a3b8;border-radius:8px;background:#fff;color:#111827;font:700 20px ui-monospace,Menlo,Consolas,monospace;text-align:center;cursor:pointer;display:flex;align-items:center;justify-content:center}
.ia-kg.tam{min-height:46px;font-size:24px}
.ia-kg.secili{border-style:solid;border-color:#2563eb;box-shadow:0 0 0 3px rgba(37,99,235,.2)}
.ia-kg.dogru{border-style:solid;border-color:#16a34a;background:#dcfce7}
.ia-kg.yanlis{border-style:solid;border-color:#dc2626;background:#fee2e2}
.ia-kg.gosterilen{color:#2563eb}
.ia-kg:empty::before{content:attr(data-bos);color:#94a3b8;font:500 12px system-ui,sans-serif}
.ia-virgul{position:absolute;right:-8px;bottom:-4px;font:800 26px system-ui,sans-serif;color:#dc2626;pointer-events:none}
.ia-h{position:relative;width:40px;height:44px;border:1.5px solid #c7d0dd;border-radius:7px;background:#fff;display:flex;align-items:center;justify-content:center;font:700 24px ui-monospace,Menlo,Consolas,monospace;cursor:pointer;user-select:none}
.ia-h.kucuk{height:28px;font-size:16px;border-style:dashed;color:#7c3aed}
.ia-h.sabit{background:#eef2ff;border-color:#c7d2fe;cursor:default}
.ia-h.kapali{background:repeating-linear-gradient(45deg,#f1f5f9,#f1f5f9 4px,#e2e8f0 4px,#e2e8f0 8px);border-color:#e2e8f0;cursor:default}
.ia-h.secili{border-color:#2563eb;box-shadow:0 0 0 3px rgba(37,99,235,.3);background:#eff6ff}
.ia-h.dogru{border-color:#16a34a;background:#dcfce7}
.ia-h.yanlis{border-color:#dc2626;background:#fee2e2}
.ia-h.gosterilen{color:#2563eb}
.ia-bos{width:40px}
.ia-isaret{display:flex;align-items:center;justify-content:center;font:700 24px system-ui,sans-serif;color:#334155}
.ia-cizgi{height:3px;background:#334155;border-radius:2px;align-self:center}
.ia-dikey{width:3px;background:#334155;justify-self:center}
.ia-etiket{font:600 11px system-ui,sans-serif;color:#64748b;text-align:center;align-self:end}
.ia-sonuc{border-radius:12px;padding:10px 12px;margin-top:6px;font-size:15px}
.ia-sonuc.iyi{background:#dcfce7;color:#14532d}
.ia-sonuc.kotu{background:#fee2e2;color:#7f1d1d}
.ia-sonuc.bilgi{background:#e0f2fe;color:#0c4a6e}
.ia-klavye{border-top:1px solid var(--sinir,#e4e7ec);padding:8px 10px calc(8px + env(safe-area-inset-bottom));background:var(--bg,#f4f6fb)}
.ia-tuslar{display:grid;grid-template-columns:repeat(6,1fr);gap:6px}
.ia-tus{min-height:46px;border:1px solid #cbd5e1;border-radius:10px;background:#fff;color:#111827;font:700 21px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;user-select:none}
.ia-tus:active{transform:translateY(1px);background:#e2e8f0}
.ia-tus.gri{background:#e2e8f0;font-size:18px}
.ia-tus.secili{background:#2563eb;color:#fff;border-color:#2563eb}
.ia-simgeler{display:flex;gap:6px;overflow-x:auto;margin-top:6px;padding-bottom:2px;scrollbar-width:thin}
.ia-simgeler .ia-tus{min-width:46px;flex:0 0 auto}
.ia-hedef{display:flex;gap:6px;align-items:center;margin-bottom:6px;font-size:14px;flex-wrap:wrap}
@media (prefers-color-scheme:dark){.ia-tus{background:#1f2937;color:#f9fafb;border-color:#374151}.ia-tus.gri{background:#374151}.ia-tus:active{background:#4b5563}}
@media print{.ia-dugme,.ia-panel{display:none!important}}
`;
  const st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  // ---------------- Yardımcılar ----------------
  const h = (etiket, ozellik = {}, ...cocuklar) => {
    const e = document.createElement(etiket);
    for (const [k, v] of Object.entries(ozellik)) {
      if (k === "class") e.className = v;
      else if (k === "text") e.textContent = v;
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) e.setAttribute(k, v === true ? "" : v);
    }
    for (const c of cocuklar.flat()) if (c != null) e.append(c);
    return e;
  };
  const oku = (k, v) => { try { const x = localStorage.getItem("ia-" + k); return x == null ? v : JSON.parse(x); } catch (e) { return v; } };
  const yaz = (k, v) => { try { localStorage.setItem("ia-" + k, JSON.stringify(v)); } catch (e) {} };
  // Düğmeye basınca odak (cevap kutusu) kaybolmasın
  const odakKorur = (el) => { el.addEventListener("pointerdown", (e) => e.preventDefault()); el.addEventListener("mousedown", (e) => e.preventDefault()); return el; };

  const ekran = document.getElementById("ekran") || document.querySelector("main") || document.body;
  const SEKMELER = [
    ["karalama", "✏️ Karalama"], ["topla", "➕ Toplama"], ["cikar", "➖ Çıkarma"], ["carp", "✖️ Çarpma"], ["bol", "➗ Bölme"], ["kesir", "½ Kesir"]
  ];
  let sekme = oku("sekme", "karalama");
  if (!SEKMELER.some((s) => s[0] === sekme)) sekme = "karalama";

  // ---------------- Panel iskeleti ----------------
  const dugme = h("button", { class: "ia-dugme", type: "button", hidden: true, title: "Karalama ve işlem alanı", "aria-label": "İşlem alanını aç" }, "✏️ İşlem Alanı");
  const govde = h("div", { class: "ia-govde" });
  const klavye = h("div", { class: "ia-klavye" });
  const sekmeKutu = h("div", { class: "ia-sekmeler", role: "tablist" });
  const kucultBtn = h("button", { class: "ia-k", type: "button", title: "Küçült / büyüt", "aria-label": "Paneli küçült" }, "▾");
  const kapatBtn = h("button", { class: "ia-k", type: "button", title: "Kapat", "aria-label": "İşlem alanını kapat" }, "✕");
  const panel = h("section", { class: "ia-panel", hidden: true, "aria-label": "İşlem alanı" },
    h("div", { class: "ia-ust" }, h("b", { text: "✏️ İşlem Alanı" }), kucultBtn, kapatBtn), sekmeKutu, govde, klavye);
  document.body.append(dugme, panel);

  function ac() {
    panel.hidden = false; dugme.hidden = true; panel.classList.remove("kucuk"); kucultBtn.textContent = "▾";
    document.body.classList.add("ia-acik"); ciz();
  }
  function kapat() { panel.hidden = true; document.body.classList.remove("ia-acik"); soruVarMi(); }
  dugme.onclick = ac;
  kapatBtn.onclick = kapat;
  kucultBtn.onclick = () => { const k = panel.classList.toggle("kucuk"); kucultBtn.textContent = k ? "▴" : "▾"; document.body.classList.toggle("ia-acik", !k); if (!k) ciz(); };

  function sekmeleriCiz() {
    sekmeKutu.innerHTML = "";
    for (const [id, ad] of SEKMELER) {
      const b = h("button", { class: "ia-k" + (id === sekme ? " secili" : ""), type: "button", role: "tab", "aria-selected": id === sekme ? "true" : "false" }, ad);
      b.onclick = () => { sekme = id; yaz("sekme", id); ciz(); };
      sekmeKutu.append(b);
    }
  }

  // ---------------- Ekran klavyesi ----------------
  // hedef: "kalem" (karalamaya simge yerleştir), "cevap" (cevap kutusuna yaz), şablonlarda hücre/sayı kutusu
  const SIMGELER = ["+", "−", "×", "÷", "=", "(", ")", "/", ",", "%", "²", "³", "√", "π", "<", ">", "≤", "≥", "≠", "°", "x", "y", "a", "b", "½", "…"];
  let sonCevap = null;      // en son odaklanılan cevap kutusu (textarea / metin kutusu)
  let cevapModu = false;    // karalama sekmesinde tuşlar cevap kutusuna mı yazsın
  let karKlavye = oku("karKlavye", false); // karalamada tuş takımı açık mı
  let damga = null;         // karalamaya yerleştirilecek simge
  document.addEventListener("focusin", (e) => {
    const t = e.target;
    if (t && (t.tagName === "TEXTAREA" || (t.tagName === "INPUT" && /^(text|search|)$/.test(t.type || ""))) && !panel.contains(t)) sonCevap = t;
  });
  const cevapKutusuVar = () => sonCevap && document.body.contains(sonCevap);

  function cevabaYaz(metin) {
    const t = sonCevap;
    if (!t || !document.body.contains(t)) return false;
    const bas = t.selectionStart ?? t.value.length, son = t.selectionEnd ?? t.value.length;
    if (metin === "⌫") {
      if (bas === son && bas > 0) { t.value = t.value.slice(0, bas - 1) + t.value.slice(son); t.selectionStart = t.selectionEnd = bas - 1; }
      else { t.value = t.value.slice(0, bas) + t.value.slice(son); t.selectionStart = t.selectionEnd = bas; }
    } else {
      t.value = t.value.slice(0, bas) + metin + t.value.slice(son);
      t.selectionStart = t.selectionEnd = bas + metin.length;
    }
    t.dispatchEvent(new Event("input", { bubbles: true }));
    return true;
  }

  function klavyeCiz() {
    klavye.innerHTML = "";
    const sablon = sekme !== "karalama";
    if (!sablon) {
      const ac_ = odakKorur(h("button", { class: "ia-k" + (karKlavye ? " secili" : ""), type: "button", "aria-expanded": karKlavye ? "true" : "false" }, karKlavye ? "🔢 Tuşları gizle" : "🔢 Rakam ve simge tuşları"));
      ac_.onclick = () => { karKlavye = !karKlavye; yaz("karKlavye", karKlavye); if (!karKlavye) { damga = null; cevapModu = false; } klavyeCiz(); karalamaIpucu(); boyutla(); };
      const hedef = h("div", { class: "ia-hedef" }, ac_);
      if (karKlavye && cevapKutusuVar()) {
        const b1 = odakKorur(h("button", { class: "ia-k" + (!cevapModu ? " secili" : ""), type: "button" }, "🖐️ Kâğıda koy"));
        const b2 = odakKorur(h("button", { class: "ia-k" + (cevapModu ? " secili" : ""), type: "button" }, "📝 Cevap kutusuna yaz"));
        b1.onclick = () => { cevapModu = false; klavyeCiz(); karalamaIpucu(); };
        b2.onclick = () => { cevapModu = true; damga = null; klavyeCiz(); karalamaIpucu(); };
        hedef.append(b1, b2);
      } else if (!cevapKutusuVar()) cevapModu = false;
      klavye.append(hedef);
      if (!karKlavye) return;
    }
    const tus = (etiket, deger, sinif = "") => {
      const b = odakKorur(h("button", { class: "ia-tus " + sinif, type: "button", "aria-label": deger === "⌫" ? "Sil" : etiket }, etiket));
      b.onclick = () => tusaBas(deger);
      if (!sablon && !cevapModu && damga === deger) b.classList.add("secili");
      return b;
    };
    const ana = h("div", { class: "ia-tuslar" });
    const duzen = sablon
      ? [["7", "8", "9", "⌫", ",", "Sıfırla"], ["4", "5", "6", "←", "→", "↑"], ["1", "2", "3", "0", "Sonraki", "Tamam"]]
      : [["7", "8", "9", "+", "−", "⌫"], ["4", "5", "6", "×", "÷", "="], ["1", "2", "3", "0", ",", "␣"]];
    for (const satir of duzen) for (const k of satir) {
      const gri = /[⌫←→↑↓]|Sıfırla|Sonraki|Tamam|␣/.test(k) || (sablon && k === ",");
      const etiket = k === "Sıfırla" ? "🧹" : k === "Sonraki" ? "⏭️" : k === "Tamam" ? "✅" : k === "␣" ? "boşluk" : k;
      const b = tus(etiket, k, gri ? "gri" : "");
      if (k === "Sıfırla") b.title = "Seçili kutuyu boşalt";
      if (k === "Sonraki") b.title = "Sonraki satıra geç";
      if (k === "Tamam") b.title = "Kontrol et";
      if (k === "␣") b.style.fontSize = "15px";
      ana.append(b);
    }
    klavye.append(ana);
    if (!sablon) {
      const sim = h("div", { class: "ia-simgeler", "aria-label": "Matematik simgeleri" });
      for (const s of SIMGELER) if (!"+−×÷=,".includes(s)) sim.append(tus(s, s));
      klavye.append(sim);
    }
  }

  function tusaBas(k) {
    if (sekme === "karalama") {
      const harf = k === "␣" ? " " : k;
      if (cevapModu) { if (!cevabaYaz(harf)) { cevapModu = false; klavyeCiz(); } return; }
      if (k === "⌫") { geriAl(); return; }
      damga = damga === harf ? null : harf;
      klavyeCiz(); karalamaIpucu();
      return;
    }
    if (sekme === "kesir") kesirTus(k); else sablonTus(k);
  }

  // ---------------- Karalama defteri ----------------
  const K = { cizgiler: [], renk: oku("renk", "#1f2937"), kalinlik: oku("kalinlik", 3), silgi: false };
  let tuval = null, baglam = null, ipucuEl = null, aktif = null;

  function karalamaIpucu() {
    if (!ipucuEl) return;
    ipucuEl.className = "ia-ipucu" + (damga ? " uyari" : "");
    ipucuEl.textContent = cevapModu ? "Tuşlar cevap kutusuna yazıyor. Kâğıda çizmek için parmağını ya da kalemi kullan."
      : damga ? `"${damga}" simgesini koymak için kâğıtta bir yere dokun.` : "Parmağınla ya da kalemle yaz, çiz. Rakam ve simgeleri tuşlarla da koyabilirsin.";
  }

  function karalamaCiz() {
    const renkler = [["#1f2937", "Siyah"], ["#2563eb", "Mavi"], ["#dc2626", "Kırmızı"]];
    const arac = h("div", { class: "ia-arac" });
    const kalem = h("button", { class: "ia-k" + (!K.silgi ? " secili" : ""), type: "button" }, "✏️ Kalem");
    const silgi = h("button", { class: "ia-k" + (K.silgi ? " secili" : ""), type: "button" }, "🧽 Silgi");
    kalem.onclick = () => { K.silgi = false; damga = null; karalamaCiz(); klavyeCiz(); };
    silgi.onclick = () => { K.silgi = true; damga = null; karalamaCiz(); klavyeCiz(); };
    arac.append(kalem, silgi);
    for (const [r, ad] of renkler) {
      const b = h("button", { class: "ia-renk" + (K.renk === r && !K.silgi ? " secili" : ""), type: "button", title: ad, "aria-label": ad + " kalem", style: `background:${r}` });
      b.onclick = () => { K.renk = r; K.silgi = false; yaz("renk", r); karalamaCiz(); };
      arac.append(b);
    }
    const kal = h("button", { class: "ia-k", type: "button", title: "Kalem kalınlığı" }, K.kalinlik > 3 ? "Kalın" : "İnce");
    kal.onclick = () => { K.kalinlik = K.kalinlik > 3 ? 3 : 6; yaz("kalinlik", K.kalinlik); karalamaCiz(); };
    const geri = h("button", { class: "ia-k", type: "button", title: "Geri al", "aria-label": "Geri al" }, "↶");
    geri.onclick = geriAl;
    const tem = h("button", { class: "ia-k", type: "button", title: "Hepsini sil", "aria-label": "Hepsini sil" }, "🗑️");
    tem.onclick = () => { if (!K.cizgiler.length || confirm("Karalama kâğıdındaki her şey silinsin mi?")) { K.cizgiler = []; yenidenCiz(); } };
    arac.append(kal, geri, tem);
    ipucuEl = h("div", { class: "ia-ipucu" });
    tuval = h("canvas", { "aria-label": "Karalama kâğıdı" });
    const kagit = h("div", { class: "ia-kagit" }, tuval);
    govde.replaceChildren(arac, kagit, ipucuEl);
    karalamaIpucu();
    boyutla();
    tuvalOlaylari();
  }

  function boyutla() {
    if (!tuval) return;
    const g = tuval.parentElement.clientWidth || 300;
    const yuk = Math.max(260, Math.min(1400, govde.clientHeight - 90 || 320));
    const oran = window.devicePixelRatio || 1;
    tuval.style.height = yuk + "px";
    tuval.width = Math.round(g * oran); tuval.height = Math.round(yuk * oran);
    baglam = tuval.getContext("2d");
    baglam.setTransform(oran, 0, 0, oran, 0, 0);
    yenidenCiz();
  }

  function cizgiCiz(c) {
    const b = baglam;
    if (c.tip === "yazi") {
      b.globalCompositeOperation = "source-over";
      b.fillStyle = c.renk; b.font = `700 ${c.boyut}px system-ui,sans-serif`; b.textAlign = "center"; b.textBaseline = "middle";
      b.fillText(c.metin, c.x, c.y);
      return;
    }
    b.globalCompositeOperation = c.silgi ? "destination-out" : "source-over";
    b.strokeStyle = c.renk; b.lineWidth = c.silgi ? 24 : c.kalinlik; b.lineCap = "round"; b.lineJoin = "round";
    const n = c.noktalar;
    b.beginPath();
    if (n.length === 1) { b.arc(n[0][0], n[0][1], b.lineWidth / 2, 0, Math.PI * 2); b.fillStyle = c.renk; if (!c.silgi) b.fill(); else b.fill(); return; }
    b.moveTo(n[0][0], n[0][1]);
    for (let i = 1; i < n.length - 1; i++) { const mx = (n[i][0] + n[i + 1][0]) / 2, my = (n[i][1] + n[i + 1][1]) / 2; b.quadraticCurveTo(n[i][0], n[i][1], mx, my); }
    b.lineTo(n[n.length - 1][0], n[n.length - 1][1]);
    b.stroke();
  }
  function yenidenCiz() {
    if (!baglam) return;
    baglam.save(); baglam.setTransform(1, 0, 0, 1, 0, 0); baglam.clearRect(0, 0, tuval.width, tuval.height); baglam.restore();
    for (const c of K.cizgiler) cizgiCiz(c);
    baglam.globalCompositeOperation = "source-over";
  }
  function geriAl() { K.cizgiler.pop(); yenidenCiz(); }

  function tuvalOlaylari() {
    const nokta = (e) => { const r = tuval.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    tuval.onpointerdown = (e) => {
      if (aktif !== null || (e.pointerType === "mouse" && e.button !== 0)) return;
      e.preventDefault();
      if (damga && !K.silgi) {
        const [x, y] = nokta(e);
        K.cizgiler.push({ tip: "yazi", metin: damga, x, y, renk: K.renk, boyut: 28 });
        cizgiCiz(K.cizgiler[K.cizgiler.length - 1]);
        damga = null; klavyeCiz(); karalamaIpucu();
        return;
      }
      aktif = e.pointerId;
      try { tuval.setPointerCapture(e.pointerId); } catch (err) {}
      K.cizgiler.push({ tip: "cizgi", renk: K.renk, kalinlik: e.pointerType === "pen" ? Math.max(2, K.kalinlik - 1) : K.kalinlik, silgi: K.silgi, noktalar: [nokta(e)] });
      yenidenCizSon();
    };
    tuval.onpointermove = (e) => {
      if (e.pointerId !== aktif) return;
      e.preventDefault();
      const c = K.cizgiler[K.cizgiler.length - 1];
      const olaylar = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
      for (const o of (olaylar.length ? olaylar : [e])) c.noktalar.push(nokta(o));
      yenidenCizSon();
    };
    const bitir = (e) => { if (e.pointerId === aktif) { aktif = null; yenidenCiz(); } };
    tuval.onpointerup = bitir; tuval.onpointercancel = bitir; tuval.onlostpointercapture = bitir;
  }
  // Çizim sırasında yalnızca son çizgiyi güncelle (hızlı)
  function yenidenCizSon() {
    const c = K.cizgiler[K.cizgiler.length - 1];
    if (!c) return;
    if (c.silgi || c.noktalar.length < 3) { yenidenCiz(); return; }
    const n = c.noktalar, b = baglam;
    b.globalCompositeOperation = "source-over";
    b.strokeStyle = c.renk; b.lineWidth = c.kalinlik; b.lineCap = "round"; b.lineJoin = "round";
    b.beginPath(); b.moveTo(n[n.length - 2][0], n[n.length - 2][1]); b.lineTo(n[n.length - 1][0], n[n.length - 1][1]); b.stroke();
  }

  // ---------------- Alt alta işlem şablonları ----------------
  // Her şablon: a, b (öğrencinin yazdığı sayılar, metin), hucre: { "satır:sütun": rakam }, secim: { tur: "giris"|"hucre", ... }
  const SB = {};
  const yeniSablon = () => ({ a: "", b: "", a2: "", b2: "", hucre: {}, secim: { tur: "giris", ad: "a" }, isaret: {}, mesaj: null, gosterildi: false });
  for (const s of ["topla", "cikar", "carp", "bol"]) SB[s] = yeniSablon();
  const SINIR = { topla: [7, 7], cikar: [7, 7], carp: [5, 3], bol: [6, 3], a2: [9], b2: [6] };
  const OP = { topla: "+", cikar: "−", carp: "×", bol: "÷" };
  const BASAMAK = ["B", "O", "Y", "Bb", "Ob", "Yb", "M", "OM"];
  const ONDALIK = ["⅒", "1/100", "1/1000"];
  // Ondalık sayılar: "12,5" → rakamlar "125", virgülden sonra 1 basamak
  const rak = (x) => x.replace(",", "");
  const rakC = (x) => rak(x).replace(/^0+(?=\d)/, ""); // çarpmada baştaki sıfırlar (0,3 → 3) satır açmaz
  const ond = (x) => (x.includes(",") ? x.length - x.indexOf(",") - 1 : 0);
  const tamK = (x) => (x.includes(",") ? x.indexOf(",") : x.length);
  const ondF = (tur, s) => (tur === "carp" ? ond(s.a) + ond(s.b) : Math.max(ond(s.a), ond(s.b)));
  const olcekli = (x, F) => BigInt(rak(x) || "0") * 10n ** BigInt(F - ond(x));
  // Sayının p. sütundaki rakamı (p = 0 en sağdaki sütun). Toplama/çıkarmada virgüller hizalanır, çarpmada sayılar sağa yaslanır.
  function rakamAt(tur, x, p, F) {
    const d = rak(x), kay = tur === "carp" ? 0 : F - ond(x), i = d.length - 1 - (p - kay);
    return i >= 0 && i < d.length ? d[i] : "";
  }
  // Ekranda gösterim: binlik ayırıcı nokta, ondalık virgül
  const sayiYaz = (x) => { const [t, o] = String(x).split(","); return binlik(t) + (o != null && o !== "" ? "," + o : ""); };
  const olcekliYaz = (str, F) => { if (!F) return binlik(str.replace(/^0+(?=\d)/, "")); const t = str.slice(0, -F).replace(/^0+(?=\d)/, "") || "0", o = str.slice(-F).replace(/0+$/, ""); return binlik(t) + (o ? "," + o : ""); };

  // Şablonun satır yapısını üretir. Satır: { id, tur: "sayi"|"hucre"|"kucuk"|"cizgi", isaret, kapali:[sütunlar], yon: -1|1, kontrol }
  function yapi(tur, s) {
    const a = s.a, b = s.b;
    if (tur === "bol") return null;
    const F = ondF(tur, s);
    const genis = tur === "topla" ? Math.max(tamK(a), tamK(b), 1) + 1 + F : tur === "cikar" ? Math.max(tamK(a), tamK(b), 1) + F : Math.max(rakC(a).length + rakC(b).length, F + 1, 2);
    const sat = [];
    if (tur === "topla" || tur === "carp") sat.push({ id: "elde", tur: "kucuk", etiket: "elde", yon: -1 });
    if (tur === "cikar") sat.push({ id: "bozma", tur: "kucuk", etiket: "bozma", yon: -1 });
    sat.push({ id: "a", tur: "sayi", deger: a });
    sat.push({ id: "b", tur: "sayi", deger: b, isaret: OP[tur] });
    sat.push({ tur: "cizgi" });
    const bn = rakC(b).length;
    if (tur === "carp" && bn > 1) {
      for (let i = 0; i < bn; i++) sat.push({ id: "ara" + i, tur: "hucre", yon: -1, kapali: i, isaret: i === bn - 1 ? "+" : "", ara: i });
      sat.push({ tur: "cizgi" });
    }
    sat.push({ id: "sonuc", tur: "hucre", yon: -1, kontrol: true });
    return { genis, sat, F };
  }

  // Doğru sonuç: virgülsüz rakam dizisi, en az F+1 basamak (ör. 0,75 → "075", F = 2)
  function dogruSonuc(tur, s) {
    const F = ondF(tur, s);
    let v;
    if (tur === "topla") v = olcekli(s.a, F) + olcekli(s.b, F);
    else if (tur === "cikar") v = olcekli(s.a, F) - olcekli(s.b, F);
    else if (tur === "carp") v = BigInt(rak(s.a) || "0") * BigInt(rak(s.b) || "0");
    else return null;
    return String(v).padStart(F + 1, "0");
  }

  function sablonCiz() {
    const s = SB[sekme];
    const [ma, mb] = SINIR[sekme];
    const adlar = sekme === "bol" ? ["Bölünen", "Bölen"] : sekme === "cikar" ? ["Eksilen", "Çıkan"] : sekme === "carp" ? ["1. çarpan", "2. çarpan"] : ["1. sayı", "2. sayı"];
    const giris = (ad, i) => {
      const el = h("div", { class: "ia-giris" + (s.secim.tur === "giris" && s.secim.ad === ad ? " secili" : ""), role: "textbox", tabindex: "0", "data-bos": adlar[i], "aria-label": adlar[i] }, s[ad]);
      el.onclick = () => { s.secim = { tur: "giris", ad }; sablonCiz(); };
      return el;
    };
    const sayilar = h("div", { class: "ia-sayilar" }, giris("a", 0), h("span", { class: "ia-op", text: OP[sekme] }), giris("b", 1));
    const arac = h("div", { class: "ia-arac" });
    const kontrol = h("button", { class: "ia-k", type: "button" }, "✅ Kontrol et");
    const goster = h("button", { class: "ia-k", type: "button" }, "👁️ Cevabı göster");
    const temizle = h("button", { class: "ia-k", type: "button" }, "🗑️ Yeni işlem");
    kontrol.onclick = () => kontrolEt(false);
    goster.onclick = () => kontrolEt(true);
    temizle.onclick = () => { SB[sekme] = yeniSablon(); sablonCiz(); };
    arac.append(kontrol, goster, temizle);
    const parca = [h("div", { class: "ia-ipucu", text: ipucuMetni() }), sayilar];
    const tamYazildi = s.a && s.b && !s.a.endsWith(",") && !s.b.endsWith(",");
    const D = sekme === "bol" && tamYazildi ? bolDurum(s) : null;
    if (D && D.adimGerek) {
      const g2 = (ad, bos, ok) => {
        const el = h("div", { class: "ia-giris" + (s.secim.tur === "giris" && s.secim.ad === ad ? " secili" : ""), role: "textbox", tabindex: "0", "data-bos": bos, "aria-label": bos, style: s[ad] && !ok && !(s.secim.tur === "giris" && s.secim.ad === ad) ? "border-color:#dc2626;border-style:solid" : s[ad] && ok ? "border-color:#16a34a;border-style:solid" : null }, s[ad]);
        el.onclick = () => { s.secim = { tur: "giris", ad }; sablonCiz(); };
        return el;
      };
      parca.push(h("div", { class: "ia-adim" }, h("b", { text: "1. adım: Böleni doğal sayı yap" }),
        h("div", { class: "ia-satir" }, g2("a2", "yeni bölünen", D.a2ok), h("span", { class: "ia-op", text: "÷" }), g2("b2", "yeni bölen", D.b2ok)),
        h("div", { class: "ia-not", text: `Bölende virgülden sonra ${D.k} basamak var. İki sayıyı da ${10 ** D.k} ile çarp (virgülü ${D.k} basamak sağa kaydır).` })));
    }
    if (tamYazildi && (!D || D.hazir)) parca.push(h("div", { class: "ia-izgara-kap" }, sekme === "bol" ? bolmeIzgara(s) : izgara(s)), arac);
    else if (D && D.adimGerek) parca.push(arac);
    else if (!tamYazildi) parca.push(h("div", { class: "ia-ipucu", text: "İki sayıyı da yazınca işlem kutuları açılır." }));
    if (s.mesaj) parca.push(h("div", { class: "ia-sonuc " + s.mesaj.tur }, ...s.mesaj.satirlar.map((x, i) => (i ? [h("br"), x] : x))));
    govde.replaceChildren(...parca);
  }

  function ipucuMetni() {
    return {
      topla: "Sayıları yaz (ondalık için , tuşu), sonra en sağdaki basamaktan başlayarak topla. Eldeyi üstteki küçük kutulara yazabilirsin.",
      cikar: "Eksileni ve çıkanı yaz. Birler basamağından başla; onluk bozduğunda yeni rakamı üstteki küçük kutuya yaz.",
      carp: "Çarpanları yaz (ondalık olabilir). 2. çarpanın her basamağı için bir satır var; taralı kutular boş kalır. Sonra satırları topla.",
      bol: "Bölüneni ve böleni yaz (ondalık olabilir). Bölümü sağdaki çizginin altına, çarpma ve çıkarma adımlarını soldaki kutulara yaz."
    }[sekme];
  }

  // Sayı satırındaki rakamı sağa yaslanmış olarak göster
  function izgara(s) {
    const { genis, sat, F } = yapi(sekme, s);
    const g = h("div", { class: "ia-izgara", style: `grid-template-columns:32px repeat(${genis},40px)` });
    const etiket = (p) => (sekme === "carp" && F ? "" : p >= F ? BASAMAK[p - F] || "" : ONDALIK[F - 1 - p] || "");
    const virgul = (el) => { el.append(h("span", { class: "ia-virgul", "aria-hidden": "true", text: "," })); return el; };
    // basamak etiketleri
    g.append(h("div"));
    for (let c = 0; c < genis; c++) g.append(h("div", { class: "ia-etiket", text: etiket(genis - 1 - c) }));
    for (const r of sat) {
      if (r.tur === "cizgi") { g.append(h("div", { class: "ia-cizgi", style: `grid-column:1 / span ${genis + 1}` })); continue; }
      g.append(h("div", { class: "ia-isaret", text: r.isaret || "" }));
      for (let c = 0; c < genis; c++) {
        const sagdan = genis - 1 - c; // 0 = birler
        if (r.tur === "sayi") {
          const x = r.deger, el = h("div", { class: "ia-h sabit", "aria-label": `${r.id === "a" ? "1." : "2."} sayı, ${etiket(sagdan)}` }, rakamAt(sekme, x, sagdan, F));
          if (ond(x) > 0 && sagdan === (sekme === "carp" ? ond(x) : F)) virgul(el);
          g.append(el);
          continue;
        }
        const kapali = r.ara != null && sagdan < r.ara;
        const anahtar = r.id + ":" + sagdan;
        const sinif = ["ia-h"];
        if (r.tur === "kucuk") sinif.push("kucuk");
        if (kapali) sinif.push("kapali");
        if (s.secim.tur === "hucre" && s.secim.anahtar === anahtar) sinif.push("secili");
        if (s.isaret[anahtar]) sinif.push(s.isaret[anahtar]);
        const el = h("div", { class: sinif.join(" "), "data-a": anahtar, "aria-label": `${r.etiket || (r.id === "sonuc" ? "sonuç" : "ara çarpım")} ${etiket(sagdan)}` }, kapali ? "" : s.hucre[anahtar] || "");
        if (r.id === "sonuc" && F > 0 && sagdan === F) virgul(el);
        if (!kapali) el.onclick = () => { s.secim = { tur: "hucre", anahtar, satir: r.id }; sablonCiz(); };
        g.append(el);
      }
    }
    return g;
  }

  // Bölme: solda bölünen ve adımlar, sağda bölen / bölüm (Türkiye'deki uzun bölme düzeni)
  function bolmeIzgara(s) {
    const D = bolDurum(s), A = D.A, Bs = D.B, d = D.d;
    const n = A.length, m = Math.max(Bs.length, Math.min(n, 9));
    const adim = Math.min(n, 9);
    const qUzun = d ? Math.max(String(BigInt(A) / (BigInt(Bs) || 1n)).length, d + 1) : 0;
    // sütunlar: [işaret] [n hücre] [dikey çizgi] [m hücre]
    const g = h("div", { class: "ia-izgara", style: `grid-template-columns:28px repeat(${n},40px) 10px repeat(${m},40px)` });
    const virgulKoy = (el) => { el.append(h("span", { class: "ia-virgul", "aria-hidden": "true", text: "," })); return el; };
    const hucre = (id, i, yon) => {
      const anahtar = id + ":" + i;
      const sinif = ["ia-h"];
      if (s.secim.tur === "hucre" && s.secim.anahtar === anahtar) sinif.push("secili");
      if (s.isaret[anahtar]) sinif.push(s.isaret[anahtar]);
      const el = h("div", { class: sinif.join(" "), "data-a": anahtar, style: id === "bolum" ? "border-top:3px solid #334155" : null, "aria-label": id === "bolum" ? "bölüm" : id.startsWith("k") ? "kalan" : "çıkarılan" }, s.hucre[anahtar] || "");
      if (id === "bolum" && d && i === qUzun - d - 1) virgulKoy(el);
      el.onclick = () => { s.secim = { tur: "hucre", anahtar, satir: id, yon }; sablonCiz(); };
      return el;
    };
    const bos = (k = 1) => { const e = []; for (let i = 0; i < k; i++) e.push(h("div")); return e; };
    // 1. satır: bölünen | bölen
    g.append(h("div"));
    for (let i = 0; i < n; i++) { const el = h("div", { class: "ia-h sabit" }, A[i]); if (d && i === n - d - 1) virgulKoy(el); g.append(el); }
    g.append(h("div", { class: "ia-dikey", style: "grid-row:span 2;align-self:stretch" }));
    for (let i = 0; i < m; i++) g.append(h("div", { class: "ia-h sabit" }, Bs[i] || ""));
    // 2. satır: adım 1 çarpım | bölen çizgisi + bölüm
    // bölüm satırı sağda, solda ilk çıkarılan
    g.append(h("div", { class: "ia-isaret", text: "−" }));
    for (let i = 0; i < n; i++) g.append(hucre("c0", i, 1));
    for (let i = 0; i < m; i++) g.append(hucre("bolum", i, 1));
    // sağ taraftaki çizgi (bölen ile bölüm arası): ayrı satır olarak bölümün üstüne konamadığından bölüm kutularının üst kenarı kalın
    for (let r = 0; r < adim; r++) {
      g.append(h("div"));
      g.append(h("div", { class: "ia-cizgi", style: `grid-column:span ${n}` }));
      g.append(...bos(1 + m));
      g.append(h("div"));
      for (let i = 0; i < n; i++) g.append(hucre("k" + r, i, 1));
      g.append(...bos(1 + m));
      if (r < adim - 1) {
        g.append(h("div", { class: "ia-isaret", text: "−" }));
        for (let i = 0; i < n; i++) g.append(hucre("c" + (r + 1), i, 1));
        g.append(...bos(1 + m));
      }
    }
    return g;
  }

  // Seçim gezintisi
  function hucreler() { return [...govde.querySelectorAll(".ia-h[data-a]")]; }
  function hucreSec(anahtar) { const s = SB[sekme]; s.secim = { tur: "hucre", anahtar, satir: anahtar.split(":")[0] }; }
  function komsu(yon) {
    const s = SB[sekme];
    if (s.secim.tur !== "hucre") return null;
    const [satir, sutun] = s.secim.anahtar.split(":");
    const i = +sutun;
    // ızgarada sütun = sağdan basamak (toplama vb.) ya da soldan sıra (bölme)
    const bol = sekme === "bol";
    const hedefSutun = bol ? i + yon : i - yon; // yon: +1 sağ, -1 sol
    const a = satir + ":" + hedefSutun;
    const el = govde.querySelector(`.ia-h[data-a="${a}"]:not(.kapali)`);
    return el ? a : null;
  }
  function dikeyKomsu(yon) {
    const s = SB[sekme];
    if (s.secim.tur !== "hucre") return null;
    const liste = hucreler().filter((e) => !e.classList.contains("kapali"));
    const simdiki = liste.find((e) => e.dataset.a === s.secim.anahtar);
    if (!simdiki) return null;
    const r = simdiki.getBoundingClientRect();
    let en = null, enM = Infinity;
    for (const e of liste) {
      const q = e.getBoundingClientRect();
      const dy = (q.top - r.top) * yon;
      if (dy <= 4) continue;
      const m = dy * 3 + Math.abs(q.left - r.left);
      if (m < enM) { enM = m; en = e; }
    }
    return en ? en.dataset.a : null;
  }

  function sablonTus(k) {
    const s = SB[sekme];
    const [ma, mb] = SINIR[sekme];
    s.mesaj = null;
    if (k === "Tamam") { kontrolEt(false); return; }
    if (s.secim.tur === "giris") {
      const ad = s.secim.ad, sinir = ad === "a" ? ma : ad === "b" ? mb : SINIR[ad][0];
      if (/^\d$/.test(k)) {
        const x = s[ad];
        if (x.includes(",") ? ond(x) >= 3 : x.length >= sinir) s.mesaj = { tur: "bilgi", satirlar: [x.includes(",") ? "Virgülden sonra en çok 3 basamak yazılabilir." : `Bu kutuya en çok ${sinir} basamaklı sayı yazılabilir.`] };
        else if (x === "0") s[ad] = k; else s[ad] += k;
      } else if (k === ",") {
        if (ad === "b2") s.mesaj = { tur: "bilgi", satirlar: ["Yeni bölen doğal sayı olmalı; virgül kalmamalı."] };
        else if (!s[ad].includes(",")) s[ad] = (s[ad] || "0") + ",";
      } else if (k === "⌫") s[ad] = s[ad].slice(0, -1);
      else if (k === "Sıfırla") s[ad] = "";
      else if (k === "→" || k === "Sonraki" || k === "↓") {
        const D = sekme === "bol" && s.a && s.b ? bolDurum(s) : null;
        if (ad === "a") s.secim = { tur: "giris", ad: "b" };
        else if (ad === "b" && D && D.adimGerek) s.secim = { tur: "giris", ad: "a2" };
        else if (ad === "a2") s.secim = { tur: "giris", ad: "b2" };
        else ilkHucre();
      } else if (k === "←" || k === "↑") s.secim = { tur: "giris", ad: ad === "b2" ? "a2" : ad === "a2" ? "b" : "a" };
      s.isaret = {};
      sablonCiz();
      return;
    }
    // hücre
    const a = s.secim.anahtar;
    const bol = sekme === "bol";
    const ilerleme = bol ? 1 : -1; // bölmede soldan sağa, diğerlerinde sağdan sola (birlerden başla)
    if (/^\d$/.test(k)) {
      s.hucre[a] = k; delete s.isaret[a];
      const sonraki = komsu(ilerleme);
      if (sonraki) hucreSec(sonraki);
    } else if (k === "⌫") {
      if (s.hucre[a]) { delete s.hucre[a]; delete s.isaret[a]; }
      else { const geri = komsu(-ilerleme); if (geri) { hucreSec(geri); delete s.hucre[geri]; } }
    } else if (k === "Sıfırla") { delete s.hucre[a]; delete s.isaret[a]; }
    else if (k === "←") { const x = komsu(-1); if (x) hucreSec(x); }
    else if (k === "→") { const x = komsu(1); if (x) hucreSec(x); }
    else if (k === "↑") { const x = dikeyKomsu(-1); if (x) hucreSec(x); else s.secim = { tur: "giris", ad: "b" }; }
    else if (k === "↓") { const x = dikeyKomsu(1); if (x) hucreSec(x); }
    else if (k === "Sonraki") { const x = dikeyKomsu(1); if (x) satirBasi(x); }
    sablonCiz();
  }
  // Satıra geçince: toplama vb. birler basamağından, bölmede en soldan başla
  function satirBasi(anahtar) {
    const satir = anahtar.split(":")[0];
    const liste = hucreler().filter((e) => !e.classList.contains("kapali") && e.dataset.a.startsWith(satir + ":"));
    const el = sekme === "bol" ? liste[0] : liste.find((e) => e.dataset.a === satir + ":" + Math.min(...liste.map((x) => +x.dataset.a.split(":")[1])));
    hucreSec((el || liste[0]).dataset.a);
  }
  function ilkHucre() {
    const s = SB[sekme];
    if (!(s.a && s.b)) return;
    s.secim = sekme === "bol" ? { tur: "hucre", anahtar: "bolum:0", satir: "bolum" }
      : (sekme === "carp" && rakC(s.b).length > 1) ? { tur: "hucre", anahtar: "ara0:0", satir: "ara0" } : { tur: "hucre", anahtar: "sonuc:0", satir: "sonuc" };
  }

  // Satırdaki rakamları sağdan okuyup sayıya çevirir (boşlukları atlamaz: arada boş varsa geçersiz)
  function satirDegeri(s, id, genis) {
    let d = "";
    for (let c = genis - 1; c >= 0; c--) d += s.hucre[id + ":" + c] || " ";
    d = d.trim();
    if (!d) return null;
    return /^\d+$/.test(d) ? d.replace(/^0+(?=\d)/, "") : "hata";
  }

  function kontrolEt(goster) {
    const s = SB[sekme];
    s.isaret = {};
    if (!(s.a && s.b) || s.a.endsWith(",") || s.b.endsWith(",")) { s.mesaj = { tur: "bilgi", satirlar: [s.a.endsWith(",") || s.b.endsWith(",") ? "Virgülden sonra en az bir rakam yaz." : "Önce iki sayıyı da yaz."] }; sablonCiz(); return; }
    if (sekme === "bol") { bolmeKontrol(s, goster); sablonCiz(); return; }
    const { genis, F } = yapi(sekme, s);
    if (sekme === "cikar" && olcekli(s.a, F) < olcekli(s.b, F)) {
      s.mesaj = { tur: "kotu", satirlar: ["Eksilen, çıkandan küçük. Büyük sayıdan küçük sayı çıkarılır; sayıların yerini kontrol et."] };
      sablonCiz(); return;
    }
    const dogru = dogruSonuc(sekme, s);
    // Ondalık kısmın sonundaki sıfırlar yazılmasa da olur (2,50 = 2,5)
    let sonSifir = 0;
    while (sonSifir < F && dogru[dogru.length - 1 - sonSifir] === "0") sonSifir++;
    const satirlar = [];
    // ara çarpımlar (çarpma, 2+ basamaklı çarpan)
    let araHata = 0;
    const ra = rakC(s.a), rb = rakC(s.b);
    if (sekme === "carp" && rb.length > 1) {
      for (let i = 0; i < rb.length; i++) {
        const basamak = rb[rb.length - 1 - i];
        const ara = String(BigInt(ra) * BigInt(basamak));
        for (let c = i; c < genis; c++) {
          const anahtar = "ara" + i + ":" + c, j = ara.length - 1 - (c - i);
          const beklenen = j >= 0 ? ara[j] : "";
          if (goster && beklenen && !s.hucre[anahtar]) { s.hucre[anahtar] = beklenen; s.isaret[anahtar] = "gosterilen"; continue; }
          const v = s.hucre[anahtar] || "";
          if (!v && !beklenen) continue;
          if (ara === "0" && !v) continue;
          const ok = v === beklenen || (beklenen === "" && v === "0");
          if (!goster || s.isaret[anahtar] !== "gosterilen") s.isaret[anahtar] = ok ? "dogru" : "yanlis";
          if (!ok) araHata++;
        }
      }
    }
    let hata = 0, bos = 0;
    for (let c = 0; c < genis; c++) {
      const anahtar = "sonuc:" + c, j = dogru.length - 1 - c, beklenen = j >= 0 ? dogru[j] : "";
      const v = s.hucre[anahtar] || "";
      const sondaSifir = c < sonSifir; // ondalık kısmın sonundaki 0
      if (sondaSifir && !v) continue;
      if (goster && beklenen && v !== beklenen) { s.hucre[anahtar] = beklenen; s.isaret[anahtar] = "gosterilen"; continue; }
      if (!v && !beklenen) continue;
      if (!v) { bos++; s.isaret[anahtar] = "yanlis"; continue; }
      const ok = v === beklenen || (beklenen === "" && v === "0"); // başa yazılan 0 yanlış sayılmaz
      s.isaret[anahtar] = ok ? "dogru" : "yanlis";
      if (!ok) hata++;
    }
    const isim = { topla: "Toplam", cikar: "Fark", carp: "Çarpım" }[sekme];
    if (goster) {
      s.gosterildi = true;
      s.mesaj = { tur: "bilgi", satirlar: [`${isim}: ${olcekliYaz(dogru, F)}`, "Mavi rakamlar cevaptır. Bir sonraki işlemde kendin dene!"] };
    } else if (!hata && !bos && !araHata) {
      const sn = olcekliYaz(dogru, F);
      satirlar.push(`🎉 Doğru! ${sayiYaz(s.a)} ${OP[sekme]} ${sayiYaz(s.b)} = ${sn}`);
      if (sekme === "cikar") satirlar.push(`Sağlama: ${sn} + ${sayiYaz(s.b)} = ${sayiYaz(s.a)}`);
      if (sekme === "topla") satirlar.push(`Sağlama: ${sn} − ${sayiYaz(s.b)} = ${sayiYaz(s.a)}`);
      if (sekme === "carp" && F) satirlar.push(`Virgülden sonra ${ond(s.a)} + ${ond(s.b)} = ${F} basamak sayıldı.`);
      s.mesaj = { tur: "iyi", satirlar };
    } else {
      if (araHata) satirlar.push(`Ara çarpımlarda ${araHata} hatalı rakam var (kırmızı).`);
      if (hata) satirlar.push(`Sonuçta ${hata} hatalı rakam var (kırmızı). Birler basamağından başlayarak tekrar dene.`);
      if (bos) satirlar.push(`${bos} kutu boş kaldı.`);
      if (sekme === "topla") satirlar.push("İpucu: Bir basamağın toplamı 10 ya da daha büyükse birlerini yaz, onluğunu elde olarak sola aktar.");
      if (sekme === "cikar") satirlar.push("İpucu: Üstteki rakam alttakinden küçükse soldaki basamaktan 1 onluk boz.");
      if (sekme === "carp") satirlar.push("İpucu: Her ara çarpımı bir basamak sola kaydırarak yaz, sonra hepsini topla." + (F ? " Virgülleri yok sayarak çarp; sonuçta virgülden sonra " + F + " basamak say." : ""));
      if (F && sekme !== "carp") satirlar.push("Ondalık sayılarda virgüller alt alta gelir; sonuçtaki virgül de aynı hizadadır.");
      s.mesaj = { tur: "kotu", satirlar };
    }
    sablonCiz();
  }

  // Ondalık bölme: bölen ondalıksa önce iki sayı 10^k ile çarpılıp bölen doğal sayı yapılır (1. adım)
  const ondVal = (x) => [BigInt(rak(x) || "0"), 10n ** BigInt(ond(x))];
  const ondEsit = (x, y) => { const [p, q] = ondVal(x), [r, t] = ondVal(y); return p * t === r * q; };
  function kaydir(x, k) { // x × 10^k, virgüllü metin olarak
    const d = ond(x), r = rak(x), yeniOnd = Math.max(d - k, 0), rak2 = r + "0".repeat(Math.max(k - d, 0));
    let t = yeniOnd ? rak2.slice(0, -yeniOnd) + "," + rak2.slice(-yeniOnd) : rak2;
    t = t.replace(/^0+(?=\d)/, "");
    return t.startsWith(",") ? "0" + t : t;
  }
  function bolDurum(s) {
    const k = ond(s.b), adimGerek = k > 0;
    const beklenenA = adimGerek ? kaydir(s.a, k) : s.a, beklenenB = adimGerek ? kaydir(s.b, k) : s.b;
    const a2ok = !adimGerek || (s.a2 && !s.a2.endsWith(",") && ondEsit(s.a2, beklenenA));
    const b2ok = !adimGerek || (s.b2 && ondEsit(s.b2, beklenenB));
    const hazir = !!(a2ok && b2ok);
    const Ea = adimGerek ? s.a2 : s.a, Eb = (adimGerek ? s.b2 : s.b).replace(/^0+(?=\d)/, "");
    return { k, adimGerek, beklenenA, beklenenB, a2ok, b2ok, hazir, Ea, Eb, A: hazir ? rak(Ea) : "", B: hazir ? Eb : "", d: hazir ? ond(Ea) : 0 };
  }

  function bolmeKontrol(s, goster) {
    const D = bolDurum(s);
    if (!D.hazir) {
      if (goster) {
        s.a2 = D.beklenenA; s.b2 = D.beklenenB;
        s.mesaj = { tur: "bilgi", satirlar: [`1. adım: ${sayiYaz(s.a)} ÷ ${sayiYaz(s.b)} işleminde bölende virgülden sonra ${D.k} basamak var. İki sayı da ${10 ** D.k} ile çarpılır: ${sayiYaz(D.beklenenA)} ÷ ${sayiYaz(D.beklenenB)}`, "Şimdi bölmeyi yap."] };
        return;
      }
      s.mesaj = { tur: "kotu", satirlar: [!s.a2 || !s.b2 ? "Önce 1. adımı yap: böleni doğal sayı yap." : `1. adımda hata var. Bölende virgülden sonra ${D.k} basamak var; iki sayıyı da ${10 ** D.k} ile çarp.`] };
      return;
    }
    return bolmeKontrolDogal(s, goster, D);
  }

  function bolmeKontrolDogal(s, goster, D) {
    const a = BigInt(D.A), b = BigInt(D.B), d = D.d;
    if (b === 0n) { s.mesaj = { tur: "kotu", satirlar: ["Bir sayı 0'a bölünemez. Böleni değiştir."] }; return; }
    // Bölüm virgülsüz rakamlarla: ondalık bölünende en az d+1 basamak (0,15 ÷ 3 → "005" = 0,05)
    const q = d ? String(a / b).padStart(d + 1, "0") : String(a / b), r = String(a % b);
    const qYaz = d ? olcekliYaz(q, d) : binlik(q), rYaz = d ? olcekliYaz(r.padStart(d + 1, "0"), d) : r;
    const once = D.adimGerek ? `${sayiYaz(s.a)} ÷ ${sayiYaz(s.b)} = ${sayiYaz(D.Ea)} ÷ ${binlik(D.B)} → ` : "";
    const saglama = `Sağlama: ${binlik(D.B)} × ${qYaz} + ${rYaz} = ${sayiYaz(D.Ea)}`;
    const m = Math.max(D.B.length, Math.min(D.A.length, 9));
    // bölüm soldan yazılır
    let bolum = "";
    for (let i = 0; i < m; i++) bolum += s.hucre["bolum:" + i] || " ";
    if (goster) {
      for (let i = 0; i < m; i++) { const k = "bolum:" + i; if (i < q.length) { s.hucre[k] = q[i]; s.isaret[k] = "gosterilen"; } else delete s.hucre[k]; }
      s.gosterildi = true;
      s.mesaj = { tur: "bilgi", satirlar: [`${once}Bölüm: ${qYaz}, kalan: ${rYaz}`, saglama] };
      return;
    }
    const yazilan = bolum.trim();
    const satirlar = [];
    let ok = true;
    if (!yazilan) { satirlar.push("Bölümü sağdaki çizginin altındaki kutulara yaz."); ok = false; }
    else if (!/^\d+$/.test(yazilan) || /\s/.test(bolum.slice(0, bolum.trimEnd().length).trimStart())) { satirlar.push("Bölümü kutulara aralıksız, soldan başlayarak yaz."); ok = false; }
    else {
      const bd = d ? yazilan === q : yazilan.replace(/^0+(?=\d)/, "") === q;
      for (let i = 0; i < m; i++) { const k = "bolum:" + i; if (s.hucre[k]) s.isaret[k] = bd ? "dogru" : (q[i] === s.hucre[k] ? "dogru" : "yanlis"); }
      if (!bd) { ok = false; satirlar.push("Bölüm yanlış (kırmızı rakamlar). Her adımda bölenin kaç katının sığdığını tekrar düşün." + (d ? " Ondalık bölmede bölünenin her basamağı için bölüme bir rakam yaz (sığmıyorsa 0); virgülü geçerken bölüme virgül gelir." : "")); }
    }
    // kalan: en alttaki dolu satır (k0, k1, ...) kalan olarak okunur
    const n = D.A.length, adim = Math.min(n, 9);
    let kalanSatir = null;
    for (let i = adim - 1; i >= 0; i--) { let v = ""; for (let c = 0; c < n; c++) v += s.hucre["k" + i + ":" + c] || " "; if (v.trim()) { kalanSatir = { i, v: v.trim() }; break; } }
    if (ok) {
      if (!kalanSatir) satirlar.push(`🎉 Bölüm doğru: ${qYaz}. Kalanı da en alttaki satıra yazmayı unutma.`);
      else if (/^\d+$/.test(kalanSatir.v.replace(/\s/g, "")) && BigInt(kalanSatir.v.replace(/\s/g, "")) === BigInt(r)) {
        satirlar.push(`🎉 Doğru! ${once}${D.adimGerek ? "" : sayiYaz(D.Ea) + " ÷ " + binlik(D.B) + " = "}${qYaz}${D.adimGerek ? "" : ""}, kalan ${rYaz}`);
        satirlar.push(saglama);
        for (let c = 0; c < n; c++) { const k = "k" + kalanSatir.i + ":" + c; if (s.hucre[k]) s.isaret[k] = "dogru"; }
      } else {
        ok = false;
        satirlar.push(`Bölüm doğru (${qYaz}) ama en alttaki kalan yanlış. Kalan bölenden (${binlik(D.B)}) küçük olmalı.`);
        for (let c = 0; c < n; c++) { const k = "k" + kalanSatir.i + ":" + c; if (s.hucre[k]) s.isaret[k] = "yanlis"; }
      }
    }
    s.mesaj = { tur: ok ? "iyi" : "kotu", satirlar };
  }

  const binlik = (x) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // ---------------- ½ Kesir işlemleri ----------------
  // Alanlar: aT aP aD (1. kesir: tam, pay, payda), bT bP bD ve adım alanları; boş bırakılan "tam" yok sayılır.
  const KS = { op: "+", f: {}, secim: "aP", isaret: {}, mesaj: null };
  const BN = (x) => BigInt(x);
  const ebob = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a; };
  const ekok = (a, b) => (a / ebob(a, b)) * b;
  const sade = ([p, d]) => { if (d < 0n) { p = -p; d = -d; } const g = ebob(p, d) || 1n; return [p / g, d / g]; };
  const esit = (x, y) => Array.isArray(x) && Array.isArray(y) && x[0] * y[1] === y[0] * x[1];
  // Alanlardan kesir değeri: tam + pay/payda → [pay, payda]; eksikse null, payda 0 ise "sifir"
  function kesirOku(on, tamVar = true) {
    const f = KS.f, T = tamVar ? f[on + "T"] : "", P = f[on + "P"], D = f[on + "D"];
    if (!D && !P && T) return [BN(T), 1n];
    if (!P || !D) return null;
    if (BN(D) === 0n) return "sifir";
    return [BN(T || "0") * BN(D) + BN(P), BN(D)];
  }
  const kYaz = (k) => { const [p, d] = sade(k); if (d === 1n) return String(p); const t = p / d, kalan = p % d; return t && kalan ? `${t} tam ${kalan}/${d}` : `${p}/${d}`; };

  function kesirAdimlari() {
    const f = KS.f, op = KS.op, tamA = !!f.aT, tamB = !!f.bT, adim = [];
    if (tamA || tamB) adim.push({ id: "bil", baslik: "Tam sayılı kesri bileşik kesre çevir", kesirler: [...(tamA ? [["A", "1. kesir"]] : []), ...(tamB ? [["B", "2. kesir"]] : [])], not: "Tam sayı × payda + pay → yeni pay; payda aynı kalır." });
    if (op === "+" || op === "−") adim.push({ id: "es", baslik: "Paydaları eşitle", kesirler: [["E1", "1. kesir"], ["E2", "2. kesir"]], not: "Paydaların ortak katını bul; pay ve paydayı aynı sayıyla genişlet." });
    if (op === "÷") adim.push({ id: "ters", baslik: "İkinci kesri ters çevir, çarpmaya dönüştür", kesirler: [["TB", "ters kesir"]], not: "Bölmede birinci kesir aynen yazılır, ikinci kesir ters çevrilip çarpılır." });
    adim.push({ id: "son", baslik: op === "×" || op === "÷" ? "Payları ve paydaları çarp" : op === "+" ? "Payları topla, paydayı aynen yaz" : "Payları çıkar, paydayı aynen yaz", kesirler: [["R", "sonuç"]] });
    adim.push({ id: "sade", baslik: "Sadeleştir / tam sayılı kesir olarak yaz (gerekiyorsa)", kesirler: [["S", "en sade hâli", true]], not: "Pay ve paydayı ortak bölenlerine böl. Pay paydadan büyükse tam sayılı kesir yaz." });
    return adim;
  }
  // Gezinme sırası
  function kesirAlanlari() {
    const L = ["aT", "aP", "aD", "bT", "bP", "bD"];
    for (const a of kesirAdimlari()) for (const [k, , tam] of a.kesirler) { if (tam) L.push(k + "T"); L.push(k + "P", k + "D"); }
    return L;
  }

  function kesirCiz() {
    const f = KS.f;
    const alan = (ad, bos, tam = false) => {
      const sinif = ["ia-kg"]; if (tam) sinif.push("tam");
      if (KS.secim === ad) sinif.push("secili");
      if (KS.isaret[ad]) sinif.push(KS.isaret[ad]);
      const el = h("div", { class: sinif.join(" "), role: "textbox", "data-a": ad, "data-bos": bos, "aria-label": bos }, f[ad] || "");
      el.onclick = () => { KS.secim = ad; kesirCiz(); };
      return el;
    };
    const kesirKutu = (on, tamVar, etiket) => h("span", { class: "ia-kesir", "aria-label": etiket },
      tamVar ? alan(on + "T", "tam", true) : null,
      h("span", { class: "ia-kd" }, alan(on + "P", "pay"), h("span", { class: "ia-kc" }), alan(on + "D", "payda")));
    const opler = h("div", { class: "ia-arac" }, h("span", { class: "ia-ipucu", text: "İşlem:" }));
    for (const o of ["+", "−", "×", "÷"]) {
      const b = h("button", { class: "ia-k" + (KS.op === o ? " secili" : ""), type: "button", "data-op": o, style: "min-width:44px;font-size:20px" }, o);
      b.onclick = () => { KS.op = o; KS.isaret = {}; KS.mesaj = null; kesirCiz(); };
      opler.append(b);
    }
    const parca = [h("div", { class: "ia-ipucu", text: "Kesirleri yaz (tam sayılı kesirse tam kısmı soldaki büyük kutuya), sonra adımları sırayla doldur." }), opler,
      h("div", { class: "ia-adim" }, h("b", { text: "Soru" }), h("div", { class: "ia-satir" }, kesirKutu("a", true, "1. kesir"), h("span", { class: "ia-op", text: KS.op }), kesirKutu("b", true, "2. kesir")))];
    const A = kesirOku("a"), B = kesirOku("b");
    if (Array.isArray(A) && Array.isArray(B)) {
      for (const [i, a] of kesirAdimlari().entries()) {
        const sat = h("div", { class: "ia-satir" });
        if (a.id === "ters") sat.append(h("span", { class: "ia-ipucu", text: "1. kesir  ×" }));
        a.kesirler.forEach(([on, etiket, tam], j) => {
          if (j) sat.append(h("span", { class: "ia-op", text: a.id === "es" ? KS.op : "·" }));
          sat.append(kesirKutu(on, !!tam, etiket));
        });
        parca.push(h("div", { class: "ia-adim" }, h("b", { text: `${i + 1}. ${a.baslik}` }), sat, a.not ? h("div", { class: "ia-not", text: a.not }) : null));
      }
      const arac = h("div", { class: "ia-arac" });
      const kontrol = h("button", { class: "ia-k", type: "button" }, "✅ Kontrol et");
      const goster = h("button", { class: "ia-k", type: "button" }, "👁️ Cevabı göster");
      const temizle = h("button", { class: "ia-k", type: "button" }, "🗑️ Yeni işlem");
      kontrol.onclick = () => kesirKontrol(false); goster.onclick = () => kesirKontrol(true);
      temizle.onclick = () => { KS.f = {}; KS.isaret = {}; KS.mesaj = null; KS.secim = "aP"; kesirCiz(); };
      arac.append(kontrol, goster, temizle);
      parca.push(arac);
    } else parca.push(h("div", { class: "ia-ipucu" + (A === "sifir" || B === "sifir" ? " uyari" : ""), text: A === "sifir" || B === "sifir" ? "Payda 0 olamaz." : "İki kesrin pay ve paydasını yazınca adımlar açılır." }));
    if (KS.mesaj) parca.push(h("div", { class: "ia-sonuc " + KS.mesaj.tur }, ...KS.mesaj.satirlar.map((x, i) => (i ? [h("br"), x] : x))));
    govde.replaceChildren(...parca);
  }

  function kesirTus(k) {
    const L = kesirAlanlari(), i = Math.max(0, L.indexOf(KS.secim)), ad = L[i];
    KS.mesaj = null;
    if (/^\d$/.test(k)) {
      const x = KS.f[ad] || "";
      if (x.length >= 6) KS.mesaj = { tur: "bilgi", satirlar: ["En çok 6 basamak yazılabilir."] };
      else KS.f[ad] = x === "0" ? k : x + k;
      delete KS.isaret[ad];
    } else if (k === "⌫") { KS.f[ad] = (KS.f[ad] || "").slice(0, -1); delete KS.isaret[ad]; }
    else if (k === "Sıfırla") { delete KS.f[ad]; delete KS.isaret[ad]; }
    else if (k === "→" || k === "Sonraki" || k === "↓") { const L2 = kesirAlanlari(); KS.secim = L2[Math.min(L2.length - 1, L2.indexOf(ad) + 1)]; }
    else if (k === "←" || k === "↑") KS.secim = L[Math.max(0, i - 1)];
    else if (k === "Tamam") { kesirKontrol(false); return; }
    else if (k === ",") KS.mesaj = { tur: "bilgi", satirlar: ["Kesirlerde virgül kullanılmaz; pay ve paydayı ayrı kutulara yaz."] };
    kesirCiz();
  }

  function kesirKontrol(goster) {
    const f = KS.f, op = KS.op, A = kesirOku("a"), B = kesirOku("b");
    KS.isaret = {};
    if (!Array.isArray(A) || !Array.isArray(B)) return;
    if (op === "÷" && B[0] === 0n) { KS.mesaj = { tur: "kotu", satirlar: ["Bir sayı 0'a bölünemez."] }; kesirCiz(); return; }
    let sonuc;
    if (op === "+") sonuc = [A[0] * B[1] + B[0] * A[1], A[1] * B[1]];
    else if (op === "−") sonuc = [A[0] * B[1] - B[0] * A[1], A[1] * B[1]];
    else if (op === "×") sonuc = [A[0] * B[0], A[1] * B[1]];
    else sonuc = [A[0] * B[1], A[1] * B[0]];
    if (op === "−" && sonuc[0] < 0n) { KS.mesaj = { tur: "kotu", satirlar: ["Birinci kesir ikinciden küçük. Büyük kesirden küçük kesir çıkarılır."] }; kesirCiz(); return; }
    const S = sade(sonuc), L = ekok(A[1], B[1]);
    // Gösterilecek beklenen değerler
    const bek = {};
    if (f.aT) { bek.AP = A[0]; bek.AD = A[1]; }
    if (f.bT) { bek.BP = B[0]; bek.BD = B[1]; }
    if (op === "+" || op === "−") { bek.E1P = A[0] * (L / A[1]); bek.E1D = L; bek.E2P = B[0] * (L / B[1]); bek.E2D = L; bek.RP = op === "+" ? bek.E1P + bek.E2P : bek.E1P - bek.E2P; bek.RD = L; }
    else if (op === "×") { bek.RP = A[0] * B[0]; bek.RD = A[1] * B[1]; }
    else { bek.TBP = B[1]; bek.TBD = B[0]; bek.RP = A[0] * B[1]; bek.RD = A[1] * B[0]; }
    const st = S[0] / S[1], sk = S[0] % S[1];
    if (S[1] === 1n) bek.ST = S[0];
    else if (st > 0n) { bek.ST = st; bek.SP = sk; bek.SD = S[1]; }
    else { bek.SP = S[0]; bek.SD = S[1]; }
    if (goster) {
      for (const k of ["ST", "SP", "SD"]) if (!(k in bek)) delete f[k];
      for (const [k, v] of Object.entries(bek)) if (f[k] !== String(v)) { f[k] = String(v); KS.isaret[k] = "gosterilen"; }
      KS.mesaj = { tur: "bilgi", satirlar: [`Sonuç: ${kYaz(S)}`, "Mavi sayılar cevaptır. Bir sonraki işlemde kendin dene!"] };
      kesirCiz(); return;
    }
    const satirlar = [];
    const isaretle = (on, ok) => { for (const x of ["T", "P", "D"]) if (f[on + x]) KS.isaret[on + x] = ok ? "dogru" : "yanlis"; };
    let hata = 0;
    // 1) bileşik kesir
    for (const [on, ad, K] of [["A", "1.", A], ["B", "2.", B]]) {
      if (!f[on.toLowerCase() + "T"] || !(f[on + "P"] || f[on + "D"])) continue;
      const v = kesirOku(on, false), ok = esit(v, K) && f[on + "D"] === String(K[1]);
      isaretle(on, ok); if (!ok) { hata++; satirlar.push(`${ad} kesrin bileşik kesir hâli yanlış: tam × payda + pay yeni paydır, payda aynı kalır.`); }
    }
    // 2) payda eşitleme
    if ((op === "+" || op === "−") && (f.E1P || f.E1D || f.E2P || f.E2D)) {
      const e1 = kesirOku("E1", false), e2 = kesirOku("E2", false);
      const ok1 = esit(e1, A), ok2 = esit(e2, B), ayni = !!f.E1D && f.E1D === f.E2D;
      isaretle("E1", ok1 && ayni); isaretle("E2", ok2 && ayni);
      if (!ok1 || !ok2) { hata++; satirlar.push("Genişletirken pay ve paydayı aynı sayıyla çarpmalısın; kesrin değeri değişmemeli."); }
      else if (!ayni) { hata++; satirlar.push("İki kesrin paydası aynı olmalı."); }
    }
    // 3) ters çevirme
    if (op === "÷" && (f.TBP || f.TBD)) { const ok = f.TBP === String(B[1]) && f.TBD === String(B[0]); isaretle("TB", ok); if (!ok) { hata++; satirlar.push("İkinci kesrin payı ile paydası yer değiştirmeli."); } }
    // 4) sonuç
    const R = kesirOku("R", false);
    if (!R) { hata++; satirlar.push("Sonucun pay ve paydasını yaz."); }
    else { const ok = esit(R, sonuc); isaretle("R", ok); if (!ok) { hata++; satirlar.push("Sonuç yanlış. " + (op === "+" || op === "−" ? "Paydalar eşitken yalnızca paylar toplanır ya da çıkarılır." : op === "×" ? "Pay ile pay, payda ile payda çarpılır." : "Birinci kesir ile ters çevrilmiş ikinci kesri çarp.")); } }
    // 5) sadeleştirme (isteğe bağlı)
    if (f.ST || f.SP || f.SD) {
      const v = kesirOku("S");
      let ok = esit(v, sonuc), neden = "Bu son hâlin değeri sonuçla aynı olmalı.";
      if (ok && f.SP && f.SD && ebob(BN(f.SP), BN(f.SD)) !== 1n) { ok = false; neden = "Daha da sadeleşebilir: pay ve paydayı ortak bölenlerine böl."; }
      if (ok && f.ST && f.SP && f.SD && BN(f.SP) >= BN(f.SD)) { ok = false; neden = "Tam sayılı kesirde kesir kısmının payı paydadan küçük olmalı."; }
      isaretle("S", ok); if (!ok) { hata++; satirlar.push(neden); }
    }
    if (!hata) {
      satirlar.unshift(`🎉 Doğru! Sonuç: ${kYaz(S)}`);
      if (!(f.ST || f.SP || f.SD) && (S[1] !== sonuc[1] || S[0] >= S[1]) && !(R && R[0] === S[0] && R[1] === S[1] && S[0] < S[1])) satirlar.push(`Son adım: sonucu en sade hâliyle ${kYaz(S)} olarak yaz.`);
      KS.mesaj = { tur: "iyi", satirlar };
    } else KS.mesaj = { tur: "kotu", satirlar };
    kesirCiz();
  }

  // Fiziksel klavye
  document.addEventListener("keydown", (e) => {
    if (panel.hidden || panel.classList.contains("kucuk") || sekme === "karalama") return;
    if (e.target && /^(TEXTAREA|INPUT|SELECT)$/.test(e.target.tagName)) return;
    const harita = { Backspace: "⌫", Delete: "Sıfırla", ArrowLeft: "←", ArrowRight: "→", ArrowUp: "↑", ArrowDown: "↓", Enter: "Tamam", Tab: "Sonraki" };
    const k = /^\d$/.test(e.key) ? e.key : e.key === "," || e.key === "." ? "," : harita[e.key];
    if (!k) return;
    e.preventDefault();
    if (sekme === "kesir") kesirTus(k); else sablonTus(k);
  });

  // ---------------- Çizim ----------------
  function ciz() {
    if (panel.hidden) return;
    sekmeleriCiz();
    if (sekme === "karalama") karalamaCiz(); else { tuval = null; baglam = null; if (sekme === "kesir") kesirCiz(); else sablonCiz(); }
    klavyeCiz();
  }
  let rz = 0;
  window.addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => { if (!panel.hidden && sekme === "karalama") boyutla(); }, 150); });

  // ---------------- Soru ekranını izleme ----------------
  let imza = null;
  function soruVarMi() {
    const var_ = !!ekran.querySelector(".soru, .soru-metni, .kagit textarea, #sec .secenek");
    if (!var_) {
      if (!panel.hidden) kapat();
      dugme.hidden = true;
      document.body.classList.remove("ia-dugmeli");
      return;
    }
    if (panel.hidden) dugme.hidden = false;
    document.body.classList.add("ia-dugmeli");
    // Yeni soruya geçilince karalama ve şablonlar temizlenir
    const ilk = ekran.querySelector(".soru, .soru-metni");
    const yeni = ilk ? ilk.textContent.trim().slice(0, 200) : "";
    if (imza !== null && yeni !== imza) {
      K.cizgiler = []; damga = null;
      for (const k of Object.keys(SB)) SB[k] = yeniSablon();
      KS.f = {}; KS.isaret = {}; KS.mesaj = null; KS.secim = "aP";
      if (!panel.hidden) ciz();
    }
    imza = yeni;
  }
  let bekle = 0;
  new MutationObserver(() => { cancelAnimationFrame(bekle); bekle = requestAnimationFrame(soruVarMi); }).observe(ekran, { childList: true, subtree: true, characterData: true });
  soruVarMi();
})();
