let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};


console.log(person.firstName)
console.log(person.age)
person.greet();
