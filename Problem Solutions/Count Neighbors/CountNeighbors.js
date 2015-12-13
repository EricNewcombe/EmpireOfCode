function countNeighbours(grid, row, col){
    
    var numNeighbors = 0;
    
    for ( var i = -1; i <= 1; i++ ) {
        for ( var j = -1; j <= 1; j++ ) {
            if ( i == 0 && j == 0 ) { continue; }
            if ( row + i > -1 && row + i < grid.length && col + j > -1 && col + j < grid[0].length ) {
                if ( grid[row + i][col + j] ) {
                    numNeighbors++;
                }
            }
        }
    }
    return numNeighbors;
}