let arr1 = [1,2,3];
let arr2 = [4,5,6];

// let arr3 = arr1.concat(arr2);

let arr3 = [...arr1, ...arr2];

// console.log(...arr1);
// console.log(arr3);

let arr4 = [...arr1];

let object1 = {
    a: 1,
    b: 2,
    c: 3,
}

// console.log(JSON.stringify(object1));

let object2 = {
    d: 4,
    e: 5,
    f: 6,
}

// console.log({...object1, a: "updated"});

// {name, surname}
// {name: name, surname: surname};


function fn({page: page, ...credentials}) {
    console.log(credentials);
}

let myPage = 3;

fn({a: 1, b: 2, c: 3, myPage});


