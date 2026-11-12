// 📕 Kitabım — 3. Sınıf Matematik Ders Kitabı 1. Kitap (MEB 2026-2027): konu anlatımı + tema değerlendirme çözümleri.
// Matematik sorularının çoğu resim ve tablo üzerinden sorulduğu için burada her konunun anlatımı ve örnek çözümleri,
// tema sonu değerlendirmelerinde ise metinden çözülebilen soruların cevapları var.
window.REHBER = window.REHBER || {};
window.REHBER.matematik = {
  kitap: "Matematik Ders Kitabı — 1. Kitap",
  pdf: "https://cdn.eba.gov.tr/temel-egitim/yayin/2026-2027/ktp/matematik3-1.pdf",
  fark: 1,
  temalar: [
    {
      ad: "1. Tema: Sayılar ve Nicelikler (1)", ikon: "🔢",
      bolumler: [
        {
          ad: "Sayıları Okuma ve Yazma", s: 12, ikon: "🔢", konu: ["m1"],
          anlatim: [
            ["🔢", "3. sınıfta 1000'e kadar sayılarla çalışırız. Üç basamaklı sayılar yüzler, onlar ve birler basamağından oluşur."],
            ["🗣️", "Okurken önce yüzler, sonra onlar, sonra birler okunur: 457 → dört yüz elli yedi. 305 → üç yüz beş (onlar basamağı 0 olduğu için okunmaz)."],
            ["✍️", "Yazıyla verilen sayıyı rakamla yazarken boş basamağa 0 koyarız: altı yüz dokuz → 609."],
            ["💯", "10 onluk = 1 yüzlük = 100. 10 yüzlük = 1 binlik = 1000 (bin)."]
          ],
          cevaplar: [
            ["Örnek: 708 nasıl okunur?", "Yedi yüz sekiz.", "k"],
            ["Örnek: \"beş yüz kırk\" rakamla", "540", "k"]
          ]
        },
        {
          ad: "Sayıları Çözümleme", s: 18, ikon: "🧩", konu: ["m1"],
          anlatim: [
            ["🧩", "Çözümleme: Sayıyı basamak değerlerinin toplamı olarak yazmak. 643 = 600 + 40 + 3 = 6 yüzlük + 4 onluk + 3 birlik."],
            ["📍", "Basamak değeri: Rakamın bulunduğu yere göre değeri. 643'te 4'ün basamak değeri 40, 6'nın basamak değeri 600'dür."],
            ["🔄", "Aynı sayı farklı şekillerde çözümlenebilir: 250 = 2 yüzlük + 5 onluk = 25 onluk."]
          ],
          cevaplar: [
            ["Örnek: 806'yı çözümle", "806 = 800 + 0 + 6 = 8 yüzlük + 0 onluk + 6 birlik.", "k"]
          ]
        },
        {
          ad: "Sayıları Sıralama ve Yuvarlama", s: 28, ikon: "📶", konu: ["m2"],
          anlatim: [
            ["⚖️", "Karşılaştırırken önce yüzler basamağına bakarız; eşitse onlara, o da eşitse birlere bakarız. 482 > 479 (yüzler eşit, onlarda 8 > 7)."],
            ["🐊", "< küçüktür, > büyüktür, = eşittir. Timsahın ağzı büyük sayıya açılır."],
            ["🎯", "En yakın onluğa yuvarlama: Birler basamağı 0–4 ise aşağı, 5–9 ise yukarı. 527 → 530, 523 → 520, 525 → 530."],
            ["💯", "En yakın yüzlüğe yuvarlama: Onlar basamağına bakılır. 0–4 aşağı, 5–9 yukarı. 650 → 700, 649 → 600."]
          ],
          cevaplar: [
            ["Örnek: 348'i en yakın onluğa ve yüzlüğe yuvarla", "Onluğa: 350. Yüzlüğe: 300.", "k"]
          ]
        },
        {
          ad: "Ritmik Sayma", s: 40, ikon: "🥁", konu: ["m3"],
          anlatim: [
            ["🥁", "Ritmik sayma: Belli bir sayı kadar artarak (ileriye) ya da azalarak (geriye) saymak."],
            ["➕", "3. sınıfta 2, 3, 4, 5, 6, 7, 8, 9, 10 ve 100'er ritmik sayarız. 6'şar: 6, 12, 18, 24, 30…"],
            ["➖", "Geriye sayma: 50'den 5'er geriye: 50, 45, 40, 35…"],
            ["💡", "Ritmik saymalar çarpım tablosunun temelidir: 7'şer saymada 5. sayı 35'tir (5 × 7)."]
          ],
          cevaplar: [
            ["Örnek: 8'den başlayarak 8'er say (5 adım)", "8, 16, 24, 32, 40", "k"]
          ]
        },
        {
          ad: "Tek ve Çift Sayılar", s: 56, ikon: "⚖️", konu: ["m4"],
          anlatim: [
            ["👫", "Çift sayılar ikişerli gruplanınca artan kalmaz; birler basamağı 0, 2, 4, 6, 8'dir."],
            ["🧍", "Tek sayılar ikişerli gruplanınca 1 artar; birler basamağı 1, 3, 5, 7, 9'dur."],
            ["➕", "Toplamada kural: Tek + Tek = Çift, Çift + Çift = Çift, Tek + Çift = Tek."]
          ],
          cevaplar: [
            ["Örnek: 37 + 45 tek mi çift mi?", "Tek + Tek = Çift → 82 çift sayıdır.", "k"]
          ]
        },
        {
          ad: "Sayı ve Şekil Örüntüleri", s: 68, ikon: "🔁", konu: ["m5"],
          anlatim: [
            ["🔁", "Örüntü: Belli bir kurala göre tekrar eden ya da artıp azalan sayı veya şekil dizisi."],
            ["🔎", "Kuralı bulmak için ardışık iki terimin farkına bakarız: 12, 17, 22, 27 → kural: 5'er artıyor."],
            ["🔺", "Şekil örüntüsünde her adımdaki şekil sayısını sayıp sayı örüntüsüne çeviririz."]
          ],
          cevaplar: [
            ["Örnek: 64, 60, 56, ? , ?", "Kural 4'er azalıyor → 52, 48.", "k"]
          ]
        },
        {
          ad: "Nesnelerin Sayılarını Tahmin Etme", s: 74, ikon: "🫘", konu: ["m6"],
          anlatim: [
            ["🫘", "Tahmin: Saymadan yaklaşık bir sayı söylemek. Sonra sayarak tahminimizi kontrol ederiz."],
            ["🧮", "İpucu: Küçük bir bölümü sayıp (ör. 10 tane) bütünün kaç katı olduğunu düşünürüz."]
          ],
          cevaplar: [["Tahmin ile gerçek sayı neden farklı olabilir?", "Çünkü tahmin yaklaşık bir sayıdır; sayınca tam sayıyı buluruz. Tahminin gerçeğe yakın olması iyidir.", "k"]]
        },
        {
          ad: "1. Tema Değerlendirme", s: 79, ikon: "🏁",
          anlatim: [["🏁", "Metinden çözülebilen değerlendirme sorularının cevapları. Resim ve tablo üzerinden sorulanları kitaba bakarak çöz."]],
          cevaplar: [
            ["2) Çözümleme eşleştirmesi", "100+100+10+10+10+1+1+1+1 = 234. 5 yüzlük + 2 onluk = 520. 400+50+5 = 455. 500+20+5 = 525. Altı tane 100 + 1 + 1 = 602.", "k"],
            ["3) Yasemin'in okul numarası", "Yüzler 3, onlar 5 (basamak değeri 50), birler en küçük rakam 0 → 350.", "k"],
            ["4) Seda'nın otobüsü", "Birler: 3 + ? = 9 → 6. Onlar: en küçük tek sayı 1, 2 fazlası 3. Yüzler: 3 + 1 = 4 → 436.", "k"],
            ["9) Sadece çift sayı tutan çocuk", "38, 22, 30, 46 hepsi çift → Bahar. (2, 28, 31, 49'da 31 ve 49 tek; 11, 6, 55, 48'de 11 ve 55 tek.)", "k"],
            ["9) Hem 9'ar hem 8'er saymada olan sayılar", "72 (ve tablo devam ediyorsa 144).", "k"],
            ["13) Serap ve Arda'nın örüntüsü", "88, 86, 84, 82, 80, 78", "k"],
            ["14) Burcu ve Seray'ın örüntüsü", "10, 14, 18, 22, 26", "k"],
            ["15) Emir ve Seda", "Emir: 17, 25, 33, 41, 49, 57. Seda: 48, 43, 38, 33, 28, 23. Ortak sayı: 33.", "k"]
          ]
        }
      ]
    },
    {
      ad: "2. Tema: Sayılar ve Nicelikler (2)", ikon: "🍕",
      bolumler: [
        {
          ad: "Bütün, Yarım ve Çeyrek", s: 86, ikon: "🍕", konu: ["m7"],
          anlatim: [
            ["🍕", "Bütün: Bir nesnenin tamamı. Yarım: Bütünün 2 eş parçasından biri (1/2). Çeyrek: Bütünün 4 eş parçasından biri (1/4)."],
            ["✂️", "Parçalar mutlaka eş (aynı büyüklükte) olmalıdır."],
            ["🔢", "1/2 \"yarım\" ya da \"ikide bir\", 1/4 \"çeyrek\" ya da \"dörtte bir\" diye okunur. 2 yarım = 1 bütün, 4 çeyrek = 1 bütün, 2 çeyrek = 1 yarım."]
          ],
          cevaplar: [["Örnek: Kaç çeyrek bir bütün eder?", "4 çeyrek.", "k"]]
        },
        {
          ad: "Eş Parçalar, Pay ve Payda", s: 92, ikon: "🍫", konu: ["m7"],
          anlatim: [
            ["🍫", "Kesir: Bir bütünün eş parçalarından bir kısmını gösterir. 3/8 → bütün 8 eş parçaya bölünmüş, 3'ü alınmış."],
            ["⬆️", "Pay (üstteki sayı): Alınan parça sayısı. Payda (alttaki sayı): Bütünün kaç eş parçaya bölündüğü."],
            ["1️⃣", "Birim kesir: Payı 1 olan kesir (1/2, 1/5, 1/10). 7/10'un birim kesri 1/10'dur."],
            ["🗣️", "3/8 okunuşu: \"sekizde üç\"."]
          ],
          cevaplar: [["Örnek: 5/6'nın pay ve paydası", "Pay 5, payda 6. Birim kesri 1/6.", "k"]]
        },
        {
          ad: "Analog ve Dijital Saatler", s: 108, ikon: "🕘", konu: ["m8"],
          anlatim: [
            ["🕘", "Analog saatte kısa (akrep) saati, uzun (yelkovan) dakikayı gösterir. Dijital saatte sayılarla yazılır: 09:15."],
            ["🌅", "Gün 24 saattir. Öğleden önce 00:00–12:00, öğleden sonra 12:00–24:00. Öğleden sonra 3 → 15:00."],
            ["🗣️", "Okuma: 09:15 → dokuzu çeyrek geçiyor. 10:30 → onu buçuk geçiyor (on buçuk). 08:50 → dokuza on var."]
          ],
          cevaplar: [["Örnek: 16:48 nasıl okunur?", "Öğleden sonra beşe on iki var (dördü kırk sekiz geçiyor).", "k"]]
        },
        {
          ad: "Zaman Ölçü Birimleri ve Süre Tahmini", s: 114, ikon: "⏱️", konu: ["m8"],
          anlatim: [
            ["⏱️", "1 dakika = 60 saniye. 1 saat = 60 dakika. 1 gün = 24 saat. 1 hafta = 7 gün."],
            ["📅", "1 ay ≈ 4 hafta (30 gün). 1 yıl = 12 ay = 52 hafta ≈ 365 gün."],
            ["🔄", "Dönüştürme: 75 saniye = 60 + 15 → 1 dakika 15 saniye."],
            ["🤔", "Süre tahmini: Diş fırçalamak ~2 dakika, bir ders ~40 dakika, uyku ~10 saat."]
          ],
          cevaplar: [["Örnek: 2 saat kaç dakika?", "120 dakika.", "k"]]
        },
        {
          ad: "Uzunluk ve Kütle Ölçü Birimleri", s: 126, ikon: "📏", konu: ["m9"],
          anlatim: [
            ["📏", "1 metre (m) = 100 santimetre (cm). 1 kilometre (km) = 1000 metre: şehirler arası uzaklık km ile ölçülür."],
            ["🔄", "Dönüştürme: 3 m 25 cm = 325 cm; 470 cm = 4 m 70 cm."],
            ["⚖️", "1 kilogram (kg) = 1000 gram (g). 1 ton (t) = 1000 kg: kamyon, gemi gibi çok ağır şeyler tonla ölçülür. Altın gibi hafif ve değerli şeyler gramla ölçülür."],
            ["⚖️", "Eşit kollu terazi iki kefedeki kütleler eşitse dengede durur."]
          ],
          cevaplar: [["Örnek: 2 kg 300 g kaç gram?", "2300 g.", "k"]]
        },
        {
          ad: "Madenî ve Kâğıt Paralar", s: 144, ikon: "💰", konu: ["m10"],
          anlatim: [
            ["💰", "Madenî paralar: 1 kuruş, 5, 10, 25, 50 kuruş ve 1 TL. Kâğıt paralar: 5, 10, 20, 50, 100, 200 TL."],
            ["🔄", "1 TL = 100 kuruş (kr.). 50 kr. = yarım lira."],
            ["🧾", "Toplam bulurken önce liraları, sonra kuruşları toplarız; 100 kuruşu 1 TL'ye çeviririz. 12 TL 75 kr. + 48 TL 25 kr. = 61 TL."]
          ],
          cevaplar: [["Örnek: 3 tane 50 kr. kaç TL?", "150 kr. = 1 TL 50 kr.", "k"]]
        },
        {
          ad: "2. Tema Değerlendirme", s: 153, ikon: "🏁",
          anlatim: [["🏁", "Metinden çözülebilen değerlendirme sorularının cevapları. Model çizimleri ve saat resimleri için kitaba bak."]],
          cevaplar: [
            ["3) Birim kesirler", "…/10 → 1/10. …/5 → 1/5. …/100 → 1/100.", "k"],
            ["5) Sekizde üç modeli", "Tarlayı 8 eş parçaya böl, 3 parçayı boya (3/8).", "k"],
            ["6) Saat tablosu", "Öğleden önce dokuzu çeyrek geçiyor → 09:15. 10:30 → öğleden önce onu buçuk geçiyor. Öğleden sonra üçü yirmi altı geçiyor → 15:26. 08:25 → öğleden önce sekizi yirmi beş geçiyor. 16:48 → öğleden sonra beşe on iki var.", "k"],
            ["7) D / Y", "D, D, Y (12 ay 1 yıl), Y (60 dakika 1 saat), D, D, Y (1 yıl 12 ay), D, D, Y (1 ay yaklaşık 4 hafta)", "k"],
            ["9) Uzunluk eşitlikleri", "3 m = 300 cm. 900 cm = 9 m 0 cm. 2 m 60 cm = 260 cm. 150 cm = 1 m 50 cm. 240 cm = 2 m 40 cm. 7 m 10 cm = 710 cm. 450 cm = 4 m 50 cm. 5 m 80 cm = 580 cm.", "k"],
            ["10) Birimler", "1 kilogram on tane 100 gram eder. İki tane 500 gram 1 kilogram eder. Kamyon ve tır → ton. Altın → gram.", "k"],
            ["11) Dönüştürme", "95 sn = 1 dk 35 sn. 67 sn = 1 dk 7 sn. 72 sn = 1 dk 12 sn. 80 sn = 1 dk 20 sn. 1 gün = 24 saat. 1 saat = 60 dakika.", "k"],
            ["13) D / Y", "D, D, Y (gümüş kolye gramla ölçülür), D", "k"],
            ["14) Nur Hanım'ın toplamı", "35 TL + 12 TL 75 kr. + 48 TL 25 kr. = 96 TL. (Paraları en az sayıda seçmek için büyük paradan başla: örneğin 50 + 20 + 20 + 5 + 1.)", "k"],
            ["15) Ödenen tutarlar", "Cemil: 10 + 5 + 5×1 = 20 TL. Cansu: 2×10 = 20 TL. Şeyma: 8×1 + 2×5 = 18 TL. Ümit: 3×5 + 4×1 = 19 TL. Bu tutarlara göre ürünleri eşleştir.", "k"],
            ["16) Melike: 256 TL 50 kr.", "4 kâğıt + 2 madenî: iki tane 100 TL, bir tane 50 TL, bir tane 5 TL (kâğıt) + bir tane 1 TL, bir tane 50 kr. (madenî).", "k"]
          ]
        }
      ]
    },
    {
      ad: "3. Tema: İşlemlerden Cebirsel Düşünmeye", ikon: "➕",
      bolumler: [
        {
          ad: "Toplama ve Çıkarmanın Sonucunu Tahmin Etme", s: 160, ikon: "🎯", konu: ["m11", "m12"],
          anlatim: [
            ["🎯", "Sonucu tahmin ederken sayıları en yakın onluğa ya da yüzlüğe yuvarlar, sonra işlemi yaparız."],
            ["➕", "Örnek: 387 + 214 → en yakın yüzlüğe: 400 + 200 = 600. Gerçek sonuç 601; tahmin çok yakın."],
            ["➖", "Örnek: 72 − 38 → en yakın onluğa: 70 − 40 = 30. Gerçek sonuç 34."],
            ["✅", "Tahmin, işlem sonucunun mantıklı olup olmadığını kontrol etmemizi sağlar."]
          ],
          cevaplar: [["Örnek: 498 + 307'yi yüzlüğe yuvarlayarak tahmin et", "500 + 300 = 800 (gerçek sonuç 805).", "k"]]
        },
        {
          ad: "Toplama ve Çıkarma İşlemlerini Çözümleme", s: 181, ikon: "🧮", konu: ["m11", "m12"],
          anlatim: [
            ["🧮", "Zihinden işlem için sayıları basamaklarına ayırırız: 345 + 230 = (300 + 200) + (40 + 30) + (5 + 0) = 575."],
            ["🔟", "Onluk ve yüzlük katı: 10, 20, 30… ve 100, 200, 300… Bunlarla toplamak kolaydır: 46 + 30 = 76."],
            ["➖", "Çıkarmada da çözümleriz: 586 − 243 = (500 − 200) + (80 − 40) + (6 − 3) = 343."],
            ["🔁", "Eldeli toplama ve onluk bozarak çıkarmada basamaklar arasında 10 alıp veririz."]
          ],
          cevaplar: [["Örnek: 467 − 125 çözümleyerek", "(400 − 100) + (60 − 20) + (7 − 5) = 300 + 40 + 2 = 342.", "k"]]
        }
      ]
    }
  ]
};
