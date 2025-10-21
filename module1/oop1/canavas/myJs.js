let mycanavas = document.getElementById("myCanvas");
let ctx = mycanavas.getContext("2d");
// hinh chu nhat
ctx.beginPath();
ctx.rect(20,30,100,200);
ctx.fillStyle = "#b61b1b";
ctx.fill();
ctx.closePath();

// hinh tron
ctx.beginPath();
ctx.arc(300,300,100,0,2*Math.PI);
ctx.fillStyle = "#4e3c3c";
ctx.fill();
ctx.closePath();
// viet text

ctx.beginPath();
ctx.font ="20px arial, sans-serif ";
ctx.fillStyle = "#4e3c3c";
ctx.fillText("helo",200,200)
ctx.closePath();

let ball1 = new Ball(200,200,60,"#4e3c3c");
ball1.draw();
let ball2 = new Ball(100,200,80,"#0ca525");
ball2.draw();