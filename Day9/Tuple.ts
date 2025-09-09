// Tuple of array (Array of Tuple)
// single
let adminUser: [string, number] = ["Arun", 101];
adminUser.push("admin");

// Multiple
let username: [string, number][] = [["john", 101], ["smith", 258], ["Jocob", 101]];
console.log(username[0]);
console.log(username[0][1]);

/*
Array vs Tuple in TypeScript
1. Array

Definition: A collection of elements of the same type.

Length: Can be any length (variable).

Use case: When you want a list of items of the same type.

Syntax:

let numbers: number[] = [1, 2, 3];


Access: You access elements by index.

Example:

let fruits: string[] = ["apple", "banana", "cherry"];

2. Tuple

Definition: An array with fixed number of elements where each element can have a different type.

Length: Fixed length and fixed types for each position.

Use case: When you want to store a fixed set of values with different types.

Syntax:

let user: [string, number] = ["Alice", 30];


Access: Access elements by index, each index has a known type.

Example:

let user: [string, number] = ["Bob", 25];

🆚 Key Differences
| Feature           | Array                                  | Tuple                                     |
| ----------------- | -------------------------------------- | ----------------------------------------- |
| Types of elements | All elements must be the **same type** | Each element can have **different types** |
| Length            | Can vary (dynamic length)              | Fixed length (static)                     |
| Use case          | Lists of similar items                 | Fixed collections with different types    |
| Syntax example    | `string[]`, `number[]`                 | `[string, number]`                        |
| Access type info  | All elements have the same type        | Each element has its own type             |


Example illustrating both:
// Array of strings
let colors: string[] = ["red", "green", "blue"];
colors.push("yellow"); // OK, dynamic length

// Tuple of fixed types
let rgb: [number, number, number] = [255, 0, 0];
// rgb.push(128); // Error in strict mode, but allowed in loose TS sometimes — length should be fixed

console.log(colors[0]); // "red"
console.log(rgb[0]);    // 255

*/