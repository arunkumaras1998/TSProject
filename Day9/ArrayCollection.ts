/*
    Arrays in typescript
    ---------------------
    - An array is a special type of variable that stores multiple values.
    - The values can be of the same data type or different data types.
    - Arrays are declared using `[]` or the generic `<Array<T>>` type.
    - Indexing starts from 0.
    - Arrays are an ordered collection of elements.
*/

// Approach 1 - Using literal

let names: string[] = []; // Declaration - empty Array

// Intialization / Assignments
names[0] = "John";
names[1] = "Peter";
names[2] = "Smith";
names[3] = "Jocob";

// Declaration + Intialization
let namesList: string[] = ["John", "Smith", "Jocob", "Peter"];

console.log(namesList);
console.log(names);
console.log(namesList[3]);
console.log(names[0]);

// Approach 2: Using the generic Array<T> type
let empNames: Array<string> = ["John", "Peter", "Smith", "Tim"];
let empID: Array<number> = [101, 102, 103, 104];
let data: Array<string | number> = ["John", "Smith", 101, "David", 458];
let mixedData: Array<any> = ["Jocob", false, 458, 478.25];

// Example 1: Iterating over an Array using a traditional for loop
console.log("Size of an Array: ", empNames.length); // 4 (How many values are stored)

console.log("Employees Name..........");

for (let i: number = 0; i <= empNames.length - 1; i++) { // i<empNames.length
    console.log(empNames[i]); // i is representing an index
}

// Example 2 : Iterating over an Array using a "for...in" loop (Indexe based iteration)
console.log("Employeee ID's.....");
for (let key in empID) {
    console.log(empID[key]);
}

// Example 2 : Iterating over an Array using a "for...of" loop (Value based iteration)
console.log("Employeee mixedData.....");

for (let key of mixedData) {
    console.log(key);
}

// Example 4 : Passign an Array to the function

// Search an element in an array using function

let serachElement = (ele: number, arr: number[]): boolean => {
    for (let key in arr) {
        if (arr[key] === ele) {
            return true;
        }
    }
    return false;
}

let elemList: number[] = [15, 58, 63, 47, 59, 23];
console.log("Element is Present? ", serachElement(45, elemList));
console.log("Element is Present? ", serachElement(59, elemList));


// Example5 - A function takes an Array and returns an Array

// get the list of student names and return in an UpperCase

let capitalizeWords = function (nameList: string[]): string[] {
    let result: string[] = [];
    for (let key in nameList) {
        result[key] = nameList[key].toUpperCase();
    }
    return result;
}

let stdNames: string[] = ["arjun", "sachin", "kumar", "aryan"];
console.log(capitalizeWords(stdNames));

/*
🔁 for...in
✅ Use it to iterate over the keys (property names) of an object.
Syntax:
for (const key in object) {
  // key is a string (or number for arrays), value is object[key]
}

Example:
const person = { name: "Alice", age: 30 };

for (const key in person) {
  console.log(key);           // "name", "age"
  console.log(person[key]);   // "Alice", 30
}

⚠️ Notes:

key is a string (even for array indices).

Best suited for objects.

Not recommended for arrays — it iterates over enumerable properties, including custom ones.

🔁 for...of
✅ Use it to iterate over the values of an iterable (like arrays, strings, Maps, Sets, etc.).
Syntax:
for (const value of iterable) {
  // value is the actual item
}

Example:
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);  // "apple", "banana", "cherry"
}

⚠️ Notes:

Only works on iterables (i.e., objects with a [Symbol.iterator] method).

Doesn’t work on plain objects unless you convert them (e.g., with Object.entries()).

🆚 Summary Table
| Feature          | `for...in`                    | `for...of`                        |
| ---------------- | ----------------------------- | --------------------------------- |
| Iterates over    | Keys (property names)         | Values of an iterable             |
| Works on         | Objects, Arrays (not ideal)   | Arrays, Strings, Maps, Sets, etc. |
| Key/Value        | Key (string)                  | Value (any type)                  |
| Suitable for     | Enumerating object properties | Looping through iterable elements |
| Use with objects | ✅ Yes                         | ❌ No (unless converted)           |
| Use with arrays  | ⚠️ Not recommended            | ✅ Yes                             |


🚫 Don't do this:
const arr = ["a", "b", "c"];

for (const i in arr) {
  console.log(i);       // "0", "1", "2" (indices, as strings)
  console.log(arr[i]);  // "a", "b", "c"
}

for (const val of arr) {
  console.log(val);     // "a", "b", "c"
}


If you're working with objects, use for...in.
If you're working with arrays or iterables, use for...of.

Let me know if you want examples with Maps, Sets, or custom iterables.
*/