
let ctx = document.getElementById("Game_vip").getContext("2d");
const canvaswidth = 700;
const canvasheight = 700;
let score = 0
//  tạo nền
let backgroundimg = new Image();
backgroundimg.src = "images/background.jpg";


// tạo tàu vũ trụ
let spaceShip1 = new spaceShip(50,50,canvaswidth,canvasheight);

// điều khiển tàu vũ trũ
let keys = {};
document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});
document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
})

// khởi tạo hành tinh
let planets = [];
function  createPlanet() {
    let radius = Math.floor(Math.random() * 30) + 10
    let x = Math.floor(Math.random()*(canvaswidth - 2*radius)+radius);
    let y = -radius;
    let color = "rgb("+Math.floor(Math.random() * 255)+","
        +Math.floor(Math.random() * 255)+","
        +Math.floor(Math.random() * 255) +")"
    planets.push(new planet(x, y,radius, color,canvaswidth,canvasheight))
    uplevels(lv);
}
let idsetinterval = setInterval(createPlanet,2000)

// tạo boss
function createBossPlanet() {
    clearInterval(idsetinterval);
        planets = [];
        planets.push(new planet(Math.floor(Math.random()*(canvaswidth - 2*(40 * lv))+(40 * lv)), -(40 * lv) , 40 * lv,"red",canvaswidth,canvasheight))
        planets[0]._hp = Math.floor(planets[0]._radius/10)+ lv
}


// kiem tra thoi diem xuat hien boss
function checkuplevel(){
    if(score>= 10000 * lv   ){
        lv ++;
        createBossPlanet();
        if (  planets.length === 0 || score >= 10000){ score = score+950;
            idsetinterval = setInterval(createPlanet,2000);
        }
    }
}

// hàm tăng cấp
let lv = 1 ;
function uplevels(lv){
    for (c of planets){
        c.uplevel(lv)
    }
}

//xóa hành tinh
function deletePlanet() {
    for (let i = planets.length-1 ; i >= 0; i--){
        if (planets[i]._y - planets[i]._radius  >= canvasheight) {
            planets.splice(i,1);
            score = score+50;
        }
    }
}

// CLICK chuột để bắn đạn
let bullets = [];
  window.addEventListener("click",() =>   spaceShip1.fire(bullets)  )

// xoá đạn khỏi map
function  deleteBullets() {
    for (let i = bullets.length-1 ; i >= 0; i--){
        if (bullets[i]._y + bullets[i]._radius <= 0) {
            bullets.splice(i,1);
        }
    }
}

//hàm va chạm vien đạn với hành tinh\
function hit(){
    for (let i = planets.length -1 ; i >= 0 ;i--){
        for (let j = bullets.length - 1; j >= 0 ; j--){
            let dx = planets[i]._x - bullets[j]._x;
            let dy = planets[i]._y - bullets[j]._y;
            if((dx*dx + dy*dy) < (planets[i]._radius + bullets[j]._radius)*(planets[i]._radius + bullets[j]._radius) ){
                planets[i]._hp --;
                if(planets[i]._hp <= 0 ){
                    planets.splice(i,1);
                    score += 400;
                    break;
                }
                bullets.splice(j,1);
            }
        }
    }
}

// hiện thị thông số trên canavas
function drawinformation(){
    // hiển thị điểm
    ctx.beginPath();
    ctx.font = "20px Verdana";
    ctx.fillStyle = "white";
    ctx.fillText("Điểm: "+ score,canvaswidth- 150, 50);
    ctx.closePath();
    //hiển thị level
    ctx.beginPath();
    ctx.font = "20px Verdana";
    ctx.fillStyle = "white";
    ctx.fillText("level: "+ lv,50, 50);
    ctx.closePath();
    // hiển thị máu
    ctx.beginPath();
    ctx.font = "20px Verdana";
    ctx.fillStyle = "white";
    ctx.fillText("Máu: "+ spaceShip1._hp,300,  50 );
    ctx.closePath();

}



//  hàm game over
let isgameover= false
function gameOver() {
    for (let i = planets.length-1 ; i >= 0; i--) {
        let dx = planets[i]._x - spaceShip1.cx;
        let dy = planets[i]._y - spaceShip1.cy;
        if ((dx*dx + dy*dy) < (planets[i]._radius + spaceShip1.radius)*(planets[i]._radius + spaceShip1.radius)) {
            spaceShip1._hp --
            if (spaceShip1._hp <= 0){
                alert("Game Over!");
                return  isgameover= true;
            }
            planets.splice(i,1);
            break;
        }
    }
}

// hàm khởi tạo
function init(){
    ctx.clearRect(0, 0, canvaswidth,canvasheight);
    ctx.drawImage(backgroundimg, 0, 0,canvaswidth,canvasheight);
    deletePlanet();
    deleteBullets();

    // thiên thạch rớt
    for (let c of planets) {
        c.movedown();
        c.draw();
    }

    // bắn đạn
    for (let c of bullets) {
        c.move()
    }

    // nhận dạng phím để thực thi hàm
    if (keys["ArrowLeft"] ){spaceShip1.moveleft() }
    if (keys["ArrowRight"] ){spaceShip1.moveright() }
    if (keys["ArrowUp"] ){spaceShip1.movetop() }
    if (keys["ArrowDown"] ){spaceShip1.movebottom() }

    spaceShip1.draw();
    hit();
    drawinformation();
    checkuplevel()

    // nếu gameOver dừng chạy init
    gameOver();
    if(!isgameover){
        requestAnimationFrame(init);
    }

}


