//캔버스 만들기
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const toolbar = document.querySelector("#toolbar");
document.body.appendChild(canvas);
//캔버스 초기화
canvas.height = window.innerHeight - toolbar.offsetHeight;
canvas.width = window.innerWidth;

// event 객체의clientX와 clientY 값을 사용해서 마우스커서의 위치를알아낸다.
// canvas의 (0,0)이 아니라 툴바 크기를 고려해 줘야해서 아래와 같이 지정
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;
let isDrawing = false; // 드로잉 상태인지 확인합니다.
let startX; // 그리기 시작하는 좌표, x
let startY; // 그리기 시작하는 좌표, y
let lineWidth = 2; // 선 굵기 기본값

// 선색과선굵기를선택했을때
toolbar.addEventListener(
  "change",
  (e) => {
    if (e.target.id === "stroke") {
      ctx.strokeStyle = e.target.value;
    }
    if (e.target.id === "lWidth") {
      lineWidth = e.target.value;
    }
  },
  false
);
// '지우기' 버튼누르면캔버스지우기
reset.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
//마우스를 클릭하면?
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});
//마우스를 움직이거나 멈추면?
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});
