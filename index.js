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

// doplnění hry-výhra

const herniPlocha = 10; // 10x10

//fce vrací pro dané políčko objekt s číslem řádku a sloupce
const ziskejPozici = (tlacitko) => {
  let tlacitkoIndex = 0;
  while (tlacitkoIndex < tlacitka.length) {
    if (tlacitko === tlacitka[tlacitkoIndex]) {
      break;
    }
    tlacitkoIndex++;
  }

  return {
    radek: Math.floor(tlacitkoIndex / herniPlocha),
    sloupec: tlacitkoIndex % herniPlocha,
  };
};
//console.log(ziskejPozici(tlacitka[94]));

//fce vrací pro číslo řádku a sloupce konkrétní tlačítko

const ziskejTlacitko = (radek, sloupec) =>
  tlacitka[radek * herniPlocha + sloupec];
//console.log(ziskejTlacitko(5, 5));

//fce, která vrací symbol políčka

const ziskejSymbol = (tlacitko) => {
  if (tlacitko.classList.contains('tlacitko--kolecko')) {
    return 'circle';
  } else if (tlacitko.classList.contains('tlacitko--krizek')) {
    return 'cross';
  }
};

//fce, která zjišťuje, jestli je tah výherní
const pocetVyhernichSymbolu = 5;
const vyherniTah = (tlacitko) => {
  const vychoziPozice = ziskejPozici(tlacitko);
  const symbol = ziskejSymbol(tlacitko);

  let i;
  let vRadku = 1; // Jednička pro právě vybrané políčko

  // Koukni doleva
  i = vychoziPozice.sloupec;
  while (
    i > 0 &&
    symbol === ziskejSymbol(ziskejTlacitko(vychoziPozice.radek, i - 1))
  ) {
    vRadku++;
    i--;
  }

  // Koukni doprava
  i = vychoziPozice.sloupec;
  while (
    i < herniPlocha - 1 &&
    symbol === ziskejSymbol(ziskejTlacitko(vychoziPozice.radek, i + 1))
  ) {
    vRadku++;
    i++;
  }
  if (vRadku >= pocetVyhernichSymbolu) {
    return true;
  }

  //Koukni nahoru
  let veSloupci = 1;
  i = vychoziPozice.radek;
  while (
    i > 0 &&
    symbol === ziskejSymbol(ziskejTlacitko(i - 1, vychoziPozice.sloupec))
  ) {
    veSloupci++;
    i--;
  }
  //Koukni dolu
  i = vychoziPozice.radek;
  while (
    i < herniPlocha - 1 &&
    symbol === ziskejSymbol(ziskejTlacitko(i + 1, vychoziPozice.sloupec))
  ) {
    veSloupci++;
    i++;
  }
  if (veSloupci >= pocetVyhernichSymbolu) {
    return true;
  }
  return false;
};
