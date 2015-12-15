/******************************************
* Takes in a number that is a decimal and returns
* the number binary digits which are a one
******************************************/

function countUnits(number) {
    
    var power = 0;
    var numUnits = 0;
    
    // Calculate the maximum power of 2 which fits in the number
    while ( Math.pow(2, power) <= number ) {
        power++;
    }
    
    // Subtract powers of 2 from the number until nothing is left
    while ( power >= 0 ) {
        if ( number - Math.pow(2, power) >= 0 ) {
            // Incriment the number of binary digits representing 1
            number -= Math.pow(2, power);
            numUnits++;
        }
        power--;
    }
    
   // console.log(numUnits);
    
    return numUnits;
}