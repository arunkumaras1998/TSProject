// ********** prints a list of names in alphabetical order using a do...while loop ***********

// Aproach 1 - with In-built function
let printNamesAlphabetically = (names: string[]): void => {
    names.sort();
    let i: number = 0;
    do {
        console.log(names[i]);
        i++;
    } while (i < names.length);
}
