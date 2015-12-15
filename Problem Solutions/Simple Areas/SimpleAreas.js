/******************************************
* Takes in a 1 - 3 numbers as parameters. returns the are of the corresponding shape
* 1 - Circle
* 2 - Rectangle
* 3 - Triangle
******************************************/

function simpleAreas() {
    if ( arguments.length == 1 ) { // Circle ( PI * r^2 )
        return Math.pow(arguments[0] / 2, 2 ) * Math.PI;
    }
    else if ( arguments.length == 2 ) { // Rectangle ( L * W )
        return arguments[0] * arguments[1];
    }
    else if ( arguments.length == 3 ) { // Triangle ( Sqrt(p * (p-s1) * (p-s2) * (p-s3) ) )
        var p = (arguments[0] + arguments[1] + arguments[2]) / 2;
        return Math.sqrt(p * (p - arguments[0]) * (p - arguments[1]) * (p - arguments[2]));
    }
}