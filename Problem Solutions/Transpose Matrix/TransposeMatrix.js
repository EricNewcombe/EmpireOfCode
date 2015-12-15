/******************************************
* Takes a matrix as an argument and returns the transpose of it
******************************************/

function transpose(matrix) {
    var newMatrix = [];
    
    // Create a new array to return
    for ( var i = 0; i < matrix[0].length; i++ ) {
        newMatrix[i] = [];
    }
    
    // Set every value [x,y] from matrix to [y,x] in transposed matrix
    for ( var i = 0; i < matrix.length; i++ ) {
        for ( var j = 0; j < matrix[i].length; j++ ) {
            newMatrix[j][i] = matrix[i][j];
        }
    }
    
    return newMatrix;
}

/******************************************
* Helper function to print string representation of matrix
******************************************/
function printMatrix ( matrix ) {
    for ( var i = 0; i < matrix.length; i++ ) {
        var line = "| ";
        for ( var j = 0; j < matrix[i].length; j++ ) {
            line += matrix[i][j] + " ";
        }
        line += "|";
        console.log(line);
    }
}