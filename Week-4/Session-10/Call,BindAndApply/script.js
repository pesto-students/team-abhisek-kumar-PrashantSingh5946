// Calculator class
class Calculator {
  // Adds two numbers
  add(a, b) {
    return a + b;
  }

  // Subtracts two numbers
  subtract(a, b) {
    return a - b;
  }

  // Multiplies two numbers
  multiply(a, b) {
    return a * b;
  }

  // Divides two numbers, checking for division by zero
  divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
}

// ScientificCalculator class extending Calculator
class ScientificCalculator extends Calculator {
  // Calculates the square of a number
  square(num) {
    return num * num;
  }

  // Calculates the cube of a number
  cube(num) {
    return num * num * num;
  }

  // Calculates the power of a number
  power(base, exponent) {
    return Math.pow(base, exponent);
  }
}

const sciCalc = new ScientificCalculator();

// Using call method to invoke add method from Calculator class
const sum = Calculator.prototype.add.call(sciCalc, 10, 5);
console.log("Sum:", sum);

// Using apply method to invoke subtract method from Calculator class
const difference = Calculator.prototype.subtract.apply(sciCalc, [10, 5]);
console.log("Difference:", difference);

// Using bind method to create multiplyByTwo method
const multiplyByTwo = Calculator.prototype.multiply.bind(sciCalc, 2);
console.log("Multiply by 2:", multiplyByTwo(5)); // Optional

// Using bind method to create powerOfThree method
const powerOfThree = ScientificCalculator.prototype.power.bind(sciCalc, 3);
console.log("Power of 3:", powerOfThree(2)); // Optional
