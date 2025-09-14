function leapYear(){
year = +(document.getElementById('year').value);
if(((year % 100 == 0)&&(year % 400 == 0)) || ((year % 4 == 0) && (year % 100 != 0))){
    document.getElementById('result').innerHTML = true ;
}
else document.getElementById('result').innerHTML = false;
}
let btnYear =document.getElementById('btnYear')
btnYear.addEventListener('click',leapYear);