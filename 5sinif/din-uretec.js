// 5. sınıf Din Kültürü soru üreteçleri
(function () {
  const U = window.URETEC, { r, pick, soru, tiplerden, eslestir, siniflandir, ifadeler, dir } = window.UR;

  const ESMA = [["Er-Rahman", "dünyada bütün canlılara merhamet eden"], ["Er-Rahim", "merhameti sonsuz olan"], ["El-Halık", "her şeyi yoktan yaratan"], ["Er-Rezzak", "bütün canlılara rızık veren"], ["El-Alim", "her şeyi bilen"], ["Es-Semi", "her şeyi işiten"], ["El-Basir", "her şeyi gören"], ["El-Kadir", "gücü her şeye yeten"], ["El-Vedud", "kullarını çok seven"], ["El-Gafur", "bağışlaması çok olan"], ["El-Adl", "mutlak adalet sahibi"], ["El-Hakim", "her işi hikmetli olan"]];
  U.d1k1 = tiplerden([
    ifadeler(["Evrende her şey bir düzen içindedir.", "Gece ve gündüzün oluşması evrendeki düzene örnektir.", "Tevhit, Allah'ın bir ve tek olduğuna inanmaktır.", "Kur'an insanları evreni gözlemlemeye çağırır.", "Mevsimlerin sırayla gelmesi düzenin bir göstergesidir."], ["Evrendeki düzen tesadüfen oluşmuştur.", "Tevhit, Allah'a ortak koşmaktır.", "Gezegenler rastgele hareket eder.", "Kur'an düşünmeyi yasaklar.", "Mevsimler düzensiz gelir."], "Allah inancı"),
    () => { const l = ["gece ve gündüzün birbirini izlemesi", "mevsimlerin sırayla gelmesi", "gezegenlerin yörüngelerinde dönmesi", "kalbin düzenli atması", "bitkilerin güneş ışığıyla besin üretmesi", "suyun buharlaşıp yağmur olarak dönmesi"]; return soru("Hangisi evrendeki düzene bir örnektir?", pick(l), ["bir bardağın elden düşüp kırılması", "bir oyuncağın kaybolması", "bir kalemin ucunun kırılması", "trafikte kaza olması"], "Doğadaki düzenli olaylar evrendeki düzeni gösterir."); }
  ]);
  U.d1k2 = eslestir(ESMA, (a) => `${a} isminin anlamı nedir?`, (b) => `"${b}" anlamına gelen isim hangisidir?`, (a, b) => `${a}: ${b}.`);
  const SURE = [["İhlas", "Allah'ın birliğini anlatır, 4 ayettir"], ["Kevser", "Kur'an'ın en kısa suresidir, 3 ayettir"], ["Kureyş", "Kureyş kabilesine verilen güven ve bolluğu hatırlatır"], ["Fatiha", "Kur'an'ın ilk suresidir, namazın her rekâtında okunur"], ["Nas", "Kur'an'ın son suresidir"]];
  U.d1k3 = tiplerden([
    eslestir(SURE, (a) => `${a} suresi ile ilgili hangisi doğrudur?`, (b) => `Hangi sure "${b}"?`, (a, b) => `${a}: ${b}.`),
    ifadeler(["İhlas suresi Mekke'de inmiştir.", "İhlas suresi 4 ayettir.", "İhlas suresinin konusu tevhittir.", "İhlas 'samimiyet, içtenlik' demektir.", "İhlas suresi Allah'ın hiçbir şeye muhtaç olmadığını bildirir.", "İhlas suresi Kur'an'ın 112. suresidir."], ["İhlas suresi Medine'de inmiştir.", "İhlas suresi 10 ayettir.", "İhlas suresinin konusu hac ibadetidir.", "İhlas 'bolluk' demektir.", "İhlas suresi Kur'an'ın ilk suresidir.", "İhlas suresi peygamber kıssalarını anlatır."], "İhlas suresi")
  ]);

  const NAMAZ = [["sabah", 2], ["öğle", 4], ["ikindi", 4], ["akşam", 3], ["yatsı", 4]];
  U.d2k1 = tiplerden([
    siniflandir({ "farz": ["beş vakit namaz", "cuma namazı"], "vacip": ["vitir namazı", "Ramazan Bayramı namazı", "Kurban Bayramı namazı"], "nafile": ["sabah namazının sünneti", "teravih namazı", "kuşluk namazı"] }, (g) => `Hangisinin hükmü ${dir(g)}?`, (d, g) => `${d}: ${g}.`),
    siniflandir({ "namazın dıştaki şartlarından (şartlar)": ["abdest almak", "kıbleye yönelmek", "vaktin girmesi", "niyet etmek", "avret yerlerini örtmek", "temizlik"], "namazın içindeki farzlarından (rükünler)": ["iftitah tekbiri", "kıyam", "kıraat", "rükû", "secde", "son oturuş"] }, (g) => `Hangisi ${g} biridir?`, (d, g) => `${d}: ${g}.`),
    () => soru("Beş vakit namaz hangileridir?", "Sabah, öğle, ikindi, akşam, yatsı", ["Sabah, öğle, akşam, vitir, teravih", "Öğle, ikindi, akşam, bayram, cuma", "Sabah, kuşluk, öğle, akşam, yatsı"], "Beş vakit: sabah, öğle, ikindi, akşam, yatsı.")
  ]);
  U.d2k2 = tiplerden([
    () => { const [v, n] = pick(NAMAZ); return soru(`${v.charAt(0).toLocaleUpperCase("tr") + v.slice(1)} namazının farzı kaç rekâttır?`, String(n), ["2", "3", "4", "5"].filter((x) => x !== String(n)), `${v} namazının farzı ${n} rekâttır.`); },
    eslestir([["kıyam", "namazda ayakta durmak"], ["kıraat", "namazda Kur'an'dan okumak"], ["rükû", "eller dizlerde öne eğilmek"], ["secde", "alnı ve burnu yere koymak"], ["iftitah tekbiri", "namaza başlarken Allahu Ekber demek"], ["selam", "namazı bitirmek için başı sağa ve sola çevirmek"]], (a) => `Namazda "${a}" ne demektir?`, (b) => `Namazda "${b}" hareketine ne ad verilir?`, (a, b) => `${a}: ${b}.`)
  ]);
  U.d2k3 = tiplerden([
    siniflandir({ "bireysel faydası": ["zaman bilinci kazandırması", "temizlik alışkanlığı kazandırması", "iç huzuru vermesi", "sabrı öğretmesi", "kötülüklerden uzaklaştırması"], "toplumsal faydası": ["birlik ve kardeşliği güçlendirmesi", "insanların camide buluşması", "eşitliği yaşatması", "dayanışmayı artırması"] }, (g) => `Hangisi namazın ${g}dır?`, (d, g) => `${d}: namazın ${g}.`),
    ifadeler(["Namaz kişiye zaman bilinci kazandırır.", "Namaz temizlik alışkanlığı kazandırır.", "Cemaatle namaz birlik ve kardeşliği güçlendirir.", "Tahiyyat duası namazdaki oturuşlarda okunur.", "Namaz kişiye iç huzuru verir.", "Camide herkes aynı safta durarak eşitliği yaşar."], ["Tahiyyat duası rükûda okunur.", "Namazın hiçbir sosyal faydası yoktur.", "Cemaatle namaz yalnızlığı artırır.", "Namaz düzensiz yaşamaya yol açar.", "Tahiyyat duası namaza başlarken okunur.", "Camide zenginler ayrı safta durur."], "Namazın kazandırdıkları")
  ]);

  U.d3k1 = tiplerden([
    () => { const l = [["Kur'an'daki sure sayısı", "114"], ["Kur'an'daki cüz sayısı", "30"], ["Kevser suresinin ayet sayısı", "3"], ["İhlas suresinin ayet sayısı", "4"], ["Kur'an'ın yaklaşık ayet sayısı", "6236"], ["Kur'an'ın indirilme süresi (yıl)", "23"]]; const [s, c] = pick(l); return soru(`${s} kaçtır?`, c, l.filter((x) => x[1] !== c).map((x) => x[1]), `${s}: ${c}.`); },
    eslestir([["Fatiha", "Kur'an'ın ilk suresi"], ["Nas", "Kur'an'ın son suresi"], ["Bakara", "Kur'an'ın en uzun suresi"], ["Kevser", "Kur'an'ın en kısa suresi"], ["Alak", "ilk inen ayetlerin bulunduğu sure"]], (a) => `${a} suresinin özelliği nedir?`, (b) => `${b.charAt(0).toLocaleUpperCase("tr") + b.slice(1)} hangisidir?`, (a, b) => `${a}: ${b}.`),
    eslestir([["ayet", "Kur'an'ın en küçük bölümü"], ["sure", "ayetlerden oluşan bölüm"], ["cüz", "yirmi sayfalık bölüm"], ["mushaf", "Kur'an'ın kitap hâline getirilmiş şekli"], ["Mekki sure", "hicretten önce Mekke'de inen sure"], ["Medeni sure", "hicretten sonra Medine'de inen sure"]], (a) => `"${a}" ne demektir?`, (b) => `"${b}" ifadesi hangi kavramı tanımlar?`, (a, b) => `${a}: ${b}.`)
  ]);
  U.d3k2 = tiplerden([
    ifadeler(["Kur'an son ilahi kitaptır.", "Kur'an bütün insanlığa gönderilmiştir.", "Kur'an Hz. Ebubekir döneminde kitap hâline getirildi.", "Kur'an Hz. Osman döneminde çoğaltıldı.", "Kur'an'ı ezberleyen kişiye hafız denir.", "Kur'an Arapça indirilmiştir.", "Meal, Kur'an'ın başka bir dile çevirisidir."], ["Kur'an yalnızca Araplara gönderilmiştir.", "Kur'an Hz. Ali döneminde kitap hâline getirildi.", "Kur'an'ı ezberleyen kişiye müezzin denir.", "Kur'an Türkçe indirilmiştir.", "Kur'an ilk ilahi kitaptır.", "Meal, Kur'an'ın bir suresidir.", "Kur'an tek bir günde indirilmiştir."], "Kur'an-ı Kerim")
  ]);
  U.d3k3 = tiplerden([
    siniflandir({ "inanç (iman)": ["Allah'a iman", "ahirete iman", "meleklere iman", "peygamberlere iman"], "ibadet": ["namaz", "oruç", "zekât", "hac"], "ahlak": ["doğruluk", "adalet", "merhamet", "yardımlaşma"], "kıssa": ["Hz. Nuh'un gemisi", "Hz. Yusuf'un kuyuya atılması", "Hz. Musa ile Firavun", "Hz. Yunus'un balığın karnında kalması"] }, (g) => `Hangisi Kur'an'ın "${g}" konusuna örnektir?`, (d, g) => `${d}: ${g}.`, (d) => `"${d}" Kur'an'ın hangi ana konusuna girer?`),
    ifadeler(["Kevser suresi 3 ayettir.", "Kevser 'bolluk, çok hayır' demektir.", "Kevser suresi Mekke'de inmiştir.", "Kevser suresinde namaz kılmak ve kurban kesmek emredilir.", "Kevser suresi Kur'an'ın en kısa suresidir."], ["Kevser suresi Kur'an'ın en uzun suresidir.", "Kevser 'samimiyet' demektir.", "Kevser suresi 20 ayettir.", "Kevser suresinde oruç anlatılır.", "Kevser suresi Kur'an'ın ilk suresidir."], "Kevser suresi")
  ]);

  const OZ = [["sıdk", "doğru sözlülük"], ["emanet", "güvenilirlik"], ["fetanet", "akıllı ve zeki olma"], ["ismet", "günah işlemekten korunmuş olma"], ["tebliğ", "Allah'ın mesajını eksiksiz iletme"]];
  U.d4k1 = tiplerden([
    eslestir(OZ, (a) => `Peygamberlerin "${a}" özelliği ne demektir?`, (b) => `Peygamberlerin "${b}" özelliğine ne ad verilir?`, (a, b) => `${a}: ${b}.`),
    siniflandir({ "ülülazm peygamber": ["Hz. Nuh", "Hz. İbrahim", "Hz. Musa", "Hz. İsa", "Hz. Muhammed"], "ülülazm olmayan peygamber": ["Hz. Yunus", "Hz. Yusuf", "Hz. Salih", "Hz. Hud", "Hz. Davud"] }, (g) => `Hangisi ${dir(g)}?`, (d, g) => `${d}: ${g}.`),
    ifadeler(["İlk peygamber Hz. Âdem'dir.", "Son peygamber Hz. Muhammed'dir.", "Kur'an'da 25 peygamberin adı geçer.", "Peygamberler de yer, içer ve uyurdu.", "Peygamberler insanları güzel ahlaka davet etti."], ["İlk peygamber Hz. Musa'dır.", "Kur'an'da 114 peygamberin adı geçer.", "Peygamberler insan değildir.", "Peygamberler mesajın bir kısmını gizlemiştir.", "Son peygamber Hz. İsa'dır."], "Peygamberler")
  ]);
  const KIS = [["Hz. Nuh", "gemi yaparak inananlarla tufandan kurtuldu"], ["Hz. İbrahim", "ateşe atıldı ama ateş onu yakmadı"], ["Hz. Yusuf", "kardeşleri tarafından kuyuya atıldı, sonra onları affetti"], ["Hz. Musa", "Firavun'a karşı mücadele etti, deniz yarıldı"], ["Hz. Yunus", "balığın karnında tövbe edip dua etti"], ["Hz. Süleyman", "hayvanların dilini anlayan güçlü bir hükümdardı"], ["Hz. Eyyub", "hastalığa büyük sabır gösterdi"]];
  U.d4k2 = tiplerden([
    eslestir(KIS, (a) => `${a} ile ilgili hangisi doğrudur?`, (b) => `Hangi peygamber ${b}?`, (a, b) => `${a} ${b}.`),
    ifadeler(["Kureyş suresi 4 ayettir.", "Kureyş suresinde güven ve bolluk nimeti hatırlatılır.", "Kureyş suresi kış ve yaz yolculuklarından söz eder.", "Kıssalar bize ders ve öğüt verir."], ["Kureyş suresi Medine'de inmiştir ve 50 ayettir.", "Kureyş suresi Hz. Nuh'un gemisini anlatır.", "Kıssalar yalnızca eğlence içindir.", "Kureyş suresinde orucun kuralları anlatılır."], "Kıssalar ve Kureyş suresi")
  ]);
  const BOL = [["mihrap", "kıble yönünü gösteren, imamın durduğu bölüm"], ["minber", "cuma ve bayram hutbesinin okunduğu merdivenli yer"], ["kürsü", "vaaz verilen yer"], ["minare", "ezanın okunduğu yüksek kule"], ["şadırvan", "abdest alınan musluklu yapı"], ["kubbe", "caminin yarım küre şeklindeki çatısı"], ["müezzin mahfili", "müezzinin bulunduğu yüksekçe yer"], ["son cemaat yeri", "caminin girişindeki revaklı bölüm"]];
  U.d5k1 = tiplerden([
    eslestir(BOL, (a) => `Camide "${a}" neresidir?`, (b) => `Camide "${b}" hangisidir?`, (a, b) => `${a}: ${b}.`),
    eslestir([["medrese", "eğitim verilen yer (okul)"], ["imaret", "yoksullara yemek dağıtılan aşevi"], ["şifahane", "hastaların tedavi edildiği yer"], ["kervansaray", "yolcuların konakladığı han"], ["sebil", "gelip geçene su dağıtılan yapı"], ["külliye", "cami çevresindeki yapılar topluluğu"]], (a) => `"${a}" ne demektir?`, (b) => `"${b}" hangisidir?`, (a, b) => `${a}: ${b}.`)
  ]);
  U.d5k2 = tiplerden([
    eslestir([["Selimiye Camii", "Edirne'de, Mimar Sinan'ın ustalık eseri"], ["Süleymaniye Camii", "İstanbul'da, Mimar Sinan'ın kalfalık eseri"], ["Şehzade Camii", "İstanbul'da, Mimar Sinan'ın çıraklık eseri"], ["Sultanahmet Camii", "altı minareli 'Mavi Cami'"], ["Divriği Ulu Camii", "Sivas'ta, taş süslemeleriyle ünlü Selçuklu eseri"], ["Bursa Ulu Camii", "yirmi kubbeli erken Osmanlı camisi"]], (a) => `${a} ile ilgili hangisi doğrudur?`, (b) => `Hangisi "${b}" olarak bilinir?`, (a, b) => `${a}: ${b}.`)
  ]);
})();
