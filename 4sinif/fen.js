// 4. Sınıf Fen Bilimleri — 2018 programı üniteleri
(function () {
  const { bankadan } = O;
  const K = (id, ad, ikon, bilgi, banka) => ({ id, ad, ikon, bilgi, uret: bankadan(banka) });
  DERS.fen = {
    ad: "Fen Bilimleri", ikon: "🔬", renk: "#3d8bff",
    temalar: [
      { id: "ft1", ad: "Yer Kabuğu ve Dünya'mızın Hareketleri", konular: [
        K("f1", "Yer Kabuğunun Yapısı", "🪨", [["🌍", "Dünya'nın en dış katmanına yer kabuğu denir; kara ve okyanus tabanından oluşur."], ["🪨", "Yer kabuğu kayaçlardan oluşur. Kayaçlar mermer, granit, kireç taşı gibi çeşitlidir."], ["💎", "Kayaçların içinde maden bulunabilir: demir, bakır, altın, kömür."], ["🦴", "Fosiller, eski canlıların kayaçlarda kalan kalıntı ve izleridir."], ["🟫", "Toprak, kayaçların zamanla ufalanması ve çürümüş canlı kalıntılarının karışmasıyla oluşur."]], {
          gruplar: { "Maden": ["Demir", "Bakır", "Altın", "Gümüş", "Kömür", "Bor"], "Kayaç": ["Mermer", "Granit", "Kireç taşı", "Bazalt", "Kumtaşı"] }, gruplaSoru: "Madenleri ve kayaçları ayır.", grupSor: (g) => `Hangisi bir ${g.toLocaleLowerCase("tr")}${g === "Maden" ? "dir" : "tır"}?`,
          sorular: [["Eski canlıların kayaçlarda kalan izlerine ne denir?", "Fosil", ["Maden", "Mineral"]], ["Fosiller bize ne hakkında bilgi verir?", "Geçmişte yaşamış canlılar", ["Gelecekteki hava durumu", "Gezegenlerin uzaklığı"]], ["Yer kabuğu neyle kaplıdır?", "Kara ve sularla", ["Sadece buzla", "Sadece kumla"]], ["Elektrik kablolarında kullanılan maden hangisidir?", "Bakır", ["Kömür", "Mermer"]], ["Toprağın verimli tabakasında hangisi bulunur?", "Çürümüş bitki ve hayvan kalıntıları (humus)", ["Plastik parçaları", "Cam kırıkları"]], ["Ülkemiz dünyada hangi madenin en büyük rezervlerine sahiptir?", "Bor", ["Altın", "Gümüş"]]],
          dy: { d: ["Fosiller genellikle tortul kayaçlarda bulunur.", "Madenler ekonomik açıdan değerlidir."], y: [["Yer kabuğu sadece sudan oluşur.", "Yer kabuğu kara ve okyanus tabanından oluşur."], ["Fosiller bugün yaşayan canlılardır.", "Fosiller geçmişte yaşamış canlıların kalıntılarıdır."]] }
        }),
        K("f2", "Dünya'mızın Hareketleri", "🌍", [["🔄", "Dünya kendi ekseni etrafında döner; buna dönme hareketi denir."], ["🌗", "Dönme hareketi sonucunda gece ve gündüz oluşur. Bir tur yaklaşık 24 saat (1 gün) sürer."], ["☀️", "Dünya Güneş'in etrafında da döner; buna dolanma hareketi denir."], ["📅", "Dolanma hareketi yaklaşık 365 gün (1 yıl) sürer."], ["🌐", "Dünya batıdan doğuya doğru döner; bu yüzden Güneş doğudan doğar."]], {
          ciftler: [["Dönme hareketi", "Gece ve gündüz"], ["Dolanma hareketi", "1 yıl"], ["Bir dönme", "Yaklaşık 24 saat"], ["Bir dolanma", "Yaklaşık 365 gün"]], ciftSor: (a) => `${a} sonucunda ne oluşur / ne kadar sürer?`, ciftBaslik: "Hareketi sonucuyla eşleştir.",
          sorular: [["Dünya'nın kendi ekseni etrafında dönmesine ne denir?", "Dönme hareketi", ["Dolanma hareketi", "Sallanma hareketi"]], ["Gece ve gündüzün oluşmasının nedeni nedir?", "Dünya'nın kendi ekseni etrafında dönmesi", ["Ay'ın Dünya etrafında dönmesi", "Güneş'in sönmesi"]], ["Dünya Güneş etrafındaki bir turunu ne kadar sürede tamamlar?", "Yaklaşık 365 gün", ["24 saat", "30 gün"]], ["Güneş neden doğudan doğar?", "Dünya batıdan doğuya döndüğü için", ["Güneş hareket ettiği için", "Bulutlar yön değiştirdiği için"]]],
          dy: { d: ["Dünya'nın bir yarısı aydınlıkken diğer yarısı karanlıktır.", "Dünya hem kendi ekseni hem de Güneş etrafında döner."], y: [["Gece ve gündüz Dünya'nın Güneş etrafında dolanmasıyla oluşur.", "Gece-gündüz dönme hareketiyle oluşur."]] }
        })
      ] },
      { id: "ft2", ad: "Besinlerimiz", konular: [
        K("f3", "Besin İçerikleri", "🥗", [["🍞", "Karbonhidratlar enerji verir: ekmek, pirinç, makarna, patates."], ["🧈", "Yağlar enerji verir ve vücudu soğuktan korur: tereyağı, zeytinyağı, ceviz."], ["🥩", "Proteinler büyüme ve onarım sağlar: et, yumurta, süt, mercimek."], ["🍊", "Vitaminler ve mineraller vücudu korur, düzenler: meyve ve sebzeler."], ["💧", "Su, vücudumuzun büyük kısmını oluşturur; günde yeterli su içmeliyiz."]], {
          gruplar: { "Karbonhidrat": ["Ekmek", "Pirinç", "Makarna", "Patates", "Bulgur"], "Protein": ["Yumurta", "Et", "Tavuk", "Mercimek", "Balık"], "Yağ": ["Tereyağı", "Zeytinyağı", "Ceviz", "Fındık"], "Vitamin ve mineral": ["Portakal", "Havuç", "Ispanak", "Elma", "Domates"] },
          gruplaSoru: "Besinleri en çok içerdikleri besin içeriğine göre yerleştir.", grupSor: (g) => `Hangisi en çok ${g.toLocaleLowerCase("tr")} içerir?`,
          sorular: [["Vücudu soğuktan koruyan ve enerji veren besin içeriği hangisidir?", "Yağ", ["Vitamin", "Su"]], ["Büyüme ve gelişme için en gerekli besin içeriği hangisidir?", "Protein", ["Karbonhidrat", "Yağ"]], ["Hangi besin içeriği vücudumuzun büyük kısmını oluşturur?", "Su", ["Protein", "Yağ"]]],
          dy: { d: ["Dengeli beslenmek için her besin grubundan yemeliyiz.", "C vitamini portakal ve limonda bolca bulunur."], y: [["Sadece karbonhidrat yiyerek dengeli beslenebiliriz.", "Her besin içeriğinden yeterince almalıyız."]] }
        }),
        K("f4", "Sağlıklı Yaşam ve Besin Tüketimi", "🏃", [["⚖️", "Dengeli beslenme: her besin grubundan yeterli miktarda yemek."], ["🍬", "Fazla şeker, tuz ve hazır yiyecek sağlığa zararlıdır."], ["🏷️", "Besin etiketinde son tüketim tarihine ve içeriğe bakmalıyız."], ["🚭", "Sigara ve alkol sağlığa zarar verir; sigara dumanından uzak durmalıyız."], ["🏃", "Düzenli egzersiz, uyku ve su içmek sağlıklı yaşamın parçalarıdır."]], {
          gruplar: { "Sağlıklı alışkanlık": ["Her gün kahvaltı yapmak", "Yeterince su içmek", "Düzenli spor yapmak", "Meyve ve sebze yemek", "Erken yatmak"], "Sağlıksız alışkanlık": ["Çok gazlı içecek içmek", "Geç saatte yemek", "Hareketsiz kalmak", "Sigara dumanında bulunmak", "Sürekli hazır yiyecek yemek"] },
          gruplaSoru: "Alışkanlıkları ayır.", grupSor: (g) => g.startsWith("Sağlıklı") ? "Hangisi sağlıklı bir alışkanlıktır?" : "Hangisi sağlıksız bir alışkanlıktır?",
          sorular: [["Paketli bir besini alırken etikette ilk neye bakmalıyız?", "Son tüketim tarihine", ["Paketin rengine", "Reklam yazısına"]], ["Besinlerin bozulmasını önlemek için hangisi yapılır?", "Buzdolabında saklamak", ["Güneşte bırakmak", "Ağzı açık bırakmak"]], ["Sigara dumanı en çok hangi organımıza zarar verir?", "Akciğerler", ["Saçlar", "Tırnaklar"]]],
          dy: { d: ["Bozulmuş besinler zehirlenmeye yol açabilir.", "Sigaranın dumanı da sağlığa zararlıdır."], y: [["Son tüketim tarihi geçmiş besinler yenebilir.", "Tarihi geçmiş besinler yenmemelidir."]] }
        })
      ] },
      { id: "ft3", ad: "Kuvvetin Etkileri", konular: [
        K("f5", "Kuvvetin Etkileri", "💪", [["💪", "İtme ve çekme kuvvettir."], ["▶️", "Kuvvet duran cisimleri hareket ettirir, hareket edenleri durdurur."], ["↩️", "Kuvvet hareketin yönünü ve hızını değiştirebilir."], ["🫓", "Kuvvet cisimlerin şeklini değiştirebilir: hamuru açmak."]], {
          gruplar: { "Hareketi başlatır": ["Duran topa vurmak", "Bisikletin pedalını çevirmek", "Masayı itmek"], "Yönünü değiştirir": ["Kaleci topu kornere çeler", "Raketle topa vurmak", "Direksiyonu çevirmek"], "Şeklini değiştirir": ["Hamuru açmak", "Kutuyu ezmek", "Oyun hamuruna şekil vermek", "Yayı sıkıştırmak"] },
          gruplaSoru: "Kuvvetin etkisine göre örnekleri yerleştir.", grupSor: (g) => `Hangisinde kuvvet cismin ${g === "Hareketi başlatır" ? "hareketini başlatmıştır" : g === "Yönünü değiştirir" ? "yönünü değiştirmiştir" : "şeklini değiştirmiştir"}?`,
          sorular: [["İtme ve çekmeye ne ad verilir?", "Kuvvet", ["Enerji", "Hız"]], ["Hareket eden bir bisikletin frenine basmak ne sağlar?", "Hareketin yavaşlaması", ["Hızlanması", "Şeklinin değişmesi"]]],
          dy: { d: ["Kuvvet cisimlerin şeklini değiştirebilir.", "Kuvvet hareket eden cismi durdurabilir."], y: [["Kuvvet sadece cisimleri hareket ettirir, durduramaz.", "Kuvvet hareketi durdurabilir de."]] }
        }),
        K("f6", "Mıknatısların Uyguladığı Kuvvet", "🧲", [["🧲", "Mıknatıs demir, nikel ve kobalt içeren maddeleri çeker."], ["🔴🔵", "Mıknatısın N (kuzey) ve S (güney) olmak üzere iki kutbu vardır."], ["🧲", "Aynı kutuplar birbirini iter, zıt kutuplar birbirini çeker."], ["🏭", "Mıknatıslar hurdalıkta, buzdolabı kapağında, pusulada kullanılır."]], {
          gruplar: { "Mıknatıs çeker": ["Demir çivi", "Ataş", "Toplu iğne", "Demir vida", "Nikel para"], "Mıknatıs çekmez": ["Tahta kalem", "Cam bilye", "Plastik cetvel", "Kâğıt", "Alüminyum folyo"] },
          gruplaSoru: "Mıknatısın çektiği ve çekmediği maddeleri ayır.", grupSor: (g) => g === "Mıknatıs çeker" ? "Mıknatıs hangisini çeker?" : "Mıknatıs hangisini çekmez?",
          sorular: [["İki mıknatısın N kutupları yaklaştırılırsa ne olur?", "Birbirlerini iterler", ["Birbirlerini çekerler", "Hiçbir şey olmaz"]], ["Bir mıknatısın N kutbu ile diğerinin S kutbu yaklaştırılırsa ne olur?", "Birbirlerini çekerler", ["Birbirlerini iterler", "Erirler"]], ["Hurdalıklarda demirleri taşımak için ne kullanılır?", "Büyük mıknatıslar", ["Büyük süngerler", "Büyük cam"]], ["Pusulanın iğnesi neden kuzeyi gösterir?", "Mıknatıslı olduğu için", ["Ağır olduğu için", "Parlak olduğu için"]]],
          dy: { d: ["Mıknatısın çekim etkisi kutuplarda en fazladır.", "Mıknatıs bazı maddeleri dokunmadan çekebilir."], y: [["Mıknatıs tüm metalleri çeker.", "Alüminyum, bakır gibi metalleri çekmez."]] }
        })
      ] },
      { id: "ft4", ad: "Maddenin Özellikleri", konular: [
        K("f7", "Maddeyi Niteleyen Özellikler", "🧱", [["👀", "Maddeleri duyu organlarımızla tanırız: renk, koku, tat, sertlik, esneklik."], ["🧽", "Esnek maddeler eski hâline döner: lastik, sünger."], ["🥚", "Kırılgan maddeler kolay kırılır: cam, porselen."], ["💧", "Suyu geçiren (kâğıt havlu) ve geçirmeyen (naylon) maddeler vardır."], ["⚠️", "Tanımadığımız maddeleri tatmamalı, koklamamalıyız."]], {
          gruplar: { "Esnek": ["Lastik", "Sünger", "Balon", "Yay"], "Kırılgan": ["Cam", "Porselen tabak", "Yumurta kabuğu", "Ayna"], "Su geçirmez": ["Naylon", "Plastik", "Yağmurluk", "Bot"] },
          gruplaSoru: "Maddeleri özelliklerine göre yerleştir.", grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")} bir maddedir?`,
          sorular: [["Zımpara kâğıdının yüzeyi nasıldır?", "Pürüzlü", ["Pürüzsüz", "Esnek"]], ["Şemsiye neden su geçirmeyen kumaştan yapılır?", "Bizi ıslanmaktan korumak için", ["Hafif olsun diye", "Renkli olsun diye"]], ["Tanımadığımız bir sıvıyı nasıl incelemeliyiz?", "Öğretmenimizin gözetiminde, tatmadan", ["Tadına bakarak", "Elimize dökerek"]]]
        }),
        K("f8", "Maddenin Ölçülebilir Özellikleri", "⚖️", [["⚖️", "Kütle, maddenin miktarıdır; terazi ile ölçülür (kg, g)."], ["📦", "Hacim, maddenin kapladığı yerdir (L, mL)."], ["🥛", "Sıvıların hacmi dereceli kaplarla ölçülür."], ["🪨", "Katının hacmini suya batırıp su seviyesindeki yükselmeden bulabiliriz."]], {
          ciftler: [["Kütle", "Terazi"], ["Sıvı hacmi", "Dereceli silindir"], ["Uzunluk", "Cetvel"], ["Sıcaklık", "Termometre"]], ciftSor: (a) => `${a} hangi araçla ölçülür?`, ciftBaslik: "Ölçülen özelliği ölçme aracıyla eşleştir.",
          sorular: [["Maddenin kapladığı yere ne denir?", "Hacim", ["Kütle", "Renk"]], ["Maddenin miktarına ne denir?", "Kütle", ["Hacim", "Sıcaklık"]], ["Dereceli silindirdeki su 50 mL'den 70 mL'ye çıktıysa taşın hacmi kaç mL'dir?", "20 mL", ["70 mL", "120 mL"]], ["Kütle hangi birimle ölçülür?", "Kilogram", ["Litre", "Metre"]]],
          dy: { d: ["Her maddenin kütlesi ve hacmi vardır.", "Hava da bir maddedir ve yer kaplar."], y: [["Havanın kütlesi yoktur.", "Havanın da kütlesi vardır."]] }
        }),
        K("f9", "Maddenin Hâlleri ve Isı", "🧊", [["🧊", "Maddeler katı, sıvı, gaz hâlinde bulunur."], ["🔥", "Isı alan maddeler: erime (buz → su), buharlaşma (su → buhar)."], ["❄️", "Isı veren maddeler: donma (su → buz), yoğuşma (buhar → su)."], ["🍫", "Çikolata güneşte erir, dondurucuda katılaşır."]], {
          ciftler: [["Erime", "Katı → Sıvı"], ["Donma", "Sıvı → Katı"], ["Buharlaşma", "Sıvı → Gaz"], ["Yoğuşma", "Gaz → Sıvı"]], ciftSor: (a) => `${a} olayında madde hangi hâlden hangi hâle geçer?`, ciftSor2: (b) => `${b} değişimine ne ad verilir?`, ciftBaslik: "Hâl değişimini eşleştir.",
          gruplar: { "Isı alarak olur": ["Buzun erimesi", "Islak çamaşırın kuruması", "Tereyağının tavada erimesi", "Suyun kaynaması"], "Isı vererek olur": ["Suyun donması", "Soğuk bardağın dışının terlemesi", "Kışın camların buğulanması", "Sıvı çikolatanın katılaşması"] },
          gruplaSoru: "Olayları ısı alma ve ısı vermeye göre ayır."
        }),
        K("f10", "Saf Madde ve Karışımlar", "🥣", [["💎", "Tek bir maddeden oluşanlara saf madde denir: su, altın, tuz."], ["🥗", "Birden fazla maddenin bir araya gelmesiyle karışım oluşur: salata, limonata, tuzlu su."], ["🕳️", "Karışımlar eleme, süzme, mıknatısla ayırma, buharlaştırma ile ayrılır."]], {
          gruplar: { "Saf madde": ["Saf su", "Altın", "Şeker", "Tuz", "Demir"], "Karışım": ["Ayran", "Limonata", "Meyve salatası", "Tuzlu su", "Toprak"] },
          gruplaSoru: "Saf maddeleri ve karışımları ayır.", grupSor: (g) => `Hangisi bir ${g === "Saf madde" ? "saf maddedir" : "karışımdır"}?`,
          ciftler: [["Kum - çakıl", "Eleme"], ["Makarna - su", "Süzme"], ["Demir tozu - kum", "Mıknatısla ayırma"], ["Tuzlu su", "Buharlaştırma"]], ciftSor: (a) => `${a} karışımı hangi yöntemle ayrılır?`, ciftBaslik: "Karışımı ayırma yöntemiyle eşleştir."
        })
      ] },
      { id: "ft5", ad: "Aydınlatma ve Ses Teknolojileri", konular: [
        K("f11", "Aydınlatma ve Işık Kirliliği", "💡", [["🕯️", "Geçmişte meşale, gaz lambası ve mum kullanılırdı; bugün ampul ve LED kullanıyoruz."], ["💡", "Tasarruflu ampuller daha az elektrik harcar."], ["🌃", "Gereğinden fazla ve yanlış yönlendirilmiş ışık, ışık kirliliğine yol açar."], ["🦉", "Işık kirliliği gökyüzünün görülmesini engeller, hayvanların yaşamını olumsuz etkiler."]], {
          gruplar: { "Doğal ışık kaynağı": ["Güneş", "Yıldızlar", "Ateş böceği", "Şimşek"], "Yapay ışık kaynağı": ["Ampul", "El feneri", "Mum", "Sokak lambası", "Gaz lambası"] }, gruplaSoru: "Işık kaynaklarını ayır.", grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")}dır?`,
          sirala: [["Aydınlatma araçlarını geçmişten günümüze sırala.", ["Meşale", "Gaz lambası", "Akkor ampul", "LED ampul"], " → "]],
          sorular: [["Işık kirliliğinin bir zararı hangisidir?", "Yıldızların görülmesini zorlaştırır", ["Havayı temizler", "Elektrik tasarrufu sağlar"]], ["Hangisi ışık kirliliğini azaltır?", "Sokak lambalarının ışığını yere yönlendirmek", ["Bütün ışıkları gece boyunca açık bırakmak", "Çok parlak reklam ışıkları kullanmak"]], ["Hangi ampul daha az elektrik harcar?", "LED ampul", ["Akkor ampul", "Gaz lambası"]], ["Kitap okurken ışık nasıl olmalıdır?", "Yeterli ve göz kamaştırmayan", ["Çok loş", "Doğrudan gözümüze gelen"]]],
          dy: { d: ["Işık kirliliği göç eden kuşların yönünü şaşırtabilir.", "Uygun aydınlatma göz sağlığını korur."], y: [["Işık ne kadar çok olursa o kadar iyidir.", "Fazla ışık kirliliğe yol açar."]] }
        }),
        K("f12", "Ses ve Ses Kirliliği", "🔊", [["🔊", "Ses titreşimle oluşur ve her yöne yayılır."], ["📻", "Ses teknolojileri: telefon, mikrofon, hoparlör, kulaklık, işitme cihazı."], ["📢", "İstenmeyen ve rahatsız edici seslere gürültü denir."], ["🔇", "Gürültü, ses kirliliğine yol açar; işitme kaybı ve stres yapabilir."]], {
          gruplar: { "Ses kirliliğine yol açar": ["Gece yüksek sesle müzik dinlemek", "Gereksiz korna çalmak", "Kulaklıkla çok yüksek ses", "Kütüphanede bağırmak"], "Ses kirliliğini önler": ["Evlerde ses yalıtımı yapmak", "Yol kenarına ağaç dikmek", "Sessiz ortamlarda alçak sesle konuşmak", "Makinelere susturucu takmak"] },
          gruplaSoru: "Davranışları ayır.", grupSor: (g) => g.startsWith("Ses kirliliğine") ? "Hangisi ses kirliliğine yol açar?" : "Hangisi ses kirliliğini önler?",
          sorular: [["İstenmeyen ve rahatsız edici seslere ne denir?", "Gürültü", ["Müzik", "Yankı"]], ["Sesi yükselterek iletmeye yarayan teknolojik araç hangisidir?", "Hoparlör", ["Termometre", "Büyüteç"]], ["İşitme güçlüğü olan kişiler ne kullanır?", "İşitme cihazı", ["Gözlük", "Pusula"]]]
        })
      ] },
      { id: "ft6", ad: "İnsan ve Çevre", konular: [
        K("f13", "Bilinçli Tüketici ve Geri Dönüşüm", "♻️", [["🛒", "İhtiyacımız kadar almak, israf etmemek bilinçli tüketimdir."], ["♻️", "Kâğıt, cam, plastik ve metal geri dönüştürülebilir."], ["🔋", "Atık piller toprağa ve suya zarar verir; ayrı toplanmalıdır."], ["🚰", "Su ve elektriği tasarruflu kullanmak kaynakları korur."]], {
          gruplar: { "Kâğıt": ["Gazete", "Karton kutu", "Eski defter"], "Plastik": ["Pet şişe", "Deterjan kutusu", "Plastik kap"], "Cam": ["Reçel kavanozu", "Cam şişe"], "Metal": ["Konserve kutusu", "Meşrubat kutusu"] },
          gruplaSoru: "Atıkları doğru geri dönüşüm kutusuna yerleştir.", grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")} kutusuna atılır?`,
          sorular: [["Hangisi bilinçli tüketici davranışıdır?", "İhtiyaç listesi yaparak alışveriş yapmak", ["Her indirimi kaçırmadan almak", "Kullanmayacağı ürünleri almak"]], ["Atık piller nereye atılmalıdır?", "Atık pil toplama kutusuna", ["Çöpe", "Toprağa"]], ["Dişlerimizi fırçalarken musluğu kapatmak neyi korur?", "Su kaynaklarını", ["Elektriği", "Kâğıdı"]]]
        })
      ] },
      { id: "ft7", ad: "Basit Elektrik Devreleri", konular: [
        K("f14", "Elektrik Devresi Elemanları", "🔋", [["🔋", "Pil: devreye enerji sağlar."], ["💡", "Ampul: elektrik enerjisini ışığa dönüştürür."], ["🔌", "Kablo (bağlantı kablosu): elektriğin akmasını sağlar."], ["🔘", "Anahtar: devreyi açıp kapatır."], ["🔁", "Ampulün yanması için devrenin kapalı (tam) olması gerekir."]], {
          ciftler: [["Pil", "Enerji kaynağı"], ["Ampul", "Işık verir"], ["Kablo", "Elektriği iletir"], ["Anahtar", "Devreyi açar-kapatır"], ["Duy", "Ampulün takıldığı yer"]], ciftSor: (a) => `Elektrik devresinde ${a.toLocaleLowerCase("tr")} ne işe yarar?`, ciftSor2: (b) => `"${b}" hangi devre elemanının görevidir?`, ciftBaslik: "Devre elemanını göreviyle eşleştir.",
          sorular: [["Anahtar açıkken ampul neden yanmaz?", "Devre tamamlanmadığı için", ["Pil bittiği için", "Ampul yandığı için"]], ["Basit bir devrede ampulün yanması için ne gerekir?", "Devrenin kapalı olması", ["Kablonun kopuk olması", "Pilin ters takılması"]], ["Elektriği iyi ileten madde hangisidir?", "Bakır tel", ["Tahta çubuk", "Plastik cetvel"]]],
          dy: { d: ["Pil biterse ampul yanmaz.", "Elektrik devresinde kablolar elektriği iletir."], y: [["Anahtar açıkken ampul yanar.", "Anahtar kapalıyken ampul yanar."]] }
        }),
        K("f15", "Elektriği Güvenli Kullanma", "⚠️", [["⚠️", "Prize parmak ya da metal cisim sokulmaz."], ["💧", "Elektrikli aletlere ıslak elle dokunulmaz."], ["🔌", "Fiş, kablosundan çekilerek çıkarılmaz."], ["⚡", "Elektrik direklerine ve trafolara yaklaşılmaz."]], {
          gruplar: { "Güvenli": ["Prize koruyucu kapak takmak", "Fişi tutarak çıkarmak", "Ellerimizi kurulayıp saç kurutma makinesi kullanmak", "Uçurtmayı açık alanda uçurmak"], "Tehlikeli": ["Prize tel sokmak", "Islak elle fişe dokunmak", "Kablosu soyulmuş aleti kullanmak", "Trafoya yaklaşmak"] },
          gruplaSoru: "Davranışları güvenli ve tehlikeli diye ayır.", grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")} bir davranıştır?`,
          dy: { d: ["Bir prize çok fazla alet bağlamak yangına yol açabilir.", "Elektrik çarpmasına uğrayan kişiye çıplak elle dokunulmaz."], y: [["Islak elle elektrik düğmesine basmak güvenlidir.", "Islak elle elektrikli araçlara dokunulmaz."]] }
        })
      ] }
    ]
  };
})();
