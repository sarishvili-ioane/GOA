class CollectionManager {
    constructor() {
      this.myMap = new Map()
      this.mySet = new Set()
    }
  
   
    addToMap(key, value) {
      this.myMap.set(key, value)
    }
  
   
    removeFromMap(key) {
      if (this.myMap.has(key)) {
        this.myMap.delete(key);
      } else {
        console.log(`Key "${key}" not found in Map.`)
      }
    }
  

    addToSet(item) {
      this.mySet.add(item)
    }
  
   
    clearSet() {
      this.mySet.clear()
    }
  
  
    showMap() {
      if (this.myMap.size === 0) {
        console.log("Map is empty.")
      } else {
        console.log("Map contents:");
        this.myMap.forEach((value, key) => {
          console.log(`${key} => ${value}`)
        });
      }
    }
  
    
    showSet() {
      if (this.mySet.size === 0) {
        console.log("Set is empty.")
      } else {
        console.log("Set contents:")
        this.mySet.forEach(item => {
          console.log(item);
        });
      }
    }
  }
  

  const manager = new CollectionManager()
  
 
  manager.addToMap("name", "Alice")
  manager.addToMap("age", 25)
  manager.removeFromMap("age")
  manager.showMap();  
  

  manager.addToSet(1)
  manager.addToSet(2)
  manager.addToSet(3)
  manager.showSet()
  manager.clearSet()
  manager.showSet()
  