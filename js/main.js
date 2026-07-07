/**
 * Dynamic light navbar scroll effects
 */
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 30px rgba(13, 43, 82, 0.08)";
        navbar.style.padding = "10px 0";
        navbar.style.background = "#ffffff";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.padding = "15px 0";
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
    }
});
