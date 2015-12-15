/******************************************
* Takes in a string and an array of words. Returns the number of words which appear
* in the string
******************************************/

function countWords(text, words) {
    var numMatches = 0;
    text = text.toLowerCase();
    // Compares each word against the string and sees if it is in it, increments matches if it is
    for ( var i in words ) {
        if ( text.indexOf(words[i].toLowerCase()) >= 0 ) { numMatches++; }
    }
    return numMatches;
}