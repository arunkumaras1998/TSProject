let age: number = 45;
console.log("Age:", age);

let stdName: string = "Arun";
let clgName: string = 'BGS';
let brchName: string = `Mech`; // Backtick

console.log("Hello", stdName, clgName, brchName);

let greeting: string = `Hello my name is ${stdName} and i studing at ${clgName} and my brnach name is ${brchName}`;
console.log(greeting);

// Union Type

let id: number | string | boolean;
console.log(id = 100);
console.log(id = "TypeScript");
console.log(id = true);


// Void Type

function show(): void {
    console.log(`Welcome to the world of TypeScript`);
}

show();
// Parameterized Function
function sumOfTwuNum(x: number, y: number): number {
    return x + y;
}

let result: number = sumOfTwuNum(45, 48);
console.log('Sum of two numbers', result);