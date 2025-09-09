// ********** prints a list of names in alphabetical order using a do...while loop ***********

/* // Approach 1 - with In-built function
let printNamesAlphabetically = (...names: string[]): void => {
    names.sort();
    let i: number = 0;
    do {
        console.log(names[i]);
        i++;
    } while (i < names.length);
}

printNamesAlphabetically("Tim", "Raja", "Arjun", "aryan", "kumar", "John", "Peter", "jocob");
 */
// Approach 2 - without in-built

let printNamesAsen = (...getNames: string[]): void => {
    let n: number = getNames.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (getNames[i].toLowerCase() > getNames[i + 1].toLowerCase()) {
                let temp = getNames[i];
                getNames[i] = getNames[i + 1];
                getNames[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    for (let name of getNames) {
        console.log(name);
    }
}
printNamesAsen("Arjun", "Peter", "David", "Tim");