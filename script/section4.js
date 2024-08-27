// Section 4 Carousel Code
let leftSlideIndex = 0;
let rightSlideIndex = 0;

showLeftSlides();
showRightSlides();

function plusLeftSlides(n) {
    leftSlideIndex += n;
    showLeftSlides();
}

function showLeftSlides() {
    const leftSlides = document.querySelectorAll(".carousel-container:first-child .slide");

    if (leftSlideIndex >= leftSlides.length) {
        leftSlideIndex = 0;
    } else if (leftSlideIndex < 0) {
        leftSlideIndex = leftSlides.length - 1;
    }

    leftSlides.forEach(slide => slide.style.display = "none");
    leftSlides[leftSlideIndex].style.display = "block";
}

function plusRightSlides(n) {
    rightSlideIndex += n;
    showRightSlides();
}

function showRightSlides() {
    const rightSlides = document.querySelectorAll(".carousel-container:last-child .slide");

    if (rightSlideIndex >= rightSlides.length) {
        rightSlideIndex = 0;
    } else if (rightSlideIndex < 0) {
        rightSlideIndex = rightSlides.length - 1;
    }

    rightSlides.forEach(slide => slide.style.display = "none");
    rightSlides[rightSlideIndex].style.display = "block";
}

// Automatic slideshow for left carousel
function autoLeftSlides() {
    plusLeftSlides(1);
    setTimeout(autoLeftSlides, 3000); // Change image every 3 seconds
}

// Automatic slideshow for right carousel
function autoRightSlides() {
    plusRightSlides(1);
    setTimeout(autoRightSlides, 3000); // Change image every 3 seconds
}

// Start automatic slideshows
autoLeftSlides();
autoRightSlides();