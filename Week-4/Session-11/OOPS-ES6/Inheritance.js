class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

const myCar = new Car("Toyota", "Camry", 2022, "Silver", 5);
console.log(myCar);
myCar.drive();

const myRideShareCar = new RideShareCar(
  "Honda",
  "Civic",
  2021,
  "Black",
  4,
  true
);
console.log(myRideShareCar);
myRideShareCar.drive();
