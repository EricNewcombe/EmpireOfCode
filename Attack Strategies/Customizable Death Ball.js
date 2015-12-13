"use strict";
var Client = require("battle/commander.js").Client;
var client = new Client();

// Pathing Strategies to set up death ball
var TOP_RIGHT_TOP_LEFT = 0;
var CENTER = 1;

// After clearing towers
var ATTACK_CENTER = 0;
var ATTACK_CLOSEST = 1;

// Current Strat
var strategy = { "first": CENTER, "then": ATTACK_CENTER };

function attackNext() {
    var data = client.askTowers(),
        enemy;
    if (data.length) {
        enemy = getClosestTower(data);
    } else {
        switch(strategy.then) {
            case ATTACK_CENTER:
                /*****************************************************************
                * Attack the command center after all towers dead
                ******************************************************************/
                enemy = client.askCenter();
                break;
            case ATTACK_CLOSEST:
                /*****************************************************************
                * Attack closest units when all towers dead
                ******************************************************************/
                enemy = client.askNearestEnemy();
                break;
            default:
                break;
        }
    }
    client.doAttack(enemy.id);
    client.whenItemDestroyed(enemy.id).then(attackNext);
}



function getClosestTower(towers) {
    var unit = client.askMyInfo();
    var closestTowerIndex = 0;
    var closestDistance = -1;
    
    for ( var i = 0; i < towers.length; i++ ) {
        // Find the x and y differences between the unit and the current observed tower
        var xDifference = unit.coordinates[0] - towers[i].coordinates[0];
        var yDifference = unit.coordinates[1] - towers[i].coordinates[1];

        // Calculate the vector to the current tower
        var distanceToTower = Math.sqrt( Math.pow(xDifference, 2) + Math.pow(yDifference, 2) );

        // Compare to current closest tower and then update index and value if needed
        if ( closestDistance < 0 || distanceToTower < closestDistance ) {
            closestDistance = distanceToTower;
            closestTowerIndex = i;
        }
    }
    
    return towers[closestTowerIndex];
}

function issueFirstCommand () {
    switch ( strategy.first ) {
        case CENTER:
            /*****************************************************************
            * Collects all of the troops in the center right of the map and 
            * sends them to first tower after 10 seconds
            ******************************************************************/
            client.doMove([40,20]);
            client.whenTime(10).then(attackNext);
            break;
        case TOP_RIGHT_TOP_LEFT:
            /*****************************************************************
            * Sends all troops to the top right corner, then at 20 seconds in
            * sends them to the upper left corner and then attacks first target
            ******************************************************************/
            client.doMove([40,0]);
            client.whenTime(20).then( function() {
                client.doMove([20,0]);
            });
            client.whenTime(30).then(attackNext);
            break;
        default:
            break;
            
    }
}


issueFirstCommand();