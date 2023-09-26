// Seleziona l'elemento del toggle del menu, l'icona del menu e il menu mobile
var menuToggle = document.getElementById("mobile-menu-toggle");
var menuIcon = menuToggle.querySelector(".menu-icon");
var mobileMenu = document.getElementById("mobile-menu");

// Aggiungi un listener al click sull'elemento del toggle del menu
menuToggle.addEventListener("click", function () {
    // Toggle della classe "active" per il menu mobile
    mobileMenu.classList.toggle("active");

    // Toggle della classe "active" per l'icona del menu (per passare da hamburger a "X")
    menuIcon.classList.toggle("active");
});

// Chiudi il menu mobile se si fa clic altrove sulla pagina
window.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("active");
        menuIcon.classList.remove("active"); // Rimuovi anche la classe "active" dall'icona
    }
});

function followMouse(event) {
    const header = document.getElementById('header');
    const mouseX = event.clientX / window.innerWidth;
    const colorStart = `rgba(255, 165, 0)`;
    const shapeSize = 0.3;
    var gradientNumber = 255*(1 - shapeSize*(mouseX - 0.5)*(mouseX - 0.5));
    const colorEnd = `rgb(55, ${gradientNumber}, 0)`;

    header.style.background = `linear-gradient(45deg, ${colorStart}, ${colorEnd})`;

}