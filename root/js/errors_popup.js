/* errors_popup.js */

document.addEventListener("DOMContentLoaded", function () {
    // Verifica se il flag "popupShown" è presente in sessionStorage
    var popupShown = sessionStorage.getItem("popupShown");

    // Riferimento al popup
    var popup = document.getElementById("popup");

    // Riferimento al bottone OK
    var okButton = document.getElementById("popup-ok-button");

    // Funzione per chiudere il popup
    function closePopup() {
        // Nascondi il popup
        popup.style.display = "none";
        
        // Memorizza lo stato del popup in sessionStorage
        sessionStorage.setItem("popupShown", "true");
        
        // Rimuovi l'evento click dal bottone OK dopo la chiusura
        okButton.removeEventListener("click", closePopup);
    }

    // Se il popup non è mai stato mostrato, visualizzalo
    if (popupShown == null || !popupShown) {
        popup.style.display = "block";

        // Aggiungi l'evento click al bottone OK
        okButton.addEventListener("click", closePopup);
    } else {
        closePopup();
    }
});
