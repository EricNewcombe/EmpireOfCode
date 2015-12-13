function countWords(text, words) {
    var numMatches = 0;
    text = text.toLowerCase();
    for ( var i in words ) {
        if ( text.indexOf(words[i].toLowerCase()) >= 0 ) { numMatches++; }
    }
    return numMatches;
}