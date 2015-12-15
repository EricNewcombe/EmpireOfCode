"use strict";
var Client = require("battle/commander.js").Client;
var client = new Client();

/*******************************************************************
 * Commands the rocket launcher to target the unit that will have the
 * greatest amount of splash damage dealt to units around it
 ******************************************************************/
function searchNextTarget() {
    var enemies = client.askMyRangeEnemyItems();
    if (enemies.length) {
        var maxSplash = 0;
        var target = null;
        
        // Loop through the enemies in range seeing which one will do the most splash damage
        for ( var i = 0; i < enemies.length; i++ ) {
            
            // If the number in splash range is greater than max splash update
            if ( countUnitsInSplash(enemies[i]) > maxSplash ) {
                target = enemies[i];
                maxSplash = countUnitsInSplash(enemies[i]);
            }
            
        }
        
        console.log(target);
        
        attackUnit(target);
    } else {
        client.whenEnemyInRange().then(attackUnit);
    }
    
}

/*******************************************************************
 * Counts the number of units in the splash radius of the rocket launcher
 * if it were to attack an item and returns the number
 ******************************************************************/
function countUnitsInSplash(item) {
    var numSplash = 0;
    var enemies = client.askEnemyItems();
    var targetX = item.coordinates[0],
        targetY = item.coordinates[1];
    
    // Loop through enemies seeing if in the splash radius of the item being observed
    for ( var i = 0; i < enemies.length; i++ ) {
        
        if ( item == enemies[i] ) { continue; } // Skips the same unit being observed
        
        // Get the coordinates of the current enemy being observed
        var x = enemies[i].coordinates[0];
        var y = enemies[i].coordinates[1];
        
        // Check if observed enemy is in splash radius
        if ( x >= targetX - 1.5 && x <= targetX + 1.5 && y >= targetY - 1.5 && y <= targetY + 1.5 ) {
            numSplash++;
        }
        
    }
    
    
    return numSplash;
}

function attackUnit(data) {
    client.doAttack(data.id);
    client.whenIdle().then(searchNextTarget);
}

searchNextTarget();

whenEnemyInRange().then(countUnitsInSplash);
