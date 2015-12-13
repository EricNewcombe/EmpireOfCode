function nonUnique(data) {
    var nonUnique = [];
    for ( var i = 0, l = data.length; i < l; i++ ) {
        var temp = data.shift();
        if ( data.indexOf(temp) > -1 || nonUnique.indexOf(temp) > -1 ) {
            nonUnique.push(temp);
        }
    }
    //console.log( nonUnique);
    return nonUnique;
}