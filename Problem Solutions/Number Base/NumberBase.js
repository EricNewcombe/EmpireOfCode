/******************************************
* Takes in a string representation of a number and the base of it. Convenrts the
* String to a decimal number ( base 10 )
******************************************/

var values = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function convert(strNumber, radix) {

    var total = 0;
    var power = 0;
    
    // Loop through all the digits of the string starting at the right
    for ( var i = strNumber.length - 1; i >= 0; i-- ) {

        // multiply the value of the digit by the power of the radix represented at that position then increment power
        total += values.indexOf(strNumber.charAt(i)) * Math.pow(radix, power);
        power++;

        // If it is out of the scope of the radix, return -1
        if ( values.indexOf(strNumber.charAt(i)) > radix - 1 ) {
            return -1;
        }
    }
    
    return total;
}