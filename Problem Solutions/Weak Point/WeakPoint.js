/******************************************
* Takes a matrix as an argument, and return the weakest row index and
* the weakest column index. The weakest is determined by which has
* the lowest total of all elements
******************************************/

function golf(matrix) {
    // Keep track of the weakest row and column's totals and indices
    var weakColIndex = 0;
    var weakRowIndex = 0;
    var weakRowTotal = -1;
    var weakColTotal = -1;
    
    // Loop over the matrix
    for ( var i = 0; i < matrix.length; i++ ) {

        // Track the current row and col totals
        var rowTotal = 0;
        var colTotal = 0;

        for ( var j = 0; j < matrix.length; j++ ) {
            // Add to each total. As it is a square the column total can use j as its row and i as the col
            rowTotal += matrix[i][j];
            colTotal += matrix[j][i];
        }

        // Update the values if needed
        if ( rowTotal < weakRowTotal  || weakRowTotal == -1 ) {
            weakRowIndex = i;
            weakRowTotal = rowTotal;
        }
        if ( colTotal < weakColTotal  || weakColTotal == -1 ) {
            weakColIndex = i;
            weakColTotal = colTotal;
        }

    }
    
    return [weakRowIndex, weakColIndex];
}
