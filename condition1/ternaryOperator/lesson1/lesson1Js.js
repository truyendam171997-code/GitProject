// Bài 1: Viết chương trình nhập vào giá trị cho a và b. Tính tổng a và b, nếu tổng nhỏ hơn 4,
// hiển thị chuỗi Below, ngược lại hiển thị Over. Lưu ý sử dụng toán tử ? :

let a =+prompt("enter number a: ");
let b =+prompt("enter number b: ");
let c= (a+b) < 4 ? "below" : "over";
alert(c);

