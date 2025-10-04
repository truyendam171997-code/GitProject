class planet {
    _x;
    _y;
    _radius;
    _color;
    _speed;
    _hp;
    _ctx;

    constructor(x, y, radius, color,canvaswidth ,canvasheight) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
        this._speed = 1;
        this._hp = Math.floor(this._radius/10)+1
        this._canvaswidth = canvaswidth;
        this._canvasheight = canvasheight;
        this._ctx = document.getElementById("Game_vip").getContext("2d")
    }
    draw() {
        this._ctx.beginPath();
        this._ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
        this._ctx.fillStyle = this._color;
        this._ctx.fill();
        this._ctx.closePath();
    }
    movedown(){
        this._y += this._speed;

    }
    uplevel(lv){
        this._speed =  lv;
    }

}