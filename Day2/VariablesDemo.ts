// Scope
// var - it is functional scope
function sum(): void {
    var num1: number = 34;
    if (num1 === 34) {
        console.log(num1);
    }
}
sum();
// console.log(num1); // it is not possible
console.log("*** let ***");
// let - it is Block scope
function add(): void {
    let age: number = 567
    if (true) {
        let stdName: string = "TypeScript";
        var colName: string = "BGSIT";
    }
    console.log(colName); // access
    // console.log(stdName); // not access
    console.log(age); // it is accessed because it is not difined inside Block
}
add();

// Assignment at Declarttion
// var and let  - it is not mandotry
// const - it is mandatory
var value1: number;
value1 = 345;

let value2: string;
value2 = "Arun";

// const value3 : number; // it is not possible
const value3: number = 3.142;

console.log(value1);
console.log(value2);

// Re-Decalration
// var - Re-Decalration is possible
// let and const - Re-Decalration is  not possible

var product: string = "Lenovo";
var product: string = "HP";

let products: string = "Laptops";
// let products: string = "Laptops"; // it is not possible

// Re-assignment
// var and let is allowed reassignemet
// const is not allowed

var book: string = "Classmate";
book = "Arun's";

let house: string = "Groud Floor";
house = "First Floor";

console.log(book);
console.log(house);

//Hoisting
// var -  it is shows "Undifined"
// let and const -  it is shows "Not-Initialized"
// console.log(j);
var j: number = 23;
console.log(j);

// console.log(k);
let k: string = "kite";
console.log(k);