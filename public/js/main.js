// Mobile Toggling
const mobileToggler = document.getElementById("mobile-toggler");
const dropDown = document.getElementById("dropdown");
mobileToggler.addEventListener("click", () => {
    dropDown.classList.toggle("show");
});

// Hero - Add Background Image
document.addEventListener("DOMContentLoaded", () => {
    const heroContainer = document.getElementById("hero");
    const heroImage = './images/bg6.jpg';
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

// About Us - Mission and Vision
const callMissionAndVision = () => {
    let ourMission = document.getElementById("mission");
    let ourVision = document.getElementById("vision");

    if (ourMission.style.display === "none"){
        ourMission.style.display = "flex";
        ourVision.style.display = "none";
    }
    else{
        ourVision.style.display = "flex";
        ourMission.style.display = "none";
    } 
}

setInterval(callMissionAndVision, 6000);
document.getElementById("vision").style.display = "none";

// Add Background image to our mission parent
/* document.addEventListener("DOMContentLoaded", () => {
    const ourMissionParent = document.getElementById("our-mission");
    const missionImage = "./images/bg2.jpg";

    ourMissionParent.style.backgroundImage = `url("${missionImage}")`;
    ourMissionParent.style.backgroundSize = "cover";
    ourMissionParent.style.backgroundPosition = "center";
}); */

// About Us Button Click
const aboutUsButton = document.getElementById("aboutbtn");
aboutUsButton.addEventListener("click", () => {
    window.location.href = "./index.html#about"
});

// Contact us today button
const contactUsToday = document.getElementById("goto-contact");
contactUsToday.addEventListener("click", () => {
    location.href = "./index.html#contact";
});

// Get Started Button 
const getStartedButton = document.getElementById("get-started");
getStartedButton.addEventListener("click", () => {
    location.href = "./index.html#services";
});

// Get Started Mobile Button
const getStartedButtonMobile = document.getElementById("mobile-get-started");
getStartedButtonMobile.addEventListener("click", () => {
    location.href = "./index.html#services";
});