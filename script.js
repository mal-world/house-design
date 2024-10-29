// script.js

// Select all nav links
const navLinks = document.querySelectorAll(".nav-link");

// Function to update active class on click
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(l => l.classList.remove("active")); // Remove active class from all links
        this.classList.add("active"); // Add active class to clicked link
    });
});
