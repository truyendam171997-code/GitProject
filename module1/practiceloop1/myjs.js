// // bài 1
// function coutn (){
//     for (let i = 1; i < 100; i++) {
//         document.write(i+" ");
//     }
//     alert("hoàn thành")
// }
// coutn ();
//
// // bài 2
// function temperature (tem){
//     while(tem < 20 || tem > 100){
//         if (tem > 100){
//              alert("giảm nhiệt độ");
//              tem = +prompt("nhạp nhiet độ",);
//         }
//         else {
//             alert("tăng nhiệt độ")
//             tem = +prompt("nhap nhiet độ",);
//         }
//     }
//     alert("nhận thông tin")
// }
// let tem= +prompt("nhạp nhiet độ",);
// temperature (tem);
// // bài 3
// function fibonacci (number){
//     let count = 2 ;
//     let a = 0 ;
//     let b = 1 ;
//     document.write("0 "+"1 ")
//     while (count < number) {
//         let c = a + b;
//         document.write(c+" ")
//         a = b ;
//         b = c;
//         count++;
//
//         }
//     }
//
// let fib = +prompt("nhap số lượng fib cần in ra");
// fibonacci(fib);
// // bài 4
// function Findfibonacci (){
//     let a = 0 ;
//     let b = 1 ;
//     let c = a + b;
//     while (c % 5 != 0) {
//
//         a = b ;
//         b = c;
//         c = a + b;
//     }
//     document.write(c);
// }
// Findfibonacci ();
// // bài 5
// function totalfibonacci (){
//     let count = 2 ;
//     let a = 0 ;
//     let b = 1 ;
//     let c = a + b;
//     document.write("0 "+"1 ")
//     let total = 1;
//     while (count <= 20) {
//         count++;
//         c = a + b;
//         document.write(c+ " ")
//         a = b ;
//         b = c;
//         total = total+ c
//
//     }
//     document.write(total);
// }
// totalfibonacci ();
// //  bài 6
// function  totalnumber (){
//     let total = 0;
//     let n = 0;
//     let k = 30;
//     while ( total % 7 != 0 || total == 0) {
//         total = 0;
//         for ( let i = n; i < k; i++){
//             total  = total + i;
//         }
//         k++;
//         n++;
//     }
//     document.write("tổng là: "+ total+ " <br>");
//     document.write(" tổng 30 số chia hết cho 7 là : ");
//     for (i = n; i < k ; i++){
//         document.write(i+" ");
//     }
// }
// totalnumber ()

// //bài 7
// function FizzBuzz() {
//     for (let i =1 ; i <= 100; i++)
//         if (i % 5==0 && i % 3 == 0 ){
//             document.write("FizzBuzz ");
//         }
//         else if ( i % 3 == 0 ){
//             document.write("Fizz ");
//         }
//         else if ( i % 5 == 0 ){
//             document.write("Buzz ");
//         }
//         else document.write(i + " ");
// }
// FizzBuzz();

// bài 8
function showbtnRepeat(){
    let body = document.getElementById("container");
    let repeat = document.createElement("button")
    repeat.id = "repeat";
    repeat.textContent= "repeat";
    body.appendChild(repeat);
    repeat.addEventListener("click", gameNumber);

}
function gameNumber (){
    let khoangcach = +prompt("chọn khoảng muốn đoán từ 0 đến : ");
    let numberOfplayer = +prompt("số bạn đón là: ")
    let numberOfGame = Math.floor(Math.random() * (khoangcach)) + 1;
    let count = 0;
    while (count < 3) {
        if ( numberOfplayer == numberOfGame ){
            alert("số bạn chọn đúng, xin chúc mừng")
            alert("số đoán là: "+ numberOfGame)
           count = 4 ;
        }
        else if (numberOfplayer < numberOfGame){
            alert("số bạn nhập nhỏ hơn")
            numberOfplayer = +prompt("số bạn đón là: ");
        }
        else if (numberOfplayer > numberOfGame){
            alert("số bạn nhập lớn hơn")
            numberOfplayer = +prompt("số bạn đón là: ");
        }
        else {
            numberOfplayer = +prompt("số bạn đón là: ");
        }
        count++;
    }
    if (count === 3) {
        alert("bạn thua: số đúng là "+ numberOfGame)
    }

    showbtnRepeat();
}



let start = document.getElementById("start");
start.addEventListener("click", gameNumber);


