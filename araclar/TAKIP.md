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
- Bilge'ye Sor (`sohbet.js`) 5–12'de var (ana kopya kökteki `sohbet.js`; değişince 5, 7–12 klasörlerine aynen kopyalanır). YKS'de henüz yok.
- [ ] **A0. Bilge her sınıfta.** Bilge'ye Sor 5, 7–12 ve YKS'ye taşınır. Bilge, öğrencinin ustalık puanlarını okuyarak "Neyi bilmiyorum?", "Bugün ne çalışayım?" ve "Bu soruyu neden yanlış yaptım?" sorularına cevap verir.
  - [x] 5, 7–12'ye taşındı; "Neyi bilmiyorum?", "Bugün ne çalışayım?", "Bu soruyu neden yanlış yaptım?" cevapları eklendi (2026-11-11).
  - [ ] YKS'ye taşınması (yks/index.html farklı yapıda; ustalık verisi ve konu yapısına uyarlanacak).
- [ ] **A1. Seviye tespit sınavı.** 5–12'de her derse ilk girişte ünite başına 2–3 soruluk kısa bir tanılama yapılır. Sonuç `kayit.ustalik` puanlarına başlangıç değeri olarak yazılır ve "eksik haritası" gösterilir.
- [ ] **A2. Ön koşul haritası.** `araclar/onkosul.json` dosyasında her konunun önceki sınıflardaki ön koşul konuları tutulur (ör. 8 mat2k1 → 7 m1k2).
  - Bir konuda ustalık puanı düşükse ön koşul konudan 3 soruluk bir kontrol yapılır.
  - Ön koşulda da sorun çıkarsa öğrenci, ilgili sınıf bölümündeki o konuya "temel tamamlama" olarak yönlendirilir.
- [ ] **A3. Günün özel dersi.** Ana sayfada "Bugünkü dersin" kartı yer alır. En zayıf konu için 10 dakikalık bir akış:
  - kısa anlatım → çözümlü örnek → kolaydan zora 5 soru;
  - yanlışta önce ipucu, sonra benzer yeni soru;
  - en sonda tekrar takvimine ekleme.
- [ ] **A4. Hata türü teşhisi.** Yanlış şıklara yanılgı etiketi eklenir (ör. "yön dikkate alınmadı", "birim çevrilmedi").
  - Karnede "bilmiyor" ile "dikkat hatası" ayrı gösterilir.
  - Önce 6–8 fen ve matematik üreticilerinden başlanır.
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
  - [ ] 6. sınıf Türkçe, Sosyal, İngilizce, Din; sonra 5, 7–12 (app.js kopyalarına video düğmesi ve sınıf klasörüne video-ek.js).

## Çalışma günlüğü
(Her çalışmada bir satır: tarih — yapılan iş — denetim sonucu)
- 2026-11-11 — D4 (Adem'in isteği): konu sayfasında çoklu video desteği; 6. sınıf Matematik ve Fen'de 40 konuya 63 doğrulanmış ek video. Denetim: sorun yok.
- 2026-11-11 — D3 (6. sınıf): 165 video tarandı; açılmayan 8 video ve konuyla uyuşmayan 3 video (Akıcı Okuma, Amaca Göre Okuma, Yazım Kuralları ve Gözden Geçirme) kaldırıldı, aynı kimlikler diğer sınıf kopyalarından da çıkarıldı. Denetim: sorun yok.
- 2026-11-11 — Adem'in bildirimi: Matematik Uygulamaları › Dört İşlem Problemleri (smu1k1) konusunda "Kesir Problemleri" videosu vardı; video kaldırıldı, konu YouTube arama bağlantısına döndü (6, 5, 7, 8, v2). D3 eklendi. Denetim: sorun yok.
- 2026-11-11 — Denetim temizdi. A0 (kısmi): Bilge'ye Sor 5, 7–12'ye eklendi; ustalık puanından eksik listesi, günlük çalışma planı ve son yanlışın açıklaması. Sırada A0'ın YKS ayağı. Denetim: sorun yok.
- 2026-11-11 — Öğretmen = uygulama içi asistan öğretmen Bilge (Adem'in açıklaması); A0 eklendi.
- 2026-11-11 — Öğretmen görünümü iş listesinden çıkarıldı (şimdilik öğretmen ayağı yok).
- 2026-11-11 — Bot kuruldu; denetim aracı, yol haritası. Denetim: sorun yok.
