function performOperations() {
    // Prompt the user to enter the first number
    const num1 = parseFloat(prompt("Enter the first number:"));
    
    // Prompt the user to enter the second number
    const num2 = parseFloat(prompt("Enter the second number:"));
    
    // Check if the entered values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    // Perform arithmetic operations
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : "Division by zero is not allowed";

    // Print the results to the console
    console.log(`Addition: ${num1} + ${num2} = ${addition}`);
    console.log(`Subtraction: ${num1} - ${num2} = ${subtraction}`);
    console.log(`Multiplication: ${num1} * ${num2} = ${multiplication}`);
    console.log(`Division: ${num1} / ${num2} = ${division}`);
}
