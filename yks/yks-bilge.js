// 🦉 Bilge'ye Sor — YKS (Netpusula) sürümü. Ücretsizdir, internete veri göndermez.
// 5–12'deki sohbet.js'nin YKS yapısına uyarlanmış hâlidir (ana kopya değildir; YKS'ye özeldir).
// Cevaplarını YKS sayfasındaki konu listesinden (MUF), soru bankasındaki çözümlerden (BANK)
// ve öğrencinin kendi verisinden (S.stats başarı oranları, S.defter yanlış defteri, S.konu tamamlananlar) üretir.
// Yazılanlar hiçbir yere gönderilmez ve kaydedilmez (yalnızca ekranda, sayfa kapanınca silinir).
(function () {
  "use strict";
  if (typeof MUF === "undefined" || typeof S === "undefined") return;
  const mesajlar = [];
  const GUN = 864e5;

  // ---------- Metin yardımcıları ----------
  const kucuk = (s) => String(s).toLocaleLowerCase("tr").normalize("NFC");
  const sade = (s) => kucuk(s).replace(/<[^>]+>/g, " ").replace(/[^a-zçğıöşüâî0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  const DOLGU = new Set("ve veya ile bir bu şu o ne neden nasıl nedir niçin mi mı mu mü da de ki için gibi kadar daha en çok az var yok olan olarak ama fakat hangi hangisi kim kaç acaba lütfen bana beni bize sen sana ben biz siz şey şeyi anlat anlatır açıkla söyle öğrenmek istiyorum demek anlamı hakkında ilgili bilgi ver verir misin yardım eder konusu konusunu konu soru soruları çalışmak tyt ayt yks".split(" "));
  const kok = (w) => (w.length > 5 ? w.slice(0, 5) : w);
  const kelimeler = (s) => sade(s).split(" ").filter((w) => w.length > 1 && !DOLGU.has(w));
  const duz = (h) => String(h).replace(/<sup>(.*?)<\/sup>/g, "^$1").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ");
  const kisalt = (s, n) => (s.length > n ? s.slice(0, n - 1) + "…" : s);
  const sec = (a) => a[Math.floor(Math.random() * a.length)];
  const js = (s) => String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, "&quot;");
  const yuzde = (s) => Math.round((s.c / s.t) * 100);

  // ---------- Konu dizini (MUF) ----------
  let DIZIN = null, DF = {}, N = 1;
  function dizinKur() {
    DIZIN = [];
    MUF.forEach((m) => m.k.forEach((k, i) => {
      const baslik = new Set(kelimeler(k[0]).map(kok));
      const hepsi = new Set([...baslik, ...kelimeler(m.ad + " " + (DERS[m.d] ? DERS[m.d].ad : "") + " " + (k[2] || []).join(" ")).map(kok)]);
      hepsi.forEach((w) => (DF[w] = (DF[w] || 0) + 1));
      DIZIN.push({ m, k, i, baslik, hepsi });
    }));
    N = DIZIN.length;
  }
  const idf = (w) => Math.log(N / (1 + (DF[w] || 0))) + 0.5;
  function ara(soru) {
    if (!DIZIN) dizinKur();
    const q = [...new Set(kelimeler(soru).map(kok))];
    if (!q.length) return null;
    const toplam = q.reduce((a, w) => a + idf(w), 0);
    const isteSinav = /\bayt\b/.test(kucuk(soru)) ? "AYT" : /\btyt\b/.test(kucuk(soru)) ? "TYT" : null;
    let en = null;
    for (const e of DIZIN) {
      let puan = 0, kapsam = 0;
      for (const w of q) if (e.hepsi.has(w)) { kapsam += idf(w); puan += idf(w) * (e.baslik.has(w) ? 2.5 : 1); }
      if (isteSinav && e.m.sinav === isteSinav) puan += 0.5;
      if (!en || puan > en.puan) en = { ...e, puan, kapsam };
    }
    if (!en || en.kapsam / toplam < 0.55 || en.puan < 2.5) return null;
    return en;
  }
  // Soru bankasından o konuya ait, çözümü açıklamalı bir örnek
  function ornekSoru(m, k) {
    const adlar = k[2] || [];
    const l = BANK.filter((b) => b.d === m.d && adlar.includes(b.k) && b.c && !/^Doğru cevap/.test(b.c) && duz(b.c).length > 30 && b.o && b.o.length >= 4);
    return l.length ? sec(l) : null;
  }
  // Konunun anlatımı sitenin hangi sınıf bölümünde (HAVUZ_ESLE: "9:ede4k2" gibi)
  function anlatimSinif(m, i) {
    const refs = ((window.HAVUZ_ESLE || {})[m.id] || [])[i] || [];
    const g = refs.map((r) => +r.split(":")[0]).filter((x) => x >= 5 && x <= 12);
    if (!g.length) return null;
    const lise = g.filter((x) => x >= 9);
    return Math.max(...(lise.length ? lise : g));
  }
  const sinifYol = (g) => (g === 6 ? "../" : `../${g}sinif/`);

  // ---------- Öğrencinin verisi ----------
  const konuStat = () => Object.entries(S.stats || {}).filter(([k, s]) => s && s.t >= 3 && DERS[k.split("|")[0]])
    .map(([k, s]) => { const [d, kk] = k.split("|"); return { d, k: kk, t: s.t, c: s.c, sc: (s.c + 1) / (s.t + 2) }; });
  const tekrarBekleyen = () => Object.values(S.defter || {}).filter((e) => e.box <= 5 && e.due <= Date.now());
  const alanDers = () => ALAN[S.alan] || ALAN.TUM;
  const tBtn = (d, k, et) => [`${et || "✏️"} ${kisalt(k, 22)}`, `A.konuTest('${js(d)}','${js(k)}')`];

  function eksiklerim() {
    const l = konuStat();
    if (!l.length) return { html: `Henüz yeterince soru çözmedin, o yüzden eksiklerini bilemiyorum. 🦉<br>Bir konuda en az <b>3 soru</b> çözünce o konunun başarı oranını görürüm. Hızlı başlamak için <b>Akıllı Test</b>'i dene.`, btn: [["🎯 Akıllı Test", "A.smart()"]] };
    const zayif = l.filter((x) => x.c / x.t < 0.6).sort((a, b) => a.sc - b.sc);
    const due = tekrarBekleyen();
    if (!zayif.length && !due.length) return { html: `Çözdüğün ${l.length} konunun hepsinde %60'ın üstündesin! 🌟 Şimdi yeni konulara geçmenin ya da bir <b>mini deneme</b> çözmenin zamanı.`, btn: [["📝 TYT Mini Deneme", "A.deneme('tyt')"]] };
    const dersSay = {}; zayif.forEach((x) => (dersSay[x.d] = (dersSay[x.d] || 0) + 1));
    const enDers = Object.entries(dersSay).sort((a, b) => b[1] - a[1])[0];
    return {
      html: `${zayif.length ? `🔎 Başarı oranına göre <b>henüz oturmamış</b> konuların:<br>${zayif.slice(0, 5).map((x) => `• <b>${esc(x.k)}</b> <small>(${esc(DERS[x.d].ad)} · ${x.c}/${x.t} doğru, %${yuzde(x)})</small>`).join("<br>")}` : ""}` +
        `${due.length ? `${zayif.length ? "<br><br>" : ""}🧠 Yanlış defterinde <b>tekrar zamanı gelen ${due.length} soru</b> var. Bunları tekrar etmezsen aynı hatayı sınavda da yapabilirsin.` : ""}` +
        `${enDers && enDers[1] > 1 ? `<br><br>En çok eksiğin <b>${esc(DERS[enDers[0]].ad)}</b> dersinde.` : ""}<br><small>Önce konunun videosunu izle, sonra 10 soru çöz. Yanlışlarının çözümünü mutlaka oku. 💪</small>`,
      btn: [...zayif.slice(0, 2).map((x) => tBtn(x.d, x.k)), ...(due.length ? [["🔁 Tekrara başla", "A.review()"]] : [])]
    };
  }

  function bugunCalis() {
    const plan = [];
    const due = tekrarBekleyen().length;
    if (due) plan.push({ ad: `Yanlış defteri tekrarı (${Math.min(due, 30)} soru)`, neden: "tekrar zamanı geldi", btn: ["🔁 Tekrar", "A.review()"] });
    konuStat().filter((x) => x.c / x.t < 0.6 && alanDers().includes(x.d)).sort((a, b) => a.sc - b.sc).slice(0, 2)
      .forEach((x) => plan.push({ ad: `${x.k} (${DERS[x.d].ad})`, neden: `başarın %${yuzde(x)}`, btn: tBtn(x.d, x.k) }));
    // Yeni konu: puan türündeki derslerden, en az çalışılan dersin işaretlenmemiş ve hiç soru çözülmemiş ilk konusu
    const dersN = (d) => Object.entries(S.stats || {}).filter(([k]) => k.split("|")[0] === d).reduce((a, [, s]) => a + s.t, 0);
    const adaylar = MUF.filter((m) => alanDers().includes(m.d)).sort((a, b) => dersN(a.d) - dersN(b.d) || (a.sinav === "TYT" ? -1 : 1));
    for (const m of adaylar) {
      if (plan.length >= 3) break;
      const i = m.k.findIndex((k) => !(S.konu[kKey(m, k)] || {}).d && !(k[2] || []).some((n) => (S.stats[m.d + "|" + n] || {}).t));
      if (i < 0 || plan.some((p) => p.m === m)) continue;
      plan.push({ m, ad: `${m.k[i][0]} (${m.sinav} ${m.ad})`, neden: "yeni konu", btn: ["▶ " + kisalt(m.k[i][0], 20), `A.video('${m.id}',${i})`] });
    }
    const bugun = S.days[todayKey()] || 0, kalan = Math.max(0, S.goal - bugun);
    return {
      html: `📋 <b>Bugünkü çalışma planın</b>:<br>${plan.map((p, i) => `${i + 1}. <b>${esc(p.ad)}</b> <small>(${esc(p.neden)})</small>`).join("<br>")}` +
        `<br><br>🎯 Günlük hedefin <b>${S.goal}</b> soru; bugün ${bugun} çözdün${kalan ? `, <b>${kalan}</b> soru kaldı` : ", hedefe ulaştın! 🎉"}.` +
        `<br><small>Yeni konuda önce videoyu izle, “İzledim”e dokun, sonra Soru çöz. 25 dakika çalış, 5 dakika ara ver (Araçlar › Pomodoro). 🦉</small>`,
      btn: plan.map((p) => p.btn)
    };
  }

  function sonYanlis() {
    const l = Object.values(S.defter || {}).filter((e) => e && e.q && e.q.o);
    if (!l.length) return { html: "Yanlış defterin boş! 🎉 Bir test çözüp yanlış yaparsan bana <i>“Bu soruyu neden yanlış yaptım?”</i> diye sorabilirsin; sana çözümünü açıklarım." };
    const e = l.sort((a, b) => (b.son || b.added || 0) - (a.son || a.added || 0))[0], q = e.q;
    const ayni = l.filter((x) => x.q.d === q.d && x.q.k === q.k).length;
    const st = S.stats[q.d + "|" + q.k];
    const ipucu = (/(kaç|hesap|bul)/i.test(duz(q.q)) ? "İşlem sorularında verilenleri ve isteneni ayrı ayrı yazmak, birim ve işaret hatalarını önler." : "Sözel sorularda soru kökündeki “değildir, yanlıştır, ulaşılamaz” gibi olumsuz ifadelerin altını çiz; şıkları tek tek eleyerek ilerle.");
    return {
      html: `Son yanlış yaptığın soru (<b>${esc(DERS[q.d] ? DERS[q.d].ad : q.d)} · ${esc(q.k)}</b>) 👇<br><i>${esc(kisalt(duz(q.q), 200))}</i><br>✅ Doğru cevap: <b>${q.o[q.a]}</b>` +
        `${q.c ? `<br>💡 <b>Neden?</b> ${q.c}` : ""}` +
        `${ipucu ? `<br><br>📌 ${ipucu}` : ""}` +
        `${ayni > 1 ? `<br><br>Bu konuda defterinde <b>${ayni}</b> yanlış birikmiş${st ? ` (başarın %${yuzde(st)})` : ""}. Bu bir dikkat hatasından çok konu eksiği olabilir; konuyu baştan bir kez daha çalış.` : ""}` +
        `<br><small>Yanlış yapmak öğrenmenin parçası. Benzer sorularla hemen dene! 🌱</small>`,
      btn: [tBtn(q.d, q.k, "✏️ Benzer:"), ["📒 Defteri aç", "A.go('defter')"]]
    };
  }

  // ---------- Hesap (sayılar ve + − × ÷ ( ) ,) ----------
  function hesapla(metin) {
    let s = metin.replace(/\s/g, "").replace(/×|x(?=\d)|\*/gi, "*").replace(/÷|:/g, "/").replace(/−/g, "-").replace(/,/g, ".").replace(/[=?]+$/, "");
    if (!/^[\d.+\-*/()]+$/.test(s) || !/\d[+\-*/]\d|\d[+\-*/]\(|\)[+\-*/]/.test(s) || s.length > 60) return null;
    let i = 0;
    const sayi = () => { if (s[i] === "(") { i++; const v = top(); if (s[i] !== ")") throw 0; i++; return v; } if (s[i] === "-") { i++; return -sayi(); } const m = /^\d+(\.\d+)?/.exec(s.slice(i)); if (!m) throw 0; i += m[0].length; return parseFloat(m[0]); };
    const carp = () => { let v = sayi(); while (s[i] === "*" || s[i] === "/") { const o = s[i++], w = sayi(); if (o === "/" && w === 0) throw 1; v = o === "*" ? v * w : v / w; } return v; };
    const top = () => { let v = carp(); while (s[i] === "+" || s[i] === "-") { const o = s[i++], w = carp(); v = o === "+" ? v + w : v - w; } return v; };
    try { const v = top(); if (i !== s.length) return null; return { ifade: metin.trim().replace(/[=?]+$/, ""), sonuc: Math.round(v * 1e6) / 1e6 }; }
    catch (e) { return e === 1 ? { hata: "Bir sayı 0'a bölünemez." } : null; }
  }

  // ---------- Cevap ----------
  function cevapla(girdi) {
    const q = sade(girdi);
    if (!q) return { html: "Bir şey yazmadın 🙂 Merak ettiğin bir konuyu ya da “Neyi bilmiyorum?” diye sorabilirsin." };
    if (/kendimi öldür|intihar|ölmek istiyorum|yaşamak istemiyorum|kendime zarar|beni dövüyor|bana vuruyor|taciz|istismar|zorbalık|beni tehdit/.test(q))
      return { html: `Bunu paylaştığın için teşekkür ederim. Bu çok önemli ve bunu yalnız taşımamalısın. 💛<br>Lütfen <b>hemen güvendiğin bir yetişkine</b> anlat: ailen, öğretmenin ya da okulundaki <b>rehber öğretmen</b>.<br>Acil bir tehlike varsa <b>112</b>'yi arayabilirsin.<br>Ben bir ders yardımcısıyım; böyle konularda sana gerçek bir insan çok daha iyi yardım eder.` };
    if (/\b(salak|aptal|gerizekalı|lan|siktir|amk|aq)\b/.test(q)) return { html: "Güzel sözlerle konuşalım 🙂 Bir ders sorusu sormak ister misin?" };
    if (/^(merhaba|selam|selamlar|günaydın|iyi akşamlar|hey|sa|slm)\b/.test(q))
      return { html: `${sec(["Merhaba!", "Selam!", "Hoş geldin!"])} 🦉 Ben Bilge. YKS hazırlığında yanındayım. <i>“Neyi bilmiyorum?”</i>, <i>“Bugün ne çalışayım?”</i>, <i>“Türev”</i> ya da <i>“Sınava kaç gün kaldı?”</i> diye sorabilirsin.` };
    if (/teşekkür|sağ ol|sağol|eyvallah|tşk/.test(q)) return { html: sec(["Rica ederim! 🦉 Başka sorun olursa buradayım.", "Ne demek! Her gün biraz, sınavda çok fark eder. 💪"]) };
    if (/sıkıldım|yoruldum|çalışmak istemiyorum|motivasyon|yapamıyorum|beceremiyorum|stres|kaygı|endişe|panik|netlerim düşük|netim düşük/.test(q))
      return { html: sec([
        "YKS bir maraton, sprint değil. 🌱 Bugün sadece 25 dakika odaklan, 5 dakika ara ver; bunu üç kez yapman yeter. Küçük ama düzenli adımlar netleri artırır.",
        "Netlerin bugün düşük olabilir, bu <b>henüz</b> öyle demek. 💪 Denemeden sonra yanlışlarını tek tek incelemek, yeni deneme çözmekten daha çok kazandırır. İstersen yanlış defterinden başlayalım.",
        "Kaygı hissetmen çok normal; hazırlanan herkes yaşar. Derin bir nefes al, bir bardak su iç ve en sevdiğin dersten 10 soru çözerek başla. Uyku ve düzenli mola da çalışmanın parçası. ⭐ Kaygın seni çok zorluyorsa rehber öğretmeninle ya da ailenle konuşmak iyi gelir."]),
        btn: [["🔁 Yanlış defteri", "A.go('defter')"]] };

    if (/neyi bilmiyorum|eksikler|eksiğim|eksik konu|zayıf olduğum|zayıf konu|bilmediğim konu|nerede kötüyüm|hangi konularda kötü/.test(q)) return eksiklerim();
    if (/ne çalış|neyi çalış|bugün ne yap|ne yapsam|nereden başla|plan yap|program yap/.test(q)) return bugunCalis();
    if (/yanlış yaptım|yanlışım|neden yanlış|niye yanlış|yanlışımı|hatamı|son yanlış/.test(q)) return sonYanlis();

    if (/kaç gün|ne zaman|sınav tarihi|tarihi ne|kaldı/.test(q) && /sınav|yks|tyt|ayt|ydt|kaldı/.test(q)) {
      const g = (t) => Math.max(0, Math.ceil((t - Date.now()) / GUN));
      return { html: `📅 <b>TYT</b>: 19 Haziran 2027 → <b>${g(TYT_DATE)}</b> gün kaldı.<br><b>AYT ve YDT</b>: 20 Haziran 2027 → <b>${g(AYT_DATE)}</b> gün kaldı.<br><small>Başvurular 4 Şubat – 2 Mart 2027 (ÖSYM takvimi). Güncel bilgiyi her zaman <a href="https://www.osym.gov.tr/" target="_blank" rel="noopener">osym.gov.tr</a> adresinden kontrol et.</small>` };
    }
    if (/\bnet\b.*(hesap|nasıl|nedir)|netim kaç|puan.*hesap|puanım|kaç puan|yanlış doğruyu|yanlış götür/.test(q))
      return { html: `Net = doğru − yanlış ÷ 4 (4 yanlış 1 doğruyu götürür; boş bırakılan soru neti etkilemez). Örneğin 30 doğru 8 yanlış → 30 − 2 = <b>28 net</b>.<br>Netlerinden tahmini TYT puanını <b>Araçlar</b> bölümündeki hesaplayıcıda bulabilirsin.`, btn: [["🧮 Puan hesapla", "A.go('araclar')"]] };

    const h = hesapla(girdi.replace(/kaç(tır|eder)?|eder|sonucu|hesapla/gi, ""));
    if (h) return h.hata ? { html: h.hata } : { html: `<b>${esc(h.ifade.replace(/\s+/g, " ").trim())} = ${String(h.sonuc).replace(".", ",")}</b><br><small>İşlem önceliği: parantez → üs → çarpma-bölme (soldan sağa) → toplama-çıkarma. Sınavda hesap makinesi yok; bunu bir de kâğıtta yapmayı dene. ✏️</small>` };

    const b = ara(girdi);
    if (b) {
      const { m, k, i } = b, adlar = k[2] || [];
      let t = 0, c = 0; adlar.forEach((n) => { const s = S.stats[m.d + "|" + n]; if (s) { t += s.t; c += s.c; } });
      const ornek = ornekSoru(m, k), sn = anlatimSinif(m, i), tamam = (S.konu[kKey(m, k)] || {}).d;
      return {
        html: `📚 <b>${esc(m.sinav)} ${esc(m.ad)} › ${esc(k[0])}</b><br>` +
          `${t ? `Bu konuda ${t} soru çözdün, <b>%${Math.round((c / t) * 100)}</b> doğru. ${c / t < 0.6 ? "Biraz daha çalışmalıyız. 💪" : "İyi gidiyorsun! 🌟"}` : "Bu konuda henüz soru çözmedin."}${tamam ? " Konuyu tamamlandı olarak işaretlemişsin. ✓" : ""}` +
          `${ornek ? `<br><br>🧩 <b>Konudan çözümlü bir örnek</b> (önce kendin dene):<div class="bl-q">${ornek.q}</div><ol class="bl-o" type="A">${ornek.o.map((o) => `<li>${o}</li>`).join("")}</ol><details class="bl-d"><summary>Cevabı ve çözümü göster</summary>✅ <b>${ornek.o[ornek.a]}</b><br>${ornek.c}</details>` : ""}` +
          `${sn ? `<br><small>📖 Konunun yazılı anlatımı sitenin <a href="${sinifYol(sn)}">${sn}. sınıf bölümünde</a>.</small>` : ""}`,
        btn: [["▶ Video", `A.video('${m.id}',${i})`], ...(adlar.length ? [["✏️ 10 soru çöz", `A.konuQ('${m.id}',${i})`]] : [])]
      };
    }

    const aranan = encodeURIComponent(girdi.trim().slice(0, 100));
    return { html: `Bunu YKS konu listesinde bulamadım. 🤔<br>• Konunun adını yazmayı dene (örn. <i>“Türev”</i>, <i>“Paragrafta ana düşünce”</i>, <i>“Mol kavramı”</i>).<br>• Güvenli kaynaklarda ara: <a href="https://tr.wikipedia.org/w/index.php?search=${aranan}" target="_blank" rel="noopener">📘 Vikipedi</a> · <a href="https://www.osym.gov.tr/" target="_blank" rel="noopener">ÖSYM</a> · <a href="https://www.eba.gov.tr/" target="_blank" rel="noopener">EBA</a><br>• En iyisi: <b>öğretmenine sor</b>. 🙂` };
  }

  // ---------- Görünüm ----------
  const st = document.createElement("style");
  st.textContent = `
.bl-kutu{display:flex;flex-direction:column;gap:10px;margin-top:14px}
.bl-m{max-width:90%;padding:10px 14px;border-radius:16px;line-height:1.5;word-wrap:break-word;overflow-wrap:anywhere}
.bl-m.ben{align-self:flex-end;background:var(--lead);color:var(--lead-ink);border-bottom-right-radius:5px}
.bl-m.bilge{align-self:flex-start;background:var(--sheet);border:1px solid var(--line);border-bottom-left-radius:5px}
.bl-m a{color:var(--form)}
.bl-btn{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.bl-q{margin-top:6px;padding:8px 10px;border-left:3px solid var(--form);background:var(--paper);border-radius:6px}
.bl-o{margin:6px 0 4px;padding-left:22px}
.bl-d summary{cursor:pointer;color:var(--form);font-weight:600}
.bl-oneri{display:flex;flex-wrap:wrap;gap:6px}
.bl-oneri button{font-size:.88rem;padding:5px 11px;border-radius:999px;border:1px solid var(--line);background:var(--sheet)}
.bl-giris{display:flex;gap:8px;margin-top:12px;position:sticky;bottom:calc(64px + env(safe-area-inset-bottom,0px));background:var(--paper);padding:8px 0}
.bl-giris input{flex:1;min-width:0;background:var(--sheet);border:1px solid var(--line);border-radius:999px;padding:10px 14px;min-height:44px}
.tile.bilge-t{grid-column:1/-1;flex-direction:row;align-items:center;gap:12px;min-height:0;border-color:var(--form)}
.tile.bilge-t .ik{font-size:2rem;line-height:1}`;
  document.head.appendChild(st);

  const ORNEK = ["Neyi bilmiyorum?", "Bugün ne çalışayım?", "Bu soruyu neden yanlış yaptım?", "Türev", "Paragrafta ana düşünce", "Sınava kaç gün kaldı?"];
  function gorunum() {
    if (!mesajlar.length) mesajlar.push({ kim: "bilge", html: `Merhaba! Ben <b>Bilge</b> 🦉 YKS hazırlığında yanındayım.<br>Çözdüğün sorulara bakıp <b>eksiklerini</b> söylerim, <b>bugünkü çalışma planını</b> çıkarırım, <b>yanlışlarının nedenini</b> açıklarım. Bir konunun adını yazarsan videosunu, çözümlü örneğini ve sorularını getiririm.<br><small>Cevaplarımı bu sayfadaki konu ve soru bankasından veriyorum. Yazdıkların hiçbir yere gönderilmez.</small>` });
    return `<div class="topbar"><div class="brand"><span class="eyebrow">Asistan öğretmen · çevrimdışı</span><h1>🦉 Bilge'ye Sor</h1></div><button class="btn sm" onclick="A.go('panel')">‹ Panel</button></div>
    <div class="ticks" style="margin-top:10px"></div>
    <div class="bl-kutu" id="blKutu">${mesajlar.map((m) => `<div class="bl-m ${m.kim}">${m.html}${m.btn && m.btn.length ? `<div class="bl-btn">${m.btn.map(([a, e]) => `<button class="btn sm" onclick="${e}">${esc(a)}</button>`).join("")}</div>` : ""}</div>`).join("")}
    ${mesajlar.length <= 1 ? `<div class="bl-oneri">${ORNEK.map((x) => `<button onclick="YKS_BILGE.sor('${js(x)}')">${esc(x)}</button>`).join("")}</div>` : ""}</div>
    <form class="bl-giris" onsubmit="event.preventDefault();YKS_BILGE.sor()"><input id="blIn" type="text" placeholder="Sorunu yaz…" autocomplete="off" enterkeyhint="send" maxlength="200" aria-label="Sorunu yaz"><button class="btn pri" type="submit">Gönder</button></form>`;
  }
  function sor(metin) {
    const inp = document.getElementById("blIn");
    metin = String(metin ?? (inp ? inp.value : "")).trim(); if (!metin) return;
    mesajlar.push({ kim: "ben", html: esc(metin) });
    const c = cevapla(metin);
    mesajlar.push({ kim: "bilge", html: c.html, btn: c.btn });
    if (mesajlar.length > 60) mesajlar.splice(1, 2);
    render();
    const kutu = document.getElementById("blKutu"), son = kutu && kutu.lastElementChild;
    if (son) son.scrollIntoView({ block: "start" });
  }
  window.YKS_BILGE = { gorunum, sor, cevapla, ara, eksiklerim, bugunCalis, sonYanlis, hesapla };
  if (view === "bilge" || view === "panel") render();
})();
