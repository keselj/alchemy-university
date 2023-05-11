// In the string argument find the index of the first
// lower-case "x" and return it.

function findFirstX(string) {
    return string.indexOf("x");
    for ( let i = 0; i <= string.length; i++) {
        if (string[i] === "x") {
            return i;
        }
    }
    return -1;
}