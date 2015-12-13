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