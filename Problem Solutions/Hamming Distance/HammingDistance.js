/*************************************************************************
 * Takes in two integers and returns the hamming distance between them
 *************************************************************************/
function hamming(n, m){
    // Get the binary representations of m and n
    n = getBinary(n);
    m = getBinary(m);
    
    // Determine which is longer of the two binary strings and then add zeros to the
    // beginning of the shorter representation until they are the same length
    n.length > m.length ? m = addZeros(m,n.length) : n = addZeros(n,m.length);
    
    // Determing the distance between the two binary strings
    var distance = 0;
    
    for ( var i = 0; i < m.length; i++ ) {
        
        if ( m.charAt(i) !== n.charAt(i) ) {
            distance++;
        }
        
    }
    return distance;
}

/*************************************************************************
 * Takes in an integer and returns the binary string representation of it
 *************************************************************************/
function getBinary(n) {
    
    var power = 0;
    
    while ( Math.pow( 2, power ) <= n ) {
        if ( Math.pow( 2, power + 1 ) > n ) { break; }
        power++;
    }
    
    var binaryString = "";
    
    for ( var i = power; i >= 0; i-- ) {
        
        var binaryDigit = Math.pow( 2, i );
        if ( binaryDigit <= n ) {
            n -= binaryDigit;
            binaryString += "1";
        }
        else {
            binaryString += "0";
        }
    }
    
    return bin;
}

/*************************************************************************
 * Adds zeros to the beginning of the binary string so that it is the expected length
 *************************************************************************/
function addZeros(binaryString, expectedLength) {
    
    var zeros = "";
    
    for ( var i = 0; i < expectedLength - binaryString.length; i++ ) {
        zeros += "0";
    }
    
    return zeros + binaryString;
    
}