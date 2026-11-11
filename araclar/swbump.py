# Bir klasörün sw.js sürümünü yeniler; verilen yeni dosyaları DOSYALAR listesine ekler.
# Kullanım: python3 araclar/swbump.py <klasör> [yeni-dosya.js ...]   (kök için ".")
import re, hashlib, time, sys, os
d = sys.argv[1]; p = os.path.join(d, 'sw.js'); s = open(p, encoding='utf-8').read()
for f in sys.argv[2:]:
    if f'"{f}"' not in s:
        s = re.sub(r'(const DOSYALAR = \[)', r'\1"%s", ' % f, s, count=1)
s = re.sub(r'const SURUM = ONEK \+ "[0-9a-f]+"', 'const SURUM = ONEK + "%s"' % hashlib.md5(str(time.time()).encode()).hexdigest()[:8], s)
open(p, 'w', encoding='utf-8').write(s)
print(p, 'güncellendi')
