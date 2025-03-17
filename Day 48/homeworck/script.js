// JavaScript for Image Slider Functionality

const images = ["images/image1.jpg", "images/image2.jpg"];
let currentIndex = 0;

const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    slider.src = images[currentIndex];
});

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slider.src = images[currentIndex];
});
