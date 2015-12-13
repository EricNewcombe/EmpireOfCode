var values = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function convert(strNumber, radix) {
    var total = 0;
    
    var power = 0;
    
    for ( var i = strNumber.length - 1; i >= 0; i-- ) {
        total += values.indexOf(strNumber.charAt(i)) * Math.pow(radix, power);
        power++;
        if ( values.indexOf(strNumber.charAt(i)) > radix - 1 ) {
            return -1;
        }
    }
    
    return total;
}