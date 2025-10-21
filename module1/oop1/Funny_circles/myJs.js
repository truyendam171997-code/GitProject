
let circles = [];
let canavaswidth = 500
let canavasheight = 500;
let ctx = document.getElementById("myCanvas").getContext("2d");
for (let i = 0; i < 10; i++) {
    let radius = Math.floor(Math.random() * 30)+ 10;
    let x = Math.floor(Math.random() * (canavaswidth - 2 * radius)) + radius;
    let y = Math.floor(Math.random() * (canavasheight - 2 * radius)) + radius;
    let vx = (Math.random() -0.5) * 2
    let vy = (Math.random() - 0.5) * 2
    let color = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) +")";
    circles.push(new circle(x,y,radius,color,vx,vy)) ;
}

function animate(){
    ctx.clearRect(0, 0, canavaswidth,canavasheight);
    for (let c of circles) {
        c.move(canavaswidth,canavasheight);
    }
    requestAnimationFrame(animate)
}
animate()