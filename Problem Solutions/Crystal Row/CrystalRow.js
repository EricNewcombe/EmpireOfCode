function checkLine(line) {
    
    var xPrev = false;
    var zPrev = false;
    
    for ( var i = 0; i < line.length; i++ ) {
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