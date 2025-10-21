class phones {
    _id;
    _name;
    _brand;
    _price;
    constructor(id, name, brand, price) {
        this._id = id;
        this._name = name;
        this._brand = brand;
        this._price = price;
    }

    get id() { return this._id; }
    set id(value) { this._id = value; }

    get name() { return this._name; }
    set name(value) { this._name = value; }

    get brand() { return this._brand; }
    set brand(value) { this._brand = value; }

    get price() { return this._price; }
    set price(value) { this._price = value; }

    toString() {
        return "Mã: "+this._id+ " Tên: "+this._name + " Hãng: "+this._brand+" Giá: "+ this._price;
    }
}