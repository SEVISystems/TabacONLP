
function NavbarScrollBehavior(){
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-13rem";
        }
        prevScrollpos = currentScrollPos;
    }
}

document.addEventListener("DOMContentLoaded", function() {
   NavbarScrollBehavior();
});
