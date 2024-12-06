const slidesToArr = (slides) => Array.from(slides);

const getCurrentSlide = (slides) => slidesToArr(slides).find((slide) => slide.classList.contains('active'));

const removeActiveSlides = (slide) => slide.classList.remove('active');

const handleActiveSlide = (element) => element.classList.add('active');

const handlePrevSlide = (slides, currentSlide) => {
    if (currentSlide.dataset.index !== '1') {
        handleActiveSlide(currentSlide.previousElementSibling);
        return;
    }

    handleActiveSlide(slidesToArr(slides)[slides.length - 1]);
}

const handleNextSlide = (slides, currentSlide) => {
    if (currentSlide.dataset.index !== '3') {
        handleActiveSlide(currentSlide.nextElementSibling);
        return;
    }

    handleActiveSlide(slidesToArr(slides)[0]);
}

export default function Slider(slides, arrows) {
    arrows.forEach((arrow) => arrow.addEventListener('click', (event) => {
        const currentSlide = getCurrentSlide(slides);
        removeActiveSlides(currentSlide);

        if (event.target.dataset.type === 'prev') {
            handlePrevSlide(slides, currentSlide);
            return;
        }

        handleNextSlide(slides, currentSlide)
    }));
}