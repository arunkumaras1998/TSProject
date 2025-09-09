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