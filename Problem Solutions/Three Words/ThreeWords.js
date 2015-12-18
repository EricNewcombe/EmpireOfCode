/****************************************************
 * Function that takes in a string and returns if it has 3 consecutive
 * words that are strings
 ***************************************************/
function threeWords(words) {
    words = words.split(" ");
    
    var consecutiveWords = 0;
    
    for ( var i = 0; i < words.length; i++ ) {
        if ( words[i] * 1 > 0 ) { // Check if current word is number
            consecutiveWords = 0;
        }
        else {
            consecutiveWords++;
        }
        
        // return true when three consecutive strings
        if ( consecutiveWords >= 3 ) {
            return true;
        }
    }
    
    return false;
}