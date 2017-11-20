var $ = require('../vendor/jquery');

var canvas, W, H, interval, ctx,
    tmpCanvas,
    tmpCtx,
    circles = [],
    circleCount = 40,
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
            var x = W / 2 + Math.floor(Math.random()*40) -20;
            var y = H / 2 + Math.floor(Math.random()*40) -20;

            circles[i] = {
                x: x,
                y: y,
                offset: Math.sqrt( ((W/2 - x) * (W/2 - x)) + ((H/2 - y) * (H/2 - y)) ),
                angle: Math.floor(Math.random()*360) + 1,
                speed: Math.floor(Math.random()*8),
                cx: 0,
                cy: 0
            }
        }
        console.log(circles);
    },

    startDrawing: function() {
        interval = setInterval(function() {
            this.draw();
        }.bind(this), 40)
    },

    updateCircle: function(i) {
        var circle = circles[i];

        circle.angle += circle.speed;
        circle.cx = (W / 2) + circle.offset * Math.cos(circle.angle  * (Math.PI / 180));
        circle.cy = (H / 2) + circle.offset * Math.sin(circle.angle  * (Math.PI / 180));

        circles[i] = circle;
        return circles[i];
    },

    draw: function() {
        ctx.clearRect(0, 0, W, H);

        for (var i = 0; i < circleCount; i++) {
            var circle = this.updateCircle(i);

            ctx.beginPath();
            ctx.ellipse(circle.cx, circle.cy, i*18 + 400, i*18 + 400, 0, 0, 2 * Math.PI);
            ctx.strokeStyle = 'rgba(255, 255, 255,' + 1 + ')';
            ctx.lineWidth = 10;
            ctx.stroke();
        }
    }
}