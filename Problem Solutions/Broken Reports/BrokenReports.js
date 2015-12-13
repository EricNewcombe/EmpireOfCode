var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function golf(b) {
    var total = 0;
    for(var i = 0; i < b.length-1; i++ ) {
        var c = b.charAt(i),
            c2 = b.charAt(i+1);
        if ( letters.indexOf(c) >= 0 ) {
            if ( c2 * 1 > 0 ){
                //console.log(c,c2);
                total += letters.indexOf(b.charAt(i)) * 9 + parseInt(b.charAt(i+1));
            }
        }
    }
    console.log(total);
    return total;
}