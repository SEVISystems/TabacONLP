document.addEventListener("DOMContentLoaded", function () {

        let sections = ['law', 'conditions', 'privacy'];
        let offset = 80;

        for(let i = 0; i < sections.length; i++){
                let sectionDomElement = document.getElementById(sections[i]);
                let linkDomElement = document.getElementById(sections[i] + 'Link');

                linkDomElement.addEventListener('click', function(e){
                        e.preventDefault();
                        let offsetPosition = sectionDomElement.getBoundingClientRect().top - offset;
                        window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                        });
                }, false);

        }

});