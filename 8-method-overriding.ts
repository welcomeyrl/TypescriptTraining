// Inheritance in Classes

interface IAutoOptions{
    basePrice: number;
    make: string;
    model: string;
    year: number;
    state: string;
    accessoryList: string;
}

class Auto{
    private _basePrice: number;
    _make: string;
    _model: string;
    _state: string;
    _year: number;
    _accessoryList: string;

    constructor(options: IAutoOptions){
        this._basePrice = options.basePrice;
        this._make = options.make;
        this._model = options.model;
        this._year = options.year;
        this._state = options.state;
        this._accessoryList = options.accessoryList;
    }

    calculateCost(): number{
        return this._basePrice + 0.1 * this._basePrice;
    }

    get AccessoryList(): string{
        return this._accessoryList;
    }

    get BasePrice(): number{
        return this._basePrice;
    }
    set BasePrice(price: number){
        if (price <= 0) throw 'Price should be more than 0.';
        this._basePrice = price;
    }

}

interface ICarOptions extends IAutoOptions{
    seats: number;
    type: string;
}

// Class Car inherits from class Auto
class Car extends Auto{
    _seats: number;
    _type: string;

    constructor(options: ICarOptions) {
        super(options);
        this._seats = options.seats;
        this._type = options.type;
    }
    
    get Seats(): number{
        return this._seats;
    }


    // Overrided method in the Class Car which inherits from Auto class.
    calculateCost(): number{

        if (this._year > 2010) {
            return this.BasePrice + 0.3 * this.BasePrice;
        }
        else{
            return this.BasePrice + 0.1 * this.BasePrice; 
        }
        
    }

}