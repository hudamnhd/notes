---
title: "Berpetualang Menemukan Neovim"
description: "Berpetualang Menemukan Neovim"
publishDate: "Apr 14 2024"
tags: ["story"]
---

Ketika pertama kali aku belajar Programming aku tentu mengikuti instruksi dari Instruktor dari
video yang aku tonton, rata-rata menggunakan text editor VSCode . Tentu aku juga
menggunakannya karena memang VSCode sangat bagus dan memiliki banyak fitur yang memudahkan pemula.
Saat itu aku sedang praktik video Fullstack dengan Next JS, ternyata ketika sedang membuka banyak
tab dengan waktu yang lama penggunaan ram semakin naik, karena juga fitur LSP dari VSCode.

Seringkali komputernya hang ketika itu, karena memang hanya memiliki 6GB ram. Aku mulai mencari
alternatif lalu menemukan Sublime Text. Akhirnya aku menggunakan Sublime Text untuk belajarku.
Tidak lama kemudian aku tertarik dengan `VIM`. Tetapi ketika mencobanya aku sangaat bingung, karena
sangat berbeda seperti VSCode atau Sublime. Aku mungkin masih menggunakan Sublime selagi belajar
menggunakan `VIM`.

Setelah aku mulai lancar navigasi dasat dengan `VIM` aku mulai tertarik untuk menginstall plugin.
Ternyata di `VIM` tidak bisa menyalin text dari `VIM` ke luar semisal `browser`. Setelah aku baca
di halaman rilis `VIM` aku harus mendownload versi GUI-nya untuk bisa menggunakan fitur clipboard.

Kemudian aku mulai melihat `Neovim` fork dari `VIM` yang memiliki fitur bawaan clipboard. Tentu
ketika menggunakan neovim semua berjalan lancar. Aku mengubah konfigurasiku dengan bahasa `Lua`.
Saat itu aku sama sekali tidak mengerti `Lua`. Aku hanya menggunakan konfigurasi orang lain dari
github, lalu aku sedikit memodifikasinya.

Aku mungkin tidak terlalu mengerti bahasa `lua` secara dalam. Aku hanya mengerti untuk keperlua
konfigurasi saja seperti menulis keymap, funcion, import file. Dari Neovim aku mulai mengenal
alat-alat yang bagus seperti plugin `Telescope` yang menggunakan `ripgrep` atau `fd / find`.
Selain Telescope aku menemukan FZF yang lebih ringan. Bahkan bisa digunakan di luar Neovim karena
terinstal secara global.Seketika itu aku hampir jarang menggunakan file explorer, kecuali ingin
melihat struktur folder.

Tentu kadang menggunakan `Neovim` tidak makin produktif, alih-alih sibuk mencari plugin atau
mengubah konfigurasi. Biasanya itu terjadi ketika diawal karena mungkin masa penyesuaian. Aku
sendiri pernah mengalaminya, aku mencari beberapa plugin yang cocok kemudian menambahkan nya ke
konfigurasiku. Dalam kasusku aku pernah mencoba beberapa `color scheme` yang cocok untukku.
Tetapi pada akhirnya aku menggunakan `color scheme` bawaan dari Neovim yang menurutku sangat
sederhana.

Di Neovim memiliki fitur subtitusi yang memungkinkan kita bisa mengubah text apapun dalam folder
tersebut. Fitur ini sangat membantu ketika kita memiliki beberapa file yang ingin kita ubah dengan
pola tertentu.

Disisi lain aku mengalami masalah dengan file yang berukuran besar. Salah satu masalahnya Neovim
menjadi lambat karena plugin `tree-sitter`. Mungkin disebabkan karena spesifikasi komputerku rendah
juga. Tetapi waktu itu aku mencoba membandingkan dengan `Helix` Editor yang memiliki fitur bawwan
tree-sitter. Di `Helix` semua file berukuran besar berjalan lancar. Tetapi aku sudah terlanjur
menyukai Neovim, jadi solusiku cukup men-disable `tree-sitter` dan menggunakan `highlight` bawaan
dari Neovim.

Sejauh ini aku merasa nyaman menggunakan Neovim karena sangat ringan, aku juga bisa mengkonfigurasi
fitur auto complete mirip di `VSCode`. Saat ini aku menjadikannya Text Editor utama untuk
sehari-hari. Aku sudah terbiasa dengan `Normal Mode` dan `Insert Mode`. Karena dengan Neovim kita
tak perlu lagi menggunakan Mouse untuk navigasi , semua bisa di lakukan hanya dengan keyboard.
