// 1. Sınıf Hayat Bilgisi — Maarif Modeli öğrenme alanları (resimli ve kısa)
(function () {
  const { bankadan } = O;
  const K = (id, ad, ikon, bilgi, banka) => ({ id, ad, ikon, bilgi, uret: bankadan(banka) });
  DERS.hayat = {
    ad: "Hayat Bilgisi", ikon: "🏡", renk: "#2bb673",
    temalar: [
      { id: "ht1", ad: "Ben ve Okulum", konular: [
        K("h1", "Kendimi Tanıyorum", "😊", [["🙋", "Herkesin adı, yaşı ve görünüşü farklıdır."], ["😊", "Duygularımız vardır: mutlu, üzgün, kızgın, korkmuş."], ["🗣️", "Duygularımızı büyüklerimize anlatabiliriz."]], {
          ciftler: [["😊", "Mutlu"], ["😢", "Üzgün"], ["😠", "Kızgın"], ["😨", "Korkmuş"], ["😴", "Uykulu"], ["😲", "Şaşkın"]], ciftSor: (a) => `${a} Bu yüz nasıl hissediyor?`, ciftSor2: (b) => `Hangisi "${b}" bir yüz?`, ciftBaslik: "Yüzü duygusuyla eşleştir.",
          sorular: [["Doğum günü partisinde nasıl hissederiz?", "😊 Mutlu", ["😢 Üzgün", "😠 Kızgın"]], ["Oyuncağı kırılan çocuk nasıl hisseder?", "😢 Üzgün", ["😊 Mutlu", "😴 Uykulu"]], ["Üzgün olduğumuzda ne yapabiliriz?", "Büyüklerimize anlatırız", ["Bağırırız", "Eşyaları kırarız"]]],
          dy: { d: ["Her insanın duyguları vardır.", "Duygularımızı anlatmak bize iyi gelir."], y: [["Herkes birbirine tıpatıp benzer.", "Herkesin görünüşü farklıdır."]] }
        }),
        K("h2", "Okulumu Tanıyorum", "🏫", [["🏫", "Okulumuzda sınıflar, kütüphane, bahçe ve kantin vardır."], ["🧑‍🏫", "Öğretmenimiz, müdürümüz ve okul çalışanları bize yardım eder."], ["🎒", "Okul eşyalarımızı özenle kullanırız."]], {
          gruplar: { "Okul eşyası": ["✏️ Kalem", "📒 Defter", "🎒 Çanta", "📏 Cetvel", "🖍️ Boya"], "Okul eşyası değil": ["🛏️ Yatak", "🍳 Tava", "🛁 Küvet", "📺 Televizyon"] },
          gruplaSoru: "Okula götürdüklerimizi ayır.", grupSor: (g) => g === "Okul eşyası" ? "Hangisi okul eşyasıdır?" : "Hangisini okula götürmeyiz?",
          sorular: [["Okulda kitap okuduğumuz yer neresidir?", "📚 Kütüphane", ["🍳 Mutfak", "🛏️ Yatak odası"]], ["Okulda bize ders anlatan kimdir?", "🧑‍🏫 Öğretmen", ["👨‍🍳 Aşçı", "👮 Polis"]], ["Teneffüste nerede oynarız?", "🌳 Okul bahçesi", ["🚗 Otopark", "🛣️ Yol"]]]
        }),
        K("h3", "Okul ve Sınıf Kuralları", "📋", [["✋", "Konuşmak için parmak kaldırırız."], ["🚶", "Koridorda koşmayız, sırayla yürürüz."], ["🗑️", "Çöpleri çöp kutusuna atarız."]], {
          gruplar: { "Doğru davranış": ["✋ Parmak kaldırmak", "🚶 Koridorda yürümek", "🗑️ Çöpü kutuya atmak", "🤝 Sıra beklemek", "🧹 Sınıfı temiz tutmak"], "Yanlış davranış": ["🏃 Koridorda koşmak", "📢 Bağırmak", "✍️ Sıraya yazı yazmak", "🍬 Yere çöp atmak", "👊 Arkadaşını itmek"] },
          gruplaSoru: "Davranışları doğru ve yanlış diye ayır.", grupSor: (g) => g === "Doğru davranış" ? "Hangisi doğru bir davranıştır?" : "Hangisi yanlış bir davranıştır?",
          dy: { d: ["Derste konuşmak için parmak kaldırırız.", "Arkadaşlarımızla paylaşmak güzeldir."], y: [["Koridorda koşmak güvenlidir.", "Koridorda yürümeliyiz."]] }
        })
      ] },
      { id: "ht2", ad: "Sağlığım ve Güvenliğim", konular: [
        K("h4", "Sağlıklı Beslenme ve Temizlik", "🍎", [["🍎", "Meyve ve sebze yemek bizi güçlü yapar."], ["🧼", "Yemekten önce ve sonra ellerimizi yıkarız."], ["🪥", "Dişlerimizi sabah ve akşam fırçalarız."]], {
          gruplar: { "Sağlıklı": ["🍎 Elma", "🥕 Havuç", "🥛 Süt", "🍌 Muz", "🥦 Brokoli", "🧀 Peynir"], "Az yemeliyiz": ["🍭 Lolipop", "🍟 Patates kızartması", "🥤 Gazlı içecek", "🍩 Donut", "🍬 Şeker"] },
          gruplaSoru: "Yiyecekleri ayır.", grupSor: (g) => g === "Sağlıklı" ? "Hangisi sağlıklı bir yiyecek?" : "Hangisini az yemeliyiz?",
          sorular: [["Yemekten önce ne yaparız?", "🧼 Ellerimizi yıkarız", ["📺 Televizyon açarız", "😴 Uyuruz"]], ["Dişlerimizi ne ile fırçalarız?", "🪥 Diş fırçası", ["🧹 Süpürge", "🖌️ Boya fırçası"]], ["Hangisi temizlik malzemesidir?", "🧼 Sabun", ["⚽ Top", "🧸 Oyuncak ayı"]]]
        }),
        K("h5", "Trafikte Güvenlik", "🚦", [["🔴", "Kırmızı ışıkta dururuz."], ["🟢", "Yeşil ışıkta, bakarak karşıya geçeriz."], ["🚸", "Karşıya yaya geçidinden geçeriz."], ["👀", "Önce sola, sonra sağa, sonra yine sola bakarız."]], {
          ciftler: [["🔴 Kırmızı", "Dur"], ["🟡 Sarı", "Hazırlan"], ["🟢 Yeşil", "Geç"], ["🚸 Yaya geçidi", "Karşıya geçilen yer"]], ciftSor: (a) => `Trafik ışığı ${a} yanınca ne yaparız?`, ciftBaslik: "Işığı anlamıyla eşleştir.",
          sorular: [["Karşıya nereden geçeriz?", "🚸 Yaya geçidinden", ["🚗 Arabaların arasından", "🛣️ Yolun ortasından"]], ["Arabada nerede otururuz?", "Arka koltukta", ["Ön koltukta", "Kucakta"]], ["Bisiklete binerken ne takarız?", "⛑️ Kask", ["👓 Gözlük", "🎧 Kulaklık"]]],
          dy: { d: ["Kırmızı ışıkta beklemeliyiz.", "Arabada emniyet kemerini takarız."], y: [["Yolda top oynamak güvenlidir.", "Parkta oynamalıyız, yolda değil."]] }
        }),
        K("h6", "Acil Durumlar", "🚨", [["☎️", "Acil durumda 112'yi ararız."], ["🏚️", "Depremde çök, kapan, tutun yaparız."], ["🔥", "Ateşle, kibritle oynamayız."]], {
          sorular: [["Acil durumda hangi numarayı ararız?", "112", ["100", "555"]], ["Depremde ne yaparız?", "Çök, kapan, tutun", ["Koşarız", "Asansöre bineriz"]], ["Kibritle oynamak nasıl bir davranıştır?", "Tehlikeli", ["Eğlenceli", "Güvenli"]], ["Kaybolursak kimden yardım isteriz?", "👮 Polis", ["Tanımadığımız biri", "Hiç kimse"]]],
          gruplar: { "Tehlikeli": ["🔥 Kibritle oynamak", "🔌 Prize dokunmak", "💊 İlaçları kendi kendine almak", "🔪 Bıçakla oynamak", "🪟 Pencereden sarkmak"], "Güvenli": ["📚 Kitap okumak", "🧩 Yapboz yapmak", "🎨 Resim yapmak", "⚽ Parkta top oynamak"] }, gruplaSoru: "Tehlikeli ve güvenli davranışları ayır.", grupSor: (g) => g === "Tehlikeli" ? "Hangisi tehlikelidir?" : "Hangisi güvenlidir?",
          dy: { d: ["Prize bir şey sokmamalıyız.", "Tanımadığımız kişilerle bir yere gitmeyiz."], y: [["112'yi şaka için arayabiliriz.", "112 sadece acil durumda aranır."]] }
        })
      ] },
      { id: "ht3", ad: "Ailem ve Toplum", konular: [
        K("h7", "Ailem", "👨‍👩‍👧", [["👨‍👩‍👧", "Ailemizde anne, baba ve kardeşlerimiz vardır."], ["👵", "Büyükannemiz ve büyükbabamız da ailemizdendir."], ["🧹", "Evde herkes görevini yapar."]], {
          ciftler: [["👩", "Anne"], ["👨", "Baba"], ["👵", "Büyükanne"], ["👴", "Büyükbaba"], ["👶", "Bebek"]], ciftSor: (a) => `${a} Bu kim?`, ciftBaslik: "Resmi aile üyesiyle eşleştir.",
          sorular: [["Evde sana düşen görev hangisi olabilir?", "🧸 Oyuncaklarımı toplamak", ["🚗 Araba kullanmak", "🍳 Ocağı yakmak"]], ["Annemin annesine ne deriz?", "Anneanne", ["Babaanne", "Teyze"]], ["Babamın annesine ne deriz?", "Babaanne", ["Anneanne", "Hala"]]],
          dy: { d: ["Aile üyeleri birbirine yardım eder.", "Büyüklerimize saygı gösteririz."], y: [["Evde sadece annem çalışmalıdır.", "Evde herkes görev alabilir."]] }
        }),
        K("h8", "Nezaket Kuralları", "🙏", [["🙏", "Bir şey isterken \"lütfen\" deriz."], ["💐", "Yardım alınca \"teşekkür ederim\" deriz."], ["😔", "Hata yapınca \"özür dilerim\" deriz."], ["👋", "Selamlaşırız: Günaydın, merhaba!"]], {
          ciftler: [["Bir şey isterken", "Lütfen"], ["Yardım alınca", "Teşekkür ederim"], ["Hata yapınca", "Özür dilerim"], ["Sabah ilk görüşünce", "Günaydın"], ["Yatarken", "İyi geceler"]], ciftSor: (a) => `${a} ne deriz?`, ciftBaslik: "Durumu doğru sözle eşleştir.",
          dy: { d: ["Büyüklerimizin sözünü kesmeyiz.", "Kapıyı çalmadan odaya girmeyiz."], y: [["Arkadaşımızın eşyasını sormadan alabiliriz.", "İzin isteyerek alırız."]] }
        })
      ] },
      { id: "ht4", ad: "Yaşadığım Yer ve Ülkem", konular: [
        K("h9", "Evim ve Çevrem", "🏘️", [["🏠", "Evimizin bir adresi vardır."], ["🏘️", "Evimizin çevresinde komşularımız yaşar."], ["🛒", "Mahallede market, fırın, park ve okul bulunur."]], {
          ciftler: [["🥖", "Fırın"], ["🏥", "Hastane"], ["🏫", "Okul"], ["🕌", "Cami"], ["🏞️", "Park"], ["🛒", "Market"]], ciftSor: (a) => `${a} Burası neresi?`, ciftBaslik: "Resmi yerin adıyla eşleştir.",
          sorular: [["Ekmeği nereden alırız?", "🥖 Fırından", ["🏥 Hastaneden", "📚 Kütüphaneden"]], ["Hastalanınca nereye gideriz?", "🏥 Hastaneye", ["🏞️ Parka", "🛒 Markete"]], ["Kaybolmamak için neyi bilmeliyiz?", "Evimizin adresini", ["Arabaların rengini", "Ağaçların sayısını"]]]
        }),
        K("h10", "Bayrağımız ve Atatürk", "🇹🇷", [["🇹🇷", "Bayrağımız kırmızı ve beyazdır, üzerinde ay ve yıldız vardır."], ["🎵", "İstiklal Marşı'nı saygıyla, hazır olda dinleriz."], ["👤", "Atatürk, Türkiye Cumhuriyeti'nin kurucusudur."]], {
          sorular: [["Bayrağımız hangi renklerden oluşur?", "Kırmızı ve beyaz", ["Mavi ve sarı", "Yeşil ve beyaz"]], ["Bayrağımızın üzerinde ne vardır?", "🌙 Ay ve ⭐ yıldız", ["☀️ Güneş", "🌸 Çiçek"]], ["İstiklal Marşı okunurken ne yaparız?", "Saygıyla hazır olda dururuz", ["Oyun oynarız", "Konuşuruz"]], ["Türkiye Cumhuriyeti'nin kurucusu kimdir?", "Atatürk", ["Nasreddin Hoca", "Keloğlan"]]],
          gruplar: { "Millî sembolümüz": ["🇹🇷 Türk bayrağı", "🎵 İstiklal Marşı"], "Millî sembol değil": ["⚽ Futbol topu", "🎒 Okul çantası", "🧸 Oyuncak ayı", "🚲 Bisiklet"] }, gruplaSoru: "Millî sembollerimizi ayır.", grupSor: (g) => g === "Millî sembolümüz" ? "Hangisi millî sembolümüzdür?" : "Hangisi millî sembol değildir?",
          ciftler: [["🇹🇷", "Bayrağımız"], ["🎵", "İstiklal Marşı"], ["🏛️", "Anıtkabir"], ["🎈", "23 Nisan"]], ciftBaslik: "Resmi doğru adla eşleştir.",
          dy: { d: ["Atatürk çocukları çok severdi.", "Bayrağımızı yere düşürmeyiz."], y: [["Bayrağımız mavi renklidir.", "Bayrağımız kırmızı ve beyazdır."]] }
        }),
        K("h11", "Bayramlarımız", "🎉", [["🎈", "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı'dır."], ["🎆", "29 Ekim Cumhuriyet Bayramı'dır."], ["🍬", "Ramazan ve Kurban Bayramı'nda büyüklerimizi ziyaret ederiz."]], {
          sorular: [["Çocuk Bayramı hangi gün?", "23 Nisan", ["29 Ekim", "30 Ağustos"]], ["29 Ekim hangi bayramdır?", "Cumhuriyet Bayramı", ["Çocuk Bayramı", "Spor Bayramı"]], ["Bayramlarda ne yaparız?", "Büyüklerimizi ziyaret ederiz", ["Evden hiç çıkmayız", "Kimseyle konuşmayız"]]],
          ciftler: [["23 Nisan", "Çocuk Bayramı"], ["29 Ekim", "Cumhuriyet Bayramı"], ["19 Mayıs", "Gençlik ve Spor Bayramı"], ["30 Ağustos", "Zafer Bayramı"]], ciftBaslik: "Tarihi bayramıyla eşleştir.",
          gruplar: { "Millî bayram": ["23 Nisan", "29 Ekim", "19 Mayıs", "30 Ağustos"], "Dinî bayram": ["Ramazan Bayramı", "Kurban Bayramı"] }, grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")}dır?`,
          dy: { d: ["Bayramlarda evler ve okullar bayraklarla süslenir.", "Atatürk 23 Nisan'ı çocuklara armağan etti."], y: [["Çocuk Bayramı 29 Ekim'dedir.", "Çocuk Bayramı 23 Nisan'dadır."]] }
        })
      ] },
      { id: "ht5", ad: "Doğa ve Çevre", konular: [
        K("h12", "Bitkiler ve Hayvanlar", "🌻", [["🌱", "Bitkiler büyümek için su, ışık ve toprağa ihtiyaç duyar."], ["🐶", "Hayvanların da yiyeceğe, suya ve sevgiye ihtiyacı vardır."], ["🦁", "Bazı hayvanlar evde, bazıları doğada yaşar."]], {
          gruplar: { "Evcil hayvan": ["🐱 Kedi", "🐶 Köpek", "🐔 Tavuk", "🐄 İnek", "🐑 Koyun"], "Yabani hayvan": ["🦁 Aslan", "🐻 Ayı", "🐺 Kurt", "🦊 Tilki", "🐯 Kaplan"] },
          gruplaSoru: "Hayvanları ayır.", grupSor: (g) => g === "Evcil hayvan" ? "Hangisi insanlarla birlikte yaşar?" : "Hangisi doğada, ormanda yaşar?",
          sorular: [["Bitkinin büyümesi için ne gerekir?", "💧 Su", ["🍬 Şeker", "🧸 Oyuncak"]], ["Hangi hayvan süt verir?", "🐄 İnek", ["🐟 Balık", "🐦 Kuş"]], ["Hangi hayvan yumurta verir?", "🐔 Tavuk", ["🐄 İnek", "🐶 Köpek"]]]
        }),
        K("h13", "Mevsimler ve Hava", "🌦️", [["🌸", "İlkbaharda çiçekler açar."], ["☀️", "Yazın hava sıcaktır."], ["🍂", "Sonbaharda yapraklar dökülür."], ["❄️", "Kışın kar yağar, hava soğuktur."]], {
          ciftler: [["🌸", "İlkbahar"], ["☀️", "Yaz"], ["🍂", "Sonbahar"], ["⛄", "Kış"]], ciftSor: (a) => `${a} Bu resim hangi mevsimi gösteriyor?`, ciftBaslik: "Resmi mevsimiyle eşleştir.",
          sorular: [["Yağmur yağarken ne kullanırız?", "☂️ Şemsiye", ["🕶️ Güneş gözlüğü", "🩴 Terlik"]], ["Kışın ne giyeriz?", "🧥 Mont", ["🩳 Şort", "👙 Mayo"]], ["Kardan adamı hangi mevsimde yaparız?", "Kış", ["Yaz", "İlkbahar"]]],
          sirala: [["Mevsimleri sırala.", ["İlkbahar", "Yaz", "Sonbahar", "Kış"], " → "]]
        }),
        K("h14", "Çevremizi Koruyalım", "♻️", [["🗑️", "Çöplerimizi çöp kutusuna atarız."], ["♻️", "Kâğıt, plastik ve camı geri dönüşüm kutusuna atarız."], ["🚰", "Musluğu açık bırakmayız, suyu boşa harcamayız."]], {
          gruplar: { "Çevreyi korur": ["🗑️ Çöpü kutuya atmak", "🚰 Musluğu kapatmak", "🌳 Ağaç dikmek", "💡 Işığı kapatmak"], "Çevreye zarar verir": ["🍬 Yere çöp atmak", "🌿 Çiçek koparmak", "💧 Suyu boşa akıtmak", "🌳 Ağaç dalı kırmak"] },
          gruplaSoru: "Davranışları ayır.", grupSor: (g) => g === "Çevreyi korur" ? "Hangisi çevremizi korur?" : "Hangisi çevreye zarar verir?",
          dy: { d: ["Ağaçlar havayı temizler.", "Geri dönüşüm doğayı korur."], y: [["Musluğu açık bırakmak doğrudur.", "Musluğu kapatarak su biriktiririz."]] }
        })
      ] },
      { id: "ht6", ad: "Bilim, Teknoloji ve Sanat", konular: [
        K("h15", "Teknolojiyi Doğru Kullanalım", "📱", [["📱", "Tablet ve telefonu az kullanırız."], ["👀", "Ekrana çok yakından bakmayız."], ["🔌", "Elektrikli eşyalara ıslak elle dokunmayız."]], {
          gruplar: { "Teknolojik araç": ["📱 Telefon", "💻 Bilgisayar", "📺 Televizyon", "🧺 Çamaşır makinesi", "💡 Lamba"], "Teknolojik değil": ["🪨 Taş", "🍃 Yaprak", "🐚 Deniz kabuğu", "🌸 Çiçek"] },
          gruplaSoru: "Teknolojik araçları ayır.", grupSor: (g) => g === "Teknolojik araç" ? "Hangisi teknolojik bir araçtır?" : "Hangisi teknolojik bir araç değildir?",
          dy: { d: ["Tableti uzun süre kullanmak gözlerimizi yorar.", "Prize parmağımızı sokmayız."], y: [["Islak elle elektrikli araç kullanabiliriz.", "Islak elle elektrikli araçlara dokunmayız."]] }
        }),
        K("h16", "Gökyüzü ve Sanat", "🌙", [["☀️", "Güneş gündüz bizi ısıtır ve aydınlatır."], ["🌙", "Gece gökyüzünde Ay ve yıldızlar görünür."], ["🎨", "Resim yapmak, şarkı söylemek ve dans etmek sanattır."]], {
          gruplar: { "Gündüz": ["☀️ Güneş", "🏫 Okula gitmek", "🌤️ Aydınlık gökyüzü"], "Gece": ["🌙 Ay", "⭐ Yıldızlar", "😴 Uyumak"] },
          gruplaSoru: "Gündüz ve geceyi ayır.", grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")} ile ilgilidir?`,
          ciftler: [["🎨", "Resim"], ["🎵", "Müzik"], ["💃", "Dans"], ["🎭", "Tiyatro"]], ciftBaslik: "Resmi sanat dalıyla eşleştir."
        })
      ] }
    ]
  };
})();
