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