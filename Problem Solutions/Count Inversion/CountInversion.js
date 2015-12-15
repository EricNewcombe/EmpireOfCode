/******************************************
* Takes in an array representing a sequence of numbers. Loops through and updated the
* number of swaps that have to be made by determining if the value of the int at the
* current position of the array is less that the examined position
******************************************/

function countInversion(sequence) {
    var numInv = 0; // Number of inversions

    for ( var i = 0; i < sequence.length; i++ ) {
        // Set the examined number and starting index
        var n = sequence[i];
        var j = i + 1;
        while ( j < sequence.length ) {
            // Loop through to the end of the sequence incrementing the number of inversions
            if ( n > sequence[j] ) {
                numInv++;
            }
            j++;
        }
    }
    //console.log(numInv);
    return numInv;
}