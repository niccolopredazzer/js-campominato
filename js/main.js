//il computer genera 16 numeri da 1 a 100
//l'utente inserisce un numero da 1 a 100
//se il numero è nella lista dei 16 random il gioco termina, altrimenti si chiede all'utente un altro numero
//la partita termina quando l'utente inserisce uno dei 16 numeri random oppure se li inserisce tutti corretti (tutti tranne quei 16)
//in seguito stampiamo quanti numeri sono stati inseriti da un utente

var listaNumeriSfortunati = [];               //creo il mio array vuoto che verrà riempito dai 16 numeri maledetti

for (var i = 0; i < 16; i++) {                //questo ciclo mi consente di riempire l'array listaNumeriSfortunati con 16 numeri random da 1 a 100
    var numeroSfortunato = generaRandomMinMax(1, 100);
    listaNumeriSfortunati.push(numeroSfortunato);
}
console.log(listaNumeriSfortunati);

var numeroInserito = parseInt(prompt('inserisci un numero'));
var numeriDatiDaUtente = [];

for (var i = 0; i < 84; i++) {                 //questo ciclo for mi serve per permettere all'utente di inserire il numero massimo di numeri corretti (84)
    if (listaNumeriSfortunati.includes(numeroInserito)) {
        console.log('Mi dispiace il gioco è terminato, hai perso');
    }else {
        var numeroInserito = parseInt(prompt('inserisci un altro numero'));
        numeriDatiDaUtente.push(numeroInserito);
    }
}
console.log('Il numero di volte che l\'utente ha inserito un numero giusto è: ' + numeriDatiDaUtente.length);



function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
