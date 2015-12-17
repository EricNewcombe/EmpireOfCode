/****************************************************
 * Function that takes an array of string commands to push
 * or pop to a FIFO queue and then return a string representation of it
 ***************************************************/
function letterQueue(commands) {
    
    var queue = [];
    
    for ( var i = 0; i < commands.length; i++ ) {
        
        // Seperate commands from the data to be pushed
        commands[i] = commands[i].split(" ");
        
        if ( commands[i][0] == "PUSH" ) {
            // Pushes to the end of the array
            queue.push(commands[i][1]);
        }
        else {
            // Javascript array function to pop the first element
            queue.shift();
        }
        
    }
    
    var str = "";
    
    for ( var i = 0; i < queue.length; i++ ) {
        str += queue[i];
    }
    
    return str;
}