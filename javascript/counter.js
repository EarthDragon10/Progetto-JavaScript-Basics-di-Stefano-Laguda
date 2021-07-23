// ---- Codifica per la modifica del DOM ----

// * Sezione della Scritta del Counter *
// 1. Creo elementi HTML
let mainSite = document.createElement("main");
let sectionCounter = document.createElement("section");
let divCounter = document.createElement("div");
let h2Counter = document.createElement("h2");
// 2. Imposto le classi e ID
sectionCounter.classList.add("counter");

// 3. Riempimento di contenuto
divCounter.innerHTML = "<p class='zero'>0</p>";
h2Counter.innerHTML = "Counter";

// 4. Inserimento Elementi HTML tramite il DOM
document.body.prepend(mainSite);
mainSite.prepend(sectionCounter);
sectionCounter.prepend(divCounter);
divCounter.after(h2Counter);

// --- Sezione dei bottoni ---
// 1. Creo elementi HTML
let sectionButtons = document.createElement("section");
let divAddLess = document.createElement("div");
let buttonAdd = document.createElement("button");
let buttonLess = buttonAdd.cloneNode(false);

let divReset = document.createElement("div");
let buttonReset = buttonAdd.cloneNode(false);

// 2. Imposto le classi e ID
sectionButtons.classList.add("buttons");
divAddLess.classList.add("add-less");
buttonAdd.setAttribute("id", "more");
buttonLess.setAttribute("id", "less");

divReset.classList.add("reset");
buttonReset.setAttribute("id", "btn-reset");

// 3. Riempimento di contenuto
buttonAdd.innerHTML = "+";
buttonLess.innerHTML = "-";
buttonReset.innerHTML = "Reset";

// 4. Inserimento Elementi HTML tramite il DOM
sectionCounter.after(sectionButtons);
sectionButtons.prepend(divAddLess);
divAddLess.prepend(buttonLess);
divAddLess.append(buttonAdd);
divAddLess.after(divReset);
divReset.prepend(buttonReset);

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