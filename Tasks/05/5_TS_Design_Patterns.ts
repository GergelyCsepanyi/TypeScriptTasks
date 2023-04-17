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

namespace Task1 {
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
}

/*
        Task 2
    Implement the Observer pattern in the following context:
    The alarm goes off in the house. It notifies the security guard about the alarm
    firm and the owner of the house, after turning off the alarm, they also receive a corresponding notification.
*/

namespace Task2 {
  // The name of EventListener would be better, but it is taken
  interface OwnerListener {
    type: "owner";
    address: string;
  }

  interface SecurityListener {
    type: "security";
    addresses: string[];
  }

  type Listener = (OwnerListener | SecurityListener) & {
    update(message: string): void;
  };

  type AlarmMode = "on" | "off";

  class AlarmEventManager {
    private subscribers: Listener[] = [];

    subscribe(subscriber: Listener) {
      this.subscribers.push(subscriber);
    }

    unSubscribe(subscriber: Listener) {
      this.subscribers = this.subscribers.filter(
        (currentSub) =>
          JSON.stringify(currentSub) !== JSON.stringify(subscriber)
      );
    }

    notify(address: string, alarmMode: AlarmMode) {
      this.subscribers.forEach((subscriber) => {
        switch (true) {
          case subscriber.type === "security" &&
            subscriber.addresses.includes(address):
            subscriber.update(
              `The alarm in address of '${address}' has turned ${alarmMode}`
            );
            break;

          case subscriber.type === "owner" && subscriber.address === address:
            subscriber.update(
              `Your house's alarm has turned ${alarmMode} (${address})`
            );
            break;
          default:
            break;
        }
      });
    }
  }

  class House {
    private alarmEventManager: AlarmEventManager;
    private address: string;

    constructor(alarmEventManager: AlarmEventManager, address: string) {
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

  const owner1: Listener = {
    type: "owner",
    address: house1Address,
    update: function (message: string): void {
      console.log(message);
    },
  };

  const owner2: Listener = {
    type: "owner",
    address: house2Address,
    update: function (message: string): void {
      console.log(message);
    },
  };

  const security: Listener = {
    type: "security",
    addresses: [house1Address, house2Address],
    update: function (message: string): void {
      console.log(message);
    },
  };

  const getUpdatedSecurityAddresses = (
    security: SecurityListener,
    addressToRemove: string
  ): string[] => {
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
}

/* 
        Task 3
    Implement the Abstract Factory pattern in the following context:
    There are two manufacturers Samsung and Apple. Each of these manufacturers produces various devices (phones, tablets, computers, etc.).
    The factory should provide the ability to create devices of any brand and any type.
*/

namespace Task3 {
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

  console.log("\nTASK3");
  createCompany(new SamsungFactory());
  createCompany(new AppleFactory());
}

// ADVANCED LEVEL
/*
        Task 4
    Implement the Decorator pattern in the following context: 
    Fast Food offers two combo sets of Cheeseburger Menu and Hamburger Menu.
    Each of these sets can be supplemented with various drinks or desserts of the buyer's choice, which changes its price.
    I received an order for two menus (Cheeseburger menu and Hamburger menu), one with juice, and the second with cola and donut.
    Help the fast food cook and display the order in the console without creating new menu types.
*/
namespace Task4 {
  type Juice = "orange_juice" | "cola" | "soda";
  type Dessert = "donut" | "ice_cream";
  type MenuType = "cheeseburger" | "hamburger";

  interface MenuExtension {
    addJuice(juice: Juice): void;
    addDessert(dessert: Dessert): void;
  }

  class Menu implements MenuExtension {
    protected menuType: MenuType;

    constructor(menuType: MenuType) {
      this.menuType = menuType;
      this.createMenu(menuType);
    }
    createMenu(menuType: MenuType): void {
      console.log(`Create menu: ${menuType}`);
    }

    addJuice(juice: Juice): void {
      console.log(`Add juice: ${juice} to menu: ${this.menuType} menu`);
    }
    addDessert(dessert: Dessert): void {
      console.log(`Add dessert: ${dessert} to menu: ${this.menuType} menu`);
    }
  }

  class MenuDecorator implements MenuExtension {
    protected wrappee: MenuExtension;

    constructor(menu: MenuExtension) {
      this.wrappee = menu;
    }

    addJuice(juice: Juice): void {
      this.wrappee.addJuice(juice);
    }
    addDessert(dessert: Dessert): void {
      this.wrappee.addDessert(dessert);
    }
  }

  class CheeseburgerMenuDecorator extends MenuDecorator {
    addJuice(juice: Juice): void {
      super.addJuice(juice);
    }

    addDessert(dessert: Dessert): void {
      super.addDessert(dessert);
    }
  }

  class HamburgerMenuDecorator extends MenuDecorator {
    addJuice(juice: Juice): void {
      super.addJuice(juice);
    }

    addDessert(dessert: Dessert): void {
      super.addDessert(dessert);
    }
  }

  console.log("\nTASK4");

  const cheeseburgerMenu = new CheeseburgerMenuDecorator(
    new Menu("cheeseburger")
  );
  const hamburgerMenu = new HamburgerMenuDecorator(new Menu("hamburger"));

  cheeseburgerMenu.addJuice("orange_juice");
  hamburgerMenu.addJuice("cola");
  hamburgerMenu.addDessert("donut");
}

/*
  Task 5
  Implement the Facade pattern in the following context:
    You have a smart home. It is filled with many devices.
    When you leave or come home, every time you repeat a lot of the same actions (on / off lights, air conditioning, music, etc.).
    Create two programmed behaviors of the smart home system - "the owner came home", "the owner left home".
*/
namespace Task5 {
  type Switches = "on" | "off";

  // Complex class
  class SmartHome {
    private lights: Switches;
    private airConditioner: Switches;
    private music: Switches;

    constructor(lights: Switches, airConditioner: Switches, music: Switches) {
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
    private smartHome = new SmartHome("off", "off", "off");

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
}

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

namespace Task6 {
  abstract class State {
    context: Context | null = null;

    setContext(context: Context) {
      this.context = context;
    }

    abstract Publish(): void;
    abstract Cancel(): void;
  }

  class WaitingForReview extends State {
    Publish(): void {
      console.log("Changing to 'review' state...");
      this.context?.transitionTo(new InReview());
    }

    Cancel(): void {}
  }

  class InReview extends State {
    // It's value should comes from outside this class or from a function in this class (like Validate():boolean)
    errorDuringReview = false;

    Publish(): void {
      if (this.errorDuringReview) {
        console.log("An error happend during validation!");
        this.Cancel();
      } else {
        console.log("Changing to 'ready for sale' state...");
        this.context?.transitionTo(new ReadyForSale());
      }
    }
    Cancel(): void {
      console.log("Going back to the initial state...");
      this.context?.transitionTo(new WaitingForReview());
    }
  }

  class ReadyForSale extends State {
    Publish(): void {
      console.log("Changing to 'published' state...");
      this.context?.transitionTo(new Published());
    }
    Cancel(): void {
      console.log("Going back to the initial state...");
      this.context?.transitionTo(new WaitingForReview());
    }
  }

  class Published extends State {
    Publish(): void {}
    Cancel(): void {}
  }

  class Context {
    state: State | null = null;

    constructor(state: State) {
      this.transitionTo(state);
    }

    transitionTo(state: State) {
      this.state = state;
      this.state.setContext(this);
    }
    Publish(): void {
      this.state?.Publish();
    }
    Cancel(): void {
      this.state?.Cancel();
    }
  }

  console.log("\nTASK6");
  const context = new Context(new WaitingForReview());
  context.Publish();
  context.Publish();
  context.Cancel();
  context.Publish();
}
