window.ICERIK = window.ICERIK || {};
// 7. sınıf Fen Bilimleri - Maarif Modeli 7 ünite (tymm.meb.gov.tr)
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.fen = {
  ad: "Fen Bilimleri", ikon: "🔬", renk: "#22a06b",
  uniteler: [
    {
      id: "f1", ad: "Uzay Çağı",
      konular: [
        {
          id: "f1k1", ad: "Uzay Araştırmaları ve Teknolojileri", video: "1tI2YPzJ4kg",
          ozet: ["Uzay teknolojileri: roket, yapay uydu, uzay istasyonu, uzay aracı, uzay mekiği, teleskop.", "Yapay uydular: iletişim, hava tahmini, navigasyon (konum), gözlem için kullanılır.", "Türkiye: Türksat iletişim uyduları, İMECE yer gözlem uydusu, Türkiye Uzay Ajansı (TUA, 2018).", "İlk Türk astronot Alper Gezeravcı 2024'te Uluslararası Uzay İstasyonu'na gitti.", "Uzay kirliliği: işlevini yitirmiş uydular ve roket parçaları; uydulara çarpma riski oluşturur."],
          anlatim: [
            "İnsanlar uzayı tanımak için pek çok teknoloji geliştirmiştir. Roketler araçları uzaya taşır. Yapay uydular Dünya'nın etrafında dolanarak iletişim, televizyon yayını, hava tahmini, navigasyon (GPS) ve yer gözlemi yapar. Uzay istasyonlarında bilim insanları aylarca kalarak deneyler yapar.",
            "Uzayı gözlemlemek için teleskoplar kullanılır. Yer teleskopları atmosferin bulanıklaştırıcı etkisinden etkilenir; bu yüzden Hubble ve James Webb gibi uzay teleskopları atmosferin dışına yerleştirilmiştir ve çok daha net görüntüler alır.",
            "Türkiye de uzay çalışmalarında ilerlemektedir: Türksat uyduları iletişim sağlar, yerli üretim İMECE uydusu yüksek çözünürlüklü yer gözlemi yapar. 2018'de Türkiye Uzay Ajansı kuruldu. 2024'te Alper Gezeravcı Uluslararası Uzay İstasyonu'na giden ilk Türk astronot oldu.",
            "Uzay araştırmaları sorunlara da yol açabilir. Görevini tamamlamış uydular ve roket parçaları uzay kirliliği oluşturur; çok yüksek hızla hareket ettikleri için çalışan uydulara çarpabilirler. Bu sorunu çözmek için uzay çöplerini toplayan araçlar tasarlanmaktadır."
          ],
          sorular: [
            S("Hangisi yapay uyduların kullanım alanlarından biri değildir?", ["Toprağı sürmek", "Hava tahmini yapmak", "Televizyon yayını iletmek", "Konum belirlemek (navigasyon)"], "Uydular uzayda bilgi toplar ve iletir."),
            S("Uzay teleskoplarının yer teleskoplarından daha net görüntü almasının nedeni nedir?", ["Atmosferin bulanıklaştırıcı etkisinden uzak olmaları", "Daha ucuz olmaları", "Güneş'e daha yakın olmaları", "Gece çalışmamaları"], "Atmosfer ışığı bozar."),
            S("İlk Türk astronot kimdir?", ["Alper Gezeravcı", "Aziz Sancar", "Cahit Arf", "Ali Kuşçu"], "2024'te Uluslararası Uzay İstasyonu'na gitti."),
            S("Uzay kirliliği neden bir sorundur?", ["Uzay çöpleri çalışan uydulara çarpabilir.", "Uzayda yağmuru engeller.", "Ay'ın ışığını artırır.", "Dünya'yı soğutur."], "Yüksek hızlı çöpler tehlikelidir.")
          ]
        },
        {
          id: "f1k2", ad: "Yıldızlar, Galaksiler ve Evren", video: "oPN5z0qFLh8",
          ozet: ["Yıldız: kendi ışığını ve ısısını üreten gaz küresi. Güneş bir yıldızdır.", "Yıldızlar bulutsuda (nebula) doğar.", "Güneş gibi yıldızlar: ana yıldız → kırmızı dev → beyaz cüce.", "Çok büyük yıldızlar: kırmızı süper dev → süpernova patlaması → nötron yıldızı ya da kara delik.", "Takımyıldız: gökyüzünde şekil oluşturan yıldız grubu (Büyükayı).", "Galaksi: milyarlarca yıldız, gaz ve tozdan oluşan sistem. Bizim galaksimiz Samanyolu.", "Evren: bütün galaksiler ve gök cisimleri."],
          anlatim: [
            "Yıldızlar, çekirdeklerinde gerçekleşen tepkimelerle ısı ve ışık üreten dev gaz küreleridir. Yıldızlar uzaydaki gaz ve toz bulutlarında (bulutsu/nebula) doğar. Bulutsunun yoğunlaşan kısmında sıcaklık artar ve yeni bir yıldız parlamaya başlar.",
            "Güneş gibi orta büyüklükteki yıldızlar milyarlarca yıl ana yıldız olarak yaşar, yakıtları azalınca genişleyip kırmızı deve dönüşür, sonunda dış katmanlarını kaybederek küçük ve sönük bir beyaz cüceye dönüşür. Çok büyük kütleli yıldızlar ise kırmızı süper dev olduktan sonra süpernova adı verilen büyük bir patlamayla ölür; geriye nötron yıldızı ya da kara delik kalır.",
            "Gökyüzünde bir şekle benzetilen yıldız gruplarına takımyıldız denir: Büyükayı, Küçükayı, Avcı (Orion). Eskiden denizciler ve kervanlar yönlerini takımyıldızlara bakarak bulurdu. Kutup Yıldızı kuzeyi gösterir.",
            "Milyarlarca yıldızın, gaz ve tozun kütle çekimiyle bir arada durduğu sistemlere galaksi denir. Güneş sistemimiz Samanyolu Galaksisi'ndedir. Evrende milyarlarca galaksi vardır. Bütün galaksiler, yıldızlar ve gök cisimleri birlikte evreni oluşturur."
          ],
          sorular: [
            S("Yıldızlar nerede doğar?", ["Bulutsularda (nebula)", "Kara deliklerde", "Gezegenlerin içinde", "Ay'ın yüzeyinde"], "Gaz ve toz bulutları yıldızların doğduğu yerdir."),
            S("Güneş gibi bir yıldızın yaşamının son evresi hangisidir?", ["Beyaz cüce", "Kara delik", "Süpernova", "Bulutsu"], "Ana yıldız → kırmızı dev → beyaz cüce."),
            S("Güneş sistemimizin bulunduğu galaksi hangisidir?", ["Samanyolu", "Andromeda", "Büyükayı", "Orion"], "Samanyolu Galaksisi."),
            S("Hangisi bir takımyıldızdır?", ["Büyükayı", "Samanyolu", "Mars", "Halley"], "Büyükayı yıldızların oluşturduğu bir şekildir.")
          ]
        }
      ]
    },
    {
      id: "f2", ad: "Kuvvet ve Enerjiyi Keşfedelim",
      konular: [
        {
          id: "f2k1", ad: "Fiziksel Anlamda İş", video: "_U9_ysehgNo",
          ozet: ["Fiziksel iş: kuvvet uygulanan cisim, kuvvet yönünde yol alırsa yapılır.", "İş = Kuvvet × Yol (W = F · x). Birimi joule (J). 1 J = 1 N · 1 m", "Cisim hareket etmezse ya da hareket kuvvete dik ise iş yapılmaz.", "Duvarı itmek, çantayı yatay taşımak: fiziksel iş yok.", "Kuvvet ya da yol artarsa iş artar."],
          anlatim: [
            "Günlük hayatta yorulduğumuz her etkinliğe iş deriz; ama fen bilimlerinde iş kavramı farklıdır. Fiziksel anlamda iş yapılabilmesi için cisme bir kuvvet uygulanması ve cismin bu kuvvetin yönünde yol alması gerekir.",
            "Yapılan iş kuvvet ile kuvvet yönünde alınan yolun çarpımına eşittir: İş = Kuvvet × Yol. Kuvvet newton (N), yol metre (m) ile ölçülürse iş joule (J) birimiyle bulunur. 20 N'luk kuvvetle bir kutuyu 3 m itersek 60 J iş yaparız.",
            "Cisme kuvvet uygulandığı hâlde cisim hareket etmiyorsa iş yapılmaz: Duvarı saatlerce itsek de fiziksel iş yapmış olmayız. Hareket yönü kuvvete dik ise de iş yapılmaz: Elimizde çantayı tutarak yatay bir yolda yürürken çantaya uyguladığımız kuvvet yukarı, hareket ise yatay olduğundan çantaya iş yapılmaz.",
            "Bir yükü yere doğru indirmek ya da yerden kaldırmak gibi hareketlerde kuvvet ve hareket aynı doğrultuda olduğu için iş yapılır. Kuvvet ya da yol arttıkça yapılan iş artar."
          ],
          sorular: [
            S("25 N'luk kuvvet uygulanan bir cisim kuvvet yönünde 4 m ilerliyor. Yapılan iş kaç J'dür?", ["100", "29", "21", "6,25"], "25 × 4 = 100 J."),
            S("Hangisinde fiziksel anlamda iş yapılmıştır?", ["Yerdeki kitabı rafa kaldırmak", "Duvarı itmek", "Elindeki çantayla yatay yolda yürümek", "Ağır bir kutuyu kımıldatamadan itmek"], "Kitap kuvvet yönünde yol almıştır."),
            S("İşin birimi hangisidir?", ["Joule", "Newton", "Metre", "Watt"], "1 J = 1 N · 1 m.")
          ]
        },
        {
          id: "f2k2", ad: "Kinetik ve Potansiyel Enerji", video: "R8W3wAXbZPw",
          ozet: ["Enerji: iş yapabilme yeteneği. Birimi joule.", "Kinetik enerji: hareket enerjisi; kütle ve sürat arttıkça artar.", "Çekim potansiyel enerjisi: yükseklikte depolanan enerji; kütle ve yükseklik arttıkça artar.", "Esneklik potansiyel enerjisi: sıkıştırılan/gerilen esnek cisimlerde depolanır (yay, lastik, ok yayı).", "Duran cismin kinetik enerjisi sıfırdır."],
          anlatim: [
            "İş yapabilme yeteneğine enerji denir ve birimi de iş gibi joule'dür. Enerjinin pek çok çeşidi vardır; bu konuda hareket ve konumla ilgili mekanik enerji türlerini inceleriz: kinetik enerji ve potansiyel enerji.",
            "Hareket hâlindeki cisimlerin sahip olduğu enerjiye kinetik enerji denir. Kinetik enerji cismin kütlesine ve süratine bağlıdır. Aynı süratle giden bir kamyonun kinetik enerjisi bisikletten fazladır; aynı bisiklet hızlandıkça kinetik enerjisi artar. Duran cismin kinetik enerjisi yoktur.",
            "Cisimlerin konumları ya da durumları nedeniyle depoladıkları enerjiye potansiyel enerji denir. Yerden yüksekte bulunan cisimlerin çekim potansiyel enerjisi vardır; bu enerji cismin ağırlığına (kütlesine) ve yüksekliğine bağlıdır. Raftaki saksı düşerse iş yapabilir.",
            "Sıkıştırılmış ya da gerilmiş esnek cisimler de enerji depolar; buna esneklik potansiyel enerjisi denir. Gerilmiş sapan lastiği, kurulmuş oyuncak araba yayı, gerilmiş ok yayı esneklik potansiyel enerjisine sahiptir. Esneklik potansiyel enerjisi cismin cinsine ve ne kadar sıkıştırılıp gerildiğine bağlıdır."
          ],
          sorular: [
            S("Kinetik enerji hangi iki niceliğe bağlıdır?", ["Kütle ve sürat", "Kütle ve yükseklik", "Hacim ve sıcaklık", "Renk ve şekil"], "Hareket enerjisi kütle ve sürate bağlıdır."),
            S("Gerilmiş bir sapan lastiğinde hangi enerji depolanır?", ["Esneklik potansiyel enerjisi", "Kinetik enerji", "Çekim potansiyel enerjisi", "Isı enerjisi"], "Esnek cisimler gerilince enerji depolar."),
            S("Aynı yükseklikteki iki saksıdan hangisinin çekim potansiyel enerjisi daha fazladır?", ["Kütlesi daha büyük olanın", "Kütlesi daha küçük olanın", "İkisininki eşittir", "Rengi daha koyu olanın"], "Çekim potansiyel enerjisi kütle ve yüksekliğe bağlıdır.")
          ]
        },
        {
          id: "f2k3", ad: "Enerji Dönüşümü ve Korunumu", video: "R8W3wAXbZPw",
          ozet: ["Enerji yoktan var edilemez, vardan yok edilemez; bir türden diğerine dönüşür (enerjinin korunumu).", "Düşen cisim: potansiyel → kinetik", "Yukarı atılan top: kinetik → potansiyel", "Sürtünme mekanik enerjinin bir kısmını ısıya dönüştürür.", "Salıncak ve lunapark trenlerinde sürekli enerji dönüşümü olur."],
          anlatim: [
            "Enerji bir türden başka bir türe dönüşebilir. Yüksekten bırakılan bir topun çekim potansiyel enerjisi düştükçe azalır, kinetik enerjisi artar. Yukarı atılan topta ise kinetik enerji azalırken potansiyel enerji artar; en tepede top bir an durur ve kinetik enerjisi sıfır olur.",
            "Salıncakta da enerji sürekli dönüşür: En yüksek noktada potansiyel enerji en fazla, kinetik enerji sıfırdır; en alçak noktada kinetik enerji en fazladır. Lunapark trenleri ve kayak yarışları da aynı ilkeyle çalışır.",
            "Enerjinin korunumu ilkesine göre enerji yoktan var edilemez, var olan enerji yok edilemez; yalnızca bir türden diğerine dönüşür. Peki sürtünmeli ortamda salıncak neden bir süre sonra durur? Çünkü sürtünme ve hava direnci mekanik enerjinin bir kısmını ısı enerjisine dönüştürür. Toplam enerji yine korunur ama işe yarar mekanik enerji azalır.",
            "Ellerimizi birbirine sürttüğümüzde ısınması, frene basan arabanın balatalarının ısınması da hareket enerjisinin sürtünme ile ısıya dönüşmesine örnektir."
          ],
          sorular: [
            S("Yüksekten serbest bırakılan bir top düşerken hangi enerji dönüşümü olur?", ["Potansiyel enerji → kinetik enerji", "Kinetik enerji → potansiyel enerji", "Isı enerjisi → kinetik enerji", "Kinetik enerji → elektrik enerjisi"], "Yükseklik azalır, sürat artar."),
            S("Salıncakta kinetik enerjinin en fazla olduğu yer neresidir?", ["En alçak nokta", "En yüksek nokta", "Her yerde eşittir", "Salıncak dururken"], "En alçak noktada sürat en büyüktür."),
            S("Sürtünmeli ortamda salıncağın zamanla durmasının nedeni nedir?", ["Mekanik enerjinin bir kısmının ısıya dönüşmesi", "Enerjinin yok olması", "Kütlenin artması", "Yer çekiminin kaybolması"], "Enerji yok olmaz, ısıya dönüşür.")
          ]
        }
      ]
    },
    {
      id: "f3", ad: "Vücudumuzdaki Sistemler",
      konular: [
        {
          id: "f3k1", ad: "Sindirim Sistemi", video: "",
          ozet: ["Sindirim kanalı: ağız → yutak → yemek borusu → mide → ince bağırsak → kalın bağırsak → anüs", "Yardımcı organlar: karaciğer (safra), pankreas (pankreas öz suyu); besinler bunlardan geçmez.", "Mekanik sindirim: besinlerin parçalanması (dişler, mide kasları).", "Kimyasal sindirim: enzimlerle besinlerin yapı birimlerine ayrılması.", "Sindirimin büyük kısmı ve emilim ince bağırsakta olur; kalın bağırsakta su emilir."],
          anlatim: [
            "Besinlerin vücudumuzda kullanılabilecek küçük yapı birimlerine ayrılmasına sindirim denir. Sindirim sistemi besinlerin geçtiği sindirim kanalı ve sindirime yardımcı organlardan oluşur.",
            "Sindirim ağızda başlar: Dişler besinleri parçalar (mekanik sindirim), tükürükteki enzimler karbonhidratların sindirimini başlatır (kimyasal sindirim). Besinler yutak ve yemek borusundan mideye iner. Midede kaslar besinleri karıştırır ve mide öz suyu proteinlerin sindirimini başlatır.",
            "Sindirimin tamamlandığı yer ince bağırsaktır. Karaciğerin ürettiği safra yağların parçalanmasını kolaylaştırır; pankreasın salgıladığı öz su bütün besin türlerinin sindirimine yardım eder. Sindirilen besinler ince bağırsaktaki tümür denilen çıkıntılardan kana geçer; buna emilim denir.",
            "Kalın bağırsakta suyun ve bazı minerallerin emilimi olur, sindirilemeyen atıklar anüsten dışarı atılır. Sindirim sistemi sağlığı için lifli besinler tüketmeli, bol su içmeli, yemekleri iyice çiğnemeli, dişlerimizi düzenli fırçalamalı ve hazır gıdaları az tüketmeliyiz."
          ],
          sorular: [
            S("Sindirimin tamamlandığı ve besinlerin kana geçtiği organ hangisidir?", ["İnce bağırsak", "Mide", "Kalın bağırsak", "Yemek borusu"], "Emilim ince bağırsaktaki tümürlerden olur."),
            S("Hangisi sindirime yardımcı organdır?", ["Karaciğer", "Mide", "Yutak", "Kalın bağırsak"], "Karaciğer ve pankreastan besin geçmez; salgılarıyla yardım eder."),
            S("Dişlerin besinleri parçalaması hangi sindirime örnektir?", ["Mekanik sindirim", "Kimyasal sindirim", "Emilim", "Boşaltım"], "Fiziksel parçalanma mekanik sindirimdir."),
            S("Kalın bağırsağın temel görevi nedir?", ["Su ve minerallerin emilmesi", "Proteinlerin sindirimine başlamak", "Safra üretmek", "Besinleri çiğnemek"], "Kalın bağırsakta su emilir.")
          ]
        },
        {
          id: "f3k2", ad: "Dolaşım Sistemi ve Kan Bağışı", video: "",
          ozet: ["Dolaşım sistemi: kalp, kan damarları, kan.", "Kalp 4 odacıklı: 2 kulakçık (üstte), 2 karıncık (altta).", "Atardamar: kalpten kanı götürür · Toplardamar: kalbe kan getirir · Kılcal damar: madde alışverişi.", "Küçük dolaşım: kalp → akciğer → kalp (kan temizlenir) · Büyük dolaşım: kalp → vücut → kalp", "Kan: alyuvar (oksijen taşır), akyuvar (savunma), kan pulcukları (pıhtılaşma), kan plazması.", "Kan bağışı ve organ bağışı hayat kurtarır; Kızılay kan bağışı toplar."],
          anlatim: [
            "Dolaşım sistemi vücudumuzdaki besin, oksijen ve atıkları taşır. Kalp, kan damarları ve kandan oluşur. Kalp, göğüs boşluğunda iki akciğer arasında bulunan ve kanı pompalayan kaslı bir organdır. Dört odacığı vardır: üstte sağ ve sol kulakçık, altta sağ ve sol karıncık.",
            "Kalpten çıkan kanı vücuda taşıyan damarlara atardamar, vücuttan kalbe kan getiren damarlara toplardamar denir. Atardamarlar ile toplardamarlar arasında çok ince kılcal damarlar bulunur; hücrelerle madde alışverişi burada olur.",
            "Kan iki yoldan dolaşır. Küçük kan dolaşımında kan sağ karıncıktan akciğerlere gider, karbondioksiti bırakıp oksijen alır ve sol kulakçığa döner. Büyük kan dolaşımında oksijenli kan sol karıncıktan bütün vücuda gider, hücrelere oksijen ve besin bırakır, karbondioksitli kan sağ kulakçığa döner.",
            "Kanın sıvı kısmı plazmadır. Alyuvarlar oksijen taşır, akyuvarlar mikroplara karşı savunma yapar, kan pulcukları yaralanınca kanın pıhtılaşmasını sağlar. Kazalarda ve ameliyatlarda kana ihtiyaç duyulur; sağlıklı yetişkinlerin kan bağışı yapması toplumsal dayanışmanın güzel bir örneğidir. Dolaşım sistemi sağlığı için spor yapmalı, sigara dumanından uzak durmalı, tuzu ve yağı az tüketmeliyiz."
          ],
          sorular: [
            S("Kalpten vücuda kan taşıyan damarlara ne denir?", ["Atardamar", "Toplardamar", "Kılcal damar", "Lenf damarı"], "Atardamarlar kanı kalpten götürür."),
            S("Oksijen taşıyan kan hücresi hangisidir?", ["Alyuvar", "Akyuvar", "Kan pulcuğu", "Plazma"], "Alyuvarlar oksijen taşır."),
            S("Kanın akciğerlere gidip oksijen alarak kalbe döndüğü dolaşım hangisidir?", ["Küçük kan dolaşımı", "Büyük kan dolaşımı", "Sindirim", "Boşaltım"], "Küçük dolaşım akciğerler arasında olur."),
            S("Yaralandığımızda kanın pıhtılaşmasını sağlayan hangisidir?", ["Kan pulcukları", "Alyuvarlar", "Akyuvarlar", "Kalp kası"], "Kan pulcukları pıhtılaşmayı sağlar.")
          ]
        },
        {
          id: "f3k3", ad: "Solunum Sistemi", video: "",
          ozet: ["Solunum yolu: burun → yutak → gırtlak → soluk borusu → bronşlar → bronşçuklar → alveoller (akciğer)", "Alveollerde gaz alışverişi: oksijen kana geçer, karbondioksit kandan alveole geçer.", "Soluk alma: diyafram kasılır ve aşağı iner, göğüs boşluğu genişler.", "Soluk verme: diyafram gevşer ve yukarı çıkar.", "Sağlık: sigaradan uzak durmak, temiz hava, spor; Yeşilay bağımlılıkla mücadele eder."],
          anlatim: [
            "Hücrelerimizin besinlerden enerji elde edebilmesi için oksijene ihtiyacı vardır. Solunum sistemi havadaki oksijeni vücuda alır, hücrelerde oluşan karbondioksiti dışarı atar.",
            "Hava burundan girer; burundaki kıllar ve mukus tozları tutar, hava ısınır ve nemlenir. Hava yutak, gırtlak ve soluk borusundan geçerek bronşlara, oradan bronşçuklara ve akciğerlerdeki küçük hava keseciklerine (alveollere) ulaşır.",
            "Alveollerin etrafı kılcal damarlarla sarılıdır. Burada gaz alışverişi olur: Havadaki oksijen kana geçer, kandaki karbondioksit alveollere geçerek soluk verirken dışarı atılır.",
            "Soluk alıp vermemizi akciğerlerin altındaki diyafram kası ve kaburgalar arası kaslar sağlar. Soluk alırken diyafram kasılarak aşağı iner, göğüs boşluğu genişler ve hava akciğerlere dolar. Soluk verirken diyafram gevşeyip yukarı çıkar. Sigara ve tütün ürünleri akciğerlere büyük zarar verir; Yeşilay bağımlılıkla mücadele eder ve topluma bilinç kazandırır."
          ],
          sorular: [
            S("Akciğerlerde gaz alışverişinin yapıldığı yapılar hangileridir?", ["Alveoller", "Bronşlar", "Gırtlak", "Burun kılları"], "Alveollerde oksijen kana geçer."),
            S("Soluk alırken diyafram nasıl hareket eder?", ["Kasılır ve aşağı iner", "Gevşer ve yukarı çıkar", "Hiç hareket etmez", "Sağa sola kayar"], "Göğüs boşluğu genişler."),
            S("Solunan havanın ısıtılıp nemlendirildiği ve tozlardan temizlendiği yer neresidir?", ["Burun", "Alveol", "Bronşçuk", "Diyafram"], "Burundaki kıllar ve mukus havayı temizler.")
          ]
        },
        {
          id: "f3k4", ad: "Boşaltım Sistemi", video: "",
          ozet: ["Boşaltım: vücutta oluşan zararlı atıkların dışarı atılması.", "Boşaltım sistemi: böbrekler → üreter (idrar borusu) → idrar kesesi → üretra (idrar kanalı)", "Böbrekler kanı süzerek idrar oluşturur.", "Diğer boşaltım yolları: akciğerler (karbondioksit), deri (ter).", "Sağlık: bol su içmek, tuzu az tüketmek, idrarı tutmamak. Organ bağışı hayat kurtarır."],
          anlatim: [
            "Hücrelerimizde yaşamsal olaylar sonucunda üre, fazla tuz, su ve karbondioksit gibi atıklar oluşur. Bu atıkların vücuttan uzaklaştırılmasına boşaltım denir. Atıklar vücutta birikirse zehirlenmeye yol açar.",
            "Boşaltım sisteminin temel organları böbreklerdir. Bel bölgesinde, omurganın iki yanında bulunan fasulye şeklindeki böbrekler kanı süzerek atıkları ayırır ve idrarı oluşturur. İdrar üreter adı verilen idrar borularıyla idrar kesesine taşınır, burada biriktirilir ve üretra yoluyla dışarı atılır.",
            "Böbreklerin yanında başka organlar da boşaltıma yardım eder: Akciğerler karbondioksit ve su buharını, deri ise ter yoluyla su, tuz ve az miktarda üreyi atar.",
            "Böbrek sağlığı için günde yeterli su içmeli, tuzu az tüketmeli ve idrarımızı uzun süre tutmamalıyız. Böbrekleri çalışmayan hastalar diyaliz makinesine bağlanır; organ bağışı bu hastalar için hayat kurtarıcıdır."
          ],
          sorular: [
            S("Kanı süzerek idrar oluşturan organ hangisidir?", ["Böbrek", "İdrar kesesi", "Üreter", "Karaciğer"], "Böbrekler kanı süzer."),
            S("İdrarın böbreklerden idrar kesesine taşındığı yapı hangisidir?", ["Üreter (idrar borusu)", "Üretra", "Bronş", "Atardamar"], "Üreter böbrek ile idrar kesesini bağlar."),
            S("Hangisi boşaltım sistemi sağlığı için doğru bir davranış değildir?", ["Çok tuzlu yiyecekler tüketmek", "Bol su içmek", "İdrarı tutmamak", "Dengeli beslenmek"], "Fazla tuz böbreklere zarar verir.")
          ]
        }
      ]
    },
    {
      id: "f4", ad: "Işığın Kırılması ve Mercekler",
      konular: [
        {
          id: "f4k1", ad: "Işığın Kırılması", video: "UChX92jbe-0",
          ozet: ["Kırılma: ışığın farklı yoğunluktaki saydam ortama geçerken doğrultu değiştirmesi.", "Az yoğun → çok yoğun ortam (hava → su): ışık normale yaklaşır.", "Çok yoğun → az yoğun ortam (su → hava): ışık normalden uzaklaşır.", "Normal doğrultusunda (dik) gelen ışın kırılmaz.", "Örnekler: suya batırılmış kalemin kırık görünmesi, havuzun sığ görünmesi, gökkuşağı."],
          anlatim: [
            "Işık aynı ortamda doğrusal yayılır. Ancak hava, su ve cam gibi farklı yoğunluktaki saydam ortamlardan birinden diğerine geçerken ilerleme doğrultusu değişir. Bu olaya ışığın kırılması denir.",
            "Ortamların ayrıldığı yüzeye çizilen dik doğruya normal denir. Gelen ışının normal ile yaptığı açı gelme açısı, kırılan ışının normal ile yaptığı açı kırılma açısıdır. Işık az yoğun ortamdan çok yoğun ortama geçerken (havadan suya) normale yaklaşarak kırılır; çok yoğundan az yoğuna geçerken (sudan havaya) normalden uzaklaşır. Yüzeye dik gelen ışın kırılmadan geçer.",
            "Suya batırılan kalemin kırık görünmesi, havuzun olduğundan daha sığ görünmesi, sudaki balığın olduğundan farklı yerde görünmesi ışığın kırılmasından kaynaklanır.",
            "Gökkuşağı da kırılmayla oluşur: Güneş ışığı yağmur damlalarına girip çıkarken kırılır ve beyaz ışık renklerine ayrılır."
          ],
          sorular: [
            S("Işık havadan suya geçerken nasıl kırılır?", ["Normale yaklaşarak", "Normalden uzaklaşarak", "Hiç kırılmaz", "Geri yansır"], "Az yoğundan çok yoğuna geçerken normale yaklaşır."),
            S("Hangisi ışığın kırılmasına örnek değildir?", ["Aynada görüntümüzü görmek", "Suya batırılan kalemin kırık görünmesi", "Havuzun sığ görünmesi", "Gökkuşağının oluşması"], "Aynada görmek yansımadır."),
            S("Hangi durumda ışık kırılmaz?", ["Ortamların ayrıldığı yüzeye dik gelirse", "Havadan suya eğik geçerse", "Sudan havaya eğik geçerse", "Camdan havaya eğik geçerse"], "Normal doğrultusunda gelen ışın kırılmaz.")
          ]
        },
        {
          id: "f4k2", ad: "Mercekler ve Kullanım Alanları", video: "UChX92jbe-0",
          ozet: ["Mercek: ışığı kırarak yön değiştiren saydam cisim.", "İnce kenarlı (yakınsak/toplayıcı) mercek: ortası kalın; ışınları odakta toplar.", "Kalın kenarlı (ıraksak/dağıtıcı) mercek: ortası ince; ışınları dağıtır.", "İnce kenarlı: büyüteç, fotoğraf makinesi, mikroskop, teleskop, hipermetrop gözlüğü.", "Kalın kenarlı: miyop gözlüğü, kapı dürbünü, el feneri (dağıtmak için)."],
          anlatim: [
            "Işığı kırarak yönünü değiştiren, en az bir yüzü küresel olan saydam cisimlere mercek denir. Mercekler cam ya da saydam plastikten yapılır ve ikiye ayrılır.",
            "Ortası kenarlarından kalın olan merceklere ince kenarlı mercek denir. Bu mercekler üzerlerine paralel gelen ışınları kırarak bir noktada toplar; bu noktaya odak noktası denir. Bu yüzden ince kenarlı mercekler yakınsak (toplayıcı) merceklerdir. Güneş ışınlarını büyüteçle bir noktada toplayıp kâğıdı yakabiliriz.",
            "Ortası kenarlarından ince olan merceklere kalın kenarlı mercek denir. Bu mercekler paralel ışınları dağıtır; bu yüzden ıraksak (dağıtıcı) merceklerdir.",
            "İnce kenarlı mercekler büyüteçte, fotoğraf makinesinde, mikroskopta, teleskopta, projeksiyon cihazında ve yakını göremeyen (hipermetrop) gözlerin gözlüklerinde kullanılır. Kalın kenarlı mercekler uzağı göremeyen (miyop) gözlerin gözlüklerinde ve kapı dürbünlerinde kullanılır."
          ],
          sorular: [
            S("Büyüteçte hangi mercek kullanılır?", ["İnce kenarlı mercek", "Kalın kenarlı mercek", "Düz ayna", "Tümsek ayna"], "Büyüteç ince kenarlı (yakınsak) mercektir."),
            S("Miyop gözlüklerinde hangi mercek kullanılır?", ["Kalın kenarlı mercek", "İnce kenarlı mercek", "Çukur ayna", "Prizma"], "Miyopide ıraksak mercek kullanılır."),
            S("Paralel ışınları bir noktada toplayan mercek hangisidir?", ["İnce kenarlı (yakınsak) mercek", "Kalın kenarlı (ıraksak) mercek", "Düz cam", "Buzlu cam"], "İnce kenarlı mercek ışınları odakta toplar.")
          ]
        }
      ]
    },
    {
      id: "f5", ad: "Maddenin Doğasına Yolculuk",
      konular: [
        {
          id: "f5k1", ad: "Atom ve Yapısı", video: "ViFGKGNYlpw",
          ozet: ["Atom: maddenin en küçük yapı birimi.", "Çekirdek: proton (+) ve nötron (yüksüz).", "Katmanlar (yörüngeler): elektron (−) hareket eder.", "Proton sayısı = elektron sayısı → atom nötr (yüksüz).", "Atom modelinin tarihçesi: Demokritos → Dalton → Thomson → Rutherford → Bohr → modern model (bilimsel bilgi değişebilir)."],
          anlatim: [
            "Bütün maddeler gözle görülemeyecek kadar küçük taneciklerden oluşur. Maddeyi oluşturan en küçük yapı birimine atom denir. Atom, çekirdek ve çekirdeğin etrafındaki katmanlardan oluşur.",
            "Çekirdekte pozitif (+) yüklü protonlar ve yüksüz nötronlar bulunur. Çekirdeğin etrafındaki katmanlarda ise negatif (−) yüklü elektronlar hızla hareket eder. Bir atomdaki proton sayısı elektron sayısına eşit olduğu için atomlar elektrikçe nötrdür.",
            "Atom fikri ilk olarak yaklaşık 2500 yıl önce Demokritos tarafından ortaya atıldı. Sonraki yüzyıllarda Dalton atomu içi dolu küreye, Thomson üzümlü keke, Rutherford çekirdekli bir yapıya, Bohr gezegenler gibi katmanlarda dönen elektronlara benzetti. Bugünkü modern atom modelinde elektronların bulunma olasılığının yüksek olduğu bölgeler (elektron bulutu) vardır.",
            "Atom modellerinin değişmesi bize bilimsel bilginin yeni kanıtlarla değişebileceğini ve geliştirilebileceğini gösterir."
          ],
          sorular: [
            S("Atomun çekirdeğinde hangi tanecikler bulunur?", ["Proton ve nötron", "Elektron ve proton", "Yalnız elektron", "Elektron ve nötron"], "Elektronlar katmanlardadır."),
            S("Negatif yüklü atom altı tanecik hangisidir?", ["Elektron", "Proton", "Nötron", "Çekirdek"], "Elektron (−), proton (+), nötron yüksüz."),
            S("Atom modellerinin zamanla değişmesi neyi gösterir?", ["Bilimsel bilginin değişebileceğini", "Bilim insanlarının hata yapmadığını", "Atomun hiç incelenmediğini", "Bilimin kesin ve değişmez olduğunu"], "Yeni kanıtlar bilgiyi geliştirir.")
          ]
        },
        {
          id: "f5k2", ad: "Saf Maddeler: Element, Bileşik ve Molekül", video: "p1jTvkUZDuk",
          ozet: ["Element: tek cins atomdan oluşan saf madde (demir Fe, oksijen O₂).", "Bileşik: farklı cins atomların belirli oranda birleşmesiyle oluşan saf madde (su H₂O, karbondioksit CO₂).", "Molekül: iki ya da daha fazla atomun bir araya gelmesi (O₂, H₂O).", "İlk 18 element: H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar", "Periyodik tablo: yatay sıralar periyot, dikey sütunlar grup."],
          anlatim: [
            "Tek cins maddeden oluşan maddelere saf madde denir. Saf maddeler element ve bileşik olarak ikiye ayrılır. Aynı cins atomlardan oluşan saf maddelere element denir: demir, altın, oksijen, hidrojen. Elementler sembollerle gösterilir: H (hidrojen), O (oksijen), C (karbon), Fe (demir), Na (sodyum).",
            "Farklı cins atomların belirli oranlarda kimyasal olarak birleşmesiyle oluşan saf maddelere bileşik denir. Su (H₂O) iki hidrojen ve bir oksijen atomundan, karbondioksit (CO₂) bir karbon ve iki oksijen atomundan oluşur. Sofra tuzu (NaCl) sodyum ve klordan oluşur. Bileşikler formüllerle gösterilir.",
            "İki ya da daha fazla atomun bir araya gelmesiyle oluşan yapılara molekül denir. Oksijen gazı (O₂) iki oksijen atomundan oluşan bir element molekülü; su (H₂O) ise bir bileşik molekülüdür.",
            "Elementler periyodik tabloda atom numaralarına göre sıralanır. Yatay sıralara periyot, dikey sütunlara grup denir. Aynı gruptaki elementlerin özellikleri birbirine benzer. İlk 18 element: hidrojen, helyum, lityum, berilyum, bor, karbon, azot, oksijen, flor, neon, sodyum, magnezyum, alüminyum, silisyum, fosfor, kükürt, klor, argon."
          ],
          sorular: [
            S("Hangisi bir bileşiktir?", ["Su (H₂O)", "Oksijen (O₂)", "Demir (Fe)", "Altın (Au)"], "Su farklı cins atomlardan oluşur."),
            S("Sodyum elementinin sembolü hangisidir?", ["Na", "S", "So", "N"], "Sodyum: Na."),
            S("Periyodik tablodaki dikey sütunlara ne ad verilir?", ["Grup", "Periyot", "Formül", "Molekül"], "Dikey: grup, yatay: periyot."),
            S("Element ile ilgili hangisi doğrudur?", ["Tek cins atomdan oluşur.", "Farklı cins atomlardan oluşur.", "Formülle gösterilir.", "Karışımdır."], "Elementler tek cins atom içerir.")
          ]
        },
        {
          id: "f5k3", ad: "Karışımlar ve Çözünme", video: "yoaQE6qOQoM",
          ozet: ["Karışım: birden fazla maddenin özelliklerini kaybetmeden bir araya gelmesi.", "Homojen karışım (çözelti): her yerinde aynı görünüm (şekerli su, tuzlu su, hava).", "Heterojen karışım: her yeri aynı değil (zeytinyağı-su, kum-çakıl, ayran).", "Çözelti = çözücü + çözünen (şekerli suda su çözücü, şeker çözünen).", "Çözünme hızını artıranlar: sıcaklığı artırmak, karıştırmak, çözüneni toz hâline getirmek."],
          anlatim: [
            "İki ya da daha fazla saf maddenin kendi özelliklerini kaybetmeden, herhangi bir oranda bir araya gelmesiyle oluşan maddelere karışım denir. Karışımlar formülle gösterilmez ve fiziksel yollarla ayrılabilir.",
            "Her yerinde aynı özelliği gösteren, bileşenleri gözle ayırt edilemeyen karışımlara homojen karışım (çözelti) denir: şekerli su, tuzlu su, kolonya, hava, alaşımlar. Bileşenleri ayırt edilebilen karışımlara heterojen karışım denir: zeytinyağı-su, kum-su, ayran, salata.",
            "Bir maddenin başka bir madde içinde gözle görülemeyecek kadar küçük taneciklere ayrılarak dağılmasına çözünme denir. Çözeltide miktarı fazla olan madde çözücü, az olan çözünendir. Şekerli suda su çözücü, şeker çözünendir.",
            "Çözünme hızını bazı etkenler değiştirir: Sıcaklık arttıkça (çay sıcakken şeker hızlı çözünür), karıştırdıkça ve çözünen madde toz hâline getirildikçe (küp şeker yerine toz şeker) çözünme hızlanır. Bunları deneyle sınarken yalnızca bir değişkeni değiştiririz."
          ],
          sorular: [
            S("Hangisi homojen bir karışımdır?", ["Şekerli su", "Zeytinyağı-su", "Kum-çakıl", "Salata"], "Şekerli suyun her yeri aynıdır."),
            S("Tuzlu suda çözücü hangisidir?", ["Su", "Tuz", "Hava", "Şeker"], "Miktarı fazla olan su çözücüdür."),
            S("Hangisi çözünme hızını artırmaz?", ["Çözücüyü soğutmak", "Karıştırmak", "Çözüneni toz hâline getirmek", "Sıcaklığı artırmak"], "Soğutmak çözünmeyi yavaşlatır.")
          ]
        },
        {
          id: "f5k4", ad: "Karışımların Ayrılması", video: "yoaQE6qOQoM",
          ozet: ["Süzme: katı-sıvı heterojen (kum-su) · Mıknatısla ayırma: demir tozu-kum", "Eleme: tane büyüklüğü farklı katılar (un-kepek, kum-çakıl)", "Buharlaştırma: çözünmüş katı-sıvı (tuzlu sudan tuz elde etme)", "Damıtma: kaynama noktası farklı sıvılar (su-alkol)", "Ayırma hunisi / yoğunluk farkı: karışmayan sıvılar (su-zeytinyağı)", "Yüzdürme: yoğunluk farkı (talaş-kum)"],
          anlatim: [
            "Karışımlar fiziksel yollarla bileşenlerine ayrılabilir. Hangi yöntemin kullanılacağı karışımı oluşturan maddelerin farklı özelliklerine bağlıdır: tane büyüklüğü, mıknatısa çekilme, yoğunluk, kaynama noktası, çözünürlük.",
            "Tane büyüklükleri farklı katılar elek ile ayrılır (un-kepek, kum-çakıl). Mıknatısa çekilen maddeler mıknatısla ayrılır (demir tozu-kum). Sıvıda çözünmeyen katılar süzgeç kâğıdıyla süzülür (kum-su).",
            "Yoğunlukları farklı ve birbiri içinde çözünmeyen sıvılar ayırma hunisiyle ayrılır (zeytinyağı-su). Yoğunluk farkından yararlanarak talaş-kum karışımı suya konulup yüzen talaş toplanabilir (yüzdürme).",
            "Sıvıda çözünmüş katıyı elde etmek için buharlaştırma yapılır: Tuzlu su ısıtılınca su buharlaşır, tuz kabın dibinde kalır; tuz gölleri ve tuzlalarda bu yöntem kullanılır. Kaynama noktası farklı sıvılar ise damıtma ile ayrılır: Karışım ısıtılınca önce kaynama noktası düşük olan sıvı buharlaşır, soğutularak ayrı bir kapta toplanır."
          ],
          sorular: [
            S("Tuzlu sudan tuz elde etmek için hangi yöntem kullanılır?", ["Buharlaştırma", "Mıknatısla ayırma", "Eleme", "Süzme"], "Su buharlaşır, tuz kalır."),
            S("Demir tozu ve kum karışımı en kolay nasıl ayrılır?", ["Mıknatısla", "Damıtmayla", "Ayırma hunisiyle", "Buharlaştırmayla"], "Demir mıknatısa çekilir."),
            S("Su ve zeytinyağı karışımını ayırmak için hangi araç kullanılır?", ["Ayırma hunisi", "Elek", "Mıknatıs", "Süzgeç kâğıdı"], "Karışmayan sıvılar yoğunluk farkıyla ayrılır."),
            S("Kaynama noktaları farklı iki sıvıyı ayırmak için hangi yöntem kullanılır?", ["Damıtma", "Eleme", "Süzme", "Mıknatısla ayırma"], "Damıtmada önce kaynama noktası düşük sıvı buharlaşır.")
          ]
        }
      ]
    },
    {
      id: "f6", ad: "Elektriklenme",
      konular: [
        {
          id: "f6k1", ad: "Elektrik Yükleri ve Elektriklenme", video: "",
          ozet: ["Cisimlerde pozitif (+) ve negatif (−) yük bulunur.", "Nötr cisim: + yük = − yük · Pozitif cisim: + > − · Negatif cisim: − > +", "Elektriklenmede yalnızca elektronlar (−) yer değiştirir.", "Sürtünmeyle elektriklenme: elektron veren +, alan − yüklenir.", "Dokunma ile elektriklenme · Etki (yaklaştırma) ile elektriklenme", "Aynı yükler iter, zıt yükler çeker. Elektroskop: cismin yüklü olup olmadığını gösterir.", "Topraklama: yükün toprağa aktarılması (paratoner)."],
          anlatim: [
            "Bütün maddelerde pozitif (+) ve negatif (−) yükler bulunur. Bir cisimdeki pozitif ve negatif yük miktarları eşitse cisim nötrdür. Pozitif yük fazlaysa cisim pozitif, negatif yük fazlaysa negatif yüklüdür. Elektriklenme sırasında yalnızca negatif yüklü elektronlar bir cisimden diğerine geçer; protonlar yer değiştirmez.",
            "Saçımızı tarağa sürttüğümüzde ya da balonu yünlü kazağa sürttüğümüzde cisimler arasında elektron alışverişi olur: Elektron veren cisim pozitif, elektron alan cisim negatif yüklenir. Buna sürtünme ile elektriklenme denir. Yüklü bir cisim nötr bir cisme dokundurulursa yükünü paylaşır (dokunma ile elektriklenme). Yüklü bir cisim nötr bir cisme yaklaştırıldığında ise cisimdeki yükler yer değiştirir (etki ile elektriklenme).",
            "Aynı cins yükler birbirini iter, zıt cins yükler birbirini çeker. Sürtünmüş balonun kâğıt parçalarını çekmesi bunun bir örneğidir. Bir cismin yüklü olup olmadığını anlamak için elektroskop kullanılır: Yüklü cisim elektroskopun topuzuna dokundurulunca yapraklar aynı cins yüklendiği için birbirini iterek açılır.",
            "Cisimlerdeki fazla yükün toprağa aktarılmasına topraklama denir. Bulutlarda biriken yükler yıldırım olarak yere düşebilir; binalara takılan paratonerler yıldırımı güvenle toprağa iletir. Fırtınada ağaç altına sığınmamalı, açık alanda yere çömelmeliyiz."
          ],
          sorular: [
            S("Elektriklenme sırasında hangi tanecikler yer değiştirir?", ["Elektronlar", "Protonlar", "Nötronlar", "Çekirdekler"], "Yalnızca elektronlar hareket eder."),
            S("Sürtünme sırasında elektron kaybeden cisim nasıl yüklenir?", ["Pozitif", "Negatif", "Nötr kalır", "Yükü iki katına çıkar"], "Elektron (−) kaybeden cisimde + yük fazlalaşır."),
            S("İki negatif yüklü cisim birbirine yaklaştırılırsa ne olur?", ["Birbirini iter", "Birbirini çeker", "Hiçbir şey olmaz", "Nötr olur"], "Aynı cins yükler iter."),
            S("Binaları yıldırımdan korumak için kullanılan araç hangisidir?", ["Paratoner", "Elektroskop", "Dinamometre", "Termometre"], "Paratoner yükü toprağa iletir.")
          ]
        }
      ]
    },
    {
      id: "f7", ad: "Sürdürülebilir Yaşam ve Enerji",
      konular: [
        {
          id: "f7k1", ad: "Besin Zinciri ve Enerji Akışı", video: "",
          ozet: ["Üretici: kendi besinini fotosentezle üreten canlı (bitkiler, algler).", "Tüketici: besinini dışarıdan alan canlı (otçul, etçil, hem etçil hem otçul).", "Ayrıştırıcı: ölü canlıları çürüten bakteri ve mantarlar.", "Besin zinciri: Güneş → ot → çekirge → kurbağa → yılan → kartal", "Ekoloji piramidi: tabandan tepeye enerji ve canlı sayısı azalır.", "Biyolojik birikim: zararlı maddeler zincirde yukarı çıktıkça birikir."],
          anlatim: [
            "Ekosistemdeki canlılar besin ilişkilerine göre gruplanır. Bitkiler ve algler güneş enerjisini kullanarak kendi besinlerini üretir; bunlara üretici denir. Besinlerini dışarıdan alan canlılar tüketicidir: Otçullar (tavşan, inek) bitkilerle, etçiller (kurt, aslan) başka hayvanlarla, hem etçil hem otçul canlılar (ayı, insan) her ikisiyle beslenir.",
            "Ölü bitki ve hayvanları çürüterek toprağa mineral olarak geri kazandıran bakteri ve mantarlara ayrıştırıcı denir. Ayrıştırıcılar olmasaydı doğa atıklarla dolar, toprak verimsizleşirdi.",
            "Canlılar arasındaki beslenme ilişkisini sırayla gösteren yapıya besin zinciri denir: Ot → çekirge → kurbağa → yılan → kartal. Birbiriyle bağlantılı birçok besin zinciri besin ağını oluşturur. Besin zincirinde enerji üreticiden tüketicilere doğru akar ve her basamakta enerjinin büyük kısmı canlının yaşamsal faaliyetlerinde kullanılır.",
            "Bu yüzden ekoloji piramidinde tabandan tepeye doğru enerji miktarı ve canlı sayısı azalır. Tarım ilacı gibi zararlı maddeler ise canlıların vücudundan atılamadığı için zincirde yukarı çıktıkça birikir; buna biyolojik birikim denir ve en çok piramidin tepesindeki canlıları etkiler."
          ],
          sorular: [
            S("Besin zincirinin ilk halkasında hangi canlılar bulunur?", ["Üreticiler", "Etçiller", "Ayrıştırıcılar", "Otçullar"], "Zincir üreticilerle başlar."),
            S("Ölü canlıları çürüten canlılar hangileridir?", ["Bakteri ve mantarlar", "Otçullar", "Etçiller", "Bitkiler"], "Ayrıştırıcılar bakteri ve mantarlardır."),
            S("Ekoloji piramidinde tepeye doğru hangisi azalır?", ["Enerji miktarı ve canlı sayısı", "Biyolojik birikim", "Zararlı madde miktarı", "Canlıların vücut büyüklüğü"], "Enerji her basamakta azalır."),
            S("\"Ot → tavşan → tilki → kartal\" zincirinde tilki için hangisi doğrudur?", ["Etçil tüketicidir", "Üreticidir", "Otçuldur", "Ayrıştırıcıdır"], "Tilki tavşanla beslenir.")
          ]
        },
        {
          id: "f7k2", ad: "Kaynakların Tasarruflu Kullanımı", video: "",
          ozet: ["Sürdürülebilir yaşam: bugünün ihtiyaçlarını gelecek nesillerin haklarını koruyarak karşılamak.", "Tatlı su kaynakları çok sınırlıdır (dünyadaki suyun yaklaşık %3'ü).", "Su ayak izi: bir ürünün üretiminde harcanan toplam su.", "Tasarruf: musluğu kapatmak, kısa duş, damlayan musluğu tamir, gereksiz ışıkları söndürmek, A sınıfı cihazlar.", "Atık su arıtılarak yeniden kullanılabilir."],
          anlatim: [
            "Doğal kaynakların gelecek nesillerin ihtiyaçlarını tehlikeye atmadan kullanılmasına sürdürülebilir yaşam denir. Su, toprak, orman ve enerji kaynakları sınırsız değildir.",
            "Dünyadaki suyun çok büyük kısmı tuzlu sudur; içilebilir tatlı su yalnızca yaklaşık %3'tür ve bunun da çoğu buzullarda donmuş hâldedir. Nüfus arttıkça ve iklim değiştikçe tatlı su kaynakları azalmaktadır.",
            "Bir ürünün üretiminden tüketimine kadar harcanan toplam suya su ayak izi denir. Örneğin bir kot pantolonun üretimi binlerce litre su gerektirir. Gereksiz alışverişten kaçınmak, yiyecekleri israf etmemek su ayak izimizi azaltır.",
            "Günlük hayatta dişlerimizi fırçalarken musluğu kapatmak, kısa duş almak, damlayan muslukları tamir ettirmek, boş odalarda ışıkları söndürmek ve enerji tasarruflu cihazlar kullanmak kaynakları korur. Atık sular arıtma tesislerinde temizlenerek tarımda ya da sanayide yeniden kullanılabilir."
          ],
          sorular: [
            S("Bir ürünün üretiminde harcanan toplam suya ne denir?", ["Su ayak izi", "Karbon ayak izi", "Atık su", "Su döngüsü"], "Su ayak izi."),
            S("Dünyadaki suyun yaklaşık ne kadarı tatlı sudur?", ["%3", "%50", "%75", "%97"], "Suyun çok büyük kısmı tuzludur."),
            S("Hangisi kaynakların tasarruflu kullanımına örnek değildir?", ["Diş fırçalarken musluğu açık bırakmak", "Kısa duş almak", "Boş odada ışığı söndürmek", "Damlayan musluğu tamir ettirmek"], "Musluk açık kalırsa su boşa akar.")
          ]
        }
      ]
    }
  ]
};
})();
