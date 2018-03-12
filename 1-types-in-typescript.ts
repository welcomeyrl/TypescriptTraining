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
let isDone: boolean = false;
console.log(isDone);

// numbers
let decimal: number = 6.5;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

// string
let fullName: string = "Chander Dhall";
let sentence: string = `Hello, my name is ${ fullName }`;

// array
let list: number[] = [1, 2, 3];
let listAdditional: Array<number> = [1, 2, 3]; // second way to initialize a list

// enum
enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
console.log(c);

// any
let notSure: any = 4;
notSure = "May be, it's  a string.";

// void
let unusable: void = undefined;
let unusable1: void = null;

window.onload = function(){
console.log(fullName);
console.log(sentence);
console.log(list);
console.log(notSure);
}



