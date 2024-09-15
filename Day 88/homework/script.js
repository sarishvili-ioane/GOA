
const hobbies = ["reading", "coding", "music"];


const person = {
    name: "ChatGPT",
    age: 30,
    occupation: "AI Assistant"
};


for (const hobby of hobbies) {
    console.log(hobby);
}


for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
