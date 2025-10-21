// 2 * 1 = 2   3*1= 3  4*1= 4
// 2 * 2 = 4   3*2= 6  4*2= 8
// 2 * 3 = 6   3*3= 9  4*3= 12
document.write("<table border='1'>");
for (let i = 1;i <= 10; i++){
    document.write("<tr>")
    for (let j = 2; j < 10;j++){
        document.write("<td>"+j + " * "+ i + " = "+(i*j)+"</td>");
    }
    document.write("</tr>")
}
document.write("</table>");