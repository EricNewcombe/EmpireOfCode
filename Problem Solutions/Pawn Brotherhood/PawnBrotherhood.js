/******************************************
* Takes in an array of the positions of pawns on a chess board. Then loops through them
* to see how many are safe and returns that number
******************************************/

function safePawns(pawns) {
    var letters = "abcdefgh".split('');
    var board = [];
    // generate board
    for ( var i = 0; i < 8; i++ ) {
        board[i] = [];
        for ( var j = 0; j < 8; j++ ) {
            board[i][j] = 0;
        }
    }
    
    // place pawns onto the board
    for (var i = 0; i < pawns.length; i++ ) {
        var x = parseInt(pawns[i].charAt(1)) - 1;
        var y = letters.indexOf(pawns[i].charAt(0));
        //console.log(x,y);
        board[x][y] = 1;
    }
    
    var safePawns = 0;
    // iterate through board and see how many safe pawns there are starting at the top and working down
    for ( var y = 7; y > 0; y-- ) {
        
        for ( var x = 0; x < 8; x++ ) {
            
            // If the current piece is a pawn, examine if it is safe or not
            if ( board[y][x] == 1 ) {
                if ( x > 0 && board[y - 1][x - 1] == 1 ) { // Diagonal left
                    safePawns++;
                }
                else if ( x < 7 && board[y - 1][x + 1] == 1 ) { // Diagonal right
                    safePawns++;
                }
            }
            
        }
    }
    //console.log(safePawns);
    return safePawns;
}