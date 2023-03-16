console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve("Promise")
    .then(res => console.log("Promise"));

console.log("End");