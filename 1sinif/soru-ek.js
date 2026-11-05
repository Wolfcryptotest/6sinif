// ➕ Ek soru bankası yükleyicisi (Minik–4). Ders dosyalarından SONRA, app.js'ten ÖNCE yüklenir.
// window.SORU_EK = { konuId: `soru | doğru | yanlış1 ; yanlış2 ; yanlış3 | çözüm` (her satır bir soru) }
// • Konunun üretecine ek sorular karıştırılır (ek banka büyüdükçe daha sık seçilir).
// • Aynı soru kısa süre içinde tekrar gelmez (konu başına son 20 soru hatırlanır).
(function () {
  if (!window.DERS || !window.O) return;
  const EK = window.SORU_EK || {};
  const coz = (metin) => String(metin).split("\n").map((s) => s.trim()).filter((s) => s && !s.startsWith("//")).map((s) => {
    const p = s.split("|").map((x) => x.trim());
    return p.length >= 3 ? [p[0], p[1], p[2].split(";").map((x) => x.trim()).filter(Boolean), p[3] || ""] : null;
  }).filter(Boolean);
  // Son görülen sorular cihazda saklanır (uygulama kapanıp açılınca da tekrar gelmesin)
  const DEPO = "sonSoru-" + ((window.SINIF && SINIF.anahtar) || location.pathname);
  let hafiza = {}; try { hafiza = JSON.parse(localStorage.getItem(DEPO)) || {}; } catch (e) { hafiza = {}; }
  let yazZaman = null;
  const yaz = () => { if (yazZaman) return; yazZaman = setTimeout(() => { yazZaman = null; try { localStorage.setItem(DEPO, JSON.stringify(hafiza)); } catch (e) {} }, 800); };
  // Kısa özet anahtar (cihazda az yer kaplasın): metinden basit bir karma
  const karma = (t) => { let h = 5381; for (let i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
  const anahtar = (q) => q ? karma(JSON.stringify([q.soru, q.ifade, q.okunacak, q.gorsel, q.secenekler && q.secenekler[q.dogru]])) : "";
  for (const dk of Object.keys(DERS)) {
    for (const t of DERS[dk].temalar || []) for (const k of t.konular || []) {
      if (!k.uret || k._ek) continue;
      k._ek = true;
      const asil = k.uret, liste = EK[k.id] ? coz(EK[k.id]) : [], son = (hafiza[k.id] = Array.isArray(hafiza[k.id]) ? hafiza[k.id] : []);
      const ekSor = () => { const q = O.pick(liste); return O.secim(q[0], q[1], q[2], q[3]); };
      const p = liste.length ? Math.min(0.75, liste.length / (liste.length + 10)) : 0;
      k.uret = function () {
        let q = null;
        for (let i = 0; i < 8; i++) {
          let a = null;
          try { a = liste.length && Math.random() < p ? ekSor() : asil.apply(this, arguments); } catch (e) { a = null; }
          if (!a) continue;
          q = a;
          const an = anahtar(a);
          if (!son.includes(an)) { son.push(an); if (son.length > 20) son.shift(); yaz(); break; }
        }
        return q || asil.apply(this, arguments);
      };
    }
  }
})();
