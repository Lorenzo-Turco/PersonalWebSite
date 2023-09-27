/* menu.js */

// Toggle della classe "active" per il menu mobile// Seleziona l'elemento del toggle del menu, l'icona del menu e il menu mobile
var menuToggle = document.getElementById("mobile-menu-toggle");

// Aggiungi un listener al click sull'elemento del toggle del menu
if(menuToggle) {
    menuToggle.addEventListener("click", function () {
        var menuIcon = menuToggle.querySelector(".menu-icon");
        var mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Chiudi il menu mobile se si fa clic altrove sulla pagina
    window.addEventListener("click", function (e) {
        var menuIcon = menuToggle.querySelector(".menu-icon");
        var mobileMenu = document.getElementById("mobile-menu");
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove("active");
            menuIcon.classList.remove("active"); // Rimuovi anche la classe "active" dall'icona
        }
    });
}
