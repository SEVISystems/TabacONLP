function NavbarScrollBehavior() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-13rem";
        }
        prevScrollpos = currentScrollPos;
    }
}

function handleStepsRevealOnScroll() {
    let controller = new ScrollMagic.Controller();
    let revealElements = document.getElementsByClassName("steps-test");
    for (let i = 0; i < revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 50,												 // start a little later
            triggerHook: 0.9,
        })
            .setClassToggle(revealElements[i], "visible") // add class toggle
            .addTo(controller);
    }
}

function handleContactRevealOnScroll() {
    let controller = new ScrollMagic.Controller();
    let elementToReveal = document.getElementById("contact");

    new ScrollMagic.Scene({
        triggerElement: elementToReveal, // y value not modified, so we can use element as trigger as well
        offset: 100,												 // start a little later
        triggerHook: 0.9,
    }).setClassToggle(elementToReveal, "revealed")
        .addTo(controller);

}

document.addEventListener("DOMContentLoaded", function () {
    NavbarScrollBehavior();

    // SCROLL MAGIC ANIMATIONS
    handleStepsRevealOnScroll();
    handleContactRevealOnScroll();

});
