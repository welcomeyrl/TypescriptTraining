function greetVisitor(firstName: string, lastName: string): string{
    return "Hello, " + firstName + " " + lastName;
}

window.onload = function loadData(): void {
let span: HTMLSpanElement = document.createElement("span");
span.innerText = greetVisitor("Aditya", "Bhardwaj");

document.body.appendChild(span);
};
