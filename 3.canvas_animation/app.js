import { circle } from "./circle.js";
//generate canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
//canvas init
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스를 초기화 (지우기)
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.animate(ctx, canvas); // 각 원의 애니메이션 업데이트
  }
  requestAnimationFrame(update); // 다음 프레임을 요청
}
update();
