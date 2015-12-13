function isSkewSymmetric(matrix) {
    
    for ( var i = 0; i < matrix.length; i++ ) {
        if ( matrix [i][i] != 0 ) {
            return false;
        }
    }
    
    for ( var i = 0; i < matrix.length; i++ ) {
        for ( var j = i + 1; j < matrix.length; j++ ) {
            if ( matrix[i][j] != -1 * matrix[j][i] ) {
                return false;
            }
        }
    }
    
    return true;
}