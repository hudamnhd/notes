### Convert String to Number

```javascript
A = 10;
B = "10";

A === Number ( b ) ;

Conver Number to String

A= "10";
A = String ( a );

// While hanya berjalan jika kondisi True

var i = 0;

    while ( true ) {
        if ((i <= 9) === false ){
            break;
        }

        console.log( 1 );
        i = i + 1;

        Let numOfCustomers = 10;
        while (numOfCustomers > 0) {
            console.log( "How may I help you?" );
            // help the customer...
            numOfCustomers = numOfCustomers - 1;
        }

        // Do while tetap berjalan sekali bila kondisi false console.log("adaygbisadibantu")
        x = x -1;

    } while ( x > 0);


variabel.toFixed(2) // mengambil 2 digit angka desimal di belakang koma

function abc(amt) { console.log( amt.toFixed( 2) ); }
function bca() { return String(amount); }
var amount = 99.99;

const SPENDING_THRESHOLD = 200;
const TAX_RATE           = 0.08;
const PHONE_PRICE        = 99.99;
const ACCESSORY_PRICE    = 9.99;

var bank_balance = 303.91;
var amount       = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}


// keep buying phones while you still have money
while (amount < bank_balance) {
	 buy a new phone!
	amount = amount + PHONE_PRICE;

	 // can we afford the accessory?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE;
	}
}


 // don't forget to pay the government, too
amount = amount + calculateTax( amount );

console.log( "Your purchase: " + formatAmount( amount ));
 // Your purchase: $334.76


 // can you actually afford this purchase?
if (amount > bank_balance) {
	console.log( "You can't afford this purchase. :(");
}
 // You can't afford this purchase. :(


var a;
typeof a;				 "undefined"

a = "hello world";
typeof a;				 "string"

a = 42;
typeof a;				 "number"

a = true;
typeof a;				 "boolean"

a = null;
typeof a;				 "object" // -- weird, bug

a = undefined;
typeof a;				 "undefined"

a = { b: "c" };
typeof a;				 "object"


var obj = {
	a: "hello world",
	b: 42,
	c: true
};

obj.a;		 "hello world"
obj.b;		 42
obj.c;		 true

obj["a"];	 "hello world"
obj["b"];	 42
obj["c"];	 true


var arr = [
	"hello world",
	42,
	true
];

arr[0];			 "hello world"
arr[1];			 42
arr[2];			 true
arr.length;		 3

typeof arr;		 "object"

function foo() {
	return 42;
}

foo.bar = "hello world";

typeof foo;			 "function"
typeof foo();		 "number"
typeof foo.bar;		 "string"

var a = "hello world";
var b = 3.14159;

a.length;				 11
a.toUpperCase();		 "HELLO WORLD"
b.toFixed(4);			 "3.1416"

var a = 2;

foo();					 // works because `foo()`
						 // declaration is "hoisted"


function foo() {
	a = 3;
	console.log( a );	// 3
	var a;				// declaration is "hoisted"
						// to the top of `foo()`
}


console.log( a );	 // 2

function foo() {
	var a = 1;

	function bar() {
		var b = 2;

		function baz() {
			var c = 3;
			console.log( a, b, c );	 // 1 2 3
		}

		baz();
		console.log( a, b );		 // 1 2
	}


	bar();
	console.log( a );				 // 1
}

foo();

function makeAdder(x) {
     // parameter `x` is an inner variable

     // inner function `add()` uses `x`, so
     // it has a "closure" over it
    function add(y) {
   	 return y + x;
    };

    return add;
}
//  `plusOne` gets a reference to the inner `add(..)`
//  function with closure over the `x` parameter of
//  the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

//  `plusTen` gets a reference to the inner `add(..)`
//  function with closure over the `x` parameter of
//  the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

plusOne( 3 );   	 // 4  <-- 1 + 3
plusOne( 41 );   	 // 42 <-- 1 + 41

plusTen( 13 );   	 // 23 <-- 10 + 13

function User(){
    var username, password;

    function doLogin(user,pw) {
   	 username = user;
   	 password = pw;

   	  // do the rest of the login work
    }

    var publicAPI = {
   	 login: doLogin
    };

    return publicAPI;
}

 // create a `User` module instance
var fred = User();

fred.login( "fred", "12Battery34!" );



// Default Parameter

function foo(a = 2) {
    console.log( a );
}

foo();   	  //  2
foo( 42 );    // 42


Logika
if (a == 2) {
     do // something
}
else if (a == 10) {
     do // another thing
}
else if (a == 42) {
     do // yet another thing
}
else {
     // fallback to here
}


var a = 42;

var b = (a > 41) ? "hello" : "world";

 // similar to:

 if (a > 41) {
    b = "hello";
 }
 else {
    b = "world";
 }


switch (a) {
    case 2:
   	  do // something
   	 break;
    case 10:
   	  do // another thing
   	 break;
    case 42:
   	  do // yet another thing
   	 break;
    default:
   	  // fallback to here
}

```

## REDUCE

adalah mengembalikan jumlah semua elemen dalam array

```javascript
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const arr = [10, 20, 30 , 40];
const reduced = arr.reduce(function(previousValue, currentValue) {
  console.log(`${previousValue} + ${currentValue} = ${previousValue + currentValue}`);
return previousValue + currentValue;

},0)

console.log(reduced);
```

## MAP

metode membuat Array baru yang diisi dengan hasil pemanggilan fungsi yang disediakan pada setiap elemen dalam array pemanggil

```javascript
map((element, index, array) => { /* … */ })

const users = ['Huda', 'Budi', 'Anton', 'Tomi'];
const mapped = users.map(function(element, index, array) {
  return element.toUpperCase();
})
console.log(users, mapped);

multi-dimensional array = Array yg berisi Object
const users = ['Huda', 'Budi', 'Anton', 'Tomi'];
const mapped = users.map(function(element, index, array) {
  return element.toUpperCase();
})

console.log(users, mapped);

const users = [
  {
	name: 'Budi',
	username: 'budiusername',
	favoriteColor: 'red'
  },
  {
	name: 'Anton',
	username: 'antongaming',
	favoriteColor: 'blue'
  }
];

const usersWithoutFc = users.map(function(user) {
  return {
	name: user.name,
	username: user.username
  }
});

console.log(usersWithoutFc);
```

Memfilter key value yg ada di dalam Object

## FILTER

metode membuat salinan dangkal dari sebagian array tertentu, difilter hingga hanya elemen dari larik tertentu yang lulus uji yang diterapkan oleh fungsi yang disediakan.

```javascript
const fruits = ["Apple", "Orange", "Mango", "Duku", "Semangka"];
const filterFruits = fruits.filter(function (fruit) {
	console.log(fruit[0]);
	return fruit == "Apple" ? false : true;
});
console.log(filterFruits);

const siswa = [
	{
		nama: "Budi",
		kelas: 12,
	},
	{
		nama: "Huda",
		kelas: 12,
	},
	{
		nama: "Rizal",
		kelas: 10,
	},
	{
		nama: "Shawo",
		kelas: 10,
	},
];

const filterSiswa = siswa.filter(function (item) {
	return item.kelas == "10" ? true : false;
});

console.log(filterSiswa);
```
