// 11. sınıf Kimya — Maarif kimya programı (11. sınıf: 1. tema enerji ve tepkime hızı, 2. tema Çeşitlilik: denge, asit-baz dengesi,
// çözünürlük dengesi; 3. tema Sürdürülebilirlik: yeşil hidrojen, nanoteknoloji, mikro/nanoplastikler) ile eski içerik arasındaki eksikler.
// Kaynak: mufredat.meb.gov.tr Kimya Dersi Öğretim Programı (Maarif), KİM.11.2.6–KİM.11.2.14 ve KİM.11.3.1–KİM.11.3.3.
(function () {
  if (!window.MUF || !window.ICERIK || !ICERIK.kimya) return;

  MUF.konu("kimya", "kimu4", 99, {
    id: "kim4k3", ad: "Asit–Baz Dengesi, pH, Nötrleşme ve Titrasyon (Maarif)",
    ozet: [
      "Suyun oto-iyonlaşması: H₂O + H₂O ⇌ H₃O⁺ + OH⁻. 25 °C'de Ksu = [H₃O⁺] · [OH⁻] = 1 · 10⁻¹⁴; saf suda [H₃O⁺] = [OH⁻] = 10⁻⁷ M.",
      "pH = −log[H₃O⁺], pOH = −log[OH⁻], 25 °C'de pH + pOH = 14. pH < 7 asidik, pH = 7 nötr, pH > 7 bazik.",
      "Arrhenius: asit suda H⁺ (H₃O⁺), baz OH⁻ verir. Brønsted–Lowry: asit proton (H⁺) veren, baz proton alan türdür; proton alışverişiyle eşlenik asit–baz çiftleri oluşur.",
      "Kuvvetli asit/baz suda tamamen iyonlaşır (HCl, HNO₃, H₂SO₄; NaOH, KOH). Zayıf asit/baz kısmen iyonlaşır (CH₃COOH, HF; NH₃); iyonlaşma yüzdesi küçüktür, Ka ve Kb ile ifade edilir.",
      "Zayıf asitte yaklaşık [H₃O⁺] = √(Ka · Ca) (Ca/Ka > 10² iken geçerli). Aynı derişimde zayıf asidin pH'ı kuvvetli asidinkinden büyüktür.",
      "Nötrleşme: H₃O⁺ + OH⁻ → 2H₂O. Titrasyonda eşdeğerlik noktasında n(H⁺) = n(OH⁻): Ma · Va · (tesir değerliği) = Mb · Vb · (tesir değerliği). Kuvvetli asit–kuvvetli baz titrasyonunda eşdeğerlik noktası pH = 7'dir."
    ],
    anlatim: [
      "0,01 M HCl kuvvetli asit olduğundan tamamen iyonlaşır: [H₃O⁺] = 10⁻² M → pH = 2. Aynı derişimdeki zayıf asit (ör. asetik asit) kısmen iyonlaştığı için [H₃O⁺] daha küçük, pH daha büyüktür.",
      "Titrasyonda derişimi bilinmeyen çözeltiye derişimi bilinen çözelti (büretten) damla damla eklenir. İndikatörün renk değiştirdiği an (dönüm noktası) eşdeğerlik noktasına çok yakındır. İletkenlik ve pH ölçümleri de nötrleşmeyi izlemenin yollarıdır.",
      "Günlük hayatta: mide ekşimesinde mide asidini nötrleştiren bazik antasitler, diş sağlığında florürlü macunlar, cilt için pH'ı ciltle uyumlu (hafif asidik, pH ≈ 5,5) ürünler tercih edilir."
    ],
    sorular: [
      ["0,001 M HCl çözeltisinin pH değeri kaçtır?", "3", "11", "1", "0,001", "Kuvvetli asit: [H₃O⁺] = 10⁻³ M → pH = 3"],
      ["25 °C'de pH değeri 4 olan çözeltinin pOH değeri kaçtır?", "10", "4", "7", "14", "pH + pOH = 14 → pOH = 10"],
      ["Brønsted–Lowry tanımına göre asit nedir?", "Proton (H⁺) veren tür", "Proton alan tür", "Suda OH⁻ veren tür", "Elektron veren tür", "Brønsted–Lowry asidi proton vericidir."],
      ["Hangisi kuvvetli bir asittir?", "HNO₃", "CH₃COOH", "HF", "H₂CO₃", "HNO₃ suda tamamen iyonlaşır."],
      ["0,01 M NaOH çözeltisinin pH değeri kaçtır? (25 °C)", "12", "2", "10", "14", "[OH⁻] = 10⁻² → pOH = 2 → pH = 12"],
      ["Kuvvetli asit–kuvvetli baz titrasyonunda eşdeğerlik noktasındaki pH kaçtır? (25 °C)", "7", "1", "14", "4", "Oluşan tuz nötrdür; pH = 7."],
      ["25 mL HCl çözeltisi 0,2 M NaOH çözeltisinden 50 mL ile tam nötrleşiyor. HCl'nin derişimi kaç M'dir?", "0,4", "0,1", "0,2", "0,8", "Ma · 25 = 0,2 · 50 → Ma = 0,4 M"],
      ["Mide ekşimesini gidermek için hangi tür ilaç kullanılır?", "Bazik özellikli antasit", "Kuvvetli asit", "Tuzlu su", "Asidik içecek", "Fazla mide asidi bazik antasitle nötrleştirilir."]
    ],
    acik: [
      ["Aynı derişimdeki HCl ve CH₃COOH çözeltilerinin pH değerlerini karşılaştırınız ve nedenini açıklayınız.", "HCl kuvvetli asit olduğundan tamamen iyonlaşır, [H₃O⁺] daha büyüktür, pH daha küçüktür. CH₃COOH zayıf asittir, kısmen iyonlaşır; [H₃O⁺] küçük, pH büyüktür."],
      ["NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ tepkimesinde eşlenik asit–baz çiftlerini belirleyiniz.", "NH₃ proton alır (baz), eşleniği NH₄⁺ (asit). H₂O proton verir (asit), eşleniği OH⁻ (baz). Çiftler: NH₄⁺/NH₃ ve H₂O/OH⁻."]
    ],
    ornek: [
      ["Ka = 1,8 · 10⁻⁵ olan asetik asidin 0,1 M çözeltisinde yaklaşık [H₃O⁺] ve pH değerini bulunuz. (√1,8 ≈ 1,34; log 1,34 ≈ 0,13)", "Ca/Ka = 0,1 / 1,8 · 10⁻⁵ > 10², yaklaşım geçerli. [H₃O⁺] = √(1,8 · 10⁻⁵ · 0,1) = √(1,8 · 10⁻⁶) ≈ 1,34 · 10⁻³ M. pH = 3 − log 1,34 ≈ 3 − 0,13 = 2,87. Karşılaştırma: 0,1 M HCl'nin pH'ı 1'dir."],
      ["20 mL 0,1 M H₂SO₄ çözeltisini tam nötrleştirmek için 0,2 M NaOH çözeltisinden kaç mL gerekir?", "H₂SO₄ iki H⁺ verir: n(H⁺) = 2 · 0,1 · 0,020 = 0,004 mol. n(OH⁻) = 0,2 · V = 0,004 → V = 0,020 L = 20 mL."]
    ],
    hata: [
      "pH'ın derişimle doğru orantılı arttığını sanmak (derişim artınca asidik çözeltide pH azalır).",
      "Zayıf asitte [H₃O⁺]'yı asit derişimine eşit almak (yalnızca kuvvetli asitte eşittir).",
      "Titrasyonda H₂SO₄ gibi iki protonlu asitlerin tesir değerliğini unutmak."
    ]
  });

  MUF.konu("kimya", "kimu4", 99, {
    id: "kim4k4", ad: "Çözünürlük Dengesi ve Çözünürlük Çarpımı (Kçç) (Maarif)",
    ozet: [
      "Az çözünen tuzun doygun çözeltisinde katı ile iyonları arasında denge vardır: AgCl(k) ⇌ Ag⁺(suda) + Cl⁻(suda).",
      "Çözünürlük çarpımı: Kçç = [Ag⁺] · [Cl⁻]. Katı maddeler denge ifadesine yazılmaz.",
      "Molar çözünürlük s: AB tipi tuzda Kçç = s²; AB₂ (ya da A₂B) tipi tuzda Kçç = 4s³.",
      "Ortak iyon etkisi: Çözeltiye tuzun iyonlarından biri eklenirse denge sola kayar, çözünürlük azalır (Le Chatelier).",
      "Sıcaklık: Çözünmesi endotermik olan tuzların çözünürlüğü sıcaklıkla artar; Kçç yalnızca sıcaklıkla değişir."
    ],
    anlatim: [
      "Kçç küçüldükçe tuz daha az çözünür; ancak farklı tipteki tuzlar (AB ve AB₂) yalnızca Kçç'ye bakılarak karşılaştırılmaz, molar çözünürlük hesaplanmalıdır.",
      "Örneğin AgCl için Kçç = 1,6 · 10⁻¹⁰ ise s = √(1,6 · 10⁻¹⁰) = 1,26 · 10⁻⁵ M'dir. Aynı tuz 0,1 M NaCl içinde çözülürse [Cl⁻] ≈ 0,1 olur ve s = Kçç / 0,1 = 1,6 · 10⁻⁹ M'ye düşer: ortak iyon çözünürlüğü yaklaşık 10 000 kat azaltmıştır.",
      "Böbrek taşı (kalsiyum oksalat), mağara sarkıtları (CaCO₃) ve kazan taşı oluşumu çözünürlük dengesiyle açıklanır."
    ],
    sorular: [
      ["AgCl için çözünürlük çarpımı ifadesi hangisidir?", "Kçç = [Ag⁺] · [Cl⁻]", "Kçç = [AgCl]", "Kçç = [Ag⁺] + [Cl⁻]", "Kçç = [Ag⁺] / [Cl⁻]", "Katı madde denge ifadesine yazılmaz."],
      ["AB tipi bir tuzun molar çözünürlüğü s ise Kçç nedir?", "s²", "2s", "4s³", "s", "AB ⇌ A⁺ + B⁻ → Kçç = s · s = s²"],
      ["AB₂ tipi bir tuzun molar çözünürlüğü s ise Kçç nedir?", "4s³", "s²", "2s²", "s³", "AB₂ ⇌ A²⁺ + 2B⁻ → Kçç = s · (2s)² = 4s³"],
      ["Doygun AgCl çözeltisine NaCl eklenirse AgCl'nin çözünürlüğü nasıl değişir?", "Azalır", "Artar", "Değişmez", "Sonsuz olur", "Ortak iyon (Cl⁻) dengeyi sola kaydırır."],
      ["Kçç değeri hangisiyle değişir?", "Sıcaklık", "Tuz miktarı", "Kabın hacmi", "Karıştırma hızı", "Denge sabitleri yalnızca sıcaklıkla değişir."],
      ["Kçç = 1 · 10⁻¹⁰ olan AB tipi tuzun molar çözünürlüğü kaç M'dir?", "1 · 10⁻⁵", "1 · 10⁻¹⁰", "1 · 10⁻²⁰", "5 · 10⁻⁶", "s = √(10⁻¹⁰) = 10⁻⁵ M"]
    ],
    acik: [["Ortak iyon etkisini Le Chatelier ilkesiyle açıklayınız.", "Doygun çözeltide katı ile iyonlar dengededir. Ortak iyon eklenince o iyonun derişimi artar; sistem bu artışı azaltmak için dengeyi katı oluşumu yönüne (sola) kaydırır, çöken katı artar, çözünürlük azalır."]],
    ornek: [["Kçç = 4 · 10⁻¹² olan XY₂ tuzunun molar çözünürlüğünü bulunuz.", "XY₂ ⇌ X²⁺ + 2Y⁻ → Kçç = s · (2s)² = 4s³. 4s³ = 4 · 10⁻¹² → s³ = 10⁻¹² → s = 10⁻⁴ M."]],
    hata: ["AB₂ tipi tuzda Kçç'yi s² sanmak (doğrusu 4s³).", "Katı maddeyi denge ifadesine yazmak.", "Kçç'nin eklenen ortak iyonla değiştiğini sanmak (çözünürlük değişir, Kçç değişmez)."]
  });

  MUF.unite("kimya", { id: "kimusur", ad: "Sürdürülebilirlik: Yeşil Hidrojen, Nanoteknoloji ve Mikroplastikler (Maarif)", donem: 2 }, [
    {
      id: "kim11s1", ad: "Yeşil Hidrojen, Nanoteknoloji ve Mikro/Nanoplastikler",
      ozet: [
        "Yeşil hidrojen: yenilenebilir kaynaklarla ya da biyolojik yöntemlerle (ör. evsel organik atıkların bakterilerle fermantasyonu) üretilen, üretiminde fosil yakıt kullanılmayan hidrojen.",
        "Fermantasyonla hidrojen verimini etkileyen değişkenler: sıcaklık, pH, atık türü, mikroorganizma türü, süre, oksijensiz ortam.",
        "Nanoteknoloji: 1–100 nanometre boyutundaki maddelerin tasarımı ve kullanımı. Nano boyutta maddelerin yüzey alanı büyür, özellikleri değişir (gümüş nanoparçacıkların antibakteriyel etkisi, güneş kremindeki çinko oksit).",
        "Nanoteknolojinin olası zararları: canlı hücrelere girme, çevrede birikme, uzun vadeli etkilerinin tam bilinmemesi; bu yüzden etik ve güvenlik değerlendirmesi gerekir.",
        "Mikroplastik: 5 mm'den küçük plastik parçaları; nanoplastik: çok daha küçük (1 µm altı) plastik parçaları. Plastik atıkların parçalanmasıyla, sentetik kumaşların yıkanmasıyla ve bazı kozmetiklerden oluşur; besin zincirine ve vücuda girebilir."
      ],
      anlatim: [
        "Hidrojen yandığında yalnızca su açığa çıkar; bu yüzden temiz bir yakıttır. Ancak bugün hidrojenin çoğu doğal gazdan üretilir ve karbondioksit salınır. Yeşil hidrojen bu sorunu ortadan kaldırmayı amaçlar.",
        "Bir araştırma tasarımında bağımsız değişken (ör. sıcaklık) değiştirilir, bağımlı değişken (oluşan hidrojen hacmi) ölçülür, diğer değişkenler (atık miktarı, pH, süre) sabit tutulur; böylece neden-sonuç ilişkisi sınanır.",
        "Mikroplastiklerle mücadele: tek kullanımlık plastiği azaltmak, atıkları ayrıştırmak, sentetik giysileri daha az ve filtreli makinelerde yıkamak, mikroplastik içeren kozmetiklerden kaçınmak."
      ],
      sorular: [
        ["Yeşil hidrojen için hangisi doğrudur?", "Üretiminde fosil yakıt kullanılmayan, yenilenebilir ya da biyolojik yolla elde edilen hidrojendir.", "Doğal gazdan üretilen hidrojendir.", "Yeşil renkli bir gazdır.", "Yandığında karbondioksit açığa çıkarır.", "Hidrojenin 'yeşil' olması üretim yönteminin çevre dostu olduğunu anlatır."],
        ["Hidrojen yandığında hangi madde oluşur?", "Su", "Karbondioksit", "Kükürt dioksit", "Karbon monoksit", "2H₂ + O₂ → 2H₂O"],
        ["Mikroplastik hangi boyuttaki plastik parçalarına denir?", "5 mm'den küçük", "5 cm'den büyük", "1 m'den büyük", "Yalnızca 1 nm'den küçük", "Mikroplastikler 5 mm'den küçük plastik parçalarıdır."],
        ["Nanoteknolojide maddelerin özelliklerinin değişmesinin temel sebebi nedir?", "Yüzey alanının hacme göre çok büyümesi", "Maddelerin kütlesinin artması", "Atomların türünün değişmesi", "Maddelerin renginin hep aynı kalması", "Nano boyutta yüzey atomlarının oranı artar, özellikler değişir."],
        ["Hangisi mikroplastik kirliliğini azaltmaya yönelik bir davranıştır?", "Tek kullanımlık plastik tüketimini azaltmak", "Plastik atıkları denize atmak", "Mikroboncuk içeren kozmetikleri tercih etmek", "Plastik poşetleri yakmak", "Kaynağında azaltmak en etkili yoldur."]
      ],
      acik: [["Evsel atıklardan fermantasyonla hidrojen üretimini araştıran bir deneyde bağımsız, bağımlı ve kontrol değişkenlerini belirleyiniz.", "Bağımsız değişken: örneğin ortam sıcaklığı (25, 35, 45 °C). Bağımlı değişken: oluşan hidrojen gazı hacmi. Kontrol değişkenleri: atık türü ve miktarı, pH, süre, mikroorganizma türü, oksijensiz ortam."]],
      ornek: [["Gümüş nanoparçacıklı çorapların 'koku yapmaz' diye satılması hakkında eleştirel bir değerlendirme yapınız.", "Yarar: gümüş nanoparçacıklar bakterileri azaltarak kokuyu önleyebilir. Olası zarar: yıkamada nanoparçacıklar atık suya geçip sudaki canlılara zarar verebilir; uzun vadeli etkileri tam bilinmez. Sonuç: ürünün yararı ile çevre ve sağlık riskleri birlikte tartılmalı, bilimsel kanıtlar ve düzenlemeler dikkate alınmalıdır."]],
      hata: ["'Yeşil' hidrojenin gazın rengini anlattığını sanmak.", "Nano ürünlerin hiçbir riski olmadığını ya da hepsinin zararlı olduğunu düşünmek; her ürün ayrı değerlendirilmelidir."]
    }
  ]);

  const U = (window.URETEC = window.URETEC || {});
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const karis = (a) => a.slice().sort(() => Math.random() - 0.5);
  const ond = (x) => String(Math.round(x * 1000) / 1000).replace(".", ",");
  function soru(metin, dogru, yanlislar, cozum) {
    const s = [String(dogru)];
    for (const y of karis(yanlislar)) { const t = String(y); if (s.length < 4 && t && !s.includes(t)) s.push(t); }
    return s.length === 4 ? { soru: metin, secenekler: s, dogru: 0, cozum } : null;
  }
  const tip = (l) => () => { for (let i = 0; i < 30; i++) { const q = pick(l)(); if (q) return q; } return null; };
  const ust = (n) => String(n).split("").map((c) => ({ "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" }[c])).join("");

  U.kim4k3 = tip([
    () => { const n = r(1, 4), a = pick(["HCl", "HNO₃"]); return soru(`25 °C'de 1 · 10${ust(-n)} M ${a} çözeltisinin pH değeri kaçtır?`, String(n), [String(14 - n), String(n + 1), String(7)].filter((x) => x !== String(n)), `Kuvvetli asit tamamen iyonlaşır: [H₃O⁺] = 10${ust(-n)} M → pH = ${n}`); },
    () => { const n = r(1, 4), b = pick(["NaOH", "KOH"]); return soru(`25 °C'de 1 · 10${ust(-n)} M ${b} çözeltisinin pH değeri kaçtır?`, String(14 - n), [String(n), String(7), String(14 - n - 1)], `[OH⁻] = 10${ust(-n)} → pOH = ${n} → pH = 14 − ${n} = ${14 - n}`); },
    () => { const p = r(1, 13); return soru(`25 °C'de pH değeri ${p} olan çözeltinin pOH değeri kaçtır?`, String(14 - p), [String(p), "7", String(Math.abs(7 - p) || 1)].filter((x) => x !== String(14 - p)), `pH + pOH = 14 → pOH = ${14 - p}`); },
    () => { const Mb = pick([0.1, 0.2, 0.5]), Vb = pick([20, 40, 50, 100]), Va = pick([10, 20, 25, 50]); const Ma = (Mb * Vb) / Va; if (Ma * 1000 !== Math.round(Ma * 1000)) return null; return soru(`${Va} mL HCl çözeltisi ${ond(Mb)} M NaOH çözeltisinden ${Vb} mL ile tam nötrleşiyor. HCl'nin derişimi kaç M'dir?`, ond(Ma), [ond(Mb), ond((Mb * Va) / Vb), ond(Ma * 2)], `Ma · ${Va} = ${ond(Mb)} · ${Vb} → Ma = ${ond(Ma)} M`); },
    () => { const [k, z] = pick([["HCl", "CH₃COOH"], ["HNO₃", "HF"], ["H₂SO₄", "H₂CO₃"]]); return soru("Hangisi kuvvetli bir asittir?", k, [z, "NH₃", "H₂O"], `${k} suda tamamen iyonlaşır; ${z} zayıf asittir.`); },
    () => soru("Brønsted–Lowry tanımına göre baz nedir?", "Proton (H⁺) alan tür", ["Proton veren tür", "Suda H⁺ veren tür", "Elektron alan tür"], "Brønsted–Lowry bazı proton alıcıdır.")
  ]);

  U.kim4k4 = tip([
    () => { const e = pick([4, 6, 8, 10, 12]); return soru(`Kçç = 1 · 10${ust(-e)} olan AB tipi tuzun molar çözünürlüğü kaç M'dir?`, `1 · 10${ust(-e / 2)}`, [`1 · 10${ust(-e)}`, `1 · 10${ust(-2 * e)}`, `5 · 10${ust(-e / 2 - 1)}`], `Kçç = s² → s = √(10${ust(-e)}) = 10${ust(-e / 2)} M`); },
    () => { const e = pick([3, 6, 9, 12]); return soru(`Kçç = 4 · 10${ust(-e)} olan XY₂ tipi tuzun molar çözünürlüğü kaç M'dir?`, `1 · 10${ust(-e / 3)}`, [`2 · 10${ust(-e / 2)}`, `1 · 10${ust(-e)}`, `4 · 10${ust(-e / 3)}`], `Kçç = 4s³ → s³ = 10${ust(-e)} → s = 10${ust(-e / 3)} M`); },
    () => { const [t, i] = pick([["AgCl", "NaCl"], ["CaF₂", "NaF"], ["BaSO₄", "Na₂SO₄"], ["PbI₂", "KI"]]); return soru(`Doygun ${t} çözeltisine ${i} eklenirse ${t} tuzunun çözünürlüğü nasıl değişir?`, "Azalır", ["Artar", "Değişmez", "Önce artar sonra azalır"], "Ortak iyon etkisi: denge katı yönüne kayar, çözünürlük azalır."); },
    () => { const [t, f] = pick([["AgCl", "[Ag⁺] · [Cl⁻]"], ["CaF₂", "[Ca²⁺] · [F⁻]²"], ["PbI₂", "[Pb²⁺] · [I⁻]²"], ["Ag₂CrO₄", "[Ag⁺]² · [CrO₄²⁻]"]]); return soru(`${t} için çözünürlük çarpımı (Kçç) ifadesi hangisidir?`, `Kçç = ${f}`, [`Kçç = [${t}]`, `Kçç = ${f.replace(" · ", " + ")}`, `Kçç = ${f.replace(/²/g, "")}`, `Kçç = 1 / (${f})`].filter((x) => x !== `Kçç = ${f}`), "Katı madde yazılmaz; iyon derişimleri katsayıları kadar üs alınarak çarpılır."); }
  ]);
})();
