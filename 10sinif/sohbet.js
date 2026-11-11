// 🦉 Bilge'ye Sor (5–12. sınıflar): ücretsiz, internete veri göndermeyen sohbet öğretmeni.
// ANA KOPYA kökteki sohbet.js'dir; 5, 7–12 klasörlerine aynen kopyalanır (eylul-bilge kökü kullanır).
// Cevapları sitedeki konu anlatımlarından, özet notlardan, İngilizce sözlükten, öğrencinin ders programından (program.js)
// ve öğrencinin kendi ustalık puanlarından (ustalik.js → kayit.ustalik) ve yanlışlarından (kayit.yanlislar) üretir.
// Basit işlemleri hesaplar. Cevap bulamazsa güvenli kaynaklarda arama bağlantısı ve "öğretmenine sor" önerisi verir.
// Yazılanlar hiçbir yere gönderilmez ve kaydedilmez (yalnızca ekranda, sayfa kapanınca silinir).
(function () {
  if (typeof kayit === "undefined" || !window.ICERIK) return;
  const mesajlar = []; // { kim: "ben"|"bilge", html }
  const P = () => kayit.program || {};
  const SN = (() => { const m = /(\d+)sinif\/[^/]*$/.exec(location.pathname); return m ? +m[1] : 6; })();

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
  const dersAd = (dk) => window.PROGRAM_DERS_AD ? window.PROGRAM_DERS_AD(dk) : dersAd0(dk);
  const dersAd0 = (dk) => { const d = (typeof DERSLER !== "undefined" ? DERSLER : []).find((x) => x.key === dk); return d ? d.ad : dk; };

  // Düşündüren Bilge: işlemin cevabını hemen söylemez; önce çocuğun denemesini ister, sonra ipucu, en son çözüm.
  let bekleyen = null;
  const sayiStr = (v) => String(Math.round(v * 1e6) / 1e6).replace(".", ",");
  function ipucuUret(ifade) {
    const m = /^\s*(-?\d+(?:[.,]\d+)?)\s*([+\-−×x*÷:/])\s*(-?\d+(?:[.,]\d+)?)\s*$/i.exec(ifade);
    if (!m) return "İşlem önceliğini hatırla: önce parantez, sonra üslü sayılar, sonra çarpma-bölme (soldan sağa), en son toplama-çıkarma. İşlemleri tek tek yaz.";
    const a = parseFloat(m[1].replace(",", ".")), o = m[2], b = parseFloat(m[3].replace(",", "."));
    if (/[×x*]/i.test(o)) { if (Number.isInteger(b) && b >= 10) { const on = Math.floor(b / 10) * 10, bir = b - on; return `Parçala: ${a} × ${b} = ${a} × ${on}${bir ? ` + ${a} × ${bir}` : ""}. Önce ${a} × ${on} kaç, onu bul.`; } return `${a} tane ${b}'i art arda topla ya da çarpım tablosunu hatırla. ${a} × ${b - 1} kaç? Üstüne bir ${a} daha ekle.`; }
    if (/[÷:/]/.test(o)) return `${a} içinde kaç tane ${b} var? Şöyle düşün: ${b} × ? = ${a}. Çarpım tablosunda ${b}'in katlarını say.`;
    if (o === "+") return `Önce onlukları, sonra birlikleri topla. ${Math.floor(a / 10) * 10} + ${Math.floor(b / 10) * 10} kaç? Sonra birlikleri ekle.`;
    return `Önce onlukları çıkar: ${a} − ${Math.floor(b / 10) * 10} kaç? Sonra kalan ${b % 10}'u da çıkar.`;
  }
  function bilgeIslem(girdi, q) {
    if (bekleyen) {
      const sayi = /^\s*[=]?\s*(-?\d+(?:[.,]\d+)?)\s*$/.exec(girdi), b = bekleyen;
      if (/ipucu|yardım|ipuc/.test(q)) { b.deneme = Math.max(b.deneme, 1); return { html: `💡 <b>İpucu:</b> ${esc(ipucuUret(b.ifade))}<br>Şimdi sonucu yaz bakalım: <b>${esc(b.ifade)} = ?</b>`, btn: [["👀 Çözümü göster", "say:çözüm"]] }; }
      if (/çözüm|cevap|göster|bilmiyorum|yapamadım/.test(q)) { bekleyen = null; return { html: `📖 <b>${esc(b.ifade)} = ${sayiStr(b.sonuc)}</b><br>${esc(ipucuUret(b.ifade))}<br>Bir benzerini de sen dene: <b>${esc(benzerSoru(b.ifade))}</b>` }; }
      if (sayi) {
        const v = parseFloat(sayi[1].replace(",", "."));
        if (Math.abs(v - b.sonuc) < 1e-6) { bekleyen = null; return { html: `✅ <b>Doğru!</b> ${esc(b.ifade)} = ${sayiStr(b.sonuc)} 🎉 ${b.deneme ? "İpucuyla buldun, harika!" : "Hiç yardım almadan buldun, süpersin!"}` }; }
        b.deneme++;
        if (b.deneme >= 3) { bekleyen = null; return { html: `Bu sefer olmadı, sorun değil 🌱 Doğrusu: <b>${esc(b.ifade)} = ${sayiStr(b.sonuc)}</b>.<br>${esc(ipucuUret(b.ifade))}` }; }
        return { html: `${b.deneme === 1 ? "Yaklaştın ama tam değil." : "Bir daha bakalım."} 💡 ${esc(ipucuUret(b.ifade))}<br>Tekrar dene: <b>${esc(b.ifade)} = ?</b>`, btn: [["👀 Çözümü göster", "say:çözüm"]] };
      }
      bekleyen = null; // başka bir şey sordu: normal akışa dön
    }
    return null;
  }
  function benzerSoru(ifade) { return ifade.replace(/\d+/g, (d) => { const n = parseInt(d, 10); return String(Math.max(1, n + (Math.random() < 0.5 ? 1 : 2))); }); }

  function cevapla(girdi) {
    const q = sade(girdi);
    const bi = bilgeIslem(girdi, q || ""); if (bi) return bi;
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

    // Öğrencinin kendi verisinden: eksikler, bugünkü çalışma, son yanlış
    if (/neyi bilmiyorum|eksikler|eksiğim|eksik konu|zayıf olduğum|zayıf konu|bilmediğim konu|nerede kötüyüm|hangi konularda kötü/.test(q)) return eksiklerim();
    if (/ne çalış|neyi çalış|bugün ne yap|ne yapsam|nereden başla|plan yap/.test(q)) return bugunCalis();
    if (/yanlış yaptım|yanlışım|neden yanlış|niye yanlış|yanlışımı|hatamı|son yanlış/.test(q)) return sonYanlis();

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
      const ad = (k) => dersAd(k) || ad0(k);
      const ad0 = (k) => { const x = [...(typeof DERSLER !== "undefined" ? DERSLER : [])].find((y) => y.key === k); return x ? x.ad : ({ beden: "Beden Eğitimi", muzik: "Müzik", gorsel: "Görsel Sanatlar", bilisim: "Bilişim Teknolojileri", secmeli: "Seçmeli Ders", rehberlik: "Rehberlik" })[k] || k; };
      return { html: d.length ? `${ICERDE(q, "yarın") ? "Yarın" : "Bugün"} derslerin: <b>${d.map(ad).join(", ")}</b>.` : `${ICERDE(q, "yarın") ? "Yarın" : "Bugün"} programında ders yok. 😊`, btn: [["📅 Ders Programım", "program"]] };
    }
    if (ICERDE(q, "kaldık", "kaldığımız", "tekrar edelim", "tekrar yapalım")) {
      const son = Object.entries(pr.son || {}).map(([dk, id]) => [dk, konuBulAd(id), id]).filter((x) => x[1]);
      if (!son.length) return { html: "Derste işlenen konuları <b>📅 Ders Programım</b> bölümünde işaretlersen her dersin kaldığımız yerini hatırlarım.", btn: [["📅 Ders Programım", "program"]] };
      return { html: `Kaldığımız yerler:<br>${son.map(([dk, ad]) => `• <b>${esc(dersAd(dk))}</b>: ${esc(ad)}`).join("<br>")}<br>Hangisini tekrar edelim?`, btn: son.slice(0, 4).map(([dk, ad, id]) => [`🔁 ${dersAd(dk)}`, "test:" + id]) };
    }

    // Hesap
    const h = hesapla(girdi.replace(/kaç(tır|eder)?|eder|sonucu|hesapla/gi, ""));
    if (h && !h.hata) { h.ifade = h.ifade.replace(/\s+/g, " ").trim(); bekleyen = { ifade: h.ifade, sonuc: h.sonuc, deneme: 0 }; return { html: `🦉 Birlikte çözelim! Önce sen dene: <b>${esc(h.ifade)} = ?</b><br>Sonucu yaz, ben kontrol edeyim.`, btn: [["💡 İpucu", "say:ipucu"], ["👀 Çözümü göster", "say:çözüm"]] }; }
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
      html: `Bu sorunun cevabını sitedeki ${SN}. sınıf konularında bulamadım. 🤔<br>Şunları deneyebilirsin:<br>• Sorunu başka kelimelerle yaz (örn. konunun adını kullan).<br>• Güvenli kaynaklarda ara: <a href="https://tr.wikipedia.org/w/index.php?search=${aranan}" target="_blank" rel="noopener">📘 Vikipedi'de ara</a> · <a href="https://www.eba.gov.tr/" target="_blank" rel="noopener">🏫 EBA</a><br>• En iyisi: <b>öğretmenine ya da ailene sor</b>. 🙂`
    };
  }
  // ---------- Ustalık verisini okuyan cevaplar ----------
  const UST = () => (window.USTALIK && USTALIK.U) || kayit.ustalik || {};
  const GUN = 86400000;
  const dersA = (dk) => (ICERIK[dk] && ICERIK[dk].ad) || dersAd(dk);
  function konuB(id) { for (const [dk, D] of Object.entries(ICERIK)) for (const u of D.uniteler) for (const k of u.konular) if (k.id === id) return { dk, un: u, k }; return null; }
  const calisilan = () => Object.entries(UST()).filter(([id, u]) => u && u.n && konuB(id)).map(([id, u]) => ({ id, u, ...konuB(id) }));
  const satir = (x, ek) => `• <b>${esc(x.k.ad)}</b> <small>(${esc(dersA(x.dk))}${ek ? " · " + ek : ""})</small>`;
  const btn = (x, i = "✏️") => [`${i} ${x.k.ad.length > 22 ? x.k.ad.slice(0, 21) + "…" : x.k.ad}`, "test:" + x.k.id];
  function eksiklerim() {
    const l = calisilan();
    if (!l.length) return { html: `Henüz yeterince soru çözmedin, o yüzden eksiklerini bilemiyorum. 🦉<br>Her dersten birkaç konuda <b>5'er soru</b> çöz; ben de puanlarına bakıp sana neyi bilmediğini söyleyeyim.` };
    const zayif = l.filter((x) => x.u.p < 60).sort((a, b) => a.u.p - b.u.p);
    const unutulan = l.filter((x) => x.u.p >= 60 && x.u.sonraki <= Date.now()).sort((a, b) => a.u.sonraki - b.u.sonraki);
    if (!zayif.length && !unutulan.length) return { html: `Çözdüğün ${l.length} konunun hepsinde iyisin! 🌟 Şimdi yeni bir konuya geçebilirsin. Hangi konuya geçeceğini bilmiyorsan <i>"Bugün ne çalışayım?"</i> diye sor.` };
    const dersSay = {}; zayif.forEach((x) => (dersSay[x.dk] = (dersSay[x.dk] || 0) + 1));
    const enDers = Object.entries(dersSay).sort((a, b) => b[1] - a[1])[0];
    return {
      html: `${zayif.length ? `🔎 Puanına göre <b>henüz oturmamış</b> konuların:<br>${zayif.slice(0, 5).map((x) => satir(x, x.u.p + "/100")).join("<br>")}` : ""}` +
        `${unutulan.length ? `${zayif.length ? "<br><br>" : ""}🧠 Bildiğin ama <b>tekrar zamanı gelen</b> konular (tekrar etmezsen unutulur):<br>${unutulan.slice(0, 3).map((x) => satir(x)).join("<br>")}` : ""}` +
        `${enDers && enDers[1] > 1 ? `<br><br>En çok eksiğin <b>${esc(dersA(enDers[0]))}</b> dersinde.` : ""}<br><small>Önce konu anlatımını oku, sonra 5 soru çöz. Doğru yaptıkça puanın artar. 💪</small>`,
      btn: [...zayif.slice(0, 2), ...unutulan.slice(0, 1)].map((x) => btn(x))
    };
  }
  function bugunCalis() {
    const l = calisilan(), simdi = Date.now(), plan = [];
    const tekrar = l.filter((x) => x.u.sonraki <= simdi).sort((a, b) => a.u.p - b.u.p);
    tekrar.slice(0, 2).forEach((x) => plan.push({ x, neden: x.u.p < 60 ? "eksik, pekiştirelim" : "tekrar zamanı geldi" }));
    l.filter((x) => x.u.p < 60 && !plan.some((y) => y.x.id === x.id)).sort((a, b) => a.u.p - b.u.p).slice(0, 3 - plan.length).forEach((x) => plan.push({ x, neden: "puanın düşük" }));
    if (plan.length < 3) {
      // Yeni konu: önce ders programında kaldığı yer, sonra en az çalışılan derste ilk denenmemiş konu
      const U = UST(), son = Object.values(P().son || {});
      const sira = [];
      son.forEach((id) => { const b = konuB(id); if (b) { const i = b.un.konular.findIndex((k) => k.id === id); sira.push(...b.un.konular.slice(i).map((k) => ({ dk: b.dk, un: b.un, k }))); } });
      const dersN = (dk) => calisilan().filter((x) => x.dk === dk).length;
      Object.keys(ICERIK).sort((a, b) => dersN(a) - dersN(b)).forEach((dk) => { for (const u of ICERIK[dk].uniteler) for (const k of u.konular) sira.push({ dk, un: u, k }); });
      for (const x of sira) { if (plan.length >= 3) break; if ((U[x.k.id] && U[x.k.id].n) || plan.some((y) => y.x.k.id === x.k.id) || plan.some((y) => y.x.dk === x.dk && y.neden === "yeni konu")) continue; plan.push({ x, neden: "yeni konu" }); }
    }
    if (!plan.length) return { html: "Bugün için her şey yolunda! 🎉 İstediğin bir konudan soru çözebilirsin." };
    return {
      html: `📋 <b>Bugünkü çalışma planın</b> (yaklaşık ${plan.length * 10} dakika):<br>${plan.map((p, i) => `${i + 1}. <b>${esc(p.x.k.ad)}</b> <small>(${esc(dersA(p.x.dk))} · ${p.neden})</small>`).join("<br>")}<br><small>Her konuda önce kısa anlatımı oku, sonra 5 soru çöz. Bitirince bir sonrakine geç. Ara vermeyi unutma! 🦉</small>`,
      btn: plan.map((p) => btn(p.x, p.neden === "yeni konu" ? "📖" : "✏️")).map((b, i) => (plan[i].neden === "yeni konu" ? [b[0], "konu:" + plan[i].x.k.id] : b))
    };
  }
  function sonYanlis() {
    const y = (kayit.yanlislar || []).filter((z) => z && z.soru && z.secenekler).slice(-1)[0];
    if (!y) return { html: "Kayıtlı bir yanlışın yok! 🎉 Bir test çözüp yanlış yaparsan bana <i>\"Bu soruyu neden yanlış yaptım?\"</i> diye sorabilirsin; sana açıklarım." };
    const b = konuB(y.konuId), ayni = (kayit.yanlislar || []).filter((z) => z.konuId === y.konuId).length;
    // Soruyla en çok örtüşen özet satırı (cevap + çözüm kelimeleri iki kat sayılır); örtüşme yoksa gösterilmez
    const qk = new Set(kelimeler(y.soru).map(kok)), ck = new Set(kelimeler(`${y.secenekler[y.dogru]} ${y.cozum || ""}`).map(kok));
    let ozet = null, enO = 0;
    if (b) for (const t of b.k.ozet || []) { let o = 0; for (const w of new Set(kelimeler(t).map(kok))) o += (ck.has(w) ? 2 : 0) + (qk.has(w) ? 1 : 0); if (o > enO) { enO = o; ozet = t; } }
    if (enO < 2) ozet = null;
    return {
      html: `Son yanlış yaptığın soru 👇<br><i>${esc(y.soru.length > 160 ? y.soru.slice(0, 159) + "…" : y.soru)}</i><br>✅ Doğru cevap: <b>${esc(y.secenekler[y.dogru])}</b>` +
        `${y.cozum ? `<br>💡 <b>Neden?</b> ${esc(y.cozum)}` : ""}` +
        `${ozet ? `<br><br>📌 Bu konunun anahtar bilgisi: ${esc(ozet)}` : ""}` +
        `${ayni > 1 ? `<br><br>Bu konuda <b>${ayni}</b> yanlışın birikmiş. Konuyu bir kez daha okuyup yanlışlarını tekrar çözmek iyi gelir.` : ""}` +
        `<br><small>Yanlış yapmak öğrenmenin parçasıdır. Şimdi benzer sorularla dene! 🌱</small>`,
      btn: b ? [["📖 Konuyu aç", "konu:" + b.k.id], ["✏️ Benzer 5 soru", "test:" + b.k.id]] : []
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
  // Öneri soruları: 6. sınıfta el ile seçilmiş; diğer sınıflarda içerikten (her dersin ilk konusu)
  const ornekler = () => SN === 6 ? ["Deyim nedir?", "Asal sayı nedir?", "Güneş tutulması nasıl olur?", "apple ne demek?"]
    : Object.values(ICERIK).slice(0, 3).map((D) => ((D.uniteler[0] || {}).konular || [])[0]).filter(Boolean).map((k) => `${k.ad.replace(/\s*\(.*\)$/, "")} nedir?`);
  function sohbet() {
    const ornek = ornekler();
    if (!mesajlar.length) mesajlar.push({ kim: "bilge", html: `Merhaba! Ben <b>Bilge</b> 🦉 Sana derslerinde yardım ederim.<br>Bir konu sor (<i>"${esc(ornek[0])}"</i>), bir işlem yaz (<i>"125 ÷ 5"</i>), <i>"Neyi bilmiyorum?"</i> ya da <i>"Bugün ne çalışayım?"</i> diye sor; ödevlerini, yarınki derslerini de sorabilirsin.<br><small>Cevaplarımı sitedeki ders anlatımlarından veriyorum. Yazdıkların hiçbir yere gönderilmez.</small>` });
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
        (mesajlar.length <= 1 ? `<div class="sh-oneri">${["Neyi bilmiyorum?", "Bugün ne çalışayım?", "Bu soruyu neden yanlış yaptım?", ...ornek, "Yarın hangi derslerim var?", "12 × 15 kaç?"].map((x) => `<button data-s="${esc(x)}">${esc(x)}</button>`).join("")}</div>` : "");
      kutu.querySelectorAll("[data-s]").forEach((b) => (b.onclick = () => gonder(b.dataset.s)));
      kutu.querySelectorAll("[data-e]").forEach((b) => (b.onclick = () => {
        const e = b.dataset.e;
        if (e.startsWith("say:")) return gonder(e.slice(4));
        if (e === "program") return window.PROGRAM_AC ? window.PROGRAM_AC() : alert("Ders programı bu sınıfta yok.");
        const [tur, id] = e.split(":"), k = konuBulK(id); if (!k) return;
        if (tur === "konu") git(() => konuSayfa(k), k.ad);
        else git(() => test(() => soruHazirla(k, 5), "Tekrar: " + k.ad, false, k.id), "✏️ " + k.ad);
      }));
      window.scrollTo(0, document.body.scrollHeight);
    }
    setTimeout(() => { const i = $("shIn"); if (i && matchMedia("(pointer:fine)").matches) i.focus(); }, 50);
  }

  window.BILGE_TEST = { cevapla, hesapla, ara, eksiklerim, bugunCalis, sonYanlis };
  if (window.ANA_YENILE) window.ANA_YENILE();
})();
