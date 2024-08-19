import { circle } from "./circle.js";
console.log("Asd");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c1 = new circle(100, 100, 50, "red");
c1.draw(ctx);
