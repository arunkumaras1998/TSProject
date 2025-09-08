//Write a function that takes a parameter of type string | number and logs the type of the parameter.

function logType(value: string | number) {
    if (typeof value === "string") {
        console.log("The type is string.");
    }
    else if (typeof value === "number") {
        console.log("The type is number.");
    }
    else {
        console.log("Invalid Type.");
    }
}
logType(1);
logType("SSM");

// Note: typeof() return string

//Write a program that calculates the factorial of a number using a loop
console.log("**** factorial of a number ****")
// 1st Approch
let value: number = 5;

let facNum: number = 1;

for (let i: number = value; i >= 2; i--) {
    facNum = facNum * i;
}

console.log("Factorial of", value, "is", facNum);

// 2nd approach - using function

function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not difined for negative number...!!!");

    }

    let result: number = 1;
    for (let i: number = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));