console.log("*** Arithematic Operator ***");
let a: number = 10, b: number = 20;
console.log(a / b); // 0.5 - 20)10(0.5 = 000
console.log(a % b); // 0

console.log("*** Assignement Operator ***");

a += b // a = a+b;
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);
console.log(30 / 20);


console.log("*** Relational Operator ***");
let x: number = 20, y: number = 15;
console.log(x > y); // true
console.log(x >= y); // true
console.log(x < y); // false
console.log(x <= y); // false
console.log(x == y); // false
console.log(x != y); // true

console.log("*** Incremental Operator ***");

let result: number = 10;

console.log(result++);
console.log(result++);
console.log(result);

console.log("*** Ternary Operator ***");
let personAge: number = 28;

let result1: string = (personAge >= 18) ? "Adult" : "Minor";
console.log(result1);