var Ball = (function (Ball) {
    'use strict';

    Ball = function (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.init();
    };

    Ball.prototype.init = function () {
        context.fillStyle = 'green';
        this.speedX = 0;
        this.speedY = 0;
        this.gravitySpeed = 0;
        this.thrustSpeed = 0;
        this.gravity = 0.2;
        context.fillRect(this.x, this.y, this.width, this.height);
    };

    Ball.prototype.newPos = function () {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX + this.thrustSpeed;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
        this.hitSide();
        this.hitStart();
        context.fillRect(this.x, this.y, this.width, this.height);
    };

    Ball.prototype.hitBottom = function () {
        var rockbottom = canvas.height - this.height;
        if (this.y > rockbottom) {
            this.gravitySpeed = -this.gravitySpeed / 1.3;
            if (this.gravitySpeed < 0.1) {
                this.y = rockbottom;
            }
        }
    };

    Ball.prototype.hitSide = function () {
        var hardSide = canvas.width - this.width;
        if (this.x > hardSide) {
            this.thrustSpeed = -this.thrustSpeed;
            // if (this.gravitySpeed < 0.1) {
            //     this.y = rockbottom;
            // }
        }
    };

    Ball.prototype.hitStart = function () {
        var hardStart = 0;
        if (this.x < hardStart) {
            this.thrustSpeed = -this.thrustSpeed;
            // if (this.gravitySpeed < 0.1) {
            //     this.y = rockbottom;
            // }
        }
    };

    Ball.prototype.update = function () {
        context.fillStyle = 'green';
        context.fillRect(this.x, this.y, this.width, this.height);
    };


    return Ball;
})(Ball || {});
