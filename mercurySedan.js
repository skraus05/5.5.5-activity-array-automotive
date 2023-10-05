//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }


    loadPassenger(num) {
        this.passengers = num;
        if (num <= this.maxPassengers) {
            console.log('Room available')
        } else {
            console.log('No room available')
        }
    }

    //start() {
    //if (this.fuel > 0) {
    //return this.started = true;
    //console.log('engine started')
    //} else {
    //return this.started = false;
    //onsole.log('engine cannot start')
    //}


    service(milage) {
        if (this.mileage > 30000) {
            console.log('Service requried')
            return this.scheduleService = true;
        } else {
            console.log('No service required')
            return this.scheduleService = false;
        }
    }
}

let carObject = new Car ('ford', 'fusion', '2016', 'white', 120000)
console.log(carObject);
carObject.start();
carObject.loadPassenger(3);
carObject.service(120000);


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
