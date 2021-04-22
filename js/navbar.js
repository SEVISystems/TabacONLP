function NavbarLinksBehavior() {
    document.getElementById('nav-toggle').onclick = function () {
        console.log("NAVBAR");
        document.getElementById("nav-content").classList.toggle("hidden");
    }
    let navLinks = document.querySelectorAll('.nav-link');
    for (let i = 0, length = navLinks.length; i < length; i++) {
        navLinks[i].onclick = function () {
            document.getElementById("nav-content").classList.toggle("hidden");
        }
    }
}

function NavbarScrollBehavior() {
    let prevScrollpos = window.pageYOffset + 500;
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

document.addEventListener("DOMContentLoaded", function () {
    // Navbar behavior
    NavbarLinksBehavior();
    NavbarScrollBehavior();
});