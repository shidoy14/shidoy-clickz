// ==========================================================
// SHIDOY CLICKZ
// script.js
// ==========================================================

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

// Scroll Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.style.opacity = "1";
            entry.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all .7s ease";
    observer.observe(section);
});

// Download Button
const downloadButton = document.querySelector(".main-download");

if (downloadButton) {
    downloadButton.addEventListener("click", () => {
        window.location.href = "files/Shidoy-Clickz.zip";
    });
}
