// Given an array of pizza orders, return the total number of pizzas ordered.
// The orders are an array of objects, each with pizzas key inside

const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let sumOfAllPizzas = 0;
    for(let i = 0; i<orders.length; i++) {
        if (orders[i].type === ORDER_TYPES.PIZZA){
            sumOfAllPizzas += orders[i].pizzas;
        }
        
    }
    return sumOfAllPizzas;
}
