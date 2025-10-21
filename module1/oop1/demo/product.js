class product {
    _name ;
    _price;

    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    getinfo(){
        return "san pham: " + this._name + " " + this._price;
    }
}