var canvas = document.createElement("canvas");

canvas.width = 480;
canvas.height = 270;
context = canvas.getContext("2d");
document.body.insertBefore(canvas, document.body.childNodes[0]);

// context.clearRect(0, 0, canvas.width, canvas.height);

var ball = new Ball(50, 50, 10, 10);



function accelerate(n) {
    ball.gravity = n;
}

function thrust(n) {
    ball.thrustSpeed = n;
}
function updateGameArea() {
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ball.newPos();
    ball.update();
}

setInterval(updateGameArea, 20);


