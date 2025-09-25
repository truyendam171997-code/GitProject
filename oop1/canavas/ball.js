class Ball {
    _x;
    _y;
    _radius;
    _color;
    _canavas;
    _ctx;

    constructor(x, y, radius, color, canavas, ctx) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
        this._canavas = document.getElementById("myCanvas");
        this._ctx = this._canavas.getContext("2d");
    }

    draw(){
        this._ctx.beginPath();
        this._ctx.arc(this._x,this._y,this._radius,0,2*Math.PI);
        this._ctx.fillStyle = this._color;
        this._ctx.fill();
        this._ctx.closePath();
    }
}

