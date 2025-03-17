// Person ობიექტი
const person = {
    firstName: "ChatGPT",
    lastName: "AI",
    age: 30,
    gender: "Male",
    occupation: "Software Developer",
    country: "USA",
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 AI Lane",
        city: "OpenAI City",
        country: "Virtual World"
    },
    greet() {  
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
    introduce() {  
        console.log(`I am ${this.firstName} ${this.lastName}, a ${this.age}-year-old ${this.occupation} from ${this.country}.`);
    }
};


Object.assign(person, {
    firstName: "ChatGPT",
    lastName: "AI",
    address: {
        street: "123 AI Lane",
        city: "OpenAI City",
        country: "Virtual World"
    }
});


const { firstName, lastName, age, gender, occupation, country, hobbies, address } = person;


const { street, city, country: addressCountry } = address;


console.log(firstName)
console.log(lastName)
console.log(age)
console.log(gender)
console.log(occupation)
console.log(country)
console.log(hobbies)
console.log(street)
console.log(city)
console.log(addressCountry)


person.greet()     
person.introduce()