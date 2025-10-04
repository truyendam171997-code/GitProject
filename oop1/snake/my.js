/*
- Du an game ran san moi don gian:
+ Y tuong:
  - dieu khien ran chay xung quanh man hinh
  - xuat hien moi random tren man hinh
  - cho ran an moi -> tang diem -> tang do dai con ran
+ Phan tich vs oop:
- Co nhung object nao?
- Cac thuoc tinh vs phuong thuc tung object
+ Trien khai
VD: game ran san moi
- Co nhung object nao?
-> ran(snake) vs moi(food)
Cac thuoc tinh vs phuong thuc tung object
Snake:
- property: x,y,size,color, speed
- method: moveTop(), moveDown(), moveLeft(), moveRight(), draw()
Food:
- property: x,y,size,color
- method: draw()
=> Trien khai

 */

let canvas = document.getElementById("game-screen");
let ctx = canvas.getContext("2d");

let snake = new Snake(200, 300, 10, "red", 1);
snake.draw();

function init() {
    clearCanvas();
    snake.control();
    requestAnimationFrame(init)
}

// lang nghe su kien keydown tu ban phim
window.addEventListener("keydown", function (e) {
    const keyCode = e.keyCode;
    switch (keyCode) {
        case 40:
            snake._flag = 'down';
            break;
        case 38:
            snake._flag = 'top';
            break;
        case 37:
            snake._flag = 'left';
            break;
        case 39:
            snake._flag = 'right';
            break;
    }
})

function clearCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

init();