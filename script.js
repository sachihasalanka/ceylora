/* =========================================
   CEYLORA - SCRIPT.JS
========================================= */


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================
   MOBILE MENU
========================================= */

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");


// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.classList.add("menu-button");
menuButton.innerHTML = "☰";

navbar.appendChild(menuButton);


// Open / close menu
menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

    if (navLinks.classList.contains("mobile-active")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }

});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");
        menuButton.innerHTML = "☰";

    });

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const animatedElements = document.querySelectorAll(
    ".feature-card, .destination-card, .tour-card, .gallery-grid img, .welcome-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.querySelector(".footer-bottom p");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} CEYLORA. All Rights Reserved.`;

}


/* =========================================
   WHATSAPP BUTTON
========================================= */

const whatsappButtons =
    document.querySelectorAll(".whatsapp-btn");

whatsappButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("Opening WhatsApp...");

    });

});


/* =========================================
   DESTINATION CARD INTERACTION
========================================= */

const destinationCards =
    document.querySelectorAll(".destination-card");

destinationCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.4s ease";

    });

});


/* =========================================
   BACK TO TOP BUTTON
========================================= */

// Create button
const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.classList.add("back-to-top");

document.body.appendChild(backToTop);


// Show button after scrolling
window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("active");

    } else {

        backToTop.classList.remove("active");

    }

});


// Scroll to top
backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// CEYLORA CONTACT FORM
// SEND ENQUIRY TO WHATSAPP
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const tour = document.getElementById("tour").value;
        const date = document.getElementById("date").value;
        const message = document.getElementById("message").value.trim();

        const whatsappMessage =
`Hello CEYLORA! 👋

I would like to make a travel enquiry.

👤 Full Name: ${name}
📧 Email: ${email}
📞 Phone / WhatsApp: ${phone}
🌴 Interested In: ${tour || "Not specified"}
📅 Travel Date: ${date || "Not specified"}

💬 Message:
${message || "No additional message"}

Thank you!`;

        const whatsappURL =
    "https://wa.me/94741983737?text=" +
    encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

}