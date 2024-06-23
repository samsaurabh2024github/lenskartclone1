const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slider');
let currentIndex = 0;

function updateSliderPosition() {
    const slideWidth = slides[currentIndex].clientWidth;
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});
