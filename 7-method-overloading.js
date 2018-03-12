"use strict";
function areaFunction(side1, side2, side3) {
    if (side2 && side3) {
        let S = (side1 + side2 + side3) / 2;
        return Math.sqrt(S * (S - side1) * (S - side2) * (S - side3)); // area of Triangle using Heron's formula
    }
    else if (side2) {
        return side1 * side2; // area of Rectangle
    }
    else {
        return side1 * side1; // area of square
    }
}
let areaRectangle = areaFunction(10, 5);
let span = document.createElement("span");
span.innerText = "Area of Rectangle with Height 10 and Width 5 is: " + areaRectangle.toString();
document.body.appendChild(span);
