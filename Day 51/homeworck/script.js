// Create an object about yourself  first homeworck
let myInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    placeOfResidence: "New York",
    school: "XYZ High School"
};

// Print each property to the console
console.log("First Name:", myInfo.firstName);
console.log("Last Name:", myInfo.lastName);
console.log("Age:", myInfo.age);
console.log("Place of Residence:", myInfo.placeOfResidence);
console.log("School:", myInfo.school);







// Create objects about family members   2 homeworck
let familyMembers = [
    { firstName: "ioane", lastName: "Doe", age: 30 },
    { firstName: "saba", lastName: "Doe", age: 25 },
    { firstName: "temo", lastName: "Doe", age: 40 }
];

// Print each family member to the console
familyMembers.forEach(member => {
    console.log("First Name:", member.firstName);
    console.log("Last Name:", member.lastName);
    console.log("Age:", member.age);
    console.log("---");
});


// Object representing the task  3 homeworck
let task = {
    taskName: "Complete assignment",
    priority: "High",
    dueDate: "2024-04-15",
    completed: false
};

// Access and change the values of properties
task.taskName = "Submit report";
task.priority = "Medium";
task.dueDate = "2024-04-20";
task.completed = true;

// Print the already changed properties to the console
console.log("Task Name:", task.taskName);
console.log("Priority:", task.priority);
console.log("Due Date:", task.dueDate);
console.log("Completed:", task.completed);




// Create two identical objects with the same properties and values 4 homeworck
let obj1 = {
    firstName: "ioane",
    lastName: "sarisha",
    age: 30,
    city: "saqartvelo"
};

let obj2 = {
    firstName: "saba",
    lastName: "sarisha",
    age: 30,
    city: "china"
};

// Function to compare two objects
function compareObjects(obj1, obj2) {
    // Get the keys of the objects
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all properties and values are the same
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

// Compare the two objects
console.log("Are the objects equal?", compareObjects(obj1, obj2));




// Weather forecast object for New York City last homeworck
let weatherForecastNYC = {
    location: "saqartvelo",
    temperature: "22°C",
    timeLength: "24 hours",
    weather: "Partly cloudy",
    conditions: "Mild with a chance of showers in the afternoon"
};

// Print weather forecast details to the console
console.log("Location:", weatherForecastNYC.location);
console.log("Temperature:", weatherForecastNYC.temperature);
console.log("Time Length:", weatherForecastNYC.timeLength);
console.log("Weather:", weatherForecastNYC.weather);
console.log("Conditions:", weatherForecastNYC.conditions);