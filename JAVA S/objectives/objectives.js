function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}


var x = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(x);


var y = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(y);

var z = pizzaOven("deep dish", "marinara", ["mozzarella"], ["mushrooms", "olives", "onions"]);
console.log(z);

var f = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["pepperoni", "sausage"]);
console.log(f);

var r = randompizza();
console.log(r);
function randompizza() {
    var crustType = ["deep dish", "hand tossed"];

    var sauceType = ["traditional", "marinara"];

    var cheeses = ["mozzarella", "feta"];

    var toppings = ["mushrooms", "olives", "onions", "pepperoni", "sausage"];

    var random = pizzaOven(crustType[Math.floor(Math.random() * crustType.length)], sauceType[Math.floor(Math.random() * sauceType.length)],
        cheeses[Math.floor(Math.random() * cheeses.length)], toppings[Math.floor(Math.random() * toppings.length)])

    return random;
}
