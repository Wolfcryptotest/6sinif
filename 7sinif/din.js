window.ICERIK = window.ICERIK || {};
// 7. sınıf Din Kültürü ve Ahlak Bilgisi - Maarif Modeli 5 ünite
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.din = {
  ad: "Din Kültürü", ikon: "🕌", renk: "#10b981",
  uniteler: [
    {
      id: "d1", ad: "Melek ve Ahiret İnancı",
      konular: [
        {
          id: "d1k1", ad: "Görülen ve Görülmeyen Varlıklar: Melekler", video: "6N2_rd1J_Oo",
          ozet: ["Varlıklar: görülen (insan, hayvan, bitki) ve görülmeyen (melek, cin, şeytan).", "Melekler nurdan yaratılmıştır; yemez, içmez, Allah'a asla isyan etmez.", "Dört büyük melek: Cebrail (vahiy), Mikail (tabiat olayları), İsrafil (sura üfleme), Azrail (can alma).", "Kirâmen Kâtibîn: iyi ve kötü amelleri yazan melekler. Münker-Nekir: kabirde sorgu.", "Cin: ateşten yaratılmış, iyisi ve kötüsü olan varlık. Şeytan: insanı kötülüğe çağıran varlık."],
          anlatim: [
            "Evrende gözümüzle görebildiğimiz varlıkların yanında göremediğimiz varlıklar da vardır. İnsan, hayvan ve bitkiler görülen varlıklardır. Melek, cin ve şeytan ise duyu organlarımızla algılayamadığımız varlıklardır.",
            "Melekler Allah'ın nurdan yarattığı varlıklardır. Yemek yemez, uyumaz, erkeklik-dişilik gibi özellikleri yoktur. Allah'ın emirlerini eksiksiz yerine getirir, asla isyan etmezler. Meleklere inanmak imanın esaslarındandır.",
            "Dört büyük melek vardır: Cebrail peygamberlere vahiy getirir, Mikail tabiat olaylarıyla görevlidir, İsrafil kıyametin kopması ve yeniden dirilişte sura üfleyecektir, Azrail ise ölüm vakti gelenlerin canını alır.",
            "Kirâmen Kâtibîn adı verilen melekler insanların iyi ve kötü davranışlarını yazar. Münker ve Nekir kabirde sorgu yapar. Cinler ateşten yaratılmıştır; iyileri ve kötüleri vardır. Şeytan ise insanı kötülüğe sürüklemeye çalışır. Kur'an, şeytanın vesvesesinden Allah'a sığınmamızı öğütler."
          ],
          sorular: [
            S("Peygamberlere vahiy getiren melek hangisidir?", ["Cebrail", "Mikail", "İsrafil", "Azrail"], "Cebrail vahiy meleğidir."),
            S("Kıyamet koparken sura üfleyecek melek hangisidir?", ["İsrafil", "Cebrail", "Mikail", "Azrail"], "İsrafil."),
            S("İnsanların iyi ve kötü amellerini yazan meleklere ne denir?", ["Kirâmen Kâtibîn", "Münker-Nekir", "Hafaza", "Cin"], "Kirâmen Kâtibîn.")
          ]
        },
        {
          id: "d1k2", ad: "Ahiret Hayatı", video: "Oz2UkIoLiDc",
          ozet: ["Ahiret: ölümden sonra başlayan sonsuz hayat.", "Ahiret aşamaları: ölüm → kabir (berzah) → kıyamet → yeniden diriliş (ba's) → mahşer → hesap → mizan → sırat → cennet/cehennem.", "Kıyamet: evrenin düzeninin bozulup dünya hayatının sona ermesi.", "Mizan: amellerin tartılması. Amel defteri: yapılanların kaydı.", "Ahiret inancı insanı sorumlu ve adaletli davranmaya yöneltir."],
          anlatim: [
            "Ahiret, ölümle başlayan ve sonsuza dek sürecek olan hayattır. Ahirete iman, imanın esaslarından biridir. Kur'an'da ahiret hayatının dünya hayatından daha hayırlı ve kalıcı olduğu bildirilir.",
            "Ölümle birlikte insan kabir hayatına (berzah) geçer. Allah'ın belirlediği bir zamanda kıyamet kopar; evrenin düzeni bozulur ve dünya hayatı sona erer. Sonra İsrafil'in sura üflemesiyle bütün insanlar yeniden diriltilir; buna ba's denir.",
            "İnsanlar mahşer denilen yerde toplanır. Herkesin amel defteri kendisine verilir, yaptıkları hesaba çekilir. Mizan ile iyilikler ve kötülükler tartılır. Ardından herkes sırattan geçer; iyiler cennete, kötüler cehenneme gider.",
            "Ahiret inancı insana hayatın bir amacı olduğunu hatırlatır. Yaptığı her şeyin karşılığını göreceğini bilen insan sorumluluk sahibi olur, haksızlıktan kaçınır, iyilik yapmaya özen gösterir. Bu inanç ayrıca dünyada karşılığını bulamayan iyiliklerin ve haksızlıkların ahirette ilahi adaletle karşılık bulacağı umudunu verir."
          ],
          sorular: [
            S("Ölümden sonra herkesin yeniden diriltilmesine ne denir?", ["Ba's", "Mizan", "Sırat", "Berzah"], "Ba's: yeniden diriliş."),
            S("Amellerin tartılmasına ne ad verilir?", ["Mizan", "Mahşer", "Kıyamet", "Hesap"], "Mizan: ilahi terazi."),
            S("Ahiret inancının insana kazandırdığı davranış hangisidir?", ["Sorumluluk bilinci", "Tembellik", "Kayıtsızlık", "Bencillik"], "Hesap vereceğini bilen insan sorumlu davranır.")
          ]
        },
        {
          id: "d1k3", ad: "Bir Sure Tanıyorum: Nâs Suresi", video: "w9xzuBLj9us",
          ozet: ["Nâs suresi Kur'an'ın son (114.) suresidir; Mekke'de inmiştir, 6 ayettir.", "Felak suresiyle birlikte 'Muavvizeteyn' (sığınma sureleri) olarak anılır.", "Ana fikir: insanların Rabbine, Melikine, İlahına; vesvese veren şeytanın şerrinden sığınmak.", "Vesvese: kalbe kötü düşünce fısıldamak."],
          anlatim: [
            "Nâs, 'insanlar' demektir. Nâs suresi Kur'an-ı Kerim'in 114. ve son suresidir. Mekke döneminde inmiştir ve altı ayetten oluşur.",
            "Felak suresiyle birlikte Muavvizeteyn (koruma için okunan iki sure) olarak anılır. Peygamberimiz yatmadan önce bu sureleri okur, Allah'a sığınırdı.",
            "Surenin anlamı: 'De ki: İnsanların Rabbine, insanların Melikine (hükümdarına), insanların İlahına sığınırım; sinsi vesvesecinin şerrinden. O ki insanların göğüslerine vesvese verir; cinlerden de insanlardan da.'",
            "Sure bize her türlü kötü düşünceye ve kötülüğe sürükleyen etkiye karşı Allah'a sığınmayı öğretir. Vesvese, kalbe kötü düşünce fısıldamak demektir. Kötülüğe yönelten bir düşünce geldiğinde Allah'ı hatırlamak ve iyiden yana tercih yapmak gerekir."
          ],
          sorular: [
            S("Nâs suresi Kur'an'ın kaçıncı suresidir?", ["114", "1", "112", "110"], "Son suredir: 114."),
            S("Nâs suresinin ana konusu hangisidir?", ["Vesvese verenlerin şerrinden Allah'a sığınmak", "Hac ibadeti", "Peygamberlerin hayatı", "Kurban ibadeti"], "Sığınma suresidir."),
            S("Felak ve Nâs surelerine birlikte ne ad verilir?", ["Muavvizeteyn", "Fatiha", "Ayetel Kürsi", "Amenerrasulü"], "Muavvizeteyn: iki sığınma suresi.")
          ]
        }
      ]
    },
    {
      id: "d2", ad: "Hac, Umre ve Kurban",
      konular: [
        {
          id: "d2k1", ad: "Hac ve Umre İbadeti", video: "dgfmOPxILtI",
          ozet: ["Hac: belirli zamanda (Zilhicce) Kâbe'yi ve kutsal yerleri ziyaret ederek yapılan ibadet; gücü yeten Müslümana ömründe bir kez farzdır.", "Haccın farzları: ihram, Arafat'ta vakfe, Kâbe'yi tavaf (ziyaret tavafı).", "Haccın vacipleri: Müzdelife vakfesi, sa'y, şeytan taşlama, tıraş olma, veda tavafı.", "Umre: yılın herhangi bir zamanında ihram, tavaf, sa'y ve tıraşla yapılan ziyaret.", "Hac kardeşlik, eşitlik ve sabır bilinci kazandırır."],
          anlatim: [
            "Hac, belirli günlerde ihrama girerek Arafat'ta vakfe yapmak ve Kâbe'yi tavaf etmektir. Sağlığı ve maddi durumu elverişli olan, yani gücü yeten her Müslümanın ömründe bir kez hac yapması farzdır. Hac Zilhicce ayında yapılır.",
            "Haccın üç farzı vardır: İhrama girmek, Arafat'ta vakfe yapmak (bir süre durmak) ve ziyaret tavafı yapmaktır. İhram, hacıların giydiği dikişsiz iki parça beyaz örtü ve bununla girilen özel hâldir. Tavaf, Kâbe'nin etrafında yedi kez dönmektir.",
            "Müzdelife'de vakfe, Safa ile Merve tepeleri arasında yedi kez gidip gelmek (sa'y), şeytan taşlama, tıraş olma ve veda tavafı haccın vaciplerindendir. Umre ise yılın her zamanında yapılabilen bir ziyarettir: İhrama girilir, tavaf ve sa'y yapılır, tıraş olunur.",
            "Hacda farklı ülkelerden, farklı renk ve dillerden milyonlarca insan aynı beyaz ihramla bir araya gelir. Bu, insanların Allah katında eşit olduğunu hatırlatır; kardeşlik, sabır, paylaşma ve yardımlaşma duygularını güçlendirir."
          ],
          sorular: [
            S("Hangisi haccın farzlarından biridir?", ["Arafat'ta vakfe", "Şeytan taşlama", "Sa'y", "Veda tavafı"], "Farzlar: ihram, Arafat vakfesi, ziyaret tavafı."),
            S("Kâbe'nin etrafında yedi kez dönmeye ne denir?", ["Tavaf", "Sa'y", "Vakfe", "İhram"], "Tavaf."),
            S("Safa ile Merve tepeleri arasında yedi kez gidip gelmeye ne ad verilir?", ["Sa'y", "Tavaf", "Vakfe", "Telbiye"], "Sa'y."),
            S("Umrenin hacdan farkı hangisidir?", ["Yılın her zamanında yapılabilmesi", "Kâbe'de yapılması", "İhrama girilmesi", "Tavaf yapılması"], "Umre belirli bir zamana bağlı değildir.")
          ]
        },
        {
          id: "d2k2", ad: "Kurban İbadeti", video: "aQfiQMewL5A",
          ozet: ["Kurban: Allah'a yakınlaşmak için belirli vakitte (Kurban Bayramı'nın 3 günü) belirli hayvanları kesmek.", "Kurbanlık hayvanlar: koyun, keçi (1 kişi), sığır, deve (7 kişiye kadar ortak).", "Kurban Hz. İbrahim ve Hz. İsmail'in teslimiyetini hatırlatır.", "Kurban eti üçe bölünebilir: kendine, akrabalara, ihtiyaç sahiplerine.", "Kurban paylaşma ve yardımlaşmayı güçlendirir."],
          anlatim: [
            "Kurban, Allah'a yakınlaşmak amacıyla Kurban Bayramı günlerinde belirli şartları taşıyan hayvanları kesmektir. Kurban kelimesi 'yaklaşmak' anlamına gelir. Hanefi mezhebine göre durumu iyi olan Müslümanın kurban kesmesi vaciptir.",
            "Kurbanın tarihi Hz. İbrahim'e dayanır. Hz. İbrahim, rüyasında oğlu İsmail'i kurban ettiğini gördü. Baba ve oğul Allah'ın emrine teslim oldu; Allah, İsmail'in yerine bir koç gönderdi. Kurban bu teslimiyeti ve fedakârlığı hatırlatır.",
            "Koyun ve keçi bir kişi adına kesilir. Sığır ve deve ise yedi kişiye kadar ortak kesilebilir. Kurbanlık hayvanın sağlıklı ve belli yaşa ulaşmış olması gerekir. Hayvana eziyet etmemek, onu diğer hayvanların önünde kesmemek önemlidir.",
            "Kurban etinin üçe bölünüp bir kısmının ev için ayrılması, bir kısmının akraba ve komşulara, bir kısmının ihtiyaç sahiplerine verilmesi tavsiye edilir. Kurban toplumda paylaşmayı, yardımlaşmayı ve dayanışmayı güçlendirir."
          ],
          sorular: [
            S("Kurban ibadeti hangi peygamberin teslimiyetini hatırlatır?", ["Hz. İbrahim", "Hz. Musa", "Hz. Nuh", "Hz. Yunus"], "Hz. İbrahim ve Hz. İsmail."),
            S("Hangisi yedi kişiye kadar ortak kurban edilebilir?", ["Sığır", "Koyun", "Keçi", "Kuzu"], "Sığır ve deve ortak kesilebilir."),
            S("Kurban etinin paylaştırılması toplumda neyi güçlendirir?", ["Yardımlaşma ve dayanışmayı", "Bencilliği", "İsrafı", "Kıskançlığı"], "Kurban paylaşmayı öğretir.")
          ]
        },
        {
          id: "d2k3", ad: "Bir Sure Tanıyorum: Kâfirûn Suresi", video: "",
          ozet: ["Kâfirûn suresi 109. suredir; Mekke'de inmiştir, 6 ayettir.", "Mekkeli müşriklerin 'Bir yıl siz bizim putlarımıza, bir yıl biz sizin Rabbinize tapalım' teklifine cevaptır.", "Son ayet: 'Sizin dininiz size, benim dinim banadır.'", "Ana fikir: inançta tavizsizlik ve din özgürlüğü."],
          anlatim: [
            "Kâfirûn suresi Kur'an'ın 109. suresidir. Mekke'de inmiştir ve altı ayettir. Kâfirûn, 'inkâr edenler' demektir.",
            "Mekkeli müşrikler Peygamberimize bir teklifte bulundu: 'Bir yıl sen bizim putlarımıza ibadet et, bir yıl da biz senin Rabbine ibadet edelim.' Bu sure, o teklife cevap olarak inmiştir.",
            "Surenin anlamı: 'De ki: Ey kâfirler! Ben sizin taptıklarınıza tapmam. Siz de benim taptığıma tapmazsınız. Ben sizin taptıklarınıza tapacak değilim. Siz de benim taptığıma tapacak değilsiniz. Sizin dininiz size, benim dinim banadır.'",
            "Sure, tevhid inancında taviz verilmeyeceğini öğretir. Son ayeti ise herkesin kendi inancından sorumlu olduğunu, dinde zorlama olmadığını ve inanç özgürlüğünü hatırlatır."
          ],
          sorular: [
            S("\"Sizin dininiz size, benim dinim banadır.\" ayeti hangi surededir?", ["Kâfirûn", "Nâs", "Nasr", "Fatiha"], "Kâfirûn suresinin son ayeti."),
            S("Kâfirûn suresinin indiriliş sebebi hangisidir?", ["Müşriklerin dinlerde ortaklık teklifi", "Mekke'nin fethi", "Hicret", "Bedir Savaşı"], "Müşriklerin teklifine cevaptır.")
          ]
        }
      ]
    },
    {
      id: "d3", ad: "İslam Düşüncesinde Yorumlar",
      konular: [
        {
          id: "d3k1", ad: "Din Anlayışındaki Farklılıklar ve Mezhepler", video: "PTPQszR3I3A",
          ozet: ["Yorum farklılıklarının sebepleri: Kur'an ve hadislerin farklı anlaşılması, kültür, coğrafya, siyasi olaylar, bilgi birikimi.", "İtikadi (inanç) mezhepler: Maturidilik, Eş'arilik.", "Fıkhi (amelî) mezhepler: Hanefilik, Şafiilik, Malikilik, Hanbelilik, Caferilik.", "Mezhepler dinin kendisi değil, dini anlama yollarıdır; farklılıklar zenginliktir."],
          anlatim: [
            "Müslümanlar Kur'an'ı ve Peygamberimizin sünnetini anlamaya çalışırken farklı yorumlar ortaya koymuştur. Bunun sebepleri arasında Kur'an'daki bazı kelimelerin farklı anlamlara gelebilmesi, hadislere ulaşma imkânının farklılığı, insanların yaşadığı kültür ve coğrafya ile siyasi olaylar sayılabilir.",
            "Bu yorum farklılıkları zamanla mezhepleri oluşturmuştur. Mezhep, 'gidilen yol' demektir. İnanç konularındaki yorumlar itikadi mezhepleri oluşturur: Ülkemizde yaygın olan Maturidilik ve Eş'arilik bunlardandır.",
            "İbadet ve günlük hayatla ilgili hükümlerdeki yorumlar ise fıkhi (amelî) mezhepleri oluşturur: Hanefilik, Şafiilik, Malikilik, Hanbelilik ve Caferilik bunlardandır. Ülkemizde en yaygın fıkhi mezhep Hanefiliktir.",
            "Mezhepler dinin kendisi değil, dini anlama ve yaşama yollarıdır. Hepsi Allah'ın birliğine, Hz. Muhammed'in peygamberliğine ve Kur'an'a inanır. Farklı yorumlara saygı göstermek, birlik ve kardeşliği korumak önemlidir."
          ],
          sorular: [
            S("Hangisi itikadi (inanç) mezheplerden biridir?", ["Maturidilik", "Hanefilik", "Şafiilik", "Malikilik"], "Maturidilik ve Eş'arilik itikadi mezheplerdir."),
            S("Ülkemizde en yaygın fıkhi mezhep hangisidir?", ["Hanefilik", "Hanbelilik", "Malikilik", "Caferilik"], "Hanefilik."),
            S("Hangisi dinî yorum farklılıklarının sebeplerinden biri değildir?", ["Kur'an'ın farklı sürelerinin bulunması", "Kültür ve coğrafya farklılığı", "Siyasi olaylar", "Kelimelerin farklı anlamlara gelebilmesi"], "Kur'an tektir.")
          ]
        },
        {
          id: "d3k2", ad: "Tasavvufi Yorumlar ve Alevilik-Bektaşilik", video: "",
          ozet: ["Tasavvuf: Allah sevgisini merkeze alan, nefsi terbiye ederek güzel ahlakı amaçlayan yorum.", "Tarikat: tasavvufta izlenen yol; Mevlevilik (Mevlana), Yesevilik (Hoca Ahmet Yesevi), Nakşibendilik, Kadirilik.", "Alevilik-Bektaşilik: Hz. Ali sevgisi, Hacı Bektaş Veli öğretisi; 'Eline, beline, diline sahip ol.'", "Cem: Alevilerin topluca yaptığı ibadet; cemevinde dede rehberliğinde, semah ve deyişlerle.", "Ortak noktalar: Allah'a iman, Peygamber sevgisi, güzel ahlak, insan sevgisi."],
          anlatim: [
            "Tasavvuf, İslam'ı Allah sevgisi merkezli yaşamayı, nefsi terbiye ederek güzel ahlaka ulaşmayı amaçlayan yorumdur. Tasavvufta izlenen yollara tarikat denir. Mevlana'nın öğretisine dayanan Mevlevilik, Hoca Ahmet Yesevi'nin Yeseviliği, Nakşibendilik ve Kadirilik bilinen tarikatlardandır.",
            "Mevlana 'Gel, ne olursan ol yine gel.' sözüyle hoşgörüyü, Yunus Emre 'Yaratılanı severiz Yaratandan ötürü.' sözüyle insan sevgisini anlatmıştır.",
            "Alevilik-Bektaşilik, Hz. Ali ve Ehl-i Beyt sevgisini merkeze alan, Hacı Bektaş Veli'nin öğretileriyle şekillenen bir yorumdur. 'Eline, beline, diline sahip ol.' öğüdü; insanın eliyle haram işlememesini, iffetini korumasını ve dilini kötü sözden sakınmasını öğretir.",
            "Cem, Alevilerin cemevinde dede rehberliğinde topluca yaptıkları ibadettir. Cemde Kur'an'dan bölümler okunur, deyişler söylenir, semah dönülür, lokma paylaşılır. Musahiplik (kardeşlik) ve düşkünlük gibi kurumlar dayanışmayı ve ahlakı korur. Bütün bu yorumlar Allah'a iman ve güzel ahlakta buluşur."
          ],
          sorular: [
            S("\"Eline, beline, diline sahip ol.\" öğüdü kime aittir?", ["Hacı Bektaş Veli", "Mevlana", "Yunus Emre", "Hoca Ahmet Yesevi"], "Hacı Bektaş Veli'nin öğüdüdür."),
            S("Alevilerin cemevinde topluca yaptıkları ibadete ne denir?", ["Cem", "Sa'y", "Tavaf", "Vakfe"], "Cem ibadeti."),
            S("Mevlevilik hangi şahsiyetin öğretilerine dayanır?", ["Mevlana Celaleddin Rumi", "Hacı Bektaş Veli", "Hoca Ahmet Yesevi", "Yunus Emre"], "Mevlevilik: Mevlana.")
          ]
        }
      ]
    },
    {
      id: "d4", ad: "Peygamber Olarak Hz. Muhammed",
      konular: [
        {
          id: "d4k1", ad: "Hz. Muhammed'in Mekke Dönemi", video: "3RBuQ7ZM8Vo",
          ozet: ["571'de Mekke'de doğdu; babası Abdullah, annesi Amine; dedesi Abdülmuttalip, amcası Ebu Talip yanında büyüdü.", "Güvenilirliği nedeniyle 'Muhammedü'l-Emin' denildi; Hz. Hatice ile evlendi.", "40 yaşında Hira Mağarası'nda ilk vahiy (Alak suresinin ilk ayetleri, 610).", "İlk Müslümanlar: Hz. Hatice, Hz. Ebubekir, Hz. Ali, Zeyd b. Harise.", "Mekke'de baskı ve boykot; Habeşistan'a hicret; Taif yolculuğu; Akabe biatları."],
          anlatim: [
            "Hz. Muhammed 571 yılında Mekke'de doğdu. Babası Abdullah o doğmadan, annesi Amine ise altı yaşındayken vefat etti. Önce dedesi Abdülmuttalip, sonra amcası Ebu Talip onu büyüttü. Dürüstlüğü nedeniyle gençliğinde 'Muhammedü'l-Emin' (güvenilir Muhammed) olarak tanındı. Hz. Hatice ile evlendi.",
            "Kırk yaşına geldiğinde Hira Mağarası'nda Cebrail aracılığıyla ilk vahiy geldi (610). İlk inen ayetler Alak suresinin 'Oku!' diye başlayan ayetleriydi. İlk inananlar eşi Hz. Hatice, dostu Hz. Ebubekir, amcasının oğlu Hz. Ali ve Zeyd b. Harise oldu.",
            "Peygamberimiz önce yakınlarını, sonra herkesi tevhide çağırdı. Mekkeli müşrikler Müslümanlara baskı yaptı, işkence etti ve üç yıl süren bir boykot uyguladı. Bazı Müslümanlar adaletli bir hükümdarın yönettiği Habeşistan'a göç etti.",
            "Destek bulmak için gittiği Taif'te taşlanan Peygamberimiz yine de onlara beddua etmedi. Medineli Müslümanlarla yapılan Akabe biatları ise hicretin yolunu açtı."
          ],
          sorular: [
            S("Hz. Muhammed'e ilk vahiy nerede gelmiştir?", ["Hira Mağarası", "Sevr Mağarası", "Kâbe", "Taif"], "Hira Mağarası, 610."),
            S("Hz. Muhammed'e dürüstlüğü nedeniyle verilen unvan hangisidir?", ["Muhammedü'l-Emin", "Seyfullah", "Faruk", "Sıddık"], "Emin: güvenilir."),
            S("İlk inen ayetler hangi surededir?", ["Alak", "Fatiha", "Nâs", "Bakara"], "Alak suresinin ilk ayetleri.")
          ]
        },
        {
          id: "d4k2", ad: "Hicret ve Medine Dönemi", video: "",
          ozet: ["Hicret (622): Mekke'den Medine'ye göç; Hicri takvimin başlangıcı.", "Muhacir: Mekke'den göç edenler; Ensar: onlara yardım eden Medineliler; aralarında kardeşlik kuruldu.", "Mescid-i Nebevi ve Suffe (eğitim yeri) kuruldu; Medine Sözleşmesi ile farklı topluluklar bir arada yaşadı.", "Bedir (624), Uhud (625), Hendek (627) savaşları; Hudeybiye Antlaşması (628); Mekke'nin fethi (630).", "Veda Haccı ve Veda Hutbesi (632): insan hakları, kardeşlik; Peygamberimiz 632'de vefat etti."],
          anlatim: [
            "Mekke'de baskılar artınca Peygamberimiz Allah'ın izniyle 622'de Hz. Ebubekir ile birlikte Medine'ye göç etti. Bu göçe hicret denir ve Hicri takvimin başlangıcı kabul edilir. Yolda Sevr Mağarası'nda saklandılar.",
            "Mekke'den göç eden Müslümanlara muhacir, onlara kucak açan Medinelilere ensar denir. Peygamberimiz muhacirlerle ensar arasında kardeşlik kurdu; ensar evini ve malını kardeşleriyle paylaştı. Mescid-i Nebevi yapıldı, yanında eğitim için Suffe kuruldu. Medine Sözleşmesi ile Müslümanlar, Yahudiler ve diğer topluluklar bir arada barış içinde yaşamayı kabul etti.",
            "Müşriklerle Bedir (624), Uhud (625) ve Hendek (627) savaşları yapıldı. 628'de Hudeybiye Antlaşması imzalandı. 630'da Mekke kan dökülmeden fethedildi; Peygamberimiz eski düşmanlarını affetti.",
            "632'de Veda Haccı'nda okuduğu Veda Hutbesi'nde can, mal ve namusun dokunulmaz olduğunu, insanlar arasında üstünlüğün ancak takvada olduğunu, kadın haklarına özen gösterilmesi gerektiğini bildirdi. Aynı yıl vefat etti."
          ],
          sorular: [
            S("Hicret hangi yıl gerçekleşmiştir?", ["622", "571", "610", "630"], "622, Hicri takvimin başlangıcı."),
            S("Mekke'den göç eden Müslümanlara yardım eden Medinelilere ne denir?", ["Ensar", "Muhacir", "Ashab-ı Suffe", "Müşrik"], "Ensar: yardım edenler."),
            S("Peygamberimizin insan haklarını vurguladığı son büyük hutbesi hangisidir?", ["Veda Hutbesi", "Medine Sözleşmesi", "Hudeybiye Antlaşması", "Akabe Biatı"], "Veda Hutbesi, 632."),
            S("Mekke'nin fethi hangi yıl gerçekleşmiştir?", ["630", "622", "624", "632"], "630.")
          ]
        },
        {
          id: "d4k3", ad: "Bir Sure Tanıyorum: Nasr Suresi", video: "",
          ozet: ["Nasr suresi 110. suredir; Medine'de inmiştir, 3 ayettir.", "Nasr: yardım, zafer. Mekke'nin fethi ve insanların bölük bölük İslam'a girişini müjdeler.", "Ana fikir: zafer anında Allah'ı hamd ile tesbih etmek ve bağışlanma dilemek; alçakgönüllülük."],
          anlatim: [
            "Nasr suresi Kur'an'ın 110. suresidir. Medine'de inmiştir ve üç ayettir. Nasr 'yardım, zafer' anlamına gelir.",
            "Surenin anlamı: 'Allah'ın yardımı ve zafer geldiğinde ve insanların bölük bölük Allah'ın dinine girdiğini gördüğünde, Rabbini hamd ile tesbih et ve O'ndan bağışlanma dile. Çünkü O, tövbeleri çok kabul edendir.'",
            "Sure Mekke'nin fethini ve ardından insanların topluluklar hâlinde Müslüman oluşunu müjdeler. Bazı sahabiler bu surenin Peygamberimizin görevinin tamamlanmak üzere olduğuna işaret ettiğini anlamıştır.",
            "Sure bize başarı anında kibirlenmemeyi, başarıyı Allah'ın yardımı bilip şükretmeyi ve alçakgönüllü olmayı öğretir."
          ],
          sorular: [
            S("Nasr suresinin müjdelediği olay hangisidir?", ["Mekke'nin fethi", "Hicret", "İlk vahiy", "Bedir Savaşı"], "Fetih ve insanların İslam'a girişi."),
            S("Nasr suresi zafer anında nasıl davranmayı öğütler?", ["Allah'a hamd edip bağışlanma dilemeyi", "Övünmeyi", "Düşmandan intikam almayı", "Dinlenmeyi"], "Şükür ve alçakgönüllülük.")
          ]
        }
      ]
    },
    {
      id: "d5", ad: "Yaşayan Dünya Dinleri",
      konular: [
        {
          id: "d5k1", ad: "Vahye Dayalı Dinler: Yahudilik ve Hristiyanlık", video: "",
          ozet: ["Yahudilik: Hz. Musa'ya dayanır; kutsal kitabı Tevrat (Tanah); mabedi sinagog; kutsal günü cumartesi (Şabat); bayramı Hamursuz (Pesah).", "Hristiyanlık: Hz. İsa'ya dayanır; kutsal kitabı İncil (Kitab-ı Mukaddes'in Yeni Ahit bölümü); mabedi kilise; kutsal günü pazar; bayramı Noel, Paskalya.", "Hristiyan mezhepleri: Katoliklik, Ortodoksluk, Protestanlık.", "Kudüs üç din için de kutsaldır."],
          anlatim: [
            "Yahudilik, Hz. Musa'ya indirilen Tevrat'a dayanan dindir. Yahudilerin kutsal kitabı Tanah'tır; Tevrat bunun ilk bölümüdür. İbadethanelerine sinagog, din adamlarına haham denir. Kutsal günleri cumartesidir (Şabat); en önemli bayramları Mısır'dan çıkışı anan Hamursuz Bayramı'dır (Pesah).",
            "Hristiyanlık, Hz. İsa'nın tebliğine dayanan dindir. Kutsal kitabı Kitab-ı Mukaddes'tir; bu kitap Eski Ahit ve İncilleri içeren Yeni Ahit'ten oluşur. İbadethanelerine kilise, din adamlarına papaz denir. Kutsal günleri pazardır. Hz. İsa'nın doğumunu kutlayan Noel ve Paskalya önemli bayramlarıdır.",
            "Hristiyanlık zamanla Katoliklik, Ortodoksluk ve Protestanlık gibi mezheplere ayrılmıştır. Katoliklerin merkezi Roma'daki Vatikan'dır.",
            "İslam, Yahudilik ve Hristiyanlık Hz. İbrahim'e uzanan tek Tanrılı dinlerdir. Kudüs her üç din için kutsaldır. Kur'an, Tevrat ve İncil'in Allah tarafından indirildiğini bildirir; Müslümanlar bütün peygamberlere inanır."
          ],
          sorular: [
            S("Yahudilerin ibadethanesine ne ad verilir?", ["Sinagog", "Kilise", "Tapınak (Mandir)", "Cemevi"], "Sinagog."),
            S("Hristiyanların kutsal günü hangisidir?", ["Pazar", "Cumartesi", "Cuma", "Pazartesi"], "Pazar."),
            S("Hangisi Hristiyanlığın mezheplerinden biri değildir?", ["Hanefilik", "Katoliklik", "Ortodoksluk", "Protestanlık"], "Hanefilik İslam'da bir fıkıh mezhebidir.")
          ]
        },
        {
          id: "d5k2", ad: "Hint ve Çin Kökenli Dinler: Hinduizm ve Budizm", video: "",
          ozet: ["Hinduizm: Hindistan'da ortaya çıkmış, belirli bir kurucusu olmayan din; kutsal metinleri Vedalar; reenkarnasyon (ruh göçü) ve karma inancı; Ganj nehri kutsal.", "Budizm: Siddhartha Gautama (Buda) tarafından kurulmuş; kutsal metinleri Tripitaka; dört yüce gerçek ve sekiz dilimli yol; amaç nirvana.", "Her iki dinde de meditasyon ve canlılara zarar vermeme önemlidir."],
          anlatim: [
            "Hinduizm, Hindistan'da ortaya çıkmış ve belirli bir kurucusu olmayan bir dindir. Kutsal metinleri Vedalar'dır. Hindular reenkarnasyona (ruhun ölümden sonra başka bir bedende yeniden doğmasına) ve karmaya (yapılan her davranışın karşılığının görüleceğine) inanır. Ganj nehri kutsal sayılır, ineğe saygı gösterilir.",
            "Budizm, MÖ 6. yüzyılda Hindistan'da Siddhartha Gautama tarafından kurulmuştur. 'Aydınlanmış kişi' anlamına gelen Buda unvanıyla anılır. Budizmin kutsal metinlerine Tripitaka denir.",
            "Budizme göre hayat acı doludur ve acının kaynağı arzulardır. Buda bu acıdan kurtulmak için 'dört yüce gerçek' ve 'sekiz dilimli yol'u öğretmiştir: doğru görüş, doğru düşünce, doğru söz, doğru davranış gibi. Amaç, arzulardan arınarak nirvana denilen huzur hâline ulaşmaktır.",
            "Bu dinlerde meditasyon ve hiçbir canlıya zarar vermeme ilkesi önemlidir. Budizm bugün Çin, Japonya, Tayland ve Tibet gibi Asya ülkelerinde yaygındır. Farklı dinleri tanımak, başka inançlara sahip insanlarla saygı içinde yaşamamıza katkı sağlar."
          ],
          sorular: [
            S("Budizmin kurucusu kimdir?", ["Siddhartha Gautama (Buda)", "Konfüçyüs", "Zerdüşt", "Lao Tzu"], "Buda: aydınlanmış kişi."),
            S("Ruhun ölümden sonra başka bir bedende yeniden doğduğu inancına ne denir?", ["Reenkarnasyon", "Nirvana", "Karma", "Meditasyon"], "Reenkarnasyon: ruh göçü."),
            S("Hinduizmin kutsal metinleri hangisidir?", ["Vedalar", "Tripitaka", "Tevrat", "İncil"], "Vedalar."),
            S("Budizmde ulaşılmak istenen huzur hâline ne denir?", ["Nirvana", "Karma", "Şabat", "Cem"], "Nirvana.")
          ]
        }
      ]
    }
  ]
};
})();
