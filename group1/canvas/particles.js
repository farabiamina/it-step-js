const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ctx.fillStyle = 'white';
// ctx.fillRect(10, 20, 150, 50);

const mouse = {
  x: null,
  y: null,
};
canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  //   drawCircle();
  // for (let i = 0; i < 10; i++) {
  //   particlesArray.push(new Particle());
  // }
});

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  //   drawCircle();
});

// function drawCircle() {
//   ctx.fillStyle = "red";
//   ctx.beginPath();
//   ctx.lineWidth = 5;
//   ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
//   ctx.fill();
// }

class Particle {
  constructor() {
    // this.x = mouse.x;
    // this.y = mouse.y;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 4 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.life = Math.random() * 6 * 60;
  }
  update() {
    (this.x + this.speedX > canvas.width && this.speedX > 0) ||
    this.x + this.speedX < 0
      ? (this.speedX *= -1)
      : this.speedX;

    (this.y + this.speedY > canvas.height && this.speedY > 0) ||
    this.y + this.speedY < 0
      ? (this.speedY *= -1)
      : this.speedY;

    this.x += this.speedX;
    this.y += this.speedY;
    // if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
  reSpawn() {
    if (this.life < 1) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 4 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.life = Math.random() * 6 * 60;
    }
    this.life--;
  }
}

function init() {
  for (let i = 0; i < 40; i++) {
    particlesArray.push(new Particle());
    // console.log(particlesArray[i]);
  }
}
init();

function drawLines() {
  let x1, y1, x2, y2, length, opacity;
  for (let i in particlesArray) {
    for (let j in particlesArray) {
      x1 = particlesArray[i].x;
      y1 = particlesArray[i].y;
      x2 = particlesArray[j].x;
      y2 = particlesArray[j].y;
      length = Math.sqrt((x2 - x1) ** 2 + (y1 - y2) ** 2);
      if (length < 150) {
        opacity = 1 - length / 150;
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "rgba(255, 0, 0," + opacity + ")";
        // console.log(ctx.strokeStyle);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    // console.log(particlesArray[i]);
    particlesArray[i].update();
    particlesArray[i].draw();
    particlesArray[i].reSpawn();
    drawLines();
    // if (particlesArray[i].size <= 0.3) {
    //   particlesArray.splice(i, 1);
    //   i--;
    // }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawCircle();
  handleParticles();
  requestAnimationFrame(animate);
}
animate();
