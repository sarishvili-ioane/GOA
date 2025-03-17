class Student extends Person {
    constructor(name, age, grade) {
      super(name, age)
      this.grade = grade
    }
  
    study() {
      return `${this.name} is studying.`
    }
  }
  
  
  const student = new Student("Alice", 20, "A")
  console.log(student.greet())
  console.log(student.study())
  