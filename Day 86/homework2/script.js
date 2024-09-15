// Selecting the button element
const button = document.getElementById('colorButton');

// Function to change button text and color on click
button.addEventListener('click', () => {
    button.textContent = 'Clicked!';
    button.style.backgroundColor = '#28a745';
});

// Function to reset button text and color on mouseout
button.addEventListener('mouseout', () => {
    button.textContent = 'Click Me!';
    button.style.backgroundColor = '#007BFF';
});

// Function to change button text on keypress (example with Enter key)
document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        button.textContent = 'Key Pressed!';
        button.style.backgroundColor = '#dc3545';
    }
});
