let user = {
    name: "John",
    age: 40,
    speak() {
        console.log("Привет, я " + this.name);
    },
    grow: function() {
        this.age++;
    }
}

function welcome() {
    console.log("Привет, я " + this.name);
}

let user2 = {
    name: "Anna",
    speak: welcome(),
}

user2.speak();

let admin = Object.assign({}, user);
admin.name = "Anna";
admin.speak(); // Привет, я John 

// this = self
let getName = () => console.log(this.name);

user = {
    name: "Derek",
    getName() {
        let getName = () => console.log(this.name);
        getName();
    }
}

user.speak();
user.grow();


