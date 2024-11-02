import { Line } from "./line.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(this.canvas);

    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.lines = [];
    
    this.createLines();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  createLines() {
    const lineCount = 50;
    for (let i = 0; i < lineCount; i++) {
      this.lines.push(new Line(this.canvas, this.ctx, this.centerX, this.centerY));
    }
  }

  drawCenterCircle() {
    this.ctx.beginPath();
    this.ctx.arc(this.centerX, this.centerY, 20, 0, Math.PI * 2);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
  }

  animate() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.lines.forEach(line => line.animate());
    this.drawCenterCircle();

    requestAnimationFrame(this.animate);
  }
}

new App();
// 전체화면 전환 함수
function openFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

// 전체화면 버튼 생성 및 이벤트 리스너 추가
const fullscreenBtn = document.createElement('button');
fullscreenBtn.id = 'fullscreenBtn';
fullscreenBtn.textContent = '전체화면';
document.body.appendChild(fullscreenBtn);

fullscreenBtn.addEventListener('click', openFullscreen);
