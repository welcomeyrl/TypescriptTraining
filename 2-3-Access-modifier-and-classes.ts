class Employee {
    private _fullName: string;
    protected _rollNumber: number;
    readonly _class: number;

    public get fullName(): string{
       return this._fullName;
    }
    public set fullName(newName: string){
        this._fullName = newName;
    }

    public get rollNumber(): number{
       return this._rollNumber;
    }
    public set rollNumber(newRollNumber: number){
        this._rollNumber = newRollNumber;
    }

    constructor(public firstName, public lastName, public rollNum) {
        this.fullName = firstName + " " + lastName;
        this.rollNumber = rollNum;
        this._class = 10; // because class is a readonly modifier
    }

    public hello(): string{
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