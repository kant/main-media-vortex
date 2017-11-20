var $ = require('../vendor/jquery.js');

var counter = 0;
var face = 0;
var timings = [0, 10, 12, 16, 18, 20, 26, 34, 36, 51, 52, 53];
var frames =  [0, 0,  1,  2,  3,   1,  6,  5,  4,  5,  2,  0]

module.exports = {
    init: function() {
        this.animate();
    },

    animate: function() {
        var interval = setInterval( this.toggleFaces, 200 );
    },

    toggleFaces: function() {
        if (timings.indexOf(counter) > -1) {
            $('#face--' + frames[face]).hide();
            face > timings.length ? face = 1 : face++;
            $('#face--' + frames[face]).show();
        };

        counter > timings[timings.length -1] ? counter = 0 : counter++;
    }
}