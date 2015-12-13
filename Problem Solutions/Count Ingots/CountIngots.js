var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function countIngots(report) {
    var ingots = report.split(",");
    var total = 0;
    
    ingots.forEach( function ( ingot ) {
        total += letters.indexOf(ingot.charAt(0)) * 9 + parseInt(ingot.slice(1));
    });
    
    //console.log(total);
    return total;
}