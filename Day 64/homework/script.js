// Profile data
const profile = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    dob: '1994-01-15'
};

// Set profile data to the HTML elements
document.getElementById('firstName').textContent = profile.firstName;
document.getElementById('lastName').textContent = profile.lastName;
document.getElementById('age').textContent = profile.age;
document.getElementById('dob').textContent = profile.dob;
