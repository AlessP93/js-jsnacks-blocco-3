// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. 
// Ogni volta che ne crei uno, stampalo a schermo.

// chiedi all utente un numero che noi chiameremo N
const N = Number(prompt("Inserisci un numero"));

// genera tanti array QUANTI (N) ne scrive l utente
for (let i = 0; i < N; i++) {
    const number = [];
    // ogni array è formato da 10 numeri casuali tra 1 e 100
    for (let y = 0; y < 10; y++) {
        // ogni elemento è un numero casuale tra 1 e 100
        number.push(Math.floor(Math.random() * 100) + 1); 
        
    }
    console.log(number)
}

// ogni array creato viene stamapto in console