let obj = new Object(); // конструктор
let obj2 = {}; // литерал объекта

let user = {
    name: "John",
    age: 40,
    "average income": 34643732,
}
user.salary = 49763;
delete user.salary;
user['average income'] = 3435;

const user2 = {name: "Anna"};
user2.name = "Ann";
// объект хранит ссылку на область памяти в которой находится данный объект
// user2 = user;

let fruit = prompt("Введите тип фрукта"); // apple
let cart = {
    [fruit]: 5, // имя свойства будет взято из переменной fruit
}
alert(cart.apple);

function createUser(name, age) {
    let user = {
        name, // name: name
        age, // age: age
        isAdmin: false, 
    }
    return user;
}

if ("apple" in cart) {
    alert(cart.apple);
}

for (let key in user) { // for...in for...of
    console.log(key);
    console.log(user.key);
}

let obj3 = {
    1: false,
    0: true,
}
obj3["0"];
obj3[0];

for (let key in obj3) {
    console.log(key);
}

let student1 = {
    name: "John",
    class: 4,
}

let student2 = student1; // новая переменная но она ссылается на старый объект
let student3 = Object.assign({}, student1);
// первый аргумент это объект который мы меняет и возвращаем
Object.assign(student2, student1);
