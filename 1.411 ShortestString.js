// The function shortestString takes two string arguments: 
// str1 and str2.
// Determine which of the two strings is shorter, return that string.

function shortestString(str1, str2) {
    return str1.length > str2.length ? str2:str1;
    if (str1.length > str2.length) {
        return str2;
    }
    return str1;
}