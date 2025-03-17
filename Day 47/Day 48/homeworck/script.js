// Get references to the image element and buttons
const imageDisplay = document.getElementById('imageDisplay');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Array to hold image file names
const images = ['image1.jpg', 'image2.jpg'];
let currentIndex = 0; // Index of the currently displayed image

// Function to change the displayed image
function changeImage(index) {
    if (index >= 0 && index < images.length) {
        imageDisplay.src = 'images/' + images[index];
        currentIndex = index;
    }
}

// Event listener for the Previous button
prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
});

// Event listener for the Next button
nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
});