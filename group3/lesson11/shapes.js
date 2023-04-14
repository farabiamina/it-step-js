let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// console.log(ctx);

// rectangle
ctx.strokeStyle = "red";
ctx.strokeRect(30,30,200,100);

ctx.fillStyle = "blue";
ctx.fillRect(30,140,200,100);

ctx.clearRect(30,70,200,100);

// lines
ctx.beginPath();
ctx.moveTo(400, 150);
ctx.lineTo(500, 150);
ctx.stroke();
ctx.closePath();

// arc
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(100,400,30,0,Math.PI/2, false);
// ctx.fill();
ctx.stroke();

// gradient
let grad = ctx.createLinearGradient(0, 0, 500, 0);
grad.addColorStop(0, "violet");
grad.addColorStop(0.5, "pink");
grad.addColorStop(1, "lightblue");

ctx.fillStyle = grad;

ctx.font = "50px Arial";
ctx.fillText("Hello World efefrefre", 50, 70);
ctx.fill();
