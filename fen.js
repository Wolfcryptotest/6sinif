window.ICERIK = window.ICERIK || {};
// 6. sınıf Fen Bilimleri - Maarif Modeli ünite sırası
// S(soru, [doğru, yanlış1, yanlış2, yanlış3], çözüm) → şıklar uygulamada karıştırılır
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.fen = {
  ad: "Fen Bilimleri", ikon: "🔬", renk: "#22a06b",
  uniteler: [
    {
      id: "f1", ad: "Güneş Sistemi ve Tutulmalar",
      konular: [
        {
          id: "f1k1", ad: "Güneş Sistemi ve Gezegenler",
          ozet: ["Merkezde Güneş, etrafında 8 gezegen döner.", "İç (karasal) gezegenler: Merkür, Venüs, Dünya, Mars", "Dış (gaz) gezegenler: Jüpiter, Satürn, Uranüs, Neptün", "Mars ile Jüpiter arasında asteroit kuşağı var.", "En büyük: Jüpiter · En küçük: Merkür · En sıcak: Venüs", "Merkür ve Venüs'ün uydusu yoktur."],
          anlatim: [
            "Güneş sistemi; Güneş, onun etrafında dolanan 8 gezegen, bu gezegenlerin uyduları, asteroitler ve kuyruklu yıldızlardan oluşur. Güneş bir yıldızdır ve kendi ışığını üretir. Gezegenler ve uydular ise Güneş'ten aldıkları ışığı yansıtır.",
            "Güneş'e yakınlık sırasına göre gezegenler: Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün. Bu sırayı akılda tutmak için baş harflerinden bir cümle uydurabilirsin.",
            "İlk dört gezegen iç gezegenlerdir. Katı ve kayalık yapıdadırlar, boyutları küçüktür. Mars ile Jüpiter arasındaki asteroit kuşağından sonra gelen dört gezegen dış gezegenlerdir. Bunlar gaz yapılı, çok büyük gezegenlerdir ve hepsinin halkası vardır.",
            "Jüpiter en büyük, Merkür en küçük gezegendir. Venüs, kalın atmosferi ısıyı tuttuğu için Merkür'den daha sıcaktır. Dünya, üzerinde canlı yaşadığı bilinen tek gezegendir."
          ],
          video: "jVT7NdRGNpw",
          sorular: [
            S("Güneş'e en yakın gezegen hangisidir?", ["Merkür", "Venüs", "Mars", "Neptün"], "Güneş'e yakınlık sırası Merkür ile başlar."),
            S("Hangisi bir iç gezegendir?", ["Mars", "Jüpiter", "Satürn", "Uranüs"], "İç gezegenler: Merkür, Venüs, Dünya, Mars."),
            S("Asteroit kuşağı hangi iki gezegen arasındadır?", ["Mars ve Jüpiter", "Dünya ve Mars", "Jüpiter ve Satürn", "Venüs ve Dünya"], "Asteroit kuşağı iç ve dış gezegenleri ayırır, Mars ile Jüpiter arasındadır."),
            S("Hangisi dış gezegenlerin ortak özelliğidir?", ["Gaz yapılı ve halkalı olmaları", "Kayalık yapılı olmaları", "Uydularının olmaması", "Boyutlarının küçük olması"], "Dış gezegenlerin hepsi büyük, gaz yapılı ve halkalıdır."),
            S("Güneş sistemindeki en sıcak gezegen hangisidir?", ["Venüs", "Merkür", "Mars", "Jüpiter"], "Venüs'ün kalın atmosferi ısıyı hapseder; bu yüzden Güneş'e daha yakın olan Merkür'den bile sıcaktır."),
            S("Hangisi kendi ışığını üretir?", ["Güneş", "Ay", "Dünya", "Jüpiter"], "Güneş bir yıldızdır. Gezegenler ve uydular ışığı yansıtır."),
            S("Hangi iki gezegenin uydusu yoktur?", ["Merkür ve Venüs", "Mars ve Dünya", "Jüpiter ve Satürn", "Uranüs ve Neptün"], "Merkür ve Venüs'ün doğal uydusu yoktur."),
            S("Halkaları en kolay gözlenen gezegen hangisidir?", ["Satürn", "Mars", "Venüs", "Merkür"], "Bütün dış gezegenlerin halkası vardır ama en belirgin halkalar Satürn'dedir.")
          ]
        },
        {
          id: "f1k2", ad: "Güneş Sistemi Modelleri",
          ozet: ["Yer merkezli model: Dünya merkezde (Batlamyus).", "Güneş merkezli model: Güneş merkezde (Kopernik).", "Galileo teleskopla Güneş merkezli modeli destekledi.", "Kepler: gezegenlerin yörüngesi elips şeklindedir.", "Bilim, yeni kanıtlarla değişir ve gelişir.", "Plüton 2006'da cüce gezegen sayıldı."],
          anlatim: [
            "İnsanlar binlerce yıl gökyüzünü gözleyerek evrenin nasıl işlediğini açıklamaya çalıştı. Eski çağlarda Batlamyus'un yer merkezli modeli kabul görüyordu. Bu modele göre Dünya merkezdeydi, Güneş ve gezegenler Dünya'nın etrafında dönüyordu.",
            "1500'lü yıllarda Kopernik güneş merkezli modeli ortaya koydu: Merkezde Güneş vardır ve Dünya da diğer gezegenler gibi Güneş'in etrafında döner.",
            "Galileo teleskopla Jüpiter'in etrafında dönen uyduları gördü. Böylece her şeyin Dünya'nın etrafında dönmediğini kanıtladı. Kepler ise gezegenlerin yörüngelerinin tam bir çember değil, elips şeklinde olduğunu buldu.",
            "Bilimsel bilgi yeni gözlem ve kanıtlarla değişebilir. Örneğin Plüton uzun yıllar gezegen sayıldı. 2006'da yeni ölçütlere göre cüce gezegen olarak sınıflandırıldı."
          ],
          video: "jVT7NdRGNpw",
          sorular: [
            S("Güneş merkezli modeli ortaya koyan bilim insanı kimdir?", ["Kopernik", "Batlamyus", "Newton", "Edison"], "Kopernik, merkezde Güneş'in bulunduğu modeli önerdi."),
            S("Yer merkezli modele göre evrenin merkezinde ne vardır?", ["Dünya", "Güneş", "Ay", "Jüpiter"], "Yer merkezli modelde Dünya merkezdedir."),
            S("Galileo, Güneş merkezli modeli desteklemek için hangi aracı kullandı?", ["Teleskop", "Mikroskop", "Pusula", "Termometre"], "Galileo teleskopla Jüpiter'in uydularını gözledi."),
            S("Kepler'e göre gezegenlerin yörüngesi hangi şekildedir?", ["Elips", "Kare", "Tam çember", "Üçgen"], "Kepler, yörüngelerin elips (basık çember) şeklinde olduğunu buldu."),
            S("Plüton'un artık gezegen sayılmaması bilim hakkında neyi gösterir?", ["Bilgiler yeni kanıtlarla değişebilir.", "Bilim insanları hiç hata yapmaz.", "Gezegenler zamanla kaybolur.", "Bilimsel bilgi asla değişmez."], "Bilimsel bilgi yeni gözlem ve kanıtlarla güncellenir."),
            S("Batlamyus hangi modeli savunmuştur?", ["Yer merkezli model", "Güneş merkezli model", "Atom modeli", "Elips yörünge modeli"], "Batlamyus, Dünya'yı merkeze koyan yer merkezli modeli savundu.")
          ]
        },
        {
          id: "f1k3", ad: "Güneş ve Ay Tutulmaları",
          ozet: ["Güneş tutulması: Ay, Güneş ile Dünya arasına girer.", "Güneş tutulması gündüz ve yeni ay evresinde olur.", "Ay tutulması: Dünya, Güneş ile Ay arasına girer.", "Ay tutulması gece ve dolunay evresinde olur.", "Sıralama: Güneş tutulması G–A–D · Ay tutulması G–D–A", "Güneş tutulmasına çıplak gözle bakılmaz!"],
          anlatim: [
            "Tutulma, bir gök cisminin gölgesinin başka bir gök cisminin üzerine düşmesiyle oluşur. Güneş, Dünya ve Ay aynı doğru üzerine geldiğinde tutulmalar gerçekleşir.",
            "Güneş tutulmasında Ay, Güneş ile Dünya'nın arasına girer ve Ay'ın gölgesi Dünya'ya düşer. Güneş'in bir kısmı ya da tamamı görünmez olur. Güneş tutulması gündüz ve yeni ay evresinde olur. Tam, parçalı ya da halkalı olabilir.",
            "Ay tutulmasında Dünya, Güneş ile Ay'ın arasına girer ve Dünya'nın gölgesi Ay'a düşer. Ay tutulması gece ve dolunay evresinde olur. Dünya'nın gece yaşanan yarısındaki herkes tarafından görülebilir ve daha uzun sürer.",
            "Ay'ın yörüngesi Dünya'nın yörüngesine göre biraz eğik olduğu için her yeni ayda Güneş tutulması, her dolunayda Ay tutulması olmaz. Güneş tutulması mutlaka özel gözlüklerle izlenmelidir, çıplak gözle bakmak gözlere zarar verir."
          ],
          video: "k7k80R6c63A",
          sorular: [
            S("Güneş tutulmasında hangi gök cismi ortadadır?", ["Ay", "Dünya", "Güneş", "Mars"], "Güneş tutulmasında sıralama Güneş – Ay – Dünya'dır."),
            S("Ay tutulması hangi ay evresinde gerçekleşir?", ["Dolunay", "Yeni ay", "İlk dördün", "Son dördün"], "Ay tutulması dolunay evresinde olur."),
            S("Ay tutulmasında hangi cismin gölgesi hangi cisme düşer?", ["Dünya'nın gölgesi Ay'a", "Ay'ın gölgesi Dünya'ya", "Güneş'in gölgesi Ay'a", "Ay'ın gölgesi Güneş'e"], "Dünya, Güneş ile Ay'ın arasına girer, gölgesi Ay'a düşer."),
            S("Güneş tutulması hangi zamanda gözlenebilir?", ["Gündüz", "Gece", "Sadece kışın", "Sadece dolunayda"], "Güneş tutulması gündüz, yeni ay evresinde gerçekleşir."),
            S("Her yeni ay evresinde Güneş tutulması olmamasının sebebi nedir?", ["Ay'ın yörüngesinin eğik olması", "Güneş'in hareket etmemesi", "Ay'ın ışık üretmesi", "Dünya'nın düz olması"], "Ay'ın yörüngesi eğik olduğundan üç cisim her ay tam aynı doğruya gelmez."),
            S("Güneş tutulmasını izlerken hangisi yapılmalıdır?", ["Özel tutulma gözlüğü kullanılmalıdır.", "Çıplak gözle uzun süre bakılmalıdır.", "Güneş gözlüğü yeterlidir.", "Dürbünle doğrudan bakılmalıdır."], "Çıplak gözle ya da sıradan gözlükle bakmak göze kalıcı zarar verebilir.")
          ]
        }
      ]
    },
    {
      id: "f2", ad: "Kuvvetin Etkisinde Hareket",
      konular: [
        {
          id: "f2k1", ad: "Kuvvet ve Bileşke Kuvvet",
          ozet: ["Kuvvet dinamometre ile ölçülür, birimi newton (N).", "Kuvvet okla gösterilir: uygulama noktası, yön, doğrultu, büyüklük.", "Aynı yönlü kuvvetler: topla → yön aynı", "Zıt yönlü kuvvetler: büyükten küçüğü çıkar → yön büyük kuvvetin yönü", "Eşit ve zıt kuvvetlerin bileşkesi 0'dır."],
          anlatim: [
            "Kuvvet, bir cismi iten ya da çeken etkidir. Kuvvet dinamometre ile ölçülür ve birimi newton (N) dur. Kuvvet bir okla gösterilir. Okun başladığı yer uygulama noktası, okun gösterdiği yer yönü, okun üzerinde bulunduğu çizgi doğrultusu, okun uzunluğu ise büyüklüğüdür.",
            "Bir cisme birden fazla kuvvet etki edebilir. Bu kuvvetlerin yaptığı etkiyi tek başına yapabilen kuvvete bileşke kuvvet denir.",
            "Aynı yönlü kuvvetlerde bileşke kuvvet, kuvvetlerin toplamıdır. Örneğin bir masayı iki kişi aynı yöne 30 N ve 20 N ile iterse bileşke 50 N olur.",
            "Zıt yönlü kuvvetlerde büyük kuvvetten küçük kuvvet çıkarılır. Bileşke, büyük kuvvetin yönündedir. Halat çekmede 120 N ile sağa, 90 N ile sola çekilirse bileşke 30 N ve yönü sağa olur."
          ],
          video: "iuhA6vp1PaY",
          sorular: [
            S("Kuvvetin birimi nedir?", ["Newton", "Metre", "Kilogram", "Saniye"], "Kuvvet birimi newtondur (N)."),
            S("Kuvvet hangi araçla ölçülür?", ["Dinamometre", "Termometre", "Barometre", "Cetvel"], "Dinamometre içindeki yay sayesinde kuvveti ölçer."),
            S("Kuvveti gösteren okun uzunluğu neyi gösterir?", ["Kuvvetin büyüklüğünü", "Kuvvetin yönünü", "Uygulama noktasını", "Cismin kütlesini"], "Ok ne kadar uzunsa kuvvet o kadar büyüktür."),
            S("Eşit büyüklükte ve zıt yönlü iki kuvvetin bileşkesi kaç N'dur?", ["0", "İki kuvvetin toplamı", "Kuvvetlerden biri kadar", "İki katı"], "Eşit ve zıt kuvvetler birbirini dengeler, bileşke 0 olur.")
          ]
        },
        {
          id: "f2k2", ad: "Dengelenmiş ve Dengelenmemiş Kuvvetler",
          ozet: ["Bileşke kuvvet 0 → dengelenmiş kuvvetler", "Dengelenmiş: duran cisim durur, hareketli cisim sabit süratle düz gider.", "Bileşke kuvvet 0 değil → dengelenmemiş kuvvetler", "Dengelenmemiş kuvvet: harekete geçirir, hızlandırır, yavaşlatır, yön değiştirir.", "Örnek: masada duran kitap → dengelenmiş"],
          anlatim: [
            "Bir cisme etki eden kuvvetlerin bileşkesi sıfırsa bu kuvvetlere dengelenmiş kuvvetler denir. Dengelenmiş kuvvetler cismin hareket durumunu değiştirmez.",
            "Duran bir cisme dengelenmiş kuvvetler etki ederse cisim durmaya devam eder. Örneğin masada duran kitabı yer çekimi aşağı, masa yukarı iter; kitap hareket etmez. Hareket eden bir cisme dengelenmiş kuvvetler etki ederse cisim sabit süratle düz bir çizgide gitmeye devam eder.",
            "Bileşke kuvvet sıfır değilse kuvvetler dengelenmemiştir. Dengelenmemiş kuvvetler duran cismi harekete geçirir, hareketli cismi hızlandırır, yavaşlatır, durdurur ya da yönünü değiştirir.",
            "Halat çekme yarışında iki takım eşit kuvvetle çekerse halat hareket etmez (dengelenmiş). Bir takım daha güçlü çekerse halat o takıma doğru hareket eder (dengelenmemiş)."
          ],
          video: "iuhA6vp1PaY",
          sorular: [
            S("Masanın üzerinde duran bir kitaba etki eden kuvvetler için ne söylenebilir?", ["Dengelenmiştir.", "Dengelenmemiştir.", "Kitaba hiç kuvvet etki etmez.", "Sadece yer çekimi vardır."], "Yer çekimi ve masanın tepkisi birbirini dengeler, kitap durur."),
            S("Dengelenmemiş kuvvet etkisindeki bir cisim için hangisi olamaz?", ["Hareket durumunun hiç değişmemesi", "Hızlanması", "Yavaşlaması", "Yön değiştirmesi"], "Dengelenmemiş kuvvet mutlaka hareket durumunu değiştirir."),
            S("Sabit süratle düz yolda giden bir arabaya etki eden kuvvetlerin bileşkesi kaçtır?", ["0", "Arabanın ağırlığı kadar", "Motor kuvveti kadar", "Sonsuz"], "Sabit süratle düz giden cisme etki eden kuvvetler dengelenmiştir."),
            S("Halat çekmede halat hareket etmiyorsa takımların uyguladığı kuvvetler nasıldır?", ["Eşit büyüklükte ve zıt yönlü", "Aynı yönlü", "Biri diğerinden büyük", "İkisi de sıfır"], "Eşit ve zıt kuvvetlerin bileşkesi sıfırdır, halat hareket etmez."),
            S("Durmakta olan bir topa tekme atılınca top hareket ediyor. Bunun sebebi nedir?", ["Dengelenmemiş kuvvet etki etmesi", "Dengelenmiş kuvvet etki etmesi", "Topa hiç kuvvet etki etmemesi", "Topun kütlesinin artması"], "Tekme dengelenmemiş bir kuvvettir, topu harekete geçirir."),
            S("Yokuş aşağı giden bisikletli fren yaptığında bisiklet yavaşlıyor. Bisiklete etki eden kuvvetler nasıldır?", ["Dengelenmemiş", "Dengelenmiş", "Bileşkesi sıfır", "Hiç kuvvet yok"], "Yavaşlama, hareket durumunun değişmesidir. Bu da dengelenmemiş kuvvetle olur.")
          ]
        },
        {
          id: "f2k3", ad: "Sürat ve Hız",
          ozet: ["Sürat = alınan yol ÷ geçen süre", "Birimler: m/s veya km/sa", "Sürat yön belirtmez.", "Hız = sürat + yön (örnek: kuzeye 60 km/sa)", "Yol = sürat × süre · Süre = yol ÷ sürat"],
          anlatim: [
            "Bir cismin birim zamanda aldığı yola sürat denir. Sürat = alınan yol ÷ geçen süre formülüyle bulunur. Yol metre, süre saniye ise birim m/s; yol kilometre, süre saat ise birim km/sa olur.",
            "Örneğin 300 metreyi 60 saniyede koşan birinin sürati 300 ÷ 60 = 5 m/s'dir.",
            "Hız ise sürate ek olarak yönü de belirtir. 'Araba 80 km/sa süratle gidiyor' bir sürat bilgisidir. 'Araba doğuya doğru 80 km/sa ile gidiyor' ise bir hız bilgisidir.",
            "Formülden yol ve süre de bulunabilir: yol = sürat × süre, süre = yol ÷ sürat."
          ],
          video: "7Xd4h_UWezw",
          sorular: [
            S("Hangisi hız bildirir?", ["Kuzeye doğru 60 km/sa", "60 km/sa", "5 m/s", "Saatte 90 km"], "Hız, sürat ile birlikte yönü de belirtir."),
            S("Sürat hesaplamak için hangi iki bilgi gerekir?", ["Alınan yol ve geçen süre", "Kütle ve hacim", "Kuvvet ve yön", "Sıcaklık ve süre"], "Sürat = alınan yol ÷ geçen süre."),
            S("Hangisi bir sürat birimidir?", ["m/s", "N", "kg", "°C"], "Sürat birimi yol birimi bölü zaman birimidir: m/s ya da km/sa."),
            S("Sürat ile hız arasındaki fark nedir?", ["Hızın yön de belirtmesi", "Süratin yön belirtmesi", "Hızın birimi olmaması", "Hiçbir fark yoktur"], "Hız yönlü bir büyüklüktür, sürat yön belirtmez.")
          ]
        }
      ]
    },
    {
      id: "f3", ad: "Canlılarda Sistemler",
      konular: [
        {
          id: "f3k1", ad: "Eşeyli ve Eşeysiz Üreme",
          ozet: ["Eşeysiz üreme: tek ata, yavrular atasıyla aynı.", "Eşeysiz üreme çeşitleri: bölünme, tomurcuklanma, rejenerasyon, sporla, vejetatif", "Eşeyli üreme: iki ata, üreme hücreleri birleşir (döllenme).", "Eşeyli üremede yavrular farklı özellikler taşır → çeşitlilik", "Dış döllenme: balık, kurbağa · İç döllenme: memeliler, kuşlar, sürüngenler", "Çiçekli bitkiler: tozlaşma → döllenme → tohum"],
          anlatim: [
            "Canlıların kendilerine benzer yeni bireyler oluşturmasına üreme denir. Üreme eşeysiz ve eşeyli olmak üzere ikiye ayrılır.",
            "Eşeysiz üremede tek bir ata vardır ve oluşan yavrular atasıyla aynı özellikleri taşır. Bölünme (bakteri, amip), tomurcuklanma (bira mayası, hidra), rejenerasyon yani kopan parçadan yeni canlı oluşması (deniz yıldızı, planarya), sporla üreme (şapkalı mantar, eğrelti otu) ve vejetatif üreme (patates yumrusu, çilek, çelikle çoğaltılan söğüt) bu çeşitlerdendir.",
            "Eşeyli üremede iki ata vardır. Dişi üreme hücresi (yumurta) ile erkek üreme hücresi (sperm) birleşir; buna döllenme denir. Yavrular iki atadan da özellik aldığı için çeşitlilik oluşur.",
            "Döllenme vücut dışında (balık, kurbağa) ya da vücut içinde (memeliler, kuşlar, sürüngenler) olabilir. Çiçekli bitkilerde çiçek tozları dişi organa taşınır (tozlaşma), döllenme olur ve tohum oluşur. Tozlaşmada rüzgâr, su ve arı gibi böcekler rol oynar."
          ],
          video: "x6forgJgTm8",
          sorular: [
            S("Eşeysiz üremenin özelliği hangisidir?", ["Tek ata vardır, yavrular ataya benzer.", "İki ata gerekir.", "Döllenme olur.", "Çeşitlilik çok fazladır."], "Eşeysiz üremede tek ata vardır ve döllenme olmaz."),
            S("Deniz yıldızının kopan kolundan yeni bir deniz yıldızı oluşmasına ne denir?", ["Rejenerasyon", "Tomurcuklanma", "Bölünme", "Döllenme"], "Kopan parçadan yeni canlı oluşmasına rejenerasyon denir."),
            S("Hangisinde dış döllenme görülür?", ["Balık", "Kedi", "Tavuk", "Yılan"], "Balık ve kurbağa gibi suda yaşayan canlılarda döllenme vücut dışında olur."),
            S("Patatesin yumrusundan yeni patates bitkisi yetişmesi hangi üreme çeşididir?", ["Vejetatif üreme", "Sporla üreme", "Eşeyli üreme", "Bölünme"], "Bitkinin gövde, kök, yaprak gibi kısımlarından çoğalması vejetatif üremedir."),
            S("Eşeyli üremenin canlılara sağladığı en önemli avantaj nedir?", ["Çeşitlilik oluşması", "Tek atanın yeterli olması", "Çok hızlı olması", "Yavruların atayla aynı olması"], "İki atadan özellik alındığı için farklı özellikte bireyler oluşur."),
            S("Çiçek tozlarının dişi organa taşınmasına ne denir?", ["Tozlaşma", "Çimlenme", "Döllenme", "Tomurcuklanma"], "Tozlaşmadan sonra döllenme olur."),
            S("Bira mayasında görülen eşeysiz üreme çeşidi hangisidir?", ["Tomurcuklanma", "Rejenerasyon", "Vejetatif üreme", "Sporla üreme"], "Bira mayası ve hidrada vücuttan çıkan bir çıkıntı büyüyerek yeni canlı oluşturur."),
            S("Hangi canlı sporla ürer?", ["Şapkalı mantar", "Amip", "Deniz yıldızı", "Kedi"], "Şapkalı mantar ve eğrelti otu sporla ürer.")
          ]
        },
        {
          id: "f3k2", ad: "Bitki ve Hayvanlarda Büyüme ve Gelişme",
          ozet: ["Çimlenme için su, uygun sıcaklık ve oksijen gerekir.", "Tam başkalaşım: yumurta → larva (tırtıl) → pupa → ergin (kelebek)", "Eksik başkalaşım: yumurta → nimf → ergin (çekirge)", "Kurbağa: yumurta → iribaş → ergin", "Başkalaşım geçirmeyenler: insan, kedi, tavuk..."],
          anlatim: [
            "Tohumun uygun koşullarda yeni bir bitkiye dönüşmesine çimlenme denir. Çimlenme için su, uygun sıcaklık ve oksijen gerekir. Tohum, ilk gelişimi için gerekli besini kendi içinde taşıdığından çimlenmenin başında ışığa ihtiyaç yoktur.",
            "Bazı hayvanlar yumurtadan çıktıktan sonra yetişkin hâline gelene kadar şekil değiştirir. Buna başkalaşım (metamorfoz) denir.",
            "Kelebekte tam başkalaşım görülür: yumurta, tırtıl (larva), koza (pupa) ve kelebek (ergin). Çekirgede ise eksik başkalaşım vardır: yumurta, nimf ve ergin. Nimf, ergine benzer ama kanatları gelişmemiştir.",
            "Kurbağa yumurtadan iribaş olarak çıkar. İribaş suda yaşar ve solungaçla solur. Zamanla kuyruğu kaybolur, bacakları çıkar ve akciğerle soluyan ergin kurbağaya dönüşür. İnsan, kedi ve tavuk gibi canlılar başkalaşım geçirmez; yavrular ergine benzer ve büyür."
          ],
          video: "ZwWdKXfmZsk",
          sorular: [
            S("Kelebeğin gelişim evreleri doğru sırayla hangisidir?", ["Yumurta – tırtıl – pupa – kelebek", "Yumurta – pupa – tırtıl – kelebek", "Tırtıl – yumurta – pupa – kelebek", "Yumurta – nimf – kelebek – pupa"], "Kelebekte tam başkalaşım vardır: yumurta, larva (tırtıl), pupa, ergin."),
            S("Hangisinde eksik başkalaşım görülür?", ["Çekirge", "Kelebek", "Kedi", "Tavuk"], "Çekirgede yumurta, nimf ve ergin evreleri vardır."),
            S("Hangisi çimlenme için gerekli değildir?", ["Toprak", "Su", "Uygun sıcaklık", "Oksijen"], "Tohumlar ıslak pamukta da çimlenebilir; toprak şart değildir."),
            S("Kurbağanın yavrusuna ne ad verilir?", ["İribaş", "Tırtıl", "Nimf", "Pupa"], "Kurbağa yumurtadan iribaş olarak çıkar."),
            S("Hangi canlı başkalaşım geçirmez?", ["Kedi", "Kurbağa", "Kelebek", "Arı"], "Kedi yavrusu yetişkine benzer ve şekil değiştirmeden büyür."),
            S("Tırtılın koza içinde bulunduğu evreye ne denir?", ["Pupa", "Nimf", "Larva", "Ergin"], "Koza evresi pupa evresidir.")
          ]
        },
        {
          id: "f3k3", ad: "Sinir Sistemi ve İç Salgı Bezleri",
          ozet: ["Merkezi sinir sistemi: beyin + omurilik", "Büyük beyin: düşünme, öğrenme, hafıza, istemli hareketler", "Beyincik: denge ve hareketlerin uyumu", "Omurilik soğanı: kalp atışı, solunum gibi istemsiz olaylar", "Omurilik: refleks merkezi (sıcak cisimden eli çekmek)", "Hipofiz: büyüme hormonu · Tiroit: metabolizma · Pankreas: kan şekeri (insülin) · Böbreküstü: adrenalin"],
          anlatim: [
            "Sinir sistemi vücudumuzdaki bütün olayları yönetir ve uyumlu çalışmasını sağlar. Merkezi sinir sistemi beyin ve omurilikten, çevresel sinir sistemi ise bunlardan vücuda dağılan sinirlerden oluşur.",
            "Beyin üç bölümden oluşur. Büyük beyin düşünme, öğrenme, hafıza, konuşma ve istemli hareketleri yönetir. Beyincik vücudun dengesini ve hareketlerin uyumunu sağlar. Omurilik soğanı kalp atışı, solunum, sindirim gibi elimizde olmayan olayları kontrol eder.",
            "Omurilik, beyin ile vücut arasındaki iletişimi sağlar ve refleks merkezidir. Elimizi sıcak bir cisimden düşünmeden hemen çekmemiz bir reflekstir.",
            "İç salgı bezleri hormon denen maddeleri doğrudan kana verir. Hipofiz büyüme hormonu salgılar ve diğer bezleri yönetir. Tiroit metabolizmayı düzenler ve iyot ister. Pankreas insülin ile kan şekerini düzenler. Böbreküstü bezi heyecan ve korku anında adrenalin salgılar. Eşeysel bezler ise ergenlik değişimlerini başlatır."
          ],
          video: "rPf2YzaPyBY",
          sorular: [
            S("Vücudun dengesini sağlayan beyin bölümü hangisidir?", ["Beyincik", "Büyük beyin", "Omurilik soğanı", "Omurilik"], "Beyincik denge ve hareketlerin uyumundan sorumludur."),
            S("Elimizi sıcak bir sobadan hemen çekmemizi sağlayan yapı hangisidir?", ["Omurilik", "Büyük beyin", "Beyincik", "Hipofiz"], "Bu bir reflekstir ve refleks merkezi omuriliktir."),
            S("Kalp atışı ve solunumu kontrol eden bölüm hangisidir?", ["Omurilik soğanı", "Beyincik", "Büyük beyin", "Tiroit"], "Omurilik soğanı istemsiz hayati olayları yönetir."),
            S("Kan şekerini düzenleyen insülin hormonu hangi bezden salgılanır?", ["Pankreas", "Tiroit", "Hipofiz", "Böbreküstü bezi"], "Pankreas insülin salgılayarak kan şekerini düşürür."),
            S("Büyüme hormonunu salgılayan bez hangisidir?", ["Hipofiz", "Pankreas", "Tiroit", "Böbreküstü bezi"], "Hipofiz büyüme hormonu salgılar ve diğer bezleri yönetir."),
            S("Korku ve heyecan anında salgılanan adrenalin hangi bezden gelir?", ["Böbreküstü bezi", "Tiroit", "Pankreas", "Hipofiz"], "Adrenalin böbreküstü bezinden salgılanır, kalp atışını hızlandırır."),
            S("Tiroit bezinin sağlıklı çalışması için besinlerde hangi madde bulunmalıdır?", ["İyot", "Şeker", "Yağ", "Kalsiyum"], "Tiroit hormonu iyot içerir; bu yüzden iyotlu tuz kullanılır."),
            S("Hormonlar vücutta nasıl taşınır?", ["Kan yoluyla", "Sinirler yoluyla", "Kaslar yoluyla", "Kemikler yoluyla"], "İç salgı bezleri hormonlarını doğrudan kana verir.")
          ]
        },
        {
          id: "f3k4", ad: "Ergenlik ve Sağlıklı Yaşam",
          ozet: ["Ergenlik: çocukluktan yetişkinliğe geçiş dönemi", "Ergenliği eşeysel bezlerin hormonları başlatır.", "Boy hızla uzar, ses değişir, terleme ve sivilce artar.", "Duygusal değişimler olur, bu normaldir.", "Sağlıklı yaşam: dengeli beslenme, yeterli uyku, spor, temizlik"],
          anlatim: [
            "Ergenlik, çocukluktan yetişkinliğe geçiş dönemidir. Genellikle 10-15 yaşları arasında başlar ve herkeste farklı zamanda yaşanabilir. Bu değişimleri eşeysel bezlerden ve hipofizden salgılanan hormonlar başlatır.",
            "Ergenlikte boy hızla uzar, kilo artar, ses kalınlaşabilir, ter bezleri daha çok çalışır ve sivilceler görülebilir. Bu değişimler vücudun normal gelişiminin bir parçasıdır.",
            "Bedensel değişimlerin yanında duygusal değişimler de yaşanır. Duygu durumu çabuk değişebilir, bağımsız olma isteği artar. Bu dönemde duyguları aile ve öğretmenlerle paylaşmak iyi gelir.",
            "Sistemlerimizi korumak için dengeli beslenmeli, yeterince uyumalı, düzenli spor yapmalı ve kişisel temizliğe dikkat etmeliyiz. Sigara, alkol ve uyuşturucu sinir sistemine ve bütün vücuda zarar verir."
          ],
          video: "DtbUGmlTiE4",
          sorular: [
            S("Ergenlik değişimlerini başlatan nedir?", ["Hormonlar", "Kaslar", "Kemikler", "Sindirim enzimleri"], "Ergenliği hipofiz ve eşeysel bezlerin hormonları başlatır."),
            S("Hangisi ergenlikte görülen bedensel bir değişimdir?", ["Boyun hızla uzaması", "Dişlerin dökülmesi", "Saçların beyazlaması", "Boyun kısalması"], "Ergenlikte boy hızla uzar."),
            S("Ergenlikte terlemenin artması nedeniyle ne yapılmalıdır?", ["Kişisel temizliğe daha çok dikkat edilmelidir.", "Su içmeyi azaltmalıdır.", "Spor bırakılmalıdır.", "Hiçbir şey yapılmamalıdır."], "Ter bezleri daha çok çalıştığı için düzenli banyo ve temiz kıyafet önemlidir."),
            S("Hangisi sağlıklı yaşam için doğru bir davranış değildir?", ["Gece geç saatlere kadar ekrana bakmak", "Dengeli beslenmek", "Düzenli spor yapmak", "Yeterince uyumak"], "Uyku eksikliği büyümeyi ve öğrenmeyi olumsuz etkiler."),
            S("Ergenlik dönemindeki duygusal değişimler için hangisi doğrudur?", ["Bu değişimler normaldir.", "Sadece hastalığa işarettir.", "Herkeste aynı yaşta olur.", "Hiç yaşanmaz."], "Duygusal dalgalanmalar ergenliğin doğal bir parçasıdır.")
          ]
        }
      ]
    },
    {
      id: "f4", ad: "Işığın Yansıması ve Renkler",
      konular: [
        {
          id: "f4k1", ad: "Işığın Yansıması",
          ozet: ["Düzgün yansıma: pürüzsüz yüzey (ayna, durgun su) → görüntü oluşur", "Dağınık yansıma: pürüzlü yüzey (kâğıt, duvar) → görüntü oluşmaz", "Normal: yüzeye dik çizilen çizgi", "Açılar normalden ölçülür.", "Gelme açısı = Yansıma açısı", "Yüzeyle yapılan açı x ise gelme açısı 90° − x"],
          anlatim: [
            "Işığın bir yüzeye çarpıp geri dönmesine yansıma denir. Cisimleri görebilmemiz, onlardan yansıyan ışığın gözümüze gelmesi sayesindedir.",
            "Ayna ve durgun su gibi pürüzsüz yüzeylerde ışınlar düzenli ve birbirine paralel yansır. Buna düzgün yansıma denir ve bu yüzeylerde görüntü oluşur. Kâğıt, duvar, kumaş gibi pürüzlü yüzeylerde ışınlar her yöne dağılır. Buna dağınık yansıma denir ve görüntü oluşmaz.",
            "Işığın yüzeye geldiği noktadan yüzeye dik çizilen çizgiye normal denir. Gelen ışının normal ile yaptığı açı gelme açısı, yansıyan ışının normal ile yaptığı açı yansıma açısıdır.",
            "Yansıma kanunu: Gelme açısı yansıma açısına eşittir. Ayrıca gelen ışın, normal ve yansıyan ışın aynı düzlemdedir. Dikkat: Açılar yüzeyden değil, normalden ölçülür!"
          ],
          video: "vDJrNyfOcu0",
          sorular: [
            S("Hangisinde düzgün yansıma olur?", ["Durgun su yüzeyi", "Defter sayfası", "Duvar", "Kumaş"], "Pürüzsüz yüzeylerde düzgün yansıma olur."),
            S("Gelme ve yansıma açıları hangi çizgiye göre ölçülür?", ["Normale", "Yüzeye", "Gelen ışına", "Yere"], "Açılar yüzeye dik olan normal çizgisine göre ölçülür."),
            S("Kitap okurken sayfaların parlamaması hangi yansıma sayesindedir?", ["Dağınık yansıma", "Düzgün yansıma", "Kırılma", "Soğurma"], "Kâğıt pürüzlü olduğu için ışığı her yöne dağıtır."),
            S("Işık bir aynaya dik olarak gelirse nasıl yansır?", ["Geldiği yoldan geri döner.", "Yüzeye paralel gider.", "Hiç yansımaz.", "45° açıyla yansır."], "Dik gelen ışının gelme açısı 0°'dir, yansıma açısı da 0° olur.")
          ]
        },
        {
          id: "f4k2", ad: "Düz, Çukur ve Tümsek Aynalar",
          ozet: ["Düz ayna: görüntü düz, cisimle aynı boyda, sağ-sol ters", "Çukur ayna: ışığı toplar → el feneri, araba farı, güneş ocağı, diş hekimi aynası", "Tümsek ayna: ışığı dağıtır, görüş alanı geniş, görüntü küçük → dikiz aynası, kavşak aynası, market aynası"],
          anlatim: [
            "Düz aynada oluşan görüntü düz (baş aşağı değil), cisimle aynı boydadır ve sağ-sol yer değiştirmiştir. Cisim aynaya ne kadar uzaksa görüntü de aynanın arkasında o kadar uzakta görünür. Ambulansların önündeki yazının ters yazılması bu yüzdendir.",
            "Çukur aynanın yansıtıcı yüzeyi içe doğru kavislidir. Paralel gelen ışınları bir noktada toplar. El feneri, araba farı, güneş ocağı ve diş hekimi aynasında kullanılır. Yakındaki cisimlerin görüntüsünü büyük gösterdiği için makyaj ve tıraş aynası olarak da kullanılır.",
            "Tümsek aynanın yansıtıcı yüzeyi dışa doğru kavislidir. Işınları dağıtır. Görüntüyü küçük gösterir ama görüş alanı geniştir. Bu yüzden araçların yan aynalarında, kör kavşaklarda ve marketlerde güvenlik aynası olarak kullanılır."
          ],
          video: "vDJrNyfOcu0",
          sorular: [
            S("Araba farlarında hangi ayna kullanılır?", ["Çukur ayna", "Tümsek ayna", "Düz ayna", "Ayna kullanılmaz"], "Çukur ayna ışığı paralel ve güçlü bir demet hâlinde yansıtır."),
            S("Kör kavşaklarda geniş alanı görmek için hangi ayna kullanılır?", ["Tümsek ayna", "Çukur ayna", "Düz ayna", "Renkli ayna"], "Tümsek aynanın görüş alanı geniştir."),
            S("Düz aynada oluşan görüntü için hangisi yanlıştır?", ["Görüntü cisimden büyüktür.", "Görüntü düzdür.", "Sağ ve sol yer değiştirir.", "Görüntü cisimle aynı boydadır."], "Düz ayna görüntüyü cisimle aynı boyda gösterir."),
            S("Ambulansların önündeki yazının ters yazılmasının sebebi nedir?", ["Düz aynada sağ-sol ters görünmesi", "Çukur aynada görüntünün büyümesi", "Tümsek aynada görüntünün küçülmesi", "Işığın kırılması"], "Öndeki sürücü dikiz aynasında yazıyı düzgün okur."),
            S("Güneş ocaklarında hangi ayna kullanılır?", ["Çukur ayna", "Tümsek ayna", "Düz ayna", "Hiçbiri"], "Çukur ayna güneş ışınlarını bir noktada toplayarak ısı oluşturur."),
            S("Market güvenlik aynası olarak tümsek aynanın tercih edilme nedeni nedir?", ["Görüş alanının geniş olması", "Görüntüyü büyütmesi", "Işığı toplaması", "Görüntüyü ters göstermesi"], "Tümsek ayna geniş bir alanı tek bakışta gösterir.")
          ]
        },
        {
          id: "f4k3", ad: "Beyaz Işık ve Renkler",
          ozet: ["Beyaz ışık 7 renkten oluşur: kırmızı, turuncu, sarı, yeşil, mavi, lacivert, mor", "Prizma beyaz ışığı renklere ayırır; gökkuşağı da böyle oluşur.", "Bir cisim hangi rengi yansıtıyorsa o renkte görünür.", "Beyaz cisim bütün renkleri yansıtır, siyah cisim hepsini soğurur.", "Kırmızı cisim yeşil ışık altında siyah görünür."],
          anlatim: [
            "Güneş'ten gelen beyaz ışık aslında farklı renklerin birleşimidir. Beyaz ışık bir prizmadan geçirildiğinde kırmızı, turuncu, sarı, yeşil, mavi, lacivert ve mor renklerine ayrılır. Yağmurdan sonra havadaki su damlaları prizma gibi davranır ve gökkuşağı oluşur.",
            "Bir cismin rengini, o cismin yansıttığı ışığın rengi belirler. Kırmızı bir elma beyaz ışığın içindeki kırmızıyı yansıtır, diğer renkleri soğurur. Bu yüzden kırmızı görünür.",
            "Beyaz cisimler bütün renkleri yansıtır. Siyah cisimler ise bütün renkleri soğurur, hiçbir rengi yansıtmaz.",
            "Renkli ışık altında cisimler farklı görünebilir. Beyaz bir kâğıt kırmızı ışık altında kırmızı görünür. Yeşil bir yaprak kırmızı ışık altında siyah görünür, çünkü yansıtabileceği yeşil ışık ortamda yoktur."
          ],
          video: "fDWU8Rr-XaA",
          sorular: [
            S("Beyaz ışığı renklerine ayıran araç hangisidir?", ["Prizma", "Ayna", "Mercek", "Dinamometre"], "Prizma beyaz ışığı yedi renge ayırır."),
            S("Siyah bir cisim hangi rengi yansıtır?", ["Hiçbir rengi", "Bütün renkleri", "Sadece kırmızıyı", "Sadece maviyi"], "Siyah cisim bütün renkleri soğurur."),
            S("Gökkuşağının oluşmasında hangisi prizma görevi görür?", ["Havadaki su damlaları", "Bulutların gölgesi", "Rüzgâr", "Toprak"], "Su damlaları beyaz ışığı renklerine ayırır."),
            S("Bir cismin rengini ne belirler?", ["Yansıttığı ışığın rengi", "Soğurduğu ışığın rengi", "Cismin kütlesi", "Cismin sıcaklığı"], "Cisim hangi rengi yansıtırsa o renkte görünür.")
          ]
        },
        {
          id: "f4k4", ad: "Güneş Enerjisinden Yararlanma",
          ozet: ["Güneş paneli: güneş enerjisini elektriğe çevirir.", "Güneş kolektörü (termosifon): su ısıtır.", "Güneş ocağı: çukur ayna ile ışığı toplar.", "Koyu renkler ışığı soğurur, daha çok ısınır.", "Açık renkler ışığı yansıtır → yazın açık renk giyilir.", "Güneş enerjisi yenilenebilir ve temizdir."],
          anlatim: [
            "Güneş, Dünya'nın en önemli enerji kaynağıdır. Güneş enerjisi tükenmez (yenilenebilir) ve çevreyi kirletmez.",
            "Güneş panelleri güneş ışığını doğrudan elektrik enerjisine dönüştürür. Hesap makinelerinde, sokak lambalarında ve evlerin çatılarında kullanılır. Güneş kolektörleri (termosifonlar) ise güneş enerjisiyle suyu ısıtır.",
            "Güneş ocakları çukur aynanın ışığı bir noktada toplama özelliğinden yararlanır ve yemek pişirmede kullanılabilir. Seralar da güneş ışığını içeride tutarak bitkilerin sıcak kalmasını sağlar.",
            "Koyu renkli cisimler ışığı daha çok soğurduğu için daha çok ısınır. Açık renkli cisimler ışığı yansıtır. Bu yüzden yazın açık renkli kıyafetler giymek serinletir. Güneş kolektörlerinin içi ise ısıyı iyi soğurması için siyaha boyanır."
          ],
          video: "fDWU8Rr-XaA",
          sorular: [
            S("Güneş enerjisini doğrudan elektriğe dönüştüren araç hangisidir?", ["Güneş paneli", "Güneş ocağı", "Termometre", "Tümsek ayna"], "Güneş panelleri ışık enerjisini elektrik enerjisine çevirir."),
            S("Yaz aylarında açık renkli giysiler giymenin sebebi nedir?", ["Açık renklerin ışığı yansıtması", "Açık renklerin ışığı soğurması", "Açık renklerin ağır olması", "Açık renklerin ışık üretmesi"], "Açık renkler ışığı yansıttığı için daha az ısınır."),
            S("Güneş kolektörlerinin iç yüzeyi neden siyaha boyanır?", ["Siyah renk ışığı ve ısıyı daha çok soğurur.", "Siyah renk ışığı yansıtır.", "Siyah daha ucuzdur.", "Siyah renk elektrik üretir."], "Siyah yüzey ısıyı çok soğurur, su daha hızlı ısınır."),
            S("Güneş ocağında hangi ayna kullanılır?", ["Çukur ayna", "Düz ayna", "Tümsek ayna", "Renkli ayna"], "Çukur ayna ışınları bir noktada toplar."),
            S("Hangisi güneş enerjisinin bir üstünlüğüdür?", ["Tükenmez ve çevreyi kirletmez.", "Gece de aynı miktarda vardır.", "Her yerde aynı güçtedir.", "Hiç yer kaplamaz."], "Güneş enerjisi yenilenebilir ve temiz bir enerji kaynağıdır.")
          ]
        }
      ]
    },
    {
      id: "f5", ad: "Maddenin Ayırt Edici Özellikleri",
      konular: [
        {
          id: "f5k1", ad: "Genleşme ve Büzülme",
          ozet: ["Isı alan madde genleşir, ısı veren madde büzülür.", "En çok gazlar, en az katılar genleşir.", "Tren rayları ve köprülerde genleşme boşluğu bırakılır.", "Elektrik telleri yazın sarkar, kışın gerilir.", "Su 0–4 °C arasında farklı davranır; buz suda yüzer."],
          anlatim: [
            "Maddeler ısı aldığında tanecikleri daha hızlı hareket eder ve birbirinden uzaklaşır; madde genleşir. Isı verdiğinde ise tanecikler yavaşlar ve yaklaşır; madde büzülür.",
            "Aynı miktarda ısı verildiğinde gazlar sıvılardan, sıvılar da katılardan daha çok genleşir. Farklı katılar ve farklı sıvılar da farklı miktarda genleşir; bu yüzden genleşme maddeler için ayırt edici bir özelliktir.",
            "Günlük hayatta genleşmeyi dikkate alırız. Tren raylarının ve köprülerin arasına genleşme boşluğu bırakılır. Elektrik telleri yazın sarkık, kışın gergin görünür. Sıkışan metal kavanoz kapağı sıcak suya tutulunca genleşir ve kolay açılır. Termometrelerdeki sıvı da ısınınca genleşip yükselir.",
            "Su ilginç bir maddedir: 4 °C'den 0 °C'ye soğutulurken büzülmek yerine genleşir. Bu yüzden buz sudan hafiftir ve suyun üstünde yüzer."
          ],
          video: "Zj1oGklg8Uw",
          sorular: [
            S("Isı alan bir madde için hangisi doğrudur?", ["Genleşir.", "Büzülür.", "Kütlesi artar.", "Hiç değişmez."], "Isı alan maddenin tanecikleri uzaklaşır, madde genleşir."),
            S("Tren rayları arasında boşluk bırakılmasının sebebi nedir?", ["Rayların sıcakta genleşmesi", "Malzemeden tasarruf", "Trenin daha hızlı gitmesi", "Rayların soğukta genleşmesi"], "Yazın genleşen raylar boşluk olmazsa eğrilir."),
            S("Aynı miktarda ısıtıldığında en çok hangisi genleşir?", ["Gazlar", "Sıvılar", "Katılar", "Hepsi eşit"], "Gaz tanecikleri arasındaki boşluk ve hareket en fazladır."),
            S("Sıkışan metal kavanoz kapağını açmak için ne yapılır?", ["Kapak sıcak suya tutulur.", "Kavanoz buzdolabına konur.", "Kapağa buz konur.", "Kavanoz sallanır."], "Sıcak suyla ısınan metal kapak genleşir ve gevşer."),
            S("Elektrik telleri kışın neden gergin görünür?", ["Soğukta büzüldükleri için", "Soğukta genleştikleri için", "Ağırlaştıkları için", "Elektrik azaldığı için"], "Soğukta teller büzülür ve kısalır."),
            S("Buzun suda yüzmesinin sebebi nedir?", ["Su donarken genleşir, buz daha hafif olur.", "Buz sudan ağırdır.", "Buzun içinde hava pompası vardır.", "Su donarken büzülür."], "Su donarken genleştiği için buzun yoğunluğu sudan küçüktür.")
          ]
        },
        {
          id: "f5k2", ad: "Erime, Donma ve Kaynama Noktası",
          ozet: ["Erime noktası = donma noktası (saf maddede)", "Su: 0 °C'de erir/donar, 100 °C'de kaynar (deniz seviyesinde).", "Hal değişimi sırasında sıcaklık sabit kalır.", "Erime, kaynama noktaları saf maddeler için ayırt edicidir.", "Sıcaklık < erime n. → katı · arada → sıvı · > kaynama n. → gaz", "Yükseklere çıkıldıkça kaynama noktası düşer."],
          anlatim: [
            "Katı bir maddenin ısı alarak sıvı hâle geçtiği sıcaklığa erime noktası, sıvının ısı vererek katı hâle geçtiği sıcaklığa donma noktası denir. Saf bir maddenin erime noktası ile donma noktası aynıdır. Su için bu sıcaklık 0 °C'dir.",
            "Sıvının her yerinden gaz hâline geçtiği sıcaklığa kaynama noktası denir. Saf su deniz seviyesinde 100 °C'de kaynar. Kaynama süresince ısı verilmeye devam edilse bile sıcaklık değişmez.",
            "Erime ve kaynama noktaları maddeden maddeye farklıdır. Bu nedenle saf maddeleri birbirinden ayırt etmemizi sağlar. Örneğin demir yaklaşık 1538 °C'de erir, alkol yaklaşık 78 °C'de kaynar.",
            "Bir maddenin hâlini bulmak için sıcaklığını erime ve kaynama noktalarıyla karşılaştırırız. Sıcaklık erime noktasından düşükse madde katı, iki nokta arasındaysa sıvı, kaynama noktasından yüksekse gazdır. Dağlarda hava basıncı az olduğu için su 100 °C'den düşük sıcaklıkta kaynar."
          ],
          video: "zbDlTqVduoc",
          sorular: [
            S("Saf suyun deniz seviyesindeki kaynama noktası kaç °C'dir?", ["100", "0", "50", "4"], "Saf su deniz seviyesinde 100 °C'de kaynar."),
            S("Kaynamakta olan suyu ısıtmaya devam edersek sıcaklığı ne olur?", ["Kaynama bitene kadar değişmez.", "Sürekli artar.", "Azalır.", "Önce azalır sonra artar."], "Hal değişimi sırasında verilen ısı sıcaklığı artırmaz."),
            S("Saf bir maddenin erime noktası ile donma noktası için hangisi doğrudur?", ["Birbirine eşittir.", "Erime noktası daha yüksektir.", "Donma noktası daha yüksektir.", "Aralarında ilişki yoktur."], "Saf maddede erime ve donma aynı sıcaklıkta olur."),
            S("Yüksek bir dağın tepesinde suyun kaynama noktası nasıl değişir?", ["100 °C'den düşük olur.", "100 °C'den yüksek olur.", "Değişmez.", "Su hiç kaynamaz."], "Yükseklerde hava basıncı azdır, su daha düşük sıcaklıkta kaynar."),
            S("Hangisi saf maddeler için ayırt edici bir özellik değildir?", ["Kütle", "Erime noktası", "Kaynama noktası", "Yoğunluk"], "Kütle ve hacim maddenin miktarına bağlıdır, ayırt edici değildir.")
          ]
        },
        {
          id: "f5k3", ad: "Yoğunluk",
          ozet: ["Yoğunluk = kütle ÷ hacim (d = m ÷ V)", "Birimi: g/cm³", "Kütle = yoğunluk × hacim · Hacim = kütle ÷ yoğunluk", "Suyun yoğunluğu 1 g/cm³", "Yoğunluğu sudan küçük olan yüzer, büyük olan batar.", "Aynı maddenin yoğunluğu miktarına bağlı değildir."],
          anlatim: [
            "Bir maddenin birim hacminin kütlesine yoğunluk denir. Yoğunluk = kütle ÷ hacim formülüyle hesaplanır. Kütle gram (g), hacim santimetreküp (cm³) ise yoğunluk birimi g/cm³ olur.",
            "Örneğin kütlesi 60 g, hacmi 20 cm³ olan bir taşın yoğunluğu 60 ÷ 20 = 3 g/cm³'tür.",
            "Yoğunluk ayırt edici bir özelliktir. Aynı sıcaklıkta bir maddenin büyük ya da küçük parçasının yoğunluğu aynıdır. Bir demir çivi ile demir bir köprünün yoğunluğu eşittir.",
            "Suyun yoğunluğu 1 g/cm³'tür. Yoğunluğu sudan küçük olan maddeler (tahta, yağ, buz) suda yüzer; büyük olanlar (demir, taş) batar. Birbirine karışmayan sıvılarda yoğunluğu büyük olan altta kalır."
          ],
          video: "je8sijN7t28",
          sorular: [
            S("Yoğunluğun formülü hangisidir?", ["Kütle ÷ hacim", "Kütle × hacim", "Hacim ÷ kütle", "Kütle + hacim"], "d = m ÷ V."),
            S("Bir demir çivi ikiye kesilirse parçalardan birinin yoğunluğu ne olur?", ["Değişmez.", "Yarıya iner.", "İki katına çıkar.", "Sıfır olur."], "Yoğunluk madde miktarına bağlı değildir."),
            S("Zeytinyağı ve su aynı kaba konunca zeytinyağı üstte kalıyor. Bunun sebebi nedir?", ["Zeytinyağının yoğunluğunun sudan küçük olması", "Zeytinyağının kütlesinin fazla olması", "Suyun daha hafif olması", "Zeytinyağının sıvı olmaması"], "Yoğunluğu küçük olan sıvı üstte kalır."),
            S("Suyun yoğunluğu kaç g/cm³'tür?", ["1", "0", "10", "100"], "Saf suyun yoğunluğu 1 g/cm³ kabul edilir.")
          ]
        },
        {
          id: "f5k4", ad: "Yoğunluğun Canlılar İçin Önemi",
          ozet: ["Buz sudan az yoğundur → göller yüzeyden donar.", "Buz tabakası alttaki suyu yalıtır, canlılar yaşar.", "Balıklar yüzme kesesindeki gazı ayarlayarak yükselir/alçalır.", "Tuzlu suyun yoğunluğu fazladır → insan daha kolay yüzer.", "Sıcak hava balonu: ısınan havanın yoğunluğu azalır."],
          anlatim: [
            "Su donarken genleştiği için buzun yoğunluğu sudan küçüktür. Bu yüzden kışın göller ve denizler yüzeyden donar. Yüzeydeki buz tabakası bir örtü gibi alttaki suyun donmasını engeller. Böylece balıklar ve diğer su canlıları kışın yaşamını sürdürebilir.",
            "Balıkların vücudunda yüzme kesesi denen gazla dolu bir yapı vardır. Balık bu kesedeki gaz miktarını değiştirerek yoğunluğunu ayarlar; suda yükselir ya da alçalır. Denizaltılar da tanklarına su alıp boşaltarak aynı şekilde çalışır.",
            "Tuzlu suyun yoğunluğu tatlı sudan büyüktür. Bu yüzden denizde yüzmek havuzdan daha kolaydır. Çok tuzlu olan Lut Gölü'nde (Ölü Deniz) insanlar neredeyse batmadan yüzebilir.",
            "Isınan havanın yoğunluğu azalır. Sıcak hava balonları bu sayede yükselir. Ayrıca su kuşlarının tüylerindeki yağ ve hava boşlukları da suyun üstünde kalmalarına yardım eder."
          ],
          video: "je8sijN7t28",
          sorular: [
            S("Kışın göllerin yüzeyden donması canlılar için neden önemlidir?", ["Buz tabakası alttaki suyun donmasını engeller.", "Balıklar buzun üstünde yaşar.", "Su daha hızlı ısınır.", "Gölün suyu azalır."], "Yüzeydeki buz yalıtım yapar; altta sıvı su kalır."),
            S("Balıkların suda yükselip alçalmasını sağlayan yapı hangisidir?", ["Yüzme kesesi", "Solungaç", "Pul", "Kuyruk yüzgeci"], "Yüzme kesesindeki gaz miktarı balığın yoğunluğunu değiştirir."),
            S("Denizde yüzmenin havuzda yüzmekten daha kolay olmasının sebebi nedir?", ["Tuzlu suyun yoğunluğunun daha büyük olması", "Deniz suyunun daha sıcak olması", "Denizde dalga olması", "Havuz suyunun tuzlu olması"], "Yoğunluğu büyük sıvılar cisimleri daha kolay taşır."),
            S("Sıcak hava balonunun yükselmesinin sebebi nedir?", ["Isınan havanın yoğunluğunun azalması", "Balonun kütlesinin artması", "Havanın soğuması", "Rüzgârın esmesi"], "Isınan hava genleşir, yoğunluğu azalır ve yükselir."),
            S("Denizaltının dalmak için ne yapması gerekir?", ["Tanklarına su alması", "Tanklarındaki suyu boşaltması", "Motorunu durdurması", "Işıklarını kapatması"], "Su alınca denizaltının ortalama yoğunluğu artar ve batar.")
          ]
        }
      ]
    },
    {
      id: "f6", ad: "Elektriğin İletimi ve Direnç",
      konular: [
        {
          id: "f6k1", ad: "İletken ve Yalıtkan Maddeler",
          ozet: ["İletken: elektriği iyi iletir → metaller, grafit, tuzlu su", "Yalıtkan: elektriği iletmez → plastik, cam, tahta, lastik, porselen", "Kablolar: içi bakır (iletken), dışı plastik (yalıtkan)", "İnsan vücudu elektriği iletir → ıslak elle prize dokunma!"],
          anlatim: [
            "Elektrik akımını iyi ileten maddelere iletken, iletmeyen maddelere yalıtkan denir. Bir maddenin iletken mi yalıtkan mı olduğunu basit bir devreyle anlayabiliriz: Madde devreye bağlanınca ampul yanıyorsa iletken, yanmıyorsa yalıtkandır.",
            "Bakır, alüminyum, demir, altın ve gümüş gibi bütün metaller iletkendir. Kurşun kalem ucundaki grafit, tuzlu su ve insan vücudu da elektriği iletir.",
            "Plastik, cam, kuru tahta, lastik, porselen, kâğıt ve kumaş yalıtkandır.",
            "Elektrik kablolarının iç kısmı akımı iletmesi için bakırdan, dış kısmı ise bizi korumak için plastikten yapılır. İnsan vücudu iletken olduğu için ıslak elle elektrikli aletlere ve prizlere dokunmamalıyız."
          ],
          video: "nNZbLJoI370",
          sorular: [
            S("Elektrik kablolarının dış kısmı neden plastikle kaplanır?", ["Plastik yalıtkan olduğu için", "Plastik iletken olduğu için", "Kablo daha ağır olsun diye", "Kablo daha parlak olsun diye"], "Plastik elektriği iletmez, bizi çarpılmaktan korur."),
            S("Kurşun kalemin ucu devreye bağlanırsa ampul yanar mı?", ["Yanar, çünkü grafit iletkendir.", "Yanmaz, çünkü grafit yalıtkandır.", "Sadece ıslaksa yanar.", "Kurşun kalem ucu metaldir."], "Kalem ucundaki grafit elektriği iletir."),
            S("Islak elle prize dokunmak neden tehlikelidir?", ["Su ve vücut elektriği iletir.", "Su yalıtkandır.", "Priz soğur.", "Elektrik kesilir."], "Islak ve tuzlu deri elektriği daha iyi iletir.")
          ]
        },
        {
          id: "f6k2", ad: "Direnç ve Ampul Parlaklığı",
          ozet: ["Direnç: maddenin akıma karşı gösterdiği zorluk, birimi ohm (Ω)", "Tel uzarsa direnç artar.", "Tel kalınlaşırsa (kesit artarsa) direnç azalır.", "Direnç telin cinsine de bağlıdır.", "Direnç artarsa ampul parlaklığı azalır.", "Seri pil sayısı artarsa parlaklık artar · seri ampul sayısı artarsa azalır."],
          anlatim: [
            "Bir maddenin elektrik akımına karşı gösterdiği zorluğa direnç denir. Direncin birimi ohm'dur ve Ω sembolüyle gösterilir.",
            "Bir telin direnci üç şeye bağlıdır: Telin uzunluğu arttıkça direnci artar. Telin kalınlığı (kesit alanı) arttıkça direnci azalır, çünkü akım daha rahat geçer. Ayrıca telin yapıldığı maddenin cinsi de direnci etkiler; örneğin bakırın direnci demirden azdır.",
            "Devredeki direnç arttıkça akım azalır ve ampul daha sönük yanar. Direnç azaldıkça ampul daha parlak yanar.",
            "Devreye seri bağlı pil sayısını artırmak ampulü daha parlak yakar. Seri bağlı ampul sayısını artırmak ise her bir ampulün parlaklığını azaltır."
          ],
          video: "iyVHA_SDE9A",
          sorular: [
            S("Direncin birimi nedir?", ["Ohm (Ω)", "Newton (N)", "Volt", "Gram"], "Direnç ohm ile ölçülür."),
            S("Bir telin uzunluğu artırılırsa direnci nasıl değişir?", ["Artar.", "Azalır.", "Değişmez.", "Sıfır olur."], "Uzun telde akımın geçtiği yol uzar, direnç artar."),
            S("Bir telin kalınlığı artırılırsa direnci nasıl değişir?", ["Azalır.", "Artar.", "Değişmez.", "İki katına çıkar."], "Kalın telden akım daha kolay geçer."),
            S("Devredeki direnç artırılırsa ampulün parlaklığı ne olur?", ["Azalır.", "Artar.", "Değişmez.", "Ampul patlar."], "Direnç artınca akım azalır, ampul sönükleşir."),
            S("Devreye seri bağlı pil sayısı artırılırsa ampulün parlaklığı ne olur?", ["Artar.", "Azalır.", "Değişmez.", "Ampul söner."], "Daha fazla pil daha fazla enerji sağlar."),
            S("Devreye aynı ampulden bir tane daha seri bağlanırsa ampullerin parlaklığı ne olur?", ["Azalır.", "Artar.", "Değişmez.", "İki katına çıkar."], "Seri ampul eklemek toplam direnci artırır.")
          ]
        },
        {
          id: "f6k3", ad: "Ayarlanabilir Direnç",
          ozet: ["Reosta: direnci istenildiği gibi değiştirilebilen direnç", "Sürgü ile telin uzunluğu değiştirilir.", "Direnç azalınca ampul parlar, artınca söner.", "Kullanım: ses ayar düğmesi, ışık ayarı (dimmer), fan hızı, oyuncak araba"],
          anlatim: [
            "Direnci istenildiği zaman değiştirilebilen dirence ayarlanabilir direnç (reosta) denir. Reostada bir tel ve bu tel üzerinde kayan bir sürgü bulunur.",
            "Sürgü hareket ettirildikçe akımın geçtiği telin uzunluğu değişir. Tel uzadıkça direnç artar ve ampul sönükleşir. Tel kısaldıkça direnç azalır ve ampul parlaklaşır.",
            "Ayarlanabilir dirençler günlük hayatta birçok yerde kullanılır: radyo ve hoparlörlerin ses ayar düğmesi, odadaki ışığın şiddetini ayarlayan dimmer, vantilatörlerin hız ayarı ve uzaktan kumandalı oyuncakların hız kontrolü bunlardandır."
          ],
          video: "pomqa1RlQ_g",
          sorular: [
            S("Direnci istenildiği gibi değiştirilebilen devre elemanı hangisidir?", ["Reosta", "Pil", "Anahtar", "Ampul"], "Reosta ayarlanabilir dirençtir."),
            S("Reostada akımın geçtiği tel uzatılırsa ampul nasıl yanar?", ["Daha sönük", "Daha parlak", "Aynı parlaklıkta", "Hiç yanmaz"], "Tel uzayınca direnç artar, ampul sönükleşir."),
            S("Hangisinde ayarlanabilir direnç kullanılır?", ["Radyonun ses ayar düğmesi", "Kurşun kalem", "Cam bardak", "Plastik cetvel"], "Ses düğmesi çevrildikçe direnç değişir, ses azalır ya da artar."),
            S("Odadaki ışığın şiddetini ayarlamamızı sağlayan düğme hangi prensiple çalışır?", ["Ayarlanabilir direnç", "Yansıma", "Genleşme", "Yoğunluk"], "Dimmer düğmesi bir ayarlanabilir dirençtir."),
            S("Ampulü daha parlak yakmak için reostanın sürgüsü nasıl hareket ettirilmelidir?", ["Akımın geçtiği tel kısalacak şekilde", "Akımın geçtiği tel uzayacak şekilde", "Sürgü çıkarılmalıdır", "Fark etmez"], "Tel kısalınca direnç azalır, ampul parlar.")
          ]
        }
      ]
    },
    {
      id: "f7", ad: "Sürdürülebilir Yaşam ve Etkileşim",
      konular: [
        {
          id: "f7k1", ad: "Biyoçeşitlilik",
          ozet: ["Biyoçeşitlilik: bir bölgedeki canlı türlerinin çeşitliliği", "Endemik tür: yalnızca belli bir bölgede yaşayan tür (ters lale, Van kedisi)", "Tehditler: yaşam alanı kaybı, kirlilik, aşırı avlanma, iklim değişikliği, yangınlar", "Koruma: milli parklar, av yasakları, tohum gen bankası, ağaçlandırma"],
          anlatim: [
            "Bir bölgedeki canlı türlerinin çeşitliliğine biyoçeşitlilik denir. Biyoçeşitlilik doğanın dengesi için çok önemlidir. Her canlı besin zincirinde bir görev üstlenir; bir tür yok olursa diğer canlılar da etkilenir.",
            "Türkiye, farklı iklim ve yeryüzü şekilleri sayesinde biyoçeşitlilik bakımından çok zengin bir ülkedir. Yalnızca belli bir bölgede yaşayan türlere endemik tür denir. Ters lale, Van kedisi ve Ankara keçisi Türkiye'ye özgü türlere örnektir.",
            "Biyoçeşitliliği tehdit eden başlıca etkenler: yaşam alanlarının yok edilmesi, çevre kirliliği, aşırı ve kaçak avlanma, orman yangınları, iklim değişikliği ve bir bölgeye dışarıdan getirilen istilacı türlerdir.",
            "Biyoçeşitliliği korumak için milli parklar ve koruma alanları kurulur, av yasakları konur, tohumlar gen bankalarında saklanır ve ağaçlandırma yapılır. Nesli tehlikedeki kelaynak kuşu ve deniz kaplumbağaları için özel koruma çalışmaları yürütülmektedir."
          ],
          video: "FHwVNBruI7E",
          sorular: [
            S("Yalnızca belli bir bölgede yaşayan canlı türüne ne denir?", ["Endemik tür", "İstilacı tür", "Evcil tür", "Göçmen tür"], "Endemik türler sadece belli bir bölgeye özgüdür."),
            S("Hangisi biyoçeşitliliği tehdit eden etkenlerden biri değildir?", ["Milli parklar kurulması", "Orman yangınları", "Aşırı avlanma", "Çevre kirliliği"], "Milli parklar biyoçeşitliliği korur."),
            S("Hangisi Türkiye'ye özgü (endemik) bir canlıdır?", ["Van kedisi", "Kanguru", "Penguen", "Zürafa"], "Van kedisi Türkiye'ye özgü bir türdür."),
            S("Tohumların gelecek nesiller için saklandığı yere ne denir?", ["Tohum gen bankası", "Sera", "Ambar", "Fidanlık"], "Gen bankaları bitki türlerinin tohumlarını uzun süre saklar."),
            S("Bir türün yok olması diğer canlıları neden etkiler?", ["Canlılar besin zinciriyle birbirine bağlıdır.", "Canlıların hepsi aynı türdür.", "Diğer canlılar daha çok çoğalır.", "Hiçbir canlıyı etkilemez."], "Bir halkanın kopması besin zincirindeki diğer canlıları etkiler.")
          ]
        },
        {
          id: "f7k2", ad: "İnsan Faaliyetleri ve Çevre Sorunları",
          ozet: ["Çevre sorunları: hava, su, toprak kirliliği, erozyon, küresel ısınma", "Fosil yakıtlar (kömür, petrol, doğal gaz) yenilenemez ve kirletir.", "Yenilenebilir enerji: güneş, rüzgâr, su (hidroelektrik), jeotermal, dalga", "Çözümler: geri dönüşüm, tasarruf, toplu taşıma, ağaçlandırma, damla sulama"],
          anlatim: [
            "İnsanlar ihtiyaçlarını karşılarken doğaya zarar verebilir. Fabrikalar ve taşıtlardan çıkan gazlar hava kirliliğine, evsel ve sanayi atıkları su kirliliğine, aşırı ilaç ve gübre kullanımı toprak kirliliğine yol açar.",
            "Ağaçların kesilmesiyle toprağın rüzgâr ve suyla taşınmasına erozyon denir. Kömür, petrol ve doğal gaz gibi fosil yakıtların yakılması havaya sera gazı verir ve küresel ısınmaya neden olur. Fosil yakıtlar yenilenemez; bir gün tükenecektir.",
            "Güneş, rüzgâr, akarsu (hidroelektrik), jeotermal ve dalga enerjisi yenilenebilir enerji kaynaklarıdır. Tükenmezler ve çevreyi çok daha az kirletirler.",
            "Çevreyi korumak için atıkları ayırıp geri dönüşüme göndermeli, suyu ve elektriği tasarruflu kullanmalı, toplu taşımayı tercih etmeli, ağaç dikmeli ve tarımda damla sulama gibi tasarruflu yöntemler kullanmalıyız."
          ],
          video: "IjFMQt517Mg",
          sorular: [
            S("Ağaçların kesilmesi sonucu toprağın su ve rüzgârla taşınmasına ne denir?", ["Erozyon", "Geri dönüşüm", "Küresel ısınma", "Fotosentez"], "Bitki örtüsü toprağı tutar; kesilince erozyon artar."),
            S("Küresel ısınmanın en önemli sebebi hangisidir?", ["Fosil yakıtların yakılması", "Ağaç dikilmesi", "Geri dönüşüm", "Güneş paneli kullanımı"], "Fosil yakıtlar havaya sera gazı verir."),
            S("Tarımda suyu tasarruflu kullanmak için hangi yöntem tercih edilmelidir?", ["Damla sulama", "Salma sulama", "Tarlayı su altında bırakma", "Hiç sulamama"], "Damla sulama suyu doğrudan bitkinin köküne verir."),
            S("Hangisi çevre kirliliğini azaltmaya yönelik bir davranış değildir?", ["Kısa mesafeler için bile özel araç kullanmak", "Atıkları ayrıştırmak", "Toplu taşıma kullanmak", "Su tasarrufu yapmak"], "Özel araç kullanımı hava kirliliğini artırır.")
          ]
        }
      ]
    }
  ]
};
})();
