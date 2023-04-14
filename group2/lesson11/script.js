const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue = 0;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let properties = {
  radius: 10,
  color: "red",
  lineWidth: 10,
  size: 5,
  speed: 4,
  quantity: 2,
  maxDistance: 100,
  lifeSpan: 7,
};

const mouse = {
  x: null,
  y: null,
};

canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < properties.quantity; i++) {
    particlesArray.push(new Particle());
  }
});

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < properties.quantity; i++) {
    particlesArray.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * properties.size + 1;
    this.speedX = Math.random() * properties.speed - 2;
    this.speedY = Math.random() * properties.speed - 2;
    this.color = "hsl(" + hue + ",100%,50%)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.3) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawLines() {
  let x1, y1, x2, y2, distance, opacity;
  for (let p1 of particlesArray) {
    for (let p2 of particlesArray) {
      x1 = p1.x;
      y1 = p1.y;
      x2 = p2.x;
      y2 = p2.y;
      distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
      if (distance < properties.maxDistance) {
        opacity = 1 - distance / properties.maxDistance;
        ctx.lineWidth = 0.1;
        // ctx.strokeStyle = p.color;
        ctx.strokeStyle = "rgba(255,0,0," + opacity + ")";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }
}

// function init() {
//   for (let i = 0; i < properties.quantity; i++) {
//     particlesArray.push(new Particle());
//   }
// }
// init();

function handleParticles() {
  // 3
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    // drawLines(particlesArray[i]);
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  drawLines();
  hue++;
  requestAnimationFrame(animate);
}
animate();
