

function result(){
    const _width = +document.getElementById("width").value;
    const _length = +document.getElementById("length").value;
    const _color = document.getElementById("color").value;
    let rect1 = new RectangleClass(_width, _length, _color);
    document.getElementById("result").innerText = "diện tích là : "+rect1.area()+"cm" +" chu vi là : " + rect1.perimeter()+"cm";
    rect1.draw()
}
