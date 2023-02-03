let nam;
// Все переменные до инициализации undefined 
nam = "'Amina'";

nam = 1;
nam = nam.toString();

nam = 1.0;
// nam = false;

let camelCase;

var num;

console.log(nam);

let age = +prompt("Введите свой возраст"); // '21'
age = age + 27; // '21' + 27 = '21' + '27' = '2127' 
alert("В 2050 году тебе будет " + age);

console.log("Строка" + (2 + 4)); 
// 'Строка24'
console.log("Строка" + (2 + 4)); 
// 'Строка6'
console.log(2 + 4 + "Строка");
// '6Строка'

let person = {
    name: "John",
    age: 45,
    city: {
        name: "Almaty",
        population: 2000000,
    },
};

let pname = person.name; 
person.age = 30;
person.city.name;


let arr = [1, "hello", false, {}, [1,2,3]];
console.log(arr.length);
console.log(arr[3]);


console.log("hello"[0]);

arr.forEach(elem => console.log(elem));