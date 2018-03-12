"use strict";
// Inheritance in Classes
class Auto {
    constructor(options) {
        this._basePrice = options.basePrice;
        this._make = options.make;
        this._model = options.model;
        this._year = options.year;
        this._state = options.state;
        this._accessoryList = options.accessoryList;
    }
    calculateCost() {
        return this._basePrice + 0.1 * this._basePrice;
    }
    get AccessoryList() {
        return this._accessoryList;
    }
    get BasePrice() {
        return this._basePrice;
    }
    set BasePrice(price) {
        if (price <= 0)
            throw 'Price should be more than 0.';
        this._basePrice = price;
    }
}
// Class Car inherits from class Auto
class Car extends Auto {
    constructor(options) {
        super(options);
        this._seats = options.seats;
        this._type = options.type;
    }
    get Seats() {
        return this._seats;
    }
    // Overrided method in the Class Car which inherits from Auto class.
    calculateCost() {
        if (this._year > 2010) {
            return this.BasePrice + 0.3 * this.BasePrice;
        }
        else {
            return this.BasePrice + 0.1 * this.BasePrice;
        }
    }
}
