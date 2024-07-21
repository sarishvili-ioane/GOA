function displayWelcomeMessage() {
    // Get the values of the first and last name from the form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Display the welcome message using alert
    alert(`Welcome ${firstName} ${lastName}`);
}
