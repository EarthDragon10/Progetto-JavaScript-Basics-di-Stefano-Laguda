// ---- Codifica per la modifica del DOM ----

// * Sezione della Scritta del Counter *
// 1. Creo elementi HTML

let sectionCounter = document.createElement("section");
let divCounter = document.createElement("div");
let h2Counter = document.createElement("h2");
// 2. Imposto le classi e ID
sectionCounter.classList.add("counter");

// 3. Riempimento di contenuto
divCounter.innerHTML = "<p>0</p>";
h2Counter.innerHTML = "Counter";

// 4. Inserimento Elementi HTML tramite il DOM
document.body.prepend(sectionCounter);
sectionCounter.prepend(divCounter);
divCounter.after(h2Counter);

// --- Sezione dei bottoni ---
// 1. Creo elementi HTML


// 2. Imposto le classi e ID


// 3. Riempimento di contenuto


// 4. Inserimento Elementi HTML tramite il DOM


// ---- Codice per il funzionamento del counter ----

// Inizializzo le variabili
let addCount = document.getElementById("more");
let lessCount = document.getElementById("less");
let resetCount = document.getElementById("btn-reset");
// Variabili per il counter
let count = 0;
let counterValue = document.querySelector(".zero");

const incrementValue = () => {
    count++;
    counterValue.innerHTML = count;
}

const decrementValue = () => {
    count--;
    counterValue.innerHTML = count;
}

const resetValue = () => {
    count = 0;
    counterValue.innerHTML = count;
}

addCount.onclick = incrementValue;
lessCount.onclick = decrementValue;
resetCount.onclick = resetValue;