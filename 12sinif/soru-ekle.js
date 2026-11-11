// ➕ Ek soru bankası ve otomatik soru üretimi (5–12). İçerik dosyalarından SONRA, app.js'ten ÖNCE yüklenir.
// 1) window.SORU_EK = { konuId: `soru | DOĞRU | yanlış1 ; yanlış2 ; yanlış3 | çözüm` } → elle yazılmış ek sorular.
// 2) Konu metninden (özet + anlatım) otomatik sorular (matematik ve İngilizce hariç):
//    • Boşluk doldurma: cümledeki özel ad / yıl boşaltılır, şıklar aynı dersin metinlerinden seçilir.
//    • Kavram–tanım: "Kavram: tanım" biçimindeki özet satırlarından "Bu tanım hangi kavrama aittir?"
//    • Yanlışı bul: konunun üç doğru cümlesi + bir sözcüğü değiştirilmiş cümle → "Hangisi yanlıştır?"
//    Bilgi konunun kendi metninden geldiği için doğru cevap metinde yazandır.
// 3) soruHazirla sarmalanır: son görülen sorular tekrar gelmez; üreteçli konularda sabit soruların payı artırılır.
(function () {
  const ICERIK = window.ICERIK || {}, EK = window.SORU_EK || {};
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const karistir = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = r(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const coz = (metin) => String(metin).split("\n").map((s) => s.trim()).filter((s) => s && !s.startsWith("//")).map((s) => {
    const p = s.split("|").map((x) => x.trim());
    if (p.length < 3) return null;
    const y = p[2].split(";").map((x) => x.trim()).filter(Boolean);
    return y.length >= 2 ? { soru: p[0], secenekler: [p[1], ...y.slice(0, 3)], dogru: 0, cozum: p[3] || "", ek: true } : null;
  }).filter(Boolean);
  const ekle = (k, s) => { k.sorular = k.sorular || []; k._var = k._var || new Set(k.sorular.map((x) => x.soru)); if (k._var.has(s.soru)) return false; k._var.add(s.soru); k.sorular.push(s); return true; };

  for (const dk of Object.keys(ICERIK)) for (const u of ICERIK[dk].uniteler || []) for (const k of u.konular || []) {
    if (EK[k.id]) for (const s of coz(EK[k.id])) ekle(k, s);
  }

  // ---------- Otomatik sorular ----------
  const BUYUK = "A-ZÇĞİÖŞÜÂÎÛ", KUCUK = "a-zçğıöşüâîû";
  const OZEL = new RegExp(`[${BUYUK}][${KUCUK}]{2,}(?:\\s[${BUYUK}][${KUCUK}]{1,})*`, "g");
  const YIL = /\b(1[0-9]{3}|20[0-2][0-9])\b/g;
  const YASAK = new Set(["Bu", "Bir", "Her", "Ancak", "Fakat", "Ama", "Çünkü", "Böylece", "Bunun", "Bunlar", "Şu", "Örnek", "Örneğin", "Ayrıca", "Yani", "Hem", "Ya", "Da", "De", "Ve", "İle", "Ki", "Ne", "Hangi", "Neden", "Nasıl", "Kim", "Not", "Dikkat", "Önemli", "İlk", "Son", "Daha", "En", "Çok", "Az", "Tüm", "Bütün", "Genellikle", "Sonra", "Önce", "Bazı", "Diğer", "Böyle", "Şöyle", "Öyle", "Ayrı", "Kısaca"]);
  const cumleler = (k) => {
    const c = [];
    for (const o of k.ozet || []) for (const p of String(o).split(/\s+·\s+/)) c.push({ m: p.trim(), ozet: true });
    for (const a of k.anlatim || []) for (const p of String(a).split(/(?<=[.!])\s+(?=[A-ZÇĞİÖŞÜ"“])/)) c.push({ m: p.trim(), ozet: false });
    return c.filter((x) => x.m.length >= 25 && x.m.length <= 230 && !/[?=→⇔≤≥√∑∫]/.test(x.m) && !x.m.includes("____"));
  };
  const adaylar = (m) => {
    const out = [];
    let x; OZEL.lastIndex = 0;
    while ((x = OZEL.exec(m))) {
      const t = x[0], i = x.index;
      if (i === 0 || /[:"“(]\s*$/.test(m.slice(Math.max(0, i - 2), i)) || /[.!]\s+$/.test(m.slice(0, i))) continue;
      if (YASAK.has(t.split(" ")[0])) continue;
      if (/[-'’`A-Za-zÇĞİÖŞÜçğıöşüâîû]/.test(m.charAt(i - 1)) || m.charAt(i + t.length) === "-") continue;
      out.push({ t, i, tur: "ad", n: t.split(" ").length });
    }
    YIL.lastIndex = 0;
    while ((x = YIL.exec(m))) if (!/[-0-9]/.test(m.charAt(x.index - 1)) && m.charAt(x.index + 4) !== "-") out.push({ t: x[0], i: x.index, tur: "yil", n: 1 });
    return out;
  };
  const tamYazi = (s) => s.replace(/\s+/g, " ").trim();
  const AYLAR = /^(Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık)$/;
  // Doğru cevaba biçimce benzeyen şıkları öne alır (aynı ek/son, yakın uzunluk, ay adıysa ay adı)
  const benzer = (hedef, liste, adet) => {
    const h = hedef.toLocaleLowerCase("tr"), ay = AYLAR.test(hedef);
    const puan = (t) => { const x = t.toLocaleLowerCase("tr"); let p = Math.random() * 1.5;
      if (x.slice(-3) === h.slice(-3)) p += 3; else if (x.slice(-2) === h.slice(-2)) p += 1.5;
      if (/'/.test(t) === /'/.test(hedef)) p += 1; if (AYLAR.test(t) === ay) p += ay ? 5 : 1;
      p -= Math.abs(t.length - hedef.length) / 6; return p; };
    return liste.map((t) => [puan(t), t]).sort((a, b) => b[0] - a[0]).slice(0, adet).map((x) => x[1]);
  };

  function dersUret(dk) {
    const D = ICERIK[dk]; if (!D) return;
    if (/^(matematik|ingilizce|geometri)/i.test(dk) || /matematik|ingilizce|english/i.test(D.ad || "")) return;
    const konular = (D.uniteler || []).flatMap((u) => u.konular || []);
    const havuz = { ad: new Map(), yil: new Set() };
    const kc = new Map();
    for (const k of konular) {
      const c = cumleler(k); kc.set(k, c);
      for (const s of c) for (const a of adaylar(s.m)) {
        if (a.tur === "yil") havuz.yil.add(a.t);
        else { const l = havuz.ad.get(a.n) || new Set(); l.add(a.t); havuz.ad.set(a.n, l); }
      }
    }
    // Kavram–tanım havuzu (ders genelinde)
    const tanimlar = [];
    for (const k of konular) for (const o of k.ozet || []) for (const p of String(o).split(/\s+·\s+/)) {
      const mm = p.match(/^([^:()]{2,40}):\s+(.{15,200})$/);
      if (mm && mm[1].split(/\s+/).length <= 4 && !/[=→⇔0-9]/.test(mm[1]) && !/^(Örnek|Örnekler|Not|Dikkat|Kural|İpucu|Unutma|Formül)/i.test(mm[1])) tanimlar.push({ k, kavram: mm[1].trim(), tanim: mm[2].trim() });
    }
    for (const k of konular) {
      const c = kc.get(k) || []; let sayac = 0;
      // 1) Boşluk doldurma
      for (const s of c) {
        const ad = adaylar(s.m);
        for (const a of ad.slice(0, 3)) {
          if (sayac >= 40) break;
          const altM = s.m.toLocaleLowerCase("tr");
          let secenek;
          if (a.tur === "yil") {
            const p = [...havuz.yil].filter((y) => y !== a.t && !s.m.includes(y));
            const yakin = []; for (let i = 0; i < 12; i++) { const y = String(+a.t + (r(0, 1) ? 1 : -1) * r(2, 60)); if (y !== a.t && !s.m.includes(y)) yakin.push(y); }
            secenek = [...new Set(karistir(p).slice(0, 2).concat(karistir(yakin)))].slice(0, 3);
          } else {
            const p = [...(havuz.ad.get(a.n) || [])].filter((t) => t !== a.t && !altM.includes(t.toLocaleLowerCase("tr")) && t.toLocaleLowerCase("tr") !== a.t.toLocaleLowerCase("tr"));
            secenek = benzer(a.t, p, 3);
          }
          if (secenek.length < 3) continue;
          const bos = s.m.slice(0, a.i) + "____" + s.m.slice(a.i + a.t.length);
          if (ekle(k, { soru: `Boşluğa hangisi gelmelidir? "${tamYazi(bos)}"`, secenekler: [a.t, ...secenek], dogru: 0, cozum: tamYazi(s.m), otomatik: true })) sayac++;
        }
      }
      // 1b) Kavram boşaltma: dersin tanımlı kavramlarından biri cümlede geçiyorsa
      const kavramlar = [...new Set(tanimlar.map((x) => x.kavram).filter((x) => x.length >= 4 && !/göre$|özelliği|'n[iı]n\b/.test(x)))];
      for (const s of c) {
        if (sayac >= 55) break;
        const alt = s.m.toLocaleLowerCase("tr");
        const yer = (kv) => { const re = new RegExp("(^|[^A-Za-zÇĞİÖŞÜçğıöşüâîû'’-])(" + kv.toLocaleLowerCase("tr").replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?![-A-Za-zÇĞİÖŞÜçğıöşüâîû])", "u"); const mm = re.exec(alt); return mm ? mm.index + mm[1].length : -1; };
        const bul = kavramlar.find((kv) => { const i = yer(kv); return i > 0 && !/^[^:]{0,40}:/.test(s.m.slice(0, i + 1)); });
        if (!bul) continue;
        const i = yer(bul);
        const bk = bul.toLocaleLowerCase("tr");
        const p = kavramlar.filter((kv) => { const x = kv.toLocaleLowerCase("tr"); return x !== bk && !alt.includes(x) && !x.includes(bk) && !bk.includes(x); });
        const sec = benzer(bul, p, 3);
        if (sec.length < 3) continue;
        const bos = s.m.slice(0, i) + "____" + s.m.slice(i + bul.length);
        if (ekle(k, { soru: `Boşluğa hangisi gelmelidir? "${tamYazi(bos)}"`, secenekler: [s.m.slice(i, i + bul.length), ...sec.map((x) => /^[A-ZÇĞİÖŞÜ]/.test(s.m.slice(i, i + 1)) ? x : x.charAt(0).toLocaleLowerCase("tr") + x.slice(1))], dogru: 0, cozum: tamYazi(s.m), otomatik: true })) sayac++;
      }
      // 2) Kavram–tanım (+ yazılı provası için açık uçlu "… nedir?" sorusu)
      for (const t of tanimlar.filter((x) => x.k === k)) {
        k.acik = k.acik || [];
        const as = `${t.kavram} nedir? Kısaca açıklayınız.`;
        if (!k.acik.some((x) => x.soru === as)) k.acik.push({ soru: as, cevap: t.tanim, otomatik: true });
        const kucuk = (z) => z.toLocaleLowerCase("tr"), ic = (x) => kucuk(x).includes(kucuk(t.kavram)) || kucuk(t.kavram).includes(kucuk(x));
        const uygun = tanimlar.filter((x) => !ic(x.kavram) && !/göre$|özelliği|'n[iı]n\b/.test(x.kavram));
        const ayniKonu = karistir(uygun.filter((x) => x.k === k).map((x) => x.kavram)), diger = karistir(uygun.filter((x) => x.k !== k).map((x) => x.kavram));
        const sec = [...new Set(ayniKonu.concat(diger))].slice(0, 3);
        if (sec.length < 3) continue;
        ekle(k, { soru: `"${t.tanim}" Bu açıklama hangi kavrama aittir?`, secenekler: [t.kavram, ...sec], dogru: 0, cozum: `${t.kavram}: ${t.tanim}`, otomatik: true });
      }
      // 3) Yanlışı bul (üç doğru + bir bozulmuş cümle)
      const kisa = c.filter((s) => s.m.length <= 150);
      const bozulabilir = kisa.filter((s) => adaylar(s.m).some((a) => a.tur === "yil" || (havuz.ad.get(a.n) || new Set()).size > 3));
      for (let n = 0; n < Math.min(8, bozulabilir.length); n++) {
        const b = bozulabilir[n], a = adaylar(b.m).find((x) => x.tur === "yil" || (havuz.ad.get(x.n) || new Set()).size > 3);
        let yeniT;
        if (a.tur === "yil") yeniT = String(+a.t + (r(0, 1) ? 1 : -1) * r(5, 80));
        else yeniT = karistir([...havuz.ad.get(a.n)].filter((t) => t !== a.t && !b.m.toLocaleLowerCase("tr").includes(t.toLocaleLowerCase("tr"))))[0];
        if (!yeniT) continue;
        const yanlis = b.m.slice(0, a.i) + yeniT + b.m.slice(a.i + a.t.length);
        const dogrular = karistir(kisa.filter((s) => s !== b)).slice(0, 3).map((s) => tamYazi(s.m));
        if (dogrular.length < 3) continue;
        ekle(k, { soru: `${k.ad} konusuyla ilgili aşağıdakilerden hangisi YANLIŞTIR?`, secenekler: [tamYazi(yanlis), ...dogrular], dogru: 0, cozum: `Doğrusu: ${tamYazi(b.m)}`, otomatik: true });
      }
      delete k._var;
    }
  }
  for (const dk of Object.keys(ICERIK)) { try { dersUret(dk); } catch (e) { console.warn("Otomatik soru üretilemedi:", dk, e); } }
  for (const dk of Object.keys(ICERIK)) for (const u of ICERIK[dk].uniteler || []) for (const k of u.konular || []) delete k._var;

  // Çözüm sonucu yazılmamışsa (ör. "P = F/S = 200/0,5.") ve işlem doğru şıkkı veriyorsa sonucu ekler: "… = 400 Pa"
  const SUP = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-" };
  function cozumTamamla(q) {
    try {
      if (!q || !q.cozum || !q.secenekler) return q;
      const d = String(q.secenekler[q.dogru]);
      const dn = d.replace(/−/g, "-").replace(/(\d) (\d{3})(?!\d)/g, "$1$2").match(/-?\d+(?:,\d+)?/g);
      if (!dn || dn.length !== 1) return q;
      const hedef = +dn[0].replace(",", ".");
      const cz = String(q.cozum).trim();
      const yaln = cz.replace(/\.$/, "");
      const sonParca = yaln.split(/[=:]/).pop().trim();
      const tum = cz.replace(/−/g, "-").replace(/(\d) (\d{3})(?!\d)/g, "$1$2").match(/-?\d+(?:,\d+)?/g) || [];
      if (tum.length && +tum[tum.length - 1].replace(",", ".") === hedef) return q;
      let t = sonParca.replace(/−/g, "-").replace(/×|·/g, "*").replace(/÷/g, "/").replace(/(\d),(\d)/g, "$1.$2").replace(/(\d) (\d{3})(?!\d)/g, "$1$2");
      t = t.replace(/([0-9)])([⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+)/g, (m, a, b) => a + "**(" + b.split("").map((c) => SUP[c]).join("") + ")");
      if (!/[+\-*\/]/.test(t.replace(/^-/, "")) || !/^[\d\s+\-*\/().]+$/.test(t)) return q;
      const v = Function("return (" + t + ")")();
      if (!isFinite(v) || Math.abs(v - hedef) > 1e-6 * Math.max(1, Math.abs(hedef))) return q;
      return { ...q, cozum: yaln + " = " + d + "." };
    } catch (e) { return q; }
  }
  // ---------- Tekrar önleme + sabit soruların payı ----------
  function sar() {
    if (typeof window.soruHazirla !== "function" || window.soruHazirla._sarili) return;
    const asil = window.soruHazirla;
    // kayit, app.js'te "let" ile tanımlı (window özelliği değil); çağrı anında global adla okunur. Yoksa oturum içi bellek kullanılır.
    const bellek = {}, uretGor = {};
    const sonlar = () => { try { const k = typeof kayit !== "undefined" ? kayit : null; if (!k) return bellek; return (k.sonSoru = k.sonSoru || {}); } catch (e) { return bellek; } };
    const yeni = function (k, n) {
      if (!k || !Array.isArray(k.sorular) || (k.sorular.length < 6 && !(window.URETEC && window.URETEC[k.id]))) return (asil.apply(this, arguments) || []).map(cozumTamamla);
      const S = sonlar(), son = new Set(S[k.id] || []), tum = k.sorular, adet = n || 10;
      let kullan = karistir(tum.filter((s) => !son.has(s.soru)));
      if (kullan.length < adet) {
        const eski = (S[k.id] || []).map((m) => tum.find((s) => s.soru === m)).filter(Boolean);
        kullan = kullan.concat(eski.slice(0, adet - kullan.length));
      }
      if (kullan.length < Math.min(adet, tum.length)) kullan = tum;
      let liste;
      const uretecli = !!(window.URETEC && window.URETEC[k.id]);
      if (uretecli) {
        // Üreteçli konu: sabit soru çoksa yarısı sabitten, azsa en fazla 4 sabit; kalanı üreteçten (yakında görülmeyenler)
        const sabitPay = tum.length >= 12 ? Math.ceil(adet / 2) : Math.min(4, Math.ceil(adet / 3), tum.length);
        // Üreteç varken görülmüş sabit soruyu tekrar etmeye gerek yok: yalnız görülmemiş sabitler, eksik kalan üreteçten
        const sabit = kullan.filter((s) => !son.has(s.soru)).slice(0, sabitPay).map((s) => ({ ...s, konuId: k.id }));
        k.sorular = [];
        let ur = [];
        const gerek = adet - sabit.length, gecmis = (uretGor[k.id] = uretGor[k.id] || []);
        try { ur = asil.call(this, k, gerek * 3); } finally { k.sorular = tum; }
        // Üreteç sorularından yakın zamanda görülmeyenler öne alınır
        const yeniU = ur.filter((s) => !gecmis.includes(s.soru)), eskiU = ur.filter((s) => gecmis.includes(s.soru));
        ur = yeniU.concat(eskiU).slice(0, gerek);
        for (const s of ur) gecmis.push(s.soru);
        if (gecmis.length > 80) gecmis.splice(0, gecmis.length - 80);
        liste = karistir(sabit.concat(ur.filter((s) => !sabit.some((x) => x.soru === s.soru))));
        for (const s of kullan.slice(sabitPay)) { if (liste.length >= adet) break; liste.push({ ...s, konuId: k.id }); }
      } else {
        k.sorular = kullan;
        try { liste = asil.apply(this, arguments); } finally { k.sorular = tum; }
      }
      try {
        const yeniSon = (S[k.id] || []).filter((x) => !liste.some((s) => s.soru === x));
        for (const s of liste) if (!s.uretildi && tum.some((t) => t.soru === s.soru)) yeniSon.push(s.soru);
        S[k.id] = yeniSon.slice(-Math.max(8, Math.floor(tum.length * 0.7)));
      } catch (e) {}
      return liste.map(cozumTamamla);
    };
    yeni._sarili = true;
    window.soruHazirla = yeni;
  }
  window.SORU_EKLE_SAR = sar;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", sar); else sar();
})();
