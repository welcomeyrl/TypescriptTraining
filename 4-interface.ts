interface IPerson{
    appendGreeting: () => string;
}

class Consultant implements IPerson{
    _firstName: string;
    _lastName: string;
    _ssn: number;

    constructor(public firstName: string, public lastName: string, public ssn: number){
        this._firstName = firstName;
        this._lastName = lastName;
        this._ssn = ssn;
    }

    appendGreeting(): string {
        console.log("Name: " + this._firstName + " " + this._lastName);
        console.log("Social Security: " + this._ssn);
        return "Hello, " + this._firstName + " " + this._lastName;
    }
}

window.onload = function addData() {
    let consultant: Consultant = new Consultant("Chander", "Dhall", 123)
    document.body.innerHTML = consultant.appendGreeting();
};

