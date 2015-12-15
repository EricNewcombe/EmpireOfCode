/******************************************
* Takes in a number returns fizz for multiples of 3, buzz for 
* multiples of 5 and fizzbuzz for multiples of both
******************************************/
function fizzBuzz(number) {
    
    var retString = "";
    
    if ( number % 3 == 0 && number % 5 == 0 ) {
        return "Fizz Buzz";
    }
    if ( number % 3 == 0 ) {
        return "Fizz";
    }
    if ( number % 5 == 0 ) {
        return "Buzz";
    }
    
    return String(number);
}