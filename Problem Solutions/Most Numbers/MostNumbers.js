function mostDifference() {
    
    console.log(arguments);
    
    var largestDiff = 0;
    
    for ( var i = 0; i < arguments.length - 1; i++ ) {
        for ( var j = i + 1; j < arguments.length; j++ ) {
            if ( Math.abs(arguments[i] - arguments[j]) > largestDiff ) {
                largestDiff = Math.abs(arguments[i] - arguments[j]);
            }
        }
    }
    console.log(largestDiff);
    return largestDiff;
}