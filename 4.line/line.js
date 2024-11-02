class Line {
  constructor(canvas, ctx, centerX, centerY) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.startX = centerX;
    this.startY = centerY;
    this.endX = Math.random() * canvas.width;
    this.endY = Math.random() * canvas.height;
    this.speed = Math.random() * 2 + 1; // 선의 속도
  }

  animate() {
    // 선을 그리는 로직
    this.ctx.beginPath();
    this.ctx.moveTo(this.startX, this.startY);
    this.ctx.lineTo(this.endX, this.endY);
    this.ctx.strokeStyle = "white"; // 선의 색상
    this.ctx.stroke();
    
    // 선의 위치 업데이트 (예시)
    this.endX += this.speed;
    if (this.endX > this.canvas.width) {
      this.endX = 0; // 화면을 넘어가면 다시 시작
    }
  }
}