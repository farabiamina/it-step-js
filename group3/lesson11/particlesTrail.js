let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let particles = [];

const mouse = {
  x: null,
  y: null,
};

const options = {
  size: 5,
  speed: 4,
  radius: 4,
  quantity: 3,
  distance: 100,
  lineWidth: 0.5,
  // lifeSpan: 5,
};

let hue = 0;
// console.log(ctx);

function drawCircle() {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2, false);
  ctx.fill();
}

canvas.addEventListener("click", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  fillParticles();
});

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  // hue++;
  fillParticles();
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * options.size + 1;
    this.speedX = Math.random() * options.speed - options.speed/2;
    this.speedY = Math.random() * options.speed - options.speed/2;
    this.color = "hsl(" + hue%360 + ",100%,50%)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.3) this.size -= 0.05;
    // hue++;
  }
  draw() {
    ctx.fillStyle = this.color;
    // ctx.fillStyle = this.color;
    // console.log(ctx.fillStyle);
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function fillParticles() {
    for (let i = 0; i < options.quantity; i++) {
        particles.push(new Particle());
    }
}

function particleUpdate() {
    for (let i in particles) {
        particles[i].update();
        particles[i].draw();
        // drawLines();
        // hue++;
        let x1, x2, y1, y2, d, opacity;
        for (let j in particles) {
          x1 = particles[i].x;
          x2 = particles[j].x;
          y1 = particles[i].y;
          y2 = particles[j].y;
          d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
          if (d < options.distance) {
            opacity = 1 - d/options.distance;
            ctx.strokeStyle = "rgba(255,0,0,"+opacity+")";
            ctx.beginPath();
            ctx.lineWidth = options.lineWidth;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.closePath();
          }
        }
        if (particles[i].size <= 0.3) {
            particles.splice(i, 1);
            i--;
        }
    }
    // drawLines();
}

function drawLines() {
  let x1, x2, y1, y2, d, opacity;
  for (let p1 of particles) {
    for (let p2 of particles) {
      x1 = p1.x;
      x2 = p2.x;
      y1 = p1.y;
      y2 = p2.y;
      d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
      if (d < options.distance) {
        opacity = 1 - d/options.distance;
        ctx.strokeStyle = "rgba(255,0,0,"+opacity+")";
        ctx.beginPath();
        ctx.lineWidth = options.lineWidth;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    // ctx.fillStyle = "rgba(0,0,0,0.1)";
    // ctx.fillRect(0,0,canvas.width, canvas.height);
    particleUpdate();
    
    // hue++;
    // console.log(hue);
    requestAnimationFrame(animate);
}

animate();