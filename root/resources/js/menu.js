/* menu.js */

// Toggle the "active" class for the mobile menu
// Select the menu toggle element, menu icon, and mobile menu
var menuToggle = document.getElementById("mobile-menu-toggle");

// Add a click listener to the menu toggle element
if (menuToggle) {
    menuToggle.addEventListener("click", function () {
        var menuIcon = menuToggle.querySelector(".menu-icon");
        var mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Close the mobile menu if clicked elsewhere on the page
    window.addEventListener("click", function (e) {
        var menuIcon = menuToggle.querySelector(".menu-icon");
        var mobileMenu = document.getElementById("mobile-menu");
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove("active");
            menuIcon.classList.remove("active"); // Also remove the "active" class from the icon
        }
    });
}
