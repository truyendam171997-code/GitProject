let deposit = +prompt("nhập số tiền cần gửi: ",);
let month= +prompt("nhập số tháng cần gửi: ",);
let money = deposit + (month*((deposit/100)*6));
document.write("số tiền nhận được là: ",money);
