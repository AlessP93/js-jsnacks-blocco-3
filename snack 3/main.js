// Crea due tag div con due id diversi
// un div avrà il testo colorato di rosso mentre l’altro di verde
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari

//1. creo 2 div vuoti e gli assegno l ID

//2. il primo div sarà ROSSO 
const divRosso = document.createElement("div");
divRosso.id = "Rosso";
//3. il secondo div sarà VERDE
const divVerde = document.createElement("div");
divVerde.id = "Verde";

//4. creo un array di tot numeri
let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
for (let i = 0; i < array.length; i++) {
    //5. PARI VERDI - DISPARI ROSSI
    if (array[i] % 2 === 0) {
        divVerde.innerText += array[i] + " "
    } else {
        divRosso.innerText += array[i] + " "
    }
}
//5. prendo una classe esistente da html
let container = document.querySelector(".container");
//6. appendo elementi da js a html
container.append(divVerde, divRosso);

//7. stampo in console il sisultato
console.log(divVerde, divRosso);
