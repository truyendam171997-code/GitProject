class circles {
    _radius;
    _color;
    constructor(radius) {
        this._radius = radius;
    }
    getradius() {
        return this._radius;
    }
    getcolor(){
        return this._color;
    }
    getArea(){
       return Math.PI * this._radius * this._radius
    }
}