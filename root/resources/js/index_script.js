/* index_script.js */

const currentPage = window.location.pathname.split("/").pop().split(".")[0];

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
    console.log('elements:', elements);
    
    elements.forEach(function(element) {
        var key = element.getAttribute('data-translate');
        element.innerHTML = translations[currentLanguage][key];
    });
}
