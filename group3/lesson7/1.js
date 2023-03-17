// setTimeout(() => {console.log("timeout")}, 1000);
// console.log('end');

function greet() {
    console.log('hello');
    return;
}

function respond() {
    return setTimeout(() => {
        console.log('hey');
        return;
    }, 1000)
}

//     | respond= 

greet();
respond();