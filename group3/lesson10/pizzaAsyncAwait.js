let makePizza = () => {
    console.log('Заказ принят. Пицца готовиться...');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Пицца готова");
            console.log("Пицца готова");
        }, 3000);
    })
}

let readBook = () => {
    console.log("Читаю книгу");
}

let eatPizza = () => {
    console.log("Съела пиццу");
}

async function proccess() {
    await makePizza();
    eatPizza();
}

makePizza().then((value) => {console.log(value)});

proccess();
readBook();