export class circle {
  constructor(x, y, radius, color, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }
  //   move(ctx, canvas) {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     this.draw(ctx);
  //     this.x += this.dx;
  //     if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
  //       circle.dx = -circle.dx; // 방향바꾸기
  //     }
  //     // requestAnimationFrame(this.move);
  //     requestAnimationFrame(this.move.bind(this, ctx, canvas));
  //   }
  animate(ctx, canvas) {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.draw(ctx);
  }
}
// new circle(100, 100, 50, "red");
