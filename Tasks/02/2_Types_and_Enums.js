"use strict";
/*

████████╗██╗░░░██╗██████╗░███████╗░██████╗  ░█████╗░███╗░░██╗██████╗░  ███████╗███╗░░██╗██╗░░░██╗███╗░░░███╗░██████╗
╚══██╔══╝╚██╗░██╔╝██╔══██╗██╔════╝██╔════╝  ██╔══██╗████╗░██║██╔══██╗  ██╔════╝████╗░██║██║░░░██║████╗░████║██╔════╝
░░░██║░░░░╚████╔╝░██████╔╝█████╗░░╚█████╗░  ███████║██╔██╗██║██║░░██║  █████╗░░██╔██╗██║██║░░░██║██╔████╔██║╚█████╗░
░░░██║░░░░░╚██╔╝░░██╔═══╝░██╔══╝░░░╚═══██╗  ██╔══██║██║╚████║██║░░██║  ██╔══╝░░██║╚████║██║░░░██║██║╚██╔╝██║░╚═══██╗
░░░██║░░░░░░██║░░░██║░░░░░███████╗██████╔╝  ██║░░██║██║░╚███║██████╔╝  ███████╗██║░╚███║╚██████╔╝██║░╚═╝░██║██████╔╝
░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░╚══════╝╚═════╝░  ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░  ╚══════╝╚═╝░░╚══╝░╚═════╝░╚═╝░░░░░╚═╝╚═════╝░

    In this section you will learn:
- what are constants and variables
- why TypeScript is a strongly typed language
- what data types are available in TypeScript and how to work with them
- how to check the type of a variable
- what are Enums and Tuples

    Carefully study the relevant material of official documentation and proceed to practical tasks:
--> https://www.typescriptlang.org/docs/handbook/2/basic-types.html<--
--> https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases <--
*/
// BASIC LEVEL
/*
        Task 1
    ~ Declare variables of 11 different types and assign values to them.
    ~ List types whose values can be set to other types without causing a compiler error. Is it always possible? What setting affects this?
*/
console.log("TASK 1");
// 1
const testNumber = 1;
// 2
const testString = "test string";
// 3
const testBool = true;
// 4
const arrayOfNumbers = [1, 2, 3];
// 5
const arrayOfStrings = ["t", "e", "s", "t"];
// 6
const arrayOfBools = [true, false, true];
// 7
const someValue = "test value";
// 8
const person = { name: "Test User", age: 40 };
// 9
const listOfPersons = [
    { name: "Test User", age: 22 },
    { name: "John", age: 28 },
];
// 10
const personWithFood = {
    name: "Bob",
    age: 22,
    favouriteFood: "fried_meat",
};
// 11
const listOfPersonsWithFood = [
    { name: "Josh", age: 33, favouriteFood: "goulash" },
    { name: "Bob", age: 21, favouriteFood: "pancake" },
];
const test = (x, y) => x;
// With the 'any' type, we can assign any type of value to a variable (or pass data to a method like an argument).
// For example:
// let data: any = "some data";
// data = 1;
// data = true;
// If "noImplicitAny" is set to true in the tsconfig.json file, then the compiler won't use 'any' as a type, but we can use it (explicitly, like in the example above)
/*
        Task 2
    ~ Write a function that takes two numbers as arguments and returns their sum.
    ~ Write a function argument type check and, if a string value is passed, display the error "Incorrect input!"
*/
// 1
const sum = (x, y) => x + y;
// 2
const sum2 = (x, y) => {
    if (typeof x === "string" || typeof y === "string") {
        throw new Error("Incorrect input!");
    }
    return x + y;
};
console.log("\nTASK 2");
console.log(sum(1, 2));
console.log(sum2(1, 2));
/*
        Task 3
    ~ Declare a variable of type Any and set its value to 'example'
    ~ Write a function to check that A is not one of the following list null, undefined, NaN, '', 0, false
*/
// 1
let value = "example";
// 2
const isValueIn = (A) => {
    const list = [null, undefined, NaN, "", 0, false];
    if (list.includes(A)) {
        return true;
    }
    return false;
};
console.log("\nTASK 3");
console.log(isValueIn(null));
/*
        Task 4
    ~ Write a combine function with two arguments of type number OR string.
    ~ The third argument is a parameter with limited values 'as-number' OR 'as-string'.
    ~ When set to 'as-number', output the sum of numbers, when set to 'as-string', concatenate strings.
*/
const combine = (x, y, numberOrString) => {
    if (numberOrString === "as-number") {
        return x + y;
    }
    return x + y;
};
console.log("\nTASK 4");
console.log(combine(1, 2, "as-number"));
console.log(combine("a", "b", "as-string"));
/*
        Task 5
    ~ Declare a constant of type Tuple that stores the code (404) and the text of the error ("Error!").
    ~ Copy the function from Task 3 and change it so that if the condition is not met, the error code and text will be displayed.
*/
var Task5;
(function (Task5) {
    console.log("\nTASK 5");
    const errorTuple = [404, "Error!"];
    const isValueIn = (A) => {
        const list = [null, undefined, NaN, "", 0, false];
        if (list.includes(A)) {
            return `The value '${A}' is in the list.`;
        }
        return `Error code: ${errorTuple[0]}, error message: ${errorTuple[1]}`;
    };
    console.log(isValueIn("a"));
    console.log(isValueIn(""));
})(Task5 || (Task5 = {}));
/*
        Task 6
    ~ Create a person object with properties: name, age, gender, role.
    ~ For the Role property use enum (Admin, Author, Moderator).
    ~ Give the person object the appropriate type.
    ~ Print the name of the property and its value to the console. Each property on a new line.
*/
var Task6;
(function (Task6) {
    let RoleType;
    (function (RoleType) {
        RoleType[RoleType["Admin"] = 0] = "Admin";
        RoleType[RoleType["Author"] = 1] = "Author";
        RoleType[RoleType["Moderator"] = 2] = "Moderator";
    })(RoleType || (RoleType = {}));
    const person = {
        name: "Bob",
        age: 33,
        gender: "male",
        role: RoleType.Admin,
    };
    const printPerson = (person) => {
        for (let key in person) {
            console.log(`${key}: ${person[key]}`);
        }
    };
    console.log("\nTASK 6");
    printPerson(person);
})(Task6 || (Task6 = {}));
/*
        Task 7
    ~ Assign text values to the Role enumeration from the previous task.
    ~ Create several objects similar to the person object from Task 6 with different values for the Role field.
    ~ Write a function that takes an array of objects and prints the message "My name is {name}. I am {role}" to the console for each object.

*/
var Task7;
(function (Task7) {
    let RoleType;
    (function (RoleType) {
        RoleType["Admin"] = "admin";
        RoleType["Author"] = "author";
        RoleType["Moderator"] = "moderator";
    })(RoleType || (RoleType = {}));
    const person1 = {
        name: "Bob",
        age: 33,
        gender: "male",
        role: RoleType.Admin,
    };
    const person2 = {
        name: "Alice",
        age: 22,
        gender: "female",
        role: RoleType.Moderator,
    };
    const person3 = {
        name: "Frank",
        age: 53,
        gender: "male",
        role: RoleType.Author,
    };
    const printPersons = (personArray) => {
        personArray.map((person) => console.log(`My name is ${person.name}. I am ${person.role}`));
    };
    console.log("\nTASK 7");
    printPersons([person1, person2, person3]);
})(Task7 || (Task7 = {}));
/*
        Task 8
    ~ Use the function from Task 2 to add two numbers.
    ~ Write a function addAndHandle that will return the result of the calculation as a Callback.
    ~ Explicitly specify return type for functions
    ~ The final function call should look like this:
        addAndHandle(10, 20, (result) => {
            console.log(result)
        })

*/
var Task8;
(function (Task8) {
    console.log("\nTASK 8");
    const addAndHandle = (x, y, callback) => {
        const result = sum(x, y);
        callback(result);
    };
    addAndHandle(10, 20, (result) => {
        console.log(result);
    });
})(Task8 || (Task8 = {}));
/*
        Task 9
    ~ Write a function with a return value of type never
*/
const createAndThrowError = (code, message) => {
    throw new Error(`Error code: ${code}, message: ${message}`);
};
console.log("\nTASK 9");
//createAndThrowError(404, "Not Found");
/*
        Task 10
    ~ Write a function that returns the population of the city (Kharkiv, Kyiv, Lviv, Odessa)..
    ~ Create a calculated enumeration with cities (Kharkiv, Kyiv, Lviv, Odessa) and their population
    ~ Display cities and the number of people living in them in the console.
*/
console.log("\nTASK 10");
const getPopulation = (city) => {
    // Population data from 2017
    switch (city) {
        case "Kharkiv":
            return 1419000;
        case "Kyiv":
            return 2884000;
        case "Lviv":
            return 721301;
        case "Odessa":
            return 993120;
        default:
            throw new Error("Wrong city input!");
    }
};
var cities;
(function (cities) {
    cities[cities["Kharkiv"] = getPopulation("Kharkiv")] = "Kharkiv";
    cities[cities["Kyiv"] = getPopulation("Kyiv")] = "Kyiv";
    cities[cities["Lviv"] = getPopulation("Lviv")] = "Lviv";
    cities[cities["Odessa"] = getPopulation("Odessa")] = "Odessa";
})(cities || (cities = {}));
for (let i = 0; i < Object.keys(cities).length; i++) {
    // in order to avoid the number type keys
    if (typeof Object.values(cities)[i] === "string") {
        const actualCity = Object.values(cities)[i];
        const actualPopulation = Object.keys(cities)[i];
        console.log(`${actualCity}: ${actualPopulation}`);
    }
}
/*
        Task 11
    ~ Create an array with the name of 5 countries.
    ~ Write a function that will print the country(s) whose name ends with 'a'.
*/
const countries = ["England", "Canada", "Germany", "Scotland", "India"];
const printCountry = (countries) => {
    countries.map((country) => {
        if (country[country.length - 1] === "a") {
            console.log(country);
        }
    });
};
console.log("\nTASK 11");
printCountry(countries);
// ADVANCED LEVEL
/*
        Task 13
    ~ Write a method 'without' that will take an object with properties of different types as the first argument, and the name of the type to get rid of as the second argument.
    ~ The 'without' method must return a copy of the object, excluding all properties of the specified type.
*/
const without = (inputObj, withoutThisType) => {
    const outputObj = {};
    for (let key of Object.keys(inputObj)) {
        if (typeof inputObj[key] !== withoutThisType) {
            outputObj[key] = inputObj[key];
        }
    }
    return outputObj;
};
const obj1 = {
    name: "Bob",
    age: 21,
    isAdmin: true,
};
console.log("\nTASK 13");
console.log(without(obj1, "number"));
/*
        Task 14
    ~ Write an 'isEmpty' function that checks if an object is empty, regardless of its nesting. Must return true for objects { a: { b: undefined }, { a: { b: [] } }, {}, { a: { b: [ { c: [] } ] } }
*/
console.log("\nTASK 14");
const isEmpty = (obj) => {
    // Loop through the object
    for (const key in obj) {
        // Save the current value
        const currentValue = obj[key];
        if (currentValue === undefined || currentValue === null) {
            // Skip the execution and 'jump' to the next object property
            continue;
        }
        // If the current value is an object
        if (typeof currentValue === "object") {
            // Call this function with the current value (which can be any type)
            if (!isEmpty(currentValue)) {
                // If the recursive call returns false
                return false;
            }
        }
        // If the current value is an array
        else if (Array.isArray(currentValue)) {
            if (currentValue.length > 0) {
                return false;
            }
        }
        // If the current value has a different type (like a primitive type, etc.)
        else {
            return false;
        }
    }
    return true;
};
console.log(isEmpty({ a: { b: undefined } })); // true
console.log(isEmpty({ a: { b: [] } })); // true
console.log(isEmpty({})); // true
console.log(isEmpty({ a: { b: [{ c: [] }] } })); // true
console.log(isEmpty({ a: { b: "hello" } })); // false
console.log(isEmpty({ a: { b: [1, 2, 3] } })); // false
