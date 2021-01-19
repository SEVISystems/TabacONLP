addEventListener("load", () => { // "load" is safe but "DOMContentLoaded" starts earlier
    let index = 0;
    let indexPhone = 0;
    const slides = document.querySelectorAll(".slides");
    const slidesPhone = document.querySelectorAll(".slides-phone");
    const classHide = "slides-hidden", count = slides.length;
    nextSlide();
    nextSlidePhone();

    function nextSlide() {
        slides[(index > count ? index = 0 : index++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 10000);
    }

    function nextSlidePhone() {

        slidesPhone[(indexPhone > count ? indexPhone = 0 : indexPhone++) % count].classList.add(classHide);
        slidesPhone[indexPhone % count].classList.remove(classHide);
        setTimeout(nextSlidePhone, 10000);
    }
});