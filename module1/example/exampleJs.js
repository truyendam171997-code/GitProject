// bài 3 Viết chương trình khởi tạo một mảng số nguyên. Hiển thị giá trị lớn nhất trong mảng đó.
//     In ra giá trị trung bình của các phần tử trong mảng.
// let n = +prompt("tạo mảng có số phần tử là: ")
// let arrs = [];
// for (let i = 0; i < n; i++) {
//     let x = +prompt("nhập phần tử thứ: " + (i+1))
//     arrs.push(x)
// }
// let max = arrs [0];
// for (let i = 1; i <arrs.length; i++) {
//     if( arrs [i] > max ) {
//         max = arrs[i]
//     }
// }
// document.write("số lớn nhấn là: "+ max+"<br>");
// let tb = 0;
// for (let i = 0; i < arrs.length; i++) {
//     tb = tb + arrs[i];
// }
// tb = tb/(n);
// document.write("giá trị trung bình là: "+ tb+"<br>");
// Bài 4
// Viết chương trình khởi tạo hoặc nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng.
// let n = +prompt("tạo mảng có số phần tử là: ")
// let arrs = [];
// for (let i = 0; i < n; i++) {
//     let x = +prompt("nhập phần tử thứ: " + (i+1))
//     arrs.push(x)
// }
// let sp = []
// for (let i = arrs.length - 1; i>=0 ; i--) {
//     sp.push(arrs[i]);
// }
// document.write("mảng đảo ngược là: " + sp)

// Bài 5
// Viết chương trình đếm số nguyên âm trong một mảng.
// let n = +prompt("tạo mảng có số phần tử là: ")
// let arrs = [];
// for (let i = 0; i < n; i++) {
//     let x = +prompt("nhập phần tử thứ: " + (i+1))
//     arrs.push(x)
// }
// let count = 0 ;
// for (let i = 0; i < arrs.length; i++) {
//     if (arrs[i] < 0 && Number.isInteger(arrs[i]) ) {
//         document.write(arrs[i]+"  ");
//         count ++;
//     }
//
// }
// document.write("<br>")
// document.write("tổng các số nguyên âm là:"+count)
// Bài 6
// Viết chương trình khởi tạo hoặc nhập vào một mảng số nguyên gồm 10 phần tử. Nhập hoặc tạo một phần tử số nguyên V. Chương trình tìm xem V có nằm trong mảng không.
//
//     Nếu V thuộc mảng, in ra: "V is in the array".
//     Nếu không, in ra: "V is not in the array".



// function chuvi(a,b,c){
//     return a + b + c;
// }
// function dientich(a,b,c){
//     let p = chuvi(a,b,c)/2 ;
//     let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//     return s;
// }
// function total(){
//     let a = +document.getElementById('a').value;
//     let b = +document.getElementById('b').value;
//     let c = +document.getElementById('c').value;
//
//     document.getElementById("result").innerHTML = "dien tich là : " + dientich(a,b,c) + " chu vi là: " + chuvi(a,b,c);
// }



