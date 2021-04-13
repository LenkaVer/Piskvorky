'use strict';

let naTahu = 'circle';

const tlacitka = document.querySelectorAll('button');

const vypisTlacitko = (tlacitko) => {
  tlacitko.addEventListener('click', () => {
    const ikonaNaTahu = document.querySelector('.ikona-na-tahu');
    if (
      tlacitko.classList.contains('tlacitko--kolecko') ||
      tlacitko.classList.contains('tlacitko--krizek')
    ) {
      return;
    }
    if (naTahu === 'circle') {
      tlacitko.classList.add('tlacitko--kolecko');
      naTahu = 'cross';
      ikonaNaTahu.src = 'img/cross.svg';
      ikonaNaTahu.alt = 'na tahu krizek';
    } else {
      tlacitko.classList.add('tlacitko--krizek');
      naTahu = 'circle';
      ikonaNaTahu.src = 'img/circle.svg';
      ikonaNaTahu.alt = 'na tahu kolecko';
    }
    tlacitko.setAttribute('disabled', '');
  });
};
tlacitka.forEach(vypisTlacitko);
