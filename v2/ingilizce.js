window.ICERIK = window.ICERIK || {};
// 6. sınıf İngilizce - Maarif Modeli 8 tema. Her temada "Kelimeler" ve "Dil Yapısı" konuları.
// kelimeler: [[İngilizce, Türkçe]] · bosluk: [cümle (___), doğru, [yanlışlar], açıklama]
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.ingilizce = {
  ad: "İngilizce", ikon: "🔤", renk: "#8b5cf6",
  uniteler: [
    {
      id: "en1", ad: "School Life (Okul Hayatı)",
      konular: [
        {
          id: "en1k1", ad: "Okul Kelimeleri ve Özel Günler",
          ozet: ["principal: okul müdürü · librarian: kütüphaneci", "classroom: sınıf · canteen: kantin · playground: oyun bahçesi", "Republic Day: Cumhuriyet Bayramı (29 Ekim)", "Children's Day: Çocuk Bayramı (23 Nisan)", "Teachers' Day: Öğretmenler Günü (24 Kasım)"],
          anlatim: [
            "Okulda farklı görevleri olan kişiler vardır: principal (okul müdürü), teacher (öğretmen), student (öğrenci), librarian (kütüphaneci), school nurse (okul hemşiresi), cleaner (temizlik görevlisi).",
            "Okulun bölümleri: classroom (sınıf), library (kütüphane), canteen (kantin), gym (spor salonu), playground (oyun bahçesi), science lab (fen laboratuvarı), teachers' room (öğretmenler odası).",
            "Okulda kutladığımız özel günler: Republic Day (Cumhuriyet Bayramı – 29 Ekim), National Sovereignty and Children's Day (Ulusal Egemenlik ve Çocuk Bayramı – 23 Nisan), Teachers' Day (Öğretmenler Günü – 24 Kasım), Victory Day (Zafer Bayramı – 30 Ağustos).",
            "Okul sorumlulukları: be on time (zamanında gelmek), clean the board (tahtayı silmek), water the plants (bitkileri sulamak), help friends (arkadaşlara yardım etmek), wear a uniform (forma giymek)."
          ],
          video: "YhEPU4_3Gac",
          kelimeler: [["principal", "okul müdürü"], ["teacher", "öğretmen"], ["student", "öğrenci"], ["librarian", "kütüphaneci"], ["school nurse", "okul hemşiresi"], ["classroom", "sınıf"], ["library", "kütüphane"], ["canteen", "kantin"], ["gym", "spor salonu"], ["playground", "oyun bahçesi"], ["science lab", "fen laboratuvarı"], ["timetable", "ders programı"], ["uniform", "okul forması"], ["be on time", "zamanında gelmek"], ["clean the board", "tahtayı silmek"], ["water the plants", "bitkileri sulamak"], ["Republic Day", "Cumhuriyet Bayramı"], ["Teachers' Day", "Öğretmenler Günü"], ["Victory Day", "Zafer Bayramı"], ["celebration", "kutlama"], ["flag", "bayrak"], ["ceremony", "tören"]],
          sorular: [
            S("\"Okul müdürü\" İngilizcede nasıl söylenir?", ["principal", "librarian", "student", "nurse"], "principal = okul müdürü"),
            S("29 Ekim hangi özel gündür?", ["Republic Day", "Teachers' Day", "Victory Day", "Children's Day"], "29 Ekim Cumhuriyet Bayramı'dır: Republic Day."),
            S("\"We read books in the ___.\" Boşluğa hangisi gelir?", ["library", "canteen", "gym", "playground"], "Kitapları kütüphanede (library) okuruz."),
            S("\"Teachers' Day\" hangi tarihte kutlanır?", ["24 Kasım", "29 Ekim", "23 Nisan", "30 Ağustos"], "Öğretmenler Günü 24 Kasım'dır.")
          ]
        },
        {
          id: "en1k2", ad: "Have to / Must (Sorumluluklar ve Kurallar)",
          ozet: ["have to / has to: zorunluluk, sorumluluk → I have to wear a uniform.", "He/She/It → has to: She has to clean the board.", "don't have to: gerekli değil → We don't have to come on Sunday.", "must: kural → You must be quiet in the library.", "mustn't: yasak → You mustn't run in the corridor."],
          anlatim: [
            "Sorumluluk ve zorunlulukları anlatırken 'have to' kullanırız: 'I have to do my homework.' (Ödevimi yapmak zorundayım.) He, she, it öznelerinde 'has to' olur: 'She has to clean the board.'",
            "Bir şeyin gerekli olmadığını söylemek için 'don't have to / doesn't have to' kullanırız: 'We don't have to go to school on Saturday.' (Cumartesi okula gitmek zorunda değiliz.)",
            "Kuralları anlatırken 'must' (-meli/-malı), yasakları anlatırken 'mustn't' (-memeli) kullanırız: 'You must listen to your teacher.' 'You mustn't eat in the classroom.'",
            "Soru sorarken: 'Do you have to wear a uniform?' – 'Yes, I do. / No, I don't.' 'Does he have to come early?' – 'Yes, he does. / No, he doesn't.'"
          ],
          video: "n43-tH2748w",
          bosluk: [
            ["I ___ to wear a uniform at school.", "have", ["has", "having", "am"], "Özne 'I' olduğu için 'have to' kullanılır."],
            ["She ___ to clean the board today.", "has", ["have", "is", "do"], "He/she/it öznelerinde 'has to' kullanılır."],
            ["You ___ run in the corridor. It's dangerous.", "mustn't", ["must", "have to", "has to"], "Yasak bildirmek için 'mustn't' kullanılır."],
            ["You ___ be quiet in the library.", "must", ["mustn't", "don't", "doesn't"], "Kural bildirmek için 'must' kullanılır."],
            ["We ___ have to go to school on Sunday.", "don't", ["doesn't", "mustn't", "aren't"], "Gerekli olmadığını söylerken 'don't have to' kullanılır."],
            ["He ___ have to wear a tie.", "doesn't", ["don't", "isn't", "mustn't"], "He öznesiyle olumsuz: 'doesn't have to'."],
            ["___ you have to water the plants?", "Do", ["Does", "Are", "Have"], "'You' ile soru: 'Do you have to...?'"],
            ["___ she have to come early?", "Does", ["Do", "Is", "Has"], "'She' ile soru: 'Does she have to...?'"],
            ["Students ___ listen to the teacher carefully.", "must", ["mustn't", "has to", "doesn't"], "Öğretmeni dinlemek bir kuraldır: must."],
            ["You ___ eat in the computer lab.", "mustn't", ["must", "have to", "do"], "Bilgisayar laboratuvarında yemek yasaktır: mustn't."],
            ["My brother ___ to get up early for school.", "has", ["have", "must", "do"], "'My brother' = he → has to."],
            ["They ___ to help their friends.", "have", ["has", "is", "does"], "'They' ile 'have to' kullanılır."],
            ["You ___ shout in the classroom.", "mustn't", ["must", "have to", "do"], "Sınıfta bağırmak yasaktır: mustn't."],
            ["We ___ to be on time for the flag ceremony.", "have", ["has", "are", "does"], "We öznesiyle 'have to'."],
            ["Does he have to wear a uniform? – Yes, he ___.", "does", ["do", "is", "has"], "Does ile sorulan soruya: Yes, he does."],
            ["Do you have to clean the board? – No, I ___.", "don't", ["doesn't", "am not", "haven't"], "Do ile sorulan soruya olumsuz: No, I don't."],
            ["My sister ___ have to go to school today. It's a holiday.", "doesn't", ["don't", "mustn't", "isn't"], "Tatil olduğu için gerek yok: doesn't have to."],
            ["You must ___ your homework on time.", "do", ["does", "doing", "to do"], "must'tan sonra fiil yalın gelir: do."],
            ["Students ___ use mobile phones in the exam.", "mustn't", ["must", "have to", "has to"], "Sınavda telefon kullanmak yasaktır: mustn't."],
            ["Our teacher ___ to check our homework every day.", "has", ["have", "must", "do"], "Our teacher = he/she → has to."]
          ],
          sorular: [
            S("\"You mustn't run in the corridor.\" cümlesinin anlamı nedir?", ["Koridorda koşmamalısın.", "Koridorda koşmalısın.", "Koridorda koşabilirsin.", "Koridorda koşmak zorundasın."], "mustn't = -memeli (yasak)."),
            S("\"She ___ to do her homework.\" Boşluğa hangisi gelir?", ["has", "have", "is", "are"], "She öznesiyle 'has to' kullanılır."),
            S("\"We don't have to go to school on Saturday.\" ne anlama gelir?", ["Cumartesi okula gitmek zorunda değiliz.", "Cumartesi okula gitmemeliyiz.", "Cumartesi okula gitmeliyiz.", "Cumartesi okula gidiyoruz."], "don't have to = zorunda değil.")
          ]
        }
      ]
    },
    {
      id: "en2", ad: "Classroom Life (Sınıf Hayatı)",
      konular: [
        {
          id: "en2k1", ad: "Sayılar (100–500) ve Sıra Sayıları",
          ozet: ["100: one hundred · 250: two hundred and fifty", "345: three hundred and forty-five", "1st first · 2nd second · 3rd third · 4th fourth", "5th fifth · 9th ninth · 12th twelfth · 20th twentieth", "21st twenty-first · 32nd thirty-second · 43rd forty-third"],
          anlatim: [
            "Yüzlü sayıları söylerken önce yüzler basamağını, sonra 'and' ile onlar ve birler basamağını söyleriz: 125 = one hundred and twenty-five, 340 = three hundred and forty, 500 = five hundred.",
            "Onlar ve birler arasına tire (-) konur: twenty-one, forty-five, ninety-nine.",
            "Sıra sayıları sıralamayı bildirir: first (1st), second (2nd), third (3rd). Diğerlerinin çoğu sayıya '-th' eklenerek yapılır: fourth (4th), sixth (6th), tenth (10th).",
            "Düzensiz olanlara dikkat: first, second, third, fifth, eighth, ninth, twelfth. -ty ile biten sayılar '-tieth' olur: twentieth, thirtieth, fortieth, fiftieth. Birleşik olanlarda son kısım sıra sayısı olur: twenty-first, thirty-second, forty-third."
          ],
          video: "4TzgLXioDis",
          sorular: [
            S("\"Third\" hangi sıra sayısıdır?", ["3.", "13.", "30.", "33."], "third = üçüncü (3rd)."),
            S("250 sayısının İngilizcesi hangisidir?", ["two hundred and fifty", "two hundred and fifteen", "twenty-five", "two thousand and fifty"], "250 = two hundred and fifty."),
            S("\"Twelfth\" hangi sıra sayısıdır?", ["12.", "20.", "2.", "21."], "twelfth = on ikinci."),
            S("Hangisi doğru yazılmıştır?", ["ninth", "nineth", "nineeth", "nainth"], "Doğru yazılış: ninth (9th).")
          ]
        },
        {
          id: "en2k2", ad: "Günlük ve Ders Rutinleri (Sıklık Zarfları)",
          ozet: ["always (her zaman) 100%", "usually (genellikle) · often (sık sık)", "sometimes (bazen) · rarely (nadiren)", "never (asla) 0%", "Sıklık zarfı fiilden önce gelir: I always do my homework.", "be fiilinden sonra gelir: She is never late."],
          anlatim: [
            "Günlük rutinlerimizi anlatırken geniş zaman (present simple) kullanırız: 'I get up at 7 o'clock.' 'I have breakfast.' 'I go to school by bus.' He, she, it öznelerinde fiile -s eklenir: 'She gets up early.'",
            "Bir işi ne sıklıkla yaptığımızı anlatmak için sıklık zarflarını kullanırız: always (her zaman), usually (genellikle), often (sık sık), sometimes (bazen), rarely (nadiren), never (asla).",
            "Sıklık zarfları normal fiillerden önce gelir: 'I always do my homework.' 'He sometimes plays chess.' Ama 'be' fiilinden (am, is, are) sonra gelir: 'She is never late for school.'",
            "Sınıf etkinlikleri: take notes (not almak), ask questions (soru sormak), work in pairs (eşli çalışmak), do a project (proje yapmak), read aloud (sesli okumak), raise your hand (parmak kaldırmak)."
          ],
          video: "Y3BTbiUdngc",
          kelimeler: [["always", "her zaman"], ["usually", "genellikle"], ["often", "sık sık"], ["sometimes", "bazen"], ["rarely", "nadiren"], ["never", "asla, hiçbir zaman"], ["get up", "kalkmak"], ["have breakfast", "kahvaltı yapmak"], ["take notes", "not almak"], ["ask questions", "soru sormak"], ["work in pairs", "eşli çalışmak"], ["read aloud", "sesli okumak"], ["raise your hand", "parmak kaldırmak"], ["do homework", "ödev yapmak"], ["go to bed", "yatmak"], ["brush my teeth", "dişlerimi fırçalamak"]],
          bosluk: [
            ["She ___ up at 7 o'clock every day.", "gets", ["get", "getting", "got"], "She öznesiyle geniş zamanda fiile -s eklenir: gets."],
            ["I ___ my homework after school.", "do", ["does", "doing", "is"], "I öznesiyle fiil yalın kullanılır: do."],
            ["He ___ breakfast at 8 o'clock.", "has", ["have", "having", "haves"], "He öznesiyle 'have' fiili 'has' olur."],
            ["My father ___ coffee in the morning.", "drinks", ["drink", "drinking", "drinkes"], "My father = he → drinks."],
            ["We ___ to school by bus.", "go", ["goes", "going", "gos"], "We öznesiyle fiil yalın: go."],
            ["Tom ___ his teeth twice a day.", "brushes", ["brush", "brushs", "brushing"], "-sh ile biten fiillere -es eklenir: brushes."],
            ["I ___ late for school. I am always on time.", "am never", ["never am", "always am", "am always"], "Sıklık zarfı 'be' fiilinden sonra gelir; her zaman zamanında geldiği için 'never late'."],
            ["She ___ her hand before she speaks.", "raises", ["raise", "raising", "raiseing"], "She öznesiyle fiile -s eklenir."],
            ["Ali ___ TV on school nights. He never watches it.", "doesn't watch", ["don't watch", "watches", "isn't watch"], "He öznesiyle olumsuz: doesn't + fiil."],
            ["___ you take notes in class?", "Do", ["Does", "Are", "Is"], "You ile soru: Do you...?"]
          ],
          sorular: [
            S("Hangisi \"her zaman\" anlamına gelir?", ["always", "never", "sometimes", "rarely"], "always = her zaman."),
            S("\"I ___ do my homework.\" (Ödevimi asla yapmam değil, HER ZAMAN yaparım.)", ["always", "never", "rarely", "sometimes"], "Her zaman = always."),
            S("Hangi cümle doğrudur?", ["She is always happy.", "She always is happy.", "Always she is happy.", "She is happy always is."], "Sıklık zarfı 'be' fiilinden sonra gelir.")
          ]
        }
      ]
    },
    {
      id: "en3", ad: "Personal Life (Kişisel Hayat)",
      konular: [
        {
          id: "en3k1", ad: "Görünüş, Vücut ve Kıyafetler",
          ozet: ["tall (uzun boylu) ↔ short (kısa boylu)", "slim (zayıf, ince) · overweight (kilolu)", "curly hair (kıvırcık saç) · straight hair (düz saç) · beard (sakal)", "What does he look like? → Dış görünüşü nasıl?", "He has got blue eyes. / She is tall."],
          anlatim: [
            "Bir kişinin dış görünüşünü sormak için 'What does he/she look like?' (Nasıl görünüyor?) sorusunu kullanırız.",
            "Boy ve vücut için 'be' fiilini kullanırız: 'He is tall.' 'She is slim.' Saç, göz, sakal gibi özellikler için 'have got / has got' kullanırız: 'She has got long curly hair.' 'He has got blue eyes and a beard.'",
            "Vücut parçaları: head (baş), face (yüz), eyes (gözler), ears (kulaklar), nose (burun), mouth (ağız), shoulders (omuzlar), arms (kollar), hands (eller), knees (dizler), feet (ayaklar).",
            "Kıyafetler: shirt (gömlek), T-shirt (tişört), trousers (pantolon), skirt (etek), dress (elbise), jacket (ceket), coat (palto), shoes (ayakkabı), boots (bot), hat (şapka), scarf (atkı), glasses (gözlük)."
          ],
          video: "P30m1izV99g",
          kelimeler: [["tall", "uzun boylu"], ["short", "kısa boylu"], ["slim", "ince, zayıf"], ["curly hair", "kıvırcık saç"], ["straight hair", "düz saç"], ["wavy hair", "dalgalı saç"], ["beard", "sakal"], ["moustache", "bıyık"], ["glasses", "gözlük"], ["shoulder", "omuz"], ["knee", "diz"], ["elbow", "dirsek"], ["neck", "boyun"], ["trousers", "pantolon"], ["skirt", "etek"], ["dress", "elbise"], ["jacket", "ceket"], ["scarf", "atkı"], ["boots", "bot, çizme"], ["handsome", "yakışıklı"], ["blonde", "sarışın"], ["young", "genç"]],
          bosluk: [
            ["My sister ___ got long straight hair.", "has", ["have", "is", "are"], "She öznesiyle 'has got' kullanılır."],
            ["My brothers ___ got brown eyes.", "have", ["has", "is", "does"], "Çoğul özne (they) ile 'have got'."],
            ["He ___ tall and slim.", "is", ["has", "have", "are"], "Boy ve vücut için 'be' fiili: He is tall."],
            ["What ___ your teacher look like?", "does", ["do", "is", "has"], "'What does he/she look like?' kalıbı."],
            ["My grandfather has got a white ___.", "beard", ["eyes", "tall", "slim"], "Dedenin beyaz sakalı (beard) var."],
            ["It's cold. Put on your ___.", "coat", ["T-shirt", "shorts", "sandals"], "Soğukta palto (coat) giyilir."],
            ["She can't see well, so she wears ___.", "glasses", ["boots", "a scarf", "a hat"], "İyi göremeyen gözlük (glasses) takar."]
          ],
          sorular: [
            S("\"What does she look like?\" sorusuna uygun cevap hangisidir?", ["She is tall and has got curly hair.", "She is kind and friendly.", "She likes reading.", "She is twelve years old."], "Look like dış görünüşü sorar."),
            S("\"Kıvırcık saç\" İngilizcede nasıl söylenir?", ["curly hair", "straight hair", "short hair", "wavy hair"], "curly = kıvırcık.")
          ]
        },
        {
          id: "en3k2", ad: "Kişilik ve Karakter",
          ozet: ["kind (nazik) · friendly (arkadaş canlısı) · funny (komik)", "hardworking (çalışkan) ↔ lazy (tembel)", "generous (cömert) · honest (dürüst) · shy (utangaç)", "What is he like? → Nasıl biri? (kişilik)", "What does he look like? → Nasıl görünüyor? (görünüş)"],
          anlatim: [
            "Bir kişinin karakterini sormak için 'What is he/she like?' (Nasıl biridir?) sorusunu kullanırız. Cevap kişilik özelliklerini anlatır: 'She is kind and hardworking.'",
            "Dikkat: 'What does he look like?' dış görünüşü, 'What is he like?' kişiliği sorar.",
            "Kişilik sıfatları: kind (nazik), friendly (arkadaş canlısı), funny (komik, eğlenceli), hardworking (çalışkan), lazy (tembel), shy (utangaç), honest (dürüst), generous (cömert), helpful (yardımsever), brave (cesur), polite (kibar), rude (kaba), clever (zeki), patient (sabırlı).",
            "Karşılaştırma ve vurgu için 'very' (çok) ve 'a bit' (biraz) kullanabiliriz: 'He is very funny.' 'She is a bit shy.'"
          ],
          video: "P30m1izV99g",
          kelimeler: [["kind", "nazik"], ["friendly", "arkadaş canlısı"], ["funny", "komik, eğlenceli"], ["hardworking", "çalışkan"], ["lazy", "tembel"], ["shy", "utangaç"], ["honest", "dürüst"], ["generous", "cömert"], ["helpful", "yardımsever"], ["brave", "cesur"], ["polite", "kibar"], ["rude", "kaba"], ["clever", "zeki"], ["patient", "sabırlı"], ["selfish", "bencil"], ["careful", "dikkatli"], ["talkative", "konuşkan"], ["calm", "sakin"]],
          bosluk: [
            ["He always helps people. He is very ___.", "helpful", ["lazy", "rude", "selfish"], "Herkese yardım eden kişi yardımseverdir: helpful."],
            ["She never tells lies. She is ___.", "honest", ["rude", "lazy", "shy"], "Asla yalan söylemeyen kişi dürüsttür: honest."],
            ["My friend makes everyone laugh. He is ___.", "funny", ["shy", "lazy", "calm"], "Herkesi güldüren kişi komiktir: funny."],
            ["Tom doesn't like working. He is ___.", "lazy", ["hardworking", "honest", "kind"], "Çalışmayı sevmeyen kişi tembeldir: lazy."],
            ["She shares her things with everyone. She is ___.", "generous", ["selfish", "rude", "lazy"], "Eşyalarını paylaşan kişi cömerttir: generous."],
            ["He is not afraid of anything. He is ___.", "brave", ["shy", "lazy", "rude"], "Hiçbir şeyden korkmayan kişi cesurdur: brave."],
            ["What ___ your best friend like? – She is kind.", "is", ["does", "do", "has"], "Kişiliği sormak için: What is she like?"],
            ["She doesn't talk much with new people. She is ___.", "shy", ["talkative", "funny", "brave"], "Yeni insanlarla az konuşan kişi utangaçtır: shy."]
          ],
          sorular: [
            S("\"What is your brother like?\" sorusuna uygun cevap hangisidir?", ["He is funny and friendly.", "He has got blue eyes.", "He is tall.", "He is wearing a jacket."], "'What is he like?' kişiliği sorar."),
            S("\"Hardworking\" kelimesinin zıt anlamlısı hangisidir?", ["lazy", "kind", "honest", "brave"], "hardworking (çalışkan) ↔ lazy (tembel).")
          ]
        }
      ]
    },
    {
      id: "en4", ad: "Family Life (Aile Hayatı)",
      konular: [
        {
          id: "en4k1", ad: "Meslekler ve İş Yerleri",
          ozet: ["doctor / nurse → hospital", "teacher → school · librarian → library", "chef / waiter → restaurant", "farmer → farm · vet → animal hospital", "firefighter → fire station · police officer → police station", "pilot → plane / airport · mechanic → garage"],
          anlatim: [
            "Aile bireylerinin mesleklerini anlatırken 'What does your father/mother do?' (Baban/annen ne iş yapar?) sorusunu sorarız. Cevap: 'He is a doctor.' 'She is an engineer.'",
            "Sesli harfle başlayan mesleklerden önce 'an' kullanılır: an engineer, an architect, an artist. Diğerlerinde 'a': a teacher, a pilot.",
            "Nerede çalıştığını sormak için 'Where does she work?' deriz. Cevap: 'She works at a hospital.' (Hastanede çalışır.)",
            "Meslekler ve iş yerleri: doctor/nurse – hospital, teacher – school, chef/waiter – restaurant, farmer – farm, vet – animal hospital, firefighter – fire station, police officer – police station, pilot – airport, mechanic – garage, cashier – supermarket, librarian – library."
          ],
          video: "O8JyyeMYLuI",
          kelimeler: [["doctor", "doktor"], ["nurse", "hemşire"], ["engineer", "mühendis"], ["architect", "mimar"], ["chef", "aşçı, şef"], ["waiter", "garson"], ["farmer", "çiftçi"], ["vet", "veteriner"], ["firefighter", "itfaiyeci"], ["police officer", "polis memuru"], ["pilot", "pilot"], ["mechanic", "tamirci"], ["cashier", "kasiyer"], ["dentist", "diş hekimi"], ["lawyer", "avukat"], ["hospital", "hastane"], ["fire station", "itfaiye istasyonu"], ["farm", "çiftlik"], ["office", "ofis"], ["factory", "fabrika"], ["flat", "apartman dairesi"], ["detached house", "müstakil ev"], ["cottage", "kır evi, kulübe"]],
          sorular: [
            S("Itfaiyeci nerede çalışır?", ["fire station", "hospital", "farm", "library"], "Firefighter works at a fire station."),
            S("\"She is ___ engineer.\" Boşluğa hangisi gelir?", ["an", "a", "the", "-"], "Sesli harfle başlayan 'engineer' kelimesinden önce 'an' gelir."),
            S("Hayvanları tedavi eden kişiye ne denir?", ["vet", "dentist", "nurse", "chef"], "vet = veteriner.")
          ]
        },
        {
          id: "en4k2", ad: "İş Rutinleri (Present Simple – He/She)",
          ozet: ["He/She/It + fiil-s: She works at a hospital.", "-sh, -ch, -o, -x → -es: watches, goes, fixes", "Sessiz + y → -ies: study → studies", "Olumsuz: He doesn't work on Sundays.", "Soru: Does she work at night? – Yes, she does."],
          anlatim: [
            "Meslek rutinlerini geniş zamanla (present simple) anlatırız. He, she, it öznelerinde fiile -s eklenir: 'She works at a hospital.' 'He helps sick animals.'",
            "-sh, -ch, -ss, -x, -o ile biten fiillere -es eklenir: watch → watches, fix → fixes, go → goes. Sessiz harf + y ile bitenlerde y düşer, -ies gelir: study → studies, fly → flies. 'Have' fiili 'has' olur.",
            "Olumsuz cümlede 'doesn't' kullanılır ve fiil yalın olur: 'He doesn't work on Sundays.' (works değil, work!)",
            "Soru cümlesinde 'Does' başa gelir, fiil yalın olur: 'Does she wear a uniform?' – 'Yes, she does. / No, she doesn't.' 'Where does he work?' – 'He works at a garage.'"
          ],
          video: "ZexYZLdpWSE",
          bosluk: [
            ["My mother ___ at a hospital.", "works", ["work", "working", "worked"], "She öznesiyle fiile -s eklenir: works."],
            ["A mechanic ___ cars.", "fixes", ["fix", "fixs", "fixing"], "-x ile biten fiile -es eklenir: fixes."],
            ["A pilot ___ planes.", "flies", ["flys", "fly", "flyes"], "Sessiz + y → -ies: flies."],
            ["My uncle ___ work on Sundays.", "doesn't", ["don't", "isn't", "not"], "He öznesiyle olumsuz: doesn't."],
            ["___ your father work at night?", "Does", ["Do", "Is", "Are"], "He öznesiyle soru: Does...?"],
            ["She doesn't ___ a uniform.", "wear", ["wears", "wearing", "wore"], "doesn't'tan sonra fiil yalın kullanılır."],
            ["Where ___ your sister work?", "does", ["do", "is", "are"], "Where does she work?"],
            ["A teacher ___ students.", "teaches", ["teach", "teachs", "teaching"], "-ch ile biten fiile -es eklenir: teaches."],
            ["A firefighter ___ out fires.", "puts", ["put", "putting", "puted"], "He öznesiyle: puts."],
            ["My parents ___ in an office.", "work", ["works", "working", "is work"], "Çoğul özne (they) ile fiil yalın: work."],
            ["A farmer ___ up very early.", "gets", ["get", "getting", "gots"], "He öznesiyle: gets."],
            ["A chef ___ delicious meals.", "cooks", ["cook", "cooking", "cookes"], "He öznesiyle: cooks."],
            ["My aunt ___ English at a school.", "teaches", ["teach", "teachs", "teaching"], "-ch ile biten fiile -es: teaches."],
            ["A vet ___ sick animals.", "helps", ["help", "helping", "helpes"], "He öznesiyle: helps."],
            ["My father ___ to work by car.", "goes", ["go", "gos", "going"], "-o ile biten fiile -es: goes."],
            ["Does your brother work at a bank? – No, he ___.", "doesn't", ["don't", "isn't", "not"], "Does sorusuna olumsuz cevap: No, he doesn't."],
            ["A student ___ hard for exams.", "studies", ["studys", "study", "studing"], "Sessiz + y → -ies: studies."],
            ["My grandparents ___ on a farm.", "live", ["lives", "living", "is live"], "Çoğul özne ile fiil yalın: live."],
            ["What ___ your mother do? – She is a nurse.", "does", ["do", "is", "are"], "Meslek sorusu: What does she do?"],
            ["He ___ his car every weekend.", "washes", ["wash", "washs", "washing"], "-sh ile biten fiile -es: washes."]
          ],
          sorular: [
            S("\"Does your mother work at a school?\" sorusuna uygun kısa cevap hangisidir?", ["Yes, she does.", "Yes, she is.", "Yes, she do.", "Yes, she works."], "Does ile sorulan soruya 'does/doesn't' ile cevap verilir."),
            S("Hangi cümle doğrudur?", ["He doesn't work on Sundays.", "He don't work on Sundays.", "He doesn't works on Sundays.", "He not work on Sundays."], "doesn't + yalın fiil.")
          ]
        }
      ]
    },
    {
      id: "en5", ad: "Life in the Neighbourhood & City (Mahalle ve Şehir)",
      konular: [
        {
          id: "en5k1", ad: "Ulaşım ve Şehirdeki Etkinlikler",
          ozet: ["by bus · by car · by train · by bike · by taxi · by ferry · by underground (metro)", "Dikkat: on foot (yürüyerek)", "How do you go to school? – I go by bus.", "festival · concert · parade · fair · street market", "bus stop (otobüs durağı) · train station (tren istasyonu)"],
          anlatim: [
            "Bir yere nasıl gittiğimizi anlatırken 'by + taşıt' kalıbını kullanırız: by bus (otobüsle), by car (arabayla), by train (trenle), by bike (bisikletle), by taxi (taksiyle), by ferry (vapurla), by plane (uçakla), by underground (metroyla). Yürüyerek gidiyorsak 'on foot' deriz.",
            "Soru: 'How do you go to school?' – 'I go to school by bus.' 'How does your father go to work?' – 'He goes to work by car.'",
            "Mahallede ve şehirde düzenlenen etkinlikler: festival (festival), concert (konser), parade (geçit töreni), fair (fuar, panayır), street market (semt pazarı), food festival (yemek festivali), firework show (havai fişek gösterisi), exhibition (sergi).",
            "Şehirdeki yerler: bus stop (otobüs durağı), train station (tren istasyonu), airport (havalimanı), square (meydan), museum (müze), bakery (fırın), pharmacy (eczane), stadium (stadyum)."
          ],
          video: "f7U4UW2BAvE",
          kelimeler: [["bus stop", "otobüs durağı"], ["train station", "tren istasyonu"], ["underground", "metro"], ["ferry", "vapur, feribot"], ["on foot", "yürüyerek"], ["traffic", "trafik"], ["traffic lights", "trafik ışıkları"], ["festival", "festival"], ["concert", "konser"], ["parade", "geçit töreni"], ["fair", "fuar, panayır"], ["street market", "semt pazarı"], ["exhibition", "sergi"], ["firework show", "havai fişek gösterisi"], ["square", "meydan"], ["museum", "müze"], ["bakery", "fırın"], ["pharmacy", "eczane"], ["neighbour", "komşu"], ["crowded", "kalabalık"], ["quiet", "sessiz, sakin"]],
          sorular: [
            S("\"Yürüyerek\" İngilizcede nasıl söylenir?", ["on foot", "by foot", "with foot", "in foot"], "Yürüyerek = on foot."),
            S("\"How do you go to school?\" sorusuna uygun cevap hangisidir?", ["I go by bus.", "I go at 8 o'clock.", "I go with happy.", "I go to the school."], "'How' nasıl gittiğimizi sorar."),
            S("Vapurla gitmek nasıl söylenir?", ["by ferry", "by train", "by plane", "on foot"], "ferry = vapur, feribot.")
          ]
        },
        {
          id: "en5k2", ad: "Planlar (be going to)",
          ozet: ["be going to: gelecek planları", "I am going to visit the museum.", "She is going to watch the parade.", "We/They are going to go to the concert.", "Olumsuz: I'm not going to... · Soru: Are you going to...?"],
          anlatim: [
            "Önceden planladığımız gelecek işleri anlatırken 'be going to + fiil' kalıbını kullanırız: 'I am going to visit my grandparents this weekend.' (Bu hafta sonu büyükanne ve büyükbabamı ziyaret edeceğim.)",
            "Özneye göre 'be' fiili değişir: I am going to, he/she/it is going to, we/you/they are going to.",
            "Olumsuz: 'I'm not going to go to the fair.' 'She isn't going to come.' Soru: 'Are you going to watch the parade?' – 'Yes, I am. / No, I'm not.' 'Is he going to take the bus?'",
            "Zaman ifadeleri: tomorrow (yarın), this weekend (bu hafta sonu), next week (gelecek hafta), next summer (gelecek yaz), tonight (bu gece)."
          ],
          video: "mBqyJdJcSe8",
          bosluk: [
            ["I ___ going to visit the museum tomorrow.", "am", ["is", "are", "do"], "I öznesiyle 'am going to'."],
            ["She ___ going to watch the parade.", "is", ["am", "are", "does"], "She öznesiyle 'is going to'."],
            ["We ___ going to go to the concert next week.", "are", ["is", "am", "do"], "We öznesiyle 'are going to'."],
            ["They are going to ___ the food festival.", "visit", ["visits", "visiting", "visited"], "'going to'dan sonra fiil yalın gelir."],
            ["___ you going to take the bus?", "Are", ["Is", "Do", "Am"], "You ile soru: Are you going to...?"],
            ["He ___ going to come to the fair. He is ill.", "isn't", ["aren't", "don't", "not"], "He öznesiyle olumsuz: isn't going to."],
            ["My parents are going to ___ a new car next year.", "buy", ["buys", "buying", "bought"], "'going to'dan sonra fiil yalın: buy."],
            ["___ your sister going to join the parade?", "Is", ["Are", "Does", "Do"], "She öznesiyle soru: Is she going to...?"],
            ["We ___ going to take the ferry tomorrow.", "are", ["is", "am", "do"], "We öznesiyle 'are going to'."],
            ["My uncle is going to ___ us to the fair.", "take", ["takes", "taking", "took"], "'going to'dan sonra fiil yalın: take."],
            ["I'm not going to ___ the bus. I'm going to walk.", "take", ["takes", "taking", "took"], "'going to'dan sonra fiil yalın: take."],
            ["Are you going to watch the concert? – Yes, I ___.", "am", ["do", "are", "will"], "Are you...? sorusuna: Yes, I am."],
            ["They ___ going to visit the exhibition next week.", "are", ["is", "am", "does"], "They öznesiyle 'are going to'."],
            ["It ___ going to rain tomorrow. Take your umbrella.", "is", ["are", "am", "does"], "It öznesiyle 'is going to'."],
            ["Is he going to cycle to the park? – No, he ___.", "isn't", ["doesn't", "aren't", "won't"], "Is he...? sorusuna olumsuz: No, he isn't."],
            ["What ___ you going to do this weekend?", "are", ["is", "do", "does"], "What are you going to do?"]
          ],
          sorular: [
            S("\"We are going to watch the fireworks tonight.\" cümlesinin anlamı nedir?", ["Bu gece havai fişekleri izleyeceğiz.", "Dün gece havai fişekleri izledik.", "Her gece havai fişek izleriz.", "Havai fişekleri izliyoruz."], "be going to = gelecek plan."),
            S("Hangi cümle doğrudur?", ["She is going to visit the museum.", "She are going to visit the museum.", "She going to visit the museum.", "She is going to visits the museum."], "She + is going to + yalın fiil.")
          ]
        }
      ]
    },
    {
      id: "en6", ad: "Life in the World & Culture (Dünya ve Kültür)",
      konular: [
        {
          id: "en6k1", ad: "Ülkeler, Milliyetler ve Diller",
          ozet: ["Turkey → Turkish → Turkish", "Germany → German · France → French · Italy → Italian", "Spain → Spanish · Japan → Japanese · China → Chinese", "Brazil → Brazilian → Portuguese", "Where are you from? – I'm from Italy. I'm Italian.", "What language do you speak? – I speak Italian."],
          anlatim: [
            "Nereli olduğumuzu sormak için 'Where are you from?' deriz. Cevap: 'I'm from Turkey. I'm Turkish.' (Türkiye'denim. Türküm.)",
            "Ülke adı ile milliyet farklıdır: Germany (Almanya) → German (Alman), France (Fransa) → French (Fransız), Japan (Japonya) → Japanese (Japon), Spain (İspanya) → Spanish (İspanyol), the UK (Birleşik Krallık) → British (İngiliz).",
            "Konuşulan dili sormak için 'What language do they speak in Brazil?' deriz. Cevap: 'They speak Portuguese.' Bazı ülkelerde konuşulan dil milliyetten farklıdır: Brezilya'da Portekizce, Meksika'da İspanyolca, Mısır'da Arapça konuşulur.",
            "Ülke, milliyet ve dil adları İngilizcede her zaman büyük harfle başlar: Turkey, Turkish, English."
          ],
          video: "EkxpyfyDzZ4",
          sorular: [
            S("\"I'm from Japan. I'm ___.\" Boşluğa hangisi gelir?", ["Japanese", "Japan", "Japanish", "Japon"], "Japan → Japanese."),
            S("Brezilya'da hangi dil konuşulur?", ["Portuguese", "Brazilian", "Spanish", "English"], "Brazil'de Portekizce (Portuguese) konuşulur."),
            S("\"Where are you from?\" sorusuna uygun cevap hangisidir?", ["I'm from Turkey.", "I'm twelve.", "I'm fine, thanks.", "I'm a student."], "Where are you from? = Nerelisin?")
          ]
        },
        {
          id: "en6k2", ad: "Dünya Yemekleri ve Kültürel Etkinlikler",
          ozet: ["pizza → Italy · sushi → Japan · baklava → Turkey", "tacos → Mexico · croissant → France · paella → Spain", "Kültürel etkinlikler: carnival, festival, New Year, Chinese New Year", "It is famous for... → ... ile ünlüdür"],
          anlatim: [
            "Her ülkenin kendine özgü yemekleri vardır: pizza ve pasta İtalya'dan (Italian food), sushi Japonya'dan, baklava ve kebap Türkiye'den, tacos Meksika'dan, croissant Fransa'dan, paella İspanya'dan gelir.",
            "Bir yerin neyle ünlü olduğunu anlatmak için 'be famous for' kalıbını kullanırız: 'Italy is famous for pizza.' 'Turkey is famous for baklava.'",
            "Dünyadan kültürel etkinlikler: Carnival in Brazil (Brezilya'daki karnaval), Chinese New Year (Çin Yeni Yılı), Hıdırellez in Turkey, the Tomato Festival (La Tomatina) in Spain.",
            "Bir şeyi sevip sevmediğimizi söylemek için 'I like / I love / I don't like / I hate' kalıplarını kullanırız: 'I love Japanese food.' 'I don't like spicy food.'"
          ],
          video: "qoAqnrEz1mQ",
          kelimeler: [["delicious", "lezzetli"], ["spicy", "acılı, baharatlı"], ["sweet", "tatlı"], ["sour", "ekşi"], ["salty", "tuzlu"], ["dish", "yemek (tabak)"], ["traditional", "geleneksel"], ["famous for", "ile ünlü"], ["culture", "kültür"], ["carnival", "karnaval"], ["costume", "kostüm"], ["celebrate", "kutlamak"], ["custom", "gelenek, âdet"], ["recipe", "yemek tarifi"], ["taste", "tatmak, tat"], ["dessert", "tatlı (yemek sonrası)"]],
          sorular: [
            S("Sushi hangi ülkenin yemeğidir?", ["Japan", "Italy", "Mexico", "France"], "Sushi Japon yemeğidir."),
            S("\"Italy is famous ___ pizza.\" Boşluğa hangisi gelir?", ["for", "of", "in", "at"], "be famous for = ile ünlü olmak."),
            S("\"Spicy\" ne demektir?", ["acılı, baharatlı", "tatlı", "ekşi", "tuzlu"], "spicy = acılı.")
          ]
        }
      ]
    },
    {
      id: "en7", ad: "Life in Nature & Global Problems (Doğa ve Küresel Sorunlar)",
      konular: [
        {
          id: "en7k1", ad: "Doğada Etkinlikler ve Çevre Sorunları",
          ozet: ["go hiking (doğa yürüyüşü) · go camping (kamp) · go fishing (balık tutmak)", "have a picnic (piknik yapmak) · climb a mountain (dağa tırmanmak)", "air pollution (hava kirliliği) · water pollution (su kirliliği)", "global warming (küresel ısınma) · deforestation (ormansızlaşma)", "recycle (geri dönüştürmek) · plant trees (ağaç dikmek) · save water (su tasarrufu)"],
          anlatim: [
            "Doğada yapılan etkinlikler: go hiking (doğa yürüyüşüne çıkmak), go camping (kampa gitmek), go fishing (balığa gitmek), have a picnic (piknik yapmak), go cycling (bisiklet sürmek), climb a mountain (dağa tırmanmak), watch birds (kuş gözlemek).",
            "Dünyanın karşı karşıya olduğu sorunlar: air pollution (hava kirliliği), water pollution (su kirliliği), global warming (küresel ısınma), deforestation (ormanların yok edilmesi), litter (çöp, çevreye atılan atık), drought (kuraklık), endangered animals (nesli tehlikedeki hayvanlar).",
            "Çözümler: recycle (geri dönüştürmek), plant trees (ağaç dikmek), save water (su tasarrufu yapmak), use public transport (toplu taşıma kullanmak), turn off the lights (ışıkları kapatmak), use less plastic (daha az plastik kullanmak), use solar energy (güneş enerjisi kullanmak)."
          ],
          video: "bk6GswgirGQ",
          kelimeler: [["go hiking", "doğa yürüyüşüne çıkmak"], ["go camping", "kampa gitmek"], ["go fishing", "balığa gitmek"], ["have a picnic", "piknik yapmak"], ["climb a mountain", "dağa tırmanmak"], ["air pollution", "hava kirliliği"], ["water pollution", "su kirliliği"], ["global warming", "küresel ısınma"], ["deforestation", "ormansızlaşma"], ["drought", "kuraklık"], ["litter", "çöp (yere atılan)"], ["endangered", "nesli tehlikede"], ["recycle", "geri dönüştürmek"], ["plant trees", "ağaç dikmek"], ["save water", "su tasarrufu yapmak"], ["public transport", "toplu taşıma"], ["environment", "çevre"], ["rubbish", "çöp"], ["protect", "korumak"], ["waste", "israf etmek, atık"]],
          sorular: [
            S("\"Global warming\" ne demektir?", ["küresel ısınma", "hava kirliliği", "kuraklık", "geri dönüşüm"], "global warming = küresel ısınma."),
            S("Hangisi çevre sorununa bir çözümdür?", ["recycle", "deforestation", "air pollution", "drought"], "recycle = geri dönüştürmek."),
            S("\"Kampa gitmek\" nasıl söylenir?", ["go camping", "go fishing", "go hiking", "go shopping"], "go camping = kampa gitmek.")
          ]
        },
        {
          id: "en7k2", ad: "Tavsiye Vermek (should / shouldn't)",
          ozet: ["should: -meli/-malı (tavsiye) → We should recycle.", "shouldn't: -memeli/-mamalı → We shouldn't waste water.", "should'dan sonra fiil yalın: should plant (should plants değil!)", "Bütün öznelerle aynı: I/He/They should...", "Soru: What should we do? – We should save energy."],
          anlatim: [
            "Tavsiye verirken 'should' (-meli, -malı), bir şeyi yapmamayı tavsiye ederken 'shouldn't' (-memeli, -mamalı) kullanırız: 'We should plant more trees.' 'We shouldn't throw litter on the ground.'",
            "'Should' bütün öznelerle aynı kalır ve kendisinden sonra fiil yalın gelir: 'He should recycle.' (He shoulds değil, should recycles değil!)",
            "Soru sorarken 'should' başa gelir: 'Should we turn off the lights?' – 'Yes, we should.' 'What should we do to save water?' – 'We should take short showers.'",
            "Çevre için tavsiyeler: You should turn off the tap. You should use public transport. You shouldn't use plastic bags. You shouldn't cut down trees."
          ],
          video: "7VtGUU7lmtw",
          bosluk: [
            ["We ___ throw litter in the park. It's bad for nature.", "shouldn't", ["should", "must", "have to"], "Doğaya zarar veren bir şeyi yapmamayı tavsiye ederken 'shouldn't' kullanılır."],
            ["We ___ plant more trees.", "should", ["shouldn't", "doesn't", "aren't"], "Ağaç dikmek iyi bir tavsiyedir: should."],
            ["You should ___ off the lights when you leave.", "turn", ["turns", "turning", "turned"], "should'dan sonra fiil yalın gelir: turn."],
            ["People ___ waste water.", "shouldn't", ["should", "don't should", "not should"], "Su israfı yapılmamalı: shouldn't."],
            ["He should ___ public transport.", "use", ["uses", "using", "to use"], "should + yalın fiil: use."],
            ["What ___ we do to protect the environment?", "should", ["do", "does", "are"], "Tavsiye isterken: What should we do?"],
            ["You ___ use plastic bags. Use cloth bags.", "shouldn't", ["should", "do", "are"], "Plastik poşet kullanmamalıyız: shouldn't."],
            ["We should ___ paper, glass and plastic.", "recycle", ["recycles", "recycling", "to recycle"], "should + yalın fiil: recycle."],
            ["Factories ___ pollute the rivers.", "shouldn't", ["should", "doesn't", "isn't"], "Fabrikalar nehirleri kirletmemeli: shouldn't."],
            ["We ___ take short showers to save water.", "should", ["shouldn't", "aren't", "doesn't"], "Su tasarrufu için kısa duş tavsiye edilir: should."],
            ["You ___ leave the tap on while brushing your teeth.", "shouldn't", ["should", "must", "have to"], "Musluğu açık bırakmamalıyız: shouldn't."],
            ["She should ___ her bike to school.", "ride", ["rides", "riding", "to ride"], "should + yalın fiil: ride."],
            ["Should we feed the birds in winter? – Yes, we ___.", "should", ["shouldn't", "do", "are"], "Should sorusuna: Yes, we should."],
            ["People ___ cut down the forests.", "shouldn't", ["should", "doesn't", "isn't"], "Ormanları kesmemeliyiz: shouldn't."],
            ["We should ___ the lights when we leave the room.", "turn off", ["turn on", "turns off", "turning off"], "Odadan çıkarken ışıkları kapatmalıyız: turn off."],
            ["You ___ throw plastic bottles into the sea.", "shouldn't", ["should", "must", "do"], "Denize plastik atmamalıyız: shouldn't."],
            ["Children ___ learn about nature at school.", "should", ["shouldn't", "doesn't", "isn't"], "Doğayı öğrenmek iyi bir tavsiyedir: should."]
          ],
          sorular: [
            S("\"We shouldn't cut down trees.\" ne anlama gelir?", ["Ağaçları kesmemeliyiz.", "Ağaçları kesmeliyiz.", "Ağaç dikmeliyiz.", "Ağaçları kesiyoruz."], "shouldn't = -memeli."),
            S("Hangi cümle doğrudur?", ["She should save water.", "She shoulds save water.", "She should saves water.", "She should to save water."], "should + yalın fiil; öznede değişmez.")
          ]
        }
      ]
    },
    {
      id: "en8", ad: "Life in the Universe & Future (Evren ve Gelecek)",
      konular: [
        {
          id: "en8k1", ad: "Gezegenler ve Uzay",
          ozet: ["Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune", "the Sun (Güneş) · the Moon (Ay) · star (yıldız)", "astronaut (astronot) · rocket (roket) · spaceship (uzay gemisi)", "telescope (teleskop) · orbit (yörünge) · galaxy (galaksi)", "The Earth goes around the Sun."],
          anlatim: [
            "Güneş sistemindeki gezegenler İngilizcede: Mercury (Merkür), Venus (Venüs), Earth (Dünya), Mars (Mars), Jupiter (Jüpiter), Saturn (Satürn), Uranus (Uranüs), Neptune (Neptün).",
            "Uzayla ilgili kelimeler: the Sun (Güneş), the Moon (Ay), star (yıldız), planet (gezegen), space (uzay), astronaut (astronot), rocket (roket), spaceship (uzay gemisi), telescope (teleskop), orbit (yörünge), galaxy (galaksi), satellite (uydu).",
            "Gezegenleri karşılaştırırken sıfatların karşılaştırma hâllerini kullanırız: 'Jupiter is bigger than the Earth.' 'Mercury is the smallest planet.' 'Venus is the hottest planet.'",
            "Dünya hakkında: 'The Earth goes around the Sun.' (Dünya Güneş'in etrafında döner.) 'The Moon goes around the Earth.' 'There is water and air on the Earth.'"
          ],
          video: "Tywgl2gxpj0",
          kelimeler: [["planet", "gezegen"], ["star", "yıldız"], ["the Moon", "Ay"], ["the Sun", "Güneş"], ["the Earth", "Dünya"], ["space", "uzay"], ["astronaut", "astronot"], ["rocket", "roket"], ["spaceship", "uzay gemisi"], ["telescope", "teleskop"], ["orbit", "yörünge"], ["galaxy", "galaksi"], ["satellite", "uydu"], ["solar system", "güneş sistemi"], ["alien", "uzaylı"], ["gravity", "yer çekimi"]],
          sorular: [
            S("\"Astronaut\" ne demektir?", ["astronot", "gezegen", "yıldız", "roket"], "astronaut = astronot."),
            S("Güneş'e en yakın gezegen hangisidir?", ["Mercury", "Venus", "Mars", "Neptune"], "Mercury (Merkür) Güneş'e en yakın gezegendir."),
            S("\"The Earth goes around the Sun.\" ne anlama gelir?", ["Dünya, Güneş'in etrafında döner.", "Güneş, Dünya'nın etrafında döner.", "Ay, Dünya'nın etrafında döner.", "Dünya kendi etrafında döner."], "go around = etrafında dönmek.")
          ]
        },
        {
          id: "en8k2", ad: "Gelecek Tahminleri (will / won't)",
          ozet: ["will: gelecekle ilgili tahmin → People will live on Mars.", "won't (will not): olumsuz → Cars won't use petrol.", "will'den sonra fiil yalın: will fly (will flies değil!)", "Bütün öznelerle aynı: I/She/They will...", "Soru: Will robots teach us? – Yes, they will. / No, they won't."],
          anlatim: [
            "Gelecekle ilgili tahminlerde bulunurken 'will' kullanırız: 'In the future, people will live on Mars.' (Gelecekte insanlar Mars'ta yaşayacak.) 'Robots will do the housework.'",
            "Olumsuz cümlede 'will not' ya da kısaca 'won't' kullanırız: 'Cars won't use petrol.' (Arabalar benzin kullanmayacak.)",
            "'Will' bütün öznelerle aynıdır ve kendisinden sonra fiil yalın gelir: 'She will travel to space.' (will travels değil!)",
            "Soru sorarken 'will' başa gelir: 'Will people live on the Moon?' – 'Yes, they will. / No, they won't.' Zaman ifadeleri: in the future (gelecekte), in 2050 (2050'de), one day (bir gün), in fifty years (elli yıl içinde)."
          ],
          video: "RdTmjBbaz6Q",
          bosluk: [
            ["In the future, people ___ live on Mars.", "will", ["are", "do", "does"], "Gelecek tahmini: will."],
            ["Robots will ___ the housework.", "do", ["does", "doing", "did"], "will + yalın fiil: do."],
            ["Cars ___ use petrol in 2080. They will use electricity.", "won't", ["will", "don't", "aren't"], "Olumsuz tahmin: won't."],
            ["___ people travel to other planets?", "Will", ["Do", "Are", "Does"], "Gelecekle ilgili soru: Will...?"],
            ["She will ___ an astronaut one day.", "be", ["is", "are", "being"], "will + yalın fiil: be."],
            ["Children ___ go to school by flying cars.", "will", ["won't to", "are will", "do will"], "Gelecek tahmini: will go."],
            ["I think it ___ be very hot in the future.", "will", ["is", "does", "won't to"], "Tahmin: will be."],
            ["Will robots teach us? – No, they ___.", "won't", ["will", "don't", "aren't"], "Kısa olumsuz cevap: No, they won't."],
            ["Will we have holidays on the Moon? – Yes, we ___.", "will", ["won't", "do", "are"], "Kısa olumlu cevap: Yes, we will."],
            ["In 2070, people will ___ in smart houses.", "live", ["lives", "living", "lived"], "will + yalın fiil: live."],
            ["Doctors ___ use robots in hospitals in the future.", "will", ["are", "does", "won't to"], "Gelecek tahmini: will use."],
            ["My brother will ___ to Mars one day.", "travel", ["travels", "travelling", "travelled"], "will + yalın fiil: travel."],
            ["We ___ need paper books in the future. We will read on screens.", "won't", ["will", "don't", "aren't"], "Olumsuz tahmin: won't need."],
            ["Do you think cars ___ fly in 2100?", "will", ["are", "do", "does"], "Tahmin: will fly."],
            ["Astronauts will ___ new planets.", "discover", ["discovers", "discovering", "discovered"], "will + yalın fiil: discover."],
            ["There ___ be more electric cars in the future.", "will", ["are", "is", "does"], "Gelecek tahmini: There will be..."]
          ],
          sorular: [
            S("\"People won't drive cars in the future.\" ne anlama gelir?", ["Gelecekte insanlar araba sürmeyecek.", "Gelecekte insanlar araba sürecek.", "İnsanlar şimdi araba sürmüyor.", "İnsanlar araba sürmeli."], "won't = -meyecek."),
            S("Hangi cümle doğrudur?", ["Robots will help us.", "Robots will helps us.", "Robots wills help us.", "Robots will to help us."], "will + yalın fiil.")
          ]
        }
      ]
    },
    {
      id: "en9", ad: "Günlük Hayat Kelimeleri (Tekrar)",
      konular: [
        {
          id: "en9k1", ad: "Yiyecek ve İçecekler",
          ozet: ["Can I have some ..., please? → ... alabilir miyim, lütfen?", "I like ... / I don't like ...", "breakfast: kahvaltı · lunch: öğle yemeği · dinner: akşam yemeği", "delicious: lezzetli · hungry: aç · thirsty: susamış"],
          anlatim: ["Kahvaltıda ve yemekte sık kullandığımız kelimeler. Bir şey isterken 'Can I have some water, please?' (Biraz su alabilir miyim, lütfen?) deriz. Sevdiğimiz yiyecekleri 'I like cheese.' ya da 'I don't like onions.' şeklinde söyleriz.", "Kelimeleri öğrenmenin en iyi yolu sık tekrar etmektir. Kelime Oyunu'ndaki Eşleştir, Hızlı Kelime ve Kelime Kartları bölümleriyle her gün birkaç dakika çalışabilirsin. İngilizce kelimelere dokunduğunda doğru telaffuzu da duyarsın."],
          video: "waO3bko61PI",
          kelimeler: [["bread", "ekmek"], ["cheese", "peynir"], ["egg", "yumurta"], ["butter", "tereyağı"], ["honey", "bal"], ["jam", "reçel"], ["olive", "zeytin"], ["milk", "süt"], ["water", "su"], ["juice", "meyve suyu"], ["tea", "çay"], ["soup", "çorba"], ["rice", "pirinç, pilav"], ["meat", "et"], ["chicken", "tavuk"], ["fish", "balık"], ["apple", "elma"], ["banana", "muz"], ["orange", "portakal"], ["strawberry", "çilek"], ["grapes", "üzüm"], ["tomato", "domates"], ["potato", "patates"], ["carrot", "havuç"], ["onion", "soğan"], ["salt", "tuz"], ["sugar", "şeker"], ["cake", "pasta, kek"]],
          sorular: [
            S("\"bread\" ne demektir?", ["ekmek", "reçel", "zeytin", "süt"], "bread = ekmek"),
            S("\"tereyağı\" İngilizcede nasıl söylenir?", ["butter", "juice", "tea", "soup"], "tereyağı = butter")
          ]
        },
        {
          id: "en9k2", ad: "Evimiz ve Eşyalar",
          ozet: ["There is a ... in my room. → Odamda bir ... var.", "in: içinde · on: üstünde · under: altında", "next to: yanında · behind: arkasında · in front of: önünde", "kitchen: mutfak · bedroom: yatak odası · bathroom: banyo"],
          anlatim: ["Evimizdeki odalar ve eşyalar. Bir şeyin nerede olduğunu söylerken 'in (içinde), on (üstünde), under (altında), next to (yanında)' kullanırız: 'The cat is under the table.' (Kedi masanın altında.)", "Kelimeleri öğrenmenin en iyi yolu sık tekrar etmektir. Kelime Oyunu'ndaki Eşleştir, Hızlı Kelime ve Kelime Kartları bölümleriyle her gün birkaç dakika çalışabilirsin. İngilizce kelimelere dokunduğunda doğru telaffuzu da duyarsın."],
          video: "n4Vjvccecl0",
          kelimeler: [["kitchen", "mutfak"], ["bedroom", "yatak odası"], ["bathroom", "banyo"], ["living room", "oturma odası"], ["garden", "bahçe"], ["door", "kapı"], ["window", "pencere"], ["wall", "duvar"], ["floor", "zemin, kat"], ["stairs", "merdiven"], ["bed", "yatak"], ["table", "masa"], ["chair", "sandalye"], ["sofa", "kanepe"], ["carpet", "halı"], ["lamp", "lamba"], ["mirror", "ayna"], ["fridge", "buzdolabı"], ["oven", "fırın"], ["cupboard", "dolap"], ["shelf", "raf"], ["pillow", "yastık"], ["blanket", "battaniye"], ["towel", "havlu"], ["key", "anahtar"], ["roof", "çatı"]],
          sorular: [
            S("\"kitchen\" ne demektir?", ["mutfak", "kapı", "pencere", "duvar"], "kitchen = mutfak"),
            S("\"oturma odası\" İngilizcede nasıl söylenir?", ["living room", "stairs", "bed", "table"], "oturma odası = living room")
          ]
        },
        {
          id: "en9k3", ad: "Aile ve İnsanlar",
          ozet: ["This is my ... → Bu benim ...", "I have got ... → ... sahibim / var", "How many brothers have you got? → Kaç erkek kardeşin var?", "aunt: teyze/hala · uncle: amca/dayı · cousin: kuzen"],
          anlatim: ["Aile bireyleri ve çevremizdeki insanlar. 'This is my sister. Her name is Elif.' (Bu benim kız kardeşim. Onun adı Elif.) 'I have got two brothers.' (İki erkek kardeşim var.)", "Kelimeleri öğrenmenin en iyi yolu sık tekrar etmektir. Kelime Oyunu'ndaki Eşleştir, Hızlı Kelime ve Kelime Kartları bölümleriyle her gün birkaç dakika çalışabilirsin. İngilizce kelimelere dokunduğunda doğru telaffuzu da duyarsın."],
          video: "zHa56eIMNbo",
          kelimeler: [["mother", "anne"], ["father", "baba"], ["parents", "anne ve baba"], ["sister", "kız kardeş"], ["brother", "erkek kardeş"], ["grandmother", "büyükanne"], ["grandfather", "büyükbaba, dede"], ["aunt", "teyze, hala"], ["uncle", "amca, dayı"], ["cousin", "kuzen"], ["son", "erkek evlat"], ["daughter", "kız evlat"], ["baby", "bebek"], ["husband", "koca, eş"], ["wife", "karı, eş"], ["neighbour", "komşu"], ["friend", "arkadaş"], ["classmate", "sınıf arkadaşı"], ["boy", "erkek çocuk"], ["girl", "kız çocuk"], ["man", "adam"], ["woman", "kadın"], ["people", "insanlar"], ["twins", "ikizler"]],
          sorular: [
            S("\"mother\" ne demektir?", ["anne", "büyükanne", "büyükbaba, dede", "teyze, hala"], "mother = anne"),
            S("\"kız kardeş\" İngilizcede nasıl söylenir?", ["sister", "cousin", "son", "daughter"], "kız kardeş = sister")
          ]
        },
        {
          id: "en9k4", ad: "Duygular",
          ozet: ["How do you feel? → Nasıl hissediyorsun?", "I am happy / sad / tired.", "I feel excited. → Heyecanlı hissediyorum.", "Why are you sad? – Because ... → Neden üzgünsün? – Çünkü ..."],
          anlatim: ["Nasıl hissettiğimizi anlatırken 'I am happy.' (Mutluyum.) 'She is tired.' (O yorgun.) deriz. Birine nasıl olduğunu sormak için 'How are you?' ya da 'How do you feel?' (Nasıl hissediyorsun?) kullanırız.", "Kelimeleri öğrenmenin en iyi yolu sık tekrar etmektir. Kelime Oyunu'ndaki Eşleştir, Hızlı Kelime ve Kelime Kartları bölümleriyle her gün birkaç dakika çalışabilirsin. İngilizce kelimelere dokunduğunda doğru telaffuzu da duyarsın."],
          video: "5lhlQLY6rQQ",
          kelimeler: [["happy", "mutlu"], ["sad", "üzgün"], ["angry", "kızgın"], ["tired", "yorgun"], ["bored", "sıkılmış"], ["excited", "heyecanlı"], ["scared", "korkmuş"], ["surprised", "şaşırmış"], ["worried", "endişeli"], ["hungry", "aç"], ["thirsty", "susamış"], ["sleepy", "uykulu"], ["nervous", "gergin"], ["proud", "gururlu"], ["calm", "sakin"], ["lonely", "yalnız"], ["relaxed", "rahatlamış"], ["sick", "hasta"]],
          sorular: [
            S("\"happy\" ne demektir?", ["mutlu", "heyecanlı", "korkmuş", "şaşırmış"], "happy = mutlu"),
            S("\"yorgun\" İngilizcede nasıl söylenir?", ["tired", "hungry", "thirsty", "sleepy"], "yorgun = tired")
          ]
        },
        {
          id: "en9k5", ad: "Hava Durumu ve Mevsimler",
          ozet: ["What's the weather like? → Hava nasıl?", "It's sunny / rainy / cloudy / snowy / windy.", "spring: ilkbahar · summer: yaz · autumn: sonbahar · winter: kış", "hot: sıcak · warm: ılık · cool: serin · cold: soğuk"],
          anlatim: ["Hava durumunu sormak için 'What's the weather like today?' (Bugün hava nasıl?) deriz. Cevap: 'It's sunny and hot.' (Güneşli ve sıcak.) 'It's rainy. Take your umbrella.' (Yağmurlu. Şemsiyeni al.)", "Kelimeleri öğrenmenin en iyi yolu sık tekrar etmektir. Kelime Oyunu'ndaki Eşleştir, Hızlı Kelime ve Kelime Kartları bölümleriyle her gün birkaç dakika çalışabilirsin. İngilizce kelimelere dokunduğunda doğru telaffuzu da duyarsın."],
          video: "y-PU7KupZxo",
          kelimeler: [["sunny", "güneşli"], ["rainy", "yağmurlu"], ["cloudy", "bulutlu"], ["snowy", "karlı"], ["windy", "rüzgârlı"], ["stormy", "fırtınalı"], ["foggy", "sisli"], ["hot", "sıcak"], ["cold", "soğuk"], ["warm", "ılık"], ["cool", "serin"], ["spring", "ilkbahar"], ["summer", "yaz"], ["autumn", "sonbahar"], ["winter", "kış"], ["rain", "yağmur"], ["snow", "kar"], ["cloud", "bulut"], ["rainbow", "gökkuşağı"], ["umbrella", "şemsiye"], ["weather", "hava durumu"], ["season", "mevsim"]],
          sorular: [
            S("\"sunny\" ne demektir?", ["güneşli", "fırtınalı", "sisli", "sıcak"], "sunny = güneşli"),
            S("\"karlı\" İngilizcede nasıl söylenir?", ["snowy", "warm", "cool", "spring"], "karlı = snowy")
          ]
        },
        {
          id: "en9k6", ad: "Günler, Aylar ve Zaman",
          ozet: ["on + gün → on Monday · in + ay → in July", "What time is it? → Saat kaç?", "It's ... o'clock · half past ... (buçuk) · quarter past ... (çeyrek geçiyor)", "today: bugün · tomorrow: yarın · yesterday: dün"],
          anlatim: ["Günler ve aylar İngilizcede büyük harfle yazılır. Günlerden önce 'on', aylardan önce 'in' kullanılır: 'on Monday' (pazartesi günü), 'in July' (temmuzda). Saat sormak için 'What time is it?' deriz: 'It's half past three.' (Saat üç buçuk.)", "Kelimeleri öğrenmenin en iyi yolu sık tekrar etmektir. Kelime Oyunu'ndaki Eşleştir, Hızlı Kelime ve Kelime Kartları bölümleriyle her gün birkaç dakika çalışabilirsin. İngilizce kelimelere dokunduğunda doğru telaffuzu da duyarsın."],
          video: "oBoQuxMn4KQ",
          kelimeler: [["Monday", "pazartesi"], ["Tuesday", "salı"], ["Wednesday", "çarşamba"], ["Thursday", "perşembe"], ["Friday", "cuma"], ["Saturday", "cumartesi"], ["Sunday", "pazar"], ["January", "ocak"], ["February", "şubat"], ["March", "mart"], ["April", "nisan"], ["May", "mayıs"], ["June", "haziran"], ["July", "temmuz"], ["August", "ağustos"], ["September", "eylül"], ["October", "ekim"], ["November", "kasım"], ["December", "aralık"], ["today", "bugün"], ["tomorrow", "yarın"], ["yesterday", "dün"], ["week", "hafta"], ["month", "ay"], ["year", "yıl"], ["morning", "sabah"], ["afternoon", "öğleden sonra"], ["evening", "akşam"]],
          sorular: [
            S("\"Monday\" ne demektir?", ["pazartesi", "cumartesi", "pazar", "ocak"], "Monday = pazartesi"),
            S("\"perşembe\" İngilizcede nasıl söylenir?", ["Thursday", "March", "April", "May"], "perşembe = Thursday")
          ]
        },
        {
          id: "en9k7", ad: "Günlük Eylemler",
          ozet: ["I + fiil: I play · He/She + fiil-s: She plays", "Şu an: I am reading. (am/is/are + fiil-ing)", "wake up: uyanmak · get up: kalkmak · get dressed: giyinmek", "Olumsuz: I don't play · She doesn't play"],
          anlatim: ["Her gün yaptığımız işleri anlatan eylemler (fiiller). Geniş zamanda 'I play football every day.' deriz; he/she/it ile fiile -s eklenir: 'She plays the piano.' Şu an yapılan iş için '-ing' kullanılır: 'I am reading a book now.'", "Kelimeleri öğrenmenin en iyi yolu sık tekrar etmektir. Kelime Oyunu'ndaki Eşleştir, Hızlı Kelime ve Kelime Kartları bölümleriyle her gün birkaç dakika çalışabilirsin. İngilizce kelimelere dokunduğunda doğru telaffuzu da duyarsın."],
          video: "rCX0MilOpB8",
          kelimeler: [["wake up", "uyanmak"], ["get up", "kalkmak"], ["wash", "yıkamak"], ["brush", "fırçalamak"], ["get dressed", "giyinmek"], ["eat", "yemek"], ["drink", "içmek"], ["go", "gitmek"], ["come", "gelmek"], ["read", "okumak"], ["write", "yazmak"], ["listen", "dinlemek"], ["speak", "konuşmak"], ["play", "oynamak"], ["watch", "izlemek"], ["run", "koşmak"], ["walk", "yürümek"], ["swim", "yüzmek"], ["sleep", "uyumak"], ["cook", "yemek pişirmek"], ["clean", "temizlemek"], ["help", "yardım etmek"], ["open", "açmak"], ["close", "kapatmak"], ["buy", "satın almak"], ["sing", "şarkı söylemek"], ["draw", "çizmek"], ["study", "ders çalışmak"]],
          sorular: [
            S("\"wake up\" ne demektir?", ["uyanmak", "yemek", "içmek", "gitmek"], "wake up = uyanmak"),
            S("\"fırçalamak\" İngilizcede nasıl söylenir?", ["brush", "read", "write", "listen"], "fırçalamak = brush")
          ]
        },
        {
          id: "en9k8", ad: "Hayvanlar",
          ozet: ["A bird can fly. → Kuş uçabilir.", "A fish can't walk. → Balık yürüyemez.", "pet: evcil hayvan · wild animal: vahşi hayvan", "farm animals: cow, sheep, goat, horse, chicken"],
          anlatim: ["Hayvanların ne yapabildiğini 'can' ile anlatırız: 'A bird can fly.' (Kuş uçabilir.) 'A fish can't walk.' (Balık yürüyemez.) Evcil hayvanlara 'pet' denir: 'I have got a pet. It's a cat.'", "Kelimeleri öğrenmenin en iyi yolu sık tekrar etmektir. Kelime Oyunu'ndaki Eşleştir, Hızlı Kelime ve Kelime Kartları bölümleriyle her gün birkaç dakika çalışabilirsin. İngilizce kelimelere dokunduğunda doğru telaffuzu da duyarsın."],
          video: "zx0vjZiiFKA",
          kelimeler: [["cat", "kedi"], ["dog", "köpek"], ["bird", "kuş"], ["fish", "balık"], ["horse", "at"], ["cow", "inek"], ["sheep", "koyun"], ["goat", "keçi"], ["chicken", "tavuk"], ["duck", "ördek"], ["rabbit", "tavşan"], ["mouse", "fare"], ["lion", "aslan"], ["tiger", "kaplan"], ["elephant", "fil"], ["monkey", "maymun"], ["bear", "ayı"], ["wolf", "kurt"], ["fox", "tilki"], ["snake", "yılan"], ["turtle", "kaplumbağa"], ["frog", "kurbağa"], ["bee", "arı"], ["butterfly", "kelebek"], ["giraffe", "zürafa"], ["dolphin", "yunus"], ["owl", "baykuş"], ["squirrel", "sincap"]],
          sorular: [
            S("\"cat\" ne demektir?", ["kedi", "inek", "koyun", "keçi"], "cat = kedi"),
            S("\"balık\" İngilizcede nasıl söylenir?", ["fish", "duck", "rabbit", "mouse"], "balık = fish")
          ]
        },
        {
          id: "en9k9", ad: "Zıt Anlamlı Sıfatlar ve Renkler",
          ozet: ["Sıfat isimden önce gelir: a red car", "big ↔ small · long ↔ short · fast ↔ slow", "easy ↔ difficult · cheap ↔ expensive", "clean ↔ dirty · full ↔ empty · heavy ↔ light"],
          anlatim: ["Sıfatlar ismi niteler ve İngilizcede ismin önüne gelir: 'a big house' (büyük bir ev), 'a red car' (kırmızı bir araba). Zıt anlamlı sıfatları birlikte öğrenmek kolaylaştırır: big – small, fast – slow, easy – difficult.", "Kelimeleri öğrenmenin en iyi yolu sık tekrar etmektir. Kelime Oyunu'ndaki Eşleştir, Hızlı Kelime ve Kelime Kartları bölümleriyle her gün birkaç dakika çalışabilirsin. İngilizce kelimelere dokunduğunda doğru telaffuzu da duyarsın."],
          video: "AVgNl8kKjbI",
          kelimeler: [["big", "büyük"], ["small", "küçük"], ["long", "uzun"], ["short", "kısa"], ["fast", "hızlı"], ["slow", "yavaş"], ["old", "yaşlı, eski"], ["new", "yeni"], ["young", "genç"], ["easy", "kolay"], ["difficult", "zor"], ["cheap", "ucuz"], ["expensive", "pahalı"], ["clean", "temiz"], ["dirty", "kirli"], ["full", "dolu"], ["empty", "boş"], ["heavy", "ağır"], ["light", "hafif"], ["red", "kırmızı"], ["blue", "mavi"], ["green", "yeşil"], ["yellow", "sarı"], ["black", "siyah"], ["white", "beyaz"], ["purple", "mor"], ["pink", "pembe"], ["grey", "gri"]],
          sorular: [
            S("\"big\" ne demektir?", ["büyük", "yavaş", "yaşlı, eski", "yeni"], "big = büyük"),
            S("\"kısa\" İngilizcede nasıl söylenir?", ["short", "easy", "difficult", "cheap"], "kısa = short")
          ]
        }
      ]
    }
  ]
};
})();

// --- Ek tema kelimeleri: her temada konuyla ve günlük hayatla ilgili daha fazla kelime ---
(function () {
  const EK = {
    en1k1: [["classmate", "sınıf arkadaşı"], ["subject", "ders"], ["maths", "matematik"], ["science", "fen bilimleri"], ["history", "tarih"], ["geography", "coğrafya"], ["art", "resim"], ["music", "müzik"], ["physical education", "beden eğitimi"], ["information technology", "bilişim teknolojileri"], ["exam", "sınav"], ["mark", "not"], ["report card", "karne"], ["homework", "ev ödevi"], ["break time", "teneffüs"], ["lunch break", "öğle arası"], ["chess club", "satranç kulübü"], ["drama club", "drama kulübü"], ["school trip", "okul gezisi"], ["school bus", "okul servisi"], ["corridor", "koridor"], ["teachers' room", "öğretmenler odası"], ["notice board", "duyuru panosu"], ["backpack", "sırt çantası"], ["pencil case", "kalem kutusu"], ["ruler", "cetvel"], ["eraser", "silgi"], ["notebook", "defter"], ["dictionary", "sözlük"], ["Children's Day", "Çocuk Bayramı"], ["Youth and Sports Day", "Gençlik ve Spor Bayramı"], ["national anthem", "millî marş"], ["award", "ödül"], ["certificate", "belge, sertifika"]],
    en1k2: [["rule", "kural"], ["have to", "zorunda olmak"], ["don't have to", "zorunda olmamak"], ["must", "-meli, -malı"], ["mustn't", "-memeli (yasak)"], ["be quiet", "sessiz olmak"], ["run in the corridors", "koridorlarda koşmak"], ["wear a uniform", "forma giymek"], ["eat in class", "derste yemek yemek"], ["use a phone", "telefon kullanmak"], ["listen to the teacher", "öğretmeni dinlemek"], ["respect", "saygı göstermek"], ["tidy", "toplu, düzenli"], ["late", "geç"], ["on time", "zamanında"], ["allowed", "izin verilen"], ["forbidden", "yasak"], ["obey the rules", "kurallara uymak"], ["chew gum", "sakız çiğnemek"], ["shout", "bağırmak"], ["push", "itmek"], ["line up", "sıraya girmek"], ["wash your hands", "ellerini yıkamak"], ["keep clean", "temiz tutmak"], ["responsibility", "sorumluluk"]],
    en2k1: [["one hundred", "yüz"], ["two hundred", "iki yüz"], ["three hundred", "üç yüz"], ["four hundred", "dört yüz"], ["five hundred", "beş yüz"], ["first", "birinci"], ["second", "ikinci"], ["third", "üçüncü"], ["fourth", "dördüncü"], ["fifth", "beşinci"], ["sixth", "altıncı"], ["seventh", "yedinci"], ["eighth", "sekizinci"], ["ninth", "dokuzuncu"], ["tenth", "onuncu"], ["eleventh", "on birinci"], ["twelfth", "on ikinci"], ["twentieth", "yirminci"], ["thirtieth", "otuzuncu"], ["floor", "kat"], ["ground floor", "zemin kat"], ["page", "sayfa"], ["price", "fiyat"], ["How much?", "Ne kadar? (fiyat)"], ["How many?", "Kaç tane?"], ["date", "tarih"], ["birthday", "doğum günü"], ["number", "sayı"], ["count", "saymak"], ["half", "yarım"]],
    en2k2: [["wake up", "uyanmak"], ["take a shower", "duş almak"], ["get dressed", "giyinmek"], ["comb my hair", "saçımı taramak"], ["catch the bus", "otobüse yetişmek"], ["arrive at school", "okula varmak"], ["have lunch", "öğle yemeği yemek"], ["come back home", "eve dönmek"], ["do the shopping", "alışveriş yapmak"], ["tidy my room", "odamı toplamak"], ["set the table", "sofrayı kurmak"], ["wash the dishes", "bulaşık yıkamak"], ["feed the cat", "kediyi beslemek"], ["walk the dog", "köpeği gezdirmek"], ["watch TV", "televizyon izlemek"], ["play games", "oyun oynamak"], ["read a book", "kitap okumak"], ["revise", "tekrar etmek"], ["practise", "pratik yapmak"], ["once a week", "haftada bir"], ["twice a week", "haftada iki kez"], ["every day", "her gün"], ["on weekdays", "hafta içi"], ["at weekends", "hafta sonları"], ["in the morning", "sabahleyin"], ["in the evening", "akşamleyin"]],
    en3k1: [["overweight", "kilolu"], ["medium height", "orta boylu"], ["bald", "kel"], ["freckles", "çil"], ["eyes", "gözler"], ["ear", "kulak"], ["nose", "burun"], ["mouth", "ağız"], ["teeth", "dişler"], ["arm", "kol"], ["hand", "el"], ["finger", "parmak"], ["leg", "bacak"], ["foot", "ayak"], ["toe", "ayak parmağı"], ["back", "sırt"], ["stomach", "mide, karın"], ["shirt", "gömlek"], ["T-shirt", "tişört"], ["jeans", "kot pantolon"], ["shorts", "şort"], ["sweater", "kazak"], ["coat", "palto, mont"], ["hat", "şapka"], ["cap", "kep"], ["gloves", "eldiven"], ["socks", "çorap"], ["shoes", "ayakkabı"], ["trainers", "spor ayakkabı"], ["belt", "kemer"], ["earrings", "küpe"], ["pretty", "güzel, hoş"], ["good-looking", "yakışıklı, güzel"], ["old", "yaşlı"]],
    en3k2: [["cheerful", "neşeli"], ["stubborn", "inatçı"], ["clumsy", "sakar"], ["creative", "yaratıcı"], ["curious", "meraklı"], ["confident", "kendine güvenen"], ["jealous", "kıskanç"], ["mean", "cimri, kaba"], ["naughty", "yaramaz"], ["outgoing", "dışa dönük"], ["easygoing", "rahat, uyumlu"], ["responsible", "sorumluluk sahibi"], ["reliable", "güvenilir"], ["sensitive", "duyarlı, hassas"], ["grumpy", "huysuz"], ["sociable", "sosyal, girişken"], ["modest", "alçakgönüllü"], ["wise", "bilge"], ["loyal", "sadık"], ["hard-working", "çalışkan"], ["noisy", "gürültücü"], ["quiet", "sessiz, sakin"], ["polite", "kibar"], ["character", "karakter"], ["personality", "kişilik"]],
    en4k1: [["baker", "fırıncı"], ["butcher", "kasap"], ["hairdresser", "kuaför"], ["tailor", "terzi"], ["carpenter", "marangoz"], ["plumber", "tesisatçı"], ["electrician", "elektrikçi"], ["postman", "postacı"], ["driver", "şoför"], ["shop assistant", "tezgâhtar"], ["journalist", "gazeteci"], ["photographer", "fotoğrafçı"], ["actor", "erkek oyuncu"], ["singer", "şarkıcı"], ["artist", "sanatçı, ressam"], ["scientist", "bilim insanı"], ["programmer", "programcı"], ["accountant", "muhasebeci"], ["soldier", "asker"], ["judge", "hâkim"], ["pharmacist", "eczacı"], ["bank", "banka"], ["restaurant", "restoran"], ["shop", "dükkân"], ["workshop", "atölye"], ["garage", "garaj, tamirhane"], ["block of flats", "apartman"], ["villa", "villa"], ["job", "meslek, iş"], ["workplace", "iş yeri"]],
    en4k2: [["work", "çalışmak"], ["earn money", "para kazanmak"], ["help people", "insanlara yardım etmek"], ["work indoors", "kapalı alanda çalışmak"], ["work outdoors", "açık havada çalışmak"], ["work at night", "gece çalışmak"], ["cure", "iyileştirmek"], ["teach", "öğretmek"], ["cook", "yemek pişirmek"], ["serve", "servis yapmak"], ["fix", "tamir etmek"], ["build", "inşa etmek"], ["design", "tasarlamak"], ["grow vegetables", "sebze yetiştirmek"], ["fly a plane", "uçak uçurmak"], ["put out fires", "yangın söndürmek"], ["sell", "satmak"], ["deliver", "teslim etmek, dağıtmak"], ["take care of", "ilgilenmek, bakmak"], ["busy", "meşgul, yoğun"], ["tiring", "yorucu"], ["dangerous", "tehlikeli"], ["well-paid", "iyi maaşlı"], ["salary", "maaş"], ["colleague", "iş arkadaşı"], ["boss", "patron"], ["customer", "müşteri"], ["patient", "hasta"], ["uniform", "üniforma"], ["early", "erken"]],
    en5k1: [["bus", "otobüs"], ["taxi", "taksi"], ["tram", "tramvay"], ["metro", "metro"], ["train", "tren"], ["plane", "uçak"], ["ship", "gemi"], ["bicycle", "bisiklet"], ["motorbike", "motosiklet"], ["by car", "arabayla"], ["ticket", "bilet"], ["passenger", "yolcu"], ["airport", "havaalanı"], ["harbour", "liman"], ["bridge", "köprü"], ["street", "sokak"], ["avenue", "cadde"], ["roundabout", "döner kavşak"], ["crossroads", "kavşak"], ["pedestrian crossing", "yaya geçidi"], ["pavement", "kaldırım"], ["park", "park"], ["cinema", "sinema"], ["theatre", "tiyatro"], ["stadium", "stadyum"], ["shopping mall", "alışveriş merkezi"], ["post office", "postane"], ["hospital", "hastane"], ["mosque", "cami"], ["town hall", "belediye binası"], ["zoo", "hayvanat bahçesi"], ["turn left", "sola dön"], ["turn right", "sağa dön"], ["go straight", "düz git"]],
    en5k2: [["tomorrow", "yarın"], ["tonight", "bu gece"], ["next week", "gelecek hafta"], ["next weekend", "gelecek hafta sonu"], ["this summer", "bu yaz"], ["plan", "plan"], ["visit", "ziyaret etmek"], ["go to the cinema", "sinemaya gitmek"], ["watch a match", "maç izlemek"], ["have a party", "parti vermek"], ["buy tickets", "bilet almak"], ["meet friends", "arkadaşlarla buluşmak"], ["stay at home", "evde kalmak"], ["invite", "davet etmek"], ["prepare", "hazırlamak"], ["decorate", "süslemek"], ["join", "katılmak"], ["holiday", "tatil"], ["trip", "gezi"], ["excited", "heyecanlı"], ["can't wait", "sabırsızlanmak"], ["go sightseeing", "gezip görmek"], ["pack", "bavul hazırlamak"], ["book a hotel", "otel ayırtmak"]],
    en6k1: [["country", "ülke"], ["capital", "başkent"], ["nationality", "uyruk"], ["language", "dil"], ["Turkish", "Türk; Türkçe"], ["England", "İngiltere"], ["English", "İngiliz; İngilizce"], ["France", "Fransa"], ["French", "Fransız; Fransızca"], ["Germany", "Almanya"], ["German", "Alman; Almanca"], ["Italy", "İtalya"], ["Italian", "İtalyan; İtalyanca"], ["Spain", "İspanya"], ["Spanish", "İspanyol; İspanyolca"], ["Japan", "Japonya"], ["Japanese", "Japon; Japonca"], ["China", "Çin"], ["Chinese", "Çinli; Çince"], ["Russia", "Rusya"], ["Russian", "Rus; Rusça"], ["Greece", "Yunanistan"], ["Greek", "Yunan; Yunanca"], ["Brazil", "Brezilya"], ["Brazilian", "Brezilyalı"], ["Egypt", "Mısır"], ["Egyptian", "Mısırlı"], ["the USA", "ABD"], ["American", "Amerikalı"], ["Azerbaijan", "Azerbaycan"], ["flag", "bayrak"], ["map", "harita"], ["continent", "kıta"], ["abroad", "yurt dışı"], ["tourist", "turist"], ["passport", "pasaport"], ["come from", "-den gelmek, -li olmak"], ["speak", "konuşmak"]],
    en6k2: [["pizza", "pizza"], ["pasta", "makarna"], ["sushi", "suşi"], ["kebab", "kebap"], ["baklava", "baklava"], ["croissant", "kruvasan"], ["noodles", "erişte"], ["curry", "köri"], ["soup", "çorba"], ["meatballs", "köfte"], ["rice", "pirinç, pilav"], ["bread", "ekmek"], ["cheese", "peynir"], ["olive", "zeytin"], ["honey", "bal"], ["bake", "fırında pişirmek"], ["fry", "kızartmak"], ["boil", "haşlamak"], ["grill", "ızgara yapmak"], ["ingredient", "malzeme"], ["menu", "menü"], ["festival", "festival"], ["wedding", "düğün"], ["New Year", "Yılbaşı"], ["Ramadan Feast", "Ramazan Bayramı"], ["folk dance", "halk dansı"], ["museum", "müze"], ["delicious", "lezzetli"], ["bitter", "acı (tat)"], ["fresh", "taze"]],
    en7k1: [["forest", "orman"], ["lake", "göl"], ["river", "nehir"], ["mountain", "dağ"], ["valley", "vadi"], ["waterfall", "şelale"], ["sea", "deniz"], ["beach", "kumsal, plaj"], ["desert", "çöl"], ["island", "ada"], ["hill", "tepe"], ["field", "tarla"], ["cave", "mağara"], ["wildlife", "yaban hayatı"], ["flower", "çiçek"], ["leaf", "yaprak"], ["grass", "çimen"], ["cloud", "bulut"], ["nature", "doğa"], ["natural resources", "doğal kaynaklar"], ["plastic", "plastik"], ["glass", "cam"], ["paper", "kâğıt"], ["energy", "enerji"], ["solar energy", "güneş enerjisi"], ["wind energy", "rüzgâr enerjisi"], ["flood", "sel"], ["earthquake", "deprem"], ["forest fire", "orman yangını"], ["smoke", "duman"], ["factory", "fabrika"], ["oil spill", "petrol sızıntısı"]],
    en7k2: [["should", "-meli, -malı (tavsiye)"], ["shouldn't", "-memeli (tavsiye)"], ["advice", "tavsiye"], ["suggest", "önermek"], ["turn off the lights", "ışıkları kapatmak"], ["take shorter showers", "daha kısa duş almak"], ["use cloth bags", "bez çanta kullanmak"], ["walk or cycle", "yürümek ya da bisiklete binmek"], ["throw rubbish", "çöp atmak"], ["waste water", "suyu israf etmek"], ["cut down trees", "ağaç kesmek"], ["reuse", "yeniden kullanmak"], ["reduce", "azaltmak"], ["save energy", "enerji tasarrufu yapmak"], ["plant flowers", "çiçek dikmek"], ["clean the beach", "kumsalı temizlemek"], ["volunteer", "gönüllü"], ["campaign", "kampanya"], ["healthy", "sağlıklı"], ["harmful", "zararlı"], ["careful", "dikkatli"], ["drink water", "su içmek"], ["see a doctor", "doktora gitmek"], ["get some rest", "biraz dinlenmek"], ["eat junk food", "abur cubur yemek"]],
    en8k1: [["Mercury", "Merkür"], ["Venus", "Venüs"], ["Mars", "Mars"], ["Jupiter", "Jüpiter"], ["Saturn", "Satürn"], ["Uranus", "Uranüs"], ["Neptune", "Neptün"], ["comet", "kuyruklu yıldız"], ["meteor", "göktaşı"], ["asteroid", "asteroit"], ["universe", "evren"], ["space station", "uzay istasyonu"], ["launch", "fırlatmak"], ["land", "inmek, iniş yapmak"], ["explore", "keşfetmek"], ["discover", "bulmak, keşfetmek"], ["crater", "krater"], ["ring", "halka"], ["oxygen", "oksijen"], ["atmosphere", "atmosfer"], ["observatory", "gözlemevi"], ["Milky Way", "Samanyolu"], ["sunrise", "gün doğumu"], ["sunset", "gün batımı"], ["full moon", "dolunay"], ["crescent", "hilal"], ["sky", "gökyüzü"], ["dark", "karanlık"]],
    en8k2: [["future", "gelecek"], ["robot", "robot"], ["flying car", "uçan araba"], ["smartphone", "akıllı telefon"], ["smart home", "akıllı ev"], ["invention", "icat"], ["technology", "teknoloji"], ["artificial intelligence", "yapay zekâ"], ["drone", "insansız hava aracı"], ["virtual reality", "sanal gerçeklik"], ["3D printer", "3B yazıcı"], ["live on Mars", "Mars'ta yaşamak"], ["travel to space", "uzaya seyahat etmek"], ["probably", "muhtemelen"], ["maybe", "belki"], ["I think", "bence, sanırım"], ["I hope", "umarım"], ["one day", "bir gün"], ["change", "değişmek, değiştirmek"], ["dream", "hayal"], ["inventor", "mucit"], ["prediction", "tahmin"], ["in the future", "gelecekte"], ["computer", "bilgisayar"], ["machine", "makine"]]
  };
  for (const u of window.ICERIK.ingilizce.uniteler) for (const k of u.konular) if (EK[k.id]) {
    const var_ = new Set((k.kelimeler || []).map((x) => x[0].toLowerCase()));
    k.kelimeler = (k.kelimeler || []).concat(EK[k.id].filter((x) => !var_.has(x[0].toLowerCase())));
  }
})();
