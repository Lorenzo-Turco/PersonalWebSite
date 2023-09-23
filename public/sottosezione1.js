// sottosezione1.js
const apiKey = 'YOUR_API_KEY'; // Sostituisci con la tua chiave API Alpha Vantage
const symbol = 'GOOGL'; // Simbolo di Google

// Funzione per mostrare l'indicatore di caricamento
function mostraIndicatoreCaricamento() {
    const indicatoreCaricamento = document.getElementById("indicatore-caricamento");
    indicatoreCaricamento.style.display = "block";
}

// Funzione per nascondere l'indicatore di caricamento
function nascondiIndicatoreCaricamento() {
    const indicatoreCaricamento = document.getElementById("indicatore-caricamento");
    indicatoreCaricamento.style.display = "none";
}

function ottieniPrezzoAzioni() {
    mostraIndicatoreCaricamento(); // Mostra l'indicatore di caricamento prima della richiesta

    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            nascondiIndicatoreCaricamento(); // Nascondi l'indicatore di caricamento una volta ricevuti i dati

            // Estrai il prezzo delle azioni dalla risposta API
            const timeSeries = data['Time Series (5min)'];
            const lastRefreshed = Object.keys(timeSeries)[0];
            const price = timeSeries[lastRefreshed]['1. open'];

            // Aggiungi il prezzo delle azioni all'elemento "prezzo-azioni"
            const prezzoAzioniElement = document.getElementById("prezzo-azioni");
            prezzoAzioniElement.innerHTML = `<h3>Prezzo delle Azioni di Google</h3>
                                            <p>Ultimo Prezzo: $${price}</p>`;
        })
        .catch(error => {
            nascondiIndicatoreCaricamento(); // Nascondi l'indicatore di caricamento in caso di errore
            console.error(error);
        });
}

// Chiamata alla funzione per ottenere il prezzo delle azioni quando la pagina è caricata
ottieniPrezzoAzioni();
