let lastName: string = "Perera";

function printName() {
    let firstName: string = "Poojani";

    if (true) {
        let middleName = "Sathsara";

        console.log("Print inside if block");
        console.log(firstName);
        console.log(middleName);
        console.log(lastName);
    }

    console.log("Print inside the function");
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

console.log("Print inside the function");
console.log(firstName); // compile error
console.log(middleName); // compile error
console.log(lastName);