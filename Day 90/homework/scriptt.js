let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    occupation: "Software Developer",
    country: "USA",
    hobbies: ["reading", "traveling", "coding"],
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    },
    introduce: function() {
        console.log("I am " + this.firstName + " " + this.lastName + ", a " + this.age + "-year-old " + this.occupation + " from " + this.country + ".");
    }
};

// ახალი ინფორმაცია Object.assign() მეთოდით
Object.assign(person, {
    firstName: "ChatGPT",
    lastName: "AI",
    address: {
        street: "123 AI Lane",
        city: "OpenAI City",
        country: "Virtual World"
    }
});

// განახლებული ობიექტის გამოყენება
console.log(person.firstName); // გამოაქვს: ChatGPT
console.log(person.lastName);  // გამოაქვს: AI
console.log(person.address);   // გამოაქვს: {street: "123 AI Lane", city: "OpenAI City", country: "Virtual World"}
