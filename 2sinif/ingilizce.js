// 2. Sınıf İngilizce — Maarif Modeli temaları (MEB 2026-2027 ders kitabı: 6 tema)
// kelimeler: [İngilizce, Türkçe, emoji]; cumleler: [İngilizce, Türkçe]; bosluk: [boşluklu cümle, doğru, [yanlışlar], Türkçesi]
(function () {
  const { pick, sec, karistir, secim, eslestir, sirala, tiplerden } = O;
  const buyukResim = (e) => `<div style="font-size:110px;line-height:1.1">${e}</div>`;

  function ingUret(k) {
    const kel = k.kelimeler, tekTr = (a) => a.filter((x, i) => a.findIndex((y) => y[1] === x[1]) === i);
    const emojili = kel.filter((x, i) => x[2] && kel.findIndex((y) => y[2] === x[2]) === i);
    const t = [
      [3, () => { const w = pick(kel); return secim(`"${w[0]}" kelimesinin Türkçesi nedir?`, w[1], kel.map((x) => x[1]).filter((x) => x !== w[1]), `${w[0]} = ${w[1]}`, { cevapSes: w[0] }); }],
      [2, () => { const w = pick(kel.filter((x) => x[0].toLowerCase() !== x[1].toLowerCase())); if (!w) return null; return secim(`"${w[1]}" kelimesinin İngilizcesi nedir?`, w[0], kel.filter((x) => x[1] !== w[1]).map((x) => x[0]), `${w[1]} = ${w[0]}`, { cevapSes: w[0] }); }],
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
          kelimeler: [["hello", "merhaba", "👋"], ["hi", "selam", "🙋"], ["good morning", "günaydın", "🌅"], ["good night", "iyi geceler", "🌙"], ["goodbye", "hoşça kal", "🚶"], ["bye", "güle güle", "✋"], ["thank you", "teşekkür ederim", "🙏"], ["yes", "evet", "👍"], ["no", "hayır", "👎"], ["please", "lütfen", "🥺"]],
          cumleler: [["How are you?", "Nasılsın?"], ["I am fine, thank you.", "İyiyim, teşekkür ederim."], ["What is your name?", "Adın ne?"], ["My name is Ali.", "Benim adım Ali."]],
          bosluk: [["How ___ you?", "are", ["is", "am"], "Nasılsın?"], ["I ___ fine.", "am", ["are", "is"], "İyiyim."], ["Good ___! (sabah)", "morning", ["night", "bye"], "Günaydın!"], ["My ___ is Elif.", "name", ["fine", "hello"], "Benim adım Elif."]]
        }),
        konu("e2", "Places at School (Okulda Yerler)", "🏫", [["🏫", "Okuldaki yerlerin İngilizcelerini öğreniyoruz."]], {
          kelimeler: [["school", "okul", "🏫"], ["classroom", "sınıf", "📝"], ["library", "kütüphane", "📚"], ["canteen", "kantin", "🥪"], ["garden", "bahçe", "🌳"], ["playground", "oyun alanı", "🎠"], ["sports hall", "spor salonu", "🏀"], ["teacher's room", "öğretmenler odası", "☕"]],
          cumleler: [["Is it a library?", "Bu bir kütüphane mi?"], ["Yes, it is.", "Evet, öyle."], ["No, it isn't.", "Hayır, değil."], ["This is my school.", "Bu benim okulum."]],
          bosluk: [["Is it a ___? Yes, it is. (📚)", "library", ["canteen", "garden"], ""], ["___ it a classroom?", "Is", ["Are", "Am"], "Bu bir sınıf mı?"], ["No, it ___.", "isn't", ["is", "am"], "Hayır, değil."]]
        }),
        konu("e3", "People and Days (Kişiler ve Günler)", "📅", [["📅", "Okuldaki kişileri ve haftanın günlerini öğreniyoruz."]], {
          kelimeler: [["teacher", "öğretmen", "👩‍🏫"], ["headmaster", "okul müdürü", "👨‍💼"], ["pupil", "öğrenci", "🧒"], ["boy", "erkek çocuk", "👦"], ["girl", "kız çocuk", "👧"], ["friend", "arkadaş", "🤝"], ["Monday", "pazartesi", ""], ["Tuesday", "salı", ""], ["Wednesday", "çarşamba", ""], ["Thursday", "perşembe", ""], ["Friday", "cuma", ""], ["Saturday", "cumartesi", ""], ["Sunday", "pazar", ""]],
          cumleler: [["Who is this?", "Bu kim?"], ["This is my teacher.", "Bu benim öğretmenim."], ["What day is it today?", "Bugün günlerden ne?"], ["It is Monday.", "Pazartesi."]],
          bosluk: [["Monday, ___, Wednesday", "Tuesday", ["Friday", "Sunday"], "Pazartesi, salı, çarşamba"], ["Thursday, ___, Saturday", "Friday", ["Monday", "Tuesday"], "Perşembe, cuma, cumartesi"], ["___ is this? This is my friend.", "Who", ["What", "How"], "Bu kim?"]]
        })
      ] },
      { id: "et2", ad: "Classroom Life (Sınıf Hayatı)", konular: [
        konu("e4", "Classroom Objects (Sınıf Eşyaları)", "✏️", [["🎒", "Sınıftaki eşyaların İngilizcelerini öğreniyoruz."]], {
          kelimeler: [["pencil", "kurşun kalem", "✏️"], ["book", "kitap", "📕"], ["notebook", "defter", "📓"], ["bag", "çanta", "🎒"], ["eraser", "silgi", ""], ["crayon", "pastel boya", "🖍️"], ["pencil case", "kalem kutusu", "👝"], ["desk", "sıra", "🪑"], ["door", "kapı", "🚪"], ["board", "tahta", "📋"]],
          cumleler: [["What is this?", "Bu ne?"], ["It is a pencil.", "Bu bir kurşun kalem."], ["This is my bag.", "Bu benim çantam."]],
          bosluk: [["What is ___? It is a book.", "this", ["name", "fine"], "Bu ne?"], ["It ___ a pencil.", "is", ["are", "am"], "Bu bir kurşun kalem."], ["It is ___ eraser.", "an", ["a", "am"], "Bu bir silgi."]]
        }),
        konu("e5", "Classroom Instructions (Sınıf Komutları)", "🙋", [["🙋", "Öğretmenin söylediği komutları öğreniyoruz. Dinle ve hareketi yap!"]], {
          kelimeler: [["stand up", "ayağa kalk", "🧍"], ["sit down", "otur", "🪑"], ["open your book", "kitabını aç", "📖"], ["close your book", "kitabını kapat", "📕"], ["listen", "dinle", "👂"], ["look", "bak", "👀"], ["be quiet", "sessiz ol", "🤫"], ["raise your hand", "parmak kaldır", "✋"], ["clap your hands", "ellerini çırp", "👏"]],
          cumleler: [["Stand up, please.", "Ayağa kalk, lütfen."], ["Sit down, please.", "Otur, lütfen."], ["Open your book.", "Kitabını aç."]],
          bosluk: [["___ up, please.", "Stand", ["Sit", "Look"], "Ayağa kalk, lütfen."], ["Sit ___, please.", "down", ["up", "open"], "Otur, lütfen."], ["Open your ___.", "book", ["hand", "down"], "Kitabını aç."]]
        }),
        konu("e6", "Colours and Numbers (Renkler ve Sayılar)", "🌈", [["🌈", "Renkleri ve 1'den 20'ye kadar sayıları öğreniyoruz."]], {
          kelimeler: [["red", "kırmızı", "🔴"], ["blue", "mavi", "🔵"], ["yellow", "sarı", "🟡"], ["green", "yeşil", "🟢"], ["orange", "turuncu", "🟠"], ["purple", "mor", "🟣"], ["brown", "kahverengi", "🟤"], ["black", "siyah", "⚫"], ["white", "beyaz", "⚪"], ["pink", "pembe", "💗"], ["one", "bir", "1️⃣"], ["two", "iki", "2️⃣"], ["three", "üç", "3️⃣"], ["four", "dört", "4️⃣"], ["five", "beş", "5️⃣"], ["six", "altı", "6️⃣"], ["seven", "yedi", "7️⃣"], ["eight", "sekiz", "8️⃣"], ["nine", "dokuz", "9️⃣"], ["ten", "on", "🔟"], ["eleven", "on bir", ""], ["twelve", "on iki", ""], ["fifteen", "on beş", ""], ["twenty", "yirmi", ""]],
          cumleler: [["What colour is it?", "O ne renk?"], ["It is red.", "O kırmızı."], ["How many pencils?", "Kaç kalem?"]],
          bosluk: [["The sun is ___.", "yellow", ["blue", "black"], "Güneş sarıdır."], ["The grass is ___.", "green", ["pink", "white"], "Çimen yeşildir."], ["Five and five is ___.", "ten", ["nine", "six"], "Beş artı beş on eder."], ["One, two, ___", "three", ["five", "ten"], "Bir, iki, üç"]]
        })
      ] },
      { id: "et3", ad: "Personal Life (Kişisel Hayat)", konular: [
        konu("e7", "My Body (Vücudum)", "🙆", [["🙆", "Vücudumuzun bölümlerini öğreniyoruz. Söylenen yeri göster!"]], {
          kelimeler: [["head", "baş", "🙂"], ["eye", "göz", "👁️"], ["ear", "kulak", "👂"], ["nose", "burun", "👃"], ["mouth", "ağız", "👄"], ["hand", "el", "✋"], ["arm", "kol", "💪"], ["leg", "bacak", "🦵"], ["foot", "ayak", "🦶"], ["hair", "saç", "💇"], ["tooth", "diş", "🦷"]],
          cumleler: [["How many eyes have you got?", "Kaç gözün var?"], ["I have got two eyes.", "İki gözüm var."], ["Is this a leg?", "Bu bir bacak mı?"]],
          bosluk: [["I have got two ___. (👁️)", "eyes", ["noses", "heads"], "İki gözüm var."], ["I have got one ___. (👃)", "nose", ["eyes", "legs"], "Bir burnum var."], ["Touch your ___! (✋)", "hand", ["leg", "hair"], "Eline dokun!"]]
        }),
        konu("e8", "Clothes (Giysiler)", "👕", [["👕", "Giysilerin İngilizcelerini öğreniyoruz."]], {
          kelimeler: [["T-shirt", "tişört", "👕"], ["dress", "elbise", "👗"], ["trousers", "pantolon", "👖"], ["shoes", "ayakkabı", "👟"], ["socks", "çorap", "🧦"], ["hat", "şapka", "🧢"], ["coat", "mont", "🧥"], ["scarf", "atkı", "🧣"], ["gloves", "eldiven", "🧤"]],
          cumleler: [["What have you got?", "Neyin var?"], ["I have got a red hat.", "Kırmızı bir şapkam var."], ["Put on your coat.", "Montunu giy."]],
          bosluk: [["It is cold. Put on your ___.", "coat", ["T-shirt", "hat"], "Hava soğuk. Montunu giy."], ["I have ___ a blue dress.", "got", ["get", "is"], "Mavi bir elbisem var."]]
        }),
        konu("e9", "Weather and Birthday (Hava ve Doğum Günü)", "🌦️", [["🌦️", "Hava durumunu ve yaşımızı söylemeyi öğreniyoruz."]], {
          kelimeler: [["sunny", "güneşli", "☀️"], ["rainy", "yağmurlu", "🌧️"], ["snowy", "karlı", "❄️"], ["cloudy", "bulutlu", "☁️"], ["windy", "rüzgârlı", "🌬️"], ["hot", "sıcak", "🥵"], ["cold", "soğuk", "🥶"], ["birthday", "doğum günü", "🎂"], ["cake", "pasta", "🍰"], ["party", "parti", "🥳"]],
          cumleler: [["How is the weather?", "Hava nasıl?"], ["It is sunny.", "Hava güneşli."], ["How old are you?", "Kaç yaşındasın?"], ["I am seven years old.", "Yedi yaşındayım."], ["Happy birthday!", "Doğum günün kutlu olsun!"]],
          bosluk: [["How ___ the weather?", "is", ["are", "am"], "Hava nasıl?"], ["It is ___. (☀️)", "sunny", ["rainy", "snowy"], "Hava güneşli."], ["I am eight ___ old.", "years", ["days", "weather"], "Sekiz yaşındayım."], ["Happy ___!", "birthday", ["morning", "weather"], "Doğum günün kutlu olsun!"]]
        })
      ] },
      { id: "et4", ad: "Family Life (Aile Hayatı)", konular: [
        konu("e10", "My Family (Ailem)", "👪", [["👪", "Aile üyelerinin İngilizcelerini öğreniyoruz."]], {
          kelimeler: [["mother", "anne", "👩"], ["father", "baba", "👨"], ["sister", "kız kardeş", "👧"], ["brother", "erkek kardeş", "👦"], ["grandmother", "büyükanne", "👵"], ["grandfather", "büyükbaba", "👴"], ["baby", "bebek", "👶"], ["family", "aile", "👪"]],
          cumleler: [["Who is he?", "O kim? (erkek)"], ["He is my father.", "O benim babam."], ["Who is she?", "O kim? (kız)"], ["She is my mother.", "O benim annem."]],
          bosluk: [["___ is my father.", "He", ["She", "It"], "O benim babam."], ["___ is my sister.", "She", ["He", "It"], "O benim kız kardeşim."], ["Who is ___? She is my grandmother.", "she", ["he", "it"], "O kim?"]]
        }),
        konu("e11", "What Do They Look Like? (Görünüş)", "🧍", [["🧍", "İnsanları tarif etmeyi öğreniyoruz: uzun, kısa, sarışın…"]], {
          kelimeler: [["tall", "uzun boylu", "🦒"], ["short", "kısa boylu", "🐭"], ["big", "büyük", "🐘"], ["small", "küçük", "🐜"], ["young", "genç", "🧒"], ["old", "yaşlı", "👴"], ["long hair", "uzun saç", "👱‍♀️"], ["short hair", "kısa saç", "👦"], ["happy", "mutlu", "😀"], ["sad", "üzgün", "😢"]],
          cumleler: [["My father is tall.", "Babam uzun boylu."], ["My sister has got long hair.", "Kız kardeşimin uzun saçı var."], ["My grandfather is old.", "Büyükbabam yaşlı."]],
          bosluk: [["The giraffe is ___.", "tall", ["short", "small"], "Zürafa uzundur."], ["The elephant is ___.", "big", ["small", "short"], "Fil büyüktür."], ["The baby is ___.", "young", ["old", "tall"], "Bebek gençtir."]]
        })
      ] },
      { id: "et5", ad: "Homes and Pets (Evler ve Evcil Hayvanlar)", konular: [
        konu("e12", "My House (Evim)", "🏠", [["🏠", "Evin bölümlerini ve eşyalarını öğreniyoruz."]], {
          kelimeler: [["house", "ev", "🏠"], ["kitchen", "mutfak", "🍳"], ["bedroom", "yatak odası", "🛌"], ["bathroom", "banyo", "🛁"], ["living room", "oturma odası", "📺"], ["garden", "bahçe", "🌳"], ["bed", "yatak", "🛏️"], ["sofa", "kanepe", "🛋️"], ["table", "masa", "🍽️"], ["chair", "sandalye", "🪑"], ["lamp", "lamba", "💡"], ["window", "pencere", "🖼️"]],
          cumleler: [["Where is the bed?", "Yatak nerede?"], ["It is in the bedroom.", "Yatak odasında."], ["This is my house.", "Bu benim evim."]],
          bosluk: [["The bed is in the ___.", "bedroom", ["kitchen", "garden"], "Yatak yatak odasında."], ["I cook in the ___.", "kitchen", ["bathroom", "bedroom"], "Mutfakta yemek yaparım."], ["___ is the sofa? It is in the living room.", "Where", ["Who", "How"], "Kanepe nerede?"]]
        }),
        konu("e13", "Pets (Evcil Hayvanlar)", "🐶", [["🐶", "Evcil hayvanları ve vücut bölümlerini öğreniyoruz."]], {
          kelimeler: [["cat", "kedi", "🐱"], ["dog", "köpek", "🐶"], ["fish", "balık", "🐟"], ["bird", "kuş", "🐦"], ["rabbit", "tavşan", "🐰"], ["turtle", "kaplumbağa", "🐢"], ["hamster", "hamster", "🐹"], ["tail", "kuyruk", "🐕"], ["paw", "pati", "🐾"], ["wing", "kanat", "🦅"]],
          cumleler: [["I have got a cat.", "Bir kedim var."], ["It has got a long tail.", "Uzun bir kuyruğu var."], ["My dog is brown.", "Köpeğim kahverengi."]],
          bosluk: [["A bird has got two ___.", "wings", ["paws", "tails"], "Bir kuşun iki kanadı var."], ["I have got a ___. It says meow.", "cat", ["dog", "fish"], "Bir kedim var. Miyav der."], ["The fish ___ in the water.", "swims", ["flies", "runs"], "Balık suda yüzer."]]
        })
      ] },
      { id: "et6", ad: "Food and Drinks (Yiyecek ve İçecekler)", konular: [
        konu("e14", "Fruit (Meyveler)", "🍎", [["🍎", "Meyvelerin İngilizcelerini öğreniyoruz."]], {
          kelimeler: [["apple", "elma", "🍎"], ["banana", "muz", "🍌"], ["orange", "portakal", "🍊"], ["strawberry", "çilek", "🍓"], ["grapes", "üzüm", "🍇"], ["watermelon", "karpuz", "🍉"], ["pear", "armut", "🍐"], ["cherry", "kiraz", "🍒"], ["lemon", "limon", "🍋"], ["peach", "şeftali", "🍑"]],
          cumleler: [["Do you like apples?", "Elma sever misin?"], ["Yes, I do.", "Evet, severim."], ["No, I don't.", "Hayır, sevmem."], ["I like bananas.", "Muz severim."]],
          bosluk: [["Do you ___ apples?", "like", ["is", "have"], "Elma sever misin?"], ["Yes, I ___.", "do", ["am", "is"], "Evet, severim."], ["No, I ___.", "don't", ["do", "am"], "Hayır, sevmem."]]
        }),
        konu("e15", "Vegetables and Drinks (Sebze ve İçecekler)", "🥕", [["🥕", "Sebzeleri ve içecekleri öğreniyoruz."]], {
          kelimeler: [["carrot", "havuç", "🥕"], ["tomato", "domates", "🍅"], ["potato", "patates", "🥔"], ["onion", "soğan", "🧅"], ["cucumber", "salatalık", "🥒"], ["corn", "mısır", "🌽"], ["water", "su", "💧"], ["milk", "süt", "🥛"], ["juice", "meyve suyu", "🧃"], ["tea", "çay", "🍵"]],
          cumleler: [["There is a carrot.", "Bir havuç var."], ["There are two tomatoes.", "İki domates var."], ["I don't like onions.", "Soğan sevmem."], ["I drink milk.", "Süt içerim."]],
          bosluk: [["There ___ a carrot.", "is", ["are", "am"], "Bir havuç var."], ["There ___ three tomatoes.", "are", ["is", "am"], "Üç domates var."], ["I drink ___. (🥛)", "milk", ["corn", "potato"], "Süt içerim."]]
        })
      ] }
    ]
  };
  DERS.ingilizce.konuYap = konu;
})();
