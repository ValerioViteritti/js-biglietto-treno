/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

const priceKm = 0.21;
// 1 - chiedere all’utente il numero di chilometri che vuole percorrere

let numKm = parseInt(prompt("Comunica quanti chilometri devi percorrere 'numeri interi'"));

// 2 - l’età del passeggero
let ageUser = parseInt(prompt("Comunica quanti anni hai. 'anni compuiti'"));

    // console punti 1 - 2.
    console.log("Chilometri da effettuare: ", numKm, " - Anni Utente: ", ageUser);



// 3 - calcolare il prezzo totale del viaggio


    // 3.1 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let totalPrice = priceKm * numKm;
    let totalPriceX = Math.round(totalPrice * 100) / 100

        // console punti 3.1
        console.log("Il prezzo del biglietto è: ", totalPrice );
        console.log("Il prezzo del biglietto arrotondato è: ", totalPriceX );


    // 3.2 - va applicato uno sconto del 20% per i minorenni

    let totalPrice20 = (priceKm * numKm) /100 * 80;
    let totalPrice20X = Math.round(totalPrice20 * 100) / 100

        // console punti 3.2
        console.log("Il prezzo del biglietto con lo sconto del 20% riservato agli under18 è: ", totalPrice20);
        console.log("Il prezzo del biglietto con lo sconto del 20% riservato agli under18 arrotondato è: ", totalPrice20X);

    // 3.3 - va applicato uno sconto del 40% per gli over 65

    let totalPrice40 = (priceKm * numKm) /100 * 60;
    let totalPrice40X = Math.round(totalPrice40 * 100) / 100

        // console punti 3.3
        console.log("Il prezzo del biglietto con lo sconto del 40% riservato agli over65 è: ", totalPrice40);
        console.log("Il prezzo del biglietto con lo sconto del 40% riservato agli over65 arrotondato è: ", totalPrice40X);


// 4 - Risultato a schermo

let finalPrice;

    if (ageUser <= 18){
        finalPrice = totalPrice20X;

    } else if (ageUser >= 65){
        finalPrice = totalPrice40X;

    } else {
        finalPrice = totalPriceX;
    }

    console.log(finalPrice);


document.getElementById("xxx").innerHTML = "Il prezzo del tuo biglietto è: " + finalPrice + "€";

    