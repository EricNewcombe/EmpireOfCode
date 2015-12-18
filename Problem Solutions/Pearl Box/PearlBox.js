function probability(marbles, step) {
    
    var prob = 0, // Probability
        w = 0, // White marbles
        b = 0; // Black marbles
    
    // Count initial count of marbles
    for ( var j = 0; j < marbles.length; j++ ) {
        marbles.charAt(j) == "b" ? b++ : w++;
    }
    
    var permutations = [];
    permutations[0] = [{"b":b, "w":w}];
    
    
    // generate permutations
    for ( var i = 0; i < step; i++ ) {
        
        permutations[i+1] = [];
        
        for ( var j = 0; j < permutations[i].length; j++ ) {
            
            for ( var k = 0; k < permutations[i][j].b; k++ ) {
                var p = {};
                p.b = permutations[i][j].b - 1;
                p.w = permutations[i][j].w + 1;
                //console.log(p, i, j, k);
                permutations[i+1].push(p);
            }
            for ( var k = 0; k < permutations[i][j].w; k++ ) {
                var p = {};
                p.w = permutations[i][j].w - 1;
                p.b = permutations[i][j].b + 1;
                permutations[i+1].push(p);
            }
            
            
        }
        
        // console.log(permutations[i], i);
        
    }
    
    //console.log(permutations)
    
    var totalW = 0,
        totalB = 0;
        
    //console.log(permutations[step - 1]);
        
    for ( var i = 0; i < permutations[step - 1].length; i++ ) {
        totalW += permutations[step - 1][i].w;
        totalB += permutations[step - 1][i].b;
    }
    
    // console.log(totalW, totalB, totalW / (totalW + totalB));
    
    return totalW, totalB, totalW / (totalW + totalB);
}