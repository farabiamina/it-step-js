let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = [...arr1, ...arr2];
arr3 = [...arr3, 4];

// console.log(arr3);

let arr4 = arr1;

let object1 = {
    a: 1,
    b: 2,
    c: 3,
}
let object2 = {...object1, a: 4};
// console.log(object2);

function fn({page: page, ...credentials}) {
    console.log(credentials);
}

let myPage = 2;
fn({page: myPage, a: 1, b: 2});

