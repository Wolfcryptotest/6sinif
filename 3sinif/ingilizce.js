// 3. Sınıf İngilizce — Maarif Modeli temaları + günlük hayat kelimeleri
// kelimeler: [İngilizce, Türkçe, emoji]; cumleler: [İngilizce, Türkçe]; bosluk: [boşluklu cümle, doğru, [yanlışlar], Türkçesi]
(function () {
  const { pick, sec, karistir, secim, eslestir, sirala, tiplerden } = O;
  const buyukResim = (e) => `<div style="font-size:110px;line-height:1.1">${e}</div>`;

  function ingUret(k) {
    const kel = k.kelimeler, tekTr = (a) => a.filter((x, i) => a.findIndex((y) => y[1] === x[1]) === i);
    const emojili = kel.filter((x, i) => x[2] && kel.findIndex((y) => y[2] === x[2]) === i);
    const t = [
      [3, () => { const w = pick(kel); return secim(`"${w[0]}" kelimesinin Türkçesi nedir?`, w[1], kel.map((x) => x[1]).filter((x) => x !== w[1]), `${w[0]} = ${w[1]}`, { cevapSes: w[0] }); }],
      [2, () => { const w = pick(kel); return secim(`"${w[1]}" kelimesinin İngilizcesi nedir?`, w[0], kel.filter((x) => x[1] !== w[1]).map((x) => x[0]), `${w[1]} = ${w[0]}`, { cevapSes: w[0] }); }],
      [2, () => eslestir("İngilizce kelimeyi Türkçesiyle eşleştir.", sec(tekTr(kel), 4).map((x) => [x[0], x[1]]))]
    ];
    if (emojili.length >= 4) {
      t.push([3, () => { const w = pick(emojili); return secim("Bu resmin İngilizcesi hangisi?", w[0], emojili.map((x) => x[0]).filter((x) => x !== w[0]), `${w[2]} = ${w[0]} (${w[1]})`, { gorsel: buyukResim(w[2]), cevapSes: w[0] }); }]);
      t.push([3, () => { const w = pick(emojili); return secim("🔊 Dinle! Duyduğun kelimenin resmi hangisi?", w[2], emojili.map((x) => x[2]).filter((x) => x !== w[2]), `${w[0]} = ${w[1]}`, { em: true, ses: w[0], sesOnce: true, cevapSes: w[0] }); }]);
      t.push([1.5, () => eslestir("Kelimeyi resmiyle eşleştir.", sec(emojili, 4).map((x) => [x[0], x[2]]))]);
    }
    if (k.bosluk) t.push([3, () => { const b = pick(k.bosluk); return secim(`Boşluğa ne gelmeli?  ${b[0]}` + (b[3] ? `  (${b[3]})` : ""), b[1], b[2], b[0].replace("___", b[1]), { cevapSes: b[0].replace("___", b[1]).replace(/\s*\(.*\)$/, ""), balonYok: true }); }]);
    if (k.cumleler) {
      t.push([2, () => { const c = pick(k.cumleler); return Object.assign(sirala(`Kelimeleri sıraya dizerek cümleyi kur: "${c[1]}"`, c[0].split(" "), `${c[0]} = ${c[1]}`), { cevapSes: c[0] }); }]);
      t.push([1.5, () => { const c = pick(k.cumleler); return secim(`"${c[0]}" cümlesinin Türkçesi nedir?`, c[1], k.cumleler.filter((x) => x !== c).map((x) => x[1]), "", { cevapSes: c[0], balonYok: true }); }]);
    }
    return tiplerden(t);
  }
  function konu(id, ad, ikon, giris, veri) {
    const bilgi = giris.map((g) => [g[0], g[1]]).concat(veri.kelimeler.map((w) => [w[2] || "🔤", `${w[0]} = ${w[1]}`, w[0]]));
    if (veri.cumleler) veri.cumleler.slice(0, 3).forEach((c) => bilgi.push(["💬", `${c[0]} = ${c[1]}`, c[0]]));
    return Object.assign({ id, ad, ikon, bilgi }, veri, { uret: ingUret(veri) });
  }

  DERS.ingilizce = {
    ad: "İngilizce", ikon: "🔤", renk: "#9b5de5",
    temalar: [
      { id: "et1", ad: "School Life (Okul Hayatı)", konular: [
        konu("e1", "Hello! (Selamlaşma)", "👋", [["👋", "İngilizcede selamlaşmayı öğreniyoruz. Kelimelere dokun, dinle ve tekrar et."]], {
          kelimeler: [["hello", "merhaba", "👋"], ["good morning", "günaydın", "🌅"], ["good night", "iyi geceler", "🌙"], ["good evening", "iyi akşamlar", "🌆"], ["goodbye", "hoşça kal", "🚶"], ["thank you", "teşekkür ederim", "🙏"], ["please", "lütfen", "🥺"], ["fine", "iyi", "👍"], ["see you", "görüşürüz", "🤝"]],
          cumleler: [["How are you?", "Nasılsın?"], ["I am fine, thank you.", "İyiyim, teşekkür ederim."], ["Nice to meet you.", "Tanıştığımıza memnun oldum."], ["Good morning, teacher!", "Günaydın öğretmenim!"], ["See you tomorrow!", "Yarın görüşürüz!"]],
          bosluk: [["How ___ you?", "are", ["is", "am"], "Nasılsın?"], ["I ___ fine, thank you.", "am", ["are", "is"], "İyiyim, teşekkürler."], ["Good ___! (sabah)", "morning", ["night", "evening"], "Günaydın!"], ["Nice to ___ you.", "meet", ["see", "fine"], "Tanıştığımıza memnun oldum."], ["Good ___! (gece yatarken)", "night", ["morning", "afternoon"], "İyi geceler!"]]
        }),
        konu("e2", "Numbers 1-20 (Sayılar)", "🔢", [["🔢", "1'den 20'ye kadar sayıları İngilizce öğreniyoruz."]], {
          kelimeler: [["one", "bir", "1️⃣"], ["two", "iki", "2️⃣"], ["three", "üç", "3️⃣"], ["four", "dört", "4️⃣"], ["five", "beş", "5️⃣"], ["six", "altı", "6️⃣"], ["seven", "yedi", "7️⃣"], ["eight", "sekiz", "8️⃣"], ["nine", "dokuz", "9️⃣"], ["ten", "on", "🔟"], ["eleven", "on bir", ""], ["twelve", "on iki", ""], ["thirteen", "on üç", ""], ["fourteen", "on dört", ""], ["fifteen", "on beş", ""], ["sixteen", "on altı", ""], ["seventeen", "on yedi", ""], ["eighteen", "on sekiz", ""], ["nineteen", "on dokuz", ""], ["twenty", "yirmi", ""]],
          bosluk: [["I am ___ years old. (8)", "eight", ["eighteen", "three"], "Sekiz yaşındayım."], ["I have ___ pencils. (12)", "twelve", ["twenty", "two"], "On iki kalemim var."], ["One, two, ___, four", "three", ["five", "thirteen"], "Bir, iki, üç, dört"], ["Five + five = ___", "ten", ["eleven", "nine"], "Beş artı beş on eder."], ["There are ___ students. (15)", "fifteen", ["fifty", "five"], "On beş öğrenci var."]],
          cumleler: [["How old are you?", "Kaç yaşındasın?"], ["I am nine years old.", "Dokuz yaşındayım."], ["How many apples are there?", "Kaç tane elma var?"]]
        }),
        konu("e3", "Me and My Friends (Tanışma)", "🧒", [["🙋", "Kendimizi tanıtmayı öğreniyoruz: My name is… / I am … years old."]], {
          kelimeler: [["name", "ad, isim", "📛"], ["boy", "erkek çocuk", "👦"], ["girl", "kız çocuk", "👧"], ["friend", "arkadaş", "🧑‍🤝‍🧑"], ["teacher", "öğretmen", "🧑‍🏫"], ["student", "öğrenci", "🧒"], ["school", "okul", "🏫"], ["class", "sınıf", "🚪"]],
          cumleler: [["What is your name?", "Adın ne?"], ["My name is Elif.", "Benim adım Elif."], ["This is my friend.", "Bu benim arkadaşım."], ["I am a student.", "Ben bir öğrenciyim."], ["Where are you from?", "Nerelisin?"], ["I am from Turkey.", "Türkiyeliyim."]],
          bosluk: [["What ___ your name?", "is", ["are", "am"], "Adın ne?"], ["My ___ is Can.", "name", ["friend", "school"], "Benim adım Can."], ["I ___ from Turkey.", "am", ["is", "are"], "Türkiyeliyim."], ["She is a ___. (kız)", "girl", ["boy", "teacher"], "O bir kız."]]
        })
      ] },
      { id: "et2", ad: "Classroom Life (Sınıf Hayatı)", konular: [
        konu("e4", "Classroom Objects (Sınıf Eşyaları)", "✏️", [["🎒", "Sınıftaki eşyaların İngilizcelerini öğreniyoruz."]], {
          kelimeler: [["pencil", "kurşun kalem", "✏️"], ["pen", "tükenmez kalem", "🖊️"], ["book", "kitap", "📕"], ["notebook", "defter", "📓"], ["bag", "çanta", "🎒"], ["ruler", "cetvel", "📏"], ["scissors", "makas", "✂️"], ["crayon", "pastel boya", "🖍️"], ["chair", "sandalye", "🪑"], ["clock", "saat", "🕒"], ["computer", "bilgisayar", "💻"], ["door", "kapı", "🚪"], ["window", "pencere", "🪟"]],
          cumleler: [["This is my pencil.", "Bu benim kurşun kalemim."], ["I have a red bag.", "Kırmızı bir çantam var."], ["Can I borrow your ruler?", "Cetvelini ödünç alabilir miyim?"], ["What is this?", "Bu ne?"], ["It is a book.", "O bir kitap."]],
          bosluk: [["What is ___? It is a pen.", "this", ["name", "fine"], "Bu ne? Bu bir tükenmez kalem."], ["It is ___ book.", "a", ["an", "am"], "O bir kitap."], ["I have two ___. (kalem)", "pencils", ["pencil", "chair"], "İki kalemim var."]]
        }),
        konu("e5", "Colours (Renkler)", "🎨", [["🌈", "Renklerin İngilizcelerini öğreniyoruz."]], {
          kelimeler: [["red", "kırmızı", "🔴"], ["blue", "mavi", "🔵"], ["green", "yeşil", "🟢"], ["yellow", "sarı", "🟡"], ["orange", "turuncu", "🟠"], ["purple", "mor", "🟣"], ["black", "siyah", "⚫"], ["white", "beyaz", "⚪"], ["brown", "kahverengi", "🟤"], ["pink", "pembe", "🩷"]],
          cumleler: [["My bag is blue.", "Çantam mavi."], ["What colour is it?", "O ne renk?"], ["The apple is red.", "Elma kırmızı."], ["I like green.", "Yeşili severim."]],
          bosluk: [["The sun is ___.", "yellow", ["blue", "black"], "Güneş sarıdır."], ["The grass is ___.", "green", ["pink", "white"], "Çimen yeşildir."], ["Snow is ___.", "white", ["black", "red"], "Kar beyazdır."], ["The sky is ___.", "blue", ["brown", "orange"], "Gökyüzü mavidir."], ["What ___ is it? It is red.", "colour", ["name", "old"], "O ne renk? Kırmızı."]]
        }),
        konu("e6", "Classroom Rules (Sınıf Kuralları)", "🧑‍🏫", [["🧑‍🏫", "Öğretmenimizin İngilizce yönergelerini anlamayı öğreniyoruz."]], {
          kelimeler: [["open", "aç", "🔓"], ["close", "kapat", "🔒"], ["sit down", "otur", "🪑"], ["stand up", "ayağa kalk", "🧍"], ["listen", "dinle", "👂"], ["look", "bak", "👀"], ["write", "yaz", "✍️"], ["read", "oku", "📚"], ["be quiet", "sessiz ol", "🤫"], ["raise your hand", "parmak kaldır", "✋"]],
          cumleler: [["Open your book.", "Kitabını aç."], ["Close the door, please.", "Kapıyı kapat lütfen."], ["Sit down, please.", "Otur lütfen."], ["Listen to your teacher.", "Öğretmenini dinle."], ["Don't run in the class.", "Sınıfta koşma."]],
          bosluk: [["___ your book, please. (Aç)", "Open", ["Close", "Sit"], "Kitabını aç lütfen."], ["Stand ___, please.", "up", ["down", "on"], "Ayağa kalk lütfen."], ["Sit ___, please.", "down", ["up", "in"], "Otur lütfen."], ["Be ___, please.", "quiet", ["open", "fine"], "Sessiz ol lütfen."]]
        })
      ] },
      { id: "et3", ad: "Personal Life (Kişisel Hayat)", konular: [
        konu("e7", "Feelings (Duygular)", "😊", [["😊", "Duygularımızı İngilizce anlatmayı öğreniyoruz: I am happy."]], {
          kelimeler: [["happy", "mutlu", "😊"], ["sad", "üzgün", "😢"], ["angry", "kızgın", "😠"], ["tired", "yorgun", "😫"], ["hungry", "aç", "😋"], ["thirsty", "susamış", "🥤"], ["scared", "korkmuş", "😨"], ["bored", "sıkılmış", "🥱"], ["sleepy", "uykulu", "😴"], ["surprised", "şaşırmış", "😲"]],
          cumleler: [["I am happy today.", "Bugün mutluyum."], ["Are you hungry?", "Aç mısın?"], ["She is sad.", "O üzgün."], ["I feel tired.", "Kendimi yorgun hissediyorum."]],
          bosluk: [["I want water. I am ___.", "thirsty", ["hungry", "happy"], "Su istiyorum. Susadım."], ["It is my birthday! I am ___.", "happy", ["sad", "angry"], "Doğum günüm! Mutluyum."], ["I want to sleep. I am ___.", "sleepy", ["surprised", "hungry"], "Uyumak istiyorum. Uykum var."], ["He ___ sad.", "is", ["am", "are"], "O üzgün."]]
        }),
        konu("e8", "My Body (Vücudumuz)", "🧍", [["🧍", "Vücudumuzun bölümlerini İngilizce öğreniyoruz."]], {
          kelimeler: [["eye", "göz", "👁️"], ["ear", "kulak", "👂"], ["nose", "burun", "👃"], ["mouth", "ağız", "👄"], ["hand", "el", "✋"], ["foot", "ayak", "🦶"], ["leg", "bacak", "🦵"], ["arm", "kol", "💪"], ["hair", "saç", "💇"], ["tooth", "diş", "🦷"], ["face", "yüz", "🙂"]],
          cumleler: [["I have two eyes.", "İki gözüm var."], ["Touch your nose.", "Burnuna dokun."], ["Wash your hands.", "Ellerini yıka."], ["I have long hair.", "Uzun saçlarım var."]],
          bosluk: [["I see with my ___.", "eyes", ["ears", "hands"], "Gözlerimle görürüm."], ["I hear with my ___.", "ears", ["nose", "feet"], "Kulaklarımla duyarım."], ["I have ten ___. (parmak)", "fingers", ["noses", "heads"], "On parmağım var."], ["Brush your ___. (dişler)", "teeth", ["eyes", "legs"], "Dişlerini fırçala."]]
        }),
        konu("e9", "Toys and Games (Oyuncaklar)", "🧸", [["🧸", "Oyuncakların İngilizcesini ve \"I like…\" kalıbını öğreniyoruz."]], {
          kelimeler: [["ball", "top", "⚽"], ["doll", "oyuncak bebek", "🪆"], ["kite", "uçurtma", "🪁"], ["teddy bear", "oyuncak ayı", "🧸"], ["toy car", "oyuncak araba", "🚗"], ["puzzle", "yapboz", "🧩"], ["robot", "robot", "🤖"], ["balloon", "balon", "🎈"], ["drum", "davul", "🥁"], ["bike", "bisiklet", "🚲"]],
          cumleler: [["I like my teddy bear.", "Oyuncak ayımı severim."], ["Do you have a kite?", "Uçurtman var mı?"], ["Yes, I do.", "Evet, var."], ["Let's play ball!", "Hadi top oynayalım!"], ["I have a red balloon.", "Kırmızı bir balonum var."]],
          bosluk: [["Do you ___ a ball?", "have", ["has", "is"], "Topun var mı?"], ["I ___ puzzles.", "like", ["likes", "am"], "Yapbozları severim."], ["Let's ___ with the kite!", "play", ["sleep", "read"], "Hadi uçurtmayla oynayalım!"], ["She ___ a doll.", "has", ["have", "am"], "Onun bir oyuncak bebeği var."]]
        })
      ] },
      { id: "et4", ad: "Family Life (Aile Hayatı)", konular: [
        konu("e10", "My Family (Ailem)", "👨‍👩‍👧", [["👨‍👩‍👧", "Aile bireylerinin İngilizcesini öğreniyoruz: This is my mother."]], {
          kelimeler: [["mother", "anne", "👩"], ["father", "baba", "👨"], ["sister", "kız kardeş", "👧"], ["brother", "erkek kardeş", "👦"], ["grandmother", "büyükanne", "👵"], ["grandfather", "büyükbaba", "👴"], ["baby", "bebek", "👶"], ["uncle", "amca / dayı", "🧔"], ["aunt", "hala / teyze", "👩‍🦰"], ["cousin", "kuzen", "🧒"], ["family", "aile", "👨‍👩‍👧"]],
          cumleler: [["This is my mother.", "Bu benim annem."], ["He is my father.", "O benim babam."], ["I have one brother.", "Bir erkek kardeşim var."], ["Who is she?", "O kim?"], ["She is my grandmother.", "O benim büyükannem."]],
          bosluk: [["This ___ my sister.", "is", ["are", "am"], "Bu benim kız kardeşim."], ["___ is she? She is my aunt.", "Who", ["What", "How"], "O kim? O benim teyzem."], ["My father's father is my ___.", "grandfather", ["brother", "uncle"], "Babamın babası büyükbabamdır."], ["___ is my father. (O, erkek)", "He", ["She", "I"], "O benim babam."]]
        }),
        konu("e11", "Describing People (Kişileri Tanıtma)", "🧑", [["🧑", "İnsanları ve hayvanları anlatan sıfatları öğreniyoruz: She is tall."]], {
          kelimeler: [["tall", "uzun boylu", "🦒"], ["short", "kısa boylu", "🐧"], ["old", "yaşlı", "👴"], ["young", "genç", "🧒"], ["big", "büyük", "🐘"], ["small", "küçük", "🐭"], ["fast", "hızlı", "🐆"], ["slow", "yavaş", "🐢"], ["strong", "güçlü", "💪"], ["beautiful", "güzel", "🌸"]],
          cumleler: [["My father is tall.", "Babam uzun boylu."], ["The elephant is big.", "Fil büyüktür."], ["The turtle is slow.", "Kaplumbağa yavaştır."], ["My grandfather is old.", "Büyükbabam yaşlı."]],
          bosluk: [["The elephant is ___.", "big", ["small", "short"], "Fil büyüktür."], ["The cheetah is ___.", "fast", ["slow", "old"], "Çita hızlıdır."], ["The mouse is ___.", "small", ["tall", "big"], "Fare küçüktür."], ["The giraffe is ___.", "tall", ["short", "slow"], "Zürafa uzundur."]]
        })
      ] },
      { id: "et5", ad: "Homes & Neighbourhood (Ev ve Mahalle)", konular: [
        konu("e12", "Rooms (Odalar)", "🏠", [["🏠", "Evimizdeki odaların İngilizcesini öğreniyoruz."]], {
          kelimeler: [["house", "ev", "🏠"], ["kitchen", "mutfak", "🍳"], ["bedroom", "yatak odası", "🛏️"], ["bathroom", "banyo", "🛁"], ["living room", "oturma odası", "🛋️"], ["garden", "bahçe", "🌷"], ["garage", "garaj", "🚗"], ["stairs", "merdiven", "🪜"]],
          cumleler: [["Where is mom?", "Annem nerede?"], ["She is in the kitchen.", "O mutfakta."], ["I sleep in my bedroom.", "Yatak odamda uyurum."], ["We play in the garden.", "Bahçede oynarız."]],
          bosluk: [["I cook in the ___.", "kitchen", ["bedroom", "garage"], "Mutfakta yemek yaparım."], ["I sleep in the ___.", "bedroom", ["kitchen", "garden"], "Yatak odasında uyurum."], ["I take a bath in the ___.", "bathroom", ["living room", "garage"], "Banyoda yıkanırım."], ["___ is dad? He is in the garden.", "Where", ["Who", "What"], "Babam nerede? Bahçede."]]
        }),
        konu("e13", "In, On, Under (Eşyalar ve Yerleri)", "📦", [["📦", "Eşyaların nerede olduğunu anlatmayı öğreniyoruz: in (içinde), on (üstünde), under (altında), next to (yanında)."]], {
          kelimeler: [["bed", "yatak", "🛏️"], ["table", "masa", "🍽️"], ["sofa", "kanepe", "🛋️"], ["lamp", "lamba", "💡"], ["television", "televizyon", "📺"], ["box", "kutu", "📦"], ["in", "içinde", "📥"], ["on", "üstünde", "⬆️"], ["under", "altında", "⬇️"], ["next to", "yanında", "↔️"]],
          cumleler: [["The cat is under the table.", "Kedi masanın altında."], ["The ball is in the box.", "Top kutunun içinde."], ["The book is on the bed.", "Kitap yatağın üstünde."], ["The lamp is next to the sofa.", "Lamba kanepenin yanında."]],
          bosluk: [["The cat is ___ the table.", "under", ["in", "on"], "Kedi masanın altında."], ["The ball is ___ the box.", "in", ["under", "next to"], "Top kutunun içinde."], ["The book is ___ the bed.", "on", ["under", "in"], "Kitap yatağın üstünde."], ["The lamp is ___ the sofa.", "next to", ["in", "under"], "Lamba kanepenin yanında."]]
        }),
        konu("e14", "My Neighbourhood (Mahallem)", "🏘️", [["🏘️", "Mahalledeki yerlerin İngilizcesini öğreniyoruz."]], {
          kelimeler: [["hospital", "hastane", "🏥"], ["school", "okul", "🏫"], ["park", "park", "🏞️"], ["bakery", "fırın", "🥖"], ["bank", "banka", "🏦"], ["library", "kütüphane", "📚"], ["mosque", "cami", "🕌"], ["post office", "postane", "🏤"], ["supermarket", "market", "🛒"], ["zoo", "hayvanat bahçesi", "🦁"]],
          cumleler: [["Where is the park?", "Park nerede?"], ["It is next to the school.", "Okulun yanında."], ["I buy bread at the bakery.", "Fırından ekmek alırım."], ["Let's go to the library.", "Hadi kütüphaneye gidelim."]],
          bosluk: [["I buy bread at the ___.", "bakery", ["bank", "hospital"], "Fırından ekmek alırım."], ["Doctors work in the ___.", "hospital", ["park", "zoo"], "Doktorlar hastanede çalışır."], ["I read books in the ___.", "library", ["bakery", "supermarket"], "Kütüphanede kitap okurum."], ["We see lions at the ___.", "zoo", ["school", "bank"], "Hayvanat bahçesinde aslan görürüz."]]
        })
      ] },
      { id: "et6", ad: "Life in the City & the World (Şehir ve Dünya)", konular: [
        konu("e15", "Transportation (Ulaşım)", "🚌", [["🚌", "Taşıtların İngilizcesini öğreniyoruz: I go to school by bus."]], {
          kelimeler: [["car", "araba", "🚗"], ["bus", "otobüs", "🚌"], ["train", "tren", "🚆"], ["plane", "uçak", "✈️"], ["ship", "gemi", "🚢"], ["bike", "bisiklet", "🚲"], ["taxi", "taksi", "🚕"], ["helicopter", "helikopter", "🚁"], ["motorbike", "motosiklet", "🏍️"], ["boat", "tekne", "⛵"]],
          cumleler: [["I go to school by bus.", "Okula otobüsle giderim."], ["We go to Ankara by train.", "Ankara'ya trenle gideriz."], ["How do you go to school?", "Okula nasıl gidersin?"], ["I go on foot.", "Yürüyerek giderim."]],
          bosluk: [["I go to school ___ bus.", "by", ["on", "in"], "Okula otobüsle giderim."], ["A ___ flies in the sky.", "plane", ["ship", "car"], "Uçak gökyüzünde uçar."], ["A ___ goes on the sea.", "ship", ["train", "bike"], "Gemi denizde gider."], ["How ___ you go to school?", "do", ["is", "are"], "Okula nasıl gidersin?"]]
        }),
        konu("e16", "Weather (Hava Durumu)", "🌦️", [["🌦️", "Hava durumunu İngilizce anlatmayı öğreniyoruz: It's sunny."]], {
          kelimeler: [["sunny", "güneşli", "☀️"], ["rainy", "yağmurlu", "🌧️"], ["snowy", "karlı", "❄️"], ["windy", "rüzgârlı", "🌬️"], ["cloudy", "bulutlu", "☁️"], ["hot", "sıcak", "🥵"], ["cold", "soğuk", "🥶"], ["rainbow", "gökkuşağı", "🌈"], ["umbrella", "şemsiye", "☂️"]],
          cumleler: [["What is the weather like?", "Hava nasıl?"], ["It is sunny today.", "Bugün hava güneşli."], ["Take your umbrella.", "Şemsiyeni al."], ["It is cold and snowy.", "Hava soğuk ve karlı."]],
          bosluk: [["It is ___. Take your umbrella.", "rainy", ["sunny", "hot"], "Hava yağmurlu. Şemsiyeni al."], ["It is ___. Let's make a snowman!", "snowy", ["sunny", "windy"], "Hava karlı. Hadi kardan adam yapalım!"], ["It is ___. Let's fly a kite!", "windy", ["rainy", "snowy"], "Hava rüzgârlı. Hadi uçurtma uçuralım!"], ["What is the ___ like?", "weather", ["colour", "name"], "Hava nasıl?"]]
        }),
        konu("e17", "Animals (Hayvanlar)", "🦁", [["🐾", "Hayvanların İngilizcesini öğreniyoruz."]], {
          kelimeler: [["cat", "kedi", "🐱"], ["dog", "köpek", "🐶"], ["bird", "kuş", "🐦"], ["fish", "balık", "🐟"], ["horse", "at", "🐴"], ["cow", "inek", "🐮"], ["lion", "aslan", "🦁"], ["elephant", "fil", "🐘"], ["monkey", "maymun", "🐵"], ["rabbit", "tavşan", "🐰"], ["duck", "ördek", "🦆"], ["frog", "kurbağa", "🐸"]],
          cumleler: [["I like cats.", "Kedileri severim."], ["Birds can fly.", "Kuşlar uçabilir."], ["Fish can swim.", "Balıklar yüzebilir."], ["The monkey likes bananas.", "Maymun muzu sever."]],
          bosluk: [["Birds can ___.", "fly", ["swim", "read"], "Kuşlar uçabilir."], ["Fish can ___.", "swim", ["fly", "write"], "Balıklar yüzebilir."], ["A ___ says moo.", "cow", ["cat", "duck"], "İnek möö der."], ["A ___ says woof.", "dog", ["frog", "lion"], "Köpek hav hav der."]]
        })
      ] },
      { id: "et7", ad: "Günlük Hayat Kelimeleri", konular: [
        konu("e18", "Food and Drinks (Yiyecek ve İçecek)", "🍎", [["🍎", "Her gün kullandığımız yiyecek ve içeceklerin İngilizcesi."]], {
          kelimeler: [["apple", "elma", "🍎"], ["banana", "muz", "🍌"], ["orange", "portakal", "🍊"], ["bread", "ekmek", "🍞"], ["milk", "süt", "🥛"], ["water", "su", "💧"], ["cheese", "peynir", "🧀"], ["egg", "yumurta", "🥚"], ["cake", "pasta", "🍰"], ["juice", "meyve suyu", "🧃"], ["tea", "çay", "🍵"], ["soup", "çorba", "🍲"]],
          cumleler: [["I like apples.", "Elmaları severim."], ["Can I have some water?", "Biraz su alabilir miyim?"], ["I eat eggs for breakfast.", "Kahvaltıda yumurta yerim."], ["I don't like milk.", "Sütü sevmem."]],
          bosluk: [["I am thirsty. I want ___.", "water", ["bread", "cake"], "Susadım. Su istiyorum."], ["Monkeys like ___.", "bananas", ["soups", "cheeses"], "Maymunlar muzu sever."], ["I ___ like milk. (sevmem)", "don't", ["am", "is"], "Sütü sevmem."], ["Can I ___ some juice?", "have", ["has", "am"], "Biraz meyve suyu alabilir miyim?"]]
        }),
        konu("e19", "Clothes (Kıyafetler)", "👕", [["👕", "Giydiğimiz kıyafetlerin İngilizcesi."]], {
          kelimeler: [["T-shirt", "tişört", "👕"], ["dress", "elbise", "👗"], ["shoes", "ayakkabı", "👟"], ["hat", "şapka", "👒"], ["coat", "mont", "🧥"], ["socks", "çorap", "🧦"], ["trousers", "pantolon", "👖"], ["scarf", "atkı", "🧣"], ["gloves", "eldiven", "🧤"], ["glasses", "gözlük", "👓"]],
          cumleler: [["Put on your coat.", "Montunu giy."], ["My shoes are new.", "Ayakkabılarım yeni."], ["It is cold. Wear your gloves.", "Hava soğuk. Eldivenlerini giy."], ["I like your dress.", "Elbiseni beğendim."]],
          bosluk: [["It is cold. Wear your ___.", "coat", ["T-shirt", "hat"], "Hava soğuk. Montunu giy."], ["I wear ___ on my feet.", "shoes", ["gloves", "glasses"], "Ayaklarıma ayakkabı giyerim."], ["I wear ___ on my hands.", "gloves", ["socks", "shoes"], "Ellerime eldiven giyerim."], ["Put ___ your hat.", "on", ["in", "under"], "Şapkanı tak."]]
        }),
        konu("e20", "Days of the Week (Haftanın Günleri)", "📅", [["📅", "Haftanın günlerini İngilizce öğreniyoruz. Gün adları büyük harfle başlar."]], {
          kelimeler: [["Monday", "Pazartesi", ""], ["Tuesday", "Salı", ""], ["Wednesday", "Çarşamba", ""], ["Thursday", "Perşembe", ""], ["Friday", "Cuma", ""], ["Saturday", "Cumartesi", ""], ["Sunday", "Pazar", ""], ["today", "bugün", ""], ["tomorrow", "yarın", ""], ["week", "hafta", ""]],
          cumleler: [["Today is Monday.", "Bugün Pazartesi."], ["What day is it today?", "Bugün günlerden ne?"], ["I go to the park on Sunday.", "Pazar günü parka giderim."]],
          bosluk: [["Monday, ___, Wednesday", "Tuesday", ["Thursday", "Sunday"], "Pazartesi, Salı, Çarşamba"], ["Friday, Saturday, ___", "Sunday", ["Monday", "Tuesday"], "Cuma, Cumartesi, Pazar"], ["There are seven days in a ___.", "week", ["day", "today"], "Bir haftada yedi gün vardır."], ["What ___ is it today?", "day", ["week", "name"], "Bugün günlerden ne?"]]
        })
      ] }
    ]
  };
})();
