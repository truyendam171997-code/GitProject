// lesson 1
function score(){
    let physics = +(document.getElementById("physics").value);
    let math = +(document.getElementById("math").value);
    let chemistry = +(document.getElementById("chemistry").value);
    let total = physics + math+ chemistry;
    let average = total/3;
    let scoreOfStudent = document.getElementById("scoreOfStudent")
    scoreOfStudent.innerText = " average " + average+ " total "+ total;
}
let subject = document.getElementById("subject");
subject.addEventListener("click",score);

//lesson 2
function temperature(){
    let c = +(document.getElementById("c").value);
    let f =  (c * 1.8)+32;
    let resultTemperature = document.getElementById("resultTemperature")
    resultTemperature.innerText= "độ F là: "+f;
}
let changeTemperature=document.getElementById("changeTemperature")
changeTemperature.addEventListener("click",temperature);

 // lesson 3+4
function circle(){
    let radius = +(document.getElementById("radius").value)
    let area = 3.14*(radius*radius);
    let circumference = +(2*radius)*3.14;
    let resultArea = document.getElementById("resultArea")
    resultArea.innerHTML= "area of circle: "+ area;
    let resultcircumference = document.getElementById("resultcircumference")
    resultcircumference.innerHTML= "circumference of circle: "+ circumference;
}
let Calculation=document.getElementById("Calculation")
Calculation.addEventListener("click",circle);

