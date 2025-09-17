// ============ forEach(), map(), filter(), reduce(), some(), every() ================

// 1. forEach() - execute the function once for each array element
// It takes function as a parameter
// it doesn't return any value/array

// Syntax - array.forEach(function(currentValue, index, array);
// Note: index and array are optional

// Ex1 - get the index of all the fruits along with values
let fruitsList: string[] = ["apple", "banana", "guava", "orange", "pineapple"];

console.log("Printing index of fruits along with value using for loop...");

for (let i: number = 0; i < fruitsList.length; i++) {
    console.log(i, fruitsList[i]);
}

console.log("Printing index of fruits along with value using forEach()...");

fruitsList.forEach(function (element, index) {
    console.log(`Index: ${index} - Value: ${element}`);
})

// using arrow function

fruitsList.forEach((iterativeValue, index) => {
    console.log(index, iterativeValue);
})

// 2. map() - Create new array with the result of  calling the funtion on every element of an array
// It takes function as a parameter
// Retruns same number of elements that we have in the original array

// Syntax - array.map(function(currectValue, index, array){
// });

let numbers: number[] = [1, 2, 3, 4, 5];

//Ex1 - find the sqaure of each number in an array
// Note: no need to mention the type for the variable when we will return the value
// beacuse type inference will automitically assign the the type  
let sqaureNumber = numbers.map((element) => {
    return (element * element);
})

console.log("square numbers: ", sqaureNumber);

// Ex2 - double each number
let empId: number[] = [3, 5, 6, 2];

let doubleNumber = empId.map((getValue) => {
    return (getValue * 2);
})
console.log("Double Num: ", doubleNumber);

// Note: if you have single return statement inside the block than {} and return keyword is optional

let doubleNumber1 = empId.map((getValue) => (getValue * 2));

console.log("Double Num: ", doubleNumber1);

// 3. filter() - Create new array with all the elements that pass/satisfy the function
// it takes function as a parameter
// it return either same or fewer of elements compared to original array

// Syntax - array.filter(function(currentvalue, index, array));

// Ex1 - get the even numbers in an array

let values: number[] = [56, 32, 67, 12, 6, 7, 9, 3, 4, 14];

let evenNum = values.filter((num) => (num % 2 == 0));

console.log("Even Numbers: ", evenNum);

// get the numbers only greater than 50

let greaterThan50 = values.filter((num) => num >= 50);
console.log("Greater than 50 array:", greaterThan50);

// 4. reduce() - Applies a function on every element of an array and reduce a single value

// Syntax - array.reduce(function(accumalator, currentValue, index, array));

// accumalator - The accumalated value from the previous iteration
// currentvalue - The current element bieng proccessed

// Ex1: Set the total (sum) of all the elements in an array

/* let total: number = 0;

for (let i: number = 0; i < values.length; i++) {
    total = total + values[i];
}

console.log(total);


 */

let sum = values.reduce((total, ele) => total = total + ele);
// By default - total is zero

console.log("Sum of all values: ", sum);


// 5. some() - check if any element satisfy the condition
// Retrun true if any one element satisfy the condition else false

// Syntax - array.some(function(currentValue, index, array))

// Ex1 - check array contains negative value

let hasNegative = numbers.some((ele) => ele < 0);
console.log("Does array contains negative?", hasNegative);

// check positive 
let hasPositive = numbers.some((ele) => ele > 0);
console.log("Does array contains positive?", hasPositive);

// 6. every() - Checks if all elements satisfy a condition
// returns true if all elements pass the condition, else false

// Syntax - array.every(function(currentValue, index, array))

let definedNumber: number[] = [45, 67, 12, 76, 89, 14, 16]

// Ex1 - check an array all the elements are even

let allEven = definedNumber.every((num) => num % 2 == 0);
console.log("are all the numbers are even?", allEven);

let allGreaterThanTen = definedNumber.every((num) => num > 10);
console.log("are all the numbers are allGreaterThanTen?", allGreaterThanTen);