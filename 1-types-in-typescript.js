"use strict";
/*
a. Boolean
b. Number
c. String
d. let
e. Array
f. Enum
g. Any
h. Void
*/
// boolean
let isDone = false;
console.log(isDone);
// numbers
let decimal = 6.5;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
// string
let fullName = "Chander Dhall";
let sentence = `Hello, my name is ${fullName}`;
// array
let list = [1, 2, 3];
let listAdditional = [1, 2, 3]; // second way to initialize a list
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Green;
console.log(c);
// any
let notSure = 4;
notSure = "May be, it's  a string.";
// void
let unusable = undefined;
let unusable1 = null;
window.onload = function () {
    console.log(fullName);
    console.log(sentence);
    console.log(list);
    console.log(notSure);
};
