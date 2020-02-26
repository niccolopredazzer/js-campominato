//il computer genera 16 numeri da 1 a 100
//l'utente inserisce un numero da 1 a 100
//se il numero è nella lista dei 16 random il gioco termina, altrimenti si chiede all'utente un altro numero
//la partita termina quando l'utente inserisce uno dei 16 numeri random oppure se li inserisce tutti corretti (tutti tranne quei 16)
//in seguito stampiamo quanti numeri sono stati inseriti da un utente

var listaNumeriSfortunati = [];                //creo il mio array vuoto che verrà riempito dai 16 numeri maledetti
var dimCampo = sceltaDifficolta();
var totaleMine = 16;
var sentinella = false;

for (var i = 0; i <= totaleMine; i++) {                //questo ciclo mi consente di riempire l'array listaNumeriSfortunati con 16 numeri random da 1 a 100
    var numeroSfortunato = generaRandomMinMax(1, 100);
    if (!listaNumeriSfortunati.includes(numeroSfortunato)) {
        listaNumeriSfortunati.push(numeroSfortunato);
    }

}
console.log(listaNumeriSfortunati);


var numeriDatiDaUtente = [];                   //questo array vuoto verrà riempito dai numeri inseriti dall'utente e mi serve per capire quanti ne ha inseriti grazie a length


while (numeriDatiDaUtente.length <= dimCampo - totaleMine) {
    var numeroInserito = parseInt(prompt('inserisci un numero tra 1 e ' + dimCampo));
    if (true) {

    }
        if (listaNumeriSfortunati.includes(numeroInserito)) {
            console.log('Mi dispiace il gioco è terminato, hai perso');
            break;
        } else if (numeriDatiDaUtente.includes(numeroInserito)) {
            var numeroInserito = parseInt(prompt('inserisci un numero diverso'));
        } else if (numeriDatiDaUtente.length == dimCampo - totaleMine) {
            console.log('hai vinto');
            break;
        } else {
            numeriDatiDaUtente.push(numeroInserito);
        }
}
console.log('Il numero di volte che l\'utente ha inserito un numero giusto è: ' + numeriDatiDaUtente.length);

function sceltaDifficolta() {
    var scelta = parseInt(prompt('Inserisci la difficoltà tra 1, 2 o 3'));
    switch (scelta) {
        case 1:
            var dimCampo = 100;
            break;
        case 2:
            var dimCampo = 80;
            break;
        case 3:
            var dimCampo = 50;
            break;
        default:
            var dimCampo = 100;
    }
    return dimCampo;
}

function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
