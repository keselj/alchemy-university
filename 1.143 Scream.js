// Let's create a function scream which will take in a value n and return
// a string with the letter "a" repeated that many times.

function scream(n) {
    let a = "";
    for(let i = 1; i <= n; i++) {
        if (i%2 === 0) {
            a += "A";
        } else {    
            a += "a";
        }
        
    }
    return a;
}