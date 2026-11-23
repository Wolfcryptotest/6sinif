# Takip Botu — Yol Haritası ve Kurallar

Bu dosya, siteyi her gün denetleyip geliştiren takip botunun çalışma kılavuzudur.
Bot her çalışmada önce bu dosyayı okur, sonunda "Çalışma günlüğü" bölümüne kısa bir satır ekler.

## Amaç
Ücretsiz, Minik'ten YKS'ye kadar her yaşa uygun bir öğrenme platformu. Hedeflerimiz:
- Tonguç ve Doping gibi örneklerinden daha iyi olmak.
- İçeriği bol, sorusu çok olmak.
- Ezber yerine anlayarak öğretmek.
- Tekrarlarla öğrenmeyi kalıcı yapmak.
- Eğlendirerek öğretmek.
- Öğrencinin yanında duran bir özel ders öğretmeni gibi davranmak: eksiğini ölçüp ona göre ders vermek.
- Okumayı seven öğrenciye telif süresi dolmuş hikâye ve romanlardan geniş bir kitaplık sunmak.

## Değişmez kurallar
1. **Konu kimlikleri (id) asla değişmez.** Eski öğrencilerin ilerlemesi bu kimliklere bağlıdır. Yeni konu, yeni kimlikle eklenir.
2. **Yedekle/Taşı arayüzde gizli kalır.** Kod durabilir.
3. **Veli Karnesi, İlerleme Paneli'nin içindedir.**
4. **Minik sınıfta çizgi film ya da eğlence videosu yoktur.** Yalnızca konu anlatan, hareketli yazılı ve resimli eğitici anlatımlar olur. Uygulama içi "Animasyonlu Anlatım" bunun için var.
5. Uygulama sade kalır ve çocuğun gelişimini önde tutar. Gereksiz özellik ve karmaşa eklenmez.
6. **İçerik doğruluğu:** Bilgiler MEB öğretim programlarıyla (tymm.meb.gov.tr, mufredat.meb.gov.tr) ve ders kitaplarıyla uyumlu olmalıdır.
   - Sınıf düzeyini aşan konu sorulmaz. Örneğin 8. sınıfta mol, pH formülü, tork ya da piramit hacmi sorulmaz.
   - Emin olunmayan bilgi eklenmez.
7. **Türkçe:** Ekler doğru yazılır (6'ya, Venüs'ten). Soru köklerinde "değildir" ve "yanlıştır" gibi olumsuz ifadeler belirgin olur.
8. **Kitaplık yalnızca telifsiz ya da herkese açık eserlerden oluşur.**
   - Türkiye'de yazar ölümünden 70 yıl sonra eser kamu malı olur. Örnekler: Ömer Seyfettin, Ahmet Mithat, Namık Kemal, Halit Ziya, Mehmet Rauf, Hüseyin Rahmi.
   - Masallar ve halk hikâyeleri kullanılabilir.
   - Çeviriler çevirmenin telifine tabidir. Yalnızca telifsiz çeviriler ya da özgün metinler kullanılır.
   - Kaynak olarak Vikikaynak (tr.wikisource.org) ve Project Gutenberg kullanılır, kaynak her zaman belirtilir.
   - Hikâyeler yaşa uygun seçilir. Gerekiyorsa sadeleştirme yapılır ve sadeleştirildiği belirtilir.
9. **Öğrenci verisi cihazda kalır** (localStorage). Hesap ya da sunucu yoktur. Veli paylaşımı bağlantı veya QR ile yapılır. **Sistemde şimdilik öğretmen bölümü yoktur;** öğretmen sayfası ya da öğretmen özelliği eklenmez (Adem'in kararı, 2026-11-11). Buluta geçiş ancak Adem'in kararıyla olur.
10. **Her değişiklikten sonra:**
    - `python3 araclar/swbump.py <klasör> [yeni-dosya.js]` çalıştırılır. Yeni dosya sw.js'deki DOSYALAR listesine eklenmezse çevrimdışı çalışma bozulur.
    - `node araclar/denetle.js` çalıştırılır ve "Sorun yok" görülmeden yayınlanmaz.
    - YKS havuzunu etkileyen 5–12. sınıf soru değişikliklerinden sonra `node araclar/yks-havuz-uret.js` yeniden çalıştırılır. Bu araç yerel sunucu ister; kullanımı dosyanın başında yazar.
11. Ödeme, üyelik, reklam ya da kişisel veri toplayan hiçbir şey eklenmez. Sesli anlatım için Google Cloud TTS kararı Adem'dedir.

## Yapı (kısa)
- **Kök:** 6. sınıf. **5–12:** `sinif/` klasörleri. İçerik `ICERIK[ders].uniteler[].konular[]` yapısındadır, soru üreticileri `URETEC[id]` içindedir.
  - Ana kopyalar: `soru-ekle.js` için `8sinif/soru-ekle.js`; `sohbet.js` için kökteki dosya; `takip.js` ve `ustalik.js` 5–12 arasında ortaktır.
- **Minik ve 1–4:** `DERS[dk].temalar[].konular[]`. Videolar `videolar.js` içindedir.
- **YKS:** `yks/index.html` tek sayfadır. Ek dosyalar:
  - `yks/havuz.js`: 5–12'den otomatik üretilir.
  - `yks/yks-ek.js`: özgün sorular ve soru üreticileri.
  - `araclar/yks-esleme.json`: YKS konusu ile sınıf konusu eşlemesi.

## Öncelikli iş listesi (sırayla; biten işaretlenir)

### A. Eksik ölçme ve asistan öğretmen "Bilge"
Sistemin öğretmeni, uygulamanın içindeki asistan öğretmendir: 5–12'de ve YKS'de **Bilge** (baykuş), Minik–4'te **Bilgin**.
Ayrı bir gerçek öğretmen bölümü yoktur. Aşağıdaki işlerin hepsi Bilge'nin ağzından, onun karakteriyle sunulur:
- Bilge seviye tespitini yapar, eksikleri söyler ve "Bugünkü dersin"i anlatır.
- Yanlışta ipucu verir, hatanın nedenini açıklar.
- Öğrenciyi cesaretlendirir, tekrar zamanını hatırlatır.
Bilge'nin kuralları:
- Ücretsizdir ve internete veri göndermez. Cevaplarını sitedeki içerikten ve öğrencinin kendi verisinden üretir.
- Yapay zekâ servisi (ücretli API) bağlamak Adem'in kararıdır.
- Bilge'ye Sor (`sohbet.js`) 5–12'de var (ana kopya kökteki `sohbet.js`; değişince 5, 7–12 klasörlerine aynen kopyalanır). YKS'de ayrı bir uyarlama var: `yks/yks-bilge.js` (panelde kart, `#bilge` görünümü; S.stats, S.defter ve MUF'tan cevap üretir). YKS'de sw.js yok, swbump gerekmez.
- [x] **A0. Bilge her sınıfta.** Bilge'ye Sor 5, 7–12 ve YKS'ye taşınır. Bilge, öğrencinin ustalık puanlarını okuyarak "Neyi bilmiyorum?", "Bugün ne çalışayım?" ve "Bu soruyu neden yanlış yaptım?" sorularına cevap verir.
  - [x] 5, 7–12'ye taşındı; "Neyi bilmiyorum?", "Bugün ne çalışayım?", "Bu soruyu neden yanlış yaptım?" cevapları eklendi (2026-11-11).
  - [x] YKS'ye taşındı: `yks/yks-bilge.js`. Eksikler (konu başarı oranı + yanlış defteri), puan türüne göre günlük plan (tekrar → zayıf konu → yeni konu, günlük hedef), son yanlışın çözümü, konu adıyla arama (video, çözümlü örnek, soru çöz, konunun anlatıldığı sınıf bölümü), sınav takvimi ve net hesabı (2026-11-12).
- [x] **A1. Seviye tespit sınavı.** 5–12'de her derse ilk girişte ünite başına 2–3 soruluk kısa bir tanılama yapılır. Sonuç `kayit.ustalik` puanlarına başlangıç değeri olarak yazılır ve "eksik haritası" gösterilir.
  - [x] `tanilama.js` (ana kopya kökte; 5, 7–12'ye aynen kopyalanır). Bilge daveti, ünite başına 2–3 soru (en çok 24; tek konulu ünitede o konudan 2 soru), "Bilmiyorum" düğmesi, yalnızca hiç çalışılmamış konulara başlangıç puanı (tam doğru 60, kısmen 40, yanlış 20; yanlışlar bugün tekrar listesine), ünite ünite eksik haritası. Veri: `kayit.tanilama` (2026-11-13).
- [x] **A2. Ön koşul haritası.** `araclar/onkosul.json` dosyasında her konunun önceki sınıflardaki ön koşul konuları tutulur (ör. 8 mat2k1 → 7 m1k2).
  - Bir konuda ustalık puanı düşükse ön koşul konudan 3 soruluk bir kontrol yapılır.
  - Ön koşulda da sorun çıkarsa öğrenci, ilgili sınıf bölümündeki o konuya "temel tamamlama" olarak yönlendirilir.
  - [x] Altyapı + 6–8 Matematik (60 konu): `araclar/onkosul.json` (harita) → `node araclar/onkosul-uret.js` (yerel sunucu; önceki sınıfın kendi sorularından ön koşul başına 12 soru toplar) → `<sınıf>/onkosul-veri.js`. Çalışma: `onkosul.js` (ana kopya kökte; 5, 7–12'ye aynen kopyalanır). Konu puanı 50'nin altındaysa Bilge 3 soruluk temel kontrolü önerir (anında geri bildirim), sonuç ekranında eksik ön koşula "Temel tamamlama" bağlantısı (`index.html?konu=<id>&temel=<sınıf>:<id>&ad=`), hedef sayfada "geri dön" şeridi. Kayıt `kayit.onkosul`; 7 gün içinde yeniden sorulmaz (2026-11-14).
  - [x] 9–12 Matematik (40 konu → 7–11. sınıflardan 43 ön koşul konusu); 9–12 index.html'e onkosul-veri.js eklendi (2026-11-15).
  - [x] 6–8 Fen (50 konu → 5–7. sınıflardan ön koşullar; ör. 8 Basınç → 6 Kuvvet ve Yoğunluk, 7 Karışımların Ayrılması → 6 Yoğunluk ve Erime-Kaynama Noktası, 6 Tutulmalar → 5 Ay'ın Evreleri ve Tam Gölge). Açık bir ön koşulu olmayan konular (6 Ergenlik, 6 Biyoçeşitlilik, 8 İklim) haritaya konmadı (2026-11-16).
  - [x] 9–12 Fizik, Kimya, Biyoloji (63 konu; ör. 11 Tork ve Denge → 8 Basit Makineler ve 10 Newton Yasaları, 9 İyonik/Kovalent Bağ → 7 Saf Maddeler ve 8 Periyodik Sistem, 12 Protein Sentezi → 8 DNA ve 9 Canlıların Temel Bileşenleri, 10 Dalgalar → 6 Işığın Yansıması ve 7 Kırılma). Yalnızca kavram tanıtan konular (9 Kimyanın Alanları) haritaya konmadı (2026-11-17).
  - [x] 5. sınıf Matematik ve Fen → 4. sınıf (34 konu → 26 ön koşul konusu; ör. 5 Çarpma-Bölme → 4 Çarpma ve Bölme İşlemi, 5 Isı ve Sıcaklık → 4 Maddenin Hâlleri ve Isı). `onkosul-uret.js` 1–4 yapısını (`DERS[dk].temalar`, `k.uret()`) okuyor: görselsiz çoktan seçmeli görevler alınır, sayı cevaplı görevler basamak çeldiricileriyle çoktan seçmeliye çevrilir. `4sinif/app.js` artık `?konu=<id>&temel=5:<id>` bağlantısını açıyor ve "5. sınıfa geri dön" şeridi gösteriyor. Grafik konusu (4 d15) görsel gerektirdiği için 5 m6k1'in ön koşulu konmadı. Yan düzeltme: 4. sınıf çevre sorusunda "kısa kenar" uzun kenardan büyük çıkabiliyordu (2026-11-17).
  - [x] Türkçe/Edebiyat ve Sosyal/İnkılap/Tarih/Coğrafya (Adem'in isteği; 154 konu, 5–12; 5. sınıf → 4. sınıf dahil). Ör. 8 Fiilimsiler → 7 Fiiller ve Fiilde Yapı, 12 Millî Mücadele → 8 İnkılap Tarihi, 10 Osmanlı'nın Kuruluşu → 7 Osmanlı ve 9 Selçuklu, 11 Biyomlar → 9 İklim ve 10 Ekosistem. Görsel gerektiren grafik konusu (4 t15) ve açık bir ön koşulu olmayan konular (ör. 9 Tarih Biliminin Yöntemi, 9 İletişim) haritaya konmadı. Üretici artık konu metninden otomatik üretilen boşluk doldurma sorularını yalnızca yedek olarak kullanıyor ve görünmeyen metne/görsele dayanan soruları ("Yukarıdaki…") almıyor. Yan düzeltmeler: 3. ve 4. sınıf bankalarında metni olmayan "Yukarıdaki…" soruları kendi başına anlaşılır hâle getirildi; 5. sınıf göreceli konum sorusunda "doğusundadir" ünlü uyumu hatası düzeltildi (2026-11-17).
- [x] **A3. Günün özel dersi.** Ana sayfada "Bugünkü dersin" kartı yer alır. En zayıf konu için 10 dakikalık bir akış:
  - kısa anlatım → çözümlü örnek → kolaydan zora 5 soru;
  - yanlışta önce ipucu, sonra benzer yeni soru;
  - en sonda tekrar takvimine ekleme.
  - [x] 5–12: `ozel-ders.js` (ana kopya kökte; 5, 7–12'ye aynen kopyalanır). Kart, hedef kartının hemen altında. Konu seçimi: puanı 60'ın altındaki konu (en düşük önce) → tekrar zamanı gelen konu → kaldığı yerden yeni konu; "Başka konu" düğmesi. Başlanan ders gün boyu sabit kalır. Akış: 3 paragraflık anlatım + "Aklında tut" → çözümlü örnek (önce düşün, sonra çözüm; varsa sık yapılan hata) → 5 soru (zorluk tahminiyle kolaydan zora; ilk yanlışta anlatımdan ipucu ve ikinci deneme, yine yanlışsa çözüm + aynı kalıptan benzer yeni soru, en çok 2) → tekrar takvimi (ilk denemede %80 altıysa yarın, değilse ustalık aralığı). Puana yalnızca ilk deneme yazılır. Bilge'nin "Bugün ne çalışayım?" cevabında "🎓 Bugünkü dersim" düğmesi. Veri: `kayit.ozelDers` (2026-11-18).
  - [ ] YKS'ye uyarlama (`yks/` yapısı farklı; isteğe bağlı).
- [ ] **A4. Hata türü teşhisi.** Yanlış şıklara yanılgı etiketi eklenir (ör. "yön dikkate alınmadı", "birim çevrilmedi").
  - Karnede "bilmiyor" ile "dikkat hatası" ayrı gösterilir.
  - Önce 6–8 fen ve matematik üreticilerinden başlanır.
  - [x] Altyapı + 6. sınıf Matematik ve Fen (2026-11-19). Üreteçlerde yanlış şık `Y(değer, "d:…")` (dikkat hatası) ya da `Y(değer, "k:…")` (kavram yanılgısı) ile etiketlenir; `soru()` bunu `s.yanilgi = { "şık metni": "d:…" }` olarak soruya ekler. `Y`, `matematik-uretec.js` içinde ve `ortak-uretec.js`'te (`window.UR.Y`) var. Teşhis `ustalik.js`'te: `USTALIK.hataKaydet(s, seçilen)` → `kayit.hataTuru = { konuId: { d, k, b, e:{etiket:sayı} } }` (etiketli soruda etiketsiz yanlış şık = "bilmiyor"), `USTALIK.hataHtml(t)` Bilge'nin teşhis kutusu. Bağlı yerler: test ekranı (app.js), aralıklı tekrar ve Veli Karnesi'nde "🔍 Hata türleri" bölümü + otomatik yorum (takip.js), özel ders ilk yanlışı (ozel-ders.js), Bilge'nin "Bu soruyu neden yanlış yaptım?" cevabı (sohbet.js). 6. sınıf Matematik: 23 üreticiden 21'i etiketli (üretilen soruların ~%60'ında en az bir etiketli şık); 6. sınıf Fen: sayısal üreteçler (bileşke kuvvet, sürat, yansıma, renk, donma noktası, yoğunluk).
  - [x] 7. sınıf Matematik ve Fen (2026-11-20). `7sinif/matematik-uretec.js` içindeki `soru()` artık `Y(değer, "d:/k:…")` alıyor (nok() dönüşümünden sonra etiketlenir). Matematik: 19 üreticinin hepsi etiketli (üretilen soruların ~%85'inde etiketli şık; ör. işaret kuralı, çıkanın işaretini değiştirmeme, −a² ile (−a)², kesirde paydaları eşitlemeden toplama, bölmede ters çevirmeme, zam/indirim karışması, ölçekte birim çevirme, yüzey alanı/hacim karışması, alan/çevre karışması, evren/örneklem). Fen: sayısal ve kural soruları (iş, kuvvet, kırılma yönü, nötr atom, çözücü/çözünen, yük ve itme/çekme).
  - [x] 8. sınıf Matematik ve Fen (2026-11-21). `8sinif/matematik-uretec.js` içindeki `soru()` artık `Y(değer, "d:/k:…")` ve `null` şık alıyor (koşullu çeldirici için); `kesir()` negatif paydayı düzeltiyor. Matematik: 12 üreticinin hepsi etiketli (asal çarpan/bölen sayısı, EBOB-EKOK karışması, üslü sayılarda tabanı üsle çarpma ve negatif üs, bilimsel gösterimde katsayı, kareköklerde kök içlerini toplama, (a+b)² = a²+b² yanılgısı, denklemde terimi karşıya geçirirken işaret, eğimi ters alma, eşitsizlikte yön, Pisagor'da kenarları toplama). `lgs-uretec.js`: Basınç, kütlenin korunumu, pH ve turnusol, ısı-sıcaklık, basit makineler, elektrik yükleri ve Geometrik Cisimler (hacim/yüzey alanı karışması, prizma-piramit kuralları). 30 000 üretilen soruda şık/etiket tutarlılığı denendi; üretilen soruların ~%82'sinde etiketli şık var.
  - [x] `sayisal-uretec.js` (8–12 ortak; kendi üreteci olmayan 41 sayısal konu: 8 Matematik Uygulamaları, 9–12 Matematik, Fizik, Kimya) (2026-11-22). `S()` ve `T()` artık `Y(değer, "d:/k:…")` alıyor; 126 çeldirici etiketlendi (ör. üslü sayılarda üsleri çarpma, (a + b)² = a² + b², hacim/yüzey alanı karışması, seri/paralel direnç, km/h → m/s'de 3,6 ile çarpma, kütle-ağırlık karışması, sesin gidip dönmesini unutma, iyonda elektron kazanma/kaybetme, Boyle/Charles'ta orantı yönü, seyreltmede derişim). 129 000 üretilen soruda etiket tutarlılığı denendi (hata yok); soruların ~%92'sinde etiketli şık var (yalnızca özel açıların trigonometrik değerleri etiketsiz). Yan düzeltmeler: iyon sorusunda O³⁺ gibi gerçekte oluşmayan iyonlar çıkabiliyordu, artık yalnızca gerçek iyonlar (Na⁺, Mg²⁺, Al³⁺, O²⁻, N³⁻…); kırtasiye sorusunda "kazanır" (kâr değil satış tutarı) düzeltildi.
  - [x] 6. sınıf Fen'in kavramsal soruları (2026-11-23). `ortak-uretec.js` (kök ve 5–12 kopyası): `ifadeler()` ve `siniflandir()` bankalarında öğe `Y(metin, "k:…")` olabilir; `ifadeler`'de etiketli yanlış ifade "Hangisi doğrudur?" sorusunda, `siniflandir`'da etiketli öğe başka grubun sorusunda çeldirici olunca etiketiyle gelir (düz metin öğeler eskisi gibi çalışır). 6. sınıf Fen: 97 yanlış ifade/çeldirici etiketlendi (ör. Ay'ı gezegen sanma, Plüton'u hâlâ gezegen sayma, iki tutulmayı karıştırma, sabit süratle giden cisimde kuvvetlerin dengelenmemiş sanılması, yumurtlayan hayvanlarda dış döllenme sanma, çukur/tümsek ayna karışması, cismin soğurduğu ışığın renginde görüneceğini sanma, genleşmede kütlenin arttığını sanma, hâl değişiminde sıcaklığın arttığını sanma, buzun/ısınan havanın yoğunluğu, grafit ve tuzlu suyu yalıtkan sanma, "doğal gaz"ı yenilenebilir sanma); direnç/parlaklık ve reosta üreteçlerinde ters cevap etiketli. 6. sınıf Fen'de etiketli şıklı soru oranı %13 → %45. 83 000 üretilen soruda (6, 5, 7–12) etiket tutarlılığı denendi, hata yok.
  - [ ] Sırada: 7–8. sınıf Fen'in kavramsal (ifadeler/sınıflandır) soruları, sonra 5, 9–12'nin kendi üreteçleri.
- [ ] **A5. Minik–4 için aynı ölçme**, oyunlaştırılmış olarak. Yanlış yapılan görevler zaten 1-3-7 gün aralıkla tekrar ediliyor. Konu bazında "ustalık yıldızları" ve veliye özet eklenir.

### B. Kitaplık (okumayı sevenlere)
- [ ] **B1. Ortak kitaplık altyapısı:** `kitaplik/`
  - Yaş ve sınıf filtresi; sayfa sayfa okuyucu (büyük yazı, gece modu, kaldığı yeri hatırlama).
  - Her hikâyenin sonunda 3–5 anlama sorusu, okuma süresi ve okunan kitap rozetleri.
  - Okuma bilgisi Veli Karnesi'ne de yazılır.
- [ ] **B2. İlk 20 eser:**
  - Ömer Seyfettin'in 10 hikâyesi; örneğin Kaşağı, Pembe İncili Kaftan, Forsa, Falaka, Diyet, Ant, Bomba. Seçerken yaşa uygunluğa bakılır.
  - Halk masalları ve Nasreddin Hoca fıkraları.
  - Dede Korkut'tan sadeleştirilmiş birkaç hikâye.
  - Her eserde kaynak ve kamu malı notu bulunur.
- [ ] **B3.** Lise için seçmeler: Halit Ziya, Hüseyin Rahmi, Ahmet Mithat, Namık Kemal'in İntibah romanından bölümler. Telif durumu her eser için kontrol edilir.
- [ ] **B4.** Minik–2 için sesli okunan resimli kısa masallar. Mevcut `minik/kitaplar.js` (`window.KITAPLAR`) ve 1–4'teki hikâye altyapısıyla uyumlu olmalıdır.

### C. İçerik ve soru
- [ ] C1. 8. sınıf matematikte anlatımı kısa olan konular (mat2k1, mat6k1, mat9k2) ve 8. sınıf LGS sabit soru bankasının MEB örnek sorularına göre gözden geçirilmesi.
- [ ] C2. 11. sınıf biyoloji, edebiyat ve tarihin Maarif programıyla ayrıntılı karşılaştırılması. Eksik konular yeni kimlikle eklenir.
- [ ] C3. YKS: tam deneme (TYT 120 soru / 165 dk; AYT 160 soru / 180 dk), konu bazlı net analizi ve "hedef bölüm → gereken net" hesaplayıcı.
- [ ] C3b. YKS eşlemesi (`araclar/yks-esleme.json`) yeni 11. sınıf Maarif konularına (bio11*, ede11*, tar11*, cog11*, fel11*) ve 9–10 Maarif değişikliklerine göre gözden geçirilir. Programdan çıkan 32 konunun (11. sınıfta 28, 9'da 3, 10'da 1) soruları şimdilik eski havuzdan korunuyor (yks-havuz-uret.js, 2026-11-21).
- [ ] C4. YKS'de eşlemesi zayıf kalan konulara özgün soru eklenmesi: Mutlak Değer, Yaş, Hareket, İşçi-Havuz (üreticiler var, sabit soru eklenecek) ve Kalıtım.
- [ ] C5. Her konuda "neden böyle?" sorusunu cevaplayan anlayarak öğrenme kartları: günlük hayattan bir örnek ve bir mini deney.

### D. Deneyim
- [ ] D1. Minik'teki Animasyonlu Anlatım'ın 1–4. sınıflara da eklenmesi.
- [ ] D2. Erişilebilirlik: yazı boyutu ayarı, renk körlüğüne uygun doğru/yanlış renkleri.
- [ ] D3. Video–konu eşleşme taraması: her `video:` kimliğinin YouTube başlığı (oEmbed, WebFetch ile; YouTube'a kabuktan erişim yok) konu adıyla karşılaştırılır; uymayan ya da açılmayan video kaldırılır veya doğrusuyla değiştirilir.
  - [x] 6. sınıf (165 video, ortak seçmeli dosyalar dahil) tarandı (2026-11-11).
  - [ ] 5, 7, 8 (≈260 yeni video), 9–12 (≈190), 1–4 (≈300), YKS.
  - Not: 6. sınıf İngilizce "Görünüş/Kişilik" konusunda 7. sınıf videosu (7ING1) var; içerik uygun olduğu için bırakıldı.
- [ ] D4. Konu başına 2. ve 3. video (soru çözümü, farklı anlatım, deney). Altyapı: kökte `video-ek.js` (`window.VIDEO_EK = { konuId: [[etiket, kimlik], ...] }`) ve app.js'teki video düğmeleri. Her kimlik eklenmeden önce oEmbed ile doğrulanır (başlık konuyla uyumlu, oynatılabilir, sınıf düzeyine uygun); bulunamazsa eklenmez.
  - [x] 6. sınıf Matematik ve Fen: 40 konuya 63 video (2026-11-11).
  - [x] 6. sınıf Türkçe, Sosyal, İngilizce, Din: 49 konuya 67 video (2026-11-11). Toplam 89 konu, 130 ek video.
  - [ ] 6. sınıf seçmeli dersler; sonra 5, 7–12 (app.js kopyalarına video düğmesi ve sınıf klasörüne video-ek.js).

## Çalışma günlüğü
(Her çalışmada bir satır: tarih — yapılan iş — denetim sonucu)
- 2026-11-23 — Denetim temizdi. A4 (kısmi): 6. sınıf Fen'in kavramsal sorularına yanılgı etiketleri; `ortak-uretec.js`'teki `ifadeler()`/`siniflandir()` artık etiketli öğe alıyor (5–12 kopyaları güncellendi). 97 yanlış ifade/çeldirici etiketlendi; 6. sınıf Fen'de etiketli şıklı soru oranı %13 → %45. 83 000 üretilen soruda tutarlılık denendi (hata yok); telefon boyutunda Aynalar, Yoğunluğun Önemi ve Dengelenmiş Kuvvetler sorularında Bilge'nin teşhis kutusu görüldü. Soru metinleri ve şıklar değişmediği için YKS havuzu yenilenmedi. Denetim: sorun yok.
- 2026-11-22 — Denetim temizdi. A4 (kısmi): 8–12 ortak `sayisal-uretec.js`'te (41 konu) yanlış şıklara yanılgı etiketleri (126 çeldirici); Bilge 9–12 Fizik/Kimya/Matematik ve 8 Matematik Uygulamaları'nda da "dikkat hatası" / "kavram yanılgısı" teşhisi gösteriyor. 129 000 üretilen soruda tutarlılık denendi (hata yok); telefon boyutunda 10 Elektrik, 8 Mutfak ve Alışveriş, 9 Atom sorularında teşhis kutusu görüldü. Yan düzeltmeler: gerçekte oluşmayan iyonlar (O³⁺ gibi), kırtasiye sorusunda "kazanır" ifadesi. Soru metni değiştiği için YKS havuzu yenilendi (8517 soru). Denetim: sorun yok.
- 2026-11-21 — Denetim temizdi. A4 (kısmi): 8. sınıf Matematik (12 üreticinin hepsi) ve Fen/Geometrik Cisimler (lgs-uretec.js) yanlış şıklarına yanılgı etiketleri; Bilge 8. sınıfta da "dikkat hatası" / "kavram yanılgısı" teşhisi gösteriyor. 30 000 üretilen soruda etiket tutarlılığı denendi (hata yok); telefon boyutunda iki kare farkı, küp hacmi ve katı basıncı sorularında teşhis kutusu görüldü. Yan düzeltmeler: eğim sorusunda "3/-2" gibi negatif paydalı şık, "Bazlar ekşi tatlıdır" ifadesi. Kök neden düzeltmesi: 11. sınıf Maarif düzeninden (2026-11-20) sonra YKS havuzu yenilenince 32 YKS alt konusu (AYT fizik, felsefe, coğrafya, edebiyat, tarih…) boşalıyordu; yks-havuz-uret.js artık sınıf sayfasından çıkan konuların sorularını eski havuzdan koruyor. YKS havuzu yenilendi (8525 soru). Denetim: sorun yok.
- 2026-11-20 — Denetim temizdi. A4 (kısmi): 7. sınıf Matematik (19 üreticinin hepsi) ve Fen'in sayısal/kural sorularında yanlış şıklara yanılgı etiketleri; Bilge yanlışta "dikkat hatası" ya da "kavram yanılgısı" teşhisini 7. sınıfta da gösteriyor. 14 800 üretilen soruda şık/etiket tutarlılığı denendi (hata yok); telefon boyutunda denklem ve iş sorularında teşhis kutusu görüldü. Soru metinleri ve şıklar değişmediği için YKS havuzu yenilenmedi. Sırada A4'ün 8. sınıf ayağı. Denetim: sorun yok.
- 2026-11-19 — Denetim temizdi. A4 (kısmi): hata türü teşhisi altyapısı (5–12) ve 6. sınıf Matematik/Fen üreticilerinde yanlış şıklara yanılgı etiketleri. Yanlışta Bilge "dikkat hatası" ya da "kavram yanılgısı" teşhisini gösteriyor (test, özel ders, aralıklı tekrar, Bilge'ye Sor); Veli Karnesi'nde dikkat hatası / kavram yanılgısı / bilmiyor ayrı sayılıyor ve en sık yanılgılar listeleniyor. Telefon boyutunda 6. sınıfta test, özel ders ve karne denendi; 5, 8, 12 açılıp hata yok. Soru metinleri ve şıklar değişmediği için YKS havuzu yenilenmedi. Sırada A4'ün 7–8. sınıf ayağı. Denetim: sorun yok.
- 2026-11-18 — Denetim temizdi. A3: 5–12'de ana sayfaya Bilge'nin "Bugünkü dersin" kartı ve 10 dakikalık özel ders akışı (anlatım → çözümlü örnek → kolaydan zora 5 soru, yanlışta ipucu ve benzer yeni soru → tekrar takvimi); Bilge'nin günlük planına "Bugünkü dersim" düğmesi. Telefon boyutunda 5–12'nin hepsinde denendi. Soru değişmediği için YKS havuzu yenilenmedi. Sırada A4 (hata türü teşhisi). Denetim: sorun yok.
- 2026-11-17 — A2 genişletildi (Adem'in isteği): Türkçe/Edebiyat ve Sosyal/İnkılap/Tarih/Coğrafya ön koşulları (154 konu). Metinsiz "Yukarıdaki…" soruları (3, 4) ve 5. sınıf "doğusundadir" eki düzeltildi; 5. sınıf sorusu değiştiği için YKS havuzu yenilendi. Telefon boyutunda 5→4, 7→5, 8→7, 9→5 ve 12→8 akışları denendi. Denetim: sorun yok.
- 2026-11-17 — A2 tamamlandı (Adem'in isteği): 5. sınıf Matematik ve Fen'in 4. sınıftaki ön koşulları; üretici 1–4 yapısını okuyor, 4. sınıfa temel tamamlama bağlantısı ve geri dönüş şeridi eklendi. 4. sınıf çevre sorusundaki kısa/uzun kenar hatası düzeltildi. Telefon boyutunda 5→4→5 akışı denendi. 5–12 soruları değişmediği için YKS havuzu yenilenmedi. Sırada A3 (Günün özel dersi). Denetim: sorun yok.
- 2026-11-17 — Denetim temizdi. A2 (kısmi): 9–12 Fizik, Kimya ve Biyoloji ön koşul haritası (63 konu → 5–11. sınıflardan ön koşullar; ör. 11 Tork → 8 Basit Makineler, 12 Protein Sentezi → 8 DNA). Telefon boyutunda 9, 10, 11 ve 12'de denendi; 3 soruluk temel kontrolü, 11→8 ve 10→6 temel tamamlama bağlantıları ve geri dönüş çalışıyor. Soru değişmediği için YKS havuzu yenilenmedi. Denetim: sorun yok.
- 2026-11-16 — Denetim temizdi. A2 (kısmi): 6–8 Fen ön koşul haritası (50 konu; ör. 8 Basınç → 6 Kuvvet/Yoğunluk, 8 Periyodik Sistem → 7 Atom/Saf Maddeler). Telefon boyutunda 6, 7 ve 8'de denendi; temel kontrolü, eksik haritası, 6→5 temel tamamlama bağlantısı ve geri dönüş çalışıyor. Soru değişmediği için YKS havuzu yenilenmedi. Denetim: sorun yok.
- 2026-11-15 — Denetim temizdi. A2 (kısmi): 9–12 Matematik ön koşul haritası (40 konu; ör. 11 Logaritma → 9 Üslü-Köklü, 12 Türev Uygulamaları → 11 Parabol ve Fonksiyonlar, 10 Trigonometri → 8 Pisagor ve 9 Benzerlik). Telefon boyutunda 9, 10, 11 ve 12'de denendi; 11→9 temel tamamlama bağlantısı ve geri dönüş çalışıyor. Soru değişmediği için YKS havuzu yenilenmedi. Denetim: sorun yok.
- 2026-11-14 — Denetim temizdi. A2 (kısmi): ön koşul haritası altyapısı ve 6–8 Matematik (60 konu → 5–7. sınıflardan 48 ön koşul konusu). Zorlanılan konuda Bilge'nin 3 soruluk temel kontrolü ve önceki sınıfa "temel tamamlama" bağlantısı; telefon boyutunda 6, 7, 8 ve 5'te denendi (8→6 bağlantısı ve geri dönüş çalışıyor). Soru değişmediği için YKS havuzu yenilenmedi. Denetim: sorun yok.
- 2026-11-13 — Denetim temizdi. A1 tamamlandı: 5–12'de derse ilk girişte Bilge'nin seviye tespiti ve eksik haritası (tanilama.js); Bilge'nin "Neyi bilmiyorum?" cevabı seviye tespitine yönlendiriyor. Telefon boyutunda 6, 8 ve 12'de denendi. Soru değişmediği için YKS havuzu yenilenmedi. Sırada A2 (ön koşul haritası). Denetim: sorun yok.
- 2026-11-12 — Denetim temizdi. A0 tamamlandı: Bilge'ye Sor YKS'ye eklendi (yks/yks-bilge.js; panelde kart). Eksiklerim, bugünkü plan, son yanlışın nedeni, konu araması ve çözümlü örnek; telefon boyutunda denendi. Sırada A1 (seviye tespit sınavı). Denetim: sorun yok.
- 2026-11-11 — D4: 6. sınıf Türkçe, Sosyal, İngilizce ve Din'e doğrulanmış ek videolar (toplam 89 konu, 130 video). Genel "sureler" videosu gibi konuya tam uymayanlar eklenmedi. Denetim: sorun yok.
- 2026-11-11 — D4 (Adem'in isteği): konu sayfasında çoklu video desteği; 6. sınıf Matematik ve Fen'de 40 konuya 63 doğrulanmış ek video. Denetim: sorun yok.
- 2026-11-11 — D3 (6. sınıf): 165 video tarandı; açılmayan 8 video ve konuyla uyuşmayan 3 video (Akıcı Okuma, Amaca Göre Okuma, Yazım Kuralları ve Gözden Geçirme) kaldırıldı, aynı kimlikler diğer sınıf kopyalarından da çıkarıldı. Denetim: sorun yok.
- 2026-11-11 — Adem'in bildirimi: Matematik Uygulamaları › Dört İşlem Problemleri (smu1k1) konusunda "Kesir Problemleri" videosu vardı; video kaldırıldı, konu YouTube arama bağlantısına döndü (6, 5, 7, 8, v2). D3 eklendi. Denetim: sorun yok.
- 2026-11-11 — Denetim temizdi. A0 (kısmi): Bilge'ye Sor 5, 7–12'ye eklendi; ustalık puanından eksik listesi, günlük çalışma planı ve son yanlışın açıklaması. Sırada A0'ın YKS ayağı. Denetim: sorun yok.
- 2026-11-11 — Öğretmen = uygulama içi asistan öğretmen Bilge (Adem'in açıklaması); A0 eklendi.
- 2026-11-11 — Öğretmen görünümü iş listesinden çıkarıldı (şimdilik öğretmen ayağı yok).
- 2026-11-11 — Bot kuruldu; denetim aracı, yol haritası. Denetim: sorun yok.
