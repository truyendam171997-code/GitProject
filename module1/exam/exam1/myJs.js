let n = +prompt("nhập số phần tử: ");
if (n > 20 ){
    document.write(" bạn nhập lớn hơn 20 phần tử ");
}
else{
    // nhập mảng
    let arr = [];
    for(let i=0; i < n ; i++){
        arr[i]= +prompt("nhập phần tử thứ " + (i+1))
    }

    // hiển thị mảng
    document.write("mảng gồm: "+ (n) + " phần tử " +"<br>")
    for(let i=0; i < n ; i++){
        document.write("phần tử thứ "+ (i+1) + " là: "+arr[i] + "<br>");
    }

    // tính hiệu tổng chẵn lẽ
    let even = 0;
    let odd = 0;
    for (let i=0; i < n ; i++){
        if ( arr[i] % 2 === 0){
            even += arr[i];
        }
        else {
            odd += arr[i];
        }
    }
    document.write("tổng các số chẵn trừ tổng các số lẻ là: " + (even - odd))
}
