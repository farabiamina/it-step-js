let n = () => {
    let num = 2;
}

n(5);


let f = (callback) => {
    console.log(callback);
}

let five = () => 5;

f(five());


let callIt = (cb) => {
    return cb();
}

// let fn = () => "Hello";

console.log(callIt( () => "Hello" ));

// console.log(f);

