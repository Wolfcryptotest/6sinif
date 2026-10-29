// 2. Sınıf Hayat Bilgisi — Maarif Modeli öğrenme alanları (MEB 2026-2027 ders kitabı)
(function () {
  const { bankadan } = O;
  const K = (id, ad, ikon, bilgi, banka) => ({ id, ad, ikon, bilgi, uret: bankadan(banka) });

  DERS.hayat = {
    ad: "Hayat Bilgisi", ikon: "🏡", renk: "#2bb673",
    temalar: [
      { id: "ht1", ad: "Ben ve Okulum", konular: [
        K("h1", "Planlı Olmak", "🗓️", [["🗓️", "Planlı olmak işlerimizi zamanında yapmamızı sağlar."], ["🎒", "Akşamdan çantamızı ders programına göre hazırlarız."], ["⏰", "Ders, oyun ve dinlenme için zaman ayırırız."], ["✅", "Önce ödev, sonra oyun!"]], {
          sorular: [["Okul çantamızı ne zaman hazırlamalıyız?", "Akşamdan, ders programına bakarak", ["Sabah servis gelince", "Hiç hazırlamamalıyız"]], ["Ödevini zamanında bitiren Ece ne kazanır?", "Oyuna da zaman kalır", ["Okula geç kalır", "Ödevini unutur"]], ["Hangisi planlı bir davranıştır?", "Günlük işlerini bir listeye yazmak", ["Her şeyi son dakikaya bırakmak", "Ödevi unutmak"]], ["Ders programı ne işe yarar?", "Hangi gün hangi ders olduğunu gösterir", ["Oyun kurallarını gösterir", "Yemek tarifini gösterir"]]],
          dy: { d: ["Planlı olmak işlerimizi kolaylaştırır.", "Uyku, ders ve oyun için zaman ayırmalıyız.", "Çantamızı akşamdan hazırlamak sabahı rahatlatır."], y: [["Ödevleri hep son dakikaya bırakmalıyız.", "Ödevlerimizi zamanında yapmalıyız."], ["Plan yapmak zaman kaybıdır.", "Plan yapmak zamanımızı iyi kullanmamızı sağlar."]] },
          gruplar: { "Planlı davranış": ["Ders programına bakmak", "Ödevi zamanında yapmak", "Erken yatmak", "Kıyafetini akşamdan hazırlamak"], "Plansız davranış": ["Ödevi unutmak", "Gece geç yatmak", "Sabah çantayı aramak", "Kitabını evde bırakmak"] }, gruplaSoru: "Davranışlar planlı mı, plansız mı?",
          sirala: [["Okul sabahını sırala.", ["Uyan", "Yüzünü yıka", "Kahvaltı yap", "Okula git"], " → "], ["Akşam rutinini sırala.", ["Ödevini yap", "Çantanı hazırla", "Dişlerini fırçala", "Uyu"], " → "]]
        }),
        K("h2", "İletişim ve Arkadaşlık", "🤝", [["🗣️", "Konuşurken karşımızdakinin gözüne bakar, sözünü kesmeyiz."], ["👂", "İyi bir dinleyici dikkatle dinler."], ["🤝", "Arkadaşlarımızla paylaşır, yardımlaşırız."], ["🕊️", "Sorun olunca kavga etmeden konuşarak çözeriz."]], {
          sorular: [["Arkadaşınla aynı oyuncağı istiyorsanız ne yapmalısınız?", "Sırayla oynamalıyız", ["Kavga etmeliyiz", "Oyuncağı saklamalıyız"]], ["Arkadaşın konuşurken ne yapmalısın?", "Sözünü kesmeden dinlemeliyim", ["Başka yere bakmalıyım", "Bağırmalıyım"]], ["Sınıfa yeni gelen arkadaşına nasıl davranırsın?", "Onu oyuna davet ederim", ["Onunla konuşmam", "Ona gülerim"]], ["Arkadaşının kalemi kırıldı. Ne yaparsın?", "Kendi kalemimi ödünç veririm", ["Gülerim", "Öğretmene şikâyet ederim"]]],
          dy: { d: ["Sorunları konuşarak çözmeliyiz.", "Arkadaşlarımızın fikirlerine saygı göstermeliyiz.", "Özür dilemek ve teşekkür etmek güzel davranışlardır."], y: [["Arkadaşımın sözünü kesmek doğrudur.", "Sözünü kesmeden dinlemeliyiz."], ["Kızınca bağırmalıyız.", "Kızınca sakinleşip konuşmalıyız."]] },
          gruplar: { "Doğru davranış": ["Paylaşmak", "Sıra beklemek", "Teşekkür etmek", "Yardım etmek", "Özür dilemek"], "Yanlış davranış": ["Alay etmek", "İzinsiz eşya almak", "Bağırmak", "Söz kesmek", "Kavga etmek"] }, gruplaSoru: "Davranışları doğru kutuya yerleştir."
        }),
        K("h3", "Karar Verme", "🧭", [["🧭", "Karar vermeden önce seçenekleri düşünürüz."], ["⚖️", "Her seçeneğin iyi ve kötü yanlarına bakarız."], ["🙋", "Gerekirse büyüklerimizden fikir alırız."]], {
          sorular: [["Karar vermeden önce ne yapmalıyız?", "Seçenekleri düşünmeliyiz", ["Hemen seçmeliyiz", "Başkası seçsin diye beklemeliyiz"]], ["Hangi kulübe katılacağına karar veren Can neye dikkat etmeli?", "Neyi sevdiğine ve iyi yaptığına", ["Arkadaşının ne seçtiğine", "Kulübün rengine"]], ["Harçlığıyla ne alacağını seçen Elif ne yapmalı?", "İhtiyacını ve fiyatları düşünmeli", ["İlk gördüğünü almalı", "Hepsini almalı"]]],
          dy: { d: ["Karar verirken büyüklerimizden fikir alabiliriz.", "Doğru karar vermek için düşünmek gerekir.", "Yanlış bir karardan da ders çıkarabiliriz.", "Karar verirken başkalarına zarar vermemeye dikkat ederiz."], y: [["Karar verirken hiç düşünmemeliyiz.", "Seçenekleri düşünerek karar vermeliyiz."], ["Her kararı arkadaşımız bizim yerimize vermelidir.", "Kendi kararlarımızı düşünerek veririz."]] },
          gruplar: { "Düşünerek karar": ["Fiyatları karşılaştırmak", "Büyüklerine danışmak", "Neyi sevdiğini düşünmek", "Seçenekleri yazmak"], "Aceleci karar": ["İlk gördüğünü seçmek", "Arkadaşı seçti diye seçmek", "Hiç bakmadan almak", "Kızgınken karar vermek"] }, gruplaSoru: "Kararlar düşünerek mi, aceleyle mi verilmiş?",
          sirala: [["Karar verme adımlarını sırala.", ["Sorunu belirle", "Seçenekleri düşün", "Birini seç", "Sonucu değerlendir"], " → "]]
        })
      ] },
      { id: "ht2", ad: "Sağlığım ve Güvenliğim", konular: [
        K("h4", "Sağlıklı Alışkanlıklar", "🥗", [["🥗", "Sebze, meyve, süt ve tahıllar bizi sağlıklı tutar."], ["🧼", "Yemekten önce ve sonra ellerimizi sabunla yıkarız."], ["🦷", "Dişlerimizi sabah ve akşam fırçalarız."], ["😴", "Erken yatar, yeterince uyuruz."], ["🏃", "Her gün hareket eder, oyun oynarız."]], {
          gruplar: { "Sağlıklı": ["Elma", "Yoğurt", "Havuç", "Süt", "Mercimek çorbası", "Ceviz"], "Az tüketilmeli": ["Gazlı içecek", "Cips", "Şekerleme", "Kızartma", "Hazır kek"] }, gruplaSoru: "Yiyecekleri doğru kutuya yerleştir.", grupSor: (g) => g === "Sağlıklı" ? "Hangisi sağlıklı bir yiyecektir?" : "Hangisini az tüketmeliyiz?",
          sorular: [["Ellerimizi ne zaman yıkamalıyız?", "Yemekten önce ve sonra", ["Sadece akşam", "Hiçbir zaman"]], ["Dişlerimizi günde en az kaç kez fırçalamalıyız?", "İki", ["Bir", "Hiç"]], ["Hapşırırken ağzımızı neyle kapatmalıyız?", "Mendil ya da dirseğimizin içiyle", ["Elimizi açarak havaya", "Hiç kapatmamalıyız"]], ["Hangisi sağlıklı bir alışkanlıktır?", "Her gün hareket etmek", ["Bütün gün ekrana bakmak", "Geç saatlere kadar uyumamak"]]],
          dy: { d: ["Su içmek sağlığımız için önemlidir.", "Uyku vücudumuzu dinlendirir.", "Meyve ve sebzeleri yıkayarak yemeliyiz."], y: [["Şeker dişlerimize iyi gelir.", "Çok şeker dişlerimizi çürütür."], ["Kahvaltı yapmak gereksizdir.", "Güne kahvaltıyla başlamalıyız."]] }
        }),
        K("h5", "Çevrim İçi Güvenliğim", "💻", [["💻", "İnternette tanımadığımız kişilerle konuşmayız."], ["🔒", "Adımızı, adresimizi ve şifremizi kimseyle paylaşmayız."], ["🙋", "Bizi rahatsız eden bir şey görünce hemen büyüklerimize söyleriz."], ["⏳", "Ekran başında uzun süre kalmayız."]], {
          sorular: [["İnternette tanımadığın biri adresini sorarsa ne yaparsın?", "Söylemem ve büyüğüme haber veririm", ["Hemen söylerim", "Fotoğrafımı gönderirim"]], ["Şifremizi kimlerle paylaşabiliriz?", "Sadece annemiz ve babamızla", ["Herkesle", "Tanımadığımız kişilerle"]], ["Tablette korkutucu bir şey gördün. Ne yaparsın?", "Büyüklerime söylerim", ["Kimseye söylemem", "İzlemeye devam ederim"]], ["Ekran başında ne kadar kalmalıyız?", "Kısa süre ve büyüklerimizin izniyle", ["Bütün gün", "Gece geç saate kadar"]]],
          dy: { d: ["Kişisel bilgilerimizi internette paylaşmamalıyız.", "Oyun indirirken büyüklerimizden izin almalıyız.", "Ekran molası vermek gözlerimizi dinlendirir."], y: [["İnternette tanıştığımız biriyle buluşabiliriz.", "İnternette tanımadığımız kişilerle buluşmayız."], ["Şifremizi arkadaşlarımıza söylemeliyiz.", "Şifremizi kimseyle paylaşmayız."]] },
          gruplar: { "Güvenli": ["Büyüklerinle birlikte video izlemek", "Rahatsız olunca büyüğüne söylemek", "Ekran molası vermek"], "Güvenli değil": ["Adresini yabancıya yazmak", "Şifreni paylaşmak", "Tanımadığın kişinin mesajına cevap vermek"] }, gruplaSoru: "Davranış güvenli mi? Kutulara yerleştir."
        }),
        K("h6", "Trafik ve Acil Durumlar", "🚦", [["🔴", "Kırmızı ışıkta dururuz, yeşil ışıkta sağa sola bakarak geçeriz."], ["🚸", "Karşıya yaya geçidinden geçeriz."], ["🚸", "Trafik levhaları bize yolda nasıl davranacağımızı söyler."], ["📞", "Acil durumlarda 112'yi ararız."]], {
          sorular: [["Acil durumlarda hangi numarayı ararız?", "112", ["100", "999"]], ["Karşıdan karşıya nereden geçmeliyiz?", "Yaya geçidinden", ["Arabaların arasından", "Köprünün altından"]], ["Trafik ışığı kırmızı yanıyorsa yayalar ne yapar?", "Durur ve bekler", ["Koşarak geçer", "Yolda oynar"]], ["Arabaya binince ilk ne yaparız?", "Emniyet kemerimizi takarız", ["Camdan sarkarız", "Ayağa kalkarız"]], ["Okul geçidi levhası neyi anlatır?", "Yakında okul var, dikkatli olunmalı", ["Burada park yapılır", "Burada hastane var"]]],
          dy: { d: ["Kaldırımda yürümeliyiz.", "Arabada çocuk koltuğunda oturmalıyız.", "112'yi sadece gerçek acil durumlarda aramalıyız."], y: [["Yolun ortasında top oynayabiliriz.", "Yol oyun alanı değildir."], ["112'yi şaka için arayabiliriz.", "Acil numaralar şaka için aranmaz."]] },
          ciftler: [["🔴 Kırmızı ışık", "Dur"], ["🟡 Sarı ışık", "Hazırlan"], ["🟢 Yeşil ışık", "Bakarak geç"], ["🚸 Okul geçidi", "Dikkatli ol"]], ciftBaslik: "Işığı ya da levhayı anlamıyla eşleştir."
        })
      ] },
      { id: "ht3", ad: "Ailem ve Toplum", konular: [
        K("h7", "Canım Ailem", "👨‍👩‍👧", [["👨‍👩‍👧", "Ailemiz bizi sever, korur ve bize bakar."], ["👵", "Dede, nine, hala, teyze, amca, dayı akrabalarımızdır."], ["🧹", "Evde herkesin görevi ve sorumluluğu vardır."], ["❤️", "Aile büyüklerimize saygı gösteririz."]], {
          ciftler: [["Babamın kız kardeşi", "Hala"], ["Annemin kız kardeşi", "Teyze"], ["Babamın erkek kardeşi", "Amca"], ["Annemin erkek kardeşi", "Dayı"], ["Annemin ya da babamın annesi", "Nine (babaanne, anneanne)"]], ciftBaslik: "Akrabayı adıyla eşleştir.", ciftSor: (a) => `${a} bizim neyimiz olur?`,
          sorular: [["Evde hangisi bir çocuğun yapabileceği görevdir?", "Oyuncaklarını toplamak", ["Yemek pişirmek için ocağı yakmak", "Arabayı kullanmak"]], ["Aile büyüklerimize nasıl davranmalıyız?", "Saygılı ve sevgiyle", ["Kaba", "İlgisiz"]], ["Aile üyeleri birbirine yardım ederse ne olur?", "İşler kolay ve çabuk biter", ["Ev dağınık kalır", "Herkes yorulur"]]],
          dy: { d: ["Ailede görev paylaşımı yapılır.", "Aile bireyleri birbirini sever ve korur."], y: [["Ev işlerini sadece anneler yapar.", "Ev işlerini ailece paylaşırız."]] }
        }),
        K("h8", "Nezaket ve Görgü", "🙏", [["🙏", "Lütfen, teşekkür ederim, özür dilerim sihirli sözcüklerdir."], ["🚌", "Toplu taşımada yaşlılara ve hamilelere yer veririz."], ["🤫", "Kütüphane ve hastane gibi yerlerde sessiz oluruz."], ["👋", "Büyüklerimizi selamlarız."]], {
          sorular: [["Otobüse yaşlı bir teyze bindi, oturacak yer yok. Ne yaparsın?", "Yerimi veririm", ["Görmezden gelirim", "Camdan bakarım"]], ["Bir şey isterken hangi sözcüğü kullanırız?", "Lütfen", ["Hemen", "Ver şunu"]], ["Kütüphanede nasıl davranırız?", "Sessizce", ["Bağırarak", "Koşarak"]], ["Misafirliğe gidince ne yaparız?", "Kapıda ayakkabılarımızı çıkarır, selam veririz", ["Her odayı izinsiz gezeriz", "Hiç konuşmayız"]]],
          dy: { d: ["Yanlış yapınca özür dilemeliyiz.", "Bize yardım edene teşekkür etmeliyiz.", "Sıramızı beklemeliyiz."], y: [["Ağzımız doluyken konuşabiliriz.", "Ağzımız doluyken konuşmayız."], ["Sırada öne geçmek doğrudur.", "Sıramızı beklemeliyiz."]] },
          gruplar: { "Nazik": ["Teşekkür etmek", "Yer vermek", "Selam vermek", "Kapıyı tutmak"], "Kaba": ["Sıraya kaynak yapmak", "Bağırarak konuşmak", "Çöpü yere atmak", "İzinsiz almak"] }, gruplaSoru: "Davranışlar nazik mi, kaba mı?"
        })
      ] },
      { id: "ht4", ad: "Yaşadığım Yer ve Ülkem", konular: [
        K("h9", "Yaşadığım Yer", "🏘️", [["🏘️", "Yaşadığımız yerin adresi; il, ilçe, mahalle, sokak ve kapı numarasından oluşur."], ["👨‍💼", "Mahalleyi muhtar, ilçeyi kaymakam, ili vali yönetir."], ["🏰", "Yakın çevremizdeki tarihi ve doğal güzellikleri koruruz."]], {
          ciftler: [["Mahalle", "Muhtar"], ["İlçe", "Kaymakam"], ["İl", "Vali"], ["Belediye", "Belediye başkanı"]], ciftBaslik: "Yeri yöneticisiyle eşleştir.", ciftSor: (a) => `${a} kim tarafından yönetilir?`,
          sorular: [["Hangisi adresimizde yer alır?", "Mahalle ve sokak adı", ["En sevdiğimiz renk", "Okul numaramız"]], ["Tarihi bir camiye ya da kaleye gidince ne yapmalıyız?", "Duvarlarına yazı yazmadan, koruyarak gezmeliyiz", ["Taşlarını almalıyız", "Duvarlarına resim çizmeliyiz"]], ["Kaybolursak adresimizi bilmek neden önemlidir?", "Evimize ulaşabilmek için", ["Oyun oynamak için", "Hiç önemli değildir"]]],
          dy: { d: ["Adresimizi ezbere bilmeliyiz.", "Tarihi yerler hepimizin ortak mirasıdır."], y: [["İli muhtar yönetir.", "İli vali yönetir; mahalleyi muhtar yönetir."]] }
        }),
        K("h10", "Atatürk ve Bayramlarımız", "🇹🇷", [["🇹🇷", "Atatürk çalışkan ve meraklı bir öğrenciydi."], ["📚", "Okumayı çok severdi, matematik derslerinde çok başarılıydı."], ["🎉", "Millî bayramlarımız: 23 Nisan, 19 Mayıs, 30 Ağustos, 29 Ekim"], ["🌙", "Dinî bayramlarımız: Ramazan Bayramı ve Kurban Bayramı"]], {
          ciftler: [["23 Nisan", "Ulusal Egemenlik ve Çocuk Bayramı"], ["19 Mayıs", "Gençlik ve Spor Bayramı"], ["30 Ağustos", "Zafer Bayramı"], ["29 Ekim", "Cumhuriyet Bayramı"]], ciftBaslik: "Bayramı tarihiyle eşleştir.", ciftSor: (a) => `${a} hangi bayramdır?`,
          gruplar: { "Millî bayram": ["23 Nisan", "19 Mayıs", "30 Ağustos", "29 Ekim"], "Dinî bayram": ["Ramazan Bayramı", "Kurban Bayramı"] }, gruplaSoru: "Bayramları doğru kutuya yerleştir.",
          sorular: [["Atatürk'ün en sevdiği derslerden biri hangisiydi?", "Matematik", ["Beden eğitimi", "Resim"]], ["Bayramlarda büyüklerimize ne yaparız?", "Ziyaret edip ellerini öperiz", ["Hiç gitmeyiz", "Telefonla bile aramayız"]]],
          dy: { d: ["Atatürk çalışkan bir öğrenciydi.", "Bayramlarda küsler barışır."], y: [["29 Ekim dinî bir bayramdır.", "29 Ekim Cumhuriyet Bayramı'dır, millî bir bayramdır."]] }
        })
      ] },
      { id: "ht5", ad: "Doğa ve Çevre", konular: [
        K("h11", "Hava Olayları ve Mevsimler", "🌦️", [["☀️", "Hava güneşli, bulutlu, yağmurlu, karlı ya da rüzgârlı olabilir."], ["🌷", "Bir yılda 4 mevsim vardır: ilkbahar, yaz, sonbahar, kış."], ["🧥", "Giysilerimizi havaya göre seçeriz."], ["🧭", "Güneş doğudan doğar, batıdan batar."]], {
          gruplar: { "Kış": ["Kar", "Eldiven", "Atkı", "Kardan adam"], "Yaz": ["Şort", "Deniz", "Karpuz", "Güneş gözlüğü"] }, gruplaSoru: "Hangisi hangi mevsime ait?", grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")} mevsimiyle ilgilidir?`,
          sorular: [["Yağmurlu bir günde ne alırız?", "Şemsiye", ["Güneş gözlüğü", "Mayo"]], ["Yaprakların sararıp döküldüğü mevsim hangisidir?", "Sonbahar", ["Yaz", "İlkbahar"]], ["Güneş hangi yönden doğar?", "Doğu", ["Batı", "Kuzey"]], ["Ağaçların çiçek açtığı mevsim hangisidir?", "İlkbahar", ["Kış", "Sonbahar"]], ["Kaybolduğumuzda Güneş'in doğduğu yönü bilmek ne işe yarar?", "Yön bulmamıza yardım eder", ["Saati gösterir", "Hiçbir işe yaramaz"]]],
          sirala: [["Mevsimleri ilkbahardan başlayarak sırala.", ["İlkbahar", "Yaz", "Sonbahar", "Kış"], " → "]],
          dy: { d: ["Bir yılda dört mevsim vardır.", "Kışın kalın giyiniriz."], y: [["Güneş batıdan doğar.", "Güneş doğudan doğar."]] }
        }),
        K("h12", "Afetler ve Tasarruf", "🌍", [["🌍", "Deprem, sel ve yangın birer afettir."], ["🐢", "Depremde çök, kapan, tutun!"], ["🎒", "Evde deprem çantası hazırlarız."], ["💧", "Suyu, elektriği ve kâğıdı tasarruflu kullanırız."], ["♻️", "Atıkları geri dönüşüm kutusuna atarız."]], {
          sorular: [["Deprem anında ne yapmalıyız?", "Çök, kapan, tutun", ["Merdivenlerden koşmak", "Pencereden atlamak"]], ["Deprem çantasında hangisi olmalı?", "Su ve el feneri", ["Oyuncak araba", "Boya kalemleri"]], ["Dişlerimizi fırçalarken suyu nasıl kullanırız?", "Musluğu kapatarak", ["Musluğu açık bırakarak", "Hiç su kullanmayarak"]], ["Odadan çıkarken ne yapmalıyız?", "Işığı kapatmalıyız", ["Işığı açık bırakmalıyız", "Pencereyi açmalıyız"]]],
          gruplar: { "Tasarruf": ["Işığı kapatmak", "Musluğu kapatmak", "Kâğıdın iki yüzünü kullanmak", "Atıkları ayırmak"], "İsraf": ["Suyu boşa akıtmak", "Boş odada ışık yakmak", "Yemeği çöpe atmak", "Yarım sayfa kullanıp atmak"] }, gruplaSoru: "Davranış tasarruf mu, israf mı?",
          dy: { d: ["Deprem çantası önceden hazırlanmalıdır.", "Geri dönüşüm doğayı korur."], y: [["Depremde asansöre binmeliyiz.", "Depremde asansör kullanılmaz."]] }
        })
      ] },
      { id: "ht6", ad: "Bilim, Teknoloji ve Sanat", konular: [
        K("h13", "Bilim ve Teknoloji", "🔬", [["🔬", "Bilim insanları merak eder, araştırır ve yeni şeyler bulur."], ["📞", "Teknoloji zamanla değişir: eskiden kablolu telefon, bugün cep telefonu."], ["🕯️", "Eskiden gaz lambası, bugün elektrik ampulü kullanıyoruz."], ["⏳", "Teknolojik araçları dikkatli ve az kullanmalıyız."]], {
          ciftler: [["🕯️ Gaz lambası", "💡 Ampul"], ["✉️ Mektup", "📱 Mesaj"], ["🐴 At arabası", "🚗 Otomobil"], ["📻 Radyo", "📺 Televizyon"]], ciftBaslik: "Eski aracı yenisiyle eşleştir.", ciftSor: (a) => `${a} yerine bugün ne kullanıyoruz?`,
          sorular: [["Bilim insanları ne yapar?", "Araştırır ve yeni şeyler keşfeder", ["Sadece oyun oynar", "Hiç soru sormaz"]], ["Teknolojik araçları nasıl kullanmalıyız?", "Dikkatli ve kısa süre", ["Bütün gün", "Hiç dinlenmeden"]], ["Hangisi bir teknolojik araçtır?", "Bilgisayar", ["Ağaç", "Taş"]]],
          dy: { d: ["Teknoloji hayatımızı kolaylaştırır.", "Elektrikli aletleri ıslak elle tutmamalıyız."], y: [["Teknoloji hiç değişmez.", "Teknoloji zamanla gelişir ve değişir."]] }
        }),
        K("h14", "Hayat Sanatla Güzel", "🎨", [["🎨", "Resim, müzik, dans ve tiyatro birer sanat dalıdır."], ["🎵", "Türkülerimiz ve halk danslarımız kültürümüzü yansıtır."], ["🖌️", "Ebru ve çini geleneksel sanatlarımızdandır."], ["🏛️", "Müzeleri gezerek sanat eserlerini tanırız."]], {
          gruplar: { "Müzik": ["Türkü", "Bağlama", "Şarkı", "Davul"], "Resim ve el sanatı": ["Ebru", "Çini", "Boyama", "Kil heykel"] }, gruplaSoru: "Kartları sanat dalına göre yerleştir.",
          sorular: [["Su üzerine boyalarla desen yapılan sanatımızın adı nedir?", "Ebru", ["Çini", "Halay"]], ["Müzede nasıl davranırız?", "Eserlere dokunmadan, sessizce gezeriz", ["Eserlere dokunuruz", "Koşarak gezeriz"]], ["Hangisi bir halk dansımızdır?", "Halay", ["Bale", "Ebru"]]],
          dy: { d: ["Sanat duygularımızı anlatmamıza yardım eder.", "Herkes sanatla uğraşabilir."], y: [["Müzedeki eserlere dokunabiliriz.", "Müzedeki eserlere dokunmayız."]] }
        })
      ] }
    ]
  };
})();
