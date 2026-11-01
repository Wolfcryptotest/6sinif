// Ortak ses modülü (1-3-4-5-6-7. sınıf): en doğal sesi seçer, hız ve ses tercihini saklar.
// Kullanım: SES.baslat("5sinif", 1) · SES.konus("Merhaba", "tr", { hiz: 0.95, sonra, basla }) · SES.ayarHTML() + SES.ayarBagla(kok)
(function () {
  const ss = window.speechSynthesis;
  let anahtar = "ses-ayar", ayar = { hiz: 1, tr: "", en: "" };
  const oku = () => { try { Object.assign(ayar, JSON.parse(localStorage.getItem(anahtar) || "{}")); } catch (e) {} };
  const kaydet = () => { try { localStorage.setItem(anahtar, JSON.stringify(ayar)); } catch (e) {} };

  // Ses kalitesi puanı: doğal/neural/gelişmiş sesler öne çıkar
  function puan(v, dil) {
    let p = 0; const n = v.name || "";
    if (/natural|neural|wavenet|premium|enhanced|gelişmiş|geliştirilmiş|siri/i.test(n)) p += 60;
    if (/google/i.test(n)) p += 35;
    if (/microsoft/i.test(n) && /online/i.test(n)) p += 40;
    if (/yelda|cem|emel|filiz|seda/i.test(n) && dil === "tr") p += 20;
    if (/samantha|ava|allison|aaron|daniel|serena|karen|moira|tessa|aria|jenny|guy/i.test(n) && dil === "en") p += 20;
    if (dil === "en" && /en[-_]US/i.test(v.lang)) p += 8;
    if (dil === "en" && /en[-_]GB/i.test(v.lang)) p += 6;
    if (/compact|eloquence|espeak|novelty|bad news|bells|whisper|zarvox|trinoids|bubbles|albert|jester|superstar|organ|boing|cellos|wobble/i.test(n)) p -= 80;
    return p;
  }
  function sesler(dil) {
    if (!ss) return [];
    const re = dil === "tr" ? /^tr([-_]|$)/i : /^en([-_]|$)/i;
    return ss.getVoices().filter((v) => re.test(v.lang)).sort((a, b) => puan(b, dil) - puan(a, dil));
  }
  function sesSec(dil) {
    const l = sesler(dil); if (!l.length) return null;
    const secili = ayar[dil] && l.find((v) => v.name === ayar[dil]);
    return secili || l[0];
  }
  if (ss) { ss.getVoices(); try { ss.addEventListener("voiceschanged", () => { const k = document.querySelector("[data-ses-ayar]"); if (k) bagla(k); }); } catch (e) {} }

  function konus(metin, dil = "tr", o = {}) {
    if (!ss || !window.SpeechSynthesisUtterance) { if (o.sonra) o.sonra(); return; }
    const u = new SpeechSynthesisUtterance(String(metin).replace(/[🔊⭐🎉➜✔📖✏️🎯]/gu, ""));
    u.lang = dil === "tr" ? "tr-TR" : "en-US";
    const v = sesSec(dil); if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = Math.max(0.5, Math.min(1.6, (o.hiz || 1) * (ayar.hiz || 1)));
    if (o.basla) u.onstart = o.basla;
    u.onend = () => { if (o.sonra) o.sonra(); };
    u.onerror = () => { if (o.sonra) o.sonra(); };
    if (!o.ekle) ss.cancel();
    ss.speak(u);
    return u;
  }

  const HIZLAR = [[0.75, "🐢 Yavaş"], [0.9, "Biraz yavaş"], [1, "Normal"], [1.15, "🐇 Hızlı"]];
  function ayarHTML() {
    return `<div class="ses-ayar" data-ses-ayar style="display:grid;gap:12px">
      <div><b>Konuşma hızı</b><div class="ses-hiz" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px">${HIZLAR.map(([h, ad]) => `<button type="button" data-hiz="${h}" style="padding:10px 14px;border-radius:12px;border:2px solid #c9cfe0;background:#fff;color:#1d2433;font-size:16px;cursor:pointer">${ad}</button>`).join("")}</div></div>
      <label><b>Türkçe ses</b><br><select data-dil="tr" style="width:100%;font-size:16px;padding:8px;border-radius:10px;margin-top:4px"></select></label>
      <label><b>İngilizce ses</b><br><select data-dil="en" style="width:100%;font-size:16px;padding:8px;border-radius:10px;margin-top:4px"></select></label>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" data-dene="tr" style="padding:10px 14px;border-radius:12px;border:0;background:#4f7cff;color:#fff;font-size:16px;cursor:pointer">▶ Türkçe dene</button><button type="button" data-dene="en" style="padding:10px 14px;border-radius:12px;border:0;background:#8b5cf6;color:#fff;font-size:16px;cursor:pointer">▶ İngilizce dene</button></div>
      <small style="opacity:.75">Daha doğal ses için tabletin ayarlarından gelişmiş (yüksek kaliteli) Türkçe ve İngilizce sesleri indirebilirsiniz. Listede en üstteki ses en doğal olandır.</small>
    </div>`;
  }
  function bagla(kok) {
    const el = kok.matches && kok.matches("[data-ses-ayar]") ? kok : kok.querySelector("[data-ses-ayar]");
    if (!el) return;
    el.querySelectorAll("[data-hiz]").forEach((b) => {
      const sec = Math.abs(+b.dataset.hiz - (ayar.hiz || 1)) < 0.01;
      b.style.background = sec ? "#4f7cff" : "#fff"; b.style.color = sec ? "#fff" : "#1d2433"; b.style.borderColor = sec ? "#4f7cff" : "#c9cfe0";
      b.onclick = () => { ayar.hiz = +b.dataset.hiz; kaydet(); bagla(el); konus("Bu hızla okuyacağım.", "tr"); };
    });
    el.querySelectorAll("select[data-dil]").forEach((s) => {
      const dil = s.dataset.dil, l = sesler(dil), secili = sesSec(dil);
      s.innerHTML = l.length ? l.map((v, i) => `<option value="${v.name.replace(/"/g, "&quot;")}" ${secili && v.name === secili.name ? "selected" : ""}>${i === 0 ? "⭐ " : ""}${v.name} (${v.lang})</option>`).join("") : `<option>Bu cihazda ${dil === "tr" ? "Türkçe" : "İngilizce"} ses bulunamadı</option>`;
      s.onchange = () => { ayar[dil] = s.value; kaydet(); konus(dil === "tr" ? "Merhaba, ben yeni sesim." : "Hello, this is my new voice.", dil); };
    });
    el.querySelectorAll("[data-dene]").forEach((b) => { b.onclick = () => konus(b.dataset.dene === "tr" ? "Merhaba! Bugün birlikte çok güzel şeyler öğreneceğiz." : "Hello! Let's learn some new words today.", b.dataset.dene); });
  }

  // Kaliteli ses yoksa bir kez gösterilen kurulum rehberi
  const cihaz = () => /android/i.test(navigator.userAgent) ? "android" : (/ipad|iphone|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) ? "ios" : "diger";
  // Android'de ses adları kaliteyi göstermez; Google TTS'nin Türkçe sesi yüklüyse yeterince doğaldır
  const kaliteli = (dil) => { const v = sesSec(dil); if (!v) return false; if (cihaz() === "android") return true; return puan(v, dil) >= 30; };
  function rehberHTML() {
    const c = cihaz();
    const adim = c === "android"
      ? `<ol style="margin:8px 0 8px 20px;padding:0;line-height:1.6"><li>Aşağıdaki <b>Ses ayarlarını aç</b> düğmesine dokunun (açılmazsa: <b>Ayarlar → Erişilebilirlik → Metin okuma çıkışı</b>).</li><li><b>Tercih edilen motor: Google</b> olsun; yanındaki ⚙️ simgesine dokunun.</li><li><b>Ses verilerini yükle → Türkçe</b>'yi indirin (İngilizce de indirebilirsiniz).</li><li>Uygulamaya dönün; en iyi ses kendiliğinden seçilir.</li></ol>`
      : c === "ios"
      ? `<ol style="margin:8px 0 8px 20px;padding:0;line-height:1.6"><li><b>Ayarlar → Erişilebilirlik → Seslendirilen İçerik → Sesler</b>'e gidin.</li><li><b>Türkçe → Yelda (Gelişmiş)</b> sesini indirin.</li><li>İngilizce için <b>Samantha (Gelişmiş)</b> ya da <b>Ava (Premium)</b> sesini indirin.</li><li>Uygulamayı kapatıp yeniden açın; en iyi ses kendiliğinden seçilir.</li></ol>`
      : `<p style="margin:8px 0">Bilgisayarda Microsoft Edge tarayıcısı çok doğal ("Natural") sesler sunar. Chrome'da "Google Türkçe" sesi otomatik seçilir.</p>`;
    return `<div class="ses-rehber" style="background:#fff6d1;border:2px solid #efd57a;border-radius:16px;padding:14px 16px;margin:12px 0;color:#1d2433">
      <b>🔊 Daha doğal bir ses ister misiniz?</b>
      <p style="margin:6px 0">Bu tablette şu an basit (robotik) bir ses var. Bir kez ücretsiz kaliteli ses indirirseniz konular ve hikâyeler insan sesine çok daha yakın okunur.</p>
      ${adim}
      <div style="display:flex;gap:8px;flex-wrap:wrap">${c === "android" ? `<a href="intent:#Intent;action=com.android.settings.TTS_SETTINGS;end" style="padding:10px 14px;border-radius:12px;background:#22a06b;color:#fff;text-decoration:none;font-weight:600">⚙️ Ses ayarlarını aç</a>` : ""}<button type="button" data-rehber-kapat style="padding:10px 14px;border-radius:12px;border:0;background:#e4e7ec;color:#1d2433;font-size:15px;cursor:pointer">Tamam, bir daha gösterme</button></div>
    </div>`;
  }
  // kap: rehberin ekleneceği eleman. Kaliteli ses varsa ya da kapatıldıysa hiçbir şey yapmaz.
  function rehberGoster(kap) {
    if (!kap || !ss) return;
    let kapali = false; try { kapali = localStorage.getItem("ses-rehber-kapali") === "1"; } catch (e) {}
    const dene = () => {
      if (kapali || kap.querySelector(".ses-rehber")) return;
      if (!ss.getVoices().length) return; // sesler henüz yüklenmedi
      if (kaliteli("tr")) return;
      kap.insertAdjacentHTML("afterbegin", rehberHTML());
      const b = kap.querySelector("[data-rehber-kapat]");
      if (b) b.onclick = () => { try { localStorage.setItem("ses-rehber-kapali", "1"); } catch (e) {} kap.querySelector(".ses-rehber").remove(); };
    };
    dene(); setTimeout(dene, 1500);
  }

  window.SES = {
    rehberGoster, kaliteli, cihaz,
    baslat(a, varsayilanHiz) { anahtar = "ses-ayar-" + a; ayar = { hiz: varsayilanHiz || 1, tr: "", en: "" }; oku(); },
    konus, sesler, sesSec, ayarHTML, ayarBagla: bagla, dur: () => { try { ss && ss.cancel(); } catch (e) {} },
    get ayar() { return ayar; }
  };
  oku();
})();
