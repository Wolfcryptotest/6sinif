// 12. sınıf Fizik, Kimya, Biyoloji: MEB 12. sınıf programına göre eksik konular ve tüm konulara çözümlü örnekler / sık yapılan hatalar
(function () {
  if (!window.MUF || !window.ICERIK) return;
  const I = window.ICERIK;

  if (I.fizik) {
    MUF.konu("fizik", "fizu1", 1, {
      id: "fizcm2", ad: "Dönerek Öteleme, Açısal Momentum ve Kepler Yasaları",
      ozet: [
        "Eylemsizlik momenti I: cismin dönmeye karşı direnci (kütle ve kütlenin eksene uzaklığına bağlı)",
        "Dönme kinetik enerjisi E = ½ · I · ω² · Dönerek ilerleyen cisimde toplam E = ½mv² + ½Iω²",
        "Açısal momentum L = I · ω (noktasal cisim için L = m · v · r)",
        "Dış tork yoksa açısal momentum korunur: I₁ω₁ = I₂ω₂",
        "Kepler: 1) yörüngeler elips, Güneş odakta · 2) eşit zamanda eşit alan · 3) T² / r³ = sabit"
      ],
      anlatim: [
        "Dönerek ilerleyen bir top ya da tekerlek hem öteleme hem dönme hareketi yapar; bu yüzden kinetik enerjisi iki parçadan oluşur. Aynı yükseklikten bırakılan kayan bir kutu ile yuvarlanan bir silindirden kutu tabana daha hızlı ulaşır, çünkü silindirin enerjisinin bir kısmı dönmeye gider.",
        "Açısal momentum, dönen cismin 'dönme miktarıdır'. Dış tork yoksa korunur: buz patencisi kollarını kendine çektiğinde eylemsizlik momenti azalır, açısal hızı artar ve daha hızlı döner.",
        "Kepler'in ikinci yasası açısal momentumun korunumunun sonucudur: gezegen Güneş'e yaklaştığında (r küçülür) hızı artar, uzaklaştığında yavaşlar. Üçüncü yasaya göre Güneş'ten uzak gezegenlerin yılı daha uzundur."
      ],
      sorular: [
        ["Kollarını açıp kapayan buz patencisi kollarını kendine çektiğinde ne olur?", "Açısal hızı artar", "Açısal hızı azalır", "Açısal momentumu artar", "Eylemsizlik momenti artar", "L = Iω korunur; I azalır, ω artar"],
        ["Bir gezegen yörüngesinde Güneş'e en yakın konumdayken hızı için ne söylenebilir?", "En büyüktür", "En küçüktür", "Sıfırdır", "Her yerde aynıdır", "Kepler'in 2. yasası"],
        ["Eylemsizlik momenti 2 kg·m² olan cisim 3 rad/s ile dönüyor. Açısal momentumu kaç kg·m²/s'dir?", "6", "1,5", "9", "18", "L = I·ω = 2·3"],
        ["Kepler'in 3. yasasına göre yörünge yarıçapı büyüdükçe periyot nasıl değişir?", "Artar", "Azalır", "Değişmez", "Önce artar sonra azalır", "T² ∝ r³"],
        ["Aynı eğik düzlemden bırakılan sürtünmesiz kayan kutu ile yuvarlanan silindirden hangisi tabana önce ulaşır?", "Kayan kutu", "Yuvarlanan silindir", "Aynı anda ulaşırlar", "Kütleye bağlıdır", "Silindirin enerjisinin bir kısmı dönmeye gider"]
      ],
      acik: [
        ["Eylemsizlik momenti 4 kg·m² olan dönen bir sandalyede 2 rad/s ile dönen öğrenci kollarını kapatınca eylemsizlik momenti 2 kg·m²'ye iniyor. Yeni açısal hızı bulunuz.", "Açısal momentum korunur: I₁ω₁ = I₂ω₂ → 4 · 2 = 2 · ω₂ → ω₂ = 4 rad/s."]
      ],
      ornek: [
        ["Kütlesi 2 kg olan bir cisim 0,5 m yarıçaplı çemberde 3 m/s hızla dönüyor. Açısal momentumunu bulunuz.", "Noktasal cisim için L = m · v · r = 2 · 3 · 0,5 = 3 kg·m²/s."],
        ["Bir gezegenin Güneş'e uzaklığı başka bir gezegeninkinin 4 katıdır. Periyotları oranı nedir?", "Kepler'in 3. yasası: T² ∝ r³. T₁²/T₂² = 4³ = 64 → T₁/T₂ = 8. Uzaktaki gezegenin yılı 8 kat uzundur."]
      ],
      hata: [
        "Açısal momentum korunurken açısal hızın da sabit kaldığını sanmak: I değişirse ω değişir.",
        "Yuvarlanan cismin kinetik enerjisinde dönme enerjisini unutmak."
      ]
    });

    MUF.konu("fizik", "fizu2", 1, {
      id: "fizdg2", ad: "Dalga Mekaniği: Kırınım, Girişim, Doppler ve Elektromanyetik Dalgalar",
      ozet: [
        "Kırınım: dalga, boyutu dalga boyuna yakın yarıktan geçerken yayılarak bükülür (yarık daraldıkça kırınım artar)",
        "Çift yarıkta saçak aralığı Δx = λ · L / d (λ: dalga boyu, L: perde uzaklığı, d: yarık aralığı)",
        "Yapıcı girişim: yol farkı nλ (aydınlık) · yıkıcı girişim: yol farkı (n − ½)λ (karanlık)",
        "Doppler olayı: kaynak yaklaşırken algılanan frekans artar, uzaklaşırken azalır",
        "Elektromanyetik dalgalar boşlukta ışık hızıyla (c = 3·10⁸ m/s) yayılır · c = λ · f",
        "Spektrum (artan frekans): radyo, mikrodalga, kızılötesi, görünür ışık, morötesi, X, gama"
      ],
      anlatim: [
        "Girişim, iki dalganın aynı noktada üst üste binmesidir. Tepeler tepelerle buluşursa dalga güçlenir (yapıcı), tepe çukurla buluşursa söner (yıkıcı). Young deneyinde perdede görülen aydınlık-karanlık çizgiler bunun sonucudur.",
        "Saçak aralığı Δx = λL/d bağıntısıyla hesaplanır: dalga boyu ya da perde uzaklığı arttıkça saçaklar genişler, yarıklar birbirine yaklaştıkça yine genişler. Kırmızı ışığın dalga boyu mordan büyük olduğu için kırmızıda saçaklar daha geniştir.",
        "Doppler olayında kaynağın yaydığı frekans değişmez; değişen, gözlemcinin algıladığı frekanstır. Yaklaşan ambulans sireninin ince, uzaklaşanın kalın duyulması buna örnektir. Gökbilimciler uzaklaşan galaksilerin ışığındaki kırmızıya kaymadan evrenin genişlediğini anlamıştır.",
        "Elektromanyetik dalgalar maddesel ortama ihtiyaç duymaz; hepsi boşlukta aynı hızla gider, yalnızca frekans ve dalga boyları farklıdır. Frekans büyüdükçe enerji artar; bu yüzden morötesi, X ve gama ışınları canlı dokuya zarar verebilir."
      ],
      sorular: [
        ["Çift yarık deneyinde yarıklar arası uzaklık azaltılırsa saçak aralığı ne olur?", "Artar", "Azalır", "Değişmez", "Saçaklar kaybolur", "Δx = λL/d; d azalırsa Δx artar"],
        ["Yaklaşan bir ambulansın siren sesi için hangisi doğrudur?", "Algılanan frekans artar", "Algılanan frekans azalır", "Sesin hızı artar", "Sirenin yaydığı frekans değişir", "Doppler olayı"],
        ["Hangisinin frekansı en büyüktür?", "Gama ışınları", "Radyo dalgaları", "Kızılötesi", "Görünür ışık", "Spektrumun yüksek frekans ucu"],
        ["Frekansı 6·10¹⁴ Hz olan ışığın boşluktaki dalga boyu kaç m'dir? (c = 3·10⁸ m/s)", "5·10⁻⁷", "2·10⁻⁷", "5·10⁷", "18·10²²", "λ = c/f"],
        ["Yapıcı girişimde iki dalganın yol farkı hangisi olabilir?", "2λ", "λ/2", "3λ/2", "5λ/2", "Yol farkı nλ"]
      ],
      acik: [
        ["Çift yarık deneyinde λ = 600 nm, yarık aralığı d = 0,3 mm ve perde uzaklığı L = 1,5 m'dir. Saçak aralığını bulunuz.", "Δx = λL/d = (600·10⁻⁹ · 1,5) / (0,3·10⁻³) = 9·10⁻⁷ / 3·10⁻⁴ = 3·10⁻³ m = 3 mm."]
      ],
      ornek: [
        ["Çift yarık deneyi önce kırmızı, sonra mor ışıkla yapılıyor. Hangisinde saçak aralığı daha büyüktür?", "Δx = λL/d. Kırmızı ışığın dalga boyu mordan büyük olduğundan (L ve d aynıyken) kırmızıda saçak aralığı daha büyüktür."],
        ["FM radyo istasyonu 100 MHz frekansta yayın yapıyor. Dalga boyu kaç metredir?", "λ = c/f = 3·10⁸ / 10⁸ = 3 m."]
      ],
      hata: [
        "Doppler olayında kaynağın yaydığı frekansın değiştiğini sanmak: değişen, algılanan frekanstır.",
        "Elektromanyetik dalgaların boşlukta farklı hızlarda gittiğini sanmak: hepsi c hızıyla gider."
      ]
    });

    MUF.unite("fizik", { id: "fizutk", ad: "Modern Fiziğin Teknolojideki Uygulamaları", donem: 2 }, [
      {
        id: "fiztk1", ad: "Görüntüleme, Yarı İletkenler, Süper İletkenler, Lazer ve Nanoteknoloji",
        ozet: [
          "Röntgen ve bilgisayarlı tomografi (BT): X ışınları dokulardan farklı oranda geçer · MR: güçlü manyetik alan ve radyo dalgası",
          "Ultrason: yüksek frekanslı ses dalgalarının yansıması · PET: pozitron yayan izleyici madde",
          "Yarı iletkenler (silisyum, germanyum): katkılama ile n-tipi ve p-tipi · diyot akımı tek yönde geçirir · LED ışık yayan diyottur",
          "Transistör: akımı yükselten ya da anahtarlayan devre elemanı (bilgisayar işlemcileri)",
          "Süper iletken: belli bir sıcaklığın altında direnci sıfır olan madde (MR mıknatısları, maglev tren)",
          "Lazer: aynı frekans ve fazda, tek yönlü yoğun ışık · Nanoteknoloji: 1–100 nanometre ölçeğinde malzeme"
        ],
        anlatim: [
          "Modern fizik, günlük hayatta kullandığımız pek çok teknolojinin temelidir. Tıpta röntgen ve tomografi X ışınlarının dokulardan farklı geçmesinden, MR atom çekirdeklerinin manyetik alandaki davranışından, PET ise radyoaktif izleyicilerden yararlanır. Ultrason iyonlaştırıcı ışın kullanmadığı için hamilelikte tercih edilir.",
          "Yarı iletkenlerin iletkenliği iletkenlerle yalıtkanlar arasındadır ve katkılama ile kontrol edilir. p ve n tipi yarı iletkenlerin birleştirilmesiyle diyot, üç katmanla transistör yapılır. Bugünkü bilgisayar, telefon ve güneş panellerinin hepsi bu elemanlara dayanır.",
          "Süper iletkenler çok düşük sıcaklıklarda direnci tamamen kaybeder; içinden geçen akım enerji kaybı olmadan dolaşır. Bu özellik çok güçlü elektromıknatıslar yapmayı sağlar.",
          "Lazer ışığı tek renkli (tek frekans), aynı fazlı ve paralel olduğu için çok uzağa dağılmadan gider; göz ameliyatlarından barkod okuyuculara ve fiber optik iletişime kadar kullanılır. Nanoteknolojide malzemelerin nanometre boyutunda farklı özellikler kazanmasından yararlanılır (leke tutmayan kumaşlar, güneş kremlerindeki nanoparçacıklar)."
        ],
        sorular: [
          ["Hamilelikte bebeğin görüntülenmesinde iyonlaştırıcı ışın kullanmadığı için tercih edilen yöntem hangisidir?", "Ultrason", "Röntgen", "Bilgisayarlı tomografi", "PET", "Ses dalgası kullanır"],
          ["Akımı yalnızca bir yönde geçiren yarı iletken devre elemanı hangisidir?", "Diyot", "Direnç", "Kondansatör", "Bobin", "p-n eklemi"],
          ["Belli bir sıcaklığın altında elektriksel direnci sıfır olan maddelere ne denir?", "Süper iletken", "Yarı iletken", "Yalıtkan", "Ferromanyetik", "Direnç sıfır"],
          ["Lazer ışığının özelliği hangisidir?", "Tek frekanslı ve aynı fazlıdır", "Tüm renkleri içerir", "Her yöne eşit yayılır", "Boşlukta yayılamaz", "Tek renk, eş faz, paralel"],
          ["MR cihazının çalışma ilkesi hangisine dayanır?", "Güçlü manyetik alan ve radyo dalgaları", "X ışınları", "Ses dalgaları", "Gama ışınları", "Çekirdeklerin manyetik davranışı"]
        ],
        acik: [
          ["Röntgen ile MR'ı çalışma ilkesi ve hasta güvenliği açısından karşılaştırınız.", "Röntgen X ışını kullanır; kemik gibi yoğun dokular ışını tutar ve görüntüde beyaz görünür. X ışını iyonlaştırıcıdır, sık çekim önerilmez. MR güçlü manyetik alan ve radyo dalgası kullanır, iyonlaştırıcı ışın içermez ve yumuşak dokuları iyi gösterir; ama vücutta metal bulunan hastalarda tehlikelidir."]
        ],
        ornek: [
          ["Güneş paneli, ışığı elektriğe nasıl çevirir?", "Panel, p ve n tipi yarı iletkenlerden oluşur. Gelen fotonlar yarı iletkende elektronları koparır (fotoelektrik olaya benzer). p-n eklemindeki elektrik alan bu elektronları tek yöne iter ve devrede akım oluşur."],
          ["LED ampuller neden akkor ampullerden daha verimlidir?", "Akkor ampul teli ısıtarak ışık verir; enerjinin çoğu ısıya gider. LED'de elektronlar yarı iletkende enerji düzeyi değiştirirken doğrudan foton yayar; çok daha az enerji ısıya dönüşür."]
        ],
        hata: [
          "Ultrasonda X ışını kullanıldığını sanmak: ultrason ses dalgasıdır.",
          "Yarı iletkeni 'yarısı iletken madde' sanmak: iletkenliği sıcaklık ve katkılamayla değişen maddedir."
        ]
      }
    ]);

    MUF.zengin("fiz1k1", {
      ornek: [
        ["Kütlesi 0,2 kg olan bir taş 0,5 m'lik ipin ucunda saniyede 2 tur atıyor. Taşın hızını ve ipteki merkezcil kuvveti bulunuz.", "1) f = 2 Hz → T = 0,5 s. 2) v = 2πr/T = 2 · 3 · 0,5 / 0,5 = 6 m/s (π ≈ 3). 3) F = mv²/r = 0,2 · 36 / 0,5 = 14,4 N."],
        ["Bir uydunun yörünge yarıçapı 2 katına çıkarılırsa Dünya'nın uyguladığı çekim kuvveti nasıl değişir?", "F = G·M·m/d². d iki katına çıkarsa F, 2² = 4'e bölünür: kuvvet 1/4'üne iner."]
      ],
      hata: [
        "Düzgün çembersel harekette ivmenin sıfır olduğunu sanmak: hızın yönü değiştiği için merkezcil ivme vardır.",
        "Merkezcil kuvveti ayrı bir kuvvet sanmak: ip gerilmesi, sürtünme ya da kütle çekimi merkezcil kuvvet görevi yapar."
      ]
    });
    MUF.zengin("fiz2k1", {
      ornek: [
        ["Boyu 1 m olan basit sarkacın periyodunu bulunuz. (g = 10 m/s², π ≈ 3)", "T = 2π√(L/g) = 2 · 3 · √(1/10) ≈ 6 · 0,316 ≈ 1,9 s."],
        ["Yay sabiti 100 N/m olan yaya 1 kg kütle asılıyor. Periyot kaç saniyedir? (π ≈ 3)", "T = 2π√(m/k) = 2 · 3 · √(1/100) = 6 · 0,1 = 0,6 s."]
      ],
      hata: [
        "Basit sarkacın periyodunun kütleye bağlı olduğunu sanmak.",
        "Basit harmonik harekette ivmenin denge noktasında en büyük olduğunu sanmak: denge noktasında ivme sıfır, hız en büyüktür."
      ]
    });
    MUF.zengin("fiz3k1", {
      ornek: [
        ["²³⁸₉₂U çekirdeği bir alfa bozunması yapıyor. Oluşan çekirdeğin kütle ve atom numarası nedir?", "Alfa parçacığı ⁴₂He'dur. Kütle numarası 238 − 4 = 234, atom numarası 92 − 2 = 90 olur: ²³⁴₉₀Th (toryum)."],
        ["Bohr modeline göre hidrojen atomunda elektron 3. düzeyden 1. düzeye inerse ne olur?", "Elektron yüksek enerji düzeyinden düşük düzeye indiği için aradaki enerji farkı kadar enerjili bir foton yayar (E = h·f)."]
      ],
      hata: [
        "Beta bozunmasında kütle numarasının değiştiğini sanmak: beta bozunmasında kütle numarası aynı kalır, atom numarası 1 artar.",
        "Yarılanma süresi geçince maddenin tamamen bittiğini sanmak: her yarılanma süresinde kalan miktarın yarısı bozunur."
      ]
    });
    MUF.zengin("fiz4k1", {
      ozet: ["Compton olayı: X ışını fotonu elektrona çarpınca enerji kaybeder, dalga boyu artar (fotonun momentumu var)", "de Broglie: hareketli her parçacığın dalga boyu vardır: λ = h / (m · v)"],
      anlatim: ["Compton saçılması, fotonun bir parçacık gibi momentum taşıdığını gösterir: elektrona çarpan foton enerjisinin bir kısmını aktarır ve daha büyük dalga boyuyla saçılır. de Broglie ise tersini önerdi: elektron gibi parçacıklar da dalga özelliği gösterir. Elektron mikroskobu, elektronların dalga boyunun ışığınkinden çok küçük olmasından yararlanarak çok küçük ayrıntıları görüntüler."],
      ornek: [
        ["Eşik enerjisi 2,5 eV olan metale enerjisi 4 eV olan fotonlar düşürülüyor. Sökülen elektronların maksimum kinetik enerjisi nedir? Foton enerjisi 2 eV olsaydı ne olurdu?", "1) Eₖ = E − W₀ = 4 − 2,5 = 1,5 eV. 2) 2 eV < 2,5 eV olduğundan elektron sökülemez; ışık şiddeti artırılsa bile sökülmez."],
        ["Kütlesi büyük bir top ile elektronun hızları eşitse hangisinin de Broglie dalga boyu daha büyüktür?", "λ = h/(m·v). Hızlar eşitken kütlesi küçük olanın dalga boyu büyüktür: elektronun. Topun dalga boyu ölçülemeyecek kadar küçüktür."]
      ],
      hata: [
        "Işık şiddeti artınca elektronların kinetik enerjisinin arttığını sanmak: kinetik enerjiyi frekans belirler.",
        "Dalga ve tanecik modelinin birbirini dışladığını sanmak: ışık deneye göre her iki özelliği de gösterir."
      ]
    });
  }

  if (I.kimya) {
    MUF.zengin("kim1k1", {
      ornek: [
        ["Zn(k) + Cu²⁺(suda) → Zn²⁺(suda) + Cu(k) tepkimesinde yükseltgenen ve indirgenen türleri, pilde anot ve katodu belirleyiniz. (E°: Zn²⁺/Zn = −0,76 V, Cu²⁺/Cu = +0,34 V)", "1) Zn elektron verir (0 → +2): yükseltgenir, anottur. 2) Cu²⁺ elektron alır (+2 → 0): indirgenir, katot bakırdır. 3) E°pil = E°katot − E°anot = 0,34 − (−0,76) = 1,10 V; pozitif olduğundan tepkime istemlidir."],
        ["CuSO₄ çözeltisinden 9650 C yük geçirilirse katotta kaç gram bakır toplanır? (Cu = 64, 1 mol e⁻ = 96500 C)", "1) 9650 / 96500 = 0,1 mol elektron. 2) Cu²⁺ + 2e⁻ → Cu: 0,1 mol e⁻ ile 0,05 mol Cu. 3) 0,05 · 64 = 3,2 g bakır."],
        ["H₂SO₄ bileşiğinde kükürdün yükseltgenme basamağı kaçtır?", "H: +1, O: −2. 2(+1) + x + 4(−2) = 0 → x = +6."]
      ],
      hata: [
        "Anotta indirgenme olduğunu sanmak: anotta yükseltgenme, katotta indirgenme olur.",
        "Yarı tepkimeyi bir sayıyla çarpınca standart potansiyeli de çarpmak: E° çarpılmaz."
      ]
    });
    MUF.zengin("kim2k1", {
      ornek: [
        ["C₄H₁₀ formülüne sahip kaç farklı yapı izomeri vardır? Adlandırınız.", "Karbonlar düz zincir hâlinde: bütan. Bir karbon dallanmış: 2-metilpropan (izobütan). Toplam 2 yapı izomeri vardır."],
        ["Propanın (C₃H₈) tam yanma denklemini denkleştiriniz.", "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Karbon: 3 = 3, hidrojen: 8 = 8, oksijen: 10 = 6 + 4 ✓"],
        ["CH₄, C₂H₄ ve C₂H₂ moleküllerinde karbon atomlarının hibritleşme türü nedir?", "CH₄: 4 tekli bağ → sp³ (109,5°). C₂H₄: bir ikili bağ → sp² (120°). C₂H₂: bir üçlü bağ → sp (180°)."]
      ],
      hata: [
        "Alken ve alkinlerin genel formüllerini karıştırmak: alkan CₙH₂ₙ₊₂, alken CₙH₂ₙ, alkin CₙH₂ₙ₋₂.",
        "Zincir sadece döndürülerek çizildiğinde farklı bir izomer oluştuğunu sanmak."
      ]
    });
    MUF.zengin("kim3k1", {
      ornek: [
        ["Asetik asit (CH₃COOH) ile etanolün (C₂H₅OH) tepkimesinde ne oluşur? Tepkimenin adı nedir?", "CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O. Ürün etil asetat (ester) ve sudur; tepkime esterleşmedir. Esterler meyvelere kokusunu veren bileşiklerdir."],
        ["Etanolün kontrollü yükseltgenmesiyle sırasıyla hangi bileşikler oluşur?", "Birincil alkol önce aldehite, sonra karboksilik aside yükseltgenir: etanol → etanal (asetaldehit) → etanoik asit (asetik asit)."]
      ],
      hata: [
        "Alkollerin suda bazik özellik gösterdiğini sanmak: –OH grubu iyonlaşmaz, alkoller nötrdür.",
        "Ester ile eteri karıştırmak: ester –COO–, eter –O– grubu içerir."
      ]
    });
    MUF.zengin("kim4k1", {
      ornek: [
        ["CH₄ + 2O₂ → CO₂ + 2H₂O tepkimesinde 1 mol metan yandığında 890 kJ ısı açığa çıkıyor. 8 g metan yanarsa kaç kJ ısı açığa çıkar? (CH₄ = 16 g/mol)", "8 / 16 = 0,5 mol metan. 0,5 · 890 = 445 kJ ısı açığa çıkar."],
        ["Hidrojen yakıt pilinin fosil yakıtlara göre çevresel üstünlüğü nedir?", "Hidrojen oksijenle birleştiğinde ürün yalnızca sudur (2H₂ + O₂ → 2H₂O); karbondioksit oluşmaz, sera etkisine katkı yapmaz. Ancak hidrojenin üretiminde kullanılan enerjinin kaynağı da önemlidir."]
      ],
      hata: [
        "Doğal gazın yanmasının hiç sera gazı üretmediğini sanmak: CO₂ oluşur, ama kömüre göre daha azdır.",
        "Yenilenebilir enerjiyi 'hiç çevresel etkisi olmayan' enerji sanmak."
      ]
    });
  }

  if (I.biyoloji) {
    MUF.zengin("bio1k1", {
      ornek: [
        ["Bir DNA molekülündeki nükleotitlerin %30'u adenin ise guanin oranı yüzde kaçtır?", "Chargaff kuralı: A = T ve G = C. A = %30 → T = %30. Kalan %40, G ve C arasında eşit paylaşılır: G = %20."],
        ["Bir mRNA'da durdurma kodonu dahil 101 kodon vardır. Bu mRNA'dan sentezlenen polipeptitte kaç amino asit bulunur? Kaç peptit bağı oluşur?", "Durdurma kodonu amino asit şifrelemez: 101 − 1 = 100 amino asit. Peptit bağı sayısı = amino asit sayısı − 1 = 99."],
        ["mRNA üzerindeki AUG kodonuna karşılık gelen tRNA antikodonu nedir?", "Baz eşleşmesi A–U, G–C kuralıyla: AUG → UAC."]
      ],
      hata: [
        "RNA'da timin olduğunu sanmak: RNA'da timin yerine urasil bulunur.",
        "Replikasyonun korunumlu olduğunu sanmak: DNA eşlenmesi yarı korunumludur, yeni her molekülde bir eski bir yeni zincir vardır."
      ]
    });
    MUF.zengin("bio2k1", {
      ornek: [
        ["Fotosentezin ışığa bağımlı ve ışıktan bağımsız tepkimeleri kloroplastın neresinde gerçekleşir? Ürünleri nedir?", "Işığa bağımlı tepkimeler tilakoit zarlarında olur; su parçalanır, O₂ açığa çıkar, ATP ve NADPH üretilir. Işıktan bağımsız tepkimeler (Calvin döngüsü) stromada olur; ATP ve NADPH kullanılarak CO₂'den glikoz üretilir."],
        ["Bir glikozun oksijenli solunumla ve fermantasyonla yıkılmasında net ATP kazancı nasıl farklıdır?", "Fermantasyonda yalnızca glikolizden net 2 ATP elde edilir. Oksijenli solunumda glikoliz, Krebs döngüsü ve elektron taşıma sistemi sonunda yaklaşık 32–38 ATP elde edilir; bu yüzden oksijenli solunum çok daha verimlidir."]
      ],
      hata: [
        "Bitkilerin yalnızca fotosentez yapıp solunum yapmadığını sanmak: bitkiler gece ve gündüz solunum yapar.",
        "Fotosentezde açığa çıkan oksijenin CO₂'den geldiğini sanmak: oksijen suyun parçalanmasından gelir."
      ]
    });
    MUF.zengin("bio3k1", {
      ornek: [
        ["Çiçekli bitkilerde çift döllenme nasıl gerçekleşir? Oluşan yapıların kromozom sayısı nedir?", "Polen tüpündeki iki sperm çekirdeğinden biri yumurta hücresiyle birleşerek zigotu (2n) oluşturur. Diğeri iki polar çekirdekle birleşerek besin dokusu olan endospermi (3n) oluşturur."],
        ["Bir bitkinin gövdesinden halka şeklinde kabuk soyulursa (floem kesilirse) ne olur?", "Floem yaprakta üretilen besinleri köke taşır. Halka kesilince besin köke ulaşamaz, kök zamanla ölür ve bitki kurur. Ksilem içte kaldığı için su bir süre yukarı taşınmaya devam eder."]
      ],
      hata: [
        "Ksilem ve floemin görevlerini karıştırmak: ksilem su ve mineral, floem organik besin taşır.",
        "Tozlaşmayı döllenme sanmak: tozlaşma polenin tepeciğe ulaşması, döllenme çekirdeklerin birleşmesidir."
      ]
    });
    MUF.zengin("bio4k1", {
      ornek: [
        ["Bir besin zincirinde üreticilerin depoladığı enerji 20 000 kJ ise üçüncül tüketicilere ulaşan enerji yaklaşık kaç kJ'dür? (%10 kuralı)", "Her basamakta enerjinin yaklaşık %10'u aktarılır: üretici 20 000 → birincil tüketici 2000 → ikincil 200 → üçüncül 20 kJ."],
        ["DDT gibi tarım ilaçları besin zincirinin hangi halkasında en yüksek derişime ulaşır? Neden?", "En üst tüketicilerde (yırtıcı kuşlar gibi). Bu maddeler vücuttan atılamaz ve dokularda birikir; her basamakta çok sayıda canlı tüketildiği için derişim yukarı doğru artar (biyolojik birikim)."]
      ],
      hata: [
        "Enerjinin ekosistemde döngü hâlinde dolaştığını sanmak: madde döngüsel, enerji tek yönlü akar.",
        "Ayrıştırıcıların besin zincirinde gereksiz olduğunu sanmak: mineralleri toprağa geri kazandırırlar."
      ]
    });
  }

  // Açısal momentum konusu için özel üreteç (genel 'momentum' üretecinin çizgisel momentum sorusu vermemesi için)
  const U = (window.URETEC = window.URETEC || {});
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const sor = (soru, d, y, cozum) => { const s = [String(d)]; for (const x of y) if (s.length < 4 && !s.includes(String(x))) s.push(String(x)); return s.length === 4 ? { soru, secenekler: s, dogru: 0, cozum } : null; };
  U.fizcm2 = () => { for (let i = 0; i < 20; i++) { const q = pick([
    () => { const I = r(1, 6), w = r(2, 8); return sor(`Eylemsizlik momenti ${I} kg·m² olan cisim ${w} rad/s açısal hızla dönüyor. Açısal momentumu kaç kg·m²/s'dir?`, I * w, [I + w, I * w * 2, w, (I * w * w) / 2], `L = I·ω = ${I}·${w}`); },
    () => { const I2 = r(1, 4), k = r(2, 3), w1 = r(2, 6), I1 = I2 * k; return sor(`Eylemsizlik momenti ${I1} kg·m²'den ${I2} kg·m²'ye inen dönen bir cismin açısal hızı ${w1} rad/s idi. Yeni açısal hız kaç rad/s olur? (dış tork yok)`, w1 * k, [w1, Math.round(w1 / k * 10) / 10 || w1 + 1, w1 + k, w1 * k * k], `I₁ω₁ = I₂ω₂ → ${I1}·${w1} = ${I2}·ω₂`); },
    () => { const I = r(1, 4) * 2, w = r(2, 6); return sor(`Eylemsizlik momenti ${I} kg·m², açısal hızı ${w} rad/s olan cismin dönme kinetik enerjisi kaç J'dir?`, (I * w * w) / 2, [I * w, I * w * w, (I * w) / 2], `E = ½·I·ω² = ½·${I}·${w * w}`); },
    () => { const [k, t] = pick([[4, 8], [9, 27], [16, 64], [1, 1]]); if (k === 1) return null; return sor(`Bir gezegenin Güneş'e uzaklığı diğerinin ${k} katıdır. Periyotları oranı kaçtır? (Kepler'in 3. yasası)`, t, [k, k * k, Math.sqrt(k)], `T² ∝ r³ → T₁/T₂ = √(${k}³) = ${t}`); }
  ])(); if (q) return q; } return null; };
})();
