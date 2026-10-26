// Mini oyun motoru: her görev tipini çizer, cevabı denetler, geri bildirim verir
window.OYUN = (function () {
  const $ = (h) => { const d = document.createElement("div"); d.innerHTML = h.trim(); return d.firstElementChild; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const karistir = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const OVGU = ["Harika!", "Süpersin!", "Aferin!", "Çok güzel!", "Bravo!", "Muhteşem!", "Tam isabet!", "Doğru bildin!"];
  const TESELLI = ["Olsun, öğreniyoruz!", "Bir dahakine olacak!", "Hata yapmak öğrenmektir!", "Az kaldı!"];
  const BALON_RENK = ["#ef476f", "#3d8bff", "#2bb673", "#ff8a00", "#9b5de5", "#00b4d8"];

  // ---------- Görseller ----------
  function saatSVG(h, m, boy) {
    boy = boy || 220;
    let s = `<svg viewBox="0 0 200 200" width="${boy}" height="${boy}"><circle cx="100" cy="100" r="94" fill="#fff" stroke="#3d8bff" stroke-width="8"/>`;
    for (let i = 1; i <= 12; i++) {
      const a = (i * 30 - 90) * Math.PI / 180;
      s += `<text x="${100 + 72 * Math.cos(a)}" y="${100 + 72 * Math.sin(a) + 8}" font-size="22" font-weight="800" text-anchor="middle" fill="#2b2140">${i}</text>`;
    }
    for (let i = 0; i < 60; i++) {
      const a = (i * 6 - 90) * Math.PI / 180, r1 = i % 5 ? 86 : 82;
      s += `<line x1="${100 + r1 * Math.cos(a)}" y1="${100 + r1 * Math.sin(a)}" x2="${100 + 90 * Math.cos(a)}" y2="${100 + 90 * Math.sin(a)}" stroke="#7a6f8f" stroke-width="${i % 5 ? 1 : 3}"/>`;
    }
    const ha = ((h % 12) * 30 + m * 0.5 - 90) * Math.PI / 180, ma = (m * 6 - 90) * Math.PI / 180;
    s += `<line x1="100" y1="100" x2="${100 + 46 * Math.cos(ha)}" y2="${100 + 46 * Math.sin(ha)}" stroke="#ef476f" stroke-width="9" stroke-linecap="round"/>`;
    s += `<line x1="100" y1="100" x2="${100 + 70 * Math.cos(ma)}" y2="${100 + 70 * Math.sin(ma)}" stroke="#2b2140" stroke-width="5" stroke-linecap="round"/>`;
    return s + `<circle cx="100" cy="100" r="7" fill="#2b2140"/></svg>`;
  }
  // n eş parçalı daire; boyali: boyanmış parça sayısı veya dizi
  function kesirSVG(n, boyali, boy, tiklanir) {
    boy = boy || 180;
    const dolu = Array.isArray(boyali) ? boyali : Array.from({ length: n }, (_, i) => i < boyali);
    let s = `<svg viewBox="0 0 200 200" width="${boy}" height="${boy}">`;
    if (n === 1) s += `<circle cx="100" cy="100" r="90" data-i="0" fill="${dolu[0] ? "#ff8a00" : "#fff"}" stroke="#2b2140" stroke-width="4"/>`;
    else for (let i = 0; i < n; i++) {
      const a1 = (i / n) * 2 * Math.PI - Math.PI / 2, a2 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
      const x1 = 100 + 90 * Math.cos(a1), y1 = 100 + 90 * Math.sin(a1), x2 = 100 + 90 * Math.cos(a2), y2 = 100 + 90 * Math.sin(a2);
      s += `<path data-i="${i}" d="M100 100 L${x1} ${y1} A90 90 0 ${n === 2 ? 0 : 0} 1 ${x2} ${y2} Z" fill="${dolu[i] ? "#ff8a00" : "#fff"}" stroke="#2b2140" stroke-width="4" ${tiklanir ? 'style="cursor:pointer"' : ""}/>`;
    }
    return s + "</svg>";
  }
  // Sütun grafiği: veri [[etiket, değer]], birim
  function grafikHTML(veri, baslik) {
    const max = Math.max(...veri.map((v) => v[1]), 1), adim = max <= 10 ? 1 : max <= 20 ? 2 : 5;
    const tepe = Math.ceil(max / adim) * adim;
    let h = `<div style="background:#fff;border:3px solid var(--sinir);border-radius:20px;padding:12px 14px;width:100%;max-width:520px;font-size:16px">`;
    if (baslik) h += `<div style="font-weight:800;text-align:center;margin-bottom:6px">${esc(baslik)}</div>`;
    h += `<div style="display:flex;gap:8px;align-items:flex-end;height:190px;border-left:3px solid #2b2140;border-bottom:3px solid #2b2140;padding:0 6px;position:relative">`;
    for (let y = adim; y <= tepe; y += adim) h += `<div style="position:absolute;left:-30px;bottom:${(y / tepe) * 180 - 9}px;width:26px;text-align:right;font-size:13px;color:#7a6f8f">${y}</div><div style="position:absolute;left:0;right:0;bottom:${(y / tepe) * 180}px;border-top:1px dashed #e6dcc5"></div>`;
    veri.forEach((v, i) => h += `<div style="flex:1;height:${(v[1] / tepe) * 180}px;background:${BALON_RENK[i % 6]};border-radius:8px 8px 0 0;position:relative;z-index:1"></div>`);
    h += `</div><div style="display:flex;gap:8px;padding:4px 6px 0 6px">${veri.map((v) => `<div style="flex:1;text-align:center;font-weight:700;font-size:15px">${esc(v[0])}</div>`).join("")}</div></div>`;
    return h;
  }
  // Şekil grafiği (resim grafiği): her sembol 1 (ya da birim) değerinde
  function resimGrafikHTML(veri, sembol, birim, baslik) {
    let h = `<div style="background:#fff;border:3px solid var(--sinir);border-radius:20px;padding:12px 14px;width:100%;max-width:560px;font-size:18px">`;
    if (baslik) h += `<div style="font-weight:800;text-align:center;margin-bottom:6px">${esc(baslik)}</div>`;
    veri.forEach((v) => h += `<div style="display:flex;gap:10px;align-items:center;border-bottom:1px dashed #e6dcc5;padding:4px 0"><b style="width:110px;font-size:17px">${esc(v[0])}</b><span style="font-size:28px;letter-spacing:2px">${sembol.repeat(v[1] / (birim || 1))}</span></div>`);
    if (birim && birim > 1) h += `<div style="margin-top:6px;font-size:16px">${sembol} = ${birim}</div>`;
    return h + "</div>";
  }

  // ---------- Tur ----------
  function tur(ayar) {
    const ekran = document.getElementById("ekran");
    const gorevler = ayar.gorevler, renk = ayar.renk || "var(--ana)";
    let i = 0, dogru = 0; const yanlislar = [], durum = [];

    function ust() {
      return `<div class="ust-bar">${gorevler.map((_, k) => `<i class="${durum[k] === true ? "d" : durum[k] === false ? "y" : k === i ? "s" : ""}"></i>`).join("")}</div>`;
    }
    function goster() {
      APP.sesDur();
      if (i >= gorevler.length) return ayar.bitti({ dogru, toplam: gorevler.length, yanlislar });
      const g = gorevler[i];
      ekran.innerHTML = "";
      ekran.style.setProperty("--renk", renk);
      ekran.appendChild($(ust()));
      const m = $(`<div class="maskot"><div class="yuz">🦉</div><div class="balon"><span class="soru-metni"></span> <button class="ses-dugme" title="Dinle">🔊</button></div></div>`);
      m.querySelector(".soru-metni").textContent = g.soru;
      ekran.appendChild(m);
      const oku = (zorla) => { if (g.ses && g.sesOnce) { APP.sesDur(); APP.konusEn(g.ses, zorla); } else { APP.konus(g.soru + (g.tip === "dy" ? ". " + g.ifade : ""), () => { if (g.ses) APP.konusEn(g.ses, zorla); }, zorla); } };
      m.querySelector(".ses-dugme").onclick = () => oku(true);
      const govde = document.createElement("div");
      ekran.appendChild(govde);
      if (g.gorsel) govde.appendChild($(`<div class="gorsel">${g.gorsel}</div>`));
      (CIZ[g.tip] || CIZ.secim)(g, govde, (tamam, dogruMetni) => cevapla(g, tamam, dogruMetni));
      if (APP.sesAcik() || (g.ses && g.sesOnce)) setTimeout(() => oku(g.ses && g.sesOnce), 250);
    }
    function cevapla(g, tamam, dogruMetni) {
      durum[i] = tamam;
      if (tamam) { dogru++; APP.efekt("dogru"); } else { yanlislar.push(g); APP.efekt("yanlis"); }
      ekran.querySelector(".ust-bar").outerHTML = ust();
      const baslik = tamam ? OVGU[Math.floor(Math.random() * OVGU.length)] + " 🎉" : TESELLI[Math.floor(Math.random() * TESELLI.length)];
      let metin = "";
      if (!tamam && dogruMetni) metin += `Doğru cevap: <b style="display:inline;font-size:22px">${esc(dogruMetni)}</b><br>`;
      if (g.cozum) metin += esc(g.cozum);
      const gb = $(`<div class="geri-bildirim ${tamam ? "iyi" : "kotu"}"><div class="ic"><div style="font-size:52px">${tamam ? "🦉" : "🤗"}</div><div class="metin"><b>${baslik}</b>${metin}</div><button>Devam ➜</button></div></div>`);
      document.body.appendChild(gb);
      const enMi = g.cevapSes && /[a-z]/i.test(dogruMetni || "") && !/[çğıöşüÇĞİÖŞÜ]/.test(dogruMetni || "");
      APP.konus(baslik + (!tamam && dogruMetni && !enMi && !g.em ? " Doğru cevap: " + dogruMetni : ""), () => { if (g.cevapSes) APP.konusEn(g.cevapSes); });
      ekran.querySelectorAll("button").forEach((b) => { if (!b.classList.contains("ses-dugme")) b.disabled = true; });
      gb.querySelector("button").onclick = () => { gb.remove(); i++; goster(); window.scrollTo(0, 0); };
    }
    goster();
  }

  // ---------- Görev çizicileri ----------
  const CIZ = {};

  CIZ.secim = (g, el, bitir) => {
    const sira = karistir(g.secenekler.map((s, k) => [s, k]));
    const kisa = !g.em && g.secenekler.every((s) => String(s).length <= 7) && !g.balonYok;
    const balon = kisa && Math.random() < 0.4;
    const kutu = $(`<div class="${balon ? "balonlar" : "secenekler"}"></div>`);
    if (!balon && g.secenekler.some((s) => String(s).length > 22)) kutu.style.gridTemplateColumns = "1fr";
    sira.forEach(([s, k], n) => {
      const b = document.createElement("button");
      b.className = balon ? "blon" : "sec" + (g.em ? " em" : "");
      if (balon) b.style.background = BALON_RENK[(n + Math.floor(Math.random() * 6)) % 6];
      b.textContent = s;
      b.onclick = () => {
        const ok = k === g.dogru;
        if (balon) { if (ok) b.classList.add("patla"); else b.style.opacity = ".4"; }
        else { b.classList.add(ok ? "dogru" : "yanlis"); if (!ok) kutu.children[sira.findIndex((x) => x[1] === g.dogru)].classList.add("dogru"); }
        bitir(ok, g.secenekler[g.dogru]);
      };
      kutu.appendChild(b);
    });
    el.appendChild(kutu);
  };

  CIZ.dy = (g, el, bitir) => {
    el.appendChild($(`<div class="ifade">${esc(g.ifade)}</div>`));
    const k = $(`<div class="dy"><button style="background:var(--yesil)">👍 Doğru</button><button style="background:var(--kirmizi)">👎 Yanlış</button></div>`);
    k.children[0].onclick = () => bitir(g.dogru === true, "Doğru");
    k.children[1].onclick = () => bitir(g.dogru === false, "Yanlış");
    el.appendChild(k);
  };

  CIZ.grupla = (g, el, bitir) => {
    let secili = null, hata = 0, kalan = g.ogeler.length;
    const cip = $(`<div class="cipler"></div>`);
    g.ogeler.forEach(([m, gi]) => {
      const b = document.createElement("button"); b.className = "parca"; b.textContent = m; b.dataset.g = gi;
      b.onclick = () => { if (b.classList.contains("tamam")) return; cip.querySelectorAll(".secili").forEach((x) => x.classList.remove("secili")); b.classList.add("secili"); secili = b; };
      cip.appendChild(b);
    });
    const sep = $(`<div class="sepetler"></div>`);
    g.gruplar.forEach((ad, gi) => {
      const s = $(`<button class="sepet"><b>${esc(ad)}</b><div class="ic"></div></button>`);
      s.onclick = () => {
        if (!secili) { secili = cip.querySelector(".parca:not(.tamam)"); if (!secili) return; secili.classList.add("secili"); return; }
        if (+secili.dataset.g === gi) {
          s.querySelector(".ic").appendChild($(`<span>${esc(secili.textContent)}</span>`));
          secili.classList.remove("secili"); secili.classList.add("tamam"); secili.style.visibility = "hidden"; secili = null; APP.efekt("tik");
          if (--kalan === 0) bitir(hata <= 1, hata > 1 ? "" : null);
        } else { hata++; const x = secili; x.classList.add("yanlis"); APP.efekt("yanlis"); setTimeout(() => x.classList.remove("yanlis"), 450); }
      };
      sep.appendChild(s);
    });
    el.appendChild($(`<div class="not" style="text-align:center">Önce bir karta, sonra kutusuna dokun.</div>`));
    el.appendChild(cip); el.appendChild(sep);
  };

  CIZ.eslestir = (g, el, bitir) => {
    let sol = null, hata = 0, kalan = g.ciftler.length;
    const k = $(`<div class="eslestir"><div class="kol"></div><div class="kol"></div></div>`);
    const yap = (metin, idx, taraf) => { const b = document.createElement("button"); b.className = "parca"; b.textContent = metin; if (/^\p{Extended_Pictographic}/u.test(metin) && metin.length <= 8) b.style.fontSize = "42px"; b.dataset.i = idx; b.dataset.t = taraf; return b; };
    karistir(g.ciftler.map((c, i) => [c[0], i])).forEach(([m, i]) => k.children[0].appendChild(yap(m, i, 0)));
    karistir(g.ciftler.map((c, i) => [c[1], i])).forEach(([m, i]) => k.children[1].appendChild(yap(m, i, 1)));
    k.querySelectorAll(".parca").forEach((b) => b.onclick = () => {
      if (b.classList.contains("tamam")) return;
      if (!sol || sol.dataset.t === b.dataset.t) { k.querySelectorAll(".secili").forEach((x) => x.classList.remove("secili")); b.classList.add("secili"); sol = b; return; }
      if (sol.dataset.i === b.dataset.i) {
        [sol, b].forEach((x) => { x.classList.remove("secili"); x.classList.add("tamam"); }); sol = null; APP.efekt("tik");
        if (--kalan === 0) bitir(hata <= 1, null);
      } else { hata++; const a = sol; [a, b].forEach((x) => x.classList.add("yanlis")); APP.efekt("yanlis"); setTimeout(() => [a, b].forEach((x) => x.classList.remove("yanlis", "secili")), 450); sol = null; }
    });
    el.appendChild(k);
  };

  CIZ.sirala = (g, el, bitir) => {
    const cevap = $(`<div class="cevap-satiri"></div>`), cip = $(`<div class="cipler"></div>`);
    let parcalar = karistir(g.parcalar.map((p, i) => [p, i]));
    if (parcalar.every((p, i) => p[1] === i) && parcalar.length > 1) parcalar.reverse();
    const kontrol = $(`<button class="kontrol" disabled style="opacity:.5">Kontrol Et ✔</button>`);
    const guncelle = () => { const tam = cevap.children.length === g.parcalar.length; kontrol.disabled = !tam; kontrol.style.opacity = tam ? 1 : .5; };
    parcalar.forEach(([p]) => {
      const b = document.createElement("button"); b.className = "parca"; b.textContent = p;
      b.onclick = () => { (b.parentNode === cip ? cevap : cip).appendChild(b); APP.efekt("tik"); guncelle(); };
      cip.appendChild(b);
    });
    kontrol.onclick = () => {
      const verilen = [...cevap.children].map((b) => b.textContent).join(g.ayrac), dogruS = g.parcalar.join(g.ayrac);
      bitir(verilen === dogruS, dogruS);
    };
    el.appendChild(cevap); el.appendChild(cip); el.appendChild(kontrol);
  };

  CIZ.sayi = (g, el, bitir) => {
    let deger = "";
    const ek = $(`<div class="ekran">${g.birim ? `<span class="d">?</span> <small style="font-size:22px">${esc(g.birim)}</small>` : `<span class="d">?</span>`}</div>`);
    const d = ek.querySelector(".d");
    const tus = $(`<div class="tus"></div>`);
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "⌫", "0", "✔"].forEach((t) => {
      const b = document.createElement("button"); b.textContent = t;
      if (t === "✔") { b.style.background = "var(--yesil)"; b.style.color = "#fff"; }
      b.onclick = () => {
        if (t === "⌫") deger = deger.slice(0, -1);
        else if (t === "✔") { if (deger !== "") bitir(Number(deger) === g.cevap, String(g.cevap) + (g.birim ? " " + g.birim : "")); return; }
        else if (deger.length < 5) deger = (deger === "0" ? "" : deger) + t;
        d.textContent = deger || "?"; APP.efekt("tik");
      };
      tus.appendChild(b);
    });
    el.appendChild(ek); el.appendChild(tus);
  };

  CIZ.saat = (g, el, bitir) => {
    let h = 12, m = 0;
    const svg = $(`<div class="gorsel"></div>`);
    const dijital = $(`<div style="text-align:center;font-size:30px;font-weight:900"></div>`);
    const ciz = () => { svg.innerHTML = saatSVG(h, m, 230); dijital.textContent = ""; };
    const kont = $(`<div class="saat-kontrol"><div>🔴 Akrep (saat)<br><button>◀</button><button>▶</button></div><div>⚫ Yelkovan (dakika)<br><button>◀</button><button>▶</button></div></div>`);
    const bt = kont.querySelectorAll("button");
    bt[0].onclick = () => { h = h === 1 ? 12 : h - 1; ciz(); APP.efekt("tik"); };
    bt[1].onclick = () => { h = h === 12 ? 1 : h + 1; ciz(); APP.efekt("tik"); };
    bt[2].onclick = () => { m = (m + 55) % 60; ciz(); APP.efekt("tik"); };
    bt[3].onclick = () => { m = (m + 5) % 60; ciz(); APP.efekt("tik"); };
    const k = $(`<button class="kontrol">Kontrol Et ✔</button>`);
    k.onclick = () => bitir(h % 12 === g.saat % 12 && m === g.dakika, g.dogruMetin);
    ciz(); el.appendChild(svg); el.appendChild(dijital); el.appendChild(kont); el.appendChild(k);
  };

  CIZ.kesir = (g, el, bitir) => {
    const dolu = Array(g.parca).fill(false);
    const kutu = $(`<div class="gorsel"></div>`);
    const ciz = () => {
      kutu.innerHTML = kesirSVG(g.parca, dolu, 240, true);
      kutu.querySelectorAll("[data-i]").forEach((p) => p.addEventListener("click", () => { const i = +p.dataset.i; dolu[i] = !dolu[i]; APP.efekt("tik"); ciz(); }));
    };
    const k = $(`<button class="kontrol">Kontrol Et ✔</button>`);
    k.onclick = () => bitir(dolu.filter(Boolean).length === g.boya, `${g.boya} parça boyanmalı`);
    ciz(); el.appendChild($(`<div class="not" style="text-align:center">Parçalara dokunarak boya.</div>`)); el.appendChild(kutu); el.appendChild(k);
  };

  // Para birimleri kuruş cinsinden
  const PARALAR = [[20000, "200 TL", "kagit"], [10000, "100 TL", "kagit"], [5000, "50 TL", "kagit"], [2000, "20 TL", "kagit"], [1000, "10 TL", "kagit"], [500, "5 TL", "kagit"], [100, "1 TL", "madeni"], [50, "50 kr", "madeni"], [25, "25 kr", "madeni"], [10, "10 kr", "madeni"]];
  const paraYaz = (k) => { const tl = Math.floor(k / 100), kr = k % 100; return (tl ? tl + " lira" : "") + (tl && kr ? " " : "") + (kr ? kr + " kuruş" : "") || "0 lira"; };
  CIZ.market = (g, el, bitir) => {
    const secilen = [];
    const tepsi = $(`<div class="tepsi"></div>`), top = $(`<div style="text-align:center;font-size:24px;font-weight:900"></div>`);
    const ciz = () => {
      tepsi.innerHTML = secilen.length ? "" : `<span class="not" style="background:none">Ödemek için paralara dokun</span>`;
      secilen.forEach((p, i) => { const s = $(`<span>${p[1]} ✖</span>`); s.style.cursor = "pointer"; s.onclick = () => { secilen.splice(i, 1); ciz(); }; tepsi.appendChild(s); });
      top.textContent = "Ödediğin: " + paraYaz(secilen.reduce((t, p) => t + p[0], 0));
    };
    const kutu = $(`<div class="para"></div>`);
    PARALAR.filter((p) => p[0] <= Math.max(g.tutar, 100) * 2 && (g.kurus || p[0] >= 100)).forEach((p) => {
      const b = document.createElement("button"); b.className = p[2]; b.textContent = p[1];
      b.onclick = () => { secilen.push(p); APP.efekt("tik"); ciz(); };
      kutu.appendChild(b);
    });
    const k = $(`<button class="kontrol">Öde 💳</button>`);
    k.onclick = () => bitir(secilen.reduce((t, p) => t + p[0], 0) === g.tutar, paraYaz(g.tutar));
    ciz(); el.appendChild(kutu); el.appendChild(tepsi); el.appendChild(top); el.appendChild(k);
  };

  CIZ.simetri = (g, el, bitir) => {
    const { satir, sutun, sol } = g; // sol: ["r,c"] sol yarıdaki dolu kareler
    const yari = sutun / 2, dolu = new Set();
    const iz = $(`<div class="izgara-s" style="grid-template-columns:repeat(${yari},44px) 8px repeat(${yari},44px)"></div>`);
    for (let r = 0; r < satir; r++) {
      for (let c = 0; c < sutun; c++) {
        if (c === yari) iz.appendChild($(`<i style="background:#ef476f;border-radius:4px"></i>`));
        const b = document.createElement("button");
        if (c < yari) { if (sol.includes(r + "," + c)) b.className = "sabit"; b.disabled = true; b.style.opacity = 1; }
        else b.onclick = () => { const k = r + "," + c; dolu.has(k) ? dolu.delete(k) : dolu.add(k); b.classList.toggle("dolu"); APP.efekt("tik"); };
        iz.appendChild(b);
      }
    }
    const k = $(`<button class="kontrol">Kontrol Et ✔</button>`);
    k.onclick = () => {
      const beklenen = new Set(sol.map((s) => { const [r, c] = s.split(",").map(Number); return r + "," + (sutun - 1 - c); }));
      const ok = beklenen.size === dolu.size && [...beklenen].every((x) => dolu.has(x));
      bitir(ok, ok ? null : "Kırmızı çizgiye göre aynadaki görüntüsü");
    };
    el.appendChild($(`<div class="not" style="text-align:center">Kırmızı çizgi simetri doğrusu. Sağ tarafı boya.</div>`));
    const sar = $(`<div style="text-align:center"></div>`); sar.appendChild(iz); el.appendChild(sar); el.appendChild(k);
  };

  // Turu oluşturmak için: üreteçten benzersiz n görev
  function hazirla(uretecler, n) {
    const out = [], anahtar = new Set();
    for (let d = 0; d < 400 && out.length < n; d++) {
      const u = uretecler[d % uretecler.length];
      const g = u(); if (!g) continue;
      const a = g.tip + "|" + g.soru + "|" + (g.ifade || "") + "|" + JSON.stringify(g.secenekler ? g.secenekler[0] : g.cevap ?? g.parcalar ?? g.ogeler ?? g.ciftler ?? g.tutar ?? [g.saat, g.dakika, g.boya, g.sol]);
      if (anahtar.has(a)) continue;
      anahtar.add(a); out.push(g);
    }
    return out;
  }

  return { tur, hazirla, saatSVG, kesirSVG, grafikHTML, resimGrafikHTML, paraYaz, CIZ, esc };
})();
