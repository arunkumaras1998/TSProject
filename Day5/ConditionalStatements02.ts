// Week Days
let weekDay: number = 7;
switch (weekDay) {
    case 1: console.log("Sunday...."); break;
    case 2: console.log("Monday...."); break;
    case 3: console.log("Tuesday...."); break;
    case 4: console.log("Wednesday...."); break;
    case 5: console.log("Thursday...."); break;
    case 6: console.log("Friday...."); break;
    case 7: console.log("Saturday...."); break;
    default: console.log("Invalid Day....");
}

let monthNum: number = 8;

switch (monthNum) {
    case 1: console.log(" it is January...");
        break;
    case 2: console.log(" it is February...");
        break;
    case 3: console.log(" it is March...");
        break;
    case 4: console.log(" it is April...");
        break;
    case 5: console.log(" it is May...");
        break;
    case 6: console.log(" it is June...");
        break;
    case 7: console.log(" it is July...");
        break;
    case 8: console.log(" it is August...");
        break;
    case 9: console.log(" it is September...");
        break;
    case 10: console.log(" it is October...");
        break;
    case 11: console.log(" it is November...");
        break;
    case 12: console.log(" it is Decemeber...");
        break;
    default: console.log(" Invalid Month.....");

}

// Arithematic Operation
let operation: string = "adD";
operation = operation.toLowerCase();
let num1: number = 20, num2: number = 20;
switch (operation) {
    case "add": console.log("Addition of two numbers", num1 + num2);
        break;
    case "sub": console.log("Subtraction of two numbers", num1 - num2);
        break;
    case "mul": console.log("Mutiple of two numbers", num1 * num2);
        break;
    case "div": console.log("Division of two numbers", num1 / num2);
        break;
    case "mod": console.log("Modulus of two numbers", num1 % num2);
        break;
    default: console.log("Invlaid Operation...");
}