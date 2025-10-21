// function isPalindrome(){
//     let Palindrome = document.getElementById("isPalindrome").value;
//     if (Palindrome === ""){
//         document.getElementById("result").innerHTML = " bạn chưa nhập dữ liệu"
//     }
//     else {
//         for (let i = 0; i < Palindrome.length/2; i++){
//             if (Palindrome[i] !== Palindrome[Palindrome.length - (i+1)]){
//                 document.getElementById("result").innerHTML = " không đối xứng"
//                 return;
//             }
//         }
//         document.getElementById("result").innerHTML = " đối xứng"
//     }
//
// }


function isPalindrome(str){
    if (str.length <= 0){ return true}
    if (str[0]!==str[str.length - 1]){ return false}
    if (str[0]===str[str.length-1]){
        return isPalindrome(str.slice(1,str.length-1) )
    }
}

function checksPalindrome(){
    let str  = document.getElementById("isPalindrome").value;
    if (isPalindrome(str)){ document.getElementById("result").innerHTML = " đối xứng"}
    else document.getElementById("result").innerHTML = " không đối xứng"
}