// Within the function Celebrity, a method is used to fetch the celebrity's age. 
// The second argument to fetchAge is a callback function.
// The callback function will receive age as an argument.
// Fix this.age to refer to the same this as the function Celebrity.

const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, (age) => {
        this.age = age;
    });
}