let age = +prompt();
let condition = 3 == 4;

if (condition) {}
if (age > 35) {
    console.log("Вы взрослый");
}
else if (age > 18) {
    console.log("Вы совершеннолетний");
}
else {
    console.log("Вы маленький");
}

// ? - тернарный оператор

// let result = условие ? значение1 : значение2;

let isMinor = (age < 18) ? true : false;

let ageValidation = (age > 35) ? "Вы взрослый" : 
                    (age > 18) ? "Вы совершеннолетний":
                    "Вы маленький";

(age > 18) ?
    alert('Вы совершеннолетний') :
    alert('Вы не совершеннолетний');

//  || - или, && - и, !==, !=
if (age > 18 && age < 30) {}

// ?? - оператор нулевого слияния
let a, b;
let res = a ?? b;

let user = null;
let currentUser = user ?? "Guest";