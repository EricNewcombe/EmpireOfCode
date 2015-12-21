/**********************************************************
 * Compares two comma seperated strings for common words and returns
 * them in alphabetical order
 **********************************************************/
function commonWords(first, second){
    
    var words = [];
    
    // Split the string into word arrays at the commas
    first = first.split(",");
    second = second.split(",");
    
    // Loop through both arrays and treat the array as an array. Set all the values
    // of the words in the first string to one and then use the words in the second
    // string as keys to increment at that value giving any common words a value >= 2
    for ( var i = 0; i < first.length; i++ ) {
        words[first[i]] = 1;
    }
    
    for ( var i = 0; i < second.length; i++ ) {
        words[second[i]] += 1;
    }
    
    // Get the common words between the two strings
    var commonWords = [];
    for ( k in words ) {
        if ( words[k] >= 2 ) {
            commonWords.push(k);
        }
    }
    
    // Sort into alphabetical order
    commonWords.sort();
    
    var ret = "";
    for ( var i = 0; i < commonWords.length; i++ ) {
        if ( ret.length ) { ret += ","; }
        ret += commonWords[i];
    }
    
    return ret;
}