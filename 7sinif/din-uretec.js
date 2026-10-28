// 7. sınıf Din Kültürü soru üreteçleri
(function () {
  const U = window.URETEC, { soru, pick, tiplerden, eslestir, siniflandir, ifadeler } = window.UR;

  const MELEK = [["Cebrail", "peygamberlere vahiy getirmek"], ["Mikail", "tabiat olaylarını yönetmek"], ["İsrafil", "sura üflemek"], ["Azrail", "ölüm vakti gelenlerin canını almak"], ["Kirâmen Kâtibîn", "iyi ve kötü amelleri yazmak"], ["Münker ve Nekir", "kabirde sorgu yapmak"]];
  U.d1k1 = tiplerden([
    eslestir(MELEK, (a) => `${a} meleğinin görevi hangisidir?`, (b) => `"${b}" ile görevli melek(ler) hangisidir?`, (a, b) => `${a}: ${b}.`),
    siniflandir({ "görülen varlık": ["insan", "kedi", "çam ağacı", "kartal", "balık"], "görülmeyen varlık": ["melek", "cin", "şeytan"] }, (g) => `Hangisi ${g}tır?`, (d, g) => `"${d}" ${g}tır.`),
    ifadeler(["Melekler nurdan yaratılmıştır.", "Melekler Allah'a asla isyan etmez.", "Cinler ateşten yaratılmıştır.", "Meleklere iman imanın esaslarındandır.", "Melekler yemez, içmez, uyumaz."], ["Melekler topraktan yaratılmıştır.", "Melekler Allah'ın emirlerine karşı gelebilir.", "Cinlerin hepsi iyidir.", "Melekler gözle görülebilir.", "Şeytan insanı iyiliğe çağırır."], "Melekler")
  ]);

  const AH = ["ölüm", "kabir hayatı", "kıyamet", "yeniden diriliş (ba's)", "mahşer", "hesap ve mizan", "cennet ya da cehennem"];
  U.d1k2 = tiplerden([
    eslestir([["ba's", "ölümden sonra yeniden diriliş"], ["mahşer", "insanların hesap için toplanacağı yer"], ["mizan", "amellerin tartılması"], ["kıyamet", "dünya hayatının sona ermesi"], ["berzah", "kabir hayatı"], ["amel defteri", "kişinin yaptıklarının kaydı"], ["sırat", "cennete giden yol üzerindeki köprü"]], (a) => `"${a}" kavramının anlamı nedir?`, (b) => `"${b}" hangi kavramla ifade edilir?`, (a, b) => `${a}: ${b}.`),
    () => { const i = Math.floor(Math.random() * (AH.length - 1)); return soru(`Ahiret aşamalarında "${AH[i]}" aşamasından sonra hangisi gelir?`, AH[i + 1].charAt(0).toLocaleUpperCase("tr") + AH[i + 1].slice(1), AH.filter((x, j) => j !== i && j !== i + 1).map((x) => x.charAt(0).toLocaleUpperCase("tr") + x.slice(1)), `Sıra: ${AH.join(" → ")}.`); },
    ifadeler(["Ahiret hayatı sonsuzdur.", "Ahiret inancı insanı sorumlu davranmaya yöneltir.", "Ahirette herkes yaptıklarının karşılığını görür.", "Kıyametin ne zaman kopacağını yalnızca Allah bilir.", "Ahirete iman imanın esaslarındandır."], ["Ahiret hayatı ölümden önce başlar.", "Kıyametin zamanını insanlar bilir.", "Ahirette hesap yoktur.", "Mizan kabir sorgusudur.", "Ahiret inancının ahlaka etkisi yoktur."], "Ahiret")
  ]);

  const SURE = [["Nâs", "114. suredir, vesveseden Allah'a sığınmayı öğretir"], ["Felak", "113. suredir, yaratılanların şerrinden Allah'a sığınmayı öğretir"], ["Kâfirûn", "109. suredir, 'Sizin dininiz size, benim dinim banadır.'"], ["Nasr", "110. suredir, Mekke'nin fethini müjdeler"], ["İhlas", "112. suredir, Allah'ın birliğini anlatır"], ["Fatiha", "Kur'an'ın ilk suresidir"]];
  const SURE_S = (ad) => tiplerden([
    eslestir(SURE, (a) => `${a} suresi ile ilgili hangisi doğrudur?`, (b) => `"${b}" ifadesi hangi sure içindir?`, (a, b) => `${a}: ${b}.`),
    ...(ad ? [ad] : [])
  ]);
  U.d1k3 = SURE_S(ifadeler(["Nâs suresi Kur'an'ın son suresidir.", "Nâs suresi Mekke'de inmiştir.", "Vesvese kalbe kötü düşünce fısıldamaktır.", "Nâs ve Felak sureleri sığınma sureleridir.", "Nâs suresi altı ayettir."], ["Nâs suresi Kur'an'ın ilk suresidir.", "Nâs suresi hac ibadetini anlatır.", "Vesvese iyiliğe teşviktir.", "Nâs suresi Medine'de inmiştir.", "Nâs suresi yirmi ayettir."], "Nâs suresi"));
  U.d2k3 = SURE_S(ifadeler(["Kâfirûn suresi Mekke'de inmiştir.", "Kâfirûn suresi inançta taviz verilmeyeceğini öğretir.", "Kâfirûn suresi din özgürlüğünü hatırlatır.", "Kâfirûn suresi müşriklerin teklifine cevaptır.", "Kâfirûn suresi altı ayettir."], ["Kâfirûn suresi Mekke'nin fethini anlatır.", "Kâfirûn suresi Kur'an'ın ilk suresidir.", "Kâfirûn suresi dinde zorlamayı emreder.", "Kâfirûn suresi Medine'de inmiştir.", "Kâfirûn suresi kurbanı anlatır."], "Kâfirûn suresi"));
  U.d4k3 = SURE_S(ifadeler(["Nasr suresi Medine'de inmiştir.", "Nasr 'yardım, zafer' demektir.", "Nasr suresi üç ayettir.", "Nasr suresi başarıda şükretmeyi öğretir.", "Nasr suresi insanların bölük bölük İslam'a girişini anlatır."], ["Nasr suresi Kur'an'ın en uzun suresidir.", "Nasr suresi zaferde övünmeyi öğütler.", "Nasr suresi ilk inen suredir.", "Nasr suresi hicreti anlatır.", "Nasr 'karanlık' demektir."], "Nasr suresi"));

  U.d2k1 = tiplerden([
    siniflandir({ "farz": ["ihrama girmek", "Arafat'ta vakfe", "ziyaret tavafı"], "vacip": ["Müzdelife vakfesi", "sa'y", "şeytan taşlama", "tıraş olmak", "veda tavafı"] }, (g) => `Hangisi haccın ${g === "farz" ? "farzlarından" : "vaciplerinden"} biridir?`, (d, g) => `"${d}" haccın ${g === "farz" ? "farzlarındandır" : "vaciplerindendir"}.`),
    eslestir([["ihram", "hacıların giydiği dikişsiz örtü ve girilen özel hâl"], ["tavaf", "Kâbe'nin etrafında yedi kez dönmek"], ["sa'y", "Safa ile Merve arasında yedi kez gidip gelmek"], ["vakfe", "Arafat'ta bir süre durmak"], ["telbiye", "'Lebbeyk Allahümme lebbeyk' diye dua etmek"], ["umre", "yılın her zamanında yapılabilen Kâbe ziyareti"]], (a) => `"${a}" ne demektir?`, (b) => `"${b}" hangi kavramdır?`, (a, b) => `${a}: ${b}.`),
    ifadeler(["Hac gücü yeten Müslümana ömründe bir kez farzdır.", "Hac Zilhicce ayında yapılır.", "İhram insanların eşitliğini hatırlatır.", "Umre yılın her zamanında yapılabilir.", "Hac kardeşlik bilincini güçlendirir."], ["Hac her yıl yapılması gereken bir farzdır.", "Umre yalnızca Zilhicce ayında yapılır.", "Sa'y haccın farzıdır.", "Hac Medine'de yapılır.", "Tavaf Arafat'ta yapılır."], "Hac ve umre")
  ]);

  U.d2k2 = tiplerden([
    siniflandir({ "bir kişi adına kesilir": ["koyun", "keçi"], "yedi kişiye kadar ortak kesilebilir": ["sığır", "deve"] }, (g) => `Hangi kurbanlık hayvan ${g}?`, (d, g) => `${d}: ${g}.`),
    () => { const d = pick(["Hayvana su verilmesi ve eziyet edilmemesi", "Kurban etinin ihtiyaç sahipleriyle paylaşılması", "Hayvanın diğer hayvanların önünde kesilmemesi", "Sağlıklı bir hayvanın seçilmesi", "Kurbanın bayram günlerinde kesilmesi"]); return soru("Hangisi kurban ibadetinde dikkat edilmesi gereken doğru bir davranıştır?", d, ["Hayvana eziyet etmek", "Hasta bir hayvanı kurban etmek", "Etin tamamını israf etmek", "Kurbanı diğer hayvanların önünde kesmek"], `${d} doğru bir davranıştır.`); },
    ifadeler(["Kurban 'yaklaşmak' anlamına gelir.", "Kurban Hz. İbrahim'in teslimiyetini hatırlatır.", "Kurban eti paylaşılarak yardımlaşma güçlenir.", "Kurban, Kurban Bayramı günlerinde kesilir.", "Sığır yedi kişiye kadar ortak kesilebilir."], ["Koyun yedi kişi adına kesilebilir.", "Kurban yılın her günü kesilir.", "Kurban Hz. Musa'nın kıssasına dayanır.", "Kurbanda hayvanın sağlığı önemsizdir.", "Kurban eti paylaşılmaz."], "Kurban")
  ]);

  U.d3k1 = tiplerden([
    siniflandir({ "itikadi (inanç) mezhep": ["Maturidilik", "Eş'arilik"], "fıkhi (amelî) mezhep": ["Hanefilik", "Şafiilik", "Malikilik", "Hanbelilik", "Caferilik"] }, (g) => `Hangisi ${g}tir?`, (d, g) => `${d}: ${g}.`),
    eslestir([["Maturidilik", "İmam Maturidi"], ["Eş'arilik", "İmam Eş'ari"], ["Hanefilik", "İmam-ı Azam Ebu Hanife"], ["Şafiilik", "İmam Şafii"], ["Malikilik", "İmam Malik"], ["Hanbelilik", "Ahmed b. Hanbel"], ["Caferilik", "Cafer-i Sadık"]], (a) => `${a} mezhebi hangi âlime dayanır?`, (b) => `${b} hangi mezhebin kurucusu kabul edilir?`, (a, b) => `${a}: ${b}.`),
    ifadeler(["Mezhepler dini anlama yollarıdır.", "Kültür ve coğrafya yorum farklılıklarına yol açmıştır.", "Ülkemizde en yaygın fıkhi mezhep Hanefiliktir.", "Bütün mezhepler Kur'an'a ve Peygamber'e inanır.", "Farklı yorumlara saygı birliği güçlendirir."], ["Mezhepler dinin kendisidir.", "Her mezhebin ayrı bir Kur'an'ı vardır.", "Maturidilik bir fıkıh mezhebidir.", "Yorum farklılıkları düşmanlık sebebidir.", "Hanefilik bir Hristiyan mezhebidir."], "Mezhepler")
  ]);

  U.d3k2 = tiplerden([
    eslestir([["Hacı Bektaş Veli", "\"Eline, beline, diline sahip ol.\""], ["Mevlana", "\"Gel, ne olursan ol yine gel.\""], ["Yunus Emre", "\"Yaratılanı severiz Yaratandan ötürü.\""], ["Hoca Ahmet Yesevi", "Divan-ı Hikmet ve Yesevilik"]], (a) => `${a} ile ilgili hangisi doğrudur?`, (b) => `${b} kime aittir?`, (a, b) => `${a}: ${b}.`),
    eslestir([["cem", "cemevinde topluca yapılan ibadet"], ["dede", "cemde rehberlik eden kişi"], ["semah", "cemde yapılan ritmik dönüş"], ["musahiplik", "iki ailenin kardeşlik bağı"], ["lokma", "cemde paylaşılan yiyecek"], ["tarikat", "tasavvufta izlenen yol"]], (a) => `"${a}" ne demektir?`, (b) => `"${b}" hangi kavramdır?`, (a, b) => `${a}: ${b}.`),
    ifadeler(["Tasavvuf Allah sevgisini merkeze alır.", "Alevilik-Bektaşilikte Hz. Ali sevgisi önemlidir.", "Cemde deyişler söylenir ve semah dönülür.", "Tasavvuf güzel ahlakı amaçlar.", "Bu yorumlar Allah'a iman ve güzel ahlakta buluşur."], ["Cem Kâbe'de yapılan bir ibadettir.", "Mevlevilik Hacı Bektaş Veli'ye dayanır.", "Tasavvuf nefis terbiyesini önemsemez.", "Semah haccın farzıdır.", "Musahiplik bir yemek adıdır."], "Tasavvuf ve Alevilik")
  ]);

  const OLAY = [["Hz. Muhammed'in doğumu", "571"], ["İlk vahiy", "610"], ["Hicret", "622"], ["Bedir Savaşı", "624"], ["Uhud Savaşı", "625"], ["Hendek Savaşı", "627"], ["Hudeybiye Antlaşması", "628"], ["Mekke'nin fethi", "630"], ["Veda Haccı", "632"]];
  U.d4k1 = tiplerden([
    eslestir([["Abdullah", "Peygamberimizin babası"], ["Amine", "Peygamberimizin annesi"], ["Abdülmuttalip", "Peygamberimizin dedesi"], ["Ebu Talip", "Peygamberimizi büyüten amcası"], ["Hz. Hatice", "ilk Müslüman ve Peygamberimizin eşi"], ["Hz. Ebubekir", "ilk Müslüman olan yetişkin erkek"], ["Hz. Ali", "ilk Müslüman olan çocuk"]], (a) => `${a} kimdir?`, (b) => `"${b}" kimdir?`, (a, b) => `${a}: ${b}.`),
    eslestir([["Hira Mağarası", "ilk vahyin geldiği yer"], ["Habeşistan", "Müslümanların ilk göç ettiği ülke"], ["Taif", "Peygamberimizin taşlandığı şehir"], ["Akabe", "Medinelilerle biat yapılan yer"], ["Sevr Mağarası", "hicret yolculuğunda saklanılan yer"]], (a) => `${a} hangi olayla ilgilidir?`, (b) => `"${b}" neresidir?`, (a, b) => `${a}: ${b}.`),
    ifadeler(["Peygamberimiz 571'de Mekke'de doğdu.", "İlk inen ayetler Alak suresindendir.", "Peygamberimiz Taif'te taşlanınca beddua etmedi.", "Mekke'de Müslümanlara boykot uygulandı.", "Peygamberimiz 'Muhammedü'l-Emin' olarak tanınırdı."], ["İlk vahiy Medine'de geldi.", "Peygamberimiz 40 yaşından önce peygamber oldu.", "İlk inen sure Fatiha'dır.", "Müslümanlar ilk olarak Mısır'a göç etti.", "Peygamberimizi dedesi hiç görmedi."], "Mekke dönemi")
  ]);

  U.d4k2 = tiplerden([
    eslestir(OLAY, (a) => `${a} hangi yıldadır?`, (b) => `${b} yılında hangisi gerçekleşmiştir?`, (a, b) => `${a}: ${b}.`),
    eslestir([["muhacir", "Mekke'den Medine'ye göç eden Müslüman"], ["ensar", "muhacirlere yardım eden Medineli"], ["Suffe", "Mescid-i Nebevi yanındaki eğitim yeri"], ["Medine Sözleşmesi", "farklı toplulukların bir arada yaşama anlaşması"], ["Veda Hutbesi", "insan haklarını vurgulayan son büyük hutbe"]], (a) => `"${a}" ne demektir?`, (b) => `"${b}" hangi kavramdır?`, (a, b) => `${a}: ${b}.`),
    ifadeler(["Hicret Hicri takvimin başlangıcıdır.", "Mekke kan dökülmeden fethedildi.", "Peygamberimiz fetihte eski düşmanlarını affetti.", "Veda Hutbesi'nde can ve malın dokunulmaz olduğu bildirildi.", "Muhacir ve ensar arasında kardeşlik kuruldu."], ["Hicret 571'de gerçekleşti.", "Mekke'nin fethinde büyük savaş yapıldı.", "Veda Hutbesi Mekke döneminin başında okundu.", "Ensar Mekke'den göç edenlerdir.", "Medine Sözleşmesi savaşı başlattı."], "Medine dönemi")
  ]);

  const DIN = [["Yahudilik", "Tevrat (Tanah)", "sinagog", "cumartesi", "Hz. Musa", "haham"], ["Hristiyanlık", "İncil (Kitab-ı Mukaddes)", "kilise", "pazar", "Hz. İsa", "papaz"], ["Hinduizm", "Vedalar", "mandir (tapınak)", "-", "belirli kurucusu yok", "brahman"], ["Budizm", "Tripitaka", "pagoda (tapınak)", "-", "Siddhartha Gautama (Buda)", "rahip (keşiş)"]];
  U.d5k1 = tiplerden([
    eslestir(DIN.slice(0, 2).concat([["İslam", "Kur'an-ı Kerim"]]).map((d) => [d[0], d[1]]), (a) => `${a} dininin kutsal kitabı hangisidir?`, (b) => `${b} hangi dinin kutsal kitabıdır?`, (a, b) => `${a}: ${b}.`),
    eslestir([["Yahudilik", "sinagog"], ["Hristiyanlık", "kilise"], ["İslam", "cami"], ["Hinduizm", "mandir (tapınak)"]], (a) => `${a} dininin ibadethanesine ne denir?`, (b) => `"${b}" hangi dinin ibadethanesidir?`, (a, b) => `${a}: ${b}.`),
    eslestir([["Yahudilik", "cumartesi (Şabat)"], ["Hristiyanlık", "pazar"], ["İslam", "cuma"]], (a) => `${a} dininde kutsal kabul edilen gün hangisidir?`, (b) => `${b} günü hangi dinde kutsal kabul edilir?`, (a, b) => `${a}: ${b}.`),
    siniflandir({ "Yahudilik": ["Hamursuz Bayramı (Pesah)", "haham", "Şabat", "Hz. Musa"], "Hristiyanlık": ["Noel", "Paskalya", "papaz", "Vatikan", "Ortodoksluk"] }, (g) => `Hangisi ${g} ile ilgilidir?`, (d, g) => `"${d}" → ${g}.`, (d) => `"${d}" hangi dinle ilgilidir?`)
  ]);

  U.d5k2 = tiplerden([
    siniflandir({ "Hinduizm": ["Vedalar", "Ganj nehri", "ineğe saygı", "belirli bir kurucusu olmaması"], "Budizm": ["Siddhartha Gautama", "Tripitaka", "nirvana", "dört yüce gerçek", "sekiz dilimli yol"] }, (g) => `Hangisi ${g} ile ilgilidir?`, (d, g) => `"${d}" → ${g}.`, (d) => `"${d}" hangi dinle ilgilidir?`),
    eslestir([["reenkarnasyon", "ruhun başka bir bedende yeniden doğması"], ["karma", "her davranışın karşılığının görülmesi"], ["nirvana", "arzulardan arınılarak ulaşılan huzur"], ["meditasyon", "zihni toplayıp derin düşünme"], ["Buda", "aydınlanmış kişi"]], (a) => `"${a}" ne demektir?`, (b) => `"${b}" hangi kavramdır?`, (a, b) => `${a}: ${b}.`),
    ifadeler(["Hinduizm Hindistan'da ortaya çıkmıştır.", "Budizm Asya ülkelerinde yaygındır.", "Budizme göre acının kaynağı arzulardır.", "Hinduizmin belirli bir kurucusu yoktur.", "Farklı dinleri tanımak saygılı bir arada yaşamaya katkı sağlar."], ["Budizmin kutsal kitabı Vedalar'dır.", "Hinduizmi Buda kurmuştur.", "Nirvana bir ibadethanedir.", "Budizm Avrupa'da doğmuştur.", "Karma ruhun göçüdür."], "Hinduizm ve Budizm")
  ]);
})();
