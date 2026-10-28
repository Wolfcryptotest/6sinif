window.ICERIK = window.ICERIK || {};
// 5. sınıf İngilizce - Maarif Modeli 8 tema. Her temada "Kelimeler" ve "Dil Yapısı" konuları.
// kelimeler: [[İngilizce, Türkçe]] · bosluk: [cümle (___), doğru, [yanlışlar], açıklama, Türkçesi]
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.ingilizce = {
  ad: "İngilizce", ikon: "🔤", renk: "#8b5cf6",
  uniteler: [
    {
      id: "en1", ad: "School Life (Okul Hayatı)",
      konular: [
        {
          id: "en1k1", ad: "Okuldaki İnsanlar, Yerler ve Kulüpler", video: "OaR5Zozy-oE",
          ozet: ["headmaster: okul müdürü · teacher: öğretmen · janitor: hademe", "library: kütüphane · canteen: kantin · gym: spor salonu", "chess club: satranç kulübü · drama club: drama kulübü", "Republic Day: Cumhuriyet Bayramı · Children's Day: Çocuk Bayramı", "Where are you from? – I'm from Türkiye."],
          anlatim: [
            "Okulumuzda farklı görevleri olan insanlar vardır: headmaster (okul müdürü), teacher (öğretmen), student (öğrenci), school nurse (okul hemşiresi), librarian (kütüphaneci), janitor (hademe), cook (aşçı), security guard (güvenlik görevlisi).",
            "Okulun bölümleri: classroom (sınıf), library (kütüphane), canteen (kantin), gym (spor salonu), science lab (fen laboratuvarı), computer lab (bilgisayar laboratuvarı), playground (oyun bahçesi), teachers' room (öğretmenler odası), headmaster's office (müdür odası).",
            "Okul kulüpleri: chess club, drama club, music club, art club, science club, sports club, robotics club. 'Which club are you in? – I'm in the chess club.'",
            "Ülkeler ve millî günler: Türkiye, Germany, England, France, Italy, Japan... 'Where are you from? – I'm from Türkiye.' Republic Day (29 Ekim), National Sovereignty and Children's Day (23 Nisan), Victory Day (30 Ağustos)."
          ],
          kelimeler: [["headmaster", "okul müdürü"], ["teacher", "öğretmen"], ["student", "öğrenci"], ["classmate", "sınıf arkadaşı"], ["school nurse", "okul hemşiresi"], ["librarian", "kütüphaneci"], ["janitor", "hademe"], ["security guard", "güvenlik görevlisi"], ["cook", "aşçı"], ["classroom", "sınıf"], ["library", "kütüphane"], ["canteen", "kantin"], ["gym", "spor salonu"], ["science lab", "fen laboratuvarı"], ["computer lab", "bilgisayar laboratuvarı"], ["playground", "oyun bahçesi"], ["teachers' room", "öğretmenler odası"], ["corridor", "koridor"], ["toilet", "tuvalet"], ["school garden", "okul bahçesi"], ["chess club", "satranç kulübü"], ["drama club", "drama kulübü"], ["music club", "müzik kulübü"], ["art club", "resim kulübü"], ["science club", "bilim kulübü"], ["robotics club", "robotik kulübü"], ["rule", "kural"], ["be quiet", "sessiz olmak"], ["be on time", "zamanında gelmek"], ["raise your hand", "parmak kaldırmak"], ["wear a uniform", "forma giymek"], ["respect", "saygı duymak"], ["country", "ülke"], ["nationality", "milliyet"], ["Türkiye", "Türkiye"], ["Germany", "Almanya"], ["England", "İngiltere"], ["France", "Fransa"], ["Italy", "İtalya"], ["Japan", "Japonya"], ["Republic Day", "Cumhuriyet Bayramı"], ["Children's Day", "Çocuk Bayramı"], ["Victory Day", "Zafer Bayramı"], ["flag", "bayrak"], ["national anthem", "İstiklal Marşı (millî marş)"], ["ceremony", "tören"], ["celebrate", "kutlamak"], ["poem", "şiir"]],
          sorular: [
            S("Kütüphanede çalışan kişi hangisidir?", ["librarian", "janitor", "headmaster", "cook"], "librarian = kütüphaneci"),
            S("\"Which club are you in?\" sorusuna uygun cevap hangisidir?", ["I'm in the chess club.", "I'm from Italy.", "It's on Monday.", "I like apples."], "Hangi kulüpte olduğun soruluyor.")
          ]
        },
        {
          id: "en1k2", ad: "Okul Kuralları: Imperatives, mustn't, can't", video: "Hc4B5c0W7KI",
          ozet: ["Emir cümlesi (imperative): fiil ile başlar. Sit down. Open your book.", "Olumsuz emir: Don't + fiil. Don't run!", "mustn't / can't: yasak bildirir. You mustn't eat in class.", "Do you like + fiil-ing? – Yes, I do. / No, I don't.", "a / an / the: a pen, an apple, the sun"],
          anlatim: [
            "Emir ve rica cümleleri fiil ile başlar: 'Open the window, please.' 'Listen to your teacher.' Olumsuz emir için fiilin başına Don't getiririz: 'Don't talk!' 'Don't be late.'",
            "Yasakları anlatmak için mustn't (must not) ya da can't kullanırız: 'You mustn't run in the corridor.' 'You can't use your phone in class.' Bu yapılarda fiil yalın hâldedir.",
            "Sevdiğimiz etkinlikleri sormak için 'Do you like + fiil-ing?' kalıbını kullanırız: 'Do you like reading books?' – 'Yes, I do.' / 'No, I don't.' 'I like playing chess.'",
            "Sesli harfle (a, e, i, o, u) başlayan kelimelerden önce an, sessiz harfle başlayanlardan önce a kullanılır: an orange, an umbrella, a book, a teacher. Belirli, bilinen ya da tek olan şeylerde the kullanılır: the sun, the headmaster."
          ],
          bosluk: [
            ["You ___ run in the corridor.", "mustn't", ["must", "do", "are"], "Yasak bildirmek için mustn't kullanılır.", "Koridorda koşmamalısın."],
            ["___ talk during the exam!", "Don't", ["Doesn't", "Not", "No"], "Olumsuz emir: Don't + fiil.", "Sınav sırasında konuşma!"],
            ["Please ___ your books.", "open", ["opens", "opening", "to open"], "Emir cümlesi fiilin yalın hâliyle başlar.", "Lütfen kitaplarınızı açın."],
            ["You ___ use your phone in the classroom.", "can't", ["can", "do", "are"], "Yasak: can't + fiil.", "Sınıfta telefonunu kullanamazsın."],
            ["Do you like ___ books?", "reading", ["read", "reads", "to reading"], "like + fiil-ing.", "Kitap okumayı sever misin?"],
            ["She likes ___ chess.", "playing", ["play", "plays", "played"], "like + fiil-ing.", "O satranç oynamayı sever."],
            ["I have ___ apple in my bag.", "an", ["a", "the", "two"], "Sesli harfle başlayan kelimeden önce an.", "Çantamda bir elma var."],
            ["My father is ___ teacher.", "a", ["an", "the", "two"], "Sessiz harfle başlayan kelimeden önce a.", "Babam bir öğretmen."],
            ["___ sun is very hot today.", "The", ["A", "An", "Some"], "Tek olan varlıklarda the kullanılır.", "Güneş bugün çok sıcak."],
            ["Do you like dancing? – Yes, I ___.", "do", ["am", "does", "like"], "Do ile sorulan soruya do ile cevap verilir.", "Dans etmeyi sever misin? – Evet, severim."],
            ["Does he like singing? – No, he ___.", "doesn't", ["don't", "isn't", "not"], "He/she/it ile doesn't.", "O şarkı söylemeyi sever mi? – Hayır, sevmez."],
            ["___ is your favourite subject?", "What", ["Who", "Where", "When"], "Bir şeyi sormak için What.", "En sevdiğin ders hangisi?"],
            ["___ is your English teacher? – Mr. Smith.", "Who", ["What", "Where", "How"], "Kişiyi sormak için Who.", "İngilizce öğretmenin kim? – Bay Smith."],
            ["I ___ a student at Atatürk Secondary School.", "am", ["is", "are", "be"], "I ile am kullanılır.", "Ben Atatürk Ortaokulunda bir öğrenciyim."],
            ["They ___ in the drama club.", "are", ["is", "am", "be"], "They ile are kullanılır.", "Onlar drama kulübündeler."],
            ["___ is my best friend. Her name is Elif.", "She", ["He", "It", "They"], "Kız için she kullanılır.", "O benim en yakın arkadaşım. Adı Elif."],
            ["Where are you from? – I'm from ___.", "Türkiye", ["Turkish", "English", "German"], "Ülke adı istenir: Türkiye.", "Nerelisin? – Türkiye'denim."],
            ["You ___ be quiet in the library.", "must", ["mustn't", "can't", "don't"], "Kural/zorunluluk: must.", "Kütüphanede sessiz olmalısın."],
            ["___ eat in the computer lab.", "Don't", ["Do", "Doesn't", "Must"], "Olumsuz emir.", "Bilgisayar laboratuvarında yemek yeme."],
            ["We celebrate Republic Day ___ 29th October.", "on", ["in", "at", "to"], "Tarihlerden önce on kullanılır.", "Cumhuriyet Bayramı'nı 29 Ekim'de kutlarız."]
          ],
          sorular: [
            S("\"Koridorda koşmamalısın.\" cümlesinin İngilizcesi hangisidir?", ["You mustn't run in the corridor.", "You must run in the corridor.", "You can run in the corridor.", "Run in the corridor."], "Yasak: mustn't."),
            S("Hangisi doğrudur?", ["an umbrella", "a umbrella", "an book", "a apple"], "Sesli harften önce an.")
          ]
        }
      ]
    },
    {
      id: "en2", ad: "Classroom Life (Sınıf Hayatı)",
      konular: [
        {
          id: "en2k1", ad: "Sınıf Eşyaları, Dersler ve Ders Programı", video: "65uaeFcof5c",
          ozet: ["Ders adları: Maths, Science, Turkish, English, Art, Music, P.E., Social Studies", "Sınıf eşyaları: board, desk, notebook, ruler, rubber, pencil case", "Sınıf dili: Can I come in? May I go out? Can you repeat, please?", "Günler: Monday ... Sunday", "What's the time? – It's half past three."],
          anlatim: [
            "Derslerimizin İngilizceleri: Maths (Matematik), Science (Fen Bilimleri), Turkish (Türkçe), English (İngilizce), Social Studies (Sosyal Bilgiler), Religious Culture (Din Kültürü), Art (Görsel Sanatlar), Music (Müzik), P.E. (Beden Eğitimi), IT (Bilişim).",
            "Sınıf dili kalıpları: 'Can I come in?' (Girebilir miyim?), 'May I go out?' (Dışarı çıkabilir miyim?), 'Can you repeat, please?' (Tekrar eder misiniz?), 'How do you spell it?' (Nasıl hecelenir?), 'I don't understand.' (Anlamadım.)",
            "Ders programını anlatırken günleri ve saatleri kullanırız: 'We have English on Monday and Wednesday.' 'The Maths lesson starts at nine o'clock.'",
            "Saat söylerken: 3:00 → It's three o'clock. 3:30 → It's half past three. 3:15 → It's quarter past three. 3:45 → It's quarter to four."
          ],
          kelimeler: [["Maths", "matematik"], ["Science", "fen bilimleri"], ["Turkish", "Türkçe"], ["English", "İngilizce"], ["Social Studies", "sosyal bilgiler"], ["Religious Culture", "din kültürü"], ["Art", "görsel sanatlar"], ["Music", "müzik"], ["P.E.", "beden eğitimi"], ["IT", "bilişim teknolojileri"], ["timetable", "ders programı"], ["lesson", "ders"], ["subject", "ders (branş)"], ["break", "teneffüs"], ["board", "tahta"], ["smart board", "akıllı tahta"], ["desk", "sıra"], ["chair", "sandalye"], ["notebook", "defter"], ["textbook", "ders kitabı"], ["ruler", "cetvel"], ["rubber", "silgi"], ["sharpener", "kalemtıraş"], ["pencil case", "kalem kutusu"], ["coloured pencils", "boya kalemleri"], ["glue stick", "yapıştırıcı"], ["scissors", "makas"], ["map", "harita"], ["globe", "küre"], ["bin", "çöp kutusu"], ["window", "pencere"], ["door", "kapı"], ["Monday", "pazartesi"], ["Tuesday", "salı"], ["Wednesday", "çarşamba"], ["Thursday", "perşembe"], ["Friday", "cuma"], ["Saturday", "cumartesi"], ["Sunday", "pazar"], ["o'clock", "saat tam"], ["half past", "buçuk"], ["quarter past", "çeyrek geçe"], ["quarter to", "çeyrek kala"], ["Can I come in?", "Girebilir miyim?"], ["May I go out?", "Dışarı çıkabilir miyim?"], ["Can you repeat, please?", "Tekrar eder misiniz?"], ["I don't understand.", "Anlamadım."], ["How do you spell it?", "Nasıl hecelenir?"]],
          sorular: [
            S("\"It's half past four.\" saat kaçı gösterir?", ["4:30", "4:15", "3:30", "4:45"], "half past = buçuk."),
            S("Beden eğitimi dersinin İngilizcesi hangisidir?", ["P.E.", "Art", "IT", "Science"], "P.E. = Physical Education.")
          ]
        },
        {
          id: "en2k2", ad: "There is / There are, Nesne Zamirleri, Saat", video: "yIjXR-AT6yc",
          ozet: ["There is + tekil: There is a map on the wall.", "There are + çoğul: There are 25 students in my class.", "Is there...? / Are there...? – Yes, there is. / No, there aren't.", "Nesne zamirleri: me, you, him, her, it, us, them", "What time does the lesson start? – At nine o'clock."],
          anlatim: [
            "Bir yerde bir şeyin var olduğunu söylemek için tekil isimlerle there is, çoğul isimlerle there are kullanırız: 'There is a smart board in our classroom.' 'There are two windows.' Olumsuzu there isn't / there aren't, sorusu Is there...? / Are there...? şeklindedir.",
            "Nesne zamirleri fiilden sonra gelir: I → me, you → you, he → him, she → her, it → it, we → us, they → them. 'Can you help me?' 'Our teacher loves us.' 'Give it to her.'",
            "Dersin saatini sormak için 'What time does the lesson start/finish?' kalıbı kullanılır: 'It starts at half past eight.'",
            "Geniş zaman (Simple Present) düzenli yaptığımız işleri anlatır: 'We have Art on Friday.' He/she/it öznelerinde fiile -s eklenir: 'Our English class starts at ten.'"
          ],
          bosluk: [
            ["There ___ a map on the wall.", "is", ["are", "am", "be"], "Tekil isim: there is.", "Duvarda bir harita var."],
            ["There ___ twenty desks in the classroom.", "are", ["is", "am", "be"], "Çoğul isim: there are.", "Sınıfta yirmi sıra var."],
            ["___ there a computer in your classroom?", "Is", ["Are", "Do", "Does"], "Tekil soru: Is there...?", "Sınıfınızda bilgisayar var mı?"],
            ["Are there any books on the desk? – No, there ___.", "aren't", ["isn't", "don't", "not"], "Çoğul olumsuz cevap: there aren't.", "Sırada hiç kitap var mı? – Hayır, yok."],
            ["Is there a bin? – Yes, there ___.", "is", ["are", "does", "has"], "Tekil olumlu kısa cevap.", "Çöp kutusu var mı? – Evet, var."],
            ["Can you help ___? I don't understand.", "me", ["I", "my", "mine"], "Fiilden sonra nesne zamiri: me.", "Bana yardım edebilir misin? Anlamadım."],
            ["Our teacher is great. We love ___.", "her", ["she", "hers", "his"], "she → her (nesne).", "Öğretmenimiz harika. Onu çok seviyoruz."],
            ["Ali is my friend. I play with ___ every day.", "him", ["he", "his", "them"], "he → him (nesne).", "Ali benim arkadaşım. Her gün onunla oynarım."],
            ["The students are in the garden. Look at ___!", "them", ["they", "their", "us"], "they → them.", "Öğrenciler bahçede. Onlara bak!"],
            ["Please listen to ___. We have a question.", "us", ["we", "our", "they"], "we → us.", "Lütfen bizi dinleyin. Bir sorumuz var."],
            ["What time ___ the Maths lesson start?", "does", ["do", "is", "are"], "The lesson (tekil) ile does.", "Matematik dersi saat kaçta başlıyor?"],
            ["The lesson starts ___ nine o'clock.", "at", ["on", "in", "to"], "Saatlerden önce at.", "Ders saat dokuzda başlıyor."],
            ["We have English ___ Monday.", "on", ["at", "in", "to"], "Günlerden önce on.", "Pazartesi İngilizce dersimiz var."],
            ["It's 7:30. It's ___ past seven.", "half", ["quarter", "o'clock", "to"], "Buçuk: half past.", "Saat 7:30. Yedi buçuk."],
            ["It's 2:45. It's quarter ___ three.", "to", ["past", "half", "at"], "Çeyrek kala: quarter to.", "Saat 2:45. Üçe çeyrek var."],
            ["Our English class ___ at ten.", "starts", ["start", "starting", "is start"], "He/she/it ile fiile -s eklenir.", "İngilizce dersimiz saat onda başlar."],
            ["There ___ any students in the gym now.", "aren't", ["isn't", "doesn't", "don't"], "Çoğul olumsuz: there aren't.", "Şu anda spor salonunda hiç öğrenci yok."],
            ["Give the ruler to ___. She needs it.", "her", ["she", "him", "they"], "she → her.", "Cetveli ona ver. Ona lazım."],
            ["How many students ___ there in your class?", "are", ["is", "do", "does"], "How many + çoğul + are there.", "Sınıfınızda kaç öğrenci var?"],
            ["What time is it? – It's three ___.", "o'clock", ["half", "quarter", "past"], "Tam saat: o'clock.", "Saat kaç? – Saat tam üç."]
          ],
          sorular: [
            S("\"Sınıfta otuz öğrenci var.\" cümlesinin İngilizcesi hangisidir?", ["There are thirty students in the class.", "There is thirty students in the class.", "There are thirty student in the class.", "It is thirty students in the class."], "Çoğul: there are + çoğul isim."),
            S("\"They\" zamirinin nesne hâli hangisidir?", ["them", "their", "they're", "theirs"], "they → them.")
          ]
        }
      ]
    },
    {
      id: "en3", ad: "Personal Life (Kişisel Hayat)",
      konular: [
        {
          id: "en3k1", ad: "Vücut, Dış Görünüş ve Kıyafetler", video: "oSeOos374HU",
          ozet: ["Saç: long, short, curly, straight, wavy, blond, dark", "Boy-kilo: tall, short, medium height, slim, plump", "He has got green eyes. She is tall.", "Kıyafetler: T-shirt, jeans, dress, jacket, trainers, scarf", "What does he look like? – He is tall and he has got short hair."],
          anlatim: [
            "Bir kişinin dış görünüşünü anlatırken boy, saç ve göz özelliklerini kullanırız: 'She is tall and slim.' 'He has got short curly hair and brown eyes.' Saç için long (uzun), short (kısa), curly (kıvırcık), straight (düz), wavy (dalgalı), blond (sarı), dark (koyu) sıfatları kullanılır.",
            "'What does she look like?' (Nasıl görünüyor?) sorusuna dış görünüşle cevap veririz: 'She is short and she has got long blond hair.'",
            "Vücut bölümleri: head, hair, face, eyes, ears, nose, mouth, neck, shoulders, arms, hands, fingers, legs, knees, feet.",
            "Kıyafetler: T-shirt, shirt, sweater, jeans, trousers, skirt, dress, jacket, coat, socks, shoes, trainers, boots, hat, cap, scarf, gloves. 'She is wearing a red dress.' 'He usually wears jeans.'"
          ],
          kelimeler: [["tall", "uzun boylu"], ["short", "kısa (boy/saç)"], ["medium height", "orta boylu"], ["slim", "ince, zayıf"], ["plump", "tombul"], ["long hair", "uzun saç"], ["curly", "kıvırcık"], ["straight", "düz (saç)"], ["wavy", "dalgalı"], ["blond", "sarışın"], ["dark hair", "koyu renk saç"], ["bald", "kel"], ["beard", "sakal"], ["moustache", "bıyık"], ["glasses", "gözlük"], ["freckles", "çil"], ["eyes", "gözler"], ["ears", "kulaklar"], ["nose", "burun"], ["mouth", "ağız"], ["neck", "boyun"], ["shoulder", "omuz"], ["arm", "kol"], ["hand", "el"], ["finger", "parmak"], ["leg", "bacak"], ["knee", "diz"], ["foot", "ayak"], ["T-shirt", "tişört"], ["shirt", "gömlek"], ["sweater", "kazak"], ["jeans", "kot pantolon"], ["trousers", "pantolon"], ["skirt", "etek"], ["dress", "elbise"], ["jacket", "ceket, mont"], ["coat", "palto"], ["socks", "çorap"], ["shoes", "ayakkabı"], ["trainers", "spor ayakkabı"], ["boots", "bot"], ["hat", "şapka"], ["cap", "kasket"], ["scarf", "atkı"], ["gloves", "eldiven"], ["wear", "giymek"], ["look like", "benzemek, görünmek"], ["handsome", "yakışıklı"], ["pretty", "güzel, sevimli"]],
          sorular: [
            S("\"He has got curly hair.\" cümlesinde saç nasıldır?", ["Kıvırcık", "Düz", "Uzun", "Sarı"], "curly = kıvırcık."),
            S("\"What does she look like?\" sorusuna uygun cevap hangisidir?", ["She is tall and has got long hair.", "She likes reading.", "She is from Spain.", "She is a teacher."], "Dış görünüş sorulmaktadır.")
          ]
        },
        {
          id: "en3k2", ad: "Günlük Rutinler: Sıklık Zarfları ve Question Tags", video: "oSeOos374HU",
          ozet: ["always %100 > usually > often > sometimes > rarely > never %0", "Sıklık zarfı fiilden önce gelir: I usually get up at 7.", "How often do you...? – Twice a week.", "Question tag: She reads every day, doesn't she? · You don't eat meat, do you?", "İyelik sıfatları: my, your, his, her, its, our, their"],
          anlatim: [
            "Bir işi ne sıklıkla yaptığımızı sıklık zarflarıyla anlatırız: always (her zaman), usually (genellikle), often (sık sık), sometimes (bazen), rarely (nadiren), never (asla). Bu zarflar fiilden önce gelir: 'I always brush my teeth.' Ama am/is/are'dan sonra gelir: 'He is never late.'",
            "'How often do you play football?' (Ne sıklıkla futbol oynarsın?) sorusuna 'every day', 'once a week' (haftada bir), 'twice a month' (ayda iki kez) gibi cevaplar verilir.",
            "Question tag (onay sorusu) cümlenin sonuna eklenen kısa sorudur: Olumlu cümleye olumsuz, olumsuz cümleye olumlu soru eklenir. 'You like pizza, don't you?' 'She gets up early, doesn't she?' 'They don't play tennis, do they?'",
            "İyelik sıfatları sahipliği gösterir: I → my, you → your, he → his, she → her, it → its, we → our, they → their. 'This is my bag. That is her jacket.'"
          ],
          bosluk: [
            ["I ___ brush my teeth before bed. (%100)", "always", ["never", "sometimes", "rarely"], "%100: always.", "Yatmadan önce her zaman dişlerimi fırçalarım."],
            ["He ___ eats fast food. It's unhealthy. (%0)", "never", ["always", "usually", "often"], "%0: never.", "O asla fast food yemez. Sağlıksızdır."],
            ["She is ___ late for school.", "never", ["nevers", "isn't", "don't"], "Sıklık zarfı is'ten sonra gelir.", "O asla okula geç kalmaz."],
            ["How ___ do you go swimming? – Twice a week.", "often", ["many", "much", "old"], "Sıklık sorusu: How often.", "Ne sıklıkla yüzmeye gidersin? – Haftada iki kez."],
            ["My father usually ___ up at six o'clock.", "gets", ["get", "getting", "is get"], "He/she ile fiile -s.", "Babam genellikle saat altıda kalkar."],
            ["You like pizza, ___ you?", "don't", ["do", "doesn't", "aren't"], "Olumlu cümleye olumsuz tag.", "Pizzayı seviyorsun, değil mi?"],
            ["She reads a book every evening, ___ she?", "doesn't", ["does", "don't", "isn't"], "She + olumlu → doesn't she?", "O her akşam kitap okur, değil mi?"],
            ["They don't play tennis, ___ they?", "do", ["don't", "does", "are"], "Olumsuz cümleye olumlu tag.", "Onlar tenis oynamaz, değil mi?"],
            ["He doesn't drink coffee, ___ he?", "does", ["doesn't", "do", "is"], "He + olumsuz → does he?", "O kahve içmez, değil mi?"],
            ["This is ___ bag. I bought it yesterday.", "my", ["me", "I", "mine"], "I → my.", "Bu benim çantam. Dün aldım."],
            ["Elif loves ___ cat very much.", "her", ["she", "his", "their"], "she → her (iyelik).", "Elif kedisini çok sever."],
            ["Kerem and Can are brothers. ___ house is big.", "Their", ["They", "There", "Them"], "they → their.", "Kerem ve Can kardeş. Onların evi büyük."],
            ["We wear ___ uniforms every day.", "our", ["we", "us", "ours"], "we → our.", "Her gün formalarımızı giyeriz."],
            ["Mert ___ wears a cap. (%50)", "sometimes", ["never", "always", "rarely"], "Yaklaşık yarı yarıya: sometimes.", "Mert bazen kasket takar."],
            ["I ___ have breakfast at 7:30. (%80)", "usually", ["never", "rarely", "sometimes"], "Çoğu zaman: usually.", "Genellikle saat 7:30'da kahvaltı yaparım."],
            ["My mother goes to the market ___ a week.", "once", ["one", "first", "ones"], "Haftada bir: once a week.", "Annem haftada bir pazara gider."],
            ["___ your brother play football?", "Does", ["Do", "Is", "Are"], "Your brother (he) ile Does.", "Erkek kardeşin futbol oynar mı?"],
            ["I don't ___ TV in the morning.", "watch", ["watches", "watching", "watched"], "don't + fiil yalın.", "Sabahları televizyon izlemem."],
            ["The dog wags ___ tail when it is happy.", "its", ["it's", "his", "their"], "it → its.", "Köpek mutlu olduğunda kuyruğunu sallar."],
            ["He ___ his face every morning.", "washes", ["wash", "washs", "washing"], "-sh ile biten fiillere -es: washes.", "O her sabah yüzünü yıkar."]
          ],
          sorular: [
            S("Sıklık zarflarının doğru sıralaması (çoktan aza) hangisidir?", ["always – usually – sometimes – never", "never – sometimes – usually – always", "usually – always – never – sometimes", "sometimes – always – never – usually"], "always %100, never %0."),
            S("\"She likes cats, ___ she?\" boşluğa hangisi gelir?", ["doesn't", "does", "isn't", "don't"], "Olumlu cümleye olumsuz tag.")
          ]
        }
      ]
    },
    {
      id: "en4", ad: "Family Life (Aile Hayatı)",
      konular: [
        {
          id: "en4k1", ad: "Aile Üyeleri, Hobiler ve Etkinlikler", video: "4kmqTRcOdxI",
          ozet: ["mother, father, sister, brother, grandmother, grandfather, aunt, uncle, cousin", "Hobiler: reading, painting, gardening, cooking, playing chess, fishing", "What does your father do in his free time? – He goes fishing.", "My grandmother loves knitting."],
          anlatim: [
            "Aile üyeleri: mother (anne), father (baba), sister (kız kardeş), brother (erkek kardeş), grandmother (büyükanne), grandfather (büyükbaba), aunt (teyze/hala), uncle (amca/dayı), cousin (kuzen), grandparents (büyükanne ve büyükbaba).",
            "Aile üyelerimizin hobilerini anlatırken fiil-ing kullanırız: 'My mother likes gardening.' 'My grandfather enjoys playing chess.' 'My sister is good at painting.'",
            "Aile rutinleri ve etkinlikleri: have dinner together (birlikte akşam yemeği yemek), go on a picnic (pikniğe gitmek), visit grandparents (büyükanne-büyükbabayı ziyaret etmek), watch a film (film izlemek), play board games (masa oyunu oynamak).",
            "'What does your brother do in his free time?' – 'He plays computer games and rides his bike.'"
          ],
          kelimeler: [["mother", "anne"], ["father", "baba"], ["parents", "anne-baba"], ["sister", "kız kardeş"], ["brother", "erkek kardeş"], ["grandmother", "büyükanne"], ["grandfather", "büyükbaba"], ["aunt", "teyze, hala"], ["uncle", "amca, dayı"], ["cousin", "kuzen"], ["baby", "bebek"], ["twins", "ikizler"], ["family", "aile"], ["hobby", "hobi"], ["free time", "boş zaman"], ["reading", "kitap okumak"], ["painting", "resim yapmak"], ["gardening", "bahçe işleri"], ["cooking", "yemek yapmak"], ["knitting", "örgü örmek"], ["fishing", "balık tutmak"], ["playing chess", "satranç oynamak"], ["playing the guitar", "gitar çalmak"], ["riding a bike", "bisiklet sürmek"], ["swimming", "yüzmek"], ["dancing", "dans etmek"], ["singing", "şarkı söylemek"], ["collecting stamps", "pul biriktirmek"], ["taking photos", "fotoğraf çekmek"], ["playing board games", "masa oyunu oynamak"], ["watching films", "film izlemek"], ["have dinner together", "birlikte akşam yemeği yemek"], ["go on a picnic", "pikniğe gitmek"], ["visit relatives", "akrabaları ziyaret etmek"], ["do the housework", "ev işi yapmak"], ["wash the dishes", "bulaşık yıkamak"], ["iron the clothes", "kıyafetleri ütülemek"], ["feed the pets", "evcil hayvanları beslemek"], ["water the flowers", "çiçekleri sulamak"], ["read a story", "hikâye okumak"], ["enjoy", "keyif almak"], ["be good at", "-de iyi olmak"], ["together", "birlikte"], ["weekend", "hafta sonu"], ["at the moment", "şu anda"], ["now", "şimdi"]],
          sorular: [
            S("\"My uncle is my father's brother.\" cümlesinde uncle kimdir?", ["Amca", "Dayı", "Kuzen", "Dede"], "Babanın erkek kardeşi amcadır."),
            S("\"My grandmother loves knitting.\" Büyükanne neyi sever?", ["Örgü örmeyi", "Yemek yapmayı", "Balık tutmayı", "Resim yapmayı"], "knitting = örgü örmek.")
          ]
        },
        {
          id: "en4k2", ad: "Present Continuous (Şimdiki Zaman)", video: "4kmqTRcOdxI",
          ozet: ["am/is/are + fiil-ing: She is cooking now.", "Olumsuz: He isn't sleeping. · Soru: Are you watching TV?", "now, at the moment, right now, look!, listen! şimdiki zaman ipuçlarıdır.", "Geniş zaman alışkanlık, şimdiki zaman şu anki iş: I usually walk, but today I am taking the bus.", "Question tag: She is reading, isn't she?"],
          anlatim: [
            "Şu anda yapılan işleri anlatmak için Present Continuous (şimdiki zaman) kullanırız: özne + am/is/are + fiil-ing. 'I am doing my homework.' 'My father is reading the newspaper.' 'They are playing in the garden.'",
            "Olumsuz cümlede am/is/are'dan sonra not gelir: 'She isn't sleeping.' Soru cümlesinde am/is/are başa geçer: 'Is your mother cooking?' – 'Yes, she is.'",
            "Fiile -ing eklerken: e ile bitenlerde e düşer (write → writing), tek heceli sessiz-sesli-sessiz ile bitenlerde son harf ikilenir (swim → swimming, run → running).",
            "Geniş zaman (Simple Present) alışkanlıkları, şimdiki zaman o anki işi anlatır: 'My brother usually plays football on Sundays, but now he is studying.' Question tag: 'They are watching a film, aren't they?'"
          ],
          bosluk: [
            ["Look! My father ___ the car.", "is washing", ["washes", "are washing", "wash"], "Şu anda yapılan iş: is + fiil-ing.", "Bak! Babam arabayı yıkıyor."],
            ["I ___ my homework at the moment.", "am doing", ["is doing", "do", "does"], "I ile am + fiil-ing.", "Şu anda ödevimi yapıyorum."],
            ["They ___ football in the park now.", "are playing", ["is playing", "play", "plays"], "They ile are + fiil-ing.", "Onlar şu anda parkta futbol oynuyor."],
            ["My grandmother ___ a sweater right now.", "is knitting", ["knits", "are knitting", "knitting"], "She ile is + fiil-ing.", "Büyükannem şu anda kazak örüyor."],
            ["___ your sister sleeping? – No, she isn't.", "Is", ["Are", "Does", "Do"], "Soru: Is + özne + fiil-ing.", "Kız kardeşin uyuyor mu? – Hayır, uyumuyor."],
            ["Are you watching TV? – Yes, I ___.", "am", ["do", "is", "are"], "I ile kısa cevap: Yes, I am.", "Televizyon mu izliyorsun? – Evet, izliyorum."],
            ["She ___ cooking. She is reading a book.", "isn't", ["doesn't", "aren't", "don't"], "Olumsuz: isn't + fiil-ing.", "O yemek yapmıyor. Kitap okuyor."],
            ["Listen! The baby ___.", "is crying", ["cries", "cry", "are crying"], "Listen! ipucu şimdiki zamandır.", "Dinle! Bebek ağlıyor."],
            ["We usually go to the park, but today we ___ at home.", "are staying", ["stay", "stays", "is staying"], "Bugünkü durum: şimdiki zaman.", "Genellikle parka gideriz ama bugün evde kalıyoruz."],
            ["My mother ___ dinner every evening.", "cooks", ["is cooking", "cook", "cooking"], "Every evening: alışkanlık → geniş zaman.", "Annem her akşam yemek pişirir."],
            ["The children are swimming, ___ they?", "aren't", ["are", "don't", "isn't"], "are → aren't they?", "Çocuklar yüzüyor, değil mi?"],
            ["He is writing an email, ___ he?", "isn't", ["is", "doesn't", "aren't"], "is → isn't he?", "O bir e-posta yazıyor, değil mi?"],
            ["What ___ your brother doing now?", "is", ["are", "does", "do"], "Your brother (he) ile is.", "Erkek kardeşin şimdi ne yapıyor?"],
            ["I'm ___ in the sea. The water is warm!", "swimming", ["swiming", "swims", "swim"], "swim → swimming (m ikilenir).", "Denizde yüzüyorum. Su ılık!"],
            ["She is ___ a letter to her cousin.", "writing", ["writeing", "writes", "write"], "write → writing (e düşer).", "Kuzenine bir mektup yazıyor."],
            ["My parents ___ TV now. They are in the garden.", "aren't watching", ["isn't watching", "don't watch", "not watching"], "They ile aren't + fiil-ing.", "Annemle babam şimdi televizyon izlemiyor. Bahçedeler."],
            ["Where are you? – I ___ in the kitchen.", "am", ["is", "are", "be"], "I ile am.", "Neredesin? – Mutfaktayım."],
            ["My uncle ___ fishing every weekend.", "goes", ["is going", "go", "going"], "Every weekend: geniş zaman, he ile -es.", "Amcam her hafta sonu balığa gider."],
            ["Shh! Dad ___. Don't make noise.", "is sleeping", ["sleeps", "sleep", "are sleeping"], "Şu anki durum.", "Şşt! Babam uyuyor. Gürültü yapma."],
            ["Why ___ you laughing?", "are", ["is", "do", "does"], "You ile are.", "Neden gülüyorsun?"]
          ],
          sorular: [
            S("\"O şu anda kitap okuyor.\" cümlesinin İngilizcesi hangisidir?", ["She is reading a book now.", "She reads a book now.", "She are reading a book now.", "She reading a book now."], "is + fiil-ing."),
            S("\"run\" fiilinin -ing hâli hangisidir?", ["running", "runing", "runeing", "runns"], "Son harf ikilenir.")
          ]
        }
      ]
    },
    {
      id: "en5", ad: "Life in the Neighbourhood & City (Mahalle ve Şehir)",
      konular: [
        {
          id: "en5k1", ad: "Şehirde Eğlence ve Gezilecek Yerler, Ev Tipleri", video: "v9RdGWm-GZU",
          ozet: ["Eğlence yerleri: park, cinema, theatre, zoo, aquarium, amusement park, sports centre", "Gezilecek yerler: museum, castle, tower, palace, mosque, bridge, square", "Ev tipleri: flat, detached house, cottage, villa, tent, igloo", "There is a big park in my neighbourhood."],
          anlatim: [
            "Mahallemizde ve şehrimizde vakit geçirebileceğimiz eğlence yerleri (places for recreation): park, playground (oyun parkı), cinema, theatre, sports centre (spor merkezi), swimming pool, amusement park (lunapark), zoo, aquarium (akvaryum), shopping mall (AVM).",
            "Turistik yerler (attractions): museum (müze), castle (kale), tower (kule), palace (saray), mosque (cami), historical bridge (tarihî köprü), square (meydan), clock tower (saat kulesi). 'Galata Tower is a famous attraction in İstanbul.'",
            "Farklı ev tipleri vardır: flat (apartman dairesi), detached house (müstakil ev), cottage (kır evi), villa, farmhouse (çiftlik evi), tent (çadır), igloo (iglo), stilt house (direkler üzerindeki ev).",
            "'What is there in your neighbourhood?' – 'There is a bakery, a park and a mosque. There are two supermarkets.'"
          ],
          kelimeler: [["neighbourhood", "mahalle"], ["city", "şehir"], ["town", "kasaba"], ["park", "park"], ["playground", "oyun parkı"], ["cinema", "sinema"], ["theatre", "tiyatro"], ["sports centre", "spor merkezi"], ["swimming pool", "yüzme havuzu"], ["amusement park", "lunapark"], ["zoo", "hayvanat bahçesi"], ["aquarium", "akvaryum"], ["shopping mall", "alışveriş merkezi"], ["library", "kütüphane"], ["museum", "müze"], ["castle", "kale"], ["tower", "kule"], ["palace", "saray"], ["mosque", "cami"], ["historical bridge", "tarihî köprü"], ["square", "meydan"], ["clock tower", "saat kulesi"], ["fountain", "çeşme, fıskiye"], ["statue", "heykel"], ["bakery", "fırın"], ["pharmacy", "eczane"], ["hospital", "hastane"], ["post office", "postane"], ["bank", "banka"], ["restaurant", "restoran"], ["café", "kafe"], ["supermarket", "süpermarket"], ["bus stop", "otobüs durağı"], ["flat", "apartman dairesi"], ["detached house", "müstakil ev"], ["cottage", "kır evi"], ["villa", "villa"], ["farmhouse", "çiftlik evi"], ["tent", "çadır"], ["igloo", "iglo"], ["stilt house", "direkler üzerindeki ev"], ["garden", "bahçe"], ["crowded", "kalabalık"], ["quiet", "sessiz, sakin"], ["noisy", "gürültülü"], ["modern", "modern"], ["historical", "tarihî"], ["famous", "ünlü"], ["visit", "ziyaret etmek"]],
          sorular: [
            S("Balıkları ve deniz canlılarını görebileceğimiz yer hangisidir?", ["aquarium", "library", "bakery", "cinema"], "aquarium = akvaryum."),
            S("\"detached house\" ne demektir?", ["Müstakil ev", "Apartman dairesi", "Çadır", "Kale"], "Bahçeli, tek başına duran ev.")
          ]
        },
        {
          id: "en5k2", ad: "Karşılaştırma (Comparatives) ve İyelik 's", video: "v9RdGWm-GZU",
          ozet: ["Kısa sıfat + -er + than: tall → taller than, big → bigger than", "Uzun sıfat: more + sıfat + than: more beautiful than", "Düzensiz: good → better, bad → worse, far → farther", "-y ile bitenler: busy → busier, happy → happier", "İyelik 's: This is Ali's bike. The children's park."],
          anlatim: [
            "İki şeyi karşılaştırmak için sıfatların karşılaştırma (comparative) hâlini ve than kullanırız. Kısa (tek heceli) sıfatlara -er eklenir: 'My house is bigger than your house.' 'Ankara is colder than İzmir.'",
            "Sessiz-sesli-sessiz ile biten kısa sıfatlarda son harf ikilenir: big → bigger, hot → hotter. -y ile bitenlerde y → ier olur: busy → busier, noisy → noisier. -e ile bitenlere sadece -r eklenir: large → larger.",
            "İki ve daha fazla heceli uzun sıfatlarda more kullanılır: 'The museum is more interesting than the shopping mall.' 'A villa is more expensive than a tent.' Düzensiz sıfatlar: good → better, bad → worse.",
            "Sahiplik bildirmek için isme 's ekleriz: 'This is Elif's house.' 'My brother's room is small.' Çoğul -s ile biten isimlere yalnızca ' eklenir: 'my parents' car'."
          ],
          bosluk: [
            ["The city is ___ than the village.", "noisier", ["noisyer", "more noisy", "noisy"], "noisy → noisier.", "Şehir köyden daha gürültülüdür."],
            ["My house is ___ than your house.", "bigger", ["biger", "more big", "big"], "big → bigger.", "Benim evim senin evinden daha büyük."],
            ["The museum is ___ than the cinema.", "more interesting", ["interestinger", "most interesting", "interesting"], "Uzun sıfat: more + sıfat.", "Müze sinemadan daha ilginçtir."],
            ["The park is ___ than the shopping mall.", "quieter", ["quiet", "more quieter", "quietest"], "quiet → quieter.", "Park alışveriş merkezinden daha sakindir."],
            ["A villa is ___ than a flat.", "more expensive", ["expensiver", "expensive", "most expensive"], "expensive → more expensive.", "Bir villa daireden daha pahalıdır."],
            ["This café is ___ than that one.", "better", ["gooder", "more good", "best"], "good → better.", "Bu kafe şundan daha iyidir."],
            ["The traffic today is ___ than yesterday.", "worse", ["badder", "more bad", "worst"], "bad → worse.", "Bugün trafik dünkünden daha kötü."],
            ["Summer in Antalya is ___ than in Erzurum.", "hotter", ["hoter", "more hot", "hot"], "hot → hotter.", "Antalya'da yaz Erzurum'dakinden daha sıcaktır."],
            ["İstanbul is ___ than Bursa.", "more crowded", ["crowdeder", "crowded", "most crowded"], "crowded → more crowded.", "İstanbul Bursa'dan daha kalabalıktır."],
            ["My street is ___ than your street.", "busier", ["busyer", "more busy", "busy"], "busy → busier.", "Benim sokağım seninkinden daha hareketli."],
            ["This is ___ bike. He loves it.", "Ali's", ["Ali", "Alis", "Ali is"], "Sahiplik: 's.", "Bu Ali'nin bisikleti. Onu çok seviyor."],
            ["My ___ room is very tidy.", "sister's", ["sisters", "sister", "sister is"], "Tekil isme 's.", "Kız kardeşimin odası çok düzenli."],
            ["The tower is ___ than the mosque.", "taller", ["more tall", "tall", "tallest"], "tall → taller.", "Kule camiden daha uzundur."],
            ["The zoo is ___ from my house than the park.", "farther", ["farer", "more far", "far"], "far → farther.", "Hayvanat bahçesi evime parktan daha uzaktır."],
            ["There ___ a big square in the city centre.", "is", ["are", "be", "am"], "Tekil: there is.", "Şehir merkezinde büyük bir meydan var."],
            ["There ___ many cafés on this street.", "are", ["is", "be", "am"], "Çoğul: there are.", "Bu sokakta birçok kafe var."],
            ["A tent is ___ than a house.", "smaller", ["more small", "small", "smallest"], "small → smaller.", "Bir çadır evden daha küçüktür."],
            ["Living in a village is ___ than living in a city.", "more peaceful", ["peacefuler", "peaceful", "most peaceful"], "peaceful → more peaceful.", "Köyde yaşamak şehirde yaşamaktan daha huzurludur."],
            ["We ___ to the park every Sunday.", "go", ["goes", "going", "are go"], "We ile fiil yalın: go.", "Her pazar parka gideriz."],
            ["The clock tower is ___ than the bridge.", "older", ["more old", "old", "oldest"], "old → older.", "Saat kulesi köprüden daha eskidir."]
          ],
          sorular: [
            S("\"beautiful\" sıfatının karşılaştırma hâli hangisidir?", ["more beautiful", "beautifuler", "beautifullest", "most beautiful than"], "Uzun sıfatlarda more."),
            S("\"Bu Elif'in odası.\" cümlesinin İngilizcesi hangisidir?", ["This is Elif's room.", "This is Elifs room.", "This is room Elif.", "This Elif is room."], "Sahiplik: 's.")
          ]
        }
      ]
    },
    {
      id: "en6", ad: "Life in the World (Dünya'da Yaşam)",
      konular: [
        {
          id: "en6k1", ad: "Yiyecek Türleri ve Restoranda Sipariş", video: "ISinHrFoQ48",
          ozet: ["Yiyecek grupları: fruit, vegetables, dairy products, meat, grains, sweets", "Restoranda: menu, waiter, order, bill, starter, main course, dessert", "Can I have the menu, please? – Here you are.", "I'd like a bowl of soup. · Anything else? · Can I pay by card?", "Ölçü kalıpları: a glass of water, a bowl of soup, a slice of cake, a cup of tea"],
          anlatim: [
            "Yiyecekleri gruplara ayırabiliriz: fruit (meyveler), vegetables (sebzeler), dairy products (süt ürünleri: milk, cheese, yoghurt), meat and fish (et ve balık), grains (tahıllar: bread, rice, pasta), sweets (tatlılar).",
            "Restoranda kullanılan kelimeler: menu (menü), waiter/waitress (garson), order (sipariş vermek), starter (başlangıç), main course (ana yemek), dessert (tatlı), drinks (içecekler), bill (hesap), tip (bahşiş).",
            "Sipariş verirken: 'Can I have the menu, please?' 'I'd like a plate of pasta and a glass of orange juice.' Garson: 'Anything else?' 'What would you like to drink?' Ödeme: 'Can I have the bill, please?' 'Can I pay by card?'",
            "Sayılamayan yiyecekleri ölçü kalıplarıyla söyleriz: a glass of milk (bir bardak süt), a cup of tea (bir fincan çay), a bowl of soup (bir kâse çorba), a slice of bread (bir dilim ekmek), a bottle of water (bir şişe su), a piece of cake (bir parça kek)."
          ],
          kelimeler: [["fruit", "meyve"], ["vegetables", "sebzeler"], ["dairy products", "süt ürünleri"], ["grains", "tahıllar"], ["meat", "et"], ["fish", "balık"], ["chicken", "tavuk"], ["sweets", "tatlılar, şekerlemeler"], ["menu", "menü"], ["waiter", "garson (erkek)"], ["waitress", "garson (kadın)"], ["chef", "şef aşçı"], ["order", "sipariş vermek"], ["starter", "başlangıç yemeği"], ["main course", "ana yemek"], ["dessert", "tatlı"], ["drinks", "içecekler"], ["bill", "hesap"], ["tip", "bahşiş"], ["table for two", "iki kişilik masa"], ["a glass of", "bir bardak"], ["a cup of", "bir fincan"], ["a bowl of", "bir kâse"], ["a slice of", "bir dilim"], ["a bottle of", "bir şişe"], ["a piece of", "bir parça"], ["a plate of", "bir tabak"], ["soup", "çorba"], ["salad", "salata"], ["kebab", "kebap"], ["pizza", "pizza"], ["pasta", "makarna"], ["hamburger", "hamburger"], ["chips", "patates kızartması"], ["baklava", "baklava"], ["lemonade", "limonata"], ["ayran", "ayran"], ["delicious", "lezzetli"], ["spicy", "acı, baharatlı"], ["salty", "tuzlu"], ["sweet", "tatlı (tat)"], ["sour", "ekşi"], ["fresh", "taze"], ["healthy", "sağlıklı"], ["unhealthy", "sağlıksız"], ["food festival", "yemek festivali"], ["street food", "sokak yemeği"], ["traditional", "geleneksel"], ["pay by card", "kartla ödemek"], ["pay in cash", "nakit ödemek"]],
          sorular: [
            S("\"Hesabı alabilir miyim?\" cümlesinin İngilizcesi hangisidir?", ["Can I have the bill, please?", "Can I have the menu, please?", "I'd like a dessert.", "Can I pay in cash?"], "bill = hesap."),
            S("Hangisi bir süt ürünüdür?", ["cheese", "apple", "rice", "chicken"], "cheese = peynir.")
          ]
        },
        {
          id: "en6k2", ad: "Can (izin), Have got, How much / How many", video: "ISinHrFoQ48",
          ozet: ["İzin istemek: Can I...? – Yes, you can. / Sorry, you can't.", "have got / has got: sahiplik. She has got a new recipe.", "Sayılabilen isimler: How many apples? · Sayılamayan: How much milk?", "some (olumlu), any (olumsuz ve soru)", "Sayılamayanlar: water, milk, bread, sugar, rice, cheese, juice"],
          anlatim: [
            "İzin isterken can kullanırız: 'Can I sit here?' 'Can I pay in cash?' Cevaplar: 'Yes, you can.' / 'Of course.' / 'Sorry, you can't.'",
            "Sahiplik bildirmek için have got / has got kullanılır: 'I have got a sister.' 'She has got a new recipe book.' Olumsuz: haven't got / hasn't got. Soru: 'Have you got any eggs?' 'Has he got a pet?'",
            "Sayılabilen isimler tekil ve çoğul olabilir (an apple, two apples). Sayılamayan isimler çoğul olmaz (water, milk, bread, sugar, rice, cheese). Sayılabilenler için How many?, sayılamayanlar için How much? kullanılır: 'How many eggs do you need?' 'How much flour do we need?'",
            "some genellikle olumlu cümlelerde, any olumsuz ve soru cümlelerinde kullanılır: 'There is some milk in the fridge.' 'There aren't any tomatoes.' 'Have we got any sugar?'"
          ],
          bosluk: [
            ["___ I pay by card? – Yes, of course.", "Can", ["Do", "Am", "Have"], "İzin istemek: Can I...?", "Kartla ödeyebilir miyim? – Evet, tabii ki."],
            ["Can I sit here? – Sorry, you ___.", "can't", ["don't", "aren't", "haven't"], "Olumsuz izin: can't.", "Buraya oturabilir miyim? – Üzgünüm, oturamazsın."],
            ["She ___ got a new recipe book.", "has", ["have", "is", "does"], "She ile has got.", "Onun yeni bir yemek tarifi kitabı var."],
            ["I ___ got two brothers.", "have", ["has", "am", "do"], "I ile have got.", "İki erkek kardeşim var."],
            ["___ you got any eggs?", "Have", ["Has", "Do", "Are"], "You ile Have you got...?", "Hiç yumurtan var mı?"],
            ["He ___ got a pet. He doesn't like animals.", "hasn't", ["haven't", "isn't", "doesn't"], "He ile hasn't got.", "Onun evcil hayvanı yok. Hayvanları sevmez."],
            ["How ___ apples do you need?", "many", ["much", "often", "old"], "Sayılabilen isim: How many.", "Kaç tane elmaya ihtiyacın var?"],
            ["How ___ milk is there in the fridge?", "much", ["many", "often", "long"], "Sayılamayan isim: How much.", "Buzdolabında ne kadar süt var?"],
            ["How ___ sugar do you want in your tea?", "much", ["many", "old", "often"], "sugar sayılamaz: How much.", "Çayına ne kadar şeker istersin?"],
            ["There is ___ bread on the table.", "some", ["any", "a", "many"], "Olumlu cümlede some.", "Masada biraz ekmek var."],
            ["There aren't ___ tomatoes in the basket.", "any", ["some", "a", "much"], "Olumsuz cümlede any.", "Sepette hiç domates yok."],
            ["I'd like a ___ of soup, please.", "bowl", ["slice", "bottle", "piece"], "Çorba kâsede: a bowl of.", "Bir kâse çorba istiyorum, lütfen."],
            ["Can I have a ___ of water?", "glass", ["slice", "bowl", "plate"], "Su bardakta: a glass of.", "Bir bardak su alabilir miyim?"],
            ["She wants a ___ of cake.", "slice", ["glass", "bottle", "cup"], "Kek dilim: a slice of.", "O bir dilim kek istiyor."],
            ["Would you like ___ tea? – Yes, please.", "some", ["any", "many", "a"], "İkram ederken some.", "Biraz çay ister misin? – Evet, lütfen."],
            ["We haven't got ___ cheese for breakfast.", "any", ["some", "a", "many"], "Olumsuz: any.", "Kahvaltı için hiç peynirimiz yok."],
            ["Can I have the ___, please? I want to order.", "menu", ["bill", "tip", "waiter"], "Sipariş için menü istenir.", "Menüyü alabilir miyim lütfen? Sipariş vermek istiyorum."],
            ["How many ___ do you need for the cake?", "eggs", ["egg", "milk", "flour"], "How many + çoğul isim.", "Kek için kaç yumurtaya ihtiyacın var?"],
            ["My grandmother ___ got a big kitchen.", "has", ["have", "is", "are"], "She ile has.", "Büyükannemin büyük bir mutfağı var."],
            ["Can I ___ a lemonade, please?", "have", ["has", "having", "to have"], "Can I + fiil yalın.", "Bir limonata alabilir miyim lütfen?"]
          ],
          sorular: [
            S("Hangisi sayılamayan bir isimdir?", ["milk", "apple", "egg", "banana"], "milk sayılamaz."),
            S("\"How ___ bottles of water do we need?\" boşluğa hangisi gelir?", ["many", "much", "often", "old"], "bottles sayılabilir.")
          ]
        }
      ]
    },
    {
      id: "en7", ad: "Life in Nature (Doğada Yaşam)",
      konular: [
        {
          id: "en7k1", ad: "Hayvanlar ve Yaşam Alanları", video: "BRZ33lRz4sw",
          ozet: ["Habitatlar: forest, jungle, desert, ocean, river, savanna, farm, polar regions", "Hayvan özellikleri: fast, slow, dangerous, huge, tiny, strong", "Lions live in the savanna. · Penguins live in Antarctica.", "Hayvan eylemleri: fly, swim, climb, run, hunt, jump"],
          anlatim: [
            "Hayvanlar farklı yaşam alanlarında (habitat) yaşar: forest (orman), jungle (cangıl), desert (çöl), ocean (okyanus), river (nehir), savanna (savan), farm (çiftlik), polar regions (kutup bölgeleri), mountains (dağlar).",
            "'Where do camels live? – They live in the desert.' 'Polar bears live in the Arctic.' 'Monkeys live in the jungle.'",
            "Hayvanları anlatırken sıfatlar kullanırız: fast (hızlı), slow (yavaş), huge (devasa), tiny (minicik), dangerous (tehlikeli), friendly (dost canlısı), wild (vahşi), strong (güçlü).",
            "Hayvanların yapabildiklerini can ile anlatırız: 'Eagles can fly very high.' 'Fish can swim but they can't walk.' 'Monkeys can climb trees.'"
          ],
          kelimeler: [["habitat", "yaşam alanı"], ["forest", "orman"], ["jungle", "cangıl, tropik orman"], ["desert", "çöl"], ["ocean", "okyanus"], ["river", "nehir"], ["lake", "göl"], ["savanna", "savan"], ["farm", "çiftlik"], ["polar regions", "kutup bölgeleri"], ["mountain", "dağ"], ["cave", "mağara"], ["lion", "aslan"], ["tiger", "kaplan"], ["elephant", "fil"], ["giraffe", "zürafa"], ["zebra", "zebra"], ["monkey", "maymun"], ["camel", "deve"], ["snake", "yılan"], ["crocodile", "timsah"], ["polar bear", "kutup ayısı"], ["penguin", "penguen"], ["seal", "fok"], ["dolphin", "yunus"], ["whale", "balina"], ["shark", "köpek balığı"], ["eagle", "kartal"], ["owl", "baykuş"], ["bear", "ayı"], ["wolf", "kurt"], ["fox", "tilki"], ["deer", "geyik"], ["squirrel", "sincap"], ["frog", "kurbağa"], ["fly", "uçmak"], ["swim", "yüzmek"], ["climb", "tırmanmak"], ["hunt", "avlanmak"], ["jump", "zıplamak"], ["run fast", "hızlı koşmak"], ["huge", "devasa"], ["tiny", "minicik"], ["dangerous", "tehlikeli"], ["wild", "vahşi"], ["friendly", "dost canlısı"], ["protect", "korumak"], ["nature", "doğa"], ["tree", "ağaç"], ["flower", "çiçek"]],
          sorular: [
            S("Develerin yaşadığı yer hangisidir?", ["desert", "ocean", "jungle", "polar regions"], "Camels live in the desert."),
            S("\"Eagles can fly.\" cümlesinin anlamı nedir?", ["Kartallar uçabilir.", "Kartallar yüzebilir.", "Kartallar koşamaz.", "Kartallar tırmanır."], "fly = uçmak.")
          ]
        },
        {
          id: "en7k2", ad: "Can (yetenek), Must, En üstünlük (Superlatives)", video: "BRZ33lRz4sw",
          ozet: ["can / can't: yetenek. Cheetahs can run very fast.", "must: zorunluluk. Birds must fly south in winter.", "Where do ... live? – They live in ...", "En üstünlük: the + sıfat-est: the fastest, the biggest", "Uzun sıfat: the most + sıfat: the most dangerous", "good → the best · bad → the worst"],
          anlatim: [
            "Bir hayvanın ya da kişinin yapabildiklerini can, yapamadıklarını can't ile anlatırız: 'Kangaroos can jump high.' 'Penguins can't fly.' Soru: 'Can a snake climb?'",
            "Zorunluluk bildirmek için must kullanılır: 'Birds must travel long distances to find warm places.' 'We must protect wild animals.'",
            "Bir grubun içindeki en üstün olanı anlatmak için superlative kullanırız. Kısa sıfatlara the ... -est: 'The cheetah is the fastest land animal.' 'The blue whale is the biggest animal in the world.'",
            "Uzun sıfatlarda the most: 'The mosquito is the most dangerous animal.' Düzensizler: good → the best, bad → the worst. Karşılaştırma ile farkı: 'A tiger is bigger than a monkey.' (iki şey) – 'The elephant is the biggest land animal.' (grubun en'i)"
          ],
          bosluk: [
            ["Cheetahs ___ run very fast.", "can", ["can't", "must", "are"], "Yetenek: can.", "Çitalar çok hızlı koşabilir."],
            ["Penguins ___ fly, but they can swim.", "can't", ["can", "must", "don't"], "Yapamamak: can't.", "Penguenler uçamaz ama yüzebilir."],
            ["___ a frog jump? – Yes, it can.", "Can", ["Does", "Is", "Must"], "Yetenek sorusu: Can...?", "Kurbağa zıplayabilir mi? – Evet, zıplayabilir."],
            ["We ___ protect wild animals.", "must", ["mustn't", "can't", "don't"], "Zorunluluk: must.", "Vahşi hayvanları korumalıyız."],
            ["Birds ___ fly south in winter to find food.", "must", ["mustn't", "can't", "doesn't"], "Zorunluluk: must.", "Kuşlar kışın yiyecek bulmak için güneye uçmak zorundadır."],
            ["The cheetah is the ___ land animal.", "fastest", ["faster", "most fast", "fast"], "fast → the fastest.", "Çita en hızlı kara hayvanıdır."],
            ["The blue whale is the ___ animal in the world.", "biggest", ["bigest", "bigger", "most big"], "big → the biggest.", "Mavi balina dünyadaki en büyük hayvandır."],
            ["The mosquito is the ___ dangerous animal.", "most", ["more", "much", "very"], "Uzun sıfat: the most.", "Sivrisinek en tehlikeli hayvandır."],
            ["A tiger is ___ than a monkey.", "bigger", ["biggest", "big", "more big"], "İki şey: comparative.", "Kaplan maymundan daha büyüktür."],
            ["This is the ___ day of my life!", "best", ["better", "goodest", "good"], "good → the best.", "Bu hayatımın en güzel günü!"],
            ["Where ___ camels live? – In the desert.", "do", ["does", "are", "is"], "Camels (çoğul) ile do.", "Develer nerede yaşar? – Çölde."],
            ["Where does a polar bear ___?", "live", ["lives", "living", "lived"], "does + fiil yalın.", "Kutup ayısı nerede yaşar?"],
            ["The giraffe is the ___ animal in the zoo.", "tallest", ["taller", "most tall", "tall"], "tall → the tallest.", "Zürafa hayvanat bahçesindeki en uzun hayvandır."],
            ["The turtle is the ___ animal in the race.", "slowest", ["slower", "most slow", "slow"], "slow → the slowest.", "Kaplumbağa yarıştaki en yavaş hayvandır."],
            ["Monkeys can ___ trees very well.", "climb", ["climbs", "climbing", "to climb"], "can + fiil yalın.", "Maymunlar ağaçlara çok iyi tırmanabilir."],
            ["The Sahara is the ___ desert in the world.", "hottest", ["hotest", "hotter", "most hot"], "hot → the hottest.", "Sahra dünyanın en sıcak çölüdür."],
            ["You ___ feed the animals in the zoo. It's forbidden.", "mustn't", ["must", "can", "have"], "Yasak: mustn't.", "Hayvanat bahçesinde hayvanları beslememelisin. Yasak."],
            ["The owl is the ___ bird in the forest. It is very clever.", "most intelligent", ["intelligentest", "more intelligent", "intelligent"], "Uzun sıfat: the most.", "Baykuş ormandaki en zeki kuştur. Çok akıllıdır."],
            ["Elephants ___ swim. They are good swimmers!", "can", ["can't", "mustn't", "doesn't"], "Yetenek: can.", "Filler yüzebilir. İyi yüzücüdürler!"],
            ["Today is the ___ day of the year. It's freezing!", "coldest", ["colder", "most cold", "cold"], "cold → the coldest.", "Bugün yılın en soğuk günü. Buz gibi!"]
          ],
          sorular: [
            S("\"dangerous\" sıfatının en üstünlük hâli hangisidir?", ["the most dangerous", "the dangerousest", "more dangerous", "the more dangerous"], "Uzun sıfat: the most."),
            S("\"Penguenler uçamaz.\" cümlesinin İngilizcesi hangisidir?", ["Penguins can't fly.", "Penguins can fly.", "Penguins must fly.", "Penguins don't swim."], "can't = yapamaz.")
          ]
        }
      ]
    },
    {
      id: "en8", ad: "Life in the Universe & Future (Evren ve Gelecek)",
      konular: [
        {
          id: "en8k1", ad: "Dünya Gezegeni ve Tatil Planları", video: "rRwvrtfm9Hc",
          ozet: ["Planet Earth: continent, ocean, mountain, desert, North Pole, equator", "Tatil yerleri: seaside, mountains, village, abroad, campsite, hotel", "Tatil etkinlikleri: go camping, go sightseeing, sunbathe, go hiking, visit museums", "What are you going to do in the summer holiday?"],
          anlatim: [
            "Dünyamız (Planet Earth) kıtalardan (continents) ve okyanuslardan (oceans) oluşur. Yedi kıta vardır: Asia, Europe, Africa, North America, South America, Australia, Antarctica. Ekvator (equator) Dünya'yı ikiye böler; Kuzey Kutbu (North Pole) ve Güney Kutbu (South Pole) en soğuk yerlerdir.",
            "Tatil yerleri: seaside (deniz kenarı), mountains (dağlar), countryside (kırsal), village (köy), abroad (yurt dışı), campsite (kamp alanı), hotel (otel), summer house (yazlık).",
            "Tatil etkinlikleri: go camping (kampa gitmek), go hiking (doğa yürüyüşü yapmak), go sightseeing (gezip görmek), sunbathe (güneşlenmek), build sandcastles (kumdan kale yapmak), visit museums (müze gezmek), take photos (fotoğraf çekmek).",
            "'Where are you going to spend your holiday?' – 'We are going to stay at my grandparents' summer house.'"
          ],
          kelimeler: [["planet", "gezegen"], ["Earth", "Dünya"], ["continent", "kıta"], ["ocean", "okyanus"], ["equator", "ekvator"], ["North Pole", "Kuzey Kutbu"], ["South Pole", "Güney Kutbu"], ["Asia", "Asya"], ["Europe", "Avrupa"], ["Africa", "Afrika"], ["Antarctica", "Antarktika"], ["space", "uzay"], ["Moon", "Ay"], ["Sun", "Güneş"], ["star", "yıldız"], ["holiday", "tatil"], ["summer holiday", "yaz tatili"], ["seaside", "deniz kenarı"], ["countryside", "kırsal bölge"], ["abroad", "yurt dışı"], ["campsite", "kamp alanı"], ["hotel", "otel"], ["summer house", "yazlık"], ["go camping", "kampa gitmek"], ["go hiking", "doğa yürüyüşüne gitmek"], ["go sightseeing", "gezip görmek"], ["go fishing", "balığa gitmek"], ["sunbathe", "güneşlenmek"], ["build sandcastles", "kumdan kale yapmak"], ["visit museums", "müze gezmek"], ["take photos", "fotoğraf çekmek"], ["swim in the sea", "denizde yüzmek"], ["stay", "kalmak"], ["spend", "geçirmek (zaman)"], ["plan", "plan"], ["pack", "bavul hazırlamak"], ["suitcase", "bavul"], ["passport", "pasaport"], ["ticket", "bilet"], ["sunscreen", "güneş kremi"], ["sunglasses", "güneş gözlüğü"], ["next week", "gelecek hafta"], ["next summer", "gelecek yaz"], ["tomorrow", "yarın"], ["tonight", "bu gece"], ["this weekend", "bu hafta sonu"], ["trip", "gezi"], ["journey", "yolculuk"]],
          sorular: [
            S("\"go sightseeing\" ne demektir?", ["Gezip görmek", "Kampa gitmek", "Güneşlenmek", "Balığa gitmek"], "sightseeing = turistik yerleri gezmek."),
            S("Dünya'yı kuzey ve güney olarak ikiye bölen hayalî çizgi hangisidir?", ["equator", "North Pole", "continent", "ocean"], "equator = ekvator.")
          ]
        },
        {
          id: "en8k2", ad: "Be Going To (Gelecek Planları)", video: "rRwvrtfm9Hc",
          ozet: ["Plan: am/is/are + going to + fiil", "I am going to visit my grandparents.", "Olumsuz: She isn't going to travel by plane.", "Soru: Are you going to go camping? – Yes, I am.", "Zaman ifadeleri: tomorrow, next week, next summer, this weekend, tonight"],
          anlatim: [
            "Önceden planladığımız gelecek işleri be going to ile anlatırız: özne + am/is/are + going to + fiil yalın. 'I am going to visit my cousins next summer.' 'We are going to go camping this weekend.'",
            "Olumsuz cümlede am/is/are'dan sonra not gelir: 'He isn't going to stay at a hotel.' 'They aren't going to travel abroad.'",
            "Soru cümlesinde am/is/are başa gelir: 'Are you going to swim in the sea?' – 'Yes, I am.' / 'No, I'm not.' 'What is she going to do on Saturday?'",
            "Gelecek zaman ifadeleri: tomorrow (yarın), tonight (bu gece), next week (gelecek hafta), next month, next year, next summer, this weekend (bu hafta sonu), in two days (iki gün içinde)."
          ],
          bosluk: [
            ["I ___ going to visit my grandparents next week.", "am", ["is", "are", "be"], "I ile am going to.", "Gelecek hafta büyükannemleri ziyaret edeceğim."],
            ["We are going to ___ camping this weekend.", "go", ["goes", "going", "went"], "going to + fiil yalın.", "Bu hafta sonu kampa gideceğiz."],
            ["She ___ going to travel by plane.", "isn't", ["aren't", "doesn't", "don't"], "She ile isn't going to.", "O uçakla seyahat etmeyecek."],
            ["___ you going to swim in the sea? – Yes, I am.", "Are", ["Is", "Do", "Will"], "You ile Are...going to?", "Denizde yüzecek misin? – Evet, yüzeceğim."],
            ["What ___ he going to do tomorrow?", "is", ["are", "does", "do"], "He ile is.", "O yarın ne yapacak?"],
            ["They are going to ___ a sandcastle.", "build", ["builds", "building", "built"], "going to + fiil yalın.", "Onlar kumdan bir kale yapacaklar."],
            ["Is your father going to drive? – No, he ___.", "isn't", ["doesn't", "aren't", "not"], "He ile kısa cevap: isn't.", "Baban araba kullanacak mı? – Hayır, kullanmayacak."],
            ["My family ___ going to stay at a hotel.", "is", ["are", "am", "be"], "My family (tekil) ile is.", "Ailem bir otelde kalacak."],
            ["I'm going to take my ___ to protect my skin.", "sunscreen", ["passport", "ticket", "sandcastle"], "Cildi korumak için güneş kremi.", "Cildimi korumak için güneş kremimi alacağım."],
            ["We are going to visit Paris ___ summer.", "next", ["last", "yesterday", "ago"], "Gelecek: next summer.", "Gelecek yaz Paris'i ziyaret edeceğiz."],
            ["Where ___ you going to spend your holiday?", "are", ["is", "do", "does"], "You ile are.", "Tatilini nerede geçireceksin?"],
            ["They aren't going to ___ abroad this year.", "travel", ["travels", "travelling", "travelled"], "going to + fiil yalın.", "Bu yıl yurt dışına gitmeyecekler."],
            ["Look at the clouds! It ___ going to rain.", "is", ["are", "am", "does"], "It ile is.", "Bulutlara bak! Yağmur yağacak."],
            ["Elif is going to ___ photos of the mountains.", "take", ["takes", "taking", "took"], "going to + fiil yalın.", "Elif dağların fotoğraflarını çekecek."],
            ["My brother and I ___ going to go fishing.", "are", ["is", "am", "be"], "İki kişi (we) ile are.", "Erkek kardeşim ve ben balığa gideceğiz."],
            ["I'm not going to ___ TV tonight. I'm going to read.", "watch", ["watches", "watching", "watched"], "going to + fiil yalın.", "Bu gece televizyon izlemeyeceğim. Kitap okuyacağım."],
            ["What are you going to do ___ weekend?", "this", ["last", "ago", "yesterday"], "this weekend = bu hafta sonu.", "Bu hafta sonu ne yapacaksın?"],
            ["He is going to ___ his suitcase tonight.", "pack", ["packs", "packing", "packed"], "going to + fiil yalın.", "Bu gece bavulunu hazırlayacak."],
            ["Are they going to visit the museum? – Yes, they ___.", "are", ["do", "is", "will"], "They ile kısa cevap: are.", "Müzeyi ziyaret edecekler mi? – Evet, edecekler."],
            ["The Earth ___ around the Sun.", "goes", ["is going to go", "go", "going"], "Genel doğru: geniş zaman.", "Dünya Güneş'in etrafında döner."]
          ],
          sorular: [
            S("\"Yarın müzeyi ziyaret edeceğiz.\" cümlesinin İngilizcesi hangisidir?", ["We are going to visit the museum tomorrow.", "We visit the museum yesterday.", "We is going to visit the museum tomorrow.", "We going to visit the museum tomorrow."], "are going to + fiil."),
            S("\"She is going to ___ a cake.\" boşluğa hangisi gelir?", ["make", "makes", "making", "made"], "going to + fiil yalın.")
          ]
        }
      ]
    }
  ]
};
})();
