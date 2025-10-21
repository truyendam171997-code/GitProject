// Nếu số đó lớn hơn 0 hiển thị 1
//
// Còn lại nếu số đó nhỏ hơn 0 thì hiển thị -1
//
// Còn lại hiển thị 0
let a = +prompt("enter number");
// if (a > 0) {
//     alert("1");
// }
// else  if (a < 0 ) {
//     alert("-1");
// }
//
// else {
//     alert("0");
// }

// cau truc switch case
switch (true){
    case (a == 0):
        alert("0");
        break;
    case (a > 0) :
        alert("1");
        break;
    default:
        alert("-1");
}