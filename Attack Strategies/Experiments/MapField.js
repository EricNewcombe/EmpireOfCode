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
        for ( var i = 0; i <= 360; i+= 5 ) {

            var radians = i / 180
            var xOff = Math.cos(radians) * towers[i].firing_range,
                yOff = Math.sin(radians) * towers[i].firing_range;

            var rangeX = Math.floor(x + xOff),
                rangeY = Math.floor(y + yOff);

            if ( this.points[rangeY][rangeX] == this.emptySpace ) {
                this.points[rangeY][rangeX] = "R";
            }

        }

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

/*
 * Displays the map
 */
Map.prototype.display = function () {
    for ( var i = 0; i < this.points.length; i++ ) {
        var line = "";
        for ( var j = 20; j < this.points[i].length; j++ ) {
            line += this.points[i][j] + " ";
        }
        console.log(line);
    }
}

var m = new Map(40,40);
m.display();