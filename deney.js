// 🧪 "Deneyi kendin yap": konu sayfasına PhET (Colorado Üniversitesi, ücretsiz, açık kaynak) etkileşimli simülasyonu ve
// yönlendirici görevler ekler. Simülasyon yalnızca öğrenci "Deneyi aç"a basınca yüklenir (internet gerekir).
(function () {
  if (typeof window.konuSayfa !== "function") return;
  const D = {
    f1k1: ["my-solar-system", "Güneş Sistemim", ["Güneş ve bir gezegen seç, başlat. Gezegen Güneş'in etrafında nasıl bir yol çiziyor?", "Gezegenin kütlesini artır. Yörünge değişti mi?", "İki gezegeni farklı uzaklıklara koy. Hangisi turunu daha çabuk tamamlıyor?"]],
    f1k2: ["my-solar-system", "Güneş Sistemim", ["Güneş merkezli modeli kur: Güneş ortada, gezegenler etrafında.", "Gezegenleri Güneş'e yaklaştırıp uzaklaştır; hızları nasıl değişiyor?"]],
    f2k1: ["forces-and-motion-basics", "Kuvvet ve Hareket", ["\"Net Kuvvet\" ekranında iki tarafa eşit kuvvet uygula. Bileşke kuvvet kaç?", "Bir taraftaki kişileri artır. Araba hangi yöne gidiyor?", "Bileşke kuvvet büyüdükçe araba nasıl hızlanıyor?"]],
    f2k2: ["forces-and-motion-basics", "Kuvvet ve Hareket", ["İki tarafa eşit kuvvet uygula: araba hareket ediyor mu? Bu dengelenmiş kuvvettir.", "Kuvvetleri eşitsiz yap: ne oldu? Neden?"]],
    f2k3: ["forces-and-motion-basics", "Kuvvet ve Hareket", ["\"Hareket\" ekranında hız göstergesini aç ve kuvvet uygula.", "Kuvveti bırakınca cisim hemen duruyor mu? Sürtünmeyi açıp tekrar dene."]],
    f3k3: ["neuron", "Sinir Hücresi", ["Nöronu uyar ve sinyalin hücre boyunca nasıl ilerlediğini izle.", "Sinyal bir uçtan öbür uca hangi yönde gidiyor?"]],
    f4k1: ["bending-light", "Işığın Kırılması ve Yansıması", ["Lazeri aç ve ışığı yüzeye eğik gönder. Yansıyan ışığa bak.", "Geliş açısını değiştir: yansıma açısı da değişiyor mu? İkisi eşit mi?"]],
    f4k2: ["geometric-optics-basics", "Aynalar ve Mercekler", ["Ayna ekranında düz, çukur ve tümsek aynayı tek tek seç.", "Cismi aynaya yaklaştır: görüntü büyüyor mu, küçülüyor mu?"]],
    f4k3: ["color-vision", "Renk Görme", ["Kırmızı, yeşil ve mavi lambaları birlikte aç: kişi hangi rengi görüyor?", "Beyaz ışığın önüne renkli filtre koy. Neden yalnızca bir renk geçiyor?"]],
    f4k4: ["energy-forms-and-changes", "Enerji Biçimleri", ["\"Sistemler\" ekranında Güneş'i ve güneş panelini seç, ampule bağla.", "Bulutları artır: ampul ne oluyor? Neden?"]],
    f5k1: ["states-of-matter-basics", "Maddenin Hâlleri", ["Bir maddeyi ısıt: tanecikler nasıl hareket ediyor?", "Isıtınca tanecikler arası boşluk artıyor mu? Genleşme bununla ilgili."]],
    f5k2: ["states-of-matter-basics", "Maddenin Hâlleri", ["Suyu ısıtıp kaynat; sıcaklık göstergesini izle.", "Soğutup dondur. Katı, sıvı ve gazda tanecikler nasıl farklı?"]],
    f5k3: ["density", "Yoğunluk", ["Aynı kütledeki bloklardan hangisi daha büyük hacimli?", "Blokları suya at. Hangisi yüzüyor, hangisi batıyor? Yoğunlukları karşılaştır."]],
    f5k4: ["buoyancy-basics", "Kaldırma Kuvveti", ["Farklı maddelerden blokları sıvıya bırak.", "Sıvıyı değiştir (ör. bal). Batan blok yüzmeye başladı mı? Neden?"]],
    f6k1: ["circuit-construction-kit-dc", "Elektrik Devresi Kur", ["Pil, kablo ve ampulle basit bir devre kur; ampulü yak.", "Devreye bir silgi, bir para ya da bir kâğıt ekle. Hangileri iletken?"]],
    f6k2: ["circuit-construction-kit-dc", "Elektrik Devresi Kur", ["Devreye ikinci bir ampul ekle (art arda). Parlaklık ne oldu?", "Pil sayısını artır. Ampul daha parlak mı yanıyor?"]],
    f6k3: ["circuit-construction-kit-dc", "Elektrik Devresi Kur", ["Devreye bir direnç ekle ve değerini değiştir.", "Direnç büyüdükçe ampulün parlaklığı nasıl değişiyor?"]],
    f7k2: ["greenhouse-effect", "Sera Etkisi", ["Atmosferdeki sera gazlarını artır. Sıcaklık ne oluyor?", "Gazları azalt. İnsan faaliyetlerinin iklimle bağını düşün."]],
    t2k1: ["plinko-probability", "Olasılık Tahtası", ["Topları tek tek bırak; nereye düştüklerini izle.", "Çok sayıda top bırak. En çok hangi kutulara düşüyor? Tahminin tuttu mu?"]],
    t3k3: ["fractions-intro", "Kesirlere Giriş", ["Pay ve paydayı değiştir; kesir pastası nasıl değişiyor?", "3/4'ü farklı şekillerle (daire, çubuk) göster."]],
    t4k2: ["center-and-variability", "Merkez ve Yayılım", ["Topları at ve verileri nokta grafiğinde gör.", "Ortalamayı ve ortancayı göster. Yeni bir veri eklenince nasıl değişiyor?"]],
    t5k3: ["quadrilateral", "Dörtgen", ["Köşeleri sürükleyerek bir paralelkenar oluştur.", "Kenarları ve açıları ölç: karşılıklı kenarlar ve açılar eşit mi?"]],
    t6k1: ["expression-exchange", "Cebirsel İfadeler", ["x ve y kartlarını bir araya getirip ifade oluştur.", "Benzer terimleri birleştir: 2x + 3x kaç x eder?"]],
    t6k2: ["function-builder-basics", "Fonksiyon Makinesi", ["Bir sayıyı makineye sok; hangi kural uygulanıyor?", "İki makineyi arka arkaya bağla. Çıkışı tahmin et, sonra dene."]],
    t7k1: ["area-builder", "Alan Oluştur", ["Kareleri yerleştirerek 12 birimkare alanlı farklı şekiller yap.", "Aynı alanlı şekillerin çevreleri de aynı mı?"]],
    t7k2: ["area-builder", "Alan Oluştur", ["Bir paralelkenarı kareler ve yarım karelerle oluştur; alanını say.", "Bir dikdörtgenin yarısı olan üçgeni yap. Alanı kaç birimkare?"]]
  };
  const st = document.createElement("style");
  st.textContent = `.deney{background:linear-gradient(135deg,#ecfdf5,#eff6ff);border:1px solid #a7f3d0;border-radius:18px;padding:14px 16px;margin:14px 0;color:#0f172a}
.deney h2{margin:0 0 6px}.deney ol{margin:8px 0 10px;padding-left:22px;font-size:16.5px;line-height:1.5}.deney .dn-cer{position:relative;width:100%;aspect-ratio:4/3;border-radius:12px;overflow:hidden;background:#fff;border:1px solid #cbd5e1;margin-top:10px}
.deney iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.deney .dn-not{font-size:13.5px;color:#475569}
@media (prefers-color-scheme:dark){.deney{background:linear-gradient(135deg,#0b2a22,#0b1f3a);border-color:#14532d;color:#e2e8f0}.deney .dn-not{color:#94a3b8}}`;
  document.head.appendChild(st);
  const url = (s) => `https://phet.colorado.edu/sims/html/${s}/latest/${s}_all.html?locale=tr`;
  // Diğer sınıflar: konu adına göre eşleştirme (yalnız fen ve matematik dersleri)
  const G = (ad) => [`"${ad}" simülasyonunu aç ve konudaki kavramı ekranda bul.`, "Bir değeri değiştir: ne değişti? Neden böyle olduğunu düşün.", "Öğrendiğini kendi cümlenle bir kez söyle ya da yaz."];
  const KURAL = [
    [/elektrik|devre|direnç|iletken|yalıtkan|ampul|akım/i, "circuit-construction-kit-dc", "Elektrik Devresi Kur"],
    [/kaldırma kuvveti|yüzme|batma/i, "buoyancy-basics", "Kaldırma Kuvveti"],
    [/yoğunluk/i, "density", "Yoğunluk"],
    [/sürtünme|kuvvet|hareket|sürat|newton|ivme/i, "forces-and-motion-basics", "Kuvvet ve Hareket"],
    [/erime|donma|kaynama|hal değişim|hâl değişim|maddenin hal|maddenin hâl|tanecik|genleşme|ısı ve sıcaklık/i, "states-of-matter-basics", "Maddenin Hâlleri"],
    [/mercek|ayna/i, "geometric-optics-basics", "Aynalar ve Mercekler"],
    [/renk/i, "color-vision", "Renk Görme"],
    [/ışık|yansıma|kırılma/i, "bending-light", "Işığın Kırılması ve Yansıması"],
    [/\bses\b|ses dalga|sesin/i, "waves-intro", "Dalgalara Giriş"],
    [/dalga/i, "wave-on-a-string", "İpte Dalga"],
    [/güneş sistemi|gezegen|yörünge/i, "my-solar-system", "Güneş Sistemim"],
    [/kütle çekim|yer çekimi|çekim kuvveti/i, "gravity-force-lab-basics", "Kütle Çekim Laboratuvarı"],
    [/sarkaç/i, "pendulum-lab", "Sarkaç Laboratuvarı"],
    [/yay|esneklik/i, "masses-and-springs-basics", "Kütleler ve Yaylar"],
    [/enerji/i, "energy-forms-and-changes", "Enerji Biçimleri"],
    [/molekül|bileşik|kimyasal bağ/i, "build-a-molecule", "Molekül Oluştur"],
    [/gaz/i, "gas-properties", "Gazların Özellikleri"],
    [/çözelti|derişim|molarite|çözünürlük/i, "molarity", "Molarite"],
    [/sera|iklim/i, "greenhouse-effect", "Sera Etkisi"],
    [/sinir|nöron/i, "neuron", "Sinir Hücresi"],
    [/vektör/i, "vector-addition", "Vektör Toplama"],
    [/kesir/i, "fractions-intro", "Kesirlere Giriş"],
    [/oran|orantı/i, "ratio-and-proportion", "Oran ve Orantı"],
    [/olasılık/i, "plinko-probability", "Olasılık Tahtası"],
    [/ortalama|merkezi eğilim|açıklık/i, "center-and-variability", "Merkez ve Yayılım"],
    [/dörtgen|paralelkenar|yamuk|eşkenar dörtgen/i, "quadrilateral", "Dörtgen"],
    [/\balan\b|alan ölç|alanı/i, "area-builder", "Alan Oluştur"],
    [/denklem|eşitlik/i, "equality-explorer", "Eşitlik Kâşifi"],
    [/cebirsel|terim|ifade/i, "expression-exchange", "Cebirsel İfadeler"],
    [/eğim|doğrusal/i, "graphing-slope-intercept", "Doğru Grafiği"],
    [/ikinci derece|parabol|karesel/i, "graphing-quadratics", "Parabol Grafiği"],
    [/fonksiyon|örüntü/i, "function-builder-basics", "Fonksiyon Makinesi"],
    [/tam sayı|sayı doğrusu|mutlak değer/i, "number-line-distance", "Sayı Doğrusu"]
  ];
  const DERS_UYGUN = /fen|fizik|kimya|biyoloji|matematik/;
  function bul(k) {
    if (D[k.id] && parseInt((window.SINIF && SINIF.anahtar) || document.title, 10) === 6) return D[k.id];
    const b = typeof konuBul === "function" ? konuBul(k.id) : null; if (!b || !DERS_UYGUN.test(b.ders)) return null;
    for (const [re, sim, ad] of KURAL) if (re.test(k.ad)) return [sim, ad, G(ad)];
    return null;
  }
  const asil = window.konuSayfa;
  window.konuSayfa = function (k) {
    const r = asil.apply(this, arguments);
    const d = k && bul(k); if (!d) return r;
    const yer = ekran.querySelector(".konu-v") || ekran;
    const kutu = document.createElement("section"); kutu.className = "deney";
    kutu.innerHTML = `<h2>🧪 Deneyi Kendin Yap: ${esc(d[1])}</h2>
      <div>Bu konuyu ekranda deney yaparak keşfet. Önce görevleri oku, sonra deneyi aç:</div>
      <ol>${d[2].map((g) => `<li>${esc(g)}</li>`).join("")}</ol>
      <button class="btn" data-ac>▶ Deneyi aç</button> <a class="btn2" href="${url(d[0])}" target="_blank" rel="noopener" style="text-decoration:none;display:inline-block">⛶ Tam ekran</a>
      <div class="dn-not" style="margin-top:6px">Simülasyon: PhET, Colorado Üniversitesi (ücretsiz). İnternet bağlantısı gerekir.</div>`;
    kutu.querySelector("[data-ac]").onclick = (e) => {
      e.target.remove();
      const c = document.createElement("div"); c.className = "dn-cer";
      c.innerHTML = `<iframe src="${url(d[0])}" title="${esc(d[1])}" allow="fullscreen" allowfullscreen loading="lazy"></iframe>`;
      kutu.appendChild(c);
      if (window.goatcounter && goatcounter.count) try { goatcounter.count({ path: "deney/" + d[0], title: "Deney · " + d[1], event: true }); } catch (x) {}
    };
    const vid = yer.querySelector("h2"); yer.insertBefore(kutu, vid || null);
    return r;
  };
  window.DENEY_LISTE = D;
})();
