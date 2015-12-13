function countSquares() {
    var lines = arguments;
    var numSquares = 0;
    var m = getMatrices(arguments);
    var v = m[0];
    var h = m[1];
    var dim = v.length; // Dimensions of the square
    
    // 4x4 squares
    for ( var i = 0; i <= dim - 4; i++) {
        for ( var j = 0; j <= dim - 4;j++ ) {
            if ( h[i][j] && h[i][j+1] && h[i][j+2] && h[i][j+3] && 
                 h[i+4][j] && h[i+4][j+1] && h[i+4][j+2] && h[i+4][j+3] && 
                 v[i][j] && v[i+1][j] && v[i+2][j] && v[i+3][j] &&
                 v[i][j+4] && v[i+1][j+4] && v[i+2][j+4] && v[i+3][j+4] ) {
                     
                     numSquares++;
                 }
        }
    }
    
    // 3x3 squares
    for ( var i = 0; i <= dim - 3; i++ ) {
       for ( var j = 0; j <= dim - 3; j++ ) {
            if ( h[i][j] && h[i][j+1] && h[i][j+2] && h[i+3][j] && h[i+3][j+1] && h[i+3][j+2] &&
                 v[i][j] && v[i+1][j] && v[i+2][j] && v[i][j+3] && v[i+1][j+3] && v[i+2][j+3]){
                    
                numSquares++;
            }
        }
    }
    
    // 2x2 squares
    for ( var i = 0; i <= dim - 2; i ++ ) {
        for ( var j = 0; j <= dim - 2; j++ ) {
            
            if ( h[i][j] && h[i][j+1] && h[i+2][j] && h[i+2][j+1] && 
                 v[i][j] && v[i+1][j] && v[i][j+2] && v[i+1][j+2]){
                
                numSquares++;
            }
        }
    }
    
    // 1x1 squares
    for ( var i = 0; i <= dim - 1; i++ ) {
        for ( var j = 0; j <= dim - 1; j++ ) {
            if ( h[i][j] && h[i+1][j] && v[i][j] && v[i][j+1] ) {
                numSquares++;
            }
        }
    }
    
    console.log(numSquares);
    
    return numSquares;
}

function getMatrices() {
    var lines = arguments[0];
    var dim = getSquareSize(lines);
    var v = [],
        h = [];
    
    // initialize the grids
    for (var i = 0; i < dim; i++ ) {
        h[i] = [];
    }
    for ( var i = 0; i < dim - 1; i++ ) {
        v[i] = [];
        for ( var j = 0; j < dim; j++ ) {
            v[i][j] = 0;
            h[j][i] = 0;
        }
    }
    
    // Insert the values representing lines into the corresponding grids
    for ( var i = 0; i < lines.length; i++ ) {
        var point = lines[i];
        var row, col;
        var difference = point[1] - point[0];
        
        if ( difference < 0 ) {
            console.log("["+point[0],point[1]+"]");
            difference *= -1;
            row = Math.floor((point[1] - 1) / dim);
            col = Math.floor((point[1] - 1) % dim);
        }
        else {
            row = Math.floor((point[0] - 1) / dim);
            col = Math.floor((point[0] - 1) % dim);
        }
        
        //console.log(row,col, difference);
        
        if ( difference == 1 ) { // Horizontal line
            h[row][col] = 1;
        }
        else { // Vertical line
            v[row][col] = 1;
        }
    }
    
    // Return the matrix representing the same values in the vertical and rotated horizontal matrices
    return [v,h];
}

function displayMatrix(m) {
    // Function to display a matrix
    for ( var i = 0; i < m.length; i++ ) {
        var line = "";
        for ( var j = 0; j < m[i].length; j++ ) {
            line += m[i][j];
        }
        console.log(line);
    }
}

function getSquareSize() {
    var lines = arguments[0];
    
    for ( var i = 0; i < lines.length; i++ ) {
        if ( lines[i][0] > 16 || lines[i][1] > 16 ) {
            return 5;
        }
    }
    
    return 4;
}