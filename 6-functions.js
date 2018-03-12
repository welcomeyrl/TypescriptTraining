"use strict";
function greetVisitor(firstName, lastName) {
    return "Hello, " + firstName + " " + lastName;
}
window.onload = function loadData() {
    let span = document.createElement("span");
    span.innerText = greetVisitor("Aditya", "Bhardwaj");
    document.body.appendChild(span);
};
