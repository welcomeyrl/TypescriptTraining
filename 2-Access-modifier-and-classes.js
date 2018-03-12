"use strict";
class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.fullName = firstName + " " + lastName;
        this.rollNumber = id;
        this._class = 10; // because class is a readonly modifier
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(fullName) {
        this._fullName = fullName;
    }
    get rollNumber() {
        return this._id;
    }
    set rollNumber(id) {
        this._id = id;
    }
    greeting() {
        return "Hello, " + this.fullName + " : " + this.rollNumber + " : Class - " + this._class;
    }
}
window.onload = function addData() {
    let employee = new Employee("Chander", "Dhall", 123);
    let divStudents = document.createElement("div");
    divStudents.innerHTML = employee.greeting();
    document.body.appendChild(divStudents);
};
