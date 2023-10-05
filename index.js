class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}

loadPassenger(num); {
    this.passengers = num;
    if (num <= this.maxPassengers) {
        console.log('Room available')
    } else {
        console.log('No room available')
    }
}

    start(); {
        if (this.fuel > 0) {
            return this.started = true;
            console.log('engine started')
        } else {
            return this.started = false;
            console.log('engine cannot start')
        }
    }

    scheduleService(milage); {
        if (this.mileage > 30000) {
            return this.scheduleService = true;
            console.log('Service requried')
        } else {
            return this.scheduleService = false;
        } 
    }