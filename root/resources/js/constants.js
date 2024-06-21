/* constants.js */

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
        "log-desc-v-0-7-0-a": "Corrette descrizioni nei log e rifattorizzazione delle costanti",
        "log-desc-v-0-6-1-a": "Corretto selettore della lingua e aggiunta traduzione dei log",
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
        "log-desc-v-0-7-0-a": "Fixed log descriptions and refactored constants",
        "log-desc-v-0-6-1-a": "Fixed language selector and added log translation",
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

// dark mode colors
const backgroundLightColor = '#6bc4ffd8';
const itemLightColor = '#333';
const backgroundDarkColor = '#6aa55ad8';
const itemDarkColor = '#e7e7e7';