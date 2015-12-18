/****************************************************
 * Function that takes in a string and counts all capital letters
 * as part of a secret message. Returns a string of all capital
 * letters as then appear in the text
 ***************************************************/
 
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function findMessage(text){
    var message = "";
    
    // Check for capitals
    for ( var i = 0; i < text.length; i++ ) {
        if( letters.indexOf(text.charAt(i)) >= 0 ) {
            message += text.charAt(i);
        }
    }
    
    return message;
}