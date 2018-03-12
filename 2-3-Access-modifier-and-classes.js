"use strict";
class Employee {
    constructor(firstName, lastName, rollNum) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNum = rollNum;
        this.fullName = firstName + " " + lastName;
        this.rollNumber = rollNum;
        this._class = 10; // because class is a readonly modifier
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        this._fullName = newName;
    }
    get rollNumber() {
        return this._rollNumber;
    }
    set rollNumber(newRollNumber) {
        this._rollNumber = newRollNumber;
    }
    hello() {
        return "Hello, " + this.fullName + " : " + this.rollNumber + " : Class - " + this._class;
    }
}
window.onload = function addData() {
    let employee = new Employee("Chander", "Dhall", 090131027);
    alert(employee.hello());
    let divStudents = document.createElement("div");
    divStudents.innerHTML = employee.hello();
    document.body.appendChild(divStudents);
};
