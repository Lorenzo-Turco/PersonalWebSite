/* header-colors */

const currentPageForHeader = window.location.pathname.split("/").pop().split(".")[0];

// Trova il pulsante del cambio tema e l'icona del tema
var headerTheme = document.getElementById('header'+currentPageForHeader);

function followMouse(event) {
    const mouseX = event.clientX / window.innerWidth;
    const shapeSize = 0.5;
    var colorStart;
    var colorEnd;
    if (document.body.classList.contains('dark-theme')) {
        colorStart = `rgb(165, 100, 100)`;
        colorEnd = `rgb(${100*(1 - shapeSize*(mouseX - 0.5)*(mouseX - 0.5))}, ${120*(1 - shapeSize*(mouseX - 0.5)*(mouseX - 0.5))}, 150)`;
    } else {
        colorStart = `rgba(255, 165, 0)`;
        colorEnd = `rgb(${55*(1 - shapeSize*(mouseX - 0.5)*(mouseX - 0.5))}, ${255*(1 - shapeSize*(mouseX - 0.5)*(mouseX - 0.5))}, 0)`;
    }
    headerTheme.style.background = `linear-gradient(45deg, ${colorStart}, ${colorEnd})`;
}
