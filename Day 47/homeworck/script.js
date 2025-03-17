// Get references to the buttons and photo element
const resizeSmallBtn = document.getElementById('resizeSmall');
const resizeLargeBtn = document.getElementById('resizeLarge');
const photo = document.getElementById('myPhoto');

// Add click event listeners to the buttons
resizeSmallBtn.addEventListener('click', function() {
    // Change the width of the photo to 300px
    photo.style.width = '300px';
    // Show an alert when the photo is resized
    alert('Photo resized to 300px width!');
});

resizeLargeBtn.addEventListener('click', function() {
    // Change the width of the photo to 500px
    photo.style.width = '500px';
    // Show an alert when the photo is resized
    alert('Photo resized to 500px width!');
});