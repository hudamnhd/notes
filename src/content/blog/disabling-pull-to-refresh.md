---
title: "Disabling pull to refresh Chrome browser"
description: "Pengalaman mengatasi masalah perilaku bawaan browser Chrome di Android."
publishDate: "Nov 1 2024"
tags: ["css"]
---

## Pengalaman Mengatasi Masalah Aplikasi Web di Browser Mobile

Ketika saya mendevelop sebuah aplikasi berbasis web, tentu harus bisa di jalankan di beberapa
perangkat. Saya pernah mengalami masalah di sebuah fitur chat, ketika di buka dari handphone dengan
browser **google chrome**.

### Masalah
Pengguna mengalami masalah ketika di tarik ke bawah browser melakukan perilaku bawaannya yaitu
merefresh halaman.

Tentu hal ini jadi masalah karena saya sudah menggunakan Framework Remix dengan integrasi pubnub
listener yang mana sudah otomatis pesan terupdate secara otomatis ketika ada pesan baru.

### Solusi
Cara ini mengatasi masalah saya dimana saya bisa menangguhkan perilaku bawaan browser ketika di
tarik melakukan refresh halaman.
Hanya menambahkan kode css di bagian body sekarang masalah sudah teratasi dan browser google chrome
tidak melakukan perilaku bawaan ketika di tarik kebawah.

```css
body {
  /* Disables pull-to-refresh but allows overscroll glow effects. */
  overscroll-behavior-y: contain;
}
```
Sumber: [Chrome Dev](https://developer.chrome.com/blog/overscroll-behavior#disabling_pull-to-refresh)
