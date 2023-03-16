function greet() {
    console.log("Hello");
    return "Hello";
}

function respond() {
    return setTimeout(() => {
        console.log("Hey");
        return "Hey";
    }, 1000)
}

respond();
greet();
