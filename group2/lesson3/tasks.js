// написать функцию toString котарая принимает объект и выводит строку
// 'name Adam, age 27'
let user = {
    name: "Adam",
    age: 27,
}

function toString(obj) {
    let str = "";
    for (let key in obj) {
        str += key + " " + obj[key] + ", ";
    }
    return str;
}

console.log(toString(user));


// функция принимает n и рисует треугольник из * размером n
/*
4
*
**
***
****
*/

function stars(n) {
    let str = ""; 
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
}

console.log(stars(4));

// [{...., salary: 45000, ...}, {..., salary: 3245, ...},], найти сумму всех salary в массиве
// 45678543

function totalSalary(arr) {
    let total = 0;
    for (let obj of arr) {
        if ("salary" in obj) {
            total += obj.salary;
        }
    }
    return total;
}

let arr = [
    {name: "f", salary: 3000,},
    {age: 234, salary: 5000,},
    {name: "mlknfjer"},
]
console.log(totalSalary(arr));


//     (()())())
//     ({})[{]}()

//   (((

function brackets(str) {
    let stack = []; 
    if (str[0] === ")") return false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            stack.push(str[i]);   
        }
        else {
            if (!stack.length) return false;
            else stack.pop();
        }
        // console.log(stack);
    }
    if (stack.length === 0) {
        return true;
    }
    return false;
}

console.log(brackets("(()())())"));
// (   )()
