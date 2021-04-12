'use strict';

let naTahu = 'circle';

const tlacitka = document.querySelectorAll('button');

const vypisTlacitko = (tlacitko) => {
  tlacitko.addEventListener('click', (event) => {
    const stiskleTlacitko = event.target;
    const ikonaNaTahu = document.querySelector('.ikona-na-tahu');
    // if (
    //   stiskleTlacitko.classList.contains('tlacitko--kolecko') ||
    //   stiskleTlacitko.classList.contains('tlacitko--krizek')
    // ) {
    //   return;
    // } tahle část kódu mi nefunguje správně
    if (naTahu === 'circle') {
      stiskleTlacitko.classList.add('tlacitko--kolecko');
      naTahu = 'cross';
      ikonaNaTahu.src = 'img/cross.svg';
      ikonaNaTahu.alt = 'na tahu krizek';
    } else {
      stiskleTlacitko.classList.add('tlacitko--krizek');
      naTahu = 'circle';
      ikonaNaTahu.src = 'img/circle.svg';
      ikonaNaTahu.alt = 'na tahu kolecko';
    }
    event.target.setAttribute('disabled', '');
  });
};
tlacitka.forEach(vypisTlacitko);
