function transpose(matrix) {
    var newMatrix = [];
    
    for ( var i = 0; i < matrix[0].length; i++ ) {
        newMatrix[i] = [];
    }
    
    for ( var i = 0; i < matrix.length; i++ ) {
        for ( var j = 0; j < matrix[i].length; j++ ) {
            newMatrix[j][i] = matrix[i][j];
        }
    }
    /* printMatrix(matrix);
    printMatrix(newMatrix); */
    
    return newMatrix;
}

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