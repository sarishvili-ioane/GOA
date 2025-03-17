class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
  }
  
  
  const person = new Person("John", 30)
  console.log(person.greet())
  