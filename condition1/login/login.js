function enterPassword(){
    let password = prompt("enter password","");
    if (password == "TheMaster") {
        alert("welcome")
    }
    else if (password == null){
        alert("Canceled");
        enterPassword()
    }
    else {
        alert("Wrong password");
        password = prompt("enter password");
        enterPassword()
    }

}
function login() {
let username = prompt("enter username","");
if (username == "Admin") {
    enterPassword();
}
else if (username == null){
    alert("Canceled");
}
else {
    alert("I don’t know you");
    login();
}
}
 login();
