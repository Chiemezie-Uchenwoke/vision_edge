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
