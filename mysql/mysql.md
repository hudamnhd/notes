Berikut adalah beberapa perintah umum yang sering digunakan dalam SQL untuk mengelola database MySQL:

- **Menampilkan semua database:**

  ```sql
  SHOW DATABASES;
  ```
- **Login:**

  ```sql
  mysql -u root -p;
  ```

- **Set or Change Password:**

  ```sql
  ALTER USER 'user_name'@'localhost' IDENTIFIED BY 'new_password';
  ```

  ```sql
  ALTER USER 'root'@'localhost' IDENTIFIED BY '12345678';
  ```

- **Menampilkan Semua Database:**

  ```sql
  SHOW DATABASES;
  ```

- **Membuat Database:**

  ```sql
  CREATE DATABASE nama_database;
  ```

- **Menggunakan Database:**

  ```sql
  USE nama_database;
  ```

- **Membuat Tabel:**

  ```sql
  CREATE TABLE nama_tabel (
      kolom1 tipe_data1,
      kolom2 tipe_data2,
      ...
  );
  ```

- **Mengambil Data:**

  ```sql
  SELECT kolom1, kolom2 FROM nama_tabel WHERE kondisi;
  SELECT * FROM nama_tabel;
  SELECT col2 FROM tb1
  ```

- **Menyisipkan Data Baru:**

  ```sql
  INSERT INTO nama_tabel (kolom1, kolom2) VALUES (nilai1, nilai2);
  ```

- **Mengubah Data:**

  ```sql
  UPDATE nama_tabel SET kolom1 = nilai1 WHERE kondisi;
  ```

- **Menghapus Data:**

  ```sql
  DELETE FROM nama_tabel WHERE kondisi;
  ```

- **Menghapus Tabel:**

  ```sql
  DROP TABLE nama_tabel;
  ```

- **Menghapus Database:**

  ```sql
  DROP DATABASE nama_database;
  ```

- **Menggabungkan Data (JOIN):**

  ```sql
  SELECT kolom1, kolom2 FROM tabel1
  JOIN tabel2 ON tabel1.kolom_id = tabel2.kolom_id;
  ```

- **Mengelola Izin Pengguna:**

  ```sql
  GRANT izin ON database_tabel_kepada 'pengguna'@'host';
  ```

- **Mengubah Password Pengguna:**

  ```sql
  ALTER USER 'pengguna'@'host' IDENTIFIED BY 'password_baru';
  ```

- **Melihat Struktur Tabel:**

  ```sql
  DESCRIBE nama_tabel;
  ```

- **Mengganti Nama Tabel:**

  ```sql
  RENAME TABLE nama_tabel_lama TO nama_tabel_baru;
  ```

- **Backup dan Restore Database:**
  Untuk backup:

  ```sql
  mysqldump -u username -p nama_database > nama_file_backup.sql
  ```

  Untuk restore:

  ```sql
  mysql -u username -p nama_database < nama_file_backup.sql
  ```

- **Menggunakan Fungsi SQL:**
  SQL juga memiliki banyak fungsi bawaan seperti `COUNT`, `SUM`, `AVG`, `MAX`, `MIN`, dan lain-lain untuk mengolah data.

