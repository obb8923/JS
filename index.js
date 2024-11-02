const express = require("express");
const path = require("path");
const app = express();

//재생을 원하는 파일이 있는 폴더명을 기입
const serverFile = "4.line";

// "100.test";
// "3.canvas_animation";
// "3a.background";

// 정적 파일을 제공하는 폴더 설정
app.use(express.static(path.join(__dirname, serverFile)));

// 포트 설정
const PORT = 3001;

// 기본 경로('/')로 접속했을 때 index.html 파일을 전송
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, serverFile, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
