/******************************************
* Takes in an array and returns an array of all non-unique elements in the order they appeared
******************************************/

function nonUnique(data) {
    var nonUnique = [];

    // Loop through the array adding non-unique elements to the nonUnique array
    for ( var i = 0, l = data.length; i < l; i++ ) {

        var temp = data.shift();

        if ( data.indexOf(temp) > -1 || nonUnique.indexOf(temp) > -1 ) {

            nonUnique.push(temp);

        }

    }
    
    //console.log( nonUnique);
    return nonUnique;
}