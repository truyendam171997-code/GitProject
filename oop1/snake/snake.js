class Snake {
    _x;
    _y;
    _size;
    _color;
    _speed;
    _canvas;
    _ctx;
    _flag;

    constructor(x, y, size, color, speed) {
        this._x = x;
        this._y = y;
        this._size = size;
        this._color = color;
        this._speed = speed;
        this._canvas = document.getElementById("game-screen");
        this._ctx = this._canvas.getContext("2d");
        this._flag = 'top';
    }

    //- method: moveTop(), moveDown(), moveLeft(), moveRight(), draw()
    draw() {
        this._ctx.beginPath();
        this._ctx.rect(this._x, this._y, this._size, this._size);
        this._ctx.fillStyle = this._color;
        this._ctx.fill();
        this._ctx.closePath();
    }

    moveTop() {
        if (this._y + this._size < 0) {
            this._y = this._canvas.height;
        }
        this._y -= this._speed;
        this.draw();
    }

    moveDown() {
        if (this._y - this._size >= this._canvas.height) {
            this._y = 0;
        }
        this._y += this._speed;
        this.draw();
    }

    moveLeft() {
        if (this._x + this._size <= 0) {
            this._x = this._canvas.width;
        }
        this._x -= this._speed;
        this.draw();
    }

    moveRight() {
        if (this._x - this._size >= this._canvas.width) {
            this._x = 0;
        }
        this._x += this._speed;
        this.draw();
    }

    control() {
        switch (this._flag) {
            case 'top':
                this.moveTop();
                break;
            case 'down':
                this.moveDown();
                break;
            case 'left':
                this.moveLeft();
                break;
            case 'right':
                this.moveRight();
                break;
        }
    }
}