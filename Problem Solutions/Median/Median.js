/************************************************
 * Takes an array of integers and returns the median
 ************************************************/
function median(data) {
    
    // Sort the data
    data.sort(function(a,b) { return a-b;});
    
    var ret = 0;
    if ( data.length %2 == 0 ) {
        // Return the average of the two middle elements
        ret = ( data[data.length / 2 - 1] + data[data.length / 2] ) / 2 ;
    }
    else {
        // Return the middle element
        ret = data[Math.floor(data.length / 2)];
    }
    
    console.log(ret);
    
    return ret;
}