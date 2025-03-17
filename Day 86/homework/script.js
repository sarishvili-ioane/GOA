const images = [
    { src: "image1.jpg", caption: "Caption for image 1" },
    { src: "image2.jpg", caption: "Caption for image 2" },
    { src: "image3.jpg", caption: "Caption for image 3" }
];

let currentIndex = 0;

const imageElement = document.getElementById('slider-image');
const captionElement = document.getElementById('caption');

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

function updateSlider() {
    imageElement.src = images[currentIndex].src;
    captionElement.textContent = images[currentIndex].caption;
}

// Initial load
updateSlider();
