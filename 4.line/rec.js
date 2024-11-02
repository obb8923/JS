class Rec {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
  }
  draw() {
    this.ctx.fillStyle = "rgb(200, 0, 0)";
    this.ctx.fillRect(10, 10, 200, 100);
  }
}
