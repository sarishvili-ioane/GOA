let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    occupation: "Software Developer",  // ახალი თვისება
    country: "USA",                    // ახალი თვისება
    hobbies: ["reading", "traveling", "coding"],  // ახალი თვისება
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    },
    introduce: function() {  
        console.log("I am " + this.firstName + " " + this.lastName + ", a " + this.age + "-year-old " + this.occupation + " from " + this.country + ".");
    }
};


console.log(person.firstName); 
console.log(person.hobbies); 
person.greet(); 
person.introduce(); 
