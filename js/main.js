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

function handleHowtoSectionBlocksRevealOnScroll() {
    let controller = new ScrollMagic.Controller();
    let revealElements = document.getElementsByClassName("howto-children-block");
    for (let i = 0; i < revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: i < 3 ? 35*i : 15*i,												 // start a little later
            triggerHook: 0.9,
        })
            .setClassToggle(revealElements[i], "revealed") // add class toggle
            .addTo(controller);
    }
}
function handleFeaturesSectionBlocksRevealOnScroll() {
    let controller = new ScrollMagic.Controller();
    let revealElements = document.getElementsByClassName("features-card");
    for (let i = 0; i < revealElements.length; i++) { // create a scene for each element

        setTimeout(function(){
            new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 40,												 // start a little later
                triggerHook: 0.8,
            })
                .setClassToggle(revealElements[i], "revealed") // add class toggle
                .addTo(controller);
        }, i*200);
    }
}
function handleInstallationStepsRevealOnScroll() {
    let controller = new ScrollMagic.Controller();
    let revealElements = document.getElementsByClassName("step-scroll-revealing");
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
        offset: 50,												 // start a little later
        triggerHook: 0.9,
    }).setClassToggle(elementToReveal, "revealed")
        .addTo(controller);

}

document.addEventListener("DOMContentLoaded", function () {
    NavbarScrollBehavior();
    // SCROLL MAGIC
    handleHowtoSectionBlocksRevealOnScroll();
    handleFeaturesSectionBlocksRevealOnScroll();
    handleInstallationStepsRevealOnScroll();
    handleContactRevealOnScroll();

});
