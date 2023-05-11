// Complete the willEat function.
// The three arguments will be boolean values (true or false).
// If any of them are true, return true.

function willEat(hasPizza, hasDonuts, hasCookies) {

    if (hasPizza === true || hasDonuts === true || hasCookies === true) {
        return true;
    }
    return false;
}