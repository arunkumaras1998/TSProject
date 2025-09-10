// Array Methods

let numbers: number[] = [45, 48, 21, 12, 18, 78, 59];

let fruits: string[] = ["banana", "cherry", "mango", "guava"];

// length - it is Array attribute (it is not a method)

console.log("Size of numbes array:", numbers.length);
console.log("Size of fruits array:", fruits.length);

// 1. Push() - adds single/multiple elements to end of an array
// Syntax - array.push(element1,....,elementN);

fruits.push("papaya", "apple");
console.log("after push(): ", fruits); // [ 'banana', 'cherry', 'mango', 'guava', 'papaya', 'apple' ]

// 2. pop() - remove last element from an array
// Syntax - array.pop();
console.log("Before Pop(): ", numbers); // [  45, 48, 21, 12,  18, 78, 59]
let lastNum = numbers.pop();
console.log("After Pop(): ", numbers); // [ 45, 48, 21, 12, 18, 78 ]
console.log("Removed Number is ", lastNum);

// 3. shift() - remove first element from an array
// Syntax - array.shift();

console.log("Before shift(): ", fruits);
let firstFruit = fruits.shift();
console.log("after shift(): ", fruits); // [ 'cherry', 'mango', 'guava', 'papaya', 'apple' ]
console.log("Removed fruit is ", firstFruit);

// 4. unshift() - adds single/multiple elements to the begining of an array
// Syntax - array.unshift(element1,...,elementN);
console.log("Before unshift(): ", numbers);
let value = numbers.unshift(78, 59, 54);
console.log("after unshift(): ", numbers);
console.log("length after unshift ", value);

// 5. concat() - combined two or more arrays of same type
// Syntax - array.concat(array1,...arrayN);

let combineArray = fruits.concat(["Tomoto", "Pomogranate"], ["Orange"]);
console.log("combined array: ", combineArray);

// 6. slice() - extract a section of an array
// starting index start from zero
// Ending index will be exclusive. Ex. if 3 will be ending index. It will consider 2 (3-1 = 2)
// Syntax - array.slice(start, end);
// console.log("Before Extracted Array: ",fruits);
// let extractedArray = fruits.slice(1, 4);
// console.log("Extracted Array: ",extractedArray);

console.log("Before Extracted Array: ", fruits);
let extractedArray = fruits.slice(1, 5);
console.log("Extracted Array: ", extractedArray);

// 7. splice() - add/remove elements from an aray (From everywhere)
// Sytax - array.splice(start, deleteCount, addItem1,.....,AddItemN);

console.log("Current elements in numbers array: ", numbers);
let removeElements = numbers.splice(1, 3);
console.log("After splice(1,2): ", numbers);
console.log("Removed Elemets: ", removeElements);

console.log("Current elements in fruits array: ", fruits);
fruits.splice(0, 3, "MANGO");
console.log('splice(0, 3, "MANGO")', fruits);

// 8. indexof() - Finds the index of an element, if element not found than return -1
// Syntax - array.indexof(searchelement) or array.indexof(searchelement, starting index);

console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("Guva"));
console.log(numbers.indexOf(12, 2));

// 9. includes() - check if an element exists
console.log("fruits array: ", fruits);
console.log(fruits.includes('apple'));
console.log(numbers.includes(78, 3));
console.log(numbers.includes(78));
console.log(numbers.includes(102, 3));

// 10. converts array to string

let fruitsString = fruits.toString();
console.log(fruits); // [ 'MANGO', 'papaya', 'apple' ]
console.log(fruitsString); // MANGO,papaya,apple
