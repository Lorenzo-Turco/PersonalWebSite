/* errors_popup.js */

document.addEventListener("DOMContentLoaded", function () {
    // Check if the "popupShown" flag is present in sessionStorage
    var popupShown = sessionStorage.getItem("popupShown");

    // Reference to the popup
    var popup = document.getElementById("popup");

    // Reference to the OK button
    var okButton = document.getElementById("popup-ok-button");

    // Function to close the popup
    function closePopup() {
        // Hide the popup
        popup.style.display = "none";
        
        // Store the popup state in sessionStorage
        sessionStorage.setItem("popupShown", "true");
        
        // Remove the click event from the OK button after closing
        okButton.removeEventListener("click", closePopup);
    }

    // If the popup has never been shown, display it
    if (popupShown == null || !popupShown) {
        popup.style.display = "block";

        // Add the click event to the OK button
        okButton.addEventListener("click", closePopup);
    } else {
        closePopup();
    }
});
