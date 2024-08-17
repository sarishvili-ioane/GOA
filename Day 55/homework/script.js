document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    // Get values of all inputs
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;

    // Print the values to the console
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Age: " + age);
    console.log("City: " + city);
});
