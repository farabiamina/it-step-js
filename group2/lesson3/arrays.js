let arr = new Array();
arr = [1,2,3,4,5,6,7];

// alert(arr.at(-1));

// push - добавляет элемент в конец
// pop - удаляет элемент с конца
// shift - удаляет элемент в начале, при этом массив сдвигается, второй станет первым 
// unshift - добавляет элемент в начало 

// for ... of
let languages = ['Java', 'C#', 'C++', 'JavaScript']; 
for (let lan of languages) {
    // console.log(lan);
}


let obj = {
    1: true,
    0: false,
}
console.log(Object.values(obj));