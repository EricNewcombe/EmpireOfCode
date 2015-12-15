/******************************************
* Takes in a list of comma seperated representations of ingots where the letter
* represents the multiple of nines and the number represents a number from 0-9
* The value of the ingot is the addition of the two parts
******************************************/

var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function countIngots(report) {
	// Get an array of all of the ingots
    var ingots = report.split(",");
    var total = 0;
    
    // Loop through all ingots and add value to total
    ingots.forEach( function ( ingot ) {
        total += letters.indexOf(ingot.charAt(0)) * 9 + parseInt(ingot.slice(1));
    });
    
    //console.log(total);
    return total;
}