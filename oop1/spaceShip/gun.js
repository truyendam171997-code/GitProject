class gun{

    _x;
    _y;
    _radius;
    _speed;
    _color;
    _ctx;

    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._radius = 3;
        this._speed = 1
        this._color = "white"
        this._ctx = document.getElementById("Game_vip").getContext("2d");
    }
    draw() {
        this._ctx.beginPath();
        this._ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
        this._ctx.fillStyle = this._color;
        this._ctx.fill();
        this._ctx.closePath();
    }

    move(){
        this._y -= this._speed;
        this.draw()
    }

}