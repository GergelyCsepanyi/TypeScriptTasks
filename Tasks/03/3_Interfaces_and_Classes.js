"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
exports.users = [
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
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
exports.logPerson = logPerson;
console.log("\nTASK1");
console.log("Users:");
exports.users.forEach(logPerson);
/*
        Task 2
    ~ Use the code of Task 1 (copy, comment and paste below)
    ~ Add objects to User array { name: 'Jane Doe', age: 32, role: 'Administrator'},  { name: 'Bruce Willis', age: 64, role: 'World saver' }
    ~ Declare an Admin interface that matches the new objects
    ~ Make changes to the code so that there are no errors
*/
var Task2;
(function (Task2) {
    Task2.users = [
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
    function logPerson(user) {
        console.log(` - ${user.name}, ${user.age}`);
    }
    Task2.logPerson = logPerson;
    console.log("\nTASK2");
    console.log("Users:");
    Task2.users.forEach(logPerson);
})(Task2 || (Task2 = {}));
/*
        Task 3
    ~ Use the code of Task 2 (copy, comment and paste below)
    ~ Change the logPerson function in such a way that all object properties are displayed in the console (including role and occupation)
*/
var Task3;
(function (Task3) {
    Task3.users = [
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
    function logPerson(user) {
        if (typeof user.role !== "undefined") {
            console.log(` - ${user.name}, ${user.age}, ${user.role}`);
        }
        else {
            console.log(` - ${user.name}, ${user.age}, ${user.occupation}`);
        }
    }
    Task3.logPerson = logPerson;
    console.log("\nTASK3");
    console.log("Users:");
    Task3.users.forEach(logPerson);
})(Task3 || (Task3 = {}));
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
var Task4;
(function (Task4) {
    Task4.users = [
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
        { name: "Bruce Willis", age: 64, role: "User" },
    ];
    function isAdmin(person) {
        return person.role === "Administrator";
    }
    function logPerson(user) {
        if (isAdmin(user)) {
            console.log(` - ${user.name}, ${user.age}, ${user.role}`);
        }
        else {
            let output = ` - ${user.name}, ${user.age}`;
            if (user.occupation) {
                output += `, ${user.occupation}`;
            }
            console.log(output);
        }
    }
    Task4.logPerson = logPerson;
    console.log("\nTASK4");
    console.log("Users:");
    Task4.users.forEach(logPerson);
})(Task4 || (Task4 = {}));
/*
        Task 5
    ~ Use the code of Task 4 (copy, comment and paste below)
    ~ It is necessary to add the type property to existing interfaces and corresponding objects (there will be three types user, admin, superuser)
    ~ Define a SuperUser interface that contains all fields from User and Admin except for the type field (use Utility Types). Specify the type field explicitly and set the corresponding value.
    ~ Write isSuperUser function
    ~ Output to the console separate lists of Users, Admins, Super Users
*/
var Task5;
(function (Task5) {
    Task5.persons = [
        // Users
        {
            name: "Max Mustermann",
            age: 25,
            occupation: "Chimney sweep",
            type: "user",
        },
        {
            name: "Kate Müller",
            age: 23,
            occupation: "Astronaut",
            type: "user",
        },
        // Admins
        { name: "Jane Doe", age: 32, role: "Researcher", type: "admin" },
        {
            name: "Bruce Willis",
            age: 64,
            role: "World Saver",
            type: "admin",
        },
        // SuperUsers
        { name: "Bob", age: 34, role: "SuperUser", type: "superuser" },
        {
            name: "Super User",
            age: 41,
            role: "Lead SuperUser",
            type: "superuser",
        },
    ];
    function isAdmin(person) {
        return person.type === "admin";
    }
    function isUser(person) {
        return person.type === "user";
    }
    function isSuperUser(person) {
        return person.type === "superuser";
    }
    function logPerson(user) {
        // These two property are common in both types
        let output = ` - name: ${user.name}, age: ${user.age}, type: ${user.type}`;
        if (isUser(user)) {
            // The occupation is unique for User type
            output += `, occupation: ${user.occupation}`;
        }
        else if (isAdmin(user)) {
            // The role is unique for Admin type
            output += `, role: ${user.role}`;
        }
        console.log(output);
    }
    function processAndLogPersons(persons) {
        const users = [];
        const admins = [];
        const superusers = [];
        // Separate persons to arrays
        persons.forEach((person) => {
            if (isUser(person)) {
                users.push(person);
            }
            else if (isAdmin(person)) {
                admins.push(person);
            }
            else {
                superusers.push(person);
            }
        });
        // Log out the persons
        console.log("Users:");
        users.forEach(logPerson);
        console.log("Admins:");
        admins.forEach(logPerson);
        console.log("SuperUsers:");
        superusers.forEach(logPerson);
    }
    Task5.processAndLogPersons = processAndLogPersons;
    console.log("\nTASK5");
    processAndLogPersons(Task5.persons);
})(Task5 || (Task5 = {}));
/*
        Task 6
    ~ Declare a Weather class that will have two properties windSpeed and chanceOfRain of numeric type.
    ~ The class must have a required initializer that accepts wind speed (windSpeed) and rain chance (chanceOfRain)
    ~ Add the isDayForWalk function to the class. If the windSpeed is less than 5 meters and the chance of rain (chanceOfRain) is less than 30 percent, then the function must return true, otherwise false.
    ~ Create an instance of the class and output to the console whether today is a good day for walking;)
*/
var Task6;
(function (Task6) {
    class Weather {
        // Initializer
        constructor(windSpeed, chanceOfRain) {
            // Properties
            this.windSpeed = 0;
            this.chanceOfRain = 0;
            this.windSpeed = windSpeed;
            this.chanceOfRain = chanceOfRain;
        }
        isDayForWalk() {
            if (this.windSpeed < 5 && this.chanceOfRain < 30) {
                return true;
            }
            return false;
        }
    }
    console.log("\nTASK6");
    // Create an instance of the class
    const day1 = new Weather(4, 29);
    // Print out whether today is a good day for walking
    console.log(day1.isDayForWalk());
})(Task6 || (Task6 = {}));
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
var Task7;
(function (Task7) {
    class Point2D {
        // These getters are not in the tasks, these are just a little functionalities that give back the values securely
        get X() {
            return this.x;
        }
        get Y() {
            return this.y;
        }
        // Initializer
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }
        // Reset method
        reset() {
            this.x = 0;
            this.y = 0;
        }
    }
    class Point3D extends Point2D {
        // This getter is not in the tasks, this is just a little functionality that gives back the value securely
        get Z() {
            return this.z;
        }
        // Initializer
        constructor(x = 0, y = 0, z = 0) {
            // Call the parent's constructor with x and y
            super(x, y);
            this.z = z;
        }
        reset() {
            // Reset x and y coordinates
            super.reset();
            this.z = 0;
        }
    }
    console.log("\nTASK7");
    const point3D = new Point3D(1, 2, 3);
    console.log(`point3D after initialization: ${point3D.X}, ${point3D.Y}, ${point3D.Z}`);
    // Reset point3D
    point3D.reset();
    console.log(`point3D after reset the coordinates: ${point3D.X}, ${point3D.Y}, ${point3D.Z}`);
})(Task7 || (Task7 = {}));
/*
        Task 8
    ~ Implement the class hierarchy shown in Figure 1
*/
class Telephone {
    makeCall() { }
    hangUp() { }
}
// The left 'subtree' from Telephone
class Landline extends Telephone {
}
class Rotary extends Landline {
    rotaryInput() { }
}
class PushButton extends Landline {
    buttonInput() { }
}
// The right 'subtree' from Telephone
class Cellular extends Telephone {
    sendSMS() { }
}
class Smart extends Cellular {
    touchInput() { }
    accessInternet() { }
}
class IPhone extends Smart {
    iOS() { }
}
class Android extends Smart {
    androidOS() { }
}
class Windows extends Smart {
    windowsOS() { }
}
class NonSmart extends Cellular {
    buttonInput() { }
}
// To test the relationship
const windows = new Windows();
// makeCall() comes from Telephone
windows.makeCall();
