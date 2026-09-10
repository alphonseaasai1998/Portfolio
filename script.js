/* =========================================
   AASAI THAMBI D.
   Portfolio JavaScript
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    menuToggle.classList.toggle("active");
});


/*
   Close mobile menu after clicking
   a navigation link.
*/

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.classList.remove("active");

    });

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-link[href="#${sectionId}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }

    });

}

window.addEventListener("scroll", updateActiveLink);


/* =========================================
   NAVBAR BACKGROUND ON SCROLL
========================================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateNavbar);


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const animatedElements = document.querySelectorAll(
    ".about-card, .experience-card, .project-card, .resume-container, .contact-container"
);

animatedElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================
   PROJECT LINK HANDLER
========================================= */

/*
   Prevent empty "#" project links from
   jumping to the top of the page.
*/

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        if (link.getAttribute("href") === "#") {
            event.preventDefault();

            alert(
                "Add your project URL in index.html to open this project."
            );
        }

    });

});


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    updateActiveLink();
    updateNavbar();

});
