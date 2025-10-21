class circle{
    _x;
    _y;
    _radius;
    _ctx;
    _color;
    _vx;
    _vy;

    constructor(x,y,radius,color,vx,vy) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._vx= vx;
        this._vy=vy
        this._ctx = document.getElementById("myCanvas").getContext('2d');
        this._color = color;
    }
    draw() {
        this._ctx.beginPath();
        this._ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
        this._ctx.fillStyle = this._color;
        this._ctx.fill();
        this._ctx.closePath();
    }

    move (canavaswidth,canavasheight) {
        this._x = this._x + this._vx
        this._y = this._y + this._vy

        if ( this._x - this._radius < 0 || this._x + this._radius > canavaswidth ) {
            this._vx = -this._vx
        }
        if ( this._y - this._radius < 0 || this._y + this._radius > canavasheight ) {
            this._vy = -this._vy
        }
        this.draw();
    }


}