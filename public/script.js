// script.js
/*document.getElementById("aboutme").addEventListener("click", function (e) {
    e.preventDefault();
    nascondiIntestazione();
    caricaSottosezione("aboutme.html");
    chiudiMenu();
});

document.getElementById("aboutme-link").addEventListener("click", function (e) {
    e.preventDefault();
    nascondiIntestazione();
    caricaSottosezione("aboutme.html");
    chiudiMenu();
});

document.getElementById("finance").addEventListener("click", function (e) {
    e.preventDefault();
    nascondiIntestazione();
    caricaSottosezione("finance.html");
    chiudiMenu();
});

document.getElementById("sezione3").addEventListener("click", function (e) {
    e.preventDefault();
    nascondiIntestazione();
    caricaSottosezione("sottosezione3.html");
    chiudiMenu();
});

document.getElementById("logs-link").addEventListener("click", function (e) {
    e.preventDefault();
    nascondiIntestazione();
    caricaSottosezione("logs.html");
    chiudiMenu();
});*/

// Funzione per nascondere l'intestazione
function nascondiIntestazione() {
    const header = document.querySelector(".header");
    header.style.display = "none";
}

// Funzione per mostrare l'intestazione
function mostraIntestazione() {
    const header = document.querySelector(".header");
    header.style.display = "block";
}

// Funzione per caricare le sottosezioni
function caricaSottosezione(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("contenuto").innerHTML = data;
        })
        .catch(error => console.error(error));
}

document.getElementById("menuIcon").addEventListener("click", function () {
    toggleSidebar();
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.getElementById("menuIcon");

    sidebar.classList.toggle("active");
    menuIcon.classList.toggle("active");
}

function chiudiMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.getElementById("menuIcon");

    sidebar.classList.remove("active");
    menuIcon.classList.remove("active");
}

/*const linkTornaLanding1 = document.getElementById("torna-landing-1");
if (linkTornaLanding1) {
    linkTornaLanding1.addEventListener("click", function (e) {
        e.preventDefault();
        mostraIntestazione();
        caricaSottosezione("index.html");
    });
}

const linkTornaLanding2 = document.getElementById("torna-landing-2");
if (linkTornaLanding2) {
    linkTornaLanding2.addEventListener("click", function (e) {
        e.preventDefault();
        mostraIntestazione();
        caricaSottosezione("index.html");
    });
}

const linkTornaLanding3 = document.getElementById("torna-landing-3");
if (linkTornaLanding3) {
    linkTornaLanding3.addEventListener("click", function (e) {
        e.preventDefault();
        mostraIntestazione();
        caricaSottosezione("index.html");
    });
}

const linkTornaLanding4 = document.getElementById("torna-landing-4");
if (linkTornaLanding4) {
    linkTornaLanding4.addEventListener("click", function (e) {
        e.preventDefault();
        mostraIntestazione();
        caricaSottosezione("index.html");
    });
}*/