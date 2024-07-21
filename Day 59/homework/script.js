function createStyledParagraph() {
    // Prompt the user for text, color, and background color
    const text = prompt("Enter the text for the paragraph:");
    const textColor = prompt("Enter the text color (e.g., 'red' or '#ff0000'):");
    const bgColor = prompt("Enter the background color (e.g., 'blue' or '#0000ff'):");
  
    // Create a new paragraph element
    const paragraph = document.createElement("p");
    
    // Set the text content and styles of the paragraph
    paragraph.textContent = text;
    paragraph.style.color = textColor;
    paragraph.style.backgroundColor = bgColor;
    paragraph.className = "styled-paragraph";
  
    // Append the paragraph to the output div
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ''; // Clear any previous content
    outputDiv.appendChild(paragraph);
  }
  