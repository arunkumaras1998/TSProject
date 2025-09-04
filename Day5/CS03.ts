// Check the number is positive and even
let checkNum: number = 33;
if (checkNum >= 0) {
    console.log("It is a Positive Number");
    if (checkNum % 2 == 0) {
        console.log("it is a even Number");
    }
    else {
        console.log("it is Odd number");
    }
}
else {
    console.log("it is a negative Number");
}

// Largest of three numbers

let a: number = 45, b: number = 76, c: number = 89;

if(a>b){
    if(a>c){
        console.log("a is greater")
    }
    else{
        console.log("c is greater");
    }
}
else if (b>c){
    console.log("b is greater");
}
else{
    console.log("c is greater last");
}