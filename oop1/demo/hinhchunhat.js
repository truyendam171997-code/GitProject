class rectangle{
    _height;
    _width;

    constructor(height, width){
        this._height = +height;
        this._width = +width;
    }

    getArea(){
        return "dien tich là" + ( this._height*this._width)
    }

    getPerimeter (){
        return "chu vi là " + 2*(this._height+this._width)
    }


}