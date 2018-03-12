"use strict";
class NewEmployee {
    constructor(firstName, lastName, ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ssn = ssn;
        this._firstName = firstName;
        this._lastName = lastName;
        this._ssn = ssn;
    }
    greetingsFunction() {
        console.log("Name: " + this._firstName + " " + this._lastName);
        console.log("Social Security: " + this._ssn);
        return "Hello, " + this._firstName + " " + this._lastName;
    }
}
let _newEmployee = new NewEmployee("Aditya", "Bhardwaj", 12231452);
document.body.innerHTML = _newEmployee.greetingsFunction();
