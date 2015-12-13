function countUnits(number) {
    
    var power = 0;
    var numUnits = 0;
    
    while ( Math.pow(2, power) <= number ) {
        power++;
    }
    
    while ( power >= 0 ) {
        if ( number - Math.pow(2, power) >= 0 ) {
            number -= Math.pow(2, power);
            numUnits++;
        }
        power--;
    }
    
    console.log(numUnits);
    
    return numUnits;
}