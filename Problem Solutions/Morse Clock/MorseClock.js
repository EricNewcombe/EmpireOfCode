"use strict";

function morseTime(timeString){
    var morse = "";
    var time = timeString.split(":");
    var h = time[0],
        m = time[1],
        s = time[2];
        
    //console.log(h, m, s);
    
    // Get the binary representation of each digit
    morse = getMorse(h / 10, 2) + " " + 
            getMorse(h % 10, 4) + " : " +
            getMorse(m / 10, 3) + " " +
            getMorse(m % 10, 4) + " : " +
            getMorse(s / 10, 3) + " " +
            getMorse(s % 10, 4);
            
    //console.log(morse);
    
    return morse;
}

/************************************************************
 * Takes in a number n and an expected binary length l and returns
 * a binary representation of n with l binary digits
 ************************************************************/
 
function getMorse(n, l) {
    var p = 0;
    var morse = "";
    
    // Find max power of 2 that fits into n
    while ( Math.pow( 2, p ) <= n ) {
        if ( Math.pow(2,p + 1) <= n ) {
            p++; 
        }
        else {
            break;
        }
    }
    
    // Tack on leading empty bits if the length of the morse won't hit the
    // Expected length by subtracting the highest power from the expected length
    for ( var i = l - p - 1; i > 0; i-- ) {
        morse += ".";
    }
    
    // Navigate through the binary bits and determine if each digit is a 1 or 0
    // And subtract the corresponding binary value from the 
    while ( p >= 0 ) {
        var pow = Math.pow(2,p)
        if ( pow <= n ) {
            n -= pow;
            morse += "-"
        }
        else {
            morse += ".";
        }
        
        p--;
    }
    
    return morse;
}

var assert = require("assert");

if (!global.is_checking){
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(morseTime("10:37:49"), ".- .... : .-- .--- : -.. -..-", "First Test");
    assert.equal(morseTime("21:34:56"), "-. ...- : .-- .-.. : -.- .--.", "Second Test");
    assert.equal(morseTime("00:1:02"), ".. .... : ... ...- : ... ..-.", "Third Test");
    assert.equal(morseTime("23:59:59"), "-. ..-- : -.- -..- : -.- -..-", "Fourth Test");
    console.log("All set? Click 'Check' to review your code and earn rewards!");
}

