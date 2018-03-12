interface IPerson{
    greetingsFunction: () => string;
}

class NewEmployee implements IPerson{
    _firstName: string;
    _lastName: string;
    _ssn: number;

    constructor(public firstName: string, public lastName: string, public ssn: number){
        this._firstName = firstName;
        this._lastName = lastName;
        this._ssn = ssn;
    }

    greetingsFunction(): string {
        console.log("Name: " + this._firstName + " " + this._lastName);
        console.log("Social Security: " + this._ssn);
        return "Hello, " + this._firstName + " " + this._lastName;
    }
}

let _newEmployee: NewEmployee = new NewEmployee("Aditya", "Bhardwaj", 12231452)
document.body.innerHTML = _newEmployee.greetingsFunction();
