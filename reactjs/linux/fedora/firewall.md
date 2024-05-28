Untuk membuka port tertentu di firewall Fedora, Anda dapat menggunakan perintah `firewall-cmd` yang telah disediakan. Berikut adalah langkah-langkahnya:

1. **Identifikasi Port**: Pastikan Anda tahu port apa yang digunakan oleh aplikasi Anda. Dalam kasus Anda, Anda menggunakan port 3000.

2. **Buka Port**: Gunakan perintah `firewall-cmd` untuk membuka port tersebut. Berikut adalah sintaks umumnya:

    ```bash
    sudo firewall-cmd --zone=public --add-port=<port>/tcp --permanent
    ```

    Misalnya, jika Anda ingin membuka port 3000, perintahnya akan menjadi:

    ```bash
    sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent
    ```

    Pastikan untuk menggantikan `<port>` dengan nomor port yang sesuai dengan aplikasi Anda.

3. **Reload Firewall**: Setelah menambahkan aturan untuk membuka port, reload firewall agar perubahan tersebut diterapkan:

    ```bash
    sudo firewall-cmd --reload
    ```

4. **Periksa Konfigurasi**: Anda dapat memverifikasi bahwa port telah dibuka dengan menjalankan perintah:

    ```bash
    sudo firewall-cmd --zone=public --list-ports
    ```

    Anda harus melihat port yang Anda tambahkan dalam daftar yang ditampilkan.

Dengan membuka port tersebut di firewall Fedora, Anda memungkinkan koneksi melalui port tersebut untuk diizinkan, dan aplikasi Anda harus dapat diakses dari perangkat lain di jaringan.
