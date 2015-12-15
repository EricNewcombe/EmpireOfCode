/******************************************
* Takes in a string of X's and Z's, checks the chars to make sure two of either don't
* appear in a row
******************************************/
function checkLine(line) {
    // Booleans used to track the previous value
    var xPrev = false;
    var zPrev = false;
    
    // Loop through the characters
    for ( var i = 0; i < line.length; i++ ) {
        // If the current char matches the previous, return false
        if ( line[i] == "X" ) {
            if (xPrev) return false;
            xPrev = true;
            zPrev = false;
        }
        else {
            if (zPrev) return false;
            zPrev = true;
            xPrev = false;
        }
        
    }
    
    return true;
}