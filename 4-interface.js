"use strict";
class Consultant {
    constructor(firstName, lastName, ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ssn = ssn;
        this._firstName = firstName;
        this._lastName = lastName;
        this._ssn = ssn;
    }
    appendGreeting() {
        console.log("Name: " + this._firstName + " " + this._lastName);
        console.log("Social Security: " + this._ssn);
        return "Hello, " + this._firstName + " " + this._lastName;
    }
}
window.onload = function addData() {
    let consultant = new Consultant("Chander", "Dhall", 123);
    document.body.innerHTML = consultant.appendGreeting();
};
