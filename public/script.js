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
