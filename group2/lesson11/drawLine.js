let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let properties = {
  radius: 5,
  color: "red",
  lineWidth: 10,
};

let mouse = {
  x: null,
  y: null,
};

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function drawCircle() {
  ctx.fillStyle = properties.color;
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.arc(mouse.x, mouse.y, properties.radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawLine() {
  ctx.lineTo(mouse.x, mouse.y);
  ctx.strokeStyle = properties.color;
  ctx.lineWidth = properties.lineWidth;
  console.log(properties.lineWidth);
  ctx.stroke();
  drawCircle();
  ctx.beginPath();
  ctx.moveTo(mouse.x, mouse.y);
}

canvas.addEventListener("click", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  drawCircle();
});

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  drawLine();
});
