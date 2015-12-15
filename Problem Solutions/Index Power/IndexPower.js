/******************************************
* Returns the nth term in the array raised to the n
******************************************/

function indexPower(array, n) {
    if ( n >= array.length ) 
        return -1;
        
    return Math.pow(array[n], n);
}