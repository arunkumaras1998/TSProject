/*
String - it is a text value or combination of characters
1. Single Quote - string litreral ('Single Quote')
2. Double Quote - string literalv("Double Quote")
3. Backtick (``) - String template - when we try to use a string variable inside another string value ${variable}
*/

// index in string starts with 0

let str1: string = 'This is string with single quote';
let str2: string = "This is string with double quote";
let str3: string = `This is string with backtick`;

console.log(str1);
console.log(str2);
console.log(str3);

// String Methods

let str: string = 'Hello, TypeScript';
// 1. length - find the length of the string (How many numbers of characters)
console.log("Length of the string:", str.length);

// 2. ToUppercase() and ToLowerCase()

console.log("Upper Case:", str.toUpperCase());
console.log("Lower Case:", str.toLocaleLowerCase());

// 3. chatAt(index) and indexOf(string)

console.log("Character of 4th index:", str.charAt(4));
console.log("Index of Type:", str.indexOf('Type'));

// 4. substring(startingIndex, endingIndex);
// endingIndex is exclusive
// Hello, TypeScript

console.log("sub string :", str.substring(0, 5)); // Hello

// 5. includes() returns true or false (boolean)
// string value is case sensitive

console.log(str.includes('yjssg')); // false
console.log(str.includes(',')); // true
console.log(str.includes("Script")) // true
console.log(str.includes("Hello,")) //true

// 6. startwith() and endwith() - return a boolean value (true/false);

let stringValue: string = "I Love, TypeScript!";

console.log("start with: ", stringValue.startsWith('I ')) // true
console.log("End with:", stringValue.endsWith('!')); // true
console.log("start with: ", stringValue.startsWith(`Love`)); // false

// 7. replace() 

console.log("Replaced String: ", stringValue.replace("TypeScript", "World"));
console.log("Replaced String: ", stringValue.replace("Love", "World"));

// 8. split() - Breake the string into multiple parts base don the delimeter, returns an array

let splitArray = stringValue.split(",");
console.log("Splited Array:", splitArray[0]);
console.log("Splited Array:", splitArray[1]);

// 9. trim(), trimStart(), trimEnd()

let myString: string = "      Welcome to TypeScript    ";

console.log("Original String: ", myString);
console.log("Trimmed String both side:", myString.trim());
console.log("Timmed string end:", myString.trimEnd());
console.log("Timmed string start:", myString.trimStart());

// 10. concat() - combine strings into one

let string1: string = "TypeScript!";
let string2: string = " for PlayWright";

console.log("After Concatenation:", string1.concat(string2)); // TypeScript for PlayWright
console.log("After Concatenation:", string1 + string2) // this is alternative but not recommended

// concept of strring imutability (imutable - cannot change original)

let num: number = 67;

let res: number = num + 5;

console.log(res);
console.log(num); // 67 - it is not changed

let data: string = "Welcome";

let modifiedString: string = data.concat(" To TypeScript");

console.log(data);
console.log(modifiedString);
