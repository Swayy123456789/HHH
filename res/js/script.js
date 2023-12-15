const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const battleBus = new Image();
battleBus.src = "./res/img/battle_bus.png";


let bossPaths = [
    "./res/img/battle_bus.png",
    "./res/img/BOSS.png",
    "./res/img/fnkid.png",
    "./res/img/kevin.png",
    "./res/img/mecha.png"
];

canvas.width = 1280;
canvas.height = 720;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 1280, 720);

ctx.fillStyle = "orange";
ctx.fillRect(100, 200, 100, 200);
ctx.fillRect(100, 200, 100, 200);

ctx.strokeStyle = "red";
ctx.strokeRect(400, 200, 100, 200);
ctx.strokeRect(100, 200, 100, 200);


ctx.strokeStyle = "black";

ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(800, 50);
ctx.lineTo(800, 200);
ctx.stroke();
 
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(950, 50);
ctx.lineTo(950, 200);
ctx.stroke();
 
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.arc(875, 250, 50, 0, 1 * Math.PI);
ctx.stroke();

let busX = 100;
let busXVelocity = 1;

let busY = 200;
let busYVelocity = 1;

let bus = {
    x: 100,
    y: 100,
    xVelocity: 1,
    yVelocity: 1
};

let i = 10;
i = 20;
console.log(i);

bus.x = 110;
console.log(bus.x)

window.onload = () => {
    ctx.drawImage(battleBus, 100, 100, 200, 200);
    setInterval(() => {

        if (canvas.width <= bus.x + 200) {
            bus.xVelocity *= -1;
            battleBus.src = bossPaths[1];
        }

        if (bus.x <= 0) {
            bus.xVelocity *= -1;
            battleBus.src = bossPaths [3];
        }
        if (canvas.height <= bus.y + 200) {
            bus.yVelocity *= -1;
            battleBus.src = bossPaths [2];
        }
        if (bus.y <= 0) {
            bus.yVelocity *= -1;
            battleBus.src = bossPaths [4];
            bossPaths[3] = bossPaths [0];
        }


        bus.x+= bus.xVelocity;
        bus.y += bus.yVelocity;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 1280, 720)
        ctx.drawImage(battleBus, bus.x, bus.y, 200, 200);
    }, 5);
}