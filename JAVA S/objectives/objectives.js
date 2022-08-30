function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}


var x = pizzaOven("deep dish" , "traditional" , ["mozzarella"] , ["pepperoni" , "sausage"]);
console.log(x); 


var y = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"] );
console.log(y);
