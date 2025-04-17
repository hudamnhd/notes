---
title: "Kenapa Menggunakan Linux?"
description: "Alasanku Kenapa Menggunakan Linux"
publishDate: "Apr 13 2024"
tags: ["story"]
---

Ketika pertama kali beli komputer, karena waktu itu aku beli dalam keaadan bekas dengan spefikasi
lumayan jadul dari penjualnya menggunakan Windows. Aku mulai belajar pemrograman pertama kali dan
menggunakan VSCODE. Waktu itu aku sedang mengikuti tutorial Fullstack dengan Next JS. Di tutorial
tersebut menggunakan linux Ubuntu. Tentu ketika di windows aku kebingungan karena beberapa perintah
tidak sama seperti di tutorial jadi aku memutuskan mirip seperti yang ada di tutorial.

Aku menginstal ubuntu kemudian baru bisa lanjut mengikuti tutorial tersebut sampai selesai.
Aku mungkin tidak paham setiap kode yang aku tulis, karena itu adalah pertama kali aku melihat
tutorial. Aku menyadari VSCODE yang berjalan di windows beda dengan yang ada di linux, di linux
terasa lebih ringan. Di masa-masa belajarku aku pernah tertarik dengan beberapa distro linux.

Aku mencoba beberapa distro linux hanya karena rasa penasaran diantaranya:

- **Ubuntu**: Distro pertama kali yang aku coba.
- **Linux Mint**: Tururan dari Ubuntu tetapi memiliki tampilan mirip Windows.
- **Kubuntu**: Sama seperti ubuntu tetapi menggunakan KDE Plasma.
- **Lubuntu**: Sama seperti ubuntu tetapi menggunakan LXDE (lebih ringan ).
- **Manjaro**: bagus tetapi aku pengalamanku mengalami error ketika update besar.
- **Arch**: Aku menyukai AUR dan dokumentasinya.
- **Fedora**: Aku cukup lama menggunakannya karena stabil.
- **Debian**: Distro yang aku gunakan saat ini karena sangat stabil.

Aku tau hal yang aku lakukan sangat tidak bagus karena mengikuti rasa penasaran. Tetapi sekarang
aku tau setiap distro memiliki kelebihan dan kekurangan masing. Seperti yang aku gunakan sekarang
yaitu **Debian** yang terkenal sangat stabil tentu memiliki kekurangan juga, salah satunya ialah
beberapa aplikasi belum mendapatkan versi terbarunya. Contohnya seperti aplikasi `Neovim` versi
yang tersedia di repositori debian hanya ada `neovim/stable 0.7.2-7` sementara di github neovim
sudah tersedia versi `0.11`.

Sebenarnya hal seperti ini terjadi ketika aku menggunakan Manjaro, Arch dan Fedora. Namun aku
memilih debian karena ada beberapa aplikasi yang aku butuhkan waktu itu hanya tersedia di Ubuntu
dan Debian. Jadi masalah diatas tentu tidak terlalu rumit, aku bisa mengatasi dengan mendownload
binary neovim dari repositori nya langsung.

Dari pengalamanku diatas tentu Linux sangat mudah di install, sangat mudah menggunakannya.

*Tetapi apa bedanya dengan Windows?*

- Gratis.
- Tidak bisa Menggunakan Aplikasi milik microsoft seperti Microsoft Office.
- Pengalamanku kualitas mic kurang bagus ketika dibandingkan kualitas di Windows.
- Tidak pernah di paksa pembaruan, yang biasa terjadi di Windows.
- Sangat ringan.

*Lalu bagaimana jika ingin mengedit file seperti dokumen, spreadsheet dll ?*

Biasanya aku menggunakan milik Google untuk mengatasi itu, Goodgle sendiri memiliki aplikasi
seperti microsoft yang bisa berjalan di browser.

*Lalu bagaimana masalah mic ?*

Aku belum menemukaan solusinya sampai saat ini, tapi bagiku sudah cukup selama masih berjalan
lancar tanpa kendala.

Selama aku menggunakan linux, aku kadang tertarik mengkostumisasi. Aku mencoba beberapa Window
Manager diantaranya:

- **I3** : Pertama kali aku mengenal window manager.
- **DWM** : Tidak sesederhana I3 karena setiap mengubah konfigurasi perlu compile ulang kode.
- **Xmonad** : Seperti DWM tetapi lebih bebas dalam kostumisasi.
- **Awesome** : Mirip I3 sederhana tapi lebih banyak fiturnya dan dalam kostumisasi.

Dari semua diatas aku sangat menyukai DWM karena sangat sedikiti shorcut yang aku terapkan.
Aku hanya mengubah sedikit konfigurasi bawaan dari user interface cuma mengubah jenis huruf dan
untuk tidak menambahkan nya lagi `shorcut`, kemudian untuk penambahan shorcut aku menggunakan `sxhkd`.

```plaintext
super + x
	st
```

Jadi tidak perlu menjalankan perintah `sudo make install` ketika aku menambahkan `shorcut`.
Karena cukup memulai ulang sxhkd daemon, secara otomatis sudah di terapkan.

Itulah petualanganku ketika menggunakan linux.
