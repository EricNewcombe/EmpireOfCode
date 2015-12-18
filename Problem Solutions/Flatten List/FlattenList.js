/**********************************************
 * Takes in an array that may have multiple levels of sub arrays
 * and flattens it to a single array in the same order
 **********************************************/
function flatList(array) {
    
    // If the array is size one, keep going down the array until there are no more sub
    // arrays and return that result
    if ( array.length == 1 ) {
        
        // The last nested array is empty, return an empty array
        if ( array[0].length == 0 ) {
            return [];
        }
        
        // there are elements in the subarray still
        if ( array[0].length ) { 
            return flatList(array[0]);
        }
        
        // the array is already flat so return it
        return array; 
    }
    
    var flatArray = [];
    
    // Loop through the indices looking for subarrays within the current array.
    // If found recursively get the flat array of each subarray and push it to the 
    // current flat array, thus retaining order
    
    for ( var i = 0; i < array.length; i++ ) {
        
        // Subarray exists at current index
        if ( array[i].length ) {
            var a = flatList(array[i]);
            console.log(a);
            for ( var j = 0; j < a.length; j++ ) {
                flatArray.push(a[j]);
            }
        }
        else { // no subarray, push the current element to the flat array
            flatArray.push(array[i]);
        }
        
    }
    
    return flatArray;
}