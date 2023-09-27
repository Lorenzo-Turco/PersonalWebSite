/* script.js */

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
    if (theme === 'dark') {
        document.body.classList.toggle('dark-theme');
    }
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

function darkModeManagement(isSwitch) {
    if(isSwitch) {
        if (document.body.classList.contains('dark-theme')) {
            sessionStorage.setItem('theme', 'light');
            lightMode();
        } else {
            sessionStorage.setItem('theme', 'dark');
            darkMode();
        }
    } else {
        if (document.body.classList.contains('dark-theme')) {
            darkMode();
        } else {
            lightMode();
        }
    }
}

function lightMode() {
    document.body.classList.remove('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeToggle.style.backgroundColor = '#6ab2ff'; // Sfondo blu per tema diurno
    themeToggle.style.color = '#e7e7e7'; // Testo bianco per tema diurno
    containerTheme.style.background = `linear-gradient(to right, #e5e5e5, rgb(255, 165, 0))`;
    containerTheme.style.color = '#333'; // Cambia il colore del testo per tema notturno
    headerTheme.style.background = `linear-gradient(45deg, rgb(255, 165, 0), rgb(55, 255, 0))`;
    headerTheme.style.color = '#333'; // Cambia il colore del testo per tema notturno
    if(subsectionsTheme) {
        subsectionsTheme.style.background = '#6bc4ffd8';
        subsectionItems.forEach((item) => {
            item.style.color = '#333';
        });
    }
}

function darkMode() {
    document.body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    themeToggle.style.backgroundColor = '#002eff'; // Sfondo giallo per tema notturno
    themeToggle.style.color = '#333'; // Cambia il colore del testo per tema notturno
    containerTheme.style.background = `linear-gradient(to right, #818181, rgb(165, 100, 100))`;
    containerTheme.style.color = '#e7e7e7'; // Testo bianco per tema diurno
    headerTheme.style.background = `linear-gradient(45deg, rgb(165, 100, 100), rgb(255, 100, 100))`;
    headerTheme.style.color = '#e7e7e7'; // Cambia il colore del testo per tema notturno
    if(subsectionsTheme) {
        subsectionsTheme.style.background = '#209700d8';
        subsectionItems.forEach((item) => {
            item.style.color = '#e7e7e7';
        });
    }
}