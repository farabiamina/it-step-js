let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

function drawCircle() {
  ctx.fillStyle = properties.color;
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.arc(mouse.x, mouse.y, properties.radius, 0, Math.PI * 2);
  ctx.fill();
}

let properties = {
  radius: 10,
  color: "red",
  lineWidth: 10,
  size: 5,
  speed: 4,
  quantity: 20,
};

let mouse = {
  x: null,
  y: null,
};

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

canvas.addEventListener("click", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    // this.size = Math.random() * properties.size + 1;
    // this.speedX = Math.random() * properties.speed - 2;
    // this.speedY = Math.random() * properties.speed - 2;
    this.size = Math.random() * 4 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.fillStyle = properties.color;
    ctx.beginPath();
    // ctx.lineWidth = properties.;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < properties.quantity; i++) {
    particlesArray.push(new Particle());
  }
}
init();

function particlesAnimate() {
  for (let i = 0; i < particlesArray; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
}
console.log(particlesArray);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesAnimate();
  // drawCircle();
  requestAnimationFrame(animate);
}
particlesArray[5].draw();
animate();
