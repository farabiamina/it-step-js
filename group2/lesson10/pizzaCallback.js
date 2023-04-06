const orderPizza = function (pizzaName, cb) {
    console.log(`Заказ принят. Ваша ${pizzaName} готовится...`);
    setTimeout(cb, 2000);
}

const readBook = function() {
    console.log("Читаю книгу");
}

const eatPizza = function() {
    console.log("Пицца готова, очень вкусно");
}

orderPizza("Pepperoni", eatPizza);
readBook();
// eatPizza();