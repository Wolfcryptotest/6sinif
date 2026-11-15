/* ===== İÇERİK BANKASI (3. ve 6. sınıf) ===== */
// İngilizce 3. sınıf (MEB 3. sınıf İngilizce ünite temaları: renkler, aile, hayvanlar, oyuncaklar, ulaşım, hava, duygular, evim)
const EN3=[
 ['red','kırmızı','🔴','renk'],['blue','mavi','🔵','renk'],['green','yeşil','🟢','renk'],['yellow','sarı','🟡','renk'],['purple','mor','🟣','renk'],['black','siyah','⚫','renk'],['white','beyaz','⚪','renk'],['brown','kahverengi','🟤','renk'],
 ['mother','anne','👩','aile'],['father','baba','👨','aile'],['sister','kız kardeş','👧','aile'],['brother','erkek kardeş','👦','aile'],['grandmother','büyükanne','👵','aile'],['grandfather','büyükbaba','👴','aile'],['baby','bebek','👶','aile'],
 ['cat','kedi','🐱','hayvan'],['dog','köpek','🐶','hayvan'],['bird','kuş','🐦','hayvan'],['fish','balık','🐟','hayvan'],['horse','at','🐴','hayvan'],['cow','inek','🐮','hayvan'],['rabbit','tavşan','🐰','hayvan'],['lion','aslan','🦁','hayvan'],
 ['ball','top','⚽','oyuncak'],['teddy bear','oyuncak ayı','🧸','oyuncak'],['kite','uçurtma','🪁','oyuncak'],['bike','bisiklet','🚲','oyuncak'],
 ['bus','otobüs','🚌','ulaşım'],['train','tren','🚆','ulaşım'],['plane','uçak','✈️','ulaşım'],['ship','gemi','🚢','ulaşım'],['car','araba','🚗','ulaşım'],
 ['sunny','güneşli','☀️','hava'],['rainy','yağmurlu','🌧️','hava'],['snowy','karlı','❄️','hava'],['cloudy','bulutlu','☁️','hava'],
 ['happy','mutlu','😀','duygu'],['sad','üzgün','😢','duygu'],['angry','kızgın','😠','duygu'],
 ['bed','yatak','🛏️','ev'],['door','kapı','🚪','ev'],['chair','sandalye','🪑','ev'],
 ['apple','elma','🍎','meyve'],['banana','muz','🍌','meyve'],['grapes','üzüm','🍇','meyve'],['strawberry','çilek','🍓','meyve']
].map(([en,tr,e,t])=>({id:'en3:'+en,en,tr,e,topic:'İngilizce · '+t}));
// İngilizce 6. sınıf (MEB 6. sınıf üniteleri: Life, Yummy Breakfast, Downtown, Weather and Emotions, Occupations, Holidays, Saving the Planet, Democracy)
const EN6=[
 ['wake up','uyanmak','Life'],['have breakfast','kahvaltı yapmak','Life'],['brush teeth','diş fırçalamak','Life'],['go to bed','yatmak','Life'],
 ['cheese','peynir','Yummy Breakfast'],['olive','zeytin','Yummy Breakfast'],['honey','bal','Yummy Breakfast'],['egg','yumurta','Yummy Breakfast'],['bread','ekmek','Yummy Breakfast'],['butter','tereyağı','Yummy Breakfast'],['jam','reçel','Yummy Breakfast'],
 ['hospital','hastane','Downtown'],['museum','müze','Downtown'],['bakery','fırın','Downtown'],['library','kütüphane','Downtown'],['pharmacy','eczane','Downtown'],
 ['foggy','sisli','Weather and Emotions'],['stormy','fırtınalı','Weather and Emotions'],['scared','korkmuş','Weather and Emotions'],['bored','sıkılmış','Weather and Emotions'],['excited','heyecanlı','Weather and Emotions'],
 ['nurse','hemşire','Occupations'],['farmer','çiftçi','Occupations'],['firefighter','itfaiyeci','Occupations'],['engineer','mühendis','Occupations'],['chef','aşçı','Occupations'],['dentist','diş hekimi','Occupations'],['vet','veteriner','Occupations'],
 ['beach','sahil','Holidays'],['tent','çadır','Holidays'],['suitcase','bavul','Holidays'],['ticket','bilet','Holidays'],
 ['recycle','geri dönüştürmek','Saving the Planet'],['waste','atık','Saving the Planet'],['pollution','kirlilik','Saving the Planet'],
 ['vote','oy vermek','Democracy'],['election','seçim','Democracy'],['class president','sınıf başkanı','Democracy']
].map(([en,tr,u])=>({id:'en6:'+en,en,tr,topic:'İngilizce · '+u}));
// Türkçe eş ve zıt anlamlılar
const ZIT3=[['büyük','küçük'],['sıcak','soğuk'],['uzun','kısa'],['açık','kapalı'],['hızlı','yavaş'],['yeni','eski'],['temiz','kirli'],['ağır','hafif'],['gece','gündüz'],['aşağı','yukarı'],['dolu','boş'],['ince','kalın'],['genç','yaşlı'],['erken','geç'],['iyi','kötü']].map(([a,b])=>({id:'zit3:'+a,a,b,topic:'Türkçe · zıt anlam'}));
const ES3=[['siyah','kara'],['beyaz','ak'],['kırmızı','al'],['cevap','yanıt'],['kelime','sözcük'],['hediye','armağan'],['misafir','konuk'],['doktor','hekim'],['yıl','sene'],['ad','isim'],['soru','sual'],['öğrenci','talebe']].map(([a,b])=>({id:'es3:'+a,a,b,topic:'Türkçe · eş anlam'}));
const ES6=[['bilim','ilim'],['ulus','millet'],['gelecek','istikbal'],['özgürlük','hürriyet'],['konut','mesken'],['yeterli','kâfi'],['yurt','vatan'],['anı','hatıra'],['olanak','imkân'],['örnek','misal'],['öğretmen','muallim'],['düş','rüya']].map(([a,b])=>({id:'es6:'+a,a,b,topic:'Türkçe · eş anlam'}));
const ZIT6=[['cesur','korkak'],['cömert','cimri'],['zengin','yoksul'],['kolay','zor'],['doğru','yanlış'],['kazanmak','kaybetmek'],['giriş','çıkış'],['ileri','geri'],['barış','savaş'],['başarı','başarısızlık']].map(([a,b])=>({id:'zit6:'+a,a,b,topic:'Türkçe · zıt anlam'}));
// Matematik
const MUL3=[];for(let a=2;a<=10;a++)for(let b=2;b<=10;b++)if(a<=b)MUL3.push({id:`mul:${a}x${b}`,a,b,topic:'Matematik · çarpım tablosu'});
const POW6=[[2,2],[2,3],[2,4],[2,5],[2,6],[3,2],[3,3],[3,4],[4,2],[4,3],[5,2],[5,3],[6,2],[7,2],[8,2],[9,2],[10,2],[10,3],[10,4],[11,2],[12,2],[13,2],[14,2],[15,2]].map(([a,n])=>({id:`pow:${a}^${n}`,a,n,v:Math.pow(a,n),topic:'Matematik · üslü ifadeler'}));
// Sıralama setleri
const EVENTS6=[ // 6. sınıf Sosyal Bilgiler (İlk Türk devletleri, Türk-İslam devletleri) + temel tarih şeridi
 ['Asya Hun Devleti kuruldu',-220],['Kavimler Göçü başladı',375],['Göktürk Devleti kuruldu',552],['Hz. Muhammed Medine\'ye hicret etti',622],
 ['Orhun Yazıtları dikildi',735],['Uygur Devleti kuruldu',744],['Talas Savaşı',751],['Dandanakan Savaşı',1040],['Malazgirt Savaşı',1071],
 ['Miryokefalon Savaşı',1176],['Kösedağ Savaşı',1243],['Osmanlı Devleti kuruldu',1299],['İstanbul fethedildi',1453],['TBMM açıldı',1920],['Cumhuriyet ilan edildi',1923]
].map(([t,y])=>({id:'ev:'+y,t,y,ylab:y<0?'MÖ '+(-y):String(y),topic:'Sosyal · Tarih şeridi'}));
const PLANETS=['Merkür','Venüs','Dünya','Mars','Jüpiter','Satürn','Uranüs','Neptün'].map((t,i)=>({id:'pl:'+t,t,y:i,ylab:(i+1)+'. gezegen',topic:'Fen · Güneş sistemi'}));
const MONTHS=['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'].map((t,i)=>({id:'ay:'+t,t,y:i,ylab:(i+1)+'. ay',topic:'Hayat Bilgisi · aylar'}));
const DAYS=['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'].map((t,i)=>({id:'gun:'+t,t,y:i,ylab:(i+1)+'. gün',topic:'Hayat Bilgisi · günler'}));
const COLORS3=EN3.filter(w=>['red','blue','green','yellow'].includes(w.en));
const ALLITEMS={};[EN3,EN6,ZIT3,ES3,ES6,ZIT6,MUL3,POW6,EVENTS6,PLANETS,MONTHS,DAYS].forEach(p=>p.forEach(it=>ALLITEMS[it.id]=it));
function itemLabel(id){const it=ALLITEMS[id];if(it){if(it.en)return `${it.en} = ${it.tr}`;if(it.a&&it.b)return `${it.a} - ${it.b}`;if(it.id.startsWith('mul:'))return `${it.a} × ${it.b} = ${it.a*it.b}`;if(it.id.startsWith('pow:'))return `${it.a}^${it.n} = ${it.v}`;if(it.t)return `${it.t} (${it.ylab})`}
  if(id.startsWith('il:')){const c=IL.find(x=>x.p===+id.slice(3));return c?c.n+' ili':id}return id}
function itemTopic(id){const it=ALLITEMS[id];if(it)return it.topic;if(id.startsWith('il:'))return 'Sosyal · Türkiye illeri';return 'Diğer'}
