async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await response.json();
    console.log(todo);
}

getTodo();

const getTodo2 = function(cb) {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(data => cb(data))
        // .then(n => );
}

getTodo2((todo) => console.log(todo.title));