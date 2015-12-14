function countInversion(sequence) {
    var numInv = 0;
    for ( var i = 0; i < sequence.length; i++ ) {
        var n = sequence[i];
        var j = i + 1;
        while ( j < sequence.length ) {
            if ( n > sequence[j] ) {
                numInv++;
            }
            j++;
        }
    }
    console.log(numInv);
    return numInv;
}