let input = document.getElementById("inputText");
let addBtn = document.getElementById("add-btn");
let list = document.getElementById("list");

let sortSelect = document.getElementById("sort");
let filSelect = document.getElementById("filter");

sortSelect.addEventListener("change", sorting);
filSelect.addEventListener("change", filtering);

let todoList = [];

async function getTodos() {
  const response = await fetch("https://crudcrud.com/api/90d725826ed2484b8439f20b108fffe2/todos");
  todoList = await response.json();
  renderTodo();
  console.log(todoList);
}
getTodos();

function renderTodo(arr = todoList) {
  let tasks = "";
  arr.forEach((elem) => {
    tasks += `<li class="my-2 py-3 list-group-item" id="list">
        <div class="row">
          <div class="col-1">
            <input onchange="check('${
              elem._id
            }')" class="" type="checkbox" id="check" ${
      elem.checked ? "checked" : ""
    }/>
          </div>
          <div class="col-6">
            <span class="h5" id="text">${elem.text}</span>
          </div>
          <div class="col-4">
            <button onclick="del('${
              elem._id
            }')" class="btn btn-dark">Delete</button>
            <button onclick="editWithGet('${
              elem._id
            }'
            )" class="btn btn-dark">Edit</button>
          </div>
        </div>
      </li>`;
  });
  list.innerHTML = tasks;
  localStorage.setItem("todolist2", JSON.stringify(todoList));
}

addBtn.addEventListener("click", add);

async function add() {
  let newTodo = {
    text: input.value,
    checked: false,
  };
  await fetch("https://crudcrud.com/api/90d725826ed2484b8439f20b108fffe2/todos", {
    method: "POST",
    headers: {
      "Content-type" : "Application/json",
    },
    body: JSON.stringify(newTodo),
  })
  input.value = "";
  getTodos();
}

async function del(taskId) {
  await fetch(`https://crudcrud.com/api/90d725826ed2484b8439f20b108fffe2/todos/${taskId}`, {
    method: "DELETE",
  })
  getTodos();
}

// Могут быть проблемы с checked
async function edit(taskId, taskChecked, taskText) {
  let updatedText = prompt("Введите новый текст");
  if (taskText === updatedText) {
    console.log("Тот же текст");
    return;
  }
  let updatedTodo = {
    text: updatedText,
    checked: taskChecked,
  }
  await fetch(`https://crudcrud.com/api/90d725826ed2484b8439f20b108fffe2/todos/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-type" : "Application/json",
    },
    body: JSON.stringify(updatedTodo),
  })
  getTodos();
}

async function editWithGet(taskId) {
  let updatedText = prompt("Enter new text");
  const response = await fetch(
    `https://crudcrud.com/api/90d725826ed2484b8439f20b108fffe2/todos/${taskId}`
  );
  const oldTodo = await response.json(); // {text: "", checked: false}
  let updatedTodo = {
    ...oldTodo,
    text: updatedText,
  }
  await fetch(`https://crudcrud.com/api/90d725826ed2484b8439f20b108fffe2/todos/${taskId}`, {
    headers: {"Content-type": "Application/json"},
    method: "PUT",
    body: JSON.stringify(updatedTodo),
  });
  getTodos();
}

async function check(taskId) {
  let oldTodo = null;
  for (let todo of todoList) {
      if (todo._id == taskId) {
        oldTodo = todo;
      }
  }
  let updatedTodo = {
    ...oldTodo,
    checked: !oldTodo.checked,
  }
  console.log(updatedTodo);
  await fetch(`https://crudcrud.com/api/90d725826ed2484b8439f20b108fffe2/todos/${todo._id}`, {
    headers: {"Content-type": "Application/json"},
    method: "PUT",
    body: JSON.stringify(updatedTodo),
  });
  getTodos();
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
