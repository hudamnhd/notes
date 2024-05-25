<!-----
Conversion time: 1.98 seconds.
Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β36
* Fri May 24 2024 08:22:47 GMT-0700 (PDT)
* Source doc: Learn ReactJS
----->




# What is React ?
         
React is Library Javascript for building User Interface a app or web, React run in server side as single page application.
React often compare with angular and vue.
Why use React Js? React is very fast and light, most popular, use jsx syntax, use virtual dom.
React Hooks = alternatif class component


```bash
npx create reactapp

```

**Struktur Folder **

index.html merepresentasikan spa
React mengguakan JSX syntax dengan cirikhas className
index.js merupakan entripoint

# Dynamic Values? 

**Menggunakan template literal**

```jsx
import React from 'react'

export const App = () => {
    const title = "This is Title";
  return (
    <div>{title}</div>
  )
}
```

**Component? react adalah single page aplication yg terdapat multiple component**
create Folder Components ketika membuat file menggunakan huruf kapital ( Header.js ) lalu di import ke app.js 

# Click Event 

**([https://www.w3schools.com/react/react_events.asp](https://www.w3schools.com/react/react_events.asp))**

Click event dalam React JS digunakan untuk menangani aksi pengguna ketika tombol atau elemen lainnya diklik. Untuk menangani click event, kita bisa menambahkan properti onClick pada elemen HTML yang ingin kita deteksi klik-nya. 

### Contoh:

```jsx
import React from 'react'

export const App = () => {

  const handleClick = () => {
    console.log('Button clicked');
  }

  return (
    <>
        <button onClick={() => console.log('Huda')}>Btn</button>
        <button onClick={handleClick}>Btn</button>
    </>
  )
}
```

# useState Hook

digunakan untuk manipulasi DOM ketika button di click bisa merubah data
useState Hook: useState Hook digunakan untuk mengatur dan memperbarui state pada komponen React. Dengan menggunakan useState, kita dapat membuat state dan menentukan nilai awalnya, serta memperbarui nilai tersebut dengan menggunakan fungsi setstate. Contoh:


```jsx
import { useState } from 'react';

export const App = () => {
const [products, setProducts] = useState([]);  //init useState


  const handleClick = () => {
    setPrice(data.price); //call Function

  }

  return (
    <>
        <button onClick={() => console.log('Huda')}>Btn</button>
        <button onClick={handleClick}>Btn</button>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

```

**useState **
**adalah sebuah hook yang disediakan oleh React untuk mengelola state dalam sebuah komponen fungsional**. useState menerima sebuah parameter awal (initial state) dan mengembalikan sebuah array yang berisi dua nilai, yaitu nilai state terbaru dan sebuah fungsi untuk mengubah nilai state tersebut.

Penggunaan useState dalam kasus data type object adalah sebagai berikut:

Misalkan kita ingin membuat state untuk menyimpan data produk, yang terdiri dari beberapa properti seperti title, price, dan description. Kita dapat menggunakan useState untuk membuat state awal dengan nilai default sebagai sebuah objek dengan properti tersebut.

### Contoh penggunaannya:

```jsx
import React, { useState } from "react";

function Product() {

  const [product, setProduct] = useState({
    title:       "",
    price:       0,
    description: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });

  }

  return (
    <div>
      <label>
        Title:
        <input type="text" name="title" value={product.title} onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={product.description} onChange={handleInputChange} />
      </label>
    </div>
  );
}

export default Product;
```

Pada contoh di atas, kita menggunakan useState untuk membuat state product dengan nilai awal sebagai sebuah objek dengan properti title, price, dan description. Ketika pengguna mengisi nilai pada form input, fungsi handleInputChange akan dipanggil dan menggunakan spread operator ... untuk menyalin nilai objek product, lalu menimpa nilai dari properti yang diubah oleh pengguna menggunakan cara name:value. Kemudian, kita menggunakan setProduct untuk mengupdate nilai state product dengan nilai yang baru.

Dalam kasus ini, penggunaan useState sangat berguna untuk mengelola state pada aplikasi React yang kompleks, seperti data yang terdiri dari banyak properti dan tipe data object. Dengan menggunakan useState, kita dapat mengupdate nilai state secara dinamis sesuai dengan interaksi pengguna dengan aplikasi.

berikan kasus perbedaan state , useState dan props secara detail 

State, useState, dan props adalah konsep fundamental dalam React untuk mengelola dan memperbarui data dalam sebuah komponen.



## State
State adalah objek JavaScript yang digunakan untuk menyimpan data dalam sebuah komponen. 
Setiap komponen dapat memiliki state-nya sendiri, yang dapat digunakan untuk menentukan kondisi dan perilaku dari sebuah komponen. 
State biasanya diinisialisasi dalam constructor sebuah class komponen dan dapat diubah dengan menggunakan fungsi setState. 
Perubahan pada state akan memicu rendering ulang pada komponen.

### Contoh:

```jsx
class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {

    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

Pada contoh di atas, kita membuat state count dengan nilai awal 0 dalam constructor. 
Ketika pengguna menekan tombol Increment, fungsi increment akan dipanggil dan menggunakan setState untuk menambah nilai state count sebesar 1. 
Kemudian, nilai state count akan diupdate dan merender ulang komponen.

# Looping list
menggunakan map dan mereturn ke jsx untuk melooping menggunakan key 
Looping List: Looping list dalam React JS digunakan untuk menampilkan daftar item yang diperoleh dari array. 
Untuk melakukan looping list, kita dapat menggunakan metode map() pada array untuk membuat setiap item menjadi elemen HTML. 

### Contoh:

```jsx
import React from 'react'

export const App = () => {
  const products = [];

  return (
        <tbody>
            {products.map((product, index) => (
            <tr key={product.id}>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>							
                </td>
            </tr>
                ))}
        </tbody>
  )
}

function List() {
  const items = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
```

 ## Looping with map()

untuk menggunakan fungsi map() dalam React JSX untuk menampilkan data dari array object ke dalam tabel, Anda dapat melakukan hal berikut:

```jsx
import React from 'react';

const users = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 20 }
];

function UserTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
```

Pada contoh di atas, kita memiliki sebuah array users yang berisi beberapa objek yang memiliki properti id, name, dan age. 
Kemudian, kita menggunakan fungsi map() untuk melakukan iterasi pada setiap objek dalam array users, dan menghasilkan elemen JSX untuk setiap objek.

Setiap elemen JSX yang dihasilkan akan berisi nilai properti id, name, dan age dari setiap objek, yang akan ditampilkan dalam sebuah tabel.
Perhatikan bahwa kita menggunakan properti key pada setiap elemen <tr> untuk memberikan identifier yang unik kepada setiap elemen, sehingga React dapat mengoptimalkan pengubahan yang terjadi pada daftar.

Dengan cara ini, kita dapat menampilkan data dari array object ke dalam sebuah tabel dengan menggunakan fungsi map() dalam React JSX.


# 6. Props

**(https://www.w3schools.com/react/react_props.asp)**

Menggunakan Variabel ke dalam komponen lain emnggunakan propsProps: 
    Props dalam React JS digunakan untuk mengirimkan data dari sebuah komponen ke komponen lainnya. 
    Props dapat didefinisikan pada komponen induk dan kemudian diteruskan ke komponen anak melalui properti yang ditentukan. 

### Contoh:

```jsx
function Parent() {
  const name = 'John';
  return (
    <Child name={name} />
  )
}

function Child(props) {
  return (
    <p>Hello, {props.name}</p>
  )
}
// alternatif
function Child({name}) {
  return (
    <p>Hello, {name}</p>
  )
}

```


# UseEffect Hook 
**([https://www.w3schools.com/react/react_useeffect.asp](https://www.w3schools.com/react/react_useeffect.asp))**

merupakan side effect ketika melakukan sesuatu
setelah rendering atau setelah click button dll

contoh dibawah ini fungsi fetchData akan di jalankan ketika awal load.

```jsx
useEffect(() => {
    fetchData()
}, [])
```

digunakan untuk mengeksekusi efek samping pada komponen React, seperti memuat data dari API atau memperbarui judul halaman. 
useEffect dijalankan setelah rendering komponen dan dapat dipanggil beberapa kali selama siklus hidup komponen. 

### Contoh:

```jsx
import { useState, useEffect } from 'react';

function Title() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```


# React Router 
**([https://reactrouter.com/en/main/start/tutorial](https://reactrouter.com/en/main/start/tutorial))**

React Router: React Router digunakan untuk menangani navigasi antar halaman pada aplikasi web React. React Router dapat digunakan untuk membuat tautan (link) dan memuat halaman secara dinamis, serta menambahkan parameter ke URL. 

### Contoh:
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

**Bulma Css (Belum di coba )**

**JSON Server**

**API  http://localhost:8080/products**

# Fetch data ke API 

```jsx

 const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/products');
            const data = await response.json()
            setProducts(data);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
```

Kode di atas adalah sebuah fungsi asinkron yang bertujuan untuk mengambil data dari sebuah API pada alamat http://localhost:8080/products.

Cara kerjanya adalah sebagai berikut:

1. Fungsi fetchData dijalankan, dan mengirimkan sebuah permintaan HTTP GET ke alamat API tersebut dengan menggunakan fungsi fetch().
2. Setelah server merespon permintaan tersebut, hasil respon dari server akan disimpan di dalam variabel response.
3. Setelah itu, fungsi json() akan dipanggil pada variabel response untuk mengonversi data dari format JSON ke dalam objek JavaScript. Kemudian hasil konversi tersebut akan disimpan ke dalam variabel data.
4. Terakhir, fungsi setProducts(data) akan dipanggil untuk mengatur data yang telah diambil dari API ke dalam state products pada komponen React yang menggunakan fungsi fetchData.

Dalam hal ini, fungsi fetchData menggunakan kata kunci await pada pemanggilan fungsi fetch dan response.json(). 
Hal ini bertujuan agar kode akan berhenti sejenak saat menunggu respons dari server sebelum melanjutkan ke baris kode selanjutnya. 
Oleh karena itu, fungsi fetchData harus didefinisikan sebagai async function.



## Async JavaScript 
adalah konsep dalam pemrograman JavaScript di mana kode JavaScript tidak akan menunggu proses yang sedang berjalan selesai sebelum melanjutkan ke proses berikutnya. 
Alih-alih menunggu proses selesai, kode akan melanjutkan eksekusi dan akan kembali ke proses yang sedang berjalan nanti ketika proses tersebut selesai.

Contoh penggunaan async JavaScript adalah ketika mengambil data dari server. 
Misalnya, ketika Anda ingin mengambil data dari server menggunakan AJAX, Anda dapat menggunakan async/await untuk memastikan bahwa kode Anda tidak terjebak menunggu respon dari server.

Berikut adalah contoh kode JavaScript yang menggunakan async/await untuk mengambil data dari server:

```jsx
async function getDataFromServer() {
  try {
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getDataFromServer();
```

Dalam kode di atas, fungsi getDataFromServer menggunakan async/await untuk memastikan bahwa kode tidak menunggu respon dari server sebelum melanjutkan ke baris berikutnya. 
Fungsi ini menggunakan fetch untuk mengambil data dari server dan await digunakan untuk menunggu respon dari server. 
Setelah data berhasil diambil, fungsi akan mencetak data di console. 
Jika terjadi kesalahan saat mengambil data dari server, fungsi akan mencetak pesan kesalahan di console



## post data

```jsx
   const saveProduct = async (e) => {
        e.preventDefault();

        const product = { title, price };

        await fetch(`http://localhost:8080/products`, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate('/')
    }
```



## update data

```jsx
      const updateProduct = async (e) => {
            e.preventDefault();

            const product = { title, price };

            await fetch(`http://localhost:8080/products/${id}`, {
                method: "PUT",
                body: JSON.stringify(product),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigate('/');
       }
```



## delete
```jsx
    const deleteProduct = async (id) => {

        await fetch(`http://localhost:8080/products/${id}`, {
                method: "DELETE",
            })
            .then(() => {
                alert('Data berhasil dihapus');
            });

        fetchData();
    }
```

Kode di atas adalah sebuah fungsi asinkron yang bertujuan untuk menghapus data produk pada API dengan ID tertentu yang diberikan sebagai parameter fungsi.
Cara kerjanya adalah sebagai berikut:

1. Fungsi deleteProduct dijalankan dengan parameter id yang akan dihapus dari API.
2. Fungsi fetch() digunakan untuk mengirimkan permintaan DELETE ke API dengan URL yang mengandung parameter id yang diberikan. Perlu diingat bahwa HTTP method DELETE digunakan untuk menghapus data pada server.
3. Headers Content-Type diatur sebagai application/json, yang menunjukkan bahwa data yang dikirimkan ke server dalam format JSON.
4. Fungsi fetch() akan mengembalikan sebuah Promise, tetapi karena kita tidak perlu melakukan tindakan lebih lanjut setelah mengirim permintaan DELETE ke server, maka kita tidak perlu menunggu hasil respons server dan hanya menunggu proses request DELETE selesai. Oleh karena itu, kita menggunakan kata kunci await pada pemanggilan fetch() untuk menunggu proses request selesai sebelum melanjutkan ke baris kode selanjutnya.
5. Setelah request DELETE berhasil dilakukan, fungsi fetchData() dipanggil untuk memperbarui data produk pada aplikasi React yang menggunakan fungsi deleteProduct.

Dalam kasus ini, parameter id dibutuhkan untuk menentukan data produk mana yang akan dihapus pada API. Kita menggabungkan parameter id dengan URL untuk memperjelas kepada server tentang data yang ingin dihapus. Kemudian, ketika fungsi deleteProduct dipanggil dengan suatu nilai id, fungsi tersebut akan mengirimkan permintaan DELETE ke server untuk menghapus data produk dengan ID tersebut.



# Referensi fungsi Filter


```html
<!DOCTYPE html>
<html>
    <body>
        <h1>JavaScript Arrays</h1>
        <h2>The filter() Method</h2>
        <p>Click "Test" to get every element in the array that has a value above this number:</p>
        <p><input type="number" id="ageToCheck" value="40"></p>
        <button onclick="myFunction()">Test</button>
        <p id="demo"></p>

        <script>
        const ages = [32, 33, 12, 40];

        function checkAge(age) {
            return age != document.getElementById("ageToCheck").value;
        }

        function myFunction() {
            document.getElementById("demo").innerHTML = ages.filter(checkAge);
        }

        document.getElementById("demo").innerHTML = ages;
        </script>
    </body>
</html>
```



14. Arrow function 

digunakan di dalam event handler seperti onClick untuk membuat fungsi yang baru setiap kali render dilakukan. Hal ini berguna untuk menghindari masalah yang mungkin terjadi ketika kita menggunakan fungsi langsung di dalam event handler.
Tanpa arrow function, kita dapat menulis event handler seperti berikut:

```jsx
<button onClick={deleteProduct(product.id)} style={{ padding: "5px" }} href="">Delete</button>
```

Namun, perhatikan bahwa kita memanggil deleteProduct langsung di dalam event handler. Ini berarti deleteProduct akan dieksekusi segera setiap kali render dilakukan, bukan ketika tombol Delete diklik. 
Akibatnya, ini mungkin tidak berfungsi dengan benar atau bahkan menghasilkan kesalahan.

Untuk menghindari masalah ini, kita dapat menggunakan arrow function untuk membuat fungsi baru yang akan dipanggil saat tombol Delete diklik. Seperti ini:

```jsx
<button onClick={() => deleteProduct(product.id)} style={{ padding: "5px" }} href="">Delete</button>
```

Dalam contoh ini, () => deleteProduct(product.id) akan membuat fungsi baru yang akan dipanggil saat tombol Delete diklik. 
Ini memastikan bahwa deleteProduct hanya dipanggil ketika tombol Delete diklik, bukan setiap kali render dilakukan.



# useParams

adalah salah satu hooks bawaan React yang digunakan untuk mengambil parameter dari URL pada komponen React. 
Hooks ini digunakan untuk mengambil data dinamis yang dikirimkan melalui URL, seperti ID, nama pengguna, atau jenis item.

Contoh penggunaan useParams adalah sebagai berikut:

Misalnya, kita memiliki halaman detail produk di toko online. 
URL produk mungkin terlihat seperti ini: https://toko-online.com/products/1234. Di mana 1234 adalah ID produk yang dinamis. 
Kita dapat menggunakan useParams untuk mengambil ID produk dari URL dan menampilkannya di halaman detail produk.

```jsx

import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();

  // menggunakan productId untuk menampilkan detail produk

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
      {/* tampilkan detail produk */}
    </div>
  );
}
```

Dalam contoh di atas, useParams digunakan untuk mengambil productId dari URL dan menampilkan di halaman detail produk. 
Kita dapat mengakses nilai parameter di dalam komponen dengan menggunakan objek yang dikembalikan oleh useParams(). 
Objek tersebut akan memiliki properti dengan nama yang sama dengan parameter yang kita definisikan pada path URL. 
Dalam kasus ini, objek tersebut akan memiliki properti productId dengan nilai 1234.
