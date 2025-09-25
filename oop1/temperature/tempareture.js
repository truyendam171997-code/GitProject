class temperature {
    _celsius ;
    constructor(celsius) {
        this._celsius =  celsius;
    }
    convertCtoF(){
        return (this._celsius * 1.8) + 32;

    }
    convertCtoK(){
        return (this._celsius + 273.15);
    }
}