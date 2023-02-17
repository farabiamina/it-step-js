// 1. написать функцию toString которая выводит объект в виде строки в формате "key value, key value"

let user = {
    name: "John",
    age: 49,
}



function toString(obj) {
    let str = "";
    for (let key in obj) {
        str += key + " " + obj[key] + ", ";
        // "hello " + name + "," = "hello John,"   
    }
    return str;
}

let user_str = toString(user);
console.log(user_str); // "name John, age 49, "


// 2. Найти сумму всех зарплат из массива объектов
let arr = [{name: "ann", salary: 3000}, {name: "john"}, {salary: 5000}] 
// 8000

function totalSalary(arr) {
    let total = 0; 
    for (let obj of arr) {
        if ("salary" in obj) {
            total += obj.salary; // 0 + 3000 = 3000      3000 = 3000+5000 = 8000
        }
    }
    return total; // 8000
}

console.log(totalSalary(arr));

// 3. дается n, вам надо вывести треугольник из * размером nxn
// 5
/*

1 *
2 **
3 ***
4 ****
5 *****
\n
*/

// *
// **
// ***
// 

function stars(n) {
    let str = "";
    for (let i = 1; i <= n; i++) { // 1
        for (let j = 0; j < i; j++) { // *
            str += "*";
        }
        str += "\n";
    } 
    return str;
}

console.log(stars(6));

// дается n, надо вывести матрицу
[[1,0,0,0],
[0,1,0,0],
[0,0,1,0],
[0,0,0,1]]
// 4
/*
  0123
0 1000
1 0100
2 0010
3 0001
*/
/*
  0123
0 0001
1 0010
2 0100
3 1000
*/


function matrix(n) {
    let arr = []; 
    for (let i = 0; i < n; i++) {  // 0 1 3 4
        arr.push([]); // [[1,0,0,0], []]
        for (let j = 0; j < n; j++) { // 0 1 2 3
            if (j == i) {
                arr[i].push(1); //[[0, 1, 0, 0]]
            }
            else arr[i].push(0);
        }
    }
    let str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
           str += arr[i][j];
        }
        str += "\n";
    }
    return str;
}

console.log(matrix(7));