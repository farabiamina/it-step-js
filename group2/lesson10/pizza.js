const orderPizza = function (pizzaName) {
    setTimeout(() => {
        console.log(`Заказ принят. Ваша ${pizzaName} готовится...`);
    }, 2000);
}

const readBook = function() {
    console.log("Читаю книгу");
}

const eatPizza = function() {
    console.log("Пицца готова, очень вкусно");
}

orderPizza("Pepperoni");
readBook();
eatPizza();