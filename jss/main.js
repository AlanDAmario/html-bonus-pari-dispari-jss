'use strict';

//SCELTA DELL UTENTE PARI O DISPARI//
const userChoice = prompt('pari o dispari');
console.log(userChoice);

//SCELTA NUMERO UTENTE//
const userNumber = Number(prompt('scegli un mnumero tra 1 e 9'));
console.log(userNumber, 'scelta dell utente');


//SCELTA CASUALE PC//

const pcNumber = Math.floor(Math.random() * 9) + 1;
console.log(pcNumber, 'scelta del pc');



if (userChoice === 'pari' || userChoice === 'dispari') {

    // SOMMA SCELTE DELL UTENTE E DEL PC//

    const sum = pcNumber + userNumber;
    console.log('la somma è...', sum);

    //RESULT = 0 (PARI) RESULT = 1 (DISPARI)//
    let result = '';

    //RISULTATO SE PARI O DISPARI//
    if (sum % 2 === 0) {
        result = 'pari';

    } else {
        result = 'dispari';
    }

    console.log(result, sum);


    //DEFINIRE VINCITORE//

    let win = '';


    if (result === 'pari' && userChoice === 'pari') {
        win = 'Hai vinto';

    } else if (result === 'dispari' && userChoice === 'dispari') {
        win = 'Hai vinto';

    } else {
        win = 'Hai perso';
    }

    console.log(win);

    //OUTPUT//
    document.getElementById('winner').innerHTML = win;
} else {
    console.log('SCRIVI BENE');
}




