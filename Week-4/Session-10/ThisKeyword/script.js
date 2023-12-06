// Create a Person class
class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce() {
    return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}.`;
  }
}

// Create three instances of the Person class
const person1 = new Person("Ajay", 25, "male", "American");
const person2 = new Person("Karen", 30, "female", "Canadian");
const person3 = new Person("Sarah", 20, "male", "Australian");

// Call the introduce method on each instance and print the returned string to the console
console.log("Person instance 1:", person1.introduce());
console.log("Person instance 2:", person2.introduce());
console.log("Person instance 3:", person3.introduce());

// Create a Student class that inherits from the Person class
class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  study() {
    return `I am studying ${this.subject}`;
  }
}

// Create an instance of the Student class and assign values to its properties
const student1 = new Student(
  "Prashant",
  24,
  "male",
  "Indian",
  "Computer Science"
);

// Call the introduce method on the Student instance and print the returned string to the console
console.log("Student instance 1:", student1.introduce());

// Call the study method on the Student instance and print the returned string to the console
console.log("Student instance 1:", student1.study());
