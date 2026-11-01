// 9. sınıf Fizik, Kimya, Biyoloji (Maarif Modeli temaları; okulunuzun yıllık planına göre sıra değişebilir)
DERS("fizik", "fiz", { ad: "Fizik", ikon: "⚛️", renk: "#2563eb" }, [
  ["Fizik Bilimi ve Ölçme", 1, [
    ["Fiziğin Alt Dalları, Büyüklükler ve Birimler", [
      "Alt dallar: mekanik, termodinamik, elektromanyetizma, optik, katı hâl, atom, nükleer, yüksek enerji fiziği",
      "Temel büyüklükler (SI): uzunluk (m), kütle (kg), zaman (s), sıcaklık (K), akım (A), madde miktarı (mol), ışık şiddeti (cd)",
      "Türetilmiş büyüklükler: hız, kuvvet (N), enerji (J), basınç (Pa)",
      "Skaler: yalnız büyüklük (kütle, zaman, enerji) · Vektörel: büyüklük + yön (kuvvet, hız, yer değiştirme)"
    ], [
      "Fizik, madde ve enerji arasındaki etkileşimi inceleyen bilimdir ve teknolojiyle iç içedir: optik gözlük ve kameraların, elektromanyetizma motorların, nükleer fizik enerji santrallerinin temelidir. Fizikte bilgi gözlem, hipotez, deney ve modelleme yoluyla üretilir.",
      "Fiziksel büyüklükler temel ve türetilmiş olarak ikiye ayrılır. Temel büyüklükler SI'da yedi tanedir; diğerleri bunlardan türetilir. Yalnızca sayı ve birimle ifade edilen büyüklükler skaler, yön de belirtilmesi gerekenler vektörel büyüklüklerdir."
    ], [
      ["Aşağıdakilerden hangisi temel büyüklüktür?", "Kütle", "Kuvvet", "Hız", "Enerji", "SI'da 7 temel büyüklükten biri."],
      ["Hangisi vektörel büyüklüktür?", "Kuvvet", "Zaman", "Kütle", "Sıcaklık", "Yönü vardır."],
      ["Mercek ve aynalarla ilgilenen fizik alt dalı hangisidir?", "Optik", "Mekanik", "Termodinamik", "Nükleer fizik", "Işık bilgisi."],
      ["Enerjinin SI birimi hangisidir?", "Joule", "Newton", "Watt", "Pascal", "J"]
    ], [
      ["Skaler ve vektörel büyüklükleri ikişer örnekle açıklayınız; \"Ali 5 km yürüdü\" ifadesinin hangi tür büyüklük bildirdiğini gerekçelendiriniz.", "Skaler: kütle, zaman (yalnız büyüklük). Vektörel: kuvvet, hız (büyüklük + yön). '5 km yürüdü' yön belirtmediği için alınan yolu (skaler) bildirir; yön verilseydi yer değiştirme olurdu."]
    ]]
  ]],
  ["Kuvvet ve Hareket", 1, [
    ["Hareket, Hız ve Kuvvet", [
      "Yol skaler, yer değiştirme vektöreldir.",
      "Sürat = alınan yol / zaman · Hız = yer değiştirme / zaman",
      "Düzgün doğrusal harekette hız sabit: x = v · t",
      "Net kuvvet sıfırsa cisim durur ya da sabit hızla gider (eylemsizlik).",
      "Sürtünme kuvveti harekete zıt yöndedir."
    ], [
      "Bir cismin konumunun zamanla değişmesine hareket denir. Alınan yol hareket boyunca izlenen yörüngenin uzunluğu, yer değiştirme ise ilk ve son konum arasındaki yönlü uzaklıktır. Bu yüzden kapalı bir yolda tur atan koşucunun yer değiştirmesi sıfırdır.",
      "Kuvvet, cisimlerin hareket durumunu ya da şeklini değiştirebilen etkidir. Bir cisme etkiyen net kuvvet sıfırsa cisim duruyorsa durmaya, hareket ediyorsa sabit hızla gitmeye devam eder. Sürtünme kuvveti yüzeyin cinsine ve cismin yüzeye bastırma kuvvetine bağlıdır."
    ], [
      ["400 m'lik pistte bir tur atan koşucunun yer değiştirmesi kaç m'dir?", "0", "400", "200", "800", "Başlangıç ve bitiş aynı."],
      ["Sabit 20 m/s hızla giden araç 15 saniyede kaç m yol alır?", "300", "35", "150", "75", "20 · 15"],
      ["Net kuvvetin sıfır olduğu cisim için hangisi kesinlikle yanlıştır?", "Hızlanmaktadır.", "Duruyor olabilir.", "Sabit hızla gidiyor olabilir.", "Dengededir.", "Hız değişimi için net kuvvet gerekir."],
      ["Sürtünme kuvvetinin yönü nasıldır?", "Hareket yönüne zıt", "Hareket yönünde", "Yukarı doğru", "Her zaman aşağı", "Harekete karşı koyar."]
    ], [
      ["Bir öğrenci evden okula 600 m kuzeye, sonra 800 m doğuya yürüyor. Aldığı yolu ve yer değiştirmesinin büyüklüğünü bulunuz.", "Alınan yol: 600 + 800 = 1400 m. Yer değiştirme: √(600² + 800²) = 1000 m (kuzeydoğu yönünde)."],
      ["Otobüs aniden fren yapınca yolcuların öne doğru savrulmasını açıklayınız.", "Eylemsizlik: yolcular hareket hâlini korumak ister. Otobüs yavaşlarken yolcuların gövdesi sabit hızla gitmeye devam ettiği için öne savrulur."]
    ]]
  ]],
  ["Akışkanlar", 2, [
    ["Basınç ve Kaldırma Kuvveti", [
      "Katı basıncı P = F / A · Sıvı basıncı P = h · d · g",
      "Kaldırma kuvveti: Fk = V(batan) · d(sıvı) · g",
      "Yüzme: d(cisim) < d(sıvı) · Askıda kalma: eşit · Batma: d(cisim) > d(sıvı)",
      "Bernoulli: akışkanın hızı arttıkça basıncı azalır."
    ], [
      "Sıvılar ağırlıkları nedeniyle bulundukları kabın tabanına ve çeperlerine basınç uygular; bu basınç derinlik ve sıvının yoğunluğuyla doğru orantılıdır. Sıvı içindeki cisimlere yukarı yönlü kaldırma kuvveti etki eder; bu kuvvet cismin batan hacmi kadar sıvının ağırlığına eşittir (Arşimet ilkesi).",
      "Bir cismin yüzmesi, askıda kalması ya da batması, cismin özkütlesinin sıvının özkütlesiyle karşılaştırılmasına bağlıdır. Akışkanların hızı arttıkça basıncının azalması (Bernoulli ilkesi) uçak kanatlarının kaldırma kuvvetini açıklar."
    ], [
      ["Özkütlesi suyunkinden küçük olan cisim suya bırakılınca ne olur?", "Yüzer.", "Batar.", "Askıda kalır.", "Erir.", "d(cisim) < d(su)"],
      ["Sıvı basıncı aşağıdakilerden hangisine bağlı değildir?", "Kabın şekline", "Derinliğe", "Sıvının özkütlesine", "Yer çekimi ivmesine", "P = h·d·g"],
      ["Kaldırma kuvveti hangi ilkeyle açıklanır?", "Arşimet ilkesi", "Pascal ilkesi", "Bernoulli ilkesi", "Newton'un 3. yasası", "Batan hacim kadar sıvının ağırlığı."],
      ["Uçak kanadının üstünde hava daha hızlı akıyorsa ne olur?", "Üstte basınç azalır, kanat yukarı itilir.", "Üstte basınç artar.", "Kanat aşağı itilir.", "Basınç değişmez.", "Bernoulli."]
    ], [
      ["Demirden yapılan gemilerin yüzebilmesini kaldırma kuvveti ve özkütle kavramlarıyla açıklayınız.", "Gemi içi boş tasarlandığı için ortalama özkütlesi suyunkinden küçüktür ve büyük hacimde su yerinden ederek ağırlığına eşit kaldırma kuvveti oluşturur; bu yüzden yüzer."]
    ]]
  ]],
  ["Enerji", 2, [
    ["İş, Enerji ve Enerji Dönüşümleri", [
      "İş: W = F · x (kuvvet yönünde yer değiştirme) · Birim: J",
      "Kinetik enerji: Ek = ½ m v² · Potansiyel enerji: Ep = m g h",
      "Enerji korunur; bir türden diğerine dönüşür.",
      "Verim = faydalı enerji / harcanan enerji × 100",
      "Güç = iş / zaman · Birim: watt (W)"
    ], [
      "Fizikte iş, bir kuvvetin cismi kuvvet doğrultusunda hareket ettirmesidir; kuvvet hareket yönüne dik ise iş yapılmaz. Hareket eden cisimler kinetik, yerden yüksekte olan cisimler çekim potansiyel enerjisine sahiptir.",
      "Enerji yoktan var edilemez, var olan yok edilemez; yalnızca bir türden diğerine dönüşür. Sürtünme gibi etkiler enerjinin bir kısmını ısıya dönüştürdüğü için makinelerin verimi %100'den azdır."
    ], [
      ["2 kg kütleli cisim 10 m yükseklikteyse potansiyel enerjisi kaç J'dür? (g = 10)", "200", "20", "100", "2000", "m g h = 2·10·10"],
      ["Kütlesi 4 kg, hızı 3 m/s olan cismin kinetik enerjisi kaç J'dür?", "18", "36", "12", "6", "½ · 4 · 9"],
      ["Bavulu elde tutarak yatay yolda yürüyen kişi bavula karşı fiziksel anlamda iş yapar mı?", "Hayır, kuvvet hareket yönüne diktir.", "Evet, çok iş yapar.", "Evet, yürüdüğü için.", "Yalnızca hızlanırken hayır.", "F ⊥ x → W = 0"],
      ["100 J enerji harcayıp 60 J faydalı iş yapan makinenin verimi yüzde kaçtır?", "60", "40", "160", "100", "60/100"]
    ], [
      ["Serbest bırakılan bir topun düşerken ve yere çarpıp zıplarken enerji dönüşümlerini açıklayınız; neden her zıplayışta daha az yükseldiğini belirtiniz.", "Düşerken potansiyel enerji kinetik enerjiye dönüşür; yükselirken kinetik enerji potansiyele dönüşür. Çarpışma ve hava sürtünmesinde enerjinin bir kısmı ısı ve sese dönüştüğü için mekanik enerji azalır, top her seferinde daha az yükselir."]
    ]]
  ]]
]);

DERS("kimya", "kim", { ad: "Kimya", ikon: "⚗️", renk: "#db2777" }, [
  ["Kimya Bilimi ve Laboratuvar Güvenliği", 1, [
    ["Kimyanın Alanları ve Güvenlik", [
      "Simyadan kimyaya: deneysel yöntem; Robert Boyle, Lavoisier (kütlenin korunumu)",
      "Alt dallar: analitik, organik, anorganik, fizikokimya, biyokimya, polimer",
      "Güvenlik sembolleri: yanıcı, aşındırıcı, zehirli, patlayıcı, tahriş edici, çevreye zararlı",
      "Laboratuvarda: önlük, gözlük, eldiven; kimyasallar tadılmaz, koklanmaz."
    ], [
      "Simya, maddeleri dönüştürmeye çalışan ancak sistematik bilgi üretmeyen bir uğraştı. Kimya ise deney ve gözleme dayanan bir bilimdir; Lavoisier kütlenin korunumu yasasıyla kimyayı nicel bir bilim hâline getirmiştir. Cabir bin Hayyan damıtma ve süzme gibi tekniklerde önemli katkılar sağlamıştır.",
      "Kimyasal maddelerin ambalajlarında tehlike sembolleri bulunur. Laboratuvarda koruyucu ekipman kullanılmalı, kimyasallar etiketsiz kaplarda saklanmamalı, asit sulandırılırken asit suya yavaşça eklenmelidir."
    ], [
      ["Kimyayı nicel bir bilim hâline getiren kütlenin korunumu yasası kime aittir?", "Lavoisier", "Boyle", "Dalton", "Mendeleyev", "Antoine Lavoisier."],
      ["Asit sulandırılırken doğru yöntem hangisidir?", "Asit suya yavaşça eklenir.", "Su aside hızla eklenir.", "Karıştırmadan dökülür.", "Isıtılarak eklenir.", "Sıçramayı önler."],
      ["Canlıların yapısındaki kimyasal olayları inceleyen alt dal hangisidir?", "Biyokimya", "Analitik kimya", "Polimer kimyası", "Anorganik kimya", "Biyokimya."],
      ["Laboratuvarda yapılmaması gereken davranış hangisidir?", "Kimyasalı tadına bakarak tanımak", "Koruyucu gözlük takmak", "Etiketleri okumak", "Önlük giymek", "Asla tadılmaz."]
    ], [
      ["Simya ile kimya arasındaki iki farkı yazınız.", "Simya deneme-yanılmaya ve mistik amaçlara (altın elde etme, ölümsüzlük iksiri) dayanır; kimya bilimsel yöntem, sistematik deney ve nicel ölçüme dayanır, bilgisi sınanabilir."]
    ]]
  ]],
  ["Atom ve Periyodik Sistem", 1, [
    ["Atom Modelleri ve Atomun Yapısı", [
      "Dalton (içi dolu küre) → Thomson (üzümlü kek) → Rutherford (çekirdek) → Bohr (katmanlar) → Modern atom modeli",
      "Proton (+) ve nötron çekirdekte, elektron (−) katmanlarda",
      "Atom numarası = proton sayısı · Kütle numarası = proton + nötron",
      "İzotop: proton sayısı aynı, nötron sayısı farklı",
      "İyon: elektron alan (−) anyon, elektron veren (+) katyon"
    ], [
      "Atom hakkındaki düşünceler deneylerle gelişmiştir. Thomson elektronu keşfetti; Rutherford altın levha deneyiyle atomun kütlesinin küçük ve pozitif yüklü bir çekirdekte toplandığını gösterdi; Bohr elektronların belirli enerji düzeylerinde bulunduğunu açıkladı. Modern atom modelinde elektronların yeri olasılıklarla (orbital) ifade edilir.",
      "Bir atomun kimliğini proton sayısı belirler. Nötr atomda proton ve elektron sayıları eşittir; elektron alıp veren atomlar iyon olur. Aynı elementin nötron sayısı farklı atomlarına izotop denir: ¹²C ve ¹⁴C."
    ], [
      ["Atomun kimliğini belirleyen tanecik hangisidir?", "Proton", "Nötron", "Elektron", "Foton", "Proton sayısı = atom numarası."],
      ["Kütle numarası 23, atom numarası 11 olan atomun nötron sayısı kaçtır?", "12", "11", "23", "34", "23 − 11"],
      ["Atomun çekirdeğini keşfeden bilim insanı kimdir?", "Rutherford", "Dalton", "Thomson", "Bohr", "Altın levha deneyi."],
      ["Mg atomu 2 elektron verirse oluşan iyon hangisidir?", "Mg²⁺", "Mg²⁻", "Mg⁺", "Mg", "Elektron veren katyon olur."]
    ], [
      ["³⁵Cl ve ³⁷Cl tanecikleri için proton ve nötron sayılarını karşılaştırınız; bu taneciklere ne ad verilir? (Cl: 17)", "İkisinde de 17 proton vardır; nötron sayıları 18 ve 20'dir. Proton sayısı aynı, nötron sayısı farklı olduğundan izotoptur."]
    ]],
    ["Periyodik Sistem ve Özellikler", [
      "Mendeleyev: artan atom kütlesi · Moseley: artan atom numarası",
      "Periyot (yatay, 7) · Grup (dikey, 18): 1A alkali, 2A toprak alkali, 7A halojen, 8A soy gaz",
      "Grup boyunca aşağı: atom yarıçapı ↑, iyonlaşma enerjisi ↓, metalik özellik ↑",
      "Periyotta sağa: atom yarıçapı ↓, iyonlaşma enerjisi ↑ (genel eğilim)"
    ], [
      "Periyodik sistem elementlerin artan atom numarasına göre sıralandığı tablodur. Aynı gruptaki elementler benzer kimyasal özellik gösterir çünkü değerlik elektron sayıları aynıdır. Alkali metaller suyla şiddetli tepkime verir, halojenler elektron almaya yatkındır, soy gazlar kararlıdır.",
      "Periyodik özellikler düzenli değişir. Grupta aşağı inildikçe katman sayısı arttığından atom yarıçapı büyür ve son elektronu koparmak kolaylaşır (iyonlaşma enerjisi azalır). Periyotta soldan sağa çekirdek yükü arttığı için yarıçap genellikle küçülür."
    ], [
      ["Periyodik sistemde 7A grubundaki elementlere ne denir?", "Halojenler", "Soy gazlar", "Alkali metaller", "Toprak alkali metaller", "F, Cl, Br, I"],
      ["Grupta yukarıdan aşağı inildikçe atom yarıçapı nasıl değişir?", "Artar", "Azalır", "Değişmez", "Önce artar sonra azalır", "Katman sayısı artar."],
      ["Modern periyodik sistemde elementler neye göre sıralanır?", "Artan atom numarası", "Artan kütle", "Alfabetik", "Keşif yılı", "Moseley."],
      ["Aynı gruptaki elementlerin benzer özellik göstermesinin nedeni nedir?", "Değerlik elektron sayılarının aynı olması", "Kütlelerinin aynı olması", "Nötron sayılarının aynı olması", "Aynı periyotta olmaları", "Son katman elektronları."]
    ], [
      ["Na (11) ve K (19) elementlerinden hangisinin elektron vermesinin daha kolay olduğunu periyodik özelliklerle açıklayınız.", "İkisi de 1A grubundadır; K daha aşağıdadır, katman sayısı fazla ve yarıçapı büyüktür. Son elektron çekirdekten uzak olduğundan daha kolay koparılır; iyonlaşma enerjisi K'da daha düşüktür."]
    ]]
  ]],
  ["Kimyasal Türler Arası Etkileşimler", 2, [
    ["İyonik ve Kovalent Bağ", [
      "İyonik bağ: metal + ametal, elektron alışverişi (NaCl)",
      "Kovalent bağ: ametal + ametal, elektron ortaklaşması (H₂O, CO₂)",
      "Apolar kovalent: aynı atomlar (H₂, O₂) · Polar: farklı atomlar (HCl)",
      "Metalik bağ: metal katyonları ve serbest elektronlar (elektrik iletkenliği)",
      "Zayıf etkileşimler: hidrojen bağı, van der Waals"
    ], [
      "Atomlar kararlı hâle (soy gaz elektron düzenine) ulaşmak için bağ yapar. Metaller elektron verip katyon, ametaller elektron alıp anyon oluşturur; zıt yüklü iyonlar arasındaki elektrostatik çekime iyonik bağ denir. İki ametal ise elektronlarını ortaklaşa kullanarak kovalent bağ oluşturur.",
      "Moleküller arasında oluşan zayıf etkileşimler maddelerin kaynama noktası ve çözünürlük gibi fiziksel özelliklerini belirler. Su molekülleri arasındaki hidrojen bağları suyun kaynama noktasının beklenenden yüksek olmasını sağlar."
    ], [
      ["NaCl bileşiğindeki bağ türü hangisidir?", "İyonik", "Apolar kovalent", "Polar kovalent", "Metalik", "Metal + ametal."],
      ["H₂ molekülündeki bağ türü hangisidir?", "Apolar kovalent", "Polar kovalent", "İyonik", "Hidrojen bağı", "Aynı atomlar."],
      ["Metallerin elektriği iletmesi neyle açıklanır?", "Serbest (delokalize) elektronlar", "İyonik bağ", "Hidrojen bağı", "Kovalent bağ", "Metalik bağ."],
      ["Suyun kaynama noktasının yüksek olmasının nedeni nedir?", "Moleküller arası hidrojen bağları", "İyonik bağ", "Metalik bağ", "Molekül kütlesinin büyük olması", "H bağı."]
    ], [
      ["İyonik ve kovalent bağı oluşum şekli ve örnekle karşılaştırınız.", "İyonik: metal ile ametal arasında elektron alışverişi, zıt yüklü iyonların çekimi (NaCl, MgO). Kovalent: ametaller arasında elektron ortaklaşması (H₂O, CH₄)."]
    ]]
  ]],
  ["Maddenin Hâlleri ve Çevre", 2, [
    ["Katı, Sıvı, Gaz ve Hâl Değişimleri", [
      "Katı: düzenli, titreşim · Sıvı: akışkan, öteleme · Gaz: düzensiz, tanecikler arası boşluk çok",
      "Erime-donma, buharlaşma-yoğuşma, süblimleşme-kırağılaşma",
      "Kaynama noktası dış basınca bağlıdır; basınç düşükse daha düşük sıcaklıkta kaynar.",
      "Plazma: iyonlaşmış gaz (yıldızlar, şimşek)"
    ], [
      "Maddenin hâlleri taneciklerin düzenine ve hareketine göre belirlenir. Katılarda tanecikler düzenli dizilmiş ve yalnızca titreşir; sıvılarda tanecikler birbiri üzerinden kayar; gazlarda tanecikler arası uzaklık çok büyüktür ve tanecikler serbestçe hareket eder.",
      "Hâl değişimleri ısı alışverişiyle olur: erime, buharlaşma ve süblimleşme ısı alarak; donma, yoğuşma ve kırağılaşma ısı vererek gerçekleşir. Yüksek rakımlarda açık hava basıncı düşük olduğu için su 100 °C'den düşük sıcaklıkta kaynar."
    ], [
      ["Naftalinin katıdan doğrudan gaza geçmesine ne denir?", "Süblimleşme", "Buharlaşma", "Kırağılaşma", "Erime", "Katı → gaz."],
      ["Hangisi ısı vererek gerçekleşir?", "Yoğuşma", "Erime", "Buharlaşma", "Süblimleşme", "Gaz → sıvı ısı verir."],
      ["Dağın tepesinde suyun 100 °C'den düşük sıcaklıkta kaynamasının nedeni nedir?", "Dış basıncın düşük olması", "Suyun saf olmaması", "Sıcaklığın yüksek olması", "Rüzgâr", "Kaynama noktası basınca bağlı."],
      ["Tanecikleri arasındaki boşluğun en fazla olduğu hâl hangisidir?", "Gaz", "Katı", "Sıvı", "Kristal", "Gazlar sıkıştırılabilir."]
    ], [
      ["Düdüklü tencerede yemeklerin daha çabuk pişmesini basınç ve kaynama noktası ilişkisiyle açıklayınız.", "Düdüklü tencerede buhar kaçamadığı için içerideki basınç artar; basınç arttıkça suyun kaynama noktası yükselir (≈120 °C). Daha yüksek sıcaklıkta pişen yemek daha çabuk pişer."]
    ]]
  ]]
]);

DERS("biyoloji", "bio", { ad: "Biyoloji", ikon: "🧬", renk: "#22a06b" }, [
  ["Yaşam ve Canlıların Ortak Özellikleri", 1, [
    ["Canlıların Ortak Özellikleri ve Temel Bileşenler", [
      "Ortak özellikler: hücresel yapı, beslenme, solunum, boşaltım, üreme, büyüme-gelişme, uyarılara tepki, metabolizma, homeostazi",
      "İnorganik bileşenler: su, mineraller, asitler-bazlar",
      "Organik bileşenler: karbonhidratlar, lipitler, proteinler, nükleik asitler, vitaminler, enzimler",
      "Enzimler: protein yapılı biyolojik katalizörler; sıcaklık ve pH'tan etkilenir."
    ], [
      "Canlıları cansızlardan ayıran ortak özellikler vardır: tüm canlılar hücrelerden oluşur, enerji üretmek için solunum yapar, metabolizma faaliyetleri gösterir, çevresel uyarılara tepki verir ve iç dengesini (homeostazi) korur. Virüsler hücresel yapıda olmadığı için canlı ile cansız arasında kabul edilir.",
      "Canlıların yapısında inorganik ve organik bileşikler bulunur. Karbonhidratlar temel enerji kaynağı, lipitler yedek enerji ve yalıtım, proteinler yapı ve düzenleyici görevler, nükleik asitler (DNA, RNA) kalıtım görevini üstlenir. Enzimler kimyasal tepkimeleri hızlandırır; aşırı sıcaklıkta yapıları bozulur."
    ], [
      ["Hücrede ilk enerji kaynağı olarak kullanılan organik bileşik hangisidir?", "Karbonhidrat", "Protein", "Vitamin", "Nükleik asit", "Glikoz."],
      ["Kalıtım bilgisini taşıyan bileşik hangisidir?", "DNA", "Lipit", "Glikojen", "Su", "Nükleik asit."],
      ["Enzimlerle ilgili hangisi doğrudur?", "Protein yapılıdır, yüksek sıcaklıkta yapısı bozulur.", "Tepkimeden sonra tükenirler.", "Her tepkimeye etki ederler.", "Yağ yapılıdır.", "Biyolojik katalizör."],
      ["Canlıların vücut içi dengesini korumasına ne denir?", "Homeostazi", "Metabolizma", "Adaptasyon", "Mutasyon", "İç denge."]
    ], [
      ["Virüslerin neden canlı ile cansız arasında kabul edildiğini iki gerekçeyle açıklayınız.", "Hücresel yapıları ve kendi metabolizmaları yoktur, konak hücre dışında çoğalamazlar (cansız özelliği); ancak kalıtım materyali taşır ve konak hücrede çoğalabilirler (canlı özelliği)."]
    ]]
  ]],
  ["Hücre", 1, [
    ["Hücre Yapısı ve Organeller", [
      "Prokaryot: zarla çevrili çekirdek ve organel yok (bakteri) · Ökaryot: çekirdek ve zarlı organeller var",
      "Hücre zarı: seçici geçirgen · Çekirdek: yönetim ve kalıtım",
      "Mitokondri: enerji (ATP) · Kloroplast: fotosentez (bitki) · Ribozom: protein sentezi",
      "Hücre teorisi (Schleiden, Schwann, Virchow): tüm canlılar hücrelerden oluşur, hücre önceki hücreden gelir.",
      "Madde geçişi: difüzyon, osmoz, aktif taşıma, endositoz-ekzositoz"
    ], [
      "Hücre teorisine göre tüm canlılar bir ya da daha çok hücreden oluşur, hücre canlılığın en küçük birimidir ve yeni hücreler var olan hücrelerin bölünmesiyle oluşur. Bakteriler prokaryot, bitki, hayvan ve mantar hücreleri ökaryottur.",
      "Hücre zarı seçici geçirgendir. Difüzyon ve osmoz enerji harcanmadan, maddelerin çok yoğun ortamdan az yoğun ortama geçişidir; aktif taşıma ise ATP harcanarak az yoğundan çok yoğuna gerçekleşir. Bitki hücrelerinde hücre duvarı ve kloroplast, hayvan hücrelerinde sentrozom bulunur."
    ], [
      ["Protein sentezinin yapıldığı organel hangisidir?", "Ribozom", "Mitokondri", "Lizozom", "Golgi", "Ribozom."],
      ["Hayvan hücresinde bulunmayan yapı hangisidir?", "Kloroplast", "Mitokondri", "Ribozom", "Hücre zarı", "Kloroplast bitkiye özgü."],
      ["Suyun seçici geçirgen zardan geçişine ne denir?", "Osmoz", "Aktif taşıma", "Endositoz", "Fagositoz", "Osmoz."],
      ["Prokaryot hücrede hangisi bulunmaz?", "Zarla çevrili çekirdek", "Ribozom", "DNA", "Hücre zarı", "Bakteride çekirdek zarı yok."]
    ], [
      ["Tatlı suya konulan bir bitki hücresinde ve tuzlu suya konulan bir hayvan hücresinde ne olur? Osmozla açıklayınız.", "Tatlı su: hücreye su girer, bitki hücresi şişer ama hücre duvarı patlamayı önler (turgor). Tuzlu su: hayvan hücresi su kaybedip büzülür, çünkü su az yoğun (hücre içi) ortamdan çok yoğun (tuzlu) ortama geçer."]
    ]]
  ]],
  ["Canlıların Sınıflandırılması", 2, [
    ["Sınıflandırma ve Âlemler", [
      "Sınıflandırma basamakları: âlem > şube > sınıf > takım > aile > cins > tür",
      "Tür: birbiriyle çiftleşip verimli döl verebilen bireyler",
      "İkili adlandırma (Linnaeus): cins + tür adı → Homo sapiens",
      "Âlemler: bakteriler, arkeler, protistler, bitkiler, mantarlar, hayvanlar",
      "Basamak küçüldükçe ortak özellik artar, birey sayısı azalır."
    ], [
      "Canlılar ortak özelliklerine göre gruplandırılır. Linnaeus'un geliştirdiği ikili adlandırmada her türün iki kelimeden oluşan bilimsel bir adı vardır; ilki cins, ikincisi tür adıdır ve Latince yazılır. Tür, sınıflandırmanın en küçük birimidir.",
      "Sınıflandırma basamaklarında âlemden türe gidildikçe canlı çeşitliliği azalır, ortak özellik sayısı artar. Mantarlar hücre duvarı taşıdığı hâlde fotosentez yapamadığı için bitkilerden ayrı bir âlemde incelenir."
    ], [
      ["Sınıflandırmanın en küçük birimi hangisidir?", "Tür", "Cins", "Aile", "Âlem", "Tür."],
      ["İkili adlandırma sistemini geliştiren bilim insanı kimdir?", "Linnaeus", "Darwin", "Mendel", "Pasteur", "Carl Linnaeus."],
      ["Fotosentez yapamayan, hücre duvarlı, sporla üreyen canlılar hangi âlemdedir?", "Mantarlar", "Bitkiler", "Hayvanlar", "Bakteriler", "Mantar âlemi."],
      ["Âlemden türe doğru gidildikçe ne olur?", "Ortak özellikler artar.", "Birey sayısı artar.", "Çeşitlilik artar.", "Ortak özellikler azalır.", "Benzerlik artar."]
    ], [
      ["At ile eşeğin çiftleşmesinden doğan katırın kısır olması tür kavramıyla nasıl açıklanır?", "Tür, çiftleşip verimli (üreyebilen) döl veren bireylerden oluşur. At ve eşek farklı türlerdir; döl verebilseler de katır kısır olduğu için aynı tür sayılmazlar."]
    ]]
  ]],
  ["Ekosistem ve Biyoçeşitlilik", 2, [
    ["Ekosistem, Madde Döngüleri ve Biyoçeşitlilik", [
      "Ekosistem: canlı (biyotik) + cansız (abiyotik) bileşenler",
      "Üretici → tüketici → ayrıştırıcı; enerji akışı tek yönlü, madde döngüsel",
      "Biyoçeşitlilik: genetik, tür ve ekosistem çeşitliliği",
      "Türkiye üç fitocoğrafik bölgenin kesişiminde → yüksek biyoçeşitlilik, çok sayıda endemik tür",
      "Tehditler: habitat kaybı, kirlilik, iklim değişikliği, istilacı türler"
    ], [
      "Ekosistem; belirli bir alandaki canlılar ile bu canlıları etkileyen sıcaklık, ışık, su ve toprak gibi cansız faktörlerin bütünüdür. Ekosistemde enerji Güneş'ten üreticilere ve tüketicilere tek yönlü akar; madde ise ayrıştırıcılar sayesinde döngüler hâlinde yeniden kullanılır.",
      "Biyoçeşitlilik, bir bölgedeki gen, tür ve ekosistem zenginliğidir. Türkiye farklı iklim ve yer şekillerine sahip olduğundan zengin bir biyoçeşitliliğe ve yalnızca belli bir bölgede yaşayan pek çok endemik türe sahiptir. Biyoçeşitliliğin korunması ekosistemlerin dengesi için zorunludur."
    ], [
      ["Hangisi ekosistemin abiyotik bileşenidir?", "Sıcaklık", "Bakteri", "Bitki", "Mantar", "Cansız faktör."],
      ["Ölü canlıları parçalayarak maddeleri toprağa geri kazandıran canlılar hangileridir?", "Ayrıştırıcılar", "Üreticiler", "Otçullar", "Etçiller", "Bakteri ve mantarlar."],
      ["Yalnızca belirli bir bölgede doğal olarak yaşayan türlere ne denir?", "Endemik tür", "İstilacı tür", "Göçmen tür", "Evcil tür", "Endemik."],
      ["Ekosistemde enerji akışı için hangisi doğrudur?", "Tek yönlüdür.", "Döngüseldir.", "Tüketicilerden üreticilere akar.", "Hiç kaybolmaz.", "Güneş → üretici → tüketici."]
    ], [
      ["Biyoçeşitliliği tehdit eden iki etkeni ve bunlara karşı alınabilecek birer önlemi yazınız.", "Habitat kaybı → milli parklar ve koruma alanları oluşturmak. Çevre kirliliği → atık arıtma, tarımda bilinçli ilaç kullanımı. (İklim değişikliği → fosil yakıt kullanımını azaltmak.)"]
    ]]
  ]]
]);
