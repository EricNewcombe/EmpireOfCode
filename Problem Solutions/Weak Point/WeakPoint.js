
function golf(matrix) {
    var weakColIndex = 0;
    var weakRowIndex = 0;
    var weakRowTotal = -1;
    var weakColTotal = -1;
    
    for ( var i = 0; i < matrix.length; i++ ) {
        var rowTotal = 0;
        var colTotal = 0;
        for ( var j = 0; j < matrix.length; j++ ) {
            rowTotal += matrix[i][j];
            colTotal += matrix[j][i];
        }
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
