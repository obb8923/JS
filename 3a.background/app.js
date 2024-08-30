import { circle } from "./circle.js";
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 캔버스 스타일 설정
canvas.style.backgroundColor = "rgba(0, 0, 0, 1)";

const circle1 = new circle(500, 500, 150, "rgba(0, 0, 255, 1)", 1.5, 1.5);
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circle1.animate(ctx, canvas);

  requestAnimationFrame(update);
}
update();

const mask = document.createElement("div");
mask.style.width = window.innerWidth + "px";
mask.style.height = window.innerHeight + "px";
mask.style.backgroundColor = "rgba(0,0,0,0.5)";
mask.style.zIndex = "10";
document.body.appendChild(mask);

document.body.style.position = "relative";
canvas.style.position = "absolute";
mask.style.position = "absolute";
mask.style.backdropFilter = "blur(30px)";
