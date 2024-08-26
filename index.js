const express = require("express");
const path = require("path");
const app = express();

// 정적 파일을 제공하는 폴더 설정
app.use(express.static(path.join(__dirname, "3.canvas_animation")));

// 포트 설정
const PORT = 3000;

// 기본 경로('/')로 접속했을 때 index.html 파일을 전송
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "3.canvas_animation", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
