"use strict";
function greetVisitor(audience) {
    return "Hello, " + audience;
}
window.onload = function loadData() {
    let span = document.createElement("span");
    span.innerText = greetVisitor("Dallas");
    document.body.appendChild(span);
};
