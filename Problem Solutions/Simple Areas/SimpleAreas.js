function simpleAreas() {
    if ( arguments.length == 1 ) {
        return Math.pow(arguments[0] / 2, 2 ) * Math.PI;
    }
    else if ( arguments.length == 2 ) {
        return arguments[0] * arguments[1];
    }
    else if ( arguments.length == 3 ) {
        var p = (arguments[0] + arguments[1] + arguments[2]) / 2;
        return Math.sqrt(p * (p - arguments[0]) * (p - arguments[1]) * (p - arguments[2]));
    }
}