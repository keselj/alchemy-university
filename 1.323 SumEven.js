// Given an array,
// find the sum of all even values inside the array and return it.

function sumEven(array) {
    let sumOfPossitive = 0;
    for (let i=0; i<array.length; i++) {
        if (array[i]%2 === 0) {
            sumOfPossitive += array[i];
        }

    }
    return sumOfPossitive; 
}
