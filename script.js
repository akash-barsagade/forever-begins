// ==========================================
// Forever Begins
// Version 1.0
// ==========================================

// Hide loader after page loads

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2000);

});

// Smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Wedding Countdown

const weddingDate = new Date("November 14, 2026 00:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        clearInterval(countdown);

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const dayEl = document.getElementById("days");
    const hourEl = document.getElementById("hours");
    const minuteEl = document.getElementById("minutes");
    const secondEl = document.getElementById("seconds");

    if (dayEl) dayEl.textContent = days;
    if (hourEl) hourEl.textContent = hours;
    if (minuteEl) minuteEl.textContent = minutes;
    if (secondEl) secondEl.textContent = seconds;

}, 1000);

// ==========================================
// Scroll Reveal Animation
// ==========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".timeline-item, .event-card, .gallery-grid img, .gallery-featured, .time-box, .letter-card, .detail-card"
)

.forEach(el => observer.observe(el));

// ==========================================
// Gallery Lightbox
// ==========================================

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const closeLightbox = document.querySelector(".close-lightbox");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImage = 0;

galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentImage = index;

        lightbox.style.display = "flex";

        lightboxImage.src = galleryImages[currentImage].src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

nextButton.addEventListener("click", (e) => {

    e.stopPropagation();

    currentImage++;

    if(currentImage >= galleryImages.length){

        currentImage = 0;

    }

    lightboxImage.src = galleryImages[currentImage].src;

});

prevButton.addEventListener("click", (e) => {

    e.stopPropagation();

    currentImage--;

    if(currentImage < 0){

        currentImage = galleryImages.length - 1;

    }

    lightboxImage.src = galleryImages[currentImage].src;

});

document.addEventListener("keydown", (e)=>{

    if(lightbox.style.display !== "flex") return;

    if(e.key === "Escape"){

        lightbox.style.display = "none";

    }

    if(e.key === "ArrowRight"){

        nextButton.click();

    }

    if(e.key === "ArrowLeft"){

        prevButton.click();

    }

});

// ==========================================
// Mouse Glow
// ==========================================

const hero = document.getElementById("hero");
const mouseGlow = document.querySelector(".mouse-glow");

hero.addEventListener("mousemove", (e) => {

    const rect = hero.getBoundingClientRect();

    mouseGlow.style.left = (e.clientX - rect.left) + "px";

    mouseGlow.style.top = (e.clientY - rect.top) + "px";

});

// ==========================================
// Timeline Progress Animation
// ==========================================

const timeline = document.querySelector(".timeline");
const timelineProgress = document.querySelector(".timeline-progress");

window.addEventListener("scroll", () => {

    if (!timeline || !timelineProgress) return;

    const rect = timeline.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    const progress =
        Math.min(
            Math.max(
                (windowHeight - rect.top) /
                (rect.height + windowHeight),
                0
            ),
            1
        );

    timelineProgress.style.height =
        (progress * rect.height) + "px";

});

// ==========================================
// Navbar Scroll Effect
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// ==========================================
// Active Navigation Highlight
// ==========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
navLinks[0].classList.add("active");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// Mobile Navigation
// ==========================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        nav.classList.remove("active");

    });

});
