"use strict";
var Client = require("battle/commander.js").Client;
var client = new Client();

var Map = function (l, w) {
    this.length = l;
    this.width = w;
    this.points = [];
    this.emptySpace = "_";
    
    this.generate();
}

Map.prototype.generate = function () {
    
    for ( var i = 0; i < this.length; i++ ) {
        
        this.points[i] = [];
        
        for ( var j = 0; j < this.width; j++ ) {
            this.points[i][j] = this.emptySpace;
        }
        
    }
    
    this.insertObstacles();
    this.insertTowers();
    this.insertCommandCenter();

}

Map.prototype.insertObstacles = function () {

    for ( var i = 0; i < this.points.length; i++ ) {

        for ( var j = 0; j < 20; j++ ) {
            this.points[i][j] = "O";
        }

    }

}

Map.prototype.insertTowers = function () {
    var towers = client.askTowers();


    for ( var i = 0; i < towers.length ; i++ ) {
    
        var x = Math.floor(towers[i].coordinates[0]);
        var y = Math.floor(towers[i].coordinates[1]);

        // Inserts the towers position on the map
        for ( var j = -1; j < towers[i].size; j++ ) {
            for ( var k = -1; k < towers[i].size; k++ ) {
                this.points[y + j][x + k] = "T";
            }
        }

        // Draw tower range on map
        this.fillTowerRange(x,y,towers[i].firing_range);

    }

}
 
/*
 * 
 */
Map.prototype.insertCommandCenter = function () {
    var command = client.askCenter();
    
    var x = Math.floor(command.coordinates[0]);
    var y = Math.floor(command.coordinates[1]);
    
    for ( var i = -2; i < command.size - 1; i++ ) {
        for ( var j = -2; j < command.size - 1; j++ ) {
            this.points[y + i][x + j] = "C";
        }
    }
     

}

Map.prototype.fillTowerRange = function ( x, y, radius ) {

    for ( var i = -radius; i < radius; i++ ) {

        for ( var j = -radius; j < radius; j++ ) {

            // Check if the current point is out of the range of the graph
            if ( x + j < 20 || x + j >= this.width || y + i < 0 || y + i > 39 ) { continue; }

            // Get the distance of the current point from the tower
            var dist = Math.sqrt( Math.pow( i, 2 ) + Math.pow( j, 2 ) );

            // If the distance of the current point is less than the radius, the point is in the circle
            if ( dist <= radius ) {
                
                
                if ( y + i > 39 ) {
                    console.log(x + j, y + i);
                    continue;
                }
                var p = this.points[y + i][x + j];

                // If the current point is empty space, set its value to 1 and if its already a number
                // increment it as the point is in the range of multiple towers
                if ( p == this.emptySpace ) {
                    this.points[y + i][x + j] = 1;
                }
                else if ( p * 1 > 0 ) {
                    this.points[y + i][x + j] += 1;
                }

            }



        }

    }

}

/*
 * Displays the map
 */
Map.prototype.display = function () {
    for ( var i = 0; i < this.points.length; i++ ) {
        var line = "";
        for ( var j = 20; j < this.points[i].length; j++ ) {
            line += this.points[i][j];
            if ( j < this.points[i].length - 1 ) { line += ","; }
        }
        console.log(line);
    }
}

var m = new Map(40,40);
m.display();