/* // ******************Check if a number is divisible by both 3 and 5********************

let checkNumDivThreeAndFive = (value: number): void => {
    if (value % 3 == 0 && value % 5 == 0) {
        console.log(value, " It is divisible by 3 and 5");
    }
    else {
        console.log(value, " It is NOT divisible by 3 and 5");
    }
}

checkNumDivThreeAndFive(30);
checkNumDivThreeAndFive(85);
checkNumDivThreeAndFive(74);
checkNumDivThreeAndFive(469);
 */

/* // ******************Check if a number is positive, negative, or zero.********************

let checkNumPosNegZero = (input: number): void => {
    if (input >= 1) {
        console.log(" Number is Positive........");
    }
    else if (input <= -1) {
        console.log(" Number is Negative........");
    }
    else {
        console.log(" Number is Zero........");
    }
}

checkNumPosNegZero(-58);
checkNumPosNegZero(78);
checkNumPosNegZero(0);
 */

// ******************Create a simple calculator using switch-case.********************

let simpleCalucalator = (num1: number, num2: number, operator: string): number | string => {
    switch (operator) {
        case '+': return num1 + num2;

        case '-': return num1 - num2;

        case '*': return num1 * num2;

        case '/':
            if (num2 === 0) {
                return "Error: Division by zero";

            }
            return num1 / num2;
        default: return "Error: Invalid Operator";
    }
}

console.log(simpleCalucalator(45, 89, '+'));
console.log(simpleCalucalator(89, 24, '-'));
console.log(simpleCalucalator(12, 8, '%'));
console.log(simpleCalucalator(78, 0, '/'));
console.log(simpleCalucalator(0, 15, '/'));
console.log(simpleCalucalator(16, 8, '*'));