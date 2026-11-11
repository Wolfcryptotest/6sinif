// 🎬 Ek konu videoları (6. sınıf): her konuya 2. ve 3. video (soru çözümü, farklı anlatım, deney).
// Biçim: konuId: [[etiket, YouTube kimliği], ...]. Ana video (k.video) her zaman 1. sırada kalır.
// Her kimlik eklenmeden önce YouTube oEmbed ile doğrulandı (başlık konuyla uyumlu ve sitede oynatılabilir). Yorum satırında kanal ve başlık var.
window.VIDEO_EK = {
  t1k1: [["Soru Çözümü", "MEMOuqErcn4"], ["Soru Çözümü 2", "hUJWq4FjmJQ"]], // özge (6. Sınıf Çarpanlar ve Katlar Soru Çözümü) · Ne Kolay Matematik (6.Sınıf Matematik: Çarpanlar ve Katlar Soru Çözümü)
  t1k2: [["Soru Çözümü", "QpmyfKevs5I"], ["Farklı Anlatım", "6W2kU0dlkk0"]], // BGM Matematik (Bölünebilme kuralları Soru Çözümü ve Çözümlü örnek) · İMT Hoca (KALANSIZ BÖLÜNEBİLME KURALLARI 6. Sınıf Matematik )
  t1k3: [["Anlatım ve Soru Çözümü", "R41pJZkpO00"], ["Soru Çözümü", "fFCimUVsVLg"]], // Hız Yayınları Ortaokul (Asal Sayılar Konu Anlatımı, Soru Çözümü: 6. Sınıf ) · GÜNEYLİ MATEMATİK EVİ (6.SINIF ASAL SAYILAR VE ASAL ÇARPANLAR SORU ÇÖZÜMÜ)
  t1k4: [["Soru Çözümü", "CgzvWpPOcFs"], ["Anlatım ve Soru Çözümü", "dwrIijmCeEQ"]], // İMT Hoca (ORTAK BÖLENLER ve ORTAK KATLAR (Problemler) 6. Sın) · İMT Hoca (Ortak Bölen ve Ortak Kat Problemleri | 6.Sınıf Mat)
  t2k1: [["Farklı Anlatım", "s7aYuuDEGiY"], ["Farklı Anlatım 2", "jEdZF0wA8f8"]], // Hocalara Geldik 6.Sınıf (Deneysel Olasılık | 6. Sınıf Matematik Konu Anlatı) · Koray’la 6. Sınıf (6. Sınıf Matematik 2. Tema: OLASILIK)
  t3k1: [["Soru Çözümü", "NvGyol-jK8w"], ["Farklı Anlatım", "rLjolcA9q_o"]], // Arı Hoca ile Bal Gibi Matematik (4. Ondalık Gösterimler Soru Çözümü - 6. Sınıf - Ma) · Arı Hoca ile Bal Gibi Matematik (2. Ondalık Gösterimde Basamak Değeri ve Çözümleme )
  t3k2: [["Farklı Anlatım", "mMD-u07xVCQ"], ["Soru Çözümü", "k80plbGFez4"]], // Sevimli Matematik (24) ONDALIK GÖSTERİMDE YUVARLAMA - 6. SINIF) · 3D Yayınları Ortaokul (Tema 03 - Ondalık Gösterimlerde Basamak Değeri, Yu)
  t3k3: [["Farklı Anlatım", "FenJ_bWnKms"], ["Farklı Anlatım 2", "i6qcjEdb7rM"]], // Yasemen Akademi 📚 (Kesir İle Bölme İşlemi İlişkisi ✏️6.Sınıf Matemati) · Basit Matematik (BÖLME İŞLEMİ İLE KESİR İLİŞKİSİ 6. SINIF)
  t3k4: [["Farklı Anlatım", "HXEaiu2-wfQ"], ["Farklı Anlatım 2", "ZVMniNe8ifE"]], // CEYLAN AKADEMİ (6. SINIF UZUNLUK ÖLÇME BİRİMLERİ) · Hiper Zeka (Uzunluk Ölçme Birimleri | 6.Sınıf Bal Matematik | )
  t4k1: [["Anlatım ve Soru Çözümü", "aL69XFMLjzI"], ["Soru Çözümü", "kOT6yF-irc4"]], // Hız Yayınları Ortaokul (Araştırma Sorusu Oluşturma Ve Veri Toplama Konu An) · Matematik Yurdu (Test 32 - Araştırma Sorusu Oluşturma, Veri Toplama)
  t4k2: [["Farklı Anlatım", "jfFRbyLDQQQ"], ["Farklı Anlatım 2", "FrtoUVJuXQQ"]], // İMT Hoca (Veri Toplama (İkili Sıklık Tablosu ve Sütun Grafiğ) · İMT Hoca (Sıklık Tablosu ve Sütun Grafiği-VERİ DÜZENLEME | 6)
  t5k1: [["Soru Çözümü", "HYpDsenJ-bY"]], // Oğuzeli Atatürk Ortaokulu (6. Sınıf Matematik Paralel Doğrular Soru Çözümü)
  t5k2: [["Farklı Anlatım", "18FN3ely2vg"]], // Matematikchi Mihail (Üçgende Açı Konu Anlatımı 2 - Üçgenin iç açıları t)
  t6k1: [["Farklı Anlatım", "nWwDHukiN8E"], ["Farklı Anlatım 2", "mnxqmP9b414"]], // Basit Matematik (CEBİRSEL İFADELER 6. Sınıf Matematik.) · Gülsüm Gürses - ARI Eğitim Akademisi (6. Sınıf Matematik 36- CEBİRSEL İFADELER)
  t6k2: [["Farklı Anlatım", "jTbAweaq2mg"]], // BGM Matematik (Örüntüler, kural bulma , kuralı verileni yazma (5 )
  t7k1: [["Anlatım ve Soru Çözümü", "8SyVgYM-FaI"], ["Farklı Anlatım", "UhUKaXhiu1I"]], // Hız Yayınları Ortaokul (Alan Ve Arazi Ölçme Birimleri Konu Anlatımı, Soru ) · Hocalara Geldik 6.Sınıf (6. Sınıf Matematik - Alan Ölçme Birimleri | 2022)
  t7k2: [["Anlatım ve Soru Çözümü", "tZhA19Hn1XA"], ["Soru Çözümü", "nN6gBc-vyqg"]], // Hız Yayınları Ortaokul (Üçgenin Ve Paralel Kenarın Alanı Konu Anlatımı, So) · Haluk Hoca (6.Sınıf-Paralelkenarın Alanı-Soru Çözümü)
  t7k3: [["Farklı Anlatım", "oFFJfXrtonQ"], ["Soru Çözümü", "P5Q4ALgCWqk"]], // İMT Hoca (Çemberin Çevre Uzunluğu, Çap ve Pi Sayısı 6. Sınıf) · MEHMET İNAL (ÇEMBERİN ÇEVRE UZUNLUĞU, ÖRNEK ÇÖZÜMÜ  /6.SINIF)
  t7k4: [["Soru Çözümü", "hfF0_nNDkwA"]], // KhanAcademyTurkce (Verilen Yay Uzunluğuna Göre Merkez Açıyı Bulma (Ge)
  m1k1: [["Soru Çözümü", "t3twPF0_Vn8"], ["Farklı Anlatım", "_WhwFo3Brfk"]], // Sevimli Matematik (2) Üslü İfadeler Soru Çözümü | 6. Sınıf Matematik) · İMT Hoca (Üslü İfadeler Konu Anlatımı 6. Sınıf Matematik)
  m1k2: [["Soru Çözümü", "uBRBNr9j_wA"], ["Farklı Anlatım", "etW19PSpczA"]], // Sevimli Matematik (6. Sınıf Matematik İşlem Önceliği | Soru Çözümü +P) · BGM Matematik (İşlem önceliği Konu anlatımı Çözümlü örnekler / 6.)
  m1k3: [["Soru Çözümü", "cIP1Ha-SYpQ"], ["Farklı Anlatım", "v68pCsIEAX8"]], // İMT Hoca (DAĞILMA ÖZELLİĞİ ve ORTAK ÇARPAN PARANTEZİ Soru Çö) · Seda Hoca (Ortak Çarpan Parantezine Alma 6. Sınıf Matematik)
  f1k1: [["Soru Çözümü", "hKlzqjIwvCQ"], ["Soru Çözümü 2", "Cp0UxsyzgVM"]], // RECEP HOCA AKADEMİ (6  Sınıf Güneş Sistemi - Gezegenler Soru Çözümü #2) · Hız Yayınları Ortaokul (Beceri Temelli Testler ile 6. Sınıf Fen Bilimleri )
  f1k3: [["Soru Çözümü", "oCe3WTeTBBg"], ["Farklı Anlatım", "gYp_lVKXaIQ"]], // Işık Fen (6. SINIF GÜNEŞ SİSTEMİ VE TUTULMALAR / 5 SORU 5 ÇÖ) · YÜZLÜK SORULAR (Güneş ve Ay Tutulması / 6. Sınıf Fen Bilgisi 1. Ün)
  f2k1: [["Anlatım ve Soru Çözümü", "4UbcRh9WeMk"]], // Eğitimsiz Olmaz (6. Sınıf Fen Bilimleri Bileşke Kuvvet Konu Anlatım)
  f2k2: [["Anlatım ve Soru Çözümü", "VSQ_Y7oWSTA"]], // Hocam Anlatır 6. Sınıf (6. Sınıf Fen Bilimleri - Dengelenmiş ve Dengelenme)
  f2k3: [["Soru Çözümü", "YiwudfTDUtw"], ["Anlatım ve Soru Çözümü", "5yuQqxXJoxs"]], // UĞUR SCIENTIST (SÜRAT SORU ÇÖZÜMÜ. #sınavahazırlık #süratsoruçözüm) · Hız Yayınları Ortaokul (6.SINIF FEN - Sürat Konu Anlatımı, Soru Çözümü - 1)
  f3k1: [["Soru Çözümü", "Dj5iXYAvmMc"]], // Sen Anlat Hocam (EŞEYLİ - EŞEYSİZ ÜREME SORU ÇÖZÜMLERİ | 1 | ✅)
  f3k3: [["Farklı Anlatım", "uoae3m5ilXw"]], // Derslike (Denetleyici ve Düzenleyici Sistemler / 6. Sınıf)
  f3k4: [["Farklı Anlatım", "G6WQUkIn0h4"]], // Ysmn Bor (6 Sınıf Fen - İç Salgı Bezleri - Ergenlik Dönemi)
  f4k1: [["Farklı Anlatım", "jTqAALqvsDg"]], // Meras Akademi (Işığın Yansıması Konu Anlatımı | 6.Sınıf Fen Bilim)
  f4k2: [["Farklı Anlatım", "Us4Bl73AnMY"]], // Dnzhoca (6. Sınıf Fen Aynalar Konu Anlatımı | Düz, Çukur ve)
  f4k3: [["Farklı Anlatım", "_ZIIajRLJ7M"]], // Fenci Pınar Hoca (6.SINIF FEN BİLİMLERİ 4.ÜNİTE IŞIĞIN YANSIMASI VE )
  f5k1: [["Farklı Anlatım", "58uyIX3L5d0"]], // Fencinin Kalemi (6.SINIF FEN BİLİMLERİ - GENLEŞME VE BÜZÜLME)
  f5k2: [["Farklı Anlatım", "JxHz7tZKbw0"]], // Dnzhoca (6. Sınıf Fen | Maddenin Hal Değişim Noktaları (Su )
  f5k3: [["Soru Çözümü", "5jP1on1_ao8"], ["Anlatım ve Soru Çözümü", "qxpIyUCmams"]], // Işık Fen (6. SINIF YOĞUNLUK SORU ÇÖZÜMÜ) · Hız Yayınları Ortaokul (6.SINIF FEN - Yoğunluk - Konu Anlatımı, Soru Çözüm)
  f6k1: [["Soru Çözümü", "BGHXdrs5T_E"]], // AY EĞİTİM (6. Sınıf Fen Bil Kaz. Kavrama Testi 16- İletken - )
  f6k2: [["Deney", "GpN5AyMAThI"], ["Farklı Anlatım", "tWMW56e1ZxU"]], // Kolay Fen (Ampul De Bir Dirençtir - Ampulün Parlaklığını Deği) · Derslike (Elektriğin İletimi - Direnç / 6. Sınıf)
  f6k3: [["Farklı Anlatım", "TASl8e78XAg"]], // sorbil eğitim (Elektriksel Direnç ve Bağlı Olduğu Faktörler - 6. )
  f7k1: [["Farklı Anlatım", "V4RYbWe7MYU"]], // Derslike (Biyoçeşitlilik | 6. Sınıf | 2026)
};
(function () {
  if (!window.ICERIK) return;
  for (const D of Object.values(ICERIK)) for (const u of D.uniteler || []) for (const k of u.konular || []) {
    const ek = (window.VIDEO_EK[k.id] || []).filter(([, v]) => v !== k.video);
    if (!ek.length) continue;
    if (!k.video) { k.video = ek[0][1]; k.videolar = ek; } else k.videolar = [["Konu Anlatımı", k.video], ...ek];
  }
  // Videolar arasında geçiş: düğmeye basınca aynı oynatıcıda o video açılır
  document.addEventListener("click", (e) => {
    const b = e.target.closest && e.target.closest(".video-sec [data-vid]"); if (!b) return;
    const kutu = b.closest(".konu-v") || document, f = kutu.querySelector(".video iframe"), a = kutu.querySelector(".video-yt"), v = encodeURIComponent(b.dataset.vid);
    if (f) f.src = `https://www.youtube-nocookie.com/embed/${v}?rel=0&modestbranding=1&autoplay=1`;
    if (a) a.href = `https://www.youtube.com/watch?v=${v}`;
    b.parentNode.querySelectorAll("button").forEach((x) => { x.classList.toggle("secili", x === b); x.setAttribute("aria-pressed", x === b); });
  });
  const st = document.createElement("style");
  st.textContent = ".video-sec{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 12px}.video-sec button{font:inherit;font-size:14px;padding:8px 12px;border-radius:999px;border:1px solid var(--sinir);background:var(--kart);color:var(--yazi);cursor:pointer}.video-sec button.secili{background:#dc2626;border-color:#dc2626;color:#fff;font-weight:600}";
  document.head.appendChild(st);
})();
