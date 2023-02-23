let input = document.getElementById('inputText');
let list = document.getElementById('list');

// let input2 = document.getElementsByClassName('input');
// let els = document.getElementsByTagName('div');
// let qs = document.querySelector('input.check');
// let qsa = document.querySelectorAll('input.check');
// console.log(els);

let addBtn = document.getElementById('add-btn');
addBtn.addEventListener("click", add);
// add_btn.removeEventListener("click", add);

function add() {
    // let text = input.value;
    // console.log(text);
    let checkbox = document.createElement('input');
    let span = document.createElement('span');
    let text_node = document.createTextNode(input.value);
    // span.textContent = text_node;
    span.textContent = "dnfueif";
    // span.innerHTML = 
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    checkbox.setAttribute("type", "checkbox");
    // input.classList.add("");
    // input.style.backgroundColor = "red";

    if (text_node !== "") {
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
    input.value = "";
    deleteBtn.addEventListener("click", del);
}

function del() {
    this.parentNode.remove();
}

addBtn.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("menu");
})