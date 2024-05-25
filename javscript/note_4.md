
## EXECUTION CONTEX , HOISTING & SCOPE
Creating phase pada global kontek (apapun urutan yang kita tulisan, variabel dan function akan selalu diatas.)
> Nama variabel = undefined jika belum di deklarasikan 
> Nama function = fn()
> Hoisting ( dari bawah ke atas spt. Narik bendera)
> Window = global object dan this = window
> Execution Phase ( menjalankan spt. Console.log)

```javascript 
console.log(sayHello);

var nama = “Huda”;
function sayHello() { 
	return `Halo, Nama saya ${nama}`; 
} 

```
//nama akan undefined karena variabel di bawah perintah console.log
Untuk deklarasi let dan const fn() akan eror


```javascript 
myVar++ | myVar  = myVar + 1
myVar           += 10; | myVar= myVar + 10;
var myStr        = "test  \"huda\" pintar "; double quote
var myStr        = "Aduh";
var vStr         = "huda " + myStr + " test";
```

### Function

#### function expression 
```javascript 
Const kalikan = function(num1, num2) { return num1 * num2 };
```

#### function declaration.
```javascript 
 function wordBlank(myNoun, myAdjective, myVerb, myAdverd) {
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverd + "to the score";
  return result;
}

console.log(wordBlank("dog" ,"bike", "run", "quickly"));
```

### Rekursif 
> Function yg memanggil dirinya sendiri
```javascript 
function tampilAngka(n) {
    if(n == 0 ) return 1;
    console.log(n);
    return tampilAngka(n-1)
}

tampilAngka(10); // akan menghasilkan angka 10 sampai 1 berurutan

 function tampilAngka(n) {
   if( n === 0){
 	return;
   }
   console.log(n);
   return tampilAngka(n-1)
 }

 tampilAngka(10);

 function faktorial(n) {
   if( n === 0) return 1;
   return n * faktorial(n-1);
 }

 console.log(faktorial(5));
```

### Callback

> Callback pada Javascript adalah sebuah nama function yang dikirimkan sebagai parameter fungsi lainnya

```javascript 
function halo(nama) { 
    alert(`Halo, ${nama}`); 
    console.log('baru ini'); 
} 

function tampilNama(callback) { 
    const nama = prompt('Masukin Namamu : '); 
    console.log('Ini dulu bos') 
    callback(nama); 
} 

tampilNama(halo); // halo adalah nama function
```

### ARRAY
> Array merupakan struktur data yang digunakan untuk menyimpan sekumpulan data dalam satu tempat. 
> Setiap data dalam Array memiliki indeks, sehingga kita akan mudah memprosesnya. 
> Indeks array selalu dimulai dari angka nol ( 0 )

>> pop() = Remove (pop) the last element:
>> push() method adds new items to the end of an array
>> Shift (remove) the first element of the array:
>> unshift() method adds new elements to the beginning of an array
>> array.slice(start, end) mengembalikan elemen yang dipilih dalam array, sebagai array baru.
>> splice() metode menambah dan/atau menghapus elemen array.menimpa array asli.
#### menggabungkan 2 array

```javascript 
 const mhs   = ['Huda', 'Muhamad', 'Nur'];
 const mhs1  = ['Huda 1', 'Muhamad 1', 'Nur 1'];
 const orang = [...mhs, 'Test', ...mhs1];
 console.log(orang);
 mengcopy Array
 const mhs   = ['Huda', 'Muhamad', 'Nur'];
 const mhs1  = [...mhs];
 mhs1[0]     = 'Coba';
 console.log(mhs1);
```
#### Mengisi array dengan Looping

```javascript 
 var myArray = [];
 var i = 0;
 while (i < 5) {
   myArray.push(i);
   i++;
 }

 var myArray = [];
 for (let index = 1; index < 10; index += 2) {
   myArray.push(index);
 
   console.log(myArray);
 }

```
#### Menjumlahkan Isi arai Dengan Looping
```javascript 
 var myArr = [2, 3, 4, 5, 6];
 var total = 0;
 for (let i = 0; i< myArr.length; i++) {
 total += myArr[i];
   }

   console.log(total);

var myArray = [[1,2,3], [4,5,6], [7,8,9]];

console.log(myArray[2][1]);
var myArray = [[1,2,3], [4,5,6], [7,8,9]];
myArray[1].push(1,2,3)

```
#### Arrow Function Menggabungkan 2 array
```javascript 
 var myConcat = (arr1, arr2) => arr1.concat(arr2);

 console.log(myConcat([1,2], [3,4,5]));
```

#### Akses Array dengan Looping
```javascript 
var arr = ["huda", "aduh", "Oke"];
 for( var i=0; i<arr.length; i++) {
   console.log(`nama ke- ${i} : ${arr[i]}`);
 }

```
### forEach()
> menjalankan fungsinya untuk setiap elemen dengan mengeksekusi dari index terkecil ke yang terbesar.forEach() — 
> mungkin sangat cocok ketika anda tidak ingin mengubah nilai datanya itu sendiri misalkan memasukan data ke database.

```javascript 
 var angka = [1,2,3,4,5,6,7,8,9];
 angka.forEach(function(elemen, indeks, array){
console.log('elemen:', elemen, 'indeks:', indeks, 'array:', array);});
	(tidak mengahsilakn return)
const arr = ['Gabby', 'Gabriela', 'Joe', 'Frans'];
arr.forEach((data) => {
  console.log(data);
});
// Gabby
// Gabriela
// Joe
// Frans
```


### map()
>  ini membentuk array baru yang di dapat dari array itu sendiri dan di map() ini sendiri dapat mengembalikan nilai return.map() 
>  dapat digunakan untuk perubahan data dalam bentuk array.

```javascript 
const arr = ['Gabby', 'Gabriela', 'Joe', 'Frans'];
console.log('Keluarga mas Johnson');

var arr1 = arr.map((data) => {
  return data + ' Johnson';
});
const arr = [1,9,2,4];
var arr1 = arr.map((data) => {
  return data * 2;
});
console.log(arr1);
// [ 2, 18, 4, 8 ]
```


### Chek Array 
```javascript 
const arr = [1,9,2,4];
  var angka = [7,4,6,8,9,3,5,2,1,10,12,13];

Array.isArray(angka) //true
```
### SORT  
```javascript 

var angka = [7,4,6,8,9,3,5,2,1,10,12,13];
angka.sort(function(a,b) {
   return a-b; // a-b = 1 ke 10 b-a = 10 ke 1
 });

```

### FILTER 
```javascript 
var angka = [7,4,6,8,9,3,5,2,1,10,12,13];
angka.filter(function(x){return x % 2-1});

 let type = 'boolean';
 function filterBy(...values) {
   return values.filter(v => typeof v === type);
 }
 console.log(filterBy(1,2,3,4,5,'Huda’,’Huda1',true,false));


```
### JOIN 

```javascript 
var angka = [7,4,6,8,9,3,5,2,1,10,12,13];
angka.join(“-”) // "7-4-6-8-9-3-5-2-1-10-12-13"
```




### Global Variabel & Scoce

```javascript 
var outWear = "T-Shirt"; // global

function myOutfit() {
  var outWear = "Sweater"; // scope
  console.log(outWear);
  return outWear;
 
}

console.log(myOutfit());
console.log(outWear);


 var myGlobal = 10;

 function fun1() {
   var oopsGlobal = 5;
 }

 function fun2() {
   var output = "";
   if (typeof myGlobal != "undefined") {
 	output += "myGlobal: " + myGlobal ;
   }

   if (typeof oopsGlobal != "undefined") {
 	output += " oopsGlobal: " + oopsGlobal ;
   }
   console.log(output);
 }

 fun1();
 fun2()


 function minusSeven(num) {
   return num -7;
 }
 console.log(minusSeven(10));


 function switchOf (val) {
   var answer = "";
   switch (val) {
 	case 1:
   	answer = "satu";
   	break;
   	case 2:
     	answer = "dua";
     	break;
   }
   return answer;
 }

 console.log(switchOf(2));

 var testObj = {
   "hat": "ballcap",
   "shirt": "jersey"
 }

```
Object

```javascript 
 var hatValue = testObj["shirt"];
 console.log(hatValue);

 testObj.hat

 var testObj = {
   "satu": "Aku",
   "dua": "Dia"
 }
```

#### Mengganti value dan menambah properti Object
```javascript 
 testObj.satu = "Aku adalaha Huda";
 testObj.tiga = "wow";
  console.log(testObj);

```
#### Mencari properti Object
```javascript 
 var myObj = {
   gift: "pony",
   pet: "kitten",
   bed: "sleigh"
 }

 function checkObj(checkProp) {
   if (myObj.hasOwnProperty(checkProp)) {
 	return myObj[checkProp];
   } else {
 	return "Not Found"
   }
 }

 console.log(checkObj("pet"));

```

#### Akses Object bersarang
```javascript
 var myStorage = {
   "car": 			{
 	"inside": 			{
   		"glove box": "map"
 	}
   }
 }

 var glove = myStorage.car.inside["glove box"];
```

#### Mengganti Value Obejct
```javascript 
 myStorage.car.inside["glove box"] = “Ganti”


 
// Saya Belum Paham maksudnya

 const sum = (function() {
   return function sum(...args) {
 	return args.reduce((a, b) => a + b, 0);
   };
 })();

 console.log(sum(1,2,3,4,5));

 const arr1 = ['Jan', 'Feb', 'Mar'];
 let arr2;
 (function() {
   arr2 = [...arr1];
   arr1[0] = 'potato'
 })();

 console.log(arr1[0]);

```
### Destructuring assignment

```javascript 
var voxel = {x: 10, y: 12, z: 15};
const { x : a, y : b, z : c } = voxel
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
const kelompok = ['Huda', 'Muhamad', 'Nur', 'Aduh', 'Aduh 1' ];
const [ketua, wakil, ...anggota] = kelompok;

 let coba = ['satu', 'dua', 'tiga'];
 let [a, b, c] = coba;
 [a,b] = [b,a]

 function coba() {
   return [ 5, 6 ];
 }
 const [ax,bx] = coba();
```

### Object

```javascript 
 const mhs ={
   nama: 'Huda',
   umur: 23,
   email : 'huda@',
   nilai: {
 	a: 10,
 	b: 20
   }
 };
 const {nama : xn, umur : xu, email : e ='defaul', nilai : { a, b}} = mhs;

 function getUmur({umur}) {
   return umur;
 }
 console.log(getUmur(mhs));

```
#### Menggunakan Objec Sebagai Parameter(argument) dengan metode Destructuring

```javascript 
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemp) {
  "use strict";
  const { tomorrow : tempOfTmrw } = avgTemp;
  return tempOfTmrw;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

Function this( mirip konsep destructuring) di dalam Object
const bicycle = {
  gear: 2,
  setGear(newGear) {
	"use strict";
	this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);
```


### Operator Logika 

```javascript 
 var angka = prompt('masukan angka:');
 if(angka % 2 === 0) {
   alert(angka + ' adalah GENAP');
 } else {
   alert(angka + ' adalah GANJIL');
 }

 var nilaiAwal = 1 ;
 while (nilaiAwal <= 5) {
   console.log(`Hello Ke- ${nilaiAwal}`);
   nilaiAwal++;
 }
```
### Ternary Operator
```javascript 
 function equal(a, b) {
   return a === b ? true : false;
 }
 console.log(equal(2, 2));

 function checkSign(num) {
   return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
 }
 console.log(checkSign(0));
```

 ## Ujian

```javascript 
 let jmlAngkot       = 10;
 let angkotBeroprasi = 8;
 let noAngkot        = 1;
 while (noAngkot <= angkotBeroprasi) {
   console.log(`Angkot No. ${noAngkot} beroperasi dengan baik`);
   noAngkot++;
 }

 for (let noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
   console.log(`Angkot No. ${noAngkot} Sedang tidak beroperasi`);  
 }

 let jmlAngkot       = 10;
 let angkotBeroprasi = 7;
 let noAngkot        = 1;

 for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
   if( noAngkot <= angkotBeroprasi && noAngkot != 5) {
 	console.log(`Angkot No. ${noAngkot} Beroperasi`);
   } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
 	console.log(`Angkot No. ${noAngkot} Lembur`);
   } else {
 	console.log(`Angkot No. ${noAngkot} Tidak Beroperasi`);
   }
 
 }
```

### Nested Looping

```javascript 
for (let i = 2; i>0; i--) { 
for (let j = 0; j < i; j++) { 
    console.log('ini loop dalam, looping ke -', j) 
} 
    console.log('ini loop LUAR, looping ke -', i) 
};
	//	Hasil console.log
// ini loop dalam, looping ke - 0 
// ini loop dalam, looping ke - 1 
// ini loop LUAR, looping ke - 2 
// ini loop dalam, looping ke - 0 
// ini loop LUAR, looping ke - 1

 var s = '';
 for( var i = 10; i > 0; i-- ) {
   for( var j = 0; j < i; j++) {
 	s += '*';
   }
   s += '\n';
 }
 console.log(s);
```



### Mengubah string angka Menjadi Integer
```javascript
 function tambah(a, b) {
   return a + b;
 }

 var a     = parseInt(prompt('Masukan Nilai ke 1 :'))
 var b     = parseInt(prompt('Masukan Nilai ke 2 :'))
 var hasil = tambah(a, b);
 console.log(hasil);
```


### Argument Function ( ketika tidak diisi parameter ternyata tersimpan di value arguments )

```javascript 
 function tambah() {
   let hasil = 1;
   for( var i = 0; i < arguments.length; i++) {
 	hasil *= arguments[i];
   }
   return hasil;
 }
 console.log(tambah(1,2,3));


 

var penumpang = ['Sidik', 'Awaw'];
 var tambahPenumpang = function(namaPenumpang, penumpang) {
   if ( penumpang.length == 0) {
 	penumpang.push(namaPenumpang);
 	return penumpang;
   } else {
 	for ( var i = 0; i < penumpang.length; i++ ) {
   	if( penumpang[i] == undefined) {
     	penumpang[i] = namaPenumpang;
     	return penumpang;

   	} else if( penumpang[i] == namaPenumpang) {
     	console.log(namaPenumpang + ' sudah naik');
     	return penumpang;
   	} else if( i == penumpang.length - 1 ) {
     	penumpang.push(namaPenumpang);
     	return penumpang;
   	}

 	}
   }
 }

 var hapusPenumpang = function(namaPenumpang, penumpang) {
   if( penumpang.length == 0) {
 	console.log('Angkot Kosong');
   } else {
 	for( var i = 0; i < penumpang.length; i++) {
   	if( penumpang[i] == namaPenumpang) {
     	penumpang[i] = undefined;
   	} else if( i == penumpang.length -1) {
     	console.log(namaPenumpang + ' tidak ada di dalam angkot');
   	}
 	}
   }
   return penumpang;
 }

 function Angkot(supir, trayek, penumpang, kas) {
   this.supir = supir;
   this.trayek = trayek;
   this.penumpang = penumpang;
   this.kas = kas;

   this.penumpangNaik = function(namaPenumpang) {
 	this.penumpang.push(namaPenumpang);
 	return this.penumpang;
   }

   this.penumpangTurun = function(namaPenumpang, bayar) {
 	if( this.penumpang.length === 0) {
   	alert('angkot masih kosong');
   	return false;
 	}
 	for( var i = 0; i < this.penumpang.length; i++) {
   	if( this.penumpang[i] == namaPenumpang) {
     	this.penumpang[i] = undefined;
     	this.kas += bayar;
     	return this.penumpang;
   	}
 	}
   }
 }

 var angkot = new Angkot('Huda ZZ', ['Sukapura', 'Cibubur'], [], 0);


 var hapusPenumpang = function(namaPenumpang, penumpang) {
   if ( penumpang.length == 0 ) {
 	console.log('Angkot masih kosong.');
 	return penumpang;
   } else {
 	for( var i = 0; i < penumpang.length; i++) {
   	if( penumpang[i] == namaPenumpang ){
     	penumpang[i] = undefined;
     	return penumpang;
   	} else if( i == penumpang.length -1) {
     	console.log(namaPenumpang + ' tidak ada didalam angkot');
     	return penumpang;
   	}
 	}
   }
 }

 // tidak fungsi
 var namaMhs    = 'Huda Santai';
 var umurMhs    = 23;
 var lulus      = true;
 var IPSemester = [2.90 , 3.10, 3.25, 2.88, 3.00];

 function IPKumulatif(IPSemester) {
   var total = 0;
   for( var i = 0; i < IPSemester.length; i++) {
 	total += IPSemester[i];
   }
   return total/IPSemester.length;
 };

 var mahasiswa = {
   nama : 'Huda Muhamad',
   lulus : true,
   IPSemester : [2.90 , 3.10, 3.25, 2.88, 3.00],
   IPKumulatif : function() {
 	var total = 0;
 	var ips = this.IPSemester;
 	for( var i = 0; i < ips.length; i++) {
   	total += ips[i];
 	}
 	return total/ips.length
   }
 }

 function buatObjectMahasiswa(nama, nrp, email, jurusan) {
   var mhs = {};
   mhs.nama = nama;
   mhs.nrp = nrp;
   mhs.email = email;
   mhs.jurusan = jurusan;
   return mhs;
 }

 var mhs3 = buatObjectMahasiswa('Huda', '010101', 'no@yahoo.com', 'Teknik Pangan');

 function Mahasiswa(nama, nrp, email, jurusan) {
   this.nama    = nama;
   this.nrp     = nrp;
   this.email   = email;
   this.jurusan = jurusan;

 }

 var mhs3 = new Mahasiswa('Huda', '010101', 'no@yahoo.com', 'Teknik Pangan');

 function halo() {
   console.log('Halo');
 }

 halo();

 var obj = {};
 obj.halo = function() {
   console.log('huda');
 }

 obj.halo();

 function Halo() {
   console.log('Hello');
 }

 new Halo();

```

 #### object angkot

```javascript 
 function Angkot(sopir, trayek, penumpang, kas) {
   this.sopir = sopir;
   this.trayek = trayek;
   this.penumpang = penumpang;
   this.kas = kas;

   this.penumpangNaik = function(namaPenumpang) {
 	this.penumpang.push(namaPenumpang);
 	return this.penumpang;
   }

   this.penumpangTurun = function(namaPenumpang, bayar) {
 	if( this.penumpang.length === 0) {
   	alert('angkot masih kosong!');
   	return false;
 	}

 	for( var i = 0; i < this.penumpang.length; i++) {
   	if ( this.penumpang[i] == namaPenumpang) {
     	this.penumpang[i] = undefined;
     	this.kas += bayar;
     	return this.penumpang;
   	}
 	}
   }
 }

 var angkot1 = new Angkot('Huda' , ['Sukapura', 'Cibubur'], [], 0);

 const form = document.querySelector('.form').addEventListener("input", () =>
 console.log(document.querySelector('.form').value));

const textInput = document.querySelector('.todo').value;

const btn = document.querySelector('.btn');


btn.addEventListener('click', function() {
  if( textInput === "") {
	alert('masukan Text')
 	 
  }
   const ul = document.querySelector('.list');
const liBaru = document.createElement('li');
const text = document.createTextNode(textInput);

liBaru.appendChild(text);
ul.appendChild(liBaru);
    document.querySelector('.todo').value = '';
});

 p1.addEventListener('click', function() {
   p1.style.backgroundColor = 'red';
 });

  const myHeading = document.querySelector('h1');
  myHeading.textContent = 'Hello world!';

  let myVariable = document.querySelector('h1');

  alert('hello!');

  function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }


 let myButton = document.querySelector('button');
 myButton.onclick = () => {
   setUserName();
 }
 let myHeading = document.querySelector('h1');

 function setUserName () {
   const myName = prompt('Isi nama anda.');
   if (!myName){
 	setUserName();
   } else {
   localStorage.setItem('name', myName);
   myHeading.textContent = 'Mozila is cool, ' + myName;
 }
 }

 if (!localStorage.getItem('name')) {
   setUserName();
 } else {
   const storedName = localStorage.getItem('name');
   myHeading.textContent = `Mozila is cool, ${storedName}`;
 }

 foo();

 function foo() {
   console.log('bar');
 }

 function getMonthName(mo) {
   mo--;  Adjust month number for array index (1 = Jan, 12 = Dec)
   const months = [
 	'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
 	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
   ];
   if (months[mo]) {
 	return months[mo];
   } else {
 	throw new Error('InvalidMonthNo');  throw keyword is used here
   }
 }

 try {  statements to try
   monthName = getMonthName(myMonth);  function could throw exception
 } catch (e) {
   monthName = 'unknown';
   logMyErrors(e);  pass exception object to error handler (i.e. your own function)
 }
```javascript 



 ### Object Literal harus beda nama variabel untuk menjadi banyak tidak efektif untuk objec yg banyak
```javascript 
let mhs = {
   nama: 'Huda',
   energi: 10,
   makan: function (porsi) {
 	this.energi = this.energi + porsi;
 	console.log(`Halo ${this.nama}, selamat Makan!`);
   }
 }

 function deklarasi + object.create()
  const methodMahasiswa = {
   makan: function (porsi) {
 	this.energi +=porsi;
 	console.log(`Hallo ${this.nama}, Selamat Makan!`);
   },

   main: function (jam) {
 	this.energi -= jam;
 	console.log(`Halo ${this.nama} , Selamat Bermain`);
   },
   tidur: function (jam) {
 	this.energi += jam * 2;
 	console.log(`Halo ${this.nama} , Selamat Tidur`);
   }
  }

 function Mahasiswa(nama, energi) {
   let mahasiswa = Object.create(methodMahasiswa);
   mahasiswa.nama = nama;
   mahasiswa.energi = energi;

 
   return mahasiswa;
 }

 let huda = Mahasiswa('Huda', 20);
```

### Constractor
```javascript 
 function Mahasiswa(nama, energi) {
   this.nama = nama;
   this.energi = energi;

   this.makan = function (porsi) {
 	this.energi +=porsi;
 	console.log(`Hallo ${this.nama}, Selamat Makan!`);
   }

   this.main = function (jam) {
 	this.energi -= jam;
 	console.log(`Halo ${this.nama} , Selamat Bermain`);
   }
 }

 let huda = new Mahasiswa('Huda', 20);
```

### prototype
```javascript 
 function Mahasiswa(nama, energi) {
   this.nama = nama;
   this.energi = energi;
 }
 Mahasiswa.prototype.makan = function(porsi) {
   this.energi += porsi;
   return `Hallo ${this.nama} , Selamat Makan`
 }

 let huda = new Mahasiswa('Huda', 10)

```

### class
```javascript 
 class Mahasiswa {
   constructor(nama, energi) {
 	this.nama = nama;
 	this.energi = energi;
   }

   makan(porsi) {
 	this.energi += porsi;
 	return `Halo ${this.nama}, Selamat Makan`
   }
 }

 let huda = new Mahasiswa('Huda', 7)

```

### closure ( fn di dalam fn)
> closures adalah inner function yang punya hak akses (parameter dan Variabel) ke scope di dalam function di mana dia bernaung, dan scope-scope di function luar lain nya. 

```javascript 
 function init() {
   let nama = 'Huda';
   function tampilNama() {
 	console.log(nama);
   }
   console.dir(tampilNama);
 }
 init();

 function ucapkanSalam(waktu) {
   return function (nama) {
	console.log(`Halo ${nama}, Selamat ${waktu}, Semoga Harimu Menyenangkan!`);
   }
 }

 let selamatPagi = ucapkanSalam('Pagi');

 console.dir(selamatPagi);

 let add = (function() {
   let counter = 0;
   return function () {
 	return ++counter;
   }
 })();

 console.log(add());console.log(add());console.log(add());

 function expression
 const tampilNama = function (nama) {
   return `Hallo, ${nama}`;
 }
 console.log(tampilNama('Huda'));
```

 ### arrow function

```javascript 
 const tampilNama = (nama) => { return `Hallo, ${nama}`;}
 console.log(tampilNama('Huda Santai'));

 // implisit return menghapus kurung dan return ,{}

 const tampilNama = nama => `Hallo, ${nama}`;
 console.log(tampilNama('Huda Santai'));

 const tampilNama = () => `Hallo, Bro`;
 console.log(tampilNama());

 let mahasiswa = ['Huda', 'Rizal', 'Kaka'];

 let jumlahHuruf = mahasiswa.map(nama => nama.length);
 let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
 console.log(jumlahHuruf);

 const box = document.querySelector('.box');
 box.addEventListener('click', function() {
   let satu = 'size';
   let dua = 'caption';

   if(this.classList.contains(satu)) {
 	[satu, dua] = [dua, satu];
   }
 
   this.classList.toggle(satu);
   setTimeout(() => {
 	this.classList.toggle(dua);
   }, 600);
 });

```
### filter dengan for
```javascript 
 const angka = [ -1, 8, 9, 1, 4, -5, -4, 3, 2, 9 ];

  const newAngka = [8,9];
  for (let i = 0; i < angka.length; i++ ) {
   if (angka[i] >= 3) {
 	newAngka.push(angka[i]);
   }
  }
  console.log(newAngka);

 const newAngka = angka.filter(function (a) {
   return a >= 3;
 });

 console.log(newAngka);

 const newAngka = angka.map(a => a);
 console.log(newAngka);

```

### reduce
```javascript 
 const newAngka = angka.reduce((acc, cur) => acc + cur);
 console.log(newAngka);

 method chaining
 const hasil = angka.filter(a => a > 5)
   .map(a => a * 3)
   .reduce((acc, cur) => acc + cur);
   console.log(hasil);


 const videos = Array.from(document.querySelectorAll('[data-duration'));
  console.log(videos);

 let js = videos.filter(video => video.textContent.includes('JAVASCRIPT'))
 .map(item => item.dataset.duration)
 .map(waktu => {
    10:30 -> [10,30] split
   const parts = waktu.split(':').map(part => parseFloat(part));
   return (parts[0] * 60) + parts[1];
 })
 .reduce((total, detik) => total + detik );
```


#### ubah jam menit detik
```javascript 
 const jam   = Math.floor(js / 3600);
 js          = js - jam * 3600;
 const menit = Math.floor(js / 60);
 const detik = js - menit * 60;

 console.log(detik);
 console.log(js);

 const durasi       = document.querySelector('.total-durasi');
 durasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

 const total       = document.querySelector('.jumlah-video');
 total.textContent = videos.filter(video => video.textContent.includes('JAVASCRIPT'))
 .map(item => item.dataset.duration).length;

 const mhs = {
   nama:  'Huda',
   umur:  23,
   nrp:   105781,
   email: 'hudamuhamad3@gmail.com',
 };

 const el = `<div class="mhs">
   <h2>${mhs.nama}</h2>
   <span class="nrp">${mhs.nrp}</span>
 </div>`;

 document.querySelector('.jumlah-video').innerHTML = el;
```
### looping
```javascript 
 const mhs = [
   {
 	nama: 'Huda',
 	email: 'hudamuhamad3@gmail.com'
   },
   {
 	nama: 'Huda',
 	email: 'hudamuhamad3@gmail.com'
   },
   {
 	nama: 'Huda',
 	email: 'hudamuhamad3@gmail.com'
   }
 ];

 const el = `<div class="mhs">
 ${mhs.map(m => `<ul>
   <li>${m.nama}</li>
   <li>${m.email}</li>
   </ul>
 `).join('')}

 </div>`;

 document.body.innerHTML = el;
```

### conditional ternary
```javascript 
 const lagu = {
   judul: 'Tetap Dalam Jiwa',
   penyanyi: 'Isyana Sarasvati',
    feat: 'Test'
 }

 const el = `<div class="lagu">
   <ul>
 	<li>${lagu.penyanyi}</li>
 	<li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ''}</li>
   </ul>

 </div>`;

 document.body.innerHTML = el;
```

### nested html fragmen bersarang
```javascript 
 const mhs = {
   nama: 'Huda',
   semester: 1,
   mataKuliah: [
 	'Html',
 	'CSS',
 	'Javascript',
 	'React Js'
   ]
 };

 function cetakMatkul(mataKuliah) {
   return `
   <ol>
 	${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
   </ol>
   `;
 }

 const el =  `<div class="mhs">
                    <h2>${mhs.nama}</h2>
                    <span class="semester">Semester : ${mhs.semester}</span>
                    <h4>Mata Kuliah :</h4>
                    ${cetakMatkul(mhs.mataKuliah)}
              </div>`;

   document.body.innerHTML = el;

```
### Tagged template literal
```javascript 
 const nama  = 'Huda Muhamad';
 const email = 'hudamuhamad3@gmail.com';
 const umur  = 23;

 function coba(strings, ...values) {
   let result = '';
   strings.forEach((str, i) => {
 	result += `${str}${values[i] || ''}`;
 });

 return result;
    return strings.reduce((result , str, i) => `${result}${str}${values[i] || ''}`, '' );

 }
 
 function coba(strings, ...values) {
   return strings.reduce((result , str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '' );

 }
 const str = coba`Halo, Nama saya ${nama}, saya berumur ${umur} tahun. email = ${email}`;
  console.log(str);
 document.body.innerHTML = str;
 for of

 const mhs  = ['Huda', 'Muhamad', 'Nur'];
 const mhs1 = 'Huda Muhamad';
 const mhs2 = {
   nama: 'Huda',
   umur: 23
 };

 for (let i = 0; i < mhs.length; i++) {
   console.log(mhs[i]);  
 }

 mhs.forEach((m, i) => console.log(`${m} adalah siswa ke ${i+1}`));

 for (const [i, m] of mhs.entries()) {
   console.log(`${m} adalah siswa ke ${i+1}`);
 }

 for (const m in mhs2) {
   console.log((mhs2[m]));
 }
```

 ### spread operator
 > memecah iterables menjadi single element

```javascript 
 const mhs = ['Huda', 'Muhamad', 'Nur'];
 console.log(...mhs[1]);

 const li  = document.querySelectorAll('li');
 console.log(li[1].textContent);
 const mhs = [];
 for (let i = 0; i < li.length; i++) {
   mhs.push(li[i].textContent)
 }

 const mhs = [...li].map(m => m.textContent);
 console.log(mhs);

 const nama  = document.querySelector('.nama');
 const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
 console.log(huruf);

 nama.innerHTML = huruf;

```
 ### Rest Parameter
```javascript 
 function tambah(...values) {
   let total = 0;
   for (const a of values) {
     total += a;
   }
     return total;

   return values.reduce((a , b) => a + b );
   return [...arguments].reduce((a, b ) =>a + b);
 }
 console.log(tambah(1, 2, 3, 4));

```
 ### Promise 
> (objec yg merepresentasikan keberhasilan/kegagalan sebuah event Asyncronus dimasaa yg akan datang)
>  state ( fullfield / rejected / pending)
>  calback ( resolve / reject / finally)
>  aksi (then / catch)

```javascript 
 let ditepati = false;
 const janji1 = new Promise((resolve, reject) => {
   if (ditepati) {
 	resolve('Janji telah diitepati');
   } else {
 	reject('Ingkar Janji..');
   }
 });

 janji1
   .then(a => console.log('Ok! : ' + a ))
   .catch(a => console.log('NOT OK! : ' + a ));

   let ditepati = false;
 const janji1 = new Promise((resolve, reject) => {
   if (ditepati) {
   	setTimeout(() => {
     	resolve('Janji telah diitepati');
   	}, 2000);
   } else {
     	setTimeout(() => {
       	reject('Ingkar Janji..');
     	}, 2000);
   }
 });

 console.log('Mulai');
 janji1
   .finally(() => console.log('Selesai Menunggu'))
   .then(a => console.log('Ok! : ' + a ))
   .catch(a => console.log('NOT OK! : ' + a ));

 console.log(janji1.then(() => console.log(janji1)));
 console.log('Selesai');

const film = new Promise((resolve, reject) => {
  setTimeout(() => {
	resolve([{
  	judul: 'Avengers',
  	sutradara: 'Huda',
  	pemeran: 'Nurhuda'
	}])
  }, 1000);
});

const cuaca = new Promise((resolve, reject) => {
  setTimeout(() => {
	resolve([{
  	kota: 'Jakarta',
  	temp: 27,
  	kondisi: 'Cerah Berawan'
	}]);
  }, 500);
})

 film.then(x => console.log(x));
 cuaca.then(x => console.log(x));

Promise.all([film, cuaca])
   .then(x => console.log(x));
  .then(response => {
	const [film, cuaca] = response;
	console.log(film);
	console.log(cuaca); });

```
#### Latihan DOM

```javascript 
const body     = document.querySelector(‘body);
const klikAcak = function () {
    const warna       = ['red', 'blue', 'green', 'purple', 'yellow'];
    const randomIndex = Math.floor(Math.random() * warna.length);
    const randomWarna = warna[randomIndex];
    body.style.backgroundColor = randomWarna;
    console.log('warna di ganti ke ' randomWarna);
 body.onclick = klikAcak;

const createEl  = document.createElement('div');
const innerhtml = createEl.innerHTML = 'i am a frontend developer';
const parentEl  = document.querySelector('body');

parentEl.appendChild(createEl);
console.log(parentEl);
``
