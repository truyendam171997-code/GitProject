// Viết chương trình nhập vào giá trị cho chuỗi message.
//
//     Nếu giá trị nhập vào là Employee thì hiển thị chuỗi Hello.
//
//     Còn lại nếu giá trị nhập vào là Director thì hiển thị chuỗi Greetings
//
// Còn lại nếu giá trị nhập vào chuỗi rỗng thì hiển thị No login
//
// Còn lại hiển thị chuỗi rỗng
let message = prompt("enter massage: ","")
 message == "Employee" ? alert("Hello") :
     message == "Director" ? alert("Greetings") :
         message == "" ? alert("No login") : alert("");