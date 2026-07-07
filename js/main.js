/**
 * SB Nexa Global - Core UI Script interactions
 */
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    
    if (window.scrollY > 60) {
        navbar.style.background = "#081f3f";
        navbar.style.padding = "10px 0";
        navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.25)";
    } else {
        navbar.style.background = "rgba(13, 43, 82, 0.95)";
        navbar.style.padding = "15px 0";
        navbar.style.boxShadow = "none";
    }
});
