/******************************************
* Takes in a grid that represents enemies and a position on the grid in the row and column.
* It then scans the points directly surrounding the point, counting the number of enemies present
******************************************/

function countNeighbours(grid, row, col){
    
    var numNeighbors = 0;
    
    // Search in a 3x3 grid surrounding the point, without examining the center point itself
    for ( var i = -1; i <= 1; i++ ) { // y

        for ( var j = -1; j <= 1; j++ ) { // x

            if ( i == 0 && j == 0 ) { continue; } // If its the point being examined continue

            // Make sure the examined point won't be off the grid
            if ( row + i > -1 && row + i < grid.length && col + j > -1 && col + j < grid[0].length ) {

                // Increment if the examined point holds a unit
                if ( grid[row + i][col + j] ) {
                    numNeighbors++;
                }

            }
        }
    }
    
    return numNeighbors;
}