/**************************************
 *  Takes in an array and returns the sum of all even elements
 *  multiplied by the last number in the array
 **************************************/
function evenLast(array){
    
    if ( array.length == 0 ) { return 0; }
    
    var sum = 0;
    
    for ( var i = 0; i < array.length; i += 2 ) {
        sum += array[i];
    }
    
    return sum * array[array.length - 1];
}