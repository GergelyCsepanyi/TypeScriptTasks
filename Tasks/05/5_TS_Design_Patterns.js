"use strict";
/*
    ████████╗░██████╗  ██████╗░███████╗░██████╗██╗░██████╗░███╗░░██╗
    ╚══██╔══╝██╔════╝  ██╔══██╗██╔════╝██╔════╝██║██╔════╝░████╗░██║
    ░░░██║░░░╚█████╗░  ██║░░██║█████╗░░╚█████╗░██║██║░░██╗░██╔██╗██║
    ░░░██║░░░░╚═══██╗  ██║░░██║██╔══╝░░░╚═══██╗██║██║░░╚██╗██║╚████║
    ░░░██║░░░██████╔╝  ██████╔╝███████╗██████╔╝██║╚██████╔╝██║░╚███║
    ░░░╚═╝░░░╚═════╝░  ╚═════╝░╚══════╝╚═════╝░╚═╝░╚═════╝░╚═╝░░╚══╝

    ██████╗░░█████╗░████████╗████████╗███████╗██████╗░███╗░░██╗░██████╗
    ██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗████╗░██║██╔════╝
    ██████╔╝███████║░░░██║░░░░░░██║░░░█████╗░░██████╔╝██╔██╗██║╚█████╗░
    ██╔═══╝░██╔══██║░░░██║░░░░░░██║░░░██╔══╝░░██╔══██╗██║╚████║░╚═══██╗
    ██║░░░░░██║░░██║░░░██║░░░░░░██║░░░███████╗██║░░██║██║░╚███║██████╔╝
    ╚═╝░░░░░╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░

        In this section:
- understand what design patterns are and when to use them
- get to know some patterns in practice

    Carefully study the relevant material of official documentation and proceed to practical tasks:
--> https://refactoring.guru/design-patterns <--
    For Task 1
--> https://refactoring.guru/design-patterns/adapter <--
    For Task 2
--> https://refactoring.guru/design-patterns/observer <--
    For Task 3
--> https://refactoring.guru/design-patterns/abstract-factory <--
====================================================================
    ADVANCED LEVEL
    For Task 4
--> https://refactoring.guru/design-patterns/decorator <--
    For Task 5
--> https://refactoring.guru/design-patterns/facade <--
    For Task 6
--> https://refactoring.guru/design-patterns/state <--

*/
// BASIC LEVEL
/*
        Task 1
    Implement the Adapter pattern in the following context:
    There are two classes: car and tow truck. Each of them, independently of each other, can ride.
    The car was found to be defective. The owner called a tow truck and the car was towed.
    Describe this situation by implementing a design pattern with text message output to the console.
*/
var Task1;
(function (Task1) {
    class Car {
        ride() {
            console.log("Ride a car.");
        }
    }
    class TowTruck {
        tow() {
            console.log("Tow a car.");
        }
    }
    class TowTruckAdapter extends Car {
        constructor(towTruck) {
            super();
            this.towTruck = towTruck;
        }
        ride() {
            this.towTruck.tow();
        }
    }
    console.log("\nTASK1");
    const car = new Car();
    car.ride();
    const towTruck = new TowTruck();
    towTruck.tow();
    const towTurckAdapter = new TowTruckAdapter(towTruck);
    towTurckAdapter.ride();
})(Task1 || (Task1 = {}));
/*
        Task 2
    Implement the Observer pattern in the following context:
    The alarm goes off in the house. It notifies the security guard about the alarm
    firm and the owner of the house, after turning off the alarm, they also receive a corresponding notification.
*/
var Task2;
(function (Task2) {
    class AlarmEventManager {
        constructor() {
            this.subscribers = [];
        }
        subscribe(subscriber) {
            this.subscribers.push(subscriber);
        }
        unSubscribe(subscriber) {
            this.subscribers = this.subscribers.filter((currentSub) => JSON.stringify(currentSub) !== JSON.stringify(subscriber));
        }
        notify(address, alarmMode) {
            this.subscribers.forEach((subscriber) => {
                if (subscriber.type === "security" &&
                    subscriber.addresses.includes(address)) {
                    subscriber.update(`The alarm in address of '${address}' has turned ${alarmMode}`);
                }
                else if (subscriber.type === "owner" &&
                    subscriber.address === address) {
                    subscriber.update(`Your house's alarm has turned ${alarmMode} (${address})`);
                }
            });
        }
    }
    class House {
        constructor(alarmEventManager, address) {
            this.alarmEventManager = alarmEventManager;
            this.address = address;
        }
        getAddress() {
            return this.address;
        }
        alarmOn() {
            this.alarmEventManager.notify(this.address, "on");
        }
        alarmOff() {
            this.alarmEventManager.notify(this.address, "off");
        }
    }
    const house1Address = "Some City, Test Street 1";
    const house2Address = "Some City, Test Street 2";
    const alarmEventManager = new AlarmEventManager();
    const house1 = new House(alarmEventManager, house1Address);
    const house2 = new House(alarmEventManager, house2Address);
    const owner1 = {
        type: "owner",
        address: house1Address,
        update: function (message) {
            console.log(message);
        },
    };
    const owner2 = {
        type: "owner",
        address: house2Address,
        update: function (message) {
            console.log(message);
        },
    };
    const security = {
        type: "security",
        addresses: [house1Address, house2Address],
        update: function (message) {
            console.log(message);
        },
    };
    const getUpdatedSecurityAddresses = (security, addressToRemove) => {
        return security.addresses.filter((address) => address !== addressToRemove);
    };
    alarmEventManager.subscribe(owner1);
    alarmEventManager.subscribe(owner2);
    alarmEventManager.subscribe(security);
    console.log("\nTASK2");
    console.log("House 1");
    house1.alarmOn();
    house1.alarmOff();
    console.log("\nHouse 2");
    house2.alarmOn();
    house2.alarmOff();
    alarmEventManager.unSubscribe(owner2);
    // We have to remove the unsubscribed owner's address from the security addresses array
    security.addresses = getUpdatedSecurityAddresses(security, owner2.address);
    console.log(`\nUnsubscribe owner2 (House 2, ${owner2.address})\n`);
    console.log("House 1");
    house1.alarmOn();
    house1.alarmOff();
    console.log();
    // Won't notify
    house2.alarmOn();
    house2.alarmOff();
})(Task2 || (Task2 = {}));
/*
        Task 3
    Implement the Abstract Factory pattern in the following context:
    There are two manufacturers Samsung and Apple. Each of these manufacturers produces various devices (phones, tablets, computers, etc.).
    The factory should provide the ability to create devices of any brand and any type.
*/
var Task3;
(function (Task3) {
    class Phone {
    }
    class Tablet {
    }
    class Computer {
    }
    class SamsungPhone {
        create() {
            console.log("Create Samsung Phone");
        }
    }
    class SamsungTablet {
        create() {
            console.log("Create Samsung Tablet");
        }
    }
    class SamsungComputer {
        create() {
            console.log("Create Samsung Computer");
        }
    }
    class ApplePhone {
        create() {
            console.log("Create Apple Phone");
        }
    }
    class AppleTablet {
        create() {
            console.log("Create Apple Tablet");
        }
    }
    class AppleComputer {
        create() {
            console.log("Create Apple Computer");
        }
    }
    class CompanyFactory {
    }
    class SamsungFactory {
        createPhone() {
            return new SamsungPhone();
        }
        createTablet() {
            return new SamsungTablet();
        }
        createComputer() {
            return new SamsungComputer();
        }
    }
    class AppleFactory {
        createPhone() {
            return new ApplePhone();
        }
        createTablet() {
            return new AppleTablet();
        }
        createComputer() {
            return new AppleComputer();
        }
    }
    const createCompany = (factory) => {
        const phone = factory.createPhone();
        const tablet = factory.createTablet();
        const computer = factory.createComputer();
        phone.create();
        tablet.create();
        computer.create();
    };
    console.log("\nTASK3");
    createCompany(new SamsungFactory());
    createCompany(new AppleFactory());
})(Task3 || (Task3 = {}));
// ADVANCED LEVEL
/*
        Task 4
    Implement the Decorator pattern in the following context:
    Fast Food offers two combo sets of Cheeseburger Menu and Hamburger Menu.
    Each of these sets can be supplemented with various drinks or desserts of the buyer's choice, which changes its price.
    I received an order for two menus (Cheeseburger menu and Hamburger menu), one with juice, and the second with cola and donut.
    Help the fast food cook and display the order in the console without creating new menu types.
*/
var Task4;
(function (Task4) {
    class Menu {
        constructor(menuType) {
            this.menuType = menuType;
            this.createMenu(menuType);
        }
        createMenu(menuType) {
            console.log(`Create menu: ${menuType}`);
        }
        addJuice(juice) {
            console.log(`Add juice: ${juice} to menu: ${this.menuType} menu`);
        }
        addDessert(dessert) {
            console.log(`Add dessert: ${dessert} to menu: ${this.menuType} menu`);
        }
    }
    class MenuDecorator {
        constructor(menu) {
            this.wrappee = menu;
        }
        addJuice(juice) {
            this.wrappee.addJuice(juice);
        }
        addDessert(dessert) {
            this.wrappee.addDessert(dessert);
        }
    }
    class CheeseburgerMenuDecorator extends MenuDecorator {
        addJuice(juice) {
            super.addJuice(juice);
        }
        addDessert(dessert) {
            super.addDessert(dessert);
        }
    }
    class HamburgerMenuDecorator extends MenuDecorator {
        addJuice(juice) {
            super.addJuice(juice);
        }
        addDessert(dessert) {
            super.addDessert(dessert);
        }
    }
    console.log("\nTASK4");
    const cheeseburgerMenu = new CheeseburgerMenuDecorator(new Menu("cheeseburger"));
    const hamburgerMenu = new HamburgerMenuDecorator(new Menu("hamburger"));
    cheeseburgerMenu.addJuice("orange_juice");
    hamburgerMenu.addJuice("cola");
    hamburgerMenu.addDessert("donut");
})(Task4 || (Task4 = {}));
/*
  Task 5
  Implement the Facade pattern in the following context:
    You have a smart home. It is filled with many devices.
    When you leave or come home, every time you repeat a lot of the same actions (on / off lights, air conditioning, music, etc.).
    Create two programmed behaviors of the smart home system - "the owner came home", "the owner left home".
*/
var Task5;
(function (Task5) {
    // Complex class
    class SmartHome {
        constructor(lights, airConditioner, music) {
            this.lights = lights;
            this.airConditioner = airConditioner;
            this.music = music;
        }
        turnLightsOn() {
            if (this.lights === "off") {
                this.lights = "on";
                console.log("The lights has turned on.");
            }
        }
        turnLightsOff() {
            if (this.lights === "on") {
                this.lights = "off";
                console.log("The lights has turned off.");
            }
        }
        turnAirConditionOn() {
            if (this.airConditioner === "off") {
                this.airConditioner = "on";
                console.log("The air conditioner has turned on.");
            }
        }
        turnAirConditionOff() {
            if (this.airConditioner === "on") {
                this.airConditioner = "off";
                console.log("The air conditioner has turned off.");
            }
        }
        musicOn() {
            if (this.music === "off") {
                this.music = "on";
                console.log("The music has turned on.");
            }
        }
        musicOff() {
            if (this.music === "on") {
                this.music = "off";
                console.log("The music has turned off.");
            }
        }
    }
    // The facade class
    class SmartHomeSystem {
        constructor() {
            this.smartHome = new SmartHome("off", "off", "off");
        }
        ownerComeHome() {
            console.log("the owner came home");
            this.smartHome.turnLightsOn();
            this.smartHome.turnAirConditionOn();
            this.smartHome.musicOn();
        }
        ownerLeftHome() {
            console.log("the owner left home");
            this.smartHome.turnLightsOff();
            this.smartHome.turnAirConditionOff();
            this.smartHome.musicOff();
        }
    }
    console.log("\nTASK5");
    const smartHomeSystem = new SmartHomeSystem();
    smartHomeSystem.ownerComeHome();
    console.log("");
    smartHomeSystem.ownerLeftHome();
})(Task5 || (Task5 = {}));
/*
        Task 6
    Implement the State pattern in the following context:
    Let's assume that a mobile application before putting it into the store can be in 4 states: waiting for review, in review, ready for sale, published.
    In each state, we can call the Publish and Cancel methods, which will work differently:
      - in state 'waiting for review' Publish will send the application for review, Cancel cannot be called
      - in state 'in review' Publish will send the app to 'ready for sale' status if the review was successful,
        or call Cancel when errors are found and return to the initial state.
      - in state 'ready for sale', the user can call Cancel and cancel the publishing, or tap Publish and go to the 'published' state.
      - Publish and Cancel methods cannot be called from the 'published' state
*/
/*
 
  abstract class State
    # context
    + setContext()
    abs + Publish()
    abs + Cancel()
  
  class WaitingForReview ext State
    + Publish()
    + Cancel()

  class InReview ext State
    + Publish()
    + Cancel()

  class ReadyForSale ext State
    + Publish()
    + Cancel()
  
  class Published ext State
    + Publish()
    + Cancel()

  class Context
    - state
    transitionTo(state)
    + Publish()
    + Cancel()

 */
var Task6;
(function (Task6) {
    class State {
        constructor() {
            this.context = null;
        }
        setContext(context) {
            this.context = context;
        }
    }
    class WaitingForReview extends State {
        Publish() {
            var _a;
            console.log("Changing to 'review' state...");
            (_a = this.context) === null || _a === void 0 ? void 0 : _a.transitionTo(new InReview());
        }
        Cancel() { }
    }
    class InReview extends State {
        constructor() {
            super(...arguments);
            // It's value should comes from outside this class or from a function in this class (like Validate():boolean)
            this.errorDuringReview = false;
        }
        Publish() {
            var _a;
            if (this.errorDuringReview) {
                console.log("An error happend during validation!");
                this.Cancel();
            }
            else {
                console.log("Changing to 'ready for sale' state...");
                (_a = this.context) === null || _a === void 0 ? void 0 : _a.transitionTo(new ReadyForSale());
            }
        }
        Cancel() {
            var _a;
            console.log("Going back to the initial state...");
            (_a = this.context) === null || _a === void 0 ? void 0 : _a.transitionTo(new WaitingForReview());
        }
    }
    class ReadyForSale extends State {
        Publish() {
            var _a;
            console.log("Changing to 'published' state...");
            (_a = this.context) === null || _a === void 0 ? void 0 : _a.transitionTo(new Published());
        }
        Cancel() {
            var _a;
            console.log("Going back to the initial state...");
            (_a = this.context) === null || _a === void 0 ? void 0 : _a.transitionTo(new WaitingForReview());
        }
    }
    class Published extends State {
        Publish() { }
        Cancel() { }
    }
    class Context {
        constructor(state) {
            this.state = null;
            this.transitionTo(state);
        }
        transitionTo(state) {
            this.state = state;
            this.state.setContext(this);
        }
        Publish() {
            var _a;
            (_a = this.state) === null || _a === void 0 ? void 0 : _a.Publish();
        }
        Cancel() {
            var _a;
            (_a = this.state) === null || _a === void 0 ? void 0 : _a.Cancel();
        }
    }
    console.log("\nTASK6");
    const context = new Context(new WaitingForReview());
    context.Publish();
    context.Publish();
    context.Cancel();
    context.Publish();
})(Task6 || (Task6 = {}));
