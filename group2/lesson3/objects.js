let user = {};
let user2 = new Object();

user = {
  name: "John",
  age: 30,
  "average salary": 50000,
};

user["average salary"] = 590000;
user.surname = "Smith";
delete user.surname;

const animal = { type: "cat" };
animal.type = "dog"; // можно
// animal = user; // нельзя

let fruit = prompt("Какой фрукт?");
let cart = {
  [fruit + " fruit"]: 5,
};

alert(cart.apple);

function createPerson(name, surname) {
  let person = {
    name, // name: name
    surname, // surname: surname
    age: 56,
  };
  return person;
}

let obj = {
    1: true,
    0: false,
}
alert(obj[0]);
alert(obj['0']); // оба способа верны

let uname = "name";
if ("name" in user) {
    console.log(true);
}

// for ... in
// for ... of

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}
// '123'
// свойства с целочисленными названиями сортируются по возрастанию

let human = user; /* human ---> 
                                object
                   user ------>
                   */
user.name = "Anna";
console.log(human.name); // Anna
let human2 = Object.assign(user, obj);
let human3 = Object.assign({}, user);
console.log(human2);


console.log(Object.keys(obj));
