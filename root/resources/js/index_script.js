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

var headerTheme = document.getElementById('header'+(currentPage ? currentPage : 'index'));
var containerTheme = document.getElementById('container'+(currentPage ? currentPage : 'index'));
var subsectionsTheme = document.getElementById('subsections');
var subsectionItems = document.querySelectorAll('.subsections ul li a');
var subsectionsMobileTheme = document.getElementById('mobile-menu');
var subsectionMobileItems = document.querySelectorAll('.mobile-menu ul li a');
var menuTextMobileTheme = document.querySelector('.menu-text');
var barMobileItems = document.querySelectorAll('.bar');
var tableTheme = document.querySelector('table');

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

const backgroundLightColor = '#6bc4ffd8';
const itemLightColor = '#333';
const backgroundDarkColor = '#6aa55ad8';
const itemDarkColor = '#e7e7e7';

function lightMode() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    themeToggle.style.backgroundColor = '#6ab2ff'; // Sfondo blu per tema diurno
    themeToggle.style.color = itemDarkColor; // Testo bianco per tema diurno
    containerTheme.style.background = `linear-gradient(to right, #e5e5e5, rgb(255, 165, 0))`;
    containerTheme.style.color = itemLightColor; // Cambia il colore del testo per tema notturno
    headerTheme.style.background = `linear-gradient(45deg, rgb(255, 165, 0), rgb(55, 255, 0))`;
    headerTheme.style.color = itemLightColor; // Cambia il colore del testo per tema notturno
    if(tableTheme) {
        tableTheme.style.background = `linear-gradient(to bottom, #d59a07, #f6d30d)`;
        tableTheme.style.color = itemLightColor;
    }
    if(window.innerWidth > tresholdX) {
        if(subsectionsTheme) {
            subsectionsTheme.style.background = backgroundLightColor;
            subsectionItems.forEach((item) => {
                item.style.color = itemLightColor;
            });
        }
    } else {
        if(subsectionsMobileTheme) {
            subsectionsMobileTheme.style.background = backgroundLightColor;
            if(subsectionMobileItems) {
                subsectionMobileItems.forEach((item) => {
                    item.style.color = itemLightColor;
                });
            }
        }
        if(menuTextMobileTheme) {
            menuTextMobileTheme.style.color = itemLightColor;
        }
        if(barMobileItems) {
            barMobileItems.forEach((item) => {
                item.style.background = itemLightColor;
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
    themeToggle.style.color = itemLightColor; // Cambia il colore del testo per tema notturno
    containerTheme.style.background = `linear-gradient(to right, #818181, rgb(165, 100, 100))`;
    containerTheme.style.color = itemDarkColor; // Testo bianco per tema diurno
    headerTheme.style.background = `linear-gradient(45deg, rgb(165, 100, 100), rgb(100, 120, 150))`;
    headerTheme.style.color = itemDarkColor; // Cambia il colore del testo per tema notturno
    if(tableTheme) {
        tableTheme.style.background = `linear-gradient(to bottom, #d59a07, #655600)`;
        tableTheme.style.color = itemDarkColor;
    }
    if(window.innerWidth > tresholdX) {
        if(subsectionsTheme) {
            subsectionsTheme.style.background = backgroundDarkColor;
            subsectionItems.forEach((item) => {
                item.style.color = itemDarkColor;
            });
        }
    } else {
        if(subsectionsMobileTheme) {
            subsectionsMobileTheme.style.background = backgroundDarkColor;
            if(subsectionMobileItems) {
                subsectionMobileItems.forEach((item) => {
                    item.style.color = itemDarkColor;
                });
            }
        }
        if(menuTextMobileTheme) {
            menuTextMobileTheme.style.color = itemDarkColor;
        }
        if(barMobileItems) {
            barMobileItems.forEach((item) => {
                item.style.background = itemDarkColor;
            });
        }
    }
    sessionStorage.setItem('theme', 'dark');
}
