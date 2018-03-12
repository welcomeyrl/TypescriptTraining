"use strict";
// inheritance in Classes
class Vehicle {
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
        if (price <= 0) {
            throw `Price should be more than 0.`;
        }
        ;
        this._basePrice = price;
    }
}
// class Car inherits from class Auto
class AstonMartin extends Vehicle {
    constructor(options) {
        super(options);
        this._seats = options.seats;
        this._type = options.type;
    }
    get Seats() {
        return this._seats;
    }
}
