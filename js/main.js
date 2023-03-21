// canvas要素の取得
const canvas = document.querySelector("#canvas");

// 描画コンテキストの取得
const context = canvas.getContext("2d");

// 描画スタイルの初期化
context.lineWidth = 5;
context.lineJoin = "round";
context.lineCap = "round";
context.strokeStyle = "red";

// 描画状態の初期化
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// タッチの動きを検知して描画を行う関数
function draw(e) {
  if (!isDrawing) return;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.touches[0].clientX, e.touches[0].clientY);
  context.stroke();
  [lastX, lastY] = [e.touches[0].clientX, e.touches[0].clientY];
}

canvas.addEventListener("touchstart", e => {
  e.preventDefault();
  isDrawing = true;
  [lastX, lastY] = [e.touches[0].clientX, e.touches[0].clientY];
});

canvas.addEventListener("touchmove", e => {
  e.preventDefault();
  draw(e);
});

canvas.addEventListener("touchend", () => (isDrawing = false));

canvas.addEventListener("touchcancel", () => (isDrawing = false));