// 11. sınıf Fizik — Türkiye Yüzyılı Maarif Modeli fizik programı (11. sınıf: 1. Kuvvet ve Hareket, 2. Elektrik ve Manyetizma,
// 3. Madde ve Doğası, 4. Optik) ile eski içerik arasındaki eksikler. Programdaki sınırlamalar dikkate alındı:
// limit hız yalnızca kavramsal; Coulomb, elektrik alan ve Ørsted modelinde hesaplamaya girilmez; görünür derinlikte hesaplama yapılmaz.
// Kaynak: mufredat.meb.gov.tr Fizik Dersi Öğretim Programı (Maarif), tymm.meb.gov.tr Fizik Dersi 11. sınıf.
(function () {
  if (!window.MUF || !window.ICERIK || !ICERIK.fizik) return;

  MUF.konu("fizik", "fizu1", 99, {
    id: "fiz1k3", ad: "Sürtünme Kuvveti, Limit Hız ve Düzgün Çembersel Hareket (Maarif)",
    ozet: [
      "Statik sürtünme: cisim dururken uygulanan kuvvete eşit büyüklükte ve zıt yönlüdür; en büyük değerine ulaşınca cisim harekete başlar. Kinetik sürtünme: hareket sırasında etki eder, genelde en büyük statik sürtünmeden küçüktür.",
      "Sürtünme kuvveti Fs = k · N (k: sürtünme katsayısı, N: tepki kuvveti). Yatay zeminde ve ek düşey kuvvet yoksa N = m · g. Sürtünme, temas yüzeyinin büyüklüğüne bağlı değildir.",
      "Limit hız: hava direnci ağırlığa eşit olunca net kuvvet sıfır olur ve düşen cisim sabit hızla iner (yağmur damlası, paraşütçü). Kesit alanı büyüdükçe limit hız küçülür.",
      "Düzgün çembersel harekette sürat sabittir ama hız vektörünün yönü sürekli değişir; hız çembere teğettir.",
      "Periyot T: bir tam tur süresi; frekans f = 1/T. Çizgisel hız v = 2πr / T, açısal hız ω = 2π / T, v = ω · r.",
      "Merkezcil ivme a = v² / r, merkezcil kuvvet F = m · v² / r; ikisi de çemberin merkezine yönelir."
    ],
    anlatim: [
      "Serbest cisim diyagramında cisme etki eden tüm kuvvetler (ağırlık, tepki, uygulanan kuvvet, sürtünme) oklarla gösterilir; bileşke kuvvet Newton'un ikinci yasasıyla ivmeyi verir: F_net = m · a.",
      "Bir kutuyu itmeye başladığınızda hemen kaymaz: statik sürtünme sizin kuvvetinizi dengeler. Kuvvet en büyük statik sürtünmeyi aşınca kutu kayar; bundan sonra genellikle daha küçük olan kinetik sürtünme etki eder, bu yüzden kutuyu kaydırmaya devam etmek başlatmaktan kolaydır.",
      "Paraşütçü atladığında önce hızlanır; hızı arttıkça hava direnci de artar. Direnç ağırlığa eşit olduğunda net kuvvet sıfırdır ve paraşütçü limit hızla iner. Paraşüt açılınca kesit alanı büyür, direnç artar, daha küçük bir limit hıza geçilir.",
      "Çembersel harekette cismi çembersel yolda tutan bir merkezcil kuvvet gerekir: virajdaki araba için sürtünme, ipe bağlı taş için ip gerilmesi, Ay için kütle çekimi. İp koparsa cisim çembere teğet doğrultuda gider."
    ],
    sorular: [
      ["Yatay zeminde duran 10 kg'lık kutu ile zemin arasındaki kinetik sürtünme katsayısı 0,3'tür. Kutu kayarken sürtünme kuvveti kaç N'dur? (g = 10 m/s²)", "30", "3", "300", "100", "Fs = k · m · g = 0,3 · 10 · 10 = 30 N"],
      ["Sürtünme kuvveti hangisine bağlı değildir?", "Temas yüzeyinin alanına", "Yüzeylerin cinsine", "Tepki kuvvetine", "Yüzeylerin pürüzlülüğüne", "Fs = k · N; temas alanı formülde yoktur."],
      ["Limit hıza ulaşan bir yağmur damlası için hangisi doğrudur?", "Net kuvvet sıfırdır, sabit hızla düşer.", "Hızlanmaya devam eder.", "Hava direnci sıfırdır.", "Ağırlığı sıfırdır.", "Hava direnci ağırlığa eşitlenince ivme sıfır olur."],
      ["Düzgün çembersel hareket yapan bir cisim için hangisi sabittir?", "Sürat", "Hız vektörü", "İvme vektörü", "Hareket yönü", "Sürat sabittir; hız ve ivmenin yönü sürekli değişir."],
      ["Yarıçapı 2 m olan çembersel yörüngede 4 m/s süratle dönen cismin merkezcil ivmesi kaç m/s²'dir?", "8", "2", "16", "32", "a = v²/r = 16/2 = 8 m/s²"],
      ["Periyodu 0,5 s olan dönme hareketinin frekansı kaç Hz'dir?", "2", "0,5", "5", "1", "f = 1/T = 1/0,5 = 2 Hz"],
      ["İpe bağlanıp yatay düzlemde döndürülen taşın ipi koparsa taş hangi doğrultuda hareket eder?", "Çembere teğet doğrultuda", "Merkeze doğru", "Merkezden dışarı, yarıçap doğrultusunda", "Olduğu yerde durur", "Hız vektörü çembere teğettir; merkezcil kuvvet kalkınca cisim bu doğrultuda gider."]
    ],
    acik: [
      ["Statik ve kinetik sürtünme kuvvetini karşılaştırınız.", "Statik sürtünme duran cisimde etki eder, uygulanan kuvvetle birlikte artar ve en büyük değere ulaşınca cisim harekete geçer. Kinetik sürtünme hareket hâlindeki cisimde etki eder ve genellikle en büyük statik sürtünmeden küçüktür. İkisi de harekete (ya da hareket eğilimine) zıt yöndedir."],
      ["Virajı dönen bir otomobil için merkezcil kuvveti hangi kuvvet sağlar? Islak yolda neden kaza riski artar?", "Lastiklerle yol arasındaki sürtünme kuvveti merkezcil kuvveti sağlar. Islak yolda sürtünme katsayısı azaldığı için gereken m · v²/r kuvveti sağlanamayabilir; araç savrulur. Bu yüzden virajlara düşük hızla girilmelidir."]
    ],
    ornek: [
      ["Kütlesi 4 kg olan cisim yatay zeminde 20 N'luk yatay kuvvetle çekiliyor. Kinetik sürtünme katsayısı 0,25 ise cismin ivmesini bulunuz. (g = 10 m/s²)", "1) Tepki N = m · g = 40 N. 2) Sürtünme Fs = 0,25 · 40 = 10 N. 3) Net kuvvet 20 − 10 = 10 N. 4) a = F_net / m = 10 / 4 = 2,5 m/s²."],
      ["Kütlesi 0,5 kg olan taş 1 m uzunluğundaki iple yatay düzlemde saniyede 1 tur atıyor (π = 3). Taşın çizgisel hızını ve ipteki gerilmeyi bulunuz.", "T = 1 s. v = 2πr / T = 2 · 3 · 1 / 1 = 6 m/s. Merkezcil kuvvet F = m · v² / r = 0,5 · 36 / 1 = 18 N; bu kuvveti ip gerilmesi sağlar."]
    ],
    hata: [
      "Sürtünme kuvvetinin temas alanı büyüdükçe arttığını sanmak.",
      "Düzgün çembersel harekette ivmenin sıfır olduğunu sanmak (yön değiştiği için merkezcil ivme vardır).",
      "Merkezcil kuvveti ayrı bir kuvvet sanmak; sürtünme, gerilme ya da çekim kuvveti bu rolü üstlenir."
    ]
  });

  MUF.konu("fizik", "fizu3", 99, {
    id: "fiz3k3", ad: "Manyetik Kuvvet, İndüksiyon, Alternatif Akım ve Transformatör (Maarif)",
    ozet: [
      "Akım taşıyan düz telin çevresinde dairesel manyetik alan oluşur (Ørsted); yönü sağ el kuralıyla bulunur. Akım makarasının (bobin) içindeki alan sarım sayısı ve akımla artar; içine demir çekirdek konunca elektromıknatıs olur.",
      "Manyetik alandaki akım taşıyan tele kuvvet etki eder: F = B · I · L (tel alana dik iken). Elektrik motoru bu kuvvetle dönen bir sarımdır.",
      "Manyetik akı Φ = B · A (alan yüzeye dik iken). Birimi weber (Wb).",
      "İndüksiyon: Bir devreden geçen manyetik akı değişirse devrede indüksiyon gerilimi ve akımı oluşur (Faraday). Akı ne kadar hızlı değişirse indüksiyon gerilimi o kadar büyük olur: ε = −N · ΔΦ / Δt.",
      "Alternatif akım: manyetik alanda dönen bobinde yönü ve büyüklüğü periyodik değişen akım oluşur; jeneratörler ve şebeke elektriği (Türkiye'de 50 Hz) bu ilkeye dayanır.",
      "Transformatör: Vp / Vs = Np / Ns (ideal transformatörde Vp · Ip = Vs · Is). Yükseltici transformatörde Ns > Np, düşürücüde Ns < Np. Yalnızca alternatif akımla çalışır."
    ],
    anlatim: [
      "Bir mıknatısı bobinin içine sokup çıkardığımızda bobine bağlı ampermetre sapar: akı değiştiği için indüksiyon akımı oluşur. Mıknatıs bobin içinde hareketsiz durursa akı değişmez, akım oluşmaz.",
      "Lenz kuralı: İndüksiyon akımı, kendisini oluşturan akı değişimine karşı koyacak yönde oluşur; enerjinin korunumunun sonucudur.",
      "Elektrik santrallerinde üretilen gerilim, iletim hatlarında yükseltici transformatörlerle çok yükseltilir; böylece aynı güç için akım küçülür ve tellerde ısı olarak kaybolan enerji azalır. Şehre gelince düşürücü transformatörlerle kullanım gerilimine (220 V) indirilir.",
      "Programa göre Coulomb yasası, elektrik alan ve Ørsted modelinde sayısal hesaplama yapılmaz; ilişkiler (yük artarsa kuvvet artar, uzaklık artarsa azalır) nitel olarak yorumlanır."
    ],
    sorular: [
      ["Primer sarım sayısı 200, sekonder sarım sayısı 1000 olan ideal transformatörün primerine 220 V uygulanıyor. Sekonder gerilimi kaç V'tur?", "1100", "44", "220", "2200", "Vs = Vp · Ns / Np = 220 · 1000 / 200 = 1100 V"],
      ["Bir bobin içindeki mıknatıs hareketsiz duruyorsa ne olur?", "İndüksiyon akımı oluşmaz.", "Sürekli indüksiyon akımı oluşur.", "Bobin ısınarak erir.", "Mıknatıs kutup değiştirir.", "Akı değişmediği için indüksiyon olmaz."],
      ["Transformatörler hangi akımla çalışır?", "Alternatif akım", "Doğru akım", "Hem doğru hem alternatif akımla aynı şekilde", "Hiçbir akımla", "Değişken akı yalnızca alternatif akımla sürekli oluşur."],
      ["Elektrik iletim hatlarında gerilimin yükseltilmesinin amacı nedir?", "Akımı küçültüp ısı kaybını azaltmak", "Akımı artırmak", "Telleri soğutmak", "Frekansı artırmak", "Aynı güçte gerilim artarsa akım azalır; ısı kaybı akımın karesiyle orantılıdır."],
      ["Manyetik alana dik konmuş 0,5 m uzunluğundaki telden 4 A akım geçiyor. B = 0,2 T ise tele etki eden kuvvet kaç N'dur?", "0,4", "4", "0,1", "1,6", "F = B · I · L = 0,2 · 4 · 0,5 = 0,4 N"],
      ["Elektrik motoru hangi ilkeye dayanır?", "Manyetik alandaki akım taşıyan tele kuvvet etki etmesi", "Sürtünme ile elektriklenme", "Işığın kırılması", "Isı iletimi", "Sarıma etki eden manyetik kuvvetler sarımı döndürür."],
      ["Jeneratör hangi enerji dönüşümünü yapar?", "Hareket enerjisi → elektrik enerjisi", "Elektrik enerjisi → hareket enerjisi", "Işık enerjisi → elektrik enerjisi", "Kimyasal enerji → ısı enerjisi", "Dönen bobinde akı değişir, indüksiyon akımı üretilir."]
    ],
    acik: [
      ["İndüksiyon geriliminin büyüklüğü hangi etkenlere bağlıdır?", "Sarım sayısına, manyetik alanın büyüklüğüne, yüzey alanına ve akının ne kadar hızlı değiştiğine bağlıdır: ε = N · ΔΦ / Δt. Mıknatıs daha hızlı hareket ettirilirse gerilim artar."],
      ["Yükseltici ve düşürücü transformatörü karşılaştırınız.", "Yükseltici transformatörde sekonder sarım sayısı primerden fazladır, gerilim artar ve akım azalır. Düşürücüde sekonder sarım sayısı azdır, gerilim azalır, akım artar. İkisinde de ideal durumda güç korunur."]
    ],
    ornek: [
      ["220 V şebekeye bağlı ideal transformatör 11 V'luk bir cihazı çalıştırıyor. Primer sarım sayısı 1200 ise sekonder sarım sayısı kaçtır? Sekonder akımı 2 A ise primer akımı kaçtır?", "Vp/Vs = Np/Ns → 220/11 = 1200/Ns → Ns = 60 sarım. Güç korunur: Vp · Ip = Vs · Is → 220 · Ip = 11 · 2 → Ip = 0,1 A."],
      ["Alanı 0,2 m² olan çerçeveye dik 0,5 T'lık manyetik alan 0,1 s içinde sıfıra iniyor. Çerçeve tek sarımlı ise oluşan indüksiyon geriliminin büyüklüğünü bulunuz.", "İlk akı Φ = B · A = 0,5 · 0,2 = 0,1 Wb, son akı 0. ΔΦ = 0,1 Wb. ε = ΔΦ / Δt = 0,1 / 0,1 = 1 V."]
    ],
    hata: [
      "Mıknatıs bobin içinde dururken de indüksiyon akımı olduğunu sanmak.",
      "Transformatörün doğru akımla da çalıştığını sanmak.",
      "Yükseltici transformatörde gücün de arttığını sanmak (ideal durumda güç korunur)."
    ]
  });

  MUF.unite("fizik", { id: "fizumd", ad: "Madde ve Doğası: Yarı İletkenler ve Süper İletkenler (Maarif)", donem: 2, sonra: "fizu3" }, [
    {
      id: "fiz11m1", ad: "Yarı İletkenler ve Süper İletkenler",
      ozet: [
        "Yarı iletken: iletkenliği iletkenlerle yalıtkanlar arasında olan, sıcaklık, ışık ve katkılama ile iletkenliği değiştirilebilen maddedir (silisyum, germanyum).",
        "Katkılama: saf yarı iletkene az miktarda başka atom eklenerek n-tipi (fazla elektron) veya p-tipi (boşluk) yarı iletken elde edilir.",
        "Yarı iletkenlerin kullanım alanları: diyot, LED, transistör, güneş pili, entegre devreler (bilgisayar işlemcileri, telefonlar).",
        "Süper iletken: belirli bir kritik sıcaklığın altına soğutulunca elektrik direnci sıfıra inen maddedir; akım kayıpsız iletilir ve manyetik alanı dışarı iter (Meissner etkisi).",
        "Süper iletkenlerin kullanım alanları: MR cihazlarındaki güçlü mıknatıslar, manyetik yükselmeli (maglev) trenler, parçacık hızlandırıcılar."
      ],
      anlatim: [
        "Metallerde sıcaklık arttıkça direnç artar; yarı iletkenlerde ise sıcaklık arttıkça daha çok elektron serbest kalır ve direnç azalır. Bu fark, yarı iletkenleri sıcaklık ve ışık algılayıcılarında kullanışlı kılar.",
        "Güneş pilleri yarı iletkenlerden yapılır: ışık enerjisi elektronları serbest bırakır, p–n bölgeleri arasında elektrik akımı oluşur.",
        "Süper iletkenliğin günlük kullanımdaki en büyük engeli, çoğu maddenin çok düşük sıcaklıklara (sıvı helyum ya da sıvı azot) soğutulması gerektiğidir; oda sıcaklığında süper iletken madde arayışı sürmektedir."
      ],
      sorular: [
        ["Hangisi bir yarı iletkendir?", "Silisyum", "Bakır", "Cam", "Plastik", "Silisyum ve germanyum yaygın yarı iletkenlerdir."],
        ["Süper iletken bir maddenin kritik sıcaklığın altındaki direnci nasıldır?", "Sıfırdır", "Çok büyüktür", "Sıcaklıkla artar", "Bakırınkine eşittir", "Kritik sıcaklığın altında direnç sıfıra iner."],
        ["Hangisinde yarı iletken kullanılmaz?", "Tahta cetvel", "LED lamba", "Güneş pili", "Bilgisayar işlemcisi", "Diyot, LED, transistör ve güneş pilleri yarı iletken temellidir."],
        ["Manyetik yükselmeli (maglev) trenlerde hangi teknoloji kullanılır?", "Süper iletken mıknatıslar", "Buhar makinesi", "Dizel motor", "Yalıtkan raylar", "Süper iletkenler güçlü manyetik alan oluşturur ve manyetik alanı iter."],
        ["Yarı iletkenlerde sıcaklık arttıkça direnç nasıl değişir?", "Azalır", "Artar", "Değişmez", "Sonsuz olur", "Isınınca daha çok yük taşıyıcı serbest kalır."]
      ],
      acik: [["Yarı iletkenlerin günlük hayattaki önemini iki örnekle açıklayınız.", "Telefon ve bilgisayarlardaki işlemciler milyarlarca yarı iletken transistörden oluşur. Güneş pilleri yarı iletkenlerle ışık enerjisini elektrik enerjisine dönüştürür. LED lambalar az enerjiyle çok ışık verir."]],
      ornek: [["Bir öğrenci 'süper iletken kablolarla elektrik iletirsek hiç enerji kaybı olmaz' diyor. Bu fikri değerlendiriniz.", "Doğru yanı: direnç sıfır olduğu için tellerde ısı kaybı olmaz. Sınırlılığı: bugünkü süper iletkenler çok düşük sıcaklıklarda çalışır; soğutma için büyük enerji ve maliyet gerekir. Bu yüzden şimdilik yalnızca MR, hızlandırıcı gibi özel alanlarda kullanılır."]],
      hata: ["Yarı iletkenlerin de metaller gibi ısınınca direncinin arttığını sanmak.", "Süper iletkenlerin oda sıcaklığında çalıştığını sanmak."]
    }
  ]);

  MUF.unite("fizik", { id: "fizuop", ad: "Optik (Maarif)", donem: 2, sonra: "fizumd" }, [
    {
      id: "fiz11o1", ad: "Aydınlanma, Düzlem Aynalar ve Küresel Aynalar",
      ozet: [
        "Işık şiddeti (I): kaynağın birim zamanda yaydığı ışık miktarının ölçüsü, birimi kandela (cd). Işık akısı (Φ): birim zamanda yayılan ışık enerjisi, birimi lümen (lm).",
        "Aydınlanma şiddeti E = I / d² (ışık yüzeye dik gelirse); birimi lüks (lx). Uzaklık 2 katına çıkarsa aydınlanma 1/4'üne düşer.",
        "Yansıma kanunları: gelme açısı yansıma açısına eşittir; gelen ışın, normal ve yansıyan ışın aynı düzlemdedir.",
        "Düzlem aynada görüntü: düz, cisimle aynı boyda, aynaya uzaklığı cisimle aynı, sanal ve sağ–sol ters.",
        "Çukur ayna ışınları odakta toplar (F = r/2); cismin konumuna göre gerçek–ters veya sanal–düz–büyük görüntü verir. Tümsek ayna ışınları dağıtır; görüntü her zaman sanal, düz ve küçüktür.",
        "Ayna denklemi: 1/f = 1/d_c + 1/d_g; büyütme = h_g/h_c = d_g/d_c."
      ],
      anlatim: [
        "Masa lambası kitaba yaklaştırılınca sayfa daha aydınlık görünür: aydınlanma uzaklığın karesiyle ters orantılıdır.",
        "Çukur aynada asal eksene paralel gelen ışın odaktan geçecek şekilde, odaktan gelen ışın asal eksene paralel yansır; merkezden gelen ışın kendi üzerinden geri döner. Bu özel ışınlarla görüntü çizilir.",
        "Cisim çukur aynanın odağı ile ayna arasındaysa görüntü sanal, düz ve büyüktür (makyaj aynası). Cisim merkezin dışındaysa görüntü gerçek, ters ve küçüktür.",
        "Düzlem aynada görüntüyü tam boy görmek için ayna boyunun en az kişinin boyunun yarısı kadar olması gerekir."
      ],
      sorular: [
        ["Bir lambanın yüzeye uzaklığı 2 katına çıkarılırsa aydınlanma şiddeti nasıl değişir?", "1/4'üne düşer", "Yarıya iner", "2 katına çıkar", "Değişmez", "E = I/d² → d iki kat olursa E dörtte birine iner."],
        ["Işık şiddeti 100 cd olan kaynağın 2 m uzağındaki, ışığı dik alan yüzeyin aydınlanma şiddeti kaç lükstür?", "25", "50", "200", "400", "E = I/d² = 100/4 = 25 lx"],
        ["Düzlem aynadan 3 m uzakta duran kişinin görüntüsü kişiye kaç m uzaktadır?", "6", "3", "1,5", "9", "Görüntü aynanın 3 m arkasındadır: 3 + 3 = 6 m"],
        ["Tümsek aynada oluşan görüntü için hangisi her zaman doğrudur?", "Sanal, düz ve küçüktür.", "Gerçek ve terstir.", "Cisimden büyüktür.", "Cisimle aynı boydadır.", "Tümsek ayna her durumda sanal, düz, küçük görüntü verir."],
        ["Yarıçapı 40 cm olan çukur aynanın odak uzaklığı kaç cm'dir?", "20", "40", "80", "10", "F = r/2 = 20 cm"],
        ["Makyaj aynası olarak çukur aynanın kullanılmasının sebebi nedir?", "Cisim odak ile ayna arasındayken düz ve büyük görüntü vermesi", "Her zaman küçük görüntü vermesi", "Görüş alanını genişletmesi", "Işığı dağıtması", "Odağın içindeki cismin görüntüsü sanal, düz ve büyüktür."]
      ],
      acik: [["Çukur aynanın odak uzaklığı 10 cm'dir. 30 cm uzağa konan cismin görüntüsünün yerini ve özelliklerini bulunuz.", "1/10 = 1/30 + 1/d_g → 1/d_g = 3/30 − 1/30 = 2/30 → d_g = 15 cm (aynanın önünde). Büyütme 15/30 = 1/2: görüntü gerçek, ters ve cismin yarısı boyundadır."]],
      ornek: [["İki lambadan biri 40 cd ve yüzeye 2 m, diğeri 90 cd ve yüzeye 3 m uzaklıktadır. Hangisi yüzeyi daha çok aydınlatır?", "E₁ = 40/2² = 10 lx, E₂ = 90/3² = 10 lx. Aydınlanmalar eşittir; daha güçlü lambanın uzakta olması avantajını ortadan kaldırmıştır."]],
      hata: ["Aydınlanmanın uzaklıkla doğrusal azaldığını sanmak (uzaklığın karesiyle azalır).", "Düzlem aynada görüntünün cisme uzaklığını ayna–cisim uzaklığına eşit sanmak (iki katıdır).", "Odak uzaklığını yarıçapa eşit almak (F = r/2)."]
    },
    {
      id: "fiz11o2", ad: "Kırılma, Tam Yansıma, Prizmalar ve Mercekler",
      ozet: [
        "Kırılma: ışık farklı ortama geçerken hızı değiştiği için doğrultu değiştirir. Kırıcılık indisi n = c / v (c: ışığın boşluktaki hızı).",
        "Snell yasası: n₁ · sin θ₁ = n₂ · sin θ₂. Az yoğundan çok yoğuna geçen ışık normale yaklaşır, çok yoğundan az yoğuna geçen ışık normalden uzaklaşır.",
        "Tam yansıma: ışık çok yoğun ortamdan az yoğuna geçerken gelme açısı sınır açısından büyükse kırılmaz, tamamen yansır. Fiber optik kablolar bu ilkeyle çalışır.",
        "Görünür derinlik: sudaki cisim olduğundan daha yakında (yukarıda) görünür (programa göre hesaplama yapılmaz).",
        "Prizma beyaz ışığı renklerine ayırır (renk tayfı); mor ışık en çok, kırmızı ışık en az kırılır.",
        "İnce kenarlı (yakınsak) mercek ışığı toplar; kalın kenarlı (ıraksak) mercek dağıtır. Mercek denklemi 1/f = 1/d_c + 1/d_g. Hipermetropta ince kenarlı, miyopta kalın kenarlı mercek kullanılır."
      ],
      anlatim: [
        "Pipet su dolu bardakta kırık görünür; havuz olduğundan sığ görünür. Bunların nedeni ışığın su–hava sınırında kırılmasıdır.",
        "Fiber optik kabloda ışık, çekirdek ile kılıf arasındaki sınıra sınır açısından büyük açıyla geldiği için defalarca tam yansıyarak kilometrelerce taşınır; internet ve tıbbi endoskopide kullanılır.",
        "Gökkuşağında su damlaları prizma gibi davranır: beyaz ışığı kırarak renklerine ayırır. Renklerin farklı miktarda kırılmasının sebebi, ortamın kırıcılık indisinin renge göre biraz değişmesidir.",
        "Büyüteç ince kenarlı mercektir: cisim odak içinde tutulunca düz ve büyük sanal görüntü verir."
      ],
      sorular: [
        ["Işık havadan suya geçerken nasıl kırılır?", "Normale yaklaşır", "Normalden uzaklaşır", "Hiç kırılmaz", "Geldiği yoldan geri döner", "Az yoğundan çok yoğun ortama geçen ışık normale yaklaşır."],
        ["Fiber optik kablolar hangi olaya dayanır?", "Tam yansıma", "Dağınık yansıma", "Soğurma", "Kırınım", "Işık çekirdek–kılıf sınırında tam yansıyarak ilerler."],
        ["Prizmadan geçen beyaz ışıkta en çok kırılan renk hangisidir?", "Mor", "Kırmızı", "Sarı", "Yeşil", "Mor ışığın kırıcılık indisi en büyüktür."],
        ["Miyop göz kusurunu düzeltmek için hangi mercek kullanılır?", "Kalın kenarlı (ıraksak) mercek", "İnce kenarlı (yakınsak) mercek", "Düz cam", "Prizma", "Miyopta görüntü retinanın önüne düşer; ıraksak mercek ışığı dağıtır."],
        ["Kırıcılık indisi 1,5 olan camda ışığın hızı kaç m/s'dir? (c = 3 · 10⁸ m/s)", "2 · 10⁸", "4,5 · 10⁸", "1,5 · 10⁸", "3 · 10⁸", "v = c / n = 3 · 10⁸ / 1,5 = 2 · 10⁸ m/s"],
        ["Tam yansıma için hangisi gereklidir?", "Işığın çok yoğun ortamdan az yoğun ortama sınır açısından büyük açıyla gelmesi", "Işığın az yoğundan çok yoğuna geçmesi", "Gelme açısının sıfır olması", "İki ortamın kırıcılık indisinin eşit olması", "Tam yansıma yalnızca çok yoğundan az yoğuna geçişte olur."]
      ],
      acik: [["Havuzun olduğundan sığ görünmesini açıklayınız.", "Havuz tabanından gelen ışınlar sudan havaya geçerken normalden uzaklaşarak kırılır. Göz, ışınların doğrusal geldiğini varsaydığından ışınların uzantılarının kesiştiği daha yukarıdaki noktayı görür; taban olduğundan yakında görünür."]],
      ornek: [["Odak uzaklığı 10 cm olan ince kenarlı merceğe 15 cm uzaklıktaki cismin görüntüsünü bulunuz.", "1/10 = 1/15 + 1/d_g → 1/d_g = 3/30 − 2/30 = 1/30 → d_g = 30 cm (merceğin öbür tarafında). Büyütme 30/15 = 2: görüntü gerçek, ters ve iki kat büyüktür."]],
      hata: ["Tam yansımanın az yoğundan çok yoğuna geçişte de olabileceğini sanmak.", "Prizmada kırmızı ışığın en çok kırıldığını sanmak.", "Miyop ve hipermetrop gözlük merceklerini karıştırmak."]
    }
  ]);

  // ---------- Soru üreteçleri ----------
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

  U.fiz1k3 = tip([
    () => { const m = r(2, 20), k = pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.5]); const f = k * m * 10; return soru(`Yatay zeminde kayan ${m} kg'lık cisimle zemin arasındaki kinetik sürtünme katsayısı ${ond(k)}'dir. Sürtünme kuvveti kaç N'dur? (g = 10 m/s²)`, ond(f), [ond(k * m), ond(m * 10), ond(f * 2), ond(f + 10)], `Fs = k · m · g = ${ond(k)} · ${m} · 10 = ${ond(f)} N`); },
    () => { const v = pick([2, 3, 4, 5, 6, 8, 10]), rr = pick([1, 2, 4, 5]); const a = (v * v) / rr; if (!Number.isInteger(a * 10)) return null; return soru(`Yarıçapı ${rr} m olan çembersel yörüngede ${v} m/s süratle dönen cismin merkezcil ivmesi kaç m/s²'dir?`, ond(a), [ond(v / rr), ond(v * rr), ond(v * v * rr), ond(2 * a)], `a = v²/r = ${v * v}/${rr} = ${ond(a)} m/s²`); },
    () => { const T = pick([0.1, 0.2, 0.25, 0.5, 2, 4, 5]); return soru(`Periyodu ${ond(T)} s olan düzgün çembersel hareketin frekansı kaç Hz'dir?`, ond(1 / T), [ond(T), ond(2 / T), ond(T * 2)], `f = 1/T = 1/${ond(T)} = ${ond(1 / T)} Hz`); },
    () => { const m = pick([1, 2, 4, 5]), v = pick([2, 3, 4, 6]), rr = pick([1, 2, 3]); const F = (m * v * v) / rr; if (!Number.isInteger(F * 10)) return null; return soru(`${m} kg kütleli cisim ${rr} m yarıçaplı çembersel yolda ${v} m/s süratle dönüyor. Merkezcil kuvvet kaç N'dur?`, ond(F), [ond((m * v) / rr), ond(m * v * v), ond(F * 2), ond((v * v) / rr)], `F = m · v²/r = ${m} · ${v * v} / ${rr} = ${ond(F)} N`); },
    () => soru(pick(["Limit hıza ulaşmış paraşütçü için hangisi doğrudur?", "Limit hızla düşen yağmur damlası için hangisi doğrudur?"]), "Hava direnci ağırlığa eşittir; sabit hızla iner.", ["Hızlanmaya devam eder.", "Hava direnci sıfırdır.", "İvmesi yer çekimi ivmesine eşittir."], "Net kuvvet sıfır olunca ivme sıfırdır; cisim sabit (limit) hızla hareket eder.")
  ]);

  U.fiz3k3 = tip([
    () => { const Np = pick([100, 200, 400, 500, 1000]), k = pick([2, 4, 5, 10, 0.5, 0.25, 0.1]), Vp = pick([220, 110, 440]); const Ns = Np * k, Vs = Vp * k; if (!Number.isInteger(Ns) || !Number.isInteger(Vs * 10)) return null; return soru(`İdeal bir transformatörün primer sarım sayısı ${Np}, sekonder sarım sayısı ${Ns}'dir. Primere ${Vp} V uygulanırsa sekonder gerilimi kaç V olur?`, ond(Vs), [ond(Vp / k), ond(Vp), ond(Vs * 2)], `Vs = Vp · Ns / Np = ${Vp} · ${Ns} / ${Np} = ${ond(Vs)} V`); },
    () => { const B = pick([0.1, 0.2, 0.4, 0.5]), I = r(1, 10), L = pick([0.1, 0.2, 0.5, 1, 2]); const F = B * I * L; return soru(`Manyetik alana dik konmuş ${ond(L)} m uzunluğundaki telden ${I} A akım geçiyor. B = ${ond(B)} T ise tele etki eden manyetik kuvvet kaç N'dur?`, ond(F), [ond(B * I), ond(I * L), ond(F * 10), ond(B * L)], `F = B · I · L = ${ond(B)} · ${I} · ${ond(L)} = ${ond(F)} N`); },
    () => { const B = pick([0.2, 0.4, 0.5, 1]), A = pick([0.1, 0.2, 0.5]), t = pick([0.1, 0.2, 0.5]); const e = (B * A) / t; return soru(`Tek sarımlı, alanı ${ond(A)} m² olan çerçeveye dik ${ond(B)} T'lık manyetik alan ${ond(t)} s'de sıfıra iniyor. İndüksiyon geriliminin büyüklüğü kaç V'tur?`, ond(e), [ond(B * A), ond(B * A * t), ond(e * 2)], `ΔΦ = B · A = ${ond(B * A)} Wb; ε = ΔΦ/Δt = ${ond(B * A)}/${ond(t)} = ${ond(e)} V`); },
    () => soru(pick(["Bobin içindeki mıknatıs hareketsiz tutulursa ne olur?", "Bobin ve mıknatıs birlikte aynı hızla hareket ederse ne olur?"]), "İndüksiyon akımı oluşmaz.", ["Sürekli indüksiyon akımı oluşur.", "Bobin kutup değiştirir.", "Mıknatısın manyetizması kaybolur."], "İndüksiyon için bobinden geçen manyetik akının değişmesi gerekir."),
    () => soru("Elektrik iletim hatlarında yüksek gerilim kullanılmasının sebebi nedir?", "Akımı küçültüp tellerdeki ısı kaybını azaltmak", ["Akımı artırmak", "Frekansı yükseltmek", "Telleri hafifletmek"], "Aynı güçte gerilim artarsa akım azalır; ısı kaybı akımın karesiyle orantılıdır.")
  ]);

  U.fiz11o1 = tip([
    () => { const I = pick([36, 64, 80, 100, 144, 160, 200]), d = pick([1, 2, 4]); const E = I / (d * d); return soru(`Işık şiddeti ${I} cd olan noktasal kaynağın ${d} m uzağındaki, ışığı dik alan yüzeyin aydınlanma şiddeti kaç lükstür?`, ond(E), [ond(I / d), ond(I * d), ond(E * 2)], `E = I/d² = ${I}/${d * d} = ${ond(E)} lx`); },
    () => { const d = r(1, 9); return soru(`Düzlem aynadan ${d} m uzakta duran bir cismin görüntüsü cisme kaç m uzaklıktadır?`, String(2 * d), [String(d), String(d / 2).replace(".", ","), String(3 * d)], `Görüntü aynanın ${d} m arkasındadır: ${d} + ${d} = ${2 * d} m`); },
    () => { const R = pick([20, 30, 40, 60, 80]); return soru(`Yarıçapı ${R} cm olan küresel aynanın odak uzaklığı kaç cm'dir?`, String(R / 2), [String(R), String(R * 2), ond(R / 4)], `F = r/2 = ${R / 2} cm`); },
    () => { const [f, dc, dg] = pick([[10, 30, 15], [10, 15, 30], [20, 60, 30], [12, 24, 24], [15, 30, 30], [20, 30, 60]]); return soru(`Odak uzaklığı ${f} cm olan çukur aynaya ${dc} cm uzaklıktaki cismin görüntüsü aynaya kaç cm uzaklıkta oluşur?`, String(dg), [String(dc), String(f), String(dc - f), String(dc + f)].filter((x) => x !== String(dg)), `1/${f} = 1/${dc} + 1/d_g → d_g = ${dg} cm`); },
    () => soru("Tümsek aynada oluşan görüntü için hangisi her zaman doğrudur?", "Sanal, düz ve cisimden küçüktür.", ["Gerçek ve terstir.", "Cisimden büyüktür.", "Cisimle aynı boydadır."], "Tümsek ayna ışığı dağıtır; görüntü daima sanal, düz ve küçüktür.")
  ]);

  U.fiz11o2 = tip([
    () => { const [n, v] = pick([[1.5, "2 · 10⁸"], [2, "1,5 · 10⁸"], [1.2, "2,5 · 10⁸"], [2.5, "1,2 · 10⁸"]]); return soru(`Kırıcılık indisi ${ond(n)} olan saydam ortamda ışığın hızı kaç m/s'dir? (c = 3 · 10⁸ m/s)`, v, ["3 · 10⁸", `${ond(3 * n)} · 10⁸`, "1 · 10⁸", "6 · 10⁸"].filter((x) => x !== v), `v = c/n = 3 · 10⁸ / ${ond(n)} = ${v} m/s`); },
    () => { const c = pick([["havadan suya", "Normale yaklaşır"], ["havadan cama", "Normale yaklaşır"], ["sudan havaya", "Normalden uzaklaşır"], ["camdan havaya", "Normalden uzaklaşır"]]); return soru(`Işık ${c[0]} eğik geçerken nasıl kırılır?`, c[1], [c[1] === "Normale yaklaşır" ? "Normalden uzaklaşır" : "Normale yaklaşır", "Hiç kırılmaz", "Geldiği yoldan geri döner"], "Az yoğundan çok yoğuna geçen ışık normale yaklaşır, tersinde normalden uzaklaşır."); },
    () => { const [f, dc, dg] = pick([[10, 15, 30], [10, 30, 15], [20, 30, 60], [12, 24, 24], [20, 60, 30]]); return soru(`Odak uzaklığı ${f} cm olan ince kenarlı merceğe ${dc} cm uzaklıktaki cismin görüntüsü merceğe kaç cm uzaklıkta oluşur?`, String(dg), [String(dc), String(f), String(dc + f), String(Math.abs(dc - f))].filter((x) => x !== String(dg)), `1/${f} = 1/${dc} + 1/d_g → d_g = ${dg} cm`); },
    () => { const c = pick([["Miyop", "Kalın kenarlı (ıraksak) mercek"], ["Hipermetrop", "İnce kenarlı (yakınsak) mercek"]]); return soru(`${c[0]} göz kusurunu düzeltmek için hangi mercek kullanılır?`, c[1], [c[1].startsWith("Kalın") ? "İnce kenarlı (yakınsak) mercek" : "Kalın kenarlı (ıraksak) mercek", "Düz cam", "Prizma"], `${c[0]}: ${c[1].toLocaleLowerCase("tr")}.`); },
    () => soru(pick(["Fiber optik kablolar hangi olaya dayanır?", "Elmasın çok parlak görünmesi hangi olayla ilgilidir?"]), "Tam yansıma", ["Dağınık yansıma", "Soğurma", "Işığın doğrusal yayılması"], "Işık çok yoğundan az yoğun ortama sınır açısından büyük açıyla geldiğinde tamamen yansır.")
  ]);

  U.fiz11m1 = tip([
    () => soru("Hangisi bir yarı iletkendir?", pick(["Silisyum", "Germanyum"]), ["Bakır", "Cam", "Plastik", "Gümüş"], "Silisyum ve germanyum yaygın yarı iletkenlerdir."),
    () => soru("Hangisinde yarı iletken teknolojisi kullanılmaz?", pick(["Tahta cetvel", "Yün kazak", "Seramik tabak"]), ["LED lamba", "Güneş pili", "Bilgisayar işlemcisi", "Diyot"], "Diyot, LED, transistör ve güneş pilleri yarı iletken temellidir."),
    () => soru("Hangisi süper iletkenlerin kullanım alanıdır?", pick(["MR cihazlarının güçlü mıknatısları", "Manyetik yükselmeli (maglev) trenler", "Parçacık hızlandırıcılar"]), ["Kibrit", "Tahta masa", "Pamuklu kumaş"], "Süper iletkenler kayıpsız akım taşır ve çok güçlü manyetik alan oluşturur."),
    () => soru(pick(["Süper iletken bir madde kritik sıcaklığın altına soğutulursa direnci ne olur?"]), "Sıfır olur", ["Sonsuz olur", "İki katına çıkar", "Değişmez"], "Kritik sıcaklığın altında elektrik direnci sıfıra iner."),
    () => soru("Yarı iletkenlerde sıcaklık arttıkça direnç nasıl değişir?", "Azalır", ["Artar", "Değişmez", "Sonsuz olur"], "Isınınca daha çok yük taşıyıcı serbest kalır, iletkenlik artar.")
  ]);
})();
