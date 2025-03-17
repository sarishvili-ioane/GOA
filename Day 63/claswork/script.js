function compareNumbers() {
    // Get the values of the two numbers from the form
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Perform comparisons
    const isEqual = number1 === number2;
    const isNotEqual = number1 !== number2;
    const isGreaterThan = number1 > number2;
    const isLessThan = number1 < number2;
    const isGreaterOrEqual = number1 >= number2;
    const isLessOrEqual = number1 <= number2;

    // Output the results to the console
    console.log(`Is ${number1} equal to ${number2}? ${isEqual}`);
    console.log(`Is ${number1} not equal to ${number2}? ${isNotEqual}`);
    console.log(`Is ${number1} greater than ${number2}? ${isGreaterThan}`);
    console.log(`Is ${number1} less than ${number2}? ${isLessThan}`);
    console.log(`Is ${number1} greater than or equal to ${number2}? ${isGreaterOrEqual}`);
    console.log(`Is ${number1} less than or equal to ${number2}? ${isLessOrEqual}`);
}
