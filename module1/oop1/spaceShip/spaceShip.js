class spaceShip {
    _ctx;
    _width;
    _height;
    _speed;
    _hp;
    _x;
    _y;

    constructor( width, height, canvaswidth , canvasheight) {
        this._ctx = document.getElementById("Game_vip").getContext("2d");
        this._width = width;
        this._height = height;
        this._x = 250;
        this._y = 400;
        this._speed = 3;
        this._hp = 3;
        this._canvaswidth = canvaswidth;
        this._canvasheight = canvasheight;
        this.spaceshipimg = new Image()
        this.spaceshipimg.src= "images/spaceShip.png";
        this.spaceshipimg.onload = () => {
            init();
        }
    }

    draw() {
            this._ctx.drawImage(this.spaceshipimg, this._x, this._y, this._width, this._height);
    }
// hàm di chuyển
    moveleft(){
        this._x -= this._speed;
        if(this._x + this._width < 0 ) {
            this._x = this._canvaswidth
        }

    }
    moveright(){
        this._x += this._speed;
        if(this._x - this._width > this._canvaswidth ) {
            this._x = 0;
        }

    }
    movetop(){
        this._y -= this._speed;
        if(this._y + this._height < 0 ) {
            this._y = this._canvasheight
        }

    }
    movebottom(){
        this._y += this._speed;
        if(this._y - this._height > this._canvasheight) {
            this._y = 0
        }
    }
    // lấy tọa độ tâm và bán kính
    get cx (){ return this._x+ Math.floor(this._width/2) }
    get cy (){ return this._y+ Math.floor(this._height/2) }
    get radius (){
        return Math.max(this._width,this._height)/2
    }

    // hàm phi thuyền bắn
    fire(bullets){
        const bullet = new gun(this.cx,this._y);
        bullets.push(bullet);
    }
}