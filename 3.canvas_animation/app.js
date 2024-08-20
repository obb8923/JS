import { circle } from "./circle.js";
//generate canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
//canvas init
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//문서의 크기로 재설정
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
//body의 높이로 지정 - body는 100vw,100vh
canvas.width = document.body.offsetWidth;
canvas.height = document.body.offsetHeight;
console.log(canvas.width, canvas.height);
//generate circles
const circles = [];

for (let i = 0; i < 20; i++) {
  // 1~80 사이의 정수 난수 생성 - 반지름
  const randomR = Math.floor(Math.random() * 80) + 10;
  // 랜덤 위치 생성 - 원이 캔버스를 벗어나지 않게하기 위해 최소 최대에 반지름을 빼고 더해주었다.
  const randomX =
    Math.floor(Math.random() * (canvas.width - randomR)) + randomR;
  const randomY =
    Math.floor(Math.random() * (canvas.height - randomR)) + randomR;
  // 랜덤 색
  const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  const randomDx = Math.random() * 5 + 3;
  const randomDy = Math.random() * 5 + 3;
  circles.push(
    new circle(randomX, randomY, randomR, randomColor, randomDx, randomDy)
  );
}
//circles 배열에서 원 생성
// for (let i = 0; i < circles.length; i++) {
//   circles[i].move(ctx, canvas);
// }

function update() {
  //여려러개 원을 그리는 함수
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < circles.length; i++) {
    let obj = circles[i];
    obj.animate(ctx, canvas);
  }
  requestAnimationFrame(update);
}
update();
