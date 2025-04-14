---
title: "Panduan Instalasi DWM di Debian"
description: "Berikut adalah konten markdown lengkap tentang **DWM (Dynamic Window Manager)**, termasuk cara instalasi di Debian, cara pasang dan hapus path, cara penggunaan, dan kesimpulan"
publishDate: "Apr 14 2024"
tags: ["linux"]
---

DWM (Dynamic Window Manager) adalah window manager yang ringan dan minimalis untuk sistem berbasis X11. DWM berfokus pada kecepatan dan kesederhanaan, serta memungkinkan pengguna untuk mengonfigurasi tampilan jendela secara dinamis.

## Instalasi DWM di Debian

Untuk menginstal DWM di Debian, Anda bisa mengikuti langkah-langkah berikut.

### Langkah 1: Update Sistem

Sebelum menginstal paket apapun, pastikan sistem Anda diperbarui. Jalankan perintah berikut untuk memperbarui repositori dan paket:

```bash
sudo apt update && sudo apt upgrade
```

### Langkah 2: Instalasi DWM

DWM tidak tersedia di repositori default Debian, jadi Anda perlu menginstalnya dari sumber. Berikut adalah langkah-langkah untuk menginstal DWM:

1. **Instal paket dependensi** yang diperlukan:

   ```bash
   sudo apt install build-essential libx11-dev libxft-dev libxinerama-dev
   ```

2. **Clone repository DWM** dari GitHub:

   ```bash
   git clone https://git.suckless.org/dwm.git
   ```

3. **Masuk ke direktori dwm** yang telah Anda clone:

   ```bash
   cd dwm
   ```

4. **Kompleksifikasi dan instalasi DWM**:

   ```bash
   sudo make clean install
   ```

   Perintah ini akan membangun DWM dan menginstalnya ke sistem Anda.

### Langkah 3: Menjalankan DWM

Untuk menjalankan DWM, Anda perlu mengonfigurasi display manager atau langsung menggunakan startx.

1. **Menggunakan startx**: Jika Anda tidak menggunakan display manager, jalankan perintah berikut:

   ```bash
   startx
   ```

2. **Menggunakan Display Manager**: Jika Anda menggunakan display manager seperti `lightdm` atau `gdm`, pilih sesi DWM dari menu login untuk memulai DWM.

## Cara Menggunakan DWM

DWM memiliki filosofi minimalis, sehingga tidak ada banyak pengaturan default. Setelah menjalankan DWM, Anda akan diberikan antarmuka yang sangat sederhana namun dapat disesuaikan.

### Navigasi di DWM:

- **Jendela Baru**: Tekan `Mod + Enter` untuk membuka terminal baru.
- **Pindah Jendela**: Gunakan `Mod + j` atau `Mod + k` untuk berpindah antar jendela.
- **Tutup Jendela**: Tekan `Mod + Shift + q` untuk menutup jendela aktif.
- **Buka Program**: Tekan `Mod + d` untuk membuka dmenu dan mencari aplikasi yang diinginkan.
- **Tingkatan Layar**: Tekan `Mod + h` atau `Mod + l` untuk menyesuaikan ukuran jendela secara horizontal.

**Catatan:**
- `Mod` merujuk pada kunci yang digunakan untuk menavigasi, biasanya adalah tombol `Alt` atau tombol `Super` (juga dikenal sebagai tombol Windows).

### Konfigurasi DWM:

Jika Anda ingin mengubah pengaturan atau menyesuaikan tampilan, Anda dapat mengedit file `config.h` yang ada di direktori `dwm` yang telah Anda clone.

Untuk mengeditnya:

```bash
nano config.h
```

Setelah selesai, Anda perlu build DWM dengan:

```bash
sudo make clean install
```

### **Langkah-Langkah Patching DWM dengan File .diff**

#### 1. **Download File Patch**

- **Download Patch**: <https://dwm.suckless.org/patches>.

```bash
wget https://dwm.suckless.org/patches/gridmode/dwm-gridmode-5.8.2.diff
```
#### 2. **Menerapkan Patch**

Untuk menerapkan patch pada DWM, Anda dapat menggunakan perintah `patch`. Pastikan Anda berada di dalam folder **dwm** dan file `.diff` berada di direktori yang sama atau tentukan path relatifnya.

```bash
patch -p1 < dwm-gridmode-5.8.2.diff
```

Penjelasan perintah:
- `patch`: Perintah untuk menerapkan patch pada kode sumber.
- `-p1`: Menghilangkan bagian pertama dari path di dalam file patch (misalnya, `dwm-5.8.2/` di awal setiap baris file patch).
- `< dwm-gridmode-5.8.2.diff`: Mengarahkan input dari file patch ke perintah `patch`.

#### 3. **Verifikasi Patch**

Setelah menerapkan patch, pastikan untuk memverifikasi apakah patch telah diterapkan dengan benar. Anda dapat memeriksa apakah perubahan telah diterapkan dengan melihat file yang diperbarui atau mencari fitur baru yang ditambahkan.

#### 4. **Build DWM**

Setelah patch diterapkan, Anda perlu build DWM agar perubahan tersebut diterapkan pada sistem Anda.

```bash
sudo make clean install
```

Perintah ini akan membersihkan instalasi DWM yang lama dan menginstal versi baru yang telah diperbarui dengan patch.

#### 5. **Jalankan DWM**

Setelah berhasil melakukan patch dan instalasi, Anda bisa menjalankan DWM dengan menggunakan `startx` atau memilih DWM dari display manager Anda (seperti `lightdm` atau `gdm`).

```bash
startx
```

#### 6. **Menghapus Patch (Jika Diperlukan)**

Jika Anda ingin menghapus patch yang sudah diterapkan, Anda dapat menggunakan perintah `patch` dengan opsi `-R` (reverse):

```bash
patch -p1 -R < dwm-gridmode-5.8.2.diff
```

Perintah ini akan membatalkan perubahan yang diterapkan oleh patch sebelumnya.

## Kesimpulan

DWM adalah window manager yang sangat ringan dan minimalis, cocok bagi pengguna yang ingin pengalaman desktop yang cepat dan dapat disesuaikan. Instalasi di Debian cukup sederhana, meskipun Anda perlu membangunnya dari sumber. DWM memberikan kontrol penuh atas tampilan dan perilaku jendela, tetapi membutuhkan waktu untuk menyesuaikan dan mempelajari pintasan keyboardnya.

Dengan menggunakan DWM, Anda dapat membuat lingkungan kerja yang lebih efisien dan lebih cepat, asalkan Anda siap untuk menyesuaikan dan mengonfigurasi sesuai dengan preferensi pribadi Anda.

### Penjelasan:

1. **Heading**: Saya menggunakan heading dengan format `#` untuk memisahkan bagian-bagian berbeda dari panduan ini.
2. **List**: Penggunaan list terurut dan tidak terurut untuk menampilkan langkah-langkah instalasi dan instruksi lainnya.
3. **Kode**: Menampilkan kode atau perintah shell menggunakan format blok kode (```).
4. **Penekanan**: Saya menggunakan `**bold**` untuk penekanan pada perintah dan instruksi penting.

Konten ini mencakup langkah-langkah dari instalasi hingga penggunaan DWM, serta cara mengonfigurasi dan menghapus path jika diperlukan.
