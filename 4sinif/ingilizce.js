// 4. Sınıf İngilizce — 2018 programı 10 ünitesi
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
      { id: "et1", ad: "Unit 1: Classroom Rules", konular: [
        konu("e1", "Classroom Rules (Sınıf Kuralları)", "🧑‍🏫", [["🧑‍🏫", "Sınıf kurallarını ve izin isteme kalıplarını öğreniyoruz: Can I come in?"]], {
          kelimeler: [["open the door", "kapıyı aç", "🚪"], ["close the window", "pencereyi kapat", "🪟"], ["come in", "içeri gel", "🚶"], ["go out", "dışarı çık", "🏃"], ["sit down", "otur", "🪑"], ["stand up", "ayağa kalk", "🧍"], ["be quiet", "sessiz ol", "🤫"], ["listen", "dinle", "👂"], ["don't eat", "yemek yeme", "🚫"], ["raise your hand", "parmak kaldır", "✋"]],
          cumleler: [["Can I come in?", "İçeri girebilir miyim?"], ["Can I go out?", "Dışarı çıkabilir miyim?"], ["Can I open the window?", "Pencereyi açabilir miyim?"], ["Yes, you can.", "Evet, yapabilirsin."], ["Sorry, you can't.", "Üzgünüm, yapamazsın."], ["Don't run in the class.", "Sınıfta koşma."]],
          bosluk: [["___ I come in?", "Can", ["Do", "Is"], "İçeri girebilir miyim?"], ["Yes, you ___.", "can", ["can't", "are"], "Evet, girebilirsin."], ["___ eat in the class!", "Don't", ["Can", "Is"], "Sınıfta yemek yeme!"], ["Please, ___ quiet.", "be", ["is", "are"], "Lütfen sessiz ol."]]
        }),
        konu("e2", "Numbers (Sayılar 1-100)", "🔢", [["🔢", "10'dan 100'e kadar onluk sayıları öğreniyoruz."]], {
          kelimeler: [["ten", "on", "🔟"], ["twenty", "yirmi", ""], ["thirty", "otuz", ""], ["forty", "kırk", ""], ["fifty", "elli", ""], ["sixty", "altmış", ""], ["seventy", "yetmiş", ""], ["eighty", "seksen", ""], ["ninety", "doksan", ""], ["one hundred", "yüz", "💯"], ["twelve", "on iki", ""], ["fifteen", "on beş", ""]],
          bosluk: [["Twenty + thirty = ___", "fifty", ["fifteen", "forty"], "Yirmi artı otuz elli eder."], ["Ten, twenty, ___, forty", "thirty", ["thirteen", "fifty"], "On, yirmi, otuz, kırk"], ["There are ___ students in my class. (25)", "twenty-five", ["fifty-two", "twelve"], "Sınıfımda 25 öğrenci var."]],
          cumleler: [["How many books are there?", "Kaç kitap var?"], ["There are forty books.", "Kırk kitap var."]]
        })
      ] },
      { id: "et2", ad: "Unit 2: Nationality", konular: [
        konu("e3", "Countries and Nationalities", "🌍", [["🌍", "Ülkeleri ve milliyetleri öğreniyoruz: Where are you from? I am from Turkey."]], {
          kelimeler: [["Turkey", "Türkiye", "🇹🇷"], ["Turkish", "Türk", ""], ["Germany", "Almanya", "🇩🇪"], ["German", "Alman", ""], ["England", "İngiltere", "💂"], ["English", "İngiliz", ""], ["Japan", "Japonya", "🇯🇵"], ["Japanese", "Japon", ""], ["Italy", "İtalya", "🇮🇹"], ["Italian", "İtalyan", ""], ["China", "Çin", "🇨🇳"], ["Chinese", "Çinli", ""], ["Russia", "Rusya", "🇷🇺"], ["Russian", "Rus", ""]],
          cumleler: [["Where are you from?", "Nerelisin?"], ["I am from Turkey.", "Türkiyeliyim."], ["I am Turkish.", "Ben Türk'üm."], ["Where is he from?", "O nereli?"], ["He is from Japan.", "O Japonyalı."]],
          bosluk: [["Where ___ you from?", "are", ["is", "am"], "Nerelisin?"], ["She is from Italy. She is ___.", "Italian", ["Italy", "German"], "O İtalya'dan. O İtalyan."], ["I am from ___. I am Turkish.", "Turkey", ["Japan", "China"], "Türkiye'denim. Ben Türk'üm."], ["Where is he from? He ___ from Germany.", "is", ["are", "am"], "O nereli? Almanya'dan."]]
        })
      ] },
      { id: "et3", ad: "Unit 3: Cartoon Characters", konular: [
        konu("e4", "Can / Can't (Yetenekler)", "🦸", [["🦸", "Çizgi film kahramanlarının neler yapabildiğini anlatıyoruz: He can fly. She can't swim."]], {
          kelimeler: [["fly", "uçmak", "🕊️"], ["swim", "yüzmek", "🏊"], ["run", "koşmak", "🏃"], ["jump", "zıplamak", "🤸"], ["climb", "tırmanmak", "🧗"], ["dance", "dans etmek", "💃"], ["sing", "şarkı söylemek", "🎤"], ["ride a bike", "bisiklet sürmek", "🚴"], ["strong", "güçlü", "💪"], ["brave", "cesur", "🦁"], ["fast", "hızlı", "⚡"]],
          cumleler: [["He can fly.", "O uçabilir."], ["She can't swim.", "O yüzemez."], ["Can you jump?", "Zıplayabilir misin?"], ["Yes, I can.", "Evet, yapabilirim."], ["No, I can't.", "Hayır, yapamam."]],
          bosluk: [["Birds ___ fly.", "can", ["can't", "is"], "Kuşlar uçabilir."], ["Fish ___ climb trees.", "can't", ["can", "are"], "Balıklar ağaca tırmanamaz."], ["___ you swim? Yes, I can.", "Can", ["Are", "Is"], "Yüzebilir misin? Evet."], ["Superman is very ___.", "strong", ["slow", "weak"], "Süpermen çok güçlüdür."]]
        })
      ] },
      { id: "et4", ad: "Unit 4: Free Time", konular: [
        konu("e5", "Days and Free Time Activities", "🎲", [["🎲", "Haftanın günlerini ve boş zaman etkinliklerini öğreniyoruz: I play chess on Sundays."]], {
          kelimeler: [["play chess", "satranç oynamak", "♟️"], ["play football", "futbol oynamak", "⚽"], ["read books", "kitap okumak", "📚"], ["watch TV", "televizyon izlemek", "📺"], ["play the guitar", "gitar çalmak", "🎸"], ["draw pictures", "resim çizmek", "🎨"], ["Monday", "Pazartesi", ""], ["Wednesday", "Çarşamba", ""], ["Saturday", "Cumartesi", ""], ["Sunday", "Pazar", ""], ["weekend", "hafta sonu", "🎉"]],
          cumleler: [["What do you do in your free time?", "Boş zamanında ne yaparsın?"], ["I play chess on Sundays.", "Pazar günleri satranç oynarım."], ["I read books at the weekend.", "Hafta sonu kitap okurum."], ["I like playing football.", "Futbol oynamayı severim."]],
          bosluk: [["I play football ___ Mondays.", "on", ["in", "at"], "Pazartesi günleri futbol oynarım."], ["What do you do in your free ___?", "time", ["day", "book"], "Boş zamanında ne yaparsın?"], ["I like ___ the guitar.", "playing", ["play", "plays"], "Gitar çalmayı severim."], ["Saturday and Sunday are the ___.", "weekend", ["week", "day"], "Cumartesi ve Pazar hafta sonudur."]]
        })
      ] },
      { id: "et5", ad: "Unit 5: My Day", konular: [
        konu("e6", "Daily Routines (Günlük Rutinler)", "⏰", [["⏰", "Günlük işlerimizi ve saatleri anlatıyoruz: I get up at seven o'clock."]], {
          kelimeler: [["get up", "kalkmak", "🛏️"], ["have breakfast", "kahvaltı yapmak", "🍳"], ["go to school", "okula gitmek", "🏫"], ["have lunch", "öğle yemeği yemek", "🍲"], ["do homework", "ödev yapmak", "📝"], ["have dinner", "akşam yemeği yemek", "🍽️"], ["brush my teeth", "dişlerimi fırçalamak", "🪥"], ["go to bed", "yatmak", "😴"], ["morning", "sabah", "🌅"], ["evening", "akşam", "🌆"]],
          cumleler: [["I get up at seven o'clock.", "Saat yedide kalkarım."], ["What time is it?", "Saat kaç?"], ["It's eight o'clock.", "Saat sekiz."], ["I go to bed at nine.", "Dokuzda yatarım."], ["I have breakfast in the morning.", "Sabah kahvaltı yaparım."]],
          bosluk: [["I get up ___ seven o'clock.", "at", ["on", "in"], "Saat yedide kalkarım."], ["I have breakfast ___ the morning.", "in", ["at", "on"], "Sabah kahvaltı yaparım."], ["What ___ is it? It's ten o'clock.", "time", ["day", "name"], "Saat kaç? On."], ["I ___ my homework in the evening.", "do", ["make", "play"], "Akşam ödevimi yaparım."]]
        })
      ] },
      { id: "et6", ad: "Unit 6: Fun with Science", konular: [
        konu("e7", "Science Experiments (Deneyler)", "🔬", [["🔬", "Deney talimatlarını öğreniyoruz: Mix the water and the salt."]], {
          kelimeler: [["mix", "karıştırmak", "🥣"], ["pour", "dökmek", "🫗"], ["cut", "kesmek", "✂️"], ["fold", "katlamak", "📄"], ["paint", "boyamak", "🎨"], ["glue", "yapıştırmak", "🧴"], ["water", "su", "💧"], ["salt", "tuz", "🧂"], ["experiment", "deney", "🧪"], ["magnet", "mıknatıs", "🧲"]],
          cumleler: [["Mix the water and the salt.", "Suyu ve tuzu karıştır."], ["Pour the water into the glass.", "Suyu bardağa dök."], ["Cut the paper.", "Kâğıdı kes."], ["What color is it now?", "Şimdi ne renk?"]],
          bosluk: [["___ the paper with scissors.", "Cut", ["Pour", "Drink"], "Kâğıdı makasla kes."], ["___ the water into the glass.", "Pour", ["Cut", "Fold"], "Suyu bardağa dök."], ["Red and yellow make ___.", "orange", ["green", "purple"], "Kırmızı ve sarı turuncu yapar."], ["Blue and yellow make ___.", "green", ["orange", "pink"], "Mavi ve sarı yeşil yapar."]]
        })
      ] },
      { id: "et7", ad: "Unit 7: Jobs", konular: [
        konu("e8", "Jobs (Meslekler)", "👩‍⚕️", [["👩‍⚕️", "Meslekleri öğreniyoruz: What does she do? She is a doctor."]], {
          kelimeler: [["doctor", "doktor", "🧑‍⚕️"], ["teacher", "öğretmen", "🧑‍🏫"], ["pilot", "pilot", "🧑‍✈️"], ["cook", "aşçı", "🧑‍🍳"], ["farmer", "çiftçi", "🧑‍🌾"], ["firefighter", "itfaiyeci", "🧑‍🚒"], ["police officer", "polis memuru", "👮"], ["vet", "veteriner", "🐾"], ["dentist", "diş hekimi", "🦷"], ["singer", "şarkıcı", "🎤"], ["engineer", "mühendis", "👷"]],
          cumleler: [["What does she do?", "O ne iş yapar?"], ["She is a doctor.", "O bir doktor."], ["I want to be a pilot.", "Pilot olmak istiyorum."], ["Firefighters put out fires.", "İtfaiyeciler yangın söndürür."], ["Where does he work?", "O nerede çalışır?"]],
          bosluk: [["A ___ works in a hospital.", "doctor", ["farmer", "pilot"], "Doktor hastanede çalışır."], ["A ___ flies a plane.", "pilot", ["cook", "vet"], "Pilot uçak uçurur."], ["A ___ cooks food.", "cook", ["dentist", "singer"], "Aşçı yemek pişirir."], ["I want ___ be a teacher.", "to", ["at", "on"], "Öğretmen olmak istiyorum."]]
        })
      ] },
      { id: "et8", ad: "Unit 8: My Clothes", konular: [
        konu("e9", "Clothes and Seasons (Kıyafetler)", "🧥", [["🧥", "Mevsimlere göre kıyafetleri anlatıyoruz: It's cold. Wear your coat."]], {
          kelimeler: [["coat", "mont", "🧥"], ["scarf", "atkı", "🧣"], ["gloves", "eldiven", "🧤"], ["boots", "çizme", "👢"], ["T-shirt", "tişört", "👕"], ["shorts", "şort", "🩳"], ["hat", "şapka", "👒"], ["sunglasses", "güneş gözlüğü", "🕶️"], ["winter", "kış", "⛄"], ["summer", "yaz", "☀️"], ["autumn", "sonbahar", "🍂"], ["spring", "ilkbahar", "🌸"]],
          cumleler: [["It is cold. Wear your coat.", "Hava soğuk. Montunu giy."], ["It is hot. Wear your shorts.", "Hava sıcak. Şortunu giy."], ["What's the weather like?", "Hava nasıl?"], ["It is snowy.", "Hava karlı."]],
          bosluk: [["It's ___. Wear your gloves.", "cold", ["hot", "sunny"], "Hava soğuk. Eldivenlerini giy."], ["It's sunny. Wear your ___.", "sunglasses", ["boots", "scarf"], "Hava güneşli. Güneş gözlüğünü tak."], ["We wear coats in ___.", "winter", ["summer", "spring"], "Kışın mont giyeriz."], ["What's the weather ___?", "like", ["is", "are"], "Hava nasıl?"]]
        })
      ] },
      { id: "et9", ad: "Unit 9: My Friends", konular: [
        konu("e10", "Describing Friends (Arkadaşlarımı Tanıtıyorum)", "🧑‍🤝‍🧑", [["🧑‍🤝‍🧑", "Arkadaşlarımızın dış görünüşünü anlatıyoruz: She has got long hair."]], {
          kelimeler: [["tall", "uzun boylu", "🦒"], ["short", "kısa boylu", "🐧"], ["long hair", "uzun saç", "👩‍🦰"], ["short hair", "kısa saç", "👦"], ["curly hair", "kıvırcık saç", "👨‍🦱"], ["blue eyes", "mavi gözler", "🔵"], ["brown eyes", "kahverengi gözler", "🟤"], ["glasses", "gözlük", "👓"], ["beard", "sakal", "🧔"], ["friendly", "arkadaş canlısı", "😊"]],
          cumleler: [["She has got long hair.", "Onun uzun saçları var."], ["He has got blue eyes.", "Onun mavi gözleri var."], ["My best friend is tall.", "En iyi arkadaşım uzun boylu."], ["He hasn't got glasses.", "Onun gözlüğü yok."]],
          bosluk: [["She ___ got curly hair.", "has", ["have", "is"], "Onun kıvırcık saçı var."], ["I ___ got brown eyes.", "have", ["has", "am"], "Kahverengi gözlerim var."], ["My friend is very ___. He has many friends.", "friendly", ["short", "glasses"], "Arkadaşım çok sosyal, çok arkadaşı var."], ["He ___ got a beard.", "hasn't", ["haven't", "isn't"], "Onun sakalı yok."]]
        })
      ] },
      { id: "et10", ad: "Unit 10: Food and Drinks", konular: [
        konu("e11", "Food and Drinks (Yiyecek ve İçecek)", "🍽️", [["🍽️", "Yiyecek ve içecekleri, aç ve susamış olmayı anlatıyoruz: I'm hungry. Can I have some bread?"]], {
          kelimeler: [["bread", "ekmek", "🍞"], ["cheese", "peynir", "🧀"], ["egg", "yumurta", "🥚"], ["honey", "bal", "🍯"], ["olive", "zeytin", "🫒"], ["milk", "süt", "🥛"], ["juice", "meyve suyu", "🧃"], ["soup", "çorba", "🍲"], ["chicken", "tavuk", "🍗"], ["hungry", "aç", "😋"], ["thirsty", "susamış", "🥤"]],
          cumleler: [["I'm hungry.", "Açım."], ["I'm thirsty.", "Susadım."], ["Can I have some milk, please?", "Biraz süt alabilir miyim lütfen?"], ["Here you are.", "Buyurun."], ["What do you want for breakfast?", "Kahvaltıda ne istersin?"]],
          bosluk: [["I'm ___. I want some water.", "thirsty", ["hungry", "tired"], "Susadım. Biraz su istiyorum."], ["I'm ___. I want some soup.", "hungry", ["thirsty", "cold"], "Açım. Biraz çorba istiyorum."], ["Can I have ___ cheese, please?", "some", ["a", "an"], "Biraz peynir alabilir miyim?"], ["Here you ___.", "are", ["is", "am"], "Buyurun."]]
        })
      ] }
    ]
  };
})();
