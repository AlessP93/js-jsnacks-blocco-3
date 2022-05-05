// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

//1. crea un array vuoto
let genericNumber = [];
let total = 0;

do {
    // chiedo all' utente un numero
    let askNumber = Number(prompt("inserisci un numero da 1 a 50"));
    // inserisco il numero dentro l array
    genericNumber.push(askNumber);
    // sommo i numeri dentro l array
    total = total + askNumber;
    // FINTANTO CHE la somma dei numeri contenuti nell array è minore di 50
    // ALLORA continuo a chiedere il numero all utente 
    } while (total < 50)

    // stampo in console log
    console.log (genericNumber)

