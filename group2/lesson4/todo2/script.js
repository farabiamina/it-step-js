let input = document.getElementById("inputText");
let list = document.getElementById("list");

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", add);

let todoList = [
  //   { id: 1, text: "task1", checked: false },
  //   { id: 2, text: "task2", checked: true },
  //   { id: 3, text: "task3", checked: false },
];
// updateTodo();
if (localStorage.getItem('todoList')) {
    todoList = JSON.parse(localStorage.getItem('todoList'));
    updateTodo();
}
function updateTodo() {
  let todoHTML = "";
    todoList.forEach((elem) => {
      todoHTML += `<li class="my-2 py-3 list-group-item" id="list">
        <div class="row">
          <div class="col-1">
            <input onchange="check(${elem.id})" class="" type="checkbox" id="check" ${
              elem.checked ? "checked" : ""
            }/>
          </div>
          <div class="col-6">
            <span class="h5" id="text">${elem.text}</span>
          </div>
          <div class="col-4">
            <button onclick="del(${
              elem.id
            })" class="btn btn-dark delete-btn">Delete</button>
            <button onclick="edit(${
                elem.id
              })" class="btn btn-dark">Edit</button>
          </div>
        </div>
      </li>`;
    });
  list.innerHTML = todoHTML;
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function add() {
  if (!input.value) {
    // "" = false
    return;
  }
  let newTask = {
    id: Date.now(),
    text: input.value,
    checked: false,
  };
  todoList.push(newTask);
  input.value = "";
  updateTodo();
}

function del(taskId) {
  //   console.log(this);
//   console.log(taskId);
  todoList = todoList.filter((elem) => elem.id !== taskId);
  updateTodo();
}

function edit(taskId) {
    let newText = prompt("Введите новый текст");
    let editTask = todoList.filter(elem => elem.id === taskId)[0];
    editTask.text = newText;
    updateTodo();
}

function check(taskId) {
    let checkTask = todoList.filter(elem => elem.id === taskId)[0];
    if (checkTask.checked) {
        checkTask.checked = false;
    }
    else checkTask.checked = true;
    updateTodo();
    // (checkTask.checked) ? false : true;
}


