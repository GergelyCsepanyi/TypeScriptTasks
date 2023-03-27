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
const testNumber: number = 1;
// 2
const testString: string = "test string";
// 3
const testBool: boolean = true;
// 4
const arrayOfNumbers: number[] = [1, 2, 3];
// 5
const arrayOfStrings: string[] = ["t", "e", "s", "t"];
// 6
const arrayOfBools: boolean[] = [true, false, true];

// 7
const someValue: any = "test value";

type PersonType = {
  name: string;
  age: number;
};
// 8
const person: PersonType = { name: "Test User", age: 40 };
// 9
const listOfPersons: PersonType[] = [
  { name: "Test User", age: 22 },
  { name: "John", age: 28 },
];

type FoodType = "goulash" | "pancake" | "fried_meat";
type PersonWithFoodType = {
  name: string;
  age: number;
  favouriteFood: FoodType; // or I can use like a literal: "goulash" | "pancake" | "fried_meat"
};
// 10
const personWithFood: PersonWithFoodType = {
  name: "Bob",
  age: 22,
  favouriteFood: "fried_meat",
};
// 11
const listOfPersonsWithFood: PersonWithFoodType[] = [
  { name: "Josh", age: 33, favouriteFood: "goulash" },
  { name: "Bob", age: 21, favouriteFood: "pancake" },
];

// With the 'any' type, we can assign any type of value to a variable (or pass data to a method like an argument).
// For example:
// let data: any = "some data";
// data = 1;
// data = true;
// If "noImplicitAny" is set to true in the tsconfig.json file, then we can't use the 'any' keyword.

/*  
        Task 2 
    ~ Write a function that takes two numbers as arguments and returns their sum.
    ~ Write a function argument type check and, if a string value is passed, display the error "Incorrect input!"
*/

//Add code here...

/*  
        Task 3 
    ~ Declare a variable of type Any and set its value to 'example'
    ~ Write a function to check that A is not one of the following list null, undefined, NaN, '', 0, false 
*/

//Add code here...

/*  
        Task 4 
    ~ Write a combine function with two arguments of type number OR string. 
    ~ The third argument is a parameter with limited values 'as-number' OR 'as-string'.
    ~ When set to 'as-number', output the sum of numbers, when set to 'as-string', concatenate strings. 
*/

//Add code here...

/*  
        Task 5 
    ~ Declare a constant of type Tuple that stores the code (404) and the text of the error ("Error!"). 
    ~ Copy the function from Task 3 and change it so that if the condition is not met, the error code and text will be displayed.
*/

//Add code here...

/*  
        Task 6 
    ~ Create a person object with properties: name, age, gender, role.
    ~ For the Role property use enum (Admin, Author, Moderator).
    ~ Give the person object the appropriate type.
    ~ Print the name of the property and its value to the console. Each property on a new line.
*/

//Add code here...

/*  
        Task 7 
    ~ Assign text values to the Role enumeration from the previous task.
    ~ Create several objects similar to the person object from Task 6 with different values for the Role field.
    ~ Write a function that takes an array of objects and prints the message "My name is {name}. I am {role}" to the console for each object.

*/

//Add code here...

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

//Add code here...

/*  
        Task 9
    ~ Write a function with a return value of type never
*/

//Add code here...

/*  
        Task 10
    ~ Write a function that returns the population of the city (Kharkiv, Kyiv, Lviv, Odessa)..
    ~ Create a calculated enumeration with cities (Kharkiv, Kyiv, Lviv, Odessa) and their population
    ~ Display cities and the number of people living in them in the console. 
*/

//Add code here...

/*
        Task 11
    ~ Create an array with the name of 5 countries.
    ~ Write a function that will print the country(s) whose name ends with 'a'.
*/

//Add code here...

// ADVANCED LEVEL

/*  
        Task 13
    ~ Write a method 'without' that will take an object with properties of different types as the first argument, and the name of the type to get rid of as the second argument.
    ~ The 'without' method must return a copy of the object, excluding all properties of the specified type.
*/

//Add code here...

/*  
        Task 14
    ~ Write an 'isEmpty' function that checks if an object is empty, regardless of its nesting. Must return true for objects { a: { b: undefined }, { a: { b: [] } }, {}, { a: { b: [ { c: [] } ] } }
*/

//Add code here...
