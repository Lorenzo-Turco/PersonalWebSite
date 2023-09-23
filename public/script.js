document.addEventListener("DOMContentLoaded", function () {
    // Aggiungi un gestore di eventi per il clic su link nella barra di navigazione
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Previeni il comportamento predefinito del link

            // Ottieni l'ID della sezione dal link
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Nascondi tutte le sezioni
            const sections = document.querySelectorAll(".section");
            sections.forEach((section) => {
                section.style.display = "none";
            });

            // Mostra solo la sezione di destinazione
            targetSection.style.display = "block";
        });
    });
});
