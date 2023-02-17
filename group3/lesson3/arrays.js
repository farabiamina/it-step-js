let arr1 = new Array(); 
let arr = [1,2,3,4,5,6,7];

console.log(arr.at(-1));

// pop / push shift / unshift

// push - добавляет элемент в конец
// pop - удаляет элемент с конца

// unshift - добавляет элемент в начало
// shift - удаляет первый элемент

arr.pop();
arr.push(8);

for (let elem of arr) { // бегает по значениям массива без доступа к индексу
    console.log(elem);
}

console.log(arr.indexOf(10)); // -1


