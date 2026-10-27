// 4. Sınıf Din Kültürü ve Ahlak Bilgisi — Maarif Modeli üniteleri (4. sınıf DKAB yeni programda)
(function () {
  const { bankadan } = O;
  const K = (id, ad, ikon, bilgi, banka) => ({ id, ad, ikon, bilgi, uret: bankadan(banka) });
  DERS.din = {
    ad: "Din Kültürü", ikon: "🕌", renk: "#06a77d",
    temalar: [
      { id: "dt1", ad: "Günlük Hayatımızda Din", konular: [
        K("dk1", "Günlük Hayatta Dinî İfadeler", "💬", [["🍽️", "Bir işe başlarken \"Bismillah\" deriz."], ["🙏", "Bir nimete şükrederken \"Elhamdülillah\" deriz."], ["🤞", "Gelecekte yapacağımız bir iş için \"İnşallah\" deriz."], ["😍", "Beğendiğimiz bir şey için \"Maşallah\" deriz."], ["👋", "Selamlaşırken \"Selamünaleyküm\", cevap verirken \"Aleykümselam\" deriz."]], {
          ciftler: [["İşe başlarken", "Bismillah"], ["Şükrederken", "Elhamdülillah"], ["Gelecekteki bir iş için", "İnşallah"], ["Bir şeyi beğenince", "Maşallah"], ["Selam verirken", "Selamünaleyküm"], ["Selam alırken", "Aleykümselam"]], ciftSor: (a) => `${a} hangi ifadeyi kullanırız?`, ciftSor2: (b) => `"${b}" ifadesi hangi durumda kullanılır?`, ciftBaslik: "Durumu dinî ifadeyle eşleştir.",
          dy: { d: ["\"Elhamdülillah\" ifadesi şükür anlamı taşır.", "\"İnşallah\" gelecekteki işler için söylenir."], y: [["\"Bismillah\" bir işi bitirirken söylenir.", "Bismillah işe başlarken söylenir."]] }
        }),
        K("dk2", "Temizlik, Şükür ve Sağlıklı Beslenme", "🧼", [["🧼", "İslam dini temizliğe büyük önem verir; beden, elbise ve çevre temizliği."], ["🙏", "Sahip olduğumuz nimetler için Allah'a şükrederiz."], ["🍎", "Sağlıklı beslenmek ve israf etmemek dinimizin öğütlerindendir."], ["🍞", "Ekmeği ve yiyecekleri israf etmeyiz."]], {
          gruplar: { "Doğru davranış": ["Yemekten önce ellerimizi yıkamak", "Tabağa yiyebileceğimiz kadar almak", "Nimetler için şükretmek", "Çevremizi temiz tutmak"], "Yanlış davranış": ["Ekmeği çöpe atmak", "Tabakta yemek bırakmak", "Yere çöp atmak", "Aşırı şeker tüketmek"] },
          gruplaSoru: "Davranışları ayır.", grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")}tır?`,
          sorular: [["İsrafı önlemek için ne yapmalıyız?", "Tabağımıza yiyebileceğimiz kadar almalıyız", ["Fazla yemek alıp bırakmalıyız", "Ekmekleri atmalıyız"]], ["Şükür nedir?", "Sahip olduklarımız için teşekkür etmek", ["Sürekli şikâyet etmek", "Başkasını kıskanmak"]]]
        })
      ] },
      { id: "dt2", ad: "Allah Sevgisi", konular: [
        K("dk3", "Allah'ı Tanıyorum", "✨", [["✨", "Allah her şeyi yaratandır ve birdir."], ["🌍", "Evrendeki düzen ve canlılar Allah'ın yarattıklarıdır."], ["💞", "Allah bütün varlıkları sever ve onlara merhamet eder."], ["🤲", "Dua, Allah ile kul arasındaki bağdır; her zaman ve her yerde dua edilebilir."]], {
          sorular: [["Dua ne zaman edilebilir?", "Her zaman ve her yerde", ["Sadece bayramlarda", "Sadece sabahları"]], ["\"Allah birdir\" inancının adı nedir?", "Tevhid", ["İsraf", "Şükür"]], ["Kelime-i Tevhid neyi ifade eder?", "Allah'tan başka ilah olmadığını ve Hz. Muhammed'in O'nun elçisi olduğunu", ["Sadece namaz vakitlerini", "Hac ibadetini"]], ["Allah'ın bizi sevdiğinin bir göstergesi hangisidir?", "Bize sayısız nimet vermesi", ["Hiç hastalanmamamız", "Her istediğimizin olması"]]],
          gruplar: { "Allah'ın yarattığı varlık": ["Güneş", "Ağaçlar", "Denizler", "Kuşlar", "İnsanlar"], "İnsanların yaptığı eşya": ["Masa", "Araba", "Bilgisayar", "Kalem", "Bina"] }, gruplaSoru: "Varlıkları ayır.", grupSor: (g) => g.startsWith("Allah") ? "Hangisi Allah'ın yarattığı bir varlıktır?" : "Hangisi insanların yaptığı bir eşyadır?",
          dy: { d: ["Allah her şeyi bilir ve görür.", "Dua ederken içten ve samimi olmalıyız."], y: [["Dua sadece camide yapılabilir.", "Dua her yerde yapılabilir."]] }
        }),
        K("dk4", "Dua ve İman Esasları", "🤲", [["🤲", "Dua: Allah'a yalvarmak, dilekte bulunmak, şükretmektir."], ["📜", "Amentü duası iman esaslarını özetler."], ["⭐", "İman esasları: Allah'a, meleklere, kitaplara, peygamberlere, ahiret gününe, kadere inanmak."]], {
          sorular: [["İman esaslarını özetleyen dua hangisidir?", "Amentü", ["Sübhaneke", "Rabbena"]], ["Hangisi iman esaslarından biridir?", "Meleklere inanmak", ["Oruç tutmak", "Zekât vermek"]], ["Hangisi iman esaslarından biri değildir?", "Hacca gitmek", ["Kitaplara inanmak", "Peygamberlere inanmak"]], ["İman esasları kaç tanedir?", "6", ["5", "4"]]],
          gruplar: { "İman esası": ["Allah'a inanmak", "Meleklere inanmak", "Kitaplara inanmak", "Peygamberlere inanmak", "Ahiret gününe inanmak", "Kadere inanmak"], "İbadet": ["Namaz kılmak", "Oruç tutmak", "Zekât vermek", "Hacca gitmek"] }, gruplaSoru: "İman esaslarını ve ibadetleri ayır.", grupSor: (g) => `Hangisi bir ${g === "İman esası" ? "iman esasıdır" : "ibadettir"}?`,
          dy: { d: ["Hac, oruç ve zekât ibadettir; iman esası değildir.", "Dua her dilde yapılabilir."], y: [["İman esasları 10 tanedir.", "İman esasları 6 tanedir."]] }
        })
      ] },
      { id: "dt3", ad: "Peygamber Sevgisi", konular: [
        K("dk5", "Peygamberlerin Örnek Davranışları", "🌙", [["👶", "Peygamberler çocukları sever; Hz. Muhammed çocuklara selam verir, onlarla oyun oynardı."], ["🤝", "Peygamberler topluma iyiliği öğütler, insanlara yardım ederdi."], ["🌳", "Peygamberler çevreyi korur; Hz. Muhammed ağaç dikmeyi teşvik etmiştir."], ["🔨", "Peygamberler çalışkandır ve el emeğine değer verir."]], {
          gruplar: { "Çocuk sevgisi": ["Çocuklara selam vermek", "Çocuklarla oyun oynamak", "Çocukları sevip okşamak"], "Çevre sevgisi": ["Ağaç dikmek", "Suyu israf etmemek", "Hayvanlara iyi davranmak"], "Çalışkanlık": ["El emeğiyle geçinmek", "İşini dürüstçe yapmak", "Zamanı boşa harcamamak"] },
          gruplaSoru: "Davranışları gruplara ayır.", grupSor: (g) => `Hangisi peygamberlerin ${g.toLocaleLowerCase("tr")} ile ilgili örnek davranışıdır?`,
          sorular: [["Son peygamber kimdir?", "Hz. Muhammed", ["Hz. Nuh", "Hz. İbrahim"]], ["Hz. Muhammed'e verilen ve \"güvenilir\" anlamına gelen lakap nedir?", "Muhammedü'l-Emin", ["Halilullah", "Kelimullah"]]]
        }),
        K("dk6", "Hz. Muhammed'i Tanıyorum", "🕋", [["🕋", "Hz. Muhammed 571 yılında Mekke'de doğdu."], ["👩", "Annesinin adı Âmine, babasının adı Abdullah'tır."], ["📖", "Kur'an-ı Kerim ona indirilmiştir."], ["🤝", "Dürüstlüğü nedeniyle \"Muhammedü'l-Emin\" (güvenilir Muhammed) diye anılırdı."]], {
          sorular: [["Hz. Muhammed hangi şehirde doğdu?", "Mekke", ["Medine", "Kudüs"]], ["Hz. Muhammed'in annesinin adı nedir?", "Âmine", ["Hatice", "Fatıma"]], ["Hz. Muhammed'in babasının adı nedir?", "Abdullah", ["Ebu Talib", "Abdülmuttalib"]], ["Hz. Muhammed'e indirilen kutsal kitap hangisidir?", "Kur'an-ı Kerim", ["Tevrat", "Zebur"]], ["Hz. Muhammed hangi yılda doğdu?", "571", ["622", "632"]]],
          ciftler: [["Doğduğu şehir", "Mekke"], ["Annesi", "Âmine"], ["Babası", "Abdullah"], ["Dedesi", "Abdülmuttalib"], ["Amcası", "Ebu Talib"], ["Sütannesi", "Halime"]], ciftSor: (a) => `Hz. Muhammed'in ${a.toLocaleLowerCase("tr")} kimdir / neresidir?`, ciftBaslik: "Hz. Muhammed'in hayatıyla ilgili bilgileri eşleştir.",
          dy: { d: ["Hz. Muhammed dürüstlüğüyle tanınırdı.", "Hz. Muhammed son peygamberdir."], y: [["Hz. Muhammed Medine'de doğmuştur.", "Mekke'de doğmuştur."]] }
        })
      ] },
      { id: "dt4", ad: "Ahlaki Değerlerimiz", konular: [
        K("dk7", "Adalet, Sabır ve Yardımseverlik", "⚖️", [["⚖️", "Adalet: herkese hakkını vermek, haksızlık yapmamaktır."], ["⏳", "Sabır: zorluklar karşısında dayanıklı olmak, aceleci davranmamaktır."], ["🤲", "Yardımseverlik: ihtiyacı olana karşılık beklemeden yardım etmektir."], ["📖", "Fatiha suresi Kur'an-ı Kerim'in ilk suresidir."]], {
          gruplar: { "Adalet": ["Oyunda kurallara herkes için uymak", "Pastayı eşit paylaştırmak", "Haksızlığa karşı çıkmak"], "Sabır": ["Sırasını beklemek", "Hastalıkta tedaviye uymak", "Zor bir ödevden vazgeçmemek"], "Yardımseverlik": ["Yaşlı komşunun pazar çantasını taşımak", "Kitaplarını ihtiyacı olana vermek", "Arkadaşına ders anlatmak"] },
          gruplaSoru: "Davranışları değerlerle eşleştirerek yerleştir.", grupSor: (g) => `Hangisi ${g.toLocaleLowerCase("tr")} örneğidir?`,
          sorular: [["Kur'an-ı Kerim'in ilk suresi hangisidir?", "Fatiha", ["İhlas", "Kevser"]], ["Sınıfta herkese eşit davranan öğretmen hangi değeri gösterir?", "Adalet", ["İsraf", "Kıskançlık"]]]
        })
      ] },
      { id: "dt5", ad: "Haklar ve Sorumluluklar", konular: [
        K("dk8", "Haklar, Mahremiyet ve Sorumluluklar", "🛡️", [["🛡️", "Her insanın hakları vardır; başkalarının hakkına saygı göstermeliyiz."], ["⚖️", "Başkasının hakkını yemek (kul hakkı) büyük bir sorumluluktur."], ["🚪", "Mahremiyet: kişinin özel alanına saygıdır; izinsiz odaya girmemek, eşyalarını karıştırmamak."], ["🤲", "Allah'a karşı ibadet, insanlara karşı iyilik, kendimize ve çevremize karşı sorumluluklarımız vardır."]], {
          gruplar: { "Mahremiyete saygı": ["Kapıyı çalarak odaya girmek", "Başkasının mesajlarını okumamak", "Arkadaşının çantasını izinsiz açmamak", "Başkasının fotoğrafını izinsiz paylaşmamak"], "Mahremiyete saygısızlık": ["Kardeşinin günlüğünü okumak", "İzinsiz odaya girmek", "Başkasının telefonunu karıştırmak", "Sırrı başkalarına anlatmak"] },
          gruplaSoru: "Davranışları ayır.", grupSor: (g) => `Hangisi mahremiyete ${g.endsWith("saygı") ? "saygı" : "saygısızlık"} örneğidir?`,
          sorular: [["Kul hakkı nedir?", "Başka bir insanın hakkı", ["Sadece hayvanların hakkı", "Kendi hakkımız"]], ["Arkadaşımızdan ödünç aldığımız kalemi ne yapmalıyız?", "Zamanında geri vermeliyiz", ["Saklamalıyız", "Kırmalıyız"]], ["Hangisi insanlara karşı sorumluluğumuzdur?", "Sözümüzü tutmak", ["Başkasını kandırmak", "Sırasını almak"]]]
        })
      ] }
    ]
  };
})();
