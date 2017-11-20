var $ = require('../vendor/jquery');

var canvas, W, H, interval, ctx,
    tmpCanvas,
    tmpCtx,
    circles = [],
    circleCount = 5,
    degrees = 0;

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
        // real canvas
        canvas = document.getElementsByClassName('vortex__canvas')[0];
        this.setCanvasSize();
        ctx = canvas.getContext('2d');

        // temporary canvas used for calculating position
        tmpCanvas = document.createElement('canvas');
        tmpCanvas.width = W;
        tmpCanvas.height = H;
        tmpCtx = tmpCanvas.getContext('2d');

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
                cx: W / 2 + Math.floor(Math.random()*60) -30,
                cy: H / 2 + Math.floor(Math.random()*60) -30
            }
        }
    },

    startDrawing: function() {
        interval = setInterval(function() {
            this.draw();
        }.bind(this), 40)
    },

    draw: function() {
        ctx.clearRect(0, 0, W, H);
        degrees++;

        for (var i = 0; i < circleCount; i++) {
            var circle = circles[i];

            ctx.beginPath();
            ctx.ellipse(circle.x, circle.y, i*18 + 400, i*18 + 400, 0, 0, 2 * Math.PI);
            ctx.strokeStyle = 'rgba(255, 255, 255,' + 1 + ')';
            ctx.lineWidth = 10;
            ctx.translate(circle.cx, circle.cy);
            ctx.stroke();
            ctx.rotate(10 * Math.PI / 180);
            ctx.translate(-circle.cx, -circle.cy);
        }
        // console.log('hey');
    }
}