/******************************************
* Takes in a matrix and checks to see if it is symmetric or not
******************************************/

function isSkewSymmetric(matrix) {
    
    // Checks to see if diagonal zero line exists
    for ( var i = 0; i < matrix.length; i++ ) {

        if ( matrix [i][i] != 0 ) {
            return false;
        }

    }
    
    // If the point at [x,y] is not equal to the negative of [y,x] return false
    for ( var i = 0; i < matrix.length; i++ ) {

        for ( var j = i + 1; j < matrix.length; j++ ) {

            if ( matrix[i][j] != -1 * matrix[j][i] ) {
                return false;
            }

        }

    }
    
    // Matrix is symmetric
    return true;
}