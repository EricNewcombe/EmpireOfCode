function xoReferee(gameResult) {
    
    for ( var i = 0; i < gameResult.length; i++ ) {
        gameResult[i] = gameResult[i].split("");
    }
    
    var xWin = false;
    var oWin = false;
    var boardDimension = gameResult.length;
    
    // Loop through the gameBoard
    for ( var y = 0; y < boardDimension; y++ ) {
        for ( var x = 0; x < boardDimension; x++ ) {
            
            var currentCell = gameResult[y][x];
            
            if ( currentCell == "." ) { continue; }
            // Check diagonal
            
            if ( y <= boardDimension - 3 ) {
                // Forward diagonal
                if ( x <= (boardDimension / 2) - 1 ) {
                    if ( currentCell == gameResult[y+1][x+1] && currentCell == gameResult[y+2][x+2] ) {
                        currentCell == "X" ? xWin = true : oWin = true;
                    }
                }
                // backwards diagonal
                else if ( x > (boardDimension / 2) ) {
                    if ( currentCell == gameResult[y+1][x-1] && currentCell == gameResult[y+2][x-2] ) {
                        currentCell == "X" ? xWin = true : oWin = true;
                    }
                }
            }
            // Check vertical
            if ( y <= boardDimension - 3 ) {
                if ( currentCell == gameResult[y+1][x] && currentCell == gameResult[y+2][x] ) {
                    currentCell == "X" ? xWin = true : oWin = true;
                }
            }
            
            // Check horizontal
            if ( x <= boardDimension - 3 ) {
                if ( currentCell == gameResult[y][x+1] && currentCell == gameResult[y][x+2] ) {
                    currentCell == "X" ? xWin = true : oWin = true;
                }
            }
        }
    }
    
    // console.log("" + xWin, oWin);
    
    if ( (xWin && oWin) || (!xWin && !oWin) ) { return "D"; }
    if ( xWin ) { return "X"; }
    if ( oWin ) {  return "O"; }
    
}