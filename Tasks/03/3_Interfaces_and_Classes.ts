/*


██╗███╗░░██╗████████╗███████╗██████╗░███████╗░█████╗░░█████╗░███████╗░██████╗  
██║████╗░██║╚══██╔══╝██╔════╝██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝  
██║██╔██╗██║░░░██║░░░█████╗░░██████╔╝█████╗░░███████║██║░░╚═╝█████╗░░╚█████╗░  
██║██║╚████║░░░██║░░░██╔══╝░░██╔══██╗██╔══╝░░██╔══██║██║░░██╗██╔══╝░░░╚═══██╗  
██║██║░╚███║░░░██║░░░███████╗██║░░██║██║░░░░░██║░░██║╚█████╔╝███████╗██████╔╝  
╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚══════╝╚═════╝░  

                    ░█████╗░███╗░░██╗██████╗░  
                    ██╔══██╗████╗░██║██╔══██╗  
                    ███████║██╔██╗██║██║░░██║  
                    ██╔══██║██║╚████║██║░░██║  
                    ██║░░██║██║░╚███║██████╔╝  
                    ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░  

        ░█████╗░██╗░░░░░░█████╗░░██████╗░██████╗███████╗░██████╗
        ██╔══██╗██║░░░░░██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝
        ██║░░╚═╝██║░░░░░███████║╚█████╗░╚█████╗░█████╗░░╚█████╗░
        ██║░░██╗██║░░░░░██╔══██║░╚═══██╗░╚═══██╗██╔══╝░░░╚═══██╗
        ╚█████╔╝███████╗██║░░██║██████╔╝██████╔╝███████╗██████╔╝
        ░╚════╝░╚══════╝╚═╝░░╚═╝╚═════╝░╚═════╝░╚══════╝╚═════╝░

    In this section you will learn:
- what is Interfaces
- basic principles of working with Interfaces
- about the Optional and Readonly properties of an Interface
- how to extend existing Interfaces
- what are Utility Types and how they simplify basic type conversions
- what are classes
- what are properties and methods
- what is class inheritance

    Carefully study the relevant material of official documentation and proceed to practical tasks:    
--> https://www.typescriptlang.org/docs/handbook/2/classes.html <--
--> https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content <--
--> https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces <--
*/

/*
        Task 1
    ~ Uncomment the lines of code below
    ~ The data is given, define the User interface
    ~ Use User Interface
*/

export interface User {
  name: string;
  age: number;
  occupation: string;
}

export const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("\nTASK1");
console.log("Users:");
users.forEach(logPerson);

/*
        Task 2
    ~ Use the code of Task 1 (copy, comment and paste below)
    ~ Add objects to User array { name: 'Jane Doe', age: 32, role: 'Administrator'},  { name: 'Bruce Willis', age: 64, role: 'World saver' }
    ~ Declare an Admin interface that matches the new objects
    ~ Make changes to the code so that there are no errors
*/
namespace Task2 {
  export interface User {
    name: string;
    age: number;
    occupation?: string;
  }

  export interface Admin extends User {
    role?: string;
  }

  export const users: Admin[] = [
    {
      name: "Max Mustermann",
      age: 25,
      occupation: "Chimney sweep",
    },
    {
      name: "Kate Müller",
      age: 23,
      occupation: "Astronaut",
    },
    { name: "Jane Doe", age: 32, role: "Administrator" },
    { name: "Bruce Willis", age: 64, role: "World saver" },
  ];

  export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
  }

  console.log("\nTASK2");
  console.log("Users:");
  users.forEach(logPerson);
}

/*
        Task 3
    ~ Use the code of Task 2 (copy, comment and paste below)
    ~ Change the logPerson function in such a way that all object properties are displayed in the console (including role and occupation)
*/

namespace Task3 {
  export interface User {
    name: string;
    age: number;
    occupation?: string;
  }

  export interface Admin extends User {
    role?: string;
  }

  export const users: Admin[] = [
    {
      name: "Max Mustermann",
      age: 25,
      occupation: "Chimney sweep",
    },
    {
      name: "Kate Müller",
      age: 23,
      occupation: "Astronaut",
    },
    { name: "Jane Doe", age: 32, role: "Administrator" },
    { name: "Bruce Willis", age: 64, role: "World saver" },
  ];

  export function logPerson(user: User | Admin) {
    console.log(` - ${user.name}, ${user.age}, ${(user as Admin).role}`);
    console.log((user as Admin).role !== "undefined");
    // if ((user as Admin).role !== "undefined") {
    //   console.log(` - ${user.name}, ${user.age}, ${(user as Admin).role}`);
    // } else {
    //   console.log(` - ${user.name}, ${user.age}, ${user.occupation}`);
    // }
  }

  console.log("\nTASK3");
  console.log("Users:");
  users.forEach(logPerson);
}

/*
        Task 4
    ~ Use the code of Task 3 (copy, comment and paste below)
    ~ To determine the type of the person argument in the logPerson function, use the following functions

        export function isAdmin(person: Person) {
            return person.type === 'admin';
        }

        export function isUser(person: Person) {
            return person.type === 'user';
        }

    ~ How to help TS understand what actual type is passed to these functions so that we can use the following expression in logPerson without errors
     if (isAdmin(person)) {
        additionalInformation = person.role;
     }
*/

//Add code here...

/*
        Task 5
    ~ Use the code of Task 4 (copy, comment and paste below)
    ~ It is necessary to add the type property to existing interfaces and corresponding objects (there will be three types user, admin, superuser)
    ~ Define a SuperUser interface that contains all fields from User and Admin except for the type field (use Utility Types). Specify the type field explicitly and set the corresponding value.
    ~ Write isSuperUser function
    ~ Output to the console separate lists of Users, Admins, Super Users
*/

//Add code here...

/*
        Task 6
    ~ Declare a Weather class that will have two properties windSpeed and chanceOfRain of numeric type.
    ~ The class must have a required initializer that accepts wind speed (windSpeed) and rain chance (chanceOfRain)
    ~ Add the isDayForWalk function to the class. If the windSpeed is less than 5 meters and the chance of rain (chanceOfRain) is less than 30 percent, then the function must return true, otherwise false.
    ~ Create an instance of the class and output to the console whether today is a good day for walking;)
*/

//Add code here...

/*
        Task 7
    ~ Declare a class Point2D that will have two properties x and y of numeric type. Properties must be initialized 0 by default.
    ~ Add a 'reset' method to the Point2D class that will set the x and y coordinates to 0.
    ~ Add an initializer to the Point2D class that will take values for the x and y coordinates as parameters.
    ~ Declare a Point3D class that will be a child class of the Point2D class. Add property z to it, which will be initialized to zero by default
    ~ Add an initializer that will take values for x, y and z coordinates as parameters
    ~ Create an instance of the Point3D class named point3D
    ~ Change it so that when you call the reset method, the z coordinate is also reset to zero
    ~ Use the method overriding mechanism!
*/

//Add code here...

/*
        Task 8
    ~ Implement the class hierarchy shown in Figure 1
*/

//Add code here...
