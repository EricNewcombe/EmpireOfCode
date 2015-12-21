/******************************************
 * Takes in a phrase where consonants have a random vowel
 * after it and vowels have two of the same vowel following it.
 * Removes the excess letters and returns the phrase
 ******************************************/

var VOWELS = "aeiouy";

function translate(phrase) {
    var msg = "";
    
    // Loop over all characters
    for ( var i = 0; i < phrase.length; i++ ) {
        
        if ( phrase.charAt(i) === " " ) { msg += " "; } // add space if necessary
        else if ( VOWELS.indexOf(phrase.charAt(i)) >= 0 ) { // Vowel
            msg += phrase.charAt(i);
            i += 2; // Skip over the two extra vowels
        }
        else { // Consonant
            msg += phrase.charAt(i);
            i++; // Skip over the random vowel after consonant
        }
        
    }
    
    console.log(msg);
    
    return msg;
}