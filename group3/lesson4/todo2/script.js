let input = document.getElementById("inputText");
let addBtn = document.getElementById("add-btn");
let list = document.getElementById("list");

let sortSelect = document.getElementById("sort");
let filSelect = document.getElementById("filter");

sortSelect.addEventListener("change", sorting);
filSelect.addEventListener("change", filtering);

let todoList = [
  // {id: 1, text: 'task1', checked: false},
  // {id: 2, text: 'task2', checked: true},
  // {id: 3, text: 'task3', checked: false},
];

if (localStorage.getItem("todolist2")) {
  todoList = JSON.parse(localStorage.getItem("todolist2"));
  renderTodo();
}

// renderTodo();
function renderTodo(arr = todoList) {
  let tasks = "";
  arr.forEach((elem) => {
    tasks += `<li class="my-2 py-3 list-group-item" id="list">
        <div class="row">
          <div class="col-1">
            <input onchange="check(${
              elem.id
            })" class="" type="checkbox" id="check" ${
      elem.checked ? "checked" : ""
    }/>
          </div>
          <div class="col-6">
            <span class="h5" id="text">${elem.text}</span>
          </div>
          <div class="col-4">
            <button onclick="del(${
              elem.id
            })" class="btn btn-dark">Delete</button>
            <button onclick="edit(${
              elem.id
            })" class="btn btn-dark">Edit</button>
          </div>
        </div>
      </li>`;
  });
  list.innerHTML = tasks;
  localStorage.setItem("todolist2", JSON.stringify(todoList));
}

addBtn.addEventListener("click", add);

function add() {
  let newTodo = {
    id: Date.now(),
    text: input.value,
    checked: false,
  };
  todoList.push(newTodo);
  input.value = "";
  renderTodo();
}

function del(taskId) {
  todoList = todoList.filter((elem) => elem.id !== taskId);
  renderTodo();
}

function edit(taskId) {
  let newText = prompt("Введите новый текст");
  let editTask = todoList.filter((elem) => elem.id === taskId)[0]; // [{}][0]
  if (editTask.text === newText) {
    return;
  }
  editTask.text = newText;
  renderTodo();
}

function check(taskId) {
  let checkTask = todoList.filter((elem) => elem.id === taskId)[0]; // [{}][0]
  checkTask.checked = !checkTask.checked;
  renderTodo();
}

function sorting(event) {
  // console.log(event.target.value);
  if (event.target.value === "2") {
    renderTodo([...todoList].sort((a, b) => a.text.localeCompare(b.text)));
  } else {
    renderTodo();
  }
}

function filtering(event) {
  if (event.target.value === "2") {
    renderTodo([...todoList].filter(todo => todo.checked === true));
  } else if (event.target.value === "3") {
    renderTodo([...todoList].filter(todo => todo.checked === false));
  }
  else {
    renderTodo();
  }
}

// let myArr = [1,3,4];
// function f(arr = myArr) {
//   arr.forEach(elem => elem);
// }

// f([...myArr].sort());

// let fruits = ['apple', 'banana', 'grape'];

// fruits.forEach(fruit => console.log(fruit));
// fruits = fruits.filter(fruit => fruit[0] === 'a');
// fruits = fruits.filter(function(fruit) {
//     if (fruit[0] === 'a') {
//         return true;
//     }
//     return false;
// });

// fruits.forEach(fruit => console.log(fruit));

// fruits.forEach(function(fruit) {
//     fruit = fruit + fruit;
//     console.log(fruit);
// })
