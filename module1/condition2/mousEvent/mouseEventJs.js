let imageFootball = document.getElementById("imageFootball");
function init (){
    imageFootball = document.getElementById("imageFootball");
    imageFootball.style.position= "relative";
    imageFootball.style.zIndex = "-99";
    imageFootball.style.left= "0px";
    imageFootball.style.top= "0px";
}
document.onload = init;
function  moveFootballLeft (){
    imageFootball.style.left = parseInt(imageFootball.style.left) - 10 + "px";
}
function  moveFootballRight (){
    imageFootball.style.left = parseInt(imageFootball.style.left) + 10 + "px";

}
function  moveFootballTop (){
    imageFootball.style.top = parseInt(imageFootball.style.top) - 10 + "px";

}
function  moveFootballBottom (){
    imageFootball.style.top = parseInt(imageFootball.style.top) + 10 + "px";


}

let btnright = document.getElementById("btnright")
btnright.addEventListener("click", moveFootballRight)
let btnLeft = document.getElementById("btnLeft");
btnLeft.addEventListener("click", moveFootballLeft)
let btnTop = document.getElementById("btnTop")
btnTop.addEventListener("click", moveFootballTop)
let btnBottom = document.getElementById("btnBottom");
btnBottom.addEventListener("click", moveFootballBottom)
window.onload = init;

