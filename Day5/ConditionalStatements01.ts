// if condition
let age: number = 45;
if (age >= 30) {
    console.log("Age is passed...");
}

// if else - find the number is even or odd
let num: number = 45;
if (num % 2 == 0) {
    console.log(num, " it is even Number");
}
else {
    console.log(num, "it is odd number");
}

// if else if - Login Application
let userName: string = "Arun", passed: string = "12345";

if (userName === "Arun") {
    console.log("User Name is Correct...")
    if (passed === "1234") {
        console.log("Password is correct...");
        console.log("Login is successful...");

    }
    else {
        console.log("Password is incorrect...Please enter valid password");
    }
}
else {
    console.log("UserName is incorrect...Please enter valid username");
}

// Marks card Grade
let marks: number = 34;
if (marks >= 91 && marks <= 100) {
    console.log("Garde A+");
}
else if (marks >= 81 && marks <= 90) {
    console.log("Garde A");
}
else if (marks >= 71 && marks <= 80) {
    console.log("Garde B");
}
else if (marks >= 61 && marks <= 70) {
    console.log("Garde c");
}
else if (marks >= 51 && marks <= 60) {
    console.log("Garde d");
}
else {
    console.log("Marks is below 50 and you have Failed!!!!........");
}

// Browser Selection

let browserName: string = "CHRome";
browserName = browserName.toLowerCase();
if (browserName === "chrome") {
    console.log("Accessing to chrome browser....");
}
else if (browserName === "edge") {
    console.log("Accessing to edge browser....");
}
else if (browserName === "firefox") {
    console.log("Accessing to firefox browser....");
}
else if (browserName === "safari") {
    console.log("Accessing to safari browser....");
}
else {
    console.log("Browser is invalid...")
}