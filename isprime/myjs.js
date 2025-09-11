let number = +prompt("nhap so lương số nguyên tố cần in",)
let count = 0;
if (number < 2 ) {
    alert("ko phải số nguyên tố")
}
else{
    let j = 2;
    while (count < number) {
        let isprime = true;
       for (let i = 2; i < j;i++)
       {
           if (j % i === 0){
               isprime = false;
               break;
           }
       }
       if(isprime){
           count++;
           document.write(j+" ");
       }
       j++;
    }
}