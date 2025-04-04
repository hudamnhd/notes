---
title: "Cara Root Redmi 9T"
description: "Cara Root Redmi 9T dengan magisk"
date: "Apr 4 2025"
---

Ini adalah pengalaman pertama saya melakukan rooting HP merk Xiaomi. Saya mencari tutorial di
google dan menemukan di [Forum XDA](https://xdaforums.com/t/what-is-the-best-and-safest-way-to-root-redmi-9-power.4343897/#post-85741557).
Karena cara rooting ada beberapa versi, saya mencoba memilih cara yang mudah.
Cara yang saya temukan dari dari komentar yaitu merujuk ke video channel youtube orang India [Tech InfoMania](https://www.youtube.com/watch?v=ZHkuWrn84wg)

Cara dari channel youtube tersebut:
1. Hp Xiaomi sudah unlock bootloader [( Tutorial unlock bootloader )](https://www.youtube.com/watch?v=-mzyvxR32e0)
2. Backup semua data seperti foto, document, dll
3. Batre minimal tersisa 50-60%
4. Logout akun xiaomi
5. Logout semua akun google
6. Menghapus lock screen
7. Mendownload bahan root
    1. [TWRP](https://androidfilehost.com/?fid=2188818919693773061)
    2. [Magisk](https://magiskmanager.com/downloading-magisk-manager/)
8. Menginstal adb dan fasboot, karena saya pakai **linux** jadi cukup dengan
      ```bash
      sudo apt install adb fastboot
      ```
9. Kemudian masuk ke mode fastboot dengan mematikan hp, Kemudian menyalakan dengan <mark>tombol power +
   vol bawah</mark>
10. Selanjutnya masuk ke folder dimana tempat TWRP dan magisk tersimpan
      ```bash
      cd Download
      ```
11. Mengganti nama file `twrp_lime_R9T_3.5.1.A10_30-03-2021_d-bl.img` jadi `recovery.img` dan
    file `magisk.apk` jadi `magisk.zip` .
12. Jalankan perintah berikut
      ```bash
      sudo fastboot devices
      ```
      jika device terdeteksi maka jalankan perintah selanjutnya

      ```bash
      sudo fastboot flash recovery recovery.img
      ```
      file `recovery.img` adalah file yang di rename sebelumnya, jika sukses lanjut perintah reboot ke recovery

      ```bash
      sudo fastboot reboot
      ```
      biasanya dibantu dengan menekan <mark>tombol volume atas</mark> ketika proses booting.
13. Setelah masuk mode recovery tentu TWRP sudah terinstal.
14. Kemudian saya harus melakukan **format data** lalu reboot recovery lagi, karena tidak bisa langsung menyalin file `magisk.zip`
    ke dalam internal storage.
15. Setelah masuk mode recovery lagi Kemudian baru bisa menginstal `magisk.zip`, jika sudah selesai
    langsung reboot system. Untuk booting pertama kemungkinan memakan waktu lama karena efek
    samping melakukan format data.
16. Jika sudah selesai booting, tampilan hp seperti baru dan perlu setup awal.
17. Selesai setup awal, kemudian buka aplikasi magisk dan otomatis muncul popup untuk mengunduh
    versi terbaru, jika sudah selesai kemudian buka magisk lagi jika muncul
    popup pemberitahun perlu persiapan tambahan klik `OK` dan device otomatis reboot.
18. Selesai reboot tentu proses ini sudah selesai, karena `magisk` sudah terinstal dan berfungsi.

#### Aplikasi favorit ketika sudah memiliki askses root
1. Titanium Backup
2. Greenify
3. AdAway
