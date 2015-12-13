"use strict";
var Client = require("battle/commander.js").Client;
var client = new Client();

function attackNext() {
    var data = client.askTowers(),
        enemy;
    if (data.length) {
        // Make the target the closest tower to unit
        enemy = getClosestTower(data);
    } else {
        // Attack the nearest enemy if no more towers
        enemy = client.askNearestEnemy();
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

attackNext();
