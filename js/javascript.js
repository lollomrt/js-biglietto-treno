// 1. Dare la possibilità di inserire il numero di klometri
const prezzo_km = parseInt(prompt("quanti km devi fare?"));
console.log(prezzo_km)

// 2. Dare la possibilità di inserire età
const eta = parseInt(prompt("quanti anni hai?"));
console.log(eta)

// 3. Definisco il rezzo del biglietto senza sconti moltiplicando 0.20€ per il numero di km
const prezzo_intero = prezzo_km * 0.2;
console.log(prezzo_intero)

// 4. determinare il prezzo finale sottraendo lo sconto età al prezzo intero
//     4.1 calcolare lo sconto per i minori di 18 anni - 20%
const prezzo_s_minori = prezzo_intero * 20 / 100;
console.log(prezzo_s_minori)

//     4.2 calcolare sconto per gli over 65 - 40%
const prezzo_s_over65 = prezzo_intero * 40 / 100;
console.log(prezzo_s_over65)

// 5. Determinare le condizioni affinchè venga calcolato un prezzo piuttosto che un altro
//     5.1 se ho meno di 18 anni
//     5.2 se ho 65 anni o più
//     5.3 se non ho ditirro allo sconto (18-64)
let prezzo_finito

if (eta < 18) {
    prezzo_finito = prezzo_intero - prezzo_s_minori
}

else if (eta >= 65) {
    prezzo_finito = prezzo_intero - Prezzo_s_over65
}

else {
    prezzo_finito = prezzo_intero
}
// 6. Display del pezzo finito