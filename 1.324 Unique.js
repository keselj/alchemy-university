// Write a function that will take an array of numbers
// and return a new array that only contains unique numbers.

function unique(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        let duplicate = false;
        for (let n = 0; n < newArray.length; n++){
            if (array[i] === newArray[n]) {
                duplicate = true;
                break;
            }
            
        }
        if (!duplicate) {
            newArray.push(array[i]);
        } 
    }
    return newArray;
}
