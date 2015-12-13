var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function checkPangram(text){
    var lettersPresent = [];
    
    for (var i = 0; i < 26; i++ ) {
        lettersPresent[i] = false;
    }
    
    for ( var i = 0; i < text.length; i++ ) {
        if ( letters.indexOf(text.charAt(i).toUpperCase()) > -1 ) {
            lettersPresent[letters.indexOf(text.charAt(i).toUpperCase())] = true;
        }    
    }
    
    //console.log(lettersPresent);
    
    for ( var i = 0; i < lettersPresent.length; i++ ) {
        if ( lettersPresent[i] == false ) {
            return false
        }
    }
    return true;
}