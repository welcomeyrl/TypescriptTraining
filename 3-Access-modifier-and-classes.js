"use strict";
class EmployeeSimple {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
    greeting() {
        return "Hello, " + this.lastName + " , " + this.firstName;
    }
}
window.onload = function addData() {
    let employee = new EmployeeSimple("Chander", "Dhall", 1124);
    let divStudents = document.createElement("div");
    divStudents.innerHTML = employee.greeting();
    document.body.appendChild(divStudents);
};
