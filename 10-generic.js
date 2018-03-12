"use strict";
// this code contains the Generics and their declarations.
class GenericProduct {
    productInformation(product) {
        console.log(product);
        alert(product);
    }
}
window.onload = function () {
    let stationary = new GenericProduct();
    stationary.cost = 30;
    stationary.productID = "D2267BA";
    stationary.productTag = "NoteBook";
    stationary.manufacturingDate = "02/20/2017";
    stationary.productInformation("Product - " + stationary.productID +
        " : " + stationary.productTag + " is priced $" + stationary.cost.toString());
};
