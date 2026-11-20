// 🧭 9. sınıf — Türkiye Yüzyılı Maarif Modeli düzeltmeleri (2026-2027). Başka sınıfa ait konular çıkarılır, eksik konular eklenir.
(function () {
  if (!window.ICERIK) return;
  const I = window.ICERIK;
  const yap = (k) => ({ id: k.id, ad: k.ad, ozet: k.ozet || [], anlatim: k.anlatim || [], kelimeler: [],
    sorular: (k.sorular || []).map(([soru, d, y1, y2, y3, cozum]) => ({ soru, secenekler: [d, y1, y2, y3], dogru: 0, cozum: cozum || "" })),
    acik: (k.acik || []).map(([soru, cevap]) => ({ soru, cevap })), ornekler: [], hatalar: [] });
  const Y = {}; const K = (k) => { Y[k.id] = yap(k); };
  // ---------- FİZİK: Enerji ünitesi (Maarif 9: iç enerji, ısı-sıcaklık, hâl değişimi, ısı aktarımı) ----------
  K({ id: "fiz9e1", ad: "İç Enerji, Isı ve Sıcaklık",
    ozet: ["İç enerji: maddenin taneciklerinin kinetik ve potansiyel enerjilerinin toplamı",
      "Sıcaklık: taneciklerin ortalama kinetik enerjisinin göstergesi; termometreyle ölçülür (°C, K)",
      "Isı: sıcaklık farkı nedeniyle aktarılan enerji; birimi joule (J), kalori de kullanılır",
      "Q = m · c · ΔT · öz ısı (c) maddeler için ayırt edicidir",
      "Isı sığası C = m · c; kütleye bağlı olduğu için ayırt edici değildir"],
    anlatim: ["Bir bardak çay ile bir kova suyu düşünelim. Çayın sıcaklığı daha yüksek olabilir ama kovadaki suyun tanecik sayısı çok fazla olduğu için iç enerjisi daha büyüktür. Sıcaklık ortalamayı, iç enerji toplamı anlatır.",
      "Isı, maddede depolanan bir şey değil; sıcaklık farkı olduğu sürece sıcak cisimden soğuk cisme aktarılan enerjidir. Aktarım sıcaklıklar eşitlenince (ısıl denge) durur.",
      "Aynı ısı verildiğinde öz ısısı küçük olan madde daha çabuk ısınır. Suyun öz ısısı büyüktür; bu yüzden denizler karalara göre geç ısınıp geç soğur ve kıyıların iklimi daha ılımandır.",
      "Q = m·c·ΔT bağıntısında m kütle, c öz ısı, ΔT sıcaklık değişimidir."],
    sorular: [["X ve Y cisimlerinin kütleleri sırasıyla m ve 2m, öz ısıları 2c ve c'dir. Eşit ısı verildiğinde sıcaklık değişimlerinin oranı ΔTx/ΔTy kaçtır?", "1", "2", "1/2", "4", "Isı sığaları Cx = m·2c = 2mc, Cy = 2m·c = 2mc eşit; eşit ısıyla eşit ΔT olur."], ["Öz ısısı 1 cal/g°C olan 500 g suyun sıcaklığı 20 °C'den 60 °C'ye çıkarılıyor. Su kaç kcal ısı almıştır?", "20 kcal", "10 kcal", "30 kcal", "40 kcal", "Q = m·c·ΔT = 500·1·40 = 20 000 cal = 20 kcal."], ["Sıcaklıkları farklı iki cisim birbirine dokundurulup ısıl dengeye ulaşıyor. Dengede kesinlikle eşit olan büyüklük hangisidir?", "Sıcaklık", "İç enerji", "Alınan ve verilen ısı dışında hiçbir şey eşit olmaz", "Isı sığası", "Dengede sıcaklıklar eşitlenir; iç enerji kütleye ve cinse bağlı olduğundan farklı olabilir."], ["Maddenin taneciklerinin ortalama kinetik enerjisinin göstergesi olan büyüklük hangisidir?", "Sıcaklık", "Isı", "İç enerji", "Isı sığası", "Sıcaklık ortalama kinetik enerjiyle ilgilidir."],
      ["Maddeler için ayırt edici özellik olan hangisidir?", "Öz ısı", "Isı sığası", "Kütle", "İç enerji", "Öz ısı maddenin cinsine bağlıdır; ısı sığası kütleye de bağlıdır."],
      ["Kütlesi 2 kg, öz ısısı 4000 J/kg°C olan suyun sıcaklığını 5 °C artırmak için kaç J ısı gerekir?", "40 000 J", "20 000 J", "8000 J", "4000 J", "Q = m·c·ΔT = 2·4000·5 = 40 000 J."],
      ["Kıyı bölgelerinde iklimin iç kesimlere göre daha ılıman olmasının nedeni hangisidir?", "Suyun öz ısısının büyük olması", "Suyun yoğunluğunun küçük olması", "Denizlerin tuzlu olması", "Kıyıların yüksek olması", "Su geç ısınır, geç soğur."],
      ["Isı için hangisi doğrudur?", "Sıcaklık farkından dolayı aktarılan enerjidir", "Termometreyle ölçülür", "Maddede depolanan bir sıcaklık türüdür", "Birimi °C'dir", "Isı aktarılan enerjidir; birimi joule'dür."]],
    acik: [["Isı, sıcaklık ve iç enerji kavramlarını birer cümleyle tanımlayınız.", "Isı: sıcaklık farkı nedeniyle aktarılan enerji. Sıcaklık: taneciklerin ortalama kinetik enerjisinin ölçüsü. İç enerji: taneciklerin toplam enerjisi."],
      ["Aynı kaynaktan eşit ısı alan eşit kütleli su ve zeytinyağından hangisinin sıcaklığı daha çok artar? Açıklayınız.", "Zeytinyağının; öz ısısı sudan küçük olduğu için aynı ısıyla sıcaklığı daha çok artar."]] });
  K({ id: "fiz9e2", ad: "Hâl Değişimi, Isıl Denge ve Isı Aktarım Yolları",
    ozet: ["Hâl değişimi sırasında saf maddenin sıcaklığı sabit kalır; verilen ısı tanecikler arası bağları zayıflatır",
      "Q = m · L (L: erime ya da buharlaşma ısısı)",
      "Isıl denge: temas eden maddelerin sıcaklıkları eşitlenince ısı alışverişi durur",
      "Isı aktarım yolları: iletim (katılarda, temasla), konveksiyon / taşıma (akışkanlarda), ışıma (boşlukta da olur)",
      "İletim hızı; sıcaklık farkı ve kesit alanı arttıkça artar, kalınlık arttıkça azalır, maddenin cinsine bağlıdır"],
    anlatim: ["Buzu ısıttığımızda 0 °C'ye kadar sıcaklığı artar; erimeye başlayınca bütün buz eriyene kadar sıcaklık 0 °C'de kalır. Bu sürede alınan ısı, tanecikler arasındaki bağları zayıflatmak için kullanılır.",
      "Sıcak bir metal kaşık soğuk suya bırakıldığında kaşık soğur, su ısınır. Sıcaklıklar eşitlendiğinde ısıl dengeye ulaşılır.",
      "Tencerenin sapının ısınması iletim, kaynayan suyun dipten yukarı dolaşması konveksiyon, Güneş'in bizi ısıtması ışımadır. Işıma maddesel ortam gerektirmez.",
      "Isı yalıtımı; binalarda enerji tasarrufu sağlar. Termos, çift duvarı arasındaki boşluk ve parlak yüzeyleriyle üç aktarım yolunu da azaltır."],
    sorular: [["0 °C'deki 200 g buzun tamamını eritmek için kaç kalori ısı gerekir? (Buzun erime ısısı L = 80 cal/g)", "16 000 cal", "8000 cal", "1600 cal", "32 000 cal", "Q = m·L = 200·80 = 16 000 cal; erime sırasında sıcaklık 0 °C'de kalır."], ["80 °C'deki 100 g su ile 20 °C'deki 300 g su ısı yalıtımlı bir kapta karıştırılıyor. Denge sıcaklığı kaç °C olur?", "35 °C", "50 °C", "40 °C", "30 °C", "Alınan ısı = verilen ısı: 100·(80−T) = 300·(T−20) → T = 35 °C."], ["Bir metal çubuğun hem kesit alanı hem de boyu iki katına çıkarılırsa uçları arasındaki sıcaklık farkı aynı kaldığında ısı iletim hızı nasıl değişir?", "Değişmez", "İki katına çıkar", "Yarıya iner", "Dört katına çıkar", "İletim hızı alanla doğru, uzunlukla ters orantılıdır; ikisi birlikte iki katına çıkınca etkiler birbirini götürür."], ["Saf bir maddenin erimesi sırasında sıcaklığı için hangisi doğrudur?", "Sabit kalır", "Sürekli artar", "Sürekli azalır", "Önce azalır sonra artar", "Hâl değişimi süresince sıcaklık sabittir."],
      ["Güneş'ten Dünya'ya enerji hangi yolla ulaşır?", "Işıma", "İletim", "Konveksiyon", "Buharlaşma", "Işıma boşlukta da gerçekleşir."],
      ["Kaynayan suyun dipten yüzeye doğru dolaşarak ısınması hangi aktarım yoluna örnektir?", "Konveksiyon (taşıma)", "İletim", "Işıma", "Yoğuşma", "Akışkanlarda madde akışıyla ısı taşınır."],
      ["Bir duvardan ısı iletim hızını azaltmak için ne yapılmalıdır?", "Duvar kalınlığı artırılmalı ya da yalıtım malzemesi kullanılmalıdır", "İç ve dış sıcaklık farkı artırılmalıdır", "Duvar yüzey alanı büyütülmelidir", "Duvar metalden yapılmalıdır", "Kalınlık arttıkça iletim hızı azalır."],
      ["Isıl denge için hangisi doğrudur?", "Temas eden maddelerin sıcaklıkları eşitlenince ısı aktarımı durur", "Maddelerin ısıları eşitlenir", "Maddelerin iç enerjileri her zaman eşit olur", "Isı soğuk maddeden sıcağa akar", "Dengede eşitlenen sıcaklıktır."]],
    acik: [["Termosun ısı kaybını hangi yollarla azalttığını açıklayınız.", "Çift duvar arasındaki boşluk iletim ve konveksiyonu, parlak yüzeyler ışımayı azaltır; kapak da konveksiyonla kaybı önler."],
      ["Buzun erime grafiğinde sıcaklığın sabit kaldığı bölümü açıklayınız.", "Erime sırasında alınan ısı tanecikler arası bağları zayıflatmak için kullanılır; ortalama kinetik enerji değişmediği için sıcaklık sabit kalır."]] });
  // ---------- BİYOLOJİ: Hücre zarından madde geçişleri ----------
  K({ id: "bio9m", ad: "Hücre Zarından Madde Geçişleri",
    ozet: ["Hücre zarı seçici geçirgendir (akıcı mozaik zar modeli)",
      "Pasif taşıma (ATP harcanmaz): difüzyon, kolaylaştırılmış difüzyon, ozmoz; çok yoğundan az yoğuna",
      "Aktif taşıma: ATP harcanır, taşıyıcı protein kullanılır; az yoğundan çok yoğuna da olabilir",
      "Büyük moleküller: endositoz (fagositoz, pinositoz) ile alınır, ekzositoz ile dışarı atılır",
      "Hipertonik ortamda hücre su kaybeder (bitkide plazmoliz); hipotonik ortamda su alır (alyuvar patlayabilir: hemoliz)"],
    anlatim: ["Hücre zarı her maddeyi içeri almaz; küçük ve yağda çözünen moleküller kolay geçerken iyonlar ve büyük moleküller taşıyıcı proteinlere ihtiyaç duyar.",
      "Difüzyonda maddeler yoğunluk farkı ortadan kalkana kadar çok yoğun ortamdan az yoğun ortama geçer; enerji harcanmaz. Suyun seçici geçirgen zardan geçişine ozmoz denir.",
      "Aktif taşımada hücre ATP harcayarak maddeyi yoğunluk farkına karşı taşıyabilir. Örneğin kök hücreleri topraktan mineralleri bu yolla alır.",
      "Amip besinini fagositozla (hücre yutması), bazı hücreler sıvı damlacıklarını pinositozla alır. Salgı maddeleri ekzositozla dışarı verilir."],
    sorular: [["Eşit kütleli patates dilimleri farklı derişimli şeker çözeltilerinde bir süre bekletiliyor. Kütlesi değişmeyen dilim hangi tür çözeltidedir?", "İzotonik", "Hipertonik", "Hipotonik", "Saf su", "Derişim hücre içiyle eşitse net su geçişi olmaz, kütle değişmez."], ["Hücrede ATP üretimini durduran bir zehrin etkisiyle aşağıdaki taşıma türlerinden hangisi doğrudan durur?", "Aktif taşıma", "Basit difüzyon", "Ozmoz", "Kolaylaştırılmış difüzyon", "Aktif taşıma ATP gerektirir; diğerleri pasif taşımadır."], ["Kolaylaştırılmış difüzyonu basit difüzyondan ayıran özellik hangisidir?", "Kanal ya da taşıyıcı proteinlerin kullanılması", "ATP harcanması", "Maddenin az yoğundan çok yoğuna geçmesi", "Yalnızca suyun taşınması", "İkisi de pasiftir; kolaylaştırılmış difüzyonda zar proteinleri görev alır."], ["ATP harcanarak maddelerin az yoğun ortamdan çok yoğun ortama taşınmasına ne denir?", "Aktif taşıma", "Difüzyon", "Ozmoz", "Kolaylaştırılmış difüzyon", "Yoğunluk farkına karşı taşıma enerji gerektirir."],
      ["Suyun seçici geçirgen zardan geçişine ne ad verilir?", "Ozmoz", "Fagositoz", "Ekzositoz", "Aktif taşıma", "Ozmoz suyun difüzyonudur."],
      ["Çok tuzlu (hipertonik) suya konan bitki hücresinde ne gözlenir?", "Su kaybederek plazmoliz", "Su alarak patlama", "Hiçbir değişiklik olmaz", "Hücre duvarı erir", "Su, yoğunluğu fazla olan dış ortama geçer."],
      ["Amibin besini hücre zarıyla sararak içine alması hangi yolla olur?", "Fagositoz", "Pinositoz", "Ekzositoz", "Difüzyon", "Katı parçacıkların alınması fagositozdur."],
      ["Aşağıdakilerden hangisi pasif taşımanın özelliğidir?", "ATP harcanmaz", "Her zaman taşıyıcı protein gerekir", "Az yoğundan çok yoğuna olur", "Yalnızca büyük moleküllerde görülür", "Pasif taşımada enerji harcanmaz."]],
    acik: [["Saf suya konan alyuvar hücresinde ne olacağını nedeniyle açıklayınız.", "Saf su hipotoniktir; alyuvar ozmozla su alır, şişer ve patlayabilir (hemoliz)."],
      ["Difüzyon ile aktif taşımayı enerji ve yoğunluk farkı bakımından karşılaştırınız.", "Difüzyonda ATP harcanmaz, madde çok yoğundan az yoğuna geçer. Aktif taşımada ATP harcanır, madde yoğunluk farkına karşı da taşınabilir."]] });

  const DUZEN = {
    fizik: [
      ["f9u1", "1. Ünite: Fizik Bilimi ve Kariyer Keşfi", 1, ["fiz1k1"]],
      ["f9u2", "2. Ünite: Kuvvet ve Hareket", 1, ["fiz2k1"]],
      ["f9u3", "3. Ünite: Akışkanlar", 2, ["fiz3k1"]],
      ["f9u4", "4. Ünite: Enerji", 2, ["fiz9e1", "fiz9e2"]]
    ],
    biyoloji: [
      ["b9t1", "1. Tema: Yaşam (Yaşam Bilimi, Sınıflandırma ve Biyoçeşitlilik)", 1, ["bio1k1", "bio3k1"]],
      ["b9t2", "2. Tema: Organizasyon (Hücre ve Madde Geçişleri)", 2, ["bio2k1", "bio9m"]]
    ],
    tarih: [
      ["t9u1", "1. Ünite: Geçmişin İnşa Sürecinde Tarih", 1, ["tar1k1"]],
      ["t9u2", "2. Ünite: Eski Çağ Medeniyetleri", 1, ["tar2k1"]],
      ["t9u3", "3. Ünite: Orta Çağ Medeniyetleri", 2, ["tar3k1"]]
    ]
  };

  const cikan = [];
  for (const [ders, uniteler] of Object.entries(DUZEN)) {
    const D = I[ders]; if (!D) continue;
    const eski = {}; for (const u of D.uniteler || []) for (const k of u.konular || []) eski[k.id] = k;
    const kul = new Set();
    D.uniteler = uniteler.map(([id, ad, donem, liste]) => ({ id, ad, donem, konular: liste.map((x) => {
      const [kid, yeniAd] = Array.isArray(x) ? x : [x, null]; const k = eski[kid] || Y[kid]; if (!k) return null;
      if (yeniAd) k.ad = yeniAd; kul.add(kid); return k; }).filter(Boolean) })).filter((u) => u.konular.length);
    for (const kid of Object.keys(eski)) if (!kul.has(kid)) cikan.push(kid);
  }
  window.MAARIF_DUZEN = { cikan, yeni: Object.keys(Y) };
})();
