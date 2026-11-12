// 📕 Kitabım — 3. Sınıf Türkçe Ders Kitabı 1. Kitap (MEB 2026-2027) rehberi: konu anlatımı + etkinlik çözümleri.
// Metinlerin kendisi kitapta; burada yalnızca özet, açıklama ve cevaplar var. "s" = kitap sayfası.
// Cevap türleri: k = kesin cevap; o = örnek cevap (çocuğun kendi cümlesi de doğru olabilir).
// Dinleme/izleme metinleri kitapta yazılı değil (karekodla dinlenir): o cevaplar etkinliklerden çıkarıldı, "dinle" uyarısı taşır.
window.REHBER = window.REHBER || {};
window.REHBER.turkce = {
  kitap: "Türkçe Ders Kitabı — 1. Kitap",
  pdf: "https://cdn.eba.gov.tr/temel-egitim/yayin/2026-2027/ktp/turkce3-1.pdf",
  fark: 1, // PDF sayfası = kitap sayfası + fark
  temalar: [
    {
      ad: "Hatırlatma Etkinlikleri", ikon: "🔁",
      bolumler: [
        {
          ad: "Hatırlatma Etkinlikleri", s: 14, ikon: "🔁",
          anlatim: [
            ["🎧", "Dinleme kuralları: Sessiz ve dikkatli dinleriz, uygun oturur, konuşanın sözünü kesmeyiz."],
            ["🗣️", "Konuşma kuralları: Hızımızı ayarlarız, vurgu ve tonlamaya dikkat ederiz, anlamlı ve kurallı cümleler kurarız."],
            ["📝", "Metnin konusu: Metin neyi anlatıyor? sorusunun cevabıdır."],
            ["❗", "Noktalama: Bildiren cümle sonuna nokta (.), soru cümlesine soru işareti (?), duygu ve seslenme bildiren cümleye ünlem (!) konur. Sıralanan sözcükler virgülle (,) ayrılır."]
          ],
          cevaplar: [
            ["Yaz Tatili — b) Metindeki üç olay", "Murat ailesiyle Antalya'ya tatile gitti. Plajda kumdan kale yaptı, denizde yüzdü. Dedesinin köyünde tavuklara yem verdi, kiraz topladı.", "o"],
            ["Yaz Tatili — c) Metnin konusu", "Murat'ın yaz tatilinde yaptıkları.", "k"],
            ["Güne Başlarken — a) Olayların sırası", "Uyandı, elini yüzünü yıkadı → okul kıyafetlerini giydi → ailesiyle kahvaltı etti → dişlerini fırçaladı → ayakkabısını giyip çantasını aldı → babası okula götürdü → arkadaşlarıyla selamlaştı, ders başladı.", "o"],
            ["Ali ile Zeynep — a) Kişiler", "Ali, Zeynep, Ali'nin annesi, Ali'nin babası, Zeynep'in annesi.", "k"],
            ["Ali ile Zeynep — a) Öğrendiğim bilgiler", "Doğa bütün canlıların evidir, kirletmemeliyiz. Cam, plastik ve kâğıt ayrı toplanırsa geri dönüştürülebilir. Suyu tasarruflu kullanmalıyız.", "o"],
            ["Ali ile Zeynep — b) Zıt anlamlılar", "Altı çizili sözcükler kitapta işaretli. Örnek: güzel ↔ çirkin, ayrı ↔ birlikte, kirletmek ↔ temizlemek, mutlu ↔ mutsuz, dikkatli ↔ dikkatsiz.", "o"],
            ["d) Noktalama 1", "Bugün çok güzel bir gün.", "k"],
            ["d) Noktalama 2", "Annem, babam, kardeşim ve ben parka gittik.", "k"],
            ["d) Noktalama 3", "Hava ne kadar sıcak!", "k"],
            ["d) Noktalama 4", "En sevdiğin renk hangisi?", "k"],
            ["d) Noktalama 5", "Oyuncağını neden kırdın?", "k"],
            ["d) Noktalama 6", "Dikkat et, yere düşeceksin!", "k"],
            ["d) Noktalama 7", "Kitabımı, defter ve kalemimi çantama koydum.", "k"]
          ]
        }
      ]
    },
    {
      ad: "1. Tema: Değerlerimizle Yaşıyoruz", ikon: "💛",
      bolumler: [
        {
          ad: "Temaya Hazırlanalım — Elif ile Pıtırcık", s: 20, ikon: "🐦",
          anlatim: [
            ["🐦", "Elif okula giderken yere düşmüş, uçamayan bir kuş yavrusu bulur. Eve götürür, annesiyle ona bakar ve adını Pıtırcık koyar. Kuş iyileşince onu doğaya bırakır."],
            ["💡", "Ana fikir: Yardıma muhtaç canlılara sevgi ve şefkatle yardım etmeliyiz."],
            ["🔢", "Olayları oluş sırasına göre yazarken \"önce, sonra, daha sonra, en sonunda\" gibi sözcükler kullanırız."]
          ],
          cevaplar: [
            ["Olayları oluş sırasına göre yaz", "Elif okula giderken kaldırımda uçamayan bir kuş yavrusu gördü. Kuşu eline alıp eve götürdü. Annesiyle karton kutuya yumuşak bir bez serdiler. Kuşa Pıtırcık adını verip su ve uygun yiyecekler verdiler. Pıtırcık birkaç haftada iyileşti. Elif bir sabah onu pencereden doğaya bıraktı.", "o"]
          ]
        },
        {
          ad: "Kelebek ile Lavanta (Dinleme Metni)", s: 21, ikon: "🦋", dinleme: true,
          anlatim: [
            ["🎧", "Bu bir dinleme metnidir; metni kitaptaki karekoddan dinlersin."],
            ["🦋", "Kelebek kendini çok beğenen (kibirli) biridir. Lavanta'nın dünyayı gezme hayalinde ona yardım etmeyi reddeder. Mevsim değişip soğuklar gelince Kelebek zor duruma düşer. Sonunda hatasını anlar, Lavanta'dan özür diler; Lavanta onu affeder."],
            ["📖", "kibir: Kendini başkalarından üstün tutma."],
            ["💡", "Ana fikir: Kibirli davranışlar bizi yalnız bırakır; hatamızı anlayıp özür dilemeli, özür dileyeni affetmeliyiz."],
            ["🔠", "Büyük harf: Cümle başı ve özel adlar (Türkiye, Arda, Neşe) büyük harfle başlar. Cümle ortasındaki \"çiçek, ben\" gibi sözcükler küçük yazılır."]
          ],
          cevaplar: [
            ["2. Etkinlik — Metnin konusu", "Kibirli davranışların olumsuz sonuçları ve affetmenin önemi.", "k"],
            ["3. Etkinlik — Ana fikir", "Kibirli olmamalı, hata yapınca özür dilemeli; özür dileyeni affetmeliyiz.", "o"],
            ["4. Etkinlik — kibir", "Kendini başkalarından üstün görmek, büyüklenmek.", "k"],
            ["5. Etkinlik — Cümleleri tamamla", "Kendini Lavanta'dan üstün gördüğü için Kelebek, Lavanta'nın yardımını reddetti. / Dostluğun devam etmesi ve barışmaları için Lavanta'nın Kelebek'i affetmesi önemlidir.", "o"],
            ["6. Etkinlik — Kelebek'in davranışı doğru mu?", "Doğru değildir. Kelebek'in yerinde olsaydım Lavanta'ya kibar davranır, ona yardım ederdim. Birlikte dünyayı gezerdik.", "o"],
            ["8. Etkinlik — Boşlukları doldur", "1) Kelebek  2) özür  3) dünyayı  4) çiçek", "k"],
            ["9. Etkinlik — Özellikler", "Kelebek: güzel kanatlı, kibirli, sonradan hatasını anlayan. Lavanta: güzel kokulu, hayalperest, soğuğa dayanıklı, affedici.", "o"],
            ["10. Etkinlik — Noktalama", "1) Kelebek kardeş, ne kadar güzel kanatların var!  2) Neden konmama izin vermiyorsun?  3) Ben seni nasıl taşıyayım?  4) Aradan aylar geçmiş, havalar yavaş yavaş soğumuştu.", "k"],
            ["12. Etkinlik — Örnek soru", "Soru: Kelebek neden özür diledi? Cevap: Hatalı davrandığını anladığı için.", "o"],
            ["13. Etkinlik — Büyük harf düzeltme", "1) Kelebek ve Lavanta çiçek tarlasında yaşıyordu.  2) Lavanta Türkiye'nin en güzel çiçeklerinden biridir.  3) Arda, Neşe ve ben metni dikkatlice dinledik.  4) Türkçe ders kitabındaki çalışmaları tamamladık.", "k"],
            ["14. Etkinlik — Doğru / Yanlış", "1) Doğru  2) Yanlış (lavanta soğuğa dayanıklıdır)  3) Doğru  4) Doğru", "k"]
          ]
        },
        {
          ad: "Ben Kimim?", s: 27, ikon: "🔬",
          anlatim: [
            ["🔬", "Metinde Nobel ödüllü Türk bilim insanı Aziz Sancar kendi hayatını anlatır."],
            ["🏛️", "İlkokul 3. sınıftayken Anıtkabir'i ziyaret eder ve çok çalışıp ülkesine hizmet etmeye söz verir. Tıp fakültesini birincilikle bitirir, Amerika'da çalışır, Türk öğrencilere yardım için bir vakıf kurar."],
            ["🏅", "2015 yılında Nobel Kimya Ödülü'nü kazanır. Ülkesini hiç unutmaz."],
            ["💡", "Ana fikir: Çok çalışan ve hedefi olan insan hayallerine ulaşır; başarılı insan ülkesine minnet duyar."],
            ["📖", "vakıf: Toplum yararına çalışan kuruluş."],
            ["🏷️", "Özel isimler büyük harfle başlar ve aldıkları ekler kesme işaretiyle ayrılır: Ankara'ya, Amerika'ya, Anıtkabir'i."]
          ],
          cevaplar: [
            ["Metin içi soru — Neden söz vermiş olabilir?", "Atatürk'ün ülkemiz için yaptıklarından etkilendiği ve ülkesine faydalı biri olmak istediği için.", "o"],
            ["2. Etkinlik — 1) Anlatılan kişi kim? En önemli kararı?", "Aziz Sancar. En önemli kararı doktor/bilim insanı olup insanlara yardım etmekti.", "k"],
            ["2. Etkinlik — 2) Anıtkabir'deki söz onu nasıl etkiledi?", "Onu çok çalışmaya yöneltti; bu söz sayesinde başarılı oldu.", "o"],
            ["2. Etkinlik — 3) Ülkesi hakkındaki düşünceleri", "Ülkesini çok sever ve ona minnet duyar. Çünkü ülkesi onun eğitimine destek olmuş, Amerika'ya gitmesini sağlamıştır.", "o"],
            ["3. Etkinlik — a) Konu", "Aziz Sancar'ın hayatı ve başarıları.", "k"],
            ["3. Etkinlik — b) Ana fikir", "Çok çalışarak hayallerimize ulaşabiliriz; ülkemizin bize kazandırdıklarını unutmamalıyız.", "o"],
            ["4. Etkinlik — Araştırma (örnek)", "Aziz Sancar 1946'da Mardin'in Savur ilçesinde doğdu. İstanbul Tıp Fakültesini bitirdi. Hücrelerin bozulan DNA'yı nasıl onardığını araştırdı ve 2015'te Nobel Kimya Ödülü'nü aldı.", "o"],
            ["5. Etkinlik — Özel isimler", "Ankara, Anıtkabir, Aziz Sancar, Amerika, Nobel Kimya Ödülü. Örnek: Ankara Türkiye'nin başkentidir.", "o"],
            ["6. Etkinlik — Noktalama", "1) Aziz Sancar, Nobel Ödülü'nü 2015 (iki bin on beş) yılında kazanmıştır.  2) Ülkemin desteği ile eğitim için Amerika'ya gittim.", "k"],
            ["7. Etkinlik — Cümleler (örnek)", "Ankara'ya trenle gittik. Güneş doğudan doğar. Bilim Çocuk dergisini okudum. Lavanta mis gibi kokuyor. Sokak çok kalabalıktı. Ayşe resim çiziyor.", "o"],
            ["8. Etkinlik — b) Balık kılçıkları (örnek)", "Alan: Doktorluk. Kılçıklar: çok kitap okumak, düzenli ders çalışmak, sabırlı olmak, merak etmek, yardımsever olmak.", "o"]
          ]
        },
        {
          ad: "Köyde İlk Sabah (Şiir)", s: 34, ikon: "🐓",
          anlatim: [
            ["🐓", "Şiirde köyde ilk sabahını geçiren bir çocuk, rüyasında kendisine \"Günaydın\" diyen bir serçe görür. Uyanınca penceresinde öten kuşa, ağaca, çiçeğe, horoza selam verir."],
            ["👴", "Dedesinin öğüdü: Selamla birlikte gönlümüze neşe gelir."],
            ["😊", "Şiirin ana duygusu: Sevinç, mutluluk ve selamlaşmanın güzelliği."],
            ["📖", "Kelimeler: serçe (küçük, kahverengi kuş), avuç (elin iç kısmı), şen şakrak (çok neşeli), mis gibi (çok güzel kokan)."],
            ["🎵", "Şiir dizelerden ve kıtalardan oluşur. Okurken vurgu ve tonlamaya dikkat ederiz."]
          ],
          cevaplar: [
            ["1. Etkinlik — a) Eşleştirme", "Çok güzel olan → ç (mis gibi). Elin iç bölümü → b (avuç). Çok neşeli → c (şen şakrak). Serçe (a) için kitapta tanım yok; anlamı: küçük, kahverengi, ötücü bir kuş.", "k"],
            ["2. Etkinlik — 1) Çocuk rüyasında ne gördü?", "Avucuna konup ona \"Günaydın\" diyen bir serçe gördü.", "k"],
            ["2. Etkinlik — 2) Dedesinin öğüdü", "Selamla gönlümüze neşe geleceğini, selam vermenin güzel olduğunu öğütlemiştir.", "k"],
            ["2. Etkinlik — 3) Hâkim duygu", "Sevinç / mutluluk.", "k"],
            ["3. Etkinlik — Kimlere günaydın diyor?", "Serçeye (penceredeki kuşa), çilli horoza, nar çiçeğine, anneannesinin mor menekşesine, güne ve kendisine.", "k"],
            ["4. Etkinlik — Doğru / Yanlış", "1) Doğru  2) Yanlış  3) Doğru", "k"],
            ["5. Etkinlik — Duygular", "huzur, sevinç, sevgi, umut (minnettarlık da seçilebilir). Öfke, üzüntü, korku yoktur.", "k"],
            ["6. Etkinlik — Oluş sırası", "Çocuk rüyasında serçe gördü. Uyanıp neşeyle gerindi. Penceresinde öten kuşa günaydın dedi. Köyün temiz havasında horoza, çiçeklere selam verdi. Kendine de selam verip güzel bir güne başladı.", "o"],
            ["10. Etkinlik — Konu ve ana duygu", "Konu: Köyde geçirilen ilk sabah ve selam vermenin güzelliği. Ana duygu: Sevinç (mutluluk).", "k"]
          ]
        },
        {
          ad: "Nermin Teyze Nerede?", s: 39, ikon: "🚪",
          anlatim: [
            ["🛹", "Üç arkadaş kaykay yarışı yaparken çok susar ve komşuları Nermin teyzeden su istemeye karar verir."],
            ["🚪", "Nermin teyze ses vermez, bahçe kapısı açıktır. Ali içeri girip su almayı önerir; anlatıcı çocuk bunun ayıp olduğunu söyler. Sonunda Nermin teyze elinde sürahiyle gelir."],
            ["💡", "Ana fikir: İzin almadan kimsenin evine ya da odasına girmemeliyiz; mahremiyete saygı göstermeliyiz."],
            ["❗", "Seslenmelerde ünlem, soru cümlelerinde soru işareti, konuşmayı aktarırken iki nokta (:) kullanırız."]
          ],
          cevaplar: [
            ["Metin içi 1 — Çocuklar nasıl çözüm bulmuş olabilir?", "Komşularından su istemeye karar vermiş olabilirler.", "o"],
            ["Metin içi 2 — Teklif sonrası ne yaptılar?", "İçeri girmeyip kapıda Nermin teyzeyi beklediler.", "k"],
            ["2. Etkinlik — Konu", "İzin almadan başkasının evine girmemek; komşuluk ve mahremiyete saygı.", "k"],
            ["3. Etkinlik — Noktalama", "1) Nermin teyzeee! Nermin teyzeee! diye bağırdık.  2) Kim mi kazandı?  3) Kemal: \"Bahçe kapısı açık.\" dedi.  4) Ali, Kemal ve ben çok iyi arkadaşız.  5) Ali: \"Kapı açık, içeri girip hemen su alıp çıkalım.\"", "k"],
            ["4. Etkinlik — Sıralama", "1. Kaykay yarışı yapıyorduk.  2. Çok susadık.  3. Su istemek için Nermin teyzenin kapısına gittik.  4. Nermin teyzenin kapısı açıktı.  5. İçeri girmeyip onu bekledik.  6. Nermin teyze gelip bize su verdi.", "k"],
            ["6. Etkinlik — Neden Nermin teyze?", "Çünkü bahçe katında oturuyordu, çok yakındı ve onlara hep su veriyordu. Kendi evleri 6. kattaydı.", "k"],
            ["7. Etkinlik — Olayın devamı (örnek)", "Efe hemen \"Tabii ki!\" dedi. İkisi Gülsüm teyzenin yanına gidip kibarca yardım isteyip istemediğini sordular. Arabayı birlikte evine kadar çektiler. Gülsüm teyze onlara teşekkür etti, çocuklar da iyilik yapmanın mutluluğunu yaşadı.", "o"]
          ]
        },
        {
          ad: "Çam Ağacı", s: 45, ikon: "🌲",
          anlatim: [
            ["🌲", "Genç çam ağacı, kuşlar dallarına konmadığı için onu sevmediklerini düşünüp üzülür. Bilge çınar ona boşuna üzüldüğünü söyler."],
            ["🍂", "Sonbaharda çınarın yaprakları dökülür. Kuşlar kardan ve soğuktan korunmak için yaprakları dökülmeyen çam ağacına sığınır. Çam ağacı çok sevinir."],
            ["💡", "Ana fikir: Her canlının kendine özgü değeri vardır; sabırlı olmalı, hemen umutsuzluğa kapılmamalıyız."],
            ["📖", "gelip çatmak: Beklenen bir zamanın gelmesi. hâkim olamamak: Tutamamak, engelleyememek."],
            ["🗣️", "Konuşma üslubu: Konuşurken seçtiğimiz sözcükler ve ses tonu. Kibar bir üslup iletişimi güzelleştirir."]
          ],
          cevaplar: [
            ["Metin içi 1 — Çam ağacının cevabı", "Yapraklarının iğne gibi sivri olduğunu, bu yüzden kuşların dallarına konmadığını söyledi.", "k"],
            ["Metin içi 2 — Çınar neler yaşamış olabilir?", "Yaşlı olduğu için birçok mevsim görmüş; kışın kuşların çam ağaçlarına sığındığını biliyordu.", "o"],
            ["1. Etkinlik — Konu", "Kuşların kendisini sevmediğini düşünen çam ağacının kışın kuşlara yuva olması.", "k"],
            ["3. Etkinlik — Sıralama", "1. Kuşlar çam ağacına konmuyordu.  2. Çınarın yaprakları sonbaharda döküldü.  3. Kuşlar kışın çam ağacının dallarına sığındı.  4. Çam ağacı çok sevindi.", "k"],
            ["4. Etkinlik — Sözcük grupları", "gelip çatmak: (zamanın) gelmek, yaklaşmak. hâkim olamamak: tutamamak, engelleyememek.", "k"],
            ["6. Etkinlik — Noktalama", "– Sevmiyorlar işte, diye haykırmış. / Yaşlı çınar: – Söyle bakalım, niye böyle düşünüyorsun, diye sormuş.", "k"],
            ["7. Etkinlik — 1) Neden üzgün?", "Kuşların dallarına konmadığını, onu sevmediklerini düşündüğü için.", "k"],
            ["7. Etkinlik — 2) Çınarın sözleri", "Onu biraz rahatlattı ve sabırla beklemeye karar verdirdi.", "o"],
            ["7. Etkinlik — 4) Kuşların davranışı", "Kuşlar onu sevmedikleri için değil, sivri yaprakları yüzünden konmuyordu. Kışın korunmak için çama gelmeleri doğaldır.", "o"]
          ]
        },
        {
          ad: "Performans Görevi ve Tema Sonu", s: 53, ikon: "🏁",
          anlatim: [
            ["🖼️", "Performans görevi: Sorumluluk, saygı, vatan sevgisi, yardımseverlik veya dostluk değerlerinden birini seç; pano hazırla ve şiir, resim ya da afişle sun."],
            ["💡", "Değerler: Sorumluluk (işini zamanında yapmak), saygı (sözü kesmemek), vatan sevgisi (ülkemizi korumak), yardımseverlik (zordakine destek), dostluk (iyi-kötü günde yanında olmak)."]
          ],
          cevaplar: [
            ["Tema Sonu a) 1) Hangi sözcüğü söyledi?", "Günaydın.", "k"],
            ["Tema Sonu a) 2) Nasıl yardım etti?", "Hasan amcanın eşyalarını alıp kapısına kadar taşıdı.", "k"],
            ["Tema Sonu a) 3) Nezaket sözcükleri", "Günaydın, yardım etmemi ister misiniz, teşekkür ederim.", "k"],
            ["Tema Sonu a) 4) Ana fikir", "Nazik ve yardımsever olmak hem bizi hem çevremizi mutlu eder.", "o"],
            ["Tema Sonu b) Koyu sözcükler", "hemen: hiç beklemeden, derhal. sessiz: ses çıkarmayan, gürültüsüz. mis gibi: çok güzel kokan.", "o"],
            ["Tema Sonu c) D / Y", "1) D  2) Y (soru cümlesine soru işareti konur)  3) D  4) Y (cümle sonuna nokta konur)  5) D", "k"]
          ]
        }
      ]
    }
  ]
};
window.REHBER.turkce.temalar.push({
  ad: "2. Tema: Atatürk ve Kahramanlarımız", ikon: "🇹🇷",
  bolumler: [
    {
      ad: "Temaya Hazırlanalım", s: 58, ikon: "🧩",
      anlatim: [
        ["🇹🇷", "Bu temada Atatürk'ü ve Millî Mücadele kahramanlarımızı tanırız: vatan sevgisi, fedakârlık, cesaret."],
        ["👨‍👩‍👧", "Atatürk 1881'de Selanik'te doğdu. Annesi Zübeyde Hanım, babası Ali Rıza Bey, kız kardeşi Makbule'dir. \"Kemal\" adını matematik öğretmeni verdi."],
        ["📖", "fedakârlık: Özverili olma. Millî Mücadele: Bağımsızlık için yapılan savaş. vatansever: Yurdunu çok seven kişi. millî irade: Milletin, hiçbir gücün etkileyemeyeceği ortak kararı."]
      ],
      cevaplar: [
        ["a) Eşleştirme", "fedakârlık → Özverili olma durumu. Millî Mücadele → Bağımsızlık için yapılan savaş. vatansever → Yurdunu, milletini büyük tutkuyla seven. millî irade → Milletçe kullanılan ve hiçbir gücün etkileyemeyeceği kuvvet. (\"Bir yerde bulunan kimselerin bütünü\" boşta kalır; o \"halk\" demektir.)", "k"],
        ["b) Bulmaca", "1) MATEMATİK  2) MAKBULE  3) ZÜBEYDE  4) SELANİK  5) ALİ RIZA", "k"]
      ]
    },
    {
      ad: "Kahverengi Ayakkabıları Siyaha Boyayan Ülkü (Dinleme Metni)", s: 59, ikon: "👞", dinleme: true,
      anlatim: [
        ["🎧", "Dinleme metnidir; karekoddan dinlenir."],
        ["👞", "Atatürk'ün manevi kızı küçük Ülkü, kapının önündeki kahverengi ayakkabıları görür ve Atatürk'e yardım etmek için onları siyaha boyar."],
        ["😊", "Atatürk kızmaz, gülümser. Ülkü'nün boyamayı sevdiğini anlayıp ona boya kalemleri ve boyama kitapları hediye eder, resim yapmasını ister."],
        ["💡", "Ana fikir: Atatürk çocukları çok severdi; hatalara sabır ve anlayışla yaklaşmalı, çocukların yeteneklerini doğru yöne çevirmeliyiz."],
        ["🤲", "Sözsüz iletişim: Jest (el hareketi) ve mimiklerle (yüz ifadesi) konuşmadan anlatmak."]
      ],
      cevaplar: [
        ["2. Etkinlik — 1) Ayakkabılar neden kapının önündeydi?", "Boyanıp temizlenmek için kapının önüne bırakılmıştı.", "o"],
        ["2. Etkinlik — 2) Atatürk ne yaptı?", "Kızmadı, gülümsedi; Ülkü'ye boya kalemleri ve boyama kitapları verdi.", "k"],
        ["2. Etkinlik — 3) Atatürk'ün öğüdü", "Boyalarını ayakkabılar yerine kâğıtlara, resim yapmaya kullanmasını söyledi.", "o"],
        ["2. Etkinlik — 4) Ülkü sonra ne yaptı?", "Boyama kitaplarını boyayıp resimler yaptı.", "o"],
        ["3. Etkinlik — Eşleştirme", "1 → ç  2 → d  3 → b  4 → e  5 → c  (a boşta kalır)", "k"],
        ["5. Etkinlik — Atatürk'ün hayatı D/Y", "1881'de doğdu: D. Babası Ali Rıza Bey: D. Kemal adını matematik öğretmeni verdi: D. En büyük hayali doktor olmak: Y (asker olmak istiyordu). 1920'de cumhuriyeti ilan etti: Y (29 Ekim 1923).", "k"],
        ["6. Etkinlik — Konu ve ana fikir", "Konu: Ülkü'nün Atatürk'ün ayakkabılarını boyaması ve Atatürk'ün ona anlayışla yaklaşması. Ana fikir: Atatürk çocukları çok sever, onlara sabırla davranırdı.", "o"],
        ["7. Etkinlik — Metinde geçen olaylar", "Ülkü ayakkabıları siyaha boyamaya karar verir ve boyar. / Atatürk, Ülkü'nün resim sevgisini fark edip ona boya kalemleri ve boyama kitapları hediye eder.", "o"]
      ]
    },
    {
      ad: "Atatürk Çok Kitap Okurmuş", s: 65, ikon: "📚",
      anlatim: [
        ["📚", "Atatürk kitap okumayı çok severdi; eline geçen paranın yarısıyla kitap alırdı. Matematik, şiir, edebiyat, tarih ve bilim kitapları okurdu, Fransızca öğrendi."],
        ["📝", "Okurken not alırdı, gittiği her yere kitaplarını götürürdü. Kitaplığında 4289 kitap vardı. Askerlik, vatandaşlık ve geometri kitapları yazdı."],
        ["💡", "Ana fikir: Kitap okumak insanın bilgisini ve hayal gücünü geliştirir; büyük işler başarmasını sağlar."],
        ["👯", "Eş anlamlı sözcükler: önemli = mühim, düş = hayal / rüya, ilgi = merak, düşlemek = hayal etmek."]
      ],
      cevaplar: [
        ["Metin içi — Fransızcaya merak sarınca ne yaptı?", "Fransızca öğrenmeye ve Fransızca kitaplar okumaya başladı.", "k"],
        ["2. Etkinlik — Konu", "Atatürk'ün kitap okuma sevgisi.", "k"],
        ["3. Etkinlik — Ana fikir", "Çok kitap okuyan insan bilgili olur ve hayallerini gerçekleştirebilir.", "o"],
        ["4. Etkinlik — Kitap türleri", "Matematik kitapları → sayılarla işlem, problem çözme. Dil kitapları → yeni bir dil öğrenme. Tarih kitapları → geçmişteki olaylar. Şiir kitapları → güzel, uyumlu sözlerle duygusal dünya. (Sanat kitapları boşta kalır.)", "k"],
        ["5. Etkinlik — 1) Matematik ve şiir farkı", "Matematik kitapları sayılar, işlemler ve problemlerle düşünmeyi öğretir. Şiir kitapları duyguları güzel ve ahenkli sözlerle anlatır.", "o"],
        ["5. Etkinlik — 2) Atatürk hangi konularda kitap yazdı?", "Askerlik, vatandaşlık ve geometri.", "k"],
        ["6. Etkinlik — Eş anlamlılar (bulmaca)", "1) düş = rüya (hayal)  2) önemli = MÜHİM  3) ilgi = merak  4) dil = lisan  5) düşlemek = hayal etmek. Bulmacadaki harflere göre kontrol et.", "o"]
      ]
    },
    {
      ad: "Anadolu'nun Kadınları (Şiir)", s: 71, ikon: "👩",
      anlatim: [
        ["👩", "Şiir, Millî Mücadele'de vatan için savaşan kahraman kadınlarımızı anlatır: Şerife Bacı, Gördesli Makbule, Nene Hatun, Nezahat Onbaşı, Fatma Seher (Kara Fatma) ve Halide Edip."],
        ["❄️", "Şerife Bacı kışta cephaneyi cepheye taşıdı. Nene Hatun Erzurum'da düşmana karşı savaştı. Nezahat Onbaşı küçük yaşta askerlerle savaştı. Halide Edip yazıları ve konuşmalarıyla halkı birleştirdi."],
        ["🎵", "Tema: Kahraman kadınlarımız ve vatan sevgisi. Ana duygu: Gurur / hayranlık (vatan sevgisi)."],
        ["✒️", "Kesme işareti: Özel adlara gelen ekler kesme ile ayrılır: Erzurum'da, Halide Edip'in."]
      ],
      cevaplar: [
        ["2. Etkinlik — Tema ve ana duygu", "Tema: Millî Mücadele'nin kahraman kadınları. Ana duygu: Gurur, hayranlık ve vatan sevgisi.", "k"],
        ["4. Etkinlik — 1) Şerife Bacı neden yorulmadan gider?", "Vatanı için; vatan sevgisi onu yorulmaktan alıkoyar.", "k"],
        ["4. Etkinlik — 2) Yazılarıyla halkı bilinçlendiren", "Halide Edip (Adıvar).", "k"],
        ["4. Etkinlik — 3) Fatma Seher'in özellikleri", "Güçlü ve cesurdur, her zorlukta dimdik durur.", "k"],
        ["4. Etkinlik — 4) Ortak özellikleri", "Cesur, fedakâr, vatansever ve yiğittirler.", "k"],
        ["4. Etkinlik — 5) Başlık önerisi", "Kahraman Kadınlarımız / Vatanın Cesur Kızları", "o"],
        ["6. Etkinlik — Eş anlamlılar", "yurt = vatan, yiğit = kahraman (cesur), seda = ses, kuvvetli = güçlü, yürek = kalp (gönül), ufak = küçük", "k"],
        ["8. Etkinlik — Kesme işareti", "1) Nene Hatun'un sesi Erzurum'da yankılanır.  2) Anadolu'nun yüce kadınları…  3) Halide Edip'in sözcükleri…  4) Gördesli Makbule'nin yiğitliği Manisa'dan tüm Anadolu'ya yayılmıştır.  5) Nezahat Onbaşı'nın cesareti…", "k"]
      ]
    },
    {
      ad: "Dün Gibi", s: 79, ikon: "🎉",
      anlatim: [
        ["🎉", "Yazar çocukluğundaki ilk Cumhuriyet Bayramı'nı anlatır: halk oyunu için dikilen yeni kıyafetler, bir ay süren hazırlık, süslenen okul, bayraklarla yapılan yürüyüş ve törende alınan alkışlar."],
        ["💡", "Ana fikir: Cumhuriyet dünümüz, bugünümüz ve yarınımızdır; bayramlar birlik ve coşkuyla kutlanır."],
        ["📖", "devasa: çok büyük. flama: küçük, köşeli bayrak. iple çekmek: sabırsızlıkla beklemek. kıvanç: övünç, sevinç."],
        ["🔤", "Kısaltmalara gelen ekler okunuşa göre yazılır: PTT'ye (te), MEB'in (meb), THY'den (ye), kg'dan (kilogram)."]
      ],
      cevaplar: [
        ["Metin içi 1 — Hazırlıkta neler yaşamış olabilirler?", "Bir ay boyunca önlükleriyle prova yapmış, adımları ezberlemiş, heyecanlanmış olabilirler.", "o"],
        ["1. Etkinlik — Çocuğun duyguları", "Heyecan, sevinç, coşku, gurur.", "k"],
        ["3. Etkinlik — Konu ve ana fikir", "Konu: Yazarın çocukluğunda kutladığı Cumhuriyet Bayramı. Ana fikir: Cumhuriyet geçmişimiz, bugünümüz ve geleceğimizdir; onu coşkuyla kutlarız.", "o"],
        ["4. Etkinlik — Coşkunun nedenleri", "Cumhuriyet'in bize özgürlük ve bağımsızlık kazandırması, herkesin birlikte kutlaması, yeni kıyafetler ve gösteriler.", "o"],
        ["5. Etkinlik — Gruplama", "Hazırlık: saçını taratma, kıyafet giyme, çiçek toplama. Tören: marş söyleme, yürüyüş yapma, alkış alma.", "o"],
        ["6. Etkinlik — Örnek zıt ve eş anlamlılar", "Zıt: yeni ↔ eski, beyaz ↔ siyah, büyük ↔ küçük. Eş: kıvanç = övünç, devasa = çok büyük, heyecanlı = coşkulu.", "o"],
        ["8. Etkinlik — Millî Bayramlar zıt anlamlılar", "büyük ↔ küçük, genç ↔ yaşlı, ilk ↔ son, neşeli ↔ üzgün, sevinç ↔ üzüntü, güzel ↔ çirkin. (Altı çizili olanları kitapta kontrol et.)", "o"],
        ["9. Etkinlik — Kısaltma ekleri", "1) PTT'ye  2) kg'dan  3) MEB'in  4) THY'den  5) g'lık", "k"]
      ]
    },
    {
      ad: "Atatürk'ün Çocuk Sevgisi", s: 87, ikon: "❤️",
      anlatim: [
        ["❤️", "Atatürk sevdiği herkese \"çocuk\" diye seslenirdi. Kendi çocuğu yoktu ama Türk çocuklarını öz yavruları gibi severdi."],
        ["💃", "Bir çocuk balosunda küçük bir oğlan onu öpmek ister. Atatürk \"Öyleyse gel öp!\" der, tüm çocuklar ona sarılır. Atatürk sevinçten ağlar ve \"İşte benim kuşaklarım.\" der."],
        ["🌹", "Bursa'da çocuklara geleceğin gülü, yıldızı ve ikbal ışığı olduklarını, ülkeyi aydınlatacak olanların onlar olduğunu söyler."],
        ["📖", "balo: danslı eğlence. ikbal: talih açıklığı, yükselme. engin: çok geniş. övünç: gurur. kuşak: aynı yıllarda doğmuş kişiler topluluğu, nesil."],
        ["✉️", "Mektup bölümleri: hitap, giriş, gelişme, sonuç, ad-soyad ve imza (sağ alta). Tarih sağ üste yazılır."]
      ],
      cevaplar: [
        ["Metin içi 1 — Atatürk çocuğa ne demiş olabilir?", "\"Öyleyse gel öp!\"", "k"],
        ["Metin içi 2 — \"İşte benim kuşaklarım\"", "Ülkeyi geleceğe taşıyacak, onun emanetini koruyacak nesil bu çocuklardır demek istemiştir.", "o"],
        ["1. Etkinlik — Konu", "Atatürk'ün çocuklara olan sevgisi.", "k"],
        ["2. Etkinlik — Sözcük anlamları", "balo: danslı, özel giysili gece eğlencesi. ikbal: baht açıklığı, yüksek bir duruma erişme. engin: ucu bucağı görünmeyecek kadar geniş. övünç: gurur, iftihar. kuşak: aynı yıllarda doğmuş kişiler topluluğu, nesil.", "k"],
        ["3. Etkinlik — 1) Neden değer veriyordu?", "Çocukların ülkenin geleceği olduğunu düşündüğü için.", "k"],
        ["3. Etkinlik — 2) Kimlere \"çocuk\" derdi?", "Yaşı ne olursa olsun sevdiği herkese.", "k"],
        ["3. Etkinlik — 3) Nerelerde buluşuyor?", "Çocuk balosunda ve Bursa'da (kendisini karşılayan çocuklarla).", "k"],
        ["3. Etkinlik — 4) Çocuk ne dedi?", "\"Atatürk'üm, seni öpmek istiyorum.\"", "k"],
        ["3. Etkinlik — 6) Çocuklardan ne bekliyor?", "Değerli olduklarını bilerek çok çalışmalarını ve ülkeyi aydınlatmalarını.", "o"],
        ["4. Etkinlik — Ana fikir", "Atatürk çocukları çok severdi ve ülkenin geleceğini onlara emanet etmişti.", "o"],
        ["6. Etkinlik — a) Boşluklar", "1) büyük  2) uluslararası  3) okunuşu  4) son  (\"ilk\" boşta kalır)", "k"],
        ["6. Etkinlik — b) Ekler", "1) Mah.'de  2) TL'ye  3) m'si  4) TDK'nin  5) kg'dan", "k"],
        ["6. Etkinlik — c) D / Y", "TDK'ya: Y (TDK'ye)  kr.'ye: Y (kuruş → kr.'a)  İng'nin: Y (İng.'nin, nokta gerekir)  TL'de: D  kg.'nin: Y (ölçü kısaltmasına nokta konmaz: kg'ın)  TRT'den: D", "k"]
      ]
    },
    {
      ad: "Performans Görevi ve Tema Sonu", s: 95, ikon: "🏁",
      anlatim: [
        ["🎖️", "Ömer Halisdemir, 15 Temmuz gecesi vatanı korurken şehit olan kahraman bir askerdir. Performans görevinde ona duygularını anlatan bir mektup yazarsın."],
        ["🕊️", "19 Mayıs 1919'da Mustafa Kemal Samsun'a çıktı; 29 Ekim 1923'te Cumhuriyet ilan edildi. \"Egemenlik kayıtsız şartsız milletindir.\""]
      ],
      cevaplar: [
        ["Tema Sonu 1) Samsun'a gitme sebebi", "Halkı bağımsızlık için birleşmeye çağırmak.", "k"],
        ["Tema Sonu 2) Kimler mücadele etti?", "Mustafa Kemal, arkadaşları, askerler ve halk.", "k"],
        ["Tema Sonu 3) Adı geçen kahramanlar", "Mustafa Kemal, Şerife Bacı, Kara Fatma, Sütçü İmam.", "k"],
        ["Tema Sonu 4) \"Egemenlik kayıtsız şartsız milletindir\"", "Ülkeyi yönetme hakkının hiçbir koşul olmadan halka ait olduğunu, halkın yönetimde söz sahibi olduğunu.", "k"],
        ["Tema Sonu b) Sözcük anlamları", "birlik: bir arada olma durumu. cesaret: zor ya da tehlikeli işe girişirken kişinin kendinde bulduğu güven.", "k"],
        ["Tema Sonu c) Zıt anlamlılar", "cesur ↔ korkak, bağımsız ↔ bağımlı, özgür ↔ tutsak, zafer ↔ yenilgi, güçlü ↔ güçsüz, savaş ↔ barış, güzel ↔ çirkin, zor ↔ kolay", "k"]
      ]
    }
  ]
});
window.REHBER.turkce.temalar.push({
  ad: "3. Tema: Doğayı Tanıyoruz", ikon: "🌳",
  bolumler: [
    {
      ad: "Temaya Hazırlanalım", s: 100, ikon: "🎒",
      anlatim: [
        ["🌍", "Bu temada canlıları, doğal kaynakları, doğa olaylarını ve doğayı korumayı öğreniriz."],
        ["🎒", "Deprem çantasında bulunmalı: su, bozulmayan yiyecek, el feneri ve yedek pil, düdük, ilk yardım malzemesi, battaniye, yedek kıyafet, kimlik fotokopisi, pilli radyo."]
      ],
      cevaplar: [
        ["a) Çağrıştırdığı sözcükler (örnek)", "Canlılar: bitki, hayvan, insan. Doğal kaynaklar: su, toprak, orman. Çevre: temizlik, ağaç. Doğal afetler: deprem, sel. Tasarruf: musluğu kapatmak, ışığı söndürmek.", "o"],
        ["b) Deprem çantası", "Su, konserve/kuru yiyecek, el feneri, düdük, ilk yardım çantası, battaniye, yedek kıyafet, pil. (Oyuncak, televizyon gibi gereksiz eşyalar konmaz.)", "o"]
      ]
    },
    {
      ad: "Bir Orman (Dinleme Metni)", s: 101, ikon: "🌲", dinleme: true,
      anlatim: [
        ["🎧", "Dinleme metnidir; karekoddan dinlenir."],
        ["🌲", "Metin ormanda neler görülüp duyulabileceğini anlatır: ağaçlar, kuşlar, toprakta canlıların bıraktığı izler, toprak altında tünel açan solucanlar ve böcekler."],
        ["💡", "Ana fikir: Orman pek çok canlının ortak evidir; onu tanımalı ve korumalıyız."],
        ["⏰", "Zaman ifadeleri: Geçmiş zaman (yürüdüm), şimdiki zaman (yürüyorum), gelecek zaman (yürüyeceğim)."],
        ["🙂", "Sözsüz iletişim: Jest ve mimiklerle duyguyu göstermek (mutlu yüz, kızgın yüz, şaşkın yüz)."]
      ],
      cevaplar: [
        ["1. Etkinlik — 1) Ormanda başka neler görülür?", "Mantar, sincap, geyik, kuş yuvası, dere, yosun, kozalak, çiçekler.", "o"],
        ["1. Etkinlik — 3) Ağaçlar nasıl oluşmuş olabilir?", "Toprağa düşen tohumların su ve güneşle filizlenip yıllar içinde büyümesiyle.", "o"],
        ["2. Etkinlik — Canlı / cansız", "Canlı: salyangoz, mantar, karınca. Cansız: dürbün, toprak, örümcek ağı.", "k"],
        ["3. Etkinlik — Konu ve ana fikir", "Konu: Ormanda görülebilecek canlılar ve güzellikler. Ana fikir: Orman birçok canlının evidir, onu korumalıyız.", "o"],
        ["4. Etkinlik — b) Ormanlar metni", "Görsellere göre sırayla: ağaç, sincap, geyik (tilki), ayı, çiçek, kelebek, arı, sigara (kibrit/ateş), pet şişe, kâğıt, defter (masa). Kitaptaki resimlere bakarak kontrol et.", "o"],
        ["6. Etkinlik — b) Zamanlar", "1) Şimdiki zaman  2) Geçmiş zaman  3) Gelecek zaman  4) Gelecek zaman  5) Geçmiş zaman  6) Şimdiki zaman", "k"]
      ]
    },
    {
      ad: "Karıncalar", s: 107, ikon: "🐜",
      anlatim: [
        ["🐜", "Dünyada 10 bin farklı karınca türü vardır; sayısı en fazla olan canlıdır. Topluluk hâlinde yaşar, birbirlerine yardım eder ve iş bölümü yaparlar."],
        ["💪", "Kendi ağırlıklarının 10 katını kaldırabilirler. İşçi, asker ve üreme karıncası olarak ayrılırlar; koloninin başı kraliçe karıncadır."],
        ["👃", "Kokuları takip ettikleri için ışığa ihtiyaç duymazlar, gece gündüz çalışabilirler. Vücutları dirsekli antenler, düğüm gibi bel, altı bacak ve iri kafadan oluşur."],
        ["💡", "Ana fikir: Birlikte, iş bölümü yaparak ve çalışkanlıkla büyük işler başarılır. (Birlikten kuvvet doğar.)"],
        ["🎨", "Betimleme: Bir varlığı görünüşü, sesi, kokusu ile okuyanın gözünde canlanacak şekilde anlatmak."],
        ["📖", "koloni: Birlikte yaşayan aynı türden canlıların topluluğu."]
      ],
      cevaplar: [
        ["Metne Hazırlanalım — Birlikten kuvvet doğar", "İnsanlar bir araya gelip birlikte çalışırsa tek başına yapamayacakları işleri başarır.", "k"],
        ["1. Etkinlik — Betimleme (örnek)", "Karınca küçük, siyah ve parlak bir böcektir. İri kafasında dirsek gibi kıvrık iki anteni vardır. Altı ince bacağıyla durmadan koşturur, kendinden büyük yükleri taşır.", "o"],
        ["3. Etkinlik — Konu ve ana fikir", "Konu: Karıncaların yaşamı ve özellikleri. Ana fikir: Birlik içinde, iş bölümü yaparak çalışmak başarı getirir.", "o"],
        ["4. Etkinlik — Şema", "Yalnız karınca: 2 (ağırlığının 10 katını kaldırır). Yalnız insan: 1 (farklı meslekler), 5 (teknoloji). Ortak: 3 (iş bölümü), 4 (tehlikeden korunma), 6 (dayanışma).", "k"],
        ["5. Etkinlik — Toplu yaşamanın yararları", "Tehlikelere karşı korunurlar, işler daha hızlı ve düzenli yapılır, kraliçeyi ve yavruları birlikte korurlar.", "o"],
        ["6. Etkinlik — Eş anlamlılar", "1) hedef = amaç  2) her an = her zaman  3) görev = vazife  4) adet = tane (Koyu sözcükleri kitapta kontrol et.)", "o"]
      ]
    },
    {
      ad: "Orman (Şiir — Âşık Veysel)", s: 115, ikon: "🌳",
      anlatim: [
        ["🎶", "Şiir Âşık Veysel Şatıroğlu'na aittir. Ormanın yurdun temeli, memleketin süsü olduğunu anlatır."],
        ["🌊", "Orman çiçekleriyle dağları süsler, toprağı tutup suyu emerek selleri önler. Ağaçtan gemi, uçak, kalem ve kâğıt yapılır."],
        ["🎵", "Tema: Ormanın önemi ve faydaları. Ana duygu: Doğa sevgisi, hayranlık."],
        ["📏", "Kıta: Şiirde dört dizeden oluşan her bölüm. Slogan: Kısa, akılda kalan çarpıcı söz."],
        ["☯️", "Âşık Veysel şiirlerinde zıt anlamlı sözcükleri çok kullanır: gündüz-gece, ağlamak-gülmek, dost-düşman."]
      ],
      cevaplar: [
        ["2. Etkinlik — 1) Ormanla ilgili bilgiler", "Orman yurdun temelidir, memleketin süsüdür, dallarında kuşlar öter, çiçekler açar, selleri önler; ağaçtan gemi, uçak, kalem ve kâğıt yapılır.", "k"],
        ["2. Etkinlik — 2) Başka neler elde edilir?", "Oksijen, mobilya, odun, kereste, meyve, ilaç yapımında kullanılan bitkiler.", "o"],
        ["2. Etkinlik — 3) Selleri nasıl önler?", "Ağaçların kökleri toprağı tutar ve yağmur suyunu emer; böylece su hızla akıp taşmaz.", "k"],
        ["3. Etkinlik — Slogan (örnek)", "Ormanı koru, geleceğin yeşil olsun!", "o"],
        ["4. Etkinlik — Tema ve ana duygu", "Tema: Ormanın önemi. Ana duygu: Doğa (orman) sevgisi.", "k"],
        ["5. Etkinlik — Zıt anlamlılar", "ilk ↔ son, ufak ↔ iri (büyük). Örnek: Yarışa ilk başlayan son bitirdi.", "k"],
        ["6. Etkinlik — Ormanları neden korumalıyız?", "Çünkü ormanlar bize temiz hava verir, selleri önler ve birçok canlıya yuva olur.", "o"]
      ]
    },
    {
      ad: "Fırtına", s: 121, ikon: "🌩️",
      anlatim: [
        ["🌧️", "Haftalarca yağan yağmur yüzünden nehir taşmak üzeredir. Aslan hayvanları toplar; bazıları ormanı terk etmek ister ama ayı yuvalarını bırakamayacaklarını söyler."],
        ["🦫", "Kunduz nehre set yapmayı önerir. Ağaçların lideri meşe, dallarını vermeyi kabul eder. Hayvanlar el birliğiyle seti kurar."],
        ["⛈️", "Gece büyük fırtına kopar; set hasar görse de suyun taşmasını engeller. Hayvanlar kutlama yapar, kunduza teşekkür eder."],
        ["💡", "Ana fikir: Zor durumlarda birlik olup akıllıca çözümler üretirsek sorunların üstesinden geliriz."],
        ["📖", "refah: bolluk, rahatlık. hasar: zarar, kırılma. set: suyun önüne yapılan engel."],
        ["⚠️", "Doğal afetler: fırtına, çığ, yanardağ patlaması, sel, heyelan, yangın, deprem."]
      ],
      cevaplar: [
        ["Metne Hazırlanalım — Bulmaca", "1) FIRTINA  2) ÇIĞ  3) YANARDAĞ  4) SEL  5) HEYELAN  6) YANGIN", "k"],
        ["Metin içi 1 — Orman daha önce kimlere ev sahipliği yapmış olabilir?", "Bu hayvanların atalarına, eski kuşaklara.", "o"],
        ["Metin içi 2 — Ormanı terk etselerdi?", "Yeni yuva bulmakta zorlanır, yiyecek ve su bulamaz, başka tehlikelerle karşılaşırlardı.", "o"],
        ["3. Etkinlik — Konu ve ana fikir", "Konu: Hayvanların nehrin taşmasını el birliğiyle yaptıkları setle önlemesi. Ana fikir: Birlik olursak zorlukları aşarız.", "o"],
        ["4. Etkinlik — b) Olay sırası", "Durmadan yağmur yağdı → Aslan hayvanları mağarada topladı → Ayı ormanı bırakmamayı söyledi → Kunduz set fikrini verdi → Meşe ağaçları dallarını verdi → Hayvanlar set yaptı → Fırtına koptu → Set suyun taşmasını önledi → Kutlama yaptılar.", "o"],
        ["4. Etkinlik — a) Karakter örneği", "Kunduz: zeki, çalışkan, çözüm üreten, yönetmeyi bilen.", "o"],
        ["5. Etkinlik — Noktalama", "Herkes panik hâlinde konuşuyor, ormanı terk etmekten bahsediyormuş. O sırada ayı sert bir sesle gürlemiş: \"Bu orman yıllardır bize ev sahipliği yaptı; ağaçlarında, mağaralarında yuva yaptık; nehrinde yüzdük. Şimdi onu bırakıp gidemeyiz.\" demiş.", "k"],
        ["6. Etkinlik — Eş anlamlı çiftler", "yardım = destek → işlerin verimli olması için katkı. hızlı = çabuk → kısa zamanda gerçekleşme. sevinç = mutluluk → mutlu olma durumu. yuva = barınak → hayvanların hazırladığı yer. (\"Görünmez\" tanımı boşta kalır.)", "k"],
        ["7. Etkinlik — Parantez", "1) hayvanı  2) toplantı  3) kesmek  4) set  5) durduğunda  6) sormuş  7) sarılmış", "k"],
        ["8. Etkinlik — Cümleler (örnek)", "Ormanda birçok hayvan yaşar. Yağmur artınca nehir taştı. Hayvanlar birlikte çalıştı. Set, nehrin kenarındaki evleri korudu.", "o"]
      ]
    },
    {
      ad: "Küçük Su Damlası", s: 129, ikon: "💧",
      anlatim: [
        ["☀️", "Denizdeki su damlası hava ısınınca hafifler ve buharlaşarak gökyüzüne yükselir; bulutun parçası olur."],
        ["☁️", "Rüzgâr bulutu taşır; bulut yeni damlalarla ağırlaşır, hava soğuyunca damlalar yağmur olarak yere düşer."],
        ["🌱", "Damla toprağın derinliğine iner, bir tohumla buluşur. Tohum filizlenip çiçek olur."],
        ["🔄", "Su döngüsü: Buharlaşma → bulut oluşumu → yağış → toprağa ve denizlere dönüş. Güneş suyu ısıtarak döngüyü başlatır."],
        ["💡", "Konu: Bir su damlasının yolculuğu (su döngüsü). Ana fikir: Su canlılar için hayatidir; tasarruflu kullanmalıyız."],
        ["📋", "Yönerge: Bir işin adım adım nasıl yapılacağını anlatan talimatlar."]
      ],
      cevaplar: [
        ["Metne Hazırlanalım — a) Su neden önemli?", "Bütün canlılar yaşamak için suya ihtiyaç duyar.", "k"],
        ["Metne Hazırlanalım — b) Güneşin görevi", "Suyu ısıtarak buharlaştırır, su döngüsünü başlatır.", "k"],
        ["Metin içi 1 — Isınınca ne değişti?", "Hafifledi, buharlaşıp gökyüzüne yükselmeye başladı.", "k"],
        ["Metin içi 2 — Bulutlar nasıl oluşur?", "Buharlaşan su yükseklerde soğuyup küçük damlacıklar hâlinde bir araya gelir.", "k"],
        ["1. Etkinlik — Konu", "Bir su damlasının denizden gökyüzüne, oradan toprağa yolculuğu.", "k"],
        ["2. Etkinlik — 1) Yükselirken ne hissetti?", "Heyecan ve sevinç. \"Ooo, bu inanılmaz!\" cümlesinden anlıyoruz.", "k"],
        ["2. Etkinlik — 2) Bulunduğu yerler", "Deniz → gökyüzü (bulut) → toprağın üstü → toprağın derinlikleri (tohumun yanı).", "k"],
        ["2. Etkinlik — 3) Neden gökyüzüne çıktı?", "Hava ısınınca buharlaştığı için.", "k"],
        ["2. Etkinlik — 4) Tohuma yardım etmeseydi?", "Tohum filizlenemez, çiçek olamazdı.", "k"],
        ["3. Etkinlik — Duygular", "sevinç, merak, heyecan", "k"],
        ["5. Etkinlik — c) Deney örneği", "Amaç: Bitkilerin ışığa yöneldiğini görmek. 1) Saksıya fasulye ek. 2) Düzenli sula. 3) Saksıyı yalnız bir yanından ışık alan yere koy. 4) Bir hafta gözlemle. Sonuç: Bitki ışığa doğru eğilir.", "o"]
      ]
    },
    {
      ad: "Performans Görevi ve Tema Sonu", s: 137, ikon: "♻️",
      anlatim: [
        ["♻️", "Kâğıt, plastik, cam ve metal geri dönüştürülebilir. Performans görevinde bir geri dönüşüm kutusu hazırlarsın."],
        ["💡", "Su ve elektriği israf etmemek, atıkları ayrıştırmak doğal kaynakları korur."]
      ],
      cevaplar: [
        ["Tema Sonu 1) Doğayı korumak için", "Suyu ve elektriği israf etmemeli, atıkları geri dönüşüm kutularına atmalı, çevreyi temiz tutmalıyız.", "k"],
        ["Tema Sonu 2) Gereksiz enerji kullanımı", "Doğal kaynakların tükenmesine yol açar.", "k"],
        ["Tema Sonu 3) Kaynakları kullanırken", "Bilinçli ve tasarruflu kullanmaya dikkat etmeliyiz.", "k"],
        ["Tema Sonu 4) Geri dönüşüm", "Atıklar yeniden kullanılır, doğaya zarar vermez, kaynaklar tükenmez.", "k"],
        ["Tema Sonu 5) Dikkatsiz kullanım", "Su ve enerji kaynakları tükenir, canlılar zarar görür, doğa kirlenir.", "o"],
        ["Tema Sonu b) Eş anlamlılar", "1) Ayşe teyze misafirlerine (konuklarına) çay sundu.  2) Doğaya hürmet, vatana hürmettir.  3) Kardeşime çok güzel bir armağan aldım.", "o"],
        ["Tema Sonu c) Yazım", "1) Sabah okuluma gittim.  2) Bu kitabı Yusuf Serkan yazmış.  3) Ben Çamlıvadi İlkokulunda öğrenciyim.", "k"],
        ["Tema Sonu ç) Noktalama", "1) Bugün Ankara'dan dayım gelecek.  2) Marketten ekmek, su ve süt aldım.  3) Yaşasın, kar yağıyor!", "k"]
      ]
    }
  ]
});
window.REHBER.turkce.temalar.push({
  ad: "4. Tema: Bilgi Hazinemiz", ikon: "📚",
  bolumler: [
    {
      ad: "Temaya Hazırlanalım", s: 142, ikon: "💡",
      anlatim: [
        ["💡", "Bu temada kitap okumanın, kütüphanelerin ve bilginin önemini öğreniriz."],
        ["📖", "Kitap kâğıttan yapılır, elektrik istemez, sade ve sakin bir okuma sunar. Tablet elektrikle çalışır, belleğinde birçok kitap taşır; video izleme ve genel ağda araştırma imkânı verir."]
      ],
      cevaplar: [
        ["Kitap ve tablet — Benzerlik", "İkisinde de okuyabilir, bilgi edinebiliriz.", "k"],
        ["Kitap ve tablet — Farklılık", "Kitap kâğıttan, elektriksiz ve sade; tablet elektronik, elektrikle çalışır, çok kitap taşır, video ve genel ağa ulaşır.", "k"],
        ["Bilgi neden önemli? (örnek)", "Bilgi sayesinde sorunları çözer, doğru kararlar verir ve dünyayı tanırız.", "o"]
      ]
    },
    {
      ad: "Kütüphanemiz (İzleme Metni)", s: 143, ikon: "🏛️", dinleme: true,
      anlatim: [
        ["📺", "İzleme metnidir; karekoddaki videoyu izlersin. Videoda öğrenciler kütüphaneyi tanır, öğretmen \"Çilli Tavuk ve Yavruları\" masalını okur."],
        ["🏛️", "Kütüphane: Kitap, film gibi bilgi kaynaklarını toplayıp düzenleyen ve herkesin kullanımına sunan yer. Kitaplar raflarda düzenli dizilir, ödünç alınabilir. Kütüphanede sessiz olunur."],
        ["🔗", "Neden-sonuç cümleleri: \"için, çünkü, bu yüzden, bu nedenle\" ile kurulur. Defterini unuttu, bu yüzden ödevini yapamadı."],
        ["🧩", "Bağlama ögeleri (tek başına anlamı olmayan sözcükler): ve, veya, ile, ama, fakat, çünkü, ya da."]
      ],
      cevaplar: [
        ["2. Etkinlik — Neden-sonuç örnekleri", "Kütüphanede sessiz olduk çünkü başkalarını rahatsız etmek istemedik. Kitapları özenle kullandık bu yüzden yıpranmadılar.", "o"],
        ["3. Etkinlik — Konu ve ana fikir", "Konu: Kütüphaneyi tanımak ve kütüphanede uyulacak kurallar. Ana fikir: Kütüphaneler bilgiye ulaştığımız değerli yerlerdir; kurallarına uymalıyız.", "o"],
        ["4. Etkinlik — Kütüphanecinin görevleri", "Kitapları düzenler, raflara yerleştirir, ödünç verir ve geri alır, okuyuculara aradıkları kitabı bulmada yardım eder.", "o"],
        ["6. Etkinlik — b) İletiler", "\"Emek harcamadan başarıya ulaşamayız.\" → Kütüphanemiz (Çilli Tavuk masalının iletisi). \"Kitapları özenli kullanmalıyız.\" → Nane ile Limon. (Videoları izleyip kontrol et.)", "o"],
        ["8. Etkinlik — b) Bağlaçlar", "1) ve  2) çünkü  3) fakat  (\"veya\" boşta kalır)", "k"]
      ]
    },
    {
      ad: "Kitap Sevgisi (Şiir)", s: 149, ikon: "📖",
      anlatim: [
        ["📖", "Şiir, öğrencilerin neden kitap okuduğunu anlatır: iyiliği bilmek, cehaleti silmek, gönül huzuru, güzel bir gelecek ve temiz bir dünya için."],
        ["🧞", "Kitaplarla Keloğlan'ın gül bahçesine, Anka kuşuyla Kafdağı'na gideriz. Şiir, roman, destan gibi türleri okuruz."],
        ["🎵", "Tema: Kitap okuma sevgisi. Ana duygu: Sevgi, coşku."],
        ["📖", "cehalet: bilgisizlik. Kafdağı: masallarda dünyanın çevresinde olduğuna inanılan hayalî dağ. destan: kahramanlık anlatan halk şiiri."]
      ],
      cevaplar: [
        ["1. Etkinlik — Şiirle benzeşenler", "\"Kitap okumak insanları daha bilgili yapar.\" ✔  \"Kitaplar sayesinde cehalet azalır.\" ✔  \"Kitap okumak insanlara umut verir ve dünyayı güzelleştirir.\" ✔", "k"],
        ["2. Etkinlik — Tema ve ana duygu", "Tema: Kitap okuma sevgisi. Ana duygu: Sevgi (coşku).", "k"],
        ["3. Etkinlik — 1) Masal kahramanları", "Keloğlan ve Anka kuşu.", "k"],
        ["3. Etkinlik — 2) Dünyayı nasıl daha iyi yapar?", "Cehaleti siler, iyiliği öğretir, gönüllere huzur verir, memlekete umut saçar.", "k"],
        ["3. Etkinlik — 3) Kitap türleri", "Masal, şiir, roman, destan.", "k"],
        ["6. Etkinlik — Yazım hataları", "Kitapların Önemi: Öğrenciler kitaplara çok önem vermelidir. Çünkü kitap okumak hem bilgimizi artırır hem de hayal gücümüzü geliştirir. Tatil günlerinde de kitap okumaya devam etmeliyiz. Bir masal okuduğumuzda kendimizi bir kahraman gibi hissederiz ve bu bizi mutlu eder. Şiirler de insanların duygularını anlatır; bazen mutlu bazen de üzgün oluruz.", "k"]
      ]
    },
    {
      ad: "Kitaplar Bize Ne Söyler?", s: 155, ikon: "🗨️",
      anlatim: [
        ["📚", "Metin kitapları her zaman yanımızda olan arkadaşlara benzetir. Kitapların çok kalabalık hâlde bulunduğu yer kütüphanedir."],
        ["✨", "Kitaplar bizi şaşırtır ve eğlendirir; sözcük dağarcığımızı geliştirir; daha dikkatli yapar; hayal gücümüzü ve hafızamızı geliştirir; bilgi verir."],
        ["💡", "Ana fikir: Kitaplar hem eğlenceli hem öğretici dostlarımızdır; bizi her yönden geliştirir."],
        ["✍️", "Doğru yazım: beynimiz, tutabilir (bitişik), eğleniriz, hayalimiz, her şey (ayrı), kütüphane, üst üste, bir sürü (ayrı)."]
      ],
      cevaplar: [
        ["Metin içi — Devamında hangi bilgiler?", "Kitapların bize neler kazandırdığı, neden önemli oldukları.", "o"],
        ["2. Etkinlik — Konu ve ana fikir", "Konu: Kitap okumanın bize kazandırdıkları. Ana fikir: Kitaplar bizi eğlendiren ve geliştiren en iyi arkadaşlarımızdır.", "o"],
        ["3. Etkinlik — Tablo", "Eğlenceli yanları: a, ç, e. Öğretici yanları: b, c, d.", "k"],
        ["4. Etkinlik — Neden-sonuç", "1) …çünkü kitaplar seni daha dikkatli biri yapar.  2) …çünkü kitaplarda hep ilginç olaylar olur.  3) …çünkü kitaplar hafızanı geliştirir.  4) …çünkü kitaplarda heyecanlı şeyler olur ve bazı kitaplar bilgi doludur.", "k"],
        ["6. Etkinlik — Okumayı bilmeseydik", "Tabelaları, ilaç kutularını, mesajları okuyamaz; ders çalışamaz, yolumuzu bulmakta zorlanırdık.", "o"],
        ["7. Etkinlik — Yazım", "1) Kitaplar sayesinde beynimiz daha çok bilgiyi tutabilir.  2) Okurken çok şaşırır ve çok eğleniriz.  3) Hayalimizdeki her şeyi yapabiliriz.  4) Kütüphanede üst üste olan bir sürü raf vardır.", "k"]
      ]
    },
    {
      ad: "Pusula (Şiir)", s: 161, ikon: "🧭",
      anlatim: [
        ["🧭", "Pusula yön gösteren araçtır. Şiirde kitap okumak bir pusulaya benzetilir: Okuyan kişi yolunu kaybetmez, Kafdağı'na bile varır."],
        ["🌸", "Okursan cemre düşer, çiçekler açar; kitaplık seni yalnız bırakmaz, bilgiler gönlüne huzur verir."],
        ["🎵", "Tema: Okumanın yol gösterici gücü. Ana duygu: Huzur, sevgi."],
        ["📖", "cemre: Şubatta havada, suda ve toprakta oluştuğu sanılan sıcaklık artışı. derya: deniz. ilham: içe doğan yaratıcı düşünce."],
        ["📨", "Dilekçe: İsteği, şikâyeti veya öneriyi resmî bir kuruma yazılı ve imzalı bildiren mektup. Başlık büyük harfle, kurumun adı ve \"…MÜDÜRLÜĞÜNE\" ile başlar; tarih, ad-soyad, imza ve adres bulunur."]
      ],
      cevaplar: [
        ["2. Etkinlik — Boşluklar", "1) cemre  2) pusula  3) yalnız  (\"okumak\" boşta kalır)", "k"],
        ["3. Etkinlik — Tema ve ana duygu", "Tema: Kitap okumanın yol gösterici olması. Ana duygu: Huzur (sevgi).", "k"],
        ["4. Etkinlik — Kitap okumak ve okul", "Benzerlik: İkisi de bilgi verir, bizi geliştirir. Farklılık: Okulda öğretmen ve arkadaşlarla belli saatlerde öğreniriz; kitabı istediğimiz yerde ve zamanda tek başımıza okuyabiliriz.", "o"],
        ["5. Etkinlik — Neden-sonuç", "1) Cemre düştüğünden dolayı doğa uyanır, bahar gelir.  2) Kitaplar okunduğu için insanlar bilgiye ulaşır ve huzur bulur.  3) Pusula doğru yolu gösterdiği için insanlar kaybolmadan hedeflerine ulaşır.  (\"Leylekler göç etmeye başlar\" boşta kalır.)", "k"],
        ["7. Etkinlik — Bağlaçlar", "1) ile  2) çünkü  3) ama  4) ya da", "k"],
        ["8. Etkinlik — Dilekçe (örnek)", "…İLKOKULU MÜDÜRLÜĞÜNE / Okulunuzun 3/… sınıfı öğrencisiyim. Okul bahçesine kuşlar için su kabı konulmasını istiyorum. Gereğini bilgilerinize arz ederim. / Tarih – Ad Soyad – İmza – Adres", "o"]
      ]
    },
    {
      ad: "Ömer Seyfettin", s: 167, ikon: "✒️",
      anlatim: [
        ["✒️", "Ömer Seyfettin hikâyeci, şair ve fikir adamıdır. 36 yıllık kısa ömründe Türkçenin incisi sayılan birçok eser bıraktı."],
        ["🎖️", "Asker bir aileden geldi, Harbiye'de okudu, orduda teğmen ve üsteğmen olarak görev yaptı. Askerlikten ayrılınca edebiyat öğretmeni oldu ve durmadan yazdı; anılarını hikâyelerine yansıttı."],
        ["💡", "Ana fikir: Ömer Seyfettin'i okumak Türkçeyi, vatanı sevmek; adil, dürüst, yardımsever ve çalışkan olmak demektir."],
        ["📚", "Bazı hikâyeleri: Kaşağı, Pembe İncili Kaftan, Falaka, Forsa, Diyet."]
      ],
      cevaplar: [
        ["1. Etkinlik — Konu ve ana fikir", "Konu: Ömer Seyfettin'in hayatı ve eserlerinin önemi. Ana fikir: Ömer Seyfettin'in eserleri bize Türkçe ve vatan sevgisini, iyi değerleri kazandırır.", "o"],
        ["2. Etkinlik — Kimlik kartı", "Adı Soyadı: Ömer Seyfettin. Mesleği: Asker (teğmen, üsteğmen), edebiyat öğretmeni, yazar. Önemli olaylar: Harbiye'de okudu, orduda görev yaptı, askerlikten istifa edip öğretmen oldu, otuz altı yaşında öldü.", "k"],
        ["3. Etkinlik — 1) Askerlikten sonra", "Edebiyat öğretmenliği yaptı ve sayfalar dolusu yazı yazdı.", "k"],
        ["3. Etkinlik — 2) Hangi değerler?", "Vatan sevgisi, Türk ve Türk tarihi sevgisi, adalet, dürüstlük, duyarlılık, yardımseverlik, çalışkanlık.", "k"],
        ["3. Etkinlik — 3) Gelecek nesiller", "Gelecek nesillerin de onun eserlerini zevkle okuyacağı söylenmiştir.", "k"]
      ]
    },
    {
      ad: "Performans Görevi ve Tema Sonu", s: 173, ikon: "🏁",
      anlatim: [
        ["📢", "Performans görevi: Kitap okumanın yararlarını şiir, resim ya da afişle sun."],
        ["📖", "Okur kimliği: Düzenli okuyan kişinin zamanla kazandığı okuma kişiliği. Edebî şahsiyet: Şair, yazar gibi edebiyatçı."]
      ],
      cevaplar: [
        ["Tema Sonu 1) Kitapların faydaları", "Bilgi verir, hayal gücünü geliştirir, güzel konuşmamızı ve kendimizi ifade etmemizi sağlar.", "k"],
        ["Tema Sonu 2) Kütüphaneler neden önemli?", "Kitapların düzenli saklandığı, herkesin istediği kitabı okuyabildiği yerlerdir.", "k"],
        ["Tema Sonu 3) Edebî şahsiyetler", "Güzel şiirler ve hikâyeler yazarak.", "k"],
        ["Tema Sonu 4) Okuma alışkanlığı kazananlar", "Bilgili, duyarlı ve farklı bakış açılarına sahip olurlar.", "k"],
        ["Tema Sonu b) Yazım yanlışları", "Kütüpaneye → Kütüphaneye; gittiyimde → gittiğimde; yada → ya da; hayel → hayal; hergün → her gün", "k"]
      ]
    },
    {
      ad: "Pekiştirme Etkinlikleri", s: 176, ikon: "⭐",
      anlatim: [
        ["⭐", "Kitabın sonundaki tekrar sayfaları: Arkadaşlık, Küçük Mehmet ve Çanakkale Zaferi, Ece'nin Tasarruf Macerası metinleri."],
        ["🔤", "Kısaltmalara ek: MEB'e, TRT'de, TBMM'nin, THY'nin (son harfin okunuşuna göre)."]
      ],
      cevaplar: [
        ["Arkadaşlık — 1) Şenay'ın davranışı", "Çok güzel bir davranış; arkadaşının ıslanmasını istemedi, paylaşımcı ve yardımsever davrandı.", "o"],
        ["Arkadaşlık — 4) Ana düşünce", "Paylaşmak ve yardımlaşmak arkadaşlığı güçlendirir.", "o"],
        ["Çanakkale — a) Konu", "Mehmet'in dedesinden Çanakkale Zaferi'ni dinlemesi.", "k"],
        ["Çanakkale — c) Anlamlar", "zafer: savaşı ya da yarışmayı kazanma, utku. düşman: zarar vermek isteyen, karşı taraf.", "k"],
        ["Çanakkale — ç) Kısaltmalar", "1) MEB'e  2) TRT'de  3) TBMM'nin  4) THY'nin", "k"],
        ["Ece — 1) Ana karakter", "Ece.", "k"],
        ["Ece — 2) Ne yaptı?", "Odadan çıkarken ışığı kapattı, dişlerini fırçalarken suyu boşa akıtmadı.", "k"],
        ["Ece — 3) Ne aldı?", "Uzun zamandır istediği boya kalemlerini.", "k"],
        ["Ece — 4) Neden mutluydu?", "Hem ailesine yardım etti hem de istediğini alabildi.", "k"],
        ["Ece — Ana fikir", "Tasarruf yaparak hem ailemize hem kendimize fayda sağlarız.", "o"],
        ["c) Yazım ve noktalama", "1) Arkadaşım Can okula gelmedi.  2) Eyvah, ödevimi evde unuttum!  3) Kardeşim parkta top oynuyor.  4) Kitap okumayı çok seviyorum çünkü eğlenceli.  5) Köpeğim Karabaş bahçede uyuyor.", "k"]
      ]
    }
  ]
});
// Her bölümün, uygulamadaki Türkçe oyun konularıyla bağlantısı (Oyna + Video için)
(function () {
  const K = {
    "Hatırlatma Etkinlikleri": ["t9", "t7"], "Temaya Hazırlanalım — Elif ile Pıtırcık": ["t6", "t7"],
    "Kelebek ile Lavanta (Dinleme Metni)": ["t15", "t10", "t9"], "Ben Kimim?": ["t13", "t10"], "Köyde İlk Sabah (Şiir)": ["t8", "t15"],
    "Nermin Teyze Nerede?": ["t9", "t15"], "Çam Ağacı": ["t11", "t9"],
    "Kahverengi Ayakkabıları Siyaha Boyayan Ülkü (Dinleme Metni)": ["t4", "t15"], "Atatürk Çok Kitap Okurmuş": ["t2", "t4"],
    "Anadolu'nun Kadınları (Şiir)": ["t2", "t16"], "Dün Gibi": ["t3", "t2"], "Atatürk'ün Çocuk Sevgisi": ["t4", "t2"],
    "Bir Orman (Dinleme Metni)": ["t11", "t12"], "Karıncalar": ["t2", "t14"], "Orman (Şiir — Âşık Veysel)": ["t3", "t14"],
    "Fırtına": ["t2", "t11"], "Küçük Su Damlası": ["t11", "t12"],
    "Kütüphanemiz (İzleme Metni)": ["t11", "t8"], "Kitap Sevgisi (Şiir)": ["t16", "t15"], "Kitaplar Bize Ne Söyler?": ["t16", "t11"],
    "Pusula (Şiir)": ["t11", "t6"], "Ömer Seyfettin": ["t15", "t13"], "Pekiştirme Etkinlikleri": ["t2", "t9", "t16"]
  };
  window.REHBER.turkce.temalar.forEach((t, ti) => t.bolumler.forEach((b) => {
    b.konu = K[b.ad] || (b.ad.startsWith("Performans") ? ["t9", "t10", "t2"] : ti === 2 ? ["t4"] : ["t7"]);
  }));
})();
