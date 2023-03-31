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

class Car {
  ride(): void {
    console.log("Ride a car.");
  }
}

class TowTruck {
  tow(): void {
    console.log("Tow a car.");
  }
}

class TowTruckAdapter extends Car {
  towTruck: TowTruck;

  constructor(towTruck: TowTruck) {
    super();
    this.towTruck = towTruck;
  }
  ride(): void {
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

/*
        Task 2
    Implement the Observer pattern in the following context:
    The alarm goes off in the house. It notifies the security guard about the alarm
    firm and the owner of the house, after turning off the alarm, they also receive a corresponding notification.
*/

// The name of EventListener would be better, but it is taken
interface Listener {
  update(message: string): void;
}

type AlarmMode = "on" | "off";

class AlarmEventManager {
  private subscribers: Listener[] = [];

  subscribe(subscriber: Listener) {
    this.subscribers.push(subscriber);
  }

  unSubscribe(subscriber: Listener) {
    this.subscribers = this.subscribers.filter(
      (currentSub) => currentSub.toString() === subscriber.toString()
    );
  }

  notify(address: string, alarmMode: AlarmMode) {
    this.subscribers.forEach((subscriber) => {
      if (
        subscriber instanceof Owner &&
        (subscriber as Owner).getAddress() === address
      ) {
        subscriber.update(`Your house's alarm has turned ` + alarmMode);
      } else if (subscriber instanceof SecurityGuard) {
        subscriber.update(
          `The alarm in address of '${address}' has turned ${alarmMode}`
        );
      }
    });
  }
}

class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Owner extends Person implements Listener {
  addressOfHouse: string;

  constructor(name: string, addressOfHouse: string) {
    super(name);
    this.addressOfHouse = addressOfHouse;
  }

  getAddress() {
    return this.addressOfHouse;
  }

  update(message: string): void {
    console.log(message);
  }
}

class SecurityGuard extends Person implements Listener {
  constructor(name: string) {
    super(name);
  }
  update(message: string): void {
    console.log(message);
  }
}

class House {
  private owner: Owner;
  private alarmEventManager: AlarmEventManager;
  private address: string;

  constructor(
    owner: Owner,
    alarmEventManager: AlarmEventManager,
    address: string
  ) {
    this.owner = owner;
    this.alarmEventManager = alarmEventManager;
    this.address = address;
  }

  getOwner() {
    return this.owner;
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
const owner = new Owner("Bob", house1Address);
const securityGuard = new SecurityGuard("Home Security Service");
const alarmEventManager = new AlarmEventManager();
const house = new House(owner, alarmEventManager, house1Address);

alarmEventManager.subscribe(owner);
alarmEventManager.subscribe(securityGuard);

console.log("\nTASK2");

house.alarmOn();
house.alarmOff();
// setTimeout(() => {
//   house.alarmOff();
// }, 1000);

/* 
        Task 3
    Implement the Abstract Factory pattern in the following context:
    There are two manufacturers Samsung and Apple. Each of these manufacturers produces various devices (phones, tablets, computers, etc.).
    The factory should provide the ability to create devices of any brand and any type.
*/

abstract class Phone {
  abstract create(): void;
}

abstract class Tablet {
  abstract create(): void;
}

abstract class Computer {
  abstract create(): void;
}

class SamsungPhone implements Phone {
  create(): void {
    console.log("Create Samsung Phone");
  }
}

class SamsungTablet implements Tablet {
  create(): void {
    console.log("Create Samsung Tablet");
  }
}

class SamsungComputer implements Computer {
  create(): void {
    console.log("Create Samsung Computer");
  }
}

class ApplePhone implements Phone {
  create(): void {
    console.log("Create Apple Phone");
  }
}

class AppleTablet implements Tablet {
  create(): void {
    console.log("Create Apple Tablet");
  }
}

class AppleComputer implements Computer {
  create(): void {
    console.log("Create Apple Computer");
  }
}

abstract class CompanyFactory {
  abstract createPhone(): Phone;
  abstract createTablet(): Tablet;
  abstract createComputer(): Computer;
}

class SamsungFactory implements CompanyFactory {
  createPhone(): Phone {
    return new SamsungPhone();
  }
  createTablet(): Tablet {
    return new SamsungTablet();
  }
  createComputer(): Computer {
    return new SamsungComputer();
  }
}

class AppleFactory implements CompanyFactory {
  createPhone(): Phone {
    return new ApplePhone();
  }
  createTablet(): Tablet {
    return new AppleTablet();
  }
  createComputer(): Computer {
    return new AppleComputer();
  }
}

const createCompany = (factory: CompanyFactory): void => {
  const phone = factory.createPhone();
  const tablet = factory.createTablet();
  const computer = factory.createComputer();

  phone.create();
  tablet.create();
  computer.create();
};

createCompany(new SamsungFactory());
createCompany(new AppleFactory());

// ADVANCED LEVEL
/*
        Task 4
    Implement the Decorator pattern in the following context: 
    Fast Food offers two combo sets of Cheeseburger Menu and Hamburger Menu.
    Each of these sets can be supplemented with various drinks or desserts of the buyer's choice, which changes its price.
    I received an order for two menus (Cheeseburger menu and Hamburger menu), one with juice, and the second with cola and donut.
    Help the fast food cook and display the order in the console without creating new menu types.
*/

//Add code here...

/*
        Task 5
    Implement the Facade pattern in the following context:
    You have a smart home. It is filled with many devices.
    When you leave or come home, every time you repeat a lot of the same actions (on / off lights, air conditioning, music, etc.).
    Create two programmed behaviors of the smart home system - "the owner came home", "the owner left home".
*/

//Add code here...

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

//Add code here...
