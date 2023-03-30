"use strict";
/*
████████╗██╗░░░██╗██████╗░███████╗
╚══██╔══╝╚██╗░██╔╝██╔══██╗██╔════╝
░░░██║░░░░╚████╔╝░██████╔╝█████╗░░
░░░██║░░░░░╚██╔╝░░██╔═══╝░██╔══╝░░
░░░██║░░░░░░██║░░░██║░░░░░███████╗
░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░╚══════╝

███╗░░░███╗░█████╗░███╗░░██╗██╗██████╗░██╗░░░██╗██╗░░░░░░█████╗░████████╗██╗░█████╗░███╗░░██╗
████╗░████║██╔══██╗████╗░██║██║██╔══██╗██║░░░██║██║░░░░░██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║
██╔████╔██║███████║██╔██╗██║██║██████╔╝██║░░░██║██║░░░░░███████║░░░██║░░░██║██║░░██║██╔██╗██║
██║╚██╔╝██║██╔══██║██║╚████║██║██╔═══╝░██║░░░██║██║░░░░░██╔══██║░░░██║░░░██║██║░░██║██║╚████║
██║░╚═╝░██║██║░░██║██║░╚███║██║██║░░░░░╚██████╔╝███████╗██║░░██║░░░██║░░░██║╚█████╔╝██║░╚███║
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═╝░░░░░░╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝

    In this section you will learn:
- what are Generics and how to work with them
- what are type manipulators and their types
- keyof and typeof operators
- how to extend existing types

Carefully study the relevant material of official documentation and proceed to practical tasks:
--> https://www.typescriptlang.org/docs/handbook/2/types-from-types.html <--
*/
// BASIC LEVEL
/*
        Task 1
    ~ Declare multiple arrays of different types
    ~ Write a function that will return a random element of this array using generic type
*/
const typeArray01 = [111, "random string", true];
const getRandomElement = () => {
    const randomIndex = Math.round(Math.random() * (typeArray01.length - 1));
    return typeArray01[randomIndex];
};
console.log("TASK1");
console.log(getRandomElement());
/*
        Task 2
    ~ The myFilter function repeats the functionality of the standard filter function.
    ~ Uncomment the code.
    ~ Add type annotation to function using generic type
    ~ Print the result of the function to the console
*/
function myFilter(arr, predicate) {
    const result = [];
    for (const elm of arr) {
        if (predicate(elm)) {
            result.push(elm);
        }
    }
    return result;
}
const arr = [1, 2, 3, 4, 5];
const filteredArr = myFilter(arr, (elm) => elm > 2);
console.log("\nTASK2");
console.log(filteredArr);
// Usage example
const res = myFilter([1, 2, 3, 4, 5], (num) => num % 2 === 0);
const res2 = myFilter(["foo", "hoge", "bar"], (str) => str.length >= 4);
console.log(res);
console.log(res2);
function getPrice(price) {
    switch (price) {
        case "low":
            return 50;
        case "medium":
            return 100;
        case "high":
            return 150;
    }
}
console.log("\nTASK3");
console.log(getPrice("low"));
console.log(getPrice("medium"));
console.log(getPrice("high"));
/*
        Task 4
    ~ Uncomment the code.
    ~ Define and specify the type of the addRole function, which adds a new role property to an object.
    ~ Print the result of using the function to the console
*/
// This '{ [key: string]: any }' and this 'Record<string, any>' is same
function addRole(obj) {
    const role = "user";
    return Object.assign(Object.assign({}, obj), { role });
}
console.log("\nTASK4");
console.log(addRole({ name: "Bob" }));
console.log(addRole({ name: "Tom", age: 44 }));
/*
        Task 5
    ~ Write a sum function that will return the sum of all the numbers passed to it.
    ~ Specify the types of arguments and return value of a function
*/
const sum = (...args) => {
    let sum = 0;
    args.forEach((actualNumber) => (sum += actualNumber));
    return sum;
};
console.log("\nTASK4");
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 4, 6)); // 13
const topic = {
    title: "Main",
};
//topic.title = 'new title'
/*
        Task 9
    ~ Define the type Coordinate as the return type of the getCoordinates function using Utility Types.
*/
function getCoordinates() {
    return { x: 10, y: 3 };
}
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            // I think it is a better solution, because for the proper working an amount is needed, but this wasn't in the task.
            //   if (!action.amount) {
            //     throw new Error("action.amount is not provided!");
            //   }
            // If the action.amount is undefined then it will be 0
            return state + (action.amount || 0);
        case "decrement":
            // If the action.amount is undefined then it will be 0
            return state - (action.amount || 0);
        case "reset":
            return action.value;
    }
};
// Examples of using
console.log("\nTASK10");
console.log(reducer(100, {
    type: "increment",
    amount: 10,
}) === 110); //true
console.log(reducer(100, {
    type: "reset",
    value: 0,
}) === 0); //true
const circleButton = createButton(1);
const textButton = createButton("text");
