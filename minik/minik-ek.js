// Okul öncesi ekleri: günlük süre ve hareket molası, veli ayarları (tablet sesi kullanılır)
(function () {
  const ANAHTAR = (window.SINIF && window.SINIF.anahtar) || "minik";
  const $ = (h) => { const d = document.createElement("div"); d.innerHTML = h.trim(); return d.firstElementChild; };
  const esc = OYUN.esc;
  const temiz = (m) => String(m || "").replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, " ").replace(/\s+/g, " ").trim() || String(m || "");
  const ls = { al: (k, v) => { try { return JSON.parse(localStorage.getItem(k)) ?? v; } catch (e) { return v; } }, yaz: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };

  // ---------- Eski "aile sesi" kayıtlarını temizle (özellik kaldırıldı) ----------
  try { indexedDB.deleteDatabase("minik-ses"); } catch (e) {}
  try { localStorage.removeItem("minik-duyulan"); } catch (e) {}

  // ---------- APP.konus: emojileri atıp tablet sesiyle oku ----------
  const eskiKonus = APP.konus;
  APP.konus = (m, sonra, zorla) => eskiKonus(temiz(m), sonra, zorla);

  // ---------- Günlük süre ve hareket molası ----------
  const AYAR = "minik-ayar";
  const ayar = () => Object.assign({ dakika: 15, mola: true }, ls.al(AYAR, {}));
  const bugun = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const SURE = "minik-sure";
  setInterval(() => {
    if (document.visibilityState !== "visible") return;
    const s = ls.al(SURE, {}), t = bugun();
    s[t] = (s[t] || 0) + 0.25; ls.yaz(SURE, s);
    const a = ayar();
    if (a.mola && s[t] >= a.dakika && !ls.al("minik-mola-" + t, false)) { ls.yaz("minik-mola-" + t, true); molaGoster(); }
  }, 15000);
  const MOLA = [["🤸", "5 kere zıpla"], ["🦩", "Tek ayağının üstünde 10'a kadar say"], ["🙆", "Kollarını açıp kuş gibi uç"], ["🐸", "Kurbağa gibi 3 kere sıçra"], ["🌬️", "Derin nefes al, yavaşça ver"]];
  function molaGoster() {
    const [e, h] = MOLA[Math.floor(Math.random() * MOLA.length)];
    const o = $(`<div class="geri-bildirim iyi" style="z-index:99"><div class="ic"><div style="font-size:90px">${e}</div><div class="metin"><b>Mola zamanı!</b>Bugün çok güzel çalıştın. Şimdi ekranı bırak: ${esc(h)}. Sonra ailene bugün ne öğrendiğini anlat. 🥰</div><button>Tamam</button></div></div>`);
    document.body.appendChild(o);
    APP.konus(`Mola zamanı! Bugün çok güzel çalıştın. Şimdi ekranı bırak. ${h}. Sonra ailene bugün ne öğrendiğini anlat.`, null, true);
    o.querySelector("button").onclick = () => { APP.sesDur(); o.remove(); };
  }

  // ---------- Veli Köşesi ekleri ----------
  window.veliEk = (ekran, ctx) => {
    const K = ctx.K, a = ayar();
    const s = ls.al(SURE, {}), son7 = []; for (let i = 6; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); const t = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); son7.push([d.getDate(), Math.round(s[t] || 0)]); }
    const p = $(`<div class="panel"><h3>👶 Okul öncesi ayarları</h3>
      <div style="font-size:19px;margin:6px 0">Yaş seviyesi:</div>
      <div class="satir"><button class="buyukbtn ${K.yas === 4 ? "" : "ikincil"}" style="font-size:20px">4 yaş</button><button class="buyukbtn ${K.yas !== 4 ? "" : "ikincil"}" style="font-size:20px">5 yaş</button></div>
      <div style="font-size:19px;margin:10px 0 6px">Günlük ekran süresi (sonunda hareket molası):</div>
      <div class="satir">${[10, 15, 20, 30].map((d) => `<button class="buyukbtn ${a.dakika === d ? "" : "ikincil"}" data-d="${d}" style="font-size:19px">${d} dk</button>`).join("")}</div>
      <button class="buyukbtn ikincil" data-mola style="font-size:19px">${a.mola ? "🤸 Hareket molası: AÇIK" : "🤸 Hareket molası: KAPALI"}</button>
      <div class="not">Son 7 gün (dakika): ${son7.map(([g, d]) => `${g}. gün <b>${d}</b>`).join(" · ")}<br>Dünya Sağlık Örgütü 3-4 yaş için günde en fazla 1 saat ekran ve en az 3 saat hareketli oyun öneriyor.</div></div>`);
    const yb = p.querySelectorAll(".satir")[0].querySelectorAll("button");
    yb.forEach((b, i) => b.onclick = () => { K.yas = 4 + i; window.YAS = K.yas; ctx.kaydet(); yb.forEach((x, j) => x.classList.toggle("ikincil", j !== i)); });
    p.querySelectorAll("[data-d]").forEach((b) => b.onclick = () => { const y = ayar(); y.dakika = +b.dataset.d; ls.yaz(AYAR, y); p.querySelectorAll("[data-d]").forEach((x) => x.classList.toggle("ikincil", x !== b)); });
    const mb = p.querySelector("[data-mola]"); mb.onclick = () => { const y = ayar(); y.mola = !y.mola; ls.yaz(AYAR, y); mb.textContent = y.mola ? "🤸 Hareket molası: AÇIK" : "🤸 Hareket molası: KAPALI"; };
    ekran.appendChild(p);
  };
})();
