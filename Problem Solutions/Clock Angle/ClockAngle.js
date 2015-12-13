function clockAngle(time){
    
    var minuteHand = parseInt(time.substring(3,5));
    var hourHand = (parseInt(time.substring(0,2)) + minuteHand / 60);
    console.log(hourHand, minuteHand);
    
    
    var minuteAngle = minuteHand * 6;
    var hourAngle = (hourHand * 30) % 360;
    console.log(minuteAngle, hourAngle);
    
    
    var difference = Math.abs(minuteAngle - hourAngle);
    console.log(difference);
    
    return difference < 180 ? difference : 360 - difference;
}