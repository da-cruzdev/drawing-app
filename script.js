const canvas = document.getElementById("canvas");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clearElement = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 2;
let isPressed = false;
colorElement.value = "black";
let color = colorElement.value;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  (isPressed = true), (x = e.offsetX), (y = e.offsetY);
});
document.addEventListener("mouseup", (e) => {
  (isPressed = false), (x = undefined), (y = undefined);
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
function updateSizeOnScreen() {
  sizeElement.innerHTML = size;
}
increaseButton.addEventListener("click", () => {
  size += 1;
  if (size > 10) {
    size = 10;
  }
  updateSizeOnScreen();
});
decreaseButton.addEventListener("click", () => {
  size -= 1;
  if (size < 2) {
    size = 2;
  }
  updateSizeOnScreen();
});
colorElement.addEventListener("change", (e) => (color = e.target.value));
clearElement.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
