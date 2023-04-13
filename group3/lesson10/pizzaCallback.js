let makePizza = (cb) => {
    console.log(`Ваша пицца готовится...`);
    setTimeout(cb, 2000);
}

let readBook = () => {
    console.log("Читаю книгу");
}

let eatPizza = () => {
    console.log("Пицца готова, очень вкусно");
}

makePizza(eatPizza);
readBook();
