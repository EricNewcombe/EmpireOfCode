/******************************************
* Takes in a string representing a broken report. Searches through the text
* and finds substrings which take on the form "XY" where X is any letter and
* Y is any positive integer from 0-9. X represents the number of 9 values held 
* and Y represents the integer there added on (ie A1 is 1, B1 is 10, B2 is 11...)
******************************************/
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function golf(b) {
    var total = 0;

    // Loop through the report one character at a time to see the two characters meet the template
    for(var i = 0; i < b.length-1; i++ ) {

        var c = b.charAt(i),
            c2 = b.charAt(i+1);

        if ( letters.indexOf(c) >= 0 ) { // Check to see if the first character is a letter

            if ( c2 * 1 > 0 ){ // Check to see if the second character is a number

                // Add it to the total if it is
                total += letters.indexOf(b.charAt(i)) * 9 + parseInt(b.charAt(i+1));
            }

        }

    }

    //console.log(total);
    return total;
}