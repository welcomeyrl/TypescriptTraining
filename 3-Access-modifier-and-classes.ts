class EmployeeSimple {

    constructor(public firstName: string, public lastName: string, public id: number) {

    }

    public greeting(): string {
        return "Hello, " + this.lastName + " , " + this.firstName;
    }
}

window.onload = function addData() {
    let employee = new EmployeeSimple("Chander", "Dhall", 1124);

    let divStudents = document.createElement("div");
    divStudents.innerHTML = employee.greeting();

    document.body.appendChild(divStudents);
};