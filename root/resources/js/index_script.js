/* index_script.js */

const currentPage = window.location.pathname.split("/").pop().split(".")[0];

// Object for multilingual text translations
var translations = {
    "ita": {
        "home": "Home",
        "welcome": "Ciao! Sono Lorenzo Turco e questa è la mia Home Page. Questo sito è una versione in pre-alfa e seguiranno aggiornamenti!",
        "warning": "Attenzione!",
        "warning-initial-popup": "Possibili bug di navigazione in pre-alfa",
        "change-logs": "Change Logs",
        "about-me": "Su di Me",
        "code": "Codice",
        "videogame": "Videogame",
        "resources": "Risorse",
        "wip": "Lavori in corso...",
        "code-home-page": "Qui puoi trovare le mie repository pubbliche, come codici Python (simulazioni finanziarie e di fisica), Salesforce, ecc...",
        "videogame-home-page": "Progetto di Videogame in corso... Sto ancora imparando Unreal Engine 4",
        "resources-home-page": "Qui puoi trovare i link ai miei documenti/certificazioni/CV, ecc...",
        "change-logs-home-page": "Qui puoi trovare lo storico delle versioni del sito",
        "change-logs-version-tag": "Versione",
        "change-logs-date-tag": "Data",
        "change-logs-desc-tag": "Descrizione",
        "python-tag": "Pyhton",
        "physics-tag": "Fisica",
        "finance-tag": "Finanza",
        "physics-sim-gr-earth-tag": "Simulazioni di fisica - Moto della Terra in GR",
        "physics-sim-gr-earth-desc": "Simulazione della traiettoria della Terra intorno al Sole, con una correzzione enfatizzata di Relatività Generale",
        "finance-lstm-sims-tag": "Predizioni LSTM di prezzo di asset finanziari",
        "finance-lstm-sims-desc": "Predizione di prezzo di asset nel tempo in un modello LSTM",
        "montecarlo-sims-tag": "Simulazioni Montecarlo di Portfogli",
        "montecarlo-sims-desc": "Simulazione Montecarlo per ottimizzare l'allocazione di asset",
        "resources-github-tag": "Documenti GitHub",
        "resources-cv-tag": "CV",
        "resources-certifications-tag": "Certificazioni",
        "log-desc-v-0-6-0-a": "Aggiunto selettore della lingua",
        "log-desc-v-0-5-0-a": "Aggiunte sezioni, link e contenuti",
        "log-desc-v-0-4-0-a": "Migliorati nomi e sezioni",
        "log-desc-v-0-3-2-a": "Corretti stili della dark mode e navigazione mobile",
        "log-desc-v-0-3-1-a": "Aggiunto popup di avviso e corretti problemi della dark mode",
        "log-desc-v-0-3-0-a": "Aggiunta dark mode e migliorati icone social",
        "log-desc-v-0-2-1-a": "Migliorati grafica del menù desktop e mobile",
        "log-desc-v-0-2-0-a": "Migliorato menù mobile",
        "log-desc-v-0-1-0-a": "Prima struttura"
    },
    "eng": {
        "home": "Home",
        "welcome": "Hi! I'm Lorenzo Turco and this is my Home Page. This is a pre-alpha site version and updates will follow!",
        "warning": "Warning!",
        "warning-initial-popup": "Possible pre-alpha navigation bugs",
        "change-logs": "Change Logs",
        "about-me": "About Me",
        "code": "Code",
        "videogame": "Videogame",
        "resources": "Resources",
        "wip": "Work in progress...",
        "code-home-page": "Here you can find my public projects, such as Pyhton (finance and physics simulations), Salesforce codes, and so on...",
        "videogame-home-page": "Videogame project Work in Progress... I\'m still learning Unreal Engine 4",
        "resources-home-page": "Here you can find links to my documents/credentials/CV, and so on...",
        "change-logs-home-page": "Here you can see the history site versioning",
        "change-logs-version-tag": "Version",
        "change-logs-date-tag": "Date",
        "change-logs-desc-tag": "Description",
        "python-tag": "Pyhton",
        "physics-tag": "Physics",
        "finance-tag": "Finance",
        "physics-sim-gr-earth-tag": "Physics Simulations - GR Earth motion",
        "physics-sim-gr-earth-desc": "Simulation of Earth trajectory around Sun, with emphasized General Relativity correction",
        "finance-lstm-sims-tag": "Finance LSTM assets price predictions",
        "finance-lstm-sims-desc": "Prediction of asset price over time with LSTM model",
        "montecarlo-sims-tag": "Montecarlo Portfoglio Simulations",
        "montecarlo-sims-desc": "Portfoglio Montecarlo simulation for opmimize the assets allocation",
        "resources-github-tag": "GitHub Documents",
        "resources-cv-tag": "CV",
        "resources-certifications-tag": "Certifications",
        "log-desc-v-0-6-0-a": "Added language switch",
        "log-desc-v-0-5-0-a": "Added contents, links and sections",
        "log-desc-v-0-4-0-a": "Enhanced names and sections",
        "log-desc-v-0-3-2-a": "Fixed dark mode styles and mobile navigation",
        "log-desc-v-0-3-1-a": "Added popup warning and fixed dark mode issues",
        "log-desc-v-0-3-0-a": "Added dark mode and enhanced social icons",
        "log-desc-v-0-2-1-a": "Enhanced desktop and mobile menù graphics",
        "log-desc-v-0-2-0-a": "Enhanced mobile menù",
        "log-desc-v-0-1-0-a": "First structure"
    }
};

// Call functions on page load
window.addEventListener('DOMContentLoaded', function() {
    setThemeFromSessionStorage(); // Apply the stored theme immediately
    sessionStorage.setItem('currentLanguage', sessionStorage.getItem('currentLanguage') ? sessionStorage.getItem('currentLanguage') : 'ita');
    setLanguageFromSessionStorage(); // Set the language on page load
});

var themeToggle = document.getElementById('theme-toggle');
var themeIcon = document.getElementById('theme-icon');

// Function to set the theme based on sessionStorage
function setThemeFromSessionStorage() {                                                                   
    const theme = sessionStorage.getItem('theme');
    if(theme == null) sessionStorage.setItem('theme', 'light');
    darkModeManagement(false);
}

// Add an event handler to the button
themeToggle.addEventListener('click', () => {
    darkModeManagement(true);
});

var headerTheme = document.getElementById('header' + (currentPage ? currentPage : 'index'));
var containerTheme = document.getElementById('container' + (currentPage ? currentPage : 'index'));
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
    themeToggle.style.backgroundColor = '#6ab2ff'; // Blue background for light theme
    themeToggle.style.color = itemDarkColor; // White text for light theme
    containerTheme.style.background = `linear-gradient(to right, #e5e5e5, rgb(255, 165, 0))`;
    containerTheme.style.color = itemLightColor; // Change text color for dark mode
    headerTheme.style.background = `linear-gradient(45deg, rgb(255, 165, 0), rgb(55, 255, 0))`;
    headerTheme.style.color = itemLightColor; // Change text color for dark mode
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
    themeToggle.style.backgroundColor = '#002eff'; // Yellow background for dark theme
    themeToggle.style.color = itemLightColor; // Change text color for dark mode
    containerTheme.style.background = `linear-gradient(to right, #000, rgb(165, 100, 100))`;
    containerTheme.style.color = itemDarkColor; // White text for light mode
    headerTheme.style.background = `linear-gradient(45deg, rgb(165, 100, 100), rgb(100, 120, 150))`;
    headerTheme.style.color = itemDarkColor; // Change text color for dark mode
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

// Function to update the language when clicking on a flag
function updateLanguage(flag) {
    document.querySelectorAll('.language-flag').forEach(function(f) {
        if (f !== flag) {
            f.classList.add('inactive-flag');
        } else {
            f.classList.remove('inactive-flag');
            sessionStorage.setItem('currentLanguage', flag.getAttribute('data-lang'));
            updatePageLanguage(); // Update text in the new language
        }
    });
}

// Event handler for language change via flags
document.querySelectorAll('.language-flag').forEach(function(flag) {
    flag.addEventListener('click', function() {
        updateLanguage(flag);
    });
});

// Function to set the language based on sessionStorage
function setLanguageFromSessionStorage() {
    document.querySelectorAll('.language-flag').forEach(function(f) {
        var currentLanguage = sessionStorage.getItem('currentLanguage');
        if (f.getAttribute('data-lang') !== currentLanguage) {
            f.classList.add('inactive-flag');
        } else {
            f.classList.remove('inactive-flag');
        }
    });
    updatePageLanguage();
}

// Function to update text based on the current language
function updatePageLanguage() {
    var currentLanguage = sessionStorage.getItem('currentLanguage');
    var elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(function(element) {
        var key = element.getAttribute('data-translate');
        element.innerHTML = translations[currentLanguage][key];
    });
}
