// Let's update our startsWithX function to return true for
//  an upper-case X as well as a lower-case x.

function startsWithX(string) {
    return string[0].toUpperCase() === "X";
}