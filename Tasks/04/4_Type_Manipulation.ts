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

const getRandomElement = <T>(): T => {
  const randomIndex = Math.round(Math.random() * (typeArray01.length - 1));

  return typeArray01[randomIndex] as T;
};

console.log(getRandomElement<number>());

/*  
        Task 2 
    ~ The myFilter function repeats the functionality of the standard filter function.
    ~ Uncomment the code.
    ~ Add type annotation to function using generic type
    ~ Print the result of the function to the console
*/

// function myFilter(arr, predicate) {
// const result = [];
// for (const elm of arr) {
//     if (predicate(elm)) {
//     result.push(elm);
//     }
// }
// return result;
// }

// Usage example
// const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
// const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

/*  
        Task 3 
    ~ Uncomment the code.
    ~ Define price type
    ~ Write an example and print the result of using the function to the console
*/

// function getPrice(price: Price): number {
//     switch (speed) {
//       case "low":
//         return 50;
//       case "medium":
//         return 100;
//       case "high":
//         return 150;
//     }
//   }

/*  
        Task 4
    ~ Uncomment the code.
    ~ Define and specify the type of the addRole function, which adds a new role property to an object.
    ~ Print the result of using the function to the console
*/

// function addRole(obj) {
//     const role = 'user';
//     return {
//       ...obj,
//       role
//     };
//   }

/*  
        Task 5
    ~ Write a sum function that will return the sum of all the numbers passed to it.
    ~ Specify the types of arguments and return value of a function
*/

// console.log(sum(1, 2)); // 3
// console.log(sum(1,2,4,6)); // 13

/*  
        Task 6
    ~ Given two types Keys and Accessors
    ~ Get from Keys and Accessors the type Methods ("getName" | "getAddress" | "setName" | "setAddress") using Manipulation Types
*/

// type Keys = 'name' | 'address';
// type Accessors = 'get' | 'set';

/*  
        Task 7
    ~ Given a type with optional properties
    ~ Based on the User type, create a type without optional properties using type modifiers
*/
// type User = {
//     id: string;
//     name: string;
//     age?: number;
//     sex?: string;
//   };

/*  
        Task 8
    ~ Uncomment the code.
    ~ Use Utility Types to disable the title property on the topic object.
    ~ When you try to change the title, the compiler should give an error. 
*/

// interface Topic {
//     title: string;
//   }

//   const topic: Topic = {
//     title: "Main",
//   };

/*  
        Task 9
    ~ Define the type Coordinate as the return type of the getCoordinates function using Utility Types.
*/

// function getCoordinates() {
//     return { x: 10, y: 3 }
//   }
// type Coordinate = ?

// ADVANCED LEVEL

/*  
        Task 10
    ~ Uncomment the code.
    ~ Define and specify the type of reducer function arguments.
    ~ action.type can only be of three types (increment, decrement, reset)
*/

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return state + action.amount;
//     case "decrement":
//       return state - action.amount;
//     case "reset":
//       return action.value;
//   }
// };

// Examples of using

// reducer(100, {
//     type: 'increment',
//     amount: 10,
// }) === 110; //true

// reducer(100, {
//     type: 'reset',
//     value: 0,
// }) === 0; //true

/*  
        Task 11
    ~ Uncomment the code.
    ~ Get rid of overloading the createButton function by using conditional types.
*/

// interface CircleButton {
//     radius: number
//    }
// interface TextButton {
//     title: string
//    }

//    function createButton(value: number): CircleButton
//    function createButton(value: string): TextButton
//    function createButton(radiusOrTitle: string | number): CircleButton | TextButton
//    function createButton(radiusOrTitle: string | number): CircleButton | TextButton {
//     throw 'Not implemented'
//    }
