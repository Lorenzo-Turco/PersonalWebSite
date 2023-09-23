// script.js
document.getElementById("sezione1").addEventListener("click", function (e) {
    e.preventDefault();
    nascondiIntestazione();
    caricaSottosezione("sottosezione1.html");
    chiudiMenu(); // Chiudi il menù quando un elemento di navigazione viene cliccato
});

document.getElementById("sezione2").addEventListener("click", function (e) {
    e.preventDefault();
    nascondiIntestazione();
    caricaSottosezione("sottosezione2.html");
    chiudiMenu(); // Chiudi il menù quando un elemento di navigazione viene cliccato
});

document.getElementById("sezione3").addEventListener("click", function (e) {
    e.preventDefault();
    nascondiIntestazione();
    caricaSottosezione("sottosezione3.html");
    chiudiMenu(); // Chiudi il menù quando un elemento di navigazione viene cliccato
});

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

const linkTornaLanding2 = document.getElementById("torna-landing-2");
if (linkTornaLanding2) {
    linkTornaLanding2.addEventListener("click", function (e) {
        e.preventDefault();
        mostraIntestazione();
        caricaSottosezione("main.html");
    });
}

const linkTornaLanding3 = document.getElementById("torna-landing-3");
if (linkTornaLanding3) {
    linkTornaLanding3.addEventListener("click", function (e) {
        e.preventDefault();
        mostraIntestazione();
        caricaSottosezione("main.html");
    });
}

const linkTornaLanding1 = document.getElementById("torna-landing-1");
if (linkTornaLanding1) {
    linkTornaLanding1.addEventListener("click", function (e) {
        e.preventDefault();
        mostraIntestazione();
        caricaSottosezione("main.html");
    });
}