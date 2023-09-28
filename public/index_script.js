/* index_script.js */

const currentPage = window.location.pathname.split("/").pop().split(".")[0];

// Chiamare la funzione all'avvio della pagina
window.addEventListener('DOMContentLoaded', function() {
    setThemeFromSessionStorage(); // Applica il tema memorizzato immediatamente
});

var themeToggle = document.getElementById('theme-toggle');
var themeIcon = document.getElementById('theme-icon');

// Funzione per impostare il tema in base a sessionStorage
function setThemeFromSessionStorage() {                                                                   
    const theme = sessionStorage.getItem('theme');
    if(theme == null) sessionStorage.setItem('theme', 'light');
    darkModeManagement(false);
}

// Aggiungi un gestore di eventi al pulsante
themeToggle.addEventListener('click', () => {
    darkModeManagement(true);
});

var headerTheme = document.getElementById('header'+currentPage);
var containerTheme = document.getElementById('container'+currentPage);
var subsectionsTheme = document.getElementById('subsections');
var subsectionItems = document.querySelectorAll('.subsections ul li a');
var subsectionsMobileTheme = document.getElementById('mobile-menu');
var subsectionMobileItems = document.querySelectorAll('.mobile-menu ul li a');
var menuTextMobileTheme = document.querySelector('.menu-text');
var barMobileItems = document.querySelectorAll('.bar');

const tresholdX = 768;

function darkModeManagement(isSwitch) {
    if(window.innerWidth <= tresholdX) {
        if(subsectionsTheme) {
            subsectionsTheme.style.background = '#00000000';
        }
    }
    const theme = sessionStorage.getItem('theme');
    if(isSwitch) {
        if (theme === 'dark') {
            lightMode();
        } else {
            darkMode();
        }
    } else {
        if (theme === 'dark') {
            darkMode();
        } else {
            lightMode();
        }
    }
}

function lightMode() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    themeToggle.style.backgroundColor = '#6ab2ff'; // Sfondo blu per tema diurno
    themeToggle.style.color = '#e7e7e7'; // Testo bianco per tema diurno
    containerTheme.style.background = `linear-gradient(to right, #e5e5e5, rgb(255, 165, 0))`;
    containerTheme.style.color = '#333'; // Cambia il colore del testo per tema notturno
    headerTheme.style.background = `linear-gradient(45deg, rgb(255, 165, 0), rgb(55, 255, 0))`;
    headerTheme.style.color = '#333'; // Cambia il colore del testo per tema notturno
    if(window.innerWidth > tresholdX) {
        if(subsectionsTheme) {
            subsectionsTheme.style.background = '#6bc4ffd8';
            subsectionItems.forEach((item) => {
                item.style.color = '#333';
            });
        }
    } else {
        if(subsectionsMobileTheme) {
            subsectionsMobileTheme.style.background = '#6bc4ffd8';
            if(subsectionItems) {
                subsectionItems.forEach((item) => {
                    item.style.color = '#333';
                });
            }
        }
        if(menuTextMobileTheme) {
            menuTextMobileTheme.style.color = '#333';
        }
        if(barMobileItems) {
            barMobileItems.forEach((item) => {
                item.style.background = '#333';
            });
        }
    }
    sessionStorage.setItem('theme', 'light');
}

function darkMode() {
    if (!document.body.classList.contains('dark-theme')) {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    themeToggle.style.backgroundColor = '#002eff'; // Sfondo giallo per tema notturno
    themeToggle.style.color = '#333'; // Cambia il colore del testo per tema notturno
    containerTheme.style.background = `linear-gradient(to right, #818181, rgb(165, 100, 100))`;
    containerTheme.style.color = '#e7e7e7'; // Testo bianco per tema diurno
    headerTheme.style.background = `linear-gradient(45deg, rgb(165, 100, 100), rgb(100, 120, 150))`;
    headerTheme.style.color = '#e7e7e7'; // Cambia il colore del testo per tema notturno
    if(window.innerWidth > tresholdX) {
        if(subsectionsTheme) {
            subsectionsTheme.style.background = '#6aa55ad8';
            subsectionItems.forEach((item) => {
                item.style.color = '#e7e7e7';
            });
        }
    } else {
        if(subsectionsMobileTheme) {
            subsectionsMobileTheme.style.background = '#6aa55ad8';
            if(subsectionItems) {
                subsectionItems.forEach((item) => {
                    item.style.color = '#e7e7e7';
                });
            }
        }
        if(menuTextMobileTheme) {
            menuTextMobileTheme.style.color = '#e7e7e7';
        }
        if(barMobileItems) {
            barMobileItems.forEach((item) => {
                item.style.background = '#e7e7e7';
            });
        }
    }
    sessionStorage.setItem('theme', 'dark');
}
