class Calculator {
    static add(a, b) {
      return a + b
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static multiply(a, b) {
      return a * b
    }
  
    static divide(a, b) {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.")
      }
      return a / b
    }
  }
  
  
  console.log(Calculator.add(5, 3))
  console.log(Calculator.subtract(5, 3))
  console.log(Calculator.multiply(5, 3))
  console.log(Calculator.divide(6, 3))
  console.log(Calculator.divide(6, 0))
  