---
title: "Root Redmi 9T"
description: "Pengalaman melakukan rooting HP Xiaomi Redmi 9T dengan Magisk."
publishDate: "Apr 4 2025"
tags: ["tutorial"]
updatedDate: 5 Apr 2024
---

## Pengalaman Pertama Saya
Ini adalah pengalaman pertama saya melakukan rooting HP merk Xiaomi. Saya mencari tutorial di Google dan menemukan di [Forum XDA](https://xdaforums.com/t/what-is-the-best-and-safest-way-to-root-redmi-9-power.4343897/#post-85741557).

## Pencarian Tutorial Rooting
Karena cara rooting ada beberapa versi, saya mencoba memilih cara yang mudah. Cara yang saya temukan dari komentar merujuk ke video channel YouTube orang India, [Tech InfoMania](https://www.youtube.com/watch?v=ZHkuWrn84wg).

## Langkah-Langkah Rooting Redmi 9T

### Mengaktifkan Developer Options
Sebelum root, pastikan developer options sudah aktif. Ini diperlukan untuk membuka opsi seperti OEM Unlocking.
Cara Mengaktifkan developer option biasanya dengan menekan versi build di tentang ponsel sekitar
4-5 kali.

> Sebelum melakukan unlock bootloader dan root, pastikan untuk membackup semua data penting di ponsel.

### Persiapan Awal
1. **Backup Data**:
   Pastikan backup semua data penting.

2. **Unlock Bootloader**:
   Pastikan HP Xiaomi sudah melakukan [Unlock Bootloader](https://www.youtube.com/watch?v=-mzyvxR32e0).

3. **Baterai**: Pastikan baterai minimal tersisa 50-60% agar proses rooting berjalan lancar.

4. **Logout Akun Xiaomi dan Google**:
   Sebelum melakukan rooting, pastikan untuk logout dari akun Xiaomi dan semua akun Google yang terhubung ke perangkat. Hal ini penting untuk menghindari potensi masalah dengan keamanan atau sinkronisasi data saat proses rooting berlangsung.

5. **Hapus Lock Screen**:
   Pastikan tidak ada lock screen yang aktif.

### Mengunduh Bahan Rooting
6. **Download File Rooting**:
   Siapkan beberapa bahan yang dibutuhkan:
   - [TWRP](https://androidfilehost.com/?fid=2188818919693773061)
   - [Magisk](https://magiskmanager.com/downloading-magisk-manager/)

7. **Install ADB dan Fastboot**:
   Jika menggunakan **Linux**, kamu bisa menginstal ADB dan Fastboot dengan perintah:
   ```bash
   sudo apt install adb fastboot
   ```

### Melakukan Rooting
8. **Masuk ke Mode Fastboot**:
   Matikan HP, kemudian nyalakan dengan menekan tombol **Power + Volume Down** untuk masuk ke mode fastboot.

9. **Arahkan ke Folder Penyimpanan**:
   Masuk ke folder tempat kamu menyimpan file TWRP dan Magisk:
   ```bash
   cd Download
   ```

10. **Rename File**:
    Rename file TWRP dan Magisk sebagai berikut:
    - `twrp_lime_R9T_3.5.1.A10_30-03-2021_d-bl.img` jadi `recovery.img`
    - `magisk.apk` jadi `magisk.zip`

11. **Flash TWRP Recovery**:
    Jalankan perintah berikut untuk memastikan perangkat terdeteksi:
    ```bash
    sudo fastboot devices
    ```

    Jika perangkat terdeteksi, jalankan perintah untuk mem-flash TWRP:
    ```bash
    sudo fastboot flash recovery recovery.img
    ```

12. **Reboot ke Recovery Mode**:
    Setelah flashing berhasil, reboot perangkat ke recovery mode:
    ```bash
    sudo fastboot reboot
    ```
    Biasanya, kamu perlu menekan tombol **Volume Up** saat perangkat mulai booting.

13. **Masuk ke Mode Recovery**:
    Setelah masuk mode recovery, TWRP sudah terinstal dengan benar.

### Install Magisk
14. **Format Data**:
    Lakukan **format data** melalui TWRP dan reboot recovery lagi, karena tidak bisa langsung menyalin file `magisk.zip` ke dalam internal storage.

15. **Install Magisk**:
    Setelah masuk recovery lagi, instal `magisk.zip`. Setelah selesai, reboot sistem. Proses booting pertama mungkin membutuhkan waktu lebih lama karena format data sebelumnya.

16. **Setup Awal**:
    Setelah perangkat selesai booting, lakukan setup awal seperti biasa.

17. **Install Versi Terbaru Magisk**:
    Setelah setup, buka aplikasi Magisk. Biasanya, akan muncul popup untuk mengunduh versi terbaru. Setelah selesai, buka aplikasi Magisk lagi dan jika muncul popup pemberitahuan, klik **OK**. Perangkat akan reboot otomatis.

18. **Selesai**:
    Setelah reboot, proses rooting selesai dan Magisk sudah terinstal serta berfungsi dengan baik.

## Aplikasi Favorit Setelah Rooting
Setelah perangkat berhasil di-root, berikut beberapa aplikasi yang saya gunakan:
1. **Titanium Backup** – Untuk melakukan backup aplikasi dan data.
2. **Greenify** – Untuk menghemat baterai dengan menghentikan aplikasi yang berjalan di background.
3. **AdAway** – Untuk memblokir iklan di seluruh perangkat.

