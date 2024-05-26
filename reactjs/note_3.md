# LATIHAN CRUD REACTJS 
> source youtube **M Fikri**

## Buka file productlist.js

- Pertama 

 ```jsx
import {useState , useEffect} from 'react';
 ```
- mendeklarasi product dengan useState

 ```jsx
const [products, setProducts] = useState([]);
 ```

- membuat fetchData ke api dengan async await ( try and catch )

 ```jsx
 const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/products');
            const data     = await response.json()
            setProducts(data);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
 ```

- deklarasi useEffect dengan memanggil fetchData dengan parameter ke dua emptyarray[]

```javascript
   useEffect(() => {
       fetchData();
   }, [])
```

- Melooping object dari api ke table dengan jsx ( disini mengguanakn map )

```jsx
<tbody>
    {products?.map((product, index) => (
        <tr key={ product.id }>
            <td>{ index+1 }</td>
            <td>{ product.title }</td>
            <td>{ product.price }</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    ))}
</tbody>
```
- Membuat fungsi tombol edit , pertama membuat router di index.js
 ```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 ```
- dan halaman yg mau di tambahkan router misal di sini <Edit/> page

- Mengganti halaman render dari <App /> menjadi     <RouterProvider router={router} />
 ```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
 ```
- deklarasi router dengan function createBrowserRouter berisi path dan element

 ```jsx
const router = createBrowserRouter([{
        path: '/',
        element: <App />,
    },
    {
        path: '/edit/:id',
        element: <EditProduct />,
    },
])
 ```
- EditProduct.js,menulis form terlebih dahulu supaya halaman bisa di lihat

 ```jsx
<form onSubmit={updateProduct}>
    <div>
        <label>Title</label>
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
        </div>
    </div>
    <div>
        <label>Price</label>
        <div>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price"/>
        </div>
    </div>
    <div>
        <div>
            <button>Update</button>
        </div>
    </div>
    <p>{title} - { price }</p>
</form>
 ```
- import useState,useEffect from react untuk menampilkan data di kolom input dan menyimpan kembali ke api , dan untuk melakukan load ke api otomatis ketka halaman di render
- import useNavigate , useParam from react-router-dom mengambil parameter dari url yaitu disni id product dan navigate untuk mengalihkan page ketika aksi selesai

 ```jsx
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate          = useNavigate();
    const { id }            = useParams();
 ```
- (use effect sebaiknya di tulis setelah function selesai di deklarasi )
 ```jsx
    useEffect(() => {
        getProductById()
    }, []);
 ```
- deklarasi function getProductById untuk mendapatkan link by id harus menggunakan UseParam

 ```jsx
    const getProductById = async () => {
        const response   = await fetch(`http://localhost:8080/products/${id}`);
        const data       = await response.json();
        setTitle(data.title);
        setPrice(data.price);
        console.log(data);
 ```
- response merupakan request ke api sesuai id yg di inginkan
- data merupakan hasil dari request ke server kemudian di parsing oleh function json()
- setTitle(data.title) dan satunya merupakan data dari server di simpan ke variable title dilakukan oleh usestate
- deklarasi function updateProduct
```jsx
        const updateProduct = async (e) => {
            e.preventDefault();
            const product = { title, price };
            await fetch(`http://localhost:8080/products/${id}`, {
                method:  "PUT",
                body:    JSON.stringify(product),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigate('/');
        }
```
- menggunakan (e) e.preventDefault() parameter dari input karena ini merupakan form jadi untuk mencegah aksi default ( refresh page) ketika disubmit ,

 ```jsx
    const product = { title, price };  
 ```
  >   membuat object dengan 2 parameter menerima dari input

- kemudian request ke API dengan metode PUT dengan memparsing data dari input ke JSON.Stringify(product) yang mana product data dri input
- navigate adalah aksi setelah sukses di arahkan ke home
- sekarang membuat add produk
- impord component di index lalu menambahkan router baru edit file AddProduct.js

 ```jsx
import usestate from 'react'
import useNavigate from 'react-router-dom'
 ```
- deklarasi usestate dan usenavigate seperti diatas , lalu membuat form

 ```jsx
<form onSubmit={saveProduct}>
    <div>
        <label>Title</label>
        <div>
            <input type="text" onChange={(e) => setTitle(e.target.value)}/>
        </div>
    </div>
    <div>
        <label>Price</label>
        <div>
            <input type="text" onChange={(e) => setPrice(e.target.value)}/>
        </div>
    </div>
    <button>Submit</button>
</form>
 ```
- deklarasi function saveProduct
 ```jsx
   const saveProduct = async (e) => {
        e.preventDefault();
        const product = { title, price };
        await fetch(`http://localhost:8080/products`, {
            method:  "POST",
            body:    JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate('/')
    }
```
- Keterangan sama seperti di atas bedanya methodnya ini POST karena menambahkan data
- Menuj productList.js untuk mmbuat fungsi button edit dan delete

 ```jsx
impor {link} from 'react-router-dom';
 ```
- ubah button  edit menjdai link ( menggunakan product.id karenna itu hasil looping dari map
- jadi itu seperti mengirimkan parameter angka ke fungction deleteProduct

 ```jsx
<Link to={`/edit/${product.id}`}>Edit</Link>
 ```
- menambahkan fungsi tombol delete

 ```jsx
<button onClick={() => deleteProduct(product.id)}>Delete</button>
 ```
- kemudian deklarasi fungsi deleteProduct (id) parameter id dari klik tombol delete
- menggunakan fetchData() untuk merender data kembali dan menampilkan yg baru

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
