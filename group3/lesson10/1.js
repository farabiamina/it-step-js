// callback = функция, которая является аргументом другой функции

let arr = [1,2,3];

let fn = (el, ind) => {console.log(el, ind);}
arr.forEach((element, index) => {console.log(element, index)});
arr.forEach(fn);

function fn2(callback) {
    callback();
}

fn2(() => {console.log('Callback вызвался')});
console.log(fn2);

let callIt = (cb) => {
    return cb();
}

let f = () => "Hello, world";
let a = f();
console.log(a);

console.log(callIt(f));

function myForEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        cb(element);
    }
}

// function myForEach2([1,2,3], (item) => {console.log(item)}) {
//     for (let i = 0; i < 3; i++) {
//         const element = arr[i];
//         // (item) => {console.log(item)}
//         console.log(element);
//     }
// }

myForEach(arr, (item) => {console.log(item)});


