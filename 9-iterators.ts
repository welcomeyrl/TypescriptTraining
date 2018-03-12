function printAnimals(animals: string[]): string {
    let stringAnimals: string = "Printing Animals using for .. in iterator: ";

    if (animals.length > 0) {
        // tslint:disable-next-line:forin
        for (let i in animals) {
            console.log(animals[i]);
            stringAnimals += animals[i] + " ";
        }
    }
    return stringAnimals;
}

function printCars(cars: string[]): string{
    let stringAnimals: string = "Printing Cars using for .. of iterator: ";
    for (let i of cars) {
        console.log(i);
        stringAnimals += i + " ";
    }
    return stringAnimals;
}

window.onload = function loadData(){
let animalList: string[] = ["Dog", "Cat", "Elephant"];
let carList: string[] = ["Ferrari", "Kia", "Lexus"];

let spanAnimals: HTMLSpanElement = document.createElement("span");
spanAnimals.innerText = printAnimals(animalList);

let spanCars: HTMLSpanElement = document.createElement("span");
spanCars.innerText = printCars(carList);

let breakLine: HTMLBRElement = document.createElement("br");

document.body.appendChild(spanAnimals);
document.body.appendChild(breakLine);
document.body.appendChild(spanCars);
}
