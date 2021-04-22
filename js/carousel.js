function PcMockupCarouselControl() {


    const mockPC = document.getElementById("mockPC");
    const skipPhotoPC = document.getElementById("skipPhotoPC");
    const previousPhotoPC = document.getElementById("previousPhotoPC");
    const animationPC = document.getElementById("progressBar");
    let timerPC = 0
    let picList = ["" +
    "img/screenshots/screenshot_home.jpg",
        "img/screenshots/screenshot_card.jpg",
        "img/screenshots/screenshot_list.jpg",
        "img/screenshots/screenshot_select.jpg",
        "img/screenshots/screenshot_pay.jpg",
    ];
    let currentIndex = 4;
    let pic = document.getElementById("screenshotPC");

    function autoNext() {
        nextPic();
        timerPC = setTimeout(autoNext, 5000);
    }

    function resetAnimations() {
        pic.classList.remove("fadeImageStart");
        animationPC.classList.remove("progress-value")
        animationPC.offsetWidth;
        pic.offsetLeft;
        animationPC.classList.add("progress-value")
        pic.classList.add("fadeImageStart");
    }

    function nextPic() {
        clearTimeout(timerPC);
        currentIndex++;
        pic.src = picList[(currentIndex) % picList.length];
        resetAnimations();
        clearTimeout(timerPC);
    }

    function previousPic() {
        clearTimeout(timerPC);
        currentIndex+=4;
        pic.src = picList[(currentIndex) % picList.length];
        resetAnimations();
        clearTimeout(timerPC);

    }

    autoNext();

    mockPC.onclick = function () {
        nextPic();
        timerPC = setTimeout(autoNext, 5000);
    };
    skipPhotoPC.onclick = function () {
        nextPic();
        timerPC = setTimeout(autoNext, 5000);
    };
    previousPhotoPC.onclick = function () {
        previousPic();
        timerPC = setTimeout(autoNext, 5000);
    };
}

function MobileMockupCarouselControl() {

    const mockupMobile = document.getElementById("mockup-mobile");
    const skipPhotoMobile = document.getElementById("skipPhotoMobile");
    const previousPhotoMobile = document.getElementById("previousPhotoMobile");
    const animationMobile = document.getElementById("progressBarPhone");
    let timerMobile = 0
    let picList = [

        "img/screenshots/screenshot_home.jpg",
        "img/screenshots/screenshot_card.jpg",
        "img/screenshots/screenshot_list.jpg",
        "img/screenshots/screenshot_select.jpg",
        "img/screenshots/screenshot_pay.jpg",
    ];
    let currentIndex = 4;
    let pic = document.getElementById("screenshotMobile");

    function autoNext() {
        nextPic();
        timerMobile = setTimeout(autoNext, 5000);
    }

    function resetAnimations() {
        pic.classList.remove("fadeImageStart");
        animationMobile.classList.remove("progress-value")
        animationMobile.offsetWidth;
        pic.offsetLeft;
        animationMobile.classList.add("progress-value")
        pic.classList.add("fadeImageStart");
    }

    function nextPic() {
        clearTimeout(timerMobile);
        currentIndex++;
        pic.src = picList[(currentIndex) % picList.length];
        resetAnimations();
        clearTimeout(timerMobile);
    }

    function previousPic() {
        clearTimeout(timerMobile);
        currentIndex += 4;
        pic.src = picList[(currentIndex) % picList.length];
        resetAnimations();
        clearTimeout(timerMobile);
    }

    autoNext();

    mockupMobile.onclick = function () {
        nextPic();
        timerMobile = setTimeout(autoNext, 5000);
    };
    skipPhotoMobile.onclick = function () {
        nextPic();
        timerMobile = setTimeout(autoNext, 5000);
    };
    previousPhotoMobile.onclick = function () {
        previousPic();
        timerMobile = setTimeout(autoNext, 5000);
    };
}


document.addEventListener("DOMContentLoaded", function () {
    // Mobile mockup carousel behavior
    PcMockupCarouselControl();
    MobileMockupCarouselControl();
});