// Task 1
let d = 7; 
console.log(d); 
console.log(d * d); 
console.log(d * d * d); 



// Task 2
let h = 5; 
console.log("Значение переменной h равно: " + h); 
console.log("Квадрат значения переменной h равен: " + (h*h));



// Task 3
let x = 3; 
let y = 4; 
console.log("Произведение переменных x и y равно: " + (x * y)); 
console.log("Сумма переменных x и y равна: " + (x + y)); 



// Task 4
const len = (arr) => arr.length;
const arr = [1, 2, 3];
console.log(len(arr)); 



// Task 5
const calcParallelepiped = (a, b, c) => {
    const area = 2 * (a * b + b * c + a * c);
    const volume = a * b * c;
    console.log(`Площадь параллелепипеда: ${area}`);
    console.log(`Объем параллелепипеда: ${volume}`);
  }
calcParallelepiped(2, 3, 4);


