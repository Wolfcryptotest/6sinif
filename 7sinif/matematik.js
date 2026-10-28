window.ICERIK = window.ICERIK || {};
// 7. sınıf Matematik - Türkiye Yüzyılı Maarif Modeli (tymm.meb.gov.tr tema sırası)
(function () {
const S = (soru, secenekler, cozum) => ({ soru, secenekler, dogru: 0, cozum });
window.ICERIK.matematik = {
  ad: "Matematik", ikon: "➗", renk: "#4f7cff",
  uniteler: [
    {
      id: "m1", ad: "Sayılar ve Nicelikler (1): Tam ve Rasyonel Sayılar",
      konular: [
        {
          id: "m1k1", ad: "Tam Sayılar ve Toplama-Çıkarma", video: "WuLoiiGYamY",
          ozet: ["Tam sayılar: ..., -3, -2, -1, 0, 1, 2, 3, ... (doğal sayıları kapsar).", "Mutlak değer: sayının sıfıra uzaklığı. |−7| = 7", "Aynı işaretliler toplanır, işaret korunur: (−3) + (−5) = −8", "Zıt işaretlilerde büyükten küçük çıkarılır, büyüğün işareti alınır: (−9) + 4 = −5", "Çıkarma = çıkanın tersiyle toplama: 3 − (−5) = 3 + 5 = 8"],
          anlatim: [
            "Sıfırdan küçük sayılara negatif tam sayılar denir ve başına − işareti konur: −1, −2, −3... Hava sıcaklığının sıfırın altına düşmesi, deniz seviyesinin altındaki derinlikler ve borçlar negatif sayılarla gösterilir. Negatif tam sayılar, sıfır ve pozitif tam sayılar birlikte tam sayıları oluşturur.",
            "Bir tam sayının sayı doğrusunda sıfıra olan uzaklığına mutlak değer denir: |−6| = 6, |6| = 6. Sayı doğrusunda sağdaki sayı her zaman soldakinden büyüktür: −2 > −5.",
            "Aynı işaretli tam sayılar toplanırken mutlak değerler toplanır ve ortak işaret yazılır: (+4) + (+3) = +7, (−4) + (−3) = −7. Zıt işaretli sayılar toplanırken mutlak değeri büyük olandan küçük olan çıkarılır ve mutlak değeri büyük olanın işareti yazılır: (−8) + (+5) = −3.",
            "Çıkarma işleminde çıkan sayının ters işaretlisi alınarak toplama yapılır: (−2) − (+6) = (−2) + (−6) = −8; 5 − (−3) = 5 + 3 = 8."
          ],
          sorular: [
            S("(−12) + (+7) işleminin sonucu kaçtır?", ["−5", "5", "−19", "19"], "Zıt işaretli: 12 − 7 = 5, büyüğün işareti (−): −5."),
            S("(−4) − (−9) işleminin sonucu kaçtır?", ["5", "−13", "−5", "13"], "−4 + 9 = 5."),
            S("Sabah −3 °C olan hava öğlen 8 °C ısındı. Öğlen sıcaklık kaç °C olur?", ["5", "11", "−11", "−5"], "−3 + 8 = 5."),
            S("Hangisi doğrudur?", ["−3 > −7", "−5 > −1", "0 < −2", "−8 > 2"], "Sayı doğrusunda sağdaki sayı büyüktür.")
          ]
        },
        {
          id: "m1k2", ad: "Tam Sayılarla Çarpma ve Bölme", video: "1miDDr0v6kw",
          ozet: ["(+)·(+) = + · (−)·(−) = + · (+)·(−) = − · (−)·(+) = −", "Bölmede de işaret kuralı aynıdır: (−24) ÷ (−6) = 4", "Negatif sayının çift kuvveti pozitif, tek kuvveti negatiftir: (−2)⁴ = 16, (−2)³ = −8", "−2² = −4 ama (−2)² = 4"],
          anlatim: [
            "Tam sayılarla çarpma ve bölmede önce sayıların mutlak değerleriyle işlem yapılır, sonra işaret belirlenir. Aynı işaretli iki sayının çarpımı ya da bölümü pozitif, zıt işaretli iki sayının çarpımı ya da bölümü negatiftir.",
            "Örnekler: (−6) · (−4) = 24, (−6) · 4 = −24, (−35) ÷ 7 = −5, (−35) ÷ (−7) = 5.",
            "Birden çok sayının çarpımında negatif çarpan sayısı çift ise sonuç pozitif, tek ise negatiftir: (−1) · (−2) · (−3) = −6.",
            "Üslü ifadelerde parantez önemlidir: (−3)² = (−3)·(−3) = 9 iken −3² = −(3·3) = −9'dur. Negatif bir sayının çift kuvveti pozitif, tek kuvveti negatiftir."
          ],
          sorular: [
            S("(−8) · (−5) işleminin sonucu kaçtır?", ["40", "−40", "−13", "13"], "Aynı işaretli: pozitif."),
            S("(−63) ÷ 9 işleminin sonucu kaçtır?", ["−7", "7", "−54", "−72"], "Zıt işaretli: negatif."),
            S("(−2)⁵ ifadesinin değeri kaçtır?", ["−32", "32", "−10", "10"], "Tek kuvvet: negatif; 2⁵ = 32."),
            S("−4² ifadesinin değeri kaçtır?", ["−16", "16", "−8", "8"], "Kuvvet yalnız 4'e aittir: −(16).")
          ]
        },
        {
          id: "m1k3", ad: "Rasyonel Sayılar ve Ondalık Gösterim", video: "se6P3m48-jQ",
          ozet: ["Rasyonel sayı: a/b şeklinde yazılabilen sayı (a, b tam sayı, b ≠ 0).", "Tam sayılar da rasyoneldir: −4 = −4/1", "Kesri ondalığa çevirmek için pay paydaya bölünür: 3/8 = 0,375", "Devirli ondalık: 1/3 = 0,333... = 0,3̅", "Sıralama: önce işarete, sonra değere bakılır. Negatiflerde mutlak değeri büyük olan küçüktür."],
          anlatim: [
            "a ve b tam sayı, b sıfırdan farklı olmak üzere a/b şeklinde yazılabilen sayılara rasyonel sayılar denir. 3/4, −2/5, 0,7 ve −6 birer rasyonel sayıdır. Doğal sayılar tam sayıların, tam sayılar rasyonel sayıların içindedir.",
            "Bir rasyonel sayıyı ondalık gösterimle yazmak için pay paydaya bölünür: 7/20 = 0,35; −5/8 = −0,625. Bazı bölmeler bitmez ve rakamlar tekrar eder: 2/3 = 0,666...; tekrar eden kısmın üstüne çizgi çekilir: 0,6̅. Bunlara devirli ondalık gösterim denir.",
            "Rasyonel sayılar sayı doğrusunda gösterilebilir. Pozitifler sıfırın sağında, negatifler solundadır. Negatif sayılarda mutlak değeri büyük olan daha küçüktür: −3/4 < −1/2.",
            "Karşılaştırma yaparken paydaları eşitlemek ya da ondalık gösterime çevirmek işi kolaylaştırır: 2/5 = 0,4 ve 3/8 = 0,375 olduğundan 2/5 > 3/8."
          ],
          sorular: [
            S("3/8 rasyonel sayısının ondalık gösterimi hangisidir?", ["0,375", "0,38", "3,8", "0,0375"], "3 ÷ 8 = 0,375."),
            S("Hangisi en küçüktür?", ["−3/4", "−1/2", "0", "1/4"], "Negatiflerde mutlak değeri büyük olan küçüktür."),
            S("Hangisi devirli ondalık gösterimdir?", ["1/3", "1/4", "1/5", "1/8"], "1/3 = 0,333..."),
            S("−0,25 sayısının kesir gösterimi hangisidir?", ["−1/4", "−1/25", "−25/10", "−2/5"], "0,25 = 25/100 = 1/4.")
          ]
        },
        {
          id: "m1k4", ad: "Rasyonel Sayılarla İşlemler ve Problemler", video: "lc--hGs13Vo",
          ozet: ["Toplama-çıkarma: paydalar eşitlenir, işaret kuralları uygulanır.", "Çarpma: paylar çarpılıp paya, paydalar çarpılıp paydaya yazılır.", "Bölme: birinci ile ikincinin çarpmaya göre tersi çarpılır: a/b ÷ c/d = a/b · d/c", "İşlem önceliği: parantez → üs → çarpma-bölme → toplama-çıkarma"],
          anlatim: [
            "Rasyonel sayılarla toplama ve çıkarma yaparken paydalar eşitlenir, paylar işaret kurallarına göre toplanır ya da çıkarılır: −1/2 + 3/4 = −2/4 + 3/4 = 1/4.",
            "Çarpmada paylar kendi arasında, paydalar kendi arasında çarpılır; mümkünse önce sadeleştirme yapılır: (−2/3) · (9/4) = −18/12 = −3/2.",
            "Bölmede ikinci sayının çarpmaya göre tersi (payı ile paydasının yer değiştirmiş hâli) alınarak çarpma yapılır: 3/5 ÷ (−6/10) = 3/5 · (−10/6) = −1.",
            "Problemlerde 'bir bütünün kesri' ifadesine dikkat ederiz: 'Bir su deposunun 3/5'i dolu, depodan 1/4'ü kadar su kullanıldı' gibi. Ondalık gösterimle de işlem yapılabilir: 2,5 − (−1,25) = 3,75."
          ],
          sorular: [
            S("−2/3 + 5/6 işleminin sonucu kaçtır?", ["1/6", "−1/6", "3/9", "7/6"], "−4/6 + 5/6 = 1/6."),
            S("(−3/4) · (8/9) işleminin sonucu kaçtır?", ["−2/3", "2/3", "−24/36", "−3/2"], "−24/36 = −2/3."),
            S("2/5 ÷ (−4/15) işleminin sonucu kaçtır?", ["−3/2", "3/2", "−8/75", "−2/3"], "2/5 · (−15/4) = −30/20 = −3/2."),
            S("Bir yolun 2/5'i birinci gün, 1/3'ü ikinci gün gidildi. Yolun kaçta kaçı kaldı?", ["4/15", "11/15", "3/8", "1/5"], "2/5 + 1/3 = 11/15; kalan 4/15.")
          ]
        }
      ]
    },
    {
      id: "m2", ad: "Sayılar ve Nicelikler (2): Oran ve Orantı",
      konular: [
        {
          id: "m2k1", ad: "Oran ve Birim Oran", video: "4TmlPkb9VXU",
          ozet: ["Oran: iki çokluğun bölme yoluyla karşılaştırılması. a/b ya da a : b", "Aynı birimdeki çokluklar → birimsiz oran (3 kg / 5 kg = 3/5)", "Farklı birimdeki çokluklar → birimli oran (120 km / 2 sa = 60 km/sa)", "Birim oran: paydası 1 olan oran (1 kg'ın fiyatı, 1 saatte gidilen yol)", "Oranın terimleri 0 hariç aynı sayıyla çarpılıp bölünebilir."],
          anlatim: [
            "İki çokluğun bölme işlemiyle karşılaştırılmasına oran denir ve a/b ya da a : b şeklinde gösterilir. Bir sınıftaki 12 kız ve 15 erkek öğrencinin oranı 12/15 = 4/5'tir.",
            "Aynı birimle ölçülen çoklukların oranı birimsizdir: 6 m'nin 9 m'ye oranı 2/3. Farklı birimlerle ölçülen çoklukların oranı ise birimlidir: 300 TL / 5 kg = 60 TL/kg.",
            "Paydası 1 olacak şekilde yazılan orana birim oran denir. Birim oran karşılaştırma yapmayı kolaylaştırır: 4 kg'ı 100 TL olan elma ile 3 kg'ı 81 TL olan elmanın 1 kg fiyatları 25 TL ve 27 TL'dir; ilki daha ucuzdur.",
            "Oranlar sadeleştirilebilir ya da genişletilebilir. Eşit oranlara denk oranlar denir: 2/3 = 8/12."
          ],
          sorular: [
            S("5 kg'ı 175 TL olan peynirin 1 kg'ı kaç TL'dir?", ["35", "30", "40", "170"], "175 ÷ 5 = 35 TL."),
            S("Hangisi birimsiz bir orandır?", ["8 m / 12 m", "90 km / 1 sa", "40 TL / 2 kg", "300 m / 5 dk"], "Aynı birimdeki çokluklar birimsiz oran verir."),
            S("3 saatte 210 km yol giden bir aracın 1 saatte aldığı yol (birim oran) kaç km'dir?", ["70", "63", "207", "630"], "210 ÷ 3 = 70 km/sa.")
          ]
        },
        {
          id: "m2k2", ad: "Orantı ve Doğru Orantı", video: "Rt6HJvGLmxM",
          ozet: ["Orantı: iki oranın eşitliği. a/b = c/d", "İçler çarpımı = dışlar çarpımı: a · d = b · c", "Doğru orantı: biri artarken diğeri aynı oranda artar; oranları sabittir (y/x = k).", "Doğru orantının grafiği başlangıç noktasından geçen bir doğrudur.", "Örnek: alınan ürün miktarı ile ödenen para."],
          anlatim: [
            "İki oranın eşitliğine orantı denir: 2/5 = 6/15. Orantıda içler çarpımı dışlar çarpımına eşittir: 2 · 15 = 5 · 6. Bu kural sayesinde orantıdaki bilinmeyen terimi buluruz: 3/x = 12/20 ise 12x = 60, x = 5.",
            "İki çokluktan biri belirli bir oranda artarken diğeri de aynı oranda artıyor, biri azalırken diğeri de aynı oranda azalıyorsa bu çokluklar doğru orantılıdır. Doğru orantılı çoklukların oranı sabittir: y/x = k (orantı sabiti).",
            "Örnek: 1 kalem 15 TL ise 2 kalem 30 TL, 5 kalem 75 TL'dir. Kalem sayısı ile ödenen para doğru orantılıdır; orantı sabiti 15'tir.",
            "Doğru orantılı iki çokluğun grafiği, başlangıç noktasından (0,0) geçen bir doğrudur. Tabloda her y değeri x değerinin aynı katı ise çokluklar doğru orantılıdır."
          ],
          sorular: [
            S("4/x = 10/25 orantısında x kaçtır?", ["10", "8", "16", "6"], "10x = 100 → x = 10."),
            S("Hangisinde çokluklar doğru orantılıdır?", ["Alınan ekmek sayısı ile ödenen para", "İşçi sayısı ile işin bitme süresi", "Hız ile yolun alınma süresi", "Yaş ile boy"], "Ekmek sayısı artınca para aynı oranda artar."),
            S("6 defter 90 TL ise 10 defter kaç TL'dir?", ["150", "140", "160", "60"], "1 defter 15 TL; 10 × 15 = 150.")
          ]
        },
        {
          id: "m2k3", ad: "Doğru Orantı Problemleri ve Yüzdeler", video: "K-QIVSFdBb8",
          ozet: ["Doğru orantı problemlerinde birim orana ya da orantı kurmaya başvurulur.", "Ölçek (harita): 1/100 000 → haritada 1 cm = gerçekte 100 000 cm = 1 km", "Yüzde: paydası 100 olan oran. %20 = 20/100", "Yüzde artış/azalış: yeni = eski × (100 ± yüzde)/100", "Tarif: 4 kişilik tarif 6 kişiye uyarlanırken her malzeme 6/4 ile çarpılır."],
          anlatim: [
            "Doğru orantı problemlerini birim oranı bularak ya da orantı kurarak çözeriz. Örnek: 3 kg elma 72 TL ise 7 kg elma kaç TL? Birim oran: 72 ÷ 3 = 24 TL; 7 × 24 = 168 TL. Ya da 3/72 = 7/x → x = 168.",
            "Haritalarda ölçek bir doğru orantıdır. 1/200 000 ölçekli haritada 3 cm, gerçekte 600 000 cm = 6 km'dir.",
            "Yüzdeler de birer orandır. Bir ürünün fiyatına %25 zam yapılırsa yeni fiyat eski fiyatın 125/100'üdür; %20 indirim yapılırsa yeni fiyat eski fiyatın 80/100'üdür.",
            "Yemek tariflerini kişi sayısına göre uyarlamak, kur hesapları ve yakıt tüketimi gibi pek çok günlük hayat durumu doğru orantıyla çözülür."
          ],
          sorular: [
            S("4 kişilik bir tarifte 300 g un kullanılıyor. 6 kişilik tarifte kaç g un gerekir?", ["450", "400", "500", "350"], "300 × 6/4 = 450 g."),
            S("1/100 000 ölçekli haritada 5 cm olan uzaklık gerçekte kaç km'dir?", ["5", "50", "0,5", "500"], "5 × 100 000 cm = 500 000 cm = 5 km."),
            S("240 TL'lik bir ürüne %15 indirim yapılırsa yeni fiyatı kaç TL olur?", ["204", "225", "36", "276"], "240 × 85/100 = 204 TL.")
          ]
        }
      ]
    },
    {
      id: "m3", ad: "İşlemlerle Cebirsel Düşünme ve Değişimler",
      konular: [
        {
          id: "m3k1", ad: "Cebirsel İfadeler ve İşlemler", video: "Yahnxsj15PQ",
          ozet: ["Cebirsel ifade: en az bir bilinmeyen (değişken) içeren ifade. 3x + 5", "Terim: + veya − ile ayrılan her parça. Katsayı: değişkenin önündeki sayı. Sabit terim: değişkensiz terim.", "Benzer terimler: değişkeni ve kuvveti aynı olanlar (2x ve −7x). Yalnızca benzer terimler toplanır.", "Sayıyla çarpma: 3(2x − 4) = 6x − 12", "Değer bulma: x = 2 için 4x − 1 = 7"],
          anlatim: [
            "Bilinmeyen bir sayıyı göstermek için x, y, a gibi harfler kullanırız; bunlara değişken denir. İçinde en az bir değişken ve işlem bulunan ifadelere cebirsel ifade denir: 2x + 7, 5a − 3b.",
            "Cebirsel ifadede + ve − işaretleriyle ayrılan her parçaya terim denir. 4x − 9 ifadesinde 4x ve −9 terimlerdir; 4 katsayı, −9 sabit terimdir. Değişkenleri ve kuvvetleri aynı olan terimlere benzer terim denir: 3x ile −5x benzer, 3x ile 3y benzer değildir.",
            "Toplama ve çıkarmada yalnızca benzer terimlerin katsayıları toplanır: (5x + 3) + (2x − 7) = 7x − 4. Çıkarmada parantezin önündeki eksi, içindeki terimlerin işaretini değiştirir: (6x − 1) − (2x − 5) = 4x + 4.",
            "Bir cebirsel ifadeyi bir sayıyla çarparken dağılma özelliği kullanılır: −2(3x − 4) = −6x + 8. Değişkenin yerine sayı yazarak ifadenin değerini buluruz: a = −3 için 2a + 9 = 3."
          ],
          sorular: [
            S("(3x − 5) + (4x + 9) işleminin sonucu hangisidir?", ["7x + 4", "7x − 4", "12x + 4", "x + 14"], "3x + 4x = 7x, −5 + 9 = 4."),
            S("−3(2x − 5) ifadesinin eşiti hangisidir?", ["−6x + 15", "−6x − 15", "6x − 15", "−6x − 5"], "−3·2x = −6x, −3·(−5) = 15."),
            S("x = −2 için 5x + 12 ifadesinin değeri kaçtır?", ["2", "22", "−2", "−22"], "5·(−2) + 12 = 2."),
            S("7a − 4b + 9 ifadesinde a'nın katsayısı kaçtır?", ["7", "−4", "9", "1"], "a'nın önündeki sayı 7.")
          ]
        },
        {
          id: "m3k2", ad: "Birinci Dereceden Denklemler", video: "PnJ8yU_dkQQ",
          ozet: ["Denklem: bilinmeyen içeren eşitlik. 2x + 3 = 11", "Çözüm: eşitliğin iki tarafına aynı işlem uygulanır (eşitliğin korunumu).", "2x + 3 = 11 → 2x = 8 → x = 4", "Kontrol: bulunan değer denklemde yerine yazılır.", "Problem → denklem: Bilinmeyene x de, ilişkiyi eşitlik olarak yaz."],
          anlatim: [
            "İçinde bilinmeyen bulunan ve bilinmeyenin belirli değerleri için doğru olan eşitliklere denklem denir. Bilinmeyenin kuvveti 1 ise birinci dereceden denklemdir: 3x − 7 = 8.",
            "Denklemi çözmek, bilinmeyeni yalnız bırakmak demektir. Bunun için eşitliğin iki tarafına aynı sayı eklenir, çıkarılır ya da iki taraf 0'dan farklı aynı sayıyla çarpılır/bölünür: 3x − 7 = 8 → 3x = 15 → x = 5.",
            "Bilinmeyen iki tarafta da varsa önce değişkenli terimler bir tarafa, sabitler diğer tarafa toplanır: 5x + 2 = 2x + 11 → 3x = 9 → x = 3. Parantezli denklemlerde önce dağılma uygulanır: 2(x − 3) = 10 → 2x − 6 = 10 → x = 8.",
            "Problemleri denkleme dönüştürürken bilinmeyene x deriz: 'Bir sayının 4 katının 6 fazlası 30'dur.' → 4x + 6 = 30 → x = 6."
          ],
          sorular: [
            S("4x − 9 = 15 denkleminin çözümü kaçtır?", ["6", "1,5", "24", "−6"], "4x = 24 → x = 6."),
            S("3(x + 2) = 21 denkleminin çözümü kaçtır?", ["5", "7", "6", "9"], "3x + 6 = 21 → 3x = 15 → x = 5."),
            S("Bir sayının 3 katının 8 eksiği 19'dur. Bu sayı kaçtır?", ["9", "11", "27", "3"], "3x − 8 = 19 → x = 9."),
            S("7x − 2 = 3x + 18 denkleminin çözümü kaçtır?", ["5", "4", "4,5", "20"], "4x = 20 → x = 5.")
          ]
        },
        {
          id: "m3k3", ad: "Eşitsizlikler", video: "TgJjqJwcEVI",
          ozet: ["Eşitsizlik sembolleri: < küçük, > büyük, ≤ küçük veya eşit, ≥ büyük veya eşit", "x > 3: 3'ten büyük sayılar (3 dâhil değil) → sayı doğrusunda boş daire", "x ≤ −2: −2 ve küçükler → dolu daire", "Eşitsizliğin iki tarafına aynı sayı eklenir/çıkarılır, yön değişmez.", "Pozitif sayıyla çarpma/bölmede yön değişmez."],
          anlatim: [
            "İki ifade arasındaki büyüklük-küçüklük ilişkisini gösteren ifadelere eşitsizlik denir. 'En az 12 yaşında olmalı' → y ≥ 12; 'Hız 90 km/sa'ten az olmalı' → h < 90.",
            "Eşitsizliğin çözüm kümesi sayı doğrusunda gösterilir. Sınır değer dâhilse (≤, ≥) dolu daire, dâhil değilse (<, >) boş daire çizilir ve çözüm yönüne doğru ok çekilir.",
            "Birinci dereceden eşitsizlikleri denklemler gibi çözeriz: x + 5 < 12 → x < 7. 3x ≥ 18 → x ≥ 6. İki tarafı pozitif bir sayıyla çarpar ya da bölersek eşitsizliğin yönü değişmez.",
            "Gerçek hayatta eşitsizlikler sınırları anlatır: Asansörün taşıyabileceği en fazla yük, bir sınavdan geçmek için gereken en az puan gibi."
          ],
          sorular: [
            S("x + 7 > 15 eşitsizliğinin çözümü hangisidir?", ["x > 8", "x < 8", "x > 22", "x ≥ 8"], "x > 15 − 7 = 8."),
            S("\"Bir otoparka en fazla 40 araç girebilir.\" ifadesi hangisiyle gösterilir? (a: araç sayısı)", ["a ≤ 40", "a < 40", "a ≥ 40", "a > 40"], "En fazla 40: 40 dâhil."),
            S("Sayı doğrusunda 5'in üzerinde boş daire ve sağa doğru ok hangi eşitsizliği gösterir?", ["x > 5", "x ≥ 5", "x < 5", "x ≤ 5"], "Boş daire: dâhil değil; sağa: büyük.")
          ]
        }
      ]
    },
    {
      id: "m4", ad: "Dönüşüm",
      konular: [
        {
          id: "m4k1", ad: "Yansıma, Orta Dikme ve Açıortay", video: "",
          ozet: ["Yansıma: şeklin bir doğruya (simetri ekseni) göre ayna görüntüsü.", "Yansımada şekil ile görüntüsü eştir; noktalar eksene eşit uzaklıktadır.", "x eksenine göre yansıma: (a, b) → (a, −b) · y eksenine göre: (a, b) → (−a, b)", "Orta dikme: doğru parçasını iki eş parçaya bölen dik doğru.", "Açıortay: açıyı iki eş açıya bölen ışın."],
          anlatim: [
            "Bir şeklin bir doğruya göre ayna görüntüsünü oluşturmaya yansıma dönüşümü denir; bu doğruya yansıma (simetri) ekseni denir. Şekil ile görüntüsü eştir; her nokta ve görüntüsü eksene eşit uzaklıktadır ve onları birleştiren doğru parçası eksene diktir.",
            "Koordinat düzleminde x eksenine göre yansımada noktanın apsisi aynı kalır, ordinatı ters işaret alır: A(3, 2) → A'(3, −2). y eksenine göre yansımada ordinat aynı kalır, apsis ters işaret alır: A(3, 2) → A'(−3, 2).",
            "Bir doğru parçasının orta noktasından geçen ve ona dik olan doğruya orta dikme denir. Orta dikme üzerindeki her nokta doğru parçasının iki ucuna eşit uzaklıktadır. Pergel ve cetvelle çizilebilir.",
            "Bir açıyı iki eş açıya bölen ışına açıortay denir. 80°'lik açının açıortayı onu iki tane 40°'lik açıya böler. Açıortay da yansımayla ilişkilidir: açının kolları açıortaya göre birbirinin yansımasıdır."
          ],
          sorular: [
            S("A(4, −3) noktasının x eksenine göre yansıması hangisidir?", ["(4, 3)", "(−4, −3)", "(−4, 3)", "(3, 4)"], "x eksenine göre: ordinat ters işaret alır."),
            S("A(−2, 5) noktasının y eksenine göre yansıması hangisidir?", ["(2, 5)", "(−2, −5)", "(2, −5)", "(5, −2)"], "y eksenine göre: apsis ters işaret alır."),
            S("110°'lik bir açının açıortayı bu açıyı hangi ölçülerde iki açıya böler?", ["55° ve 55°", "50° ve 60°", "70° ve 40°", "90° ve 20°"], "Açıortay eşit iki açı oluşturur."),
            S("Orta dikme üzerindeki her nokta için hangisi doğrudur?", ["Doğru parçasının iki ucuna eşit uzaklıktadır.", "Doğru parçasına paraleldir.", "Açıyı ikiye böler.", "Doğru parçasının bir ucundan geçer."], "Orta dikmenin temel özelliği budur.")
          ]
        }
      ]
    },
    {
      id: "m5", ad: "Geometrik Nicelikler (1): Cisimler ve Hacim",
      konular: [
        {
          id: "m5k1", ad: "Cisimlerin Farklı Yönlerden Görünümleri", video: "YWeM-pxVgyY",
          ozet: ["Eş küplerle oluşturulan yapılar önden, yandan ve üstten görünümleriyle çizilir.", "Önden görünüm: her sütundaki en yüksek küp sayısı.", "Üstten görünüm: yapının taban izi.", "Görünümlerden yapıdaki en az ve en çok küp sayısı tahmin edilir."],
          anlatim: [
            "Birim küplerle oluşturulan bir yapıya farklı yönlerden baktığımızda farklı şekiller görürüz. Önden, sağdan (ya da soldan) ve üstten görünümler kareli kâğıda çizilir.",
            "Önden görünümde her sütunda, o sütundaki en yüksek küp kulesi kadar kare görünür. Üstten görünüm yapının yerde kapladığı alanı, yani taban izini gösterir.",
            "Bir yapının görünümleri verildiğinde yapıyı oluşturmak için gereken en az ve en çok küp sayısı bulunabilir. Görünmeyen yerlerde küp olup olmadığını bilemeyiz; bu yüzden birden fazla yapı aynı görünümlere sahip olabilir.",
            "Mimarlar ve mühendisler binaları ve makine parçalarını bu tür görünüm çizimleriyle (teknik resim) tasarlar."
          ],
          sorular: [
            S("Bir yapının yerde kapladığı alanı gösteren görünüm hangisidir?", ["Üstten görünüm", "Önden görünüm", "Sağdan görünüm", "Soldan görünüm"], "Üstten bakınca taban izi görülür."),
            S("Önden görünümü 3 sütun ve sütun yükseklikleri 2, 1, 3 olan yapıda önden en az kaç küp görünür (kare sayısı)?", ["6", "3", "5", "9"], "2 + 1 + 3 = 6 kare.")
          ]
        },
        {
          id: "m5k2", ad: "Dikdörtgenler Prizmasının Yüzey Alanı", video: "",
          ozet: ["Dikdörtgenler prizması: 6 dikdörtgen yüz, 12 ayrıt, 8 köşe.", "Karşılıklı yüzler eştir.", "Yüzey alanı = 2(ab + ac + bc)", "Küpün yüzey alanı = 6a²", "Açınım: prizmanın yüzlerinin düzleme açılmış hâli."],
          anlatim: [
            "Altı yüzü dikdörtgen olan cisme dikdörtgenler prizması denir. 6 yüzü, 12 ayrıtı ve 8 köşesi vardır. Karşılıklı yüzleri eş dikdörtgenlerdir. Bütün ayrıtları eşit olan dikdörtgenler prizmasına küp denir.",
            "Prizmanın yüzlerini açarak düzleme serdiğimizde elde edilen şekle açınım denir. Açınımdaki dikdörtgenlerin alanları toplamı prizmanın yüzey alanıdır.",
            "Ayrıt uzunlukları a, b, c olan dikdörtgenler prizmasında üç farklı yüz çifti vardır: ab, ac ve bc alanlı. Yüzey alanı: 2(ab + ac + bc). Kenarı a olan küpün yüzey alanı 6a²'dir.",
            "Örnek: Ayrıtları 5 cm, 4 cm ve 3 cm olan kutunun yüzey alanı 2(20 + 15 + 12) = 94 cm²'dir. Bir hediye kutusunu kaplamak için gereken kâğıt miktarı yüzey alanı ile hesaplanır."
          ],
          sorular: [
            S("Ayrıtları 6 cm, 4 cm ve 2 cm olan dikdörtgenler prizmasının yüzey alanı kaç cm²'dir?", ["88", "48", "44", "96"], "2(24 + 12 + 8) = 88."),
            S("Bir ayrıtı 5 cm olan küpün yüzey alanı kaç cm²'dir?", ["150", "125", "25", "100"], "6 × 25 = 150."),
            S("Dikdörtgenler prizmasının kaç ayrıtı vardır?", ["12", "6", "8", "10"], "12 ayrıt, 8 köşe, 6 yüz.")
          ]
        },
        {
          id: "m5k3", ad: "Hacim ve Hacim Birimleri", video: "",
          ozet: ["Hacim: cismin uzayda kapladığı yer. Birim küplerle ölçülür.", "Dikdörtgenler prizmasının hacmi = a · b · c = taban alanı × yükseklik", "Küpün hacmi = a³", "1 m³ = 1000 dm³ · 1 dm³ = 1000 cm³ · 1 cm³ = 1000 mm³", "Sıvı ölçüleri: 1 dm³ = 1 L · 1 cm³ = 1 mL"],
          anlatim: [
            "Bir cismin uzayda kapladığı yer miktarına hacim denir. Hacim, ayrıtı 1 birim olan birim küplerle ölçülür. Bir kutuya kaç birim küp sığdığını sayarak hacmini bulabiliriz.",
            "Dikdörtgenler prizmasının hacmi üç ayrıtının çarpımıdır: V = a · b · c. Bu, taban alanı ile yüksekliğin çarpımına eşittir. Küpün hacmi V = a³'tür.",
            "Hacim ölçme birimleri bin kat bin kat büyür ya da küçülür: 1 m³ = 1000 dm³, 1 dm³ = 1000 cm³, 1 cm³ = 1000 mm³. Bir birimden küçüğüne geçerken 1000 ile çarpar, büyüğüne geçerken 1000'e böleriz.",
            "Sıvı ölçüleri hacim ölçüleriyle ilişkilidir: 1 dm³ = 1 litre (L), 1 cm³ = 1 mililitre (mL). 1 L = 10 dL = 100 cL = 1000 mL. Ayrıtları 20 cm, 10 cm, 30 cm olan akvaryumun hacmi 6000 cm³ = 6 dm³ = 6 L'dir."
          ],
          sorular: [
            S("Ayrıtları 8 cm, 5 cm ve 3 cm olan dikdörtgenler prizmasının hacmi kaç cm³'tür?", ["120", "16", "158", "240"], "8 × 5 × 3 = 120."),
            S("2,5 dm³ kaç cm³'tür?", ["2500", "250", "25", "25 000"], "1 dm³ = 1000 cm³."),
            S("Hacmi 12 dm³ olan bir kap kaç litre su alır?", ["12", "120", "1,2", "12 000"], "1 dm³ = 1 L."),
            S("Bir ayrıtı 4 cm olan küpün hacmi kaç cm³'tür?", ["64", "16", "48", "96"], "4³ = 64.")
          ]
        }
      ]
    },
    {
      id: "m6", ad: "Geometrik Nicelikler (2): Alan",
      konular: [
        {
          id: "m6k1", ad: "Çember ve Dairenin Alanı", video: "jhMWDCpU5MQ",
          ozet: ["Çemberin uzunluğu: Ç = 2πr (π ≈ 3,14 ya da 3)", "Dairenin alanı: A = πr²", "Daire dilimi alanı = πr² · (merkez açı / 360°)", "Yay uzunluğu = 2πr · (merkez açı / 360°)", "Çap = 2 × yarıçap"],
          anlatim: [
            "Bir çemberin uzunluğunun çapına oranı her çemberde aynıdır ve π (pi) sayısı ile gösterilir; π ≈ 3,14'tür. Bu yüzden çemberin uzunluğu Ç = 2πr formülüyle bulunur.",
            "Çemberin iç bölgesiyle birlikte oluşturduğu şekle daire denir. Daireyi çok sayıda dilime ayırıp yan yana dizdiğimizde yaklaşık bir dikdörtgen oluşur; kenarları πr ve r olduğundan dairenin alanı A = πr²'dir.",
            "Köşesi çemberin merkezinde olan açıya merkez açı denir. Merkez açının daire içinde ayırdığı bölgeye daire dilimi denir. Daire diliminin alanı, dairenin alanının merkez açı/360° kadarıdır: 90°'lik dilim dairenin dörtte biridir.",
            "Örnek: Yarıçapı 10 cm olan dairenin alanı π · 100 ≈ 314 cm²; 72°'lik dilimin alanı 314 · 72/360 = 62,8 cm²'dir."
          ],
          sorular: [
            S("Yarıçapı 5 cm olan dairenin alanı kaç cm²'dir? (π = 3,14)", ["78,5", "31,4", "15,7", "25"], "3,14 × 25 = 78,5."),
            S("Yarıçapı 6 cm olan dairede 120°'lik merkez açılı dilimin alanı kaç cm²'dir? (π = 3)", ["36", "108", "12", "54"], "3 × 36 = 108; 108 × 120/360 = 36."),
            S("Çapı 20 cm olan çemberin uzunluğu kaç cm'dir? (π = 3)", ["60", "120", "30", "300"], "2 × 3 × 10 = 60.")
          ]
        },
        {
          id: "m6k2", ad: "Eşkenar Dörtgen ve Yamuğun Alanı", video: "14MpjypqfFQ",
          ozet: ["Eşkenar dörtgen: 4 kenarı eş. Alan = (köşegen₁ × köşegen₂) / 2 = taban × yükseklik", "Yamuk: bir çift karşılıklı kenarı paralel dörtgen.", "Yamuğun alanı = (alt taban + üst taban) × yükseklik / 2", "Paralelkenar alanı = taban × yükseklik"],
          anlatim: [
            "Dört kenarı eşit uzunlukta olan dörtgene eşkenar dörtgen denir. Köşegenleri birbirini dik olarak ortalar. Eşkenar dörtgenin alanı köşegen uzunluklarının çarpımının yarısıdır: A = (e · f) / 2. Ayrıca bir paralelkenar olduğu için A = taban × yükseklik formülüyle de bulunabilir.",
            "Yalnızca bir çift karşılıklı kenarı paralel olan dörtgene yamuk denir. Paralel kenarlara taban, tabanlar arasındaki dik uzaklığa yükseklik denir.",
            "Yamuğun alanı tabanların toplamı ile yüksekliğin çarpımının yarısıdır: A = (a + c) · h / 2. İki eş yamuğu ters çevirip birleştirirsek bir paralelkenar elde ederiz; formül buradan gelir.",
            "Örnek: Tabanları 12 cm ve 8 cm, yüksekliği 5 cm olan yamuğun alanı (12 + 8) · 5 / 2 = 50 cm²'dir. Köşegenleri 10 cm ve 6 cm olan eşkenar dörtgenin alanı 30 cm²'dir."
          ],
          sorular: [
            S("Köşegenleri 14 cm ve 8 cm olan eşkenar dörtgenin alanı kaç cm²'dir?", ["56", "112", "44", "22"], "14 × 8 / 2 = 56."),
            S("Tabanları 9 cm ve 5 cm, yüksekliği 6 cm olan yamuğun alanı kaç cm²'dir?", ["42", "84", "270", "20"], "(9 + 5) × 6 / 2 = 42."),
            S("Yamuğun tanımı hangisidir?", ["Yalnızca bir çift karşılıklı kenarı paralel dörtgen", "Bütün kenarları eş dörtgen", "Bütün açıları dik dörtgen", "Hiç paralel kenarı olmayan dörtgen"], "Yamukta bir çift paralel kenar vardır.")
          ]
        }
      ]
    },
    {
      id: "m7", ad: "Geometrik Şekiller: Üçgende Yardımcı Elemanlar",
      konular: [
        {
          id: "m7k1", ad: "Kenarortay, Açıortay ve Yükseklik", video: "",
          ozet: ["Kenarortay: köşeyi karşı kenarın orta noktasına birleştiren doğru parçası.", "Üç kenarortay bir noktada kesişir: ağırlık merkezi.", "Açıortay: köşedeki açıyı iki eş açıya bölen doğru parçası.", "Yükseklik: köşeden karşı kenara (ya da uzantısına) çizilen dik doğru parçası.", "Dik üçgende iki yükseklik dik kenarlardır."],
          anlatim: [
            "Üçgenin bir köşesini karşısındaki kenarın orta noktasına birleştiren doğru parçasına kenarortay denir. Her üçgenin üç kenarortayı vardır ve bunlar tek bir noktada kesişir; bu noktaya ağırlık merkezi denir. Kartondan kesilmiş bir üçgen ağırlık merkezinden parmak ucunda dengede durur.",
            "Bir köşedeki açıyı iki eş açıya bölen ve karşı kenara kadar uzanan doğru parçasına üçgenin açıortayı denir. Üç açıortay da bir noktada kesişir.",
            "Bir köşeden karşı kenara ya da onun uzantısına dik olarak çizilen doğru parçasına yükseklik denir. Geniş açılı üçgende bazı yükseklikler üçgenin dışına düşer. Dik üçgende dik kenarlar aynı zamanda yüksekliktir.",
            "Kenarortay inşası, kenarın orta dikmesinin çizilmesiyle başlar: Orta dikme kenarın orta noktasını verir; bu noktayı karşı köşeyle birleştiririz."
          ],
          sorular: [
            S("Üçgenin bir köşesini karşı kenarın orta noktasına birleştiren doğru parçası hangisidir?", ["Kenarortay", "Açıortay", "Yükseklik", "Orta dikme"], "Kenarortay orta noktaya gider."),
            S("Üçgenin üç kenarortayının kesiştiği noktaya ne denir?", ["Ağırlık merkezi", "Köşe", "Orta nokta", "Merkez açı"], "Kenarortaylar ağırlık merkezinde kesişir."),
            S("Köşeden karşı kenara dik inen doğru parçası hangisidir?", ["Yükseklik", "Kenarortay", "Açıortay", "Köşegen"], "Yükseklik diktir.")
          ]
        }
      ]
    },
    {
      id: "m8", ad: "İstatistiksel Araştırma Süreci",
      konular: [
        {
          id: "m8k1", ad: "Veri, Grafikler, Ortalama ve Açıklık", video: "SNaA7ufy35M",
          ozet: ["Evren: araştırılan grubun tamamı · Örneklem: evrenden seçilen temsilî grup.", "Nicel (sürekli) veri: ölçülerek elde edilir (boy, sıcaklık). Kategorik veri: grup bildirir.", "Çizgi grafiği: zamana bağlı değişimi gösterir.", "Aritmetik ortalama = veriler toplamı / veri sayısı", "Açıklık = en büyük − en küçük değer", "Ortalama mutlak sapma: her verinin ortalamadan uzaklıklarının ortalaması."],
          anlatim: [
            "İstatistiksel araştırmada incelenen grubun tamamına evren, evreni temsil etmek üzere seçilen daha küçük gruba örneklem denir. Türkiye'deki bütün 7. sınıf öğrencileri bir evrendir; anket yapılan 500 öğrenci örneklemdir.",
            "Ölçme ya da sayma ile elde edilen sayısal verilere nicel veri denir. Boy, kilo, sıcaklık gibi ölçümle elde edilen veriler süreklidir. Zamana göre değişen nicel veriler en iyi çizgi grafiğiyle gösterilir.",
            "Bir veri grubunun aritmetik ortalaması veriler toplamının veri sayısına bölümüdür: 12, 15, 18 → (12+15+18)/3 = 15. Açıklık ise en büyük değer ile en küçük değer arasındaki farktır: 18 − 12 = 6.",
            "Verilerin ortalama etrafında ne kadar dağıldığını ortalama mutlak sapma gösterir: Her verinin ortalamadan uzaklığı bulunur, bu uzaklıkların ortalaması alınır. Sapma küçükse veriler ortalamaya yakın, büyükse dağınıktır."
          ],
          sorular: [
            S("8, 12, 10, 14, 6 verilerinin aritmetik ortalaması kaçtır?", ["10", "12", "50", "8"], "50 / 5 = 10."),
            S("15, 9, 22, 13 verilerinin açıklığı kaçtır?", ["13", "7", "22", "9"], "22 − 9 = 13."),
            S("Bir şehrin bir hafta boyunca günlük sıcaklık değişimini göstermek için en uygun grafik hangisidir?", ["Çizgi grafiği", "Daire grafiği", "Resim grafiği", "Nokta grafiği"], "Zamana bağlı değişim çizgi grafiğiyle gösterilir."),
            S("Bir okuldaki 600 öğrenciden rastgele seçilen 60 öğrenciye anket yapılıyor. 60 öğrencilik gruba ne denir?", ["Örneklem", "Evren", "Ortalama", "Açıklık"], "Evrenden seçilen temsilî grup örneklemdir.")
          ]
        }
      ]
    },
    {
      id: "m9", ad: "Veriden Olasılığa",
      konular: [
        {
          id: "m9k1", ad: "Olasılık: Örnek Uzay ve Olay", video: "",
          ozet: ["Deney: sonucu önceden kesin bilinmeyen işlem (zar atmak).", "Örnek uzay: tüm olası sonuçlar. Zar: {1,2,3,4,5,6}", "Olay: örnek uzayın bir alt kümesi (çift gelmesi: {2,4,6})", "P(A) = istenen durum sayısı / tüm durum sayısı", "Tümleyen olay: P(A) + P(A') = 1", "Ayrık olaylar: aynı anda gerçekleşemez."],
          anlatim: [
            "Sonucunu önceden kesin olarak bilemediğimiz işlemlere deney denir: zar atmak, para atmak, torbadan top çekmek. Bir deneyin bütün olası sonuçlarının kümesine örnek uzay denir. Zar atma deneyinin örnek uzayı {1, 2, 3, 4, 5, 6}'dır.",
            "Örnek uzayın her alt kümesine olay denir. 'Zarın asal sayı gelmesi' olayı {2, 3, 5}'tir. Bütün sonuçların gerçekleşme şansı aynıysa eşit olasılıklıdır ve bir olayın olasılığı: P(A) = olayın eleman sayısı / örnek uzayın eleman sayısı. Asal gelme olasılığı 3/6 = 1/2.",
            "Bir olayın gerçekleşmemesi durumuna tümleyen olay denir. Bir olay ile tümleyeninin olasılıkları toplamı 1'dir: Zarın 6 gelme olasılığı 1/6 ise 6 gelmeme olasılığı 5/6'dır.",
            "Aynı anda gerçekleşemeyen olaylara ayrık olaylar denir: 'Zarın tek gelmesi' ile 'zarın 4 gelmesi' ayrıktır. 'Zarın çift gelmesi' ile 'zarın 4 gelmesi' ayrık değildir, çünkü 4 her ikisinde de vardır."
          ],
          sorular: [
            S("Bir zar atıldığında 4'ten büyük bir sayı gelme olasılığı kaçtır?", ["1/3", "1/2", "2/3", "1/6"], "{5, 6} → 2/6 = 1/3."),
            S("Torbada 3 kırmızı, 5 mavi, 2 yeşil top var. Rastgele çekilen topun mavi olma olasılığı kaçtır?", ["1/2", "5/8", "1/5", "3/10"], "5/10 = 1/2."),
            S("Bir olayın olasılığı 3/7 ise tümleyeninin olasılığı kaçtır?", ["4/7", "3/7", "1", "7/3"], "1 − 3/7 = 4/7."),
            S("Zar atma deneyinde hangi iki olay ayrıktır?", ["Tek gelmesi ve 2 gelmesi", "Çift gelmesi ve 2 gelmesi", "Asal gelmesi ve 3 gelmesi", "3'ten büyük gelmesi ve 5 gelmesi"], "2 tek sayı değildir; aynı anda olamazlar.")
          ]
        }
      ]
    }
  ]
};
})();
