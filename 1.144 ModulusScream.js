// Let's modify our function to return
// a scream alternating between lower and capital case.

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