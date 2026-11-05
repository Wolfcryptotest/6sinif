// 7. sınıf ek soru bankası. Biçim: soru | DOĞRU | yanlış1 ; yanlış2 ; yanlış3 | çözüm
(function () {
const E = window.SORU_EK = window.SORU_EK || {};
const ek = (id, m) => { E[id] = (E[id] ? E[id] + "\n" : "") + m; };
ek("f4k1", `Işığın bir ortamdan diğerine geçerken doğrultusunun değişmesine ne denir? | Kırılma | Yansıma ; Soğurulma ; Gölge | Işık farklı ortamlarda farklı hızda yayılır.
Suya batırılmış kalemin kırık görünmesinin nedeni nedir? | Işığın kırılması | Işığın yansıması ; Kalemin bükülmesi ; Suyun rengi | Işık sudan havaya geçerken kırılır.
Işık havadan suya geçerken hızı nasıl değişir? | Azalır | Artar ; Değişmez ; Durur | Su daha yoğun bir ortamdır.
Havuzun derinliğinin olduğundan az görünmesinin nedeni nedir? | Işığın kırılması | Işığın yansıması ; Suyun soğuk olması ; Havuzun mavi olması | Gözümüz ışığı kırılmış hâliyle algılar.
Işık az yoğun ortamdan çok yoğun ortama geçerken normale nasıl yaklaşır? | Normale yaklaşarak kırılır | Normalden uzaklaşır ; Kırılmaz ; Geri döner | Hız azaldığı için normale yaklaşır.
Işık dik gelirse ne olur? | Kırılmadan doğrultusunu korur | Çok kırılır ; Geri yansır ; Söner | Normal doğrultusunda gelen ışın kırılmaz.
Gökkuşağının oluşmasının nedeni nedir? | Işığın su damlalarında kırılarak renklere ayrılması | Işığın soğurulması ; Bulutların renkli olması ; Güneş'in rengi | Beyaz ışık renklerine ayrılır.
Prizma beyaz ışığı ne yapar? | Renklerine ayırır | Tek renge çevirir ; Söndürür ; Sese dönüştürür | Beyaz ışık yedi renkten oluşur.
Hangisi ışığın kırılmasına örnektir? | Serap olayı | Aynada görüntü oluşması ; Gölge oluşması ; Yankı | Sıcak havada ışık kırılır.
Işığın en hızlı yayıldığı ortam hangisidir? | Boşluk | Su ; Cam ; Elmas | Yoğunluk arttıkça hız azalır.`);
ek("f7k2", `Su tasarrufu için hangisi yapılmalıdır? | Dişleri fırçalarken musluğu kapatmak | Musluğu açık bırakmak ; Bahçeyi gün ortasında sulamak ; Arabayı hortumla uzun süre yıkamak | Her damla değerlidir.
Elektrik tasarrufu için hangisi yapılmalıdır? | Kullanılmayan cihazları kapatmak | Bilgisayarı açık bırakmak ; Işıkları gündüz yakmak ; Buzdolabı kapağını açık bırakmak | Tasarruf hem doğayı hem bütçeyi korur.
Geri dönüşümün faydalarından biri hangisidir? | Ham madde ve enerji tasarrufu | Atık miktarının artması ; Ormanların azalması ; Çevre kirliliğinin artması | Doğal kaynaklar korunur.
Hangisi yenilenebilir bir kaynaktır? | Rüzgâr | Petrol ; Kömür ; Doğal gaz | Tükenmez kaynaktır.
Kaynakların tükenmesini önlemek için ne yapılmalıdır? | Bilinçli tüketim ve geri dönüşüm | Daha çok tüketmek ; İsraf etmek ; Ağaç kesmek | Sürdürülebilirlik esastır.
Kâğıt geri dönüştürülürse ne korunmuş olur? | Ağaçlar | Taşlar ; Bulutlar ; Petroller | Kâğıt ağaçtan yapılır.
Enerji verimliliği yüksek cihazları seçmek neyi sağlar? | Daha az enerjiyle aynı işi yapmayı | Daha çok enerji harcamayı ; Cihazın bozulmasını ; Faturanın artmasını | A+++ sınıfı cihazlar tasarrufludur.
Toplu taşıma kullanmanın faydası nedir? | Yakıt tasarrufu ve daha az hava kirliliği | Trafiği artırması ; Daha çok yakıt harcanması ; Daha çok egzoz gazı | Kişi başı yakıt tüketimi azalır.
Damla sulama yönteminin faydası nedir? | Suyun tasarruflu kullanılması | Suyun israf edilmesi ; Toprağın kurumasını hızlandırması ; Bitkileri öldürmesi | Su doğrudan köke verilir.
Atık pillerin doğaya atılması neden zararlıdır? | Toprağa ve suya zehirli metaller karışır | Toprağı verimli yapar ; Bitkileri büyütür ; Zararsızdır | Pil toplama kutularına atılmalıdır.`);
ek("s2k1", `Küreselleşme ne demektir? | Ülkeler arasında ekonomik, kültürel ve teknolojik etkileşimin artması | Ülkelerin tamamen kapanması ; Ticaretin bitmesi ; İletişimin azalması | Dünya bir köy gibi küçülür.
Küreselleşmenin olumlu etkilerinden biri hangisidir? | Bilgiye ve ürünlere kolay ulaşım | Yerel kültürlerin zayıflaması ; Çevre kirliliği ; Eşitsizlik | Teknoloji ve ticaret yayılır.
Küreselleşmenin olumsuz etkilerinden biri hangisidir? | Yerel kültürlerin ve dillerin zayıflaması | Bilgiye kolay ulaşım ; Hızlı iletişim ; Ticaretin gelişmesi | Kültürel tek tipleşme yaşanabilir.
Küreselleşmeyi hızlandıran gelişme hangisidir? | İnternet ve iletişim teknolojileri | At arabası ; Mektup ; Güvercin postası | Bilgi anında dünyaya yayılır.
Uluslararası şirketlerin farklı ülkelerde fabrika açması neye örnektir? | Ekonomik küreselleşmeye | Kültürel izolasyona ; Savaşa ; Göçün azalmasına | Üretim dünyaya yayılır.
Dünyanın her yerinde aynı yemek zincirlerinin bulunması neyi gösterir? | Kültürel küreselleşmeyi | Yerel kültürün güçlenmesini ; Ticaretin bitmesini ; Turizmin azalmasını | Tüketim alışkanlıkları benzeşir.
Küresel sorunlara örnek hangisidir? | İklim değişikliği | Bir köyün yolunun bozuk olması ; Sınıfın dağınık olması ; Bir evin boyası | Tüm dünyayı etkileyen sorunlardır.
Küreselleşmede kültürümüzü korumak için ne yapabiliriz? | Dilimize ve geleneklerimize sahip çıkmak | Kültürümüzü unutmak ; Sadece yabancı ürün kullanmak ; Türkçeyi bozmak | Hem dünyaya açık hem köklerimize bağlı olmalıyız.
Birleşmiş Milletler'in temel amacı nedir? | Dünya barışını ve iş birliğini sağlamak | Savaş çıkarmak ; Ticareti yasaklamak ; Ülkeleri tek devlet yapmak | 1945'te kuruldu.
Bir ülkede yaşanan ekonomik krizin diğer ülkeleri de etkilemesi neyi gösterir? | Küresel ekonomik bağımlılığı | Ülkelerin bağımsızlığını ; Ticaretin yokluğunu ; Kültürel farkları | Ekonomiler birbirine bağlıdır.`);
ek("f4k2", `Ortası kenarlarından kalın olan merceğe ne denir? | İnce kenarlı mercek | Kalın kenarlı mercek ; Düz ayna ; Prizma | Işığı bir noktada toplar.
Ortası kenarlarından ince olan merceğe ne denir? | Kalın kenarlı mercek | İnce kenarlı mercek ; Çukur ayna ; Tümsek ayna | Işığı dağıtır.
Büyüteçlerde hangi mercek kullanılır? | İnce kenarlı mercek | Kalın kenarlı mercek ; Düz cam ; Tümsek ayna | Cisimleri büyük gösterir.
Miyop (uzağı göremeyen) gözlerin düzeltilmesinde hangi mercek kullanılır? | Kalın kenarlı mercek | İnce kenarlı mercek ; Prizma ; Düz cam | Işığı dağıtarak retinaya düşürür.
Hipermetrop (yakını göremeyen) gözlerin düzeltilmesinde hangi mercek kullanılır? | İnce kenarlı mercek | Kalın kenarlı mercek ; Prizma ; Ayna | Işığı toplayarak düzeltir.
Güneş ışığını ince kenarlı mercekle bir noktada toplarsak ne olur? | O noktada sıcaklık artar | Işık söner ; Soğuk oluşur ; Ses çıkar | Kâğıt bile tutuşabilir; dikkatli olunmalıdır.
Mikroskop ve teleskoplarda hangi mercekler kullanılır? | İnce kenarlı mercekler | Sadece aynalar ; Sadece düz cam ; Hiç mercek yok | Görüntüyü büyütür.
Merceğin ışığı topladığı noktaya ne denir? | Odak noktası | Merkez ; Kenar ; Gölge | İnce kenarlı merceklerde odak gerçektir.
Gözümüzde mercek görevi gören yapı hangisidir? | Göz merceği | İris ; Retina ; Göz kapağı | Göz merceği ışığı retinaya odaklar.
Fotoğraf makinelerinde hangi mercek kullanılır? | İnce kenarlı mercek | Kalın kenarlı mercek ; Tümsek ayna ; Düz ayna | Görüntü sensöre odaklanır.`);
ek("t7c", `Ek fiil hangi sözcük türüne gelerek onları yüklem yapar? | İsim soylu sözcüklere | Sadece fiillere ; Bağlaçlara ; Ünlemlere | "Öğrenciyim" sözcüğünde ek fiil vardır.
"Hava çok soğuktu." cümlesinde ek fiilin görevi nedir? | İsim soylu sözcüğü yüklem yapmak (hikâye) | Fiili olumsuz yapmak ; Soru sormak ; Zarf yapmak | Soğuk-tu: ek fiilin hikâyesi.
Ek fiilin kaç kipi vardır? | 4 (geniş zaman, hikâye, rivayet, şart) | 2 ; 6 ; 1 | -dır, -dı, -mış, -sa.
"Annem öğretmendir." cümlesinde "-dir" eki neyi bildirir? | Ek fiilin geniş zamanı | Hikâye ; Rivayet ; Şart | Kesinlik bildirir.
"Kardeşim hastaymış." cümlesinde ek fiilin hangi kipi vardır? | Rivayet | Hikâye ; Şart ; Geniş zaman | Duyulan bilgi aktarılır.
"Zengin olsa yardım ederdi." cümlesinde "olsa" yerine ek fiil hangisidir? | Zenginse (şart) | Zengindi ; Zenginmiş ; Zengindir | Şart kipi -sa/-se.
"Geliyordu" sözcüğü nasıl bir yapıdır? | Birleşik zamanlı fiil (şimdiki zamanın hikâyesi) | Basit zamanlı fiil ; İsim ; Sıfat | -yor + -du.
"Okumuştum" sözcüğünde hangi birleşik zaman vardır? | Öğrenilen geçmiş zamanın hikâyesi | Şimdiki zamanın rivayeti ; Geniş zamanın şartı ; Gelecek zamanın hikâyesi | -mış + -tı.
"Yorgunum" sözcüğünde ek fiil var mıdır? | Evet, "-(y)im" ek fiildir | Hayır ; Sadece çekim eki vardır ; Yapım eki vardır | İsim + ek fiil = yüklem.
"Bu kitap benimdi." cümlesinin yüklemi nedir? | benimdi | Bu ; kitap ; Bu kitap | Zamir + ek fiil yüklem olmuştur.`);
ek("f3k4", `Böbreğin yapı ve görev birimi nedir? | Nefron | Nöron ; Alveol ; Villus | Her böbrekte yaklaşık bir milyon nefron vardır.
Boşaltım sisteminin temel görevi nedir? | Vücuttaki zararlı atıkları dışarı atmak | Besinleri sindirmek ; Oksijen almak ; Kan üretmek | İdrar yoluyla atık atılır.
İdrar böbreklerden idrar kesesine hangi yapıyla taşınır? | Üreter (idrar borusu) | Üretra ; Aort ; Bronş | Her böbrekten bir üreter çıkar.
İdrarın biriktiği organ hangisidir? | İdrar kesesi (mesane) | Böbrek ; Karaciğer ; Mide | Belli miktara ulaşınca boşaltılır.
Böbreklerin sağlığı için ne yapılmalıdır? | Bol su içmek ve tuzu azaltmak | Az su içmek ; Çok tuz yemek ; Tuvaleti tutmak | Su böbrekleri korur.
Deri boşaltıma nasıl katkı sağlar? | Ter yoluyla su ve tuz atar | Oksijen üretir ; Besin sindirir ; Kan yapar | Ter bezleri deride bulunur.
Akciğerler hangi atığı dışarı atar? | Karbondioksit | Üre ; Tuz ; Şeker | Solunumla CO₂ atılır.
Böbrek taşı oluşumunu önlemek için ne yapılmalıdır? | Yeterli sıvı tüketmek | Hiç su içmemek ; Çok tuzlu yemek ; Hareketsiz kalmak | Taşlar mineral birikiminden oluşur.
Böbrekleri çalışmayan hastalar hangi tedaviyi alır? | Diyaliz | Röntgen ; Aşı ; Gözlük | Kan makinede temizlenir.
Organ bağışı neden önemlidir? | Başka insanların hayatını kurtarabilir | Hiçbir önemi yoktur ; Zararlıdır ; Sadece hayvanlara yapılır | Böbrek nakli birçok hayat kurtarır.`);
ek("f2k3", `Hareketli bir cismin sahip olduğu enerjiye ne denir? | Kinetik enerji | Potansiyel enerji ; Isı enerjisi ; Ses enerjisi | Hızı ve kütlesi arttıkça artar.
Yüksekte duran bir cismin sahip olduğu enerjiye ne denir? | Çekim potansiyel enerjisi | Kinetik enerji ; Elektrik enerjisi ; Işık enerjisi | Yükseklik arttıkça artar.
Gerilmiş bir lastiğin sahip olduğu enerjiye ne denir? | Esneklik potansiyel enerjisi | Kinetik enerji ; Isı enerjisi ; Kimyasal enerji | Lastik bırakılınca enerji harekete dönüşür.
Yukarıdan düşen bir topun enerjisi nasıl dönüşür? | Potansiyel enerji kinetik enerjiye dönüşür | Kinetik enerji potansiyele dönüşür ; Enerji yok olur ; Enerji değişmez | Düştükçe hızlanır.
Enerjinin korunumu ne demektir? | Enerji yoktan var edilemez, var olan yok edilemez; sadece dönüşür | Enerji yok olur ; Enerji kendiliğinden oluşur ; Enerji hiç değişmez | Toplam enerji sabittir.
Sürtünme nedeniyle kinetik enerji hangi enerjiye dönüşür? | Isı enerjisine | Işık enerjisine ; Elektrik enerjisine ; Nükleer enerjiye | Ellerimizi ovunca ısınırız.
Hidroelektrik santrallerde hangi enerji dönüşümü olur? | Potansiyel → kinetik → elektrik | Elektrik → kimyasal ; Işık → ses ; Kimyasal → nükleer | Yüksekten düşen su türbinleri döndürür.
Bisiklet hızlandıkça kinetik enerjisi nasıl değişir? | Artar | Azalır ; Değişmez ; Sıfır olur | Hız arttıkça kinetik enerji artar.
Salıncakta en yüksek noktada hangi enerji en fazladır? | Potansiyel enerji | Kinetik enerji ; Isı enerjisi ; Ses enerjisi | En yüksek noktada hız sıfıra yakındır.
Kütlesi büyük olan iki cisim aynı hızla gidiyorsa hangisinin kinetik enerjisi daha fazladır? | Kütlesi büyük olanın | Kütlesi küçük olanın ; Eşittir ; Hesaplanamaz | Kinetik enerji kütleyle doğru orantılıdır.`);
ek("d2k2", `Kurban ibadeti hangi bayramda yerine getirilir? | Kurban Bayramı | Ramazan Bayramı ; Cumhuriyet Bayramı ; Nevruz | Zilhicce ayının 10–13. günleri.
Kurban ibadetinin kökeni hangi peygambere dayanır? | Hz. İbrahim | Hz. Musa ; Hz. Nuh ; Hz. İsa | Hz. İsmail yerine koç kurban edilmiştir.
Kurban hangi hayvanlardan kesilebilir? | Koyun, keçi, sığır, deve | Tavuk ; Balık ; At | Belirli yaş şartları vardır.
Kurban etinin paylaştırılması nasıl tavsiye edilir? | Bir kısmı ihtiyaç sahiplerine, bir kısmı akrabalara dağıtılır | Tamamı satılır ; Tamamı atılır ; Kimseye verilmez | Paylaşma esastır.
Kurban ibadetinin bireye kazandırdığı değer hangisidir? | Paylaşma ve fedakârlık | Bencillik ; Cimrilik ; İsraf | Kurban teslimiyeti gösterir.
Kurban kesmek kimlere vaciptir? | Maddi durumu yeterli olan Müslümanlara | Herkese ; Sadece çocuklara ; Sadece yaşlılara | Nisap miktarı mala sahip olanlara.
Kurban kesilirken nelere dikkat edilmelidir? | Hayvana eziyet edilmemeli, temizliğe uyulmalı | Hayvana işkence yapılmalı ; Sokakta rastgele kesilmeli ; Atıklar ortada bırakılmalı | Hijyen ve merhamet önemlidir.
"Onların ne etleri ne de kanları Allah'a ulaşır; fakat O'na sizin takvanız ulaşır." ayeti neyi vurgular? | Kurbanda niyet ve samimiyetin önemini | Etin önemini ; Kanın önemini ; Gösterişin önemini | Hac Suresi 37. ayet.
Vekâletle kurban ne demektir? | Kurban bedelini bir kuruma verip onun adına kestirmek | Kurbanı hiç kesmemek ; Kurbanı satmak ; Başkasının kurbanını almak | Yardım kuruluşları aracılığıyla yapılabilir.
Kurban Bayramı'nın toplumsal faydası nedir? | Zengin ile fakir arasındaki bağı güçlendirir | Toplumu böler ; Kıskançlığı artırır ; Hiçbir faydası yoktur | Paylaşım dayanışmayı artırır.`);
})();
