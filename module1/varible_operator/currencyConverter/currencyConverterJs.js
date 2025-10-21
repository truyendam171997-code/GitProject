function convertToNumber() {
    let money = +(document.getElementById("money").value)
    let unit1 = document.getElementById('unit1').value
    let unit2 = document.getElementById('unit2').value
    const rate = 26000
    if( unit1 == "VND" && unit2 == "USD" ){
        money = money/rate
    }
    if  ( unit1 == "USD" && unit2 == "VND" ){
        money = money*rate
    }
    let resultConverter = document.getElementById("resultConverter");
    resultConverter.innerHTML = "result "+money + " "+unit2;

}
let converter = document.getElementById("converter")
converter.addEventListener("click", convertToNumber)