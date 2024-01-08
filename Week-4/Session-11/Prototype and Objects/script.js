// Protecting the Object
const person = {
  _name: "Prashant",
  _email: "prashant@example.com",
  _age: 30,

  getAge() {
    return this._age;
  },

  setAge(newAge) {
    this._age = newAge;
  },
};

Object.defineProperty(person, "name", {
  get() {
    return this._name;
  },
  enumerable: true,
});

Object.defineProperty(person, "email", {
  get() {
    return this._email;
  },
  enumerable: true,
});

Object.defineProperty(person, "age", {
  set(newAge) {
    this._age = newAge;
  },
  enumerable: false,
});

// Testing the Person object
console.log("Person's Name:", person.name); // Read-only
console.log("Person's Email:", person.email); // Read-only
person.setAge(35); // Write-only
console.log("Person's Age:", person.getAge());

// JavaScript Prototype
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getDetails = function () {
  return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

function Car(make, model, year, numDoors) {
  Vehicle.call(this, make, model, year);
  this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getDetails = function () {
  return `${Vehicle.prototype.getDetails.call(this)}, Number of Doors: ${
    this.numDoors
  }`;
};

// Creating instances and testing methods
const vehicle = new Vehicle("Ford", "Defender", 2020);
const car = new Car("Mahindra", "Thar", 2019, 4);

console.log("Vehicle Details:", vehicle.getDetails());
console.log("Car Details:", car.getDetails());
