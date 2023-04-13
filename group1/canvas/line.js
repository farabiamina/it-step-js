const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 0.5;
let opacity = 0.74276;
ctx.strokeStyle = "rgba(255, 0, 0," + opacity + ")";
// console.log(ctx.strokeStyle);
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(100, 100);
ctx.closePath();
ctx.stroke();
