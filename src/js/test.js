// Mobile Toggling
const mobileToggler = document.getElementById("mobile-toggler");
const dropDown = document.getElementById("dropdown");
mobileToggler.addEventListener("click", () => {
    dropDown.classList.toggle("show");
});

// Hero - Add Background Image
document.addEventListener("DOMContentLoaded", () => {
    const heroContainer = document.getElementById("hero");
    const heroImage = '../src/assets/images/Hero-Image.jpg';
    heroContainer.style.backgroundImage = `url('${heroImage}')`;
    heroContainer.style.backgroundSize = "cover";
    heroContainer.style.backgroundPosition = "center";
});


// Scroll to top
const scrollToTopButton = document.getElementById("scroll-top");

// Add Event Listener to the window to show or hide the scroll to top button above 100vh
window.addEventListener("scroll", () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition > window.innerHeight){
        scrollToTopButton.style.display = "block";
    }
    else {
        scrollToTopButton.style.display = "none";
    }
});

// Add event listener to the scroll to top button to move to the top
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});