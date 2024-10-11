class Car {
    constructor(make, model, year) {
      this.make = make
      this.model = model
      this.year = year
      this.engineRunning = false
    }
  
    startEngine() {
      if (!this.engineRunning) {
        this.engineRunning = true;
        console.log("Engine started")
      } else {
        console.log("Engine is already running")
      }
    }
  
    stopEngine() {
      if (this.engineRunning) {
        this.engineRunning = false;
        console.log("Engine stopped")
      } else {
        console.log("Engine is already off")
      }
    }
  }
  
  
  const car1 = new Car("Toyota", "Camry", 2022)
  const car2 = new Car("Honda", "Civic", 2021)
  car1.startEngine()
  car1.stopEngine()
  
  car2.startEngine()
  car2.stopEngine()
  