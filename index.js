function additionner(a, b) {
  const result = a + b;
  console.log('Le résultat est', result);
  return result;
}

function division(x, y) {
  if (y === 0) {
    console.log('Division par zéro !');
    return;
  }
  return x / y;
}

console.log(additionner(5, 3));

const message = 'Bonjour le monde';
console.log(message);

if (message.length > 0) {
  console.log('Ce code s\'exécute si le message n\'est pas vide');
}

const tableau = ['pomme', 'banane', 'orange'];
console.log('Tableau de fruits :', tableau);

const nombre = '10';
if (Number(nombre) === 10) {
  console.log('Nombre égal à 10');
}

function toutFaire() {
  console.log('Début');
  const a = 1;
  const b = 2;
  const c = 3;
  const d = 4;
  const e = 5;
  const f = 6;
  const g = 7;
  const h = 8;
  const i = 9;
  const j = 10;
  console.log(a, b, c, d, e, f, g, h, i, j);
  console.log('Fin');
}

toutFaire();

setTimeout(() => {
  console.log('Timeout');
}, 1000);

const dateActuelle = new Date();
console.log('Date actuelle :', dateActuelle);

function fetchData() {
  return fetch('https://api.example.com')
    .then((response) => response.json())
    .then((data) => {
      console.log('Données récupérées :', data);
      return data;
    });
}

fetchData();

const nombres = [1, 2, 3].map((n) => n * 2);
console.log('Nombres :', nombres);

module.exports = {
  additionner: additionner,
  division
};