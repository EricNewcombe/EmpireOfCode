/******************************************
* Function takes in an x and y value as well as an operation to determine the 
* return value.
* Conjunction - Only returns 1 when both x and y are 1
* Disjunction - Returns 1 if x or y are 1
* Implication - Returns 1 if y is 1 or x is 0 ( not x or y )
* Exclusive - Returns 1 if x or y = 1 but not both = 1
* Equivalence - Returns 1 if x and y have the same value
******************************************/

var operationNames = ["conjunction", "disjunction", "implication", "exclusive", "equivalence"];

function boolean(x, y, operation){
    switch ( operationNames.indexOf(operation) ) {
        case 0: // Conjunction
            return x == y && x == 1 ? 1 : 0;
        case 1: // disjunction
            return x == 0 && x == y ? 0 : 1;
        case 2: // implication
            return x == 1 ? y : 1;
        case 3: // exclusive
            return ( x == 1 || y == 1 ) && !(x == 1 && y == 1) ? 1 : 0;
        case 4: // Equivalence
             return x == y ? 1 : 0;
        default:
            return -1;
    }
}