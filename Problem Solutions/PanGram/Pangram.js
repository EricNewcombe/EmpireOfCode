/******************************************
* Takes in a string and then determines if all of the letters of the alphabet are in it
******************************************/

var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function checkPangram(text){

    // Set up an array representing each letter and set its value to false;
    var lettersPresent = [];
    for (var i = 0; i < 26; i++ ) {
        lettersPresent[i] = false;
    }
    
    // Loop through the text and set the position in the array representitive of the letter to true
    for ( var i = 0; i < text.length; i++ ) {

        if ( letters.indexOf(text.charAt(i).toUpperCase()) > -1 ) {
            lettersPresent[letters.indexOf(text.charAt(i).toUpperCase())] = true;
        }    

    }
    
    //console.log(lettersPresent);
    
    // Loop through the lettersPresent array to see if there are any false values, return false if so
    for ( var i = 0; i < lettersPresent.length; i++ ) {
        if ( lettersPresent[i] == false ) {
            return false
        }
    }

    // All letters present so return false
    return true;
}