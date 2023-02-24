let input = document.getElementById('input'); // 1 element
let addBtn = document.getElementsByTagName('button')[0]; // collection [...]
let list = document.getElementsByClassName('list')[0]; // collection []
let list2 = document.querySelector('ul.list'); // первок совпадение
let list3 = document.querySelectorAll('ul.list'); // collection [...]
console.log(input);

addBtn.addEventListener("click", add);
// addBtn.removeEventListener("click", add);

function add() {
    let text = input.value;
    let check = document.createElement('input');
    check.setAttribute("type", "checkbox");
    let span = document.createElement('span');
    // let textNode = document.createTextNode(text);
    span.textContent = text;
    // span.innerHTML = text;
    let delBtn = document.createElement('button');
    delBtn.addEventListener("click", del);
    delBtn.innerHTML = 'Delete';
    let li = document.createElement('li');
    if (!text) {
        return;
    }
    else {
        li.appendChild(check);
        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    }
    input.value = "";
    console.log(text);
}

function del() {
    this.parentNode.remove();
}

// input.style.backgroundColor = "red"; // изменение стилей