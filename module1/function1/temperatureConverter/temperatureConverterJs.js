function temperatureConverter() {
    let f = +document.getElementById("Fahrenheit").value;
    let c = (f-32)/1.8
    document.getElementById("Celsius").innerHTML = c
}