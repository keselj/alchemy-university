// Modify catchError to return the error if one is thrown.
// If no error is thrown, return false

function catchError(fn) {
    try {
        fn();
    }
    catch(ex){
        return true;
        
    }
    return false;
}