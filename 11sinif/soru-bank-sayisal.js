// 11. sınıf ek soru bankası — Matematik, Fizik, Kimya, Biyoloji. Biçim: soru | DOĞRU | yanlış1 ; yanlış2 ; yanlış3 | çözüm
window.SORU_EK = Object.assign(window.SORU_EK || {}, {
mat1k1: `Birim çemberin yarıçapı kaçtır? | 1 | 0 ; 2 ; π | Merkezi orijin, yarıçapı 1 olan çemberdir.
Birim çember üzerindeki bir noktanın apsisi hangi trigonometrik değeri verir? | cos θ | sin θ ; tan θ ; cot θ | Nokta (cos θ, sin θ) biçimindedir.
sin² x + cos² x ifadesinin değeri kaçtır? | 1 | 0 ; 2 ; sin 2x | Temel trigonometrik özdeşlik.
180° kaç radyandır? | π | 2π ; π/2 ; 1 | π radyan = 180°.
π/6 radyan kaç derecedir? | 30° | 60° ; 45° ; 90° | 180/6 = 30.
tan 45° değeri kaçtır? | 1 | 0 ; √3 ; 1/2 | sin 45° = cos 45°.
sin 30° değeri kaçtır? | 1/2 | √3/2 ; 1 ; √2/2 | Temel açılardır.
II. bölgede hangi trigonometrik oran pozitiftir? | sin | cos ; tan ; cot | II. bölgede yalnızca sinüs pozitiftir.
cos 120° değeri kaçtır? | −1/2 | 1/2 ; √3/2 ; −√3/2 | cos(180−60) = −cos 60.
Esas ölçüsü bulunurken 750° kaç dereceye eşdeğerdir? | 30° | 50° ; 750° ; 390° | 750 − 2·360 = 30.`,

mat1k2: `Kosinüs teoremine göre c² ifadesi nedir? | a² + b² − 2ab·cos C | a² + b² ; a² − b² ; 2ab·sin C | Genelleştirilmiş Pisagor.
Sinüs teoremine göre a/sin A = b/sin B = ? | 2R | R ; R² ; a + b | R çevrel çember yarıçapı.
a = 7, b = 5, C = 60° ise c² kaçtır? | 39 | 74 ; 109 ; 35 | 49 + 25 − 2·7·5·½ = 74 − 35 = 39.
Bir üçgende A = 45°, B = 30°, a = 4√2 ise b kaçtır? | 4 | 8 ; 2 ; 4√2 | a/sinA = 4√2/(√2/2) = 8 → b = 8·½ = 4.
İki kenarı 10 ve 12, aralarındaki açı 150° olan üçgenin alanı kaçtır? | 30 | 60 ; 120 ; 15 | ½·10·12·sin150° = 60·½ = 30.
Kenarları 5, 6, 7 olan üçgende en büyük açının karşısındaki kenar hangisidir? | 7 | 5 ; 6 ; Belirlenemez | Büyük kenar karşısında büyük açı.
cos A negatifse A açısı nasıldır? | Geniş açı | Dar açı ; Dik açı ; Sıfır | cos 90°–180° arası negatiftir.
Bir üçgende sin A = 3/5 ve A dar açı ise cos A kaçtır? | 4/5 | 3/4 ; 5/3 ; 1/5 | sin² + cos² = 1.
Kenarları 3, 5, 7 olan üçgenin 7'nin karşısındaki açısı kaç derecedir? | 120° | 90° ; 60° ; 150° | 49 = 9 + 25 − 30·cos → cos = −½.
Alanı ½·a·b·sin C formülüyle bulunan üçgende C = 90° ise alan formülü neye dönüşür? | ½·a·b | a·b ; ½·a·c ; a² + b² | sin 90° = 1.`,

mat4k1: `Çemberde merkez açının ölçüsü gördüğü yayın ölçüsüne nasıldır? | Eşittir | Yarısıdır ; İki katıdır ; Üç katıdır | Merkez açı = yay.
Çevre açının ölçüsü gördüğü yayın ölçüsünün kaçta kaçıdır? | Yarısı | Tamamı ; İki katı ; Dörtte biri | Çevre açı = yay/2.
Çapı gören çevre açı kaç derecedir? | 90° | 180° ; 45° ; 60° | Yarım çember 180°, çevre açı 90°.
Yarıçapı 5 cm olan çemberin çevresi kaç cm'dir? (π = 3) | 30 | 15 ; 75 ; 25 | 2πr = 2·3·5.
Yarıçapı 4 cm olan dairenin alanı kaç cm²'dir? (π = 3) | 48 | 24 ; 12 ; 16 | πr² = 3·16.
Merkez açısı 60° olan daire diliminin alanı tüm dairenin kaçta kaçıdır? | 1/6 | 1/3 ; 1/4 ; 1/2 | 60/360.
Çembere dışındaki bir noktadan çizilen iki teğet parçasının uzunlukları nasıldır? | Eşittir | Biri diğerinin iki katıdır ; Farklıdır ; Biri sıfırdır | Teğet uzunlukları eşittir.
Teğet ile değme noktasından çizilen yarıçap arasındaki açı kaç derecedir? | 90° | 45° ; 180° ; 60° | Teğet yarıçapa diktir.
Yarıçapı 6 cm, merkez açısı 90° olan yayın uzunluğu kaç cm'dir? (π = 3) | 9 | 18 ; 36 ; 6 | 2πr·(90/360) = 36·¼.
Kirişler dörtgeninde karşılıklı açıların toplamı kaç derecedir? | 180° | 360° ; 90° ; 270° | Çembere içten çizilen dörtgen.`,

fiz1k1: `Vektörel büyüklüklerin özelliği nedir? | Büyüklüğü ve yönü vardır | Sadece büyüklüğü vardır ; Sadece yönü vardır ; Birimi yoktur | Hız, kuvvet, ivme vektöreldir.
Aynı yönlü 3 N ve 4 N'luk iki kuvvetin bileşkesi kaç N'dur? | 7 | 1 ; 5 ; 12 | Aynı yönlü vektörler toplanır.
Zıt yönlü 3 N ve 4 N'luk iki kuvvetin bileşkesi kaç N'dur? | 1 | 7 ; 5 ; 0 | Büyükten küçük çıkarılır.
Aralarındaki açı 90° olan 6 N ve 8 N'luk kuvvetlerin bileşkesi kaç N'dur? | 10 | 14 ; 2 ; 48 | √(36 + 64).
Bağıl hız nedir? | Bir cismin başka bir gözlemciye göre hızı | Cismin yere göre hızı ; Işık hızı ; Ortalama hız | V_bağıl = V_cisim − V_gözlemci.
Aynı yönde 60 km/h ve 80 km/h hızla giden araçlardan yavaş olanın hızlıya göre bağıl hızı kaçtır? | 20 km/h geriye doğru | 140 km/h ; 20 km/h ileriye ; 0 | 60 − 80 = −20.
Zıt yönde 50 km/h ve 70 km/h hızla birbirine yaklaşan araçların bağıl hızlarının büyüklüğü kaçtır? | 120 km/h | 20 km/h ; 50 km/h ; 70 km/h | Zıt yönde hızlar toplanır.
Akıntı hızı 2 m/s olan nehirde suya göre 5 m/s hızla akıntı yönünde yüzen bir yüzücünün yere göre hızı kaçtır? | 7 m/s | 3 m/s ; 5 m/s ; 10 m/s | Aynı yönde hızlar toplanır.
Bir vektörün bileşenlerine ayrılması neye yarar? | Farklı eksenlerdeki etkilerini ayrı ayrı inceleyebilmeye | Vektörü yok etmeye ; Büyüklüğünü artırmaya ; Yönünü kaybetmeye | Fx = F cos θ, Fy = F sin θ.
Hangisi skaler bir büyüklüktür? | Sürat | Hız ; Yer değiştirme ; İvme | Süratin yönü yoktur.`,

fiz1k2: `Kütlesi 4 kg olan cisme 20 N net kuvvet etki ediyor. İvmesi kaçtır? | 5 m/s² | 80 m/s² ; 0,2 m/s² ; 24 m/s² | a = F/m.
Sürtünmesiz yatay düzlemde 10 N kuvvetle çekilen 2 kg'lık cisim 3 saniyede (durgundan) kaç m/s hıza ulaşır? | 15 | 5 ; 30 ; 6 | a = 5; v = a·t = 15.
Sürtünme katsayısı 0,2 olan yüzeyde 5 kg'lık cisme etki eden sürtünme kuvveti kaç N'dur? (g = 10) | 10 | 50 ; 1 ; 25 | Fs = k·m·g = 0,2·50.
Asansör yukarı doğru hızlanırken içindeki kişinin baskül değeri nasıl görünür? | Gerçek ağırlıktan fazla | Gerçek ağırlıktan az ; Sıfır ; Değişmez | N = m(g + a).
Serbest düşen asansördeki kişinin baskül değeri nedir? | Sıfır | Ağırlığının iki katı ; Ağırlığı kadar ; Yarısı | Ağırlıksızlık hissedilir.
Eğik düzlemde sürtünmesiz kayan cismin ivmesi neye bağlıdır? | Eğim açısına (g·sin θ) | Kütlesine ; Rengine ; Hacmine | a = g·sinθ.
İki cisim iple bağlı ve birlikte hareket ediyorsa sistemin ivmesi nasıl bulunur? | Net kuvvet / toplam kütle | Kuvvetlerin çarpımı ; Kütlelerin farkı ; İp gerilmesi / tek kütle | Sistem bir bütün gibi düşünülür.
Net kuvvet hareket yönündeyse cisim nasıl hareket eder? | Hızlanır | Yavaşlar ; Durur ; Sabit hızla gider | İvme hız yönündedir.
Kütlesi 1000 kg olan araba 2 m/s² ivmeyle hızlanıyor. Net kuvvet kaç N'dur? | 2000 | 500 ; 1002 ; 200 | F = m·a.
Newton'un 3. yasasına göre masadaki kitabın ağırlığının tepkisi nedir? | Kitabın Dünya'yı çekmesi | Masanın kitabı itmesi ; Kitabın masayı itmesi ; Havanın kitabı itmesi | Ağırlık Dünya'nın kitabı çekmesidir; tepkisi kitabın Dünya'yı çekmesidir.`,

fiz2k1: `Yatay atışta cismin yatay hızı için ne söylenir? | Sabittir | Sürekli artar ; Sürekli azalır ; Sıfırdır | Yatayda kuvvet yoktur (hava direnci ihmal).
Yatay atışta düşey hareket nasıldır? | Serbest düşme | Sabit hızlı ; Yukarı doğru ; Hareket yoktur | Düşeyde ivme g'dir.
80 m yükseklikten yatay atılan cisim kaç saniyede yere düşer? (g = 10) | 4 | 8 ; 2 ; 16 | h = ½gt² → 80 = 5t².
Aynı yükseklikten biri serbest bırakılan, diğeri yatay atılan iki cisimden hangisi önce yere düşer? | Aynı anda düşerler | Serbest bırakılan ; Yatay atılan ; Ağır olan | Düşey hareketler aynıdır.
Eğik atışta en uzun menzil hangi açıyla elde edilir? | 45° | 30° ; 60° ; 90° | Sürtünmesiz ortamda.
Eğik atışta tepe noktasında cismin düşey hızı nedir? | Sıfır | En büyüktür ; g kadardır ; İlk hızına eşittir | Tepe noktasında sadece yatay hız vardır.
Düşey yukarı 30 m/s hızla atılan cisim kaç saniyede tepe noktasına ulaşır? (g = 10) | 3 | 6 ; 30 ; 1,5 | t = v/g.
Aynı cisim en fazla kaç m yükselir? | 45 | 90 ; 30 ; 15 | h = v²/2g = 900/20.
Yatay atışta cismin yörüngesi nasıldır? | Parabol | Doğru ; Çember ; Elips | Yatay sabit, düşey ivmeli hareket parabol oluşturur.
Hava direnci ihmal edildiğinde atışlarda cismin ivmesi nedir? | g, aşağı doğru | Sıfır ; Yatay yönde ; Değişken | Tek kuvvet yer çekimidir.`,

fiz2k2: `Momentumun formülü nedir? | p = m·v | p = m·a ; p = F·t ; p = ½mv² | Momentum vektöreldir.
İtmenin (impuls) formülü nedir? | I = F·Δt | I = m·a ; I = F/Δt ; I = m·g | İtme momentum değişimine eşittir.
2 kg kütleli cisim 5 m/s hızla gidiyorsa momentumu kaç kg·m/s'dir? | 10 | 2,5 ; 25 ; 7 | p = 2·5.
Dış kuvvet yoksa sistemin toplam momentumu için ne söylenir? | Korunur | Artar ; Azalır ; Sıfır olur | Momentumun korunumu ilkesi.
Hava yastıkları çarpışmada neden kullanılır? | Çarpışma süresini artırıp kuvveti azaltmak için | Momentumu artırmak için ; Hızı artırmak için ; Süreyi kısaltmak için | F = Δp/Δt.
Esnek çarpışmada hangisi korunur? | Hem momentum hem kinetik enerji | Sadece kinetik enerji ; Hiçbiri ; Sadece kütle | Tamamen esnek çarpışma.
Tamamen esnek olmayan çarpışmada cisimler ne yapar? | Kenetlenip birlikte hareket eder | Birbirinden sekerek uzaklaşır ; Yok olur ; Durur | Kinetik enerji korunmaz.
Silah ateşlendiğinde geri tepmesi hangi ilkeyle açıklanır? | Momentumun korunumu | Enerjinin yok olması ; Eylemsizlik ; Arşimet ilkesi | Mermi ileri, silah geri gider.
10 N'luk kuvvet 0,5 saniye etki ederse itme kaç N·s'dir? | 5 | 20 ; 10,5 ; 0,05 | I = F·t.
Sürtünmesiz ortamda yaya bağlı cismin mekanik enerjisi için ne söylenir? | Korunur | Sürekli azalır ; Sürekli artar ; Sıfırdır | Yay potansiyel enerjisi ↔ kinetik enerji.`,

fiz3k1: `Torkun formülü nedir? | τ = F·d (kuvvet × dik uzaklık) | τ = F/d ; τ = m·a ; τ = F + d | Döndürme etkisidir.
Kapı kolunun menteşeden uzağa konmasının nedeni nedir? | Daha az kuvvetle daha büyük tork elde etmek | Kapıyı ağırlaştırmak ; Torku azaltmak ; Estetik | Kuvvet kolu uzar.
Bir cismin dengede olması için hangi koşullar gerekir? | Net kuvvet ve net tork sıfır olmalı | Sadece net kuvvet sıfır olmalı ; Sadece tork sıfır olmalı ; Hiçbir koşul gerekmez | Öteleme ve dönme dengesi.
Tahterevallide 30 kg'lık çocuk destekten 2 m uzakta oturuyor. Dengede kalmak için 20 kg'lık çocuk destekten kaç m uzakta oturmalıdır? | 3 | 2 ; 1,5 ; 4 | 30·2 = 20·d → d = 3.
Kütle merkezi nedir? | Cismin tüm kütlesinin toplandığı kabul edilen nokta | Cismin en ağır noktası ; Cismin yüzeyi ; Cismin dışındaki nokta | Simetrik cisimlerde geometrik merkezdedir.
Ağırlık merkezi düşük olan cisimler için ne söylenir? | Daha kararlıdır, zor devrilir | Daha kolay devrilir ; Dengede duramaz ; Hareket edemez | Yarış arabaları alçak yapılır.
Torkun SI birimi nedir? | N·m | Joule ; Watt ; N/m | Newton-metre.
Kuvvet dönme eksenine doğru uygulanırsa tork ne olur? | Sıfır | En büyük ; F·d ; Negatif | Kuvvet kolu sıfırdır.
Saat yönünde ve tersi yönde torkların eşit olması neyi sağlar? | Dönme dengesini | Hızlanmayı ; Öteleme hareketini ; Isınmayı | Net tork sıfırdır.
Bir anahtarla somun açarken kolu uzatmak neyi değiştirir? | Gerekli kuvveti azaltır | Somunu sıkıştırır ; Torku azaltır ; Kuvveti artırır | Aynı tork için daha az kuvvet gerekir.`,

fiz3k2: `Elektrik yükleri arasındaki kuvveti açıklayan yasa hangisidir? | Coulomb yasası | Ohm yasası ; Newton'un 2. yasası ; Faraday yasası | F = k·q₁·q₂/d².
İki yük arasındaki uzaklık iki katına çıkarsa elektriksel kuvvet nasıl değişir? | Dörtte birine iner | Yarıya iner ; İki katına çıkar ; Değişmez | Kuvvet uzaklığın karesiyle ters orantılıdır.
Elektrik alan çizgileri pozitif yükte nasıl yönelir? | Yükten dışarı doğru | Yüke doğru ; Dairesel ; Yoktur | Negatif yükte içe doğrudur.
Akım geçen düz telin etrafında ne oluşur? | Manyetik alan | Ses dalgası ; Işık ; Basınç | Oersted deneyi.
Bir bobinden geçen akım artırılırsa manyetik alan nasıl değişir? | Artar | Azalır ; Değişmez ; Yok olur | B ∝ I.
Manyetik alanda hareket eden yüklü parçacığa etki eden kuvvete ne denir? | Lorentz (manyetik) kuvveti | Coulomb kuvveti ; Sürtünme ; Yer çekimi | F = q·v·B.
Elektrik motorlarında hangi enerji dönüşümü olur? | Elektrik → mekanik (hareket) | Mekanik → elektrik ; Isı → ışık ; Kimyasal → ses | Akım geçen bobin manyetik alanda döner.
Jeneratörlerde hangi enerji dönüşümü olur? | Mekanik → elektrik | Elektrik → mekanik ; Işık → elektrik ; Ses → ısı | İndüksiyon ilkesiyle çalışır.
Manyetik akıdaki değişimin akım oluşturmasına ne denir? | Elektromanyetik indüksiyon | Elektroliz ; Fotoelektrik ; Rezonans | Faraday tarafından keşfedildi.
Kondansatörün görevi nedir? | Elektrik yükü ve enerjisi depolamak | Akımı sınırsız artırmak ; Isı üretmek ; Işık yaymak | Sığası farad ile ölçülür.`,

kim1k1: `Bir orbitalde en fazla kaç elektron bulunabilir? | 2 | 1 ; 6 ; 8 | Pauli ilkesi: zıt spinli iki elektron.
p alt kabuğunda en fazla kaç elektron bulunur? | 6 | 2 ; 10 ; 14 | 3 orbital × 2 elektron.
d alt kabuğunda kaç orbital vardır? | 5 | 3 ; 1 ; 7 | 5 orbital, 10 elektron.
Elektronların orbitallere düşük enerjiden yükseğe doğru yerleşmesine ne denir? | Aufbau ilkesi | Hund kuralı ; Pauli ilkesi ; Heisenberg ilkesi | Yapılanma ilkesi.
Eş enerjili orbitallere elektronların önce birer birer, aynı spinle yerleşmesine ne denir? | Hund kuralı | Aufbau ; Pauli ; Bohr | Maksimum eşleşmemiş elektron.
11Na atomunun elektron dizilimi hangisidir? | 1s² 2s² 2p⁶ 3s¹ | 1s² 2s² 2p⁷ ; 1s² 2s² 3s² 2p⁵ ; 1s² 2p⁹ | Son elektron 3s'tedir.
4s ve 3d orbitallerinden hangisi önce dolar? | 4s | 3d ; Aynı anda ; Hiçbiri | 4s enerjisi daha düşüktür.
Kuantum sayılarından baş kuantum sayısı (n) neyi belirtir? | Enerji düzeyini (katmanı) | Orbitalin şeklini ; Spin yönünü ; Orbitalin yönelimini | n = 1, 2, 3...
s orbitalinin şekli nasıldır? | Küresel | Halter ; Yonca ; Düz çizgi | p orbitalleri halter şeklindedir.
26Fe atomunun elektron diziliminin son kısmı hangisidir? | 4s² 3d⁶ | 4s² 3d⁸ ; 3d⁸ ; 4s¹ 3d⁷ | [Ar] 4s² 3d⁶.`,

kim2k1: `İdeal gaz denkleminde R'nin değeri (L·atm/mol·K) yaklaşık kaçtır? | 0,082 | 22,4 ; 8,31 ; 1 | 22,4/273.
Normal koşullarda (NK) sıcaklık ve basınç nedir? | 0 °C ve 1 atm | 25 °C ve 1 atm ; 100 °C ve 2 atm ; 0 K ve 0 atm | NK'da 1 mol gaz 22,4 L'dir.
2 mol ideal gaz NK'da kaç litre hacim kaplar? | 44,8 | 22,4 ; 11,2 ; 2 | 2 × 22,4.
Sabit hacimli kapta sıcaklık 300 K'den 600 K'e çıkarsa basınç nasıl değişir? | İki katına çıkar | Yarıya iner ; Değişmez ; Dört katına çıkar | P/T sabit.
Gaz karışımlarında her gazın kendi basıncına ne denir? | Kısmi basınç | Toplam basınç ; Buhar basıncı ; Açık hava basıncı | Dalton kısmi basınçlar yasası.
Dalton yasasına göre toplam basınç nedir? | Kısmi basınçların toplamı | Kısmi basınçların çarpımı ; En büyük kısmi basınç ; Ortalama basınç | P_toplam = P₁ + P₂ + ...
Aynı sıcaklıkta H₂ ve O₂ gazlarından hangisinin difüzyon hızı daha büyüktür? | H₂ | O₂ ; Eşittir ; Hesaplanamaz | Hafif gaz daha hızlı yayılır.
Kinetik teoriye göre gaz taneciklerinin ortalama kinetik enerjisi neye bağlıdır? | Sadece mutlak sıcaklığa | Gazın cinsine ; Basınca ; Hacme | Aynı sıcaklıkta tüm gazların ortalama Ek'si eşittir.
Gerçek gazlar ideal davranıştan en çok hangi koşulda sapar? | Düşük sıcaklık ve yüksek basınç | Yüksek sıcaklık ve düşük basınç ; Normal koşullar ; Boşlukta | Tanecikler arası etkileşim artar.
PV = nRT denkleminde n neyi ifade eder? | Mol sayısını | Basıncı ; Hacmi ; Sıcaklığı | n = kütle / mol kütlesi.`,

kim3k1: `Molalite (m) nasıl tanımlanır? | 1 kg çözücüdeki çözünenin mol sayısı | 1 L çözeltideki mol sayısı ; Çözünenin kütle yüzdesi ; Toplam mol | m = n/kg çözücü.
0,5 L çözeltide 0,2 mol madde varsa molarite kaçtır? | 0,4 M | 0,1 M ; 2,5 M ; 0,7 M | M = 0,2/0,5.
ppm (milyonda bir kısım) genellikle hangi derişimler için kullanılır? | Çok seyreltik çözeltiler | Çok derişik çözeltiler ; Saf maddeler ; Gaz basınçları | Su kirliliği ölçümlerinde kullanılır.
Katıların sudaki çözünürlüğü genellikle sıcaklık artınca nasıl değişir? | Artar | Azalır ; Değişmez ; Sıfır olur | Çoğu katı için geçerlidir.
Gazların sudaki çözünürlüğü sıcaklık artınca nasıl değişir? | Azalır | Artar ; Değişmez ; İki katına çıkar | Sıcak sudaki balıkların oksijen sıkıntısı yaşaması bundandır.
Gazların çözünürlüğü basınç artınca nasıl değişir? | Artar | Azalır ; Değişmez ; Sıfırlanır | Gazlı içecekler basınçla doldurulur.
Benzer benzeri çözer ilkesine göre polar bir madde hangisinde iyi çözünür? | Su (polar çözücü) | Benzin (apolar) ; Yağ ; Karbon tetraklorür | Polar–polar uyumu.
Çözeltinin kaynama noktası saf çözücüye göre nasıldır? | Daha yüksektir | Daha düşüktür ; Aynıdır ; Belirsizdir | Kaynama noktası yükselmesi (koligatif özellik).
Koligatif özellikler neye bağlıdır? | Çözünen tanecik sayısına | Çözünenin cinsine ; Çözeltinin rengine ; Kabın şekline | Donma noktası alçalması, kaynama noktası yükselmesi.
Doymamış çözelti ne demektir? | Daha fazla madde çözebilecek çözelti | Hiç madde çözemeyen çözelti ; Çökeltili çözelti ; Saf çözücü | Çözünürlük sınırına ulaşmamıştır.`,

kim4k1: `Isı alan tepkimelere ne denir? | Endotermik | Ekzotermik ; Nötr ; Katalitik | ΔH > 0.
Isı veren tepkimelere ne denir? | Ekzotermik | Endotermik ; İzotermik ; Adyabatik | ΔH < 0; yanma tepkimeleri.
Tepkime hızını artıran ama tepkimeden değişmeden çıkan maddeye ne denir? | Katalizör | İnhibitör ; Ürün ; Girdi | Aktivasyon enerjisini düşürür.
Sıcaklık artışının tepkime hızına etkisi nedir? | Hızı artırır | Hızı azaltır ; Etkilemez ; Tepkimeyi durdurur | Etkin çarpışma sayısı artar.
Derişim artışının tepkime hızına etkisi nedir? | Hızı artırır | Hızı azaltır ; Etkilemez ; Ürünü azaltır | Çarpışma sayısı artar.
Katıların toz hâline getirilmesi tepkime hızını nasıl etkiler? | Artırır | Azaltır ; Etkilemez ; Durdurur | Temas yüzeyi artar.
Aktivasyon enerjisi nedir? | Tepkimenin başlaması için gereken en az enerji | Tepkimede açığa çıkan enerji ; Ürünlerin enerjisi ; Katalizörün enerjisi | Ea düştükçe hız artar.
Hess yasası neyi ifade eder? | Tepkime ısısının izlenen yoldan bağımsız olduğunu | Hızın sıcaklıkla arttığını ; Kütlenin korunduğunu ; Gaz hacmini | Tepkime ısıları toplanabilir.
Bir tepkime ters çevrilirse ΔH'nin işareti ne olur? | Değişir | Aynı kalır ; Sıfır olur ; İki katına çıkar | Endotermik ekzotermik olur.
Yiyecekleri buzdolabında saklamak neden bozulmayı geciktirir? | Düşük sıcaklık tepkime hızını azaltır | Katalizör etkisi yapar ; Derişimi artırır ; Aktivasyon enerjisini düşürür | Kimyasal ve biyolojik tepkimeler yavaşlar.`,

kim4k2: `Kimyasal denge ne zaman kurulur? | İleri ve geri tepkime hızları eşit olduğunda | Tepkime tamamen bittiğinde ; Hiç ürün oluşmadığında ; Sıcaklık sıfır olduğunda | Dinamik bir dengedir.
Dengedeki bir sisteme dışarıdan etki yapılırsa sistem ne yapar? | Etkiyi azaltacak yönde kayar (Le Chatelier) | Hiç tepki vermez ; Etkiyi artırır ; Tepkime durur | Le Chatelier ilkesi.
Dengedeki sisteme ürün eklenirse denge hangi yöne kayar? | Girenler (geri) yönüne | Ürünler (ileri) yönüne ; Kaymaz ; Rastgele | Eklenen madde harcanmaya çalışılır.
Ekzotermik bir tepkimede sıcaklık artırılırsa denge nasıl kayar? | Girenler yönüne | Ürünler yönüne ; Kaymaz ; İki yöne birden | Isı ürün gibi düşünülür.
Gaz fazındaki dengede basınç artırılırsa denge hangi yöne kayar? | Mol sayısının az olduğu yöne | Mol sayısının çok olduğu yöne ; Kaymaz ; Sıcaklık yönüne | Hacim azalınca daha az tanecik tercih edilir.
Katalizörün dengeye etkisi nedir? | Dengeye daha hızlı ulaşılmasını sağlar, dengeyi kaydırmaz | Dengeyi ürünler yönüne kaydırır ; Denge sabitini değiştirir ; Tepkimeyi durdurur | Her iki yöndeki hızı eşit artırır.
Denge sabiti (Kc) hangi faktörle değişir? | Sadece sıcaklık | Derişim ; Basınç ; Katalizör | Kc sıcaklığa bağlıdır.
Kc değeri çok büyükse ne anlaşılır? | Denge ürünler lehinedir | Denge girenler lehinedir ; Tepkime hiç olmaz ; Tepkime çok yavaştır | Ürün derişimi fazladır.
N₂ + 3H₂ ⇌ 2NH₃ tepkimesinde basınç artarsa denge nasıl kayar? | NH₃ (ürün) yönüne | N₂ ve H₂ yönüne ; Kaymaz ; Rastgele | Sağda 2 mol, solda 4 mol gaz vardır.
Kc ifadesine hangi maddeler yazılmaz? | Saf katılar ve saf sıvılar | Gazlar ; Sulu çözeltideki iyonlar ; Ürünler | Derişimleri sabit kabul edilir.`,

bio1k1: `Sinir sisteminin yapı ve görev birimi nedir? | Nöron | Nefron ; Alveol ; Kas lifi | Nöronlar uyarıları iletir.
Nöronun uyarıyı hücre gövdesinden uzaklaştıran uzantısı hangisidir? | Akson | Dendrit ; Miyelin ; Sinaps | Dendrit uyarıyı gövdeye getirir.
İki nöron arasındaki bağlantı noktasına ne denir? | Sinaps | Akson ; Gangliyon ; Ranvier boğumu | Nörotransmitterlerle iletim olur.
Refleks merkezi neresidir? | Omurilik | Beyin kabuğu ; Beyincik ; Hipofiz | Refleksler istemsiz ve hızlıdır.
Vücudun dengesini sağlayan beyin bölümü hangisidir? | Beyincik | Omurilik soğanı ; Hipotalamus ; Uç beyin | Hareketlerin koordinasyonunu sağlar.
Kalp atışı ve solunum gibi hayati olayları kontrol eden bölüm hangisidir? | Omurilik soğanı | Beyincik ; Uç beyin ; Talamus | Soğanilik.
Kan şekerini düşüren hormon hangisidir? | İnsülin | Glukagon ; Adrenalin ; Tiroksin | Pankreastan salgılanır.
Kan şekerini yükselten hormon hangisidir? | Glukagon | İnsülin ; Kalsitonin ; Oksitosin | Pankreasın alfa hücrelerinden salgılanır.
Tehlike anında salgılanan, kalp atışını hızlandıran hormon hangisidir? | Adrenalin | İnsülin ; Melatonin ; Tiroksin | Böbrek üstü bezinden salgılanır.
"Ana bez" olarak bilinen ve diğer bezleri kontrol eden bez hangisidir? | Hipofiz | Tiroit ; Pankreas ; Böbrek üstü | Büyüme hormonunu da salgılar.`,

bio2k1: `İskelet kasları nasıl çalışır? | İstemli | İstemsiz ; Sadece uykuda ; Kendiliğinden | İsteğimizle kasılırlar.
Kalp kası hangi özelliktedir? | Çizgili ve istemsiz | Düz ve istemli ; Çizgili ve istemli ; Sadece istemli | Kalp kası ömür boyu çalışır.
Düz kaslar nerede bulunur? | İç organların duvarında (mide, bağırsak) | Kollarda ; Bacaklarda ; Yüzde | İstemsiz çalışır.
Kemiklerde kan hücrelerinin üretildiği yer neresidir? | Kırmızı kemik iliği | Sarı kemik iliği ; Kıkırdak ; Periost | Alyuvar, akyuvar ve trombosit üretilir.
Kemik büyümesinin gerçekleştiği bölge neresidir? | Büyüme kıkırdağı (epifiz plağı) | Kemik iliği ; Periost ; Eklem sıvısı | Kemik boyca uzar.
Kasın kemiğe bağlanmasını sağlayan yapı hangisidir? | Tendon (kiriş) | Ligament ; Kıkırdak ; Sinir | Ligament kemiği kemiğe bağlar.
Karbonhidrat sindirimi nerede başlar? | Ağızda | Midede ; İnce bağırsakta ; Kalın bağırsakta | Tükürükteki amilaz enzimi.
Protein sindirimi nerede başlar? | Midede | Ağızda ; Kalın bağırsakta ; Yemek borusunda | Pepsin enzimiyle.
Besinlerin emiliminin büyük bölümü nerede gerçekleşir? | İnce bağırsak | Mide ; Kalın bağırsak ; Ağız | Villuslar yüzey alanını artırır.
Safra nerede üretilir? | Karaciğer | Safra kesesi ; Pankreas ; Mide | Safra kesesinde depolanır, yağları emülsiyon hâline getirir.`,

bio3k1: `Kanı tüm vücuda pompalayan kalp odacığı hangisidir? | Sol karıncık | Sağ karıncık ; Sol kulakçık ; Sağ kulakçık | Büyük dolaşım sol karıncıktan başlar.
Kanı akciğerlere gönderen kalp odacığı hangisidir? | Sağ karıncık | Sol karıncık ; Sol kulakçık ; Sağ kulakçık | Küçük dolaşım sağ karıncıktan başlar.
Oksijen taşıyan kan hücresi hangisidir? | Alyuvar (eritrosit) | Akyuvar ; Trombosit ; Plazma | Hemoglobin oksijeni bağlar.
Kanın pıhtılaşmasını sağlayan yapı hangisidir? | Trombosit (kan pulcuğu) | Alyuvar ; Akyuvar ; Plazma | Yara yerinde pıhtı oluşturur.
Akciğerlerde gaz alışverişinin yapıldığı yapılar hangileridir? | Alveoller | Bronşlar ; Gırtlak ; Soluk borusu | Alveollerin etrafı kılcal damarlarla sarılıdır.
Böbreğin yapı ve görev birimi nedir? | Nefron | Nöron ; Alveol ; Villus | Kan süzülerek idrar oluşur.
Kalpten çıkan ve kanı vücuda dağıtan en büyük atardamar hangisidir? | Aort | Akciğer atardamarı ; Toplardamar ; Kılcal damar | Sol karıncıktan çıkar.
Toplardamarlar kanı nereye taşır? | Kalbe | Kalpten vücuda ; Sadece akciğerlere ; Sadece böbreklere | Toplardamarlarda kapakçıklar bulunur.
İdrarın oluşumu sırasında süzülme nerede gerçekleşir? | Bowman kapsülü (glomerulus) | Toplama kanalı ; Mesane ; Üreter | Kan basıncıyla süzülür.
Soluk alırken diyafram nasıl hareket eder? | Kasılır ve düzleşir | Gevşer ve yükselir ; Hareket etmez ; Kalbe doğru kayar | Göğüs boşluğu genişler.`,

bio4k1: `İki türün de yarar gördüğü ilişkiye ne denir? | Mutualizm | Parazitlik ; Kommensalizm ; Avcılık | Örnek: liken (alg + mantar).
Bir türün yararlanıp diğerinin etkilenmediği ilişkiye ne denir? | Kommensalizm | Mutualizm ; Parazitlik ; Rekabet | Örnek: köpek balığı ve vantuz balığı.
Bir türün diğerine zarar vererek yaşadığı ilişkiye ne denir? | Parazitlik | Mutualizm ; Kommensalizm ; Rekabet | Örnek: tenya ve insan.
Aynı kaynağı kullanan türler arasındaki ilişkiye ne denir? | Rekabet | Mutualizm ; Kommensalizm ; Parazitlik | Rekabet popülasyonları sınırlar.
Popülasyonun büyüklüğünü sınırlayan faktörlere ne denir? | Çevre direnci | Biyotik potansiyel ; Taşıma kapasitesi aşımı ; Göç | Besin, yer, hastalık gibi.
Popülasyon yoğunluğu nedir? | Birim alandaki birey sayısı | Toplam birey sayısı ; Doğum oranı ; Ölüm oranı | Yoğunluk = birey / alan.
Bir popülasyonun ideal koşullarda üreme kapasitesine ne denir? | Biyotik potansiyel | Çevre direnci ; Taşıma kapasitesi ; Göç | Sınırsız ortamda üstel büyüme.
Avcı-av ilişkisinde av popülasyonu artarsa ne olur? | Avcı popülasyonu da artar | Avcı popülasyonu azalır ; Değişmez ; Avcılar göç eder | Besin artınca avcılar çoğalır.
Ekolojik niş nedir? | Bir türün ekosistemdeki rolü ve yaşam biçimi | Türün yaşadığı yer ; Türün sayısı ; Türün rengi | Habitat adres, niş meslektir.
Göç alan bir popülasyonun büyüklüğü nasıl değişir? | Artar | Azalır ; Değişmez ; Sıfırlanır | Göçle gelen bireyler popülasyonu artırır.`
});
