// название переменных нельзя начинать с цифры, нельзя использовать "-"

// строковое преобразование
let value = true;
let str = String(value); // 'true'

// численное преобразование
let str2 = 'hello';
let num = Number(str2); // NaN
console.log(num);

/*
undefined -> NaN
null -> 0
true/false -> 1/0
string -> строка либо NaN
*/

/*
"0" - true
0 - false
"" - false
*/

// == === > < >= <= 

'hello' > 'helvo'; // true

/*
alert('2' > 1); // true '2' -> 2
alert('01' > 0); // true '01' -> 1

alert(null == undefined); // true
*/
/*
null > 0 - false
null == 0 - false
null >= 0 - true
*/

// if (false) {
//     alert("hello");
// }

// 1234987342

function digitsSum(num) {
    let str = String(num); // 
    let sum = Number(str[0]) + Number(str[str.length - 1]); 
    return sum;
}

console.log(digitsSum(34543));