// 🧭 Ana sayfa düzeni (5–12): sayfa kısa ve okunaklı olsun diye
// 1) Günün hedefi tek satırlık şerit olur, 2) dersler en üste ve 3 sütuna gelir,
// 3) seçmeli dersler açılır-kapanır bölüme girer, 4) araçlar küçük simgeli ızgarada toplanır.
// Diğer dosyalara dokunmaz: ana sayfa her çizildiğinde (ANA_KARTLAR'ın sonunda) DOM'u yeniden sıralar.
(function () {
  if (window.ANA_DUZEN) return;
  window.ANA_DUZEN = true;
  const css = document.createElement("style");
  css.textContent = `
body.ana-kompakt .hedef-kart{padding:10px 14px;gap:6px;margin-bottom:12px;border-radius:14px}
body.ana-kompakt .hedef-kart .hedef-alt{display:none}
body.ana-kompakt .hedef-kart .hedef-ust b{font-size:16px}
body.ana-kompakt .hedef-kart .hedef-satir{font-size:14px;gap:8px;grid-template-columns:minmax(0,138px) 1fr 52px}
body.ana-kompakt .hedef-kart .hedef-satir span{grid-column:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
body.ana-kompakt .hedef-kart .hedef-satir b{font-size:13.5px}
body.ana-kompakt .hedef-kart .btn2{padding:6px 12px;font-size:14.5px}
body.ana-kompakt .od-kart{margin-bottom:12px;padding:10px 12px;gap:10px;border-radius:14px}
body.ana-kompakt .od-kart .od-baykus{font-size:28px}
body.ana-kompakt .od-kart .od-kart-ic b{font-size:17px}
body.ana-kompakt .od-kart .od-alt{font-size:13px}
body.ana-kompakt .od-kart .od-kart-ic button{display:inline-flex;width:auto;padding:7px 12px;font-size:14.5px;margin:8px 6px 0 0;min-height:0}
body.ana-kompakt h2.ana-baslik{font-size:19px;margin:14px 0 8px;display:flex;align-items:center;justify-content:space-between;gap:8px}
body.ana-kompakt #dersler,body.ana-kompakt #secmeliBolum .izgara{grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
body.ana-kompakt #dersler .kart.ders,body.ana-kompakt #secmeliBolum .kart.ders{min-height:0;padding:10px 8px 9px 12px;gap:2px;border-radius:14px;font-size:14px;line-height:1.2}
body.ana-kompakt #dersler .kart.ders .ikon,body.ana-kompakt #secmeliBolum .kart.ders .ikon{font-size:24px;line-height:1.1}
body.ana-kompakt #dersler .kart.ders b,body.ana-kompakt #secmeliBolum .kart.ders b{font-size:14.5px;line-height:1.2;overflow-wrap:anywhere}
body.ana-kompakt #dersler .kart.ders .rozet,body.ana-kompakt #secmeliBolum .kart.ders .rozet{font-size:11.5px;line-height:1.25}
body.ana-kompakt #secmeliBolum{margin-top:10px}
body.ana-kompakt #secmeliBolum>details>summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-weight:800;font-size:17px;padding:10px 14px;border-radius:14px;background:var(--kart,#fff);border:1px solid var(--sinir,#e5e7eb)}
body.ana-kompakt #secmeliBolum>details>summary::-webkit-details-marker{display:none}
body.ana-kompakt #secmeliBolum>details>summary::after{content:"▾";font-size:18px;transition:transform .2s}
body.ana-kompakt #secmeliBolum>details[open]>summary::after{transform:rotate(180deg)}
body.ana-kompakt #secmeliBolum>details>.izgara{margin-top:8px}
body.ana-kompakt #ozelKartlar.ozel-izgara{grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-bottom:12px}
body.ana-kompakt #ozelKartlar .ozel-kart{min-height:0;padding:10px 4px 8px;gap:4px;align-items:center;justify-content:flex-start;text-align:center;border-radius:14px;font-size:12.5px;line-height:1.15}
body.ana-kompakt #ozelKartlar .ozel-kart .ikon{font-size:26px}
body.ana-kompakt #ozelKartlar .ozel-kart small{display:none}
body.ana-kompakt #ozelKartlar .ozel-kart b{font-size:12.5px;line-height:1.15;font-weight:700}
body.ana-kompakt #ozelKartlar .ozel-kart>span:not(.ikon){display:block}
body.ana-kompakt #ozelKartlar .ozel-kart.vurgu{grid-column:1/-1;flex-direction:row;text-align:left;padding:10px 12px;gap:10px}
body.ana-kompakt #ozelKartlar .ozel-kart.vurgu small{display:block;font-size:12.5px;opacity:.92;-webkit-line-clamp:2}
body.ana-kompakt #ozelKartlar .ozel-kart.vurgu b{font-size:15px}
@media (min-width:700px){body.ana-kompakt #dersler,body.ana-kompakt #secmeliBolum .izgara{grid-template-columns:repeat(auto-fill,minmax(160px,1fr))}body.ana-kompakt #ozelKartlar.ozel-izgara{grid-template-columns:repeat(auto-fill,minmax(130px,1fr))}}
@media (max-width:360px){body.ana-kompakt #ozelKartlar.ozel-izgara{grid-template-columns:repeat(3,minmax(0,1fr))}}`;
  document.head.appendChild(css);
  const ACIK = "ana-secmeli-acik";
  function duzenle() {
    const ozel = document.getElementById("ozelKartlar"), ders = document.getElementById("dersler");
    if (!ozel || !ders || ozel.dataset.duzen) return;
    ozel.dataset.duzen = "1";
    document.body.classList.add("ana-kompakt");
    const dersBas = ders.previousElementSibling;
    if (dersBas && dersBas.tagName === "H2") { dersBas.classList.add("ana-baslik"); dersBas.textContent = "📚 Derslerim"; }
    // Seçmeli dersler: açılır-kapanır
    const sec = document.getElementById("secmeliBolum");
    if (sec && !sec.querySelector("details")) {
      const iz = sec.querySelector(".izgara"), bas = sec.querySelector("h2"), n = iz ? iz.children.length : 0;
      const det = document.createElement("details"); let acik = false; try { acik = localStorage.getItem(ACIK) === "1"; } catch (e) {}
      det.open = acik; det.innerHTML = `<summary>⭐ Seçmeli Dersler (${n})</summary>`;
      if (iz) det.appendChild(iz); if (bas) bas.remove(); sec.appendChild(det);
      det.addEventListener("toggle", () => { try { localStorage.setItem(ACIK, det.open ? "1" : "0"); } catch (e) {} });
    }
    // Araçlar: derslerden sonra, başlıklı küçük ızgara
    const sonDers = sec && sec.parentNode === ders.parentNode ? sec : ders;
    const arBas = document.createElement("h2"); arBas.className = "ana-baslik"; arBas.textContent = "🧰 Çalışma araçları";
    sonDers.after(arBas); arBas.after(ozel);
    // Okumaya devam edilen bir kitap varsa Kitap Okuma kartı geniş görünsün
    [...ozel.children].forEach((k) => { if (/Devam et:/.test(k.textContent)) k.classList.add("vurgu"); });
    // Hikâye kartları (5. sınıf) ve yanlış tekrar düğmesi araçların altına
    const tekrar = document.getElementById("tekrar"); if (tekrar && tekrar.parentElement) ozel.after(tekrar.parentElement);
  }
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  const ekle = () => { if (!window.ANA_KARTLAR.includes(sonra)) window.ANA_KARTLAR.push(sonra); };
  const sonra = () => setTimeout(duzenle, 0);
  ekle();
  window.addEventListener("load", () => { ekle(); duzenle(); });
  new MutationObserver(() => duzenle()).observe(document.documentElement, { childList: true, subtree: true });
})();
