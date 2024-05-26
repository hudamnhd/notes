# React JS 
> A javascript library for building user interface.
> single page application adalah sebuah halaman yang ketika berpindah dari page ke page tanpa reload.
> kita nulis interfacenya di dalam javascript misal navbar dll bukan di dalam htmlnya.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

Generate id with Date.now()

```jsx
  const generateId = () => {
    // untuk generate id ( karena setiap looping data butuh key )
    return Date.now();
  };
```

menambah array baru dengan spread ( join )

```jsx
const todos    = ["belajar", "olahraga", "makan"];
const newTodos = [...todos, "tidur"];
console.log(newTodos); // ["belajar", "olahraga", "makan", "tidur"]

const todos = [
  { id: 1, task: "belajar" },
  { id: 2, task: "olahraga" },
  { id: 3, task: "makan" }
];

const newTodos = [...todos, { id: 4, task: "tidur" }];
console.log(newTodos);
{/* [
   { id: 1, task: "belajar" },
   { id: 2, task: "olahraga" },
   { id: 3, task: "makan" },
   { id: 4, task: "tidur" }
 ]*/}
setTodos([...todos, activity]);  //perhatikan kurung siku
```
> ..todos mengekstrak array data sebelumnya kemudian ditambah dari activity , apabila tanpa ...todos maka hanya mengganti state saja tidak menambah(push) karena prinsip state mengganti data lama menjadi data baru

Fungsi Filter Untuk hapus data  

 ```jsx
const filteredTodos = todos.filter((todo) => todo.id !== id )
 ```
ketika todo.id ( dari  proses filter  yang sudah di looping) tidak sama dengan id dari parameter tombol delete maka arraynya lolos ( disimpan ) kalau sama tidak disimpan

 ```jsx
 const filteredTodos = todos.filter((todo) => todo.id === id )
 ```

apabila kodenya pakai === maka array yang idnya sama yng hanya di simpan yang tidak sama tidak disimpan

```jsx
setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
      },
    ]);
```

kenapa key dan property **activty** cuma 1 karena sama

Unutk di looping ke UI karena saya menambahkan fitur filter all completed and incomplete

```jsx
const [filter, setFilter] = useState("all");
  const filteredTodos =
    // fillter todo dengan tombol dan menampilkan data
    filter === "all"
      ? todos
      : filter === "completed"
      ? todos.filter((todo) => todo.done)
      : todos.filter((todo) => !todo.done);
```

Jadi ketika filter = all maka semua todo di tampilkan , jika filter bukan all kemudian di validasi = completed maka apabila true todo yg selesai ditampilkan, apabila false todo yg belum selesai yg di tampilkan

Menampilkan item by filter

```jsx
Complete : {todos.filter((item) => item.done === true).length}
Incomplete : {todos.filter((item) => item.done === false).length}
```
### Fitur Centang todolist 

```jsx
const doneTodoHandler = (todo) => {
    const updatedTodo = {
      id: todo.id,
      activity: todo.activity,
      done: todo.done ? false : true,
    };
    console.log(updatedTodo);
  };

    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true,
    };

    // menyalin semua isi todo kemudian mengganti key done dengan argumen jika sebelumnya false maka jadi true dan sebaliknya

    const findIndexTodo           = todos.findIndex((index) => index.id === todo.id);
    const updatedAllTodo          = [...todos];
    updatedAllTodo[findIndexTodo] = updateDoneTodo;
    setTodos(updatedAllTodo);
```


### OBJECT JS ( ganti properti object )

```jsx
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // bisa nambah property
// Mengganti nilai properti b
const obj3 = { ...obj2, b: 5 }; // bisa mengganti property 
console.log(obj3); // Output: { a: 1, b: 5, c: 3 }
```
jadi konsepnya kaya nge merge property karena spread operator
Ternary Operator 

```jsx
{edit.id ? "Save" : "Add"}
```
jika edit.id ada(terdefinisi tidak null, undefined ) maka true(save) 

```jsx
${index !== todos.length - 1 && "mb-3"} 

```

jika index dari tiap element tidak    = jumlah todos – 1 maka element punya clas mb-3
artinya ketika index element terkahir = jumlah todos -1 maka tidak punya mb-3


### EVENT

```jsx
const addTodoHandler = (e) => {
  e.preventDefault();  //agar page tidak reload ketika diklik
  const inputTodoHandler = (e) => {
    // mengambil data dari value kotak input dan menyimpan ke state activity
    setActivity(e.target.value);
  };
```

### AUTO SCROLL 

```jsx
    <div className="h-[340px]  px-4 overflow-auto rounded-lg" ref={todoListRef}></div>
```

dengan class diatas overflow-auto memunculkan tombol scroll ketika element div penuh
dan ref={xxx} untuk fungsi auto scroll ketika ada todo baru

### useEffect dan useReff

React hooks useRef umunnya digunakan untuk mengakses DOM node dalam sebuah komponen.
React hooks useEffect digunakan untuk menambahkan side effect ke function komponen.

```jsx
const todoListRef = useRef(null); // fitur scroll otomatis ke todo yang baru di tambahkan
const inputFocus = useRef(null); // auto focus ke input box ketika render
  
useEffect(() => {
    // melakukan scroll otomatis ke item todo terakhir saat daftar todo diperbarui
    todoListRef.current.scrollTop = todoListRef.current.scrollHeight;
    // tidak lupa menambahan ref={todoListRef} ke div yang menampilkan todolist
  }, [todos]);

  useEffect(() => {
    // set title
    document.title = "Todolist";
    // otomatis focus ke kotak input -- dont fotget add ref={inputFocus} ke tag input
    inputFocus.current.focus();
  }, []);
```
ketika argument ke 2 di isi todos itu hanya mentrigger ketika perubahan state todos
ketika [] maka trigger setiap reload petama kali

### Fitur Add new, save from edit 
```jsx
  const saveTodoHandler = (e) => {
    e.preventDefault();
    if (!activity) {
      inputFocus.current.focus();
      // jika state activity kosong
      setMessageError("Write something");
      // show message
      setTimeout(() => {
        // set timeout untuk hapus state message supaya pesan hilang
        setMessageError("");
      }, 1000);
      return;
      // menghentikan eksekusi
    }
```

### Edit mode

```jsx
    if (edit.id) {
        // jika edit.id dari state edit  "Ada" lanjut excecute
      const updatedTodo = {
        ...edit,
        // mengekstrak dari array edit ( karena hasil dari state edit object)
        activity,
        //jika key dan prop sama maka boleh di tulis keynya aja karena ini {activity: activity,}
      };

```
#### FindIndex (return nyya index)

```jsx
      const findIndexTodo = todos.findIndex((index) => index.id === edit.id);
      // findIndexTodo mereturn index array --- findIndex ini ketika index.id = edit.id maka akan mereturn indexnya jika tidak maka -1

      const updatedAllTodo = [...todos];
      // mengclone data todos menggunakan spread operator

      updatedAllTodo[findIndexTodo] = updatedTodo;
      // mengupdate variabel updatedAllTodo ( array hasil clone state todos) dengan updatedTodo(data dari kotak input)

      setTodos(updatedAllTodo);
      // memperbarui state todos
      setEdit({});
      // reset state edit supaya keluar dari mode edit
      setActivity("");
      // reset kotak input
      return;
      // stop excecute
    }

    const saveTodo = {
    // menambahkan data todo baru id dari function generateId, activity dari state activity
      id: generateId(),
      activity: activity,
      done: false,
    };
    setTodos([...todos, saveTodo]);
    // menyalin todos dengan spreadoperator kemudian baru di tambahkan data baru ,
    // karena ketika langsung di set ke state tanpa pakai ...todos maka hanya mengganti state bukan menambah data
    setActivity("");
    setFilter("all");
    setMessageSucces("task added successfully");
    setTimeout(() => {
      setMessageSucces("");
    }, 1000);
  };

```

### Fitur Delete pakai find index
```jsx
  const deleteTodoHandler = (id) => {
    if (edit.id === id) {
      inputFocus.current.focus(); 
        // jika edit.id=id (dari parameter tombol delete )sama excecute kode dalam argumen if ini
      setMessageError("Please save before deleting");
      setTimeout(() => {
        setMessageError("");
      }, 1000);
      return;
    }
```
### Menu konfirmasi yes no

```jsx
 const confirmDelete = window.confirm(
      // function untuk menampilkan popup ya / tidak returnnya true / false
      "Are you sure you want to delete this todo?"
    );

    if (confirmDelete) {
      const filterTodo = todos.filter((todo) => todo.id !== id); // todos di filter jika todo.id dari filter tidak sama dengan id ( dari parameter delete button ) maka save array

      setTodos(filterTodo);
      // update state todos dengan hasil filterTodo

      setMessageSucces("task have been deleted successfully");
      setTimeout(() => {
        setMessageSucces("");
      }, 1000);
    }
  };

  const deleteAllTodoHandler = (e) => {
    // function hapus semua todo
    e.preventDefault();
    if (edit.id) {
      setMessageError("Please save before deleting");
      setTimeout(() => {
        setMessageError("");
      }, 1000);
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete all todos?"
    );
    if (confirmDelete) {
      // caranya mudah hanya mengset state todos dengan empty array
      setTodos([]);
      setMessageSucces("all task have been deleted successfully");
      setTimeout(() => {
        setMessageSucces("");
      }, 1000);
    }
  };
```

### Aktivasi mode edit
```jsx
  const editTodoHandler = (todo) => {
    // function edit mode ( hanya untuk mengaktifkan edit mode saja )
    if (edit.id) {
      inputFocus.current.focus();
      // jika sudah di mode edit maka muncul pesan ketika klik edit button
      setMessageError("you are already in edit mode");
      setTimeout(() => {
        setMessageError("");
      }, 1000);
      return;
    }
    inputFocus.current.focus();
    setEdit(todo);
    setActivity(todo.activity);
    // set state edit dan activity dengan ( parameter todo dari edit button )
  };

  const doneTodoHandler = (todo) => {
    // function centang todo
    if (edit.id) {
      setMessageError("Please save first");
      setTimeout(() => {
        setMessageError("");
      }, 1000);
      return;
    };

  const cancelEditHandler = () => {
    // exit edit mode
    setEdit({});
    setActivity("");
  };

```
### Component and Prop

```jsx
function App() {
    return (
        <div className="App">
            <User name="Huda" age={24} email="hudamuhamad3@gmail.com"/>
        </div>
    );
}

const User = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
        </div>
    )
}
```

jadi penjelasan prop dari komponent induk di atas 

```jsx
<User name="Huda" age={24} email="hudamuhamad3@gmail.com"/>
```

kemudian ketika di terima komponen anak maka menjadi dibawah dimana argument di tulis props dan kemudian setiap komponen menggunakan props.xxxx

```jsx
const User = (props) = (
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1> 
);

```

### CSS in React – Ternary Operators 

```jsx
function App() {
    const age     = 12;
    const isGreen = false;

    return (
        <div className="App">
            {age >= 16 ? <h1> OVER AGE</h1> : <h1> UNDER AGE</h1> }
            <h1 style={{color : isGreen ? "green" : "red"}}>THIS HAS COLOR</h1>
            {isGreen && <button> THIS IS A BUTTON</button>}
		{/*BUTTON NOT SHOW WHEN isGreen FALSE*/}
    </div>
    );
}
```

### List in React

```jsx
function App() {
    const names = [
        { name: "Huda", age: 24 },
        { name: "Ulfa", age: 17 },
        { name: "Ahmad", age: 23 },

    ];

    return (
        <div className="App">
            {names.map((user, key) => {
               return <li key={key}>{user.name} - {user.age}</li>
            })}
    </div>
    );
}

function App() {
    const names = [
        { name: "Huda", age: 24 },
        { name: "Ulfa", age: 17 },
        { name: "Ahmad", age: 23 },

    ];

    return (
        <div className="App">
            {names.map((user, key) => {
              return  <User key={key} name={user.name} age={user.age} />
            })}
    </div>
    );
}

// this is another file 
const User = ({name, age}) => {
    return (
        <dir>
            {name} - {age}
        </dir>
    )
}
```

### render item with logical

```jsx
function App() {
    const planets = [
        { name: "Mart", isGasPlanet: true },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },

    ];

    return (
        <div className="App">
            {planets.map((planet, key) => 
            planet.isGasPlanet && <h1 key={key}>{planet.name}</h1>
            )}
    </div>
    );
}
```

### useState Hook

```jsx
import { useState } from "react";
function App() {
    const [age, setAge]               = useState(0);
    const [name, setName]             = useState("Huda");
    const [inputValue, setInputValue] = useState("");

    const changeAge = () => {
        setAge(age + 1);
    }
    const changeName = () => {
        setName("Muhamad");
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div className="App">
            <h1>{age}</h1>
            <button onClick={changeAge}>Change Age</button>
            <h2>{name}</h2>
            <button onClick={changeName}>Change Name</button>
            <input type="text" onChange={handleInputChange} />
            {inputValue}
        </div>
    );
}

function App() {
    const [count, setCount] = useState(0);

    const incCount = () => {
        setCount(count + 1)
    }
    const decCount = () => {
        setCount(count - 1)
    }
    const resCount = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <h2>{count}</h2>
            <button onClick={incCount}>INCREASE</button>
            <button onClick={decCount}>DECREASE</button>
            <button onClick={resCount}>RESET</button>
        </div>
    );
}


//conditional rendering with !showtext (can change css directly too)
function App() {
    const [showText, setShowText] = useState(false);

    return (
        <div className="App">
            <button onClick={() => {setShowText(!showText)}}>Show/Hide</button>
            {showText && <h1>Hi My name is Huda</h1>}
    </div>
    );
}

function App() {
    const [textColor, setTextColor] = useState("black");

    return (
        <div className="App">
            <button onClick={() => {setTextColor(textColor === "black" ? "red" : "black")}}>Show/Hide</button>
            <h1 style={{color : textColor }}>Hi My name is Huda</h1>
    </div>
    );
}
```

### TODO LIST with FILTER (but this is not use id )

```jsx
function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask]   = useState("");

    const handleInput = (e) => {
         setNewTask(e.target.value)
    }

    const addTask = () => {
        setTodoList([...todoList, newTask]);
    }

    const deleteTask = (taskName) => {
        const newTodoList = todoList.filter((task) => {
            if (task === taskName ) {
                return false;
            } else {
                return true;
            }
        });
        setTodoList(newTodoList);
    }
    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleInput}/>
                <button onClick={addTask}> Add Task</button>
                <button onClick={() => {console.log(todoList)}}> xxx</button>
            </div>
            <div className="list">
                <p>{newTask}</p>
                <br />
                <div>{todoList.map((task, key) => {
                    return ( 
                    <div key={key}>
                        <h1>{task}</h1>
                        <button onClick={() => deleteTask(task)}>X</button>    
                    </div>);
                })}</div>

            </div>
    </div>
    );
}
```

### TODO LIST MENGGUNAKAN FILTER by unix key ID to delete by item

```jsx
function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask]   = useState("");

    const handleInput = (e) => {
         setNewTask(e.target.value)
    }

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
            taskName: newTask,
        }
        setTodoList([...todoList, task]);
    }

    const deleteTask = (id) => {
        setTodoList(todoList.filter((taskFil) => taskFil.id !== id));
    }
    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleInput}/>
                <button onClick={addTask}> Add Task</button>
                <button onClick={() => {console.log(todoList)}}> xxx</button> 
            </div>
            <div className="list">
                <p>{newTask}</p>
                <br />
                <div>{todoList.map((task) => {
                    return ( 
                    <div key={task.id}>
                        <h1>{task.taskName}</h1>
                        <button onClick={() => deleteTask(task.id)}>X</button>
                    </div>);
                })}</div>

            </div>
    </div>
    );
}
```


```jsx
id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,

```
alternatif lain id: todoList.length + 1,

Ini untuk membuat id berdasarkan logika apabila todolist kosong maka nilai id 1 apabila tidak kosong maka id diambil dari id object todolist terakhir + 1 
todoList[todoList.length -1].id  = ini cara akses ke array yg berisi object dengan nilai properti id ( jumlah item todolist -1 untuk mengakses arraynya karena array dimulai dari 0 

```jsx
const todos = [
  { id: 1, task: 'Belajar JavaScript' },
  { id: 2, task: 'Membuat aplikasi web sederhana' },
  { id: 3, task: 'Menyelesaikan proyek akhir' },
];

// Mengakses nilai properti task dari elemen kedua pada array todos
console.log(todos[1].task); // Output: 'Membuat aplikasi web sederhana'
console.log(todos[1]['task']); // Output: ''Membuat aplikasi web sederhana'
// Mengakses semua nilai properti id pada array todos dengan menggunakan perulangan
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].id);

const deleteTask = (id) => {setTodoList(todoList.filter((taskFil) => taskFil.id !== id));}

<button onClick={() => deleteTask(task.id)}>X</button>
```

ketika tombol button di klik maka mengirimkan paramenter (taks.id) lalu di tangkap function deleteTask = (id) yang berisi id (  unix key setiap item ) kemudian setTodoList merupakan fungsi untuk memperbarui state todoList yg berisi item todolist yang d filter taskFill merujuk pada setiap item dari todolist yang di filter kemudian menggunakan !== untuk menyeleksi apabila taskFil.id tidak sama dengan id(dari parameter) maka array akan disimpan apabila sama array tidak akan di simpan  
