let user = {
    name: "Anna",
    greeting() {
        alert("Hello, I'm " + this.name); // this зависит от контекста 
    }
}

let user3 = {
    name: "Derek",
    greeting() {
        let welcome = () => {
            console.log("Hello, I'm " + this.name);
        }
        welcome();
    },
}
user3.greeting();

let user2 = user;
user2.name = "John";
// user.greeting();
// user2.greeting();