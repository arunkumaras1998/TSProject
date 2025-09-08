// functions without name
/* Syntax
Keyword varibleName = function ():type {
// statements
}*/
// with parameter and with return type
let laptopPrices = function (prod1: string, prod2: string): string {
    return `The two product is ${prod1} and ${prod2}`;
}

console.log(laptopPrices("HP", "DELL"));

// Rest Parameter
let purchaseVegetables = function (...vegies: string[]): void {
    let i: number;
    for (i = 0; i < vegies.length; i++) {
        let vegiee: string = vegies[i].toLowerCase();
        switch (vegiee) {
            case "banana": console.log("Purchased Item:", vegiee);
                break;
            case "carrot": console.log("Purchased Item:", vegiee);
                break;
            case "beans": console.log("Purchased Item:", vegiee);
                break;
            case "papaya": console.log("Purchased Item:", vegiee);
                break;
            default: console.log(vegiee, " Not in My List");
        }
    }

}

purchaseVegetables("PooTaTo", "GreeN ChillY", "PapaYA", "BeAnS");

// Arrow Function - with out using "function" keyword

let bookLists = (...books: (number | string | boolean)[]): string => {
    return `length of the given array ${books.length}`;
}
console.log(bookLists("Type", "Script", 458, false, "Hmm", true, 78));

// Arrow function - with optional

let getDetails = (stdName: string, colgName: string, branchName?: string): string => {
    if (branchName != undefined) {
        return `My name is ${stdName}, college name is ${colgName}, branch name is ${branchName}`;
    } else {
        return `My name is ${stdName}, college name is ${colgName}, branch name is MECH / CS / EC / CIVIL`;
    }

}

console.log(getDetails("Arun", "BGSIT", "MECH"));
console.log(getDetails("Keerthi", "BGSIT"));

// Arrow function - with default

let getItems = (lapName: string, LapBrand?: string, lapRAM: string = "16GB"): string => {
    if (LapBrand != undefined) {
        return `Laptop name is ${lapName}, Laptop brand is ${LapBrand}, Laptop Ram is ${lapRAM}`;
    } else {
        return `Laptop name is ${lapName}, Laptop brand is HP / Lenevo / DELL, Laptop Ram is ${lapRAM}`;
    }

}

console.log(getItems("DELL Dust 450"));
console.log(getItems("Lenevo Thinkpad 450", "Lenevo"));