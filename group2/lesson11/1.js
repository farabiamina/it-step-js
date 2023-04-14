let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// rectangle
ctx.strokeStyle = 'red';
ctx.fillStyle = 'white';
ctx.strokeRect(20,20,200,100);
ctx.fillRect(10,20,150, 50);
ctx.clearReact(0,0,canvas.width, canvas.height);

// line
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.moveTo(30, 30);
ctx.lineTo(100,100);
ctx.stroke();
ctx.closePath();

// text with gradient
let grad = ctx.createLinearGradient(0,0, 500,0);
grad.addColorStop('0', 'blue');
grad.addColorStop('0.5', 'violet');
grad.addColorStop('1', 'pink');
ctx.fillStyle = grad;
ctx.font = "50px Arial";
ctx.fillText("Hello, world", 50, 50);

