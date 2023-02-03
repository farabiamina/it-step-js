let i = 0;
i = 'hello';
i = false;

let a; // undefined - неопределенный тип
let b = undefined;

var c = 'h';
const PI = 3.14;

// int, float = number 

let cnt = 4.0;
let t = true;
t = false;

let person = {
    name: 'John',
    age: 43,
    city: {
        name: 'Almaty',
        country: 'KZ',
    } 
}

person.name = 'Anna';
console.log(person.name);

let arr = [3, false, 'hello', {}, [], 4];
arr[0] = 4;
arr.length = 10;
let n = arr.length; // length - поле
// n = len(arr); - функция
console.log(arr.length);
console.log(arr);


// let camelCase;
function func() {
    console.log(3);
}

function f2() {
    return false;
}

function isEven(n) {
    if (n%2) {
        return false;
    }
    return true;
}



console.log(isEven(4));

if (isEven(cnt)) {}
// void - тип функции которая ничего не возвращает 

// + - / * = 
// ** - возведение в степень
// % - остаток от деления

function f3(a,b) {}

let f4 = (a,b) => {}
f4();

arr.forEach(
    (elem) => {
        console.log(elem)
    }
);

console.log('cnt = ' + cnt);

1 + '2'; // = '1' + '2' = '12'
1 + 2 + '3'; // '33'
[] + 1 + 2; // '' + 1 + 2 = '1' + 2 =  '12'
[] + 1 + 2 + false; // '12' + false = '12false'

let d = 2;
let e = '2';

console.log(d == e); // true
console.log(d === e); // false 

let arr1 = [1,2,3];
let arr2 = [1,2,3];
arr1 == arr2; // false 
arr1 === arr2; // false

'hello'[3]; // 'l'

alert("hello");
let message = +prompt("Введите число"); // '4'
console.log(typeof message);