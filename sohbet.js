// 🦉 Bilge'ye Sor (6. sınıf): ücretsiz, internete veri göndermeyen sohbet öğretmeni.
// Cevapları sitedeki konu anlatımlarından, özet notlardan, İngilizce sözlükten ve öğrencinin ders programından (program.js) üretir.
// Basit işlemleri hesaplar. Cevap bulamazsa güvenli kaynaklarda arama bağlantısı ve "öğretmenine sor" önerisi verir.
// Yazılanlar hiçbir yere gönderilmez ve kaydedilmez (yalnızca ekranda, sayfa kapanınca silinir).
(function () {
  if (typeof kayit === "undefined" || !window.ICERIK) return;
  const mesajlar = []; // { kim: "ben"|"bilge", html }
  const P = () => kayit.program || {};

  // ---------- Metin yardımcıları ----------
  const kucuk = (s) => s.toLocaleLowerCase("tr").normalize("NFC");
  const sade = (s) => kucuk(s).replace(/[^a-zçğıöşü0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  const DOLGU = new Set("ve veya ile bir bu şu o ne neden nasıl nedir niçin mi mı mu mü da de ki için gibi kadar daha en çok az var yok olan olarak ama fakat hangi hangisi kim kaç acaba lütfen bana beni bize sen sana ben biz siz onlar şey şeyi anlat anlatır anlatırmısın açıkla söyle öğrenmek istiyorum demek ne demek nedir anlamı hakkında ilgili bilgi ver verir misin yardım eder misin edermisin".split(" "));
  const kok = (w) => (w.length > 5 ? w.slice(0, 5) : w);
  const kelimeler = (s) => sade(s).split(" ").filter((w) => w.length > 1 && !DOLGU.has(w));

  // ---------- Dizin: konu anlatımları ve özetler ----------
  let DIZIN = null, DF = {}, N = 1;
  function dizinKur() {
    DIZIN = [];
    for (const [dk, D] of Object.entries(window.ICERIK)) for (const u of D.uniteler) for (const k of u.konular) {
      const parcalar = [...(k.ozet || []).map((t) => ({ t, tur: "ozet" })), ...(k.anlatim || []).map((t) => ({ t, tur: "anlatim" }))]
        .map((p) => ({ ...p, kokler: new Set(kelimeler(p.t).map(kok)) }));
      const baslik = new Set(kelimeler(k.ad).map(kok)), hepsi = new Set([...baslik, ...kelimeler(u.ad).map(kok)]);
      parcalar.forEach((p) => p.kokler.forEach((w) => hepsi.add(w)));
      hepsi.forEach((w) => (DF[w] = (DF[w] || 0) + 1));
      DIZIN.push({ dk, D, u, k, baslik, hepsi, parcalar });
    }
    N = DIZIN.length;
  }
  const idf = (w) => Math.log(N / (1 + (DF[w] || 0))) + 0.5;
  const ES = { ebob: "en büyük ortak bölen", ekok: "en küçük ortak kat", obeb: "en büyük ortak bölen", okek: "en küçük ortak kat" };
  function ara(soru) {
    if (!DIZIN) dizinKur();
    soru = sade(soru).split(" ").map((w) => ES[w] || w).join(" ");
    const q = [...new Set(kelimeler(soru).map(kok))];
    if (!q.length) return null;
    const toplam = q.reduce((a, w) => a + idf(w), 0);
    let en = null;
    for (const e of DIZIN) {
      let puan = 0, kapsam = 0;
      for (const w of q) if (e.hepsi.has(w)) { kapsam += idf(w); puan += idf(w) * (e.baslik.has(w) ? 2.5 : 1); }
      if (!en || puan > en.puan) en = { ...e, puan, kapsam };
    }
    if (!en || en.kapsam / toplam < 0.55 || en.puan < 2.5) return null;
    let enP = null, enPP = 0;
    for (const p of en.parcalar) { let pp = 0; for (const w of q) if (p.kokler.has(w)) pp += idf(w) * (p.tur === "anlatim" ? 1.1 : 1); if (pp > enPP) { enPP = pp; enP = p; } }
    return { ...en, parca: enP || en.parcalar.find((p) => p.tur === "anlatim") || null };
  }

  // ---------- Hesap makinesi (yalnızca sayılar ve + − × ÷ ( ) ,) ----------
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

  // ---------- Kalıplar ----------
  const ICERDE = (q, ...l) => l.some((x) => q.includes(x));
  const sec = (a) => a[Math.floor(Math.random() * a.length)];
  const bugunA = () => { const t = new Date(); return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`; };
  const dersAd = (dk) => { const d = (typeof DERSLER !== "undefined" ? DERSLER : []).find((x) => x.key === dk); return d ? d.ad : dk; };

  function cevapla(girdi) {
    const q = sade(girdi);
    if (!q) return { html: "Bir şey yazmadın 🙂 Merak ettiğin bir konuyu sorabilirsin." };

    // Güvenlik: zor bir durum yaşadığını anlatan çocuğa yetişkin yönlendirmesi
    if (/kendimi öldür|intihar|ölmek istiyorum|yaşamak istemiyorum|kendime zarar|beni dövüyor|bana vuruyor|dokunuyor|taciz|istismar|zorbalık|beni tehdit/.test(q))
      return { html: `Bunu benimle paylaştığın için teşekkür ederim. Bu çok önemli ve bunu yalnız taşımamalısın. 💛<br>Lütfen <b>hemen güvendiğin bir yetişkine</b> anlat: annen, baban, öğretmenin ya da okulundaki <b>rehber öğretmenin</b>.<br>Acil bir tehlike varsa <b>112</b>'yi arayabilirsin.<br>Ben bir ders yardımcısıyım; böyle konularda sana gerçek bir insan çok daha iyi yardım eder.` };
    if (/\b(salak|aptal|gerizekalı|lan|siktir|amk|aq)\b/.test(q))
      return { html: "Güzel sözlerle konuşalım 🙂 Bir ders sorusu sormak ister misin?" };

    if (/^(merhaba|selam|selamlar|günaydın|iyi akşamlar|hey|sa|slm)\b/.test(q))
      return { html: `${sec(["Merhaba!", "Selam!", "Hoş geldin!"])} 🦉 Ben Bilge. Derslerle ilgili ne merak ediyorsan sorabilirsin. Örneğin: <i>"Deyim nedir?"</i>, <i>"Asal sayı nedir?"</i>, <i>"apple ne demek?"</i>, <i>"Yarın hangi derslerim var?"</i>` };
    if (/teşekkür|sağ ol|sağol|eyvallah|tşk/.test(q)) return { html: sec(["Rica ederim! 🦉 Başka sorun olursa buradayım.", "Ne demek, her zaman! Öğrenmeye devam 💪"]) };
    if (/sıkıldım|yoruldum|çalışmak istemiyorum|canım sıkkın|motivasyon|yapamıyorum|beceremiyorum/.test(q))
      return { html: sec([
        "Bazen herkes yorulur, bu çok normal. 🌱 Sadece 10 dakika çalışıp 5 dakika mola vermeye ne dersin? Küçük adımlar büyük başarı getirir.",
        "Yapamıyorum yerine <b>henüz</b> yapamıyorum diyelim. 💪 Beynimiz çalıştıkça güçlenen bir kas gibidir. İstersen kolay bir konudan 5 soru çözerek ısınalım.",
        "Kısa bir mola, bir bardak su ve derin bir nefes… Sonra en sevdiğin dersten bir test çözerek başla. Başladığın an en zor kısım biter! ⭐"]) };

    // Ders programı ve ödevler
    const pr = P();
    if (ICERDE(q, "ödev")) {
      const bek = (pr.odevler || []).filter((o) => !o.bitti).sort((a, b) => a.teslim.localeCompare(b.teslim));
      if (!pr.tablo && !bek.length) return { html: "Henüz kayıtlı ödevin yok. Ana sayfadaki <b>📅 Ders Programım</b> bölümünden ödevlerini kaydedersen sana hatırlatırım.", btn: [["📅 Ders Programım", "program"]] };
      return { html: bek.length ? `Bekleyen ödevlerin:<br>${bek.map((o) => `• <b>${esc(dersAd(o.ders))}</b>${o.metin === "Ödev" ? " ödevi" : " – " + esc(o.metin)} (teslim ${o.teslim < bugunA() ? "<b style='color:#dc2626'>geçti</b>" : esc(new Date(o.teslim + "T00:00:00").toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long" }))})`).join("<br>")}` : "Bekleyen ödevin yok, harika! 🎉", btn: [["📅 Ders Programım", "program"]] };
    }
    if (ICERDE(q, "yarın", "bugün", "ders programı", "derslerim", "hangi ders")) {
      if (!pr.tablo) return { html: "Ders programını henüz girmedin. Girersen hangi gün hangi derslerin olduğunu söyleyebilirim.", btn: [["📅 Programı gir", "program"]] };
      const t = new Date(); if (ICERDE(q, "yarın")) t.setDate(t.getDate() + 1);
      const g = t.getDay(), d = g >= 1 && g <= 5 ? [...new Set((pr.tablo[g] || []).filter(Boolean))] : [];
      const ad = (k) => { const x = [...(typeof DERSLER !== "undefined" ? DERSLER : [])].find((y) => y.key === k); return x ? x.ad : ({ beden: "Beden Eğitimi", muzik: "Müzik", gorsel: "Görsel Sanatlar", bilisim: "Bilişim Teknolojileri", secmeli: "Seçmeli Ders", rehberlik: "Rehberlik" })[k] || k; };
      return { html: d.length ? `${ICERDE(q, "yarın") ? "Yarın" : "Bugün"} derslerin: <b>${d.map(ad).join(", ")}</b>.` : `${ICERDE(q, "yarın") ? "Yarın" : "Bugün"} programında ders yok. 😊`, btn: [["📅 Ders Programım", "program"]] };
    }
    if (ICERDE(q, "kaldık", "kaldığımız", "tekrar edelim", "tekrar yapalım")) {
      const son = Object.entries(pr.son || {}).map(([dk, id]) => [dk, konuBulAd(id), id]).filter((x) => x[1]);
      if (!son.length) return { html: "Derste işlenen konuları <b>📅 Ders Programım</b> bölümünde işaretlersen her dersin kaldığımız yerini hatırlarım.", btn: [["📅 Ders Programım", "program"]] };
      return { html: `Kaldığımız yerler:<br>${son.map(([dk, ad]) => `• <b>${esc(dersAd(dk))}</b>: ${esc(ad)}`).join("<br>")}<br>Hangisini tekrar edelim?`, btn: son.slice(0, 4).map(([dk, ad, id]) => [`🔁 ${dersAd(dk)}`, "test:" + id]) };
    }

    // Hesap
    const h = hesapla(girdi.replace(/kaç(tır|eder)?|eder|sonucu|hesapla/gi, ""));
    if (h) return h.hata ? { html: h.hata } : { html: `<b>${esc(h.ifade)} = ${String(h.sonuc).replace(".", ",")}</b><br><small>İşlem önceliği: önce parantez, sonra çarpma-bölme, en son toplama-çıkarma. Adım adım yapmak için soruda <b>✏️ İşlem Alanı</b>'nı kullanabilirsin.</small>` };

    // İngilizce kelime
    const S = window.SOZLUK || {};
    const trIng = /ingilizce(?:de|si|sinde)?\s+([a-zçğıöşü' ]{2,30}?)\s*(?:ne|nasıl|kelimesi)\b/.exec(q) || /([a-zçğıöşü]{2,30}) ingilizce(?:de|si) (?:ne|nasıl)/.exec(q);
    if (trIng) {
      const tr = trIng[1].trim().replace(/ kelimesi$/, "");
      const bul = Object.entries(S).filter(([, v]) => sade(v).split(/[ ,/]+/).includes(tr)).slice(0, 3);
      if (bul.length) return { html: `"${esc(tr)}" İngilizcede: ${bul.map(([e]) => `<b>${esc(e)}</b>`).join(", ")} 🔤`, ses: bul[0][0] };
    }
    const ing = /^([a-z][a-z' -]{1,30}?)\s*(ne demek|nedir|anlamı|türkçesi|ne anlama gelir)/.exec(kucuk(girdi).trim());
    if (ing) { const w = ing[1].trim(); if (S[w]) return { html: `<b>${esc(w)}</b> = ${esc(S[w])} 🔤`, ses: w }; }
    const tekKelime = kucuk(girdi).trim().replace(/[?.!]/g, "");
    if (/^[a-z][a-z' -]{1,30}$/.test(tekKelime) && S[tekKelime]) return { html: `<b>${esc(tekKelime)}</b> = ${esc(S[tekKelime])} 🔤`, ses: tekKelime };

    // Konu araması
    const b = ara(girdi);
    if (b) {
      const ozet = (b.k.ozet || []).slice(0, 4);
      return {
        html: `📚 <b>${esc(b.D.ad || dersAd(b.dk))} › ${esc(b.k.ad)}</b><br>${b.parca ? esc(b.parca.t) : ""}${ozet.length && (!b.parca || b.parca.tur !== "ozet") ? `<br><br><b>Kısaca:</b><br>${ozet.map((x) => "• " + esc(x)).join("<br>")}` : ""}<br><small>${sec(["Daha iyi anlamak için konu anlatımına bak, sonra birkaç soru çöz.", "Anladıysan hemen 5 soruyla kendini dene!", "Videosu da var, izlemek ister misin?"].filter((x) => b.k.video || !x.includes("Videosu")))}</small>`,
        btn: [["📖 Konuyu aç", "konu:" + b.k.id], ["✏️ 5 soru çöz", "test:" + b.k.id]]
      };
    }

    // Bulunamadı: güvenli kaynaklar
    const aranan = encodeURIComponent(girdi.trim().slice(0, 100));
    return {
      html: `Bu sorunun cevabını sitedeki 6. sınıf konularında bulamadım. 🤔<br>Şunları deneyebilirsin:<br>• Sorunu başka kelimelerle yaz (örn. konunun adını kullan).<br>• Güvenli kaynaklarda ara: <a href="https://tr.wikipedia.org/w/index.php?search=${aranan}" target="_blank" rel="noopener">📘 Vikipedi'de ara</a> · <a href="https://www.eba.gov.tr/" target="_blank" rel="noopener">🏫 EBA</a><br>• En iyisi: <b>öğretmenine ya da ailene sor</b>. 🙂`
    };
  }
  function konuBulAd(id) { for (const D of Object.values(ICERIK)) for (const u of D.uniteler) for (const k of u.konular) if (k.id === id) return k.ad; return null; }
  function konuBulK(id) { for (const D of Object.values(ICERIK)) for (const u of D.uniteler) for (const k of u.konular) if (k.id === id) return k; return null; }

  // ---------- Stil ----------
  const st = document.createElement("style");
  st.textContent = `
.ozel-kart.bilge{background:linear-gradient(135deg,#7c3aed,#db2777)}
.sh-kutu{display:flex;flex-direction:column;gap:10px;margin-bottom:96px}
.sh-m{max-width:88%;padding:10px 14px;border-radius:18px;line-height:1.5;font-size:17px;word-wrap:break-word}
.sh-m.ben{align-self:flex-end;background:#2563eb;color:#fff;border-bottom-right-radius:6px}
.sh-m.bilge{align-self:flex-start;background:var(--kart);border:1px solid var(--sinir);border-bottom-left-radius:6px}
.sh-m.bilge a{color:#2563eb}
.sh-btn{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.sh-btn button{font-size:15px;padding:8px 12px}
.sh-giris{position:fixed;left:0;right:0;bottom:0;display:flex;gap:8px;padding:10px max(12px,env(safe-area-inset-left));background:var(--bg);border-top:1px solid var(--sinir);z-index:30}
.sh-giris input{flex:1;font-size:17px;padding:12px 14px;border-radius:14px;border:1px solid var(--sinir);background:var(--kart);color:var(--yazi);min-width:0}
.sh-oneri{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 6px}
.sh-oneri button{font-size:14px;padding:6px 10px;border-radius:999px;border:1px solid var(--sinir);background:var(--kart);color:var(--yazi)}`;
  document.head.appendChild(st);

  // ---------- Ana sayfa kartı ----------
  window.ANA_KARTLAR = window.ANA_KARTLAR || [];
  window.ANA_KARTLAR.splice(1, 0, (kutu) => {
    const b = document.createElement("button");
    b.className = "ozel-kart bilge";
    b.innerHTML = `<span class="ikon">🦉</span><span><b>Bilge'ye Sor</b><small>Derslerle ilgili merak ettiğini yaz, Bilge anlatsın</small></span>`;
    b.onclick = () => git(sohbet, "🦉 Bilge'ye Sor");
    kutu.appendChild(b);
  });
  window.BILGE_AC = () => git(sohbet, "🦉 Bilge'ye Sor");

  // ---------- Sohbet ekranı ----------
  function sohbet() {
    if (!mesajlar.length) mesajlar.push({ kim: "bilge", html: `Merhaba! Ben <b>Bilge</b> 🦉 Sana derslerinde yardım ederim.<br>Bir konu sor (<i>"Asal sayı nedir?"</i>), bir İngilizce kelime sor (<i>"apple ne demek?"</i>), bir işlem yaz (<i>"125 ÷ 5"</i>) ya da ödevlerini, yarınki derslerini sor.<br><small>Cevaplarımı sitedeki ders anlatımlarından veriyorum. Yazdıkların hiçbir yere gönderilmez.</small>` });
    ekran.innerHTML = `<div class="sh-kutu" id="shKutu"></div>
      <div class="sh-giris"><input id="shIn" type="text" placeholder="Sorunu yaz…" autocomplete="off" enterkeyhint="send" maxlength="200" aria-label="Sorunu yaz"><button class="btn" id="shGon">Gönder</button></div>`;
    ciz();
    const gonder = (metin) => {
      metin = (metin ?? $("shIn").value).trim(); if (!metin) return;
      $("shIn").value = "";
      mesajlar.push({ kim: "ben", html: esc(metin) });
      const c = cevapla(metin);
      mesajlar.push({ kim: "bilge", html: c.html, btn: c.btn, ses: c.ses });
      if (mesajlar.length > 60) mesajlar.splice(1, 2);
      ciz();
      if (c.ses && window.speechSynthesis) try { const u = new SpeechSynthesisUtterance(c.ses); u.lang = "en-US"; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) { /* ses yok */ }
    };
    $("shGon").onclick = () => gonder();
    $("shIn").onkeydown = (e) => { if (e.key === "Enter") gonder(); };
    function ciz() {
      const kutu = $("shKutu"); if (!kutu) return;
      kutu.innerHTML = mesajlar.map((m, i) => `<div class="sh-m ${m.kim}">${m.html}${m.btn ? `<div class="sh-btn">${m.btn.map(([a, eylem]) => `<button class="btn2" data-e="${esc(eylem)}">${esc(a)}</button>`).join("")}</div>` : ""}</div>`).join("") +
        (mesajlar.length <= 1 ? `<div class="sh-oneri">${["Deyim nedir?", "Asal sayı nedir?", "Güneş tutulması nasıl olur?", "apple ne demek?", "Yarın hangi derslerim var?", "Ödevlerim neler?", "12 × 15 kaç?"].map((x) => `<button data-s="${esc(x)}">${esc(x)}</button>`).join("")}</div>` : "");
      kutu.querySelectorAll("[data-s]").forEach((b) => (b.onclick = () => gonder(b.dataset.s)));
      kutu.querySelectorAll("[data-e]").forEach((b) => (b.onclick = () => {
        const e = b.dataset.e;
        if (e === "program") return window.PROGRAM_AC ? window.PROGRAM_AC() : alert("Ders programı bu sınıfta yok.");
        const [tur, id] = e.split(":"), k = konuBulK(id); if (!k) return;
        if (tur === "konu") git(() => konuSayfa(k), k.ad);
        else git(() => test(() => soruHazirla(k, 5), "Tekrar: " + k.ad, false, k.id), "✏️ " + k.ad);
      }));
      window.scrollTo(0, document.body.scrollHeight);
    }
    setTimeout(() => { const i = $("shIn"); if (i && matchMedia("(pointer:fine)").matches) i.focus(); }, 50);
  }

  window.BILGE_TEST = { cevapla, hesapla, ara };
  if (window.ANA_YENILE) window.ANA_YENILE();
})();
