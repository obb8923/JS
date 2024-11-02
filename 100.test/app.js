const body = document.querySelector("body");
const rec = document.createElement("div");

rec.style.height = "300px";
rec.style.width = "300px";
rec.style.backgroundColor = "#000";
rec.style.transition = "height 0.3s ease-in-out";
rec.style.position = "absolute";

// 화면 중앙에 위치시키기
rec.style.top = `${window.innerHeight - 300}px`; // 세로 중앙
rec.style.left = `${window.innerWidth - 300}px`; // 가로 중앙

body.appendChild(rec);

// rec.addEventListener("click", () => {
//   if (rec.style.height === "300px") {
//     rec.style.height = "100px"; // 클릭 시 높이를 줄임
//   } else {
//     rec.style.height = "300px"; // 다시 높이를 원래대로
//   }
// });
let cY;

rec.addEventListener("dragstart", (e) => {
  cY = e.clientY;
});
rec.addEventListener("dragend", (e) => {
  if (e.clientY < cY) {
    console.log("down");
  } else {
    console.log("up");
  }
});
