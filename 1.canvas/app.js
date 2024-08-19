// create
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
// initialize
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// rectangle
ctx.fillStyle = "rgb(100,0,0)";
ctx.fillRect(10, 10, 50, 100);

// triangle
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.fillStyle = "rgb(0, 200,0)";
ctx.fill();

// circle
ctx.fillStyle = "yellow"; // 채우기색상
ctx.strokeStyle = "red"; // 선색상
ctx.beginPath();
ctx.arc(400, 450, 100, 0, Math.PI, true); // 0~360°까지경로를만들기.
ctx.closePath(); // 경로닫기.
ctx.fill(); // 색상채우기.
ctx.stroke(); // 선그리기.

//ellipse
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
ctx.stroke();

// 원으로 타원 그리기
ctx.strokeStyle = "blue";
ctx.scale(1, 0.7); //가로,세로 변형
ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.stroke();

//2차 베지에 곡선
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.quadraticCurveTo(200, 50, 350, 200);
ctx.stroke();

//3차 베지에 곡선
ctx.beginPath();
ctx.moveTo(50, 100);
// 곡선의 시작 위치
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
ctx.strokeStyle = "green";
ctx.stroke();
