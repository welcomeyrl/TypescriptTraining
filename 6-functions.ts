function greetVisitor(audience: string): string{
    return "Hello, " + audience;
}

window.onload = function loadData(): void {
let span: HTMLSpanElement = document.createElement("span");
span.innerText = greetVisitor("Dallas");

document.body.appendChild(span);
};
