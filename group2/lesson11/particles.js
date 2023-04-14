const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

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
  quantity: 20,
  maxDistance: 150,
  lifeSpan: 7,
};

const mouse = {
  x: null,
  y: null,
};
// canvas.addEventListener("click", function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });

// canvas.addEventListener("mousemove", function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * properties.size + 1;
    this.speedX = Math.random() * properties.speed - 2;
    this.speedY = Math.random() * properties.speed - 2;
    this.lifeSpan = Math.random() * properties.lifeSpan * 60;
  }
  update() {
    if (
      (this.x + this.speedX > canvas.width && this.speedX > 0) ||
      (this.x + this.speedX < 0 && this.speedX < 0)
    ) {
      this.speedX *= -1;
    }
    if (
      (this.y + this.speedY > canvas.height && this.speedY > 0) ||
      (this.y + this.speedY < 0 && this.speedY < 0)
    ) {
      this.speedY *= -1;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
  reSpawn() {
    if (this.lifeSpan < 1) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * properties.size + 1;
      this.speedX = Math.random() * properties.speed - 2;
      this.speedY = Math.random() * properties.speed - 2;
      this.lifeSpan = Math.random() * properties.lifeSpan * 60;
    }
    this.lifeSpan--;
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
        ctx.lineWidth = 0.2;
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

function init() {
  for (let i = 0; i < properties.quantity; i++) {
    particlesArray.push(new Particle());
  }
}
init();

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    particlesArray[i].reSpawn();
    drawLines();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}
animate();
