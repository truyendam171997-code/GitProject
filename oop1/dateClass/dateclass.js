class Dates {
    _day;
    _month;
    _year;
    constructor(_day, _month, _year) {
        this._day = _day;
        this._month = _month;
        this._year = _year;
    }
    getDay() {
        return this._day;
    }
    getMonth() {
        return this._month;
    }
    getYear() {
        return this._year;
    }
    setDay(day) {
         this._day = day;
    }
    setMonth(month) {
       this._month = month;
    }
    setYear(year) {
       this._year = year
    }
    toString() {
        return this._day+"/"+this._month+"/"+this._year;
    }

}