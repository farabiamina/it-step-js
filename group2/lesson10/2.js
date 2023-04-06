[1,2,3].forEach((el) => console.log(el));

const myForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        cb(element);
    }
}

myForEach(["banana","strawberry","grape"], (fruit) => console.log(fruit));

let person = {
    name: "John",
    age: 35,
    change: (n) => {
        this.age += n;
    }
}



