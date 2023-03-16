// fetch('https://jsonplaceholder.typicode.com/to3dos/')
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(() => console.log("Ошибка")) 
//     .finally(() => console.log("Конец"))


let body = document.getElementsByTagName('body')[0];

async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const json = await res.json();
    console.log(json);
    for (todo of json) {
        body.innerHTML += '<p>'+ todo.title+ '</p>'
    }
}

window.addEventListener('DOMContentLoaded', getTodos);

// async function createTodo() {
//     const title = "my todo";
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/', {
//         method: "POST",
//         body: JSON.stringify(title),
//     });
//     const json = await res.json();
//     console.log(json);
// }


// console.log(title);
// let title = 1;

// foo();
// function foo() {}