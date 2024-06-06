# Balanced Brackets Checker

Repositori ini berisi fungsi JavaScript `isBalanced` untuk memeriksa apakah brackets seimbang. Fungsi ini memastikan bahwa setiap braket pembuka memiliki braket penutup yang sesuai dalam urutan yang benar.

## Aturan
1. Tanda bracket / karakter yang diperbolehkan sebagai berikut: `(`, `)`, `{`, `}`, `[`, `]`.
2. Bracket bisa dipisahkan dengan atau tanpa whitespace.
3. Fungsi memeriksa tanda kurung untuk memastikan kecocokan antara bracket buka dan bracket tutup dengan mengembalikan nilai string "YES" atau "NO".

## Kompleksitas
### Kompleksitas Waktu
Kompleksitas waktu dari fungsi `isBalanced` adalah O(n), dengan n adalah panjang string masukan. Hal ini karena fungsi tersebut mengulangi setiap karakter string satu kali, dan setiap operasi stack (push dan pop) adalah O(1).

### Kompleksitas Ruang
Kompleksitas ruang adalah O(n) dalam kasus terburuk, di mana semua karakter dalam string adalah tanda kurung buka, yang mengharuskan stack untuk menyimpan semuanya.

## Penjelasan Fungsi
1. Stack kosong dibuat untuk menyimpan tanda kurung buka.
2. Array `openingBrackets` dan `closingBrackets` didefinisikan untuk mengenali tanda kurung buka dan tutup.
3. Objek `matchBracket` didefinisikan untuk menguraikan setiap tanda kurung tutup ke tanda kurung buka yang sesuai.
4. Fungsi melakukan iterasi setiap karakter dalam string:
   - Jika karakternya adalah tanda kurung buka, karakter tersebut akan dipush ke dalam stack.
   - Jika karakternya adalah tanda kurung tutup, fungsi akan memeriksa apakah stack kosong atau jika elemen teratas dari stack tidak cocok dengan tanda kurung buka yang bersangkutan. Jika salah satu kondisi benar, fungsi akan mengembalikan "NO".
5. Setelah iterasi, jika stack kosong, fungsi akan mengembalikan "YES", yang menunjukkan bahwa semua bracket seimbang. Jika tidak, ia mengembalikan "NO".

