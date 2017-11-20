var $ = require('../vendor/jquery');

var canvas, W, H, interval, ctx,
    circles = [],
    circleCount = 50,
    rotate = 0;

module.exports = {
    init: function() {
        this.createCanvas();
        this.bindings();
    },

    bindings: function() {
        $(window).resize(function() {
            this.setCanvasSize();
        }.bind(this))
    },

    createCanvas: function() {
        canvas = document.getElementsByClassName('vortex__canvas')[0];
        this.setCanvasSize();
        ctx = canvas.getContext('2d');

        this.generateCircles();
        this.startDrawing();
    },

    setCanvasSize: function() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
    },

    generateCircles: function() {
        for (var i = 0; i < circleCount; i++) {
            circles[i] = {
                x: W / 2,
                y: H / 2,
                cx: W / 2 + Math.floor(Math.random()*20) -10,
                cy: H / 2 + Math.floor(Math.random()*20) -10
            }
        }
    },

    startDrawing: function() {
        interval = setInterval(function() {
            this.draw();
        }.bind(this), 15)
    },

    draw: function() {
        ctx.clearRect(0, 0, W, H);
        rotate++;

        for (var i = 0; i < circleCount; i++) {
            var circle = circles[i];

            ctx.beginPath();
            ctx.ellipse(circle.x, circle.y, i*3, i*3, 0, 0, 2 * Math.PI);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 10;
            ctx.stroke();
        }
        // console.log('hey');
    }
}