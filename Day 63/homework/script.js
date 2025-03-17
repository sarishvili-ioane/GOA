function registerUser() {
    // Get the form values
    const id = document.getElementById('id').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const accountType = document.getElementById('accountType').value;

    // Create a user object
    const user = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        accountType: accountType
    };

    // Log the user information to the console
    console.log('User Registered:', user);
}
