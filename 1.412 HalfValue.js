// The function halfValue takes an array of numbers.
// It should return a new array with all the original values halved.
// Odd numbers should be rounded up to the nearest whole number.

function halfValue(numbers) {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        newArray.push(Math.round(numbers[i] / 2));
    }
    return newArray;
}