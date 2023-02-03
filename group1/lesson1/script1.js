function func1() {
    alert("hello");
}
// void

function func2() {
    return "hello";
}
// string

let sum = (a,b) => {
    return a + b;
}

let f = () => {

}

let n = sum(3, 4);
console.log(n);

let arr = [1, "hello", false, {}, [1,2,3]];
arr.forEach((elem) => console.log(elem));
arr.map(elem => console.log(elem));

console.log(sum(3,6));