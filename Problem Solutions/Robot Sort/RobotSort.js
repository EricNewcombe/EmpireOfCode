function swapSort(array) {
    
    var retString = "";
    
    // Loop through the array finding out of order values
    for ( var i = 0; i < array.length - 1; i++ ) {
        
        for ( var j = 0; j < array.length - i; j++ ) {
            
            if ( array[j] > array[j + 1] ) {
                
                // Swap the values
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                
                // Update string
                if ( retString.length ) { retString += ","; }
                retString += "" + j + "" + (j+1);
                
            }
            
        }
        
    }
    
    // console.log(array, retString);
    
    return retString;
}