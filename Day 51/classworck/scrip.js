// Create the first object (myInfo)
let myInfo = {
    name: 'io',
    surname: 'sarishvili',
    age: 90,
    affiliation: 'Company A'
};

// Create the second object (friendInfo) with the same initial information
let friendInfo = {
    name: 'John',
    surname: 'grzelidze',
    age: 30,
    affiliation: 'Company A'
};

// Change information in myInfo
myInfo.name = 'Jane';
myInfo.surname = 'sms';
myInfo.age = 25;

// Change information in friendInfo
friendInfo.name = 'David';
friendInfo.surname = 'lebron';
friendInfo.age = 35;

// Print specific information in the console
console.log('My Name:', myInfo.name);
console.log('My Surname:', myInfo.surname);
console.log('My Age:', myInfo.age);

console.log('Friend\'s Name:', friendInfo.name);
console.log('Friend\'s Surname:', friendInfo.surname);
console.log('Friend\'s Age:', friendInfo.age);