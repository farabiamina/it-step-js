let i = 5;
i = 'hello';
console.log(typeof i);

// примитивные переменные number string boolean null undefined 
// int float = number 

let a;
console.log(typeof a);

let b = '';
let c = true;
let d = null;

const PI = 3.14;

let person = {
    name: 'John',
    age: 45,
    city: {
        name: 'NY',
        country: 'USA',
    }
};

person.age = 30;
person.city.name;

let arr = [5, 'hello', [], {}, false, undefined];
arr[1] = 'world';

let n = arr.length;
arr.length = 4;
console.log(arr);
// let n = len(arr);

let x = 2;
let y = '2';

console.log(x == y); // true
console.log(x === y); // false 

a = [1,2,3];
b = [1,2,3];

a === b; // false
a === a; // true

// + - * / 
// ** - возведение в степень
// % - остаток от деления

let f = 0;
// f = ++f;

console.log(f++); // 0
// 1
console.log(++f); // 1

f += 1; 
f = f + 1;

let message = +prompt('Введите число');
console.log(message + " " + typeof message);

'hello'[3]; // 'l'


1 + '2'; // '1' + '2' = '12'

1 + 2 + '3'; // '33'
'1' + 2 + 3; // '123'

[] + 1 + 2; // '' + 1 + 2 = '12'
1 + 2 + [] + false; // '3' + false = '3false'


f1();
function f1() {
    console.log(4);
}

function f2(a, b) {
    return a + b;
}

console.log(f2(4,5));
console.log(f1());

let f3 = function() {}
f3();
f4();
let f4 = () => {}


