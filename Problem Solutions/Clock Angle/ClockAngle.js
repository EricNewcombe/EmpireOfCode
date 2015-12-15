/******************************************
* Takes in a string that represents the time in the form
* "HH:MM" and calculates the angle between the two hands
******************************************/

function clockAngle(time){
    
    // Get the position of the hands
    var minuteHand = parseInt(time.substring(3,5));
    var hourHand = (parseInt(time.substring(0,2)) + minuteHand / 60);
    console.log(hourHand, minuteHand);
    
    // Calculate the current angle of the hands
    var minuteAngle = minuteHand * 6;
    var hourAngle = (hourHand * 30) % 360; // Accounts for 24 hour time
    console.log(minuteAngle, hourAngle);
    
    // Calculate the absolute difference between the two angles
    var difference = Math.abs(minuteAngle - hourAngle);
    console.log(difference);
    
    // Return the smallest representation of the angle
    return difference < 180 ? difference : 360 - difference;
}