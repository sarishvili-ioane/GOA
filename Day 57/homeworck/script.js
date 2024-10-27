function changeDivStyles() {
    // Get input values
    let color = document.getElementById("colorInput").value;
    let width = document.getElementById("widthInput").value;
    let height = document.getElementById("heightInput").value;

    // Get reference to the div element
    let myDiv = document.getElementById("myDiv");

    // Change styles of the div element
    myDiv.style.backgroundColor = color;
    myDiv.style.width = width + "px";
    myDiv.style.height = height + "px";
}