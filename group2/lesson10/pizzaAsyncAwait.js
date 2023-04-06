const orderPizza = function(pizzaName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Ваша ${pizzaName} готова`);
        }, 2000);
    })
}

const readBook = function() {
    console.log("Читаю книгу");
}

const eatPizza = function() {
    console.log("кушаю пиццу");
}


async function f() {
    console.log("Заказ принят");
    readBook();
    const newPizza = await orderPizza("Ассорти");
    console.log(newPizza);
    eatPizza();
}





// f();


