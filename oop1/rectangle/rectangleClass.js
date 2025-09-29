class RectangleClass {
    _width;
    _length;
    _ctx;
    _color;

    constructor(width, length,color) {
        this._width = width;
        this._length = length;
        this._ctx = document.getElementById("myCanvas").getContext("2d");
        this._color = color;
    }

    area(){
        return this._width*this._length;
    }
    perimeter(){
        return (this._width + this._length)*2;
    }
    draw(){
        if(this._width > 670 || this._length > 560){
            alert("hình chữ nhật lớn hơn khung chứa, không thế vẽ ")
        }
        else{
            this._ctx.beginPath();
            this._ctx.rect(30,40, this._width, this._length);
            this._ctx.fillStyle = this._color;
            this._ctx.fill();
            this._ctx.closePath();

        }
    }
}