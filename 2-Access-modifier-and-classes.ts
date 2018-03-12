class Employee {
    private _fullName: string;
    protected _id: number;
    readonly _class: number;

    public get fullName(): string{
       return this._fullName;
    }
    public set fullName(fullName: string){
        this._fullName = fullName;
    }

    public get rollNumber(): number{
       return this._id;
    }
    public set rollNumber(id: number){
        this._id = id;
    }

    constructor(public firstName, public lastName, public id) {
        this.fullName = firstName + " " + lastName;
        this.rollNumber = id;
        this._class = 10; // because class is a readonly modifier
    }

    public greeting(): string{
        return "Hello, " + this.fullName + " : " + this.rollNumber + " : Class - " + this._class;
    }
}

window.onload = function addData() {
let employee = new Employee("Chander", "Dhall", 123);


let divStudents = document.createElement("div");
divStudents.innerHTML = employee.greeting();

document.body.appendChild(divStudents);
};