/* // Example1 - Named function with  no parameter and no return type
function greet(): void {
    console.log("Welcome to TypeScript...!!!");
}
greet(); // calling function */

/* // Example2 - Named function with parameters and return type
function addNumbers(x: number, y: number): number {
    return x + y;
}

let res: number = addNumbers(45, 48);
console.log(res);

console.log(addNumbers(56, 89));

// console.log(addNumbers(12,12,13)); // Compliler error:  Expected 2 arguments, but got 3.
// console.log(addNumbers(56)); // Compliler error: Expected 2 arguments, but got 1. */

/* // Example 3 - Named function with Rest Parameter
// Rest Parameters don't restrict the number values that you can pass to a function
function addNumbers(...nums: number[]) {
    let i: number;
    let sum: number = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("Sum of numbers:", sum);

}

addNumbers(522,58,45,96,4,58,89,63,58);
addNumbers(-522,-58,-45,96,-4,58,-89,63,58); */

/* // Example4: Named Function with Rest Parameter - Multiple Ways

function findElements(...elements: (number | string)[]): number {
    return elements.length;
}

console.log(findElements(67, "jdyhf", "fykgd", 55885, "fgd"));
console.log(findElements(67, 65, 8, 9, 56, 25, 14, 236));
console.log(findElements("Arun","Arjun","Kiran")); */

/* // Example 5 - Named function with optional parameter (?)

function getDetails(id: number, name: string, emailID?: string): void {
    console.log("ID:", id);
    console.log("Name:", name);
    console.log("EmailId:", emailID);
}

getDetails(101, "Arun", "arun.asg@gmail.com");
getDetails(102, "Arjun"); */

// Example 6 - Named Function with default parameter

// Parameters with default values must come after all required parameters.

function calucalateDiscount(price: number = 150, rate: number = 0.5): void {
    // return price * rate;
    console.log(price * rate);
}

let productPrice: number = 5845;
console.log("Discount of product is :", calucalateDiscount(productPrice));

function mathOperation(a: number, choice: string, b: number = 45): void {

    if (choice === "1") {
        let res: string = `Addition of ${a} and ${b} is ${a + b}`;
        console.log(res);
    }
    else if (choice === "2") {
        let res: string = `Subtraction of ${a} and ${b} is ${a - b}`;
        console.log(res);
    }
    else if (choice === "3") {
        let res: string = `Multiplication of ${a} and ${b} is ${a * b}`;
        console.log(res);
    }
    else if (choice === "4") {
        let res: string = `Division of ${a} and ${b} is ${a / b}`;
        console.log(res);
    }
    else {
        console.log("Invalid Choice........!!!")
    }
}

mathOperation(45, "4");
mathOperation(102, "2");
mathOperation(102, "5");
mathOperation(8, "3");
mathOperation(72, "4");

function defaultFun(a: number, choice: string, b: number = 45): void {
    let res: string = `Addition of ${a} and ${b} is ${a + b}`;
    console.log(res);
}
defaultFun(45, "1");