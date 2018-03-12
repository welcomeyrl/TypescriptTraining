"use strict";
function printAnimals(animals) {
    let stringAnimals = "Printing Animals using for .. in iterator: ";
    if (animals.length > 0) {
        // tslint:disable-next-line:forin
        for (let i in animals) {
            console.log(animals[i]);
            stringAnimals += animals[i] + " ";
        }
    }
    return stringAnimals;
}
function printCars(cars) {
    let stringAnimals = "Printing Cars using for .. of iterator: ";
    for (let i of cars) {
        console.log(i);
        stringAnimals += i + " ";
    }
    return stringAnimals;
}
window.onload = function loadData() {
    let animalList = ["Dog", "Cat", "Elephant"];
    let carList = ["Ferrari", "Kia", "Lexus"];
    let spanAnimals = document.createElement("span");
    spanAnimals.innerText = printAnimals(animalList);
    let spanCars = document.createElement("span");
    spanCars.innerText = printCars(carList);
    let breakLine = document.createElement("br");
    document.body.appendChild(spanAnimals);
    document.body.appendChild(breakLine);
    document.body.appendChild(spanCars);
};
