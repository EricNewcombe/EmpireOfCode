/******************************************
* Takes in an arbitrary amount of numbers and returns the greatest difference.
******************************************/

function mostDifference() {
    
    console.log(arguments);
    
    var largestDiff = 0;
    
    // Loop through the arguments
    for ( var i = 0; i < arguments.length - 1; i++ ) {

        for ( var j = i + 1; j < arguments.length; j++ ) {

            // Compare the difference to the largest difference, updating if its greater
            if ( Math.abs(arguments[i] - arguments[j]) > largestDiff ) {
                largestDiff = Math.abs(arguments[i] - arguments[j]);
            }

        }

    }

    // console.log(largestDiff);
    return largestDiff;
}