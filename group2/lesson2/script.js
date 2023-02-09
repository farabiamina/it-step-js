// строковые преобразования
let value = true;
value = String(true); // 'true' 'false' '123'

// численные преобразования 
let str = '123';
let num = Number(str); // 123
let num1 = +str; // 123

// alert('6' / '2'); // 3

let a = 'hello';
let b = Number(a);
console.log(b);

/*
undefined -> NaN
null -> 0
true/false -> 1/0
string -> NaN (обычная строка) либо число (цифры в виде строки)
*/

/*
'' - false
'0' - true
0 - false
1 - true
*/

// == === > < <= >= != !== || && 

// == - не сравнивает тип данных
// === - сравнивает тип данных

2 == '2' // true
2 === '2' // false

alert('2' > 1); // 2 > 2 = true
alert('01' > 1); // 1 > 1 = false
alert(null == undefined); // true

alert(null >= 0); // true

// значение undefined несравнимо с другими значениями - избегайте


let age = 20; 

let res;
if (age > 35) {
    res = "Вы взрослый";
    alert("Вы взрослый");
} 
else if (age > 18) {
    alert('Вы совершеннолетний');
}
else {
    alert('Вы маленький');
}


// ? - тернарный оператор 
// let result = условие ? значение1 : значение2

let result = (age > 35) ? "Вы взрослый" : "Вы не взрослый";

let result2 = (age > 35) ? "Вы взрослый" : 
              (age > 18) ? 'Вы совершеннолетний' : 'Вы маленький';

(age > 18) ? alert("Accepted") : alert("Rejected");

// || - true если хотя бы один из операндов true
// && - false если хотя бы один из операндов false

// оператор нулевого слияния - ??
let username;
let currentUser = username ?? "Guest";
currentUser = (username !== undefined && username !== null) ? username : "Guest";


let n1 = 5;
let n2 = 6;
let n3;
n3 = n1;
n1 = n2;
n2 = n3;

