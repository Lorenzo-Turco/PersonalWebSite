// script.js
document.getElementById("sezione1").addEventListener("click", function (e) {
    e.preventDefault(); // Evita di seguire il link
    caricaSottosezione("sottosezione1.html");
});

document.getElementById("sezione2").addEventListener("click", function (e) {
    e.preventDefault();
    caricaSottosezione("sottosezione2.html");
});

document.getElementById("sezione3").addEventListener("click", function (e) {
    e.preventDefault();
    caricaSottosezione("sottosezione3.html");
});

function caricaSottosezione(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("contenuto").innerHTML = data;
        })
        .catch(error => console.error(error));
}
