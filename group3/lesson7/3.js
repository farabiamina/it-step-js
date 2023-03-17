function getAllTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))
}

async function getAllTodosAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await response.json();
    console.log(json);
    let body = document.querySelector('body');
    for (let todo of json) {
        body.innerHTML += '<p>' + todo.title + '</p>';
    }
}

async function createTodo() {
    const title = "my todo";
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title})
    })
   
    console.log(response.json());
}

getAllTodosAsync();