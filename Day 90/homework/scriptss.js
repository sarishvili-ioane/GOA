// არსებული person ობიექტი
let person = {
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
    }
};

// დესტრუქცია person ობიექტის
let { firstName, lastName, age, gender, occupation, country, hobbies, address } = person;

// მისამართის ობიექტის დესტრუქცია ცალკე
let { street, city, country: addressCountry } = address; // დავარქვით addressCountry რომ არ დაემთხვეს ზედა country ცვლადს

// შედეგების გამოყენება
console.log(firstName); // გამოაქვს: ChatGPT
console.log(lastName);  // გამოაქვს: AI
console.log(age);       // გამოაქვს: 30
console.log(gender);    // გამოაქვს: Male
console.log(occupation); // გამოაქვს: Software Developer
console.log(country);   // გამოაქვს: USA
console.log(hobbies);   // გამოაქვს: ["reading", "traveling", "coding"]
console.log(street);    // გამოაქვს: 123 AI Lane
console.log(city);      // გამოაქვს: OpenAI City
console.log(addressCountry); // გამოაქვს: Virtual World
